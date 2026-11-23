#!/usr/bin/env python3
"""MuscleMetrix hero render: one fusiform skeletal muscle (belly, fascicles, pearly tendons) with the two small magnetic
beads that magnetomicrometry implants in it, polished metal, sitting along the fibre line. Pure numpy, orthographic,
surface of revolution about a gently curved axis; fibre texture follows the fusiform shape; real alpha.
Usage: python3 render.py [S]  -> hero.png"""
import numpy as np, pathlib, sys
from PIL import Image
H = pathlib.Path(__file__).resolve().parent
W, Hh = (int(sys.argv[1]) if len(sys.argv) > 1 else 3200), None
Hh = int(W * 0.72)
rng = np.random.default_rng(7)
# axis: a gentle S-curve from lower-left to upper-right (screen coords, y down)
NS = 4000
s = np.linspace(0, 1, NS)
ang = np.deg2rad(-33)
L = W * 0.98
ax0 = np.array([W * 0.5 - L * 0.5 * np.cos(ang), Hh * 0.5 + L * 0.5 * np.sin(-ang)])
dirv = np.array([np.cos(ang), np.sin(ang)]); nrm = np.array([-dirv[1], dirv[0]])
bow = np.sin(np.pi * s) * W * 0.022 * np.sin(np.pi * (s * 1.2 - .1))
A = ax0[None, :] + (s * L)[:, None] * dirv[None, :] + bow[:, None] * nrm[None, :]
# radius profile: fusiform belly, tendons as thin cords at both ends
Rb = W * 0.092
def prof(t):
    belly = np.clip((t - .17) / (.83 - .17), 0, 1)
    r = Rb * np.sin(np.pi * belly) ** 0.62 * (1 + .07 * np.sin(np.pi * belly * 2 - .5))
    ten = W * 0.012 * (1 + .9 * np.exp(-((t - .17) / .05) ** 2) + .9 * np.exp(-((t - .83) / .05) ** 2))
    ten = np.where((t < .03) | (t > .97), ten * np.sqrt(np.clip(np.minimum(t, 1 - t) / .03, 0, 1)), ten)
    return (r ** 4 + ten ** 4) ** .25, belly
R, BEL = prof(s)
# tangent per axis sample (for the fibre direction and the normal tilt)
T = np.gradient(A, axis=0); T /= np.linalg.norm(T, axis=1, keepdims=True)
Nn = np.stack([-T[:, 1], T[:, 0]], 1)
dR = np.gradient(R) / (L / NS)
SS = 2  # supersample
w2, h2 = W * SS, Hh * SS
yy, xx = np.mgrid[0:h2, 0:w2].astype(np.float32) / SS
# nearest axis sample per pixel (row chunks): project onto the straight chord, then refine locally
P = np.stack([xx, yy], -1)
best = np.zeros((h2, w2), int)
for y0 in range(0, h2, 64):
    Pc = P[y0:y0 + 64]
    b = np.clip((((Pc - ax0) @ dirv) / L * (NS - 1)).astype(int), 0, NS - 1)
    for step, span in ((8, 160), (1, 8), (1, 3)):
        cand = np.clip(b[..., None] + np.arange(-span, span + 1, step)[None, None, :], 0, NS - 1)
        d2 = ((Pc[..., None, :] - A[cand].astype(np.float32)) ** 2).sum(-1)
        b = np.take_along_axis(cand, d2.argmin(-1)[..., None], -1)[..., 0]
    best[y0:y0 + 64] = b
i = best
off = P - A[i]
d = (off * Nn[i]).sum(-1)               # signed distance across the axis
r = R[i]
u = np.clip(d / np.maximum(r, 1e-3), -1, 1)
inside = np.abs(d) < r
z = np.sqrt(np.clip(1 - u * u, 0, 1)) * r
# normal of a surface of revolution with slope dR
nx2 = u[..., None] * Nn[i]                 # in-plane radial part
nz = np.sqrt(np.clip(1 - u * u, 0, 1))
tilt = -dR[i] / np.sqrt(1 + dR[i] ** 2)
N = np.dstack([nx2[..., 0] + tilt * T[i, 0], nx2[..., 1] + tilt * T[i, 1], nz])
# fibre texture: angular coordinate around the axis; fibres follow it from tendon to tendon
phi = np.arcsin(u)
ts = s[i]
noise = np.sin(ts * 37 + phi * 3.1) * .25 + np.sin(ts * 91 - phi * 5) * .12
fib = 0.5 + 0.5 * np.sin(phi * 90 + noise * 3.0 + np.sin(ts * 230 + phi * 7) * .6)
fas = 0.5 + 0.5 * np.sin(phi * 11 + np.sin(ts * 13) * .9 + 1.3)          # fascicle bundles
fib = fib ** 1.4
# perturb the normal across the fibres (satin ridges)
ridge = np.cos(phi * 90 + noise * 3.0 + np.sin(ts * 230 + phi * 7) * .6) * 0.035 + np.cos(phi * 11 + np.sin(ts * 13) * .9 + 1.3) * 0.05
perp = np.dstack([Nn[i][..., 0], Nn[i][..., 1], np.zeros_like(u)])
N = N + perp * ridge[..., None]
N /= np.linalg.norm(N, axis=-1, keepdims=True) + 1e-9
# tissue colour: muscle rose-red in the belly, pearly tendon at the ends with an aponeurosis tongue running into the belly
bel = BEL[i]
tendon = np.clip(1 - np.minimum(bel, 1 - bel) / .1, 0, 1) ** .8
apo = np.clip(1 - np.abs(u + .25) / (.55 * np.clip(1 - np.minimum(bel, 1 - bel) / .34, 0, 1) + 1e-3), 0, 1) * np.clip(1 - np.minimum(bel, 1 - bel) / .34, 0, 1)
tw = np.clip(np.maximum(tendon, apo * .9), 0, 1) ** 1.2
musc = np.array([142, 46, 54]) / 255
muscD = np.array([96, 26, 36]) / 255
tend = np.array([214, 206, 204]) / 255
base = musc * (0.78 + 0.22 * fas[..., None]) * (0.86 + 0.14 * fib[..., None]) + muscD * 0
base = base * (1 - tw[..., None]) + tend * (0.92 + 0.08 * fib[..., None]) * tw[..., None]
# lighting
Lg = np.array([-.45, -.6, .66]); Lg /= np.linalg.norm(Lg)   # from upper-left (screen y down)
ndl = (N * Lg).sum(-1)
lam = np.clip(ndl, 0, 1); wrap = np.clip((ndl + .4) / 1.4, 0, 1)
Hv = Lg + np.array([0, 0, 1]); Hv /= np.linalg.norm(Hv)
nh = np.clip((N * Hv).sum(-1), 0, 1)
gloss = 0.28 + 0.5 * tw
spec = (nh ** 46 * 0.5 + nh ** 9 * 0.08) * gloss / 0.5
rim = (1 - np.clip(N[..., 2], 0, 1)) ** 2.4
sss = np.clip(1 - nz, 0, 1) ** 1.5  # warm translucency toward the silhouette
col = base * (0.1 + 0.85 * lam[..., None] ** 1.05 + 0.22 * wrap[..., None])
col += np.array([1.0, .45, .42]) * (sss * .12 * (1 - tw))[..., None]
col += spec[..., None] * np.array([1, .97, .97])
col += rim[..., None] * np.array([120, 178, 232]) / 255 * 0.32        # cool rim from the page light
# contact shadow toward the silhouette (soft occlusion)
col *= (0.55 + 0.45 * nz ** .35)[..., None]
alpha = inside.astype(np.float32) * np.clip(np.minimum(ts, 1 - ts) / .09, 0, 1) ** 1.5
# beads: two polished spheres seated on the fibre line in the upper belly, 2/3 embedded
def bead(tb, ub, rad):
    k = int(tb * (NS - 1)); c = A[k] + Nn[k] * (ub * R[k])
    zc = np.sqrt(max(0, 1 - ub * ub)) * R[k] - rad * .35
    return c, zc, rad
B = [bead(.42, -.34, W * .0098), bead(.6, -.3, W * .0098)]
for c, zc, rad in B:
    dx = xx - c[0]; dy = yy - c[1]; q = (dx * dx + dy * dy) / (rad * rad)
    m = q < 1
    zb = zc + np.sqrt(np.clip(1 - q, 0, 1)) * rad
    vis = m & ((zb > z) | ~inside)
    nb = np.dstack([dx / rad, dy / rad, np.sqrt(np.clip(1 - q, 0, 1))])
    # environment: dark navy below, pale sky above, a hot key highlight; slightly bluish steel
    refl = np.array([0, 0, 1.0]) * 0
    ry = nb[..., 1]
    env = (np.array([228, 236, 248]) / 255 * np.clip(-ry * .9 + .25, 0, 1)[..., None] +
           np.array([24, 40, 70]) / 255 * np.clip(ry + .2, 0, 1)[..., None])
    nh2 = np.clip((nb * Hv).sum(-1), 0, 1)
    bc = np.array([150, 164, 186]) / 255 * (0.25 + 0.55 * np.clip((nb * Lg).sum(-1), 0, 1))[..., None] + env * .55
    bc += (nh2 ** 120 * 1.4 + nh2 ** 20 * .25)[..., None]
    bc += ((1 - nb[..., 2]) ** 3 * .25)[..., None] * np.array([150, 200, 240]) / 255
    col = np.where(vis[..., None], bc, col)
    # a thin dark seat ring where the bead meets the tissue
    ring = (q > 0.86) & (q < 1.25) & inside & ~vis
    col = np.where(ring[..., None], col * 0.6, col)
    alpha = np.maximum(alpha, vis.astype(np.float32))
img = np.clip(col, 0, 1)
rgba = np.dstack([img * 255, alpha * 255]).astype(np.uint8)
im = Image.fromarray(rgba, 'RGBA').resize((W, Hh), Image.LANCZOS)
im = im.crop(im.getbbox())
im.save(H / 'hero.png'); print(im.size)
