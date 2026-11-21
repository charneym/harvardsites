#!/usr/bin/env python3
"""Grade the hero photograph for Champaign Imaging (HOME_BRIEF update, option b).
Source: Pexels photo 7089013 by MART PRODUCTION, Pexels licence (free for commercial use, no attribution required):
https://www.pexels.com/photo/photo-of-ct-scan-medical-equipment-7089013/  (it shows an MRI scanner: gantry, bore and table)
CDN: https://images.pexels.com/photos/7089013/pexels-photo-7089013.jpeg?w=2600
Steps: crop to gantry + table head; soften the maker's lettering and model plate; lift clarity; light falls off away from the
bore (the white room sinks into the page ink); tonal tritone toward the logo teal #44887b and slate #4a6a8c; a long eased
superellipse alpha mask, so no rectangle edge exists (DJ/DP). Usage: python3 -I grade.py <source.jpg> <out.webp>"""
import sys
import numpy as np
from PIL import Image, ImageFilter

src, out = sys.argv[1], sys.argv[2]
im = Image.open(src).convert('RGB')
W, H = im.size
assert (W, H) == (2600, 1733), im.size

# soften the scanner maker's wordmark and model plate (feathered blur patches)
for box in [(1370, 455, 1470, 545), (1500, 450, 1610, 515)]:
    x0, y0, x1, y1 = box
    pad = 30
    reg = im.crop((x0 - pad, y0 - pad, x1 + pad, y1 + pad))
    bl = reg.filter(ImageFilter.GaussianBlur(14))
    m = Image.new('L', reg.size, 0)
    m.paste(255, (pad, pad, pad + x1 - x0, pad + y1 - y0))
    m = m.filter(ImageFilter.GaussianBlur(10))
    reg.paste(bl, (0, 0), m)
    im.paste(reg, (x0 - pad, y0 - pad))

# crop: table head on the left, whole gantry; pad right with the wall so the mask falls in the wall, not on the gantry
cx0, cy0, cx1, cy1 = 820, 170, 2600, 1640
cr = im.crop((cx0, cy0, cx1, cy1))
padR = 160
canvas = Image.new('RGB', (cr.width + padR, cr.height), (0, 0, 0))
canvas.paste(cr, (0, 0))
edge = np.asarray(cr)[:, -6:, :].mean(axis=1).astype(np.uint8)
canvas_a = np.asarray(canvas).copy()
canvas_a[:, cr.width:, :] = edge[:, None, :]
im = Image.fromarray(canvas_a)
w, h = im.size

a = np.asarray(im).astype(np.float32) / 255.0
L = 0.2126 * a[..., 0] + 0.7152 * a[..., 1] + 0.0722 * a[..., 2]
# clarity: local contrast from a large-radius unsharp mask
Lb = np.asarray(Image.fromarray((L * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(40))).astype(np.float32) / 255
L = np.clip(L + 1.6 * (L - Lb), 0, 1)
fine = np.asarray(Image.fromarray((L * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(2))).astype(np.float32) / 255
L = np.clip(L + 0.6 * (L - fine), 0, 1)

yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
# light: falls off from the bore / gantry face; the room walls and ceiling sink
bx, by = 1600 - cx0, 820 - cy0
d = np.sqrt(((xx - bx) / (w * 0.50)) ** 2 + ((yy - by) / (h * 0.62)) ** 2)
light = np.clip(1.05 - 0.78 * np.clip(d, 0, 1.4) ** 1.6, 0.18, 1)
# the bore glows a little
dbore = np.sqrt(((xx - (1610 - cx0)) / 210) ** 2 + ((yy - (870 - cy0)) / 300) ** 2)
glow = np.exp(-dbore ** 2) * 0.10
L = L ** 1.55  # deepen: white surfaces separate by their shading
L = np.clip(L * light + glow, 0, 1)
# S-curve
L = np.clip(L, 0, 1)
L = L * L * (3 - 2 * L) * 0.55 + L * 0.45

stops = [(0.00, (10, 21, 23)), (0.30, (22, 46, 54)), (0.55, (55, 104, 110)), (0.78, (134, 176, 176)), (1.00, (232, 241, 238))]
xs = np.array([s[0] for s in stops])
rgb = np.stack([np.interp(L, xs, np.array([s[1][c] for s in stops])) for c in range(3)], -1)
# slate in the lower body (logo's lower lobe colour), very slight
slate = np.array([74, 106, 140], np.float32)
wt = np.clip((yy / h - 0.55) / 0.45, 0, 1)[..., None] * 0.12 * (1 - np.abs(L[..., None] - 0.5) * 2)
rgb = rgb * (1 - wt) + slate * wt

# alpha: long eased superellipse centred on the gantry
gx, gy = 1500 - cx0, 900 - cy0
rx, ry = w * 0.56, h * 0.54
r = (np.abs((xx - gx) / rx) ** 2.4 + np.abs((yy - gy) / ry) ** 2.4) ** (1 / 2.4)
t = np.clip((1.02 - r) / 0.6, 0, 1)
alpha = t * t * t * (t * (t * 6 - 15) + 10)
# the table runs out of the frame on the left: a longer fade there
lf = np.clip((xx - w * 0.06) / (w * 0.40), 0, 1)
alpha *= lf * lf * lf * (lf * (lf * 6 - 15) + 10)
# near the mask edge the colour itself sinks to the page ink (#0a1517), so no faint bright rim survives a x6 boost
ink = np.array([10, 21, 23], np.float32)
rgb = ink + (rgb - ink) * (alpha ** 0.7)[..., None]
outa = np.dstack([np.clip(rgb, 0, 255), alpha * 255]).astype(np.uint8)
res = Image.fromarray(outa, 'RGBA')
res = res.resize((int(w * 0.92), int(h * 0.92)), Image.LANCZOS)
res.save(out, 'WEBP', quality=84, method=6)
print('wrote', out, res.size)
