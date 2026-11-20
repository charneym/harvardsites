#!/usr/bin/env python3
"""Grade SmartBreast's own Eve Clear Scan(TM) MBI image (smartbreast.com home banner 1, left panel) into the site palette.
The scan's rainbow (jet-like) colour map is inverted to a count scalar, then re-mapped to the logo ramp:
ink -> deep violet -> logo violet #60356f -> plum #8c4682 -> lilac #d7a3ca -> warm bone at the lesion. The 'EVE CLEAR SCAN'
caption is removed, the panel is mirrored so the chest wall anchors the right edge of the hero, and every inner edge
feathers to the ink (DJ). Output: hero.webp with alpha."""
import numpy as np, colorsys, pathlib
from PIL import Image, ImageFilter
H=pathlib.Path(__file__).resolve().parent
im=Image.open(H/'src-mbi.jpg').convert('RGB').crop((8,0,708,1100))
a=np.asarray(im).astype(np.float32)/255
# erase the caption (black ground there anyway)
a[860:980,420:]=0
r,g,b=a[...,0],a[...,1],a[...,2]
mx=a.max(-1); mn=a.min(-1); d=mx-mn+1e-6
h=np.zeros_like(mx)
m=mx==r; h[m]=((g-b)[m]/d[m])%6
m=mx==g; h[m]=((b-r)[m]/d[m])+2
m=mx==b; h[m]=((r-g)[m]/d[m])+4
h=h*60  # degrees
sat=d/(mx+1e-6)
# jet-ish: blue 240 -> 0.22, cyan 180 -> .35, green 120 -> .48, yellow 60 -> .66, red 0 -> .82, magenta 300 -> .92, white -> 1
hh=np.where(h>270,h-360,h)   # magenta becomes negative (-60..)
s=np.interp(-hh,[-240,-180,-120,-60,0,60],[.22,.35,.48,.66,.82,.93])
s=np.where(sat<.25,np.maximum(s,.75+.25*mx),s)       # whitish core
s=np.where(mx<.08,0,s)
s=s*np.clip(mx*1.25,0,1)                                 # dim parts are low counts
S=Image.fromarray((np.clip(s,0,1)*255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(2.0))
S=S.resize((S.width*2,S.height*2),Image.LANCZOS).filter(ImageFilter.GaussianBlur(1.0))
s=np.asarray(S).astype(np.float32)/255
stops=[(0,(18,10,22)),(.12,(40,20,52)),(.26,(74,40,88)),(.40,(96,53,111)),(.55,(140,70,130)),(.70,(196,130,180)),(.84,(232,196,220)),(1,(255,244,236))]
xs=[p for p,_ in stops]
out=np.stack([np.interp(s,xs,[c[i] for _,c in stops]) for i in range(3)],-1)
# fine grain so the upscale reads as a real acquisition, not a smear
rng=np.random.default_rng(7); out+=rng.normal(0,2.2,out.shape)*(s[...,None]>.05)
out=np.clip(out,0,255)
# alpha: the counts themselves (black ground is transparent) + feathered left/top/bottom edges of the panel
al=np.clip(s/.16,0,1)
Hh,Ww=s.shape
yy=np.linspace(0,1,Hh)[:,None]; xx=np.linspace(0,1,Ww)[None,:]
f=np.clip((1-yy)/.16,0,1)*np.clip(yy/.05,0,1)   # bottom cut fades
al=al*f
# the chest-wall edge (x=0 in the source) becomes the right edge after mirroring: let it run out, but soften a little
pass
rgba=np.dstack([out,al*255]).astype(np.uint8)
img=Image.fromarray(rgba,'RGBA').transpose(Image.FLIP_LEFT_RIGHT)
img.save(H/'hero.webp','WEBP',quality=92,method=6)
print(img.size)
