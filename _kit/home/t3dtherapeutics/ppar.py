#!/usr/bin/env python3
"""Render the hero: a space-filling model of the human PPAR-delta ligand-binding domain (RCSB PDB 3TKM, Batista et al.,
PPAR-delta bound to the agonist GW0742). PPAR-delta is the nuclear receptor T3D-959 activates (with PPAR-gamma at
15-fold lower potency; t3dtherapeutics.com, lead product page). The protein is shaded as a material model (Lambert + soft key,
rim, specular, depth-based ambient occlusion) in T3D's logo blues, with the activation helix (helix 12, the C-terminal
residues 425-441) a lighter blue. A cutaway opens the front of the receptor over its ligand pocket so the bound agonist
(GW0742, not T3D-959, whose structure is not published in a crystal) shows inside in T3D's logo green. Transparent ground.
Output: ppar.png (RGBA). Usage: python3 ppar.py [rx ry rz size cut]"""
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
RAD = {'C': 1.70, 'N': 1.55, 'O': 1.52, 'S': 1.80, 'F': 1.47}
xyz, el, kind = [], [], []
for l in open(H / '3TKM.pdb'):
    rec = l[:6].strip()
    if rec == 'ATOM':
        e = l[76:78].strip()
        if e not in RAD: continue
        rn = int(l[22:26]); xyz.append([float(l[30:38]), float(l[38:46]), float(l[46:54])]); el.append(e)
        kind.append('H12' if rn >= 425 else 'P')
    elif rec == 'HETATM' and l[17:20] == 'GW0':
        e = l[76:78].strip()
        if e not in RAD: continue
        xyz.append([float(l[30:38]), float(l[38:46]), float(l[46:54])]); el.append(e); kind.append('L')
X = np.array(xyz); K = np.array(kind); E = np.array(el)
X -= X[K != 'L'].mean(0)
d = np.array([0.841, 0.347, -0.415]); d /= np.linalg.norm(d)        # view direction with the most open path to the ligand
u = np.cross(d, [0, 0, 1.]); u /= np.linalg.norm(u); v = np.cross(d, u)
P = X @ np.stack([u, v, d], 1)
def rot(a, k):
    c, s = np.cos(a), np.sin(a)
    return {'x': np.array([[1, 0, 0], [0, c, -s], [0, s, c]]), 'y': np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]]), 'z': np.array([[c, -s, 0], [s, c, 0], [0, 0, 1]])}[k]
a = [float(t) for t in (sys.argv[1:4] if len(sys.argv) > 3 else (0.0, 0.0, 0.0))]
P = P @ rot(a[2], 'z').T @ rot(a[0], 'x').T @ rot(a[1], 'y').T
S = int(sys.argv[4]) if len(sys.argv) > 4 else 2400
CUT = float(sys.argv[5]) if len(sys.argv) > 5 else 7.5
# cutaway: drop protein atoms in front of the ligand, inside a soft cylinder round it (seen along the view)
Lc = P[K == 'L'].mean(0); LP = P[K == 'L']
dxy = np.min(np.linalg.norm(P[:, None, :2] - LP[None, :, :2], axis=2), 1)
cut = (K != 'L') & (dxy < CUT) & (P[:, 2] > LP[:, 2].min() + 1.0)
keep = ~cut
P, K, E = P[keep], K[keep], E[keep]
rad = np.array([RAD[e] for e in E])
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
blue = np.array([30, 118, 196]) / 255; h12 = np.array([92, 172, 236]) / 255; green = np.array([96, 196, 92]) / 255
col = np.where((K == 'H12')[:, None], h12, blue)
col = np.where(((E == 'N') | (E == 'O'))[:, None] & (K != 'L')[:, None], col * .86, col)
col = np.where((E == 'S')[:, None] & (K != 'L')[:, None], col * 1.12, col)
col = np.where((K == 'L')[:, None], green, col)
col = np.where(((K == 'L') & ((E == 'F') | (E == 'S') | (E == 'O')))[:, None], np.array([178, 232, 150]) / 255, col)
C = col[np.clip(ID, 0, None)]
isL = (K[np.clip(ID, 0, None)] == 'L') & mask
zn_ = (ZB - ZB[mask].min()) / (ZB[mask].max() - ZB[mask].min() + 1e-6); zn_ = np.where(mask, zn_, 0)
ink = np.array([4, 16, 34]) / 255
k = (.2 + .9 * lam * (.55 + .45 * ao))[..., None]
shade = k * C * (.55 + .45 * ao[..., None]) + spec[..., None] * .32 * ao[..., None] + rim[..., None] * C * .2
f = (.6 + .4 * zn_[..., None])
shade = shade * f + ink * (1 - f) * .7
# the ligand sits deep in the pocket: lift it out of the cavity shadow a little so it reads as the bright focal point
shade = np.where(isL[..., None], np.clip(shade * 1.55 + .05, 0, 1), shade)
img = np.clip(shade, 0, 1)
rgba = np.dstack([img * 255, mask * 255.]).astype(np.uint8)
im = Image.fromarray(rgba, 'RGBA').resize((S // 2, S // 2), Image.LANCZOS)
im = im.crop(im.getbbox()); im.save(H / 'ppar.png'); print(im.size, int(cut.sum()), 'cut', int(isL.sum()), 'ligand px')
