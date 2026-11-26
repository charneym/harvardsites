#!/usr/bin/env python3
"""DIENES hero (HOME_BRIEF update 2a): DIENES's own photograph of their induction-heated godets with copper-coloured
filament running over them (dienes.net/wp-content/uploads/2022/07/Godets_neu_2022_dunkler.jpg, 1600x1120, the first slide of
their home page). Cropped to the godet duos, kept at native resolution (never upscaled), graded gently (steel a touch cooler,
the copper yarn kept), and eased out over a long elliptical distance: colour converges on the page ink AND alpha falls away,
so no edge can read as a box (DP/DJ)."""
import numpy as np
from PIL import Image
S=Image.open('src-godets.jpg').convert('RGB')
im=S.crop((40,200,1600,1120)); OW,OH=im.size
a=np.asarray(im).astype(np.float32)/255.
lum=(a*[.299,.587,.114]).sum(-1,keepdims=True)
sat=a.max(-1,keepdims=True)-a.min(-1,keepdims=True)
cool=np.array([.96,1.0,1.06],np.float32)
a=np.where(sat<.12,np.clip(lum+(a-lum)*.6,0,1)*cool,a)   # neutral steel: a little cooler and calmer
a=np.clip((a-.5)*1.05+.5,0,1)*.94                          # keep tonal depth, take the hot highlights down a touch
BG=np.array([13,15,18],np.float32)/255.
yy,xx=np.mgrid[0:OH,0:OW].astype(np.float32)
nx=(xx-OW*.52)/(OW*.52); ny=(yy-OH*.5)/(OH*.5)
d=(np.abs(nx)**3.2+np.abs(ny)**3.2)**(1/3.2)   # a soft rounded rectangle, not an oval porthole
def ss(e0,e1,x):
    t=np.clip((x-e0)/(e1-e0),0,1); return t*t*(3-2*t)
m=ss(.42,1.0,d)
c=a*(1-m[...,None])+BG*m[...,None]
alpha=1-ss(.5,1.0,d)**1.3
out=np.dstack([np.clip(c,0,1),alpha])
Image.fromarray((out*255+.5).astype(np.uint8),'RGBA').save('hero.webp',quality=90,method=6)
print(OW,OH)
