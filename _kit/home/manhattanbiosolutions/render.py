#!/usr/bin/env python3
"""Manhattan BioSolutions hero (HOME_BRIEF update 2c: a crafted render of the real subject): an antibody-drug conjugate.
The antibody is the intact human IgG1 crystal structure PDB 1HZH (Saphire et al. 2001; heavy chains H/K, light chains L/M,
Fc glycans), drawn atom by atom as a space-filling model. Four linker-payloads are attached at surface lysines (DAR 4,
the conventional drug-antibody ratio). Each payload is a camptothecin-class pentacyclic scaffold (the TOP1-inhibitor family
exatecan belongs to) on a short linker; they are drawn as generic small-molecule geometry, not a disclosed structure.
Colours from the company logo: heavy chains in its periwinkle wordmark grey-blue, light chains paler, payloads in its green.
Offline numpy renderer: sphere z-buffer, wrap Lambert + Blinn specular + rim, screen-space ambient occlusion, depth fog;
true alpha. Usage: python3 render.py 1hzh.pdb out.png ry rx rz"""
import sys, numpy as np
from PIL import Image
from scipy.ndimage import gaussian_filter
pdb, out = sys.argv[1], sys.argv[2]
R = {'C': 1.7, 'N': 1.55, 'O': 1.52, 'S': 1.8}
P = []; rad = []; ch = []; res = []; nm = []
for l in open(pdb):
    if l[:6] not in ('ATOM  ', 'HETATM') or l[16] not in ' A': continue
    if l[17:20] == 'HOH': continue
    el = (l[76:78].strip() or l[12:14].strip()[0]).upper()
    if el == 'H': continue
    c = l[21] if l[:6] == 'ATOM  ' else 'G'
    P.append([float(l[30:38]), float(l[38:46]), float(l[46:54])]); rad.append(R.get(el, 1.7)); ch.append(c)
    res.append(int(l[22:26])); nm.append(l[12:16].strip() + ':' + l[17:20])
P = np.array(P); rad = np.array(rad); ch = np.array(ch); res = np.array(res); nm = np.array(nm)
prot = ch != 'G'
heavy = np.isin(ch, ['H', 'K'])
fc = heavy & (res >= 240)
fab1 = ((ch == 'H') & (res < 225)) | (ch == 'L')
fab2 = ((ch == 'K') & (res < 225)) | (ch == 'M')
cfc, c1, c2 = P[fc].mean(0), P[fab1].mean(0), P[fab2].mean(0)
# frame: Fc down, the two Fab arms up and spread left/right in the picture plane (a Y)
y = (c1 + c2) / 2 - cfc; y /= np.linalg.norm(y)
x = c2 - c1; x -= y * np.dot(x, y); x /= np.linalg.norm(x); z = np.cross(x, y)
cen = P[prot].mean(0)
Q = (P - cen) @ np.stack([x, y, z]).T
def rot(a, deg):
    t = np.radians(deg); c, s = np.cos(t), np.sin(t)
    return {'x': np.array([[1, 0, 0], [0, c, -s], [0, s, c]]), 'y': np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]]),
            'z': np.array([[c, -s, 0], [s, c, 0], [0, 0, 1]])}[a]
M = rot('y', float(sys.argv[3])).T @ rot('x', float(sys.argv[4])).T @ rot('z', float(sys.argv[5])).T
Q = Q @ M
# ---- linker-payloads on four outward, viewer-facing lysines: one per Fab arm, two on the Fc ----
lysN = np.where((nm == 'NZ:LYS') & prot)[0]
pc = Q[prot].mean(0)
def pick(mask, k=1, taken=()):
    best = []
    for i in lysN:
        if not mask[i]: continue
        d = Q[i] - pc; out_ = np.linalg.norm(d[:2]); face = Q[i, 2]
        # exposed: few protein atoms within 8 A of a point 6 A outward
        n = d / np.linalg.norm(d); probe = Q[i] + n * 6
        crowd = (np.linalg.norm(Q[prot] - probe, axis=1) < 8).sum()
        best.append((face * 1.0 + out_ * .25 - crowd * 1.5, i))
    best.sort(reverse=True)
    sel = []
    for s, i in best:
        if all(np.linalg.norm(Q[i] - Q[j]) > 30 for j in list(taken) + sel): sel.append(i)
        if len(sel) == k: break
    return sel
sites = pick(fab1, 1); sites += pick(fab2, 1, sites); sites += pick(fc, 2, sites)
def hexring(c, u, v, r=1.4):
    return [c + r * (np.cos(a) * u + np.sin(a) * v) for a in np.radians(np.arange(0, 360, 60) + 30)]
def payload(anchor, n):
    """a short zig-zag linker leaving the lysine along the surface normal, then a fused pentacyclic flat scaffold"""
    n = n / np.linalg.norm(n); t = np.cross(n, [0, 0, 1.0]); t = t / np.linalg.norm(t) if np.linalg.norm(t) > .1 else np.array([1., 0, 0])
    pts = []; p = anchor.copy()
    for k in range(7):
        p = p + n * 1.25 + t * (0.75 if k % 2 else -0.75); pts.append(p.copy())
    # ring plane: roughly facing the viewer so the scaffold reads
    u = np.cross(n, [0, 0, 1.0]); u = u / np.linalg.norm(u) if np.linalg.norm(u) > .1 else t
    base = p + n * 1.6
    cs = [base + n * 1.2, base + n * 1.2 + u * 2.42, base + n * 1.2 - u * 2.42, base + n * 3.3 + u * 1.21, base + n * 3.3 - u * 1.21]
    for c in cs:
        for q in hexring(c, u, n): pts.append(q)
    pts.append(cs[3] + n * 2.4 + u * 0.6); pts.append(cs[4] + n * 2.3 - u * 1.4); pts.append(cs[2] - u * 2.3)   # O, OH, F substituents
    # dedupe fused ring atoms
    D = []
    for q in pts:
        if all(np.linalg.norm(q - d) > .7 for d in D): D.append(q)
    return D
EX = []
for i in sites:
    d = Q[i] - pc; d[2] = max(d[2], 0) + 20; EX += payload(Q[i], d)
EX = np.array(EX)
Q = np.vstack([Q, EX]); rad = np.concatenate([rad, np.full(len(EX), 1.62)]); ch = np.concatenate([ch, np.array(['D'] * len(EX))])
W = 2400; pad = 60
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
# logo periwinkle (156,168,196) for the heavy chains, a paler silver-blue for the light chains, logo green payloads
base = {'H': (0.56, 0.62, 0.78), 'K': (0.50, 0.57, 0.75), 'L': (0.78, 0.81, 0.88), 'M': (0.74, 0.78, 0.86),
        'G': (0.86, 0.84, 0.74), 'D': (0.26, 0.80, 0.30)}
cols = np.array([base[c] for c in ch])
# a slight per-residue tonal variation keeps the surface from reading as plastic
rng = np.random.default_rng(7); jit = np.concatenate([1 + (rng.random(len(res)) - .5) * .07, np.ones(len(EX))])
cols = cols * jit[:, None]
C = np.zeros((Hh, W, 3)); C[v] = cols[idb[v]]
isD = np.zeros((Hh, W), bool); isD[v] = (ch[idb[v]] == 'D')
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
img = C * ((0.15 + 0.86 * wrap) * ao)[..., None] + spec[..., None] * 0.32 * ao[..., None] \
      + rim[..., None] * np.array([0.62, 0.70, 0.92]) * 0.26
img[isD] += (np.array([0.20, 0.55, 0.22]) * 0.22 * ao[isD][:, None])      # the payloads glow faintly
ink = np.array([0.043, 0.059, 0.110])                        # the page ink, #0b0f1c
fog = (0.58 * (1 - zn) ** 1.4)[..., None]
img = np.clip(img * (1 - fog) + ink * fog, 0, 1)
o = (np.dstack([img, v.astype(float)]) * 255).astype(np.uint8)
im = Image.fromarray(o, 'RGBA').resize((W // 2, Hh // 2), Image.LANCZOS)
im.save(out); print('size', im.size, 'sites', [(res[i], ch[i]) for i in sites])
