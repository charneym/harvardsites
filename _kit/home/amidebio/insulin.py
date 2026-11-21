#!/usr/bin/env python3
"""Render the hero: a space-filling model of the human insulin hexamer (PDB 1ZNJ, RCSB: six insulin molecules around two
zinc ions, the form insulin is stored in), shaded as a material model (Lambert + soft key, rim, specular, depth-based ambient
occlusion). A chains in pale aqua, B chains in AmideBio's logo teal (#109bc5), the two zinc ions in white. Viewed a little off
the three-fold axis (through the zinc ions) so the ring reads with depth. Transparent ground. Output: insulin.png (RGBA).
Usage: python3 insulin.py [tiltx tilty rotz size]"""
import numpy as np, pathlib, sys
from PIL import Image
H = pathlib.Path(__file__).resolve().parent
def _box(a, r, ax):
    a = np.moveaxis(a, ax, 0); p = np.concatenate([np.repeat(a[:1], r + 1, 0), a, np.repeat(a[-1:], r, 0)]); c = np.cumsum(p, 0)
    return np.moveaxis((c[2 * r + 1:] - c[:-2 * r - 1]) / (2 * r + 1), 0, ax)
def blur(a, s):
    r = max(1, int(s * .9))
    for _ in range(3): a = _box(_box(a, r, 0), r, 1)
    return a
RAD = {'C': 1.70, 'N': 1.55, 'O': 1.52, 'S': 1.80, 'ZN': 1.39}
xyz, el, ch, zn = [], [], [], []
for l in open(H / '1ZNJ.pdb'):
    rec = l[:6].strip()
    if rec == 'ATOM':
        e = l[76:78].strip()
        if e not in RAD: continue
        xyz.append([float(l[30:38]), float(l[38:46]), float(l[46:54])]); el.append(e); ch.append(l[21])
    elif rec == 'HETATM' and l[17:20].strip() == 'ZN':
        zn.append([float(l[30:38]), float(l[38:46]), float(l[46:54])])
X = np.array(xyz); Z0 = np.array(zn)
for p in Z0: X = np.vstack([X, p]); el.append('ZN'); ch.append('Z')
ctr = X[:-2].mean(0); X -= ctr; Z0 -= ctr
# three-fold axis: through the two zinc ions
ax = Z0[1] - Z0[0]; ax /= np.linalg.norm(ax)
u = np.cross(ax, [1, 0, 0]); u /= np.linalg.norm(u); v = np.cross(ax, u)
P = X @ np.stack([u, v, ax], 1)   # z = along the axis (toward camera)
def rot(a, k):
    c, s = np.cos(a), np.sin(a)
    return {'x': np.array([[1, 0, 0], [0, c, -s], [0, s, c]]), 'y': np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]]), 'z': np.array([[c, -s, 0], [s, c, 0], [0, 0, 1]])}[k]
a = [float(t) for t in (sys.argv[1:4] if len(sys.argv) > 3 else (0.62, -0.28, 0.4))]
P = P @ rot(a[2], 'z').T @ rot(a[0], 'x').T @ rot(a[1], 'y').T
S = int(sys.argv[4]) if len(sys.argv) > 4 else 2400
rad = np.array([RAD[e] for e in el]); rad[-2:] *= 1.15
lo = (P[:, :2] - rad[:, None]).min(0); hi = (P[:, :2] + rad[:, None]).max(0)
sc = S * .9 / (hi - lo).max(); off = np.array([S, S]) / 2 - (lo + hi) / 2 * sc
ZB = np.full((S, S), -1e9); N = np.zeros((S, S, 3)); ID = np.full((S, S), -1)
for i in np.argsort(P[:, 2]):
    cx, cy = P[i, :2] * sc + off; cy = S - cy; r = rad[i] * sc
    x0, x1 = int(max(cx - r, 0)), int(min(cx + r + 1, S)); y0, y1 = int(max(cy - r, 0)), int(min(cy + r + 1, S))
    yy, xx = np.mgrid[y0:y1, x0:x1]; dx = (xx + .5 - cx) / r; dy = (yy + .5 - cy) / r; d2 = dx * dx + dy * dy; m = d2 < 1
    dz = np.sqrt(np.clip(1 - d2, 0, 1)); z = P[i, 2] * sc + dz * r
    sub = ZB[y0:y1, x0:x1]; upd = m & (z > sub)
    sub[upd] = z[upd]; N[y0:y1, x0:x1][upd] = np.stack([dx, -dy, dz], -1)[upd]; ID[y0:y1, x0:x1][upd] = i
mask = ID >= 0
Zf = np.where(mask, ZB, ZB[mask].min() - 6 * sc)
ao = np.zeros_like(ZB)
for rr in (5, 12, 26, 54, 100):
    b = blur(Zf, rr); ao += np.clip((b - Zf) / (rr * 1.5), 0, 1)
ao = np.clip(1 - ao / 2.4, 0, 1)
L = np.array([-.5, .6, .62]); L /= np.linalg.norm(L)
lam = np.clip((N * L).sum(-1), 0, 1)
Hh = L + np.array([0, 0, 1]); Hh /= np.linalg.norm(Hh); spec = np.clip((N * Hh).sum(-1), 0, 1) ** 42
rim = (1 - np.clip(N[..., 2], 0, 1)) ** 3
CH = np.array(ch); E = np.array(el)
isA = np.isin(CH, list('ACEGIK')); isZ = CH == 'Z'
aqua = np.array([128, 214, 236]) / 255; teal = np.array([22, 160, 204]) / 255
col = np.where(isA[:, None], aqua, teal)
# heteroatoms a touch deeper, sulfur (the disulfide bonds) warm pale
col = np.where(((E == 'N') | (E == 'O'))[:, None], col * .86, col)
col = np.where((E == 'S')[:, None], np.array([226, 232, 214]) / 255, col)
col = np.where(isZ[:, None], np.array([246, 250, 252]) / 255, col)
C = col[np.clip(ID, 0, None)]
zn_ = (ZB - ZB[mask].min()) / (ZB[mask].max() - ZB[mask].min() + 1e-6); zn_ = np.where(mask, zn_, 0)
ink = np.array([7, 24, 34]) / 255
k = (.2 + .9 * lam * (.55 + .45 * ao))[..., None]
shade = k * C * (.55 + .45 * ao[..., None]) + spec[..., None] * .32 * ao[..., None] + rim[..., None] * C * .2
f = (.6 + .4 * zn_[..., None])
shade = shade * f + ink * (1 - f) * .7
img = np.clip(shade, 0, 1)
rgba = np.dstack([img * 255, mask * 255.]).astype(np.uint8)
im = Image.fromarray(rgba, 'RGBA').resize((S // 2, S // 2), Image.LANCZOS)
im = im.crop(im.getbbox()); im.save(H / 'insulin.png'); print(im.size, X.shape)
