#!/usr/bin/env python3
"""Crafted hero render (HOME_BRIEF 2c): a NIES-blue M12 cordset (knurled nickel coupling nut, blue 5-pole socket insert,
ribbed black overmould, blue PUR cable) as on NIES electronic's own SPS 2026 banner. Numpy SDF ray-marcher, real alpha."""
import numpy as np, sys
from PIL import Image
W,H = int(sys.argv[1]) if len(sys.argv)>1 else 800, int(sys.argv[2]) if len(sys.argv)>2 else 640
SS = int(sys.argv[3]) if len(sys.argv)>3 else 1
OUT = sys.argv[4] if len(sys.argv)>4 else 'render.png'
W2,H2 = W*SS,H*SS
def nrm(v): return v/np.linalg.norm(v,axis=-1,keepdims=True)
def length(*a): return np.sqrt(sum(x*x for x in a))
# ---- geometry (connector local frame: axis +z, face at z=0) ----
RC=27.0; ARC=np.radians(175); CZ=-58.0   # cable arc radius, sweep, start
def sd_cyl(x,y,z,r,z0,z1):
    d1=length(x,y)-r; d2=np.maximum(z0-z,z-z1)
    return np.minimum(np.maximum(d1,d2),0)+length(np.maximum(d1,0),np.maximum(d2,0))
def parts(x,y,z):
    rr=length(x,y); th=np.arctan2(y,x)
    # coupling nut: diamond knurl, chamfered ends, front bore
    N=40; k=N/8.0
    a=np.abs(np.sin((N*th+k*z)/2)); b=np.abs(np.sin((N*th-k*z)/2))
    g=np.clip(1-np.minimum(a,b)*5,0,1)
    band=np.clip((z+12.2)/0.6,0,1)*np.clip((-1.8-z)/0.6,0,1)
    nut=sd_cyl(x,y,z,8.0-0.22*g*band,-13.0,0.0)
    nut=np.maximum(nut,(rr-8.0)*0.7071+(z+0.0)*0.7071+0.55)      # front chamfer
    nut=np.maximum(nut,(rr-8.0)*0.7071-(z+13.0)*0.7071+0.55)     # rear chamfer
    nut=np.maximum(nut,-sd_cyl(x,y,z,6.3,-3.8,5))                # bore
    nut=np.maximum(nut,-sd_cyl(x,y,z,6.75,-0.9,5)+0.0)           # thread lead-in
    # blue insert with 5 sockets and key
    ins=sd_cyl(x,y,z,6.25,-9,-3.2)
    hole=1e9
    for ang in (45,135,225,315):
        cx=2.6*np.cos(np.radians(ang)); cy=2.6*np.sin(np.radians(ang))
        hole=np.minimum(hole,sd_cyl(x-cx,y-cy,z,0.62,-6,0))
    hole=np.minimum(hole,sd_cyl(x,y,z,0.62,-6,0))
    ins=np.maximum(ins,-hole)
    key=np.maximum(np.abs(x)-0.75,np.maximum(np.abs(y-5.9)-0.7,np.maximum(z+3.2,-z-6)))
    ins=np.maximum(ins,-key)
    # black overmould: ribbed grip, taper, strain relief with rings
    rib=0.32*np.clip(np.cos(14*th)*1.6,-1,1)
    body=sd_cyl(x,y,z,6.7+rib*np.clip((-15-z)/1.5,0,1)*np.clip((z+31)/1.5,0,1),-34.0,-13.4)*0.8
    t=np.clip((-34-z)/9.0,0,1); rc=6.7+(4.1-6.7)*(t*t*(3-2*t))
    taper=np.maximum(rr-rc,np.maximum(z+34.0-0.01,-43.0-z))*0.9
    taper=np.maximum(rr-rc,np.maximum(z-(-33.5),-43.0-z))*0.9
    ring=0.28*np.clip(np.abs(np.sin((z+43)*np.pi/2.2))*3-2,0,1)
    sr=sd_cyl(x,y,z,3.95-ring,-55.0,-42.5)
    sr=np.maximum(sr,(rr-3.95)*0.7071-(z+55.0)*0.7071+0.4)
    blk=np.minimum(np.minimum(body,taper),sr)
    # cable: straight then a long arc bending up and back (+y, -z)
    ct=sd_cyl(x,y,z,2.6,CZ-0.01,-54.0)
    qy=y-RC; qz=z-CZ        # arc centre (0,RC,CZ), in the y-z plane
    phi=np.arctan2(-qz,-qy) # 0 at start point (y=0,z=CZ), growing as it bends
    phi=np.where(phi<-0.6,phi+2*np.pi,phi)
    inside=(phi>=0)&(phi<=ARC)
    dt=length(length(qy,qz)-RC,x)-2.6
    e0=length(x,y,z-CZ)-2.6
    ey=RC-RC*np.cos(ARC); ez=CZ-RC*np.sin(ARC)
    e1=length(x,y-ey,z-ez)-2.6
    cab=np.where(inside,dt,np.minimum(e0,e1)); cab=np.minimum(cab,ct)
    return nut,ins,blk,cab,np.clip(phi/ARC,0,1)
def sdf(x,y,z):
    n,i,b,c,_=parts(x,y,z); return np.minimum(np.minimum(n,i),np.minimum(b,c))
# ---- camera ----
yaw=np.radians(float(sys.argv[5]) if len(sys.argv)>5 else -48); pitch=np.radians(float(sys.argv[6]) if len(sys.argv)>6 else 16)
# object rotation (local->world): tilt so the face looks down-left toward the reader
def rot(ax,a):
    c,s=np.cos(a),np.sin(a)
    if ax=='x': return np.array([[1,0,0],[0,c,-s],[0,s,c]])
    if ax=='y': return np.array([[c,0,s],[0,1,0],[-s,0,c]])
    return np.array([[c,-s,0],[s,c,0],[0,0,1]])
R=rot('y',yaw)@rot('x',pitch)@rot('z',np.radians(float(sys.argv[7]) if len(sys.argv)>7 else 0))
CL=np.array([0.0,12.0,-36.0])@R.T   # world position of the assembly's visual centre
DIST=float(sys.argv[8]) if len(sys.argv)>8 else 230
tgt=CL; cam=CL+np.array([0,0,DIST])
fov=np.radians(30)
fw=nrm(tgt-cam); rt=nrm(np.cross(fw,[0,1,0])); up=np.cross(rt,fw)
px=(np.arange(W2)+.5)/W2*2-1; py=1-(np.arange(H2)+.5)/H2*2
PX,PY=np.meshgrid(px*np.tan(fov/2)*W2/H2,py*np.tan(fov/2))
D=nrm(fw[None,None]+PX[...,None]*rt+PY[...,None]*up).reshape(-1,3)
O=np.broadcast_to(cam,D.shape).copy()
RT=R.T
def to_local(P): return P@RT.T  # world = R*local  => local = R^T world ; row vectors: P @ R
def S(P):
    L=P@R; return sdf(L[:,0],L[:,1],L[:,2])
n=D.shape[0]; t=np.full(n,DIST-110); hit=np.zeros(n,bool); mind=np.full(n,1e9); act=np.arange(n)
for it in range(260):
    if act.size==0: break
    P=O[act]+D[act]*t[act,None]; d=S(P)
    mind[act]=np.minimum(mind[act],d/np.maximum(t[act],1)*175)  # screen-ish min distance for AA
    h=d<0.004*t[act]/60
    hit[act[h]]=True
    t[act]+=np.maximum(d*0.55,0.002)
    keep=(~h)&(t[act]<DIST+140)
    act=act[keep]
print('march done', hit.sum())
idx=np.where(hit)[0]; P=O[idx]+D[idx]*t[idx,None]
e=0.012
def grad(P):
    g=np.zeros_like(P)
    for k in range(3):
        dv=np.zeros(3); dv[k]=e
        g[:,k]=S(P+dv)-S(P-dv)
    return nrm(g)
N=grad(P)
L=P@R; nut,ins,blk,cab,phi=parts(L[:,0],L[:,1],L[:,2])
mat=np.argmin(np.stack([nut,ins,blk,cab]),0)
# AO
ao=np.ones(len(idx))
for k,hh in enumerate((0.4,0.9,1.6,2.6,4.0)):
    ao-= (hh-S(P+N*hh))*(0.5**k)*0.22
ao=np.clip(ao,0.15,1)
V=-D[idx]; Rf=nrm(2*np.sum(N*V,1,keepdims=True)*N-V)
def env(r,soft):
    # dark studio: overhead softbox, right strip, cool blue rim from back-left, floor dark
    x,y,z=r[:,0],r[:,1],r[:,2]
    s=lambda v,a,b: np.clip((v-a)/(b-a),0,1)
    top=s(y,0.55-soft,0.85)*1.6
    strip=s(x,0.55-soft,0.9)*s(0.65+soft,np.abs(y),0.2)*1.9
    front=s(z,0.6-soft,0.95)*s(0.6+soft,np.abs(x+0.25),0.1)*0.9
    rim=s(-x,0.5-soft,0.9)*s(-z,-0.2,0.6)*1.0
    base=0.05+0.05*s(y,-0.4,0.6)
    w=(base+top+strip+front)[:,None]*np.array([1.0,0.98,0.95])+rim[:,None]*np.array([0.25,0.55,1.0])
    return w
fres=lambda f0: f0+(1-f0)*(1-np.clip(np.sum(N*V,1),0,1))**5
keyd=nrm(np.array([0.55,0.75,0.45])); fill=nrm(np.array([-0.7,0.2,0.5]))
lam=np.clip(N@keyd,0,1); lamf=np.clip(N@fill,0,1)
col=np.zeros((len(idx),3))
m=mat==0  # nickel
col[m]=env(Rf[m],0.12)*np.array([0.78,0.77,0.74])*(0.55+0.45*fres(0.6)[m,None])
m=mat==1  # blue insert (NIES blue, slightly deeper)
base=np.array([0.0,0.11,0.36])
col[m]=base*(0.55+0.9*lam[m,None]+0.6*lamf[m,None])+env(Rf[m],0.35)*fres(0.04)[m,None]*0.22
m=mat==2  # black overmould
col[m]=np.array([0.014,0.015,0.02])*(0.3+lam[m,None]+0.4*lamf[m,None])+env(Rf[m],0.28)*fres(0.045)[m,None]*0.85
m=mat==3  # blue PUR cable
base=np.array([0.0,0.16,0.47])
col[m]=base*(0.07+0.85*lam[m,None]+0.3*lamf[m,None])+env(Rf[m],0.45)*fres(0.04)[m,None]*0.55
deep=(mat==1)&(L[:,2]<-3.35)          # socket bores read dark
col[deep]*=0.18
col*=ao[:,None]
# filmic tone map
col=col/(1+col*0.55)*1.25
col=np.clip(col,0,1)**(1/2.2)
img=np.zeros((n,4)); img[idx,:3]=col; img[idx,3]=1
# cable fades into the ink along its length (alpha), so the subject eases out, never ends on an edge
fade=np.ones(len(idx)); cm=mat==3
fade[cm]=np.clip(1-(phi[cm]-0.3)/0.62,0,1)**1.5
img[idx,3]*=fade
# edge AA from min distance for misses
miss=~hit; aa=np.clip(1-mind/0.5,0,1)*0  # (supersampling handles AA)
img=img.reshape(H2,W2,4)
if SS>1:
    a=img[...,3:4]; pre=img[...,:3]*a
    pre=pre.reshape(H,SS,W,SS,3).mean((1,3)); a=a.reshape(H,SS,W,SS,1).mean((1,3))
    img=np.concatenate([pre/np.maximum(a,1e-6),a],-1)
Image.fromarray((np.clip(img,0,1)*255+.5).astype(np.uint8),'RGBA').save(OUT)
print('saved',OUT)
