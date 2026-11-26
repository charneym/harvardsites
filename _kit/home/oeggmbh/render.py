#!/usr/bin/env python3
"""OEG GmbH hero (HOME_BRIEF update 2c: a crafted render of the firm's real measuring principle). One sessile drop of
water resting on a polished silicon wafer, the measurement OEG's SURFTENS contact-angle instruments make (oeggmbh.com >
Industrie und Anwendungen > Messgeräte für Kontaktwinkel und Oberflächenspannung; SURFTENS WH 300 / HL for wafers).
Seen almost from the side, as the SURFTENS camera sees it, slightly from above so the wafer reads as a mirror plane with
faint scribe lines. Analytic ray tracing in numpy: a spherical-cap drop (contact angle 78 degrees), water n=1.333 with
Fresnel reflection, refraction and TIR; the wafer is a polished silicon mirror (reflects the studio and the drop). The
plane fades out radially over a long distance, so no edge shows (DJ/DP), and the result is saved with REAL alpha over the
page ink. Prints the projected contact points and tangent for the live measurement overlay in field.js.
Usage: python3 render.py W H out.png [SS]"""
import sys, math, json, numpy as np
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 640
H = int(sys.argv[2]) if len(sys.argv) > 2 else 520
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 1
FW, FH = W, H; W, H = W*SS, H*SS
INK = np.array([20, 20, 26])/255.0          # page ink (#14141a)
NW = 1.333
TH = math.radians(78)                        # contact angle
A = 0.5                                      # base radius of the drop
RS = A/math.sin(TH); CYS = -RS*math.cos(TH)  # sphere radius, centre height
CEN = np.array([0, CYS, 0])
def nrm(v): return v/np.linalg.norm(v, axis=-1, keepdims=True)
def sm(a, b, x): x = np.clip((x-a)/(b-a), 0, 1); return x*x*(3-2*x)

PITCH = math.radians(-17)
def rot(v):
    cp, sp = math.cos(PITCH), math.sin(PITCH); x, y, z = v
    return np.array([x, y*cp - z*sp, y*sp + z*cp])
F = rot((0, 0, -1.0)); RT = rot((1.0, 0, 0)); UP = rot((0, 1.0, 0))
SC = 0.66; CY0 = 0.14

def env(d):
    """a dark studio on the page ink: a broad soft backdrop light behind the drop (seen through the water, inverted, as
    in a real drop photograph), a soft box above towards the camera, cool and warm strip lights left and right, and a
    thin strip of the brand red low on the left."""
    x, y, z = d[..., 0], d[..., 1], d[..., 2]
    base = INK[None]*(0.9+0.4*sm(-0.3, 0.6, y)[..., None])
    back = sm(0.1, -0.7, z)*sm(0.34, 0.04, np.abs(y-0.16))*sm(0.85, 0.15, np.abs(x))
    top = sm(0.55, 0.85, y)*sm(0.8, 0.3, np.abs(x+0.2))*sm(-0.3, 0.3, z)
    win = sm(0.17, 0.12, np.abs(x+0.42))*sm(0.13, 0.08, np.abs(y-0.74))*sm(0.1, 0.4, z)
    lft = sm(-0.5, -0.8, x)*sm(0.5, 0.15, np.abs(y-0.2))
    rgt = sm(0.5, 0.8, x)*sm(0.5, 0.15, np.abs(y-0.25))
    red = sm(-0.3, -0.7, x)*sm(0.16, 0.05, np.abs(y-0.02))
    c = base + back[..., None]*np.array([0.66, 0.72, 0.84])*1.7 + top[..., None]*np.array([0.95, 0.97, 1.0])*1.2 + win[..., None]*np.array([1.0, 1.0, 1.0])*6.0 \
        + lft[..., None]*np.array([0.62, 0.78, 1.0])*2.2 + rgt[..., None]*np.array([1.0, 0.96, 0.9])*2.4 \
        + red[..., None]*np.array([0.95, 0.08, 0.2])*1.4
    return c

def fres(cosi, n1, n2):
    r0 = ((n1-n2)/(n1+n2))**2
    return r0+(1-r0)*(1-cosi)**5

def refr(d, n, eta):
    cosi = -(d*n).sum(-1)
    k = 1-eta**2*(1-cosi**2)
    tir = k < 0
    t = eta*d + (eta*cosi-np.sqrt(np.maximum(k, 0)))[..., None]*n
    return nrm(t), tir

def sph(o, d):
    """nearest t>eps on the cap (sphere part above y=0), outer hit"""
    oc = o-CEN; b = (oc*d).sum(-1); c = (oc*oc).sum(-1)-RS*RS; disc = b*b-c
    sq = np.sqrt(np.maximum(disc, 0)); t1 = -b-sq; t2 = -b+sq
    best = np.full(len(o), np.inf)
    for t in (t2, t1):
        p = o+d*t[:, None]
        ok = (disc > 0) & (t > 1e-5) & (p[:, 1] > 0)
        best = np.where(ok & (t < best), t, best)
    return best

def plane(o, d):
    with np.errstate(divide='ignore', invalid='ignore'):
        t = -o[:, 1]/d[:, 1]
    return np.where((t > 1e-5) & np.isfinite(t), t, np.inf)

def wafer_shade(p):
    """polished silicon: neutral slightly cool mirror; faint scribe lines on a 0.34 grid"""
    gx = np.abs(((p[:, 0]+0.13) % 0.26)-0.13); gz = np.abs(((p[:, 2]+0.13) % 0.26)-0.13)
    line = np.maximum(sm(0.004, 0.0, gx), sm(0.004, 0.0, gz))*0.6
    return line

def outside(o, d, depth):
    """radiance of rays in air"""
    n_ = len(o); col = np.zeros((n_, 3))
    if n_ == 0: return col
    ts = sph(o, d); tp = plane(o, d)
    hs = ts < tp; hp = (tp < ts) & np.isfinite(tp); miss = ~hs & ~hp
    col[miss] = env(d[miss])
    if depth <= 0:
        col[hs | hp] = INK; return col
    if hp.any():
        oo, dd = o[hp], d[hp]; p = oo+dd*tp[hp][:, None]
        nrmv = np.tile(np.array([0, 1.0, 0]), (len(p), 1))
        cosi = np.clip(-dd[:, 1], 0, 1)
        R = 0.36+0.64*(1-cosi)**5
        rd = dd.copy(); rd[:, 1] = -rd[:, 1]
        ln = wafer_shade(p)
        r = outside(p+nrmv*1e-5, rd, depth-1)
        tint = np.array([0.93, 0.96, 1.0])
        c = (R*(1-0.55*ln))[:, None]*r*tint[None] + (1-R)[:, None]*INK[None]*0.4
        col[hp] = c
    if hs.any():
        oo, dd = o[hs], d[hs]; p = oo+dd*ts[hs][:, None]; nv = nrm(p-CEN)
        cosi = np.clip(-(dd*nv).sum(-1), 0, 1)
        R = fres(cosi, 1.0, NW)
        rd = nrm(dd+2*cosi[:, None]*nv)
        c = R[:, None]*outside(p+nv*1e-5, rd, depth-1)
        td, _ = refr(dd, nv, 1/NW)
        c = c + (1-R)[:, None]*inside(p-nv*1e-5, td, depth-1)
        col[hs] = c
    return col

def inside(o, d, depth):
    n_ = len(o); col = np.zeros((n_, 3))
    if n_ == 0: return col
    if depth <= 0:
        col[:] = INK; return col
    oc = o-CEN; b = (oc*d).sum(-1); c = (oc*oc).sum(-1)-RS*RS; disc = b*b-c
    ts = -b+np.sqrt(np.maximum(disc, 0)); tp = plane(o, d)
    hp = tp < ts; hs = ~hp
    if hp.any():   # water on silicon: mirror at the base
        oo, dd = o[hp], d[hp]; p = oo+dd*tp[hp][:, None]
        rd = dd.copy(); rd[:, 1] = -rd[:, 1]
        cosi = np.clip(-dd[:, 1], 0, 1)
        R = 0.25+0.75*(1-cosi)**5
        col[hp] = R[:, None]*inside(p+np.array([0, 1e-5, 0]), rd, depth-1)*np.array([0.93, 0.96, 1.0])[None]
    if hs.any():
        oo, dd = o[hs], d[hs]; p = oo+dd*ts[hs][:, None]; nv = nrm(p-CEN)
        od, tir = refr(dd, -nv, NW)
        cos2 = np.clip((dd*nv).sum(-1), 0, 1)
        sin_t = NW*np.sqrt(np.maximum(0, 1-cos2**2))
        cos_t = np.sqrt(np.maximum(0, 1-sin_t**2))
        Rin = np.where(tir, 1.0, fres(cos_t, 1.0, NW))
        rd = nrm(dd-2*(dd*nv).sum(-1)[:, None]*nv)
        c = Rin[:, None]*inside(p-nv*1e-5, rd, depth-1)
        out_ok = ~tir
        if out_ok.any():
            c[out_ok] += (1-Rin[out_ok])[:, None]*outside(p[out_ok]+nv[out_ok]*1e-5, od[out_ok], depth-1)
        col[hs] = c
    return col

ys, xs = np.mgrid[0:H, 0:W]
u = ((xs+.5)/W*2-1)*SC*W/H; v = (1-(ys+.5)/H*2)*SC
DC = 4.2                                       # perspective camera, DC from the target point
TGT = np.array([0, CY0, 0]); CAM = TGT-DC*F
O = np.repeat(CAM[None], H*W, 0)
Dd = nrm(F[None]*DC + u.reshape(-1, 1)*RT[None] + v.reshape(-1, 1)*UP[None])
col = np.zeros((H*W, 3)); CH = 400000
for i in range(0, H*W, CH):
    col[i:i+CH] = outside(O[i:i+CH], Dd[i:i+CH], 6)
# coverage: what the eye sees of drop + wafer; the wafer fades radially from the drop over a long distance
ts = sph(O, Dd); tp = plane(O, Dd)
hitp = O+Dd*np.where(np.isfinite(tp), tp, 0)[:, None]
r = np.sqrt(hitp[:, 0]**2+(hitp[:, 2]*1.0)**2)
fade = np.where(np.isfinite(tp), sm(1.25, 0.3, r)**1.2, 0)
cov = np.where(np.isfinite(ts), 1.0, fade)
col = col.reshape(H, W, 3); cov = cov.reshape(H, W)
col = 1-np.exp(-col*1.3); ink = 1-np.exp(-INK*1.3)
dif = col-ink[None, None]
a = np.maximum(np.max(np.where(dif > 0, dif/(1-ink)[None, None], 0), -1), np.max(np.where(dif < 0, -dif/ink[None, None], 0), -1))
a = np.clip(a, 0, 1)
C = ink[None, None]+dif/np.maximum(a, 1e-4)[..., None]
Al = a*cov
# safety feather in image space: nothing reaches an image edge (DJ)
fx = sm(0, .16, (xs+.5)/W)*sm(1, .84, (xs+.5)/W); fy = sm(0, .14, (ys+.5)/H)*sm(1, .86, (ys+.5)/H)
Al = Al*fx*fy
img = np.concatenate([np.clip(C, 0, 1), Al[..., None]], -1)
im = Image.fromarray((img*255+.5).astype(np.uint8), 'RGBA')
if SS != 1: im = im.resize((FW, FH), Image.LANCZOS)
im.save(OUT)

def proj(p):
    p = np.asarray(p, float)-CAM; dz = p@F; uu = (p@RT)*DC/dz; vv = (p@UP)*DC/dz
    return [round(float(uu/(SC*FW/FH)*.5+.5), 4), round(float((1-vv/SC)*.5), 4)]
L = np.array([-A, 0, 0]); Rr = np.array([A, 0, 0])
tdir = np.array([-math.cos(TH), math.sin(TH), 0])
info = {"CL": proj(L), "CR": proj(Rr), "TR": proj(Rr+tdir*0.42), "TL": proj(L+np.array([math.cos(TH), math.sin(TH), 0])*0.42),
        "BL": proj(L-np.array([0.5, 0, 0])), "BR": proj(Rr+np.array([0.5, 0, 0])), "top": proj(np.array([0, CYS+RS, 0])), "aspect": FW/FH}
print(json.dumps(info))
