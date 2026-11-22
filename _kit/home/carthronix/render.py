#!/usr/bin/env python3
"""CarthroniX hero (HOME_BRIEF update 2c: a crafted render of the firm's subject). The knee joint CX-011 is injected into:
the distal femur with its two condyles and intercondylar notch, the tibial plateau with its two facets and spines, the
fibular head, the C-shaped menisci, and the articular cartilage that caps both bone ends (the tissue CX-011 is designed
to regenerate). Anterior three-quarter view. Bone: ivory with fine porous grain; cartilage: glossy, faintly translucent
blue-white; menisci: denser fibrocartilage. Key light warm, rim in the logo's rust (#b14600) on one side and its navy
(#172a77) on the other. Numpy sphere tracing; saved with ALPHA (no ground of its own, DJ); the cut shafts fade out
along their length. Usage: python3 render.py W H out.png [SS] [procs]"""
import sys, numpy as np
from multiprocessing import Pool
from PIL import Image

W = int(sys.argv[1]) if len(sys.argv) > 1 else 500
H = int(sys.argv[2]) if len(sys.argv) > 2 else 700
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = float(sys.argv[4]) if len(sys.argv) > 4 else 1.0
NP = int(sys.argv[5]) if len(sys.argv) > 5 else 4
FW, FH = W, H; W, H = int(W * SS), int(H * SS)

def nrm(v): return v / np.linalg.norm(v, axis=-1, keepdims=True)
rng = np.random.default_rng(11)
PERM = rng.permutation(256); PERM = np.concatenate([PERM, PERM]); GV = rng.random(256) * 2 - 1
def vnoise(p):
    i = np.floor(p).astype(np.int64); f = p - i; u = f * f * (3 - 2 * f)
    def h(dx, dy, dz): return GV[PERM[(PERM[(PERM[(i[:, 0] + dx) & 255] + i[:, 1] + dy) & 255] + i[:, 2] + dz) & 255]]
    x00 = h(0,0,0)*(1-u[:,0]) + h(1,0,0)*u[:,0]; x10 = h(0,1,0)*(1-u[:,0]) + h(1,1,0)*u[:,0]
    x01 = h(0,0,1)*(1-u[:,0]) + h(1,0,1)*u[:,0]; x11 = h(0,1,1)*(1-u[:,0]) + h(1,1,1)*u[:,0]
    y0 = x00*(1-u[:,1]) + x10*u[:,1]; y1 = x01*(1-u[:,1]) + x11*u[:,1]
    return y0*(1-u[:,2]) + y1*u[:,2]
def fbm(p, o=3):
    s, a, f = 0.0, 0.5, 1.0
    for _ in range(o): s = s + a * vnoise(p * f); a *= .5; f *= 2.03
    return s
def smin(a, b, k):
    h = np.clip(.5 + .5 * (b - a) / k, 0, 1); return b * (1 - h) + a * h - k * h * (1 - h)
def smax(a, b, k): return -smin(-a, -b, k)
def ell(p, c, r):
    q = (p - c) / r; k0 = np.linalg.norm(q, axis=1); k1 = np.linalg.norm(q / r, axis=1)
    return k0 * (k0 - 1) / np.maximum(k1, 1e-6)
def capy(p, c, y0, y1, r):
    """vertical capsule-ish cylinder with rounded ends, radius r (can be per-point)"""
    q = p - c; yy = np.clip(q[:, 1], y0, y1)
    return np.sqrt(q[:, 0] ** 2 + (q[:, 1] - yy) ** 2 + q[:, 2] ** 2) - r
def seg(p, a, b, r):
    pa = p - a; ba = b - a; h = np.clip((pa @ ba) / (ba @ ba), 0, 1)
    return np.linalg.norm(pa - h[:, None] * ba[None, :], axis=1) - r

# ---- femur (y up, x to the subject's lateral side = image right, z toward the viewer) ----
def femur(p):
    y = p[:, 1]
    # shaft: radius grows toward the metaphysis
    rr = .34 + .3 * (lambda u: u * u * (3 - 2 * u))(np.clip((1.75 - y) / 1.45, 0, 1))
    sh = capy(p * np.array([1, 1, 1.12]), np.array([0, 0, 0]), .55, 3.4, rr)
    mc = ell(p, np.array([-.43, .06, -.02]), np.array([.37, .46, .6]))    # medial condyle (larger)
    lc = ell(p, np.array([.43, .1, -.04]), np.array([.35, .42, .56]))     # lateral condyle
    d = smin(mc, lc, .18)
    d = smin(d, sh, .32)
    # intercondylar notch, opening posteriorly and inferiorly
    notch = seg(p, np.array([0, -.42, -.75]), np.array([0, .05, .1]), .15)
    d = smax(d, -notch, .07)
    # trochlear groove on the anterior face
    tro = seg(p, np.array([0, -.05, .78]), np.array([0, .75, .62]), .12)
    d = smax(d, -tro, .1)
    # epicondyle bumps
    d = smin(d, ell(p, np.array([-.7, .25, -.04]), np.array([.1, .14, .18])), .14)
    d = smin(d, ell(p, np.array([.7, .28, -.06]), np.array([.08, .12, .16])), .14)
    return d

def tibia(p):
    y = p[:, 1]
    T0 = -.58  # plateau height
    # proximal block: an elliptic cylinder that tapers into the shaft
    t = np.clip((T0 - y - .12) / .95, 0, 1); t = t * t * (3 - 2 * t)
    rx = .84 - .54 * t; rz = .6 - .33 * t
    q = np.stack([p[:, 0] / rx, (y - T0), p[:, 2] / rz], 1)
    rad = np.sqrt(q[:, 0] ** 2 + q[:, 2] ** 2)
    side = (rad - 1) * np.minimum(rx, rz)
    top = y - T0
    bot = -(y + 3.4)
    d = smax(smax(side, top, .1), bot, .05)
    # two shallow facets in the plateau
    for x0 in (-.42, .42):
        d = smax(d, -ell(p, np.array([x0, T0 + .55, -.02]), np.array([.36, .58, .4])), .05)
    # intercondylar eminence (tibial spines)
    d = smin(d, ell(p, np.array([-.07, T0 + .015, -.05]), np.array([.06, .08, .14])), .05)
    d = smin(d, ell(p, np.array([.08, T0 + .01, -.03]), np.array([.06, .07, .13])), .05)
    # tibial tuberosity
    d = smin(d, ell(p, np.array([.05, T0 - .5, .36]), np.array([.13, .22, .09])), .16)
    return d

def fibula(p):
    hd = ell(p, np.array([.78, -.9, -.3]), np.array([.16, .2, .16]))
    sh = seg(p, np.array([.8, -.95, -.3]), np.array([.86, -3.4, -.24]), .1)
    return smin(hd, sh, .12)

def menisci(p):
    T0 = -.58; d = np.full(len(p), 1e9)
    for x0, R, sg in ((-.42, .32, 1), (.42, .29, -1)):
        q = p - np.array([x0, T0 + .035, -.02])
        rxy = np.sqrt(q[:, 0] ** 2 + (q[:, 2] / 1.2) ** 2)
        # wedge cross-section: thick at the rim, thin toward the centre
        tor = (np.sqrt(((rxy - R) / .1) ** 2 + ((q[:, 1] - .015) / .065) ** 2) - 1) * .065
        tor = smax(tor, q[:, 1] - (-.03 + .6 * (rxy - (R - .1))), .02)
        # the C opens toward the intercondylar area
        op = np.maximum(.08 - q[:, 0] * sg, np.abs(q[:, 2]) - .15)
        d = np.minimum(d, smax(tor, -op, .03))
    return d

def parts(p):
    f = femur(p); t = tibia(p); fi = fibula(p)
    # articular cartilage: a 0.04 shell over the bone ends, only where the joint surfaces are
    y = p[:, 1]
    edge = .06 * fbm(p * 4.0, 2)
    fmask = np.maximum(y - (.06 + .5 * np.clip(p[:, 2] / .6, 0, 1) - .45 * p[:, 0] ** 2) + edge, -(p[:, 2] + .5))   # condyles + trochlea
    fth = .04 * np.clip(-fmask / .3, 0, 1) ** .7
    fc = f - fth + (fth <= .001) * 1.0
    tmask = np.maximum(-(y + .63), np.abs(p[:, 0]) - .72 + edge)
    tth = .03 * np.clip(-tmask / .12, 0, 1) ** .7
    tc = t - tth + (tth <= .001) * 1.0
    m = menisci(p)
    return f, t, fi, fc, tc, m

def sdf(p):
    f, t, fi, fc, tc, m = parts(p)
    return np.minimum.reduce([np.minimum(f, fc), np.minimum(t, tc), fi, m]) * .82

def mat(p):
    f, t, fi, fc, tc, m = parts(p)
    st = np.stack([f, t, fi, np.where(fc < f - .004, fc, 9), np.where(tc < t - .004, tc, 9), m], 1)
    k = np.argmin(st, 1)
    return np.where((k == 3) | (k == 4), 1, np.where(k == 5, 2, 0))

def normal(p, e=.002):
    o = np.array([[e, 0, 0], [0, e, 0], [0, 0, e]])
    return nrm(np.stack([sdf(p + o[i]) - sdf(p - o[i]) for i in range(3)], 1))

# camera: anterior three-quarter, slightly above the joint line
CAM = np.array([3.4, .45, 5.1]); TGT = np.array([0.0, -.3, 0]); FOV = .43
fw = nrm(TGT - CAM); rt = nrm(np.cross(fw, [0, 1, 0])); up = np.cross(rt, fw)
KEY = nrm(np.array([-.6, .7, .55])); RIMW = nrm(np.array([.9, .15, -.5])); RIMC = nrm(np.array([-.95, -.1, -.4]))
FILL = nrm(np.array([.6, -.3, .7]))

def render_rows(rows):
    y0, y1 = rows
    ys, xs = np.mgrid[y0:y1, 0:W].astype(np.float64)
    u = (xs + .5) / W * 2 - 1; v = 1 - (ys + .5) / H * 2
    asp = W / H
    d = nrm(fw[None, :] + (u.reshape(-1, 1) * asp * FOV) * rt[None, :] + (v.reshape(-1, 1) * FOV) * up[None, :])
    n = len(d); o = np.repeat(CAM[None, :], n, 0)
    t = np.full(n, 3.5); hit = np.zeros(n, bool); alive = np.ones(n, bool)
    for it in range(220):
        idx = np.nonzero(alive)[0]
        if len(idx) == 0: break
        p = o[idx] + d[idx] * t[idx, None]
        s = sdf(p)
        h = s < .0007 * t[idx]
        hit[idx[h]] = True; alive[idx[h]] = False
        t[idx] += np.maximum(s, .0005)
        far = t[idx] > 10; alive[idx[far]] = False
    col = np.zeros((n, 3)); a = np.zeros(n)
    hi = np.nonzero(hit)[0]
    if len(hi):
        p = o[hi] + d[hi] * t[hi, None]; N = normal(p); V = -d[hi]; M = mat(p)
        # micro-relief: bone gets a porous grain, cartilage stays smooth with a faint undulation
        g1 = vnoise(p * 90); g2 = vnoise(p * 26); g3 = fbm(p * 5, 3)
        e3 = .004; bmp = lambda q: vnoise(q * 70) * .6 + vnoise(q * 160) * .4
        b0 = bmp(p); gb = np.stack([(bmp(p + np.array([e3, 0, 0])) - b0), (bmp(p + np.array([0, e3, 0])) - b0), (bmp(p + np.array([0, 0, e3])) - b0)], 1) / e3
        gb = gb - (gb * N).sum(1)[:, None] * N
        kb = np.where(M == 0, .0016, np.where(M == 2, .0008, .00025))
        N = nrm(N - gb * kb[:, None])
        ao = np.ones(len(hi)); w = 1.0
        for dist in (.02, .05, .1, .17, .27, .4):
            ao -= w * np.clip(dist - sdf(p + N * dist) / .82, 0, None) * 2.6; w *= .68
        ao = np.clip(ao, 0, 1) ** 1.2
        sh = np.ones(len(hi)); ts = np.full(len(hi), .03)
        for k in range(30):
            hs = sdf(p + KEY * ts[:, None]) / .82
            sh = np.minimum(sh, np.clip(8 * hs / ts, 0, 1)); ts += np.clip(hs, .02, .16)
        sh = np.clip(sh, 0, 1)
        nv = np.clip((N * V).sum(1), 0, 1); fr = (1 - nv) ** 4
        wrap = lambda l, w_: np.clip((N @ l + w_) / (1 + w_), 0, 1)
        hv = nrm(KEY[None, :] + V); nh = np.clip((N * hv).sum(1), 0, 1)
        sky = .5 + .5 * N[:, 1]
        bone = np.array([.80, .71, .56]) * (1 + .1 * g1 + .08 * g2 + .14 * g3)[:, None]
        # darker, porous metaphyseal bone toward the shafts
        bone = bone * (1 - .12 * np.clip((np.abs(p[:, 1] + .2) - .6) / 1.2, 0, 1))[:, None]
        cart = np.array([.6, .67, .77]) * (1 + .05 * g2 + .08 * g3)[:, None]
        men = np.array([.84, .84, .82]) * (1 + .03 * g2 + .04 * g3)[:, None]
        alb = np.where(M[:, None] == 1, cart, np.where(M[:, None] == 2, men, bone))
        wk = np.where(M == 1, .55, .25)                 # cartilage scatters light: wider wrap
        dk = np.clip((N @ KEY + wk) / (1 + wk), 0, 1) * (.22 + .78 * sh) * np.where(M == 1, .82, 1)
        c = alb * (dk[:, None] * np.array([1.0, .96, .9]) * 1.15
                   + wrap(FILL, .4)[:, None] * np.array([.35, .42, .6]) * .2
                   + (sky[:, None] * np.array([.5, .55, .68]) + (1 - sky[:, None]) * np.array([.14, .14, .2])) * .3 * ao[:, None])
        c = c * (.1 + .9 * ao[:, None])
        # subsurface tint in cartilage: light passing through reads faintly blue
        c += (M == 1)[:, None] * (1 - nv)[:, None] ** 1.5 * np.array([.08, .14, .26]) * ao[:, None]
        # rims: the logo rust on the lateral edge, the logo navy-blue on the medial edge
        rw = np.clip(N @ RIMW, 0, 1) ** 2 * (.35 + .65 * fr)
        rc = np.clip(N @ RIMC, 0, 1) ** 2 * (.35 + .65 * fr)
        c += rw[:, None] * np.array([.69, .27, .02]) * .7 * ao[:, None] ** .5
        c += rc[:, None] * np.array([.14, .25, .72]) * .75 * ao[:, None] ** .5
        spw = np.where(M == 1, .8, np.where(M == 2, .18, .06)); spp = np.where(M == 1, 70, np.where(M == 2, 30, 14))
        spec = nh ** spp * spw * sh
        spec += (M == 1) * fr * .12
        c += spec[:, None] * np.array([1, .98, .95])
        # soft depth haze toward the far side
        fade = np.clip((t[hi] - 6.0) / 1.6, 0, 1)
        c = c * (1 - .3 * fade[:, None]) + np.array([.03, .05, .12]) * .3 * fade[:, None]
        col[hi] = c
        # the cut shafts fade out along their length (no hard end in frame)
        yy = p[:, 1]
        a[hi] = np.clip((2.3 - yy) / 1.1, 0, 1) ** 1.6 * np.clip((yy + 2.75) / 1.1, 0, 1) ** 1.6
    return y0, col.reshape(y1 - y0, W, 3), a.reshape(y1 - y0, W)

if __name__ == '__main__':
    step = 16; chunks = [(y, min(H, y + step)) for y in range(0, H, step)]
    img = np.zeros((H, W, 3)); al = np.zeros((H, W))
    with Pool(NP) as pool:
        for y0, c, a in pool.imap_unordered(render_rows, chunks):
            img[y0:y0 + len(c)] = c; al[y0:y0 + len(c)] = a
            print('.', end='', flush=True)
    c = np.clip(img, 0, 1) ** (1 / 2.2)
    # tone: gentle shoulder so highlights keep detail
    rgba = np.dstack([c * 255, al * 255]).astype(np.uint8)
    im = Image.fromarray(rgba, 'RGBA')
    if SS != 1: im = im.resize((FW, FH), Image.LANCZOS)
    im.save(OUT); print('\nsaved', OUT, im.size)
