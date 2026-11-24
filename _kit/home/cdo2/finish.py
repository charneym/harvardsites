#!/usr/bin/env python3
"""Crop the CDO2 hero render to the cell, feather every edge into the page ink #0c0810 (DJ/DP), write hero.webp."""
import sys, numpy as np
from PIL import Image
src=sys.argv[1]; out=sys.argv[2]
im=np.asarray(Image.open(src).convert('RGB')).astype(np.float32)
INK=np.array([12,8,16],np.float32)
d=np.abs(im-INK).sum(2); ys,xs=np.where(d>40)
y0,y1,x0,x1=ys.min(),ys.max(),xs.min(),xs.max()
m=int(.16*max(y1-y0,x1-x0)); H,W=d.shape
y0=max(0,y0-m);y1=min(H,y1+m);x0=max(0,x0-m);x1=min(W,x1+m)
c=im[y0:y1,x0:x1]; h,w=c.shape[:2]
yy,xx=np.mgrid[0:h,0:w]; u=(xx+.5)/w*2-1; v=(yy+.5)/h*2-1
r=np.sqrt(u**2+v**2); f=np.clip((1.0-r)/.42,0,1); f=f*f*(3-2*f)
e=np.minimum(np.minimum(xx,w-1-xx),np.minimum(yy,h-1-yy))/(.12*min(h,w)); e=np.clip(e,0,1); e=e*e*(3-2*e)
k=(f*e)[...,None]
o=INK+(c-INK)*k
Image.fromarray(np.clip(o,0,255).astype(np.uint8)).save(out,'WEBP',quality=90,method=6)
print('wrote',out,w,h)
