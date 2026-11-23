#!/usr/bin/env python3
"""Tellus hero: a crafted render of the mechanism (HOME_BRIEF 2c): one oligodendrocyte, the myelinating cell whose
differentiation TT-20 promotes, wrapping myelin sheaths around axons, as a confocal fluorescence image shows it: axons in a
dim logo blue, myelin and the cell in the logo green, with depth of field (near axon sharp, far ones soft), membrane-bright
tubes and stain texture. Rendered on black; field.js draws it ADDITIVELY on the ink so no image edge exists (DP/DJ)."""
import numpy as np
from PIL import Image
W,H=1500,1400;rng=np.random.default_rng(5)
def fblur(a,s):
    if s<=0: return a
    f=np.fft.rfft2(a);ky=np.fft.fftfreq(a.shape[0])[:,None];kx=np.fft.rfftfreq(a.shape[1])[None,:]
    return np.fft.irfft2(f*np.exp(-2*(np.pi*s)**2*(kx*kx+ky*ky)),a.shape).astype(np.float32)
yy,xx=np.mgrid[0:H,0:W].astype(np.float32)
def noise(s,seed):
    r=np.random.default_rng(seed);n=fblur(r.normal(0,1,(H,W)).astype(np.float32),s);return (n-n.mean())/n.std()
TEX=noise(2.5,1)*.5+noise(7,2)*.5
def curve(P,n=500):
    t=np.linspace(0,1,n)[:,None];p0,p1,p2,p3=[np.array(p,float) for p in P]
    c=((1-t)**3*p0+3*(1-t)**2*t*p1+3*(1-t)*t*t*p2+t**3*p3)
    # small organic wobble perpendicular to the path
    d=np.gradient(c,axis=0);nrm=np.c_[-d[:,1],d[:,0]];nrm/=np.linalg.norm(nrm,axis=1,keepdims=True)+1e-9
    w=np.convolve(rng.normal(0,1,n+60),np.ones(60)/60,'same')[30:30+n]*14
    return c+nrm*w[:,None]
def dist(pts,r):
    D=np.full((H,W),1e9,np.float32);T=np.zeros((H,W),np.float32)
    L=np.r_[0,np.cumsum(np.hypot(*np.diff(pts,axis=0).T))];L/=L[-1]
    x0,y0=int(max(0,pts[:,0].min()-r-4)),int(max(0,pts[:,1].min()-r-4));x1,y1=int(min(W,pts[:,0].max()+r+4)),int(min(H,pts[:,1].max()+r+4))
    if x1<=x0 or y1<=y0: return D,T
    X=xx[y0:y1,x0:x1];Y=yy[y0:y1,x0:x1];d=D[y0:y1,x0:x1];tt=T[y0:y1,x0:x1]
    for i in range(len(pts)-1):
        a=pts[i];b=pts[i+1];ab=b-a;l2=ab@ab+1e-9
        if min(np.hypot(*(a-[X.mean(),Y.mean()])),1e9)>1e8: continue
        u=np.clip(((X-a[0])*ab[0]+(Y-a[1])*ab[1])/l2,0,1)
        dd=np.hypot(X-a[0]-u*ab[0],Y-a[1]-u*ab[1]);m=dd<d;d[m]=dd[m];tt[m]=(L[i]+(L[i+1]-L[i])*u)[m]
    return D,T
def tube(D,R,rim=.55):
    q=np.clip(D/np.maximum(R,1e-3),0,1.2);core=np.sqrt(np.clip(1-q*q,0,1))
    edge=np.exp(-((q-.8)/.16)**2)
    return (core*(1-rim)+edge*rim)*np.clip((1.05-q)/.08,0,1)
layers=[]  # (green, blue, blur)
# three axons running diagonally, at three depths
AXP=[([-80,1150],[420,980],[900,620],[1580,300]),
     ([-60,1390],[520,1180],[1000,900],[1600,620]),
     ([-120,880],[380,720],[820,420],[1520,80])]
BL=[0,4.5,7]  # focus: near axon sharp
soma=np.array([700.,930.])
targets=[]
for k,P in enumerate(AXP):
    ax=curve(P);D,T=dist(ax,40);g=np.zeros((H,W),np.float32);b=np.zeros((H,W),np.float32)
    b+=tube(D,6.5,.25)*.8
    edges=np.sort(np.r_[.10,.92,rng.uniform(.18,.85,3)]);a0=.10
    cuts=[.10,.27,.44,.60,.76,.92];cuts=[c+rng.uniform(-.02,.02) for c in cuts]
    for j in range(len(cuts)-1):
        a,bb=cuts[j]+.012,cuts[j+1]-.012
        m=(T>a)&(T<bb);s=np.clip(np.minimum(T-a,bb-T)/.03,0,1);taper=np.sin(s*np.pi/2)**.7
        R=(18+2.5*rng.uniform(-1,1))*taper*(1+.05*np.sin(T*90))
        g+=tube(D,R,.62)*m*(1+.25*TEX)
        targets.append((ax[int((a+bb)/2*499)],k))
    layers.append((g,b,BL[k],[1,.7,.5][k]))
# processes: thin, wavy, fading with distance from the soma, to the nearest sheaths of each axon
gp=np.zeros((H,W),np.float32)
pick=sorted([q for q in targets if q[1]<2],key=lambda q:np.hypot(*(q[0]-soma)))[:5]+sorted([q for q in targets if q[1]==2],key=lambda q:np.hypot(*(q[0]-soma)))[:1]
for p,k in pick:
    v=p-soma;n=np.array([-v[1],v[0]])/np.hypot(*v)
    s0=soma+v/np.hypot(*v)*44;v=p-s0
    c=curve((s0,s0+v*.33+n*rng.uniform(-70,70),p-v*.3+n*rng.uniform(-40,40),p),260)
    c[:20]=s0+(c[:20]-s0)*np.linspace(0,1,20)[:,None]
    D,T=dist(c,9);gp+=tube(D,2.6+2.2*(1-T)**2,.2)*(.55+.45*(1-T))
# soma: an irregular cell body, cytoplasm textured, nucleus dim and slightly offset
th=np.arctan2(yy-soma[1],xx-soma[0]);rr=np.hypot(xx-soma[0],yy-soma[1])
R0=50*(1+.12*np.cos(3*th+.5)+.07*np.cos(5*th+1.7)+.05*np.cos(2*th-.4))
body=np.clip((R0-rr)/4,0,1);memb=np.exp(-((rr-R0*.93)/5)**2)
nucr=np.hypot(xx-soma[0]-6,yy-soma[1]+4);nuc=np.clip((30-nucr)/6,0,1)
gs=(body*(.5+.18*TEX)+memb*.45)*(1-.55*nuc)
G=np.zeros((H,W),np.float32);B=np.zeros((H,W),np.float32)
for g,b,bl,w in layers: G+=fblur(g,bl)*w;B+=fblur(b,bl)*w
G+=fblur(gp,.8)+fblur(gs,1.0)
G=G+fblur(G,10)*.35;B=B+fblur(B,8)*.3
glow=fblur(G,36)*.22
green=np.array([.16,.80,.46]);hi=np.array([.78,1.,.86]);blue=np.array([.32,.50,1.])
img=np.clip(G,0,None)[...,None]*green*.9+np.clip(G-.9,0,None)[...,None]*hi*.35+glow[...,None]*green*.6+np.clip(B,0,None)[...,None]*blue*.85
img+=rng.normal(0,.006,(H,W,1)).astype(np.float32)*np.clip(img.sum(-1,keepdims=True)*3,0,1)
# long eased radial falloff centred on the cell, so axons dissolve into the ink far from any edge
vr=np.hypot((xx-soma[0]-60)/(W*.52),(yy-soma[1]+20)/(H*.50))
vg=np.clip(1-vr,0,1)**1.1*np.clip(vr*0+1,0,1)
vg=vg*vg*(3-2*vg)
img=np.clip(img*vg[...,None],0,1)
im=Image.fromarray((img**(1/1.1)*255).astype(np.uint8),'RGB')
bb=Image.fromarray((img.max(-1)>0.008).astype(np.uint8)*255).getbbox();print('bbox',bb)
im=im.crop(bb);im.save('hero.webp',quality=90);im.save('/tmp/claude-0/tl/hero.png');print(im.size)
