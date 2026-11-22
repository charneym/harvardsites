#!/usr/bin/env python3
"""Flat-field Simergent's own Archimedes studio photo so the backdrop becomes exactly white (1.0).
In the page it is composited with 'multiply' onto a canvas light pool, so the white backdrop vanishes
with no box edge (DP/DJ); only the device and its floor shadow darken the pool."""
import numpy as np, pathlib
from PIL import Image
H=pathlib.Path(__file__).resolve().parent
im=np.asarray(Image.open(H/'src_archimedes.jpg').convert('RGB')).astype(np.float64)/255
h,w,_=im.shape
L=im.mean(2)
yy,xx=np.mgrid[0:h,0:w]; X=xx/w-.5; Y=yy/h-.5
def basis(X,Y): return np.stack([np.ones_like(X),X,Y,X*X,Y*Y,X*Y,X**3,Y**3,X*X*Y,X*Y*Y],-1)
B=basis(X,Y)
# initial bg sample: outer strips
m=(xx<w*.14)|(xx>w*.86)|(yy<h*.03)
for it in range(4):
    bgc=[]
    for c in range(3):
        co,*_=np.linalg.lstsq(B[m],im[...,c][m],rcond=None); bgc.append(B@co)
    bg=np.stack(bgc,-1)
    r=(im/bg).mean(2)
    sat=im.max(2)-im.min(2)
    m=(r>.965)&(sat<.04)
out=np.clip(im/bg,0,1)
# snap near-white backdrop to exactly 1 with a smooth knee
r=out.mean(2,keepdims=True)
k=np.clip((r-.93)/.05,0,1); k=k*k*(3-2*k)
out=out*(1-k)+k
# crop to the device with margin, downsample to a sharp working size
ys,xs=np.where(out.mean(2)<.96)
y0,y1=max(0,ys.min()-40),min(h,ys.max()+60); x0,x1=max(0,xs.min()-60),min(w,xs.max()+60)
print('crop',x0,y0,x1,y1)
c=np.pad(out[y0:y1,x0:x1],((200,120),(60,60),(0,0)),constant_values=1.0)
ch,cw=c.shape[:2]
def ramp(n,f):
    v=np.clip(np.arange(n)/f,0,1); v=v*v*(3-2*v); return np.minimum(v,v[::-1])
em=np.minimum(ramp(ch,140)[:,None],ramp(cw,170)[None,:])[...,None]
c=1-(1-c)*em
o=Image.fromarray((c*255+.5).astype(np.uint8))
o.thumbnail((1100,1500),Image.LANCZOS)
o.save(H.parent.parent.parent/'simergent/hero.webp',quality=90,method=6)
print(o.size)
