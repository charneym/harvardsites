#!/usr/bin/env python3
"""Ionwerks hero (HOME_BRIEF update 2c: a crafted render of the firm's real product). A segmented microchannel-plate ion
detector of the kind on ionwerks.com's products page (the round detector heads mounted on vacuum flanges, product image
p4): a polished stainless-steel ConFlat flange with its bolt circle and knife-edge recess, four threaded posts carrying the
detector stack (anode plate, alumina spacers, the dark microchannel plate, a stainless retaining ring and hex nuts).
Numpy sphere tracing of a signed-distance model, glossy metal shading against a studio environment. Saved with ALPHA (no
ground of its own, DJ). Usage: python3 render.py W H out.png [SS] [procs]"""
import sys, numpy as np
from multiprocessing import Pool
from PIL import Image

W = int(sys.argv[1]) if len(sys.argv) > 1 else 640
H = int(sys.argv[2]) if len(sys.argv) > 2 else 520
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = float(sys.argv[4]) if len(sys.argv) > 4 else 1.0
NP = int(sys.argv[5]) if len(sys.argv) > 5 else 4
FW, FH = W, H; W, H = int(W * SS), int(H * SS)

def nrm(v): return v / np.linalg.norm(v, axis=-1, keepdims=True)

def cyl(p, r, y0, y1):
    """capped vertical cylinder about the y axis"""
    rr = np.hypot(p[:, 0], p[:, 2])
    dx = rr - r; c = (y0 + y1) / 2; h = (y1 - y0) / 2
    dy = np.abs(p[:, 1] - c) - h
    return np.minimum(np.maximum(dx, dy), 0) + np.hypot(np.maximum(dx, 0), np.maximum(dy, 0))

def ann(p, r0, r1, y0, y1):
    return np.maximum(cyl(p, r1, y0, y1), -cyl(p, r0, y0 - 1, y1 + 1))

def rep(p, n, off=0.0):
    """fold the point into one of n angular sectors (the sector's centre on +x)"""
    a = np.arctan2(p[:, 2], p[:, 0]) - off
    s = 2 * np.pi / n
    a = a - s * np.round(a / s)
    r = np.hypot(p[:, 0], p[:, 2])
    return np.stack([r * np.cos(a), p[:, 1], r * np.sin(a)], -1)

def hexp(p, r, y0, y1):
    """hexagonal prism (nut) about the local y axis"""
    q = np.abs(p[:, [0, 2]])
    k = np.array([-0.8660254, 0.5])
    d2 = np.maximum(q[:, 0] * 0.8660254 + q[:, 1] * 0.5, q[:, 1]) - r
    c = (y0 + y1) / 2; h = (y1 - y0) / 2
    dy = np.abs(p[:, 1] - c) - h
    return np.minimum(np.maximum(d2, dy), 0) + np.hypot(np.maximum(d2, 0), np.maximum(dy, 0))

# dimensions (cm): a 6-inch ConFlat flange
FR, FT = 7.6, 1.0          # radius, half thickness (top face at y = +FT)
BC, BH = 6.51, 0.43        # bolt circle radius, bolt hole radius
RC = 4.45                  # recess radius on the vacuum face
PR = 3.25                  # post circle
Y_A0, Y_A1 = 3.05, 3.32    # anode plate
Y_S1 = 3.72                # alumina spacer ring top
Y_M0, Y_M1 = 3.50, 3.72    # MCP
Y_R1 = 3.98                # retaining ring top
Y_N1 = 4.30                # nut top

def sdf(p, want_id=False):
    # flange body, with a shallow recess and a raised knife edge on its vacuum face
    fl = cyl(p, FR - 0.1, -FT + 0.1, FT - 0.1) - 0.1
    fl = np.maximum(fl, -cyl(p, RC, FT - 0.22, FT + 1))
    ke = ann(p, 4.08, 4.22, FT - 0.3, FT - 0.07)
    fl = np.minimum(fl, ke)
    q = rep(p, 16, np.pi / 16)
    bh = np.hypot(q[:, 0] - BC, q[:, 2]) - BH
    fl = np.maximum(fl, -bh)
    fl = np.maximum(fl, -cyl(p, 0.9, -2, 2))                    # the central feedthrough bore
    # four threaded posts and the detector stack
    q4 = rep(p, 4, np.pi / 4)
    post = np.maximum(np.hypot(q4[:, 0] - PR, q4[:, 2]) - 0.16 - 0.012 * np.sin(p[:, 1] * 95), np.abs(p[:, 1] - 2.75) - 1.75)
    stand = np.maximum(np.hypot(q4[:, 0] - PR, q4[:, 2]) - 0.34, np.abs(p[:, 1] - (FT - 0.22 + Y_A0) / 2) - (Y_A0 - FT + 0.22) / 2)
    stand = np.maximum(stand, -(np.hypot(q4[:, 0] - PR, q4[:, 2]) - 0.17))
    anode = cyl(p, 3.71, Y_A0 + 0.04, Y_A1 - 0.04) - 0.04
    nut_p = q4.copy(); nut_p[:, 0] -= PR
    nut = np.maximum(hexp(nut_p, 0.3, Y_R1, Y_N1), -(np.hypot(nut_p[:, 0], nut_p[:, 2]) - 0.17))
    ring = np.maximum(cyl(p, 3.71, Y_S1 + 0.04, Y_R1 - 0.04) - 0.04, -cyl(p, 2.5, 0, 9))
    ring = np.maximum(ring, -(np.hypot(q4[:, 0] - PR, q4[:, 2]) - 0.19))
    anode = np.maximum(anode, -(np.hypot(q4[:, 0] - PR, q4[:, 2]) - 0.19))
    steel = np.minimum.reduce([fl, post, stand, anode, nut, ring])
    spacer = ann(p, 2.62, 3.6, Y_A1, Y_S1)
    spacer = np.maximum(spacer, -(np.hypot(q4[:, 0] - PR, q4[:, 2]) - 0.38))
    # alumina washers under each nut and on each post below the anode
    wq = q4.copy(); wq[:, 0] -= PR
    wash = np.maximum(np.hypot(wq[:, 0], wq[:, 2]) - 0.42, np.abs(p[:, 1] - (Y_A0 - 0.08)) - 0.08)
    wash = np.maximum(wash, -(np.hypot(wq[:, 0], wq[:, 2]) - 0.17))
    cer = np.minimum(spacer, wash)
    mcp = cyl(p, 2.62, Y_M0, Y_M1)
    elec = np.maximum(ann(p, 2.28, 2.63, Y_M1 - 0.02, Y_M1 + 0.015), -0.0 + 0 * p[:, 0])
    # a lower plate stage: a second anode disc on alumina spacers, with the signal leads dropping to the feedthrough bore
    lower = cyl(p, 3.75, 2.05, 2.25)
    lower = np.maximum(lower, -(np.hypot(q4[:, 0] - PR, q4[:, 2]) - 0.19))
    lsp = ann(p, 2.9, 3.55, 2.25, Y_A0)
    lsp = np.maximum(lsp, -(np.hypot(q4[:, 0] - PR, q4[:, 2]) - 0.38))
    steel = np.minimum(steel, lower); cer = np.minimum(cer, lsp)
    lead = 1e9
    for ang in (0.35, 2.4, 4.3):
        c, s_ = np.cos(ang), np.sin(ang)
        # a wire from under the lower plate (r 1.6) curving down into the bore (r 0.5)
        yy = np.clip(p[:, 1], FT - 0.2, 2.05)
        tt = (yy - (FT - 0.2)) / (2.05 - FT + 0.2)
        rr_ = 0.55 + 1.05 * tt ** 0.7
        cx, cz = rr_ * c, rr_ * s_
        lw = np.sqrt((p[:, 0] - cx) ** 2 + (p[:, 2] - cz) ** 2 + (p[:, 1] - yy) ** 2) - 0.06
        lead = np.minimum(lead, lw)
    cu = np.minimum(elec, lead)
    d = np.minimum.reduce([steel, cer, mcp, cu])
    if want_id:
        mid = np.zeros(len(p), np.int8)
        mid[cer <= d + 1e-6] = 1
        mid[mcp <= d + 1e-6] = 2
        mid[cu <= d + 1e-6] = 3
        return d, mid
    return d

def normal(p):
    e = 0.003; out = np.zeros_like(p)
    for i in range(3):
        o = np.zeros(3); o[i] = e
        out[:, i] = sdf(p + o) - sdf(p - o)
    return nrm(out)

KEY = nrm(np.array([-0.5, 0.8, 0.25]))
def env(d):
    y = d[:, 1]
    sky = np.clip(y * 0.5 + 0.5, 0, 1)
    base = 0.012 + 0.22 * sky ** 3.0
    # a large overhead soft box, a cool strip on the left, a blue kicker at the back right (the brand's Ionwerks blue)
    sb1 = np.exp(-((d[:, 0] + 0.3) ** 2 / 0.10 + (d[:, 2] - 0.2) ** 2 / 0.22)) * (y > 0.25) * 5.0
    sb2 = np.exp(-((d[:, 2] + 0.85) ** 2 / 0.025)) * np.exp(-(y - 0.1) ** 2 / 0.25) * 1.5
    sb3 = np.exp(-((d[:, 0] - 0.85) ** 2 / 0.035)) * np.exp(-(y - 0.05) ** 2 / 0.2) * 1.3
    c = np.stack([base, base, base * 1.08], -1)
    c += sb1[:, None] * np.array([1.0, 1.0, 1.0])
    c += sb2[:, None] * np.array([0.80, 0.87, 1.0])
    c += sb3[:, None] * np.array([0.42, 0.62, 1.0])
    c *= np.where(y[:, None] < -0.05, np.array([0.22, 0.27, 0.40]), 1.0)
    cc = nrm(np.array([0.25, -0.2, 0.95]))
    sweep = np.exp(-np.sum((d - cc) ** 2, -1) / 0.12)
    c += sweep[:, None] * np.array([0.82, 0.88, 1.0]) * 1.2
    return c

def shade(p, n, rd, mid):
    r = rd - 2 * np.sum(rd * n, -1, keepdims=True) * n
    ao = np.ones(len(p))
    for k, h in enumerate([0.05, 0.14, 0.3, 0.55, 0.9]):
        ao -= (h - sdf(p + n * h)) * (0.6 / (k + 1))
    ao = np.clip(ao, 0.1, 1.0)
    sh = np.ones(len(p)); t = np.full(len(p), 0.04)
    for _ in range(40):
        d = sdf(p + n * 0.01 + KEY * t[:, None])
        sh = np.minimum(sh, np.clip(10 * d / t, 0, 1)); t += np.clip(d, 0.02, 0.6)
    sh = np.clip(sh, 0.12, 1)
    rr = np.hypot(p[:, 0], p[:, 2])
    # lathe-turned faces: the reflection lobe stretches around the turning direction
    tang = nrm(np.stack([-p[:, 2], np.zeros(len(p)), p[:, 0]], -1) + 1e-9)
    rng = np.random.default_rng(5)
    acc = np.zeros((len(p), 3)); NL = 28
    rough = np.select([mid == 0, mid == 1, mid == 2, mid == 3], [0.05, 0.55, 0.06, 0.04], 0.1)[:, None]
    for i in range(NL):
        j = rng.normal(size=(len(p), 3))
        j += tang * rng.normal(size=(len(p), 1)) * 2.2 * (mid == 0)[:, None]
        acc += env(nrm(r + j * rough))
    refl = acc / NL
    cosv = np.clip(-np.sum(rd * n, -1), 0, 1)[:, None]
    dif = np.clip(np.sum(n * KEY, -1), 0, 1)[:, None] * sh[:, None]
    st = np.array([0.66, 0.67, 0.70]); F_st = st + (1 - st) * (1 - cosv) ** 5
    col_st = F_st * refl * (0.55 + 0.45 * sh[:, None]) + st * 0.10 * dif
    turn = 1 + 0.06 * np.sin(rr * 160.0) * (np.abs(n[:, 1]) > 0.9)
    col_st *= turn[:, None]
    al = np.array([0.86, 0.85, 0.80]); F_c = 0.04 + 0.96 * (1 - cosv) ** 5
    col_ce = al * (0.05 + 0.85 * dif + 0.18 * env(n).mean(-1, keepdims=True)) + F_c * refl * 0.5
    # the microchannel plate: near-black lead glass with a faint green-gold interference sheen at grazing angles
    gl = np.array([0.035, 0.04, 0.038]); F_g = 0.045 + 0.955 * (1 - cosv) ** 5
    sheen = np.array([0.30, 0.42, 0.30]) * (1 - cosv) ** 2 * 0.25
    col_mc = gl * (0.3 + dif) + F_g * refl * np.array([0.9, 1.0, 0.95]) * 0.2 + sheen
    au = np.array([0.95, 0.72, 0.42]); F_a = au + (1 - au) * (1 - cosv) ** 5
    col_au = F_a * refl * 0.8 + au * 0.12 * dif
    col = np.where((mid == 0)[:, None], col_st, np.where((mid == 1)[:, None], col_ce, np.where((mid == 2)[:, None], col_mc, col_au)))
    return col * ao[:, None]

CAM = np.array([-17.0, 13.5, 22.0]); TGT = np.array([0.0, 1.4, 0.0]); FOV = 0.33
fw = nrm(TGT - CAM); rt = nrm(np.cross(fw, [0, 1, 0])); up = np.cross(rt, fw)

def rows(job):
    y0, y1 = job
    js, is_ = np.meshgrid(np.arange(W), np.arange(y0, y1))
    u = (js + 0.5) / W * 2 - 1; v = 1 - (is_ + 0.5) / H * 2
    u = u.ravel() * FOV * W / H; v = v.ravel() * FOV
    rd = nrm(fw[None] + u[:, None] * rt[None] + v[:, None] * up[None])
    ro = np.repeat(CAM[None], len(rd), 0)
    t = np.full(len(rd), 18.0); hit = np.zeros(len(rd), bool); act = np.arange(len(rd))
    for _ in range(300):
        if len(act) == 0: break
        d = sdf(ro[act] + rd[act] * t[act, None])
        h = d < 0.0012; hit[act[h]] = True
        t[act] += np.maximum(d, 0) * 0.6
        act = act[(~h) & (t[act] < 50)]
    out = np.zeros((len(rd), 4))
    idx = np.nonzero(hit)[0]
    if len(idx):
        p = ro[idx] + rd[idx] * t[idx, None]
        _, mid = sdf(p, True)
        n = normal(p)
        out[idx, :3] = shade(p, n, rd[idx], mid); out[idx, 3] = 1
    return out.reshape(y1 - y0, W, 4)

if __name__ == '__main__':
    step = max(1, H // (NP * 8))
    jobs = [(a, min(H, a + step)) for a in range(0, H, step)]
    with Pool(NP) as pool: parts = pool.map(rows, jobs)
    img = np.concatenate(parts, 0)
    rgb = img[..., :3]; a = img[..., 3:]
    rgb = rgb / (1 + rgb * 0.35)
    rgb = np.clip(rgb, 0, 1) ** (1 / 2.2)
    out = np.concatenate([rgb * 255, a * 255], -1).astype(np.uint8)
    im = Image.fromarray(out, 'RGBA')
    if SS != 1: im = im.resize((FW, FH), Image.LANCZOS)
    im.save(OUT); print('saved', OUT, im.size)
