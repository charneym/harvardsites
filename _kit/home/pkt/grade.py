#!/usr/bin/env python3
"""PKT hero (HOME_BRIEF update 2a): PKT's own photograph of an open multi-cavity injection mould on one of their machines
(pkt-gmbh.de/wp-content/uploads/2020/12/pkt_Technologien-040919_443.jpg), cropped to the two mould halves and the gripper,
graded cool toward the brand blue (#0072a3), highlights pulled down so the bright hall behind reads as deep steel, and given real
alpha that eases out over a long elliptical distance (DP/DJ: no box edge)."""
import numpy as np
from PIL import Image
S=Image.open('src-mould.jpg').convert('RGB')
W,H=S.size; k=W/1400
box=(int(150*k),int(40*k),int(1270*k),int(905*k))
im=S.crop(box); OW=1280; OH=round(OW*im.size[1]/im.size[0]); im=im.resize((OW,OH),Image.LANCZOS)
a=np.asarray(im).astype(np.float32)/255.
lum=a@np.array([.2126,.7152,.0722],np.float32)
# cool grade: keep some original colour (the blue hoses), tint the rest toward brand steel-blue
tint=np.array([.55,.80,1.0],np.float32)
g=lum[...,None]*tint
c=.42*a+.58*g
# tone: compress highlights (the white hall) and keep depth
c=np.clip(c,0,1); c=c**1.0; c=np.clip((c-.5)*1.3+.48,0,1); c=c*1.02/(c*.35+.65)*.86
# vignette inside the image toward the ink so edges approach the ground before alpha takes over
yy,xx=np.mgrid[0:OH,0:OW].astype(np.float32)
nx=(xx-OW*.5)/(OW*.5); ny=(yy-OH*.5)/(OH*.5)
d=np.sqrt(nx**2*1.0+ny**2*1.0)
def ss(e0,e1,x):
    t=np.clip((x-e0)/(e1-e0),0,1); return t*t*(3-2*t)
dark=1-.5*ss(.5,1.02,d)
# the very bright backdrop behind the gripper: pull it further down
hi=ss(.55,.95,lum)
c=c*dark[...,None]*(1-.28*hi[...,None])
ink=np.array([6,22,34],np.float32)/255.
alpha=1-ss(.56,.99,np.sqrt(nx**2+ny**2*1.08))
out=np.dstack([np.clip(c,0,1),alpha])
Image.fromarray((out*255+.5).astype(np.uint8),'RGBA').save('hero.webp',quality=86,method=6)
print(OW,OH)
