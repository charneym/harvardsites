#!/usr/bin/env python3
"""Hero render (HOME_BRIEF 2c: crafted render of the real subject). A ball-and-stick model of an MT218-type agent as
Molecular Theranostics describes it (mtheranostics.com/mt218: "a small peptide of seven amino acids conjugated to a
clinical macrocyclic MRI contrast agent Gd(HP-DO3A)"): the gadolinium ion caged in its macrocycle, glowing, with the
peptide arm trailing away. Geometry: RDKit ETKDG + UFF (mol.py -> mt218.mol). Shaded like a studio model (key + fill
+ specular + rim + screen-space AO + depth haze). Saved with alpha (no ground, DJ). Usage: render.py W H out.png"""
import sys, numpy as np
from PIL import Image, ImageFilter
W=int(sys.argv[1]); H=int(sys.argv[2]); OUT=sys.argv[3]; SS=2
RX,RY,RZ=[float(a) for a in (sys.argv[4:7] if len(sys.argv)>6 else (0.35,0.6,0.2))]
w,h=W*SS,H*SS
from rdkit import Chem
_m=Chem.MolFromMolFile('mt218.mol',removeHs=False,sanitize=False)
P=_m.GetConformer().GetPositions().tolist(); E=[a.GetSymbol() for a in _m.GetAtoms()]
B=[(b.GetBeginAtomIdx(),b.GetEndAtomIdx(),1) for b in _m.GetBonds()]
P=np.array(P); E=np.array(E)
keep=np.array([e!='H' for e in E])
# centre on the gadolinium-weighted centre, principal axes
gd=int(np.where(E=='Gd')[0][0])
X=P-P[keep].mean(0)
wv,v=np.linalg.eigh(np.cov(X[keep].T)); X=X@v[:,::-1]
def R(a,ax):
    c,s=np.cos(a),np.sin(a)
    return {'x':np.array([[1,0,0],[0,c,-s],[0,s,c]]),'y':np.array([[c,0,s],[0,1,0],[-s,0,c]]),'z':np.array([[c,-s,0],[s,c,0],[0,0,1]])}[ax]
X=X@R(RX,'x').T@R(RY,'y').T@R(RZ,'z').T
# fit: 2D extent of heavy atoms
Q=X[keep]; lo=Q[:,:2].min(0)-3.2; hi=Q[:,:2].max(0)+3.2
sc=min(w/(hi[0]-lo[0]),h/(hi[1]-lo[1]))
off=np.array([w,h])/2-(lo+hi)/2*sc
def scr(p): return np.array([p[0]*sc+off[0], h-(p[1]*sc+off[1])])
COL={'C':(0.50,0.56,0.62),'N':(0.29,0.68,0.91),'O':(0.30,0.67,0.36),'Gd':(0.98,0.93,0.80),'H':(0.85,0.88,0.9)}
RAD={'C':0.40,'N':0.40,'O':0.40,'Gd':1.05,'H':0.22}
Z=np.full((h,w),-1e9); N=np.zeros((h,w,3)); C=np.zeros((h,w,3)); ID=np.full((h,w),-1)
yy,xx=np.mgrid[0:h,0:w]
def splat(p,r,col,tag):
    s=scr(p); rp=r*sc
    x0,x1=int(max(0,s[0]-rp-1)),int(min(w,s[0]+rp+2)); y0,y1=int(max(0,s[1]-rp-1)),int(min(h,s[1]+rp+2))
    if x0>=x1 or y0>=y1: return
    dx=(xx[y0:y1,x0:x1]-s[0])/rp; dy=(yy[y0:y1,x0:x1]-s[1])/rp; d2=dx*dx+dy*dy; m=d2<1
    nz=np.sqrt(np.clip(1-d2,0,1)); z=p[2]+nz*r
    zb=Z[y0:y1,x0:x1]; upd=m&(z>zb)
    zb[upd]=z[upd]
    n=np.stack([dx,-dy,nz],-1); N[y0:y1,x0:x1][upd]=n[upd]; C[y0:y1,x0:x1][upd]=col; ID[y0:y1,x0:x1][upd]=tag
for i in np.where(keep)[0]:
    splat(X[i],RAD[E[i]],COL[E[i]],i)
for a,b,o in B:
    if not(keep[a] and keep[b]): continue
    pa,pb=X[a],X[b]; dist=np.linalg.norm(pb-pa); n=max(2,int(dist/0.03))
    rb=0.13 if 'Gd' not in (E[a],E[b]) else 0.06
    for t in np.linspace(0,1,n):
        p=pa+(pb-pa)*t; col=np.array(COL[E[a]] if t<0.5 else COL[E[b]])
        if 'Gd' in (E[a],E[b]): col=np.array((0.95,0.85,0.6))
        splat(p,rb,col*0.92,-2)
mask=Z>-1e8
Nn=N/np.maximum(np.linalg.norm(N,axis=-1,keepdims=True),1e-6)
key=np.array([-0.5,0.62,0.6]); key/=np.linalg.norm(key)
fill=np.array([0.7,-0.2,0.5]); fill/=np.linalg.norm(fill)
lam=np.clip(Nn@key,0,1); fl=np.clip(Nn@fill,0,1)
hv=key+np.array([0,0,1]); hv/=np.linalg.norm(hv); spec=np.clip(Nn@hv,0,1)**60
rim=(1-np.clip(Nn[...,2],0,1))**3
# screen-space AO from the depth buffer
zf=np.where(mask,Z,Z[mask].min()-2)
zimg=Image.fromarray(((zf-zf.min())/(np.ptp(zf)+1e-6)*255).astype(np.uint8))
zbl=np.asarray(zimg.filter(ImageFilter.GaussianBlur(10*SS)),float)/255*(np.ptp(zf))+zf.min()
ao=np.clip(1-np.clip(zbl-zf,0,3)/3*0.7,0.3,1)
zn=(Z-Z[mask].min())/(np.ptp(Z[mask])+1e-6)  # 0 far .. 1 near
haze=0.45+0.55*zn
gdm=(ID==gd)[...,None]
rgb=C*(0.18+0.78*lam[...,None]+0.22*fl[...,None])*ao[...,None]
rgb=rgb*haze[...,None]+(1-haze[...,None])*np.array([0.04,0.08,0.12])
rgb+=spec[...,None]*0.55*haze[...,None]+rim[...,None]*np.array([0.25,0.6,0.85])*0.35*haze[...,None]
# gadolinium: emissive core
gsh=np.array([1.0,0.96,0.86])*(0.55+0.45*lam[...,None]+0.12*Nn[...,2:3])+spec[...,None]*0.5+rim[...,None]*np.array([0.35,0.7,1.0])*0.5
rgb=np.where(gdm, gsh, rgb)
rgb=np.clip(rgb,0,1)
a=mask.astype(float)
img=np.dstack([rgb,a])
# glow around Gd (soft additive halo, alpha extends with it)
gs=scr(X[gd]); d=np.sqrt((xx-gs[0])**2+(yy-gs[1])**2)/sc
glow=np.exp(-(d/2.4)**2)*0.5+np.exp(-(d/5.5)**2)*0.2
ex=np.minimum(np.minimum(xx,w-1-xx),np.minimum(yy,h-1-yy))/(0.12*min(w,h)); glow*=np.clip(ex,0,1)**2*(3-2*np.clip(ex,0,1))
gc=np.array([0.55,0.82,1.0])
out_rgb=img[...,:3]*img[...,3:4]+gc*glow[...,None]*(1-img[...,3:4])
out_a=np.clip(img[...,3]+glow*(1-img[...,3]),0,1)
out_rgb=np.where(out_a[...,None]>0,out_rgb/np.maximum(out_a[...,None],1e-6),0)
im=Image.fromarray((np.dstack([np.clip(out_rgb,0,1),out_a])*255).astype(np.uint8),'RGBA').resize((W,H),Image.LANCZOS)
im.save(OUT); print('saved',OUT,im.size,'gd at',(gs/SS).round())
