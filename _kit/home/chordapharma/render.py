#!/usr/bin/env python3
"""Ball-and-stick render of capsaicin (PubChem CID 1548943, 3D conformer) for the Chorda Pharma hero.
Orthographic ray-cast in numpy: analytic spheres and capped-less cylinders (half-bonds coloured by atom), key/fill/rim
lighting, depth cue, 2x supersampling, real alpha. Usage: python3 render.py [out.webp] [yaw] [pitch] [roll]"""
import sys, math, pathlib
import numpy as np
from PIL import Image
H = pathlib.Path(__file__).resolve().parent
L = (H / 'capsaicin_cid1548943_3d.sdf').read_text().splitlines()
na, nb = int(L[3][:3]), int(L[3][3:6])
el = []; P = []
for l in L[4:4+na]:
    P.append([float(l[0:10]), float(l[10:20]), float(l[20:30])]); el.append(l[31:34].strip())
P = np.array(P); el = np.array(el)
B = [(int(l[0:3])-1, int(l[3:6])-1, int(l[6:9])) for l in L[4+na:4+na+nb]]
# orient: principal axes, long axis -> x, then yaw/pitch/roll for a pleasing 3/4 view
P = P - P.mean(0)
w, v = np.linalg.eigh(np.cov(P[el != 'H'].T)); v = v[:, ::-1]
P = P @ v
def rot(ax, a):
    c, s = math.cos(a), math.sin(a)
    return {'x': np.array([[1,0,0],[0,c,-s],[0,s,c]]), 'y': np.array([[c,0,s],[0,1,0],[-s,0,c]]), 'z': np.array([[c,-s,0],[s,c,0],[0,0,1]])}[ax]
yaw, pitch, roll = [float(a) for a in (sys.argv[2:5] if len(sys.argv) >= 5 else (25, -18, 22))]
R = rot('z', math.radians(roll)) @ rot('x', math.radians(pitch)) @ rot('y', math.radians(yaw))
P = P @ R.T
P[:, 1] *= -1  # screen y down
COL = {'C': (0.56, 0.33, 0.80), 'O': (0.93, 0.33, 0.24), 'N': (0.62, 0.70, 1.0), 'H': (0.90, 0.88, 0.95)}
RAD = {'C': .40, 'O': .38, 'N': .38, 'H': .21}
OUTW = 1500; SS = 2
mn = P[:, :2].min(0) - .7; mx = P[:, :2].max(0) + .7
scale = (OUTW * SS) / (mx[0] - mn[0]); Wp = OUTW * SS; Hp = int((mx[1] - mn[1]) * scale) + 1
xs = mn[0] + (np.arange(Wp) + .5) / scale; ys = mn[1] + (np.arange(Hp) + .5) / scale
X, Y = np.meshgrid(xs, ys)
Z = np.full(X.shape, -1e9); N = np.zeros(X.shape + (3,)); C = np.zeros(X.shape + (3,)); SH = np.zeros(X.shape)  # SH: 1 = sphere-ish gloss
def put(mask, z, n, col, gloss, sl):
    zz = Z[sl]; m = mask & (z > zz)
    zz[m] = z[m]; N[sl][m] = n[m]; C[sl][m] = col; SH[sl][m] = gloss
def box(c, r):
    x0 = max(0, int((c[0] - r - mn[0]) * scale) - 2); x1 = min(Wp, int((c[0] + r - mn[0]) * scale) + 3)
    y0 = max(0, int((c[1] - r - mn[1]) * scale) - 2); y1 = min(Hp, int((c[1] + r - mn[1]) * scale) + 3)
    return (slice(y0, y1), slice(x0, x1))
def sphere(c, r, col):
    sl = box(c, r); dx = X[sl] - c[0]; dy = Y[sl] - c[1]; d2 = dx*dx + dy*dy; m = d2 < r*r
    dz = np.sqrt(np.clip(r*r - d2, 0, None)); z = c[2] + dz
    n = np.stack([dx, dy, dz], -1) / r
    put(m, z, n, col, 1.0, sl)
def cyl(a, b, r, col):
    sl = box((a + b) / 2, np.linalg.norm(b - a) / 2 + r)
    ax = b - a; Lh = np.linalg.norm(ax); u = ax / Lh
    # ray: o = (x, y, 0) + t*(0,0,1) (camera at +z looking -z; we take the max-z hit)
    ox = X[sl] - a[0]; oy = Y[sl] - a[1]; oz = -a[2]
    d = np.array([0, 0, 1.0])
    dd = d - d.dot(u) * u
    o = np.stack([ox, oy, np.full(ox.shape, oz)], -1)
    oo = o - (o @ u)[..., None] * u
    A = dd.dot(dd); Bq = 2 * (oo @ dd); Cq = (oo * oo).sum(-1) - r*r
    disc = Bq*Bq - 4*A*Cq; m = disc >= 0
    t = (-Bq + np.sqrt(np.clip(disc, 0, None))) / (2*A)  # far root along +z = front surface
    p = o + t[..., None] * d; s = p @ u; m &= (s >= 0) & (s <= Lh)
    n = p - s[..., None] * u; n /= np.linalg.norm(n, axis=-1, keepdims=True) + 1e-9
    put(m, t + a[2] + oz * 0 + 0 + (a[2] * 0), n, col, .7, sl) if False else put(m, a[2] + (p[..., 2] - oz) + 0 * t, n, col, .7, sl)
view = np.array([0, 0, 1.0])
for i, j, o in B:
    a, b = P[i], P[j]; mid = (a + b) / 2
    hb = el[i] == 'H' or el[j] == 'H'; r = .085 if hb else .12
    offs = [np.zeros(3)]
    if o == 2:
        off = np.cross(b - a, view); off = off / (np.linalg.norm(off) + 1e-9) * .12; offs = [off, -off]; r = .085
    for of in offs:
        cyl(a + of, mid + of, r, COL[el[i]]); cyl(mid + of, b + of, r, COL[el[j]])
for k in np.argsort(P[:, 2]):
    sphere(P[k], RAD[el[k]], COL[el[k]])
hit = Z > -1e8
# lighting
def nrm(v): v = np.array(v, float); return v / np.linalg.norm(v)
Lk = nrm([-.55, -.6, .58]); Lf = nrm([.7, .25, .65]); Lr = nrm([.35, .9, -.25])
ndl = np.clip((N * Lk).sum(-1), 0, 1); ndf = np.clip((N * Lf).sum(-1), 0, 1)
rim = np.clip(1 - N[..., 2], 0, 1) ** 2.2
Hk = nrm(Lk + view); spec = np.clip((N * Hk).sum(-1), 0, 1) ** 48 * (.55 + .45 * SH)
zr = (Z - Z[hit].min()) / (Z[hit].max() - Z[hit].min() + 1e-9); depth = .55 + .45 * np.clip(zr, 0, 1)
amb = .16
col = C * (amb + .78 * ndl[..., None] + .22 * ndf[..., None]) * depth[..., None]
col += spec[..., None] * .85 + rim[..., None] * np.array([.55, .38, .85]) * .38
col = np.clip(col, 0, 1) ** (1 / 1.15)
img = np.zeros(X.shape + (4,)); img[..., :3] = col; img[..., 3] = hit
im = Image.fromarray((img * 255).astype('uint8'), 'RGBA')
# premultiplied downsample for clean alpha edges
pm = np.asarray(im).astype(float) / 255; pm[..., :3] *= pm[..., 3:4]
s = Image.fromarray((pm * 255).astype('uint8'), 'RGBA').resize((Wp // SS, Hp // SS), Image.LANCZOS)
a = np.asarray(s).astype(float) / 255; rgb = a[..., :3] / np.clip(a[..., 3:4], 1e-4, None)
out = np.concatenate([np.clip(rgb, 0, 1), a[..., 3:4]], -1)
o = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else H / 'hero.webp')
Image.fromarray((out * 255).astype('uint8'), 'RGBA').save(o, quality=92, method=6)
print('wrote', o, Wp // SS, Hp // SS)
