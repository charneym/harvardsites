#!/usr/bin/env python3
"""Tekno-Medical hero (HOME_BRIEF update 2c: a crafted render of the firm's real product). One rigid endoscope optic
of the kind Tekno-Medical sells (tekno-medical.com > Produkte > Endoskopie > Optiken): eyepiece cup, hub with the
light-guide post, tapered neck and a long slim stainless shaft ending in a bevelled distal window. Unbranded.
Ray marched (signed distance fields) in numpy, orthographic, brushed stainless reflecting a studio environment
(soft top box, a cool strip left, a white strip right) on the page ink. Saved with REAL alpha (DJ/DP).
Prints the distal-window position (image units) so field.js can draw the light leaving the tip.
Usage: python3 render.py W H out.png [SS]"""
import sys, math, json, numpy as np
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 800
H = int(sys.argv[2]) if len(sys.argv) > 2 else 600
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 1
FW, FH = W, H; W, H = W*SS, H*SS
def nrm(v): return v/np.linalg.norm(v, axis=-1, keepdims=True)
def n3(v): v = np.array(v, float); return v/np.linalg.norm(v)
def sm(a, b, x): x = np.clip((x-a)/(b-a), 0, 1); return x*x*(3-2*x)

# scope frame: axis A runs from the eyepiece (E) to the distal tip, going up-left and slightly away from the viewer
A = n3((0.84, 0.43, -0.33))
P = n3(np.array((-0.15, 1.0, 0.55)) - np.dot((-0.15, 1.0, 0.55), A)*A)   # light post direction (perp. to A)
Q = np.cross(A, P)
E = np.array((0.0, 0.0, 0.0))
LEN = 2.25
S_POST = 0.37
# profile along the axis: (s0, s1, r0, r1)
PROF = [(0.00, 0.035, 0.150, 0.150),     # eyepiece rim
        (0.035, 0.17, 0.148, 0.086),     # eyepiece cup
        (0.17, 0.56, 0.086, 0.086),      # hub
        (0.56, 0.70, 0.086, 0.034),      # neck taper
        (0.70, LEN, 0.034, 0.034)]       # shaft
GROOVES = [0.215, 0.245, 0.275, 0.50]
RING = (0.455, 0.478)                     # colour-coded ring
TIP_N = n3(A*math.cos(math.radians(30)) + P*math.sin(math.radians(30)))   # 30 degree bevel

def local(p):
    d = p - E
    s = d @ A
    v = d - s[..., None]*A
    return s, np.linalg.norm(v, axis=-1), v

def sd_body(p):
    s, r, v = local(p)
    # radius profile (piecewise linear), sdf approx of a solid of revolution
    R = np.full(s.shape, 0.034)
    sc = np.clip(s, 0, LEN)
    for s0, s1, r0, r1 in PROF:
        m = (sc >= s0) & (sc <= s1)
        R = np.where(m, r0 + (r1-r0)*(sc-s0)/(s1-s0), R)
    for g in GROOVES:
        R = R - 0.006*np.exp(-((s-g)/0.006)**2)
    slope = 0.5
    d = (r - R)/math.sqrt(1+slope*slope)
    d = np.maximum(d, -s)                    # eyepiece end
    d = np.maximum(d, (p - E - A*LEN) @ TIP_N)  # bevelled tip
    # eyepiece recess: a shallow cup at the eyepiece end
    return d

def sd_post(p):
    H0 = E + A*S_POST
    d = p - H0
    t = d @ P
    rr = np.linalg.norm(d - t[..., None]*P, axis=-1)
    def cyl(t0, t1, R):
        dx = rr - R; dy = np.maximum(t0 - t, t - t1)
        return np.minimum(np.maximum(dx, dy), 0) + np.sqrt(np.maximum(dx, 0)**2 + np.maximum(dy, 0)**2)
    a = cyl(0.0, 0.20, 0.036) - 0.002
    b = cyl(0.16, 0.25, 0.050) - 0.004
    c = cyl(0.25, 0.262, 0.040) - 0.002
    return np.minimum(np.minimum(a, b), c)

def sdf(p): return np.minimum(sd_body(p), sd_post(p))

# frame: project the scope's extreme points
ext = [E + A*0 + P*0.16, E - P*0.16, E + Q*0.16, E - Q*0.16, E + A*LEN + P*0.04, E + A*LEN - P*0.04,
       E + A*S_POST + P*0.27]
X = [q[0] for q in ext]; Y = [q[1] for q in ext]
cx, cy = (min(X)+max(X))/2, (min(Y)+max(Y))/2
span = max((max(X)-min(X))/W*H, max(Y)-min(Y))*1.08
half_h = span/2; half_w = half_h*W/H

ys, xs = np.mgrid[0:H, 0:W]
px = cx + ((xs + .5)/W*2 - 1)*half_w
py = cy - ((ys + .5)/H*2 - 1)*half_h
O = np.stack([px, py, np.full(px.shape, 4.0)], -1).reshape(-1, 3)
D = np.array((0, 0, -1.0))
t = np.zeros(O.shape[0]); hit = np.zeros(O.shape[0], bool); act = np.ones(O.shape[0], bool)
for i in range(220):
    idx = np.nonzero(act)[0]
    if idx.size == 0: break
    p = O[idx] + D*t[idx, None]
    d = sdf(p)
    t[idx] += d*0.9
    h = d < 0.0004
    hit[idx[h]] = True
    act[idx[h]] = False
    act[idx[t[idx] > 9]] = False
print('hits', hit.sum())

def env(d):
    x, y, z = d[..., 0], d[..., 1], d[..., 2]
    base = np.array((0.004, 0.016, 0.020))[None]*np.ones_like(d)
    top = (sm(0.45, 0.9, y)*sm(-0.9, 0.2, z))[..., None]*np.array((1.15, 1.20, 1.22))
    strip_r = (np.exp(-((x-0.78)/0.07)**2)*sm(-0.7, 0.1, y))[..., None]*np.array((2.2, 2.15, 2.05))
    strip_l = (np.exp(-((x+0.80)/0.09)**2)*sm(-0.6, 0.2, y))[..., None]*np.array((0.10, 0.62, 0.72))
    front = (np.exp(-((y-0.05)/0.18)**2)*sm(0.4, 0.95, z))[..., None]*np.array((0.30, 0.33, 0.35))
    floor = sm(-0.2, -0.9, y)[..., None]*np.array((0.015, 0.05, 0.06))
    return base + top + strip_r + strip_l + front + floor

col = np.zeros((O.shape[0], 3)); alpha = hit.astype(float)
idx = np.nonzero(hit)[0]
p = O[idx] + D*t[idx, None]
e = 0.0008
n = np.stack([sdf(p+np.array((e, 0, 0)))-sdf(p-np.array((e, 0, 0))),
              sdf(p+np.array((0, e, 0)))-sdf(p-np.array((0, e, 0))),
              sdf(p+np.array((0, 0, e)))-sdf(p-np.array((0, 0, e)))], -1)
n = nrm(n)
s, r, v = local(p)
isPost = sd_post(p) < sd_body(p) + 1e-5
glassE = (~isPost) & (s < 0.004) & (r < 0.112)
tipd = (p - E - A*LEN) @ TIP_N
glassT = (~isPost) & (tipd > -0.003) & (r < 0.026)
ring = (~isPost) & (s > RING[0]) & (s < RING[1])
# brushed stainless: a few jittered reflection samples, jitter stretched along the circumference (grooves run round)
rng = np.random.default_rng(3)
refl = D - 2*(n @ D)[:, None]*n
acc = np.zeros_like(refl)
NS = 10
for k in range(NS):
    j = rng.normal(0, 1, refl.shape)
    jit = nrm(refl + 0.07*j)
    acc += env(jit)
spec = acc/NS
cosv = np.clip(-(n @ D), 0, 1)
F = 0.62 + 0.38*(1-cosv)**5
metal = spec*F[:, None]*np.array((0.98, 1.0, 1.02)) + 0.012
# dark glass: deep blue-black with a crisp reflection of the strips
gl = 0.02 + env(refl)*(0.04 + 0.9*(1-cosv)**5)[:, None]*np.array((0.7, 0.85, 1.0)) + np.array((0.0, 0.02, 0.035))
redc = np.array((0.82, 0.16, 0.25))
ringc = redc*(0.3 + 0.7*np.clip(n @ n3((0.3, 0.8, 0.5)), 0, 1))[:, None] + spec*0.10
c = metal
c = np.where(ring[:, None], ringc, c)
c = np.where((glassE | glassT)[:, None], gl, c)
# a soft ambient occlusion from the sdf
ao = np.ones(idx.size)
for k, hh in enumerate((0.01, 0.025, 0.05)):
    ao -= np.clip(hh - sdf(p + n*hh), 0, 1)*(1.6/(k+1))
c *= np.clip(ao, 0.35, 1)[:, None]
col[idx] = c
img = col.reshape(H, W, 3); a = alpha.reshape(H, W)
if SS > 1:
    img = img.reshape(FH, SS, FW, SS, 3).mean((1, 3)); a = a.reshape(FH, SS, FW, SS).mean((1, 3))
# straight (unpremultiplied) colour where alpha > 0
img = np.where(a[..., None] > 0, img/np.maximum(a[..., None], 1e-6), 0)
img = img/(1+0.35*img)*1.3
img = np.clip(img, 0, 1)**(1/2.2)
rgba = np.dstack([img*255, a*255]).astype(np.uint8)
Image.fromarray(rgba, 'RGBA').save(OUT)
def proj(q): return [round(((q[0]-cx)/half_w+1)/2, 4), round((1-(q[1]-cy)/half_h)/2, 4)]
tip = E + A*LEN
print(json.dumps({'tip': proj(tip), 'dir': [round(A[0], 4), round(-A[1], 4)], 'eye': proj(E), 'aspect': round(FW/FH, 4)}))
