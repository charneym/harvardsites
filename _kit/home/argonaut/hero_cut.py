#!/usr/bin/env python3
"""Argonaut hero: their own studio photo of the original Miniature Inverted Soot Generator with its flame lit
(argonautscientific.com, 'MISG4 Front with Flame', 1195x896, on a light grey sweep). Cut out by keying the border-connected
light grey, edges softened and the light fringe unmixed; kept at native size; a faint contact shadow baked under. Out: hero-cut.webp"""
import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage
a = np.array(Image.open('misg.src.png').convert('RGB')).astype(np.float32)
L = a.mean(2); sat = a.max(2) - a.min(2)
def border_conn(m):
    lab, n = ndimage.label(m); b = set(np.unique(np.concatenate([lab[0], lab[-1], lab[:, 0], lab[:, -1]]))) - {0}; return np.isin(lab, list(b))
bg = border_conn((L > 222) & (sat < 12))
lab, n = ndimage.label((L > 222) & (sat < 12) & ~bg); sz = ndimage.sum(np.ones_like(L), lab, range(1, n + 1))
hole = np.isin(lab, [i + 1 for i in range(n) if sz[i] > 3000])  # the sweep seen through the carry handle
# below the cabinet (row 764 on) keep only the two rubber feet; the floor shadow and reflection go (a contact shadow is baked below)
feet = np.zeros_like(bg); feet[:, 228:293] = True; feet[:, 930:993] = True
floor = np.zeros_like(bg); floor[764:] = True
fk = ndimage.binary_opening(ndimage.binary_fill_holes(feet & floor & (L < 58)), iterations=2)
bg |= floor & ~fk
obj = ndimage.binary_opening(ndimage.binary_fill_holes(~bg) & ~hole, iterations=1)
al = ndimage.gaussian_filter(obj.astype(np.float32), 0.7)
alc = np.clip(al, 1e-3, 1)[..., None]
rgb = np.where(al[..., None] > .98, a, np.clip((a - 240 * (1 - alc)) / alc, 0, 255))
im = Image.fromarray(np.dstack([rgb, al * 255]).astype(np.uint8), 'RGBA')
im = im.crop(Image.fromarray((al > .03).astype(np.uint8) * 255).getbbox())
pad = 40; c = Image.new('RGBA', (im.width + 2 * pad, im.height + 2 * pad + 16), (0, 0, 0, 0))
A = np.array(im.getchannel('A')).astype(np.float32) / 255
sh = Image.fromarray((A * 255 * .4).astype(np.uint8)).filter(ImageFilter.GaussianBlur(14))
s = Image.new('RGBA', im.size, (0, 0, 0, 0)); s.putalpha(sh)
c.alpha_composite(s, (pad + 6, pad + 18)); c.alpha_composite(im, (pad, pad))
c.save('hero-cut.webp', quality=90, method=6); print('asset', c.size)
