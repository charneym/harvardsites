#!/usr/bin/env python3
"""Intrinsic LifeSciences hero (HOME_BRIEF update 2c: a crafted render of the firm's real product). A 96-well ELISA
microplate, SBS footprint (127.8 x 85.5 mm, 9 mm well pitch), in clear polystyrene, mid-assay: the TMB substrate
developing blue in the wells. Intrinsic's hepcidin kits (Hepcidin IDx(TM), Murine/Primate Compete(TM)) are competitive
ELISAs, so the standards in columns 1-2 run from deep blue (no hepcidin) to pale (most hepcidin), and the samples are run
in duplicate. Lit by a soft key and the logo's cyan rgb(0,176,226) as a rim. Numpy sphere tracing with a glass-like
shading model (fresnel reflection of a studio environment over the ink, liquid glowing through the clear walls); saved with
ALPHA (no ground of its own, DJ). Usage: python3 render.py W H out.png [SS] [procs]"""
import sys, numpy as np
from multiprocessing import Pool
from PIL import Image

W = int(sys.argv[1]) if len(sys.argv) > 1 else 640
H = int(sys.argv[2]) if len(sys.argv) > 2 else 420
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = float(sys.argv[4]) if len(sys.argv) > 4 else 1.0
NP = int(sys.argv[5]) if len(sys.argv) > 5 else 4
FW, FH = W, H; W, H = int(W * SS), int(H * SS)

def nrm(v): return v / np.linalg.norm(v, axis=-1, keepdims=True)
S = 1 / 40.0                                   # mm -> scene units
PX, PZ, PH = 127.76 / 2 * S, 85.48 / 2 * S, 14.35 * S   # plate half-width, half-depth, height
PITCH = 9.0 * S; WR = 3.45 * S; WD = 10.9 * S   # well pitch, radius, depth
LIQ = PH - 2.4 * S                              # liquid surface height (about 200 uL)
WALL = 0.55 * S                                 # well tube wall
X0 = -5.5 * PITCH; Z0 = -3.5 * PITCH            # A1 centre (12 x 8 grid centred)

# ---- the plate map: a competitive ELISA. intensity 0..1 of TMB blue per well [row 0..7][col 0..11]
rng = np.random.default_rng(1107)
I = np.zeros((8, 12))
std = [1.0, .86, .7, .55, .41, .29, .18, .08]   # standards, top to bottom
for r in range(8):
    I[r, 0] = I[r, 1] = std[r]
for c in range(2, 12, 2):
    for r in range(8):
        v = np.clip(rng.normal(.5, .2), .1, .95)
        I[r, c] = v; I[r, c + 1] = np.clip(v + rng.normal(0, .025), .06, 1)
I[6:, 10:] = 0.03                                # a few blank wells, top right corner of the map

def plate(p):
    x, y, z = p[:, 0], p[:, 1], p[:, 2]
    # rounded box body
    qx = np.abs(x) - (PX - .03); qy = np.abs(y - PH / 2) - (PH / 2 - .03); qz = np.abs(z) - (PZ - .03)
    body = np.sqrt(np.maximum(qx, 0) ** 2 + np.maximum(qy, 0) ** 2 + np.maximum(qz, 0) ** 2) + np.minimum(np.maximum(qx, np.maximum(qy, qz)), 0) - .03
    # nearest well (clamped domain repetition)
    ci = np.clip(np.round((x - X0) / PITCH), 0, 11); ri = np.clip(np.round((z - Z0) / PITCH), 0, 7)
    wx = X0 + ci * PITCH; wz = Z0 + ri * PITCH
    rr = np.sqrt((x - wx) ** 2 + (z - wz) ** 2)
    hole = np.maximum(rr - WR, (PH - WD) - y)                       # open cylinder from the top down to the well floor
    # a shallow recess between the wells on the deck (the wells read as tubes in a grid)
    deck = np.maximum(np.maximum(np.abs(x) - (PX - 5.2 * S), np.abs(z) - (PZ - 4.2 * S)), (PH - .9 * S) - y)
    d = np.maximum(body, -hole)
    d = np.maximum(d, -np.maximum(deck, -(rr - WR - WALL)))
    return d, rr, ci.astype(int), ri.astype(int)

def liquid(p, rr):
    y = p[:, 1]
    men = LIQ + 0.7 * S * np.clip(rr / WR, 0, 1) ** 6               # meniscus rises at the wall
    return np.maximum(rr - (WR - .002), np.maximum(y - men, (PH - WD) - y))

def sdf(p, want=False):
    d, rr, ci, ri = plate(p)
    l = liquid(p, rr)
    out = np.minimum(d, l)
    if want: return out, dict(liq=l < d, rr=rr, ci=ci, ri=ri)
    return out

YAW = np.radians(-24)
CAM = np.array([np.sin(YAW) * -4.2, 4.1, -np.cos(YAW) * 4.2]); TGT = np.array([0.08, 0.06, 0.0]); FOV = 30.0
fw = nrm(TGT - CAM); rt = nrm(np.cross(np.array([0, 1.0, 0]), fw)); up = np.cross(fw, rt)
TH = np.tan(np.radians(FOV / 2))
BR = 2.0

def env(Dd):
    """a dark studio: a broad softbox overhead-left, a cyan strip to the right, a faint warm floor bounce"""
    x, y, z = Dd[:, 0], Dd[:, 1], Dd[:, 2]
    soft = np.clip((y - .55) / .3, 0, 1) * np.exp(-((x + .35) ** 2) / .18) * 1.15
    cyan = np.exp(-((x - .82) ** 2) / .012) * np.clip((y + .1) / .5, 0, 1) * 1.1
    base = .015 + .02 * np.clip(y, 0, 1)
    c = np.stack([base + soft * .95 + cyan * .0, base + soft * .97 + cyan * .69, base + soft + cyan * .89], 1)
    return c

def march(O, Dd, t, tmax, steps=220, eps=4e-4):
    hit = np.zeros(len(Dd), bool); act = np.where(t < tmax)[0]
    for s in range(steps):
        if len(act) == 0: break
        p = O[act] + Dd[act] * t[act, None]
        d = sdf(p)
        h = d < eps
        hit[act[h]] = True
        t[act] += np.maximum(d, eps) * 0.85
        keep = (~h) & (t[act] < tmax[act])
        act = act[keep]
    return t, hit

TMB_D = np.array([0.02, 0.30, 0.98]); TMB_L = np.array([0.30, 0.42, 0.50])
def tmb(v):
    v = np.clip(v[:, None] * 1.15, 0, 1) ** .8
    mid = np.array([0.38, 0.66, 0.98])
    return np.where(v < .5, TMB_L * (1 - 2 * v) + mid * 2 * v, mid * (2 - 2 * v) + TMB_D * (2 * v - 1))

def render_rows(rows):
    r0, r1 = rows
    ys, xs = np.mgrid[r0:r1, 0:W]
    u = ((xs + .5) / W * 2 - 1) * TH * (W / H); v = (1 - (ys + .5) / H * 2) * TH
    D = nrm(u[..., None] * rt + v[..., None] * up + fw).reshape(-1, 3)
    n = len(D)
    b = (CAM[None, :] * D).sum(1); c = (CAM ** 2).sum() - BR * BR; disc = b * b - c
    t = np.where(disc > 0, -b - np.sqrt(np.maximum(disc, 0)), 1e9); tmax = np.where(disc > 0, -b + np.sqrt(np.maximum(disc, 0)), 0)
    O = np.repeat(CAM[None, :], n, 0)
    T, hit = march(O, D, t.copy(), tmax)
    img = np.zeros((n, 4))
    hi = np.where(hit)[0]
    if len(hi) == 0: return img.reshape(r1 - r0, W, 4)
    P = O[hi] + D[hi] * T[hi, None]
    e = 5e-4
    Nn = nrm(np.stack([sdf(P + [e, 0, 0]) - sdf(P - [e, 0, 0]), sdf(P + [0, e, 0]) - sdf(P - [0, e, 0]), sdf(P + [0, 0, e]) - sdf(P - [0, 0, e])], 1) + 1e-9)
    _, info = sdf(P, want=True)
    liq = info['liq']; rr = info['rr']; ci = info['ci']; ri = info['ri']
    V = -D[hi]
    ao = np.zeros(len(P))
    for i, hgt in enumerate([.006, .015, .03, .06, .1]):
        ao += (hgt - np.minimum(sdf(P + Nn * hgt), hgt)) / hgt * (0.75 ** i)
    ao = np.clip(1 - ao / 2.4, 0, 1)
    Lk = nrm(np.array([-0.45, 0.85, -0.25]))
    cosv = np.clip((Nn * V).sum(1), 0, 1)
    fres = .04 + .96 * (1 - cosv) ** 5
    R = nrm(D[hi] - 2 * (D[hi] * Nn).sum(1)[:, None] * Nn)
    refl = env(R)
    wellI = I[ri, 11 - ci]                         # A1 at the far-left corner from this side
    lc = tmb(wellI)
    col = np.zeros((len(P), 3))
    # ---- clear polystyrene: mostly reflection over the dark, liquid colour glowing through the walls near each well
    pm = ~liq
    near = np.clip(1 - (rr[pm] - WR) / (WALL * 3.2), 0, 1) ** 1.5
    below = np.clip((LIQ + .01 - P[pm, 1]) / .05, 0, 1)
    inside = (rr[pm] < WR + 1e-3).astype(float)
    glow = lc[pm] * (0.42 * near * (0.5 + 0.5 * below) + 0.55 * inside * below)[:, None] * (0.35 + 0.65 * wellI[pm])[:, None]
    diff = np.clip(Nn[pm] @ Lk, 0, 1)
    body = np.array([0.085, 0.11, 0.13]) * (0.4 + 0.6 * diff)[:, None]
    col[pm] = body * ao[pm, None] + glow * ao[pm, None] + refl[pm] * (fres[pm] * 1.1 + 0.12)[:, None]
    rimd = nrm(np.array([0.85, 0.15, 0.2]))
    rim = np.clip(Nn[pm] @ rimd, 0, 1) ** 2 * (0.3 + 0.7 * (1 - cosv[pm]))
    col[pm] += rim[:, None] * np.array([0.0, 0.69, 0.886]) * 0.55
    # a broad soft sheen of the overhead softbox across the deck
    up_ = np.clip((Nn[pm, 1] - .9) / .1, 0, 1)
    sheen = np.exp(-((P[pm, 0] + .45 + .5 * P[pm, 2]) ** 2) / .5) * up_ * (1 - inside)
    col[pm] += (sheen * 0.10)[:, None] * np.array([0.8, 0.92, 1.0])
    # edge catch-lights on the rounded rim of the plate and the well lips
    lip = np.clip(1 - np.abs(rr[pm] - WR - WALL * .4) / (WALL * .9), 0, 1) * np.clip((P[pm, 1] - (PH - .9 * S - .01)) / .02, 0, 1)
    col[pm] += (lip * 0.16)[:, None] * np.array([0.75, 0.9, 1.0])
    # ---- TMB liquid: subsurface-ish glow with the soft key on the meniscus
    lm = liq
    dl = np.clip(Nn[lm] @ Lk, 0, 1)
    Hh = nrm(Lk + V[lm]); spec = np.clip((Nn[lm] * Hh).sum(1), 0, 1) ** 90
    col[lm] = lc[lm] * (0.55 + 0.45 * dl)[:, None] * (0.7 + 0.3 * ao[lm])[:, None] * 1.15 + refl[lm] * fres[lm, None] * .7 + spec[:, None] * .5
    # slight depth falloff toward the far edge so the plate sits in the ink
    depth = np.clip((P[:, 2] - (-PZ)) / (2 * PZ), 0, 1)
    col *= (1 - 0.28 * depth)[:, None]
    col = col / (1 + col * .35) * 1.2
    col = np.clip(col, 0, 1) ** (1 / 1.1)
    col = np.clip(col + (np.random.default_rng(r0).random((len(hi), 1)) - .5) * .01, 0, 1)
    img[hi, :3] = col
    img[hi, 3] = 1
    return img.reshape(r1 - r0, W, 4)

if __name__ == '__main__':
    band_ = max(4, H // (NP * 10))
    jobs = [(r, min(H, r + band_)) for r in range(0, H, band_)]
    with Pool(NP) as pool:
        parts = pool.map(render_rows, jobs)
    rgba = np.concatenate(parts, 0)
    im = Image.fromarray((np.clip(rgba, 0, 1) * 255).astype(np.uint8), 'RGBA')
    if SS != 1: im = im.resize((FW, FH), Image.LANCZOS)
    im.save(OUT)
    print('wrote', OUT, im.size)
