#!/usr/bin/env python3
"""MitoPower hero (HOME_BRIEF update 2c: a crafted render of the firm's real subject). Mitochondria, the organelles whose
dysfunction MitoPower's MP-04 is built to correct (mitopower.com; NIH 5U44AA029833). Each mitochondrion is volume-rendered
(numpy): a translucent double membrane (outer and inner) around a dense matrix, with the inner membrane folded into wavy
cristae, lit by one key light with soft self-shadowing and a cool fresnel rim in the logo's cyan. Several organelles at
different depths, each with depth-of-field blur, composited back to front and saved with ALPHA (no ground, DJ).
Usage: python3 render.py W H out.png"""
import sys, numpy as np
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 1300
H = int(sys.argv[2]) if len(sys.argv) > 2 else 1100
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
def nrm(v): return v / np.maximum(np.linalg.norm(v, axis=-1, keepdims=True), 1e-9)
def rot(ax, ay, az):
    cx, sx, cy, sy, cz, sz = np.cos(ax), np.sin(ax), np.cos(ay), np.sin(ay), np.cos(az), np.sin(az)
    X = np.array([[1, 0, 0], [0, cx, -sx], [0, sx, cx]]); Y = np.array([[cy, 0, sy], [0, 1, 0], [-sy, 0, cy]])
    Z = np.array([[cz, -sz, 0], [sz, cz, 0], [0, 0, 1]])
    return Z @ Y @ X
CAM = np.array([0.0, 0.0, -9.0]); FOC = 2.0
L1 = nrm(np.array([-0.6, 0.7, -0.45]))
def rays(px, py):
    x = (px + 0.5 - W / 2) / (H / 2); y = -(py + 0.5 - H / 2) / (H / 2)
    return nrm(np.stack([x, y, np.full_like(x, FOC)], -1))

def fields(q, m):
    """local frame, long axis x. returns outer-membrane distance d0, crista sheet distance s"""
    Lh, r = m['L'], 0.55
    x = q[:, 0]; y = q[:, 1] - m['bend'] * (x ** 2 - Lh ** 2 / 3); z = q[:, 2] / 0.86
    cx = np.clip(x, -Lh, Lh)
    d0 = np.sqrt((x - cx) ** 2 + y ** 2 + z ** 2) - r
    sp = m['sp']
    u = x + 0.05 * np.sin(5.1 * z + 1.7 * y + m['ph']) + 0.03 * np.sin(9.0 * y + 2.0)
    n = np.round(u / sp); dp = np.abs(u - n * sp)
    odd = (np.abs(n) % 2) == 1
    reach = 0.20 + 0.06 * np.sin(n * 2.3 + m['ph'])
    ext = np.where(odd, (y - reach), (-y - reach))     # crista grows from one side of the inner membrane
    ext = np.maximum(ext, 0)  # 0 inside reach
    s = np.sqrt(np.maximum(dp - 0.028, 0) ** 2 + ext ** 2) - 0.0 + np.minimum(dp - 0.028, 0) * 0
    s = np.maximum(s, d0 + 0.07)                          # only inside the inner membrane
    return d0, s, x, y, z

def render(m):
    pos, R, s = m['p'], m['R'], m['s']
    z = pos[2] - CAM[2]; rad = (m['L'] + 0.75) * s
    cxp = W / 2 + pos[0] / z * FOC * H / 2; cyp = H / 2 - pos[1] / z * FOC * H / 2
    rp = rad / (z - rad) * FOC * H / 2 * 1.08
    x0, x1 = int(max(0, cxp - rp)), int(min(W, cxp + rp)); y0, y1 = int(max(0, cyp - rp)), int(min(H, cyp + rp))
    if x1 <= x0 or y1 <= y0: return None
    yy, xx = np.mgrid[y0:y1, x0:x1]
    D = rays(xx.ravel().astype(float), yy.ravel().astype(float))
    oc = CAM - pos; b = D @ oc; cc = oc @ oc - rad * rad; disc = b * b - cc
    hit = disc > 0; idx = np.where(hit)[0]
    D = D[idx]; sq = np.sqrt(disc[idx]); t0 = -b[idx] - sq; t1 = -b[idx] + sq
    N = m.get('steps', 240)
    col = np.zeros((len(idx), 3)); T = np.ones(len(idx))
    Ll = L1 @ R  # light in local frame
    Vl = -(D @ R)
    for k in range(N):
        tt = t0 + (t1 - t0) * (k + 0.5) / N; dt = (t1 - t0) / N / s
        p = ((CAM + D * tt[:, None]) - pos) @ R / s
        d0, sh, x, y, zz = fields(p, m)
        act = d0 < 0.06
        if not act.any(): continue
        # membranes: outer, inner, cristae; matrix in between
        mo = np.exp(-(d0 / 0.016) ** 2); mi = np.exp(-((d0 + 0.06) / 0.013) ** 2); mc = np.exp(-(sh / 0.012) ** 2) * (d0 < -0.05)
        gran = 0.5 + 0.5 * np.sin(23 * x + 3 * np.sin(17 * zz)) * np.sin(19 * y + 11 * zz)
        mat = (d0 < -0.065) * (0.55 + 0.45 * gran)
        sig = mo * 14 + mi * 11 + mc * 13 + mat * 2.2
        # light: soft self-shadow from depth along the light, and a normal term from the outer surface
        e = 0.02
        dl, _, _, _, _ = fields(p + Ll[None] * 0.32, m)
        shad = np.clip(0.22 + 0.78 * np.exp(-np.maximum(-dl, 0) * 3.2), 0, 1)
        g = np.stack([fields(p + [e, 0, 0], m)[0] - d0, fields(p + [0, e, 0], m)[0] - d0, fields(p + [0, 0, e], m)[0] - d0], -1)
        n = nrm(g); ndl = np.clip((n @ Ll + 0.35) / 1.35, 0, 1); fr = (1 - np.abs((n * Vl).sum(1))) ** 2.2
        cm = np.array([0.80, 0.95, 1.00]); cmi = np.array([0.55, 0.86, 0.96]); ccr = np.array([0.62, 0.90, 1.0]); cmat = np.array([0.03, 0.17, 0.24])
        em = (mo[:, None] * (cm * (0.10 + 0.95 * ndl ** 1.3)[:, None] + np.array([0.0, 0.74, 0.94]) * (fr * 0.9)[:, None]) * 14
              + mi[:, None] * cmi * 11 * 0.8 + mc[:, None] * ccr * 13 * (0.35 + 0.65 * np.clip((Ll[0] * np.sign(np.sin(np.pi * x / m['sp'] + 1e-3)) + 1) / 2, 0, 1))[:, None]
              + mat[:, None] * cmat * 2.2 * 1.4) * shad[:, None]
        a = 1 - np.exp(-sig * dt)
        col += (T * a)[:, None] * em / np.maximum(sig, 1e-6)[:, None]
        T *= (1 - a)
    out = np.zeros(((y1 - y0) * (x1 - x0), 4))
    out[idx, :3] = col; out[idx, 3] = 1 - T
    return x0, y0, out.reshape(y1 - y0, x1 - x0, 4)

def gblur(a, sg):
    r = int(sg * 3) + 1; k = np.exp(-0.5 * (np.arange(-r, r + 1) / sg) ** 2); k /= k.sum()
    a = np.apply_along_axis(lambda m: np.convolve(m, k, 'same'), 0, a)
    return np.apply_along_axis(lambda m: np.convolve(m, k, 'same'), 1, a)

MITO = [
 dict(p=np.array([0.05, 0.1, 0.0]), R=rot(0.62, 0.38, 0.40), s=1.28, L=1.3, steps=320, bend=0.10, sp=0.30, ph=0.3),
 dict(p=np.array([-1.55, -1.75, 2.2]), R=rot(1.1, -0.4, -0.55), s=0.9, L=0.95, bend=-0.08, sp=0.29, ph=1.9),
 dict(p=np.array([2.2, 1.85, 3.4]), R=rot(0.3, 0.8, 1.15), s=0.9, L=1.1, bend=0.12, sp=0.3, ph=2.7),
 dict(p=np.array([-2.25, 1.75, 4.8]), R=rot(0.9, 0.2, -0.3), s=0.9, L=0.85, bend=0.06, sp=0.3, ph=4.1),
 dict(p=np.array([2.6, -2.2, 5.6]), R=rot(0.2, -0.5, 0.25), s=0.9, L=1.0, bend=-0.1, sp=0.3, ph=5.0),
]
FOCUS = 9.0
layers = []
for i, m in enumerate(MITO):
    r = render(m)
    if r is None: continue
    x0, y0, out = r
    zc = m['p'][2] - CAM[2]
    blur = abs(zc - FOCUS) * 2.4 * H / 1100
    fade = np.clip(1 - (zc - FOCUS) * 0.075, 0.5, 1)
    pre = out.copy(); pre[..., :3] *= fade  # emission accumulation is already premultiplied
    pad = int(blur * 3 + 4)
    im = np.zeros((out.shape[0] + 2 * pad, out.shape[1] + 2 * pad, 4)); im[pad:-pad, pad:-pad] = pre
    if blur > 0.6: im = gblur(im, float(blur))
    layers.append((zc, x0 - pad, y0 - pad, im)); print('mito', i, 'z', zc, 'blur', round(blur, 1), flush=True)
canvas = np.zeros((H, W, 4))
for zc, x, y, im in sorted(layers, key=lambda l: -l[0]):
    h, w = im.shape[:2]
    ax0, ay0 = max(0, x), max(0, y); ax1, ay1 = min(W, x + w), min(H, y + h)
    sub = im[ay0 - y:ay1 - y, ax0 - x:ax1 - x]; dst = canvas[ay0:ay1, ax0:ax1]
    canvas[ay0:ay1, ax0:ax1] = sub + dst * (1 - sub[..., 3:])
a = np.clip(canvas[..., 3:], 1e-6, 1)
rgb = np.clip(canvas[..., :3] / a, 0, 1)
Image.fromarray((np.dstack([rgb, canvas[..., 3:]]) * 255).astype(np.uint8), 'RGBA').save(OUT)
print('saved', OUT)
