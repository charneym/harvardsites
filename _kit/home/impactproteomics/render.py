#!/usr/bin/env python3
"""Hero render for Impact Proteomics: the capture step of their IP-to-MS antigen profiling, as a crafted space-filling
model built from real atomic structures. A capture bead carries patient antibodies (intact IgG, PDB 1IGT) tethered by their
Fc stems; several hold a native protein antigen (Ro60, a classic autoantigen in lupus and Sjogren's, PDB 1YVP chain A)
at their binding tips. Antibodies in the brand teal, antigens in the logo's gold and orange; real alpha, no box.
Usage: python3 render.py [S] -> ../../../impactproteomics/hero.webp
"""
import numpy as np, pathlib, sys
from PIL import Image
H = pathlib.Path(__file__).resolve().parent
R = {'C':1.70,'N':1.55,'O':1.52,'P':1.80,'S':1.80}
def _box(a,r,ax):
    a=np.moveaxis(a,ax,0);p=np.concatenate([np.repeat(a[:1],r+1,0),a,np.repeat(a[-1:],r,0)]);c=np.cumsum(p,0)
    return np.moveaxis((c[2*r+1:]-c[:-2*r-1])/(2*r+1),0,ax)
def blur(a,s):
    r=max(1,int(s*0.9))
    for _ in range(3): a=_box(_box(a,r,0),r,1)
    return a
def load(fn,chains=None):
    xyz=[];el=[];ch=[];res=[]
    for l in open(H/fn):
        if l.startswith('ATOM') and (chains is None or l[21] in chains):
            e=l[76:78].strip() or l[12:14].strip()[0]
            if e not in R: continue
            xyz.append([float(l[30:38]),float(l[38:46]),float(l[46:54])]);el.append(e);ch.append(l[21]);res.append(int(l[22:26]))
    return np.array(xyz),np.array(el),np.array(ch),np.array(res)
AX,AE,AC,AR=load('1igt.pdb')
GX,GE,GC,GR=load('1yvp.pdb','A')
# antibody frame: Fc centroid -> Fab centroid is the stem axis
heavy=np.isin(AC,['B','D']);fc=heavy&(AR>=245);fab=~fc
cFc=AX[fc].mean(0);cFab=AX[fab].mean(0)
u=cFab-cFc;u/=np.linalg.norm(u)
# Fab tips: variable domains of each arm (light A/C with its nearest heavy chain)
def tip(lc):
    lv=(AC==lc)&(AR<=107);c=AX[lv].mean(0)
    hv=heavy&(AR<=117)
    best=min(['B','D'],key=lambda hc:np.linalg.norm(AX[hv&(AC==hc)].mean(0)-c))
    return AX[lv|(hv&(AC==best))].mean(0)
tips=[tip('A'),tip('C')]
# Fc base: the far end of the Fc along -u
base=cFc-u*np.max(-(AX[fc]-cFc)@u)*0.92
def frame(n):
    n=n/np.linalg.norm(n);a=np.array([1,0,0]) if abs(n[0])<.9 else np.array([0,1,0])
    b=np.cross(n,a);b/=np.linalg.norm(b);c=np.cross(n,b);return np.stack([b,c,n],1)
def align(u_from,u_to,spin):
    F=frame(u_from);T=frame(u_to);cs,sn=np.cos(spin),np.sin(spin)
    Rz=np.array([[cs,-sn,0],[sn,cs,0],[0,0,1]]);return T@Rz@F.T
def rot(a,ax):
    c,s=np.cos(a),np.sin(a)
    return {'x':np.array([[1,0,0],[0,c,-s],[0,s,c]]),'y':np.array([[c,0,s],[0,1,0],[-s,0,c]]),'z':np.array([[c,-s,0],[s,c,0],[0,0,1]])}[ax]
GXc=GX-GX.mean(0);gr=np.sqrt(((GXc)**2).sum(1)).max()
RB=205.0   # bead radius (A); illustrative scale
# antibody placements on the bead: (theta from view axis, phi around it, spin, antigen on tip index or None, antigen colour)
rng=np.random.default_rng(4)
P=[(1.50,0.25,0.0,0,'g'),(1.52,1.20,0.2,None,None),(1.48,2.05,-0.1,1,'o'),(1.55,2.95,0.1,None,None),(1.50,3.85,0.0,0,'g'),
   (1.52,4.75,0.15,None,None),(1.50,5.55,-0.1,1,'g'),(0.80,1.6,0.3,None,None),(0.95,4.3,0.9,0,'g'),(2.15,0.8,0.2,None,None)]
V=rot(-0.30,'x')@rot(0.22,'y')
VD=V.T@np.array([0,0,1.0])
W0=tips[1]-tips[0]
pts=[];els=[];kind=[]
for th,ph,sp,ti,gc in P:
    n=np.array([np.sin(th)*np.cos(ph),np.sin(th)*np.sin(ph),np.cos(th)])
    M0=align(u,n,0.0);w=M0@W0;w-=n*(w@n);t=np.cross(n,VD)
    if np.linalg.norm(t)<1e-3: t=np.cross(n,[1,0,0])
    t/=np.linalg.norm(t);w/=np.linalg.norm(w);ang=np.arctan2(np.cross(w,t)@n,w@t)
    M=align(u,n,ang+sp)
    Y=(AX-base)@M.T+n*(RB+2.0)
    pts.append(Y);els.append(AE);kind.append(np.where(np.isin(AC,['A','C']),1,0))
    if ti is not None:
        t=(tips[ti]-base)@M.T+n*(RB+2.0);f=(tips[ti]-cFab)@M.T;f/=np.linalg.norm(f)
        d=f*0.55+n*0.45;d/=np.linalg.norm(d)
        Q=frame(d)@frame(np.array([0.3,0.5,0.8])).T
        G=GXc@Q.T+t+d*(gr*0.62)
        pts.append(G);els.append(GE);kind.append(np.full(len(G),2 if gc=='g' else 3))
X=np.concatenate(pts);E=np.concatenate(els);K=np.concatenate(kind)
# view: tilt so the bead's upper rim reads, a little 3/4
X=X@V.T
rad=np.array([R[e] for e in E])
S=int(sys.argv[1]) if len(sys.argv)>1 else 2600
ext=max(np.abs(X[:,:2]).max()+4,RB)
sc=S*0.47/ext;off=S/2
Z=np.full((S,S),-1e9);N=np.zeros((S,S,3),np.float32);ID=np.full((S,S),-2,np.int32)
# the bead: an analytic sphere (id -1)
yy,xx=np.mgrid[0:S,0:S];dx=(xx+.5-off)/(RB*sc);dy=(yy+.5-off)/(RB*sc);d2=dx*dx+dy*dy;m=d2<1
dz=np.sqrt(np.clip(1-d2,0,1));Z[m]=(dz*RB*sc)[m];N[m]=np.stack([dx,-dy,dz],-1)[m];ID[m]=-1
for i in np.argsort(X[:,2]):
    cx=X[i,0]*sc+off;cy=S-(X[i,1]*sc+off);r=rad[i]*sc
    x0,x1=int(max(cx-r,0)),int(min(cx+r+1,S));y0,y1=int(max(cy-r,0)),int(min(cy+r+1,S))
    if x1<=x0 or y1<=y0: continue
    yy,xx=np.mgrid[y0:y1,x0:x1];ddx=(xx+.5-cx)/r;ddy=(yy+.5-cy)/r;dd=ddx*ddx+ddy*ddy;mm=dd<1
    z=X[i,2]*sc+np.sqrt(np.clip(1-dd,0,1))*r
    sub=Z[y0:y1,x0:x1];upd=mm&(z>sub)
    sub[upd]=z[upd];N[y0:y1,x0:x1][upd]=np.stack([ddx,-ddy,np.sqrt(np.clip(1-dd,0,1))],-1)[upd];ID[y0:y1,x0:x1][upd]=i
mask=ID>=-1
Zf=np.where(mask,Z,Z[mask].min()-30*sc)
ao=np.zeros_like(Z)
for rr in (5,12,26,54):
    b=blur(Zf,rr);ao+=np.clip((b-Zf)/(rr*1.7),0,1)
ao=np.clip(1-ao/2.3,0,1)
L=np.array([-.5,.6,.62]);L/=np.linalg.norm(L)
lam=np.clip((N*L).sum(-1),0,1)
Hh=L+np.array([0,0,1]);Hh/=np.linalg.norm(Hh);spec=np.clip((N*Hh).sum(-1),0,1)
rim=(1-np.clip(N[...,2],0,1))**3
pal=np.array([[0,169,157],[96,206,196],[227,176,26],[239,122,46]])/255.0
col=pal[np.clip(K[np.clip(ID,0,None)],0,3)]
bead=ID==-1
col[bead]=np.array([84,104,108])/255.0
zn=(Z-Z[mask].min())/(Z[mask].max()-Z[mask].min()+1e-6);zn=np.where(mask,zn,0)
ink=np.array([13,26,27])/255
lit=(0.16+0.92*lam*(0.55+0.45*ao))[...,None]*col*(0.5+0.5*ao[...,None])
sp=np.where(bead,spec**90*0.32+spec**10*0.035,spec**36*0.28)
lit+=sp[...,None]*ao[...,None]+rim[...,None]*col*np.where(bead,.5,.22)[...,None]
fog=(0.55+0.45*zn)[...,None]
img=np.clip(lit*fog+ink*(1-fog)*0.7,0,1)
A=mask.astype(np.float32)
im=Image.fromarray(np.dstack([img*255,A*255]).astype(np.uint8),'RGBA').resize((S//2,S//2),Image.LANCZOS)
im=im.crop(im.getbbox())
out=H.parent.parent.parent/'impactproteomics';out.mkdir(exist_ok=True)
im.save(H/'hero_raw.png');print(im.size,len(X))
