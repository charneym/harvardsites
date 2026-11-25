#!/usr/bin/env python3
"""Hero: PriTel's own product photograph of the FFL femtosecond fiber laser (pritel.com/images/ffl.jpg), cut out from its white
studio ground to real alpha (flood fill from the borders), so it sits on the page ink with no box edge. Usage: cut.py src out"""
import sys, numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage
im=Image.open(sys.argv[1]).convert('RGB'); a=np.asarray(im).astype(float)
bg=a.min(2)>=244
lab,n=ndimage.label(bg)
edge=set(np.unique(np.r_[lab[0],lab[-1],lab[:,0],lab[:,-1]]))-{0}
fg=~np.isin(lab,list(edge))
fg=ndimage.binary_fill_holes(fg)
fg=ndimage.binary_erosion(fg,iterations=2)
al=Image.fromarray((fg*255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(1.2))
ys,xs=np.where(fg)
o=im.copy(); o.putalpha(al)
o=o.crop((max(0,xs.min()-4),max(0,ys.min()-4),min(im.size[0],xs.max()+5),min(im.size[1],ys.max()+5)))
W=1800; o=o.resize((W,round(W*o.size[1]/o.size[0])),Image.LANCZOS)
o.save(sys.argv[2],quality=90,method=6); print(o.size)
