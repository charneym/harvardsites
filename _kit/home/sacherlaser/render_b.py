#!/usr/bin/env python3
"""VARIANT B (TOP-FIX 2026-11-27): same geometry as render.py, lit as a studio product shot: one soft key from the
page's upper left (field.js draws this render MIRRORED so the output window faces the headline, so the key sits upper
right here), a low neutral fill, a dim rim on the far edge, neutral colour only; no beam, no bloom, no emitting spot.
The soft cast shadow and padding are added by _kit/tools/topfix_shadow.py.
Sacher Lasertechnik hero (HOME_BRIEF update 2c: a crafted render of the firm's real product): one Micron laser, the
ultra stable micro tunable external cavity laser shown on sacher-laser.com (stainless can on a gold TO header with gold pins),
with a faint beam from the output window. Orthographic sphere tracing of SDFs in numpy; studio reflections; saved with ALPHA
(no ground of its own, DJ/DP). Usage: python3 render.py W H out.png [SS] [procs]"""
import sys, math, numpy as np
from multiprocessing import Pool
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 500
H = int(sys.argv[2]) if len(sys.argv) > 2 else 600
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 1
NP = int(sys.argv[5]) if len(sys.argv) > 5 else 4
FW, FH = W, H; W, H = W*SS, H*SS
YS = 0.88; XS = YS*W/H
def nrm(v): return v/np.linalg.norm(v, axis=-1, keepdims=True)
def sm(a, b, x): x = np.clip((x-a)/(b-a), 0, 1); return x*x*(3-2*x)

# laser axis: emitting face up-right and toward the viewer, so the output window reads; pins trail back down-left
A = nrm(np.array([0.70, 0.40, 0.60]))
E1 = nrm(np.cross(A, np.array([0, 0, 1.0]))); E2 = np.cross(A, E1)
O = np.array([0.02, 0.02, 0.0])
#  materials: 2 steel can (bead-blasted), 6 gold header, 7 gold pins, 5 dark front ring, 8 window glass
PARTS = [
    (-0.400, -0.352, 0.236, 0.236, 0.008, 6),  # TO header flange
    (-0.356, -0.318, 0.206, 0.206, 0.006, 6),  # header step
    (-0.322, 0.372, 0.212, 0.212, 0.018, 2),   # the steel can
    (0.362, 0.384, 0.176, 0.176, 0.008, 9),    # polished front cap
    (0.376, 0.392, 0.070, 0.070, 0.004, 5),    # dark aperture ring
    (0.384, 0.398, 0.040, 0.040, 0.003, 8),    # output window
]
TIP = O + A*0.398
PINS = [(0.0, 0.0)] + [(0.118*math.cos(k*math.pi/2+0.5), 0.118*math.sin(k*math.pi/2+0.5)) for k in range(4)]
PIN_U0, PIN_U1, PIN_R = -1.02, -0.38, 0.0135

def part_sd(q_u, rho, th, p):
    u0, u1, r0, r1, rr, m = p
    r = np.full_like(q_u, r0)
    c = 0.5*(u0+u1); h = 0.5*(u1-u0)
    dx = rho-(r-rr); dy = np.abs(q_u-c)-(h-rr)
    out = np.hypot(np.maximum(dx, 0), np.maximum(dy, 0))
    return (out+np.minimum(np.maximum(dx, dy), 0)-rr)*0.9

def pins_sd(q_u, qp):
    x = qp@E1; y = qp@E2
    best = np.full(len(q_u), 9.0)
    for (px, py) in PINS:
        uu = np.clip(q_u, PIN_U0+(0.12 if px == 0 else 0.0), PIN_U1)
        d = np.sqrt((x-px)**2+(y-py)**2+(q_u-uu)**2)-PIN_R
        best = np.minimum(best, d)
    return best

def scene(p, want=False):
    q = p-O; qu = q@A; qp = q-qu[:, None]*A[None]
    rho = np.linalg.norm(qp, axis=1); th = np.arctan2(qp@E2, qp@E1)
    best = np.full(len(p), 9.0); mat = np.zeros(len(p), int)
    for pr in PARTS:
        d = part_sd(qu, rho, th, pr)
        sel = d < best; best = np.where(sel, d, best); mat = np.where(sel, pr[5], mat)
    dp = pins_sd(qu, qp)
    sel = dp < best; best = np.where(sel, dp, best); mat = np.where(sel, 7, mat)
    if want: return best, mat, qu, qu, th
    return best

KEY = nrm(np.array([0.60, 0.62, 0.50])); FILL = nrm(np.array([-0.5, -0.1, 0.85]))
V = np.array([0, 0, 1.0])

def env(d):
    """neutral studio the steel and gold reflect: a near-black surround, an overhead soft box, the KEY strip on the
    headline side of the page (render right, mirrored to page left), a dim neutral rim strip on the far side, a low
    frontal fill, a dark floor. No colour."""
    x, y, z = d[:, 0], d[:, 1], d[:, 2]
    t = np.clip(y*0.5+0.5, 0, 1)
    base = (0.025+0.05*t**2)[:, None]*np.ones(3)
    top = (sm(-0.10, 0.80, y)*0.95)[:, None]*np.array([0.95, 0.95, 0.94])
    key = (np.exp(-(((x-0.62)/0.30)**2+((y-0.45)/0.40)**2))*1.45)[:, None]*np.array([1.0, 0.99, 0.97])
    keys = (np.exp(-((x-0.72)/0.08)**2)*sm(-0.98, -0.4, y)*1.3)[:, None]*np.ones(3)
    rim = (np.exp(-((x+0.85)/0.10)**2)*sm(-0.6, 0.2, y))[:, None]*np.full(3, 0.40)
    fill = (np.exp(-((y-0.05)/0.25)**2)*sm(0.4, 0.95, z))[:, None]*np.full(3, 0.14)
    return base+top+key+keys+rim+fill

def normal(p):
    e = 0.0007; ex = np.array([e, 0, 0]); ey = np.array([0, e, 0]); ez = np.array([0, 0, e])
    return nrm(np.stack([scene(p+ex)-scene(p-ex), scene(p+ey)-scene(p-ey), scene(p+ez)-scene(p-ez)], 1))

def segdist2(x, y, a, b):
    vx, vy = b[0]-a[0], b[1]-a[1]
    h = np.clip(((x-a[0])*vx+(y-a[1])*vy)/(vx*vx+vy*vy), 0, 1)
    return np.hypot(x-a[0]-vx*h, y-a[1]-vy*h), h

def shade(x, y):
    n = len(x); L = np.zeros((n, 3)); a = np.zeros(n)
    ro = np.stack([x, y, np.full(n, 2.5)], 1)
    t = np.zeros(n); hit = np.zeros(n, bool); alive = np.ones(n, bool)
    for it in range(160):
        idx = np.nonzero(alive)[0]
        if not len(idx): break
        p = ro[idx].copy(); p[:, 2] -= t[idx]
        d = scene(p)
        hh = d < 0.0003; hit[idx[hh]] = True; alive[idx[hh]] = False
        t[idx] += np.maximum(d, 0.0004)
        alive[idx[t[idx] > 5.0]] = False
    hi = np.nonzero(hit)[0]
    if len(hi):
        p = ro[hi].copy(); p[:, 2] -= t[hi]
        _, mat, sv, qu, th = scene(p, True)
        nn = normal(p)
        ndv = np.clip(nn@V, 0, 1); fres = (1-ndv)**5
        dk = np.clip(nn@KEY, 0, 1); df = np.clip(nn@FILL, 0, 1)
        hv = nrm(KEY+V); spec = np.clip(nn@hv, 0, 1)
        R = 2*(nn@V)[:, None]*nn-V[None]
        ev = env(R)
        # soft ambient occlusion: march a little along the normal
        ao = np.ones(len(hi))
        for k, s in enumerate((0.012, 0.03, 0.06)):
            ao -= np.clip(s-scene(p+nn*s), 0, 1)*(4.0/(k+1))
        ao = np.clip(ao, 0.25, 1)
        col = np.zeros((len(hi), 3))
        rng = np.random.default_rng(7)
        # steel can: bead-blasted stainless, a soft satin sheen with the studio smeared across it
        m = (mat == 2) | (mat == 9)
        grain = 1+0.035*np.sin(qu*2300+th*310)*np.sin(th*1700)
        pol = np.where(mat == 9, 1.25, 1.0)
        c = ev*(0.68+0.35*fres)[:, None]*np.array([0.93, 0.95, 0.99])[None]*pol[:, None]
        c += (spec**30*0.55+spec**6*0.10)[:, None]
        c += np.array([0.20, 0.21, 0.23])[None]*(0.15+0.85*dk)[:, None]
        c *= (ao*grain)[:, None]
        col[m] = c[m]
        # gold: TO header and pins, polished, warm reflections
        for mm in (6, 7):
            m = mat == mm
            gold = np.array([1.0, 0.74, 0.34])
            c = ev*(0.75+0.25*fres)[:, None]*gold[None]
            c += (spec**70*1.3+spec**12*0.12)[:, None]*np.array([1.0, 0.9, 0.7])[None]
            c += gold[None]*0.16*(0.2+0.8*dk)[:, None]
            c *= ao[:, None]
            col[m] = c[m]
        # dark anodised front ring
        m = mat == 5
        c = np.array([0.035, 0.04, 0.05])[None]*(0.3+dk)[:, None]+(spec**50*0.45)[:, None]+ev*0.18*fres[:, None]
        col[m] = c[m]
        # output window: dark coated glass, a cool reflection and the emitting spot
        m = mat == 8
        c = ev*(0.10+0.6*fres)[:, None]*np.array([0.80, 0.84, 0.90])[None]+(spec**120*1.2)[:, None]
        col[m] = c[m]
        af = np.ones(len(hi))
        L[hi] = col; a[hi] = af
    return L, a

def run(args):
    y0, y1 = args
    PX, PY = np.meshgrid(np.arange(W), np.arange(y0, y1))
    x = ((PX+0.5)/W*2-1)*XS; y = (1-(PY+0.5)/H*2)*YS
    L, a = shade(x.ravel(), y.ravel())
    ex = np.minimum(XS-np.abs(x.ravel()), YS-np.abs(y.ravel()))
    wnd = sm(0.0, 0.30, ex)
    Rgb = 1-np.exp(-L*1.2)
    Rgb = Rgb**(1/1.25)
    Rgb *= wnd[:, None]; a = a*wnd
    al = np.maximum(a, Rgb.max(1))
    return np.concatenate([Rgb, al[:, None]], 1).reshape(y1-y0, W, 4)

if __name__ == '__main__':
    import time; t0 = time.time()
    step = max(8, H//(NP*10))
    bands = [(y, min(H, y+step)) for y in range(0, H, step)]
    with Pool(NP) as pool: rows = pool.map(run, bands)
    img = np.concatenate(rows, 0)
    pre = img[..., :3]; al = img[..., 3:]
    rgb = np.where(al > 1e-4, pre/np.maximum(al, 1e-4), 0)
    im = Image.fromarray((np.clip(np.concatenate([rgb, al], -1), 0, 1)*255).astype(np.uint8), 'RGBA')
    if SS != 1: im = im.resize((FW, FH), Image.LANCZOS)
    im.save(OUT); print('done', round(time.time()-t0, 1))
