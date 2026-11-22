#!/usr/bin/env python3
"""Hero render: space-filling model of the real full-length mGlu2 homodimer bound to glutamate and a positive
allosteric modulator (PDB 7MTR, cryo-EM; Seven et al. 2021). Protomer A in Camino orange, protomer B in Camino
magenta, glutamate and the PAM in pale gold. Lambert + rim + spec + depth AO, transparent ground. Out: mglu2.png"""
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
xyz=[];el=[];ch=[];lig=[]
for l in open(H/'7mtr.pdb'):
    if l.startswith(('ATOM','HETATM')):
        rn=l[17:20].strip()
        if rn in ('HOH','NAG'): continue
        e=l[76:78].strip() or l[12:14].strip()[0]
        if e not in R: continue
        xyz.append([float(l[30:38]),float(l[38:46]),float(l[46:54])]);el.append(e);ch.append(l[21]);lig.append(l.startswith('HETATM'))
X=np.array(xyz);X-=X.mean(0);CH=np.array(ch);LIG=np.array(lig)
w,v=np.linalg.eigh(np.cov(X.T));V=v[:,::-1];P=X@V   # col0 = long axis
P=P[:,[1,0,2]]                                       # long axis -> y (vertical)
# orient: the chain-A centroid on the left
if P[CH=='A',0].mean()>0: P[:,0]*=-1;P[:,2]*=-1
def rot(a,ax):
    c,s=np.cos(a),np.sin(a)
    return {'x':np.array([[1,0,0],[0,c,-s],[0,s,c]]),'y':np.array([[c,0,s],[0,1,0],[-s,0,c]]),'z':np.array([[c,-s,0],[s,c,0],[0,0,1]])}[ax]
ang=[float(a) for a in (sys.argv[1:4] if len(sys.argv)>3 else (0.12,0.5,0.0))]
flip=len(sys.argv)>5 and sys.argv[5]=='flip'
if flip: P[:,1]*=-1;P[:,2]*=-1
P=P@rot(ang[0],'x').T@rot(ang[1],'y').T@rot(ang[2],'z').T
S=int(sys.argv[4]) if len(sys.argv)>4 else 2400
rad=np.array([R[e] for e in el])
lo=(P[:,:2]-rad[:,None]).min(0);hi=(P[:,:2]+rad[:,None]).max(0)
sc=S*0.92/(hi-lo).max();off=np.array([S,S])/2-(lo+hi)/2*sc
Z=np.full((S,S),-1e9);N=np.zeros((S,S,3));ID=np.full((S,S),-1)
for i in np.argsort(P[:,2]):
    cx,cy=P[i,:2]*sc+off;cy=S-cy;r=rad[i]*sc
    x0,x1=int(max(cx-r,0)),int(min(cx+r+1,S));y0,y1=int(max(cy-r,0)),int(min(cy+r+1,S))
    yy,xx=np.mgrid[y0:y1,x0:x1];dx=(xx+.5-cx)/r;dy=(yy+.5-cy)/r;d2=dx*dx+dy*dy;m=d2<1
    dz=np.sqrt(np.clip(1-d2,0,1));z=P[i,2]*sc+dz*r
    sub=Z[y0:y1,x0:x1];upd=m&(z>sub)
    sub[upd]=z[upd];N[y0:y1,x0:x1][upd]=np.stack([dx,-dy,dz],-1)[upd];ID[y0:y1,x0:x1][upd]=i
mask=ID>=0
Zf=np.where(mask,Z,Z[mask].min()-40*sc/10);ao=np.zeros_like(Z)
for rr in (6,14,30,60):
    b=blur(Zf,rr);ao+=np.clip((b-Zf)/(rr*1.6),0,1)
ao=np.clip(1-ao/2.2,0,1)
L=np.array([-.45,.55,.7]);L/=np.linalg.norm(L)
lam=np.clip((N*L).sum(-1),0,1)
Hh=L+np.array([0,0,1]);Hh/=np.linalg.norm(Hh);spec=np.clip((N*Hh).sum(-1),0,1)**38
rim=(1-np.clip(N[...,2],0,1))**3
E=np.array(el)
orange=np.array([236,104,22])/255;magenta=np.array([196,10,140])/255;gold=np.array([255,214,140])/255
col_atom=np.where((CH=='A')[:,None],orange,magenta)
# heteroatoms slightly deeper for texture
col_atom=np.where(((E=='N')|(E=='O'))[:,None]&~LIG[:,None],col_atom*0.84,col_atom)
col_atom=np.where(LIG[:,None],gold,col_atom)
col=col_atom[np.clip(ID,0,None)]
zn=(Z-Z[mask].min())/(Z[mask].max()-Z[mask].min()+1e-6);zn=np.where(mask,zn,0)
ink=np.array([20,9,16])/255
shade=(0.10+0.80*lam*(0.55+0.45*ao))[...,None]*col*(0.55+0.45*ao[...,None])
shade+=spec[...,None]*0.30*ao[...,None]+rim[...,None]*col*0.22
f=(0.62+0.38*zn[...,None]);shade=shade*f+ink*(1-f)*0.6
img=np.clip(shade,0,1)
rgba=np.dstack([img*255,mask.astype(np.float32)*255]).astype(np.uint8)
im=Image.fromarray(rgba,'RGBA').resize((S//2,S//2),Image.LANCZOS)
im=im.crop(im.getbbox());im.save(H/'mglu2.png');print(im.size,X.shape,LIG.sum())
