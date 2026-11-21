#!/usr/bin/env python3
"""STAb Therapeutics hero (HOME_BRIEF update 2c: a crafted render of the real mechanism, done as a pseudocoloured scanning
electron micrograph). A tumour cell (pale, ruffled, with surface blebs) engaged by STAb-T cells, the small lymphocytes
covered in microvilli, pseudocoloured in the logo's sky blue. SEM shading: secondary-electron edge brightening, a
top detector, ambient occlusion in the crevices, fine grain. Saved with ALPHA (no ground of its own, DJ).
Usage: python3 render.py W H out.png [SS] [procs]"""
import sys, numpy as np
from multiprocessing import Pool
from PIL import Image

W = int(sys.argv[1]) if len(sys.argv) > 1 else 500
H = int(sys.argv[2]) if len(sys.argv) > 2 else 460
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = float(sys.argv[4]) if len(sys.argv) > 4 else 1.0
NP = int(sys.argv[5]) if len(sys.argv) > 5 else 4
FW, FH = W, H; W, H = int(W * SS), int(H * SS)

def nrm(v): return v / np.linalg.norm(v, axis=-1, keepdims=True)
rng = np.random.default_rng(11)
PERM = rng.permutation(256); PERM = np.concatenate([PERM, PERM]); GV = rng.random(256) * 2 - 1
def vnoise(p):
    i = np.floor(p).astype(np.int64); f = p - i; u = f * f * (3 - 2 * f)
    def h(dx, dy, dz): return GV[PERM[(PERM[(PERM[(i[:, 0] + dx) & 255] + i[:, 1] + dy) & 255] + i[:, 2] + dz) & 255]]
    x00 = h(0,0,0)*(1-u[:,0]) + h(1,0,0)*u[:,0]; x10 = h(0,1,0)*(1-u[:,0]) + h(1,1,0)*u[:,0]
    x01 = h(0,0,1)*(1-u[:,0]) + h(1,0,1)*u[:,0]; x11 = h(0,1,1)*(1-u[:,0]) + h(1,1,1)*u[:,0]
    y0 = x00*(1-u[:,1]) + x10*u[:,1]; y1 = x01*(1-u[:,1]) + x11*u[:,1]
    return y0*(1-u[:,2]) + y1*u[:,2]
def fbm(p, o=4):
    s = 0; a = .5
    for k in range(o):
        s = s + a * vnoise(p + k * 17.3); p = p * 2.03; a *= .5
    return s
def h3(i, s):
    return ((np.sin(i[:, 0] * 127.1 + i[:, 1] * 311.7 + i[:, 2] * 74.7 + s * 19.3) * 43758.5453) % 1.0 + 1.0) % 1.0
def worley(p):
    """F1 distance to jittered lattice points (cell size 1)."""
    b = np.floor(p).astype(np.int64); best = np.full(len(p), 9.0)
    for dx in (-1, 0, 1):
        for dy in (-1, 0, 1):
            for dz in (-1, 0, 1):
                c = b + np.array([dx, dy, dz])
                fp = c + np.stack([h3(c, 1), h3(c, 2), h3(c, 3)], 1) * .8 + .1
                d = np.sqrt(((p - fp) ** 2).sum(1)); best = np.minimum(best, d)
    return best
def smin(a, b, k):
    h = np.clip(.5 + .5 * (b - a) / k, 0, 1)
    return b * (1 - h) + a * h - k * h * (1 - h)

# ---------- scene ----------
TC = np.array([0.0, 0.0, 0.0]); TR = 1.0                     # tumour cell
TCELLS = [  # centre direction from the tumour centre, radius
    (nrm(np.array([0.70, 0.62, -0.40])), 0.34),
    (nrm(np.array([0.98, -0.12, -0.30])), 0.31),
    (nrm(np.array([0.05, 0.95, -0.35])), 0.32),
    (nrm(np.array([0.35, -0.50, -0.85])), 0.30),
    (nrm(np.array([0.55, 0.15, 0.85])), 0.30),
    (nrm(np.array([-0.85, -0.45, -0.30])), 0.26),
]
TCC = [TC + d * (TR + r * 0.72) for d, r in TCELLS]

def tumour(p, detail=True):
    q = p - TC
    r = np.sqrt((q ** 2).sum(1))
    d = r - TR * (1 + 0.05 * vnoise(q * 1.6 + 3))
    if detail:
        near = np.abs(d) < .2
        if near.any():
            qq = q[near]
            bleb = np.clip(1 - worley(qq * 3.0 + 7) / .6, 0, 1)             # rounded surface blebs
            ruf = np.abs(fbm(qq * 6 + 1, 4))                                   # membrane ruffles (ridged)
            mv = np.clip(1 - worley(qq * 22 + 3) / .38, 0, 1)                  # sparse short microvilli
            d[near] = d[near] - .11 * bleb ** 1.5 + .05 * ruf - .012 * mv
    return d

def tcell(p, k, detail=True):
    c = TCC[k]; R = TCELLS[k][1]
    q = p - c
    dn = TCELLS[k][0]
    ax = np.abs(q @ dn)
    d = np.sqrt((q ** 2).sum(1) + .25 * ax ** 2) - R * (1 + .06 * vnoise(q * 3 + k))   # pressed against the target
    if detail:
        near = np.abs(d) < .12
        if near.any():
            qq = q[near] / R
            f = worley(qq * 9 + k * 13.1)                                      # microvilli: dense knobs
            vil = np.clip(1 - f / .45, 0, 1)
            d[near] = d[near] - .16 * R * vil ** 1.3 - .03 * R * fbm(qq * 5, 2)
    return d

def sdf(p, want=False, detail=True):
    dt = tumour(p, detail)
    ds = [tcell(p, k, detail) for k in range(len(TCC))]
    dT = ds[0]; idx = np.zeros(len(p), np.int64)
    for k in range(1, len(ds)):
        m = ds[k] < dT; dT = np.where(m, ds[k], dT); idx[m] = k
    d = smin(dt, dT, .07)
    if want: return d * .8, dict(isT=dT < dt, idx=idx, dt=dt, dT=dT)
    return d * .8

# ---------- camera ----------
CAM = np.array([0.6, 0.9, -5.6]); TGT = np.array([0.22, 0.12, 0.0]); FOV = 35.0
fw = nrm(TGT - CAM); rt = nrm(np.cross(np.array([0, 1.0, 0]), fw)); up = np.cross(fw, rt)
TH = np.tan(np.radians(FOV / 2))

def march(O, Dd, t, tmax, steps=260, eps=4e-4):
    hit = np.zeros(len(Dd), bool); act = np.arange(len(Dd))
    for s in range(steps):
        if len(act) == 0: break
        p = O + Dd[act] * t[act, None]
        d = sdf(p)
        h = d < eps * (1 + t[act] * .3)
        hit[act[h]] = True
        t[act] += np.maximum(d, eps * .5)
        keep = (~h) & (t[act] < tmax[act])
        act = act[keep]
    return t, hit

def render_rows(rows):
    r0, r1 = rows
    ys, xs = np.mgrid[r0:r1, 0:W]
    u = ((xs + .5) / W * 2 - 1) * TH * (W / H); v = (1 - (ys + .5) / H * 2) * TH
    D = nrm(u[..., None] * rt + v[..., None] * up + fw).reshape(-1, 3)
    N = len(D)
    t = np.full(N, 3.0); tmax = np.full(N, 8.5)
    T, hit = march(CAM, D, t, tmax)
    img = np.zeros((N, 4))
    hi = np.where(hit)[0]
    if len(hi) == 0: return img.reshape(r1 - r0, W, 4)
    P = CAM + D[hi] * T[hi, None]
    e = 6e-4
    nx = sdf(P + [e, 0, 0]) - sdf(P - [e, 0, 0]); ny = sdf(P + [0, e, 0]) - sdf(P - [0, e, 0]); nz = sdf(P + [0, 0, e]) - sdf(P - [0, 0, e])
    Nn = nrm(np.stack([nx, ny, nz], 1) + 1e-9)
    _, info = sdf(P, want=True)
    isT = info['isT']
    ao = np.zeros(len(P))
    for i, hgt in enumerate([.006, .015, .03, .06, .11, .2]):
        ao += (hgt - np.minimum(sdf(P + Nn * hgt) / .8, hgt)) / hgt * (0.8 ** i)
    ao = np.clip(1 - ao / 2.6, 0, 1)
    V = -D[hi]
    ndv = np.clip((Nn * V).sum(1), 0, 1)
    # SEM secondary-electron contrast: edges and tips glow, a detector up and to the left gives the relief
    edge = (1 - ndv) ** 2.2
    Ld = nrm(np.array([-0.55, 0.8, -0.45]))
    det = np.clip((Nn @ Ld + .35) / 1.35, 0, 1)
    # soft shadow toward the detector (crevices between the cells read darker)
    sh = np.ones(len(P)); ts = np.full(len(P), .01); act = np.arange(len(P))
    for s in range(50):
        if len(act) == 0: break
        qq = P[act] + Nn[act] * 2e-3 + Ld * ts[act, None]
        d = sdf(qq, detail=False) / .8
        sh[act] = np.minimum(sh[act], np.clip(6 * d / ts[act], 0, 1))
        ts[act] += np.clip(d, .01, .15)
        act = act[(sh[act] > .03) & (ts[act] < 3.0)]
    sh = .45 + .55 * (sh * sh * (3 - 2 * sh))
    I = (0.10 + 0.55 * det * sh) * (0.2 + 0.8 * ao) + edge * 1.15 * (0.35 + 0.65 * ao)
    # pseudocolour: tumour a pale warm grey-lilac, STAb-T cells the logo's sky blue (#40b8f0), deepening to periwinkle
    tum = np.array([0.90, 0.90, 0.95])
    tb = np.array([0.30, 0.74, 0.98]); tb2 = np.array([0.42, 0.54, 0.98])
    k = info['idx'].astype(float)
    mixc = (0.35 + 0.2 * np.sin(k * 2.1))[:, None]
    tcol = tb * (1 - mixc) + tb2 * mixc
    # colour blends softly across the synapse
    w = np.clip(.5 + (info['dt'] - info['dT']) / .1, 0, 1)[:, None]
    alb = tum * (1 - w) + tcol * w
    col = alb * I[:, None]
    col = col + (edge * 0.2)[:, None] * np.array([0.9, 0.95, 1.0])
    # depth falloff: the far side of the tumour sinks into the dark
    depth = np.clip((P[:, 2] - .1) / 1.1, 0, 1)
    col *= (1 - .55 * depth)[:, None]
    col = col / (1 + col * .45) * 1.3
    col = np.clip(col, 0, 1) ** (1 / 1.05)
    col = np.clip(col + (np.random.default_rng(r0).random((len(hi), 1)) - .5) * .03, 0, 1)
    img[hi, :3] = col
    img[hi, 3] = 1
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
