#!/usr/bin/env python3
"""Render RealSeq hero molecules: space-filling models of real RNA fragments from RCSB crystal structures
(1QC0 chains C/D: 19-bp RNA duplex; 1RNA: 14-bp RNA helix [U(U-A)6A]2; 4U37: 7-mer RNA duplex; 2Q1R: RNA dodecamer strand). Shaded as material
models (Lambert + rim + specular + depth AO). Backbone in RealSeq green, bases in its orange (purines) and red
(pyrimidines). Output: <id>.png RGBA on transparent ground.  usage: rna.py pdb out ax ay az size"""
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
R={'C':1.70,'N':1.55,'O':1.52,'P':1.80}
BBN=('P','OP1','OP2','O1P','O2P',"O5'","C5'","C4'","O4'","C3'","O3'","C2'","O2'","C1'")
xyz=[];el=[];bb=[];pur=[]
for l in open(H/sys.argv[1]):
    if l.startswith('ATOM'):
        if l[16] not in ' A': continue
        if len(sys.argv)>7 and l[21] not in sys.argv[7]: continue
        e=l[76:78].strip() or l[12:14].strip()[0]
        if e not in R: continue
        n=l[12:16].strip();rn=l[17:20].strip()
        xyz.append([float(l[30:38]),float(l[38:46]),float(l[46:54])]);el.append(e);bb.append(n in BBN);pur.append(rn in('A','G'))
X=np.array(xyz);X-=X.mean(0)
w,v=np.linalg.eigh(np.cov(X.T));V=v[:,::-1];P=X@V   # long axis -> x
def rot(a,ax):
    c,s=np.cos(a),np.sin(a)
    return {'x':np.array([[1,0,0],[0,c,-s],[0,s,c]]),'y':np.array([[c,0,s],[0,1,0],[-s,0,c]]),'z':np.array([[c,-s,0],[s,c,0],[0,0,1]])}[ax]
ang=[float(a) for a in sys.argv[3:6]]
P=P@rot(ang[0],'x').T@rot(ang[1],'y').T@rot(ang[2],'z').T
S=int(sys.argv[6])
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
for rr in (S//300,S//130,S//60,S//30):
    b=blur(Zf,max(rr,2));ao+=np.clip((b-Zf)/(max(rr,2)*1.6),0,1)
ao=np.clip(1-ao/2.2,0,1)
L=np.array([-.45,.6,.66]);L/=np.linalg.norm(L)
lam=np.clip((N*L).sum(-1),0,1)
Hh=L+np.array([0,0,1]);Hh/=np.linalg.norm(Hh);spec=np.clip((N*Hh).sum(-1),0,1)**40
rim=(1-np.clip(N[...,2],0,1))**3
BB=np.array(bb);E=np.array(el);PU=np.array(pur)
green=np.array([138,186,66])/255;orange=np.array([232,140,40])/255;red=np.array([184,52,40])/255
col=np.where(BB[:,None],green*0.92,np.where(PU[:,None],orange,red))
col=np.where((E=='P')[:,None],np.array([206,232,120])/255,col)
col=np.where((BB&(E=='O'))[:,None],green*0.78,col)
C=col[np.clip(ID,0,None)]
zn=(Z-Z[mask].min())/(Z[mask].max()-Z[mask].min()+1e-6);zn=np.where(mask,zn,0)
ink=np.array([14,21,16])/255
sh=(0.08+0.84*lam*(0.55+0.45*ao))[...,None]*C*(0.55+0.45*ao[...,None])
sh+=spec[...,None]*0.32*ao[...,None]+rim[...,None]*C*0.2
k=(0.6+0.4*zn[...,None]);sh=sh*k+ink*(1-k)*0.6
img=np.clip(sh,0,1)
rgba=np.dstack([img*255,mask*255]).astype(np.uint8)
im=Image.fromarray(rgba,'RGBA').resize((S//2,S//2),Image.LANCZOS)
im=im.crop(im.getbbox());im.save(H/sys.argv[2]);print(sys.argv[2],im.size,X.shape)
