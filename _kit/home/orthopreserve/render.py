#!/usr/bin/env python3
"""OrthoPreserve hero (HOME_BRIEF update 2c: a crafted render of the firm's own product). Their meniscus implant, as
shown in their own "Right Knee: Front View" figure: an ivory, C-shaped composite-biomaterial implant with the anatomical
wedge section of a native meniscus (thick at the periphery, thin at the inner rim, concave on top to seat the femoral
condyle, flat beneath on the tibial plateau), wider at the posterior horn. Ray-marched signed distance field with a
soft-matter material: wrap diffuse with a warm subsurface term, GGX-ish specular with Fresnel, a cool brand-blue rim,
SDF ambient occlusion, a faint circumferential surface lay and fine mottling (no cartoon-smooth surface). Saved with
real ALPHA, so it has no ground of its own (DJ/DP). Usage: python3 render.py W out.png"""
import sys, math, numpy as np
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 1400
OUT = sys.argv[2] if len(sys.argv) > 2 else 'hero.png'
H = int(W * .8); SS = 2; w, h = W * SS, H * SS
rng = np.random.default_rng(11)

# ---- value noise (3D, tileless) for micro texture ----
P = rng.permutation(256); P = np.concatenate([P, P]); G = rng.random(256)
def vnoise(x, y, z):
    xi, yi, zi = np.floor(x).astype(int) & 255, np.floor(y).astype(int) & 255, np.floor(z).astype(int) & 255
    xf, yf, zf = x - np.floor(x), y - np.floor(y), z - np.floor(z)
    u, v, t = xf*xf*(3-2*xf), yf*yf*(3-2*yf), zf*zf*(3-2*zf)
    def g(a, b, c): return G[P[P[P[(xi+a) & 255] + ((yi+b) & 255)] + ((zi+c) & 255)]]
    x00 = g(0,0,0)*(1-u) + g(1,0,0)*u; x10 = g(0,1,0)*(1-u) + g(1,1,0)*u
    x01 = g(0,0,1)*(1-u) + g(1,0,1)*u; x11 = g(0,1,1)*(1-u) + g(1,1,1)*u
    return (x00*(1-v) + x10*v)*(1-t) + (x01*(1-v) + x11*v)*t
def fbm(p, f=1., o=4):
    s, a, n = 0., .5, 0.
    for _ in range(o):
        s = s + a * vnoise(p[..., 0]*f, p[..., 1]*f, p[..., 2]*f); n += a; a *= .5; f *= 2.03
    return s / n

# ---- implant geometry (implant frame: x right, y back, z up; the C opens toward -y, the notch side) ----
T0, T1 = math.radians(-62), math.radians(222)          # arc from the anterior horn round to the posterior horn
SX = 1.12                                              # slightly oval outline (wider medio-laterally)
def sdf(p):
    x, y, z = p[..., 0] / SX, p[..., 1], p[..., 2]
    th = np.arctan2(y, x)
    th = np.where(th < T0 - (2*math.pi - (T1 - T0)) / 2, th + 2*math.pi, th)   # wrap at the middle of the gap
    thc = np.clip(th, T0, T1)
    a = (thc - T0) / (T1 - T0)                          # 0 anterior horn .. 1 posterior horn
    tr = np.clip(np.minimum(a, 1 - a) / .2, 0, 1); tr = tr*tr*(3-2*tr)
    Rc = (1.0 + .06 * np.cos(thc - 1.2)) * (.93 + .07 * tr)   # the horns turn slightly inward, as in a native meniscus
    Wd = (.36 + .20 * a**1.4) * (.55 + .45 * tr)
    Hh = (.34 + .12 * a) * (.5 + .5 * tr)
    r = np.hypot(x, y)
    d = r - (Rc - Wd * .55)                             # 0 at the inner rim, Wd at the periphery
    s = np.clip(d / np.maximum(Wd, 1e-3), 0, 1)
    top = Hh * (.10 + .90 * (s ** .9)) - .06 * np.sin(math.pi * s ** 1.2) * Hh
    dz_top = (z - top) * .8; dz_bot = -z; dr_in = -d; dr_out = d - Wd
    q = np.maximum.reduce([dz_top, dz_bot, dr_in, dr_out])
    rr = .045
    ox = np.maximum(dz_top, -rr) + rr; oy = np.maximum(dr_out, -rr) + rr
    sec = np.where((dz_top > -rr) & (dr_out > -rr), np.hypot(ox, oy) - rr, q)
    bx = np.maximum(dz_bot, -rr*.5) + rr*.5; by = np.maximum(dr_out, -rr*.5) + rr*.5
    sec = np.where((dz_bot > -rr*.5) & (dr_out > -rr*.5), np.maximum(sec, np.hypot(bx, by) - rr*.5), sec)
    e = np.maximum(T0 - th, th - T1) * r
    k = .5 * Hh                                        # horn tips rounded off, not cut
    return (np.hypot(np.maximum(sec + k, 0), np.maximum(e + k, 0)) + np.minimum(np.maximum(sec + k, e + k), 0) - k) * .9

def normal(p):
    eps = 1.5e-3; n = np.zeros_like(p)
    for i in range(3):
        dp = np.zeros(3); dp[i] = eps
        n[..., i] = sdf(p + dp) - sdf(p - dp)
    return n / np.maximum(np.linalg.norm(n, axis=-1, keepdims=True), 1e-9)

# ---- camera: three-quarter view from above, the C opening toward the lower left ----
yaw = math.radians(-24); el = math.radians(30); dist = 7.0; fov = math.radians(22)
tgt = np.array([0., .05, .12])
cam = tgt + dist * np.array([math.cos(el)*math.sin(yaw), -math.cos(el)*math.cos(yaw), math.sin(el)])
fw = (tgt - cam); fw /= np.linalg.norm(fw)
rt = np.cross(fw, [0, 0, 1.]); rt /= np.linalg.norm(rt); up = np.cross(rt, fw)
L_key = np.array([-.55, -.35, .76]); L_key /= np.linalg.norm(L_key)
L_fill = np.array([.7, -.2, .35]); L_fill /= np.linalg.norm(L_fill)
L_rim = np.array([.35, .9, .25]); L_rim /= np.linalg.norm(L_rim)
ALB = np.array([.90, .86, .78])                       # ivory polymer (their own figure)
SSS = np.array([.98, .72, .55])                       # warm subsurface tint
RIM = np.array([.30, .62, .95])                       # brand blue rim

img = np.zeros((h, w, 4), np.float32)
CH = 160
th_ = math.tan(fov / 2); asp = w / h
for y0 in range(0, h, CH):
    ys = np.arange(y0, min(h, y0 + CH))
    px, py = np.meshgrid((np.arange(w) + .5) / w * 2 - 1, 1 - (ys + .5) / h * 2)
    d = fw[None, None] + rt[None, None] * (px * th_ * asp)[..., None] + up[None, None] * (py * th_)[..., None]
    d /= np.linalg.norm(d, axis=-1, keepdims=True)
    t = np.full(px.shape, dist - 2.2); hit = np.zeros(px.shape, bool); alive = np.ones(px.shape, bool)
    for _ in range(140):
        if not alive.any(): break
        p = cam + d * t[..., None]
        ds = sdf(p)
        hit |= alive & (ds < 6e-4)
        alive &= ~hit & (t < dist + 2.6)
        t = np.where(alive, t + ds * .7, t)
    if not hit.any(): continue
    p = cam + d * t[..., None]; P_ = p[hit]; D_ = d[hit]
    n = normal(P_)
    # micro surface: circumferential lay (very faint) + fine mottling, perturbing normal and albedo
    ang = np.arctan2(P_[:, 1], P_[:, 0]); rad = np.hypot(P_[:, 0], P_[:, 1])
    lay = np.sin(rad * 210 + fbm(P_, 9., 2) * 5) * .5 + .5
    mot = fbm(P_, 26., 4)
    bump = (fbm(P_ + .37, 60., 3) - .5) * .09 + (lay - .5) * .035
    tang = np.stack([np.cos(ang), np.sin(ang), np.zeros_like(ang)], -1)
    n = n + tang * bump[:, None]; n /= np.linalg.norm(n, axis=-1, keepdims=True)
    V = -D_
    def wrap(L, k): return np.clip((n @ L + k) / (1 + k), 0, 1)
    nk = n @ L_key
    diff = wrap(L_key, .22) * 1.15 + wrap(L_fill, .5) * .13
    sss = np.clip(1 - np.abs(nk), 0, 1) ** 2 * .22 + np.clip(-nk, 0, 1) * .08
    # AO from the SDF along the normal
    ao = np.ones(len(P_))
    for k, s in enumerate((.02, .05, .1, .18)):
        ao -= np.clip(s - sdf(P_ + n * s), 0, None) * (1.6 / (k + 1))
    ao = np.clip(ao, .35, 1)
    thick = np.clip(-sdf(P_ - n * .07) / .07, 0, 1)        # ~0 where the material is thin (inner rim, horn tips)
    trans = (1 - thick) ** 1.5 * (.35 + .65 * np.clip(-(D_ @ L_rim) * -1 + .2, 0, 1)) * .32
    Hv = L_key + V; Hv /= np.linalg.norm(Hv, axis=-1, keepdims=True)
    nh = np.clip((n * Hv).sum(-1), 0, 1); rough = .28 + .1 * mot; a2 = rough ** 4
    D = a2 / (math.pi * (nh * nh * (a2 - 1) + 1) ** 2)
    nv = np.clip((n * V).sum(-1), 0, 1)
    F = .04 + .96 * (1 - nv) ** 5
    spec = np.clip(D * .07, 0, 2.0) * (.6 + F)
    rim = np.clip(1 - nv, 0, 1) ** 3 * np.clip(n @ L_rim + .3, 0, 1) * .55
    alb = ALB[None] * (.93 + .1 * mot[:, None]) * (.985 + .03 * lay[:, None])
    col = alb * diff[:, None] * ao[:, None] + SSS[None] * sss[:, None] * alb + spec[:, None] * np.array([1, .98, .95])[None] \
        + RIM[None] * rim[:, None] + alb * .022 + SSS[None] * trans[:, None]
    sub = img[y0:y0 + len(ys)]
    sub[hit, :3] = col; sub[hit, 3] = 1
# tone map (filmic-ish) and downsample with alpha
rgb = img[..., :3]; rgb = 1 - np.exp(-rgb * 1.25); rgb = np.clip(rgb, 0, 1) ** (1 / 1.12)
img[..., :3] = rgb * img[..., 3:4]
img = img.reshape(H, SS, W, SS, 4).mean((1, 3))
a = img[..., 3:4]; c = np.where(a > 0, img[..., :3] / np.maximum(a, 1e-6), 0)
out = np.concatenate([c, a], -1)
Image.fromarray((np.clip(out, 0, 1) * 255 + .5).astype(np.uint8), 'RGBA').save(OUT)
print('wrote', OUT, W, H)
