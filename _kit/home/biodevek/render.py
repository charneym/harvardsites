#!/usr/bin/env python3
"""Offline render of the Biodevek hero: a clear, lime-tinted GastroShield hydrogel bead forming at the tip of a slim
endoscopic spray catheter (the product is delivered as two liquids that mix at the catheter tip). SDF ray-marcher in numpy:
satin polymer catheter, refractive gel drop with Beer-Lambert tint and Fresnel reflections of a soft studio environment.
Output: hero.webp with real alpha (the catheter feathers out over a long distance at the top)."""
import numpy as np, sys
from PIL import Image
W,H,SS=int(sys.argv[1]) if len(sys.argv)>1 else 760, int(sys.argv[2]) if len(sys.argv)>2 else 1000, 2
w,h=W*SS,H*SS
INK=np.array([15,40,38])/255.
def norm(v): return v/np.linalg.norm(v,axis=-1,keepdims=True)
# camera: slightly above, looking a touch down
cam=np.array([0.,0.45,6.0]); tgt=np.array([0.,0.12,0.]); fov=0.23
fw=norm(tgt-cam); rt=norm(np.cross(fw,[0,1,0])); up=np.cross(rt,fw)
ys,xs=np.mgrid[0:h,0:w].astype(np.float32)
u=(xs+.5)/w*2-1; v=1-(ys+.5)/h*2
asp=w/h
D=norm(fw[None,None,:]+u[...,None]*asp*fov*rt+v[...,None]*fov*up).reshape(-1,3).astype(np.float32)
O=np.broadcast_to(cam,D.shape).astype(np.float32).copy()
RC=0.15; TIP=0.30
def sd_cath(p):
    # vertical rounded cylinder from y=TIP upward
    x,y,z=p[:,0],p[:,1],p[:,2]
    r=np.sqrt(x*x+z*z)-RC
    yy=TIP-y
    dx=np.maximum(r,-0.0); 
    a=np.stack([r+0.02,yy+0.02],1)
    return np.minimum(np.maximum(a[:,0],a[:,1]),0)+np.linalg.norm(np.maximum(a,0),axis=1)-0.02
def sd_drop(p):
    x,y,z=p[:,0],p[:,1],p[:,2]
    c=np.array([0.,-0.14,0.],np.float32)
    # slightly pear-shaped pendant drop: sphere stretched a touch vertically at the top
    q=p-c; q[:,1]=np.where(q[:,1]>0,q[:,1]*0.97,q[:,1]*1.0)
    s=np.linalg.norm(q,axis=1)-0.47
    # gel collar wrapping the catheter tip
    r=np.sqrt(x*x+z*z)-(RC+0.035); col=np.maximum(r,np.abs(y-(TIP+0.04))-0.07)
    k=0.20; hh=np.clip(0.5+0.5*(col-s)/k,0,1)
    return s*hh+col*(1-hh)-k*hh*(1-hh)
def sdf(p):
    return np.minimum(sd_cath(p),sd_drop(p))
def grad(f,p):
    e=1e-3; ex=np.array([e,0,0],np.float32); ey=np.array([0,e,0],np.float32); ez=np.array([0,0,e],np.float32)
    return norm(np.stack([f(p+ex)-f(p-ex),f(p+ey)-f(p-ey),f(p+ez)-f(p-ez)],1))
def march(O,D,f,sgn=1.,n=160,tmax=12.):
    t=np.full(len(O),0.0,np.float32); hit=np.zeros(len(O),bool); act=np.ones(len(O),bool)
    for i in range(n):
        idx=np.nonzero(act)[0]
        if len(idx)==0: break
        d=sgn*f(O[idx]+D[idx]*t[idx,None])
        t[idx]+=np.maximum(d,4e-4)*0.9
        hh=d<3e-4; hit[idx[hh]]=True; act[idx[hh]]=False
        act[idx[t[idx]>tmax]]=False
    return t,hit
def sm(a,b,x): x=np.clip((x-a)/(b-a),0,1); return x*x*(3-2*x)
def env(d):
    # studio: page ink, a large soft key box upper-left-front, a slim rim strip right-back, a faint lime floor glow
    c=np.broadcast_to(INK*0.9,d.shape).copy()
    k=norm(np.array([-0.55,0.62,0.56]))
    ck=d@k; c+= (sm(0.66,0.9,ck)*2.6)[:,None]*np.array([0.95,1.0,0.97])
    r=norm(np.array([0.85,0.15,-0.5])); cr=d@r
    c+= (sm(0.86,0.97,cr)*sm(-0.6,0.2,d[:,1])*1.3)[:,None]*np.array([0.82,0.95,0.86])
    c+= (sm(-0.1,-0.9,d[:,1])*0.9)[:,None]*np.array([0.45,0.78,0.16])
    c+= (sm(0.3,1.0,d[:,1])*0.06)[:,None]
    b=norm(np.array([0.1,0.3,-1.0])); c+= (sm(0.80,0.985,d@b)*2.2)[:,None]*np.array([0.78,0.95,0.70])
    return c
t,hit=march(O,D,sdf)
P=O+D*t[:,None]
col=np.zeros_like(D); alpha=np.zeros(len(D),np.float32)
idx=np.nonzero(hit)[0]
p=P[idx]; n=grad(sdf,p); d=D[idx]
isdrop=sd_drop(p)<=sd_cath(p)+2e-3
# --- catheter: satin translucent polymer
ci=~isdrop
if ci.any():
    nn=n[ci]; dd=d[ci]
    L=norm(np.array([-0.55,0.62,0.56]))
    dif=np.clip(nn@L,0,1)*0.55+0.5*(0.5+0.5*nn[:,1])*0.35
    wrap=np.clip((nn@L+0.5)/1.5,0,1)*0.25
    base=np.array([0.88,0.93,0.91])
    hv=norm(L-dd); spec=np.clip(np.sum(nn*hv,1),0,1)**18*0.55
    fr=0.04+0.96*(1-np.clip(-np.sum(nn*dd,1),0,1))**5
    rim=env(norm(dd-2*np.sum(dd*nn,1)[:,None]*nn))
    cc=base*(dif+wrap)[:,None]*0.92+spec[:,None]+rim*fr[:,None]*0.6
    # a fine lumen seam line down the side (the two-lumen catheter)
    pc=p[ci]; ang=np.arctan2(pc[:,0],pc[:,2])
    seam=np.exp(-((ang-0.35)/0.035)**2)*0.18
    cc=cc*(1-seam[:,None])
    col[idx[ci]]=cc; alpha[idx[ci]]=1
# --- gel drop: refraction + absorption + fresnel
di=np.nonzero(isdrop)[0]
if len(di):
    nn=n[di]; dd=d[di]; pp=p[di]
    eta=1/1.36
    cosi=-np.sum(nn*dd,1)
    k=1-eta*eta*(1-cosi**2)
    T=norm(eta*dd+(eta*cosi-np.sqrt(np.clip(k,0,None)))[:,None]*nn)
    t2,h2=march(pp-nn*2e-3,T,sd_drop,sgn=-1.,n=120,tmax=3.)
    pe=pp-nn*2e-3+T*t2[:,None]
    ne=-grad(sd_drop,pe)
    cos2=-np.sum(ne*T,1); eta2=1.36
    k2=1-eta2*eta2*(1-cos2**2)
    T2=np.where((k2>0)[:,None],norm(eta2*T+(eta2*cos2-np.sqrt(np.clip(k2,0,None)))[:,None]*ne),norm(T-2*np.sum(T*ne,1)[:,None]*ne))
    trans=env(T2)
    # the catheter tip seen through the gel: darken rays that pass the catheter
    tc,hc=march(pe,T2,sd_cath,n=60,tmax=2.)
    trans[hc]=trans[hc]*0.3+np.array([0.55,0.62,0.6])*0.35
    sigma=np.array([0.95,0.16,1.15])
    ab=np.exp(-sigma[None,:]*np.clip(t2,0,2)[:,None])
    inner=trans*ab+np.array([0.10,0.24,0.05])*(1-ab.mean(1))[:,None]*0.9
    R=norm(dd+2*cosi[:,None]*nn)
    fr=0.025+0.975*(1-np.clip(cosi,0,1))**5
    L=norm(np.array([-0.55,0.62,0.56])); hv=norm(L-dd)
    spec=np.clip(np.sum(nn*hv,1),0,1)**220*3.0
    cc=inner*(1-fr)[:,None]+env(R)*fr[:,None]+spec[:,None]
    col[idx[di]]=cc; alpha[idx[di]]=1
# tone map
col=1-np.exp(-col*1.25)
img=np.concatenate([col,alpha[:,None]],1).reshape(h,w,4)
# feather the catheter out toward the top over a long distance (alpha), in world height
Py=P[:,1].reshape(h,w)
fade=1-sm(0.45,1.45,Py)
img[...,3]*=np.where(alpha.reshape(h,w)>0,fade,0)
# premultiplied downsample
pm=img.copy(); pm[...,:3]*=pm[...,3:4]
pm=pm.reshape(H,SS,W,SS,4).mean((1,3))
a=pm[...,3:4]; rgb=np.where(a>1e-4,pm[...,:3]/np.maximum(a,1e-4),0)
out=np.concatenate([rgb,a],2)
Image.fromarray((np.clip(out,0,1)*255+.5).astype(np.uint8),'RGBA').save(sys.argv[3] if len(sys.argv)>3 else 'hero.png')
print('ok')
