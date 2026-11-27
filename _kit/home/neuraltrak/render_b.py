#!/usr/bin/env python3
"""NeuralTrak hero (PROD_BRIEF 3b, variant B light): a crafted render of a mobile C-arm, the standard 2D X-ray system
that NeuralTrak's software turns into a 3D scanner (NSF SBIR 2433137 / 2604163: "transforming any 2D mobile C-arm into a
3D scanner using software alone"; validated on image-intensifier and flat-panel C-arms). Generic and unbranded, no
lettering: wheeled base, column, horizontal arm, the C with the X-ray tube at the bottom and a flat-panel detector at
the top; the C opens toward the headline (left). Medical off-white paint, dark grey detector and tube faces.
Light: one soft key from the upper left (headline side), a low neutral fill, a dim rim on the far right; no glow.
A faint soft floor shadow is baked into the transparent pad. Ray-marched SDFs in numpy, orthographic, real alpha.
Usage: python3 render_b.py SIZE out.webp [SS]"""
import sys, math, numpy as np
from PIL import Image, ImageFilter
N = int(sys.argv[1]) if len(sys.argv) > 1 else 600
OUT = sys.argv[2] if len(sys.argv) > 2 else 'hero.webp'
SS = int(sys.argv[3]) if len(sys.argv) > 3 else 1
def n3(v): v = np.array(v, float); return v / np.linalg.norm(v)
def nrm(v): return v / np.maximum(np.linalg.norm(v, axis=-1, keepdims=True), 1e-9)
def sm(a, b, x): x = np.clip((x - a) / (b - a), 0, 1); return x * x * (3 - 2 * x)
TH, PH_ = math.radians(-34), math.radians(14)          # turn toward the viewer, look slightly down
cy_, sy_ = math.cos(TH), math.sin(TH); cx_, sx_ = math.cos(PH_), math.sin(PH_)
def toobj(p):
    x, y, z = p[..., 0], p[..., 1], p[..., 2]
    y, z = y * cx_ - z * sx_, y * sx_ + z * cx_          # undo the tilt
    x, z = x * cy_ + z * sy_, -x * sy_ + z * cy_         # undo the turn
    return x, y, z
def rbox(x, y, z, c, h, r=0.02):
    qx, qy, qz = np.abs(x - c[0]) - h[0] + r, np.abs(y - c[1]) - h[1] + r, np.abs(z - c[2]) - h[2] + r
    o = np.sqrt(np.maximum(qx, 0) ** 2 + np.maximum(qy, 0) ** 2 + np.maximum(qz, 0) ** 2)
    return o + np.minimum(np.maximum(qx, np.maximum(qy, qz)), 0) - r
def cylz(x, y, z, c, r, hz):   # cylinder along z
    d1 = np.hypot(x - c[0], y - c[1]) - r; d2 = np.abs(z - c[2]) - hz
    return np.minimum(np.maximum(d1, d2), 0) + np.hypot(np.maximum(d1, 0), np.maximum(d2, 0))
def cyly(x, y, z, c, r, hy):   # cylinder along y
    d1 = np.hypot(x - c[0], z - c[2]) - r; d2 = np.abs(y - c[1]) - hy
    return np.minimum(np.maximum(d1, d2), 0) + np.hypot(np.maximum(d1, 0), np.maximum(d2, 0))
CX, CY, R = -0.20, 0.14, 0.54
A0, A1 = math.radians(112), math.radians(248)          # the gap of the C, facing left
XB = CX + R * math.cos(A0)                             # beam line x (ends sit on it)
def parts(p):
    x, y, z = toobj(p)
    qx, qy = x - CX, y - CY
    a = np.arctan2(qy, qx) % (2 * math.pi)
    dr = np.hypot(qx, qy) - R
    sec = np.hypot(np.maximum(np.abs(dr) - 0.045, 0), np.maximum(np.abs(z) - 0.075, 0)) + np.minimum(np.maximum(np.abs(dr) - 0.045, np.abs(z) - 0.075), 0) - 0.02
    ingap = (a > A0) & (a < A1)
    e0 = np.array((CX + R * math.cos(A0), CY + R * math.sin(A0))); e1 = np.array((CX + R * math.cos(A1), CY + R * math.sin(A1)))
    dend = np.minimum(np.hypot(x - e0[0], y - e0[1]), np.hypot(x - e1[0], y - e1[1]))
    arc = np.where(ingap, np.maximum(sec, dend - 0.065), sec)
    det = rbox(x, y, z, (XB, CY + R * math.sin(A0) - 0.04, 0), (0.22, 0.065, 0.20), 0.03)
    detf = rbox(x, y, z, (XB, CY + R * math.sin(A0) - 0.108, 0), (0.19, 0.008, 0.17), 0.004)
    tube = rbox(x, y, z, (XB, CY + R * math.sin(A1) + 0.01, 0), (0.14, 0.09, 0.13), 0.05)
    tubf = cyly(x, y, z, (XB, CY + R * math.sin(A1) + 0.105, 0), 0.075, 0.01)
    car = rbox(x, y, z, (CX + R + 0.07, CY, 0), (0.07, 0.15, 0.11), 0.03)
    arm = rbox(x, y, z, ((CX + R + 0.12 + 0.70) / 2, CY, 0), ((0.70 - CX - R - 0.12) / 2 + 0.02, 0.06, 0.065), 0.02)
    col = rbox(x, y, z, (0.80, -0.30, 0), (0.11, 0.55, 0.11), 0.04)
    base = rbox(x, y, z, (0.70, -0.86, 0), (0.42, 0.10, 0.30), 0.06)
    wh = 9.0
    for wx in (0.36, 1.04):
        for wz in (-0.24, 0.24):
            wh = np.minimum(wh, cylz(x, y, z, (wx, -0.98, wz), 0.05, 0.03))
    hnd = cyly(x, y, z, (1.00, -0.40, 0), 0.016, 0.16)
    hb = np.minimum(rbox(x, y, z, (0.96, -0.25, 0), (0.05, 0.012, 0.012), 0.008), rbox(x, y, z, (0.96, -0.55, 0), (0.05, 0.012, 0.012), 0.008))
    white = np.minimum.reduce([arc, det, tube, car, arm, col, base, np.minimum(hnd, hb)])
    dark = np.minimum.reduce([detf, tubf, wh])
    return white, dark
def sdf(p, want_id=False):
    w, d = parts(p)
    if want_id: return np.minimum(w, d), np.where(d < w, 2, 1)
    return np.minimum(w, d)
def env(dv):
    key = np.clip(dv @ n3((-0.62, 0.62, 0.48)), 0, 1)
    c = 0.02 + 0.9 * sm(0.62, 0.93, key)
    c += 0.25 * sm(0.80, 0.97, np.clip(dv @ n3((0.80, 0.25, -0.55)), 0, 1))
    c += 0.06 * sm(-0.2, 0.9, dv[..., 1])
    return c
Rr = N * SS
xs = np.linspace(-1, 1, Rr)
X, Y = np.meshgrid(xs * 1.12 + 0.18, -xs * 1.12 - 0.06)
O = np.stack([X, Y, np.full_like(X, 4.0)], -1).reshape(-1, 3)
D = np.array((0, 0, -1.0))
t = np.zeros(len(O)); hit = np.zeros(len(O), bool); alive = np.ones(len(O), bool)
for it in range(220):
    idx = np.where(alive)[0]
    if len(idx) == 0: break
    d = sdf(O[idx] + t[idx, None] * D) * 0.8
    t[idx] += d
    h = d < 2e-4; hit[idx[h]] = True; alive[idx[h]] = False
    alive[idx[t[idx] > 8]] = False
P = O + t[:, None] * D
hi = np.where(hit)[0]; ph = P[hi]
_, mid = sdf(ph, True)
e = 6e-4
n = nrm(np.stack([sdf(ph + (e, 0, 0)) - sdf(ph - (e, 0, 0)), sdf(ph + (0, e, 0)) - sdf(ph - (0, e, 0)), sdf(ph + (0, 0, e)) - sdf(ph - (0, 0, e))], -1))
refl = D - 2 * (n @ D)[:, None] * n
L = n3((-0.62, 0.62, 0.48))
lam = np.clip(n @ L, 0, 1)
fill = np.clip(n @ n3((0.7, -0.1, 0.7)), 0, 1)
rim = sm(0.55, 0.9, np.clip(n @ n3((0.85, 0.2, -0.5)), 0, 1))
fres = 0.04 + 0.96 * (1 - np.clip(-(n @ D), 0, 1)) ** 5
# soft ambient occlusion: march a few steps along the normal
ao = np.ones(len(hi))
for k, hstep in enumerate((0.02, 0.05, 0.09, 0.14)):
    ao -= (hstep - sdf(ph + n * hstep)).clip(0) * (1.6 / (k + 1))
ao = np.clip(ao, 0.35, 1)
# self-shadow from the key light (coarse)
sh = np.ones(len(hi)); tt = np.full(len(hi), 0.02)
for it in range(40):
    dd = sdf(ph + n * 0.004 + tt[:, None] * L)
    sh = np.minimum(sh, np.clip(10 * dd / tt, 0, 1)); tt += np.clip(dd, 0.01, 0.12)
sh = 0.35 + 0.65 * sh
paint = (0.22 + 0.80 * lam * sh + 0.14 * fill + 0.12 * rim) * ao + (0.06 + 0.25 * fres) * env(refl)
darkm = (0.03 + 0.07 * lam * sh + 0.02 * fill) * ao + (0.05 + 0.35 * fres) * env(refl)
c = np.where(mid == 1, paint, darkm)
col = np.zeros(len(O)); col[hi] = c
img = np.clip(col, 0, 1.4).reshape(Rr, Rr)
img = 1 - np.exp(-img * 1.7)
alpha = hit.reshape(Rr, Rr).astype(float)
rgb = np.stack([img * 1.0, img * 0.995, img * 0.985], -1)
im = Image.fromarray((np.dstack([rgb, alpha]) * 255).clip(0, 255).astype(np.uint8), 'RGBA')
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
ell = ((xx - (x0 + x1) / 2 - W * .06) / ((x1 - x0) * .5)) ** 2 + ((yy - (bot + PT - H * .005)) / (H * .035)) ** 2
s_im = Image.fromarray((np.clip(1 - ell, 0, 1) * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(PW * .025))
sa = np.array(s_im).astype(np.float32) / 255 * .32
cv = Image.fromarray(np.dstack([np.zeros((PHh, PW, 3)), sa * 255]).astype(np.uint8), 'RGBA')
cv.alpha_composite(im, (PL, PT))
cv.save(OUT, quality=90, method=6) if OUT.endswith('.webp') else cv.save(OUT)
print('obj', W, H, 'asset', PW, PHh)
