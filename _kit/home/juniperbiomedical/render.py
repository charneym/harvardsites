#!/usr/bin/env python3
"""Juniper Biomedical hero (HOME_BRIEF update 2c: a crafted render of the firm's own product). Their battery-powered
micro-implant, modelled on Juniper's own product images (Solutions / Technology pages): a white rounded housing with a
grey band and a clip on top through which a distal pelvic nerve runs. The nerve branches like the tree in Juniper's own
"precision neuromodulation" analogy. Sphere-traced signed-distance scene in numpy: satin ceramic-white housing with
environment reflection and Fresnel, wet nerve tissue with fascicle striations, bands of Fontana and fine vasa nervorum,
soft shadows and SDF ambient occlusion. Saved with real ALPHA (no ground of its own, DJ/DP); nerve ends dissolve.
Usage: python3 render.py W out.png"""
import sys, math, time, numpy as np
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 1200
OUT = sys.argv[2] if len(sys.argv) > 2 else 'hero.png'
H = W
f32 = np.float32
t0 = time.time()
def nrm(v): return v / np.maximum(np.linalg.norm(v, axis=-1, keepdims=True), 1e-9)
def cr(p0, p1, p2, p3, t):
    t2, t3 = t * t, t * t * t
    return .5 * ((2 * p1) + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 + (-p0 + 3 * p1 - 3 * p2 + p3) * t3)
def spline(pts, n):
    pts = np.array(pts, float); P = [pts[0] * 2 - pts[1]] + list(pts) + [pts[-1] * 2 - pts[-2]]
    out = []
    for i in range(len(pts) - 1):
        for t in np.linspace(0, 1, n, endpoint=False): out.append(cr(P[i], P[i + 1], P[i + 2], P[i + 3], t))
    out.append(pts[-1]); return np.array(out)
# ---------------- nerve tree (world units; camera looks down -z) ----------------
# trunk from lower-left/back, branching; the implant clips onto the distal branch "A"
BR = []   # (points, r0, r1, fade_start?, fade_end?)
trunk = spline([[-2.6, -1.55, -1.3], [-1.75, -1.0, -.75], [-1.0, -.55, -.35], [-.55, -.28, -.1]], 4)
brA = spline([[-.55, -.28, -.1], [-.2, -.08, .2], [.3, .08, .55], [.95, .22, .7], [1.55, .5, .55], [2.2, .78, .25]], 4)
brC = spline([[-.55, -.28, -.1], [-.42, .15, -.32], [-.15, .7, -.55], [.2, 1.25, -.7], [.45, 1.9, -.75]], 4)
brC2 = spline([[-.15, .7, -.55], [.35, .9, -.45], [.9, 1.05, -.6], [1.5, 1.35, -.9]], 4)
brA2 = spline([[1.55, .55, .55], [1.7, 1.0, .35], [1.85, 1.55, .05]], 4)
brT = spline([[-1.0, -.55, -.35], [-1.15, -.05, -.75], [-1.05, .5, -1.15], [-.9, 1.1, -1.45]], 4)
BR = [(trunk, .17, .135, 1, 0), (brA, .085, .07, 0, 1), (brC, .105, .07, 0, 1), (brC2, .06, .045, 0, 1), (brA2, .055, .04, 0, 1), (brT, .07, .05, 0, 1)]
SA, SB, RA, RB, S0, BI, FS, FE = [], [], [], [], [], [], [], []
for bi, (pts, r0, r1, fs, fe) in enumerate(BR):
    L = np.r_[0, np.cumsum(np.linalg.norm(np.diff(pts, axis=0), axis=1))]; tot = L[-1]
    for i in range(len(pts) - 1):
        SA.append(pts[i]); SB.append(pts[i + 1]); RA.append(r0 + (r1 - r0) * L[i] / tot); RB.append(r0 + (r1 - r0) * L[i + 1] / tot)
        S0.append(L[i]); BI.append(bi); FS.append(L[i] / tot if fs else 9); FE.append(L[i] / tot if fe else -9)
SA, SB = np.array(SA, f32), np.array(SB, f32); RA, RB = np.array(RA, f32), np.array(RB, f32)
S0, BI = np.array(S0, f32), np.array(BI); BA = SB - SA; BB = (BA * BA).sum(1); SL = np.sqrt(BB)
FS, FE = np.array(FS, f32), np.array(FE, f32)
# ---------------- implant pose: clip channel axis = nerve tangent at the attach point ----------------
ti = 9   # index along brA
Pa = brA[ti]; Tx = nrm(brA[ti + 1] - brA[ti - 1])
up = np.array([0, 1, 0.]); Ty = nrm(up - Tx * (up @ Tx)); Tz = np.cross(Tx, Ty)
# roll about the nerve so the housing's face tilts a little toward the viewer
rl = .22; Ty, Tz = nrm(Ty * math.cos(rl) + Tz * math.sin(rl)), nrm(Tz * math.cos(rl) - Ty * math.sin(rl))
CH = .47   # channel height in implant frame
ROT = np.stack([Tx, Ty, Tz]).astype(f32)   # world -> local: q = ROT @ (p - C)
C = (Pa - Ty * CH).astype(f32)
def smin(a, b, k):
    h = np.clip(.5 + .5 * (b - a) / k, 0, 1); return b + (a - b) * h - k * h * (1 - h)
def rbox(q, b, r):
    d = np.abs(q) - (np.array(b, f32) - r); return np.linalg.norm(np.maximum(d, 0), axis=-1) + np.minimum(d.max(-1), 0) - r
def implant(p):
    q = (p - C) @ ROT.T
    body = rbox(q, (.56, .38, .27), .13)
    y = q[..., 1]
    body = body + .005 * (np.exp(-((y - .06) / .007) ** 2) + np.exp(-((y - .17) / .007) ** 2))   # band seams
    clip = rbox(q - np.array([0, CH + .02, 0], f32), (.24, .17, .2), .06)
    ch = np.sqrt(q[..., 2] ** 2 + (y - CH) ** 2) - .092
    clip = np.maximum(clip, -ch)
    return smin(body, clip, .035), q
def nerve(p, want=False):
    d = np.full(p.shape[0], 9, f32); cur = d
    if want: bi = np.zeros(p.shape[0], int); bh = np.zeros(p.shape[0], f32)
    for i in range(len(SA)):
        pa = p - SA[i]; h = np.clip((pa @ BA[i]) / BB[i], 0, 1)
        di = np.linalg.norm(pa - h[:, None] * BA[i], axis=1) - (RA[i] + (RB[i] - RA[i]) * h)
        if want:
            m = di < d; bi[m] = i; bh[m] = h[m]; d = np.minimum(d, di)
        else:
            if i == 0 or BI[i] != BI[i - 1]:
                if i: d = smin(d, cur, .05)
                cur = di
            else: cur = np.minimum(cur, di)
    if not want: d = smin(d, cur, .05) if len(SA) > 1 else cur
    return (d, bi, bh) if want else d
def scene(p):
    a, _ = implant(p); b = nerve(p)
    return np.minimum(a, b), a < b
# ---------------- camera ----------------
ro0 = np.array([.6, 1.0, 7.2], f32); look = np.array([.5, .02, .3], f32); fov = .275
fw = nrm(look - ro0); rt = nrm(np.cross(fw, [0, 1, 0])); upv = np.cross(rt, fw)
ys, xs = np.mgrid[0:H, 0:W].astype(f32)
u = (xs + .5) / W * 2 - 1; v = 1 - (ys + .5) / H * 2
rd = nrm(fw[None, None] + (u[..., None] * rt + v[..., None] * upv) * fov).reshape(-1, 3).astype(f32)
N = rd.shape[0]; ro = np.broadcast_to(ro0, (N, 3)).astype(f32)
pix = 2 * fov / W * 7.2   # world size of a pixel at the subject
# march
t = np.full(N, 4.0, f32); hit = np.zeros(N, bool); minr = np.full(N, 9, f32); act = np.arange(N)
for it in range(160):
    if act.size == 0: break
    p = ro[act] + rd[act] * t[act, None]
    d, _ = scene(p)
    minr[act] = np.minimum(minr[act], d / pix)
    h = d < pix * .25; hit[act[h]] = True
    t[act] += d * .85
    act = act[(~h) & (t[act] < 11)]
print('march', round(time.time() - t0, 1), 's, hits', hit.sum())
# ---------------- shade hits ----------------
hi = np.nonzero(hit)[0]; P = ro[hi] + rd[hi] * t[hi, None]; V = -rd[hi]
e = pix * .5
def grad(p):
    k = np.array([[1, -1, -1], [-1, -1, 1], [-1, 1, -1], [1, 1, 1]], f32)
    g = sum(k[i] * scene(p + k[i] * e)[0][:, None] for i in range(4)); return nrm(g)
Nn = grad(P)
dI, qI = implant(P); dN = nerve(P); isI = dI < dN
# soft shadow toward the key light
Lk = nrm(np.array([-.55, .85, .55], f32)); Lr = nrm(np.array([.85, .25, -.55], f32)); Lf = nrm(np.array([.6, -.3, .8], f32))
def shadow(p, L, k=10):
    s = np.ones(p.shape[0], f32); tt = np.full(p.shape[0], .02, f32); act = np.arange(p.shape[0])
    for _ in range(48):
        if act.size == 0: break
        d, _ = scene(p[act] + L * tt[act, None])
        s[act] = np.minimum(s[act], k * d / tt[act]); tt[act] += np.clip(d, .01, .2)
        act = act[(s[act] > .02) & (tt[act] < 4)]
    return np.clip(s, 0, 1)
Po = P + Nn * pix * 2
sh = shadow(Po, Lk)
ao = np.ones(len(P), f32)
for i, hh in enumerate((.03, .07, .14, .26)):
    d, _ = scene(P + Nn * hh); ao -= (hh - d) * (.7 / (i + 1)) * 2.2
ao = np.clip(ao, .25, 1)
col = np.zeros((len(P), 3), f32)
def env(r):
    y = r[:, 1:2]
    base = np.array([.03, .07, .055], f32) * (1 - np.clip(y, 0, 1)) + np.array([.75, .78, .76], f32) * np.clip(y * 1.4, 0, 1) ** 2
    # a soft rectangular box light up-left, a long strip light right
    sb = np.exp(-((r[:, 0] + .5) / .28) ** 4 - ((r[:, 1] - .62) / .22) ** 4)[:, None] * 2.6
    st = np.exp(-((r[:, 0] - .8) / .07) ** 2 - ((r[:, 1] - .1) / .6) ** 4)[:, None] * 1.3 * np.array([.85, 1, .92], f32)
    return base + sb + st
# ---- implant: satin white ceramic housing, grey band
iI = np.nonzero(isI)[0]
if iI.size:
    n = Nn[iI]; vv = V[iI]; q = qI[iI]; y = q[:, 1]
    band = (y > .06) & (y < .17) & (np.abs(n[:, 1]) < .9)
    alb = np.where(band[:, None], np.array([.50, .52, .52], f32), np.array([.93, .93, .91], f32))
    # micro texture: very fine satin grain
    g = (np.sin(q[:, 0] * 900) * np.sin(q[:, 2] * 870 + q[:, 1] * 400)) * .012
    alb = alb * (1 + g[:, None])
    # Juniper's own mark, pad-printed in green on the housing face (as on their product images)
    LG = np.asarray(Image.open(__file__.rsplit('/', 1)[0] + '/logo-stacked.png').convert('RGBA'))[..., 3].astype(f32) / 255
    lh, lw = LG.shape; sz = .29
    lu = (q[:, 0] / sz + .5) * lw; lv = (.5 - (q[:, 1] + .155) / (sz * lh / lw)) * lh
    nz = (n @ ROT[2]); face = (q[:, 2] > .2) & (nz > .6) & (lu >= 0) & (lu < lw - 1) & (lv >= 0) & (lv < lh - 1)
    ink = np.zeros(len(q), f32)
    if face.any():
        x0 = lu[face].astype(int); y0 = lv[face].astype(int); fx = lu[face] - x0; fy = lv[face] - y0
        ink[face] = (LG[y0, x0] * (1 - fx) * (1 - fy) + LG[y0, x0 + 1] * fx * (1 - fy) + LG[y0 + 1, x0] * (1 - fx) * fy + LG[y0 + 1, x0 + 1] * fx * fy)
    alb = alb * (1 - ink[:, None]) + np.array([.02, .26, .17], f32) * ink[:, None]
    lam = np.clip((n @ Lk + .15) / 1.15, 0, 1) * sh[iI]
    fil = np.clip(n @ Lf, 0, 1); rim = np.clip(n @ Lr, 0, 1)
    sky = .5 + .5 * n[:, 1]
    diff = alb * (lam[:, None] * np.array([1.0, .98, .95], f32) * 1.05 + fil[:, None] * .14 * np.array([.8, .95, .9], f32)
                  + sky[:, None] * np.array([.17, .2, .18], f32) + rim[:, None] * .25 * np.array([.75, .95, .85], f32)) * ao[iI, None]
    r = nrm(2 * (n * vv).sum(1, keepdims=True) * n - vv)
    fr = .04 + .96 * (1 - np.clip((n * vv).sum(1), 0, 1)) ** 5
    gl = np.where(band, .55, .32)
    hv = nrm(Lk + vv); spec = np.clip((n * hv).sum(1), 0, 1) ** np.where(band, 90, 36) * gl * 1.4 * sh[iI]
    col[iI] = diff + env(r) * (fr * gl)[:, None] * ao[iI, None] + spec[:, None]
# ---- nerve: wet tissue, fascicles, bands of Fontana, vasa nervorum
iN = np.nonzero(~isI)[0]
fade = np.ones(len(P), f32)
if iN.size:
    p = P[iN]; n = Nn[iN]; vv = V[iN]
    _, si, sh_ = nerve(p, True)
    ax = SA[si] + BA[si] * sh_[:, None]; tg = BA[si] / SL[si, None]
    rv = nrm(p - ax)
    ref = nrm(np.cross(tg, np.array([.3, .9, .3], f32))); ref2 = np.cross(tg, ref)
    phi = np.arctan2((rv * ref2).sum(1), (rv * ref).sum(1))
    s = S0[si] + sh_ * SL[si]; b = BI[si]
    rng = np.random.default_rng(3)
    ph0 = rng.random(8) * 6.28
    # fascicles seen through the epineurium: soft longitudinal ribs
    fas = .5 + .5 * np.sin(phi * 7 + np.sin(s * 3.1 + b) * .8 + ph0[b % 8])
    fas2 = .5 + .5 * np.sin(phi * 17 + s * .7 + ph0[(b + 3) % 8])
    fon = .5 + .5 * np.sin(s * 95 + phi * 2)  # bands of Fontana: fine transverse sheen
    alb = np.array([.92, .85, .70], f32) * (1 - .10 * fas[:, None] - .04 * fas2[:, None])
    alb = alb * np.array([1, .985, .975], f32) ** 0 + np.array([.05, .0, -.02], f32) * (1 - fas)[:, None]
    # vasa nervorum: two fine vessels wandering along each branch
    ves = np.zeros(len(p), f32)
    for k, (a0, f, a1, wdt) in enumerate(((.9, 2.3, .55, .055), (-2.2, 3.4, .4, .04))):
        pv = a0 + ph0[b % 8] * .3 + a1 * np.sin(s * f + k + b)
        dd = np.angle(np.exp(1j * (phi - pv)))
        ves = np.maximum(ves, np.exp(-(dd / wdt) ** 2))
        # small side twigs
        tw = np.exp(-((np.angle(np.exp(1j * (phi - pv - .35 * np.sin(s * 11 + k)))) / (wdt * .5)) ** 2)) * (np.sin(s * 5.3 + k * 2 + b) > .75)
        ves = np.maximum(ves, tw * .8)
    alb = alb * (1 - .7 * ves[:, None]) + np.array([.62, .13, .11], f32) * .7 * ves[:, None]
    # bump: perturb the normal along the circumference with the fascicle ribs
    circ = nrm(np.cross(tg, rv))
    n = nrm(n + circ * (np.cos(phi * 7 + np.sin(s * 3.1 + b) * .8 + ph0[b % 8]) * .07)[:, None] - rv * (ves * .05)[:, None])
    wrap = .45
    lam = np.clip((n @ Lk + wrap) / (1 + wrap), 0, 1)
    sss = np.clip(1 - np.abs(n @ Lk), 0, 1) ** 2 * .35   # warm subsurface at the terminator
    shv = sh[iN] * .8 + .2
    fil = np.clip(n @ Lf, 0, 1); rim = np.clip(n @ Lr, 0, 1) ** 1.5
    diff = alb * (lam[:, None] * shv[:, None] * np.array([1, .96, .9], f32) + fil[:, None] * .12 + np.array([.07, .1, .08], f32)) \
        + sss[:, None] * shv[:, None] * np.array([.55, .22, .12], f32) + rim[:, None] * .35 * np.array([.62, .82, .7], f32) * alb
    hv = nrm(Lk + vv)
    spec = (np.clip((n * hv).sum(1), 0, 1) ** 70 * .55 + np.clip((n * hv).sum(1), 0, 1) ** 14 * .06) * shv * (.75 + .5 * fon)
    r = nrm(2 * (n * vv).sum(1, keepdims=True) * n - vv)
    fr = .03 + .5 * (1 - np.clip((n * vv).sum(1), 0, 1)) ** 4
    col[iN] = diff * ao[iN, None] + spec[:, None] + env(r) * fr[:, None] * .45 * ao[iN, None]
    # nerve ends dissolve into the ink (no cut ends, DJ)
    tot = np.array([np.r_[0, np.cumsum(np.linalg.norm(np.diff(BR[k][0], axis=0), axis=1))][-1] for k in range(len(BR))], f32)[b]
    fr_ = s / tot
    isT = np.array([BR[k][3] for k in range(len(BR))])[b] == 1
    fade_n = np.where(isT, np.clip((fr_ - .12) / .6, 0, 1), np.clip((1 - fr_ - .02) / .45, 0, 1))
    fade[iN] = fade_n ** 1.6
# depth cue toward the green-black page ink
INK = np.array([.012, .055, .040], f32)
z = (P - ro0) @ fw; zn = np.clip((z - 6.2) / 2.4, 0, 1)
col = col * (1 - .45 * zn[:, None]) + INK * .45 * zn[:, None]
col = col / (1 + col * .35) * 1.2   # gentle tone map
col = np.clip(col, 0, 1) ** (1 / 1.08)
img = np.zeros((N, 4), f32)
img[hi, :3] = col
img[hi, 3] = fade
# silhouette AA from closest approach (cone trace)
edge = (~hit) & (minr < 1.0)
img[edge, 3] = 0
aa = np.clip(1 - minr, 0, 1)
img = img.reshape(H, W, 4)
# soften the hard alpha at silhouettes: a 3x3 premultiplied box on edge pixels only
pm = img.copy(); pm[..., :3] *= pm[..., 3:4]
k = np.zeros_like(pm)
for dy in (-1, 0, 1):
    for dx in (-1, 0, 1): k += np.roll(np.roll(pm, dy, 0), dx, 1)
k /= 9
al = img[..., 3]; ed = (np.abs(k[..., 3] - al) > .05)
pm[ed] = pm[ed] * .5 + k[ed] * .5
rgb = np.where(pm[..., 3:4] > 1e-4, pm[..., :3] / np.maximum(pm[..., 3:4], 1e-4), 0)
out = np.dstack([rgb, pm[..., 3]]) * 255
Image.fromarray(out.round().clip(0, 255).astype(np.uint8), 'RGBA').save(OUT)
print('wrote', OUT, round(time.time() - t0, 1), 's')
