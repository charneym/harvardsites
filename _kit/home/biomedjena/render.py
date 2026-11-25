#!/usr/bin/env python3
"""Hero render (HOME_BRIEF update 2c): BioMed Jena's own product, the binocular video goggle mask of the eHIT USB / eVNG USB
systems (as photographed on biomed-jena.de): a curved satin-black shell, a smoked acrylic front visor, a camera housing at each
end, and the blue connector rings with their cables leaving from the underside. No text, label or branding on it.
Numpy sphere tracer, studio lit, real alpha. Usage: render.py WIDTH out.png"""
import numpy as np, sys
from PIL import Image
WO=int(sys.argv[1]) if len(sys.argv)>1 else 1300; OUT=sys.argv[2] if len(sys.argv)>2 else 'hero.png'
SS=2; W=WO*SS; H=int(W*0.80)
A=np.array
def nrm(v):return v/(np.linalg.norm(v,axis=-1,keepdims=True)+1e-12)
def sm(a,b,x):x=np.clip((x-a)/(b-a),0,1);return x*x*(3-2*x)
Rc=1.05
def bent(p):
    x=p[...,0];y=p[...,1];z=p[...,2]
    r=np.sqrt(x*x+(z+Rc)**2);th=np.arctan2(x,z+Rc)
    return th*Rc,y,r-Rc
def rbox(u,y,w,cu,cy,cw,hu,hy,hw,rr):
    q0=np.abs(u-cu)-hu+rr;q1=np.abs(y-cy)-hy+rr;q2=np.abs(w-cw)-hw+rr
    o=np.sqrt(np.maximum(q0,0)**2+np.maximum(q1,0)**2+np.maximum(q2,0)**2)
    return o+np.minimum(np.maximum(np.maximum(q0,q1),q2),0)-rr
def box2(u,y,hu,hy,rr):
    q0=np.abs(u)-hu+rr;q1=np.abs(y)-hy+rr
    return np.sqrt(np.maximum(q0,0)**2+np.maximum(q1,0)**2)+np.minimum(np.maximum(q0,q1),0)-rr
def smin(a,b,k):
    h=np.clip(.5+.5*(b-a)/k,0,1);return b*(1-h)+a*h-k*h*(1-h)
VU,VY=0.56,0.165
def nose(u,y,m=0.0):
    return np.sqrt((u/0.17)**2+((y+0.27)/0.19)**2)*0.17-0.17-m
def vshape(u,y,hu,hy,rr):
    return np.maximum(box2(u,y-0.01,hu,hy,rr),-nose(u,y,0.035))
def shell(p):
    u,y,w=bent(p)
    d=rbox(u,y,w,0,0.0,-0.13,0.80,0.25,0.19,0.075)
    d=np.maximum(d,-nose(u,y))
    # camera housings at both ends, a touch taller and proud of the front
    for s in (-1,1):
        d=smin(d,rbox(u,y,w,s*0.86,0.01,-0.11,0.15,0.30,0.22,0.06),0.035)
    # visor outline groove on the front face
    g=np.maximum(np.abs(vshape(u,y,VU,VY,0.05))-0.007,-(w-0.045))
    d=np.maximum(d,-g)
    # visor itself sits a hair recessed: carve the window slightly
    win=np.maximum(vshape(u,y,VU-0.008,VY-0.008,0.045),-(w-0.052))
    d=np.maximum(d,-(win))
    # parting line all around the shell
    carve=np.maximum(np.abs(w+0.17)-0.005,-d-0.014)
    d=np.maximum(d,-carve)
    # housing seams (where housing meets the shell)
    for s in (-1,1):
        cv=np.maximum(np.abs(np.abs(u)-0.70)-0.004,-d-0.012)
        d=np.maximum(d,-np.maximum(cv,-(np.abs(y)-0.2)))
    return d
def visor(p):
    u,y,w=bent(p)
    q=np.abs(w-0.018)-0.022
    v2=vshape(u,y,VU-0.008,VY-0.008,0.04)
    return np.sqrt(np.maximum(q,0)**2+np.maximum(v2,0)**2)+np.minimum(np.maximum(q,v2),0)
def foam(p):
    u,y,w=bent(p)
    return rbox(u,y,w,0,0.0,-0.36,0.74,0.22,0.06,0.05)
# connectors: under each housing, near the front; cable runs down and out
def capsule(p,a,b,r):
    pa=p-a;ba=b-a;h=np.clip((pa@ba)/(ba@ba),0,1);return np.linalg.norm(pa-h[...,None]*ba,axis=-1)-r
def cyl(p,a,b,r):
    ba=b-a;L=np.linalg.norm(ba);uu=ba/L;pa=p-a;h=pa@uu
    rr=np.linalg.norm(pa-h[...,None]*uu,axis=-1)
    q0=np.abs(h-L/2)-L/2;q1=rr-r
    return np.sqrt(np.maximum(q0,0)**2+np.maximum(q1,0)**2)+np.minimum(np.maximum(q0,q1),0)
def bz(p0,p1,p2,p3,n):
    t=np.linspace(0,1,n)[:,None];return (1-t)**3*p0+3*(1-t)**2*t*p1+3*(1-t)*t*t*p2+t**3*p3
def hpos(s):
    th=s*0.86/Rc;r=Rc-0.02
    return A([np.sin(th)*r,-0.29,np.cos(th)*r-Rc])
CON=[];CAB=[]
for s in (-1,1):
    b=hpos(s)
    CON.append((b,b+A([0,-0.05,0]),b+A([0,-0.05,0]),b+A([0,-0.105,0]),b+A([0,-0.105,0]),b+A([0,-0.15,0])))
    st=b+A([0,-0.14,0])
    CAB.append(bz(st,st+A([0,-0.30,0]),st+A([s*0.10,-0.55,0.10]),st+A([s*0.22,-0.95,0.16]),12))
def conn(p):
    d=np.full(p.shape[:-1],1e9)
    for c in CON:d=np.minimum(d,cyl(p,c[0]+A([0,0.02,0]),c[1],0.038))
    return d
def ring(p):
    d=np.full(p.shape[:-1],1e9)
    for c in CON:d=np.minimum(d,cyl(p,c[2],c[3],0.050)-0.004)
    return d
def cable(p):
    d=np.full(p.shape[:-1],1e9)
    for c in CON:d=np.minimum(d,cyl(p,c[4],c[5],0.030))
    for C in CAB:
        for i in range(len(C)-1):d=np.minimum(d,capsule(p,C[i],C[i+1],0.021))
    return d
def strap(p):
    x=p[...,0];y=p[...,1];z=p[...,2]
    zc=z+Rc*0.55;r=np.sqrt((x/1.0)**2+(zc/1.25)**2)
    th=np.arctan2(x,zc)
    band=np.maximum(np.abs(r-1.02)-0.012,np.abs(y-0.0)-0.11)
    # only behind the housings
    return np.maximum(band,-(np.abs(th)-1.05))
def scene(p):
    return np.minimum(np.minimum(np.minimum(shell(p),visor(p)),np.minimum(foam(p),conn(p))),np.minimum(np.minimum(ring(p),cable(p)),strap(p)))
# camera: front three-quarter, slightly above
yaw=np.radians(26);pit=np.radians(-17)
tgt=A([0.0,-0.18,-0.35])
fwd=nrm(A([-np.sin(yaw)*np.cos(pit),np.sin(pit),-np.cos(yaw)*np.cos(pit)]))
rt=nrm(np.cross(fwd,A([0,1,0])));up=np.cross(rt,fwd)
ro=tgt-fwd*7.0
fov=0.25
ys,xs=np.mgrid[0:H,0:W]
u=(xs+.5-W/2)/(W/2)*fov;v=-(ys+.5-H/2)/(W/2)*fov
rd=nrm(fwd[None,None,:]+u[...,None]*rt+v[...,None]*up).reshape(-1,3)
N=len(rd);t=np.full(N,5.0);act=np.ones(N,bool);hit=np.zeros(N,bool)
for it in range(200):
    idx=np.nonzero(act)[0]
    if not len(idx):break
    p=ro+rd[idx]*t[idx,None];d=scene(p)
    t[idx]+=d*0.85
    h=d<2.5e-4;hit[idx[h]]=True;act[idx[h]]=False
    far=t[idx]>10;act[idx[far]]=False
print('hits',hit.sum())
P=ro+rd*t[:,None]
idx=np.nonzero(hit)[0];p=P[idx]
e=8e-4
def grad(f,p):
    return nrm(np.stack([f(p+A([e,0,0]))-f(p-A([e,0,0])),f(p+A([0,e,0]))-f(p-A([0,e,0])),f(p+A([0,0,e]))-f(p-A([0,0,e]))],-1))
n=grad(scene,p)
ds=[shell(p),visor(p),foam(p),conn(p),ring(p),cable(p),strap(p)]
kind=np.argmin(np.stack(ds,0),0)
V=-rd[idx];ndv=np.clip((n*V).sum(-1),0,1)
rf=2*ndv[:,None]*n-V
L1=nrm(A([-0.55,0.75,0.55]))
def env(r):
    x=r[:,0];y=r[:,1];z=r[:,2]
    base=0.012+0.03*sm(-0.2,0.8,y)
    soft=sm(0.80,0.96,r@L1)*3.2                     # big softbox upper left front
    top=sm(0.55,0.95,y)*sm(-0.6,0.4,z)*1.1           # overhead panel
    strip=np.exp(-((x-0.80)/0.10)**2)*sm(-0.5,0.2,y)*sm(-0.4,0.3,z)*2.0   # tall strip right
    rim=sm(0.2,0.8,-z)*sm(-0.1,0.5,-x)*sm(-0.3,0.4,y)*1.3                  # cool rim behind left
    c=np.stack([base,base,base*1.25],1)+(soft+top)[:,None]*A([1.0,0.99,0.97])+strip[:,None]*A([0.92,0.94,1.0])+rim[:,None]*A([0.55,0.62,1.0])
    return c
def blurenv(rr,amt,k,seed):
    rng=np.random.default_rng(seed);acc=np.zeros_like(rr)
    for j in range(k):acc+=env(nrm(rr+(rng.random(3)-.5)*amt))
    return acc/k
ao=np.ones(len(p))
for k,s in enumerate([0.008,0.02,0.04,0.075]):
    ao-=(s-scene(p+n*s))*(1.3/(k+1))
ao=np.clip(ao,0.35,1)
col=np.zeros((len(p),3))
def fres(nd,f0):return f0+(1-f0)*(1-nd)**5
# fine texture noise for satin plastic
hs=np.sin(p@A([913.1,437.7,271.3]))*43758.5453;hs=hs-np.floor(hs)
for kk in range(7):
    m=kind==kk
    if not m.any():continue
    nn=n[m];nd=ndv[m];rr=rf[m];dif=np.clip(nn@L1,0,1);wrap=np.clip((nn@L1+0.3)/1.3,0,1)
    if kk==0:   # satin black ABS
        sp=blurenv(rr,0.45,10,1);F=fres(nd,0.045)
        c=A([0.030,0.031,0.036])*(0.25+0.9*wrap[:,None])+sp*F[:,None]*0.85
        c*=(0.97+0.06*hs[m][:,None])
    elif kk==1: # smoked acrylic visor, glossy
        sp=blurenv(rr,0.04,3,2);F=fres(nd,0.08)
        gy=sm(-0.25,0.2,p[m][:,1])[:,None]
        c=A([0.035,0.05,0.085])*(0.6+0.7*gy)+sp*F[:,None]*2.2+A([0.04,0.06,0.11])*wrap[:,None]
    elif kk==2: # foam cushion
        sp=blurenv(rr,0.9,6,3);F=fres(nd,0.03)
        c=A([0.05,0.05,0.055])*(0.2+0.8*wrap[:,None])+sp*F[:,None]*0.25
    elif kk==3: # black connector body
        sp=blurenv(rr,0.3,6,4);F=fres(nd,0.05)
        c=A([0.03,0.03,0.034])*(0.3+0.8*wrap[:,None])+sp*F[:,None]*0.9
    elif kk==4: # blue anodised ring
        sp=blurenv(rr,0.25,8,5)
        c=sp*A([0.20,0.42,0.95])*0.85+A([0.03,0.08,0.22])*wrap[:,None]
    elif kk==6: # woven elastic strap
        sp=blurenv(rr,0.8,6,7);F=fres(nd,0.03)
        wv=0.85+0.15*np.sin(p[m][:,1]*420)
        c=(A([0.045,0.045,0.05])*(0.25+0.8*wrap[:,None])+sp*F[:,None]*0.35)*wv[:,None]
    else:       # cable, matte black
        sp=blurenv(rr,0.6,6,6);F=fres(nd,0.04)
        c=A([0.035,0.035,0.04])*(0.25+0.8*wrap[:,None])+sp*F[:,None]*0.6
    col[m]=c
col*=ao[:,None]
img=np.zeros((N,3));alpha=np.zeros(N)
img[idx]=col
# cables fade out long and eased as they fall away (no cut end)
al=(1-sm(-0.62,-1.12,p[:,1]))*(1-sm(-0.75,-1.35,p[:,2]))
alpha[idx]=al
img=img.reshape(H,W,3);alpha=alpha.reshape(H,W)
rgb=img/(1+0.35*img);rgb=np.clip(rgb,0,1)**(1/2.0)
out=np.dstack([rgb,np.clip(alpha,0,1)])
im=Image.fromarray((np.clip(out,0,1)*255).astype(np.uint8),'RGBA').resize((WO,int(WO*0.80)),Image.LANCZOS)
bb=im.getbbox();print('bbox',bb,im.size)
mg=int(WO*0.04);im=im.crop((max(0,bb[0]-mg),max(0,bb[1]-mg),min(im.size[0],bb[2]+mg),min(im.size[1],bb[3]+mg)));print('crop',im.size)
im.save(OUT)
