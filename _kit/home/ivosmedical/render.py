#!/usr/bin/env python3
"""IVOS Medical hero (HOME_BRIEF update 2c: a crafted render of the real product). The BOSS G4 sleeve: a single-use,
custom-moulded sheath that slides over a video laryngoscope blade (ivosmedical.com: "a single-use, custom-molded video
laryngoscope sleeve ... compatible with existing video laryngoscope platforms"). Modelled on IVOS's own product image
(IVOS-Instrument.jpg): an upright ribbed cuff that takes the scope, curving down into a J-shaped blade; the integrated
suction / oxygen channel (Breathing Optimization and Suction System) runs down the side of the blade from a port at the
top; a clear camera window sits on the underside near the tip. Satin charcoal polymer like their render, the channel in
the logo teal #007b94, the cuff collar in their grey. Numpy sphere tracing of a swept rounded-rectangle along a planar
J curve. Saved with ALPHA (no ground of its own, DJ/DP). Usage: python3 render.py W H out.png [SS] [procs]"""
import sys, numpy as np
from multiprocessing import Pool
from PIL import Image

W = int(sys.argv[1]) if len(sys.argv) > 1 else 500
H = int(sys.argv[2]) if len(sys.argv) > 2 else 580
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = float(sys.argv[4]) if len(sys.argv) > 4 else 1.0
NP = int(sys.argv[5]) if len(sys.argv) > 5 else 4
FW, FH = W, H; W, H = int(W * SS), int(H * SS)

def nrm(v): return v / np.maximum(np.linalg.norm(v, axis=-1, keepdims=True), 1e-9)
def sm(a, b, x): t = np.clip((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t)

# ---------- the centreline: upright cuff, then a J-curve blade (object plane z = 0) ----------
pts = []
for y in np.linspace(1.05, 0.12, 120): pts.append((0.0, y))
R = 0.64
for th in np.linspace(0, np.radians(-112), 220)[1:]:
    pts.append((-R + R * np.cos(th), 0.12 + R * np.sin(th)))
P = np.array(pts)
t_end = P[-1] - P[-2]; t_end /= np.linalg.norm(t_end)
for k in range(1, 30): pts.append(tuple(P[-1] + t_end * k * 0.0075 + np.array([0, 1]) * (k * 0.0075) ** 2 * 0.9))
P = np.array(pts)
seg = np.linalg.norm(np.diff(P, axis=0), axis=1); S = np.concatenate([[0], np.cumsum(seg)]); L = S[-1]
T = np.gradient(P, axis=0); T /= np.linalg.norm(T, axis=1, keepdims=True)
N = np.stack([T[:, 1], -T[:, 0]], 1)          # right-hand normal: + is the convex (outer) side of the J
S_CUFF = 0.93                                  # arc length where the cuff meets the blade

# ---------- 2D field: nearest centreline sample for every grid cell ----------
GX0, GX1, GY0, GY1, GN = -1.25, 0.45, -0.75, 1.32, 1700
gx = np.linspace(GX0, GX1, GN); gy = np.linspace(GY0, GY1, int(GN * (GY1 - GY0) / (GX1 - GX0)))
GXX, GYY = np.meshgrid(gx, gy)
flat = np.stack([GXX.ravel(), GYY.ravel()], 1)
best = np.empty(len(flat), np.int64)
for a in range(0, len(flat), 40000):
    d = ((flat[a:a + 40000, None, :] - P[None, :, :]) ** 2).sum(-1); best[a:a + 40000] = d.argmin(1)
# refine: project onto the two segments either side of the nearest sample, so s and the offset are continuous (no facets)
def proj(i0):
    i0 = np.clip(i0, 0, len(P) - 2); A = P[i0]; B = P[i0 + 1]; AB = B - A
    u = np.clip(((flat - A) * AB).sum(1) / (AB * AB).sum(1), 0, 1); C = A + AB * u[:, None]
    return ((flat - C) ** 2).sum(1), S[i0] + u * (S[i0 + 1] - S[i0]), C, i0, u
d1, s1, c1, i1, u1 = proj(best - 1); d2, s2, c2, i2, u2 = proj(best)
use2 = d2 < d1
sv = np.where(use2, s2, s1); C = np.where(use2[:, None], c2, c1)
ii = np.where(use2, i2, i1); uu = np.where(use2, u2, u1)
Tl = T[ii] * (1 - uu[:, None]) + T[ii + 1] * uu[:, None]; Tl /= np.linalg.norm(Tl, axis=1, keepdims=True)
Nl = np.stack([Tl[:, 1], -Tl[:, 0]], 1)
V = flat - C
F_S = sv.reshape(GXX.shape)
F_N = (V * Nl).sum(1).reshape(GXX.shape)
V0 = flat - P[best]
AL = (V0 * T[best]).sum(1)
AL = np.where(best == 0, -AL, np.where(best == len(P) - 1, AL, -9.0)).reshape(GXX.shape)
GH, GW = GXX.shape
def lookup(F, x, y):
    fx = np.clip((x - GX0) / (GX1 - GX0) * (GW - 1), 0, GW - 1.001); fy = np.clip((y - GY0) / (GY1 - GY0) * (GH - 1), 0, GH - 1.001)
    ix = fx.astype(np.int64); iy = fy.astype(np.int64); u = fx - ix; v = fy - iy
    return (F[iy, ix] * (1 - u) * (1 - v) + F[iy, ix + 1] * u * (1 - v) + F[iy + 1, ix] * (1 - u) * v + F[iy + 1, ix + 1] * u * v)

def rrect(a, b, ha, hb, r):
    qa = np.abs(a) - ha + r; qb = np.abs(b) - hb + r
    return np.sqrt(np.maximum(qa, 0) ** 2 + np.maximum(qb, 0) ** 2) + np.minimum(np.maximum(qa, qb), 0) - r

def smin(a, b, k):
    h = np.clip(.5 + .5 * (b - a) / k, 0, 1); return b * (1 - h) + a * h - k * h * (1 - h)

# ---------- object pose ----------
def rot(ax, a):
    c, s = np.cos(a), np.sin(a)
    if ax == 'x': return np.array([[1, 0, 0], [0, c, -s], [0, s, c]])
    if ax == 'y': return np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]])
    return np.array([[c, -s, 0], [s, c, 0], [0, 0, 1]])
ROT = rot('z', np.radians(-9)) @ rot('y', np.radians(-34)) @ rot('x', np.radians(24))
CEN = -(ROT @ np.array([-0.40, 0.28, 0.0]))

def prof(s):
    """half thickness in plane (hn), half width out of plane (hz) along the arc length"""
    b = sm(S_CUFF - .05, S_CUFF + .55, s)
    tip = sm(L - .5, L, s)
    hn = .118 * (1 - b) + .052 * b - .022 * tip
    hz = .142 * (1 - b) + .128 * b - .02 * tip
    hn += .012 * (1 - sm(.0, .09, s))            # the collar at the top flares a touch
    return hn, hz

def scene(p, want_mat=False):
    q = (p - CEN) @ ROT                           # world -> object (ROT orthonormal; row-vector form)
    x, y, z = q[:, 0], q[:, 1], q[:, 2]
    s = lookup(F_S, x, y); n = lookup(F_N, x, y); al = lookup(AL, x, y)
    hn, hz = prof(s)
    hzc = hz * (1 - .16 * np.clip(n / hn, -1, 1) ** 2)          # gently convex faces, not a flat ribbon
    d = rrect(n, z, hn, hzc, np.minimum(hn, hzc) * .8)
    # ribs around the cuff (as on IVOS's render)
    rib = (s > .14) & (s < S_CUFF - .08)
    d = d + np.where(rib, .0038 * sm(.35, 1.0, np.cos(s * 2 * np.pi / .052) * .5 + .5), 0)
    d = np.where(al > -1, np.sqrt(np.maximum(d, 0) ** 2 + np.maximum(al, 0) ** 2) + np.minimum(np.maximum(d, al), 0), d)
    # the open cuff at the top that takes the video laryngoscope (a pocket ~0.3 deep, 2 mm walls)
    pocket = np.maximum(rrect(n, z, hn - .02, hzc - .02, np.minimum(hn, hzc) * .6), s - .3)
    d = np.maximum(d, -pocket)
    inpk = pocket > -.006
    # the BOSS channel: a tube down the +z face, on the outer edge, from above the cuff to near the tip
    tz = hz + .018; tn = hn * .38
    ct = np.sqrt((n - tn) ** 2 + (z - tz) ** 2) - .031
    cap_lo = s - (L - .12); ct = np.maximum(ct, cap_lo)
    # above the cuff the channel rises into a port (a straight continuation past the top end)
    py = y - 1.05; pr = np.sqrt((x + tn) ** 2 + (z - tz) ** 2)
    port = np.maximum(pr - .031 - .012 * sm(.07, .11, py) + .012 * sm(.17, .2, py), np.maximum(-py, py - .2))
    ct = np.where(py > 0, np.minimum(np.maximum(ct, py), port), ct)
    dd = smin(d, ct, .02)
    if not want_mat: return dd
    m = np.zeros(len(p), np.int64)                # 0 body
    m[ct < d + .004] = 1                          # 1 channel (teal)
    m[(s < .085) & (ct >= d)] = 2                 # 2 collar (grey)
    lens = (np.abs(s - (L - .3)) < .045) & (n < -hn * .6) & (np.abs(z) < hz * .55) & (ct >= d)
    m[lens] = 3                                   # 3 camera window
    m[(m != 1) & inpk & (s < .3) & (np.abs(n) < hn - .012)] = 4    # 4 inside the cuff
    return dd, m, s

# ---------- camera ----------
CAM = np.array([0, 0, 5.0]); FOV = np.radians(30)
def shade(rows):
    y0, y1 = rows
    js, is_ = np.meshgrid(np.arange(y0, y1), np.arange(W), indexing='ij')
    u = (is_ + .5) / W * 2 - 1; v = 1 - (js + .5) / H * 2
    asp = W / H; th = np.tan(FOV / 2)
    rd = nrm(np.stack([u * th * asp, v * th, -np.ones_like(u)], -1)).reshape(-1, 3)
    ro = np.broadcast_to(CAM, rd.shape).copy()
    t = np.full(len(rd), 3.4); hit = np.zeros(len(rd), bool); alive = np.ones(len(rd), bool)
    for _ in range(140):
        idx = np.nonzero(alive)[0]
        if not len(idx): break
        d = scene(ro[idx] + rd[idx] * t[idx, None])
        t[idx] += d * .8
        h = d < 4e-4; hit[idx[h]] = True; alive[idx[h]] = False
        alive[idx[t[idx] > 6.8]] = False
    col = np.zeros((len(rd), 3)); a = np.zeros(len(rd))
    idx = np.nonzero(hit)[0]
    if len(idx):
        p = ro[idx] + rd[idx] * t[idx, None]
        e = 6e-4
        nn = nrm(np.stack([scene(p + [e, 0, 0]) - scene(p - [e, 0, 0]), scene(p + [0, e, 0]) - scene(p - [0, e, 0]), scene(p + [0, 0, e]) - scene(p - [0, 0, e])], -1))
        _, m, s = scene(p, True)
        vv = -rd[idx]
        ao = np.ones(len(idx))
        for k, hh in enumerate([.015, .04, .08, .14]):
            ao -= (hh - scene(p + nn * hh)) * (1.6 / (k + 1));
        ao = np.clip(ao, .25, 1)
        alb = np.where(m[:, None] == 1, [.012, .19, .24], np.where(m[:, None] == 2, [.30, .32, .33], np.where(m[:, None] == 3, [.01, .015, .018], np.where(m[:, None] == 4, [.006, .007, .008], [.03, .034, .037]))))
        rough = np.where(m == 1, .2, np.where(m == 2, .42, np.where(m == 3, .05, .3)))
        lights = [(nrm(np.array([-.55, .75, .55])), np.array([1.0, .98, .95]) * 3.4),   # key softbox, upper left front
                  (nrm(np.array([.85, .15, .35])), np.array([.75, .9, 1.0]) * .55),     # cool fill from the right
                  (nrm(np.array([.55, .35, -.8])), np.array([.35, .85, .95]) * 4.0)]    # teal rim from behind
        c = np.zeros((len(idx), 3))
        F0 = np.where(m == 3, .06, .04)
        fall = (.55 + .45 * sm(-1.0, .9, p[:, 1]))[:, None]
        for li, (ld, lc) in enumerate(lights):
            lc = lc * (fall if li == 0 else 1)
            ndl = np.clip((nn * ld).sum(1), 0, 1)
            hv = nrm(ld + vv); ndh = np.clip((nn * hv).sum(1), 0, 1)
            a2 = rough ** 4; D = a2 / (np.pi * ((ndh ** 2) * (a2 - 1) + 1) ** 2)
            ndv = np.clip((nn * vv).sum(1), 1e-3, 1)
            fr = F0 + (1 - F0) * (1 - np.clip((hv * vv).sum(1), 0, 1)) ** 5
            k = (rough + 1) ** 2 / 8; G = ndv / (ndv * (1 - k) + k) * ndl / (ndl * (1 - k) + k)
            spec = D * fr * G / (4 * ndv * np.maximum(ndl, 1e-3) + 1e-4)
            c += (alb / np.pi * ndl[:, None] + np.minimum(spec, 30)[:, None]) * lc
        # a soft studio environment: brighter above, a long softbox band reflected across the curve
        rv = 2 * (nn * vv).sum(1, keepdims=True) * nn - vv
        ndv = np.clip((nn * vv).sum(1), 0, 1); fres = .04 + .96 * (1 - ndv) ** 5
        env = (.10 + .5 * sm(-.2, .9, rv[:, 1]))[:, None] * np.array([.75, .88, .92])
        band = (np.exp(-((rv[:, 0] + .35) / .22) ** 2) * sm(-.1, .5, rv[:, 1]) + .55 * np.exp(-((rv[:, 0] - .55) / .16) ** 2) * sm(-.3, .3, rv[:, 1])) * np.where(m == 1, 1.3, 1.1)
        c += (env * .55 + band[:, None] * np.array([1.0, 1.0, 1.0]) * 2.6) * ((.05 + fres) * (1 - rough) * 1.7)[:, None] + alb * .25
        c *= ao[:, None]
        # the camera window: a faint cool glint deep in the glass ("when seconds matter, view matters")
        c += np.where(m[:, None] == 3, np.array([.12, .5, .6]) * .35, 0)
        col[idx] = c; a[idx] = 1
    return y0, col.reshape(y1 - y0, W, 3), a.reshape(y1 - y0, W)

if __name__ == '__main__':
    bands = [(i, min(H, i + 24)) for i in range(0, H, 24)]
    img = np.zeros((H, W, 3)); al = np.zeros((H, W))
    with Pool(NP) as pool:
        for y0, c, a in pool.imap_unordered(shade, bands):
            img[y0:y0 + c.shape[0]] = c; al[y0:y0 + c.shape[0]] = a
    img = img * 1.7; img = img / (1 + img)            # exposure, Reinhard
    img = np.clip(img, 0, 1) ** (1 / 2.2)
    rgba = np.dstack([img, al])
    im = Image.fromarray((rgba * 255 + .5).astype(np.uint8), 'RGBA')
    if SS != 1: im = im.resize((FW, FH), Image.LANCZOS)
    im.save(OUT); print('wrote', OUT, im.size)
