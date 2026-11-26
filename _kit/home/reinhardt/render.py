#!/usr/bin/env python3
"""Crafted hero render (HOME_BRIEF 2c): REINHARDT's core mechanism, an electronic Flachbaugruppe (PCB) resting on a
Nadelbett: a grid of gold spring-contact probes standing in an anodised Prüfadapter plate, as used on their ATS
In-Circuit/Funktionstest systems. Numpy SDF ray-marcher, supersampled, real alpha."""
import numpy as np, sys
from PIL import Image
W,H = int(sys.argv[1]) if len(sys.argv)>1 else 800, int(sys.argv[2]) if len(sys.argv)>2 else 640
SS = int(sys.argv[3]) if len(sys.argv)>3 else 1
OUT = sys.argv[4] if len(sys.argv)>4 else 'render.png'
YAW = float(sys.argv[5]) if len(sys.argv)>5 else -32
PITCH = float(sys.argv[6]) if len(sys.argv)>6 else 24
DIST = float(sys.argv[7]) if len(sys.argv)>7 else 330
W2,H2 = W*SS,H*SS
def nrm(v): return v/np.linalg.norm(v,axis=-1,keepdims=True)
def length(*a): return np.sqrt(sum(x*x for x in a))
def sbox(x,y,z,cx,cy,cz,hx,hy,hz,r=0.0):
    qx=np.abs(x-cx)-hx+r; qy=np.abs(y-cy)-hy+r; qz=np.abs(z-cz)-hz+r
    return length(np.maximum(qx,0),np.maximum(qy,0),np.maximum(qz,0))+np.minimum(np.maximum(qx,np.maximum(qy,qz)),0)-r
def scyl(x,y,z,cx,cz,r,y0,y1):
    d1=length(x-cx,z-cz)-r; d2=np.maximum(y0-y,y-y1)
    return np.minimum(np.maximum(d1,d2),0)+length(np.maximum(d1,0),np.maximum(d2,0))
def rep(v,p,lo,hi):
    """repeat with pitch p, cells clamped to [lo,hi] (cell indices)"""
    k=np.clip(np.round(v/p),lo,hi); return v-k*p
PB,PT=18.0,19.6          # PCB underside / top
# ---- parts: plate, pins (barrel + plunger), pcb, ics (black), legs (tin), cap, header ----
def parts(x,y,z):
    plate=sbox(x,y,z,0,-3.2,0,58,3.2,42,0.9)
    # guide pins at two corners
    gp=np.minimum(scyl(x,y,z,-52,36,1.6,0,15),scyl(x,y,z,52,-36,1.6,0,15))
    plate=np.minimum(plate,gp)
    # probe grid 13 x 9, pitch 7
    px=rep(x,7.0,-6,6); pz=rep(z,7.0,-4,4)
    barrel=scyl(px,y,pz,0,0,1.05,0,9.0)
    collar=scyl(px,y,pz,0,0,1.35,8.2,9.0)
    plunger=scyl(px,y,pz,0,0,0.46,9.0,PB-0.6)
    tip=length(px,y-(PB-0.6),pz)-0.5
    pin=np.minimum(np.minimum(barrel,collar),np.minimum(plunger,tip))
    pcb=sbox(x,y,z,0,(PB+PT)/2,0,49,(PT-PB)/2,34,0.25)
    # mounting holes
    for hx,hz in ((-44,29),(44,29),(-44,-29),(44,-29)):
        pcb=np.maximum(pcb,-scyl(x,y,z,hx,hz,1.7,PB-1,PT+1))
    # ICs
    qfp=sbox(x,y,z,-12,PT+0.85,-4,10,0.85,10,0.35)
    so1=sbox(x,y,z,24,PT+0.75,-15,7,0.75,3.6,0.3)
    so2=sbox(x,y,z,24,PT+0.75,4,7,0.75,3.6,0.3)
    hdr=sbox(x,y,z,-4,PT+3.4,26.5,20,3.4,3.2,0.35)
    ic=np.minimum(np.minimum(qfp,so1),np.minimum(so2,hdr))
    # QFP legs: 4 sides, pitch 1.6
    lx=rep(x+12,1.6,-5,5); lz=rep(z+4,1.6,-5,5)
    legA=sbox(lx,y,z,0,PT+0.28,-4,0.32,0.28,11.3)      # through-going strip along z, cut by middle
    legA=np.maximum(legA,-sbox(x,y,z,-12,PT+0.3,-4,11,1,9.9))
    legB=sbox(x,y,lz,-12,PT+0.28,0,11.3,0.28,0.32)
    legB=np.maximum(legB,-sbox(x,y,z,-12,PT+0.3,-4,9.9,1,11))
    qleg=np.maximum(np.minimum(legA,legB),sbox(x,y,z,-12,PT+0.3,-4,11.3,1,11.3))
    # SOIC legs
    sx=rep(x-24,1.27,-5,5)
    sl=np.minimum(sbox(sx,y,z,0,PT+0.28,-15,0.28,0.28,4.6),sbox(sx,y,z,0,PT+0.28,4,0.28,0.28,4.6))
    sl=np.maximum(sl,-np.minimum(sbox(x,y,z,24,PT,-15,8,2,3.5),sbox(x,y,z,24,PT,4,8,2,3.5)))
    sl=np.maximum(sl,sbox(x,y,z,24,PT,-5.5,6.6,2,15))
    # header pins (gold, 2 x 10)
    hx_=rep(x+4,2.54,-7,7); hz_=z-26.5-2.54*np.clip(np.round((z-26.5)/2.54+0.5)-0.5,-0.5,0.5)
    hp=sbox(hx_,y,hz_,0,PT+7.6,0,0.32,1.2,0.32)
    hp=np.maximum(hp,sbox(x,y,z,-4,PT+7,26.5,19,3,3))
    # electrolytic capacitor + passives
    cap=scyl(x,y,z,-39,-22,5.2,PT,PT+11.0)
    capt=scyl(x,y,z,-39,-22,4.6,PT+10.9,PT+11.25)
    rx=rep(x-41,4.0,-1,1); rz=rep(z+8,4.0,-4,4)
    res=sbox(rx,y,rz,0,PT+0.35,0,1.0,0.35,0.55,0.08)
    res=np.maximum(res,sbox(x,y,z,41,PT,-8,6,2,18))
    return plate,pin,pcb,ic,np.minimum(np.minimum(qleg,sl),capt),cap,np.minimum(hp,np.full_like(x,1e9)),res
NM=8
def sdf(x,y,z):
    p=parts(x,y,z); d=p[0]
    for q in p[1:]: d=np.minimum(d,q)
    return d
def rot(ax,a):
    c,s=np.cos(a),np.sin(a)
    if ax=='x': return np.array([[1,0,0],[0,c,-s],[0,s,c]])
    if ax=='y': return np.array([[c,0,s],[0,1,0],[-s,0,c]])
    return np.array([[c,-s,0],[s,c,0],[0,0,1]])
yaw=np.radians(YAW); pitch=np.radians(PITCH)
cen=np.array([0.0,10.0,0.0])
cam=cen+DIST*np.array([np.sin(yaw)*np.cos(pitch),np.sin(pitch),np.cos(yaw)*np.cos(pitch)])
fov=np.radians(24)
fw=nrm(cen-cam); rt=nrm(np.cross(fw,[0,1,0])); up=np.cross(rt,fw)
px=(np.arange(W2)+.5)/W2*2-1; py=1-(np.arange(H2)+.5)/H2*2
PX,PY=np.meshgrid(px*np.tan(fov/2)*W2/H2,py*np.tan(fov/2))
D=nrm(fw[None,None]+PX[...,None]*rt+PY[...,None]*up).reshape(-1,3)
O=np.broadcast_to(cam,D.shape).copy()
def S(P): return sdf(P[:,0],P[:,1],P[:,2])
n=D.shape[0]; t=np.full(n,DIST-120.0); hit=np.zeros(n,bool); act=np.arange(n)
for it in range(320):
    if act.size==0: break
    P=O[act]+D[act]*t[act,None]; d=S(P)
    h=d<0.0025*t[act]/60
    hit[act[h]]=True
    t[act]+=np.maximum(d*0.7,0.003)
    keep=(~h)&(t[act]<DIST+130)
    act=act[keep]
print('march done',hit.sum(),file=sys.stderr)
idx=np.where(hit)[0]; P=O[idx]+D[idx]*t[idx,None]
e=0.01
def grad(P):
    g=np.zeros_like(P)
    for k in range(3):
        dv=np.zeros(3); dv[k]=e
        g[:,k]=S(P+dv)-S(P-dv)
    return nrm(g)
N=grad(P)
pp=parts(P[:,0],P[:,1],P[:,2]); mat=np.argmin(np.stack(pp),0)
ao=np.ones(len(idx))
for k,hh in enumerate((0.3,0.8,1.6,3.0,5.0)):
    ao-=(hh-S(P+N*hh))*(0.5**k)*0.2
ao=np.clip(ao,0.2,1)
# soft shadow toward key light
keyd=nrm(np.array([0.45,0.85,0.35]))
sh=np.ones(len(idx)); ts=np.full(len(idx),0.15)
for it in range(70):
    Q=P+N*0.05+keyd*ts[:,None]; d=S(Q)
    sh=np.minimum(sh,np.clip(10*d/ts,0,1)); ts+=np.clip(d,0.08,3.0)
sh=np.clip(sh,0,1)**1.3*0.85+0.15
V=-D[idx]; Rf=nrm(2*np.sum(N*V,1,keepdims=True)*N-V)
def env(r,soft):
    x,y,z=r[:,0],r[:,1],r[:,2]
    s=lambda v,a,b: np.clip((v-a)/(b-a),0,1)
    top=s(y,0.5-soft,0.85)*1.5
    strip=s(x,0.5-soft,0.9)*s(0.65+soft,np.abs(y),0.15)*1.6
    rim=s(-x,0.45-soft,0.9)*s(-z,-0.3,0.6)*0.9
    base=0.04+0.05*s(y,-0.4,0.6)
    return (base+top+strip)[:,None]*np.array([1.0,0.98,0.94])+rim[:,None]*np.array([0.78,0.86,0.5])
fres=lambda f0: f0+(1-f0)*(1-np.clip(np.sum(N*V,1),0,1))**5
fill=nrm(np.array([-0.7,0.3,0.6]))
lam=np.clip(N@keyd,0,1)*sh; lamf=np.clip(N@fill,0,1)
col=np.zeros((len(idx),3)); X,Y,Z=P[:,0],P[:,1],P[:,2]
def metal(m,tint,soft,k=1.0):
    col[m]=env(Rf[m],soft)*tint*(0.5+0.5*fres(0.6)[m,None])*k*(0.45+0.55*sh[m,None])+tint*lam[m,None]*0.18
# 0 plate: dark anodised aluminium, fine brushed sheen
m=mat==0
base=np.array([0.018,0.019,0.017])
col[m]=base*(0.4+1.2*lam[m,None]+0.4*lamf[m,None])+env(Rf[m],0.18)*np.array([0.5,0.5,0.48])*(0.3+0.7*fres(0.3)[m,None])*sh[m,None]
ptop=m&(N[:,1]>0.7)&(np.abs(X)<56)
ring=np.abs(length(X-7*np.clip(np.round(X/7),-6,6),Z-7*np.clip(np.round(Z/7),-4,4))-1.6)<0.25
col[ptop&ring]*=0.35
# 1 pins: barrel nickel, plunger gold
m=mat==1
gold=np.array([0.95,0.72,0.34]); nick=np.array([0.74,0.74,0.72])
isg=(Y>9.0)
metal(m&isg,gold,0.18); metal(m&~isg,nick,0.15,0.9)
# 2 pcb: solder mask green with copper traces under the mask, gold pads, white silkscreen frame
m=mat==2
top=m&(N[:,1]>0.7)
g0=np.array([0.035,0.16,0.07])
# traces: procedural lines (horizontal / vertical / diagonal) under the mask
tr=np.zeros(len(idx))
for c0 in (-30,-24,-19,6,11,16,31,37):
    tr=np.maximum(tr,np.clip(1-np.abs(Z-c0)/0.35,0,1)*(X>-46)*(X<46)*(np.abs(np.sin(X*0.13+c0))>0.25))
for c0 in (-40,-33,-27,2,9,34,44):
    tr=np.maximum(tr,np.clip(1-np.abs(X-c0)/0.35,0,1)*(Z>-31)*(Z<31)*(np.abs(np.cos(Z*0.11+c0))>0.3))
for c0 in (-20,10,30):
    tr=np.maximum(tr,np.clip(1-np.abs((X-Z)-c0)/0.5,0,1)*(np.abs(X+Z-c0*0.3)<26))
pad=np.zeros(len(idx))
pxm=X-7*np.round(X/7); pzm=Z-7*np.round(Z/7)
pad=np.maximum(pad,(length(pxm-3.5*0,pzm)<0.8)*(np.abs(X)<46)*(np.abs(Z)<31)*1.0)
silk=((np.abs(np.abs(X)-46.2)<0.22)&(np.abs(Z)<31.2))|((np.abs(np.abs(Z)-31.2)<0.22)&(np.abs(X)<46.2))
gm=g0*(1+1.1*tr[:,None])
hv=nrm(keyd[None]+V); spec=np.clip(np.sum(N*hv,1),0,1)**60*sh
col[m]=gm[m]*(0.25+1.3*lam[m,None]+0.35*lamf[m,None])+env(Rf[m],0.22)*fres(0.05)[m,None]*0.9*sh[m,None]+spec[m,None]*0.35
pm=top&(pad>0)
metal(pm,gold,0.25,0.9)
sm=top&silk
col[sm]=np.array([0.82,0.84,0.8])*(0.25+0.85*lam[sm,None]+0.25*lamf[sm,None])
side=m&(N[:,1]<0.7)
col[side]=np.array([0.32,0.3,0.18])*(0.2+0.9*lam[side,None]+0.3*lamf[side,None])
# 3 ics: black epoxy, header black PBT
m=mat==3
col[m]=np.array([0.016,0.016,0.018])*(0.3+1.1*lam[m,None]+0.4*lamf[m,None])+env(Rf[m],0.35)*fres(0.045)[m,None]*0.7*sh[m,None]
# pin-1 dot on QFP
d1=m&(length(X+19,Z+11)<0.9)&(N[:,1]>0.7)
col[d1]*=3.5
# 4 legs: tin
m=mat==4; metal(m,np.array([0.8,0.8,0.78]),0.15)
# 5 capacitor: dark olive sleeve with a light stripe
m=mat==5
sl=np.array([0.05,0.06,0.03])
ang=np.arctan2(Z+22,X+39)
stripe=(np.abs(ang-2.3)<0.35)&(N[:,1]<0.5)
col[m]=sl*(0.3+1.3*lam[m,None]+0.4*lamf[m,None])+env(Rf[m],0.3)*fres(0.05)[m,None]*0.8*sh[m,None]
col[m&stripe]=np.array([0.55,0.56,0.5])*(0.25+0.9*lam[m&stripe,None])
# 6 header pins gold
m=mat==6; metal(m,gold,0.18)
# 7 resistors: ceramic dark with tin ends
m=mat==7
rx=X-41-4*np.clip(np.round((X-41)/4),-1,1)
endc=np.abs(rx)>0.7
col[m]=np.array([0.03,0.03,0.03])*(0.4+1.2*lam[m,None])
metal(m&endc,np.array([0.8,0.8,0.78]),0.2)
col*=ao[:,None]
col=col/(1+col*0.55)*1.25
col=np.clip(col,0,1)**(1/2.2)
img=np.zeros((n,4)); img[idx,:3]=col; img[idx,3]=1
img=img.reshape(H2,W2,4)
if SS>1:
    a=img[...,3:4]; pre=img[...,:3]*a
    pre=pre.reshape(H,SS,W,SS,3).mean((1,3)); a=a.reshape(H,SS,W,SS,1).mean((1,3))
    img=np.concatenate([pre/np.maximum(a,1e-6),a],-1)
Image.fromarray((np.clip(img,0,1)*255+.5).astype(np.uint8),'RGBA').save(OUT)
print('saved',OUT,file=sys.stderr)
