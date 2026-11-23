#!/usr/bin/env python3
"""Riboway hero (HOME_BRIEF update 2c: a crafted render of the firm's own mechanism). Their Smart ASO platform: an
antisense oligonucleotide (in the site's orange) hybridised to its target messenger RNA (in the logo blues). A space-filling
molecular render: the ASO:RNA heteroduplex is A-form (11 bp per turn, 2.8 A rise, a deep major groove), and on either side
the rest of the single-stranded mRNA runs on as a looser, floppier stacked strand with its bases turned in and a few
flipped out (riboway.com; bio.news 2025-09-05). Stylised, not atom-exact. Sphere impostors with a shadow map, screen-space
and per-atom ambient occlusion, a cool rim and depth haze toward the page ink. Saved with ALPHA (DJ).
Rasteriser and shading adapted from _kit/home/genetobe/render.py. Usage: python3 render.py W H out.png [SS]"""
import sys, numpy as np
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 900
H = int(sys.argv[2]) if len(sys.argv) > 2 else 1100
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 2
ROT = float(sys.argv[5]) if len(sys.argv) > 5 else 58
FW, FH = W, H; W, H = W * SS, H * SS
rng = np.random.default_rng(11)
def nrm(v): return v / np.linalg.norm(v, axis=-1, keepdims=True)
COL = {'rb': (0.25, 0.60, 0.80), 'rbase': (0.74, 0.84, 0.93), 'rbase2': (0.58, 0.74, 0.90),
       'ab': (0.93, 0.52, 0.20), 'abase': (0.99, 0.78, 0.50), 'abase2': (0.97, 0.66, 0.36)}
atoms = []
def add(p, r, c): atoms.append((p[0], p[1], p[2], r, c[0], c[1], c[2], 0))
# the axis: a long gentle S in 3D, sampled densely, with parallel-transport frames
NT = 62; D0, D1 = 21, 41           # mRNA nucleotides; the ASO pairs with D0..D1-1 (20-mer)
rise = np.where((np.arange(NT) >= D0) & (np.arange(NT) < D1), 2.8, 3.7 + rng.uniform(-.45, .45, NT))
ax_s = np.concatenate([[0], np.cumsum(rise[:-1])]); Ltot = ax_s[-1]
u = np.linspace(-20, Ltot + 20, 2000); um = (u - Ltot / 2)
Cx = um; Cy = 16 * np.sin(um / 55.0 + 0.4); Cz = 12 * np.sin(um / 42.0 + 0.8)
Cpts = np.stack([Cx, Cy, Cz], -1)
T = np.gradient(Cpts, axis=0); T = nrm(T)
Nf = np.zeros_like(T); n0 = np.cross(T[0], [0, 0, 1.0]); Nf[0] = n0 / np.linalg.norm(n0)
for i in range(1, len(T)):
    v = Nf[i - 1] - T[i] * (Nf[i - 1] @ T[i]); Nf[i] = v / np.linalg.norm(v)
Bf = np.cross(T, Nf)
def at(s, r, a, dz=0.0):
    j = int(np.clip(np.searchsorted(u, s + dz), 0, len(u) - 1))
    return Cpts[j] + r * (np.cos(a) * Nf[j] + np.sin(a) * Bf[j])
TWd = np.radians(32.7); MINOR = np.radians(140)
ang = np.zeros(NT); a = 0.0
for i in range(NT):
    ang[i] = a; a += TWd if D0 <= i < D1 else np.radians(30) + rng.uniform(-.25, .25)
def nucleotide(s, aa, sg, rbb, cb, cbase, inward, blen, tilt=0.0, wob=0.0):
    pa = aa - sg * np.radians(22)
    P = at(s, rbb, pa, sg * 1.4)
    add(P, 1.9, cb)
    for da, dr, ddz in ((0.12, 1.3, 0.4), (-0.12, 1.2, -0.3), (0.0, 0.2, 1.3 * sg), (0.02, -0.4, -1.2 * sg)):
        add(at(s, rbb + dr, pa + da, sg * 1.4 + ddz), 1.55, cb)
    for k in range(5):
        add(at(s, rbb - 2.4 + 0.9 * np.cos(k * 1.257), aa - sg * np.radians(8) + 0.08 * np.sin(k * 1.257), sg * 0.5 + 0.6 * np.sin(k * 1.9)), 1.6, cb)
    C1 = at(s, rbb - 3.1, aa)
    return C1
for i in range(NT):
    s = ax_s[i]; duplex = D0 <= i < D1
    jit = 0 if duplex else rng.normal(0, 1.1)
    rbb = 9.2 if duplex else 8.4 + 0.6 * jit
    C1 = nucleotide(s, ang[i], 1, rbb, COL['rb'], None, True, 0)
    pur = rng.random() < .5
    if duplex:
        C2 = nucleotide(s, ang[i] + MINOR, -1, 9.2, COL['ab'], None, True, 0)
        axv = C2 - C1; L = np.linalg.norm(axv); axv /= L
        j = int(np.searchsorted(u, s)); perp = np.cross(axv, T[j]); perp /= np.linalg.norm(perp)
        split = .56 if pur else .44
        for t in np.arange(0.12, 0.9, 0.085):
            for w in (-1.15, 0.0, 1.15):
                if (t < .2 or t > .82) and w != 0: continue
                p = C1 + axv * L * t + perp * (w - 0.8)
                add(p, 1.55, (COL['rbase'] if pur else COL['rbase2']) if t < split else (COL['abase2'] if pur else COL['abase']))
    else:
        flip = rng.random() < 0.14
        j = int(np.searchsorted(u, s)); centre = Cpts[j]
        d = centre - C1; d -= T[j] * (d @ T[j]); d = d / np.linalg.norm(d)
        if flip: d = -d + T[j] * rng.uniform(-.6, .6); d /= np.linalg.norm(d)
        d = d + T[j] * rng.uniform(-.25, .25); d /= np.linalg.norm(d)
        perp = np.cross(d, T[j]); perp /= np.linalg.norm(perp)
        blen = 6.4 if pur else 5.0
        for t in np.arange(0.6, blen, 0.95):
            for w in (-1.1, 0.0, 1.1):
                if t < 1.4 and w != 0: continue
                add(C1 + d * t + perp * w, 1.55, COL['rbase'] if pur else COL['rbase2'])
A = np.array(atoms)
A[:, 4:7] *= (1 + rng.uniform(-0.06, 0.06, len(A)))[:, None]

# ---------------- scene orientation: diagonal, lower left to upper right ----------------
def rot(axis, ang):
    axis = np.asarray(axis, float); axis /= np.linalg.norm(axis); a = np.cos(ang / 2); b, c, d_ = -axis * np.sin(ang / 2)
    return np.array([[a*a+b*b-c*c-d_*d_, 2*(b*c+a*d_), 2*(b*d_-a*c)], [2*(b*c-a*d_), a*a+c*c-b*b-d_*d_, 2*(c*d_+a*b)], [2*(b*d_+a*c), 2*(c*d_-a*b), a*a+d_*d_-b*b-c*c]])
M = rot([0, 0, 1], np.radians(ROT)) @ np.eye(3)        # long axis x -> diagonal, rising to the right
M = rot([1, 0, 0], np.radians(18)) @ M
M = rot([0, 1, 0], np.radians(-14)) @ M
X = A[:, :3] @ M.T
X -= (X.max(0) + X.min(0)) / 2
# camera: x right, y up, z toward viewer (larger z = closer)
ext = max((X[:, 0].max() - X[:, 0].min() + 8) / W, (X[:, 1].max() - X[:, 1].min() + 8) / H)
S = 1.0 / (ext * 1.13)   # px per A
DIST = 900.0
def proj(X):
    f = DIST / (DIST - X[:, 2]); return W / 2 + X[:, 0] * S * f, H / 2 - X[:, 1] * S * f, f
sx, sy, f = proj(X)
R = A[:, 3]; C = A[:, 4:7]; K = A[:, 7]

def raster(sx, sy, rp, z, Wd, Hd, want_id=False):
    zb = np.full((Hd, Wd), -1e9); ib = np.full((Hd, Wd), -1, np.int64)
    order = np.argsort(z)
    for i in order:
        r = rp[i]; x0 = int(max(0, np.floor(sx[i] - r))); x1 = int(min(Wd, np.ceil(sx[i] + r) + 1))
        y0 = int(max(0, np.floor(sy[i] - r))); y1 = int(min(Hd, np.ceil(sy[i] + r) + 1))
        if x0 >= x1 or y0 >= y1: continue
        yy, xx = np.mgrid[y0:y1, x0:x1]
        dd = (xx + .5 - sx[i]) ** 2 + (yy + .5 - sy[i]) ** 2
        m = dd < r * r
        h = z[i] + np.sqrt(np.maximum(r * r - dd, 0))     # in px units of depth
        sub = zb[y0:y1, x0:x1]; upd = m & (h > sub)
        sub[upd] = h[upd]
        if want_id: ib[y0:y1, x0:x1][upd] = i
    return zb, ib
rp = R * S * f
zpx = X[:, 2] * S
zb, ib = raster(sx, sy, rp, zpx, W, H, True)
hit = ib >= 0
print('atoms', len(A), 'coverage', hit.mean())

# per-pixel position and normal
yy, xx = np.mgrid[0:H, 0:W]
ii = np.where(hit, ib, 0)
nx = (xx + .5 - sx[ii]) / rp[ii]; ny = -(yy + .5 - sy[ii]) / rp[ii]
nz = np.sqrt(np.clip(1 - nx * nx - ny * ny, 0, 1))
Nn = np.stack([nx, ny, nz], -1)
Pw = X[ii] + Nn * R[ii][..., None]              # world (camera-aligned) point on the atom

# shadow map from the key light
Ldir = nrm(np.array([-0.55, 0.62, 0.56]))
up0 = np.array([0, 1.0, 0]); lx = nrm(np.cross(up0, Ldir)); ly = np.cross(Ldir, lx)
LS = 2.2
lpx = X @ lx * LS; lpy = X @ ly * LS; lpz = X @ Ldir * LS
offx, offy = -lpx.min() + 10, -lpy.min() + 10
SW, SH = int(lpx.max() + offx + 10), int(lpy.max() + offy + 10)
szb, _ = raster(lpx + offx, lpy + offy, R * LS, lpz, SW, SH)
qx = (Pw @ lx) * LS + offx; qy = (Pw @ ly) * LS + offy; qz = (Pw @ Ldir) * LS
sh = np.zeros((H, W))
for ox, oy in ((0, 0), (1.5, 0), (-1.5, 0), (0, 1.5), (0, -1.5), (1, 1), (-1, -1), (1, -1), (-1, 1)):
    jx = np.clip((qx + ox).astype(int), 0, SW - 1); jy = np.clip((qy + oy).astype(int), 0, SH - 1)
    sh += (szb[jy, jx] > qz + 1.2 * LS)
sh = 1 - sh / 9.0

# per-atom exposure (neighbour count) and screen-space AO
cnt = np.zeros(len(X))
for j0 in range(0, len(X), 1500):
    dd = ((X[j0:j0 + 1500, None, :] - X[None, :, :]) ** 2).sum(-1)
    cnt[j0:j0 + 1500] = (np.exp(-dd / 60.0)).sum(1)
expo = np.clip(1.25 - cnt / np.percentile(cnt, 92), 0.15, 1.0)
zfill = np.where(hit, zb, zb[hit].min() - 40 * S)
occ = np.zeros((H, W)); n = 0
for rad in (4, 9, 18, 34):
    for k in range(10):
        a = k * 2 * np.pi / 10 + rad
        dx, dy = int(round(np.cos(a) * rad * SS / 2 * 2)), int(round(np.sin(a) * rad * SS / 2 * 2))
        sh_z = np.roll(np.roll(zfill, dy, 0), dx, 1)
        dz = sh_z - zfill
        occ += np.clip(dz / (rad * SS * 1.2), 0, 1) * (dz < rad * SS * 5); n += 1
ssao = 1 - np.clip(occ / n * 1.7, 0, 0.85)

V = np.array([0, 0, 1.0])
ndl = np.clip((Nn @ Ldir), 0, 1)
Hh = nrm(Ldir + V)
spec = np.clip(Nn @ Hh, 0, 1) ** 38
fill = np.clip(Nn @ nrm(np.array([0.7, -0.2, 0.6])), 0, 1)
rim = (1 - nz) ** 3.2
base = C[ii]
ao = (ssao * (0.45 + 0.55 * expo[ii]))[..., None]
amb = 0.28 * ao
lit = base * (amb + (0.86 * ndl * sh)[..., None] + (0.12 * fill)[..., None] * ao)
lit += (0.22 * spec * sh)[..., None] * np.array([1, 0.98, 0.94])
lit += (0.30 * rim * ao[..., 0])[..., None] * np.array([0.55, 0.68, 1.0])
# depth haze toward the page ink (#0b1527)
INK = np.array([7, 12, 32]) / 255.0
zn = (zb - zb[hit].min()) / (zb[hit].max() - zb[hit].min() + 1e-6)
haze = np.clip(1 - zn, 0, 1) ** 1.8 * 0.42
lit = lit * (1 - haze[..., None]) + INK * haze[..., None]
lit = np.clip(lit, 0, 1) ** (1 / 1.12)
alpha = hit.astype(float)
rgba = np.dstack([lit * alpha[..., None], alpha])
im = Image.fromarray((rgba * 255).round().astype(np.uint8), 'RGBA')
# premultiplied downsample -> straight alpha
im = im.resize((FW, FH), Image.LANCZOS)
a = np.asarray(im).astype(float) / 255
rgb = a[..., :3] / np.maximum(a[..., 3:], 1e-4)
out = np.dstack([np.clip(rgb, 0, 1), a[..., 3]])
Image.fromarray((out * 255).round().astype(np.uint8), 'RGBA').save(OUT)
print('saved', OUT)
