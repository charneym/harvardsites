#!/usr/bin/env python3
"""Offline SDF ray-march render of an Appiani steel reel (appianigroup.com > Prodotti: bobine stampate / strutturali):
two pressed steel flanges with radial ribs, a rolled rim, central hub with bore and two driving holes, painted in a
glossy signal red; a galvanised steel barrel between them. Output: RGBA png with real alpha."""
import numpy as np, sys
from multiprocessing import Pool
from PIL import Image

W = int(sys.argv[1]) if len(sys.argv) > 1 else 420
H = int(W * 0.92)
SS = int(sys.argv[2]) if len(sys.argv) > 2 else 1
OUT = sys.argv[3] if len(sys.argv) > 3 else 'reel.png'

def nrm(v): return v / np.linalg.norm(v, axis=-1, keepdims=True)
def length2(a, b): return np.sqrt(a * a + b * b)
def smin(a, b, k):
    h = np.clip(0.5 + 0.5 * (b - a) / k, 0, 1)
    return b * (1 - h) + a * h - k * h * (1 - h)
def cyl(r_ax, ax, r, h, rr=0.0):
    dx = r_ax - r + rr; dy = np.abs(ax) - h + rr
    return np.sqrt(np.maximum(dx, 0) ** 2 + np.maximum(dy, 0) ** 2) + np.minimum(np.maximum(dx, dy), 0) - rr

RB, XB, XF, TF, RF = 0.60, 0.80, 0.86, 0.035, 1.42
NR = 10

def parts(p):
    x, y, z = p[:, 0], p[:, 1], p[:, 2]
    r = length2(y, z)
    ax = np.abs(x)                       # both flanges by symmetry
    barrel = cyl(r, x, RB, XF - 0.01, 0.01)
    # pressed flange: a dished plate (slightly conical towards the rim) of thickness 2*TF
    dish = XF + 0.05 * np.clip((r - 0.30) / (RF - 0.30), 0, 1) ** 1.4 - 0.05
    plate = np.maximum(np.abs(ax - dish) - TF, r - RF)
    rim = np.sqrt((r - RF) ** 2 + (ax - dish) ** 2) - 0.045
    fl = smin(plate, rim, 0.02)
    # radial pressed ribs on the outer face (domain repetition by angle)
    a = np.arctan2(z, y); sec = 2 * np.pi / NR
    a2 = np.mod(a + sec / 2, sec) - sec / 2
    ry_ = r * np.cos(a2); rz_ = r * np.sin(a2)
    seg = np.clip(ry_, 0.46, 1.26)
    rib = np.sqrt((ry_ - seg) ** 2 + rz_ ** 2 + ((ax - dish - TF) * 1.6) ** 2) - 0.062
    fl = smin(fl, rib, 0.03)
    # hub boss and its chamfer
    hub = cyl(r, ax - XF - 0.035, 0.30, 0.04, 0.02)
    fl = smin(fl, hub, 0.03)
    # outer ring stiffening bead
    bead = np.sqrt((r - 1.30) ** 2 + ((ax - dish - TF) * 1.4) ** 2) - 0.03
    fl = smin(fl, bead, 0.02)
    # bore through everything, and two driving holes per flange
    bore = r - 0.12
    a3 = np.mod(a + np.pi / NR + np.pi / 2, np.pi) - np.pi / 2
    dh = length2(r * np.cos(a3) - 0.40, r * np.sin(a3)) - 0.045
    fl = np.maximum(fl, -dh)
    body = np.minimum(barrel, fl)
    body = np.maximum(body, -bore)
    return body, barrel, fl, r, ax

def sdf(p): return parts(p)[0]

def normal(p):
    e = 0.0012
    ex = np.array([e, 0, 0]); ey = np.array([0, e, 0]); ez = np.array([0, 0, e])
    return nrm(np.stack([sdf(p + ex) - sdf(p - ex), sdf(p + ey) - sdf(p - ey), sdf(p + ez) - sdf(p - ez)], -1))

KEY = nrm(np.array([0.35, 0.9, 0.55]))
RIM = nrm(np.array([-0.9, 0.3, -0.5]))
RIM2 = nrm(np.array([0.2, 0.25, -0.95]))
FILL = nrm(np.array([0.85, -0.2, 0.5]))

def env(d):
    y = d[:, 1:2]
    t = np.clip(y * .5 + .5, 0, 1)
    base = np.array([0.020, 0.020, 0.022]) * (1 - t) + np.array([0.085, 0.085, 0.09]) * t
    k = np.clip((d @ KEY - 0.78) / 0.15, 0, 1)[:, None]; k = k * k * (3 - 2 * k)
    r = np.clip((d @ RIM - 0.86) / 0.1, 0, 1)[:, None]; r = r * r * (3 - 2 * r)
    r2 = np.clip((d @ RIM2 - 0.86) / 0.1, 0, 1)[:, None]; r2 = r2 * r2 * (3 - 2 * r2)
    f = np.clip((d @ FILL - 0.70) / 0.25, 0, 1)[:, None]
    band = np.exp(-((y - 0.12) / 0.04) ** 2) * 0.5 * np.clip(d[:, 0:1] + 0.7, 0, 1)
    # two tall studio strips (left-front and right-back) for crisp clear-coat reflections
    az = np.arctan2(d[:, 2:3], d[:, 0:1])
    s1 = np.exp(-((az - 1.15) / 0.07) ** 6) * np.clip((y + 0.15) / 0.3, 0, 1) * 2.2
    s2 = np.exp(-((az + 0.35) / 0.06) ** 6) * np.clip((y + 0.05) / 0.3, 0, 1) * 1.4
    band = band + s1 + s2
    return (base + k * np.array([3.5, 3.4, 3.25]) + r * np.array([1.6, 1.55, 1.5]) + r2 * np.array([1.0, 1.0, 1.05])
            + f * f * np.array([0.45, 0.42, 0.4]) + band * np.array([0.95, 0.95, 0.95]))

def soft_shadow(p, l):
    res = np.ones(len(p)); t = np.full(len(p), 0.02)
    for _ in range(40):
        h = sdf(p + l * t[:, None]); res = np.minimum(res, 10 * h / t); t += np.clip(h, 0.01, 0.25)
    return np.clip(res, 0, 1)

def ao(p, n):
    occ = np.zeros(len(p)); s = 1.0
    for i in range(1, 6):
        hh = 0.025 + 0.08 * i; occ += (hh - sdf(p + n * hh)) * s; s *= 0.72
    return np.clip(1 - 1.5 * occ, 0, 1)

CAM = np.array([3.2, 1.45, 4.3]); TGT = np.array([0.0, -0.02, 0.0]); FOV = 0.215
fw = nrm(TGT - CAM); rt = nrm(np.cross(fw, [0, 1, 0])); up = np.cross(rt, fw)

def render_rows(args):
    y0, y1, w, h = args
    js, is_ = np.mgrid[y0:y1, 0:w]
    u = (is_ + 0.5) / w * 2 - 1; v = -((js + 0.5) / h * 2 - 1) * h / w
    d = nrm(fw + (u[..., None] * rt + v[..., None] * up) * FOV * 1.75).reshape(-1, 3); N = len(d)
    t = np.full(N, 2.5); hit = np.zeros(N, bool); alive = np.ones(N, bool)
    for _ in range(160):
        idx = np.nonzero(alive)[0]
        if len(idx) == 0: break
        p = CAM + d[idx] * t[idx, None]; dist = sdf(p); t[idx] += dist * 0.85
        h_ = dist < 0.0005; hit[idx[h_]] = True; far = t[idx] > 11; alive[idx[h_ | far]] = False
    col = np.zeros((N, 3)); alpha = hit.astype(float)
    idx = np.nonzero(hit)[0]
    if len(idx):
        p = CAM + d[idx] * t[idx, None]; dd = d[idx]
        n = normal(p)
        body, barrel, fl, r, ax = parts(p)
        steel = (np.abs(barrel) < 0.004) & (barrel < fl) & (ax < XF - TF - 0.02)
        steel |= (r < 0.125)       # bore wall: bare steel
        rfl = dd - 2 * np.sum(dd * n, -1, keepdims=True) * n
        sh = soft_shadow(p + n * 0.003, KEY); occ = ao(p, n)
        ndl = np.clip(n @ KEY, 0, 1); sky = 0.5 + 0.5 * n[:, 1]
        fres = 0.04 + 0.96 * (1 - np.clip(-np.sum(dd * n, -1), 0, 1)) ** 5
        alb = np.array([0.40, 0.024, 0.02])            # signal red paint (logo red)
        diff = alb * (np.array([0.16, 0.16, 0.17]) * sky[:, None] * occ[:, None] + 1.15 * (ndl * sh)[:, None])
        e = env(rfl) * (0.35 + 0.65 * sh)[:, None] * (0.25 + 0.75 * occ[:, None])
        paint = diff + (fres[:, None] * 0.9 + 0.035) * e
        rng = np.random.default_rng(3); acc = np.zeros_like(e)
        for s in range(16): acc += env(nrm(rfl + rng.normal(0, 0.14, rfl.shape)))
        spang = 0.92 + 0.08 * np.sin(p[:, 0] * 37 + np.sin(np.arctan2(p[:, 2], p[:, 1]) * 9) * 2.0)  # galvanised spangle
        st = acc / 16 * np.array([0.95, 0.96, 0.99]) * spang[:, None] * (0.10 + 0.9 * occ[:, None] ** 1.5) * (0.45 + 0.55 * sh[:, None])
        st += np.array([0.07, 0.07, 0.075]) * (ndl * sh)[:, None]
        col[idx] = np.where(steel[:, None], st, paint)
    return col.reshape(y1 - y0, w, 3), alpha.reshape(y1 - y0, w)

if __name__ == '__main__':
    w, h = W * SS, H * SS
    step = max(8, h // 64)
    jobs = [(a, min(a + step, h), w, h) for a in range(0, h, step)]
    with Pool(8) as pl: res = pl.map(render_rows, jobs)
    col = np.concatenate([r[0] for r in res]); al = np.concatenate([r[1] for r in res])
    a, b, c, d_, e = 2.51, 0.03, 2.43, 0.59, 0.14
    x = col * 1.1
    rgb = np.clip((x * (a * x + b)) / (x * (c * x + d_) + e), 0, 1) ** (1 / 2.2)
    img = np.dstack([rgb * 255, al * 255]).astype(np.float32)
    if SS > 1:
        pm = img.copy(); pm[..., :3] *= al[..., None]
        pm = pm.reshape(H, SS, W, SS, 4).mean((1, 3)); aa = pm[..., 3:4] / 255
        pm[..., :3] = np.where(aa > 0, pm[..., :3] / np.maximum(aa, 1e-6), 0); img = pm
    Image.fromarray(np.clip(img, 0, 255).astype(np.uint8), 'RGBA').save(OUT)
    print('wrote', OUT, img.shape)
