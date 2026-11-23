#!/usr/bin/env python3
"""Hero (HOME_BRIEF update option a, the firm's own photography): NeoLight's own Skylife product photograph, published on
theneolight.com with a real alpha channel (Skylife Alpha and Shadow 1000.webp). It is composited at native size (never
upscaled) onto the page ink, with a soft spill of its own blue light on the ground behind it. The glow and the photo's own
shadow fall to the ink well inside the canvas, so the art has no edge (DJ/DP). Output: hero.webp."""
import numpy as np, pathlib
from PIL import Image
H = pathlib.Path(__file__).resolve().parent
INK = np.array([8, 25, 44], float)        # --ink #08192c
BLUE = np.array([71, 161, 218], float)    # logo blue #47A1DA
src = Image.open(H/'skylife-src.webp').convert('RGBA')
sw, sh = src.size
W, HH = 1040, 700
ox, oy = (W-sw)//2, (HH-sh)//2+10
yy, xx = np.mgrid[0:HH, 0:W].astype(np.float32)
img = np.ones((HH, W, 3))*INK
# light spill: the lit gel surface sits at about (420,190) of the photo; a wide, low ellipse of its own blue on the ground
cx, cy = ox+430, oy+230
e = ((xx-cx)/430)**2+((yy-cy)/230)**2
g = np.exp(-e*2.2)*0.30
img = img+(BLUE-INK)*g[..., None]
a = np.array(src).astype(float)
al = a[..., 3:4]/255.0
reg = img[oy:oy+sh, ox:ox+sw]
img[oy:oy+sh, ox:ox+sw] = reg*(1-al)+a[..., :3]*al
# every border eases to the ink (nothing reaches the edge anyway)
ex = np.minimum(xx, W-1-xx)/(W*.08); ey = np.minimum(yy, HH-1-yy)/(HH*.08)
k = np.clip(np.minimum(ex, ey), 0, 1); k = (k*k*(3-2*k))[..., None]
img = INK+(img-INK)*k
img = img+np.random.default_rng(3).uniform(-.5,.5,img.shape)*(k>0.999)
Image.fromarray(np.clip(np.round(img), 0, 255).astype(np.uint8)).save(H/'hero.webp', quality=92, method=6)
print('hero', W, HH, 'product at', ox, oy, sw, sh)
