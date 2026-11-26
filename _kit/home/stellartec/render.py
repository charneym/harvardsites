#!/usr/bin/env python3
"""Stellartech hero (HOME_BRIEF update 2c: a crafted render of the firm's real product). The distal end of a bipolar
electrode balloon catheter of the kind Stellartech designed for esophageal ablation (stellartec.com > Products and Case
Studies: "a high power generator that delivers a rapid burst of radiofrequency (RF) energy to an electrode band mounted on
a balloon catheter", MDEA Gold 2007). Clear inflated balloon on its inner shaft, a circumferential band of fine gold
electrode rings on a thin amber flex circuit, wired alternately to two bus traces (bipolar), soft atraumatic tip; the
proximal shaft fades out along its length. Orthographic ray march of surfaces of revolution in numpy, real ALPHA (DJ/DP).
Pitch and ring count are illustrative, not to scale. Usage: python3 render.py [out.png] [SS]"""
import sys, math, numpy as np
from PIL import Image
OUT = sys.argv[1] if len(sys.argv) > 1 else 'hero.png'
SS = int(sys.argv[2]) if len(sys.argv) > 2 else 2
W, H = 1500, 900
w, h = W * SS, H * SS
phi = math.radians(-17); psi = math.radians(24)
a = np.array([math.cos(phi) * math.cos(psi), math.sin(phi) * math.cos(psi), math.sin(psi)])
C = np.array([w * .52, h * .52, 0.0])
U = SS * 1.0
R, L1, L2 = 140 * U, 255 * U, 400 * U        # balloon radius, cylinder half length, cone end
RS = 15 * U                                   # shaft radius
RN = RS * 1.16                                # balloon neck bonded on the shaft
TIP = L2 + 92 * U
def smooth(x): x = np.clip(x, 0, 1); return x * x * (3 - 2 * x)
def r_ball(s):
    t = np.clip((np.abs(s) - L1) / (L2 - L1), 0, 1)
    body = RN + (R - RN) * (1 - smooth(t)) ** 1.15
    neck = (np.abs(s) >= L2) & (np.abs(s) < L2 + 46 * U)
    return np.where(np.abs(s) < L2, body, np.where(neck, RN, 0.0))
def r_shaft(s):
    t = np.clip((s - (TIP - 22 * U)) / (22 * U), 0, 1)
    return RS * np.sqrt(np.clip(1 - t * t, 0, 1)) * (s < TIP)
ys, xs = np.mgrid[0:h, 0:w].astype(np.float32)
q0 = np.stack([xs - C[0], ys - C[1], np.zeros_like(xs)], -1)
s0 = q0 @ a
qp = q0 - s0[..., None] * a
A_ = (qp ** 2).sum(-1); B_ = qp[..., 2]; Cq = 1 - a[2] ** 2
zstar = -B_ / Cq
rho2min = A_ - B_ ** 2 / Cq
def march(prof, rmax, N=160, back=False):
    half = np.sqrt(np.clip((rmax ** 2 - rho2min) / Cq, 0, None))
    ok = rho2min < rmax ** 2
    def f_at(z):
        s = s0 + z * a[2]
        rho = np.sqrt(np.clip(A_ + 2 * B_ * z + Cq * z * z, 0, None))
        return rho - prof(s)
    found = np.zeros(xs.shape, bool); lo = np.zeros(xs.shape, np.float32); hi = np.zeros(xs.shape, np.float32)
    idx = range(N - 1, -1, -1) if back else range(N)
    prev = None
    for i in idx:
        z = zstar + (-1 + 2 * i / (N - 1)) * half
        hit = ok & (f_at(z) < 0) & ~found
        if prev is None: lo = np.where(hit, z, lo)
        else: lo = np.where(hit, prev, lo)
        hi = np.where(hit, z, hi); found |= hit; prev = z
    for _ in range(14):
        m = (lo + hi) / 2
        ins = f_at(m) < 0
        hi = np.where(ins, m, hi); lo = np.where(ins, lo, m)
    return np.where(found, hi, np.nan).astype(np.float32)
def geom(z, prof):
    zz = np.nan_to_num(z)
    P = q0 + zz[..., None] * np.array([0, 0, 1.0])
    s = P @ a
    perp = P - s[..., None] * a
    rho = np.linalg.norm(perp, axis=-1) + 1e-6
    pu = perp / rho[..., None]
    e = 2.0 * U
    dr = (prof(s + e) - prof(s - e)) / (2 * e)
    n = pu - dr[..., None] * a
    n /= np.linalg.norm(n, axis=-1, keepdims=True)
    return s, pu, n
u1 = np.array([0, 0, -1.0]) + a[2] * a; u1 /= np.linalg.norm(u1); u2 = np.cross(a, u1)
def theta(pu): return np.arctan2(pu @ u2, pu @ u1)
print('march balloon'); zf = march(r_ball, R * 1.01); zb = march(r_ball, R * 1.01, back=True)
print('march shaft'); zsh = march(r_shaft, RS * 1.01, N=60)
V = np.array([0, 0, 1.0])
L = np.array([-.45, -.7, -.55]); L /= np.linalg.norm(L)
def env(Rv):
    up = -Rv[..., 1]; side = Rv[..., 0]
    top = smooth((up - .55) / .3) * (1 - smooth((np.abs(side) - .55) / .25))
    rim = smooth((side - .6) / .25) * .55
    low = smooth((-up - .7) / .2) * .25
    return top + rim + low
BG = np.zeros((h, w, 4), np.float32)
def over(dst, col, al):
    al = np.clip(al, 0, 1)[..., None]
    rgb = col * al + dst[..., :3] * (1 - al)
    A = al[..., 0] + dst[..., 3] * (1 - al[..., 0])
    dst[..., :3] = rgb; dst[..., 3] = A
img = np.zeros((h, w, 4), np.float32)   # premultiplied rgb in [0..1]
def over_p(col, al):
    al = np.clip(al, 0, 1)
    img[..., :3] = col * al[..., None] + img[..., :3] * (1 - al[..., None])
    img[..., 3] = al + img[..., 3] * (1 - al)
GOLD = np.array([.83, .64, .30]); GOLDH = np.array([1, .93, .74]); AMBER = np.array([.78, .52, .20])
BLUE = np.array([.13, .33, .72]); PALE = np.array([.86, .91, .98])
def band(s, th, front):
    inb = (np.abs(s + 10 * U) < 175 * U)
    edge = smooth((175 * U - np.abs(s + 10 * U)) / (3 * U))
    pitch = 13 * U
    k = np.floor((s + 10 * U) / pitch); fr = (s + 10 * U) / pitch - k
    ring = smooth((.30 - np.abs(fr - .5)) / .06)      # ring ~ 40% of pitch
    odd = (k.astype(np.int64) % 2) == 1
    busA, busB = -.62, .62                             # two bus traces (bipolar)
    gapA = np.abs(th - busB) < .07; gapB = np.abs(th - busA) < .07
    ring = ring * np.where(odd, ~gapA, ~gapB)
    bus = smooth((.035 - np.minimum(np.abs(th - busA), np.abs(th - busB))) / .012)
    m = np.maximum(ring, bus) * inb
    return inb * edge, m * edge
ok_b = ~np.isnan(zb); ok_f = ~np.isnan(zf); ok_s = ~np.isnan(zsh)
# 1 back wall of the balloon (seen through the front)
s, pu, n = geom(zb, r_ball); th = theta(pu)
fl, el = band(s, th, False)
nb = -n
fres = .04 + .5 * (1 - np.abs(nb[..., 2])) ** 3
over_p(BLUE * .6 + PALE * .4, np.where(ok_b, fres * .55, 0))
over_p(AMBER, np.where(ok_b, fl * .10, 0))
dif = np.clip(-(n @ L), 0, 1)
over_p(GOLD * (.45 + .35 * dif[..., None]), np.where(ok_b, el * .26, 0))
# 2 inner shaft (and outside the balloon: the catheter itself)
s, pu, n = geom(zsh, r_shaft)
dif = np.clip(n @ (-L), 0, 1); vd = np.clip(-n[..., 2], 0, 1)
Rv = V - 2 * (n @ V)[..., None] * n
shc = np.array([.93, .95, .98]) * (.55 + .45 * dif[..., None]) + env(Rv)[..., None] * .35
shc = shc * (1 - .25 * (1 - vd[..., None]) ** 2) + BLUE * .12 * (1 - vd[..., None])
# marker band on the shaft at the balloon centre, proximal fade
mk = (np.abs(s - 0) < 9 * U)
shc = np.where(mk[..., None], np.array([.62, .64, .70]) * (.5 + .6 * dif[..., None]) + env(Rv)[..., None] * .6, shc)
fade = smooth((s + 800 * U) / (330 * U)) ** 1.5
inside = ok_b & ok_f
over_p(np.clip(shc, 0, 1), np.where(ok_s, fade * np.where(inside, .9, 1), 0))
# 3 front wall: clear polymer, fresnel, softbox reflections, flex circuit and gold rings
s, pu, n = geom(zf, r_ball); th = theta(pu)
vd = np.clip(-n[..., 2], 0, 1)
Rv = V - 2 * (n @ V)[..., None] * n
fres = .03 + .62 * (1 - vd) ** 4
e = env(Rv)
dif = np.clip(n @ (-L), 0, 1)
glass = BLUE * .55 + PALE * .45
over_p(glass, np.where(ok_f, fres * .9 + .05, 0))
fl, el = band(s, th, True)
over_p(AMBER * (.6 + .4 * dif[..., None]), np.where(ok_f, fl * .2, 0))
spec = np.clip(Rv @ (-L), 0, 1) ** 40
gcol = GOLD * (.35 + .7 * dif[..., None]) + GOLDH * (e[..., None] * .55 + spec[..., None] * .9)
over_p(np.clip(gcol, 0, 1), np.where(ok_f, el * .97, 0))
hl = np.clip(e * (.35 + .65 * (1 - vd) ** .5), 0, 1)
over_p(np.ones(3), np.where(ok_f, hl * .78, 0))
# output, downsample
out = img.copy()
a_ = out[..., 3:4]
rgb = np.where(a_ > 1e-4, out[..., :3] / np.maximum(a_, 1e-4), 0)
arr = np.concatenate([rgb, a_], -1)
im = Image.fromarray((np.clip(arr, 0, 1) * 255).astype(np.uint8), 'RGBA')
im = im.resize((W, H), Image.LANCZOS)
im.save(OUT)
print('saved', OUT, im.size)
bb = im.getchannel('A').point(lambda v: 255 if v > 2 else 0).getbbox()
pad = 24
im.crop((max(0, bb[0] - pad), max(0, bb[1] - pad), min(W, bb[2] + pad), min(H, bb[3] + pad))).save(OUT)
print('cropped', bb)
