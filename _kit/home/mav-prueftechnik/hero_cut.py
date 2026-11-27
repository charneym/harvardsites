#!/usr/bin/env python3
"""TOPFIX hero mock for mav-prueftechnik (same treatment as tas-chambers/hero_cut.py): MAV's own ClipGunTester CGT photo
(https://mav-germany.de/Katalog3_1.jpg, 2309x1527, whole product on plain white). Cut out cleanly: the white ground is
flood-filled from the border (mask identical at thresholds 228..250), plus the pure-white pocket enclosed by the sensor
cable loop (the only large enclosed white region; small on-product highlights and the logo letters stay), the largest
component kept, small holes filled, edge eroded 1px so no white fringe survives, then downscaled (still below native).
Faint soft floor shadow baked in from the base contour as on tas-chambers, taken only where the object meets the floor
(not under the cable hanging in the air). No mirror (it carries lettering; it is shown front-on). Out: hero-cut.webp"""
import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage as nd
src = Image.open('Katalog3_1.src.jpg').convert('RGB')
a = np.array(src).astype(int)
bg = a.min(2) >= 246
lab, n = nd.label(bg)
sz = nd.sum(bg, lab, range(1, n + 1))
border = set(np.unique(np.r_[lab[0], lab[-1], lab[:, 0], lab[:, -1]])) - {0}
keep_bg = border | {i for i in range(1, n + 1) if sz[i - 1] > 20000}        # + the cable-loop pocket (49665 px)
fg = ~np.isin(lab, list(keep_bg))
l2, n2 = nd.label(fg)
fg = l2 == (np.argmax(nd.sum(fg, l2, range(1, n2 + 1))) + 1)
fg = nd.binary_erosion(fg, iterations=1)
m = Image.fromarray((fg * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(.6))
im = src.convert('RGBA'); im.putalpha(m)
im = im.crop(im.getbbox())
TH = 820                                      # object height in the asset (native 1381; displayed at <=410 css px)
im = im.resize((round(im.width * TH / im.height), TH), Image.LANCZOS)
W, H = im.size
PL, PR, PT, PB = round(W * .02), round(W * .07), round(H * .02), round(H * .08)
PW, PH = W + PL + PR, H + PT + PB
al = np.array(im.split()[3]) > 128
bot = np.array([np.where(al[:, x])[0].max() if al[:, x].any() else -1 for x in range(W)])
bot[bot < bot.max() - H * .05] = -1                                       # only where it stands on the floor
sh = np.zeros((PH, PW), np.float32)
for x in range(W):
    if bot[x] < 0: continue
    b = bot[x] + PT
    sh[b - 6:b + int(H * .012), x + PL] = np.maximum(sh[b - 6:b + int(H * .012), x + PL], .9)
cast = np.zeros_like(sh)
CL = int(W * .06)
for x in range(W):
    if bot[x] < 0: continue
    for k in range(0, CL, 2):
        cx = x + PL + k; cy = bot[x] + PT + int(k * .25)
        if cx < PW and cy < PH:
            cast[max(0, cy - int(H * .03)):cy + int(H * .015), cx] = np.maximum(cast[max(0, cy - int(H * .03)):cy + int(H * .015), cx], .55 * (1 - k / CL))
sh = np.maximum(sh, cast)
s = Image.fromarray((sh * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(PW * .016))
sa = np.array(s).astype(np.float32) / 255 * .34 / .9
c = Image.fromarray(np.dstack([np.zeros((PH, PW, 3)), np.clip(sa, 0, 1) * 255]).astype(np.uint8), 'RGBA')
c.alpha_composite(im, (PL, PT))
c.save('hero-cut.webp', quality=88, method=6)
print('obj', W, H, 'asset', PW, PH, 'pads', PL, PR, PT, PB)
