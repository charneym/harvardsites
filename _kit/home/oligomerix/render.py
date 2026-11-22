#!/usr/bin/env python3
"""Oligomerix hero (HOME_BRIEF update 2c: a crafted render of the real mechanism).
A neuronal microtubule, the 13-protofilament tube of alternating alpha/beta tubulin that tau normally binds and stabilises,
with its far end fraying as protofilaments peel away; around it, tau has come loose and self-associated into small
oligomers, drawn as the six-bead rings of Oligomerix's own logo. Oligomerix's OLX-07010 inhibits exactly this tau
self-association, the first step of the tau aggregation cascade (oligomerix.com, Technology / About).
Every bead is an analytic sphere (orthographic ray-sphere hits, z-buffered), shaded with wrap diffuse, a soft specular,
screen-space ambient occlusion from the depth map and a fresnel rim in the brand blue; the scene is split into depth slices
that are blurred by their distance from the focal plane (depth of field) and composited back to front. Saved with ALPHA,
so it has no ground of its own (DJ).
Usage: python3 render.py W H out.png"""
import sys, math, numpy as np
from PIL import Image, ImageFilter

W = int(sys.argv[1]) if len(sys.argv) > 1 else 1400
H = int(sys.argv[2]) if len(sys.argv) > 2 else 1300
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
S = W / 1400.0            # pixel scale
PX = 6.4 * S              # pixels per nm
rng = np.random.default_rng(11)

def gblur(a, sig):
    """separable gaussian blur of a float 2-D array (no scipy)"""
    if sig < 0.3: return a
    r = int(sig * 3) + 1; k = np.exp(-0.5 * (np.arange(-r, r + 1) / sig) ** 2); k /= k.sum()
    p = np.pad(a, ((r, r), (r, r)), mode='edge')
    t = sum(k[j] * p[:, j:j + a.shape[1]] for j in range(2 * r + 1))
    return sum(k[j] * t[j:j + a.shape[0], :] for j in range(2 * r + 1))

def nrm(v): v = np.asarray(v, float); return v / np.linalg.norm(v)
def rot(ax, ay, az):
    cx, sx, cy, sy, cz, sz = math.cos(ax), math.sin(ax), math.cos(ay), math.sin(ay), math.cos(az), math.sin(az)
    X = np.array([[1, 0, 0], [0, cx, -sx], [0, sx, cx]]); Y = np.array([[cy, 0, sy], [0, 1, 0], [-sy, 0, cy]])
    Z = np.array([[cz, -sz, 0], [sz, cz, 0], [0, 0, 1]])
    return Z @ Y @ X

# sphere list: centre (nm, scene frame: x right, y down, z away from viewer), radius nm, kind
SP = []
A_COL = np.array([0.80, 0.79, 0.90])   # alpha tubulin: the logo's pale lavender
B_COL = np.array([0.52, 0.52, 0.74])   # beta tubulin: the logo's deeper lavender-grey
T_COL = np.array([0.36, 0.40, 1.00])   # tau oligomers: the site's electric blue (#313df5), lifted

def microtubule(centre, axis_rot, length_n, scale=1.0, fray=True, kind='mt'):
    """13 protofilaments, 4 nm monomer pitch, 3-start helix (axial offset 12/13 nm per protofilament)."""
    R = 11.4 * scale; r = 2.55 * scale; pitch = 4.0 * scale
    Rm = rot(*axis_rot)
    out = []
    for p in range(13):
        th0 = 2 * math.pi * p / 13
        off = p * 12.0 / 13 * scale
        for i in range(length_n):
            t = i * pitch + off - length_n * pitch / 2
            th = th0; rad = R; ax = t
            if fray:
                k = i - (length_n - 5 - (p * 5) % 3)   # the last ~6 monomers peel outward ("ram's horn")
                if k > 0:
                    ang = 0.0; ax = (length_n - 5 - (p * 5) % 3) * pitch + off - length_n * pitch / 2; rad = R
                    # walk along a curl: each monomer turns a further 13 degrees outward
                    for j in range(k):
                        ang += math.radians(11 + 3 * j)
                        ax += pitch * math.cos(ang); rad += pitch * math.sin(ang)
            loc = np.array([rad * math.cos(th), ax, rad * math.sin(th)])
            col = A_COL if (i % 2 == 0) else B_COL
            out.append((Rm @ loc + centre, r, col, kind))
    return out

# the main microtubule: lower left to upper right, tilted a little in depth; frayed end at the upper right
SP += microtubule(np.array([0.0, 0.0, 0.0]), (math.radians(-14), math.radians(10), math.radians(-146)), 44)
# a second microtubule far behind, soft in the haze, for depth
SP += microtubule(np.array([84.0, 40.0, 80.0]), (math.radians(16), math.radians(-6), math.radians(-162)), 26, scale=0.9, fray=False)

def oligomer(c, n, orient, rr=3.1, ring=5.4):
    Rm = rot(*orient); out = []
    for k in range(n):
        a = 2 * math.pi * k / 6
        out.append((Rm @ np.array([ring * math.cos(a), ring * math.sin(a), 0]) + c, rr, T_COL, 'tau'))
    return out
# tau rings released around the tube (complete hexamers and some still forming), at several depths
SP += oligomer(np.array([66.0, -36.0, -16.0]), 6, (0.35, 0.25, 0.3))
SP += oligomer(np.array([-44.0, -34.0, -10.0]), 6, (0.5, -0.3, 0.8))
SP += oligomer(np.array([42.0, 44.0, 6.0]), 6, (1.0, 0.4, 0.2))
SP += oligomer(np.array([-66.0, 40.0, -6.0]), 4, (0.4, 0.8, -0.6))
SP += oligomer(np.array([92.0, -84.0, 14.0]), 3, (0.8, 0.2, 0.3))
SP += oligomer(np.array([78.0, 14.0, 22.0]), 2, (0.2, 0.6, 1.0))
SP += [(np.array([-18.0, -74.0, -18.0]), 3.1, T_COL, 'tau')]

C = np.array([s[0] for s in SP]); RAD = np.array([s[1] for s in SP]); COL = np.array([s[2] for s in SP])
KIND = np.array([s[3] for s in SP])
# frame the cluster: centre its projected bbox in the image
lo = (C[:, :2] - RAD[:, None]).min(0); hi = (C[:, :2] + RAD[:, None]).max(0)
mid = (lo + hi) / 2
print('extent nm', hi - lo, 'px', (hi - lo) * PX)
SX = W / 2 + (C[:, 0] - mid[0]) * PX; SY = H / 2 + (C[:, 1] - mid[1]) * PX; RP = RAD * PX
Z = C[:, 2]
FOCUS = 0.0
L = nrm([-0.55, -0.7, -0.55])     # key light from the upper left, towards the viewer
H2 = nrm(L + np.array([0, 0, -1.0]))
RIM = np.array([0.30, 0.36, 1.0])

slices = np.linspace(Z.min() - 0.1, Z.max() + 0.1, 9)
acc = np.zeros((H, W, 4))
for si in range(len(slices) - 2, -1, -1):          # far to near
    sel = np.where((Z >= slices[si]) & (Z < slices[si + 1]))[0]
    if len(sel) == 0: continue
    zb = np.full((H, W), np.inf); nx = np.zeros((H, W)); ny = np.zeros((H, W)); nz = np.zeros((H, W))
    cb = np.zeros((H, W, 3)); kt = np.zeros((H, W))
    for i in sel:
        x0, x1 = int(max(0, SX[i] - RP[i] - 1)), int(min(W, SX[i] + RP[i] + 2))
        y0, y1 = int(max(0, SY[i] - RP[i] - 1)), int(min(H, SY[i] + RP[i] + 2))
        if x0 >= x1 or y0 >= y1: continue
        yy, xx = np.mgrid[y0:y1, x0:x1].astype(float)
        dx = (xx + .5 - SX[i]) / RP[i]; dy = (yy + .5 - SY[i]) / RP[i]
        d2 = dx * dx + dy * dy; m = d2 < 1
        h = np.sqrt(np.clip(1 - d2, 0, 1))
        z = Z[i] * PX - h * RP[i]
        win = m & (z < zb[y0:y1, x0:x1])
        zb[y0:y1, x0:x1][win] = z[win]
        nx[y0:y1, x0:x1][win] = dx[win]; ny[y0:y1, x0:x1][win] = dy[win]; nz[y0:y1, x0:x1][win] = -h[win]
        cb[y0:y1, x0:x1][win] = COL[i]; kt[y0:y1, x0:x1][win] = 1.0 if KIND[i] == 'tau' else 0.0
    hit = np.isfinite(zb)
    # screen-space AO: pixels deeper than their neighbourhood are occluded
    zf = np.where(hit, zb, np.nan)
    zfill = np.where(hit, zb, np.nanmax(zf[hit]) + 40 * S)
    blur = gblur(zfill, 9 * S)
    ao = np.clip(1 - np.clip(zfill - blur, 0, None) / (14 * S), 0.35, 1)
    ndl = nx * L[0] + ny * L[1] + nz * L[2]
    dif = np.clip((ndl + 0.35) / 1.35, 0, 1)
    ndh = np.clip(nx * H2[0] + ny * H2[1] + nz * H2[2], 0, 1)
    spec = ndh ** 48
    fres = (1 - np.abs(nz)) ** 2.6
    col = cb * (0.16 + 0.92 * dif[..., None]) * ao[..., None]
    col += spec[..., None] * (0.55 - 0.15 * kt[..., None])
    col += fres[..., None] * RIM * (0.42 + 0.5 * kt[..., None])
    col += kt[..., None] * np.array([0.05, 0.06, 0.22])          # the tau rings glow faintly
    # depth haze: far slices fade towards the ink
    zc = (slices[si] + slices[si + 1]) / 2
    haze = np.clip((zc - FOCUS) / 40.0, 0, 0.55)
    col = col * (1 - haze) + np.array([0.04, 0.045, 0.14]) * haze
    a = hit.astype(float)
    # antialias the silhouette
    layer = np.dstack([np.clip(col, 0, 1) * a[..., None], a])
    rad = abs(zc - FOCUS) * 0.13 * PX / 6.4 * S + 0.6 * S
    lay = np.dstack([gblur(layer[..., c], float(rad)) for c in range(4)])   # premultiplied rgb + alpha
    acc[..., :3] = lay[..., :3] + acc[..., :3] * (1 - lay[..., 3:4])
    acc[..., 3] = lay[..., 3] + acc[..., 3] * (1 - lay[..., 3])
rgb = np.where(acc[..., 3:4] > 1e-4, acc[..., :3] / np.maximum(acc[..., 3:4], 1e-4), 0)
outi = np.dstack([np.clip(rgb, 0, 1), acc[..., 3]])
Image.fromarray((outi * 255).astype(np.uint8), 'RGBA').save(OUT)
print('wrote', OUT)
