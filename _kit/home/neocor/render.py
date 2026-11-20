#!/usr/bin/env python3
"""Neocor hero (HOME_BRIEF update 2c: a crafted render of the real subject). A bundle of human heart muscle: cardiomyocytes
cut cleanly across so each shows its single central nucleus, the fibres turning in the helix myocardium follows through the
heart wall, intercalated discs crossing their sides. Logo crimson #950018 with navy fill light, saved with ALPHA (DJ).
Adapted from the Emmyon fascicle renderer. Usage: python3 render.py W H out.png [SS] [procs]"""
import sys, numpy as np
from multiprocessing import Pool
from PIL import Image

W = int(sys.argv[1]) if len(sys.argv) > 1 else 600
H = int(sys.argv[2]) if len(sys.argv) > 2 else 660
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = float(sys.argv[4]) if len(sys.argv) > 4 else 1.0
NP = int(sys.argv[5]) if len(sys.argv) > 5 else 4
DBG = len(sys.argv) > 6
FW, FH = W, H; W, H = int(W * SS), int(H * SS)

def nrm(v): return v / np.linalg.norm(v, axis=-1, keepdims=True)

rng = np.random.default_rng(23)
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
S = 0.135            # fibre cell size (R = 1 -> ~280 fibres)
G = 0.0068           # half the endomysial gap
R = 1.0
LEAN = np.radians(-44); TILT = np.radians(2)
cz, sz = np.cos(LEAN), np.sin(LEAN); cx, sx = np.cos(TILT), np.sin(TILT)
RZ = np.array([[cz, -sz, 0], [sz, cz, 0], [0, 0, 1.0]]); RX = np.array([[1.0, 0, 0], [0, cx, -sx], [0, sx, cx]])
ROT = RZ @ RX                     # local -> world
def to_local(p): return p @ ROT   # (ROT^T p) row-wise
def top(x, z): return 0.62 + 0.16 * x - 0.05 * z     # the oblique cut
PN = nrm(np.array([-0.16, 1.0, 0.05]))               # its normal (local)

def cells(q):
    """q: local points. returns nearest centre c1 (2D), its integer id, smooth border distance, raw border distance,
    included flag and the (twisted) 2D coordinate used."""
    y = q[:, 1]
    a = 0.75 * y + 0.03 * np.sin(y * 1.7)
    ca, sa = np.cos(a), np.sin(a)
    X = q[:, 0] * ca - q[:, 2] * sa; Z = q[:, 0] * sa + q[:, 2] * ca
    P2 = np.stack([X, Z], 1) / S
    P2 = P2 + 0.22 * np.stack([vnoise(np.stack([X * 1.3, y * 0.9, Z * 1.3], 1)), vnoise(np.stack([X * 1.3 + 17, y * 0.9, Z * 1.3 + 5], 1))], 1)
    gi = np.floor(P2).astype(np.int64)
    best = np.full(len(q), 1e9); bc = np.zeros((len(q), 2)); bid = np.zeros((len(q), 2), np.int64)
    cand = []
    for dx in (-1, 0, 1):
        for dz in (-1, 0, 1):
            ix = gi[:, 0] + dx; iz = gi[:, 1] + dz
            c = np.stack([ix + 0.12 + 0.76 * hash2(ix, iz, 1.0), iz + 0.12 + 0.76 * hash2(ix, iz, 2.0)], 1)
            cand.append((c, ix, iz))
            d = ((c - P2) ** 2).sum(1)
            m = d < best; best[m] = d[m]; bc[m] = c[m]; bid[m, 0] = ix[m]; bid[m, 1] = iz[m]
    def incl(c, margin=0.0):
        cr_ = np.sqrt(((c * S) ** 2).sum(1)); an = np.arctan2(c[:, 1], c[:, 0])
        rl = R * (1 + 0.045 * np.sin(an * 3 + 1.3) + 0.03 * np.sin(an * 7 + .4))
        return cr_ < rl - margin
    k = 0.06; acc = np.zeros(len(q)); raw = np.full(len(q), 1e9)
    rawI = np.full(len(q), 0.6); rawN = np.full(len(q), 0.6)   # border distance to an included / inner neighbour (cells)
    for c, ix, iz in cand:
        dv = c - bc; L = np.sqrt((dv ** 2).sum(1)); same = L < 1e-6
        Ls = np.where(same, 1.0, L)
        db = (((bc + c) * .5 - P2) * dv).sum(1) / Ls        # distance to the bisector, + inside c1
        db = np.where(same, 1e9, db)
        raw = np.minimum(raw, db)
        rawI = np.where(incl(c), np.minimum(rawI, db), rawI)
        rawN = np.where(incl(c, 0.9 * S), np.minimum(rawN, db), rawN)
        acc += np.exp(-np.minimum(db, 50 * k) / k * 1.0) * (~same)
    sm = -k * np.log(acc + 1e-30)
    cr = np.sqrt(((bc * S) ** 2).sum(1))
    ang = np.arctan2(bc[:, 1], bc[:, 0])
    rlim = R * (1 + 0.045 * np.sin(ang * 3 + 1.3) + 0.03 * np.sin(ang * 7 + .4))
    inc = cr < rlim
    inner = cr < rlim - 0.9 * S
    return bc, bid, sm * S, raw * S, inc, P2, inner, rawI * S, rawN * S

def sdf(p, want=False):
    q = to_local(p)
    r = np.sqrt(q[:, 0] ** 2 + q[:, 2] ** 2)
    out = r > R + 0.2
    d = np.empty(len(q))
    d[out] = r[out] - (R + 0.16)
    io = ~out
    qi = q[io]
    bc, bid, sm, raw, inc, P2, inner, rawI, rawN = cells(qi)
    pl = (qi[:, 1] - top(qi[:, 0], qi[:, 2])) * 0.98            # >0 above the cut
    fib = np.where(inc, G - sm, rawI + G)
    fib = np.maximum(fib, pl)
    tile = np.where(inner, -raw, rawN)
    mat = np.maximum(np.maximum(tile, pl + 0.0022), -(pl + 0.05))
    di = np.minimum(fib, mat)
    di = np.maximum(di, q[io, 1] - 1.4)                          # nothing above y 1.4 anyway
    d[io] = di
    if want:
        return d, dict(io=io, bc=bc, bid=bid, sm=sm, raw=raw, inc=inc, pl=pl, ismat=mat < fib, q=q)
    return d

# ---------- camera ----------
CAM = np.array([0.55, 3.55, -4.55]); TGT = np.array([0.08, -0.12, 0.0]); FOV = 31.0
fw = nrm(TGT - CAM); rt = nrm(np.cross(np.array([0, 1.0, 0]), fw)); up = np.cross(fw, rt)
TH = np.tan(np.radians(FOV / 2))

def march(O, Dd, t, tmax, steps=480, eps=4e-4):
    hit = np.zeros(len(Dd), bool); act = np.arange(len(Dd))
    for s in range(steps):
        if len(act) == 0: break
        p = O + Dd[act] * t[act, None]
        d = sdf(p)
        h = d < eps * (1 + t[act] * .4)
        hit[act[h]] = True
        t[act] += np.maximum(d, eps) * 0.45
        keep = (~h) & (t[act] < tmax[act])
        act = act[keep]
    return t, hit

def render_rows(rows):
    r0, r1 = rows
    ys, xs = np.mgrid[r0:r1, 0:W]
    u = ((xs + .5) / W * 2 - 1) * TH * (W / H); v = (1 - (ys + .5) / H * 2) * TH
    D = nrm(u[..., None] * rt + v[..., None] * up + fw).reshape(-1, 3)
    N = len(D)
    # bounding sphere-ish slab: start near the bundle
    t = np.full(N, 3.6); tmax = np.full(N, 9.5)
    T, hit = march(CAM, D, t, tmax)
    img = np.zeros((N, 4))
    hi = np.where(hit)[0]
    if len(hi) == 0: return img.reshape(r1 - r0, W, 4)
    P = CAM + D[hi] * T[hi, None]
    e = 7e-4
    nx = sdf(P + [e, 0, 0]) - sdf(P - [e, 0, 0]); ny = sdf(P + [0, e, 0]) - sdf(P - [0, e, 0]); nz = sdf(P + [0, 0, e]) - sdf(P - [0, 0, e])
    Nn = nrm(np.stack([nx, ny, nz], 1) + 1e-9)
    _, info = sdf(P, want=True)
    io = info['io']
    # material ids
    q = info['q']
    face = np.zeros(len(P), bool); mat = np.zeros(len(P), bool)
    face_i = np.abs(info['pl']) < 2.5e-3
    face[io] = face_i & ~info['ismat']
    mat[io] = info['ismat']
    # AO
    ao = np.zeros(len(P))
    for i, hgt in enumerate([.006, .015, .03, .055, .09, .14]):
        ao += (hgt - np.minimum(sdf(P + Nn * hgt), hgt)) / hgt * (0.85 ** i)
    ao = np.clip(1 - ao / 3.0, 0, 1)
    # soft shadow toward the key light (upper right, away from the headline)
    Lk = nrm(np.array([0.75, 0.95, -0.35]))
    sh = np.ones(len(P)); ts = np.full(len(P), .012); act = np.arange(len(P))
    for s in range(60):
        if len(act) == 0: break
        qq = P[act] + Nn[act] * 1.5e-3 + Lk * ts[act, None]
        d = sdf(qq)
        sh[act] = np.minimum(sh[act], np.clip(10 * d / ts[act], 0, 1))
        ts[act] += np.clip(d, .004, .1)
        keep = (sh[act] > .02) & (ts[act] < 2.5)
        act = act[keep]
    sh = sh * sh * (3 - 2 * sh)
    sh[face | mat] = np.maximum(sh[face | mat], 0.9)
    if DBG: img[hi,0]=face; img[hi,1]=mat; img[hi,2]=sh; img[hi,3]=1; return img.reshape(r1 - r0, W, 4)

    # ---------- albedo ----------
    crim = np.array([0.52, 0.02, 0.075]); deep = np.array([0.30, 0.02, 0.05]); rose = np.array([0.80, 0.30, 0.30])
    alb = np.tile(crim, (len(P), 1))
    sub = np.where(io)[0]
    bid = info['bid']
    hsh = hash2(bid[:, 0].astype(float), bid[:, 1].astype(float), 5.0)
    hsh2 = hash2(bid[:, 0].astype(float), bid[:, 1].astype(float), 9.0)
    # fibre typing: a mosaic of slightly lighter and darker fibres, like the stained cross-sections
    tone = np.where(hsh < .28, 1.22, np.where(hsh < .62, 1.0, 0.8))
    alb[sub] = crim * tone[:, None]
    # sides: sarcomere striations along the fibre + fine longitudinal myofibril grain
    ql = q[io]
    ang = np.arctan2(ql[:, 2], ql[:, 0])
    stri = 0.5 + 0.5 * np.sin(ql[:, 1] * (2 * np.pi / 0.0165) + hsh * 6.0)
    grain = vnoise(np.stack([ql[:, 0] * 160, ql[:, 1] * 6, ql[:, 2] * 160], 1))
    side = ~face[sub] & ~mat[sub]
    f = (0.84 + 0.16 * stri) * (0.93 + 0.07 * grain)
    ph = (ql[:, 1] / 0.34 + hsh * 7.3) % 1.0
    disc = np.exp(-((ph - .5) / 0.012) ** 2)
    f = f * (1 - 0.55 * disc)
    alb[sub[side]] *= f[side, None]
    # cut face: fine myofibril speckle, peripheral nuclei, a lighter rim at each fibre's sarcolemma
    fs = face[sub]
    if fs.any():
        sm = info['sm'][fs]; P2 = (info['bc'][fs])
        speck = vnoise(np.stack([ql[fs, 0] * 260, ql[fs, 1] * 30, ql[fs, 2] * 260], 1))
        base = alb[sub[fs]] * (0.92 + 0.1 * speck)[:, None]
        rim = np.clip(1 - (sm - G) / 0.012, 0, 1)
        base = base * (1 - .18 * rim[:, None]) + rose * .18 * rim[:, None]
        # nuclei: one or two small dark-violet ellipses hugging the sarcolemma
        X = ql[fs, 0]; Z = ql[fs, 2]
        a_ = 0.75 * ql[fs, 1] + 0.03 * np.sin(ql[fs, 1] * 1.7)
        Xr = X * np.cos(a_) - Z * np.sin(a_); Zr = X * np.sin(a_) + Z * np.cos(a_)
        rel = np.stack([Xr, Zr], 1) / S - P2
        pa = np.arctan2(rel[:, 1], rel[:, 0])
        # cardiomyocytes: ONE oval nucleus in the centre of the cell (not every section cuts through it)
        rr = np.sqrt((rel ** 2).sum(1))
        nucl = np.clip(1 - rr / 0.11, 0, 1) * (hsh2[fs] < .72)
        nucl = np.clip(nucl * 3.0, 0, 1)
        viol = np.array([0.10, 0.07, 0.24])
        base = base * (1 - nucl[:, None] * .85) + viol * nucl[:, None] * .85
        alb[sub[fs]] = base
    ms = mat[sub]
    alb[sub[ms]] = np.array([0.66, 0.44, 0.47]) * (0.9 + 0.1 * vnoise(ql[ms] * 120 + 3))[:, None]

    # ---------- light ----------
    V = -D[hi]
    wrap = np.clip((Nn @ Lk + 0.35) / 1.35, 0, 1)
    fill = np.clip(Nn @ nrm(np.array([-0.8, 0.3, -0.5])), 0, 1)
    rimL = np.clip(Nn @ nrm(np.array([0.2, 0.4, 1.0])), 0, 1) ** 2
    Hh = nrm(Lk + V); spec = np.clip((Nn * Hh).sum(1), 0, 1)
    gloss = np.where(face, 90.0, 55.0); sp_k = np.where(face, .22, .34)
    spec = spec ** gloss * sp_k
    fres = (1 - np.clip((Nn * V).sum(1), 0, 1)) ** 4
    warm = np.array([1.0, 0.93, 0.88])
    sss = np.array([1.0, 0.38, 0.32])              # light scattered under the surface tints the shadow red
    col = alb * (warm * wrap[:, None] * sh[:, None] * 1.25 + sss * (1 - sh)[:, None] * wrap[:, None] * 0.22
                 + np.array([0.30, 0.42, 0.75]) * fill[:, None] * 0.22 * ao[:, None] + 0.10 * ao[:, None])
    col += rimL[:, None] * np.array([0.45, 0.6, 0.95]) * .2 * ao[:, None]
    col += (spec * sh)[:, None] * np.array([1.0, 0.95, 0.92]) + fres[:, None] * 0.05
    # depth: the fascicle sinks into the black toward the bottom of the frame
    lq = q[:, 1]
    fall = np.clip((0.1 - lq) / 2.4, 0, 1)
    col *= (1 - 0.8 * fall ** 1.3)[:, None]
    col = col / (1 + col * .25) * 1.2
    col = np.clip(col, 0, 1) ** (1 / 1.08)
    col = np.clip(col + (np.random.default_rng(r0).random((len(hi), 1)) - .5) * .014, 0, 1)
    img[hi, :3] = col
    sy = (ys.reshape(-1)[hi] + .5) / H; sx = (xs.reshape(-1)[hi] + .5) / W
    fb = np.clip((0.97 - sy) / 0.30, 0, 1); fl = np.clip((sx - 0.0) / 0.22, 0, 1)
    img[hi, 3] = (fb * fb * (3 - 2 * fb)) * (fl * fl * (3 - 2 * fl))
    return img.reshape(r1 - r0, W, 4)

if __name__ == '__main__':
    band = max(8, H // (NP * 6))
    jobs = [(r, min(H, r + band)) for r in range(0, H, band)]
    with Pool(NP) as pool:
        parts = pool.map(render_rows, jobs)
    rgba = np.concatenate(parts, 0)
    im = Image.fromarray((np.clip(rgba, 0, 1) * 255).astype(np.uint8), 'RGBA')
    if SS != 1: im = im.resize((FW, FH), Image.LANCZOS)
    im.save(OUT)
    print('wrote', OUT, im.size)
