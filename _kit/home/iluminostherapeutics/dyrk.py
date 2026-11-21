#!/usr/bin/env python3
"""Hero render: space-filling model of the real DYRK1A kinase domain (PDB 8T2H, 1.85 A, Montfort lab, University of Arizona)
with the inhibitor DYR530 (ligand XIR) in its ATP pocket. Protein shaded as a material model (Lambert + rim + specular +
depth AO) in the Iluminos header greens on indigo; the inhibitor in the warm amber of their site gradient.
Usage: dyrk.py [view-search|ax ay az] [size]. Output dyrk.png (RGBA)."""
import numpy as np, pathlib, sys
from PIL import Image
H=pathlib.Path(__file__).resolve().parent
def _box(a,r,ax):
    a=np.moveaxis(a,ax,0);p=np.concatenate([np.repeat(a[:1],r+1,0),a,np.repeat(a[-1:],r,0)]);c=np.cumsum(p,0)
    return np.moveaxis((c[2*r+1:]-c[:-2*r-1])/(2*r+1),0,ax)
def blur(a,s):
    r=max(1,int(s*0.9))
    for _ in range(3): a=_box(_box(a,r,0),r,1)
    return a
R={'C':1.70,'N':1.55,'O':1.52,'S':1.80,'P':1.80,'F':1.47}
xyz=[];el=[];kind=[];resn=[]
for l in open(H/'8t2h.pdb'):
    if not l.startswith(('ATOM','HETATM')) or l[21]!='A': continue
    rn=l[17:20].strip()
    if rn in ('HOH','GOL','PG4'): continue
    if l[16] not in (' ','A'): continue
    e=l[76:78].strip()
    if e not in R: continue
    xyz.append([float(l[30:38]),float(l[38:46]),float(l[46:54])]);el.append(e)
    kind.append(2 if rn=='XIR' else 0);resn.append(int(l[22:26]))
X=np.array(xyz);K=np.array(kind);E=np.array(el);RES=np.array(resn)
X-=X[K==0].mean(0)
def rot(a,ax):
    c,s=np.cos(a),np.sin(a)
    return {'x':np.array([[1,0,0],[0,c,-s],[0,s,c]]),'y':np.array([[c,0,s],[0,1,0],[-s,0,c]]),'z':np.array([[c,-s,0],[s,c,0],[0,0,1]])}[ax]
rad=np.array([R[e] for e in E])
def visible_frac(V):
    # fraction of ligand atoms not covered (in 2D) by any protein atom nearer the camera
    P=X@V.T;L=P[K==2];Pr=P[K==0];rr=rad[K==0]
    vis=0
    for p in L:
        d=np.hypot(Pr[:,0]-p[0],Pr[:,1]-p[1]);front=(Pr[:,2]>p[2])&(d<rr*0.9)
        vis+=0 if front.any() else 1
    return vis/len(L)
if len(sys.argv)>1 and sys.argv[1]=='search':
    best=[]
    rng=np.random.default_rng(1)
    for i in range(1500):
        a=rng.uniform(-np.pi,np.pi,3);V=rot(a[0],'x')@rot(a[1],'y')@rot(a[2],'z')
        f=visible_frac(V)
        Lg=X[K==2]@V.T;C2=np.cov(Lg[:,:2].T);ext=float(np.sqrt(np.linalg.det(C2)))
        if f>=0.97: best.append((ext,f,tuple(np.round(a,3))))
    best.sort(reverse=True)
    for b in best[:15]: print(b)
    sys.exit()
ang=[float(a) for a in sys.argv[1:4]] if len(sys.argv)>3 else [0,0,0]
V=rot(ang[0],'x')@rot(ang[1],'y')@rot(ang[2],'z')
# in-plane roll so the long axis is near-vertical-ish handled by az
P=X@V.T
S=int(sys.argv[4]) if len(sys.argv)>4 else 2400
lo=(P[:,:2]-rad[:,None]).min(0);hi=(P[:,:2]+rad[:,None]).max(0)
sc=S*0.9/(hi-lo).max();off=np.array([S,S])/2-(lo+hi)/2*sc
Z=np.full((S,S),-1e9);N=np.zeros((S,S,3));ID=np.full((S,S),-1)
for i in np.argsort(P[:,2]):
    cx,cy=P[i,:2]*sc+off;cy=S-cy;r=rad[i]*sc*(1.0 if K[i]==2 else 1.0)
    x0,x1=int(max(cx-r,0)),int(min(cx+r+1,S));y0,y1=int(max(cy-r,0)),int(min(cy+r+1,S))
    yy,xx=np.mgrid[y0:y1,x0:x1];dx=(xx+.5-cx)/r;dy=(yy+.5-cy)/r;d2=dx*dx+dy*dy;m=d2<1
    dz=np.sqrt(np.clip(1-d2,0,1));z=P[i,2]*sc+dz*r
    sub=Z[y0:y1,x0:x1];upd=m&(z>sub)
    sub[upd]=z[upd];N[y0:y1,x0:x1][upd]=np.stack([dx,-dy,dz],-1)[upd];ID[y0:y1,x0:x1][upd]=i
mask=ID>=0
Zf=np.where(mask,Z,Z[mask].min()-40*sc/10)
ao=np.zeros_like(Z)
for rr in (6,14,30,64):
    b=blur(Zf,rr*S/2400);ao+=np.clip((b-Zf)/(rr*S/2400*1.6),0,1)
ao=np.clip(1-ao/2.2,0,1)
Lt=np.array([-.5,.55,.68]);Lt/=np.linalg.norm(Lt)
lam=np.clip((N*Lt).sum(-1),0,1)
Hh=Lt+np.array([0,0,1]);Hh/=np.linalg.norm(Hh);spec=np.clip((N*Hh).sum(-1),0,1)**40
rim=(1-np.clip(N[...,2],0,1))**3
# protein: N-lobe (res < ~ 240 in DYRK1A numbering ~ hinge 239-241) a touch lighter green than the C-lobe
nlobe=RES<240
g1=np.array([104,196,150])/255; g2=np.array([70,160,122])/255; tealN=np.array([30,74,82])/255
amber=np.array([247,166,100])/255; gold=np.array([255,206,140])/255
col=np.where(nlobe[:,None],g1,g2)
col=np.where(((E=='O')|(E=='N'))[:,None]&(K==0)[:,None],col*0.86+tealN*0.14,col)
col=np.where((K==2)[:,None],np.where((E=='C')[:,None],amber,gold),col)
C=col[np.clip(ID,0,None)]
ISL=(K[np.clip(ID,0,None)]==2)&mask
zn=(Z-Z[mask].min())/(Z[mask].max()-Z[mask].min()+1e-6);zn=np.where(mask,zn,0)
ink=np.array([13,9,44])/255
shade=(0.1+1.0*lam*(0.6+0.4*ao))[...,None]*C*(0.64+0.36*ao[...,None])
shade+=spec[...,None]*0.26*ao[...,None]+rim[...,None]*C*0.24
# ligand self-lit: emissive so it glows from inside the pocket
shade=np.where(ISL[...,None],shade*0.95+C*(0.16+0.16*ao[...,None]),shade)
fz=(0.72+0.28*zn[...,None])
shade=shade*fz+ink*(1-fz)*0.7
img=np.clip(shade,0,1)
A=mask.astype(np.float32)
im=Image.fromarray(np.dstack([img*255,A*255]).astype(np.uint8),'RGBA')
im=im.resize((S//2,S//2),Image.LANCZOS);im=im.crop(im.getbbox())
im.save(H/'dyrk.png');print(im.size,len(X),(K==2).sum())
