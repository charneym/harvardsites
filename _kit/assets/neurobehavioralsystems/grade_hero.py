#!/usr/bin/env python3
"""Grade the hero photo for neurobehavioralsystems.
Source: Pexels, "Man in white scrub suit getting a checkup" by cottonbro studio,
https://www.pexels.com/photo/man-in-white-scrub-suit-getting-a-checkup-8879116/ (Pexels licence).
Usage: python3 grade_hero.py <source.jpg> <out.webp>
Crops to the participant, electrode and stimulus monitor; compresses highlights; pulls shadows to the site ink;
keeps part of the original colour (tonal depth); writes a long eased radial feather as real alpha, so no edge exists."""
import sys, numpy as np
from PIL import Image, ImageFilter
INK = np.array([11, 11, 34], float)
src, out = sys.argv[1], sys.argv[2]
im = Image.open(src).convert("RGB")
W, H = im.size
box = (0, int(H*.06), int(W*.95), int(H*.82))  # wide crop: the falloff reaches ~0 well before every edge
im = im.crop(box)
OW = 1800; OH = round(OW*im.height/im.width)
im = im.resize((OW, OH), Image.LANCZOS)
a = np.asarray(im).astype(float)/255
L = (a*[.2126,.7152,.0722]).sum(-1, keepdims=True)
# keep 45% of the colour, cool it toward the periwinkle of the brand
col = L + (a-L)*.45
tint = np.array([.86,.92,1.12])
col = col*tint
# tone curve: lift nothing, compress highlights (scrubs, wall) to ~0.74, deepen mids slightly
def curve(x):
    x = np.clip(x,0,1.2)
    y = x**1.12
    return .74*(1-np.exp(-2.1*y))/(1-np.exp(-2.1))
col = curve(col)
ink = INK/255
# shadows toward ink: blend by darkness
d = np.clip(1-L/0.45,0,1)**1.2
col = col*(1-d) + ink*d
# a soft Gaussian falloff centred on the head and electrode (no plateau, so no disc or "porthole" boundary),
# narrower to the right so the monitor and its bezel fade out gradually instead of ending on a straight line (DJ, DP)
yy, xx = np.mgrid[0:OH, 0:OW]
cx, cy = OW*.44, OH*.44
sx = np.where(xx < cx, OW*.22, OW*.155); sy = np.where(yy < cy, OH*.24, OH*.21)
m = np.exp(-(((xx-cx)/sx)**2 + ((yy-cy)/sy)**2))
# (no threshold: the Gaussian runs out smoothly, so no boundary forms)
# and a guaranteed fall to zero alpha well inside every image edge
ed = np.minimum.reduce([xx/OW, 1-xx/OW, yy/OH, 1-yy/OH])
ed = np.clip(ed/.26, 0, 1); ed = ed*ed*(3-2*ed)
m = (m*ed)[..., None]**.9
# real alpha: the feather is the alpha channel, so the photo has no ground of its own to mismatch the page ink (DP)
rgb = np.clip(col*255+np.random.uniform(-.6,.6,col.shape),0,255).astype(np.uint8)
al = np.clip(m[...,0]*255,0,255).astype(np.uint8)
Image.fromarray(np.dstack([rgb,al]),"RGBA").save(out, "WEBP", quality=88, alpha_quality=100, method=6)
print(out, OW, OH)
