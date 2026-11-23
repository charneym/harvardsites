#!/usr/bin/env python3
"""Redraw the ZyVersa Therapeutics logo (their 600x281 PNG from zyversa.com) as clean filled SVG paths (PRINCIPLES DR2):
three colour layers (blue wordmark, green S-curve, grey THERAPEUTICS descriptor), each traced with marching squares on a
x4 upsampled coverage map and simplified. Colours are set by CSS variables so the mark stays at full strength on the ink."""
import numpy as np
from PIL import Image
from skimage import measure
SRC='logo-src.png'  # zyversa.com files/images/logo.png
a=np.array(Image.open(SRC).convert('RGBA')).astype(float)
rgb=a[...,:3];al=a[...,3]/255
C={'b':(13,114,187),'g':(139,197,64),'t':(90,90,90)}
d={k:((rgb-np.array(v))**2).sum(-1) for k,v in C.items()}
near=np.argmin(np.stack([d['b'],d['g'],d['t']]),0)
H,W=al.shape;K=4
out=[]
for i,k in enumerate('bgt'):
    cov=al*(near==i)
    if k=='t':cov[:196]=0
    else:cov[196:]=0
    im=Image.fromarray((cov*255).astype(np.uint8)).resize((W*K,H*K),Image.BICUBIC)
    m=np.pad(np.array(im).astype(float)/255,1)
    segs=[]
    for c in measure.find_contours(m,.5):
        c=measure.approximate_polygon(c,.35)
        if len(c)<4:continue
        pts=' '.join('%.2f %.2f'%((x-1)/K,(y-1)/K) for y,x in c)
        segs.append('M'+pts.replace(' ',',',1)+'Z')
    out.append('<path class="l%s" fill-rule="evenodd" d="%s"/>'%(k,''.join(segs)))
inner=''.join(out)
open('logo-inner.txt','w').write(inner)
ys=np.where(al.max(1)>.1)[0];xs=np.where(al.max(0)>.1)[0]
print('bbox',xs.min(),ys.min(),xs.max(),ys.max(),'len',len(inner))
