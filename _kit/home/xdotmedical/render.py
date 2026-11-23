#!/usr/bin/env python3
"""Hero render for xDot Medical: a segment of the femoral artery, the large-bore access vessel the xDot Access
Management System closes (ClinicalTrials.gov NCT07719244: closure of large-bore femoral-arterial and venous access
sites; the AMS "is designed to deliver the xDot Implant Unit around the access site on the target vessel to close the
puncture site"). One calm object: a short, gently curved vessel cut square at both ends so its layered wall and lumen
read at a glance, wet tissue shading, and a single small pale implant seated on the closed access site on top.
Sphere-traced SDF in numpy, rendered 2x and downsampled, baked with real alpha (no ground of its own, DJ/DP).
usage: python3 render.py [scale]"""
import sys, math, numpy as np
from PIL import Image

S = float(sys.argv[1]) if len(sys.argv) > 1 else 1.0
W, H = int(1500 * S), int(1100 * S)
SS = 2
RW, RH = W * SS, H * SS

RM, RT, WALL = 7.0, 0.66, 0.17          # bend radius, tube radius (wall centre), wall thickness
PA, PB = math.radians(-23), math.radians(23)
ACC = math.radians(-3)                   # access site angle along the arc
ALPHA = math.radians(12)                 # implant position round the tube: from the outer bend toward the viewer
IMP_R, IMP_H = 0.17, 0.038               # implant disc radius / half height


def nrm0(a): a = np.array(a, float); return a / np.linalg.norm(a)
# world = OR @ local + offset. Local z = the tube's direction at the middle of the arc (runs right and a little away,
# so the left cut face turns to the viewer); local x = the outer side of the bend (world up, so the vessel arches
# gently); local y = z x x (toward the viewer).
Zw = nrm0([1.0, 0.36, -0.70])
Xw = nrm0(np.array([0.0, 1.0, 0.42]) - Zw * np.dot([0.0, 1.0, 0.42], Zw))
Yw = np.cross(Zw, Xw)
OR = np.stack([Xw, Yw, Zw], 1)
OFF = np.array([RM, 0.0, 0.0])
ca, sa = math.cos(ACC), math.sin(ACC)
RAD = np.array([ca, 0.0, sa])
IMP_N = math.cos(ALPHA) * RAD + math.sin(ALPHA) * np.array([0.0, 1.0, 0.0])
IMP_C = np.array([RM * ca, 0.0, RM * sa]) + IMP_N * (RT + WALL * 0.5 + IMP_H * 0.55)


def wobble(phi):
    return 1 + 0.025 * np.sin(phi * 5.0 + 0.7) + 0.012 * np.sin(phi * 11.0 + 2.1)


def parts(p):
    q = p @ OR + OFF
    x, y, z = q[..., 0], q[..., 1], q[..., 2]
    rxz = np.sqrt(x * x + z * z) + 1e-9
    phi = np.arctan2(z, x)
    qx = rxz - RM
    rr = np.sqrt(qx * qx + y * y)
    rmid = RT * wobble(phi)
    dv = (np.abs(rr - rmid) - WALL * 0.5) * 0.85
    na = np.array([math.sin(PA), -math.cos(PA)])
    nb = np.array([-math.sin(PB), math.cos(PB)])
    dw = np.maximum(x * na[0] + z * na[1], x * nb[0] + z * nb[1])
    dv = np.maximum(dv, dw)
    # implant: a low rounded disc lying on the wall, its axis along local y
    dq = q - IMP_C
    dy = dq @ IMP_N
    dr = np.linalg.norm(dq - dy[..., None] * IMP_N, axis=-1)
    dy = dy
    qd = np.stack([dr - IMP_R + 0.03, np.abs(dy) - IMP_H + 0.03], -1)
    di = np.minimum(np.maximum(qd[..., 0], qd[..., 1]), 0) + np.linalg.norm(np.maximum(qd, 0), axis=-1) - 0.03
    return dv, di, phi, np.arctan2(y, qx), rr, rmid


def sdf(p):
    dv, di, *_ = parts(p)
    # soft fillet where the implant meets the wall
    k = 0.03
    h = np.clip(0.5 + 0.5 * (di - dv) / k, 0, 1)
    return dv * h + di * (1 - h) - k * h * (1 - h)


cam = np.array([0.0, 0.0, 12.0])
look = np.array([0.0, 0.0, 0.0])
fw = look - cam; fw /= np.linalg.norm(fw)
rt = np.cross(fw, [0, 1, 0]); rt /= np.linalg.norm(rt)
up = np.cross(rt, fw)
fov = math.radians(30)
ys, xs = np.mgrid[0:RH, 0:RW].astype(np.float32)
u = (xs + 0.5) / RW * 2 - 1
v = 1 - (ys + 0.5) / RH * 2
tf = math.tan(fov / 2)
dirs = (fw[None, None] + rt[None, None] * (u[..., None] * tf * RW / RH) + up[None, None] * (v[..., None] * tf))
dirs /= np.linalg.norm(dirs, axis=-1, keepdims=True)
dirs = dirs.reshape(-1, 3)
N = dirs.shape[0]
t = np.full(N, 6.0, np.float32)
hit = np.zeros(N, bool); alive = np.ones(N, bool); idx = np.arange(N)
for it in range(240):
    a = idx[alive]
    if a.size == 0: break
    p = cam + dirs[a] * t[a, None]
    d = sdf(p)
    h = d < 0.0005 * t[a]
    hit[a[h]] = True
    t[a] += np.maximum(d, 0.0004)
    alive[a[h | (t[a] > 20)]] = False
print('march done', hit.sum())

hi = idx[hit]
P = cam + dirs[hi] * t[hi, None]
e = 0.0012
g = np.zeros_like(P)
for k in range(3):
    o = np.zeros(3); o[k] = e
    g[:, k] = sdf(P + o) - sdf(P - o)
Nn = g / (np.linalg.norm(g, axis=1, keepdims=True) + 1e-12)
dv, di, phi, th, rr, rmid = parts(P)
isImp = di < dv + 0.004
# which surface: outer skin, inner (lumen) skin, or the cut face of the wall
rel = (rr - rmid) / (WALL * 0.5)          # -1 inner .. +1 outer
q = P @ OR + OFF
xq, zq = q[:, 0], q[:, 2]
na = np.array([math.sin(PA), -math.cos(PA)]); nb = np.array([-math.sin(PB), math.cos(PB)])
dw = np.maximum(xq * na[0] + zq * na[1], xq * nb[0] + zq * nb[1])
isCut = (np.abs(dw) < 0.006) & ~isImp
isIn = (rel < -0.6) & ~isCut & ~isImp

# ---- surface texture: fine longitudinal grain and a few faint branching surface vessels (vasa vasorum), as texture only
U = phi * RM * 30.0
Vv = th * RT * 30.0
rng = np.random.default_rng(11)
grain = 0.5 + 0.5 * np.sin(U * 0.9 + 1.6 * np.sin(Vv * 0.35)) * np.sin(Vv * 2.3 + 0.8 * np.sin(U * 0.21))
ves = np.zeros(len(P))
for kk in range(4):
    al = rng.uniform(-0.5, 0.5)
    ph = rng.uniform(0, 6.28)
    s = Vv * math.cos(al) - U * math.sin(al) * 0.35
    w = U
    s = s + 1.4 * np.sin(w * 0.11 + ph) + 0.6 * np.sin(w * 0.31 + 2 * ph)
    line = np.abs(np.sin(s * rng.uniform(0.18, 0.3) + ph))
    ves = np.maximum(ves, line ** 140 * (0.4 + 0.6 * np.sin(w * 0.05 + ph * 3) ** 2))
Tq = np.cross(Nn, np.array([0.2, 1, 0.3])); Tq /= np.linalg.norm(Tq, axis=1, keepdims=True) + 1e-9
Bq = np.cross(Nn, Tq)
Nb = Nn + ((grain - 0.5) * 0.02 + ves * 0.008)[:, None] * Tq * (~isImp)[:, None] + (rng.standard_normal(len(P)) * 0.006)[:, None] * Bq
Nb /= np.linalg.norm(Nb, axis=1, keepdims=True)

V_ = -dirs[hi]
def nrm(a): a = np.array(a, float); return a / np.linalg.norm(a)
Lk = nrm([-0.45, 0.8, 0.5]); Ck = np.array([1.0, 0.96, 0.93]) * 1.25     # soft key, upper left
Lr = nrm([0.75, 0.35, -0.6]); Cr = np.array([0.50, 0.80, 0.97]) * 0.85   # rim: the logo's sky blue, behind right
Lf = nrm([0.2, -0.7, 0.5]); Cf = np.array([0.40, 0.26, 0.28]) * 0.35     # warm bounce from below
Lq = nrm([-0.75, 0.0, 0.66]); Cq = np.array([0.92, 0.95, 1.0]) * 0.42     # soft front-left fill, so the near cut end reads

def shadow(P, L, k=10.0):
    res = np.ones(len(P)); tt = np.full(len(P), 0.02)
    for _ in range(60):
        d = sdf(P + L * tt[:, None])
        res = np.minimum(res, np.clip(k * d / tt, 0, 1))
        tt += np.clip(d, 0.01, 0.2)
    return np.clip(res, 0, 1) ** 1.2

Po = P + Nn * 0.003
sk = shadow(Po, Lk); sr = shadow(Po, Lr, 6)
ao = np.ones(len(P))
for i in range(1, 7):
    hh = 0.02 * i * i
    ao -= (hh - sdf(P + Nn * hh)) * (0.5 / i)
ao = np.clip(ao, 0.1, 1) ** 1.25

# albedo
outer = np.array([0.66, 0.53, 0.53])     # pale blush ivory, a calm clinical tissue tone (DT)
mott = (np.sin(U * 0.045 + 1.3) * np.sin(Vv * 0.09 + 0.4 * np.sin(U * 0.03)) + 0.6 * np.sin(U * 0.11 + Vv * 0.07 + 2.0)) * 0.5
alb = outer[None] * (1 - 0.03 * (grain - 0.5) - 0.05 * ves + 0.04 * mott)[:, None]
# cut face: adventitia (outer, paler pink-tan) / media (rose red) / intima (pale, thin)
cf = np.where(rel[:, None] > 0.45, np.array([0.78, 0.68, 0.66]),
     np.where(rel[:, None] > -0.72, np.array([0.70, 0.55, 0.55]), np.array([0.86, 0.80, 0.79])))
alb = np.where(isCut[:, None], cf, alb)
alb = np.where(isIn[:, None], np.array([0.40, 0.30, 0.31]), alb)
alb = np.where(isImp[:, None], np.array([0.86, 0.95, 1.0]), alb)

def wrap(n, L, w=0.45): return np.clip((n @ L + w) / (1 + w), 0, 1)
dk = wrap(Nb, Lk) * sk
drr = np.clip(Nb @ Lr, 0, 1) * sr
df = wrap(Nb, Lf, .6)
sky = 0.5 + 0.5 * Nb[:, 1]
amb = (np.array([0.08, 0.09, 0.12]) * sky[:, None] + np.array([0.04, 0.025, 0.03])) * ao[:, None]
# tissue translucency: red light bleeding round the terminator
sss = (np.clip(1 - np.abs(Nn @ Lk), 0, 1) ** 2 * 0.22 * sk)[:, None] * np.array([0.55, 0.36, 0.33]) * (~isImp)[:, None]
col = alb * (dk[:, None] * Ck * (0.55 + 0.45 * ao[:, None]) + drr[:, None] * Cr * ao[:, None] * 0.6 + df[:, None] * Cf * ao[:, None] + wrap(Nb, Lq, .3)[:, None] * Cq * ao[:, None] + amb) + sss * ao[:, None]
Hk = V_ + Lk; Hk /= np.linalg.norm(Hk, axis=1, keepdims=True)
ndh = np.clip((Nb * Hk).sum(1), 0, 1)
wet = np.where(isImp, ndh ** 80 * 1.0 + ndh ** 8 * 0.08, ndh ** 40 * 0.10 + ndh ** 10 * 0.04) * sk
col += wet[:, None] * np.array([1.0, 0.98, 0.96])
fres = (1 - np.clip((Nb * V_).sum(1), 0, 1)) ** 4
trans = ((1 - np.clip((Nn * V_).sum(1), 0, 1)) ** 2.5 * 0.16 * (0.4 + 0.6 * sk))[:, None] * np.array([0.30, 0.22, 0.22]) * (~isImp & ~isCut)[:, None]
col += trans
col += (fres * 0.34 * ao)[:, None] * np.array([0.50, 0.78, 0.95])
col += (isImp * (0.16 + 0.3 * fres))[:, None] * np.array([0.55, 0.82, 0.98])
col = np.clip(col, 0, None)
col = col / (1 + col * 0.35) * 1.08
col = np.clip(col, 0, 1) ** (1 / 2.2)

img = np.zeros((N, 4), np.float32)
img[hi, :3] = col; img[hi, 3] = 1
img = img.reshape(RH, RW, 4)
pm = img.copy(); pm[..., :3] *= pm[..., 3:4]
pm = pm.reshape(H, SS, W, SS, 4).mean((1, 3))
a = pm[..., 3:4]
rgb = np.where(a > 0, pm[..., :3] / np.maximum(a, 1e-6), 0)
im = Image.fromarray((np.clip(np.concatenate([rgb, a], -1), 0, 1) * 255 + .5).astype(np.uint8), 'RGBA')
bb = im.getchannel('A').getbbox(); m = int(30 * S)
im = im.crop((max(0, bb[0] - m), max(0, bb[1] - m), min(W, bb[2] + m), min(H, bb[3] + m)))
im.save('hero.png'); im.save('hero.webp', quality=90, method=6)
print('saved', im.size)
