#!/usr/bin/env python3
"""Cayuga hero render: CAY001, a short-chain polyphosphate (polyP) complexed with a silica nanoparticle (SNP), as
one smooth Gaussian surface: a granular silica sphere with short polyP bead chains lying on it. Pure numpy (method
adapted from the kit's surf.py). Args: _ _ _ size. Env OUT, SEED, RS, NB, NC, LEN."""
import numpy as np, pathlib, sys, time, os
from PIL import Image
t0=time.time()
def _box(a,r,ax):
    a=np.moveaxis(a,ax,0);p=np.concatenate([np.repeat(a[:1],r+1,0),a,np.repeat(a[-1:],r,0)]);c=np.cumsum(p,0)
    return np.moveaxis((c[2*r+1:]-c[:-2*r-1])/(2*r+1),0,ax)
def blur(a,s):
    r=max(1,int(s*0.9))
    for _ in range(3): a=_box(_box(a,r,0),r,1)
    return a
H=pathlib.Path(__file__).resolve().parent
R={'G':1.0}
# synthetic polyP-SNP: an amorphous silica nanoparticle (beads on jittered Fibonacci shells, so the surface reads as a
# fine granular sphere) with short polyphosphate chains adsorbed on it (bead strings lying along the surface)
rng=np.random.default_rng(int(os.environ.get('SEED','7')))
RS=float(os.environ.get('RS','20'));NB=int(os.environ.get('NB','2600'))
def fib(n,r):
    i=np.arange(n)+.5;phi=np.arccos(1-2*i/n);th=np.pi*(1+5**.5)*i
    return np.stack([np.cos(th)*np.sin(phi),np.cos(phi),np.sin(th)*np.sin(phi)],1)*r
core=fib(NB,RS)+rng.normal(0,float(os.environ.get("JIT",".16")),(NB,3))
inner=fib(int(NB*.55),RS-1.6)
X=[core,inner];kind=[np.zeros(len(core)),np.zeros(len(inner))];rad=[np.full(len(core),1.15),np.full(len(inner),1.3)]
NC=int(os.environ.get('NC','34'));LEN=int(os.environ.get('LEN','9'))
dirs=fib(NC,1.0)+rng.normal(0,.12,(NC,3))
for d in dirs:
    d=d/np.linalg.norm(d);t=np.cross(d,rng.normal(size=3));t/=np.linalg.norm(t)
    pts=[];p=d.copy();tt=t.copy()
    for k in range(LEN):
        pts.append(p*(RS+float(os.environ.get("LIFT","1.35"))));
        tt=tt+rng.normal(0,.35,3);tt-=p*(tt@p);tt/=np.linalg.norm(tt)
        p=p+tt*(float(os.environ.get("SPC","1.75"))/RS);p/=np.linalg.norm(p)
    pts=np.array(pts);X.append(pts);kind.append(np.ones(len(pts)));rad.append(np.full(len(pts),.95))
X=np.concatenate(X);KIND=np.concatenate(kind);RAD=np.concatenate(rad)
el=['G']*len(X);rq=list(range(len(X)));rn=['X']*len(X)
P=X.copy()
def rot(t,ax):
    c,s=np.cos(t),np.sin(t)
    return {'x':np.array([[1,0,0],[0,c,-s],[0,s,c]]),'y':np.array([[c,0,s],[0,1,0],[-s,0,c]]),'z':np.array([[c,-s,0],[s,c,0],[0,0,1]])}[ax]
S=int(sys.argv[4]) if len(sys.argv)>4 else 2400
rad=RAD;B=float(__import__("os").environ.get("BB","1.1"));CUT=3.4  # blob sharpness; cutoff in units of radius... (absolute A below)
PAD=float(os.environ.get("PAD","1.3"))
lo=(P[:,:2]-rad[:,None]-PAD).min(0);hi=(P[:,:2]+rad[:,None]+PAD).max(0)
sc=S*0.94/(hi-lo).max();off=np.array([S,S])/2-(lo+hi)/2*sc
# 1) upper-bound depth from inflated spheres
Zs=np.full((S,S),-1e9)
for i in range(len(P)):
    cx,cy=P[i,:2]*sc+off;cy=S-cy;r=(rad[i]+PAD)*sc
    x0,x1=int(max(cx-r,0)),int(min(cx+r+1,S));y0,y1=int(max(cy-r,0)),int(min(cy+r+1,S))
    yy,xx=np.mgrid[y0:y1,x0:x1];d2=((xx+.5-cx)**2+(yy+.5-cy)**2)/r/r;m=d2<1
    z=P[i,2]*sc+np.sqrt(np.clip(1-d2,0,1))*r;sub=Zs[y0:y1,x0:x1];u=m&(z>sub);sub[u]=z[u]
hit=Zs>-1e8
NZ=int(os.environ.get("NZ","30"));DZ=(PAD+float(os.environ.get('DEP','4.2')))*sc/NZ
cut=max(3.2,rad.max()*float(os.environ.get('CUTF','2.0')))*sc
Zsurf=np.array(Zs);has=np.zeros((S,S),bool);Z0=np.array(Zs)
STRIP=400
for ps in range(5):
  todo=hit&~has
  for ys in range(0,S,STRIP):
    ye=min(S,ys+STRIP)
    if not todo[ys:ye].any(): continue
    zs=Z0[ys:ye,:,None]-np.arange(NZ)[None,None,:]*DZ
    D=np.zeros((ye-ys,S,NZ),np.float32)
    for i in range(len(P)):
        cx,cy=P[i,:2]*sc+off;cy=S-cy
        y0,y1=int(max(cy-cut,ys)),int(min(cy+cut+1,ye))
        if y1<=y0: continue
        x0,x1=int(max(cx-cut,0)),int(min(cx+cut+1,S))
        yy,xx=np.mgrid[y0:y1,x0:x1];r2=((xx+.5-cx)**2+(yy+.5-cy)**2)
        m=r2<cut*cut
        if not m.any(): continue
        dz=zs[y0-ys:y1-ys,x0:x1]-P[i,2]*sc
        v=np.exp(-B*((r2[...,None]+dz*dz)/(rad[i]*sc)**2-1)).astype(np.float32)
        D[y0-ys:y1-ys,x0:x1]+=v*m[...,None]
    ab=D>=1.0;first=np.argmax(ab,-1)
    k=np.clip(first,1,NZ-1);i0=k-1
    a=np.take_along_axis(D,i0[...,None],-1)[...,0];b=np.take_along_axis(D,k[...,None],-1)[...,0]
    tt=np.clip((1-a)/(b-a+1e-6),0,1)
    zz=Z0[ys:ye]-(i0+tt)*DZ;zz=np.where(first==0,Z0[ys:ye],zz)
    got=ab.any(-1)&todo[ys:ye]
    Zsurf[ys:ye]=np.where(got,zz,Zsurf[ys:ye]);has[ys:ye]|=got
    Z0[ys:ye]=np.where(todo[ys:ye]&~got,Z0[ys:ye]-NZ*DZ,Z0[ys:ye])
    del D,zs
def splat(fn):
    for i in range(len(P)):
        cx,cy=P[i,:2]*sc+off;cy=S-cy
        x0,x1=int(max(cx-cut,0)),int(min(cx+cut+1,S));y0,y1=int(max(cy-cut,0)),int(min(cy+cut+1,S))
        fn(i,cx,cy,x0,x1,y0,y1)
print("density",time.time()-t0,"holes",int((hit&~has).sum()),int(hit.sum()))
# 2) analytic gradient + colour blend at the surface point
G=np.zeros((S,S,3),np.float32);W=np.zeros((S,S),np.float32);C=np.zeros((S,S,3),np.float32)
E=np.array(el);RN=np.array(rn)
py_=P[:,1];tq=((py_-py_.min())/(py_.max()-py_.min()))[:,None]
c0=np.array([16,30,66])/255;c1=np.array([59,95,161])/255;c2=np.array([214,226,244])/255
grad=np.where(tq<.5,c0+(c1-c0)*(tq/.5),c1+(c2-c1)*((tq-.5)/.5))
d0=np.array([18,92,150])/255;d1=np.array([28,126,191])/255;d2=np.array([150,206,240])/255
gp=np.where(tq<.5,d0+(d1-d0)*(tq/.5),d1+(d2-d1)*((tq-.5)/.5))
base=np.where(KIND[:,None]>0,gp,grad)
def f2(i,cx,cy,x0,x1,y0,y1):
    yy,xx=np.mgrid[y0:y1,x0:x1];dx=xx+.5-cx;dy=yy+.5-cy;r2=dx*dx+dy*dy
    m=r2<cut*cut
    if not m.any(): return
    dz=Zsurf[y0:y1,x0:x1]-P[i,2]*sc;rr=(rad[i]*sc)**2
    v=np.exp(-B*((r2+dz*dz)/rr-1))*m
    g=v*(2*B/rr)
    G[y0:y1,x0:x1,0]+=g*dx;G[y0:y1,x0:x1,1]+=g*(-dy);G[y0:y1,x0:x1,2]+=g*dz
    w=v**3;W[y0:y1,x0:x1]+=w;C[y0:y1,x0:x1]+=w[...,None]*base[i]
splat(f2);print('grad',time.time()-t0)
N=G/ (np.linalg.norm(G,axis=-1,keepdims=True)+1e-9)
col=C/(W[...,None]+1e-9)
mask=has
Zf=np.where(mask,Zsurf,Zsurf[mask].min()-6*sc)
ao=np.zeros((S,S))
for rr in (6,14,30,64,120):
    s=rr*S/2400;bb=blur(Zf,s);ao+=np.clip((bb-Zf)/(s*1.6),0,1)
ao=np.clip(1-ao/2.3,0,1)
L=np.array([-.5,.62,.6]);L/=np.linalg.norm(L)
lam=np.clip((N*L).sum(-1),0,1);wrap=np.clip(((N*L).sum(-1)+.35)/1.35,0,1)
Hh=L+np.array([0,0,1]);Hh/=np.linalg.norm(Hh);nh=np.clip((N*Hh).sum(-1),0,1)
spec=nh**60*0.42+nh**10*0.07
rim=(1-np.clip(N[...,2],0,1))**2.6
zn=(Zsurf-Zsurf[mask].min())/(Zsurf[mask].max()-Zsurf[mask].min()+1e-6);zn=np.where(mask,zn,0)
ink=np.array([10,20,42])/255
diff=(0.06+0.92*lam**1.1+0.2*wrap)*(0.28+0.72*ao)
shade=col*diff[...,None]+spec[...,None]*ao[...,None]+rim[...,None]*np.array([170,200,240])/255*0.30*ao[...,None]
f=(0.7+0.3*zn[...,None]);shade=shade*f+ink*(1-f)*0.6
img=np.clip(shade,0,1)
rgba=np.dstack([img*255,mask*255]).astype(np.uint8)
im=Image.fromarray(rgba,'RGBA').resize((S//2,S//2),Image.LANCZOS)
bb=im.getbbox();im=im.crop(bb);im.save(H/(__import__('os').environ.get('OUT','m1r')+'.png'));print(im.size,time.time()-t0)
