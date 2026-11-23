#!/usr/bin/env python3
"""Hero art: JuneBrain's own product render of the Neuro-i SS-OCT (base unit with touchscreen + wearable headset),
from junebrain.com (home, wixstatic 0d31fb_1415125e9bbf45d4977a7e00d7db583d~mv2.png, 1600x900). The studio band is a flat
#edf0f7, which is the page ink, so the ground matches exactly; the crop keeps the real soft shadows and every edge is
feathered over a long eased distance into that ink (DJ/DP). Native resolution, never upscaled."""
import numpy as np, pathlib
from PIL import Image
H=pathlib.Path(__file__).resolve().parent
INK=np.array([237,240,247],float)
a=np.asarray(Image.open(H/'src-render.png').convert('RGB'),float)
x0,x1,y0,y1=600,1540,184,718
out=a[y0:y1,x0:x1].copy(); hh,ww,_=out.shape
# the source backdrop carries a faint lighter panel behind the base unit and a compression dot pattern (visible at x6
# luminance): pull every near-ink pixel to the ink exactly, weighting by a blurred deviation so the real soft shadows keep
# their tone and fade continuously
from PIL import ImageFilter
dev=np.abs(out-INK).max(-1)
devb=np.asarray(Image.fromarray(np.clip(dev*8,0,255).astype('uint8')).filter(ImageFilter.GaussianBlur(6)),float)/8
wgt=np.clip((devb-4)/(12-4),0,1); wgt=wgt*wgt*(3-2*wgt)
out=INK+(out-INK)*wgt[...,None]
yy,xx=np.mgrid[0:hh,0:ww]
def ease(t):t=np.clip(t,0,1);return t*t*(3-2*t)
# keep = 1 inside, eased to 0 at every edge (long feather: 150px sides, 70px top/bottom)
k=ease(xx/150)*ease((ww-1-xx)/150)*ease(yy/70)*ease((hh-1-yy)/70)
out=out*k[...,None]+INK*(1-k[...,None])
print('edge residual',np.abs(out[0]-INK).max(),np.abs(out[:,0]-INK).max())
img=Image.fromarray(out.round().clip(0,255).astype('uint8'))
img.save(H/'hero.webp',quality=94,method=6,use_sharp_yuv=True)
print(img.size)
