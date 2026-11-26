#!/usr/bin/env python3
"""KREMO hero (HOME_BRIEF update 2c: a crafted render of the firm's real product). One pressed stainless-steel
Vorschweißbördel (weld-neck stub end) with its loose flange ring (Losflansch für Vorschweißbördel; kremo-werke.de >
Produkte > Rohrzubehör / Flansche), lying on its sealing face on a dark glossy bench, seen from slightly above, the
way the parts stand in KREMO's own product photograph. Sphere-traced signed distance field in numpy: the flared stub
(a thin tube flowing into the bördel with a pressed fillet), the flat ring with eight bolt holes, a polished stainless
BRDF against a navy studio of soft boxes (blurred over a few jittered reflection rays), ambient occlusion, a soft
contact shadow and a mirror bench that fades out radially over a long distance so no edge shows (DJ/DP).
Saved with REAL alpha over the page ink (each pixel un-blended from the ink colour).
Usage: python3 render.py W H out.png [SS]"""
import sys, math, numpy as np
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 640
H = int(sys.argv[2]) if len(sys.argv) > 2 else 400
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 1
FW, FH = W, H; W, H = W*SS, H*SS
INK = np.array([6, 16, 44])/255.0
def nrm(v): return v/np.maximum(np.linalg.norm(v, axis=-1, keepdims=True), 1e-9)
def sm(a, b, x): x = np.clip((x-a)/(b-a), 0, 1); return x*x*(3-2*x)

# ---- geometry (object space, y up, units: flange outer radius = 1) ----
TI, TO = 0.455, 0.482          # tube bore / outer radius
FR, FT = 0.70, 0.036           # bördel (flare) radius and thickness, lying on y=0
RI, RO, RT = 0.545, 1.0, 0.135 # loose ring inner/outer radius, thickness, resting on the flare
TH = 0.92                      # tube top
NH, HP, HR = 8, 0.80, 0.066    # bolt holes: count, pitch radius, radius

def box2(px, py, hx, hy, r=0.0):
    qx, qy = np.abs(px)-hx+r, np.abs(py)-hy+r
    return np.hypot(np.maximum(qx, 0), np.maximum(qy, 0)) + np.minimum(np.maximum(qx, qy), 0) - r
def smin(a, b, k):
    h = np.clip(0.5+0.5*(b-a)/k, 0, 1)
    return b*(1-h)+a*h-k*h*(1-h)

def sdf(p):
    x, y, z = p[..., 0], p[..., 1], p[..., 2]
    r = np.hypot(x, z)
    flare = box2(r-(TI+FR)/2, y-FT/2, (FR-TI)/2, FT/2, 0.012)
    tube = box2(r-(TI+TO)/2, y-(TH+FT*0.5)/2, (TO-TI)/2, (TH-FT*0.5)/2, 0.008)
    stub = smin(flare, tube, 0.07)
    # keep the bore clean: the fillet must never close the inside of the tube
    stub = np.maximum(stub, TI-r)
    ring = box2(r-(RI+RO)/2, y-(FT+RT/2+0.002), (RO-RI)/2, RT/2, 0.014)
    a = np.arctan2(z, x) + math.pi/NH
    sec = 2*math.pi/NH
    a = np.mod(a+sec/2, sec)-sec/2
    hx, hz = r*np.cos(a)-HP, r*np.sin(a)
    hole = np.hypot(hx, hz)-HR
    ring = np.maximum(ring, -hole)
    return np.minimum(stub, ring)

def normal(p):
    e = 6e-4
    n = np.stack([sdf(p+np.array([e, 0, 0]))-sdf(p-np.array([e, 0, 0])),
                  sdf(p+np.array([0, e, 0]))-sdf(p-np.array([0, e, 0])),
                  sdf(p+np.array([0, 0, e]))-sdf(p-np.array([0, 0, e]))], -1)
    return nrm(n)

def march(o, d, tmax=12.0, steps=160):
    t = np.zeros(o.shape[:-1]); hit = np.zeros(o.shape[:-1], bool); act = np.ones(o.shape[:-1], bool)
    for _ in range(steps):
        if not act.any(): break
        idx = np.nonzero(act)
        dd = sdf(o[idx]+d[idx]*t[idx][..., None])
        h = dd < 2.5e-4*(1+t[idx])
        hi = tuple(i[h] for i in idx); hit[hi] = True
        t[idx] += np.where(h, 0, dd*0.9)
        gone = h | (t[idx] > tmax)
        act[tuple(i[gone] for i in idx)] = False
    return t, hit

# ---- camera ----
EL = math.radians(31); AZ = math.radians(24)
TGT = np.array([0.0, 0.30, 0.0]); DIST = 7.0; FOV = 0.17
eye = TGT + DIST*np.array([math.sin(AZ)*math.cos(EL), math.sin(EL), math.cos(AZ)*math.cos(EL)])
fw = nrm(TGT-eye); rt = nrm(np.cross(fw, [0, 1, 0])); up = np.cross(rt, fw)
CAM_RT, CAM_UP = rt, up

def env(d):
    """navy-grey studio in camera-relative terms: a wide soft box above, tall cool and warm strips left and right
    at part height, a broad pale wall behind the camera, a horizon glow and a dark bench."""
    lx, ly, lz = (d*CAM_RT).sum(-1), d[..., 1], (d*fw).sum(-1)
    E = lambda m, c, k: m[..., None]*np.array(c)[None]*k
    sky = 0.10+0.22*sm(-0.05, 0.9, ly)
    base = E(sky, [0.55, 0.66, 0.92], 1.0)
    hor = E(sm(0.25, 0.0, np.abs(ly-0.05)), [0.22, 0.30, 0.55], 1.0)
    top = E(sm(0.48, 0.62, ly)*sm(0.9, 0.7, np.abs(lx+0.05)), [0.95, 0.97, 1.0], 2.4)
    lft = E(sm(-0.45, -0.55, lx)*sm(-0.98, -0.9, lx)*sm(0.62, 0.5, np.abs(ly-0.12)), [0.78, 0.86, 1.0], 2.6)
    rgt = E(sm(0.50, 0.58, lx)*sm(0.98, 0.9, lx)*sm(0.55, 0.45, np.abs(ly-0.15)), [1.0, 0.95, 0.88], 2.0)
    wall = E(sm(-0.1, -0.5, lz)*sm(0.5, 0.2, np.abs(ly-0.1)), [0.6, 0.68, 0.85], 0.9)
    flr = sm(-0.02, -0.3, ly)
    c = base+hor+top+lft+rgt+wall
    bench = E(sm(-0.75, -0.03, ly), [0.30, 0.38, 0.62], 1.0) + E(sm(-0.9, -0.2, ly)*sm(0.5, 0.1, np.abs(lx)), [0.55, 0.62, 0.8], 0.5) + INK[None]*0.6 + E(sm(-0.05, -0.45, lz)*sm(0.42, 0.22, np.abs(ly+0.42))*sm(0.55, 0.25, np.abs(lx+0.12)), [0.82, 0.88, 1.0], 1.5)
    return c*(1-flr[..., None]) + bench*flr[..., None]

def shade_metal(p, d, n):
    rdir = d - 2*(d*n).sum(-1, keepdims=True)*n
    # polished, very lightly brushed stainless: average a few jittered reflection rays
    rng = np.random.default_rng(3)
    acc = np.zeros_like(p)
    J = [(0, 0)] + [(math.cos(k*2.399)*0.045*math.sqrt(k/6), math.sin(k*2.399)*0.045*math.sqrt(k/6)) for k in range(1, 7)]
    t1 = nrm(np.cross(n, np.array([0.0, 1.0, 0.0])+1e-3)); t2 = np.cross(n, t1)
    for jx, jy in J:
        rr = nrm(rdir + t1*jx + t2*jy)
        acc += env(rr)
    acc /= len(J)
    cos = np.clip(-(d*n).sum(-1), 0, 1)[..., None]
    F0 = np.array([0.60, 0.61, 0.63])
    F = F0 + (1-F0)*(1-cos)**5
    # occlusion
    ao = np.ones(p.shape[:-1])
    for i in range(1, 6):
        hh = 0.02*i
        ao -= (hh - sdf(p+n*hh))*(0.5**i)*9
    ao = np.clip(ao, 0.25, 1)[..., None]
    # self-reflection approximation: rays bouncing into the bore or onto the ring read darker
    o2 = p + n*2e-3
    t2r, h2 = march(o2, rdir, tmax=3.0, steps=60)
    occ = np.where(h2, 0.55, 1.0)[..., None]
    key = np.clip((n*nrm(np.array([-0.4, 0.9, 0.35]))).sum(-1), 0, 1)[..., None]
    col = F*acc*occ*ao + 0.05*key*np.array([0.85, 0.9, 1.0])*ao
    return col

def render():
    ys, xs = np.mgrid[0:H, 0:W]
    u = (xs+0.5)/W*2-1; v = 1-(ys+0.5)/H*2
    asp = W/H
    d = nrm(fw[None, None]+(u*asp*FOV)[..., None]*rt[None, None]+(v*FOV)[..., None]*up[None, None])
    o = np.broadcast_to(eye, d.shape).copy()
    t, hit = march(o, d)
    col = np.zeros(d.shape); col[:] = INK
    # floor y=0
    tf = np.where(d[..., 1] < 0, -o[..., 1]/np.minimum(d[..., 1], -1e-6), np.inf)
    floor = (~hit | (tf < t)) & np.isfinite(tf)
    hit = hit & ~floor
    if hit.any():
        P = o[hit]+d[hit]*t[hit][..., None]
        N = normal(P)
        col[hit] = shade_metal(P, d[hit], N)
    if floor.any():
        P = o[floor]+d[floor]*tf[floor][..., None]
        r = np.hypot(P[:, 0], P[:, 2])
        fade = sm(2.3, 0.85, r)**1.6
        rd = d[floor].copy(); rd[:, 1] *= -1
        o2 = P + rd*2e-3
        t2, h2 = march(o2, rd, tmax=4.0, steps=120)
        rc = INK[None]*np.ones_like(P)
        if h2.any():
            P2 = o2[h2]+rd[h2]*t2[h2][..., None]
            rc[h2] = shade_metal(P2, rd[h2], normal(P2))
        refl = 0.30*fade[..., None]*(sm(1.2, 0.0, t2)[..., None] if True else 1)
        # soft contact shadow under the flange
        sh = 1-0.55*sm(1.35, 0.55, r)*sm(-0.2, 0.6, 1.0-np.abs(r-0.7))
        base = INK[None]*(sh[..., None])
        c = base*(1-refl) + rc*refl
        # a faint cool sheen on the bench, centred under the part, fading out long before the frame edge
        c += (0.035*sm(2.2, 0.2, r))[..., None]*np.array([0.10, 0.17, 0.42])
        col[floor] = INK + (c-INK)*fade[..., None]
    # tone map (gentle filmic) and gamma
    return col
def tm(c):
    c = np.clip(c, 0, None)
    # gentle filmic shoulder that leaves the page ink exactly where it is
    k = INK/(1+0.35*INK)*1.35
    return np.clip(c/(1+0.35*c)*1.35 - k + INK, 0, 1)

col = tm(render())
img8 = (col*255).round()
if SS > 1:
    img8 = img8.reshape(FH, SS, FW, SS, 3).mean((1, 3))
T = img8/255.0
ink = INK
up_ = np.maximum((T-ink)/(1-ink), (ink-T)/ink).max(-1)
a = np.clip(up_, 0, 1)
a = np.where(a < 1.5/255, 0, a)
F = ink + (T-ink)/np.maximum(a, 1e-6)[..., None]
F = np.clip(F, 0, 1)
out = np.dstack([F*255, a*255]).round().astype(np.uint8)
Image.fromarray(out, 'RGBA').save(OUT)
print('wrote', OUT, FW, FH)
