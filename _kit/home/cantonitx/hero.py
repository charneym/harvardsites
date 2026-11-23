#!/usr/bin/env python3
"""Cantoni Therapeutics hero: their own mark, the red ball-and-stick molecule of the logo (three red atoms on grey bonds
meeting at a centre), rendered as one real object: glossy red lacquer spheres and brushed-steel bonds, lit by a large
softbox from the upper left and a thin rim from behind right, turned in 3D so one atom comes towards the viewer.
A small analytic ray tracer: primary rays, one reflection bounce against the other parts, a key-light shadow ray and
analytic sphere occlusion. Rendered on pure black; field.js draws it additively onto the ink, so it has no edge (DP/DJ).
Output: hero.webp (and hero.png for checks)."""
import numpy as np
from PIL import Image
S=1600; SS=[(.25,.25),(.75,.25),(.25,.75),(.75,.75)]
def nrm(v): return v/np.linalg.norm(v,axis=-1,keepdims=True)
def rot(ax,a):
    c,s=np.cos(a),np.sin(a)
    if ax=='x': return np.array([[1,0,0],[0,c,-s],[0,s,c]])
    if ax=='y': return np.array([[c,0,s],[0,1,0],[-s,0,c]])
    return np.array([[c,-s,0],[s,c,0],[0,0,1]])
# the logo's geometry: top atom straight up, the two lower atoms ~28 degrees below the horizontal
L=1.0; RA=.43; RB=.115
dirs=[(0,1,0),(np.cos(np.radians(-28)),np.sin(np.radians(-28)),0),(-np.cos(np.radians(-28)),np.sin(np.radians(-28)),0)]
R=rot('x',np.radians(-14))@rot('y',np.radians(38))@rot('z',np.radians(4))
C0=np.array([0,.05,0])
atoms=[C0+R@(np.array(d)*L) for d in dirs]
centre=C0
cam=np.array([0,0,7.4]); fov=np.radians(28)
KEY=nrm(np.array([-.55,.62,.56])); RIM=nrm(np.array([.75,.25,-.62])); FILL=nrm(np.array([.3,-.5,.8]))
RED=np.array([.78,.018,.012]); STEEL=np.array([.80,.80,.83])
def env(d):
    """dark studio: a large soft key box upper left, a thin rim strip right/back, a faint warm floor bounce"""
    k=np.clip((d@KEY-.80)/.17,0,1); k=k*k*(3-2*k); k=k**1.6
    r=np.clip((d@RIM-.93)/.05,0,1); r=r*r*(3-2*r)
    f=np.clip(-d[...,1],0,1)**2*.025
    base=.018+.09*np.clip(d[...,1]+.2,0,1)**2
    e=(5.0*k+3.2*r+base+f)[...,None]*np.ones(3)
    return e
def hit_sphere(o,d,c,r):
    oc=o-c; b=(oc*d).sum(-1); cc=(oc*oc).sum(-1)-r*r; h=b*b-cc
    t=-b-np.sqrt(np.maximum(h,0)); t=np.where((h>0)&(t>1e-4),t,np.inf); return t
def hit_cyl(o,d,a,b,r):
    ba=b-a; oc=o-a; baba=ba@ba; bard=d@ba; baoc=oc@ba
    k2=baba-bard*bard; k1=baba*(oc*d).sum(-1)-baoc*bard; k0=baba*(oc*oc).sum(-1)-baoc*baoc-r*r*baba
    h=k1*k1-k2*k0; t=(-k1-np.sqrt(np.maximum(h,0)))/np.where(np.abs(k2)<1e-9,1e-9,k2)
    y=baoc+t*bard; ok=(h>0)&(t>1e-4)&(y>0)&(y<baba)
    return np.where(ok,t,np.inf)
OBJ=[('s',a,RA,0) for a in atoms]+[('c',centre,a,RB,1) for a in atoms]+[('s',centre,RB*1.0,1)]
def trace(o,d):
    T=np.full(d.shape[:-1],np.inf); I=np.full(d.shape[:-1],-1)
    for i,ob in enumerate(OBJ):
        t=hit_sphere(o,d,ob[1],ob[2]) if ob[0]=='s' else hit_cyl(o,d,ob[1],ob[2],ob[3])
        m=t<T; T=np.where(m,t,T); I=np.where(m,i,I)
    return T,I
def normal(p,I):
    n=np.zeros_like(p)
    for i,ob in enumerate(OBJ):
        m=I==i
        if not m.any(): continue
        if ob[0]=='s': n[m]=p[m]-ob[1]
        else:
            a,b=ob[1],ob[2]; ba=b-a; q=p[m]-a; y=(q@ba)/(ba@ba); n[m]=q-y[:,None]*ba
    return nrm(n)
def occl(p,n,I):
    """analytic sphere occlusion from the atoms (and a softer term from the bonds' centre)"""
    o=np.ones(p.shape[:-1])
    for j,a in enumerate(atoms):
        v=a-p; dd=np.linalg.norm(v,axis=-1); cs=np.clip((v*n).sum(-1)/dd,0,1)
        o*=1-np.where(I==j,0,(RA/dd)**2*cs*.9)
    return np.clip(o,0,1)
def shade(p,n,v,I,bounce=True):
    metal=np.isin(I,[3,4,5,6])
    ao=occl(p,n,I)
    _,sI=trace(p+n*1e-3,np.broadcast_to(KEY,p.shape).copy()); sh=np.where(sI>=0,.18,1.0)
    nk=np.clip((n*KEY).sum(-1),0,1); nf=np.clip((n*FILL).sum(-1),0,1)*.2; nr=np.clip((n*RIM).sum(-1),0,1)
    rd=nrm(v-2*(v*n).sum(-1,keepdims=True)*n)
    cosv=np.clip(-(v*n).sum(-1),0,1)
    if bounce:
        tr,ri=trace(p+n*1e-3,rd); hit=ri>=0
        refl=env(rd)
        if hit.any():
            q=p[hit]+rd[hit]*tr[hit][:,None]; qn=normal(q,ri[hit])
            refl[hit]=shade(q,qn,rd[hit],ri[hit],bounce=False)
    else: refl=env(rd)
    # red lacquer: diffuse + clear coat; steel: tinted mirror, slightly rough (soft env), a little diffuse
    hv=nrm(KEY-v); sp=np.clip((n*hv).sum(-1),0,1)
    F=.045+(1-.045)*(1-cosv)**5
    diff=(nk*sh*1.25+nf+.03)[...,None]
    red=(sp**160*1.6*sh)[...,None]+RED*diff*ao[...,None]+F[...,None]*refl*np.where(sh<1,.6,1)[...,None]+RED*(nr**3*.55)[...,None]
    Fm=STEEL+(1-STEEL)*((1-cosv)**5)[...,None]
    steel=Fm*refl*.55*ao[...,None]+STEEL*(nk*sh*.62+nf*1.6+.05+nr*.25)[...,None]*ao[...,None]
    return np.where(metal[...,None],steel,red)
acc=np.zeros((S,S,3)); cov=np.zeros((S,S))
f=np.tan(fov/2)
for jx,jy in SS:
    ys,xs=np.mgrid[0:S,0:S].astype(float)
    u=((xs+jx)/S*2-1)*f; w=(1-(ys+jy)/S*2)*f
    d=nrm(np.stack([u,w,-np.ones_like(u)],-1)); o=np.broadcast_to(cam,d.shape)
    T,I=trace(o,d); m=I>=0
    col=np.zeros((S,S,3))
    p=o[m]+d[m]*T[m][:,None]; n=normal(p,I[m])
    col[m]=shade(p,n,d[m],I[m])
    acc+=col; cov+=m
acc/=len(SS); cov/=len(SS)
# filmic tone map, a touch of bloom on the highlights
def tm(x): x=np.maximum(x,0); return (x*(2.51*x+.03))/(x*(2.43*x+.59)+.14)
img=tm(acc*1.05)
hi=np.clip(acc.max(-1)-1.2,0,None)
def blur(a,s):
    F=np.fft.rfft2(a); ky=np.fft.fftfreq(a.shape[0])[:,None]; kx=np.fft.rfftfreq(a.shape[1])[None,:]
    return np.fft.irfft2(F*np.exp(-2*(np.pi*s)**2*(kx*kx+ky*ky)),a.shape)
bl=blur(hi,10)*.10
img=np.clip(img+bl[...,None]*np.array([1,.55,.5]),0,1)
img=img**(1/1.0)
# crop to the object with a dark margin
ys,xs=np.where(cov>0); pad=90
y0,y1,x0,x1=max(ys.min()-pad,0),min(ys.max()+pad,S),max(xs.min()-pad,0),min(xs.max()+pad,S)
out=(img[y0:y1,x0:x1]*255+.5).astype(np.uint8)
im=Image.fromarray(out); im.save('hero.png'); im.save('hero.webp',quality=90,method=6)
print(im.size)
