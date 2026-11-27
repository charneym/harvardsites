#!/usr/bin/env python3
"""RBD hero: their own studio photo of the 9103 USB picoammeter (rbdinstruments.com "9103-hv.png", 2119x1043, blue
anodized case on white). Cut out by keying the border-connected near-white background, edges softened; scaled to 1600px wide
(below native); a faint soft contact shadow baked underneath. No relight, no mirror (front panel lettering). Out: hero-cut.webp"""
import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage
a = np.array(Image.open('pico9103.src.png').convert('RGB')).astype(np.float32)
L = a.mean(2); sat = a.max(2) - a.min(2)
def border_conn(m):
    lab, n = ndimage.label(m); b = set(np.unique(np.concatenate([lab[0], lab[-1], lab[:, 0], lab[:, -1]]))) - {0}; return np.isin(lab, list(b))
bg = border_conn((L > 140) & (sat < 9))  # white sweep plus the neutral grey glow baked around the case
obj = ndimage.binary_fill_holes(~bg)
obj = ndimage.binary_erosion(ndimage.binary_opening(obj, iterations=1), iterations=1)
al = ndimage.gaussian_filter(obj.astype(np.float32), 0.8)
# unmix the white fringe on the soft edge
alc = np.clip(al, 1e-3, 1)[..., None]
rgb = np.clip((a - 255 * (1 - alc)) / alc, 0, 255)
rgb = np.where(al[..., None] > .98, a, rgb)
im = Image.fromarray(np.dstack([rgb, al * 255]).astype(np.uint8), 'RGBA')
im = im.crop(Image.fromarray((al > .03).astype(np.uint8) * 255).getbbox())
W = 1600; im = im.resize((W, round(im.height * W / im.width)), Image.LANCZOS)
pad = 50; c = Image.new('RGBA', (im.width + 2 * pad, im.height + 2 * pad + 30), (0, 0, 0, 0))
A = np.array(im.getchannel('A')).astype(np.float32) / 255
sh = Image.fromarray((A * 255 * .42).astype(np.uint8)).filter(ImageFilter.GaussianBlur(20))
s = Image.new('RGBA', im.size, (0, 0, 0, 0)); s.putalpha(sh)
c.alpha_composite(s, (pad + 8, pad + 26)); c.alpha_composite(im, (pad, pad))
c.save('hero-cut.webp', quality=88, method=6); print('asset', c.size)
