#!/usr/bin/env python3
"""Hero render: a space-filling model of the EphA2 ligand-binding domain with agonist peptide 135E2 seated in its
ephrin-binding pocket, from the 3.2 A crystal structure PDB 6B9L (Gambini, ..., Baggio, ..., Pellecchia; J Med Chem),
the peptide series that led to Targefrin. Shaded like a material model (Lambert + AO + rim + specular), receptor in
pale slate, peptide in gold, on transparent ground. Output: epha2.png (RGBA). Args: ax ay az size chains"""
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
REC=sys.argv[5][0] if len(sys.argv)>5 else 'A'; PEP=sys.argv[5][1] if len(sys.argv)>5 else 'E'
xyz=[];el=[];pep=[];rn=[]
for l in open(H/'6b9l.pdb'):
    if l.startswith(('ATOM','HETATM')) and l[21] in (REC,PEP):
        e=l[76:78].strip() or l[12:14].strip()[0]
        if e not in R: continue
        xyz.append([float(l[30:38]),float(l[38:46]),float(l[46:54])]);el.append(e);pep.append(l[21]==PEP);rn.append(l[17:20])
X=np.array(xyz);PP=np.array(pep);X-=X[~PP].mean(0)
# camera looks down the axis from the receptor's centre to the peptide, so the pocket and its peptide face us
d=X[PP].mean(0);d/=np.linalg.norm(d)
up=np.cross(d,[0,0,1.]);up/=np.linalg.norm(up);rt=np.cross(up,d)
V=np.stack([rt,up,d],1);P=X@V
def rot(a,ax):
    c,s=np.cos(a),np.sin(a)
    return {'x':np.array([[1,0,0],[0,c,-s],[0,s,c]]),'y':np.array([[c,0,s],[0,1,0],[-s,0,c]]),'z':np.array([[c,-s,0],[s,c,0],[0,0,1]])}[ax]
ang=[float(a) for a in (sys.argv[1:4] if len(sys.argv)>3 else (0.5,-0.35,0.0))]
P=P@rot(ang[0],'x').T@rot(ang[1],'y').T@rot(ang[2],'z').T
S=int(sys.argv[4]) if len(sys.argv)>4 else 2400
rad=np.array([R[e] for e in el])*1.04
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
for rr in (5,12,28,60,110):
    b=blur(Zf,rr*S/2400);ao+=np.clip((b-Zf)/(rr*1.5*S/2400),0,1)
ao=np.clip(1-ao/2.4,0,1)
L=np.array([-.5,.6,.62]);L/=np.linalg.norm(L)
lam=np.clip((N*L).sum(-1),0,1)
Hh=L+np.array([0,0,1]);Hh/=np.linalg.norm(Hh);spec=np.clip((N*Hh).sum(-1),0,1)**40
rim=(1-np.clip(N[...,2],0,1))**3
E=np.array(el);RN=np.array(rn)
slate=np.array([176,190,206])/255;slateD=np.array([120,138,160])/255
gold=np.array([228,176,82])/255;goldD=np.array([196,128,44])/255
polar=np.isin(RN,['ASP','GLU','LYS','ARG','HIS','ASN','GLN','SER','THR'])
base=np.where(polar[:,None],slate,slate*0.86+slateD*0.14)
base=np.where(((E=='O')|(E=='N'))[:,None]&~PP[:,None],base*0.95,base)
base=np.where(PP[:,None],np.where(((E=='O')|(E=='N'))[:,None],goldD,gold),base)
col=base[np.clip(ID,0,None)]
zn=(Z-Z[mask].min())/(Z[mask].max()-Z[mask].min()+1e-6);zn=np.where(mask,zn,0)
ink=np.array([11,14,19])/255
shade=(0.08+0.84*lam*(0.5+0.5*ao))[...,None]*col*(0.5+0.5*ao[...,None])
shade+=spec[...,None]*0.26*ao[...,None]+rim[...,None]*col*0.18
f=(0.5+0.5*zn[...,None]);shade=shade*f+ink*(1-f)*0.7
img=np.clip(shade,0,1)
rgba=np.dstack([img*255,mask*255]).astype(np.uint8)
im=Image.fromarray(rgba,'RGBA').resize((S//2,S//2),Image.LANCZOS)
im=im.crop(im.getbbox());im.save(H/'epha2.png');print(im.size,X.shape,PP.sum())
