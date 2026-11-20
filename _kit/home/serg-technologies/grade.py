#!/usr/bin/env python3
"""Grade SERG's own photo (a clinician's hands holding the SERG assessment app on a tablet, from sergtechnologies.com home page)
into the site's indigo duotone for the hero (HOME_BRIEF update option a). Crop keeps the tablet and both hands."""
import pathlib
import numpy as np
from PIL import Image, ImageFilter
H=pathlib.Path(__file__).resolve().parent
im=Image.open(H/'src-tablet.jpg').convert('RGB').crop((150,0,1680,720))
im=im.resize((int(im.width*1.25),int(im.height*1.25)),Image.LANCZOS)
a=np.asarray(im).astype(np.float32)/255
L=.2126*a[...,0]+.7152*a[...,1]+.0722*a[...,2]
# lower exposure, compress highlights so the screen never reads white (DI)
L=np.clip((L-.06)/.94,0,1)**1.45*1.0
h,w=L.shape;yy,xx=np.mgrid[0:h,0:w]
# tablet-centred vignette: the floor and sleeves fall to the ink, the screen and hands keep their light
cx,cy=.47*w,.47*h;d=np.sqrt(((xx-cx)/(.50*w))**2+((yy-cy)/(.62*h))**2)
V=np.clip(1.25-d*.95,0,1)**1.4
L=L*(.22+.78*V)
ink=np.array([10,13,46])/255; mid=np.array([44,46,118])/255; hi=np.array([214,214,240])/255
t=L[...,None]
out=np.where(t<.45, ink+(mid-ink)*(t/.45), mid+(hi-mid)*((t-.45)/.55))
# keep a little of the original colour in skin tones
out=out*.9+a*.1*(L[...,None]**2*1.3)
o=Image.fromarray((np.clip(out,0,1)*255).astype(np.uint8))
o.save(H/'hero.webp',quality=86,method=6)
print(o.size)
