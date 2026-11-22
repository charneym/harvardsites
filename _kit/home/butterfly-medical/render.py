#!/usr/bin/env python3
"""Butterfly Medical hero (HOME_BRIEF update 2c: a crafted render of the firm's own product). The Butterfly Prostatic
Retraction Device, modelled on Butterfly's own product image (EU MDR announcement, Nov 2026) and their procedure
animation: a nitinol frame of four arches, each with a small hook at its apex, whose arms sweep down in an S-curve to
two long elliptical wing loops that hold the lateral lobes apart. Tubes are built from densely spaced spheres splatted
into a z-buffer; shading is metallic (a studio environment reflected with Fresnel, satin roughness, a little diffuse),
with screen-space ambient occlusion. Saved with real ALPHA (no ground of its own, DJ/DP).
Usage: python3 render.py W H out.png"""
import sys, math, numpy as np
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 1600
H = int(sys.argv[2]) if len(sys.argv) > 2 else 1200
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = 2; w, h = W * SS, H * SS
def nrm(v): return v / np.maximum(np.linalg.norm(v, axis=-1, keepdims=True), 1e-9)
def rot(ax, a):
    ax = np.array(ax, float); ax /= np.linalg.norm(ax); x, y, z = ax; c, s = math.cos(a), math.sin(a); C = 1 - c
    return np.array([[c + x*x*C, x*y*C - z*s, x*z*C + y*s], [y*x*C + z*s, c + y*y*C, y*z*C - x*s], [z*x*C - y*s, z*y*C + x*s, c + z*z*C]])
RT = .0128                       # strut radius (device length ~1.3)
CURVES = []
def bez(p0, p1, p2, p3, n=400):
    t = np.linspace(0, 1, n)[:, None]
    return (1-t)**3*p0 + 3*(1-t)**2*t*p1 + 3*(1-t)*t*t*p2 + t**3*p3
def poly(pts, n=60):
    out = []
    for a, b in zip(pts[:-1], pts[1:]):
        t = np.linspace(0, 1, n)[:, None]; out.append(a + (b - a) * t)
    return np.concatenate(out)
def rounded(pts, r=.012, n=40):
    """polyline with small rounded corners (laser-cut strut look)"""
    pts = [np.array(p, float) for p in pts]; seg = [pts[0]]
    for i in range(1, len(pts) - 1):
        a, b, c = pts[i-1], pts[i], pts[i+1]
        d1 = nrm(a - b); d2 = nrm(c - b); p = b + d1 * r; q = b + d2 * r
        seg.append(p); seg.extend(list(bez(p, b, b, q, 12))); seg.append(q)
    seg.append(pts[-1]); return poly(seg, n // 4)
# wing loops: long ellipses on each side, in planes that flare outward and down
WA, WB = .66, .25
def wing(s):
    C = np.array([.04, -.16, s * .46]); u = np.array([1., 0, 0]); v = nrm(np.array([0, -.22, s * 1.]))
    return C, u, v
for s in (-1, 1):
    C, u, v = wing(s); th = np.linspace(0, 2 * math.pi, 1400)[:, None]
    CURVES.append(C + u * WA * np.cos(th) + v * WB * np.sin(th))
# four arches with a hook at each apex
XS = [-.44, -.16, .12, .40]
for i, x in enumerate(XS):
    ya = .24 + .012 * i; zc = .032
    # hook: a small open U standing on the apex, its lip bent back
    CURVES.append(rounded([(x - .01, ya, -zc), (x - .01, ya + .07, -zc), (x - .01, ya + .07, zc), (x - .01, ya, zc)]))
    CURVES.append(rounded([(x - .01, ya + .07, -zc * .6), (x - .06, ya + .085, -zc * .6), (x - .06, ya + .085, zc * .6), (x - .01, ya + .07, zc * .6)]))
    for s in (-1, 1):
        C, u, v = wing(s)
        ct = np.clip((x + .1 - C[0]) / WA, -.97, .97); st = -math.sqrt(1 - ct * ct)
        land = C + u * WA * ct + v * WB * st
        p0 = np.array([x - .01, ya, s * zc])
        CURVES.append(bez(p0, p0 + np.array([.03, .02, s * .30]), land + np.array([-.08, .30, -s * .10]), land, 700))
def resample(c, step):
    d = np.r_[0, np.cumsum(np.linalg.norm(np.diff(c, axis=0), axis=1))]; t = np.arange(0, d[-1] + 1e-9, step)
    return np.stack([np.interp(t, d, c[:, k]) for k in range(3)], -1)
P = np.concatenate([resample(c, RT * .12) for c in CURVES])
# view: three-quarter from above, length axis running from back-left to front-right (as in Butterfly's own image)
Rm = rot([1, 0, 0], .60) @ rot([0, 1, 0], -.50) @ rot([0, 0, 1], .04)
P = P @ Rm.T
mn, mx = P[:, :2].min(0) - RT * 3, P[:, :2].max(0) + RT * 3
S = min(w * .94 / (mx[0] - mn[0]), h * .94 / (mx[1] - mn[1]))
ox = (w - (mx[0] - mn[0]) * S) / 2 - mn[0] * S; oy = (h - (mx[1] - mn[1]) * S) / 2 + mx[1] * S
print('points', len(P), 'scale', S)
Z = np.full((h, w), -9.0, np.float32); N = np.zeros((h, w, 3), np.float32)
px = P[:, 0] * S + ox; py = oy - P[:, 1] * S; r = RT * S
ri = int(r) + 2; yy0, xx0 = np.mgrid[-ri:ri + 1, -ri:ri + 1]
for i in np.argsort(P[:, 2]):
    cx, cy = px[i], py[i]; ix, iy = int(cx), int(cy)
    x0, y0 = ix - ri, iy - ri
    if x0 < 0 or y0 < 0 or x0 + 2 * ri + 1 > w or y0 + 2 * ri + 1 > h: continue
    dx = (xx0 + ix + .5 - cx) / r; dy = (yy0 + iy + .5 - cy) / r; d2 = dx * dx + dy * dy; ins = d2 < 1
    dz = np.sqrt(np.clip(1 - d2, 0, 1)); z = P[i, 2] + dz * RT
    zs = Z[y0:y0 + 2 * ri + 1, x0:x0 + 2 * ri + 1]; win = ins & (z > zs)
    zs[win] = z[win]; N[y0:y0 + 2 * ri + 1, x0:x0 + 2 * ri + 1][win] = np.stack([dx, -dy, dz], -1)[win]
cov = Z > -8
def blur(a, r):
    for _ in range(3):
        c = np.cumsum(np.pad(a, ((r + 1, r), (0, 0)), mode='edge'), 0); a = (c[2 * r + 1:] - c[:-2 * r - 1]) / (2 * r + 1)
        c = np.cumsum(np.pad(a, ((0, 0), (r + 1, r)), mode='edge'), 1); a = (c[:, 2 * r + 1:] - c[:, :-2 * r - 1]) / (2 * r + 1)
    return a
# contact occlusion where struts cross or meet (screen space, from depth)
Zf = np.where(cov, Z, Z[cov].min() - .2).astype(np.float64)
ao = np.zeros_like(Zf)
for rad, k in ((max(int(r * 1.2), 1), 5.0), (max(int(r * 3.5), 1), 2.0)):
    ao += np.clip((blur(Zf, rad) - Zf) * k, 0, None)
ao = np.clip(1 - ao * 1.4, .35, 1)
n = nrm(N); V = np.array([0, 0, 1.])
Rf = 2 * n[..., 2:3] * n - V            # reflection vector
def env(d):
    """studio: a large softbox upper left, a cool strip right, a dim teal room, a darker floor"""
    x, y, z = d[..., 0], d[..., 1], d[..., 2]
    base = np.stack([.20 + .16 * y, .27 + .18 * y, .32 + .20 * y], -1) * (y > -.15)[..., None] + np.array([.10, .15, .18]) * (y <= -.15)[..., None]
    sb = np.exp(-(((x + .35) / .5) ** 2 + ((y - .6) / .35) ** 2) ** 1.6) * 3.4 + np.exp(-((y - .95) / .25) ** 2) * .9
    st = np.exp(-(((x - .74) / .06) ** 2 + ((y - .15) / .55) ** 2) ** 2) * 1.3
    rimL = np.exp(-(((z + .2) / .25) ** 2)) * np.clip(-x, 0, 1) * .5
    return base + sb[..., None] * np.array([1., .985, .96]) + st[..., None] * np.array([.62, .86, 1.]) + rimL[..., None] * np.array([.4, .7, .9])
# satin finish: average the environment over a few jittered normals
acc = np.zeros(n.shape, np.float64); rng = np.random.default_rng(3)
for k in range(10):
    jn = nrm(n + rng.normal(size=3) * .055)
    acc += env(2 * jn[..., 2:3] * jn - V)
E = acc / 10
cosv = np.clip(n[..., 2], 0, 1)
F0 = np.array([.62, .61, .60])                      # nitinol: a slightly warm grey metal
F = F0 + (1 - F0) * ((1 - cosv) ** 5)[..., None]
L = nrm(np.array([-.5, .6, .62])); dif = np.clip(n @ L, 0, 1)
col = F * E * .92 + (.06 + .10 * dif)[..., None] * np.array([.62, .62, .63])
col *= ao[..., None]
col = 1 - np.exp(-col * 1.25)                      # soft tone map
col = np.clip(col, 0, 1) ** (1 / 1.08)
img = np.dstack([col, cov.astype(np.float64)])
img = img.reshape(H, SS, W, SS, 4).mean((1, 3))
a = img[..., 3:4]; rgb = np.where(a > 0, img[..., :3] / np.maximum(a, 1e-6), 0)
Image.fromarray((np.dstack([rgb, a]) * 255).round().astype(np.uint8), 'RGBA').save(OUT)
print('wrote', OUT)
