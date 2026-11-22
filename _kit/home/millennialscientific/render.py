#!/usr/bin/env python3
"""Millennial Scientific hero (HOME_BRIEF update 2c: a crafted render of the firm's own product). A loose cluster of
NanoPak-C all-carbon microbeads, modelled on Millennial's own optical micrograph of the beads (dark graphitic spheres
with a gunmetal sheen and a granular, glittering surface of micrographite flakes, scattered pores). Ray-traced in numpy:
each bead's surface is Worley-cell flakes, each flake with its own tilted normal (sparkle), a broad metallic sheen, pores
as dark cells, soft shadows and contact occlusion between beads, a cool environment reflection and a teal rim light
(brand teal). Saved with real ALPHA (no ground of its own, DJ/DP). Usage: python3 render.py W out.png"""
import sys, math, numpy as np
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 1400
OUT = sys.argv[2] if len(sys.argv) > 2 else 'hero.png'
SS = 2; w = W * SS
rng = np.random.default_rng(11)

def nrm(v): return v / np.maximum(np.linalg.norm(v, axis=-1, keepdims=True), 1e-9)

# ---- bead layout: relax random spheres into a touching, slightly flattened cluster ----
N = 13
R = rng.uniform(.21, .27, N); R[0] = .3
C = rng.normal(size=(N, 3)) * [.5, .5, .3]
for it in range(900):
    C *= 1 - .006                                        # pull to the centre
    C[:, 2] *= 1 - .01                                   # flatten toward the image plane
    d = C[:, None] - C[None]; L = np.linalg.norm(d, axis=-1) + np.eye(N)
    ov = (R[:, None] + R[None] + .004) - L; np.fill_diagonal(ov, 0)
    push = (np.clip(ov, 0, None) / L)[..., None] * d * .5
    C += push.sum(1)
C -= (C.max(0) + C.min(0)) / 2 * [1, 1, 0]
ext = np.max(np.abs(C[:, :2]) + R[:, None]); C /= ext * 1.06; R /= ext * 1.06   # fit within [-1,1] with margin
ROT = [np.linalg.qr(rng.normal(size=(3, 3)))[0] for _ in range(N)]

# camera: mild perspective looking down -z
CAM = np.array([0, 0, 6.0]); FOV = 1.0 / 6.0 * 1.0

# lights (view space, y up)
LK = nrm(np.array([-.55, .62, .56]))       # key, upper left, warm white
LF = nrm(np.array([.7, -.2, .6]))          # fill, dim cool
LR = nrm(np.array([.62, .35, -.7]))        # rim from behind right, brand teal
KEY = np.array([1.0, .96, .9]) * 1.25; FILL = np.array([.55, .66, .8]) * .1; RIM = np.array([.1, .62, .78]) * .9

def hash3(ci, seed):
    h = (ci[..., 0] * 73856093) ^ (ci[..., 1] * 19349663) ^ (ci[..., 2] * 83492791) ^ (seed * 2654435761)
    h = (h ^ (h >> 13)) * 1274126177; h ^= h >> 16
    return h

def rnd(h, k):
    x = ((h + k * 0x9E3779B1) * 2246822519) & 0xFFFFFFFF
    x ^= x >> 15
    return (x & 0xFFFFFF) / float(0xFFFFFF)

def worley(q, cs, seed):
    """3D Worley noise: nearest and second-nearest feature distance, and the nearest cell's hash."""
    g = q / cs; base = np.floor(g).astype(np.int64)
    d1 = np.full(q.shape[0], 9.0); d2 = np.full(q.shape[0], 9.0); hid = np.zeros(q.shape[0], np.int64)
    for dx in (-1, 0, 1):
        for dy in (-1, 0, 1):
            for dz in (-1, 0, 1):
                ci = base + [dx, dy, dz]; h = hash3(ci, seed)
                fp = ci + np.stack([rnd(h, 1), rnd(h, 2), rnd(h, 3)], -1)
                d = np.linalg.norm(g - fp, axis=-1)
                m = d < d1
                d2 = np.where(m, d1, np.minimum(d2, d)); hid = np.where(m, h, hid); d1 = np.where(m, d, d1)
    return d1, d2, hid

def env(r):
    """cool studio environment: a soft bright panel up-left, a dim floor."""
    up = np.clip(r[:, 1] * .5 + .5, 0, 1)
    base = np.array([.01, .02, .03]) + up[:, None] ** 3 * np.array([.14, .19, .24])
    panel = np.clip(r @ nrm(np.array([-.5, .7, .5])), 0, 1) ** 70 * 6.0
    return base + panel[:, None] * np.array([1, .97, .92])

def trace_spheres(o, d, skip=None):
    """nearest hit t and index of the cluster spheres for rays o + t d."""
    tbest = np.full(d.shape[0], np.inf); ib = np.full(d.shape[0], -1)
    for i in range(N):
        oc = o - C[i]; b = (oc * d).sum(-1); c = (oc * oc).sum(-1) - R[i] ** 2; disc = b * b - c
        ok = disc > 0; s = np.sqrt(np.where(ok, disc, 0)); t = -b - s
        ok &= t > 1e-4
        if skip is not None: ok &= skip != i
        m = ok & (t < tbest); tbest = np.where(m, t, tbest); ib = np.where(m, i, ib)
    return tbest, ib

def shadow(p, l, own):
    """soft-ish shadow: closest approach of the light ray to each other sphere, smoothstepped."""
    s = np.ones(p.shape[0])
    for i in range(N):
        oc = C[i] - p; tc = (oc * l).sum(-1); dist = np.linalg.norm(oc - tc[:, None] * l, axis=-1)
        k = np.clip((dist - R[i] * .9) / (R[i] * .25), 0, 1); k = k * k * (3 - 2 * k)
        k = np.where((tc > 0) & (own != i), k, 1); s = np.minimum(s, k)
    return s

def shade(p, n0, i, v):
    out = np.zeros((p.shape[0], 3)); M = p.shape[0]
    q = np.zeros_like(p)
    for k in range(N):
        m = i == k
        if m.any(): q[m] = ((p[m] - C[k]) / R[k]) @ ROT[k].T
    # flakes: Worley cells ~ micrographite platelets, each with its own tilt
    d1, d2, h = worley(q, .055, 3)
    edge = np.clip((d2 - d1) / .12, 0, 1)                 # cell borders slightly recessed
    tilt = np.stack([rnd(h, 5) - .5, rnd(h, 6) - .5, rnd(h, 7) - .5], -1) * 1.1
    nf = nrm(n0 + tilt * (.55 + .45 * edge[:, None]))
    # fine grain bump (second, smaller Worley)
    e1, e2, h2 = worley(q, .02, 9)
    tilt2 = np.stack([rnd(h2, 5) - .5, rnd(h2, 6) - .5, rnd(h2, 7) - .5], -1) * .35
    nb = nrm(n0 + tilt2 + tilt * .18)
    # pores: a sparse set of cells read as dark pits
    pore = (rnd(h, 11) < .025) & (d1 < .4)
    pd, _, ph = worley(q, .035, 21); pit = np.clip(1 - pd / .22, 0, 1) ** 2 * (rnd(ph, 2) < .08)
    cav = np.clip(1 - pore * .75 - pit * .6, .15, 1) * (.82 + .18 * edge)
    alb = np.array([.032, .032, .034]) * (0.8 + .5 * rnd(h, 8))[:, None]
    sh = shadow(p, LK, i)
    # contact occlusion from neighbouring beads
    ao = np.ones(M)
    for k in range(N):
        dk = np.linalg.norm(p - C[k], axis=-1) - R[k]
        dirk = nrm(C[k] - p); fac = np.clip((nb * dirk).sum(-1), 0, 1)
        occ = np.clip(1 - dk / (R[k] * .9), 0, 1) ** 2 * fac
        ao *= np.where(i == k, 1, 1 - .85 * occ)
    ndv = np.clip((nb * v).sum(-1), 1e-3, 1)
    for L, col, ss in ((LK, KEY, sh), (LF, FILL, np.ones(M))):
        ndl = np.clip((nb * L).sum(-1), 0, 1)
        hv = nrm(L + v)
        broad = np.clip((nb * hv).sum(-1), 0, 1) ** 24 * 1.1          # gunmetal sheen
        spark = np.clip((nf * hv).sum(-1), 0, 1) ** 420 * 14.0          # flake glints
        spark *= (rnd(h, 13) < .5)
        out += (alb * ndl[:, None] + (broad * .55 + spark)[:, None] * np.array([.92, .86, .74])) * (col * (ss * cav)[:, None])
    # environment reflection (metallic-ish graphite), Fresnel
    rr = nrm(2 * (nb * v).sum(-1, keepdims=True) * nb - v)
    F = .1 + .9 * (1 - ndv) ** 5
    out += env(rr) * (F * .55 * cav * ao)[:, None]
    # rim
    rim = (1 - ndv) ** 4.5 * np.clip((n0 * LR).sum(-1) + .45, 0, 1)
    out += RIM * (rim * ao * (.6 + .4 * edge))[:, None]
    out *= ao[:, None] ** .8
    # depth cue: beads further back go slightly darker and bluer
    z = (p[:, 2] + 1) / 2
    out = out * (.7 + .3 * z[:, None]) + np.array([.004, .012, .02]) * (1 - z[:, None])
    return out

img = np.zeros((w, w, 3), np.float32); A = np.zeros((w, w), np.float32)
ys = np.arange(w)
for r0 in range(0, w, 128):
    rows = ys[r0:r0 + 128]
    yy, xx = np.meshgrid(rows, np.arange(w), indexing='ij')
    sx = (xx + .5) / w * 2 - 1; sy = 1 - (yy + .5) / w * 2
    target = np.stack([sx, sy, np.zeros_like(sx)], -1).reshape(-1, 3)
    o = np.broadcast_to(CAM, target.shape).astype(float); d = nrm(target - o)
    t, ib = trace_spheres(o, d)
    hit = ib >= 0
    col = np.zeros((d.shape[0], 3))
    if hit.any():
        p = o[hit] + d[hit] * t[hit, None]; i = ib[hit]
        n0 = nrm(p - C[i]); v = -d[hit]
        col[hit] = shade(p, n0, i, v)
    img[r0:r0 + 128] = col.reshape(len(rows), w, 3); A[r0:r0 + 128] = hit.reshape(len(rows), w)
    print(r0, flush=True)

# tone map (filmic-ish), gamma, downsample with alpha
x = np.clip(img, 0, None); x = x * (1 + x / 4.0) / (1 + x); x = np.clip(x, 0, 1) ** (1 / 2.2)
rgba = np.concatenate([x * A[..., None], A[..., None]], -1)
rgba = rgba.reshape(W, SS, W, SS, 4).mean((1, 3))
a = rgba[..., 3:4]; rgb = np.where(a > 0, rgba[..., :3] / np.maximum(a, 1e-6), 0)
out = np.concatenate([rgb, a], -1)
Image.fromarray((np.clip(out, 0, 1) * 255 + .5).astype(np.uint8), 'RGBA').save(OUT)
print('saved', OUT)
