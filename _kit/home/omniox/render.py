#!/usr/bin/env python3
"""Omniox hero (HOME_BRIEF update 2c / DQ: a crafted render of the firm's own molecule). The H-NOX domain, the
oxygen-binding heme protein family OMX biologics are engineered from (omniox.com Technology), drawn from its real
crystal structure: PDB 1U55, the O2-bound H-NOX domain from Thermoanaerobacter tengcongensis (Pellicena et al.,
PNAS 2004, Marletta and Kuriyan labs, UC Berkeley). Chain A only.

Layers, rasterised per sphere with a z-buffer (numpy), supersampled 2x:
  * inside: the backbone as a smooth tube (Catmull-Rom through the C-alpha trace) in the logo's sky blue, the heme in
    deep crimson and the bound O2 in bright red;
  * outside: the space-filling surface of every heavy atom as a pearl glass shell (per-atom burial occlusion, soft key
    light, fresnel rim), translucent in the middle so the core shows through, opaque at its silhouette.
Saved with ALPHA (no ground of its own, DJ/DP).
Usage: python3 render.py PDB W out.png [rx ry rz]"""
import sys, numpy as np
from PIL import Image

PDB = sys.argv[1]; W = int(sys.argv[2]); OUT = sys.argv[3]
ANG = [float(a) for a in sys.argv[4:7]] if len(sys.argv) > 6 else [0, 0, 0]
SS = 2; RW = W * SS

prot, het, oxy, ca = [], [], [], []
for ln in open(PDB):
    if ln[21] != 'A': continue
    rec = ln[:6].strip()
    if rec not in ('ATOM', 'HETATM'): continue
    x, y, z = float(ln[30:38]), float(ln[38:46]), float(ln[46:54]); el = ln[76:78].strip() or ln[12:14].strip()[0]
    alt = ln[16]
    if alt not in (' ', 'A'): continue
    res = ln[17:20]
    if el == 'H': continue
    if rec == 'ATOM':
        prot.append((x, y, z, el))
        if ln[12:16].strip() == 'CA': ca.append((x, y, z))
    elif res == 'HEM': het.append((x, y, z, el))
    elif res == 'OXY': oxy.append((x, y, z, el))
VDW = {'C': 1.7, 'N': 1.55, 'O': 1.52, 'S': 1.8, 'FE': 1.6, 'F': 1.6}
P = np.array([a[:3] for a in prot]); PR = np.array([VDW.get(a[3], 1.7) for a in prot])
Hh = np.array([a[:3] for a in het]); HE = [a[3] for a in het]
O2 = np.array([a[:3] for a in oxy]); CA = np.array(ca)
print('atoms', len(P), 'heme', len(Hh), 'o2', len(O2), 'ca', len(CA))

def rot(ax, ay, az):
    ax, ay, az = np.radians([ax, ay, az])
    cx, sx, cy, sy, cz, sz = np.cos(ax), np.sin(ax), np.cos(ay), np.sin(ay), np.cos(az), np.sin(az)
    X = np.array([[1, 0, 0], [0, cx, -sx], [0, sx, cx]]); Y = np.array([[cy, 0, sy], [0, 1, 0], [-sy, 0, cy]])
    Z = np.array([[cz, -sz, 0], [sz, cz, 0], [0, 0, 1]])
    return Z @ Y @ X

cen = P.mean(0)
# principal axes so the long axis lies along x before the user rotation
u, s, vt = np.linalg.svd(P - cen, full_matrices=False)
B = vt
R = rot(*ANG) @ B
def tf(A): return (A - cen) @ R.T

Pt, Ht, Ot = tf(P), tf(Hh), tf(O2)
# backbone tube: Catmull-Rom through the CA trace
def crom(pts, n=8):
    out = []
    p = np.vstack([pts[0], pts, pts[-1]])
    for i in range(1, len(p) - 2):
        p0, p1, p2, p3 = p[i - 1], p[i], p[i + 1], p[i + 2]
        for t in np.linspace(0, 1, n, endpoint=False):
            t2, t3 = t * t, t * t * t
            out.append(0.5 * ((2 * p1) + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 + (-p0 + 3 * p1 - 3 * p2 + p3) * t3))
    out.append(pts[-1]); return np.array(out)
Tt = tf(crom(CA, 18))

ext = np.abs(np.vstack([Pt[:, :2] + 2, Pt[:, :2] - 2])).max()
sc = (RW * 0.5 * 0.9) / ext          # px per Angstrom
cx = cy = RW / 2

def zbuf():
    return np.full((RW, RW), -1e9), np.zeros((RW, RW, 3)), np.full((RW, RW), -1, np.int32)

def raster(C, Rad, zb, nb, idb, ids=None):
    """splat spheres: keep the front-most (largest z: +z toward the viewer)"""
    for i in range(len(C)):
        x, y, z = C[i]; r = Rad[i] if np.ndim(Rad) else Rad
        px, py, pr = cx + x * sc, cy - y * sc, r * sc
        x0, x1 = int(max(0, px - pr - 1)), int(min(RW, px + pr + 2)); y0, y1 = int(max(0, py - pr - 1)), int(min(RW, py + pr + 2))
        if x0 >= x1 or y0 >= y1: continue
        gx, gy = np.meshgrid(np.arange(x0, x1) + .5, np.arange(y0, y1) + .5)
        dx, dy = (gx - px) / pr, (py - gy) / pr
        d2 = dx * dx + dy * dy; m = d2 < 1
        dz = np.sqrt(np.clip(1 - d2, 0, 1)); zz = z + dz * r
        sub = zb[y0:y1, x0:x1]; win = m & (zz > sub)
        sub[win] = zz[win]
        nsub = nb[y0:y1, x0:x1]; nsub[win] = np.stack([dx, dy, dz], -1)[win]
        isub = idb[y0:y1, x0:x1]; isub[win] = i if ids is None else ids[i]

# --- per-atom burial: neighbours within 9 A (QuteMol-style occlusion) ---
from math import ceil
D2 = ((P[:, None, :] - P[None, :, :]) ** 2).sum(-1)
nbr = (D2 < 81).sum(1).astype(float)
bur = (nbr - nbr.min()) / (np.ptp(nbr) + 1e-9)
# also depth-facing: atoms whose neighbours sit in front of them are shadowed (directional occlusion toward the light)
L = np.array([-0.45, 0.62, 0.64]); L /= np.linalg.norm(L)
sh = np.zeros(len(P))
Pl = Pt @ L
for i in range(len(P)):
    near = D2[i] < 100
    sh[i] = np.sum((Pl[near] - Pl[i]) > 2.5)
sh = sh / (sh.max() + 1e-9)

# --- outer shell ---
zs, ns, isx = zbuf(); raster(Pt, PR * 1.28, zs, ns, isx)
# --- core: tube + heme + O2 ---
zc, nc, icx = zbuf()
CID = []  # material ids: 0 tube, 1 heme, 2 iron, 3 oxygen
tubeR = 0.95
raster(Tt, tubeR, zc, nc, icx, ids=np.zeros(len(Tt), np.int32))
HR = np.array([1.3 if e != 'FE' else 1.6 for e in HE]); HID = np.array([1 if e != 'FE' else 2 for e in HE], np.int32)
raster(Ht, HR, zc, nc, icx, ids=HID)
raster(Ot, np.full(len(Ot), 1.45), zc, nc, icx, ids=np.full(len(Ot), 3, np.int32))

def light(n, base, amb=.32, dif=.75, spec=.35, shin=28):
    lam = np.clip((n * L).sum(-1), 0, 1)
    hemi = .5 + .5 * n[..., 1]
    H = L + np.array([0, 0, 1.]); H /= np.linalg.norm(H)
    sp = np.clip((n * H).sum(-1), 0, 1) ** shin
    return base * (amb * (.6 + .4 * hemi) + dif * lam)[..., None] + spec * sp[..., None]

out = np.zeros((RW, RW, 4))
# core colours
mc = icx >= 0
cols = np.array([[0.36, 0.76, 0.97], [0.80, 0.10, 0.12], [0.95, 0.62, 0.36], [1.0, 0.30, 0.20]])
cbase = np.zeros((RW, RW, 3)); cbase[mc] = cols[icx[mc]]
ccol = light(nc, cbase, amb=.38, dif=.8, spec=.45, shin=40)
# the bound O2 glows a little
glow = (icx == 3)
ccol[glow] = ccol[glow] * 1.15 + np.array([.12, .02, 0])
# depth cue inside the shell: core farther back is dimmer and cooler
zmin, zmax = zs[zs > -1e8].min(), zs[zs > -1e8].max()
cdep = np.clip((zc - zmin) / (zmax - zmin), 0, 1)
ccol = ccol * (.55 + .45 * cdep)[..., None]

ms = isx >= 0
pearl = np.array([0.90, 0.93, 0.97])
ao = np.zeros((RW, RW)); ao[ms] = (1 - .55 * bur[isx[ms]]) * (1 - .35 * sh[isx[ms]])
scol = light(ns, pearl[None, None, :] * np.ones((RW, RW, 3)), amb=.42, dif=.62, spec=.5, shin=36) * ao[..., None]
# a touch of the logo's blue in the shadows of the shell
scol = scol + (1 - ao)[..., None] * np.array([0.02, 0.08, 0.16])
fres = np.clip(1 - ns[..., 2], 0, 1) ** 1.6
alpha_s = np.clip(.46 + .54 * fres, 0, 1)
hm = (icx >= 1)
alpha_s[hm] = alpha_s[hm] * .55
# the shell is opaque at the silhouette; where the core lies beneath it, blend
core_under = mc & ms
res = np.zeros((RW, RW, 3)); A = np.zeros((RW, RW))
res[ms] = scol[ms]; A[ms] = 1
res[core_under] = scol[core_under] * alpha_s[core_under, None] + ccol[core_under] * (1 - alpha_s[core_under, None])
# pixels where shell exists but no core: the glass shows the dark interior, slightly
nocore = ms & ~mc
res[nocore] = scol[nocore] * (.72 + .28 * alpha_s[nocore, None]) + np.array([0.02, 0.05, 0.1]) * (1 - alpha_s[nocore, None])
# outline (screen-space depth discontinuity), QuteMol style
zz = np.where(ms, zs, zmin - 6)
gx = np.abs(np.diff(zz, axis=1, prepend=zz[:, :1])); gy = np.abs(np.diff(zz, axis=0, prepend=zz[:1, :]))
edge = np.clip((np.maximum(gx, gy) - 0.8) / 3.0, 0, 1)
res = res * (1 - .45 * edge[..., None])
out[..., :3] = np.clip(res, 0, 1); out[..., 3] = A
img = Image.fromarray((out * 255).astype(np.uint8), 'RGBA').resize((W, W), Image.LANCZOS)
img.save(OUT); print('wrote', OUT, img.size)
