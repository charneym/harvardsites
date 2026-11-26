#!/usr/bin/env python3
"""Offline SDF ray-march render of the principle behind Dr. Eschke's CT3xx in-circuit and functional testers (dr-eschke.de:
"In-Circuit-Tester", "Funktionstester", CT350 Comet T "ICT-Testpunkte max. 2736", "schneller Adapter-Kassettenwechsel"):
a populated circuit board (green solder mask, a QFP chip, SMD parts, an electrolytic capacitor) and above it a probe
head (anodised plate) whose gold spring-contact probes touch the board's test pads. Output: RGBA png with real alpha."""
import numpy as np, sys
from multiprocessing import Pool
from PIL import Image

W = int(sys.argv[1]) if len(sys.argv) > 1 else 420
H = int(W * 0.86)
SS = int(sys.argv[2]) if len(sys.argv) > 2 else 1
OUT = sys.argv[3] if len(sys.argv) > 3 else 'pcb.png'

def nrm(v): return v / np.linalg.norm(v, axis=-1, keepdims=True)
def box(p, c, b, r=0.0):
    q = np.abs(p - np.asarray(c)) - (np.asarray(b) - r)
    return np.linalg.norm(np.maximum(q, 0), axis=-1) + np.minimum(q.max(-1), 0) - r
def cylY(p, c, r, y0, y1):
    d = np.sqrt((p[:, 0] - c[0]) ** 2 + (p[:, 2] - c[1]) ** 2) - r
    h = np.abs(p[:, 1] - (y0 + y1) / 2) - (y1 - y0) / 2
    return np.sqrt(np.maximum(d, 0) ** 2 + np.maximum(h, 0) ** 2) + np.minimum(np.maximum(d, h), 0)

BT = 0.04                                   # board top
IC = np.array([-0.55, 0.0, 0.05]); ICH = 0.34
# probes: two rows of test pads in front-right of the chip
PROBES = [(x, z) for z in (0.42, 0.66) for x in (0.18, 0.42, 0.66, 0.90, 1.14)]
PR = 0.032; PY0 = 0.47; PLATE_Y = 1.16
CHIPS = [(-1.25, 0.70, 0), (-1.25, 0.40, 0), (-1.25, -0.6, 1), (0.25, -0.15, 1), (0.6, -0.15, 1), (0.95, -0.15, 1),
         (-0.1, 0.72, 0), (1.35, 0.15, 0)]
CAP = (0.85, -0.68); CAPR = 0.2

def parts(p):
    x, y, z = p[:, 0], p[:, 1], p[:, 2]
    board = box(p, (0, 0, 0), (1.65, BT, 1.15), 0.008)
    # QFP body and gull-wing leads (domain repetition along each side)
    ic = box(p, (IC[0], 0.105, IC[2]), (ICH, 0.05, ICH), 0.012)
    lx, lz = x - IC[0], z - IC[2]
    pit = 0.068
    def leads(a, b):  # a along the side, b across it
        ra = np.mod(a + pit / 2, pit) - pit / 2
        q = np.stack([np.abs(b) - (ICH + 0.045), y - 0.062, ra], -1)
        d = box(q, (0, 0, 0), (0.05, 0.011, 0.013))
        return np.maximum(d, np.abs(a) - (ICH - 0.04))
    ld = np.minimum(leads(lz, lx), leads(lx, lz))
    # small SMD chips (resistors / ceramic caps)
    ch = np.full(len(p), 9.0)
    for cx, cz, o in CHIPS:
        bb = (0.1, 0.035, 0.05) if o == 0 else (0.05, 0.035, 0.1)
        ch = np.minimum(ch, box(p, (cx, BT + 0.035, cz), bb, 0.006))
    # electrolytic capacitor with a pressed bead near the top
    cap = cylY(p, CAP, CAPR, BT, BT + 0.42) - 0.0
    bead = np.sqrt((np.sqrt((x - CAP[0]) ** 2 + (z - CAP[1]) ** 2) - CAPR) ** 2 + (y - (BT + 0.34)) ** 2) - 0.012
    cap = np.maximum(cap, -bead)
    # pin header (connector) along the back edge
    hd = box(p, (-0.2, BT + 0.06, -0.92), (0.62, 0.06, 0.07), 0.006)
    # probe head: an anodised plate, the gold barrels, steel plungers and pointed tips
    plate = box(p, (0.66, PLATE_Y + 0.07, 0.54), (0.74, 0.07, 0.30), 0.012)
    plate = np.minimum(plate, np.minimum(cylY(p, (-0.02, 0.54), 0.05, BT, PLATE_Y + 0.02), cylY(p, (1.34, 0.54), 0.05, BT, PLATE_Y + 0.02)))
    bar = np.full(len(p), 9.0); plu = np.full(len(p), 9.0)
    for px, pz in PROBES:
        bar = np.minimum(bar, cylY(p, (px, pz), PR, PY0, PLATE_Y))
        bar = np.minimum(bar, cylY(p, (px, pz), PR + 0.012, PY0, PY0 + 0.035) - 0.003)
        r = np.sqrt((x - px) ** 2 + (z - pz) ** 2)
        pl = cylY(p, (px, pz), 0.015, BT + 0.07, PY0)
        tip = np.maximum(r - (y - BT - 0.003) * 0.24, np.maximum(y - (BT + 0.075), BT + 0.003 - y))
        plu = np.minimum(plu, np.minimum(pl, tip))
    comp = np.minimum(np.minimum(ic, ld), np.minimum(ch, np.minimum(cap, hd)))
    probe = np.minimum(plate, np.minimum(bar, plu))
    body = np.minimum(np.minimum(board, comp), probe)
    return body, dict(board=board, ic=ic, ld=ld, ch=ch, cap=cap, hd=hd, plate=plate, bar=bar, plu=plu)

def sdf(p): return parts(p)[0]

def normal(p):
    e = 0.0009
    ex = np.array([e, 0, 0]); ey = np.array([0, e, 0]); ez = np.array([0, 0, e])
    return nrm(np.stack([sdf(p + ex) - sdf(p - ex), sdf(p + ey) - sdf(p - ey), sdf(p + ez) - sdf(p - ez)], -1))

KEY = nrm(np.array([-0.5, 0.85, 0.45]))
RIM = nrm(np.array([0.9, 0.4, -0.5]))

def env(d):
    y = d[:, 1:2]
    t = np.clip(y * .5 + .5, 0, 1)
    base = np.array([0.012, 0.016, 0.024]) * (1 - t) + np.array([0.07, 0.08, 0.095]) * t
    k = np.clip((d @ KEY - 0.72) / 0.2, 0, 1)[:, None]; k = k * k * (3 - 2 * k)
    r = np.clip((d @ RIM - 0.84) / 0.12, 0, 1)[:, None]; r = r * r * (3 - 2 * r)
    az = np.arctan2(d[:, 2:3], d[:, 0:1])
    s1 = np.exp(-((az - 1.95) / 0.1) ** 6) * np.clip((y + 0.2) / 0.4, 0, 1) * 2.2
    s2 = np.exp(-((az - 0.35) / 0.07) ** 6) * np.clip((y + 0.1) / 0.4, 0, 1) * 1.2
    blue = np.clip((d @ nrm(np.array([0.7, -0.3, 0.6])) - 0.55) / 0.45, 0, 1)[:, None] * np.array([0.01, 0.025, 0.05])
    return base + k * np.array([3.2, 3.2, 3.25]) + r * np.array([1.6, 1.7, 1.85]) + (s1 + s2) * np.array([0.95, 0.96, 1.0]) + blue

def soft_shadow(p, l):
    res = np.ones(len(p)); t = np.full(len(p), 0.015)
    for _ in range(48):
        h = sdf(p + l * t[:, None]); res = np.minimum(res, 12 * h / t); t += np.clip(h, 0.006, 0.2)
    return np.clip(res, 0, 1)

def ao(p, n):
    occ = np.zeros(len(p)); s = 1.0
    for i in range(1, 6):
        hh = 0.015 + 0.045 * i; occ += (hh - sdf(p + n * hh)) * s; s *= 0.7
    return np.clip(1 - 1.6 * occ, 0, 1)

CAM = np.array([2.9, 2.75, 5.3]); TGT = np.array([0.05, 0.36, 0.05]); FOV = 0.185
fw = nrm(TGT - CAM); rt = nrm(np.cross(fw, [0, 1, 0])); up = np.cross(rt, fw)

def blur_env(rfl, sig, n, seed):
    rng = np.random.default_rng(seed); acc = np.zeros_like(rfl)
    for _ in range(n): acc += env(nrm(rfl + rng.normal(0, sig, rfl.shape)))
    return acc / n

def render_rows(args):
    y0, y1, w, h = args
    js, is_ = np.mgrid[y0:y1, 0:w]
    u = (is_ + 0.5) / w * 2 - 1; v = -((js + 0.5) / h * 2 - 1) * h / w
    d = nrm(fw + (u[..., None] * rt + v[..., None] * up) * FOV * 1.75).reshape(-1, 3); N = len(d)
    t = np.full(N, 3.0); hit = np.zeros(N, bool); alive = np.ones(N, bool)
    for _ in range(260):
        idx = np.nonzero(alive)[0]
        if len(idx) == 0: break
        p = CAM + d[idx] * t[idx, None]; dist = sdf(p); t[idx] += dist * 0.85
        h_ = dist < 0.0003; hit[idx[h_]] = True; far = t[idx] > 16; alive[idx[h_ | far]] = False
    col = np.zeros((N, 3)); alpha = hit.astype(float)
    idx = np.nonzero(hit)[0]
    if len(idx):
        p = CAM + d[idx] * t[idx, None]; dd = d[idx]; x, y, z = p[:, 0], p[:, 1], p[:, 2]
        n = normal(p)
        _, P = parts(p)
        keys = list(P.keys()); D = np.stack([P[k] for k in keys], -1); mid = np.argmin(D, -1)
        M = {k: mid == i for i, k in enumerate(keys)}
        rfl = dd - 2 * np.sum(dd * n, -1, keepdims=True) * n
        sh = soft_shadow(p + n * 0.002, KEY); occ = ao(p, n)
        ndl = np.clip(n @ KEY, 0, 1); sky = 0.5 + 0.5 * n[:, 1]
        cosv = np.clip(-np.sum(dd * n, -1), 0, 1)
        fr = (1 - cosv) ** 5
        diff = (0.18 + 0.82 * ndl * sh)[:, None]
        # --- solder mask: deep green, with lighter copper traces beneath it, gold test pads and white silkscreen
        top = (y > BT - 0.004)
        rr = lambda px, pz: np.sqrt((x - px) ** 2 + (z - pz) ** 2)
        pad = np.zeros(len(p), bool)
        for px, pz in PROBES: pad |= rr(px, pz) < 0.052
        for cx, cz, o in CHIPS:
            ex = (0.085, 0.0) if o == 0 else (0.0, 0.085)
            for sgn in (-1, 1):
                pad |= (np.abs(x - cx - sgn * ex[0]) < (0.03 if o == 0 else 0.055)) & (np.abs(z - cz - sgn * ex[1]) < (0.055 if o == 0 else 0.03))
        pad &= top
        # traces: from each pad row toward the chip, and a bus along the board
        tr = np.zeros(len(p), bool)
        for px, pz in PROBES:
            tr |= (np.abs(x - px) < 0.012) & (z < pz) & (z > -0.1 + 0.05 * px)
        tr |= (np.abs(z + 0.1 - 0.05 * x) < 0.012) & (x > -0.15) & (x < 1.2)
        tr |= (np.abs(z - 0.9) < 0.012) & (x > -1.5) & (x < 1.5)
        tr |= (np.abs(x - 1.5) < 0.012) & (z > -0.9) & (z < 0.9)
        for k in range(6): tr |= (np.abs(x - (-1.45 + 0.07 * k)) < 0.01) & (z > -0.1) & (z < 0.95) & (x < IC[0] - ICH - 0.12)
        tr &= top
        via = np.zeros(len(p), bool)
        for vx, vz in [(-0.05, 0.25), (0.15, 0.95), (1.45, -0.5), (-1.05, -0.35), (-0.9, 0.7), (0.4, 0.95), (1.25, -0.55)]:
            via |= rr(vx, vz) < 0.028
        via &= top
        silk = top & (((np.abs(np.maximum(np.abs(x - IC[0]), np.abs(z - IC[2])) - (ICH + 0.15)) < 0.006)) |
                      ((np.abs(rr(*CAP) - CAPR - 0.05) < 0.006)))
        mask_base = np.array([0.012, 0.075, 0.04])
        mask_base = np.where(tr[:, None], np.array([0.03, 0.13, 0.06]), mask_base)
        mask_spec = blur_env(rfl, 0.06, 8, 3) * (0.04 + 0.6 * fr)[:, None]
        maskc = mask_base * diff + mask_spec
        maskc = np.where(silk[:, None], np.array([0.62, 0.64, 0.62]) * diff, maskc)
        gold = blur_env(rfl, 0.05, 8, 4) * np.array([1.0, 0.72, 0.36]) * (0.55 + 0.45 * fr)[:, None]
        maskc = np.where((pad | via)[:, None], (gold + np.array([0.2, 0.13, 0.04]) * diff) * (0.6 + 0.4 * sh[:, None]), maskc)
        sideb = np.array([0.08, 0.1, 0.07]) * diff  # board edge (FR4)
        boardc = np.where(top[:, None], maskc, sideb)
        # --- QFP epoxy: near-black, slightly satin; a faint pin-1 dot
        epo = np.array([0.025, 0.026, 0.03]) * diff + blur_env(rfl, 0.2, 6, 5) * (0.03 + 0.25 * fr)[:, None]
        dot = (np.sqrt((x - (IC[0] - ICH + 0.08)) ** 2 + (z - (IC[2] + ICH - 0.08)) ** 2) < 0.03) & (y > 0.15)
        epo = np.where(dot[:, None], epo * 0.4 + np.array([0.04, 0.04, 0.045]), epo)
        tin = blur_env(rfl, 0.07, 8, 6) * np.array([0.82, 0.84, 0.86])
        # --- chips: ceramic body with tinned end caps
        chipc = np.zeros((len(p), 3)); endcap = np.zeros(len(p), bool)
        for cx, cz, o in CHIPS:
            a = np.abs(x - cx) if o == 0 else np.abs(z - cz)
            near = (np.abs(x - cx) < 0.12) & (np.abs(z - cz) < 0.12)
            endcap |= near & (a > 0.07)
        cer = np.array([0.16, 0.12, 0.075]) * diff + blur_env(rfl, 0.15, 4, 7) * (0.02 + 0.2 * fr)[:, None]
        chipc = np.where(endcap[:, None], tin, cer)
        # --- electrolytic can: brushed aluminium with a dark sleeve band
        alu = blur_env(rfl, 0.12, 8, 8) * np.array([0.8, 0.82, 0.86])
        sleeve = (y < BT + 0.31) & (y > BT + 0.02)
        stripe = sleeve & (np.arctan2(z - CAP[1], x - CAP[0]) > 0.9) & (np.arctan2(z - CAP[1], x - CAP[0]) < 1.6)
        capc = np.where(sleeve[:, None], np.array([0.03, 0.05, 0.12]) * diff + blur_env(rfl, 0.1, 4, 9) * (0.05 + 0.4 * fr)[:, None], alu)
        capc = np.where(stripe[:, None], np.array([0.35, 0.38, 0.42]) * diff, capc)
        # --- header: black plastic
        hdc = np.array([0.03, 0.03, 0.035]) * diff + blur_env(rfl, 0.25, 4, 10) * (0.02 + 0.2 * fr)[:, None]
        # --- plate: dark anodised aluminium with a fine brushed sheen
        platec = blur_env(rfl, 0.09, 16, 11) * np.array([0.16, 0.18, 0.22]) * (0.6 + 0.4 * fr)[:, None] + np.array([0.025, 0.028, 0.035]) * diff
        # --- probes: gold barrels, steel plungers
        barc = blur_env(rfl, 0.05, 10, 12) * np.array([1.25, 0.88, 0.42]) + np.array([0.16, 0.1, 0.03]) * diff
        pluc = blur_env(rfl, 0.04, 8, 13) * np.array([0.95, 0.95, 0.95]) + np.array([0.06, 0.06, 0.06]) * diff
        m = boardc
        m = np.where(M['ic'][:, None], epo, m); m = np.where(M['ld'][:, None], tin * (0.4 + 0.6 * sh[:, None]), m)
        m = np.where(M['ch'][:, None], chipc, m); m = np.where(M['cap'][:, None], capc, m)
        m = np.where(M['hd'][:, None], hdc, m); m = np.where(M['plate'][:, None], platec, m)
        m = np.where(M['bar'][:, None], barc, m); m = np.where(M['plu'][:, None], pluc, m)
        lit = m * (0.3 + 0.7 * occ[:, None] ** 1.2) * np.where(M['board'][:, None], 1.0, (0.45 + 0.55 * sh[:, None]))
        lit += np.array([0.01, 0.012, 0.016]) * sky[:, None]
        col[idx] = lit
    return col.reshape(y1 - y0, w, 3), alpha.reshape(y1 - y0, w)

if __name__ == '__main__':
    w, h = W * SS, H * SS
    step = max(8, h // 64)
    jobs = [(a, min(a + step, h), w, h) for a in range(0, h, step)]
    with Pool(8) as pl: res = pl.map(render_rows, jobs)
    col = np.concatenate([r[0] for r in res]); al = np.concatenate([r[1] for r in res])
    a, b, c, d_, e = 2.51, 0.03, 2.43, 0.59, 0.14
    x = col * 1.7
    rgb = np.clip((x * (a * x + b)) / (x * (c * x + d_) + e), 0, 1) ** (1 / 2.2)
    img = np.dstack([rgb * 255, al * 255]).astype(np.float32)
    if SS > 1:
        pm = img.copy(); pm[..., :3] *= al[..., None]
        pm = pm.reshape(H, SS, W, SS, 4).mean((1, 3)); aa = pm[..., 3:4] / 255
        pm[..., :3] = np.where(aa > 0, pm[..., :3] / np.maximum(aa, 1e-6), 0); img = pm
    Image.fromarray(np.clip(img, 0, 255).astype(np.uint8), 'RGBA').save(OUT)
    print('wrote', OUT, img.shape)
