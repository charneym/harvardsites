#!/usr/bin/env python3
"""Galibra Neuroscience hero (HOME_BRIEF update 2c: a crafted render of the firm's own product).

Galibra's medicines are AAV gene therapy vectors — GAL005 for SSADH deficiency, built on brain-penetrable
AAV capsids (NIH STTR 1R41NS145933; the 2025 Apertura CapX licence). This renders one such vector particle:
the T=1 icosahedral protein shell of 60 subunits, ~25 nm across, with the relief every published AAV
structure shows — a raised cylinder with a central pore at each 5-fold axis, the canyon ringing it, three
protrusions around each 3-fold axis (the tallest part of the surface) and a dimple at each 2-fold axis.

The molecular surface is built from pseudo-atom spheres whose radius follows that symmetric relief, coloured
by radial distance the way structural biologists colour a capsid map: canyon floors in the site's deep teal,
protrusion tips in the logo green. Rasterised sphere impostors with a shadow map, screen-space ambient
occlusion, a relief-derived cavity term, a cool rim and depth haze into the page ink. Saved with real ALPHA
so nothing can read as a pasted panel (DJ).

Usage: python3 render.py SIZE out.png [SS]
"""
import sys
import numpy as np
from PIL import Image

FW = int(sys.argv[1]) if len(sys.argv) > 1 else 600
OUT = sys.argv[2] if len(sys.argv) > 2 else 'hero.png'
SS = int(sys.argv[3]) if len(sys.argv) > 3 else 2
FH = FW
W, H = FW * SS, FH * SS
rng = np.random.default_rng(11)


def nrm(v):
    return v / np.linalg.norm(v, axis=-1, keepdims=True)


# ---------------- icosahedral symmetry axes ----------------
phi = (1 + 5 ** .5) / 2
V5 = []
for a in (-1, 1):
    for b in (-phi, phi):
        V5 += [(0, a, b), (a, b, 0), (b, 0, a)]
V5 = np.array(V5, float)
ED = [(i, j) for i in range(12) for j in range(i + 1, 12)
      if abs(np.linalg.norm(V5[i] - V5[j]) - 2) < 1e-6]
FA = [(i, j, k) for i, j in ED for k in range(j + 1, 12)
      if (min(i, k), max(i, k)) in ED and (min(j, k), max(j, k)) in ED]
A5 = nrm(V5)
A2 = nrm(np.array([(V5[i] + V5[j]) / 2 for i, j in ED]))
A3 = nrm(np.array([(V5[i] + V5[j] + V5[k]) / 3 for i, j, k in FA]))
assert len(A2) == 30 and len(A3) == 20

# the 60 protrusion peaks: three around each 3-fold axis, leaning toward its 2-fold neighbours
PK = []
for fa in A3:
    for e in A2[(A2 @ fa) > np.cos(0.42)]:
        t = nrm(e - fa * (e @ fa))
        PK.append(fa * np.cos(0.105) + t * np.sin(0.105))
PK = nrm(np.array(PK))
assert len(PK) == 60

# one shoulder loop per subunit, between the 5-fold canyon and the 2-fold dimple
KN = []
for v in A5:
    for e in A2[(A2 @ v) > np.cos(0.6)]:
        t = nrm(e - v * (e @ v))
        w = np.cross(v, t)
        KN.append(nrm(v * np.cos(0.33) + (t * np.cos(0.5) + w * np.sin(0.5)) * np.sin(0.33)))
KN = np.array(KN)


def ang(u, axes, chunk=16000):
    out = np.empty(len(u))
    for s in range(0, len(u), chunk):
        out[s:s + chunk] = np.arccos(np.clip((u[s:s + chunk] @ axes.T).max(1), -1, 1))
    return out


def relief(u):
    """Shell radius in angstrom as a function of direction: the AAV surface relief."""
    a5, a3, a2 = ang(u, A5), ang(u, A3), ang(u, A2)
    ap, ak = ang(u, PK), ang(u, KN)
    h = 111.0
    h += 11.0 * np.exp(-((a5 - 0.062) / 0.030) ** 2)   # 5-fold cylinder
    h -= 9.0 * np.exp(-(a5 / 0.028) ** 2)              # its pore
    h -= 6.5 * np.exp(-((a5 - 0.160) / 0.045) ** 2)    # the canyon around it
    h += 15.5 * np.exp(-(ap / 0.068) ** 2)             # 3-fold protrusions
    h += 7.0 * np.exp(-(a3 / 0.120) ** 2)              # the mound they stand on
    h += 5.0 * np.exp(-(ak / 0.070) ** 2)              # shoulder loops
    h -= 6.0 * np.exp(-(a2 / 0.075) ** 2)              # 2-fold dimple
    h += 1.3 * np.sin(a5 * 41 + 1.1) * np.cos(a3 * 37) + 0.9 * np.sin(a2 * 53 + a3 * 29)
    return h


# ---------------- pseudo-atom surface ----------------
N = int(sys.argv[4]) if len(sys.argv) > 4 else 46000
i = np.arange(N) + .5
th = np.arccos(1 - 2 * i / N)
ph = np.pi * (1 + 5 ** .5) * i
u = nrm(np.stack([np.cos(ph) * np.sin(th), np.sin(ph) * np.sin(th), np.cos(th)], -1)
        + rng.normal(0, 0.0045, (N, 3)))
h1 = relief(u) + rng.normal(0, 0.45, N)
X1 = u * (h1 - 0.6)[:, None]
AR = (46000 / N) ** .5
r1 = rng.uniform(1.75, 2.25, N) * AR
# a sparser layer beneath, so steep flanks never show daylight between atoms
M2 = N // 2
u2 = nrm(u[:M2] + rng.normal(0, 0.006, (M2, 3)))
h2 = relief(u2) - 3.0
X2 = u2 * h2[:, None]
r2 = rng.uniform(2.0, 2.5, M2) * AR
X = np.vstack([X1, X2])
R = np.concatenate([r1, r2])
HH = np.concatenate([h1, h2])

# colour by radius, as a capsid map is coloured: canyon floor deep teal -> tips in the logo green
lo, hi = 103.0, 130.0
tr = np.clip((HH - lo) / (hi - lo), 0, 1)
st = np.array([[0.00, .060, .21, .24],
               [0.38, .110, .38, .41],
               [0.62, .180, .50, .48],
               [0.82, .285, .58, .38],
               [1.00, .400, .66, .34]])
C = np.stack([np.interp(tr, st[:, 0], st[:, k]) for k in (1, 2, 3)], -1)
C *= (1 + rng.uniform(-0.05, 0.05, len(C)))[:, None]


# ---------------- orientation ----------------
def rot(axis, a):
    axis = np.asarray(axis, float)
    axis = axis / np.linalg.norm(axis)
    k = np.array([[0, -axis[2], axis[1]], [axis[2], 0, -axis[0]], [-axis[1], axis[0], 0]])
    return np.eye(3) + np.sin(a) * k + (1 - np.cos(a)) * k @ k


zv = np.array([0, 0, 1.0])
v = nrm(A3[0] * 0.55 + A5[0] * 0.45)
M = rot(np.cross(v, zv), np.arccos(np.clip(v @ zv, -1, 1)))
M = rot([0, 0, 1], np.radians(17)) @ M
M = rot([1, 0, 0], np.radians(-9)) @ rot([0, 1, 0], np.radians(7)) @ M
X = X @ M.T
keep = X[:, 2] > -40
X, R, C = X[keep], R[keep], C[keep]

S = (W * 0.5 * 0.94) / 134.0      # px per angstrom
DIST = 1400.0
f = DIST / (DIST - X[:, 2])
sx = W / 2 + X[:, 0] * S * f
sy = H / 2 - X[:, 1] * S * f
rp = R * S * f
zpx = X[:, 2] * S


def raster(sx, sy, rp, z, Wd, Hd, want_id=False):
    zb = np.full((Hd, Wd), -1e9)
    ib = np.full((Hd, Wd), -1, np.int64)
    for i in np.argsort(z):
        r = rp[i]
        x0 = int(max(0, np.floor(sx[i] - r))); x1 = int(min(Wd, np.ceil(sx[i] + r) + 1))
        y0 = int(max(0, np.floor(sy[i] - r))); y1 = int(min(Hd, np.ceil(sy[i] + r) + 1))
        if x0 >= x1 or y0 >= y1:
            continue
        yy, xx = np.mgrid[y0:y1, x0:x1]
        dd = (xx + .5 - sx[i]) ** 2 + (yy + .5 - sy[i]) ** 2
        m = dd < r * r
        hgt = z[i] + np.sqrt(np.maximum(r * r - dd, 0))
        sub = zb[y0:y1, x0:x1]
        upd = m & (hgt > sub)
        sub[upd] = hgt[upd]
        if want_id:
            ib[y0:y1, x0:x1][upd] = i
    return zb, ib


zb, ib = raster(sx, sy, rp, zpx, W, H, True)
hit = ib >= 0
print('atoms', len(X), 'coverage', round(float(hit.mean()), 4))

yy, xx = np.mgrid[0:H, 0:W]
ii = np.where(hit, ib, 0)
nx = (xx + .5 - sx[ii]) / rp[ii]
ny = -(yy + .5 - sy[ii]) / rp[ii]
nz = np.sqrt(np.clip(1 - nx * nx - ny * ny, 0, 1))
Nn = np.stack([nx, ny, nz], -1)
Pw = X[ii] + Nn * R[ii][..., None]

# shadow map from the key light
Ldir = nrm(np.array([-0.52, 0.60, 0.60]))
lx = nrm(np.cross(np.array([0, 1.0, 0]), Ldir))
ly = np.cross(Ldir, lx)
LS = 2.6
lpx, lpy, lpz = X @ lx * LS, X @ ly * LS, X @ Ldir * LS
offx, offy = -lpx.min() + 10, -lpy.min() + 10
SW, SH = int(lpx.max() + offx + 10), int(lpy.max() + offy + 10)
szb, _ = raster(lpx + offx, lpy + offy, R * LS, lpz, SW, SH)
qx = (Pw @ lx) * LS + offx
qy = (Pw @ ly) * LS + offy
qz = (Pw @ Ldir) * LS
sh = np.zeros((H, W))
for ox, oy in ((0, 0), (1.5, 0), (-1.5, 0), (0, 1.5), (0, -1.5), (1, 1), (-1, -1), (1, -1), (-1, 1)):
    jx = np.clip((qx + ox).astype(int), 0, SW - 1)
    jy = np.clip((qy + oy).astype(int), 0, SH - 1)
    sh += (szb[jy, jx] > qz + 1.2 * LS)
sh = 1 - sh / 9.0

# cavity term straight from the relief, plus screen-space AO
rad = np.linalg.norm(Pw, axis=-1)
cav = np.clip((rad - 104) / 22.0, 0, 1) ** 0.8
zfill = np.where(hit, zb, zb[hit].min() - 40 * S)
occ = np.zeros((H, W)); n = 0
for rr in (5, 11, 22, 40):
    for k in range(10):
        a = k * 2 * np.pi / 10 + rr
        dx, dy = int(round(np.cos(a) * rr * SS)), int(round(np.sin(a) * rr * SS))
        dz = np.roll(np.roll(zfill, dy, 0), dx, 1) - zfill
        occ += np.clip(dz / (rr * SS * 1.2), 0, 1) * (dz < rr * SS * 5)
        n += 1
ssao = 1 - np.clip(occ / n * 1.8, 0, 0.85)

V = np.array([0, 0, 1.0])
ndl = np.clip(Nn @ Ldir, 0, 1)
spec = np.clip(Nn @ nrm(Ldir + V), 0, 1) ** 34
fill = np.clip(Nn @ nrm(np.array([0.70, -0.25, 0.60])), 0, 1)
rim = (1 - nz) ** 3.0
body = np.clip(nrm(Pw) @ Ldir, 0, 1) * 0.55 + 0.45   # large-scale round-body term
base = C[ii]
ao = (ssao * (0.42 + 0.58 * cav))[..., None]
lit = base * (0.30 * ao + (1.02 * ndl * sh * body)[..., None] + (0.14 * fill)[..., None] * ao)
lit += (0.20 * spec * sh)[..., None] * np.array([1.0, 0.99, 0.95])
lit += (0.26 * rim * ao[..., 0])[..., None] * np.array([0.55, 0.85, 0.82])

INK = np.array([10, 27, 31]) / 255.0
zn = (zb - zb[hit].min()) / (zb[hit].max() - zb[hit].min() + 1e-6)
haze = np.clip(1 - zn, 0, 1) ** 1.7 * 0.52
lit = lit * (1 - haze[..., None]) + INK * haze[..., None]
lit = np.clip(lit, 0, 1) ** (1 / 1.12)

alpha = hit.astype(float)
rgba = np.dstack([lit * alpha[..., None], alpha])
im = Image.fromarray((rgba * 255).round().astype(np.uint8), 'RGBA').resize((FW, FH), Image.LANCZOS)
a = np.asarray(im).astype(float) / 255
rgb = a[..., :3] / np.maximum(a[..., 3:], 1e-4)
Image.fromarray((np.dstack([np.clip(rgb, 0, 1), a[..., 3]]) * 255).round().astype(np.uint8), 'RGBA').save(OUT)
print('saved', OUT)
