#!/usr/bin/env python3
"""Surface Engineering hero: a Cycles studio render (render_spool.py, transparent film with a shadow-catcher floor) of their
consumables: a 300 mm spool of layer-wound hardfacing wire and a fan of cast cobalt and carbide tube TIG rods.
Cropped to the group and its soft floor shadow, edges faded so no line shows.
In: /tmp/claude-0/p3/se/hero_raw.png  Out: hero-cut.webp"""
import numpy as np
from PIL import Image
im = Image.open('/tmp/claude-0/p3/se/hero_raw.png').convert('RGBA')
a = np.array(im).astype(np.float32)
al = a[..., 3]
ys, xs = np.where(al > 40)
x0, x1, y0, y1 = xs.min(), xs.max(), ys.min(), ys.max()
pad = 40
x0, y0 = max(0, x0 - pad), max(0, y0 - pad); x1, y1 = min(im.width - 1, x1 + pad), min(im.height - 1, y1 + pad)
a = a[y0:y1 + 1, x0:x1 + 1]
H, W_ = a.shape[:2]
# soft fade over the outer 40 px of every side, so the faint shadow never ends in a line
yy, xx = np.mgrid[0:H, 0:W_]
d = np.minimum.reduce([xx, W_ - 1 - xx, yy, H - 1 - yy]).astype(np.float32)
f = np.clip(d / 40.0, 0, 1); f = f * f * (3 - 2 * f)
a[..., 3] *= f
out = Image.fromarray(np.clip(a, 0, 255).astype(np.uint8), 'RGBA')
out.save('hero-cut.webp', quality=90, method=6)
print('asset', out.size)
