#!/usr/bin/env python3
"""Hero for Makani Science: their own product photograph (makaniscience.com product page: the Makani Respiratory Monitor,
wireless pod clipped to its stretchable sensor strip, held in gloved hands on a black studio ground). Cropped to the
device, graded cool-neutral with blacks sunk to the page ink, and given a long eased alpha feather that falls to zero
at every border (DP/DJ), so it sits in the ink with no box edge. Writes ../../../makaniscience/hero.webp."""
import numpy as np, pathlib
from PIL import Image
H=pathlib.Path(__file__).resolve().parent
im=Image.open(H/'src_device.jpg').convert('RGB')
im=im.crop((600,0,2600,1500))
a=np.asarray(im).astype(np.float32)/255
W,Hh=im.size
lum=a@np.array([.2126,.7152,.0722])
yy,xx=np.mgrid[0:Hh,0:W].astype(np.float32)
cx,cy=W*.47,Hh*.43
d=np.sqrt(((xx-cx)/(W*.56))**2+((yy-cy)/(Hh*.62))**2)
f=np.clip((1.0-d)/0.6,0,1); f=f*f*(3-2*f)
ex=np.clip(np.minimum(xx,W-1-xx)/(W*.18),0,1);ey=np.clip(np.minimum(yy,Hh-1-yy)/(Hh*.14),0,1)
ex=ex*ex*(3-2*ex);ey=ey*ey*(3-2*ey)
alpha=f*ex*ey
# the black ground itself becomes transparent too (it is the same ink), keeping only the lit subject strong
alpha=alpha*np.clip((lum-.07)/.18,0,1)**.8
g=np.clip((a-.03)*1.05,0,1)**1.08
g=np.clip(g*np.array([.985,1.0,.99]),0,1)
ink=np.array([11,18,13])/255
sh=np.clip(1-lum/.3,0,1)[...,None]*.5
g=g*(1-sh)+ink*sh
out=np.dstack([g,alpha]).clip(0,1)
o=Image.fromarray((out*255).astype(np.uint8),'RGBA')
o.save(H.parent.parent.parent/'makaniscience'/'hero.webp',quality=88,method=6)
bg=Image.new('RGBA',o.size,(11,18,13,255));bg.alpha_composite(o);bg.convert('RGB').resize((1000,750)).save('/tmp/claude-0/hero_prev.jpg')
print(o.size)
