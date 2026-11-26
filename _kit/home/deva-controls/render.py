#!/usr/bin/env python3
"""Offline SDF ray-march render for the Deva Electronic Controls hero: a moving-bridge CMM (granite table, bridge, carriage,
Z ram, touch probe with a ruby stylus touching a machined part), the machine class Deva's controllers drive. RGBA png, real alpha."""

import numpy as np, sys
from multiprocessing import Pool
from PIL import Image

W = int(sys.argv[1]) if len(sys.argv) > 1 else 420
H = int(W * 0.86)
SS = int(sys.argv[2]) if len(sys.argv) > 2 else 1
OUT = sys.argv[3] if len(sys.argv) > 3 else 'cmm.png'

def nrm(v): return v / np.linalg.norm(v, axis=-1, keepdims=True)

def boxd(q, b):
    d = np.abs(q) - b
    return np.linalg.norm(np.maximum(d, 0), axis=-1) + np.minimum(np.max(d, -1), 0)
def cylY(q, r, y0, y1):
    d = np.sqrt(q[:, 0] ** 2 + q[:, 2] ** 2) - r
    h = np.abs(q[:, 1] - (y0 + y1) / 2) - (y1 - y0) / 2
    return np.sqrt(np.maximum(d, 0) ** 2 + np.maximum(h, 0) ** 2) + np.minimum(np.maximum(d, h), 0)
def cylZ(q, r, z0, z1):
    d = np.sqrt(q[:, 0] ** 2 + q[:, 1] ** 2) - r
    h = np.abs(q[:, 2] - (z0 + z1) / 2) - (z1 - z0) / 2
    return np.sqrt(np.maximum(d, 0) ** 2 + np.maximum(h, 0) ** 2) + np.minimum(np.maximum(d, h), 0)
def B(p, c, h, r=0.0): return boxd(p - np.array(c), np.array(h) - r) - r
# A moving-bridge coordinate measuring machine, the class of machine Deva's controllers drive and retrofit:
# granite table, bridge on two legs, carriage, Z ram, touch-trigger probe with a ruby-tipped stylus touching a machined part.
PX, PZ = 0.24, 0.36            # probe x / z
PTOP = 0.40                    # part top
BR = 0.042                     # ruby ball radius
def parts(p):
    P = {}
    P['granite'] = B(p, (0, -0.24, 0), (2.25, 0.24, 1.45), 0.02)
    # bridge: two tapered legs on bearing pads, a box beam across the top
    legs = []
    for sx in (-1, 1):
        q = p - np.array([sx * 1.86, 0, 0.0])
        taper = 0.11 + 0.05 * np.clip(1 - q[:, 1] / 2.4, 0, 1)
        dd = np.stack([np.abs(q[:, 0]) - taper, np.abs(q[:, 1] - 1.32) - 1.18, np.abs(q[:, 2]) - 0.2], -1)
        legs.append(np.linalg.norm(np.maximum(dd, 0), axis=-1) + np.minimum(np.max(dd, -1), 0) - 0.012)
        legs.append(B(p, (sx * 1.86, 0.1, 0), (0.2, 0.1, 0.27), 0.015))
    P['bridge'] = np.minimum(np.minimum(legs[0], legs[2]), B(p, (0, 2.62, 0), (2.04, 0.17, 0.21), 0.015))
    P['pads'] = np.minimum(legs[1], legs[3])
    # carriage riding on the front of the beam
    P['carr'] = B(p, (PX, 2.6, 0.2), (0.27, 0.27, 0.19), 0.02)
    # Z ram (square spindle) down from the carriage
    P['ram'] = B(p, (PX, 2.06, PZ), (0.085, 0.83, 0.085), 0.008)
    # probe head: a short dark body, a slim module, then the stylus and ruby ball
    yb = PTOP + BR
    q = p - np.array([PX, 0, PZ])
    head = np.minimum(cylY(q, 0.075, yb + 0.47, yb + 0.79) - 0.006, cylY(q, 0.05, yb + 0.33, yb + 0.48) - 0.004)
    P['probe'] = head
    P['stylus'] = cylY(q, 0.011, yb, yb + 0.34)
    P['ruby'] = np.linalg.norm(q - np.array([0, yb, 0]), axis=-1) - BR
    # machined aluminium part: a block with a stepped shoulder and a through bore
    blk = B(p, (0.12, PTOP / 2, 0.34), (0.62, PTOP / 2, 0.36), 0.01)
    step = B(p, (0.62, PTOP, 0.34), (0.22, 0.12, 0.42), 0.0)
    bore = cylY(p - np.array([-0.18, 0, 0.34]), 0.17, -1, 1)
    P['part'] = np.maximum(np.maximum(blk, -step), -bore)
    body = np.min(np.stack(list(P.values()), -1), -1)
    return body, P

def sdf(p): return parts(p)[0]

def normal(p):
    e = 0.0009
    ex = np.array([e, 0, 0]); ey = np.array([0, e, 0]); ez = np.array([0, 0, e])
    return nrm(np.stack([sdf(p + ex) - sdf(p - ex), sdf(p + ey) - sdf(p - ey), sdf(p + ez) - sdf(p - ez)], -1))

KEY = nrm(np.array([-0.45, 0.85, 0.5]))
RIM = nrm(np.array([0.9, 0.35, -0.55]))

def env(d):
    y = d[:, 1:2]
    t = np.clip(y * .5 + .5, 0, 1)
    base = np.array([0.012, 0.016, 0.024]) * (1 - t) + np.array([0.07, 0.08, 0.095]) * t
    k = np.clip((d @ KEY - 0.72) / 0.2, 0, 1)[:, None]; k = k * k * (3 - 2 * k)
    r = np.clip((d @ RIM - 0.84) / 0.12, 0, 1)[:, None]; r = r * r * (3 - 2 * r)
    az = np.arctan2(d[:, 2:3], d[:, 0:1])
    s1 = np.exp(-((az - 1.95) / 0.1) ** 6) * np.clip((y + 0.2) / 0.4, 0, 1) * 2.2
    s2 = np.exp(-((az - 0.35) / 0.07) ** 6) * np.clip((y + 0.1) / 0.4, 0, 1) * 1.2
    blue = np.clip((d @ nrm(np.array([0.7, -0.3, 0.6])) - 0.55) / 0.45, 0, 1)[:, None] * np.array([0.01, 0.03, 0.06])
    return base + k * np.array([3.2, 3.2, 3.25]) + r * np.array([1.6, 1.7, 1.85]) + (s1 + s2) * np.array([0.95, 0.96, 1.0]) + blue

def soft_shadow(p, l):
    res = np.ones(len(p)); t = np.full(len(p), 0.02)
    for _ in range(40):
        h = sdf(p + l * t[:, None]); res = np.minimum(res, 10 * h / t); t += np.clip(h, 0.01, 0.3)
    return np.clip(res, 0, 1)

def ao(p, n):
    occ = np.zeros(len(p)); s = 1.0
    for i in range(1, 6):
        hh = 0.02 + 0.05 * i; occ += (hh - sdf(p + n * hh)) * s; s *= 0.7
    return np.clip(1 - 1.4 * occ, 0, 1)

CAM = np.array([6.2, 3.6, 8.9]); TGT = np.array([0.0, 1.12, 0.1]); FOV = 0.165
fw = nrm(TGT - CAM); rt = nrm(np.cross(fw, [0, 1, 0])); up = np.cross(rt, fw)

def blur_env(rfl, sig, n, seed):
    rng = np.random.default_rng(seed); acc = np.zeros_like(rfl)
    for _ in range(n): acc += env(nrm(rfl + rng.normal(0, sig, rfl.shape)))
    return acc / n

def render_rows(args):
    y0, y1, w, h = args
    js, is_ = np.mgrid[y0:y1, 0:w]
    u = (is_ + 0.5) / w * 2 - 1; v = -((js + 0.5) / h * 2 - 1) * h / w
    d = nrm(fw + (u[..., None] * rt + v[..., None] * up) * FOV * 1.75).reshape(-1, 3); N = len(d)
    t = np.full(N, 6.0); hit = np.zeros(N, bool); alive = np.ones(N, bool)
    for _ in range(220):
        idx = np.nonzero(alive)[0]
        if len(idx) == 0: break
        p = CAM + d[idx] * t[idx, None]; dist = sdf(p); t[idx] += dist * 0.8
        h_ = dist < 0.0004; hit[idx[h_]] = True; far = t[idx] > 26; alive[idx[h_ | far]] = False
    col = np.zeros((N, 3)); alpha = hit.astype(float)
    idx = np.nonzero(hit)[0]
    if len(idx):
        p = CAM + d[idx] * t[idx, None]; dd = d[idx]
        n = normal(p)
        _, P = parts(p)
        keys = list(P.keys()); D = np.stack([P[k] for k in keys], -1); mid = np.argmin(D, -1)
        M = {k: mid == i for i, k in enumerate(keys)}
        rfl = dd - 2 * np.sum(dd * n, -1, keepdims=True) * n
        sh = soft_shadow(p + n * 0.003, KEY); occ = ao(p, n)
        ndl = np.clip(n @ KEY, 0, 1); sky = 0.5 + 0.5 * n[:, 1]
        cosv = np.clip(-np.sum(dd * n, -1), 0, 1); fr = (1 - cosv) ** 5
        diff = (0.16 + 0.84 * ndl * sh)[:, None]
        steel = blur_env(rfl, 0.05, 10, 1) * np.array([0.8, 0.82, 0.85]) + np.array([0.06, 0.06, 0.065]) * diff
        brushed = blur_env(rfl, 0.16, 24, 2) * np.array([0.6, 0.62, 0.65]) + np.array([0.07, 0.072, 0.076]) * diff
        # bridge: light satin grey; carriage the same; legs and beam read as anodised aluminium
        paint = np.array([0.42, 0.44, 0.46]) * diff + blur_env(rfl, 0.2, 24, 3) * np.array([0.5, 0.52, 0.55]) * (0.08 + 0.6 * fr)[:, None]
        dark = np.array([0.025, 0.028, 0.034]) * diff + blur_env(rfl, 0.12, 18, 5) * np.array([0.3, 0.31, 0.33]) * (0.1 + 0.7 * fr)[:, None]
        # granite: near-black with a fine speckle, polished top
        g = np.floor(p * 160).astype(np.int64)
        hsh = ((g[:, 0] * 73856093) ^ (g[:, 1] * 19349663) ^ (g[:, 2] * 83492791)) % 1000 / 1000.0
        spk = (0.7 + 0.6 * (hsh > 0.82) + 0.25 * (hsh < 0.25))[:, None]
        gran = np.array([0.03, 0.031, 0.034]) * spk * diff + blur_env(rfl, 0.06, 10, 7) * (0.04 + 0.5 * fr)[:, None]
        alu = blur_env(rfl, 0.1, 48, 2) * np.array([0.62, 0.64, 0.67]) + np.array([0.16, 0.165, 0.17]) * diff
        ruby = np.array([0.32, 0.015, 0.02]) * diff + blur_env(rfl, 0.02, 6, 8) * (0.06 + 0.8 * fr)[:, None]
        mm = paint
        mm = np.where(M['granite'][:, None], gran, mm)
        mm = np.where(M['pads'][:, None] | M['probe'][:, None], dark, mm)
        mm = np.where(M['ram'][:, None] | M['part'][:, None], alu, mm)
        mm = np.where(M['stylus'][:, None], steel, mm)
        mm = np.where(M['ruby'][:, None], ruby, mm)
        lit = mm * (0.3 + 0.7 * occ[:, None] ** 1.2) * (0.55 + 0.45 * sh[:, None])
        lit += np.array([0.008, 0.01, 0.014]) * sky[:, None]
        col[idx] = lit
    return col.reshape(y1 - y0, w, 3), alpha.reshape(y1 - y0, w)

if __name__ == '__main__':
    w, h = W * SS, H * SS
    step = max(4, h // 96)
    jobs = [(a, min(a + step, h), w, h) for a in range(0, h, step)]
    with Pool(4) as pl: res = pl.map(render_rows, jobs)
    col = np.concatenate([r[0] for r in res]); al = np.concatenate([r[1] for r in res])
    a, b, c, d_, e = 2.51, 0.03, 2.43, 0.59, 0.14
    x = col * 1.7
    rgb = np.clip((x * (a * x + b)) / (x * (c * x + d_) + e), 0, 1) ** (1 / 2.2)
    img = np.dstack([rgb * 255, al * 255]).astype(np.float32)
    if SS > 1:
        pm = img.copy(); pm[..., :3] *= al[..., None]
        pm = pm.reshape(H, SS, W, SS, 4).mean((1, 3)); aa = pm[..., 3:4] / 255
        pm[..., :3] = np.where(aa > 0, pm[..., :3] / np.maximum(aa, 1e-6), 0); img = pm
    Image.fromarray(np.clip(img, 0, 255).astype(np.uint8), 'RGBA').save(OUT)
    print('wrote', OUT, img.shape)
