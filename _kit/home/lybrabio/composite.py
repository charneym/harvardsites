"""Composite the hero: the patch from the lit pass (its hydrogel refracts a lit bench) over the shadow-only pass on the page ink,
using the flat mask pass. Run after: MODE=lit|floor|mask node render.js <out>. Writes hero.webp."""
import sys
from PIL import Image, ImageFilter
import numpy as np
d=sys.argv[1]
L=np.asarray(Image.open(d+'/R-lit.png').convert('RGB')).astype(float)
F=np.asarray(Image.open(d+'/R-floor.png').convert('RGB')).astype(float)
M=np.asarray(Image.open(d+'/R-mask.png').convert('L').filter(ImageFilter.GaussianBlur(.8))).astype(float)/255
o=L*M[...,None]+F*(1-M[...,None])
Image.fromarray(o.clip(0,255).astype('uint8')).save('hero.webp',quality=90)
print(o[0,0],o[-1,-1])
