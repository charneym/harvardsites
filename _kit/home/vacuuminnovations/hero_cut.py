#!/usr/bin/env python3
"""Vacuum Innovations hero: a studio render of their four-position rotary crystal head (render_vi.py, Blender/Cycles, modelled
on the design they publish on vacuuminnovations.com > Components > Crystal Heads: machined body with a rounded end, a
turned four-position carousel with gold quartz crystals, spring slots, cooling tubes, microdot feedthrough; variant B
lighting, shadow-catcher floor). Their published photos are either flat front-on chamber doors or cleanroom scenes with
people, and the head is machined metal, so (b) applies. The shadow catcher also darkens the whole floor very faintly,
which would show as a rectangle on the page: the faint floor alpha is faded to zero with a soft elliptical mask around
the object (contact shadows kept), then cropped. Out: hero-cut.webp"""
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
# the cooling tubes run out of frame at the top right: fade everything over the top and right strips so they trail off
fr = np.clip(np.minimum((w - 1 - xx) / (w * .12), yy / (h * .12)), 0, 1); fr = fr * fr * (3 - 2 * fr)
B[..., 3] = B[..., 3] * fr
out = Image.fromarray(B.clip(0, 255).astype(np.uint8), 'RGBA')
# feather the floor matte: everything faint (floor tone and soft shadows) is blurred wide and faded out with the distance
# from the solid object, so no edge of the shadow-catcher plane can show anywhere (coordinator review)
from scipy import ndimage as nd
B = np.array(out).astype(np.float32); al = B[..., 3]
solid = al > 200
fl = np.where(solid, 0, np.minimum(al, 120))
fl = np.array(Image.fromarray(fl.astype(np.uint8)).filter(ImageFilter.GaussianBlur(28))).astype(np.float32)
dist = nd.distance_transform_edt(~solid)
k = np.clip(1 - dist / 140, 0, 1); k = k * k * (3 - 2 * k)
soft = np.clip(al, 0, 255) * (al > 200) + np.where(al > 200, 0, np.maximum(fl * k, np.where(dist < 3, al, 0)))
B[..., 3] = soft
hh = al.shape[0]; yy2 = np.arange(hh)[:, None]
bf = np.clip((hh - 1 - yy2) / (hh * .1), 0, 1); bf = bf * bf * (3 - 2 * bf)
B[..., 3] = B[..., 3] * bf
out = Image.fromarray(B.clip(0, 255).astype(np.uint8), 'RGBA')
out.save('hero-cut.webp', quality=90, method=6)
print('asset', out.size)
