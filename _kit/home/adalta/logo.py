#!/usr/bin/env python3
"""Redraw the AdAlta logo (their 2560x767 JPG, adalta.com.au) as clean filled SVG paths (PRINCIPLES DR2), traced with
potrace: the white AdAlta wordmark, and the red peak mark in its three tones (bright red facets, two deeper red facets).
Output: logo-inner.txt (paths in a 0 0 2200 470 box, origin at the mark's left edge)."""
import numpy as np, potrace
from PIL import Image, ImageFilter
im=Image.open('logo-src.jpg').convert('RGB')
im=im.resize((im.width*2,im.height*2),Image.LANCZOS).filter(ImageFilter.GaussianBlur(1.2))
a=np.asarray(im).astype(int);r,g,b=a[...,0],a[...,1],a[...,2]
OX,OY=186*2-8,150*2-8  # offset so the mark starts near 0
def trace(mask,alpha=1.0):
    bm=potrace.Bitmap(~mask);pl=bm.trace(turdsize=40,alphamax=alpha,opticurve=True,opttolerance=0.2)
    out=[]
    for c in pl:
        s=c.start_point;d='M%.0f %.0f'%((s.x-OX)/2,(s.y-OY)/2)
        for seg in c.segments:
            if seg.is_corner:d+='L%.0f %.0f L%.0f %.0f'%((seg.c.x-OX)/2,(seg.c.y-OY)/2,(seg.end_point.x-OX)/2,(seg.end_point.y-OY)/2)
            else:d+='C%.0f %.0f %.0f %.0f %.0f %.0f'%((seg.c1.x-OX)/2,(seg.c1.y-OY)/2,(seg.c2.x-OX)/2,(seg.c2.y-OY)/2,(seg.end_point.x-OX)/2,(seg.end_point.y-OY)/2)
        out.append(d+'Z')
    return ' '.join(out)
white=(a.min(-1)>150)
red=(r>120)&(g<80)
bright=red&(r>205)
deep=red&~bright
dark=deep&(r<172)
mid=deep&~dark
# the mark: a deep-red silhouette under the bright faces (faces are straight-edged: alphamax 0 keeps corners sharp)
W=trace(white,1.0)
M=trace(red,0.0);B=trace(bright,0.0);D=trace(dark,0.0)
inner=('<path class="mk0" fill="#b2282f" d="%s"/><path class="mk2" fill="#a0262e" d="%s"/><path class="mk1" fill="#ed1c24" d="%s"/>'
       '<path class="wm" fill="currentColor" d="%s"/>')%(M,D,B,W)
open('logo-inner.txt','w').write(inner);print(len(inner))
xs=np.nonzero(white.any(0))[0];ys=np.nonzero((white|red).any(1))[0];xr=np.nonzero(red.any(0))[0]
print('box x',(xr.min()-OX)/2,(xs.max()-OX)/2,'y',(ys.min()-OY)/2,(ys.max()-OY)/2,'wm x0',(xs.min()-OX)/2)
