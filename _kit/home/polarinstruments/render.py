#!/usr/bin/env python3
"""Polar Instruments hero (HOME_BRIEF update 2c: a crafted render of the firm's real subject).
A section of a multilayer controlled-impedance PCB test coupon, the board Polar's CGen designs, Speedstack documents
and the CITS880s measures: blue solder mask on top with an edge-coupled differential pair, a single-ended trace and
ENIG-finished probe pads with plated vias; the two polished cut faces show the stackup as a micro-section does
(copper planes, FR-4 cores and prepregs with their cross-cut glass-weave bundles, the stripline pairs buried inside).
Ray traced in numpy with a perspective camera and a soft studio rig; saved with REAL alpha (no ground, no box edge).
Usage: python3 render.py W H out.png ROT [SS]"""
import sys, math, numpy as np
from PIL import Image
W = int(sys.argv[1]); H = int(sys.argv[2]); OUT = sys.argv[3]; ROT = float(sys.argv[4]); SS = int(sys.argv[5]) if len(sys.argv) > 5 else 2
FW, FH = W, H; W, H = W*SS, H*SS
def nrm(v): return v/np.linalg.norm(v, axis=-1, keepdims=True)
def sm(a, b, x): x = np.clip((x-a)/(b-a), 0, 1); return x*x*(3-2*x)

A, B = 1.32, 0.80                # half extents in x (length) and z (depth)
# stackup, top to bottom: (name, thickness)
ST = [('mask', .013), ('top', .02), ('pp', .042), ('pl', .018), ('core', .058), ('sig', .018), ('pp', .042),
      ('pl', .018), ('core', .058), ('sig', .018), ('pp', .042), ('pl', .018), ('core', .050), ('bot', .02), ('mask', .013)]
TT = sum(t for _, t in ST); T2 = TT/2
edges = []; y = T2
for nm, t in ST: edges.append((nm, y, y-t)); y -= t

YAW, PITCH = math.radians(-31), math.radians(31)
cy, sy = math.cos(YAW), math.sin(YAW); cp, sp = math.cos(PITCH), math.sin(PITCH)
Ry = np.array([[cy, 0, sy], [0, 1, 0], [-sy, 0, cy]]); Rx = np.array([[1, 0, 0], [0, cp, -sp], [0, sp, cp]])
Rm = Rx @ Ry; RmT = Rm.T
CAM = np.array([0, 0, 7.4]); FOV = math.radians(23)
asp = W/H; sc = math.tan(FOV/2)
ys, xs = np.mgrid[0:H, 0:W]
px = ((xs+.5)/W*2-1)*sc*asp; py = -((ys+.5)/H*2-1)*sc + .012
D = nrm(np.stack([px, py, -np.ones_like(px)], -1))
O = np.broadcast_to(CAM, D.shape)
o = O @ Rm; d = D @ Rm            # object space (x @ R == R^T x)
INF = 1e9
tb = np.full(px.shape, INF); kind = np.zeros(px.shape, int)
for k, ax, val in ((1, 1, T2), (2, 2, B), (3, 0, A), (4, 2, -B), (5, 0, -A), (6, 1, -T2)):
    with np.errstate(divide='ignore', invalid='ignore'):
        t = (val - o[..., ax])/d[..., ax]
    p = o + d*t[..., None]
    lim = [A, T2, B]; ok = (t > 0) & (t < tb)
    for j in range(3):
        if j != ax: ok &= np.abs(p[..., j]) <= lim[j] + 1e-9
    tb[ok] = t[ok]; kind[ok] = k
P = o + d*np.where(tb < INF, tb, 0)[..., None]
NO = {1: (0, 1, 0), 2: (0, 0, 1), 3: (1, 0, 0), 4: (0, 0, -1), 5: (-1, 0, 0), 6: (0, -1, 0)}
N = np.zeros_like(P)
for k, n in NO.items(): N[kind == k] = n
Nw = N @ RmT; Dw = D

OFF = ROT/100.0
def env(r):
    x, y, z = r[..., 0], r[..., 1], r[..., 2]
    e = .03 + .05*sm(-.2, .7, y)
    # the top face mirrors x in [-.21,.21], z in [-.56,-.40]: a big soft box whose edge falls diagonally across it
    box = 1.25*sm(.30, -.22, x - OFF - .9*(z + .48))*sm(.55, .8, y)
    strip = 3.2*sm(.016, .003, np.abs(x - (.13 - OFF) + .5*(z + .48)))*sm(.6, .8, y)    # one thin strip light
    rim = .22*np.exp(-((x+.75)**2)/.02)*sm(-.2, .4, y)                                # cool rim from the left
    return (e + box + strip)[..., None]*np.array([1, 1, 1]) + rim[..., None]*np.array([.7, .8, 1.0])
LIGHTS = [((-.35, .9, .45), .95, (1, .97, .93)), ((.85, .35, .55), .55, (1, 1, 1)), ((-.9, .25, .2), .30, (.75, .85, 1))]
def diffuse(n):
    acc = np.zeros(n.shape[:-1] + (3,)) + .07
    for ld, w, c in LIGHTS:
        lv = nrm(np.array(ld)); acc += w*np.clip((n*lv).sum(-1), 0, 1)[..., None]*np.array(c)
    return acc

# ---- top-surface pattern (object x, z)
PAIR_Z, PAIR_S, TW = .16, .055, .042      # differential pair centre, half spacing, half width... (half widths below)
def top_cu(x, z):
    """1 where ENIG copper (trace/pad) sits on top, else 0; also via hole mask"""
    tw = .022
    pair = (np.abs(z - (PAIR_Z - PAIR_S)) < tw) | (np.abs(z - (PAIR_Z + PAIR_S)) < tw)
    pair &= x > -.98
    se = (np.abs(z + .36) < .026) & (x > -.98)
    pads = np.zeros_like(x, bool); holes = np.zeros_like(x, bool); rings = np.zeros_like(x)
    for (cx, cz) in ((-1.08, PAIR_Z - PAIR_S - .07), (-1.08, PAIR_Z + PAIR_S + .07), (-1.08, -.36), (-1.08, -.56), (-1.08, .48)):
        r = np.sqrt((x-cx)**2 + (z-cz)**2)
        pads |= r < .072; holes |= r < .034; rings = np.maximum(rings, sm(.034, .05, r)*sm(.072, .062, r))
    # short fan-out from the pads into the traces
    fan = (x > -1.09) & (x < -.96) & ((np.abs(z - (PAIR_Z - PAIR_S - .07 + .07*sm(-1.04, -.97, x))) < tw) |
                                       (np.abs(z - (PAIR_Z + PAIR_S + .07 - .07*sm(-1.04, -.97, x))) < tw))
    cu = pair | se | pads | fan
    return cu, holes
# stripline pairs buried in the 'sig' layers (shown on the cut faces): centres along the face coordinate
def buried(u, which):
    c = (.16, -.36) if which == 0 else (-.10, .42)
    m = (np.abs(u - (c[0]-.05)) < .02) | (np.abs(u - (c[0]+.05)) < .02) | (np.abs(u - c[1]) < .024)
    return m

col = np.zeros(px.shape + (3,)); alpha = (kind > 0).astype(float)
MASK = np.array([.035, .11, .34])      # blue solder mask (Polar navy family)
CU = np.array([.95, .52, .30])         # polished copper
ENIG = np.array([1.0, .70, .28])       # immersion gold
RES = np.array([.30, .26, .18])        # FR-4 resin, cut and polished
GL = np.array([.52, .50, .42])         # glass bundles
def fres(cosi, f0): return f0 + (1-f0)*(1-cosi)**5

# top face
k = kind == 1
if k.any():
    x, z = P[k][:, 0], P[k][:, 2]; n = Nw[k]; dv = Dw[k]
    cosi = np.clip(-(dv*n).sum(-1), 0, 1); rv = dv + 2*cosi[:, None]*n; L = env(rv)
    cu, holes = top_cu(x, z)
    dif = diffuse(n)
    # solder mask: glossy, slightly translucent over the laminate, faint weave texture showing through
    weave = .5 + .5*np.sin(x*95)*np.sin(z*95)
    base = MASK*(.85 + .15*weave)[:, None]*dif
    # traces under mask read as raised lighter lines (we expose them as ENIG: coupons leave probe pads open)
    m = base*.80 + (.13 + fres(cosi, .05))[:, None]*L*.85
    # a hair of shadow beside each raised trace (light from upper left)
    cuS, _ = top_cu(x + .012, z - .010)
    m *= (1 - .35*(cuS & ~cu))[:, None]
    g = ENIG*dif*.22 + ENIG*L*1.05 + ENIG*.06
    c = np.where(cu[:, None], g, m)
    # via holes: plated barrel seen from above, falling into darkness
    c = np.where(holes[:, None], np.array([.10, .05, .03]) + 0*c, c)
    # soft bevel highlight along the two cut edges
    e1 = sm(.010, 0, B - z); e2 = sm(.010, 0, A - x)
    c += (np.maximum(e1, e2)*.35)[:, None]
    col[k] = c

def cutface(kk, u, yy, which):
    n = Nw[kk]; dv = Dw[kk]
    cosi = np.clip(-(dv*n).sum(-1), 0, 1); rv = dv + 2*cosi[:, None]*n; L = env(rv)
    dif = diffuse(n)
    c = np.zeros(u.shape + (3,))
    for i, (nm, y0, y1) in enumerate(edges):
        sel = (yy <= y0) & (yy > y1 - 1e-9)
        if not sel.any(): continue
        uu = u[sel]; yl = yy[sel]; th = y0 - y1; ym = (y0 + y1)/2
        if nm == 'mask':
            cc = MASK*1.3*dif[sel] + L[sel]*.10
        elif nm in ('pl',):
            cc = CU*dif[sel]*.75 + CU*.22 + CU*L[sel]*.5
        elif nm in ('top', 'bot'):
            if nm == 'top':
                cu = (np.abs(uu - (PAIR_Z - PAIR_S)) < .022) | (np.abs(uu - (PAIR_Z + PAIR_S)) < .022) | (np.abs(uu + .36) < .026)
                if which == 1: cu = np.zeros_like(uu, bool)   # traces run along x: they cross the x-face only
                # trapezoid etch profile: narrower at the top
                tp = (yl - y1)/th
            else:
                cu = np.ones_like(uu, bool)
            cc = np.where(cu[:, None], CU*dif[sel]*.75 + CU*.22 + CU*L[sel]*.5, MASK*1.3*dif[sel] + L[sel]*.10)
        else:
            # dielectric with the glass weave cut across: rows of flattened ellipses
            nrow = 2 if th > .06 else 1
            g = np.zeros_like(uu)
            for r in range(nrow):
                yc = y1 + th*(r + .5)/nrow
                ph = (r*.5 + i*.37) % 1
                pu = ((uu/.048 + ph) % 1) - .5
                ee = (pu/.36)**2 + ((yl - yc)/(th/nrow*.30))**2
                g = np.maximum(g, sm(1.0, .75, ee))
            cc = (RES*(1-g)[:, None] + GL*g[:, None])*dif[sel]*.9 + L[sel]*.05
            if nm == 'sig':
                pass
        if nm == 'sig':
            bm = buried(uu, which if which == 0 else 1)
            if which == 1: bm = np.zeros_like(uu, bool)
            cc = np.where(bm[:, None], CU*dif[sel]*.75 + CU*.22 + CU*L[sel]*.5, RES*dif[sel]*.9 + L[sel]*.05)
        c[sel] = cc
    # polished section: a faint gloss on top of everything
    c += fres(cosi, .03)[:, None]*L*.35
    # bevel highlights at the top edge and the vertical corner
    return c

# x = +A face: traces run along x and cross this face, showing the pair in section (u = z)
k = kind == 3
if k.any():
    col[k] = cutface(k, P[k][:, 2], P[k][:, 1], 0)
    col[k] += (sm(.012, 0, B - P[k][:, 2])*.30)[:, None] + (sm(.008, 0, T2 - P[k][:, 1])*.25)[:, None]
# z = +B face: along the length (u = x); planes and dielectrics only
k = kind == 2
if k.any():
    col[k] = cutface(k, P[k][:, 0], P[k][:, 1], 1)
    col[k] += (sm(.008, 0, T2 - P[k][:, 1])*.25)[:, None]
for kk in (4, 5, 6):
    k = kind == kk
    col[k] = .03

def tm(x): return 1 - np.exp(-x*1.25)
rgb = tm(col)**(1/1.1)
img = np.concatenate([rgb, alpha[..., None]], -1)
im = Image.fromarray((np.clip(img, 0, 1)*255).astype(np.uint8), 'RGBA')
if SS > 1: im = im.resize((FW, FH), Image.LANCZOS)
bb = im.getbbox(); print('bbox', bb)
im.save(OUT)
bg = Image.new('RGBA', im.size, (10, 18, 40, 255)); bg.alpha_composite(im); bg.convert('RGB').save(OUT.replace('.png', '_prev.png'))
print('ok', OUT, im.size)
