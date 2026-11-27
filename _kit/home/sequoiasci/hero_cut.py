#!/usr/bin/env python3
"""Sequoia hero: their own studio photo of the LISST-200X submersible particle size analyzer (sequoiasci.com LISST-200X
gallery, "200X_StandardAngle-1280w.jpg", 1280x682, black anodized instrument on a seamless white sweep). Cut out by
keying the white sweep (border-connected near-white), the photo's own floor shadow kept as a translucent black shadow
(below the body only), white seen through the handle loop removed. Native size, no relight, no mirror (the optics end
already faces the headline). Out: hero-cut.webp"""
import numpy as np
from PIL import Image
from scipy import ndimage
a = np.array(Image.open('lisst200x.src.jpg').convert('RGB')).astype(np.float32)
L = a.mean(2); sat = a.max(2) - a.min(2); bgL = 245.0; H, W = L.shape
def border_conn(m):
    lab, n = ndimage.label(m); b = set(np.unique(np.concatenate([lab[0], lab[-1], lab[:, 0], lab[:, -1]]))) - {0}; return np.isin(lab, list(b))
obj = ~border_conn((L > bgL - 22) & (sat < 14))
len_bg = border_conn((L > 118) & (sat < 16))
dark = obj & (L < 90); ymid = np.full(W, H, float)
for x in range(W):
    ys = np.where(dark[:, x])[0]
    if len(ys): ymid[x] = (ys.min() + ys.max()) / 2
obj2 = ndimage.binary_opening(obj & ~(obj & len_bg & (np.arange(H)[:, None] > ymid[None, :])), iterations=1)
al = ndimage.gaussian_filter(obj2.astype(np.float32), 0.7)
shd = ndimage.gaussian_filter(np.clip((bgL - L) / bgL, 0, 1) * (~obj2), 1.5) * 0.6
A = al + shd * (1 - al); alc = np.clip(al, 1e-3, 1)[..., None]
rgb = np.clip((a - bgL * (1 - alc)) / alc, 0, 255) * (al / np.clip(A, 1e-3, 1))[..., None]
w = (rgb.mean(2) > 225) & ((rgb.max(2) - rgb.min(2)) < 12) & (A > .8)
lab, n = ndimage.label(w); sz = ndimage.sum(w, lab, range(1, n + 1))
A[np.isin(lab, [i + 1 for i, s in enumerate(sz) if s > 25])] = 0
A = ndimage.gaussian_filter(A, 0.5)
im = Image.fromarray(np.dstack([rgb, A * 255]).astype(np.uint8), 'RGBA')
im = im.crop(Image.fromarray((A > .03).astype(np.uint8) * 255).getbbox())
pad = 24; c = Image.new('RGBA', (im.width + 2 * pad, im.height + 2 * pad), (0, 0, 0, 0)); c.alpha_composite(im, (pad, pad))
c.save('hero-cut.webp', quality=90, method=6); print('asset', c.size)
