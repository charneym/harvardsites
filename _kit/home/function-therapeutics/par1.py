#!/usr/bin/env python3
"""Function Therapeutics hero: space-filling model of human protease-activated receptor 1 (PAR1), the receptor parmodulins act on, from the crystal structure PDB 3VW7 (Zhang et al., Nature 2012); the T4 lysozyme crystallisation fusion, ligand, lipids and ions are removed. Coloured along the chain from the logo red (N-terminal, extracellular) to the logo blue (C-terminal, cytoplasmic).
Adapted from mabswitch/ab.py: MabSwitch hero: space-filling model of the D1.3 antibody Fv (VL silver, VH logo red) gripping its antigen, hen egg-white lysozyme (gold), PDB 1VFB. Renderer adapted from gammabiotherapeutics/ab.py.
Original note: Gamma hero: space-filling model of an intact IgG antibody (PDB 1IGT, the first intact-antibody crystal structure); light chains in the logo cyan, heavy chains periwinkle-to-violet, glycans pale lilac. Adapted from cloverleafbio/trna.py.
Render the hero: a space-filling model of a real tRNA (yeast tRNA-Phe, PDB 1EHZ, 1.93 A crystal structure),
shaded like a material model (Lambert + rim + specular + depth-based ambient occlusion), backbone in Cloverleaf amber,
bases in ember, on transparent ground. Output: ab.png (RGBA)."""
import numpy as np, pathlib, sys
from PIL import Image, ImageFilter
def _box(a,r,ax):
    a=np.moveaxis(a,ax,0);p=np.concatenate([np.repeat(a[:1],r+1,0),a,np.repeat(a[-1:],r,0)]);c=np.cumsum(p,0)
    return np.moveaxis((c[2*r+1:]-c[:-2*r-1])/(2*r+1),0,ax)
def gaussian_filter(a,s):
    r=max(1,int(s*0.9))
    for _ in range(3): a=_box(_box(a,r,0),r,1)
    return a
H = pathlib.Path(__file__).resolve().parent
R = {'C':1.70,'N':1.55,'O':1.52,'P':1.80,'S':1.80}
xyz=[];el=[];bb=[];res=[];ch=[]
for l in open(H/'3vw7.pdb'):
    if l.startswith('ATOM') and int(l[22:26])<1000:
        e=l[76:78].strip() or l[12:14].strip()[0]
        if e not in R: continue
        n=l[12:16].strip()
        xyz.append([float(l[30:38]),float(l[38:46]),float(l[46:54])]);el.append(e)
        bb.append(n in ('P','OP1','OP2','O5\'','C5\'','C4\'','O4\'','C3\'','O3\'','C2\'','O2\'','C1\'') )
        res.append(int(l[22:26]));ch.append(l[21] if l.startswith('ATOM') else 'G')
X=np.array(xyz);X-=X.mean(0)
# principal axes: view along the least-variance axis so the L lies flat to the camera
w,v=np.linalg.eigh(np.cov(X.T));V=v[:,::-1]
if np.linalg.det(V)<0: V[:,2]*=-1
# long axis (the membrane normal) vertical; swap x/y and flip z so the model keeps its true handedness
P=X@V;P=P[:,[1,0,2]]*np.array([1,1,-1])
# extracellular N-terminus up (a 180-degree turn about the view axis keeps the handedness)
_rs=np.array(res)
if P[_rs<100,1].mean()<0: P=P*np.array([-1,-1,1])
def rot(a,ax):
    c,s=np.cos(a),np.sin(a)
    return {'x':np.array([[1,0,0],[0,c,-s],[0,s,c]]),'y':np.array([[c,0,s],[0,1,0],[-s,0,c]]),'z':np.array([[c,-s,0],[s,c,0],[0,0,1]])}[ax]
ang=[float(a) for a in (sys.argv[1:4] if len(sys.argv)>3 else (0.35,0.3,-0.6))]
P=P@rot(ang[0],'x').T@rot(ang[1],'y').T@rot(ang[2],'z').T
S=int(sys.argv[4]) if len(sys.argv)>4 else 1800
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
# ambient occlusion from the depth buffer: compare to blurred depth at several radii
Zf=np.where(mask,Z,Z[mask].min()-40*sc/10)
ao=np.zeros_like(Z)
for rr in (6,14,30,60):
    b=gaussian_filter(Zf,rr)
    ao+=np.clip((b-Zf)/(rr*1.6),0,1)
ao=np.clip(1-ao/2.2,0,1)
L=np.array([-.45,.55,.7]);L/=np.linalg.norm(L)
lam=np.clip((N*L).sum(-1),0,1)
Hh=L+np.array([0,0,1]);Hh/=np.linalg.norm(Hh);spec=np.clip((N*Hh).sum(-1),0,1)**38
rim=(1-np.clip(N[...,2],0,1))**3
BB=np.array(bb);E=np.array(el)
CH=np.array(ch);RS=np.array(res)
f=np.clip((RS-RS.min())/(RS.max()-RS.min()),0,1)
stops=[(0,(226,62,52)),(.16,(214,108,120)),(.34,(150,150,212)),(.55,(96,132,224)),(.78,(58,100,214)),(1,(40,84,200))]
def grad(t):
    for (a,ca),(b,cb) in zip(stops,stops[1:]):
        if t<=b:
            u=(t-a)/(b-a);return [ca[k]*(1-u)+cb[k]*u for k in range(3)]
    return stops[-1][1]
base_col=np.array([grad(t) for t in f])/255
col=base_col[np.clip(ID,0,None)]
# depth fog: far parts sink toward the ink
zn=(Z-Z[mask].min())/(Z[mask].max()-Z[mask].min()+1e-6);zn=np.where(mask,zn,0)
ink=np.array([10,16,34])/255
shade=(0.10+0.80*lam*(0.55+0.45*ao))[...,None]*col*(0.55+0.45*ao[...,None])
shade+=spec[...,None]*0.30*ao[...,None]+rim[...,None]*col*0.22
shade=shade*(0.62+0.38*zn[...,None])+ink*(1-(0.62+0.38*zn[...,None]))*0.6
img=np.clip(shade*1.28,0,1)
A=mask.astype(np.float32)
rgba=np.dstack([img*255,A*255]).astype(np.uint8)
im=Image.fromarray(rgba,'RGBA')
# supersampled: downsample for anti-aliasing
im=im.resize((S//2,S//2),Image.LANCZOS)
bbx=im.getbbox();im=im.crop(bbx)
im.save(H/(sys.argv[5] if len(sys.argv)>5 else 'ab.png'));print(im.size,X.shape)
