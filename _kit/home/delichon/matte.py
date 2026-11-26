#!/usr/bin/env python3
"""Hero: Delichon's own studio photograph of the Delta All-Terrain Buggy (silver canvas, purple sun hood; delichon.uk
media/contenttype/delta/silver-purple-sunhood.jpg, 1080x1600, shot on pure white with no floor shadow). Matted to alpha:
the white studio ground, including the white seen between spokes and under the frame, becomes transparent; small white
specks inside the object (highlights on the alloy) stay; edge pixels are un-mixed from white so no pale halo remains on the
dark ink. A soft contact shadow is added under the three tyres. Output hero.webp (RGBA)."""
import numpy as np
from PIL import Image
from PIL import ImageFilter
def M(x):return Image.fromarray((x*255).astype(np.uint8))
def A_(i):return np.asarray(i).astype(np.float32)/255
def blur(x,r):return A_(M(np.clip(x,0,1)).filter(ImageFilter.GaussianBlur(r)))
im=np.asarray(Image.open('src-delta.jpg').convert('RGB')).astype(np.float32)/255
H,W,_=im.shape
d=1-im.min(2)
bg=d<0.028
# opening of the background drops tiny white specks (alloy highlights) back into the object
bg=A_(M(bg.astype(np.float32)).filter(ImageFilter.MinFilter(5)).filter(ImageFilter.MaxFilter(5)))>.5
obj=~bg
# alpha: inside the object 1; on the rim, from how far the pixel departs from white
core=A_(M(obj.astype(np.float32)).filter(ImageFilter.MinFilter(5)))>.5
ramp=np.clip(d/0.16,0,1)
alpha=np.where(core,1.0,ramp*obj)
alpha=blur(alpha,0.5)*obj
alpha=np.clip(alpha,0,1)
# un-mix white at the rim
a3=np.maximum(alpha,1e-3)[...,None]
rgb=np.clip((im-(1-a3))/a3,0,1)
rgb=np.where((alpha<0.999)[...,None],rgb,im)
# contact shadow under the tyres: rows near the lowest object pixels
ys,xs=np.where(obj); yb=ys.max()
sh=np.zeros((H,W),np.float32)
cols=obj[yb-40:yb+1].any(0)
sh[yb-6:yb+4,:]=cols[None,:]*1.0
sh=blur(sh,8)*0.9
A=np.maximum(alpha,sh*(1-alpha))
RGB=rgb*(alpha/np.maximum(A,1e-4))[...,None]
# grade: a touch cooler, deeper purples, slightly lower highlights so it sits on the ink without glare
g=np.clip((RGB-0.5)*1.05+0.5,0,1)*0.93
g[...,2]=np.clip(g[...,2]*1.02,0,1)
out=(np.clip(np.dstack([g,A]),0,1)*255+.5).astype(np.uint8)
img=Image.fromarray(out,'RGBA')
bb=img.getchannel('A').point(lambda v:255 if v>4 else 0).getbbox(); img=img.crop(bb)
img.save('hero.webp',quality=90,method=6); print('hero',img.size)
