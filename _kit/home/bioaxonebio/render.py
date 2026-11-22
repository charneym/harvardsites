#!/usr/bin/env python3
"""BioAxone hero (HOME_BRIEF update 2c: a crafted render of the real mechanism). Active RhoA (GTP-analogue bound)
gripping the Rho-binding coiled coil of Rho kinase: crystal structure PDB 1S1C (Dvorsky et al. 2004, human RhoA chains
A/B with GppNHp + Mg, ROCK1 Rho-binding domain chains X/Y). Rho -> ROCK is the signalling axis BioAxone targets
(BA-210 inactivates Rho; NRL-1049 / BA-1049 inhibits ROCK2). Drawn atom by atom as a space-filling model.
Offline numpy renderer: sphere z-buffer, wrap Lambert + Blinn specular + rim, screen-space ambient occlusion, depth fog,
true alpha (DJ). Usage: python3 render.py 1s1c.pdb out.png roty rotx rotz"""
import sys, numpy as np
from PIL import Image
from scipy.ndimage import gaussian_filter
pdb, out = sys.argv[1], sys.argv[2]
R = {'C': 1.7, 'N': 1.55, 'O': 1.52, 'S': 1.8, 'P': 1.8, 'MG': 1.2}
P = []; rad = []; ch = []
for l in open(pdb):
    if l[:6] not in ('ATOM  ', 'HETATM') or l[16] not in ' A': continue
    res = l[17:20]
    if res == 'HOH': continue
    el = (l[76:78].strip() or l[12:14].strip()[0]).upper()
    if el == 'H': continue
    c = l[21]
    if res in ('GNP', ' MG'): c = 'G'
    P.append([float(l[30:38]), float(l[38:46]), float(l[46:54])]); rad.append(R.get(el, 1.7)); ch.append(c)
P = np.array(P); rad = np.array(rad); ch = np.array(ch)
cen = P.mean(0)
# frame: the ROCK coiled coil (X/Y) long axis -> screen y
cc = P[(ch == 'X') | (ch == 'Y')]
u, s, vt = np.linalg.svd(cc - cc.mean(0)); y = vt[0]
a = P[ch == 'A'].mean(0) - P[ch == 'B'].mean(0); x = a - y * np.dot(a, y); x /= np.linalg.norm(x); z = np.cross(x, y)
Q = (P - cen) @ np.stack([x, y, z]).T
def rot(a, deg):
    t = np.radians(deg); c, s = np.cos(t), np.sin(t)
    return {'x': np.array([[1, 0, 0], [0, c, -s], [0, s, c]]), 'y': np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]]),
            'z': np.array([[c, -s, 0], [s, c, 0], [0, 0, 1]])}[a]
Q = Q @ rot('y', float(sys.argv[3])).T @ rot('x', float(sys.argv[4])).T @ rot('z', float(sys.argv[5])).T
W = 2200; pad = 40
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
# BioAxone logo teal #007f91 for RhoA, a paler teal for its partner copy, the site's blue/pale blue for ROCK,
# a warm amber for the bound nucleotide (the "switched on" GTP state)
base = {'A': (0.05, 0.56, 0.62), 'B': (0.30, 0.70, 0.72), 'X': (0.30, 0.52, 0.80), 'Y': (0.62, 0.74, 0.90),
        'G': (0.98, 0.70, 0.30)}
cols = np.array([base[c] for c in ch])
# subtle per-residue-ish mottling so the surface reads as atoms, not plastic
rng = np.random.default_rng(7); cols = np.clip(cols * (1 + rng.normal(0, 0.035, (len(cols), 1))), 0, 1)
C = np.zeros((Hh, W, 3)); C[v] = cols[idb[v]]
Ld = np.array([-0.5, -0.62, 0.6]); Ld /= np.linalg.norm(Ld)
ndl = nx * Ld[0] + ny * Ld[1] + nz * Ld[2]
wrap = np.clip((ndl + 0.25) / 1.25, 0, 1)
Hv = Ld + np.array([0, 0, 1]); Hv /= np.linalg.norm(Hv)
spec = np.clip(nx * Hv[0] + ny * Hv[1] + nz * Hv[2], 0, 1) ** 30
rim = (1 - nz) ** 3
zf = np.where(v, zb, zb[v].min() - 40)
ao = np.zeros_like(zf)
for rr in (5, 14, 36, 80):
    ao += np.clip((gaussian_filter(zf, rr) - zf) / (rr * 2.2), 0, 1)
ao = np.clip(1 - ao / 2.2, 0.16, 1)
zn = np.where(v, (zb - zb[v].min()) / (zb[v].max() - zb[v].min()), 0)
img = C * ((0.16 + 0.86 * wrap) * ao)[..., None] + spec[..., None] * 0.30 * ao[..., None] \
      + rim[..., None] * np.array([0.55, 0.80, 0.90]) * 0.26
ink = np.array([0.024, 0.075, 0.098])                        # the page ink, #06131a
fog = (0.6 * (1 - zn) ** 1.4)[..., None]
img = np.clip(img * (1 - fog) + ink * fog, 0, 1)
o = (np.dstack([img, v.astype(float)]) * 255).astype(np.uint8)
im = Image.fromarray(o, 'RGBA').resize((W // 2, Hh // 2), Image.LANCZOS)
im.save(out); print('size', im.size)
