#!/usr/bin/env python3
"""Tomco hero: their own photo of a Tomco BT-series amplifier module (datasheet DS006713B, tomco.com.au, 853x636, machined
aluminium housing on white). Cut out by keying the border-connected near-white, edges softened and the white fringe unmixed;
kept at native size; a faint soft contact shadow baked underneath. No relight, no mirror (label lettering). Out: hero-cut.webp"""
import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage
a = np.array(Image.open('module.src.jpg').convert('RGB')).astype(np.float32)
L = a.mean(2); sat = a.max(2) - a.min(2)
def border_conn(m):
    lab, n = ndimage.label(m); b = set(np.unique(np.concatenate([lab[0], lab[-1], lab[:, 0], lab[:, -1]]))) - {0}; return np.isin(lab, list(b))
bg = border_conn((L > 243) & (sat < 10))
obj = ndimage.binary_opening(ndimage.binary_fill_holes(~bg), iterations=1)
al = ndimage.gaussian_filter(obj.astype(np.float32), 0.7)
alc = np.clip(al, 1e-3, 1)[..., None]
rgb = np.where(al[..., None] > .98, a, np.clip((a - 255 * (1 - alc)) / alc, 0, 255))
im = Image.fromarray(np.dstack([rgb, al * 255]).astype(np.uint8), 'RGBA')
im = im.crop(Image.fromarray((al > .03).astype(np.uint8) * 255).getbbox())
pad = 40; c = Image.new('RGBA', (im.width + 2 * pad, im.height + 2 * pad + 16), (0, 0, 0, 0))
A = np.array(im.getchannel('A')).astype(np.float32) / 255
sh = Image.fromarray((A * 255 * .4).astype(np.uint8)).filter(ImageFilter.GaussianBlur(14))
s = Image.new('RGBA', im.size, (0, 0, 0, 0)); s.putalpha(sh)
c.alpha_composite(s, (pad + 6, pad + 18)); c.alpha_composite(im, (pad, pad))
c.save('hero-cut.webp', quality=90, method=6); print('asset', c.size)
