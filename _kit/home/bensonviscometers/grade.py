#!/usr/bin/env python3
"""Benson Viscometers hero (HOME_BRIEF update 2a): the firm's own product photograph of the BV1 semi-automated and BV200
automated clinical viscometers (bensonviscometers.com/wp-content/uploads/2026/04/BV1-BV200-PNG.png), already a real-alpha cutout.
Trimmed to the devices, the alpha edge tightened by a pixel, a faint floor reflection added below (DP/DJ: no box, no seam)."""
import numpy as np
from PIL import Image, ImageFilter
S=Image.open('raw/BV1-BV200-PNG.png').convert('RGBA')
S=S.crop(S.getbbox())
a=np.asarray(S).astype(np.float32)
al=a[...,3]/255.
c=a[...,:3]
h,w=al.shape
c=np.clip((c/255.-.5)*1.03+.5,0,1)*255
rh=int(h*.2)
rf=c[::-1][:rh]; ra=al[::-1][:rh]*(0.10*(1-np.linspace(0,1,rh))**1.7)[:,None]
gap=4
out=np.zeros((h+gap+rh,w,4),np.float32)
out[:h,:,:3]=c; out[:h,:,3]=al*255
out[h+gap:,:,:3]=rf; out[h+gap:,:,3]=ra*255
Image.fromarray(out.astype(np.uint8),'RGBA').save('hero.webp',quality=90,method=6,exact=False)
print(w,h+gap+rh)
