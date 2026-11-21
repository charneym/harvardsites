#!/usr/bin/env python3
"""Sequitur Health hero (HOME_BRIEF update 2c: a crafted render of the real mechanism). One drop of whole blood resting on
the sample well of a single-use sensor strip: the company "has developed demonstrably excellent technology that enables
accurate measurement of the metabolite in a single drop of blood", with "consumable, single use sensors and sensor readers"
and "direct point of care measurement from whole blood" (NIH RePORTER 5SB1HD116629, R44HD107897; NSF 1914240).
The strip itself is generic (printed electrodes under a cover film); it does not depict Sequitur's own product design.
Numpy sphere tracing of SDFs; saved with ALPHA (no ground of its own, DJ). Usage: python3 render.py W H out.png [SS]"""
import sys, numpy as np
from PIL import Image

W = int(sys.argv[1]) if len(sys.argv) > 1 else 800
H = int(sys.argv[2]) if len(sys.argv) > 2 else 640
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 1
FW, FH = W, H; W, H = W * SS, H * SS

def nrm(v): return v / np.linalg.norm(v, axis=-1, keepdims=True)
def sat(x): return np.clip(x, 0, 1)
def smst(a, b, x):
    t = sat((x - a) / (b - a)); return t * t * (3 - 2 * t)

# ---- scene, strip long axis along x, top face at y=T, sample well near the +x tip
L, Wd, T = 2.15, .42, .05          # half length, half width, half thickness (strip centred at y=0)
WX, WR = 1.5, .3                 # well centre x, drop footprint radius
DH = .15                            # drop height above the top face
ROT = np.radians(24)              # strip turned in the ground plane
cR, sR = np.cos(ROT), np.sin(ROT)

def to_local(p):
    x = p[..., 0] * cR + p[..., 2] * sR; z = -p[..., 0] * sR + p[..., 2] * cR
    return np.stack([x, p[..., 1], z], -1)

def sd_strip(q):
    r = .1
    dx = np.abs(q[..., 0]) - (L - r); dz = np.abs(q[..., 2]) - (Wd - r)
    ox = np.maximum(dx, 0); oz = np.maximum(dz, 0)
    d2 = np.sqrt(ox * ox + oz * oz) + np.minimum(np.maximum(dx, dz), 0) - r
    dy = np.abs(q[..., 1]) - T
    e = .012
    a = np.maximum(d2 + e, 0); b = np.maximum(dy + e, 0)
    return np.sqrt(a * a + b * b) + np.minimum(np.maximum(d2 + e, dy + e), 0) - e

def sd_drop(q):
    # a sessile drop: a squashed sphere cap sitting on the top face, with a tiny meniscus foot
    c = np.stack([q[..., 0] - WX, (q[..., 1] - T) , q[..., 2]], -1)
    s = np.array([WR, DH * 1.55, WR])
    k = np.linalg.norm(c / s, axis=-1); k1 = np.linalg.norm(c / (s * s), axis=-1)
    e = k * (k - 1) / np.maximum(k1, 1e-6)
    cut = -(q[..., 1] - T) + .002          # only above the face
    return np.maximum(e, cut)

def scene(p):
    q = to_local(p)
    a = sd_strip(q); b = sd_drop(q)
    return np.minimum(a, b), (b < a)

def normal(p):
    e = 1.5e-3
    n = np.stack([scene(p + np.array([e, 0, 0]))[0] - scene(p - np.array([e, 0, 0]))[0],
                  scene(p + np.array([0, e, 0]))[0] - scene(p - np.array([0, e, 0]))[0],
                  scene(p + np.array([0, 0, e]))[0] - scene(p - np.array([0, 0, e]))[0]], -1)
    return nrm(n)

# ---- camera
CAM = np.array([1.6, 2.2, 4.4]); TGT = np.array([0.15, -.05, 0.0]); FOV = 36
fw = nrm(TGT - CAM); rt = nrm(np.cross(fw, [0, 1, 0])); up = np.cross(rt, fw)
ys, xs = np.mgrid[0:H, 0:W]
ar = W / H; tf = np.tan(np.radians(FOV / 2))
u = ((xs + .5) / W * 2 - 1) * tf * ar; v = (1 - (ys + .5) / H * 2) * tf
D = nrm(u[..., None] * rt + v[..., None] * up + fw).reshape(-1, 3)
O = np.broadcast_to(CAM, D.shape).copy()

t = np.zeros(len(D)); hit = np.zeros(len(D), bool); alive = np.ones(len(D), bool)
for i in range(220):
    idx = np.where(alive)[0]
    if not len(idx): break
    d, _ = scene(O[idx] + D[idx] * t[idx, None])
    t[idx] += d * .9
    h = d < 6e-4; hit[idx[h]] = True; alive[idx[h]] = False
    alive[idx[t[idx] > 9]] = False
P = O + D * t[:, None]

# ---- environment: a dark studio with a large soft key upper left, a strip light behind right, a faint fill
KEY = nrm(np.array([-.55, .8, -.25])); RIM = nrm(np.array([.75, .45, -.5])); FIL = nrm(np.array([.3, .6, .75]))
def env(r):
    kx = r @ nrm(np.cross(KEY, [0, 0, 1])); ky = r @ nrm(np.cross(KEY, nrm(np.cross(KEY, [0, 0, 1]))))
    k = smst(.0, .02, r @ KEY) * smst(.30, .26, np.abs(kx)) * smst(.18, .15, np.abs(ky)) * 3.4
    rm = smst(.93, .985, r @ RIM) * 1.6
    fx = r @ nrm(np.cross(FIL, [0, 1, 0])); fy = r @ nrm(np.cross(FIL, nrm(np.cross(FIL, [0, 1, 0]))))
    f = smst(.0, .02, r @ FIL) * smst(.42, .39, np.abs(fx)) * smst(.1, .08, np.abs(fy)) * .7
    sky = sat(r[..., 1]) * .05
    return (k[..., None] * np.array([1, .97, .92]) + rm[..., None] * np.array([.95, .9, .82]) +
            f[..., None] * np.array([.8, .82, .85]) + sky[..., None] * np.array([.6, .58, .55]))

col = np.zeros((len(D), 3)); A = np.zeros(len(D))
hi = np.where(hit)[0]
p = P[hi]; n = normal(p); vdir = -D[hi]; isd = scene(p)[1]
q = to_local(p)

def shadow(pp, ld, maxt=3):
    s = np.ones(len(pp)); tt = np.full(len(pp), .01)
    for i in range(48):
        d, _ = scene(pp + ld * tt[:, None])
        s = np.minimum(s, 12 * d / tt); tt += np.clip(d, .004, .15)
        if (tt > maxt).all(): break
    return sat(s)

def ao(pp, nn):
    o = np.zeros(len(pp))
    for i in range(1, 6):
        hh = .025 * i; d, _ = scene(pp + nn * hh); o += (hh - d) / (2 ** i)
    return sat(1 - 3 * o)

ref = nrm(D[hi] - 2 * (D[hi] * n).sum(-1)[:, None] * n)
fres = .04 + .96 * (1 - sat((vdir * n).sum(-1))) ** 5

# --- strip surface: printed electrodes under a translucent cover film
sm = ~isd
c = np.zeros((len(hi), 3)); spec_k = np.zeros(len(hi)); rough = np.zeros(len(hi))
top = sm & (n[:, 1] > .9) & (q[:, 1] > T - .01)
xq, zq = q[:, 0], q[:, 2]
grain = (np.sin(xq * 310) * np.sin(zq * 270) * .5 + .5) * .015
base = np.array([.8, .79, .76]) - grain[:, None]
c[sm] = base[sm]; spec_k[sm] = .35; rough[sm] = 1
# three carbon traces from the contact end to the well
tr = np.zeros(len(hi), bool)
for zc in (-.17, 0, .17):
    on = (np.abs(zq - zc) < .035) & (xq > -L + .12) & (xq < WX - .02)
    tr |= on
# working / counter / reference pads in the well
r_w = np.hypot(xq - WX, zq)
well = r_w < WR * .92
tr |= well & ((np.abs(zq) < .055) | (r_w > WR * .62))
pad = (xq < -L + .55) & (xq > -L + .1) & ((np.abs(zq + .17) < .06) | (np.abs(zq) < .06) | (np.abs(zq - .17) < .06))
m = top & tr; c[m] = np.array([.13, .125, .12]); spec_k[m] = .2
m = top & pad; c[m] = np.array([.5, .49, .47]); spec_k[m] = 2.2; rough[m] = .5   # silver-ink contacts, warm
# the cover film over the middle (Sequitur's sand #938870), with a round opening over the well
film = (xq > -L + .7) & (xq < WX + .02) & ~(r_w < WR * 1.12)
m = top & film; c[m] = np.array([.56, .5, .4]) * (1 + grain[m, None] * 4); spec_k[m] = .9
ar_ = top & film & (((np.abs(zq) < .012) & (xq > WX - .75) & (xq < WX - .42)) | ((np.abs(np.abs(zq) - (WX - .42 - xq) * .9) < .012) & (xq > WX - .55) & (xq < WX - .42)))
c[ar_] = np.array([.3, .27, .22])
bd = top & film & (np.abs(np.abs(zq) - (Wd - .07)) < .006)
c[bd] = np.array([.38, .34, .28])
ring = top & (np.abs(r_w - WR * 1.12) < .012) & (xq < WX + .3)
c[ring] *= .7
# sides of the strip: the laminate edge
side = sm & ~top
c[side] = np.array([.62, .6, .56])

# red caustic where light passes through the drop and lands on the strip (away from the key)
dk = np.stack([xq - WX, zq], -1); kl = to_local(KEY[None])[0]; kd = -np.array([kl[0], kl[2]]); kd = kd / np.linalg.norm(kd)
along = dk @ kd; perp = dk @ np.array([-kd[1], kd[0]])
c = c + (np.where(top, 1, 0) * np.exp(-((along - WR * 1.1) / (WR * .45)) ** 2 - (perp / (WR * .6)) ** 2) * (along > WR * .5))[:, None] * np.array([.55, .05, .04])
# lighting for the strip
sh_k = shadow(p + n * .004, KEY); occ = ao(p, n)
dif = sat((n * KEY).sum(-1)) * 1.05 * sh_k + sat((n * RIM).sum(-1)) * .35 + .12
lit = c * (dif * occ)[:, None]
hlf = nrm(KEY + vdir); spe = sat((n * hlf).sum(-1)) ** np.where(rough < .8, 90, 26) * sh_k
lit += (spe * spec_k * .35)[:, None] * np.array([1, .97, .92])
lit += ((fres * .8 + .06) * spec_k * .3)[:, None] * env(ref)

# --- the drop: dark glossy whole blood with a deep red glow where light passes through its edge
dm = isd
if dm.any():
    nd = n[dm]; vd = vdir[dm]; rd = ref[dm]; fd = fres[dm]
    thick = sat((p[dm, 1] - T) / DH)                      # thicker toward the crown
    ndl = sat((nd * KEY).sum(-1))
    back = sat(-(nd * KEY).sum(-1))                       # light transmitted through the far rim
    rim = (1 - sat((nd * vd).sum(-1))) ** 2.2
    body = np.array([.2, .012, .02]) * (.3 + .7 * ndl)[:, None] * (1 - .7 * thick)[:, None]
    glow = np.array([.7, .05, .05]) * (back * .9 * (1 - thick) ** 2 + rim * .3)[:, None]
    # light refracted and pooled on the strip at the foot of the drop (caustic on the side away from the key)
    bounce = sat(-nd[:, 1] * .0 + (1 - thick)) ** 3 * sat(1 - (nd * KEY).sum(-1)) * .22
    glow = glow + bounce[:, None] * np.array([.8, .1, .08])
    rf = env(rd) * (.035 + .96 * fd)[:, None] * 1.25
    hl = nrm(KEY + vd); sp = sat((nd * hl).sum(-1)) ** 420 * 4.5 + sat((nd * nrm(RIM + vd)).sum(-1)) ** 260 * 1.6
    lit[dm] = body + glow + rf + sp[:, None] * np.array([1, .97, .94])

col[hi] = lit; A[hi] = 1

# ---- soft shadow of strip and drop on an invisible ground, kept as partial alpha over the page ink
G = -.35
miss = np.where(~hit & (D[:, 1] < 0))[0]
if len(miss):
    tg = (G - O[miss, 1]) / D[miss, 1]; pg = O[miss] + D[miss] * tg[:, None]
    s = np.zeros(len(miss)); n_s = 10
    rng = np.random.default_rng(3)
    for j in range(n_s):
        jit = nrm(KEY + rng.normal(0, .09, 3))
        s += 1 - shadow(pg + np.array([0, .002, 0]), np.broadcast_to(jit, pg.shape).copy(), 4)
    s /= n_s
    # contact darkness falls off with distance from the strip
    A[miss] = np.maximum(A[miss], s * .55)
    col[miss] = 0

img = col.reshape(H, W, 3); A = A.reshape(H, W)
# filmic tone map, keep the deep red
img = img / (1 + img * .55); img = sat(img) ** (1 / 2.2)
rgba = np.dstack([img, A[..., None] if A.ndim == 3 else A])
out = Image.fromarray((sat(rgba) * 255).astype(np.uint8), 'RGBA')
if SS > 1: out = out.resize((FW, FH), Image.LANCZOS)
out.save(OUT); print('wrote', OUT, out.size)
