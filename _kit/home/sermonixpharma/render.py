#!/usr/bin/env python3
"""Sermonix hero: lasofoxifene in the ligand-binding domain of estrogen receptor alpha, PDB 2OUZ (adapted from the kit's tolremo renderer).
Original notes follow: TOLREMO hero (HOME_BRIEF update 2c: a crafted render of the real mechanism). The bromodomain of human CBP (CREBBP)
from the crystal structure PDB 5CGP, with a small-molecule bromodomain inhibitor seated in its acetyl-lysine pocket:
the target class of TOLREMO's TT125-802 ("an orally available small molecule inhibitor of the bromodomain of CBP/p300",
tolremo.com). The ligand shown is the one in the published structure, NOT TT125-802 (whose structure is not public).
Protein as a pearl cartoon (flat helix ribbons, thin loops), ligand as glossy ball-and-stick in the logo lime #99cc33.
Numpy triangle rasteriser with z-buffer, interpolated normals, key/fill/rim light, depth-based occlusion, 2x SS,
real alpha (no ground of its own, DJ). Usage: python3 render.py out.png [W] [yaw pitch roll]"""
import sys, math, pathlib
import numpy as np
from PIL import Image, ImageFilter
H = pathlib.Path(__file__).resolve().parent
OUT = sys.argv[1] if len(sys.argv) > 1 else 'hero.png'
OW = int(sys.argv[2]) if len(sys.argv) > 2 else 1400
yaw, pitch, roll = [float(a) for a in (sys.argv[3:6] if len(sys.argv) >= 6 else (0, 0, 0))]
SS = 2
L = (H / '2OUZ.pdb').read_text().splitlines()
CA = []; RES = []; LIG = []; LEL = []
for l in L:
    if l.startswith('ATOM') and l[12:16].strip() == 'CA' and l[21] == 'A' and l[16] in ' A':
        CA.append([float(l[30:38]), float(l[38:46]), float(l[46:54])]); RES.append(int(l[22:26]))
    if l.startswith('HETATM') and l[17:20] == 'C3D' and l[16] in ' A':
        e = l[76:78].strip()
        if e != 'H': LIG.append([float(l[30:38]), float(l[38:46]), float(l[46:54])]); LEL.append(e)
CA = np.array(CA); LIG = np.array(LIG)
HEL = set()
for l in L:
    if l.startswith('HELIX'):
        a, b = int(l[21:25]), int(l[33:37])
        if b - a >= 8: HEL.update(range(a, b + 1))
ish = np.array([r in HEL for r in RES], float)
# orientation: principal axes of the protein, then a 3/4 view with the pocket (ligand) toward the viewer, upper area
cen = CA.mean(0); P0 = CA - cen; LG0 = LIG - cen
w, v = np.linalg.eigh(np.cov(P0.T)); v = v[:, ::-1]
P0 = P0 @ v; LG0 = LG0 @ v
def rot(ax, a):
    c, s = math.cos(a), math.sin(a)
    return {'x': np.array([[1,0,0],[0,c,-s],[0,s,c]]), 'y': np.array([[c,0,s],[0,1,0],[-s,0,c]]), 'z': np.array([[c,-s,0],[s,c,0],[0,0,1]])}[ax]
# long axis vertical, ligand toward camera (-z is toward viewer after flip below)
R0 = rot('z', math.pi / 2)
P0 = P0 @ R0.T; LG0 = LG0 @ R0.T
lc = LG0.mean(0)
ang = math.atan2(lc[0], -lc[2]);  # rotate about y so the ligand faces the camera
Ry = rot('y', ang); P0 = P0 @ Ry.T; LG0 = LG0 @ Ry.T
R = rot('z', math.radians(roll)) @ rot('x', math.radians(pitch)) @ rot('y', math.radians(yaw))
P = P0 @ R.T; LG = LG0 @ R.T
if LG.mean(0)[1] < 0: P[:, 1] *= -1; LG[:, 1] *= -1; P[:, 0] *= -1; LG[:, 0] *= -1   # pocket in the upper half (screen y down after flip)
P[:, 1] *= -1; LG[:, 1] *= -1
# ---------- spline + frames ----------
def cr(pts, n):
    p = np.vstack([pts[0] * 2 - pts[1], pts, pts[-1] * 2 - pts[-2]]); out = []
    for i in range(1, len(p) - 2):
        for t in np.linspace(0, 1, n, endpoint=False):
            t2, t3 = t * t, t * t * t
            out.append(0.5 * ((2 * p[i]) + (-p[i-1] + p[i+1]) * t + (2*p[i-1] - 5*p[i] + 4*p[i+1] - p[i+2]) * t2 + (-p[i-1] + 3*p[i] - 3*p[i+1] + p[i+2]) * t3))
    out.append(pts[-1]); return np.array(out)
NS = 10
S = cr(P, NS)
bvec = np.zeros_like(P)
for i in range(1, len(P) - 1): bvec[i] = (P[i-1] - P[i]) + (P[i+1] - P[i])
bvec[0] = bvec[1]; bvec[-1] = bvec[-2]
bvec /= np.linalg.norm(bvec, axis=1, keepdims=True) + 1e-9
B = cr(bvec, NS); HW = cr(ish[:, None], NS)[:, 0]
# smooth the helix weight so ribbons taper in and out
k = np.ones(15) / 15; HW = np.clip(np.convolve(np.pad(HW, 7, mode='edge'), k, 'valid'), 0, 1)
T = np.gradient(S, axis=0); T /= np.linalg.norm(T, axis=1, keepdims=True)
Nn = B - (B * T).sum(1, keepdims=True) * T
# loops: parallel-transport-ish smoothing of the frame
for i in range(1, len(Nn)):
    if (Nn[i] * Nn[i-1]).sum() < 0: Nn[i] = -Nn[i]
Nn = np.array([np.mean(Nn[max(0, i-4):i+5], 0) for i in range(len(Nn))])
Nn = Nn - (Nn * T).sum(1, keepdims=True) * T; Nn /= np.linalg.norm(Nn, axis=1, keepdims=True)
Wd = np.cross(T, Nn)
SIDES = 18
th = np.linspace(0, 2 * np.pi, SIDES, endpoint=False)
verts = []; norms = []; cols = []; tris = []
PEARL = np.array([0.84, 0.89, 0.95]); LIME = np.array([0.30, 0.74, 0.98])
def add_tube(S, Nn, Wd, aw, an, col):
    base = len(verts)
    for i in range(len(S)):
        for t in th:
            c, s = math.cos(t), math.sin(t)
            verts.append(S[i] + Wd[i] * aw[i] * c + Nn[i] * an[i] * s)
            nn = Wd[i] * c / max(aw[i], 1e-3) + Nn[i] * s / max(an[i], 1e-3); nn /= np.linalg.norm(nn)
            norms.append(nn); cols.append(col)
    for i in range(len(S) - 1):
        for j in range(SIDES):
            a = base + i * SIDES + j; b = base + i * SIDES + (j + 1) % SIDES
            tris.append((a, b, a + SIDES)); tris.append((b, b + SIDES, a + SIDES))
aw = 0.45 + HW * (1.75 - 0.45); an = 0.45 + HW * (0.38 - 0.45)
add_tube(S, Nn, Wd, aw, an, PEARL)
def add_sphere(c, r, col, nu=20, nv=14):
    base = len(verts)
    for i in range(nv + 1):
        ph = math.pi * i / nv
        for j in range(nu):
            t = 2 * math.pi * j / nu
            n = np.array([math.sin(ph) * math.cos(t), math.cos(ph), math.sin(ph) * math.sin(t)])
            verts.append(c + r * n); norms.append(n); cols.append(col)
    for i in range(nv):
        for j in range(nu):
            a = base + i * nu + j; b = base + i * nu + (j + 1) % nu
            tris.append((a, b, a + nu)); tris.append((b, b + nu, a + nu))
def add_cyl(p, q, r, col, n=14):
    d = q - p; d /= np.linalg.norm(d); u = np.cross(d, [0.3, 1, 0.1]); u /= np.linalg.norm(u); w2 = np.cross(d, u)
    base = len(verts)
    for e in (p, q):
        for j in range(n):
            t = 2 * math.pi * j / n; nn = u * math.cos(t) + w2 * math.sin(t)
            verts.append(e + r * nn); norms.append(nn); cols.append(col)
    for j in range(n):
        a = base + j; b = base + (j + 1) % n
        tris.append((a, b, a + n)); tris.append((b, b + n, a + n))
ECOL = {'C': LIME, 'N': np.array([0.70, 0.90, 1.0]), 'O': np.array([0.80, 0.93, 1.0])}
for i, e in enumerate(LEL): add_sphere(LG[i], 0.62 if e != 'C' else 0.58, ECOL.get(e, LIME))
for i in range(len(LG)):
    for j in range(i + 1, len(LG)):
        dd = np.linalg.norm(LG[i] - LG[j])
        if 0.9 < dd < 1.75:
            m = (LG[i] + LG[j]) / 2
            add_cyl(LG[i], m, 0.21, ECOL.get(LEL[i], LIME)); add_cyl(m, LG[j], 0.21, ECOL.get(LEL[j], LIME))
V = np.array(verts); N = np.array(norms); C = np.array(cols); TR = np.array(tris)
# ---------- projection (orthographic) ----------
mn = V[:, :2].min(0) - 2.0; mx = V[:, :2].max(0) + 2.0
sc = OW * SS / (mx[0] - mn[0]); W = int(OW * SS); Hh = int((mx[1] - mn[1]) * sc)
X = (V[:, 0] - mn[0]) * sc; Y = (V[:, 1] - mn[1]) * sc; Z = V[:, 2]
NPROT = len(S) * SIDES
def raster(TRS):
    zb = np.full((Hh, W), 1e9); nb = np.zeros((Hh, W, 3)); cb = np.zeros((Hh, W, 3)); lim = np.zeros((Hh, W))
    for (a, b, c) in TRS:
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
        lim[y0:y1+1, x0:x1+1][m] = 1.0 if a >= NPROT else 0.0
    return zb, nb, cb, lim
zb, nb, cb, lim = raster(TR)
LTR = np.array([t for t in TR if t[0] >= NPROT])
zL, nL, cL, _ = raster(LTR)
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
gloss = np.where(lim > 0, 0.85 * spec ** 60 + 0.25 * spec ** 8, 0.28 * spec ** 30)
col += gloss[..., None]
col += (rim * 0.22 * depth)[..., None] * np.where(lim[..., None] > 0, np.array([0.55, 0.85, 1.0]), np.array([0.55, 0.72, 0.92]))
col = np.clip(col, 0, 1)
# x-ray: where the ribbon hides part of lasofoxifene, let the ligand glow through at partial strength
covL = zL < 1e8
nL /= np.linalg.norm(nL, axis=2, keepdims=True) + 1e-9
nL[covL & (nL[..., 2] > 0)] *= -1
dL = np.clip((nL * K1).sum(2), 0, 1); sL = np.clip((nL * hv).sum(2), 0, 1)
colL = np.clip(cL * (0.35 + 0.75 * dL)[..., None] + (0.6 * sL ** 40)[..., None], 0, 1)
occ = covL & (zL > zb + 1e-3)
XR = float(sys.argv[6]) if len(sys.argv) > 6 else 0.55
col[occ] = col[occ] * (1 - XR) + colL[occ] * XR
# alpha with soft antialiased edge (via SS downsample)
rgba = np.dstack([col, cov.astype(float)])
img = Image.fromarray((rgba * 255).astype(np.uint8), 'RGBA').resize((W // SS, Hh // SS), Image.LANCZOS)
img.save(OUT); print('saved', OUT, img.size, 'tris', len(TR))
lc=LG.mean(0); print('LX %.3f LY %.3f'%(((lc[0]-mn[0])*sc)/W, ((lc[1]-mn[1])*sc)/Hh))
