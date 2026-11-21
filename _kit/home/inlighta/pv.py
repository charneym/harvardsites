#!/usr/bin/env python3
"""Render the hero: a space-filling model of human alpha-parvalbumin (PDB 1RJV, NMR model 1), the protein scaffold that
InLighta's ProCA32 is engineered from. Heavy atoms only; backbone in the logo's light green, side chains in its deeper green,
the two native metal ions (the sites ProCA32 re-engineers to hold gadolinium) as bright pearls with a soft halo.
Shading: Lambert + rim + specular + depth-based ambient occlusion. Transparent ground. Output: pv.png (RGBA)."""
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
R={'C':1.70,'N':1.55,'O':1.52,'S':1.80,'CA':1.90}
xyz=[];el=[];bb=[];m=0
for l in open(H/'1rjv.pdb'):
    if l.startswith('MODEL'): m+=1
    if m!=1: continue
    if l.startswith(('ATOM','HETATM')):
        e=l[76:78].strip()
        if e not in R: continue
        n=l[12:16].strip()
        xyz.append([float(l[30:38]),float(l[38:46]),float(l[46:54])]);el.append(e)
        bb.append(n in ('N','CA','C','O') and l.startswith('ATOM'))
X=np.array(xyz);X-=X.mean(0)
w,v=np.linalg.eigh(np.cov(X.T));P=X@v[:,::-1]
def rot(a,ax):
    c,s=np.cos(a),np.sin(a)
    return {'x':np.array([[1,0,0],[0,c,-s],[0,s,c]]),'y':np.array([[c,0,s],[0,1,0],[-s,0,c]]),'z':np.array([[c,-s,0],[s,c,0],[0,0,1]])}[ax]
ang=[float(a) for a in (sys.argv[1:4] if len(sys.argv)>3 else (0,0,0))]
P=P@rot(ang[0],'x').T@rot(ang[1],'y').T@rot(ang[2],'z').T
S=int(sys.argv[4]) if len(sys.argv)>4 else 2000
out=sys.argv[5] if len(sys.argv)>5 else 'pv.png'
E=np.array(el);ION=E=='CA'
rad=np.array([R[e] for e in el])
pad=6.0
lo=(P[:,:2]-rad[:,None]).min(0)-pad;hi=(P[:,:2]+rad[:,None]).max(0)+pad
sc=S/(hi-lo).max();off=np.array([S,S])/2-(lo+hi)/2*sc
Z=np.full((S,S),-1e9);N=np.zeros((S,S,3));ID=np.full((S,S),-1)
for i in np.argsort(P[:,2]):
    cx,cy=P[i,:2]*sc+off;cy=S-cy;r=rad[i]*sc
    x0,x1=int(max(cx-r,0)),int(min(cx+r+1,S));y0,y1=int(max(cy-r,0)),int(min(cy+r+1,S))
    yy,xx=np.mgrid[y0:y1,x0:x1];dx=(xx+.5-cx)/r;dy=(yy+.5-cy)/r;d2=dx*dx+dy*dy;mm=d2<1
    dz=np.sqrt(np.clip(1-d2,0,1));z=P[i,2]*sc+dz*r
    sub=Z[y0:y1,x0:x1];upd=mm&(z>sub)
    sub[upd]=z[upd];N[y0:y1,x0:x1][upd]=np.stack([dx,-dy,dz],-1)[upd];ID[y0:y1,x0:x1][upd]=i
mask=ID>=0
Zf=np.where(mask,Z,Z[mask].min()-4*sc)
ao=np.zeros_like(Z)
for rr in (6,14,30,60):
    b=blur(Zf,rr*S/1800);ao+=np.clip((b-Zf)/(rr*S/1800*1.6),0,1)
ao=np.clip(1-ao/2.2,0,1)
L=np.array([-.45,.55,.7]);L/=np.linalg.norm(L)
lam=np.clip((N*L).sum(-1),0,1)
Hh=L+np.array([0,0,1]);Hh/=np.linalg.norm(Hh);spec=np.clip((N*Hh).sum(-1),0,1)**40
rim=(1-np.clip(N[...,2],0,1))**3
BB=np.array(bb)
lg=np.array([206,222,218])/255;dg=np.array([96,138,140])/255;teal=np.array([70,112,140])/255;pearl=np.array([150,230,100])/255
col_a=np.where(BB[:,None],lg,dg)
col_a=np.where(((E=='N')|(E=='O'))[:,None]&~BB[:,None],dg*0.7+teal*0.3,col_a)
col_a=np.where((E=='S')[:,None],np.array([200,196,150])/255,col_a)
col_a=np.where(ION[:,None],pearl,col_a)
col=col_a[np.clip(ID,0,None)]
zn=(Z-Z[mask].min())/(Z[mask].max()-Z[mask].min()+1e-6);zn=np.where(mask,zn,0)
ink=np.array([5,22,34])/255
shade=(0.10+0.80*lam*(0.55+0.45*ao))[...,None]*col*(0.55+0.45*ao[...,None])
shade+=spec[...,None]*0.32*ao[...,None]+rim[...,None]*col*0.25
f=(0.48+0.52*zn[...,None]);shade=shade*f+ink*(1-f)*0.6
isI=ION[np.clip(ID,0,None)]&mask
shade=np.where(isI[...,None],np.clip(pearl*(0.85+0.3*lam[...,None])+spec[...,None]*.5,0,1),shade)
# light spill: atoms near an ion pick up its green glow
spill=np.zeros((S,S))
for i in np.where(ION)[0]:
    cx,cy=P[i,:2]*sc+off;cy=S-cy;yy,xx=np.mgrid[0:S,0:S];spill+=np.exp(-(((xx-cx)**2+(yy-cy)**2)/(sc*5.5)**2))
shade=shade+np.clip(spill,0,1)[...,None]*np.array([.12,.24,.05])*mask[...,None]
img=np.clip(shade,0,1);A=mask.astype(np.float32)
# halo around each ion (premultiplied over transparent ground), visible even where it sits in a cleft
glow=np.zeros((S,S));vis=[]
for i in np.where(ION)[0]:
    cx,cy=P[i,:2]*sc+off;cy=S-cy
    yy,xx=np.mgrid[0:S,0:S];d=np.hypot(xx-cx,yy-cy)/(sc*5.5)
    glow+=np.exp(-d*d*1.4)*0.9
    vis.append(int((ID==i).sum()))
glow=np.clip(glow,0,1)
gc=np.array([150,230,90])/255
rgb_p=img*A[...,None];a_out=A+glow*(1-A)*0.55
rgb_p=rgb_p+gc*glow[...,None]*0.38
rgb=np.where(a_out[...,None]>1e-4,np.clip(rgb_p/np.maximum(a_out[...,None],1e-4),0,1),0)
rgba=np.dstack([rgb*255,np.clip(a_out,0,1)*255]).astype(np.uint8)
im=Image.fromarray(rgba,'RGBA').resize((S//2,S//2),Image.LANCZOS)
im=im.crop(im.getbbox());im.save(H/out);print(im.size,'ion px visible',vis)
