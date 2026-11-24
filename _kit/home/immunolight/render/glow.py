# Composite the converted UV light inside the crystal: g.png (glass, no core) + soft blurred glow from m.png (core mask).
# Usage: python3 glow.py g.png m.png out.png  (all renders share the page ink ground #0a1323)
import sys
from PIL import Image,ImageFilter
import numpy as np
g=np.asarray(Image.open(sys.argv[1]).convert('RGB')).astype(float)/255
m=Image.open(sys.argv[2]).convert('L')
def bl(r):return np.asarray(m.filter(ImageFilter.GaussianBlur(r))).astype(float)/255
c1=np.array([0.36,0.42,1.0]);c2=np.array([0.24,0.66,0.92]);c3=np.array([0.80,0.86,1.0])
glow=bl(90)[...,None]*c2*.42+bl(34)[...,None]*c1*.55+bl(16)[...,None]*c3*.30
o=1-(1-g)*(1-np.clip(glow,0,1))
Image.fromarray((np.clip(o,0,1)*255).astype('uint8')).save(sys.argv[3],lossless=True,quality=100,method=6)
# then: real alpha over the page ink, exact when composited back over #0a1323 (so the canvas glow can sit beneath it)
im=np.asarray(Image.open(sys.argv[3]).convert('RGB')).astype(float)
ink=np.array([10,19,35],float)
a=np.clip(((im-ink)/(255-ink)).max(axis=2),0,1)
a=np.where(a<0.004,0,a)
col=np.where(a[...,None]>0,ink+(im-ink)/np.maximum(a[...,None],1e-6),0)
out=np.dstack([np.clip(col,0,255),a*255]).astype('uint8')
Image.fromarray(out,'RGBA').save(sys.argv[3],lossless=True,quality=100,method=6)
