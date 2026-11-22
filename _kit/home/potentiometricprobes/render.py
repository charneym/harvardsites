#!/usr/bin/env python3
"""Potentiometric Probes hero (HOME_BRIEF update 2c: a crafted render of the real mechanism). A patch of cell membrane
stained with a voltage-sensitive dye: a lipid bilayer built bead by bead (head groups, two tails per lipid, tails shown
where the patch's cut edge exposes them), with styryl VSD molecules (the ANEP / ElectroFluor family) inserted in the
outer leaflet, their chromophore running down alongside the lipid tails and the charged head group at the surface
(potentiometricprobes.com /how-vsds-work, /stark-effect). Illustrative, not to scale.
Shading: Lambert + specular + rim + depth-buffer ambient occlusion + depth fog, on a transparent ground (DJ).
Writes hero.webp (the membrane, RGBA) and glow.webp (the dye fluorescence only, RGBA, composited additively in field.js
so a voltage wave can sweep across it). Usage: python3 -I render.py [size]"""
import numpy as np, pathlib, sys
from PIL import Image
H = pathlib.Path(__file__).resolve().parent
rng = np.random.default_rng(630)

def _box(a, r, ax):
    a = np.moveaxis(a, ax, 0); p = np.concatenate([np.repeat(a[:1], r + 1, 0), a, np.repeat(a[-1:], r, 0)]); c = np.cumsum(p, 0)
    return np.moveaxis((c[2 * r + 1:] - c[:-2 * r - 1]) / (2 * r + 1), 0, ax)
def blur(a, s):
    r = max(1, int(s * 0.9))
    for _ in range(3): a = _box(_box(a, r, 0), r, 1)
    return a
def rot(a, ax):
    c, s = np.cos(a), np.sin(a)
    return {'x': np.array([[1, 0, 0], [0, c, -s], [0, s, c]]), 'y': np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]]),
            'z': np.array([[c, -s, 0], [s, c, 0], [0, 0, 1]])}[ax]

# palette: the logo's action-potential traces (crimson #bf202f, red #ef4137, orange #f79522) on warm bone lipids
HEAD = np.array([214, 204, 192]) / 255; HEADB = np.array([196, 184, 172]) / 255
TAIL = np.array([170, 150, 128]) / 255
DYEH = np.array([191, 32, 47]) / 255; DYEC = np.array([239, 65, 55]) / 255

pos = []; rad = []; col = []; emi = []
def add(P, r, c, e=0.0):
    P = np.asarray(P, float).reshape(-1, 3); n = len(P); pos.append(P)
    rad.append(np.full(n, r) if np.isscalar(r) else np.asarray(r)); col.append(np.broadcast_to(np.asarray(c), (n, 3)).copy())
    emi.append(np.full(n, e))

# ---- membrane surface: an irregular, gently undulating patch in the x-z plane
A, B = 18.0, 16.5
def surf(x, z):
    return 1.5 * np.sin(0.15 * x + 0.6) * np.cos(0.13 * z - 0.3) + 0.6 * np.sin(0.31 * z + 0.11 * x)
def nrm(x, z, e=1e-3):
    dx = (surf(x + e, z) - surf(x - e, z)) / (2 * e); dz = (surf(x, z + e) - surf(x, z - e)) / (2 * e)
    n = np.stack([-dx, np.ones_like(dx), -dz], -1); return n / np.linalg.norm(n, axis=-1, keepdims=True)
def inside(x, z):
    th = np.arctan2(z / B, x / A); rr = np.hypot(x / A, z / B)
    edge = 1 + 0.07 * np.sin(3 * th + 0.4) + 0.05 * np.sin(5 * th + 2.1) + 0.03 * np.sin(9 * th)
    return rr < edge, edge - rr

SP = 0.84; HR = 0.43; HALF = 2.05
for leaf in (1, -1):
    gx, gz = np.meshgrid(np.arange(-A * 1.2, A * 1.2, SP), np.arange(-B * 1.25, B * 1.25, SP * 0.866))
    gx = gx + (np.arange(gx.shape[0])[:, None] % 2) * SP / 2
    x = gx.ravel() + rng.normal(0, 0.11, gx.size); z = gz.ravel() + rng.normal(0, 0.11, gx.size)
    ok, dist = inside(x, z); x, z, dist = x[ok], z[ok], dist[ok]
    n = nrm(x, z); base = np.stack([x, surf(x, z), z], 1)
    # outer leaflet: some lipids are replaced by dye molecules (more of them toward the front edge so the cut shows them)
    isdye = np.zeros(len(x), bool)
    if leaf == 1:
        pr = 0.035 + 0.10 * (dist < 0.10)
        isdye = rng.random(len(x)) < pr
    for k in range(len(x)):
        P0 = base[k] + n[k] * leaf * HALF
        nearedge = dist[k] < 0.085
        if isdye[k]:
            add(P0 + n[k] * 0.12, 0.5, DYEH, 1.0)
            # chromophore: a rod down into the leaflet, alongside the lipid tails
            t1 = np.cross(n[k], [0, 0, 1.0]); t1 /= np.linalg.norm(t1) + 1e-9
            for j in range(1, 7):
                add(P0 - n[k] * (0.32 + j * 0.27) + t1 * 0.05 * np.sin(j), 0.29, DYEC, 0.9)
            continue
        sh = np.clip(1 + rng.normal(0, 0.045), 0.88, 1.1)
        add(P0, HR, np.clip((HEAD if leaf == 1 else HEADB) * sh, 0, 1))
        if nearedge:
            t1 = np.cross(n[k], [0, 0, 1.0]); t1 /= np.linalg.norm(t1) + 1e-9
            for side in (-0.2, 0.2):
                for j in range(1, 6):
                    add(P0 - leaf * n[k] * (0.42 + j * 0.31) + t1 * side * (1 + 0.2 * np.sin(j + k)), 0.23, TAIL * (0.9 + 0.025 * j))

P = np.concatenate(pos); RA = np.concatenate(rad); C = np.concatenate(col); EM = np.concatenate(emi)
view = rot(0.78, 'x') @ rot(-0.5, 'y')        # look down on the patch at ~45 degrees, turned so it runs on a diagonal
P = P @ view.T
print('beads', len(P))
S = int(sys.argv[1]) if len(sys.argv) > 1 else 2800
lo = (P[:, :2] - RA[:, None]).min(0); hi = (P[:, :2] + RA[:, None]).max(0)
asp = (hi[1] - lo[1]) / (hi[0] - lo[0]); SW, SH = S, int(S * asp) + 8
sc = S * 0.97 / (hi[0] - lo[0]); off = np.array([SW, SH]) / 2 - (lo + hi) / 2 * sc
Z = np.full((SH, SW), -1e9); N = np.zeros((SH, SW, 3), np.float32); ID = np.full((SH, SW), -1)
for i in np.argsort(P[:, 2]):
    cx, cy = P[i, :2] * sc + off; cy = SH - cy; r = RA[i] * sc
    x0, x1 = int(max(cx - r, 0)), int(min(cx + r + 1, SW)); y0, y1 = int(max(cy - r, 0)), int(min(cy + r + 1, SH))
    if x1 <= x0 or y1 <= y0: continue
    yy, xx = np.mgrid[y0:y1, x0:x1]; dx = (xx + .5 - cx) / r; dy = (yy + .5 - cy) / r; d2 = dx * dx + dy * dy; m = d2 < 1
    dz = np.sqrt(np.clip(1 - d2, 0, 1)); z = P[i, 2] * sc + dz * r
    sub = Z[y0:y1, x0:x1]; upd = m & (z > sub)
    sub[upd] = z[upd]; N[y0:y1, x0:x1][upd] = np.stack([dx, -dy, dz], -1)[upd]; ID[y0:y1, x0:x1][upd] = i
mask = ID >= 0
Zf = np.where(mask, Z, Z[mask].min() - 6 * sc)
ao = np.zeros_like(Z)
for rr in (4, 10, 24, 56, 110):
    b = blur(Zf, rr); ao += np.clip((b - Zf) / (rr * 1.5), 0, 1)
ao = np.clip(1 - ao / 2.2, 0, 1)
L = np.array([-.4, .55, .75]); L /= np.linalg.norm(L)
lam = np.clip((N * L).sum(-1), 0, 1)
Hh = L + np.array([0, 0, 1]); Hh /= np.linalg.norm(Hh); spec = np.clip((N * Hh).sum(-1), 0, 1) ** 46
rim = (1 - np.clip(N[..., 2], 0, 1)) ** 3
idc = np.clip(ID, 0, None); colr = C[idc]; em = np.where(mask, EM[idc], 0)
zn = (Z - Z[mask].min()) / (Z[mask].max() - Z[mask].min() + 1e-6); zn = np.where(mask, zn, 0)
ink = np.array([14, 8, 9]) / 255
shade = (0.12 + 1.0 * lam * (0.55 + 0.45 * ao))[..., None] * colr * (0.5 + 0.5 * ao[..., None])
shade += spec[..., None] * 0.30 * ao[..., None] + rim[..., None] * np.array([239, 65, 55]) / 255 * 0.10
shade += em[..., None] * colr * 0.35 * (0.6 + 0.4 * ao[..., None])            # the dye glows from within
f = (0.55 + 0.45 * zn[..., None]); shade = shade * f + ink * (1 - f) * 0.6
img = np.clip(shade, 0, 1)
# soften the far end so the patch recedes into the ink (alpha falls off with depth at the back)
alpha = mask * np.clip(0.25 + zn * 2.2, 0, 1)
rgba = np.dstack([img * 255, alpha * 255.0]).astype(np.uint8)
im = Image.fromarray(rgba, 'RGBA').resize((SW // 2, SH // 2), Image.LANCZOS)
bb = im.getbbox(); im = im.crop(bb); im.save(H / 'hero.webp', quality=90, method=6); print('hero', im.size)
# fluorescence: emissive pixels, bloomed at several radii, in the logo's red-orange
e = em * np.clip(0.4 + zn, 0, 1)
g = np.zeros_like(e)
for rr, w in ((3, .9), (10, .7), (26, .5), (60, .35)):
    g += blur(e, rr) * w
g = np.clip(g / 1.2, 0, 1)
gc = np.array([255, 92, 60]) / 255
glow = np.dstack([np.broadcast_to(gc * 255, g.shape + (3,)), g * 255.0]).astype(np.uint8)
gm = Image.fromarray(glow, 'RGBA').resize((SW // 2, SH // 2), Image.LANCZOS).crop(bb)
ga = np.array(gm).astype(float); hh, ww = ga.shape[:2]
fy = np.clip(np.minimum(np.arange(hh), hh - 1 - np.arange(hh)) / (hh * .08), 0, 1); fx = np.clip(np.minimum(np.arange(ww), ww - 1 - np.arange(ww)) / (ww * .08), 0, 1)
fe = np.outer(fy * fy * (3 - 2 * fy), fx * fx * (3 - 2 * fx))
ga[..., 3] = np.clip((ga[..., 3] - 4) / 251, 0, 1) * 255 * fe          # no alpha floor, feathered borders: no box edge (DP/DJ)
gm = Image.fromarray(ga.astype(np.uint8), 'RGBA')
gm.save(H / 'glow.webp', quality=88, method=6, exact=True); print('glow', gm.size)
