#!/usr/bin/env python3
"""Hero for lifescienceplus (PROD_BRIEF 3a): LifeScience PLUS's own product photo of the BloodSTOP iX Trauma Matrix
family (lifescienceplus.com/wp-content/uploads/2021/10/Trauma-Matrix-Product-Family-size.png, 1259x1057, real alpha):
the two gold pouches with the 3x24in Z-folded and 12x12in matrices. The size captions under the matrices (rows 931+)
are cropped away; edge alpha tightened; faint soft floor shadow baked in. Shown at or below native size. Not mirrored
(printed pouches). Out: hero-cut.webp"""
import numpy as np
from PIL import Image, ImageFilter
im = Image.open('tm-family.src.png').convert('RGBA').crop((0, 0, 1259, 931))
a = np.array(im).astype(np.float32)
al = a[..., 3] / 255
al = np.clip((al - .12) / .88, 0, 1)            # trim the faint halo of the original mask
a[..., 3] = al * 255
im = Image.fromarray(a.astype(np.uint8), 'RGBA'); im = im.crop(im.getbbox())
TW = im.width
TW = im.getbbox()[2] - im.getbbox()[0]
im = im.resize((TW, round(im.height * TW / im.width)), Image.LANCZOS)
W, H = im.size
PL, PR, PT, PB = round(W * .03), round(W * .10), round(H * .02), round(H * .09)
PW, PH = W + PL + PR, H + PT + PB
alb = np.array(im.split()[3]) > 128
bot = np.array([np.where(alb[:, x])[0].max() if alb[:, x].any() else -1 for x in range(W)])
sh = np.zeros((PH, PW), np.float32)
for x in range(W):
    if bot[x] < 0: continue
    b = bot[x] + PT
    sh[b - 8:b + int(H * .010), x + PL] = .9
cast = np.zeros_like(sh)
for x in range(0, W):
    if bot[x] < 0: continue
    for k in range(0, int(W * .08), 2):
        cx = x + PL + k; cy = bot[x] + PT + int(k * .12)
        if cx < PW and cy < PH:
            lo = max(0, cy - int(H * .03)); hi = cy + int(H * .012)
            cast[lo:hi, cx] = np.maximum(cast[lo:hi, cx], .5 * (1 - k / (W * .08)))
sh = np.maximum(sh, cast)
s = Image.fromarray((sh * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(PW * .022))
sa = np.array(s).astype(np.float32) / 255 * .36 / .9
c = Image.fromarray(np.dstack([np.zeros((PH, PW, 3)), np.clip(sa, 0, 1) * 255]).astype(np.uint8), 'RGBA')
c.alpha_composite(im, (PL, PT))
c.save('hero-cut.webp', quality=88, method=6)
print('obj', W, H, 'asset', PW, PH, 'pads', PL, PR, PT, PB)
