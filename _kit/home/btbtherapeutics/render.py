#!/usr/bin/env python3
"""Offline render for the BTB Therapeutics hero (HOME_BRIEF update 2c: a crafted render of the firm's own subject).
BTB-101 (ENDOPIN) blocks alpha2B adrenergic receptors in the spinal cord (btbtherapeutics.com, Pipeline / ENDOPIN figure).
So the hero is a transverse section of the spinal cord as a fluorescence microscope shows it after immunostaining:
the butterfly of grey matter (neurons, logo cyan) with large motor neurons in the ventral horns and small, dense
neurons in the dorsal horns; the white matter around it packed with myelinated axons cut in cross-section (logo navy,
lifted to a visible blue); bone-white beaded noradrenergic fibres descending into the dorsal horns, where BTB-101 acts;
the central canal; the dorsal median septum and the ventral median fissure; dorsal rootlets entering at the
dorsolateral sulcus. Optical blur, haze and photon noise. Written on pure black and composited additively on the
page ink, so no box edge can exist (DJ/DP). numpy + Pillow only. Usage: python3 render.py out.png [H]"""
import sys, numpy as np
from PIL import Image

OUT = sys.argv[1] if len(sys.argv) > 1 else 'hero.png'
H = int(sys.argv[2]) if len(sys.argv) > 2 else 1400
W = int(H * 1.34)
rng = np.random.default_rng(7)
yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
S = H / 2
u = (xx - W / 2) / S; v = (yy - H / 2) / S
au = np.abs(u)

def blur(a, s):
    """separable gaussian via FFT (no scipy)"""
    if s <= 0: return a
    out = a
    for ax, n in ((0, a.shape[0]), (1, a.shape[1])):
        f = np.fft.rfftfreq(n * 2)
        k = np.exp(-2 * (np.pi * f * s) ** 2)
        pad = [(0, 0), (0, 0)]; pad[ax] = (0, n)
        F = np.fft.rfft(np.pad(out, pad, mode='reflect'), axis=ax)
        shp = [1, 1]; shp[ax] = -1
        out = np.fft.irfft(F * k.reshape(shp), n=2 * n, axis=ax)
        out = out[:n] if ax == 0 else out[:, :n]
    return out.astype(np.float32)

def fbm(oct_=4, base=4, seed=0):
    r = np.random.default_rng(seed); out = np.zeros((H, W), np.float32); amp = 1.0; tot = 0
    for o in range(oct_):
        g = base * 2 ** o
        a = r.standard_normal((g + 3, int(g * W / H) + 3)).astype(np.float32)
        im = np.array(Image.fromarray(a).resize((W, H), Image.BICUBIC))
        out += amp * im; tot += amp; amp *= .5
    out /= tot
    return (out - out.min()) / (out.max() - out.min())

def seg_d(px, py, ax_, ay, bx, by):
    dx, dy = bx - ax_, by - ay
    t = np.clip(((px - ax_) * dx + (py - ay) * dy) / (dx * dx + dy * dy), 0, 1)
    return np.hypot(px - ax_ - t * dx, py - ay - t * dy), t

def smin(a, b, k=.06):
    h = np.clip(.5 + .5 * (b - a) / k, 0, 1)
    return b * (1 - h) + a * h - k * h * (1 - h)

# ---------------- the cord: an oval, with the ventral median fissure and a shallow dorsal sulcus ----------------
RX, RY = 1.06, .76
wob = (fbm(3, 3, 1) - .5) * .035
cord_sd = (np.sqrt((u / RX) ** 2 + (v / (RY * (1 - .05 * (v < 0)))) ** 2) - 1 - wob) * .76         # <0 inside (approx distance)
fiss_d, _ = seg_d(u, v, 0, .80, 0, .40)                                     # ventral median fissure
fiss = fiss_d - (.012 + .02 * np.clip((v - .4) / .4, 0, 1))
dors_d, _ = seg_d(u, v, 0, -.80, 0, -.70)                                   # dorsal median sulcus (shallow)
cord_sd = np.maximum(cord_sd, -np.minimum(fiss, dors_d - .012))
inside = cord_sd < 0

# ---------------- grey matter: the butterfly ----------------
def chain(pts):
    d = np.full((H, W), 9, np.float32)
    for (x0, y0, r0), (x1, y1, r1) in zip(pts[:-1], pts[1:]):
        dd, t = seg_d(au, v, x0, y0, x1, y1)
        d = smin(d, dd - (r0 + (r1 - r0) * t), .04)
    return d
dh = smin(chain([(.12, -.06, .075), (.17, -.2, .068), (.22, -.36, .066), (.28, -.5, .072)]), np.hypot(au - .31, v + .55) - .085, .05)   # dorsal horn with its head
vh = chain([(.1, .08, .1), (.22, .16, .15), (.31, .24, .16), (.40, .22, .1)])                                  # ventral horn
iz = chain([(.0, .0, .045), (.08, .0, .075), (.2, .03, .11)])                                                    # intermediate zone
cm = smin(iz, iz, .01)
gw = (fbm(3, 5, 2) - .5) * .03
grey_sd = smin(smin(dh, vh, .07), cm, .05) + gw
grey = np.clip(-grey_sd / .03 + .5, 0, 1) ** 1.2 * inside
white = inside * (1 - grey)
# substantia gelatinosa: the cap of each dorsal horn, translucent and fibre-rich
sg_c = np.hypot(au - .30, v + .55)
sg = np.clip((.13 - sg_c) / .05, 0, 1) * grey

# ---------------- white matter: myelinated axons in cross-section (jittered grid, 3x3 nearest search) ----------------
def cell_field(spacing, rmin, rmax, seed, region):
    r = np.random.default_rng(seed)
    gx = int(np.ceil(2 * 1.4 / spacing)); gy = int(np.ceil(2 * 1.0 / spacing))
    cxs = (-1.4 + (np.arange(gx)[None, :] + .5 + r.uniform(-.38, .38, (gy, gx))) * spacing).astype(np.float32)
    cys = (-1.0 + (np.arange(gy)[:, None] + .5 + r.uniform(-.38, .38, (gy, gx))) * spacing).astype(np.float32)
    rad = r.uniform(rmin, rmax, (gy, gx)).astype(np.float32)
    ix = np.floor((u + 1.4) / spacing).astype(int); iy = np.floor((v + 1.0) / spacing).astype(int)
    best = np.full((H, W), 9, np.float32); br = np.zeros((H, W), np.float32); bid = np.zeros((H, W), np.int64)
    for oy in (-1, 0, 1):
        for ox in (-1, 0, 1):
            jx = np.clip(ix + ox, 0, gx - 1); jy = np.clip(iy + oy, 0, gy - 1)
            d = np.hypot(u - cxs[jy, jx], v - cys[jy, jx]) / rad[jy, jx]
            m = d < best; best = np.where(m, d, best); br = np.where(m, rad[jy, jx], br); bid = np.where(m, jy * gx + jx, bid)
    return best, br, bid

dax, rax, idax = cell_field(.0185, .0055, .0105, 3, white)
myelin = np.exp(-((dax - .86) / .2) ** 2)            # the myelin ring around each axon
core = np.clip(1 - dax / .62, 0, 1) * .16             # the axon itself, faint
ax_b = np.random.default_rng(5).uniform(.55, 1.15, idax.max() + 1)[idax]
wm_tex = fbm(4, 6, 9)
lowf = fbm(2, 2, 17)
M = (myelin * ax_b + core) * white * (.35 + .55 * wm_tex) * (.55 + .6 * lowf) * .68
# ventral/lateral columns brighter (larger axons), dorsal columns finer and a bit dimmer
M *= np.clip(.82 + .25 * np.clip(v + .2, 0, 1), .7, 1.1)

# ---------------- grey matter: neuropil and neurons ----------------
npil = fbm(3, 70, 12); npil2 = fbm(2, 220, 13)
N = grey * (.06 + .18 * npil ** 2.4 + .1 * npil2 ** 3)
N += sg * .06
r = np.random.default_rng(21)
neu = np.zeros((H, W), np.float32); nucl = np.zeros((H, W), np.float32)
def put_neuron(cx, cy, rr, bright, dend, rot):
    x0, x1 = int((cx - rr * 6) * S + W / 2), int((cx + rr * 6) * S + W / 2)
    y0, y1 = int((cy - rr * 6) * S + H / 2), int((cy + rr * 6) * S + H / 2)
    x0, y0 = max(x0, 0), max(y0, 0); x1, y1 = min(x1, W), min(y1, H)
    if x1 <= x0 or y1 <= y0: return
    uu = u[y0:y1, x0:x1]; vv = v[y0:y1, x0:x1]
    ang = np.arctan2(vv - cy, uu - cx); d = np.hypot(uu - cx, vv - cy)
    rad_ = rr * (1 + .09 * np.sin(3 * ang + rot) + .05 * np.sin(5 * ang + 2 * rot))
    body = np.clip((rad_ - d) / (rr * .45), 0, 1) ** 1.3
    for k in range(dend):
        a = rot + k * 2 * np.pi / dend + r.uniform(-.4, .4); L = rr * r.uniform(1.8, 3.2)
        ex_, ey_ = cx + np.cos(a) * L, cy + np.sin(a) * L
        dd, t = seg_d(uu, vv, cx, cy, ex_, ey_)
        body = np.maximum(body, np.clip((rr * .22 * (1 - t) ** 1.4 - dd) / (rr * .12), 0, 1) * (1 - t) ** 1.2 * .7)
    neu[y0:y1, x0:x1] = np.maximum(neu[y0:y1, x0:x1], body * bright)
    nd = np.hypot(uu - cx - rr * .12, vv - cy + rr * .08)
    nucl[y0:y1, x0:x1] = np.maximum(nucl[y0:y1, x0:x1], np.clip((rr * .42 - nd) / (rr * .1), 0, 1) * body)
def sample_in(mask_fn, n, rr0, rr1, bright0, bright1, dend0, dend1, mind):
    placed = []; tries = 0
    while len(placed) < n and tries < n * 80:
        tries += 1
        x, y = r.uniform(-.75, .75), r.uniform(-.8, .65)
        if not mask_fn(x, y): continue
        rr = r.uniform(rr0, rr1)
        if any(np.hypot(x - a, y - b) < (rr + c) * mind for a, b, c in placed): continue
        placed.append((x, y, rr))
        put_neuron(x, y, rr, r.uniform(bright0, bright1), int(r.integers(dend0, dend1 + 1)), r.uniform(0, 6.3))
    return placed
def gsd(x, y):
    iy = int(np.clip(y * S + H / 2, 0, H - 1)); ix = int(np.clip(x * S + W / 2, 0, W - 1)); return grey_sd[iy, ix]
# motor neurons: large, multipolar, in the ventral horns (lateral and medial pools)
sample_in(lambda x, y: y > .1 and gsd(x, y) < -.03 and abs(x) > .14, 30, .020, .032, .75, 1.1, 3, 5, 1.6)
# dorsal horn: small, dense interneurons
sample_in(lambda x, y: y < -.05 and gsd(x, y) < -.012, 260, .0065, .011, .35, .8, 0, 2, 1.5)
# intermediate zone
sample_in(lambda x, y: -.1 < y < .12 and gsd(x, y) < -.015, 80, .009, .016, .4, .8, 1, 3, 1.5)
N += neu * 1.05 * (1 - .55 * nucl)
# glial nuclei scattered through the white matter (faint, DAPI-like, rendered in bone)
gl, glr, glid = cell_field(.055, .0045, .0065, 8, white)
gl_on = np.random.default_rng(9).random(glid.max() + 1)[glid] < .55
G = np.clip(1 - gl / 1.0, 0, 1) ** .8 * white * gl_on * .5

# ---------------- noradrenergic fibres descending into the dorsal horns (beaded, bone-white) ----------------
F = np.zeros((H, W), np.float32)
rf = np.random.default_rng(31)
def fibre(pts_, w_):
    for (x0, y0), (x1, y1) in zip(pts_[:-1], pts_[1:]):
        xa, xb = sorted((x0, x1)); ya, yb = sorted((y0, y1))
        X0 = max(int((xa - .02) * S + W / 2), 0); X1 = min(int((xb + .02) * S + W / 2), W)
        Y0 = max(int((ya - .02) * S + H / 2), 0); Y1 = min(int((yb + .02) * S + H / 2), H)
        if X1 <= X0 or Y1 <= Y0: continue
        dd, t = seg_d(u[Y0:Y1, X0:X1], v[Y0:Y1, X0:X1], x0, y0, x1, y1)
        F[Y0:Y1, X0:X1] = np.maximum(F[Y0:Y1, X0:X1], np.exp(-(dd / w_) ** 2))
def bead(bx, by, rad, amp):
    X0 = max(int((bx - .012) * S + W / 2), 0); Y0 = max(int((by - .012) * S + H / 2), 0)
    X1 = min(X0 + int(.024 * S) + 1, W); Y1 = min(Y0 + int(.024 * S) + 1, H)
    dd = np.hypot(u[Y0:Y1, X0:X1] - bx, v[Y0:Y1, X0:X1] - by)
    F[Y0:Y1, X0:X1] = np.maximum(F[Y0:Y1, X0:X1], np.exp(-(dd / rad) ** 2) * amp)
for side in (-1, 1):
    # varicose terminal fibres meandering through the dorsal horn, densest in its superficial head
    placed = 0; tries = 0
    while placed < 46 and tries < 5000:
        tries += 1
        x, y = side * rf.uniform(.08, .45), rf.uniform(-.68, -.02)
        if gsd(x, y) > -.01: continue
        if rf.random() > .35 + .65 * np.clip((-y - .05) / .5, 0, 1): continue
        placed += 1; a = rf.uniform(0, 2 * np.pi); pts_ = [(x, y)]
        for st in range(int(rf.integers(6, 16))):
            a += rf.uniform(-.6, .6); x += np.cos(a) * .008; y += np.sin(a) * .008; pts_.append((x, y))
            if rf.random() < .3: bead(x, y, .0024, .75)
        fibre(pts_, .0009)
    # descending axons in the dorsolateral funiculus, cut across: bright points
    for k in range(70):
        ang = rf.uniform(-1.25, -.55); rr_ = rf.uniform(.62, .9)
        bead(side * RX * rr_ * np.cos(ang) * .95, RY * rr_ * np.sin(ang) * .95 + .1, .0032, rf.uniform(.5, .9))
F *= inside * .62

# ---------------- central canal: a ring of ependymal nuclei ----------------
cc = np.hypot(u, (v - .0) / .8)
canal = np.exp(-((cc - .022) / .007) ** 2) * (.6 + .5 * npil2)
G += canal * .9
N *= np.clip(cc / .02, 0, 1)

# ---------------- pia: a fine bright membrane on the surface, and the dorsal median septum ----------------
pia = np.exp(-(cord_sd / .005) ** 2)
sep_d, _ = seg_d(u, v, 0, -.72, 0, -.08)
sep = np.exp(-(sep_d / .0035) ** 2) * inside * .45
fis_l = np.exp(-(np.abs(fiss) / .005) ** 2) * (v > .38) * (v < .78) * .6
P = (pia + fis_l) * (.4 + .4 * wm_tex) + sep

# ---------------- dorsal rootlets entering at the dorsolateral sulcus ----------------
R = np.zeros((H, W), np.float32)
for side in (-1, 1):
    for k in range(0):
        ang0 = np.deg2rad(-58 + k * 3.2)                 # around the dorsolateral sulcus
        ex0 = side * RX * .985 * np.cos(ang0) * .92; ey0 = RY * np.sin(ang0) * .99
        pts_ = []
        for s in range(30):
            t = s / 29
            px = ex0 + side * (t * .42 + .03 * np.sin(t * 5 + k)); py = ey0 - t * (.22 + .02 * k) + .015 * np.sin(t * 7 + k)
            pts_.append((px, py))
        w_ = .006 + .0015 * (k % 3)
        for (x0, y0), (x1, y1) in zip(pts_[:-1], pts_[1:]):
            X0 = max(int((min(x0, x1) - .03) * S + W / 2), 0); X1 = min(int((max(x0, x1) + .03) * S + W / 2), W)
            Y0 = max(int((min(y0, y1) - .03) * S + H / 2), 0); Y1 = min(int((max(y0, y1) + .03) * S + H / 2), H)
            if X1 <= X0 or Y1 <= Y0: continue
            dd, t = seg_d(u[Y0:Y1, X0:X1], v[Y0:Y1, X0:X1], x0, y0, x1, y1)
            prof = np.exp(-((dd - w_ * .7) / (w_ * .35)) ** 2) * .8 + np.exp(-(dd / w_) ** 2) * .25
            R[Y0:Y1, X0:X1] = np.maximum(R[Y0:Y1, X0:X1], prof)
R *= (1 - inside)
rr_out = np.sqrt((u / RX) ** 2 + (v / RY) ** 2)
R *= np.clip(1 - (rr_out - 1.05) / .38, 0, 1) ** 1.5

# ---------------- optics ----------------
focus = np.clip(np.abs(u * .35 - v * .3 + .05) * 1.2 - .25, 0, 1) ** 1.4
def optics(ch, s0=.7, s1=4.0):
    a = blur(ch, s0); b = blur(ch, s1); return a * (1 - focus) + b * focus
Mb = optics(M); Nb = optics(N); Fb = optics(F, .5, 2.5); Gb = optics(G + P * .8, .8, 3); Rb = optics(R, 1.0, 3)
Mb += blur(Mb, 16) * .35; Nb += blur(Nb, 14) * .45; Fb += blur(Fb, 8) * .5
def tm(x, k): return 1 - np.exp(-np.clip(x, 0, None) * k)
m = tm(Mb, 1.25); n = tm(Nb, 1.5); f = tm(Fb, 1.6); g = tm(Gb, 1.2); rt = tm(Rb, 1.0)
# stains: myelin in the logo navy lifted to a visible blue; neurons in the logo cyan; fibres/nuclei in bone white
cM = np.array([58, 92, 214]) / 255; cN = np.array([40, 178, 226]) / 255; cF = np.array([236, 243, 252]) / 255
cG = np.array([150, 176, 236]) / 255; cR = np.array([60, 96, 200]) / 255
img = m[..., None] * cM + n[..., None] * cN + f[..., None] * cF * .95 + g[..., None] * cG + rt[..., None] * cR * .8
hi = np.clip(img.max(-1, keepdims=True) - .74, 0, 1) / .26
img = img * (1 - .3 * hi) + .3 * hi * img.max(-1, keepdims=True)
lum = img.max(-1, keepdims=True)
img += rng.normal(0, 1, img.shape).astype(np.float32) * (.01 + .04 * np.sqrt(lum)) * (lum > .004)
img = np.clip(img, 0, 1) ** (1 / 1.1)
# guarantee a black frame (no seam when composited)
ex = np.clip((np.minimum(np.minimum(xx, W - 1 - xx), np.minimum(yy, H - 1 - yy)) / (H * .08)), 0, 1)
img *= (ex ** 2)[..., None]
Image.fromarray((img * 255 + .5).astype(np.uint8)).save(OUT)
print('wrote', OUT, W, H)
