#!/usr/bin/env python3
"""Render the Kilele Health hero: a space-filling model of a real aptamer folded around its small-molecule target
(the dopamine-binding aptamer DGR-1A with dopamine bound, PDB 12CI chain A, RCSB). The camera looks down the
direction from which the bound target is fully exposed (searched over the sphere), with the long axis turned to a
diagonal. Shaded like a material model (Lambert + rim + specular + depth-based ambient occlusion): backbone in the logo
blue, bases paler, the four nucleotides lining the pocket (within 4.5 A of the target) tinted toward green and the
target itself in the logo green, on a transparent ground. Usage: aptamer.py [th ph inplane size]. Output: aptamer.png"""
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
BBN=('P','OP1','OP2',"O5'","C5'","C4'","O4'","C3'","O3'","C2'","O2'","C1'")
xyz=[];el=[];bb=[];res=[];lig=[]
for l in open(H/'12ci_A.pdb'):
    rn=l[17:20].strip()
    if rn in ('HOH','NCO','K'): continue
    e=l[76:78].strip()
    if e not in R: continue
    xyz.append([float(l[30:38]),float(l[38:46]),float(l[46:54])]);el.append(e)
    bb.append(l[12:16].strip() in BBN);res.append(int(l[22:26]));lig.append(rn=='LDP')
X=np.array(xyz);X-=X.mean(0);LIG=np.array(lig);RES=np.array(res);E=np.array(el);BB=np.array(bb)
dl=np.linalg.norm(X[:,None]-X[LIG][None],axis=2).min(1)
POCK=np.isin(RES,np.unique(RES[(dl<4.5)&~LIG]))&~LIG
a=[float(v) for v in sys.argv[1:4]] if len(sys.argv)>3 else [1.88,2.05,0.62]
th,ph,ip=a
z=np.array([np.sin(th)*np.cos(ph),np.sin(th)*np.sin(ph),np.cos(th)])
w,v=np.linalg.eigh(np.cov(X.T));ax=v[:,-1];x=ax-(ax@z)*z;x/=np.linalg.norm(x);y=np.cross(z,x)
c,s=np.cos(ip),np.sin(ip);x,y=c*x+s*y,-s*x+c*y
P=X@np.stack([x,y,z],1)
S=int(sys.argv[4]) if len(sys.argv)>4 else 2400
rad=np.array([R[e] for e in el])
lo=(P[:,:2]-rad[:,None]).min(0);hi=(P[:,:2]+rad[:,None]).max(0)
sc=S*0.94/(hi-lo).max();off=np.array([S,S])/2-(lo+hi)/2*sc
Z=np.full((S,S),-1e9);N=np.zeros((S,S,3));ID=np.full((S,S),-1)
for i in np.argsort(P[:,2]):
    cx,cy=P[i,:2]*sc+off;cy=S-cy;r=rad[i]*sc
    x0,x1=int(max(cx-r,0)),int(min(cx+r+1,S));y0,y1=int(max(cy-r,0)),int(min(cy+r+1,S))
    yy,xx=np.mgrid[y0:y1,x0:x1];dx=(xx+.5-cx)/r;dy=(yy+.5-cy)/r;d2=dx*dx+dy*dy;m=d2<1
    dz=np.sqrt(np.clip(1-d2,0,1));zz=P[i,2]*sc+dz*r
    sub=Z[y0:y1,x0:x1];upd=m&(zz>sub)
    sub[upd]=zz[upd];N[y0:y1,x0:x1][upd]=np.stack([dx,-dy,dz],-1)[upd];ID[y0:y1,x0:x1][upd]=i
mask=ID>=0
Zf=np.where(mask,Z,Z[mask].min()-4*sc)
ao=np.zeros_like(Z)
for rr in (8,18,40,80):
    b=blur(Zf,rr);ao+=np.clip((b-Zf)/(rr*1.6),0,1)
ao=np.clip(1-ao/2.4,0,1)
Lt=np.array([-.5,.6,.62]);Lt/=np.linalg.norm(Lt)
lam=np.clip((N*Lt).sum(-1),0,1)
Hh=Lt+np.array([0,0,1]);Hh/=np.linalg.norm(Hh);spec=np.clip((N*Hh).sum(-1),0,1)**42
rim=(1-np.clip(N[...,2],0,1))**3
blue=np.array([58,118,192])/255;pale=np.array([162,198,238])/255;phos=np.array([188,214,244])/255
pg=np.array([168,206,120])/255;green=np.array([150,210,70])/255
col_a=np.where(BB[:,None],blue,pale)
col_a=np.where((E=='P')[:,None],phos,col_a)
col_a=np.where((~BB&((E=='N')|(E=='O')))[:,None],pale*0.86+blue*0.14,col_a)
col_a=np.where(POCK[:,None],col_a*0.45+pg*0.55,col_a)
col_a=np.where(LIG[:,None],green,col_a)
col=col_a[np.clip(ID,0,None)]
zn=(Z-Z[mask].min())/(Z[mask].max()-Z[mask].min()+1e-6);zn=np.where(mask,zn,0)
ink=np.array([7,17,31])/255
shade=(0.12+0.86*lam*(0.55+0.45*ao))[...,None]*col*(0.5+0.5*ao[...,None])
shade+=spec[...,None]*0.34*ao[...,None]+rim[...,None]*col*0.25
f=(0.58+0.42*zn[...,None]);shade=shade*f+ink*(1-f)*0.5
img=np.clip(shade,0,1)
rgba=np.dstack([img*255,mask*255]).astype(np.uint8)
im=Image.fromarray(rgba,'RGBA').resize((S//2,S//2),Image.LANCZOS)
im=im.crop(im.getbbox());im.save(H/'aptamer.png')
lp=P[LIG,:2].mean(0)*sc+off;print(im.size,'ligand at',(lp[0]/S,1-lp[1]/S))
