#!/usr/bin/env python3
"""Offline render of 3DT's conductance sizing balloon catheter (hero, HOME_BRIEF update option c).

The device as 3DT describes it (3dtholdings.com/research-development; NIH RePORTER 1R43HL120517, 1R43HL123186): a balloon
catheter that dilates like a standard post-dilatation / valvuloplasty balloon, with electrodes inside the balloon so the
balloon's cross-sectional area is computed from voltage measurements during inflation (Ohm's law). Rendered here as a clear,
inflated balloon on its catheter shaft, ring electrodes visible on the inner shaft through the balloon wall, a soft tip and a
guidewire beyond. Ray-marched SDF of a surface of revolution, studio softbox reflections, fresnel shell, straight alpha so it
sits on the page ink with no box edge. Proportions are illustrative.
"""
import numpy as np
from PIL import Image
import pathlib

import os
W, H = int(os.environ.get("RW","1500")), int(os.environ.get("RH","1900"))
SS = 1  # supersampling handled by rendering at 2x then downsizing
RW, RH = W * 2, H * 2

def norm(v):
    return v / np.linalg.norm(v, axis=-1, keepdims=True)

# camera
cam = np.array([0.0, 0.0, 9.0])
fov = 0.36
ys, xs = np.mgrid[0:RH, 0:RW].astype(np.float32)
px = (xs + .5) / RW * 2 - 1
py = 1 - (ys + .5) / RH * 2
asp = RW / RH
rd = norm(np.stack([px * fov * asp, py * fov, -np.ones_like(px)], -1)).reshape(-1, 3).astype(np.float32)
ro = np.broadcast_to(cam, rd.shape).astype(np.float32)

# device axis: distal end up and slightly left, tipped away from the viewer
A = norm(np.array([-0.40, 0.88, -0.26]))
C = np.array([0.08, -0.05, 0.0])
# orthonormal helper
up = np.array([0, 0, 1.0])
B1 = norm(np.cross(A, up)); B2 = np.cross(A, B1)

KEY = -0.9
R = 0.50        # balloon radius
L = 1.45        # half length of the working body
TL = 0.55       # cone length
RS = 0.072      # outer shaft radius
RI = 0.046      # inner (guidewire lumen) shaft radius
RW_ = 0.016     # guidewire radius

def local(p):
    q = p - C
    u = q @ A
    rho = np.linalg.norm(q - u[:, None] * A, axis=-1)
    return u, rho

def seg2d(pu, pr, a, b):
    pa = np.stack([pu - a[0], pr - a[1]], -1); ba = np.array([b[0] - a[0], b[1] - a[1]])
    h = np.clip((pa @ ba) / (ba @ ba), 0, 1)
    d = pa - h[:, None] * ba
    return np.linalg.norm(d, axis=-1)

def prof(au):
    """balloon radius along the axis: straight working body, rounded shoulders easing into the neck"""
    x = np.clip((au - L) / TL, 0, 1)
    e = (0.5 + 0.5 * np.cos(np.pi * x)) ** 0.85
    r = RS + (R - RS) * e
    return np.where(au <= L, R, np.where(au <= L + TL, r, RS * 0.98))

def sd_balloon(p):
    u, rho = local(p)
    au = np.abs(u)
    r = prof(au)
    h = 0.004
    dr = (prof(au + h) - prof(np.maximum(au - h, 0))) / (2 * h)
    d = (rho - r) / np.sqrt(1 + dr * dr)
    # close the ends beyond the neck (the balloon is bonded to the shaft there)
    d = np.where(au > L + TL, np.maximum(d, au - (L + TL)), d)
    return d

def sd_inner(p):
    """shaft, inner member with ring electrodes, tip, guidewire (opaque objects)."""
    u, rho = local(p)
    # outer catheter shaft (proximal, below the balloon)
    sh = np.where(u < -(L + TL) + 0.02, rho - RS, 1e9)
    # inner member through the balloon
    inner = np.where((u >= -(L + TL) - 0.02) & (u <= L + TL + 0.32), rho - RI, 1e9)
    # soft distal tip: taper from RS to RI over 0.32 beyond the cone
    t = np.clip((u - (L + TL)) / 0.32, 0, 1)
    tip = np.where((u > L + TL - 0.02) & (u < L + TL + 0.32), rho - (RS + (RI * 0.9 - RS) * t), 1e9)
    # guidewire beyond the tip
    gw = np.where(u > L + TL + 0.25, rho - RW_, 1e9)
    # ring electrodes
    el = 1e9
    for c in (-0.95, -0.32, 0.32, 0.95):
        e = np.maximum(np.abs(u - c) - 0.07, rho - (RI + 0.016))
        el = np.minimum(el, e)
    d = np.minimum.reduce([sh, inner, tip, gw, el])
    return d

def mat_inner(p):
    u, rho = local(p)
    m = np.zeros(len(p), np.int8)  # 0 polymer shaft
    for c in (-0.95, -0.32, 0.32, 0.95):
        m[(np.abs(u - c) < 0.075) & (rho > RI + 0.004)] = 1  # electrode
    m[u > L + TL + 0.3] = 2  # guidewire
    return m, u

def normal(f, p, e=0.0025):
    ex = np.array([e, 0, 0], np.float32); ey = np.array([0, e, 0], np.float32); ez = np.array([0, 0, e], np.float32)
    n = np.stack([f(p + ex) - f(p - ex), f(p + ey) - f(p - ey), f(p + ez) - f(p - ez)], -1)
    return norm(n)

def march(f, ro, rd, tmax=20.0, steps=160, eps=0.0015, t0=None):
    t = np.full(len(ro), 6.0 if t0 is None else 0.0, np.float32) if t0 is None else t0.copy()
    hit = np.zeros(len(ro), bool); alive = np.ones(len(ro), bool)
    for _ in range(steps):
        idx = np.nonzero(alive)[0]
        if len(idx) == 0: break
        p = ro[idx] + rd[idx] * t[idx, None]
        d = f(p)
        d = np.where(d > 1e8, 0.5, d)
        h = np.abs(d) < eps
        hit[idx[h]] = True; alive[idx[h]] = False
        t[idx] += np.maximum(np.abs(d), eps * 0.5) * 0.9
        far = t[idx] > tmax
        alive[idx[far]] = False
    return hit, t

# studio environment: two long softboxes and a faint ground bounce, warm white; olive fill from below
def env(r):
    r = norm(r)
    # studio set square to the device: two long strip softboxes running parallel to the catheter give the clean
    # lengthwise streaks of a product shot; a wide overhead panel and a faint olive bounce from below
    x = r @ B1; y = r @ B2; ang = np.arctan2(y, x)
    def strip(a0, w):
        da = np.angle(np.exp(1j * (ang - a0)))
        return np.exp(-(da / w) ** 2)
    along = np.abs(r @ A)
    lenf = np.clip(1 - (along - 0.35) / 0.4, 0, 1)
    k1 = 1.35 * strip(KEY, 0.20) * lenf
    k2 = 0.55 * strip(KEY + 2.35, 0.12) * lenf
    k3 = 0.30 * np.exp(-((r[:, 1] - 0.85) / 0.25) ** 2)
    v = k1 + k2 + k3
    olive = 0.10 * np.clip(-r[:, 1], 0, 1)
    return v, olive

N = len(rd)
OUT = np.zeros((N, 3), np.float32)
ALPHA = np.zeros(N, np.float32)

# --- inner opaque objects
hitI, tI = march(sd_inner, ro, rd, steps=220)
colI = np.zeros((N, 3), np.float32); aI = np.zeros(N, np.float32)
idx = np.nonzero(hitI)[0]
p = ro[idx] + rd[idx] * tI[idx, None]
n = normal(sd_inner, p)
m, u = mat_inner(p)
v = -rd[idx]
L1 = norm(np.array([-0.6, 0.7, 0.6])); L2 = norm(np.array([0.8, 0.2, 0.3]))
dif = np.clip(n @ L1, 0, 1) * 0.85 + np.clip(n @ L2, 0, 1) * 0.35
refl = rd[idx] - 2 * (rd[idx] * n).sum(-1, keepdims=True) * n
ev, eo = env(refl)
fres = 0.04 + 0.96 * (1 - np.clip((n * v).sum(-1), 0, 1)) ** 5
base = np.where(m[:, None] == 1, np.array([0.80, 0.74, 0.56]), np.where(m[:, None] == 2, np.array([0.62, 0.63, 0.62]), np.array([0.20, 0.21, 0.19])))
metal = (m == 1) | (m == 2)
spec = np.where(metal, ev * 1.0, ev * (0.10 + 0.9 * fres) )
c = base * (0.10 + 0.55 * dif[:, None]) * np.where(metal[:, None], 0.55, 1.0) + spec[:, None] * np.where(metal[:, None], base * 1.3 + 0.15, 0.85)
c += eo[:, None] * np.array([0.62, 0.60, 0.25])
colI[idx] = c; aI[idx] = 1.0
# fade the shaft and the guidewire out at the ends (they leave the composition softly)
fadeI = np.ones(N, np.float32)
fu = np.clip((u + 3.55) / 1.25, 0, 1) * np.clip((3.55 - u) / 0.75, 0, 1)
fadeI[idx] = fu * fu * (3 - 2 * fu)
aI *= fadeI

# --- balloon shell: front and back surfaces
hitF, tF = march(sd_balloon, ro, rd, steps=200)
colB = np.zeros((N, 3), np.float32); aB = np.zeros(N, np.float32)
idx = np.nonzero(hitF)[0]
p = ro[idx] + rd[idx] * tF[idx, None]
n = normal(sd_balloon, p)
v = -rd[idx]
cos = np.clip((n * v).sum(-1), 0, 1)
fres = 0.04 + 0.96 * (1 - cos) ** 5
refl = rd[idx] - 2 * (rd[idx] * n).sum(-1, keepdims=True) * n
ev, eo = env(refl)
# polymer film: thin, clear, a hint of the saline/contrast fill; edges thicken optically
edge = (1 - cos) ** 2.2
film = 0.07 + 0.62 * edge
spec = ev * (0.22 + 0.78 * fres) * 1.9
tint = np.array([0.86, 0.85, 0.72])
cB = tint * (0.16 + 0.62 * edge)[:, None] + spec[:, None] * np.array([1.0, 0.98, 0.92]) + eo[:, None] * np.array([0.55, 0.53, 0.22])
colB[idx] = cB
aB[idx] = np.clip(film + spec * 0.9, 0, 1)
# back wall: march from just inside the front hit
idxB = idx
t0 = tF[idxB] + 0.02
pin = ro[idxB] + rd[idxB] * t0[:, None]
# inside the balloon the sdf is negative; march on -sdf to the exit
def neg(p): return -sd_balloon(p)
hb, tb = march(neg, pin, rd[idxB], tmax=4.0, steps=120, t0=np.zeros(len(idxB), np.float32))
backA = np.zeros(N, np.float32); backC = np.zeros((N, 3), np.float32)
ok = idxB[hb]
pb = pin[hb] + rd[ok] * tb[hb, None]
nb = -normal(sd_balloon, pb)
cosb = np.clip((nb * -rd[ok]).sum(-1), 0, 1)
reflb = rd[ok] - 2 * (rd[ok] * nb).sum(-1, keepdims=True) * nb
evb, eob = env(reflb)
edgeb = (1 - cosb) ** 2.2
backA[ok] = np.clip(0.07 + 0.40 * edgeb + evb * 0.45, 0, 1)
backC[ok] = tint * (0.05 + 0.25 * edgeb)[:, None] + (evb * 0.7)[:, None]
# fill: the balloon's inflation medium, a faint olive cast deepening with path length
path = np.zeros(N, np.float32); path[ok] = tb[hb]
fillA = np.clip(path * 0.06, 0, 0.09)
# the measuring field: a faint glow hugging the electrode segment of the inner member, seen through the balloon
w0 = ro - C
b_ = (rd @ A); d_ = (rd * w0).sum(-1); e_ = (w0 @ A)
den = 1 - b_ * b_ + 1e-6
tc = (b_ * e_ - d_) / den; sc = (e_ - b_ * d_) / den
cl = np.linalg.norm(w0 + rd * tc[:, None] - sc[:, None] * A, axis=-1)
seg = np.clip(1 - (np.abs(sc) - 0.95) / 0.45, 0, 1) * (np.abs(sc) < L + 0.2)
glow = np.exp(-(cl / 0.15) ** 2) * seg * hitF
fillA = fillA + 0.0 * glow
fillC = np.array([0.42, 0.41, 0.17])

# --- composite (back to front): back wall, fill, inner objects (if in front of back wall / behind front), front shell
inside_inner = hitI & hitF & (tI > tF)
# objects in front of the balloon (shaft parts outside it): draw over everything
front_inner = hitI & (~hitF | (tI <= tF))

col = np.zeros((N, 3), np.float32); a = np.zeros(N, np.float32)
def over(col, a, c2, a2):
    return c2 * a2[:, None] + col * (1 - a2[:, None]), a2 + a * (1 - a2)
col, a = over(col, a, backC, backA)
col, a = over(col, a, np.broadcast_to(fillC, col.shape), np.where(hitF, fillA, 0))
col, a = over(col, a, np.broadcast_to(np.array([0.80, 0.76, 0.36]), col.shape), np.clip(glow * 0.32, 0, 1))
ai = np.where(inside_inner, aI, 0)
col, a = over(col, a, colI * np.array([0.92, 0.92, 0.84]), ai)
col, a = over(col, a, colB, np.where(hitF, aB, 0))
af = np.where(front_inner, aI, 0)
col, a = over(col, a, colI, af)

# un-premultiply for straight alpha
rgb = np.where(a[:, None] > 1e-4, col / np.maximum(a[:, None], 1e-4), 0)
rgb = np.clip(rgb, 0, 1) ** (1 / 1.15)
img = np.concatenate([rgb, a[:, None]], -1).reshape(RH, RW, 4)
# the shaft leaves the frame softly: a long eased fade over the lowest fifth of the canvas, so no edge ever shows (DJ/DP)
yy = np.linspace(0, 1, RH)[:, None]
fb = np.clip((1 - yy) / 0.22, 0, 1); fb = fb * fb * (3 - 2 * fb)
img[:, :, 3] *= fb
im = Image.fromarray((img * 255 + .5).astype(np.uint8), 'RGBA').resize((W, H), Image.LANCZOS)
out = pathlib.Path(__file__).resolve().parent
im.save(out / 'hero.png')
im.save(out / 'hero.webp', quality=90, method=6)
print('ok', im.size)
