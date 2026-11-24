#!/usr/bin/env python3
"""Hero render: space-filling model of a camelid single-domain antibody (VHH), the class of vector VECTrans uses
(PDB 1MEL chain A, cAb-Lys3, 2.5 A crystal structure; a representative VHH, not Vect-Horus' proprietary sequence).
Framework in pale porcelain, the three CDR loops (the binding tips) in the logo red #ee2e24.
Shading: Lambert + specular + rim + depth-buffer ambient occlusion, transparent ground. Usage: vhh.py rx ry rz size out.png"""
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
CDR=[(26,35),(50,58),(97,122)]
xyz=[];el=[];cdr=[]
for l in open(H/'1mel.pdb'):
    if l.startswith('ATOM') and l[21]=='A':
        e=l[76:78].strip() or l[12:14].strip()[0]
        if e not in R: continue
        n=int(l[22:26]);xyz.append([float(l[30:38]),float(l[38:46]),float(l[46:54])]);el.append(e)
        cdr.append(any(a<=n<=b for a,b in CDR))
X=np.array(xyz);X-=X.mean(0)
w,v=np.linalg.eigh(np.cov(X.T));P=X@v[:,::-1]
def rot(a,ax):
    c,s=np.cos(a),np.sin(a)
    return {'x':np.array([[1,0,0],[0,c,-s],[0,s,c]]),'y':np.array([[c,0,s],[0,1,0],[-s,0,c]]),'z':np.array([[c,-s,0],[s,c,0],[0,0,1]])}[ax]
ang=[float(a) for a in sys.argv[1:4]]
P=P@rot(ang[0],'x').T@rot(ang[1],'y').T@rot(ang[2],'z').T
S=int(sys.argv[4]);out=sys.argv[5]
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
Zf=np.where(mask,Z,Z[mask].min()-4*sc)
ao=np.zeros_like(Z)
for rr in (6,14,30,60):
    b=gf(Zf,rr*S/1800);ao+=np.clip((b-Zf)/(rr*S/1800*1.6),0,1)
ao=np.clip(1-ao/2.2,0,1)
L=np.array([-.5,.6,.62]);L/=np.linalg.norm(L)
lam=np.clip((N*L).sum(-1),0,1)
Hh=L+np.array([0,0,1]);Hh/=np.linalg.norm(Hh);spec=np.clip((N*Hh).sum(-1),0,1)**40
rim=(1-np.clip(N[...,2],0,1))**3
C=np.array(cdr);E=np.array(el)
porc=np.array([226,224,221])/255;red=np.array([238,46,36])/255
base=np.where(C[:,None],red,porc)
base=np.where((~C&((E=='O')|(E=='N')))[:,None],porc*.9,base)
base=np.where((C&((E=='O')|(E=='N')))[:,None],red*.86,base)
col=base[np.clip(ID,0,None)]
zn=(Z-Z[mask].min())/(Z[mask].max()-Z[mask].min()+1e-6);zn=np.where(mask,zn,0)
ink=np.array([17,17,19])/255
sh=(0.08+0.84*lam*(0.55+0.45*ao))[...,None]*col*(0.55+0.45*ao[...,None])
sh+=spec[...,None]*0.34*ao[...,None]+rim[...,None]*col*0.18
k=(0.58+0.42*zn[...,None]);sh=sh*k+ink*(1-k)*0.6
img=np.clip(sh,0,1)
rgba=np.dstack([img*255,mask*255.0]).astype(np.uint8)
im=Image.fromarray(rgba,'RGBA').resize((S//2,S//2),Image.LANCZOS)
im=im.crop(im.getbbox());im.save(out);print(im.size,len(el),C.sum())
