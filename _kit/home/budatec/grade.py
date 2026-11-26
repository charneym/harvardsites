#!/usr/bin/env python3
"""Hero: budatec's own product photo of the VS XL vacuum soldering system (budatec.de/wp-content/uploads/VSXL_1.png, RGBA).
Its baked-in grey floor shadow (rgb 124,123,123 at partial alpha) is turned into a real dark shadow; the faint light halo
at the silhouette (alpha < ~215) is dropped, so on the dark page ink there is no glow or box edge (DP/DJ)."""
import sys
from PIL import Image
import numpy as np
v = np.array(Image.open(sys.argv[1]).convert('RGBA')).astype(float)
a = v[..., 3]; rgb = v[..., :3]
sh = (np.abs(rgb - np.array([124, 123, 123])).max(axis=2) < 7) & (a < 255)
na = np.clip((a - 215) / 40, 0, 1) * 255
out = v.copy(); out[..., 3] = na
out[sh, 0:3] = [2, 4, 16]; out[sh, 3] = a[sh] * .8
im = Image.fromarray(out.astype('uint8'))
im = im.crop(im.split()[3].getbbox())
im.save(sys.argv[2], quality=90, method=6); print(im.size)
