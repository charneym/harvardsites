#!/usr/bin/env python3
"""Hero render for JanusQ: one mitochondrion, the organelle JanusQ's peptides protect.
A gently bent capsule with a translucent double membrane (outer membrane as a clear, satin skin with a soft Fresnel rim;
inner membrane as a faint shell) and the inner membrane folded into cristae, seen through the skin as quiet internal
texture (DS). Pure numpy: orthographic ray samples through a signed field, front-to-back compositing, real alpha.
Output: hero.webp (RGBA). Args: W H"""
import numpy as np, sys, pathlib
from PIL import Image, ImageFilter
H0 = pathlib.Path(__file__).resolve().parent
W = int(sys.argv[1]) if len(sys.argv) > 1 else 1800
HH = int(sys.argv[2]) if len(sys.argv) > 2 else 1000
NZ = 150
A, B, C = 1.0, 0.40, 0.36          # semi-axes: long, tall, deep
BEND = 0.10                        # gentle banana bend
ROT = np.radians(-14)              # in-plane tilt
TILT = np.radians(14)              # tip toward the viewer (rotation about the long axis)
SPAN = 2.32                        # world units across the width
rng = np.random.default_rng(7)

def noise3(x, y, z, k):
    # cheap smooth pseudo-noise: a sum of a few random plane waves
    s = 0
    for i in range(k):
        d = rng.normal(size=3); d /= np.linalg.norm(d); f = 2.2 * (1.7 ** i); ph = rng.uniform(0, 6.28)
        s = s + np.sin((x * d[0] + y * d[1] + z * d[2]) * f + ph) / (1.6 ** i)
    return s
NSEED = rng.integers(0, 1 << 30)

def obj(px, py, pz):
    """screen -> object coordinates"""
    c, s = np.cos(ROT), np.sin(ROT)
    x = c * px + s * py; y = -s * px + c * py; z = pz
    ct, st = np.cos(TILT), np.sin(TILT)
    y, z = ct * y - st * z, st * y + ct * z
    y = y + BEND * (x * x - 0.35)  # bend
    return x, y, z

def field(x, y, z, sh=0.0):
    """capsule-ish superellipsoid level: <1 inside"""
    return (np.abs(x) / (A - sh)) ** 2.4 + (y / (B - sh)) ** 2 + (z / (C - sh)) ** 2

ys_, xs_ = np.mgrid[0:HH, 0:W].astype(np.float32)
sc = SPAN / W
PX = (xs_ - W / 2 + .5) * sc; PY = -(ys_ - HH / 2 + .5) * sc
zs = np.linspace(0.62, -0.62, NZ).astype(np.float32); dz = zs[0] - zs[1]
out = np.zeros((HH, W, 3), np.float32); T = np.ones((HH, W), np.float32)
depth = np.full((HH, W), np.nan, np.float32)
prevf = np.full((HH, W), 9.0, np.float32)

# colours (linear-ish 0..1): brand leaf greens and a cool membrane cyan
C_CR = np.array([0.80, 0.94, 0.55]); C_CR2 = np.array([0.36, 0.62, 0.30]); C_MAT = np.array([0.03, 0.10, 0.06])
C_IM = np.array([0.56, 0.80, 0.56])
FREQ = 8.0
for k, z in enumerate(zs):
    x, y, zz = obj(PX, PY, z)
    f = field(x, y, zz)
    inside = f < 1
    hit = inside & np.isnan(depth)
    tt = np.clip((prevf - 1) / np.maximum(prevf - f, 1e-6), 0, 1)
    depth[hit] = (z + dz - tt * dz)[hit]
    prevf = f.astype(np.float32)
    if not inside.any():
        continue
    fi = field(x, y, zz, 0.055)                       # inner membrane level
    # cristae: folds roughly across the long axis, wavy, alternating sides, reaching ~70% across
    w1 = 0.13 * np.sin(4.1 * y + 2.6 * zz + 0.7 + 1.9 * x) + 0.06 * np.sin(7.3 * zz - 3.2 * y + x * 4)
    u = x * FREQ + w1 * FREQ * 0.5
    n = np.floor(u + 0.5); g = u - n
    side = np.where((n % 2) == 0, 1.0, -1.0)
    rr = np.sqrt((y / (B - .055)) ** 2 + (zz / (C - .055)) ** 2)
    ang = np.arctan2(zz, y) * side
    reach = np.clip(1 - rr, 0, 1)
    tipmask = np.clip((side * y / (B - .055) + 0.25) * 3, 0, 1)
    sheet = np.exp(-(g / 0.05) ** 2) * (fi < 1) * np.clip((rr - 0.12) / 0.3, 0, 1) * tipmask * (0.7 + 0.3 * np.sin(9 * zz + 5 * y))
    sheet *= np.clip((1 - (np.abs(x) / (A - .06)) ** 2.4) * 5, 0, 1)
    shell = np.exp(-((fi - 1) / 0.035) ** 2) * (f < 1)
    matrix = (fi < 1) * 0.35
    # light from upper left, deeper samples darker
    lit = 0.55 + 0.45 * np.clip(0.6 * y / B + 0.25 - 0.3 * zz / C, 0, 1)
    dk = 0.45 + 0.55 * (z + 0.62) / 1.24
    dens = (sheet * 1.5 + shell * 0.6 + matrix * 0.5) * inside
    a = 1 - np.exp(-dens * dz * 6.0)
    col = (2.0 * dk * sheet[..., None] * (C_CR * lit[..., None] * (0.75 + 0.25 * np.cos(g * 3.1)[..., None]) + C_CR2 * (1 - lit[..., None])) +
           0.6 * shell[..., None] * C_IM[None, None] * 0.7 + 0.5 * matrix[..., None] * C_MAT) / np.maximum(dens, 1e-4)[..., None] * inside[..., None]
    out += (T * a)[..., None] * col
    T *= (1 - a)

# outer membrane: normals from the depth map, satin skin + Fresnel rim + soft specular
hitm = ~np.isnan(depth)
D = np.where(hitm, depth, np.nan)
Dn = np.nan_to_num(D, nan=0.0)
e = 1e-3
def F(px, py, pz): return field(*obj(px, py, pz))
nx = (F(PX + e, PY, Dn) - F(PX - e, PY, Dn)); ny = (F(PX, PY + e, Dn) - F(PX, PY - e, Dn)); nz = (F(PX, PY, Dn + e) - F(PX, PY, Dn - e))
nl = np.sqrt(nx * nx + ny * ny + nz * nz) + 1e-9; nx /= nl; ny /= nl; nz /= nl
L = np.array([-0.45, 0.62, 0.64]); L /= np.linalg.norm(L)
Hh = L + np.array([0, 0, 1]); Hh /= np.linalg.norm(Hh)
ndl = np.clip(nx * L[0] + ny * L[1] + nz * L[2], 0, 1)
ndh = np.clip(nx * Hh[0] + ny * Hh[1] + nz * Hh[2], 0, 1)
fres = (1 - np.clip(nz, 0, 1)) ** 2.6
spec = ndh ** 180 * 0.55 + ndh ** 22 * 0.12
skin = np.array([0.62, 0.86, 0.74])
out_s = out * (0.72 + 0.28 * ndl[..., None])
skin_a = np.clip(0.03 + 0.8 * fres, 0, 0.9)
col = out_s * (1 - skin_a[..., None]) + skin[None, None] * (skin_a * (0.35 + 0.65 * ndl))[..., None] + spec[..., None] * np.array([0.92, 1.0, 0.92])
alpha_vol = 1 - T
alpha = np.clip(alpha_vol + skin_a * 0.9 + spec, 0, 1) * hitm
# soft antialiased silhouette
mask = Image.fromarray((hitm * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(1.2))
am = np.asarray(mask).astype(np.float32) / 255
alpha = np.minimum(np.where(hitm, alpha, 0) , 1)
alpha = np.maximum(alpha, 0) * np.clip(am * 1.0, 0, 1)
# un-premultiply for storage
rgb = np.where(alpha[..., None] > 1e-3, col / np.maximum(alpha[..., None], 1e-3), 0)
rgb = np.clip(rgb * 1.12, 0, 1) ** (1 / 1.2)
img = np.dstack([rgb * 255, alpha * 255]).astype(np.uint8)
im = Image.fromarray(img, 'RGBA')
bb = im.getbbox(); pad = 24
im = im.crop((max(bb[0] - pad, 0), max(bb[1] - pad, 0), min(bb[2] + pad, W), min(bb[3] + pad, HH)))
im.save(H0 / 'hero.webp', quality=90, method=6)
im.save('/tmp/claude-0/-home-user-harvardsites/ea3e4799-e8bd-5acb-8a45-5767f6223da0/scratchpad/hero.png')
# preview over the ink
bg = Image.new('RGBA', im.size, (16, 26, 19, 255)); bg.alpha_composite(im)
bg.convert('RGB').save('/tmp/claude-0/-home-user-harvardsites/ea3e4799-e8bd-5acb-8a45-5767f6223da0/scratchpad/prev.jpg', quality=88)
print(im.size)
