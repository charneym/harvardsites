#!/usr/bin/env python3
"""TOPFIX hero mock for hpf-elektronik (same treatment as tas-chambers/hero_cut.py): HPF's own blister inspection system
EOK FA photo (https://hpf-elektronik.de/files/cto_layout/img/produkte/pic_FA_frei.png, 1800x1081, their own real-alpha
cut-out, object 756x1004), cropped to its alpha and kept at native size (never upscaled; displayed at <=560 css px).
Their own soft contact shadow under the base plates stays; a faint soft floor shadow is baked in from the base contour as
on tas-chambers. No relight, no mirror (it carries the HPF lettering). Out: hero-cut.webp"""
import numpy as np
from PIL import Image, ImageFilter
im = Image.open('pic_FA_frei.src.png').convert('RGBA')
im = im.crop(im.getbbox())
W, H = im.size
PL, PR, PT, PB = round(W * .03), round(W * .16), round(H * .02), round(H * .06)
PW, PH = W + PL + PR, H + PT + PB
al = np.array(im.split()[3]) > 128
bot = np.array([np.where(al[:, x])[0].max() if al[:, x].any() else -1 for x in range(W)])
sh = np.zeros((PH, PW), np.float32)
for x in range(W):
    if bot[x] < 0: continue
    b = bot[x] + PT
    sh[b - 6:b + int(H * .010), x + PL] = np.maximum(sh[b - 6:b + int(H * .010), x + PL], .9)
cast = np.zeros_like(sh)
for x in range(W):
    if bot[x] < 0: continue
    for k in range(0, int(W * .14), 2):
        cx = x + PL + k; cy = bot[x] + PT + int(k * .10)
        if cx < PW and cy < PH:
            cast[max(0, cy - int(H * .03)):cy + int(H * .012), cx] = np.maximum(cast[max(0, cy - int(H * .03)):cy + int(H * .012), cx], .55 * (1 - k / (W * .14)))
sh = np.maximum(sh, cast)
s = Image.fromarray((sh * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(PW * .022))
sa = np.array(s).astype(np.float32) / 255 * .34 / .9
c = Image.fromarray(np.dstack([np.zeros((PH, PW, 3)), np.clip(sa, 0, 1) * 255]).astype(np.uint8), 'RGBA')
c.alpha_composite(im, (PL, PT))
c.save('hero-cut.webp', quality=90, method=6)
print('obj', W, H, 'asset', PW, PH, 'pads', PL, PR, PT, PB)
