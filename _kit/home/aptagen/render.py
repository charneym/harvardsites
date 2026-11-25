#!/usr/bin/env python3
"""Render the hero: a space-filling model of a real DNA aptamer bound to its protein target. PDB 4I7Y (RCSB): human
alpha-thrombin in complex with the 27-mer DNA aptamer HD22 bound to exosite II (Russo Krauss et al., 2013). Shaded like a
material model (Lambert + rim + specular + depth AO). The protein in a quiet slate, the aptamer's sugar-phosphate backbone in
Aptagen's logo blue and its bases in the gold of their "Use Aptamers!" line. Transparent ground.
Usage: render.py ax ay az size out"""
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
BBN={'P','OP1','OP2',"O5'","C5'","C4'","O4'","C3'","O3'","C2'","C1'"}
xyz=[];el=[];kind=[];bb=[]
for l in open(H/'4i7y.pdb'):
    if not l.startswith(('ATOM','HETATM')): continue
    if l.startswith('HETATM'): continue
    ch=l[21];e=l[76:78].strip() or l[12:14].strip()[0]
    if e not in R: continue
    k='dna' if ch=='D' else 'prot'
    xyz.append([float(l[30:38]),float(l[38:46]),float(l[46:54])]);el.append(e);kind.append(k);bb.append(l[12:16].strip() in BBN)
X=np.array(xyz);K=np.array(kind);E=np.array(el);BB=np.array(bb)
X=X-X.mean(0)
# frame: z toward the aptamer side (protein centre -> aptamer centre), so the aptamer faces the viewer
cp=X[K=='prot'].mean(0);cd=X[K=='dna'].mean(0);zax=(cd-cp)/np.linalg.norm(cd-cp)
w,v=np.linalg.eigh(np.cov(X.T));xa=v[:,-1]-zax*(v[:,-1]@zax);xa/=np.linalg.norm(xa);ya=np.cross(zax,xa)
P=X@np.stack([xa,ya,zax],1)
def rot(a,ax):
    a=np.radians(a);c,s=np.cos(a),np.sin(a)
    return {'x':np.array([[1,0,0],[0,c,-s],[0,s,c]]),'y':np.array([[c,0,s],[0,1,0],[-s,0,c]]),'z':np.array([[c,-s,0],[s,c,0],[0,0,1]])}[ax]
ang=[float(a) for a in sys.argv[1:4]]
P=P@rot(ang[0],'x').T@rot(ang[1],'y').T@rot(ang[2],'z').T
S=int(sys.argv[4]);out=sys.argv[5]
rad=np.array([R[e] for e in E])
lo=(P[:,:2]-rad[:,None]).min(0);hi=(P[:,:2]+rad[:,None]).max(0)
sc=S*0.9/(hi-lo).max();off=np.array([S,S])/2-(lo+hi)/2*sc
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
    b=blur(Zf,rr);ao+=np.clip((b-Zf)/(rr*1.6),0,1)
ao=np.clip(1-ao/2.2,0,1)
L=np.array([-.45,.55,.7]);L/=np.linalg.norm(L)
lam=np.clip((N*L).sum(-1),0,1)
Hh=L+np.array([0,0,1]);Hh/=np.linalg.norm(Hh);spec=np.clip((N*Hh).sum(-1),0,1)**38
rim=(1-np.clip(N[...,2],0,1))**3
c=lambda h:np.array([int(h[i:i+2],16) for i in (1,3,5)])/255
prot=c('#5d7c9c');protN=c('#4e6c8b')
dnab=c('#3aa6e6');dnas=c('#f0c23c')
col=np.zeros((len(E),3))
pm=K=='prot';col[pm]=prot;col[pm&((E=='N')|(E=='O'))]=protN
dm=K=='dna';col[dm&BB]=dnab;col[dm&~BB]=dnas
C=col[np.clip(ID,0,None)];KI=K[np.clip(ID,0,None)]
zn=(Z-Z[mask].min())/(Z[mask].max()-Z[mask].min()+1e-6);zn=np.where(mask,zn,0)
ink=c('#050b16')
shade=(0.12+0.80*lam*(0.55+0.45*ao))[...,None]*C*(0.55+0.45*ao[...,None])
shade+=spec[...,None]*0.28*ao[...,None]+rim[...,None]*C*0.25
f=(0.58+0.42*zn)[...,None]
shade=shade*f+ink*(1-f)*0.6
isd=(KI=='dna')&mask
shade[isd]=np.clip(shade[isd]*1.12+0.02,0,1)
img=np.clip(shade,0,1)
A=mask.astype(np.float32)
rgba=np.dstack([img*255,A*255]).astype(np.uint8)
im=Image.fromarray(rgba,'RGBA').resize((S//2,S//2),Image.LANCZOS)
im=im.crop(im.getbbox());im.save(H/out);print(out,im.size)
