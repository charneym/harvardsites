#!/usr/bin/env python3
"""Render the hero: a space-filling model of human serum transferrin (diferric, PDB 3V83, 2.1 A crystal
structure, chain A), the plasma protein that ZippinCarriers link to an oligonucleotide (NIH R43NS139812 abstract).
Shaded like a material model (Lambert + rim + specular + multi-radius depth ambient occlusion + depth fog);
N-lobe (res 1-336) in Zippin royal blue, C-lobe (337-679) in pale ice blue, the inter-lobe peptide in deep navy.
Output: ../../../zippinbio/hero.webp (RGBA, alpha feathered at the silhouette only)."""
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
R={'C':1.70,'N':1.55,'O':1.52,'S':1.80}
xyz=[];el=[];rs=[]
for l in open(H/'3v83.pdb'):
    if l.startswith('ATOM') and l[21]=='A':
        e=l[76:78].strip()
        if e not in R: continue
        if l[16] not in ' A': continue
        xyz.append([float(l[30:38]),float(l[38:46]),float(l[46:54])]);el.append(e);rs.append(int(l[22:26]))
X=np.array(xyz);X-=X.mean(0)
w,v=np.linalg.eigh(np.cov(X.T));V=v[:,::-1];P=X@V
def rot(a,ax):
    c,s=np.cos(a),np.sin(a)
    return {'x':np.array([[1,0,0],[0,c,-s],[0,s,c]]),'y':np.array([[c,0,s],[0,1,0],[-s,0,c]]),'z':np.array([[c,-s,0],[s,c,0],[0,0,1]])}[ax]
ang=[float(a) for a in (sys.argv[1:4] if len(sys.argv)>3 else (0.5,0.25,1.15))]
P=P@rot(ang[0],'x').T@rot(ang[1],'y').T@rot(ang[2],'z').T
S=int(sys.argv[4]) if len(sys.argv)>4 else 3400
rad=np.array([R[e] for e in el])
lo=(P[:,:2]-rad[:,None]).min(0);hi=(P[:,:2]+rad[:,None]).max(0)
sc=S*0.9/(hi-lo).max();off=np.array([S,S])/2-(lo+hi)/2*sc
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
for rr in (5,12,26,55,110):
    b=blur(Zf,rr);ao+=np.clip((b-Zf)/(rr*1.5),0,1)
ao=np.clip(1-ao/2.4,0,1)
L=np.array([-.5,.6,.62]);L/=np.linalg.norm(L)
lam=np.clip((N*L).sum(-1),0,1)
Hh=L+np.array([0,0,1]);Hh/=np.linalg.norm(Hh);spec=np.clip((N*Hh).sum(-1),0,1)**42
rim=(1-np.clip(N[...,2],0,1))**3
RS=np.array(rs);E=np.array(el)
royal=np.array([66,108,250])/255;ice=np.array([206,220,255])/255;navy=np.array([34,58,170])/255
base=np.where((RS<=336)[:,None],royal,ice)
base=np.where(((RS>=332)&(RS<=344))[:,None],navy,base)
# heteroatoms a touch deeper so the surface has a fine grain, as on a real atomic model
base=np.where(((E=='O')|(E=='N'))[:,None],base*0.86,base)
base=np.where((E=="S")[:,None],base*1.04,base)
col=base[np.clip(ID,0,None)]
zn=(Z-Z[mask].min())/(Z[mask].max()-Z[mask].min()+1e-6);zn=np.where(mask,zn,0)
ink=np.array([7,13,42])/255
shade=(0.10+0.95*lam*(0.5+0.5*ao))[...,None]*col*(0.5+0.5*ao[...,None])
shade+=spec[...,None]*0.26*ao[...,None]+rim[...,None]*col*0.25
f=(0.55+0.45*zn)[...,None]
shade=shade*f+ink*(1-f)*0.7
img=np.clip(shade,0,1)
rgba=np.dstack([img*255,mask*255]).astype(np.uint8)
im=Image.fromarray(rgba,'RGBA').resize((S//2,S//2),Image.LANCZOS)
im=im.crop(im.getbbox())
out=H.parent.parent.parent/'zippinbio';out.mkdir(exist_ok=True)
im.save(H/'hero_preview.png');im.save(out/'hero.webp',quality=90,method=6);print(im.size,X.shape)
