#!/usr/bin/env python3
"""Manzanita hero (HOME_BRIEF update 2c: a crafted render of the real subject). A peripheral nerve, drawn the way anatomy
plates show it: the epineurium sleeve (with the wavy bands of Fontana and a small vasa nervorum vessel in the logo maroon)
cut back to reveal its fascicles, each cut cleanly across so the myelinated axons read as rings on the face. The fascicles
glow teal, the false colour Manzanita's own "COLOR + NIR MERGE" surgical image uses for 800-rhNGF fluorescence in the
ICG channel, brightest at the cut ends and fading back up the nerve (retrograde axonal transport, NIH RePORTER 5R44CA295214).
Numpy sphere tracing, supersampled; saved with real ALPHA (DJ/DP). Usage: python3 render.py W H out.png [SS] [procs]"""
import sys, numpy as np
from multiprocessing import Pool
from PIL import Image

W = int(sys.argv[1]) if len(sys.argv) > 1 else 600
H = int(sys.argv[2]) if len(sys.argv) > 2 else 520
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = float(sys.argv[4]) if len(sys.argv) > 4 else 1.0
NP = int(sys.argv[5]) if len(sys.argv) > 5 else 4
FW, FH = W, H; W, H = int(W * SS), int(H * SS)

def nrm(v): return v / (np.linalg.norm(v, axis=-1, keepdims=True) + 1e-12)
def sstep(a, b, x):
    t = np.clip((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t)

# ---------- nerve in a local frame: axis +y, cut end toward +y ----------
R = 1.0
FAS = [(-0.16, 0.10, 0.24, -0.02), (0.22, -0.14, 0.21, -0.22)]      # (x, z, radius, end y)
for k in range(8):
    a = k * np.pi / 4 + 0.3
    rr = [0.20, 0.17, 0.21, 0.18, 0.2, 0.16, 0.19, 0.17][k]
    rd = [0.64, 0.66, 0.62, 0.68, 0.64, 0.7, 0.63, 0.67][k]
    FAS.append((rd * np.cos(a), rd * np.sin(a), rr, [0.18, -0.30, 0.05, 0.32, -0.12, -0.38, 0.24, -0.20][k]))
FAS = np.array(FAS)
YEPI = -0.62
VES = (np.radians(200), 0.075)                          # vessel on the sleeve: angle, radius

def warp(q):
    y = q[:, 1]
    yb = np.minimum(y, 0)
    x = q[:, 0] - 0.035 * yb * yb                           # a gentle bend back along the nerve
    z = q[:, 2] + 0.018 * yb * yb
    a = 0.1 * y                                             # slight twist of the fascicles
    ca, sa = np.cos(a), np.sin(a)
    return np.stack([x * ca - z * sa, y, x * sa + z * ca], 1), np.stack([x, y, z], 1)

LEAN = np.radians(58); YAW = np.radians(-38); PITCH = np.radians(-14)
def rz(t): c, s = np.cos(t), np.sin(t); return np.array([[c, -s, 0], [s, c, 0], [0, 0, 1.0]])
def ry(t): c, s = np.cos(t), np.sin(t); return np.array([[c, 0, s], [0, 1.0, 0], [-s, 0, c]])
def rx(t): c, s = np.cos(t), np.sin(t); return np.array([[1.0, 0, 0], [0, c, -s], [0, s, c]])
ROT = ry(YAW) @ rx(PITCH) @ rz(LEAN)
def to_local(p): return p @ ROT

def capcyl(d2, dy, r, k=0.025):
    """rounded capped cylinder: d2 = radial distance, dy = y - end (>0 beyond the cut)"""
    a = d2 - r + k; b = dy + k
    return np.minimum(np.maximum(a, b), 0) + np.sqrt(np.maximum(a, 0) ** 2 + np.maximum(b, 0) ** 2) - k

def parts(p):
    q0 = to_local(p)
    q, qb = warp(q0)
    y = q[:, 1]
    rb = np.sqrt(qb[:, 0] ** 2 + qb[:, 2] ** 2)
    ycut = YEPI + 0.09 * qb[:, 0] - 0.05 * qb[:, 2]
    epi = capcyl(rb, y - ycut, R, 0.05)
    fas = np.full(len(q), 1e9); fid = np.zeros(len(q), np.int64)
    for i, (fx, fz, fr, fe) in enumerate(FAS):
        an = np.arctan2(q[:, 2] - fz, q[:, 0] - fx)
        fr2 = fr * (1 + 0.06 * np.sin(3 * an + i * 1.7) + 0.035 * np.sin(5 * an + i))
        d = capcyl(np.sqrt((q[:, 0] - fx) ** 2 + (q[:, 2] - fz) ** 2), y - fe, fr2, 0.02) * 0.9
        m = d < fas; fas[m] = d[m]; fid[m] = i
    va, vr = VES
    ang = va + 0.12 * np.sin(y * 1.3)
    vx, vz = (R + vr * 0.55) * np.cos(ang), (R + vr * 0.55) * np.sin(ang)
    ves = capcyl(np.sqrt((qb[:, 0] - vx) ** 2 + (qb[:, 2] - vz) ** 2), y - (YEPI - 0.12), vr, 0.03)
    tail = -(y + 5.2)                                       # nothing beyond the far end
    return epi, fas, fid, ves, q, qb, ycut, tail

def sdf(p):
    epi, fas, fid, ves, q, qb, ycut, tail = parts(p)
    return np.maximum(np.minimum(np.minimum(epi, fas), ves), tail)

CAM = np.array([0.0, 0.0, -7.2]); TGT = np.array([0.95, -0.75, 0.0]); FOV = 36.0
fw = nrm(TGT - CAM); rt = nrm(np.cross(np.array([0, 1.0, 0]), fw)); up = np.cross(fw, rt)
TH = np.tan(np.radians(FOV / 2))

def hsh(a, b, s): return ((np.sin(a * 127.1 + b * 311.7 + s * 74.7) * 43758.5453) % 1.0 + 1.0) % 1.0

def axons(u, v):
    """cross-section pattern on a fascicle face: jittered grid of myelinated axons. returns (core, ring) masks 0..1"""
    S = 0.04
    P = np.stack([u, v], 1) / S
    g = np.floor(P).astype(np.int64)
    best = np.full(len(u), 9.0); rad = np.zeros(len(u))
    for dx in (-1, 0, 1):
        for dy in (-1, 0, 1):
            ix = g[:, 0] + dx; iy = g[:, 1] + dy
            c = np.stack([ix + .2 + .6 * hsh(ix, iy, 1), iy + .2 + .6 * hsh(ix, iy, 2)], 1)
            d = np.sqrt(((c - P) ** 2).sum(1))
            m = d < best; best[m] = d[m]; rad[m] = (.22 + .2 * hsh(ix[m], iy[m], 3))
    core = 1 - sstep(rad * .55, rad * .55 + .06, best)
    ring = (1 - sstep(rad, rad + .07, best)) * (1 - core)
    return core, ring

def render_rows(rows):
    r0, r1 = rows
    ys, xs = np.mgrid[r0:r1, 0:W]
    u = ((xs + .5) / W * 2 - 1) * TH * (W / H); v = (1 - (ys + .5) / H * 2) * TH
    D = nrm(u[..., None] * rt + v[..., None] * up + fw).reshape(-1, 3)
    N = len(D)
    t = np.full(N, 2.0); hit = np.zeros(N, bool); act = np.arange(N)
    for s in range(260):
        if len(act) == 0: break
        p = CAM + D[act] * t[act, None]
        d = sdf(p)
        h = d < 6e-4 * (1 + t[act] * .3)
        hit[act[h]] = True
        t[act] += np.maximum(d, 4e-4) * 0.7
        act = act[(~h) & (t[act] < 16)]
    img = np.zeros((N, 4))
    hi = np.where(hit)[0]
    if len(hi) == 0: return np.zeros((r1 - r0, W, 5))
    P = CAM + D[hi] * t[hi, None]
    e = 8e-4
    Nn = nrm(np.stack([sdf(P + [e, 0, 0]) - sdf(P - [e, 0, 0]), sdf(P + [0, e, 0]) - sdf(P - [0, e, 0]),
                       sdf(P + [0, 0, e]) - sdf(P - [0, 0, e])], 1))
    epi, fas, fid, ves, q, qb, ycut, tail = parts(P)
    y = q[:, 1]
    isF = (fas <= epi) & (fas <= ves); isV = (ves < epi) & (ves < fas); isE = ~isF & ~isV
    Nl = Nn @ ROT                                         # normal in local frame (approx, ignores warp)
    ao = np.zeros(len(P))
    for i, hg in enumerate([.01, .03, .06, .11, .18]):
        ao += (hg - np.minimum(sdf(P + Nn * hg), hg)) / hg * (0.8 ** i)
    ao = np.clip(1 - ao / 2.6, 0, 1)
    Lk = nrm(np.array([0.7, 0.8, -0.45])); Vd = -D[hi]
    lam = np.clip((Nn * Lk).sum(1), 0, 1)
    hv = nrm(Lk + Vd); spec = np.clip((Nn * hv).sum(1), 0, 1)
    rim = (1 - np.clip((Nn * Vd).sum(1), 0, 1)) ** 3
    col = np.zeros((len(P), 3)); emi = np.zeros((len(P), 3))
    TEAL = np.array([0.40, 0.86, 0.84]); TEALD = np.array([0.05, 0.27, 0.31])
    # --- epineurium: steel blue connective tissue with the bands of Fontana ---
    if isE.any():
        m = isE
        ang = np.arctan2(qb[m, 2], qb[m, 0])
        face = Nl[m, 1] > 0.55
        band = 0.5 + 0.5 * np.sin(y[m] * 21 + 0.9 * np.sin(ang * 3) + 0.4 * np.sin(y[m] * 3.1))
        base = np.array([0.24, 0.33, 0.41]) * (0.9 + 0.1 * band)[:, None] * (0.93 + 0.07 * np.sin(ang * 7 + y[m] * 1.3))[:, None]
        fibre = 0.015 * np.sin(ang * 90 + y[m] * 2)
        base = base + fibre[:, None]
        cf = np.array([0.50, 0.57, 0.61])
        base[face] = cf * (0.92 + 0.08 * np.sin(qb[m][face, 0] * 60) * np.sin(qb[m][face, 2] * 55))[:, None]
        sh = (0.2 + 0.85 * lam[m]) * ao[m]
        c = base * sh[:, None] + 0.25 * spec[m, None] ** 30 + 0.12 * rim[m, None] * np.array([0.6, 0.8, 0.9])
        # teal light spilling from the fascicles onto the sleeve near the cut
        spill = np.exp(-np.maximum(ycut[m] - y[m], 0) * 2.2) * 0.22
        c += TEAL * spill[:, None] * (0.4 + 0.6 * ao[m])[:, None]
        col[m] = c
    if isV.any():
        m = isV
        base = np.array([0.52, 0.17, 0.16])
        col[m] = base * ((0.25 + 0.8 * lam[m]) * ao[m])[:, None] + 0.35 * spec[m, None] ** 40 + 0.1 * rim[m, None] * np.array([.8, .4, .4])
    if isF.any():
        m = np.where(isF)[0]
        fi = fid[m]; fx, fz, fr, fe = FAS[fi, 0], FAS[fi, 1], FAS[fi, 2], FAS[fi, 3]
        du, dv = q[m, 0] - fx, q[m, 2] - fz
        rr = np.sqrt(du * du + dv * dv) / fr
        face = (Nl[m, 1] > 0.6) & (y[m] > fe - 0.03)
        glow = np.exp(-np.maximum(fe - y[m], 0) * 0.55)              # brightest at the cut, fading up the nerve
        # sides: perineurium, translucent teal with fine longitudinal axon striations
        ang = np.arctan2(dv, du)
        stri = 0.5 + 0.5 * np.sin(ang * 70 + 2 * np.sin(y[m] * 2.0 + fi))
        fon = 0.5 + 0.5 * np.sin(y[m] * 26 + 0.8 * np.sin(ang * 2 + fi))
        sidec = TEALD * (0.3 + 0.75 * lam[m])[:, None] * ao[m][:, None] * (0.8 + 0.2 * stri)[:, None] * (0.85 + 0.15 * fon)[:, None]
        sidee = TEAL * (0.26 * glow * (0.7 + 0.3 * stri) * (0.25 + 0.9 * rim[m] + 0.15 * lam[m]) * ao[m])[:, None]
        c = sidec + 0.18 * spec[m, None] ** 22 + 0.25 * spec[m, None] ** 90
        em = sidee
        if face.any():
            f = face
            core, ring = axons(du[f] + fi[f] * 3.1, dv[f] + fi[f] * 1.7)
            peri = sstep(0.86, 0.95, rr[f])
            fc = TEAL * 0.32 + TEAL * core[:, None] * 1.05 - np.array([0.25, 0.5, 0.5]) * ring[:, None] * 0.55
            fc = fc * (1 - peri)[:, None] + np.array([0.70, 0.86, 0.86]) * peri[:, None]
            c[f] = fc * (0.75 + 0.25 * lam[m][f])[:, None] * (0.6 + 0.4 * ao[m][f])[:, None]
            em[f] = TEAL * (0.30 + 0.75 * core)[:, None] * (1 - peri)[:, None]
        col[m] = c; emi[m] = em
    out = col + emi
    img[hi, :3] = out
    img[hi, 3] = 1.0
    img[hi, 3] *= sstep(-4.9, -2.0, y)                   # the far end eases out into the ink, long and soft
    gl = np.zeros(N); gl[hi] = emi.max(1) * sstep(-4.9, -2.0, y)
    res = np.concatenate([img, gl[:, None]], 1)
    return res.reshape(r1 - r0, W, 5)

def boxblur(a, r):
    for ax in (0, 1):
        a = np.moveaxis(a, ax, 0)
        p = np.concatenate([np.repeat(a[:1], r + 1, 0), a, np.repeat(a[-1:], r, 0)])
        c = np.cumsum(p, 0); a = (c[2 * r + 1:] - c[:-2 * r - 1]) / (2 * r + 1)
        a = np.moveaxis(a, 0, ax)
    return a

if __name__ == '__main__':
    step = 24
    chunks = [(i, min(i + step, H)) for i in range(0, H, step)]
    with Pool(NP) as pool:
        parts_ = pool.map(render_rows, chunks)
    A = np.concatenate(parts_, 0)
    rgb, al, gl = A[..., :3], A[..., 3], A[..., 4]
    prem = rgb * al[..., None]
    # bloom from the glow channel
    g = gl[..., None] * np.array([0.40, 0.86, 0.84])
    bl = np.zeros_like(g)
    for r, wgt in ((int(6 * SS), .5), (int(18 * SS), .45), (int(48 * SS), .35)):
        b = g
        for _ in range(3): b = boxblur(b, max(1, r))
        bl += b * wgt
    prem = prem + bl * (1 - al[..., None] * 0.6)
    a2 = np.clip(np.maximum(al, bl.max(-1) * 1.4), 0, 1)
    rgbo = np.clip(prem / np.maximum(a2[..., None], 1e-4), 0, 1)
    rgbo = rgbo ** (1 / 1.22)
    out = np.concatenate([rgbo, a2[..., None]], -1)
    im = Image.fromarray((out * 255 + .5).astype(np.uint8), 'RGBA')
    if SS != 1: im = im.resize((FW, FH), Image.LANCZOS)
    im.save(OUT)
    print('saved', OUT, im.size)
