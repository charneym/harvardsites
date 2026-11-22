#!/usr/bin/env python3
"""Natsar hero (HOME_BRIEF update 2c: a crafted render of the firm's real target). Human DEAD-box RNA helicase DDX3X,
crystal structure PDB 6O5F ("Crystal structure of DEAD-box RNA helicase DDX3X at pre-unwound state", Song & Ji 2019):
two DDX3X molecules (chains A, B) clamped on a 23-bp RNA duplex (chains C, D). DDX3 is the helicase Natsar's RK-33
inhibits. Drawn atom by atom as a space-filling model; protein in the tones of Natsar's navy logo, the RNA in the orange of
their site. Offline numpy renderer: sphere z-buffer, wrap Lambert + Blinn specular + rim, multi-scale screen-space AO,
depth fog into the page ink; true alpha (DJ). Usage: python3 render.py 6o5f.pdb out.png W yaw pitch roll"""
import sys, numpy as np
from PIL import Image
from scipy.ndimage import gaussian_filter
pdb, out = sys.argv[1], sys.argv[2]; W = int(sys.argv[3])
R = {'C': 1.7, 'N': 1.55, 'O': 1.52, 'S': 1.8, 'P': 1.8}
P = []; rad = []; ch = []; bb = []
for l in open(pdb):
    if l[:6] != 'ATOM  ' or l[16] not in ' A': continue
    el = (l[76:78].strip() or l[12:14].strip()[0]).upper()
    if el == 'H': continue
    P.append([float(l[30:38]), float(l[38:46]), float(l[46:54])]); rad.append(R.get(el, 1.7)); ch.append(l[21])
    bb.append(l[12:16].strip() in ('P', "OP1", "OP2", "O5'", "C5'"))
P = np.array(P); rad = np.array(rad); ch = np.array(ch); bb = np.array(bb)
cen = P.mean(0)
rn = P[(ch == 'C') | (ch == 'D')]
u, s, vt = np.linalg.svd(rn - rn.mean(0)); ax = vt[0]                       # RNA duplex axis
pa = P[ch == 'A'].mean(0) - P[ch == 'B'].mean(0)
y = pa - ax * np.dot(pa, ax); y /= np.linalg.norm(y); x = ax; z = np.cross(x, y)
Q = (P - cen) @ np.stack([x, y, z]).T
def rot(a, deg):
    t = np.radians(deg); c, s = np.cos(t), np.sin(t)
    return {'x': np.array([[1, 0, 0], [0, c, -s], [0, s, c]]), 'y': np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]]),
            'z': np.array([[c, -s, 0], [s, c, 0], [0, 0, 1]])}[a]
Q = Q @ rot('y', float(sys.argv[4])).T @ rot('x', float(sys.argv[5])).T @ rot('z', float(sys.argv[6])).T
pad = 40
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
# Natsar navy #003b7f lifted for a dark page; a pale steel for the second molecule; the site's orange #eb8308 for RNA
base = {'A': (0.20, 0.42, 0.80), 'B': (0.60, 0.68, 0.80), 'C': (0.95, 0.55, 0.10), 'D': (0.98, 0.66, 0.26)}
cols = np.array([base[c] for c in ch])
cols[bb & ((ch == 'C') | (ch == 'D'))] *= np.array([1.0, 0.86, 0.75])         # phosphate backbone a touch deeper
# subtle per-residue variation so the surface reads as a real material, not a smooth blob
rng = np.random.default_rng(7); cols *= (0.93 + 0.1 * rng.random(len(cols)))[:, None]
C = np.zeros((Hh, W, 3)); C[v] = cols[idb[v]]
Ld = np.array([-0.45, -0.6, 0.66]); Ld /= np.linalg.norm(Ld)
ndl = nx * Ld[0] + ny * Ld[1] + nz * Ld[2]
wrap = np.clip((ndl + 0.25) / 1.25, 0, 1)
Hv = Ld + np.array([0, 0, 1]); Hv /= np.linalg.norm(Hv)
spec = np.clip(nx * Hv[0] + ny * Hv[1] + nz * Hv[2], 0, 1) ** 34
rim = (1 - nz) ** 3
zf = np.where(v, zb, zb[v].min() - 40)
ao = np.zeros_like(zf)
for rr in (4, 12, 32, 80):
    rr = rr * W / 2000
    ao += np.clip((gaussian_filter(zf, rr) - zf) / (rr * 2.2), 0, 1)
ao = np.clip(1 - ao / 2.2, 0.15, 1)
zn = np.where(v, (zb - zb[v].min()) / (zb[v].max() - zb[v].min()), 0)
img = C * ((0.15 + 0.88 * wrap) * ao)[..., None] + spec[..., None] * 0.32 * ao[..., None] \
      + rim[..., None] * np.array([0.42, 0.62, 0.95]) * 0.26
ink = np.array([4, 18, 42]) / 255                                            # the page ink, #04122a
fog = (0.58 * (1 - zn) ** 1.4)[..., None]
img = np.clip(img * (1 - fog) + ink * fog, 0, 1)
o = (np.dstack([img, v.astype(float)]) * 255).astype(np.uint8)
im = Image.fromarray(o, 'RGBA').resize((W // 2, Hh // 2), Image.LANCZOS)
im.save(out); print('size', im.size)
