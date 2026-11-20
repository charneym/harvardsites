#!/usr/bin/env python3
"""Oxolife hero (HOME_BRIEF update 2c: a crafted render of the real subject). A day-5 human blastocyst, the embryo whose
implantation OXO-001 is designed to improve (OXOART2, ESHRE 2024), as it looks down an IVF lab's microscope in
differential interference contrast: the zona pellucida, a ring of flattened trophectoderm cells, the inner cell mass and
the fluid-filled blastocoel. Built as an optical-path-difference field, then sheared like DIC optics so it carries real
relief. Graded to the logo's purple #5c0a6c and lavender #e8dcea on an aubergine ink. Saved with ALPHA (DJ).
Usage: python3 render.py SIZE out.png"""
import sys, numpy as np
from PIL import Image, ImageFilter
N = int(sys.argv[1]) if len(sys.argv) > 1 else 1400
OUT = sys.argv[2] if len(sys.argv) > 2 else 'hero.png'
rng = np.random.default_rng(7)
y, x = np.mgrid[0:N, 0:N].astype(np.float32)
u = (x + .5) / N * 3.0 - 1.5; v = (y + .5) / N * 3.0 - 1.5
r = np.hypot(u, v); th = np.arctan2(v, u)
def ss(a, b, t): t = np.clip((t - a) / (b - a), 0, 1); return t * t * (3 - 2 * t)
def bump(t, c, w): return np.exp(-((t - c) / w) ** 2)

def vnoise(scale, seed, oct=4):
    """smooth value noise on the grid (bilinear upsampled random lattices)"""
    g = np.random.default_rng(seed); out = np.zeros((N, N), np.float32); amp = 1; tot = 0
    for o in range(oct):
        s = int(scale * 2 ** o) + 2
        lat = g.random((s, s)).astype(np.float32)
        im = Image.fromarray((lat * 255).astype(np.uint8)).resize((N, N), Image.BICUBIC)
        out += amp * (np.asarray(im, np.float32) / 255 - .5); tot += amp; amp *= .5
    return out / tot

# a gently irregular outline (a real blastocyst is never a perfect circle)
wob = (.012 * np.sin(2 * th + .7) + .008 * np.sin(3 * th + 2.1) + .005 * np.sin(5 * th + .3)).astype(np.float32)
rr = r - wob
opd = np.zeros((N, N), np.float32); absb = np.zeros((N, N), np.float32)

# zona pellucida: a thick translucent glycoprotein shell with fine fibrous texture
ZI, ZO = .83, .93
zona = ss(ZI - .012, ZI + .012, rr) * (1 - ss(ZO - .012, ZO + .012, rr))
fib = vnoise(60, 3, 3)
zprof = np.sqrt(np.sin(np.pi * np.clip((rr - ZI) / (ZO - ZI), 0, 1)) + 1e-6)
opd += zona * zprof * (.9 + .12 * fib) + .12 * bump(rr, ZI + .004, .005)
absb += zona * .05

# trophectoderm: one layer of flattened cells lining the zona, with elongated nuclei
TO, TI = .815, .745
ang = np.cumsum(rng.uniform(.18, .32, 40)); ang = ang[ang < 2 * np.pi - .12]; ang = ang * (2 * np.pi / (ang[-1] + .2))
nC = len(ang); a0 = rng.uniform(0, 2 * np.pi)
phi = (th - a0) % (2 * np.pi)
idx = np.searchsorted(ang, phi) % nC
hi_a = ang[idx]; lo_a = np.where(idx > 0, ang[idx - 1], ang[-1] - 2 * np.pi)
ph2 = np.where((idx == 0) & (phi > ang[-1]), phi - 2 * np.pi, phi)
frac = np.clip((ph2 - lo_a) / (hi_a - lo_a), 0, 1)
cth = rng.uniform(.75, 1.25, nC).astype(np.float32)[idx]
tthick = (TO - TI) * cth * (.45 + .55 * np.sin(np.pi * frac) ** .6)   # each cell bulges into the cavity
inner = TO - tthick
layer = ss(inner - .01, inner + .01, rr) * (1 - ss(TO - .008, TO + .006, rr))
opd += layer * .55 * (.6 + .4 * np.sin(np.pi * frac)); absb += layer * .05
for i in range(nC):
    b = ang[i]
    d = np.abs(((phi - b + np.pi) % (2 * np.pi)) - np.pi) * rr
    opd += .16 * np.exp(-(d / .0035) ** 2) * ss(inner - .015, inner + .005, rr) * (1 - ss(TO - .002, TO + .012, rr))
    lo = ang[i - 1] if i else ang[-1] - 2 * np.pi
    mid = (lo + b) / 2 + rng.uniform(-.04, .04); span = (b - lo)
    ca, cr = a0 + mid, (TO + (TO - (TO - TI))) / 2 - .002
    nx, ny = cr * np.cos(ca), cr * np.sin(ca)
    du, dv = u - nx, v - ny
    tu, tv = -np.sin(ca), np.cos(ca)
    along = du * tu + dv * tv; acr = du * np.cos(ca) + dv * np.sin(ca)
    e = (along / (span * cr * .28)) ** 2 + (acr / .02) ** 2
    nuc = np.clip(1 - e, 0, 1) ** .5
    opd += .45 * nuc; absb += .06 * nuc

# inner cell mass: a compact clump of rounded cells against the trophectoderm
ica = np.deg2rad(-62)
icx, icy = .52 * np.cos(ica), .52 * np.sin(ica)
cells = []
tries = 0
while len(cells) < 46 and tries < 9000:
    tries += 1
    rad = rng.uniform(.045, .07)
    px, py = icx + rng.normal(0, .17), icy + rng.normal(0, .12)
    # keep inside the cavity, in an ellipse hugging the wall
    if np.hypot(px, py) + rad > .76: continue
    if np.hypot(px - icx, py - icy) > .27: continue
    if any(np.hypot(px - qx, py - qy) < (rad + qr) * .7 for qx, qy, qr in cells): continue
    cells.append((px, py, rad))
icm = np.zeros((N, N), np.float32); edge = np.zeros((N, N), np.float32)
for (px, py, rad) in cells:
    d = np.hypot(u - px, v - py) / rad
    dome = np.sqrt(np.clip(1 - d * d, 0, 1))
    icm = np.maximum(icm, dome * .55)
    edge += np.exp(-((d - 1) / .04) ** 2)
    a = rng.uniform(0, 2 * np.pi); o = rng.uniform(.1, .3)
    nd = np.hypot(u - (px + rad * o * np.cos(a)), v - (py + rad * o * np.sin(a))) / (rad * .42)
    nucl = np.sqrt(np.clip(1 - nd * nd, 0, 1))
    icm += .22 * nucl
    no = np.hypot(u - (px + rad * o * np.cos(a) + rad * .08), v - (py + rad * o * np.sin(a) - rad * .05)) / (rad * .1)
    icm += .3 * np.sqrt(np.clip(1 - no * no, 0, 1))
gran = vnoise(140, 11, 2)
opd += icm * (1 + .5 * gran) + .12 * np.clip(edge, 0, 1.2)
absb += .12 * np.clip(icm, 0, 1)

# blastocoel: clear fluid with a few faint granules
cav = (1 - ss(TI - .03, TI, rr))
opd += cav * .04 * vnoise(30, 5, 3)
for _ in range(8):
    a = rng.uniform(0, 2 * np.pi); rd = rng.uniform(.1, .6)
    gx, gy, gr = rd * np.cos(a), rd * np.sin(a), rng.uniform(.006, .014)
    opd += .12 * np.sqrt(np.clip(1 - ((u - gx) ** 2 + (v - gy) ** 2) / gr ** 2, 0, 1)) * cav

def gblur(a, s):
    k = np.arange(-int(3 * s) - 1, int(3 * s) + 2, dtype=np.float32); k = np.exp(-k * k / (2 * s * s)); k /= k.sum()
    a = np.apply_along_axis(lambda m: np.convolve(m, k, 'same'), 0, a)
    return np.apply_along_axis(lambda m: np.convolve(m, k, 'same'), 1, a).astype(np.float32)
opd = gblur(opd, max(.6, .9 * N / 1400))
# DIC: the image is the derivative of optical path along the shear axis (light from the upper left)
gy_, gx_ = np.gradient(opd)
sh = (gx_ * np.cos(np.deg2rad(-135)) + gy_ * np.sin(np.deg2rad(-135))) * (N / 1400) * -30 * (3.0 / 2.2)
rel = np.tanh(sh * 1.1)
# bright-field DIC grade: the medium sits at mid tone, structure is relief; tinted to the logo's lavender and purple
L = .5 + .42 * rel - absb * .9
L = gblur(L, max(.5, .6 * N / 1400))
stops = [(0, (30, 8, 40)), (.3, (78, 42, 94)), (.5, (142, 120, 154)), (.72, (206, 190, 214)), (1, (246, 240, 248))]
col = np.zeros((N, N, 3), np.float32)
Lc = np.clip(L, 0, 1)
for (p0, c0), (p1, c1) in zip(stops, stops[1:]):
    t = np.clip((Lc - p0) / (p1 - p0), 0, 1)[..., None]; m = ((Lc >= p0) & (Lc <= p1))[..., None]
    col = np.where(m, np.array(c0, np.float32) / 255 * (1 - t) + np.array(c1, np.float32) / 255 * t, col)
# the eyepiece field: lit at the centre, falling off to the page ink at its edge (no hard rim, DJ)
FR = 1.42
illum = 1 - .38 * (r / FR) ** 2
ink = np.array([20, 12, 22], np.float32) / 255
col = ink + (col * illum[..., None] - ink) * ss(FR, FR * .78, r)[..., None]
grain = rng.normal(0, .01, (N, N, 1)).astype(np.float32)
col = np.clip(col + grain, 0, 1)
alpha = ss(FR * 1.04, FR * .86, r)
out = np.dstack([col, alpha[..., None]])
Image.fromarray((out * 255 + .5).astype(np.uint8), 'RGBA').save(OUT)
print('wrote', OUT, N, len(cells), 'icm cells', nC, 'te cells')
