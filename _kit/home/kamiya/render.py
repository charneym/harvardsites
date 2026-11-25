#!/usr/bin/env python3
"""Hero render for Kamiya: a 96-well ELISA microplate (SBS footprint 127.8 x 85.5 x 14.4 mm, 9 mm pitch, chamfered A1 corner,
raised well rims, bottom flange) after the stop step, its wells holding yellow product in graded strengths: a duplicate standard
curve down columns 1-2 and samples across the rest. Numpy SDF ray-marcher: white polystyrene with soft key light, sky fill, AO and
soft shadows, a faint red rim light (the logo's red), glossy liquid with Fresnel. Transparent ground with a soft contact shadow.
Usage: render.py W H out.png"""
import numpy as np, sys
from PIL import Image
W=int(sys.argv[1]) if len(sys.argv)>1 else 900; H=int(sys.argv[2]) if len(sys.argv)>2 else 700
OUT=sys.argv[3] if len(sys.argv)>3 else 'hero.png'; SS=2
w,h=W*SS,H*SS
def norm(v):return v/np.linalg.norm(v,axis=-1,keepdims=True)
def V(*a):return np.array(a,dtype=np.float64)
# ---------- scene ----------
PX,PY=63.9,42.75; HT=14.35; RW=3.45; RR=4.15; WB=-10.9; LQ=-3.3
def sbox(p,b,r=0.0):
    q=np.abs(p)-(b-r);return np.linalg.norm(np.maximum(q,0),axis=-1)+np.minimum(np.max(q,axis=-1),0)-r
def cell(p):
    i=np.clip(np.round(p[:,0]/9+5.5),0,11);j=np.clip(np.round(p[:,1]/9+3.5),0,7)
    cx=(i-5.5)*9;cy=(j-3.5)*9;return i,j,np.stack([p[:,0]-cx,p[:,1]-cy],1)
def sdf(p,mat=False):
    x,y,z=p[:,0],p[:,1],p[:,2]
    body=sbox(p-V(0,0,-HT/2-0.6),V(PX-0.6,PY-0.6,HT/2-0.6),1.4)
    fl=sbox(p-V(0,0,-HT+1.1),V(PX,PY,1.1),0.5)
    d=np.minimum(body,fl)
    # chamfered A1 corner (top left: -x,+y)
    ch=((-x)+y-(PX+PY-9.0))/np.sqrt(2);d=np.maximum(d,ch)
    i,j,l=cell(p);r=np.linalg.norm(l,axis=1)
    rim=np.maximum(r-RR,np.maximum(z-0.55,-z-1.5))
    rim=rim-0.0
    d=np.minimum(d,np.maximum(rim,-1e9))
    hole=np.maximum(r-RW,np.maximum(WB-z,z-3))
    d=np.maximum(d,-hole)
    # liquid with a small meniscus at the wall
    lev=LQ+0.45*(np.clip(r/RW,0,1)**6)
    liq=np.maximum(r-(RW-0.02),np.maximum(z-lev,WB-z))
    if not mat:return np.minimum(d,liq)
    return np.minimum(d,liq),(liq<d),i,j
# ---------- camera ----------
az=np.radians(-118);el=np.radians(56);dist=430
tgt=V(2,-1,-6);cam=tgt+dist*V(np.cos(el)*np.cos(az),np.cos(el)*np.sin(az),np.sin(el))
fw=norm(tgt-cam);rt=norm(np.cross(fw,V(0,0,1)));up=np.cross(rt,fw)
roll=np.radians(-3);rt,up=rt*np.cos(roll)+up*np.sin(roll),-rt*np.sin(roll)+up*np.cos(roll)
fov=np.radians(21);th=np.tan(fov/2)
ys,xs=np.mgrid[0:h,0:w].astype(np.float64)
u=(xs+.5)/w*2-1;v=1-(ys+.5)/h*2
rd=norm(fw[None,None]+u[...,None]*th*(w/h)*rt[None,None]+v[...,None]*th*up[None,None]).reshape(-1,3)
N=rd.shape[0];ro=np.broadcast_to(cam,(N,3)).copy()
def march(ro,rd,tmin,tmax,steps=220):
    t=np.full(len(ro),float(tmin));hit=np.zeros(len(ro),bool);act=np.arange(len(ro))
    for s in range(steps):
        if not len(act):break
        p=ro[act]+rd[act]*t[act,None];d=sdf(p)
        t[act]+=d*0.85
        h_=d<0.004;hit[act[h_]]=True
        keep=(~h_)&(t[act]<tmax);act=act[keep]
    return t,hit
print('march',N)
t,hit=march(ro,rd,dist-160,dist+160)
P=ro+rd*t[:,None]
col=np.zeros((N,3));alpha=np.zeros(N)
idx=np.where(hit)[0];p=P[idx]
_,isl,ci,cj=sdf(p,True)
e=0.004
def nrm(p):
    k=np.array([[1,-1,-1],[-1,-1,1],[-1,1,-1],[1,1,1]],float)
    n=sum(k[q][None]*sdf(p+e*k[q][None])[:,None] for q in range(4));return norm(n)
n=nrm(p)
L=norm(V(-0.55,0.35,0.95))   # key light, upper left-front (world)
L=norm(V(-0.35,-0.75,0.9))
R2=norm(V(0.85,0.55,0.25))   # red rim, behind right
def soft(p,ld,k=10,steps=70):
    res=np.ones(len(p));t=np.full(len(p),0.06);act=np.arange(len(p))
    for s in range(steps):
        if not len(act):break
        d=sdf(p[act]+ld*t[act,None]);res[act]=np.minimum(res[act],k*d/t[act])
        t[act]+=np.clip(d,0.05,3.0);keep=(d>0.001)&(t[act]<120);res[act[d<=0.001]]=0;act=act[keep]
    return np.clip(res,0,1)
def ao(p,n):
    o=np.zeros(len(p))
    for q in range(1,6):
        hh=0.35*q*q*0.5;o+=(hh-sdf(p+n*hh))/(2**q)
    return np.clip(1-1.6*o,0,1)
print('shade',len(idx))
sh=soft(p+n*0.02,L);a_=ao(p,n)
dif=np.clip((n*L).sum(1),0,1)*sh
sky=0.5+0.5*n[:,2]
vv=-rd[idx];hv=norm(L+vv);spec=np.clip((n*hv).sum(1),0,1)**60*sh
fres=0.04+0.96*(1-np.clip((n*vv).sum(1),0,1))**5
rim=np.clip((n*R2).sum(1),0,1)**3*(1-np.clip((n*vv).sum(1),0,1))**1.5
# ELISA pattern: columns 1-2 a duplicate standard curve (A strongest -> H blank), then samples
rng=np.random.default_rng(7)
S=np.zeros((12,8))
std=np.array([1.0,.78,.58,.42,.29,.18,.09,0.0])
for jj in range(8):S[0,jj]=S[1,jj]=std[jj]
samp=np.clip(rng.gamma(2.2,.24,(10,8)),0.04,1)
for ii in range(2,12):S[ii]=samp[ii-2]
S[11,:2]=0.0  # blanks
# row index j: plate rows A..H run along -y? our j=7 is +y (A1 corner at -x,+y) -> A is j=7
lv=S[ci.astype(int),(7-cj).astype(int)]
plastic=V(.86,.87,.86)
c_pl=plastic[None]*(0.06+0.86*dif[:,None]+0.24*sky[:,None]*a_[:,None])*(0.55+0.45*a_[:,None])+0.045
c_pl+=spec[:,None]*0.35+rim[:,None]*V(1.0,.12,.10)[None]*0.55
# liquid: white well bottom seen through yellow product (Beer-Lambert like), glossy top
yel=V(1.0,.76,.0)
tint=1-(1-yel[None])*(0.12+0.88*lv[:,None])
deep=V(.92,.55,.02)
tint=tint*(1-0.04*lv[:,None]**1.5)
lit=0.80+0.16*a_+0.10*dif
c_lq=tint*lit[:,None]*1.0
# the liquid sits in the well: darken by the wall's shadow and AO
c_lq*= (0.84+0.16*sh)[:,None]
env=0.55+0.45*np.clip(-(rd[idx]-2*(rd[idx]*n).sum(1)[:,None]*n)[:,2]*-1,0,1)
c_lq+=fres[:,None]*0.22*env[:,None]+spec[:,None]*0.9
print('liquid px',isl.sum(),'lv',lv[isl].mean() if isl.any() else 0)
c=np.where(isl[:,None],c_lq,c_pl)
col[idx]=c;alpha[idx]=1
# shadow catcher: ground plane z=-HT
bg=np.where(~hit)[0]
tg=(-HT-ro[bg,2])/rd[bg,2];ok=tg>0;bgi=bg[ok];gp=ro[bgi]+rd[bgi]*tg[ok,None]
print('ground',len(bgi))
ss=soft(gp+V(0,0,0.05),L,k=4,steps=60)
# ambient occlusion under the plate
d0=sdf(gp);occ=np.clip(1-np.exp(-d0/9),0,1)
shad=np.clip((1-ss)*0.55+(1-occ)*0.5,0,0.8)
alpha[bgi]=shad;col[bgi]=0
img=np.clip(col.reshape(h,w,3),0,1)**(1/1.12)
a=alpha.reshape(h,w)
rgba=np.dstack([img*a[...,None],a])
rgba=rgba.reshape(H,SS,W,SS,4).mean((1,3))
rgb=rgba[...,:3]/np.maximum(rgba[...,3:],1e-6)
out=np.dstack([np.clip(rgb,0,1)*255,rgba[...,3]*255]).astype(np.uint8)
Image.fromarray(out,'RGBA').save(OUT);print('wrote',OUT)
