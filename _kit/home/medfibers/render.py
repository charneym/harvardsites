#!/usr/bin/env python3
"""MED-Fibers hero (HOME_BRIEF update 2c: a crafted render of the firm's real product). One MED-Fibers surgical laser
fiber as listed on med-fibers.com (holmium / thulium fibers: "blue jacket fiber", hard clad / Tefzel, 3 m, single use):
the blue Tefzel jacket in a loose loop, as fibers are coiled, rising to a short length of bare silica that ends in the
fire-polished DOME TIP(TM) (dome-tip-surgical-fibers.html), with warm laser light at the tip. Orthographic sphere tracing
of signed distance fields in numpy, studio environment reflections; saved with ALPHA (no ground of its own, DJ/DP).
Usage: python3 render.py W H out.png [SS] [procs]"""
import sys, math, numpy as np
from multiprocessing import Pool
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 500
H = int(sys.argv[2]) if len(sys.argv) > 2 else 600
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 1
NP = int(sys.argv[5]) if len(sys.argv) > 5 else 4
FW, FH = W, H; W, H = W*SS, H*SS
YS = 0.98; XS = YS*W/H
def nrm(v): return v/np.linalg.norm(v, axis=-1, keepdims=True)
def sm(a, b, x): x = np.clip((x-a)/(b-a), 0, 1); return x*x*(3-2*x)

# the fibre's path (x right, y up, z toward the viewer): enters from below, one loose loop, then rises to the tip
CP = np.array([
    (0.62, -1.55, 0.00), (0.52, -1.05, 0.02), (0.32, -0.58, 0.06), (0.02, -0.34, 0.09),
    (-0.34, -0.40, 0.09), (-0.48, -0.70, 0.05), (-0.22, -0.95, 0.00), (0.14, -0.84, -0.05),
    (0.26, -0.50, -0.08), (0.14, -0.12, -0.05), (-0.02, 0.22, -0.01), (-0.07, 0.50, 0.03)])
def catmull(P, n):
    P = np.vstack([P[0]*2-P[1], P, P[-1]*2-P[-2]]); out = []
    for i in range(1, len(P)-2):
        p0, p1, p2, p3 = P[i-1], P[i], P[i+1], P[i+2]
        for t in np.linspace(0, 1, n, endpoint=False):
            t2, t3 = t*t, t*t*t
            out.append(0.5*((2*p1)+(-p0+p2)*t+(2*p0-5*p1+4*p2-p3)*t2+(-p0+3*p1-3*p2+p3)*t3))
    out.append(P[-2]); return np.array(out)
PJ = catmull(CP, 10)
NJ = len(PJ)
RJ = 0.030                              # jacket radius
TD = nrm(PJ[-1]-PJ[-3])                 # tangent at the jacket end
G0 = PJ[-1]; GL = 0.25; RG = 0.0175     # bare silica: start, length, radius
G1 = G0+TD*GL                           # dome centre
TIP = G1+TD*RG

def tube_sd(p):
    Aa = PJ[:-1][None]; BA = (PJ[1:]-PJ[:-1])[None]
    PA = p[:, None, :]-Aa
    h = np.clip((PA*BA).sum(-1)/(BA*BA).sum(-1), 0, 1)
    C = Aa+BA*h[..., None]
    d = np.linalg.norm(p[:, None, :]-C, axis=-1)-RJ
    k = np.argmin(d, 1); i = np.arange(len(p))
    return d[i, k], (k+h[i, k])/(NJ-1)

def glass_sd(p):
    pa = p-G0; h = np.clip(pa@TD, 0, GL)
    return np.linalg.norm(pa-h[:, None]*TD[None], axis=1)-RG, h/GL

def jacket_end_sd(p):   # the jacket's cut end: a flat-ended short cylinder so the step to the glass reads crisply
    pa = p-PJ[-1]; u = pa@TD; r = np.linalg.norm(pa-u[:, None]*TD[None], axis=1)
    dx = r-RJ; dy = np.abs(u+0.004)-0.004
    return np.hypot(np.maximum(dx, 0), np.maximum(dy, 0))+np.minimum(np.maximum(dx, dy), 0)

def scene(p, want=False):
    dt, sv = tube_sd(p)
    dg, gv = glass_sd(p)
    de = jacket_end_sd(p)
    dt = np.minimum(dt, de)
    best = np.minimum(dt, dg); mat = np.where(dg < dt, 1, 0)
    if want: return best, mat, sv, gv
    return best

KEY = nrm(np.array([-0.55, 0.65, 0.55])); FILL = nrm(np.array([0.8, -0.2, 0.5]))
V = np.array([0, 0, 1.0])
WARM = np.array([1.0, 0.66, 0.34])      # the laser light at the tip, in the brand's orange
def env(d):
    x, y = d[:, 0], d[:, 1]
    t = np.clip(y*0.5+0.5, 0, 1)
    base = np.stack([0.03+0.09*t**2, 0.035+0.10*t**2, 0.05+0.13*t**2], 1)
    soft = np.exp(-(((x+0.45)/0.45)**2+((y-0.55)/0.35)**2))*1.2
    strip = np.exp(-(((x-0.78)/0.07)**2))*np.exp(-((y-0.1)/0.7)**2)*0.8
    floor = np.exp(-((y+0.85)/0.25)**2)*0.22
    c = base+soft[:, None]*np.array([0.95, 0.97, 1.0])+strip[:, None]*np.array([0.75, 0.85, 1.0])
    c += floor[:, None]*np.array([0.65, 0.42, 0.22])
    return c

def normal(p):
    e = 0.0006; ex = np.array([e, 0, 0]); ey = np.array([0, e, 0]); ez = np.array([0, 0, e])
    return nrm(np.stack([scene(p+ex)-scene(p-ex), scene(p+ey)-scene(p-ey), scene(p+ez)-scene(p-ez)], 1))

def shade(x, y):
    n = len(x); L = np.zeros((n, 3)); a = np.zeros(n)
    ro = np.stack([x, y, np.full(n, 2.0)], 1)
    t = np.zeros(n); hit = np.zeros(n, bool); alive = np.ones(n, bool)
    for it in range(140):
        idx = np.nonzero(alive)[0]
        if not len(idx): break
        p = ro[idx].copy(); p[:, 2] -= t[idx]
        d = scene(p)
        hh = d < 0.0003; hit[idx[hh]] = True; alive[idx[hh]] = False
        t[idx] += np.maximum(d, 0.0004)
        alive[idx[t[idx] > 4.0]] = False
    hi = np.nonzero(hit)[0]
    if len(hi):
        p = ro[hi].copy(); p[:, 2] -= t[hi]
        _, mat, sv, gv = scene(p, True)
        nn = normal(p)
        ndv = np.clip(nn@V, 0, 1); fres = (1-ndv)**5
        dk = np.clip(nn@KEY, 0, 1); df = np.clip(nn@FILL, 0, 1)
        hv = nrm(KEY+V); spec = np.clip(nn@hv, 0, 1)
        R = 2*(nn@V)[:, None]*nn-V[None]
        ev = env(R)
        ao = np.ones(len(hi))
        for k, s in enumerate((0.01, 0.025, 0.05)):
            ao -= np.clip(s-scene(p+nn*s), 0, 1)*(4.0/(k+1))
        ao = np.clip(ao, 0.3, 1)
        dtip = np.linalg.norm(p-TIP, axis=1)
        col = np.zeros((len(hi), 3)); al = np.ones(len(hi))
        # jacket: satin blue Tefzel
        m = mat == 0
        alb = np.array([0.05, 0.21, 0.66])
        c = alb[None]*(0.07+0.95*dk+0.22*df)[:, None]*ao[:, None]
        c += (spec**60*0.55+spec**12*0.06)[:, None]*np.array([0.9, 0.95, 1.0])
        c += ev*(0.03+0.30*fres)[:, None]
        c += WARM[None]*(0.35*np.exp(-dtip/0.09))[:, None]    # the tip's light warming the jacket end
        fade = sm(0.0, 0.16, sv)**1.2                          # the tail fades into the dark
        col[m] = (c*fade[:, None])[m]; al[m] = fade[m]
        # bare silica: clear glass, mostly reflection, carrying light that grows toward the dome
        m = mat == 1
        tint = np.array([0.80, 0.90, 0.95])
        c = ev*(0.22+0.85*fres)[:, None]*tint[None]+np.array([0.10,0.13,0.16])[None]*(0.3+dk)[:, None]
        c += (spec**140*2.2+spec**30*0.25)[:, None]
        glow = 0.05+0.75*gv**3
        c += WARM[None]*glow[:, None]*(0.5+0.5*ndv)[:, None]
        c += WARM[None]*(1.6*np.exp(-dtip/0.012))[:, None]
        col[m] = c[m]; al[m] = np.clip(0.45+0.55*fres+0.5*gv**3, 0, 1)[m]
        L[hi] = col; a[hi] = al
    # a soft bloom around the dome tip and a short warm cone of light leaving it (fading fast, so nothing reads as a beam to infinity)
    dxy = np.hypot(x-TIP[0], y-TIP[1])
    bloom = 1.1*np.exp(-dxy/0.010)+0.32*np.exp(-dxy/0.04)+0.12*np.exp(-dxy/0.16)
    d2 = np.array([TD[0], TD[1]]); d2 = d2/np.linalg.norm(d2)
    rx, ry = x-TIP[0], y-TIP[1]
    along = rx*d2[0]+ry*d2[1]; perp = np.abs(-rx*d2[1]+ry*d2[0])
    cone = np.where(along > 0, np.exp(-np.minimum(along,9)*0)*np.exp(-perp/(0.006+np.maximum(along,0)*0.16))*np.exp(-along/0.18)*0.55, 0)
    L += (bloom+cone)[:, None]*WARM[None]
    return L, a

def run(args):
    y0, y1 = args
    PX, PY = np.meshgrid(np.arange(W), np.arange(y0, y1))
    x = ((PX+0.5)/W*2-1)*XS; y = (1-(PY+0.5)/H*2)*YS
    L, a = shade(x.ravel(), y.ravel())
    ex = np.minimum(XS-np.abs(x.ravel()), YS-np.abs(y.ravel()))
    wnd = sm(0.0, 0.25, ex)
    Rgb = 1-np.exp(-L*1.25)
    Rgb = Rgb**(1/1.2)
    Rgb *= wnd[:, None]; a = a*wnd
    al = np.maximum(a, Rgb.max(1))
    return np.concatenate([Rgb, al[:, None]], 1).reshape(y1-y0, W, 4)

if __name__ == '__main__':
    import time; t0 = time.time()
    step = max(4, H//(NP*12))
    bands = [(y, min(H, y+step)) for y in range(0, H, step)]
    with Pool(NP) as pool: rows = pool.map(run, bands)
    img = np.concatenate(rows, 0)
    pre = img[..., :3]; al = img[..., 3:]
    rgb = np.where(al > 1e-4, pre/np.maximum(al, 1e-4), 0)
    im = Image.fromarray((np.clip(np.concatenate([rgb, al], -1), 0, 1)*255).astype(np.uint8), 'RGBA')
    if SS != 1: im = im.resize((FW, FH), Image.LANCZOS)
    im.save(OUT); print('done', round(time.time()-t0, 1))
