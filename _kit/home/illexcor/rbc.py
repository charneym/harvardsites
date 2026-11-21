#!/usr/bin/env python3
"""Illexcor hero (HOME_BRIEF update 2c: a crafted render of the real subject). Human red blood cells, the cells Illexcor's
oral HbS polymerisation inhibitors keep from sickling. Each cell is the measured biconcave disc of Evans & Fung (1972):
z = 0.5*sqrt(1-x^2)*(C0 + C2 x^2 + C4 x^4), R = 3.91 um, C0 = 0.81, C2 = 7.83, C4 = -4.39 um. Surfaces are sampled densely,
splatted into a depth buffer per cell, shaded as a soft translucent material (wrap diffuse, thickness-based glow through the
thin centre, fresnel rim, broad low specular), and composited back to front with depth-of-field blur on the far and near
cells. Crimson from the logo's coral rim (#d85058), on a transparent ground (no box edge, DJ/DP).
Usage: python3 rbc.py out.png [size]"""
import sys, numpy as np
from PIL import Image, ImageFilter

OUT = sys.argv[1] if len(sys.argv) > 1 else 'rbc.png'
S = int(sys.argv[2]) if len(sys.argv) > 2 else 2400          # supersampled canvas; halved at the end
R_UM, C0, C2, C4 = 3.91, 0.81, 7.83, -4.39

def half(x):  # half-thickness in units of R
    return 0.5 * np.sqrt(np.clip(1 - x * x, 0, 1)) * (C0 + C2 * x * x + C4 * x ** 4) / R_UM

def rotm(a, b, c):
    ca, sa, cb, sb, cc, sc = np.cos(a), np.sin(a), np.cos(b), np.sin(b), np.cos(c), np.sin(c)
    X = np.array([[1, 0, 0], [0, ca, -sa], [0, sa, ca]]); Y = np.array([[cb, 0, sb], [0, 1, 0], [-sb, 0, cb]])
    Z = np.array([[cc, -sc, 0], [sc, cc, 0], [0, 0, 1]])
    return Z @ Y @ X

def cell_points(rad_px):
    n_t = int(2 * np.pi * rad_px * 2.6); n_u = int(rad_px * 3.4)
    s = (np.arange(n_u) + .5) / n_u
    u = np.sin(s * np.pi / 2) ** .9 * .9995                         # denser toward the rim
    th = (np.arange(n_t) + .5) / n_t * 2 * np.pi
    U, T = np.meshgrid(u, th, indexing='ij')
    zt = half(U); e = 1e-4; dz = (half(np.minimum(U + e, .99999)) - half(np.maximum(U - e, 0))) / (2 * e)
    P, N, TH = [], [], []
    for sg in (1, -1):
        x, y, z = U * np.cos(T), U * np.sin(T), sg * zt
        nx, ny, nz = -dz * np.cos(T), -dz * np.sin(T), sg * np.ones_like(U)
        P.append(np.stack([x, y, z], -1).reshape(-1, 3)); N.append(np.stack([nx, ny, nz], -1).reshape(-1, 3))
        TH.append((2 * zt).reshape(-1))
    # the rim band (closes the silhouette): a torus-like strip at u -> 1
    tb = np.linspace(-1, 1, 60)
    TB, TT = np.meshgrid(tb, np.linspace(0, 2 * np.pi, n_t), indexing='ij')
    hr = half(np.array(.9995)); x = np.cos(TT) * (1 + 0 * TB); z = TB * hr
    P.append(np.stack([x * 1.0, np.sin(TT), z], -1).reshape(-1, 3))
    N.append(np.stack([np.cos(TT), np.sin(TT), 0 * TT], -1).reshape(-1, 3)); TH.append(np.full(TB.size, 2 * hr * .6))
    P = np.concatenate(P); N = np.concatenate(N); TH = np.concatenate(TH)
    N /= np.linalg.norm(N, axis=1, keepdims=True)
    return P, N, TH

L = np.array([-.5, .62, .6]); L /= np.linalg.norm(L)       # key light, upper left (the side of the text, kept soft)
B = np.array([.55, -.3, -.78]); B /= np.linalg.norm(B)      # back light through the cells
V = np.array([0, 0, 1.])
HV = (L + V) / np.linalg.norm(L + V)
ALB = np.array([.84, .16, .19]); DEEP = np.array([.22, .015, .045]); GLOW = np.array([1.0, .42, .40]); RIM = np.array([1.0, .62, .60])

def render_cell(cx, cy, rad, rot, dimz, seed=0.):
    P, N, TH = cell_points(rad)
    P0 = P.copy(); M = rotm(*rot); P = P @ M.T; N = N @ M.T
    x = P[:, 0] * rad + cx; y = cy - P[:, 1] * rad; z = P[:, 2]
    front = N[:, 2] > -0.02
    x, y, z, N, TH, P0 = x[front], y[front], z[front], N[front], TH[front], P0[front]
    xi = np.round(x).astype(np.int64); yi = np.round(y).astype(np.int64)
    ok = (xi >= 0) & (xi < S) & (yi >= 0) & (yi < S)
    xi, yi, z, N, TH, P0 = xi[ok], yi[ok], z[ok], N[ok], TH[ok], P0[ok]
    o = np.argsort(z)                                       # far first, near overwrite
    xi, yi, z, N, TH, P0 = xi[o], yi[o], z[o], N[o], TH[o], P0[o]
    # faint membrane relief: low-amplitude noise on the normals (a real cell is never a perfect plastic disc)
    ph = np.arctan2(P0[:, 1], P0[:, 0]); rr = np.hypot(P0[:, 0], P0[:, 1])
    nz = (np.sin(ph * 7 + rr * 9 + seed) * .5 + np.sin(ph * 13 - rr * 17 + seed * 2) * .3 + np.sin(rr * 31 + ph * 3) * .2)
    N = N + .035 * nz[:, None] * np.array([1, .6, 0])[None]; N /= np.linalg.norm(N, axis=1, keepdims=True)
    lam = (N @ L); wrap = np.clip((lam + .45) / 1.45, 0, 1)
    fres = (1 - np.clip(N[:, 2], 0, 1)) ** 2.6
    spec = np.clip(N @ HV, 0, 1) ** 26
    thin = np.clip(1 - TH / TH.max(), 0, 1)
    back = np.clip(-(N @ B) * .5 + .5, 0, 1)
    w2 = wrap[:, None] ** 1.25
    col = DEEP[None] * (1 - w2) + ALB[None] * w2 * .92
    col = col * (.72 + .28 * thin[:, None])
    col += GLOW[None] * (thin ** 2.2 * (.10 + .30 * back))[:, None]          # light through the thin centre
    col += RIM[None] * (fres * (.18 + .42 * back))[:, None]                    # back-lit rim
    spec2 = np.clip(N @ HV, 0, 1) ** 90
    col += np.array([1, .80, .78])[None] * (spec * .14 + spec2 * .30)[:, None]
    col *= dimz
    img = np.zeros((S, S, 3), np.float32); a = np.zeros((S, S), np.float32)
    img[yi, xi] = col; a[yi, xi] = 1
    # close single-pixel pinholes
    im = Image.fromarray(np.dstack([np.clip(img, 0, 1) * 255, a * 255]).astype(np.uint8), 'RGBA')
    return im

# composition, back to front: [cx, cy, radius, rotation(x,y,z), blur, brightness]  (fractions of the canvas)
CELLS = [
    [.79, .16, .125, (1.05, .35, .6), 9, .5],
    [.17, .24, .11, (.55, -.9, -.3), 8, .55],
    [.82, .82, .14, (-1.0, .5, 1.2), 8, .58],
    [.20, .78, .125, (1.2, .25, -.9), 5, .7],
    [.83, .40, .14, (-.45, 1.2, .3), 2, .84],
    [.45, .52, .29, (-.78, -.42, .2), 0, 1.0],
]
canvas = Image.new('RGBA', (S, S), (0, 0, 0, 0))
for k, (cx, cy, r, rot, bl, br) in enumerate(CELLS):
    im = render_cell(cx * S, cy * S, r * S, rot, br, seed=k * 1.7)
    im = im.filter(ImageFilter.MaxFilter(3)) if False else im
    # fill splat gaps: median on premultiplied layer
    arr = np.asarray(im).astype(np.float32) / 255
    a = arr[..., 3]
    pre = Image.fromarray((np.dstack([arr[..., :3] * a[..., None], a]) * 255).astype(np.uint8), 'RGBA')
    pre = pre.filter(ImageFilter.MedianFilter(3))
    if bl: pre = pre.filter(ImageFilter.GaussianBlur(bl * S / 1200))
    p = np.asarray(pre).astype(np.float32) / 255
    canvas_a = np.asarray(canvas).astype(np.float32) / 255
    ca = canvas_a[..., 3:]; cc = canvas_a[..., :3] * ca            # premultiplied
    pa = p[..., 3:]; pc = p[..., :3]
    oc = pc + cc * (1 - pa); oa = pa + ca * (1 - pa)
    rgb = np.where(oa > 1e-5, oc / np.maximum(oa, 1e-5), 0)
    canvas = Image.fromarray((np.dstack([rgb, oa]) * 255).clip(0, 255).astype(np.uint8), 'RGBA')
canvas = canvas.resize((S // 2, S // 2), Image.LANCZOS)
canvas.save(OUT); print(OUT, canvas.size)
