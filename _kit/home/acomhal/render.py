#!/usr/bin/env python3
"""Acomhal Research hero: a space-filling model of connexin43, the protein their drug is drawn from. PDB 7F94 (RCSB):
"Structure of C-terminal truncated connexin43/Cx43/GJA1 gap junction intercellular channel", Lee, Cha et al.,
Nat Commun 2023, cryo-EM. Twelve subunits, two connexons docked end to end across the junction between two cells.
Their peptide JM2 is a Cx43 mimetic that disrupts the channel-independent interaction between the Cx43 cytoplasmic
tail and microtubules, killing glioblastoma stem cells (NIH NCI STTR 1R41CA306619). That flexible C-terminal tail is
not resolved in this structure, so what the model shows is the membrane-spanning body of the protein, not the peptide.
Heavy atoms only. The two connexons in their two blues so the docked halves of the junction read.
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
for l in open(H/'7f94.pdb'):
    if not l.startswith('ATOM'): continue
    e=l[76:78].strip() or l[12:14].strip()[0]
    if e not in R: continue
    c=l[21]
    if c not in order: order[c]=len(order)
    xyz.append([float(l[30:38]),float(l[38:46]),float(l[46:54])]);el.append(e);chn.append(order[c])
X=np.array(xyz);E=np.array(el);CH=np.array(chn)
X=X-X.mean(0)
# frame: the channel axis (the pore) vertical; it is the axis of greatest spread for a docked pair of connexons
w,v=np.linalg.eigh(np.cov(X.T));ya=v[:,-1]
zax=np.array([0.,0.,1.]);zax=zax-ya*(zax@ya);zax/=np.linalg.norm(zax);xa=np.cross(ya,zax)
P=X@np.stack([xa,ya,zax],1)
# which connexon each chain belongs to: by its mean position along the pore axis
side=np.zeros(len(order),int)
for k in range(len(order)):
    side[k]=1 if P[CH==k,1].mean()>0 else 0
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
ao=np.clip(1-ao/2.6,0,1)
L=np.array([-.55,.55,.62]);L/=np.linalg.norm(L)
lam=np.clip((N*L).sum(-1),0,1)
Hh=L+np.array([0,0,1]);Hh/=np.linalg.norm(Hh);spec=np.clip((N*Hh).sum(-1),0,1)**40
rim=(1-np.clip(N[...,2],0,1))**3*np.clip(N[...,0]*1.2+0.2,0,1)
c=lambda h:np.array([int(h[i:i+2],16) for i in (1,3,5)])/255
# their palette: the site's cyan and deeper blue, one per connexon, alternating subunits a shade apart
A0,A1=c('#17bcd2'),c('#0f9cb0')
B0,B1=c('#4d8ada'),c('#3b6fc2')
col=np.zeros((len(E),3))
for k in range(len(order)):
    base=(A0 if k%2==0 else A1) if side[k]==0 else (B0 if k%2==0 else B1)
    m=CH==k;col[m]=base;col[m&(E!='C')]=base*0.86
C=col[np.clip(ID,0,None)]
zn=(Z-Z[mask].min())/(Z[mask].max()-Z[mask].min()+1e-6);zn=np.where(mask,zn,0)
ink=c('#07172e')
shade=(0.17+0.85*lam*(0.58+0.42*ao))[...,None]*C*(0.55+0.45*ao[...,None])
shade+=spec[...,None]*0.30*ao[...,None]+rim[...,None]*C*0.22
f=(0.72+0.28*zn)[...,None]
shade=shade*f+ink*(1-f)*0.6
img=np.clip(shade,0,1)
A=mask.astype(np.float32)
rgba=np.dstack([img*255,A*255]).astype(np.uint8)
im=Image.fromarray(rgba,'RGBA').resize((S//2,S//2),Image.LANCZOS)
im=im.crop(im.getbbox());im.save(out);print(out,im.size)
