#!/usr/bin/env python3
"""Hero render: a space-filling model of human Pim-1 kinase, the kinase Vortex's lead compound VBT-34 is designed against
(NIH 1R43CA281394), from its crystal structure (RCSB PDB 1XWS). Protein atoms only (no ligand, waters or ions shown).
N-lobe (residues < 121) in the logo's bright blue, C-lobe in its deep blue; Lambert + rim + spec + depth AO. Output pim.png (RGBA)."""
import numpy as np, pathlib, sys
from PIL import Image
def _box(a,r,ax):
    a=np.moveaxis(a,ax,0);p=np.concatenate([np.repeat(a[:1],r+1,0),a,np.repeat(a[-1:],r,0)]);c=np.cumsum(p,0)
    return np.moveaxis((c[2*r+1:]-c[:-2*r-1])/(2*r+1),0,ax)
def gf(a,s):
    r=max(1,int(s*0.9))
    for _ in range(3): a=_box(_box(a,r,0),r,1)
    return a
H=pathlib.Path(__file__).resolve().parent
R={'C':1.70,'N':1.55,'O':1.52,'S':1.80}
xyz=[];el=[];res=[]
for l in open(H/'1xws.pdb'):
    if l.startswith('ATOM'):
        e=l[76:78].strip() or l[12:14].strip()[0]
        if e not in R: continue
        xyz.append([float(l[30:38]),float(l[38:46]),float(l[46:54])]);el.append(e);res.append(int(l[22:26]))
X=np.array(xyz);X-=X.mean(0)
w,v=np.linalg.eigh(np.cov(X.T));P=X@v[:,::-1]
def rot(a,ax):
    c,s=np.cos(a),np.sin(a)
    return {'x':np.array([[1,0,0],[0,c,-s],[0,s,c]]),'y':np.array([[c,0,s],[0,1,0],[-s,0,c]]),'z':np.array([[c,-s,0],[s,c,0],[0,0,1]])}[ax]
ang=[float(a) for a in (sys.argv[1:4] if len(sys.argv)>3 else (0.2,0.5,1.75))]
P=P@rot(ang[0],'x').T@rot(ang[1],'y').T@rot(ang[2],'z').T
S=int(sys.argv[4]) if len(sys.argv)>4 else 2000
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
Zf=np.where(mask,Z,Z[mask].min()-40*sc/10)
ao=np.zeros_like(Z)
for rr in (6,14,30,60):
    b=gf(Zf,rr);ao+=np.clip((b-Zf)/(rr*1.6),0,1)
ao=np.clip(1-ao/2.2,0,1)
L=np.array([-.5,.55,.68]);L/=np.linalg.norm(L)
lam=np.clip((N*L).sum(-1),0,1)
Hh=L+np.array([0,0,1]);Hh/=np.linalg.norm(Hh);spec=np.clip((N*Hh).sum(-1),0,1)**40
rim=(1-np.clip(N[...,2],0,1))**3
E_=np.array(el);RS=np.array(res)
bright=np.array([70,182,240])/255;deep=np.array([28,112,196])/255
base=np.where((RS<121)[:,None],bright,deep)
base=np.where((E_=='O')[:,None],base*0.86+np.array([.75,.9,1])*0.14,base)
base=np.where((E_=='N')[:,None],base*0.9+np.array([.2,.3,.45])*0.1,base)
base=np.where((E_=='S')[:,None],np.array([150,205,240])/255,base)
col=base[np.clip(ID,0,None)]
zn=(Z-Z[mask].min())/(Z[mask].max()-Z[mask].min()+1e-6);zn=np.where(mask,zn,0)
ink=np.array([8,19,31])/255
shade=(0.10+0.82*lam*(0.55+0.45*ao))[...,None]*col*(0.55+0.45*ao[...,None])
shade+=spec[...,None]*0.32*ao[...,None]+rim[...,None]*np.array([.5,.8,1])*0.16
f=(0.6+0.4*zn[...,None]);shade=shade*f+ink*(1-f)*0.6
img=np.clip(shade*1.18,0,1)
rgba=np.dstack([img*255,mask*255.]).astype(np.uint8)
im=Image.fromarray(rgba,'RGBA').resize((S//2,S//2),Image.LANCZOS)
im=im.crop(im.getbbox());im.save(H/'pim.png');print(im.size,X.shape)
