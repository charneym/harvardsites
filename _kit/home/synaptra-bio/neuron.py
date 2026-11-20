#!/usr/bin/env python3
"""Hero render (HOME_BRIEF option c): a real mouse hippocampal CA1 pyramidal neuron, reconstructed by Oguro-Ando et al.
(NeuroMorpho.Org NMO ICR3-4-3-9, CNG version), drawn as a confocal fluorescence image: dendrites lit in the logo's magenta
(#a12c94, brightened), spines along the finer dendrites (the synapses SynaptraBIO's science centres on), depth-of-field
by z, faint out-of-focus neighbouring neurons (ICR1-4-8-5, ICR2-4-2-5) behind. Ground is the site ink, feathered to the
ink on every edge (DJ)."""
import math, random, numpy as np
from PIL import Image, ImageDraw, ImageFilter
random.seed(7); np.random.seed(7)
W,H=1800,2000; SS=2
INK=np.array([18,16,20],float)
def load(n):
    P={}
    for l in open(n):
        if l.startswith('#') or not l.strip():continue
        a=l.split();P[int(a[0])]=(int(a[1]),float(a[2]),float(a[3]),float(a[4]),float(a[5]),int(a[6]))
    return P
def layers(P, cx, cy, sc, rot, zoff, weight, nbins=6, spines=True):
    """draw segments into depth bins; returns list of (blur_px, float image)"""
    zs=[v[3] for v in P.values()];z0,z1=min(zs),max(zs)
    imgs=[Image.new('F',(W*SS,H*SS),0) for _ in range(nbins+1)]
    drs=[ImageDraw.Draw(i) for i in imgs]
    ca,sa=math.cos(rot),math.sin(rot)
    def T(x,y):
        X=x*ca-y*sa;Y=x*sa+y*ca;return ((cx+X*sc)*SS,(cy-Y*sc)*SS)
    def bin_of(z):
        f=(z-z0)/max(1e-6,(z1-z0));return min(nbins-1,int(abs(f-.5)*2*nbins)) if zoff==0 else nbins-1
    soma=[v for v in P.values() if v[0]==1]
    for i,(t,x,y,z,r,p) in P.items():
        if p not in P: continue
        q=P[p];b=bin_of(z);d=drs[b]
        if t==1 or q[0]==1 and math.hypot(x-q[1],y-q[2])<4: continue
        # subdivide with small jitter so lines are not ruler-straight
        n=max(2,int(math.hypot(x-q[1],y-q[2])*sc/6))
        pts=[]
        for k in range(n+1):
            u=k/n;xx=q[1]+(x-q[1])*u;yy=q[2]+(y-q[2])*u
            if 0<k<n: xx+=random.gauss(0,.35);yy+=random.gauss(0,.35)
            pts.append(T(xx,yy))
        rr=max(.55,min(r,2.2))
        w=max(1,int(rr*sc*SS*1.15))
        val=weight*(0.75+0.25*min(1,rr/1.2))*BR.setdefault(p,random.uniform(.7,1.08))
        BR[i]=BR[p]*random.uniform(.985,1.015)
        d.line(pts,fill=val,width=w,joint='curve')
        if t==1: continue
        # spines: short protrusions with a bulbous head, on finer dendrites (t 3/4)
        if spines and t in(3,4) and rr<1.4:
            L=math.hypot(x-q[1],y-q[2]);ns=int(L*random.uniform(.55,.9))
            for s in range(ns):
                u=random.random();bx=q[1]+(x-q[1])*u;by=q[2]+(y-q[2])*u
                nx,ny=-(y-q[2])/max(L,1e-6),(x-q[1])/max(L,1e-6)
                side=random.choice((-1,1));ln=random.uniform(.9,2.0);ang=random.gauss(0,.45)
                ex=bx+side*(nx*math.cos(ang)-ny*math.sin(ang))*ln;ey=by+side*(ny*math.cos(ang)+nx*math.sin(ang))*ln
                A=T(bx,by);B=T(ex,ey)
                d.line([A,B],fill=weight*.45,width=max(1,int(.22*sc*SS)))
                hr=random.uniform(.18,.42)*sc*SS
                d.ellipse([B[0]-hr,B[1]-hr*random.uniform(.7,1),B[0]+hr,B[1]+hr],fill=weight*random.uniform(.55,.95))
    if soma:
        xs=np.mean([v[1] for v in soma]);ys=np.mean([v[2] for v in soma]);rs=max(v[4] for v in soma)
        X,Y=T(xs,ys);R=max(rs,6.5)*sc*SS*1.0
        # pyramidal soma: a rounded triangle tapering up into the apical dendrite, brighter at its centre
        for k in range(6):
            f=1-k/6.0
            poly=[(X-R*1.05*f,Y+R*.75*f),(X+R*1.05*f,Y+R*.75*f),(X+R*.18*f,Y-R*1.7*f),(X-R*.18*f,Y-R*1.7*f)]
            drs[nbins].polygon(poly,fill=weight*(.55+.12*k))
            drs[nbins].ellipse([X-R*.95*f,Y-R*.6*f,X+R*.95*f,Y+R*.85*f],fill=weight*(.55+.12*k))
    return imgs
BR={}
acc=np.zeros((H,W),float)
def gblur(a,sig):
    if sig<=0.3: return a
    fy=np.fft.fftfreq(a.shape[0]);fx=np.fft.rfftfreq(a.shape[1])
    g=np.exp(-2*(math.pi*sig)**2*(fy[:,None]**2+fx[None,:]**2))
    return np.fft.irfft2(np.fft.rfft2(a)*g,s=a.shape)
def centred(P):
    so=[v for v in P.values() if v[0]==1] or list(P.values())[:1]
    sx=np.mean([v[1] for v in so]);sy=np.mean([v[2] for v in so])
    return {k:(t,x-sx,y-sy,z,r,p) for k,(t,x,y,z,r,p) in P.items()}
def add(imgs, base_blur, step_blur, gain):
    global acc
    n=len(imgs)-1
    for b,im in enumerate(imgs):
        im=im.resize((W,H),Image.LANCZOS)
        bl=base_blur+step_blur*b if b<n else 3.0
        a=gblur(np.asarray(im,float),bl)
        acc+=a*gain*((1-.09*b) if b<n else 1.5)
# background neurons: out of focus, dim
P2=centred(load('ICR1-4-8-5.swc'));P3=centred(load('ICR2-4-2-5.swc'))
add(layers(P2,300,1300,3.0,.25,1,.32,nbins=1,spines=False),9,0,1)
add(layers(P3,1520,1720,3.3,-.6,1,.30,nbins=1,spines=False),11,0,1)
# hero neuron
P=load('ICR3-4-3-9.swc')
xs=[v[1] for v in P.values()];ys=[v[2] for v in P.values()]
soma=[v for v in P.values() if v[0]==1];sx=np.mean([v[1] for v in soma]);sy=np.mean([v[2] for v in soma])
sc=5.0
# place soma at (0.5W, 0.72H)
P_off={k:(t,x-sx,y-sy,z,r,p) for k,(t,x,y,z,r,p) in P.items()}
L=layers(P_off,W*.5,H*.70,sc,0.05,0,1.0)
add(L,.6,1.5,1.0)
# glow: wide bloom of the in-focus signal
glow=gblur(acc,14)
I=acc+glow*.55
I=1-np.exp(-I*1.35)          # soft tone curve
# colour: logo magenta lifted, whitening only at the brightest cores
MAG=np.array([212,78,196],float);HOT=np.array([255,214,246],float)
core=np.clip((I-.62)/.38,0,1)**1.6
col=MAG[None,None,:]*np.clip(I,0,1)[...,None]*(1-core[...,None])+HOT[None,None,:]*core[...,None]*np.clip(I,0,1)[...,None]
# camera noise, very fine
col+=np.random.normal(0,2.2,col.shape)*(.4+I[...,None])
img=INK[None,None,:]+col
# feather to ink on every edge
yy,xx=np.mgrid[0:H,0:W]
fx=np.minimum(xx,W-1-xx)/(W*.16);fy=np.minimum(yy,H-1-yy)/(H*.14)
f=np.clip(np.minimum(fx,fy),0,1);f=f*f*(3-2*f)
img=INK+(img-INK)*f[...,None]
Image.fromarray(np.clip(img,0,255).astype(np.uint8)).save('hero.webp',quality=92,method=6)
Image.fromarray(np.clip(img,0,255).astype(np.uint8)).resize((W//3,H//3)).save('/tmp/claude-0/-home-user-harvardsites/fb75869f-393b-50af-85f5-e7ad40de2a1f/scratchpad/hero_s.png')
Image.fromarray(np.clip(img,0,255).astype(np.uint8)).crop((700,1100,1300,1600)).save('/tmp/claude-0/-home-user-harvardsites/fb75869f-393b-50af-85f5-e7ad40de2a1f/scratchpad/hero_c.png')
print('ok')
