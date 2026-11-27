#!/usr/bin/env python3
"""Micro Harmonics hero: their own photo of a lineup of gold-plated millimeter-wave Faraday rotation isolators
(microharmonics.com/millimeter-wave-isolators, "Isolator-Lineup-compressed.png", 1478x853 with real alpha), cropped to its
alpha at native size (never upscaled), with a faint soft floor shadow baked in from the base contour. No relight, no
mirror (the parts carry lettering). Out: hero-cut.webp"""
import numpy as np
from PIL import Image, ImageFilter
im = Image.open('isolators.src.png').convert('RGBA')
im = im.crop(im.getbbox())
TH = im.height                                     # object height in the asset (displayed at <=560 css px)
im = im.resize((round(im.width * TH / im.height), TH), Image.LANCZOS)
W, H = im.size
PL, PR, PT, PB = round(W * .03), round(W * .16), round(H * .02), round(H * .07)
PW, PH = W + PL + PR, H + PT + PB
al = np.array(im.split()[3]) > 128
bot = np.array([np.where(al[:, x])[0].max() if al[:, x].any() else -1 for x in range(W)])
sh = np.zeros((PH, PW), np.float32)
yy = np.arange(PH)[:, None]
for x in range(W):
    if bot[x] < 0: continue
    b = bot[x] + PT
    # contact: tight band under the base
    sh[b - 6:b + int(H * .010), x + PL] = np.maximum(sh[b - 6:b + int(H * .010), x + PL], .9)
# cast: the base contour laid out to the right and slightly down, a few % of the height deep
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
c.save('hero-cut.webp', quality=88, method=6)
print('obj', W, H, 'asset', PW, PH, 'pads', PL, PR, PT, PB)
# wide object: trim the transparent right pad to the visible shadow + 20px so the lineup can sit larger
_i = Image.open('hero-cut.webp').convert('RGBA'); _a = np.array(_i)[..., 3]
_c = np.where(_a.max(0) > 6)[0]; _i = _i.crop((0, 0, min(_i.width, _c.max() + 20), _i.height)); _i.save('hero-cut.webp', quality=88, method=6)
print('trimmed to', _i.size)
