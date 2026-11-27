#!/usr/bin/env python3
"""Cryogenic hero: their own studio photo of an 18 tesla cryogen-free magnet system with 50 mm / 60 mm sample space
(cryogenic.co.uk product range, 2062x3658, green cryostat on pure white). Cut out by keying the border-connected pure white,
edges softened and the white fringe unmixed; scaled to 1500px tall (below native); a faint soft contact shadow baked
underneath. No relight, no mirror (CRYOGENIC lettering). Out: hero-cut.webp"""
import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage
a = np.array(Image.open('mag18t.src.jpg').convert('RGB')).astype(np.float32)
L = a.mean(2); sat = a.max(2) - a.min(2)
def border_conn(m):
    lab, n = ndimage.label(m); b = set(np.unique(np.concatenate([lab[0], lab[-1], lab[:, 0], lab[:, -1]]))) - {0}; return np.isin(lab, list(b))
bg = border_conn((L > 247) & (sat < 7))
obj = ndimage.binary_opening(ndimage.binary_fill_holes(~bg), iterations=2)
al = ndimage.gaussian_filter(obj.astype(np.float32), 1.0)
alc = np.clip(al, 1e-3, 1)[..., None]
rgb = np.where(al[..., None] > .98, a, np.clip((a - 255 * (1 - alc)) / alc, 0, 255))
im = Image.fromarray(np.dstack([rgb, al * 255]).astype(np.uint8), 'RGBA')
im = im.crop(Image.fromarray((al > .03).astype(np.uint8) * 255).getbbox())
H = 1500; im = im.resize((round(im.width * H / im.height), H), Image.LANCZOS)
pad = 50; c = Image.new('RGBA', (im.width + 2 * pad, im.height + 2 * pad + 20), (0, 0, 0, 0))
# contact shadow: a flat soft ellipse under the base, not the silhouette (the object is tall)
A = np.zeros((c.height, c.width), np.float32); yy, xx = np.mgrid[0:c.height, 0:c.width]
cx, cy, rx, ry = c.width / 2, pad + im.height - 6, im.width * .46, 22
A[((xx - cx) / rx) ** 2 + ((yy - cy) / ry) ** 2 < 1] = .5
sh = Image.fromarray((A * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(16))
s = Image.new('RGBA', c.size, (0, 0, 0, 0)); s.putalpha(sh); c.alpha_composite(s); c.alpha_composite(im, (pad, pad))
c.save('hero-cut.webp', quality=88, method=6); print('asset', c.size)
