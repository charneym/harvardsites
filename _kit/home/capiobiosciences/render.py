#!/usr/bin/env python3
"""Capio hero (HOME_BRIEF update 2c: a crafted render of the firm's own mechanism). One circulating tumour cell held on a
CapioCyte capture surface, after Capio's own description (Our Technology): the chip surface is coated with dendrimers
that carry capture antibodies, and a tumour cell rolling over it is caught by many antibodies at once (dendrimer-mediated
multivalent capture). The cell membrane is bump-mapped with fractal noise and covered in microvilli; the surface is a
carpet of lumpy PAMAM-like dendrimers on a substrate, about a third of them carrying a Y-shaped antibody; under the cell
the antibodies reach up and hold it. Scale is compressed for legibility (as in Capio's own schematic). Every element is a
sphere splatted into a z-buffer, lit by key, fill and rim with depth-darkening ambient occlusion; the surface fades out on
a long ellipse into real alpha (no ground of its own, DJ/DP). Usage: python3 render.py W out.png"""
import sys, math, numpy as np
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 1500
OUT = sys.argv[2] if len(sys.argv) > 2 else 'hero.png'
SS = 2; X0, X1, Y0, Y1 = -2.75, 2.75, -2.05, 1.32
w = W * SS; S = w / (X1 - X0); h = int(round((Y1 - Y0) * S)); h -= h % SS; H = h // SS
rng = np.random.default_rng(11)
def nrm(v): return v / np.maximum(np.linalg.norm(v, axis=-1, keepdims=True), 1e-9)
def fib(n):
    i = np.arange(n) + .5; phi = np.arccos(1 - 2 * i / n); th = math.pi * (1 + 5 ** .5) * i
    return np.stack([np.cos(th) * np.sin(phi), np.cos(phi), np.sin(th) * np.sin(phi)], -1)   # y up
MAT = {
 'cell':  ([.86, .52, .20], .16),   # tumour cell membrane, Capio orange (muted)
 'villi': ([.95, .68, .34], .22),
 'dend':  ([.70, .78, .88], .30),   # dendrimers, pale blue-grey
 'dcore': ([.52, .62, .78], .25),
 'sub':   ([.13, .26, .48], .10),   # chip substrate, deep blue
 'hc':    ([.06, .40, .80], .45),   # antibody heavy chain, Capio blue
 'lc':    ([.55, .76, .97], .40),
}
MK = list(MAT); P, R, M = [], [], []
def add(p, r, m):
    p = np.atleast_2d(p); P.append(p); R.append(np.full(len(p), float(r)) if np.isscalar(r) else np.asarray(r, float)); M.append(np.full(len(p), MK.index(m)))
FLOOR = -1.16
# cell body and blebs
CY = -.07
add([0, CY, 0], 1.0, 'cell')
for u in fib(9):
    u = nrm(u + rng.normal(scale=.3, size=3))
    if u[1] < -.3: continue
    r = .26 + .16 * rng.random(); add(u * (1.0 - r * .8) + [0, CY, 0], r, 'cell')
DEN = nrm(rng.normal(size=(40, 3)))
# microvilli
for u in fib(5200):
    u = nrm(u + rng.normal(scale=.012, size=3))
    if u[1] < -.86: continue
    dens = (u @ DEN.T).max()          # microvilli cluster in patches, as on real CTC membranes
    if rng.random() > .25 + .75 * max(0, (dens - .72) / .28): continue
    L = .025 + .07 * rng.random() ** 2; k = 5; t1 = nrm(np.cross(u, rng.normal(size=3))); bend = rng.normal(scale=.7)
    base = u * .99 + [0, CY, 0]
    for j in range(k):
        f = j / (k - 1); d = nrm(u + t1 * bend * f)
        add(base + d * L * f, .022 - .005 * f, 'villi')
# substrate
sp = .075
for iy in range(-60, 61):
    for ix in range(-60, 61):
        x = (ix + (iy % 2) * .5) * sp; z = iy * sp * .866
        rr = math.hypot(x, z)
        if rr > 2.75: continue
        add([x, FLOOR - .03, z], .052, 'sub')
# dendrimers with antibodies
def lobe(a, b, r, m, k=7):
    for t in np.linspace(0, 1, k): add(a + (b - a) * t + rng.normal(scale=r * .1, size=3), r * (.8 + .3 * math.sin(t * math.pi)), m)
def antibody(base, up, scale):
    t1 = nrm(np.cross(up, rng.normal(size=3))); t2 = np.cross(up, t1)
    fc = base + up * .09 * scale; lobe(base, fc, .02 * scale, 'hc', 5)
    a0 = rng.random() * math.pi
    for s in (-1, 1):
        d = nrm(up * math.cos(.7) + (t1 * math.cos(a0) + t2 * math.sin(a0)) * s * math.sin(.7)); side = nrm(np.cross(d, up))
        a = fc + d * .012 * scale; b = fc + d * .10 * scale
        lobe(a, b, .018 * scale, 'hc', 5); lobe(a + side * .022 * scale, b + side * .022 * scale, .016 * scale, 'lc', 5)
dsp = .17
for iy in range(-20, 21):
    for ix in range(-20, 21):
        x = (ix + (iy % 2) * .5) * dsp + rng.normal(scale=.025); z = iy * dsp * .866 + rng.normal(scale=.025)
        rr = math.hypot(x, z)
        if rr > 2.6 or rng.random() < max(0, (rr - 1.9) / .9): continue
        c = np.array([x, FLOOR + .065, z]); add(c, .05, 'dcore')
        for u in fib(11):
            u = nrm(u + rng.normal(scale=.2, size=3)); add(c + u * .048, .027 + .006 * rng.random(), 'dend')
        if rr < .62:   # under the cell: antibodies reach up to the membrane and hold it
            top = CY - math.sqrt(max(1 - rr * rr, 0))
            for k in range(2):
                o = nrm(np.array([rng.normal(), 0, rng.normal()])) * .03
                base = c + np.array([0, .06, 0]) + o; reach = top - base[1]
                up = nrm(np.array([-x * .3 + o[0] * 3, 1, -z * .3 + o[2] * 3]))
                antibody(base, up, max(.7, min(1.7, reach / .17)))
        elif rng.random() < .26:
            antibody(c + np.array([0, .055, 0]), nrm(np.array([0, 1, 0]) + rng.normal(scale=.3, size=3)), 1.0)
P = np.concatenate(P); R = np.concatenate(R); M = np.concatenate(M)
# camera: look down on the surface at ~19 degrees, turned a little
el, az = math.radians(19), math.radians(-24)
Ry = np.array([[math.cos(az), 0, math.sin(az)], [0, 1, 0], [-math.sin(az), 0, math.cos(az)]])
Rx = np.array([[1, 0, 0], [0, math.cos(el), -math.sin(el)], [0, math.sin(el), math.cos(el)]])
Pw = P.copy(); P = P @ (Rx @ Ry).T
print('spheres', len(P), 'canvas', W, H)
Z = np.full((h, w), -9.0, np.float32); N = np.zeros((h, w, 3), np.float32); ID = np.full((h, w), -1, np.int16)
px = (P[:, 0] - X0) * S; py = (Y1 - P[:, 1]) * S; pr = R * S
for i in np.argsort(P[:, 2]):
    r = pr[i]; x0 = int(px[i] - r) - 1; x1 = int(px[i] + r) + 2; y0 = int(py[i] - r) - 1; y1 = int(py[i] + r) + 2
    if x1 < 0 or y1 < 0 or x0 >= w or y0 >= h: continue
    x0c, y0c, x1c, y1c = max(x0, 0), max(y0, 0), min(x1, w), min(y1, h)
    yy, xx = np.mgrid[y0c:y1c, x0c:x1c]; dx = (xx + .5 - px[i]) / r; dy = (yy + .5 - py[i]) / r
    d2 = dx * dx + dy * dy; ins = d2 < 1
    dz = np.sqrt(np.clip(1 - d2, 0, 1)); z = P[i, 2] + dz * R[i]
    zs = Z[y0c:y1c, x0c:x1c]; win = ins & (z > zs)
    zs[win] = z[win]; N[y0c:y1c, x0c:x1c][win] = np.stack([dx, -dy, dz], -1)[win]; ID[y0c:y1c, x0c:x1c][win] = M[i]
cov = ID >= 0
# membrane bump map: fractal value noise on the camera-space surface point
def vnoise(p):
    pi = np.floor(p).astype(np.int64); f = p - pi; f = f * f * (3 - 2 * f); out = 0
    def hsh(a, b, c): v = (a * 73856093) ^ (b * 19349663) ^ (c * 83492791); return ((v * 2654435761) % 4294967296) / 4294967296.0
    for dx in (0, 1):
        for dy in (0, 1):
            for dz in (0, 1):
                wgt = (f[:, 0] if dx else 1 - f[:, 0]) * (f[:, 1] if dy else 1 - f[:, 1]) * (f[:, 2] if dz else 1 - f[:, 2])
                out = out + wgt * hsh(pi[:, 0] + dx, pi[:, 1] + dy, pi[:, 2] + dz)
    return out
def fbm(p): return sum(vnoise(p * (3.2 * 2 ** o)) * (.5 ** o) for o in range(4))
cm = ID == MK.index('cell'); yy, xx = np.nonzero(cm)
pp = np.stack([(xx + .5) / S + X0, Y1 - (yy + .5) / S, Z[yy, xx]], -1).astype(np.float64)
e = .004; n0 = fbm(pp)
g = np.stack([(fbm(pp + np.array([e, 0, 0])) - n0) / e, (fbm(pp + np.array([0, e, 0])) - n0) / e, (fbm(pp + np.array([0, 0, e])) - n0) / e], -1)
nn = N[yy, xx].astype(np.float64); g = g - (g * nn).sum(-1, keepdims=True) * nn
N[yy, xx] = nrm(nn - g * .03).astype(np.float32)
def blur(a, r):
    for _ in range(3):
        c = np.cumsum(np.pad(a, ((r + 1, r), (0, 0)), mode='edge'), 0); a = (c[2 * r + 1:] - c[:-2 * r - 1]) / (2 * r + 1)
        c = np.cumsum(np.pad(a, ((0, 0), (r + 1, r)), mode='edge'), 1); a = (c[:, 2 * r + 1:] - c[:, :-2 * r - 1]) / (2 * r + 1)
    return a
Zf = np.where(cov, Z, Z[cov].min() - .3).astype(np.float64)
ao = np.zeros_like(Zf)
for rad, k in ((int(.012 * S), 7.0), (int(.045 * S), 2.8), (int(.16 * S), 1.0)):
    ao += np.clip((blur(Zf, max(rad, 1)) - Zf) * k, 0, None)
ao = np.clip(1 - ao * .9, .16, 1)
alb = np.array([MAT[k][0] for k in MK], np.float32); spc = np.array([MAT[k][1] for k in MK], np.float32)
A = alb[np.clip(ID, 0, None)]; SPc = spc[np.clip(ID, 0, None)]
n = N
L1 = nrm(np.array([-.5, .68, .55])); L2 = nrm(np.array([.75, -.1, .45])); Hh = nrm(L1 + np.array([0, 0, 1]))
lam = np.clip(n @ L1, 0, 1); fil = np.clip(n @ L2, 0, 1)
rim = np.clip(1 - n[..., 2], 0, 1) ** 3
spec = np.clip(n @ Hh, 0, 1) ** 28
col = A * (.08 + .92 * lam[..., None] + .2 * fil[..., None] * np.array([.55, .72, 1.0])) * ao[..., None]
col += (SPc * spec)[..., None] * np.array([1, .97, .92]) * ao[..., None]
col += rim[..., None] * np.array([.35, .6, 1.0]) * .3 * ao[..., None]
zmin, zmax = Z[cov].min(), Z[cov].max(); dc = np.clip((Z - zmin) / (zmax - zmin), 0, 1)
INK = np.array([.024, .055, .12])
k = (.5 + .5 * dc)[..., None]
col = col * k + INK * (1 - k) * .6
col = np.clip(col, 0, 1) ** (1 / 1.1)
# the surface fades out on a long ellipse (real alpha, no box edge)
yy, xx = np.mgrid[0:h, 0:w]; sx = (xx + .5) / S + X0; sy = Y1 - (yy + .5) / S
fc = np.array([0, FLOOR, 0]) @ (Rx @ Ry).T
rho = np.sqrt((sx / 2.55) ** 2 + ((sy - fc[1]) / (2.55 * math.sin(el))) ** 2)
fade = 1 - np.clip((rho - .45) / .55, 0, 1); fade = fade * fade * (3 - 2 * fade)
isc = (ID == MK.index('cell')) | (ID == MK.index('villi'))
# soft contact shadow of the cell on the surface (light from upper left)
shc = np.array([.32, FLOOR, -.25]) @ (Rx @ Ry).T
sr = np.sqrt(((sx - shc[0]) / 1.15) ** 2 + ((sy - shc[1]) / (1.15 * math.sin(el))) ** 2)
shd = np.clip(1 - sr, 0, 1) ** 1.6
col = np.where(isc[..., None], col, col * (1 - .6 * shd[..., None]))
alpha = np.where(isc, 1.0, fade) * cov
img = np.dstack([col * alpha[..., None], alpha]).astype(np.float32)
img = img.reshape(H, SS, W, SS, 4).mean((1, 3))
a = img[..., 3:4]; rgb = np.where(a > 0, img[..., :3] / np.maximum(a, 1e-6), 0)
Image.fromarray((np.dstack([rgb, a]) * 255).round().astype(np.uint8), 'RGBA').save(OUT)
print('wrote', OUT)
