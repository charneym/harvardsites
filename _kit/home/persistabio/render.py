#!/usr/bin/env python3
"""Persista Bio hero (HOME_BRIEF update 2c: a crafted render of the firm's real product). The O2Line(TM) oxygenated
cell capsule, after Persista Bio's own "Oxygenated Cell Capsule, Diabetes Application, Cross Section" figure and the
Nature Communications 2025 description (Pham et al., DOI 10.1038/s41467-025-62271-2): a tubular, core-shell nanofibrous
immunoisolating capsule; a central oxygen line fed by the implantable electrochemical oxygen generator (iEOG) and
leaving through a port at one end; densely packed pancreatic islets in the compartment around the line.
The shell is cut away over its middle so the islets and the oxygen line can be seen.

Offline numpy renderer, orthographic: analytic capsule/cylinder intersections for the shell (outer + inner walls and
the cut faces) and the oxygen line, z-buffered sphere splats for the islets (each islet is a cluster of ~110 cells),
electrospun-fibre texture on the membrane, wrap Lambert + Blinn specular + Fresnel rim, screen-space ambient occlusion,
a translucent front wall and oxygen line, true alpha (DJ). Usage: python3 render.py out.png"""
import sys, numpy as np
from PIL import Image, ImageDraw
from scipy.ndimage import gaussian_filter, map_coordinates
rng = np.random.default_rng(7)
out = sys.argv[1]
W, H = 2400, 1900                       # 2x supersampled
L = 2.45                                  # half length of the cylinder part (capsule axis = local x)
RO, RI = 1.0, 0.90                       # shell outer / inner radius
R2 = 0.20                                # oxygen line radius
CUT0, CUT1 = -1.45, 1.6                  # axial extent of the cut-away window
def rot(a, deg):
    t = np.radians(deg); c, s = np.cos(t), np.sin(t)
    return {'x': np.array([[1, 0, 0], [0, c, -s], [0, s, c]]), 'y': np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]]),
            'z': np.array([[c, -s, 0], [s, c, 0], [0, 0, 1]])}[a]
# world = M @ local.  camera looks along -z (world); screen x right, y up
M = rot('z', 27) @ rot('x', 40) @ rot('y', -14)
Mi = M.T
S = 2.62 / 0.5 * 100                     # pixels per unit (at 2x)
S = 300.0
cx, cy = W / 2 + 60, H / 2 + 10
px, py = np.meshgrid(np.arange(W) + .5, np.arange(H) + .5)
wx = (px - cx) / S; wy = -(py - cy) / S
# rays in local coords: origin o = Mi @ (wx, wy, 20), dir d = Mi @ (0,0,-1)
O = np.stack([wx, wy, np.full_like(wx, 20.0)], -1) @ Mi.T
D = (Mi @ np.array([0, 0, -1.0]))
Dl = np.broadcast_to(D, O.shape)
INF = 1e9

def capsule(R, half):
    """near/far ray hits of a capsule of radius R around local x in [-half, half]."""
    tn = np.full(O.shape[:2], INF); tf = np.full(O.shape[:2], -INF)
    oy, oz = O[..., 1], O[..., 2]; dy, dz = D[1], D[2]
    a = dy * dy + dz * dz; b = 2 * (oy * dy + oz * dz); c = oy * oy + oz * oz - R * R
    disc = b * b - 4 * a * c; ok = disc > 0; sq = np.sqrt(np.where(ok, disc, 0))
    for sgn in (-1, 1):
        t = (-b + sgn * sq) / (2 * a); x = O[..., 0] + t * D[0]; m = ok & (np.abs(x) <= half)
        tn = np.where(m, np.minimum(tn, t), tn); tf = np.where(m, np.maximum(tf, t), tf)
    for e in (-half, half):
        oc = O - np.array([e, 0, 0]); b2 = (oc * D).sum(-1); c2 = (oc * oc).sum(-1) - R * R
        d2 = b2 * b2 - c2; ok2 = d2 > 0; s2 = np.sqrt(np.where(ok2, d2, 0))
        for sgn in (-1, 1):
            t = -b2 + sgn * s2; x = O[..., 0] + t * D[0]
            m = ok2 & ((x - e) * np.sign(e) >= 0)
            tn = np.where(m, np.minimum(tn, t), tn); tf = np.where(m, np.maximum(tf, t), tf)
    return tn, tf

def normal_caps(P, half):
    q = np.zeros_like(P); q[..., 0] = np.clip(P[..., 0], -half, half)
    n = P - q; return n / np.linalg.norm(n, axis=-1, keepdims=True)

# the viewer's "up" direction in local coords decides which half of the shell the window removes
vdir = -D / np.linalg.norm(D)
up_l = Mi @ np.array([0, 1.0, 0])
cdir = vdir * .75 + up_l * .25; cdir[0] = 0; cdir /= np.linalg.norm(cdir)
def in_cut(P):
    r = np.sqrt(P[..., 1] ** 2 + P[..., 2] ** 2) + 1e-9
    cosang = (P[..., 1] * cdir[1] + P[..., 2] * cdir[2]) / r
    return (cosang > np.cos(np.radians(78))) & (P[..., 0] > CUT0) & (P[..., 0] < CUT1)

# ---- fibre texture: an electrospun mat in (x, theta) parameter space
TW, TH = 4096, 1400
tex = Image.new('L', (TW, TH), 0); dr = ImageDraw.Draw(tex)
for _ in range(30000):
    x0, y0 = rng.uniform(-200, TW + 200), rng.uniform(-200, TH + 200)
    ang = rng.uniform(0, np.pi); ln = rng.uniform(120, 700)
    pts = []; a = ang
    for k in range(12):
        pts.append((x0, y0)); a += rng.normal(0, .12); x0 += np.cos(a) * ln / 12; y0 += np.sin(a) * ln / 12
    dr.line(pts, fill=int(rng.uniform(90, 255)), width=int(rng.choice([1, 1, 1, 2])))
tex = np.asarray(tex, float) / 255
tex = gaussian_filter(tex, .5) * .8 + gaussian_filter(tex, 2.5) * .6
tex = np.clip(tex, 0, 1.4) / 1.4
def fibre(P):
    th = np.arctan2(P[..., 2], P[..., 1])
    u = (P[..., 0] + L + RO) / (2 * L + 2 * RO) * (TW - 1); v = (th + np.pi) / (2 * np.pi) * (TH - 1)
    return map_coordinates(tex, [v, u], order=1, mode='wrap')

# ---- shell
tnO, tfO = capsule(RO, L); tnI, tfI = capsule(RI, L)
hitO = tnO < INF / 2
P_on = O + tnO[..., None] * Dl
front_cut = hitO & in_cut(P_on)
front_ok = hitO & ~front_cut                      # outer wall seen from outside
P_ib = O + tfI[..., None] * Dl                    # far inner wall (seen from inside, through the window)
back_ok = (tfI > -INF / 2) & ~in_cut(P_ib)
# cut faces: two radial planes (theta = +-78deg about cdir) and two annular rings at CUT0, CUT1
faces_t = np.full(O.shape[:2], INF); faces_n = np.zeros(O.shape)
perp = np.array([0, -cdir[2], cdir[1]])
for sg in (-1, 1):
    a = np.radians(78) * sg
    dirv = np.array([0, cdir[1] * np.cos(a) - cdir[2] * np.sin(a), cdir[1] * np.sin(a) + cdir[2] * np.cos(a)])
    nrm = np.array([0, -dirv[2], dirv[1]])
    den = D @ nrm
    t = -(O @ nrm) / den; P = O + t[..., None] * Dl
    rr = P @ dirv; m = (rr > RI) & (rr < RO) & (P[..., 0] > CUT0) & (P[..., 0] < CUT1)
    nn = nrm if (D @ nrm) < 0 else -nrm
    upd = m & (t < faces_t); faces_t = np.where(upd, t, faces_t); faces_n[upd] = nn
for xe in (CUT0, CUT1):
    t = (xe - O[..., 0]) / D[0]; P = O + t[..., None] * Dl
    r = np.sqrt(P[..., 1] ** 2 + P[..., 2] ** 2)
    m = (r > RI) & (r < RO) & in_cut(np.stack([P[..., 0] * 0 + (CUT0 + CUT1) / 2, P[..., 1], P[..., 2]], -1))
    nn = np.array([1.0, 0, 0]) * (-np.sign(D[0]))
    upd = m & (t < faces_t); faces_t = np.where(upd, t, faces_t); faces_n[upd] = nn

# ---- oxygen line: a cylinder on the axis, leaving through the left end cap as the port
X0, X1 = -L - RO - .95, L + .25
def tube(R, x0, x1):
    oy, oz = O[..., 1], O[..., 2]; dy, dz = D[1], D[2]
    a = dy * dy + dz * dz; b = 2 * (oy * dy + oz * dz); c = oy * oy + oz * oz - R * R
    disc = b * b - 4 * a * c; ok = disc > 0
    t = (-b - np.sqrt(np.where(ok, disc, 0))) / (2 * a); x = O[..., 0] + t * D[0]
    return np.where(ok & (x > x0) & (x < x1), t, INF)
tT = tube(R2, X0, X1)
# rounded tip of the line inside the capsule
oc = O - np.array([X1, 0, 0]); b2 = (oc * D).sum(-1); c2 = (oc * oc).sum(-1) - R2 * R2; d2 = b2 * b2 - c2
tTip = np.where(d2 > 0, -b2 - np.sqrt(np.where(d2 > 0, d2, 0)), INF)
tipx = O[..., 0] + tTip * D[0]; tTip = np.where(tipx >= X1, tTip, INF)
tT = np.minimum(tT, tTip)
# the port sleeve where the line leaves the capsule
tSl = tube(R2 + .07, -L - RO - .28, -L - RO + .12)

# ---- islets: clusters of cells splatted into a z-buffer (screen space)
islets = []
tries = 0
while len(islets) < 150 and tries < 60000:
    tries += 1
    ri = rng.uniform(.16, .27)
    x = rng.uniform(-L - .35, L + .35); r = rng.uniform(R2 + ri + .02, RI - ri - .01); th = rng.uniform(0, 2 * np.pi)
    c = np.array([x, r * np.cos(th), r * np.sin(th)])
    if abs(x) > L:          # inside the end caps
        if np.linalg.norm(c - np.array([np.sign(x) * L, 0, 0])) > RI - ri - .01: continue
    if all(np.linalg.norm(c - q) > (ri + qr) * .93 for q, qr in islets): islets.append((c, ri))
print('islets', len(islets))
cells = []; ccol = []
for c, ri in islets:
    n = int(240 * (ri / .22) ** 2)
    k = np.arange(n) + .5; phi = np.arccos(1 - 2 * k / n); the = np.pi * (1 + 5 ** .5) * k
    dirs = np.stack([np.cos(the) * np.sin(phi), np.sin(the) * np.sin(phi), np.cos(phi)], -1)
    dirs = dirs @ rot('z', rng.uniform(0, 360)).T @ rot('x', rng.uniform(0, 360)).T
    lump = sum(rng.uniform(.03, .08) * np.sin(rng.uniform(1.5, 3.5) * (dirs @ rng.normal(0, 1, 3)) + rng.uniform(0, 6)) for _ in range(4))
    rr = ri * (1 + lump)
    ell = np.diag(rng.uniform(.82, 1.18, 3)) @ rot('z', rng.uniform(0, 360)) @ rot('y', rng.uniform(0, 360))
    pos = c + ((dirs * (rr[:, None] - ri * .08)) @ ell.T) + rng.normal(0, ri * .018, (n, 3))
    cr = ri * rng.uniform(.16, .2, n)
    tone = rng.uniform(-.07, .06)
    for p, q in zip(pos, cr):
        cells.append((p, q)); ccol.append(tone + rng.normal(0, .025))
    cells.append((c, ri * .74)); ccol.append(tone - .06)   # the islet's core keeps the cluster solid
CP = np.array([p for p, _ in cells]); CR = np.array([q for _, q in cells]); CC = np.array(ccol)
Wp = CP @ M.T                                   # world
SX = cx + Wp[:, 0] * S; SY = cy - Wp[:, 1] * S; SZ = Wp[:, 2] * S; SR = CR * S
zb = np.full((H, W), -1e9); nb = np.zeros((H, W, 3)); ib = np.full((H, W), -1)
for i in np.argsort(SZ):
    r = SR[i]; x0, x1 = int(SX[i] - r), int(SX[i] + r) + 1; y0, y1 = int(SY[i] - r), int(SY[i] + r) + 1
    x0c, y0c = max(x0, 0), max(y0, 0); x1c, y1c = min(x1, W), min(y1, H)
    if x0c >= x1c or y0c >= y1c: continue
    gx, gy = np.meshgrid(np.arange(x0c, x1c) + .5 - SX[i], np.arange(y0c, y1c) + .5 - SY[i])
    d2 = r * r - gx * gx - gy * gy; m = d2 > 0
    dz = np.sqrt(np.where(m, d2, 0)); zz = SZ[i] + dz
    sub = zb[y0c:y1c, x0c:x1c]; up = m & (zz > sub)
    sub[up] = zz[up]
    nb[y0c:y1c, x0c:x1c][up] = np.stack([gx / r, -gy / r, dz / r], -1)[up]
    ib[y0c:y1c, x0c:x1c][up] = i
# the islet z-buffer is in world z (towards the viewer); convert ray params: world z = 20 - t
tIs = np.where(ib >= 0, 20 - zb / S, INF)

# ---- compose the opaque layer: nearest of islets, inner back wall, cut faces, port sleeve
tB = np.where(back_ok, tfI, INF)
cand = np.stack([tIs, tB, faces_t, tSl, np.where(front_ok, INF, INF)])
which = np.argmin(cand, 0); tA = cand.min(0)
hasA = tA < INF / 2
Ld = np.array([-.55, .62, .56]); Ld /= np.linalg.norm(Ld)
Vw = np.array([0, 0, 1.0]); Hh = (Ld + Vw) / np.linalg.norm(Ld + Vw)
def shade(base, nW, kd=.86, ka=.17, ks=.25, sp=28, rimc=(0.0, .55, .80), rimk=.25):
    ndl = (nW * Ld).sum(-1); wrap = np.clip((ndl + .3) / 1.3, 0, 1)
    spec = np.clip((nW * Hh).sum(-1), 0, 1) ** sp
    fres = (1 - np.clip(nW[..., 2], 0, 1)) ** 3
    return base * (ka + kd * wrap)[..., None] + (ks * spec)[..., None] + fres[..., None] * np.array(rimc) * rimk
img = np.zeros((H, W, 3))
# islets: warm ivory-amber, as islets look under the lab's light
isl = which == 0
base_i = np.array([.97, .85, .70]) + CC[np.clip(ib, 0, None)][..., None] * np.array([1, .9, .6])
nbs = np.stack([gaussian_filter(nb[..., k], 1.4) for k in range(3)], -1); nbs /= np.linalg.norm(nbs, axis=-1, keepdims=True) + 1e-9
img[isl] = (shade(base_i, nbs, ka=.34, kd=.8, ks=.12, sp=16, rimc=(1, .72, .5), rimk=.3) * np.array([1.04, 1.0, .96]))[isl]
# inner back wall: the membrane from inside, in shadow
P = O + tB[..., None] * Dl
nI = -normal_caps(P, L); nIw = nI @ M.T
f = fibre(P)
base_w = (np.array([.80, .85, .90]) * (.80 + .3 * f[..., None]))
bw = which == 1
img[bw] = shade(base_w, nIw, ka=.12, kd=.58, ks=.05, rimk=.05)[bw]
# cut faces: the shell's thickness (dense fibre mat)
fc = which == 2
fnw = faces_n @ M.T
Pf = O + faces_t[..., None] * Dl
base_f = np.array([.93, .95, .97]) * (.88 + .18 * fibre(Pf)[..., None])
img[fc] = shade(base_f, fnw, ka=.25, kd=.8, ks=.06)[fc]
sl = which == 3
Ps = O + tSl[..., None] * Dl; ns = Ps.copy(); ns[..., 0] = 0; ns /= np.linalg.norm(ns, axis=-1, keepdims=True)
img[sl] = shade(np.array([.72, .78, .84]), ns @ M.T, ks=.45, sp=40)[sl]
alpha = hasA.astype(float)
# ---- screen-space AO from the opaque layer's depth
zf = np.where(hasA, -tA, (-tA[hasA]).min() - 1.5) * S
ao = np.zeros_like(zf)
for rr in (4, 12, 30, 70):
    ao += np.clip((gaussian_filter(zf, rr) - zf) / (rr * 2.0), 0, 1)
ao = np.clip(1 - ao / 2.4, .32, 1)
img *= ao[..., None]
# soft shadow of the oxygen line and the front wall rim on the islets (contact darkening near the line)
Pa = O + np.where(hasA, tA, 0)[..., None] * Dl
ra = np.sqrt(Pa[..., 1] ** 2 + Pa[..., 2] ** 2)
img *= (1 - .25 * np.exp(-((ra - R2) / .12) ** 2) * (Pa[..., 0] < X1))[..., None]
# depth falloff: the far side of the capsule settles into the page ink
ink = np.array([0.012, 0.067, 0.122])       # #03111f, the page ground
dep = np.clip((tA - 18.6) / 2.8, 0, 1)
img = np.where(hasA[..., None], img * (1 - .45 * dep[..., None]) + ink * .45 * dep[..., None], img)

# ---- oxygen line (translucent silicone with an oxygen-blue core) over the opaque layer
tl = (tT < tA) & (tT < INF / 2)
Pt = O + tT[..., None] * Dl
nt = Pt.copy(); nt[..., 0] = np.where(Pt[..., 0] > X1, Pt[..., 0] - X1, 0); nt /= np.linalg.norm(nt, axis=-1, keepdims=True)
ntw = nt @ M.T
fres = (1 - np.clip(ntw[..., 2], 0, 1))
core = np.array([.10, .62, .86]) * (.55 + .5 * np.clip((ntw * Ld).sum(-1), 0, 1))[..., None]
tcol = shade(np.array([.42, .80, .95]), ntw, ka=.3, kd=.6, ks=.85, sp=90, rimc=(.7, .95, 1), rimk=.5)
tcol = tcol * .55 + core * .45
ta = (.78 + .2 * fres) * np.clip((Pt[..., 0] - X0) / .75, 0, 1) ** 1.5
# tiny oxygen bubbles inside the line
for _ in range(26):
    bx = rng.uniform(X0 + .2, X1 - .1); by, bz = rng.normal(0, .06, 2); br = rng.uniform(.018, .045)
    w = M @ np.array([bx, by, bz]); sx, sy = cx + w[0] * S, cy - w[1] * S
    d = np.hypot(px - sx, py - sy) / (br * S)
    bub = np.clip(1 - d, 0, 1) ** .5 * (d < 1)
    tcol += (bub * .45)[..., None] * np.array([.85, .97, 1])
img = np.where(tl[..., None], img * (1 - ta[..., None]) + tcol * ta[..., None], img)
alpha = np.where(tl, np.maximum(alpha, ta), alpha)

# ---- outer front wall: white electrospun membrane, slightly translucent
P = P_on; nO = normal_caps(P, L); nOw = nO @ M.T
f = fibre(P)
base_o = np.array([.93, .95, .97]) * (.86 + .2 * f[..., None])
ocol = shade(base_o, nOw, ka=.26, kd=.8, ks=.12, sp=14, rimc=(.35, .75, .95), rimk=.28)
ocol *= (.94 + .08 * f[..., None])
fw = front_ok & (tnO < np.minimum(tA, np.where(tl, tT, INF)))
oa = np.full(fw.shape, .93)
img = np.where(fw[..., None], img * (1 - oa[..., None]) + ocol * oa[..., None], img)
alpha = np.where(fw, np.maximum(alpha, oa), alpha)
alpha = np.where(fw & hasA, 1.0, alpha)
img = np.clip(img, 0, 1)
o = (np.dstack([img * alpha[..., None] + ink * (1 - alpha[..., None]), alpha]) * 255).astype(np.uint8)
im = Image.fromarray(o, 'RGBA')
bb = im.getbbox(); im = im.crop((max(bb[0] - 30, 0), max(bb[1] - 30, 0), min(bb[2] + 30, W), min(bb[3] + 30, H)))
im = im.resize((im.width // 2, im.height // 2), Image.LANCZOS)
im.save(out); print('size', im.size)
