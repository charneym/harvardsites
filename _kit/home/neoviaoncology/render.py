#!/usr/bin/env python3
"""Neovia Oncology hero (HOME_BRIEF update 2c: a crafted render of the real mechanism). Human DNA topoisomerase II alpha,
the dimeric DNA-binding/cleavage core, gripping a bent DNA duplex: PDB 4FM9 (Wendorff et al. 2012), biological assembly 1.
NEV-801 is described by Neovia as a dual Topo I / Topo II catalytic inhibitor; this shows its Topo II target as solved by
crystallography, not the drug itself (its structure is not public). Protein as a pearl cartoon (flat helix ribbons, thin
loops; the two subunits in pearl and in the logo's cool grey), DNA as glossy backbones with base rungs in the logo blue
#0281b5. Numpy triangle rasteriser with z-buffer, key/fill/rim light, depth occlusion, 2x SS, real alpha (DJ).
Usage: python3 render.py 4FM9.pdb1 out.png [W] [yaw pitch roll]"""
import sys, math
import numpy as np
from PIL import Image, ImageFilter
PDB = sys.argv[1]; OUT = sys.argv[2]
OW = int(sys.argv[3]) if len(sys.argv) > 3 else 1200
yaw, pitch, roll = [float(a) for a in (sys.argv[4:7] if len(sys.argv) >= 7 else (0, 0, 0))]
SS = 2
L = open(PDB).read().splitlines()
model = 1
prot = {}; dnaP = {}; dnaR = {}; helix = set()
for l in L:
    if l.startswith('MODEL'): model = int(l.split()[1])
    if l.startswith('HELIX'):
        a, b = int(l[21:25]), int(l[33:37])
        if b - a >= 6: helix.update(range(a, b + 1))
    if not l.startswith('ATOM') or l[16] not in ' A': continue
    an = l[12:16].strip(); ch = l[21]; rn = int(l[22:26]); xyz = [float(l[30:38]), float(l[38:46]), float(l[46:54])]
    if ch == 'A' and an == 'CA': prot.setdefault(model, []).append((rn, xyz))
    if ch in 'CD':
        key = (model, ch)
        if an == "C4'": dnaP.setdefault(key, []).append((rn, xyz))
        res = dnaR.setdefault(key, {}).setdefault(rn, {})
        res[an] = xyz; res['_n'] = l[17:20].strip()
allp = np.array([x for m in prot for _, x in prot[m]])
cen = allp.mean(0)
w_, v = np.linalg.eigh(np.cov((allp - cen).T)); v = v[:, ::-1]
def rot(ax, a):
    c, s = math.cos(a), math.sin(a)
    return {'x': np.array([[1,0,0],[0,c,-s],[0,s,c]]), 'y': np.array([[c,0,s],[0,1,0],[-s,0,c]]), 'z': np.array([[c,-s,0],[s,c,0],[0,0,1]])}[ax]
R = rot('z', math.radians(roll)) @ rot('x', math.radians(pitch)) @ rot('y', math.radians(yaw))
def X(p): q = (np.array(p) - cen) @ v; q = q @ R.T; q[..., 1] *= -1; return q
def cr(pts, n):
    p = np.vstack([pts[0] * 2 - pts[1], pts, pts[-1] * 2 - pts[-2]]); out = []
    for i in range(1, len(p) - 2):
        for t in np.linspace(0, 1, n, endpoint=False):
            t2, t3 = t * t, t * t * t
            out.append(0.5 * ((2 * p[i]) + (-p[i-1] + p[i+1]) * t + (2*p[i-1] - 5*p[i] + 4*p[i+1] - p[i+2]) * t2 + (-p[i-1] + 3*p[i] - 3*p[i+1] + p[i+2]) * t3))
    out.append(pts[-1]); return np.array(out)
verts = []; norms = []; cols = []; tris = []; kind = []
SIDES = 16; th = np.linspace(0, 2 * np.pi, SIDES, endpoint=False)
def frames(S, P, NS):
    bvec = np.zeros_like(P)
    for i in range(1, len(P) - 1): bvec[i] = (P[i-1] - P[i]) + (P[i+1] - P[i])
    if len(P) > 2: bvec[0] = bvec[1]; bvec[-1] = bvec[-2]
    else: bvec[:] = [0, 1, 0]
    bvec /= np.linalg.norm(bvec, axis=1, keepdims=True) + 1e-9
    B = cr(bvec, NS)
    T = np.gradient(S, axis=0); T /= np.linalg.norm(T, axis=1, keepdims=True) + 1e-9
    Nn = B - (B * T).sum(1, keepdims=True) * T
    for i in range(1, len(Nn)):
        if (Nn[i] * Nn[i-1]).sum() < 0: Nn[i] = -Nn[i]
    Nn = np.array([np.mean(Nn[max(0, i-4):i+5], 0) for i in range(len(Nn))])
    Nn = Nn - (Nn * T).sum(1, keepdims=True) * T; Nn /= np.linalg.norm(Nn, axis=1, keepdims=True) + 1e-9
    return T, Nn, np.cross(T, Nn)
def add_tube(S, Nn, Wd, aw, an, col, k):
    base = len(verts)
    for i in range(len(S)):
        for t in th:
            c, s = math.cos(t), math.sin(t)
            verts.append(S[i] + Wd[i] * aw[i] * c + Nn[i] * an[i] * s)
            nn = Wd[i] * c / max(aw[i], 1e-3) + Nn[i] * s / max(an[i], 1e-3); nn /= np.linalg.norm(nn) + 1e-9
            norms.append(nn); cols.append(col); kind.append(k)
    for i in range(len(S) - 1):
        for j in range(SIDES):
            a = base + i * SIDES + j; b = base + i * SIDES + (j + 1) % SIDES
            tris.append((a, b, a + SIDES)); tris.append((b, b + SIDES, a + SIDES))
def add_cyl(p, q, r, col, k, n=12):
    d = q - p; d /= np.linalg.norm(d) + 1e-9; u = np.cross(d, [0.3, 1, 0.1]); u /= np.linalg.norm(u); w2 = np.cross(d, u)
    base = len(verts)
    for e in (p, q):
        for j in range(n):
            t = 2 * math.pi * j / n; nn = u * math.cos(t) + w2 * math.sin(t)
            verts.append(e + r * nn); norms.append(nn); cols.append(col); kind.append(k)
    for j in range(n):
        a = base + j; b = base + (j + 1) % n
        tris.append((a, b, a + n)); tris.append((b, b + n, a + n))
PEARL = np.array([0.88, 0.90, 0.92]); GREY = np.array([0.62, 0.66, 0.72])
BLUE = np.array([0.10, 0.62, 0.92]); BLUEL = np.array([0.62, 0.84, 0.97])
NS = 8
for m, col in ((1, PEARL), (2, GREY)):
    seq = prot[m]; seg = [[seq[0]]]
    for a, b in zip(seq, seq[1:]):
        if np.linalg.norm(np.array(a[1]) - np.array(b[1])) > 4.3: seg.append([b])
        else: seg[-1].append(b)
    for sg in seg:
        if len(sg) < 4: continue
        P = X([x for _, x in sg]); ish = np.array([r in helix for r, _ in sg], float)
        S = cr(P, NS); HW = cr(ish[:, None], NS)[:, 0]
        k = np.ones(13) / 13; HW = np.clip(np.convolve(np.pad(HW, 6, mode='edge'), k, 'valid'), 0, 1)
        T, Nn, Wd = frames(S, P, NS)
        add_tube(S, Nn, Wd, 0.42 + HW * 1.25, 0.42 - HW * 0.06, col, 0)
for key, seq in dnaP.items():
    seq.sort()
    P = X([x for _, x in seq])
    if len(P) < 3: continue
    S = cr(P, NS); T, Nn, Wd = frames(S, P, NS)
    rr = np.full(len(S), 1.25)
    add_tube(S, Nn, Wd, rr, rr, BLUE, 1)
for key, res in dnaR.items():
    for rn, at in res.items():
        a = at.get("C4'"); nm = at['_n']
        b = at.get('N1') if nm in ('DC', 'DT') else at.get('N3') if 'N3' in at and nm in ('DA', 'DG') else None
        if nm in ('DA', 'DG'): b = at.get('N1')
        if nm in ('DC', 'DT'): b = at.get('N3')
        if a is None or b is None: continue
        pa, pb = X(a), X(b)
        add_cyl(pa, pb + (pb - pa) * 0.12, 0.7, BLUEL, 2)
V = np.array(verts); N = np.array(norms); C = np.array(cols); KD = np.array(kind); TR = np.array(tris)
mn = V[:, :2].min(0) - 2.0; mx = V[:, :2].max(0) + 2.0
sc = OW * SS / (mx[0] - mn[0]); W = int(OW * SS); Hh = int((mx[1] - mn[1]) * sc)
Xs = (V[:, 0] - mn[0]) * sc; Ys = (V[:, 1] - mn[1]) * sc; Z = V[:, 2]
zb = np.full((Hh, W), 1e9); nb = np.zeros((Hh, W, 3)); cb = np.zeros((Hh, W, 3)); kb = np.zeros((Hh, W))
for (a, b, c) in TR:
    xs = np.array([Xs[a], Xs[b], Xs[c]]); ys = np.array([Ys[a], Ys[b], Ys[c]])
    x0, x1 = int(max(0, math.floor(xs.min()))), int(min(W - 1, math.ceil(xs.max())))
    y0, y1 = int(max(0, math.floor(ys.min()))), int(min(Hh - 1, math.ceil(ys.max())))
    if x1 < x0 or y1 < y0: continue
    den = (ys[1] - ys[2]) * (xs[0] - xs[2]) + (xs[2] - xs[1]) * (ys[0] - ys[2])
    if abs(den) < 1e-9: continue
    gx, gy = np.meshgrid(np.arange(x0, x1 + 1) + .5, np.arange(y0, y1 + 1) + .5)
    l0 = ((ys[1] - ys[2]) * (gx - xs[2]) + (xs[2] - xs[1]) * (gy - ys[2])) / den
    l1 = ((ys[2] - ys[0]) * (gx - xs[2]) + (xs[0] - xs[2]) * (gy - ys[2])) / den
    l2 = 1 - l0 - l1
    m = (l0 >= -1e-6) & (l1 >= -1e-6) & (l2 >= -1e-6)
    if not m.any(): continue
    z = l0 * Z[a] + l1 * Z[b] + l2 * Z[c]
    sub = zb[y0:y1+1, x0:x1+1]; m &= z < sub
    if not m.any(): continue
    sub[m] = z[m]
    n = l0[..., None] * N[a] + l1[..., None] * N[b] + l2[..., None] * N[c]
    nb[y0:y1+1, x0:x1+1][m] = n[m]
    cb[y0:y1+1, x0:x1+1][m] = (l0[..., None] * C[a] + l1[..., None] * C[b] + l2[..., None] * C[c])[m]
    kb[y0:y1+1, x0:x1+1][m] = KD[a]
cov = zb < 1e8
nb /= np.linalg.norm(nb, axis=2, keepdims=True) + 1e-9
nb[cov & (nb[..., 2] > 0)] *= -1
def nl(v): v = np.array(v, float); return v / np.linalg.norm(v)
K1 = nl([-0.55, -0.7, -0.6]); K2 = nl([0.8, 0.1, -0.5]); hv = nl(K1 - np.array([0, 0, -1.0]))
d1 = np.clip((nb * K1).sum(2), 0, 1); d2 = np.clip((nb * K2).sum(2), 0, 1)
spec = np.clip((nb * hv).sum(2), 0, 1)
rim = np.clip(1 - np.abs(nb[..., 2]), 0, 1) ** 3
zf = np.where(cov, zb, np.nan); zmax = np.nanmax(zf); zmin = np.nanmin(zf)
zn = np.where(cov, (zb - zmin) / (zmax - zmin), 1.0)
zbl = np.asarray(Image.fromarray((zn * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(10 * SS)), float) / 255
ao = np.clip(1 - 2.2 * np.clip(zn - zbl, 0, 1), 0.35, 1)
isd = kb > 0
depth = np.where(isd, 1 - 0.18 * zn, 1 - 0.5 * zn)
shade = (0.16 + 0.78 * d1 + 0.22 * d2) * ao
col = cb * shade[..., None] * depth[..., None]
gloss = np.where(isd, 0.8 * spec ** 50 + 0.22 * spec ** 8, 0.26 * spec ** 30)
col += gloss[..., None]
col += (rim * 0.24 * depth)[..., None] * np.where(isd[..., None], np.array([0.45, 0.8, 1.0]), np.array([0.6, 0.68, 0.78]))
col = np.clip(col, 0, 1)
rgba = np.dstack([col, cov.astype(float)])
img = Image.fromarray((rgba * 255).astype(np.uint8), 'RGBA').resize((W // SS, Hh // SS), Image.LANCZOS)
img.save(OUT); print('saved', OUT, img.size, 'tris', len(TR))
