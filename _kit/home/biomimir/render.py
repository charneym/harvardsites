#!/usr/bin/env python3
"""BioMimir hero (HOME_BRIEF update 2c: a crafted render of the real product in use). A block of human skin in
cross-section (epidermis, dermis, lobulated fat) with a deep cavity wound in its top surface, filled flush by a clear,
faintly blue, glossy gel: MatriFlex, BioMimir's bioresorbable liquid-to-solid skin substitute / wound filler
(biomimir.ca/home, /news/biomimir-medtech-innovator-2025-accelerator-cohort). The wound bed is seen through the gel by
refraction. Lit warm from the upper left with a periwinkle rim from the logo-site accent #5b7cc4. Numpy sphere tracing,
saved with ALPHA (no ground of its own, DJ). Usage: python3 render.py W H out.png [SS] [procs]"""
import sys, numpy as np
from multiprocessing import Pool
from PIL import Image

W = int(sys.argv[1]) if len(sys.argv) > 1 else 700
H = int(sys.argv[2]) if len(sys.argv) > 2 else 520
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = float(sys.argv[4]) if len(sys.argv) > 4 else 1.0
NP = int(sys.argv[5]) if len(sys.argv) > 5 else 4
FW, FH = W, H; W, H = int(W * SS), int(H * SS)

def nrm(v): return v / (np.linalg.norm(v, axis=-1, keepdims=True) + 1e-12)
def sm(a, b, x):
    t = np.clip((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t)

BX, BY, BZ, BR = 1.32, 0.50, 0.92, 0.07       # skin block half sizes + rounding
TOP = BY + BR                                 # top skin surface
EC = np.array([0.18, TOP, -BZ - BR + 0.22]); ER = np.array([0.62, 0.42, 0.56])   # the wound cavity (ellipsoid), cut open by the front face

YAW = np.radians(-32)
cy_, sy_ = np.cos(YAW), np.sin(YAW)
ROT = np.array([[cy_, 0, sy_], [0, 1.0, 0], [-sy_, 0, cy_]])
def to_local(p): return p @ ROT

def hsh(i):
    return (np.sin(i[..., 0] * 127.1 + i[..., 1] * 311.7 + i[..., 2] * 74.7) * 43758.5453) % 1.0
def vnoise(p):
    i = np.floor(p); f = p - i; u = f * f * (3 - 2 * f)
    r = 0
    for dx in (0, 1):
        for dy in (0, 1):
            for dz in (0, 1):
                w = (u[:, 0] if dx else 1 - u[:, 0]) * (u[:, 1] if dy else 1 - u[:, 1]) * (u[:, 2] if dz else 1 - u[:, 2])
                r = r + w * hsh(i + np.array([dx, dy, dz]))
    return r
def fbm(p, o=3):
    a, r, s = 0.5, 0, 1.0
    for k in range(o):
        r = r + a * vnoise(p * s); s *= 2.03; a *= 0.5
    return r
def cell(p):
    # Worley F1, F2 (fat lobules)
    i = np.floor(p); f1 = np.full(len(p), 9.0); f2 = np.full(len(p), 9.0)
    for dx in (-1, 0, 1):
        for dy in (-1, 0, 1):
            for dz in (-1, 0, 1):
                c = i + np.array([dx, dy, dz])
                fp = c + np.stack([hsh(c), hsh(c + 17.3), hsh(c + 41.9)], 1) * 0.8 + 0.1
                d = np.linalg.norm(p - fp, axis=1)
                f2 = np.where(d < f1, f1, np.minimum(f2, d)); f1 = np.minimum(f1, d)
    return f1, f2
def skin_tex(q):
    # fine skin relief: irregular furrows (ridged noise) + soft micro relief
    n = vnoise(q * np.array([24, 24, 24.0]))
    return -0.0022 * (1 - np.abs(2 * n - 1)) ** 4 + 0.0006 * vnoise(q * 70.0)
def fat_bump(q):
    return 0.004 * vnoise(q * 9.0)

def ell(q):
    k = (q - EC) / ER; k0 = np.linalg.norm(k, axis=1); k1 = np.linalg.norm(k / ER, axis=1)
    return k0 * (k0 - 1) / (k1 + 1e-9)

def sdf(p, want=False):
    q = to_local(p)
    d = np.abs(q) - np.array([BX, BY, BZ])
    box = np.linalg.norm(np.maximum(d, 0), axis=1) + np.minimum(d.max(1), 0) - BR
    top = q[:, 1] > TOP - 0.05
    box = box - np.where(top, skin_tex(q), 0)
    fat = q[:, 1] < -0.16
    box = box + np.where(fat, -fat_bump(q) * sm(-0.16, -0.24, q[:, 1]), 0)
    cav = ell(q)
    skin = np.maximum(box, -cav)
    boxp = np.linalg.norm(np.maximum(d, 0), axis=1) + np.minimum(d.max(1), 0) - BR
    r2 = ((q[:, 0] - EC[0]) / ER[0]) ** 2 + ((q[:, 2] - EC[2]) / ER[2]) ** 2
    dome = TOP + 0.012 + 0.026 * np.clip(1 - r2, 0, 1)
    gel = np.maximum(np.maximum(cav + 0.002, (q[:, 1] - dome) * 0.9), boxp + 0.002)
    out = np.minimum(skin, gel)
    if want: return out, dict(q=q, gel=gel < skin)
    return out

CAM = np.array([0.0, 3.05, -6.3]); TGT = np.array([0.0, 0.05, 0.0]); FOV = 31.0
fw = nrm(TGT - CAM); rt = nrm(np.cross(np.array([0, 1.0, 0]), fw)); up = np.cross(fw, rt)
TH = np.tan(np.radians(FOV / 2))
BS = 1.85
LK = nrm(np.array([-0.55, 0.9, -0.45]))
RIMD = nrm(np.array([0.85, 0.25, 0.6]))
PERI = np.array([0.36, 0.49, 0.77])

def march(O, Dd, t, tmax, steps=200, eps=5e-4):
    hit = np.zeros(len(Dd), bool); act = np.where(t < tmax)[0]
    for s in range(steps):
        if len(act) == 0: break
        p = O + Dd[act] * t[act, None]
        d = sdf(p)
        h = d < eps
        hit[act[h]] = True
        t[act] += np.maximum(d, eps) * 0.75
        keep = (~h) & (t[act] < tmax[act])
        act = act[keep]
    return t, hit

def normal(P):
    e = 7e-4
    return nrm(np.stack([sdf(P + [e, 0, 0]) - sdf(P - [e, 0, 0]), sdf(P + [0, e, 0]) - sdf(P - [0, e, 0]),
                         sdf(P + [0, 0, e]) - sdf(P - [0, 0, e])], 1))

def tissue_albedo(q, n_local):
    y = q[:, 1]
    epi = np.array([0.86, 0.68, 0.60]); bas = np.array([0.55, 0.36, 0.33])
    der = np.array([0.80, 0.50, 0.49]); fat = np.array([0.94, 0.80, 0.50]); bed = np.array([0.66, 0.30, 0.31])
    # dermis with fine collagen streaks
    streak = fbm(q * np.array([9.0, 60.0, 9.0]), 3)
    a = der[None, :] * (0.86 + 0.22 * streak)[:, None]
    g1, g2 = cell(q * np.array([7.0, 11.0, 7.0]) + 3.1)
    ves = (1 - sm(0.06, 0.10, g1)) * sm(-0.05, 0.05, y) * (1 - sm(0.38, 0.44, y))
    a = a * (1 - ves * 0.55)[:, None] + np.array([0.50, 0.12, 0.14]) * (ves * 0.55)[:, None]
    a = a * (1 - sm(0.43, 0.455, y))[:, None] + bas * (sm(0.43, 0.455, y) * (1 - sm(0.465, 0.49, y)))[:, None] \
        + epi * sm(0.465, 0.49, y)[:, None]
    f = sm(-0.10, -0.20, y)
    f1, f2 = cell(q * 9.0)
    sep = 1 - (1 - sm(0.01, 0.07, f2 - f1)) * 0.6                   # thin fibrous septa between lobules
    cv = hsh(np.floor(q * 9.0))
    fa = fat[None, :] * (0.80 + 0.22 * np.clip(1 - f1, 0, 1) ** 1.5 + 0.06 * (vnoise(q * 9.0) - .5))[:, None]
    fa = fa * sep[:, None] + np.array([0.95, 0.80, 0.74]) * (1 - sep)[:, None]
    a = a * (1 - f)[:, None] + fa * f[:, None]
    tone = fbm(q * 5.0, 2)
    a = a * (0.94 + 0.12 * tone)[:, None]
    # the wound bed (cavity wall): raw, a little deeper red
    inbed = (ell(q) > -0.02) & (ell(q) < 0.02) & (y < TOP - 0.01)
    a[inbed] = a[inbed] * 0.45 + bed * 0.55
    return a

def shade_tissue(P, Nn, V, q):
    alb = tissue_albedo(q, None)
    ao = np.zeros(len(P))
    for i, hgt in enumerate([.012, .03, .06, .11, .18]):
        ao += (hgt - np.minimum(sdf(P + Nn * hgt), hgt)) / hgt * (0.75 ** i)
    ao = np.clip(1 - ao / 2.4, 0, 1)
    sh = np.ones(len(P)); ts = np.full(len(P), .02); act = np.arange(len(P))
    for s in range(48):
        if len(act) == 0: break
        d = sdf(P[act] + Nn[act] * 2e-3 + LK * ts[act, None])
        sh[act] = np.minimum(sh[act], np.clip(10 * d / ts[act], 0, 1))
        ts[act] += np.clip(d, .006, .12)
        act = act[(sh[act] > .03) & (ts[act] < 3.0)]
    sh = sh * sh * (3 - 2 * sh)
    ndl = Nn @ LK
    wrap = np.clip((ndl + 0.35) / 1.35, 0, 1)                    # soft, skin-like wrap
    sss = np.clip((ndl + 0.6) / 1.6, 0, 1) * (1 - np.clip(ndl, 0, 1))  # red bleed at the terminator
    rim = np.clip(Nn @ RIMD, 0, 1) ** 2
    fres = (1 - np.clip((Nn * V).sum(1), 0, 1)) ** 4
    Hh = nrm(LK + V); spec = np.clip((Nn * Hh).sum(1), 0, 1) ** 38 * 0.16
    col = alb * (np.array([1.0, 0.95, 0.90]) * (wrap * sh)[:, None] * 1.12 + 0.10 * ao[:, None])
    col += alb * np.array([0.55, 0.12, 0.08]) * (sss * 0.22 * sh)[:, None]
    col += alb * PERI * 0.22 * (ao * np.clip(Nn @ nrm(np.array([0.7, -0.1, 0.5])), 0, 1))[:, None]
    col += (rim * 0.30 + fres * 0.18)[:, None] * PERI[None, :] * ao[:, None]
    col += (spec * sh)[:, None] * np.array([1.0, 0.97, 0.95])
    col *= (0.42 + 0.58 * ao)[:, None]
    return col

def env(Dw):
    # a studio environment: a large soft box up-left, dim navy elsewhere, a periwinkle card on the right
    y = Dw[:, 1]
    base = np.array([0.05, 0.07, 0.14])[None, :] * (0.6 + 0.4 * np.clip(y, 0, 1))[:, None]
    box = np.clip((Dw @ LK - 0.86) / 0.07, 0, 1) ** 1.5
    card = np.clip((Dw @ RIMD - 0.9) / 0.06, 0, 1)
    WIN = nrm(np.array([0.25, 0.75, 0.6]))
    win = np.clip((Dw @ WIN - 0.72) / 0.16, 0, 1) ** 2
    base = base + win[:, None] * np.array([0.85, 0.9, 1.0]) * 1.6
    return base + box[:, None] * np.array([1.0, 0.98, 0.95]) * 1.4 + card[:, None] * PERI * 0.8

def ray_ell_far(o, d):
    # o, d in local space; exit of the cavity ellipsoid
    oo = (o - EC) / ER; dd = d / ER
    a = (dd * dd).sum(1); b = 2 * (oo * dd).sum(1); c = (oo * oo).sum(1) - 1
    disc = np.maximum(b * b - 4 * a * c, 0)
    return (-b + np.sqrt(disc)) / (2 * a)

def render_rows(rows):
    r0, r1 = rows
    ys, xs = np.mgrid[r0:r1, 0:W]
    u = ((xs + .5) / W * 2 - 1) * TH * (W / H); v = (1 - (ys + .5) / H * 2) * TH
    D = nrm(u[..., None] * rt + v[..., None] * up + fw).reshape(-1, 3)
    n = len(D)
    b = (CAM[None, :] * D).sum(1); c = (CAM ** 2).sum() - BS * BS; disc = b * b - c
    t = np.where(disc > 0, -b - np.sqrt(np.maximum(disc, 0)), 1e9); tmax = np.where(disc > 0, -b + np.sqrt(np.maximum(disc, 0)), 0)
    T, hit = march(CAM, D, t.copy(), tmax)
    img = np.zeros((n, 4))
    hi = np.where(hit)[0]
    if len(hi) == 0: return img.reshape(r1 - r0, W, 4)
    P = CAM + D[hi] * T[hi, None]
    Nn = normal(P)
    _, info = sdf(P, want=True)
    q = info['q']; g = info['gel']
    V = -D[hi]
    col = np.zeros((len(hi), 3))
    ti = np.where(~g)[0]
    if len(ti): col[ti] = shade_tissue(P[ti], Nn[ti], V[ti], q[ti])
    gi = np.where(g)[0]
    if len(gi):
        Ng = Nn[gi]; Vg = V[gi]; Dg = D[hi][gi]
        cosi = np.clip((Ng * Vg).sum(1), 0, 1)
        eta = 1 / 1.36
        k = 1 - eta * eta * (1 - cosi ** 2)
        R = nrm(eta * Dg + (eta * cosi - np.sqrt(np.maximum(k, 0)))[:, None] * Ng)
        Pl = to_local(P[gi]); Rl = to_local(R)
        tt = ray_ell_far(Pl, Rl)
        Qb = Pl + Rl * tt[:, None]                         # point on the wound bed, local
        Pb = Qb @ ROT.T
        Nb = -nrm((Qb - EC) / ER ** 2) @ ROT.T
        # wound bed lit through the gel (soft, slightly shadowed by the rim)
        alb = tissue_albedo(Qb, None)
        depth = TOP - Qb[:, 1]
        bedl = np.clip((Nb @ LK + 0.5) / 1.5, 0, 1) * (1 - 0.55 * sm(0.0, 0.38, depth))
        under = alb * (0.30 + 1.05 * bedl)[:, None]
        absorb = np.exp(-tt[:, None] * np.array([1.6, 0.95, 0.55]))   # a faint blue cast with thickness
        under = under * absorb * np.array([0.92, 1.0, 1.08]) + np.array([0.10, 0.18, 0.32]) * (1 - absorb.mean(1, keepdims=True)) * 0.6
        F0 = 0.025; F = F0 + (1 - F0) * (1 - cosi) ** 5
        Rf = Dg - 2 * (Dg * Ng).sum(1)[:, None] * Ng
        refl = env(Rf)
        Hh = nrm(LK + Vg); spec = np.clip((Ng * Hh).sum(1), 0, 1) ** 420 * 3.2
        sheen = np.clip((Ng * Hh).sum(1), 0, 1) ** 70 * 0.35
        col[gi] = under * (1 - F)[:, None] + refl * (F * 1.6 + 0.05)[:, None] + (spec + sheen)[:, None]
        # a few micro-bubbles caught in the set gel
        b1, _ = cell(Pl * 16.0 + 5.7)
        cid = hsh(np.floor(Pl * 16.0 + 5.7))
        bub = (cid > 0.82) * np.clip(1 - np.abs(b1 - 0.07) / 0.03, 0, 1) * 0.35
        col[gi] += bub[:, None] * np.array([0.85, 0.92, 1.0])
        # a fine lighter meniscus where the gel meets the skin
        edge = np.clip(1 - np.abs(ell(Pl)) / 0.012, 0, 1)
        col[gi] += (edge * 0.06)[:, None] * np.array([0.8, 0.88, 1.0])
    col = col / (1 + col * .18) * 1.1
    col = np.clip(col, 0, 1) ** (1 / 1.05)
    col = np.clip(col + (np.random.default_rng(r0).random((len(hi), 1)) - .5) * .01, 0, 1)
    img[hi, :3] = col
    img[hi, 3] = 1
    return img.reshape(r1 - r0, W, 4)

if __name__ == '__main__':
    band_ = max(8, H // (NP * 8))
    jobs = [(r, min(H, r + band_)) for r in range(0, H, band_)]
    with Pool(NP) as pool:
        parts = pool.map(render_rows, jobs)
    rgba = np.concatenate(parts, 0)
    im = Image.fromarray((np.clip(rgba, 0, 1) * 255).astype(np.uint8), 'RGBA')
    if SS != 1: im = im.resize((FW, FH), Image.LANCZOS)
    im.save(OUT)
    print('wrote', OUT, im.size)
