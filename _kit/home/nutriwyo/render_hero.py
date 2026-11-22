#!/usr/bin/env python3
"""Nutriwyo hero: cathepsin K with odanacatib bound in its active-site cleft, space-filling, from the real 1.4 A crystal
structure (RCSB PDB 5TDI). Z-buffer raster, light-space shadow map with PCF, screen-space ambient occlusion, soft rim,
and a depth-of-field composite. Enzyme in a matte sage-bone (its sulfurs warm), odanacatib in the Nutriwyo orange.
Usage: python3 render_hero.py 5tdi.pdb out.webp W H [yaw] [pitch] [roll]"""
import sys, numpy as np
from PIL import Image, ImageFilter
pdb, out = sys.argv[1], sys.argv[2]
W, H = int(sys.argv[3]), int(sys.argv[4])
YAW = float(sys.argv[5]) if len(sys.argv) > 5 else 0.0
PIT = float(sys.argv[6]) if len(sys.argv) > 6 else 0.0
ROL = float(sys.argv[7]) if len(sys.argv) > 7 else 0.0
SS = 2
atoms = []
for l in open(pdb):
    if l.startswith('ENDMDL'): break
    if l.startswith(('ATOM', 'HETATM')):
        rn = l[17:20]; el = l[76:78].strip()
        if rn == 'HOH' or el == 'H': continue
        atoms.append((float(l[30:38]), float(l[38:46]), float(l[46:54]), el, rn == '7AS'))
P = np.array([a[:3] for a in atoms]); E = [a[3] for a in atoms]; LIG = np.array([a[4] for a in atoms])
P -= P.mean(0)
# turn the cleft (protein centre -> ligand centre) toward the viewer, then the requested tilt
v = P[LIG].mean(0); v /= np.linalg.norm(v); z = np.array([0, 0, 1.])
ax = np.cross(v, z); s = np.linalg.norm(ax); c = v @ z
K = np.array([[0, -ax[2], ax[1]], [ax[2], 0, -ax[0]], [-ax[1], ax[0], 0]])
Rv = np.eye(3) + K + K @ K * ((1 - c) / (s * s + 1e-12))
P = P @ Rv.T
def R(a, d):
    t = np.radians(d); c, s = np.cos(t), np.sin(t)
    if a == 'x': return np.array([[1, 0, 0], [0, c, -s], [0, s, c]])
    if a == 'y': return np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]])
    return np.array([[c, -s, 0], [s, c, 0], [0, 0, 1]])
P = P @ R('z', ROL).T @ R('y', YAW).T @ R('x', PIT).T
RAD = {'C': 1.7, 'O': 1.52, 'N': 1.55, 'S': 1.8, 'F': 1.47}
# enzyme: matte sage-bone, slightly varied by element; odanacatib: brand orange (#e69740), fluorines cream, sulfone gold
PC = {'C': (0xa9, 0xb4, 0xa6), 'O': (0xc4, 0xbd, 0xae), 'N': (0x93, 0xae, 0x95), 'S': (0xc2, 0xbc, 0x9c)}
LC = {'C': (0xe6, 0x97, 0x40), 'O': (0xf0, 0xc2, 0x8a), 'N': (0xd8, 0x7a, 0x34), 'S': (0xf4, 0xd0, 0x6a), 'F': (0xf6, 0xe6, 0xc8)}
r = np.array([RAD[e] for e in E])
col = np.array([(LC if LIG[i] else PC)[e] for i, e in enumerate(E)], float) / 255.
col = col ** 2.2
w, h = W * SS, H * SS
mn = (P[:, :2] - r[:, None]).min(0); mx = (P[:, :2] + r[:, None]).max(0)
sc = min(w * 0.9 / (mx[0] - mn[0]), h * 0.9 / (mx[1] - mn[1])); cen = (mn + mx) / 2
X = (P[:, 0] - cen[0]) * sc + w / 2; Y = -(P[:, 1] - cen[1]) * sc + h / 2; Z = P[:, 2] * sc; RR = r * sc
def zraster(X, Y, Z, RR, w, h):
    zb = np.full((h, w), -1e9, np.float32); ib = np.full((h, w), -1, np.int32)
    for i in range(len(X)):
        x0, x1 = int(max(0, X[i] - RR[i] - 1)), int(min(w, X[i] + RR[i] + 2))
        y0, y1 = int(max(0, Y[i] - RR[i] - 1)), int(min(h, Y[i] + RR[i] + 2))
        if x0 >= x1 or y0 >= y1: continue
        yy, xx = np.mgrid[y0:y1, x0:x1]; d2 = (xx + .5 - X[i]) ** 2 + (yy + .5 - Y[i]) ** 2; m = d2 < RR[i] ** 2
        zz = Z[i] + np.sqrt(np.maximum(RR[i] ** 2 - d2, 0)); sub = zb[y0:y1, x0:x1]; u = m & (zz > sub)
        sub[u] = zz[u]; ib[y0:y1, x0:x1][u] = i
    return zb, ib
zb, ib = zraster(X, Y, Z, RR, w, h)
cov = ib >= 0; ys, xs = np.nonzero(cov); ids = ib[cov]
px, py, pz = xs + .5, ys + .5, zb[cov]
N = np.stack([(px - X[ids]) / RR[ids], -(py - Y[ids]) / RR[ids], (pz - Z[ids]) / RR[ids]], 1)
N /= np.linalg.norm(N, axis=1, keepdims=True)
Pw = np.stack([px, -py, pz], 1); Ac = np.stack([X, -Y, Z], 1)
Ld = np.array([-0.5, 0.66, 0.56]); Ld /= np.linalg.norm(Ld)
# shadow map in light space
up = np.array([0, 0, 1.]) if abs(Ld[1]) > .9 else np.array([0, 1., 0])
lx = np.cross(up, Ld); lx /= np.linalg.norm(lx); ly = np.cross(Ld, lx)
M = np.stack([lx, ly, Ld], 0)
Al = Ac @ M.T; Pl = (Pw + N * 0.6 * SS) @ M.T
SM = 2600; lmn = (Al[:, :2] - RR[:, None]).min(0) - 4; lmx = (Al[:, :2] + RR[:, None]).max(0) + 4
ls = (SM - 1) / (lmx - lmn).max()
sx = (Al[:, 0] - lmn[0]) * ls; sy = (Al[:, 1] - lmn[1]) * ls
szb, _ = zraster(sx, sy, Al[:, 2] * ls, RR * ls, SM, SM)
qx = (Pl[:, 0] - lmn[0]) * ls; qy = (Pl[:, 1] - lmn[1]) * ls; qz = Pl[:, 2] * ls
sh = np.zeros(len(px), np.float32); taps = [(a, b) for a in (-3, -1.5, 0, 1.5, 3) for b in (-3, -1.5, 0, 1.5, 3)]
for a, b in taps:
    ix = np.clip((qx + a).astype(int), 0, SM - 1); iy = np.clip((qy + b).astype(int), 0, SM - 1)
    sh += (szb[iy, ix] <= qz + 1.5).astype(np.float32)
sh /= len(taps); sh = sh ** 1.3
# screen-space AO from the depth buffer (many radii, many directions)
zf = np.where(cov, zb, Z.min() - 40 * SS).astype(np.float32)
ao = np.zeros(len(px), np.float32); n = 0
for rad in (3, 7, 14, 26, 44):
    for k in range(12):
        t = k / 12 * 2 * np.pi + rad * .37; dx = int(round(np.cos(t) * rad * SS / 2)); dy = int(round(np.sin(t) * rad * SS / 2))
        jx = np.clip(xs + dx, 0, w - 1); jy = np.clip(ys + dy, 0, h - 1)
        dz = zf[jy, jx] - pz; rng = rad * SS * 1.1
        ao += np.clip(dz / rng, 0, 1) * np.clip(1 - (dz - rng) / (rng * 2), 0, 1); n += 1
ao = np.clip(1 - 1.65 * ao / n, 0.12, 1) ** 1.15
V = np.array([0, 0, 1.])
ndl = N @ Ld; diff = np.clip((ndl + 0.18) / 1.18, 0, 1)
Hh = Ld + V; Hh /= np.linalg.norm(Hh); spec = np.clip(N @ Hh, 0, 1) ** 26 * 0.26
F2 = np.array([0.75, -0.3, 0.45]); F2 /= np.linalg.norm(F2); fill = np.clip(N @ F2, 0, 1)
rim = (1 - np.clip(N @ V, 0, 1)) ** 3
base = col[ids]
# micro-variation: a faint per-atom tone jitter so the surface reads as a real material, not a flat plastic
rng = np.random.default_rng(7); jit = (1 + (rng.random(len(X)) - .5) * .12)[ids][:, None]
lit = base * jit * (0.05 + 1.0 * diff[:, None] * (0.18 + 0.82 * sh[:, None])) * ao[:, None]
lit += base * fill[:, None] * 0.14 * ao[:, None]
lit += spec[:, None] * (0.25 + .75 * sh[:, None]) * np.array([1, .97, .9]) * ao[:, None]
lit += rim[:, None] * np.array([0.30, 0.42, 0.30]) * 0.28 * ao[:, None] ** .5
lg = LIG[ids][:, None]; lit += lg * base * 0.1 * ao[:, None]   # the drug a touch brighter
zn = (pz - pz.min()) / (pz.max() - pz.min() + 1e-6)
lit *= (0.5 + 0.5 * zn)[:, None]
img = np.zeros((h, w, 4), np.float32); img[ys, xs, :3] = np.clip(lit, 0, 1) ** (1 / 2.2); img[ys, xs, 3] = 1
def blur(a, rad):
    o = np.zeros_like(a)
    for k in range(4):
        ch = Image.fromarray(np.clip(a[..., k] * 255 + .5, 0, 255).astype(np.uint8), 'L')
        o[..., k] = np.array(ch.filter(ImageFilter.GaussianBlur(float(rad))), np.float32) / 255
    return o
za = (Z - Z.min()) / (Z.max() - Z.min() + 1e-6); zm = np.full((h, w), -1.0, np.float32); zm[ys, xs] = za[ids]
FOC = za[LIG].mean(); pm = img.copy(); pm[..., :3] *= pm[..., 3:]
nb = 12; ed = np.linspace(0, 1.0001, nb + 1); acc = np.zeros_like(pm)
for b in range(nb):
    m = (zm >= ed[b]) & (zm < ed[b + 1])
    if not m.any(): continue
    lay = pm * m[..., None]; zc = (ed[b] + ed[b + 1]) / 2
    rad = 9.0 * SS * min(1, max(0, abs(zc - FOC) - .08) / 0.55) ** 1.25
    if rad > 0.6: lay = blur(lay, rad)
    acc = lay + acc * (1 - lay[..., 3:])
a = acc[..., 3:]; rgb = np.where(a > 1e-4, acc[..., :3] / np.maximum(a, 1e-4), 0)
res = np.concatenate([rgb, a], 2)
im = Image.fromarray((np.clip(res, 0, 1) * 255).astype(np.uint8), 'RGBA').resize((W, H), Image.LANCZOS)
im.save(out, quality=90, method=6); print('ok', len(X), im.size, 'ligand atoms', LIG.sum())
