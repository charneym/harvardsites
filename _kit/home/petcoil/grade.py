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
crop = im.crop((880, 300, 2420, 1733)).filter(ImageFilter.GaussianBlur(1.1))                       # gantry, bore, table head
a = np.asarray(crop).astype(np.float32) / 255.
a = np.clip((a - .08) / .9, 0, 1) ** 1.55                    # deepen mids so the walls sit back
h, w = a.shape
yy, xx = np.mgrid[0:h, 0:w]
cx, cy = .5 * w, .5 * h                                      # vignette centred on the bore
r = np.sqrt(((xx - cx) / (.62 * w)) ** 2 + ((yy - cy) / (.66 * h)) ** 2)
a = a * np.clip(1.15 - .85 * r ** 1.7, .08, 1)
stops = np.array([[0, (11, 20, 23)], [.42, (10, 74, 88)], [.75, (96, 178, 186)], [1, (214, 238, 238)]], dtype=object)
P = [s[0] for s in stops]; C = np.array([s[1] for s in stops], dtype=np.float32)
out = np.stack([np.interp(a, P, C[:, k]) for k in range(3)], -1)
Image.fromarray(out.astype(np.uint8)).save(H / 'hero.webp', quality=86, method=6)
print('hero.webp', crop.size)
