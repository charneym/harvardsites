#!/usr/bin/env python3
"""NexPlasmaGen hero (HOME_BRIEF update 2c: a crafted render of the firm's real product). The handheld applicator of the
Convertible Plasma Jet (CPJ), modelled on NexPlasmaGen's own product render (Applicator V5.1: a polished stainless
cylinder in two halves, a dark collar with two screws and the cable exit, a short nozzle and a fine needle), held point
down and releasing a cold plasma jet in the violet-magenta of the logo. The applicator is sphere-traced (numpy) as a solid
of revolution and shaded against a soft studio environment; the cable is a shaded 2D tube; the jet is an emission volume.
Saved with ALPHA (no ground of its own, DJ/DP). Usage: python3 render.py W H out.png"""
import sys, numpy as np
from PIL import Image

W = int(sys.argv[1]) if len(sys.argv) > 1 else 1200
H = int(sys.argv[2]) if len(sys.argv) > 2 else 1500
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = 2
w, h = W * SS, H * SS
S = h / 7.4                    # pixels per world unit

def nrm(v): return v / np.maximum(np.linalg.norm(v, axis=-1, keepdims=True), 1e-9)

# axis: from the back cap (upper right) down to the needle tip (lower left), tipped slightly toward the camera
U = nrm(np.array([-0.40, -0.90, -0.17]))
C0 = np.array([0.95, 2.55, 0.0])          # back cap centre, world units (origin = image centre, y up)
L = 4.35                                   # length to the needle tip
TIP = C0 + U * L

# profile segments along the axis: (s0, s1, r0, r1, material)  0 steel, 1 collar, 2 needle
SEG = [(0.00, 1.42, .255, .255, 0), (1.42, 2.02, .300, .300, 1), (2.02, 3.40, .255, .255, 0),
       (3.40, 3.62, .255, .070, 0), (3.62, 4.35, .028, .028, 2)]

def sd_frustum(s, rad, s0, s1, r0, r1):
    """exact-ish SDF of a capped cone between s0 and s1 (iq's capped cone, 2D in (radial, axial))."""
    hh = (s1 - s0) / 2; y = s - (s0 + hh); x = rad
    ra, rb = r0, r1
    k1 = np.array([rb, hh]); k2 = np.array([rb - ra, 2 * hh])
    cax = x - np.minimum(x, np.where(y < 0, ra, rb)); cay = np.abs(y) - hh
    t = np.clip(((k1[0] - x) * k2[0] + (k1[1] - y) * k2[1]) / (k2 @ k2), 0, 1)
    cbx = x - k1[0] + k2[0] * t; cby = y - k1[1] + k2[1] * t
    sg = np.where((cbx < 0) & (cay < 0), -1.0, 1.0)
    return sg * np.sqrt(np.minimum(cax * cax + cay * cay, cbx * cbx + cby * cby))

def sdf(P):
    q = P - C0; s = q @ U; radv = q - s[:, None] * U; rad = np.linalg.norm(radv, axis=-1)
    d = np.full(len(P), 1e9); m = np.zeros(len(P), int)
    for (s0, s1, r0, r1, mt) in SEG:
        di = sd_frustum(s, rad, s0, s1, r0, r1)
        if mt == 0: di = di - 0.0  # crisp machined edges
        sel = di < d; d = np.where(sel, di, d); m = np.where(sel, mt, m)
    # soften the back cap edge (a machined chamfer)
    return d, m, s, rad

def env(R):
    """a soft studio: two tall softboxes either side (what a near-vertical cylinder actually reflects), a dark centre
    gap for the chrome contrast, a faint violet bounce from the jet below"""
    y = R[:, 1]; x = R[:, 0]
    base = 0.08 + 0.06 * np.clip(y + 0.3, 0, 1)
    k1 = np.exp(-((x + 0.5) / 0.26) ** 2) * (0.75 + 0.25 * np.clip(y + 0.5, 0, 1)) * 1.7
    k2 = np.exp(-((x - 0.62) / 0.12) ** 2) * 1.25
    k3 = np.exp(-((x + 0.05) / 0.05) ** 2) * 0.16
    col = (base + k1 + k2 + k3)[:, None] * np.array([0.92, 0.93, 0.98])
    rim = np.exp(-((x + 0.93) / 0.06) ** 2) * 0.35
    col += rim[:, None] * np.array([0.7, 0.45, 0.9])
    bounce = np.exp(-((y + 0.75) / 0.4) ** 2) * 0.22
    col += bounce[:, None] * np.array([0.72, 0.28, 0.68])
    return col

# --- pixel grid, limited to the tube around the projected axis ---
py, px = np.mgrid[0:h, 0:w]
X = (px + 0.5 - w / 2) / S; Y = -(py + 0.5 - h / 2) / S
a2 = np.array([C0[0], C0[1]]); b2 = np.array([TIP[0], TIP[1]])
ab = b2 - a2; tt = np.clip(((X - a2[0]) * ab[0] + (Y - a2[1]) * ab[1]) / (ab @ ab), 0, 1)
dd = np.hypot(X - (a2[0] + ab[0] * tt), Y - (a2[1] + ab[1] * tt))
idx = np.nonzero(dd.ravel() < 0.42)[0]
O = np.stack([X.ravel()[idx], Y.ravel()[idx], np.full(len(idx), -12.0)], -1)
D = np.array([0, 0, 1.0])
T = np.zeros(len(idx)); hit = np.zeros(len(idx), bool); alive = np.ones(len(idx), bool)
for it in range(160):
    ai = np.nonzero(alive)[0]
    if len(ai) == 0: break
    P = O[ai] + T[ai, None] * D
    d, _, _, _ = sdf(P)
    T[ai] += d * 0.9
    hit[ai[d < 1.5e-4]] = True
    alive[ai[(d < 1.5e-4) | (T[ai] > 24)]] = False

RGB = np.zeros((h * w, 3)); A = np.zeros(h * w)
hi = idx[hit]; P = O[hit] + T[hit, None] * D
d0, M, sP, radP = sdf(P)
e = 2e-4
Nn = np.stack([sdf(P + np.array([e, 0, 0]))[0] - sdf(P - np.array([e, 0, 0]))[0],
               sdf(P + np.array([0, e, 0]))[0] - sdf(P - np.array([0, e, 0]))[0],
               sdf(P + np.array([0, 0, e]))[0] - sdf(P - np.array([0, 0, e]))[0]], -1)
Nn = nrm(Nn)
V = -D
R = nrm(2 * (Nn @ V)[:, None] * Nn - V)
fres = 0.62 + 0.38 * (1 - np.clip(Nn @ V, 0, 1)) ** 5
E = env(R)
# fine circumferential machining marks on the steel (subtle, view-independent)
mark = 1 + 0.035 * np.sin(sP * 900) * np.sin(sP * 37)
steel = E * fres[:, None] * np.array([0.92, 0.93, 0.97]) * mark[:, None]
# the collar: dark anodised grey, a soft wide sheen and a little edge light
Ld = nrm(np.array([-0.35, 0.8, -0.5]))
dif = np.clip(Nn @ Ld, 0, 1)
sheen = env(R) * 0.18
collar = np.array([0.075, 0.075, 0.085]) * (0.35 + 0.9 * dif)[:, None] + sheen
# two screws on the collar front: small bright domes
q = P - C0; side = nrm(np.cross(U, np.array([0, 0, 1.0])))
for sc in (1.62, 1.82):
    c = C0 + U * sc
    for sd in (-1,):
        cc = c + nrm(np.cross(U, side)) * 0.0
        dist = np.linalg.norm((P - c) - ((P - c) @ U)[:, None] * U - (-np.array([0, 0, 1.0]) * 0.30), axis=-1)
        dome = np.clip(1 - dist / 0.055, 0, 1)
        collar = collar * (1 - dome[:, None] ** 0.5) + (dome ** 0.5)[:, None] * (0.5 * E + 0.08)
# a faint seam line at each collar edge
seam = np.exp(-((sP - 1.42) / 0.006) ** 2) + np.exp(-((sP - 2.02) / 0.006) ** 2)
col = np.where((M == 1)[:, None], collar, steel)
col *= (1 - 0.6 * seam)[:, None]
# the jet lights the nozzle end of the applicator in violet
glowd = np.linalg.norm(P - TIP, axis=-1)
col += (np.exp(-glowd / 0.55) * 0.55 * np.clip(Nn @ (-U) * 0.5 + 0.5, 0, 1))[:, None] * np.array([0.75, 0.25, 0.85])
RGB[hi] = col; A[hi] = 1
RGB = RGB.reshape(h, w, 3); A = A.reshape(h, w)

# --- the cable: leaves the collar's underside, loops away up and to the right and eases out ---
def bez(p0, p1, p2, p3, n=400):
    t = np.linspace(0, 1, n)[:, None]
    return (1 - t) ** 3 * p0 + 3 * (1 - t) ** 2 * t * p1 + 3 * (1 - t) * t ** 2 * p2 + t ** 3 * p3
cs = C0 + U * 1.72
p0 = np.array([cs[0] + 0.2, cs[1] - 0.05]); pts = np.vstack([bez(p0, p0 + [0.7, -0.25], [2.05, 0.15], [2.0, 1.4]),
                                                          bez([2.0, 1.4], [1.95, 2.4], [2.35, 2.9], [2.5, 3.3])[1:]])
pp = np.stack([(pts[:, 0]) * S + w / 2, -(pts[:, 1]) * S + h / 2], -1)
cr = 0.075 * S
x0, x1 = int(max(pp[:, 0].min() - cr - 4, 0)), int(min(pp[:, 0].max() + cr + 4, w))
y0, y1 = int(max(pp[:, 1].min() - cr - 4, 0)), int(min(pp[:, 1].max() + cr + 4, h))
gy, gx = np.mgrid[y0:y1, x0:x1].astype(float)
best = np.full(gx.shape, 1e9); along = np.zeros(gx.shape); sgn = np.zeros(gx.shape)
segL = np.r_[0, np.cumsum(np.hypot(*np.diff(pp, axis=0).T))]; tot = segL[-1]
for i in range(len(pp) - 1):
    a = pp[i]; b = pp[i + 1]; ab_ = b - a; L2 = ab_ @ ab_
    if L2 == 0: continue
    t_ = np.clip(((gx - a[0]) * ab_[0] + (gy - a[1]) * ab_[1]) / L2, 0, 1)
    dx = gx - (a[0] + ab_[0] * t_); dy = gy - (a[1] + ab_[1] * t_); dist = np.hypot(dx, dy)
    sel = dist < best
    best = np.where(sel, dist, best); along = np.where(sel, (segL[i] + t_ * np.sqrt(L2)) / tot, along)
    cross = (ab_[0] * dy - ab_[1] * dx) / np.sqrt(L2)
    sgn = np.where(sel, np.sign(cross), sgn)
cov = np.clip(cr - best + 0.5, 0, 1)
u_ = np.clip(best / cr, 0, 1) * sgn                       # -1..1 across the tube
nz = np.sqrt(np.clip(1 - u_ ** 2, 0, 1))
cab = 0.03 + 0.05 * nz + 0.42 * np.exp(-((u_ + 0.35) / 0.16) ** 2) + 0.06 * np.exp(-((u_ - 0.7) / 0.2) ** 2)
fade = 1 - np.clip((along - 0.35) / 0.65, 0, 1)     # long ease out, never ends on a line
fade = fade * fade * (3 - 2 * fade)
ca = cov * fade
sub = (slice(y0, y1), slice(x0, x1))
under = A[sub] < 0.5                                       # the applicator stays in front of the cable
ca = np.where(under, ca, 0)
for k in range(3):
    RGB[sub][..., k] = RGB[sub][..., k] * (1 - ca) + cab * [0.95, 0.95, 1.0][k] * ca
A[sub] = A[sub] + ca * (1 - A[sub])

# --- the cold plasma jet: an emission volume from the needle tip, a hot pale core, a violet-magenta plume ---
tip2 = np.array([TIP[0], TIP[1]]); u2 = nrm(np.array([U[0], U[1]]))
gx_ = X - tip2[0]; gy_ = Y - tip2[1]
sl = gx_ * u2[0] + gy_ * u2[1]                             # along the jet
pr = -gx_ * u2[1] + gy_ * u2[0]                            # across the jet
rng = np.random.default_rng(7)
wob = np.zeros_like(sl)
for f, a in ((2.2, .006), (4.1, .003)):
    wob += a * np.sin(sl * f * 2 + rng.uniform(0, 6.3)) * np.clip(sl, 0, None) * 2.2
prw = pr - wob
Lj = 0.85
env_s = np.clip(sl / 0.03, 0, 1) * np.exp(-np.clip(sl, 0, None) / Lj * 1.6) * (sl > -0.02)
wid = 0.028 + 0.12 * np.clip(sl, 0, None)
core = np.exp(-(prw / (wid * 0.35)) ** 2) * env_s * np.exp(-np.clip(sl, 0, None) / 0.55)
plume = np.exp(-(prw / wid) ** 2) * env_s
halo = np.exp(-(np.hypot(gx_, gy_) / 0.42) ** 2) * 0.32 + np.exp(-(np.hypot(gx_ - u2[0] * .35, gy_ - u2[1] * .35) / 0.9) ** 2) * 0.12
# faint filaments inside the plume
fil = np.zeros_like(sl)
for k in range(3):
    off = rng.uniform(-0.6, 0.6); ph = rng.uniform(0, 6.3); fq = rng.uniform(4, 8)
    c_ = prw - off * wid * 0.6 - 0.006 * np.sin(sl * fq + ph) * np.clip(sl, 0, None) * 4
    fil += np.exp(-(c_ / (0.012 + 0.03 * np.clip(sl, 0, None))) ** 2) * env_s * 0.18
em = np.zeros((h, w, 3))
em += core[..., None] * np.array([1.0, 0.86, 1.0]) * 1.9
em += plume[..., None] * np.array([0.78, 0.30, 0.92]) * 1.5
em += fil[..., None] * np.array([0.95, 0.55, 1.0])
em += halo[..., None] * np.array([0.58, 0.16, 0.55])
em = 1 - np.exp(-em * 1.15)                               # soft tone map
ea = np.clip(em.max(-1), 0, 1)
# composite: emission over the applicator (additive), and as alpha-coloured light over transparency
out = RGB * A[..., None] + em
outA = np.clip(A + ea * (1 - A), 0, 1)
col_un = np.where(outA[..., None] > 1e-4, out / np.maximum(outA[..., None], 1e-4), 0)
col_un = np.clip(col_un, 0, 1)
img = np.dstack([col_un, outA])
im = Image.fromarray((img * 255 + 0.5).astype(np.uint8), 'RGBA').resize((W, H), Image.LANCZOS)
im.save(OUT)
print('wrote', OUT, im.size)
