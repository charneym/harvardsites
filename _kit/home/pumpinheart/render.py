#!/usr/bin/env python3
"""Hero art: Pumpinheart's own render of the PReduction device in a cut-away heart (pumpinheart.com home video,
vimeo 944880384 poster frame, 1920x1080, pure white ground). The heart (with the anchor in the left atrium and the pump
in the left ventricle) is cropped whole; the white ground is turned into real alpha, so there is no box
edge anywhere (DP/DJ), and every edge is feathered to the ink over a long distance for safety. Native size, never upscaled."""
import numpy as np, pathlib
from PIL import Image
H = pathlib.Path(__file__).resolve().parent
INK = np.array([248, 246, 244], float)
a = np.asarray(Image.open(H / 'src-render.jpg').convert('RGB'), float)
a = a[24:1064, 196:1124]                       # the heart, whole, with clear ground on every side
# white ground -> real alpha ("unmultiply white"): composited over white it reproduces the render exactly, and the
# ground becomes fully transparent, so the page ink shows through with no box edge at any boost (DP).
al = np.clip((255 - a.min(-1)) / 255.0, 0, 1)
al = np.where(al < 4 / 255, 0, al)
hh, ww, _ = a.shape
yy, xx = np.mgrid[0:hh, 0:ww]
e = np.minimum.reduce([xx, ww - 1 - xx, yy, hh - 1 - yy]) / 60.0
t = np.clip(e, 0, 1); al = al * t * t * (3 - 2 * t)
safe = np.maximum(al, 1e-6)[..., None]
rgb = np.clip((a - 255 * (1 - al[..., None])) / safe, 0, 255)
out = np.dstack([rgb, al * 255]).round().astype('uint8')
img = Image.fromarray(out, 'RGBA')
img.save(H / 'hero.webp', quality=90, alpha_quality=100, method=6)
print(img.size)
