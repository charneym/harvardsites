#!/usr/bin/env python3
"""Hero render for Cristcot: one hydrocortisone acetate suppository (ngHCA, a small-volume 90 mg suppository), the
company's real product, as a calm studio product shot: a smooth waxy ivory torpedo lying on a slight diagonal, lit by a
soft key from the upper left with a cool rim in the Cristcot logo blue. Ray-marched solid of revolution, analytic-ish
normals, wrap diffuse + satin sheen + soft subsurface glow, 2x supersampled, real alpha (so the page ink shows through
and no box edge can exist). Writes hero.webp."""
import numpy as np, pathlib
from PIL import Image
H = pathlib.Path(__file__).resolve().parent
W, Hh, SS = 1640, 1000, 2
w, h = W * SS, Hh * SS
L, R = 3.0, 0.45

def prof(t):
    """radius along the axis: t=0 flat base with a rounded edge, slight swell, ogive nose to a soft tip at t=1"""
    z = np.clip(t, 0, 1) * L
    f = 0.11
    r = R * (0.92 + 0.08 * np.sin(np.clip((z - f) / (0.5 * L - f), 0, 1) * np.pi / 2))
    e = z < f
    r = np.where(e, (r - f) + np.sqrt(np.clip(f * f - (f - z) ** 2, 0, None)), r)
    u = np.clip((z / L - 0.5) / 0.5, 0, 1)
    r = np.where(z / L > 0.5, R * np.clip(1 - u ** 2.1, 0, 1) ** 0.58, r)
    return r

def norm(v): return v / np.linalg.norm(v, axis=-1, keepdims=True)
a, b = np.radians(19), np.radians(-9)
AX = np.array([np.cos(a) * np.cos(b), np.sin(a) * np.cos(b), np.sin(b)])
C0 = -AX * L * 0.5  # base centre (object centred on origin)

def sdf(p):
    q = p - C0
    z = q @ AX
    rho = np.linalg.norm(q - z[..., None] * AX, axis=-1)
    return np.maximum(np.maximum(rho - prof(z / L), -z), z - L)

cam = np.array([0, 0, 7.4])
fov = 0.16
ys, xs = np.mgrid[0:h, 0:w]
sx = (xs + 0.5 - w / 2) / (h / 2) * fov
sy = -(ys + 0.5 - h / 2) / (h / 2) * fov
out = np.zeros((h, w, 4), np.float32)
KEY = norm(np.array([-0.55, 0.75, 0.6]))
RIM = norm(np.array([0.7, -0.75, -0.25]))
FILL = norm(np.array([0.3, -0.6, 0.7]))
V_ivory = np.array([0.955, 0.935, 0.895])
V_warm = np.array([0.98, 0.86, 0.72])
V_blue = np.array([0.20, 0.62, 0.80])
step = 96
for y0 in range(0, h, step):
    d = np.stack([sx[y0:y0 + step], sy[y0:y0 + step], -np.ones_like(sx[y0:y0 + step])], -1)
    d = norm(d)
    oc = cam; bb = (d @ oc); cc = oc @ oc - (L * 0.5 + R) ** 2; disc = bb * bb - cc
    t0 = np.clip(-bb - np.sqrt(np.clip(disc, 0, None)), 0, None); t1 = -bb + np.sqrt(np.clip(disc, 0, None))
    N = 260; hit = np.zeros(d.shape[:2], bool); ta = t0.copy(); tb = t0.copy()
    prev = np.full(d.shape[:2], 1.0)
    for i in range(N + 1):
        ts = t0 + (t1 - t0) * i / N
        val = sdf(cam + d * ts[..., None])
        new = (~hit) & (val < 0) & (disc > 0)
        if i % 20 == 0 and not ((disc > 0) & ~hit).any(): break
        tb = np.where(new, ts, tb); ta = np.where(new, t0 + (t1 - t0) * max(i - 1, 0) / N, ta)
        hit |= new
    for k in range(22):
        tm = (ta + tb) / 2; inside = sdf(cam + d * tm[..., None]) < 0
        tb = np.where(inside, tm, tb); ta = np.where(inside, ta, tm)
    p = cam + d * tb[..., None]
    e = 1e-3
    n = np.stack([sdf(p + [e, 0, 0]) - sdf(p - [e, 0, 0]), sdf(p + [0, e, 0]) - sdf(p - [0, e, 0]), sdf(p + [0, 0, e]) - sdf(p - [0, 0, e])], -1)
    n = norm(n + 1e-9)
    v = -d
    ndl = (n @ KEY); wrap = np.clip((ndl + 0.45) / 1.45, 0, 1)
    sss = np.clip(1 - np.abs(ndl), 0, 1) ** 2 * 0.22
    hv = norm(KEY + v); nh = np.clip((n * hv).sum(-1), 0, 1); spec = nh ** 36 * 0.22 + nh ** 8 * 0.05
    nv = np.clip((n * v).sum(-1), 0, 1); fres = (1 - nv) ** 3
    rim = np.clip(n @ RIM, 0, 1) ** 1.4 * 0.5 + fres * 0.14
    fill = np.clip(n @ FILL, 0, 1) * 0.12
    top = np.clip(n[..., 1], 0, 1) * 0.06
    dif = np.clip(ndl, 0, 1)
    sheen = nh ** 70 * 0.42 + nh ** 7 * 0.07
    col = (V_ivory * (0.07 + 0.70 * dif[..., None] + 0.22 * wrap[..., None] + fill[..., None] + top[..., None])
           + V_warm * sss[..., None] + sheen[..., None] + V_blue * rim[..., None])
    # gentle darkening toward the far (receding) side
    col *= (0.9 + 0.1 * np.clip(n[..., 2], 0, 1))[..., None]
    col = col / (1 + 0.12 * col) * 1.06  # soft tone curve
    a_ = hit.astype(np.float32)
    out[y0:y0 + step, :, :3] = col * a_[..., None]
    out[y0:y0 + step, :, 3] = a_
img = out.reshape(Hh, SS, W, SS, 4).mean((1, 3))
al = img[..., 3:4]
rgb = np.where(al > 0, img[..., :3] / np.maximum(al, 1e-6), 0)
rgb = np.clip(rgb, 0, 1) ** (1 / 1.0)
arr = np.concatenate([rgb, al], -1)
im = Image.fromarray((arr * 255 + .5).astype(np.uint8), 'RGBA')
bb = im.getbbox(); pad = 24
im = im.crop((bb[0] - pad, bb[1] - pad, bb[2] + pad, bb[3] + pad))
im.save(H / 'hero.webp', quality=92, method=6)
prev = Image.new('RGBA', im.size, (13, 31, 42, 255)); prev.alpha_composite(im); prev.convert('RGB').save('/tmp/claude-0/-home-user-harvardsites/ce4ad71e-9ef9-511a-ae2c-fb301d95997f/scratchpad/hero_prev.png')
print(im.size)
