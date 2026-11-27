#!/usr/bin/env python3
"""VARIANT B (TOP-FIX 2026-11-27): the same connector, lit as a studio product shot with neutral light only and NO beam,
bloom or glowing core. All lights are mirrored in x (key upper RIGHT here) because field.js draws the render mirrored, so the
key comes from the headline side and the ferrule leans toward the text. The steel reflects a neutral studio (soft box,
a dim far rim strip, a grey floor). Then shadow.py bakes a faint soft cast shadow into padding.
Run: python3 render_b.py 1000 1200 out.png 2 4 && python3 shadow.py out.png hero.webp 100 mirror
OZ Optics hero (HOME_BRIEF update 2c: a crafted render of the firm's real product). One polarization-maintaining
fibre-optic patchcord end, as OZ Optics makes and sells them (ozoptics.com: PM patchcords / connectors, 'World's Largest
Fiber Optic Catalog'): an FC/APC-style connector with a knurled stainless coupling nut, a zirconia ceramic ferrule with an
angled end face, a ribbed strain-relief boot in OZ blue and a yellow jacketed cable, with a faint cool beam leaving the
fibre core. Orthographic sphere tracing of signed distance fields in numpy; studio environment reflections on the steel;
saved with ALPHA (no ground of its own, DJ/DP). Usage: python3 render.py W H out.png [SS] [procs]"""
import sys, math, numpy as np
from multiprocessing import Pool
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 500
H = int(sys.argv[2]) if len(sys.argv) > 2 else 600
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 1
NP = int(sys.argv[5]) if len(sys.argv) > 5 else 4
FW, FH = W, H; W, H = W*SS, H*SS
YS = 0.92; XS = YS*W/H
def nrm(v): return v/np.linalg.norm(v, axis=-1, keepdims=True)
def sm(a, b, x): x = np.clip((x-a)/(b-a), 0, 1); return x*x*(3-2*x)

# connector axis: pointing up, a little right and toward the viewer, so the ferrule face reads
A = nrm(np.array([0.36, 0.86, 0.36]))
E1 = nrm(np.cross(A, np.array([0, 0, 1.0]))); E2 = np.cross(A, E1)
O = np.array([-0.08, -0.02, 0.0])          # u = 0 at the front face of the coupling nut's back shoulder
# parts along the axis: (u0, u1, radius0, radius1, rounding, material)
#  materials: 0 jacket, 1 boot, 2 steel, 3 knurled nut, 4 ceramic, 5 dark key/ring
PARTS = [
    (-0.62, -0.20, 0.040, 0.070, 0.010, 1),   # boot, tapering toward the cable
    (-0.215, -0.10, 0.074, 0.074, 0.008, 2),  # crimp body
    (-0.105, 0.150, 0.118, 0.118, 0.012, 3),  # knurled coupling nut
    (0.145, 0.215, 0.082, 0.082, 0.006, 2),   # front body
    (0.212, 0.232, 0.060, 0.060, 0.004, 5),   # dark retaining ring
    (0.228, 0.372, 0.0265, 0.0265, 0.006, 4), # zirconia ferrule
]
TIP = O + A*0.372

def part_sd(q_u, rho, th, p):
    u0, u1, r0, r1, rr, m = p
    t = np.clip((q_u-u0)/(u1-u0), 0, 1)
    r = r0+(r1-r0)*t
    if m == 1:      # ribs on the boot
        r = r - 0.006*(0.5+0.5*np.cos((q_u-u0)*2*math.pi/0.034))*sm(0.03, 0.08, q_u-u0)*sm(0.0, 0.05, u1-0.03-q_u)
    if m == 3:      # straight knurl, chamfered ends
        k = np.abs(np.sin(th*36))
        r = r - 0.0055*(1-k**0.6)*sm(-0.08, -0.06, q_u)*sm(-0.125, -0.105, -q_u+0.0)
        r = r - 0.016*sm(0.115, 0.152, q_u)
    c = 0.5*(u0+u1); h = 0.5*(u1-u0)
    dx = rho-(r-rr); dy = np.abs(q_u-c)-(h-rr)
    out = np.hypot(np.maximum(dx, 0), np.maximum(dy, 0))
    return (out+np.minimum(np.maximum(dx, dy), 0)-rr)*0.8

# the cable: leaves the boot along -A, swings down and out of frame lower left
B0 = O + A*(-0.60)
B1 = B0 - A*0.45
B2 = np.array([-0.62, -1.20, -0.10])
B3 = np.array([-0.40, -1.95, -0.30])
def bez(t):
    t = t[:, None]; return (1-t)**3*B0 + 3*(1-t)**2*t*B1 + 3*(1-t)*t**2*B2 + t**3*B3
NJ = 48
PJ = bez(np.linspace(0, 1, NJ)); RJ = 0.036

def cable_sd(p):
    Aa = PJ[:-1][None]; BA = (PJ[1:]-PJ[:-1])[None]
    PA = p[:, None, :]-Aa
    h = np.clip((PA*BA).sum(-1)/(BA*BA).sum(-1), 0, 1)
    C = Aa+BA*h[..., None]
    d = np.linalg.norm(p[:, None, :]-C, axis=-1)-RJ
    k = np.argmin(d, 1); i = np.arange(len(p))
    return d[i, k], (k+h[i, k])/(NJ-1), C[i, k]

def scene(p, want=False):
    q = p-O; qu = q@A; qp = q-qu[:, None]*A[None]
    rho = np.linalg.norm(qp, axis=1); th = np.arctan2(qp@E2, qp@E1)
    best = np.full(len(p), 9.0); mat = np.zeros(len(p), int)
    for pr in PARTS:
        d = part_sd(qu, rho, th, pr)
        sel = d < best; best = np.where(sel, d, best); mat = np.where(sel, pr[5], mat)
    dc, sv, _ = cable_sd(p)
    sel = dc < best; best = np.where(sel, dc, best); mat = np.where(sel, 0, mat)
    if want: return best, mat, sv, qu, th
    return best

KEY = nrm(np.array([0.55, 0.65, 0.55])); FILL = nrm(np.array([-0.8, -0.2, 0.5]))
V = np.array([0, 0, 1.0])
BEAM = np.array([0.62, 0.82, 1.0])

def env(d):
    """studio surround the steel reflects: dark navy, a broad soft box upper left, a thin cool strip right, warm floor"""
    x, y = d[:, 0], d[:, 1]
    t = np.clip(y*0.5+0.5, 0, 1)
    base = np.stack([0.04+0.12*t**2]*3, 1)
    soft = np.exp(-(((x-0.45)/0.45)**2+((y-0.55)/0.35)**2))*1.25
    strip = np.exp(-(((x+0.78)/0.07)**2))*np.exp(-((y-0.1)/0.7)**2)*0.55
    floor = np.exp(-((y+0.85)/0.25)**2)*0.18
    c = base+soft[:, None]*np.array([0.98, 0.98, 0.97])+strip[:, None]*np.array([0.8, 0.8, 0.8])
    c += floor[:, None]*np.array([0.42, 0.42, 0.42])
    return c

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
        # jacket: satin yellow PVC (OZ's PM cable)
        m = mat == 0
        alb = np.array([0.80, 0.56, 0.05])
        c = alb[None]*(0.05+0.85*dk+0.18*df)[:, None]*ao[:, None]
        c += (spec**50*0.35+spec**10*0.05)[:, None]
        c += ev*(0.04+0.25*fres)[:, None]
        fade = sm(0.42, 0.95, 1-sv)**1.3       # the tail fades into the dark
        col[m] = (c*fade[:, None])[m]
        # boot: OZ blue satin polymer
        m = mat == 1
        alb = np.array([0.035, 0.13, 0.42])
        c = alb[None]*(0.10+1.0*dk+0.25*df)[:, None]*ao[:, None]
        c += (spec**40*0.30+spec**8*0.05)[:, None]
        c += ev*(0.03+0.30*fres)[:, None]
        col[m] = c[m]
        # steel bodies: polished stainless reflecting the studio
        for mm, rough in ((2, 0.0), (3, 1.0)):
            m = mat == mm
            brush = 1+0.10*np.sin(qu*900)*(1-rough)
            c = ev*(0.85+0.35*fres)[:, None]*brush[:, None]
            c += (spec**90*1.6+spec**14*0.12)[:, None]
            c += np.array([0.10, 0.11, 0.12])[None]*(0.2+0.8*dk)[:, None]
            c *= ao[:, None]
            if mm == 3:
                k = np.abs(np.sin(th*36))
                c *= (0.78+0.22*k**0.5)[:, None]
            col[m] = c[m]
        # dark ring
        m = mat == 5
        c = np.array([0.03, 0.035, 0.045])[None]*(0.3+dk)[:, None]+(spec**60*0.5)[:, None]+ev*0.15*fres[:, None]
        col[m] = c[m]
        # zirconia: warm white, soft subsurface look, satin highlight; the core glows at the end face
        m = mat == 4
        alb = np.array([0.86, 0.85, 0.80])
        c = alb[None]*(0.16+0.80*dk+0.22*df+0.10)[:, None]*ao[:, None]
        c += (spec**30*0.30)[:, None]+ev*(0.05+0.2*fres)[:, None]
        dcore = np.linalg.norm(p-TIP, axis=1)
        col[m] = c[m]
        af = np.where(mat == 0, sm(0.42, 0.95, 1-sv)**1.3, 1.0)
        L[hi] = col; a[hi] = af
    # the beam: a fine cool line leaving the fibre core along the axis, fading out, plus a tiny core bloom
    P0 = TIP; P1 = TIP+A*0.95
    dd, hd = segdist2(x, y, P0, P1)
    along = (1-sm(0.0, 1.0, hd))**1.6
    beam = (0.75*np.exp(-dd/0.0035)+0.20*np.exp(-dd/0.016)+0.05*np.exp(-dd/0.06))*along
    zfront = (P0[2]+(P1[2]-P0[2])*hd)
    beam = np.where(a > 0.5, beam*0.0, beam)  # behind nothing: the beam leaves toward the viewer side
    dt = np.hypot(x-TIP[0], y-TIP[1])
    bloom = 0.9*np.exp(-dt/0.012)+0.14*np.exp(-dt/0.05)
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
