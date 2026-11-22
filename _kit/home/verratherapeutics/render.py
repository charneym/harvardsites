#!/usr/bin/env python3
"""Verra Therapeutics hero (HOME_BRIEF update 2c: a crafted render of the real mechanism). Human ADAM10, the membrane
protease that Verra's lead VTH144 (a modified ADAM10 prodomain) selectively inhibits (Klapproth et al., Br J Pharmacol
2026;183:990, PMID 41063509, Verra co-authors). Built from the real atomic coordinates of PDB 6BE6 (ADAM10 ectodomain,
Seegar et al., Cell 2017), chain A, every heavy atom as a van der Waals sphere: metalloprotease domain in the logo's navy
#001a91 (lifted to read on the ink), disintegrin and cysteine-rich domains in the logo's gold stroke, and the residues
around the catalytic zinc in the logo's red #de4353 (the site the prodomain covers). Lambert + specular + rim + multi-scale
depth AO, supersampled, saved with ALPHA (no ground of its own, DJ/DP).
Usage: python3 render.py SIZE out.png [SS] [yaw] [tilt] [roll]"""
import sys, math, gzip, pathlib, numpy as np
from PIL import Image
H = pathlib.Path(__file__).resolve().parent
S = int(sys.argv[1]) if len(sys.argv) > 1 else 900
OUT = sys.argv[2] if len(sys.argv) > 2 else 'hero.png'
SS = int(sys.argv[3]) if len(sys.argv) > 3 else 2
YAW = float(sys.argv[4]) if len(sys.argv) > 4 else 0.0
TILT = float(sys.argv[5]) if len(sys.argv) > 5 else 0.0
ROLL = float(sys.argv[6]) if len(sys.argv) > 6 else 0.0
N = S * SS
P, C, RES = [], [], []
ZN = None
for l in gzip.open(H / '6be6.pdb.gz', 'rt').read().split('\n'):
    if l[21:22] != 'A': continue
    if l.startswith('HETATM') and l[17:20].strip() == 'ZN':
        ZN = np.array([float(l[30:38]), float(l[38:46]), float(l[46:54])])
    if not l.startswith('ATOM'): continue
    if l[76:78].strip() == 'H': continue
    r = int(l[22:26])
    P.append([float(l[30:38]), float(l[38:46]), float(l[46:54])]); RES.append(r)
    C.append(0 if r <= 456 else (1 if r <= 551 else 2))
P = np.array(P); C = np.array(C); RES = np.array(RES)
# residues with any atom within 9 A of the catalytic zinc: the active-site cleft
near = np.linalg.norm(P - ZN, axis=1) < 9.0
C[np.isin(RES, np.unique(RES[near]))] = 3
cen = P.mean(0); P -= cen; ZN = ZN - cen
w, v = np.linalg.eigh(np.cov(P.T)); ax = v[:, np.argmax(w)]
def rot_to(a, b):
    a = a / np.linalg.norm(a); b = b / np.linalg.norm(b); c = np.cross(a, b); s = np.linalg.norm(c); d = a @ b
    if s < 1e-8: return np.eye(3)
    K = np.array([[0, -c[2], c[1]], [c[2], 0, -c[0]], [-c[1], c[0], 0]]) / s
    t = math.atan2(s, d); return np.eye(3) + math.sin(t) * K + (1 - math.cos(t)) * K @ K
R0 = rot_to(ax, np.array([0, 1, 0])); P = P @ R0.T; ZN = R0 @ ZN
if P[C == 0, 1].mean() < 0: P[:, 1] *= -1; P[:, 0] *= -1; ZN[1] *= -1; ZN[0] *= -1   # catalytic domain on top
def Ry(a): c, s = math.cos(a), math.sin(a); return np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]])
def Rx(a): c, s = math.cos(a), math.sin(a); return np.array([[1, 0, 0], [0, c, -s], [0, s, c]])
def Rz(a): c, s = math.cos(a), math.sin(a); return np.array([[c, -s, 0], [s, c, 0], [0, 0, 1]])
M = Rz(ROLL) @ Rx(TILT) @ Ry(YAW); P = P @ M.T; ZN = M @ ZN
ext = max(P[:, 0].max() - P[:, 0].min(), P[:, 1].max() - P[:, 1].min())
sc = N * 0.88 / ext
cx = (P[:, 0].max() + P[:, 0].min()) / 2; cy = (P[:, 1].max() + P[:, 1].min()) / 2
X = (P[:, 0] - cx) * sc + N / 2; Y = N / 2 - (P[:, 1] - cy) * sc; Z = P[:, 2] * sc
RAD = 1.75 * sc
D = np.full((N, N), np.inf, np.float32); I = np.full((N, N), -1, np.int32)
Rr = int(math.ceil(RAD)) + 1
oy, ox = np.mgrid[-Rr:Rr + 1, -Rr:Rr + 1]
for k in np.argsort(Z):
    x0 = int(X[k]); y0 = int(Y[k])
    dx = ox + (x0 - X[k]); dy = oy + (y0 - Y[k]); d2 = dx * dx + dy * dy
    m = d2 < RAD * RAD
    zf = (Z[k] - np.sqrt(np.maximum(RAD * RAD - d2, 0))).astype(np.float32)
    ys = slice(max(y0 - Rr, 0), min(y0 + Rr + 1, N)); xs = slice(max(x0 - Rr, 0), min(x0 + Rr + 1, N))
    sy = slice(ys.start - (y0 - Rr), ys.stop - (y0 - Rr)); sx = slice(xs.start - (x0 - Rr), xs.stop - (x0 - Rr))
    sub = D[ys, xs]; zz = zf[sy, sx]; mm = m[sy, sx] & (zz < sub)
    sub[mm] = zz[mm]; I[ys, xs][mm] = k
cov = np.isfinite(D)
zmax = D[cov].max(); Ds = np.where(cov, D, zmax + 6 * RAD).astype(np.float64)
def blur(a, r):
    r = max(1, int(r))
    for axis in (0, 1):
        for _ in range(3):
            c = np.cumsum(np.pad(a, [(r + 1, r) if i == axis else (0, 0) for i in range(2)], mode='edge'), axis=axis)
            a = (np.take(c, range(2 * r + 1, c.shape[axis]), axis=axis) - np.take(c, range(0, c.shape[axis] - 2 * r - 1), axis=axis)) / (2 * r + 1)
    return a
yy, xx = np.mgrid[0:N, 0:N].astype(np.float32)
kk = np.maximum(I, 0)
Nx = (xx - X[kk]) / RAD; Ny = (yy - Y[kk]) / RAD
Nz = -np.sqrt(np.clip(1 - Nx * Nx - Ny * Ny, 0, 1))
Nx = np.where(cov, Nx, 0); Ny = np.where(cov, Ny, 0); Nz = np.where(cov, Nz, -1)
ao = np.zeros_like(Ds)
for s, wgt in ((RAD * 1.2, .42), (RAD * 3, .36), (RAD * 8, .22)):
    ao += wgt * np.clip((Ds - blur(Ds, s)) / (s * 0.9), 0, 1)
ao = np.clip(1 - 1.3 * ao, 0, 1) ** 1.35
def L3(x, y, z): n = math.sqrt(x * x + y * y + z * z); return x / n, y / n, z / n
kx, ky, kz = L3(-.5, -.65, -.6)
dif = np.clip(Nx * kx + Ny * ky + Nz * kz, 0, 1)
rim = np.clip(1 - np.abs(Nz), 0, 1) ** 2.4 * np.clip(Nx * .75 - Ny * .15, 0, 1)
hx, hy, hz = L3(kx, ky, kz - 1)
spec = np.clip(Nx * hx + Ny * hy + Nz * hz, 0, 1) ** 40
PAL = np.array([[58, 84, 214],     # metalloprotease domain: logo navy #001a91, lifted to read on the ink
                [236, 200, 128],   # disintegrin: the logo's gold stroke
                [214, 186, 140],   # cysteine-rich: a deeper, quieter gold
                [222, 67, 83]],    # zinc active-site cleft: logo red #de4353
               np.float32) / 255
cid = np.where(I >= 0, C[kk], 0)
base = PAL[cid]
dn = np.clip((Ds - Ds[cov].min()) / (Ds[cov].max() - Ds[cov].min() + 1e-6), 0, 1)
lit = (0.12 + 0.95 * dif)[..., None] * base * ao[..., None]
lit += (rim * .38 * ao)[..., None] * np.array([.75, .82, 1.0])
lit += (spec * .24 * ao)[..., None]
ink = np.array([6, 9, 32], np.float32) / 255
lit = lit * (1 - .42 * dn[..., None]) + ink * (.42 * dn[..., None])
lit = np.clip(lit, 0, 1) ** (1 / 1.06)
a = cov.astype(np.float32)
rgba = np.dstack([lit * a[..., None], a])
img = Image.fromarray((rgba * 255 + .5).astype(np.uint8), 'RGBA').resize((S, S), Image.LANCZOS)
arr = np.asarray(img).astype(np.float32); al = arr[..., 3:4] / 255
arr[..., :3] = np.where(al > 0, arr[..., :3] / np.maximum(al, 1e-3), 0)
out = Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8), 'RGBA')
bb = out.getbbox(); print('bbox', bb)
out.save(OUT)
print('wrote', OUT, out.size, len(P), 'atoms', 'active-site atoms', int((C == 3).sum()))
