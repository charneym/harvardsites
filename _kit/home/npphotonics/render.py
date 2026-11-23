#!/usr/bin/env python3
"""Offline render of the hero: a coil of NP Photonics' glass fibre, wound as a loose bundle ring, one turn leaving the
coil and ending in a cleaved tip that emits the laser (a small four-point star, the logo's yellow). Additive light on
black, converted to real alpha (premultiplied -> straight), so the page ink shows through with no box edge."""
import numpy as np, math, random
from PIL import Image, ImageDraw, ImageFilter
random.seed(7)
W,H,S=1400,1000,3
w,h=W*S,H*S
def layer(): return Image.new('L',(w,h),0)
def addc(acc,L,col,k=1.0):
    a=np.asarray(L,dtype=np.float32)/255.0
    for i in range(3): acc[...,i]+=a*col[i]*k
acc=np.zeros((h,w,3),np.float32)
cx,cy=W*.45,H*.55; R=W*.29; tilt=.42; rot=math.radians(-12)
N=30
def pt(t,i,ex=0):
    rr=R*(1+.006*math.sin(i*2.3))+(i-N/2)*1.1+random.uniform(-.6,.6)
    x=rr*math.cos(t); y=rr*tilt*math.sin(t)+(i-N/2)*1.25
    xr=x*math.cos(rot)-y*math.sin(rot); yr=x*math.sin(rot)+y*math.cos(rot)
    return (cx+xr)*S,(cy+yr)*S
def bright(t,i):
    # light builds around the coil toward the exit (t ~ 0, right side), brighter on the front
    u=((t-0.2)%(2*math.pi))/(2*math.pi)
    return .1+.9*u**1.8
def segs(front):
    out=[]
    for i in range(N):
        ph=random.uniform(0,.4)
        ts=np.linspace(ph,ph+2*math.pi,520)
        for a,b in zip(ts[:-1],ts[1:]):
            m=(a+b)/2
            if m<T0+2*math.pi-0.02 or i<N-1:
             pass
            if (math.sin(m)>0)==front: out.append((pt(a,i),pt(b,i),bright(m,i),i))
    return out
# the exit fibre: leaves the front of the coil tangentially at right and runs up-right to the cleaved tip
T0=0.16
x0,y0=pt(T0,N-1); xa,ya=pt(T0-0.02,N-1); tx_,ty_=(xa-x0),(ya-y0); tn=math.hypot(tx_,ty_); tx_/=tn; ty_/=tn
tip=(W*.82*S,H*.36*S)
c1=(x0+tx_*R*.3*S,y0+ty_*R*.3*S); c2=(tip[0]-R*.2*S,tip[1]+R*.22*S)
def bez(t):
    return tuple((1-t)**3*p0+3*(1-t)**2*t*p1+3*(1-t)*t*t*p2+t**3*p3 for p0,p1,p2,p3 in zip((x0,y0),c1,c2,tip))
exitp=[bez(t) for t in np.linspace(0,1,300)]
def stroke(seglist,width,colfun,blur=0,k=1.0,dy=0):
    for chan in range(3):
        pass
    L={}
    img=Image.new('RGB',(w,h),(0,0,0));d=ImageDraw.Draw(img)
    for (p,q,b,i) in seglist:
        c=colfun(b)
        d.line([(p[0],p[1]+dy),(q[0],q[1]+dy)],fill=tuple(int(max(0,min(255,v*255))) for v in c),width=width)
    if blur: img=img.filter(ImageFilter.GaussianBlur(blur))
    return np.asarray(img,dtype=np.float32)/255.0*k
back=segs(False); front=segs(True)
ex=[(exitp[j],exitp[j+1],1.0,N) for j in range(len(exitp)-1)]
navy=np.array([.16,.27,.70]); cyan=np.array([.36,.80,1.0]); white=np.array([.92,.98,1.0])
def body(b): return navy*(.25+.75*b)+cyan*(.45*b**2)
def core(b): return (cyan*(1-b)+white*b)*(.15+.85*b**1.4)
for seg,dim in ((back,.42),(front,1.0)):
    acc+=stroke(seg,int(14*S/3*3),lambda b:cyan*.5*b,blur=18*S/3*2,k=.45*dim)
    acc+=stroke(seg,int(2.4*S),body,k=.85*dim)
    acc+=stroke(seg,max(1,int(1.0*S)),core,k=.9*dim)
    acc+=stroke(seg,max(1,int(.6*S)),lambda b:white*.35*(.3+.7*b),k=dim,dy=-1.3*S)
    if seg is back:
        # the front turns occlude the back ones a little: darken the back where front fibres pass
        occ=stroke(front,int(4.4*S),lambda b:np.array([1,1,1.]),blur=1.5*S)
        acc*=(1-.75*np.clip(occ,0,1))
acc+=stroke(ex,int(16*S),lambda b:cyan*.55,blur=22*S,k=.5)
acc+=stroke(ex,int(3.0*S),lambda b:body(1.0),k=.9)
acc+=stroke(ex,max(1,int(1.1*S)),lambda b:white,k=.95)
# the laser leaving the cleaved tip: a soft beam along the fibre axis, a warm core and a calm four-point star (logo yellow)
tx,ty=tip; dx,dy=tip[0]-c2[0],tip[1]-c2[1]; n=math.hypot(dx,dy); dx/=n; dy/=n
yy,xx=np.mgrid[0:h,0:w].astype(np.float32)
rx=xx-tx; ry=yy-ty; along=rx*dx+ry*dy; perp=-rx*dy+ry*dx
beam=np.exp(-(perp/(5*S))**2)*np.exp(-np.clip(along,0,None)/(70*S))*(along>0)*np.clip(1-along/(200*S),0,1)
r=np.hypot(rx,ry)+1e-3
glow=np.exp(-(r/(26*S))**2)*1.0+np.exp(-(r/(70*S))**2)*.3
ang=np.arctan2(ry,rx)-math.atan2(dy,dx)
spk=np.zeros_like(r)
for k_,L_,wd in ((0,150,1.5),(math.pi/2,95,1.2),(math.pi,70,1.2),(3*math.pi/2,95,1.2)):
    pa=np.cos(ang-k_); s_=np.abs(np.sin(ang-k_))*r
    spk+=np.exp(-(s_/(wd*S))**2)*np.exp(-r/(L_*S*.42))*(pa>0)*np.clip(1-r/(L_*S*1.6),0,1)
yel=np.array([1.0,.90,.42]); wht=np.array([1,1,.96])
for i in range(3):
    acc[...,i]+=beam*(.55*cyan[i]+.45*wht[i])*.9+glow*(.6*yel[i]+.4*wht[i])*.95+spk*yel[i]*.9
core_=np.exp(-(r/(6*S))**2); 
for i in range(3): acc[...,i]+=core_*1.2
# tone map and convert to straight alpha
acc=1-np.exp(-acc*1.75)
a=np.clip(acc.max(axis=2),0,1)
rgb=np.where(a[...,None]>1e-4,acc/np.maximum(a[...,None],1e-4),0)
out=np.dstack([np.clip(rgb,0,1)*255,a*255]).astype(np.uint8)
im=Image.fromarray(out,'RGBA').resize((W,H),Image.LANCZOS)
bb=im.getbbox();print('bbox',bb)
im.save('hero.png');im.save('hero.webp',quality=90,method=6)
bg=Image.new('RGBA',(W,H),(11,18,42,255));bg.alpha_composite(im);bg.convert('RGB').save('dl/hero_prev.jpg',quality=88)
