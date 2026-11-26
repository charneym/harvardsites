#!/usr/bin/env python3
"""sicht-pack HAGNER hero (HOME_BRIEF update 2c: a crafted render of the firm's real product). One roll of clear
PET film (HAGNER PET-Folien Polylux, sold "in Rollen und Formaten", sicht-pack-hagner.de > Produkte), wound on a
core, seen in three-quarter view with its end face toward the viewer: the stacked film edges read as fine glassy
rings, the outer wrap as a glossy clear cylinder with long studio reflections. Analytic ray casting in numpy over a
studio environment, saved with REAL alpha against the page ink (no ground of its own, DJ/DP).
Usage: python3 render.py W H out.png [SS]"""
import sys, math, numpy as np
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 800
H = int(sys.argv[2]) if len(sys.argv) > 2 else 600
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 1
FW, FH = W, H; W, H = W*SS, H*SS
INK = np.array([19, 17, 46])/255.0          # page ink (#13112e)
def nrm(v): return v/np.linalg.norm(v, axis=-1, keepdims=True)
def sm(a, b, x): x = np.clip((x-a)/(b-a), 0, 1); return x*x*(3-2*x)

R, RC, RH, L = 1.0, 0.30, 0.235, 1.75          # roll radius, core outer, core inner, roll length (axis = x)
C = nrm(np.array([-0.62, 0.36, 0.70]))         # towards the camera: front, left, a little above
F = -C; RT = nrm(np.cross(F, [0, 1, 0])); UP = np.cross(RT, F)

# frame the roll: project its silhouette points
th = np.linspace(0, 2*math.pi, 400)
pts = np.concatenate([np.stack([np.full_like(th, s*L/2), R*np.cos(th), R*np.sin(th)], -1) for s in (-1, 1)])
px, py = pts@RT, pts@UP
cx, cy = (px.max()+px.min())/2, (py.max()+py.min())/2
span = max((px.max()-px.min())/W, (py.max()-py.min())/H)*1.10   # world units per pixel, 5% margin each side
xs = (np.arange(W)+.5-W/2)*span + cx
ys = -(np.arange(H)+.5-H/2)*span + cy
X, Y = np.meshgrid(xs, ys)
O = X[..., None]*RT + Y[..., None]*UP - 10*F       # ray origins (orthographic)
D = np.broadcast_to(F, O.shape)

def env(d):
    """studio on the violet page ink: a long soft box overhead, a cool lavender strip left, a white strip right."""
    x, y, z = d[..., 0], d[..., 1], d[..., 2]
    base = INK[None]*(0.5+1.1*sm(-0.4, 0.8, y)[..., None])
    top = sm(0.35, 0.8, y)*sm(0.9, 0.4, np.abs(z-0.15))*0.75
    lft = sm(-0.35, -0.7, x)*sm(0.5, 0.15, np.abs(y-0.15))
    rgt = sm(0.45, 0.8, z)*sm(0.45, 0.12, np.abs(y-0.05))*sm(0.2, -0.3, x)
    flo = sm(-0.1, -0.7, y)
    # two crisp tube lights inside the soft box: they read as sharp bright lines along the glossy wrap
    tubes = (np.exp(-((z-0.42)/0.035)**2) + 0.8*np.exp(-((z+0.05)/0.03)**2))*sm(0.3, 0.6, y)
    c = base + tubes[..., None]*np.array([1.0, 1.0, 1.0])*1.6 + top[..., None]*np.array([0.95, 0.96, 1.0])*1.6 + lft[..., None]*np.array([0.70, 0.66, 1.0])*0.55 \
        + rgt[..., None]*np.array([1.0, 1.0, 0.98])*1.35 + flo[..., None]*np.array([0.04, 0.035, 0.09])
    return c

def hash1(i):
    return (np.sin(i*12.9898+4.1)*43758.5453) % 1.0

col = np.zeros((H, W, 3)); alpha = np.zeros((H, W)); tbest = np.full((H, W), np.inf)

# 1. outer wrap (cylinder y^2+z^2=R^2, |x|<L/2)
a = D[..., 1]**2 + D[..., 2]**2
b = 2*(O[..., 1]*D[..., 1] + O[..., 2]*D[..., 2])
c = O[..., 1]**2 + O[..., 2]**2 - R*R
disc = b*b - 4*a*c
ok = disc > 0
t = np.where(ok, (-b - np.sqrt(np.maximum(disc, 0)))/(2*a), np.inf)
P = O + t[..., None]*D
hit = ok & (np.abs(P[..., 0]) < L/2)
N = np.stack([np.zeros_like(t), P[..., 1], P[..., 2]], -1)/R
cosi = np.clip(-(D*N).sum(-1), 0, 1)
Rf = D + 2*cosi[..., None]*N
fres = 0.42 + 0.58*(1-cosi)**5
ang = np.arctan2(P[..., 2], P[..., 1])
# the clear wrap shows the dense film stack below it: grey-ice body, darker toward the silhouette
body = np.array([0.15, 0.16, 0.24])*(0.45+0.55*cosi)[..., None]
# long, very faint winding streaks along the axis, and a soft edge where the last wrap ends
streak = 1 + 0.035*np.sin(ang*37+1.3) + 0.02*np.sin(ang*91)
wrap = body*streak[..., None] + fres[..., None]*env(Rf)*0.95
# a slight tint at the two ends of the wrap (the film edge catches light)
edge = sm(L/2-0.025, L/2, np.abs(P[..., 0]))
wrap = wrap*(1-edge[..., None]) + edge[..., None]*np.array([0.78, 0.86, 0.90])
m = hit & (t < tbest); col[m] = wrap[m]; alpha[m] = 1; tbest[m] = t[m]

# 2. the end face toward the viewer (x = -L/2): stacked film edges as fine glassy rings, the core, the hole
for sgn in (-1,):
    tx = (sgn*L/2 - O[..., 0])/D[..., 0]
    P = O + tx[..., None]*D
    r = np.sqrt(P[..., 1]**2 + P[..., 2]**2)
    face = (r < R) & (tx < tbest)
    film = face & (r >= RC)
    # rings: many fine layers (band-limited for the supersampling), grouped into slightly different winding bands
    band = np.floor(r*26)
    tone = 0.86 + 0.10*hash1(band) + 0.035*np.sin(r*310) + 0.02*np.sin(r*173+2)
    # glassy edge: ice tint, a broad sheen from the upper left, and a darker outer rim
    kd = sm(1.0, -0.2, (P[..., 1]*0.6 - P[..., 2]*0.5))
    sheen = 0.42 + 0.58*kd
    ice = np.array([0.50, 0.66, 0.71])
    fc = ice[None, None]*(tone*sheen)[..., None]
    fc = fc*(1 - 0.35*sm(0.86, 1.0, r))[..., None] + np.array([0.9, 0.95, 1.0])*(0.25*sm(0.975, 0.995, r)*sm(1.0, 0.996, r))[..., None]
    fc = fc*(1 - 0.30*sm(0.45, RC, r))[..., None]
    # a glint across the stacked edges, where the overhead light grazes them
    gl = np.exp(-((P[..., 1]*0.8 + P[..., 2]*0.6 - 0.55)/0.12)**2)*sm(RC, 0.6, r)
    fc = fc + np.array([0.85, 0.95, 1.0])*(0.22*gl)[..., None]
    col[film] = fc[film]; alpha[film] = 1; tbest[film] = tx[film]
    core = face & (r < RC) & (r >= RH)
    cc = np.array([0.50, 0.47, 0.58])*(0.8+0.2*kd)[..., None]*(0.9+0.1*np.sin(r*80))[..., None]
    col[core] = cc[core]; alpha[core] = 1; tbest[core] = tx[core]
    hole = face & (r < RH)
    # inside the hollow core: the inner wall, dark and shaded by depth
    hc = INK*0.7 + np.array([0.20, 0.18, 0.30])*sm(RH, RH*0.2, r)[..., None]*0.4 + np.array([0.33, 0.31, 0.42])*sm(0.0, RH, P[..., 2]+RH*0.3)[..., None]*0.5
    col[hole] = hc[hole]; alpha[hole] = 1; tbest[hole] = tx[hole]

img = np.clip(col, 0, 1)
# filmic shoulder for the bright reflections
img = 1 - np.exp(-img*1.9); img = img/(1-np.exp(-1.9))
img = np.clip(img, 0, 1)
rgba = np.dstack([img*255, alpha*255]).astype(np.float32)
# premultiply for the box downsample, then un-premultiply
pm = rgba.copy(); pm[..., :3] *= alpha[..., None]
pm = pm.reshape(FH, SS, FW, SS, 4).mean((1, 3))
a = pm[..., 3:4]/255
out = np.concatenate([np.where(a > 0, pm[..., :3]/np.maximum(a, 1e-6), 0), pm[..., 3:4]], -1)
Image.fromarray(np.clip(out, 0, 255).astype(np.uint8), 'RGBA').save(OUT)
print('saved', OUT, FW, FH, 'aspect', FW/FH)
