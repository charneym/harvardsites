#!/usr/bin/env python3
"""Krahl hero (HOME_BRIEF update 2c: a crafted render of the firm's real product). One half of a cast-iron blow
mould for a glass bottle, the kind Modell- und Formenbau E. Krahl makes for manual and machine glass production
(krahl.de > Leistungen > Formenbau: Formen fuer die manuelle und maschinelle Glasfertigung, aus Gusseisen ...;
CNC und konventionell bearbeitet). The outside is a half-cylinder of grey cast iron with a sand-cast skin; the
parting face is machined flat; the bottle-shaped cavity is turned and polished, with the neck channel running out
through the top face; two guide-pin bores sit in the parting face. Seen from front right and a little above.
Sphere-traced signed distance field, orthographic camera, image-based metal shading, SDF ambient occlusion.
Rendered with REAL alpha. Usage: python3 render.py W H out.png [SS]"""
import sys, math, numpy as np
from PIL import Image

W = int(sys.argv[1]) if len(sys.argv) > 1 else 900
H = int(sys.argv[2]) if len(sys.argv) > 2 else 1100
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 2
FW, FH = W, H; W, H = W * SS, H * SS

RO, HH = 1.0, 1.42          # block outer radius, half height
YB = -1.18                  # cavity floor (base thickness .24)
def prof(y):
    """bottle radius along the axis: body, shoulder, neck, a small bead under the finish"""
    rb, rn = .60, .205
    body = np.full_like(y, rb)
    s = np.clip((y - .18) / (.78 - .18), 0, 1); s = s * s * (3 - 2 * s)
    r = rb + (rn - rb) * s
    bead = .035 * np.exp(-((y - 1.16) / .045) ** 2)
    r = r + bead
    # rounded heel at the floor
    hz = np.clip((y - YB) / .13, 0, 1)
    r = r - (1 - np.sqrt(np.clip(1 - (1 - hz) ** 2, 0, 1))) * .13
    return np.where(y < .18, body - (1 - np.sqrt(np.clip(1 - (1 - hz) ** 2, 0, 1))) * .13, r)

PINS = [(-.80, .98), (.80, .98), (-.80, -.98), (.80, -.98)]
def sdf(p):
    x, y, z = p[..., 0], p[..., 1], p[..., 2]
    rxz = np.sqrt(x * x + z * z)
    # rounded half-cylinder block: cylinder (radius RO, half height HH) cut by the parting plane z <= 0
    dc = np.maximum(rxz - RO, np.abs(y) - HH)
    d = np.maximum(dc, z)
    # small chamfer on the top and bottom rims of the cylinder
    d = np.maximum(d, (rxz - RO + np.abs(y) - HH + .05) * .7071)
    # cavity: solid of revolution, open through the top
    cav = np.maximum(rxz - prof(y), YB - y)
    d = np.maximum(d, -cav)
    # guide-pin bores in the parting face
    for (px, py) in PINS:
        bo = np.maximum(np.sqrt((x - px) ** 2 + (y - py) ** 2) - .062, -z - .22)
        d = np.maximum(d, -bo)
    return d

def normal(p):
    e = 1.2e-3
    n = np.stack([sdf(p + np.array([e, 0, 0])) - sdf(p - np.array([e, 0, 0])),
                  sdf(p + np.array([0, e, 0])) - sdf(p - np.array([0, e, 0])),
                  sdf(p + np.array([0, 0, e])) - sdf(p - np.array([0, 0, e]))], -1)
    return n / (np.linalg.norm(n, axis=-1, keepdims=True) + 1e-12)

def rot(yaw, pitch):
    cy, sy, cp, sp = math.cos(yaw), math.sin(yaw), math.cos(pitch), math.sin(pitch)
    Ry = np.array([[cy, 0, sy], [0, 1, 0], [-sy, 0, cy]])
    Rx = np.array([[1, 0, 0], [0, cp, -sp], [0, sp, cp]])
    return Ry @ Rx

R = rot(math.radians(34), math.radians(-17))   # camera looks from front right, from above
fwd = R @ np.array([0, 0, -1.]); rgt = R @ np.array([1, 0, 0.]); up = R @ np.array([0, 1, 0.])
scale = 3.35 / H                               # world units per pixel (frame height 3.35)
jj, ii = np.mgrid[0:H, 0:W].astype(float)
sx = (ii - W / 2) * scale; sy = -(jj - H * .5) * scale + .02
org = (sx[..., None] * rgt + sy[..., None] * up) - fwd * 6
org = org.reshape(-1, 3); dirv = np.broadcast_to(fwd, org.shape)

N = org.shape[0]; t = np.zeros(N); hit = np.zeros(N, bool); alive = np.ones(N, bool)
for it in range(220):
    idx = np.nonzero(alive)[0]
    if idx.size == 0: break
    p = org[idx] + dirv[idx] * t[idx, None]
    d = sdf(p)
    h = d < 4e-4
    hit[idx[h]] = True; alive[idx[h]] = False
    t[idx[~h]] += np.maximum(d[~h] * .72, 2e-4)
    far = t[idx] > 14; alive[idx[far]] = False
print('traced', hit.sum())

img = np.zeros((N, 3)); a = np.zeros(N)
hi = np.nonzero(hit)[0]
P = org[hi] + dirv[hi] * t[hi, None]
Nn = normal(P)
x, y, z = P[:, 0], P[:, 1], P[:, 2]
rxz = np.sqrt(x * x + z * z)
# surface classes
cav = (rxz < prof(y) + 3e-3) & (y > YB - 3e-3) & (z < -2e-3)
face = (np.abs(z) < 2.5e-3) & ~cav
bore = np.zeros_like(face)
for (px, py) in PINS: bore |= (np.sqrt((x - px) ** 2 + (y - py) ** 2) < .066) & (z < 2e-3)
face &= ~bore
top = (np.abs(y) > HH - 3e-3) & ~cav & ~face
skin = ~cav & ~face & ~bore & ~top

# ambient occlusion from the field
ao = np.ones(len(hi))
for k, dd in enumerate([.03, .07, .13, .22, .34]):
    ao -= (dd - sdf(P + Nn * dd)) * (1.6 / (k + 1.5))
ao = np.clip(ao, .25, 1)

rng = np.random.default_rng(11)
def vnoise(u, v, f, seed):
    g = np.random.default_rng(seed).random((64, 64))
    uu = (u * f) % 63; vv = (v * f) % 63
    i0 = uu.astype(int); j0 = vv.astype(int); fu = uu - i0; fv = vv - j0
    fu = fu * fu * (3 - 2 * fu); fv = fv * fv * (3 - 2 * fv)
    return (g[i0, j0] * (1 - fu) * (1 - fv) + g[i0 + 1, j0] * fu * (1 - fv) + g[i0, j0 + 1] * (1 - fu) * fv + g[i0 + 1, j0 + 1] * fu * fv)

V = -dirv[hi]
Rf = 2 * (Nn * V).sum(-1, keepdims=True) * Nn - V
# finite-distance studio: the reflected direction drifts with position, so flat faces carry a soft gradient
Rf = Rf + P * np.array([.30, .24, .10]); Rf /= np.linalg.norm(Rf, axis=-1, keepdims=True)
def env(r, blur):
    """studio environment: a large soft box above left, a long strip light right, a dark floor, cool fill"""
    ry = r[:, 1]
    base = .025 + .10 * np.clip(ry * .5 + .5, 0, 1) ** 1.6
    sb = np.array([-.55, .62, .56]); sb /= np.linalg.norm(sb)
    c1 = np.clip(r @ sb, 0, 1)
    soft = np.exp(-(1 - c1) / (.018 + .06 * blur)) * 2.6
    st = np.array([.9, .1, .42]); st /= np.linalg.norm(st)
    c2 = np.clip(r @ st, 0, 1)
    strip = np.exp(-(1 - c2) / (.01 + .05 * blur)) * 1.1
    lo = np.clip(-ry, 0, 1)
    # two tall vertical strip lights (left warm-white, right cool violet): read as long highlights on round walls
    rh = r[:, [0, 2]] / (np.linalg.norm(r[:, [0, 2]], axis=-1, keepdims=True) + 1e-9)
    vs1 = np.exp(-(1 - np.clip(rh @ np.array([-.62, .78]), 0, 1)) / (.004 + .03 * blur)) * 1.5 * np.clip(1 - np.abs(ry) * 1.4, 0, 1)
    vs2 = np.exp(-(1 - np.clip(rh @ np.array([.80, .60]), 0, 1)) / (.004 + .03 * blur)) * .8 * np.clip(1 - np.abs(ry) * 1.4, 0, 1)
    col = (base - .04 * lo)[:, None] * np.array([.92, .94, 1.0]) + soft[:, None] * np.array([1.0, .985, .96]) + strip[:, None] * np.array([.80, .78, .98]) + vs1[:, None] * np.array([1., .98, .95]) + vs2[:, None] * np.array([.70, .62, .98])
    return col

L1 = np.array([-.55, .62, .56]); L1 /= np.linalg.norm(L1)
L2 = np.array([.9, .1, .42]); L2 /= np.linalg.norm(L2)
nl1 = np.clip(Nn @ L1, 0, 1); nl2 = np.clip(Nn @ L2, 0, 1)
fres = (1 - np.clip((Nn * V).sum(-1), 0, 1)) ** 5

col = np.zeros((len(hi), 3))
# cast skin: dark grey iron, sand texture, matte with a little sheen
n1 = vnoise(x * 40 + z * 13, y * 40, 1, 3) * .6 + vnoise(x * 120 + z * 50, y * 120, 1, 4) * .4
alb = (.15 + .06 * (n1 - .5))[:, None] * np.array([.93, .94, 1.0])
e = env(Rf[skin], 1.0)
col[skin] = alb[skin] * (.06 + .85 * nl1[skin] + .35 * nl2[skin])[:, None] + e * (.07 + .2 * fres[skin, None])
# top face: machined (turned) flat, concentric marks
rr = rxz[top]
tm = .5 + .5 * np.sin(rr * 380 + vnoise(rr * 30, rr * 3, 1, 9) * 3)
alb_t = (.36 + .05 * tm)[:, None] * np.array([.95, .96, 1.0])
e = env(Rf[top], .55)
col[top] = alb_t * (.06 + .75 * nl1[top, None] + .2 * nl2[top, None]) + e * (.22 + .1 * tm[:, None])
# parting face: ground flat, fine straight grinding lines, brighter steel
gl = .5 + .5 * np.sin((x[face] * .3 + y[face]) * 420 + vnoise(x[face] * 8, y[face] * 8, 1, 5) * 6)
alb_f = (.34 + .04 * gl)[:, None] * np.array([.95, .965, 1.0])
e = env(Rf[face], .35 + .2 * gl[:, None].mean())
col[face] = alb_f * (.05 + .55 * nl1[face, None] + .18 * nl2[face, None]) + e * .42
# cavity: turned and polished, horizontal turning rings, strong reflections
ring = .5 + .5 * np.sin(y[cav] * 600)
alb_c = (.46 + .03 * ring)[:, None] * np.array([.96, .97, 1.0])
e = env(Rf[cav], .22)
col[cav] = alb_c * (.03 + .40 * nl1[cav, None] + .12 * nl2[cav, None]) + e * (.62 + .05 * ring[:, None])
# bores: dark
col[bore] = np.array([.06, .06, .07]) + env(Rf[bore], 1)[:, :] * .05
col *= ao[:, None] ** 1.15
# a key-light pool: brighter top left, falling off toward the bottom right
pool = np.clip(1.18 - .32 * np.sqrt((x + .5) ** 2 + ((y - .9) * .8) ** 2), .55, 1.2)
col *= pool[:, None]
# gentle tone map
col = col / (1 + col * .55) * 1.2
img[hi] = col; a[hi] = 1

img = img.reshape(H, W, 3); a = a.reshape(H, W)
rgb = np.clip(img, 0, 1) ** (1 / 2.2)
out = np.dstack([rgb * 255, a * 255]).astype(np.uint8)
im = Image.fromarray(out, 'RGBA')
if SS > 1: im = im.resize((FW, FH), Image.LANCZOS)
bb = im.getbbox(); print('bbox', bb, im.size)
im.save(OUT)
