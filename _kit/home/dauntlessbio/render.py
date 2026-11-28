#!/usr/bin/env python3
"""Dauntless Biotherapeutics hero: a space-filling model of their actual target, the full ectodomain of human CD155
(PVR / Necl-5). PDB 4FQP (RCSB): "Crystal structure of human Nectin-like 5 full ectodomain (D1-D3)", Harrison, Vendome
et al., Nat Struct Mol Biol 2012. CD155 is the antigen of their CD155-targeted antibody-drug conjugate (NIH NCI SBIR
1R43CA306683: "CD155 (PVR) is a clinically unexploited antigen expressed in more than 60% of breast cancers").
Heavy atoms only. The membrane-distal D1 domain, which carries the binding site their antibody engages and through
which CD155 suppresses anti-tumour immunity, in their logo's pale yellow; D2 and D3 in their two site blues.
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
# domain boundaries of the CD155 ectodomain (UNP 28-334): D1 28-144, D2 145-245, D3 246-333
xyz=[];el=[];dom=[]
for l in open(H/'4fqp.pdb'):
    if not l.startswith('ATOM'): continue
    e=l[76:78].strip() or l[12:14].strip()[0]
    if e not in R: continue
    r=int(l[22:26])
    xyz.append([float(l[30:38]),float(l[38:46]),float(l[46:54])]);el.append(e)
    dom.append(0 if r<145 else (1 if r<246 else 2))
X=np.array(xyz);E=np.array(el);DM=np.array(dom)
X=X-X.mean(0)
# frame: the long axis of the three-domain rod vertical, D1 at the top (membrane-distal)
w,v=np.linalg.eigh(np.cov(X.T));ya=v[:,-1]
if X[DM==0].mean(0)@ya<0: ya=-ya
zax=np.array([0.,0.,1.]);zax=zax-ya*(zax@ya);zax/=np.linalg.norm(zax);xa=np.cross(ya,zax)
P=X@np.stack([xa,ya,zax],1)
def rot(a,ax):
    a=np.radians(a);c,s=np.cos(a),np.sin(a)
    return {'x':np.array([[1,0,0],[0,c,-s],[0,s,c]]),'y':np.array([[c,0,s],[0,1,0],[-s,0,c]]),'z':np.array([[c,-s,0],[s,c,0],[0,0,1]])}[ax]
ang=[float(a) for a in sys.argv[1:4]]
P=P@rot(ang[0],'y').T@rot(ang[1],'x').T@rot(ang[2],'z').T
S=int(sys.argv[4]);out=sys.argv[5]
rad=np.array([R[e] for e in E])
lo=(P[:,:2]-rad[:,None]).min(0);hi=(P[:,:2]+rad[:,None]).max(0)
sc=S*0.92/(hi-lo).max();off=np.array([S,S])/2-(lo+hi)/2*sc
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
ao=np.clip(1-ao/2.2,0,1)
L=np.array([-.55,.55,.62]);L/=np.linalg.norm(L)
lam=np.clip((N*L).sum(-1),0,1)
Hh=L+np.array([0,0,1]);Hh/=np.linalg.norm(Hh);spec=np.clip((N*Hh).sum(-1),0,1)**40
rim=(1-np.clip(N[...,2],0,1))**3*np.clip(N[...,0]*1.2+0.2,0,1)
c=lambda h:np.array([int(h[i:i+2],16) for i in (1,3,5)])/255
col=np.zeros((len(E),3))
# their palette: pale yellow #dfe178 (D1), mid blue #2f7fb8 (D2), pale blue #abcae0 (D3); heteroatoms a shade down
base=[c('#dfe178'),c('#2f7fb8'),c('#abcae0')]
for k in range(3):
    m=DM==k;col[m]=base[k];col[m&(E!='C')]=base[k]*0.86
C=col[np.clip(ID,0,None)]
zn=(Z-Z[mask].min())/(Z[mask].max()-Z[mask].min()+1e-6);zn=np.where(mask,zn,0)
ink=c('#04192a')
shade=(0.10+0.85*lam*(0.55+0.45*ao))[...,None]*C*(0.55+0.45*ao[...,None])
shade+=spec[...,None]*0.30*ao[...,None]+rim[...,None]*C*0.22
f=(0.60+0.40*zn)[...,None]
shade=shade*f+ink*(1-f)*0.6
img=np.clip(shade,0,1)
A=mask.astype(np.float32)
rgba=np.dstack([img*255,A*255]).astype(np.uint8)
im=Image.fromarray(rgba,'RGBA').resize((S//2,S//2),Image.LANCZOS)
im=im.crop(im.getbbox());im.save(out);print(out,im.size)
