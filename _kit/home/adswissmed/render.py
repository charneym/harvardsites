#!/usr/bin/env python3
"""Hero render (HOME_BRIEF update 2c): a packaged fused biconic taper (FBT) fibre-optic coupler of the kind Lightel makes and
shows on its own home page: a slim stainless-steel protection tube with stepped collars, white strain-relief boots, one buffered
fibre in and two out (a 1x2 coupler), the three cleaved fibre ends glowing softly with light. No text or branding on it.
Numpy sphere tracer, studio-lit brushed steel, real alpha (glows composited premultiplied). Usage: render.py WIDTH out.png"""
import numpy as np, sys
from PIL import Image
WO=int(sys.argv[1]) if len(sys.argv)>1 else 1300; OUT=sys.argv[2] if len(sys.argv)>2 else 'hero.png'
SS=2; W=WO*SS; H=int(W*0.86)
A=np.array
def nrm(v):return v/(np.linalg.norm(v,axis=-1,keepdims=True)+1e-12)
def sm(a,b,x):x=np.clip((x-a)/(b-a),0,1);return x*x*(3-2*x)
# ---------- scene (object frame: tube axis along x) ----------
TL=1.10; TR=0.125
def tube(p):
    x=p[...,0];r=np.sqrt(p[...,1]**2+p[...,2]**2)
    # main tube with slightly rounded ends
    q0=np.abs(x)-TL;q1=r-TR
    d=np.sqrt(np.maximum(q0+.015,0)**2+np.maximum(q1+.015,0)**2)+np.minimum(np.maximum(q0+.015,q1+.015),0)-.015
    # two shallow ring grooves near each end
    gr=np.minimum(np.abs(x-0.90),np.abs(x+0.90))
    d=np.maximum(d,-(np.maximum(gr-0.012,TR-0.010-r)))
    # stepped collars at each end
    q0=np.abs(x)-(TL+0.07);q1=r-0.088
    col=np.sqrt(np.maximum(q0,0)**2+np.maximum(q1,0)**2)+np.minimum(np.maximum(q0,q1),0)
    return np.minimum(d,col)
def boot(p):
    # white tapered strain-relief boots, one at each end
    x=p[...,0];r=np.sqrt(p[...,1]**2+p[...,2]**2)
    ax=np.abs(x)-(TL+0.07);t=np.clip(ax/0.20,0,1)
    rad=0.060-0.022*t
    q0=np.abs(ax-0.10)-0.10;q1=r-rad
    return np.sqrt(np.maximum(q0,0)**2+np.maximum(q1,0)**2)+np.minimum(np.maximum(q0,q1),0)
def bez(p0,p1,p2,p3,n):
    t=np.linspace(0,1,n)[:,None];return (1-t)**3*p0+3*(1-t)**2*t*p1+3*(1-t)*t*t*p2+t**3*p3
FR=0.030
E0=TL+0.27
F_IN=bez(A([-E0+0.02,0,0]),A([-2.0,0,0]),A([-2.35,-0.06,0.10]),A([-2.75,-0.30,0.22]),14)
F_O1=bez(A([E0-0.02,0.012,0]),A([1.95,0.04,0]),A([2.30,0.22,-0.12]),A([2.72,0.42,-0.20]),14)
F_O2=bez(A([E0-0.02,-0.012,0]),A([1.95,-0.05,0.02]),A([2.25,-0.24,0.20]),A([2.62,-0.30,0.42]),14)
FIBRES=[F_IN,F_O1,F_O2]
def capsule(p,a,b,r):
    pa=p-a;ba=b-a;h=np.clip((pa@ba)/(ba@ba),0,1);return np.linalg.norm(pa-h[...,None]*ba,axis=-1)-r
def seg(p,a,b,r):
    # flat-ended cylinder (for the cleaved tip)
    ba=b-a;L=np.linalg.norm(ba);u=ba/L;pa=p-a;h=pa@u
    rr=np.linalg.norm(pa-h[...,None]*u,axis=-1)
    q0=np.abs(h-L/2)-L/2;q1=rr-r
    return np.sqrt(np.maximum(q0,0)**2+np.maximum(q1,0)**2)+np.minimum(np.maximum(q0,q1),0)
def fibres(p):
    d=np.full(p.shape[:-1],1e9)
    for F in FIBRES:
        for i in range(len(F)-2):d=np.minimum(d,capsule(p,F[i],F[i+1],FR))
        d=np.minimum(d,seg(p,F[-2],F[-1],FR))
    return d
def scene(p):
    return np.minimum(np.minimum(tube(p),boot(p)),fibres(p))
# ---------- camera ----------
yaw=np.radians(-14);pit=np.radians(-22)
fwd=nrm(A([np.sin(yaw)*np.cos(pit),np.sin(pit),-np.cos(yaw)*np.cos(pit)]))
rt=nrm(np.cross(fwd,A([0,1,0])));up=np.cross(rt,fwd)
roll=np.radians(-31);rt,up=rt*np.cos(roll)+up*np.sin(roll),up*np.cos(roll)-rt*np.sin(roll)
ro=A([0.22,0.06,0.0])-fwd*7.4
fov=0.43
ys,xs=np.mgrid[0:H,0:W]
u=(xs+.5-W/2)/(W/2)*fov;v=-(ys+.5-H/2)/(W/2)*fov
rd=nrm(fwd[None,None,:]+u[...,None]*rt+v[...,None]*up).reshape(-1,3)
N=len(rd);t=np.full(N,5.0);act=np.ones(N,bool);hit=np.zeros(N,bool)
for it in range(160):
    idx=np.nonzero(act)[0]
    if not len(idx):break
    p=ro+rd[idx]*t[idx,None];d=scene(p)
    t[idx]+=d*0.9
    h=d<3e-4;hit[idx[h]]=True;act[idx[h]]=False
    far=t[idx]>14;act[idx[far]]=False
print('hits',hit.sum())
P=ro+rd*t[:,None]
idx=np.nonzero(hit)[0];p=P[idx]
e=1e-3
def grad(f,p):
    return nrm(np.stack([f(p+A([e,0,0]))-f(p-A([e,0,0])),f(p+A([0,e,0]))-f(p-A([0,e,0])),f(p+A([0,0,e]))-f(p-A([0,0,e]))],-1))
n=grad(scene,p)
dt=tube(p);db=boot(p);df=fibres(p)
kind=np.where(dt<=np.minimum(db,df)+1e-4,0,np.where(db<=df,1,2))
V=-rd[idx];ndv=np.clip((n*V).sum(-1),0,1)
rf=2*ndv[:,None]*n-V
def env(r):
    y=r[:,1];x=r[:,0];z=r[:,2]
    base=0.04+0.08*sm(-0.3,0.5,y)
    box=sm(0.35,0.8,y)*sm(-0.9,-0.1,-x*0.9+0.2)*1.8
    strip=np.exp(-((x-0.7)/0.14)**2)*sm(-0.4,0.3,y)*1.0
    rim=np.exp(-((z+0.85)/0.25)**2)*0.55
    front=sm(0.2,0.7,z)*sm(-1.0,-0.3,y)*sm(0.75,0.2,y)*(0.45+0.75*sm(-0.2,-0.7,x))*0.9
    c=np.stack([base,base,base*1.1],1)+np.stack([box,box,box],1)*A([1.0,0.99,0.98])+strip[:,None]*A([0.70,0.68,1.0])+rim[:,None]*A([0.70,0.66,1.0])+front[:,None]*A([0.95,0.95,1.0])
    return c
ao=np.ones(len(p))
for k,s in enumerate([0.01,0.025,0.05,0.09]):
    ao-=(s-scene(p+n*s))*(1.6/(k+1))
ao=np.clip(ao,0.3,1)
col=np.zeros((len(p),3))
L1=nrm(A([-0.5,0.75,0.45]))
# --- steel, brushed along the tube axis ---
m=kind==0
if m.any():
    pp=p[m];nn=n[m];rr=rf[m]
    rng=np.random.default_rng(5)
    ang=np.arctan2(pp[:,2],pp[:,1])
    hsh=np.sin(ang*913.1+np.round(pp[:,0]*0)*1.0)*43758.5453;hsh=hsh-np.floor(hsh)
    hsh2=np.sin(ang*2113.1+pp[:,0]*2.0)*12345.678;hsh2=hsh2-np.floor(hsh2)
    blur=np.zeros_like(rr)
    for j in range(8):
        jit=A([0.0,(rng.random()-.5)*0.14,(rng.random()-.5)*0.14])
        blur+=env(nrm(rr+jit+(hsh[:,None]-.5)*A([0,0.05,0.05])))
    refl=blur/8
    fres=0.62+0.38*(1-np.clip((nn*V[m]).sum(-1),0,1))**5
    c=refl*fres[:,None]*A([0.86,0.87,0.90])*(0.94+0.06*hsh2[:,None])
    col[m]=c
# --- boots and fibre buffer: white satin polymer ---
for kk,base in ((1,A([0.80,0.80,0.82])),(2,A([0.86,0.86,0.88]))):
    m=kind==kk
    if m.any():
        nn=n[m];dif=np.clip(nn@L1,0,1);wrap=np.clip((nn@L1+0.4)/1.4,0,1)
        sp=env(rf[m])
        fr=(1-np.clip((nn*V[m]).sum(-1),0,1))**3
        col[m]=base*(0.10+0.55*wrap[:,None]+0.25*dif[:,None])+0.16*sp*(0.3+0.7*fr)[:,None]
col*=ao[:,None]
img=np.zeros((N,3));alpha=np.zeros(N)
img[idx]=col;alpha[idx]=1
img=img.reshape(H,W,3);alpha=alpha.reshape(H,W)
# ---------- glows at the three cleaved fibre ends (premultiplied over the object) ----------
def proj(q):
    d=q-ro;z=d@fwd;return (W/2+(d@rt)/z/fov*(W/2), H/2-(d@up)/z/fov*(W/2))
GL=np.zeros((H,W));CORE=np.zeros((H,W))
for F,amp in ((F_IN,1.0),(F_O1,0.8),(F_O2,0.8)):
    tip=F[-1]+nrm(F[-1]-F[-2])*0.004
    cx,cy=proj(tip);r2=(xs-cx)**2+(ys-cy)**2
    s=W*0.016;GL+=amp*(0.6*np.exp(-r2/(2*s*s))+0.22*np.exp(-r2/(2*(s*2.4)**2)))
    s2=W*0.0035;CORE+=amp*np.exp(-r2/(2*s2*s2))
GC=A([0.56,0.52,1.0]);CC=A([0.93,0.92,1.0])
ga=np.clip(GL*0.75,0,0.9);ca=np.clip(CORE,0,1)
prem=img*alpha[...,None]
prem=prem+GC*ga[...,None]*(1-alpha[...,None])*1.0+GC*ga[...,None]*alpha[...,None]*0.35
a2=alpha+ga*(1-alpha)
prem=prem*(1-ca[...,None])+CC*ca[...,None];a2=a2*(1-ca)+ca
# tone map (on unpremultiplied colour)
rgb=prem/np.maximum(a2[...,None],1e-6)
rgb=rgb/(1+0.30*rgb);rgb=np.clip(rgb,0,1)**(1/1.9)
out=np.dstack([rgb,np.clip(a2,0,1)])
im=Image.fromarray((np.clip(out,0,1)*255).astype(np.uint8),'RGBA').resize((WO,int(WO*0.86)),Image.LANCZOS)
bb=im.getbbox();print('bbox',bb,im.size)
mg=int(WO*0.05);im=im.crop((max(0,bb[0]-mg),max(0,bb[1]-mg),min(im.size[0],bb[2]+mg),min(im.size[1],bb[3]+mg)));print('crop',im.size)
im.save(OUT)
