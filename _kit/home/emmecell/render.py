#!/usr/bin/env python3
"""Hero render for Emmecell (HOME_BRIEF update 2c, a crafted render of the real subject): a clear human corneal button,
the watch-glass dome the company's EO2002 cells are steered onto, with its endothelial cell mosaic on the inner (concave)
face as a faint texture. Proportions after the adult cornea (anterior radius ~7.8 mm, posterior ~6.5 mm, ~0.55 mm thick at
the centre, ~11.5 mm across). Pure numpy: an analytic CSG shell (two spheres and the cut plane) ray-traced through up to
eight refractions with Fresnel reflections of a dark studio (a large cool softbox, a cyan strip, a low warm rim in the
logo red). Camera misses return true alpha, so the render sits on the page ink with no box edge (DJ/DP).
Usage: render.py [W] [H] [SS]  -> hero.png"""
import numpy as np, sys, time
from PIL import Image
t0=time.time()
W=int(sys.argv[1]) if len(sys.argv)>1 else 1500
H=int(sys.argv[2]) if len(sys.argv)>2 else 1200
SS=int(sys.argv[3]) if len(sys.argv)>3 else 2
NIDX=1.376
Ro,Ri,T=7.8,7.0,0.55
# outer apex at z=Ho; cut plane z=0 gives the 11.5 mm rim diameter
rim=5.75
co=-np.sqrt(Ro**2-rim**2)               # centre of outer sphere (apex Ho=Ro+co)
Ho=Ro+co; Hi=Ho-T; ci=Hi-Ri             # inner sphere centre so the centre thickness is T
def nrm(v): return v/np.linalg.norm(v,axis=-1,keepdims=True)
def rot(ax,a):
    c,s=np.cos(a),np.sin(a)
    if ax=='x': return np.array([[1,0,0],[0,c,-s],[0,s,c]])
    if ax=='y': return np.array([[c,0,s],[0,1,0],[-s,0,c]])
    return np.array([[c,-s,0],[s,c,0],[0,0,1]])
# object -> world: the dome faces the viewer, tipped back so its rim reads as an ellipse, turned a little to the left
Rm=rot('z',np.radians(8))@rot('y',np.radians(-14))@rot('x',np.radians(-57))
Ri_=Rm.T
# camera
cam=np.array([0,0,44.0]); fov=np.radians(17.5)
ys,xs=np.mgrid[0:H*SS,0:W*SS].astype(np.float32)
u=((xs+.5)/(W*SS)-.5)*2*np.tan(fov/2)*W/H; v=-((ys+.5)/(H*SS)-.5)*2*np.tan(fov/2)
D=nrm(np.stack([u,v,-np.ones_like(u)],-1)).reshape(-1,3)
O=np.broadcast_to(cam,D.shape).copy()
# into object space; centre the object (shift so the dome's mass sits at the origin)
off=np.array([0,0,Ho*.45])
O=(O@Ri_.T)+off; D=D@Ri_.T
def sph(O,D,c,r):
    oc=O-np.array([0,0,c]); b=(oc*D).sum(1); cc=(oc*oc).sum(1)-r*r; disc=b*b-cc
    s=np.sqrt(np.maximum(disc,0)); ok=disc>0
    return np.where(ok,-b-s,np.inf),np.where(ok,-b+s,np.inf)
def inO(p,e=1e-6): return ((p-np.array([0,0,co]))**2).sum(1)<=Ro*Ro+e
def outI(p,e=1e-6): return ((p-np.array([0,0,ci]))**2).sum(1)>=Ri*Ri-e
def hit(O,D):
    eps=1e-4;best=np.full(len(O),np.inf);kind=np.zeros(len(O),np.int8)
    a,b=sph(O,D,co,Ro)
    for t in (a,b):
        p=O+D*t[:,None]; ok=(t>eps)&np.isfinite(t)&(p[:,2]>=-1e-6)&outI(p)
        m=ok&(t<best); best[m]=t[m]; kind[m]=1
    a,b=sph(O,D,ci,Ri)
    for t in (a,b):
        p=O+D*t[:,None]; ok=(t>eps)&np.isfinite(t)&(p[:,2]>=-1e-6)&inO(p)
        m=ok&(t<best); best[m]=t[m]; kind[m]=2
    with np.errstate(divide='ignore',invalid='ignore'):
        t=np.where(np.abs(D[:,2])>1e-9,-O[:,2]/D[:,2],np.inf)
    p=O+D*t[:,None]; ok=(t>eps)&inO(p)&outI(p)
    m=ok&(t<best); best[m]=t[m]; kind[m]=3
    p=O+D*np.where(np.isfinite(best),best,0)[:,None]
    N=np.zeros_like(p)
    N[kind==1]=nrm(p[kind==1]-np.array([0,0,co])); N[kind==2]=-nrm(p[kind==2]-np.array([0,0,ci])); N[kind==3]=np.array([0,0,-1.])
    return best,kind,p,N
# ---- studio environment (world space directions)
INK=np.array([10,20,27])/255.
def smoothstep(a,b,x): x=np.clip((x-a)/(b-a),0,1); return x*x*(3-2*x)
def box(d,c,r,soft):
    c=nrm(np.array(c,float)); return smoothstep(np.cos(r+soft),np.cos(r),d@c)
def rect(d,c,upv,hw,hh,soft,soft2=None):
    soft2=soft if soft2 is None else soft2
    c=nrm(np.array(c,float)); e1=nrm(np.cross(np.array(upv,float),c)); e2=np.cross(c,e1)
    z=d@c; a=np.arctan2(d@e1,z); b=np.arctan2(d@e2,z)
    return (z>0)*smoothstep(hw+soft,hw,np.abs(a))*smoothstep(hh+soft2,hh,np.abs(b))
def env(dw):
    up=dw[:,1]
    L=np.outer(0.010+0.022*smoothstep(-.4,1,up),[0.55,0.85,1.0])
    L=L+np.outer(rect(dw,[-0.45,0.8,0.4],[0,0,1],0.26,0.045,0.22,0.025),[10,11,12])      # cool softbox, upper left front
    L=L+np.outer(rect(dw,[0.9,0.15,0.05],[0,1,0],0.05,0.55,0.35),[1.4,3.8,4.8])   # cyan strip, right
    L=L+np.outer(rect(dw,[-0.4,-0.8,-0.2],[0,0,1],0.5,0.12,0.25),[4.5,1.3,1.6])   # low warm rim in the magnet red
    g=np.clip(-dw[:,2],0,1)                                                         # backdrop behind the object
    L=L+np.outer(0.0,[0.35,0.7,0.85])
    L=L+np.outer(smoothstep(0.93,0.995,dw@nrm(np.array([0.22,-0.30,-1.0]))),[0.10,0.20,0.25])
    return L
# ---- endothelial mosaic on the posterior face: a jittered hexagonal Voronoi, its borders as faint pale lines
rng=np.random.default_rng(7)
def mosaic(p):
    cs=0.2;x=p[:,0]/cs;y=p[:,1]/cs
    r=np.floor(y).astype(int); best=np.full(len(p),9.);second=np.full(len(p),9.)
    for dr in (-1,0,1):
        rr=r+dr
        for dc in (-1,0,1):
            cx=np.floor(x-(rr%2)*.5).astype(int)+dc
            h=(cx*73856093^rr*19349663)&1023
            jx=((h*0.61803)%1-.5)*.36; jy=(((h*7)*0.61803)%1-.5)*.36
            px=cx+(rr%2)*.5+.5+jx; py=rr+.5+jy
            dd=np.hypot(x-px,(y-py)*1.0)
            nb=np.minimum(best,dd); second=np.where(dd<best,best,np.minimum(second,dd)); best=nb
    edge=second-best
    return smoothstep(0.0,0.07,edge)   # 0 on borders, 1 in cell bodies
N_=len(O); C=np.zeros((N_,3)); A=np.zeros(N_); thr=np.ones((N_,3))
alive=np.ones(N_,bool); inside=np.zeros(N_,bool); first=True
absorb=np.array([0.030,0.012,0.006])   # a faint aqua body tint
for it in range(9):
    idx=np.where(alive)[0]
    if len(idx)==0: break
    t,k,p,N=hit(O[idx],D[idx])
    miss=~np.isfinite(t)
    if first:
        A[idx[~miss]]=1.0
    # misses: environment (camera misses stay transparent)
    mi=idx[miss]
    if not first: C[mi]+=thr[mi]*env(D[mi]@Rm.T)
    alive[mi]=False
    hi=idx[~miss]; t=t[~miss]; p=p[~miss]; N=N[~miss]; k=k[~miss]; d=D[hi]
    if len(hi)==0: break
    ins=(d*N).sum(1)>0
    N=np.where(ins[:,None],-N,N)
    thr[hi]*=np.where(ins[:,None],np.exp(-absorb*t[:,None]),1)
    cosi=-(d*N).sum(1); n1=np.where(ins,NIDX,1.0); n2=np.where(ins,1.0,NIDX)
    eta=n1/n2; sin2=eta*eta*np.maximum(0,1-cosi*cosi); tir=sin2>1
    cost=np.sqrt(np.maximum(0,1-sin2))
    rs=((n1*cosi-n2*cost)/(n1*cosi+n2*cost))**2; rp=((n1*cost-n2*cosi)/(n1*cost+n2*cosi))**2
    F=np.where(tir,1.0,np.clip(.5*(rs+rp),0,1))
    refl=nrm(d+2*cosi[:,None]*N)
    # reflections go straight to the studio (one bounce); internal reflections are kept only via TIR
    if True:
        C[hi]+=thr[hi]*F[:,None]*env(refl@Rm.T)*np.where(ins,0.35,1.0)[:,None]
    # the posterior face carries the cell mosaic: borders scatter a little cool light, bodies a faint haze
    post=k==2
    if post.any():
        mz=mosaic(p[post]); g=(0.55+0.45*np.clip(-(d[post]*N[post]).sum(1),0,1))*smoothstep(4.6,1.5,np.hypot(p[post][:,0],p[post][:,1]))
        C[hi[post]]+=thr[hi[post]]*np.outer((1-mz)*0.02*g+0.003,[0.62,0.86,1.0])
        thr[hi[post]]*=(0.96+0.04*mz)[:,None]
    rim_=k==3
    if rim_.any():
        C[hi[rim_]]+=thr[hi[rim_]]*np.array([0.01,0.018,0.022])
    trn=nrm(eta[:,None]*d+(eta*cosi-cost)[:,None]*N)
    newd=np.where(tir[:,None],refl,trn)
    thr[hi]*=np.where(tir[:,None],1.0,(1-F)[:,None])
    O[hi]=p+newd*1e-4; D[hi]=newd
    first=False
# leftovers
C[alive]+=thr[alive]*env(D[alive]@Rm.T)*0.3
img=C.reshape(H*SS,W*SS,3); al=A.reshape(H*SS,W*SS)
img=img.reshape(H,SS,W,SS,3).mean((1,3)); al=al.reshape(H,SS,W,SS).mean((1,3))
# filmic tone map and gamma; premultiplied over nothing, so un-premultiply for straight alpha
x=img*1.25; x=x*(2.51*x+.03)/(x*(2.43*x+.59)+.14); x=np.clip(x,0,1)**(1/2.2)
bb=np.argwhere(al>0.004);y0,x0=bb.min(0);y1,x1=bb.max(0)
# un-blend from the page ink: where the glass shows only the dark studio it becomes see-through, so the page's own glow
# shows through it like real glass; rims, highlights and the cell texture stay opaque
ink=INK[None,None,:]
xs=np.clip(x/np.maximum(al[...,None],1e-3),0,1)
a2=np.clip(((xs-ink)/(1-ink)).max(2)*1.15,0,1)
a2=np.maximum(a2,0.10)*al
cs=np.clip((x-ink*(al[...,None]-a2[...,None]))/np.maximum(a2[...,None],1e-3),0,1)
out=np.dstack([cs,a2])
pad=int(0.05*max(W,H));im=Image.fromarray((out*255).round().astype(np.uint8),'RGBA').crop((x0-pad,y0-pad,x1+pad+1,y1+pad+1));im.save('hero.png');print(im.size)
print('done',W,H,SS,round(time.time()-t0,1),'s')
