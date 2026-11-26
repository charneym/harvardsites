#!/usr/bin/env python3
"""Offline SDF ray-march render for the Gillard Cutting hero: the cut itself. A Servo-Torq style fly knife (hub + blade)
sweeping across the face of a guide bush, the extruded tube feeding through it, three cut pieces carried away. Their own
machine photos are 350 px images, too small for the hero. Output: RGBA png with real alpha."""

import numpy as np, sys
from multiprocessing import Pool
from PIL import Image

W = int(sys.argv[1]) if len(sys.argv) > 1 else 420
H = int(W * 0.72)
SS = int(sys.argv[2]) if len(sys.argv) > 2 else 1
OUT = sys.argv[3] if len(sys.argv) > 3 else 'fly.png'

def nrm(v): return v / np.linalg.norm(v, axis=-1, keepdims=True)

# axis of the extrusion line = world x. Guide bush + bush plate, the extruded tube feeding through it, the fly knife
# (hub + blade) sweeping in the plane just in front of the bush face, and three cut pieces carried away along the line.
RO, RI = 0.34, 0.235          # tube outer / inner radius
XF = -1.2                     # bush face
def boxd(q, b):
    d = np.abs(q) - b
    return np.linalg.norm(np.maximum(d, 0), axis=-1) + np.minimum(np.max(d, -1), 0)
def cylX(q, r, x0, x1):
    d = np.sqrt(q[:, 1] ** 2 + q[:, 2] ** 2) - r
    h = np.abs(q[:, 0] - (x0 + x1) / 2) - (x1 - x0) / 2
    return np.sqrt(np.maximum(d, 0) ** 2 + np.maximum(h, 0) ** 2) + np.minimum(np.maximum(d, h), 0)
def tubeX(q, x0, x1, ro=RO, ri=RI):
    rr = np.sqrt(q[:, 1] ** 2 + q[:, 2] ** 2)
    d = np.abs(rr - (ro + ri) / 2) - (ro - ri) / 2
    h = np.abs(q[:, 0] - (x0 + x1) / 2) - (x1 - x0) / 2
    return np.sqrt(np.maximum(d, 0) ** 2 + np.maximum(h, 0) ** 2) + np.minimum(np.maximum(d, h), 0) - 0.008
PIECES = [(-0.5, 0.4), (0.95, 1.85), (2.4, 3.3)]
HUB = np.array([-1.02, -0.9, 0.0])
BA = np.deg2rad(116)           # blade angle in the y-z plane, measured from +z: pointing down and towards the viewer, just past the tube
BD = np.array([0.0, np.sin(BA), np.cos(BA)]); BN = np.array([0.0, np.cos(BA), -np.sin(BA)])

def parts(p):
    P = {}
    # bush plate: a square plate with chamfered corners, face at XF
    P['plate'] = cylX(p, 1.5, XF - 0.2, XF) - 0.03
    # guide bush: a boss behind the plate and a bored insert flush with the face
    boss = cylX(p, 0.78, XF - 0.95, XF - 0.12) - 0.02
    ins = cylX(p, 0.52, XF - 0.12, XF + 0.035) - 0.012
    bore = cylX(p, RO + 0.025, XF - 3, XF + 1)
    P['plate'] = np.maximum(P['plate'], -bore)
    P['boss'] = np.maximum(boss, -bore)
    P['bush'] = np.maximum(ins, -bore)
    # the extrusion feeding through, stopping just proud of the face (the next cut)
    P['tube'] = tubeX(p, -9.0, XF + 0.06)
    # cut pieces
    P['cut'] = np.min(np.stack([tubeX(p, a, b) for a, b in PIECES], -1), -1)
    # fly knife: hub (axis along x) and the blade arm
    q = p - HUB
    P['hub'] = np.minimum(cylX(q, 0.44, -0.16, 0.06) - 0.02, cylX(q, 0.2, 0.06, 0.2) - 0.01)
    lx = q[:, 0] + 0.075; ld = q @ BD; ln = q @ BN
    blade = np.stack([lx, ld - 1.2, ln], -1)
    bd = boxd(blade, np.array([0.022, 1.3, 0.17]))
    # a bevelled cutting edge on the leading side
    P['blade'] = bd - 0.004
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

CAM = np.array([7.4, 2.6, 6.0]); TGT = np.array([0.2, 0.1, 0.0]); FOV = 0.2
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
    t = np.full(N, 3.0); hit = np.zeros(N, bool); alive = np.ones(N, bool)
    for _ in range(220):
        idx = np.nonzero(alive)[0]
        if len(idx) == 0: break
        p = CAM + d[idx] * t[idx, None]; dist = sdf(p); t[idx] += dist * 0.8
        h_ = dist < 0.0004; hit[idx[h_]] = True; far = t[idx] > 22; alive[idx[h_ | far]] = False
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
        # bush plate: machine-grey painted panel (their machines are light grey)
        paint = np.array([0.16, 0.165, 0.17]) * diff + blur_env(rfl, 0.2, 28, 3) * np.array([0.45, 0.46, 0.48]) * (0.1 + 0.6 * fr)[:, None]
        dark = np.array([0.03, 0.032, 0.036]) * diff + blur_env(rfl, 0.12, 20, 5) * np.array([0.3, 0.31, 0.33]) * (0.12 + 0.7 * fr)[:, None]
        # extruded tube: glossy plastic in the logo green; the bore is darker
        rr = np.sqrt(p[:, 1] ** 2 + p[:, 2] ** 2); inner = (rr < (RO + RI) / 2 - 0.01)[:, None]
        gbase = np.array([0.012, 0.25, 0.075])
        green = gbase * diff * np.where(inner, 0.35, 1.0) + blur_env(rfl, 0.03, 6, 4) * (0.03 + 0.55 * fr)[:, None]
        # a fresh cut face is satin, not glossy
        face = np.abs(np.abs(n[:, 0]) - 1) < 0.05
        greenf = gbase * 1.15 * diff + blur_env(rfl, 0.25, 6, 6) * 0.04
        green = np.where(face[:, None] & ~inner, greenf, green)
        mm = paint
        mm = np.where(M['boss'][:, None], dark, mm)
        mm = np.where(M['bush'][:, None], brushed, mm)
        mm = np.where(M['tube'][:, None] | M['cut'][:, None], green, mm)
        mm = np.where(M['hub'][:, None], dark, mm)
        mm = np.where(M['blade'][:, None], steel, mm)
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
