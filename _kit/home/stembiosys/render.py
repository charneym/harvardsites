#!/usr/bin/env python3
"""StemBioSys hero (HOME_BRIEF update 2c: a crafted render of the real product/mechanism). A mesenchymal stem cell
spread on CELLvo(TM) Matrix: the cell-derived, decellularized extracellular matrix left intact as a 3D mesh of fibres
(stembiosys.com /cellvo-matrix-technology, whose own SEM shows that fibrous mesh). Shaded like a coloured scanning
electron micrograph: matrix fibres in a cool silver lit by the logo's blue #0070b9, the cell in the site's teal #36b3b3.
Numpy sphere tracing, saved with ALPHA (the mat dissolves at its rim, DJ). Usage: python3 render.py W H out.png [SS] [procs]"""
import sys, numpy as np
from multiprocessing import Pool
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 520
H = int(sys.argv[2]) if len(sys.argv) > 2 else 440
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = float(sys.argv[4]) if len(sys.argv) > 4 else 1.0
NP = int(sys.argv[5]) if len(sys.argv) > 5 else 4
FW, FH = W, H; W, H = int(W * SS), int(H * SS)
def nrm(v): return v / np.linalg.norm(v, axis=-1, keepdims=True)
rng = np.random.default_rng(1957)
RD = 1.75                                     # radius of the matrix patch
# ---- matrix fibres: wavy, interlaced, in three loose layers ----
NF = 230
TH = rng.uniform(0, np.pi, NF); C = rng.uniform(-1.6, 1.6, NF)
HY = rng.uniform(-0.15, -0.015, NF)
RF = rng.uniform(.0065, .013, NF); RF[rng.random(NF) < .1] *= 1.9     # a few thicker bundles
AA = rng.uniform(.02, .07, NF); KB = rng.uniform(-.12, .12, NF); FQ = rng.uniform(1.2, 3.2, NF); PH = rng.uniform(0, 6.3, NF)
BB = rng.uniform(.01, .03, NF); GQ = rng.uniform(2, 5, NF); PS = rng.uniform(0, 6.3, NF)
CT, ST = np.cos(TH), np.sin(TH)
# ---- the cell: a spread, spindle-shaped MSC, long axis at angle AL ----
AL = 0.42; CA, SA = np.cos(AL), np.sin(AL); CU, CV = 0.05, 0.05
BODY = [  # (u, v, y, ru, rv, ry)
 (0.00, 0.00, 0.07, 0.46, 0.33, 0.17), (0.38, 0.06, 0.04, 0.42, 0.24, 0.10), (-0.40, -0.05, 0.04, 0.42, 0.25, 0.10),
 (0.80, 0.10, 0.015, 0.36, 0.13, 0.05), (-0.82, -0.10, 0.015, 0.38, 0.14, 0.05), (0.05, 0.30, 0.02, 0.22, 0.20, 0.05),
 (-0.10, -0.32, 0.02, 0.24, 0.18, 0.05)]
PROC = [  # filopodia / long processes: (u0,v0,u1,v1,r0,r1)
 (1.05, 0.15, 1.62, 0.30, .040, .008), (-1.10, -0.15, -1.68, -0.36, .042, .008), (1.0, 0.05, 1.45, -0.22, .022, .006),
 (-1.0, -0.06, -1.42, 0.20, .022, .006), (0.12, 0.42, 0.30, 0.95, .022, .006), (-0.18, -0.44, -0.40, -0.98, .024, .006),
 (0.45, 0.25, 0.80, 0.62, .016, .005), (-0.50, -0.26, -0.95, -0.55, .016, .005)]
def smin(a, b, k):
    h = np.clip(.5 + .5 * (b - a) / k, 0, 1); return b * (1 - h) + a * h - k * h * (1 - h)
def fib(p):
    x, y, z = p[:, 0:1], p[:, 1:2], p[:, 2:3]
    s = x * CT + z * ST; w = -x * ST + z * CT - C - AA * np.sin(FQ * s + PH) - KB * s * s
    dy = y - HY - BB * np.sin(GQ * s + PS)
    rad = np.sqrt(x * x + z * z)
    r = RF * np.clip((RD + .05 - rad) / .45, .15, 1)
    d = np.sqrt(w * w + dy * dy) * .75 - r
    return d.min(1)
def cell(p):
    x, y, z = p[:, 0] - CU, p[:, 1], p[:, 2] - CV
    u = x * CA + z * SA; v = -x * SA + z * CA
    d = np.full(len(p), 9.0)
    for (bu, bv, by, ru, rv, ry) in BODY:
        q = np.stack([(u - bu) / ru, (v - bv) / rv, (y - by) / ry], 1)
        e = (np.linalg.norm(q, axis=1) - 1) * min(ru, rv, ry)
        d = smin(d, e, .09)
    for (u0, v0, u1, v1, r0, r1) in PROC:
        bu, bv = u1 - u0, v1 - v0; L2 = bu * bu + bv * bv
        t = np.clip(((u - u0) * bu + (v - v0) * bv) / L2, 0, 1)
        yy = 0.012 * (1 - t)
        dd = np.sqrt((u - u0 - bu * t) ** 2 + (v - v0 - bv * t) ** 2 + (y - yy) ** 2) - (r0 + (r1 - r0) * t)
        d = smin(d, dd, .06)
    # membrane: fine ruffles and a few surface blebs
    d += .0035 * np.sin(19 * x + 7 * z + 1.3) * np.sin(23 * z - 11 * x) + .0025 * np.sin(41 * x - 29 * z + 3 * np.sin(9 * z))
    return d
def sdf(p, want=False):
    a = fib(p); b = cell(p)
    out = smin(a, b, .035)
    if want: return out, b < a
    return out
CAM = np.array([0.0, 2.2, -3.55]); TGT = np.array([0.0, -0.05, 0.05]); FOV = 37.0
fw = nrm(TGT - CAM); rt = nrm(np.cross(np.array([0, 1.0, 0]), fw)); up = np.cross(fw, rt)
TN = np.tan(np.radians(FOV / 2))
Y0, Y1 = -0.2, 0.33
def march(O, Dd, t, tmax, steps=150, eps=5e-4):
    hit = np.zeros(len(Dd), bool); act = np.where(t < tmax)[0]
    for s in range(steps):
        if len(act) == 0: break
        p = O + Dd[act] * t[act, None]
        d = sdf(p); h = d < eps; hit[act[h]] = True
        t[act] += np.maximum(d, eps) * .8
        act = act[(~h) & (t[act] < tmax[act])]
    return t, hit
def render_rows(rows):
    r0, r1 = rows
    ys, xs = np.mgrid[r0:r1, 0:W]
    u = ((xs + .5) / W * 2 - 1) * TN * (W / H); v = (1 - (ys + .5) / H * 2) * TN
    D = nrm(u[..., None] * rt + v[..., None] * up + fw).reshape(-1, 3); n = len(D)
    t0 = (Y1 - CAM[1]) / D[:, 1]; t1 = (Y0 - CAM[1]) / D[:, 1]
    T, hit = march(CAM, D, t0.copy(), t1)
    P = CAM + D * T[:, None]; hit &= np.hypot(P[:, 0], P[:, 2]) < RD + .1
    img = np.zeros((n, 4)); hi = np.where(hit)[0]
    if len(hi) == 0: return img.reshape(r1 - r0, W, 4)
    P = P[hi]; e = 5e-4
    Nn = nrm(np.stack([sdf(P + [e, 0, 0]) - sdf(P - [e, 0, 0]), sdf(P + [0, e, 0]) - sdf(P - [0, e, 0]), sdf(P + [0, 0, e]) - sdf(P - [0, 0, e])], 1) + 1e-9)
    _, isc = sdf(P, want=True)
    ao = np.zeros(len(P))
    for i, hg in enumerate([.008, .02, .04, .07, .11]):
        ao += (hg - np.minimum(sdf(P + Nn * hg), hg)) / hg * (.75 ** i)
    ao = np.clip(1 - ao / 2.4, 0, 1)
    Lk = nrm(np.array([-0.55, 0.9, -0.35]))
    sh = np.ones(len(P)); ts = np.full(len(P), .01); act = np.arange(len(P))
    for s in range(36):
        if len(act) == 0: break
        d = sdf(P[act] + Nn[act] * 1.5e-3 + Lk * ts[act, None])
        sh[act] = np.minimum(sh[act], np.clip(10 * d / ts[act], 0, 1)); ts[act] += np.clip(d, .004, .08)
        act = act[(sh[act] > .03) & (ts[act] < 1.2)]
    sh = sh * sh * (3 - 2 * sh)
    V = -D[hi]; ndv = np.clip((Nn * V).sum(1), 0, 1)
    edge = (1 - ndv) ** 2.2                     # SEM edge brightening
    lam = np.clip((Nn @ Lk + .2) / 1.2, 0, 1) * sh
    Hh = nrm(Lk + V); spec = np.clip((Nn * Hh).sum(1), 0, 1) ** 50 * .3 * sh
    mat = np.array([0.66, 0.76, 0.90]); cel = np.array([0.40, 0.80, 0.80]); blue = np.array([0.0, 0.44, 0.73])
    alb = np.where(isc[:, None], cel[None, :], mat[None, :])
    # deeper layers of the mesh sit darker, like a real SEM depth
    dep = np.clip((P[:, 1] + .17) / .2, 0, 1); dep = np.where(isc, 1, .45 + .55 * dep)
    col = alb * (.12 + .78 * lam + .1 * ao)[:, None] + (edge * .75)[:, None] * (.55 * alb + .45 * np.array([.75, .88, 1.0]))
    col += (.25 * (1 - lam) * ao)[:, None] * blue[None, :] * (~isc)[:, None]
    col += spec[:, None]
    col *= (ao * (.55 + .45 * dep))[:, None]
    col = col / (1 + col * .25) * 1.15
    col = np.clip(col + (np.random.default_rng(r0).random((len(hi), 1)) - .5) * .02, 0, 1) ** (1 / 1.05)
    img[hi, :3] = col
    rad = np.hypot(P[:, 0], P[:, 2]); a = np.clip((RD - rad) / .75, 0, 1)
    img[hi, 3] = a * a * (3 - 2 * a)
    return img.reshape(r1 - r0, W, 4)
if __name__ == '__main__':
    band_ = max(4, H // (NP * 10)); jobs = [(r, min(H, r + band_)) for r in range(0, H, band_)]
    with Pool(NP) as pool: parts = pool.map(render_rows, jobs)
    im = Image.fromarray((np.clip(np.concatenate(parts, 0), 0, 1) * 255).astype(np.uint8), 'RGBA')
    if SS != 1: im = im.resize((FW, FH), Image.LANCZOS)
    im.save(OUT); print('wrote', OUT, im.size)
