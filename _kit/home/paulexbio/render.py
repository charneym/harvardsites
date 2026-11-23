#!/usr/bin/env python3
"""Offline render for the Paulex Bio hero (HOME_BRIEF update 2c: a crafted render of the firm's own subject): a human
pancreatic islet of Langerhans as it appears under a confocal microscope after triple immunofluorescence staining:
insulin in the beta cells (green, the logo green), glucagon in the alpha cells (magenta, mostly toward the mantle as in
human islets), DAPI in every nucleus (violet). A few beta-cell nuclei are caught in division, the event PAL-119 is designed
to re-awaken. Cells are a jittered Poisson packing inside a noise-perturbed islet outline; each cell's cytoplasm carries a
granular texture (secretory granules), a dark membrane gap from the Voronoi second-distance, and an oval nucleus with
chromatin texture. Optical blur that varies across the field (one focal plane), faint exocrine autofluorescence that fades
to pure black long before the image edge, and photon noise. Written on pure black, to be composited additively (lighter)
on the page ink, so no box edge can exist (DJ/DP). Usage: python3 render.py out.png [size]"""
import sys, numpy as np
from PIL import Image
from scipy.spatial import cKDTree
from scipy.ndimage import gaussian_filter

OUT = sys.argv[1] if len(sys.argv) > 1 else 'hero.png'
N = int(sys.argv[2]) if len(sys.argv) > 2 else 1400
rng = np.random.default_rng(11)
yy, xx = np.mgrid[0:N, 0:N].astype(np.float32)
u = (xx - N / 2) / (N / 2); v = (yy - N / 2) / (N / 2)

def fbm(sz, oct_=5, base=4, seed=0):
    r = np.random.default_rng(seed); out = np.zeros((sz, sz), np.float32); amp = 1.0; tot = 0
    for o in range(oct_):
        g = base * 2 ** o
        a = r.standard_normal((g + 3, g + 3)).astype(np.float32)
        im = np.array(Image.fromarray(a).resize((sz, sz), Image.BICUBIC))
        out += amp * im; tot += amp; amp *= .5
    return out / tot

# ---- islet outline: an ellipse perturbed by low-frequency noise ----
ang = np.arctan2(v, u); rad = np.sqrt((u / 1.0) ** 2 + (v / .86) ** 2)
wob = fbm(N, 3, 2, 3) * .09 + fbm(N, 2, 7, 4) * .025
R0 = .7 + wob
inside = rad < R0
edge_d = (R0 - rad)  # >0 inside

# ---- cells: Poisson-ish packing (dart throwing) ----
cell_r = .034  # mean cell radius, in half-widths
pts = []
tree = None
tries = 0
while tries < 160000 and len(pts) < 2000:
    tries += 1
    p = rng.uniform(-1, 1, 2)
    ix, iy = int((p[0] + 1) / 2 * (N - 1)), int((p[1] + 1) / 2 * (N - 1))
    if not inside[iy, ix]: continue
    rr_ = cell_r * rng.uniform(.78, 1.22)
    if pts:
        A = np.array(pts); d = np.hypot(*(A[:, :2] - p).T)
        if np.any(d < (A[:, 2] + rr_) * .86): continue
    pts.append([p[0], p[1], rr_])
pts = np.array(pts); CR = pts[:, 2].copy(); pts = pts[:, :2].copy()
P = len(pts)
# relax a little (Lloyd-ish jitter) for natural irregularity
pts += rng.normal(0, cell_r * .12, pts.shape)
# cell identity: alpha cells more likely toward the mantle
pi = (np.clip((pts[:, 0] + 1) / 2 * (N - 1), 0, N - 1)).astype(int); pj = (np.clip((pts[:, 1] + 1) / 2 * (N - 1), 0, N - 1)).astype(int)
ed = edge_d[pj, pi]
p_alpha = np.clip(.42 - ed * 1.1, .08, .42)
typ = np.where(rng.random(P) < p_alpha, 1, 0)  # 0 beta, 1 alpha
bright = np.clip(rng.lognormal(-.35, .45, P), .18, 1.25)
# a handful of beta cells in division (condensed, bright chromatin)
beta_idx = np.where(typ == 0)[0]
mit = rng.choice(beta_idx, size=min(5, len(beta_idx)), replace=False)

tr = cKDTree(pts)
q = np.stack([u.ravel(), v.ravel()], 1)
dd, ii = tr.query(q, k=4)
# power-ish distance: divide by each cell's own radius so big cells claim more space
sc = dd / CR[ii] * cell_r
o = np.argsort(sc, 1); sc = np.take_along_axis(sc, o, 1); ii = np.take_along_axis(ii, o, 1)
d1 = sc[:, 0].reshape(N, N); d2 = sc[:, 1].reshape(N, N); idx = ii[:, 0].reshape(N, N)
cell_in = inside | (d1 < cell_r * .9)
# membrane gap
gap = np.clip((d2 - d1) / (cell_r * .22), 0, 1) ** .7
own = np.clip((cell_r * 1.34 - d1) / (cell_r * .12), 0, 1)

# nucleus: offset oval per cell
noff = rng.normal(0, cell_r * .18, (P, 2)); nrot = rng.uniform(0, np.pi, P)
nax = rng.uniform(.46, .6, P) * cell_r; nbx = nax * rng.uniform(.72, .92, P)
cx = pts[idx, 0] + noff[idx, 0]; cy = pts[idx, 1] + noff[idx, 1]
dx = u - cx; dy = v - cy; cr = np.cos(nrot[idx]); sr = np.sin(nrot[idx])
ex = (dx * cr + dy * sr) / nax[idx]; ey = (-dx * sr + dy * cr) / nbx[idx]
nr = np.sqrt(ex ** 2 + ey ** 2)
nuc = np.clip((1.0 - nr) / .18, 0, 1)
# chromatin texture
chrom = fbm(N, 4, 60, 5); chrom = (chrom - chrom.min()) / (chrom.max() - chrom.min())
fine = fbm(N, 2, 220, 6); fine = (fine - fine.min()) / (fine.max() - fine.min())
nuc_int = nuc * (.35 + .9 * chrom ** 1.6) * (.6 + .7 * fine) * rng.uniform(.6, 1.15, P)[idx]
# dividing nuclei: two condensed bright bars (metaphase plate / anaphase pair)
is_mit = np.isin(idx, mit)
mphase = np.zeros((N, N), np.float32)
for k, m in enumerate(mit):
    a = rng.uniform(0, np.pi); c0 = pts[m]; sep = cell_r * (.0 if k % 2 == 0 else .34)
    for s in ([0] if sep == 0 else [-1, 1]):
        ccx = c0[0] + np.cos(a) * sep * s * .5; ccy = c0[1] + np.sin(a) * sep * s * .5
        ddx = u - ccx; ddy = v - ccy
        along = ddx * np.cos(a + np.pi / 2) + ddy * np.sin(a + np.pi / 2); acr = ddx * np.cos(a) + ddy * np.sin(a)
        bar = np.exp(-(along / (cell_r * .5)) ** 2 - (acr / (cell_r * .16)) ** 2) * (.7 + .6 * fine)
        mphase += bar.astype(np.float32)
nuc_int = np.where(is_mit, 0, nuc_int) + mphase * 1.5
nuc = np.where(is_mit, 0, nuc)

# cytoplasm: granular (secretory granules), excluded from the nucleus
gran = fbm(N, 2, 300, 8); gran = (gran - gran.min()) / (gran.max() - gran.min())
gran2 = fbm(N, 3, 90, 9); gran2 = (gran2 - gran2.min()) / (gran2.max() - gran2.min())
cyto = gap * (1 - nuc) * (.12 + 1.5 * gran ** 3.2 + .45 * gran2 ** 2) * own
# brighter toward the cell's vascular pole (one side), as real staining is uneven
pole = rng.uniform(0, 2 * np.pi, P)
pdir = ((u - pts[idx, 0]) * np.cos(pole[idx]) + (v - pts[idx, 1]) * np.sin(pole[idx])) / cell_r
cyto *= (.75 + .35 * np.clip(pdir, -1, 1))
cyto *= bright[idx]
# depth: the far side of the section sits below the focal plane and is dimmer
depth = np.clip(.55 + .45 * (1 - np.clip(u * .55 + v * .4 + .25, 0, 1.2)), .35, 1.05)
mask_isl = own
beta = np.where(typ[idx] == 0, cyto, 0) * mask_isl
alph = np.where(typ[idx] == 1, cyto, 0) * mask_isl
dapi = nuc_int * mask_isl
beta *= depth; alph *= depth; dapi *= (.4 + .6 * depth)
# capillaries running through the islet: dark channels with faint autofluorescent walls
cap = np.zeros((N, N), np.float32)
for k in range(0):
    t = np.linspace(0, 1, 400); a0 = rng.uniform(0, 2 * np.pi)
    x0, y0 = np.cos(a0) * .9, np.sin(a0) * .8
    x1, y1 = -x0 * .6 + rng.uniform(-.3, .3), -y0 * .6 + rng.uniform(-.3, .3)
    bx = x0 + (x1 - x0) * t + .12 * np.sin(t * 6 + k); by = y0 + (y1 - y0) * t + .1 * np.cos(t * 5 + k)
    tt = cKDTree(np.stack([bx, by], 1)); dc, _ = tt.query(q); dc = dc.reshape(N, N)
    cap = np.maximum(cap, np.exp(-(dc / .012) ** 2))
vessel_dark = 1 - .85 * cap
beta *= vessel_dark; alph *= vessel_dark; dapi *= (1 - .6 * cap)

# exocrine surround: faint autofluorescence + scattered nuclei, fading to black well before the frame edge
outer = 1 - own
ex_tex = fbm(N, 4, 30, 12); ex_tex = (ex_tex - ex_tex.min()) / (ex_tex.max() - ex_tex.min())
fall = np.clip(1 - (rad - R0) / .26, 0, 1) ** 1.6 * outer
fall *= np.clip(1 - (np.sqrt(u ** 2 + v ** 2) - .78) / .16, 0, 1)
auto = fall * (.10 + .32 * ex_tex ** 2) * (.5 + gran2)
ex_nuc = np.where(outer > 0, nuc_int, 0) * fall * .55

# optics: a single focal plane, softer away from a gently tilted plane
focus = np.clip(np.abs(u * .55 + v * .4 - .02) * 1.6 - .15, 0, 1) ** 1.3
def optics(ch, s0=.75, s1=6.0):
    a = gaussian_filter(ch, s0); b = gaussian_filter(ch, s1)
    return a * (1 - focus) + b * focus

G = optics(beta) ; M = optics(alph); B = optics(dapi + ex_nuc); A = optics(auto, 1.5, 4)
# glow (out-of-focus haze)
G += gaussian_filter(G, 14) * .35; M += gaussian_filter(M, 14) * .3; B += gaussian_filter(B, 10) * .2

def tm(x, k): return 1 - np.exp(-x * k)
g = tm(G, 1.35); m = tm(M, 1.25); b = tm(B, 1.1); a = A
# stain colours (logo green for insulin; magenta glucagon; violet DAPI); additive
cG = np.array([118, 214, 72]) / 255; cM = np.array([226, 70, 196]) / 255; cB = np.array([112, 96, 255]) / 255; cA = np.array([90, 70, 120]) / 255
img = g[..., None] * cG + m[..., None] * cM + b[..., None] * cB + a[..., None] * cA
hi = np.clip(img.max(-1, keepdims=True) - .72, 0, 1) / .28
img = img * (1 - .35 * hi) + .35 * hi * img.max(-1, keepdims=True)
# photon noise (shot + read), scaled to signal
lum = img.max(-1, keepdims=True)
img += rng.normal(0, 1, img.shape).astype(np.float32) * (.012 + .05 * np.sqrt(lum)) * (lum > .004)
img = np.clip(img, 0, 1) ** (1 / 1.12)
# guarantee a black frame: everything fades out well inside the edge (no seam when composited)
rr = np.sqrt(u ** 2 + v ** 2)
img *= np.clip((1.0 - rr) / .12, 0, 1)[..., None] ** 2
Image.fromarray((img * 255 + .5).astype(np.uint8)).save(OUT)
print('wrote', OUT, P, 'cells', int((typ == 0).sum()), 'beta', int((typ == 1).sum()), 'alpha')
