#!/usr/bin/env python3
"""Vacuum Innovations hero: their own photograph of the front door of one of their coating chambers, with the Vacuum
Innovations logo plate, viewports and hinge brackets (vacuuminnovations.com, Wix media ca8e9c_9940a339...jpg, 3444x3323,
shot square-on in their workshop). The door is a flat plate with clipped corners, so it is cut out along its own outline,
traced from 1.6x zooms of each corner (the slight perspective keeps the edges straight lines), plus the two lifting lugs on
the top edge; latch handles and hinge brackets end at the plate edge. Edge feathered 1 px; a faint soft floor shadow baked
from the bottom edge. Shown well below native size. Out: hero-cut.webp"""
import numpy as np, cv2
from PIL import Image, ImageFilter
img = cv2.imread('door.src.jpg'); H, W = img.shape[:2]
plate = np.array([(225, 156), (3169, 139), (3322, 291), (3250, 3173), (3097, 3307), (294, 3273), (147, 3145), (87, 306)], np.int32)
m = np.zeros((H, W), np.uint8); cv2.fillPoly(m, [plate], 255)
# lifting lugs on the top edge: rounded tabs
for (x0, x1, yt) in [(887, 964, 76), (2427, 2476, 65)]:
    r = (x1 - x0) // 2
    cv2.rectangle(m, (x0, yt + r), (x1, 170), 255, -1); cv2.ellipse(m, ((x0 + x1) // 2, yt + r), (r, r), 0, 180, 360, 255, -1)
m = cv2.erode(m, np.ones((3, 3), np.uint8), iterations=1)
a = cv2.GaussianBlur(m, (0, 0), 1.0)
im = Image.fromarray(img[..., ::-1]).convert('RGBA'); im.putalpha(Image.fromarray(a))
im = im.crop(im.getbbox())
W2, H2 = im.size
PT, PB = round(H2 * .01), round(H2 * .06)
PW, PH = W2, H2 + PT + PB
al = np.array(im.split()[3]) > 200
bot = np.array([np.where(al[:, x])[0].max() if al[:, x].any() else -1 for x in range(W2)])
sh = np.zeros((PH, PW), np.float32)
for x in range(W2):
    if bot[x] < 0: continue
    bb = bot[x] + PT
    sh[bb - 8:bb + int(H2 * .012), x] = .9
sbl = Image.fromarray((sh * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(PW * .012))
sa = np.array(sbl).astype(np.float32) / 255 * .34 / .9
c = Image.fromarray(np.dstack([np.zeros((PH, PW, 3)), np.clip(sa, 0, 1) * 255]).astype(np.uint8), 'RGBA')
c.alpha_composite(im, (0, PT))
c.thumbnail((1700, 1700), Image.LANCZOS)
c.save('hero-cut.webp', quality=88, method=6)
print('asset', c.size)
