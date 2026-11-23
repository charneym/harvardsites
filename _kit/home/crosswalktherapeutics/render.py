#!/usr/bin/env python3
"""Offline render of the Crosswalk Therapeutics hero (HOME_BRIEF option c: a crafted render of the real molecule).
Subject: human N-acetylgalactosamine-6-sulfatase (GALNS), the enzyme missing in Morquio A syndrome (MPS IVA), drawn from its
real crystal structure (RCSB PDB 4FDI, Rivera-Colon et al. 2012, the homodimer). Every heavy atom is a sphere; the depth map is
softened into a smooth molecular surface, lit with a key, a cool fill and ambient occlusion, and rendered on pure black so
field.js can composite it with 'lighter' (no box edge, DJ/DP).  Run: python3 render.py 4fdi.pdb out.png [W]"""
import sys, numpy as np
from PIL import Image, ImageFilter
pdb, out = sys.argv[1], sys.argv[2]; W = int(sys.argv[3]) if len(sys.argv) > 3 else 1500
P=[];C=[]
for l in open(pdb):
    if l.startswith('ATOM') and l[76:78].strip()!='H':
        P.append([float(l[30:38]),float(l[38:46]),float(l[46:54])]);C.append(l[21])
P=np.array(P);C=np.array(C);P-=P.mean(0)
# principal axes: long axis horizontal, thinnest axis toward the viewer, then a gentle 3/4 turn
u,s,vt=np.linalg.svd(P,full_matrices=False);P=P@vt.T
def rot(ax,a):
    c,s_=np.cos(a),np.sin(a)
    if ax=='x':return np.array([[1,0,0],[0,c,-s_],[0,s_,c]])
    if ax=='y':return np.array([[c,0,s_],[0,1,0],[-s_,0,c]])
    return np.array([[c,-s_,0],[s_,c,0],[0,0,1]])
R=rot('z',np.radians(-14))@rot('x',np.radians(-30))@rot('y',np.radians(26));P=P@R.T
SS=2;Wp=W*SS
ext=np.ptp(P[:,0])+10;sc=Wp*.86/ext;Hp=int(np.ptp(P[:,1])*sc+Wp*.14+.5)
Z=np.full((Hp,Wp),-1e9);ID=np.zeros((Hp,Wp),np.int32)-1;NX=np.zeros((Hp,Wp),np.float32);NY=NX.copy();NZ=NX.copy()
r=2.0*sc;rr=int(np.ceil(r))
yy,xx=np.mgrid[-rr:rr+1,-rr:rr+1];d2=xx**2+yy**2;msk=d2<=r*r;cap=np.sqrt(np.maximum(r*r-d2,0))
cx=Wp/2+P[:,0]*sc;cy=Hp/2-P[:,1]*sc;cz=P[:,2]*sc
for i in np.argsort(cz):
    x0=int(round(cx[i]))-rr;y0=int(round(cy[i]))-rr
    zz=np.where(msk,cz[i]+cap,-1e9);sub=Z[y0:y0+2*rr+1,x0:x0+2*rr+1]
    m=zz>sub;sub[m]=zz[m];ID[y0:y0+2*rr+1,x0:x0+2*rr+1][m]=i
    NX[y0:y0+2*rr+1,x0:x0+2*rr+1][m]=(xx/r)[m];NY[y0:y0+2*rr+1,x0:x0+2*rr+1][m]=(-yy/r)[m];NZ[y0:y0+2*rr+1,x0:x0+2*rr+1][m]=(cap/r)[m]
cov=(Z>-1e8).astype(float)
zmin=cz.min()-r;Zf=np.where(cov>0,Z,zmin)
def blur(a,rad):
    rad=float(rad)
    if rad>4:
        f=rad/3;h,w=a.shape;sm=np.array(Image.fromarray(a.astype(np.float32),mode='F').resize((max(2,int(w/f)),max(2,int(h/f))),Image.BOX))
        b=_blur(sm,3.0);return np.array(Image.fromarray(b,mode='F').resize((w,h),Image.BILINEAR))
    return _blur(a,rad)
def _blur(a,rad):
    rad=float(rad);k=int(3*rad)+1;x=np.arange(-k,k+1);g=np.exp(-x*x/(2*rad*rad));g/=g.sum()
    a=a.astype(np.float32);p=np.pad(a,((0,0),(k,k)),mode='edge');o=np.zeros_like(a)
    for i,w in enumerate(g):o+=w*p[:,i:i+a.shape[1]]
    p=np.pad(o,((k,k),(0,0)),mode='edge');o2=np.zeros_like(a)
    for i,w in enumerate(g):o2+=w*p[i:i+a.shape[0],:]
    return o2
# soften the sphere bumps into a smooth surface (probe-like), keeping silhouette
Zs=blur(Zf,.42*sc);Zs=np.where(cov>0,Zs,zmin)
covs=np.clip(blur(cov,.25*sc)*2-.5,0,1)
ns=.5*sc
n=np.dstack([blur(NX,ns),blur(NY,ns),blur(NZ,ns)+.15]);n/=np.linalg.norm(n,axis=2,keepdims=True)
L=np.array([-.45,.55,.70]);L/=np.linalg.norm(L);F=np.array([.6,-.35,.72]);F/=np.linalg.norm(F)
lam=np.clip(n@L,0,1);fil=np.clip(n@F,0,1)
# ambient occlusion: how far each point sits below its surroundings, at three scales
ao=np.ones_like(Zs)
for rad,k in ((1.2,.07),(3.5,.035),(9,.014)):
    dz=blur(Zs,rad*sc)-Zs;ao*=np.clip(1-k*np.maximum(dz,0)/sc*1.0,0,1)
ao=np.clip(ao,0,1)**1.3
dep=(Zs-zmin)/(np.ptp(cz)+2*r);dep=np.clip(dep,0,1)
vz=np.clip(n[...,2],0,1);rim=(1-vz)**3
spec=np.clip((n@((L+np.array([0,0,1]))/np.linalg.norm(L+np.array([0,0,1])))),0,1)**40
chain=np.where(ID>=0,(C[np.maximum(ID,0)]=='B').astype(float),0)
chain=blur(chain,.3*sc)
# palette: chain A a pale porcelain blue, chain B the logo's navy lifted; rim light cool blue
cA=np.array([.86,.89,.97]);cB=np.array([.50,.62,.95])
base=cA[None,None,:]*(1-chain[...,None])+cB[None,None,:]*chain[...,None]
lit=base*(.10+.80*lam[...,None]*(.55+.45*ao[...,None])+.20*fil[...,None]*np.array([.55,.65,1.0]))
lit*=(.30+.70*ao[...,None])
lit+=spec[...,None]*.22*ao[...,None]+rim[...,None]*np.array([.25,.38,.95])*.45*ao[...,None]
lit*=(.45+.55*dep[...,None])
img=np.clip(lit*covs[...,None],0,1)**(1/1.1)
im=Image.fromarray((img*255+.5).astype(np.uint8)).resize((W,int(Hp/SS)),Image.LANCZOS)
im.save(out);print(out,im.size)
