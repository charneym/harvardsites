#!/usr/bin/env python3
"""Hero for Immundnz: NCI scanning electron micrograph (Unsplash, photo-1581594355548-aab613ebdb69, Unsplash License) of an
oral squamous cancer cell (white) under attack by two cytotoxic T cells (red). The black SEM ground becomes real alpha
(luminance key, softened) and every edge feathers out over a long elliptical falloff, so no box edge can show (DJ/DP).
Greys are cooled slightly toward the page bone; the T cells are pulled toward the logo crimson. Usage: grade.py src.jpg out.webp"""
import sys, numpy as np
from PIL import Image, ImageFilter
src, out = sys.argv[1], sys.argv[2]
im = Image.open(src).convert('RGB')
W = 1800; im = im.resize((W, round(im.size[1] * W / im.size[0])), Image.LANCZOS)
a = np.asarray(im).astype(np.float32) / 255.0
h, w, _ = a.shape
L = a @ np.array([.2126, .7152, .0722], np.float32)
mx = a.max(axis=2)
def sm(x, e0, e1):
    t = np.clip((x - e0) / (e1 - e0), 0, 1); return t * t * (3 - 2 * t)
key = sm(mx, .045, .26)
key = np.asarray(Image.fromarray((key * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(2.2))).astype(np.float32) / 255
yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
cx, cy = w * .47, h * .52
r = np.sqrt(((xx - cx) / (w * .54)) ** 2 + ((yy - cy) / (h * .55)) ** 2)
feather = 1 - sm(r, .62, 1.0)
alpha = np.clip(key * feather, 0, 1)
# un-premultiply the dark fringe so colours stay clean as they fade
col = np.clip(a / np.maximum(key[..., None], .35), 0, 1)
red = np.clip((a[..., 0] - np.maximum(a[..., 1], a[..., 2])) * 4, 0, 1)[..., None]
grey = col * np.array([.95, .97, 1.0], np.float32) + .01
crim = np.stack([col[..., 0] * 1.0, col[..., 1] * .55 + .02, col[..., 2] * .62 + .04], -1)
rgb = grey * (1 - red) + crim * red
# keep tonal depth: gentle S curve on the greys
rgb = np.clip(rgb, 0, 1) ** 1.06
o = np.dstack([rgb, alpha])
Image.fromarray((o * 255 + .5).astype(np.uint8), 'RGBA').save(out, 'WEBP', quality=88, method=6)
print('wrote', out, w, h)
