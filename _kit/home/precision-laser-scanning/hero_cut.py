#!/usr/bin/env python3
"""Precision Laser Scanning hero: their own photo of the WOOD PECKER polygon laser scanner (gold 8-facet polygon mirror
on its motor, square mounting plate), https://precisionlaserscanning.com/wp-content/uploads/2016/12/SLIDER-WOODPECKER-POLYGON-SCANNER.jpg
(3264x1614, product on a plain blue studio sweep). The blue ground is separated with OpenCV GrabCut seeded by a chroma key
(saturated blue touching the border = background, neutral/gold = object), so the shaded plate corner survives; the four
mounting holes are cut through; edge eroded 2px and feathered; blue spill on the outer rim neutralised. Faint soft floor shadow baked from the base contour
(benson / tas-chambers recipe). Shown below native size. Not mirrored (the photo already looks toward the headline side
once placed right; the part has no lettering but the light comes from the left, which suits the left headline). Out: hero-cut.webp"""
import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage as nd
import cv2
src = Image.open('woodpecker.src.jpg').convert('RGB')
a = np.array(src).astype(int)
r, g, b = a[..., 0], a[..., 1], a[..., 2]
img = cv2.imread('woodpecker.src.jpg')
# seeds: the saturated blue sweep touching the border is sure background; neutral / gold pixels are sure foreground
sure_bg = ((b - r) > 62) & ((g - r) > 30)
lab, n = nd.label(sure_bg)
border = set(np.unique(np.r_[lab[0], lab[-1], lab[:, 0], lab[:, -1]])) - {0}
sure_bg = nd.binary_erosion(np.isin(lab, list(border)), iterations=6)
lum = a.mean(2)
sure_fg = nd.binary_opening((((b - r) < 25) & (lum > 60)) | ((r - b) > 20), iterations=3)
l2, n2 = nd.label(sure_fg)
sure_fg = nd.binary_erosion(l2 == (np.argmax(nd.sum(sure_fg, l2, range(1, n2 + 1))) + 1), iterations=4)
mask = np.full(sure_bg.shape, cv2.GC_PR_BGD, np.uint8)
mask[nd.binary_dilation(sure_fg, iterations=40)] = cv2.GC_PR_FGD
mask[sure_bg] = cv2.GC_BGD; mask[sure_fg] = cv2.GC_FGD
sm = cv2.resize(img, None, fx=.5, fy=.5, interpolation=cv2.INTER_AREA)
mm = cv2.resize(mask, (sm.shape[1], sm.shape[0]), interpolation=cv2.INTER_NEAREST)
cv2.setRNGSeed(7)
cv2.grabCut(sm, mm, None, np.zeros((1, 65)), np.zeros((1, 65)), 6, cv2.GC_INIT_WITH_MASK)
fg = cv2.resize(((mm == cv2.GC_FGD) | (mm == cv2.GC_PR_FGD)).astype(np.uint8), (img.shape[1], img.shape[0]), interpolation=cv2.INTER_LINEAR) > 0
l3, n3 = nd.label(fg)
fg = l3 == (np.argmax(nd.sum(fg, l3, range(1, n3 + 1))) + 1)
# the four mounting holes: enclosed pockets of the blue sweep become transparent
holes = nd.binary_fill_holes(fg) & ~fg
fg = nd.binary_fill_holes(fg)
hl, hn = nd.label(holes)
cy, cx = nd.center_of_mass(fg); FW = np.ptp(np.where(fg.any(0))[0])
for i in range(1, hn + 1):
    k = hl == i; ar = k.sum()
    if not 300 < ar < 9000: continue
    ys, xs = np.where(k); h_, w_ = np.ptp(ys) + 1, np.ptp(xs) + 1
    if np.hypot(ys.mean() - cy, xs.mean() - cx) < .4 * FW: continue   # only the plate corners, not the clamp face
    if .7 < h_ / w_ < 1.4 and ar / (h_ * w_) > .6: fg[nd.binary_dilation(k, iterations=2)] = False   # round = a real hole
fg = nd.binary_erosion(fg, iterations=2)
m = Image.fromarray((fg * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(1.0))
# de-spill: pull blue toward neutral in a thin band along the edge
edge = nd.binary_dilation(~fg, iterations=10) & fg
f = a.astype(np.float32)
lum = f.mean(2)
sp = np.clip((f[..., 2] - np.maximum(f[..., 0], f[..., 1])) / 60, 0, 1) * edge
for c in range(3): f[..., c] = f[..., c] * (1 - sp) + lum * sp
im = Image.fromarray(np.clip(f, 0, 255).astype(np.uint8)).convert('RGBA'); im.putalpha(m)
im = im.crop(im.getbbox())
TH = 1100
if im.height > TH: im = im.resize((round(im.width * TH / im.height), TH), Image.LANCZOS)
W, H = im.size
PL, PR, PT, PB = round(W * .04), round(W * .08), round(H * .03), round(H * .08)
PW, PH = W + PL + PR, H + PT + PB
al = np.array(im.split()[3]) > 128
bot = np.array([np.where(al[:, x])[0].max() if al[:, x].any() else -1 for x in range(W)])
sh = np.zeros((PH, PW), np.float32)
for x in range(W):
    if bot[x] < 0: continue
    bb = bot[x] + PT
    sh[bb - 6:bb + int(H * .012), x + PL] = .9
s = Image.fromarray((sh * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(PW * .02))
sa = np.array(s).astype(np.float32) / 255 * .34 / .9
c = Image.fromarray(np.dstack([np.zeros((PH, PW, 3)), np.clip(sa, 0, 1) * 255]).astype(np.uint8), 'RGBA')
c.alpha_composite(im, (PL, PT))
c.save('hero-cut.webp', quality=88, method=6)
print('obj', W, H, 'asset', PW, PH)
