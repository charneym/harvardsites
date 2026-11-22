#!/usr/bin/env python3
"""NanoValent hero (HOME_BRIEF update 2c: a crafted render of the firm's own product). One nADC/TNS, modelled on
NanoValent's own schematics (Platform Technology, Fig. 1.0; Our Science, small-molecule delivery diagram): a hollow
hybrid polymerized liposomal shell (phospholipid + cholesterol bilayer with polymerized PCDA domains), ~20 IgG
antibodies tethered on PEG chains, and a cut-away octant that shows the bilayer in section and the aqueous core
loaded with drug molecules (irinotecan). Rendered as a molecular illustration: every lipid head, tail bead, antibody
domain and drug atom is a sphere, splatted into a z-buffer, lit by a key, fill and rim, with depth-darkening ambient
occlusion and depth cueing. Saved with ALPHA (no ground of its own, DJ/DP). Usage: python3 render.py W out.png"""
import sys, math, numpy as np
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 1400
OUT = sys.argv[2] if len(sys.argv) > 2 else 'hero.png'
SS = 2; w = W * SS; EXT = 1.62; S = w / (2 * EXT)
rng = np.random.default_rng(7)
def nrm(v): return v / np.maximum(np.linalg.norm(v, axis=-1, keepdims=True), 1e-9)
def fib(n):
    i = np.arange(n) + .5; phi = np.arccos(1 - 2 * i / n); th = math.pi * (1 + 5 ** .5) * i
    return np.stack([np.cos(th) * np.sin(phi), np.sin(th) * np.sin(phi), np.cos(phi)], -1)
def rot(ax, a):
    ax = np.array(ax, float); ax /= np.linalg.norm(ax); x, y, z = ax; c, s = math.cos(a), math.sin(a); C = 1 - c
    return np.array([[c + x*x*C, x*y*C - z*s, x*z*C + y*s], [y*x*C + z*s, c + y*y*C, y*z*C - x*s], [z*x*C - y*s, z*y*C + x*s, c + z*z*C]])
# materials: albedo (linear-ish rgb 0..1), specular strength
MAT = {
 'head':  ([.78, .84, .91], .22),   # phospholipid heads, pale
 'chol':  ([.86, .78, .62], .2),   # cholesterol, warm
 'pcda':  ([.16, .50, .86], .55),   # polymerized PCDA domain heads, brand sky/navy
 'tail':  ([.62, .66, .72], .15),
 'ptail': ([.10, .30, .62], .30),
 'peg':   ([.66, .72, .80], .20),
 'hc':    ([.19, .62, .90], .45),   # antibody heavy chain
 'lc':    ([.70, .86, .97], .40),   # antibody light chain
 'drug':  ([.98, .66, .22], .50),   # irinotecan
 'drug2': ([.86, .40, .14], .50),
}
MK = list(MAT); P, R, M = [], [], []
def add(p, r, m):
    p = np.atleast_2d(p); P.append(p); R.append(np.full(len(p), r)); M.append(np.full(len(p), MK.index(m)))
# cut-away octant in the particle frame
def cut(p): return (p[:, 0] > 0) & (p[:, 1] > 0) & (p[:, 2] > 0)
# polymerized PCDA domains
DOM = nrm(rng.normal(size=(16, 3)))
def dom(u): return (u @ DOM.T).max(-1) > math.cos(.24)
RO, RI, HR = 1.0, .80, .025
for rr, sp in ((RO, .047), (RI, .047)):
    n = int(4 * math.pi * rr * rr / (sp * sp)); u = fib(n); u = nrm(u + rng.normal(scale=.004, size=u.shape)); p = u * rr
    keep = ~cut(p); u, p = u[keep], p[keep]; d = dom(u)
    ch = (~d) & (rng.random(len(u)) < .16)
    add(p[d], HR, 'pcda'); add(p[ch], HR * .82, 'chol'); add(p[(~d) & (~ch)], HR, 'head')
    # tails, only where the section shows them (near the three cut planes, outside the cut octant)
    near = (np.abs(p) < .06).any(-1)
    sgn = -1 if rr == RO else 1
    for k, (uu, pp, dd) in enumerate(zip(u[near], p[near], d[near])):
        t = nrm(np.cross(uu, [0.3, 0.5, 0.8]))
        for side in (-1, 1):
            for j in range(1, 6):
                q = pp + uu * sgn * (.014 + .0135 * j) + t * side * .0085 + rng.normal(scale=.0015, size=3)
                add(q, .0095, 'ptail' if dd else 'tail')
# antibodies on PEG tethers (~20 IgG per particle, NanoValent Platform Technology)
AN = fib(22); AN = nrm(AN + rng.normal(scale=.12, size=AN.shape))
def lobe(a, b, r, m, k=6):
    k = k * 2
    for t in np.linspace(0, 1, k): add(a + (b - a) * t + rng.normal(scale=r * .10, size=3), r * (.8 + .32 * math.sin(t * math.pi)), m)
for u in AN:
    p0 = u * RO
    if cut(p0[None])[0]: continue
    t1 = nrm(np.cross(u, rng.normal(size=3))); t2 = np.cross(u, t1)
    q = p0.copy(); L = .22 + .05 * rng.random()
    for j in range(16):   # PEG: a slightly wandering chain
        q = q + u * (L / 16) + (t1 * math.sin(j * .9) + t2 * math.cos(j * 1.3)) * .006
        add(q, .011, 'peg')
    base = q; tilt = nrm(u + t1 * (rng.random() - .5) * .6)
    fc = base + tilt * .15; lobe(base, fc, .03, 'hc', 7)
    sp = rng.random() * math.pi
    for s in (-1, 1):
        dir_ = nrm(tilt * math.cos(.75) + (t1 * math.cos(sp) + t2 * math.sin(sp)) * s * math.sin(.75))
        side = nrm(np.cross(dir_, tilt))
        a = fc + dir_ * .02; b = fc + dir_ * .17
        lobe(a, b, .026, 'hc', 6); lobe(a + side * .034, b + side * .034 + dir_ * .01, .024, 'lc', 6)
# drug molecules in the aqueous core
for k in range(300):
    c = nrm(rng.normal(size=3)) * (rng.random() ** (1 / 3)) * .70
    ax = nrm(rng.normal(size=3)); bx = nrm(np.cross(ax, rng.normal(size=3)))
    for j in range(6):
        add(c + ax * (j - 2.5) * .022 + bx * (.018 if j % 2 else -.018) * (j in (1, 4)), .02, 'drug' if j % 3 else 'drug2')
P = np.concatenate(P); R = np.concatenate(R); M = np.concatenate(M)
# orient: the cut octant turns toward the viewer and up-right
Rm = rot([1, -1, 0], .62) @ rot([0, 0, 1], -.15)
P = P @ Rm.T
print('spheres', len(P))
# splat
Z = np.full((w, w), -9.0, np.float32); N = np.zeros((w, w, 3), np.float32); ID = np.full((w, w), -1, np.int16)
px = (P[:, 0] + EXT) * S; py = (EXT - P[:, 1]) * S; pr = R * S
for i in np.argsort(P[:, 2]):
    r = pr[i]; x0 = int(px[i] - r) - 1; x1 = int(px[i] + r) + 2; y0 = int(py[i] - r) - 1; y1 = int(py[i] + r) + 2
    if x1 < 0 or y1 < 0 or x0 >= w or y0 >= w: continue
    x0c, y0c, x1c, y1c = max(x0, 0), max(y0, 0), min(x1, w), min(y1, w)
    yy, xx = np.mgrid[y0c:y1c, x0c:x1c]; dx = (xx + .5 - px[i]) / r; dy = (yy + .5 - py[i]) / r
    d2 = dx * dx + dy * dy; ins = d2 < 1
    dz = np.sqrt(np.clip(1 - d2, 0, 1)); z = P[i, 2] + dz * R[i]
    zs = Z[y0c:y1c, x0c:x1c]; win = ins & (z > zs)
    zs[win] = z[win]; N[y0c:y1c, x0c:x1c][win] = np.stack([dx, -dy, dz], -1)[win]; ID[y0c:y1c, x0c:x1c][win] = M[i]
cov = ID >= 0
def blur(a, r):
    for _ in range(3):
        c = np.cumsum(np.pad(a, ((r + 1, r), (0, 0)), mode='edge'), 0); a = (c[2 * r + 1:] - c[:-2 * r - 1]) / (2 * r + 1)
        c = np.cumsum(np.pad(a, ((0, 0), (r + 1, r)), mode='edge'), 1); a = (c[:, 2 * r + 1:] - c[:, :-2 * r - 1]) / (2 * r + 1)
    return a
Zf = np.where(cov, Z, Z[cov].min() - .3).astype(np.float64)
ao = np.zeros_like(Zf)
for rad, k in ((int(.015 * S), 6.0), (int(.05 * S), 2.6), (int(.16 * S), 1.1)):
    ao += np.clip((blur(Zf, max(rad, 1)) - Zf) * k, 0, None)
ao = np.clip(1 - ao * .9, .18, 1)
alb = np.array([MAT[k][0] for k in MK], np.float32); spc = np.array([MAT[k][1] for k in MK], np.float32)
A = alb[np.clip(ID, 0, None)]; SP = spc[np.clip(ID, 0, None)]
n = N
L1 = nrm(np.array([-.55, .62, .56])); L2 = nrm(np.array([.7, -.2, .45])); Hh = nrm(L1 + np.array([0, 0, 1]))
lam = np.clip(n @ L1, 0, 1); fil = np.clip(n @ L2, 0, 1)
rim = np.clip(1 - n[..., 2], 0, 1) ** 3
spec = np.clip(n @ Hh, 0, 1) ** 24
col = A * (.16 + .86 * lam[..., None] + .22 * fil[..., None] * np.array([.6, .78, 1.0])) * ao[..., None]
col += (SP * spec)[..., None] * np.array([1, .98, .95]) * ao[..., None]
col += rim[..., None] * np.array([.25, .55, .95]) * .35 * ao[..., None]
# depth cue: far things sink toward the page ink
zmin, zmax = Z[cov].min(), Z[cov].max(); dc = np.clip((Z - zmin) / (zmax - zmin), 0, 1)
INK = np.array([.027, .063, .14])
col = col * (.45 + .55 * dc[..., None]) + INK * (1 - (.45 + .55 * dc[..., None])) * .6
col = np.clip(col, 0, 1) ** (1 / 1.12)
img = np.dstack([col, cov.astype(np.float32)])
img = img.reshape(W, SS, W, SS, 4).mean((1, 3))
a = img[..., 3:4]; rgb = np.where(a > 0, img[..., :3] / np.maximum(a, 1e-6), 0)
out = np.dstack([rgb, a]) * 255
Image.fromarray(out.round().astype(np.uint8), 'RGBA').save(OUT)
print('wrote', OUT)
