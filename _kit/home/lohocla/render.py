#!/usr/bin/env python3
"""Lohocla hero (HOME_BRIEF update 2c: their own mark as a crafted object). The Lohocla logo is a space-filling
molecular model: two black carbon atoms, white hydrogens and one red oxygen (lohocla.com/img/logos/
lohocla_logo_orig_reworked.svg; red #ED1C24). Here that mark is built as a real studio object: a CPK model of the
same molecule (ethanol, C2H5OH, standard geometry) in lacquered graphite, porcelain and the logo's red, lit by a
soft key, a fill and a warm rim, with soft shadows, ambient occlusion and one bounce of glossy reflection.
Analytic sphere tracing in numpy. Saved with ALPHA (no ground of its own, DJ).
Usage: python3 render.py W H out.png [SS]"""
import sys, numpy as np
from PIL import Image

W = int(sys.argv[1]) if len(sys.argv) > 1 else 600
H = int(sys.argv[2]) if len(sys.argv) > 2 else 600
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 2
RY, RX, RZ = [float(x) for x in (sys.argv[5] if len(sys.argv) > 5 else '-25,-25,10').split(',')]
FW, FH = W, H; W, H = W * SS, H * SS

def nrm(v): return v / np.linalg.norm(v, axis=-1, keepdims=True)

# ---------- ethanol, standard geometry (angstrom) ----------
A = [('C', 1.1879, -0.3829, 0.0), ('C', 0.0, 0.5526, 0.0), ('O', -1.1867, -0.2472, 0.0), ('H', -1.9237, 0.3850, 0.0),
     ('H', 0.0227, 1.1812, 0.8852), ('H', 0.0227, 1.1812, -0.8852), ('H', 2.0985, 0.2306, 0.0),
     ('H', 1.1879, -1.0185, 0.8875), ('H', 1.1879, -1.0185, -0.8875)]
VDW = {'C': 1.70, 'O': 1.52, 'H': 1.10}
K = 0.86
P = np.array([[a[1], a[2], a[3]] for a in A]); P -= P.mean(0)
R = np.array([VDW[a[0]] * K for a in A])
T = [a[0] for a in A]
# turn it to a pleasing three-quarter view (like the logo: carbons in the middle, the red oxygen to one side)
def rot(ax, ang):
    c, s = np.cos(ang), np.sin(ang)
    if ax == 'x': return np.array([[1, 0, 0], [0, c, -s], [0, s, c]])
    if ax == 'y': return np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]])
    return np.array([[c, -s, 0], [s, c, 0], [0, 0, 1]])
P[:, 0] *= -1
M = rot('z', np.radians(RZ)) @ rot('x', np.radians(RX)) @ rot('y', np.radians(RY))
P = P @ M.T
P[:, 1] += 0.05
ALB = {'C': np.array([.030, .029, .031]), 'H': np.array([.70, .69, .675]), 'O': np.array([.78, .022, .03])}
SPEC = {'C': .055, 'H': .040, 'O': .045}
ROUGH = {'C': 10.0, 'H': 7.0, 'O': 8.0}
alb = np.array([ALB[t] for t in T]); spc = np.array([SPEC[t] for t in T])

# ---------- camera ----------
ext = 3.55
cam = np.array([0, 0, 22.0])
ys, xs = np.mgrid[0:H, 0:W]
u = ((xs + .5) / W * 2 - 1) * ext * (W / H)
v = (1 - (ys + .5) / H * 2) * ext
target = np.stack([u, v, np.zeros_like(u)], -1).reshape(-1, 3)
O0 = np.repeat(cam[None], len(target), 0)
D0 = nrm(target - O0)

def hit(O, D, skip=None):
    """nearest positive hit of rays against all spheres -> t, index"""
    best = np.full(len(O), np.inf); idx = np.full(len(O), -1)
    for i in range(len(P)):
        oc = O - P[i]; b = (oc * D).sum(1); c = (oc * oc).sum(1) - R[i] ** 2
        disc = b * b - c; m = disc > 0
        sq = np.sqrt(np.where(m, disc, 0))
        t = -b - sq
        t2 = -b + sq
        t = np.where(t > 1e-4, t, np.where(t2 > 1e-4, t2, np.inf))
        if skip is not None: t = np.where(skip == i, np.where(t2 > 1e-4, np.inf, np.inf), t) if False else t
        t = np.where(m, t, np.inf)
        u_ = t < best; best = np.where(u_, t, best); idx = np.where(u_, i, idx)
    return best, idx

def occluded(O, D, maxd=np.inf):
    occ = np.zeros(len(O), bool)
    for i in range(len(P)):
        oc = O - P[i]; b = (oc * D).sum(1); c = (oc * oc).sum(1) - R[i] ** 2
        disc = b * b - c; m = disc > 0; sq = np.sqrt(np.where(m, disc, 0))
        t = -b - sq; t2 = -b + sq
        occ |= m & (((t > 1e-3) & (t < maxd)) | ((t2 > 1e-3) & (t < 1e-3) & False))
    return occ

rng = np.random.default_rng(7)
# lights: a big soft key upper left/front, a cool-neutral fill from the right, a warm red rim from behind
KEY = np.array([-7.0, 8.0, 9.0]); KEYS = 3.2
FILL = nrm(np.array([8.0, -1.0, 6.0]))
RIM = nrm(np.array([5.0, 4.0, -7.0]))
RIM2 = nrm(np.array([-6.0, -3.0, -6.0]))

def env(d):
    """a dark studio: a soft-edged key softbox upper left, a narrow strip light right, faint warm floor bounce"""
    y = d[:, 1]
    col = np.zeros((len(d), 3)) + np.array([.010, .009, .009])
    kb = nrm(KEY)[None]
    a = (d * kb).sum(1)
    sb = np.clip((a - .86) / .1, 0, 1) ** 2
    col += sb[:, None] * np.array([2.6, 2.5, 2.4])
    st = np.exp(-((d[:, 0] - .82) / .09) ** 2) * np.clip((y + .25) / .5, 0, 1) * (d[:, 2] > -.3)
    col += st[:, None] * np.array([.55, .52, .5])
    rr = np.clip((d * RIM[None]).sum(1), 0, 1) ** 6
    col += rr[:, None] * np.array([.9, .18, .16])
    fl = np.clip(-y, 0, 1) ** 2
    col += fl[:, None] * np.array([.05, .02, .02])
    return col

def shade(O, D, depth=0):
    n_ = len(O)
    t, idx = hit(O, D)
    m = np.isfinite(t)
    col = np.zeros((n_, 3)); alpha = m.astype(float)
    if depth > 0:
        col = env(D)
    if not m.any(): return col, alpha
    Pm = O[m] + D[m] * t[m, None]; I = idx[m]
    N = nrm(Pm - P[I])
    # a very fine lacquer grain so the surfaces read as made things, not CG
    g = np.sin(Pm[:, 0] * 61) * np.sin(Pm[:, 1] * 57 + 1.3) * np.sin(Pm[:, 2] * 67 + .7)
    N = nrm(N + .006 * g[:, None])
    V = -D[m]
    a = alb[I]; ks = spc[I]
    # soft key shadow: jittered points on a disc light
    ns = 10 if depth == 0 else 3
    vis = np.zeros(len(Pm))
    kd = nrm(KEY)
    tu = nrm(np.cross(kd, [0, 1, 0])); tv = np.cross(kd, tu)
    for s in range(ns):
        r_ = np.sqrt((s + .5) / ns); th = s * 2.39996 + rng.random() * .3
        Lp = KEY + KEYS * (r_ * np.cos(th) * tu + r_ * np.sin(th) * tv)
        Ld = Lp[None] - Pm; dist = np.linalg.norm(Ld, axis=1); Ld /= dist[:, None]
        vis += ~occluded(Pm + N * 1e-3, Ld, dist)
    vis /= ns
    L = nrm(KEY[None] - Pm)
    ndl = np.clip((N * L).sum(1), 0, 1)
    # ambient occlusion: cosine hemisphere
    na = 16 if depth == 0 else 4
    ao = np.zeros(len(Pm))
    for s in range(na):
        r1 = rng.random(len(Pm)); r2 = rng.random(len(Pm))
        phi = 2 * np.pi * r1; sr = np.sqrt(r2)
        tt = nrm(np.cross(N, np.where(np.abs(N[:, :1]) > .9, [[0, 1, 0]], [[1, 0, 0]])))
        bb = np.cross(N, tt)
        d = nrm(tt * (sr * np.cos(phi))[:, None] + bb * (sr * np.sin(phi))[:, None] + N * np.sqrt(1 - r2)[:, None])
        ao += ~occluded(Pm + N * 1e-3, d, 2.2)
    ao /= na
    ao = ao ** 1.15
    diff = a * (ndl * vis * 2.2)[:, None]
    diff += a * (np.clip((N * FILL).sum(1), 0, 1) * .34)[:, None] * ao[:, None] * np.array([.92, .95, 1.0])
    diff += a * (.05 * ao)[:, None]
    # sub-surface-ish wrap on porcelain and red so they glow softly at the terminator
    wrap = np.clip(((N * L).sum(1) + .45) / 1.45, 0, 1) ** 2 * vis
    sss = np.where(np.array([T[i] in 'HO' for i in I]), .16, 0.0)
    diff += (a * np.array([1.0, .75, .7]))[:] * (wrap * sss)[:, None]
    # rims
    fres = (1 - np.clip((N * V).sum(1), 0, 1)) ** 3
    rim = np.clip((N * RIM).sum(1), 0, 1) ** 1.6 * ao
    diff += (rim * (.55 + 1.2 * fres))[:, None] * np.array([.95, .16, .14]) * np.where(np.array([T[i] == 'C' for i in I]), 1.5, .55)[:, None]
    rim2 = np.clip((N * RIM2).sum(1), 0, 1) ** 2 * ao
    diff += (rim2 * .12)[:, None] * np.array([.7, .7, .75])
    # key highlight (blinn) + glossy reflection
    Hh = nrm(L + V)
    sp = np.clip((N * Hh).sum(1), 0, 1)
    rough = np.array([ROUGH[T[i]] for i in I])
    spec = (sp ** (rough * 14)) * 2.4 * vis + (sp ** (rough * 2.2)) * .22 * vis
    F = ks + (1 - ks) * (1 - np.clip((N * V).sum(1), 0, 1)) ** 5
    Rd = D[m] - 2 * (D[m] * N).sum(1)[:, None] * N
    if depth == 0:
        rc, _ = shade(Pm + N * 2e-3, Rd, depth + 1)
    else:
        rc = env(Rd)
    refl = rc * (F * ao)[:, None]
    c = diff + refl + spec[:, None] * np.array([1.0, .98, .95]) * F[:, None] * 6
    col[m] = c
    return col, alpha

# render in strips
out = np.zeros((H * W, 3)); al = np.zeros(H * W)
B = 40000
for s in range(0, H * W, B):
    c, a = shade(O0[s:s + B], D0[s:s + B])
    out[s:s + B] = c; al[s:s + B] = a
    print(f'{s / (H * W) * 100:.0f}%', end=' ', flush=True)
out = out.reshape(H, W, 3); al = al.reshape(H, W)
# filmic tone map, slight warm grade
x = np.maximum(out, 0)
x = x * (2.51 * x + .03) / (x * (2.43 * x + .59) + .14)
x = np.clip(x, 0, 1) ** (1 / 2.2)
rgba = np.concatenate([x * al[..., None], al[..., None]], -1)
img = Image.fromarray((rgba * 255).astype(np.uint8), 'RGBA')
if SS > 1: img = img.resize((FW, FH), Image.LANCZOS)
# un-premultiply
arr = np.asarray(img).astype(float); a_ = arr[..., 3:4] / 255
arr[..., :3] = np.where(a_ > 0, arr[..., :3] / np.maximum(a_, 1e-6), 0)
Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8), 'RGBA').save(OUT)
print('\nwrote', OUT)
