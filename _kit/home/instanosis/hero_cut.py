#!/usr/bin/env python3
"""Instanosis hero (PROD_BRIEF 2.3a): their own FXN 3-in-1 kit product photo (instanosis.com > Online Shop > FXN25,
https://instanosis.com/wp-content/uploads/2026/06/FXN25-kit-product-picture.jpg, 2048x2048 on plain white). Cut out on
the white ground: flood-fill from the border, keep the main group (kit box, strip pouches, strips; the loose sample cups
and droppers below are dropped), holes filled, edge eroded 1px so no white fringe survives, the photo's own grey floor
shading removed by a luminance-and-saturation test, then downscaled (below native). No mirror (it carries lettering; the
box front already faces the headline). A faint soft floor shadow is baked in. Out: hero-cut.webp"""
import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage as nd
src = Image.open('fxn.src.jpg').convert('RGB')
a = np.array(src).astype(int)
mn, mx = a.min(2), a.max(2)
xx = np.arange(a.shape[1])[None, :]
bg = (mn >= 236) | ((mx - mn < 10) & (mn >= 200)) | ((mx - mn < 9) & (mn >= 120) & (xx < 1050))   # white ground; the grey floor shading under the box
lab, n = nd.label(bg)
border = set(np.unique(np.r_[lab[0], lab[-1], lab[:, 0], lab[:, -1]])) - {0}
fg = ~np.isin(lab, list(border))
fg = nd.binary_opening(fg, iterations=2)
l2, n2 = nd.label(fg)
fg = l2 == (np.argmax(nd.sum(fg, l2, range(1, n2 + 1))) + 1)
fg = nd.binary_fill_holes(fg)
fg = nd.binary_erosion(fg, iterations=1)
m = Image.fromarray((fg * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(.7))
im = src.convert('RGBA'); im.putalpha(m)
im = im.crop(im.getbbox())
TW = 1060
im = im.resize((TW, round(im.height * TW / im.width)), Image.LANCZOS)
W, H = im.size
PL, PR, PT, PB = round(W * .03), round(W * .04), round(H * .03), round(H * .10)
PW, PH = W + PL + PR, H + PT + PB
al = np.array(im.split()[3]) > 128
cols = [x for x in range(W) if al[:, x].any()]
bot = np.array([np.where(al[:, x])[0].max() if al[:, x].any() else -1 for x in range(W)])
sh = np.zeros((PH, PW), np.float32)
for x in cols:
    b = bot[x] + PT
    sh[b - 8:b + int(H * .02), x + PL] = .9
s = Image.fromarray((sh * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(PW * .018))
sa = np.array(s).astype(np.float32) / 255 * .34 / .9
c = Image.fromarray(np.dstack([np.zeros((PH, PW, 3)), np.clip(sa, 0, 1) * 255]).astype(np.uint8), 'RGBA')
c.alpha_composite(im, (PL, PT))
c.save('hero-cut.webp', quality=88, method=6)
print('obj', W, H, 'asset', PW, PH)
