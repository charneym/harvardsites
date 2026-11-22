#!/usr/bin/env python3
"""FocalCool hero (HOME_BRIEF update 2c: a crafted render of the firm's own product).
The distal end of the Khione insulative guiding catheter (NIH SBIR R44NS095573; King et al., Interv Neuroradiol 2026:
"an insulated catheter that allows for consistent infusion of chilled saline directly to the brain"), shown as an
engineering cutaway: a satin polymer outer jacket, a stainless steel braid, a white insulative layer, a smooth inner
liner and the open lumen that carries the chilled saline (lit ice-blue from inside), with a platinum marker band and a
soft atraumatic tip. Layer thicknesses are illustrative, not to scale. Numpy sphere tracing in a dark studio lit with
the logo's indigo (#27166f) and a cool ice key; saved with ALPHA (DJ/DP), the proximal shaft fading out along its length.
Usage: python3 render.py W H out.png [SS] [procs]"""
import sys, numpy as np
from multiprocessing import Pool
from PIL import Image

W = int(sys.argv[1]) if len(sys.argv) > 1 else 500
H = int(sys.argv[2]) if len(sys.argv) > 2 else 560
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = float(sys.argv[4]) if len(sys.argv) > 4 else 1.0
NP = int(sys.argv[5]) if len(sys.argv) > 5 else 4
FW, FH = W, H; W, H = int(W * SS), int(H * SS)

def nrm(v): return v / (np.linalg.norm(v, axis=-1, keepdims=True) + 1e-12)

# ---------- centreline: a guide-catheter curve in a plane, then tilted toward the camera ----------
def bez(P, n):
    P = np.array(P, float); out = []
    for tt in np.linspace(0, 1, n):
        Q = P.copy()
        while len(Q) > 1: Q = Q[:-1] * (1 - tt) + Q[1:] * tt
        out.append(Q[0])
    return np.array(out)
C2 = np.concatenate([bez([(1.3, -3.7), (1.5, -1.7), (1.35, -0.3), (0.6, 0.8)], 70)[:-1],
                     bez([(0.6, 0.8), (-0.1, 1.75), (-1.35, 2.1), (-1.95, 1.2)], 70)])
YAW = np.radians(-30); TILT = np.radians(18)
cy, sy = np.cos(YAW), np.sin(YAW); ct, st = np.cos(TILT), np.sin(TILT)
RY = np.array([[cy, 0, sy], [0, 1, 0], [-sy, 0, cy]]); RX = np.array([[1, 0, 0], [0, ct, -st], [0, st, ct]])
ROT = RX @ RY
PTS = np.c_[C2, np.zeros(len(C2))] @ ROT.T
PTS = PTS - np.array([0.0, 0.0, 0.0])
A, B = PTS[:-1], PTS[1:]
SEG = B - A; SL = np.linalg.norm(SEG, axis=1); TAN = SEG / SL[:, None]
S0 = np.r_[0, np.cumsum(SL)[:-1]]; LEN = SL.sum()
PN = nrm(np.array([0.25, 0.35, -1.0]))       # toward the camera (and a little up-right, to open the cut to the key light)
BIN = nrm(PN[None] - (TAN @ PN)[:, None] * TAN)   # "toward the viewer" axis per segment
NOR = np.cross(TAN, BIN)

R_J, R_B, R_I, R_L, R_U = 0.40, 0.352, 0.338, 0.235, 0.205   # jacket, braid, insulation, liner, lumen radii
TIP = LEN - 0.02
SA, SB = LEN * 0.50, LEN * 0.83             # the cutaway window
STEP = 0.36

def local(p):
    pa = p[:, None, :] - A[None]
    h = np.clip((pa * SEG[None]).sum(-1) / (SL * SL)[None], 0, 1)
    rad = pa - SEG[None] * h[..., None]
    dd = np.linalg.norm(rad, axis=-1)
    i = dd.argmin(1); n = np.arange(len(p))
    r = rad[n, i]; s = S0[i] + h[n, i] * SL[i]
    u = (r * NOR[i]).sum(1); v = (r * BIN[i]).sum(1)
    return s, np.hypot(u, v), u, v, dd[n, i]

def ann(rho, ri, ro):  # annulus distance in the radial direction
    return np.maximum(rho - ro, ri - rho)

def scene(p):
    s, rho, u, v, _ = local(p)
    se = np.maximum(s - TIP, -s - 1.0)                    # length cap at the tip
    tipk = np.clip((s - (TIP - 0.55)) / 0.55, 0, 1)        # the soft tip tapers a little
    rj = R_J - 0.035 * tipk ** 2
    def cut(k):  # the stepped cutaway: the layer is removed on the viewer's side over [SA + k*STEP, SB]
        slab = np.maximum(SA + k * STEP - s, s - SB)
        return np.maximum(slab, -v + 0.0)                  # v > 0 is the viewer's half
    jacket = np.maximum(np.maximum(ann(rho, R_B + 0.012, rj), se), -cut(0))
    # braid: two counter-wound helices of 16 flat wires
    th = np.arctan2(v, u); pitch = 0.52; nw = 12
    w = np.zeros_like(s) + 1e9
    for sg in (1, -1):
        ph = (th - sg * 2 * np.pi * s / pitch) * nw / (2 * np.pi)
        dth = np.abs(ph - np.round(ph)) * (2 * np.pi / nw) * R_B * 0.5
        w = np.minimum(w, np.sqrt((rho - R_B) ** 2 + dth ** 2) - 0.013)
    braid = np.maximum(np.maximum(w, se + 0.5), -cut(0.0) - 0.0) if False else np.maximum(w, np.maximum(se + 0.45, -s - 1.0))
    braid = np.maximum(braid, -np.maximum(np.maximum(SA + 1.0 * STEP - s, s - SB), -v))
    insul = np.maximum(np.maximum(ann(rho, R_L, R_I), se + 0.002), -cut(2.0))
    liner = np.maximum(np.maximum(ann(rho, R_U, R_L), se + 0.004), -cut(3.0))
    # platinum marker band under the jacket near the tip, exposed as a ring proud of the surface
    band = np.maximum(ann(rho, R_J - 0.06, R_J + 0.006), np.abs(s - (TIP - 0.75)) - 0.07)
    return np.stack([jacket, braid, insul, liner, band], 1)

def sdf(p, want=False):
    D = scene(p); k = D.argmin(1); d = D[np.arange(len(p)), k]
    if want: return d, k
    return d

CAM = np.array([0.0, 0.0, -11.0]); TGT = np.array([0.0, -0.15, 0.0]); FOV = 36.0
fw = nrm(TGT - CAM); rt = nrm(np.cross(np.array([0, 1.0, 0]), fw)); up = np.cross(fw, rt)
TH = np.tan(np.radians(FOV / 2)); BR = 4.3
LK = nrm(np.array([-0.5, 0.75, -0.45]))

def env(r):
    y = r[:, 1]
    base = np.array([0.05, 0.05, 0.10])[None] * (0.35 + 1.4 * np.clip(y * .5 + .5, 0, 1) ** 2)[:, None]
    sb = np.clip(r @ LK, 0, 1); sb = np.clip((sb - 0.84) / 0.09, 0, 1) * 3.0 + sb ** 6 * 0.5
    stp = np.clip(r @ nrm(np.array([0.95, 0.15, -0.2])), 0, 1); stp = np.clip((stp - 0.9) / 0.06, 0, 1) * 1.5
    ind = np.clip(r @ nrm(np.array([0.6, -0.2, 0.75])), 0, 1) ** 6 * 1.1
    ice = np.clip(r @ nrm(np.array([-0.8, -0.3, 0.4])), 0, 1) ** 8 * 0.7
    return (base + sb[:, None] * np.array([0.93, 0.97, 1.0]) + stp[:, None] * np.array([0.85, 0.92, 1.0])
            + ind[:, None] * np.array([0.30, 0.20, 0.95]) + ice[:, None] * np.array([0.45, 0.8, 1.0]))

def march(O, Dd, t, tmax, steps=260, eps=4e-4):
    hit = np.zeros(len(Dd), bool); act = np.where(t < tmax)[0]
    for _ in range(steps):
        if len(act) == 0: break
        d = sdf(O + Dd[act] * t[act, None]); h = d < eps
        hit[act[h]] = True
        t[act] += np.maximum(d, eps) * 0.6
        act = act[(~h) & (t[act] < tmax[act])]
    return t, hit

def render_rows(rows):
    r0, r1 = rows
    ys, xs = np.mgrid[r0:r1, 0:W]
    uu = ((xs + .5) / W * 2 - 1) * TH * (W / H); vv = (1 - (ys + .5) / H * 2) * TH
    D = nrm(uu[..., None] * rt + vv[..., None] * up + fw).reshape(-1, 3); n = len(D)
    b = (CAM[None] * D).sum(1); c = (CAM ** 2).sum() - BR * BR; disc = b * b - c
    t = np.where(disc > 0, -b - np.sqrt(np.maximum(disc, 0)), 1e9); tmax = np.where(disc > 0, -b + np.sqrt(np.maximum(disc, 0)), 0)
    T, hit = march(CAM, D, t.copy(), tmax)
    img = np.zeros((n, 4)); hi = np.where(hit)[0]
    if len(hi) == 0: return img.reshape(r1 - r0, W, 4)
    P = CAM + D[hi] * T[hi, None]; e = 5e-4
    Nn = nrm(np.stack([sdf(P + [e, 0, 0]) - sdf(P - [e, 0, 0]), sdf(P + [0, e, 0]) - sdf(P - [0, e, 0]), sdf(P + [0, 0, e]) - sdf(P - [0, 0, e])], 1))
    _, k = sdf(P, want=True); s, rho, u, v, _ = local(P)
    ao = np.zeros(len(P))
    for i, hg in enumerate([.01, .03, .06, .11, .2]):
        ao += (hg - np.minimum(sdf(P + Nn * hg), hg)) / hg * (0.75 ** i)
    ao = np.clip(1 - ao / 2.2, 0, 1)
    sh = np.ones(len(P)); ts = np.full(len(P), .01); act = np.arange(len(P))
    for _ in range(48):
        if len(act) == 0: break
        d = sdf(P[act] + Nn[act] * 2e-3 + LK * ts[act, None])
        sh[act] = np.minimum(sh[act], np.clip(10 * d / ts[act], 0, 1))
        ts[act] += np.clip(d, .006, .2)
        act = act[(sh[act] > .02) & (ts[act] < 4.0)]
    sh = sh * sh * (3 - 2 * sh)
    V = -D[hi]; R = nrm(2 * (Nn * V).sum(1, keepdims=True) * Nn - V)
    E = env(R); Hh = nrm(LK + V)
    ndl = np.clip(Nn @ LK, 0, 1); fres = (1 - np.clip((Nn * V).sum(1), 0, 1)) ** 5
    rimv = np.clip(Nn @ nrm(np.array([0.85, 0.2, 0.45])), 0, 1)
    fill = np.clip(Nn @ nrm(np.array([0.7, 0.1, -0.7])), 0, 1)
    def diel(alb, gloss, sp, fr, sss=0.0):
        a = np.array(alb)[None]
        c = a * (ndl * sh * 1.9 + 0.08 + 0.4 * fill + 0.12 * np.clip(Nn[:, 1], 0, 1) + sss)[:, None]
        c += a * (rimv ** 2 * 0.55)[:, None] * np.array([0.5, 0.42, 1.0])
        c += (np.clip((Nn * Hh).sum(1), 0, 1) ** gloss * sp * sh)[:, None]
        c += E * (fr + (1 - fr) * fres)[:, None] * 0.5
        return c
    def metal(tint, rough):
        tt = np.array(tint)[None]
        c = E * (tt + (1 - tt) * fres[:, None])
        c += tt * (np.clip((Nn * Hh).sum(1), 0, 1) ** rough * 1.7 * sh)[:, None]
        c += tt * (ndl * sh * 0.45 + 0.1 + 0.3 * fill)[:, None]
        return c
    col = np.zeros((len(P), 3))
    # jacket: a satin indigo polymer with a faint extrusion grain along the length
    gr = 0.96 + 0.04 * np.sin(np.arctan2(v, u) * 90)
    m = k == 0; col[m] = (diel([0.04, 0.04, 0.1], 70, 0.8, 0.045) * gr[:, None])[m]
    m = k == 1; col[m] = metal([0.82, 0.84, 0.88], 70)[m]
    # insulation: a matte white closed-cell layer with a fine speckle
    rng = np.random.default_rng(r0)
    sp = 0.93 + 0.07 * np.sin(s * 170 + u * 230) * np.sin(v * 210 - s * 90)
    m = k == 2; col[m] = (diel([0.78, 0.82, 0.86], 12, 0.08, 0.02) * sp[:, None])[m]
    # liner: smooth, faintly translucent; on its inner face it glows ice-blue with the chilled saline
    inner = (rho < R_U + 0.01).astype(float)
    lc = diel([0.42, 0.55, 0.66], 140, 1.0, 0.08)
    glow = np.array([0.35, 0.72, 1.0])[None] * (0.55 + 0.45 * np.clip(-Nn @ LK, 0, 1))[:, None]
    m = k == 3; col[m] = (lc * (1 - 0.6 * inner[:, None]) + glow * inner[:, None] * 0.9)[m]
    m = k == 4; col[m] = metal([0.88, 0.88, 0.9], 120)[m]
    col *= (0.3 + 0.7 * ao)[:, None]
    col = col / (1 + col * 0.35) * 1.18
    col = np.clip(col, 0, 1) ** (1 / 1.1)
    col = np.clip(col + (rng.random((len(hi), 1)) - .5) * .01, 0, 1)
    img[hi, :3] = col
    # the proximal shaft eases out along its length (alpha), so no hard end shows
    fade = np.clip((s - 0.0) / (LEN * 0.32), 0, 1); fade = fade * fade * (3 - 2 * fade)
    img[hi, 3] = fade
    return img.reshape(r1 - r0, W, 4)

if __name__ == '__main__':
    band_ = max(4, H // (NP * 10))
    jobs = [(r, min(H, r + band_)) for r in range(0, H, band_)]
    with Pool(NP) as pool: parts = pool.map(render_rows, jobs)
    rgba = np.concatenate(parts, 0)
    im = Image.fromarray((np.clip(rgba, 0, 1) * 255).astype(np.uint8), 'RGBA')
    if SS != 1: im = im.resize((FW, FH), Image.LANCZOS)
    im.save(OUT); print('wrote', OUT, im.size)
