#!/usr/bin/env python3
"""Trestle Optics hero (PROD_BRIEF 3b, variant B light): a crafted render of their actual product, the reflective
(catadioptric) microscope objective of NIH NIGMS 2R44GM149018 ("a novel objective lens constructed entirely from curved
mirrors"; the Phase I abstract names the all-reflective Schwarzschild-Cassegrain type it improves on). Unbranded, no
lettering. Seen front-three-quarter so the working end faces the headline (left): black front cap, the annular
aperture showing the concave primary mirror, the small secondary held on three spider vanes, a satin aluminium
barrel with a knurled black grip ring, and the threaded mount at the back.
Light (RECIPE_NOTES variant B): one soft key from the upper left (the headline side), a low neutral fill, a dim rim on
the far right edge; neutral colour only, no glow. A very faint soft floor shadow is baked into the transparent pad.
Ray marched signed distance fields in numpy, orthographic, real alpha.
Usage: python3 render_b.py SIZE out.webp [SS]"""
import sys, math, numpy as np
from PIL import Image, ImageFilter
N = int(sys.argv[1]) if len(sys.argv) > 1 else 600
OUT = sys.argv[2] if len(sys.argv) > 2 else 'hero.webp'
SS = int(sys.argv[3]) if len(sys.argv) > 3 else 1
def n3(v): v = np.array(v, float); return v / np.linalg.norm(v)
def nrm(v): return v / np.maximum(np.linalg.norm(v, axis=-1, keepdims=True), 1e-9)
def sm(a, b, x): x = np.clip((x - a) / (b - a), 0, 1); return x * x * (3 - 2 * x)

F = n3((-0.66, -0.18, 0.73))            # the working end faces left, a little down, toward the viewer
U0 = n3(np.cross(F, (0, 0, 1)));        # radial frame for the vanes
V0 = np.cross(F, U0)
C0 = np.array((-0.55, -0.10, 0.0))      # centre of the front face
# body of revolution, s measured from the front face backwards: (s0, s1, R, kind)
SEG = [(0.00, 0.16, 0.46, 'cap'),        # black anodised front cap (chamfered)
       (0.16, 0.20, 0.43, 'alu'),        # step
       (0.20, 0.62, 0.47, 'alu'),        # barrel
       (0.62, 0.86, 0.485, 'knurl'),     # black knurled grip ring
       (0.86, 1.22, 0.47, 'alu'),        # barrel
       (1.22, 1.30, 0.40, 'alu'),        # shoulder
       (1.30, 1.52, 0.36, 'thread')]     # mount thread
RA = 0.335                               # clear aperture radius
DEPTH, RC = 0.30, 0.90                    # primary mirror depth at its centre, radius of curvature
RS, S2 = 0.115, 0.075                    # secondary housing radius and its front-face depth

def frame(p):
    q = p - C0
    s = -(q @ F)
    rad = q + s[..., None] * F
    r = np.linalg.norm(rad, axis=-1)
    a = np.arctan2(rad @ V0, rad @ U0)
    return s, r, a

def capcyl(r, s, s0, s1, R):
    dx, ds = r - R, np.maximum(s0 - s, s - s1)
    return np.minimum(np.maximum(dx, ds), 0) + np.hypot(np.maximum(dx, 0), np.maximum(ds, 0))

def sdf(p, want_id=False):
    s, r, a = frame(p)
    d = np.full(s.shape, 9.0); mid = np.zeros(s.shape, np.int8)
    for k, (s0, s1, R, kind) in enumerate(SEG):
        RR = R
        if kind == 'knurl': RR = R - 0.006 * np.abs(np.sin(a * 48))
        if kind == 'thread': RR = R - 0.012 * np.abs(np.sin((s - s0) * math.pi / 0.028))
        if kind == 'cap': RR = R - np.maximum(0, 0.035 - s) * 0.9          # front chamfer
        dk = capcyl(r, s, s0, s1, RR)
        if want_id: mid = np.where(dk < d, k + 1, mid)
        d = np.minimum(d, dk)
    # the front cavity down to the concave primary (centre deepest)
    surf = DEPTH - (RC - np.sqrt(np.maximum(RC * RC - r * r, 0)))
    cav = np.maximum(r - RA, s - surf)
    cav = np.maximum(cav, -(s + 0.5))
    d = np.maximum(d, -cav)
    # secondary housing and three spider vanes
    sec = capcyl(r, s, S2, S2 + 0.07, RS)
    vane = 9.0
    for k in range(3):
        ang = a - (k * 2 * math.pi / 3 + 0.5)
        ang = (ang + math.pi) % (2 * math.pi) - math.pi
        t = np.abs(np.sin(ang)) * r                               # distance from the vane plane
        vk = np.maximum(np.maximum(t - 0.0045, np.abs(s - (S2 + 0.04)) - 0.035), np.maximum(RS - r, r - RA - 0.01))
        vk = np.where(np.cos(ang) > 0, vk, 9.0)
        vane = np.minimum(vane, vk)
    inner = np.minimum(sec, vane)
    if want_id:
        mid = np.where(inner < d, 20, mid)
        mid = np.where((cav > -0.004) & (r < RA) & (s > 0.12) & (inner >= d), 30, mid)   # the primary mirror
    d = np.minimum(d, inner)
    return (d, mid) if want_id else d

def env(dv):
    """neutral studio: soft key box upper left (headline side), low fill front right, dim rim strip back right."""
    x, y, z = dv[..., 0], dv[..., 1], dv[..., 2]
    key = np.clip(dv @ n3((-0.62, 0.62, 0.48)), 0, 1)
    c = 0.02 + 1.05 * sm(0.62, 0.93, key) + 0.16 * key ** 4
    c += 0.55 * sm(0.80, 0.97, np.clip(dv @ n3((-0.96, -0.05, 0.28)), 0, 1))   # long soft strip on the headline side
    c += 0.85 * sm(0.80, 0.97, np.clip(dv @ n3((-0.15, 0.80, -0.58)), 0, 1))  # overhead softbox, slightly to the headline side
    c += 0.10 * sm(0.55, 0.95, np.clip(dv @ n3((0.75, -0.05, 0.66)), 0, 1))
    c += 0.42 * sm(0.86, 0.97, np.clip(dv @ n3((0.80, 0.25, -0.55)), 0, 1))
    c += 0.05 * sm(-0.2, -0.9, y)                                   # faint floor bounce
    return c

R = N * SS
xs = np.linspace(-1, 1, R)
X, Y = np.meshgrid(xs * 1.12 + 0.02, -xs * 1.12 + 0.08)
O = np.stack([X, Y, np.full_like(X, 4.0)], -1).reshape(-1, 3)
D = np.array((0, 0, -1.0))
t = np.zeros(len(O)); hit = np.zeros(len(O), bool); alive = np.ones(len(O), bool)
for it in range(260):
    idx = np.where(alive)[0]
    if len(idx) == 0: break
    d = sdf(O[idx] + t[idx, None] * D) * 0.6
    t[idx] += d
    h = d < 2e-4; hit[idx[h]] = True; alive[idx[h]] = False
    alive[idx[t[idx] > 8]] = False
P = O + t[:, None] * D
col = np.zeros(len(O))
hi = np.where(hit)[0]
ph = P[hi]
_, mid = sdf(ph, True)
e = 6e-4
nx = sdf(ph + (e, 0, 0)) - sdf(ph - (e, 0, 0))
ny = sdf(ph + (0, e, 0)) - sdf(ph - (0, e, 0))
nz = sdf(ph + (0, 0, e)) - sdf(ph - (0, 0, e))
n = nrm(np.stack([nx, ny, nz], -1))
refl = D - 2 * (n @ D)[:, None] * n
L = n3((-0.62, 0.62, 0.48))
lam = np.clip(n @ L, 0, 1)
fill = np.clip(n @ n3((0.7, -0.1, 0.7)), 0, 1)
fres = 0.04 + 0.96 * (1 - np.clip(-(n @ D), 0, 1)) ** 5
s, r, a = frame(ph)
# a soft occlusion term deep inside the aperture
occ = np.where(r < RA + 0.002, 0.55 + 0.45 * sm(0.32, 0.0, s), 1.0)
kind = np.array(['bg'] + [k[3] for k in SEG])
mk = np.where(mid >= 20, 'in', kind[np.clip(mid, 0, len(SEG))])
mk = np.where(mid == 30, 'mir', mk)
c = np.zeros(len(hi))
# satin aluminium: blurred environment (sample a cone of normals) plus a little diffuse
def blurenv(rv, k=0.22, n_=10):
    acc = env(rv)
    rng = np.random.default_rng(3)
    for i in range(n_):
        j = rng.normal(0, k, 3); acc = acc + env(nrm(rv + j))
    return acc / (n_ + 1)
alu = 0.07 + 0.30 * lam + 0.70 * blurenv(refl, 0.16)
blk = 0.026 + 0.05 * lam + 0.012 * fill + (0.10 + 0.5 * fres) * blurenv(refl, 0.30, 8)
q_ = ph - C0; ru = nrm(q_ + s[:, None] * F)
cres = sm(0.15, 0.95, ru @ n3((-0.55, 0.83, 0.0))) * sm(0.10, 0.30, r)       # the key softbox seen in the concave primary
mir = 0.06 + 0.5 * env(refl) * occ + 0.75 * cres + 0.12 * sm(0.12, 0.33, r)
import os
if os.environ.get("DBG"): mir = mir * 0 + 1
c = np.where(np.isin(mk, ['alu', 'thread']), alu, c)
c = np.where(np.isin(mk, ['cap', 'knurl', 'in']), blk * np.where(mk == 'in', occ, 1), c)
c = np.where(mk == 'mir', mir, c)
# fine circumferential brushing on the aluminium
c = np.where(np.isin(mk, ['alu']), c * (1 + 0.025 * np.sin(s * 900 + np.sin(a * 7))), c)
col[hi] = c
img = np.clip(col, 0, 1).reshape(R, R)
alpha = hit.reshape(R, R).astype(float)
# filmic-ish tone curve, very slightly warm-neutral to sit on their near-black ground
img = 1 - np.exp(-img * 1.6)
rgb = np.stack([img * 1.0, img * 0.992, img * 0.985], -1)
im = Image.fromarray((np.dstack([rgb, alpha]) * 255).clip(0, 255).astype(np.uint8), 'RGBA')
if SS > 1:
    # premultiplied downsample
    pm = np.array(im).astype(float); pm[..., :3] *= pm[..., 3:] / 255
    pmI = Image.fromarray(pm.astype(np.uint8), 'RGBA').resize((N, N), Image.LANCZOS)
    pm = np.array(pmI).astype(float); al = np.maximum(pm[..., 3:], 1) / 255
    pm[..., :3] = np.clip(pm[..., :3] / al, 0, 255)
    im = Image.fromarray(pm.astype(np.uint8), 'RGBA')
im = im.crop(im.getbbox())
W, H = im.size
# faint soft floor shadow on an implied surface below (no hard edge, no reflection)
PL, PR, PT, PB = round(W * .04), round(W * .06), round(H * .03), round(H * .16)
PW, PH = W + PL + PR, H + PT + PB
al = np.array(im.split()[3]) > 128
cols = [x for x in range(W) if al[:, x].any()]
bot = max(np.where(al[:, x])[0].max() for x in cols)
sh = np.zeros((PH, PW), np.float32)
x0, x1 = min(cols) + PL, max(cols) + PL
cy = bot + PT + round(H * .035)
yy, xx = np.mgrid[0:PH, 0:PW]
ell = ((xx - (x0 + x1) / 2 - W * .03) / ((x1 - x0) * .46)) ** 2 + ((yy - cy) / (H * .045)) ** 2
sh = np.clip(1 - ell, 0, 1).astype(np.float32)
s_im = Image.fromarray((sh * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(PW * .03))
sa = np.array(s_im).astype(np.float32) / 255 * .30
cv = Image.fromarray(np.dstack([np.zeros((PH, PW, 3)), np.clip(sa, 0, 1) * 255]).astype(np.uint8), 'RGBA')
cv.alpha_composite(im, (PL, PT))
cv.save(OUT, quality=90, method=6) if OUT.endswith('.webp') else cv.save(OUT)
print('obj', W, H, 'asset', PW, PH)
