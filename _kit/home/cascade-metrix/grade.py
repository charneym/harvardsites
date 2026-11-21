"""Crop the render around the flow cell and give it a long eased radial alpha (real alpha, rule DP/DJ). Run: python3 -I grade.py in.png out.webp"""
import sys, numpy as np
from PIL import Image
im=Image.open(sys.argv[1]).convert('RGB');W,H=im.size
box=(int(W*.0),int(H*.17),int(W*1.0),int(H*.86));im=im.crop(box);w,h=im.size
a=np.asarray(im).astype(np.float32)
ink=np.array([10,18,38],np.float32)
yy,xx=np.mgrid[0:h,0:w].astype(np.float32)
cx,cy=w*.53,h*.52;rx,ry=w*.50,h*.56
d=np.sqrt(((xx-cx)/rx)**2+((yy-cy)/ry)**2)
m=np.clip((1.0-d)/0.42,0,1);m=m*m*(3-2*m)          # long smoothstep falloff from d=.58 to 1
# also fade anything that is close to ink so the ground is exactly transparent
lum=np.abs(a-ink).sum(2);m=m*np.clip(lum/18,0,1)**.6
rgb=np.clip((a-ink*(1-m[...,None]))/np.maximum(m[...,None],1e-3),0,255)
out=np.dstack([np.where(m[...,None]>0.002,rgb,ink),m*255]).astype(np.uint8)
img=Image.fromarray(out,'RGBA');img=img.resize((1800,int(1800*h/w)),Image.LANCZOS)
img.save(sys.argv[2],'WEBP',quality=88,method=6);print(img.size)
