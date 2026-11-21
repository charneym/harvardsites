#!/usr/bin/env python3
"""Hero render for acouflow: a train of three pulsed vortex rings (the VortexPAP mechanism: 'each pulse is a vortex,
similar to a smoke ring'), rendered as flow-visualisation smoke: particles on rolled-up toroidal sheets with azimuthal
waves and a trailing wake, splatted, blurred and tone-mapped onto the page ink (#0d1417). Output hero.webp."""
import numpy as np, sys
from PIL import Image
from PIL import ImageFilter
def gaussian_filter(a,sig):
    s=sig[0]; Hh,Ww=a.shape[:2]
    fy=np.fft.fftfreq(Hh)[:,None]; fx=np.fft.rfftfreq(Ww)[None,:]
    K=np.exp(-2*(np.pi*s)**2*(fx**2+fy**2))
    return np.stack([np.fft.irfft2(np.fft.rfft2(a[:,:,c])*K,s=(Hh,Ww)) for c in range(a.shape[2])],2)
rng=np.random.default_rng(7)
W,H=1800,1400
INK=np.array([13,20,23])/255.
SMOKE=np.array([214,224,226])/255.; GOLD=np.array([214,170,92])/255.
img=np.zeros((H,W,3))
f=2300.  # focal length px
cam=np.array([0.,0.,-9.])
def proj(P):
    z=P[:,2]-cam[2]; return W*.5+f*P[:,0]/z, H*.5-f*P[:,1]/z, z
def basis(d):
    d=d/np.linalg.norm(d); a=np.array([0,1.,0]) if abs(d[1])<.9 else np.array([1.,0,0])
    u=np.cross(d,a); u/=np.linalg.norm(u); v=np.cross(d,u); return d,u,v
NM=[(rng.normal(0,1,3)*f_,rng.uniform(0,6.3),rng.normal(0,1,3)) for f_ in [1.5,2.2,3.1,4.4,6.0,8.5,12.,16.,22.,30.] for _ in range(3)]
def turb(P,amp):
    D=np.zeros_like(P)
    for k,ph,dv in NM:
        sc=amp/np.linalg.norm(k)**.9
        D+=np.sin(P@k+ph)[:,None]*dv[None,:]*sc
    return D
L=np.array([.6,.7,-.4]); L/=np.linalg.norm(L)
def ring(C,d,R,a,n,amp,seed,bright,age):
    r=np.random.default_rng(seed); d,u,v=basis(np.array(d,float))
    th=r.uniform(0,2*np.pi,n)
    # rolled-up spiral sheet in the core cross-section (the striations seen in smoke rings)
    s=r.uniform(0,1,n)**.8; turns=2.6; phi=s*turns*2*np.pi+r.normal(0,.35,n); rr=a*(1-s)**.9+r.normal(0,a*.05,n)
    rr=np.abs(rr)+a*.04*r.normal(0,1,n)**2
    # azimuthal (Widnall) waves and fine turbulence
    wav=1+amp*np.sin(8*th+seed)+amp*.6*np.sin(13*th+2*seed)
    Rloc=R*(1+.012*np.sin(3*th+seed*.7))
    radial=np.stack([np.cos(th)[:,None]*u+np.sin(th)[:,None]*v][0]) if False else (np.cos(th)[:,None]*u+np.sin(th)[:,None]*v)
    cx=np.cos(phi)*rr*wav; cy=np.sin(phi)*rr*wav
    P=C+radial*(Rloc+cx)[:,None]+d*(cy+amp*.6*a*np.sin(6*th+seed))[:,None]
    P=P+turb(P,.018*(.3+2.2*s[:,None]**2))
    nrm=radial*np.cos(phi)[:,None]+d*np.sin(phi)[:,None]
    lit=np.clip(.5+.5*(nrm@L),0,1)**1.4
    dens=(.25+.75*(1-s)**.6)*bright
    # wake: a thin trailing sheet behind the ring, fading
    m=int(n*.8); th2=r.uniform(0,2*np.pi,m); t=r.uniform(0,1,m)**1.6
    rad2=np.cos(th2)[:,None]*u+np.sin(th2)[:,None]*v
    R2=R*(1-.55*t)+r.normal(0,a*.25,m)*(1+2*t)
    P2=C+rad2*R2[:,None]-d*(a*.8+t*R*age)[:,None]+r.normal(0,a*.15,(m,3))*(.5+2*t)[:,None]
    P2=P2+turb(P2,(.02+.10*t)[:,None])
    lit2=np.clip(.3+.5*(rad2@L),0,1); dens2=(1-t)**1.2*.45*bright
    return np.vstack([P,P2]),np.concatenate([lit,lit2]),np.concatenate([dens,dens2])
def splat(P,lit,dens):
    x,y,z=proj(P); ok=(x>=0)&(x<W-1)&(y>=0)&(y<H-1)
    x,y,lit,dens,z=x[ok],y[ok],lit[ok],dens[ok],z[ok]
    w=dens*(9/z)**2
    col=SMOKE[None,:]*(1-lit[:,None]*.55)+GOLD[None,:]*(lit[:,None]*.55)
    xi=x.astype(int); yi=y.astype(int)
    acc=np.zeros((H,W,3)); lacc=np.zeros((H,W))
    idx=yi*W+xi
    for c in range(3): acc[:,:,c]=np.bincount(idx,weights=w*col[:,c]*(.08+.92*lit),minlength=W*H).reshape(H,W)
    return acc
d=np.array([.80,-.06,-.60])  # travel: toward the viewer and to the left
d/=np.linalg.norm(d)
acc=np.zeros((H,W,3))
# three pulses, leading one nearest the viewer; later ones younger, tighter
for i,(k,br,amp) in enumerate([(0,1.0,.035),(1,.8,.025),(2,.62,.02)]):
    C=np.array([1.75,0.0,1.2])-d*k*2.75
    P,lit,dens=ring(C,d,1.0-.06*k,.34-.03*k,2200000,amp,[23,12,13][i],br,2.0)
    acc+=splat(P,lit,dens)
# soft fill: fine detail + glow
fine=gaussian_filter(acc,(.8,.8,0)); mid=gaussian_filter(acc,(3.5,3.5,0)); glow=gaussian_filter(acc,(30,30,0))
E=fine*1.0+mid*.45+glow*.5
k=1.0/np.percentile(E.max(axis=2),99.7)
E=1-np.exp(-E*k*1.05)
# long eased radial mask so no edge exists: everything returns to exact ink well inside the frame
yy,xx=np.mgrid[0:H,0:W]; rx=(xx-W*.5)/(W*.5); ry=(yy-H*.5)/(H*.5); rr=np.sqrt(rx**2+ry**2)
m=np.clip((1.0-rr)/.45,0,1); m=m*m*(3-2*m)
out=INK[None,None,:]+E*m[:,:,None]*(1-INK[None,None,:])
o=(np.clip(out,0,1)*255+.5).astype(np.uint8)
Image.fromarray(o).save(sys.argv[1],lossless=True,quality=100,method=6)
print("ok",o.shape, o[0,0], o[-1,-1])
