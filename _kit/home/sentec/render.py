#!/usr/bin/env python3
"""Hero render (HOME_BRIEF update 2c): an open SAW (surface acoustic wave) resonator, the passive sensing element of senTec's
wireless TRANSMITRON-T temperature sensors. A polished piezoelectric crystal die sits in an alumina ceramic package with a
gold-plated cavity floor; on the die, aluminium interdigital transducer fingers in the centre and reflector gratings either side;
gold bond wires run from the die's pads to the package. No text or branding on it. Numpy sphere tracer, real alpha.
Usage: render.py WIDTH out.png"""
import numpy as np, sys
from PIL import Image
WO=int(sys.argv[1]) if len(sys.argv)>1 else 1300; OUT=sys.argv[2] if len(sys.argv)>2 else 'hero.png'
SS=2; W=WO*SS; H=int(W*0.80)
A=np.array
def nrm(v):return v/(np.linalg.norm(v,axis=-1,keepdims=True)+1e-12)
def sm(a,b,x):x=np.clip((x-a)/(b-a),0,1);return x*x*(3-2*x)
def rbox(p,c,b,r):
    q=np.abs(p-c)-(b-r)
    return np.linalg.norm(np.maximum(q,0),axis=-1)+np.minimum(np.max(q,axis=-1),0)-r
# ---------- scene (y up). package 2.6 x 0.32 x 1.8, cavity 2.1 x 1.3, floor at y=0.10 ----------
PK=A([1.30,0.16,0.90]);FL=0.10
def package(p):
    outer=rbox(p,A([0,0.16,0]),PK,0.05)
    cav=rbox(p,A([0,0.16+FL+0.2,0]),A([1.05,0.36,0.65]),0.035)
    return np.maximum(outer,-cav)
DIE_C=A([0,FL+0.045,0]);DIE_B=A([0.86,0.045,0.36])
def die(p):return rbox(p,DIE_C,DIE_B,0.006)
DT=FL+0.09
# package bond pads on the cavity floor (gold), die bond pads are texture
PADS=[A([x,FL+0.004,z]) for x in (-0.22,0.22) for z in (-0.55,0.55)]
def pads(p):
    d=np.full(p.shape[:-1],1e9)
    for c in PADS:d=np.minimum(d,rbox(p,c,A([0.10,0.006,0.07]),0.004))
    return d
# bond wires: die pad (x=+-0.12, z=+-0.31) to package pad (x=+-0.18, z=+-0.53), arched
def bez(p0,p1,p2,p3,n):
    t=np.linspace(0,1,n)[:,None];return (1-t)**3*p0+3*(1-t)**2*t*p1+3*(1-t)*t*t*p2+t**3*p3
WIRES=[]
for sx in (-1,1):
    for sz in (-1,1):
        a=A([sx*0.10,DT,sz*0.315]);b=A([sx*0.22,FL+0.01,sz*0.55])
        WIRES.append(bez(a,a+A([0,0.11,sz*0.05]),b+A([-sx*0.03,0.09,-sz*0.02]),b,14))
WR=0.0065
def capsule(p,a,b,r):
    pa=p-a;ba=b-a;h=np.clip((pa@ba)/(ba@ba),0,1);return np.linalg.norm(pa-h[...,None]*ba,axis=-1)-r
def wires(p):
    d=np.full(p.shape[:-1],1e9)
    for F in WIRES:
        for i in range(len(F)-1):d=np.minimum(d,capsule(p,F[i],F[i+1],WR))
    return d
def scene(p):return np.minimum(np.minimum(package(p),die(p)),np.minimum(pads(p),wires(p)))
# ---------- camera ----------
yaw=np.radians(26);pit=np.radians(-44)
fwd=nrm(A([np.sin(yaw)*np.cos(pit),np.sin(pit),-np.cos(yaw)*np.cos(pit)]))
rt=nrm(np.cross(fwd,A([0,1,0])));up=np.cross(rt,fwd)
ro=A([0.0,0.12,0.0])-fwd*8.0
fov=0.235
ys,xs=np.mgrid[0:H,0:W]
u=(xs+.5-W/2)/(W/2)*fov;v=-(ys+.5-H/2)/(W/2)*fov
rd=nrm(fwd[None,None,:]+u[...,None]*rt+v[...,None]*up).reshape(-1,3)
N=len(rd);t=np.full(N,5.5);act=np.ones(N,bool);hit=np.zeros(N,bool)
for it in range(200):
    idx=np.nonzero(act)[0]
    if not len(idx):break
    p=ro+rd[idx]*t[idx,None];d=scene(p)
    t[idx]+=d*0.92
    h=d<2e-4;hit[idx[h]]=True;act[idx[h]]=False
    far=t[idx]>12;act[idx[far]]=False
print('hits',hit.sum())
P=ro+rd*t[:,None]
idx=np.nonzero(hit)[0];p=P[idx]
e=6e-4
def grad(f,p):
    return nrm(np.stack([f(p+A([e,0,0]))-f(p-A([e,0,0])),f(p+A([0,e,0]))-f(p-A([0,e,0])),f(p+A([0,0,e]))-f(p-A([0,0,e]))],-1))
n=grad(scene,p)
dk=package(p);dd=die(p);dp=pads(p);dw=wires(p)
m4=np.stack([dk,dd,dp,dw],1);kind=np.argmin(m4,1)
V=-rd[idx];ndv=np.clip((n*V).sum(-1),0,1)
rf=2*ndv[:,None]*n-V
def env(r):
    y=r[:,1];x=r[:,0];z=r[:,2]
    base=0.035+0.07*sm(-0.3,0.6,y)
    soft=sm(0.45,0.95,y)*sm(-1.0,-0.1,-x*0.8+0.25)*1.7
    strip=np.exp(-((x-0.62)/0.16)**2)*sm(-0.3,0.4,y)*1.1
    rim=np.exp(-((z+0.8)/0.28)**2)*sm(-0.5,0.2,y)*0.6
    front=sm(0.1,0.7,z)*sm(-0.6,0.1,y)*0.35
    return (np.stack([base,base*1.02,base*1.12],1)+soft[:,None]*A([1.0,1.0,1.0])+strip[:,None]*A([0.74,0.80,1.0])
            +rim[:,None]*A([0.70,0.76,1.0])+front[:,None]*A([0.85,0.88,1.0]))
ao=np.ones(len(p))
for k,s in enumerate([0.006,0.015,0.03,0.06,0.1]):
    ao-=(s-scene(p+n*s))*(1.5/(k+1))
ao=np.clip(ao,0.25,1)
# soft shadow towards the key light
L1=nrm(A([-0.45,0.85,0.35]))
sh=np.ones(len(p));ts=np.full(len(p),0.01)
for it in range(48):
    q=p+n*0.002+L1*ts[:,None];d=scene(q)
    sh=np.minimum(sh,np.clip(10*d/ts,0,1));ts+=np.clip(d,0.004,0.08)
sh=0.35+0.65*np.clip(sh,0,1)
col=np.zeros((len(p),3))
rng=np.random.default_rng(3)
def glossy(rr,spread,k=6):
    acc=np.zeros_like(rr)
    for j in range(k):acc+=env(nrm(rr+(rng.random(3)-.5)*spread))
    return acc/k
fres=lambda nn,vv,f0:f0+(1-f0)*(1-np.clip((nn*vv).sum(-1),0,1))**5
# --- alumina package: off-white satin ceramic, cool tinted, side castellations in gold ---
m=kind==0
if m.any():
    pp=p[m];nn=n[m];dif=np.clip(nn@L1,0,1);wrap=np.clip((nn@L1+0.5)/1.5,0,1)
    base=A([0.86,0.85,0.82])
    c=base*(0.05+0.40*wrap[:,None]*sh[m][:,None]+0.25*dif[:,None]*sh[m][:,None])+0.10*glossy(rf[m],0.5,4)*fres(nn,V[m],0.04)[:,None]
    # castellated terminals: gold stripes on the outer side walls
    side=(np.abs(nn[:,1])<0.5)&((np.abs(pp[:,0])>1.24)|(np.abs(pp[:,2])>0.84))
    along=np.where(np.abs(pp[:,0])>1.24,pp[:,2],pp[:,0])
    per=0.36;fr=np.abs(((along+per/2)/per)%1-0.5)*per
    gm=side&(fr<0.045)
    gold=(glossy(rf[m],0.35,4)*0.8+0.35*wrap[:,None]*sh[m][:,None]+0.08)*A([1.0,0.80,0.47])
    c[gm]=gold[gm]
    # gold-plated seal ring on the top of the walls
    rim=(nn[:,1]>0.9)&(pp[:,1]>0.30)
    c[rim]=(glossy(rf[m][rim],0.22,6)*0.42+0.03)*A([1.0,0.74,0.36])*(0.7+0.3*sh[m][rim][:,None])
    # gold-plated cavity floor
    fm=(nn[:,1]>0.9)&(pp[:,1]<FL+0.01)
    c[fm]=(glossy(rf[m][fm],0.6,6)*A([1.0,0.80,0.46])*0.55+A([0.10,0.075,0.035]))*sh[m][fm][:,None]
    col[m]=c
# --- the crystal die: polished piezo crystal, aluminium IDT fingers and reflector gratings on top ---
m=kind==1
if m.any():
    pp=p[m];nn=n[m];vv=V[m];rr=rf[m]
    crys=A([0.05,0.055,0.075])+glossy(rr,0.06,4)*fres(nn,vv,0.10)[:,None]*1.15
    c=crys*(0.6+0.4*sh[m][:,None])
    top=nn[:,1]>0.95
    x=pp[:,0];z=pp[:,2]
    idt=(np.abs(x)<0.36)&(np.abs(z)<0.30)
    refl=(np.abs(x)>0.42)&(np.abs(x)<0.80)&(np.abs(z)<0.30)
    per=0.018
    ph=((x+0.36)/per)%1
    fing=ph<0.5
    k=np.floor((x+0.36)/per).astype(int)
    alt=(k%2==0)
    # IDT: bus bars along the top and bottom of the aperture; fingers alternate which bar they come from
    bus=idt&(np.abs(z)>0.245)
    finger=idt&(np.abs(z)<=0.245)&fing&np.where(alt,z>-0.215,z<0.215)
    phr=((np.abs(x)-0.42)/per)%1
    grat=refl&((phr<0.5)|(np.abs(z)>0.255))
    # die bond pads, joined to the IDT bus bars
    pad=(np.abs(np.abs(z)-0.315)<0.035)&(np.abs(np.abs(x)-0.10)<0.05)
    pad|=(np.abs(z)>0.24)&(np.abs(z)<0.30)&(np.abs(x)<0.16)
    metal=top&(bus|finger|grat|pad)
    al=glossy(rr,0.10,5)*A([0.92,0.94,0.98])*fres(nn,vv,0.86)[:,None]*0.95+A([0.035,0.04,0.05])
    c[metal]=al[metal]*(0.75+0.25*sh[m][metal][:,None])
    # a faint interference sheen across the grating areas, as on a real die under light
    irid=top&(idt|refl)
    hue=np.stack([0.5+0.5*np.cos(6.28*(x*0.9+0.0)),0.5+0.5*np.cos(6.28*(x*0.9+0.33)),0.5+0.5*np.cos(6.28*(x*0.9+0.67))],1)
    c[irid]+=0.035*hue[irid]*np.clip(env(rr[irid]).mean(1),0,1.5)[:,None]
    col[m]=c
# --- gold pads and bond wires ---
for kk in (2,3):
    m=kind==kk
    if m.any():
        col[m]=glossy(rf[m],0.18 if kk==2 else 0.08,5)*A([1.0,0.80,0.45])*(0.85 if kk==2 else 1.0)+A([0.04,0.03,0.01])
col*=ao[:,None]
img=np.zeros((N,3));alpha=np.zeros(N)
img[idx]=col;alpha[idx]=1
img=img.reshape(H,W,3);alpha=alpha.reshape(H,W)
rgb=img/(1+0.28*img);rgb=np.clip(rgb,0,1)**(1/1.9)
out=np.dstack([rgb,alpha])
im=Image.fromarray((np.clip(out,0,1)*255).astype(np.uint8),'RGBA').resize((WO,int(WO*0.80)),Image.LANCZOS)
bb=im.getbbox();print('bbox',bb,im.size)
mg=int(WO*0.04);im=im.crop((max(0,bb[0]-mg),max(0,bb[1]-mg),min(im.size[0],bb[2]+mg),min(im.size[1],bb[3]+mg)));print('crop',im.size)
im.save(OUT)
