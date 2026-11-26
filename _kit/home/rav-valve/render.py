#!/usr/bin/env python3
"""Offline SDF ray-march render of a RAV-style fully welded ball valve (body, two pipe ends with machined bores,
stem housing with bolted flanges, pedestal). Output: RGBA png with real alpha."""
import numpy as np, sys
from multiprocessing import Pool
from PIL import Image

W = int(sys.argv[1]) if len(sys.argv) > 1 else 480
H = int(W * 0.78)
SS = int(sys.argv[2]) if len(sys.argv) > 2 else 1
OUT = sys.argv[3] if len(sys.argv) > 3 else 'valve.png'

def nrm(v): return v / np.linalg.norm(v, axis=-1, keepdims=True)
def length2(a, b): return np.sqrt(a * a + b * b)

def smin(a, b, k):
    h = np.clip(0.5 + 0.5 * (b - a) / k, 0, 1)
    return b * (1 - h) + a * h - k * h * (1 - h)

def cyl(r_ax, ax, r, h, rr=0.0):
    # r_ax: radial distance, ax: axial coordinate (centred), radius r, half height h, edge round rr
    dx = r_ax - r + rr; dy = np.abs(ax) - h + rr
    return np.sqrt(np.maximum(dx, 0) ** 2 + np.maximum(dy, 0) ** 2) + np.minimum(np.maximum(dx, dy), 0) - rr

def box(p, c, b, rr=0.0):
    q = np.abs(p - c) - (np.array(b) - rr)
    return np.linalg.norm(np.maximum(q, 0), axis=-1) + np.minimum(q.max(axis=-1), 0) - rr

R_OUT, R_IN, XE = 0.60, 0.50, 1.78

def parts(p):
    x, y, z = p[:, 0], p[:, 1], p[:, 2]
    ryz = length2(y, z)
    sph = np.sqrt(x * x + y * y + z * z) - 1.0
    pipe = cyl(ryz, x, R_OUT, XE, 0.025)
    body = smin(sph, pipe, 0.22)
    # weld beads on the shell and at the pipe joints
    for xs, rm in ((0.40, np.sqrt(1 - 0.40 ** 2)), (-0.40, np.sqrt(1 - 0.40 ** 2)), (1.18, R_OUT + 0.005), (-1.18, R_OUT + 0.005)):
        tor = np.sqrt((ryz - rm) ** 2 + (x - xs) ** 2) - 0.022
        body = smin(body, tor, 0.02)
    # stem housing and flanges (axis y)
    rxz = length2(x, z)
    stem = cyl(rxz, y - 1.10, 0.30, 0.42, 0.02)
    body = smin(body, stem, 0.12)
    fl1 = cyl(rxz, y - 1.55, 0.46, 0.045, 0.012)
    adp = cyl(rxz, y - 1.80, 0.25, 0.22, 0.015)
    fl2 = cyl(rxz, y - 2.04, 0.36, 0.035, 0.01)
    cap = cyl(rxz, y - 2.20, 0.17, 0.13, 0.03)
    # bolts on the lower flange (8, domain repetition by angle)
    a = np.arctan2(z, x); sec = 2 * np.pi / 8
    a2 = (np.mod(a + sec / 2, sec) - sec / 2)
    bx = rxz * np.cos(a2) - 0.40; bz = rxz * np.sin(a2)
    bolt = cyl(length2(bx, bz), y - 1.625, 0.032, 0.035, 0.008)
    bx2 = rxz * np.cos(a2) - 0.31
    bolt2 = cyl(length2(bx2, rxz * np.sin(a2)), y - 2.09, 0.024, 0.025, 0.006)
    top = np.minimum(np.minimum(np.minimum(fl1, adp), np.minimum(fl2, cap)), np.minimum(bolt, bolt2))
    # pedestal: base plate, two web plates, cross web
    ped = np.minimum(box(p, np.array([0, -1.62, 0]), (0.92, 0.045, 0.74), 0.01),
          np.minimum(box(p, np.array([0, -1.22, 0.42]), (0.62, 0.40, 0.035), 0.008),
          np.minimum(box(p, np.array([0, -1.22, -0.42]), (0.62, 0.40, 0.035), 0.008),
                     box(p, np.array([0, -1.22, 0]), (0.035, 0.40, 0.44), 0.008))))
    ped = np.maximum(ped, -(np.sqrt(x * x + y * y + z * z) - 1.0))  # saddle follows the shell
    shell = np.minimum(body, ped)
    # through bore
    bore = cyl(ryz, x, R_IN, XE + 0.5)
    shell = np.maximum(shell, -bore)
    return shell, top, bolt, bolt2, ped, ryz, x

def sdf(p):
    s, t = parts(p)[:2]
    return np.minimum(s, t)

def normal(p):
    e = 0.0015
    ex = np.array([e, 0, 0]); ey = np.array([0, e, 0]); ez = np.array([0, 0, e])
    n = np.stack([sdf(p + ex) - sdf(p - ex), sdf(p + ey) - sdf(p - ey), sdf(p + ez) - sdf(p - ez)], -1)
    return nrm(n)

KEY = nrm(np.array([-0.55, 0.85, 0.45]))
RIM = nrm(np.array([0.95, 0.25, -0.55]))
RIM2 = nrm(np.array([-0.95, 0.35, -0.45]))
FILL = nrm(np.array([0.5, -0.35, 0.8]))

def env(d):
    y = d[:, 1:2]
    base = np.array([0.020, 0.022, 0.055]) * (1 - np.clip(y * .5 + .5, 0, 1)) + np.array([0.075, 0.085, 0.17]) * np.clip(y * .5 + .5, 0, 1)
    k = np.clip((d @ KEY - 0.80) / 0.14, 0, 1)[:, None]; k = k * k * (3 - 2 * k)
    r = np.clip((d @ RIM - 0.88) / 0.09, 0, 1)[:, None]; r = r * r * (3 - 2 * r)
    r2 = np.clip((d @ RIM2 - 0.86) / 0.1, 0, 1)[:, None]; r2 = r2 * r2 * (3 - 2 * r2)
    f = np.clip((d @ FILL - 0.70) / 0.25, 0, 1)[:, None]
    band = np.exp(-((y - 0.10) / 0.035) ** 2) * 0.55 * np.clip(d[:, 2:3] + 0.6, 0, 1)
    return (base + k * np.array([3.6, 3.45, 3.2]) + r * np.array([1.5, 1.7, 2.3]) + r2 * np.array([1.2, 1.35, 1.8]) + f * f * np.array([0.55, 0.36, 0.12])
            + band * np.array([0.9, 0.95, 1.05]))

def soft_shadow(p, l):
    res = np.ones(len(p)); t = np.full(len(p), 0.02)
    for _ in range(40):
        h = sdf(p + l * t[:, None])
        res = np.minimum(res, 10 * h / t)
        t += np.clip(h, 0.01, 0.25)
    return np.clip(res, 0, 1)

def ao(p, n):
    occ = np.zeros(len(p)); s = 1.0
    for i in range(1, 6):
        hh = 0.03 + 0.09 * i
        occ += (hh - sdf(p + n * hh)) * s; s *= 0.72
    return np.clip(1 - 1.6 * occ, 0, 1)

CAM = np.array([4.9, 1.55, 4.3]); TGT = np.array([0.42, 0.30, -0.42]); FOV = 0.33
fw = nrm(TGT - CAM); rt = nrm(np.cross(fw, [0, 1, 0])); up = np.cross(rt, fw)

def render_rows(args):
    y0, y1, w, h = args
    js, is_ = np.mgrid[y0:y1, 0:w]
    u = (is_ + 0.5) / w * 2 - 1; v = -((js + 0.5) / h * 2 - 1) * h / w
    d = nrm(fw + (u[..., None] * rt + v[..., None] * up) * FOV * 1.75)
    d = d.reshape(-1, 3); N = len(d)
    t = np.full(N, 3.0); hit = np.zeros(N, bool); alive = np.ones(N, bool)
    for _ in range(140):
        idx = np.nonzero(alive)[0]
        if len(idx) == 0: break
        p = CAM + d[idx] * t[idx, None]
        dist = sdf(p)
        t[idx] += dist * 0.9
        h_ = dist < 0.0006; hit[idx[h_]] = True
        far = t[idx] > 11
        alive[idx[h_ | far]] = False
    col = np.zeros((N, 3)); alpha = hit.astype(float)
    idx = np.nonzero(hit)[0]
    if len(idx):
        p = CAM + d[idx] * t[idx, None]; dd = d[idx]
        n = normal(p)
        shell, top, bolt, bolt2, ped, ryz, x = parts(p)
        steel = (ryz < R_IN + 0.02) & (np.abs(x) < XE + 0.3) & (shell <= top)  # bore
        steel |= (np.abs(x) > XE - 0.06) & (shell <= top)  # machined end faces / weld prep
        steel |= (np.minimum(bolt, bolt2) < 0.002)
        rfl = dd - 2 * np.sum(dd * n, -1, keepdims=True) * n
        sh = soft_shadow(p + n * 0.003, KEY); occ = ao(p, n)
        ndl = np.clip(n @ KEY, 0, 1)
        sky = 0.5 + 0.5 * n[:, 1]
        fres = 0.045 + 0.955 * (1 - np.clip(-np.sum(dd * n, -1), 0, 1)) ** 5
        # paint: dark RAV navy, glossy
        alb = np.array([0.011, 0.013, 0.030])
        diff = alb * (np.array([0.30, 0.33, 0.55]) * sky[:, None] * occ[:, None] + 1.7 * (ndl * sh)[:, None])
        e = env(rfl)
        # occlude reflections of the key where shadowed
        e = e * (0.35 + 0.65 * np.maximum(sh, 0.0))[:, None] * (0.25 + 0.75 * occ[:, None])
        paint = diff + fres[:, None] * e * 1.15
        # steel: blurred reflection, metallic
        rng = np.random.default_rng(1)
        acc = np.zeros_like(e)
        for s in range(16):
            jr = nrm(rfl + rng.normal(0, 0.09, rfl.shape))
            acc += env(jr)
        st = acc / 16 * np.array([0.50, 0.52, 0.56]) * (0.08 + 0.92 * occ[:, None] ** 1.6) * (0.45 + 0.55 * sh[:, None])
        # concentric machining sheen on the end faces
        ring = 0.9 + 0.1 * np.sin(ryz * 420)
        st = st * np.where(np.abs(x)[:, None] > XE - 0.06, ring[:, None], 1)
        c = np.where(steel[:, None], st, paint)
        col[idx] = c
    return col.reshape(y1 - y0, w, 3), alpha.reshape(y1 - y0, w)

if __name__ == '__main__':
    w, h = W * SS, H * SS
    step = max(8, h // 48)
    jobs = [(a, min(a + step, h), w, h) for a in range(0, h, step)]
    with Pool(4) as pl:
        res = pl.map(render_rows, jobs)
    col = np.concatenate([r[0] for r in res]); al = np.concatenate([r[1] for r in res])
    # ACES-ish tone map
    a, b, c, d_, e = 2.51, 0.03, 2.43, 0.59, 0.14
    x = col * 1.1
    tm = np.clip((x * (a * x + b)) / (x * (c * x + d_) + e), 0, 1)
    rgb = tm ** (1 / 2.2)
    img = np.dstack([rgb * 255, al * 255]).astype(np.float32)
    # premultiplied downsample
    if SS > 1:
        pm = img.copy(); pm[..., :3] *= al[..., None]
        pm = pm.reshape(H, SS, W, SS, 4).mean((1, 3))
        aa = pm[..., 3:4] / 255
        pm[..., :3] = np.where(aa > 0, pm[..., :3] / np.maximum(aa, 1e-6), 0)
        img = pm
    Image.fromarray(np.clip(img, 0, 255).astype(np.uint8), 'RGBA').save(OUT)
    print('wrote', OUT, img.shape)
