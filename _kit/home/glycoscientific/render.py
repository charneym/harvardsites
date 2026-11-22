#!/usr/bin/env python3
"""GlycoScientific hero (HOME_BRIEF update 2c: a crafted render of the firm's real product). A space-filling model of a
human IgG1 antibody, the subject of GlycoScientific's recombinant IgG standards: two heavy chains (logo/site blue
#334fb4 family), two light chains (the site's sky-blue band), and the conserved Fc N-glycans at Asn297 (biantennary
trees between the CH2 domains) in warm gold, the modification GlycoScientific's standards label and quantify.
Twelve Ig domains as packed pseudo-atoms, sphere-splatted with z-buffer, Lambert + rim light, screen-space ambient
occlusion and a fine Goodsell-style contour. Saved with ALPHA (no ground of its own, DJ).
Usage: python3 render.py SIZE out.png"""
import sys, numpy as np
from PIL import Image, ImageFilter
S = int(sys.argv[1]) if len(sys.argv) > 1 else 1200
OUT = sys.argv[2] if len(sys.argv) > 2 else 'hero.png'
SS = 2; R = S * SS
rng = np.random.default_rng(297)

def rot(ax, a):
    ax = np.asarray(ax, float); ax /= np.linalg.norm(ax); x, y, z = ax; c, s = np.cos(a), np.sin(a); C = 1 - c
    return np.array([[c+x*x*C, x*y*C-z*s, x*z*C+y*s], [y*x*C+z*s, c+y*y*C, y*z*C-x*s], [z*x*C-y*s, z*y*C+x*s, c+z*z*C]])

atoms = []  # (xyz, radius, colour rgb, kind)
def domain(c, axis, side, col, n=900, L=2.2, Rr=1.0, seed=0):
    """an Ig domain: a slightly flattened, lumpy ellipsoid (beta-sandwich) of pseudo-atoms"""
    axis = np.asarray(axis, float); axis /= np.linalg.norm(axis)
    side = np.asarray(side, float); side -= axis * side.dot(axis); side /= np.linalg.norm(side)
    third = np.cross(axis, side)
    p = rng.normal(size=(n * 3, 3)); p /= np.linalg.norm(p, axis=1, keepdims=True)
    p *= rng.random((n * 3, 1)) ** (1 / 3)
    p = p[:n] if len(p) >= n else p
    # bumpiness: modulate the radius by a few random lobes so domains are not smooth eggs
    lob = rng.normal(size=(9, 3)); lob /= np.linalg.norm(lob, axis=1, keepdims=True)
    k = 1 + 0.16 * np.tanh((p @ lob.T) * 2.4).sum(1) / 3
    p *= k[:, None]
    xyz = c + np.outer(p[:, 0] * L, axis) + np.outer(p[:, 1] * Rr, side) + np.outer(p[:, 2] * Rr * 0.82, third)
    shade = rng.normal(0, 0.035, (n, 1))
    cc = np.clip(np.asarray(col, float)[None, :] * (1 + shade), 0, 1)
    rr = 0.30 + 0.10 * rng.random(n)
    for a, q, r0 in zip(xyz, cc, rr): atoms.append((a, r0, q, 0))

def unit(v): v = np.asarray(v, float); return v / np.linalg.norm(v)
HA = np.array([0.26, 0.36, 0.80]); HB = np.array([0.34, 0.45, 0.86]); LC = np.array([0.50, 0.76, 0.90])
GL = np.array([0.99, 0.82, 0.42])
# --- Fc: CH2/CH3 pairs hanging down; the CH2 pair stands apart (the glycans fill the gap between them)
dn = unit([0, -1, 0.0])
for ch, col in ((-1, HA), (1, HB)):
    domain(np.array([ch * 1.55, -2.1, -0.2]), dn + np.array([ch * 0.16, 0, 0]), [1, 0, 0], col, n=1000)  # CH2
    domain(np.array([ch * 1.02, -6.5, 0]), dn, [1, 0, 0], col, n=1000)                                    # CH3
# --- hinge: two flexible strands from the CH2 tops up to the CH1 domains (disulfide-linked core)
def strand(p0, p1, bend, col, n=60):
    for t in np.linspace(0, 1, n):
        p = p0 * (1 - t) + p1 * t + bend * np.sin(np.pi * t)
        for _ in range(2): atoms.append((p + rng.normal(0, .12, 3), 0.30, col, 0))
# --- Fabs: arms up-left and up-right, each heavy (VH, CH1) beside light (VL, CL)
for ch, hc in ((-1, HA), (1, HB)):
    ang = np.radians(57) * ch
    ax = unit([np.sin(ang), np.cos(ang), 0.18 * ch])
    side = unit(np.cross(ax, [0, 0, 1])) * (-ch)
    base = np.array([ch * 2.2, 2.4, 0])
    for j, d in enumerate((2.4, 6.9)):         # CH1/CL then VH/VL
        domain(base + ax * d + side * 0.98, ax, side, hc, n=950)
        domain(base + ax * d - side * 1.05, ax, side, LC, n=900)
    strand(np.array([ch * 1.25, 0.15, 0.1]), base + ax * 0.6 + side * 0.9, np.array([ch * -0.25, 0, 0.35]), hc)
    strand(np.array([ch * 0.55, 0.05, -0.2]), np.array([-ch * 0.1, 1.0, -0.2]) * 0 + np.array([ch * 0.25, 1.3, -0.15]), np.array([0, 0, -0.2]), hc, n=25)
# --- N-glycans at Asn297: biantennary complex type with core fucose (GlcNAc-GlcNAc-Man, Man/Man branches, GlcNAc, Gal),
#     one per CH2, folded into the gap between the two CH2 domains. Each monosaccharide is a small cluster of atoms.
def sugar(p, k=1.0):
    c = GL * (1 + rng.normal(0, .025))
    for _ in range(7): atoms.append((p + rng.normal(0, .18, 3), 0.27 * k, c * (1 + rng.normal(0, .03)), 1))
def glycan(root, inward, up, front):
    inward = unit(inward); up = unit(up); front = unit(front)
    st = 0.62
    g1 = root + inward * st; g2 = g1 + inward * st * .8 + up * st * .5; m = g2 + up * st * .9 + inward * st * .3
    for p in (g1, g2, m): sugar(p)
    sugar(g1 - up * st * .9 + front * st * .5, .9)                      # core fucose
    for sgn, br in ((1, up * .7 + front * .7), (-1, inward * .8 - up * .2 + front * .4)):
        q = m
        for k in range(3):                                                # Man - GlcNAc - Gal
            q = q + unit(br) * st + rng.normal(0, .08, 3); sugar(q)
for ch in (-1, 1):
    glycan(np.array([ch * 1.25, -1.4, 0.55]), [-ch, -0.35, 0.2], [0, -1, 0.15], [0, 0.2, 1])

xyz = np.array([a[0] for a in atoms]); rad = np.array([a[1] for a in atoms]); col = np.array([a[2] for a in atoms])
kind = np.array([a[3] for a in atoms])
# tilt in 3D for depth: turn about y, lean back a touch, and a slight roll
M = rot([0, 1, 0], np.radians(28)) @ rot([1, 0, 0], np.radians(-16)) @ rot([0, 0, 1], np.radians(-9))
xyz = (xyz - xyz.mean(0)) @ M.T
ext = np.abs(xyz[:, :2]).max() + 1.2
sc = R / (2 * ext)
px = (xyz[:, 0] * sc + R / 2); py = (-xyz[:, 1] * sc + R / 2); pz = xyz[:, 2] * sc; pr = rad * sc
Z = np.full((R, R), -1e9); NX = np.zeros((R, R)); NY = np.zeros((R, R)); NZ = np.zeros((R, R))
CI = np.zeros((R, R), int) - 1
order = np.argsort(pz)
for i in order:
    r = pr[i]; x0, x1 = int(px[i] - r) - 1, int(px[i] + r) + 2; y0, y1 = int(py[i] - r) - 1, int(py[i] + r) + 2
    x0, y0 = max(x0, 0), max(y0, 0); x1, y1 = min(x1, R), min(y1, R)
    yy, xx = np.mgrid[y0:y1, x0:x1]
    dx = (xx + .5 - px[i]) / r; dy = (yy + .5 - py[i]) / r; d2 = dx * dx + dy * dy
    m = d2 < 1; dz = np.sqrt(np.clip(1 - d2, 0, 1)); z = pz[i] + dz * r
    sub = Z[y0:y1, x0:x1]; w = m & (z > sub)
    sub[w] = z[w]; NX[y0:y1, x0:x1][w] = dx[w]; NY[y0:y1, x0:x1][w] = -dy[w]; NZ[y0:y1, x0:x1][w] = dz[w]
    CI[y0:y1, x0:x1][w] = i
mask = CI >= 0
base = np.zeros((R, R, 3)); base[mask] = col[CI[mask]]
L1 = unit([-0.45, 0.62, 0.64]); L2 = unit([0.8, -0.2, 0.35])
lam = np.clip(NX * L1[0] + NY * L1[1] + NZ * L1[2], 0, 1)
rim = np.clip(NX * L2[0] + NY * L2[1] + NZ * L2[2], 0, 1) ** 2
spec = np.clip(NX * L1[0] + NY * L1[1] + (NZ + 1) * L1[2] / 2, 0, 1) ** 24
# screen-space AO: compare depth to a blurred depth field (occluded where neighbours stand in front)
zf = np.where(mask, Z, Z[mask].min() - 4 * sc)
zi = Image.fromarray(((zf - zf.min()) / (np.ptp(zf) + 1e-9) * 65535).astype(np.uint16).astype(np.int32))
def boxb(a, r):
    r = max(int(r), 1)
    for ax in (0, 1):
        c = np.cumsum(np.pad(a, [(r + 1, r) if k == ax else (0, 0) for k in (0, 1)], mode='edge'), axis=ax)
        a = (np.take(c, range(2 * r + 1, c.shape[ax]), axis=ax) - np.take(c, range(0, c.shape[ax] - 2 * r - 1), axis=ax)) / (2 * r + 1)
    return a
def gblur(a, s):
    r = max(int(s * 0.87), 1)
    for _ in range(3): a = boxb(a, r)
    return a
zb = 0
for rr, wt in ((6, .45), (18, .35), (48, .2)):
    zb = zb + wt * gblur(zf - zf.min(), rr * SS)
occ = np.clip((zb - (zf - zf.min())) / (2.2 * sc), 0, 1)
ao = 1 - 0.78 * occ
# depth cue: far atoms a touch darker and cooler
zn = (Z - Z[mask].min()) / (np.ptp(Z[mask]) + 1e-9)
dc = 0.62 + 0.38 * np.clip(zn, 0, 1)
light = (0.20 + 0.92 * lam) * ao * dc
img = base * light[..., None] + rim[..., None] * np.array([0.35, 0.55, 0.95]) * 0.55 * ao[..., None] + spec[..., None] * 0.35 * ao[..., None]
glow = (kind[CI] == 1) & mask
img[glow] = img[glow] * 1.08 + 0.04
# Goodsell contour: darken where depth jumps (atom outlines and domain silhouettes), faint
gy, gx = np.gradient(np.where(mask, Z, Z[mask].min()))
edge = np.clip(np.hypot(gx, gy) / (0.9 * SS), 0, 1)
img *= (1 - 0.35 * edge)[..., None]
img = np.clip(img, 0, 1) ** (1 / 1.05)
a = mask.astype(float)
rgba = np.dstack([img, a])
im = Image.fromarray((rgba * 255).astype(np.uint8), 'RGBA').resize((S, S), Image.LANCZOS)
bb = im.getbbox(); im = im.crop((max(bb[0]-8,0), max(bb[1]-8,0), min(bb[2]+8,S), min(bb[3]+8,S)))
im.save(OUT); print(OUT, im.size, len(atoms), 'atoms')
