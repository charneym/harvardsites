#!/usr/bin/env python3
"""Hero render for Nanofiber Solutions: their flexible, corrugated electrospun AV graft (nanofibersolutions.com,
Flexible-AV-graft.jpg), bent into a loose arc with one open end turned to the viewer. Sphere-traced SDF in numpy:
a torus segment whose tube radius ripples into ribs, hollowed to a thin wall, cut square at both ends. Shaded as a
matte white polymer textile: wrap-diffuse key, cool sky fill, violet rim, soft shadows, SDF ambient occlusion, and a
fine anisotropic fibre micro-texture in the normal. Baked with real alpha (no ground of its own, DJ/DP).
usage: python3 render.py [scale]   (scale 1 = 1500x1250 final, rendered 2x and downsampled)"""
import sys, math, numpy as np
from PIL import Image

S = float(sys.argv[1]) if len(sys.argv) > 1 else 1.0
W, H = int(1500 * S), int(1250 * S)
SS = 2
RW, RH = W * SS, H * SS

RM, RT, AMP, WALL, NRIB = 2.25, 0.50, 0.042, 0.055, 92
PA, PB = math.radians(-92), math.radians(88)          # arc of the graft


def rot(ax, a):
    c, s = math.cos(a), math.sin(a)
    if ax == 'x': return np.array([[1, 0, 0], [0, c, -s], [0, s, c]])
    if ax == 'y': return np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]])
    return np.array([[c, -s, 0], [s, c, 0], [0, 0, 1]])


# object frame: torus axis = local y. Tilt it so we look down on the bend at three-quarters.
OR = rot('z', math.radians(-14)) @ rot('x', math.radians(-58)) @ rot('y', math.radians(32))
ORi = OR.T


def th_of(x, y, z):
    return np.arctan2(y, np.sqrt(x * x + z * z) - RM)


def sdf(p):
    """p: (...,3) world -> distance. Also returns (phi, theta) for texturing."""
    q = p @ OR            # world -> local  (row vectors: q = p * OR == ORi @ p)
    x, y, z = q[..., 0], q[..., 1], q[..., 2]
    rxz = np.sqrt(x * x + z * z) + 1e-9
    phi = np.arctan2(z, x)
    qx = rxz - RM
    rr = np.sqrt(qx * qx + y * y)
    rib = 0.5 - 0.5 * np.cos(NRIB * phi)
    rib = rib ** 1.6                      # rounded crests, flatter valleys
    rmid = RT + AMP * rib * (1 + 0.10 * np.sin(phi * 13 + 1.3) + 0.06 * np.sin(phi * 31 + th_of(x, y, z)))
    d = (np.abs(rr - rmid) - WALL * 0.5) * 0.7
    # angular cut: inside the wedge between PA and PB (range < 180 deg so the wedge is convex)
    na = np.array([math.sin(PA), -math.cos(PA)])   # normal pointing out of the range at PA
    nb = np.array([-math.sin(PB), math.cos(PB)])
    da = x * na[0] + z * na[1]
    db = x * nb[0] + z * nb[1]
    dw = np.maximum(da, db)
    d = np.maximum(d, dw)
    th = np.arctan2(y, qx)
    return d, phi, th


# camera
cam = np.array([0.0, 0.25, 11.5])
look = np.array([0.55, 0.05, 0.0])
fw = look - cam; fw /= np.linalg.norm(fw)
rt = np.cross(fw, [0, 1, 0]); rt /= np.linalg.norm(rt)
up = np.cross(rt, fw)
fov = math.radians(30)
ys, xs = np.mgrid[0:RH, 0:RW].astype(np.float32)
u = (xs + 0.5) / RW * 2 - 1
v = 1 - (ys + 0.5) / RH * 2
asp = RW / RH
tf = math.tan(fov / 2)
dirs = (fw[None, None] + rt[None, None] * (u[..., None] * tf * asp) + up[None, None] * (v[..., None] * tf))
dirs /= np.linalg.norm(dirs, axis=-1, keepdims=True)
dirs = dirs.reshape(-1, 3)
N = dirs.shape[0]
t = np.full(N, 5.0, np.float32)
hit = np.zeros(N, bool)
alive = np.ones(N, bool)
idx = np.arange(N)
for it in range(220):
    a = idx[alive]
    if a.size == 0: break
    p = cam + dirs[a] * t[a, None]
    d, _, _ = sdf(p)
    h = d < 0.0006 * t[a]
    hit[a[h]] = True
    t[a] += np.maximum(d, 0.0004)
    far = t[a] > 16
    alive[a[h | far]] = False
print('march done', hit.sum())

hi = idx[hit]
P = cam + dirs[hi] * t[hi, None]
e = 0.0012
def grad(P):
    g = np.zeros_like(P)
    for k in range(3):
        o = np.zeros(3); o[k] = e
        g[:, k] = sdf(P + o)[0] - sdf(P - o)[0]
    return g / (np.linalg.norm(g, axis=1, keepdims=True) + 1e-12)
Nn = grad(P)
_, phi, th = sdf(P)

# ---- fibre micro-texture: a nonwoven of fine, randomly oriented fibres in surface (u,v) space, bumping the normal
U = phi * RM * 40.0
V = th * RT * 40.0
rng = np.random.default_rng(7)
fib = np.zeros(len(P))
for k in range(9):
    al = rng.uniform(0, math.pi)
    fr = rng.uniform(2.4, 4.2)
    ph = rng.uniform(0, 6.28)
    s = U * math.cos(al) + V * math.sin(al)
    w = -U * math.sin(al) + V * math.cos(al)
    s = s + 0.35 * np.sin(w * 0.7 + ph) + 0.2 * np.sin(w * 1.9 + 2 * ph)
    line = np.abs(np.sin(s * fr + ph))
    fib = np.maximum(fib, line ** 18 * (0.55 + 0.45 * np.sin(w * 0.37 + ph * 3) ** 2))
# perturb normal along local tangent directions with the texture
Tq = np.cross(Nn, np.array([0.3, 1, 0.2])); Tq /= np.linalg.norm(Tq, axis=1, keepdims=True) + 1e-9
Bq = np.cross(Nn, Tq)
jit = rng.standard_normal(len(P)) * 0.012
Nb = Nn + (fib[:, None] - 0.25) * 0.22 * Tq + jit[:, None] * Bq * 2.2
Nb /= np.linalg.norm(Nb, axis=1, keepdims=True)

V_ = -dirs[hi]
def norm(a): a = np.array(a, float); return a / np.linalg.norm(a)
Lk = norm([-0.55, 0.75, 0.55]); Ck = np.array([1.0, 0.96, 0.91]) * 1.6     # key: soft daylight, upper left
Lr = norm([0.8, 0.25, -0.7]); Cr = np.array([0.66, 0.50, 0.98]) * 0.75      # rim: violet, behind right
Lf = norm([0.3, -0.6, 0.6]); Cf = np.array([0.36, 0.30, 0.52]) * 0.4       # bounce: dim lilac from below

def shadow(P, L, k=10.0):
    res = np.ones(len(P)); tt = np.full(len(P), 0.02)
    for _ in range(70):
        d, _, _ = sdf(P + L * tt[:, None])
        res = np.minimum(res, np.clip(k * d / tt, 0, 1))
        tt += np.clip(d, 0.01, 0.15)
    return np.clip(res, 0, 1) ** 1.2

Po = P + Nn * 0.003
sk = shadow(Po, Lk)
sr = shadow(Po, Lr, 6)
ao = np.ones(len(P))
for i in range(1, 7):
    hh = 0.022 * i * i
    d, _, _ = sdf(P + Nn * hh)
    ao -= (hh - d) * (0.55 / (i)) * 1.0
ao = np.clip(ao, 0.08, 1) ** 1.3

mot = 0.5 + 0.5 * np.sin(U * 0.09 + 2.0 * np.sin(V * 0.05)) * np.sin(V * 0.11 + U * 0.03)
alb = np.array([0.92, 0.90, 0.865]) * (1 - 0.16 * fib - 0.05 * mot)[:, None]
def wrap(n, L, w=0.35): return np.clip((n @ L + w) / (1 + w), 0, 1)
dk = wrap(Nb, Lk) * sk
dr = np.clip(Nb @ Lr, 0, 1) * sr
df = wrap(Nb, Lf, .6)
sky = 0.5 + 0.5 * Nb[:, 1]
amb = (np.array([0.13, 0.12, 0.18]) * sky[:, None] + np.array([0.035, 0.028, 0.06])) * ao[:, None]
# subsurface-ish softening: light bleeding into the shadow side of a thin white wall
sss = np.clip(1 - np.abs(Nn @ Lk), 0, 1) ** 3 * 0.10 * sk
col = alb * (dk[:, None] * Ck * (0.5 + 0.5 * ao[:, None]) + dr[:, None] * Cr * ao[:, None] + df[:, None] * Cf * ao[:, None] + amb + sss[:, None] * np.array([1, .9, .85]))
# sheen: a fabric-like grazing lobe, and a weak broad specular
Hk = V_ + Lk; Hk /= np.linalg.norm(Hk, axis=1, keepdims=True)
spec = np.clip((Nb * Hk).sum(1), 0, 1) ** 28 * 0.10 * sk
fres = (1 - np.clip((Nb * V_).sum(1), 0, 1)) ** 4
col += spec[:, None] + (fres * 0.22 * ao)[:, None] * np.array([0.62, 0.52, 0.92])
# inside the lumen: darker, slightly violet
inner = ((Nn * V_).sum(1) > 0) & (sdf(P + Nn * 0.04)[0] > 0)
# filmic tone map
col = np.clip(col, 0, None)
col = col / (1 + col * 0.5) * 1.22
col = np.clip(col, 0, 1) ** (1 / 2.2)

img = np.zeros((N, 4), np.float32)
img[hi, :3] = col
img[hi, 3] = 1
img = img.reshape(RH, RW, 4)
# downsample (premultiplied)
pm = img.copy(); pm[..., :3] *= pm[..., 3:4]
pm = pm.reshape(H, SS, W, SS, 4).mean((1, 3))
a = pm[..., 3:4]
rgb = np.where(a > 0, pm[..., :3] / np.maximum(a, 1e-6), 0)
out = np.concatenate([rgb, a], -1)
im = Image.fromarray((np.clip(out, 0, 1) * 255 + .5).astype(np.uint8), 'RGBA')
bb = im.getchannel('A').getbbox(); m = int(40 * S)
im = im.crop((max(0, bb[0] - m), max(0, bb[1] - m), min(W, bb[2] + m), min(H, bb[3] + m)))
im.save('hero.png')
im.save('hero.webp', quality=90, method=6)
print('saved', im.size)
