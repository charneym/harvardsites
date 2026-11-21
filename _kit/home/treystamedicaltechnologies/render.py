#!/usr/bin/env python3
"""Treysta hero (HOME_BRIEF update 2c: a crafted render of the real subject). A block of human skin, cut cleanly on two
faces like the classic anatomical skin section: the surface with its fine furrows, pores and hairs on top; on the cut
faces the thin stratified epidermis with its rete ridges, the papillary dermis with capillary loops, the basket-weave
collagen of the reticular dermis (the tissue whose remodelling decides whether a wound heals as scar), hair follicles
with sebaceous glands, sweat-gland coils, the vascular plexus, and the lobules of the subcutaneous fat. TreystaCare is a
topical therapy that "guides the healing process, encouraging the deposition of smoother, healthier, more natural looking
skin" (treystamedicaltechnologies.com). Natural tissue colour, a teal rim light from the logo's #08a8b8, on a teal ink.
Analytic ray-box intersection, textures generated in face space, lit with bump normals. Saved with ALPHA (DJ).
Usage: python3 render.py W H out.png [SS]"""
import sys, numpy as np
from PIL import Image, ImageFilter

W = int(sys.argv[1]) if len(sys.argv) > 1 else 700
H = int(sys.argv[2]) if len(sys.argv) > 2 else 560
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = float(sys.argv[4]) if len(sys.argv) > 4 else 1.0
FW, FH = W, H; W, H = int(W * SS), int(H * SS)
TQ = float(sys.argv[5]) if len(sys.argv) > 5 else 1.0   # texture resolution factor

rng = np.random.default_rng(7)
PERM = rng.permutation(256); PERM = np.concatenate([PERM, PERM]); GV = rng.random(256) * 2 - 1
def vn(x, y, s=0):
    """2-D value noise in [-1,1]"""
    ix = np.floor(x).astype(np.int64); iy = np.floor(y).astype(np.int64); fx = x - ix; fy = y - iy
    ux = fx * fx * (3 - 2 * fx); uy = fy * fy * (3 - 2 * fy)
    def h(dx, dy): return GV[PERM[(PERM[(ix + dx + s * 17) & 255] + iy + dy) & 255]]
    a = h(0, 0) * (1 - ux) + h(1, 0) * ux; b = h(0, 1) * (1 - ux) + h(1, 1) * ux
    return a * (1 - uy) + b * uy
def fbm(x, y, o=4, s=0):
    r = 0; a = .5; f = 1
    for k in range(o): r = r + a * vn(x * f, y * f, s + k); a *= .5; f *= 2.03
    return r
def sst(a, b, x): t = np.clip((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t)
def mix(a, b, t): t = t[..., None]; return a * (1 - t) + b * t
def C(*c): return np.array(c, dtype=np.float64)
def hsh(ix, iy, s): return ((np.sin(ix * 127.1 + iy * 311.7 + s * 74.7) * 43758.5453) % 1.0 + 1.0) % 1.0
def voro(x, y, cell, s=0):
    """F1, F2 and cell id for a jittered grid"""
    gx = np.floor(x / cell); gy = np.floor(y / cell)
    F1 = np.full(x.shape, 9.0); F2 = np.full(x.shape, 9.0); ID = np.zeros(x.shape)
    for dx in (-1, 0, 1):
        for dy in (-1, 0, 1):
            cx = gx + dx; cy = gy + dy
            px = (cx + .15 + .7 * hsh(cx, cy, s)) * cell; py = (cy + .15 + .7 * hsh(cx, cy, s + 3)) * cell
            d = np.hypot(x - px, y - py)
            m = d < F1
            F2 = np.where(m, F1, np.minimum(F2, d)); ID = np.where(m, hsh(cx, cy, s + 9), ID); F1 = np.where(m, d, F1)
    return F1, F2, ID

# ---------------- geometry ----------------
X, Z, D = 1.45, 0.82, 1.0          # half width, half depth, thickness
SL = 2 * X + 2 * Z                 # unrolled length of the two cut faces (front, then right side)

# ---------------- cut-face texture: s along the unrolled cut, v depth 0..1 ----------------
def cutface(NS, NV):
    s = np.linspace(0, SL, NS)[None, :].repeat(NV, 0); v = np.linspace(0, D, NV)[:, None].repeat(NS, 1)
    col = np.zeros(s.shape + (3,)); ht = np.zeros(s.shape); spec = np.full(s.shape, .25)
    # layer boundaries
    rete = (.5 + .5 * np.sin(s * np.pi * 2 * 6.5 + 1.3 * vn(s * 3, 0, 1))) ** 1.6 * (.6 + .4 * (.5 + .5 * vn(s * 5, 2, 9)))
    eB = 0.060 + 0.030 * rete + 0.006 * vn(s * 9, 1, 2)
    pB = 0.150 + 0.018 * vn(s * 2.5, 3, 3) + 0.010 * rete
    rB = 0.600 + 0.050 * vn(s * 1.3, 5, 4) + 0.02 * vn(s * 4, 6, 5)
    # --- reticular dermis: wavy collagen bundles in a basket weave
    w1 = fbm(s * 2.2, v * 2.2, 3, 7)
    ws = s + .10 * fbm(s * 1.4, v * 1.4, 3, 20); wv = v + .05 * fbm(s * 1.4 + 7, v * 1.4, 3, 21)
    ang = .45 * fbm(s * .9, v * .9, 2, 22)                      # local bundle direction
    au = ws * np.cos(ang) + wv * np.sin(ang); av = -ws * np.sin(ang) + wv * np.cos(ang)
    n1 = fbm(au * 3.2, av * 17, 4, 23)
    band = n1
    bund = sst(-.08, .16, n1)
    # cross-cut bundles (fibres running into the face): oval patches
    F1, F2, ID = voro(s * 1.0, v * 1.6, .055, 11)
    cross = sst(.020, .012, F1) * (ID < .10)
    fib = .89 + .11 * (.5 + .5 * np.sin(av * 700 + 8 * vn(au * 30, av * 30, 12)))
    retc = mix(C(.70, .43, .42), C(.94, .78, .72) * fib[..., None], np.maximum(bund, cross * .9))
    retc = retc * (1 + .07 * fbm(s * 30, v * 30, 2, 13))[..., None]
    reth = .55 * bund + .5 * cross + .05 * fib
    # --- papillary dermis: loose fine fibres, lighter, capillary loops
    pf = .5 + .5 * fbm(s * 60, v * 25, 3, 14)
    papc = mix(C(.80, .52, .50), C(.95, .74, .69), pf)
    paph = .25 * pf
    # --- epidermis: stratified cells, basal pigment, stratum corneum
    E1, E2, _ = voro(s * 1.0, v * 1.0, .0075, 15)
    ecell = sst(.0, .0018, E2 - E1)
    epic = mix(C(.80, .62, .54), C(.96, .84, .77), ecell)
    dE = eB - v                                   # distance above the basal boundary
    epic = mix(epic, C(.55, .36, .29), sst(.009, .0, dE))
    scz = sst(.013, .006, v)                      # stratum corneum
    scl = .5 + .5 * np.sin(v * 2200 + 40 * vn(s * 20, 0, 16))
    epic = mix(epic, C(.97, .93, .86) * (.93 + .07 * scl)[..., None], scz)
    epih = .35 + .15 * ecell + .1 * scz
    # --- hypodermis: fat lobules
    G1, G2, GI = voro(s * 1.0 + .012 * vn(v * 30, s * 30, 17), v * 1.0, .062, 18)
    edge = G2 - G1
    dome = sst(0, .045, edge)
    L1_, L2_, _ = voro(s, v, .26, 24); sep = sst(.012, .003, L2_ - L1_)
    fatc = mix(C(.90, .66, .52), C(.99, .88, .62) * (.92 + .12 * GI)[..., None], dome)
    sm = fbm(s * 70, v * 70, 2, 19)
    fatc = fatc * (1 + .05 * sm)[..., None]
    fatc = mix(fatc, C(.80, .50, .46), sep)
    fath = .4 + .45 * np.sqrt(np.clip(dome, 0, 1)) - .2 * sep
    # interlobular septa a touch wider with a vessel here and there
    # compose layers
    tE = sst(-.003, .003, v - eB); tP = sst(-.012, .012, v - pB); tR = sst(-.02, .02, v - rB)
    col = mix(epic, papc, tE); col = mix(col, retc, tP); col = mix(col, fatc, tR)
    ht = epih * (1 - tE) + paph * tE
    ht = ht * (1 - tP) + reth * tP; ht = ht * (1 - tR) + fath * tR
    spec = np.where(v > rB, .9 * dome, .35)
    # --- vessels: superficial plexus, capillary loops, deep plexus (artery + vein pairs)
    def ring(cs, cv, r, wall, lum):
        nonlocal col, ht
        d = np.hypot(s - cs, (v - cv) * 1.0)
        w = sst(r + .003, r - .002, d)
        lu = sst(r - wall + .002, r - wall - .002, d)
        col = mix(col, wall_c, w); col = mix(col, lum, lu); ht = ht + .5 * w - .25 * lu
    wall_c = C(.78, .38, .38)
    r2 = np.random.default_rng(3)
    for cs in np.arange(.05, SL, .16):
        cs2 = cs + r2.uniform(-.04, .04)
        ring(cs2, .165 + r2.uniform(-.01, .01), .0085, .0035, C(.55, .07, .10))
    for cs in np.arange(.2, SL, .55):
        cs2 = cs + r2.uniform(-.08, .08); cv2 = .60 + r2.uniform(-.03, .03)
        ring(cs2, cv2, .022, .008, C(.60, .08, .11))                 # arteriole: thick wall
        ring(cs2 + .055, cv2 + .01, .027, .004, C(.30, .10, .22))    # venule: thin wall, darker blood
    # capillary loops rising into the dermal papillae (between the rete ridges)
    ph = (s * 6.5 + 1.3 * vn(s * 3, 0, 1) / (2 * np.pi) + .25) % 1.0
    cap = sst(.025, .0, np.abs(ph - 0.0) % 1.0) + sst(.025, .0, 1 - ph)
    capz = sst(.13, .09, v) * sst(.03, .06, v)
    col = mix(col, C(.70, .18, .20), np.clip(cap * capz, 0, 1) * .55)
    # --- hair follicles with sebaceous glands, and sweat glands with their ducts
    for fs, ang, depth in ((.62, .42, .66), (2.28, .38, .62), (3.55, .45, .68)):
        ax = np.sin(ang); ay = np.cos(ang)                   # direction into the skin (s, v)
        t = ((s - fs) * ax + v * ay); t = np.clip(t, 0, depth)
        px = fs + ax * t; py = ay * t
        d = np.hypot(s - px, v - py)
        inside = (v * ay + (s - fs) * ax) > -0.01
        sheath = sst(.026, .020, d) * inside
        shaft = sst(.0085, .005, d) * inside
        col = mix(col, C(.90, .74, .64), sheath * .95)
        col = mix(col, C(.80, .63, .55), sst(.020, .016, d) * inside * .6)
        col = mix(col, C(.20, .12, .09), shaft)
        ht = ht + .35 * sheath + .2 * shaft
        bx = fs + ax * depth; by = ay * depth
        db = np.hypot(s - bx, v - by)
        bulb = sst(.042, .036, db)
        col = mix(col, C(.88, .68, .60), bulb); col = mix(col, C(.35, .20, .15), sst(.022, .016, db))
        col = mix(col, C(.95, .78, .70), sst(.012, .008, db)); ht = ht + .4 * bulb
        # sebaceous gland: a cluster of pale lobes beside the follicle, ~a quarter of the way down
        for k, (dx, dy, r) in enumerate(((.045, .19, .030), (.07, .23, .026), (.05, .26, .022))):
            gx = fs + ax * dy + ay * dx; gy = ay * dy - ax * dx
            dg = np.hypot(s - gx, v - gy)
            gl = sst(r, r - .006, dg)
            Q1, Q2, _ = voro(s, v, .007, 30 + k)
            gc = mix(C(.93, .85, .62), C(.99, .94, .76), sst(0, .002, Q2 - Q1))
            col = mix(col, gc, gl); ht = ht + .5 * gl * np.sqrt(np.clip(1 - dg / r, 0, 1))
    for gs in (1.45, 3.05, 4.35):
        cv0 = .54
        rr = np.random.default_rng(int(gs * 100))
        for k in range(12):
            a2 = rr.uniform(0, 2 * np.pi); rd = rr.uniform(0, .048)
            cx2 = gs + rd * np.cos(a2) * 1.3; cy2 = cv0 + rd * np.sin(a2)
            d = np.hypot(s - cx2, v - cy2)
            tub = sst(.014, .011, d); lum = sst(.005, .003, d)
            col = mix(col, C(.82, .55, .55), tub); col = mix(col, C(.45, .22, .25), lum); ht = ht + .3 * tub
        # the duct spiralling up to the surface
        dpx = gs + .015 * np.sin(v * 90) + .02 * np.sin(v * 9)
        dd = np.abs(s - dpx)
        duct = sst(.0055, .0035, dd) * (v < cv0 - .04)
        col = mix(col, C(.86, .60, .58), duct * .9); ht = ht + .15 * duct
    # wet tissue grain
    col = col * (1 + .04 * fbm(s * 140, v * 140, 2, 40))[..., None]
    return np.clip(col, 0, 1.2), ht, spec

# ---------------- top surface texture: u = x, w = z ----------------
def topface(NU, NW):
    x = np.linspace(-X, X, NU)[None, :].repeat(NW, 0); z = np.linspace(-Z, Z, NW)[:, None].repeat(NU, 1)
    base = mix(C(.78, .56, .48), C(.88, .68, .59), .5 + .5 * fbm(x * 3, z * 3, 3, 50))
    wx = x + .05 * fbm(x * 6, z * 6, 2, 51); wz = z + .05 * fbm(x * 6 + 3, z * 6, 2, 52)
    V1, V2, _ = voro(wx, wz, .085, 53); fu = sst(.010, .0, V2 - V1)
    U1, U2, _ = voro(wx * 1.0 + .3, wz, .032, 54); fu2 = sst(.004, .0, U2 - U1) * .6
    mott = fbm(x * 9, z * 9, 3, 66)
    rel = 1 - .55 * fu - .25 * fu2 + .15 * mott
    col = base * (.93 + .07 * rel)[..., None] * (1 + .06 * mott)[..., None]
    col = mix(col, C(.76, .54, .47), fu * .18)
    # pores
    P1, P2, PI = voro(x, z, .05, 57)
    pore = sst(.0045, .002, P1) * (PI < .5)
    col = mix(col, C(.55, .34, .30), pore * .7); rel = rel - .6 * pore
    # fine hairs: short dark strokes leaning one way
    H1, H2, HI = voro(x, z, .11, 58)
    hair = np.zeros(x.shape)
    gx = np.floor(x / .11); gz = np.floor(z / .11)
    for dx in (-1, 0, 1):
        for dz in (-1, 0, 1):
            cx = gx + dx; cz = gz + dz
            px = (cx + .2 + .6 * hsh(cx, cz, 60)) * .11; pz = (cz + .2 + .6 * hsh(cx, cz, 61)) * .11
            on = hsh(cx, cz, 62) < .55
            L = .05 + .05 * hsh(cx, cz, 63); a = 2.6 + .5 * hsh(cx, cz, 64)
            ex = np.cos(a); ez = np.sin(a)
            t = np.clip((x - px) * ex + (z - pz) * ez, 0, L)
            d = np.hypot(x - px - ex * t, z - pz - ez * t)
            hair = np.maximum(hair, sst(.0022, .0008, d) * on * (1 - .5 * t / L))
    col = mix(col, C(.40, .26, .20), hair * .25); rel = rel + .2 * hair
    col = col * (1 + .03 * fbm(x * 120, z * 120, 2, 65))[..., None]
    return np.clip(col, 0, 1.2), rel * .5, .5 + .3 * fu

def normals(ht, du, dv, k):
    gy, gx = np.gradient(ht, dv, du)
    return -gx * k, -gy * k

def samp(tex, fu, fv):
    """bilinear sample of tex (H, W, C) at fractional pixel coords"""
    Hh, Ww = tex.shape[:2]
    fu = np.clip(fu, 0, Ww - 1.001); fv = np.clip(fv, 0, Hh - 1.001)
    i0 = np.floor(fu).astype(int); j0 = np.floor(fv).astype(int); a = fu - i0; b = fv - j0
    if tex.ndim == 2: a2, b2 = a, b
    else: a2, b2 = a[:, None], b[:, None]
    return (tex[j0, i0] * (1 - a2) * (1 - b2) + tex[j0, i0 + 1] * a2 * (1 - b2) + tex[j0 + 1, i0] * (1 - a2) * b2 + tex[j0 + 1, i0 + 1] * a2 * b2)

# textures
NS, NV = int(5600 * TQ), int(1200 * TQ)
ccol, cht, cspec = cutface(NS, NV)
ccol = np.asarray(Image.fromarray((np.clip(ccol, 0, 1) * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(.7 * TQ))) / 255.0  # subsurface softness
cnx, cny = normals(cht, SL / NS, D / NV, .010)
NU, NW = int(3000 * TQ), int(1700 * TQ)
tcol, tht, tspec = topface(NU, NW)
tnx, tny = normals(tht, 2 * X / NU, 2 * Z / NW, .006)

# ---------------- camera ----------------
eye = np.array([3.1, 1.75, 5.6]); tgt = np.array([0.15, -0.48, 0.0]); up = np.array([0, 1.0, 0])
fwd = tgt - eye; fwd /= np.linalg.norm(fwd); rt = np.cross(fwd, up); rt /= np.linalg.norm(rt); upv = np.cross(rt, fwd)
fov = np.radians(25.5)
ys, xs = np.mgrid[0:H, 0:W]
px = (xs + .5) / W * 2 - 1; py = 1 - (ys + .5) / H * 2
asp = W / H; tf = np.tan(fov / 2)
dirs = fwd[None, None] + rt[None, None] * (px * tf * asp)[..., None] + upv[None, None] * (py * tf)[..., None]
dirs /= np.linalg.norm(dirs, axis=-1, keepdims=True)
d = dirs.reshape(-1, 3); N = d.shape[0]
INF = 1e9
def bottom(sv):  # irregular lower edge of the fat (fraction of D)
    return .95 + .03 * np.abs(np.sin(sv * np.pi * 4.1 + 2 * vn(sv * 2, 0, 70))) ** .5 + .008 * vn(sv * 6, 2, 71)
# top y=0
t_top = np.where(d[:, 1] < 0, -eye[1] / d[:, 1], INF); ht_ = eye + d * t_top[:, None]
ok_top = (np.abs(ht_[:, 0]) <= X) & (np.abs(ht_[:, 2]) <= Z)
# front z=Z
t_fr = np.where(d[:, 2] < 0, (Z - eye[2]) / d[:, 2], INF); hf = eye + d * t_fr[:, None]
s_fr = hf[:, 0] + X; v_fr = -hf[:, 1]
ok_fr = (np.abs(hf[:, 0]) <= X) & (v_fr >= 0) & (v_fr <= D * bottom(s_fr))
# right x=X
t_rt = np.where(d[:, 0] < 0, (X - eye[0]) / d[:, 0], INF); hr = eye + d * t_rt[:, None]
s_rt = 2 * X + (Z - hr[:, 2]); v_rt = -hr[:, 1]
ok_rt = (np.abs(hr[:, 2]) <= Z) & (v_rt >= 0) & (v_rt <= D * bottom(s_rt))
T = np.stack([np.where(ok_top, t_top, INF), np.where(ok_fr, t_fr, INF), np.where(ok_rt, t_rt, INF)], 1)
face = np.argmin(T, 1); hit = T.min(1) < INF / 2

rgb = np.zeros((N, 3)); alpha = hit.astype(float)
L1 = np.array([.30, .80, .62]); L1 /= np.linalg.norm(L1); C1 = C(1.0, .94, .86) * .95
L2 = np.array([-.75, .45, -.55]); L2 /= np.linalg.norm(L2); C2 = C(.16, .80, .88) * .55      # teal rim (logo #08a8b8)
L3 = np.array([.2, -.4, .9]); L3 /= np.linalg.norm(L3); C3 = C(.10, .45, .52) * .22        # teal bounce from below
AMB = C(.16, .17, .19)
def shade(m, base, n, spec, P):
    v = -d[m]
    l1 = np.clip((n @ L1 + .25) / 1.25, 0, 1)      # wrap lighting (soft tissue)
    l2 = np.clip(n @ L2, 0, 1); l3 = np.clip(n @ L3, 0, 1)
    c = base * (AMB + C1 * l1[:, None] + C2 * l2[:, None] * .9 + C3 * l3[:, None])
    hv = L1 + v; hv /= np.linalg.norm(hv, axis=1, keepdims=True)
    sp = np.clip(np.sum(n * hv, 1), 0, 1) ** 60 * spec
    hv2 = L2 + v; hv2 /= np.linalg.norm(hv2, axis=1, keepdims=True)
    sp2 = np.clip(np.sum(n * hv2, 1), 0, 1) ** 40 * spec
    return c + sp[:, None] * C(1, .97, .92) * .5 + sp2[:, None] * C2 * .6
# top
m = hit & (face == 0)
fu = (ht_[m, 0] + X) / (2 * X) * (NU - 1); fw = (ht_[m, 2] + Z) / (2 * Z) * (NW - 1)
base = samp(tcol, fu, fw); bx = samp(tnx, fu, fw); bz = samp(tny, fu, fw)
n = np.stack([bx, np.ones_like(bx), bz], 1); n /= np.linalg.norm(n, axis=1, keepdims=True)
rgb[m] = shade(m, base, n, samp(tspec, fu, fw) * 1.1, ht_[m])
fog = sst(Z * .6, -Z * 1.05, ht_[m, 2]) * .62
rgb[m] = rgb[m] * (1 - fog[:, None]) + C(.03, .07, .08) * fog[:, None]
# front
m = hit & (face == 1)
fu = s_fr[m] / SL * (NS - 1); fv = v_fr[m] / D * (NV - 1)
base = samp(ccol, fu, fv); bx = samp(cnx, fu, fv); by = samp(cny, fu, fv)
n = np.stack([bx, -by, np.ones_like(bx)], 1); n /= np.linalg.norm(n, axis=1, keepdims=True)
rgb[m] = shade(m, base, n, samp(cspec, fu, fv), hf[m])
# right
m = hit & (face == 2)
fu = s_rt[m] / SL * (NS - 1); fv = v_rt[m] / D * (NV - 1)
base = samp(ccol, fu, fv); bx = samp(cnx, fu, fv); by = samp(cny, fu, fv)
n = np.stack([np.ones_like(bx), -by, -bx], 1); n /= np.linalg.norm(n, axis=1, keepdims=True)
rgb[m] = shade(m, base, n, samp(cspec, fu, fv), hr[m])
# a soft pool of key light, brightest toward the front-left corner of the top
HP = np.where((face == 0)[:, None], ht_, np.where((face == 1)[:, None], hf, hr))
pool = .78 + .34 * np.exp(-(((HP[:, 0] + .5) / 1.6) ** 2 + ((HP[:, 2] - .3) / 1.1) ** 2 + ((HP[:, 1]) / 1.4) ** 2))
rgb = rgb * pool[:, None]
# ambient occlusion toward the bottom of both cut faces, and a darker back corner of the side face
vv = np.where(face == 1, v_fr, v_rt); ao = 1 - .80 * sst(.42, 1.0, vv) ** 1.3 * (face > 0)
side_back = np.where(face == 2, sst(2 * X + .2, SL, s_rt), 0) * .45
rgb = rgb * (ao * (1 - side_back))[:, None]
# a crisp highlight on the cut edges (wet tissue catching the key light)
edge_f = (face == 1) & (v_fr < .006); edge_r = (face == 2) & (v_rt < .006)
rgb[edge_f | edge_r] = rgb[edge_f | edge_r] * 1.12
# grade: filmic shoulder, a touch of desaturation, teal in the deep shadows
rgb = np.clip(rgb, 0, None); rgb = rgb / (1 + .35 * rgb) * 1.3
lum = rgb @ C(.2126, .7152, .0722)
rgb = rgb * .82 + lum[:, None] * .18
sh = sst(.35, .0, lum)[:, None]
rgb = rgb * (1 - .25 * sh) + C(.03, .16, .18) * .25 * sh
rgb = np.clip(rgb, 0, 1) ** (1 / 1.05)
alpha = alpha * (1 - .85 * sst(.70, 1.0, vv) * (face > 0))
img = np.concatenate([rgb.reshape(H, W, 3), alpha.reshape(H, W, 1)], 2)
im = Image.fromarray((img * 255).round().astype(np.uint8), 'RGBA')
# fine hairs rising from the surface (drawn in 3-D, projected), each with a teal rim catch on one side
from PIL import ImageDraw
def proj(P):
    q = P - eye; z = q @ fwd
    return ((q @ rt) / z / (tf * asp) + 1) / 2 * W, (1 - (q @ upv) / z / tf) / 2 * H
dr = ImageDraw.Draw(im, 'RGBA'); hr_ = np.random.default_rng(5)
roots = [(.62 - X, Z - .004), (2.28 - X, Z - .004)] + [(hr_.uniform(-X + .1, X - .08), hr_.uniform(-Z + .1, Z - .02)) for _ in range(9)]
for k, (x0, z0) in enumerate(roots):
    L = hr_.uniform(.16, .26) if k > 1 else .24
    a = hr_.uniform(2.3, 3.3); lean = hr_.uniform(.6, .8)
    pts = []
    for t in np.linspace(0, 1, 14):
        e = t * L
        pts.append(np.array([x0 + np.cos(a) * e * np.cos(lean), np.sin(lean) * e - .9 * e * e, z0 + np.sin(a) * e * np.cos(lean) * .6]))
    P2 = [proj(q) for q in pts]
    fogk = float(sst(Z, -Z * 1.1, np.array(z0))) * .5
    wd = max(1, int(round(1.5 * SS * (1 - .4 * fogk))))
    for i in range(len(P2) - 1):
        tt = i / (len(P2) - 1)
        aa = int(235 * (1 - .55 * tt) * (1 - fogk))
        dr.line([P2[i], P2[i + 1]], fill=(48, 30, 22, aa), width=wd)
        dr.line([(P2[i][0] + .7 * SS, P2[i][1]), (P2[i + 1][0] + .7 * SS, P2[i + 1][1])], fill=(120, 205, 215, int(aa * .35)), width=max(1, wd // 2))
if SS != 1: im = im.resize((FW, FH), Image.LANCZOS)
im.save(OUT)
print('saved', OUT, im.size)
