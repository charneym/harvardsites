#!/usr/bin/env python3
"""ClydeHSI hero: their own photo of the NIR-HR+ hyperspectral camera (red body, black end cap, lens facing left),
from clydehsi.com (Duda CDN, 1280x960, camera on an optical breadboard in front of a plain grey wall). Cut out with
OpenCV GrabCut seeded by the saturated red side panel; the breadboard and the camera's red reflection in it are clipped
along the camera's own base edge (front cap and side rail, traced from the photo); holes filled; edge eroded 1px and
feathered. Faint soft floor shadow baked from the base contour (benson / tas-chambers recipe). Shown below native size.
Not mirrored (lettering; the lens already faces the headline). Out: hero-cut.webp"""
import numpy as np, cv2
from PIL import Image, ImageFilter
from scipy import ndimage as nd
img = cv2.imread('nirhr.src.png'); H, W = img.shape[:2]
a = img[..., ::-1].astype(int); r, g, b = a[..., 0], a[..., 1], a[..., 2]
mask = np.full((H, W), cv2.GC_BGD, np.uint8)
mask[205:650, 88:1070] = cv2.GC_PR_BGD
core = np.zeros((H, W), bool); core[230:560, 190:1050] = True
mask[nd.binary_erosion((r > 150) & (g < 90) & (b < 90) & core, iterations=4)] = cv2.GC_FGD
mask[300:520, 200:480] = cv2.GC_PR_FGD; mask[260:560, 520:1040] = cv2.GC_PR_FGD
cv2.setRNGSeed(3)
cv2.grabCut(img, mask, None, np.zeros((1, 65)), np.zeros((1, 65)), 8, cv2.GC_INIT_WITH_MASK)
fg = (mask == cv2.GC_FGD) | (mask == cv2.GC_PR_FGD)
l, n = nd.label(fg); fg = nd.binary_fill_holes(l == (np.argmax(nd.sum(fg, l, range(1, n + 1))) + 1))
# clip the breadboard / reflection along the base edge
poly = [(0, 598), (183, 606), (519, 636), (524, 621), (1062, 507), (W, 503)]
yy = np.full(W, float(H))
for (xa, ya), (xb, yb) in zip(poly, poly[1:]):
    for x in range(xa, min(xb, W - 1) + 1): yy[x] = min(yy[x], ya + (yb - ya) * (x - xa) / max(1, xb - xa))
fg &= np.arange(H)[:, None] <= yy[None, :]
fg = nd.binary_erosion(fg, iterations=1)
m = Image.fromarray((fg * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(.7))
im = Image.fromarray(img[..., ::-1]).convert('RGBA'); im.putalpha(m)
im = im.crop(im.getbbox())
W, H = im.size
PL, PR, PT, PB = round(W * .03), round(W * .05), round(H * .03), round(H * .12)
PW, PH = W + PL + PR, H + PT + PB
al = np.array(im.split()[3]) > 128
bot = np.array([np.where(al[:, x])[0].max() if al[:, x].any() else -1 for x in range(W)])
sh = np.zeros((PH, PW), np.float32)
for x in range(W):
    if bot[x] < 0: continue
    bb = bot[x] + PT
    sh[bb - 6:bb + int(H * .016), x + PL] = .9
s = Image.fromarray((sh * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(PW * .02))
sa = np.array(s).astype(np.float32) / 255 * .36 / .9
c = Image.fromarray(np.dstack([np.zeros((PH, PW, 3)), np.clip(sa, 0, 1) * 255]).astype(np.uint8), 'RGBA')
c.alpha_composite(im, (PL, PT))
c.save('hero-cut.webp', quality=90, method=6)
print('obj', W, H, 'asset', PW, PH)
