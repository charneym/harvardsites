#!/usr/bin/env python3
"""Hero render for spinhance: the product the NIBIB SBIR award describes, a pressurised xenon gas imaging phantom: a clear
pressure vessel holding a 3D-printed polymer mesh (here a gyroid lattice, coarser near the axis like airways, finer toward the
wall like parenchyma), between machined end caps with a gas fitting. Sphere-traced in numpy; glass handled analytically
(Fresnel reflection of two softboxes, faint absorption). Ground = page ink exactly, long radial feather. Output hero.webp."""
import numpy as np, sys
from PIL import Image
S=float(sys.argv[1]) if len(sys.argv)>1 else 1.5
OW,OH=1300,1600; W,H=int(OW*S),int(OH*S)
INK=np.array([17,19,21],np.float32)/255.
f32=np.float32
# camera: slightly above, looking at the vessel centre
cam=np.array([0.,2.75,-7.1],f32); tgt=np.array([0.,-.02,0.],f32)
fw=tgt-cam; fw/=np.linalg.norm(fw); rt=np.cross(np.array([0,1,0],f32),fw); rt/=np.linalg.norm(rt); up=np.cross(fw,rt)
foc=1.42
ys,xs=np.mgrid[0:H,0:W].astype(f32)
u=(xs+.5-W/2)/H*1.0; v=-(ys+.5-H/2)/H*1.0
D=(fw[None,None,:]*foc+u[...,None]*rt+v[...,None]*up); D/=np.linalg.norm(D,axis=2,keepdims=True)
D=D.reshape(-1,3); N=D.shape[0]; O=np.broadcast_to(cam,(N,3)).copy()
R_IN,R_OUT=1.0,1.07; Y0,Y1=-1.32,1.32       # vessel inner/outer radius, glass span
def sd_capcyl(p,r,y0,y1):
    d=np.stack([np.hypot(p[:,0],p[:,2])-r, np.maximum(y0-p[:,1],p[:,1]-y1)],1)
    return np.minimum(np.maximum(d[:,0],d[:,1]),0)+np.linalg.norm(np.maximum(d,0),axis=1)
def lattice(p):
    rr=np.hypot(p[:,0],p[:,2]); k=(10.5+6.5*np.clip(rr/R_IN,0,1)).astype(f32)   # graded cell size
    x,y,z=p[:,0]*k,p[:,1]*k,p[:,2]*k
    g=np.sin(x)*np.cos(y)+np.sin(y)*np.cos(z)+np.sin(z)*np.cos(x)
    sheet=(np.abs(g)-.26)/(k*1.6)
    bound=sd_capcyl(p,R_IN-.035,Y0+.06,Y1-.06)
    return np.maximum(sheet,bound)
def caps(p):
    a=sd_capcyl(p,1.27,Y1+.01,Y1+.23)-.03; b=sd_capcyl(p,1.27,Y0-.23,Y0-.01)-.03
    # chamfer rings and the gas fitting on top
    fit=sd_capcyl(p,.15,Y1+.26,Y1+.62)-.012; nut=sd_capcyl(p,.22,Y1+.30,Y1+.44)-.015
    tie=np.full(p.shape[0],9.,f32)
    for ang in np.arange(4)*np.pi/2+np.pi/4:
        q=p-np.array([np.cos(ang)*1.22,0,np.sin(ang)*1.22],f32); tie=np.minimum(tie,sd_capcyl(q,.045,Y0-.26,Y1+.26))
    return np.minimum.reduce([a,b,fit,nut,tie])
def scene(p):
    l=lattice(p); c=caps(p); return np.minimum(l,c),(c<l)
def normal(p,fn):
    e=f32(.0015); n=np.zeros_like(p)
    for i in range(3):
        dp=np.zeros(3,f32); dp[i]=e; n[:,i]=fn(p+dp)[0]-fn(p-dp)[0]
    return n/np.maximum(np.linalg.norm(n,axis=1,keepdims=True),1e-6)
# bounding cylinder intersection
def cyl_hit(O,D,r):
    a=D[:,0]**2+D[:,2]**2; b=2*(O[:,0]*D[:,0]+O[:,2]*D[:,2]); c=O[:,0]**2+O[:,2]**2-r*r
    disc=b*b-4*a*c; ok=disc>0; sq=np.sqrt(np.maximum(disc,0))
    return ok,(-b-sq)/(2*a),(-b+sq)/(2*a)
ok,t0,t1=cyl_hit(O,D,1.42)
idx=np.where(ok)[0]
col=np.tile(INK,(N,1)); alpha=np.zeros(N,f32)
# march
t=np.maximum(t0[idx],0).astype(f32); tend=t1[idx]; Oi=O[idx]; Di=D[idx]
hit=np.zeros(len(idx),bool); mat=np.zeros(len(idx),bool); act=np.arange(len(idx))
for it in range(340):
    if len(act)==0: break
    p=Oi[act]+Di[act]*t[act,None]
    d,m=scene(p)
    h=d<4e-4*t[act]
    hit[act[h]]=True; mat[act[h]]=m[h]
    t[act]+=np.where(h,0,d*.62)
    act=act[(~h)&(t[act]<tend[act])]
print('marched',it,hit.sum(),'/',len(idx))
L1=np.array([-.55,.75,-.45],f32); L1/=np.linalg.norm(L1)     # key softbox, upper left front
L2=np.array([.85,.15,.4],f32); L2/=np.linalg.norm(L2)        # cool rim from behind right
BLUE=np.array([0,160,222],f32)/255.
hi=np.where(hit)[0]; P=Oi[hi]+Di[hi]*t[hi,None]; Nn=normal(P,scene); V=-Di[hi]
# ambient occlusion
ao=np.ones(len(hi),f32)
for k,s in enumerate([.02,.05,.1,.18]):
    ao-=(s-scene(P+Nn*s)[0])/s*.22*(.6**k)
ao=np.clip(ao,0,1)
# soft shadow from key light
sh=np.ones(len(hi),f32); ts=np.full(len(hi),.02,f32)
for k in range(48):
    d=scene(P+L1*ts[:,None]+Nn*.002)[0]; sh=np.minimum(sh,np.clip(10*d/ts,0,1)); ts+=np.clip(d,.01,.2)
sh=np.clip(sh,0,1)**1.2
dif1=np.clip((Nn*L1).sum(1),0,1); dif2=np.clip((Nn*L2).sum(1),0,1)
Hh=(L1+V); Hh/=np.linalg.norm(Hh,axis=1,keepdims=True); spec=np.clip((Nn*Hh).sum(1),0,1)
m=mat[hi]
# polymer: warm off-white TPU, a little translucent (wrap lighting), cool rim
wrap=np.clip(((Nn*L1).sum(1)+.45)/1.45,0,1)
poly=np.array([.86,.86,.83],f32)[None,:]*(.12+.70*(wrap*(.35+.65*sh))[:,None]+.08)*ao[:,None]+BLUE[None,:]*(.42*dif2**1.6)[:,None]*ao[:,None]+(.18*spec**28*sh)[:,None]
# metal: brushed stainless, reflects the softboxes
Rv=Di[hi]-2*(Di[hi]*Nn).sum(1,keepdims=True)*Nn
env=.10+.42*dif1*(.4+.6*sh)+.85*np.clip((Rv*L1).sum(1),0,1)**5+.55*np.exp(-((Rv[:,0]+.62)/.10)**2)*np.clip(-Rv[:,2]+.2,0,1)+.30*np.clip(Rv[:,1],0,1)**2
met=np.array([.72,.74,.76],f32)[None,:]*(env[:,None]*(.5+.5*ao[:,None]))+BLUE[None,:]*(.18*np.clip((Rv*L2).sum(1),0,1)**6)[:,None]
c=np.where(m[:,None],met,poly)
# depth fade inside the vessel (xenon cell is dim at the back)
ci=col[idx]; ci[hi]=c; col[idx]=ci; al=alpha[idx]; al[hi]=1; alpha[idx]=al
# glass wall: analytic, over the whole vessel span (front and back surfaces)
okg,g0,g1=cyl_hit(O,D,R_OUT)
for tt,front in ((g1,False),(g0,True)):
    P=O+D*tt[:,None]; inspan=okg&(P[:,1]>Y0)&(P[:,1]<Y1)&(tt>0)
    # occlusion: front surface always over; back surface only where nothing solid in front
    if not front: inspan&=alpha<.5
    n=np.stack([P[:,0],np.zeros(N,f32),P[:,2]],1)/R_OUT
    if not front: n=-n
    cos=np.clip(-(D*n).sum(1),0,1); F=.04+.96*(1-cos)**5
    Rv=D-2*(D*n).sum(1,keepdims=True)*n
    box=np.clip((Rv*L1).sum(1),0,1)**40*1.4+np.clip((Rv*np.array([.9,.2,-.4],f32)/np.linalg.norm([.9,.2,-.4])).sum(1),0,1)**60*.9
    edge=np.clip(1-cos,0,1)**3
    refl=(F*(.25+box*3.0))+.10*edge
    g=np.where(inspan,np.clip(refl,0,1),0)
    tint=np.array([.86,.95,1.0],f32)
    col=col*(1-np.where(inspan,.06,0))[:,None]+g[:,None]*tint[None,:]
    alpha=np.maximum(alpha,np.where(inspan,np.clip(g*2+.08,0,1),0))
img=col.reshape(H,W,3)
# feather: long radial ease to ink so no edge exists (DJ/DP)
yy,xx=np.mgrid[0:H,0:W].astype(f32); r=np.hypot((xx-W/2)/(W*.5),(yy-H*.5)/(H*.5))
fe=np.clip((1.0-r)/0.18,0,1); fe=fe*fe*(3-2*fe)
img=INK+(img-INK)*fe[...,None]
img=np.clip(img,0,1)**(1/1.0)
im=Image.fromarray((img*255+.5).astype(np.uint8)).resize((OW,OH),Image.LANCZOS)
# exact ink at the border
a=np.asarray(im).copy(); a[:4,:]=a[-4:,:]=a[:,:4]=a[:,-4:]=(INK*255+.5).astype(np.uint8); im=Image.fromarray(a)
im.save(sys.argv[2] if len(sys.argv)>2 else 'hero.webp',quality=90,method=6); print('ok',im.size)
