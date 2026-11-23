#!/usr/bin/env python3
"""Hero render for Aclipse Therapeutics: M107 (lobeglitazone, C24H24N4O5S), the company's lead molecule, as a glossy
ball-and-stick model from the PubChem 3D conformer (CID 9826451, m107.sdf). Orthographic ray cast of spheres and
cylinders with key-light shadows, analytic sphere ambient occlusion, Blinn specular, soft environment and rim light.
Real alpha output (hero.png -> hero.webp). Usage: python3 render.py [W H yaw pitch roll]"""
import sys, numpy as np
from PIL import Image
W, H = (int(sys.argv[1]), int(sys.argv[2])) if len(sys.argv) > 2 else (1500, 1200)
YAW, PIT, ROL = (float(a) for a in sys.argv[3:6]) if len(sys.argv) > 5 else (20., -24., 28.)
SS = 2
L = open(__file__.rsplit('/', 1)[0] + '/m107.sdf').read().splitlines()
na, nb = int(L[3][:3]), int(L[3][3:6])
X = np.array([[float(l[:10]), float(l[10:20]), float(l[20:30])] for l in L[4:4 + na]])
EL = [l[31:34].strip() for l in L[4:4 + na]]
BONDS = [(int(l[:3]) - 1, int(l[3:6]) - 1, int(l[6:9])) for l in L[4 + na:4 + na + nb]]
KEEP = [i for i, e in enumerate(EL) if e != 'H']
RM = {o: n for n, o in enumerate(KEEP)}
BONDS = [(RM[a], RM[b], o) for a, b, o in BONDS if a in RM and b in RM]
X = X[KEEP]; EL = [EL[i] for i in KEEP]; na = len(KEEP)
X -= X.mean(0)
u, s, vt = np.linalg.svd(X); X = X @ vt.T  # principal axes: long axis on x
def rot(y, p, r):
    y, p, r = np.radians([y, p, r])
    Ry = np.array([[np.cos(y), 0, np.sin(y)], [0, 1, 0], [-np.sin(y), 0, np.cos(y)]])
    Rx = np.array([[1, 0, 0], [0, np.cos(p), -np.sin(p)], [0, np.sin(p), np.cos(p)]])
    Rz = np.array([[np.cos(r), -np.sin(r), 0], [np.sin(r), np.cos(r), 0], [0, 0, 1]])
    return Rz @ Rx @ Ry
X = X @ rot(YAW, PIT, ROL).T
RAD = {'C': .40, 'N': .40, 'O': .40, 'S': .52, 'H': .25}
# palette: white-ceramic carbon, heteroatoms in the Aclipse logo blues, sulfur in the logo grey
COL = {'C': (.93, .95, .97), 'H': (.86, .89, .93), 'N': (.10, .42, .80), 'O': (.16, .66, .90), 'S': (.62, .64, .67)}
R = np.array([RAD[e] for e in EL]); C = np.array([COL[e] for e in EL])
BR = .13
lo = (X[:, :2] - R[:, None]).min(0); hi = (X[:, :2] + R[:, None]).max(0)
span = hi - lo; scale = min((W * SS * .94) / span[0], (H * SS * .94) / span[1])
cx, cy = (lo + hi) / 2
WW, HH = W * SS, H * SS
px = (np.arange(WW) - WW / 2 + .5) / scale + cx
py = -(np.arange(HH) - HH / 2 + .5) / scale + cy
PX, PY = np.meshgrid(px, py)
P = np.stack([PX.ravel(), PY.ravel()], 1)
N = P.shape[0]
Z = np.full(N, -1e9); NRM = np.zeros((N, 3)); CC = np.zeros((N, 3))
# spheres (camera looks down -z; larger z is nearer)
for i in range(na):
    d2 = ((P - X[i, :2]) ** 2).sum(1); m = d2 < R[i] ** 2
    if not m.any(): continue
    z = X[i, 2] + np.sqrt(R[i] ** 2 - d2[m]); idx = np.where(m)[0]; k = z > Z[idx]; idx = idx[k]
    Z[idx] = z[k]; nn = np.c_[P[idx] - X[i, :2], z[k] - X[i, 2]] / R[i]; NRM[idx] = nn; CC[idx] = C[i]
# cylinders, half-coloured by each end atom
for a, b, o in BONDS:
    A, B = X[a], X[b]; D = B - A; Lb = np.linalg.norm(D); D = D / Lb
    # ray o=(x,y,BIG) dir=(0,0,-1): solve |(O - A) x D|=BR
    for off in ([0.0] if o != 2 else [-.11, .11]):
        rr = BR if o != 2 else BR * .72
        perp = np.cross(D, [0, 0, 1.]); perp = perp / (np.linalg.norm(perp) + 1e-9)
        A2 = A + perp * off
        w = np.c_[P - A2[:2], np.zeros(N)]
        # ray: Rp = (px,py,t'), param by z. f(z)= |(Q(z)-A2) - ((Q(z)-A2).D)D|^2 = rr^2 ; Q(z)-A2 = w + z' e_z
        e = np.array([0, 0, 1.])
        wd = w @ D; ed = D[2]
        u_ = w - wd[:, None] * D; v_ = e - ed * D
        qa = v_ @ v_; qb = 2 * (u_ @ v_); qc = (u_ * u_).sum(1) - rr ** 2
        disc = qb * qb - 4 * qa * qc; m = disc > 0
        if qa < 1e-9 or not m.any(): continue
        zz = (-qb[m] + np.sqrt(disc[m])) / (2 * qa)  # nearer root (z relative to A2)
        idx = np.where(m)[0]
        tt = wd[idx] + zz * ed
        k = (tt > 0) & (tt < Lb); idx, zz, tt = idx[k], zz[k], tt[k]
        z = A2[2] + zz; k = z > Z[idx]; idx, z, zz, tt = idx[k], z[k], zz[k], tt[k]
        Z[idx] = z
        q = np.c_[w[idx, :2], zz] - tt[:, None] * D
        NRM[idx] = q / np.linalg.norm(q, axis=1, keepdims=True)
        CC[idx] = np.where((tt < Lb / 2)[:, None], C[a], C[b])
hit = Z > -1e8
idx = np.where(hit)[0]
Pp = np.c_[P[idx], Z[idx]]; Nn = NRM[idx]; Cc = CC[idx]
Lk = np.array([-.55, .62, .56]); Lk /= np.linalg.norm(Lk)
# shadows from the key light (spheres + bond midpoints as small spheres)
occ_c = np.r_[X, np.array([(X[a] + X[b]) / 2 for a, b, o in BONDS])]
occ_r = np.r_[R, np.full(len(BONDS), BR * 1.1)]
sh = np.ones(len(idx))
O = Pp + Nn * 1e-3
for j in range(len(occ_c)):
    oc = occ_c[j] - O; tca = oc @ Lk; d2 = (oc * oc).sum(1) - tca ** 2
    pen = np.clip((occ_r[j] ** 2 - d2) / (occ_r[j] ** 2) * 3, 0, 1)
    sh *= np.where(tca > 1e-3, 1 - .85 * pen, 1)
# analytic sphere ambient occlusion
ao = np.ones(len(idx))
for j in range(len(occ_c)):
    dv = occ_c[j] - Pp; d = np.linalg.norm(dv, axis=1); ok = d > occ_r[j] * 1.02
    cosv = np.clip((dv * Nn).sum(1) / np.maximum(d, 1e-6), 0, 1)
    ao *= np.where(ok, 1 - np.clip(occ_r[j] ** 2 / np.maximum(d, 1e-6) ** 2 * cosv * .9, 0, .9), 1)
ao = np.clip(ao, 0, 1) ** .8
V = np.array([0, 0, 1.])
ndl = (Nn @ Lk)
diff = np.clip(ndl * .82 + .18, 0, 1)  # wrapped diffuse
Hh = (Lk + V); Hh /= np.linalg.norm(Hh)
spec = np.clip(Nn @ Hh, 0, 1) ** 90 * 1.1 * sh
spec2 = np.clip(Nn @ Hh, 0, 1) ** 14 * .10 * sh
fres = (1 - np.clip(Nn @ V, 0, 1)) ** 3
# environment: cool sky above, deep navy below; rim from the logo sky blue behind right
env = (.5 + .5 * Nn[:, 1])[:, None] * np.array([.30, .42, .58]) + .06
rimL = np.array([.7, -.15, -.35]); rimL /= np.linalg.norm(rimL)
rim = np.clip(Nn @ rimL + .35, 0, 1) ** 2 * fres
key = np.array([1.0, .98, .95])
col = Cc * (diff * sh * .92 + .10)[:, None] * key + Cc * env * .45 * ao[:, None]
col = col * (.35 + .65 * ao)[:, None]
col += (spec + spec2)[:, None] * np.array([1, 1, 1.])
col += rim[:, None] * np.array([.24, .62, .90]) * .9
col += fres[:, None] * env * .25
# depth cue: far parts sink toward the page ink
zn = (Pp[:, 2] - Pp[:, 2].min()) / (np.ptp(Pp[:, 2]) + 1e-6)
INK = np.array([7, 25, 48]) / 255.
col = col * (.62 + .38 * zn[:, None]) + INK * (.38 * (1 - zn[:, None]))
col = np.clip(col, 0, 1) ** (1 / 1.08)
img = np.zeros((N, 4)); img[idx, :3] = col; img[idx, 3] = 1
img = img.reshape(HH, WW, 4)
# premultiplied downsample for clean alpha edges
pm = img.copy(); pm[..., :3] *= pm[..., 3:4]
pm = pm.reshape(H, SS, W, SS, 4).mean((1, 3))
a = pm[..., 3:4]; rgb = np.where(a > 0, pm[..., :3] / np.maximum(a, 1e-6), 0)
out = (np.dstack([rgb, a]) * 255 + .5).clip(0, 255).astype(np.uint8)
im = Image.fromarray(out, 'RGBA'); bb = im.getbbox(); im = im.crop(bb)
OUT = sys.argv[6] if len(sys.argv) > 6 else 'hero'
im.save(OUT + '.png')
if OUT == 'hero': im.save('hero.webp', quality=92, method=6)
print('hero', im.size, 'bbox', bb)
