#!/usr/bin/env python3
"""Progentec hero (HOME_BRIEF update 2c: a crafted render of the real subject). The soluble B-lymphocyte stimulator
(BLyS / BAFF) trimer, crystal structure PDB 1KXG (Liu et al. 2002, chains A-C), drawn atom by atom as a space-filling
model. BLyS is one of the soluble immune mediators circulating in the blood in lupus (and the target of the one lupus
medicine approved in decades, which progentec.com's Our Story refers to). Progentec's aiSLE DX tests read immune mediators
like it in a blood sample. Each subunit takes one tone of Progentec's logo gradient (teal to sky blue).
Offline numpy renderer: sphere z-buffer, wrap Lambert + Blinn specular + rim, screen-space ambient occlusion, depth fog;
transparent ground (real alpha, DJ). Usage: python3 render.py 1kxg.pdb out.png"""
import sys, numpy as np
from PIL import Image
from scipy.ndimage import gaussian_filter
pdb, out = sys.argv[1], sys.argv[2]
R = {'C': 1.7, 'N': 1.55, 'O': 1.52, 'S': 1.8}
P = []; rad = []; ch = []
for l in open(pdb):
    if l[:6] != 'ATOM  ' or l[21] not in 'ABCG' or l[16] not in ' A': continue
    el = (l[76:78].strip() or l[12:14].strip()[0]).upper()
    if el == 'H': continue
    P.append([float(l[30:38]), float(l[38:46]), float(l[46:54])]); rad.append(R.get(el, 1.7)); ch.append(l[21])
P = np.array(P); rad = np.array(rad); ch = np.array(ch)
cen = P.mean(0)
cs = [P[ch == c].mean(0) for c in 'ABC']
nb = P[ch == 'G'].mean(0)
ax = np.cross(cs[1] - cs[0], cs[2] - cs[0]); ax /= np.linalg.norm(ax)      # the trimer's 3-fold axis
# frame: 3-fold axis -> screen y (upright, like a jellyroll bell), subunit A towards the viewer's left
y = ax; x = nb - cen; x -= y * np.dot(x, y); x /= np.linalg.norm(x); z = np.cross(x, y)
Q = (P - cen) @ np.stack([x, y, z]).T
def rot(a, deg):
    t = np.radians(deg); c, s = np.cos(t), np.sin(t)
    return {'x': np.array([[1, 0, 0], [0, c, -s], [0, s, c]]), 'y': np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]]),
            'z': np.array([[c, -s, 0], [s, c, 0], [0, 0, 1]])}[a]
# look down onto the top of the bell at ~62 deg so all three subunits and the central channel read
Q = Q @ rot('y', float(sys.argv[3])).T @ rot('x', float(sys.argv[4])).T @ rot('z', float(sys.argv[5])).T
W = 2000; pad = 40
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
# Progentec logo gradient: teal (19,168,158) -> sky blue (34,170,220), plus a pale aqua for the third subunit
base = {'A': (0.22, 0.56, 0.86), 'B': (0.50, 0.72, 0.94), 'C': (0.70, 0.73, 0.76), 'G': (0.98, 0.45, 0.20)}
cols = np.array([base[c] for c in ch])
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
img = C * ((0.16 + 0.86 * wrap) * ao)[..., None] + spec[..., None] * 0.34 * ao[..., None] \
      + rim[..., None] * np.array([0.45, 0.70, 0.95]) * 0.30
ink = np.array([0.027, 0.075, 0.133])                        # the page ink, #071322
fog = (0.6 * (1 - zn) ** 1.4)[..., None]
img = np.clip(img * (1 - fog) + ink * fog, 0, 1)
# anti-aliased alpha: render at 2x, downsample
o = (np.dstack([img, v.astype(float)]) * 255).astype(np.uint8)
im = Image.fromarray(o, 'RGBA').resize((W // 2, Hh // 2), Image.LANCZOS)
im.save(out); print('size', im.size)
