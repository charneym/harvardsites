#!/usr/bin/env python3
"""Enyx Therapeutics hero (HOME_BRIEF update 2c, a crafted render of the real subject): a micro-CT style render of a cylindrical
core of trabecular (spongy) bone, its front quarter cut away to show the lattice of vertical rods and cross-struts inside a thin
cortical shell. Enyx's NIH STTR abstract (2R42AA028465) measures the osteopenia of ALDH2 deficiency, and its prevention and
reversal by ENX03, exactly this way: "quantified by microcomputed tomography (µCT) ... bone volume/total volume, cortex
thickness, trabecular number and thickness". Bone ivory lit warm on the live site's ink; shadows fall to its teal #1a4548.
Numpy sphere tracing of a warped, load-aligned gyroid network. Usage: python3 render.py W H out.png"""
import sys, numpy as np
from PIL import Image, ImageFilter

W = int(sys.argv[1]) if len(sys.argv) > 1 else 800
H = int(sys.argv[2]) if len(sys.argv) > 2 else 860
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = float(sys.argv[4]) if len(sys.argv) > 4 else 1.0
FW, FH = W, H; W, H = int(W * SS), int(H * SS)

def nrm(v): return v / np.linalg.norm(v, axis=-1, keepdims=True)

# ---------- value noise ----------
rng = np.random.default_rng(7)
PERM = rng.permutation(256); PERM = np.concatenate([PERM, PERM])
GV = rng.random(256) * 2 - 1
def vnoise(p):
    i = np.floor(p).astype(np.int64); f = p - i; u = f * f * (3 - 2 * f)
    def h(dx, dy, dz):
        return GV[PERM[(PERM[(PERM[(i[:, 0] + dx) & 255] + i[:, 1] + dy) & 255] + i[:, 2] + dz) & 255]]
    x00 = h(0,0,0) * (1-u[:,0]) + h(1,0,0) * u[:,0]; x10 = h(0,1,0) * (1-u[:,0]) + h(1,1,0) * u[:,0]
    x01 = h(0,0,1) * (1-u[:,0]) + h(1,0,1) * u[:,0]; x11 = h(0,1,1) * (1-u[:,0]) + h(1,1,1) * u[:,0]
    y0 = x00 * (1-u[:,1]) + x10 * u[:,1]; y1 = x01 * (1-u[:,1]) + x11 * u[:,1]
    return y0 * (1-u[:,2]) + y1 * u[:,2]

# ---------- scene ----------
R, RC, Y0, Y1 = 1.0, 0.915, -1.25, 1.0          # core radius, inner cortex radius, bottom, top
K = 24.0                                          # lattice frequency
def trab(p):
    q = p + 0.16 * np.stack([vnoise(p * 2.1 + 11), vnoise(p * 2.1 + 37), vnoise(p * 2.1 + 71)], 1)
    q = q + 0.045 * np.stack([vnoise(p * 6.3 + 19), vnoise(p * 6.3 + 53), vnoise(p * 6.3 + 89)], 1)
    x, y, z = q[:, 0] * K, q[:, 1] * K * 0.55, q[:, 2] * K   # stretched along the load axis: vertical rods
    g = np.sin(x) * np.cos(y) + np.sin(y) * np.cos(z) + np.sin(z) * np.cos(x)
    thr = 1.12 + 0.2 * vnoise(p * 1.7 + 5)                  # thicker and thinner regions
    return (thr - g) / (K * 2.3)                            # >0 outside the bone
def box_y(p): return np.maximum(Y0 - p[:, 1], p[:, 1] - Y1)
def cut(p):                                                   # the removed front quarter: x>0 and z<0
    return -np.minimum(p[:, 0], -p[:, 2])                     # <0 inside the wedge
def sdf(p):
    r = np.sqrt(p[:, 0] ** 2 + p[:, 2] ** 2)
    by = box_y(p)
    core = np.maximum(r - RC, by)
    t = np.maximum(trab(p), core)
    shell = np.maximum(np.maximum(r - R, RC - r + 0.004), by)
    d = np.minimum(t, shell)
    return np.maximum(d, -cut(p))
def mat_shell(p):
    r = np.sqrt(p[:, 0] ** 2 + p[:, 2] ** 2); return r > RC - 0.002

# ---------- camera ----------
CAM = np.array([1.3, 2.9, -5.0]); TGT = np.array([0.02, -0.12, 0.0]); FOV = 30.0
fw = nrm(TGT - CAM); rt = nrm(np.cross(np.array([0, 1.0, 0]), fw)); up = np.cross(fw, rt)
TH = np.tan(np.radians(FOV / 2))
ys, xs = np.mgrid[0:H, 0:W]
u = ((xs + .5) / W * 2 - 1) * TH * (W / H); v = (1 - (ys + .5) / H * 2) * TH
D = nrm(u[..., None] * rt + v[..., None] * up + fw).reshape(-1, 3)
N = D.shape[0]

# bounding cylinder entry to save steps
def march(O, Dd, tmin, tmax, steps, eps=6e-4):
    t = tmin.copy(); hit = np.zeros(len(Dd), bool); act = np.arange(len(Dd))
    for s in range(steps):
        if len(act) == 0: break
        p = O[act] + Dd[act] * t[act, None] if O.ndim == 2 else O + Dd[act] * t[act, None]
        d = sdf(p)
        h = d < eps * (1 + t[act] * .5)
        hit[act[h]] = True
        t[act] += np.maximum(d, eps) * 0.8
        keep = (~h) & (t[act] < tmax[act])
        act = act[keep]
    return t, hit

# ray vs bounding cylinder
oc = CAM; a = D[:, 0] ** 2 + D[:, 2] ** 2; b = 2 * (oc[0] * D[:, 0] + oc[2] * D[:, 2]); c = oc[0] ** 2 + oc[2] ** 2 - (R + .02) ** 2
disc = b * b - 4 * a * c; ok = disc > 0
sq = np.sqrt(np.maximum(disc, 0)); t0 = (-b - sq) / (2 * a); t1 = (-b + sq) / (2 * a)
t0 = np.maximum(t0, 0); t0[~ok] = 1e9; t1[~ok] = 0
print('rays', N, 'in bounds', ok.sum(), flush=True)
idx = np.where(ok)[0]
th, hh = march(CAM, D[idx], t0[idx], t1[idx], 260)
hit = np.zeros(N, bool); T = np.full(N, 1e9); hit[idx] = hh; T[idx] = th
print('hits', hit.sum(), flush=True)

hi = np.where(hit)[0]; P = CAM + D[hi] * T[hi, None]
e = 1.2e-3
nx = sdf(P + [e, 0, 0]) - sdf(P - [e, 0, 0]); ny = sdf(P + [0, e, 0]) - sdf(P - [0, e, 0]); nz = sdf(P + [0, 0, e]) - sdf(P - [0, 0, e])
Nn = nrm(np.stack([nx, ny, nz], 1) + 1e-9)
# ambient occlusion
ao = np.zeros(len(P))
for i, hgt in enumerate([.012, .03, .06, .1, .16, .24]):
    ao += (hgt - np.minimum(sdf(P + Nn * hgt), hgt)) / hgt * (0.9 ** i)
ao = np.clip(1 - ao / 3.2, 0, 1)
# soft shadows toward the key light
L = nrm(np.array([0.3, 0.82, -0.62]))
sh = np.ones(len(P)); ts = np.full(len(P), .02); act = np.arange(len(P))
for s in range(70):
    if len(act) == 0: break
    q = P[act] + Nn[act] * 2e-3 + L * ts[act, None]
    d = sdf(q)
    sh[act] = np.minimum(sh[act], np.clip(9 * d / ts[act], 0, 1))
    ts[act] += np.clip(d, .006, .12)
    keep = (sh[act] > .02) & (ts[act] < 3.2)
    act = act[keep]
sh = sh * sh * (3 - 2 * sh)
print('shaded', flush=True)

ivory = np.array([240, 228, 204]) / 255; warm = np.array([255, 236, 210]) / 255; teal = np.array([26, 69, 72]) / 255
dif = np.clip(Nn @ L, 0, 1)
rim = np.clip(Nn @ nrm(np.array([0.9, 0.25, 0.8])), 0, 1) ** 2
sky = .5 + .5 * Nn[:, 1]
Vv = -D[hi]; Hh = nrm(L + Vv); spec = np.clip((Nn * Hh).sum(1), 0, 1) ** 28 * .18
shell = mat_shell(P)
alb = ivory * (0.92 + 0.08 * vnoise(P * 40)[:, None])
ps = P[shell]
stri = vnoise(ps * np.array([46, 5, 46]) + 3); pore = np.clip((vnoise(ps * 70 + 9) - .45) * 4, 0, 1)
alb[shell] = alb[shell] * np.array([1.0, .975, .94]) * (0.93 + .07 * stri)[:, None] * (1 - .22 * pore)[:, None]
amb = (teal * 0.22 + ivory * 0.6) * (0.35 + 0.65 * sky)[:, None]
col = alb * (warm * dif[:, None] * sh[:, None] * 1.05 + amb * ao[:, None] * 0.7) + rim[:, None] * np.array([1.0, .89, .78]) * .16 * ao[:, None] + spec[:, None] * sh[:, None]
# depth cue: the inner lattice cools into the teal shadow
depth = np.clip((T[hi] - 4.2) / 2.0, 0, 1)
col = col * (1 - .35 * depth[:, None]) + teal * .1 * depth[:, None]

img = np.zeros((N, 3))
# background: ink with a faint teal glow behind the core
by_, bx_ = (ys / H).reshape(-1), (xs / W).reshape(-1)
gl = np.exp(-(((bx_ - .55) / .55) ** 2 + ((by_ - .42) / .5) ** 2))
bg = np.array([10, 17, 18]) / 255 * (1 - gl[:, None]) + np.array([22, 46, 48]) / 255 * gl[:, None]
img[:] = bg
# a soft shadow pool on the (unseen) floor under the core
fl = np.where(D[:, 1] < 0, (Y0 - CAM[1]) / np.minimum(D[:, 1], -1e-6), 1e9)
FP = CAM + D * fl[:, None]
rr = np.sqrt(FP[:, 0] ** 2 + FP[:, 2] ** 2)
pool = np.clip(1 - (rr - .7) / 1.1, 0, 1) ** 2 * (fl < 1e8)
img = img * (1 - .55 * pool[:, None])
img[hi] = col
# filmic tone
img = img / (1 + img * .35) * 1.3
img = np.clip(img, 0, 1) ** (1 / 1.05)
img = np.clip(img + (rng.random((N, 1)) - .5) * .018, 0, 1)
im = Image.fromarray((img.reshape(H, W, 3) * 255).astype(np.uint8))
# contact glow on the floor under the core (no floor drawn: a soft shadow pool)
if SS != 1: im = im.resize((FW, FH), Image.LANCZOS)
im.save(OUT)
print('wrote', OUT)
