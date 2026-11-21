#!/usr/bin/env python3
"""Octin Health hero (HOME_BRIEF update 2c: a crafted render of the real subject). The thoracic aorta, the vessel every
Octin Health operation is about: the aortic root and ascending aorta rising from below, the arch turning over and back,
the three arch branches (brachiocephalic trunk dividing into the right subclavian and right common carotid, the left common
carotid, the left subclavian) and the descending aorta running down behind. The same arch is drawn in their own logo.
Wet arterial tissue in the logo's coral #e47262, lit from the upper left with a cool rim light, on the logo's deep teal ink.
Numpy sphere tracing of smooth-unioned tapered tubes; saved with ALPHA (no ground of its own, DJ).
Usage: python3 render.py W H out.png [SS] [procs]"""
import sys, numpy as np
from multiprocessing import Pool
from PIL import Image

W = int(sys.argv[1]) if len(sys.argv) > 1 else 560
H = int(sys.argv[2]) if len(sys.argv) > 2 else 700
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = float(sys.argv[4]) if len(sys.argv) > 4 else 1.0
NP = int(sys.argv[5]) if len(sys.argv) > 5 else 4
FW, FH = W, H; W, H = int(W * SS), int(H * SS)

def nrm(v): return v / np.linalg.norm(v, axis=-1, keepdims=True)

rng = np.random.default_rng(7)
PERM = rng.permutation(256); PERM = np.concatenate([PERM, PERM]); GV = rng.random(256) * 2 - 1
def vnoise(p):
    i = np.floor(p).astype(np.int64); f = p - i; u = f * f * (3 - 2 * f)
    def h(dx, dy, dz): return GV[PERM[(PERM[(PERM[(i[:, 0] + dx) & 255] + i[:, 1] + dy) & 255] + i[:, 2] + dz) & 255]]
    x00 = h(0,0,0)*(1-u[:,0]) + h(1,0,0)*u[:,0]; x10 = h(0,1,0)*(1-u[:,0]) + h(1,1,0)*u[:,0]
    x01 = h(0,0,1)*(1-u[:,0]) + h(1,0,1)*u[:,0]; x11 = h(0,1,1)*(1-u[:,0]) + h(1,1,1)*u[:,0]
    y0 = x00*(1-u[:,1]) + x10*u[:,1]; y1 = x01*(1-u[:,1]) + x11*u[:,1]
    return y0*(1-u[:,2]) + y1*u[:,2]
def fbm(p, o=4):
    s, a, f = 0.0, 0.5, 1.0
    for _ in range(o): s = s + a * vnoise(p * f); a *= 0.5; f *= 2.03
    return s

def curve(ctrl, n):
    """sample a bezier curve given control points -> (n,3)"""
    C = np.array(ctrl, float); t = np.linspace(0, 1, n)
    pts = []
    for tt in t:
        Q = C.copy()
        while len(Q) > 1: Q = Q[:-1] * (1 - tt) + Q[1:] * tt
        pts.append(Q[0])
    return np.array(pts)

# ---- the vessels: (points, radii). x to the viewer's right (patient's left), y up, z toward the viewer
TUBES = []
def tube(ctrl, r0, r1, n=14, bulge=None):
    n = n * 3
    P = curve(ctrl, n); t = np.linspace(0, 1, n); R = r0 + (r1 - r0) * t
    if bulge: R = R + bulge[0] * np.exp(-((t - bulge[1]) / bulge[2]) ** 2)
    TUBES.append((P, R))
# aortic root + ascending aorta (sinus bulge low down), into the arch, then the descending aorta
tube([(-0.30, -1.55, 0.30), (-0.42, -0.90, 0.32), (-0.40, -0.20, 0.26), (-0.30, 0.30, 0.18)], 0.30, 0.285, 16, bulge=(0.06, 0.12, 0.12))
tube([(-0.30, 0.30, 0.18), (-0.22, 0.78, 0.08), (0.22, 0.86, -0.12), (0.36, 0.34, -0.30)], 0.285, 0.25, 18)
tube([(0.36, 0.34, -0.30), (0.46, -0.10, -0.38), (0.44, -0.80, -0.36), (0.40, -1.60, -0.34)], 0.25, 0.225, 16)
# brachiocephalic trunk, then its division
tube([(-0.17, 0.66, 0.08), (-0.24, 0.92, 0.10), (-0.30, 1.08, 0.12)], 0.130, 0.115, 8)
tube([(-0.30, 1.06, 0.12), (-0.46, 1.20, 0.14), (-0.70, 1.26, 0.10), (-0.98, 1.20, 0.04)], 0.090, 0.075, 10)   # right subclavian
tube([(-0.30, 1.06, 0.12), (-0.30, 1.30, 0.14), (-0.28, 1.56, 0.14), (-0.27, 1.82, 0.14)], 0.082, 0.070, 10)   # right common carotid
tube([(0.02, 0.80, -0.02), (0.02, 1.10, 0.00), (0.06, 1.45, 0.02), (0.07, 1.82, 0.02)], 0.085, 0.070, 10)      # left common carotid
tube([(0.20, 0.72, -0.16), (0.30, 1.00, -0.14), (0.50, 1.18, -0.12), (0.82, 1.20, -0.14)], 0.095, 0.078, 10)   # left subclavian

SEG = []   # (a, b, ra, rb, tube index)
for k, (P, R) in enumerate(TUBES):
    for i in range(len(P) - 1): SEG.append((P[i], P[i + 1], R[i], R[i + 1], k))
SA = np.array([s[0] for s in SEG]); SB = np.array([s[1] for s in SEG])
SRa = np.array([s[2] for s in SEG]); SRb = np.array([s[3] for s in SEG]); SK = np.array([s[4] for s in SEG])
NT = len(TUBES)
BMIN = np.minimum(SA, SB).min(0) - 0.4; BMAX = np.maximum(SA, SB).max(0) + 0.4

def smin(a, b, k):
    h = np.clip(0.5 + 0.5 * (b - a) / k, 0, 1)
    return b * (1 - h) + a * h - k * h * (1 - h)

def sdf(p):
    """distance to the vessel tree; hard min within a tube, smooth union between tubes (blended branch origins)"""
    best = np.full((NT, len(p)), 1e9)
    for i in range(len(SA)):
        ba = SB[i] - SA[i]; pa = p - SA[i]
        h = np.clip((pa @ ba) / (ba @ ba), 0, 1)
        d = np.linalg.norm(pa - h[:, None] * ba, axis=1) - (SRa[i] + (SRb[i] - SRa[i]) * h)
        best[SK[i]] = np.minimum(best[SK[i]], d)
    d = best[0]
    for k in range(1, NT): d = smin(d, best[k], 0.07)
    # gentle tissue relief: low-frequency undulation, no bumps that read as toy texture
    return d + 0.006 * vnoise(p * 6.0)

def march(O, D, steps=150, eps=6e-4):
    t = np.full(len(O), 2.0); hit = np.zeros(len(O), bool); act = np.ones(len(O), bool)
    for _ in range(steps):
        idx = np.nonzero(act)[0]
        if not len(idx): break
        d = sdf(O[idx] + D[idx] * t[idx, None])
        t[idx] += d * 0.9
        h = d < eps; hit[idx[h]] = True; act[idx[h]] = False
        act[idx[t[idx] > 9.0]] = False
    return t, hit

import os
CAM = np.array([float(v) for v in os.environ.get('CAM', '3.2 0.6 4.9').split()]); TGT = np.array([-0.02, 0.12, 0.0]); FOV = 0.37
fw = nrm(TGT - CAM); rt = nrm(np.cross(fw, [0, 1, 0])); up = np.cross(rt, fw)
LK = nrm(np.array([-0.7, 0.8, 0.75]))    # warm key, upper left front
LR = nrm(np.array([0.9, 0.25, -0.6]))    # cool rim from behind right
LF = nrm(np.array([0.3, -0.6, 0.8]))     # low fill
BASE = np.array([0.74, 0.21, 0.17]); DEEP = np.array([0.40, 0.08, 0.08]); FAT = np.array([0.93, 0.80, 0.62])

def shade_rows(rows):
    y0, y1 = rows
    ys, xs = np.mgrid[y0:y1, 0:W].astype(float)
    sx = (xs + 0.5) / W * 2 - 1; sy = 1 - (ys + 0.5) / H * 2
    asp = W / H
    D = nrm(fw[None] + (sx.ravel()[:, None] * asp * FOV) * rt[None] + (sy.ravel()[:, None] * FOV) * up[None])
    O = np.repeat(CAM[None], len(D), 0)
    t, hit = march(O, D)
    out = np.zeros((len(D), 4))
    idx = np.nonzero(hit)[0]
    if len(idx):
        P = O[idx] + D[idx] * t[idx, None]; e = 1.5e-3
        N = nrm(np.stack([sdf(P + [e, 0, 0]) - sdf(P - [e, 0, 0]), sdf(P + [0, e, 0]) - sdf(P - [0, e, 0]), sdf(P + [0, 0, e]) - sdf(P - [0, 0, e])], 1))
        V = -D[idx]
        # ambient occlusion
        ao = np.ones(len(P))
        for k, s in enumerate([0.03, 0.07, 0.13, 0.22]):
            ao -= (s - sdf(P + N * s)) * (1.6 / (k + 1))
        ao = np.clip(ao, 0.25, 1)
        # soft shadow from the key
        sh = np.ones(len(P)); tt = np.full(len(P), 0.03)
        for _ in range(22):
            d = sdf(P + LK[None] * tt[:, None]); sh = np.minimum(sh, np.clip(10 * d / tt, 0, 1)); tt += np.clip(d, 0.02, 0.2)
        sh = 0.35 + 0.65 * sh
        # tissue colour: coral with darker deeper red in the creases, faint pale adventitial streaks along the vessels
        n1 = fbm(P * 3.2); n2 = fbm(P * 11 + 3.1, 3)
        col = BASE[None] * (0.9 + 0.22 * n1[:, None])
        col = col * (1 - 0.35 * (1 - ao)[:, None]) + DEEP[None] * 0.35 * (1 - ao)[:, None]
        streak = np.clip((n2 - 0.25) * 2.0, 0, 1) * 0.07
        col = col * (1 - streak[:, None]) + FAT[None] * streak[:, None]
        # thin vasa vasorum: ridged noise lines, darker red
        rv = 1 - np.abs(fbm(P * 5.5 + 9.0, 3) * 2.2)
        vein = np.clip((rv - 0.9) * 9, 0, 1) * 0.32
        col = col * (1 - vein[:, None]) + np.array([0.45, 0.06, 0.09])[None] * vein[:, None]
        dk = np.clip(N @ LK, 0, 1); df = np.clip(N @ LF, 0, 1)
        wrap = np.clip((N @ LK + 0.35) / 1.35, 0, 1)   # wrap lighting: light passes into tissue a little
        Hk = nrm(LK[None] + V); spec = np.clip(np.sum(N * Hk, 1), 0, 1) ** 90 * 0.9 + np.clip(np.sum(N * Hk, 1), 0, 1) ** 12 * 0.06
        fr = (1 - np.clip(np.sum(N * V, 1), 0, 1)) ** 3
        rim = np.clip(N @ LR, 0, 1) ** 1.5 * fr
        sss = np.array([0.55, 0.12, 0.08])[None] * (wrap - dk * 0.6)[:, None].clip(0) * 0.55
        c = col * (0.08 + 0.95 * (0.25 * wrap + 0.75 * dk)[:, None] * sh[:, None] + 0.18 * df[:, None]) * ao[:, None] ** 0.6
        c = c + sss + spec[:, None] * sh[:, None] * np.array([1.0, 0.95, 0.9])[None] + rim[:, None] * np.array([0.35, 0.62, 0.72])[None] * 0.55
        # the vessels run on out of the light: fade the cut ends into the ink instead of capping them (no toy end caps)
        y = P[:, 1]; x = P[:, 0]
        fa = np.clip((y + 1.55) / 0.95, 0, 1) * np.clip((1.82 - y) / 0.55, 0, 1) * np.clip((1.0 - np.abs(x)) / 0.45, 0, 1)
        fa = fa * fa * (3 - 2 * fa)
        out[idx, :3] = c; out[idx, 3] = fa
    return out.reshape(y1 - y0, W, 4)

if __name__ == '__main__':
    chunks = [(y, min(H, y + 16)) for y in range(0, H, 16)]
    with Pool(NP) as pool: parts = pool.map(shade_rows, chunks)
    img = np.concatenate(parts, 0)
    rgb = np.clip(img[..., :3], 0, None); rgb = rgb / (1 + rgb * 0.35) * 1.18   # soft filmic shoulder
    rgb = np.clip(rgb, 0, 1) ** (1 / 2.2)
    a = img[..., 3:4]
    im = Image.fromarray((np.concatenate([rgb * a, a], -1) * 255).round().astype(np.uint8), 'RGBA')
    # premultiplied -> straight
    arr = np.array(im).astype(float); al = arr[..., 3:4] / 255
    arr[..., :3] = np.where(al > 0, arr[..., :3] / np.maximum(al, 1e-4), 0)
    im = Image.fromarray(arr.clip(0, 255).astype(np.uint8), 'RGBA')
    if SS != 1: im = im.resize((FW, FH), Image.LANCZOS)
    im.save(OUT); print('saved', OUT, im.size)
