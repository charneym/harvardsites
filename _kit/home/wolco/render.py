#!/usr/bin/env python3
"""WOLCO hero (HOME_BRIEF update 2c: a crafted render of the firm's real product). Spools of fine specialist wire as on
wolco.pl's own banner ("Jakość i doświadczenie": copper, tinned and brass-plated wire on plastic spools): one large
spool wound with copper wire in front, a tin-plated and a brass-plated spool behind. Sphere-traced signed distance
field in numpy: each winding is built from real stacked wire turns (circular cross sections), between dark plastic
flanges with a bore; metal BRDF against a navy studio of soft boxes, ambient occlusion, a soft contact shadow and a
mirror bench that fades out radially over a long distance so no edge shows (DJ/DP).
Saved with REAL alpha over the page ink (each pixel un-blended from the ink colour).
Usage: python3 render.py W H out.png [SS]"""
import sys, os, math, numpy as np
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 640
H = int(sys.argv[2]) if len(sys.argv) > 2 else 400
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 1
FW, FH = W, H; W, H = W*SS, H*SS
INK = np.array([5, 22, 44])/255.0
def nrm(v): return v/np.maximum(np.linalg.norm(v, axis=-1, keepdims=True), 1e-9)
def sm(a, b, x): x = np.clip((x-a)/(b-a), 0, 1); return x*x*(3-2*x)
def box2(px, py, hx, hy, r=0.0):
    qx, qy = np.abs(px)-hx+r, np.abs(py)-hy+r
    return np.hypot(np.maximum(qx, 0), np.maximum(qy, 0)) + np.minimum(np.maximum(qx, qy), 0) - r
def rep(v, p): return np.mod(v+p/2, p)-p/2

# spools: centre x, z, flange radius, winding radius, height, flange thickness, wire radius, material id
SP = [
    (0.10, 0.25, 0.70, 0.56, 1.12, 0.06, 0.0095, 0),   # copper, front
    (-1.05, -0.70, 0.50, 0.40, 0.80, 0.05, 0.0080, 1),  # tin-plated, back left
    (1.20, -0.75, 0.50, 0.39, 0.80, 0.05, 0.0080, 2),   # brass-plated, back right
]
def spool(p, s):
    cx, cz, RF, RW, HH, TF, A, _ = s
    x, y, z = p[..., 0]-cx, p[..., 1], p[..., 2]-cz
    rr = np.hypot(x, z)
    # flanges (bottom and top), slightly rounded rims, with a bore through the whole spool
    fb = box2(rr-RF/2, y-TF/2, RF/2, TF/2, 0.012)
    ft = box2(rr-RF/2, y-(HH-TF/2), RF/2, TF/2, 0.012)
    # the winding: a smooth body whose fine wire turns are added in shading (sub-pixel ridges, supersampled)
    wind = box2(rr-RW/2, y-HH/2, RW/2, HH/2-0.01)
    d = np.minimum(np.minimum(fb, ft), wind)
    bore = rr-0.12*RF/0.66
    d = np.maximum(d, -bore)
    return d
def sdf_id(p):
    ds = np.stack([spool(p, s) for s in SP], 0)
    return ds.min(0), ds.argmin(0)
def sdf(p): return np.min(np.stack([spool(p, s) for s in SP], 0), 0)
def part(p):
    """0 = winding (metal), 1 = flange/core (plastic), per spool"""
    k = sdf_id(p)[1]
    out = np.zeros(p.shape[:-1], int); mat = np.zeros(p.shape[:-1], int)
    for i, s in enumerate(SP):
        m = k == i
        if not m.any(): continue
        cx, cz, RF, RW, HH, TF, A, mid = s
        q = p[m]; rr = np.hypot(q[:, 0]-cx, q[:, 2]-cz); y = q[:, 1]
        isflange = (y < TF+0.002) | (y > HH-TF-0.002) | (rr < RW-0.01)
        out[m] = np.where(isflange, 1, 0); mat[m] = mid
    return out, mat

def normal(p):
    e = 4e-4
    n = np.stack([sdf(p+np.array([e, 0, 0]))-sdf(p-np.array([e, 0, 0])),
                  sdf(p+np.array([0, e, 0]))-sdf(p-np.array([0, e, 0])),
                  sdf(p+np.array([0, 0, e]))-sdf(p-np.array([0, 0, e]))], -1)
    return nrm(n)

def march(o, d, tmax=14.0, steps=200):
    t = np.zeros(o.shape[:-1]); hit = np.zeros(o.shape[:-1], bool); act = np.ones(o.shape[:-1], bool)
    for _ in range(steps):
        if not act.any(): break
        idx = np.nonzero(act)
        dd = sdf(o[idx]+d[idx]*t[idx][..., None])
        h = dd < 2.0e-4*(1+t[idx])
        hi = tuple(i[h] for i in idx); hit[hi] = True
        t[idx] += np.where(h, 0, dd*0.85)
        gone = h | (t[idx] > tmax)
        act[tuple(i[gone] for i in idx)] = False
    return t, hit

EL = math.radians(float(os.environ.get('EL', '17'))); AZ = math.radians(float(os.environ.get('AZ', '8')))
TGT = np.array([0.05, 0.50, -0.20]); DIST = 10.5; FOV = float(os.environ.get('FOV', '0.16'))
eye = TGT + DIST*np.array([math.sin(AZ)*math.cos(EL), math.sin(EL), math.cos(AZ)*math.cos(EL)])
fw = nrm(TGT-eye); rt = nrm(np.cross(fw, [0, 1, 0])); up = np.cross(rt, fw)

def env(d):
    lx, ly, lz = (d*rt).sum(-1), d[..., 1], (d*fw).sum(-1)
    E = lambda m, c, k: m[..., None]*np.array(c)[None]*k
    base = E(0.08+0.20*sm(-0.05, 0.9, ly), [0.50, 0.62, 0.90], 1.0)
    hor = E(sm(0.25, 0.0, np.abs(ly-0.05)), [0.20, 0.28, 0.52], 1.0)
    top = E(sm(0.45, 0.62, ly)*sm(0.9, 0.65, np.abs(lx+0.1)), [1.0, 0.98, 0.95], 2.6)
    lft = E(sm(-0.42, -0.55, lx)*sm(-0.98, -0.88, lx)*sm(0.6, 0.45, np.abs(ly-0.12)), [0.80, 0.88, 1.0], 2.4)
    rgt = E(sm(0.48, 0.58, lx)*sm(0.98, 0.88, lx)*sm(0.55, 0.42, np.abs(ly-0.15)), [1.0, 0.92, 0.78], 2.2)
    wall = E(sm(-0.1, -0.5, lz)*sm(0.5, 0.2, np.abs(ly-0.1)), [0.6, 0.68, 0.85], 0.8)
    flr = sm(-0.02, -0.3, ly)
    c = base+hor+top+lft+rgt+wall
    bench = E(sm(-0.75, -0.03, ly), [0.26, 0.34, 0.58], 1.0) + INK[None]*0.6
    return c*(1-flr[..., None]) + bench*flr[..., None]

F0M = {0: np.array([0.96, 0.56, 0.38]), 1: np.array([0.80, 0.81, 0.83]), 2: np.array([0.92, 0.76, 0.42])}
def shade(p, d, n):
    n0 = n
    pt, mt = part(p)
    # wire turns: every turn is a round wire, so across one turn the normal sweeps up and down. The reflection is
    # integrated over that sweep (anisotropic sheen, no moire), and a soft groove shade marks the visible turns.
    wind = (pt == 0) & (np.abs(n[:, 1]) < 0.5)
    A = np.array([s[6] for s in SP])[sdf_id(p)[1]]
    groove = 1-0.22*(0.5+0.5*np.cos(2*math.pi*p[:, 1]/(2*A)))**6
    rdir = d - 2*(d*n).sum(-1, keepdims=True)*n
    t1 = nrm(np.cross(n, np.array([0.0, 1.0, 0.0])+1e-3)); t2 = np.cross(n, t1)
    acc = np.zeros_like(p); accR = np.zeros_like(p)
    J = [(0, 0)] + [(math.cos(k*2.399)*0.06*math.sqrt(k/6), math.sin(k*2.399)*0.06*math.sqrt(k/6)) for k in range(1, 7)]
    for jx, jy in J:
        acc += env(nrm(rdir + t1*jx + t2*jy))
    acc /= len(J)
    if wind.any():
        aw = np.zeros((wind.sum(), 3)); nw = n[wind]; dw = d[wind]
        TL = np.linspace(-0.92, 0.92, 9)
        for tl in TL:
            nb = nrm(nw*math.sqrt(1-tl*tl) + np.array([0.0, 1.0, 0.0])[None]*tl)
            aw += env(dw - 2*(dw*nb).sum(-1, keepdims=True)*nb)
        acc[wind] = aw/len(TL)*groove[wind][:, None]
    for jx, jy in J:   # rough plastic: a much wider lobe
        accR += env(nrm(rdir + t1*jx*5 + t2*jy*5))
    accR /= len(J)
    cos = np.clip(-(d*n).sum(-1), 0, 1)[..., None]
    ao = np.ones(p.shape[:-1])
    for i in range(1, 6):
        hh = 0.02*i
        ao -= (hh - sdf(p+n0*hh))*(0.5**i)*9
    ao = np.clip(ao, 0.25, 1)[..., None]
    o2 = p + n0*2e-3
    _, h2 = march(o2, rdir, tmax=3.0, steps=60)
    occ = np.where(h2, 0.8, 1.0)[..., None]
    key = np.clip((n*nrm(np.array([-0.4, 0.9, 0.45]))).sum(-1), 0, 1)[..., None]
    F0 = np.stack([F0M[m] for m in range(3)])[mt]
    F = F0 + (1-F0)*(1-cos)**5
    metal = F*acc*occ*ao + 0.06*key*F0*ao
    Fp = 0.04 + 0.96*(1-cos)**5
    plast = (np.array([0.03, 0.06, 0.14])*(0.35+0.9*key) + Fp*accR*0.55*occ)*ao
    return np.where((pt == 1)[..., None], plast, metal)

def render():
    ys, xs = np.mgrid[0:H, 0:W]
    u = (xs+0.5)/W*2-1; v = 1-(ys+0.5)/H*2
    asp = W/H
    d = nrm(fw[None, None]+(u*asp*FOV)[..., None]*rt[None, None]+(v*FOV)[..., None]*up[None, None])
    o = np.broadcast_to(eye, d.shape).copy()
    t, hit = march(o, d)
    col = np.zeros(d.shape); col[:] = INK
    tf = np.where(d[..., 1] < 0, -o[..., 1]/np.minimum(d[..., 1], -1e-6), np.inf)
    floor = (~hit | (tf < t)) & np.isfinite(tf)
    hit = hit & ~floor
    if hit.any():
        P = o[hit]+d[hit]*t[hit][..., None]
        col[hit] = shade(P, d[hit], normal(P))
    if floor.any():
        P = o[floor]+d[floor]*tf[floor][..., None]
        r = np.hypot(P[:, 0]-0.05, (P[:, 2]+0.2)*1.5)
        fade = sm(3.0, 1.2, r)**1.6
        rd = d[floor].copy(); rd[:, 1] *= -1
        o2 = P + rd*2e-3
        t2, h2 = march(o2, rd, tmax=4.0, steps=140)
        rc = INK[None]*np.ones_like(P)
        if h2.any():
            P2 = o2[h2]+rd[h2]*t2[h2][..., None]
            rc[h2] = shade(P2, rd[h2], normal(P2))
        refl = 0.26*fade[..., None]*sm(1.2, 0.0, t2)[..., None]
        sh = 1-0.6*sm(0.30, 0.0, sdf(P))
        c = INK[None]*sh[..., None]*(1-refl) + rc*refl
        c += (0.03*sm(2.8, 0.3, r))[..., None]*np.array([0.10, 0.17, 0.42])
        col[floor] = INK + (c-INK)*fade[..., None]
    return col
def tm(c):
    c = np.clip(c, 0, None)
    k = INK/(1+0.35*INK)*1.35
    return np.clip(c/(1+0.35*c)*1.35 - k + INK, 0, 1)

col = tm(render())
img8 = (col*255).round()
if SS > 1:
    img8 = img8.reshape(FH, SS, FW, SS, 3).mean((1, 3))
T = img8/255.0
ink = INK
a = np.clip(np.maximum((T-ink)/(1-ink), (ink-T)/ink).max(-1), 0, 1)
a = np.where(a < 1.5/255, 0, a)
F = np.clip(ink + (T-ink)/np.maximum(a, 1e-6)[..., None], 0, 1)
Image.fromarray(np.dstack([F*255, a*255]).round().astype(np.uint8), 'RGBA').save(OUT)
print('wrote', OUT, FW, FH)
