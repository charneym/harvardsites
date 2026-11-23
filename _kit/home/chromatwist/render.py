#!/usr/bin/env python3
"""ChromaTwist hero (HOME_BRIEF update 2c: a crafted render of the real product). A row of seven square quartz cuvettes,
each holding one of ChromaTwist's large Stokes shift dyes in solution, all excited by the same UV light and fluorescing
from violet-blue through to red ("bright tuneable emission across the entire visible spectrum", chromatwist.com). The same
subject as the photograph on their own home page (glowing cuvettes on a black bench). Analytic ray tracing in numpy:
glass boxes with Fresnel reflections of a soft studio strip, glowing edges, an emissive liquid volume (excited from
below, Beer-Lambert falloff), a meniscus, and a glossy black bench with reflections and the spill of coloured light.
Rendered on pure black and composited additively (screen) onto the page ink, so no box edge can show (DJ/DP).
Usage: python3 render.py W H out.png [SS]"""
import sys, numpy as np
from PIL import Image, ImageFilter

W = int(sys.argv[1]) if len(sys.argv) > 1 else 800
H = int(sys.argv[2]) if len(sys.argv) > 2 else 600
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 1
RW, RH = W * SS, H * SS

def nrm(v): return v / np.linalg.norm(v, axis=-1, keepdims=True)
def sm(a, b, x): t = np.clip((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t)

# ---------- emission colours: violet-blue to red (approximate sRGB of 450..640 nm emission), linear light ----------
def srgb2lin(c): c = np.array(c) / 255.0; return np.where(c <= .04045, c / 12.92, ((c + .055) / 1.055) ** 2.4)
COLS = [srgb2lin(c) for c in [(98, 70, 255), (40, 120, 255), (0, 210, 235), (40, 235, 90), (235, 240, 40), (255, 150, 20), (255, 40, 50)]]
# absorption of the dye solution: it absorbs the complement weakly, so the liquid looks tinted when back-lit
N = len(COLS)
HALF = .5; HT = 3.5; WALL = .075; FILL = 2.55; BASE = .12
# the row recedes from front right to back left along a slight arc
POS = []
for i in range(N):
    k = N - 1 - i                      # k=0 nearest (red) ... wait: nearest is index N-1
    POS.append((-k * 1.75, -k * .78 - .02 * k * k))
POS = POS                               # POS[i]: centre (x,z) of cuvette i; i=N-1 (red) nearest

# the excitation beam: along the row, from the back cuvette to the front one, at a third of the liquid height
_b0 = np.array([POS[0][0], 1.0, POS[0][1]]); _b1 = np.array([POS[-1][0], 1.0, POS[-1][1]])
BEAM_O = _b0; BEAM_D = (_b1 - _b0) / np.linalg.norm(_b1 - _b0)
ALONG0 = [((np.array([p[0], 1.0, p[1]]) - _b0) @ BEAM_D) - HALF for p in POS]
CAM = np.array([5.4, 3.6, 12.8]); TGT = np.array([-4.6, 1.25, -2.6]); FOV = 27.0

def box_hit(o, d, lo, hi):
    inv = 1.0 / np.where(np.abs(d) < 1e-9, 1e-9, d)
    t1 = (lo - o) * inv; t2 = (hi - o) * inv
    tmin = np.minimum(t1, t2); tmax = np.maximum(t1, t2)
    tn = tmin.max(-1); tf = tmax.min(-1)
    ax = tmin.argmax(-1)
    hit = (tf > np.maximum(tn, 1e-4))
    return hit, tn, tf, ax

def env(d):
    """dark studio: a long soft strip light overhead behind the row, a faint second strip at left, near-black elsewhere"""
    s1 = sm(.25, .75, d[..., 1]) * np.exp(-((d[..., 0] + .15) / .5) ** 2) * 1.4
    s2 = sm(.0, .5, d[..., 1]) * np.exp(-((d[..., 2] + .9) / .25) ** 2) * .5
    v = (s1 + s2)[..., None] * np.array([.86, .88, 1.0])
    return v + .004

def trace(o, d, depth=0):
    n = o.shape[0]
    C = np.zeros((n, 3)); T = np.ones((n, 3))
    # floor
    tf = np.where(d[:, 1] < -1e-6, -o[:, 1] / np.where(d[:, 1] < -1e-6, d[:, 1], -1), np.inf)
    tf = np.where(tf > 1e-4, tf, np.inf)
    hits = []
    for i, (cx, cz) in enumerate(POS):
        lo = np.array([cx - HALF, 0, cz - HALF]); hi = np.array([cx + HALF, HT, cz + HALF])
        h, tn, tfar, ax = box_hit(o, d, lo, hi)
        hits.append((i, h, tn, tfar, ax))
    # process cuvettes front to back per ray: order by tn per ray
    TN = np.stack([np.where(h, tn, np.inf) for (_, h, tn, _, _) in hits], 1)
    order = np.argsort(TN, 1)
    for rank in range(N):
        idx = order[:, rank]
        tn = TN[np.arange(n), idx]
        act = np.isfinite(tn) & (tn < tf)
        if not act.any(): continue
        for i in range(N):
            m = act & (idx == i)
            if not m.any(): continue
            _, h, tnn, tfar, ax = hits[i]
            cx, cz = POS[i]; col = COLS[i]
            om, dm = o[m], d[m]; t0 = tnn[m]; t1 = tfar[m]; a = ax[m]
            p = om + dm * t0[:, None]
            nrmv = np.zeros_like(p); nrmv[np.arange(len(a)), a] = -np.sign(dm[np.arange(len(a)), a])
            cosi = np.clip(-(dm * nrmv).sum(1), 0, 1)
            F = .04 + .96 * (1 - cosi) ** 5
            r = dm - 2 * (dm * nrmv).sum(1)[:, None] * nrmv
            Tm = T[m] * (np.exp(-p[:, 1] * .75)[:, None] if depth else 1.0)   # glossy bench: reflections fade with height
            C[m] += Tm * F[:, None] * env(r) * 1.1
            # glowing glass edges: distance to the nearest edge of the entry face (in its own 2D frame)
            lx = p[:, 0] - cx; lz = p[:, 2] - cz; ly = p[:, 1]
            ex = HALF - np.abs(lx); ez = HALF - np.abs(lz); ey = np.minimum(ly, HT - ly)
            ed = np.where(a == 0, np.minimum(ez, ey), np.where(a == 2, np.minimum(ex, ey), np.minimum(ex, ez)))
            low = np.exp(-np.clip(ly - BASE, 0, None) * .4) + .15        # edges glow most where the liquid is
            inliq = (ly < FILL + .25).astype(float) * .85 + .15
            eg = np.exp(-ed / .022) * (.55 * low * inliq)
            C[m] += Tm * (col * 1.3 + .18) * eg[:, None]
            # the liquid: inner box from BASE to FILL
            lo2 = np.array([cx - HALF + WALL, BASE, cz - HALF + WALL]); hi2 = np.array([cx + HALF - WALL, FILL, cz + HALF - WALL])
            h2, u0, u1, ax2 = box_hit(om, dm, lo2, hi2)
            L = np.where(h2, u1 - np.maximum(u0, 0), 0)
            ym = np.where(h2, om[:, 1] + dm[:, 1] * (u0 + u1) * .5, 0)
            # integrate the emission along the ray through the liquid: a soft UV wash from below plus the 355 nm beam
            # passing through every cuvette (the line of bright fluorescence where the laser crosses the dye)
            ua = np.maximum(u0, 0); emis = np.zeros(len(t0)); NS = 14
            for k in range(NS):
                q = om + dm * (ua + (k + .5) / NS * L)[:, None]
                rel = q - BEAM_O; along = rel @ BEAM_D
                perp = np.linalg.norm(rel - along[:, None] * BEAM_D[None, :], axis=1)
                wash = .21 * np.exp(-(q[:, 1] - BASE) * .6) + .03
                core = 5.0 * np.exp(-(perp / .05) ** 2) + 1.1 * np.exp(-(perp / .2) ** 2)
                atten = np.exp(-(along - ALONG0[i]) * .55)     # the beam weakens as the dye absorbs it
                emis += (wash + core * np.clip(atten, 0, 1)) * (L / NS)
            emis = 1 - np.exp(-emis * 1.1)
            C[m] += Tm * col[None, :] * emis[:, None] * 1.0
            # meniscus: a fine bright line where the ray meets the liquid surface from above
            top = h2 & (ax2 == 1) & (dm[:, 1] < 0)
            ptop = om + dm * u0[:, None]
            dd = np.minimum(HALF - WALL - np.abs(ptop[:, 0] - cx), HALF - WALL - np.abs(ptop[:, 2] - cz))
            men = np.where(top, np.exp(-np.clip(dd, 0, 9) / .03) * .9 + .12, 0)
            C[m] += Tm * (col * .9 + .25) * men[:, None] * .8
            # surface of liquid also reflects the strip faintly
            tint = np.exp(-L[:, None] * (1 - col[None, :]) * .9) * .9
            T[m] = T[m] * tint * .93
    # floor: glossy black bench with reflections and coloured spill
    fm = np.isfinite(tf)
    if fm.any():
        p = o[fm] + d[fm] * tf[fm][:, None]
        Tm = T[fm]
        glow = np.zeros((p.shape[0], 3))
        for i, (cx, cz) in enumerate(POS):
            dx = np.maximum(np.abs(p[:, 0] - cx) - HALF, 0); dz = np.maximum(np.abs(p[:, 2] - cz) - HALF, 0)
            ds = np.sqrt(dx * dx + dz * dz)
            under = ((np.abs(p[:, 0] - cx) < HALF) & (np.abs(p[:, 2] - cz) < HALF)).astype(float)
            # light leaving the lower part of the liquid towards the camera side spreads furthest
            fwd = np.clip(((p[:, 0] - cx) * .55 + (p[:, 2] - cz) * .85), -1, None)
            spread = .55 + .35 * np.clip(fwd, 0, 3)
            glow += COLS[i][None, :] * (.5 / (1 + (ds / (.32 * spread)) ** 2)[:, None] * (1 - under[:, None] * .3))
        far = np.exp(-np.maximum(np.linalg.norm(p[:, [0, 2]] - np.array([-3.8, -3.0]), axis=1) - 3.5, 0) * .32)
        C[fm] += Tm * glow * .5 * far[:, None]
        if depth == 0:
            dr = d[fm].copy(); dr[:, 1] *= -1
            rc = trace(p + dr * 1e-3, dr, 1)
            cos = np.clip(-d[fm][:, 1], 0, 1)
            Fr = .05 + .95 * (1 - cos) ** 5
            # glossy, not a mirror: the reflection fades quickly away from the glass (reflected ray length to the hit)
            C[fm] += Tm * rc * (Fr * .55 + .07)[:, None] * far[:, None]
    # background: near black
    bm = ~fm
    C[bm] += T[bm] * env(d[bm]) * .0
    return C

def render():
    fwd = nrm(TGT - CAM); right = nrm(np.cross(fwd, [0, 1, 0])); up = np.cross(right, fwd)
    asp = RW / RH; th = np.tan(np.radians(FOV) / 2)
    ys, xs = np.mgrid[0:RH, 0:RW].astype(float)
    u = ((xs + .5) / RW * 2 - 1) * th * asp; v = (1 - (ys + .5) / RH * 2) * th
    d = nrm(fwd[None, None] + u[..., None] * right + v[..., None] * up).reshape(-1, 3)
    o = np.broadcast_to(CAM, d.shape).copy()
    out = np.zeros_like(d)
    CH = 250000
    for s in range(0, d.shape[0], CH):
        out[s:s + CH] = trace(o[s:s + CH], d[s:s + CH])
    return out.reshape(RH, RW, 3)

img = render()
# bloom: soft glow around the bright parts (light scatter in glass and lens)
lum = img.max(-1, keepdims=True)
br = np.clip(img - .35, 0, None)
bi = Image.fromarray(np.uint8(np.clip(br / 4, 0, 1) * 255))
b1 = np.asarray(bi.filter(ImageFilter.GaussianBlur(6 * SS)), float) / 255 * 4
b2 = np.asarray(bi.filter(ImageFilter.GaussianBlur(26 * SS)), float) / 255 * 4
img = img + b1 * .35 + b2 * .3
# filmic tone map, then sRGB
x = img * 1.15
x = x * (2.51 * x + .03) / (x * (2.43 * x + .59) + .14)
x = np.clip(x, 0, 1)
srgb = np.where(x <= .0031308, x * 12.92, 1.055 * x ** (1 / 2.4) - .055)
# long eased radial fade to pure black at the frame edges (it is composited additively, so black = nothing)
ys, xs = np.mgrid[0:RH, 0:RW].astype(float)
ex = np.minimum(xs, RW - 1 - xs) / RW; ey = np.minimum(ys, RH - 1 - ys) / RH
mask = sm(0, .16, ex) * sm(0, .14, ey)
srgb = srgb * mask[..., None]
im = Image.fromarray(np.uint8(np.clip(srgb, 0, 1) * 255 + .5))
if SS > 1: im = im.resize((W, H), Image.LANCZOS)
im.save(OUT)
print('saved', OUT, im.size)
