#!/usr/bin/env python3
"""XyloCor hero (HOME_BRIEF update 2c: a crafted render of the firm's real mechanism). A coronary artery on the heart's
surface, branching down into smaller arteries, and from their ends a fan of fine new vessels: the collateral growth XC001
(an Ad5 vector carrying the human VEGF gene) is designed to stimulate in ischaemic heart muscle (xylocor.com/xc001-moa).
Tubes are rendered as exact cylinders/cones in screen space (per-pixel depth and normal, z-buffered), shaded as wet tissue:
wrap diffuse in deep arterial reds, sharp specular, a cool fresnel rim in the logo green. Supersampled x2, saved with ALPHA
(no ground of its own, DJ). Usage: python3 render.py W H out.png"""
import sys, numpy as np
from PIL import Image

W = int(sys.argv[1]) if len(sys.argv) > 1 else 1200
H = int(sys.argv[2]) if len(sys.argv) > 2 else 1200
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = 2; RW, RH = W * SS, H * SS
import os
rng = np.random.default_rng(int(os.environ.get("SEED", "8")))

def nrm(v): return v / np.maximum(np.linalg.norm(v, axis=-1, keepdims=True), 1e-9)

SEGS = []  # (p0, p1, r0, r1, kind, depth-level)
def grow(p, d, r, length, level, kind, curl=0.10, step=None, taper=0.55, zl=None):
    """grow one vessel as a wandering 3D polyline; returns its points and radii"""
    step = step or max(4.0, r * 0.9)
    n = max(3, int(length / step)); pts = [p.copy()]; rs = [r]
    d = np.array([d[0], d[1], 0.0]); d = nrm(d); w = np.zeros(3); zl = level if zl is None else zl; p = np.array([p[0], p[1], 12.0 * zl])
    for i in range(n):
        w = w * 0.82 + rng.normal(0, curl, 3); w[2] = 0
        d = nrm(d + w * 0.35)
        p = p + d * step
        rr = r * (1 - (1 - taper) * (i + 1) / n)
        SEGS.append((pts[-1], p.copy(), rs[-1], rr, kind, zl)); pts.append(p.copy()); rs.append(rr)
    return pts, rs, d

def rot2(v, ang, az=0.0):
    c, s = np.cos(ang), np.sin(ang)
    return nrm(np.array([v[0] * c - v[1] * s, v[0] * s + v[1] * c, 0.0]))

def tree(p, d, r, length, level, maxl, zl=None):
    zl = level if zl is None else zl
    pts, rs, dend = grow(p, d, r, length, level, 'a' if r > 5 else 'b', curl=0.07 + 0.03 * level, zl=zl)
    n = len(pts)
    if level >= maxl or r < 3.2:
        sprouts(pts[-1], dend, rs[-1], 3 + int(rng.integers(0, 3)))
        return
    nb = 2 + (1 if level < 2 and rng.random() < .5 else 0)
    for k in range(nb):
        i = int(n * (0.35 + 0.6 * (k + rng.random() * .6) / nb)); i = min(i, n - 2)
        side = 1 if (k + level) % 2 == 0 else -1
        ang = side * (0.45 + 0.35 * rng.random())
        dd = rot2(nrm(pts[i + 1] - pts[i]), ang, rng.normal(0, .25))
        tree(pts[i], dd, rs[i] * (0.62 + 0.1 * rng.random()), length * (0.62 + 0.12 * rng.random()), level + 1, maxl, zl + 1)
    # the parent continues past its last branch
    cont = pts[-1]; tree(cont, dend, rs[-1], length * 0.55, level + 1, maxl, zl)

def sprouts(p, d, r, k):
    """the new vessels: fine, wandering capillary sprouts fanning out of an arteriole tip"""
    for j in range(k):
        ang = (j / max(1, k - 1) - .5) * 2.0 + rng.normal(0, .15)
        dd = rot2(d, ang, rng.normal(0, .35))
        L = 45 + 70 * rng.random()
        pts, rs, de = grow(p, dd, max(1.6, r * 0.75), L, 9, 'c', curl=0.22, step=5.0, taper=0.5, zl=8)
        if rng.random() < .35:
            i = int(len(pts) * (.4 + .4 * rng.random()))
            grow(pts[i], rot2(nrm(pts[i + 1] - pts[i]), rng.choice([-1, 1]) * (.6 + .4 * rng.random()), rng.normal(0, .3)), rs[i] * .8, L * .55, 9, 'c', curl=.25, step=5.0, taper=.5, zl=8)

# composition (render px, before supersampling): the artery enters top centre and sweeps down through the frame
S = 1200 / 1330.0; OFF = (1200 - 1200 * S) / 2; M = SS * W / 1200.0  # geometry in 1200-unit space, rasterised at M px/unit
main_p = np.array([650.0, 40.0, 0.0]) * [S, S, 1]
pts, rs, dm = grow(main_p, np.array([-0.18, 1.0, 0.05]), 30 * S, 430 * S, 0, 'a', curl=0.05, step=8 * S, taper=0.72)
nm = len(pts)
plan = [(0.18, 1, .62, 330), (0.34, -1, .55, 300), (0.52, 1, .6, 320), (0.7, -1, .58, 280), (0.86, 1, .52, 250)]
for f, side, rf, L in plan:
    i = int(nm * f)
    dd = rot2(nrm(pts[i + 1] - pts[i]), side * (0.75 + 0.2 * rng.random()), rng.normal(0, .2))
    tree(pts[i], dd, rs[i] * rf, L * S, 1, 3)
tree(pts[-1], dm, rs[-1], 300 * S, 1, 3, 0)

# ---------- rasterise (screen = x right, y down, z into the screen; slight tilt gives depth) ----------
Z = np.full((RH, RW), 1e9); N = np.zeros((RH, RW, 3)); K = np.zeros((RH, RW), np.int8); LV = np.zeros((RH, RW), np.int8)
U = np.zeros((RH, RW))  # position along the vessel, for surface texture
acc = 0.0
for (p0, p1, r0, r1, kind, lv) in SEGS:
    a = (np.array([p0[0], p0[1]]) + OFF) * M; b = (np.array([p1[0], p1[1]]) + OFF) * M; ra, rb = r0 * M, r1 * M
    za, zb = p0[2] * M, p1[2] * M
    rm = max(ra, rb)
    x0, x1 = int(max(0, min(a[0], b[0]) - rm - 2)), int(min(RW, max(a[0], b[0]) + rm + 3))
    y0, y1 = int(max(0, min(a[1], b[1]) - rm - 2)), int(min(RH, max(a[1], b[1]) + rm + 3))
    if x1 <= x0 or y1 <= y0: continue
    yy, xx = np.mgrid[y0:y1, x0:x1].astype(float)
    ab = b - a; L2 = max(ab @ ab, 1e-9)
    t = np.clip(((xx - a[0]) * ab[0] + (yy - a[1]) * ab[1]) / L2, 0, 1)
    cx, cy = a[0] + ab[0] * t, a[1] + ab[1] * t
    dx, dy = xx - cx, yy - cy; d = np.sqrt(dx * dx + dy * dy)
    r = ra + (rb - ra) * t
    m = d < r
    if not m.any(): continue
    q = np.clip(d / np.maximum(r, 1e-6), 0, 1); nz = -np.sqrt(np.maximum(0, 1 - q * q))
    zc = za + (zb - za) * t + nz * r
    sub = Z[y0:y1, x0:x1]; upd = m & (zc < sub)
    sub[upd] = zc[upd]
    nn = np.stack([dx / np.maximum(r, 1e-6), dy / np.maximum(r, 1e-6), nz], -1)
    N[y0:y1, x0:x1][upd] = nn[upd]
    K[y0:y1, x0:x1][upd] = {'a': 0, 'b': 1, 'c': 2}[kind]
    LV[y0:y1, x0:x1][upd] = lv
    seglen = np.sqrt(L2) / M
    U[y0:y1, x0:x1][upd] = (acc + t * seglen)[upd]
    acc += seglen
print('segments', len(SEGS), flush=True)

hit = Z < 1e8
n = nrm(N)
V = np.array([0, 0, -1.0])
L1 = nrm(np.array([-0.55, -0.7, -0.6])); L2v = nrm(np.array([0.7, 0.35, -0.2]))
ndl = (n * L1).sum(-1); wrap = np.clip((ndl + 0.35) / 1.35, 0, 1)
hv = nrm(L1 + V); spec = np.clip((n * hv).sum(-1), 0, 1)
fres = (1 - np.clip((n * V).sum(-1), 0, 1)) ** 2.6
back = np.clip((n * L2v).sum(-1), 0, 1)
# surface texture: faint ring-like ridges along the vessel and a little mottling
tex = 0.97 + 0.03 * np.sin(U * 0.05 + 2 * np.sin(U * 0.011))
deep = np.array([0.20, 0.015, 0.03]); mid = np.array([0.62, 0.05, 0.08]); hi = np.array([0.95, 0.42, 0.38])
col = deep + (mid - deep) * wrap[..., None] + (hi - mid) * (wrap ** 3)[..., None] * 0.7
col *= tex[..., None]
cap = (K == 2)[..., None]
col = np.where(cap, col * 0.9 + np.array([0.18, 0.02, 0.03]), col)   # the new vessels: a touch brighter, thinner walls
col += np.array([0.35, 0.78, 0.60]) * (fres * 0.38 + back * 0.10)[..., None]   # cool rim in the logo green
col += np.array([1.0, 0.94, 0.92]) * ((spec ** 60) * 0.55 + (spec ** 12) * 0.08)[..., None]
# contact shadows: each vessel lies under the larger vessel it branches from (parents in front), so it darkens where
# a larger vessel crosses close above it, offset away from the key light
from PIL import ImageFilter
sh = np.ones((RH, RW))
for lvl in range(1, 10):
    sel = hit & (LV == lvl)
    if not sel.any(): continue
    occ = (hit & (LV < lvl)).astype(np.uint8) * 255
    oi = Image.fromarray(occ).transform((RW, RH), Image.AFFINE, (1, 0, -10 * M, 0, 1, -12 * M)).filter(ImageFilter.GaussianBlur(7 * M))
    o = np.asarray(oi).astype(float) / 255
    sh = np.where(sel, 1 - 0.6 * o, sh)
col *= sh[..., None]
# deeper (smaller) vessels sink a touch toward the ink: gentle aerial perspective
col *= (1 - 0.035 * np.minimum(LV, 6))[..., None]
alpha = hit.astype(float)
TR = (LV == 0) & (U < 190 * S)
fi = np.clip((U - 20 * S) / (170 * S), 0, 1); fi = fi * fi * (3 - 2 * fi)
alpha = np.where(TR, alpha * fi, alpha)
rgb = np.where(hit[..., None], np.clip(col, 0, 1), 0)
# soft vignette in alpha so the farthest sprouts ease out before the render's edge (no seam)
yy, xx = np.mgrid[0:RH, 0:RW]
ex = np.minimum(xx, RW - 1 - xx) / (RW * .12); ey = np.minimum(yy, RH - 1 - yy) / (RH * .12)
fe = np.clip(np.minimum(ex, ey), 0, 1); fe = fe * fe * (3 - 2 * fe)
alpha *= fe
img = np.dstack([rgb * alpha[..., None], alpha])
im = Image.fromarray((img * 255).astype(np.uint8), 'RGBA').resize((W, H), Image.LANCZOS)
a = np.asarray(im).astype(float) / 255
rgb = a[..., :3] / np.maximum(a[..., 3:], 1e-6)
out = np.dstack([np.clip(rgb, 0, 1), a[..., 3:]])
Image.fromarray((out * 255).astype(np.uint8), 'RGBA').save(OUT)
print('saved', OUT)
