#!/usr/bin/env python3
"""Raloid hero: a studio render of a precision-machined compression mould for brake-shoe friction linings, the production
tooling Raloid builds for friction-material makers (render_mould.py, Blender/Cycles: a ground-steel lower die block with
three lining pockets, four chrome guide pillars with bronze bushes, the upper punch plate raised on them, black-oxide cap
screws in counterbores, lifting eyebolts, cartridge-heater bores with braided leads; studio lighting, shadow-catcher
floor). Their own published photos are low-resolution scans of machines in a cluttered shop, so (b) applies. The faint
floor alpha is faded to zero with a soft elliptical mask around the object (contact shadows kept), then cropped; the
heater leads run out of frame on the right, so the right-hand strip fades. Out: hero-cut.webp"""
import numpy as np
from PIL import Image, ImageFilter
im = Image.open('render.src.png').convert('RGBA')
A = np.array(im).astype(np.float32)
a = A[..., 3]
obj = a > 40
ys, xs = np.where(obj)
cx, cy = (xs.min() + xs.max()) / 2, (ys.min() + ys.max()) / 2 + (ys.max() - ys.min()) * .12
rx, ry = (xs.max() - xs.min()) * .66, (ys.max() - ys.min()) * .7
Y, X = np.mgrid[0:a.shape[0], 0:a.shape[1]]
d = np.sqrt(((X - cx) / rx) ** 2 + ((Y - cy) / ry) ** 2)
fall = np.clip((1.25 - d) / .45, 0, 1); fall = fall * fall * (3 - 2 * fall)
near = np.array(Image.fromarray((obj * 255).astype(np.uint8)).filter(ImageFilter.MaxFilter(9)).filter(ImageFilter.GaussianBlur(40))).astype(np.float32) / 255
keep = np.maximum(obj.astype(np.float32), np.maximum(fall * .55, near))
A[..., 3] = a * np.where(a > 40, 1, keep)
out = Image.fromarray(np.clip(A, 0, 255).astype(np.uint8), 'RGBA')
a2 = np.array(out.split()[3]); ys, xs = np.where(a2 > 6); pad = 20
out = out.crop((max(0, xs.min() - pad), max(0, ys.min() - pad), min(out.width, xs.max() + pad), min(out.height, ys.max() + pad)))
# fade the faint floor toward every edge of the asset so no straight boundary can show
B = np.array(out).astype(np.float32); al = B[..., 3]; h, w = al.shape
yy, xx = np.mgrid[0:h, 0:w]
e = np.minimum.reduce([xx / (w * .14), (w - 1 - xx) / (w * .14), yy / (h * .14), (h - 1 - yy) / (h * .2)]).clip(0, 1)
e = e * e * (3 - 2 * e)
B[..., 3] = np.where(al > 40, al, al * e)
# floor reflections reach the bottom of the frame: fade everything below the objects' contact line
rows = np.where((al > 230).sum(1) > 6)[0]; yb = rows.max() + 10
v = np.clip(1 - (yy - yb) / (h * .16), 0, 1); v = v * v * (3 - 2 * v)
B[..., 3] = B[..., 3] * np.where(yy > yb, v, 1)
# the heater leads run out of frame at the right: fade the right-hand strip so they trail off
xx2 = np.arange(B.shape[1])[None, :]
fr = np.clip((B.shape[1] - 1 - xx2) / (B.shape[1] * .1), 0, 1); fr = fr * fr * (3 - 2 * fr)
B[..., 3] = B[..., 3] * fr
out = Image.fromarray(B.clip(0, 255).astype(np.uint8), 'RGBA')
out.save('hero-cut.webp', quality=90, method=6)
print('asset', out.size)
