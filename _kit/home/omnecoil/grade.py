#!/usr/bin/env python3
"""Grade the hero photo: Pexels #7089017 (MART PRODUCTION, Pexels licence), an MRI scanner in a clinic room.
Removes the scanner maker's lettering, then a navy duotone from the OmnEcoil logo blue, with a vignette centred on the bore."""
import sys, numpy as np
from PIL import Image, ImageFilter
src, out = sys.argv[1], sys.argv[2]
im = Image.open(src).convert('RGB')
a = np.asarray(im).astype(np.float32)
H, W = a.shape[:2]
def heal(x0, y0, x1, y1, pad=6):
    top = a[y0-pad:y0, x0:x1].mean(0); bot = a[y1:y1+pad, x0:x1].mean(0)
    for i, y in enumerate(range(y0, y1)):
        t = (i + .5) / (y1 - y0); a[y, x0:x1] = top * (1 - t) + bot * t
heal(1096, 308, 1290, 368)   # model lettering
heal(1600, 282, 1840, 342)   # maker badge
heal(1050, 400, 1130, 620)   # wall monitor edge kept? (soft)
L = (a[..., 0] * .2126 + a[..., 1] * .7152 + a[..., 2] * .0722) / 255
yy, xx = np.mgrid[0:H, 0:W]
cx, cy = .64 * W, .5 * H
r = np.sqrt(((xx - cx) / (W * .52)) ** 2 + ((yy - cy) / (H * .62)) ** 2)
vig = np.clip(1.15 - .75 * r ** 1.6, .25, 1)
L = np.clip(L, 0, 1) ** 1.6 * vig
stops = [(0, (8, 18, 32)), (.25, (18, 38, 66)), (.5, (44, 82, 128)), (.75, (128, 160, 200)), (.92, (210, 224, 240)), (1, (240, 246, 252))]
xs = [s[0] for s in stops]
outa = np.stack([np.interp(L, xs, [s[1][c] for s in stops]) for c in range(3)], -1)
# keep a little of the original colour (warm lamps, glow) for life
orig = a * vig[..., None] * .8
outa = outa * .9 + np.minimum(orig, outa * 1.15) * .1
img = Image.fromarray(np.clip(outa, 0, 255).astype(np.uint8))
img = img.resize((2400, round(2400 * H / W)), Image.LANCZOS)
img.save(out, 'WEBP', quality=90, method=6)
print(out, img.size)
