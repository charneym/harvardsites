#!/usr/bin/env python3
"""IHP Therapeutics hero (HOME_BRIEF update 2c: a crafted render of the real subject). Red blood cells drifting through a
vessel in sickle cell disease: healthy biconcave discs among rigid, crescent-shaped sickled cells, the cells whose
P-selectin- and complement-driven adhesion causes the vaso-occlusive crisis IHP-102 is built to stop (ihptherapeutics.com,
NIH 5UH3NS134781). Each cell is sphere-traced separately (numpy) inside its projected box, shaded as a soft translucent
membrane (wrap diffuse, thickness-based transmission, fresnel rim in the logo's blue), then composited back to front with
a per-cell depth-of-field blur. Saved with ALPHA (no ground of its own, DJ).
Usage: python3 render.py W H out.png"""
import sys, numpy as np
from PIL import Image, ImageFilter

W = int(sys.argv[1]) if len(sys.argv) > 1 else 1300
H = int(sys.argv[2]) if len(sys.argv) > 2 else 1200
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'

def nrm(v): return v / np.maximum(np.linalg.norm(v, axis=-1, keepdims=True), 1e-9)
def rot(ax, ay, az):
    cx, sx, cy, sy, cz, sz = np.cos(ax), np.sin(ax), np.cos(ay), np.sin(ay), np.cos(az), np.sin(az)
    X = np.array([[1, 0, 0], [0, cx, -sx], [0, sx, cx]]); Y = np.array([[cy, 0, sy], [0, 1, 0], [-sy, 0, cy]])
    Z = np.array([[cz, -sz, 0], [sz, cz, 0], [0, 0, 1]])
    return Z @ Y @ X

def smin(a, b, k):
    h = np.clip(0.5 + 0.5 * (b - a) / k, 0, 1)
    return b * (1 - h) + a * h - k * h * (1 - h)

# local frame: the cell's symmetry axis is y
def sdf_disc(q):
    """biconcave discocyte: a torus rim smooth-joined to a thin central web, with gentle dimples"""
    r = np.sqrt(q[:, 0] ** 2 + q[:, 2] ** 2); y = q[:, 1]
    tor = np.sqrt((r - 0.70) ** 2 + (y / 1.0) ** 2) - 0.29
    web = np.maximum(r - 0.72, np.abs(y) - 0.085)
    return smin(tor, web, 0.16)

def sdf_sickle(q):
    """drepanocyte: a flattened crescent bent along an arc in the x-z plane, tapering to points"""
    Rc = 0.95; amax = 1.05
    a = np.arctan2(q[:, 2], q[:, 0])
    ac = np.clip(a, -amax, amax)
    cxp, czp = Rc * np.cos(ac), Rc * np.sin(ac)
    dx, dz, dy = q[:, 0] - cxp, q[:, 2] - czp, q[:, 1]
    u = ac / amax
    rad = 0.30 * np.sqrt(np.clip(1 - u ** 2, 0, 1)) ** 0.9 + 0.02
    # flatten the cross-section along y (the cells are thin), ellipse approx
    d = np.sqrt(dx ** 2 + (dz * 0) ** 2 + dz ** 2 + (dy / 0.55) ** 2) * 0.55 - rad * 0.55 * 1.0
    d = np.sqrt(dx ** 2 + dz ** 2 + (dy / 0.5) ** 2) - rad
    return d * 0.5

CAM = np.array([0.0, 0.0, -9.0]); FOC = 2.0
def rays(px, py):
    x = (px + 0.5 - W / 2) / (H / 2); y = -(py + 0.5 - H / 2) / (H / 2)
    d = np.stack([x, y, np.full_like(x, FOC)], -1)
    return nrm(d)

def render_cell(c):
    pos, R, s, kind = c['p'], c['R'], c['s'], c['k']
    f = sdf_disc if kind == 'd' else sdf_sickle
    # projected bounding box
    z = pos[2] - CAM[2]; rad = 1.25 * s
    cxp = W / 2 + pos[0] / z * FOC * H / 2; cyp = H / 2 - pos[1] / z * FOC * H / 2
    rp = rad / (z - rad) * FOC * H / 2 * 1.1
    x0, x1 = int(max(0, cxp - rp)), int(min(W, cxp + rp)); y0, y1 = int(max(0, cyp - rp)), int(min(H, cyp + rp))
    if x1 <= x0 or y1 <= y0: return None
    yy, xx = np.mgrid[y0:y1, x0:x1]
    D = rays(xx.ravel().astype(float), yy.ravel().astype(float))
    oc = CAM - pos; b = D @ oc; cc = oc @ oc - rad * rad; disc = b * b - cc
    hitb = disc > 0
    t = np.where(hitb, -b - np.sqrt(np.maximum(disc, 0)), 1e9)
    def S(p): return f(((p - pos) @ R) / s) * s
    alive = hitb.copy(); hit = np.zeros(len(D), bool)
    for _ in range(140):
        idx = np.where(alive)[0]
        if not len(idx): break
        p = CAM + D[idx] * t[idx, None]
        d = S(p)
        t[idx] += d * 0.8
        h = d < 1e-3 * s; hit[idx[h]] = True; alive[idx[h]] = False
        far = t[idx] > pos[2] - CAM[2] + rad * 1.2; alive[idx[far]] = False
    out = np.zeros((y1 - y0, x1 - x0, 4)); dep = np.full((y1 - y0, x1 - x0), 1e9)
    idx = np.where(hit)[0]
    if not len(idx): return None
    p = CAM + D[idx] * t[idx, None]; e = 2e-3 * s
    n = nrm(np.stack([S(p + [e, 0, 0]) - S(p - [e, 0, 0]), S(p + [0, e, 0]) - S(p - [0, e, 0]), S(p + [0, 0, e]) - S(p - [0, 0, e])], -1))
    v = -D[idx]
    # thickness through the cell along the view ray (translucency)
    th = np.zeros(len(idx))
    for k in range(1, 15):
        q = p + D[idx] * (k * 0.045 * s); th += (S(q) < 0) * 0.045
    # ambient occlusion along the normal (catches the dimple and the crescent's inner curve)
    ao = np.ones(len(idx))
    for k in range(1, 6):
        hk = k * 0.06 * s; ao -= (hk - S(p + n * hk)) / s * (0.55 / k)
    ao = np.clip(ao, 0.25, 1)
    L1 = nrm(np.array([-0.55, 0.75, -0.55])); L2 = nrm(np.array([0.8, -0.2, 0.6]))
    ndl = n @ L1; wrap = np.clip((ndl + 0.45) / 1.45, 0, 1)
    hv = nrm(L1 + v); spec = np.clip((n * hv).sum(1), 0, 1) ** 38
    fres = (1 - np.clip((n * v).sum(1), 0, 1)) ** 3
    back = np.clip(n @ L2, 0, 1)
    deep = np.array([0.24, 0.02, 0.035]); mid = np.array([0.60, 0.06, 0.075]); hi = np.array([0.90, 0.36, 0.32])
    if kind == 's':  # sickled cells: denser, darker, more rigid haemoglobin
        deep = deep * 0.85; mid = np.array([0.58, 0.05, 0.075])
    trans = np.exp(-th * 2.2)
    col = deep[None] + (mid - deep)[None] * wrap[:, None] + (hi - mid)[None] * (wrap ** 3)[:, None] * 0.75
    col = col * (0.45 + 0.55 * ao[:, None])
    col += np.array([1.0, 0.42, 0.36])[None] * (trans * 0.32)[:, None] * (0.4 + 0.6 * wrap)[:, None]
    col += np.array([0.42, 0.56, 0.88])[None] * (fres * 0.42 + back * 0.12)[:, None] * (0.6 + 0.4 * ao)[:, None]
    col += np.array([1.0, 0.92, 0.9])[None] * (spec * 0.22)[:, None]
    col *= c.get('b', 1.0)
    o = out.reshape(-1, 4); o[idx, :3] = np.clip(col, 0, 1); o[idx, 3] = 1
    dep.reshape(-1)[idx] = t[idx]
    return (x0, y0, out, dep)

def gblur(a, sg):
    r = int(sg * 3) + 1; k = np.exp(-0.5 * (np.arange(-r, r + 1) / sg) ** 2); k /= k.sum()
    a = np.apply_along_axis(lambda m: np.convolve(m, k, 'same'), 0, a)
    return np.apply_along_axis(lambda m: np.convolve(m, k, 'same'), 1, a)

rng = np.random.default_rng(102)
# composition: a loose diagonal stream through the frame, upper left to lower right, the sickled cells near the focus
CELLS = [
 dict(k='d', p=np.array([0.35, 0.35, 0.0]), R=rot(1.0, 0.0, 0.35), s=0.92),
 dict(k='s', p=np.array([-0.85, -0.95, -0.7]), R=rot(1.35, 0.3, -0.5), s=0.95),
 dict(k='d', p=np.array([1.55, -0.95, 0.7]), R=rot(0.55, 0.4, -0.2), s=0.9),
 dict(k='d', p=np.array([-1.25, 1.35, 1.4]), R=rot(1.4, 0.1, 0.9), s=0.88),
 dict(k='s', p=np.array([1.65, 1.45, 1.8]), R=rot(1.2, -0.4, 0.8), s=0.92),
 dict(k='d', p=np.array([-2.0, -1.65, 2.6]), R=rot(0.25, 0.3, 0.1), s=0.9),
 dict(k='d', p=np.array([0.45, -2.2, 3.1]), R=rot(1.5, 0.5, -0.7), s=0.9),
 dict(k='d', p=np.array([2.75, 0.3, 3.4]), R=rot(0.9, -0.3, 0.4), s=0.88),
 dict(k='d', p=np.array([-2.6, 0.2, 3.8]), R=rot(0.7, 0.6, 1.2), s=0.9),
 dict(k='s', p=np.array([-0.3, 2.3, 4.4]), R=rot(1.25, 0.2, 2.4), s=0.95),
 dict(k='d', p=np.array([2.6, 2.6, 5.8]), R=rot(1.1, 0.2, 0.3), s=0.9),
 dict(k='d', p=np.array([3.1, -2.4, 5.4]), R=rot(0.4, 0.2, 0.5), s=0.9),
 dict(k='d', p=np.array([-3.2, 2.6, 6.4]), R=rot(1.3, 0.3, -0.4), s=0.9),
 dict(k='d', p=np.array([-3.4, -2.7, 7.0]), R=rot(0.9, 0.9, -0.4), s=0.9),
 dict(k='d', p=np.array([0.9, 3.4, 8.0]), R=rot(0.3, 0.2, 0.7), s=0.9),
 dict(k='s', p=np.array([3.6, -0.4, 8.6]), R=rot(1.0, 0.3, 1.9), s=0.95),
]
FOCUS = 9.0
layers = []
for i, c in enumerate(CELLS):
    r = render_cell(c)
    if r is None: continue
    x0, y0, out, dep = r
    zc = c['p'][2] - CAM[2]
    blur = abs(zc - FOCUS) * 2.6 * H / 1200
    fade = np.clip(1 - (zc - FOCUS) * 0.07, 0.55, 1)  # aerial perspective: distant cells sink toward the ink
    rgba = out.copy(); rgba[..., :3] *= fade
    pre = np.dstack([rgba[..., :3] * rgba[..., 3:], rgba[..., 3:]])
    pad = int(blur * 3 + 4)
    im = np.zeros((out.shape[0] + 2 * pad, out.shape[1] + 2 * pad, 4)); im[pad:-pad, pad:-pad] = pre
    if blur > 0.6:
        im = gblur(im, float(blur))
    layers.append((zc, x0 - pad, y0 - pad, im))
    print('cell', i, c['k'], 'z', round(zc, 2), 'blur', round(blur, 1), flush=True)
canvas = np.zeros((H, W, 4))
for zc, x, y, im in sorted(layers, key=lambda l: -l[0]):
    h, w = im.shape[:2]
    ax0, ay0 = max(0, x), max(0, y); ax1, ay1 = min(W, x + w), min(H, y + h)
    sub = im[ay0 - y:ay1 - y, ax0 - x:ax1 - x]
    dst = canvas[ay0:ay1, ax0:ax1]
    canvas[ay0:ay1, ax0:ax1] = sub + dst * (1 - sub[..., 3:])
a = np.clip(canvas[..., 3:], 1e-6, 1)
rgb = np.clip(canvas[..., :3] / a, 0, 1)
img = np.dstack([rgb, canvas[..., 3:]])
Image.fromarray((np.clip(img, 0, 1) ** [1 / 1.0, 1, 1, 1] * 255).astype(np.uint8), 'RGBA').save(OUT)
print('saved', OUT)
