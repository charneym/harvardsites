#!/usr/bin/env python3
"""MTI Biotech hero (HOME_BRIEF update 2c: a crafted render of the real subject). The pulmonary arterial tree, the
vessels that 2-HOBA is being developed to protect in pulmonary hypertension (NIH NHLBI STTR R42HL158393, "2-HOBA for
Treatment of Pulmonary Hypertension"): the pulmonary trunk rises from the heart, divides into the left and right pulmonary
arteries at the hila, and branches down to the arterioles until the vessels fill the shape of both lungs. Grown by space
colonisation inside two anatomical lung volumes (the left one with its cardiac notch), radii by Murray's law, rendered as
glossy vessels in the logo green #006a53 on transparent alpha (no ground of its own, DJ/DP).
Usage: python3 render.py SIZE out.png [SS]"""
import sys, math, numpy as np
from scipy.spatial import cKDTree
from PIL import Image, ImageFilter

SIZE = int(sys.argv[1]) if len(sys.argv) > 1 else 900
OUT = sys.argv[2] if len(sys.argv) > 2 else 'hero.png'
SS = int(sys.argv[3]) if len(sys.argv) > 3 else 2
W = H = SIZE * SS
rng = np.random.default_rng(1990)

# ---------------- lung volumes (x right, y up, z toward the viewer; anterior view, so the patient's right lung is on the left) ----------------
def in_lung(p, side):
    x, y, z = p[:, 0], p[:, 1], p[:, 2]
    xc = -0.5 if side == 'R' else 0.5
    ax = 0.40 if side == 'R' else 0.37
    t = np.clip((y + 0.95) / 1.85, 0, 1.2)             # 0 at the base, 1 at the apex
    prof = np.where(t <= 1, np.sqrt(np.clip(1 - t ** 2.4, 0, 1)), 0)
    prof = prof * (0.82 + 0.18 * np.clip(t * 3, 0, 1))    # a slightly narrower base edge
    dx = (x - xc)
    lat = dx * (1 if side == 'L' else -1)                # + toward the outside
    axe = np.where(lat > 0, ax * 1.08, ax * 0.78)        # the medial face is flatter
    r = (dx / axe) ** 2 + (z / 0.33) ** 2
    ok = r < prof ** 2
    base = -0.95 + 0.16 * np.clip(1 - (dx / ax) ** 2, 0, 1)   # the diaphragm dome lifts the base
    ok &= y > base
    if side == 'L':                                       # the cardiac notch
        notch = ((x - 0.16) / 0.26) ** 2 + ((y + 0.62) / 0.42) ** 2 < 1
        ok &= ~(notch & (z > -0.12))
    ok &= np.abs(x) > 0.1
    return ok

def sample(side, n):
    out = []
    while sum(len(o) for o in out) < n:
        p = rng.uniform([-1, -1, -0.4], [1, 1, 0.4], (40000, 3))
        out.append(p[in_lung(p, side)])
    return np.concatenate(out)[:n]

# ---------------- seeded central vessels: trunk, bifurcation, left and right pulmonary arteries ----------------
nodes = []; parent = []
def add(p, par): nodes.append(np.array(p, float)); parent.append(par); return len(nodes) - 1
def line(a_idx, b, steps):
    a = nodes[a_idx]; last = a_idx
    for i in range(1, steps + 1):
        last = add(a + (np.array(b) - a) * i / steps, last)
    return last
root = add([0.06, -0.6, 0.34], -1)
bif = line(root, [0.0, -0.2, 0.1], 9)
# the left pulmonary artery arches up and over to the left hilum; the right runs across to the right hilum
l1 = line(bif, [0.17, -0.02, 0.02], 4); hL = line(l1, [0.36, 0.0, -0.02], 4)
r1 = line(bif, [-0.2, -0.12, 0.03], 4); hR = line(r1, [-0.36, -0.08, 0.0], 4)
seeded = len(nodes)

# ---------------- space colonisation ----------------
attr = np.concatenate([sample('R', 7000), sample('L', 6200)])
DI, DK, D = 0.2, 0.026, 0.017
growable = {hL, hR, l1, r1}
P = np.array(nodes)
alive = np.ones(len(attr), bool)
for it in range(420):
    if not alive.any(): break
    P = np.array(nodes)
    cand = np.array(sorted(i for i in range(len(nodes)) if i in growable or i >= seeded))
    tree = cKDTree(P[cand])
    A = attr[alive]
    d, j = tree.query(A, distance_upper_bound=DI)
    m = np.isfinite(d)
    if not m.any(): break
    near = cand[j[m]]; vec = A[m] - P[near]
    vec /= np.linalg.norm(vec, axis=1, keepdims=True)
    acc = {}
    for k, v in zip(near, vec): acc.setdefault(k, []).append(v)
    newn = 0
    for k, vs in acc.items():
        dv = np.mean(vs, axis=0)
        if parent[k] >= 0:                                  # a little inertia keeps branches smooth
            pd = nodes[k] - nodes[parent[k]]; nl = np.linalg.norm(pd)
            if nl > 0: dv = dv + 0.35 * pd / nl
        nlen = np.linalg.norm(dv)
        if nlen < 1e-6: continue
        q = nodes[k] + D * dv / nlen
        add(q, k); newn += 1
    P = np.array(nodes)
    tr2 = cKDTree(P)
    idx = np.where(alive)[0]
    dd, _ = tr2.query(attr[idx])
    alive[idx[dd < DK]] = False
    if newn == 0: break
print('nodes', len(nodes), 'iterations', it)

# ---------------- radii by Murray's law (r^2.7 = sum of the children's) ----------------
N = len(nodes); P = np.array(nodes); par = np.array(parent)
kids = [[] for _ in range(N)]
for i in range(N):
    if par[i] >= 0: kids[par[i]].append(i)
rad = np.zeros(N); R0 = 0.0021; G = 3.0
order = []
st = [root]
while st:
    i = st.pop(); order.append(i); st.extend(kids[i])
for i in reversed(order):
    rad[i] = R0 if not kids[i] else sum(rad[k] ** G for k in kids[i]) ** (1 / G)
rad = np.minimum(rad, 0.046)
# soften the steps where a vessel ends in a spray of small branches, so tips taper instead of ending in knobs
for _ in range(5):
    nr = rad.copy()
    for i in order:
        if kids[i]:
            mk = max(rad[k] for k in kids[i])
            nr[i] = 0.55 * rad[i] + 0.45 * max(mk, rad[i] * 0.6)
    rad = nr
# the trunk widens a touch toward the heart
for i in range(seeded):
    rad[i] = max(rad[i], 0.046)

# ---------------- view ----------------
ang = math.radians(-14)
Ry = np.array([[math.cos(ang), 0, math.sin(ang)], [0, 1, 0], [-math.sin(ang), 0, math.cos(ang)]])
tilt = math.radians(6)
Rx = np.array([[1, 0, 0], [0, math.cos(tilt), -math.sin(tilt)], [0, math.sin(tilt), math.cos(tilt)]])
V = P @ (Rx @ Ry).T
CAM = 4.2
def proj(v):
    s = CAM / (CAM - v[..., 2])
    return v[..., 0] * s, v[..., 1] * s, s
sx, sy, sc = proj(V)
SCALE = W * 0.43
cx0, cy0 = W * 0.5, H * 0.52
X = cx0 + sx * SCALE; Y = cy0 - sy * SCALE; RP = rad * sc * SCALE; Z = V[:, 2]

zb = np.full((H, W), -1e9, np.float32)
nx = np.zeros((H, W), np.float32); ny = np.zeros((H, W), np.float32); nz = np.zeros((H, W), np.float32)
rr = np.zeros((H, W), np.float32)  # per-pixel fade
def splat(x, y, z, r, rw):
    R = max(r, 0.7 * SS)
    x0, x1 = int(max(0, x - R - 1)), int(min(W, x + R + 2)); y0, y1 = int(max(0, y - R - 1)), int(min(H, y + R + 2))
    if x0 >= x1 or y0 >= y1: return
    gx = np.arange(x0, x1) + .5 - x; gy = np.arange(y0, y1)[:, None] + .5 - y
    d2 = (gx ** 2 + gy ** 2) / (R * R)
    m = d2 < 1
    if not m.any(): return
    hz = np.sqrt(np.clip(1 - d2, 0, 1))
    zz = z + hz * R / SCALE
    sub = zb[y0:y1, x0:x1]
    w = m & (zz > sub)
    sub[w] = zz[w]
    nx[y0:y1, x0:x1][w] = (gx / R + 0 * gy)[w]
    ny[y0:y1, x0:x1][w] = (-gy / R + 0 * gx)[w]
    nz[y0:y1, x0:x1][w] = hz[w]
    rr[y0:y1, x0:x1][w] = rw
# the trunk rises out of the heart: its lower end fades into the ink rather than ending as a cut tube
FADE = np.ones(N)
for i in range(bif + 1):
    FADE[i] = min(1.0, max(0.0, (i - 1) / 7)) ** 1.5
cnt = 0
for i in range(N):
    p = par[i]
    if p < 0: continue
    L = math.hypot(X[i] - X[p], Y[i] - Y[p])
    rmin = min(RP[i], RP[p])
    n = max(1, int(L / max(0.06 * rmin, 0.5 * SS)) + 1)
    for t in np.linspace(0, 1, n + 1)[1:]:
        splat(X[p] + (X[i] - X[p]) * t, Y[p] + (Y[i] - Y[p]) * t, Z[p] + (Z[i] - Z[p]) * t,
              RP[p] + (RP[i] - RP[p]) * t, FADE[p] + (FADE[i] - FADE[p]) * t); cnt += 1
print('splats', cnt)

# ---------------- shading ----------------
cov = (zb > -1e8).astype(np.float32)
zn = np.where(cov > 0, zb, np.nan)
zmin, zmax = np.nanpercentile(zn, 2), np.nanpercentile(zn, 98)
depth = np.clip((np.nan_to_num(zn, nan=zmin) - zmin) / (zmax - zmin + 1e-6), 0, 1)
Ld = np.array([-0.45, 0.55, 0.7]); Ld /= np.linalg.norm(Ld)
Hh = Ld + np.array([0, 0, 1.0]); Hh /= np.linalg.norm(Hh)
dif = np.clip(nx * Ld[0] + ny * Ld[1] + nz * Ld[2], 0, 1)
spec = np.clip(nx * Hh[0] + ny * Hh[1] + nz * Hh[2], 0, 1) ** 28
rim = (1 - np.clip(nz, 0, 1)) ** 2.2
# screen-space occlusion: pixels below the local mean depth sit in shadow
zf = np.where(cov > 0, zb, zmin - 0.05).astype(np.float32)
zi = Image.fromarray(((zf - (zmin - .05)) / (zmax - zmin + .1) * 255).clip(0, 255).astype(np.uint8))
blur = np.asarray(zi.filter(ImageFilter.GaussianBlur(14 * SS)), np.float32) / 255 * (zmax - zmin + .1) + (zmin - .05)
ao = np.clip(1 - np.clip(blur - zf, 0, .2) * 3.2, 0.35, 1)
# logo green #006a53 from deep shade to mint light; the great vessels carry a little more body
deep = np.array([2, 34, 27]) / 255; mid = np.array([0, 106, 83]) / 255; lite = np.array([132, 214, 178]) / 255; hi = np.array([226, 250, 238]) / 255
k = (0.18 + 0.82 * dif) * ao * (0.55 + 0.45 * depth)
col = np.where(k[..., None] < .5, deep + (mid - deep) * (k[..., None] / .5), mid + (lite - mid) * ((k[..., None] - .5) / .5))
col = col + hi * (spec * 0.75 * ao)[..., None] + lite * (rim * 0.22 * (0.4 + 0.6 * depth))[..., None]
col = np.clip(col, 0, 1)
alpha = cov * (0.55 + 0.45 * depth) * rr               # the far vessels sink back into the ink
img = np.dstack([col * 255, alpha * 255]).astype(np.uint8)
im = Image.fromarray(img, 'RGBA')
im = im.resize((SIZE, SIZE), Image.LANCZOS)
# premultiplied soft glow around the brightest vessels, kept in alpha (no box)
a = np.asarray(im, np.float32) / 255
lum = (a[..., :3].mean(-1) * a[..., 3])
g = np.asarray(Image.fromarray((lum * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(SIZE * 0.012)), np.float32) / 255
ga = np.clip(g * 0.55, 0, 0.35)
outa = a[..., 3] + ga * (1 - a[..., 3])
gcol = np.array([60, 170, 130]) / 255
outc = (a[..., :3] * a[..., 3:4] + gcol * (ga * (1 - a[..., 3]))[..., None]) / np.maximum(outa, 1e-4)[..., None]
res = np.dstack([np.clip(outc, 0, 1) * 255, outa * 255]).astype(np.uint8)
Image.fromarray(res, 'RGBA').save(OUT)
print('saved', OUT)
