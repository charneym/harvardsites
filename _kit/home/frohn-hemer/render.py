#!/usr/bin/env python3
"""Offline SDF ray-march render of M. Frohn's own product type (frohn-hemer.de > Werkzeuge: "HM-Werkzeuge für die
Kaltumformung", photo "Matrizen, Kuppmatrizen und Sechskantstempel"): a cold-forming die (Matrize) with a turned steel
casing and a shrunk-in tungsten-carbide insert with a fine bore and an entry cone, beside a hexagon punch
(Sechskantstempel) standing upright. Output: RGBA png with real alpha."""
import numpy as np, sys
from multiprocessing import Pool
from PIL import Image

W = int(sys.argv[1]) if len(sys.argv) > 1 else 420
H = int(W * 0.86)
SS = int(sys.argv[2]) if len(sys.argv) > 2 else 1
OUT = sys.argv[3] if len(sys.argv) > 3 else 'die.png'

def nrm(v): return v / np.linalg.norm(v, axis=-1, keepdims=True)
def length2(a, b): return np.sqrt(a * a + b * b)
def cyl(r_ax, ax, r, h, rr=0.0):
    dx = r_ax - r + rr; dy = np.abs(ax) - h + rr
    return np.sqrt(np.maximum(dx, 0) ** 2 + np.maximum(dy, 0) ** 2) + np.minimum(np.maximum(dx, dy), 0) - rr

# die: casing radius 1.0, height 1.0 (y from -0.5 to 0.5), centred at origin
RC, HC = 1.0, 0.5
RI = 0.50          # carbide insert radius
RB = 0.075         # bore
# punch: at (PX, PZ), shank radius 0.30 from y=-0.5 up to 1.25, collar, hexagon tip
PX, PZ = 1.55, -0.95

def parts(p):
    x, y, z = p[:, 0], p[:, 1], p[:, 2]
    r = length2(x, z)
    casing = cyl(r, y, RC, HC, 0.035)
    # a shallow groove turned around the casing
    groove = np.sqrt((r - RC) ** 2 + (y + 0.18) ** 2) - 0.022
    casing = np.maximum(casing, -groove)
    # top face: the carbide insert sits proud by 0.006 in a fine ring; cone into the bore
    insert = cyl(r, y - 0.0, RI, HC + 0.006, 0.01)
    die = np.minimum(casing, insert)
    # the fine shrink-fit seam between carbide insert and steel casing
    seam = np.sqrt((r - RI - 0.012) ** 2 + (y - HC) ** 2) - 0.012
    die = np.maximum(die, -seam)
    cone = (r - RB) - (y - (HC - 0.16)) * 0.62   # entry cone (Konik), opening upward
    bore = r - RB
    cut = np.minimum(np.maximum(cone, HC - 0.17 - y), bore)
    die = np.maximum(die, -np.minimum(cut, bore))
    # punch
    px, pz = x - PX, z - PZ
    pr = length2(px, pz)
    yb = y - 0.30
    shank = cyl(pr, yb, 0.36, 0.80, 0.03)                # y -0.5 .. 1.1
    collar = cyl(pr, y - 1.13, 0.30, 0.05, 0.02)
    # hexagon tip
    a = np.arctan2(pz, px); sec = np.pi / 3
    a2 = np.mod(a + sec / 2, sec) - sec / 2
    hx = pr * np.cos(a2) - 0.21
    hy = np.abs(y - 1.36) - 0.20
    hexa = np.sqrt(np.maximum(hx, 0) ** 2 + np.maximum(hy, 0) ** 2) + np.minimum(np.maximum(hx, hy), 0) - 0.006
    punch = np.minimum(np.minimum(shank, collar), hexa)
    body = np.minimum(die, punch)
    return body, die, punch, insert, casing, r, y

def sdf(p): return parts(p)[0]

def normal(p):
    e = 0.0012
    ex = np.array([e, 0, 0]); ey = np.array([0, e, 0]); ez = np.array([0, 0, e])
    return nrm(np.stack([sdf(p + ex) - sdf(p - ex), sdf(p + ey) - sdf(p - ey), sdf(p + ez) - sdf(p - ez)], -1))

KEY = nrm(np.array([-0.45, 0.85, 0.5]))
RIM = nrm(np.array([0.9, 0.35, -0.45]))
FILL = nrm(np.array([0.8, 0.1, 0.6]))

def env(d):
    y = d[:, 1:2]
    t = np.clip(y * .5 + .5, 0, 1)
    base = np.array([0.018, 0.018, 0.02]) * (1 - t) + np.array([0.09, 0.09, 0.095]) * t
    k = np.clip((d @ KEY - 0.72) / 0.2, 0, 1)[:, None]; k = k * k * (3 - 2 * k)
    r = np.clip((d @ RIM - 0.84) / 0.12, 0, 1)[:, None]; r = r * r * (3 - 2 * r)
    f = np.clip((d @ FILL - 0.70) / 0.25, 0, 1)[:, None]
    az = np.arctan2(d[:, 2:3], d[:, 0:1])
    s1 = np.exp(-((az - 1.95) / 0.09) ** 6) * np.clip((y + 0.25) / 0.4, 0, 1) * 2.4    # tall softbox, front-left
    s2 = np.exp(-((az - 0.35) / 0.07) ** 6) * np.clip((y + 0.1) / 0.4, 0, 1) * 1.3     # strip, right
    hor = np.exp(-((y - 0.05) / 0.05) ** 2) * 0.35
    # a faint warm red bounce from below-left (brand red on the bench)
    red = np.clip((d @ nrm(np.array([-0.6, -0.5, 0.6])) - 0.6) / 0.4, 0, 1)[:, None] * np.array([0.07, 0.008, 0.01])
    return (base + k * np.array([3.3, 3.25, 3.2]) + r * np.array([1.7, 1.7, 1.75])
            + f * f * np.array([0.4, 0.4, 0.42]) + (s1 + s2 + hor) * np.array([0.95, 0.95, 0.97]) + red)

def soft_shadow(p, l):
    res = np.ones(len(p)); t = np.full(len(p), 0.02)
    for _ in range(40):
        h = sdf(p + l * t[:, None]); res = np.minimum(res, 10 * h / t); t += np.clip(h, 0.01, 0.25)
    return np.clip(res, 0, 1)

def ao(p, n):
    occ = np.zeros(len(p)); s = 1.0
    for i in range(1, 6):
        hh = 0.02 + 0.06 * i; occ += (hh - sdf(p + n * hh)) * s; s *= 0.72
    return np.clip(1 - 1.5 * occ, 0, 1)

CAM = np.array([2.2, 3.3, 5.6]); TGT = np.array([0.62, 0.30, -0.35]); FOV = 0.205
fw = nrm(TGT - CAM); rt = nrm(np.cross(fw, [0, 1, 0])); up = np.cross(rt, fw)

def render_rows(args):
    y0, y1, w, h = args
    js, is_ = np.mgrid[y0:y1, 0:w]
    u = (is_ + 0.5) / w * 2 - 1; v = -((js + 0.5) / h * 2 - 1) * h / w
    d = nrm(fw + (u[..., None] * rt + v[..., None] * up) * FOV * 1.75).reshape(-1, 3); N = len(d)
    t = np.full(N, 3.0); hit = np.zeros(N, bool); alive = np.ones(N, bool)
    for _ in range(200):
        idx = np.nonzero(alive)[0]
        if len(idx) == 0: break
        p = CAM + d[idx] * t[idx, None]; dist = sdf(p); t[idx] += dist * 0.8
        h_ = dist < 0.0004; hit[idx[h_]] = True; far = t[idx] > 14; alive[idx[h_ | far]] = False
    col = np.zeros((N, 3)); alpha = hit.astype(float)
    idx = np.nonzero(hit)[0]
    if len(idx):
        p = CAM + d[idx] * t[idx, None]; dd = d[idx]
        n = normal(p)
        body, die, punch, insert, casing, r, y = parts(p)
        carb = (r < RI + 0.004) & (die < punch + 1e-4) & (y > HC - 0.2)   # carbide insert face and bore
        hexs = (punch < die) & (p[:, 1] > 1.15)                           # ground hexagon tip
        rfl = dd - 2 * np.sum(dd * n, -1, keepdims=True) * n
        sh = soft_shadow(p + n * 0.003, KEY); occ = ao(p, n)
        ndl = np.clip(n @ KEY, 0, 1); sky = 0.5 + 0.5 * n[:, 1]
        fres = 0.55 + 0.45 * (1 - np.clip(-np.sum(dd * n, -1), 0, 1)) ** 5
        rng = np.random.default_rng(5)
        # turned steel: blurred, with fine circumferential turning lines
        acc = np.zeros_like(rfl)
        for s in range(18): acc += env(nrm(rfl + rng.normal(0, 0.16, rfl.shape)))
        turn = 0.95 + 0.05 * np.sin(p[:, 1] * 160 + np.sin(p[:, 0] * 3) * 2)
        steel = acc / 18 * np.array([0.93, 0.94, 0.97]) * turn[:, None]
        # polished carbide: sharper, darker, slightly cooler
        acc2 = np.zeros_like(rfl)
        for s in range(10): acc2 += env(nrm(rfl + rng.normal(0, 0.035, rfl.shape)))
        carbide = acc2 / 10 * np.array([0.42, 0.44, 0.48])
        # ground hex flats: medium blur
        acc3 = np.zeros_like(rfl)
        for s in range(10): acc3 += env(nrm(rfl + rng.normal(0, 0.08, rfl.shape)))
        ground = acc3 / 10 * np.array([0.88, 0.9, 0.94])
        m = np.where(carb[:, None], carbide, np.where(hexs[:, None], ground, steel))
        lit = m * fres[:, None] * (0.25 + 0.75 * occ[:, None] ** 1.3) * (0.4 + 0.6 * sh[:, None])
        lit += np.array([0.05, 0.05, 0.055]) * (ndl * sh)[:, None] + np.array([0.012, 0.012, 0.014]) * sky[:, None]
        col[idx] = lit
    return col.reshape(y1 - y0, w, 3), alpha.reshape(y1 - y0, w)

if __name__ == '__main__':
    w, h = W * SS, H * SS
    step = max(8, h // 64)
    jobs = [(a, min(a + step, h), w, h) for a in range(0, h, step)]
    with Pool(8) as pl: res = pl.map(render_rows, jobs)
    col = np.concatenate([r[0] for r in res]); al = np.concatenate([r[1] for r in res])
    a, b, c, d_, e = 2.51, 0.03, 2.43, 0.59, 0.14
    x = col * 1.15
    rgb = np.clip((x * (a * x + b)) / (x * (c * x + d_) + e), 0, 1) ** (1 / 2.2)
    img = np.dstack([rgb * 255, al * 255]).astype(np.float32)
    if SS > 1:
        pm = img.copy(); pm[..., :3] *= al[..., None]
        pm = pm.reshape(H, SS, W, SS, 4).mean((1, 3)); aa = pm[..., 3:4] / 255
        pm[..., :3] = np.where(aa > 0, pm[..., :3] / np.maximum(aa, 1e-6), 0); img = pm
    Image.fromarray(np.clip(img, 0, 255).astype(np.uint8), 'RGBA').save(OUT)
    print('wrote', OUT, img.shape)
