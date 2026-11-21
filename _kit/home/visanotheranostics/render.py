#!/usr/bin/env python3
"""Hero render for Visano Theranostics: PSMA-targeted nanobubbles gathering on a prostate cancer cell (the mechanism on
visanotheranostics.com, Lead Application: "Nanobubbles are injected into the bloodstream ... bind to cancer cells, making them
visible under ultrasound"). An offline ray-cast: the cell is a displaced sphere with multi-scale membrane relief, wrap
(subsurface-like) lighting, a cyan rim and contact occlusion under each bound bubble; the nanobubbles are thin gas-core shells
(Fresnel rim, specular window, soft caustic, faint thin-film tint) in the logo's cyan; free bubbles still arriving sit at other
depths with depth-of-field blur. Transparent ground (no box edge, DJ/DP). Not to scale: real nanobubbles are ~1/30 of a cell.
Output: hero.webp (RGBA)."""
import numpy as np, pathlib
from PIL import Image, ImageFilter
H = pathlib.Path(__file__).resolve().parent
rng = np.random.default_rng(11)
SS = 2
W, HH = 1400 * SS, 1300 * SS
S = 420 * SS                      # px per unit (cell radius 1)
CX, CY = W * .5, HH * .52
L = np.array([-.55, .62, .56]); L /= np.linalg.norm(L)
V = np.array([0, 0, 1.])
Hv = (L + V); Hv /= np.linalg.norm(Hv)

def unit(v): return v / np.linalg.norm(v)

# ---- membrane relief: sum of random plane waves on the unit sphere ----
WAVES = []
for f, a, n in [(2.0, .034, 4), (4.2, .014, 6), (8.5, .0065, 10), (17, .0042, 14), (34, .0026, 18), (64, .0016, 22), (120, .0008, 26)]:
    for _ in range(n):
        WAVES.append((unit(rng.normal(size=3)) * f * rng.uniform(.8, 1.2), a * rng.uniform(.6, 1.2), rng.uniform(0, 6.283)))
def relief(N):  # N: (...,3) unit normals -> height, gradient
    h = np.zeros(N.shape[:-1]); g = np.zeros(N.shape)
    for k, a, ph in WAVES:
        t = N @ k + ph
        h += a * np.sin(t); g += (a * np.cos(t))[..., None] * k
    return h, g

ys, xs = np.mgrid[0:HH, 0:W].astype(np.float32)
X = (xs - CX) / S; Y = -(ys - CY) / S
r2 = X * X + Y * Y
# silhouette from the relief along the equator direction
th = np.arctan2(Y, X)
EQ = np.stack([np.cos(th), np.sin(th), np.zeros_like(th)], -1)
he, _ = relief(EQ)
edge = 1 + he
inside = r2 < edge ** 2
Z = np.sqrt(np.clip(edge ** 2 - r2, 0, None))
N0 = np.stack([X, Y, Z], -1) / edge[..., None]
N0 = N0 / np.linalg.norm(N0, axis=-1, keepdims=True)
h, g = relief(N0)
gt = g - (np.sum(g * N0, -1))[..., None] * N0        # tangent gradient
N = N0 - 2.0 * gt
N /= np.linalg.norm(N, axis=-1, keepdims=True)
P = N0 * (edge[..., None] + 0 * h[..., None])           # surface point
P = np.stack([X, Y, Z], -1)

# ---- bound bubbles: patches (PSMA clusters) on the visible hemisphere ----
bound = []
centres = [unit(np.array(v)) for v in [(-.35, .55, .75), (.55, .35, .76), (.25, -.55, .8), (-.7, -.2, .68), (.05, .1, 1), (.85, -.35, .4), (-.2, .9, .35), (-.55, -.7, .45)]]
for c in centres:
    for _ in range(rng.integers(9, 16)):
        d = unit(c + rng.normal(size=3) * .2)
        if d[2] < -.05: continue
        r = rng.uniform(.03, .068)
        bound.append((d * (1 + r * .82), r))
for _ in range(16):
    d = unit(rng.normal(size=3)); d[2] = abs(d[2]); d = unit(d)
    r = rng.uniform(.025, .05); bound.append((d * (1 + r * .82), r))
# ---- free bubbles arriving (upper left and around), varied depth ----
free = []
for _ in range(34):
    a = rng.uniform(1.6, 4.4) if rng.random() < .75 else rng.uniform(-.4, 1.4)
    rad = rng.uniform(1.18, 1.62)
    z = rng.uniform(-.6, .9)
    p = np.array([np.cos(a) * rad, np.sin(a) * rad * .92, z])
    free.append((p, rng.uniform(.03, .07)))

# ---- cell shading ----
ndl = np.sum(N * L, -1)
wrap = np.clip((ndl + .45) / 1.45, 0, 1)
spec = np.clip(np.sum(N * Hv, -1), 0, 1) ** 38
fres = (1 - np.clip(N0[..., 2], 0, 1)) ** 2.6
cav = np.clip(.5 + 9 * h, 0, 1)                          # crevices darker
ao = np.ones_like(X)
bounce = np.zeros_like(X)
for c, r in bound:
    d2 = np.sum((P - c) ** 2, -1)
    ao *= 1 - .62 * np.exp(-d2 / (2 * (r * 1.05) ** 2))
    bounce += np.exp(-d2 / (2 * (r * 1.9) ** 2)) * .5
base = np.array([.47, .42, .55])                          # muted mauve-slate membrane
warm = np.array([.86, .78, .84])
cy = np.array([.30, .78, .88])
col = base[None, None] * (.16 + .84 * wrap[..., None]) * (.62 + .38 * cav[..., None])
col = col + (warm - base)[None, None] * (wrap ** 3)[..., None] * .35
col = col * ao[..., None] + spec[..., None] * .22
col = col + cy[None, None] * (fres * .55 * np.clip(-ndl + .6, 0, 1))[..., None]
col = col + cy[None, None] * np.clip(bounce, 0, .7)[..., None] * .18
# soft anti-aliased silhouette
rr = np.sqrt(r2); a_cell = np.clip((edge - rr) * S / 1.5, 0, 1)
img = np.zeros((HH, W, 4)); img[..., :3] = col * a_cell[..., None]; img[..., 3] = a_cell   # premultiplied
cellZ = np.where(inside, Z, -9)

def _box(a, r, ax):
    a = np.moveaxis(a, ax, 0); p = np.concatenate([np.repeat(a[:1], r + 1, 0), a, np.repeat(a[-1:], r, 0)]); c = np.cumsum(p, 0)
    return np.moveaxis((c[2 * r + 1:] - c[:-2 * r - 1]) / (2 * r + 1), 0, ax)
def gblur(a, s):
    r = max(1, int(s * .9))
    for _ in range(3): a = _box(_box(a, r, 0), r, 1)
    return a

def bubble(c, r, occl=True, blur=0):
    x0 = int(CX + (c[0] - r) * S) - 4; x1 = int(CX + (c[0] + r) * S) + 5
    y0 = int(CY - (c[1] + r) * S) - 4; y1 = int(CY - (c[1] - r) * S) + 5
    x0, y0 = max(x0, 0), max(y0, 0); x1, y1 = min(x1, W), min(y1, HH)
    if x1 <= x0 or y1 <= y0: return
    bx = X[y0:y1, x0:x1] - c[0]; by = Y[y0:y1, x0:x1] - c[1]
    q = bx * bx + by * by; m = np.clip((r - np.sqrt(q)) * S / 1.3, 0, 1)
    bz = np.sqrt(np.clip(r * r - q, 0, None))
    n = np.stack([bx, by, bz], -1) / r
    ct = np.clip(n[..., 2], 0, 1)
    rim = (1 - ct) ** 2.2
    alpha = (.16 + .78 * rim) * m
    film = np.stack([.22 + .5 * rim, .70 + .22 * rim, .92 + .08 * rim], -1)
    film = film + np.stack([.25 * rim ** 3, -.05 * rim ** 3, .1 * rim ** 3], -1)   # thin-film warm edge
    sp = np.clip(np.sum(n * Hv, -1), 0, 1) ** 60
    win = np.exp(-((n[..., 0] + .38) ** 2 + (n[..., 1] - .42) ** 2) / .012)           # window highlight
    Lc = unit(np.array([.42, -.5, .75]))
    caus = np.clip(np.sum(n * Lc, -1), 0, 1) ** 10 * .38
    shade = .55 + .45 * np.clip(np.sum(n * L, -1) + .3, 0, 1)
    rgb = film * shade[..., None] * alpha[..., None] + (sp * 1.1 + win * .7 + caus)[..., None] * m[..., None]
    a = np.clip(alpha + (sp * .9 + win * .6 + caus * .6) * m, 0, 1)
    if occl:
        vis = (c[2] + bz) > cellZ[y0:y1, x0:x1] - .004
        rgb *= vis[..., None]; a = a * vis
    layer = np.concatenate([np.clip(rgb, 0, None), a[..., None]], -1)
    if blur > .6:
        pad = int(blur * 3) + 2
        big = np.zeros((y1 - y0 + 2 * pad, x1 - x0 + 2 * pad, 4)); big[pad:-pad, pad:-pad] = layer
        big = gblur(big, blur)
        ya, yb, xa, xb = y0 - pad, y1 + pad, x0 - pad, x1 + pad
        cy0, cx0 = max(0, -ya), max(0, -xa)
        ya, xa = max(ya, 0), max(xa, 0); yb, xb = min(yb, HH), min(xb, W)
        layer = big[cy0:cy0 + yb - ya, cx0:cx0 + xb - xa]; y0, y1, x0, x1 = ya, yb, xa, xb
    dst = img[y0:y1, x0:x1]
    dst[...] = layer + dst * (1 - layer[..., 3:4])

order = sorted([(c, r, 1) for c, r in bound] + [(c, r, 0) for c, r in free], key=lambda t: t[0][2])
# free bubbles behind the cell first
over = img.copy()
img[...] = 0
for c, r, b in order:
    if not b and c[2] < -.1: bubble(c, r, occl=False, blur=abs(c[2] - .35) * 9 * SS)
back = img.copy()
img[...] = over
img[...] = img + back * (1 - img[..., 3:4])
for c, r, b in order:
    if b: bubble(c, r, occl=True)
for c, r, b in order:
    if not b and c[2] >= -.1: bubble(c, r, occl=False, blur=abs(c[2] - .35) * 9 * SS)

a = np.clip(img[..., 3], 0, 1)
rgb = np.where(a[..., None] > 1e-4, img[..., :3] / np.maximum(a[..., None], 1e-4), 0)
rgb = rgb / (1 + .35 * rgb)       # gentle tone map
rgb = np.clip(rgb * 1.22, 0, 1) ** (1 / 1.08)
out = np.concatenate([rgb * 255, a[..., None] * 255], -1).astype(np.uint8)
im = Image.fromarray(out, 'RGBA').resize((W // SS, HH // SS), Image.LANCZOS)
im.save(H / 'hero.png'); im.save(H / 'hero.webp', quality=90, method=6)
print('ok', im.size)
