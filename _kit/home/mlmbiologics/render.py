#!/usr/bin/env python3
"""MLM Biologics hero (HOME_BRIEF update 2c: a crafted render of the firm's real product). One bio-ConneKt(R) Wound
Matrix pad as the company describes and photographs it (mlmbiologics.com/bio-connekt.html): a square sheet of
reconstituted, stabilized Type I collagen, porous ("to enable optimal host cell infiltration"), conformable, stored dry,
ivory white. It lies on a dark ground with one corner gently lifting, so its thickness and the open pore structure of
its cut edge read at once. Numpy sphere tracing of a warped rounded slab; the porous surface is a multi-scale pit
height map (normal bump + cavity darkening); soft contact shadow; saved with REAL ALPHA (no ground of its own, DJ/DP).
Usage: python3 render.py out.png W H [SS]"""
import sys, numpy as np
from PIL import Image
from scipy.ndimage import gaussian_filter, map_coordinates

OUT = sys.argv[1] if len(sys.argv) > 1 else 'hero.png'
W = int(sys.argv[2]) if len(sys.argv) > 2 else 1400
H = int(sys.argv[3]) if len(sys.argv) > 3 else 1050
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 2
rng = np.random.default_rng(7)

HT = 0.06      # half thickness
RR = 0.035     # edge rounding
GY = -HT - 0.002

def warp(x, z):
    s = np.clip((x + z - 0.9) / 1.1, 0, 1)
    return 0.028 * np.sin(2.1 * x + 0.4) * np.cos(1.5 * z - 0.2) + 0.30 * s * s * (3 - 2 * s) * s

def sdf(p):
    x, y, z = p[..., 0], p[..., 1], p[..., 2]
    qy = y - warp(x, z)
    bx, by, bz = 1 - RR, HT - RR, 1 - RR
    dx, dy, dz = np.abs(x) - bx, np.abs(qy) - by, np.abs(z) - bz
    o = np.sqrt(np.maximum(dx, 0) ** 2 + np.maximum(dy, 0) ** 2 + np.maximum(dz, 0) ** 2)
    i = np.minimum(np.maximum(dx, np.maximum(dy, dz)), 0)
    return o + i - RR

# ---------- pore texture over the top face ([-1,1]^2) and the cut edges ----------
TN = 1536
def pores(n, seed):
    """open-cell collagen foam: Worley cells (F2-F1) give thin bright walls around darker pores, at two scales,
    plus a soft velvety fbm"""
    from scipy.spatial import cKDTree
    r = np.random.default_rng(seed)
    yy, xx = np.mgrid[0:n, 0:n].astype(np.float32)
    pts = np.stack([xx.ravel(), yy.ravel()], -1)
    hgt = np.zeros(n * n, np.float32)
    for cnt, amp, _ in ((30000, .75, 3.0), (5200, .45, 2.2)):
        c = r.uniform(0, n, (cnt, 2)).astype(np.float32)
        cc = np.concatenate([c + [dx, dy] for dx in (-n, 0, n) for dy in (-n, 0, n)])
        dd, _ = cKDTree(cc).query(pts, k=2, workers=-1)
        cell = (dd[:, 1] - dd[:, 0]) / (np.sqrt(n * n / cnt) * .5)
        hgt -= amp * np.clip(cell, 0, 1) ** .55   # walls (F2-F1 ~ 0) stay high, pore centres sink
    hgt = hgt.reshape(n, n)
    fib = gaussian_filter(r.standard_normal((n, n)).astype(np.float32), 3, mode='wrap')
    hgt = hgt + .25 * fib / (np.abs(fib).max() + 1e-6)
    return gaussian_filter(hgt, .6, mode='wrap')
TEX = pores(TN, 3)
TEX -= TEX.min(); TEX /= TEX.max()            # 0 deep pit .. 1 surface
GX = np.gradient(TEX, axis=1) * TN / 2
GZ = np.gradient(TEX, axis=0) * TN / 2

def samp(a, u, v):
    """sample a texture with u,v in [-1,1] (wrapped)"""
    cu = ((u + 1) * .5 * TN) % TN; cv = ((v + 1) * .5 * TN) % TN
    return map_coordinates(a, [cv.ravel(), cu.ravel()], order=1, mode='wrap').reshape(u.shape)

# ---------- camera ----------
def norm(v): return v / np.linalg.norm(v, axis=-1, keepdims=True)
EL, AZ, DIST, FOV = np.radians(33), np.radians(-36), 5.6, np.radians(26)
TGT = np.array([0.0, 0.06, 0.04])
CAM = TGT + DIST * np.array([np.cos(EL) * np.sin(AZ), np.sin(EL), np.cos(EL) * np.cos(AZ)])
FW = norm(TGT - CAM); RT = norm(np.cross(FW, [0, 1, 0])); UP = np.cross(RT, FW)

L1 = norm(np.array([-0.55, 0.85, 0.45]))   # warm key, upper left front
L2 = norm(np.array([0.8, 0.35, 0.2]))      # cool fill from the right
L3 = norm(np.array([0.2, 0.5, -0.9]))      # back rim
ALB = np.array([0.96, 0.91, 0.80])
LP = np.array([-2.2, 3.0, 1.6])      # key light position (falloff across the pad)

def render_rows(y0, y1, w, h):
    ys, xs = np.mgrid[y0:y1, 0:w].astype(np.float64)
    ar = w / h; t = np.tan(FOV / 2)
    px = (2 * (xs + .5) / w - 1) * t * ar; py = (1 - 2 * (ys + .5) / h) * t
    d = norm(px[..., None] * RT + py[..., None] * UP + FW)
    o = np.broadcast_to(CAM, d.shape).copy()
    T = np.zeros(d.shape[:2]); hit = np.zeros(d.shape[:2], bool); alive = np.ones(d.shape[:2], bool)
    for _ in range(170):
        idx = alive & ~hit
        if not idx.any(): break
        p = o[idx] + d[idx] * T[idx][:, None]
        ds = sdf(p)
        h_ = ds < 4e-4
        Tv = T[idx] + ds * 0.72
        T[idx] = Tv
        hi = np.zeros_like(hit); hi[idx] = h_; hit |= hi
        far = np.zeros_like(hit); far[idx] = Tv > DIST + 3.5; alive &= ~far
    rgb = np.zeros(d.shape[:2] + (3,)); a = np.zeros(d.shape[:2])
    # ---- pad ----
    if hit.any():
        P = o[hit] + d[hit] * T[hit][:, None]; V = -d[hit]
        e = 1.5e-3
        n = np.stack([sdf(P + [e, 0, 0]) - sdf(P - [e, 0, 0]), sdf(P + [0, e, 0]) - sdf(P - [0, e, 0]),
                      sdf(P + [0, 0, e]) - sdf(P - [0, 0, e])], -1)
        n = norm(n)
        x, y, z = P[:, 0], P[:, 1], P[:, 2]
        qy = y - warp(x, z)
        top = (HT - np.abs(qy)) < (1 - np.maximum(np.abs(x), np.abs(z))) * 0.9
        # texture coordinates: top face -> (x,z); cut edges -> (along edge, thickness * 9)
        edgex = np.abs(x) > np.abs(z)
        u = np.where(top, x, np.where(edgex, z, x)); v = np.where(top, z, qy * 9 + np.where(edgex, 0.37, -0.41))
        hv = samp(TEX, u, v); gx = samp(GX, u, v); gz = samp(GZ, u, v)
        # bump: tangents in world space
        tu = np.where(top[:, None], np.array([1.0, 0, 0]), np.where(edgex[:, None], np.array([0, 0, 1.0]), np.array([1.0, 0, 0])))
        tv = np.where(top[:, None], np.array([0, 0, 1.0]), np.array([0, 1.0, 0]))
        tu = norm(tu - n * np.sum(tu * n, -1, keepdims=True)); tv = norm(tv - n * np.sum(tv * n, -1, keepdims=True))
        bs = np.where(top, 0.0042, 0.0055)[:, None]
        nb = norm(n - bs * (gx[:, None] * tu + gz[:, None] * tv))
        cav = np.clip(hv, 0, 1) ** 0.75
        alb = ALB * (0.62 + 0.38 * cav[:, None])
        def wrap(l, w_): return np.clip((np.sum(nb * l, -1) + w_) / (1 + w_), 0, 1)
        # self-shadow of the lifted corner onto the pad (soft, cheap: march toward the key light)
        sh = np.ones(len(P)); tt = np.full(len(P), 0.02)
        for _ in range(28):
            q = P + n * 0.004 + L1 * tt[:, None]; dd = sdf(q)
            sh = np.minimum(sh, np.clip(9 * dd / tt, 0, 1)); tt += np.clip(dd, 0.01, 0.12)
        sh = 0.35 + 0.65 * sh
        fall = (np.linalg.norm(LP) / np.linalg.norm(LP - P, axis=-1)) ** 2.2
        k1 = wrap(L1, 0.35) * sh * fall * 1.35; k2 = wrap(L2, 0.5); k3 = np.clip(1 - np.sum(nb * V, -1), 0, 1) ** 3 * np.clip(np.sum(nb * L3, -1) + .4, 0, 1)
        col = alb * (k1[:, None] * np.array([1.0, .97, .9]) * 1.0 + k2[:, None] * np.array([.74, .76, .78]) * 0.22 +
                     np.array([.11, .105, .10]) * (0.5 + 0.5 * n[:, 1:2]))
        col += k3[:, None] * np.array([.7, .78, .76]) * 0.22
        # translucency: thin collagen glows a touch warm where the key light comes through the lifted corner
        bt = np.clip(np.sum(-n * L1, -1), 0, 1) * (warp(x, z) > 0.04)
        col += bt[:, None] * np.array([.32, .27, .17]) * 0.5
        # soft satin sheen on the surface plateaus only
        hh = norm(L1 + V); sp = np.clip(np.sum(nb * hh, -1), 0, 1) ** 24 * cav
        col += sp[:, None] * 0.07
        rgb[hit] = col; a[hit] = 1
    # ---- ground: contact shadow only, as alpha over the page ink ----
    g = ~hit & (d[..., 1] < 0)
    if g.any():
        tg = (GY - o[g][:, 1]) / d[g][:, 1]; P = o[g] + d[g] * tg[:, None]
        sh = np.ones(len(P)); tt = np.full(len(P), 0.01)
        Ls = norm(np.array([-0.35, 1.0, 0.3]))
        for _ in range(36):
            q = P + Ls * tt[:, None]; dd = sdf(q)
            sh = np.minimum(sh, np.clip(5 * dd / tt, 0, 1)); tt += np.clip(dd, 0.008, 0.15)
        dist = sdf(P + [0, 0.002, 0])
        ao = np.exp(-np.maximum(dist, 0) / 0.05)
        al = np.clip((1 - sh) * 0.62 + ao * 0.35, 0, .82)
        rgb[g] = 0; a[g] = al
    return rgb, a

w, h = W * SS, H * SS
RGB = np.zeros((h, w, 3)); A = np.zeros((h, w))
step = 120
for y0 in range(0, h, step):
    r_, a_ = render_rows(y0, min(h, y0 + step), w, h)
    RGB[y0:y0 + step] = r_; A[y0:y0 + step] = a_
    print('row', y0, flush=True)
# tone map, premultiply for the downsample, then un-premultiply
RGB = 1 - np.exp(-RGB * 1.75)
RGB = RGB ** (1 / 1.08)
pm = np.dstack([RGB * A[..., None], A])
pm = pm.reshape(H, SS, W, SS, 4).mean((1, 3))
al = pm[..., 3:4]; col = np.where(al > 1e-4, pm[..., :3] / np.maximum(al, 1e-4), 0)
out = np.dstack([np.clip(col, 0, 1), np.clip(al, 0, 1)])
Image.fromarray((out * 255 + .5).astype(np.uint8)).save(OUT)
print('wrote', OUT, W, H)
