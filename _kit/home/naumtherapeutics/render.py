#!/usr/bin/env python3
"""Hero render (HOME_BRIEF option c): synapses on a dendrite, as a two-channel confocal fluorescence image.
A dendritic shaft with mushroom, thin and stubby spines (postsynaptic side, GFP green) and presynaptic puncta
(magenta) apposed to the spine heads, a second dendrite out of focus behind. This is the structure Naum
Therapeutics' NIA SBIR programme sets out to protect and regrow (NIH RePORTER 1R43AG099483-01A1).
Emitted light on pure black, feathered to zero on every edge, and drawn with additive ('lighter') blending, so the
image has no ground and no edge at all (DJ/DP)."""
import math, random, numpy as np
from PIL import Image, ImageDraw, ImageFilter
random.seed(11); np.random.seed(11)
W=H=1600; SS=2; S=W*SS
class Prim(list):
    """records ellipses; ellipse(box, fill) like ImageDraw"""
    def ellipse(self,b,fill=1.0): self.append((b,fill))
LEVELS=[(1.0,.34),(.82,.55),(.64,.74),(.46,.9),(.28,1.0)]
def rend(P):
    im=Image.new('F',(S,S),0);d=ImageDraw.Draw(im)
    for fr,fv in LEVELS:
        for (x0,y0,x1,y1),v in P:
            cx,cy=(x0+x1)/2,(y0+y1)/2;rx,ry=(x1-x0)/2*fr,(y1-y0)/2*fr
            if rx<.5: continue
            d.ellipse([cx-rx,cy-ry,cx+rx,cy+ry],fill=v*fv)
    return im
def new(): return Prim()
def arr(im): return im if isinstance(im,np.ndarray) else np.asarray(im,dtype=np.float32)
_fy=np.fft.fftfreq(S)[:,None];_fx=np.fft.rfftfreq(S)[None,:];_f2=(_fy**2+_fx**2).astype(np.float32)
def blur(im,r):
    """gaussian blur via FFT (sigma r output px)"""
    a=arr(im);sg=r*SS
    return np.fft.irfft2(np.fft.rfft2(a)*np.exp(-2*(math.pi**2)*(sg**2)*_f2),s=a.shape).astype(np.float32)

def curve(pts,n=900):
    """Catmull-Rom through pts -> dense polyline"""
    P=[pts[0]]+pts+[pts[-1]];out=[]
    for i in range(1,len(P)-2):
        p0,p1,p2,p3=[np.array(q,float) for q in P[i-1:i+3]]
        for t in np.linspace(0,1,n//(len(pts)-1),endpoint=False):
            out.append(.5*((2*p1)+(-p0+p2)*t+(2*p0-5*p1+4*p2-p3)*t*t+(-p0+3*p1-3*p2+p3)*t**3))
    out.append(np.array(pts[-1],float));return np.array(out)

def dendrite(dr,pts,w0,w1,val,wob=0.0):
    c=curve(pts,1800);L=len(c)
    seglen=np.r_[0,np.cumsum(np.linalg.norm(np.diff(c,axis=0),axis=1))]
    for i,p in enumerate(c):
        f=i/(L-1);w=(w0+(w1-w0)*f)*(1+wob*math.sin(seglen[i]/37.0)*.5+wob*math.sin(seglen[i]/13.0)*.25)
        v=val*(.62+.2*math.sin(seglen[i]/61.0+1.3)+.12*math.sin(seglen[i]/23.0)+.06*math.sin(seglen[i]/9.0))
        r=w*.5*SS;dr.ellipse([p[0]*SS-r,p[1]*SS-r,p[0]*SS+r,p[1]*SS+r],fill=v)
    return c,seglen

def spines(drG,drM,drC,c,seglen,wfun,density,rng,side_bias=0):
    """spines along the dendrite; returns nothing; draws green spines, magenta puncta, and a core layer"""
    total=seglen[-1];s=rng.uniform(8,20)
    while s<total-20:
        i=int(np.searchsorted(seglen,s));i=min(i,len(c)-2)
        p=c[i];t=c[i+1]-c[i];t/=np.linalg.norm(t)+1e-9;nrm=np.array([-t[1],t[0]])
        side=1 if rng.random()<.5+side_bias else -1
        ang=rng.normal(0,.55);d=nrm*side*math.cos(ang)+t*math.sin(ang);d/=np.linalg.norm(d)
        w=wfun(s/total);base=p+d*w*.42
        kind=rng.random()
        if kind<.55: neck=rng.uniform(10,24);head=rng.uniform(7.5,12.5);nw=rng.uniform(3.2,4.4)   # mushroom
        elif kind<.85: neck=rng.uniform(18,38);head=rng.uniform(4.5,7);nw=rng.uniform(2.4,3.2)  # thin
        else: neck=rng.uniform(4,9);head=rng.uniform(6.5,9);nw=rng.uniform(6,8)                 # stubby
        # neck: slightly curved
        bend=rng.normal(0,.25);steps=max(6,int(neck/2))
        q=base.copy();dd=d.copy()
        for k in range(steps):
            a=bend/steps;ca,sa=math.cos(a),math.sin(a);dd=np.array([dd[0]*ca-dd[1]*sa,dd[0]*sa+dd[1]*ca])
            q=q+dd*(neck/steps);r=nw*.5*SS
            drG.ellipse([q[0]*SS-r,q[1]*SS-r,q[0]*SS+r,q[1]*SS+r],fill=.42)
        hc=q+dd*head*.7;r=head*SS
        # head: an ellipse slightly wider than long
        drG.ellipse([hc[0]*SS-r,hc[1]*SS-r*.92,hc[0]*SS+r,hc[1]*SS+r*.92],fill=rng.uniform(.6,1.0))
        drC.ellipse([hc[0]*SS-r*.5,hc[1]*SS-r*.5,hc[0]*SS+r*.5,hc[1]*SS+r*.5],fill=rng.uniform(.4,1.0))
        # presynaptic punctum apposed to most mushroom/stubby heads, some thin
        if (kind<.55 and rng.random()<.9) or (kind>=.85 and rng.random()<.7) or rng.random()<.35:
            off=head*1.55+rng.uniform(2,5);jit=rng.normal(0,.35)
            ca,sa=math.cos(jit),math.sin(jit);od=np.array([dd[0]*ca-dd[1]*sa,dd[0]*sa+dd[1]*ca])
            pc=hc+od*off;pr=rng.uniform(6,11)*SS;e=rng.uniform(.75,1)
            drM.ellipse([pc[0]*SS-pr,pc[1]*SS-pr*e,pc[0]*SS+pr,pc[1]*SS+pr*e],fill=rng.uniform(.75,1.0))
        s+=rng.exponential(1/density)+4

rng=np.random.default_rng(5)
# --- main dendrite: enters lower left, sweeps up to upper right; a side branch leaves to the upper left
main=[(60,1430),(250,1300),(430,1130),(590,1040),(760,900),(930,800),(1080,650),(1250,560),(1400,400),(1560,300)]
branch=[(760,900),(720,790),(700,690),(630,570),(560,500),(440,430),(330,330),(220,280)]
G=new();M=new();C=new();drG,drM,drC=G,M,C
c1,l1=dendrite(drG,main,34,22,.95,wob=.16)
c2,l2=dendrite(drG,branch,20,12,.9,wob=.18)
spines(drG,drM,drC,c1,l1,lambda f:34+(22-34)*f,1/11,rng)
spines(drG,drM,drC,c2,l2,lambda f:20+(12-20)*f,1/13,rng)
# --- a second dendrite, deeper in the section (out of focus)
Gb=new();Mb=new();Cb=new();dGb,dMb,dCb=Gb,Mb,Cb
back=[(1560,1060),(1360,1090),(1150,1050),(980,1110),(800,1210),(640,1330),(470,1520)]
cb,lb=dendrite(dGb,back,22,15,.8,wob=.1)
spines(dGb,dMb,dCb,cb,lb,lambda f:22-7*f,1/14,rng)
# --- free presynaptic puncta through the neuropil, at several depths
Mf=[new(),new(),new()];dMf=Mf
for k in range(900):
    x,y=rng.uniform(0,W),rng.uniform(0,H);lay=rng.choice(3,p=[.25,.35,.4]);pr=rng.uniform(4,9)*SS
    dMf[lay].ellipse([x*SS-pr,y*SS-pr,x*SS+pr,y*SS+pr],fill=rng.uniform(.25,.7))

def tone(x,k): return 1-np.exp(-k*x)
G,M,C,Gb,Mb,Cb=[rend(p) for p in (G,M,C,Gb,Mb,Cb)];Mf=[rend(p) for p in Mf]
g_fg=arr(blur(G,1.25))*1.15+arr(blur(C,2.2))*.35
m_fg=arr(blur(M,2.0))
g_bk=arr(blur(Gb,7))*.55; m_bk=arr(blur(Mb,7))*.4
mf=arr(blur(Mf[0],1.6))*.55+arr(blur(Mf[1],4.5))*.4+arr(blur(Mf[2],9))*.3
g_bloom=arr(blur(G,14))*.35; m_bloom=arr(blur(M,12))*.3
g=g_fg+g_bk+g_bloom; m=m_fg+m_bk+mf+m_bloom
# photon-like texture inside the signal only (keeps black exactly black)
tex=blur(np.random.rand(S,S).astype(np.float32),.7);tex=(tex-tex.mean())/(tex.std()+1e-6)*.29+.5
g=g*(.82+.36*tex); m=m*(.82+.36*np.roll(tex,37,axis=0))
gt=tone(g,1.45); mt=tone(m,1.5)
# LUTs: green (GFP) and magenta; overlaps go toward white
def lut(t,lo,hi):
    t=t[...,None];lo=np.array(lo,float)/255;hi=np.array(hi,float)/255
    return np.where(t<.6,lo*(t/.6),lo+(hi-lo)*((t-.6)/.4))
rgb=lut(gt,(46,190,112),(214,255,226))+lut(mt,(196,52,160),(255,196,240))
# radial feather to zero (long ease)
yy,xx=np.mgrid[0:S,0:S]/S; r=np.sqrt((xx-.5)**2+(yy-.5)**2)/.5
fe=np.clip((1.0-r)/.62,0,1); fe=fe*fe*(3-2*fe)
rgb=rgb*fe[...,None]
rgb=np.clip(rgb,0,1)
rgbS=Image.fromarray((rgb*255).astype(np.uint8),'RGB').resize((W,H),Image.LANCZOS)
lin=np.asarray(rgbS).astype(np.float32)/255
# emitted light as premultiplied RGBA: alpha = peak channel, colour = light / alpha; alpha is stored losslessly, so
# every dark pixel carries exactly zero and nothing of the square can show, whatever the decoder does to colour
A=lin.max(2);A[A<3/255]=0
Cc=np.where(A[...,None]>0,lin/np.maximum(A[...,None],1e-6),0)
rgba=np.dstack([Cc,A])
img=Image.fromarray((np.clip(rgba,0,1)*255+.5).astype(np.uint8),'RGBA')
img.save('hero.webp',quality=92,method=6,alpha_quality=100)
img=rgbS
img.resize((W//2,H//2)).save('/tmp/claude-0/-home-user-harvardsites/faea7eba-0ef2-54d8-bb7d-90c42059580a/scratchpad/hero_prev.jpg',quality=90)
print('ok')
