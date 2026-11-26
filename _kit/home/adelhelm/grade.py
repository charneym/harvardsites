#!/usr/bin/env python3
"""ADELHELM hero (HOME_BRIEF update 2a): ADELHELM's own product photograph of HF forceps with their electrically insulating
adcoat ML HFIso coating (black and yellow; adelhelm.de/files/Adelhelm/bilder/2_1_5_elektrisch_isolierend.jpg, 600x600, the photo
of their "Elektrisch isolierend" page), cropped to the instruments and eased into the photo's own cool-grey ground over a long
elliptical distance: colour converges on the page ground (BG) AND alpha falls away, so no edge can read as a box (DP/DJ).
Never upscaled."""
import numpy as np
from PIL import Image
S=Image.open('src-forceps.jpg').convert('RGB')
im=S.crop((0,150,600,500)); OW,OH=im.size
a=np.asarray(im).astype(np.float32)/255.
BG=np.array([200,209,220],np.float32)/255.   # = hero ground (#c8d1dc), the photo's own backdrop around the instruments
yy,xx=np.mgrid[0:OH,0:OW].astype(np.float32)
# relight the backdrop: estimate the photo's own (vertical-gradient) backdrop with the instruments masked out, then shift every
# pixel by (BG - backdrop), so the ground equals the page ground everywhere while instruments and their soft shadows keep their depth
from PIL import ImageFilter
lum=a.mean(2); sat=a.max(2)-a.min(2)
keep=((lum>.5)&(sat<.12)).astype(np.float32)
def blur(x,r):
    return np.asarray(Image.fromarray((x*65535).astype(np.uint16) if False else (x*255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(r))).astype(np.float32)/255.
num=np.dstack([blur(a[...,k]*keep,28) for k in range(3)]); den=blur(keep,28)[...,None]
bgest=num/np.maximum(den,1e-3)
a=np.clip(a+(BG-bgest),0,1)
# flatten the paper grain: pixels within a few levels of the ground become the ground exactly; shadows and instruments are kept
dev=np.abs(a-BG).max(2); w=np.clip(1-(dev-.012)/.04,0,1)
a=a*(1-w[...,None])+BG*w[...,None]
nx=(xx-OW*.5)/(OW*.5); ny=(yy-OH*.5)/(OH*.5)
d=(np.abs(nx)**4+np.abs(ny)**4)**.25   # rounded-rect distance: 1.0 on every edge, so alpha is 0 there
def ss(e0,e1,x):
    t=np.clip((x-e0)/(e1-e0),0,1); return t*t*(3-2*t)
m=ss(.72,.98,d)
c=a*(1-m[...,None])+BG*m[...,None]
alpha=np.ones_like(d)   # opaque: colour converges to exactly BG at every edge, so no premultiplied-alpha rim
out=np.dstack([np.clip(c,0,1),alpha])
Image.fromarray((out*255+.5).astype(np.uint8),'RGBA').save('hero.webp',lossless=True,method=6)
print(OW,OH)
