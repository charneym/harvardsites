#!/usr/bin/env python3
"""Compounding Solutions hero (HOME_BRIEF update 2c: a crafted render of the firm's real product). A loose heap of
strand-cut, medical-grade thermoplastic compound pellets, the product Compounding Solutions makes in Lewiston and leads
with on its own site (the yellow pellet photograph on compoundingsolutions.net; the yellow of the logo's "S" and of its
PurTone Rx colour concentrates). Satin-finish pellets, slightly irregular cylinders with softened cut ends, piled by
ballistic deposition. Numpy sphere tracing per pellet with a z-buffer, then soft shadows, contact occlusion, warm
inter-reflection, a cool lavender rim (the logo's second colour) and a soft contact shadow, saved with REAL ALPHA (DJ/DP).
Usage: render.py WIDTH out.png"""
import numpy as np, sys
from PIL import Image, ImageFilter
WO = int(sys.argv[1]) if len(sys.argv) > 1 else 1300
OUT = sys.argv[2] if len(sys.argv) > 2 else 'hero.png'
SS = 2; W = WO * SS; H = int(W * 0.80)
rng = np.random.default_rng(1999)
def nrm(v): return v / (np.linalg.norm(v, axis=-1, keepdims=True) + 1e-12)
def sm(a, b, x): x = np.clip((x - a) / (b - a), 0, 1); return x * x * (3 - 2 * x)

# ---------------- pile (ballistic deposition onto a gaussian drop pattern) ----------------
N = 760
R0, HL0, RR = 0.30, 0.34, 0.075          # pellet radius, half length, edge rounding
P = []                                    # centre, rotation matrix, radius, half length, ovality
def rotm(ax, ang):
    ax = ax / np.linalg.norm(ax); c, s = np.cos(ang), np.sin(ang); x, y, z = ax
    return np.array([[c + x*x*(1-c), x*y*(1-c) - z*s, x*z*(1-c) + y*s],
                     [y*x*(1-c) + z*s, c + y*y*(1-c), y*z*(1-c) - x*s],
                     [z*x*(1-c) - y*s, z*y*(1-c) + x*s, c + z*z*(1-c)]])
# heightmap sandpile: drop near the centre, slide downhill while steeper than the angle of repose, rest on the heap
G = 0.04; GN = 400; Hm = np.zeros((GN, GN)); G0 = -GN * G / 2
fa = np.linspace(-1, 1, 15); fb = np.linspace(-1, 1, 13)
FA, FB = np.meshgrid(fa, fb)
def foot(x, z, th, r, hl):
    ca, sa = np.cos(th), np.sin(th)
    px = x + FA * hl * ca - FB * r * sa; pz = z + FA * hl * sa + FB * r * ca
    ix = np.clip(((px - G0) / G).astype(int), 0, GN - 1); iz = np.clip(((pz - G0) / G).astype(int), 0, GN - 1)
    prof = r * np.sqrt(np.clip(1 - FB * FB, 0, 1))
    return ix, iz, prof
def rest(x, z, th, r, hl):
    ix, iz, prof = foot(x, z, th, r, hl); return np.percentile(Hm[iz, ix] + prof, 72)
TAN = np.tan(np.radians(25))
for i in range(N):
    r = R0 * rng.uniform(.92, 1.06); hl = HL0 * rng.uniform(.82, 1.12); th = rng.uniform(0, np.pi)
    x, z = rng.normal(0, .35), rng.normal(0, .25)
    y = rest(x, z, th, r, hl)
    for st in range(60):
        best = None
        for k in range(12):
            a = rng.uniform(0, 2 * np.pi); dd = (.3, .6, .9)[k % 3]; dx, dz = dd * np.cos(a), dd * np.sin(a) * .8
            yy = rest(x + dx, z + dz, th, r, hl)
            if (y - yy) / dd > TAN * (0.85 + .3 * rng.random()) and (best is None or (y - yy) / dd > best[3]): best = (x + dx, z + dz, yy, (y - yy) / dd)
        if best is None: break
        x, z, y = best[:3]
    ix, iz, prof = foot(x, z, th, r, hl)
    # slope along the axis gives the tilt
    ca, sa = np.cos(th), np.sin(th)
    y1 = rest(x - ca * hl * .9, z - sa * hl * .9, th, r, hl * .25); y2 = rest(x + ca * hl * .9, z + sa * hl * .9, th, r, hl * .25)
    tilt = np.clip(np.arctan2(y2 - y1, 2 * hl * .9) * .7, -.6, .6) + rng.normal(0, .06)
    roll = rng.normal(0, .1)
    ax = np.array([ca * np.cos(tilt), np.sin(tilt), sa * np.cos(tilt)])
    yv = np.array([0, 1., 0]); v = np.cross(yv, ax); ang = np.arccos(np.clip(ax[1], -1, 1))
    M = rotm(v, ang) if np.linalg.norm(v) > 1e-6 else np.eye(3)
    M = rotm(ax, rng.uniform(0, 2 * np.pi)) @ M
    y = y - r * .06
    np.maximum.at(Hm, (iz, ix), y + prof * .92)
    P.append((np.array([x, y, z]), M, r, hl, rng.uniform(.9, 1.0)))
print('pile height', max(p[0][1] for p in P))

# ---------------- camera ----------------
eye = np.array([0.6, 7.4, 10.0]); look = np.array([0.0, 0.55, 0.0])
fw = nrm(look - eye); rt = nrm(np.cross(fw, [0, 1, 0])); up = np.cross(rt, fw)
FOV = 0.40
def project(p):
    v = p - eye; zc = v @ fw; return (v @ rt) / zc / FOV, (v @ up) / zc / FOV, zc
# fit the heap in the frame
pts = np.array([p[0] for p in P]); u, v, _ = project(pts)
cx, cy = (u.max() + u.min()) / 2, (v.max() + v.min()) / 2
span = max((u.max() - u.min()) / W, (v.max() - v.min()) / H)
SC = 0.80 / span
def to_px(u, v): return W/2 + (u - cx) * SC, H/2 - (v - cy) * SC * 1.0 + H*0.03
px, py = to_px(u, v)

def sdf_local(q, r, hl, ov):
    # rounded cylinder along local y with a slightly oval section
    qx, qz = q[..., 0], q[..., 2] / ov
    dr = np.sqrt(qx*qx + qz*qz) - (r - RR); dy = np.abs(q[..., 1]) - (hl - RR)
    return np.minimum(np.maximum(dr, dy), 0) + np.sqrt(np.maximum(dr, 0)**2 + np.maximum(dy, 0)**2) - RR

zbuf = np.full((H, W), np.inf); pid = np.full((H, W), -1, int)
HP = np.zeros((H, W, 3)); HN = np.zeros((H, W, 3))
pix_scale = SC
for i, (c, M, r, hl, ov) in enumerate(P):
    uu, vv, zc = project(c); X, Y = to_px(uu, vv)
    rad = (hl + r) / zc / FOV * SC * 1.08 + 3
    x0, x1 = int(max(0, X - rad)), int(min(W, X + rad)); y0, y1 = int(max(0, Y - rad)), int(min(H, Y + rad))
    if x1 <= x0 or y1 <= y0: continue
    gx, gy = np.meshgrid(np.arange(x0, x1) + .5, np.arange(y0, y1) + .5)
    U = (gx - W/2) / SC + cx; V = -(gy - H/2 - H*0.03) / SC + cy
    d = nrm(fw + (U[..., None] * rt + V[..., None] * up) * FOV)
    oc = eye - c; b = (oc[None, None, :] * d).sum(-1); bs = hl + r
    disc = b*b - ((oc*oc).sum() - bs*bs); ok = disc > 0
    t = np.where(ok, -b - np.sqrt(np.maximum(disc, 0)), 1e9)
    Mi = M.T
    hit = np.zeros_like(ok)
    for it in range(48):
        p = eye + d * t[..., None]; q = (p - c) @ Mi.T
        dd = sdf_local(q, r, hl, ov)
        hit |= ok & (dd < 6e-4)
        t = np.where(hit | ~ok, t, t + dd * .95)
        ok &= t < (-b + np.sqrt(np.maximum(disc, 0)) + .01)
    sub = zbuf[y0:y1, x0:x1]; upd = hit & (t < sub)
    if not upd.any(): continue
    p = eye + d * t[..., None]
    q = (p - c) @ Mi.T; e = 1e-3
    g = np.stack([sdf_local(q + np.array(k) * e, r, hl, ov) - sdf_local(q - np.array(k) * e, r, hl, ov) for k in ([1,0,0],[0,1,0],[0,0,1])], -1)
    n = nrm(g) @ Mi                     # back to world
    sub[upd] = t[upd]; pid[y0:y1, x0:x1][upd] = i
    HP[y0:y1, x0:x1][upd] = p[upd]; HN[y0:y1, x0:x1][upd] = n[upd]
print('traced')

# ---------------- shading ----------------
m = pid >= 0
ids = pid[m]; Pp = HP[m]; Nn = HN[m]
C = np.array([p[0] for p in P]); Ms = np.array([p[1] for p in P]); Rs = np.array([p[2] for p in P]); HLs = np.array([p[3] for p in P]); OVs = np.array([p[4] for p in P])
K = 22
D2 = ((C[:, None, :] - C[None, :, :])**2).sum(-1); NB = np.argsort(D2, 1)[:, :K]   # each pellet's neighbours (incl. itself)
def scene_sdf(pts, nb):  # pts (n,3), nb (n,K)
    out = np.full(len(pts), 1e9)
    for k in range(nb.shape[1]):
        j = nb[:, k]; q = np.einsum('nij,nj->ni', Ms[j].transpose(0, 2, 1), pts - C[j])
        out = np.minimum(out, sdf_local(q, Rs[j][:, None].squeeze(-1), HLs[j], OVs[j]) if False else
                         _sd(q, Rs[j], HLs[j], OVs[j]))
    out = np.minimum(out, pts[:, 1] + 0.0)     # floor
    return out
def _sd(q, r, hl, ov):
    qx, qz = q[:, 0], q[:, 2] / ov
    dr = np.sqrt(qx*qx + qz*qz) - (r - RR); dy = np.abs(q[:, 1]) - (hl - RR)
    return np.minimum(np.maximum(dr, dy), 0) + np.sqrt(np.maximum(dr, 0)**2 + np.maximum(dy, 0)**2) - RR
Ld = nrm(np.array([-0.55, 0.85, 0.42]))      # key: upper left, a little toward camera
Lr = nrm(np.array([0.75, 0.35, -0.6]))       # rim: back right
CH = 200000
sh = np.ones(len(Pp)); ao = np.ones(len(Pp))
for s in range(0, len(Pp), CH):
    pp, nn, nb = Pp[s:s+CH], Nn[s:s+CH], NB[ids[s:s+CH]]
    # soft shadow toward the key
    res = np.ones(len(pp)); t = np.full(len(pp), 0.02)
    for it in range(22):
        dd = scene_sdf(pp + nn * 0.004 + Ld * t[:, None], nb)
        res = np.minimum(res, 7.0 * dd / t); t += np.clip(dd, 0.02, 0.3)
    sh[s:s+CH] = np.clip(res, 0, 1)
    occ = np.zeros(len(pp))
    for k, hh in enumerate([0.035, 0.08, 0.15, 0.26, 0.4]):
        dd = scene_sdf(pp + nn * hh, nb); occ += (hh - np.minimum(dd, hh)) / (2 ** k)
    ao[s:s+CH] = np.clip(1 - 2.2 * occ, 0, 1)
print('shaded')
sh = sm(0, 1, sh)
V = nrm(eye - Pp)
# per pellet tint: brand yellow with small natural variation
base = np.array([0.97, 0.57, 0.03])
jit = rng.normal(0, 1, (N, 3)) * np.array([.01, .02, .006]) + rng.normal(0, .035, (N, 1)) * np.array([1, .55, .3])
alb = np.clip(base + jit, 0, 1)[ids]
# local normal pattern: cut ends (local |y| big) are slightly rougher
ql = np.einsum('nij,nj->ni', Ms[ids].transpose(0, 2, 1), Pp - C[ids]); endf = sm(HLs[ids] - RR*.6, HLs[ids] - RR*.1, np.abs(ql[:, 1]))
ndl = (Nn * Ld).sum(-1); wrap = np.clip((ndl + 0.35) / 1.35, 0, 1)
diff = wrap * (0.25 + 0.75 * sh)
amb_sky = np.clip(0.5 + 0.5 * Nn[:, 1], 0, 1)
Hh = nrm(Ld + V); spec = np.clip((Nn * Hh).sum(-1), 0, 1)
gloss = 34 - 18 * endf
specv = spec ** gloss * (0.30 - 0.12 * endf) * sh
fres = (1 - np.clip((Nn * V).sum(-1), 0, 1)) ** 4
rim = np.clip((Nn * Lr).sum(-1), 0, 1) ** 2 * (0.25 + 0.75 * ao)
col = (alb * (1.08 * diff[:, None] * np.array([1.0, 0.97, 0.9])
             + 0.20 * amb_sky[:, None] * ao[:, None] * np.array([0.72, 0.72, 0.95])
             + 0.20 * ao[:, None] ** .5 * (1 - ao[:, None] * .4) * alb)         # warm bounce from neighbouring pellets
       + 0.16 * (1 - sh)[:, None] * ao[:, None] * alb * np.array([1.0, 0.55, 0.1])   # subsurface: shadowed sides glow amber
       + specv[:, None] * np.array([1.0, 0.98, 0.92])
       + 0.10 * fres[:, None] * ao[:, None] * np.array([0.72, 0.68, 0.95])
       + 0.24 * rim[:, None] * np.array([0.70, 0.64, 0.98]))
col *= (0.22 + 0.78 * ao ** 1.3)[:, None]
# depth grade: the back of the heap recedes very slightly
dep = zbuf[m]; dn = (dep - dep.min()) / (dep.max() - dep.min())
col = col * (1 - 0.10 * dn[:, None])
col = col / (1 + 0.18 * col)                 # soft shoulder
img = np.zeros((H, W, 4)); img[..., :3][m] = np.clip(col, 0, 1) ** (1 / 2.2) * 0 + np.clip(col, 0, 1) ** (1 / 1.9); img[..., 3][m] = 1
# ---------------- contact shadow on the (invisible) floor ----------------
shad = np.zeros((H, W))
gx, gy = np.meshgrid(np.arange(W), np.arange(H))
for (c, M, r, hl, ov) in P:
    if c[1] > 1.4: continue
    for k, (off, sz, a) in enumerate([(np.array([0, 0, 0]), .55, .5), (np.array([.18, 0, -.1]), .75, .14)]):
        fp = np.array([c[0], 0, c[2]]) + off
        u, v, zc = project(fp); X, Y = to_px(u, v); rr = sz / zc / FOV * SC
        x0, x1 = int(max(0, X - 3*rr)), int(min(W, X + 3*rr)); y0, y1 = int(max(0, Y - 2*rr)), int(min(H, Y + 2*rr))
        if x1 <= x0 or y1 <= y0: continue
        dx = (gx[y0:y1, x0:x1] - X) / rr; dy = (gy[y0:y1, x0:x1] - Y) / (rr * .42)
        sub = shad[y0:y1, x0:x1]; sub[:] = 1 - (1 - sub) * (1 - a * np.exp(-(dx*dx + dy*dy)) * max(0, 1 - c[1] / 1.4))
shad = np.clip(shad * .85, 0, .7)
out = Image.fromarray((img * 255).astype(np.uint8), 'RGBA')
sl = Image.new('RGBA', (W, H), (22, 26, 70, 0)); sl.putalpha(Image.fromarray((shad * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(6 * SS)))
comp = Image.alpha_composite(sl, out)
# edge antialias: the per-pixel hit mask is already supersampled; downsample
comp = comp.resize((WO, int(H / SS)), Image.LANCZOS)
bb = comp.getbbox(); comp = comp.crop((bb[0] - 40, bb[1] - 40, bb[2] + 40, bb[3] + 40))   # transparent margin: nothing reaches the edge
comp.save(OUT); print('saved', OUT, comp.size)
