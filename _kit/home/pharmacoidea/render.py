#!/usr/bin/env python3
"""Pharmacoidea hero (HOME_BRIEF option c): a crafted render of red blood cells in flow, the subject of the SYNEAD
syndecan-3 based blood test. Each cell is a true Evans-Fung biconcave disc, ray-marched in numpy, lit with a warm key,
a wrap/translucency term and a cool rim in the logo blue, rendered with real alpha (no ground, no box edge, DJ/DP).
Out-of-focus cells get depth-of-field blur. Output: hero.webp (RGBA)."""
import numpy as np, math, pathlib
from PIL import Image, ImageFilter
H = pathlib.Path(__file__).resolve().parent
W, HH = 1400, 1200
RNG = np.random.default_rng(7)

def hprof(r):
    r2 = np.clip(r, 0, 1) ** 2
    return 0.5 * np.sqrt(np.maximum(1 - r2, 0)) * (0.207 + 2.003 * r2 - 1.123 * r2 * r2)  # Evans-Fung, R=1

def rot(ax, ay):
    ca, sa, cb, sb = math.cos(ax), math.sin(ax), math.cos(ay), math.sin(ay)
    Rx = np.array([[1, 0, 0], [0, ca, -sa], [0, sa, ca]])
    Ry = np.array([[cb, 0, sb], [0, 1, 0], [-sb, 0, cb]])
    return Ry @ Rx

def sdf(p):  # p (...,3) in cell space; disc axis = y
    rho = np.sqrt(p[..., 0] ** 2 + p[..., 2] ** 2)
    d1 = np.abs(p[..., 1]) - hprof(rho)
    return np.maximum(d1 * 0.9, rho - 1.0)

def render_cell(cx, cy, rad, ax, ay, tone=1.0):
    """orthographic render of one cell of screen radius rad at (cx,cy); returns RGBA float layer bbox."""
    pad = int(rad * 1.25)
    x0, y0 = int(cx - pad), int(cy - pad)
    n = 2 * pad
    ys, xs = np.mgrid[0:n, 0:n].astype(np.float64)
    px = (xs + x0 - cx) / rad; py = (ys + y0 - cy) / rad
    R = rot(ax, ay); Ri = R.T
    o = np.stack([px, py, np.full_like(px, -3.0)], -1) @ Ri.T
    d = np.array([0, 0, 1.0]) @ Ri.T
    t = np.zeros(px.shape); hit = np.zeros(px.shape, bool); alive = np.ones(px.shape, bool)
    for _ in range(320):
        p = o + t[..., None] * d
        s = sdf(p)
        newhit = alive & (s < 0.0008)
        hit |= newhit; alive &= ~newhit
        t = np.where(alive, t + np.maximum(s * 0.28, 0.0012), t)
        alive &= t < 6
        if not alive.any(): break
    p = o + t[..., None] * d
    e = 0.004
    nx = sdf(p + [e, 0, 0]) - sdf(p - [e, 0, 0]); ny = sdf(p + [0, e, 0]) - sdf(p - [0, e, 0]); nz = sdf(p + [0, 0, e]) - sdf(p - [0, 0, e])
    nn = np.stack([nx, ny, nz], -1); nn /= np.linalg.norm(nn, axis=-1, keepdims=True) + 1e-9
    nw = nn @ R.T  # world normal
    L = np.array([-0.55, -0.62, -0.56]); L /= np.linalg.norm(L)
    V = np.array([0, 0, -1.0])
    ndl = (nw @ L)
    wrap = np.clip((ndl + 0.45) / 1.45, 0, 1)
    rim = np.clip(1 - np.abs(nw @ V), 0, 1) ** 2.4
    Hh = (L + V); Hh /= np.linalg.norm(Hh)
    spec = np.clip(nw @ Hh, 0, 1) ** 38
    # thickness proxy: thin centre lets light through (paler, translucent), thick rim deeper red
    rho = np.sqrt(p[..., 0] ** 2 + p[..., 2] ** 2)
    thick = hprof(rho) / 0.6
    deep = np.array([0.42, 0.025, 0.045]); mid = np.array([0.78, 0.10, 0.10]); pale = np.array([0.93, 0.36, 0.30])
    base = deep[None, None] * (1 - wrap[..., None]) + mid[None, None] * wrap[..., None]
    base = base * (0.75 + 0.25 * thick[..., None]) + pale * (np.clip(1 - thick, 0, 1)[..., None] * 0.22 * wrap[..., None])
    col = base * tone + spec[..., None] * np.array([1.0, 0.86, 0.80]) * 0.42 + rim[..., None] * np.array([0.14, 0.60, 0.82]) * 0.55
    col = np.clip(col, 0, 1)
    a = hit.astype(np.float64)
    img = np.dstack([col, a])
    im = Image.fromarray((img * 255).astype(np.uint8), 'RGBA')
    im = im.resize((n * 2, n * 2), Image.LANCZOS).resize((n, n), Image.LANCZOS)  # soften stair edges
    return im, x0, y0

# composition: a gentle diagonal stream, big sharp cell front-centre, others receding and blurred
cells = [  # cx, cy, rad, ax, ay, blur, tone
    (380, 230, 120, 1.15, 0.5, 9, .55),
    (1080, 210, 105, 0.5, -0.9, 10, .5),
    (1180, 560, 135, 1.35, 0.2, 6, .62),
    (230, 760, 150, 0.35, 0.7, 5, .66),
    (870, 980, 140, 1.05, -0.4, 6, .64),
    (560, 470, 190, 0.95, -0.35, 2.2, .82),
    (930, 470, 230, 0.82, 0.42, 0.8, 1.0),
    (520, 860, 200, 1.42, 0.12, 1.6, .86),
    (1010, 780, 120, 0.2, 1.1, 3.4, .72),
]
cells.sort(key=lambda c: -c[5])  # far (blurry) first
canvas = Image.new('RGBA', (W, HH), (0, 0, 0, 0))
for cx, cy, rad, ax, ay, bl, tone in cells:
    im, x0, y0 = render_cell(cx*2, cy*2, rad*2, ax, ay, tone)
    im = im.resize((im.width//2, im.height//2), Image.LANCZOS); x0//=2; y0//=2
    if bl > 0:
        big = Image.new('RGBA', (im.width + 80, im.height + 80), (0, 0, 0, 0)); big.paste(im, (40, 40))
        # premultiply for correct blur
        arr = np.asarray(big).astype(np.float64) / 255; arr[..., :3] *= arr[..., 3:4]
        pm = Image.fromarray((arr * 255).astype(np.uint8), 'RGBA').filter(ImageFilter.GaussianBlur(bl))
        arr = np.asarray(pm).astype(np.float64) / 255; a = arr[..., 3:4]; arr[..., :3] = np.where(a > 1e-4, arr[..., :3] / np.maximum(a, 1e-4), 0)
        im = Image.fromarray((np.clip(arr, 0, 1) * 255).astype(np.uint8), 'RGBA'); x0 -= 40; y0 -= 40
    layer = Image.new('RGBA', (W, HH), (0, 0, 0, 0)); layer.paste(im, (x0, y0))
    canvas = Image.alpha_composite(canvas, layer)
# long radial fade of alpha towards the canvas edges so nothing ends on a line
yy, xx = np.mgrid[0:HH, 0:W]
rr = np.sqrt(((xx - W * .52) / (W * .56)) ** 2 + ((yy - HH * .52) / (HH * .56)) ** 2)
fade = np.clip(1 - (rr - 0.72) / 0.3, 0, 1); fade = fade * fade * (3 - 2 * fade)
arr = np.asarray(canvas).astype(np.float64); arr[..., 3] *= fade
out = Image.fromarray(arr.astype(np.uint8), 'RGBA')
out.save(H / 'hero.webp', quality=90, method=6)
prev = Image.new('RGBA', out.size, (9, 29, 62, 255)); prev.alpha_composite(out); prev.convert('RGB').save(H / 'hero_preview.jpg', quality=85)
print('ok', out.size)
