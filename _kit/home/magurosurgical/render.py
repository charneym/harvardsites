#!/usr/bin/env python3
"""Maguro Surgical hero (HOME_BRIEF update 2c: a crafted render of the firm's own mechanism). The MagStone System as
NIH award 1R43DK143847 describes it: laser-fragmented kidney stone pieces are coated en masse with a magnetic iron
oxide-based hydrogel, then retrieved on a magnetic wire. Here: a polished magnet tip on a nitinol-grey shaft, with angular
calcium-oxalate fragments (honey/tan, granular) wearing a wet, near-black iron-oxide gel coat, clinging to the tip, and
smaller fragments drawn in from around it. Signed-distance ray marching (per-object, bounded), soft shadows, SDF ambient
occlusion, a studio environment for metal and gel reflections, 2x supersampling, saved with real ALPHA (DJ/DP).
Usage: python3 render.py W H out.png [SS]"""
import sys, numpy as np
from PIL import Image
FW = int(sys.argv[1]) if len(sys.argv) > 1 else 600
FH = int(sys.argv[2]) if len(sys.argv) > 2 else 500
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 2
W, H = FW * SS, FH * SS
rng = np.random.default_rng(11)
def nrm(v): return v / (np.linalg.norm(v, axis=-1, keepdims=True) + 1e-12)
def sstep(a, b, x): t = np.clip((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t)

# ---------------- value noise ----------------
def hash3(i):
    n = i[..., 0] * 127.1 + i[..., 1] * 311.7 + i[..., 2] * 74.7
    return np.modf(np.abs(np.sin(n) * 43758.5453))[0]
def vnoise(p):
    i = np.floor(p); f = p - i; u = f * f * (3 - 2 * f)
    r = 0
    for dx in (0, 1):
        for dy in (0, 1):
            for dz in (0, 1):
                h = hash3(i + np.array([dx, dy, dz]))
                wx = u[..., 0] if dx else 1 - u[..., 0]
                wy = u[..., 1] if dy else 1 - u[..., 1]
                wz = u[..., 2] if dz else 1 - u[..., 2]
                r = r + h * wx * wy * wz
    return r * 2 - 1
def fbm(p, o=3):
    s, a, t = 0, 0.5, 0
    for k in range(o): s = s + a * vnoise(p * (2.03 ** k) + k * 17.3); t += a; a *= .5
    return s / t

def rotm(ax, ang):
    ax = np.asarray(ax, float); ax /= np.linalg.norm(ax); x, y, z = ax; c, s = np.cos(ang), np.sin(ang)
    return np.array([[c+x*x*(1-c), x*y*(1-c)-z*s, x*z*(1-c)+y*s], [y*x*(1-c)+z*s, c+y*y*(1-c), y*z*(1-c)-x*s], [z*x*(1-c)-y*s, z*y*(1-c)+x*s, c+z*z*(1-c)]])

# ---------------- scene ----------------
A = np.array([-2.0, -4.3, -0.6]); T = np.array([0.32, 0.62, 0.35])      # wire from below frame to the magnet tip
AX = nrm(T - A); T0 = T - AX * 1.25                                        # magnet segment T0..T
RT, RW = 0.215, 0.075
def seg_d(p, a, b):
    ba = b - a; t = np.clip(((p - a) @ ba) / (ba @ ba), 0, 1)
    return np.linalg.norm(p - (a + t[:, None] * ba), axis=1), t
class Wire:
    kind = 'metal'
    def __init__(s):
        s.c = (A + T) / 2; s.R = np.linalg.norm(T - A) / 2 + .3
    def sdf(s, p):
        d1, t1 = seg_d(p, T0 - AX * .02, T - AX * RT)
        tip = d1 - RT                                                       # rounded magnet cylinder
        tip = np.maximum(tip, -((p - T0) @ AX) - .0)                       # flat proximal face
        d2, _ = seg_d(p, A, T0 + AX * .05)
        shaft = d2 - RW
        # a short tapered ferrule where shaft meets magnet
        d3, t3 = seg_d(p, T0 - AX * .22, T0 + AX * .01)
        fer = d3 - (RW + (RT * .78 - RW) * t3)
        g = np.minimum(np.minimum(tip, shaft), fer)
        return g
objs = [Wire()]

class Stone:
    kind = 'stone'
    def __init__(s, c, r, seed):
        g = np.random.default_rng(seed)
        s.c = np.asarray(c, float); s.r = r
        s.M = rotm(g.normal(size=3), g.uniform(0, 6.28))
        k = g.integers(9, 15)
        N = nrm(g.normal(size=(k, 3))); s.N = N
        s.d = r * g.uniform(.55, .95, k)
        s.sc = np.array([1, g.uniform(.7, 1.0), g.uniform(.5, .85)])        # chips are flatter than they are wide
        s.ph = g.uniform(0, 100, 3); s.R = r * 1.25
        s.cov = g.uniform(.3, .75)                                          # how fully the gel coats this piece
        s.hue = g.uniform(-1, 1)
    def local(s, p): return ((p - s.c) @ s.M) / s.sc
    def sdf(s, p, fine=True):
        q = s.local(p)
        v = np.max(q @ s.N.T - s.d, axis=1)
        v = np.maximum(v, np.linalg.norm(q, axis=1) - s.r * .98)            # some of the original rounded crust survives
        v = v * s.sc.min()
        qq = q / s.r
        v = v - s.r * .05 * fbm(qq * 2.6 + s.ph, 2)
        if fine: v = v - s.r * (.012 * vnoise(qq * 19 + s.ph) + .004 * vnoise(qq * 55 + s.ph))
        return v

def place():
    S = []
    def ok(c, r):
        if seg_d(c[None], T0 - AX * .1, T)[0][0] < RT + r * .55: return False
        if seg_d(c[None], A, T0)[0][0] < RW + r * .7: return False
        for o in S:
            if np.linalg.norm(o.c - c) < (o.r + r) * .82: return False
        return True
    def onmag(n, rmin, rmax, tmin, tmax):
        tries = 0
        while n > 0 and tries < 4000:
            tries += 1
            t = rng.uniform(tmin, tmax); r = rng.uniform(rmin, rmax)
            u = nrm(np.cross(AX, rng.normal(size=3)))
            base = T0 + AX * (t * 1.25)
            if t > .93:                                                     # the domed end collects the most
                u = nrm(u * .6 + AX * rng.uniform(.4, 1.1))
                base = T - AX * RT
            c = base + u * (RT + r * .62)
            if ok(c, r): S.append(Stone(c, r, len(S) * 7 + 3)); n -= 1
    onmag(5, .2, .3, .35, 1.0)
    onmag(14, .1, .18, .2, 1.0)
    onmag(40, .035, .09, .0, 1.0)
    # pieces being drawn in from the surrounding field
    tries = 0; n = 16
    while n > 0 and tries < 4000:
        tries += 1
        r = rng.uniform(.045, .16)
        ang = rng.uniform(-.9, 2.0); dist = rng.uniform(.45, 1.15) + r
        c = T + np.array([np.cos(ang) * dist * 1.15, np.sin(ang) * dist * .95, rng.uniform(-.6, .5)])
        if ok(c, r) and np.linalg.norm(c - T) > RT + .3: S.append(Stone(c, r, 900 + n)); n -= 1
    return S
objs += place()
NO = len(objs)
print('objects', NO)

def gsdf(p, skip=-1):
    d = np.full(len(p), 1e3)
    for i, o in enumerate(objs):
        if i == skip: continue
        ds = np.linalg.norm(p - o.c, axis=1) - o.R if o.kind == 'stone' else None
        if ds is None:
            d = np.minimum(d, o.sdf(p)); continue
        near = ds < .25
        d = np.minimum(d, np.where(near, 1e3, ds + .02))
        if near.any(): d[near] = np.minimum(d[near], o.sdf(p[near]))
    return d

# ---------------- camera ----------------
CAM = np.array([0.0, 0.0, 11.0]); FOVH = 2.05          # half-height of frame at z=0
asp = W / H
jx, jy = np.meshgrid((np.arange(W) + .5) / W * 2 - 1, 1 - (np.arange(H) + .5) / H * 2)
tgt = np.stack([jx * FOVH * asp + .25, jy * FOVH + .3, np.zeros_like(jx)], -1).reshape(-1, 3)
RD = nrm(tgt - CAM); NP = len(RD)
ZB = np.full(NP, np.inf); ID = np.full(NP, -1)

def ray_sphere(c, R):
    oc = CAM - c; b = RD @ oc; cc = oc @ oc - R * R; h = b * b - cc
    m = h > 0; t0 = -b - np.sqrt(np.maximum(h, 0)); t1 = -b + np.sqrt(np.maximum(h, 0))
    return m, t0, t1
for i, o in enumerate(objs):
    if o.kind == 'metal':
        idx = np.arange(NP); t = np.full(NP, 6.0); tmax = np.full(NP, 16.0)
        # cull to rays near the wire's projection
        m = np.ones(NP, bool)
    else:
        m, t0, t1 = ray_sphere(o.c, o.R + .02)
        idx = np.nonzero(m)[0]; t = np.maximum(t0[idx], 0); tmax = t1[idx]
    if len(idx) == 0: continue
    rd = RD[idx]; alive = np.ones(len(idx), bool); hit = np.zeros(len(idx), bool)
    for step in range(140 if o.kind == 'metal' else 90):
        a = np.nonzero(alive)[0]
        if len(a) == 0: break
        p = CAM + rd[a] * t[a, None]
        d = o.sdf(p)
        h = d < 4e-4 * (1 + t[a] * .05)
        hit[a[h]] = True; alive[a[h]] = False
        t[a] += d * (.8 if o.kind == 'stone' else .95)
        gone = t[a] > tmax[a]; alive[a[gone]] = False
    hi = idx[hit]; th = t[hit]
    better = th < ZB[hi]
    ZB[hi[better]] = th[better]; ID[hi[better]] = i
    print('obj', i, o.kind, len(hi), flush=True)

# ---------------- shading ----------------
HIT = np.nonzero(ID >= 0)[0]
P = CAM + RD[HIT] * ZB[HIT, None]; V = -RD[HIT]
Nn = np.zeros_like(P); Ns = np.zeros_like(P); e = 6e-4
for i in np.unique(ID[HIT]):
    m = ID[HIT] == i; p = P[m]; o = objs[i]
    g = np.stack([o.sdf(p + np.array(dv) * e) - o.sdf(p - np.array(dv) * e) for dv in ((1, 0, 0), (0, 1, 0), (0, 0, 1))], -1)
    Nn[m] = nrm(g)
    if o.kind == 'stone':
        g2 = np.stack([o.sdf(p + np.array(dv) * 4e-3, False) - o.sdf(p - np.array(dv) * 4e-3, False) for dv in ((1, 0, 0), (0, 1, 0), (0, 0, 1))], -1)
        Ns[m] = nrm(g2)
Nn = np.where((np.sum(Nn * V, 1) < -.2)[:, None], -Nn, Nn)
Ns = np.where((np.sum(Ns * V, 1) < -.2)[:, None], -Ns, Ns)
KEY = nrm(np.array([-.55, .75, .55])); FILL = nrm(np.array([.85, .1, .45])); RIM = nrm(np.array([.3, .4, -.85]))
def env(d):
    y = d[:, 1]
    base = np.array([.045, .075, .12]) * (1 - .4 * np.clip(-y, 0, 1))[:, None]
    soft = np.exp(-np.sum((d - nrm(np.array([-.5, .8, .4]))) ** 2, 1) / .18)[:, None] * np.array([1.0, .97, .92]) * 2.4
    strip = (sstep(.25, .1, np.abs(d[:, 0] - .75)) * sstep(-.3, .2, d[:, 1]) * sstep(-.5, .1, d[:, 2]))[:, None] * np.array([.55, .68, .86]) * 1.1
    floor = sstep(-.2, -.9, y)[:, None] * np.array([.02, .03, .05])
    box2 = np.exp(-np.sum((d - nrm(np.array([.55, .7, .45]))) ** 2, 1) / .06)[:, None] * np.array([.95, .97, 1.0]) * 1.6
    band = sstep(.08, 0, np.abs(d[:, 1] - .15))[:, None] * sstep(-.2, .4, d[:, 2])[:, None] * np.array([.4, .45, .52])
    lstrip = (sstep(.22, .05, np.abs(d[:, 0] + .7)) * sstep(-.6, 0, d[:, 2]))[:, None] * np.array([.9, .92, .95]) * 1.3
    return base + soft + strip + floor + box2 + band + lstrip
# soft shadow toward the key light
def shadow(p, n, L):
    res = np.ones(len(p)); t = np.full(len(p), .012)
    for k in range(26):
        q = p + n * .002 + L * t[:, None]
        d = gsdf(q)
        res = np.minimum(res, np.clip(10 * d / t, 0, 1))
        t += np.clip(d, .01, .25)
    return sstep(0, 1, res)
SH = shadow(P, Nn, KEY)
AO = np.ones(len(P))
for k, dd in enumerate((.02, .05, .1, .18)):
    AO -= (dd - np.minimum(gsdf(P + Nn * dd), dd)) * (1.6 / (k + 1)) * 1.4
AO = np.clip(AO, 0.12, 1)

col = np.zeros((len(P), 3))
kind = np.array([objs[i].kind for i in ID[HIT]])
ndl = np.clip(Nn @ KEY, 0, 1); ndf = np.clip(Nn @ FILL, 0, 1)
fres = .04 + .96 * (1 - np.clip(np.sum(Nn * V, 1), 0, 1)) ** 5
Rv = nrm(2 * np.sum(Nn * V, 1)[:, None] * Nn - V)
Hk = nrm(KEY + V)
# metal: polished magnet, satin shaft
mm = kind == 'metal'
if mm.any():
    p = P[mm]; dmag, _ = seg_d(p, T0, T); onmag = dmag < RT + .01
    F0 = np.where(onmag[:, None], np.array([.70, .71, .73]), np.array([.55, .56, .58]))
    rough = np.where(onmag, 0.0, .18)
    r = Rv[mm] + np.random.default_rng(3).normal(size=(mm.sum(), 3)) * rough[:, None] * .25
    E = env(nrm(r)) + np.array([.10, .11, .13]) * (.5 + .5 * nrm(r)[:, 1:2])
    fr = F0 + (1 - F0) * ((1 - np.clip(np.sum(Nn[mm] * V[mm], 1), 0, 1)) ** 5)[:, None]
    spec = np.clip(Nn[mm] @ KEY, 0, 1)
    hs = np.clip(np.sum(Nn[mm] * Hk[mm], 1), 0, 1) ** np.where(onmag, 260, 60)
    c = fr * E * (.35 + .65 * SH[mm, None]) + hs[:, None] * np.array([1.6, 1.55, 1.45]) * SH[mm, None] * np.where(onmag, 1.6, .7)[:, None]
    c += np.array([.02, .025, .035]) * spec[:, None]
    col[mm] = c * AO[mm, None] ** .7
# stones
sm = kind == 'stone'
if sm.any():
    ids = ID[HIT][sm]; p = P[sm]; n = Nn[sm]
    q = np.zeros_like(p); covv = np.zeros(len(p)); hue = np.zeros(len(p)); rr = np.zeros(len(p))
    for i in np.unique(ids):
        m = ids == i; o = objs[i]; q[m] = o.local(p[m]) / o.r; covv[m] = o.cov; hue[m] = o.hue; rr[m] = o.r
    grain = fbm(q * 14, 3); spot = fbm(q * 3.2 + 5, 3)
    stone = np.array([.72, .54, .33]) + hue[:, None] * np.array([.08, .05, .0]) + grain[:, None] * np.array([.10, .08, .05]) + spot[:, None] * np.array([.05, .03, .0])
    stone = np.clip(stone, .05, 1)
    # gel coverage: thick in hollows (low AO), thin over sharp ridges; edges show the stone through
    gm = fbm(q * 3.3 + 9, 3) * .9 + (covv - .5) * .8 + (1 - AO[sm]) * .9
    coat = sstep(-.12, .12, gm)
    gel = np.array([.05, .03, .022]) + grain[:, None] * .01
    alb = stone * (1 - coat[:, None]) + gel * coat[:, None]
    ndl2 = np.clip(ng @ KEY, 0, 1) if False else ndl[sm]
    dif = alb * (np.array([1.0, .95, .88]) * 1.55 * ndl[sm, None] * SH[sm, None] + np.array([.35, .45, .62]) * .32 * ndf[sm, None] + .07)
    # wet gel: sharp highlight + environment reflection; bare stone: broad, dull sheen
    ng = nrm(Ns[sm] * coat[:, None] + n * (1 - coat[:, None]) + 1e-9)
    Rg = nrm(2 * np.sum(ng * V[sm], 1)[:, None] * ng - V[sm])
    hk = np.clip(np.sum(ng * Hk[sm], 1), 0, 1)
    sg = (hk ** 260) * 3.2 * SH[sm] + (hk ** 45) * .22 * SH[sm]
    sb = (hk ** 12) * .1 * SH[sm]
    Er = env(Rg)
    fr = .04 + .96 * (1 - np.clip(np.sum(ng * V[sm], 1), 0, 1)) ** 5
    c = dif + (coat * sg + (1 - coat) * sb)[:, None] * np.array([1, .97, .93]) + (coat * (fr * .55 + .022))[:, None] * Er * np.array([1.0, .93, .86])
    # cool rim from behind
    rim = (1 - np.clip(np.sum(n * V[sm], 1), 0, 1)) ** 3 * np.clip(n @ RIM * .5 + .5, 0, 1)
    c += rim[:, None] * np.array([.30, .40, .58]) * .5
    col[sm] = c * AO[sm, None]
# depth haze toward the page ink for the farthest pieces
z = P[:, 2]; hz = sstep(.2, -1.0, z) * .45
INK = np.array([11, 21, 39]) / 255.0 * 1.3
col = col * (1 - hz[:, None]) + INK * hz[:, None]

img = np.zeros((NP, 4)); img[HIT, :3] = col; img[HIT, 3] = 1
img = img.reshape(H, W, 4)
# the shaft fades out long and eased toward the base of the frame (no cut end)
yy = (np.arange(H) / H)[:, None]
img[..., 3] *= 1 - sstep(.62, 1.0, yy) ** .9
# tone map + gamma
rgb = img[..., :3]; rgb = rgb / (1 + rgb * .35); rgb = np.clip(rgb, 0, 1) ** (1 / 2.2)
img[..., :3] = rgb
pre = img.copy(); pre[..., :3] *= pre[..., 3:4]
im = Image.fromarray((np.clip(pre, 0, 1) * 255).astype(np.uint8), 'RGBA')
if SS > 1:
    im = im.resize((FW, FH), Image.LANCZOS)
a = np.asarray(im).astype(float); al = a[..., 3:4] / 255
a[..., :3] = np.where(al > 0, a[..., :3] / np.maximum(al, 1e-3), 0)
Image.fromarray(np.clip(a, 0, 255).astype(np.uint8), 'RGBA').save(OUT)
print('saved', OUT)
