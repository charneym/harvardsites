#!/usr/bin/env python3
"""Nanospectra hero: a crafted render of their real product (HOME_BRIEF update 2c), one AuroShell(R) nanoshell.
nanospectra.com / press: AuroShells are nanoparticles with a non-conducting silica core and a thin gold metal shell that
convert near-infrared light into heat. Drawn as ONE calm object: a polished gold sphere with a quarter-octant cut away,
so the gold shell and the frosted silica core read in section. Analytic ray casting (orthographic), environment
reflection for the gold, a few soft out-of-focus companions for depth, 2x supersampling, real alpha (DJ, DP, DS).
Usage: python3 render.py out.webp [W]"""
import sys, math
import numpy as np
from PIL import Image, ImageFilter
OUT = sys.argv[1] if len(sys.argv) > 1 else 'hero.webp'
OW = int(sys.argv[2]) if len(sys.argv) > 2 else 1200
OH = int(OW * 1.0)
SS = 2
W, H = OW * SS, OH * SS

def norm(v):
    return v / np.linalg.norm(v, axis=-1, keepdims=True)

def rot(ax, ay, az):
    cx, sx, cy, sy, cz, sz = math.cos(ax), math.sin(ax), math.cos(ay), math.sin(ay), math.cos(az), math.sin(az)
    Rx = np.array([[1, 0, 0], [0, cx, -sx], [0, sx, cx]])
    Ry = np.array([[cy, 0, sy], [0, 1, 0], [-sy, 0, cy]])
    Rz = np.array([[cz, -sz, 0], [sz, cz, 0], [0, 0, 1]])
    return Rz @ Ry @ Rx

GOLD = np.array([1.00, 0.76, 0.33])
GOLD_D = np.array([0.62, 0.40, 0.12])
SILICA = np.array([0.86, 0.90, 0.96])

def env(d):
    """studio environment seen by the gold: deep navy surround, a large soft key box upper left, a cool rim right, a warm floor bounce"""
    x, y, z = d[..., 0], d[..., 1], d[..., 2]
    t = np.clip(-y * 0.5 + 0.5, 0, 1)
    base = np.stack([0.05 + 0.34 * t**1.6, 0.06 + 0.34 * t**1.6, 0.09 + 0.38 * t**1.6], -1)
    key = np.exp(-(((x + 0.50) / 0.55) ** 2 + ((y + 0.55) / 0.40) ** 2))
    top = np.exp(-(((y + 0.95) / 0.35) ** 2)) * 0.6
    rim = np.exp(-(((x - 0.95) / 0.22) ** 2 + ((y + 0.05) / 0.6) ** 2))
    floor = np.exp(-(((y - 0.9) / 0.3) ** 2)) * 0.45
    band = np.exp(-((y - 0.02) / 0.05) ** 2) * (0.35 + 0.45 * np.clip(-x, 0, 1))
    box2 = np.exp(-(((x - 0.35) / 0.18) ** 2 + ((y + 0.75) / 0.12) ** 2)) * 1.1
    c = base + key[..., None] * np.array([1.7, 1.62, 1.5]) + top[..., None] + rim[..., None] * np.array([0.45, 0.72, 1.15]) + floor[..., None] * np.array([0.9, 0.62, 0.32]) + band[..., None] + box2[..., None]
    return c

def sphere_layer(cx, cy, r, R, cut=True, rcore=0.82):
    """ray cast one particle; returns rgb, alpha (screen coords px, y down)"""
    yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
    u = (xx + 0.5 - cx) / r
    v = (yy + 0.5 - cy) / r
    inside = u * u + v * v < 1.25
    rgb = np.zeros((H, W, 3), np.float32); a = np.zeros((H, W), np.float32)
    if not inside.any(): return rgb, a
    U, V = u[inside], v[inside]
    n = U.size
    # world: x right, y down, z toward viewer. rays from z=+3 going -z
    o = np.stack([U, V, np.full(n, 3.0)], -1)
    d = np.tile(np.array([0, 0, -1.0]), (n, 1))
    Rt = R.T
    oo = o @ Rt.T; dd = d @ Rt.T            # object space
    best = np.full(n, np.inf); kind = np.zeros(n, np.int8); nobj = np.zeros((n, 3))
    # outer sphere entry
    b = (oo * dd).sum(1); c = (oo * oo).sum(1) - 1
    disc = b * b - c
    hit = disc > 0
    t0 = -b - np.sqrt(np.clip(disc, 0, None))
    p = oo + dd * t0[:, None]
    inO = (p[:, 0] > 0) & (p[:, 1] < 0) & (p[:, 2] > 0) if cut else np.zeros(n, bool)
    ok = hit & ~inO
    best[ok] = t0[ok]; kind[ok] = 1; nobj[ok] = p[ok]
    if cut:
        # the three cut faces (planes bounding the removed octant x>0, y<0, z>0)
        for k, sgn in ((0, 1), (1, -1), (2, 1)):
            with np.errstate(divide='ignore', invalid='ignore'):
                tk = -oo[:, k] / dd[:, k]
            q = oo + dd * np.nan_to_num(tk)[:, None]
            oth = [j for j in range(3) if j != k]
            cond = np.ones(n, bool)
            for j in oth:
                cond &= (q[:, j] > 0) if j != 1 else (q[:, j] < 0)
            cond &= (q * q).sum(1) <= 1
            cond &= np.isfinite(tk) & (tk < best)
            best[cond] = tk[cond]; kind[cond] = 2 + k
            nn = np.zeros(3); nn[k] = sgn
            nobj[cond] = nn
            # remember radius on face for shell/core split
            if k == 0: rq0 = np.sqrt((q * q).sum(1))
            if k == 1: rq1 = np.sqrt((q * q).sum(1))
            if k == 2: rq2 = np.sqrt((q * q).sum(1))
    got = kind > 0
    nw = nobj @ R.T                       # normals back to world
    nw = norm(nw + 1e-9)
    view = np.array([0, 0, 1.0])
    col = np.zeros((n, 3))
    # gold surface
    m = kind == 1
    if m.any():
        N = nw[m]
        refl = norm(2 * N[:, 2:3] * N - view)          # reflect view about N
        ndv = np.clip(N[:, 2], 0, 1)
        F = GOLD + (1 - GOLD) * (1 - ndv[:, None]) ** 5
        e = env(refl)
        col[m] = F * e * 1.05 + GOLD_D * 0.05
    # cut faces
    hitp_r = np.zeros(n)
    if cut:
        for k, rq in ((0, rq0), (1, rq1), (2, rq2)):
            mk = kind == 2 + k
            hitp_r[mk] = rq[mk]
        mf = kind >= 2
        if mf.any():
            N = nw[mf]
            L = norm(np.array([-0.55, -0.62, 0.62]))
            dif = np.clip(N @ L, 0, 1)
            rr = hitp_r[mf]
            core = rr < rcore
            # brushed gold section: matte, slightly darker; frosted silica: soft, with a faint inner glow
            gsec = GOLD * (0.42 + 0.66 * dif[:, None]) + 0.10 * env(norm(2 * N[:, 2:3] * N - view)) * GOLD
            # radial grain on the gold section (concentric rings, the shell's growth)
            grain = 0.97 + 0.03 * np.sin(rr * 90)
            gsec = gsec * grain[:, None]
            sil = SILICA * (0.42 + 0.48 * dif[:, None]) + np.array([0.10, 0.16, 0.26]) * (1 - rr[:, None] / rcore) * 0.9
            # thin bright interface line between core and shell
            edge = np.exp(-((rr - rcore) / 0.012) ** 2)
            c2 = np.where(core[:, None], sil, gsec)
            c2 = c2 + edge[:, None] * np.array([1.0, 0.86, 0.55]) * 0.25
            # rim of the cut (outer edge) catches the light
            orim = np.exp(-((rr - 1) / 0.012) ** 2)
            c2 = c2 + orim[:, None] * np.array([1.0, 0.9, 0.6]) * 0.35
            col[mf] = c2
    # soft ambient occlusion near the inner corner (the cut's axis line)
    rgbv = np.zeros((n, 3)); av = np.zeros(n)
    rgbv[got] = col[got]; av[got] = 1
    # anti-aliased silhouette
    rad = np.sqrt(U * U + V * V)
    aa = np.clip((1 - rad) * r / 1.2, 0, 1)
    av = av * np.where(kind == 1, aa, 1)
    rgb[inside] = rgbv; a[inside] = av
    return rgb, a

def align(a, b, spin=0.0):
    a = a / np.linalg.norm(a); b = b / np.linalg.norm(b)
    v = np.cross(a, b); c = float(a @ b); s_ = np.linalg.norm(v)
    K = np.array([[0, -v[2], v[1]], [v[2], 0, -v[0]], [-v[1], v[0], 0]])
    M = np.eye(3) + K + K @ K * ((1 - c) / (s_ * s_ + 1e-12))
    # spin about b
    k = b; Kb = np.array([[0, -k[2], k[1]], [k[2], 0, -k[0]], [-k[1], k[0], 0]])
    S = np.eye(3) + math.sin(spin) * Kb + (1 - math.cos(spin)) * Kb @ Kb
    return S @ M
R = align(np.array([1.0, -1.0, 1.0]), np.array([0.50, -0.42, 0.76]), 0.35)
out = np.zeros((H, W, 3), np.float32); A = np.zeros((H, W), np.float32)

def over(dst, da, src, sa):
    return src * sa[..., None] + dst * (1 - sa[..., None]), sa + da * (1 - sa)

# soft companions behind (defocused), then the hero particle
comps = [(0.15, 0.20, 0.07, rot(0.3, -0.5, 0.2), 6, 0.75), (0.87, 0.82, 0.06, rot(-0.8, 0.9, 0.0), 5, 0.7),
         (0.12, 0.83, 0.045, rot(0.6, 0.2, 0.4), 8, 0.55), (0.88, 0.16, 0.038, rot(0.1, 1.1, 0.3), 9, 0.5)]
for (fx, fy, fr, Rc, blur, op) in comps:
    c, a = sphere_layer(fx * W, fy * H, fr * W, Rc, cut=False)
    im = Image.fromarray(np.dstack([np.clip(c * a[..., None], 0, 1) * 255, a * 255]).astype(np.uint8), 'RGBA')
    im = im.filter(ImageFilter.GaussianBlur(blur * SS))
    arr = np.asarray(im).astype(np.float32) / 255
    sa = arr[..., 3] * op
    sc = np.where(arr[..., 3:4] > 1e-4, arr[..., :3] / np.maximum(arr[..., 3:4], 1e-4), 0)
    out, A = over(out, A, sc, sa)
c, a = sphere_layer(0.5 * W, 0.5 * H, 0.34 * W, R, cut=True)
# a soft contact shadow / glow under the hero particle is left to the canvas (field.js) so no edge is baked in
out, A = over(out, A, c, a)
out = np.clip(out, 0, 1) ** (1 / 1.08)
img = Image.fromarray(np.dstack([out * 255, np.clip(A, 0, 1) * 255]).astype(np.uint8), 'RGBA').resize((OW, OH), Image.LANCZOS)
img.save(OUT, quality=90, method=6) if OUT.endswith('.webp') else img.save(OUT)
print('wrote', OUT, img.size)
