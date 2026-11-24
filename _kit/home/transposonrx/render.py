#!/usr/bin/env python3
"""Transposon Therapeutics hero (HOME_BRIEF update 2c: a crafted render of the real mechanism). The human LINE-1
reverse transcriptase (ORF2p RT core) from the crystal structure PDB 8C8J (Baldwin et al., Nature 2024): the enzyme
caught copying RNA into DNA, with its RNA/DNA hybrid duplex and an incoming nucleotide (dTTP) in the active site, the
site where a nucleoside reverse transcriptase inhibitor such as TPN-101 acts. The molecule shown is dTTP from the
published structure, NOT TPN-101. Protein as a pearl cartoon (helix ribbons, flat strands, thin loops); DNA primer in
the logo cyan, RNA template in the logo violet; the nucleotide as glossy ball-and-stick.
Numpy triangle rasteriser with z-buffer, key/fill/rim light, depth occlusion, 2x SS, real alpha (DJ).
Usage: python3 render.py out.png [W] [yaw pitch roll]"""
import sys, math, pathlib
import numpy as np
from PIL import Image, ImageFilter
H = pathlib.Path(__file__).resolve().parent
OUT = sys.argv[1] if len(sys.argv) > 1 else 'hero.png'
OW = int(sys.argv[2]) if len(sys.argv) > 2 else 1400
yaw, pitch, roll = [float(a) for a in (sys.argv[3:6] if len(sys.argv) >= 6 else (0, 0, 0))]
SS = 2
L = (H / '8C8J.pdb').read_text().splitlines()
CA = []; RES = []; LIG = []; LEL = []; NA = {'B': [], 'C': []}; RUNG = {'B': [], 'C': []}
cur = {}
for l in L:
    if l.startswith('ATOM'):
        ch = l[21]; an = l[12:16].strip(); xyz = [float(l[30:38]), float(l[38:46]), float(l[46:54])]
        if l[16] not in ' A': continue
        if ch == 'A' and an == 'CA': CA.append(xyz); RES.append(int(l[22:26]))
        if ch in NA:
            key = (ch, int(l[22:26]))
            if an == "C4'": NA[ch].append(xyz); cur[key] = {'c': xyz}
            if an in ('N1',) and key in cur: cur[key]['n'] = xyz
    if l.startswith('HETATM') and l[17:20] == 'TTP':
        e = l[76:78].strip()
        if e != 'H': LIG.append([float(l[30:38]), float(l[38:46]), float(l[46:54])]); LEL.append(e)
for (ch, r), d in cur.items():
    if 'n' in d: RUNG[ch].append((d['c'], d['n']))
CA = np.array(CA); LIG = np.array(LIG); NAB = np.array(NA['B']); NAC = np.array(NA['C'])
RB = np.array([[a, b] for a, b in RUNG['B']]); RC = np.array([[a, b] for a, b in RUNG['C']])
HEL = set(); SHT = set()
for l in L:
    if l.startswith('HELIX') and l[19] == 'A':
        a, b = int(l[21:25]), int(l[33:37])
        if b - a >= 5: HEL.update(range(a, b + 1))
    if l.startswith('SHEET') and l[21] == 'A':
        a, b = int(l[22:26]), int(l[33:37])
        if b - a >= 2: SHT.update(range(a, b + 1))
ish = np.array([r in HEL for r in RES], float); iss = np.array([r in SHT for r in RES], float)
# orientation: principal axes of the whole complex, then yaw/pitch/roll from the command line
ALL = np.vstack([CA, NAB, NAC]); cen = ALL.mean(0)
w, v = np.linalg.eigh(np.cov((ALL - cen).T)); v = v[:, ::-1]
def tf(X): return (X - cen) @ v
CA, LIG, NAB, NAC = tf(CA), tf(LIG), tf(NAB), tf(NAC)
RB = (RB - cen) @ v; RC = (RC - cen) @ v
def rot(ax, a):
    c, s = math.cos(a), math.sin(a)
    return {'x': np.array([[1,0,0],[0,c,-s],[0,s,c]]), 'y': np.array([[c,0,s],[0,1,0],[-s,0,c]]), 'z': np.array([[c,-s,0],[s,c,0],[0,0,1]])}[ax]
R = rot('z', math.radians(roll)) @ rot('x', math.radians(pitch)) @ rot('y', math.radians(yaw))
CA, LIG, NAB, NAC = CA @ R.T, LIG @ R.T, NAB @ R.T, NAC @ R.T
RB = RB @ R.T; RC = RC @ R.T
for X in (CA, LIG, NAB, NAC): X[:, 1] *= -1
RB[..., 1] *= -1; RC[..., 1] *= -1
def cr(pts, n):
    p = np.vstack([pts[0] * 2 - pts[1], pts, pts[-1] * 2 - pts[-2]]); out = []
    for i in range(1, len(p) - 2):
        for t in np.linspace(0, 1, n, endpoint=False):
            t2, t3 = t * t, t * t * t
            out.append(0.5 * ((2 * p[i]) + (-p[i-1] + p[i+1]) * t + (2*p[i-1] - 5*p[i] + 4*p[i+1] - p[i+2]) * t2 + (-p[i-1] + 3*p[i] - 3*p[i+1] + p[i+2]) * t3))
    out.append(pts[-1]); return np.array(out)
SIDES = 12
th = np.linspace(0, 2 * np.pi, SIDES, endpoint=False)
verts = []; norms = []; cols = []; tris = []; kind = []
PEARL = np.array([0.74, 0.79, 0.82]); CYAN = np.array([0.10, 0.88, 0.95]); VIO = np.array([0.80, 0.48, 0.82]); NUC = np.array([0.55, 0.98, 1.0])
def frames(S, bv):
    T = np.gradient(S, axis=0); T /= np.linalg.norm(T, axis=1, keepdims=True)
    Nn = bv - (bv * T).sum(1, keepdims=True) * T
    for i in range(1, len(Nn)):
        if (Nn[i] * Nn[i-1]).sum() < 0: Nn[i] = -Nn[i]
    Nn = np.array([np.mean(Nn[max(0, i-4):i+5], 0) for i in range(len(Nn))])
    Nn = Nn - (Nn * T).sum(1, keepdims=True) * T; Nn /= np.linalg.norm(Nn, axis=1, keepdims=True) + 1e-9
    return Nn, np.cross(T, Nn)
def add_tube(S, Nn, Wd, aw, an, col, k=0):
    base = len(verts)
    for i in range(len(S)):
        for t in th:
            c, s = math.cos(t), math.sin(t)
            verts.append(S[i] + Wd[i] * aw[i] * c + Nn[i] * an[i] * s)
            nn = Wd[i] * c / max(aw[i], 1e-3) + Nn[i] * s / max(an[i], 1e-3); nn /= np.linalg.norm(nn)
            norms.append(nn); cols.append(col); kind.append(k)
    for i in range(len(S) - 1):
        for j in range(SIDES):
            a = base + i * SIDES + j; b = base + i * SIDES + (j + 1) % SIDES
            tris.append((a, b, a + SIDES)); tris.append((b, b + SIDES, a + SIDES))
# protein: split into chain segments where CA-CA gaps exceed 4.3 A (missing loops)
NS = 8
br = [0] + [i for i in range(1, len(CA)) if np.linalg.norm(CA[i] - CA[i-1]) > 4.3] + [len(CA)]
for s0, s1 in zip(br[:-1], br[1:]):
    P = CA[s0:s1]
    if len(P) < 4: continue
    S = cr(P, NS)
    bvec = np.zeros_like(P)
    for i in range(1, len(P) - 1): bvec[i] = (P[i-1] - P[i]) + (P[i+1] - P[i])
    bvec[0] = bvec[1]; bvec[-1] = bvec[-2]; bvec /= np.linalg.norm(bvec, axis=1, keepdims=True) + 1e-9
    B = cr(bvec, NS)
    kk = np.ones(11) / 11
    HW = np.clip(np.convolve(np.pad(cr(ish[s0:s1, None], NS)[:, 0], 5, mode='edge'), kk, 'valid'), 0, 1)
    SW = np.clip(np.convolve(np.pad(cr(iss[s0:s1, None], NS)[:, 0], 5, mode='edge'), kk, 'valid'), 0, 1)
    Nn, Wd = frames(S, B)
    aw = 0.36 + HW * (1.45 - 0.36) + SW * (1.2 - 0.36); an = 0.36 + HW * (0.32 - 0.36) + SW * (0.26 - 0.36)
    add_tube(S, Nn, Wd, aw, an, PEARL, 0)
def add_sphere(c, r, col, k, nu=16, nv=10):
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
def add_cyl(p, q, r, col, k, n=10):
    d = q - p; d /= np.linalg.norm(d); u = np.cross(d, [0.3, 1, 0.1]); u /= np.linalg.norm(u); w2 = np.cross(d, u)
    base = len(verts)
    for e in (p, q):
        for j in range(n):
            t = 2 * math.pi * j / n; nn = u * math.cos(t) + w2 * math.sin(t)
            verts.append(e + r * nn); norms.append(nn); cols.append(col); kind.append(k)
    for j in range(n):
        a = base + j; b = base + (j + 1) % n
        tris.append((a, b, a + n)); tris.append((b, b + n, a + n))
# nucleic acids: a round backbone tube through C4' and a rung per base
for X, R2, col in ((NAB, RB, CYAN), (NAC, RC, VIO)):
    S = cr(X, 8); bv = np.tile([0, 0, 1.0], (len(S), 1)); Nn, Wd = frames(S, bv + 0.01 * np.random.RandomState(1).rand(len(S), 3))
    add_tube(S, Nn, Wd, np.full(len(S), 0.85), np.full(len(S), 0.85), col, 1)
    for a, b in R2:
        d = b - a; add_cyl(a, a + d * 1.9, 0.34, col, 1)
ECOL = {'C': NUC, 'N': np.array([0.72, 0.98, 1.0]), 'O': np.array([0.92, 0.98, 1.0]), 'P': np.array([0.86, 0.66, 0.92])}
for i, e in enumerate(LEL): add_sphere(LIG[i], 0.6 if e != 'C' else 0.55, ECOL.get(e, NUC), 2)
for i in range(len(LIG)):
    for j in range(i + 1, len(LIG)):
        dd = np.linalg.norm(LIG[i] - LIG[j])
        if 0.9 < dd < 1.9:
            m = (LIG[i] + LIG[j]) / 2
            add_cyl(LIG[i], m, 0.22, ECOL.get(LEL[i], NUC), 2); add_cyl(m, LIG[j], 0.22, ECOL.get(LEL[j], NUC), 2)
print('nucleotide centre (model units)', LIG.mean(0))
V = np.array(verts); N = np.array(norms); C = np.array(cols); TR = np.array(tris)
# ---------- projection (orthographic) ----------
mn = V[:, :2].min(0) - 2.0; mx = V[:, :2].max(0) + 2.0
sc = OW * SS / (mx[0] - mn[0]); W = int(OW * SS); Hh = int((mx[1] - mn[1]) * sc)
X = (V[:, 0] - mn[0]) * sc; Y = (V[:, 1] - mn[1]) * sc; Z = V[:, 2]
zb = np.full((Hh, W), 1e9); nb = np.zeros((Hh, W, 3)); cb = np.zeros((Hh, W, 3)); lim = np.zeros((Hh, W))
KIND = np.array(kind)
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
# camera looks along +z (toward larger z = farther); normals facing viewer have negative z
nb[cov & (nb[..., 2] > 0)] *= -1
Vd = np.array([0, 0, -1.0])
def nl(v): v = np.array(v, float); return v / np.linalg.norm(v)
K1 = nl([-0.55, -0.7, -0.6]); K2 = nl([0.8, 0.1, -0.5]); RIM = nl([0.6, -0.4, 0.75])
d1 = np.clip((nb * K1).sum(2), 0, 1); d2 = np.clip((nb * K2).sum(2), 0, 1)
Hh1 = nl(K1 + Vd * -1 * -1); hv = nl(K1 - Vd)
spec = np.clip((nb * hv).sum(2), 0, 1)
rim = np.clip(1 - np.abs(nb[..., 2]), 0, 1) ** 3
# depth occlusion: pixels behind nearby closer geometry get darker
zf = np.where(cov, zb, np.nan); zmax = np.nanmax(zf); zmin = np.nanmin(zf)
zn = np.where(cov, (zb - zmin) / (zmax - zmin), 1.0)
zimg = Image.fromarray((zn * 255).astype(np.uint8))
zbl = np.asarray(zimg.filter(ImageFilter.GaussianBlur(10 * SS)), float) / 255
ao = np.clip(1 - 2.2 * np.clip(zn - zbl, 0, 1), 0.35, 1)
depth = 1 - 0.55 * zn   # far parts recede into the ink
shade = (0.16 + 0.78 * d1 + 0.22 * d2) * ao
col = cb * shade[..., None] * depth[..., None]
gloss = np.where(lim > 1.5, 0.85 * spec ** 60 + 0.25 * spec ** 8, np.where(lim > 0.5, 0.45 * spec ** 40 + 0.08 * spec ** 6, 0.26 * spec ** 30))
col += gloss[..., None]
col += (rim * 0.22 * depth)[..., None] * np.where(lim[..., None] > 0.5, np.array([0.55, 0.95, 1.0]), np.array([0.55, 0.72, 0.80]))
col = np.clip(col, 0, 1)
# alpha with soft antialiased edge (via SS downsample)
rgba = np.dstack([col, cov.astype(float)])
img = Image.fromarray((rgba * 255).astype(np.uint8), 'RGBA').resize((W // SS, Hh // SS), Image.LANCZOS)
lc = LIG.mean(0); print('LX LY', round((lc[0] - mn[0]) * sc / W, 3), round((lc[1] - mn[1]) * sc / Hh, 3), 'aspect W/H', round(W / Hh, 4))
img.save(OUT); print('saved', OUT, img.size, 'tris', len(TR))
