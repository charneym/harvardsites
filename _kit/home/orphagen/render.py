#!/usr/bin/env python3
"""Orphagen hero render: the ligand-binding domain of steroidogenic factor-1 (SF-1, NR5A1), the target of OR-449,
from its crystal structure (RCSB PDB 1YOW, chain A; the co-crystallised phospholipid shown in the ligand pocket).
Cartoon ribbons (helices as twisting ribbons, coils as thin tubes) are point-splatted into a supersampled z-buffer,
shaded (key + fill + rim, specular), with screen-space ambient occlusion, depth haze and a slight depth of field.
Output: hero.webp with real alpha (no box ground, DP/DJ).  usage: python3 render.py [yaw pitch roll]"""
import sys, math, numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage as ndi

PDB = '1YOW.pdb'
OUT = sys.argv[4] if len(sys.argv) > 4 else 'hero.webp'
YAW, PITCH, ROLL = [float(a) for a in sys.argv[1:4]] if len(sys.argv) >= 4 else (0, 0, 0)
N = 1400; SS = 2; R = N * SS

ca, resn, lig = [], [], []
helix, sheet = set(), set()
for ln in open(PDB):
    if ln.startswith('HELIX') and ln[19] == 'A':
        for r in range(int(ln[21:25]), int(ln[33:37]) + 1): helix.add(r)
    if ln.startswith('SHEET') and ln[21] == 'A':
        for r in range(int(ln[22:26]), int(ln[33:37]) + 1): sheet.add(r)
    if ln.startswith('ATOM') and ln[21] == 'A' and ln[12:16].strip() == 'CA' and ln[16] in ' A':
        ca.append([float(ln[30:38]), float(ln[38:46]), float(ln[46:54])]); resn.append(int(ln[22:26]))
    if ln.startswith('HETATM') and ln[17:20] == 'P0E' and ln[21] == 'A':
        lig.append([float(ln[30:38]), float(ln[38:46]), float(ln[46:54]), ln[76:78].strip()])
ca = np.array(ca); L = np.array([l[:3] for l in lig], float); LE = [l[3] for l in lig]
print('residues', len(ca), 'helix', len(helix), 'sheet', len(sheet), 'ligand atoms', len(L))

# centre and orient (PCA, then the chosen yaw/pitch/roll)
c0 = ca.mean(0); X = ca - c0
u, s, vt = np.linalg.svd(X, full_matrices=False)
B = vt.copy()
def rot(y, p, r):
    y, p, r = map(math.radians, (y, p, r))
    Ry = np.array([[math.cos(y), 0, math.sin(y)], [0, 1, 0], [-math.sin(y), 0, math.cos(y)]])
    Rx = np.array([[1, 0, 0], [0, math.cos(p), -math.sin(p)], [0, math.sin(p), math.cos(p)]])
    Rz = np.array([[math.cos(r), -math.sin(r), 0], [math.sin(r), math.cos(r), 0], [0, 0, 1]])
    return Rz @ Rx @ Ry
M = rot(YAW, PITCH, ROLL) @ B
P = (ca - c0) @ M.T; LP = (L - c0) @ M.T

# segments split at chain breaks
segs = []; cur = [0]
for i in range(1, len(P)):
    if resn[i] - resn[i - 1] != 1 or np.linalg.norm(P[i] - P[i - 1]) > 4.3: segs.append(cur); cur = [i]
    else: cur.append(i)
segs.append(cur)

SUB = 90; AROUND = 72
pts, nrm, col, tex = [], [], [], []
def catmull(p0, p1, p2, p3, t):
    t2, t3 = t * t, t * t * t
    return 0.5 * ((2 * p1) + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 + (-p0 + 3 * p1 - 3 * p2 + p3) * t3)
for sg in segs:
    if len(sg) < 4: continue
    Q = P[sg]; n = len(Q); rr = [resn[i] for i in sg]
    # side vectors (point toward the local helix axis), smoothed, sign-consistent
    side = np.zeros_like(Q)
    for i in range(1, n - 1):
        v = (Q[i - 1] - Q[i]) + (Q[i + 1] - Q[i]); side[i] = v / (np.linalg.norm(v) + 1e-9)
    side[0] = side[1]; side[-1] = side[-2]
    for i in range(1, n):
        if np.dot(side[i], side[i - 1]) < 0 and rr[i] not in helix: side[i] = -side[i]
    Qp = np.vstack([2 * Q[0] - Q[1], Q, 2 * Q[-1] - Q[-2]])
    Sp = np.vstack([side[0], side, side[-1]])
    # width / thickness per residue, smoothed across ss changes
    wd = np.array([1.75 if r in helix else (1.5 if r in sheet else 0.36) for r in rr])
    th = np.array([0.42 if (r in helix or r in sheet) else 0.36 for r in rr])
    wd = np.convolve(np.pad(wd, 2, mode='edge'), np.ones(5) / 5, 'valid'); th = np.convolve(np.pad(th, 2, mode='edge'), np.ones(5) / 5, 'valid')
    cen, sid, W, T, U = [], [], [], [], []
    for i in range(n - 1):
        for k in range(SUB):
            t = k / SUB
            cen.append(catmull(Qp[i], Qp[i + 1], Qp[i + 2], Qp[i + 3], t))
            sv = catmull(Sp[i], Sp[i + 1], Sp[i + 2], Sp[i + 3], t); sid.append(sv)
            W.append(wd[i] * (1 - t) + wd[i + 1] * t); T.append(th[i] * (1 - t) + th[i + 1] * t)
            U.append((sg[i] + t) / len(P))
    cen = np.array(cen); sid = np.array(sid); W = np.array(W); T = np.array(T); U = np.array(U)
    tan = np.gradient(cen, axis=0); tan /= np.linalg.norm(tan, axis=1, keepdims=True) + 1e-9
    nv = sid - (sid * tan).sum(1, keepdims=True) * tan; nv /= np.linalg.norm(nv, axis=1, keepdims=True) + 1e-9
    bv = np.cross(tan, nv)
    a = np.linspace(0, 2 * np.pi, AROUND, endpoint=False)
    ca_, sa_ = np.cos(a)[None, :, None], np.sin(a)[None, :, None]
    # ellipse: width along bv, thickness along nv
    p = cen[:, None, :] + W[:, None, None] * ca_ * bv[:, None, :] + T[:, None, None] * sa_ * nv[:, None, :]
    nn = (ca_ / W[:, None, None]) * bv[:, None, :] + (sa_ / T[:, None, None]) * nv[:, None, :]
    nn /= np.linalg.norm(nn, axis=2, keepdims=True)
    pts.append(p.reshape(-1, 3)); nrm.append(nn.reshape(-1, 3)); tex.append(np.repeat(U, AROUND))
    col.append(np.zeros(len(U) * AROUND))
pts = np.vstack(pts); nrm = np.vstack(nrm); tex = np.concatenate(tex); kind = np.concatenate(col)

# ligand: sphere surface points (scaled vdW)
rad = {'C': 1.32, 'O': 1.22, 'P': 1.45, 'N': 1.25}
gs = []
k = 0
for (x, y, z), e in zip(LP, LE):
    r = rad.get(e, 1.0); m = 4200
    i = np.arange(m) + 0.5; phi = np.arccos(1 - 2 * i / m); th_ = np.pi * (1 + 5 ** 0.5) * i
    d = np.stack([np.cos(th_) * np.sin(phi), np.sin(th_) * np.sin(phi), np.cos(phi)], 1)
    gs.append((np.array([x, y, z]) + r * d, d, {'C': 1, 'O': 2, 'P': 3, 'N': 2}.get(e, 1)))
lp = np.vstack([g[0] for g in gs]); ln_ = np.vstack([g[1] for g in gs]); lk = np.concatenate([np.full(len(g[0]), g[2]) for g in gs])
pts = np.vstack([pts, lp]); nrm = np.vstack([nrm, ln_]); tex = np.concatenate([tex, np.zeros(len(lp))]); kind = np.concatenate([kind, lk])

# project (orthographic with a touch of perspective)
ext = np.abs(P[:, :2]).max() + 3.0
scale = (R * 0.47) / ext
zc = pts[:, 2]; persp = 1 + zc * 0.004
sx = R / 2 + pts[:, 0] * scale * persp; sy = R / 2 - pts[:, 1] * scale * persp
order = np.argsort(zc)                       # far (small z = far, we look down -z ... treat +z as toward viewer)
sx, sy, zc, nrm, tex, kind = sx[order], sy[order], zc[order], nrm[order], tex[order], kind[order]
Z = np.full((R, R), -1e9); ID = np.full((R, R), -1, np.int64)
rs = 4
for dx in range(-rs, rs + 1):
    for dy in range(-rs, rs + 1):
        if dx * dx + dy * dy > rs * rs + 1: continue
        ix = np.round(sx + dx).astype(int); iy = np.round(sy + dy).astype(int)
        ok = (ix >= 0) & (ix < R) & (iy >= 0) & (iy < R)
        ii = np.nonzero(ok)[0]
        cz = Z[iy[ii], ix[ii]]
        bet = zc[ii] > cz
        ii = ii[bet]
        Z[iy[ii], ix[ii]] = zc[ii]; ID[iy[ii], ix[ii]] = ii
cov = ID >= 0
print('coverage', cov.mean())
idx = np.where(cov, ID, 0)
Nn = nrm[idx]; Tx = tex[idx]; Kd = kind[idx]; Zp = np.where(cov, Z, np.nan)
if Nn[..., 2].mean() < 0: pass
Nn = np.where((Nn[..., 2:3] < 0), -Nn, Nn)    # face the viewer

# lighting
def nz(v): v = np.array(v, float); return v / np.linalg.norm(v)
Lk = nz([-0.55, 0.62, 0.62]); Lf = nz([0.7, -0.3, 0.5]); V = np.array([0, 0, 1.0])
dif = np.clip((Nn * Lk).sum(-1), 0, 1); fil = np.clip((Nn * Lf).sum(-1), 0, 1)
Hh = nz(Lk + V); spec = np.clip((Nn * Hh).sum(-1), 0, 1) ** 38
rim = (1 - np.clip(Nn[..., 2], 0, 1)) ** 2.6

# screen-space ambient occlusion from the depth buffer
zf = np.where(cov, Z, np.nanmin(Zp) - 6)
ao = np.ones((R, R))
for sg_ in (6, 18, 46):
    bl = ndi.gaussian_filter(zf, sg_)
    ao *= 1 - np.clip((bl - zf) / (2.4 + sg_ * 0.05), 0, 1) * 0.42
ao = np.clip(ao, 0.25, 1)

zmin, zmax = np.nanmin(Zp), np.nanmax(Zp)
dep = np.where(cov, (Z - zmin) / (zmax - zmin + 1e-9), 0)   # 0 far .. 1 near

# palette: Orphagen greens; protein in pale silver-mint shading to the logo green along the chain, ligand in bright logo green / gold phosphate
pa = np.array([214, 226, 218]) / 255; pb = np.array([128, 196, 150]) / 255; pc = np.array([60, 150, 92]) / 255
t = Tx[..., None]
base = np.where(t < .5, pa + (pb - pa) * (t / .5), pb + (pc - pb) * ((t - .5) / .5))
ligC = {1: np.array([24, 214, 84]) / 255, 2: np.array([255, 120, 96]) / 255, 3: np.array([255, 196, 70]) / 255}
for kk, cc in ligC.items(): base = np.where((Kd == kk)[..., None], cc, base)
isl = (Kd > 0)[..., None]
amb = 0.20
light = amb + 0.78 * dif[..., None] + 0.22 * fil[..., None]
C = base * light * ao[..., None]
C += spec[..., None] * np.where(isl, 0.55, 0.42)
C += rim[..., None] * np.array([90, 220, 130]) / 255 * 0.38
C += isl * 0.12 * np.array([40, 255, 110]) / 255
# depth haze toward the ink (#071a10)
ink = np.array([7, 26, 16]) / 255
hz = (1 - dep[..., None]) ** 1.5 * 0.62
C = C * (1 - hz) + ink * hz
C = np.clip(C, 0, 1)

# depth of field: blur the far half a little
A = cov.astype(float)
Cb = np.stack([ndi.gaussian_filter(C[..., i] * A, 3.2) for i in range(3)], -1); Ab = ndi.gaussian_filter(A, 3.2)
far = np.clip((0.45 - dep) / 0.45, 0, 1)[..., None]
C2 = C * (1 - far) + np.where(Ab[..., None] > 1e-3, Cb / np.maximum(Ab[..., None], 1e-3), C) * far
A2 = A * (1 - far[..., 0]) + Ab * far[..., 0]
A2 = ndi.gaussian_filter(A2, 0.8)
img = np.dstack([np.clip(C2, 0, 1) * 255, np.clip(A2, 0, 1) * 255]).astype(np.uint8)
im = Image.fromarray(img, 'RGBA').resize((N, N), Image.LANCZOS)
im.save(OUT, 'WEBP', quality=90, method=6)
# preview on the ink
bg = Image.new('RGBA', im.size, (7, 26, 16, 255)); bg.alpha_composite(im); bg.convert('RGB').save(OUT.rsplit('.', 1)[0] + '_prev.jpg', quality=85)
print('wrote', OUT)
