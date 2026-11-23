#!/usr/bin/env python3
"""ATXA hero (HOME_BRIEF update 2c: a crafted render of the firm's real mechanism). The thromboxane A2 receptor (TP), the
G-protein-coupled receptor that ATXA's NTP42 antagonises: seven transmembrane alpha-helices in cartoon form (helical ribbons,
swept tubes), their extra- and intracellular loops and helix 8, set in a lipid bilayer whose head groups fade out radially,
with a small-molecule ligand in the orthosteric pocket (atxatherapeutics.com/our-pipeline; the 2026 Nature Communications
TP structure paper). A stylised, not atom-exact, GPCR fold. Perspective camera, per-pixel sphere-swept z-buffer, glossy
shading in the logo blues, screen-space ambient occlusion. Supersampled x2, saved with ALPHA (no ground, DJ).
Usage: python3 render.py W H out.png"""
import sys, os, numpy as np
from PIL import Image, ImageFilter
W = int(sys.argv[1]) if len(sys.argv) > 1 else 1300
H = int(sys.argv[2]) if len(sys.argv) > 2 else 1200
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = 2; RW, RH = W * SS, H * SS
rng = np.random.default_rng(int(os.environ.get("SEED", "42")))
def nrm(v): return v / np.maximum(np.linalg.norm(v, axis=-1, keepdims=True), 1e-9)

SPH = []  # (center xyz, radius, material id)
def tube(path, r, mat, step=0.28):
    path = np.asarray(path, float); seg = np.diff(path, axis=0); L = np.linalg.norm(seg, axis=1)
    acc = 0.0
    for i in range(len(seg)):
        n = max(1, int(np.ceil(L[i] / step)))
        rr = r(i / len(seg)) if callable(r) else r
        for k in range(n):
            SPH.append((path[i] + seg[i] * (k / n), rr, mat))

def catmull(P, n=24):
    P = np.asarray(P, float); out = []
    P2 = np.vstack([P[0] * 2 - P[1], P, P[-1] * 2 - P[-2]])
    for i in range(1, len(P2) - 2):
        p0, p1, p2, p3 = P2[i - 1], P2[i], P2[i + 1], P2[i + 2]
        for t in np.linspace(0, 1, n, endpoint=False):
            t2, t3 = t * t, t * t * t
            out.append(0.5 * ((2 * p1) + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 + (-p0 + 3 * p1 - 3 * p2 + p3) * t3))
    out.append(P[-1]); return np.array(out)

# ---- seven transmembrane helices (x right, y up = extracellular, z toward viewer), Angstrom ----
ang = np.radians([200, 250, 300, 350, 35, 78, 140]); rad = [12.5, 11.0, 7.5, 12.5, 13.0, 12.0, 11.0]
tilt = [(.22, .10), (-.18, .12), (.05, -.25), (.12, .18), (-.20, -.08), (.25, -.10), (-.08, .22)]
top = [21, 17, 24, 15, 23, 20, 18]; bot = [-22, -24, -20, -18, -25, -23, -19]
HEL = []
for i in range(7):
    c = np.array([rad[i] * np.cos(ang[i]), 0, rad[i] * np.sin(ang[i])])
    tx, tz = tilt[i]; ax = nrm(np.array([tx, 1.0, tz]))
    b = c + ax * (bot[i] / ax[1]); t = c + ax * (top[i] / ax[1])
    if i % 2 == 0: b, t = t, b          # alternate directions so loops alternate top / bottom
    HEL.append((b, t))
def helix(b, t, mat, phase=0.0, R=2.35, rise=1.5):
    ax = t - b; Lh = np.linalg.norm(ax); a = ax / Lh
    u = nrm(np.cross(a, [0.3, 0.1, 1.0])); v = np.cross(a, u)
    s = np.arange(0, Lh, 0.1); w = 2 * np.pi / (3.6 * rise)
    P = b + np.outer(s, a) + R * (np.outer(np.cos(w * s + phase), u) + np.outer(np.sin(w * s + phase), v))
    # ribbon taper in and out at the ends
    # a cartoon ribbon: a flat band (three swept spheres across the band, along the helix axis), thinning at the ends
    for o in np.linspace(-1.05, 1.05, 12):
        k = np.clip(np.minimum(s, Lh - s) / 3.0, 0, 1)
        tube(P + np.outer(o * k, a), lambda f: 0.5 + 0.12 * np.sin(np.pi * min(1, max(0, f))), mat, step=0.24)
    return P[0], P[-1]
ENDS = []
for i, (b, t) in enumerate(HEL):
    ENDS.append(helix(b, t, i, phase=i * 1.3))
# loops: smooth tubes bulging out of the membrane between consecutive helices
for i in range(6):
    e0 = ENDS[i][1]; s1 = ENDS[i + 1][0]; up = 1 if e0[1] > 0 else -1
    mid = (e0 + s1) / 2; out = nrm(np.array([mid[0], 0, mid[2]]) + 1e-3)
    lift = (4.5 if up > 0 else 1.5) + (7 if i == 3 else 0); hk = 3.5 if up > 0 else 1.8
    ctrl = [e0, e0 + np.array([0, up * hk * .5, 0]), mid + np.array([0, up * lift, 0]) + out * (2.0 if i != 3 else 8), s1 + np.array([0, up * hk * .5, 0]), s1]
    if i == 3:  # the long second extracellular loop folds over the pocket
        ctrl.insert(3, mid + np.array([0, up * 5, 0]) - out * 5)
    ctrl = ctrl if up > 0 else [e0, mid + np.array([0, -2.6, 0]) + out * 2.0, s1]
    tube(catmull(ctrl, 30), 0.75, 7 + i % 2)
# helix 8 along the inner membrane face, from the end of TM7
e7 = ENDS[6][1]; d8 = nrm(np.array([0.85, 0, 0.1]))
h8b = e7 + np.array([0, -2.5, 0]) + d8 * 3; h8t = h8b + d8 * 15
tube(catmull([e7, e7 + np.array([0, -2, 0]) + d8 * 1.5, h8b], 20), 0.75, 8)
helix(h8b, h8t, 6, phase=.4)
# N-terminus above, C-terminal tail below (short, fading)
s0 = ENDS[0][0]; tube(catmull([s0, s0 + [-3, 5, 2], s0 + [-8, 8, 6], s0 + [-12, 9, 4]], 20), .7, 7)
# ---- ligand (ball and stick) in the orthosteric pocket, upper third of the bundle ----
LIG = []
base = np.array([1.0, 9.0, 1.5])
ring = [base + 1.4 * np.array([np.cos(a), np.sin(a) * .3, np.sin(a)]) for a in np.linspace(0, 2 * np.pi, 7)[:-1]]
ring2 = [p + np.array([3.6, 1.2, -1.0]) for p in ring]
chain = [ring[0] + [1.4, -.6, 0], ring[0] + [2.6, -1.8, .6], ring2[3] + [-1.3, -.5, .2]]
tail = [ring[3] + [-1.4, .4, 0], ring[3] + [-2.7, -.2, .8], ring[3] + [-3.9, .8, 1.2], ring[3] + [-5.0, .2, 2.2]]
atoms = ring + ring2 + chain + tail
for p in atoms: SPH.append((np.array(p), .62, 10))
def stick(a, b):
    a, b = np.array(a), np.array(b)
    for k in range(10): SPH.append((a + (b - a) * k / 10, .25, 11))
for rr_ in (ring, ring2):
    for k in range(6): stick(rr_[k], rr_[(k + 1) % 6])
stick(ring[0], chain[0]); stick(chain[0], chain[1]); stick(chain[1], chain[2]); stick(chain[2], ring2[3])
stick(ring[3], tail[0]); [stick(tail[k], tail[k + 1]) for k in range(3)]
# ---- lipid bilayer: two leaflets of head groups with a short tail stub, fading out radially ----
def leaflet(y, sgn):
    pts = []; spacing = 7.6
    for gx in np.arange(-95, 96, spacing):
        for gz in np.arange(-95, 96, spacing * .866):
            x = gx + (spacing / 2 if int(round((gz + 95) / (spacing * .866))) % 2 else 0) + rng.normal(0, .9)
            z = gz + rng.normal(0, .9); rr_ = np.hypot(x, z)
            if rr_ < 20 or rr_ > 58: continue
            pts.append((x, z, rr_))
    for x, z, rr_ in pts:
        yy = y + rng.normal(0, .5)
        SPH.append((np.array([x, yy, z]), 2.35, 20 if sgn > 0 else 21))
        # tails, visible only between head groups and at the slab's fading edge
        for k in range(1, 4):
            SPH.append((np.array([x + rng.normal(0, .3), yy - sgn * (2.0 + k * 1.9), z + rng.normal(0, .3)]), .7, 22))
leaflet(20.5, 1); leaflet(-20.5, -1)
print('spheres', len(SPH), flush=True)

# ---- camera ----
C = np.array([s[0] for s in SPH]); Rr = np.array([s[1] for s in SPH]); M = np.array([s[2] for s in SPH])
yaw, pitch = np.radians(-28), np.radians(16)
Ry = np.array([[np.cos(yaw), 0, np.sin(yaw)], [0, 1, 0], [-np.sin(yaw), 0, np.cos(yaw)]])
Rx = np.array([[1, 0, 0], [0, np.cos(pitch), -np.sin(pitch)], [0, np.sin(pitch), np.cos(pitch)]])
P = C @ Ry.T @ Rx.T
keep = ~((M >= 20) & (P[:, 2] > -4.0))   # cutaway: the bilayer only behind the receptor's mid-plane
C, Rr, M, P = C[keep], Rr[keep], M[keep], P[keep]
Dcam = 330.0; f = 1.0
depth = Dcam - P[:, 2]
sx = P[:, 0] / depth; sy = -P[:, 1] / depth; sr = Rr / depth
# fit: the receptor (non-lipid) defines the scale; lipids may run out and fade
core = M < 20
x0, x1 = (sx - sr)[core].min(), (sx + sr)[core].max(); y0, y1 = (sy - sr)[core].min(), (sy + sr)[core].max()
scale = min(RW * .56 / (x1 - x0), RH * .78 / (y1 - y0))
cxs = RW * .5 - (x0 + x1) / 2 * scale; cys = RH * .5 - (y0 + y1) / 2 * scale
X = sx * scale + cxs; Y = sy * scale + cys; Rp = sr * scale; Zd = depth
Z = np.full((RH, RW), 1e9); N = np.zeros((RH, RW, 3)); K = np.full((RH, RW), -1, np.int16); RAD = np.zeros((RH, RW))
order = np.argsort(-Zd)
for j in order:
    r = Rp[j]; x, y = X[j], Y[j]
    xa, xb = int(max(0, x - r - 1)), int(min(RW, x + r + 2)); ya, yb = int(max(0, y - r - 1)), int(min(RH, y + r + 2))
    if xb <= xa or yb <= ya: continue
    yy, xx = np.mgrid[ya:yb, xa:xb].astype(float)
    dx, dy = (xx - x) / r, (yy - y) / r; q = dx * dx + dy * dy; m = q < 1
    if not m.any(): continue
    nz = np.sqrt(np.maximum(0, 1 - q)); zc = Zd[j] - nz * Rr[j]
    sub = Z[ya:yb, xa:xb]; upd = m & (zc < sub)
    sub[upd] = zc[upd]
    N[ya:yb, xa:xb][upd] = np.stack([dx, dy, -nz], -1)[upd]
    K[ya:yb, xa:xb][upd] = M[j]
    RAD[ya:yb, xa:xb][upd] = np.hypot(C[j, 0], C[j, 2])
print('raster done', flush=True)
hit = K >= 0
n = nrm(N); V = np.array([0, 0, -1.0])
L1 = nrm(np.array([-0.5, -0.75, -0.65])); L2v = nrm(np.array([0.8, 0.2, -0.1]))
ndl = (n * L1).sum(-1); wrap = np.clip((ndl + 0.3) / 1.3, 0, 1)
hv = nrm(L1 + V); spec = np.clip((n * hv).sum(-1), 0, 1)
fres = (1 - np.clip(-(n * V).sum(-1) * -1, 0, 1)) ** 2.4
fres = (1 - np.clip((n * -V).sum(-1) * -1 + 1, 0, 1)) ** 2.4 if False else (1 - np.abs(n[..., 2])) ** 2.4
back = np.clip((n * L2v).sum(-1), 0, 1)
# materials: helices in the logo blues (deep #0606A6 to pale periwinkle), loops a quieter blue-grey, ligand warm white
HB = [np.array(c) / 255 for c in [(30, 34, 190), (46, 56, 214), (64, 80, 232), (90, 108, 240), (118, 136, 246), (150, 164, 250), (182, 192, 252)]]
base = np.zeros((RH, RW, 3))
for i in range(7): base[K == i] = HB[i]
base[(K == 7) | (K == 8)] = np.array([120, 128, 190]) / 255
base[K == 10] = np.array([246, 244, 238]) / 255
base[K == 11] = np.array([200, 200, 210]) / 255
base[(K == 20) | (K == 21)] = np.array([96, 104, 150]) / 255
base[K == 22] = np.array([52, 58, 96]) / 255
shade = 0.16 + 0.84 * wrap
col = base * shade[..., None]
gl = np.isin(K, [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11])
col += np.array([1, 1, 1]) * (np.where(gl, (spec ** 48) * 0.6 + (spec ** 10) * 0.10, (spec ** 24) * 0.18))[..., None]
col += np.array([0.55, 0.62, 1.0]) * (fres * np.where(gl, .35, .18) + back * .10)[..., None]
# screen-space ambient occlusion from the depth buffer
Zf = np.where(hit, Z, Z[hit].max() + 40)
def box(a, r, ax):
    r = max(1, int(r)); c = np.cumsum(np.pad(a, [(r + 1, r) if k == ax else (0, 0) for k in range(2)], mode='edge'), axis=ax)
    return (np.take(c, range(2 * r + 1, c.shape[ax]), axis=ax) - np.take(c, range(0, c.shape[ax] - 2 * r - 1), axis=ax)) / (2 * r + 1)
def blur(a, s):
    r = s * 0.9
    for _ in range(3): a = box(box(a, r, 0), r, 1)
    return a
ao = np.zeros((RH, RW))
for s, wgt in ((3 * SS, .5), (9 * SS, .35), (22 * SS, .25)):
    zb = blur(Zf, s); ao += wgt * np.clip((Zf - zb) / (1.5 + s / SS * .35), 0, 1)
ao = np.clip(1 - ao * 1.1, 0.25, 1)
col *= ao[..., None]
# lipids recede: they sink toward the ink with distance from the receptor, and their alpha fades radially
lip = K >= 20
fade = np.clip((58 - RAD) / 32, 0, 1); fade = fade * fade * (3 - 2 * fade)
col = np.where(lip[..., None], col * (0.55 + 0.45 * fade)[..., None], col)
yy0, xx0 = np.mgrid[0:RH, 0:RW]
hx = np.clip((0.40 - np.abs(xx0 / RW - 0.5)) / 0.30, 0, 1); hx = hx * hx * (3 - 2 * hx); hx = hx * hx   # screen-space side fade: lipids end well inside the canvas
fade = fade * hx
alpha = hit.astype(float) * np.where(lip, fade, 1.0)
rgb = np.clip(col, 0, 1)
# keep edges of the canvas clean
yy, xx = np.mgrid[0:RH, 0:RW]
ex = np.minimum(xx, RW - 1 - xx) / (RW * .08); ey = np.minimum(yy, RH - 1 - yy) / (RH * .08)
fe = np.clip(np.minimum(ex, ey), 0, 1); alpha *= fe * fe * (3 - 2 * fe)
img = np.dstack([rgb * alpha[..., None], alpha])
im = Image.fromarray((img * 255).astype(np.uint8), 'RGBA').resize((W, H), Image.LANCZOS)
a = np.asarray(im).astype(float) / 255
rgb = a[..., :3] / np.maximum(a[..., 3:], 1e-6)
Image.fromarray((np.dstack([np.clip(rgb, 0, 1), a[..., 3:]]) * 255).astype(np.uint8), 'RGBA').save(OUT)
print('saved', OUT)
