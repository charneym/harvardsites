#!/usr/bin/env python3
"""Aelis Farma hero: pregnenolone, the brain's own signalling-specific brake on the CB1 receptor (Vallee et al., Science 2014;
Aelis Farma's CB1-SSi are derived from it), as a glass ball-and-stick model, echoing the glass molecule imagery on
aelisfarma.com. 3D coordinates: PubChem CID 8955 (3D conformer, preg.sdf); hydrogens omitted. Pure numpy ray casting of
spheres and capsules, glass shading (Fresnel rim, two sharp highlights, transmitted caustic on the far side, faint
absorption), real alpha ground. usage: mol.py ax ay az size out.png"""
import numpy as np, sys, pathlib
from PIL import Image
H = pathlib.Path(__file__).resolve().parent
L = open(H / 'preg.sdf').read().split('\n')
na, nb = int(L[3][:3]), int(L[3][3:6])
A = []; E = []
for l in L[4:4 + na]:
    f = l.split(); A.append([float(f[0]), float(f[1]), float(f[2])]); E.append(f[3])
B = []
for l in L[4 + na:4 + na + nb]:
    a, b, o = int(l[:3]) - 1, int(l[3:6]) - 1, int(l[6:9]); B.append((a, b, o))
A = np.array(A); E = np.array(E)
keep = np.where(E != 'H')[0]; idx = {k: i for i, k in enumerate(keep)}
X = A[keep]; E = E[keep]
BB = [(idx[a], idx[b], o) for a, b, o in B if a in idx and b in idx]
X -= X.mean(0)
w, V = np.linalg.eigh(np.cov(X.T)); V = V[:, ::-1]
P = X @ V  # long axis x, ring plane xy
def rot(t, ax):
    c, s = np.cos(t), np.sin(t)
    return {'x': np.array([[1, 0, 0], [0, c, -s], [0, s, c]]), 'y': np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]]),
            'z': np.array([[c, -s, 0], [s, c, 0], [0, 0, 1]])}[ax]
ang = [float(t) for t in sys.argv[1:4]] if len(sys.argv) > 3 else [0.9, 0.35, 0.9]
P = P @ rot(ang[0], 'x').T @ rot(ang[1], 'y').T @ rot(ang[2], 'z').T
S = int(sys.argv[4]) if len(sys.argv) > 4 else 1600
OUT = sys.argv[5] if len(sys.argv) > 5 else 'mol.png'
RA = {'C': .50, 'O': .56}; RB = .15
rad = np.array([RA[e] for e in E])
lo = (P[:, :2] - rad[:, None]).min(0) - .25; hi = (P[:, :2] + rad[:, None]).max(0) + .25
ext = hi - lo; sc = S / ext.max(); Wd, Hd = int(ext[0] * sc) + 2, int(ext[1] * sc) + 2
ys, xs = np.mgrid[0:Hd, 0:Wd]
px = lo[0] + (xs + .5) / sc; py = hi[1] - (ys + .5) / sc
Z = np.full((Hd, Wd), -1e9); N = np.zeros((Hd, Wd, 3)); M = np.zeros((Hd, Wd), np.int16) - 1  # 0 carbon,1 oxygen,2 bond
T = np.zeros((Hd, Wd))  # thickness proxy
for i in range(len(P)):
    dx = px - P[i, 0]; dy = py - P[i, 1]; d2 = dx * dx + dy * dy; r = rad[i]
    m = d2 < r * r
    if not m.any(): continue
    dz = np.sqrt(np.clip(r * r - d2, 0, None)); z = P[i, 2] + dz
    u = m & (z > Z)
    Z[u] = z[u]; N[u] = np.stack([dx[u], dy[u], dz[u]], -1) / r; M[u] = 1 if E[i] == 'O' else 0; T[u] = (dz[u] / r)
for a, b, o in BB:
    offs = [0.0]
    for off in offs:
        p0, p1 = P[a].copy(), P[b].copy()
        ax = p1 - p0; Lb = np.linalg.norm(ax); ax /= Lb
        # ray along -z from (px,py,+inf): solve distance to infinite cylinder
        d = np.array([0, 0, -1.0])
        o = np.stack([px - p0[0], py - p0[1], np.full_like(px, 50 - p0[2])], -1)
        dd = d - (d @ ax) * ax; oo = o - (o @ ax)[..., None] * ax
        qa = dd @ dd; qb = 2 * (oo @ dd); qc = (oo * oo).sum(-1) - RB * RB
        disc = qb * qb - 4 * qa * qc
        if qa < 1e-9: continue
        m = disc > 0
        t = (-qb - np.sqrt(np.clip(disc, 0, None))) / (2 * qa)
        hp = o + t[..., None] * d; s = hp @ ax
        m &= (s > 0) & (s < Lb)
        z = 50 - p0[2] - t + p0[2] * 0; z = p0[2] + (o[..., 2] - t)  # world z of hit
        u = m & (z > Z)
        if not u.any(): continue
        n = hp - s[..., None] * ax; n /= np.linalg.norm(n, axis=-1, keepdims=True) + 1e-9
        Z[u] = z[u]; N[u] = n[u]; M[u] = 2; T[u] = np.clip(n[u][:, 2], 0, 1) * .6
hit = M >= 0
Vv = np.array([0, 0, 1.0]); nz = np.clip(N[..., 2], 0, 1)
F = .04 + .96 * (1 - nz) ** 5
def nl(v): v = np.array(v, float); return v / np.linalg.norm(v)
L1 = nl([-.55, .65, .55]); L2 = nl([.7, -.2, .5])
def spec(Lv, k):
    h = nl(Lv + Vv); return np.clip((N * h).sum(-1), 0, 1) ** k
s1 = spec(L1, 220) * 1.25 + spec(L1, 34) * .16
s2 = spec(L2, 90) * .32
# transmitted light focusing on the far side (caustic), the classic glass-ball glow
tr = np.clip(-(N * L1).sum(-1), 0, 1) ** 2.2 * nz ** .6
zn = (Z - Z[hit].min()) / (Z[hit].max() - Z[hit].min() + 1e-9); zn = np.where(hit, zn, 0)
gl = np.array([196, 226, 238]) / 255          # clear glass, faint cool tint
cy = np.array([76, 194, 222]) / 255           # the logo cyan (oxygen)
bd = np.array([150, 196, 214]) / 255
tint = np.where((M == 1)[..., None], cy, np.where((M == 2)[..., None], bd, gl))
rim = (1 - nz) ** 1.7
tr = np.clip(-(N * L1).sum(-1) + .3, 0, 1.3) ** 1.35 * nz ** .45
body = .09 + .09 * nz
inner = np.exp(-((nz - .55) / .16) ** 2) * .10   # a faint refracted ring inside the ball
col = tint * (body + inner + 1.25 * rim + 1.05 * tr)[..., None] + (s1 + s2)[..., None] * np.array([1, 1, 1])
col += np.where((M == 1)[..., None], cy * (.28 * nz ** 1.5)[..., None], 0)
depth = .62 + .38 * zn
col *= depth[..., None]
lum = col.max(-1)
alpha = np.clip(.22 + .85 * lum, 0, 1) * hit
img = np.clip(col / np.maximum(alpha, 1e-3)[..., None], 0, 1)
rgba = np.dstack([img * 255, alpha * 255]).astype(np.uint8)
im = Image.fromarray(rgba, 'RGBA')
im = im.resize((im.width // 2, im.height // 2), Image.LANCZOS)
im.save(H / OUT); print(im.size)
