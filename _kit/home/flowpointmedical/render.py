#!/usr/bin/env python3
"""Flowpoint Medical hero (HOME_BRIEF update 2c: a crafted render of the real product). The implantable needle guide for
hemodialysis access, as on flowpointmedical.com (image01) and in the inventors' application US 2024/0238575 A1 (Azeloglu,
Lima; Icahn School of Medicine at Mount Sinai): an elongated 3D-printed titanium body (about 23 x 6 x 7 mm) with square
fenestrations for tissue ingrowth, a gold titanium-nitride valve seated on top, a slanted needle channel, and end flanges
with suture holes. Numpy sphere tracing of a signed-distance model, glossy metal shading against a studio environment.
Saved with ALPHA (no ground of its own, DJ). Usage: python3 render.py W H out.png [SS] [procs]"""
import sys, numpy as np
from multiprocessing import Pool
from PIL import Image

W = int(sys.argv[1]) if len(sys.argv) > 1 else 640
H = int(sys.argv[2]) if len(sys.argv) > 2 else 420
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = float(sys.argv[4]) if len(sys.argv) > 4 else 1.0
NP = int(sys.argv[5]) if len(sys.argv) > 5 else 4
FW, FH = W, H; W, H = int(W * SS), int(H * SS)

def nrm(v): return v / np.linalg.norm(v, axis=-1, keepdims=True)

def rbox(p, b, r):
    q = np.abs(p) - (np.array(b) - r)
    return np.linalg.norm(np.maximum(q, 0), axis=-1) + np.minimum(np.max(q, axis=-1), 0) - r

L, WD, HT = 11.5, 3.1, 3.4      # half extents (mm): length, width, height
T = 0.62                        # wall
P, A = 1.18, 0.40               # fenestration pitch, half hole
VC = np.array([5.2, HT + 0.32, 0.0])  # valve centre

def holes2(u, v, ulim, vlim, off_u=0.0, off_v=0.0):
    qu = np.mod(u + off_u + P / 2, P) - P / 2
    qv = np.mod(v + off_v + P / 2, P) - P / 2
    h = np.maximum(np.abs(qu), np.abs(qv)) - A
    return np.maximum(h, np.maximum(np.abs(u) - ulim, np.abs(v) - vlim))

CH_O = np.array([-5.6, HT, 0.0]); CH_D = nrm(np.array([0.82, -0.57, 0.0]))

def sdf(p, want_id=False):
    x, y, z = p[:, 0], p[:, 1], p[:, 2]
    outer = rbox(p, (L, HT, WD), 1.05)
    inner = rbox(p, (L - T, HT - T, WD - T), 0.45)
    body = np.maximum(outer, -inner)
    hz = holes2(x, y, L - 1.25, HT - 1.15, P / 2, P / 2)          # through the long sides
    hy = holes2(x, z, L - 1.25, WD - 1.0, P / 2, 0.0)              # top and bottom
    hy = np.maximum(hy, -(np.abs(x - VC[0]) - 2.9))                # top is solid under the valve seat
    hy = np.where(y > 0, np.maximum(hy, -(np.abs(x - VC[0]) - 2.9)), hy)
    hx = holes2(y, z, HT - 1.15, WD - 1.0, P / 2, 0.0)             # end faces
    body = np.maximum(body, -np.minimum(np.minimum(hz, hy), hx))
    # slanted needle channel, a collar where it enters the top
    rel = p - CH_O; t = rel @ CH_D; perp = np.linalg.norm(rel - t[:, None] * CH_D, axis=-1)
    chan = perp - 1.05
    collar = np.maximum(perp - 1.55, np.abs(rel @ np.array([0, 1.0, 0]) + 0.05) - 0.55)
    collar = np.maximum(collar, -chan)
    body = np.minimum(body, collar)
    body = np.maximum(body, -chan)
    # end flanges with suture holes
    fq = p.copy(); fq[:, 0] = np.abs(x) - (L + 1.15); fq[:, 1] = y + HT - 0.33
    fl = rbox(fq, (1.45, 0.33, WD - 0.25), 0.3)
    sh = np.linalg.norm(np.stack([fq[:, 0] - 0.25, np.abs(z) - 1.35], -1), axis=-1) - 0.48
    fl = np.maximum(fl, -sh)
    ti = np.minimum(body, fl)
    # gold TiN valve: a rounded block with a shallow cam ramp toward the channel
    vp = p - VC
    valve = rbox(vp, (2.55, 0.42, 2.25), 0.32)
    ramp = (vp[:, 1] - 0.42) + 0.35 * np.clip(-(vp[:, 0] + 0.6) / 2.0, 0, 1)
    valve = np.maximum(valve, ramp)
    valve = np.minimum(valve, rbox(vp - np.array([0, -0.55, 0]), (2.2, 0.3, 1.9), 0.2))
    d = np.minimum(ti, valve)
    if want_id: return d, (valve < ti).astype(np.int8)
    return d

def normal(p):
    e = 0.004; out = np.zeros_like(p)
    for i in range(3):
        o = np.zeros(3); o[i] = e
        out[:, i] = sdf(p + o) - sdf(p - o)
    return nrm(out)

KEY = nrm(np.array([-0.45, 0.85, 0.35]))
def env(d):
    y = d[:, 1]
    sky = np.clip(y * 0.5 + 0.5, 0, 1)
    base = 0.015 + 0.32 * sky ** 3.0
    # soft boxes: a large overhead panel and a cool strip at the left, a warm kicker at the back right
    sb1 = np.exp(-((d[:, 0] + 0.35) ** 2 / 0.09 + (d[:, 2] - 0.25) ** 2 / 0.20)) * (y > 0.2) * 5.0
    sb2 = np.exp(-((d[:, 2] + 0.85) ** 2 / 0.02)) * np.exp(-(y - 0.1) ** 2 / 0.25) * 1.6
    sb3 = np.exp(-((d[:, 0] - 0.85) ** 2 / 0.03)) * np.exp(-(y - 0.05) ** 2 / 0.2) * 1.1
    c = np.stack([base, base, base], -1)
    c += sb1[:, None] * np.array([1.0, 1.0, 1.0])
    c += sb2[:, None] * np.array([0.78, 0.86, 1.0])
    c += sb3[:, None] * np.array([1.0, 0.92, 0.82])
    c *= np.where(y[:, None] < -0.05, np.array([0.30, 0.34, 0.46]), 1.0)   # the ink ground below, faintly blue
    # a long bounce card low in front, so the long side carries a sweep of light instead of a flat grey
    cc = nrm(np.array([0.2, -0.28, 0.94]))
    dd = np.sum((d - cc) ** 2, -1)
    sweep = np.exp(-dd / 0.10) * (0.6 + 0.4 * np.tanh((d[:, 0] - 0.1) * 4))
    c += sweep[:, None] * np.array([0.82, 0.88, 1.0]) * 1.5
    return c

def shade(p, n, rd, mid):
    r = rd - 2 * np.sum(rd * n, -1, keepdims=True) * n
    # ambient occlusion
    ao = np.ones(len(p))
    for k, h in enumerate([0.08, 0.2, 0.38, 0.65, 1.0]):
        ao -= (h - sdf(p + n * h)) * (0.55 / (k + 1))
    ao = np.clip(ao, 0.08, 1.0)
    # soft shadow toward the key
    sh = np.ones(len(p)); t = np.full(len(p), 0.05)
    for _ in range(40):
        d = sdf(p + n * 0.01 + KEY * t[:, None])
        sh = np.minimum(sh, np.clip(9 * d / t, 0, 1)); t += np.clip(d, 0.03, 0.5)
    sh = np.clip(sh, 0.15, 1)
    # glossy reflection: average a few jittered lobes (3D-printed titanium is satin, the TiN valve smoother)
    rng = np.random.default_rng(3)
    acc = np.zeros((len(p), 3)); NL = 6
    for i in range(NL):
        j = rng.normal(size=(len(p), 3))
        rough = np.where(mid[:, None] == 1, 0.07, 0.17)
        acc += env(nrm(r + j * rough))
    refl = acc / NL
    ti = np.array([0.66, 0.67, 0.70]); au = np.array([1.0, 0.71, 0.29])
    f0 = np.where(mid[:, None] == 1, au, ti)
    cosv = np.clip(-np.sum(rd * n, -1), 0, 1)[:, None]
    F = f0 + (1 - f0) * (1 - cosv) ** 5
    dif = np.clip(np.sum(n * KEY, -1), 0, 1)[:, None] * sh[:, None]
    col = F * refl * (0.55 + 0.45 * sh[:, None]) + f0 * 0.16 * dif + f0 * 0.02
    # grain of the printed surface
    g = np.sin(p[:, 0] * 41.0) * np.sin(p[:, 1] * 37.0 + 1.3) * np.sin(p[:, 2] * 43.0 + 0.7)
    col *= (1 + np.where(mid == 1, 0.0, 0.05 * g))[:, None]
    return col * ao[:, None]

CAM = np.array([-21.0, 13.0, 23.0]); TGT = np.array([0.4, -0.4, 0.0]); FOV = 0.33
fw = nrm(TGT - CAM); rt = nrm(np.cross(fw, [0, 1, 0])); up = np.cross(rt, fw)

def rows(job):
    y0, y1 = job
    js, is_ = np.meshgrid(np.arange(W), np.arange(y0, y1))
    u = (js + 0.5) / W * 2 - 1; v = 1 - (is_ + 0.5) / H * 2
    u = u.ravel() * FOV * W / H; v = v.ravel() * FOV
    rd = nrm(fw[None] + u[:, None] * rt[None] + v[:, None] * up[None])
    ro = np.repeat(CAM[None], len(rd), 0)
    t = np.full(len(rd), 20.0); hit = np.zeros(len(rd), bool); act = np.arange(len(rd))
    for _ in range(260):
        if len(act) == 0: break
        d = sdf(ro[act] + rd[act] * t[act, None])
        h = d < 0.0015; hit[act[h]] = True
        t[act] += np.maximum(d, 0) * 0.62
        act = act[(~h) & (t[act] < 60)]
    out = np.zeros((len(rd), 4))
    idx = np.nonzero(hit)[0]
    if len(idx):
        p = ro[idx] + rd[idx] * t[idx, None]
        _, mid = sdf(p, True)
        n = normal(p)
        out[idx, :3] = shade(p, n, rd[idx], mid); out[idx, 3] = 1
    return out.reshape(y1 - y0, W, 4)

if __name__ == '__main__':
    step = max(1, H // (NP * 6))
    jobs = [(a, min(H, a + step)) for a in range(0, H, step)]
    with Pool(NP) as pool: parts = pool.map(rows, jobs)
    img = np.concatenate(parts, 0)
    rgb = img[..., :3]; a = img[..., 3:]
    rgb = rgb / (1 + rgb * 0.35)                      # gentle tone map
    rgb = np.clip(rgb, 0, 1) ** (1 / 2.2)
    out = np.concatenate([rgb * 255, a * 255], -1).astype(np.uint8)
    im = Image.fromarray(out, 'RGBA')
    if SS != 1: im = im.resize((FW, FH), Image.LANCZOS)
    im.save(OUT); print('saved', OUT, im.size)
