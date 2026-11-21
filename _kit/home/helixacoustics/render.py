#!/usr/bin/env python3
"""Helix Acoustics hero (HOME_BRIEF update 2c: a crafted render of the real mechanism). A focused ultrasound transducer
array as described in NSF STTR award 2537879: a concave array of transducer elements whose high-pressure pulses converge
on a sample tube and raise a dense cavitation "bubble cloud" at the focus, which disintegrates the tissue inside and
releases its DNA. Spherical-cap housing (dark anodised, a machined flange with bolts), 58 circular elements in rings on
the concave face, a glass sample tube held at the focus with its buffer, the bubble cloud and a few fragments of plant
tissue. Analytic ray tracing in numpy, saved with real ALPHA (no ground of its own, DJ/DP).
Colours: the logo's navy #10488a and leaf green #a8d078 on a navy-black ink. Proportions are illustrative.
Usage: python3 render.py W H out.png [SS] [procs]"""
import sys, numpy as np
from multiprocessing import Pool
from PIL import Image

W = int(sys.argv[1]) if len(sys.argv) > 1 else 700
H = int(sys.argv[2]) if len(sys.argv) > 2 else 760
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 1
NP = int(sys.argv[5]) if len(sys.argv) > 5 else 4
FW, FH = W, H; W, H = W * SS, H * SS

def nrm(v): return v / np.linalg.norm(v, axis=-1, keepdims=True)

# ---------------- scene ----------------
R1, R2 = 1.0, 1.085            # inner (focal) and outer sphere of the cap, centred on the focus F=(0,0,0)
A0 = np.radians(52)            # half aperture
ZR = -np.cos(A0) * R1          # rim plane
RIN = np.sin(A0) * R1
RFL, ZFB = 1.0, ZR - 0.075     # flange radius and underside
TR, TZB, TZT = 0.082, -0.19, 0.56   # tube radius, centre of its round bottom, top of the glass
CR, CZT = 0.098, 0.70          # cap
LIQ = 0.16                     # liquid level

# element directions (unit vectors from F to element centres), rings around the axis -z
ER = 0.083
EL = [np.array([0, 0, -1.0])]
for i in range(1, 5):
    th = i * 0.192; n = int(2 * np.pi * np.sin(th) / 0.192); off = (i % 2) * np.pi / n
    for k in range(n):
        ph = off + 2 * np.pi * k / n
        EL.append(np.array([np.sin(th) * np.cos(ph), np.sin(th) * np.sin(ph), -np.cos(th)]))
EL = np.array(EL)
rng = np.random.default_rng(7)
ELJ = rng.normal(0, 1, (len(EL), 3)) * 0.05   # tiny per-element tilt (each element seated by hand)
BOLTS = np.array([[np.cos(a), np.sin(a)] for a in np.linspace(0, 2 * np.pi, 12, endpoint=False) + 0.13]) * 0.94

# camera
T = np.array([0.0, 0.0, -0.14])
ED = nrm(np.array([0.30, -1.0, 0.55])); EYE = T + ED * 4.4
FWD = nrm(T - EYE); RGT = nrm(np.cross(FWD, [0, 0, 1])); UP = np.cross(RGT, FWD)
FOV = np.radians(31)

KEY = nrm(np.array([-0.55, -0.45, 0.75]))
RIM = nrm(np.array([0.75, 0.65, 0.25]))

def env(r):
    """studio environment: dim navy surround, a large soft box upper-left, a cool strip light behind right"""
    z = np.clip(r[:, 2], -1, 1)
    base = (0.010 + 0.05 * np.clip(z, 0, 1) ** 1.5)[:, None] * np.array([0.55, 0.75, 1.15])
    s1 = np.exp(-(1 - (r @ KEY)) / 0.035)[:, None] * np.array([1.9, 1.85, 1.75])
    s2 = np.exp(-(1 - (r @ RIM)) / 0.018)[:, None] * np.array([0.55, 0.85, 1.35])
    s3 = np.exp(-(1 - (r @ nrm(np.array([0.1, -0.9, 0.42])))) / 0.06)[:, None] * np.array([0.12, 0.16, 0.22])
    s4 = np.exp(-(1 - z) / 0.22)[:, None] * np.array([0.30, 0.36, 0.46])
    hz = np.exp(-((z - 0.18) / 0.07) ** 2)[:, None] * np.array([0.10, 0.14, 0.20]) * (0.6 + 0.4 * np.sin(np.arctan2(r[:, 1], r[:, 0]) * 3))[:, None]
    return base + s1 + s2 + s3 + s4 + hz

def reflect(d, n): return d - 2 * np.sum(d * n, -1, keepdims=True) * n

def sph(o, d, r):
    b = np.sum(o * d, -1); c = np.sum(o * o, -1) - r * r; h = b * b - c
    ok = h > 0; s = np.sqrt(np.where(ok, h, 0))
    return np.where(ok, -b - s, np.inf), np.where(ok, -b + s, np.inf)

def cylz(o, d, r):
    a = d[:, 0] ** 2 + d[:, 1] ** 2; b = o[:, 0] * d[:, 0] + o[:, 1] * d[:, 1]; c = o[:, 0] ** 2 + o[:, 1] ** 2 - r * r
    h = b * b - a * c; ok = (h > 0) & (a > 1e-9); s = np.sqrt(np.where(ok, h, 0)); a = np.where(a > 1e-9, a, 1)
    return np.where(ok, (-b - s) / a, np.inf), np.where(ok, (-b + s) / a, np.inf)

def pos(o, d, t): return o + d * np.where(np.isfinite(t), t, 0)[:, None]

def opaque(o, d):
    """nearest opaque hit of the transducer: returns t, colour, kind"""
    n = len(d); best = np.full(n, np.inf); kind = np.zeros(n, np.int8)
    # outer shell (convex), below the flange
    t1, _ = sph(o, d, R2); p = pos(o, d, t1); ok = np.isfinite(t1) & (t1 > 0) & (p[:, 2] <= ZFB)
    best = np.where(ok, t1, best); kind[ok] = 1
    # inner cap (concave face, seen from inside)
    _, t2 = sph(o, d, R1); p = pos(o, d, t2); ok = np.isfinite(t2) & (t2 > 0) & (p[:, 2] <= ZR) & (t2 < best)
    best = np.where(ok, t2, best); kind[ok] = 2
    # flange top face
    tp = (ZR - o[:, 2]) / np.where(np.abs(d[:, 2]) > 1e-9, d[:, 2], 1e-9); p = pos(o, d, tp)
    rr = np.hypot(p[:, 0], p[:, 1]); ok = (tp > 0) & (rr >= RIN) & (rr <= RFL) & (tp < best)
    best = np.where(ok, tp, best); kind[ok] = 3
    # flange outer wall
    c1, _ = cylz(o, d, RFL); p = pos(o, d, c1); ok = np.isfinite(c1) & (c1 > 0) & (p[:, 2] <= ZR) & (p[:, 2] >= ZFB) & (c1 < best)
    best = np.where(ok, c1, best); kind[ok] = 4
    return best, kind

def shade_opaque(o, d, t, kind):
    n = len(d); col = np.zeros((n, 3)); p = pos(o, d, t)
    # 1 outer shell: dark anodised navy, soft key, cool rim
    m = kind == 1
    if m.any():
        nn = nrm(p[m]); dd = d[m]
        dif = np.clip(nn @ KEY, 0, 1) ** 1.2; fr = 0.04 + 0.96 * (1 - np.clip(-np.sum(dd * nn, -1), 0, 1)) ** 5
        rf = env(reflect(dd, nn))
        base = np.array([0.008, 0.020, 0.048])
        col[m] = base * (0.25 + 1.6 * dif[:, None]) + rf * (0.10 + 0.6 * fr)[:, None] * np.array([0.65, 0.8, 1.0])
        # machining rings
        col[m] *= (0.93 + 0.07 * np.sin(np.arctan2(np.hypot(p[m, 0], p[m, 1]), -p[m, 2]) * 260))[:, None]
    # 3/4 flange: brushed anodised navy, lathe-turned rings on the top face, 12 bolts
    for k in (3, 4):
        m = kind == k
        if not m.any(): continue
        pp = p[m]; dd = d[m]
        if k == 3:
            nn = np.tile([0, 0, 1.0], (m.sum(), 1)); rr = np.hypot(pp[:, 0], pp[:, 1])
            # turned rings perturb the normal radially (anisotropic sheen)
            g = np.sin(rr * 900) * 0.035 + np.sin(rr * 151) * 0.02
            rad = np.stack([pp[:, 0], pp[:, 1], np.zeros(len(pp))], -1) / rr[:, None]
            nn = nrm(nn + rad * g[:, None])
            # chamfer at the inner lip
            lip = np.clip((RIN + 0.022 - rr) / 0.022, 0, 1); nn = nrm(nn - rad * lip[:, None] * 0.9)
        else:
            nn = nrm(np.stack([pp[:, 0], pp[:, 1], np.zeros(len(pp))], -1))
            nn = nrm(nn + np.array([0, 0, 1.0]) * (np.sin(pp[:, 2] * 700) * 0.02)[:, None])
        dif = np.clip(nn @ KEY, 0, 1); fr = 0.06 + 0.94 * (1 - np.clip(-np.sum(dd * nn, -1), 0, 1)) ** 5
        base = np.array([0.008, 0.024, 0.060])
        c = base * (0.3 + 1.5 * dif[:, None]) + env(reflect(dd, nn)) * (0.10 + 0.45 * fr)[:, None] * np.array([0.55, 0.78, 1.1])
        if k == 3:
            # bolts: socket-head caps, steel
            bd = np.min(np.hypot(pp[:, 0, None] - BOLTS[None, :, 0], pp[:, 1, None] - BOLTS[None, :, 1]), 1)
            bm = bd < 0.026
            if bm.any():
                bn = nrm(np.stack([np.zeros(bm.sum()), np.zeros(bm.sum()), np.ones(bm.sum())], -1))
                steel = 0.05 + env(reflect(dd[bm], bn)) * 0.75
                hexs = bd[bm] < 0.011
                steel[hexs] *= 0.12
                c[bm] = steel * np.array([0.92, 0.94, 1.0])
            ring = (bd > 0.026) & (bd < 0.031); c[ring] *= 0.35
        col[m] = c
    # 2 inner face: graphite housing with 58 elements
    m = kind == 2
    if m.any():
        pp = p[m]; dd = d[m]; u = pp / np.linalg.norm(pp, axis=-1, keepdims=True)
        dots = u @ EL.T; ki = np.argmax(dots, 1); ad = np.arccos(np.clip(dots[np.arange(len(ki)), ki], -1, 1))
        th = np.arccos(np.clip(-u[:, 2], -1, 1))
        # housing
        hn = -u
        hdif = np.clip(hn @ KEY, 0, 1)
        ao = 0.45 + 0.55 * np.clip(th / A0, 0, 1) ** 0.7
        layer = 0.9 + 0.1 * np.sin(pp[:, 2] * 520)
        hc = np.array([0.030, 0.040, 0.058]) * (0.35 + 1.3 * hdif[:, None]) * ao[:, None] * layer[:, None]
        hc += env(reflect(dd, hn)) * 0.05
        # element faces: lapped piezo discs in steel housings
        en = nrm(-EL[ki] + ELJ[ki])
        loc = np.clip(ad / ER, 0, 1.2)
        tilt = nrm(en - (u - EL[ki]) * 2.2 + (u - EL[ki]) * (np.clip((loc - 0.86) / 0.1, 0, 1) * 8.0)[:, None])   # concave lens face, rolled bevel
        fr = 0.55 + 0.45 * (1 - np.clip(-np.sum(dd * tilt, -1), 0, 1)) ** 5
        ref = env(reflect(dd, tilt))
        lap = 0.88 + 0.12 * np.sin(loc * 70 + ki * 1.7)
        face = (0.02 + ref * fr[:, None] * 1.05) * np.array([0.80, 0.84, 0.92]) * lap[:, None]
        face += np.array([0.02, 0.03, 0.05]) * np.clip(tilt @ KEY, 0, 1)[:, None]
        # a gold electrode ring just inside the bevel
        gold = (loc > 0.70) & (loc < 0.76)
        face[gold] = (0.05 + ref[gold] * 0.8) * np.array([0.95, 0.78, 0.42])
        c = np.where((ad < ER)[:, None], face, hc)
        seat = (ad >= ER) & (ad < ER + 0.010); c[seat] *= 0.15
        col[m] = c
    return col

def tube(o, d, tmax, base_col, base_a):
    """glass sample tube with buffer; composited over the opaque result (premultiplied)"""
    n = len(d); col = base_col * base_a[:, None]; a = base_a.copy()
    c1, c2 = cylz(o, d, TR); p1 = pos(o, d, c1)
    # entry on the side wall, or on the hemispherical bottom
    oc = o - np.array([0, 0, TZB]); s1, s2 = sph(oc, d, TR); q1 = pos(o, d, s1)
    side = np.isfinite(c1) & (p1[:, 2] >= TZB) & (p1[:, 2] <= TZT)
    bot = np.isfinite(s1) & (q1[:, 2] < TZB) & ~side
    hit = (side | bot)
    te = np.where(side, c1, np.where(bot, s1, np.inf)); hit &= te < tmax
    if hit.any():
        pe = pos(o, d, te)[hit]; dd = d[hit]
        nn = np.where(side[hit][:, None], nrm(np.stack([pe[:, 0], pe[:, 1], np.zeros(len(pe))], -1)), nrm(pe - np.array([0, 0, TZB])))
        cs = np.clip(-np.sum(dd * nn, -1), 0, 1); fr = 0.04 + 0.96 * (1 - cs) ** 5
        rf = env(reflect(dd, nn)) * 1.25
        # thickness of glass seen at grazing angles
        edge = np.clip((1 - cs) ** 6 * 3.0, 0, 0.75)
        # liquid inside (below the level)
        liq = pe[:, 2] < LIQ
        lcol = np.array([0.050, 0.085, 0.13]); la = np.where(liq, 0.42, 0.0)
        bc = col[hit]; ba = a[hit]
        bc = bc * (1 - la[:, None]) + lcol * la[:, None]; ba = ba * (1 - la) + la
        # meniscus line
        men = np.abs(pe[:, 2] - LIQ) < 0.0045
        bc[men] += np.array([0.25, 0.32, 0.38]); ba[men] = np.maximum(ba[men], 0.6)
        tint = np.array([0.55, 0.72, 0.85])
        bc = bc * (1 - edge[:, None]) + tint * 0.10 * edge[:, None]; ba = ba * (1 - edge) + edge * 0.85
        oa = np.clip(fr * 1.4, 0, 1)
        col[hit] = bc * (1 - oa[:, None] * 0.4) + rf * fr[:, None]
        a[hit] = np.clip(ba + np.max(rf * fr[:, None], -1) * 0.9, 0, 1)
    # screw cap: navy ribbed polymer
    k1, _ = cylz(o, d, CR); pk = pos(o, d, k1)
    cap = np.isfinite(k1) & (pk[:, 2] >= TZT - 0.01) & (pk[:, 2] <= CZT) & (k1 < tmax)
    tt = (CZT - o[:, 2]) / np.where(np.abs(d[:, 2]) > 1e-9, d[:, 2], 1e-9); pt = pos(o, d, tt)
    top = (tt > 0) & (np.hypot(pt[:, 0], pt[:, 1]) <= CR) & ~cap
    if cap.any():
        pp = pk[cap]; dd = d[cap]; ang = np.arctan2(pp[:, 1], pp[:, 0])
        nn = nrm(np.stack([pp[:, 0], pp[:, 1], np.zeros(len(pp))], -1) + np.stack([-np.sin(ang), np.cos(ang), np.zeros(len(pp))], -1) * (np.sin(ang * 48) * 0.35)[:, None])
        dif = np.clip(nn @ KEY, 0, 1)
        cc = np.array([0.016, 0.055, 0.13]) * (0.3 + 1.4 * dif[:, None]) + env(reflect(dd, nn)) * 0.12
        col[cap] = cc; a[cap] = 1
    if top.any():
        nn = np.tile([0, 0, 1.0], (top.sum(), 1)); dd = d[top]
        col[top] = np.array([0.016, 0.055, 0.13]) * (0.3 + 1.4 * np.clip(nn @ KEY, 0, 1)[:, None]) + env(reflect(dd, nn)) * 0.1
        a[top] = 1
    return col, a

def project(P):
    v = P - EYE; z = v @ FWD; x = v @ RGT; y = v @ UP
    f = (H / 2) / np.tan(FOV / 2)
    return W / 2 + x / z * f, H / 2 - y / z * f, z

def rows(args):
    y0, y1 = args
    ys, xs = np.mgrid[y0:y1, 0:W].astype(np.float64)
    f = (H / 2) / np.tan(FOV / 2)
    d = nrm((xs.ravel() - W / 2 + .5)[:, None] * RGT - (ys.ravel() - H / 2 + .5)[:, None] * UP + f * FWD[None, :])
    o = np.tile(EYE, (len(d), 1))
    t, kind = opaque(o, d)
    col = shade_opaque(o, d, t, kind); a = (kind > 0).astype(np.float64)
    col, a = tube(o, d, t, col, a)
    return np.concatenate([col, a[:, None]], -1).reshape(y1 - y0, W, 4)

if __name__ == '__main__':
    step = 32
    with Pool(NP) as pl: parts = pl.map(rows, [(y, min(H, y + step)) for y in range(0, H, step)])
    img = np.concatenate(parts, 0)          # premultiplied colour + alpha
    # ---- the bubble cloud at the focus: a dense, cigar-shaped cloud of microbubbles inside the buffer ----
    N = 9000
    pts = np.stack([rng.normal(0, 0.017, N), rng.normal(0, 0.017, N), rng.normal(0.0, 0.038, N)], -1)
    rr = np.hypot(pts[:, 0], pts[:, 1]); keep = (rr < TR - 0.012) & (pts[:, 2] < LIQ - 0.01) & (pts[:, 2] > TZB - 0.05)
    pts = pts[keep]
    px, py, pz = project(pts)
    glow = np.zeros((H, W)); yy, xx = np.mgrid[0:H, 0:W]
    cx, cy, _ = project(np.array([[0, 0, 0.0]])); cx, cy = cx[0], cy[0]
    sc = (H / 2) / np.tan(FOV / 2) / np.linalg.norm(EYE)       # px per world unit near the focus
    # soft core
    glow += 0.40 * np.exp(-(((xx - cx) / (0.022 * sc)) ** 2 + ((yy - cy) / (0.045 * sc)) ** 2))
    glow += 0.16 * np.exp(-(((xx - cx) / (0.075 * sc)) ** 2 + ((yy - cy) / (0.13 * sc)) ** 2))
    # microbubbles: tiny bright points
    br = rng.uniform(0.25, 1.0, len(px)) ** 2
    for x, y, b in zip(px, py, br):
        r = 0.32 * SS + b * 0.55 * SS; x0, x1 = int(x - 3 * r), int(x + 3 * r) + 1; y0, y1 = int(y - 3 * r), int(y + 3 * r) + 1
        x0, y0 = max(0, x0), max(0, y0)
        if x1 <= x0 or y1 <= y0: continue
        g = np.exp(-((xx[y0:y1, x0:x1] - x) ** 2 + (yy[y0:y1, x0:x1] - y) ** 2) / (2 * r * r))
        glow[y0:y1, x0:x1] += g * (0.18 + 0.5 * b)
    glow = 1 - np.exp(-glow * 1.1)
    gcol = np.array([0.80, 0.93, 1.0])
    # disintegrating plant tissue: a few leaf-green fragments drifting at the edge of the cloud
    fr = np.zeros((H, W))
    for k in range(26):
        v = np.array([rng.normal(0, 0.03), rng.normal(0, 0.03), rng.uniform(-0.12, 0.10)])
        if np.hypot(v[0], v[1]) > TR - 0.02: continue
        x, y, _ = project(v[None])
        r = rng.uniform(0.7, 1.9) * SS
        fr += 0.55 * np.exp(-((xx - x[0]) ** 2 + (yy - y[0]) ** 2) / (2 * r * r))
    fr = np.clip(fr, 0, 1)
    fcol = np.array([0.60, 0.78, 0.42])
    img[..., :3] = img[..., :3] * (1 - fr[..., None] * 0.8) + fcol * fr[..., None] * 0.7
    img[..., 3] = np.maximum(img[..., 3], fr * 0.7)
    img[..., :3] = img[..., :3] + gcol * glow[..., None]               # additive light, premultiplied
    img[..., 3] = np.clip(img[..., 3] + glow * (1 - img[..., 3]), 0, 1)
    # tone map (filmic shoulder) on the premultiplied colour, then downsample
    c = img[..., :3]; c = c / (1 + c * 0.35); img[..., :3] = np.clip(c, 0, 1)
    if SS > 1:
        img = img.reshape(FH, SS, FW, SS, 4).mean((1, 3))
    a = img[..., 3:4]; rgb = np.where(a > 1e-4, img[..., :3] / np.maximum(a, 1e-4), 0)
    rgb = np.clip(rgb, 0, 1) ** (1 / 2.2)
    out = np.concatenate([rgb, a], -1)
    Image.fromarray((out * 255 + .5).astype(np.uint8), 'RGBA').save(OUT)
    print('wrote', OUT, out.shape)
