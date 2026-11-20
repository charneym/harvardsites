#!/usr/bin/env python3
"""Crop the render (render.js) tight around the tubes on the page ink, feather the margin to the ink, save hero.webp.
Usage: post.py render.png hero.webp"""
import sys, numpy as np
from PIL import Image
im = Image.open(sys.argv[1]).convert('RGB'); a = np.asarray(im).astype(np.float32)
ink = np.array([20,12,28], np.float32)
d = np.abs(a-ink).max(-1)
ys, xs = np.where(d > 10)
y0, y1, x0, x1 = ys.min(), ys.max(), xs.min(), xs.max()
pw, ph = int((x1-x0)*.12), int((y1-y0)*.07)
x0, x1, y0, y1 = max(0, x0-pw), min(a.shape[1], x1+pw), max(0, y0-ph), min(a.shape[0], y1+ph)
c = a[y0:y1, x0:x1]
hh, ww = c.shape[:2]
yy = np.linspace(0, 1, hh)[:, None]; xx = np.linspace(0, 1, ww)[None, :]
def ss(x): x = np.clip(x, 0, 1); return x*x*(3-2*x)
m = ss(xx/.08)*ss((1-xx)/.08)*ss(yy/.05)*ss((1-yy)/.05)
c = ink + (c-ink)*m[..., None]
o = np.dstack([c, 255*m])
Image.fromarray(np.clip(o+.5, 0, 255).astype(np.uint8), 'RGBA').save(sys.argv[2], quality=94, method=6)
print('wrote', sys.argv[2], ww, hh)
