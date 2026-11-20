#!/usr/bin/env python3
"""Hero render: human alpha-thrombin bound to the thrombin-binding aptamer (TBA), PDB 4DIH (RCSB, X-ray).
The TBA quadruplex is the scaffold of Deep Creek Pharma's TBA-EFPREX programme (NIH 1R41CA302074): its thymidines are the
positions replaced by 5-fluoro-2'-deoxyuridine. Space-filling, shaded like a material model (Lambert + rim + specular + depth AO).
Thrombin in the logo's deep green, the aptamer in the logo's blue, thymine C5 substituents (where F goes in FdU) picked out pale.
Output: hero.png (RGBA, transparent ground)."""
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
xyz=[];el=[];ch=[];hot=[];bb=[]
for l in open(H/'4dih.pdb'):
    if not l.startswith('ATOM'): continue
    e=l[76:78].strip() or l[12:14].strip()[0]
    if e not in R: continue
    n=l[12:16].strip();c=l[21]
    xyz.append([float(l[30:38]),float(l[38:46]),float(l[46:54])]);el.append(e);ch.append(c)
    hot.append(c=='D' and l[17:20].strip()=='DT' and n in('C7','C5M'))
    bb.append(n in('P','OP1','OP2',"O5'","C5'","C4'","O4'","C3'","O3'","C2'","C1'") or n in('N','CA','C','O'))
X=np.array(xyz);CH=np.array(ch);HOT=np.array(hot);E=np.array(el);BB=np.array(bb)
X-=X.mean(0)
# orient: aptamer toward the viewer and up-right
apt=X[CH=='D'].mean(0);d=apt/np.linalg.norm(apt)
def rot(a,ax):
    c,s=np.cos(a),np.sin(a)
    return {'x':np.array([[1,0,0],[0,c,-s],[0,s,c]]),'y':np.array([[c,0,s],[0,1,0],[-s,0,c]]),'z':np.array([[c,-s,0],[s,c,0],[0,0,1]])}[ax]
# rotate so d -> (0.35,0.45,0.82)
t=np.array([.30,.50,.81]);t/=np.linalg.norm(t)
v=np.cross(d,t);s=np.linalg.norm(v);cc=d@t
K=np.array([[0,-v[2],v[1]],[v[2],0,-v[0]],[-v[1],v[0],0]])
Rm=np.eye(3)+K+K@K*((1-cc)/(s*s))
P=X@Rm.T
ang=[float(a) for a in sys.argv[1:4]] if len(sys.argv)>3 else [0,0,0.2]
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
Zf=np.where(mask,Z,Z[mask].min()-6*sc)
ao=np.zeros_like(Z)
for rr in (6,14,30,60):
    b=blur(Zf,rr);ao+=np.clip((b-Zf)/(rr*1.6),0,1)
ao=np.clip(1-ao/2.2,0,1)
L=np.array([-.45,.55,.7]);L/=np.linalg.norm(L)
lam=np.clip((N*L).sum(-1),0,1)
Hh=L+np.array([0,0,1]);Hh/=np.linalg.norm(Hh);spec=np.clip((N*Hh).sum(-1),0,1)**40
rim=(1-np.clip(N[...,2],0,1))**3
g1=np.array([56,190,132])/255;g2=np.array([30,146,100])/255
b1=np.array([40,140,240])/255;b2=np.array([18,98,200])/255
hotc=np.array([150,214,255])/255
col=np.where(BB[:,None],g1,g2)
col=np.where((E=='N')[:,None]&(CH!='D')[:,None],g2*0.92+np.array([.02,.06,.1])*.08,col)
col=np.where((CH=='D')[:,None],np.where(BB[:,None],b1,b2),col)
col=np.where(HOT[:,None],hotc,col)
C=col[np.clip(ID,0,None)]
zn=(Z-Z[mask].min())/(Z[mask].max()-Z[mask].min()+1e-6);zn=np.where(mask,zn,0)
ink=np.array([10,22,18])/255
sh=(0.10+0.82*lam*(0.55+0.45*ao))[...,None]*C*(0.55+0.45*ao[...,None])
sh+=spec[...,None]*0.32*ao[...,None]+rim[...,None]*C*0.25
f=(0.6+0.4*zn[...,None]);sh=sh*f+ink*(1-f)*0.6
img=np.clip(sh,0,1)
rgba=np.dstack([img*255,mask.astype(np.float32)*255]).astype(np.uint8)
im=Image.fromarray(rgba,'RGBA').resize((S//2,S//2),Image.LANCZOS)
im=im.crop(im.getbbox());im.save(H/'hero.png');print(im.size,X.shape,HOT.sum())
