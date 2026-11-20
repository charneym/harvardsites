# grade the Unsplash photo (Alexander Andrews, https://unsplash.com/photos/uIF40JqldaI, Unsplash License) into hero.webp
import sys, numpy as np
from PIL import Image
src, out = sys.argv[1], sys.argv[2]
im = Image.open(src).convert('RGB'); W, H = im.size
a = np.asarray(im).astype(np.float32) / 255
# hue: the warm reflection on the sensor's cover glass -> the logo blue family (IR-cut glass reads blue); everything else cooled slightly
import colorsys
hsv = np.asarray(im.convert('HSV')).astype(np.float32)
h, s, v = hsv[..., 0], hsv[..., 1], hsv[..., 2]
warm = ((h < 30) | (h > 225)) & (s > 40)
h2 = np.where(warm, 156.0, h)  # ~220 deg, logo #4480fa
hsv2 = np.stack([h2, np.where(warm, np.minimum(s * 1.05, 255), s * .55), v], -1).astype(np.uint8)
rgb = np.asarray(Image.fromarray(hsv2, 'HSV').convert('RGB')).astype(np.float32) / 255
# tonal: slight cool cast in shadows toward the ink #070b16, keep depth
ink = np.array([7, 11, 22]) / 255
rgb = rgb * .9 + ink * (1 - rgb) * .55
rgb = np.clip(rgb, 0, 1) ** 1.08
# alpha: long eased elliptical feather centred on the lens mount (DP/DJ: no box edge)
cx, cy = .565 * W, .43 * H
yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
d = np.sqrt(((xx - cx) / (W * .40)) ** 2 + ((yy - cy) / (H * .50)) ** 2)
al = np.clip((1.08 - d) / .55, 0, 1); al = al * al * (3 - 2 * al)
o = np.dstack([rgb * 255, al * 255]).astype(np.uint8)
Image.fromarray(o, 'RGBA').save(out, 'WEBP', quality=86, method=6)
print(W, H)
