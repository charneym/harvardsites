#!/usr/bin/env python3
"""Kuleana hero (HOME_BRIEF update 2c: a crafted render of the real mechanism). The heart of every hemodialysis circuit,
including the portable, water-free device Kuleana is developing: a bundle of hollow-fibre dialysis membranes, cut cleanly
across so the open ends of the fibres read as rings. Blood (the logo's crimson #9f2f2a) fills each fibre's lumen; the
dialysate that Kuleana's technology regenerates runs between the fibres (the logo's indigo #322e7b, as a low glow). Numpy
sphere tracing of a jittered hexagonal field of hollow tubes. Saved with ALPHA (no ground of its own, DJ).
Usage: python3 render.py W H out.png [SS] [procs]"""
import sys, numpy as np
from multiprocessing import Pool
from PIL import Image

W = int(sys.argv[1]) if len(sys.argv) > 1 else 600
H = int(sys.argv[2]) if len(sys.argv) > 2 else 660
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = float(sys.argv[4]) if len(sys.argv) > 4 else 1.0
NP = int(sys.argv[5]) if len(sys.argv) > 5 else 4
FW, FH = W, H; W, H = int(W * SS), int(H * SS)

def nrm(v): return v / np.linalg.norm(v, axis=-1, keepdims=True)
rng = np.random.default_rng(7)
PERM = rng.permutation(256); PERM = np.concatenate([PERM, PERM]); GV = rng.random(256) * 2 - 1
def vnoise(p):
    i = np.floor(p).astype(np.int64); f = p - i; u = f * f * (3 - 2 * f)
    def h(dx, dy, dz): return GV[PERM[(PERM[(PERM[(i[:, 0] + dx) & 255] + i[:, 1] + dy) & 255] + i[:, 2] + dz) & 255]]
    x00 = h(0,0,0)*(1-u[:,0]) + h(1,0,0)*u[:,0]; x10 = h(0,1,0)*(1-u[:,0]) + h(1,1,0)*u[:,0]
    x01 = h(0,0,1)*(1-u[:,0]) + h(1,0,1)*u[:,0]; x11 = h(0,1,1)*(1-u[:,0]) + h(1,1,1)*u[:,0]
    y0 = x00*(1-u[:,1]) + x10*u[:,1]; y1 = x01*(1-u[:,1]) + x11*u[:,1]
    return y0*(1-u[:,2]) + y1*u[:,2]
def hash2(ix, iz, s):
    return ((np.sin(ix * 127.1 + iz * 311.7 + s * 74.7) * 43758.5453) % 1.0 + 1.0) % 1.0

# ---------- scene (local frame: the bundle runs along +y, cut at the top) ----------
S = 0.086            # hex pitch of the fibres
RO = 0.034           # fibre outer radius
RI = 0.0245          # lumen radius
R = 1.0              # bundle radius
LEAN = np.radians(-15); TILT = np.radians(6)
cz, sz = np.cos(LEAN), np.sin(LEAN); cx, sx = np.cos(TILT), np.sin(TILT)
RZ = np.array([[cz, -sz, 0], [sz, cz, 0], [0, 0, 1.0]]); RX = np.array([[1.0, 0, 0], [0, cx, -sx], [0, sx, cx]])
ROT = RZ @ RX
def to_local(p): return p @ ROT
def top(x, z): return 0.62 + 0.12 * x - 0.04 * z
SQ3 = np.sqrt(3.0)

def tubes(q):
    """distance to the union of hollow tubes in the cross-section plane (2D), with the nearest centre's id."""
    y = q[:, 1]
    a = 0.05 * y
    ca, sa = np.cos(a), np.sin(a)
    X = q[:, 0] * ca - q[:, 2] * sa; Z = q[:, 0] * sa + q[:, 2] * ca
    # a gentle crimp along the fibres, as real dialyser fibres are waved
    X = X + 0.006 * np.sin(y * 9.0 + Z * 40)
    # hex lattice: rows along Z spaced S*sqrt3/2, odd rows offset by S/2
    rz = Z / (S * SQ3 / 2)
    j0 = np.floor(rz).astype(np.int64)
    best = np.full(len(q), 1e9); bd2 = np.full(len(q), 1e9); bid = np.zeros((len(q), 2), np.int64); bcr = np.zeros(len(q))
    for dj in (-1, 0, 1, 2):
        j = j0 + dj
        off = (j & 1) * 0.5
        i0 = np.floor(X / S - off).astype(np.int64)
        for di in (-1, 0, 1):
            i = i0 + di
            jx = (hash2(i.astype(float), j.astype(float), 1.0) - .5) * 0.16
            jz = (hash2(i.astype(float), j.astype(float), 2.0) - .5) * 0.16
            ccx = (i + off + jx) * S; ccz = (j + jz) * S * SQ3 / 2
            cr = np.sqrt(ccx ** 2 + ccz ** 2); an = np.arctan2(ccz, ccx)
            rl = R * (1 + 0.02 * np.sin(an * 3 + 1.3) + 0.012 * np.sin(an * 7 + .4))
            inc = cr < rl
            d2 = np.sqrt((X - ccx) ** 2 + (Z - ccz) ** 2)
            dt = np.maximum(d2 - RO, RI - d2)
            dt = np.where(inc, dt, 1e9)
            m = dt < best
            best[m] = dt[m]; bd2[m] = d2[m]; bid[m, 0] = i[m]; bid[m, 1] = j[m]; bcr[m] = cr[m]
    return best, bd2, bid, bcr

def sdf(p, want=False):
    q = to_local(p)
    r = np.sqrt(q[:, 0] ** 2 + q[:, 2] ** 2)
    out = r > R + 0.08
    d = np.empty(len(q))
    d[out] = r[out] - (R + 0.05)
    io = ~out
    qi = q[io]
    tb, d2, bid, bcr = tubes(qi)
    pl = (qi[:, 1] - top(qi[:, 0], qi[:, 2])) * 0.98
    fib = np.maximum(tb, pl)
    # blood in each lumen: a meniscus just below the cut
    blood = np.maximum(d2 - RI * 1.02, pl + 0.010 + 0.004 * (d2 / RI) ** 2)
    blood = np.where(tb < 1e8, blood, 1e9)
    di = np.minimum(fib, blood)
    d[io] = np.minimum(di, 0.05) * 0.9
    if want:
        return d, dict(io=io, bid=bid, d2=d2, pl=pl, isblood=blood < fib, q=q, bcr=bcr)
    return d

# ---------- camera ----------
CAM = np.array([0.55, 3.55, -4.55]); TGT = np.array([0.08, -0.12, 0.0]); FOV = 31.0
fw = nrm(TGT - CAM); rt = nrm(np.cross(np.array([0, 1.0, 0]), fw)); up = np.cross(fw, rt)
TH = np.tan(np.radians(FOV / 2))

def march(O, Dd, t, tmax, steps=420, eps=3e-4):
    hit = np.zeros(len(Dd), bool); act = np.arange(len(Dd))
    for s in range(steps):
        if len(act) == 0: break
        p = O + Dd[act] * t[act, None]
        d = sdf(p)
        h = d < eps * (1 + t[act] * .4)
        hit[act[h]] = True
        t[act] += np.maximum(d, eps * .5) * 0.8
        keep = (~h) & (t[act] < tmax[act])
        act = act[keep]
    return t, hit

def render_rows(rows):
    r0, r1 = rows
    ys, xs = np.mgrid[r0:r1, 0:W]
    u = ((xs + .5) / W * 2 - 1) * TH * (W / H); v = (1 - (ys + .5) / H * 2) * TH
    D = nrm(u[..., None] * rt + v[..., None] * up + fw).reshape(-1, 3)
    N = len(D)
    t = np.full(N, 3.6); tmax = np.full(N, 9.5)
    T, hit = march(CAM, D, t, tmax)
    img = np.zeros((N, 4))
    hi = np.where(hit)[0]
    if len(hi) == 0: return img.reshape(r1 - r0, W, 4)
    P = CAM + D[hi] * T[hi, None]
    e = 4e-4
    nx = sdf(P + [e, 0, 0]) - sdf(P - [e, 0, 0]); ny = sdf(P + [0, e, 0]) - sdf(P - [0, e, 0]); nz = sdf(P + [0, 0, e]) - sdf(P - [0, 0, e])
    Nn = nrm(np.stack([nx, ny, nz], 1) + 1e-9)
    _, info = sdf(P, want=True)
    io = info['io']; q = info['q']
    face = np.zeros(len(P), bool); bl = np.zeros(len(P), bool)
    face[io] = (np.abs(info['pl']) < 2e-3) & ~info['isblood']
    bl[io] = info['isblood']
    ao = np.zeros(len(P))
    for i, hgt in enumerate([.004, .01, .02, .035, .06, .1]):
        ao += (hgt - np.minimum(sdf(P + Nn * hgt), hgt)) / hgt * (0.85 ** i)
    ao = np.clip(1 - ao / 3.0, 0, 1)
    Lk = nrm(np.array([0.75, 0.95, -0.35]))
    sh = np.ones(len(P)); ts = np.full(len(P), .008); act = np.arange(len(P))
    for s in range(70):
        if len(act) == 0: break
        qq = P[act] + Nn[act] * 1.2e-3 + Lk * ts[act, None]
        d = sdf(qq)
        sh[act] = np.minimum(sh[act], np.clip(12 * d / ts[act], 0, 1))
        ts[act] += np.clip(d, .003, .08)
        keep = (sh[act] > .02) & (ts[act] < 2.5)
        act = act[keep]
    sh = sh * sh * (3 - 2 * sh)
    sh[face] = np.maximum(sh[face], 0.92)

    # ---------- albedo ----------
    memb = np.array([0.80, 0.77, 0.75])          # polyethersulfone membrane: a warm, slightly translucent white
    blood_c = np.array([0.42, 0.035, 0.04])      # the logo's crimson, deepened
    alb = np.tile(memb, (len(P), 1))
    sub = np.where(io)[0]
    bid = info['bid']
    hsh = hash2(bid[:, 0].astype(float), bid[:, 1].astype(float), 5.0)
    ql = q[io]
    grain = vnoise(np.stack([ql[:, 0] * 220, ql[:, 1] * 9, ql[:, 2] * 220], 1))
    alb[sub] = memb * (0.93 + 0.07 * hsh)[:, None] * (0.95 + 0.05 * grain)[:, None]
    bs = bl[sub]
    if bs.any():
        bn = vnoise(ql[bs] * 160 + 5)
        alb[sub[bs]] = blood_c * (0.9 + 0.2 * hsh[bs])[:, None] * (0.94 + 0.06 * bn)[:, None]

    # ---------- light ----------
    V = -D[hi]
    wrap = np.clip((Nn @ Lk + 0.3) / 1.3, 0, 1)
    fill = np.clip(Nn @ nrm(np.array([-0.8, 0.3, -0.5])), 0, 1)
    rimL = np.clip(Nn @ nrm(np.array([0.2, 0.4, 1.0])), 0, 1) ** 2
    Hh = nrm(Lk + V); spec = np.clip((Nn * Hh).sum(1), 0, 1)
    gloss = np.where(bl, 140.0, np.where(face, 40.0, 30.0)); sp_k = np.where(bl, .55, np.where(face, .10, .14))
    spec = spec ** gloss * sp_k
    fres = (1 - np.clip((Nn * V).sum(1), 0, 1)) ** 4
    warm = np.array([1.0, 0.95, 0.9])
    indigo = np.array([0.20, 0.19, 0.52])         # dialysate between the fibres: the logo's indigo #322e7b
    trans = np.array([1.0, 0.82, 0.78])           # light through the thin membrane
    col = alb * (warm * wrap[:, None] * sh[:, None] * 1.15 + trans * (1 - sh)[:, None] * wrap[:, None] * 0.12
                 + np.array([0.5, 0.5, 0.62]) * fill[:, None] * 0.14 * ao[:, None] + 0.06 * ao[:, None])
    # deep in the gaps the dialysate glows faintly indigo
    gap = (1 - ao) * (~face) * (~bl)
    col += indigo[None, :] * (gap * 0.32)[:, None]
    col[face] *= 1.18
    col *= (0.35 + 0.65 * ao)[:, None]
    col += rimL[:, None] * np.array([0.6, 0.6, 0.85]) * .12 * ao[:, None]
    col += (spec * sh)[:, None] * np.array([1.0, 0.97, 0.95]) + fres[:, None] * 0.03
    lq = q[:, 1]
    fall = np.clip((0.1 - lq) / 2.4, 0, 1)
    col *= (1 - 0.82 * fall ** 1.3)[:, None]
    col = col / (1 + col * .3) * 1.2
    col = np.clip(col, 0, 1) ** (1 / 1.08)
    col = np.clip(col + (np.random.default_rng(r0).random((len(hi), 1)) - .5) * .012, 0, 1)
    img[hi, :3] = col
    sy = (ys.reshape(-1)[hi] + .5) / H; sx = (xs.reshape(-1)[hi] + .5) / W
    fb = np.clip((0.97 - sy) / 0.30, 0, 1); fl = np.clip((sx - 0.0) / 0.22, 0, 1)
    img[hi, 3] = (fb * fb * (3 - 2 * fb)) * (fl * fl * (3 - 2 * fl))
    return img.reshape(r1 - r0, W, 4)

if __name__ == '__main__':
    band = max(4, H // (NP * 8))
    jobs = [(r, min(H, r + band)) for r in range(0, H, band)]
    with Pool(NP) as pool:
        parts = pool.map(render_rows, jobs)
    rgba = np.concatenate(parts, 0)
    im = Image.fromarray((np.clip(rgba, 0, 1) * 255).astype(np.uint8), 'RGBA')
    if SS != 1: im = im.resize((FW, FH), Image.LANCZOS)
    im.save(OUT)
    print('wrote', OUT, im.size)
