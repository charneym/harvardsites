#!/usr/bin/env python3
"""RespireRx hero (HOME_BRIEF update 2c: a crafted render of the real mechanism). The human GABA-A receptor, the target of
RespireRx's lead GABAkine KRM-II-81 and of the NIH/NINDS SBIR award 5R44NS143576: five subunits (two alpha-1, two beta-3,
one gamma-2) standing round the chloride pore. Built from the real atomic coordinates of PDB 6HUP (Masiulis et al., Nature
2019, cryo-EM of the full-length human alpha1-beta3-gamma2L receptor), megabody removed, drawn as a soft space-filling
molecular surface with ambient occlusion. Subunits are toned from the logo's crimson #cc031e. Saved with ALPHA (no ground of
its own, DJ/DP). Usage: python3 render.py SIZE out.png [SS]"""
import sys, gzip, math, numpy as np
from PIL import Image

S = int(sys.argv[1]) if len(sys.argv) > 1 else 900
OUT = sys.argv[2] if len(sys.argv) > 2 else 'hero.png'
SS = int(sys.argv[3]) if len(sys.argv) > 3 else 2
N = S * SS

# ---------- atoms ----------
L = gzip.open(__file__.rsplit('/', 1)[0] + '/6hup.cif.gz', 'rt').read().split('\n')
hdr = [l.strip() for l in L if l.startswith('_atom_site.')]
ix = {h: k for k, h in enumerate(hdr)}
P, C = [], []
KEEP = {'A': 0, 'D': 0, 'B': 1, 'E': 1, 'C': 2}   # alpha1, beta3, gamma2
for l in L:
    if not (l.startswith('ATOM') or l.startswith('HETATM')): continue
    f = l.split()
    ch = f[ix['_atom_site.auth_asym_id']]
    if f[ix['_atom_site.type_symbol']] == 'H': continue
    if ch not in KEEP: continue
    if f[0] == 'HETATM' and f[ix['_atom_site.label_entity_id']] in ('9', '10', '11'): continue  # small ligands
    P.append([float(f[ix['_atom_site.Cartn_x']]), float(f[ix['_atom_site.Cartn_y']]), float(f[ix['_atom_site.Cartn_z']])])
    C.append(KEEP[ch] if f[0] == 'ATOM' else 3)  # 3 = glycan
P = np.array(P); C = np.array(C)
P -= P.mean(0)
# principal (pore) axis = largest-variance direction
w, v = np.linalg.eigh(np.cov(P.T)); ax = v[:, np.argmax(w)]
# orient: pore axis -> +y (extracellular up: ECD is the wider half)
def rot_to(a, b):
    a = a / np.linalg.norm(a); b = b / np.linalg.norm(b); c = np.cross(a, b); s = np.linalg.norm(c); d = a @ b
    if s < 1e-8: return np.eye(3)
    K = np.array([[0, -c[2], c[1]], [c[2], 0, -c[0]], [-c[1], c[0], 0]]) / s
    t = math.atan2(s, d); return np.eye(3) + math.sin(t) * K + (1 - math.cos(t)) * K @ K
P = P @ rot_to(ax, np.array([0, 1, 0])).T
# extracellular domain is the radially wider half: put it on top
r = np.hypot(P[:, 0], P[:, 2])
if r[P[:, 1] > 0].mean() < r[P[:, 1] < 0].mean(): P[:, 1] *= -1; P[:, 0] *= -1
def Ry(a): c, s = math.cos(a), math.sin(a); return np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]])
def Rx(a): c, s = math.cos(a), math.sin(a); return np.array([[1, 0, 0], [0, c, -s], [0, s, c]])
YAW = float(sys.argv[4]) if len(sys.argv) > 4 else 1.7
TILT = float(sys.argv[5]) if len(sys.argv) > 5 else -0.95
P = P @ Ry(YAW).T @ Rx(TILT).T       # tip the top toward the viewer so the ring and pore read
# ---------- splat (orthographic, z toward viewer is -z) ----------
ext = max(P[:, 0].max() - P[:, 0].min(), P[:, 1].max() - P[:, 1].min())
sc = N * 0.90 / ext
cx = (P[:, 0].max() + P[:, 0].min()) / 2; cy = (P[:, 1].max() + P[:, 1].min()) / 2
X = (P[:, 0] - cx) * sc + N / 2; Y = N / 2 - (P[:, 1] - cy) * sc; Z = P[:, 2] * sc
RAD = 2.0 * sc
D = np.full((N, N), np.inf, np.float32); I = np.full((N, N), -1, np.int32)
R = int(math.ceil(RAD)) + 1
oy, ox = np.mgrid[-R:R + 1, -R:R + 1]
order = np.argsort(Z)
for k in order:
    x0 = int(X[k]); y0 = int(Y[k])
    dx = ox + (x0 - X[k]); dy = oy + (y0 - Y[k]); d2 = dx * dx + dy * dy
    m = d2 < RAD * RAD
    zf = (Z[k] - np.sqrt(np.maximum(RAD * RAD - d2, 0))).astype(np.float32)
    ys = slice(max(y0 - R, 0), min(y0 + R + 1, N)); xs = slice(max(x0 - R, 0), min(x0 + R + 1, N))
    sy = slice(ys.start - (y0 - R), ys.stop - (y0 - R)); sx = slice(xs.start - (x0 - R), xs.stop - (x0 - R))
    sub = D[ys, xs]; zz = zf[sy, sx]; mm = m[sy, sx] & (zz < sub)
    sub[mm] = zz[mm]; I[ys, xs][mm] = k
cov = np.isfinite(D)
zmax = D[cov].max(); Dz = np.where(cov, D, zmax + 6 * RAD)
def blur(a, r):
    r = max(1, int(r))
    for axis in (0, 1):
        for _ in range(3):
            c = np.cumsum(np.pad(a, [(r + 1, r) if i == axis else (0, 0) for i in range(2)], mode='edge'), axis=axis)
            a = (np.take(c, range(2 * r + 1, c.shape[axis]), axis=axis) - np.take(c, range(0, c.shape[axis] - 2 * r - 1), axis=axis)) / (2 * r + 1)
    return a
# smooth the union a little: molecular-surface softness
Ds = Dz.astype(np.float64)
# exact normals of the winning sphere at each pixel (crisp space-filling surface, no blur seams)
yy, xx = np.mgrid[0:N, 0:N].astype(np.float32)
kk = np.maximum(I, 0)
ddx = (xx + .5 - .5 - X[kk]) / RAD; ddy = (yy - Y[kk]) / RAD
ddz = -np.sqrt(np.clip(1 - ddx * ddx - ddy * ddy, 0, 1))
Nx, Ny, Nz = ddx, ddy, ddz
Nx = np.where(cov, Nx, 0); Ny = np.where(cov, Ny, 0); Nz = np.where(cov, Nz, -1)
# ambient occlusion: how far below the neighbourhood surface a pixel sits (multi-scale)
ao = np.zeros_like(Ds)
for s, wgt in ((RAD * 1.2, .45), (RAD * 3, .35), (RAD * 8, .2)):
    ao += wgt * np.clip((Ds - blur(Ds, s)) / (s * 0.9), 0, 1)
ao = np.clip(1 - 1.25 * ao, 0, 1) ** 1.3
# light: key from upper left front, rim from right back
def L3(x, y, z): n = math.sqrt(x * x + y * y + z * z); return x / n, y / n, z / n
kx, ky, kz = L3(-.55, -.6, -.6)
dif = np.clip(Nx * kx + Ny * ky + Nz * kz, 0, 1)
rim = np.clip(1 - np.abs(Nz), 0, 1) ** 2.4 * np.clip(Nx * .7 - Ny * .2, 0, 1)
hx, hy, hz = L3(kx, ky, kz - 1)
spec = np.clip(Nx * hx + Ny * hy + Nz * hz, 0, 1) ** 38
# colours by subunit (logo crimson #cc031e and its tonal family)
PAL = np.array([[204, 22, 44],      # alpha1: logo crimson
                [128, 18, 36],      # beta3: deep wine
                [206, 168, 164],    # gamma2: muted bone-rose
                [218, 190, 184]], np.float32) / 255  # glycans
cid = np.where(I >= 0, C[np.maximum(I, 0)], 0)
base = PAL[cid]
# depth cue: far parts fall gently toward the ink
dn = np.clip((Ds - Ds[cov].min()) / (Ds[cov].max() - Ds[cov].min() + 1e-6), 0, 1)
lit = (0.10 + 0.95 * dif)[..., None] * base * ao[..., None]
lit += (rim * .35 * ao)[..., None] * np.array([1, .62, .6])
lit += (spec * .22 * ao)[..., None]
ink = np.array([12, 9, 11], np.float32) / 255
lit = lit * (1 - .45 * dn[..., None]) + ink * (.45 * dn[..., None])
lit = np.clip(lit, 0, 1) ** (1 / 1.08)
a = cov.astype(np.float32)
rgba = np.dstack([lit * a[..., None], a])
img = Image.fromarray((rgba * 255 + .5).astype(np.uint8), 'RGBA').resize((S, S), Image.LANCZOS)
# un-premultiply after the resample so edges stay clean
arr = np.asarray(img).astype(np.float32); al = arr[..., 3:4] / 255
arr[..., :3] = np.where(al > 0, arr[..., :3] / np.maximum(al, 1e-3), 0)
Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8), 'RGBA').save(OUT)
print('wrote', OUT, img.size, len(P), 'atoms')
