#!/usr/bin/env python3
"""Covision hero (HOME_BRIEF update 2c: a crafted render of the firm's real product). A total hip replacement of the kind
Covision makes and lists on covision-medical.co.uk > Hip Systems: a cementless femoral stem with a proximal coating
(Ti plasma / HA), a 12/14-style taper trunnion carrying a ceramic modular head, and a cementless acetabular cup (porous
titanium shell) with a highly crosslinked PE liner, shown slightly exploded along the neck axis so the head, liner and
shell all read. Unbranded. Ray marched (signed distance fields) in numpy, orthographic, on a light studio environment so
it sits on the page's cool white; saved with REAL alpha (DJ/DP).
Usage: python3 render.py W H out.png [SS]"""
import sys, math, json, numpy as np
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 600
H = int(sys.argv[2]) if len(sys.argv) > 2 else 800
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 1
FW, FH = W, H; W, H = W*SS, H*SS
def nrm(v): return v/np.linalg.norm(v, axis=-1, keepdims=True)
def n3(v): v = np.array(v, float); return v/np.linalg.norm(v)
def sm(a, b, x): x = np.clip((x-a)/(b-a), 0, 1); return x*x*(3-2*x)
def smin(a, b, k):
    h = np.clip(0.5 + 0.5*(b-a)/k, 0, 1)
    return b*(1-h) + a*h - k*h*(1-h)

# ---- object frame: stem axis down -y, medial (neck side) toward -x, anterior +z
L = 1.95                                   # stem length below the shoulder
ang = math.radians(45)                     # neck 45 deg off the stem axis (CCD angle 135 deg)
U = np.array((-math.sin(ang), math.cos(ang), 0.0))
N0 = np.array((-0.02, -0.16, 0.0))          # neck base, inside the shoulder
NL = 0.46                                  # neck length to the trunnion
HC = N0 + U*0.86                           # head centre
HR = 0.25
GAP = 0.085
CC = HC + U*GAP                            # cup centre (exploded along the neck axis)
CUP_IN, CUP_LN, CUP_OUT = 0.255, 0.305, 0.365

# view: yaw the assembly so the cup opening turns toward the viewer, small roll
yaw, roll = math.radians(-27), math.radians(-8)
Ry = np.array(((math.cos(yaw), 0, math.sin(yaw)), (0, 1, 0), (-math.sin(yaw), 0, math.cos(yaw))))
Rz = np.array(((math.cos(roll), -math.sin(roll), 0), (math.sin(roll), math.cos(roll), 0), (0, 0, 1)))
R = Rz @ Ry                                 # local -> world
def to_local(p): return p @ R               # (R^T p) for row vectors

def stem_edges(y):
    # lateral and medial edges (x) and half thickness (z) along the stem, y in [-L, 0]
    t = np.clip(-y/L, 0, 1)
    xl = 0.175 - 0.11*t + 0.02*t*t
    # the medial edge flares out just below the neck (the calcar) and tapers to the tip
    xm = -0.03 - 0.19*np.sin(np.clip(t/0.26, 0, 1)*np.pi/2)**0.8 + 0.235*sm(0.10, 1.0, t)
    xm = np.minimum(xm, xl - 0.07)
    hd = 0.100*(1-t) + 0.036*t
    return xl, xm, hd
def stem_wd(y):
    xl, xm, hd = stem_edges(y)
    return (xl - xm)/2, hd
def sd_stem(q):
    x, y, z = q[..., 0], q[..., 1], q[..., 2]
    xl, xm, hd = stem_edges(y)
    hw = (xl - xm)/2; cxs = (xl + xm)/2
    rr = np.minimum(hw, hd)*0.6
    dx = np.abs(x - cxs) - (hw - rr); dz = np.abs(z) - (hd - rr)
    d2 = np.sqrt(np.maximum(dx, 0)**2 + np.maximum(dz, 0)**2) + np.minimum(np.maximum(dx, dz), 0) - rr
    d = d2*0.8
    d = smin(-d, -(-y), 0.03)*-1 if False else np.maximum(d, y)   # flat lateral shoulder
    tipc = np.array((0.04, -L, 0.0))
    dt = np.linalg.norm(q - tipc, axis=-1) - 0.034
    d = np.where(y < -L, dt, d)
    return d
def sd_neck(q):
    d = q - N0
    t = d @ U
    rr = np.linalg.norm(d - t[..., None]*U, axis=-1)
    def cyl(t0, t1, r0, r1):
        f = np.clip((t - t0)/(t1 - t0), 0, 1)
        R_ = r0 + (r1 - r0)*f
        dx = (rr - R_)*0.97; dy = np.maximum(t0 - t, t - t1)
        return np.minimum(np.maximum(dx, dy), 0) + np.sqrt(np.maximum(dx, 0)**2 + np.maximum(dy, 0)**2)
    neck = cyl(-0.15, NL, 0.082, 0.064) - 0.004
    trun = cyl(NL - 0.01, NL + 0.20, 0.054, 0.046) - 0.003
    return neck, trun
def sd_head(q): return np.linalg.norm(q - HC, axis=-1) - HR
def sd_cup(q):
    d = q - CC
    r = np.linalg.norm(d, axis=-1)
    h = d @ U                                            # >0 on the dome side
    shell = np.maximum(np.abs(r - (CUP_LN + CUP_OUT)/2) - (CUP_OUT - CUP_LN)/2, -h - 0.0)
    liner = np.maximum(np.abs(r - (CUP_IN + CUP_LN)/2) - (CUP_LN - CUP_IN)/2, -h - 0.028)
    return shell - 0.003, liner - 0.003

def parts(p):
    q = to_local(p)
    st = sd_stem(q); nk, tr = sd_neck(q)
    body = smin(st, nk, 0.16)
    return q, body, tr, sd_head(q), *sd_cup(q)
def sdf(p):
    q, body, tr, hd, sh, ln = parts(p)
    return np.minimum.reduce([body, tr, hd, sh, ln])

# ---- frame: bounds of the assembly in world xy
pts = []
for y in np.linspace(-L-0.05, 0, 30):
    hw, hd = stem_wd(np.array(y))
    xl, xm, _ = stem_edges(np.array(y))
    for xx in (xl, xm):
        for sz in (-1, 1): pts.append(np.array((xx, y, sz*hd)))
for a in np.linspace(0, 2*np.pi, 48):
    for b in np.linspace(0, np.pi, 12):
        v = np.array((math.cos(a)*math.sin(b), math.cos(b), math.sin(a)*math.sin(b)))
        pts.append(CC + v*CUP_OUT); pts.append(HC + v*HR)
pts = np.array(pts) @ R.T
X, Y = pts[:, 0], pts[:, 1]
cx, cy = (X.min()+X.max())/2, (Y.min()+Y.max())/2
span = max((X.max()-X.min())/W*H, Y.max()-Y.min())*1.06
half_h = span/2; half_w = half_h*W/H

ys, xs = np.mgrid[0:H, 0:W]
px = cx + ((xs + .5)/W*2 - 1)*half_w
py = cy - ((ys + .5)/H*2 - 1)*half_h
O = np.stack([px, py, np.full(px.shape, 4.0)], -1).reshape(-1, 3)
D = np.array((0, 0, -1.0))
t = np.zeros(O.shape[0]); hit = np.zeros(O.shape[0], bool); act = np.ones(O.shape[0], bool)
for i in range(260):
    idx = np.nonzero(act)[0]
    if idx.size == 0: break
    p = O[idx] + D*t[idx, None]
    d = sdf(p)
    t[idx] += d*0.85
    h = d < 0.0004
    hit[idx[h]] = True
    act[idx[h]] = False
    act[idx[t[idx] > 9]] = False
print('hits', hit.sum(), file=sys.stderr)

def env(d):
    """A light product studio: a big soft box overhead, a darker horizon band and two dark flags so polished metal
    keeps form on a white page; a faint cool navy tint in the flags (the brand ink) and nothing saturated."""
    x, y, z = d[..., 0], d[..., 1], d[..., 2]
    base = np.ones_like(d)*np.array((0.62, 0.64, 0.67))[None]
    top = (sm(0.25, 0.85, y))[..., None]*np.array((0.75, 0.76, 0.78))
    hor = (np.exp(-((y+0.02)/0.16)**2))[..., None]*np.array((-0.42, -0.40, -0.36))
    flagL = (np.exp(-((x+0.62)/0.16)**2)*sm(-0.6, 0.3, y))[..., None]*np.array((-0.50, -0.46, -0.38))
    flagR = (np.exp(-((x-0.70)/0.10)**2)*sm(-0.4, 0.5, y))[..., None]*np.array((-0.36, -0.33, -0.27))
    key = (np.exp(-((x-0.25)/0.22)**2)*np.exp(-((y-0.55)/0.25)**2))[..., None]*np.array((0.9, 0.9, 0.9))
    floor = sm(-0.15, -0.8, y)[..., None]*np.array((-0.14, -0.13, -0.12))
    return np.clip(base + top + hor + flagL + flagR + key + floor, 0.02, 3)

col = np.zeros((O.shape[0], 3)); alpha = hit.astype(float)
idx = np.nonzero(hit)[0]
p = O[idx] + D*t[idx, None]
e = 0.0008
n = np.stack([sdf(p+np.array((e, 0, 0)))-sdf(p-np.array((e, 0, 0))),
              sdf(p+np.array((0, e, 0)))-sdf(p-np.array((0, e, 0))),
              sdf(p+np.array((0, 0, e)))-sdf(p-np.array((0, 0, e)))], -1)
n = nrm(n)
q, body, tr, hd, sh, ln = parts(p)
m = np.argmin(np.stack([body, tr, hd, sh, ln], -1), -1)
isBody, isTr, isHead, isShell, isLiner = [m == k for k in range(5)]
coated = isBody & (q[:, 1] < -0.12 + 0.10*q[:, 0]) & (q[:, 1] > -0.82 - 0.35*q[:, 0]) & (sd_stem(q) < sd_neck(q)[0] + 0.02)
# coating boundary eases (a soft machined edge rather than a hard line)
rng = np.random.default_rng(7)
def hash3(qq, k):
    g = np.floor(qq*k)
    return (np.sin(g @ np.array((127.1, 311.7, 74.7)))*43758.5453) % 1.0
cosv = np.clip(-(n @ D), 0, 1)
refl = D - 2*(n @ D)[:, None]*n
def blurred(rough, ns):
    acc = np.zeros_like(refl)
    for k in range(ns):
        acc += env(nrm(refl + rough*rng.normal(0, 1, refl.shape)))
    return acc/ns
sharp = blurred(0.03, 6)
soft = blurred(0.22, 10)
F = 0.70 + 0.30*(1-cosv)**5
light = n3((0.35, 0.8, 0.55))
lam = np.clip(n @ light, 0, 1)
# polished stem neck and taper: bright titanium-alloy mirror, very slightly warm
metal = sharp*F[:, None]*np.array((0.93, 0.94, 0.96))
# coated region: matte grey-beige grit (plasma spray), lit diffusely with a speckle
g1 = hash3(q, 240.0); g2 = hash3(q + 3.1, 120.0)
grit = (0.30 + 0.42*lam + 0.18*(g1-0.5) + 0.10*(g2-0.5))[:, None]*np.array((0.84, 0.81, 0.76)) + soft*0.08
# cup shell outer: porous titanium, a little darker and cooler than the stem coating
gp = hash3(q, 300.0); gp2 = hash3(q + 1.7, 90.0)
porous = (0.32 + 0.40*lam + 0.22*(gp-0.5) + 0.12*(gp2-0.5))[:, None]*np.array((0.80, 0.81, 0.83)) + soft*0.10
rim = isShell & (np.abs(np.linalg.norm(q - CC, axis=-1) - CUP_OUT) > 0.012)   # inner face and rim: polished
# ceramic head: ivory with a crisp clear-coat reflection
cer_base = np.array((0.93, 0.89, 0.85))*(0.30 + 0.62*lam)[:, None] + 0.10
ceramic = cer_base*(1-0.25*(1-cosv)[:, None]) + sharp*(0.10 + 0.55*(1-cosv)**4)[:, None] + (np.clip(refl @ n3((0.45, 0.75, 0.5)), 0, 1)**60*1.2)[:, None]
# PE liner: white, waxy (diffuse + soft sheen)
pe = np.array((0.95, 0.95, 0.94))*(0.62 + 0.38*lam)[:, None] + soft*0.08 + 0.05
c = metal
c = np.where(coated[:, None], grit, c)
c = np.where(isShell[:, None], np.where(rim[:, None], metal*0.96, porous), c)
c = np.where(isLiner[:, None], pe, c)
c = np.where(isHead[:, None], ceramic, c)
# soft ambient occlusion from the sdf
ao = np.ones(idx.size)
for k, hh in enumerate((0.012, 0.03, 0.06)):
    ao -= np.clip(hh - sdf(p + n*hh), 0, 1)*(1.5/(k+1))
c *= np.clip(ao, 0.45, 1)[:, None]
col[idx] = c
img = col.reshape(H, W, 3); a = alpha.reshape(H, W)
if SS > 1:
    img = img.reshape(FH, SS, FW, SS, 3).mean((1, 3)); a = a.reshape(FH, SS, FW, SS).mean((1, 3))
img = np.where(a[..., None] > 0, img/np.maximum(a[..., None], 1e-6), 0)
img = img/(1+0.25*img)*1.18
img = np.clip(img, 0, 1)**(1/2.2)
rgba = np.dstack([img*255, a*255]).astype(np.uint8)
Image.fromarray(rgba, 'RGBA').save(OUT)
print(json.dumps({'aspect': round(FW/FH, 4)}))
