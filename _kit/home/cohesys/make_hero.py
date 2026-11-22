#!/usr/bin/env python3
"""Hero for Cohesys: their own product photograph (cohesys.ca, 'Cohesys Skull Fracture Picture': BoneTape fixing a
zygomatic fracture on a skull model), cropped to the taped orbit rim, white studio ground keyed out, graded warm and
given a long eased alpha feather so it sits in the page ink with no box edge (DP/DJ). Writes ../../../cohesys/hero.webp."""
import numpy as np, pathlib
from PIL import Image, ImageFilter
H=pathlib.Path(__file__).resolve().parent
im=Image.open(H/'src_skull.webp').convert('RGB')
x0,y0,x1,y1=120,560,1573,1999
im=im.crop((x0,y0,x1,y1))
a=np.asarray(im).astype(np.float32)/255
W,Hh=im.size
lum=a@np.array([.2126,.7152,.0722])
sat=a.max(2)-a.min(2)
# key the white studio ground: very bright, nearly neutral, and connected to the photo's border (bright bone inside is kept)
from PIL import ImageDraw
cand=((lum>.86)&(sat<.09)).astype(np.uint8)*255
cm=Image.fromarray(cand,'L').copy(); cm.load()
for x in range(0,W,3):
    for y in (0,Hh-1):
        if cm.getpixel((x,y))==255: ImageDraw.floodfill(cm,(x,y),128)
for y in range(0,Hh,3):
    for x in (0,W-1):
        if cm.getpixel((x,y))==255: ImageDraw.floodfill(cm,(x,y),128)
bgm=(np.asarray(cm)==128).astype(np.uint8)*255
kimg=Image.fromarray(255-bgm,'L').filter(ImageFilter.MinFilter(13)).filter(ImageFilter.GaussianBlur(5))
key=np.asarray(kimg).astype(np.float32)/255
# long eased feather: ellipse centred on the taped rim
yy,xx=np.mgrid[0:Hh,0:W].astype(np.float32)
cx,cy=W*.55,Hh*.52
d=np.sqrt(((xx-cx)/(W*.52))**2+((yy-cy)/(Hh*.52))**2)
f=np.clip((1.0-d)/0.55,0,1); f=f*f*(3-2*f)
# and a guaranteed fall to zero at every border of the image, so its rectangle can never show (DP)
ex=np.clip(np.minimum(xx,W-1-xx)/(W*.16),0,1);ey=np.clip(np.minimum(yy,Hh-1-yy)/(Hh*.16),0,1)
ex=ex*ex*(3-2*ex);ey=ey*ey*(3-2*ey)
alpha=key*f*ex*ey
# grade: lift contrast a touch, warm the bone slightly toward the brand's coral, deepen shadows
g=np.clip((a-.04)*1.06,0,1)**1.12
warm=np.array([1.03,.985,.955])
g=np.clip(g*warm,0,1)
# shadows sink toward the ink (#170a12) so the orbit hollow reads deep, never grey
ink=np.array([23,10,18])/255
sh=np.clip(1-lum/.35,0,1)[...,None]*.35
g=g*(1-sh)+ink*sh
# decontaminate: where the key is partial, pull colour toward the ink so no light fringe survives
e=(1-np.clip(key*1.25,0,1))[...,None]
g=g*(1-e)+ink*e
out=np.dstack([g,alpha]).clip(0,1)
o=Image.fromarray((out*255).astype(np.uint8),'RGBA')
dst=H.parent.parent.parent/'cohesys'; dst.mkdir(exist_ok=True)
o.save(dst/'hero.webp',quality=86,method=6)
print(o.size)
