#!/usr/bin/env python3
"""D4Z4 Medicine hero: a space-filling model of B-form DNA (10 bp per turn, 3.38 A rise, 36 deg twist; major and minor
grooves from the 130-deg C1'-C1' geometry), shaded like a material model (Lambert + rim + specular + depth ambient
occlusion). Backbone in pale steel, bases in the logo's ice blue #cce6f6 deepened; the methyl groups of 5-methylcytosine at
CpG steps sit in the major groove (where they really project) and are lit in bright ice, since the company's assay reads
DNA methylation and structure in one read. Saved with alpha. Usage: python3 dna.py out.png [S] [nbp]"""
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
NBP=int(sys.argv[3]) if len(sys.argv)>3 else 30
rng=np.random.default_rng(4)
# a D4Z4-like stretch: CpG-rich, so several CpG steps carry 5mC on both strands
seq=list("GGCGCGACCCGGCTCGCCGGTCCGCGTAGCCG"[:NBP])
atoms=[]  # (x,y,z,r,kind) kind: 0 backbone, 1 phosphate, 2 base, 3 methyl
def cyl(r,th,z): return np.array([r*np.cos(th),r*np.sin(th),z])
for i in range(NBP):
    th=np.radians(36*i);z=3.38*i
    for s,sg in ((0,-1),(1,1)):
        a1=th+sg*np.radians(65)                  # C1' of this strand
        zs=z-sg*0.0
        # sugar ring and backbone, walking outward and along the strand direction (strands antiparallel)
        dz=1.0 if s==0 else -1.0
        for (rr,da,ddz,rad,k) in ((5.9,0,0,1.7,0),(6.9,sg*8,.6*dz,1.6,0),(7.4,sg*16,1.4*dz,1.7,0),(6.6,sg*20,.2*dz,1.55,0),
                                  (8.2,sg*24,2.2*dz,1.7,0),(8.9,sg*30,2.9*dz,1.85,1),(10.1,sg*27,3.4*dz,1.55,1),(9.4,sg*38,2.4*dz,1.55,1),
                                  (8.0,sg*41,3.3*dz,1.55,0),(7.3,sg*10,-.8*dz,1.52,0)):
            atoms.append((*cyl(rr,a1+np.radians(da),zs+ddz),rad,k))
    for s2,sg2 in ((0,-1),(1,1)):
        dz2=1.0 if s2==0 else -1.0
        for f in np.linspace(0,1,4,endpoint=False):
            a=th+sg2*np.radians(65+30)+np.radians(36)*f;zz=z+2.9*dz2+3.38*f
            atoms.append((*cyl(9.0,a,zz),1.75,1))
    # base-pair slab between the two C1' atoms, pushed toward the major groove
    c1=cyl(5.9,th-np.radians(65),z);c2=cyl(5.9,th+np.radians(65),z)
    ch=c2-c1;L=np.linalg.norm(ch);u=ch/L;maj=-cyl(1,th,0);maj-=u*(maj@u);maj/=np.linalg.norm(maj)
    for t in np.linspace(.13,.87,8):
        for o in (0.9,2.6,4.1):
            if (t<.2 or t>.8) and o>3: continue
            p=c1+ch*t+maj*o+np.array([0,0,rng.normal(0,.12)])
            atoms.append((*p,1.62,2))
    # 5-methylcytosine: the C5 methyl projects into the major groove; mark the C of every CpG step (both strands)
    b=seq[i];nxt=seq[i+1] if i+1<NBP else '';prv=seq[i-1] if i>0 else ''
    if b=='C' and nxt=='G':
        atoms.append((*(c1+ch*.3+maj*6.0+np.array([0,0,.4])),2.3,3))
    if b=='G' and prv=='C':  # complementary C on the other strand
        atoms.append((*(c1+ch*.7+maj*6.0+np.array([0,0,-.4])),2.3,3))
A=np.array([a[:3] for a in atoms]);rad=np.array([a[3] for a in atoms]);K=np.array([a[4] for a in atoms])
A-=A.mean(0)
def rot(a,ax):
    c,s=np.cos(a),np.sin(a)
    return {'x':np.array([[1,0,0],[0,c,-s],[0,s,c]]),'y':np.array([[c,0,s],[0,1,0],[-s,0,c]]),'z':np.array([[c,-s,0],[s,c,0],[0,0,1]])}[ax]
# helix axis is z: lay it in the picture plane, then tilt toward the viewer and lean it on a diagonal
P=A@rot(np.radians(-90),'x').T              # axis -> y (vertical)
P=P@rot(np.radians(float(sys.argv[4]) if len(sys.argv)>4 else 22),'x').T   # top leans away (depth)
P=P@rot(np.radians(float(sys.argv[5]) if len(sys.argv)>5 else -24),'z').T  # diagonal lean
# mild perspective
cam=260.0;f=cam/(cam-P[:,2]);P[:,0]*=f;P[:,1]*=f;rad=rad*f
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
    bl=blur(Zf,rr);ao+=np.clip((bl-Zf)/(rr*1.6),0,1)
ao=np.clip(1-ao/2.2,0,1)
Lt=np.array([-.5,.6,.62]);Lt/=np.linalg.norm(Lt)
lam=np.clip((N*Lt).sum(-1),0,1)
Hh=Lt+np.array([0,0,1]);Hh/=np.linalg.norm(Hh);spec=np.clip((N*Hh).sum(-1),0,1)**42
rim=(1-np.clip(N[...,2],0,1))**3
steel=np.array([214,222,228])/255;phos=np.array([236,240,243])/255
ice=np.array([204,230,246])/255;base=ice*0.55+np.array([52,120,170])/255*0.45
meth=np.array([150,215,255])/255
cols=np.array([steel,phos,base,meth])
col=cols[K[np.clip(ID,0,None)]]
isM=(K[np.clip(ID,0,None)]==3)&mask
zn=(Z-Z[mask].min())/(Z[mask].max()-Z[mask].min()+1e-6);zn=np.where(mask,zn,0)
ink=np.array([10,14,18])/255
shade=(0.22+0.85*lam)[...,None]*col*(0.45+0.55*ao[...,None])
shade+=spec[...,None]*0.34*ao[...,None]+rim[...,None]*col*0.25
shade=np.where(isM[...,None],shade*1.05+np.array([.05,.16,.28]),shade)
fz=(0.5+0.5*zn[...,None]**.8)
shade=shade*fz+ink*(1-fz)*0.7
img=np.clip(shade,0,1)
rgba=np.dstack([img*255,mask*255.0]).astype(np.uint8)
im=Image.fromarray(rgba,'RGBA').resize((S//2,S//2),Image.LANCZOS)
im=im.crop(im.getbbox());im.save(OUT);print(im.size,len(atoms),int(isM.sum()>0))
