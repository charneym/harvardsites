#!/usr/bin/env python3
"""Hero render: a cyclic peptide, the kind of molecule Synvivia's Discovery Library is built from.
Real conformer: cyclosporin A, the cyclic peptide of the cyclophilin A complex PDB 1CWA (Mikol, Kallen,
Pflugl, Walkinshaw, 2.1 A), chain C, waters dropped. Drawn as a glossy ball-and-stick model: atoms and
bonds are rasterised as one sphere set (a bond is a dense sphere sweep, so its surface normals are exactly
the capsule's), z-buffered orthographically, with screen-space AO and a satin highlight, on an alpha ground.
Args: ax ay size.  Env: OUT, AR_ (atom radius), BR (bond radius).  Out: <OUT>.png"""
import numpy as np, pathlib, sys, os, time
from PIL import Image
t0=time.time(); H=pathlib.Path(__file__).resolve().parent
EL={'C':0,'N':1,'O':2,'S':3}
X=[];E=[];BB=[];KEEP=[]
for l in open(H/'1cwa.pdb'):
    if l[:6] not in ('ATOM  ','HETATM'): continue
    if l[21]!='C' or l[17:20].strip()=='HOH': continue
    e=(l[76:78].strip() or l[12:14].strip()[0]).upper()
    if e not in EL: continue
    X.append([float(l[30:38]),float(l[38:46]),float(l[46:54])]);E.append(EL[e])
    BB.append(l[12:16].strip() in ('N','CA','C'))
    KEEP.append(l[12:16].strip() in ('N','CA','C','O','CB'))
X=np.array(X);E=np.array(E);BB=np.array(BB);KEEP=np.array(KEEP)
if os.environ.get('BBONLY'):   # the macrocycle itself: backbone ring, its carbonyls and the first side-chain atom
    X=X[KEEP];E=E[KEEP];BB=BB[KEEP]
print('atoms',len(X))
X-=X.mean(0)
# --- bonds by covalent distance
COV={0:0.76,1:0.71,2:0.66,3:1.05}
cr=np.array([COV[e] for e in E])
D=np.linalg.norm(X[:,None,:]-X[None,:,:],axis=-1)
lim=cr[:,None]+cr[None,:]+0.42
B=[(i,j) for i in range(len(X)) for j in range(i+1,len(X)) if D[i,j]<lim[i,j]]
print('bonds',len(B))
# --- orient: the macrocycle's mean plane faces the camera, then a deliberate tilt
R0=X[BB]-X[BB].mean(0)
w,V=np.linalg.eigh(np.cov(R0.T)); n=V[:,0]                # the MACROCYCLE's own mean plane, not the whole molecule's
a=V[:,2]; a=a-n*(a@n); a/=np.linalg.norm(a); b=np.cross(n,a)
P=(X-X[BB].mean(0))@np.stack([a,b,n],1)
def rot(t,ax):
    c,s=np.cos(t),np.sin(t)
    return {'x':np.array([[1,0,0],[0,c,-s],[0,s,c]]),'y':np.array([[c,0,s],[0,1,0],[-s,0,c]])}[ax]
ang=[float(t) for t in (sys.argv[1:3] if len(sys.argv)>2 else (0.0,0.0))]
P=P@rot(ang[1],'y').T@rot(ang[0],'x').T
S=int(sys.argv[3]) if len(sys.argv)>3 else 2600
RA=float(os.environ.get('AR_','0.40')); RB=float(os.environ.get('BR','0.165'))
# palette: carbon pewter, nitrogen the steel accent, oxygen deep slate, sulfur bone
COL=np.array([[184,194,206],[159,194,224],[108,126,144],[222,230,238]])/255.
# --- one sphere set: atoms, then a dense sweep along every bond
C=[];R=[];K=[]
for i in range(len(P)): C.append(P[i]);R.append(RA);K.append(COL[E[i]])
for i,j in B:
    v=P[j]-P[i]; L=np.linalg.norm(v); nstep=max(3,int(L/(RB*0.34)))
    for s in range(nstep+1):
        t=s/nstep; C.append(P[i]+v*t); R.append(RB)
        K.append(COL[E[i]] if t<0.5 else COL[E[j]])
C=np.array(C);R=np.array(R);K=np.array(K)
print('splats',len(C))
lo=(C[:,:2]-R[:,None]).min(0); hi=(C[:,:2]+R[:,None]).max(0)
sc=S*0.965/(hi-lo).max(); off=np.array([S,S])/2-(lo+hi)/2*sc
Z=np.full((S,S),-1e9,np.float32); N=np.zeros((S,S,3),np.float32); CC=np.zeros((S,S,3),np.float32)
for i in np.argsort(C[:,2]):
    r=R[i]*sc; cx,cy=C[i,:2]*sc+off; cy=S-cy
    ix,iy=int(round(cx)),int(round(cy)); ri=int(r)+2
    x0,x1=max(ix-ri,0),min(ix+ri+1,S); y0,y1=max(iy-ri,0),min(iy+ri+1,S)
    if x1<=x0 or y1<=y0: continue
    yy,xx=np.mgrid[y0:y1,x0:x1]
    dx=xx+.5-cx; dy=yy+.5-cy; d2=dx*dx+dy*dy; m=d2<r*r
    if not m.any(): continue
    dz=np.sqrt(np.clip(r*r-d2,0,None)); z=C[i,2]*sc+dz
    sub=Z[y0:y1,x0:x1]; u=m&(z>sub)
    if not u.any(): continue
    sub[u]=z[u]
    nn=N[y0:y1,x0:x1]; nn[u,0]=(dx/r)[u]; nn[u,1]=(-dy/r)[u]; nn[u,2]=(dz/r)[u]
    CC[y0:y1,x0:x1][u]=K[i]
print('splat',time.time()-t0)
mask=Z>-1e8
def _box(a,k,ax):
    a=np.moveaxis(a,ax,0);p=np.concatenate([np.repeat(a[:1],k+1,0),a,np.repeat(a[-1:],k,0)]);c=np.cumsum(p,0)
    return np.moveaxis((c[2*k+1:]-c[:-2*k-1])/(2*k+1),0,ax)
def blur(a,s):
    k=max(1,int(s*0.9))
    for _ in range(3): a=_box(_box(a,k,0),k,1)
    return a
Zf=np.where(mask,Z,Z[mask].min()-6*sc).astype(np.float32)
ao=np.zeros((S,S),np.float32)
for k in (5,12,26,56,110):
    s=k*S/2600.; ao+=np.clip((blur(Zf,s)-Zf)/(s*1.6),0,1)
ao=np.clip(1-ao/2.35,0,1)
L=np.array([-.44,.60,.67]); L/=np.linalg.norm(L)
lam=np.clip((N*L).sum(-1),0,1); wrap=np.clip(((N*L).sum(-1)+.38)/1.38,0,1)
Hv=L+np.array([0,0,1.]); Hv/=np.linalg.norm(Hv); nh=np.clip((N*Hv).sum(-1),0,1)
spec=nh**86*0.62+nh**16*0.09                     # glossy
rim=(1-np.clip(N[...,2],0,1))**2.7
zn=(Z-Z[mask].min())/(Z[mask].max()-Z[mask].min()+1e-6); zn=np.where(mask,zn,0)
ink=np.array([9,13,19])/255.; steel=np.array([200,221,240])/255.
diff=(0.06+0.92*lam**1.08+0.22*wrap)*(0.30+0.70*ao)
sh=CC*diff[...,None]+spec[...,None]*ao[...,None]*steel[None,None,:]+rim[...,None]*steel[None,None,:]*0.22*ao[...,None]
f=(0.70+0.30*zn[...,None]); sh=sh*f+ink*(1-f)*0.72
img=np.clip(sh,0,1)
al=np.clip(blur(mask.astype(np.float32),S/2600.*1.5)*1.3,0,1)*mask
rgba=np.dstack([img*255,al*255]).astype(np.uint8)
im=Image.fromarray(rgba,'RGBA').resize((S//2,S//2),Image.LANCZOS)
im=im.crop(im.getbbox()); im.save(H/(os.environ.get('OUT','pep')+'.png'))
print(im.size,time.time()-t0)
