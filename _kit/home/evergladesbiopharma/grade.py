#!/usr/bin/env python3
"""Grade the hero photo: Unsplash photo-1755039226741-640c908eb751 by Andrew Lvov
(https://unsplash.com/photos/close-up-of-a-blue-human-eye-with-detailed-iris-vKlSTN5K6Ck, Unsplash licence).
Usage: grade.py <source.jpg> <out.webp>. Lowers the skin toward the page ink, keeps the iris and the fine scleral
vessels at full tonal depth, and feathers everything to real alpha with a long eased elliptical mask (DJ/DP)."""
import sys, numpy as np
from PIL import Image, ImageFilter
src, out = sys.argv[1], sys.argv[2]
im = Image.open(src).convert('RGB')
W, H = im.size
a = np.asarray(im).astype(np.float32) / 255
yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
cx, cy = W * .535, H * .47          # iris centre
# eye-shaped weight: the iris and sclera stay bright, the skin around the lids recedes
ex = (xx - cx) / (W * .50); ey = (yy - (cy + H * .02)) / (H * .25)
eye = np.clip(1 - np.sqrt(ex ** 2 + ey ** 2), 0, 1)
eye = np.asarray(Image.fromarray((eye * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(60))).astype(np.float32) / 255
eye = eye ** .7
lum = a @ np.array([.2126, .7152, .0722], np.float32)
# cool, slightly desaturated grade with depth: shadows toward ink #07131f, keep highlights neutral
ink = np.array([7, 19, 31], np.float32) / 255
sat = .62 + .38 * eye
g = lum[..., None] + (a - lum[..., None]) * sat[..., None]
g = g * np.array([.93, .98, 1.03], np.float32)
expo = .50 + .50 * eye
g = g * expo[..., None]
g = np.clip(g, 0, 1) ** 1.08
t = (1 - np.clip(lum, 0, 1)) ** 2.2 * .35
g = g * (1 - t[..., None]) + ink * t[..., None]
# long eased elliptical alpha: no edge anywhere
mx = (xx - cx) / (W * .52); my = (yy - cy) / (H * .56)
r = np.sqrt(mx ** 2 + my ** 2)
s = np.clip((1.0 - r) / .62, 0, 1)
al = s * s * (3 - 2 * s)
al = al ** 1.25
rgba = np.dstack([np.clip(g, 0, 1), al])
o = Image.fromarray((rgba * 255 + .5).astype(np.uint8), 'RGBA')
o = o.crop((0, int(H * .02), W, int(H * .98)))
o.save(out, 'WEBP', quality=88, method=6)
print(out, o.size)
