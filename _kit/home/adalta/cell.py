#!/usr/bin/env python3
"""AdAlta hero: a crafted render of a single T cell, the living drug at the centre of AdAlta's CAR-T programme, in the
look of a scanning electron micrograph (how T cells are usually seen): a calm sphere densely covered in short microvilli.
Rendered as a z-buffer of spheres (the cell body plus a few thousand partly embedded villus knobs), so the outline carries
real nubs and every knob is lit; shading = soft key light + SEM edge brightening + depth-based occlusion in the crevices.
Tinted cool slate from the logo ground with a faint warm key. Rendered on black; field.js draws it additively onto the
ink, so no image edge exists (DP/DJ). Output: hero.webp"""
import numpy as np
from PIL import Image
S=1500;rng=np.random.default_rng(5)
def fblur(a,s):
    f=np.fft.rfft2(a);ky=np.fft.fftfreq(a.shape[0])[:,None];kx=np.fft.rfftfreq(a.shape[1])[None,:]
    return np.fft.irfft2(f*np.exp(-2*(np.pi*s)**2*(kx*kx+ky*ky)),a.shape)
R=S*.40;cx=cy=S*.5
SS=2  # supersample
W=S*SS
Zb=np.full((W,W),-1e9);NX=np.zeros((W,W));NY=np.zeros((W,W));NZ=np.zeros((W,W));ID=np.zeros((W,W))
def splat(sx,sy,sz,r,tag):
    sx,sy,sz,r=sx*SS,sy*SS,sz*SS,r*SS
    x0,x1=max(int(sx-r)-1,0),min(int(sx+r)+2,W);y0,y1=max(int(sy-r)-1,0),min(int(sy+r)+2,W)
    gx,gy=np.meshgrid(np.arange(x0,x1)+.5-sx,np.arange(y0,y1)+.5-sy)
    d2=gx*gx+gy*gy;m=d2<r*r
    z=sz+np.sqrt(np.clip(r*r-d2,0,None))
    zb=Zb[y0:y1,x0:x1];upd=m&(z>zb)
    zb[upd]=z[upd]
    NX[y0:y1,x0:x1][upd]=(gx/r)[upd];NY[y0:y1,x0:x1][upd]=(gy/r)[upd];NZ[y0:y1,x0:x1][upd]=(np.sqrt(np.clip(r*r-d2,0,None))/r)[upd]
    ID[y0:y1,x0:x1][upd]=tag
splat(cx,cy,0,R,0)
# villi: roughly even spacing (jittered Fibonacci sphere), front hemisphere plus a band past the limb
N=7600;v=rng.normal(size=(N,3));v/=np.linalg.norm(v,axis=1)[:,None]
v=v[v[:,2]>-.12]
v=v[np.argsort(v[:,2])]
for k,p in enumerate(v):
    r=R*(rng.uniform(.012,.022) if rng.random()<.72 else rng.uniform(.023,.033));out=R-r*rng.uniform(.35,.75)
    c=p*out
    splat(cx+c[0],cy+c[1],c[2],r,1+k%7)
# downsample buffers
def ds(a):return a.reshape(S,SS,S,SS).mean((1,3))
cov=ds((Zb>-1e8).astype(float))
Zd=np.where(Zb>-1e8,Zb,0)
nx,ny,nz=[fblur(ds(a),2.0) for a in (NX,NY,NZ)]
ru=fblur(rng.normal(0,1,(S,S)),2.2);ry,rx=np.gradient(ru);nx=nx-rx*3.0;ny=ny-ry*3.0
Zs=ds(Zd)/SS
nl=np.sqrt(nx*nx+ny*ny+nz*nz)+1e-6;nx/=nl;ny/=nl;nz/=nl
L=np.array([-.5,-.62,.6]);L/=np.linalg.norm(L)
lam=np.clip(nx*L[0]+ny*L[1]+nz*L[2],0,1)
edge=(1-np.clip(nz,0,1))**1.05
# occlusion: compare depth with a local blurred depth (crevices between knobs darken)
Zf=np.where(cov>0,Zs,0)
occ=np.clip((Zs-fblur(Zf,7)/np.maximum(fblur(cov,7),1e-3))/(R*.03),-1,1)
I=(.13+.28*lam+.66*edge+.08*occ)
I=np.clip(I,0,None)
# the whole body a little darker toward the lower right (shadow side), keeps it calm
yy,xx=np.mgrid[0:S,0:S].astype(float);X=(xx-cx)/R;Y=(yy-cy)/R
I*=.80+.20*np.clip(.5-.45*(X*.6+Y*.8),0,1)*2
I*=cov
cool=np.array([.60,.74,.85]);ice=np.array([.94,.97,1.0]);warm=np.array([1.0,.78,.74])
t=np.clip(I,0,1.5)
img=t[...,None]*cool+np.clip(t-.55,0,None)[...,None]*(ice-cool)+(lam*cov*.07)[...,None]*warm
img+=rng.normal(0,.007,(S,S,1))*np.clip(t[...,None]*3,0,1)
img=np.clip(img,0,1)**(1/1.04)
im=Image.fromarray((img*255).astype(np.uint8),'RGB')
bb=Image.fromarray((img.max(-1)>0.01).astype(np.uint8)*255).getbbox();print('bbox',bb)
im=im.crop(bb);im.save('hero.webp',quality=90);im.save('/tmp/claude-0/-home-user-harvardsites/725b7903-fbb6-5717-a43f-f7e8fcec8a3a/scratchpad/hero.png');print(im.size)
