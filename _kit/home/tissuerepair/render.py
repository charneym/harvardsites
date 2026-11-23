#!/usr/bin/env python3
"""Offline render for the Tissue Repair hero (HOME_BRIEF update 2c: a crafted render of the firm's own subject):
Glucoprime(R), the company's micro-particulate beta-1,3/1,6-glucan purified from baker's yeast "without significantly
compromising the size", as a scanning electron microscope shows such particles: hollow ovoid yeast cell-wall shells a few
microns across, some partly collapsed into a dimple, a few with bud-scar rings, loosely aggregated. SEM physics, not toy
shading: secondary-electron yield rises toward grazing angles (bright rims), an Everhart-Thornley detector side adds a
soft directional component, crevices between particles lose signal (occlusion), the far particles fall out of the depth
of field, and the frame carries shot noise. Written on pure black, to be composited additively (lighter) on the page ink,
so no box edge can exist (DJ/DP). Usage: python3 render.py out.png [size]"""
import sys, numpy as np
from PIL import Image
from scipy.ndimage import gaussian_filter

OUT = sys.argv[1] if len(sys.argv) > 1 else 'hero.png'
N = int(sys.argv[2]) if len(sys.argv) > 2 else 1400
S = N / 1400.0
rng = np.random.default_rng(23)

def fbm(sz, oct_=5, base=6, seed=0):
    r = np.random.default_rng(seed); out = np.zeros((sz, sz), np.float32); amp = 1.0; tot = 0
    for o in range(oct_):
        g = base * 2 ** o
        a = r.standard_normal((g + 3, g + 3)).astype(np.float32)
        out += amp * np.array(Image.fromarray(a).resize((sz, sz), Image.BICUBIC)); tot += amp; amp *= .55
    return out / tot

H = np.full((N, N), -1e9, np.float32)      # front surface height
ID = np.full((N, N), -1, np.int32)
WR = fbm(N, 5, 10, 1)                      # fine cell-wall texture
WR2 = fbm(N, 3, 40, 2)
LUMP = fbm(N, 3, 24, 5)

# ---- particles: a loose aggregate, denser at the centre, larger and nearer toward the middle ----
P = []
tries = 0
while len(P) < 90 and tries < 20000:
    tries += 1
    ang = rng.uniform(0, 2 * np.pi); rr = .62 * np.sqrt(rng.uniform(0, 1)) ** 1.1
    cx, cy = .5 + rr * np.cos(ang) * .52, .5 + rr * np.sin(ang) * .46
    a = rng.uniform(.042, .058) * (1.08 - .3 * rr); b = a * rng.uniform(.72, .9)
    ok = True
    for q in P:
        if np.hypot((cx - q[0]), (cy - q[1])) < (a + q[2]) * .66: ok = False; break
    if not ok: continue
    z = (1 - rr) * .2 + rng.uniform(-.03, .03)
    P.append((cx, cy, a, b, rng.uniform(0, np.pi), z, rr))

for i, (cx, cy, a, b, th, z, rr) in enumerate(P):
    A, B = a * N, b * N; C = B * rng.uniform(1.0, 1.25)
    R = int(A * 1.05) + 2; X0, Y0 = int(cx * N), int(cy * N)
    x0, x1, y0, y1 = max(0, X0 - R), min(N, X0 + R), max(0, Y0 - R), min(N, Y0 + R)
    yy, xx = np.mgrid[y0:y1, x0:x1].astype(np.float32)
    dx, dy = xx - cx * N, yy - cy * N
    u = dx * np.cos(th) + dy * np.sin(th); v = -dx * np.sin(th) + dy * np.cos(th)
    phi = np.arctan2(v / B, u / A); ph0 = rng.uniform(0, 6.3, 3)
    wob = 1 + .045 * np.sin(2 * phi + ph0[0]) + .03 * np.sin(3 * phi + ph0[1]) + .018 * np.sin(5 * phi + ph0[2])
    q = ((u / A) ** 2 + (v / B) ** 2) / wob ** 2
    m = q < 1
    s = np.sqrt(np.clip(1 - q, 0, 1))
    h = z * N + C * s
    # a collapsed shell: a broad dimple on the upper face (most particles, varied depth)
    if rng.uniform() < .7:
        du, dv = rng.uniform(-.25, .25) * A, rng.uniform(-.25, .25) * B
        dep = rng.uniform(.25, .62); sw = rng.uniform(.32, .5)
        h -= dep * C * np.exp(-(((u - du) / (A * sw)) ** 2 + ((v - dv) / (B * sw)) ** 2)) * s ** .6
    # a crease or two where the wall folded
    for _ in range(rng.integers(0, 3)):
        ca = rng.uniform(0, np.pi); off = rng.uniform(-.45, .45) * B; cw = rng.uniform(.1, .2)
        d = (u * np.sin(ca) - v * np.cos(ca)) - off + .12 * A * np.sin(u / A * rng.uniform(2, 4))
        h -= rng.uniform(.04, .09) * C * np.exp(-(d / (A * cw)) ** 2) * s
    # bud scars: low rings on the wall
    for _ in range(int(rng.uniform() < .35)):
        sa = rng.uniform(0, 2 * np.pi); sr = rng.uniform(.35, .7)
        su, sv = np.cos(sa) * sr * A, np.sin(sa) * sr * B
        rd = np.hypot(u - su, v - sv); r0 = A * rng.uniform(.13, .19)
        h += .06 * C * np.exp(-((rd - r0) / (A * .035)) ** 2) * s
        h -= .04 * C * np.exp(-(rd / (r0 * .7)) ** 2) * s
    # a crumpled, uneven shell: low-frequency lumps scaled to this particle
    ox, oy = rng.integers(0, N // 2, 2)
    LM = LUMP[(yy.astype(int) - y0 + oy) % N, (xx.astype(int) - x0 + ox) % N]
    h += .1 * C * LM * s
    # the wall's own fine granular texture
    h += (WR[y0:y1, x0:x1] * .028 + WR2[y0:y1, x0:x1] * .012) * C * s ** .5
    sub = H[y0:y1, x0:x1]; idb = ID[y0:y1, x0:x1]
    w = m & (h > sub)
    sub[w] = h[w]; idb[w] = i

inside = ID >= 0
Hz = np.where(inside, H, np.nan)
zmin = np.nanmin(Hz); zmax = np.nanmax(Hz)
Hf = np.where(inside, H, zmin - 40 * S).astype(np.float32)

# normals from the height field
gy, gx = np.gradient(gaussian_filter(Hf, .8))
nz = 1 / np.sqrt(gx * gx + gy * gy + 1)
nx, ny = -gx * nz, -gy * nz

# secondary-electron yield: ~1/cos(tilt), clamped, plus a soft detector-side component (detector upper left)
tilt = np.clip(nz, .14, 1)
se = (1 / tilt) ** .78
L = np.array([-.55, -.6, .58]); L /= np.linalg.norm(L)
dirl = np.clip(nx * L[0] + ny * L[1] + nz * L[2], 0, 1)
# occlusion: crevices (below the local mean surface) lose signal
amb = gaussian_filter(Hf, 14 * S)
occ = np.clip(1 - np.clip(amb - Hf, 0, None) / (60 * S), .25, 1)
img = (.34 * se + .7 * dirl ** 1.3) * occ
# the cell-wall texture also modulates the yield slightly
img *= 1 + .1 * (WR / (np.abs(WR).max() + 1e-6))
img[~inside] = 0

# the edge of each shell: a thin bright rim where electrons escape the edge
edge = inside & ~(gaussian_filter(inside.astype(np.float32), 1.0) > .97)
img += .18 * edge

# depth of field: far particles blurred, the focal plane at the near middle
depth = np.where(inside, (zmax - H) / (zmax - zmin + 1e-6), 1).astype(np.float32)
depth = gaussian_filter(depth, 3 * S)
b1 = gaussian_filter(img, 2.2 * S); b2 = gaussian_filter(img, 5.5 * S)
t = np.clip(depth * 1.5 - .25, 0, 1)
img = img * (1 - np.clip(t * 2, 0, 1)) + b1 * np.clip(t * 2, 0, 1) * (1 - np.clip(t * 2 - 1, 0, 1)) + b2 * np.clip(t * 2 - 1, 0, 1)
img *= 1 - .45 * t

# the field fades long before the frame edge (no box can exist), and a faint charge glow under the aggregate
yy, xx = np.mgrid[0:N, 0:N].astype(np.float32)
rad = np.hypot((xx - N / 2) / (N / 2), (yy - N / 2) / (N / 2 * .92))
fade = np.clip(1 - (rad - .58) / .36, 0, 1); fade = fade * fade * (3 - 2 * fade)
glow = gaussian_filter(inside.astype(np.float32), 40 * S) * .06
img = img * fade + glow * fade

# photon / scan noise, then a gentle tone curve
img += rng.normal(0, .028, img.shape).astype(np.float32) * np.clip(img * 2.5, 0, 1)
img += gaussian_filter(rng.normal(0, .012, (N, N)).astype(np.float32), .6) * fade * (img > .01)
img = np.clip(img / np.percentile(img[inside], 99.4), 0, 1) ** 1.05
img *= .94

# grade: SEM grey with a cool blue-grey cast (their site's #acbabf)
col = np.array([.86, .93, 1.0], np.float32)
rgb = np.clip(img[..., None] * col[None, None, :], 0, 1)
rgb[..., 0] = np.clip(rgb[..., 0] + .03 * img ** 3, 0, 1)
Image.fromarray((rgb * 255 + .5).astype(np.uint8)).save(OUT)
print('wrote', OUT, len(P), 'particles')
