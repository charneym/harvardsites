#!/usr/bin/env python3
"""Coram hero: an offline ray-marched render (numpy SDF) of the subject of Coram's NHLBI STTR programme: a non-magnetic,
MRI-conditional external defibrillator on its cart, standing right beside an MRI scanner, its pads already on the table
and the cable run across the floor. Scanner white with a teal (#00adbb, logo) trim; the room in the logo charcoal.
Usage: python3 render.py W H out.png   (renders at 1.5x and downsamples). Prints the defibrillator screen corners."""
import sys, numpy as np
from PIL import Image

W = int(sys.argv[1]) if len(sys.argv) > 1 else 960
H = int(sys.argv[2]) if len(sys.argv) > 2 else 540
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = float(sys.argv[4]) if len(sys.argv) > 4 else 1.5
RW, RH = int(W * SS), int(H * SS)

def nrm(v): return v / np.linalg.norm(v, axis=-1, keepdims=True)
def length(v): return np.sqrt(np.sum(v * v, axis=-1))

# ---------- camera ----------
CAM = np.array([-2.55, 1.62, -4.75]); TGT = np.array([-0.2, 0.95, 0.25]); FOV = 34.0
fw = nrm(TGT - CAM); rt = nrm(np.cross(np.array([0, 1.0, 0]), fw)); up = np.cross(fw, rt)
TH = np.tan(np.radians(FOV / 2))

def project(P):
    d = P - CAM; z = d @ fw; x = (d @ rt) / z / TH; y = (d @ up) / z / TH
    return ((x * (H / W) + 1) / 2 * W if False else (x / (W / H) + 1) / 2 * W, (1 - y) / 2 * H)

# ---------- scene ----------
GC = np.array([1.25, 1.06, 1.05]); GB = np.array([1.18, 1.06, 0.72]); GR = 0.24  # gantry
BC = np.array([1.25, 1.02]); BR = 0.38                                         # bore axis (x,y), radius
ZF = GC[2] - GB[2]                                                              # front face z
TH_DEF = np.radians(30.0)                                                       # defibrillator cart yaw
DP = np.array([-0.3, 0.0, -0.62])                                              # cart position (floor)
cR, sR = np.cos(TH_DEF), np.sin(TH_DEF)

def to_cart(p):
    q = p - DP; x = q[..., 0] * cR - q[..., 2] * sR; z = q[..., 0] * sR + q[..., 2] * cR
    return np.stack([x, q[..., 1], z], -1)
def from_cart(l):
    x = l[0] * cR + l[2] * sR; z = -l[0] * sR + l[2] * cR
    return np.array([x, l[1], z]) + DP

def sd_rbox(p, b, r):
    q = np.abs(p) - (b - r)
    return length(np.maximum(q, 0)) + np.minimum(np.max(q, -1), 0) - r
def sd_caps(p, a, b, r):
    pa = p - a; ba = b - a; h = np.clip((pa @ ba) / (ba @ ba), 0, 1)
    return length(pa - h[..., None] * ba) - r

# cable: defibrillator side -> floor -> table pedestal -> over the table edge -> pads
def bez(P, n):
    P = np.array(P, float); t = np.linspace(0, 1, n)[:, None]; out = []
    for tt in t:
        Q = P.copy()
        while len(Q) > 1: Q = Q[:-1] * (1 - tt) + Q[1:] * tt
        out.append(Q[0])
    return np.array(out)
s0 = from_cart(np.array([0.23, 1.10, 0.02]))
CAB = np.concatenate([
    bez([s0, s0 + [0.35, -0.05, 0.05], s0 + [0.5, -0.65, 0.0], [s0[0] + 0.45, 0.025, s0[2] + 0.2]], 10),
    bez([[s0[0] + 0.45, 0.025, s0[2] + 0.2], [0.35, 0.025, -1.05], [0.6, 0.025, -0.55], [0.93, 0.025, -0.62]], 10)[1:],
    bez([[0.93, 0.025, -0.62], [1.0, 0.03, -0.62], [0.96, 0.4, -0.66], [0.97, 0.84, -0.7]], 8)[1:],
    bez([[0.97, 0.84, -0.7], [0.98, 0.95, -0.7], [1.08, 0.94, -0.74], [1.16, 0.925, -0.78]], 6)[1:]])
CR = 0.017
PADS = [np.array([1.17, 0.918, -0.80]), np.array([1.34, 0.918, -1.06])]
LEAD = bez([[1.16, 0.925, -0.78], [1.2, 0.93, -0.88], [1.3, 0.93, -0.95], [1.33, 0.925, -1.03]], 6)

M_FLOOR, M_WALL, M_GANTRY, M_TABLE, M_CUSH, M_CART, M_DEF, M_CABLE, M_PAD = range(9)

def scene(p, want_mat=False):
    x, y, z = p[..., 0], p[..., 1], p[..., 2]
    ds = []
    ds.append(y)                                              # floor
    ds.append(np.minimum(3.0 - z, 4.6 - x))                   # back + side wall
    g = sd_rbox(p - GC, GB, GR)
    rb = BR + np.maximum(0, (ZF + 0.16) - z) * 0.85           # flared bore mouth
    bore = length(np.stack([x - BC[0], y - BC[1]], -1)) - rb
    g = np.maximum(g, -bore)
    ds.append(g)
    # table: top slab running into the bore, pedestal, foot
    tb = sd_rbox(p - np.array([BC[0], 0.80, -0.35]), np.array([0.29, 0.045, 1.55]), 0.02)
    ped = sd_rbox(p - np.array([BC[0], 0.40, -1.0]), np.array([0.2, 0.38, 0.62]), 0.05)
    foot = sd_rbox(p - np.array([BC[0], 0.035, -1.0]), np.array([0.3, 0.035, 0.78]), 0.03)
    ds.append(np.minimum(tb, np.minimum(ped, foot)))
    ds.append(sd_rbox(p - np.array([BC[0], 0.875, -0.4]), np.array([0.26, 0.035, 1.42]), 0.03))  # cushion
    # cart + defibrillator, in cart space
    l = to_cart(p)
    cart = sd_rbox(l - np.array([0, 0.96, 0]), np.array([0.31, 0.025, 0.25]), 0.02)
    cart = np.minimum(cart, sd_rbox(l - np.array([0, 0.53, 0.05]), np.array([0.06, 0.43, 0.06]), 0.02))
    cart = np.minimum(cart, sd_rbox(l - np.array([0, 0.11, 0]), np.array([0.3, 0.03, 0.27]), 0.025))
    cart = np.minimum(cart, sd_rbox(l - np.array([0, 0.62, 0.05]), np.array([0.24, 0.12, 0.18]), 0.03))  # drawer
    for wx in (-0.25, 0.25):
        for wz in (-0.22, 0.22):
            cart = np.minimum(cart, length(l - np.array([wx, 0.045, wz])) - 0.045)
    ds.append(cart)
    de = sd_rbox(l - np.array([0, 1.12, 0]), np.array([0.25, 0.135, 0.19]), 0.04)
    de = np.maximum(de, -sd_rbox(l - np.array([-0.06, 1.13, -0.205]), np.array([0.145, 0.095, 0.03]), 0.008))  # screen recess
    de = np.minimum(de, sd_caps(l, np.array([-0.17, 1.30, 0.0]), np.array([0.17, 1.30, 0.0]), 0.022))         # handle
    de = np.minimum(de, sd_caps(l, np.array([-0.17, 1.24, 0.0]), np.array([-0.17, 1.30, 0.0]), 0.02))
    de = np.minimum(de, sd_caps(l, np.array([0.17, 1.24, 0.0]), np.array([0.17, 1.30, 0.0]), 0.02))
    de = np.minimum(de, length(l - np.array([0.165, 1.08, -0.19])) - 0.032)                                    # shock button
    de = np.minimum(de, length(l - np.array([0.165, 1.17, -0.19])) - 0.024)                                    # dial
    ds.append(de)
    # cable + pads
    cab = np.full(x.shape, 9.0)
    for i in range(len(CAB) - 1):
        cab = np.minimum(cab, sd_caps(p, CAB[i], CAB[i + 1], CR))
    for i in range(len(LEAD) - 1):
        cab = np.minimum(cab, sd_caps(p, LEAD[i], LEAD[i + 1], CR * .7))
    ds.append(cab)
    pad = np.full(x.shape, 9.0)
    for P in PADS:
        pad = np.minimum(pad, sd_rbox(p - P, np.array([0.075, 0.007, 0.1]), 0.006))
    ds.append(pad)
    D = np.stack(ds, -1)
    d = D.min(-1)
    if want_mat: return d, D.argmin(-1)
    return d

def normal(p):
    e = 6e-4; k = np.array([[1, -1, -1], [-1, -1, 1], [-1, 1, -1], [1, 1, 1]], float)
    n = sum(k[i] * scene(p + k[i] * e)[..., None] for i in range(4))
    return nrm(n)

def march(ro, rd, steps=150, tmax=14.0):
    t = np.full(ro.shape[0], 0.01); hit = np.zeros(ro.shape[0], bool); act = np.ones(ro.shape[0], bool)
    for _ in range(steps):
        idx = np.nonzero(act)[0]
        if idx.size == 0: break
        d = scene(ro[idx] + rd[idx] * t[idx, None])
        t[idx] += d * 0.9
        h = d < 4e-4 * t[idx]; hit[idx[h]] = True
        act[idx[h | (t[idx] > tmax)]] = False
    return t, hit

def soft_shadow(p, ld, k=10.0, steps=48):
    res = np.ones(p.shape[0]); t = np.full(p.shape[0], 0.02); act = np.ones(p.shape[0], bool)
    for _ in range(steps):
        idx = np.nonzero(act)[0]
        if idx.size == 0: break
        d = scene(p[idx] + ld * t[idx, None])
        res[idx] = np.minimum(res[idx], k * d / t[idx])
        t[idx] += np.clip(d, 0.01, 0.25)
        act[idx[(res[idx] < 0.005) | (t[idx] > 6)]] = False
    return np.clip(res, 0, 1)

def ao(p, n):
    o = np.zeros(p.shape[0]); s = 1.0
    for i in range(1, 6):
        h = 0.03 * i * i * 0.5 + 0.01
        o += (h - scene(p + n * h)) * s; s *= 0.6
    return np.clip(1 - 2.2 * o, 0, 1)

def srgb(c): return np.array(c[1:3] and [int(c[i:i + 2], 16) / 255 for i in (1, 3, 5)]) ** 2.2
TEAL = srgb('#00adbb'); CHAR = srgb('#232323')
KEY = nrm(np.array([-0.45, 0.95, -0.35])); FILL = nrm(np.array([-0.9, 0.35, -0.6])); RIM = nrm(np.array([0.7, 0.5, 0.6]))
BORE_L = np.array([BC[0], BC[1], ZF + 0.9])

def albedo(p, n, m, l):
    x, y, z = p[:, 0], p[:, 1], p[:, 2]
    a = np.zeros((p.shape[0], 3)); em = np.zeros((p.shape[0], 3)); sp = np.full(p.shape[0], 0.25); gl = np.full(p.shape[0], 40.0)
    def put(mask, col): a[mask] = col
    # floor: dark resin with faint tile seams
    f = m == M_FLOOR
    tx = np.abs(((x + 0.3) / 0.6) % 1 - 0.5); tz = np.abs(((z) / 0.6) % 1 - 0.5)
    seam = (np.maximum(tx, tz) > 0.493)
    put(f, srgb('#2a3133')); a[f & seam] *= 0.7; sp[f] = 0.5; gl[f] = 90
    w = m == M_WALL
    put(w, srgb('#1c2224'))
    pan = w & (np.abs(((x + 0.2) / 1.2) % 1 - 0.5) > 0.494) & (z > 2.9); a[pan] *= 0.6
    # gantry: white shell; bore lining cooler; teal trim ring on the front face; small status display
    g = m == M_GANTRY
    put(g, srgb('#e8ecec')); sp[g] = 0.35; gl[g] = 60
    r = np.hypot(x - BC[0], y - BC[1])
    face = g & (z < ZF + 0.03)
    ring = face & (r > 0.70) & (r < 0.745)
    put(ring, TEAL); em[ring] = TEAL * 0.35
    lining = g & (r < BR + 0.02) & (z > ZF + 0.12)
    put(lining, srgb('#f2f6f6'))
    depth = np.clip((z - ZF) / 1.4, 0, 1)
    em[lining] += (np.array([0.62, 0.86, 0.9]) * (0.25 + 0.9 * depth[lining])[:, None])
    mouth = g & (r < BR + 0.16) & (z <= ZF + 0.12) & (z > ZF - 0.05)
    em[mouth] += np.array([0.3, 0.45, 0.47]) * 0.25
    disp = face & (np.abs(x - (BC[0] - 0.66)) < 0.12) & (np.abs(y - 1.78) < 0.05)
    put(disp, srgb('#1a2022')); em[disp] = TEAL * 0.55; sp[disp] = 0.8
    seam2 = g & (np.abs(z - (ZF + 0.42)) < 0.006) & (r > BR + 0.05)
    a[seam2] *= 0.55
    # table
    t = m == M_TABLE; put(t, srgb('#dfe3e3')); sp[t] = 0.3
    c = m == M_CUSH; put(c, srgb('#33393b')); sp[c] = 0.15; gl[c] = 18
    ca = m == M_CART; put(ca, srgb('#d9dddd')); sp[ca] = 0.3
    wheel = ca & (l[:, 1] < 0.095); put(wheel, srgb('#2b2f30'))
    # defibrillator: charcoal case, teal shock button and trim line, dark screen (ECG drawn live in the page)
    d = m == M_DEF; put(d, CHAR * 1.25); sp[d] = 0.45; gl[d] = 70
    scr = d & (np.abs(l[:, 0] + 0.06) < 0.14) & (np.abs(l[:, 1] - 1.13) < 0.09) & (l[:, 2] < -0.16)
    put(scr, srgb('#0b1213')); em[scr] = srgb('#0d2a2d') * 0.6; sp[scr] = 0.9; gl[scr] = 200
    btn = d & (np.hypot(l[:, 0] - 0.165, l[:, 1] - 1.08) < 0.034) & (l[:, 2] < -0.17)
    put(btn, TEAL); em[btn] = TEAL * 0.6
    trim = d & (np.abs(l[:, 1] - 0.99) < 0.008)
    put(trim, TEAL); em[trim] = TEAL * 0.25
    hdl = d & (l[:, 1] > 1.26); put(hdl, srgb('#3a4042'))
    cb = m == M_CABLE; put(cb, srgb('#1e2324')); sp[cb] = 0.5
    pd = m == M_PAD; put(pd, srgb('#f1f3f3'))
    edge = pd & (np.maximum(np.abs(x - np.where(z > -0.93, PADS[0][0], PADS[1][0])) / 0.075, np.abs(z - np.where(z > -0.93, PADS[0][2], PADS[1][2])) / 0.1) > 0.8)
    put(edge, TEAL)
    return a, em, sp, gl

def shade(ro, rd, depth=0):
    N = ro.shape[0]; col = np.zeros((N, 3))
    t, hit = march(ro, rd, 150 if depth == 0 else 90)
    bg = np.array([0.012, 0.016, 0.018])
    col[~hit] = bg
    idx = np.nonzero(hit)[0]
    if idx.size == 0: return col, t, hit
    p = ro[idx] + rd[idx] * t[idx, None]
    _, m = scene(p, True); n = normal(p); l = to_cart(p)
    a, em, sp, gl = albedo(p, n, m, l)
    sh = soft_shadow(p + n * 2e-3, KEY) if depth == 0 else np.ones(idx.size)
    occ = ao(p, n)
    v = -rd[idx]
    def light(ld, ci, s=1.0):
        dif = np.clip((n * ld).sum(-1), 0, 1)
        hv = nrm(ld + v); spc = np.clip((n * hv).sum(-1), 0, 1) ** gl * sp
        return (dif[:, None] * a + spc[:, None]) * ci * s
    c = light(KEY, np.array([1.0, 0.98, 0.95]) * 2.6) * sh[:, None]
    c += light(FILL, np.array([0.55, 0.62, 0.66]) * 0.35) * occ[:, None]
    c += light(RIM, TEAL * 1.6 + 0.15) * occ[:, None]
    # bore light: a glow spilling out of the tunnel onto the table, cushion and floor
    bl = BORE_L - p; bd = length(bl); bln = bl / bd[:, None]
    bdif = np.clip((n * bln).sum(-1), 0, 1) * np.clip(-bln[:, 2] * 1.4, 0, 1)
    c += a * np.array([0.75, 0.95, 1.0]) * ((2.2 / (1 + bd * bd * 1.6)) * bdif)[:, None]
    c += a * np.array([0.06, 0.075, 0.08]) * occ[:, None]            # ambient
    # ceiling softbox fall-off: the room darkens away from the scanner
    c *= (0.55 + 0.45 * np.clip(1.25 - length(p[:, [0, 2]] - np.array([0.6, -0.2])) * 0.22, 0, 1))[:, None]
    c += em
    # floor reflection (one bounce)
    if depth == 0:
        f = np.nonzero(m == M_FLOOR)[0]
        if f.size:
            rdr = rd[idx[f]] - 2 * (rd[idx[f]] * n[f]).sum(-1)[:, None] * n[f]
            rc, _, _ = shade(p[f] + n[f] * 3e-3, rdr, 1)
            fr = 0.06 + 0.5 * (1 - np.clip((v[f] * n[f]).sum(-1), 0, 1)) ** 5
            c[f] = c[f] * (1 - fr[:, None] * .3) + rc * (fr[:, None] * 0.55 + 0.045)
    # fog toward the walls
    fogk = 1 - np.exp(-np.maximum(t[idx] - 3.5, 0) * 0.12)
    c = c * (1 - fogk[:, None]) + bg * fogk[:, None]
    col[idx] = c
    return col, t, hit

PART = int(sys.argv[5]) if len(sys.argv) > 5 else -2
NP = int(sys.argv[6]) if len(sys.argv) > 6 else 1

def render_rows(r0, r1):
    ys, xs = np.mgrid[r0:r1, 0:RW]
    u = ((xs + 0.5) / RW * 2 - 1) * TH * (RW / RH); vv = (1 - (ys + 0.5) / RH * 2) * TH
    rd = nrm(fw[None, None] + u[..., None] * rt + vv[..., None] * up).reshape(-1, 3)
    out = np.zeros((rd.shape[0], 3)); CH = 120000
    for s in range(0, rd.shape[0], CH):
        ro = np.broadcast_to(CAM, (min(CH, rd.shape[0] - s), 3)).copy()
        out[s:s + CH], _, _ = shade(ro, rd[s:s + CH])
        print(f'{s / rd.shape[0] * 100:.0f}%', end=' ', flush=True)
    return out.reshape(r1 - r0, RW, 3)

def finish(img):
    img = img * 0.9
    a, b, cc, d, e = 2.51, 0.03, 2.43, 0.59, 0.14
    img = np.clip((img * (a * img + b)) / (img * (cc * img + d) + e), 0, 1)
    img = img ** (1 / 2.2)
    lum = img.mean(-1, keepdims=True)
    tint = np.array([0.03, 0.075, 0.085])
    img = img + tint * (1 - lum) ** 3 * 0.55
    yy, xx = np.mgrid[0:RH, 0:RW]
    vg = 1 - 0.35 * (((xx / RW - 0.62) * 1.25) ** 2 + ((yy / RH - 0.5) * 1.1) ** 2)
    img = np.clip(img * vg[..., None], 0, 1)
    im = Image.fromarray((img * 255 + 0.5).astype(np.uint8)).resize((W, H), Image.LANCZOS)
    im.save(OUT, quality=88) if OUT.endswith('.jpg') else im.save(OUT)
    corners = [from_cart(np.array([sx, sy, -0.176])) for sx, sy in ((-0.2, 1.215), (0.08, 1.215), (0.08, 1.045), (-0.2, 1.045))]
    print('\nscreen corners (fraction of W,H):', [(round(float(project(c)[0]) / W, 4), round(float(project(c)[1]) / H, 4)) for c in corners])

def main():
    if PART == -2:
        finish(render_rows(0, RH)); return
    if PART == -1:
        finish(np.concatenate([np.load(OUT + f'.part{i}.npy') for i in range(NP)], 0)); return
    r0 = RH * PART // NP; r1 = RH * (PART + 1) // NP
    np.save(OUT + f'.part{PART}.npy', render_rows(r0, r1).astype(np.float32))

main()
