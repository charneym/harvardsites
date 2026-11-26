#!/usr/bin/env python3
"""Logo assets from Delichon's own 500x200 logo PNG (alpha): the grey 'Delichon Ltd' wordmark, the purple house-martin
(Delichon is the house-martin genus) with its two swooshes, and the 'Performance Seating Systems' line. The alpha is
upsampled x4 and re-edged (smoothstep on a lightly blurred alpha) so the mark stays crisp on retina screens; the purple is
kept at brand colour, the grey wordmark is lifted to a light warm grey for the dark grounds.
Outputs: logo-full.png (with descriptor, loader), logo.png (no descriptor, nav/footer), mark.png (bird only, favicon)."""
import numpy as np
from PIL import Image, ImageFilter
src=Image.open('src-logo.png').convert('RGBA')
a=np.asarray(src).astype(np.float32)
pur=(a[...,2]-a[...,1])>30
K=4
def up(mask_alpha):
    im=Image.fromarray((mask_alpha*255).astype(np.uint8)).resize((src.width*K,src.height*K),Image.BICUBIC).filter(ImageFilter.GaussianBlur(1.6))
    x=np.asarray(im).astype(np.float32)/255
    x=np.clip((x-0.32)/(0.68-0.32),0,1); return x*x*(3-2*x)
al=a[...,3]/255
ap=up(al*pur); ag=up(al*~pur)
PUR=(125,98,166); GRY=(226,222,232)
def comp(ap,ag,y1=None):
    o=np.zeros(ap.shape+(4,),np.float32)
    A=np.maximum(ap,ag); w=np.where(A>0,ap/np.maximum(A,1e-6),0)
    for i in range(3): o[...,i]=PUR[i]*w+GRY[i]*(1-w)
    o[...,3]=A*255
    if y1 is not None: o[y1:,...,3]=0
    img=Image.fromarray(o.astype(np.uint8),'RGBA'); return img.crop(img.getchannel('A').point(lambda v:255 if v>10 else 0).getbbox())
full=comp(ap,ag); full.save('logo-full.png',optimize=True); print('full',full.size)
# the descriptor line starts below the lower swoosh (source rows >= ~150)
ys=np.where((al*~pur).any(1))[0]
nod=comp(ap,ag,y1=150*K); nod.save('logo.png',optimize=True); print('logo',nod.size)
# the bird alone: purple pixels right of x=420 in the source
bp=ap.copy(); bp[:, :415*K]=0
bird=comp(bp,np.zeros_like(ag)); bird.save('mark.png',optimize=True); print('mark',bird.size)
