#!/usr/bin/env python3
"""hero.png (render.py) -> hero.webp: the shadow (pure-black alpha pixels) eases out over a long distance toward every
canvas edge so no straight edge exists (DJ/DP); the object itself is untouched. Then crop to content with a margin."""
import numpy as np
from PIL import Image
im = np.array(Image.open('hero.png')).astype(float)
H, W = im.shape[:2]; yy, xx = np.mgrid[0:H, 0:W]
d = np.minimum.reduce([xx, W - 1 - xx, yy, H - 1 - yy]).astype(float)
f = np.clip(d / 140, 0, 1); f = f * f * (3 - 2 * f)
shadow = im[..., :3].max(-1) < 6
im[..., 3] = np.where(shadow, im[..., 3] * f, im[..., 3])
out = Image.fromarray(im.clip(0, 255).astype(np.uint8), 'RGBA')
x0, y0, x1, y1 = out.getchannel('A').point(lambda v: 255 if v > 2 else 0).getbbox()
obj = Image.fromarray(((~shadow) & (im[..., 3] > 128)).astype(np.uint8) * 255).getbbox()
print('content', (x0, y0, x1, y1), 'object', obj, 'canvas', (W, H))
p = 16; out = out.crop((max(0, x0 - p), max(0, y0 - p), min(W, x1 + p), min(H, y1 + p)))
out.save('hero.webp', 'WEBP', quality=93, method=6); print('hero.webp', out.size)
