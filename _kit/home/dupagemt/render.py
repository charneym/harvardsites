#!/usr/bin/env python3
"""DuPage Medical Technology hero (HOME_BRIEF update 2c: a crafted render of the real subject). One of DMT's high-loading
peptide nanoparticles (HLPN, Sci Transl Med 2020, PMC8061427; dupagemt.com About Us): a lipid bilayer shell cut open on the
front so the packed cargo shows. The cargo is drawn the way the drug is built: short ExE-motif peptides (six residues, M3mP6 /
MB2mP6) each with a myristoyl tail, crowded inside the particle (the "high loading"). Lipid heads ivory, tails smoke, peptides
in the DuPage logo reds. Sphere-splat renderer with a z-buffer and screen-space occlusion; real ALPHA (DJ/DP).
Usage: python3 render.py W H out.png [SS]"""
import sys, numpy as np
from PIL import Image, ImageFilter

W = int(sys.argv[1]) if len(sys.argv) > 1 else 900
H = int(sys.argv[2]) if len(sys.argv) > 2 else 900
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 2
FW, FH = W, H; W, H = W * SS, H * SS
rng = np.random.default_rng(7)

def nrm(v): return v / (np.linalg.norm(v, axis=-1, keepdims=True) + 1e-12)
def fib(n):
    i = np.arange(n) + .5; phi = np.arccos(1 - 2 * i / n); th = np.pi * (1 + 5 ** .5) * i
    return np.stack([np.cos(th) * np.sin(phi), np.sin(th) * np.sin(phi), np.cos(phi)], 1)

# ---- view: camera looks down -z; the particle is rotated so the cut faces us, a little from above-left ----
def rot(ax, t):
    c, s = np.cos(t), np.sin(t)
    if ax == 'x': return np.array([[1, 0, 0], [0, c, -s], [0, s, c]])
    if ax == 'y': return np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]])
    return np.array([[c, -s, 0], [s, c, 0], [0, 0, 1]])
ROT = rot('x', np.radians(-16)) @ rot('y', np.radians(-24))
# cut: remove the wedge where both planes are positive (an orange with a quarter taken out, facing the camera)
N1 = nrm(np.array([0.9, 0.0, 0.45])); N2 = nrm(np.array([-0.15, 0.95, 0.5]))
def removed(p, pad=0.0):
    return (p @ N1 > pad) & (p @ N2 > pad)

S = []  # (x, y, z, r, R, G, B, spec, kind)
def add(p, r, col, spec=.35, kind=0):
    p = np.atleast_2d(p); n = len(p)
    col = np.broadcast_to(np.asarray(col, float), (n, 3))
    r = np.broadcast_to(np.asarray(r, float), (n,))
    S.append(np.column_stack([p, r, col, np.full(n, spec), np.full(n, kind)]))

RO, RI = 1.0, 0.80           # outer / inner head shells
HEAD = 0.037
HC = np.array([1.0, 0.91, 0.82]); TC = np.array([0.50, 0.45, 0.46])
for Rs, n, inward in [(RO, 3300, -1), (RI, 2150, 1)]:
    d = fib(n); d = nrm(d + rng.normal(0, .005, d.shape))
    p = d * Rs
    keep = ~removed(p, -0.0)
    jit = rng.uniform(.9, 1.06, (n, 1))
    add(p[keep], HEAD * rng.uniform(.94, 1.06, keep.sum()), np.clip(HC * jit[keep], 0, 1), .45, 1)
    # two tails per lipid, pointing to the bilayer midplane; drawn only near the cut, where they can be seen
    mid = (RO + RI) / 2
    near = keep & ((np.abs(p @ N1) < .12) | (np.abs(p @ N2) < .12) | (~removed(p * 0 + d * mid, 0) & False))
    for side in (-1, 1):
        t = nrm(np.cross(d, np.array([0.3, 0.8, 0.5]))) * 0.014 * side
        for k in range(1, 6):
            q = d * (Rs + inward * k * (abs(Rs - mid) - .012) / 5) + t + rng.normal(0, .004, d.shape)
            ok = near & ~removed(q, 0)
            add(q[ok], 0.0135, TC * rng.uniform(.9, 1.1, (ok.sum(), 1)), .2, 2)

# ---- cargo: myristoylated hexapeptides packed in the core ----
PEP = [np.array([0.85, 0.16, 0.12]), np.array([0.67, 0.12, 0.09]), np.array([0.95, 0.38, 0.17]),
       np.array([0.80, 0.22, 0.14]), np.array([0.98, 0.55, 0.22]), np.array([0.62, 0.10, 0.10])]
MYR = np.array([0.88, 0.78, 0.55])
placed = []
tries = 0
while len(placed) < 260 and tries < 20000:
    tries += 1
    c = rng.uniform(-.7, .7, 3)
    if np.linalg.norm(c) > .66: continue
    if not removed(c, -0.05) and rng.random() > .25: continue   # most of the visible ones sit in the opened wedge
    if placed and np.min(np.linalg.norm(np.array(placed) - c, axis=1)) < .085: continue
    placed.append(c)
    ax = nrm(rng.normal(size=3)); b1 = nrm(np.cross(ax, rng.normal(size=3))); b2 = np.cross(ax, b1)
    beads = []
    for k in range(6):                                           # a short, slightly curled chain
        a = k * 1.75
        beads.append(c + ax * (k - 2.5) * .03 + (b1 * np.cos(a) + b2 * np.sin(a)) * .018)
    beads = np.array(beads)
    if np.max(np.linalg.norm(beads, axis=1)) > .72: continue
    for k in range(6):
        add(beads[k], .027, PEP[k] * rng.uniform(.92, 1.06), .55, 3)
    for k in range(1, 5):                                        # the myristoyl tail off the N-terminus
        add(beads[0] - ax * k * .018 + b1 * .004 * k, .011, MYR, .25, 4)

S = np.concatenate(S)
P = S[:, :3] @ ROT.T
# perspective (camera at z=+6 looking -z), screen fit
CZ = 6.0; f = 1 / (CZ - P[:, 2]) * CZ
scale = min(W, H) * .44
sx = W / 2 + P[:, 0] * f * scale; sy = H / 2 - P[:, 1] * f * scale; sr = S[:, 3] * f * scale
depth = CZ - P[:, 2]

Z = np.full((H, W), np.inf); NX = np.zeros((H, W)); NY = np.zeros((H, W)); NZ = np.zeros((H, W))
CR = np.zeros((H, W, 3)); SP = np.zeros((H, W)); KD = np.zeros((H, W))
order = np.argsort(-depth)
for i in order:
    x0, y0, r = sx[i], sy[i], sr[i]
    a0, a1 = int(max(0, np.floor(x0 - r))), int(min(W, np.ceil(x0 + r) + 1))
    b0, b1 = int(max(0, np.floor(y0 - r))), int(min(H, np.ceil(y0 + r) + 1))
    if a0 >= a1 or b0 >= b1: continue
    xs = (np.arange(a0, a1) + .5 - x0) / r; ys = (np.arange(b0, b1) + .5 - y0) / r
    X, Y = np.meshgrid(xs, ys); d2 = X * X + Y * Y
    m = d2 < 1
    if not m.any(): continue
    nz = np.sqrt(np.clip(1 - d2, 0, 1))
    zz = depth[i] - nz * S[i, 3]
    sub = Z[b0:b1, a0:a1]; w = m & (zz < sub)
    sub[w] = zz[w]
    NX[b0:b1, a0:a1][w] = X[w]; NY[b0:b1, a0:a1][w] = -Y[w]; NZ[b0:b1, a0:a1][w] = nz[w]
    CR[b0:b1, a0:a1][w] = S[i, 4:7]; SP[b0:b1, a0:a1][w] = S[i, 7]; KD[b0:b1, a0:a1][w] = S[i, 8]

cov = np.isfinite(Z)
zf = np.where(cov, Z, CZ + 1.6)
# screen-space occlusion: a pixel behind the local average is in a crevice
def box(a, r, ax):
    r = max(1, int(r)); pad = [(0, 0), (0, 0)]; pad[ax] = (r + 1, r)
    c = np.cumsum(np.pad(a, pad, mode='edge'), axis=ax)
    n = a.shape[ax]
    hi = np.take(c, np.arange(2 * r + 1, 2 * r + 1 + n), axis=ax); lo = np.take(c, np.arange(0, n), axis=ax)
    return (hi - lo) / (2 * r + 1)
def blur(a, rad):
    for _ in range(3): a = box(box(a, rad * .6, 0), rad * .6, 1)
    return a
ao1 = np.clip((zf - blur(zf, 3 * SS)) * 9, 0, 1)
ao2 = np.clip((zf - blur(zf, 14 * SS)) * 3.2, 0, 1)
ao = np.clip(1 - .55 * ao1 - .55 * ao2, .15, 1)
L = nrm(np.array([-0.45, 0.6, 0.66])); Hh = nrm(L + np.array([0, 0, 1.0]))
N = np.stack([NX, NY, NZ], -1)
lam = np.clip(N @ L, 0, 1)
spec = np.clip(N @ Hh, 0, 1) ** 48 * SP
rim = (1 - NZ) ** 2.5 * .22
# depth cue: the far side of the open cavity falls into shadow
dc = np.clip((zf - (CZ - 1.0)) / 1.6, 0, 1)
shade = (.24 + .86 * lam) * ao * (1 - .45 * dc)
col = CR * shade[..., None] + spec[..., None] * .55 + rim[..., None] * np.array([1.0, .55, .45])
col = np.clip(col, 0, 1) ** (1 / 1.08)
alpha = cov.astype(float)
rgba = np.dstack([col, alpha])
img = Image.fromarray((rgba * 255).astype(np.uint8), 'RGBA').resize((FW, FH), Image.LANCZOS)
bb = img.getbbox(); img = img.crop((max(0, bb[0] - 6), max(0, bb[1] - 6), min(FW, bb[2] + 6), min(FH, bb[3] + 6)))
img.save(OUT); print(OUT, img.size, len(S), 'spheres')
