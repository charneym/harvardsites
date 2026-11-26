#!/usr/bin/env python3
"""MTT Extrusion Expertise hero (HOME_BRIEF update 2c: a crafted render of the firm's real product). One single-flight
extruder screw, as MTT supplies them ("Schnecken und Zylinder 12 - 200 mm", mtt-germany.com and the MTT stand poster;
the screw on their own "Passion for Extrusion" brochure front): a keyed drive shank and collar, a deep-channel feed zone,
a compression zone where the root diameter rises, a shallow metering zone and a conical tip. Polished nitrided steel
with hard-faced flight lands, studio-lit, seen three-quarters with the tip toward the viewer. Sphere-traced SDF in numpy,
rendered at 2x and downsampled, saved with REAL alpha so it sits on the page ink without any box (DP/DJ)."""
import numpy as np, sys, math
from multiprocessing import Pool
from PIL import Image

W = int(sys.argv[1]) if len(sys.argv) > 1 else 480
H = int(W * 0.56)
SS = int(sys.argv[2]) if len(sys.argv) > 2 else 1
OUT = sys.argv[3] if len(sys.argv) > 3 else 'screw.png'

def nrm(v): return v / np.linalg.norm(v, axis=-1, keepdims=True)
def sm(a, b, x): x = np.clip((x - a) / (b - a), 0, 1); return x * x * (3 - 2 * x)

P = 1.7                 # pitch (square pitch: one diameter)
R = 1.0                 # flight radius
TF = 0.30                # flight land width (axial)
X0, X1 = -6.0, 5.6      # flighted length
XT = 6.0                # start of the tip
def root(x):            # feed (deep) -> compression -> metering (shallow)
    return 0.58 + 0.24 * sm(-1.6, 2.4, x)

def cylcap(r, x, rad, xa, xb, rr=0.0):
    dx = r - rad + rr
    dy = np.maximum(xa - x, x - xb) + rr
    return np.sqrt(np.maximum(dx, 0) ** 2 + np.maximum(dy, 0) ** 2) + np.minimum(np.maximum(dx, dy), 0) - rr

def parts(q):
    x, y, z = q[:, 0], q[:, 1], q[:, 2]
    r = np.sqrt(y * y + z * z)
    a = np.arctan2(z, y)
    # core: root cylinder of varying radius, closed at both ends
    core = np.maximum((r - root(x)) * 0.92, np.maximum(-6.25 - x, x - XT - 0.02))
    # tip: a cone from the metering root to a small rounded point
    tl = 1.15
    tip = np.maximum((r - 0.82 * np.clip(1 - (x - XT) / tl, 0, 1) - 0.04) * 0.75, np.maximum(XT - 0.05 - x, x - XT - tl))
    # single helical flight, land width TF, true distance scaled by the helix angle
    u = x - P * a / (2 * np.pi)
    dax = np.abs(np.mod(u + P / 2, P) - P / 2)
    rc = np.clip(r, 0.5, 1.0)
    k = (2 * np.pi * rc) / np.sqrt((2 * np.pi * rc) ** 2 + P * P)
    fl = np.maximum(r - R, dax * k - TF / 2)
    fl = np.maximum(fl, np.maximum(X0 - x, x - X1)) - 0.012
    # the flight runs out softly into the tip and the collar
    body = np.minimum(np.minimum(core, fl), tip)
    # collar and keyed drive shank
    col = cylcap(r, x, 0.99, -6.62, -6.22, 0.03)
    sh = cylcap(r, x, 0.74, -8.7, -6.6, 0.04)
    key = np.maximum(np.maximum(np.abs(z) - 0.17, 0.52 - y), np.maximum(-8.45 - x, x + 7.05))   # keyway slot on top
    sh = np.maximum(sh, -key)
    shank = np.minimum(col, sh)
    return body, shank, r, dax

def sdf(q):
    b, s, _, _ = parts(q)
    return np.minimum(b, s)

# object orientation: tip toward the viewer and slightly up to the right
def Rz(t): c, s = math.cos(t), math.sin(t); return np.array([[c, -s, 0], [s, c, 0], [0, 0, 1]])
def Ry(t): c, s = math.cos(t), math.sin(t); return np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]])
def Rx(t): c, s = math.cos(t), math.sin(t); return np.array([[1, 0, 0], [0, c, -s], [0, s, c]])
ROT = Rz(math.radians(float(sys.argv[4]) if len(sys.argv) > 4 else 14)) @ Ry(math.radians(float(sys.argv[5]) if len(sys.argv) > 5 else -55)) @ Rx(math.radians(-18))
IR = ROT.T
def world(p): return p @ IR.T          # world -> object
def W2(v): return v @ IR.T

def normal(p):
    e = 0.0015
    ex = np.array([e, 0, 0]); ey = np.array([0, e, 0]); ez = np.array([0, 0, e])
    f = lambda pp: sdf(world(pp))
    return nrm(np.stack([f(p + ex) - f(p - ex), f(p + ey) - f(p - ey), f(p + ez) - f(p - ez)], -1))

KEY = nrm(np.array([-0.35, 0.92, 0.45]))
RIM = nrm(np.array([0.85, 0.35, -0.6]))
RIM2 = nrm(np.array([-0.9, 0.25, -0.45]))
FILL = nrm(np.array([0.3, -0.25, 0.95]))
SBR = nrm(np.array([0.95, 0.1, 0.35])); SBL = nrm(np.array([-0.95, 0.05, 0.3]))

def env(d):
    y = d[:, 1:2]
    t = np.clip(y * .5 + .5, 0, 1)
    base = np.array([0.006, 0.008, 0.03]) * (1 - t) + np.array([0.03, 0.035, 0.10]) * t
    kk = np.clip((d @ KEY - 0.88) / 0.07, 0, 1)[:, None]; kk = kk * kk * (3 - 2 * kk)
    r = np.clip((d @ RIM - 0.84) / 0.12, 0, 1)[:, None]; r = r * r * (3 - 2 * r)
    r2 = np.clip((d @ RIM2 - 0.86) / 0.1, 0, 1)[:, None]; r2 = r2 * r2 * (3 - 2 * r2)
    f = np.clip((d @ FILL - 0.6) / 0.35, 0, 1)[:, None]
    # a long horizontal strip light (gives the polished flights their bright edge lines)
    band = np.exp(-((y - 0.28) / 0.05) ** 2) * np.clip(d[:, 2:3] + 0.7, 0, 1)
    # two tall side softboxes, so the flight flanks catch light
    sR = (np.clip((d @ SBR - 0.55) / 0.42, 0, 1) ** 1.6)[:, None]; sL = np.clip((d @ SBL - 0.82) / 0.1, 0, 1)[:, None]
    # a second, thin strip low in front (a floor bounce line)
    band = band + 0.55 * np.exp(-((y + 0.18) / 0.035) ** 2) * np.clip(d[:, 2:3] + 0.4, 0, 1)
    return (base + kk * np.array([2.6, 2.6, 2.6]) + r * np.array([2.0, 1.85, 0.9]) + r2 * np.array([0.9, 1.0, 1.6])
            + f * f * np.array([0.28, 0.32, 0.55]) + band * np.array([1.1, 1.12, 1.2])
            + sR * np.array([1.05, 1.07, 1.15]) + sL * np.array([0.7, 0.78, 1.05]))

def soft_shadow(p, l):
    res = np.ones(len(p)); t = np.full(len(p), 0.03)
    for _ in range(40):
        h = sdf(world(p + l * t[:, None]))
        res = np.minimum(res, 9 * h / t)
        t += np.clip(h, 0.02, 0.4)
    return np.clip(res, 0, 1)

def ao(p, n):
    occ = np.zeros(len(p)); s = 1.0
    for i in range(1, 6):
        hh = 0.03 + 0.07 * i
        occ += (hh - sdf(world(p + n * hh))) * s; s *= 0.7
    return np.clip(1 - 1.5 * occ, 0, 1)

CAM = np.array([0.0, 6.0, 15.0]); TGT = np.array([0.2, -0.1, 0.0]); FOV = 0.42
fw = nrm(TGT - CAM); rt = nrm(np.cross(fw, [0, 1, 0])); up = np.cross(rt, fw)

def blurred(rfl, sig, n=12):
    rng = np.random.default_rng(3); acc = np.zeros_like(rfl)
    for _ in range(n): acc += env(nrm(rfl + rng.normal(0, sig, rfl.shape)))
    return acc / n

def render_rows(args):
    y0, y1, w, h = args
    js, is_ = np.mgrid[y0:y1, 0:w]
    u = (is_ + 0.5) / w * 2 - 1; v = -((js + 0.5) / h * 2 - 1) * h / w
    d = nrm(fw + (u[..., None] * rt + v[..., None] * up) * FOV * 1.75).reshape(-1, 3)
    N = len(d); t = np.full(N, 10.0); hit = np.zeros(N, bool); alive = np.ones(N, bool)
    for _ in range(300):
        idx = np.nonzero(alive)[0]
        if len(idx) == 0: break
        p = CAM + d[idx] * t[idx, None]
        dist = sdf(world(p))
        t[idx] += dist * 0.7
        hh = dist < 0.0007; hit[idx[hh]] = True
        alive[idx[hh | (t[idx] > 34)]] = False
    col = np.zeros((N, 3)); alpha = hit.astype(float)
    idx = np.nonzero(hit)[0]
    if len(idx):
        p = CAM + d[idx] * t[idx, None]; dd = d[idx]
        n = normal(p)
        q = world(p)
        b, s, r, dax = parts(q)
        land = (r > 0.985) & (b < s)          # the ground flight lands (hard-faced)
        isshank = s < b
        rfl = dd - 2 * np.sum(dd * n, -1, keepdims=True) * n
        sh = soft_shadow(p + n * 0.004, KEY); occ = ao(p, n)
        ndl = np.clip(n @ KEY, 0, 1); sky = 0.5 + 0.5 * n[:, 1]
        lit = (0.4 + 0.6 * occ[:, None] ** 1.3) * (0.45 + 0.55 * sh[:, None])
        steel = (blurred(rfl, 0.02, 14) * np.array([0.78, 0.79, 0.83]) + np.array([0.03, 0.032, 0.04]) * (ndl * sh)[:, None]
                 + np.array([0.02, 0.022, 0.04]) * (sky * occ)[:, None]) * lit
        lnd = (blurred(rfl, 0.07, 14) * np.array([0.84, 0.84, 0.86]) + np.array([0.10, 0.10, 0.11]) * (ndl * sh)[:, None]) * lit
        shk = (blurred(rfl, 0.12, 14) * np.array([0.62, 0.63, 0.67]) + np.array([0.06, 0.06, 0.07]) * (ndl * sh)[:, None]) * lit
        c = np.where(land[:, None], lnd, np.where(isshank[:, None], shk, steel))
        col[idx] = c
    return col.reshape(y1 - y0, w, 3), alpha.reshape(y1 - y0, w)

if __name__ == '__main__':
    w, h = W * SS, H * SS
    step = max(8, h // 96)
    jobs = [(a, min(a + step, h), w, h) for a in range(0, h, step)]
    with Pool(4) as pl:
        res = pl.map(render_rows, jobs)
    col = np.concatenate([r[0] for r in res]); al = np.concatenate([r[1] for r in res])
    a, b, c, d_, e = 2.51, 0.03, 2.43, 0.59, 0.14
    x = col * 1.0
    rgb = np.clip((x * (a * x + b)) / (x * (c * x + d_) + e), 0, 1) ** (1 / 2.2)
    img = np.dstack([rgb * 255, al * 255]).astype(np.float32)
    if SS > 1:
        pm = img.copy(); pm[..., :3] *= al[..., None]
        pm = pm.reshape(H, SS, W, SS, 4).mean((1, 3))
        aa = pm[..., 3:4] / 255
        pm[..., :3] = np.where(aa > 0, pm[..., :3] / np.maximum(aa, 1e-6), 0)
        img = pm
    Image.fromarray(np.clip(img, 0, 255).astype(np.uint8), 'RGBA').save(OUT)
    print('wrote', OUT, img.shape)
