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

BX, BY, BZ, BR = 1.32, 0.50, 0.92, 0.022      # tissue block half sizes + a slight edge softening (a cut block, not a cake)
TOP = BY + BR                                 # top skin surface
EC = np.array([0.18, TOP, -BZ - BR + 0.22]); ER = np.array([0.60, 0.46, 0.56])   # the wound cavity (ellipsoid), cut open by the front face

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
    return -0.0014 * (1 - np.abs(2 * n - 1)) ** 4 + 0.0004 * vnoise(q * 70.0)
def fat_bump(q):
    b1 = vnoise(q * 11.0); return 0.005 * b1 * b1

def ell(q):
    k = (q - EC) / ER; k0 = np.linalg.norm(k, axis=1); k1 = np.linalg.norm(k / ER, axis=1)
    return k0 * (k0 - 1) / (k1 + 1e-9)

def sdf(p, want=False):
    q = to_local(p)
    d = np.abs(q) - np.array([BX, BY, BZ])
    box = np.linalg.norm(np.maximum(d, 0), axis=1) + np.minimum(d.max(1), 0) - BR
    top = q[:, 1] > TOP - 0.05
    box = box - np.where(top, skin_tex(q) + 0.010 * (vnoise(q * np.array([2.2, 2.2, 2.2])) - .5), 0)
    box = box - 0.004 * (vnoise(q * 7.0) - .5)                              # a hand-cut face is never flat
    fat = q[:, 1] < -0.17
    box = box - np.where(fat, fat_bump(q) * sm(-0.17, -0.30, q[:, 1]), 0)
    cav = ell(q)
    skin = np.maximum(box, -cav)
    boxp = np.linalg.norm(np.maximum(d, 0), axis=1) + np.minimum(d.max(1), 0) - BR
    r2 = ((q[:, 0] - EC[0]) / ER[0]) ** 2 + ((q[:, 2] - EC[2]) / ER[2]) ** 2
    dome = TOP + 0.002 + 0.004 * np.clip(1 - r2, 0, 1)
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

FOL = [  # hair follicles: (x at top, z, tilt in x per unit depth, depth), lying in the cut faces so they show in section
    (-0.95, -BZ - 0.004, 0.32, 0.40), (-0.42, -BZ - 0.004, 0.28, 0.44), (0.95, -BZ - 0.004, 0.30, 0.42),
    (-BX - 0.004, -0.55, 0.0, 0.42), (-BX - 0.004, 0.25, 0.0, 0.40)]
def tissue_albedo(q, n_local):
    """H&E-like histology colours on the cut faces: pale lamellated stratum corneum, a stratified purple epidermis with
    rete ridges dipping into the dermis, eosin-pink fibrous dermis (finer papillary, coarser reticular bundles) with small
    vessels, hair follicles and coiled sweat glands, then lobulated pale fat with thin pink septa."""
    x, y, z = q[:, 0], q[:, 1], q[:, 2]
    n = len(q)
    # --- the dermal-epidermal junction with rete ridges (pegs pointing down)
    r1 = (0.5 + 0.5 * np.sin(34 * x + 2.2 * np.sin(11 * z) + 1.3)) ** 3
    r2 = (0.5 + 0.5 * np.sin(32 * z + 2.0 * np.sin(13 * x))) ** 3
    rr = np.maximum(r1, r2)
    dej = TOP - 0.070 - 0.050 * rr - 0.008 * vnoise(q * 40.0)
    scb = TOP - 0.010 - 0.002 * vnoise(q * 50.0)
    # dermis
    pap = sm(dej - 0.09, dej - 0.02, y)                                     # papillary zone just under the junction
    bund = fbm(q * np.array([6.0, 26.0, 6.0]), 3)
    wav = 0.5 + 0.5 * np.sin(48 * y + 9 * bund + 5 * np.sin(5 * x + 4 * z))
    fib = 0.55 * wav + 0.45 * fbm(q * np.array([28.0, 90.0, 28.0]), 2)
    dermL = np.array([0.90, 0.66, 0.74]); dermD = np.array([0.76, 0.42, 0.56])
    a = dermD[None, :] + (dermL - dermD)[None, :] * (0.25 + 0.75 * fib * (1 - pap) + 0.55 * pap)[:, None]
    a = np.clip(a, 0, 1)
    # vessels: small rings with a dark lumen edge, scattered in the dermis
    v1, _ = cell(q * 13.0 + 7.7)
    vm = (hsh(np.floor(q * 13.0 + 7.7)) > 0.72)
    vr = vm * np.clip(1 - np.abs(v1 - 0.16) / 0.035, 0, 1)
    vl = vm * (v1 < 0.13)
    a = a * (1 - 0.6 * vr)[:, None] + np.array([0.62, 0.20, 0.34]) * (0.6 * vr)[:, None]
    a = a * (1 - 0.35 * vl)[:, None] + np.array([0.96, 0.86, 0.88]) * (0.35 * vl)[:, None]
    # sweat glands: coiled clusters of tiny purple rings low in the dermis
    gm = sm(0.60, 0.74, vnoise(q * 4.0 + 2.3)) * sm(-0.16, -0.08, y) * (1 - sm(0.08, 0.16, y))
    g1, _ = cell(q * 34.0)
    gr = gm * np.clip(1 - np.abs(g1 - 0.30) / 0.09, 0, 1)
    a = a * (1 - 0.7 * gr)[:, None] + np.array([0.50, 0.30, 0.56]) * (0.7 * gr)[:, None]
    # hair follicles in section: purple root sheath, a dark shaft, a bulb at the base
    for (fx, fz, tl, dp) in FOL:
        t = np.clip((TOP - y) / dp, 0, 1)
        if abs(fz) > BZ:   # follicle in the front face: runs in x
            cx = fx + tl * (TOP - y); dd = np.abs(x - cx); near = np.abs(z - fz) < 0.03
        else:              # follicle in the left face: runs in z
            cz = fz + 0.30 * (TOP - y); dd = np.abs(z - cz); near = np.abs(x - fx) < 0.03
        w = 0.022 + 0.022 * sm(0.8, 1.0, t)
        inside = near & (y < TOP) & (y > TOP - dp - 0.03) & (dd < w)
        sheath = inside & (dd > 0.008)
        a[sheath] = a[sheath] * 0.35 + np.array([0.52, 0.32, 0.58]) * 0.65
        shaft = inside & (dd <= 0.008)
        a[shaft] = np.array([0.30, 0.20, 0.18])
    # epidermis: stratified, basal layer darker, nuclear stipple
    ep = sm(dej - 0.004, dej + 0.004, y)
    depth_in = np.clip((y - dej) / 0.07, 0, 1)
    epc = np.array([0.50, 0.30, 0.54]) * (1 - depth_in)[:, None] + np.array([0.70, 0.50, 0.68]) * depth_in[:, None]
    stip = (vnoise(q * 160.0) > 0.72) * (1 - depth_in * 0.6)
    epc = epc * (1 - 0.25 * stip)[:, None]
    a = a * (1 - ep)[:, None] + epc * ep[:, None]
    # stratum corneum: thin, pale, lamellated
    sc = sm(scb - 0.003, scb + 0.002, y)
    lam = 0.5 + 0.5 * np.sin(y * 900.0)
    scc = np.array([0.93, 0.80, 0.86]) * (0.92 + 0.08 * lam)[:, None]
    a = a * (1 - sc)[:, None] + scc * sc[:, None]
    # hypodermis: lobulated pale fat, thin pink septa, thicker septa between lobule groups
    db = -0.17 + 0.03 * (vnoise(q * 5.0) - .5)
    f = sm(db + 0.012, db - 0.012, y)
    f1, f2 = cell(q * 19.0)
    L1, L2 = cell(q * 4.2 + 4.4)
    thin = 1 - sm(0.0, 0.11, f2 - f1)
    thick = 1 - sm(0.0, 0.05, L2 - L1)
    fa = np.array([0.97, 0.94, 0.92])[None, :] * (0.95 + 0.05 * (1 - f1))[:, None]
    sep = np.clip(thin * 0.8 + thick, 0, 1)
    fa = fa * (1 - sep * 0.75)[:, None] + np.array([0.84, 0.56, 0.68]) * (sep * 0.75)[:, None]
    a = a * (1 - f)[:, None] + fa * f[:, None]
    # the skin surface seen from above: matte, pale skin with fine mottling (only on upward-facing points)
    up = y > TOP - 0.013
    tone = fbm(q * 6.0, 2)
    fur = np.maximum(1 - np.abs(np.sin(26 * x + 17 * z + 3 * vnoise(q * 3.0))) / 0.06, 0) + \
          np.maximum(1 - np.abs(np.sin(24 * x - 19 * z + 3 * vnoise(q * 3.0 + 9))) / 0.06, 0)
    a[up] = np.array([0.86, 0.73, 0.72]) * (0.92 + 0.12 * tone[up] - 0.07 * np.clip(fur[up], 0, 1))[:, None]
    # the wound bed (cavity wall): granulating, slightly deeper red
    e = ell(q)
    inbed = (e > -0.025) & (e < 0.02) & (y < TOP - 0.01)
    a[inbed] = a[inbed] * 0.55 + np.array([0.74, 0.36, 0.44]) * 0.45
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
    Hh = nrm(LK + V); spec = np.clip((Nn * Hh).sum(1), 0, 1) ** 24 * 0.05
    col = alb * (np.array([1.0, 0.95, 0.90]) * (wrap * sh)[:, None] * 1.12 + 0.10 * ao[:, None])
    col += alb * np.array([0.45, 0.14, 0.18]) * (sss * 0.16 * sh)[:, None]
    col += alb * PERI * 0.22 * (ao * np.clip(Nn @ nrm(np.array([0.7, -0.1, 0.5])), 0, 1))[:, None]
    col += (rim * 0.20 + fres * 0.10)[:, None] * PERI[None, :] * ao[:, None]
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
        absorb = np.exp(-tt[:, None] * np.array([0.75, 0.42, 0.22]))   # a faint blue cast with thickness
        lum = under.mean(1, keepdims=True); under = (under * 0.6 + lum * 0.4) * absorb * np.array([0.9, 1.0, 1.06]) + np.array([0.04, 0.08, 0.13]) * (1 - absorb.mean(1, keepdims=True)) * 0.6
        F0 = 0.025; F = F0 + (1 - F0) * (1 - cosi) ** 5
        Rf = Dg - 2 * (Dg * Ng).sum(1)[:, None] * Ng
        refl = env(Rf)
        Hh = nrm(LK + Vg); spec = np.clip((Ng * Hh).sum(1), 0, 1) ** 420 * 3.2
        sheen = np.clip((Ng * Hh).sum(1), 0, 1) ** 70 * 0.35
        col[gi] = under * (1 - F)[:, None] + refl * (F * 0.7 + 0.02)[:, None] + (spec * 0.7 + sheen * 0.5)[:, None]
        # a few micro-bubbles caught in the set gel
        b1, _ = cell(Pl * 16.0 + 5.7)
        cid = hsh(np.floor(Pl * 16.0 + 5.7))
        bub = (cid > 0.82) * np.clip(1 - np.abs(b1 - 0.07) / 0.03, 0, 1) * 0.35
        col[gi] += bub[:, None] * np.array([0.85, 0.92, 1.0])
        # a fine lighter meniscus where the gel meets the skin
        ee = ell(Pl)
        edge = np.clip(1 - np.abs(ee) / 0.010, 0, 1)
        col[gi] += (edge * 0.10)[:, None] * np.array([0.85, 0.9, 1.0])
        # the set polymer network: faint pale strands through the gel (seen along the refracted ray's mid-point)
        mid = Pl + Rl * (tt * 0.5)[:, None]
        net = sm(0.46, 0.5, vnoise(mid * 34.0)) * (1 - sm(0.5, 0.54, vnoise(mid * 34.0)))
        col[gi] += (net * 0.035)[:, None] * np.array([0.9, 0.95, 1.0])
        # integration: fine tissue strands reaching a little way into the gel from the wall
        band = sm(-0.05, -0.004, ee)
        strand = sm(0.55, 0.8, vnoise(Pl * np.array([60.0, 18.0, 60.0])))
        col[gi] = col[gi] * (1 - 0.35 * band * strand)[:, None] + np.array([0.80, 0.55, 0.64]) * (0.35 * band * strand)[:, None]
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
