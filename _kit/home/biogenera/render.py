#!/usr/bin/env python3
"""Biogenera hero (HOME_BRIEF update 2c: a crafted render of the real mechanism). An anti-gene PNA (Ag-PNA) at work,
as biogenera.com/mygenera describes it: a short PNA strand binds one strand of the opened DNA of the target gene,
blocking its transcription. B-DNA built from standard helix geometry (3.38 A rise, 10.5 bp per turn, backbones ~9 A
from the axis, minor-groove offset); over ten base pairs the second DNA strand is displaced outward and the PNA
(Biogenera red) pairs with the first strand in its place. Pearl DNA backbone with phosphate beads, base-pair slabs,
glossy red PNA. Numpy triangle rasteriser with z-buffer, key/fill/rim light, depth occlusion, 2x SS, real alpha (DJ).
Usage: python3 render.py out.png [W] [tilt_deg] [pitch_deg] [spin_deg]"""
import sys, math
import numpy as np
from PIL import Image, ImageFilter
OUT = sys.argv[1] if len(sys.argv) > 1 else 'hero.png'
OW = int(sys.argv[2]) if len(sys.argv) > 2 else 1400
TILT = float(sys.argv[3]) if len(sys.argv) > 3 else 34
PITCH = float(sys.argv[4]) if len(sys.argv) > 4 else 18
SPIN = float(sys.argv[5]) if len(sys.argv) > 5 else 0
SS = 2
NBP = 34; RISE = 3.38; TW = 2 * math.pi / 10.5; RB = 8.9; OFF = math.radians(150)
I0, I1 = 12, 22            # PNA-bound stretch (base pairs I0..I1-1)
def bump(i):              # 0..1 across the opened stretch, eased at both ends
    a, b = I0 - 2.5, I1 + 1.5
    if i <= a or i >= b: return 0.0
    x = (i - a) / (b - a); return math.sin(math.pi * x) ** 2
def bpos(i, strand, r=RB):
    th = SPIN * math.pi / 180 + i * TW + (OFF if strand else 0)
    return np.array([r * math.cos(th), r * math.sin(th), i * RISE])
def strand_pts(strand, n=8, rfun=None):
    out = []
    for k in range(int((NBP - 1) * n) + 1):
        i = k / n; r = RB if rfun is None else rfun(i)
        th = SPIN * math.pi / 180 + i * TW + (OFF if strand else 0)
        out.append([r * math.cos(th), r * math.sin(th), i * RISE])
    return np.array(out)
# displaced strand swings out from the axis over the PNA stretch, and the PNA sits slightly inside the old track
S1 = strand_pts(0)
S2 = strand_pts(1, rfun=lambda i: RB + 8.5 * bump(i))
PNA = []
for k in range((I1 - I0 - 1) * 8 + 1):
    i = I0 + k / 8; th = SPIN * math.pi / 180 + i * TW + OFF - math.radians(8)
    PNA.append([(RB - 0.6) * math.cos(th), (RB - 0.6) * math.sin(th), i * RISE])
PNA = np.array(PNA)
verts = []; norms = []; cols = []; tris = []; kind = []
SIDES = 14; th_ = np.linspace(0, 2 * np.pi, SIDES, endpoint=False)
PEARL = np.array([0.80, 0.79, 0.84]); BASE = np.array([0.66, 0.63, 0.74]); BASE2 = np.array([0.56, 0.58, 0.66]); RED = np.array([0.86, 0.04, 0.12]); RBASE = np.array([0.95, 0.42, 0.46])
def frames(S):
    T = np.gradient(S, axis=0); T /= np.linalg.norm(T, axis=1, keepdims=True)
    ref = np.array([0, 0, 1.0]); N = np.cross(T, ref); bad = np.linalg.norm(N, axis=1) < 1e-3; N[bad] = np.cross(T[bad], [1, 0, 0])
    N /= np.linalg.norm(N, axis=1, keepdims=True); B = np.cross(T, N); return N, B
def add_tube(S, r, col, k):
    N, B = frames(S); base = len(verts)
    for i in range(len(S)):
        for t in th_:
            n = N[i] * math.cos(t) + B[i] * math.sin(t)
            verts.append(S[i] + r * n); norms.append(n); cols.append(col); kind.append(k)
    for i in range(len(S) - 1):
        for j in range(SIDES):
            a = base + i * SIDES + j; b = base + i * SIDES + (j + 1) % SIDES
            tris.append((a, b, a + SIDES)); tris.append((b, b + SIDES, a + SIDES))
def add_sphere(c, r, col, k, nu=18, nv=12):
    base = len(verts)
    for i in range(nv + 1):
        ph = math.pi * i / nv
        for j in range(nu):
            t = 2 * math.pi * j / nu
            n = np.array([math.sin(ph) * math.cos(t), math.cos(ph), math.sin(ph) * math.sin(t)])
            verts.append(c + r * n); norms.append(n); cols.append(col); kind.append(k)
    for i in range(nv):
        for j in range(nu):
            a = base + i * nu + j; b = base + i * nu + (j + 1) % nu
            tris.append((a, b, a + nu)); tris.append((b, b + nu, a + nu))
def add_slab(p, q, w, h, col, k, n=12):
    """a rounded flat slab (an elliptical cylinder) from p to q: a base pair seen as a plate"""
    d = q - p; L = np.linalg.norm(d); d /= L
    ax = np.array([0, 0, 1.0]); u = np.cross(d, ax); u /= np.linalg.norm(u) + 1e-9; v = np.cross(d, u)
    base = len(verts)
    for e in (p, q):
        for j in range(n):
            t = 2 * math.pi * j / n
            nn = u * math.cos(t) / w + v * math.sin(t) / h; nn /= np.linalg.norm(nn)
            verts.append(e + u * w * math.cos(t) + v * h * math.sin(t)); norms.append(nn); cols.append(col); kind.append(k)
    for j in range(n):
        a = base + j; b = base + (j + 1) % n
        tris.append((a, b, a + n)); tris.append((b, b + n, a + n))
    for e, s in ((p, -1), (q, 1)):
        add_sphere(e, 0.0001, col, k, 3, 2)
add_tube(S1, 1.55, PEARL, 0); add_tube(S2, 1.55, PEARL, 0); add_tube(PNA, 1.65, RED, 2)
for i in range(NBP):
    a = bpos(i, 0); add_sphere(a, 1.85, PEARL, 0)
    r2 = RB + 8.5 * bump(i); b = bpos(i, 1, r2); add_sphere(b, 1.85, PEARL, 0)
    inv = I0 <= i < I1
    if inv:
        th = SPIN * math.pi / 180 + i * TW + OFF - math.radians(8); c = np.array([(RB - .6) * math.cos(th), (RB - .6) * math.sin(th), i * RISE])
        add_sphere(c, 1.95, RED, 2)
        m = a + (c - a) * 0.5
        add_slab(a + (c - a) * .16, m, 1.75, 0.6, BASE, 1); add_slab(m, c - (c - a) * .16, 1.75, 0.6, RBASE, 3)
        # the displaced strand's bases: short stubs pointing back toward the axis
        ax_ = np.array([0, 0, i * RISE]); add_slab(b + (ax_ - b) * .1, b + (ax_ - b) * .34, 1.5, 0.55, BASE, 1)
    else:
        m = a + (b - a) * .5; B2 = BASE2 if i % 3 else BASE
        add_slab(a + (b - a) * .16, m, 1.75, 0.6, BASE, 1); add_slab(m, b - (b - a) * .16, 1.75, 0.6, B2, 1)
V = np.array(verts, float); N = np.array(norms, float); C = np.array(cols, float); TR = np.array(tris); KIND = np.array(kind)
V[:, 2] -= (NBP - 1) * RISE / 2
# orientation: helix axis (z) laid into the picture plane, tipped by PITCH toward the viewer, then tilted TILT degrees
def rot(ax, a):
    c, s = math.cos(a), math.sin(a)
    return {'x': np.array([[1,0,0],[0,c,-s],[0,s,c]]), 'y': np.array([[c,0,s],[0,1,0],[-s,0,c]]), 'z': np.array([[c,-s,0],[s,c,0],[0,0,1]])}[ax]
R0 = np.array([[0, 0, 1.0], [1, 0, 0], [0, 1, 0]])          # z -> screen x
R = rot('z', math.radians(-TILT)) @ rot('y', math.radians(PITCH)) @ R0
V = V @ R.T; N = N @ R.T
V[:, 1] *= -1; N[:, 1] *= -1
mn = V[:, :2].min(0) - 3.0; mx = V[:, :2].max(0) + 3.0
sc = OW * SS / (mx[0] - mn[0]); W = int(OW * SS); Hh = int((mx[1] - mn[1]) * sc)
X = (V[:, 0] - mn[0]) * sc; Y = (V[:, 1] - mn[1]) * sc; Z = V[:, 2]
zb = np.full((Hh, W), 1e9); nb = np.zeros((Hh, W, 3)); cb = np.zeros((Hh, W, 3)); lim = np.zeros((Hh, W))
for (a, b, c) in TR:
    xs = np.array([X[a], X[b], X[c]]); ys = np.array([Y[a], Y[b], Y[c]])
    x0, x1 = int(max(0, math.floor(xs.min()))), int(min(W - 1, math.ceil(xs.max())))
    y0, y1 = int(max(0, math.floor(ys.min()))), int(min(Hh - 1, math.ceil(ys.max())))
    if x1 < x0 or y1 < y0: continue
    den = (ys[1] - ys[2]) * (xs[0] - xs[2]) + (xs[2] - xs[1]) * (ys[0] - ys[2])
    if abs(den) < 1e-9: continue
    gx, gy = np.meshgrid(np.arange(x0, x1 + 1) + .5, np.arange(y0, y1 + 1) + .5)
    l0 = ((ys[1] - ys[2]) * (gx - xs[2]) + (xs[2] - xs[1]) * (gy - ys[2])) / den
    l1 = ((ys[2] - ys[0]) * (gx - xs[2]) + (xs[0] - xs[2]) * (gy - ys[2])) / den
    l2 = 1 - l0 - l1
    m = (l0 >= -1e-6) & (l1 >= -1e-6) & (l2 >= -1e-6)
    if not m.any(): continue
    z = l0 * Z[a] + l1 * Z[b] + l2 * Z[c]
    sub = zb[y0:y1+1, x0:x1+1]; m &= z < sub
    if not m.any(): continue
    sub[m] = z[m]
    n = l0[..., None] * N[a] + l1[..., None] * N[b] + l2[..., None] * N[c]
    nb[y0:y1+1, x0:x1+1][m] = n[m]
    cb[y0:y1+1, x0:x1+1][m] = (l0[..., None] * C[a] + l1[..., None] * C[b] + l2[..., None] * C[c])[m]
    lim[y0:y1+1, x0:x1+1][m] = KIND[a]
cov = zb < 1e8
nb /= np.linalg.norm(nb, axis=2, keepdims=True) + 1e-9
nb[cov & (nb[..., 2] > 0)] *= -1
def nl(v): v = np.array(v, float); return v / np.linalg.norm(v)
K1 = nl([-0.5, -0.75, -0.6]); K2 = nl([0.85, 0.2, -0.45]); Vd = np.array([0, 0, -1.0])
d1 = np.clip((nb * K1).sum(2), 0, 1); d2 = np.clip((nb * K2).sum(2), 0, 1)
hv = nl(K1 + Vd); spec = np.clip((nb * hv).sum(2), 0, 1)
rim = np.clip(1 - np.abs(nb[..., 2]), 0, 1) ** 3
zf = np.where(cov, zb, np.nan); zmax = np.nanmax(zf); zmin = np.nanmin(zf)
zn = np.where(cov, (zb - zmin) / (zmax - zmin), 1.0)
zbl = np.asarray(Image.fromarray((zn * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(9 * SS)), float) / 255
ao = np.clip(1 - 2.4 * np.clip(zn - zbl, 0, 1), 0.35, 1)
depth = 1 - 0.5 * zn
shade = (0.18 + 0.86 * d1 + 0.24 * d2) * ao
col = cb * shade[..., None] * depth[..., None]
red = (lim > 1.5)
gloss = np.where(red, 0.75 * spec ** 50 + 0.18 * spec ** 8, 0.42 * spec ** 36 + 0.06 * spec ** 6)
col += gloss[..., None]
col += (rim * 0.24 * depth)[..., None] * np.where(red[..., None], np.array([1.0, 0.55, 0.58]), np.array([0.72, 0.70, 0.86]))
col = np.clip(col, 0, 1)
# the helix runs on out of the dark at both ends: alpha eases in along the screen axis (no cut ends)
gy_, gx_ = np.mgrid[0:Hh, 0:W]; ca, sa = math.cos(math.radians(TILT)), math.sin(math.radians(TILT))
u = gx_ * ca + gy_ * sa; uc = u[cov]; u = (u - uc.min()) / (uc.max() - uc.min())
def ss(e0, e1, x): x = np.clip((x - e0) / (e1 - e0), 0, 1); return x * x * (3 - 2 * x)
fade = ss(0.0, 0.2, u) * ss(1.0, 0.8, u)
rgba = np.dstack([col, cov.astype(float) * fade])
img = Image.fromarray((rgba * 255).astype(np.uint8), 'RGBA').resize((W // SS, Hh // SS), Image.LANCZOS)
pc = V[KIND == 2][:, :2].mean(0); print('PX PY', round((pc[0] - mn[0]) * sc / W, 3), round((pc[1] - mn[1]) * sc / Hh, 3), 'aspect W/H', round(W / Hh, 4))
img.save(OUT); print('saved', OUT, img.size, 'tris', len(TR))
