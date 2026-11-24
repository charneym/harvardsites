#!/usr/bin/env python3
"""Hero render for Lindis Biotech: an intact antibody standing upright as a Y, the shape of the Lindis mark.
Structure: PDB 1IGT, an intact mouse IgG2a (the mouse half of a Triomab such as catumaxomab is a mouse IgG2a; this is a
representative IgG2a crystal structure, not Lindis' proprietary sequence). A Triomab is a bispecific hybrid of two
half-antibodies, so the two halves are coloured apart: one heavy+light pair in the Lindis maroon, the other in warm
porcelain; the shared Fc stem (which recruits accessory immune cells) keeps both colours. Soft molecular surface
(probe-inflated spheres, smoothed depth), Lambert + specular + rim + depth AO, real alpha.
Usage: triomab.py roll size out.png [tilt]"""
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
xyz=[];el=[];ch=[];rn=[]
for l in open(H/'1igt.pdb'):
    if l.startswith('ATOM') or (l.startswith('HETATM') and l[17:20].strip() in ('NAG','BMA','MAN','FUC','GAL')):
        e=(l[76:78].strip() or l[12:14].strip()[0]).upper()
        if e not in R: continue
        xyz.append([float(l[30:38]),float(l[38:46]),float(l[46:54])]);el.append(e);ch.append(l[21]);rn.append(int(l[22:26]))
X=np.array(xyz);ch=np.array(ch);rn=np.array(rn);el=np.array(el)
het=~np.isin(ch,['A','B','C','D'])
FC=np.isin(ch,['B','D'])&(rn>=236)
# pair light chains with heavy chains by Fab proximity
def cen(m):return X[m].mean(0)
fabB=cen((ch=='B')&(rn<220));fabD=cen((ch=='D')&(rn<220))
cA=cen(ch=='A')
pairA='B' if np.linalg.norm(cA-fabB)<np.linalg.norm(cA-fabD) else 'D'
half1=(ch=='A')|(ch==pairA)
# glycans: assign to the nearer heavy chain
if het.any():
    cH1=cen(ch==pairA);oth='D' if pairA=='B' else 'B';cH2=cen(ch==oth)
    for i in np.where(het)[0]: half1[i]=np.linalg.norm(X[i]-cH1)<np.linalg.norm(X[i]-cH2)
f1=cen(half1&~FC&~het);f2=cen(~half1&~FC&~het);fc=cen(FC)
# orient: Fc straight down, both Fabs in the screen plane, Fab1 on the left
o=(f1+f2)/2
ydir=o-fc;ydir/=np.linalg.norm(ydir)
xdir=f2-f1;xdir-=ydir*(xdir@ydir);xdir/=np.linalg.norm(xdir)
zdir=np.cross(xdir,ydir)
P=(X-X.mean(0))@np.stack([xdir,ydir,zdir],1)
roll=float(sys.argv[1]);c,s=np.cos(roll),np.sin(roll)
P=P@np.array([[c,0,s],[0,1,0],[-s,0,c]]).T
tl=float(sys.argv[4]) if len(sys.argv)>4 else 0;c,s=np.cos(tl),np.sin(tl)
P=P@np.array([[c,-s,0],[s,c,0],[0,0,1]]).T
S=int(sys.argv[2]);out=sys.argv[3]
INF=1.6
rad=np.array([R[e] for e in el])+INF
lo=(P[:,:2]-rad[:,None]).min(0);hi=(P[:,:2]+rad[:,None]).max(0)
sc=S*0.94/(hi-lo).max();off=np.array([S,S])/2-(lo+hi)/2*sc
Z=np.full((S,S),-1e9);ID=np.full((S,S),-1)
for i in np.argsort(P[:,2]):
    cx,cy=P[i,:2]*sc+off;cy=S-cy;r=rad[i]*sc
    x0,x1=int(max(cx-r,0)),int(min(cx+r+1,S));y0,y1=int(max(cy-r,0)),int(min(cy+r+1,S))
    yy,xx=np.mgrid[y0:y1,x0:x1];dx=(xx+.5-cx)/r;dy=(yy+.5-cy)/r;d2=dx*dx+dy*dy;m=d2<1
    z=P[i,2]*sc+np.sqrt(np.clip(1-d2,0,1))*r
    sub=Z[y0:y1,x0:x1];upd=m&(z>sub);sub[upd]=z[upd];ID[y0:y1,x0:x1][upd]=i
mask=ID>=0
zmin=Z[mask].min();Zf=np.where(mask,Z,zmin-6*sc)
# smoothed surface for normals (soft molecular-surface look)
Zs=gf(Zf,0.9*sc)
gy,gx=np.gradient(Zs);N=np.dstack([-gx,gy,np.ones_like(Zs)]);N/=np.linalg.norm(N,axis=-1,keepdims=True)
ao=np.zeros_like(Z)
for rr in (2.5,6,14,30):
    b=gf(Zf,rr*sc*.5);ao+=np.clip((b-Zf)/(rr*sc*.8),0,1)
ao=np.clip(1-ao/2.0,0,1)
L=np.array([-.45,.62,.64]);L/=np.linalg.norm(L)
lam=np.clip((N*L).sum(-1),0,1)
Hh=L+np.array([0,0,1]);Hh/=np.linalg.norm(Hh);spec=np.clip((N*Hh).sum(-1),0,1)**36
rim=(1-np.clip(N[...,2],0,1))**2.5
red=np.array([172,30,52])/255;porc=np.array([232,226,220])/255;gly=np.array([214,168,150])/255
base=np.where(half1[:,None],red,porc)
base=np.where(het[:,None],gly,base)
# light chains a touch lighter so the domains read
lt=np.isin(ch,['A','C'])
base=np.where((lt&half1)[:,None],red*1.18,base);base=np.where((lt&~half1)[:,None],porc*1.0,base)
col=np.clip(base,0,1)[np.clip(ID,0,None)]
zn=(Z-zmin)/(Z[mask].max()-zmin+1e-6);zn=np.where(mask,zn,0)
ink=np.array([20,14,16])/255
sh=(0.10+0.82*lam*(0.55+0.45*ao))[...,None]*col*(0.5+0.5*ao[...,None])
sh+=spec[...,None]*0.30*ao[...,None]+rim[...,None]*col*0.22
k=(0.6+0.4*zn[...,None]);sh=sh*k+ink*(1-k)*0.6
img=np.clip(sh,0,1)
rgba=np.dstack([img*255,mask*255.0]).astype(np.uint8)
im=Image.fromarray(rgba,'RGBA').resize((S//2,S//2),Image.LANCZOS)
im=im.crop(im.getbbox());im.save(out);print(im.size,pairA,half1.sum(),FC.sum())
