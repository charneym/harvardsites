#!/usr/bin/env python3
"""Offline render of the MipSalus hero: one molecularly imprinted polymer (MIP) particle.
A satin, pale polymer sphere (slightly irregular, as a real milled particle) whose surface carries imprinted
cavities of varying size: the binding sites. A few cavities hold a seated phenylalanine, in the logo amber.
Sphere-traced SDF with analytic-ish normals (central differences), AO, wrap diffuse, soft specular, blue fresnel
rim; real alpha. Output: hero.webp (RGBA)."""
import numpy as np, sys
from PIL import Image
N = int(sys.argv[1]) if len(sys.argv) > 1 else 1100
SS = 2
W = N * SS
rng = np.random.default_rng(7)

# cavity centres on the unit sphere (Poisson-ish), radii varying
pts, rad = [], []
PA = np.zeros((2000, 3)); RA = np.zeros(2000)
tries = 0
while len(pts) < 900 and tries < 200000:
    tries += 1
    v = rng.normal(size=3); v /= np.linalg.norm(v)
    r = float(np.clip(rng.lognormal(np.log(.04), .38), .018, .085))
    ok = (not pts) or bool(np.all(np.linalg.norm(PA[:len(pts)] - v, axis=1) > (r + RA[:len(pts)]) * 1.0))
    if ok: PA[len(pts)] = v; RA[len(pts)] = r; pts.append(v); rad.append(r)
P = np.array(pts); R = np.array(rad)
C = P * (1.0 - R * 0.5)[:, None]           # cavity sphere centres just outside the surface
seat = (rng.random(len(P)) < .09) & (R > .034)  # cavities that hold a bound Phe
B = P * (1.0 - R * 0.95)[:, None]           # bound molecule centre, sunk in the cavity
BR = R * .55

def lowfreq(p):
    x, y, z = p[..., 0], p[..., 1], p[..., 2]
    return .018 * np.sin(2.3 * x + 1.1) * np.sin(2.1 * y + .4) + .014 * np.sin(3.1 * z + 2.0 * x) + .008 * np.sin(5.3 * y - 3.7 * z)

def smin_sub(d, c, k):  # smooth subtraction of c from d
    h = np.clip(.5 - .5 * (d + c) / k, 0, 1)
    return d * (1 - h) + (-c) * h + k * h * (1 - h)

KN = None
def sdf(p, want_id=False, K=None):
    K = KN if K is None else K
    d = np.linalg.norm(p, axis=-1) - 1.0 + lowfreq(p)
    mat = np.zeros(p.shape[:-1], dtype=np.int8)
    for j in range(K.shape[1]):
        i = K[:, j]
        c = np.linalg.norm(p - C[i], axis=-1) - R[i]
        d = smin_sub(d, c, .012)
    db = np.full(p.shape[:-1], 9.0)
    for j in range(K.shape[1]):
        i = K[:, j]
        db = np.where(seat[i], np.minimum(db, np.linalg.norm(p - B[i], axis=-1) - BR[i]), db)
    if want_id:
        mat = (db < d).astype(np.int8)
    d = np.minimum(d, db)
    return (d, mat) if want_id else d

# camera
ys, xs = np.mgrid[0:W, 0:W]
u = (xs + .5) / W * 2 - 1; v = 1 - (ys + .5) / W * 2
S = 1.16
ro = np.stack([u * S, v * S, np.full_like(u, 4.0)], -1)
rd = np.array([0, 0, -1.0])
# rotate the particle a little so the light rakes across
def rot(p):
    a, b = .35, -.25
    ca, sa, cb, sb = np.cos(a), np.sin(a), np.cos(b), np.sin(b)
    x, y, z = p[..., 0], p[..., 1], p[..., 2]
    x, z = ca * x + sa * z, -sa * x + ca * z
    y, z = cb * y - sb * z, sb * y + cb * z
    return np.stack([x, y, z], -1)

# start on bounding sphere r=1.08
b = ro[..., 2]
oc2 = (ro ** 2).sum(-1)
disc = (ro[..., 2]) ** 2 - (oc2 - 1.06 ** 2)
hitb = disc > 0
t = np.where(hitb, ro[..., 2] - np.sqrt(np.maximum(disc, 0)), 0)
idx = np.nonzero(hitb.ravel())[0]
roF = ro.reshape(-1, 3)[idx]; tF = t.ravel()[idx]
p0 = rot(roF + rd * tF[:, None]); p0 /= np.linalg.norm(p0, axis=-1, keepdims=True)
KALL = np.zeros((len(p0), 8), dtype=np.int32)
for s0 in range(0, len(p0), 200000):
    dots = p0[s0:s0+200000] @ P.T
    KALL[s0:s0+200000] = np.argpartition(-dots, 8, axis=1)[:, :8]
alive = np.ones(len(idx), bool); hit = np.zeros(len(idx), bool)
for it in range(110):
    a = np.nonzero(alive)[0]
    if not len(a): break
    p = rot(roF[a] + rd * tF[a, None])
    d = sdf(p, K=KALL[a])
    tF[a] += d * .9
    h = d < 6e-4
    hit[a[h]] = True; alive[a[h]] = False
    out = tF[a] > 6
    alive[a[out]] = False
    print(it, len(a), file=sys.stderr) if it % 20 == 0 else None
hi = idx[hit]
p = rot(roF[hit] + rd * tF[hit, None])
KN = KALL[hit]
e = 7e-4
n = np.stack([sdf(p + np.array([e, 0, 0])) - sdf(p - np.array([e, 0, 0])),
              sdf(p + np.array([0, e, 0])) - sdf(p - np.array([0, e, 0])),
              sdf(p + np.array([0, 0, e])) - sdf(p - np.array([0, 0, e]))], -1)
n /= np.linalg.norm(n, axis=-1, keepdims=True)
_, mat = sdf(p, True)
# AO
ao = np.zeros(len(p))
for k in range(1, 7):
    hk = .02 * k
    ao += (hk - sdf(p + n * hk)) / (2 ** k)
ao = np.clip(1 - 12 * ao, 0, 1)
# view-space normal (undo rotation for lighting: light fixed in camera space). Rotate normal back: approximate by
# applying inverse rotation numerically.
def irot(q):
    a, b = .35, -.25
    ca, sa, cb, sb = np.cos(a), np.sin(a), np.cos(b), np.sin(b)
    x, y, z = q[..., 0], q[..., 1], q[..., 2]
    y, z = cb * y + sb * z, -sb * y + cb * z
    x, z = ca * x - sa * z, sa * x + ca * z
    return np.stack([x, y, z], -1)
nv = irot(n)
L1 = np.array([-.55, .62, .56]); L1 /= np.linalg.norm(L1)
L2 = np.array([.7, -.25, .3]); L2 /= np.linalg.norm(L2)
V = np.array([0, 0, 1.0])
ndl = (nv @ L1); wrap = np.clip((ndl + .35) / 1.35, 0, 1)
fill = np.clip(nv @ L2, 0, 1)
Hh = (L1 + V); Hh /= np.linalg.norm(Hh)
spec = np.clip(nv @ Hh, 0, 1) ** 22
fres = (1 - np.clip(nv @ V, 0, 1)) ** 3.2
base = np.array([.86, .91, .97])        # pale polymer
shadow = np.array([.10, .26, .52])      # deep brand blue in the shade
blue = np.array([.13, .48, .78])        # #217BC6
amber = np.array([.985, .72, .37])      # logo amber #FBB85F
k = wrap ** 1.1
col = shadow[None] * (1 - k[:, None]) + base[None] * k[:, None]
col = col * (.55 + .45 * ao[:, None])
col += blue[None] * (fill[:, None] * .22)
col += np.array([.55, .78, 1.0])[None] * (fres[:, None] * .42)
col += spec[:, None] * .16
dep = np.clip((1 - np.linalg.norm(p, axis=-1) - .004) / .05, 0, 1)
col = col * (1 - .55 * dep[:, None]) + np.array([.03, .1, .25])[None] * (.55 * dep[:, None])
m = mat == 1
ka = (.55 + .45 * wrap[m]) * (.75 + .25 * ao[m])
col[m] = amber[None] * ka[:, None] + spec[m][:, None] * .35
col = np.clip(col, 0, 1)
img = np.zeros((W * W, 4))
img[hi, :3] = col
img[hi, 3] = 1
img = img.reshape(W, W, 4)
# supersample down (premultiplied)
pm = img.copy(); pm[..., :3] *= pm[..., 3:4]
pm = pm.reshape(N, SS, N, SS, 4).mean((1, 3))
a = pm[..., 3:4]
rgb = np.where(a > 0, pm[..., :3] / np.maximum(a, 1e-6), 0)
out = np.concatenate([rgb ** (1 / 1.0), a], -1)
Image.fromarray((np.clip(out, 0, 1) * 255).astype(np.uint8), 'RGBA').save('hero.webp', quality=90, method=6)
Image.fromarray((np.clip(out, 0, 1) * 255).astype(np.uint8), 'RGBA').save('/tmp/claude-0/-home-user-harvardsites/ed7f5c19-a19c-5523-b6d4-24d0a1a8a3a3/scratchpad/hero.png')
print('ok', len(P), seat.sum())
