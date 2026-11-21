#!/usr/bin/env python3
"""Hero photo: 'teeth X-ray' (Denti del giudizio, 1982) by Umanoide, Unsplash License,
https://unsplash.com/photos/teeth-x-ray-KeVKEs1_RDU (images.unsplash.com/photo-1522849696084-818b29dfe210).
Crop to the dentition, denoise, levels (the grey haze sinks to ink so the teeth carry the light), tritone grade
(ink navy -> brand steel blue -> cool bone), long eased elliptical alpha (real alpha, no box edge: DP/DJ).
Usage: grade.py <src.jpg> -> hero.webp"""
import sys, numpy as np, pathlib
from PIL import Image, ImageFilter
H=pathlib.Path(__file__).resolve().parent
im=Image.open(sys.argv[1]).convert('L')
W,Hh=im.size
x0,y0,x1,y1=int(W*.0),int(Hh*.285),int(W*1.0),int(Hh*.905)
im=im.crop((x0,y0,x1,y1))
im=im.filter(ImageFilter.MedianFilter(7)).filter(ImageFilter.GaussianBlur(2.2))
OW=2200;im=im.resize((OW,int(im.size[1]*OW/im.size[0])),Image.LANCZOS)
v=np.asarray(im).astype(np.float32)/255
# flatten the low-frequency haze (soft tissue, film glow) so only bone and enamel carry light
bg=np.asarray(Image.fromarray((v*255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(110))).astype(np.float32)/255
v=v-.62*bg
lo,hi=np.percentile(v,42),np.percentile(v,99.5)
v=np.clip((v-lo)/(hi-lo),0,1)**1.12
h,w=v.shape
yy,xx=np.mgrid[0:h,0:w].astype(np.float32)
# the dentition's centre sits a little below the middle of the crop
cx,cy=w*.5,h*.56
r=np.sqrt(((xx-cx)/(w*.5))**2+((yy-cy)/(h*.56))**2)
a=np.clip((1.12-r)/(1.12-.3),0,1);a=a*a*(3-2*a)
ink=np.array([7,12,31])/255;mid=np.array([38,96,170])/255;hiC=np.array([228,240,250])/255
t=v[...,None]
rgb=np.where(t<.5,ink+(mid-ink)*(t/.5),mid+(hiC-mid)*((t-.5)/.5))
ex=np.clip(np.minimum(np.minimum(xx,w-1-xx)/(w*.07),np.minimum(yy,h-1-yy)/(h*.1)),0,1);ex=ex*ex*(3-2*ex)
alpha=np.clip(ex*a*np.clip(v*1.5,0,1)**.9,0,1)
out=np.dstack([rgb,alpha[...,None]])
Image.fromarray((out*255+.5).astype(np.uint8),'RGBA').save(H/'hero.webp',quality=88,method=6)
Image.fromarray((out*255+.5).astype(np.uint8),'RGBA').save(H/'hero_check.png')
print(w,h)
