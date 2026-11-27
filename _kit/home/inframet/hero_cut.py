#!/usr/bin/env python3
"""Inframet hero: their own product image of a DT15150 test system for thermal imagers (inframet.com > Test systems >
Thermal imagers, Images/Level_2/TestSystems/Thermal_imagers/DT15150.jpg, 2204x1240: the off-axis reflective collimator
tube with the blackbody/target housing on top, the stand and its levelling feet, the control computer, monitor and
keyboard), published on a plain white ground. Cut out by brightness: everything darker than the white ground is the
object; holes closed and filled, small specks dropped, a 1 px erosion and a soft edge. The white Inframet lettering on the
tube is inside the filled body, so it stays. A faint soft floor shadow is baked from the bottom contour of the feet, stand
and monitor base. Shown below native size on the light hero. Out: hero-cut.webp"""
import numpy as np, cv2
from PIL import Image, ImageFilter
from scipy import ndimage as nd
img = cv2.imread('dt.src.jpg'); H, W = img.shape[:2]
g = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY).astype(int)
core = g < 238
core = nd.binary_closing(core, iterations=3)
core = nd.binary_fill_holes(core)
l, n = nd.label(core); sz = nd.sum(core, l, range(1, n + 1))
keep = np.isin(l, 1 + np.where(sz > 1500)[0])
m = nd.binary_erosion(keep, iterations=1)
a = cv2.GaussianBlur((m * 255).astype(np.uint8), (0, 0), .8).astype(np.float32)
im = Image.fromarray(img[..., ::-1]).convert('RGBA'); im.putalpha(Image.fromarray(a.clip(0, 255).astype(np.uint8)))
im = im.crop(im.getbbox())
W2, H2 = im.size
PL, PR, PT, PB = round(W2 * .02), round(W2 * .02), round(H2 * .02), round(H2 * .08)
PW, PH = W2 + PL + PR, H2 + PT + PB
al = np.array(im.split()[3]) > 200
bot = np.array([np.where(al[:, x])[0].max() if al[:, x].any() else -1 for x in range(W2)])
sh = np.zeros((PH, PW), np.float32)
for x in range(W2):
    if bot[x] < H2 * .8: continue   # only parts that stand on the floor
    bb = bot[x] + PT
    sh[bb - 8:bb + int(H2 * .02), x + PL] = .9
sbl = Image.fromarray((sh * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(PW * .01))
sa = np.array(sbl).astype(np.float32) / 255 * .3 / .9
c = Image.fromarray(np.dstack([np.full((PH, PW, 3), 20), np.clip(sa, 0, 1) * 255]).astype(np.uint8), 'RGBA')
c.alpha_composite(im, (PL, PT))
c.save('hero-cut.webp', quality=90, method=6)
print('asset', c.size)
