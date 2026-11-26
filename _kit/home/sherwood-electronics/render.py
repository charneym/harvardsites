#!/usr/bin/env python3
"""Offline SDF ray-march render for the Sherwood Electronics hero: one bespoke cable assembly, the subject of their own
banner photo ("Bespoke Cable Assemblies": circular multi-pin connectors on a braided cable). Two circular connectors
(knurled coupling nut, nickel shell, black insert with gold contacts, back shell and boot) joined by a braided cable that
sweeps behind them. Output: RGBA png with real alpha (composited on the page ink by field.js)."""
import numpy as np, sys
from multiprocessing import Pool
from PIL import Image

W = int(sys.argv[1]) if len(sys.argv) > 1 else 420
H = int(W * 0.72)
SS = int(sys.argv[2]) if len(sys.argv) > 2 else 1
OUT = sys.argv[3] if len(sys.argv) > 3 else 'cable.png'

def nrm(v): return v / np.linalg.norm(v, axis=-1, keepdims=True)

def frame(d):
    z = nrm(np.asarray(d, float)); x = nrm(np.cross([0, 1, 0], z)); y = np.cross(z, x)
    return np.stack([x, y, z])          # rows: local axes in world coords

# connector A faces the viewer (3/4), B lies further back, turned to show its side and knurl
PA = np.array([-1.55, 0.75, 0.35]); RA = frame([-0.25, 0.2, 1.0])
PB = np.array([2.05, -0.55, -1.2]); RB = frame([0.9, 0.1, -0.45])

# contacts on the insert face: 1 + 6 + 12
PINS = [(0.0, 0.0)] + [(0.2 * np.cos(a), 0.2 * np.sin(a)) for a in np.arange(6) * np.pi / 3 + 0.3] + \
       [(0.39 * np.cos(a), 0.39 * np.sin(a)) for a in np.arange(12) * np.pi / 6 + 0.1]
PINS = np.array(PINS)
KEYW = (0.36, 0.0)                      # polarising key on the shell (local x,y direction)

def cylZ(q, r, z0, z1):
    d = np.sqrt(q[:, 0] ** 2 + q[:, 1] ** 2) - r
    h = np.abs(q[:, 2] - (z0 + z1) / 2) - (z1 - z0) / 2
    return np.sqrt(np.maximum(d, 0) ** 2 + np.maximum(h, 0) ** 2) + np.minimum(np.maximum(d, h), 0)

def coneZ(q, r0, r1, z0, z1):
    # z0 > z1 (towards the back); radius r0 at z0 to r1 at z1; slope-corrected
    t = np.clip((z0 - q[:, 2]) / (z0 - z1), 0, 1); r = r0 + (r1 - r0) * t
    k = (r0 - r1) / (z0 - z1)
    d = (np.sqrt(q[:, 0] ** 2 + q[:, 1] ** 2) - r) / np.sqrt(1 + k * k)
    h = np.abs(q[:, 2] - (z0 + z1) / 2) - (z0 - z1) / 2
    return np.sqrt(np.maximum(d, 0) ** 2 + np.maximum(h, 0) ** 2) + np.minimum(np.maximum(d, h), 0)

def connector(p, P, R):
    q = (p - P) @ R.T                   # local coords: face at z=0 facing +z
    rr = np.sqrt(q[:, 0] ** 2 + q[:, 1] ** 2); th = np.arctan2(q[:, 1], q[:, 0])
    # receptacle shell: a tube with a rounded front lip
    shell = np.maximum(cylZ(q, 0.6, -0.62, 0.0), -(cylZ(q, 0.51, -0.5, 0.2)))
    shell = shell - 0.006
    # coupling nut, knurled
    kn = rr - (0.72 + 0.014 * np.cos(30 * th))
    hz = np.abs(q[:, 2] + 0.5) - 0.24
    nut = (np.sqrt(np.maximum(kn * 0.8, 0) ** 2 + np.maximum(hz, 0) ** 2) + np.minimum(np.maximum(kn * 0.8, hz), 0)) - 0.01
    ring = cylZ(q - [0, 0, 0], 0.68, -0.82, -0.72) - 0.008
    # back shell cone and the boot
    back = coneZ(q, 0.6, 0.33, -0.74, -1.3) - 0.01
    boot = coneZ(q, 0.31, 0.2, -1.26, -1.9) - 0.012
    # insert (recessed) and contacts
    ins = cylZ(q, 0.515, -0.4, -0.1)
    pd = np.full(len(q), 9.0)
    for px, py in PINS:
        pd = np.minimum(pd, cylZ(q - [px, py, 0], 0.036, -0.1, -0.02) - 0.006)
    return dict(shell=shell, nut=nut, ring=ring, back=back, boot=boot, ins=ins, pin=pd), q

def bez(P0, P1, P2, P3, n):
    t = np.linspace(0, 1, n)[:, None]
    return (1 - t) ** 3 * P0 + 3 * (1 - t) ** 2 * t * P1 + 3 * (1 - t) * t ** 2 * P2 + t ** 3 * P3

EA = PA + RA[2] * -1.8; EB = PB + RB[2] * -1.8
CP = np.concatenate([bez(EA, EA - RA[2] * 1.0 + np.array([0.05, -1.3, 0.2]), EB - RB[2] * 1.4 + np.array([-1.5, -0.7, 0.9]), EB, 56)])
SA, SB = CP[:-1], CP[1:]; SBA = SB - SA; SL = np.sum(SBA * SBA, -1)
CR = 0.2

def cable(p):
    pa = p[:, None, :] - SA[None]; h = np.clip(np.sum(pa * SBA[None], -1) / SL[None], 0, 1)
    d = np.linalg.norm(pa - SBA[None] * h[..., None], axis=-1)
    m = np.argmin(d, 1); dm = d[np.arange(len(p)), m]
    return dm - CR, m, h[np.arange(len(p)), m]

BMIN = np.minimum(CP.min(0), np.minimum(PA, PB)) - 1.0; BMAX = np.maximum(CP.max(0), np.maximum(PA, PB)) + 1.0

def parts(p):
    A, qa = connector(p, PA, RA); B, qb = connector(p, PB, RB)
    cb, _, _ = cable(p)
    P = {k: np.minimum(A[k], B[k]) for k in A}
    P['cab'] = cb
    body = np.min(np.stack(list(P.values()), -1), -1)
    return body, P

def sdf(p): return parts(p)[0]

def normal(p):
    e = 0.0009
    ex = np.array([e, 0, 0]); ey = np.array([0, e, 0]); ez = np.array([0, 0, e])
    return nrm(np.stack([sdf(p + ex) - sdf(p - ex), sdf(p + ey) - sdf(p - ey), sdf(p + ez) - sdf(p - ez)], -1))

KEY = nrm(np.array([-0.45, 0.85, 0.5]))
RIM = nrm(np.array([0.9, 0.35, -0.55]))

def env(d):
    y = d[:, 1:2]
    t = np.clip(y * .5 + .5, 0, 1)
    base = np.array([0.012, 0.016, 0.024]) * (1 - t) + np.array([0.07, 0.08, 0.095]) * t
    k = np.clip((d @ KEY - 0.72) / 0.2, 0, 1)[:, None]; k = k * k * (3 - 2 * k)
    r = np.clip((d @ RIM - 0.84) / 0.12, 0, 1)[:, None]; r = r * r * (3 - 2 * r)
    az = np.arctan2(d[:, 2:3], d[:, 0:1])
    s1 = np.exp(-((az - 1.95) / 0.1) ** 6) * np.clip((y + 0.2) / 0.4, 0, 1) * 2.2
    s2 = np.exp(-((az - 0.35) / 0.07) ** 6) * np.clip((y + 0.1) / 0.4, 0, 1) * 1.2
    blue = np.clip((d @ nrm(np.array([0.7, -0.3, 0.6])) - 0.55) / 0.45, 0, 1)[:, None] * np.array([0.01, 0.03, 0.06])
    return base + k * np.array([3.2, 3.2, 3.25]) + r * np.array([1.6, 1.7, 1.85]) + (s1 + s2) * np.array([0.95, 0.96, 1.0]) + blue

def soft_shadow(p, l):
    res = np.ones(len(p)); t = np.full(len(p), 0.02)
    for _ in range(40):
        h = sdf(p + l * t[:, None]); res = np.minimum(res, 10 * h / t); t += np.clip(h, 0.01, 0.3)
    return np.clip(res, 0, 1)

def ao(p, n):
    occ = np.zeros(len(p)); s = 1.0
    for i in range(1, 6):
        hh = 0.02 + 0.05 * i; occ += (hh - sdf(p + n * hh)) * s; s *= 0.7
    return np.clip(1 - 1.4 * occ, 0, 1)

CAM = np.array([2.6, 3.0, 7.4]); TGT = np.array([0.15, -0.22, -0.2]); FOV = 0.168
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
    t = np.full(N, 4.0); hit = np.zeros(N, bool); alive = np.ones(N, bool)
    for _ in range(220):
        idx = np.nonzero(alive)[0]
        if len(idx) == 0: break
        p = CAM + d[idx] * t[idx, None]; dist = sdf(p); t[idx] += dist * 0.8
        h_ = dist < 0.0004; hit[idx[h_]] = True; far = t[idx] > 16; alive[idx[h_ | far]] = False
    col = np.zeros((N, 3)); alpha = hit.astype(float)
    idx = np.nonzero(hit)[0]
    if len(idx):
        p = CAM + d[idx] * t[idx, None]; dd = d[idx]
        n = normal(p)
        _, P = parts(p)
        keys = list(P.keys()); D = np.stack([P[k] for k in keys], -1); mid = np.argmin(D, -1)
        M = {k: mid == i for i, k in enumerate(keys)}
        rfl = dd - 2 * np.sum(dd * n, -1, keepdims=True) * n
        sh = soft_shadow(p + n * 0.003, KEY); occ = ao(p, n)
        ndl = np.clip(n @ KEY, 0, 1); sky = 0.5 + 0.5 * n[:, 1]
        cosv = np.clip(-np.sum(dd * n, -1), 0, 1); fr = (1 - cosv) ** 5
        diff = (0.16 + 0.84 * ndl * sh)[:, None]
        nickel = blur_env(rfl, 0.06, 10, 1) * np.array([0.78, 0.8, 0.83]) + np.array([0.05, 0.05, 0.055]) * diff
        satin = blur_env(rfl, 0.14, 10, 2) * np.array([0.62, 0.64, 0.68]) + np.array([0.04, 0.04, 0.045]) * diff
        # insert: matt black with a faint sheen; contacts: gold
        insc = np.array([0.02, 0.021, 0.024]) * diff + blur_env(rfl, 0.3, 6, 3) * (0.02 + 0.25 * fr)[:, None]
        gold = blur_env(rfl, 0.05, 8, 4) * np.array([1.2, 0.84, 0.4]) + np.array([0.16, 0.1, 0.03]) * diff
        # back shell: dark olive-drab finish (as on their banner), satin
        olive = np.array([0.05, 0.055, 0.04]) * diff + blur_env(rfl, 0.18, 8, 5) * np.array([0.22, 0.23, 0.2]) * (0.25 + 0.75 * fr)[:, None]
        rub = np.array([0.025, 0.025, 0.028]) * diff + blur_env(rfl, 0.25, 6, 6) * (0.03 + 0.3 * fr)[:, None]
        # braided sleeve: a diagonal over-under weave in bronze-olive strands
        cb, m, hh = cable(p)
        s = (m + hh) / len(SA) * 92.0
        seg = SBA[m] / np.sqrt(SL[m])[:, None]
        ref = nrm(np.cross(seg, np.array([0.3, 1.0, 0.2])[None]))
        ref2 = np.cross(seg, ref)
        c0 = SA[m] + SBA[m] * hh[:, None]; rv = p - c0
        ang = np.arctan2(np.sum(rv * ref2, -1), np.sum(rv * ref, -1))
        a1 = np.sin(ang * 8 + s * 2.2); a2 = np.sin(ang * 8 - s * 2.2)
        over = (np.floor(ang * 8 / np.pi + s * 2.2 / np.pi) + np.floor(ang * 8 / np.pi - s * 2.2 / np.pi)) % 2
        strand = np.where(over > 0.5, np.abs(a1), np.abs(a2)) ** 0.6
        braid = (np.array([0.11, 0.1, 0.065]) * (0.45 + 0.55 * strand)[:, None]) * diff + \
                blur_env(rfl, 0.2, 6, 7) * np.array([0.5, 0.46, 0.34]) * (0.1 + 0.25 * strand + 0.4 * fr)[:, None]
        mm = nickel
        mm = np.where(M['nut'][:, None], satin, mm)
        mm = np.where(M['ring'][:, None], nickel, mm)
        mm = np.where(M['ins'][:, None], insc, mm)
        mm = np.where(M['pin'][:, None], gold, mm)
        mm = np.where(M['back'][:, None], olive, mm)
        mm = np.where(M['boot'][:, None], rub, mm)
        mm = np.where(M['cab'][:, None], braid, mm)
        lit = mm * (0.3 + 0.7 * occ[:, None] ** 1.2) * (0.55 + 0.45 * sh[:, None])
        lit += np.array([0.008, 0.01, 0.014]) * sky[:, None]
        col[idx] = lit
    return col.reshape(y1 - y0, w, 3), alpha.reshape(y1 - y0, w)

if __name__ == '__main__':
    w, h = W * SS, H * SS
    step = max(4, h // 96)
    jobs = [(a, min(a + step, h), w, h) for a in range(0, h, step)]
    with Pool(4) as pl: res = pl.map(render_rows, jobs)
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
