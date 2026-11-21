#!/usr/bin/env python3
"""Orbit Genomics hero: a space-filling model of B-form DNA (10 bp per turn, 3.38 A rise, 36 deg twist, grooves from the
~130 deg C1'-C1' geometry) carrying a short tandem repeat: six CAG units in a row, the kind of repetitive sequence OrbiSeq
reads genome-wide. Flanking base pairs in the logo indigo (#283d8f, lifted), the repeat's base pairs in the logo magenta
(#8c308d), alternate units in a lighter orchid so each three-base unit reads; backbone in pale lavender bone. Lambert + rim +
specular + depth ambient occlusion, supersampled 2x, transparent ground (no box edge, DJ/DP).
Usage: python3 dna.py out.png [S] [tilt] [lean]"""
import numpy as np, sys
from PIL import Image
def _box(a,r,ax):
    a=np.moveaxis(a,ax,0);p=np.concatenate([np.repeat(a[:1],r+1,0),a,np.repeat(a[-1:],r,0)]);c=np.cumsum(p,0)
    return np.moveaxis((c[2*r+1:]-c[:-2*r-1])/(2*r+1),0,ax)
def blur(a,s):
    r=max(1,int(s*0.9))
    for _ in range(3): a=_box(_box(a,r,0),r,1)
    return a
OUT=sys.argv[1] if len(sys.argv)>1 else 'dna.png'
S=int(sys.argv[2]) if len(sys.argv)>2 else 2400
TILT=float(sys.argv[3]) if len(sys.argv)>3 else 18
LEAN=float(sys.argv[4]) if len(sys.argv)>4 else -32
seq="TTGACGT"+"CAG"*6+"GTCATGCA"
NBP=len(seq);R0,R1=7,7+18
rng=np.random.default_rng(11)
atoms=[]  # x,y,z,r,kind  kind: 0 sugar, 1 phosphate, 2 flank base, 3 repeat unit A, 4 repeat unit B
def cyl(r,th,z): return np.array([r*np.cos(th),r*np.sin(th),z])
for i in range(NBP):
    th=np.radians(36*i);z=3.38*i
    for s,sg in ((0,-1),(1,1)):
        a1=th+sg*np.radians(65);dz=1.0 if s==0 else -1.0
        for (rr,da,ddz,rad,k) in ((5.9,0,0,1.7,0),(6.9,sg*8,.6*dz,1.6,0),(7.4,sg*16,1.4*dz,1.7,0),(6.6,sg*20,.2*dz,1.55,0),
                                  (8.2,sg*24,2.2*dz,1.7,0),(8.9,sg*30,2.9*dz,1.85,1),(10.1,sg*27,3.4*dz,1.55,1),(9.4,sg*38,2.4*dz,1.55,1),
                                  (8.0,sg*41,3.3*dz,1.55,0),(7.3,sg*10,-.8*dz,1.52,0)):
            atoms.append((*cyl(rr,a1+np.radians(da),z+ddz),rad,k))
        for f in np.linspace(0,1,4,endpoint=False):
            a=th+sg*np.radians(95)+np.radians(36)*f;zz=z+2.9*dz+3.38*f
            atoms.append((*cyl(9.0,a,zz),1.75,1))
    c1=cyl(5.9,th-np.radians(65),z);c2=cyl(5.9,th+np.radians(65),z)
    ch=c2-c1;u=ch/np.linalg.norm(ch);maj=-cyl(1,th,0);maj-=u*(maj@u);maj/=np.linalg.norm(maj)
    k=2 if not (R0<=i<R1) else (3 if ((i-R0)//3)%2==0 else 4)
    for t in np.linspace(.13,.87,8):
        for o in (0.9,2.6,4.1):
            if (t<.2 or t>.8) and o>3: continue
            atoms.append((*(c1+ch*t+maj*o+np.array([0,0,rng.normal(0,.12)])),1.62,k))
A=np.array([a[:3] for a in atoms]);rad=np.array([a[3] for a in atoms]);K=np.array([a[4] for a in atoms])
A-=A.mean(0)
def rot(a,ax):
    c,s=np.cos(a),np.sin(a)
    return {'x':np.array([[1,0,0],[0,c,-s],[0,s,c]]),'y':np.array([[c,0,s],[0,1,0],[-s,0,c]]),'z':np.array([[c,-s,0],[s,c,0],[0,0,1]])}[ax]
P=A@rot(np.radians(-90),'x').T
P=P@rot(np.radians(TILT),'x').T
P=P@rot(np.radians(LEAN),'z').T
cam=300.0;f=cam/(cam-P[:,2]);P[:,0]*=f;P[:,1]*=f;rad=rad*f
lo=(P[:,:2]-rad[:,None]).min(0);hi=(P[:,:2]+rad[:,None]).max(0)
sc=S*0.94/(hi-lo).max();off=np.array([S,S])/2-(lo+hi)/2*sc
Z=np.full((S,S),-1e9);N=np.zeros((S,S,3));ID=np.full((S,S),-1)
for i in np.argsort(P[:,2]):
    cx,cy=P[i,:2]*sc+off;cy=S-cy;r=rad[i]*sc
    x0,x1=int(max(cx-r,0)),int(min(cx+r+1,S));y0,y1=int(max(cy-r,0)),int(min(cy+r+1,S))
    yy,xx=np.mgrid[y0:y1,x0:x1];dx=(xx+.5-cx)/r;dy=(yy+.5-cy)/r;d2=dx*dx+dy*dy;m=d2<1
    dz=np.sqrt(np.clip(1-d2,0,1));z=P[i,2]*sc+dz*r
    sub=Z[y0:y1,x0:x1];upd=m&(z>sub)
    sub[upd]=z[upd];N[y0:y1,x0:x1][upd]=np.stack([dx,-dy,dz],-1)[upd];ID[y0:y1,x0:x1][upd]=i
mask=ID>=0
Zf=np.where(mask,Z,Z[mask].min()-6*sc)
ao=np.zeros_like(Z)
for rr in (5,12,26,52):
    bl=blur(Zf,rr*S/2400);ao+=np.clip((bl-Zf)/(rr*S/2400*1.6),0,1)
ao=np.clip(1-ao/2.2,0,1)
Lt=np.array([-.45,.62,.64]);Lt/=np.linalg.norm(Lt)
lam=np.clip((N*Lt).sum(-1),0,1)
Hh=Lt+np.array([0,0,1]);Hh/=np.linalg.norm(Hh);spec=np.clip((N*Hh).sum(-1),0,1)**40
rim=(1-np.clip(N[...,2],0,1))**3
sugar=np.array([214,210,228])/255;phos=np.array([234,231,243])/255
flank=np.array([86,104,186])/255
uA=np.array([186,72,184])/255;uB=np.array([226,150,222])/255
cols=np.array([sugar,phos,flank,uA,uB])
kk=K[np.clip(ID,0,None)];col=cols[kk]
zn=(Z-Z[mask].min())/(Z[mask].max()-Z[mask].min()+1e-6);zn=np.where(mask,zn,0)
ink=np.array([13,11,26])/255
shade=(0.2+0.86*lam)[...,None]*col*(0.42+0.58*ao[...,None])
shade+=spec[...,None]*0.32*ao[...,None]+rim[...,None]*np.array([150,140,230])/255*0.22
rep=((kk>=3)&mask)[...,None]
shade=np.where(rep,shade*1.08,shade)
fz=(0.5+0.5*zn[...,None]**.8)
shade=shade*fz+ink*(1-fz)
img=np.clip(shade,0,1)
rgba=np.dstack([img*255,mask*255.0]).astype(np.uint8)
im=Image.fromarray(rgba,'RGBA').resize((S//2,S//2),Image.LANCZOS)
im=im.crop(im.getbbox());im.save(OUT);print(im.size,len(atoms))
