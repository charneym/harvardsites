#!/usr/bin/env python3
"""Render the hero: a space-filling model of the human T-type calcium channel Cav3.1 (PDB 6KZO, cryo-EM, Zhao et al. 2019),
the Cav3 channel family that AfaSci's AFA-281 inhibits. Atom by atom: Lambert + rim + specular + depth-buffer ambient
occlusion. The four repeat domains (I-IV) are shaded in the AfaSci logo blues, from navy to cloud sky, with the atoms lining
the central pore picked out in the gold of their site. Transparent ground. Output: chan.png (RGBA).
Usage: render.py ax ay az size"""
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
xyz=[];el=[];res=[]
for l in open(H/'6kzo.pdb'):
    if l.startswith('ATOM'):
        e=l[76:78].strip() or l[12:14].strip()[0]
        if e not in R: continue
        xyz.append([float(l[30:38]),float(l[38:46]),float(l[46:54])]);el.append(e);res.append(int(l[22:26]))
X=np.array(xyz);X-=X.mean(0);res=np.array(res)
w,v=np.linalg.eigh(np.cov(X.T))
# pore axis: the eigenvector whose eigenvalue is most different from the other two (the channel is a pseudo-4-fold)
d=[abs(w[i]-np.mean(np.delete(w,i))) for i in range(3)];k=int(np.argmax(d))
oth=[i for i in range(3) if i!=k];V=np.stack([v[:,oth[0]],v[:,oth[1]],v[:,k]],1)
if np.linalg.det(V)<0: V[:,0]*=-1
P=X@V
def rot(a,ax):
    c,s=np.cos(a),np.sin(a)
    return {'x':np.array([[1,0,0],[0,c,-s],[0,s,c]]),'y':np.array([[c,0,s],[0,1,0],[-s,0,c]]),'z':np.array([[c,-s,0],[s,c,0],[0,0,1]])}[ax]
ang=[float(a) for a in (sys.argv[1:4] if len(sys.argv)>3 else (0.6,0.0,0.4))]
P=P@rot(ang[2],'z').T@rot(ang[0],'x').T@rot(ang[1],'y').T
S=int(sys.argv[4]) if len(sys.argv)>4 else 2000
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
Zf=np.where(mask,Z,Z[mask].min()-6*sc)
ao=np.zeros_like(Z)
for rr in (6,14,30,64):
    b=blur(Zf,rr);ao+=np.clip((b-Zf)/(rr*1.6),0,1)
ao=np.clip(1-ao/2.2,0,1)
L=np.array([-.45,.6,.66]);L/=np.linalg.norm(L)
lam=np.clip((N*L).sum(-1),0,1)
Hh=L+np.array([0,0,1]);Hh/=np.linalg.norm(Hh);spec=np.clip((N*Hh).sum(-1),0,1)**40
rim=(1-np.clip(N[...,2],0,1))**3
# domain colours (logo navy -> capsule blue -> sky -> cloud)
dom=np.select([res<600,res<1100,res<1560],[0,1,2],3)
pal=np.array([[38,92,160],[66,134,204],[120,178,226],[178,214,238]])/255.
col_a=pal[dom]
# atoms lining the central pore: within 9 A of the pore axis (geometric, from the aligned coordinates)
Q=X@V;ploop=np.hypot(Q[:,0]-np.median(Q[:,0]),Q[:,1]-np.median(Q[:,1]))<9.0
gold=np.array([238,190,84])/255.
col_a=np.where(ploop[:,None],gold,col_a)
col=col_a[np.clip(ID,0,None)]
zn=(Z-Z[mask].min())/(Z[mask].max()-Z[mask].min()+1e-6);zn=np.where(mask,zn,0)
ink=np.array([7,22,40])/255
shade=(0.12+0.82*lam*(0.55+0.45*ao))[...,None]*col*(0.55+0.45*ao[...,None])
shade+=spec[...,None]*0.32*ao[...,None]+rim[...,None]*col*0.22
f=(0.60+0.40*zn[...,None])
shade=shade*f+ink*(1-f)*0.6
img=np.clip(shade,0,1)
rgba=np.dstack([img*255,mask.astype(np.float32)*255]).astype(np.uint8)
im=Image.fromarray(rgba,'RGBA').resize((S//2,S//2),Image.LANCZOS)
im=im.crop(im.getbbox())
out=sys.argv[5] if len(sys.argv)>5 else 'chan.png'
im.save(H/out);print(im.size,X.shape,w,k)
