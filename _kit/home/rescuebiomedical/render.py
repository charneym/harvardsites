#!/usr/bin/env python3
"""Hero (HOME_BRIEF update option a, the firm's own imagery): Rescue Biomedical's own 3D rendering of the A2D2 wearable,
published on rescuebiomedical.com ("3D rendering - product in development", p_01_dorsalmpi.1898.png, 1098x1098 on white).
The white ground is keyed out (the outer field and the enclosed gap inside the strap loop; nothing on the product), the
edge colours are decontaminated so no white fringe shows, and the product is composited at native size (never upscaled)
onto the page ink with a soft neutral light behind it and a faint spill of the logo's orange. Every edge eases into the
ink well inside the canvas, so there is no box edge (DJ/DP). Output: hero.webp."""
import numpy as np, pathlib
from PIL import Image, ImageFilter
from scipy import ndimage as nd
H = pathlib.Path(__file__).resolve().parent
INK = np.array([18, 21, 25], float)      # --ink #121519
LIFT = np.array([58, 64, 72], float)     # neutral studio light behind the product
ORG = np.array([241, 90, 36], float)     # logo orange #F15A24
a = np.asarray(Image.open(H/'src/p_01_dorsalmpi.1898.png').convert('RGB')).astype(float)
sh, sw = a.shape[:2]
wh = a.min(2) > 236
lab, n = nd.label(wh)
bgl = set([lab[0, 0], lab[400, 600]]) - {0}       # outer field + the gap inside the strap loop
bg = np.isin(lab, list(bgl))
# soft alpha: inside the background 0, grows over a 1.5px band using how far each edge pixel is from white
obj = ~bg
dist = nd.distance_transform_edt(bg)
lum = a.mean(2)
edge = (dist > 0) & (dist < 3)
al = obj.astype(float)
al[edge] = np.clip((255-lum[edge])/180.0, 0, 1)*np.clip(1-(dist[edge]-1)/2, 0, 1)
al = np.asarray(Image.fromarray((al*255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(.6))).astype(float)/255
al[dist >= 3] = 0
# decontaminate: colour of every pixel within 4px of the background comes from the nearest solid interior pixel
core = obj & (nd.distance_transform_edt(obj) > 3)
_, (iy, ix) = nd.distance_transform_edt(~core, return_indices=True)
rgb = a.copy()
near = ~core
rgb[near] = a[iy[near], ix[near]]*.75 + np.minimum(a[near], a[iy[near], ix[near]])*.25
W, HH = 1240, 1240
ox, oy = (W-sw)//2, (HH-sh)//2
yy, xx = np.mgrid[0:HH, 0:W].astype(np.float32)
img = np.ones((HH, W, 3))*INK
cx, cy = W*.5, HH*.48
e = ((xx-cx)/470)**2+((yy-cy)/470)**2
img = img+(LIFT-INK)*(np.exp(-e*1.6)*.95)[..., None]
e2 = ((xx-cx-40)/520)**2+((yy-cy-260)/200)**2
img = img+(ORG-INK)*(np.exp(-e2*2.0)*.10)[..., None]
reg = img[oy:oy+sh, ox:ox+sw]
img[oy:oy+sh, ox:ox+sw] = reg*(1-al[..., None])+rgb*al[..., None]
ex = np.minimum(xx, W-1-xx)/(W*.07); ey = np.minimum(yy, HH-1-yy)/(HH*.07)
k = np.clip(np.minimum(ex, ey), 0, 1); k = (k*k*(3-2*k))[..., None]
img = INK+(img-INK)*k
img = img+np.random.default_rng(3).uniform(-.5, .5, img.shape)*(k > 0.999)
Image.fromarray(np.clip(np.round(img), 0, 255).astype(np.uint8)).save(H/'hero.webp', quality=92, method=6)
print('hero', W, HH, 'product at', ox, oy, sw, sh)
