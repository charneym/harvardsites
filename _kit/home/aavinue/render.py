#!/usr/bin/env python3
"""AAVINUE hero: a space-filling model of the structure their platform is named for and built on. PDB 1KX5 (RCSB):
"X-Ray Structure of the Nucleosome Core Particle, NCP147, at 1.9 A Resolution", Davey, Sargent et al., J Mol Biol 2002.
147 base pairs of DNA wrapped about 1.65 turns around the histone octamer (chains A-H), which is the natural packaging
their Mini-Nucleosomes imitate: "engineered, nanosized particles created by chromatinizing DNA or RNA with core
peptides through a unique condensation reaction" (aavinue.com), the vector of NIH NIA SBIR 1R43AG097308.
Heavy atoms only. The wrapped DNA in their teal and cyan, the core peptides in a quiet slate so the wrap reads.
The flexible histone tails that trail outside the DNA gyre are omitted, as in most figures of the particle, so the
disc keeps a clean silhouette; nothing inside the gyre is changed.
Variant B light: key from the upper left (the headline side), soft depth AO, a dim rim, no glow. Transparent ground.
Usage: render.py ay ax az size out"""
import numpy as np, pathlib, sys
from PIL import Image
def _box(a,r,ax):
    a=np.moveaxis(a,ax,0);p=np.concatenate([np.repeat(a[:1],r+1,0),a,np.repeat(a[-1:],r,0)]);c=np.cumsum(p,0)
    return np.moveaxis((c[2*r+1:]-c[:-2*r-1])/(2*r+1),0,ax)
def blur(a,s):
    r=max(1,int(s*0.9))
    for _ in range(3): a=_box(_box(a,r,0),r,1)
    return a
H=pathlib.Path(__file__).resolve().parent
R={'C':1.70,'N':1.55,'O':1.52,'P':1.80,'S':1.80}
DNAC={'DA','DT','DG','DC'}
xyz=[];el=[];isd=[]
for l in open(H/'1kx5.pdb'):
    if not l.startswith('ATOM'): continue
    e=l[76:78].strip() or l[12:14].strip()[0]
    if e not in R: continue
    xyz.append([float(l[30:38]),float(l[38:46]),float(l[46:54])]);el.append(e)
    isd.append(l[17:20].strip() in DNAC)
X=np.array(xyz);E=np.array(el);D=np.array(isd)
X=X-X.mean(0)
# frame: the superhelix axis (the disc's normal) toward the viewer, so the DNA wrap reads as a ring
w,v=np.linalg.eigh(np.cov(X[D].T))
zax=v[:,0]                      # least spread across the DNA ring = the superhelical axis
ya=v[:,-1]-zax*(v[:,-1]@zax);ya/=np.linalg.norm(ya);xa=np.cross(ya,zax)
P=X@np.stack([xa,ya,zax],1)
# drop the flexible histone tails that trail outside the DNA gyre (radius measured in the disc plane)
rad2=np.hypot(P[:,0],P[:,1])
keep=D|(rad2<=rad2[D].max()*1.0)
P,E,D=P[keep],E[keep],D[keep]
def rot(a,ax):
    a=np.radians(a);c,s=np.cos(a),np.sin(a)
    return {'x':np.array([[1,0,0],[0,c,-s],[0,s,c]]),'y':np.array([[c,0,s],[0,1,0],[-s,0,c]]),'z':np.array([[c,-s,0],[s,c,0],[0,0,1]])}[ax]
ang=[float(a) for a in sys.argv[1:4]]
P=P@rot(ang[0],'y').T@rot(ang[1],'x').T@rot(ang[2],'z').T
S=int(sys.argv[4]);out=sys.argv[5]
rad=np.array([R[e] for e in E])
lo=(P[:,:2]-rad[:,None]).min(0);hi=(P[:,:2]+rad[:,None]).max(0)
sc=S*0.93/(hi-lo).max();off=np.array([S,S])/2-(lo+hi)/2*sc
Z=np.full((S,S),-1e9);N=np.zeros((S,S,3));ID=np.full((S,S),-1)
for i in np.argsort(P[:,2]):
    cx,cy=P[i,:2]*sc+off;cy=S-cy;r=rad[i]*sc
    x0,x1=int(max(cx-r,0)),int(min(cx+r+1,S));y0,y1=int(max(cy-r,0)),int(min(cy+r+1,S))
    yy,xx=np.mgrid[y0:y1,x0:x1];dx=(xx+.5-cx)/r;dy=(yy+.5-cy)/r;d2=dx*dx+dy*dy;m=d2<1
    dz=np.sqrt(np.clip(1-d2,0,1));zz=P[i,2]*sc+dz*r
    sub=Z[y0:y1,x0:x1];upd=m&(zz>sub)
    sub[upd]=zz[upd];N[y0:y1,x0:x1][upd]=np.stack([dx,-dy,dz],-1)[upd];ID[y0:y1,x0:x1][upd]=i
mask=ID>=0
Zf=np.where(mask,Z,Z[mask].min()-40*sc/10);ao=np.zeros_like(Z)
for rr in (6,14,30,60):
    b=blur(Zf,rr*S/2400);ao+=np.clip((b-Zf)/(rr*S/2400*1.6),0,1)
ao=np.clip(1-ao/2.9,0,1)
L=np.array([-.55,.55,.62]);L/=np.linalg.norm(L)
lam=np.clip((N*L).sum(-1),0,1)
Hh=L+np.array([0,0,1]);Hh/=np.linalg.norm(Hh);spec=np.clip((N*Hh).sum(-1),0,1)**40
rim=(1-np.clip(N[...,2],0,1))**3*np.clip(N[...,0]*1.2+0.2,0,1)
c=lambda h:np.array([int(h[i:i+2],16) for i in (1,3,5)])/255
# their palette: teal #41b1bb and cyan #00b0f0 for the DNA, a quiet slate for the core peptides
dna_b,dna_p=c('#2fc6d8'),c('#00b0f0')
prot,protN=c('#8493a1'),c('#73818e')
col=np.zeros((len(E),3))
col[D]=dna_b
col[D&((E=='P')|(E=='O'))]=dna_p
col[~D]=prot
col[(~D)&((E=='N')|(E=='O'))]=protN
C=col[np.clip(ID,0,None)]
zn=(Z-Z[mask].min())/(Z[mask].max()-Z[mask].min()+1e-6);zn=np.where(mask,zn,0)
ink=c('#07161b')
shade=(0.17+0.85*lam*(0.58+0.42*ao))[...,None]*C*(0.55+0.45*ao[...,None])
shade+=spec[...,None]*0.30*ao[...,None]+rim[...,None]*C*0.22
f=(0.74+0.26*zn)[...,None]
shade=shade*f+ink*(1-f)*0.6
DD=D[np.clip(ID,0,None)]&mask
shade[DD]=np.clip(shade[DD]*1.10+0.015,0,1)
img=np.clip(shade,0,1)
A=mask.astype(np.float32)
rgba=np.dstack([img*255,A*255]).astype(np.uint8)
im=Image.fromarray(rgba,'RGBA').resize((S//2,S//2),Image.LANCZOS)
im=im.crop(im.getbbox());im.save(out);print(out,im.size)
