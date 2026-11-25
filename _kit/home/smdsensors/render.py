#!/usr/bin/env python3
"""Hero render (HOME_BRIEF update 2c): a stainless-steel binocular-beam load cell of the kind Strain Measurement Devices makes
(their S-series beam load cells: a machined bar with a twin-hole 'binocular' cut-out and mounting holes at each end), with
sputtered thin-film strain-gauge bridges on the top face over the thin webs, and a shielded four-wire cable leaving one end.
Numpy sphere tracer, studio-lit brushed steel, transparent ground. Usage: render.py WIDTH out.png"""
import numpy as np, sys
from PIL import Image
WO=int(sys.argv[1]) if len(sys.argv)>1 else 1300; OUT=sys.argv[2] if len(sys.argv)>2 else 'hero.png'
SS=2; W=WO*SS; H=int(W*0.80)
A=np.array
def nrm(v):return v/(np.linalg.norm(v,axis=-1,keepdims=True)+1e-12)
# ---------- scene ----------
BX,BY,BZ=1.20,0.30,0.25
HC=0.30; HR=0.175
def beam(p):
    x,y,z=p[...,0],p[...,1],p[...,2]
    q=np.abs(p)-A([BX,BY,BZ])+0.02
    d=np.linalg.norm(np.maximum(q,0),axis=-1)+np.minimum(np.max(q,axis=-1),0)-0.02
    h1=np.sqrt((x-HC)**2+y**2)-HR; h2=np.sqrt((x+HC)**2+y**2)-HR
    sl=np.maximum(np.abs(x)-HC,np.abs(y)-0.045)
    cut=np.minimum(np.minimum(h1,h2),sl)
    d=np.maximum(d,-cut)
    # mounting holes through the height at each end
    m1=np.sqrt((x-0.98)**2+z**2)-0.075; m2=np.sqrt((x+0.98)**2+z**2)-0.075
    d=np.maximum(d,-np.minimum(m1,m2))
    return d
def bez(p0,p1,p2,p3,n):
    t=np.linspace(0,1,n)[:,None];return (1-t)**3*p0+3*(1-t)**2*t*p1+3*(1-t)*t*t*p2+t**3*p3
# cable: strain-relief boss on the +x end face, then a loose curve down and toward the viewer
CP=np.concatenate([bez(A([1.20,0.02,0.0]),A([1.75,0.02,0.0]),A([1.95,-0.25,0.35]),A([1.70,-0.62,0.62]),12),
                   bez(A([1.70,-0.62,0.62]),A([1.48,-0.92,0.85]),A([1.05,-0.98,0.95]),A([0.70,-0.86,1.02]),10)[1:]])
CR=0.050
WIRES=[(A([0.70,-0.86,1.02]),A([0.40,-0.80,1.10]),(0.80,0.10,0.09)),(A([0.70,-0.86,1.02]),A([0.42,-0.92,1.04]),(0.07,0.07,0.08)),
       (A([0.70,-0.86,1.02]),A([0.45,-0.70,1.00]),(0.10,0.55,0.22)),(A([0.70,-0.86,1.02]),A([0.46,-0.99,1.13]),(0.88,0.88,0.86))]
def capsule(p,a,b,r):
    pa=p-a;ba=b-a;h=np.clip((pa@ba)/(ba@ba),0,1);return np.linalg.norm(pa-h[...,None]*ba,axis=-1)-r
def cable(p):
    d=np.full(p.shape[:-1],1e9)
    for i in range(len(CP)-1):d=np.minimum(d,capsule(p,CP[i],CP[i+1],CR))
    # strain relief boss
    d=np.minimum(d,capsule(p,A([1.17,0.02,0.0]),A([1.34,0.02,0.0]),0.085))
    return d
def wires(p):
    d=np.full(p.shape[:-1],1e9);k=np.zeros(p.shape[:-1],int)
    for i,(a,b,c) in enumerate(WIRES):
        e=capsule(p,a,b,0.017);m=e<d;d=np.where(m,e,d);k=np.where(m,i,k)
    return d,k
def scene(p):
    b=beam(p);c=cable(p);w,_=wires(p)
    return np.minimum(np.minimum(b,c),w)
# ---------- camera ----------
yaw=np.radians(-28);pit=np.radians(-31)
fwd=nrm(A([np.sin(yaw)*np.cos(pit),np.sin(pit),-np.cos(yaw)*np.cos(pit)]))
ro=A([0.32,-0.12,0.0])-fwd*7.2
rt=nrm(np.cross(fwd,A([0,1,0])));up=np.cross(rt,fwd)
roll=np.radians(-4);rt,up=rt*np.cos(roll)+up*np.sin(roll),up*np.cos(roll)-rt*np.sin(roll)
fov=0.36
ys,xs=np.mgrid[0:H,0:W]
u=(xs+.5-W/2)/(W/2)*fov;v=-(ys+.5-H/2)/(W/2)*fov
rd=nrm(fwd[None,None,:]+u[...,None]*rt+v[...,None]*up).reshape(-1,3)
N=len(rd);t=np.full(N,4.0);act=np.ones(N,bool);hit=np.zeros(N,bool)
for it in range(140):
    idx=np.nonzero(act)[0]
    if not len(idx):break
    p=ro+rd[idx]*t[idx,None];d=scene(p)
    t[idx]+=d*0.9
    h=d<4e-4;hit[idx[h]]=True;act[idx[h]]=False
    far=t[idx]>11;act[idx[far]]=False
print('hits',hit.sum())
P=ro+rd*t[:,None]
idx=np.nonzero(hit)[0];p=P[idx]
e=1e-3
def grad(f,p):
    return nrm(np.stack([f(p+A([e,0,0]))-f(p-A([e,0,0])),f(p+A([0,e,0]))-f(p-A([0,e,0])),f(p+A([0,0,e]))-f(p-A([0,0,e]))],-1))
n=grad(scene,p)
db=beam(p);dc=cable(p);dw,wk=wires(p)
kind=np.where(db<=np.minimum(dc,dw)+1e-4,0,np.where(dc<=dw,1,2))
V=-rd[idx];ndv=np.clip((n*V).sum(-1),0,1)
rf=2*ndv[:,None]*n-V
def sm(a,b,x):x=np.clip((x-a)/(b-a),0,1);return x*x*(3-2*x)
def env(r):
    # studio: a large soft box overhead-left, a long strip light right (cool), dark floor, mid-dark walls
    y=r[:,1];x=r[:,0];z=r[:,2]
    base=0.05+0.10*sm(-0.3,0.5,y)
    box=sm(0.35,0.75,y)*sm(-0.95,-0.15,-x*0.9+0.2)*1.9
    strip=np.exp(-((x-0.75)/0.12)**2)*sm(-0.4,0.3,y)*1.1
    rim=np.exp(-((z+0.85)/0.25)**2)*0.5
    floor=sm(0.1,-0.6,y)*0.02
    front=sm(0.2,0.7,z)*sm(-1.0,-0.3,y)*sm(0.75,0.2,y)*(0.45+0.75*sm(-0.2,-0.7,x))*1.05
    c=np.stack([base,base,base*1.08],1)+np.stack([box,box,box],1)*A([1.0,0.99,0.97])+strip[:,None]*A([0.62,0.76,1.0])+rim[:,None]*A([0.7,0.8,1.0])+front[:,None]*A([0.95,0.97,1.0])
    return c-floor[:,None]
# ambient occlusion
ao=np.ones(len(p))
for k,s in enumerate([0.02,0.05,0.1,0.18]):
    ao-= (s-scene(p+n*s))*(0.9/(k+1))
ao=np.clip(ao,0.25,1)
col=np.zeros((len(p),3))
# --- steel (brushed along x) ---
m=kind==0
if m.any():
    pp=p[m];nn=n[m];rr=rf[m]
    rng=np.random.default_rng(3)
    # brushing: streaks along x, perturb reflection in y/z by a hash of (y,z)
    hsh=np.sin(pp[:,1]*913.1+pp[:,2]*517.7)*43758.5453;hsh=hsh-np.floor(hsh)
    hsh2=np.sin(pp[:,1]*2113.1+pp[:,2]*1517.7+pp[:,0]*3.0)*12345.678;hsh2=hsh2-np.floor(hsh2)
    blur=np.zeros_like(rr)
    for j in range(6):
        jit=A([0.0,(rng.random()-.5)*0.16,(rng.random()-.5)*0.16])
        blur+=env(nrm(rr+jit+(hsh[:,None]-.5)*A([0,0.05,0.05])))
    refl=blur/6
    fres=0.62+0.38*(1-np.clip((nn*V[m]).sum(-1),0,1))**5
    sweep=np.where(np.abs(nn[:,2])>0.8,1.12-0.42*sm(-1.2,1.25,pp[:,0]),1.0)
    c=refl*fres[:,None]*A([0.86,0.88,0.90])*(0.93+0.07*hsh2[:,None])*sweep[:,None]
    # top face gauges: thin-film bridges over the two thin webs (top of each hole), amber film with fine gold serpentine grid
    top=(nn[:,1]>0.9)&(pp[:,1]>BY-0.01)
    gx=pp[:,0];gz=pp[:,2]
    for cx in (-HC,HC):
        inpad=top&(np.abs(gx-cx)<0.17)&(np.abs(gz)<0.13)
        if inpad.any():
            lx=(gx-cx);lz=gz
            film=np.array([0.40,0.24,0.08])
            grid=(np.abs(lx)<0.085)&(np.abs(lz)<0.085)
            ser=((np.mod(lz*90,1.0))<0.48)&grid
            pads=((np.abs(lx)>0.11)&(np.abs(lx)<0.155)&(np.abs(np.abs(lz)-0.06)<0.035))
            fc=np.where(ser[:,None],A([0.95,0.72,0.30]),film)
            fc=np.where(pads[:,None],A([0.90,0.86,0.78]),fc)
            spec=env(rr)[:,0:1]
            gc=fc*(0.35+0.65*spec)+0.12*spec
            c=np.where(inpad[:,None],gc,c)
        # fine border of the film
    col[m]=c
# --- cable (matte-satin black jacket) ---
m=kind==1
if m.any():
    nn=n[m];dif=np.clip(nn@nrm(A([-0.5,0.7,0.5])),0,1)
    sp=env(rf[m])
    col[m]=0.025+0.05*dif[:,None]+0.22*sp*(0.15+0.85*(1-np.clip((nn*V[m]).sum(-1),0,1))**3)[:,None]
# --- wires ---
m=kind==2
if m.any():
    nn=n[m];dif=np.clip(nn@nrm(A([-0.5,0.7,0.5])),0,1)
    base=A([w[2] for w in WIRES])[wk[m]]
    sp=env(rf[m])
    col[m]=base*(0.25+0.75*dif[:,None])+0.25*sp
col*=ao[:,None]
img=np.zeros((N,4));img[idx,:3]=col;img[idx,3]=1
img=img.reshape(H,W,4)
# tone map
rgb=img[...,:3];rgb=rgb/(1+0.35*rgb);rgb=np.clip(rgb,0,1)**(1/1.9)
img[...,:3]=rgb
im=Image.fromarray((np.clip(img,0,1)*255).astype(np.uint8),'RGBA').resize((WO,int(WO*0.80)),Image.LANCZOS)
bb=im.getbbox();print('bbox',bb,im.size)
mg=int(WO*0.04);im=im.crop((max(0,bb[0]-mg),max(0,bb[1]-mg),min(im.size[0],bb[2]+mg),min(im.size[1],bb[3]+mg)));print('crop',im.size)
im.save(OUT)
