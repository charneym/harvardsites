# Hero v2 (coordinator review): a crafted render of a GENERIC, unbranded bedside smart speaker, the device class Media Rez
# uses to deliver CBT-I (NIH RePORTER 11348878: "a screen-free, conversational, AI-driven smart speaker, custom lighting").
# A low fabric-wrapped puck with a soft matte cap and a thin status light ring that runs from the logo's blue to its green,
# standing on a dark surface that catches the ring's glow. Ray-marched signed-distance render in numpy; output is RGBA with
# a fully transparent ground (glow and reflection fade to alpha 0), so no box edge can exist (DP/DJ).
# Usage: python3 render.py hero.webp preview.png
import sys, numpy as np
from PIL import Image
N=2800; SS=2
R=1.0; HH=0.46; RB=0.2          # puck radius, half height, edge rounding
CAMD=5.6; EL=np.radians(19)
ys,xs=np.mgrid[0:N,0:N].astype(np.float32)
u=(xs-N/2)/(N/2)*1.02; v=-(ys-N/2)/(N/2)*1.02+0.1
ce=np.array([0,np.sin(EL)*CAMD,np.cos(EL)*CAMD],np.float32)
fw=-ce/np.linalg.norm(ce); rt=np.cross(fw,[0,1,0]); rt/=np.linalg.norm(rt); up=np.cross(rt,fw)
f=3.15
D=fw[None,None,:]*f+u[...,None]*rt[None,None,:]+v[...,None]*up[None,None,:]
D/=np.linalg.norm(D,axis=-1,keepdims=True)
def sdf(p):
    x,y,z=p[...,0],p[...,1],p[...,2]
    q0=np.sqrt(x*x+z*z)-(R-RB); q1=np.abs(y)-(HH-RB)
    return np.sqrt(np.maximum(q0,0)**2+np.maximum(q1,0)**2)+np.minimum(np.maximum(q0,q1),0)-RB
t=np.full((N,N),3.0,np.float32); hit=np.zeros((N,N),bool)
for i in range(110):
    p=ce+D*t[...,None]; d=sdf(p)
    hit|=d<1e-3; t=np.where(hit,t,t+d*0.9)
P=ce+D*t[...,None]
e=1e-3
def grad(p):
    g=np.zeros_like(p)
    for k in range(3):
        o=np.zeros(3,np.float32); o[k]=e
        g[...,k]=sdf(p+o)-sdf(p-o)
    return g/np.linalg.norm(g,axis=-1,keepdims=True)
Nn=grad(P)
x,y,z=P[...,0],P[...,1],P[...,2]
th=np.arctan2(x,z); rr=np.sqrt(x*x+z*z)
top=(y>HH-RB*0.55)&(rr<R-RB*0.9)
# fabric weave on the sides and shoulder: two fine crossing threads, as normal bumps and albedo
FR=420; FY=FR*1.0
w1=np.sin(th*FR+y*FY); w2=np.sin(th*FR-y*FY)
weave=(w1*w2)
rng=np.random.default_rng(3)
nz=np.asarray(Image.fromarray((rng.random((350,350))*255).astype(np.uint8)).resize((N,N),Image.BICUBIC)).astype(np.float32)/255-.5
fine=nz
bump=0.10*weave+0.04*fine
side=~top
Tn=np.stack([np.cos(th),np.zeros_like(th),-np.sin(th)],-1)
Nb=Nn+side[...,None]*(Tn*(0.06*np.cos(th*FR+y*FY)*w2)[...,None]+np.array([0,1,0])*(0.06*np.cos(y*FY+th*FR)*w1)[...,None]*0.5)
Nb/=np.linalg.norm(Nb,axis=-1,keepdims=True)
alb=np.where(side,0.2+0.035*weave+0.05*fine,0.13)
alb=np.stack([alb*0.9,alb*0.97,alb*1.02],-1)
# lights: soft key from upper left front, cool fill, blue-green rim from behind
L1=np.array([-0.55,0.75,0.45]);L1/=np.linalg.norm(L1)
L2=np.array([0.8,0.25,0.35]);L2/=np.linalg.norm(L2)
L3=np.array([0.3,0.35,-0.9]);L3/=np.linalg.norm(L3)
def lam(Lv,wrap=0.08): return np.clip((Nb@Lv+wrap)/(1+wrap),0,1)
col=alb*(lam(L1)[...,None]*np.array([1.0,0.98,0.95])*2.3+lam(L2)[...,None]*np.array([0.45,0.62,0.8])*0.55)
V=-D
fres=np.clip(1-np.sum(Nb*V,-1),0,1)**3
col+=(lam(L3,0.0)*0.7+fres*0.8)[...,None]*np.array([0.3,0.62,0.74])*0.55
# matte cap: a soft sheen and two faint touch dots
Hh=(L1+V);Hh/=np.linalg.norm(Hh,axis=-1,keepdims=True)
spec=np.clip(np.sum(Nb*Hh,-1),0,1)**18
col+=(top*spec*0.16)[...,None]
col+=(top*np.clip(1-rr/(R-RB*0.9),0,1)*0.04)[...,None]
# the status light ring: a thin band just inside the cap's rim, blue at the left running to green at the right
rad=rr/(R-RB*0.9)
ringd=np.abs(rad-0.86)
hue=np.clip(0.5+0.5*np.sin(th),0,1)
rc=np.stack([0.11+(0.36-0.11)*hue,0.53+(0.78-0.53)*hue,0.86+(0.45-0.86)*hue],-1)
ring=top*np.exp(-(ringd/0.014)**2)*1.7
halo=top*np.exp(-(ringd/0.08)**2)*0.28
col=col+rc*(ring+halo)[...,None]
# ring light spilling over the shoulder onto the fabric
shoulder=side&(y>0)
col+=rc*(shoulder*np.clip((y-0.1)/(HH-0.1),0,1)**3*0.35)[...,None]
col=np.where(hit[...,None],col,0)
alpha=hit.astype(np.float32)
# ground: a dark surface at y=-HH that catches a soft pool of the ring's glow and a dim reflection
tg=(-HH-ce[1])/D[...,1]
G=ce+D*tg[...,None]
gx,gz=G[...,0],G[...,2]
gr=np.sqrt(gx*gx+gz*gz)
ground=(~hit)&(tg>0)
pool=np.exp(-np.maximum(gr-R*0.95,0)**2/0.22)*0.55*np.clip((gr-R*0.9)/0.12,0,1)
gh=np.clip(0.5+0.5*np.sin(np.arctan2(gx,gz)),0,1)
gc=np.stack([0.11+(0.36-0.11)*gh,0.53+(0.78-0.53)*gh,0.86+(0.45-0.86)*gh],-1)
# contact shadow right under the puck
cs=np.exp(-np.maximum(gr-R*0.98,0)**2/0.006)
ga=ground*np.clip(pool*0.9+cs*0.85,0,1)
gcol=gc*(pool*0.55)[...,None]*0+gc*0.5
gcol=gcol*(pool/(pool+cs*0.7+1e-4))[...,None]
col=np.where(ground[...,None],gcol,col); alpha=np.where(ground,ga,alpha)
# tone map and ink grading
col=1-np.exp(-col*1.25)
col=np.clip(col,0,1)**(1/1.08)
ink=np.array([10,17,24])/255.
rgb=col*255
# soft edge antialias: 2x box filter by downsampling a supersampled alpha is skipped; blur alpha edge slightly
im=Image.fromarray(np.dstack([rgb,alpha*255]).astype(np.uint8),'RGBA')
from PIL import ImageFilter
im=im.resize((1400,1400),Image.LANCZOS)
im.save(sys.argv[1],'WEBP',quality=92,method=6)
bg=Image.new('RGBA',im.size,(10,17,24,255)); bg.alpha_composite(im); bg.convert('RGB').resize((700,700)).save(sys.argv[2])
# final radial feather so the glow pool reaches alpha 0 well inside every edge
im=Image.open(sys.argv[1]); A=np.asarray(im).astype(np.float32); n=A.shape[0]
yy,xx=np.mgrid[0:n,0:n]/(n-1); r=np.sqrt((xx-.5)**2+(yy-.5)**2)/.5
fe=np.clip((1-r)/.25,0,1); fe=fe*fe*(3-2*fe); A[...,3]*=fe
Image.fromarray(A.astype(np.uint8),'RGBA').save(sys.argv[1],'WEBP',quality=92,method=6)
