#!/usr/bin/env python3
"""Hero render: a DemeTECH round-bodied 3/8-circle stainless needle swaged to a blue DemeLENE (polypropylene, CU-phthalocyanine
blue) monofilament, which falls away in one loose loop. Splatted tube primitives with analytic tube normals, studio-env metal
shading (soft key upper left, teal rim right from the logo), glossy plastic thread. Transparent ground. Usage: render.py size out"""
import numpy as np, sys
from PIL import Image
S=int(sys.argv[1]) if len(sys.argv)>1 else 1400; OUT=sys.argv[2] if len(sys.argv)>2 else 'hero.png'
SS=2; W=S*SS
def rx(a):c,s=np.cos(a),np.sin(a);return np.array([[1,0,0],[0,c,-s],[0,s,c]])
def ry(a):c,s=np.cos(a),np.sin(a);return np.array([[c,0,s],[0,1,0],[-s,0,c]])
def rz(a):c,s=np.cos(a),np.sin(a);return np.array([[c,-s,0],[s,c,0],[0,0,1]])
M=rz(np.radians(-6))@rx(np.radians(22))@ry(np.radians(-16))
# needle: 3/8 circle (135 deg) of radius 1 in the xy plane, swage end at angle a0
R=1.0; a0=np.radians(157.5); a1=a0-np.radians(135)
tn=np.linspace(0,1,2600); ang=a0+(a1-a0)*tn
P_n=np.stack([R*np.cos(ang),R*np.sin(ang),0*ang],1)
T_n=np.stack([-np.sin(ang),np.cos(ang),0*ang],1)*np.sign(a1-a0)
rb=0.052
r_n=np.where(tn<0.07,rb*1.12,np.where(tn<0.62,rb,rb*np.clip((1-tn)/0.38,0,1)**0.85))
r_n=np.maximum(r_n,0.0012)
# thread: from the swage end (back along the -tangent), cubic Bezier chain making a loose loop, radius .021
st=P_n[0]; d0=-T_n[0]
def bez(p0,p1,p2,p3,n=900):
    t=np.linspace(0,1,n)[:,None];return (1-t)**3*p0+3*(1-t)**2*t*p1+3*(1-t)*t*t*p2+t**3*p3
c1=st+d0*0.10
A=np.array
segs=[bez(st,st+d0*0.55,A([-1.12,-0.95,0.10]),A([-0.45,-1.08,0.18])),
      bez(A([-0.45,-1.08,0.18]),A([0.25,-1.2,0.22]),A([0.42,-0.48,0.0]),A([-0.02,-0.52,-0.12])),
      bez(A([-0.02,-0.52,-0.12]),A([-0.46,-0.56,-0.2]),A([-0.42,-1.32,-0.05]),A([0.18,-1.42,0.10])),
      bez(A([0.18,-1.42,0.10]),A([0.72,-1.50,0.2]),A([1.15,-1.22,0.2]),A([1.62,-1.36,0.15]))]
P_t=np.concatenate(segs); 
# resample uniformly
d=np.r_[0,np.cumsum(np.linalg.norm(np.diff(P_t,axis=0),axis=1))]; L=d[-1]; u=np.linspace(0,L,int(L/0.0025))
P_t=np.stack([np.interp(u,d,P_t[:,k]) for k in range(3)],1)
T_t=np.gradient(P_t,axis=0);T_t/=np.linalg.norm(T_t,axis=1)[:,None]
r_t=np.full(len(P_t),0.018)
# insert thread 0.06 into swage bore so it reads as attached
P=np.concatenate([P_n,P_t]);T=np.concatenate([T_n,T_t]);RR=np.concatenate([r_n,r_t]);KIND=np.r_[np.zeros(len(P_n)),np.ones(len(P_t))]
P=P@M.T;T=T@M.T
lo=(P[:,:2]-RR[:,None]).min(0);hi=(P[:,:2]+RR[:,None]).max(0)
sc=W*0.86/(hi-lo).max();off=np.array([W,W])/2-(lo+hi)/2*sc
Z=np.full((W,W),-1e9);N=np.zeros((W,W,3));K=np.full((W,W),-1.0);TT=np.zeros((W,W))
for i in np.argsort(P[:,2]):
    cx,cy=P[i,:2]*sc+off;cy=W-cy;r=RR[i]*sc
    x0,x1=int(max(cx-r,0)),int(min(cx+r+2,W));y0,y1=int(max(cy-r,0)),int(min(cy+r+2,W))
    if x1<=x0 or y1<=y0: continue
    yy,xx=np.mgrid[y0:y1,x0:x1];dx=(xx+.5-cx)/r;dy=-(yy+.5-cy)/r;d2=dx*dx+dy*dy;m=d2<1
    dz=np.sqrt(np.clip(1-d2,0,1));zz=P[i,2]*sc+dz*r
    sub=Z[y0:y1,x0:x1];upd=m&(zz>sub)
    if not upd.any(): continue
    v=np.stack([dx,dy,dz],-1);t=T[i];v=v-(v@t)[...,None]*t;v/=np.linalg.norm(v,axis=-1,keepdims=True)+1e-9
    sub[upd]=zz[upd];N[y0:y1,x0:x1][upd]=v[upd];K[y0:y1,x0:x1][upd]=KIND[i];TT[y0:y1,x0:x1][upd]=i
hit=K>=0
n=N; V=np.array([0,0,1.0]); ndv=np.clip(n[...,2],0,1)
rf=2*ndv[...,None]*n-V
def lobe(dirv,sharp):
    dv=np.array(dirv,float);dv/=np.linalg.norm(dv);return np.clip((rf@dv),0,1)**sharp
def nl(dirv):
    dv=np.array(dirv,float);dv/=np.linalg.norm(dv);return np.clip(n@dv,0,1)
key=lobe([-0.55,0.62,0.56],18); key2=lobe([-0.55,0.62,0.56],140)
rim=lobe([0.85,-0.1,0.25],10); fill=lobe([0.1,-0.8,0.4],6)
hor=np.clip(rf[...,1]*0.5+0.5,0,1)
# steel: studio env, two soft strip lights (cool white) above, a dim one below, teal rim from the brand, near-black floor
g=lambda c,w:np.exp(-((rf[...,1]-c)/w)**2)
gx=lambda c,w:np.exp(-((rf[...,0]-c)/w)**2)
env=0.12+0.14*hor
env=env+1.05*g(0.62,0.16)*(0.55+0.45*gx(-0.3,0.9))+0.45*g(0.15,0.07)+0.34*g(-0.45,0.2)+0.25*g(-0.05,0.06)
steel=env[...,None]*np.array([0.93,0.97,1.0])[None,None]+key2[...,None]*0.9+rim[...,None]*np.array([0.30,0.80,0.86])*0.75
fr=(1-ndv)**4; steel=steel*(0.85+0.4*fr[...,None])
# thread: glossy blue polypropylene
blue=np.array([0.10,0.24,0.78])
dif=0.16+0.95*nl([-0.5,0.6,0.62])+0.35*nl([0.9,-0.1,0.3])
thr=blue[None,None]*dif[...,None]+key[...,None]*0.55+key2[...,None]*0.5+rim[...,None]*np.array([0.25,0.7,0.8])*0.35
col=np.where((K==1)[...,None],thr,steel)
# depth cue: thread parts far back a touch darker
zn=(Z-Z[hit].min())/(np.ptp(Z[hit])+1e-9); col=col*(0.72+0.28*np.clip(zn,0,1))[...,None]
col=np.clip(col,0,1)**(1/1.15)
img=np.zeros((W,W,4));img[...,:3]=col;img[...,3]=hit
im=Image.fromarray((img*255).astype(np.uint8),'RGBA').resize((S,S),Image.LANCZOS)
im.save(OUT);print('saved',OUT,im.size)
