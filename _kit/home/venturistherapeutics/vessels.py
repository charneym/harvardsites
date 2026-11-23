#!/usr/bin/env python3
"""Venturis hero: a crafted render of the subject of their science (HOME_BRIEF update 2c): a single arterial tree, the
vessels FGF-1 grows. One trunk branches (Murray's law radii) into a rounded crown; the finest tips carry new sprouts,
the angiogenesis Venturis' VT-141 is designed to drive. Glossy tubes from a height field (diffuse + specular + rim),
real alpha on a transparent ground, the trunk base fading out, so no edge exists anywhere (DP/DJ). Output: hero.webp"""
import numpy as np, math
from PIL import Image
S=2200; import sys
SEED=int(sys.argv[1]) if len(sys.argv)>1 else 7; rng=np.random.default_rng(SEED)
H=np.zeros((S,S),np.float32); A=np.zeros((S,S),np.float32); R=np.zeros((S,S),np.float32); SP=np.zeros((S,S),np.float32)
def capsule(x0,y0,r0,x1,y1,r1,sprout=0.0):
    k=int(max(r0,r1)+3); xa=int(min(x0,x1))-k; ya=int(min(y0,y1))-k; xb=int(max(x0,x1))+k+1; yb=int(max(y0,y1))+k+1
    xa=max(xa,0); ya=max(ya,0); xb=min(xb,S); yb=min(yb,S)
    if xb<=xa or yb<=ya: return
    yy,xx=np.mgrid[ya:yb,xa:xb].astype(np.float32)
    dx,dy=x1-x0,y1-y0; L2=dx*dx+dy*dy+1e-6
    t=np.clip(((xx-x0)*dx+(yy-y0)*dy)/L2,0,1)
    d=np.sqrt((xx-x0-t*dx)**2+(yy-y0-t*dy)**2); r=r0+(r1-r0)*t
    h=np.sqrt(np.clip(r*r-d*d,0,None)); a=np.clip(r-d+.6,0,1)
    sl=(slice(ya,yb),slice(xa,xb)); m=h>H[sl]
    H[sl]=np.where(m,h,H[sl]); R[sl]=np.where(m,r,R[sl]); SP[sl]=np.where(m,sprout,SP[sl]); A[sl]=np.maximum(A[sl],a)
segs=[]
def branch(x,y,ang,length,r,depth,rs=None):
    # a gently curving vessel: integrate a slowly turning heading
    n=max(8,int(length/4)); turn=rng.normal(0,.0035); pts=[]
    for i in range(n+1):
        t=i/n; rr=r*(1-.12*t)
        if rs: rr+=(rs*.94-r)*max(0,1-t/.35)**2
        pts.append((x,y,rr))
        ang+=turn+rng.normal(0,.004); ang=min(-.12,max(-math.pi+.12,ang))
        x+=math.cos(ang)*length/n; y+=math.sin(ang)*length/n
    segs.append((pts,0.0))
    re=r*.88
    if depth==0 or re<1.3:
        sprouts(x,y,ang,re); return
    # bifurcation: Murray's law r^3 = r1^3 + r2^3, asymmetric split
    f=rng.uniform(.42,.58); r1=re*(f**(1/3)); r2=re*((1-f)**(1/3))
    sp=rng.uniform(.36,.46) if depth>5 else rng.uniform(.30,.42)
    # pull the crown towards a rounded silhouette centred above the trunk
    cx,cy=1100,1040; dx,dy=x-cx,y-cy; dist=math.hypot(dx,dy)
    bias=0
    if dist>360 and y<cy+120:
        out=math.atan2(dy,dx); diff=(out-ang+math.pi)%(2*math.pi)-math.pi
        bias=-.45*diff*min(1,(dist-360)/200)
    L=length*rng.uniform(.72,.80)
    a1=min(-.12,max(-math.pi+.12,ang-sp*(1-f)*2+bias)); a2=min(-.12,max(-math.pi+.12,ang+sp*f*2+bias))
    branch(x,y,a1,L*(.9+.2*f),r1,depth-1,re)
    branch(x,y,a2,L*(.9+.2*(1-f)),r2,depth-1,re)
def sprouts(x,y,ang,r):
    # new capillary sprouts at the tips: thin, short, a little lighter (the new growth)
    for k in range(rng.integers(1,3)):
        a=ang+rng.normal(0,.7); L=rng.uniform(18,42); n=12; pts=[]; xx,yy=x,y; rr=max(.9,r*.8)
        for i in range(n+1):
            t=i/n; pts.append((xx,yy,rr*(1-.45*t))); a+=rng.normal(0,.08); xx+=math.cos(a)*L/n; yy+=math.sin(a)*L/n
        segs.append((pts,1.0))
branch(1100,1960,-math.pi/2,400,32,7)
for pts,sp in segs:
    for i in range(len(pts)-1):
        (x0,y0,r0),(x1,y1,r1)=pts[i],pts[i+1]; capsule(x0,y0,r0,x1,y1,r1,sp)
print('vessel px',int((A>0).sum()))
# normals from the height field (lightly smoothed so joints read as one continuous wall)
from PIL import ImageFilter
def gblur(a,sg):
    k=int(sg*3)+1;x=np.arange(-k,k+1);g=np.exp(-x*x/(2*sg*sg));g/=g.sum();o=np.zeros_like(a)
    for i,w in enumerate(g): o+=w*np.roll(a,i-k,0)
    a=o;o=np.zeros_like(a)
    for i,w in enumerate(g): o+=w*np.roll(a,i-k,1)
    return o
Hs=gblur(H,1.3)
H=np.where(A>0,np.maximum(H*.4+Hs*.6,0),H)
gy,gx=np.gradient(H)
n=np.stack([-gx,-gy,np.ones_like(H)],-1); n/=np.linalg.norm(n,axis=-1,keepdims=True)
L=np.array([-.45,-.55,.70]); L/=np.linalg.norm(L)
V=np.array([0,0,1.]); Hh=(L+V)/np.linalg.norm(L+V)
diff=np.clip((n*L).sum(-1),0,1); spec=np.clip((n*Hh).sum(-1),0,1)**48; spec2=np.clip((n*Hh).sum(-1),0,1)**10
rim=(1-np.clip(n[...,2],0,1))**2.2
# colour: deep arterial crimson; thin vessels a touch lighter and more translucent; sprouts lighter still
thin=np.clip(1-R/10,0,1)
base=np.stack([.50+.16*thin+.14*SP,.05+.05*thin+.07*SP,.08+.05*thin+.06*SP],-1)
col=base*(.22+.85*diff[...,None])+spec[...,None]*np.array([1,.86,.86])*.85+spec2[...,None]*np.array([.9,.35,.38])*.12
col+=rim[...,None]*np.array([.30,.32,.62])*.35   # a cool rim from the navy ink around it
col=np.clip(col,0,1)
# alpha: soft edge, the trunk base fades out over a long distance (never ends on a line)
yy=np.arange(S)[:,None]/S
fade=np.clip((1960/S-yy+.005)/(.27*1600/S),0,1); fade=fade*fade*(3-2*fade)
alpha=A*fade*(.94-.12*SP)
img=np.dstack([col,alpha[...,None]])
im=Image.fromarray((img*255).astype(np.uint8),'RGBA')
bb=im.getbbox(); print('bbox',bb)
im=im.crop(bb)
im.save('hero_%d.webp'%SEED,quality=92,method=6)
bg=Image.new('RGBA',im.size,(10,15,46,255)); bg.alpha_composite(im); bg.convert('RGB').resize((im.size[0]//3,im.size[1]//3)).save('/tmp/claude-0/-home-user-harvardsites/98404d66-2367-5873-8c12-11dbf2c0cc64/scratchpad/vt/hp_%d.jpg'%SEED,quality=85)
print(im.size)
