#!/usr/bin/env python3
"""Hero for huneo (PROD_BRIEF 3a): Huneo's own photo of three WRAP System modules (huneo.us home page,
storage.googleapis.com/production-sitebuilder-v1-0-0/820/1762820/QwTOUJ2n/7d92a4dc991f4b38b9273dcfce30fad2, 2798x2264,
already a real-alpha cut-out). Edge alpha tightened slightly (no light fringe on the dark ground), downscaled (well below
native), and a faint soft floor shadow baked in from the base contour, as on bensonviscometers/tas-chambers.
Not mirrored: every module carries the embossed Huneo mark. Out: hero-cut.webp"""
import numpy as np
from PIL import Image, ImageFilter
im = Image.open('wrap-pods.src.png').convert('RGBA')
a = np.array(im).astype(np.float32)
al = a[..., 3] / 255
al = np.clip((al - .12) / .88, 0, 1)            # trim the faint halo of the original mask
a[..., 3] = al * 255
im = Image.fromarray(a.astype(np.uint8), 'RGBA'); im = im.crop(im.getbbox())
TW = 1320
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
