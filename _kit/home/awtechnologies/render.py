#!/usr/bin/env python3
"""Hero (HOME_BRIEF update option a, the firm's own imagery): the TrachFlush device, AW Technologies' own product image
(trachflush.com, 'TrachFlush Picture - On-Off Bottom.png', 2982x7218 with a real alpha channel). Downscaled (never
upscaled) and composited on the page ink with a soft teal light on the wall behind it and a soft contact shadow below;
every glow falls to the ink well inside the canvas, so the art has no edge (DJ/DP). Output: hero.webp."""
import numpy as np, pathlib
from PIL import Image, ImageFilter
H = pathlib.Path(__file__).resolve().parent
INK = np.array([6, 25, 42], float)       # --ink #06192a
TEAL = np.array([38, 117, 110], float)   # logo teal #26756e
W, HH = 820, 1120
DH = 900
src = Image.open(H/'device-src.png').convert('RGBA')
dw = round(src.size[0]*DH/src.size[1])
dev = src.resize((dw, DH), Image.LANCZOS)
ox, oy = (W-dw)//2, 90
yy, xx = np.mgrid[0:HH, 0:W].astype(np.float32)
img = np.ones((HH, W, 3))*INK
cx, cy = W/2, oy+DH*.42
e = ((xx-cx)/290)**2+((yy-cy)/450)**2
img += (TEAL-INK)*(np.exp(-e*2.4)*.55)[..., None]
# contact shadow: the device's own silhouette, blurred, offset down
al = np.array(dev)[..., 3]
sh = Image.new('L', (W, HH), 0); sh.paste(Image.fromarray(al), (ox+14, oy+22)); sh = np.array(sh.filter(ImageFilter.GaussianBlur(26))).astype(float)/255
img = img*(1-.55*sh[..., None])
a = np.array(dev).astype(float); aa = a[..., 3:4]/255.0
reg = img[oy:oy+DH, ox:ox+dw]
# grade slightly cooler so the light grey sits in the palette
col = a[..., :3]*np.array([.95, .985, 1.0])
img[oy:oy+DH, ox:ox+dw] = reg*(1-aa)+col*aa
ex = np.minimum(xx, W-1-xx)/(W*.24); ey = np.minimum(yy, HH-1-yy)/(HH*.07)
k = np.clip(np.minimum(ex, ey), 0, 1); k = (k*k*(3-2*k))[..., None]
img = INK+(img-INK)*k
Image.fromarray(np.clip(np.round(img), 0, 255).astype(np.uint8)).save(H/'hero.webp', quality=90, method=6)
print('hero', W, HH, 'device at', ox, oy, dw, DH, 'span x', ox/W, (ox+dw)/W, 'y', oy/HH, (oy+DH)/HH)
