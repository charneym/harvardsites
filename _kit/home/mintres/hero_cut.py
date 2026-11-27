#!/usr/bin/env python3
"""Mintres hero: their own studio photograph of two gold-plated opto-electronic packages with Mintres optical beds inside
(mintres.com > Products > (Opto)-electronics optical beds/packages, lift3cdn.nl optical-beds_2.jpg, 3872x2592: the front
package sharp with its optical bed, sub-mount and gold pins, a second package and its fibre behind it, softly out of
focus, on a pale blue-white ground). Cut out by colour: the gold walls, pins and flanges are strongly saturated and the
fibre and the parts inside are dark, while the ground is pale and unsaturated. Holes closed and filled (the package
interiors), then the round mounting holes in the flanges opened again (bright, unsaturated, compact). The pins and the
fibre run out of frame at the left, bottom and top, so the alpha fades over those strips and they trail off. The blurred
rear package keeps a soft edge (the mask edge is feathered by the local blur). Faint baked floor shadow. Out: hero-cut.webp"""
import numpy as np, cv2
from PIL import Image, ImageFilter
from scipy import ndimage as nd
img = cv2.imread('beds.src.jpg')
img = cv2.resize(img, (img.shape[1] // 2, img.shape[0] // 2), interpolation=cv2.INTER_AREA)
H, W = img.shape[:2]
hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV).astype(int); s, v = hsv[..., 1], hsv[..., 2]
core = (s > 90) | (v < 90)
core = nd.binary_opening(core, iterations=1)
core = nd.binary_closing(core, iterations=3)
filled = nd.binary_fill_holes(core)
l, n = nd.label(filled); sz = nd.sum(filled, l, range(1, n + 1))
keep = np.isin(l, 1 + np.where(sz > 4000)[0])
# reopen enclosed see-through areas that show the ground (mounting holes, gaps between crossing pins)
see = keep & ~core & (s < 75) & (v > 175)
see = nd.binary_opening(see, iterations=2)
ls, ns = nd.label(see); ok = []
for i in range(1, ns + 1):
    r = (ls == i); A = r.sum()
    if A < 60: continue
    cs, _ = cv2.findContours(r.astype(np.uint8), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
    P = cv2.arcLength(cs[0], True)
    hm, vm = np.median(hsv[..., 0][r]), np.median(v[r])
    # round mounting holes; and the warm-tinted ground seen between the crossing pins (dimmer than the bright floor inside a package)
    if 4 * np.pi * A / max(P * P, 1) > .72 or (hm < 30 and vm < 228): ok.append(i)
keep &= ~nd.binary_dilation(np.isin(ls, ok), iterations=1)
m = nd.binary_erosion(keep, iterations=1)
a = cv2.GaussianBlur((m * 255).astype(np.uint8), (0, 0), 1.0).astype(np.float32)
# the out-of-focus rear package (upper part of the frame): a softer edge, like the photo's own blur
mc = nd.binary_fill_holes(nd.binary_closing(m, structure=np.ones((3, 3)), iterations=14))
soft = cv2.GaussianBlur((mc * 255).astype(np.uint8), (0, 0), 9.0).astype(np.float32)
yy, xx = np.mgrid[0:H, 0:W]
wsoft = np.clip(1 - yy / (H * .42), 0, 1) * np.clip((xx - W * .3) / (W * .1), 0, 1)
bgk = cv2.GaussianBlur((((s < 70) & (v > 185)) * 255).astype(np.uint8), (0, 0), 2.5).astype(np.float32) / 255
soft = soft * (1 - bgk)   # pale ground between the pins and around the blurred package stays out
a = a * (1 - wsoft) + soft * wsoft
# pins and fibre leave the frame at the left, bottom and top: fade those strips
fl = np.clip(xx / (W * .1), 0, 1); fb = np.clip((H - 1 - yy) / (H * .08), 0, 1); ft = np.clip(yy / (H * .08), 0, 1)
f = fl * fb * ft; f = f * f * (3 - 2 * f)
a = a * f
im = Image.fromarray(img[..., ::-1]).convert('RGBA'); im.putalpha(Image.fromarray(a.clip(0, 255).astype(np.uint8)))
im = im.crop(im.getbbox())
W2, H2 = im.size
PL, PR, PT, PB = 0, round(W2 * .02), round(H2 * .02), round(H2 * .06)
PW, PH = W2 + PL + PR, H2 + PT + PB
al = np.array(im.split()[3]) > 200
bot = np.array([np.where(al[:, x])[0].max() if al[:, x].any() else -1 for x in range(W2)])
sh = np.zeros((PH, PW), np.float32)
for x in range(W2):
    if bot[x] < 0 or al[:, x].sum() < 80: continue
    bb = bot[x] + PT
    sh[bb - 8:bb + int(H2 * .02), x + PL] = .9
sbl = Image.fromarray((sh * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(PW * .012))
sa = np.array(sbl).astype(np.float32) / 255 * .34 / .9
c = Image.fromarray(np.dstack([np.zeros((PH, PW, 3)), np.clip(sa, 0, 1) * 255]).astype(np.uint8), 'RGBA')
c.alpha_composite(im, (PL, PT))
c.save('hero-cut.webp', quality=90, method=6)
print('asset', c.size)
