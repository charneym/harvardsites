#!/usr/bin/env python3
"""LoxiGen hero (HOME_BRIEF update 2c: a crafted render of the real mechanism). A collagen fibre: a twisted bundle of
D-banded collagen fibrils, the extracellular-matrix scaffold that lysyl oxidase (LOX) crosslinks and stiffens around
desmoplastic tumours (loxigen.com/therapeutic-areas, /cancer). The fibrils fray apart at both ends so the fibre reads as
a whole object; small green nodes between neighbouring fibrils are the LOX-made crosslinks. Fibrils in a cool silver
lit by the logo's blue #1b4fd6, crosslinks in the logo's green #6cbd45. Numpy sphere tracing; saved with ALPHA (no
ground of its own, DJ). Usage: python3 render.py W H out.png [SS] [procs]"""
import sys, numpy as np
from multiprocessing import Pool
from PIL import Image

W = int(sys.argv[1]) if len(sys.argv) > 1 else 500
H = int(sys.argv[2]) if len(sys.argv) > 2 else 600
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = float(sys.argv[4]) if len(sys.argv) > 4 else 1.0
NP = int(sys.argv[5]) if len(sys.argv) > 5 else 4
FW, FH = W, H; W, H = int(W * SS), int(H * SS)

def nrm(v): return v / np.linalg.norm(v, axis=-1, keepdims=True)
rng = np.random.default_rng(6403)

# ---------- the fibre: N fibrils in sunflower packing, twisted, fraying at both ends ----------
N = 48; RB = 0.52; GA = np.pi * (3 - np.sqrt(5))
RI = RB * np.sqrt((np.arange(N) + 0.5) / N); TI = np.arange(N) * GA
RF = 0.06                       # fibril radius (centre spacing ~0.15, so a visible gap)
TAU = 0.42                       # twist, rad per unit length
YE = 1.55 + 0.55 * rng.random(N)  # top ends
YS = -(1.45 + 0.6 * rng.random(N))  # bottom ends
OA = rng.random(N) * 2 * np.pi   # each fibril's own splay direction
OK = 0.15 + 0.25 * rng.random(N)
PER = 0.064                      # D-period along the fibril
def fray(y):
    a = np.maximum(np.abs(y) - 0.95, 0); return a * a
def centre(i, y):
    """centre (x, z) of fibril(s) i at height(s) y (broadcast)"""
    f = fray(y); th = TI[i] + TAU * y
    r = RI[i] * (1 + 1.25 * f) + 0.04 * f
    x = r * np.cos(th) + OK[i] * f * np.cos(OA[i] + 0.8 * y)
    z = r * np.sin(th) + OK[i] * f * np.sin(OA[i] + 0.8 * y)
    return x, z
def band(y):
    ph = (y / PER) % 1.0
    gap = np.clip(1 - np.abs(ph - 0.30) / 0.2, 0, 1) ** 1.5          # the gap zone: a broad shallow groove
    sub = 0.5 + 0.5 * np.cos(ph * 2 * np.pi * 4)                 # fine sub-bands across the overlap zone
    return gap, sub

# crosslinks between neighbouring fibrils (centre distance at y=0 small), at random heights in the intact middle
LX = []
for i in range(N):
    for j in range(i + 1, N):
        xi, zi = centre(i, 0.0); xj, zj = centre(j, 0.0)
        if np.hypot(xi - xj, zi - zj) < 0.16:
            for k in range(rng.integers(1, 3)):
                y = rng.uniform(-1.0, 1.0)
                LX.append((i, j, y))
LX = np.array(LX)
LI_, LJ_, LY_ = LX[:, 0].astype(int), LX[:, 1].astype(int), LX[:, 2]
cxi, czi = centre(LI_, LY_); cxj, czj = centre(LJ_, LY_)
LP = np.stack([(cxi + cxj) / 2, LY_, (czi + czj) / 2], 1)       # local positions
LR = 0.036

LEAN = np.radians(-30); TILT = np.radians(16)
cz_, sz_ = np.cos(LEAN), np.sin(LEAN); cx_, sx_ = np.cos(TILT), np.sin(TILT)
RZ = np.array([[cz_, -sz_, 0], [sz_, cz_, 0], [0, 0, 1.0]]); RX = np.array([[1.0, 0, 0], [0, cx_, -sx_], [0, sx_, cx_]])
ROT = RZ @ RX
def to_local(p): return p @ ROT

def sdf(p, want=False):
    q = to_local(p)
    x, y, z = q[:, 0:1], q[:, 1:2], q[:, 2:3]
    ii = np.arange(N)[None, :]
    yc = np.clip(y, YS[None, :], YE[None, :])
    cx, cz = centre(ii, yc)
    gap, sub = band(yc)
    # taper over the last 0.14 of each end
    tp = np.clip(np.minimum(YE[None, :] - yc, yc - YS[None, :]) / 0.14, 0, 1)
    rad = RF * (1 - 0.035 * gap + 0.008 * sub) * (0.55 + 0.45 * tp)
    d = np.sqrt((x - cx) ** 2 + (z - cz) ** 2 + (y - yc) ** 2) - rad
    k = np.argmin(d, 1); df = d[np.arange(len(q)), k]
    # crosslink nodes
    dl = np.sqrt(((q[:, None, :] - LP[None, :, :]) ** 2).sum(2)) - LR
    kl = np.argmin(dl, 1); dlm = dl[np.arange(len(q)), kl]
    out = np.minimum(df, dlm)
    if want: return out, dict(q=q, k=k, link=dlm < df, df=df)
    return out

CAM = np.array([0.0, 0.3, -8.2]); TGT = np.array([0.0, 0.0, 0.0]); FOV = 34.0
fw = nrm(TGT - CAM); rt = nrm(np.cross(np.array([0, 1.0, 0]), fw)); up = np.cross(fw, rt)
TH = np.tan(np.radians(FOV / 2))
BR = 2.45  # bounding sphere radius around the origin

def march(O, Dd, t, tmax, steps=170, eps=6e-4):
    hit = np.zeros(len(Dd), bool); act = np.where(t < tmax)[0]
    for s in range(steps):
        if len(act) == 0: break
        p = O + Dd[act] * t[act, None]
        d = sdf(p)
        h = d < eps
        hit[act[h]] = True
        t[act] += np.maximum(d, eps) * 0.7
        keep = (~h) & (t[act] < tmax[act])
        act = act[keep]
    return t, hit

def render_rows(rows):
    r0, r1 = rows
    ys, xs = np.mgrid[r0:r1, 0:W]
    u = ((xs + .5) / W * 2 - 1) * TH * (W / H); v = (1 - (ys + .5) / H * 2) * TH
    D = nrm(u[..., None] * rt + v[..., None] * up + fw).reshape(-1, 3)
    n = len(D)
    b = (CAM[None, :] * D).sum(1); c = (CAM ** 2).sum() - BR * BR; disc = b * b - c
    t = np.where(disc > 0, -b - np.sqrt(np.maximum(disc, 0)), 1e9); tmax = np.where(disc > 0, -b + np.sqrt(np.maximum(disc, 0)), 0)
    T, hit = march(CAM, D, t.copy(), tmax)
    img = np.zeros((n, 4))
    hi = np.where(hit)[0]
    if len(hi) == 0: return img.reshape(r1 - r0, W, 4)
    P = CAM + D[hi] * T[hi, None]
    e = 6e-4
    Nn = nrm(np.stack([sdf(P + [e, 0, 0]) - sdf(P - [e, 0, 0]), sdf(P + [0, e, 0]) - sdf(P - [0, e, 0]), sdf(P + [0, 0, e]) - sdf(P - [0, 0, e])], 1) + 1e-9)
    _, info = sdf(P, want=True)
    q = info['q']; link = info['link']; k = info['k']
    ao = np.zeros(len(P))
    for i, hgt in enumerate([.01, .025, .05, .09, .15]):
        ao += (hgt - np.minimum(sdf(P + Nn * hgt), hgt)) / hgt * (0.8 ** i)
    ao = np.clip(1 - ao / 2.6, 0, 1)
    Lk = nrm(np.array([0.7, 0.85, -0.6]))
    sh = np.ones(len(P)); ts = np.full(len(P), .02); act = np.arange(len(P))
    for s in range(40):
        if len(act) == 0: break
        d = sdf(P[act] + Nn[act] * 2e-3 + Lk * ts[act, None])
        sh[act] = np.minimum(sh[act], np.clip(8 * d / ts[act], 0, 1))
        ts[act] += np.clip(d, .006, .12)
        act = act[(sh[act] > .03) & (ts[act] < 2.2)]
    sh = sh * sh * (3 - 2 * sh)
    # albedo: cool ivory-silver fibrils with the D-banding; per-fibril tone
    gap, sub = band(q[:, 1])
    tone = 0.9 + 0.2 * ((k * 0.618) % 1.0)
    base = np.array([0.70, 0.75, 0.84])
    alb = base[None, :] * (tone * (1 - 0.26 * gap) * (0.96 + 0.04 * sub))[:, None]
    green = np.array([0.42, 0.74, 0.27])
    alb[link] = green
    V = -D[hi]
    wrap = np.clip((Nn @ Lk + 0.3) / 1.3, 0, 1)
    rimdir = nrm(np.array([-0.6, 0.2, 1.0]))
    rim = np.clip(Nn @ rimdir, 0, 1) ** 2
    fres = (1 - np.clip((Nn * V).sum(1), 0, 1)) ** 3
    Hh = nrm(Lk + V); spec = np.clip((Nn * Hh).sum(1), 0, 1) ** 60 * 0.45
    blue = np.array([0.11, 0.31, 0.84])
    col = alb * (np.array([1.0, 0.97, 0.94]) * wrap[:, None] * sh[:, None] * 1.15 + 0.07 * ao[:, None]
                 + np.array([0.25, 0.35, 0.75]) * 0.18 * ao[:, None] * np.clip(Nn @ nrm(np.array([-0.8, -0.2, -0.5])), 0, 1)[:, None])
    col += (rim * 0.55 + fres * 0.25)[:, None] * blue[None, :] * ao[:, None] * 1.4
    col += (spec * sh)[:, None]
    col[link] = col[link] * 0.8 + green * 0.6        # the crosslinks glow faintly
    # depth: the far side and the deepest gaps sink into the ink
    col *= (0.35 + 0.65 * ao)[:, None]
    col = col / (1 + col * .2) * 1.12
    col = np.clip(col, 0, 1) ** (1 / 1.05)
    col = np.clip(col + (np.random.default_rng(r0).random((len(hi), 1)) - .5) * .012, 0, 1)
    img[hi, :3] = col
    # the frayed tips dissolve gently into the ground (alpha), never on a line
    ly = np.abs(q[:, 1]); a = np.clip((2.12 - ly) / 0.5, 0, 1)
    img[hi, 3] = a * a * (3 - 2 * a)
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
    print('wrote', OUT, im.size, 'links', len(LP))
