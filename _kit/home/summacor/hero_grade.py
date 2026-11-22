#!/usr/bin/env python3
"""Grade SummaCor's own LCAPP bench photograph (summacorforlife.com/heroshot.png) into the hero:
crop to the device, deepen the surround toward the page ink, mild split-tone, and bake a long eased alpha
that follows the device axis (real alpha; no box edge, no oval porthole)."""
import sys, numpy as np
from PIL import Image, ImageFilter
src, out = sys.argv[1], sys.argv[2]
im = Image.open(src).convert('L')
W, H = im.size                                   # 888 x 1580
y0 = 300; im = im.crop((0, y0, W, H)); W, H = im.size
L = np.asarray(im).astype(np.float32) / 255.0
yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
# device axis (source coords): flow chamber from the water line down to the atraumatic tip
ax0 = np.array([372.0, 520.0 - y0]); ax1 = np.array([500.0, 1465.0 - y0])
d = ax1 - ax0; ln = np.hypot(*d); u = d / ln
px, py = xx - ax0[0], yy - ax0[1]
t = np.clip((px * u[0] + py * u[1]) / ln, -0.35, 1.06)
cx, cy = ax0[0] + t * d[0], ax0[1] + t * d[1]
dist = np.hypot(xx - cx, yy - cy)
along = (px * u[0] + py * u[1]) / ln
def ss(e0, e1, x):
    x = np.clip((x - e0) / (e1 - e0), 0, 1); return x * x * (3 - 2 * x)
# subject weight: 1 on the device, easing out over a long distance
sub = 1 - ss(46, 170, dist)
sub *= ss(-0.42, 0.05, along) * (1 - ss(1.03, 1.2, along))
# surround: push down toward ink with a toe curve; device keeps its full tonal range
dark = 0.16 * L ** 2.2
Lg = L * sub + dark * (1 - sub)
# gentle local contrast on the device
blur = np.asarray(Image.fromarray((Lg * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(18))).astype(np.float32) / 255
Lg = np.clip(Lg + 0.35 * (Lg - blur) * sub, 0, 1)
# split tone: shadows toward the charcoal ink (#161618), highlights a touch warm
sh = np.array([22, 22, 25], np.float32) / 255; hi = np.array([246, 242, 236], np.float32) / 255
rgb = sh[None, None, :] + (hi - sh)[None, None, :] * Lg[..., None]
# alpha: long eased fall-off; never ends on a line
a = 1 - ss(30, 380, dist)
a *= ss(-0.5, 0.16, along) * (1 - ss(0.96, 1.25, along))
a = a ** 2.0
# alpha also fades before any crop edge (left/right/top/bottom) so no edge can show
edge = ss(0, 90, xx) * ss(0, 90, W - 1 - xx) * ss(0, 170, yy) * ss(0, 140, H - 1 - yy)
a *= edge
rgb = sh[None,None,:] + (rgb - sh[None,None,:]) * ss(0.0, 0.6, a)[..., None]
a = np.where(a < 0.012, 0, a)
outim = np.dstack([np.clip(rgb, 0, 1) * 255, a * 255]).astype(np.uint8)
Image.fromarray(outim, 'RGBA').save(out, 'WEBP', quality=90, alpha_quality=100, method=6, exact=True)
print(out, outim.shape)
