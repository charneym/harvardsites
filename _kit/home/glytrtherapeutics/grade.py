#!/usr/bin/env python3
"""Hero (HOME_BRIEF update, option b): a real scanning electron micrograph of T cells, National Cancer Institute on Unsplash
(Unsplash License, free): https://unsplash.com/photos/pink-cells-on-green-structure-LnvCEXQwC-o
CDN https://images.unsplash.com/photo-1581594294883-5109c202942f (3900x3900). Their own caption: dendritic cells
(pseudo-coloured green) interacting with T cells (pseudo-coloured pink).
The pseudo-colour is re-mapped to GlyTR's palette: the dendritic cell to a deep steel blue from their logo blue (#5a96d2 /
#0070c0), the T cells to a muted rose from their site's secondary accent (#d81e5b). The black SEM ground becomes the site ink,
and the image feathers into that ink on every side that can fall inside the viewport (DJ), placed right of centre (DI).
Output: hero.webp 2880x1800. Run: python3 _kit/home/glytrtherapeutics/grade.py"""
import pathlib, numpy as np
from PIL import Image, ImageFilter
H = pathlib.Path(__file__).resolve().parent
src = Image.open(H / 'sem_src.jpg').convert('RGB')
S = 1880  # displayed size of the square micrograph inside the 2880x1800 canvas
im = np.asarray(src.resize((S, S), Image.LANCZOS)).astype(np.float32) / 255
r, g, b = im[..., 0], im[..., 1], im[..., 2]
L = (0.30 * r + 0.55 * g + 0.15 * b)
L = np.clip(L / 0.86, 0, 1)
# soft mask: pink T cells (red > green) vs green dendritic cell
m = np.clip((r - g - 0.03) / 0.16, 0, 1)
m = np.asarray(Image.fromarray((m * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(2.2))).astype(np.float32) / 255
def ramp(Lv, stops):
    xs = np.array([s[0] for s in stops]); out = np.zeros(Lv.shape + (3,), np.float32)
    for c in range(3):
        out[..., c] = np.interp(Lv, xs, np.array([s[1][c] for s in stops]) / 255)
    return out
ink = (7, 19, 33)
blue = ramp(L, [(0, ink), (.18, (12, 38, 66)), (.45, (34, 88, 140)), (.72, (98, 152, 206)), (1, (214, 230, 244))])
rose = ramp(L, [(0, ink), (.16, (50, 22, 40)), (.42, (132, 52, 84)), (.7, (206, 112, 140)), (1, (248, 220, 228))])
out = blue * (1 - m[..., None]) + rose * m[..., None]
# canvas
W, Hh = 2880, 1800
can = np.zeros((Hh, W, 3), np.float32); can[...] = np.array(ink) / 255
x0, y0 = W - S + 90, (Hh - S) // 2  # the micrograph sits on the right; a little runs off the right edge
xs0, ys0 = max(0, -x0), max(0, -y0)
xe, ye = min(S, W - x0), min(S, Hh - y0)
patch = out[ys0:ye, xs0:xe]
ph, pw = patch.shape[:2]
# feather: smooth fade over the left 46% of the micrograph and a little at top/bottom, so no rectangle edge ever shows
yy, xx = np.mgrid[0:ph, 0:pw].astype(np.float32)
def ss(a, b0, b1):
    t = np.clip((a - b0) / (b1 - b0), 0, 1); return t * t * (3 - 2 * t)
alpha = ss(xx, 0, pw * .5) * ss(yy, 0, ph * .1) * ss(ph - 1 - yy, 0, ph * .1)
X0, Y0 = x0 + xs0, y0 + ys0
reg = can[Y0:Y0 + ph, X0:X0 + pw]
can[Y0:Y0 + ph, X0:X0 + pw] = reg * (1 - alpha[..., None]) + patch * alpha[..., None]
# a faint blue atmosphere behind the cells, so the dark ground isn't flat black
gy, gx = np.mgrid[0:Hh, 0:W].astype(np.float32)
d = np.sqrt(((gx - W * .72) / (W * .5)) ** 2 + ((gy - Hh * .5) / (Hh * .7)) ** 2)
can += (np.clip(1 - d, 0, 1) ** 2)[..., None] * np.array([6, 20, 38], np.float32)[None, None] / 255
# fine grain against banding
rng = np.random.default_rng(7); can += (rng.random(can.shape[:2], np.float32)[..., None] - .5) * (2.2 / 255)
Image.fromarray((np.clip(can, 0, 1) * 255 + .5).astype(np.uint8)).save(H / 'hero.webp', quality=90, method=6)
print('hero.webp', (H / 'hero.webp').stat().st_size)
