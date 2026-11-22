#!/usr/bin/env python3
"""Neurotargeting Systems hero (HOME_BRIEF update 2c: a crafted render of the firm's own product).
Their needle-based EEG/EMG implant for mice, as photographed on neurotargetingsystems.com/documentation and described in
Zou, Xie & Gerashchenko, MethodsX 2026: a black 2x3 multipin connector with gold sockets (ground, EEG common, EEG1, EEG2,
EMG1, EMG2) on a green circuit board, gold edge strips, thin needle electrodes that press into the skull (no drilling, no
screws), and two hook-shaped wire electrodes that hold the implant along the side of the skull / go to the neck muscles.
Numpy sphere tracing with a soft studio environment (cool key, violet rim from the logo #6a4cff, a touch of magenta
#e70064); saved with ALPHA so it has no ground of its own (DJ/DP). Usage: python3 render.py W H out.png [SS] [procs]"""
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
def rbox(p, c, b, r):
    q = np.abs(p - c) - (np.array(b) - r)
    return np.linalg.norm(np.maximum(q, 0), axis=-1) + np.minimum(q.max(-1), 0) - r
def cylY(p, c, r, h):
    q = p - c
    d = np.stack([np.hypot(q[:, 0], q[:, 2]) - r, np.abs(q[:, 1]) - h], -1)
    return np.minimum(d.max(-1), 0) + np.linalg.norm(np.maximum(d, 0), axis=-1)

# ---------- geometry (local units ~ mm; y up, -z faces the camera) ----------
SOCK = [(x, z) for z in (-0.34, 0.34) for x in (-0.74, 0.0, 0.74)]
HTOP = 2.02
NEED = [(-1.16, 0.06), (-0.40, 0.06), (0.40, 0.06), (1.16, 0.06)]
NY0, NY1 = -0.86, -2.15

def bez(P, n):
    P = np.array(P, float); t = np.linspace(0, 1, n)[:, None]
    out = []
    for tt in t[:, 0]:
        Q = P.copy()
        while len(Q) > 1: Q = Q[:-1] * (1 - tt) + Q[1:] * tt
        out.append(Q[0])
    return np.array(out)
def hook(P, n=44):
    pts = bez(P, n)
    # a tight hook at the free end: curl the last point back up
    end = pts[-1]; d = nrm(pts[-1] - pts[-2])
    side = nrm(np.cross(d, np.array([0, 0, 1.0])))
    a = np.linspace(0, np.pi * 1.05, 12)[1:]
    R = 0.2
    cen = end + side * R
    curl = cen[None, :] - side[None, :] * R * np.cos(a)[:, None] + d[None, :] * R * np.sin(a)[:, None]
    return np.concatenate([pts, curl], 0)
WIRES = [hook([(-0.78, 0.42, -0.1), (-1.25, 0.55, -0.6), (-2.1, 0.45, -0.6), (-2.55, -0.45, -0.3), (-2.4, -1.5, -0.1)]),
         hook([(0.78, -0.32, -0.1), (1.25, -0.25, -0.6), (2.15, -0.1, -0.55), (2.5, -0.95, -0.25), (2.2, -1.85, 0.0)])]
JOINTS = [np.array([-0.78, 0.42, -0.02]), np.array([0.78, -0.32, -0.02])]
WR = 0.052
SEGA = np.concatenate([w[:-1] for w in WIRES]); SEGB = np.concatenate([w[1:] for w in WIRES])

def d_wires(p):
    pa = p[:, None, :] - SEGA[None]; ba = (SEGB - SEGA)[None]
    h = np.clip((pa * ba).sum(-1) / (ba * ba).sum(-1), 0, 1)
    return np.linalg.norm(pa - ba * h[..., None], axis=-1).min(1) - WR
def d_needles(p):
    d = np.full(len(p), 1e9)
    for (x, z) in NEED:
        q = p - np.array([x, 0, z])
        y = np.clip(q[:, 1], NY1, NY0)
        t = np.clip((y - NY1) / 0.35, 0, 1)            # sharpened over the last 0.35
        r = 0.045 * (0.08 + 0.92 * np.sqrt(t))
        d = np.minimum(d, np.sqrt(q[:, 0] ** 2 + q[:, 2] ** 2 + (q[:, 1] - y) ** 2) - r)
    return d

MAT = ['black', 'gold', 'green', 'tin', 'steel']
def scene(p):
    hdr = rbox(p, np.array([0, 1.56, 0]), (1.18, 0.46, 0.72), 0.06)
    holes = np.full(len(p), 1e9); sleeve = np.full(len(p), 1e9)
    for (x, z) in SOCK:
        c = np.array([x, HTOP, z])
        holes = np.minimum(holes, cylY(p, c, 0.215, 0.32))
        tube = np.maximum(cylY(p, c + [0, -0.1, 0], 0.2, 0.13), -cylY(p, c, 0.13, 0.5))
        sleeve = np.minimum(sleeve, tube)
    black = np.maximum(hdr, -holes)
    gold = sleeve
    pcb1 = rbox(p, np.array([0, 1.03, 0.0]), (1.44, 0.07, 0.82), 0.02)
    pcb2 = rbox(p, np.array([0, 0.06, 0.12]), (1.42, 0.92, 0.075), 0.02)
    green = np.minimum(pcb1, pcb2)
    for sx in (-1.16, 1.16):
        gold = np.minimum(gold, rbox(p, np.array([sx, 0.06, 0.03]), (0.13, 0.88, 0.03), 0.012))
    tin = np.full(len(p), 1e9)
    for J in JOINTS:
        q = (p - J) / np.array([0.15, 0.12, 0.07])
        tin = np.minimum(tin, (np.linalg.norm(q, axis=-1) - 1) * 0.06)
    # thin gold traces from each joint to the header board, and the via rings the needles pass through
    gold = np.minimum(gold, rbox(p, np.array([-0.78, 0.72, 0.03]), (0.035, 0.3, 0.012), 0.004))
    gold = np.minimum(gold, rbox(p, np.array([0.78, 0.35, 0.03]), (0.035, 0.67, 0.012), 0.004))
    for (x, z) in NEED[1:3]:
        gold = np.minimum(gold, rbox(p, np.array([x, -0.72, 0.03]), (0.09, 0.09, 0.012), 0.01))
    steel = np.minimum(d_wires(p), d_needles(p))
    D = np.stack([black, gold, green, tin, steel], 1)
    return D

YAW = np.radians(-24); TILT = np.radians(-26)
cy, sy = np.cos(YAW), np.sin(YAW); ct, st = np.cos(TILT), np.sin(TILT)
RY = np.array([[cy, 0, sy], [0, 1, 0], [-sy, 0, cy]]); RX = np.array([[1, 0, 0], [0, ct, -st], [0, st, ct]])
ROT = RX @ RY
def sdf(p, want=False):
    q = (p - np.array([0, 0.0, 0])) @ ROT
    D = scene(q)
    k = D.argmin(1); d = D[np.arange(len(q)), k]
    if want: return d, k, q
    return d

CAM = np.array([0.0, 0.1, -10.5]); TGT = np.array([0.0, 0.05, 0.0]); FOV = 34.0
fw = nrm(TGT - CAM); rt = nrm(np.cross(np.array([0, 1.0, 0]), fw)); up = np.cross(fw, rt)
TH = np.tan(np.radians(FOV / 2)); BR = 3.4

def env(r):
    """a soft studio: a big cool softbox upper-left, a violet strip light behind right, a dark floor"""
    y = r[:, 1]
    base = np.array([0.10, 0.10, 0.14])[None] * (0.35 + 1.4 * np.clip(y * .5 + .5, 0, 1) ** 2)[:, None]
    sb = np.clip(r @ nrm(np.array([-0.45, 0.85, -0.3])), 0, 1)
    sb = np.clip((sb - 0.82) / 0.1, 0, 1) * 3.2 + sb ** 6 * 0.6
    st = np.clip(r @ nrm(np.array([0.95, 0.2, -0.25])), 0, 1)
    st = np.clip((st - 0.9) / 0.06, 0, 1) * 1.6
    vi = np.clip(r @ nrm(np.array([0.7, 0.1, 0.7])), 0, 1) ** 8 * 1.0
    mg = np.clip(r @ nrm(np.array([-0.85, -0.1, 0.5])), 0, 1) ** 10 * 0.5
    return base + sb[:, None] * np.array([1.0, 0.99, 0.97]) + st[:, None] * np.array([0.92, 0.95, 1.0]) + vi[:, None] * np.array([0.42, 0.3, 1.0]) + mg[:, None] * np.array([0.9, 0.0, 0.39])

def march(O, Dd, t, tmax, steps=220, eps=4e-4):
    hit = np.zeros(len(Dd), bool); act = np.where(t < tmax)[0]
    for s in range(steps):
        if len(act) == 0: break
        d = sdf(O + Dd[act] * t[act, None])
        h = d < eps
        hit[act[h]] = True
        t[act] += np.maximum(d, eps) * 0.8
        act = act[(~h) & (t[act] < tmax[act])]
    return t, hit

def render_rows(rows):
    r0, r1 = rows
    ys, xs = np.mgrid[r0:r1, 0:W]
    u = ((xs + .5) / W * 2 - 1) * TH * (W / H); v = (1 - (ys + .5) / H * 2) * TH
    D = nrm(u[..., None] * rt + v[..., None] * up + fw).reshape(-1, 3)
    n = len(D)
    b = (CAM[None, :] * D).sum(1); c = (CAM ** 2).sum() - BR * BR; disc = b * b - c
    t = np.where(disc > 0, -b - np.sqrt(np.maximum(disc, 0)), 1e9); tmax = np.where(disc > 0, -b + np.sqrt(np.maximum(disc, 0)), 0)
    T, hit = march(CAM, D, t.copy(), tmax)
    img = np.zeros((n, 4)); hi = np.where(hit)[0]
    if len(hi) == 0: return img.reshape(r1 - r0, W, 4)
    P = CAM + D[hi] * T[hi, None]; e = 5e-4
    Nn = nrm(np.stack([sdf(P + [e, 0, 0]) - sdf(P - [e, 0, 0]), sdf(P + [0, e, 0]) - sdf(P - [0, e, 0]), sdf(P + [0, 0, e]) - sdf(P - [0, 0, e])], 1))
    _, k, q = sdf(P, want=True)
    ao = np.zeros(len(P))
    for i, hg in enumerate([.015, .04, .08, .14, .24]):
        ao += (hg - np.minimum(sdf(P + Nn * hg), hg)) / hg * (0.75 ** i)
    ao = np.clip(1 - ao / 2.4, 0, 1)
    Lk = nrm(np.array([-0.45, 0.85, -0.3]))
    sh = np.ones(len(P)); ts = np.full(len(P), .02); act = np.arange(len(P))
    for s in range(48):
        if len(act) == 0: break
        d = sdf(P[act] + Nn[act] * 2e-3 + Lk * ts[act, None])
        sh[act] = np.minimum(sh[act], np.clip(10 * d / ts[act], 0, 1))
        ts[act] += np.clip(d, .008, .2)
        act = act[(sh[act] > .02) & (ts[act] < 4.0)]
    sh = sh * sh * (3 - 2 * sh)
    V = -D[hi]; R = nrm(2 * (Nn * V).sum(1, keepdims=True) * Nn - V)
    E = env(R); Hh = nrm(Lk + V)
    ndl = np.clip(Nn @ Lk, 0, 1); fres = (1 - np.clip((Nn * V).sum(1), 0, 1)) ** 5
    rimv = np.clip(Nn @ nrm(np.array([0.9, 0.25, 0.35])), 0, 1)
    col = np.zeros((len(P), 3))
    def diffuse(alb, gloss, sp, fr):
        a = np.array(alb)[None]
        fill = np.clip(Nn @ nrm(np.array([0.7, 0.15, -0.7])), 0, 1)
        c = a * (ndl * sh * 2.0 + 0.1 + 0.45 * fill + 0.15 * np.clip(Nn[:, 1], 0, 1))[:, None] * np.array([1.0, 0.98, 0.96])
        c += a * (rimv ** 2 * 0.5)[:, None] * np.array([0.42, 0.3, 1.0])
        c += (np.clip((Nn * Hh).sum(1), 0, 1) ** gloss * sp * sh)[:, None]
        c += E * (fr + (1 - fr) * fres)[:, None] * 0.55
        return c
    def metal(tint, rough, dif=1.0):
        tt = np.array(tint)[None]
        c = E * (tt + (1 - tt) * fres[:, None]) * 1.0
        c += tt * (np.clip((Nn * Hh).sum(1), 0, 1) ** rough * 1.6 * sh)[:, None]
        fl = np.clip(Nn @ nrm(np.array([0.7, 0.15, -0.7])), 0, 1)
        c += tt * (ndl * sh * 0.45 + 0.12 + 0.3 * fl + np.clip((Nn * Hh).sum(1), 0, 1) ** 10 * 0.35 * sh)[:, None] * dif
        return c
    m = k == 0; col[m] = diffuse([0.03, 0.03, 0.035], 40, 0.55, 0.05)[m]
    m = k == 1; col[m] = metal([1.0, 0.76, 0.36], 90, 1.5)[m]
    # solder mask: a deep green with a faint fibre weave
    gk = 0.92 + 0.08 * np.sin(q[:, 0] * 60) * np.sin(q[:, 1] * 60)
    m = k == 2; col[m] = (diffuse([0.03, 0.2, 0.11], 70, 0.5, 0.05) * gk[:, None])[m]
    m = k == 3; col[m] = metal([0.8, 0.81, 0.83], 30, 1.8)[m]
    m = k == 4; col[m] = metal([0.86, 0.87, 0.9], 140)[m]
    col *= (0.3 + 0.7 * ao)[:, None]
    col = col / (1 + col * 0.35) * 1.18
    col = np.clip(col, 0, 1) ** (1 / 1.1)
    col = np.clip(col + (np.random.default_rng(r0).random((len(hi), 1)) - .5) * .01, 0, 1)
    img[hi, :3] = col; img[hi, 3] = 1
    return img.reshape(r1 - r0, W, 4)

if __name__ == '__main__':
    band_ = max(8, H // (NP * 8))
    jobs = [(r, min(H, r + band_)) for r in range(0, H, band_)]
    with Pool(NP) as pool: parts = pool.map(render_rows, jobs)
    rgba = np.concatenate(parts, 0)
    im = Image.fromarray((np.clip(rgba, 0, 1) * 255).astype(np.uint8), 'RGBA')
    if SS != 1: im = im.resize((FW, FH), Image.LANCZOS)
    im.save(OUT); print('wrote', OUT, im.size)
