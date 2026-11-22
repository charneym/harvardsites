#!/usr/bin/env python3
"""Plakous Therapeutics hero (HOME_BRIEF update 2c: a crafted render of the real mechanism). A fold of the small-intestinal
lining seen close up: a curved mucosal ridge (plica) covered in finger-like villi, the tissue Plakous' human placental
extract (HPE) is given to mature in premature infants, to prevent necrotizing enterocolitis (plakoustherapeutics.com:
"accelerating intestinal maturation"; NIH R44HD100243). Sphere-traced in numpy: a smooth ridge surface smooth-unioned
with jittered, leaning, slightly flattened capsule villi on a hexagonal lattice; shaded as soft translucent tissue (wrap
diffuse, ambient occlusion in the crypts, thickness-based transmission that makes the tips glow, a cool indigo rim from
the logo's blue), depth-of-field by depth slices, and an eased elliptical alpha so it has NO ground of its own (DJ/DP).
Usage: python3 render.py W H out.png"""
import sys, numpy as np
from PIL import Image

W = int(sys.argv[1]) if len(sys.argv) > 1 else 1300
H = int(sys.argv[2]) if len(sys.argv) > 2 else 1100
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'

def nrm(v): return v / np.maximum(np.linalg.norm(v, axis=-1, keepdims=True), 1e-9)
def smin(a, b, k):
    h = np.clip(0.5 + 0.5 * (b - a) / k, 0, 1)
    return b * (1 - h) + a * h - k * h * (1 - h)

SP = 0.31            # villus spacing
VH = 1.0            # villus height
VR = 0.114           # villus radius

def base(x, z):
    """a mucosal fold seen whole: a long low mound, arcing a little, that falls away on every side"""
    zc = z - 0.22 * np.sin(x * 0.5)
    return 1.15 * np.exp(-(x / 3.3) ** 2 - (zc / 1.55) ** 2) - 0.55

def hsh(i, j, k):
    v = np.sin(i * 127.1 + j * 311.7 + k * 74.7) * 43758.5453
    return v - np.floor(v)

def sdf(p):
    x, y, z = p[:, 0], p[:, 1], p[:, 2]
    b = base(x, z)
    ds = (y - b) * 0.7
    # hex-ish lattice: offset every other row
    jz = np.floor(z / (SP * 0.866))
    dv = np.full(len(p), 9.0)
    for dj in (-2, -1, 0, 1, 2):
        jj = jz + dj
        off = (np.mod(jj, 2)) * 0.5
        ix = np.floor(x / SP - off)
        for di in (-2, -1, 0, 1, 2):
            ii = ix + di
            cx = (ii + off + 0.5 + (hsh(ii, jj, 1) - 0.5) * 0.22) * SP
            cz = (jj + 0.5 + (hsh(ii, jj, 2) - 0.5) * 0.22) * SP * 0.866
            cy = base(cx, cz)
            # normal of the base (lean the villus with the surface) + a little random sway toward the camera
            e = 0.05
            gx = (base(cx + e, cz) - base(cx - e, cz)) / (2 * e); gz = (base(cx, cz + e) - base(cx, cz - e)) / (2 * e)
            ax = -gx * 0.25 + (hsh(ii, jj, 3) - 0.5) * 0.16; az = -gz * 0.25 + (hsh(ii, jj, 4) - 0.5) * 0.16 - 0.05
            al = np.sqrt(ax * ax + 1 + az * az); ax, ay, az = ax / al, 1 / al, az / al
            h = VH * (0.62 + 0.62 * hsh(ii, jj, 5)) * np.clip((cy + 0.45) / 0.55, 0, 1)
            r = VR * (0.85 + 0.3 * hsh(ii, jj, 6))
            # capsule from base (sunk a little) to tip, radius swelling slightly to a rounded tip (leaf-like)
            qx, qy, qz = x - cx, y - (cy - 0.08), z - cz
            t = np.clip(qx * ax + qy * ay + qz * az, 0, np.maximum(h, 1e-3))
            px, py, pz = qx - ax * t, qy - ay * t, qz - az * t
            u = t / np.maximum(h, 1e-3)
            rr = r * (0.78 + 0.16 * np.sqrt(np.clip(u, 0, 1)) + 0.16 * np.sin(np.clip(u, 0, 1) * 2.6))
            # slight flattening (villi are leaf/finger shaped)
            d = np.sqrt((px * 1.0) ** 2 + py ** 2 + (pz * 1.25) ** 2) - rr * np.clip(h / (VH * .5), 0, 1)
            dv = smin(dv, d * 0.85, 0.025)
    d = smin(ds, dv, 0.11)
    # fine cellular texture of the epithelium (enterocytes), very shallow
    return d

CAM = np.array([0.0, 3.1, -6.6]); TGT = np.array([0.0, 0.45, 0.2]); FOC = 2.05
fw = nrm(TGT - CAM); rt = nrm(np.cross(np.array([0, 1.0, 0]), fw)); up = np.cross(fw, rt)

def render():
    yy, xx = np.mgrid[0:H, 0:W]
    x = (xx.ravel() + 0.5 - W / 2) / (H / 2); y = -(yy.ravel() + 0.5 - H / 2) / (H / 2)
    D = nrm(x[:, None] * rt[None] + y[:, None] * up[None] + FOC * fw[None])
    N = len(D)
    # start at the slab y in [-1.2, 2.4]
    t = np.zeros(N)
    t0 = (2.3 - CAM[1]) / np.minimum(D[:, 1], -1e-4); t = np.maximum(t0, 0)
    alive = D[:, 1] < 0; hit = np.zeros(N, bool)
    for it in range(340):
        idx = np.where(alive)[0]
        if not len(idx): break
        p = CAM + D[idx] * t[idx, None]
        d = sdf(p)
        t[idx] += d * 0.6
        h = d < 1.5e-3; hit[idx[h]] = True; alive[idx[h]] = False
        far = (t[idx] > 22) | (p[:, 1] < -2.5); alive[idx[far]] = False
        if it % 40 == 0: print('iter', it, len(idx), flush=True)
    col = np.zeros((N, 3)); A = np.zeros(N); dep = np.full(N, 30.0)
    idx = np.where(hit)[0]
    p = CAM + D[idx] * t[idx, None]; e = 2e-3
    n = nrm(np.stack([sdf(p + [e, 0, 0]) - sdf(p - [e, 0, 0]), sdf(p + [0, e, 0]) - sdf(p - [0, e, 0]), sdf(p + [0, 0, e]) - sdf(p - [0, 0, e])], -1))
    v = -D[idx]
    ao = np.ones(len(idx))
    for k in range(1, 7):
        hk = k * 0.07; ao -= (hk - sdf(p + n * hk)) * (0.9 / k)
    ao = np.clip(ao, 0.12, 1)
    th = np.zeros(len(idx))
    for k in range(1, 12):
        th += 0.03 / (1 + np.exp(np.clip(sdf(p - n * (k * 0.03)) / 0.012, -30, 30)))
    L1 = nrm(np.array([-0.6, 0.85, -0.35])); L2 = nrm(np.array([0.5, 0.35, 0.9]))
    ndl = n @ L1; wrap = np.clip((ndl + 0.5) / 1.5, 0, 1)
    hv = nrm(L1 + v); spec = np.clip((n * hv).sum(1), 0, 1) ** 46
    fres = (1 - np.clip((n * v).sum(1), 0, 1)) ** 2.6
    back = np.clip(-(v @ L2) * 0 + (n @ L2), 0, 1)
    hb = p[:, 1] - base(p[:, 0], p[:, 2])          # height above the base: tips light, crypts deep
    ht = np.clip(hb / VH, 0, 1)
    deep = np.array([0.22, 0.03, 0.06]); mid = np.array([0.80, 0.30, 0.30]); hi = np.array([1.0, 0.74, 0.66])
    c = deep[None] + (mid - deep)[None] * wrap[:, None] + (hi - mid)[None] * (wrap ** 3)[:, None] * 0.7
    c *= (0.30 + 0.70 * ao[:, None]) * (0.55 + 0.45 * ht[:, None])
    trans = np.exp(-th * 9.0)
    c += np.array([1.0, 0.45, 0.38])[None] * (trans * 0.30 * (0.3 + 0.7 * ht))[:, None]
    c += np.array([0.42, 0.45, 0.95])[None] * (fres * 0.24 + back * 0.08)[:, None] * (0.4 + 0.6 * ao)[:, None]
    c += np.array([1.0, 0.93, 0.92])[None] * (spec * 0.28 * ao)[:, None]
    col[idx] = np.clip(c, 0, 1); dep[idx] = t[idx]
    bl = np.clip((base(p[:, 0], p[:, 2]) + 0.5) / 0.45, 0, 1); A[idx] = bl * bl * (3 - 2 * bl)  # the fold dissolves into the ink at its foot
    return col.reshape(H, W, 3), A.reshape(H, W), dep.reshape(H, W)

def gblur(a, sg):
    r = int(sg * 3) + 1; k = np.exp(-0.5 * (np.arange(-r, r + 1) / sg) ** 2); k /= k.sum()
    from numpy.lib.stride_tricks import sliding_window_view as sw
    pad = np.pad(a, ((r, r), (0, 0), (0, 0)), mode='edge'); a = np.einsum('ijkl,l->ijk', sw(pad, 2 * r + 1, axis=0), k)
    pad = np.pad(a, ((0, 0), (r, r), (0, 0)), mode='edge'); a = np.einsum('ijkl,l->ijk', sw(pad, 2 * r + 1, axis=1), k)
    return a

import os
CACHE = OUT + '.npz'
if os.path.exists(CACHE):
    z = np.load(CACHE); col, A, dep = z['col'], z['A'], z['dep']
else:
    col, A, dep = render(); np.savez_compressed(CACHE, col=col, A=A, dep=dep)
# depth of field without depth slices (slices leave seams along iso-depth lines): blur the whole premultiplied image at a few
# levels and let every pixel take the level of its own circle of confusion, interpolating between neighbouring levels
FOCUS = float(np.median(dep[(A > 0) & (np.abs(np.arange(W)[None] - W / 2) < W * .1) & (np.arange(H)[:, None] < H * .6)])) if (A > 0).any() else 6.5
print('focus', FOCUS)
pre = np.dstack([col * A[..., None], A[..., None]])
coc = np.where(A > 0, np.abs(dep - FOCUS) * 3.2 * H / 1100, 0)
# spread each pixel's CoC a little so blurred edges of a near, soft villus also take the soft level
cz = gblur(coc[..., None], 4)[..., 0]; coc = np.maximum(coc, cz)
LV = [0, 1.2, 2.4, 4, 6.5, 10]
ims = [pre if s_ == 0 else gblur(pre, s_) for s_ in LV]
out = np.zeros_like(pre)
c = np.clip(coc, 0, LV[-1])
for i in range(len(LV) - 1):
    lo, hi = LV[i], LV[i + 1]
    w = np.clip((c - lo) / (hi - lo), 0, 1)
    m = ((c >= lo) & ((c < hi) | (i == len(LV) - 2)))[..., None]
    out = np.where(m, ims[i] * (1 - w[..., None]) + ims[i + 1] * w[..., None], out)
# eased elliptical alpha: the tissue dissolves into the page ink well before any edge (no box, DJ/DP)
yy, xx = np.mgrid[0:H, 0:W]
rx = (xx - W * 0.5) / (W * 0.5); ry = (yy - H * 0.47) / (H * 0.5)
rr = np.sqrt(rx ** 2 + ry ** 2)
fall = np.clip((1.0 - rr) / 0.5, 0, 1); fall = fall * fall * (3 - 2 * fall)
out *= fall[..., None]
a = np.clip(out[..., 3:], 1e-6, 1)
rgb = np.clip(out[..., :3] / a, 0, 1)
Image.fromarray((np.dstack([rgb, out[..., 3:]]) * 255).astype(np.uint8), 'RGBA').save(OUT)
print('saved', OUT)
