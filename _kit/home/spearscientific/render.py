#!/usr/bin/env python3
"""Spear hero (HOME_BRIEF update 2c: a crafted render of the real subject). A cleanly sectioned block of human skin, the
"window to dermal microvasculature" that Spear's optoacoustic mesoscopy (RSOM, the Prodigy) reads (CORDIS MOSAIC
101186537; spear-scientific.com/services-1): thin epidermis with rete ridges, the dermis with capillary loops rising into
the papillae, the superficial and deep vascular plexus joined by vertical vessels, and fat lobules below, fading out.
A soft column of pulsed light enters the top face; faint acoustic rings spread from the spot. Numpy sphere tracing of a
rounded box. Saved with ALPHA (no ground of its own, DJ). Usage: python3 render.py W H out.png [SS]"""
import sys, numpy as np
from PIL import Image

W = int(sys.argv[1]) if len(sys.argv) > 1 else 600
H = int(sys.argv[2]) if len(sys.argv) > 2 else 640
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = float(sys.argv[4]) if len(sys.argv) > 4 else 1.0
FW, FH = W, H; W, H = int(W * SS), int(H * SS)

def nrm(v): return v / np.linalg.norm(v, axis=-1, keepdims=True)
rng = np.random.default_rng(7)
PERM = rng.permutation(256); PERM = np.concatenate([PERM, PERM]); GV = rng.random(256) * 2 - 1
def n2(x, y):
    xi = np.floor(x).astype(np.int64); yi = np.floor(y).astype(np.int64); fx = x - xi; fy = y - yi
    u = fx * fx * (3 - 2 * fx); v = fy * fy * (3 - 2 * fy)
    def h(dx, dy): return GV[PERM[(PERM[(xi + dx) & 255] + yi + dy) & 255]]
    return (h(0, 0) * (1 - u) + h(1, 0) * u) * (1 - v) + (h(0, 1) * (1 - u) + h(1, 1) * u) * v
def fbm(x, y, o=4):
    s = 0; a = .5; f = 1
    for _ in range(o): s = s + a * n2(x * f, y * f); a *= .5; f *= 2.03
    return s

# geometry: a rounded slab, top at y=T
BX, BY, BZ, R = 1.0, 0.52, 0.78, 0.035
T = BY
def sdf(p):
    q = np.abs(p) - np.array([BX - R, BY - R, BZ - R])
    return np.linalg.norm(np.maximum(q, 0), axis=-1) + np.minimum(np.max(q, axis=-1), 0) - R

# camera: front-left, above, looking slightly down
cam = np.array([-2.55, 2.05, -3.55]); tgt = np.array([0.04, -0.05, 0.0])
fwd = nrm(tgt - cam); rgt = nrm(np.cross(np.array([0, 1., 0]), fwd)); up = np.cross(fwd, rgt)
fov = 0.40
ys, xs = np.mgrid[0:H, 0:W]
px = (xs + .5) / W * 2 - 1; py = 1 - (ys + .5) / H * 2
asp = W / H
d = nrm(fwd[None, None] + rgt[None, None] * (px[..., None] * fov * asp) + up[None, None] * (py[..., None] * fov))
d = d.reshape(-1, 3); o = np.broadcast_to(cam, d.shape).copy()
t = np.zeros(len(d)); hit = np.zeros(len(d), bool); alive = np.ones(len(d), bool)
for i in range(110):
    idx = np.nonzero(alive)[0]
    if not len(idx): break
    p = o[idx] + d[idx] * t[idx, None]; s = sdf(p)
    h = s < 1e-4; hit[idx[h]] = True; alive[idx[h]] = False
    t[idx] += s; far = t[idx] > 12; alive[idx[far]] = False
P = o + d * t[:, None]
e = 1e-3
N = np.zeros_like(P)
for k in range(3):
    dv = np.zeros(3); dv[k] = e
    N[:, k] = sdf(P + dv) - sdf(P - dv)
N = nrm(N + 1e-12)

col = np.zeros((len(d), 3)); alpha = np.zeros(len(d))
hi = np.nonzero(hit)[0]
p = P[hi]; n = N[hi]
top = n[:, 1] > .6
sideX = (~top) & (np.abs(n[:, 0]) >= np.abs(n[:, 2]))
u = np.where(sideX, p[:, 2], p[:, 0])      # coordinate along the cut face
y = p[:, 1]
dep = T - y                                  # depth below the skin surface

# ---- tissue on the cut faces -------------------------------------------------------------------------------------------
EPI = 0.065
sw = np.sin(u * 46 + 1.3 * fbm(u * 3, 1.7))
ridge = 0.018 * (0.5 + 0.5 * np.sign(sw) * np.abs(sw) ** .6) + 0.006 * fbm(u * 18, 4.2)
dej = EPI + ridge                            # dermo-epidermal junction depth (rete ridges)
DER = 0.66                                   # dermis down to here, then fat
c_epi = np.array([.86, .72, .62]); c_sc = np.array([.93, .85, .76])
c_der = np.array([.86, .62, .55]); c_derD = np.array([.80, .55, .49])
c_fat = np.array([.92, .80, .56]); c_ves = np.array([.62, .07, .10]); c_vesL = np.array([.80, .16, .16])
tissue = np.zeros((len(p), 3))
grain = fbm(u * 40, y * 40, 3)
fib = 0.5 + 0.5 * fbm(u * 14 + 5 * fbm(u * 3, y * 3), y * 60, 3)      # wavy collagen bundles
mix = np.clip((dep - dej) / (DER - dej), 0, 1)
der = c_der * (1 - mix[:, None]) + c_derD * mix[:, None]
der = der * (0.95 + 0.06 * fib[:, None]) + 0.015 * grain[:, None]
tissue[:] = der
epi = dep < dej
strat = 0.5 + 0.5 * np.sin(dep * 900)
ep = c_epi * (0.96 + 0.04 * strat[:, None]) + (c_sc - c_epi) * np.clip(1 - dep / 0.014, 0, 1)[:, None]
tissue[epi] = ep[epi]
# fat lobules (Voronoi cells) below the dermis
fat = dep > DER + 0.04 * fbm(u * 5, 9.1)
cs = 0.12
gu = np.floor(u / cs); gy = np.floor(y / cs)
best = np.full(len(p), 9.); sec = np.full(len(p), 9.)
for a in (-1, 0, 1):
    for b in (-1, 0, 1):
        cu = gu + a; cy = gy + b
        hsh = np.sin(cu * 127.1 + cy * 311.7) * 43758.5453; jx = hsh - np.floor(hsh)
        hsh2 = np.sin(cu * 269.5 + cy * 183.3) * 43758.5453; jy = hsh2 - np.floor(hsh2)
        dd = np.hypot(u - (cu + .15 + .7 * jx) * cs, y - (cy + .15 + .7 * jy) * cs)
        sec = np.where(dd < best, best, np.minimum(sec, dd)); best = np.minimum(best, dd)
edge = np.clip((sec - best) / 0.007, 0, 1)
fc = c_fat * (0.9 + 0.1 * edge[:, None]) * (1.0 - 0.12 * np.clip(best / cs, 0, 1)[:, None])
fc = fc * edge[:, None] + np.array([.92, .70, .58])[None] * (1 - edge[:, None])
tissue[fat] = fc[fat]

# vessels: (1) capillary loops into each papilla, (2) superficial plexus, (3) deep plexus, (4) vertical connectors
ves = np.zeros(len(p))
def line(dist, w): return np.clip(1 - dist / w, 0, 1) ** 1.5
pap = (u * 46 + 1.3 * fbm(u * 3, 1.7)) / (2 * np.pi)                 # papilla index along u
pf = pap - np.floor(pap)                                              # 0..1 across one ridge period
# a papilla sits where the ridge is shallowest (sin = -1 -> pf ~ .75); loop: two limbs rising from the plexus
sp = 0.165 + 0.02 * fbm(u * 4, 3.3)                                    # superficial plexus depth
inl = (dep > EPI + 0.008) & (dep < sp)
lim = np.minimum(np.abs(pf - .70), np.abs(pf - .80)) * (2 * np.pi / 46)
ves = np.maximum(ves, np.where(inl, line(lim, 0.0042), 0))
ves = np.maximum(ves, np.where(dep < sp, line(np.hypot(np.abs(pf - .75) * (2 * np.pi / 46), np.maximum(EPI + .012 - dep, 0) * 3), 0.006) * (dep > EPI), 0))
ves = np.maximum(ves, line(np.abs(dep - sp), 0.0048))
dp = 0.58 + 0.03 * fbm(u * 3, 7.7)
brk = np.clip(0.5 + 2.5 * fbm(u * 6, 2.2), 0, 1)
ves = np.maximum(ves, line(np.abs(dep - dp), 0.0075) * (.55 + .45 * brk))
ves = np.maximum(ves, .8 * line(np.abs(dep - dp - 0.018 - 0.01 * fbm(u * 9, 5.5)), 0.004))
# vertical connectors, wandering
for k, (f0, ph) in enumerate([(2.1, .3), (3.3, 1.9), (1.6, 4.1), (2.7, 2.6)]):
    cx = (np.floor(u * f0 + ph) + .5 - ph) / f0 + 0.03 * np.sin(dep * 16 + k)
    w = (dep > sp) & (dep < dp)
    ves = np.maximum(ves, np.where(w, line(np.abs(u - cx), 0.0055), 0))
# small branching vessels in the reticular dermis (subtle texture only)
nv = np.abs(fbm(u * 7 + 11, y * 7, 3))
ves = np.maximum(ves, 0.5 * np.where((dep > sp) & (dep < DER), line(nv, 0.008), 0))
ves = np.where(fat, np.where(edge < .3, 0.12, 0), ves)
ves = np.clip(ves, 0, 1)
va = ves[:, None] * .9
vc = c_ves * (1 - .4 * ves[:, None]) + c_vesL * .4 * ves[:, None]
tissue = tissue * (1 - va) + vc * va

# ---- top face: skin surface ------------------------------------------------------------------------------------------
pt = p[top]
cell = fbm(pt[:, 0] * 30, pt[:, 2] * 30, 4)
lines = np.abs(fbm(pt[:, 0] * 6 + 3, pt[:, 2] * 6 - 2, 3))
skin = np.array([.88, .70, .60]) * (0.95 + 0.05 * cell[:, None]) - 0.06 * line(lines, .02)[:, None]
r = np.hypot(pt[:, 0] - .02, pt[:, 2] + .04)
skin = skin
tissue[top] = skin

# ---- lighting --------------------------------------------------------------------------------------------------------
L = nrm(np.array([-0.55, 0.85, -0.35]))
dif = np.clip((n * L).sum(1), 0, 1)
fill = np.clip((n * nrm(np.array([0.8, 0.3, -0.6]))).sum(1), 0, 1)
vdir = -d[hi]
hv = nrm(L[None] + vdir)
spec = np.clip((n * hv).sum(1), 0, 1) ** 60 * np.where(top, .18, .05)
sh = 0.34 + 0.6 * dif + 0.16 * fill
c = tissue * sh[:, None] + spec[:, None]
# subsurface: the cut faces glow a touch warmer near the top
c = c + np.where(~top, np.clip(1 - dep / 0.3, 0, 1) * .03, 0)[:, None] * np.array([1, .4, .3])
# the light spot and acoustic rings on the top face
spot = np.zeros(len(p)); rings = np.zeros(len(p))
spot[top] = np.exp(-(r / 0.10) ** 2)
rings[top] = (np.clip(np.cos((r - 0.12) * 85), 0, 1) ** 6) * np.exp(-((r - 0.12) / 0.32) ** 2) * (r > 0.12)
blu = np.array([.62, .78, 1.0])
c = c * (1 - .25 * spot[:, None]) + blu * (1.05 * spot[:, None]) + blu * .10 * rings[:, None]
# the bottom fades out into the page (alpha) so the block never ends on a line (DJ)
fade = np.clip((y + BY - 0.02) / 0.5, 0, 1) ** 1.4
col[hi] = c
alpha[hi] = fade

# ---- the beam: a soft column of light above the spot (closest approach of each ray to the axis) ------------------------
A0 = np.array([0.02, T, -0.04]); ax = nrm(np.array([0.0, 1, 0.0]))
w0 = o - A0
b = (d * ax).sum(1); dd_ = (d * w0).sum(1); ee = (ax * w0).sum(1)
den = 1 - b * b
tr = (b * ee - dd_) / np.maximum(den, 1e-6); sa = (ee - b * dd_) / np.maximum(den, 1e-6)
pa = o + d * tr[:, None]; pb = A0 + ax[None] * sa[:, None]
dist = np.linalg.norm(pa - pb, axis=1)
occl = np.where(hit, tr < t, True) & (sa > 0)
rad = 0.05 + 0.012 * sa
beam = np.exp(-(dist / rad) ** 2) * np.exp(-sa / 0.9) * np.clip(1 - sa / 1.55, 0, 1) ** 1.5 * occl * np.clip(sa / 0.04, 0, 1)
beam = beam * .85
col = col * (1 - beam[:, None]) + blu[None] * beam[:, None]
alpha = np.maximum(alpha, beam)
# glow around the spot (soft halo)
img = np.concatenate([np.clip(col, 0, 1), alpha[:, None]], 1).reshape(H, W, 4)
im = Image.fromarray((img * 255 + .5).astype(np.uint8), 'RGBA')
if SS != 1: im = im.resize((FW, FH), Image.LANCZOS)
im.save(OUT)
print('saved', OUT, im.size)
