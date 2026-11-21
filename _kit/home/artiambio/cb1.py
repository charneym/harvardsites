#!/usr/bin/env python3
"""Artiam Bio hero: the human CB1 receptor (the target of every Artiam compound) holding an antagonist in its binding pocket,
built from the real crystal structure PDB 5TGZ (Hua et al., Cell 2016: CB1 bound to the antagonist AM6538).
The receptor's own chain (residues 99-306 and 332-412; the flavodoxin crystallisation fusion, lipids and waters are removed)
is drawn as a smooth tube through its C-alpha atoms, so the seven membrane-spanning helices read as glossy coils graded through
the Artiam logo teals; the antagonist (HETATM ZDG) is drawn space-filling in the Artiam orange. Lambert + rim + specular shading
with depth-based ambient occlusion, transparent ground. Renderer adapted from mabswitch/ab.py.
usage: cb1.py ax ay az size out.png"""
import numpy as np, pathlib, sys
from PIL import Image
def _box(a,r,ax):
    a=np.moveaxis(a,ax,0);p=np.concatenate([np.repeat(a[:1],r+1,0),a,np.repeat(a[-1:],r,0)]);c=np.cumsum(p,0)
    return np.moveaxis((c[2*r+1:]-c[:-2*r-1])/(2*r+1),0,ax)
def gaussian_filter(a,s):
    r=max(1,int(s*0.9))
    for _ in range(3): a=_box(_box(a,r,0),r,1)
    return a
H=pathlib.Path(__file__).resolve().parent
R={'C':1.70,'N':1.55,'O':1.52,'S':1.80,'CL':1.75}
ca={};lig=[]
for l in open(H/'5TGZ.pdb'):
    if l.startswith('ATOM') and l[12:16].strip()=='CA':
        r=int(l[22:26])
        if 99<=r<=412: ca[r]=[float(l[30:38]),float(l[38:46]),float(l[46:54])]
    if l.startswith('HETATM') and l[17:20]=='ZDG':
        e=(l[76:78].strip() or l[12:14].strip()).upper()
        lig.append(([float(l[30:38]),float(l[38:46]),float(l[46:54])],R.get(e,1.7),e))
# Catmull-Rom spline through each continuous C-alpha segment, sampled every 0.1 A
pts=[];prm=[];seg=[]
keys=sorted(ca)
for k in keys:
    if seg and k!=seg[-1]+1: pts.append(seg);seg=[]
    seg.append(k)
pts.append(seg)
tube=[];tpar=[]
for s in pts:
    P=np.array([ca[k] for k in s]);P=np.vstack([P[:1],P,P[-1:]])
    for i in range(1,len(P)-2):
        p0,p1,p2,p3=P[i-1],P[i],P[i+1],P[i+2];d=np.linalg.norm(p2-p1);n=max(2,int(d/0.1))
        for t in np.linspace(0,1,n,endpoint=False):
            t2,t3=t*t,t*t*t
            q=.5*((2*p1)+(-p0+p2)*t+(2*p0-5*p1+4*p2-p3)*t2+(-p0+3*p1-3*p2+p3)*t3)
            tube.append(q);tpar.append(s[i-1]+t)
tube=np.array(tube);tpar=np.array(tpar)
LX=np.array([a[0] for a in lig])
X=np.vstack([tube,LX]);ctr=X.mean(0)
w,v=np.linalg.eigh(np.cov((tube-ctr).T));V=v[:,::-1]
Pt=(tube-ctr)@V;Pl=(LX-ctr)@V
def rot(a,ax):
    c,s=np.cos(a),np.sin(a)
    return {'x':np.array([[1,0,0],[0,c,-s],[0,s,c]]),'y':np.array([[c,0,s],[0,1,0],[-s,0,c]]),'z':np.array([[c,-s,0],[s,c,0],[0,0,1]])}[ax]
ang=[float(a) for a in (sys.argv[1:4] if len(sys.argv)>3 else (0,0,0))]
M=rot(ang[0],'x').T@rot(ang[1],'y').T@rot(ang[2],'z').T
Pt=Pt@M;Pl=Pl@M
S=int(sys.argv[4]) if len(sys.argv)>4 else 1800
P=np.vstack([Pt,Pl])
rad=np.concatenate([np.full(len(Pt),1.55),np.array([a[1] for a in lig])])
kind=np.concatenate([np.zeros(len(Pt)),np.ones(len(Pl))])
par=np.concatenate([tpar,np.zeros(len(Pl))])
lo=(P[:,:2]-rad[:,None]).min(0);hi=(P[:,:2]+rad[:,None]).max(0)
sc=S*0.9/(hi-lo).max();off=np.array([S,S])/2-(lo+hi)/2*sc
Z=np.full((S,S),-1e9);N=np.zeros((S,S,3));ID=np.full((S,S),-1)
for i in np.argsort(P[:,2]):
    cx,cy=P[i,:2]*sc+off;cy=S-cy;r=rad[i]*sc
    x0,x1=int(max(cx-r,0)),int(min(cx+r+1,S));y0,y1=int(max(cy-r,0)),int(min(cy+r+1,S))
    if x1<=x0 or y1<=y0: continue
    yy,xx=np.mgrid[y0:y1,x0:x1];dx=(xx+.5-cx)/r;dy=(yy+.5-cy)/r;d2=dx*dx+dy*dy;m=d2<1
    dz=np.sqrt(np.clip(1-d2,0,1));z=P[i,2]*sc+dz*r
    sub=Z[y0:y1,x0:x1];upd=m&(z>sub)
    sub[upd]=z[upd];N[y0:y1,x0:x1][upd]=np.stack([dx,-dy,dz],-1)[upd];ID[y0:y1,x0:x1][upd]=i
mask=ID>=0
Zf=np.where(mask,Z,Z[mask].min()-40*sc/10)
ao=np.zeros_like(Z)
for rr in (6,14,30,60):
    b=gaussian_filter(Zf,rr);ao+=np.clip((b-Zf)/(rr*1.6),0,1)
ao=np.clip(1-ao/2.2,0,1)
L=np.array([-.45,.55,.7]);L/=np.linalg.norm(L)
lam=np.clip((N*L).sum(-1),0,1)
Hh=L+np.array([0,0,1]);Hh/=np.linalg.norm(Hh);spec=np.clip((N*Hh).sum(-1),0,1)**40
rim=(1-np.clip(N[...,2],0,1))**3
# receptor graded along the chain through the logo teals: deep #116a75 -> mid #4a8e96 -> leaf #78aab1
tdeep=np.array([17,106,117])/255;tmid=np.array([52,138,148])/255;tleaf=np.array([132,184,190])/255
# each of the seven membrane helices (and helix 8) takes one of the three logo teals in turn, eased across the loops
TM=[(99,145,0),(146,182,1),(183,222,2),(223,262,0),(263,306,1),(332,372,2),(373,400,0),(401,412,1)]
pal=[tdeep,tmid,tleaf]
tc=np.zeros((len(par),3))
for a,b,k in TM:
    m=(par>=a)&(par<b+1);tc[m]=pal[k]
tc=np.vstack([tc[:len(Pt)],np.zeros((len(Pl),3))])
from numpy.lib.stride_tricks import sliding_window_view as _sw
k=121;pad=np.pad(tc[:len(Pt)],((k//2,k//2),(0,0)),mode='edge');tc[:len(Pt)]=np.stack([np.convolve(pad[:,j],np.ones(k)/k,'valid') for j in range(3)],1)
org=np.array([237,125,49])/255;orgL=np.array([247,160,92])/255
E=np.array(['C']*len(Pt)+[a[2] for a in lig])
lc=np.where((E=='CL')[:,None],np.array([250,214,160])/255,np.where((E=='O')[:,None]|(E=='N')[:,None],orgL,org))
col=np.where((kind==1)[:,None],lc,tc)[np.clip(ID,0,None)]
zn=(Z-Z[mask].min())/(Z[mask].max()-Z[mask].min()+1e-6);zn=np.where(mask,zn,0)
ink=np.array([8,24,27])/255
gl=(kind[np.clip(ID,0,None)]==1)[...,None]
shade=(0.12+0.80*lam*(0.55+0.45*ao))[...,None]*col*(0.55+0.45*ao[...,None])
shade+=spec[...,None]*0.34*ao[...,None]+rim[...,None]*col*0.24
dep=(0.58+0.42*zn[...,None]);dep=np.where(gl,np.maximum(dep,.86),dep)
shade=shade*dep+ink*(1-dep)*0.6
img=np.clip(shade*1.3,0,1)
rgba=np.dstack([img*255,mask.astype(np.float32)*255]).astype(np.uint8)
im=Image.fromarray(rgba,'RGBA').resize((S//2,S//2),Image.LANCZOS)
im=im.crop(im.getbbox())
im.save(H/(sys.argv[5] if len(sys.argv)>5 else 'cb1.png'));print(im.size,len(Pt),len(Pl))
