#!/usr/bin/env python3
"""Hero render (HOME_BRIEF option c): the Syracuse Method's first step, as an SEM-style raytraced view.
A track-etched filter membrane with 5 um pores (US 12,344,834: size-exclusion through 5 um filters), flattened human
epithelial cells (too large to pass) resting on it, and rod-shaped bacteria (E. coli scale, ~2 um) on the surface and
slipping into the pores. Heightfield raymarch, SEM edge brightening + directional light + AO, false colour from the palette,
real alpha with a long eased radial falloff (DP/DJ). Writes hero.png (then cwebp -> hero.webp)."""
import numpy as np, math, sys
from scipy import ndimage as nd
from PIL import Image
rng=np.random.default_rng(11)
S=0.1                                 # um per heightfield px
X0,X1,Z0,Z1=-95.,95.,-10.,175.
NX=int((X1-X0)/S); NZ=int((Z1-Z0)/S)
xs=X0+np.arange(NX)*S; zs=Z0+np.arange(NZ)*S
XX,ZZ=np.meshgrid(xs,zs)              # [z,x]
H=np.zeros((NZ,NX),np.float32); M=np.zeros((NZ,NX),np.uint8)  # 0 membrane 1 pore 2 cell 3 bacterium
def fnoise(sc,amp,seed):
    r=np.random.default_rng(seed).standard_normal((NZ,NX)).astype(np.float32)
    r=nd.gaussian_filter(r,sc/S); r/=r.std()+1e-9; return r*amp
H+=fnoise(0.25,0.02,1)+fnoise(1.5,0.03,2)
# pores: poisson-ish, some doublets (track-etch trait)
P=[];tries=0
while len(P)<190 and tries<20000:
    tries+=1;x=rng.uniform(X0,X1);z=rng.uniform(Z0,Z1)
    if all((x-a)**2+(z-b)**2>7.5**2 for a,b,_ in P): P.append((x,z,rng.uniform(2.35,2.65)))
for i in range(14):
    a,b,r=P[rng.integers(len(P))];t=rng.uniform(0,6.3);P.append((a+math.cos(t)*3.2,b+math.sin(t)*3.2,r*rng.uniform(.9,1.0)))
for x,z,r in P:
    i0=int((z-Z0-5)/S);i1=int((z-Z0+5)/S);j0=int((x-X0-5)/S);j1=int((x-X0+5)/S)
    i0,j0=max(i0,0),max(j0,0);sl=(slice(i0,i1),slice(j0,j1))
    d=np.hypot(XX[sl]-x,ZZ[sl]-z)
    rim=np.clip((d-r)/0.35,0,1)                    # rounded lip
    q=np.clip((r-d)/0.9,0,1);hole=-4.0*q*q*(3-2*q)
    lip=np.where((d>=r)&(d<r+0.35),-0.25*(1-rim)**2,0)
    H[sl]=np.minimum(H[sl],H[sl]+hole+lip)
    M[sl][d<r]=1
LAB=fnoise(0.9,1.0,9)-0.0
# epithelial cells: irregular flattened polygons with microplicae ridges and a nucleus dome
CELLS=[(-30,52,27,0.3,3),(28,92,31,1.4,4),(-50,128,24,2.2,5),(58,30,20,0.9,6),(6,148,22,2.9,7)]
for cx,cz,R,rot,sd in CELLS:
    r2=np.random.default_rng(sd);n=int(r2.integers(5,8))
    ang=np.sort(r2.uniform(0,2*np.pi,n));rad=R*r2.uniform(.78,1.1,n)
    pad=R*1.4;i0=max(int((cz-Z0-pad)/S),0);i1=min(int((cz-Z0+pad)/S),NZ);j0=max(int((cx-X0-pad)/S),0);j1=min(int((cx-X0+pad)/S),NX)
    sl=(slice(i0,i1),slice(j0,j1));dx=XX[sl]-cx;dz=ZZ[sl]-cz
    th=np.arctan2(dz,dx);rr=np.hypot(dx,dz)
    # smooth radial outline from polygon vertices via periodic interpolation
    aa=np.concatenate([ang-2*np.pi,ang,ang+2*np.pi]);rv=np.concatenate([rad,rad,rad])
    edge=np.interp(th,aa,rv);edge*=1+0.04*np.sin(th*9+sd)+0.02*np.sin(th*17+sd*2)
    inside=np.clip((edge-rr)/1.6,0,1);inside=inside*inside*(3-2*inside)
    sheet=0.9*inside+0.35*np.exp(-((edge-rr-1.2)/0.9)**2)*(rr<edge+1)   # thin sheet with a slightly raised curled margin
    # microplicae: labyrinth of fine ridges
    nz=LAB[sl]
    ridg=0.22*np.exp(-(nz/0.22)**2)*inside
    nuc=2.6*np.exp(-(((dx-R*.08)**2+(dz+R*.05)**2)/(R*.2)**2)**1.1)
    hc=sheet+ridg+nuc*inside+0.05
    base=H[sl];mask=inside>0.02
    H[sl]=np.where(mask,np.maximum(base,0)+hc*1.0,base)
    M[sl][inside>0.3]=2
# bacteria: rods (capsules) r=0.45 um, length 1.8-2.8 um; some over pores, dipping in
def capsule(x,z,L,a,r=0.5,y0=0.0,tilt=0.0):
    pad=L/2+r+.2;i0=max(int((z-Z0-pad)/S),0);i1=min(int((z-Z0+pad)/S)+1,NZ);j0=max(int((x-X0-pad)/S),0);j1=min(int((x-X0+pad)/S)+1,NX)
    if i1<=i0 or j1<=j0: return
    sl=(slice(i0,i1),slice(j0,j1));dx=XX[sl]-x;dz=ZZ[sl]-z
    u=dx*math.cos(a)+dz*math.sin(a);v=-dx*math.sin(a)+dz*math.cos(a)
    uc=np.clip(u,-L/2+r,L/2-r);d2=(u-uc)**2+v**2
    prof=np.sqrt(np.clip(r*r-d2,0,None))
    h=np.where(d2<r*r,y0+1.7*prof+tilt*u,-99)
    old=H[sl];H[sl]=np.maximum(old,h);M[sl][h>old]=3
cellxy=[(c[0],c[1],c[2]) for c in CELLS]
def oncell(x,z): return any((x-a)**2+(z-b)**2<(r*.85)**2 for a,b,r in cellxy)
for k in range(520):
    x=rng.uniform(X0,X1);z=rng.uniform(Z0,Z1)
    sx,sz=int((z-Z0)/S),int((x-X0)/S)
    y0=float(H[min(sx,NZ-1),min(sz,NX-1)]) if oncell(x,z) else 0.0
    if oncell(x,z) and rng.random()<.6: continue
    if any((x-a)**2+(z-b)**2<(rr+1.6)**2 for a,b,rr in P): continue
    capsule(x,z,rng.uniform(1.8,2.9),rng.uniform(0,np.pi),y0=max(y0,0) if y0>-1 else 0)
# bacteria entering pores (tilted, sunk)
for x,z,r in P[:120]:
    if False:
        a=rng.uniform(0,np.pi);capsule(x+rng.uniform(-.6,.6),z+rng.uniform(-.6,.6),rng.uniform(2.0,2.7),a,y0=-0.8,tilt=0.0)
# microcolonies: small clusters
for k in range(16):
    cx=rng.uniform(X0,X1);cz=rng.uniform(Z0,Z1)
    if oncell(cx,cz) or any((cx-a)**2+(cz-b)**2<9**2 for a,b,_ in P): continue
    for j in range(int(rng.integers(5,12))):
        capsule(cx+rng.normal(0,1.6),cz+rng.normal(0,1.6),rng.uniform(1.8,2.6),rng.uniform(0,np.pi),y0=0.0)
H=nd.gaussian_filter(H,1.0);print('Hmax',H.max(),H.min())
# normals + AO
gz,gx=np.gradient(nd.gaussian_filter(H,1.8),S)
nrm=np.stack([-gx,np.ones_like(H),-gz],-1);nrm/=np.linalg.norm(nrm,axis=-1,keepdims=True)
ao=np.ones_like(H)
for s,k in [(0.6,.55),(2.0,.30),(6.0,.12)]:
    ao-=k*np.clip(nd.gaussian_filter(H,s/S)-H,0,None)
ao=np.clip(ao,0.15,1)
# camera
OW,OH=int(sys.argv[1]),int(sys.argv[2]);SS=2;W,Hh=OW*SS,OH*SS
cam=np.array([0.,50.,-6.]);tgt=np.array([0.,0.,60.])
fw=tgt-cam;fw/=np.linalg.norm(fw);rt=np.cross([0,1,0],fw);rt/=np.linalg.norm(rt);up=np.cross(fw,rt)
fov=math.radians(46);asp=W/Hh
px=(np.arange(W)+.5)/W*2-1;py=1-(np.arange(Hh)+.5)/Hh*2
PX,PY=np.meshgrid(px*math.tan(fov/2)*asp,py*math.tan(fov/2))
D=fw[None,None,:]+PX[...,None]*rt[None,None,:]+PY[...,None]*up[None,None,:];D/=np.linalg.norm(D,axis=-1,keepdims=True)
D=D.reshape(-1,3);n=len(D)
ymax=7.5;t=(cam[1]-ymax)/(-D[:,1]);t=np.where(D[:,1]<0,t,1e9)
def sampleH(x,z):
    j=(x-X0)/S;i=(z-Z0)/S
    return nd.map_coordinates(H,[i,j],order=1,mode='constant',cval=-6)
hit=np.zeros(n,bool);dt=0.05;tp=t.copy()
for it in range(240):
    p=cam[None,:]+D*t[:,None];h=sampleH(p[:,0],p[:,2])
    nh=(~hit)&(p[:,1]<=h)
    hit|=nh
    st=np.clip((p[:,1]-h)*0.3,0.03,1.5)
    tp=np.where(hit,tp,t)
    t=np.where(hit,t,t+st)
# refine: step back and bisect
lo=tp.copy();hi=t.copy()
for k in range(10):
    mid=(lo+hi)/2;p=cam[None,:]+D*mid[:,None];h=sampleH(p[:,0],p[:,2]);under=p[:,1]<=h
    hi=np.where(under,mid,hi);lo=np.where(under,lo,mid)
p=cam[None,:]+D*hi[:,None]
J=(p[:,0]-X0)/S;I=(p[:,2]-Z0)/S
N=np.stack([nd.map_coordinates(nrm[...,c],[I,J],order=1) for c in range(3)],-1);N/=np.linalg.norm(N,axis=-1,keepdims=True)+1e-9
A=nd.map_coordinates(ao,[I,J],order=1,cval=1)
Mi=nd.map_coordinates(np.where(nd.grey_dilation(M==3,size=5),3,M).astype(np.float32),[I,J],order=0)
V=-D
L=np.array([-.55,.75,-.35]);L/=np.linalg.norm(L)
ndl=np.clip((N*L).sum(-1),0,1);ndv=np.clip((N*V).sum(-1),0,1)
se=(1-ndv)**1.6                                           # SEM edge brightening
shade=1.22*(0.2+0.55*ndl+0.75*se)*A
# false colour (palette: slate silt, bone, ochre)
alb=np.zeros((n,3));
alb[:]=np.array([0.47,0.52,0.50])                         # membrane slate
alb[Mi==1]=np.array([0.20,0.23,0.22])
alb[Mi==2]=np.array([0.86,0.84,0.77])                     # epithelial cells, bone
alb[Mi==3]=np.array([0.82,0.63,0.30])                     # bacteria, ochre
pore=np.clip((-p[:,1]-0.4)/3.0,0,1)                       # depth darkening inside pores
col=alb*shade[:,None]*(1-0.85*pore)[:,None]
col=np.clip(col,0,1)
# depth falloff into ink, and long eased radial alpha
ink=np.array([0x13,0x15,0x12])/255.
dist=hi
fog=np.clip((dist-62)/100,0,1)**1.4
col=col*(1-fog[:,None])+ink*fog[:,None]
col=col.reshape(Hh,W,3)
yy,xx=np.mgrid[0:Hh,0:W];ex=(xx-W*.5)/(W*.5);ey=(yy-Hh*.5)/(Hh*.5)
r=np.sqrt(ex**2+ey**2)
a=np.clip((1.0-r)/0.62,0,1);a=a*a*(3-2*a);a=a**1.15
a*=(~hit.reshape(Hh,W)==False)
# premultiplied toward ink so the visible ground equals the page ink
out=np.dstack([np.clip(col,0,1),a]).astype(np.float32)
out=out.reshape(OH,SS,OW,SS,4).mean((1,3))
Image.fromarray((out*255+.5).astype(np.uint8),'RGBA').save('hero.png')
print('ok',W,Hh,hit.mean())
