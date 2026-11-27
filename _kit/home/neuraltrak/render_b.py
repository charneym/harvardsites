#!/usr/bin/env python3
"""NeuralTrak hero (PROD_BRIEF 3b, variant B light), v2 after the coordinator's review ("reads as a grey clay toy"):
a photoreal render of a generic mobile C-arm, the standard 2D X-ray system NeuralTrak's software turns into a 3D
scanner (NSF SBIR 2433137 / 2604163: "transforming any 2D mobile C-arm into a 3D scanner using software alone";
validated on image-intensifier and flat-panel C-arms). Unbranded, no lettering.
Parts: wheeled base with bumper strip, rubber castors and a push handle; a column with a satin-metal lift sleeve and a
seam; the horizontal arm; the orbital carriage clamped on the C; the C with a deep section, rounded edges and the
orbital rail groove on its outer face; at the top end the flat-panel detector (bevelled housing, seam line, dark
grid-textured entrance face, side grips); at the bottom end the X-ray tube head (cylindrical housing with end caps and
a collimator box with a dark face); a cable loop from the carriage down the column.
Materials: off-white painted metal with a clear coat (diffuse plus a soft specular and fresnel reflection), dark
grey plastic, black rubber, satin aluminium. Light: one soft key from the upper left (headline side), a low neutral
fill, a dim rim on the far right; no glow. A faint soft floor shadow is baked into the transparent pad. Ray-marched
SDFs in numpy, orthographic, real alpha. Usage: python3 render_b.py SIZE out.webp [SS]"""
import sys, math, numpy as np
from PIL import Image, ImageFilter
N = int(sys.argv[1]) if len(sys.argv) > 1 else 600
OUT = sys.argv[2] if len(sys.argv) > 2 else 'hero.webp'
SS = int(sys.argv[3]) if len(sys.argv) > 3 else 1
def n3(v): v = np.array(v, float); return v / np.linalg.norm(v)
def nrm(v): return v / np.maximum(np.linalg.norm(v, axis=-1, keepdims=True), 1e-9)
def sm(a, b, x): x = np.clip((x - a) / (b - a), 0, 1); return x * x * (3 - 2 * x)
TH, PH_ = math.radians(-36), math.radians(13)
cy_, sy_ = math.cos(TH), math.sin(TH); cx_, sx_ = math.cos(PH_), math.sin(PH_)
def toobj(p):
    x, y, z = p[..., 0], p[..., 1], p[..., 2]
    y, z = y * cx_ - z * sx_, y * sx_ + z * cx_
    x, z = x * cy_ + z * sy_, -x * sy_ + z * cy_
    return x, y, z
def rbox(x, y, z, c, h, r=0.02):
    qx, qy, qz = np.abs(x - c[0]) - h[0] + r, np.abs(y - c[1]) - h[1] + r, np.abs(z - c[2]) - h[2] + r
    o = np.sqrt(np.maximum(qx, 0) ** 2 + np.maximum(qy, 0) ** 2 + np.maximum(qz, 0) ** 2)
    return o + np.minimum(np.maximum(qx, np.maximum(qy, qz)), 0) - r
def cyl(a, b, h, c, r, hh, rr=0.0):   # cylinder along the third axis given as (a,b)=radial coords, h=axial coord
    d1 = np.hypot(a - c[0], b - c[1]) - r + rr; d2 = np.abs(h - c[2]) - hh + rr
    return np.minimum(np.maximum(d1, d2), 0) + np.hypot(np.maximum(d1, 0), np.maximum(d2, 0)) - rr
def capsule(x, y, z, a, b, r):
    pa = np.stack([x - a[0], y - a[1], z - a[2]], -1); ba = np.array(b) - np.array(a)
    h = np.clip((pa @ ba) / (ba @ ba), 0, 1)
    return np.linalg.norm(pa - h[..., None] * ba, axis=-1) - r
CX, CY, R = -0.20, 0.14, 0.54
A0, A1 = math.radians(110), math.radians(250)
XB = CX + R * math.cos(A0)
YT, YB = CY + R * math.sin(A0), CY + R * math.sin(A1)
# cable path: from the carriage, a loop down the back of the column to the base
CAB = [(CX + R + 0.13, CY - 0.06, -0.10), (0.48, -0.06, -0.15), (0.70, -0.18, -0.14), (0.72, -0.48, -0.13), (0.70, -0.70, -0.12)]
def parts(p):
    x, y, z = toobj(p)
    qx, qy = x - CX, y - CY
    a = np.arctan2(qy, qx) % (2 * math.pi)
    rr = np.hypot(qx, qy); dr = rr - R
    HR, HZ, RD = 0.05, 0.10, 0.022
    ex, ez = np.abs(dr) - HR + RD, np.abs(z) - HZ + RD
    sec = np.hypot(np.maximum(ex, 0), np.maximum(ez, 0)) + np.minimum(np.maximum(ex, ez), 0) - RD
    groove = np.hypot(np.maximum(np.abs(dr - HR) - 0.012, 0), np.maximum(np.abs(z) - 0.035, 0)) - 0.002
    sec = np.maximum(sec, -groove)                                    # orbital rail groove on the outer face
    ingap = (a > A0) & (a < A1)
    e0 = (CX + R * math.cos(A0), CY + R * math.sin(A0)); e1 = (CX + R * math.cos(A1), CY + R * math.sin(A1))
    dend = np.minimum(np.hypot(x - e0[0], y - e0[1]), np.hypot(x - e1[0], y - e1[1]))
    arc = np.where(ingap, np.maximum(sec, dend - 0.07), sec)
    # flat-panel detector at the top end
    dy0 = YT - 0.055
    det = rbox(x, y, z, (XB, dy0, 0), (0.215, 0.06, 0.205), 0.035)
    detseam = np.abs(y - (dy0 + 0.005)) - 0.003                       # seam line around the housing
    det = np.maximum(det, -np.maximum(detseam, -(det + 0.006)))
    detf = rbox(x, y, z, (XB, dy0 - 0.062, 0), (0.18, 0.006, 0.17), 0.004)
    grip = np.minimum(rbox(x, y, z, (XB - 0.23, dy0, 0), (0.014, 0.025, 0.11), 0.012), rbox(x, y, z, (XB + 0.23, dy0, 0), (0.014, 0.025, 0.11), 0.012))
    # X-ray tube head at the bottom end: a cylindrical housing along z with end caps, collimator box on top
    ty0 = YB + 0.07
    tube = cyl(x, y, z, (XB, ty0, 0), 0.085, 0.15, 0.02)
    caps = cyl(x, y, z, (XB, ty0, 0), 0.07, 0.165, 0.01)
    coll = rbox(x, y, z, (XB, ty0 + 0.115, 0), (0.075, 0.04, 0.075), 0.012)
    collf = rbox(x, y, z, (XB, ty0 + 0.158, 0), (0.055, 0.005, 0.055), 0.003)
    # orbital carriage clamped around the C at the back
    car = rbox(x, y, z, (CX + R + 0.02, CY, 0), (0.09, 0.16, 0.14), 0.035)
    arm = rbox(x, y, z, ((CX + R + 0.10 + 0.70) / 2, CY, 0), ((0.70 - CX - R - 0.10) / 2 + 0.02, 0.06, 0.07), 0.025)
    col = rbox(x, y, z, (0.80, -0.32, 0), (0.11, 0.53, 0.11), 0.04)
    slv = rbox(x, y, z, (0.80, CY - 0.005, 0), (0.122, 0.09, 0.122), 0.03)  # lift sleeve
    colseam = np.abs(y + 0.42) - 0.003
    col = np.maximum(col, -np.maximum(colseam, -(col + 0.006)))
    base = rbox(x, y, z, (0.70, -0.84, 0), (0.42, 0.10, 0.30), 0.07)
    bump = rbox(x, y, z, (0.70, -0.905, 0), (0.43, 0.022, 0.31), 0.02)
    wh = 9.0
    for wx in (0.36, 1.04):
        for wz in (-0.24, 0.24):
            wh = np.minimum(wh, cyl(x, y, z, (wx, -0.975, wz), 0.055, 0.03, 0.012))
            wh = np.minimum(wh, rbox(x, y, z, (wx, -0.93, wz), (0.03, 0.03, 0.035), 0.01))
    hnd = np.minimum.reduce([capsule(x, y, z, (1.03, -0.24, -0.16), (1.03, -0.24, 0.16), 0.017),
                             capsule(x, y, z, (0.91, -0.24, -0.16), (1.03, -0.24, -0.16), 0.015),
                             capsule(x, y, z, (0.91, -0.24, 0.16), (1.03, -0.24, 0.16), 0.015)])
    cab = 9.0
    for i in range(len(CAB) - 1):
        cab = np.minimum(cab, capsule(x, y, z, CAB[i], CAB[i + 1], 0.016))
    paint = np.minimum.reduce([arc, det, tube, coll, car, arm, col, base])
    dark = np.minimum.reduce([detf, collf, grip, caps, hnd, cab, bump])
    rub = wh
    metal = slv
    return paint, dark, rub, metal
def sdf(p, want_id=False):
    P = parts(p); d = np.minimum.reduce(P)
    if want_id: return d, np.argmin(np.stack(P), 0)
    return d
def env(dv):
    key = np.clip(dv @ n3((-0.62, 0.62, 0.48)), 0, 1)
    c = 0.02 + 1.1 * sm(0.70, 0.95, key) + 0.08 * key ** 3
    c += 0.30 * sm(0.80, 0.97, np.clip(dv @ n3((0.80, 0.25, -0.55)), 0, 1))
    c += 0.45 * sm(0.85, 0.98, np.clip(dv @ n3((-0.1, 0.95, 0.1)), 0, 1))     # overhead strip box
    c += 0.05 * sm(-0.2, 0.9, dv[..., 1])
    return c
Rr = N * SS
xs = np.linspace(-1, 1, Rr)
X, Y = np.meshgrid(xs * 1.12 + 0.18, -xs * 1.12 - 0.06)
O = np.stack([X, Y, np.full_like(X, 4.0)], -1).reshape(-1, 3)
D = np.array((0, 0, -1.0))
t = np.zeros(len(O)); hit = np.zeros(len(O), bool); alive = np.ones(len(O), bool)
for it in range(260):
    idx = np.where(alive)[0]
    if len(idx) == 0: break
    d = sdf(O[idx] + t[idx, None] * D) * 0.75
    t[idx] += d
    h = d < 1.5e-4; hit[idx[h]] = True; alive[idx[h]] = False
    alive[idx[t[idx] > 8]] = False
P = O + t[:, None] * D
hi = np.where(hit)[0]; ph = P[hi]
_, mid = sdf(ph, True)
e = 5e-4
n = nrm(np.stack([sdf(ph + (e, 0, 0)) - sdf(ph - (e, 0, 0)), sdf(ph + (0, e, 0)) - sdf(ph - (0, e, 0)), sdf(ph + (0, 0, e)) - sdf(ph - (0, 0, e))], -1))
# a fine grid texture on the detector entrance face (dark material, facing down)
gx, gy, gz = toobj(ph)
onface = (mid == 1) & (np.abs(gy - (YT - 0.055 - 0.068)) < 0.008) & (np.abs(gx - XB) < 0.175)
refl = D - 2 * (n @ D)[:, None] * n
L = n3((-0.62, 0.62, 0.48))
lam = np.clip(n @ L, 0, 1)
fill = np.clip(n @ n3((0.7, -0.1, 0.7)), 0, 1)
rim = sm(0.55, 0.9, np.clip(n @ n3((0.85, 0.2, -0.5)), 0, 1))
ndv = np.clip(-(n @ D), 0, 1)
fres = 0.04 + 0.96 * (1 - ndv) ** 5
hv = nrm(L - D)
spec = np.clip(n @ hv, 0, 1)
ao = np.ones(len(hi))
for k, hstep in enumerate((0.015, 0.04, 0.08, 0.13)):
    ao -= (hstep - sdf(ph + n * hstep)).clip(0) * (1.5 / (k + 1))
ao = np.clip(ao, 0.3, 1)
sh = np.ones(len(hi)); tt = np.full(len(hi), 0.02)
for it in range(48):
    dd = sdf(ph + n * 0.004 + tt[:, None] * L)
    sh = np.minimum(sh, np.clip(12 * dd / tt, 0, 1)); tt += np.clip(dd, 0.008, 0.1)
sh = 0.30 + 0.70 * sh
E = env(refl)
def rgb(c): return np.array(c, float)[None, :]
# painted metal: warm off-white base, clear-coat reflection
pb = rgb((0.86, 0.85, 0.82))
paint = pb * ((0.16 + 0.78 * lam * sh + 0.12 * fill + 0.10 * rim) * ao)[:, None] + ((0.04 + 0.30 * fres) * E + 0.25 * spec ** 60 * sh)[:, None]
dk = rgb((0.10, 0.105, 0.11))
dark = dk * ((0.35 + 0.9 * lam * sh + 0.2 * fill) * ao)[:, None] + ((0.05 + 0.4 * fres) * E + 0.18 * spec ** 30 * sh)[:, None]
rub = rgb((0.05, 0.05, 0.05)) * ((0.4 + 0.7 * lam * sh) * ao)[:, None] + ((0.02 + 0.15 * fres) * E)[:, None]
mt = rgb((0.72, 0.73, 0.74))
metal = mt * ((0.12 + 0.35 * lam * sh) * ao)[:, None] + ((0.55 * E + 0.3 * spec ** 20 * sh) * ao)[:, None]
grid = (np.abs(np.sin(gx * 260)) > 0.93) | (np.abs(np.sin(gz * 260)) > 0.93)
dark = np.where((onface & grid)[:, None], dark * 1.5 + 0.015, dark)
c = np.where((mid == 0)[:, None], paint, np.where((mid == 1)[:, None], dark, np.where((mid == 2)[:, None], rub, metal)))
col = np.zeros((len(O), 3)); col[hi] = c
img = col.reshape(Rr, Rr, 3)
img = 1 - np.exp(-np.clip(img, 0, 3) * 1.65)
alpha = hit.reshape(Rr, Rr).astype(float)
im = Image.fromarray((np.dstack([img, alpha]) * 255).clip(0, 255).astype(np.uint8), 'RGBA')
if SS > 1:
    pm = np.array(im).astype(float); pm[..., :3] *= pm[..., 3:] / 255
    pm = np.array(Image.fromarray(pm.astype(np.uint8), 'RGBA').resize((N, N), Image.LANCZOS)).astype(float)
    al = np.maximum(pm[..., 3:], 1) / 255; pm[..., :3] = np.clip(pm[..., :3] / al, 0, 255)
    im = Image.fromarray(pm.astype(np.uint8), 'RGBA')
im = im.crop(im.getbbox()); W, H = im.size
PL, PR, PT, PB = round(W * .05), round(W * .06), round(H * .02), round(H * .07)
PW, PHh = W + PL + PR, H + PT + PB
al = np.array(im.split()[3]) > 128
cols = [x for x in range(W) if al[:, x].any()]
bot = max(np.where(al[:, x])[0].max() for x in cols)
yy, xx = np.mgrid[0:PHh, 0:PW]
x0, x1 = min(cols) + PL, max(cols) + PL
ell = ((xx - (x0 + x1) / 2 - W * .10) / ((x1 - x0) * .48)) ** 2 + ((yy - (bot + PT - H * .005)) / (H * .035)) ** 2
s_im = Image.fromarray((np.clip(1 - ell, 0, 1) * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(PW * .025))
sa = np.array(s_im).astype(np.float32) / 255 * .34
cv = Image.fromarray(np.dstack([np.zeros((PHh, PW, 3)), sa * 255]).astype(np.uint8), 'RGBA')
cv.alpha_composite(im, (PL, PT))
cv.save(OUT, quality=90, method=6) if OUT.endswith('.webp') else cv.save(OUT)
print('obj', W, H, 'asset', PW, PHh)
