#!/usr/bin/env python3
"""pacDNA hero (HOME_BRIEF update 2c: a crafted render of the real mechanism). The Brushield(TM) oligonucleotide enhancer
as pacdnatx.com/mission and Prof. Ke Zhang's published work describe it: a molecular (bottlebrush) polymer whose dense
shell of polymer side chains surrounds the oligonucleotide strands grafted to its backbone, shielding them from unwanted
nucleic acid-protein interactions. A gently curved backbone carries ~300 flexible side chains (persistent random walks,
pearl); in a cut-away window the near-side chains are left out to show the brand-blue oligonucleotide strands (helical
nucleotide chains with base stubs) nested against the backbone. Sphere-splat rasteriser with analytic normals, z-buffer,
key/fill/rim light, depth AO, 2x SS, real alpha with eased ends (DJ).
Usage: python3 render.py out.png [W] [tilt_deg] [seed]"""
import sys, math
import numpy as np
from PIL import Image, ImageFilter
OUT = sys.argv[1] if len(sys.argv) > 1 else 'hero.png'
OW = int(sys.argv[2]) if len(sys.argv) > 2 else 1400
TILT = float(sys.argv[3]) if len(sys.argv) > 3 else -18
SEED = int(sys.argv[4]) if len(sys.argv) > 4 else 7
SS = 2
rng = np.random.default_rng(SEED)
# camera space: x right, y up, z away from the viewer
L = 46.0
def bb(t):  # backbone point, t in [-1, 1]
    x = t * L
    return np.array([x, 5.0 * math.sin(x / 30.0 + .4), 5.0 * math.cos(x / 26.0)])
def bbt(t):
    e = 1e-4; d = bb(t + e) - bb(t - e); return d / np.linalg.norm(d)
C = []; R = []; COL = []; K = []
def sph(c, r, col, k): C.append(c); R.append(r); COL.append(col); K.append(k)
PEARL = np.array([.84, .91, .93]); PEARL2 = np.array([.74, .85, .89]); BACK = np.array([.36, .46, .54])
BLUE = np.array([.10, .50, .72]); BLUE2 = np.array([.16, .62, .80]); BASEC = np.array([.55, .78, .88])
CUT0, CUT1 = -.30, .22          # the cut-away window along the backbone (t)
def ss(e0, e1, x): x = min(max((x - e0) / (e1 - e0), 0), 1); return x * x * (3 - 2 * x)
# backbone
n = 700
for i in range(n + 1):
    t = -1 + 2 * i / n; sph(bb(t), 1.0, BACK, 1)
# side chains (PEG brush)
NCH = 620; ga = math.pi * (3 - math.sqrt(5))
for j in range(NCH):
    t = -0.97 + 1.94 * (j + rng.uniform(-.3, .3)) / NCH
    p = bb(t); T = bbt(t)
    ref = np.array([0, 0, 1.0]); U = np.cross(T, ref); U /= np.linalg.norm(U); V = np.cross(T, U)
    phi = j * ga + rng.uniform(-.2, .2)
    d0 = U * math.cos(phi) + V * math.sin(phi)
    inwin = CUT0 + rng.uniform(-.02, .02) < t < CUT1 + rng.uniform(-.02, .02)
    if inwin and d0[2] < 0.35: continue          # near-side chains removed in the window (cut-away)
    endf = ss(1.0, 0.80, abs(t))                  # chains shorten toward the rounded ends
    length = (14.5 + rng.uniform(-1.5, 2.0)) * (0.40 + 0.60 * endf)
    d = d0 + T * rng.uniform(-.25, .25); d /= np.linalg.norm(d)
    q = p.copy(); steps = int(length / .13)
    col = PEARL if j % 3 else PEARL2
    for s in range(steps):
        if s % 4 == 0: d = d + rng.normal(0, .11, 3) + d0 * .06; d /= np.linalg.norm(d)
        q = q + d * .13
        u = s / steps; r = .52 - .12 * u
        sph(q.copy(), r, col, 0)
# oligonucleotide strands grafted along the backbone in the window, lying out between the remaining chains
for (t, phi, tw) in [(-.24, .9, 0), (-.07, -.8, 1.4), (.09, .5, 2.7)]:
    p = bb(t); T = bbt(t); ref = np.array([0, 0, 1.0]); U = np.cross(T, ref); U /= np.linalg.norm(U); V = np.cross(T, U)
    d = np.array([0, math.sin(phi) * .6, -1.0]); d -= T * (d @ T); d /= np.linalg.norm(d)   # out from the backbone, toward the viewer
    ax = d * .62 + T * .78; ax /= np.linalg.norm(ax)      # the strand leans along the backbone
    w1 = np.cross(ax, d); w1 /= np.linalg.norm(w1); w2 = np.cross(ax, w1)
    base = p + d * 2.2
    NT = 22; RISE = .62; RAD = 1.9
    pts = []
    for k in range(NT * 6 + 1):
        s = k / 6; th = tw + s * 2 * math.pi / 10.5
        pts.append(base + ax * s * RISE + (w1 * math.cos(th) + w2 * math.sin(th)) * RAD)
    pts = np.array(pts)
    for k in range(len(pts) - 1):                          # backbone tube from overlapping beads
        for f in (0, .25, .5, .75):
            sph(pts[k] + (pts[k + 1] - pts[k]) * f, .55, BLUE, 2)
    for k in range(NT):                                    # phosphate beads and base stubs toward the strand axis
        th = tw + k * 2 * math.pi / 10.5
        a = base + ax * k * RISE + (w1 * math.cos(th) + w2 * math.sin(th)) * RAD
        sph(a, .74, BLUE2, 2)
        c = base + ax * k * RISE
        for f in (.25, .45, .65):
            sph(a + (c - a) * f, .46, BASEC, 3)
    # linker from the backbone to the strand
    for f in np.linspace(0, 1, 14): sph(p + (pts[0] - p) * f, .5, BACK, 1)
C = np.array(C); R = np.array(R); COL = np.array(COL); K = np.array(K)
# composition: tilt in the picture plane
a = math.radians(TILT); ca, sa = math.cos(a), math.sin(a)
X0 = C[:, 0] * ca - C[:, 1] * sa; Y0 = C[:, 0] * sa + C[:, 1] * ca; Z0 = C[:, 2]
Ys = -Y0
mnx, mxx = (X0 - R).min() - 2, (X0 + R).max() + 2; mny, mxy = (Ys - R).min() - 2, (Ys + R).max() + 2
sc = OW * SS / (mxx - mnx); W = int(OW * SS); H = int((mxy - mny) * sc)
PX = (X0 - mnx) * sc; PY = (Ys - mny) * sc; PR = R * sc
zb = np.full((H, W), 1e9); nb = np.zeros((H, W, 3)); cb = np.zeros((H, W, 3)); kb = np.zeros((H, W))
order = np.argsort(Z0)
for i in order:
    r = PR[i]; x0 = int(max(0, PX[i] - r - 1)); x1 = int(min(W - 1, PX[i] + r + 1)); y0 = int(max(0, PY[i] - r - 1)); y1 = int(min(H - 1, PY[i] + r + 1))
    if x1 < x0 or y1 < y0: continue
    gx, gy = np.meshgrid(np.arange(x0, x1 + 1) + .5 - PX[i], np.arange(y0, y1 + 1) + .5 - PY[i])
    d2 = gx * gx + gy * gy; m = d2 < r * r
    if not m.any(): continue
    h = np.sqrt(np.clip(r * r - d2, 0, None))
    z = Z0[i] * sc - h
    sub = zb[y0:y1 + 1, x0:x1 + 1]; m &= z < sub
    if not m.any(): continue
    sub[m] = z[m]
    nrm = np.dstack([gx / r, gy / r, -h / r])
    nb[y0:y1 + 1, x0:x1 + 1][m] = nrm[m]
    cb[y0:y1 + 1, x0:x1 + 1][m] = COL[i]
    kb[y0:y1 + 1, x0:x1 + 1][m] = K[i]
cov = zb < 1e8
def nl(v): v = np.array(v, float); return v / np.linalg.norm(v)
K1 = nl([-0.55, -0.7, -0.55]); K2 = nl([0.8, 0.25, -0.5]); Vd = np.array([0, 0, -1.0])
d1 = np.clip((nb * K1).sum(2), 0, 1); d2_ = np.clip((nb * K2).sum(2), 0, 1)
hv = nl(K1 + Vd); spec = np.clip((nb * hv).sum(2), 0, 1)
rim = np.clip(1 - np.abs(nb[..., 2]), 0, 1) ** 3
zf = np.where(cov, zb, np.nan); zmax = np.nanmax(zf); zmin = np.nanmin(zf)
zn = np.where(cov, (zb - zmin) / (zmax - zmin), 1.0)
zbl = np.asarray(Image.fromarray((zn * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(5 * SS)), float) / 255
zbl2 = np.asarray(Image.fromarray((zn * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(16 * SS)), float) / 255
ao = np.clip(1 - 2.6 * np.clip(zn - zbl, 0, 1) - 1.4 * np.clip(zn - zbl2, 0, 1), 0.28, 1)
depth = 1 - 0.42 * zn
shade = (0.16 + 0.84 * d1 + 0.22 * d2_) * ao
col = cb * shade[..., None] * depth[..., None]
blue = kb > 1.5
gloss = np.where(blue, 0.8 * spec ** 48 + 0.16 * spec ** 8, 0.34 * spec ** 30 + 0.05 * spec ** 6)
col += (gloss * ao)[..., None]
col += (rim * 0.22 * depth)[..., None] * np.where(blue[..., None], np.array([.55, .85, 1.0]), np.array([.70, .86, .92]))
col = np.clip(col, 0, 1)
# the brush eases out of the dark at both ends along its own axis (no cut ends)
gy_, gx_ = np.mgrid[0:H, 0:W]
u = gx_ * ca - gy_ * (-sa); uc = u[cov]; u = (u - uc.min()) / (uc.max() - uc.min())
def sv(e0, e1, x): x = np.clip((x - e0) / (e1 - e0), 0, 1); return x * x * (3 - 2 * x)
fade = sv(0.0, 0.16, u) * sv(1.0, 0.84, u)
# soft anti-aliased silhouette
alpha = np.asarray(Image.fromarray((cov * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(.6 * SS)), float) / 255
rgba = np.dstack([col, alpha * fade])
img = Image.fromarray((rgba * 255).astype(np.uint8), 'RGBA').resize((W // SS, H // SS), Image.LANCZOS)
bc = np.array([PX[K == 2].mean(), PY[K == 2].mean()])
print('BLUE centre', round(bc[0] / W, 3), round(bc[1] / H, 3), 'aspect W/H', round(W / H, 4), 'spheres', len(C))
img.save(OUT); print('saved', OUT, img.size)
