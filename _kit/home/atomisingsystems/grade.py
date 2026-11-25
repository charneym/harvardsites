#!/usr/bin/env python3
"""Grade ASL's own photograph of a pour (atomising.co.uk home page asset b6d8bfda...jpg, 763x763) for the hero:
blacks lifted into the site ink #0e0c0b, a gentle contrast curve, and a long eased radial feather into the ink (DJ/DP)."""
import sys, numpy as np
from PIL import Image
src, out = sys.argv[1], sys.argv[2]
im = np.asarray(Image.open(src).convert('RGB')).astype(np.float32) / 255
H, W, _ = im.shape
BG = np.array([14, 12, 11], np.float32) / 255
# gentle S curve, slightly lowered exposure so the melt does not clip harder than the original
x = np.clip(im * .96, 0, 1)
x = x * x * (3 - 2 * x) * .35 + x * .65
yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
cx, cy = .44 * W, .56 * H
d = np.sqrt(((xx - cx) / (W * .52)) ** 2 + ((yy - cy) / (H * .55)) ** 2)
m = np.clip((1.0 - d) / .62, 0, 1); m = m * m * (3 - 2 * m)
# the edges always reach pure ink
e = np.minimum.reduce([xx / (W * .16), (W - 1 - xx) / (W * .16), yy / (H * .14), (H - 1 - yy) / (H * .16)])
e = np.clip(e, 0, 1); e = e * e * (3 - 2 * e)
a = (m * e)[..., None]
o = BG + (np.maximum(x, BG) - BG) * a
Image.fromarray((np.clip(o, 0, 1) * 255 + .5).astype(np.uint8)).save(out, 'WEBP', quality=88, method=6)
print('ok', W, H)
