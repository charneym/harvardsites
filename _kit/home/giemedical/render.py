#!/usr/bin/env python3
"""Hero render (HOME_BRIEF option c): GIE Medical's ProTractX3 through-the-scope drug-coated balloon, inflated, on its
catheter shaft: one calm object (DS). Frosted white polymer with the paclitaxel coating as a fine matte grain, the catheter
shaft and two marker bands seen softly through the balloon wall, a blue rim light in the logo cyan. Orthographic
surface-of-revolution shading in numpy; real alpha, so the canvas composites it on the page ink with no box (DP/DJ)."""
import numpy as np, math, pathlib
from PIL import Image, ImageFilter
H = pathlib.Path(__file__).resolve().parent
W, Ht, SS = 1500, 860, 2
w, h = W * SS, Ht * SS
ang = math.radians(-13)
cx, cy = w * .5, h * .5
yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
dx, dy = xx - cx, yy - cy
u = dx * math.cos(ang) + dy * math.sin(ang)          # along the axis
v = -dx * math.sin(ang) + dy * math.cos(ang)         # across the axis
S = SS
Rb = 96 * S                                            # balloon body radius
Lb = 360 * S                                            # half length of the cylindrical body
Lc = 125 * S                                            # cone length
rs = 9 * S                                             # shaft radius

def prof(t):
    """balloon radius along the axis: cylinder body, smooth cones down to the shaft (as the logo's MEDICAL band)"""
    a = np.abs(t)
    r = np.full_like(t, 0.0)
    body = a <= Lb
    r[body] = Rb
    cone = (a > Lb) & (a <= Lb + Lc)
    k = (a[cone] - Lb) / Lc
    s = 0.5 - 0.5 * np.cos(np.pi * k)                   # eased shoulder
    r[cone] = Rb + (rs * 1.25 - Rb) * s
    return r

R = prof(u)
dR = np.gradient(R, axis=1) * 0  # placeholder (we compute analytically below)
eps = 2.0
dRdu = (prof(u + eps) - prof(u - eps)) / (2 * eps)

inside = (np.abs(v) < R) & (R > rs * 1.3)
st = np.clip(v / np.maximum(R, 1), -1, 1)
ct = np.sqrt(np.clip(1 - st * st, 0, 1))
# normal in (axis, across, toward viewer) frame
nx = -dRdu
ny = st
nz = ct
nl = np.sqrt(nx * nx + ny * ny + nz * nz) + 1e-6
nx, ny, nz = nx / nl, ny / nl, nz / nl

# key light from upper left-front, rim light from lower right in brand cyan
def L(a, b, c):
    m = math.sqrt(a * a + b * b + c * c); return a / m, b / m, c / m
k1 = L(-.35, -.62, .70)
k2 = L(.55, .70, .25)
d1 = np.clip(nx * k1[0] + ny * k1[1] + nz * k1[2], 0, 1)
d2 = np.clip(nx * k2[0] + ny * k2[1] + nz * k2[2], 0, 1)
hv = np.array(L(k1[0], k1[1], k1[2] + 1))
spec = np.clip(nx * hv[0] + ny * hv[1] + nz * hv[2], 0, 1) ** 60
fres = (1 - nz) ** 2.2

# paclitaxel coating: a fine frosted grain, stronger on the body than the cones
rng = np.random.default_rng(7)
g = rng.random((h // 2, w // 2)).astype(np.float32)
g = np.array(Image.fromarray((g * 255).astype(np.uint8)).resize((w, h), Image.BILINEAR)).astype(np.float32) / 255
g2 = np.array(Image.fromarray((rng.random((h // 8, w // 8)) * 255).astype(np.uint8)).resize((w, h), Image.BICUBIC)).astype(np.float32) / 255
coat = np.clip((np.abs(u) < Lb + Lc * .35).astype(np.float32), 0, 1)
grain = (g - .5) * .10 + (g2 - .5) * .05

base = np.array([.86, .90, .94], np.float32)
cyan = np.array([16, 168, 224], np.float32) / 255
amb = .30
col = base[None, None, :] * (amb + .62 * d1[..., None]) + cyan[None, None, :] * (.55 * d2[..., None])
col += (grain * coat * (.6 + .4 * d1))[..., None]
col += spec[..., None] * .55
col = col * (1 - .35 * fres[..., None]) + cyan[None, None, :] * (.45 * fres[..., None])

# the catheter shaft and marker bands seen through the frosted wall (soft, near the axis)
see = np.exp(-(v / (rs * 1.1)) ** 2) * (np.abs(u) < Lb + Lc)
mk = ((np.abs(np.abs(u) - (Lb - 18 * S)) < 7 * S)).astype(np.float32)
col = col * (1 - (.12 * see)[..., None])
streak = np.exp(-((st + .50) / .10) ** 2) * (np.abs(u) < Lb) * .16
col += streak[..., None]

alpha = inside.astype(np.float32) * (.96 - .10 * nz + .08 * fres)

# shaft outside the balloon (black polymer) to the left, and the tapered tip to the right
shaft_r = np.where(u < 0, rs, rs * np.clip(1 - (u - (Lb + Lc)) / (160 * S), .55, 1))
shaft = (np.abs(v) < shaft_r) & ~inside
left_end = -(Lb + Lc + 150 * S)
right_end = Lb + Lc + 95 * S
shaft &= (u > left_end) & (u < right_end)
sst = np.clip(v / np.maximum(shaft_r, 1), -1, 1)
snz = np.sqrt(np.clip(1 - sst * sst, 0, 1))
sd = np.clip(-.62 * sst + .70 * snz, 0, 1)
sh_col = np.array([.06, .08, .11], np.float32)[None, None, :] + np.array([.55, .62, .70], np.float32)[None, None, :] * ((sd ** 18) * .9)[..., None] + cyan[None, None, :] * (np.clip(sst, 0, 1) ** 3 * .35)[..., None]
# the shaft fades out over a long distance to the left (no hard end), the tip is rounded
fadeL = np.clip((u - left_end) / (140 * S), 0, 1); fadeL = fadeL * fadeL * (3 - 2 * fadeL)
tip = np.clip((right_end - u) / (10 * S), 0, 1)
sh_a = shaft.astype(np.float32) * fadeL * tip
col = np.where(shaft[..., None], sh_col, col)
alpha = np.where(shaft, sh_a, alpha)

# soft halo of the cyan rim light into the ink, kept faint and wide
sil = Image.fromarray((inside * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(60 * S))
halo = np.array(sil).astype(np.float32) / 255 * .22 * ~inside
col = np.where(inside[..., None] | shaft[..., None], col, cyan[None, None, :] * .9)
alpha = np.where(inside | shaft, alpha, halo)

rgba = np.dstack([np.clip(col, 0, 1), np.clip(alpha, 0, 1)])
im = Image.fromarray((rgba * 255).astype(np.uint8), 'RGBA').resize((W, Ht), Image.LANCZOS)
im.save(H / 'hero.webp', quality=90, method=6)
print('hero.webp', im.size)
