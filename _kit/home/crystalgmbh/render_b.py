#!/usr/bin/env python3
"""CRYSTAL GmbH hero (HOME_BRIEF update 2c: a crafted render of the firm's real product). One polished equilateral
optical prism, as CRYSTAL GmbH manufactures them (crystal-gmbh.com > Products > Optical Components: windows, PRISMS,
lenses, mirrors, from crystals for the IR, visible and UV), seen in three-quarter view with its triangular end face to the
viewer. Analytic ray tracing of a convex polyhedron in numpy: Fresnel reflection, refraction and total internal reflection
over a studio environment (soft top box, two strip lights) on the page ink. Saved with REAL alpha relative to the page ink
(no ground of its own, DJ/DP). The light beam and its spectrum are drawn live by field.js on the beam geometry printed here.
Usage: python3 render.py W H out.png [SS]
TOP-FIX B: render_b.py 1000 1000 out.png 2, crop 140..880 x 140..800, then _kit/tools/topfix_shadow.py (no beam, no glow)."""
import sys, math, json, numpy as np
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 600
H = int(sys.argv[2]) if len(sys.argv) > 2 else 600
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 1
FW, FH = W, H; W, H = W*SS, H*SS
INK = np.array([3, 27, 58])/255.0          # page ink (#031b3a)
N_GLASS = 1.434                            # CaF2, visible
def nrm(v): return v/np.linalg.norm(v, axis=-1, keepdims=True)
def sm(a, b, x): x = np.clip((x-a)/(b-a), 0, 1); return x*x*(3-2*x)

# the prism: equilateral cross-section in x-y (apex up), extruded along z
S = 1.0; HT = math.sqrt(3)/2*S; IR = HT/3; L = 0.78
PL = [((0, -1, 0), IR), ((-math.sqrt(3)/2, .5, 0), IR), ((math.sqrt(3)/2, .5, 0), IR), ((0, 0, 1), L/2), ((0, 0, -1), L/2)]
PN = np.array([p[0] for p in PL], float); PD = np.array([p[1] for p in PL], float)

# orthographic camera: a little to the right of the end face and above it
YAW, PITCH = math.radians(-24), math.radians(-13)
def rot(v):
    cy, sy, cp, sp = math.cos(YAW), math.sin(YAW), math.cos(PITCH), math.sin(PITCH)
    x, y, z = v
    y, z = y*cp - z*sp, y*sp + z*cp        # pitch about x
    x, z = x*cy + z*sy, -x*sy + z*cy       # yaw about y
    return np.array([x, y, z])
F = rot((0, 0, -1.0)); RT = rot((1.0, 0, 0)); UP = rot((0, 1.0, 0))
SC = 0.92                                   # half-height of the frame in world units
CY0 = 0.02

def env(d):
    """TOP-FIX B (2026-11-27): a neutral studio. Seen straight through, the glass shows the page ink (so it stays
    transparent); the lights are neutral: a soft overhead box, the KEY strip on the headline side (page left; this render is
    not mirrored), a low frontal fill, a dim rim strip on the far (right) side. No blue floor, horizon or back light."""
    y = d[..., 1]; x = d[..., 0]; z = d[..., 2]
    base = INK[None]*(0.8+0.6*sm(-0.5, 0.7, y)[..., None])
    top = sm(0.25, 0.6, y)*sm(0.95, 0.55, np.abs(x))
    key = sm(-0.45, -0.75, x)*sm(0.65, 0.25, np.abs(y-0.05))
    rim = sm(0.5, 0.8, x)*sm(0.55, 0.2, np.abs(y-0.1))
    fw = (d*F).sum(-1); bk = sm(0.80, 0.99, fw)*(0.6+0.4*sm(-0.3, 0.3, y))
    pan = sm(0.55, 0.75, z)*sm(0.5, 0.2, np.abs(y-0.25))*sm(0.6, 0.3, np.abs(x+0.1))
    c = base + top[..., None]*np.array([0.95, 0.95, 0.94])*1.8 + key[..., None]*np.array([1.0, .99, .97])*2.2 \
        + rim[..., None]*np.full(3, 0.55) + bk[..., None]*np.full(3, 0.42) + pan[..., None]*np.full(3, 0.70)
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

def trace(o, d):
    nd = d@PN.T; no = o@PN.T
    with np.errstate(divide='ignore', invalid='ignore'):
        t = (PD[None]-no)/nd
    ent = nd < 0
    tn = np.where(ent, t, -1e9).max(1); tf = np.where(~ent, t, 1e9).min(1)
    fi = np.where(ent, t, -1e9).argmax(1)
    hit = (tn < tf) & (tf > 0)
    col = env(d)
    if not hit.any(): return col, hit
    o, d, tn, fi = o[hit], d[hit], tn[hit], fi[hit]
    p = o+d*tn[:, None]; n = PN[fi]
    # polished bevels: within BW of an edge the normal rolls toward the neighbouring face, so edges catch the lights
    BW = 0.022
    dd = PD[None]-p@PN.T; dd[np.arange(len(p)), fi] = 9
    k2 = dd.argmin(1); e = dd[np.arange(len(p)), k2]
    rb = sm(BW, 0.0, e)[:, None]*0.5
    n = nrm(n*(1-rb)+PN[k2]*rb)
    cosi = np.clip(-(d*n).sum(-1), 0, 1)
    R = fres(cosi, 1.0, N_GLASS)
    rd = nrm(d+2*cosi[:, None]*n)
    c = R[:, None]*env(rd)
    td, _ = refr(d, n, 1/N_GLASS)
    w = (1-R)
    q, qd = p+td*1e-5, td
    absorb = np.array([0.965, 0.965, 0.965])       # TOP-FIX B: neutral body
    for _ in range(6):
        nd2 = qd@PN.T; no2 = q@PN.T
        with np.errstate(divide='ignore', invalid='ignore'):
            t2 = (PD[None]-no2)/nd2
        t2 = np.where(nd2 > 1e-9, t2, 1e9)
        k = t2.argmin(1); tt = t2[np.arange(len(q)), k]
        q = q+qd*tt[:, None]; n2 = PN[k]
        w3 = w[:, None]*absorb[None]**(tt[:, None]*2.2)
        od, tir = refr(qd, -n2, N_GLASS)
        cos2 = np.clip((qd*n2).sum(-1), 0, 1)
        Rin = np.where(tir, 1.0, fres(np.sqrt(np.maximum(0, 1-(N_GLASS**2)*(1-cos2**2))), 1.0, N_GLASS))
        c = c + w3*((1-Rin)[:, None]*env(od))
        qd = nrm(qd-2*(qd*n2).sum(-1)[:, None]*n2)
        w = (w3*Rin[:, None]).mean(-1)
        q = q+qd*1e-5
    c = c + w[:, None]*INK[None]
    out = col.copy(); out[hit] = c
    return out, hit

ys, xs = np.mgrid[0:H, 0:W]
u = ((xs+.5)/W*2-1)*SC*W/H; v = (1-(ys+.5)/H*2)*SC + CY0
CAM = -5.2*F + np.array([0, CY0, 0])
O = np.repeat(CAM[None], H*W, 0)
D = nrm(F[None]*5.2 + u.reshape(-1, 1)*RT[None] + (v.reshape(-1, 1)-CY0)*UP[None])
col, hit = trace(O, D)
col = col.reshape(H, W, 3); cov = hit.reshape(H, W).astype(float)
# filmic tone map, then express the glass as real alpha over the page ink
col = 1-np.exp(-col*1.25); ink = 1-np.exp(-INK*1.25)
dif = col-ink[None, None]
a = np.maximum(np.max(np.where(dif > 0, dif/(1-ink)[None, None], 0), -1), np.max(np.where(dif < 0, -dif/ink[None, None], 0), -1))
a = np.clip(a, 0, 1)
C = ink[None, None]+dif/np.maximum(a, 1e-4)[..., None]
A = a*cov
img = np.concatenate([np.clip(C, 0, 1), A[..., None]], -1)
im = Image.fromarray((img*255+.5).astype(np.uint8), 'RGBA')
if SS != 1: im = im.resize((FW, FH), Image.LANCZOS)
im.save(OUT)

# beam geometry in the z=0 plane, projected to normalised image coordinates (x right, y down)
def proj(p):
    p = np.asarray(p, float)-CAM; dz = p@F; uu = (p@RT)*5.2/dz; vv = (p@UP)*5.2/dz+CY0
    return [round(float(uu/(SC*FW/FH)*.5+.5), 4), round(float((1-(vv-CY0)/SC)*.5), 4)]
nl = np.array([-math.sqrt(3)/2, .5, 0]); nr = np.array([math.sqrt(3)/2, .5, 0])
# entry point on the left face, 40% of the way up from the base corner
BL = np.array([-S/2, -IR, 0]); TOPV = np.array([0, 2*IR, 0]); BR = np.array([S/2, -IR, 0])
P1 = BL+(TOPV-BL)*0.42
inc = 48*math.pi/180                      # angle of incidence
tang = nrm(TOPV-BL)
din = nrm(-nl*math.cos(inc)+tang*math.sin(inc))
def refr1(d, n, eta):
    cosi = -np.dot(d, n); k = 1-eta**2*(1-cosi**2); return nrm(eta*d+(eta*cosi-math.sqrt(k))*n)
dins = refr1(din, nl, 1/1.47)
# intersect the inner ray with the right face
t = (IR-np.dot(P1, nr))/np.dot(dins, nr); P2 = P1+dins*t
outs = []
for nn in [1.445, 1.455, 1.465, 1.475, 1.485, 1.495, 1.505]:   # red .. violet (exaggerated dispersion for legibility)
    do = refr1(dins, -nr, nn)
    outs.append(proj(P2+do*1.0))
info = {"P0": proj(P1-din*1.0), "P1": proj(P1), "P2": proj(P2), "OUT": outs, "aspect": FW/FH,
        "apex": proj(TOPV+np.array([0, 0, L/2])), "base": proj(np.array([0, -IR, 0]))}
print(json.dumps(info))
