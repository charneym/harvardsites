#!/usr/bin/env python3
"""Hero render: a closed circle of double-stranded DNA (extrachromosomal circular DNA, the biomarker Phi Diagnostics
measures in blood), as a space-filling coarse-grained model. B-DNA geometry: 10.5 bp per turn, 3.4 A rise, phosphates at
~10 A radius, minor-groove offset ~150 deg; 168 bp = 16 whole turns so the ring closes; a gentle out-of-plane writhe.
Backbone in the logo gold, bases in pale slate. Pure numpy sphere splats with exact normals, screen-space AO, satin
shading, real alpha. Args: tiltx tilty size. Output: ring.png"""
import numpy as np, sys, pathlib
from PIL import Image
H=pathlib.Path(__file__).resolve().parent
tx=float(sys.argv[1]) if len(sys.argv)>1 else 1.0; ty=float(sys.argv[2]) if len(sys.argv)>2 else -0.25
S=int(sys.argv[3]) if len(sys.argv)>3 else 2400
N=168; BPT=10.5; RH=9.6; RISE=3.4; RR=N*RISE/(2*np.pi); OFF=np.radians(150)
pts=[];rad=[];kind=[]
for i in range(N):
    ph=2*np.pi*i/N
    n=np.array([np.cos(ph),np.sin(ph),0.]); t=np.array([-np.sin(ph),np.cos(ph),0.]); b=np.array([0,0,1.])
    w=6.0*np.sin(2*ph)+2.5*np.sin(3*ph+.7)          # writhe (out of plane)
    c=RR*n+w*b
    th=2*np.pi*i/BPT
    def at(r,a,dt=0.): return c+r*(np.cos(a)*n+np.sin(a)*b)+dt*t
    a1,a2=th,th+OFF
    for a,s in ((a1,1),(a2,-1)):
        pts.append(at(RH,a,0));rad.append(2.55);kind.append(0)                  # phosphate
        pts.append(at(RH*.86,a+.28*s,1.2*s));rad.append(1.9);kind.append(1)       # O
        pts.append(at(RH*.86,a-.30*s,-1.0*s));rad.append(1.9);kind.append(1)
        pts.append(at(7.4,a+.36*s,.9));rad.append(2.3);kind.append(2)            # sugar
        pts.append(at(RH*.97,a+np.pi/BPT,RISE/2));rad.append(2.15);kind.append(1)  # backbone link to next nucleotide
        pts.append(at(8.6,a+.18*s,.5));rad.append(2.0);kind.append(2)
    pa=at(7.4,a1+.36,.9); pb=at(7.4,a2-.36,.9)
    for k,u in enumerate(np.linspace(.18,.82,5)):                              # base pair rungs
        p=pa*(1-u)+pb*u; p=c+(p-c)*0.92
        pts.append(p);rad.append(1.85);kind.append(3 if k!=2 else 4)
P=np.array(pts);rad=np.array(rad);kind=np.array(kind)
def rot(a,ax):
    c,s=np.cos(a),np.sin(a)
    return {'x':np.array([[1,0,0],[0,c,-s],[0,s,c]]),'y':np.array([[c,0,s],[0,1,0],[-s,0,c]]),'z':np.array([[c,-s,0],[s,c,0],[0,0,1]])}[ax]
P=P@rot(.35,'z').T@rot(tx,'x').T@rot(ty,'y').T
# mild perspective
cam=900.;f=cam/(cam-P[:,2]);P2=P[:,:2]*f[:,None];R2=rad*f
lo=(P2-R2[:,None]).min(0);hi=(P2+R2[:,None]).max(0)
sc=(S*0.96)/(hi-lo).max();W_=int((hi-lo)[0]*sc/0.96)+8;H_=int((hi-lo)[1]*sc/0.96)+8
off=np.array([W_,H_])/2-(lo+hi)/2*sc
Z=np.full((H_,W_),-1e9,np.float32);NX=np.zeros((H_,W_,3),np.float32);K=np.full((H_,W_),-1,np.int16)
order=np.argsort(P[:,2])
for i in order:
    cx,cy=P2[i]*sc+off;cy=H_-cy;r=R2[i]*sc
    x0,x1=int(max(cx-r,0)),int(min(cx+r+1,W_));y0,y1=int(max(cy-r,0)),int(min(cy+r+1,H_))
    yy,xx=np.mgrid[y0:y1,x0:x1];dx=(xx+.5-cx)/r;dy=-(yy+.5-cy)/r;d2=dx*dx+dy*dy;m=d2<1
    nz=np.sqrt(np.clip(1-d2,0,1));z=P[i,2]*sc*f[i]+nz*r
    sub=Z[y0:y1,x0:x1];u=m&(z>sub);sub[u]=z[u]
    NX[y0:y1,x0:x1][u]=np.stack([dx,dy,nz],-1)[u];K[y0:y1,x0:x1][u]=kind[i]
mask=K>=0
def _box(a,r,ax):
    a=np.moveaxis(a,ax,0);p=np.concatenate([np.repeat(a[:1],r+1,0),a,np.repeat(a[-1:],r,0)]);c=np.cumsum(p,0)
    return np.moveaxis((c[2*r+1:]-c[:-2*r-1])/(2*r+1),0,ax)
def blur(a,s):
    r=max(1,int(s*.9))
    for _ in range(3): a=_box(_box(a,r,0),r,1)
    return a
Zf=np.where(mask,Z,Z[mask].min()-40)
ao=np.zeros_like(Zf)
for rr in (5,12,26,56):
    s=rr*S/2400;bb=blur(Zf,s);ao+=np.clip((bb-Zf)/(s*1.5),0,1)
ao=np.clip(1-ao/2.0,0,1)
pal=np.array([[226,176,84],[206,150,52],[188,132,44],[196,208,224],[226,232,240]])/255.
col=pal[np.clip(K,0,4)]
Nn=NX;L=np.array([-.45,.6,.66]);L/=np.linalg.norm(L)
nl=(Nn*L).sum(-1);lam=np.clip(nl,0,1);wrap=np.clip((nl+.4)/1.4,0,1)
Hh=L+np.array([0,0,1.]);Hh/=np.linalg.norm(Hh);nh=np.clip((Nn*Hh).sum(-1),0,1)
gold=(K<=2)
spec=np.where(gold,nh**48*.55+nh**8*.10,nh**60*.30+nh**10*.05)
rim=(1-np.clip(Nn[...,2],0,1))**2.4
zn=(Z-Z[mask].min())/(Z[mask].max()-Z[mask].min()+1e-6);zn=np.where(mask,zn,0)
ink=np.array([6,16,34])/255.
diff=(.06+.86*lam**1.0+.18*wrap)*(.32+.68*ao)
spc=np.where(gold[...,None],np.array([1,.93,.78]),np.array([1,1,1.]))
sh=col*diff[...,None]+spec[...,None]*ao[...,None]*spc+rim[...,None]*np.array([90,130,200])/255*.30*ao[...,None]
fz=.55+.45*zn[...,None];sh=sh*fz+ink*(1-fz)*.7
img=np.clip(sh,0,1)
a=mask.astype(np.float32)
rgba=np.dstack([img*255,a*255]).astype(np.uint8)
im=Image.fromarray(rgba,'RGBA').resize((W_//2,H_//2),Image.LANCZOS);im=im.crop(im.getbbox())
im.save(H/'ring.png');print(im.size,len(P),'atoms')
