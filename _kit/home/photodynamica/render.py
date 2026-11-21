#!/usr/bin/env python3
"""PhotoDynamica hero (HOME_BRIEF update 2c: a crafted render of the real mechanism). PDT light delivery as described in
Photodynamic Solutions' NIH STTR award 1R41CA302359 ("635 nm laser for PpIX activation coupled to a light delivery
head") and on photodynamica.com (fibre optic technology): a jacketed optical fibre rising out of the dark, a short steel
ferrule, and a frosted cylindrical diffuser tip glowing with 635 nm red light, with its bloom. Orthographic sphere
trace of a tube along a cubic curve, in numpy. Saved with ALPHA (no ground of its own, DJ/DP): the glow is stored as
premultiplied light so it adds onto the page ink without any box. Usage: python3 render.py W H out.png [SS] [procs]"""
import sys, numpy as np
from multiprocessing import Pool
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 500
H = int(sys.argv[2]) if len(sys.argv) > 2 else 600
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 1
NP = int(sys.argv[5]) if len(sys.argv) > 5 else 4
FW, FH = W, H; W, H = W*SS, H*SS
YS = 1.2                     # half-height of the view in scene units
XS = YS*W/H
def nrm(v): return v/np.linalg.norm(v, axis=-1, keepdims=True)
def sm(a, b, x): x = np.clip((x-a)/(b-a), 0, 1); return x*x*(3-2*x)

# ---------- the fibre: a cubic curve (jacket), then a straight ferrule and diffuser along its end tangent ----------
P0 = np.array([0.62, -1.62, -0.35]); P1 = np.array([0.70, -0.55, 0.30])
P2 = np.array([-0.62, -0.30, 0.25]); P3 = np.array([-0.26, 0.30, 0.05])
def bez(t):
    t = t[:, None]; return (1-t)**3*P0 + 3*(1-t)**2*t*P1 + 3*(1-t)*t**2*P2 + t**3*P3
NJ = 70
PJ = bez(np.linspace(0, 1, NJ))
T = nrm(P3-P2)
RJ, RF, RD = 0.052, 0.060, 0.040
FER = 0.085; DIF = 0.56
pts = [*PJ, P3+T*0.004, P3+T*FER, P3+T*(FER+0.006)]
rad = [RJ]*NJ + [RF, RF, RD]
NDIF = 10
for k in range(1, NDIF+1): pts.append(P3+T*(FER+0.006+DIF*k/NDIF)); rad.append(RD)
PTS = np.array(pts); RAD = np.array(rad)
# material per vertex: 0 jacket, 1 ferrule, 2 diffuser
MAT = np.array([0]*NJ + [1, 1, 2] + [2]*NDIF)
NV = len(PTS)
D0 = P3+T*(FER+0.006); D1 = P3+T*(FER+0.006+DIF)    # the diffuser axis

def sdf(p):
    """distance to the tube, curve parameter (vertex units) and closest axis point"""
    A = PTS[:-1][None]; B = PTS[1:][None]; BA = B-A
    PA = p[:, None, :]-A
    h = np.clip((PA*BA).sum(-1)/(BA*BA).sum(-1), 0, 1)
    C = A+BA*h[..., None]
    r = RAD[:-1][None]*(1-h)+RAD[1:][None]*h
    d = np.linalg.norm(p[:, None, :]-C, axis=-1)-r
    k = np.argmin(d, 1); i = np.arange(len(p))
    return d[i, k], k+h[i, k], C[i, k]

def segdist2(x, y, a, b):
    ax, ay, bx, by = a[0], a[1], b[0], b[1]
    vx, vy = bx-ax, by-ay
    h = np.clip(((x-ax)*vx+(y-ay)*vy)/(vx*vx+vy*vy), 0, 1)
    return np.hypot(x-ax-vx*h, y-ay-vy*h), h

KEY = nrm(np.array([-0.6, 0.7, 0.55])); RIMV = nrm(np.array([0.8, -0.1, -0.4]))
RED = np.array([1.0, 0.16, 0.085])           # 635 nm, linear, with a little crosstalk so the hot core warms
GREEN = np.array([0.23, 0.43, 0.21])         # the logo green #3a6e35, for the cool rim

def shade(x, y):
    """returns premultiplied linear radiance (n,3) and surface alpha (n,)"""
    n = len(x)
    L = np.zeros((n, 3)); a = np.zeros(n)
    # candidates: near the projected curve
    best = np.full(n, 9.0)
    for k in range(NV-1):
        d, _ = segdist2(x, y, PTS[k], PTS[k+1]); best = np.minimum(best, d)
    cand = np.nonzero(best < 0.075)[0]
    if len(cand):
        ro = np.stack([x[cand], y[cand], np.full(len(cand), 2.0)], 1)
        t = np.zeros(len(cand)); hit = np.zeros(len(cand), bool); alive = np.ones(len(cand), bool)
        for it in range(90):
            idx = np.nonzero(alive)[0]
            if not len(idx): break
            p = ro[idx].copy(); p[:, 2] -= t[idx]
            d, _, _ = sdf(p)
            hh = d < 0.0004; hit[idx[hh]] = True; alive[idx[hh]] = False
            t[idx] += np.maximum(d, 0.0005)
            alive[idx[t[idx] > 4.0]] = False
        hi = np.nonzero(hit)[0]
        if len(hi):
            p = ro[hi].copy(); p[:, 2] -= t[hi]
            _, s, C = sdf(p)
            nn = nrm(p-C); V = np.array([0, 0, 1.0])
            kk = np.clip(np.floor(s).astype(int), 0, NV-2); fr = s-kk
            mat = np.where(fr < 0.5, MAT[kk], MAT[kk+1])
            sv = s/(NJ-1)                         # 0 at the tail, 1 where the jacket ends
            ndv = np.clip(nn@V, 0, 1); fres = (1-ndv)**4
            dk = np.clip(nn@KEY, 0, 1); wrap = np.clip((nn@KEY+0.4)/1.4, 0, 1)
            hv = nrm(KEY+V); spec = np.clip(nn@hv, 0, 1)
            # red light from the diffuser falling on everything near it
            dd, hd = segdist2(p[:, 0], p[:, 1], D0, D1)
            Q = D0[None]+(D1-D0)[None]*hd[:, None]; Lr = Q-p; dist = np.linalg.norm(Lr, axis=1)+1e-6; Lr /= dist[:, None]
            redI = np.clip((nn*Lr).sum(1)*0.7+0.3, 0, 1)*0.9/(1+(dist/0.11)**2)
            col = np.zeros((len(hi), 3))
            # jacket: satin near-black polymer with a faint green cast
            j = mat == 0
            alb = np.array([0.020, 0.030, 0.026])
            cj = alb[None]*(0.4+2.2*dk*1.0+0.5*wrap)[:, None]
            cj += (spec**60*0.55+spec**12*0.06)[:, None]*np.array([0.85, 0.92, 1.0])
            cj += (fres*0.30*np.clip(nn@RIMV*0.5+0.5, 0, 1))[:, None]*GREEN[None]*1.4
            cj += redI[:, None]*RED[None]*(0.10+0.6*fres)[:, None]
            col[j] = cj[j]
            # ferrule: brushed steel
            f = mat == 1
            ang = np.arctan2(nn[:, 1], nn[:, 0])
            brush = 1+0.08*np.sin(ang*40)
            cf = np.array([0.36, 0.38, 0.40])[None]*(0.18+0.9*dk*brush)[:, None]
            cf += (spec**40*1.6+spec**8*0.18)[:, None]*np.array([0.95, 0.97, 1.0])
            cf += redI[:, None]*RED[None]*(1.1+1.2*fres)[:, None]
            cf += (fres*0.22)[:, None]*GREEN[None]
            col[f] = cf[f]
            # diffuser: frosted fused silica scattering 635 nm light from inside; brighter through its thick middle
            g = mat == 2
            u = np.clip((s-(NJ+2))/NDIF, 0, 1)        # 0 at the ferrule, 1 at the tip
            prof = (0.7+0.3*sm(0.0, 0.25, u))*(1-0.25*sm(0.85, 1.0, u))
            band = 1+0.05*np.sin(u*DIF*260)+0.03*np.sin(u*DIF*610+1.3)
            I = 4.4*prof*band*(0.42+0.58*ndv**1.5)
            cd = RED[None]*I[:, None] + (spec**80*0.6)[:, None]
            col[g] = cd[g]
            # fade the tail of the fibre into the dark
            af = sm(0.10, 0.46, sv)**1.4
            af = np.where(mat == 0, af, 1.0)
            L[cand[hi]] = col*af[:, None]; a[cand[hi]] = af
    # the bloom of the diffuser (in front of everything, additive): a hot core, a red halo and a wide faint wash
    dd, hd = segdist2(x, y, D0, D1)
    tipw = 0.75+0.25*sm(0.0, 0.3, hd)
    halo = (1.4*np.exp(-dd/0.02)+0.5*np.exp(-dd/0.065)+0.13*np.exp(-dd/0.19))*tipw
    L += halo[:, None]*RED[None]
    return L, a

def run(args):
    y0, y1 = args
    ys = np.arange(y0, y1); xs = np.arange(W)
    PX, PY = np.meshgrid(xs, ys)
    x = ((PX+0.5)/W*2-1)*XS; y = (1-(PY+0.5)/H*2)*YS
    L, a = shade(x.ravel(), y.ravel())
    # soft window: every pixel of light fades out long before the canvas edge (no box, DJ/DP)
    ex = np.minimum(XS-np.abs(x.ravel()), YS-np.abs(y.ravel()))
    wnd = sm(0.0, 0.42, ex)
    # filmic tonemap per channel (the hot core of the diffuser warms toward orange-white)
    Rgb = 1-np.exp(-L*1.15)
    Rgb *= wnd[:, None]; a = a*wnd
    al = np.maximum(a, Rgb.max(1))
    return np.concatenate([Rgb, al[:, None]], 1).reshape(y1-y0, W, 4)

if __name__ == '__main__':
    import time; t0 = time.time()
    step = max(8, H//(NP*8))
    bands = [(y, min(H, y+step)) for y in range(0, H, step)]
    with Pool(NP) as pool: rows = pool.map(run, bands)
    img = np.concatenate(rows, 0)
    pre = img[..., :3]; al = img[..., 3:]
    rgb = np.where(al > 1e-4, pre/np.maximum(al, 1e-4), 0)
    im = Image.fromarray((np.clip(np.concatenate([rgb**(1/2.2) if False else rgb, al], -1), 0, 1)*255).astype(np.uint8), 'RGBA')
    if SS != 1: im = im.resize((FW, FH), Image.LANCZOS)
    im.save(OUT); print('done', round(time.time()-t0, 1))
