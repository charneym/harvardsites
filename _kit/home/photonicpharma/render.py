#!/usr/bin/env python3
"""Photonic Pharma hero (HOME_BRIEF update 2c: a crafted render of the firm's own mechanism). The two-colour SERCA
FRET biosensor that Photonic Pharma's platform screens in living HEK293 cells (Gruber 2014 J Biomol Screen; Schaaf 2017
SLAS Discov): the cardiac/skeletal calcium pump SERCA with phospholamban (crystal structure PDB 4KYT, chains A + B), a GFP
tag on the actuator (A) domain at the N-terminus (GFP, PDB 1EMA) and a red fluorescent protein in the nucleotide-binding (N)
domain near residue 509 (mCherry, PDB 2H5Q, standing in for the red acceptor). Allosteric drugs change the A-N distance;
the fluorescence lifetime plate reader reads that FRET change. Drawn atom by atom: sphere z-buffer, wrap Lambert + Blinn
specular + rim, SSAO, depth fog into the page ink, a soft emissive bloom on the two fluorophores, true alpha.
Usage: python3 render.py <dir with 4KYT.pdb 1EMA.pdb 2H5Q.pdb> out.png yaw pitch roll"""
import sys, numpy as np
from PIL import Image
from scipy.ndimage import gaussian_filter
D, out = sys.argv[1], sys.argv[2]
yaw, pitch, roll = (float(a) for a in sys.argv[3:6])
R = {'C': 1.7, 'N': 1.55, 'O': 1.52, 'S': 1.8}
def load(f, chains, rng=None):
    P = []; rad = []; res = []
    for l in open(f):
        if l[:6] != 'ATOM  ' or l[21] not in chains or l[16] not in ' A': continue
        el = (l[76:78].strip() or l[12:14].strip()[0]).upper()
        if el == 'H': continue
        P.append([float(l[30:38]), float(l[38:46]), float(l[46:54])]); rad.append(R.get(el, 1.7)); res.append(int(l[22:26]))
    return np.array(P), np.array(rad), np.array(res)
def rotm(a, deg):
    t = np.radians(deg); c, s = np.cos(t), np.sin(t)
    return {'x': np.array([[1, 0, 0], [0, c, -s], [0, s, c]]), 'y': np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]]),
            'z': np.array([[c, -s, 0], [s, c, 0], [0, 0, 1]])}[a]
S, Sr, Sres = load(D + '/4KYT.pdb', 'A')
L, Lr, _ = load(D + '/4KYT.pdb', 'B')
cen = S.mean(0)
# membrane normal: the principal axis of the pump; headpiece (N domain 360-600) up
u, s_, vt = np.linalg.svd(S - cen); ax = vt[0]
head = S[(Sres > 360) & (Sres < 600)].mean(0)
if np.dot(head - cen, ax) < 0: ax = -ax
def anchor(lo, hi): return S[(Sres >= lo) & (Sres <= hi)].mean(0)
pA = anchor(1, 12); pN = anchor(500, 515)
def place(f, ch, at, dist, rot):
    P, r, _ = load(f, ch)
    P = (P - P.mean(0)) @ rot.T
    d = at - cen; d -= ax * np.dot(d, ax) * 0.6; d /= np.linalg.norm(d)
    return P + at + d * dist + ax * 8, r
G, Gr = place(D + '/1EMA.pdb', 'A', pA, 20, rotm('x', 70) @ rotm('z', 25))
Rf, Rr = place(D + '/2H5Q.pdb', 'A', pN, 20, rotm('x', -50) @ rotm('y', 40))
P = np.vstack([S, L, G, Rf]); rad = np.concatenate([Sr, Lr, Gr, Rr])
kind = np.array(['S'] * len(S) + ['L'] * len(L) + ['G'] * len(G) + ['R'] * len(Rf))
# domain shading of the pump: A domain cooler, N domain a touch lighter, TM darker
dom = np.array(['S'] * len(P), dtype=object)
y = ax; x = pN - pA; x -= y * np.dot(x, y); x /= np.linalg.norm(x); z = np.cross(x, y)
Q = (P - P.mean(0)) @ np.stack([x, y, z]).T
Q = Q @ rotm('y', yaw).T @ rotm('x', pitch).T @ rotm('z', roll).T
W = 2400; pad = 160
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
# Photonic Pharma logo: slate #323d47 wordmark, orange #f05829 starburst, green #39b549 beam
# pump in a cool slate-steel (lifted so it reads on the ink), PLB pale, GFP the logo green, RFP the logo orange
base = {'S': (0.50, 0.58, 0.66), 'L': (0.78, 0.80, 0.80), 'G': (0.30, 0.78, 0.36), 'R': (0.97, 0.40, 0.18)}
# subtle per-residue variation on the pump so its domains read
cols = np.array([base[k] for k in kind])
sres = np.concatenate([Sres, np.zeros(len(P) - len(Sres), int)])
isS = kind == 'S'
cols[isS & (sres < 45)] *= [0.96, 1.0, 1.06]
cols[isS & (sres >= 360) & (sres < 600)] *= [1.06, 1.06, 1.05]
cols[isS & ((sres < 45) | (sres > 740) | ((sres > 85) & (sres < 125)) | ((sres > 250) & (sres < 340)))] *= [0.86, 0.9, 0.96]
C = np.zeros((Hh, W, 3)); C[v] = cols[idb[v]]
Ld = np.array([-0.45, -0.66, 0.6]); Ld /= np.linalg.norm(Ld)
ndl = nx * Ld[0] + ny * Ld[1] + nz * Ld[2]
wrap = np.clip((ndl + 0.25) / 1.25, 0, 1)
Hv = Ld + np.array([0, 0, 1]); Hv /= np.linalg.norm(Hv)
spec = np.clip(nx * Hv[0] + ny * Hv[1] + nz * Hv[2], 0, 1) ** 32
rim = (1 - nz) ** 3
zf = np.where(v, zb, zb[v].min() - 40)
ao = np.zeros_like(zf)
for rr in (5, 14, 36, 80):
    ao += np.clip((gaussian_filter(zf, rr) - zf) / (rr * 2.2), 0, 1)
ao = np.clip(1 - ao / 2.2, 0.15, 1)
zn = np.where(v, (zb - zb[v].min()) / (zb[v].max() - zb[v].min()), 0)
k = np.where(v, kind[np.maximum(idb, 0)], '')
fp = (k == 'G') | (k == 'R')
img = C * ((0.15 + 0.88 * wrap) * ao)[..., None] + spec[..., None] * 0.32 * ao[..., None] \
      + rim[..., None] * np.array([0.55, 0.68, 0.80]) * 0.26
# fluorophores glow a little from within (subsurface): lift their shadows toward their own hue
img = np.where(fp[..., None], img + C * 0.20 * (1 - wrap)[..., None], img)
ink = np.array([0.043, 0.059, 0.075])                         # the page ink, #0b0f13
fog = (0.55 * (1 - zn) ** 1.4)[..., None]
img = np.clip(img * (1 - fog) + ink * fog, 0, 1)
# emissive bloom: green and orange light spilling softly around the two fluorescent proteins (premultiplied, alpha-aware)
gm = (k == 'G').astype(float); rm = (k == 'R').astype(float)
bloom = gaussian_filter(gm, 60)[..., None] * np.array([0.22, 0.75, 0.30]) + gaussian_filter(rm, 60)[..., None] * np.array([0.95, 0.38, 0.14])
bloom *= 0.55
a = v.astype(float)
ba = np.clip(bloom.max(-1), 0, 1)
A = np.clip(a + ba * (1 - a), 0, 1)
pre = img * a[..., None] + bloom * (1 - a)[..., None]
rgb = np.where(A[..., None] > 1e-4, pre / np.maximum(A, 1e-4)[..., None], 0)
o = (np.dstack([np.clip(rgb, 0, 1), A]) * 255).astype(np.uint8)
im = Image.fromarray(o, 'RGBA').resize((W // 2, Hh // 2), Image.LANCZOS)
im.save(out); print('size', im.size)
