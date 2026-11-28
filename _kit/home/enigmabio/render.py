#!/usr/bin/env python3
"""Enigma Biomedical hero: a space-filling model of the pathology their tracer is made to find — a 4R tau filament
from the brain of an individual with progressive supranuclear palsy. PDB 7P65 (RCSB): "Progressive supranuclear palsy
tau filament", Shi, Zhang et al., Nature 2021, cryo-EM. Five stacked subunits of microtubule-associated protein tau
(residues 272-381), the repeat region that forms the ordered core of the filament.
[18F]Enigma-4R, the PET tracer of NIH NIA SBIR 1R44AG102186, binds 4R tau with high affinity; PSP is one of the 4R
tauopathies the trial enrols. Heavy atoms only. The stack runs from their royal blue at the back to their cyan at the
front, so the helical twist and the rungs of the filament read.
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
xyz=[];el=[];chn=[]
order={}
for l in open(H/'7p65.pdb'):
    if not l.startswith('ATOM'): continue
    e=l[76:78].strip() or l[12:14].strip()[0]
    if e not in R: continue
    c=l[21]
    if c not in order: order[c]=len(order)
    xyz.append([float(l[30:38]),float(l[38:46]),float(l[46:54])]);el.append(e);chn.append(order[c])
X=np.array(xyz);E=np.array(el);CH=np.array(chn);NC=len(order)
X=X-X.mean(0)
# frame: the filament (stacking) axis vertical; it is the axis of least spread in the rung plane
w,v=np.linalg.eigh(np.cov(X.T));ya=v[:,0]
cen=np.array([X[CH==k].mean(0) for k in range(NC)])
ax_=cen[-1]-cen[0];ya=ax_/np.linalg.norm(ax_)
zax=v[:,-1]-ya*(v[:,-1]@ya);zax/=np.linalg.norm(zax);xa=np.cross(ya,zax)
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
# their palette: royal blue #4169e1 through to cyan #21baf3 along the stack
A_,B_=c('#1e4a9c'),c('#3fd0ff')
# colour by depth so the near rung of the filament separates from the ones behind it
zn=(Z-Z[mask].min())/(Z[mask].max()-Z[mask].min()+1e-6);zn=np.where(mask,zn,0)
tz=np.clip((zn-0.30)/0.62,0,1)[...,None]
C=A_*(1-tz)+B_*tz
het=(E!='C')[np.clip(ID,0,None)]
C=np.where(het[...,None],C*0.86,C)
ink=c('#0a121a')
shade=(0.10+0.85*lam*(0.55+0.45*ao))[...,None]*C*(0.55+0.45*ao[...,None])
shade+=spec[...,None]*0.30*ao[...,None]+rim[...,None]*C*0.22
f=(0.52+0.48*zn)[...,None]
shade=shade*f+ink*(1-f)*0.6
img=np.clip(shade,0,1)
A=mask.astype(np.float32)
rgba=np.dstack([img*255,A*255]).astype(np.uint8)
im=Image.fromarray(rgba,'RGBA').resize((S//2,S//2),Image.LANCZOS)
im=im.crop(im.getbbox());im.save(out);print(out,im.size)
