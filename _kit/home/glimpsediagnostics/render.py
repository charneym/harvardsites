#!/usr/bin/env python3
"""Glimpse Diagnostics hero (HOME_BRIEF update 2c: a crafted render of the real subject). An unbranded diagnostic
otoscope with a pediatric ear speculum: the instrument whose eardrum image Glimpse's OtoDL AI reads. Offline numpy
sphere-tracer: knurled satin-steel handle, polished chrome collar and bayonet ring, satin black head, magnifier lens with
studio-softbox reflections, frosted white disposable speculum. Wrap Lambert + GGX-ish specular + environment reflection
(two softboxes and a lavender/cyan rim from the Glimpse logo gradient), SDF ambient occlusion; real alpha ground (DJ).
Usage: python3 render.py out.png [size]"""
import sys, numpy as np
from PIL import Image
out = sys.argv[1]; S = int(sys.argv[2]) if len(sys.argv) > 2 else 1100
SS = 2; W = H = S * SS

def rotm(ax, deg):
    t = np.radians(deg); c, s = np.cos(t), np.sin(t)
    return {'x': np.array([[1, 0, 0], [0, c, -s], [0, s, c]]), 'y': np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]]),
            'z': np.array([[c, -s, 0], [s, c, 0], [0, 0, 1]])}[ax]
# object pose: handle tilted down-right, head turned three-quarters so the speculum points left toward the text
R = rotm('z', -20) @ rotm('y', -30) @ rotm('x', 8)
Ri = R.T

def cyl_y(p, y0, y1, r):  # capped cylinder along y
    d = np.stack([np.hypot(p[..., 0], p[..., 2]) - r, np.maximum(y0 - p[..., 1], p[..., 1] - y1)], -1)
    return np.minimum(np.maximum(d[..., 0], d[..., 1]), 0) + np.hypot(np.maximum(d[..., 0], 0), np.maximum(d[..., 1], 0))
def cyl_x(p, x0, x1, r, cy=0., cz=0.):
    q = np.stack([p[..., 1] - cy, p[..., 0], p[..., 2] - cz], -1)
    return cyl_y(q, x0, x1, r)
def cone_x(p, x0, x1, r0, r1, cy=0.):  # frustum along x, radius r0 at x0 -> r1 at x1 (x0 > x1)
    rad = np.hypot(p[..., 1] - cy, p[..., 2]); x = p[..., 0]
    t = np.clip((x0 - x) / (x0 - x1), 0, 1); rr = r0 + (r1 - r0) * t
    slope = (r0 - r1) / (x0 - x1); k = 1 / np.sqrt(1 + slope * slope)
    side = (rad - rr) * k
    cap = np.maximum(x - x0, x1 - x)
    return np.maximum(side, cap)
def smin(a, b, k):
    h = np.clip(.5 + .5 * (b - a) / k, 0, 1); return b * (1 - h) + a * h - k * h * (1 - h)

HY = 0.30   # head axis height
def scene(pw):
    p = pw @ Ri.T   # world -> object (rows)
    y = p[..., 1]
    # handle: knurled grip section and smooth caps
    handle = cyl_y(p, -2.05, -0.30, 0.175) - 0.012
    base = cyl_y(p, -2.16, -2.02, 0.168) - 0.02
    collar = cyl_y(p, -0.34, -0.16, 0.19) - 0.012
    neck = cyl_y(p, -0.20, 0.12, 0.138) - 0.012
    head = cyl_x(p, -0.30, 0.34, 0.235, HY) - 0.03
    head = smin(head, neck, 0.06)
    lensring = np.maximum(cyl_x(p, 0.34, 0.42, 0.205, HY) - 0.012, -cyl_x(p, 0.2, 0.6, 0.150, HY))
    lens = np.maximum(np.sqrt((p[..., 0] - 0.10) ** 2 + (p[..., 1] - HY) ** 2 + p[..., 2] ** 2) - 0.335,
                      cyl_x(p, 0.30, 0.50, 0.17, HY))
    bayo = cyl_x(p, -0.42, -0.29, 0.165, HY) - 0.012
    spec_o = cone_x(p, -0.40, -1.12, 0.150, 0.046, HY) - 0.008
    spec_i = cone_x(p, -0.38, -1.20, 0.128, 0.030, HY)
    spec = np.maximum(spec_o, -spec_i)
    D = [handle, base, collar, head, lensring, lens, bayo, spec]
    d = D[0]; m = np.zeros(d.shape, np.int8)
    for i, di in enumerate(D[1:], 1):
        u = di < d; d = np.where(u, di, d); m = np.where(u, i, m)
    return d, m, p
MAT = ['grip', 'chrome', 'chrome', 'black', 'chrome', 'glass', 'chrome', 'spec']

# camera (slight perspective)
cam = np.array([0., 0., 9.0]); fov = 0.19
ys, xs = np.mgrid[0:H, 0:W]
u = (xs + .5) / W * 2 - 1; v = 1 - (ys + .5) / H * 2
ctr = np.array([-0.15, -0.70, 0.0])
dirs = np.stack([u * fov * 1.0, v * fov * 1.0, -np.ones_like(u)], -1); dirs /= np.linalg.norm(dirs, axis=-1, keepdims=True)
org = cam + ctr
N = W * H
dflat = dirs.reshape(-1, 3)
t = np.full(N, 6.0); hit = np.zeros(N, bool); alive = np.ones(N, bool)
for it in range(160):
    idx = np.nonzero(alive)[0]
    if len(idx) == 0: break
    P = org + dflat[idx] * t[idx, None]
    d, _, _ = scene(P)
    t[idx] += d * 0.9
    h = d < 2e-4 * t[idx]; hit[idx[h]] = True
    far = t[idx] > 12.5
    alive[idx[h | far]] = False
print('hits', hit.sum())
hi = np.nonzero(hit)[0]
P = org + dflat[hi] * t[hi, None]
_, M, PO = scene(P)
e = 6e-4
nrm = np.stack([scene(P + np.array([e, 0, 0]))[0] - scene(P - np.array([e, 0, 0]))[0],
                scene(P + np.array([0, e, 0]))[0] - scene(P - np.array([0, e, 0]))[0],
                scene(P + np.array([0, 0, e]))[0] - scene(P - np.array([0, 0, e]))[0]], -1)
nrm /= np.linalg.norm(nrm, axis=-1, keepdims=True)
# knurl: diamond pattern bump on the grip, in object space
grip = (M == 0) & (PO[:, 1] > -1.92) & (PO[:, 1] < -0.42)
ang = np.arctan2(PO[:, 2], PO[:, 0]); yy = PO[:, 1]
f = 46.0
k1 = np.sin(ang * f / 2 + yy * 70); k2 = np.sin(ang * f / 2 - yy * 70)
bump = np.where(grip, (np.abs(k1) * np.abs(k2)) ** .6, 0)
# perturb normal radially-tangentially by gradient of the pattern (approx: along object y and tangent)
g_y = np.where(grip, np.cos(ang * f / 2 + yy * 70) * np.sign(k1) * np.abs(k2) + -np.cos(ang * f / 2 - yy * 70) * np.sign(k2) * np.abs(k1), 0)
g_a = np.where(grip, np.cos(ang * f / 2 + yy * 70) * np.sign(k1) * np.abs(k2) + np.cos(ang * f / 2 - yy * 70) * np.sign(k2) * np.abs(k1), 0)
ty = np.array([0, 1, 0]) @ R.T
tang = np.stack([-np.sin(ang), np.zeros_like(ang), np.cos(ang)], -1) @ R.T
nrm = nrm - 0.16 * (g_y[:, None] * ty + g_a[:, None] * tang)
nrm /= np.linalg.norm(nrm, axis=-1, keepdims=True)
# smooth bands at grip ends (machined grooves)
groove = (M == 0) & (((PO[:, 1] > -0.42) & (PO[:, 1] < -0.38)) | ((PO[:, 1] > -1.96) & (PO[:, 1] < -1.92)))

V = -dflat[hi]
ao = np.ones(len(hi))
for i, h in enumerate([0.02, 0.05, 0.10, 0.18, 0.3]):
    dd, _, _ = scene(P + nrm * h)
    ao -= (h - np.minimum(dd, h)) / h * (0.5 ** i) * 0.55
ao = np.clip(ao, 0.15, 1)

def env(r):
    """studio environment: dark lavender-grey ground, a big soft key box upper-left, a strip upper-right,
    a cool cyan kicker low right and a warm purple kicker left (Glimpse logo gradient)."""
    x, y, z = r[:, 0], r[:, 1], r[:, 2]
    c = np.zeros_like(r) + np.array([0.020, 0.016, 0.030])
    c += np.clip(y, 0, 1)[:, None] * np.array([0.05, 0.045, 0.07])
    box1 = np.exp(-(((x + 0.45) / 0.42) ** 2 + ((y - 0.62) / 0.30) ** 2) ** 2) * (z > -0.3)
    c += box1[:, None] * np.array([1.9, 1.85, 1.9])
    strip = np.exp(-(((x - 0.70) / 0.10) ** 2 + ((y - 0.25) / 0.55) ** 2) ** 2)
    c += strip[:, None] * np.array([1.0, 1.0, 1.08])
    kick = np.exp(-(((x - 0.85) / 0.35) ** 2 + ((y + 0.35) / 0.35) ** 2))
    c += kick[:, None] * np.array([0.18, 0.62, 0.78]) * 0.9
    kick2 = np.exp(-(((x + 0.9) / 0.3) ** 2 + ((y + 0.1) / 0.5) ** 2))
    c += kick2[:, None] * np.array([0.52, 0.30, 0.70]) * 0.8
    return c

L1 = np.array([-0.55, 0.65, 0.52]); L1 /= np.linalg.norm(L1)
L2 = np.array([0.75, 0.18, 0.2]); L2 /= np.linalg.norm(L2)
ndv = np.clip((nrm * V).sum(-1), 0, 1)
refl = 2 * ndv[:, None] * nrm - V
E = env(refl)
F = lambda f0: f0 + (1 - f0) * (1 - ndv) ** 5
def spec(L, rough):
    Hh = L + V; Hh /= np.linalg.norm(Hh, axis=-1, keepdims=True)
    nh = np.clip((nrm * Hh).sum(-1), 0, 1); a2 = rough ** 4
    return a2 / (np.pi * ((nh * nh) * (a2 - 1) + 1) ** 2 + 1e-6) * np.clip((nrm * L).sum(-1), 0, 1)
dif1 = np.clip(((nrm * L1).sum(-1) + 0.2) / 1.2, 0, 1)
dif2 = np.clip((nrm * L2).sum(-1), 0, 1)
col = np.zeros((len(hi), 3))
# satin black plastic head
m = M == 3
col[m] = (np.array([0.028, 0.026, 0.032]) * (0.3 + dif1[m, None] * 1.2) + F(0.045)[m, None] * env(np.where(True, refl[m], 0)) * 0.55
          + (spec(L1, 0.38)[m] * 0.12)[:, None] + (spec(L2, 0.4)[m] * 0.05)[:, None] * np.array([0.6, 0.9, 1.0]))
# fine moulding texture on the black body (very subtle noise)
rng = np.random.default_rng(3)
# chrome parts
m = np.isin(M, [1, 2, 4, 6])
col[m] = E[m] * np.array([0.92, 0.92, 0.95]) * (0.55 + 0.45 * F(0.6)[m, None]) + (spec(L1, 0.12)[m] * 0.6)[:, None]
# knurled satin steel grip (anisotropic-ish: blur reflections by mixing env with a broader lobe)
m = M == 0
Eb = env(refl[m] * 0.6 + nrm[m] * 0.4)
gcol = np.array([0.36, 0.36, 0.39])
col[m] = gcol * (0.15 + 0.85 * dif1[m, None]) * 0.55 + Eb * 0.42 * (0.7 + 0.3 * bump[m, None]) + (spec(L1, 0.3)[m] * 0.25)[:, None]
col[m] *= (0.72 + 0.28 * bump[m])[:, None]
col[groove] *= 0.45
# glass lens: dark with strong fresnel reflection and a faint violet coating tint
m = M == 5
col[m] = np.array([0.012, 0.010, 0.022]) + E[m] * (0.10 + 0.9 * F(0.04)[m, None]) * np.array([0.80, 0.78, 1.0]) + (spec(L1, 0.05)[m] * 1.6)[:, None]
# frosted white speculum: wrap diffuse, soft sheen, slight translucency glow at the thin tip
m = M == 8 - 1
sp_t = np.clip((-0.40 - PO[:, 0]) / 0.72, 0, 1)
base_w = np.array([0.80, 0.80, 0.82])
col[m] = (base_w * (0.16 + 0.84 * dif1[m, None]) * 0.92 + base_w * dif2[m, None] * np.array([0.25, 0.5, 0.6]) * 0.45
          + F(0.04)[m, None] * E[m] * 0.35 + (spec(L1, 0.42)[m] * 0.18)[:, None] + (sp_t[m] ** 2 * 0.08)[:, None] * np.array([0.9, 0.85, 1.0]))
inner = m & (ndv < 0.0)
col *= (0.35 + 0.65 * ao)[:, None]
img = np.zeros((N, 3)); img[hi] = col
alpha = np.zeros(N); alpha[hi] = 1
img = img.reshape(H, W, 3); alpha = alpha.reshape(H, W)
# tone map (filmic-ish) and gamma
img = img / (1 + img * 0.55) * 1.25
img = np.clip(img, 0, 1) ** (1 / 2.2)
rgba = np.dstack([img * 255, alpha * 255]).astype(np.float32)
# premultiplied downsample for clean alpha edges
pm = rgba.copy(); pm[..., :3] *= alpha[..., None]
pm = pm.reshape(S, SS, S, SS, 4).mean((1, 3))
a = pm[..., 3:4]; rgb = np.where(a > 0, pm[..., :3] / np.maximum(a / 255, 1e-6), 0)
o = np.dstack([rgb, a]).clip(0, 255).astype(np.uint8)
im = Image.fromarray(o, 'RGBA'); bb = im.getbbox(); print('bbox', bb)
pad = 16; im = im.crop((max(bb[0] - pad, 0), max(bb[1] - pad, 0), min(bb[2] + pad, S), min(bb[3] + pad, S)))
im.save(out); print('saved', out, im.size)
