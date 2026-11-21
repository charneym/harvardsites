#!/usr/bin/env python3
"""Ension hero (HOME_BRIEF update 2c: a crafted render of the real mechanism). Ension's bearingless pediatric
cardiopulmonary assist system (pCAS), as described in NIH SBIR 5R44HL178134: a single-use pump whose impeller is
magnetically levitated (no bearings, shaft or blood seal), attached to a reusable motor stator that supplies power and
control. Shown as a product illustration, exploded: the clear single-use pump head (axial inlet, tangential outlet,
levitated impeller with curved vanes and an iron rotor rim, no magnets in the disposable) lifted above the reusable stator
(graphite body, ring of copper-wound stator teeth). Schematic proportions. Numpy sphere tracing; saved with ALPHA so the
page ink is the only ground (DJ/DP). Usage: python3 render.py W H out.png [SS] [procs]"""
import sys, numpy as np
from multiprocessing import Pool
from PIL import Image

W = int(sys.argv[1]) if len(sys.argv) > 1 else 500
H = int(sys.argv[2]) if len(sys.argv) > 2 else 560
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = float(sys.argv[4]) if len(sys.argv) > 4 else 1.0
NP = int(sys.argv[5]) if len(sys.argv) > 5 else 4
FW, FH = W, H; W, H = int(W * SS), int(H * SS)

def nrm(v): return v / np.maximum(np.linalg.norm(v, axis=-1, keepdims=True), 1e-9)
def length2(x, y): return np.sqrt(x * x + y * y)

# ---------------- geometry (y up) ----------------
YS0, YS1 = -1.70, -1.12            # stator body
YT1 = -0.98                        # top of the stator teeth
HY0, HY1 = -0.62, 0.02             # pump head housing
HR = 1.02                          # housing radius
TH = 0.028                         # wall
YD = -0.40                         # impeller disc centre
def sd_cyl(px, py, pz, r, y0, y1, rr=0.0):
    d1 = length2(px, pz) - (r - rr); yc = (y0 + y1) / 2; hh = (y1 - y0) / 2 - rr
    d2 = np.abs(py - yc) - hh
    return np.minimum(np.maximum(d1, d2), 0) + length2(np.maximum(d1, 0), np.maximum(d2, 0)) - rr

def stator(px, py, pz):
    r = length2(px, pz)
    # annular stator yoke (graphite, anodised)
    ring = np.maximum(sd_cyl(px, py, pz, 1.40, -0.20, 0.20, 0.06), -sd_cyl(px, py, pz, 1.04, -0.5, 0.5, 0.0))
    # rounded inner lip
    return ring
def _rbox(u, v, w, hu, hv, hw, rr):
    q = np.stack([np.abs(u) - hu + rr, np.abs(v) - hv + rr, np.abs(w) - hw + rr], -1)
    return np.linalg.norm(np.maximum(q, 0), axis=-1) + np.minimum(np.max(q, axis=-1), 0) - rr
def _tooth_uv(px, pz):
    r = length2(px, pz); a = np.arctan2(pz, px)
    n = 12; s = 2 * np.pi / n
    a2 = (a + s / 2) % s - s / 2
    return r * np.cos(a2), r * np.sin(a2)
def coils(px, py, pz):
    u, v = _tooth_uv(px, pz)
    return _rbox(u - 0.86, v, py, 0.15, 0.105, 0.135, 0.035)
def poles(px, py, pz):
    u, v = _tooth_uv(px, pz)
    core = _rbox(u - 0.83, v, py, 0.22, 0.062, 0.10, 0.01)
    shoe = _rbox(u - 0.645, v, py, 0.035, 0.125, 0.10, 0.008)
    return np.minimum(core, shoe)
def teeth(px, py, pz):
    return np.minimum(coils(px, py, pz), poles(px, py, pz))

PROF = np.array([(0.0, HY0), (HR - 0.07, HY0), (HR, HY0 + 0.07), (HR, HY1 - 0.05), (HR - 0.10, HY1 + 0.04),
                 (0.30, HY1 + 0.29), (0.205, HY1 + 0.36), (0.205, 0.86), (0.235, 0.90), (0.235, 0.96), (0.205, 1.0), (0.0, 1.0)])
def sd_poly(x, y, V):
    d = (x - V[0, 0]) ** 2 + (y - V[0, 1]) ** 2; s = np.ones_like(x)
    n = len(V); j = n - 1
    for i in range(n):
        ex, ey = V[j, 0] - V[i, 0], V[j, 1] - V[i, 1]; wx, wy = x - V[i, 0], y - V[i, 1]
        h = np.clip((wx * ex + wy * ey) / (ex * ex + ey * ey), 0, 1)
        bx, by = wx - ex * h, wy - ey * h
        d = np.minimum(d, bx * bx + by * by)
        c1 = y >= V[i, 1]; c2 = y < V[j, 1]; c3 = ex * wy > ey * wx
        flip = (c1 & c2 & c3) | (~c1 & ~c2 & ~c3)
        s = np.where(flip, -s, s); j = i
    return s * np.sqrt(d)
OY, OZ, OX1 = -0.30, 0.80, 1.78
def housing_solid(px, py, pz):
    r = length2(px, pz)
    body = sd_poly(r, py, PROF)
    dz = pz - OZ; dy = py - OY
    rr = 0.15 + 0.025 * ((px > OX1 - 0.12) & (px < OX1 - 0.04))
    outl = np.maximum(length2(dy, dz) - rr, np.maximum(-px, px - OX1))
    return np.minimum(body, outl), outl
def housing(px, py, pz):
    d, _ = housing_solid(px, py, pz)
    return np.abs(d) - TH

YD = 1.02          # impeller lifted clear of the stator bore (exploded view)
def impeller(px, py, pz):
    disc = sd_cyl(px, py, pz, 0.56, YD - 0.03, YD + 0.03, 0.015)
    eye = sd_cyl(px, py, pz, 0.10, YD - 0.5, YD + 0.4, 0.0)
    r = length2(px, pz); a = np.arctan2(pz, px)
    n = 6; s = 2 * np.pi / n
    th = a - 1.0 * np.log(np.maximum(r, 1e-3) / 0.2)
    t2 = (th + s / 2) % s - s / 2
    dv = np.abs(t2) * r * 0.62 - 0.013
    dr = np.maximum(0.17 - r, r - 0.55)
    dy = np.abs(py - (YD + 0.08)) - 0.055
    vanes = np.maximum(np.maximum(dv, dr), dy)
    hub = np.maximum(sd_cyl(px, py, pz, 0.20, YD, YD + 0.12, 0.03), -eye)
    d = np.minimum(np.minimum(disc, vanes), hub)
    d = np.maximum(d, -eye)
    # iron rotor ring beneath the disc: salient poles, no magnets
    rn = sd_cyl(px, py, pz, 0.54, YD - 0.22, YD - 0.02, 0.015)
    rn = np.maximum(rn, -sd_cyl(px, py, pz, 0.36, YD - 0.5, YD + 0.1, 0.0))
    aa = (a + np.pi / 8) % (np.pi / 4) - np.pi / 8
    slot = _rbox(r * np.cos(aa) - 0.56, r * np.sin(aa), py - (YD - 0.12), 0.05, 0.05, 0.2, 0.0)
    rn = np.maximum(rn, -slot)
    return np.minimum(d, rn)

def scene_opaque(px, py, pz):
    return np.minimum(np.minimum(stator(px, py, pz), teeth(px, py, pz)), impeller(px, py, pz))

# ---------------- camera ----------------
TGT = np.array([0.0, 0.36, 0.0])
EL, AZ, DIST, FOV = np.radians(31), np.radians(-28), 8.0, np.radians(26)
CAM = TGT + DIST * np.array([np.cos(EL) * np.sin(AZ), np.sin(EL), np.cos(EL) * np.cos(AZ)])
FWD = nrm(TGT - CAM); RGT = nrm(np.cross(FWD, [0, 1.0, 0])); UPV = np.cross(RGT, FWD)

def march(f, ro, rd, tmax=16.0, steps=220, fac=0.8):
    t = np.full(len(ro), 4.0); hit = np.zeros(len(ro), bool); act = np.ones(len(ro), bool)
    for _ in range(steps):
        idx = np.nonzero(act)[0]
        if len(idx) == 0: break
        p = ro[idx] + rd[idx] * t[idx, None]
        d = f(p[:, 0], p[:, 1], p[:, 2])
        h = d < 0.0009 * t[idx]
        hit[idx[h]] = True
        t[idx] += np.where(h, 0, d * fac)
        far = t[idx] > tmax
        act[idx[h | far]] = False
    return t, hit

def normal(f, p, e=0.0012):
    ex = np.array([e, 0, 0]); ey = np.array([0, e, 0]); ez = np.array([0, 0, e])
    def F(q): return f(q[:, 0], q[:, 1], q[:, 2])
    n = np.stack([F(p + ex) - F(p - ex), F(p + ey) - F(p - ey), F(p + ez) - F(p - ez)], -1)
    return nrm(n)

def ao(p, n):
    occ = np.zeros(len(p)); w = 1.0
    for i in range(1, 6):
        h = 0.03 * i
        q = p + n * h
        occ += (h - scene_opaque(q[:, 0], q[:, 1], q[:, 2])) * w; w *= 0.7
    return np.clip(1 - 2.4 * occ, 0, 1)

def softshadow(p, l, k=10.0):
    res = np.ones(len(p)); t = np.full(len(p), 0.03)
    for _ in range(40):
        q = p + l * t[:, None]
        d = scene_opaque(q[:, 0], q[:, 1], q[:, 2])
        res = np.minimum(res, np.clip(k * d / t, 0, 1))
        t += np.clip(d, 0.02, 0.25)
    return np.clip(res, 0, 1)

KEY = nrm(np.array([-0.7, 0.9, 0.6])); RIM = nrm(np.array([0.9, 0.35, -0.8])); FILL = nrm(np.array([0.3, -0.2, 1.0]))
C_KEY = np.array([1.0, 0.96, 0.9]); C_RIM = np.array([0.50, 0.90, 0.95]); C_FILL = np.array([0.08, 0.12, 0.14])

def env(rd):
    # studio: overhead softbox, tall strip light at the left, aqua strip back-right, near-black room
    x, y, z = rd[:, 0], rd[:, 1], rd[:, 2]
    c = np.zeros((len(rd), 3)) + 0.012
    top = np.clip((y - 0.50) / 0.25, 0, 1) * np.clip(1 - np.abs(x) * 1.6, 0, 1) * np.clip(1 - np.abs(z) * 1.6, 0, 1)
    c += top[:, None] * np.array([1.6, 1.55, 1.5])
    ang = np.arctan2(z, x)
    strip = np.exp(-((ang - 2.45) ** 2) / 0.07) * np.clip((y + 0.1) / 0.5, 0, 1) * np.clip((0.9 - y) / 0.3, 0, 1)
    c += strip[:, None] * np.array([1.3, 1.26, 1.2])
    aq = np.exp(-((ang + 0.75) ** 2) / 0.09) * np.clip((y + 0.2) / 0.5, 0, 1) * np.clip((0.8 - y) / 0.3, 0, 1)
    c += aq[:, None] * np.array([0.45, 0.95, 1.05])
    c += np.clip(y + 0.2, 0, 1)[:, None] * np.array([0.05, 0.07, 0.08])
    P = nrm(np.array([-0.62, 0.42, 0.66]))
    pan = np.clip(((rd @ P) - 0.90) / 0.06, 0, 1) ** 1.5
    c += pan[:, None] * np.array([1.1, 1.08, 1.05])
    return c

def shade_opaque(p, rd):
    n = normal(scene_opaque, p)
    dS = stator(p[:, 0], p[:, 1], p[:, 2]); dT = teeth(p[:, 0], p[:, 1], p[:, 2]); dI = impeller(p[:, 0], p[:, 1], p[:, 2])
    m = np.argmin(np.stack([dS, dT, dI], -1), -1)
    r = length2(p[:, 0], p[:, 2]); a = np.arctan2(p[:, 2], p[:, 0])
    base = np.zeros((len(p), 3)); spec = np.zeros(len(p)); rough = np.zeros(len(p)); metal = np.zeros(len(p))
    # stator: graphite anodised, fine radial machining on top
    s = m == 0
    lathe = 0.5 + 0.5 * np.sin(r * 420.0)
    base[s] = np.array([0.060, 0.068, 0.074]) * (0.9 + 0.1 * lathe[s, None]); spec[s] = 0.7; rough[s] = 0.3; metal[s] = 0.8
    # teeth: copper windings (ridged)
    t = m == 1
    pl = t & (poles(p[:, 0], p[:, 1], p[:, 2]) < coils(p[:, 0], p[:, 1], p[:, 2]))
    cl = t & ~pl
    tu, tv = _tooth_uv(p[:, 0], p[:, 2])
    rid = 0.5 + 0.5 * np.sin(tu * 330.0)
    cu = np.array([0.66, 0.36, 0.18])
    base[cl] = cu * (0.45 + 0.55 * rid[cl, None] ** 0.6); spec[cl] = 0.6 + 0.5 * rid[cl]; rough[cl] = 0.3; metal[cl] = 1.0
    lam = 0.5 + 0.5 * np.sin(p[:, 1] * 900.0)
    base[pl] = np.array([0.50, 0.53, 0.55]) * (0.85 + 0.15 * lam[pl, None]); spec[pl] = 0.9; rough[pl] = 0.2; metal[pl] = 1.0
    # impeller: white medical polymer top, iron rotor ring below
    i = m == 2
    iron = i & (p[:, 1] < YD - 0.035)
    poly = i & ~iron
    base[poly] = [0.80, 0.84, 0.86]; spec[poly] = 0.55; rough[poly] = 0.2; metal[poly] = 0.0
    base[iron] = [0.26, 0.28, 0.30]; spec[iron] = 0.8; rough[iron] = 0.3; metal[iron] = 1.0
    o = ao(p, n)
    sh = softshadow(p + n * 0.004, KEY)
    dk = np.clip(n @ KEY, 0, 1) * sh
    wrap = np.clip((n @ KEY + 0.35) / 1.35, 0, 1) * (0.35 + 0.65 * sh)
    dif = np.where(poly, wrap, dk)
    dr = np.clip(n @ RIM, 0, 1); df = np.clip(n @ FILL, 0, 1)
    col = base * (C_KEY * dif[:, None] * 1.05 + C_RIM * dr[:, None] * 0.7 + C_FILL * df[:, None] + 0.02) * o[:, None]
    rf = rd - 2 * (rd * n).sum(-1, keepdims=True) * n
    e = env(rf)
    fres = 0.04 + 0.96 * (1 - np.clip(-(rd * n).sum(-1), 0, 1)) ** 5
    tint = np.where(metal[:, None] > 0.5, base * 1.6 + 0.08, np.ones_like(base))
    col += e * tint * (spec * (0.30 + 0.70 * fres) * (1 - 0.6 * rough))[:, None] * o[:, None]
    # crisp highlights
    hh = nrm(KEY - rd)
    sp = np.clip((n * hh).sum(-1), 0, 1) ** np.where(metal > 0.5, 90, 40) * sh
    col += (C_KEY * sp[:, None]) * (spec * 1.2)[:, None]
    hr = nrm(RIM - rd)
    col += C_RIM * (np.clip((n * hr).sum(-1), 0, 1) ** 60 * spec * 0.9)[:, None]
    return col

def shade_glass(p, rd):
    n = normal(housing, p)
    cosi = np.abs((rd * n).sum(-1))
    fres = 0.04 + 0.96 * (1 - cosi) ** 5
    rf = rd - 2 * (rd * n).sum(-1, keepdims=True) * n
    e = env(rf)
    tint = np.array([0.60, 0.85, 0.88])
    add = e * (0.10 + 0.90 * fres)[:, None] + tint * (0.17 + 0.35 * fres ** 1.2)[:, None]
    hh = nrm(KEY - rd); add += C_KEY * (np.clip((n * hh).sum(-1), 0, 1) ** 160 * 1.8)[:, None]
    tr = 0.78 - 0.20 * fres          # transmission of what is behind
    return add, tr

def render_rows(rows):
    y0, y1 = rows
    ys = (np.arange(y0, y1) + 0.5); xs = (np.arange(W) + 0.5)
    X, Y = np.meshgrid(xs, ys)
    asp = W / H; tf = np.tan(FOV / 2)
    u = (2 * X / W - 1) * tf * asp; v = (1 - 2 * Y / H) * tf
    rd = nrm(FWD[None] + u.reshape(-1, 1) * RGT[None] + v.reshape(-1, 1) * UPV[None])
    ro = np.repeat(CAM[None], len(rd), 0)
    t, hit = march(scene_opaque, ro, rd)
    col = np.zeros((len(rd), 3)); alpha = np.zeros(len(rd))
    if hit.any():
        p = ro[hit] + rd[hit] * t[hit, None]
        col[hit] = shade_opaque(p, rd[hit]); alpha[hit] = 1.0
    return y0, col.reshape(y1 - y0, W, 3), alpha.reshape(y1 - y0, W)

if __name__ == '__main__':
    bands = [(y, min(H, y + 16)) for y in range(0, H, 16)]
    img = np.zeros((H, W, 3)); al = np.zeros((H, W))
    with Pool(NP) as pool:
        for y0, c, a in pool.imap_unordered(render_rows, bands):
            img[y0:y0 + len(c)] = c; al[y0:y0 + len(c)] = a
    img = 1 - np.exp(-img * 1.35)               # filmic-ish tone map
    img = np.clip(img, 0, 1) ** (1 / 1.9)
    out = np.dstack([img, al])
    im = Image.fromarray((out * 255 + 0.5).astype(np.uint8), 'RGBA')
    if SS != 1: im = im.resize((FW, FH), Image.LANCZOS)
    im.save(OUT)
    print('saved', OUT, im.size)
