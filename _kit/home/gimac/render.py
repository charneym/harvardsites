#!/usr/bin/env python3
"""Offline SDF ray-march render of a GIMAC Ø12 micro-extruder, as photographed on gimac.com (Prodotti > Micro-estrusore,
estr012_1.jpg): machine-green gearmotor (motor with ribbed fan cover + gearbox), stainless feed throat and square hopper,
barrel with three finned heater bands (three barrel heating zones per the Ø12 data sheet), flanged die head and nozzle,
a fine extruded tube leaving the die. On a brushed base plate. Output: RGBA png with real alpha."""
import numpy as np, sys
from multiprocessing import Pool
from PIL import Image

W = int(sys.argv[1]) if len(sys.argv) > 1 else 480
H = int(W * 0.62)
SS = int(sys.argv[2]) if len(sys.argv) > 2 else 1
OUT = sys.argv[3] if len(sys.argv) > 3 else 'extruder.png'

def nrm(v): return v / np.linalg.norm(v, axis=-1, keepdims=True)
def l2(a, b): return np.sqrt(a * a + b * b)
def cyl(r_ax, ax, r, h, rr=0.0):
    dx = r_ax - r + rr; dy = np.abs(ax) - h + rr
    return np.sqrt(np.maximum(dx, 0) ** 2 + np.maximum(dy, 0) ** 2) + np.minimum(np.maximum(dx, dy), 0) - rr
def box(p, c, b, rr=0.0):
    q = np.abs(p - c) - (np.array(b) - rr)
    return np.linalg.norm(np.maximum(q, 0), axis=-1) + np.minimum(q.max(axis=-1), 0) - rr

ZONES = (-0.42, 0.02, 0.46)
TUBE_END = 2.15

def parts(p):
    x, y, z = p[:, 0], p[:, 1], p[:, 2]
    ryz = l2(y, z)
    # --- green gearmotor: motor (axis x) with ribbed fan cover, gearbox block, terminal box
    mot = cyl(ryz, x + 2.02, 0.29, 0.34, 0.04)
    a = np.arctan2(z, y)
    rib = cyl(ryz - 0.012 * (np.cos(a * 22) > 0.2), x + 2.42, 0.27, 0.08, 0.03)
    tb = box(p, np.array([-1.98, 0.33, 0]), (0.13, 0.07, 0.11), 0.015)
    gb = box(p, np.array([-1.40, 0.02, 0]), (0.27, 0.34, 0.31), 0.045)
    gfl = cyl(ryz, x + 1.66, 0.25, 0.03, 0.01)
    green = np.minimum(np.minimum(mot, gb), np.minimum(tb, gfl))
    fan = rib
    # --- stainless: feed throat block, square hopper (frustum), barrel, flange, die head, nozzle
    thr = box(p, np.array([-0.93, 0.0, 0]), (0.16, 0.19, 0.19), 0.012)
    yy = np.clip((y - 0.20) / 0.78, 0, 1)
    s = 0.10 + 0.22 * yy
    hq = np.maximum(np.abs(x + 0.93) - s, np.abs(z) - s)
    hop = np.maximum(hq * 0.85, np.maximum(0.20 - y, y - 0.98))
    hop_in = np.maximum(np.maximum(np.abs(x + 0.93) - s + 0.018, np.abs(z) - s + 0.018) * 0.85, 0.93 - y)
    hop = np.maximum(hop, -hop_in)
    bar = cyl(ryz, x - 0.20, 0.115, 0.98, 0.01)
    fl = cyl(ryz, x - 0.80, 0.19, 0.035, 0.008)
    head = cyl(ryz, x - 0.93, 0.16, 0.10, 0.02)
    noz = cyl(ryz, x - 1.07, 0.075 - 0.25 * np.clip(x - 1.03, 0, 0.12), 0.06, 0.006)
    steel = np.minimum(np.minimum(np.minimum(thr, hop), bar), np.minimum(np.minimum(fl, head), noz))
    # --- three finned heater bands
    hb = np.full(len(p), 9.0)
    for xc in ZONES:
        fin = 0.212 + 0.016 * np.cos((x - xc) * 2 * np.pi / 0.048)
        hb = np.minimum(hb, cyl(ryz, x - xc, 0.0, 0.17) * 0 + np.maximum(ryz - fin, np.abs(x - xc) - 0.17) * 0.6)
    # clamp screws on the bands (top)
    scr = np.full(len(p), 9.0)
    for xc in ZONES:
        scr = np.minimum(scr, box(p, np.array([xc, 0.25, 0]), (0.05, 0.03, 0.035), 0.008))
    heat = np.minimum(hb, scr)
    # --- base plate and two supports
    base = box(p, np.array([-0.62, -0.66, 0]), (1.92, 0.03, 0.34), 0.008)
    sup1 = box(p, np.array([-1.40, -0.49, 0]), (0.22, 0.15, 0.24), 0.01)
    sup2 = box(p, np.array([0.66, -0.36, 0]), (0.05, 0.28, 0.13), 0.006)
    sup3 = box(p, np.array([-0.93, -0.43, 0]), (0.07, 0.21, 0.15), 0.006)
    plate = np.minimum(np.minimum(base, sup1), np.minimum(sup2, sup3))
    # --- extruded tube leaving the nozzle
    tube = cyl(ryz, x - (1.12 + TUBE_END) / 2, 0.020, (TUBE_END - 1.12) / 2, 0.0)
    return green, fan, steel, heat, plate, tube

def sdf(p):
    ps = parts(p)
    d = ps[0]
    for q in ps[1:]: d = np.minimum(d, q)
    return d

def normal(p):
    e = 0.0012
    ex = np.array([e, 0, 0]); ey = np.array([0, e, 0]); ez = np.array([0, 0, e])
    return nrm(np.stack([sdf(p + ex) - sdf(p - ex), sdf(p + ey) - sdf(p - ey), sdf(p + ez) - sdf(p - ez)], -1))

KEY = nrm(np.array([-0.45, 0.9, 0.55]))
RIM = nrm(np.array([0.9, 0.3, -0.6]))
RIM2 = nrm(np.array([-0.9, 0.35, -0.5]))
FILL = nrm(np.array([0.4, -0.2, 0.9]))

def env(d):
    y = d[:, 1:2]
    t = np.clip(y * .5 + .5, 0, 1)
    base = np.array([0.018, 0.024, 0.045]) * (1 - t) + np.array([0.07, 0.09, 0.15]) * t
    k = np.clip((d @ KEY - 0.80) / 0.14, 0, 1)[:, None]; k = k * k * (3 - 2 * k)
    r = np.clip((d @ RIM - 0.86) / 0.1, 0, 1)[:, None]; r = r * r * (3 - 2 * r)
    r2 = np.clip((d @ RIM2 - 0.86) / 0.1, 0, 1)[:, None]; r2 = r2 * r2 * (3 - 2 * r2)
    f = np.clip((d @ FILL - 0.65) / 0.3, 0, 1)[:, None]
    band = np.exp(-((y - 0.12) / 0.04) ** 2) * 0.5 * np.clip(d[:, 2:3] + 0.6, 0, 1)
    return (base + k * np.array([3.4, 3.35, 3.2]) + r * np.array([1.3, 1.6, 2.3]) + r2 * np.array([1.0, 1.25, 1.8])
            + f * f * np.array([0.30, 0.42, 0.62]) + band * np.array([0.9, 0.97, 1.08]))

def soft_shadow(p, l):
    res = np.ones(len(p)); t = np.full(len(p), 0.02)
    for _ in range(36):
        h = sdf(p + l * t[:, None])
        res = np.minimum(res, 10 * h / t)
        t += np.clip(h, 0.01, 0.25)
    return np.clip(res, 0, 1)

def ao(p, n):
    occ = np.zeros(len(p)); s = 1.0
    for i in range(1, 6):
        hh = 0.02 + 0.06 * i
        occ += (hh - sdf(p + n * hh)) * s; s *= 0.72
    return np.clip(1 - 1.7 * occ, 0, 1)

CAM = np.array([2.5, 1.55, 5.5]); TGT = np.array([-0.18, -0.02, 0.0]); FOV = 0.25
fw = nrm(TGT - CAM); rt = nrm(np.cross(fw, [0, 1, 0])); up = np.cross(rt, fw)

def blurred(rfl, sig, n=12):
    rng = np.random.default_rng(3); acc = np.zeros_like(rfl)
    for _ in range(n): acc += env(nrm(rfl + rng.normal(0, sig, rfl.shape)))
    return acc / n

def render_rows(args):
    y0, y1, w, h = args
    js, is_ = np.mgrid[y0:y1, 0:w]
    u = (is_ + 0.5) / w * 2 - 1; v = -((js + 0.5) / h * 2 - 1) * h / w
    d = nrm(fw + (u[..., None] * rt + v[..., None] * up) * FOV * 1.75).reshape(-1, 3)
    N = len(d); t = np.full(N, 3.0); hit = np.zeros(N, bool); alive = np.ones(N, bool)
    for _ in range(260):
        idx = np.nonzero(alive)[0]
        if len(idx) == 0: break
        p = CAM + d[idx] * t[idx, None]
        dist = sdf(p)
        t[idx] += dist * 0.8
        hh = dist < 0.0006; hit[idx[hh]] = True
        alive[idx[hh | (t[idx] > 14)]] = False
    col = np.zeros((N, 3)); alpha = hit.astype(float)
    idx = np.nonzero(hit)[0]
    if len(idx):
        p = CAM + d[idx] * t[idx, None]; dd = d[idx]
        n = normal(p)
        ps = np.stack(parts(p), -1); mid = np.argmin(ps, -1)
        rfl = dd - 2 * np.sum(dd * n, -1, keepdims=True) * n
        sh = soft_shadow(p + n * 0.003, KEY); occ = ao(p, n)
        ndl = np.clip(n @ KEY, 0, 1); sky = 0.5 + 0.5 * n[:, 1]
        fres = 0.04 + 0.96 * (1 - np.clip(-np.sum(dd * n, -1), 0, 1)) ** 5
        lit = (0.35 + 0.65 * sh)[:, None] * (0.25 + 0.75 * occ[:, None])
        def paint(alb, gloss):
            diff = np.array(alb) * (np.array([0.34, 0.38, 0.52]) * sky[:, None] * occ[:, None] + 1.8 * (ndl * sh)[:, None])
            return diff + fres[:, None] * env(rfl) * lit * gloss
        gr = paint([0.085, 0.155, 0.105], 1.0)                        # machine green, satin
        fn = paint([0.070, 0.130, 0.090], 0.6)
        ss = (blurred(rfl, 0.05, 16) * np.array([0.78, 0.80, 0.84]) + np.array([0.10,0.11,0.13]) * (ndl * sh)[:, None] + np.array([0.025,0.03,0.04]) * (sky * occ)[:, None]) * (0.1 + 0.9 * occ[:, None] ** 1.4) * (0.4 + 0.6 * sh[:, None])
        ht = blurred(rfl, 0.16, 16) * np.array([0.42, 0.43, 0.46]) * (0.08 + 0.92 * occ[:, None] ** 1.6) * (0.4 + 0.6 * sh[:, None]) \
             + np.array([0.05, 0.052, 0.058]) * (ndl * sh)[:, None]
        pl = blurred(rfl, 0.07, 16) * np.array([0.30, 0.32, 0.36]) * (0.1 + 0.9 * occ[:, None]) * (0.4 + 0.6 * sh[:, None])
        tb = np.array([0.55, 0.75, 1.0]) * (0.35 + 0.65 * sky[:, None]) + fres[:, None] * env(rfl) * 0.8
        c = np.select([(mid == 0)[:, None], (mid == 1)[:, None], (mid == 2)[:, None], (mid == 3)[:, None], (mid == 4)[:, None]],
                      [gr, fn, ss, ht, pl], tb)
        col[idx] = c
    return col.reshape(y1 - y0, w, 3), alpha.reshape(y1 - y0, w)

if __name__ == '__main__':
    w, h = W * SS, H * SS
    step = max(8, h // 64)
    jobs = [(a, min(a + step, h), w, h) for a in range(0, h, step)]
    with Pool(4) as pl:
        res = pl.map(render_rows, jobs)
    col = np.concatenate([r[0] for r in res]); al = np.concatenate([r[1] for r in res])
    a, b, c, d_, e = 2.51, 0.03, 2.43, 0.59, 0.14
    x = col * 1.15
    rgb = np.clip((x * (a * x + b)) / (x * (c * x + d_) + e), 0, 1) ** (1 / 2.2)
    img = np.dstack([rgb * 255, al * 255]).astype(np.float32)
    if SS > 1:
        pm = img.copy(); pm[..., :3] *= al[..., None]
        pm = pm.reshape(H, SS, W, SS, 4).mean((1, 3))
        aa = pm[..., 3:4] / 255
        pm[..., :3] = np.where(aa > 0, pm[..., :3] / np.maximum(aa, 1e-6), 0)
        img = pm
    Image.fromarray(np.clip(img, 0, 255).astype(np.uint8), 'RGBA').save(OUT)
    print('wrote', OUT, img.shape)
