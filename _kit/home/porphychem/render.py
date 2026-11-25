#!/usr/bin/env python3
"""PorphyChem hero (HOME_BRIEF update 2c: a crafted render of the firm's real product). A meso-tetraphenyl
metalloporphyrin (an A4 porphyrin with a metal in its core: two of PorphyChem's catalogue families) as glossy
ball-and-stick. Idealised D4h porphine core built from textbook bond lengths (N-Ca 1.37, Ca-Cb 1.44, Cb-Cb 1.36,
Ca-Cmeso 1.39 A), phenyls at 1.50 A twisted ~65 deg out of the macrocycle plane, hydrogens at 1.08 A.
Colours follow the logo: pyrrole carbons in the logo red #c20830, nitrogens in the logo green, the metal in pale
silver, meso and phenyl carbons in warm pearl, hydrogens white. Analytic ray casting of spheres and cylinders
(numpy), key/fill/rim light, gloss, depth fog, contact occlusion, 2x supersampling, real alpha (DJ).
Usage: python3 render.py out.png [W] [yaw pitch roll]"""
import sys, math
import numpy as np
from PIL import Image
OUT = sys.argv[1] if len(sys.argv) > 1 else 'hero.png'
OW = int(sys.argv[2]) if len(sys.argv) > 2 else 1400
yaw, pitch, roll = [float(a) for a in (sys.argv[3:6] if len(sys.argv) >= 6 else (24, -58, 8))]
SS = 2
A = []; E = []; KIND = []
def add(p, e, k): A.append(np.array(p, float)); E.append(e); KIND.append(k); return len(A) - 1
def r2(v, a):
    c, s = math.cos(a), math.sin(a); return np.array([v[0] * c - v[1] * s, v[0] * s + v[1] * c, v[2]])
add([0, 0, 0], 'M', 'metal')
bonds = []
for q in range(4):
    a = q * math.pi / 2
    n = add(r2([2.05, 0, 0], a), 'N', 'n')
    ca1 = add(r2([2.86, 1.10, 0], a), 'C', 'pyr'); ca2 = add(r2([2.86, -1.10, 0], a), 'C', 'pyr')
    cb1 = add(r2([4.24, 0.68, 0], a), 'C', 'pyr'); cb2 = add(r2([4.24, -0.68, 0], a), 'C', 'pyr')
    h1 = add(r2([5.22, 1.28, 0], a), 'H', 'h'); h2 = add(r2([5.22, -1.28, 0], a), 'H', 'h')
    bonds += [(0, n), (n, ca1), (n, ca2), (ca1, cb1), (ca2, cb2), (cb1, cb2), (cb1, h1), (cb2, h2)]
# meso carbons at 45 deg, linking alpha carbons of neighbouring pyrroles
idx = {}
for i, p in enumerate(A): idx[i] = p
for q in range(4):
    a = q * math.pi / 2 + math.pi / 4
    d = np.array([math.cos(a), math.sin(a), 0.0])
    m = add(3.42 * d, 'C', 'meso')
    # bond meso to the two nearest alpha carbons
    al = sorted([i for i, k in enumerate(KIND) if k == 'pyr' and abs(np.linalg.norm(A[i][:2]) - 3.064) < .05], key=lambda i: np.linalg.norm(A[i] - A[m]))[:2]
    bonds += [(m, al[0]), (m, al[1])]
    ip = add(4.92 * d, 'C', 'ph')
    bonds.append((m, ip))
    # phenyl ring: axis along d, plane spanned by d and a vector twisted out of the macrocycle plane
    perp = np.array([-d[1], d[0], 0.0]); tw = math.radians(65 if q % 2 == 0 else -65)
    u = perp * math.cos(tw) + np.array([0, 0, 1.0]) * math.sin(tw)
    cen = 4.92 * d + 1.39 * d
    ring = [ip]
    for j in range(1, 6):
        t = math.pi + j * math.pi / 3
        ring.append(add(cen + 1.39 * (math.cos(t) * d + math.sin(t) * u), 'C', 'ph'))
    for j in range(6): bonds.append((ring[j], ring[(j + 1) % 6]))
    for j in range(1, 6):
        t = math.pi + j * math.pi / 3; hp = cen + 2.47 * (math.cos(t) * d + math.sin(t) * u)
        bonds.append((ring[j], add(hp, 'H', 'h')))
P = np.array(A)
def rot(ax, a):
    c, s = math.cos(a), math.sin(a)
    return {'x': np.array([[1,0,0],[0,c,-s],[0,s,c]]), 'y': np.array([[c,0,s],[0,1,0],[-s,0,c]]), 'z': np.array([[c,-s,0],[s,c,0],[0,0,1]])}[ax]
R = rot('x', math.radians(pitch)) @ rot('y', math.radians(roll)) @ rot('z', math.radians(yaw))
P = P @ R.T
P[:, 1] *= -1   # screen y down; camera looks along +z (larger z = farther)
RED = np.array([0.88, 0.10, 0.24]); GREEN = np.array([0.44, 0.78, 0.24]); SILV = np.array([0.86, 0.88, 0.90])
PEARL = np.array([0.90, 0.86, 0.82]); HW = np.array([0.97, 0.97, 0.98])
COL = {'metal': SILV, 'n': GREEN, 'pyr': RED, 'meso': PEARL, 'ph': PEARL, 'h': HW}
RAD = {'metal': 0.78, 'n': 0.56, 'pyr': 0.50, 'meso': 0.50, 'ph': 0.46, 'h': 0.30}
# ---------- image frame ----------
pad = 1.6
mn = P[:, :2].min(0) - pad; mx = P[:, :2].max(0) + pad
W = OW * SS; sc = W / (mx[0] - mn[0]); Hh = int(round((mx[1] - mn[1]) * sc))
gx, gy = np.meshgrid((np.arange(W) + .5) / sc + mn[0], (np.arange(Hh) + .5) / sc + mn[1])
zb = np.full((Hh, W), 1e9); nb = np.zeros((Hh, W, 3)); cb = np.zeros((Hh, W, 3)); gl = np.zeros((Hh, W))
def bbox(lo, hi):
    x0 = max(0, int((lo[0] - mn[0]) * sc) - 2); x1 = min(W, int((hi[0] - mn[0]) * sc) + 3)
    y0 = max(0, int((lo[1] - mn[1]) * sc) - 2); y1 = min(Hh, int((hi[1] - mn[1]) * sc) + 3)
    return x0, x1, y0, y1
def put(sl, z, n, col, g, m):
    sub = zb[sl]; m = m & (z < sub)
    if not m.any(): return
    sub[m] = z[m]; nb[sl][m] = n[m]; cb[sl][m] = col; gl[sl][m] = g
for i, p in enumerate(P):
    r = RAD[KIND[i]]; x0, x1, y0, y1 = bbox(p[:2] - r, p[:2] + r)
    sl = (slice(y0, y1), slice(x0, x1))
    dx = gx[sl] - p[0]; dy = gy[sl] - p[1]; d2 = r * r - dx * dx - dy * dy; m = d2 > 0
    dz = np.sqrt(np.clip(d2, 0, None)); z = p[2] - dz
    n = np.dstack([dx, dy, -dz]) / r
    put(sl, z, n, COL[KIND[i]], 1.0 if KIND[i] != 'h' else .7, m)
BR = 0.17
for a, b in bonds:
    pa, pb = P[a], P[b]
    for (p0, p1, k) in ((pa, (pa + pb) / 2, KIND[a]), ((pa + pb) / 2, pb, KIND[b])):
        lo = np.minimum(p0, p1)[:2] - BR; hi = np.maximum(p0, p1)[:2] + BR
        x0, x1, y0, y1 = bbox(lo, hi); sl = (slice(y0, y1), slice(x0, x1))
        ox = gx[sl]; oy = gy[sl]
        # ray o=(x,y,-inf) dir (0,0,1) against cylinder axis p0->p1, radius BR
        ax = p1 - p0; L = np.linalg.norm(ax); ax = ax / L
        wx = ox - p0[0]; wy = oy - p0[1]  # w = o - p0 with o.z free: solve in terms of z
        # point on ray: (ox, oy, z). Distance to axis squared = |w|^2 - (w.ax)^2 where w=(wx,wy,z-p0z)
        # quadratic in t=z-p0z: (1-az^2) t^2 + 2 t (-(wx ax + wy ay) az) + (wx^2+wy^2 - (wx ax+wy ay)^2 - BR^2) = 0
        az = ax[2]; s = wx * ax[0] + wy * ax[1]
        qa = 1 - az * az; qb = -2 * s * az; qc = wx * wx + wy * wy - s * s - BR * BR
        if qa < 1e-6: continue
        disc = qb * qb - 4 * qa * qc; m = disc > 0
        t = (-qb - np.sqrt(np.clip(disc, 0, None))) / (2 * qa)
        proj = s + t * az; m &= (proj >= 0) & (proj <= L)
        z = p0[2] + t
        px = wx - proj * ax[0]; py = wy - proj * ax[1]; pz = t - proj * ax[2]
        n = np.dstack([px, py, pz]) / BR
        put(sl, z, n, COL[k] * .92, .8, m)
cov = zb < 1e8
nb /= np.linalg.norm(nb, axis=2, keepdims=True) + 1e-9
def nl(v): v = np.array(v, float); return v / np.linalg.norm(v)
K1 = nl([-0.55, -0.75, -0.55]); K2 = nl([0.85, 0.25, -0.45]); hv = nl(K1 + np.array([0, 0, -1.0]))
d1 = np.clip((nb * K1).sum(2), 0, 1); d2 = np.clip((nb * K2).sum(2), 0, 1)
spec = np.clip((nb * hv).sum(2), 0, 1)
rim = np.clip(1 - np.abs(nb[..., 2]), 0, 1) ** 3
zf = np.where(cov, zb, np.nan); zmin = np.nanmin(zf); zmax = np.nanmax(zf)
zn = np.where(cov, (zb - zmin) / (zmax - zmin), 1.0)
# contact occlusion: a pixel is darkened where nearby geometry sits closer to the camera
from PIL import ImageFilter
zi = Image.fromarray((zn * 255).astype(np.uint8))
zbl = np.asarray(zi.filter(ImageFilter.MinFilter(9)).filter(ImageFilter.GaussianBlur(6 * SS)), float) / 255
ao = np.clip(1 - 2.4 * np.clip(zn - zbl, 0, 1), 0.4, 1)
depth = 1 - 0.42 * zn
shade = (0.20 + 0.95 * d1 + 0.30 * d2) * ao
col = cb * shade[..., None] * depth[..., None]
col += ((0.75 * spec ** 70 + 0.18 * spec ** 10) * gl * (0.6 + 0.4 * depth))[..., None]
col += (rim * 0.18 * depth)[..., None] * np.array([1.0, 0.62, 0.70])
col = np.clip(col, 0, 1)
rgba = np.dstack([col, cov.astype(float)])
img = Image.fromarray((rgba * 255).astype(np.uint8), 'RGBA').resize((W // SS, Hh // SS), Image.LANCZOS)
img.save(OUT); print('saved', OUT, img.size, 'atoms', len(P), 'bonds', len(bonds))
