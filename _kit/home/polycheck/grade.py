#!/usr/bin/env python3
"""Polycheck hero (HOME_BRIEF update 2a): Polycheck's own product photograph, a white Polycheck cassette of twelve colour-coded
test panels held in two hands (polycheck.de/wp-content/uploads/2023/06/slider_1.png, 1920x1000, their home-page slider),
cropped to the cassette and eased into the photo's own cool-white ground over a long elliptical distance: colour converges on
the page ground (BG) AND alpha falls away, so no edge can read as a box (DP/DJ). Never upscaled."""
import numpy as np
from PIL import Image
S=Image.open('src-cassette.png').convert('RGB')
im=S.crop((150,40,1400,1000)).resize((1000,768),Image.LANCZOS); OW,OH=im.size
a=np.asarray(im).astype(np.float32)/255.
BG=np.array([247,251,255],np.float32)/255.   # = hero ground (#f7fbff), the photo's own backdrop
yy,xx=np.mgrid[0:OH,0:OW].astype(np.float32)
nx=(xx-OW*.47)/(OW*.5); ny=(yy-OH*.5)/(OH*.5)
d=np.sqrt(nx**2+ny**2)
def ss(e0,e1,x):
    t=np.clip((x-e0)/(e1-e0),0,1); return t*t*(3-2*t)
m=ss(.42,.84,d)
c=a*(1-m[...,None])+BG*m[...,None]
alpha=1-ss(.8,1.0,d)
out=np.dstack([np.clip(c,0,1),alpha])
Image.fromarray((out*255+.5).astype(np.uint8),'RGBA').save('hero.webp',lossless=True,quality=100,method=6)
print(OW,OH)
