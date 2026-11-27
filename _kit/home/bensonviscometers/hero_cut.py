#!/usr/bin/env python3
"""TOPFIX hero mock for bensonviscometers (same treatment as tas-chambers/hero_cut.py): Benson's own clinical
viscometer photo (https://bensonviscometers.com/wp-content/uploads/2026/04/200-e1787845208656.png, 2000x1710,
product on plain white). Cut out cleanly: the white ground is flood-filled from the border (the mask is identical at
thresholds 240..252), the largest component is kept (drops the UKCA/CE/FDA marks), holes filled, edge eroded 1px so
no white fringe survives, then downscaled (still below native). Faint soft floor shadow baked in from the base contour,
as on tas-chambers. No mirror (it carries lettering; its front already faces the headline). Out: hero-cut.webp"""
import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage as nd
src = Image.open('benson.src.png').convert('RGB')
a = np.array(src).astype(int)
bg = a.min(2) >= 248
lab, n = nd.label(bg)
border = set(np.unique(np.r_[lab[0], lab[-1], lab[:, 0], lab[:, -1]])) - {0}
fg = ~np.isin(lab, list(border))
l2, n2 = nd.label(fg)
fg = l2 == (np.argmax(nd.sum(fg, l2, range(1, n2 + 1))) + 1)
fg = nd.binary_fill_holes(fg)
fg = nd.binary_erosion(fg, iterations=1)
m = Image.fromarray((fg * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(.6))
im = src.convert('RGBA'); im.putalpha(m)
im = im.crop(im.getbbox())
TH = 1040                                     # object height in the asset (native 1313; displayed at <=524 css px)
im = im.resize((round(im.width * TH / im.height), TH), Image.LANCZOS)
W, H = im.size
PL, PR, PT, PB = round(W * .03), round(W * .12), round(H * .02), round(H * .07)
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
    for k in range(0, int(W * .10), 2):
        cx = x + PL + k; cy = bot[x] + PT + int(k * .10)
        if cx < PW and cy < PH:
            cast[max(0, cy - int(H * .03)):cy + int(H * .012), cx] = np.maximum(cast[max(0, cy - int(H * .03)):cy + int(H * .012), cx], .55 * (1 - k / (W * .10)))
sh = np.maximum(sh, cast)
s = Image.fromarray((sh * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(PW * .022))
sa = np.array(s).astype(np.float32) / 255 * .34 / .9
c = Image.fromarray(np.dstack([np.zeros((PH, PW, 3)), np.clip(sa, 0, 1) * 255]).astype(np.uint8), 'RGBA')
c.alpha_composite(im, (PL, PT))
c.save('hero-cut.webp', quality=88, method=6)
print('obj', W, H, 'asset', PW, PH, 'pads', PL, PR, PT, PB)
