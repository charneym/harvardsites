#!/usr/bin/env python3
"""Rittinghaus hero (HOME_BRIEF update 2a): Rittinghaus's own product photograph of white injection-moulded precision gears
(rittinghaus-gmbh.de/wp-content/uploads/2012/03/head_produkte_01.jpg, 960x440, the header of their "Produkte" page), cropped to the
gear train, lifted slightly toward white, and eased into the photo's own pale-blue ground over a long elliptical distance: colour
converges on the page ground (BG) AND alpha falls away, so no edge can read as a box (DP/DJ). Never upscaled."""
import numpy as np
from PIL import Image
S=Image.open('src-gears.jpg').convert('RGB')
im=S.crop((250,0,960,440)); OW,OH=im.size
a=np.asarray(im).astype(np.float32)/255.
a=a*.86+.14                       # a touch lighter and softer, the photo's own cool light kept
BG=np.array([200,213,240],np.float32)/255.   # = hero ground (#c8d5f0), the lifted tone of the photo's backdrop
yy,xx=np.mgrid[0:OH,0:OW].astype(np.float32)
nx=(xx-OW*.56)/(OW*.56); ny=(yy-OH*.5)/(OH*.5)
d=np.sqrt(nx**2+ny**2*1.0)
def ss(e0,e1,x):
    t=np.clip((x-e0)/(e1-e0),0,1); return t*t*(3-2*t)
m=ss(.42,1.0,d)
c=a*(1-m[...,None])+BG*m[...,None]
alpha=1-ss(.62,1.02,d)
out=np.dstack([np.clip(c,0,1),alpha])
Image.fromarray((out*255+.5).astype(np.uint8),'RGBA').save('hero.webp',quality=90,method=6)
print(OW,OH)
