#!/usr/bin/env python3
"""Hero render (HOME_BRIEF 2c, crafted render of the real subject): a ball-and-stick model of a short peptide chain,
the form of Serpin Pharma's SP16 (a peptide drawn from the active portion of the SERPIN protein AAT), in the logo's sky blue
(#2bb8ef) with the binding stretch in the logo's green (#69e269), echoing the molecule on the firm's own home page.
Analytic ray-traced spheres and bonds with soft key light, ambient occlusion, glossy highlights, a cool rim and a little
depth of field, rendered with a real alpha channel so it composites on the page ink with no edge.
Schematic: the model is an illustrative peptide, not SP16's published structure."""
import numpy as np, math, sys
from PIL import Image, ImageFilter
import os
W, H, SS = 1900, 1900, int(os.environ.get('SS','2'))
OUT = sys.argv[1] if len(sys.argv) > 1 else 'hero.png'
rng = np.random.default_rng(16)
BLUE = np.array([43, 184, 239]) / 255.0
GREEN = np.array([105, 226, 105]) / 255.0
BLUE2 = np.array([90, 196, 240]) / 255.0

# ---------- geometry: a zig-zag backbone (N, Ca, C per residue) along a gentle arch with a slow twist ----------
atoms = []  # (pos, radius, colour)
bonds = []  # (i, j)
NRES = 9
pts = []
for k in range(NRES * 3 + 1):
    s = k / (NRES * 3) - .5               # -0.5 .. 0.5
    x = s * 12.5
    y = 2.3 * math.cos(s * math.pi * 1.05) - 1.1 + (.40 if k % 2 else -.40)
    z = .55 * math.sin(s * math.pi * 1.4) + (.22 if k % 2 else -.22) * math.sin(k * .7)
    pts.append(np.array([x, y, z]))
def col_for(k):
    r = k // 3
    return GREEN if 3 <= r <= 5 else BLUE
for k, p in enumerate(pts):
    atoms.append((p, .36 if k % 3 == 1 else .31, col_for(k)))
    if k: bonds.append((k - 1, k))
# side chains on every Ca, alternating above / below, one or two atoms; carbonyl O on every C
for k, p in enumerate(pts):
    if k % 3 == 1:
        up = 1 if (k // 3) % 2 == 0 else -1
        d = np.array([.15 * rng.uniform(-1, 1), .95 * up, .45 * rng.uniform(-1, 1)]); d /= np.linalg.norm(d)
        a = p + d * .95
        atoms.append((a, .29, col_for(k))); bonds.append((k, len(atoms) - 1))
        if (k // 3) % 3 != 1:
            d2 = d + np.array([rng.uniform(-.7, .7), .15 * up, rng.uniform(-.6, .6)]); d2 /= np.linalg.norm(d2)
            atoms.append((a + d2 * .85, .25, col_for(k))); bonds.append((len(atoms) - 2, len(atoms) - 1))
    elif k % 3 == 2:
        up = -1 if (k // 3) % 2 == 0 else 1
        atoms.append((p + np.array([.1, .78 * up, -.35]), .24, BLUE2 if col_for(k) is BLUE else col_for(k))); bonds.append((k, len(atoms) - 1))
C = np.array([a[0] for a in atoms], dtype=np.float64)
C -= (C.max(0) + C.min(0)) / 2
R = np.array([a[1] for a in atoms]); COL = np.array([a[2] for a in atoms])

# gentle view rotation (yaw + pitch) so the chain reads in depth
def rot(v, ax, ang):
    c, s = math.cos(ang), math.sin(ang)
    if ax == 'y': M = np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]])
    elif ax == 'z': M = np.array([[c, -s, 0], [s, c, 0], [0, 0, 1]])
    else: M = np.array([[1, 0, 0], [0, c, -s], [0, s, c]])
    return v @ M.T
C = rot(rot(rot(C, 'z', .5), 'y', -.16), 'x', .18)

# ---------- camera ----------
w, h = W * SS, H * SS
cam = np.array([0, 0, 15.0]); f = 1.45
ys, xs = np.mgrid[0:h, 0:w].astype(np.float32)
u = (xs + .5 - w / 2) / (h / 2); v = -(ys + .5 - h / 2) / (h / 2)
D = np.stack([u * .5, v * .5, -np.full_like(u, f) * .5], -1); D /= np.linalg.norm(D, axis=-1, keepdims=True)
D = D.reshape(-1, 3); N = D.shape[0]
T = np.full(N, np.inf, np.float32); NRM = np.zeros((N, 3), np.float32); CC = np.zeros((N, 3), np.float32); OWN = np.full(N, -1)
O = cam.astype(np.float32)
for i in range(len(C)):
    oc = O - C[i]; b = D @ oc; cc = oc @ oc - R[i] ** 2; disc = b * b - cc
    m = disc > 0; t = np.where(m, -b - np.sqrt(np.maximum(disc, 0)), np.inf)
    hit = (t > 0) & (t < T); T[hit] = t[hit]; P = O + D[hit] * t[hit, None]
    NRM[hit] = (P - C[i]) / R[i]; CC[hit] = COL[i]; OWN[hit] = i
for (i, j) in bonds:
    a, bb = C[i], C[j]; ax = bb - a; L = np.linalg.norm(ax); ax = ax / L; r = .1
    oc = O - a; dd = D - np.outer(D @ ax, ax); oo = oc - (oc @ ax) * ax
    A = (dd * dd).sum(1); B = 2 * (dd @ oo); Cq = oo @ oo - r * r; disc = B * B - 4 * A * Cq
    m = disc > 0; t = np.where(m, (-B - np.sqrt(np.maximum(disc, 0))) / (2 * A + 1e-9), np.inf)
    P = O + D * t[:, None]; s = (P - a) @ ax
    hit = m & (t > 0) & (t < T) & (s > 0) & (s < L)
    T[hit] = t[hit]; Pq = P[hit]; base = a + np.outer(s[hit], ax)
    NRM[hit] = (Pq - base) / r; CC[hit] = (COL[i] + COL[j]) / 2 * .82 + .1; OWN[hit] = -2
hitm = np.isfinite(T)
P = O + D * np.where(hitm, T, 0)[:, None]
n = NRM
# ---------- lighting ----------
Lk = np.array([-.55, .7, .55]); Lk /= np.linalg.norm(Lk)
Lr = np.array([.75, .15, -.65]); Lr /= np.linalg.norm(Lr)
V = -D
ndl = (n @ Lk)
# soft shadows and ambient occlusion from the spheres
sh = np.ones(N, np.float32); ao = np.ones(N, np.float32)
for i in range(len(C)):
    pc = C[i] - P; dist = np.linalg.norm(pc, axis=1) + 1e-6
    along = pc @ Lk; perp = np.sqrt(np.maximum(dist ** 2 - along ** 2, 0))
    occ = np.clip((R[i] * 1.25 - perp) / (R[i] * .9), 0, 1) * (along > R[i] * .5) * (OWN != i)
    sh *= 1 - .75 * occ
    cosv = np.clip((n * pc).sum(1) / dist, 0, 1)
    ao -= np.where(OWN != i, (R[i] ** 2 / dist ** 2) * cosv * .85, 0)
ao = np.clip(ao, .25, 1)
diff = np.clip(ndl * .5 + .5, 0, 1) ** 1.6
Hk = (Lk + V); Hk /= np.linalg.norm(Hk, axis=1, keepdims=True)
spec = np.clip((n * Hk).sum(1), 0, 1) ** 90 * 1.1 + np.clip((n * Hk).sum(1), 0, 1) ** 12 * .16
fres = (1 - np.clip((n * V).sum(1), 0, 1)) ** 3
rim = np.clip(n @ Lr, 0, 1) ** 2
amb = .26 + .12 * np.clip(n[:, 1], -1, 1)
col = CC * (amb[:, None] + 1.25 * (diff * sh)[:, None]) * ao[:, None]
col += (spec * sh)[:, None] * np.array([1, .99, .96])
col += (rim * .55)[:, None] * np.array([.62, .86, 1.0]) * ao[:, None]
col += (fres * .32)[:, None] * (CC * .6 + .4 * np.array([.7, .9, 1.0]))
# subtle subsurface: bodies glow a touch in their own colour at grazing angles
col += (fres * .18)[:, None] * CC
col = 1 - np.exp(-col * 1.55)  # soft tone map
alpha = hitm.astype(np.float32)
img = np.zeros((N, 4), np.float32); img[:, :3] = np.where(hitm[:, None], col, 0); img[:, 3] = alpha
img = img.reshape(h, w, 4); depth = np.where(hitm, T, np.nan).reshape(h, w)
# ---------- depth of field: blend toward a blurred copy by distance from the focal plane ----------
pm = img.copy(); pm[..., :3] *= pm[..., 3:4]
def blur(a, rad):
    im = Image.fromarray(np.clip(a * 255, 0, 255).astype(np.uint8), 'RGBA')
    return np.asarray(im.filter(ImageFilter.GaussianBlur(rad))).astype(np.float32) / 255
zf = np.nanmin(depth) + (np.nanmax(depth) - np.nanmin(depth)) * .42
dz = np.abs(np.nan_to_num(depth, nan=zf) - zf) / (np.nanmax(depth) - np.nanmin(depth))
bl = blur(pm, 7 * SS)
k = np.clip(dz * 2.2 - .25, 0, 1)
# grow the blur weight across silhouettes so far atoms soften at their edges too
kk = np.asarray(Image.fromarray((k * 255).astype(np.uint8)).filter(ImageFilter.MaxFilter(9)).filter(ImageFilter.GaussianBlur(4))).astype(np.float32) / 255
kk = np.maximum(kk, k)[..., None]
out = pm * (1 - kk) + bl * kk
a = out[..., 3:4]; rgb = np.where(a > 1e-4, out[..., :3] / np.maximum(a, 1e-4), 0)
res = np.concatenate([np.clip(rgb, 0, 1), np.clip(a, 0, 1)], -1)
im = Image.fromarray((res * 255).astype(np.uint8), 'RGBA').resize((W, H), Image.LANCZOS)
bb = im.getchannel('A').point(lambda q: 255 if q > 3 else 0).getbbox(); pad = 40
im = im.crop((max(0, bb[0] - pad), max(0, bb[1] - pad), min(W, bb[2] + pad), min(H, bb[3] + pad)))
im.save(OUT)
print('wrote', OUT, im.size, 'atoms', len(C), 'bonds', len(bonds))
