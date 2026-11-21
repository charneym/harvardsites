#!/usr/bin/env python3
"""Glyciome hero (HOME_BRIEF update 2c: a crafted render of the real product). A dollop of clear, preservative-free
prebiotic gel, the form of their lead product PreBioGyn ("prebiotic intravaginal lubricant", NIH RePORTER 2R44CA254543),
resting on a dark glossy surface in a studio light: Fresnel reflections of soft boxes, refraction through the gel onto
the floor, a cyan caustic from the logo's swirl colour (#3bb8d8), a few suspended micro-bubbles. Numpy ray tracing of a
height-field drop. Saved with REAL ALPHA, decomposed against the page ink so the floor fades to nothing (DP/DJ).
Usage: python3 render.py W H out.png [SS] [procs]"""
import sys, numpy as np
from multiprocessing import Pool
from PIL import Image, ImageFilter

W = int(sys.argv[1]) if len(sys.argv) > 1 else 700
H = int(sys.argv[2]) if len(sys.argv) > 2 else 620
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = float(sys.argv[4]) if len(sys.argv) > 4 else 1.0
NP = int(sys.argv[5]) if len(sys.argv) > 5 else 4
FW, FH = W, H; W, H = int(W * SS), int(H * SS)

INK = np.array([11, 21, 25]) / 255.0          # page ink #0b1519
def lin(c): return np.where(c <= .04045, c / 12.92, ((c + .055) / 1.055) ** 2.4)
def srgb(c): c = np.clip(c, 0, None); return np.where(c <= .0031308, c * 12.92, 1.055 * c ** (1 / 2.4) - .055)
INKL = lin(INK)
CY = lin(np.array([59, 184, 216]) / 255.0)     # logo cyan
CYD = lin(np.array([20, 110, 140]) / 255.0)

def nrm(v): return v / np.linalg.norm(v, axis=-1, keepdims=True)
def sstep(a, b, x): t = np.clip((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t)

# ---------- the drop: a height field y = h(x, z) over the floor y = 0 ----------
R0 = 1.25; HT = 0.92
def radius(x, z):
    a = np.arctan2(z, x)
    return R0 * (1 + .05 * np.cos(2 * a - .6) + .035 * np.cos(3 * a + 1.1) + .02 * np.sin(5 * a + .4))
def hfield(x, z):
    r = np.sqrt(x * x + z * z) + 1e-9; R = radius(x, z); u = np.clip(1 - (r / R) ** 2, 0, 1)
    # a sessile cap with a soft dispensed crest a little off-centre (a dollop, not a bead of water)
    return HT * u ** .58 * (1 + .015 * np.sin(x * 4.2 + z * 3.1 + .7)) * (1 - .06 * x / R0)
def hgrad(x, z, e=1e-3):
    return ((hfield(x + e, z) - hfield(x - e, z)) / (2 * e), (hfield(x, z + e) - hfield(x, z - e)) / (2 * e))
def normal(x, z):
    gx, gz = hgrad(x, z); return nrm(np.stack([-gx, np.ones_like(gx), -gz], -1))

# two small satellite droplets, as spheres cut by the floor
SATS = []  # (satellite droplets tried and dropped: they fell into the vignette)
BUB = [(np.array([.25, .32, .1]), .045), (np.array([-.42, .22, .35]), .03), (np.array([.55, .18, -.2]), .024),
       (np.array([-.1, .45, -.15]), .02), (np.array([.05, .2, .62]), .034), (np.array([-.7, .12, -.3]), .018),
       (np.array([.82, .1, .3]), .016), (np.array([.3, .5, .25]), .014)]

def env(d):
    """studio environment, linear RGB"""
    x, y, z = d[..., 0], d[..., 1], d[..., 2]
    c = np.zeros(d.shape) + INKL * 1.1
    # backdrop glow at the horizon behind the drop (the camera looks toward -z)
    back = sstep(-.1, -.8, z) * np.exp(-((y - .08) / .32) ** 2)
    c += back[..., None] * (CYD * 1.2 + .02)
    # overhead soft box (slightly behind), white with a cyan cast
    sb = np.exp(-((x / .36) ** 4 + ((z + .12) / .085) ** 4)) * sstep(.8, .9, y)
    c += sb[..., None] * np.array([40.0, 44.0, 46.0])
    # a tall strip light at the right, and a cyan kicker at the left rear
    st = np.exp(-(((y - .32) / .3) ** 4 + ((z + .14) / .07) ** 4)) * sstep(.8, .9, x)
    c += st[..., None] * np.array([26.0, 29.0, 30.0])
    kk = sstep(-.55, -.75, x) * sstep(-.05, -.4, z) * sstep(.45, .2, np.abs(y - .2))
    c += kk[..., None] * CY * 7.0
    return c

def env_bg(d):
    """what the gel shows by transmission: the backdrop glow and a soft cyan floor bounce, no hard lights"""
    x, y, z = d[..., 0], d[..., 1], d[..., 2]
    c = np.zeros(d.shape) + INKL * 1.2
    back = np.exp(-((y - .05) / .45) ** 2) * (.6 + .4 * sstep(.4, -.6, z))
    c += back[..., None] * (CY * .55 + .015)
    c += (sstep(.3, .9, y) * .25)[..., None] * np.array([.6, .75, .8])
    return c

def floor_col(px, pz):
    """floor colour (linear) at points on y=0, including the caustic under the drop and its contact shadow"""
    r = np.sqrt(px * px + pz * pz); R = radius(px, pz); q = r / R
    c = np.zeros(px.shape + (3,)) + INKL
    # light focused by the gel: a bright cyan pool inside the footprint, offset toward the viewer
    ca = np.exp(-(((px + .05) / .42) ** 2 + ((pz - .3) / .34) ** 2)) * 1.1 + np.exp(-(((px + .02) / .16) ** 2 + ((pz - .34) / .12) ** 2)) * 1.6
    ring = np.exp(-((q - 1.012) / .014) ** 2) * .32
    c += (ca + ring)[..., None] * CY
    # contact shadow hugging the outside edge
    sh = np.exp(-np.clip(q - 1, 0, None) / .08) * (q >= 1) * .55
    c *= (1 - sh)[..., None]
    # a long soft pool of reflected backdrop light, easing out to the ink far before the frame edge
    gl = np.exp(-((px / 2.6) ** 2 + ((pz + .4) / 1.6) ** 2)) * .07
    c += gl[..., None] * CYD
    return c

def march_drop(o, d, inside=False, tmax=12.0):
    """first crossing of y = h(x,z) along o + t d (inside: from below the surface outward)"""
    n = len(o); t = np.full(n, 1e-3); hit = np.zeros(n, bool); act = np.ones(n, bool)
    for _ in range(300):
        p = o[act] + t[act, None] * d[act]
        h = hfield(p[:, 0], p[:, 2]); f = p[:, 1] - h
        if inside: f = -f
        done = (f < 1e-4) & (h > 1e-4) if not inside else (f < 1e-4)
        idx = np.nonzero(act)[0]
        hit[idx[done]] = True
        step = np.maximum(np.abs(f) * .3, 4e-4)
        t[idx] += np.where(done, 0, step)
        away = (t[idx] > tmax) | ((p[:, 1] < -1e-3) & (not inside)) | ((p[:, 1] > 2.5) & (d[idx, 1] > 0))
        act[idx[done | away]] = False
        if inside:  # reaching the floor from inside: stop, report as not-exited
            fl = (p[:, 1] <= 0) & ~done
            act[idx[fl]] = False
        if not act.any(): break
    # refine every hit by bisection on the sign of y - h (removes contour banding on the steep flanks)
    if hit.any():
        hi = t[hit].copy(); lo = np.maximum(hi - .02, 1e-4); oo = o[hit]; dd = d[hit]
        for _ in range(14):
            mid = (lo + hi) / 2; p = oo + mid[:, None] * dd
            f = p[:, 1] - hfield(p[:, 0], p[:, 2])
            if inside: f = -f
            inn = f < 0
            hi = np.where(inn, mid, hi); lo = np.where(inn, lo, mid)
        t[hit] = hi
    return t, hit

def fresnel(cosi, eta=1.34):
    r0 = ((1 - eta) / (1 + eta)) ** 2; return r0 + (1 - r0) * (1 - cosi) ** 5

def refract(d, n, eta):
    cosi = -np.sum(d * n, -1, keepdims=True); k = 1 - eta * eta * (1 - cosi * cosi)
    tir = (k < 0)[..., 0]
    t = eta * d + (eta * cosi - np.sqrt(np.clip(k, 0, None))) * n
    return nrm(t), tir

def bubbles(o, d, tlen):
    """light picked up by micro-bubbles along an interior segment: a thin bright rim and a dark core"""
    acc = np.zeros(len(o))
    for c, r in BUB:
        oc = c - o; tt = np.clip(np.sum(oc * d, -1), 0, tlen)
        dist = np.linalg.norm(o + tt[:, None] * d - c, axis=-1)
        acc += np.exp(-((dist - r * .85) / (r * .16)) ** 2) * .9
    return acc

def shade_drop(p, d):
    """colour of a camera/floor ray hitting the gel surface at p"""
    n = normal(p[:, 0], p[:, 2]); cosi = np.clip(-np.sum(d * n, -1), 0, 1)
    F = fresnel(cosi)[:, None]
    refl = env(nrm(d - 2 * np.sum(d * n, -1, keepdims=True) * n))
    t, tir = refract(d, n, 1 / 1.34)
    # travel through the gel: either reach the floor beneath, or leave through the surface again
    tf = np.where(t[:, 1] < -1e-4, -p[:, 1] / np.minimum(t[:, 1], -1e-4), 1e9)
    ts, hs = march_drop(p, t, inside=True, tmax=4.0)
    out_floor = tf < ts
    col = np.zeros_like(p)
    # through to the floor: the caustic-lit floor under the gel, slightly magnified and tinted
    fp = p + tf[:, None] * t
    fc = floor_col(fp[:, 0], fp[:, 2]) * 1.15
    L = np.where(out_floor, tf, ts)
    absorb = np.exp(-L[:, None] * np.array([.5, .16, .12])[None, :] * 1.0)
    col = np.where(out_floor[:, None], fc, 0)
    # leaving through the top surface: refract out to the environment
    q = p + ts[:, None] * t
    n2 = -normal(q[:, 0], q[:, 2])
    t2, tir2 = refract(t, n2, 1.34)
    t2 = np.where(tir2[:, None], nrm(t - 2 * np.sum(t * n2, -1, keepdims=True) * n2), t2)
    col = np.where(out_floor[:, None], col, env_bg(t2))
    col = col * absorb + bubbles(p, t, L)[:, None] * CY * .35
    # a soft inner glow of the cyan pool lifting into the gel body
    col += (np.exp(-L * 1.4) * .01)[:, None] * CY
    return F * refl + (1 - F) * col

def sat_hit(o, d):
    best = np.full(len(o), 1e9); nn = np.zeros_like(o)
    for c, r, cy in SATS:
        cc = c + np.array([0, -r + cy, 0]) * 1.0   # centre below the floor so only a cap shows
        oc = o - cc; b = np.sum(oc * d, -1); k = b * b - (np.sum(oc * oc, -1) - r * r)
        tt = -b - np.sqrt(np.clip(k, 0, None)); ok = (k > 0) & (tt > 1e-4)
        pp = o + tt[:, None] * d; ok &= pp[:, 1] > 0
        better = ok & (tt < best); best = np.where(better, tt, best)
        nn = np.where(better[:, None], nrm(pp - cc), nn)
    return best, nn

def shade_sat(p, d, n):
    cosi = np.clip(-np.sum(d * n, -1), 0, 1); F = fresnel(cosi)[:, None]
    refl = env(nrm(d - 2 * np.sum(d * n, -1, keepdims=True) * n))
    t, _ = refract(d, n, 1 / 1.34)
    tf = np.where(t[:, 1] < -1e-4, -p[:, 1] / np.minimum(t[:, 1], -1e-4), .3)
    fp = p + tf[:, None] * t
    under = floor_col(fp[:, 0], fp[:, 2]) + np.exp(-((np.linalg.norm(fp - p * [1, 0, 1], axis=-1)) / .12) ** 2)[:, None] * CY * .9
    return F * refl + (1 - F) * under

# ---------- camera ----------
CAM = np.array([0.0, 1.85, 5.6]); TGT = np.array([0.08, .38, .1]); FOV = np.radians(30)
fw = nrm(TGT - CAM); rt = nrm(np.cross(fw, [0, 1, 0])); up = np.cross(rt, fw)

def render_rows(rows):
    y0, y1 = rows
    ys, xs = np.mgrid[y0:y1, 0:W]
    u = ((xs + .5) / W * 2 - 1) * np.tan(FOV / 2) * (W / H); v = (1 - (ys + .5) / H * 2) * np.tan(FOV / 2)
    d = nrm(fw[None, None] + u[..., None] * rt + v[..., None] * up).reshape(-1, 3)
    o = np.repeat(CAM[None], len(d), 0)
    col = np.zeros_like(d)
    td, hd = march_drop(o, d)
    ts, ns = sat_hit(o, d)
    tfl = np.where(d[:, 1] < 0, -o[:, 1] / np.minimum(d[:, 1], -1e-6), 1e9)
    hit_drop = hd & (td < tfl) & (td <= ts)
    hit_sat = (ts < 1e8) & ~hit_drop & (ts < tfl)
    hit_floor = ~hit_drop & ~hit_sat & (tfl < 1e8)
    if hit_drop.any():
        p = o[hit_drop] + td[hit_drop, None] * d[hit_drop]
        col[hit_drop] = shade_drop(p, d[hit_drop])
    if hit_sat.any():
        p = o[hit_sat] + ts[hit_sat, None] * d[hit_sat]
        col[hit_sat] = shade_sat(p, d[hit_sat], ns[hit_sat])
    if hit_floor.any():
        idx = np.nonzero(hit_floor)[0]
        p = o[idx] + tfl[idx, None] * d[idx]
        c = floor_col(p[:, 0], p[:, 2])
        # glossy floor: a dim, softened reflection of the gel and the backdrop, fading with distance from the drop
        rd = d[idx] * np.array([1, -1, 1])
        tr, hr = march_drop(p, rd, tmax=6)
        fade = np.exp(-np.clip(np.sqrt(p[:, 0] ** 2 + p[:, 2] ** 2) - 1.2, 0, None) / .9)
        rc = np.zeros_like(c)
        if hr.any():
            pr = p[hr] + tr[hr, None] * rd[hr]
            rc[hr] = 0
        cosr = np.clip(-d[idx, 1], 0, 1); Fr = (fresnel(cosr, 1.5) * 1.6)[:, None]
        c = c + (rc + (env(rd) - INKL * 1.1) * Fr * .25) * fade[:, None]
        col[idx] = c
    col[~(hit_drop | hit_sat | hit_floor)] = INKL
    return col.reshape(y1 - y0, W, 3)

if __name__ == '__main__':
    bands = [(i, min(H, i + 16)) for i in range(0, H, 16)]
    with Pool(NP) as pool: parts = pool.map(render_rows, bands)
    img = np.concatenate(parts, 0)
    # gentle filmic shoulder, then sRGB
    img = img / (1 + img * .22) * 1.06
    s = srgb(img)
    if SS != 1:
        s = np.stack([np.asarray(Image.fromarray(s[..., k].astype(np.float32), 'F').resize((FW, FH), Image.LANCZOS)) for k in range(3)], -1)
    s = np.clip(s, 0, 1)
    # vignette the floor's far reaches to the exact ink, then decompose into colour + alpha over the ink
    yy, xx = np.mgrid[0:FH, 0:FW]
    m = sstep(.5, .98, np.sqrt(((xx / FW - .5) / .5) ** 2 + ((yy / FH - .52) / .5) ** 2))
    s = s * (1 - m[..., None]) + INK * m[..., None]
    D = s - INK
    a = np.max(np.where(D > 0, D / (1 - INK), -D / INK), -1)
    a = np.clip(a, 0, 1); a = np.where(a < 1 / 255, 0, a)
    c = np.where(a[..., None] > 0, (s - INK * (1 - a[..., None])) / np.maximum(a[..., None], 1e-6), 0)
    # ease every faint floor term out well inside the frame, then dither the alpha so no 8-bit step can draw a contour (DP)
    r2 = np.sqrt(((xx / FW - .5) / .5) ** 2 + ((yy / FH - .55) / .5) ** 2)
    a = a * (1 - sstep(.42, .9, r2))
    a = np.clip(a + (np.random.default_rng(3).random(a.shape) - .5) / 255 * (a > 0), 0, 1)
    rgba = np.concatenate([np.clip(c, 0, 1), a[..., None]], -1)
    Image.fromarray((rgba * 255 + .5).astype(np.uint8), 'RGBA').save(OUT)
    Image.fromarray((s * 255 + .5).astype(np.uint8), 'RGB').save(OUT.replace('.png', '_flat.png'))
    print('wrote', OUT, FW, FH)
