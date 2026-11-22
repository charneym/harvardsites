#!/usr/bin/env python3
"""PeriPear hero (HOME_BRIEF update 2b): Pexels photo 4997378 (a parent's hand cradling a newborn's feet), Pexels License.
Crop round the feet, pull the white towel and highlights down, lift the shadows toward the indigo ink of the logo (#262166 family),
keep the skin warm, and bake a long eased elliptical alpha so the photo has no edge anywhere (DP/DJ). Output hero.webp (RGBA)."""
import sys, numpy as np
from PIL import Image
src = sys.argv[1]
im = Image.open(src).convert('RGB')
W, H = im.size                       # 6000 x 4000
box = (1350, 450, 6000, 4000)         # feet sit near the centre of this crop
im = im.crop(box)
tw = 1900; th = round(im.height * tw / im.width)
im = im.resize((tw, th), Image.LANCZOS)
a = np.asarray(im).astype(np.float32) / 255.0
lum = (0.2126*a[...,0] + 0.7152*a[...,1] + 0.0722*a[...,2])[..., None]
# highlight roll-off (towel), gentle overall darkening
a = a * 0.9
yy, xx = np.mgrid[0:th, 0:tw].astype(np.float32)
skin = np.clip((a[...,0:1] - a[...,2:3]) * 5, 0, 1)            # warm pixels
from PIL import ImageFilter
_m = Image.fromarray((skin[...,0]*255).astype(np.uint8)).filter(ImageFilter.MaxFilter(15)).filter(ImageFilter.GaussianBlur(8))
skin = (np.asarray(_m).astype(np.float32)/255.0)[..., None]      # dilated, so specular toe tips count as skin
hi = np.clip((lum - 0.6) / 0.4, 0, 1)
a = a * (1 - 0.5*hi*(1 - skin))                                 # the white towel rolls off; skin highlights stay
top = np.clip(1 - yy / (th*0.45), 0, 1)[..., None]
a = a * (1 - 0.45*top*(1 - skin))
# skin: a touch less magenta, more natural
a[...,0:1] = a[...,0:1]*(1-0.04*skin); a[...,2:3] = a[...,2:3]*(1+0.03*skin)
# shadows toward indigo ink
ink = np.array([0x17, 0x14, 0x3a], np.float32) / 255.0
sh = np.clip(1 - lum / 0.32, 0, 1) ** 1.4
a = a * (1 - 0.75*sh) + ink * 0.75*sh
# slight warm lift in the midtones of the skin
a = np.clip(a, 0, 1)
# alpha: long linear eases on the left, top and bottom edges only (no oval, no box): the right edge meets the viewport edge
def ease(v): v=np.clip(v,0,1); return v*v*(3-2*v)
al = ease(xx/(tw*0.42)) * ease(yy/(th*0.30)) * ease((th-yy)/(th*0.22))
out = np.dstack([a, al[..., None]]) * 255
Image.fromarray(out.astype(np.uint8), 'RGBA').save('hero.webp', quality=86, method=6)
print('hero.webp', tw, th)
