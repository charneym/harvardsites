#!/usr/bin/env python3
"""Offline ray-traced render of a human eye for the eyecbetter hero (HOME_BRIEF update 2c: a crafted render of the subject).
Anatomical proportions (globe radius 12 mm, corneal radius of curvature 7.8 mm, limbus radius ~5.85 mm, iris plane just
behind the limbus), a refracting cornea (n = 1.336) over a procedurally textured iris (radial stroma fibres, collarette,
crypts, pupillary ruff, limbal ring), a wet sclera with faint conjunctival vessels, a softbox catchlight and a cool rim
light in the brand cyan. Supersampled, written with true alpha. Usage: python3 render.py out.png [size]"""
import sys, numpy as np
from PIL import Image

OUT = sys.argv[1] if len(sys.argv) > 1 else 'hero.png'
N = int(sys.argv[2]) if len(sys.argv) > 2 else 1300
SS = 2
W = H = N * SS

def nrm(v):
    return v / np.linalg.norm(v, axis=-1, keepdims=True)

# ---------- value noise (vectorised, 3D) ----------
rng = np.random.default_rng(7)
PERM = rng.permutation(256)
PERM = np.concatenate([PERM, PERM])
VALS = rng.random(256)
def vnoise(x, y, z):
    xi, yi, zi = np.floor(x).astype(np.int64), np.floor(y).astype(np.int64), np.floor(z).astype(np.int64)
    xf, yf, zf = x - xi, y - yi, z - zi
    u, v, w = [t * t * t * (t * (t * 6 - 15) + 10) for t in (xf, yf, zf)]
    xi &= 255; yi &= 255; zi &= 255
    def h(a, b, c):
        return VALS[PERM[PERM[PERM[a] + b] + c] & 255]
    x1 = (xi + 1) & 255; y1 = (yi + 1) & 255; z1 = (zi + 1) & 255
    l = lambda a, b, t: a + (b - a) * t
    return l(l(l(h(xi, yi, zi), h(x1, yi, zi), u), l(h(xi, y1, zi), h(x1, y1, zi), u), v),
             l(l(h(xi, yi, z1), h(x1, yi, z1), u), l(h(xi, y1, z1), h(x1, y1, z1), u), v), w)
def fbm(x, y, z, oct=5, lac=2.03, g=.5):
    s, a, f, tot = 0, 1, 1, 0
    for i in range(oct):
        s = s + a * vnoise(x * f + i * 17.3, y * f + i * 9.1, z * f + i * 3.7); tot += a; a *= g; f *= lac
    return s / tot

# ---------- scene ----------
G = nrm(np.array([-0.40, 0.06, 0.91]))          # gaze: toward the viewer and slightly left (toward the headline)
UP = nrm(np.cross(np.cross(G, [0, 1, 0]), G) * -1)
UP = nrm(np.array([0, 1, 0]) - G * G[1])
RT = np.cross(UP, G)
CC, RC = 0.443, 0.65                             # cornea sphere centre along G, radius (globe radius 1)
HL = 0.873                                       # limbus plane (p.G)
HI, RI, RP = 0.80, 0.445, 0.115                   # iris plane, iris radius, pupil radius
ETA = 1 / 1.336
KEY = nrm(np.array([-0.55, 0.62, 0.62]))         # softbox key, upper left front
RIM = nrm(np.array([0.85, 0.05, -0.45]))          # cyan rim from behind right
FIL = nrm(np.array([0.2, -0.6, 0.75]))           # weak warm fill from below
CYAN = np.array([0.15, 0.62, 0.88])

def env(d):
    """environment seen in reflections: a soft rectangular softbox up-left, a dim strip window right, dark studio"""
    out = np.zeros(d.shape[:-1] + (3,))
    # softbox
    a = d @ KEY
    sx = d @ nrm(np.cross(KEY, [0, 1, 0])); sy = d @ nrm(np.cross(np.cross(KEY, [0, 1, 0]), KEY))
    box = (np.clip((0.30 - np.abs(sx)) / 0.10, 0, 1) * np.clip((0.20 - np.abs(sy)) / 0.08, 0, 1) * (a > 0))
    box = box ** 1.5
    out += box[..., None] * np.array([9.0, 8.9, 8.6])
    # a narrow cool strip (the rim source)
    b = d @ nrm(np.array([0.75, 0.25, 0.6]))
    out += (np.clip((b - 0.985) / 0.01, 0, 1))[..., None] * (CYAN * 2.2)
    # faint studio gradient
    out += (0.015 + 0.03 * np.clip(d[..., 1], 0, 1))[..., None] * np.array([0.5, 0.6, 0.9])
    return out

def sph(o, d, c, r):
    oc = o - c
    b = np.sum(oc * d, -1); cq = np.sum(oc * oc, -1) - r * r
    disc = b * b - cq
    hit = disc > 0
    sq = np.sqrt(np.maximum(disc, 0))
    return hit, -b - sq, -b + sq

# camera: mild perspective
CAM = np.array([0, 0, 9.0]); FOV = 1.12 / 9.0
ys, xs = np.mgrid[0:H, 0:W]
px = ((xs + .5) / W * 2 - 1) * FOV
py = (1 - (ys + .5) / H * 2) * FOV
D = nrm(np.stack([px, py, -np.ones_like(px)], -1))
O = np.broadcast_to(CAM, D.shape)

col = np.zeros(D.shape)
alpha = np.zeros(D.shape[:-1])

hs, ts, _ = sph(O, D, np.zeros(3), 1.0)
hc, tc, _ = sph(O, D, G * CC, RC)
Pc = O + D * tc[..., None]
cornea = hc & ((Pc @ G) > HL)
Ps = O + D * ts[..., None]
sclera = hs & ~cornea & ((Ps @ G) <= HL + 1e-6)
alpha[cornea | sclera] = 1

# ---------- sclera ----------
P = Ps[sclera]; Nn = P.copy(); V = -D[sclera]
h = P @ G
q = P * 3.1
base = np.array([0.74, 0.70, 0.67])
mott = fbm(q[:, 0], q[:, 1], q[:, 2], 4)
m2 = fbm(q[:, 0] * 0.45 + 5, q[:, 1] * 0.45, q[:, 2] * 0.45, 3)
c = base * (0.82 + 0.3 * mott)[:, None] * (np.array([1.0, 0.97, 0.98]) + np.array([0.03, -0.04, 0.02]) * (m2[:, None] - .5) * 4)
# warm blush toward the equator, faint yellowing toward the back
c *= (1 - 0.10 * np.clip(0.5 - h, 0, 1))[:, None] * np.array([1.0, 0.97, 0.93])
c = c * (1 - 0.12 * np.clip((0.55 - h), 0, 1)[:, None]) + np.array([0.08, 0.02, 0.02]) * np.clip(0.6 - h, 0, 0.6)[:, None]
# conjunctival vessels: ridged noise, thin and faint, densest away from the limbus
vq = P * 5.2
for k, (s, wgt) in enumerate([(1.0, 1.0), (2.1, 0.55)]):
    n1 = fbm(vq[:, 0] * s + 4, vq[:, 1] * s, vq[:, 2] * s, 4)
    ridge = 1 - np.abs(2 * n1 - 1)
    vein = np.clip((ridge - 0.955) / 0.045, 0, 1) ** 1.3
    reach = np.clip((HL - 0.04 - h) / 0.45, 0, 1) ** 0.8
    patch = np.clip((fbm(P[:, 0] * 1.6 + 9, P[:, 1] * 1.6, P[:, 2] * 1.6, 2) - 0.36) / 0.2, 0, 1)
    vv = vein * reach * wgt * 0.8 * patch
    c = c * (1 - vv[:, None]) + np.array([0.55, 0.12, 0.12]) * vv[:, None] * (0.75 + 0.25 * mott[:, None])
# limbal shadow: a soft grey-blue ring where the cornea meets the sclera
lim = np.exp(-((h - HL) / 0.03) ** 2)
c = c * (1 - 0.55 * lim[:, None]) + np.array([0.06, 0.08, 0.12]) * 0.55 * lim[:, None]
# lighting
wrap = lambda nl, w: np.clip((nl + w) / (1 + w), 0, 1)
dif = 1.18 * wrap(Nn @ KEY, 0.12) ** 1.9 + 0.06 * wrap(Nn @ FIL, 0.3)
rimv = np.clip(Nn @ RIM, 0, 1) ** 1.6 * 0.9
amb = 0.02
lit = c * (dif + amb)[:, None] + (CYAN * rimv[:, None]) * 0.55
# cool the shadow side toward the brand navy rather than black
sh = np.clip(1 - wrap(Nn @ KEY, 0.12), 0, 1) ** 2
# subsurface: a warm red bleed at the terminator
term = np.exp(-((Nn @ KEY) / 0.22) ** 2)
lit = lit + np.array([0.10, 0.025, 0.02]) * term[:, None] * 0.6
lit = lit * (1 - 0.35 * sh[:, None]) + np.array([0.035, 0.04, 0.12]) * sh[:, None] * 0.6
# wet tear film reflection on a faintly uneven surface
bq = P * 14
Nn = nrm(Nn + 0.035 * np.stack([fbm(bq[:, 0], bq[:, 1], bq[:, 2], 3) - .5, fbm(bq[:, 1] + 3, bq[:, 2], bq[:, 0], 3) - .5, fbm(bq[:, 2] + 7, bq[:, 0], bq[:, 1], 3) - .5], -1))
R = 2 * (np.sum(V * Nn, -1))[:, None] * Nn - V
F = 0.02 + 0.98 * (1 - np.clip(np.sum(V * Nn, -1), 0, 1)) ** 5
lit += env(R) * F[:, None] * 2.6
col[sclera] = lit

# ---------- cornea, aqueous and iris ----------
P = Pc[cornea]; Nn = nrm(P - G * CC); I = D[cornea]; V = -I
cosi = -np.sum(I * Nn, -1)
k = 1 - ETA ** 2 * (1 - cosi ** 2)
T = nrm(ETA * I + (ETA * cosi - np.sqrt(np.maximum(k, 0)))[:, None] * Nn)
# intersect the refracted ray with the iris plane
den = T @ G
tt = (HI - P @ G) / np.where(np.abs(den) < 1e-6, -1e-6, den)
Q = P + T * tt[:, None]
Qo = Q - G * HI
r = np.linalg.norm(Qo, axis=-1)
th = np.arctan2(Qo @ UP, Qo @ RT)
rn = r / RI
# fibres wander: warp the angle with low-frequency noise so the stroma waves instead of streaking
th = th + 0.16 * (fbm(np.cos(th) * 3 + 2, np.sin(th) * 3, rn * 5, 3) - 0.5)
cx, sx_ = np.cos(th), np.sin(th)
# stroma fibres: strongly radial streaks (high angular, low radial frequency), two scales
f1 = fbm(cx * 34, sx_ * 34, rn * 2.2, 5)
f2 = fbm(cx * 90 + 3, sx_ * 90, rn * 4.0, 3)
iso = fbm(Qo[:, 0] * 60, Qo[:, 1] * 60, Qo[:, 2] * 60, 3)
f1 = fbm(cx * 20, sx_ * 20, rn * 3.2, 5)
fib = 0.45 * f1 + 0.3 * f2 + 0.25 * iso
fib = np.clip((fib - 0.38) / 0.32, 0, 1) ** 1.6
fib = fib * (0.75 + 0.5 * fbm(cx * 160, sx_ * 160, rn * 9, 2))
# colours: slate blue outer stroma, amber collarette around the pupil (heterochromia of the collarette is common)
blue = np.array([0.05, 0.13, 0.26]); blueL = np.array([0.26, 0.46, 0.66])
amber = np.array([0.24, 0.15, 0.06]); amberL = np.array([0.62, 0.42, 0.18])
coll_r = 0.47 + 0.05 * (fbm(cx * 6, sx_ * 6, 1.3, 3) - 0.5)
mix = np.clip((rn - coll_r) / 0.10 + 0.5, 0, 1)
cin = (amber + (amberL - amber) * fib[:, None]) * (1 - mix[:, None]) + (blue + (blueL - blue) * fib[:, None]) * mix[:, None]
# the collarette ridge itself: a slightly raised lighter ring
ridge = np.exp(-((rn - coll_r) / 0.025) ** 2)
cin = cin * (1 + 0.35 * ridge[:, None])
# crypts: dark lacunae in the mid-stroma
cr = fbm(cx * 13 + 7, sx_ * 13, rn * 6.0, 4)
crypt = np.clip((0.33 - cr) / 0.06, 0, 1) * np.clip((rn - 0.45) / 0.1, 0, 1) * np.clip((0.88 - rn) / 0.08, 0, 1)
cin = cin * (1 - 0.65 * crypt[:, None])
# furrows: faint concentric contraction folds in the outer iris
fur = 0.5 + 0.5 * np.sin(rn * 70 + 3 * fbm(cx * 4, sx_ * 4, 2, 2))
cin = cin * (1 - 0.12 * (fur ** 8 * np.clip((rn - 0.7) / 0.1, 0, 1))[:, None])
# limbal ring: the dark outer border of the iris
cin = cin * (1 - 0.78 * np.clip((rn - 0.84) / 0.16, 0, 1)[:, None] ** 1.1)
# pupillary ruff
rp = RP / RI
ruff = np.exp(-((rn - rp - 0.02) / 0.018) ** 2)
cin = cin * (1 - 0.5 * ruff[:, None]) + np.array([0.18, 0.09, 0.04]) * 0.5 * ruff[:, None]
# pupil and beyond-iris
pup = np.clip((rp - rn) / 0.012 + 0.5, 0, 1)
cin = cin * (1 - pup[:, None]) + np.array([0.006, 0.007, 0.012]) * pup[:, None]
# beyond the iris: the sclera seen through the clear peripheral cornea, a soft grey limbal band (no hard edge)
lb = np.clip((rn - 0.97) / 0.10, 0, 1)
scl = np.array([0.30, 0.30, 0.32]) * (0.55 + 0.45 * lb[:, None])
cin = cin * (1 - np.clip((rn - 0.96) / 0.06, 0, 1)[:, None]) + scl * np.clip((rn - 0.96) / 0.06, 0, 1)[:, None]
# iris lighting: light through the cornea from the key, shadowed toward the upper rim by the limbus overhang
Tk = KEY
il = 0.55 + 0.9 * np.clip(Qo @ (-np.array([KEY @ RT, KEY @ UP, 0]) @ np.stack([RT, UP, G])), -0.4, 0.6) * 0
il = 0.78 * np.clip(0.5 + 0.55 * (-(Qo @ KEY) / RI), 0.2, 1.1)
# the limbus overhang shades the upper iris
il = il * (1 - 0.35 * np.clip((Qo @ UP) / RI, 0, 1) ** 1.5)
cin = cin * il[:, None] * 1.15
# a soft caustic brightening on the iris opposite the key light
cau = np.exp(-(((Qo @ RT) - 0.18) ** 2 + ((Qo @ UP) + 0.16) ** 2) / 0.02)
cin = cin * (1 + 0.55 * cau[:, None])
# depth haze of the aqueous (very faint) and corneal Fresnel reflection
Rr = 2 * (np.sum(V * Nn, -1))[:, None] * Nn - V
F = 0.025 + 0.975 * (1 - np.clip(np.sum(V * Nn, -1), 0, 1)) ** 5
lit = cin * (1 - F[:, None]) + env(Rr) * F[:, None] * 1.3
# the rim light grazes the cornea too
lit += (CYAN * (np.clip(Nn @ RIM, 0, 1) ** 3 * 0.25)[:, None])
col[cornea] = lit

# ---------- tone map, grade, downsample ----------
x = col * 1.05
x = x * (2.51 * x + 0.03) / (x * (2.43 * x + 0.59) + 0.14)   # ACES fit
x = np.clip(x, 0, 1) ** (1 / 2.2)
rgb = (x.reshape(N, SS, N, SS, 3).mean((1, 3)))
a = alpha.reshape(N, SS, N, SS).mean((1, 3))
# un-premultiply edge pixels (background was black)
rgb = np.where(a[..., None] > 0, rgb / np.maximum(a[..., None], 1e-4), 0)
img = np.dstack([np.clip(rgb, 0, 1) * 255, a * 255]).astype(np.uint8)
im = Image.fromarray(img, 'RGBA')
bb = im.getbbox()
pad = int(N * 0.01)
im = im.crop((bb[0] - pad, bb[1] - pad, bb[2] + pad, bb[3] + pad))
im.save(OUT)
print('wrote', OUT, im.size)
