#!/usr/bin/env python3
"""GeneToBe hero (HOME_BRIEF update 2c: a crafted render of the firm's own mechanism). Their MiCas9 platform: a Cas9
nuclease clamped on a B-DNA double helix (genetobe.com/science; Ma et al., Nat Commun 2020). A space-filling molecular
render: pseudo-atomic B-DNA (10 bp per turn, 3.38 A rise, major and minor grooves; sugar-phosphate backbones in the logo
navy, the four bases in the logo's four puzzle colours) threaded through a bilobed protein whose surface is built from
jittered atom spheres. Rasterised sphere impostors with a shadow map, screen-space and per-atom ambient occlusion, a cool
rim and depth haze toward the page ink. Saved with ALPHA (DJ). Usage: python3 render.py W H out.png [SS]"""
import sys, numpy as np
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 700
H = int(sys.argv[2]) if len(sys.argv) > 2 else 800
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 2
FW, FH = W, H; W, H = W * SS, H * SS
rng = np.random.default_rng(7)
def nrm(v): return v / np.linalg.norm(v, axis=-1, keepdims=True)

# ---------------- B-DNA ----------------
NBP = 64; RISE = 3.38; TW = np.radians(36.0)
SEQ = rng.integers(0, 4, NBP)              # 0 A, 1 T, 2 G, 3 C
PAIR = np.array([1, 0, 3, 2])
COL = {  # logo colours, slightly deepened so they read as material, not paint
 'bb': (0.20, 0.33, 0.62), 'bb2': (0.17, 0.28, 0.55),
 0: (0.40, 0.66, 0.27), 1: (0.88, 0.75, 0.32), 2: (0.70, 0.18, 0.21), 3: (0.36, 0.55, 0.84),
 'prot': (0.70, 0.71, 0.72)}
atoms = []   # x y z r R G B kind(0 dna,1 protein)
def add(p, r, c, k=0): atoms.append((p[0], p[1], p[2], r, c[0], c[1], c[2], k))
def cyl(r, a, z): return np.array([r * np.cos(a), r * np.sin(a), z])
MINOR = np.radians(126)
for i in range(NBP):
    z = (i - NBP / 2) * RISE; a = i * TW
    a1 = a; a2 = a + MINOR                    # glycosidic attachment angles of the two strands
    for s, (aa, dz, sg) in enumerate(((a1, 0.0, 1), (a2, 0.0, -1))):
        c = COL['bb'] if s == 0 else COL['bb2']
        pa = aa - sg * np.radians(22)
        P = cyl(8.9, pa, z + sg * 1.6)
        add(P, 1.9, c)
        for da, dr, ddz in ((0.11, 1.3, 0.4), (-0.11, 1.2, -0.3), (0.0, 0.2, 1.4 * sg), (0.02, -0.4, -1.3 * sg)):
            add(cyl(8.9 + dr, pa + da, z + sg * 1.6 + ddz), 1.55, c)
        for k in range(5):                    # sugar ring
            add(cyl(6.6 + 0.9 * np.cos(k * 1.257), aa - sg * np.radians(8) + 0.09 * np.sin(k * 1.257), z + sg * 0.6 + 0.6 * np.sin(k * 1.9)), 1.6, c)
    C1 = cyl(5.9, a1, z); C2 = cyl(5.9, a2, z)
    ax = C2 - C1; L = np.linalg.norm(ax); ax /= L
    perp = np.cross(ax, [0, 0, 1.0]); perp /= np.linalg.norm(perp)
    b1 = SEQ[i]; b2 = PAIR[b1]
    split = 0.56 if b1 in (0, 2) else 0.44     # purines are the larger half
    for t in np.arange(0.12, 0.9, 0.085):
        for w in (-1.15, 0.0, 1.15):
            if (t < 0.2 or t > 0.82) and w != 0: continue
            p = C1 + ax * L * t + perp * (w - 0.8)   # offset toward the minor-groove side
            add(p, 1.55, COL[b1] if t < split else COL[b2])
A = np.array(atoms)
# bend the helix gently (arc of radius 420 A in the x-z plane)
RB = 420.0
x, y, z = A[:, 0], A[:, 1], A[:, 2]
th = z / RB
A[:, 0], A[:, 2] = (RB + x) * np.cos(th) - RB, (RB + x) * np.sin(th)
dna_n = len(A)

# ---------------- Cas9-like bilobed protein, threaded on the DNA ----------------
def vnoise(p, seed):
    r = np.random.default_rng(seed); G = r.normal(size=(6, 3)); Ph = r.random(6) * 6.28
    return sum(np.sin(p @ G[k] * (0.06 + 0.02 * k) + Ph[k]) / (1 + k * 0.6) for k in range(6)) / 2.2
def axis_at(zp):   # DNA axis point near local height zp (bent)
    th = zp / RB; return np.stack([RB * np.cos(th) - RB, np.zeros_like(zp), RB * np.sin(th)], -1)
def prot_sdf(p):
    def ell(c, r): return (np.linalg.norm((p - c) / r, axis=-1) - 1) * r.min()
    def smin(a, b, k): h = np.clip(0.5 + 0.5 * (b - a) / k, 0, 1); return b * (1 - h) + a * h - k * h * (1 - h)
    zc = 6.0
    d = ell(np.array([-2.0, 17.0, zc]), np.array([23.0, 17.0, 29.0]))           # REC lobe
    d = smin(d, ell(np.array([5.0, -15.0, zc - 4]), np.array([21.0, 15.0, 25.0])), 7)   # NUC lobe
    d = smin(d, ell(np.array([19.0, 3.0, zc + 5]), np.array([10.0, 18.0, 12.0])), 6)   # bridge
    d = smin(d, ell(np.array([-13.0, -5.0, zc + 14]), np.array([11.0, 14.0, 10.0])), 6) # PAM-interacting
    d = d + 3.6 * vnoise(p, 3)
    ax = axis_at(p[:, 2])
    dc = np.linalg.norm((p - ax)[:, :2], axis=-1) - 13.0                        # channel for the duplex
    return np.maximum(d, -dc)
g = np.arange(-56, 56, 2.35)
P = np.stack(np.meshgrid(g, g, g, indexing='ij'), -1).reshape(-1, 3)
P = P + rng.uniform(-1.0, 1.0, P.shape)
d = prot_sdf(P)
keep = (d < 0) & (d > -5.5)
P = P[keep]
pr = rng.uniform(1.5, 2.15, len(P))
tint = rng.uniform(-0.03, 0.03, len(P))
wd = np.clip((P[:, 1] + 20) / 48, 0, 1)[:, None] ** 1.2
pc = np.array(COL['prot'])[None, :] + tint[:, None] + wd * np.array([-0.04, -0.01, 0.05]) + (1 - wd) * np.array([0.05, 0.03, -0.02])
B = np.column_stack([P, pr, pc, np.ones(len(P))])
A[:, 4:7] *= (1 + rng.uniform(-0.06, 0.06, len(A)))[:, None]
A = np.vstack([A, B])

# ---------------- scene orientation: diagonal, lower left to upper right ----------------
def rot(axis, ang):
    axis = np.asarray(axis, float); axis /= np.linalg.norm(axis); a = np.cos(ang / 2); b, c, d_ = -axis * np.sin(ang / 2)
    return np.array([[a*a+b*b-c*c-d_*d_, 2*(b*c+a*d_), 2*(b*d_-a*c)], [2*(b*c-a*d_), a*a+c*c-b*b-d_*d_, 2*(c*d_+a*b)], [2*(b*d_+a*c), 2*(c*d_-a*b), a*a+d_*d_-b*b-c*c]])
M = rot([1, 0, 0], np.radians(-90)) @ np.eye(3)        # helix axis z -> screen y
M = rot([0, 0, 1], np.radians(-31)) @ M                  # lean
M = rot([1, 0, 0], np.radians(20)) @ M                   # tip toward viewer
M = rot([0, 1, 0], np.radians(28)) @ M
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
INK = np.array([11, 21, 39]) / 255.0
zn = (zb - zb[hit].min()) / (zb[hit].max() - zb[hit].min() + 1e-6)
haze = np.clip(1 - zn, 0, 1) ** 1.6 * 0.55
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
