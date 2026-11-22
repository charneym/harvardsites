#!/usr/bin/env python3
"""Ting Therapeutics hero (HOME_BRIEF update 2c, PRINCIPLES DQ: a crafted render of the firm's own subject).
The sensory hair cells of the cochlea that Ting's drugs protect from cisplatin, noise and aminoglycosides: a patch of
the organ of Corti seen from above, as in a scanning electron micrograph. One row of inner hair cells (straight
bundles) in front, three staggered rows of outer hair cells behind, each crowned by its V-shaped stereocilia bundle in
a three-step staircase, the tallest row on the outer side; the polygonal mosaic of supporting cells with microvilli
between them. SEM-style edge shading, gradient-mapped to Ting's logo red #bf2227 on its navy ink. Analytic ray-capsule
intersection per stereocilium (z-buffered), a bump-mapped cell surface, real alpha (no ground of its own, DJ/DP).
Usage: python3 render.py W H out.png [SS]"""
import sys, numpy as np
from PIL import Image, ImageFilter

FW = int(sys.argv[1]) if len(sys.argv) > 1 else 800
FH = int(sys.argv[2]) if len(sys.argv) > 2 else 640
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = float(sys.argv[4]) if len(sys.argv) > 4 else 1.0
W, H = int(FW * SS), int(FH * SS)
rng = np.random.default_rng(7)

def nrm(v): return v / np.linalg.norm(v, axis=-1, keepdims=True)

# ---------------- layout (world: x along the cochlear spiral, z radial (outer = +z), y up) ----------------
caps = []          # (base xyz, tip xyz, radius, accent)
ACCROW = [False]
cells = []         # (x, z, kind) kind 0 = supporting, 1 = OHC, 2 = IHC
def stereo(base, h, r, lean):
    b = np.array([base[0], 0.0, base[1]]); t = b + np.array([lean[0] * h, h, lean[1] * h])
    caps.append((b, t, r, ACCROW[0]))

NX = 3
# inner hair cells: one row in front (toward the camera), nearly straight bundles, tallest row on the outer side
for i in range(NX):
    cx = (i - (NX - 1) / 2) * 1.0 + 0.1; cz = -1.05
    cells.append((cx, cz - 0.02, 2))
    lean = (rng.normal(0, .015), 0.07)
    for k, (h, r) in enumerate([(0.5, 0.024), (0.33, 0.021), (0.2, 0.019)]):
        n = 15 - k
        for j in range(n):
            u = (j - (n - 1) / 2) / ((n - 1) / 2)
            x = cx + u * 0.4; z = cz + 0.06 - k * 0.07 - 0.07 * u * u
            stereo((x + rng.normal(0, .004), z + rng.normal(0, .004)), h * (1 - .08 * u * u) * rng.uniform(.97, 1.03), r, lean)
# outer hair cells: three staggered rows, V-shaped bundles pointing outward (+z), three-row staircase
for row in range(3):
    for i in range(NX):
        cx = (i - (NX - 1) / 2) * 1.0 + (row - 1) * 0.33; cz = 0.05 + row * 0.5
        cells.append((cx, cz - 0.06, 1)); ACCROW[0] = (row == 0)
        ang = np.radians(rng.uniform(56, 62)); lean = (rng.normal(0, .02), 0.06)
        for k, (h, r) in enumerate([(0.3, 0.0145), (0.2, 0.0135), (0.12, 0.0125)]):
            vx, vz = cx, cz + 0.12 - k * 0.042
            n = 11 - k
            for side in (-1, 1):
                for j in range(n):
                    s = j * 0.047
                    if side < 0 and j == 0: s = 0
                    x = vx + side * np.sin(ang) * s; z = vz - np.cos(ang) * s
                    if side > 0 and j == 0: continue
                    stereo((x + rng.normal(0, .003), z + rng.normal(0, .003)), h * (1 - .18 * (s / 0.5)) * rng.uniform(.96, 1.04), r, lean)
ACCROW[0] = False
# supporting cells: a jittered lattice between the hair cells (Deiters', pillar and Hensen's heads)
for gz in np.arange(-1.9, 2.6, 0.26):
    for gx in np.arange(-3.2, 3.2, 0.26):
        x = gx + (0.13 if int(round(gz / .26)) % 2 else 0) + rng.normal(0, .04); z = gz + rng.normal(0, .04)
        if min((x - c[0]) ** 2 + (z - c[1]) ** 2 for c in cells if c[2]) < 0.34 ** 2: continue
        cells.append((x, z, 0))
CX = np.array([c[0] for c in cells]); CZ = np.array([c[1] for c in cells]); CK = np.array([c[2] for c in cells])

# ---------------- camera ----------------
target = np.array([0.0, 0.12, 0.05])
az, el, dist, fov = np.radians(-14), np.radians(52), 6.1, np.radians(31)
cam = target + dist * np.array([np.sin(az) * np.cos(el), np.sin(el), -np.cos(az) * np.cos(el)])
fw = nrm(target - cam); rt = nrm(np.cross(fw, [0, 1.0, 0])); up = np.cross(rt, fw)
asp = W / H; th = np.tan(fov / 2)
ys, xs = np.mgrid[0:H, 0:W]
px = ((xs + .5) / W * 2 - 1) * th * asp; py = (1 - (ys + .5) / H * 2) * th
RD = nrm(px[..., None] * rt + py[..., None] * up + fw)          # H x W x 3

def project(p):
    d = p - cam; z = d @ fw
    return ((d @ rt) / (z * th * asp) + 1) / 2 * W, (1 - (d @ up) / (z * th)) / 2 * H

# ---------------- cell surface (plane y=0, bump mapped) ----------------
tP = -cam[1] / np.minimum(RD[..., 1], -1e-6)
P = cam + RD * tP[..., None]
NG_ = rng.random((512, 512))
def vn(x, z):
    xi = np.floor(x).astype(int); zi = np.floor(z).astype(int); fx = x - xi; fz = z - zi
    fx = fx * fx * (3 - 2 * fx); fz = fz * fz * (3 - 2 * fz)
    g = lambda a, b: NG_[(zi + b) & 511, (xi + a) & 511]
    return (g(0, 0) * (1 - fx) + g(1, 0) * fx) * (1 - fz) + (g(0, 1) * (1 - fx) + g(1, 1) * fx) * fz - .5
def surf_h(x, z):
    """height of the apical surface: domed cell heads, raised junction ridges, microvilli on supporting cells"""
    sh = x.shape; x = x.ravel(); z = z.ravel()
    d1 = np.full(x.shape, 9.0); d2 = np.full(x.shape, 9.0); k1 = np.zeros(x.shape, int)
    for i in range(len(CX)):
        d = (x - CX[i]) ** 2 + (z - CZ[i]) ** 2
        m = d < d1; d2 = np.where(m, d1, np.minimum(d2, d)); k1 = np.where(m, i, k1); d1 = np.where(m, d, d1)
    d1 = np.sqrt(d1); d2 = np.sqrt(d2); kind = CK[k1]
    edge = d2 - d1
    hc = kind > 0
    rad = np.where(hc, 0.36, 0.17)
    dome = np.where(hc, 0.05, 0.03) * np.clip(1 - (d1 / rad) ** 2, 0, 1)
    ridge = 0.008 * np.exp(-(edge / 0.012) ** 2)
    mv = 0.006 * vn(x * 75, z * 75) * (~hc) + 0.0015 * vn(x * 23 + 9, z * 23)
    return (dome + ridge + mv).reshape(sh), kind.reshape(sh), edge.reshape(sh)
valid = (RD[..., 1] < 0) & (tP < 60)
gx, gz = P[..., 0], P[..., 2]
e = 0.004
h0, kind, edge = surf_h(gx, gz)
hx, _, _ = surf_h(gx + e, gz); hz, _, _ = surf_h(gx, gz + e)
NG = nrm(np.stack([-(hx - h0) / e, np.ones_like(h0), -(hz - h0) / e], -1))

# ambient occlusion of the surface around stereocilia bases: a splatted, blurred base map in xz
AO_N, AO_X0, AO_X1, AO_Z0, AO_Z1 = 1400, -3.2, 3.2, -2.2, 2.6
ao = Image.new('L', (AO_N, AO_N), 0); pix = ao.load()
for b, t, r, _a in caps:
    ix = int((b[0] - AO_X0) / (AO_X1 - AO_X0) * AO_N); iz = int((b[2] - AO_Z0) / (AO_Z1 - AO_Z0) * AO_N)
    for dx in range(-3, 4):
        for dz in range(-3, 4):
            if 0 <= ix + dx < AO_N and 0 <= iz + dz < AO_N: pix[ix + dx, iz + dz] = 255
ao = np.asarray(ao.filter(ImageFilter.GaussianBlur(9)), float) / 255
ao = np.clip(ao / max(ao.max(), 1e-6) * 1.6, 0, 1)
def aos(x, z):
    ix = np.clip(((x - AO_X0) / (AO_X1 - AO_X0) * AO_N).astype(int), 0, AO_N - 1)
    iz = np.clip(((z - AO_Z0) / (AO_Z1 - AO_Z0) * AO_N).astype(int), 0, AO_N - 1)
    return ao[iz, ix]
AOg = 1 - 0.6 * aos(gx, gz)

# ---------------- stereocilia: analytic ray-capsule intersection inside each projected bbox ----------------
ZB = np.where(valid, tP, np.inf); NB = NG.copy(); HIT = np.zeros((H, W), bool); ACC = np.zeros((H, W), bool); HF = np.zeros((H, W)); CB = np.zeros((H, W, 2))
for b, t, r, acc in caps:
    pts = [b + np.array(o) for o in [(-r, 0, -r), (r, 0, r)]] + [t + np.array(o) for o in [(-r, r, -r), (r, r, r), (-r, r, r), (r, r, -r)]] + [b + np.array([r, 0, -r]), b + np.array([-r, 0, r])]
    sx, sy = zip(*[project(p) for p in pts])
    x0, x1 = max(int(min(sx)) - 2, 0), min(int(max(sx)) + 3, W); y0, y1 = max(int(min(sy)) - 2, 0), min(int(max(sy)) + 3, H)
    if x0 >= x1 or y0 >= y1: continue
    rd = RD[y0:y1, x0:x1]; ba = t - b; oa = cam - b
    baba = ba @ ba; bard = rd @ ba; baoa = oa @ ba; rdoa = rd @ oa; oaoa = oa @ oa
    a = baba - bard * bard; bb = baba * rdoa - baoa * bard; c = baba * oaoa - baoa * baoa - r * r * baba
    hh = bb * bb - a * c
    tt = np.full(hh.shape, np.inf)
    ok = hh >= 0
    t1 = np.where(ok, (-bb - np.sqrt(np.maximum(hh, 0))) / np.where(a == 0, 1e-9, a), np.inf)
    y = baoa + t1 * bard
    body = ok & (y > 0) & (y < baba)
    tt = np.where(body, t1, tt)
    # rounded tip (the base sits in the surface)
    oc = cam - t; b2 = rd @ oc; c2 = oc @ oc - r * r; h2 = b2 * b2 - c2
    tcap = np.where(h2 > 0, -b2 - np.sqrt(np.maximum(h2, 0)), np.inf)
    tt = np.where(~body & ok & (y >= baba) & (h2 > 0), tcap, tt)
    zb = ZB[y0:y1, x0:x1]; win = tt < zb
    if not win.any(): continue
    p = cam + rd * np.where(np.isfinite(tt), tt, 0)[..., None]
    s = np.clip(((p - b) @ ba) / baba, 0, 1)
    cl = b + s[..., None] * ba
    n = nrm(p - cl)
    zb[win] = tt[win]; NB[y0:y1, x0:x1][win] = n[win]; HIT[y0:y1, x0:x1][win] = True; ACC[y0:y1, x0:x1][win] = acc
    HF[y0:y1, x0:x1][win] = s[win] * (ba[1] / 0.44)
    CB[y0:y1, x0:x1][win] = np.array([b[0], b[2]])

# ---------------- SEM shading ----------------
V = -RD
ndv = np.clip(np.sum(NB * V, -1), 0, 1)
L = nrm(np.array([-0.45, 0.8, -0.35]))
ndl = np.clip(NB @ L, 0, 1)
rim = (1 - ndv) ** 2.2
I = 0.1 + 0.95 * rim + 0.3 * ndl
# stereocilia: darker toward their base (occluded by neighbours), bright edges and tips
sAO = 0.42 + 0.58 * np.clip(HF / 0.55, 0, 1) ** 0.6
tip = np.clip((HF - 0.75) / 0.25, 0, 1) * np.clip(ndl * 1.4, 0, 1)
I = np.where(HIT, I * sAO * 1.35 + 0.25 * tip * (HF > 0.3), I * AOg * 0.82)
# surface texture: junction ridges catch the beam a little more; hair-cell plates are smoother and slightly darker
I = np.where(HIT, I, I * np.where(kind > 0, 0.86, 1.0) + 0.05 * np.exp(-(edge / 0.01) ** 2))
I = np.clip(I, 0, 1.2)

# fade: an elliptical, long-eased falloff in world xz around the patch (subject whole, edges melt into the ink)
fx = np.where(HIT, CB[..., 0], gx); fz = np.where(HIT, CB[..., 1], gz)
rr = np.sqrt(((fx - 0.05) / 2.15) ** 2 + ((fz - 0.0) / 1.75) ** 2)
fade = np.clip(1 - (rr - 0.72) / 0.36, 0, 1); fade = fade * fade * (3 - 2 * fade)
alpha = np.where(valid | HIT, fade, 0.0)
# slight depth haze toward the back
depth = np.clip((ZB - 6.3) / 1.6, 0, 1); I = I * (1 - 0.22 * depth)

# gradient maps: the cell surface in cool navy-plum, the stereocilia in Ting red to a warm pale (tonal depth, not one wash)
def gmap(v, stops):
    out = np.zeros(v.shape + (3,))
    for (a0, c0), (a1, c1) in zip(stops[:-1], stops[1:]):
        m = (v >= a0) & (v <= a1); f = ((v - a0) / (a1 - a0))[..., None]
        out = np.where(m[..., None], np.array(c0) * (1 - f) + np.array(c1) * f, out)
    return out
v = np.clip(I, 0, 1.05)
SURF = [(0.0, (11, 15, 26)), (0.3, (44, 49, 62)), (0.6, (112, 117, 130)), (0.85, (190, 194, 202)), (1.05, (242, 243, 246))]
CIL = [(0.0, (14, 17, 26)), (0.3, (62, 67, 80)), (0.55, (138, 143, 156)), (0.8, (212, 215, 222)), (1.05, (252, 252, 253))]
ACL = [(0.0, (16, 14, 24)), (0.3, (84, 34, 42)), (0.55, (156, 46, 52)), (0.8, (222, 150, 146)), (1.05, (252, 238, 236))]
rgb = np.where(HIT[..., None], np.where(ACC[..., None], gmap(v, ACL), gmap(v, CIL)), gmap(v, SURF))
rgba = np.concatenate([rgb / 255, alpha[..., None]], -1)
im = Image.fromarray((np.clip(rgba, 0, 1) * 255).astype(np.uint8), 'RGBA')
dm = Image.fromarray((np.clip((ZB - 6.6) / 1.2, 0, 1) * 255).astype(np.uint8), 'L')
im = Image.composite(im.filter(ImageFilter.GaussianBlur(2.2 * SS)), im, dm)
if SS != 1: im = im.resize((FW, FH), Image.LANCZOS)
bb = im.getchannel('A').point(lambda a: 255 if a > 4 else 0).getbbox()
if bb: m = int(.02 * FW); im = im.crop((max(bb[0] - m, 0), max(bb[1] - m, 0), min(bb[2] + m, FW), min(bb[3] + m, FH)))
A = np.asarray(im.getchannel('A')).astype(float)
hh_, ww_ = A.shape; sm_ = lambda t: np.clip(t, 0, 1) ** 2 * (3 - 2 * np.clip(t, 0, 1))
A = A * (sm_(np.arange(ww_) / (.1 * ww_)) * sm_((ww_ - 1 - np.arange(ww_)) / (.1 * ww_)))[None, :] * (sm_(np.arange(hh_) / (.1 * hh_)) * sm_((hh_ - 1 - np.arange(hh_)) / (.12 * hh_)))[:, None]
A = np.where(A < 8, 0, A); im.putalpha(Image.fromarray(A.astype(np.uint8)))   # no faint alpha floor that could outline the image rect
im.save(OUT)
print('saved', OUT, im.size, 'caps', len(caps))
