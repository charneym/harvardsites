#!/usr/bin/env python3
"""Superlum hero: their own studio photograph of a fibre-coupled semiconductor optical amplifier in a gold butterfly package
(superlum.ie wp-content/uploads/2021/02/SOA-resize.jpg, 1732x1154: SOA-332 with its printed lid, 14 gold pins, red and
yellow fibre boots, on a white glossy surface that mirrors the pins and the red boot). Cut out by colour: the package,
pins and boots are strongly saturated gold/red/yellow (S > 60) and the lid rim, lettering and pin holes are dark, while
the mirror reflections are pale (S 20-33) and the ground is white, so the reflections fall away cleanly; holes filled,
then the round mounting holes opened again (bright, unsaturated and round; the lid's long polished bevel stays). The thin white fibres are traced column by column
inside a narrow band around each fibre's path (the reflected fibre lies ~130 px lower, outside the band) and fade out
toward the frame edges. Faint soft floor shadow baked from the base contour. Shown below native size. Out: hero-cut.webp"""
import numpy as np, cv2
from PIL import Image, ImageFilter
from scipy import ndimage as nd
img = cv2.imread('soa.src.jpg'); H, W = img.shape[:2]
hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV).astype(int); s, v = hsv[..., 1], hsv[..., 2]
g = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY).astype(int)
core = (s > 60) | (v < 205)
core = nd.binary_closing(core, iterations=3)
core = nd.binary_fill_holes(core)
l, n = nd.label(core); keep = np.isin(l, 1 + np.where(nd.sum(core, l, range(1, n + 1)) > 3000)[0])
# open the see-through regions the fill closed: mounting holes and the white ground between pins
see = keep & (v > 238) & (s < 28)
see = nd.binary_opening(see, iterations=2)
ls, ns = nd.label(see); ok = []
for i in range(1, ns + 1):
    ys, xs = np.where(ls == i)
    if len(ys) < 250: continue
    ev = np.linalg.eigvalsh(np.cov(np.vstack([xs, ys])))  # round holes only; long bright strips are the lid's bevel
    if ev[-1] / max(ev[0], 1e-6) < 6 and ys.mean() > 520: ok.append(i)  # the holes are in the flange, below the lid
see = np.isin(ls, ok)
keep &= ~nd.binary_dilation(see, iterations=1)
# the lid's polished bevel is as white as the backdrop: add the lid as a convex shape (its grey face, hull, grown by the bevel)
lidpx = (s < 25) & (v > 150) & (v < 236) & keep
ll, ln = nd.label(lidpx); lidpx = ll == (np.argmax(nd.sum(lidpx, ll, range(1, ln + 1))) + 1)
hull = cv2.convexHull(np.argwhere(lidpx)[:, ::-1].astype(np.int32))
lid = np.zeros((H, W), np.uint8); cv2.fillPoly(lid, [hull], 1)
keep |= nd.binary_dilation(lid.astype(bool), iterations=7)
# fibres: per column, the darker edges of the white fibre inside a +-26 px band around its path
fib = np.zeros((H, W), bool)
def trace(x0, x1, ya, yb):
    for x in range(x0, x1):
        yc = ya + (yb - ya) * (x - x0) / max(1, x1 - x0)
        lo, hi = int(max(0, yc - 26)), int(min(H, yc + 26))
        ys = np.where(g[lo:hi, x] < 242)[0]
        if len(ys): fib[lo + ys.min(): lo + ys.max() + 1, x] = True
trace(0, 300, 993, 828)        # left fibre, from the frame edge to the red boot
trace(1370, W, 322, 186)       # right fibre, from the yellow boot to the frame edge
fib = nd.binary_closing(fib, iterations=2)
m = keep | fib
m = nd.binary_erosion(m, iterations=1)
a = cv2.GaussianBlur((m * 255).astype(np.uint8), (0, 0), .8).astype(np.float32)
# fibres trail off toward the frame edges
xx = np.arange(W)[None, :]
fade = np.clip(np.minimum(xx / (W * .12), (W - 1 - xx) / (W * .12)), 0, 1); fade = fade * fade * (3 - 2 * fade)
a = a * fade
im = Image.fromarray(img[..., ::-1]).convert('RGBA'); im.putalpha(Image.fromarray(a.clip(0, 255).astype(np.uint8)))
im = im.crop(im.getbbox())
W2, H2 = im.size
PL, PR, PT, PB = 0, 0, round(H2 * .03), round(H2 * .1)
PW, PH = W2 + PL + PR, H2 + PT + PB
al = np.array(im.split()[3]) > 200
# shadow from the package's base only (not the fibres): columns where the solid body reaches down
bot = np.array([np.where(al[:, x])[0].max() if al[:, x].any() else -1 for x in range(W2)])
sh = np.zeros((PH, PW), np.float32)
for x in range(W2):
    if bot[x] < 0: continue
    colh = al[:, x].sum()
    if colh < 40: continue
    bb = bot[x] + PT
    sh[bb - 6:bb + int(H2 * .025), x + PL] = .9
sbl = Image.fromarray((sh * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(PW * .012))
sa = np.array(sbl).astype(np.float32) / 255 * .34 / .9
c = Image.fromarray(np.dstack([np.zeros((PH, PW, 3)), np.clip(sa, 0, 1) * 255]).astype(np.uint8), 'RGBA')
c.alpha_composite(im, (PL, PT))
c.save('hero-cut.webp', quality=90, method=6)
print('asset', c.size)
