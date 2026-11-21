#!/usr/bin/env python3
"""Grade the Ortholevo hero photograph (HOME_BRIEF update 2026-11-20, option b).
Source: Unsplash photo cbdRcyFsCwI "X-ray of a human shoulder and upper arm" by Stefani Medina, Unsplash License (free for
commercial use, no attribution required): https://unsplash.com/photos/x-ray-of-a-human-shoulder-and-upper-arm-cbdRcyFsCwI
CDN: https://images.unsplash.com/photo-1769204978162-55d6fdb408ce?fm=jpg&q=90&w=3000  (3000x2969)
Steps: crop to the shoulder joint (clavicle, acromion, glenoid, humeral head, upper humerus); the bright rib cage and spine on the
left fall away; clarity; tonal tritone from the page ink through the logo navy #1f4a70 to bone; a long eased alpha mask so no
rectangle edge exists, and the colour sinks to the ink before alpha does (DJ/DP).  Usage: python3 -I grade.py <src.jpg> <out.webp>"""
import sys
import numpy as np
from PIL import Image, ImageFilter
src, out = sys.argv[1], sys.argv[2]
im = Image.open(src).convert('L')
assert im.size == (3000, 2969), im.size
cx0, cy0, cx1, cy1 = 760, 430, 2700, 2969
im = im.crop((cx0, cy0, cx1, cy1)).filter(ImageFilter.MedianFilter(5))
w, h = im.size
L = np.asarray(im).astype(np.float32) / 255
Lb = np.asarray(im.filter(ImageFilter.GaussianBlur(50))).astype(np.float32) / 255
L = np.clip(L + 0.9 * (L - Lb), 0, 1)
fine = np.asarray(Image.fromarray((L * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(2))).astype(np.float32) / 255
L = np.clip(L + 0.15 * (L - fine), 0, 1)
# pad with the film's own black so the mask can fade to zero inside the image on every side (no cut edge, DP)
pr, pt, pb = int(w * 0.28), int(h * 0.16), int(h * 0.10)
L = np.pad(L, ((pt, pb), (0, pr)), constant_values=0)
cy0 -= pt
h, w = L.shape
yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
# the joint is the light source of the composition: the humeral head / glenoid stay brightest, the ribs sink
jx, jy = 1930 - cx0, 1240 - cy0
d = np.sqrt(((xx - jx) / (w * 0.62)) ** 2 + ((yy - jy) / (h * 0.62)) ** 2)
light = np.clip(1.08 - 0.7 * np.clip(d, 0, 1.5) ** 1.7, 0.2, 1)
# ribs / lung field on the left: pull them down hard so nothing bright sits toward the headline (DI)
rib = np.clip((xx - w * 0.06) / (w * 0.38), 0, 1)
rib = rib * rib * (3 - 2 * rib)
L = L ** 1.25 * light * (0.32 + 0.68 * rib)
L = np.clip(L, 0, 1)
L = L * L * (3 - 2 * L) * 0.5 + L * 0.5
stops = [(0.00, (7, 17, 28)), (0.22, (16, 38, 60)), (0.45, (38, 80, 118)), (0.70, (126, 160, 190)), (0.88, (205, 220, 232)), (1.00, (240, 244, 247))]
xs = np.array([s[0] for s in stops])
rgb = np.stack([np.interp(L, xs, np.array([s[1][c] for s in stops], np.float32)) for c in range(3)], -1)
# alpha: long eased superellipse around the joint and upper arm
gx, gy = 1900 - cx0, 1500 - cy0
rx, ry = w * 0.46, h * 0.50
r = np.sqrt(((xx - gx) / rx) ** 2 + ((yy - gy) / ry) ** 2)
t = np.clip((1.0 - r) / 0.7, 0, 1)
alpha = t * t * t * (t * (t * 6 - 15) + 10)
lf = np.clip((xx - w * 0.0) / (w * 0.40), 0, 1)
alpha *= lf * lf * lf * (lf * (lf * 6 - 15) + 10)
bf = np.clip((h * 0.97 - yy) / (h * 0.30), 0, 1)
alpha *= bf * bf * (3 - 2 * bf)
ink = np.array([7, 17, 28], np.float32)
rgb = ink + (rgb - ink) * (alpha ** 1.1)[..., None]
outa = np.dstack([np.clip(rgb, 0, 255), alpha * 255]).astype(np.uint8)
res = Image.fromarray(outa, 'RGBA').resize((int(w * 0.6), int(h * 0.6)), Image.LANCZOS)
res.save(out, 'WEBP', quality=86, method=6)
print('wrote', out, res.size)
