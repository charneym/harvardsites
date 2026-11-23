#!/usr/bin/env python3
"""Protein Foundry hero (HOME_BRIEF update 2c: a crafted render of the firm's real subject).
The locked CXCL12 (SDF-1alpha) dimer bound to the CXCR4 receptor N-terminus carrying sulfotyrosines 7, 12 and 21,
solution NMR structure PDB 2K05 (Veldkamp, Seibert, Peterson, De la Cruz, Haugner, Basnet, Sakmar, Volkman,
Sci. Signal. 2008), model 1. Brian Volkman and Francis Peterson are Protein Foundry's founders; CXCL12-alpha is in
their catalogue. CXCL12 chains take the logo's red and orange, the CXCR4 peptides a warm silver.
Offline numpy renderer: sphere z-buffer, wrap Lambert + Blinn specular + rim, multi-scale screen-space AO, depth fog,
true alpha. Usage: python3 render.py 2k05_m1.pdb out.png roty rotx rotz"""
import sys, numpy as np
from PIL import Image
from scipy.ndimage import gaussian_filter
pdb, out = sys.argv[1], sys.argv[2]
R = {'C': 1.7, 'N': 1.55, 'O': 1.52, 'S': 1.8}
P = []; rad = []; ch = []; el_ = []
for l in open(pdb):
    if l[:6] not in ('ATOM  ', 'HETATM'): continue
    el = (l[76:78].strip() or l[12:14].strip()[0]).upper()
    if el == 'H': continue
    P.append([float(l[30:38]), float(l[38:46]), float(l[46:54])]); rad.append(R.get(el, 1.7)); ch.append(l[21]); el_.append(el)
P = np.array(P); rad = np.array(rad); ch = np.array(ch); el_ = np.array(el_)
cen = P[(ch == 'A') | (ch == 'C')].mean(0)
# frame: the dimer's long axis (A centre -> C centre) on screen x
a = P[ch == 'A'].mean(0); c = P[ch == 'C'].mean(0)
x = c - a; x /= np.linalg.norm(x)
u, s, vt = np.linalg.svd(P[(ch == 'A') | (ch == 'C')] - cen)
y = vt[2] - x * np.dot(vt[2], x); y /= np.linalg.norm(y); z = np.cross(x, y)
Q = (P - cen) @ np.stack([x, y, z]).T
def rot(ax, deg):
    t = np.radians(deg); c_, s_ = np.cos(t), np.sin(t)
    return {'x': np.array([[1, 0, 0], [0, c_, -s_], [0, s_, c_]]), 'y': np.array([[c_, 0, s_], [0, 1, 0], [-s_, 0, c_]]),
            'z': np.array([[c_, -s_, 0], [s_, c_, 0], [0, 0, 1]])}[ax]
Q = Q @ rot('y', float(sys.argv[3])).T @ rot('x', float(sys.argv[4])).T @ rot('z', float(sys.argv[5])).T
W = 2400; pad = 60
lo = (Q[:, :2] - rad[:, None]).min(0); hi = (Q[:, :2] + rad[:, None]).max(0)
sc = (W - 2 * pad) / (hi[0] - lo[0]); Hh = int((hi[1] - lo[1]) * sc + 2 * pad)
X = (Q[:, 0] - lo[0]) * sc + pad; Y = (hi[1] - Q[:, 1]) * sc + pad; Z = Q[:, 2] * sc; RR = rad * sc
zb = np.full((Hh, W), -1e9); nx = np.zeros((Hh, W)); ny = np.zeros((Hh, W)); nz = np.zeros((Hh, W)); idb = np.full((Hh, W), -1)
for i in np.argsort(Z):
    r = RR[i]; x0, x1 = int(X[i] - r), int(X[i] + r) + 1; y0, y1 = int(Y[i] - r), int(Y[i] + r) + 1
    gx, gy = np.meshgrid(np.arange(x0, x1) - X[i], np.arange(y0, y1) - Y[i])
    d2 = r * r - gx * gx - gy * gy; m = d2 > 0
    dz = np.sqrt(np.where(m, d2, 0)); zz = Z[i] + dz
    sub = zb[y0:y1, x0:x1]; up = m & (zz > sub)
    sub[up] = zz[up]; nx[y0:y1, x0:x1][up] = (gx / r)[up]; ny[y0:y1, x0:x1][up] = (gy / r)[up]
    nz[y0:y1, x0:x1][up] = (dz / r)[up]; idb[y0:y1, x0:x1][up] = i
v = idb >= 0
# logo red #d1222b, logo orange #f69421, warm silver for the receptor peptide; sulphur atoms a touch yellower
base = {'A': (0.80, 0.16, 0.19), 'C': (0.95, 0.56, 0.17), 'B': (0.50, 0.51, 0.53), 'D': (0.50, 0.51, 0.53)}
cols = np.array([base[k] for k in ch])
cols[el_ == 'S'] = cols[el_ == 'S'] * 0.6 + np.array([0.98, 0.86, 0.36]) * 0.4
# subtle per-atom tonal variation (real surfaces are never one flat tone)
rng = np.random.default_rng(7); cols = np.clip(cols * (0.94 + 0.08 * rng.random((len(cols), 1))), 0, 1)
C = np.zeros((Hh, W, 3)); C[v] = cols[idb[v]]
Ld = np.array([-0.55, -0.6, 0.58]); Ld /= np.linalg.norm(Ld)
ndl = nx * Ld[0] + ny * Ld[1] + nz * Ld[2]
wrap = np.clip((ndl + 0.3) / 1.3, 0, 1)
Hv = Ld + np.array([0, 0, 1]); Hv /= np.linalg.norm(Hv)
spec = np.clip(nx * Hv[0] + ny * Hv[1] + nz * Hv[2], 0, 1) ** 36
rim = (1 - nz) ** 3
zf = np.where(v, zb, zb[v].min() - 40)
ao = np.zeros_like(zf)
for rr in (6, 16, 40, 90):
    ao += np.clip((gaussian_filter(zf, rr) - zf) / (rr * 2.2), 0, 1)
ao = np.clip(1 - ao / 2.1, 0.14, 1)
zn = np.where(v, (zb - zb[v].min()) / (zb[v].max() - zb[v].min()), 0)
img = C * ((0.14 + 0.88 * wrap) * ao)[..., None] + spec[..., None] * 0.30 * ao[..., None] \
      + rim[..., None] * np.array([1.0, 0.72, 0.45]) * 0.22
ink = np.array([0.075, 0.067, 0.063])                        # the page ink, #131110
fog = (0.55 * (1 - zn) ** 1.5)[..., None]
img = np.clip(img * (1 - fog) + ink * fog, 0, 1)
o = (np.dstack([img, v.astype(float)]) * 255).astype(np.uint8)
im = Image.fromarray(o, 'RGBA').resize((W // 2, Hh // 2), Image.LANCZOS)
im.save(out); print('size', im.size)
