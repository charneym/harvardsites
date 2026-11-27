#!/usr/bin/env python3
"""Standa hero: a studio render of a motorised linear translation stage (render_st.py, Blender/Cycles, modelled on the
clear-anodised stages Standa shows on standa.lt > Motorised Positioners > Motorized Linear Stages, e.g. the 8MT175: a long
machined base with a lead-screw channel and steel guide rails, a carriage with a grid of tapped holes, end brackets,
socket screws, a limit-switch block and a stepper motor with machined end caps; variant B lighting, shadow-catcher
floor). Their own product photos are small catalogue thumbnails (under 400 px) on white, too small for a hero, so (b)
applies. The shadow catcher darkens the whole floor very faintly, which would show as a rectangle on the page: the faint
floor alpha is faded to zero with a soft elliptical mask around the object (contact shadows kept), then cropped.
Out: hero-cut.webp"""
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
out = Image.fromarray(B.clip(0, 255).astype(np.uint8), 'RGBA')
out.save('hero-cut.webp', quality=90, method=6)
print('asset', out.size)
