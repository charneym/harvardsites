#!/usr/bin/env python3
"""PAX Therapeutics hero: a crafted render of the real subject, a healthy tendon (HOME_BRIEF update 2c).
A tendon is a rope of fascicles, each a bundle of aligned Type 1 collagen fibrils with a fine wave (the "crimp"), the
tissue PAX-001 is designed to restore (paxtherapeutics.com: "the desired Type 1 collagen ... from the beginning of
healing"). Seven fascicles twist gently around each other along an S-curve that echoes the swoosh in the PAX logo.
Fibrils are pearl/ivory; a warm amber key and a violet rim come from the logo gradient. Numpy z-buffered splat
rasteriser (sphere splats dense enough to read as tubes), depth-based occlusion, 2x supersampling, real alpha; both
ends of the bundle fade out softly so no edge or cut is visible (DJ, DT). Usage: python3 render.py out.webp [W]"""
import sys, math
import numpy as np
from PIL import Image, ImageFilter
OUT = sys.argv[1] if len(sys.argv) > 1 else 'hero.webp'
OW = int(sys.argv[2]) if len(sys.argv) > 2 else 1150
AR = 1.12                      # height / width
SS = 2
W, H = OW * SS, int(OW * AR) * SS
rng = np.random.default_rng(7)

# centre line: a soft S from lower left to upper right (like the logo swoosh), in image units 0..1
def centre(s):
    x = 0.10 + 0.80 * s
    y = 0.5 + 0.40 * np.tanh(3.4 * (s - 0.5)) / np.tanh(1.7)
    return np.stack([x * W, y * H], -1)
NS = 1500
s = np.linspace(0, 1, NS)
C = centre(s)
T = np.gradient(C, axis=0); T /= np.linalg.norm(T, axis=1, keepdims=True)
N = np.stack([-T[:, 1], T[:, 0]], -1)           # in-plane normal (the "b" axis is toward the viewer)

R = 0.085 * W                                    # tendon radius
twist = 2.2 * np.pi                              # total twist of fascicles along the length
FAS = [(0, 0)] + [(0.62, a) for a in np.linspace(0, 2 * np.pi, 7)[:-1]]
fasr = 0.36                                      # fascicle radius relative to R
fibr = 0.0046 * W                                # fibril radius (px)

zbuf = np.full((H, W), -1e9, np.float32)
col = np.zeros((H, W, 3), np.float32)
alp = np.zeros((H, W), np.float32)

# key light (upper left, warm white), fill, rims
Lk = np.array([-0.62, -0.50, 0.60]); Lk /= np.linalg.norm(Lk)
Vv = np.array([0, 0, 1.0])
Hk = (Lk + Vv); Hk /= np.linalg.norm(Hk)
base = np.array([1.0, 0.96, 0.91])             # pearl ivory
amber = np.array([0.95, 0.62, 0.36])
violet = np.array([0.56, 0.42, 0.78])

# precompute a splat stamp
rs = int(math.ceil(fibr)) + 1
yy, xx = np.mgrid[-rs:rs + 1, -rs:rs + 1].astype(np.float32)
dd = (xx ** 2 + yy ** 2) / fibr ** 2
mask = dd < 1
nz = np.sqrt(np.clip(1 - dd, 0, 1))
nx, ny = xx / fibr, yy / fibr

fibs = []
fph = {a: rng.uniform(0, 2 * np.pi) for (_, a) in FAS}
for (fr, fa) in FAS:
    n = 64 if fr == 0 else 56
    # fibrils packed in the fascicle disk (sunflower)
    k = np.arange(n) + 0.5
    rr = np.sqrt(k / n) * 0.92
    th = k * np.pi * (3 - np.sqrt(5))
    for r1, t1 in zip(rr, th):
        fibs.append((fr, fa, r1, t1, fph[fa] + rng.uniform(-0.5, 0.5), rng.uniform(0.97, 1.03)))

step = 1  # sample stride along the centre line (dense enough at 2x)
idx = np.arange(0, NS, step)
for (fr, fa, r1, t1, ph, cs) in fibs:
    ss = s[idx]
    ang = fa + twist * ss
    # fascicle centre offset in (N, Z), then fibril offset inside fascicle (slight own twist)
    oN = fr * R * np.cos(ang); oZ = fr * R * np.sin(ang)
    a2 = t1 + 0.6 * twist * ss
    oN += fasr * R * r1 * np.cos(a2); oZ += fasr * R * r1 * np.sin(a2)
    # crimp: a fine wave along each fibril
    crimp = 0.0011 * W * np.sin(ss * 2 * np.pi * 34 * cs + ph)
    # ends fan out a little and fade
    fan = 1 + 0.35 * (np.clip(0.12 - ss, 0, 1) / 0.12) ** 2 + 0.35 * (np.clip(ss - 0.88, 0, 1) / 0.12) ** 2
    P = C[idx] + N[idx] * ((oN * fan) + crimp)[:, None]
    Z = oZ * fan
    fade = np.clip(ss / 0.16, 0, 1) ** 1.6 * np.clip((1 - ss) / 0.16, 0, 1) ** 1.6
    depth = np.clip((Z / R + 1) / 2, 0, 1)
    MN = (oN * fan + crimp) / (R * 1.05); MZ = Z / (R * 1.05)   # bundle-scale (macro) normal          # 0 back .. 1 front
    for j in range(len(idx)):
        if fade[j] <= 0.004: continue
        cx, cy = P[j]; ix, iy = int(round(cx)), int(round(cy))
        x0, y0 = ix - rs, iy - rs
        if x0 < 0 or y0 < 0 or x0 + 2 * rs + 1 > W or y0 + 2 * rs + 1 > H: continue
        zz = Z[j] + nz * fibr
        sub = zbuf[y0:y0 + 2 * rs + 1, x0:x0 + 2 * rs + 1]
        m = mask & (zz > sub)
        if not m.any(): continue
        # shading: rotate the sphere normal so tubes read along the tangent (approx: flatten along T)
        tx, ty = T[idx[j]]
        along = nx * tx + ny * ty
        px_, py_ = nx - along * tx * 0.85, ny - along * ty * 0.85
        nrm = np.stack([px_, py_, nz + 0.25], -1)
        nrm /= np.linalg.norm(nrm, axis=-1, keepdims=True)
        mn = np.array([N[idx[j], 0] * MN[j], N[idx[j], 1] * MN[j], max(MZ[j], 0) + 0.15])
        mn /= np.linalg.norm(mn)
        nrm = 0.62 * mn + 0.38 * nrm
        nrm /= np.linalg.norm(nrm, axis=-1, keepdims=True)
        dif = np.clip(nrm @ Lk, 0, 1)
        spec = np.clip(nrm @ Hk, 0, 1) ** 16
        ao = 0.42 + 0.58 * depth[j] ** 0.9
        rimL = np.clip(-nrm[..., 0], 0, 1) ** 3 * (1 - nrm[..., 2])
        rimR = np.clip(nrm[..., 0], 0, 1) ** 3 * (1 - nrm[..., 2])
        c = base[None, None, :] * (0.07 + 1.0 * dif[..., None] ** 1.3) * ao
        c = c + amber * (0.95 * rimL[..., None]) * (0.6 + 0.4 * (1 - ss[j])) + violet * (1.05 * rimR[..., None]) * (0.6 + 0.4 * ss[j])
        c = c + 0.22 * spec[..., None] * ao + np.array([0.10, 0.06, 0.07]) * (1 - dif[..., None]) * ao
        # warm-to-violet tint along the length, very slight (the logo gradient)
        tint = amber * (1 - ss[j]) + violet * ss[j]
        c = c * (0.9 + 0.1 * tint / tint.mean())
        sc = col[y0:y0 + 2 * rs + 1, x0:x0 + 2 * rs + 1]
        sa = alp[y0:y0 + 2 * rs + 1, x0:x0 + 2 * rs + 1]
        sc[m] = c[m]; sa[m] = fade[j]; sub[m] = zz[m]

# soft contact shadow between fibrils: darken where depth jumps (screen-space edge darkening)
zb = np.where(alp > 0, zbuf, np.nan)
zf = np.nan_to_num(zb, nan=-R * 2)
def gblur(a, sg):
    r = int(3 * sg); k = np.exp(-np.arange(-r, r + 1) ** 2 / (2 * sg * sg)); k /= k.sum()
    a = np.apply_along_axis(lambda v: np.convolve(v, k, 'same'), 0, a)
    return np.apply_along_axis(lambda v: np.convolve(v, k, 'same'), 1, a)
blur = gblur(zf, 4 * SS)
occ = np.clip((blur - zf) / (0.05 * R), 0, 1)
col *= (1 - 0.45 * occ)[..., None]
col = np.clip(col * 1.06, 0, 1) ** (1 / 1.15)
rgba = np.dstack([col * 255, np.clip(alp, 0, 1) * 255]).astype(np.uint8)
im = Image.fromarray(rgba, 'RGBA').resize((OW, int(OW * AR)), Image.LANCZOS)
im.save(OUT, quality=90, method=6) if OUT.endswith('.webp') else im.save(OUT)
print('wrote', OUT, im.size)
