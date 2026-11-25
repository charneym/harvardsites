#!/usr/bin/env python3
"""Render the hero: Applications Uniques' own product, a PID gas sensor, as a studio product shot (HOME_BRIEF option c).
The form follows their published sensor renders (Heatwave / Rainbow series: a short round can with a coloured label band,
a white filter face on top and gold pins below). Ray-traced analytically with numpy: brushed stainless steel, a label band
in AU's logo teal with a thin gold line, a white PTFE filter face, a black base and three gold-plated pins. Studio lighting
(a warm key softbox, a cool teal strip on the right, a soft rim). No text or third-party branding. Transparent ground.
Usage: render.py out.png [size]"""
import numpy as np, sys
from PIL import Image

OUT = sys.argv[1] if len(sys.argv) > 1 else 'hero.png'
N = int(sys.argv[2]) if len(sys.argv) > 2 else 1100
SS = 3
W = H = N * SS

def nrm(v):
    return v / np.linalg.norm(v, axis=-1, keepdims=True)
def ss(a, b, x):
    t = np.clip((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t)

# ---- camera (world: y up). Object axis tilted a little toward the viewer's right.
elev = np.radians(21); dist = 9.0
eye = np.array([0, np.sin(elev) * dist, np.cos(elev) * dist])
tgt = np.array([0, 0.26, 0])
fw = nrm(tgt - eye); rt = nrm(np.cross(fw, [0, 1, 0])); up = np.cross(rt, fw)
fov = np.radians(17.5)
ys, xs = np.mgrid[0:H, 0:W]
u = ((xs + .5) / W * 2 - 1) * np.tan(fov / 2)
v = (1 - (ys + .5) / H * 2) * np.tan(fov / 2)
D = nrm(fw[None, None] + u[..., None] * rt + v[..., None] * up)
O = np.broadcast_to(eye, D.shape)

# object rotation (object -> world): tilt about z, then a turn about y
tz = np.radians(-4); ty = np.radians(18)
Rz = np.array([[np.cos(tz), -np.sin(tz), 0], [np.sin(tz), np.cos(tz), 0], [0, 0, 1]])
Ry = np.array([[np.cos(ty), 0, np.sin(ty)], [0, 1, 0], [-np.sin(ty), 0, np.cos(ty)]])
M = Rz @ Ry
o = O @ M  # world -> object (M orthonormal: v_obj = M^T v_world  <=> row-vector v @ M)
d = D @ M

INF = 1e9
tbest = np.full(D.shape[:2], INF); nbest = np.zeros(D.shape); mat = np.zeros(D.shape[:2], np.int8); pobj = np.zeros(D.shape)

def hit(t, n, m, p):
    global tbest
    ok = (t > 1e-4) & (t < tbest)
    tbest = np.where(ok, t, tbest)
    for arr, val in ((nbest, n), (pobj, p)):
        arr[ok] = val[ok] if val.ndim == 3 else val
    mat[ok] = m

def cyl(cx, cz, r, y0, y1, m):
    ox = o[..., 0] - cx; oz = o[..., 2] - cz
    a = d[..., 0] ** 2 + d[..., 2] ** 2; b = 2 * (ox * d[..., 0] + oz * d[..., 2]); c = ox ** 2 + oz ** 2 - r * r
    disc = b * b - 4 * a * c; ok = disc > 0; sq = np.sqrt(np.where(ok, disc, 0))
    for t in ((-b - sq) / (2 * a + 1e-12), (-b + sq) / (2 * a + 1e-12)):
        p = o + t[..., None] * d; inr = ok & (p[..., 1] >= y0) & (p[..., 1] <= y1)
        n = np.stack([(p[..., 0] - cx) / r, np.zeros_like(t), (p[..., 2] - cz) / r], -1)
        hit(np.where(inr, t, INF), n, m, p)

def disk(y, r0, r1, m, cx=0, cz=0, up=True):
    t = (y - o[..., 1]) / np.where(np.abs(d[..., 1]) < 1e-9, 1e-9, d[..., 1])
    p = o + t[..., None] * d; rr = np.hypot(p[..., 0] - cx, p[..., 2] - cz)
    ok = (rr >= r0) & (rr <= r1)
    n = np.zeros(D.shape); n[..., 1] = 1 if up else -1
    hit(np.where(ok, t, INF), n, m, p)

# materials: 1 steel side, 2 teal label, 3 steel top rim, 4 PTFE filter, 5 dark seal ring, 6 black base, 7 gold pin
YT = 1.0
cyl(0, 0, 1.0, 0.06, YT, 1)            # body side (label decided by height below)
disk(YT, 0.84, 1.0, 3)                  # top shoulder
cyl(0, 0, 0.84, YT, YT + 0.07, 3)       # raised cap wall
disk(YT + 0.07, 0.66, 0.84, 3)          # cap face (steel ring)
disk(YT + 0.07, 0.60, 0.66, 5)          # seal ring
disk(YT + 0.045, 0.0, 0.60, 4)          # filter face, slightly recessed
cyl(0, 0, 0.60, YT + 0.045, YT + 0.07, 5)  # recess wall
cyl(0, 0, 0.93, -0.10, 0.06, 6)         # black base
disk(-0.10, 0, 0.93, 6, up=False)
for k in range(3):
    a = np.radians(90 + 120 * k)
    px, pz = 0.5 * np.cos(a), 0.5 * np.sin(a)
    cyl(px, pz, 0.06, -0.55, -0.06, 7)
    disk(-0.55, 0, 0.06, 7, px, pz, up=False)

hitm = tbest < INF
side = mat == 1
yb = pobj[..., 1]
label = side & (yb > 0.30) & (yb < 0.80)
mat[label] = 2
gline = side & (((yb > 0.25) & (yb < 0.275)) | ((yb > 0.825) & (yb < 0.85)))
mat[gline] = 7

# world-space normals and views
Nw = nrm(nbest @ M.T + 1e-12)
V = -D
NdV = np.clip((Nw * V).sum(-1), 0, 1)
R = nrm(2 * (Nw * V).sum(-1, keepdims=True) * Nw - V)

KEY = nrm(np.array([-0.62, 0.62, 0.48])); STRIP = nrm(np.array([0.95, 0.18, 0.25])); RIM = nrm(np.array([0.25, 0.45, -1.0]))
def box(az, el, a0, a1, e0, e1, soft):
    return ss(a0 - soft, a0 + soft, az) * (1 - ss(a1 - soft, a1 + soft, az)) * ss(e0 - soft, e0 + soft, el) * (1 - ss(e1 - soft, e1 + soft, el))
def env(r, rough):
    """studio environment: dark teal room; a tall neutral softbox front-left, a narrow cool teal strip right,
    a broad overhead softbox, a dim warm card behind, and a low dark floor"""
    az = np.degrees(np.arctan2(r[..., 0], r[..., 2])); el = np.degrees(np.arcsin(np.clip(r[..., 1], -1, 1)))
    sf = 4 + 14 * rough
    base = np.stack([0.018 + 0.02 * ss(-30, 60, el), 0.036 + 0.04 * ss(-30, 60, el), 0.046 + 0.045 * ss(-30, 60, el)], -1)
    left = box(az, el, -95, -38, -35, 48, sf)
    strip = box(az, el, 58, 72, -45, 40, sf * .7)
    top = box(az, el, -70, 20, 50, 84, sf * 1.6) * 0.75 + ss(70, 90, el) * 0.25
    back = box(np.abs(az), el, 125, 220, 12, 42, sf * 1.6) * (0.45 + 0.55 * ss(-0.6, 0.6, -r[..., 0]))
    front = box(az, el, -15, 25, -40, 5, sf) * 0.22
    return (base + left[..., None] * np.array([2.1, 2.08, 2.02]) * (1 - .3 * rough) + strip[..., None] * np.array([0.45, 1.25, 1.45])
            + top[..., None] * np.array([1.15, 1.15, 1.12]) + back[..., None] * np.array([0.95, 0.97, 0.98])
            + front[..., None] * np.array([0.9, 0.9, 0.9]))

def diffuse_light(n):
    k = np.clip((n * KEY).sum(-1), 0, 1); st = np.clip((n * STRIP).sum(-1), 0, 1); up_ = np.clip(n[..., 1], 0, 1)
    return ((0.10 + 1.05 * k)[..., None] * np.array([1.0, 0.97, 0.92]) + (0.30 * st)[..., None] * np.array([0.35, 0.85, 0.95])
            + (0.06 + 0.06 * up_)[..., None] * np.array([0.5, 0.75, 0.8]))

rng = np.random.default_rng(7)
col = np.zeros(D.shape)
fres = lambda f0: f0 + (1 - f0) * (1 - NdV) ** 5

# brushed steel (side and top): circumferential brushing = fine streaks across height (side) / radius (top)
ang = np.arctan2(pobj[..., 2], pobj[..., 0])
rad = np.hypot(pobj[..., 0], pobj[..., 2])
streak_side = np.interp(yb, np.linspace(-1, 2, 6000), rng.normal(0, 1, 6000))
streak_top = np.interp(rad, np.linspace(0, 1.2, 4000), rng.normal(0, 1, 4000))
steel = np.isin(mat, (1, 3))
streak = np.where(mat == 1, streak_side, streak_top)
e_steel = env(R, 0.45) * np.array([0.80, 0.82, 0.83])
col = np.where(steel[..., None], e_steel * (1 + 0.07 * streak)[..., None] * (0.55 + 0.45 * fres(0.6))[..., None], col)

# teal label: painted, satin
teal = np.array([9, 109, 140]) / 255.0
teal_lin = teal ** 2.2
dl = diffuse_light(Nw)
lab_c = teal_lin * dl * 1.0 + env(R, 0.55) * (0.07 + fres(0.04))[..., None] * 0.85
col = np.where((mat == 2)[..., None], lab_c, col)

# PTFE filter: soft white, faint fibre texture
fib = rng.normal(0, 1, D.shape[:2])
fib = (fib + np.roll(fib, 1, 0) + np.roll(fib, 1, 1) + np.roll(fib, -1, 0)) / 4
ptfe = np.array([0.86, 0.87, 0.86]) * dl * (1 + 0.04 * fib)[..., None] + env(R, 0.9) * fres(0.03)[..., None] * 0.4
col = np.where((mat == 4)[..., None], ptfe, col)

# dark seal ring and black base: glossy black
blk = np.array([0.018, 0.022, 0.024]) * dl + env(R, 0.35) * fres(0.05)[..., None] * 0.9
col = np.where(np.isin(mat, (5, 6))[..., None], blk, col)

# gold (pins and the thin lines): gold-tinted reflection
gold = np.array([1.0, 0.76, 0.36])
gc = env(R, 0.3) * gold * (0.45 + 0.55 * fres(0.7))[..., None] + 0.05 * gold * dl
col = np.where((mat == 7)[..., None], gc, col)

# soft self-shadow of the cap / body onto the pins (pins sit in the body's shadow from the key light)
pin_sh = (mat == 7) & (yb < -0.09)
col[pin_sh] *= 0.55
# ambient occlusion where the top rim meets the cap and in the filter recess
ao = np.ones(D.shape[:2])
ao = np.where((mat == 3) & (np.abs(yb - YT) < 0.004), 0.7 + 0.3 * ss(0.84, 0.92, rad), ao)
ao = np.where((mat == 4), 0.62 + 0.38 * ss(0.60, 0.40, rad), ao)
col *= ao[..., None]

# tone map (filmic-ish) and gamma
col = np.clip(col, 0, None)
col = col / (1 + col * 0.42) * 1.18
col = np.clip(col, 0, 1) ** (1 / 2.2)

img = np.concatenate([col, hitm[..., None].astype(float)], -1)
img = (img * 255).round().astype(np.uint8)
# premultiplied downsample for clean edges
pm = img.astype(np.float32); pm[..., :3] *= pm[..., 3:4] / 255
pm = pm.reshape(N, SS, N, SS, 4).mean((1, 3))
a = pm[..., 3:4]; rgb = np.where(a > 0, pm[..., :3] / np.maximum(a, 1e-6) * 255, 0)
out = np.concatenate([np.clip(rgb, 0, 255), a], -1).astype(np.uint8)
im = Image.fromarray(out, 'RGBA')
bb = im.getbbox(); im = im.crop((max(0, bb[0] - 8), max(0, bb[1] - 8), min(N, bb[2] + 8), min(N, bb[3] + 8)))
im.save(OUT)
print(OUT, im.size)
