#!/usr/bin/env python3
"""SILIOS hero: their own product image of a CMS4 snapshot multispectral camera (silios.com > Multispectral Imaging >
CMS cameras, a 2001x1762 transparent PNG: the black machined housing with its four corner screws, the orange and blue
stripes on top, the C-mount ring and the sensor with its multispectral filter array behind it). The published PNG has a
hard cut-out edge and a pale painted shadow blob under the camera; the camera is kept as the convex hull of its dark
and coloured pixels (the housing is a convex block; the silver ring and sensor lie inside it), which drops the blob,
then the edge is softened by a 1 px blur and a faint soft floor shadow is baked under the base. Out: hero-cut.webp"""
import numpy as np, cv2
from PIL import Image, ImageFilter
from scipy import ndimage as nd
im = Image.open('cms4.src.png').convert('RGBA'); A = np.array(im)
H, W = A.shape[:2]; a = A[..., 3] > 200
hsv = cv2.cvtColor(A[..., :3], cv2.COLOR_RGB2HSV).astype(int); s, v = hsv[..., 1], hsv[..., 2]
body = a & ((v < 150) | (s > 90))
body = nd.binary_opening(body, iterations=2)
l, n = nd.label(body); body = l == (np.argmax(nd.sum(body, l, range(1, n + 1))) + 1)
hull = cv2.convexHull(np.argwhere(body)[:, ::-1].astype(np.int32))
hm = np.zeros((H, W), np.uint8); cv2.fillPoly(hm, [hull], 1)
m = a & hm.astype(bool)
m = nd.binary_erosion(m, iterations=1)
al = cv2.GaussianBlur((m * 255).astype(np.uint8), (0, 0), 1.0)
A[..., 3] = al
im = Image.fromarray(A, 'RGBA'); im = im.crop(im.getbbox())
W2, H2 = im.size
PL, PR, PT, PB = round(W2 * .04), round(W2 * .04), round(H2 * .02), round(H2 * .08)
PW, PH = W2 + PL + PR, H2 + PT + PB
al2 = np.array(im.split()[3]) > 200
bot = np.array([np.where(al2[:, x])[0].max() if al2[:, x].any() else -1 for x in range(W2)])
sh = np.zeros((PH, PW), np.float32)
for x in range(W2):
    if bot[x] < H2 * .75: continue
    bb = bot[x] + PT
    sh[bb - 10:bb + int(H2 * .025), x + PL] = .9
sbl = Image.fromarray((sh * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(PW * .014))
sa = np.array(sbl).astype(np.float32) / 255 * .32 / .9
c = Image.fromarray(np.dstack([np.full((PH, PW, 3), 18), np.clip(sa, 0, 1) * 255]).astype(np.uint8), 'RGBA')
c.alpha_composite(im, (PL, PT))
c = c.resize((round(PW * .8), round(PH * .8)), Image.LANCZOS)
c.save('hero-cut.webp', quality=90, method=6)
print('asset', c.size)
