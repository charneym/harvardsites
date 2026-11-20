#!/usr/bin/env python3
"""PETcoil hero: Pexels photo 33764121 (https://www.pexels.com/photo/modern-hospital-mri-machine-in-black-and-white-33764121/,
Pexels licence), a 3T-class MRI scanner in its room, i.e. the machine PETcoil's insert slides into. Cropped to the gantry and table,
the third-party maker's name and model plate removed, and graded to the PETcoil logo (ink -> logo teal #08708a -> pale cyan),
with a vignette so the room falls away into the page ink. Writes hero.webp."""
import numpy as np, pathlib
from PIL import Image, ImageFilter
H = pathlib.Path(__file__).resolve().parent
im = Image.open(H / 'mri_src.jpg').convert('L')            # 2600x1733
# remove the maker's wordmark and model text: replace with a blurred patch of the surrounding cowl
def fill(box, pad=6):
    """replace the box by a column-wise blend of the cowl just above and below it, plus matching grain"""
    global im
    x0,y0,x1,y1 = box
    A = np.asarray(im).astype(np.float32).copy()
    top = np.median(A[y0-pad:y0, x0-12:x1+12], 0); bot = np.median(A[y1:y1+pad, x0-12:x1+12], 0)
    sm = lambda v: np.array([np.median(v[i:i+25]) for i in range(len(v)-24)])   # drops the hook's thin shadow
    top = sm(top); bot = sm(bot)
    t = np.linspace(0, 1, y1-y0)[:, None]
    patch = top[None, :] * (1-t) + bot[None, :] * t
    patch += np.random.default_rng(1).normal(0, 2.2, patch.shape)
    m = np.ones_like(patch); e = 8
    for k in range(e):
        f = (k+1)/(e+1); m[k, :] *= f; m[-k-1, :] *= f; m[:, k] *= f; m[:, -k-1] *= f
    A[y0:y1, x0:x1] = A[y0:y1, x0:x1] * (1-m) + patch * m
    im = Image.fromarray(np.clip(A, 0, 255).astype(np.uint8))
def scrub(box, dx, dy, pad=30):
    """cover the text with a same-size patch of plain cowl taken (dx,dy) px away (keeps the surface grain), feathered in"""
    global im
    x0,y0,x1,y1 = box
    src = im.crop((x0-pad+dx,y0-pad+dy,x1+pad+dx,y1+pad+dy))
    m = Image.new('L', src.size, 0); m.paste(255, (pad//2,pad//2,src.size[0]-pad//2,src.size[1]-pad//2))
    im.paste(src, (x0-pad,y0-pad), m.filter(ImageFilter.GaussianBlur(9)))
fill((1485, 590, 1650, 652))    # maker wordmark on the cowl
fill((1172, 490, 1318, 530))    # model name
# a wider crop so the mask can fade out on every side inside the photo: gantry housing in the source is x 1125-2327, y 325-1605
X0, Y0, X1, Y1 = 1000, 200, 2450, 1733
crop = im.crop((X0, Y0, X1, Y1)).filter(ImageFilter.GaussianBlur(0.9))
a = np.asarray(crop).astype(np.float32) / 255.
a = np.clip((a - .06) / .92, 0, 1)
a = a * a * (3 - 2 * a) * .55 + a ** 1.35 * .45             # an S-curve: deeper shadows, open highlights
h, w = a.shape
# tritone with depth: ink shadows, slate-teal mids, cool near-white highlights (the logo teal sits in the low mids)
stops = [(0, (8, 15, 18)), (.22, (13, 42, 50)), (.45, (38, 92, 102)), (.68, (112, 160, 166)), (.86, (180, 211, 213)), (1, (226, 238, 238))]
P = [p for p, _ in stops]; C = np.array([c for _, c in stops], dtype=np.float32)
rgb = np.stack([np.interp(a, P, C[:, k]) for k in range(3)], -1)
# long eased superellipse mask around the gantry (DP): opaque core, zero well inside every edge of the image
cx, cy = 1726 - X0, 965 - Y0
rx, ry = 709., 752.
yy, xx = np.mgrid[0:h, 0:w]
p = 2.15
r = (np.abs((xx - cx) / rx) ** p + np.abs((yy - cy) / ry) ** p) ** (1 / p)
t = np.clip((1 - r) / .52, 0, 1)
al = t * t * (3 - 2 * t)
out = np.dstack([rgb, al * 255]).astype(np.uint8)
Image.fromarray(out, 'RGBA').save(H / 'hero.webp', quality=88, method=6)
print('hero.webp', crop.size, 'mask centre', (cx / w, cy / h))
