#!/usr/bin/env python3
"""Grade the hero photo: Pexels #7089017 (MART PRODUCTION, Pexels licence), an MRI scanner in a clinic room.
v2 (coordinator review): maker lettering removed; tonal grade with real depth (deep navy shadows, cool steel mids,
near-white bore) instead of a flat duotone; the frame is padded and given a long eased alpha mask centred on the
scanner, so the picture has no rectangle edge at all. Prints the scanner box and bore in output-image fractions."""
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
# local contrast ("clarity") before toning, for depth in the white plastics
base = Image.fromarray(a.astype(np.uint8))
blur = np.asarray(base.filter(ImageFilter.GaussianBlur(40))).astype(np.float32)
a = np.clip(a + (a - blur) * .55, 0, 255)
L = (a[..., 0] * .2126 + a[..., 1] * .7152 + a[..., 2] * .0722) / 255
yy, xx = np.mgrid[0:H, 0:W]
# light falls off away from the bore: the room sinks into the ink, the scanner keeps its form
cx, cy = .64 * W, .48 * H
r = np.sqrt(((xx - cx) / (W * .5)) ** 2 + ((yy - cy) / (H * .6)) ** 2)
vig = np.clip(1.08 - .62 * r ** 1.8, .18, 1)
L = np.clip(L, 0, 1) ** 1.25 * vig
# S-curve
L = L * L * (3 - 2 * L) * .55 + L * .45
stops = [(0, (6, 12, 22)), (.12, (13, 26, 43)), (.32, (28, 54, 92)), (.55, (66, 106, 158)), (.75, (132, 164, 204)), (.9, (204, 220, 238)), (1, (244, 248, 252))]
xs = [s[0] for s in stops]
toned = np.stack([np.interp(L, xs, [s[1][c] for s in stops]) for c in range(3)], -1)
# a touch of the original warmth in the highlights (lamps, bore light) for life
orig = a * vig[..., None]
hi = np.clip((L - .7) / .3, 0, 1)[..., None]
toned = toned * (1 - .12 * hi) + np.minimum(orig, 255) * .12 * hi
# the toned frame itself settles into the exact ink at every edge, so no boundary can show
yy, xx = np.mgrid[0:H, 0:W]
def ss(v): v = np.clip(v, 0, 1); return v * v * (3 - 2 * v)
ef = ss(xx / (W * .10)) * ss((W - 1 - xx) / (W * .045)) * ss(yy / (H * .07)) * ss((H - 1 - yy) / (H * .06))
toned = np.array([13, 26, 43], np.float32) + (toned - np.array([13, 26, 43], np.float32)) * ef[..., None]
# pad the frame so the mask never meets an original edge: right/top/bottom/left
pl, pr, pt, pb = int(W * .04), int(W * .16), int(H * .10), int(H * .10)
ink = np.array([13, 26, 43], np.float32)
P = np.zeros((H + pt + pb, W + pl + pr, 3), np.float32) + ink
P[pt:pt + H, pl:pl + W] = toned
# alpha: a long eased elliptical mask centred on the scanner
HH, WW = P.shape[:2]
yy, xx = np.mgrid[0:HH, 0:WW]
mx, my = (pl + .655 * W) / WW, (pt + .49 * H) / HH
rx, ry = (.40 * W) / WW, (.60 * H) / HH
# asymmetric: the left side (wall monitor, table end) is gone by the scanner's own left edge
rxl = (.30 * W) / WW
rxx = np.where(xx / WW < mx, rxl, rx)
d = np.sqrt(((xx / WW - mx) / rxx) ** 2 + ((yy / HH - my) / ry) ** 2)
t = np.clip((d - .62) / (1.0 - .62), 0, 1)
alpha = 1 - t * t * t * (t * (t * 6 - 15) + 10)   # smootherstep
# never any alpha on the outer border
edge = np.minimum.reduce([xx / WW, 1 - xx / WW, yy / HH, 1 - yy / HH])
alpha *= np.clip(edge / .03, 0, 1)
rgba = np.dstack([np.clip(P, 0, 255), alpha * 255]).astype(np.uint8)
img = Image.fromarray(rgba, 'RGBA')
OW = 2600
img = img.resize((OW, round(OW * HH / WW)), Image.LANCZOS)
img.save(out, 'WEBP', quality=90, method=6)
f = lambda x, y: ((pl + x * W) / WW, (pt + y * H) / HH)
print(out, img.size, 'scanner box x %.3f-%.3f y %.3f-%.3f' % (f(.40, .03)[0], f(.97, .96)[0], f(.40, .03)[1], f(.97, .96)[1]), 'bore %.3f %.3f' % f(.64, .47))
