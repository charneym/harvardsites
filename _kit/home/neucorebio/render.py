#!/usr/bin/env python3
"""Neucore Bio hero (HOME_BRIEF update 2c: a crafted render of the firm's own subject). Their platform is engineered
fibroblast-derived extracellular vesicles (exosomes): nanoscale lipid-bilayer vesicles that carry proteins, lipids and
genetic material between cells (neucorebio.com; NIH STTR 1R41TR005758). A cutaway molecular render in the PDB-101
manner: a coarse-grained lipid bilayer sphere (head groups in the logo indigo, cream acyl tails exposed on the cut
faces), tetraspanin-like and taller membrane proteins in the logo mint with short glycan trees, and RNA strands and
soluble proteins inside the lumen. Rasterised sphere impostors with a shadow map, screen-space and per-atom ambient
occlusion, a cool rim and depth haze toward the page ink. Saved with ALPHA (DJ). Usage: python3 render.py W H out [SS]"""
import sys, numpy as np
from PIL import Image
from scipy.spatial import cKDTree
W = int(sys.argv[1]) if len(sys.argv) > 1 else 700
H = int(sys.argv[2]) if len(sys.argv) > 2 else 700
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 2
FW, FH = W, H; W, H = W * SS, H * SS
rng = np.random.default_rng(11)
def nrm(v): return v / np.linalg.norm(v, axis=-1, keepdims=True)

COL = {'head': (0.33, 0.36, 0.64), 'head2': (0.27, 0.30, 0.55), 'tail': (0.86, 0.80, 0.64),
       'mp': (0.50, 0.77, 0.66), 'mp2': (0.38, 0.66, 0.60), 'gly': (0.80, 0.84, 0.90),
       'rna': (0.84, 0.82, 0.93), 'cp': (0.62, 0.82, 0.74), 'cp2': (0.47, 0.56, 0.80)}
R_OUT, R_IN = 60.0, 52.5            # outer / inner head-group shells (bilayer ~ 9 units, vesicle ~ 130 across)
CUTV = nrm(np.array([1.0, 0.62, 1.0]))   # the removed octant (x>0, y>0, z>0) faces this way; camera looks down it
def keep_cut(P, m=0.0):
    return ~((P[:, 0] > -m) & (P[:, 1] > -m) & (P[:, 2] > -m))

parts = []   # arrays of x y z r R G B
def add(P, r, c, jit=0.05):
    P = np.atleast_2d(P); n = len(P)
    rr = np.full(n, r) if np.isscalar(r) else r
    cc = np.tile(np.array(c, float), (n, 1)) * (1 + rng.uniform(-jit, jit, (n, 1)))
    parts.append(np.column_stack([P, rr, cc]))

def fib(n, rad):
    i = np.arange(n) + 0.5; phi = np.arccos(1 - 2 * i / n); th = np.pi * (1 + 5 ** 0.5) * i
    P = np.column_stack([np.cos(th) * np.sin(phi), np.sin(th) * np.sin(phi), np.cos(phi)])
    P = nrm(P + rng.normal(0, 0.18 / rad * 1.9, P.shape))
    return P * rad

# ---------------- membrane proteins: positions first, so lipids under them can be cleared ----------------
NPROT = 46
D = nrm(rng.normal(size=(NPROT * 6, 3)))
D = D[keep_cut(D * R_OUT, 10.0)]
sel = [D[0]]
for d in D[1:]:
    if len(sel) >= NPROT: break
    if np.min(np.linalg.norm(np.array(sel) - d, axis=1)) * R_OUT > 13: sel.append(d)
PD = np.array(sel)
kind = rng.random(len(PD))           # <0.62 tetraspanin-like, else a taller receptor

def frame(n):
    a = np.array([0, 0, 1.0]) if abs(n[2]) < 0.9 else np.array([1.0, 0, 0])
    u = nrm(np.cross(n, a)); v = np.cross(n, u); return u, v

def blob(centres, radii, seed, step=1.15, shell=1.7, noise=0.9):
    """Granular protein surface: grid points inside a union of ellipsoids (local frame), keeping a shell."""
    lo = (centres - radii).min(0) - 2; hi = (centres + radii).max(0) + 2
    g = [np.arange(lo[k], hi[k], step) for k in range(3)]
    P = np.stack(np.meshgrid(*g, indexing='ij'), -1).reshape(-1, 3)
    P = P + rng.uniform(-0.35, 0.35, P.shape) * step
    r2 = np.random.default_rng(seed); G = r2.normal(size=(4, 3)); Ph = r2.random(4) * 6.28
    nz = sum(np.sin(P @ G[k] * (0.35 + 0.15 * k) + Ph[k]) / (1 + k) for k in range(4)) * noise / 2
    d = np.min([(np.linalg.norm((P - c) / r, axis=-1) - 1) * r.min() for c, r in zip(centres, radii)], axis=0) + nz
    return P[(d < 0) & (d > -shell)]

clear = []
for j, n in enumerate(PD):
    u, v = frame(n); base = n * R_OUT
    tall = kind[j] >= 0.76
    if not tall:   # tetraspanin-like: four short helices in the membrane and a mushroom-shaped large extracellular loop
        h = rng.uniform(4.5, 6.5)
        C = np.array([[0, 0, 1.2], [1.4, 0.4, h * 0.62], [-1.2, -0.3, h * 0.72], [0.2, 1.3, h]])
        Rr = np.array([[2.6, 2.6, 2.2], [2.4, 2.0, 2.0], [2.2, 2.4, 1.9], [2.0, 2.0, 1.6]]) * rng.uniform(0.9, 1.15)
        col = COL['mp']
    else:          # taller single-pass receptor: stalk and a lobed head
        h = rng.uniform(8.5, 11.5)
        C = np.array([[0, 0, 1.0], [0.3, 0.2, h * 0.35], [0.6, -0.2, h * 0.65], [1.8, 0.8, h], [-1.4, -0.6, h * 0.95]])
        Rr = np.array([[1.6, 1.6, 2.4], [1.3, 1.3, 3.4], [1.5, 1.5, 3.0], [3.0, 2.6, 2.6], [2.6, 2.4, 2.4]]) * rng.uniform(0.9, 1.1)
        col = COL['mp2']
    th = rng.uniform(0, 6.28); ct, st = np.cos(th), np.sin(th)
    L = blob(C, Rr, 100 + j)
    L[:, :2] = L[:, :2] @ np.array([[ct, st], [-st, ct]])
    tilt = rng.normal(0, 0.12, 2)
    Pw = base + L[:, :1] * u + L[:, 1:2] * v + L[:, 2:3] * nrm(n + tilt[0] * u + tilt[1] * v)
    shade = 1 + 0.10 * np.clip(L[:, 2:3] / h, 0, 1)
    add(Pw, rng.uniform(0.75, 1.0, len(Pw)), np.array(col))
    parts[-1][:, 4:7] *= shade
    clear.append((n, 3.2 if not tall else 2.6))
    # glycans: short branched trees of pale sugar beads from the top
    if rng.random() < (0.5 if tall else 0.22):
        top = L[np.argmax(L[:, 2])].copy()
        for b in range(rng.integers(1, 3)):
            p = top.copy(); dvec = nrm(np.array([rng.normal(0, .6), rng.normal(0, .6), 1.0])); beads = []
            for k in range(rng.integers(4, 8)):
                dvec = nrm(dvec + rng.normal(0, 0.45, 3)); dvec[2] = abs(dvec[2]) * 0.8 + 0.2; p = p + dvec * 1.15
                p[:2] = p[:2] @ np.array([[ct, st], [-st, ct]]) if k == 0 and False else p[:2]
                beads.append(p.copy())
                if k == 2 and rng.random() < .6:
                    q = p + nrm(np.cross(dvec, [0, 0, 1.0]) + dvec) * 1.15; beads.append(q); beads.append(q + nrm(dvec + rng.normal(0, .5, 3)) * 1.1)
            B = np.array(beads)
            B[:, :2] = B[:, :2] @ np.array([[ct, st], [-st, ct]])
            add(base + B[:, :1] * u + B[:, 1:2] * v + B[:, 2:3] * n, 0.62, COL['gly'], 0.04)

# ---------------- lipid bilayer ----------------
def leaflet(rad, spacing, colA, colB, outward):
    n = int(4 * np.pi * rad * rad / (spacing * spacing))
    P = fib(n, rad)
    dirs = nrm(P)
    ok = keep_cut(P)
    for cn, cr in clear:
        ok &= np.linalg.norm(dirs - cn, axis=1) * rad > cr
    P = P[ok]; dirs = dirs[ok]
    mix = rng.random(len(P)) < 0.22
    col = np.where(mix[:, None], np.array(colB), np.array(colA))
    add(P, rng.uniform(1.0, 1.12, len(P)), (1, 1, 1), 0.0); parts[-1][:, 4:7] = col * (1 + rng.uniform(-.05, .05, (len(P), 1)))
    # acyl tails, only where they can be seen: lipids near the three cut planes
    near = (np.min(np.abs(P), axis=1) < 3.2)
    T = []
    for p, d in zip(P[near], dirs[near]):
        u, v = frame(d)
        for s in (-1, 1):
            off = (u * s * 0.55 + v * rng.normal(0, .25))
            for k in range(1, 6):
                T.append(p - outward * d * (0.95 + k * 0.72) + off + rng.normal(0, 0.12, 3) + (u * s * 0.25 * np.sin(k)) )
    T = np.array(T); T = T[keep_cut(T, -0.15)]
    add(T, 0.58, COL['tail'], 0.06)
leaflet(R_OUT, 1.95, COL['head'], COL['head2'], 1)
leaflet(R_IN, 1.95, COL['head2'], COL['head'], -1)

# ---------------- lumen cargo: RNA strands and soluble proteins ----------------
RL = R_IN - 3.5
for k in range(52):
    p = nrm(rng.normal(size=3)) * rng.uniform(5, RL - 4); d = nrm(rng.normal(size=3)); beads = []
    for s in range(rng.integers(40, 110)):
        d = nrm(d + rng.normal(0, 0.32, 3)); q = p + d * 1.05
        if np.linalg.norm(q) > RL: d = nrm(d - 1.6 * nrm(q)); q = p + d * 1.05
        p = q; beads.append(p)
        if s % 9 == 4 and rng.random() < .5:       # short hairpin stems: a paired second bead
            beads.append(p + nrm(np.cross(d, rng.normal(size=3))) * 1.1)
    B = np.array(beads); B = B[keep_cut(B, -0.4)]
    if len(B): add(B, 0.78, COL['rna'], 0.05)
for k in range(80):
    c0 = nrm(rng.normal(size=3)) * rng.uniform(4, RL - 6)
    sz = rng.uniform(2.2, 4.8)
    C = rng.normal(0, sz * 0.45, (rng.integers(2, 5), 3)); Rr = np.abs(rng.normal(sz, sz * 0.25, (len(C), 3))) + 1.2
    L = blob(C, Rr, 500 + k, step=1.1, shell=1.6) + c0
    L = L[keep_cut(L, -0.4)]
    if len(L): add(L, rng.uniform(0.72, 0.95, len(L)), COL['cp'] if rng.random() < .6 else COL['cp2'])

A = np.vstack(parts)
print('spheres', len(A))

# ---------------- camera: look down the opened octant, a little from below-left ----------------
def rot_to(a, b):
    a = nrm(a); b = nrm(b); v = np.cross(a, b); c = a @ b; s = np.linalg.norm(v)
    if s < 1e-9: return np.eye(3)
    vx = np.array([[0, -v[2], v[1]], [v[2], 0, -v[0]], [-v[1], v[0], 0]])
    return np.eye(3) + vx + vx @ vx * ((1 - c) / s ** 2)
view = nrm(CUTV + np.array([0.10, -0.16, 0.0]))
M = rot_to(view, np.array([0, 0, 1.0]))
roll = np.radians(-18); Rz = np.array([[np.cos(roll), -np.sin(roll), 0], [np.sin(roll), np.cos(roll), 0], [0, 0, 1]])
M = Rz @ M
X = A[:, :3] @ M.T
X -= (X.max(0) + X.min(0)) / 2 * np.array([1, 1, 0])
ext = max((X[:, 0].max() - X[:, 0].min() + 6) / W, (X[:, 1].max() - X[:, 1].min() + 6) / H)
S = 1.0 / (ext * 1.06)
DIST = 700.0
def proj(X):
    f = DIST / (DIST - X[:, 2]); return W / 2 + X[:, 0] * S * f, H / 2 - X[:, 1] * S * f, f
sx, sy, f = proj(X)
R = A[:, 3]; C = A[:, 4:7]

def raster(sx, sy, rp, z, Wd, Hd, want_id=False):
    zb = np.full((Hd, Wd), -1e9); ib = np.full((Hd, Wd), -1, np.int64)
    for i in np.argsort(z):
        r = rp[i]; x0 = int(max(0, np.floor(sx[i] - r))); x1 = int(min(Wd, np.ceil(sx[i] + r) + 1))
        y0 = int(max(0, np.floor(sy[i] - r))); y1 = int(min(Hd, np.ceil(sy[i] + r) + 1))
        if x0 >= x1 or y0 >= y1: continue
        yy, xx = np.mgrid[y0:y1, x0:x1]
        dd = (xx + .5 - sx[i]) ** 2 + (yy + .5 - sy[i]) ** 2
        m = dd < r * r
        h = z[i] + np.sqrt(np.maximum(r * r - dd, 0))
        sub = zb[y0:y1, x0:x1]; upd = m & (h > sub)
        sub[upd] = h[upd]
        if want_id: ib[y0:y1, x0:x1][upd] = i
    return zb, ib
rp = R * S * f
zb, ib = raster(sx, sy, rp, X[:, 2] * S, W, H, True)
hit = ib >= 0
print('coverage', hit.mean())
yy, xx = np.mgrid[0:H, 0:W]
ii = np.where(hit, ib, 0)
nx = (xx + .5 - sx[ii]) / rp[ii]; ny = -(yy + .5 - sy[ii]) / rp[ii]
nz = np.sqrt(np.clip(1 - nx * nx - ny * ny, 0, 1))
Nn = np.stack([nx, ny, nz], -1)
Pw = X[ii] + Nn * R[ii][..., None]

# shadow map from the key light (upper left, toward the viewer)
Ldir = nrm(np.array([-0.5, 0.66, 0.56]))
lx = nrm(np.cross(np.array([0, 1.0, 0]), Ldir)); ly = np.cross(Ldir, lx)
LS = 3.0
lpx = X @ lx * LS; lpy = X @ ly * LS; lpz = X @ Ldir * LS
offx, offy = -lpx.min() + 10, -lpy.min() + 10
SWm, SHm = int(lpx.max() + offx + 10), int(lpy.max() + offy + 10)
szb, _ = raster(lpx + offx, lpy + offy, R * LS, lpz, SWm, SHm)
qx = (Pw @ lx) * LS + offx; qy = (Pw @ ly) * LS + offy; qz = (Pw @ Ldir) * LS
sh = np.zeros((H, W))
for ox, oy in ((0, 0), (1.5, 0), (-1.5, 0), (0, 1.5), (0, -1.5), (1, 1), (-1, -1), (1, -1), (-1, 1)):
    jx = np.clip((qx + ox).astype(int), 0, SWm - 1); jy = np.clip((qy + oy).astype(int), 0, SHm - 1)
    sh += (szb[jy, jx] > qz + 1.0 * LS)
sh = 1 - sh / 9.0

# per-atom exposure (neighbour density) and screen-space AO
tree = cKDTree(X)
cnt = np.array([len(c) for c in tree.query_ball_point(X, 5.0, workers=-1)], float)
expo = np.clip(1.3 - cnt / np.percentile(cnt, 90), 0.2, 1.0)
zfill = np.where(hit, zb, zb[hit].min() - 40 * S)
occ = np.zeros((H, W)); n = 0
for rad in (3, 7, 15, 30, 60):
    for k in range(10):
        a = k * 2 * np.pi / 10 + rad
        dx, dy = int(round(np.cos(a) * rad * SS)), int(round(np.sin(a) * rad * SS))
        dz = np.roll(np.roll(zfill, dy, 0), dx, 1) - zfill
        occ += np.clip(dz / (rad * SS * 1.2), 0, 1) * (dz < rad * SS * 5); n += 1
ssao = 1 - np.clip(occ / n * 1.8, 0, 0.88)

V = np.array([0, 0, 1.0])
ndl = np.clip(Nn @ Ldir, 0, 1)
spec = np.clip(Nn @ nrm(Ldir + V), 0, 1) ** 34
fill = np.clip(Nn @ nrm(np.array([0.7, -0.3, 0.6])), 0, 1)
rim = (1 - nz) ** 3.0
base = C[ii]
ao = (ssao * (0.42 + 0.58 * expo[ii]))[..., None]
lit = base * (0.36 * ao + (0.84 * ndl * sh)[..., None] + (0.13 * fill)[..., None] * ao)
lit += (0.20 * spec * sh)[..., None] * np.array([1, 0.98, 0.95])
lit += (0.26 * rim * ao[..., 0])[..., None] * np.array([0.58, 0.82, 0.78])
INK = np.array([13, 15, 36]) / 255.0
zn = (zb - zb[hit].min()) / (zb[hit].max() - zb[hit].min() + 1e-6)
haze = np.clip(1 - zn, 0, 1) ** 1.7 * 0.5
lit = lit * (1 - haze[..., None]) + INK * haze[..., None]
lit = np.clip(lit, 0, 1) ** (1 / 1.1)
alpha = hit.astype(float)
rgba = np.dstack([lit * alpha[..., None], alpha])
im = Image.fromarray((rgba * 255).round().astype(np.uint8), 'RGBA').resize((FW, FH), Image.LANCZOS)
a = np.asarray(im).astype(float) / 255
rgb = a[..., :3] / np.maximum(a[..., 3:], 1e-4)
Image.fromarray((np.dstack([np.clip(rgb, 0, 1), a[..., 3]]) * 255).round().astype(np.uint8), 'RGBA').save(OUT)
print('saved', OUT)
