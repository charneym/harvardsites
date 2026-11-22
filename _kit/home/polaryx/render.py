#!/usr/bin/env python3
"""Polaryx hero (HOME_BRIEF update 2c: a crafted render of the firm's own molecule). PLX-200 is a repurposed oral
small molecule, gemfibrozil (Polaryx WORLDSymposium release, Feb 2026), C15H22O3: 5-(2,5-dimethylphenoxy)-2,2-
dimethylpentanoic acid. 3D conformer from RDKit (ETKDG + MMFF, gem.xyz). Raytraced space-filling model (0.82 x van der
Waals radii): studio key light with ray-traced soft shadows, ambient occlusion, a teal rim (Polaryx brand #2e80a8),
a clear-coat with Fresnel reflections of a softbox and of neighbouring atoms. Saved with real ALPHA (no ground, DP/DJ).
Usage: python3 render.py W out.png"""
import sys, math, numpy as np
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 1400
OUT = sys.argv[2] if len(sys.argv) > 2 else 'hero.png'
SS = 2; w = W * SS
rng = np.random.default_rng(3)
def nrm(v): return v / np.maximum(np.linalg.norm(v, axis=-1, keepdims=True), 1e-9)
A, B = [], []
for ln in open(__file__.rsplit('/', 1)[0] + '/gem.xyz' if '/' in __file__ else 'gem.xyz'):
    s = ln.split()
    if s[0] == 'B': B.append((int(s[1]), int(s[2])))
    else: A.append((s[0], float(s[1]), float(s[2]), float(s[3])))
EL = [a[0] for a in A]; P = np.array([a[1:] for a in A])
P -= P.mean(0)
# orient: long axis along a gentle diagonal, the ring turned towards the viewer
u, s_, vt = np.linalg.svd(P - P.mean(0)); P = P @ vt.T
def R(ax, a):
    x, y, z = np.array(ax, float) / np.linalg.norm(ax); c, s = math.cos(a), math.sin(a); C = 1 - c
    return np.array([[c+x*x*C, x*y*C-z*s, x*z*C+y*s], [y*x*C+z*s, c+y*y*C, y*z*C-x*s], [z*x*C-y*s, z*y*C+x*s, c+z*z*C]])
ROT = R([0, 0, 1], math.radians(float(sys.argv[3]) if len(sys.argv) > 3 else 38)) @ R([1, 0, 0], math.radians(float(sys.argv[4]) if len(sys.argv) > 4 else 28)) @ R([0, 1, 0], math.radians(float(sys.argv[5]) if len(sys.argv) > 5 else -18))
P = P @ ROT.T
VDW = {'C': 1.70, 'H': 1.20, 'O': 1.52}
RAD = np.array([VDW[e] * .82 for e in EL])
ALB = {'C': (.055, .062, .072), 'H': (.74, .74, .72), 'O': (.72, .11, .08)}
SPC = {'C': .9, 'H': .55, 'O': .75}
AL = np.array([ALB[e] for e in EL]); SP = np.array([SPC[e] for e in EL])
lo = (P[:, :2] - RAD[:, None]).min(0); hi = (P[:, :2] + RAD[:, None]).max(0)
ctr = (lo + hi) / 2; ext = (hi - lo).max() / 2 * 1.06
S = w / (2 * ext)
def to_px(xy): return (xy - ctr) * S * np.array([1, -1]) + w / 2
# primary rays (orthographic): nearest sphere per pixel
yy, xx = np.mgrid[0:w, 0:w].astype(np.float32)
X = (xx + .5 - w / 2) / S + ctr[0]; Y = -(yy + .5 - w / 2) / S + ctr[1]
Z = np.full((w, w), -1e9, np.float32); ID = np.full((w, w), -1, np.int32)
for i, (c, r) in enumerate(zip(P, RAD)):
    d2 = (X - c[0]) ** 2 + (Y - c[1]) ** 2; m = d2 < r * r
    z = np.where(m, c[2] + np.sqrt(np.maximum(r * r - d2, 0)), -1e9)
    k = z > Z; Z[k] = z[k]; ID[k] = i
hit = ID >= 0
idx = np.nonzero(hit); ids = ID[idx]
p = np.stack([X[idx], Y[idx], Z[idx]], -1); n = nrm(p - P[ids])
V = np.array([0, 0, 1.0])
def occluded(o, d, maxt=1e9, skip=None):
    """any sphere hit along o + t d, t in (eps, maxt)"""
    res = np.zeros(len(o), bool)
    for j, (c, r) in enumerate(zip(P, RAD)):
        oc = o - c; b = (oc * d).sum(-1); cc = (oc * oc).sum(-1) - r * r
        disc = b * b - cc; t = -b - np.sqrt(np.maximum(disc, 0))
        res |= (disc > 0) & (t > 1e-3) & (t < maxt)
    return res
def first_hit(o, d):
    T = np.full(len(o), 1e9); J = np.full(len(o), -1)
    for j, (c, r) in enumerate(zip(P, RAD)):
        oc = o - c; b = (oc * d).sum(-1); cc = (oc * oc).sum(-1) - r * r
        disc = b * b - cc; t = -b - np.sqrt(np.maximum(disc, 0))
        k = (disc > 0) & (t > 1e-3) & (t < T); T[k] = t[k]; J[k] = j
    return T, J
o = p + n * 2e-3
# key light: soft area light upper-left-front, 10 jittered shadow rays
Lk = nrm(np.array([-.55, .62, .56]))
sh = np.zeros(len(p))
tg1 = nrm(np.cross(Lk, [0, 0, 1])); tg2 = np.cross(Lk, tg1)
for k in range(10):
    a, rr = rng.uniform(0, 2 * math.pi), math.sqrt(rng.uniform()) * .14
    d = nrm(Lk + tg1 * math.cos(a) * rr + tg2 * math.sin(a) * rr)
    sh += ~occluded(o, np.broadcast_to(d, o.shape))
sh /= 10
# ambient occlusion: 20 cosine-weighted hemisphere rays, 4.5 A reach
ao = np.zeros(len(p))
NA = 20
for k in range(NA):
    r1, r2 = rng.uniform(size=len(p)), rng.uniform(size=len(p))
    t1 = nrm(np.cross(n, np.where(np.abs(n[:, :1]) < .9, [[1, 0, 0]], [[0, 1, 0]])))
    t2 = np.cross(n, t1); sr = np.sqrt(r1)[:, None]; ph = 2 * math.pi * r2[:, None]
    d = nrm(t1 * sr * np.cos(ph) + t2 * sr * np.sin(ph) + n * np.sqrt(1 - r1)[:, None])
    ao += ~occluded(o, d, 5.5)
ao /= NA
alb = AL[ids]; spc = SP[ids]
ndl = np.clip((n * Lk).sum(-1), 0, 1)
wrap = np.clip(((n * Lk).sum(-1) + .35) / 1.35, 0, 1)
isH = np.array([EL[i] == 'H' for i in ids])
dif = np.where(isH, .7 * ndl + .3 * wrap, ndl)
Lf = nrm(np.array([.7, -.35, .4]))   # cool teal fill from lower right
fil = np.clip((n * Lf).sum(-1), 0, 1)
KEY = np.array([1.0, .97, .92]) * 2.3; FILL = np.array([.18, .50, .66]) * .55; AMB = np.array([.30, .38, .44]) * .55
col = alb * (KEY * (dif * sh)[:, None] + FILL * fil[:, None] + AMB * (ao**1.6)[:, None])
# rim: brand teal from behind
rim = (1 - np.clip(n[:, 2], 0, 1)) ** 3.2 * np.clip(.4 + .6 * (n * nrm(np.array([.6, .3, -.2]))).sum(-1), 0, 1)
col += np.array([.18, .50, .66])[None] * (rim * (.35 + .65 * ao) * 1.6)[:, None]
# clear coat: blinn highlight (shadowed) + fresnel reflection of a softbox or a neighbour atom
hv = nrm(Lk + V); spec = np.clip((n * hv).sum(-1), 0, 1) ** 90 * sh * 3.2
col += (spec * spc)[:, None] * np.array([1, .98, .95])
rd = nrm(2 * n[:, 2:3] * n - V)  # reflect view dir (V=+z) about n
F = .04 + .96 * (1 - np.clip(n[:, 2], 0, 1)) ** 5
T, J = first_hit(o, rd)
def env(d):
    # studio: large softbox upper-left, faint teal floor, dark elsewhere
    sb = np.exp(-((d[:, 0] + .45) ** 2 / .09 + (d[:, 1] - .55) ** 2 / .05)) * 2.2 * (d[:, 2] > -.2)
    fl = np.clip(-d[:, 1], 0, 1) ** 1.5 * .12
    return sb[:, None] * np.array([1, .98, .95]) + fl[:, None] * np.array([.18, .5, .66]) + .015
rc = env(rd)
k = J >= 0
if k.any():
    rc[k] = AL[J[k]] * (.25 + .5 * np.clip((nrm(o[k] + rd[k] * T[k, None] - P[J[k]]) * Lk).sum(-1), 0, 1))[:, None] * 1.2
col += rc * (F * (.35 + .65 * spc))[:, None] * (.4 + .6 * ao)[:, None]
# tone map (filmic-ish), gamma
col = col / (1 + col * .55); col = np.clip(col, 0, 1) ** (1 / 2.2)
img = np.zeros((w, w, 4), np.float32)
img[idx[0], idx[1], :3] = col; img[idx[0], idx[1], 3] = 1
im = Image.fromarray((img * 255 + .5).clip(0, 255).astype(np.uint8), 'RGBA')
# premultiplied-correct downsample
arr = np.asarray(im).astype(np.float32) / 255; pm = arr.copy(); pm[..., :3] *= pm[..., 3:]
pm = pm.reshape(W, SS, W, SS, 4).mean((1, 3)); a = pm[..., 3:]
out = np.concatenate([np.where(a > 0, pm[..., :3] / np.maximum(a, 1e-6), 0), a], -1)
Image.fromarray((out * 255 + .5).clip(0, 255).astype(np.uint8), 'RGBA').save(OUT)
print('wrote', OUT, W)
