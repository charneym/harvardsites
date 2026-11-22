#!/usr/bin/env python3
"""Theranano hero (HOME_BRIEF update 2c: a crafted render of the firm's real product). InCeRT implants: drug-eluting
brachytherapy spacers (polymer cylinders, the size of a standard 0.8 mm x 5.5 mm spacer, loaded with docetaxel) laid in
a strand with the titanium seeds they sit between in a brachytherapy needle (theranano.com: "InCeRT spacer implants are
drug-releasing implants for local chemo- and chemoradiation therapy"). Macro studio shot, slightly low and tilted.
Offline numpy SDF ray-marcher: brushed titanium with laser-weld end beads (anisotropic streaks, studio environment
reflection), matte off-white polymer with a soft wrap (subsurface feel) and a fine moulded grain, soft shadows, SDF
ambient occlusion; transparent ground (real alpha, DJ/DP). Usage: python3 render.py out.png [width]"""
import sys, numpy as np
from PIL import Image
out = sys.argv[1]; W = int(sys.argv[2]) if len(sys.argv) > 2 else 2400
H = int(W * 0.86)
rng = np.random.default_rng(7)

def nrm(v): return v / np.linalg.norm(v, axis=-1, keepdims=True)
def rotm(ax, deg):
    ax = np.asarray(ax, float); ax /= np.linalg.norm(ax); t = np.radians(deg); c, s = np.cos(t), np.sin(t); x, y, z = ax
    return np.array([[c+x*x*(1-c), x*y*(1-c)-z*s, x*z*(1-c)+y*s], [y*x*(1-c)+z*s, c+y*y*(1-c), y*z*(1-c)-x*s],
                     [z*x*(1-c)-y*s, z*y*(1-c)+x*s, c+z*z*(1-c)]])

# ---- the objects (mm). Each: centre, unit axis, half-length, radius, kind (0 seed, 1 spacer)
R = 0.40
OB = []
# everything rests on a black acrylic bench (plane y = 0): a strand in its loading order (seed, spacer, seed, spacer,
# seed) running diagonally away from the camera, and loose pieces beside it
def flat(deg): t = np.radians(deg); return np.array([np.cos(t), 0.0, -np.sin(t)])
d0 = flat(28)
pos = -0.5 * (3 * 4.5 + 2 * 5.5 + 4 * 0.45)
for kind, L in [(0, 4.5), (1, 5.5), (0, 4.5), (1, 5.5), (0, 4.5)]:
    OB.append(((pos + L / 2) * d0 + np.array([0, R, 0]), d0, L / 2, R, kind)); pos += L + 0.45
for (x, z, deg, kind) in [(2.6, 5.6, 14, 1), (8.4, 4.4, 52, 1), (-6.4, -4.6, 20, 0), (-1.6, -7.4, 34, 1), (5.2, 9.2, 24, 0), (-4.2, 6.6, 16, 1)]:
    L = 4.5 if kind == 0 else 5.5
    OB.append((np.array([x, R, z]), flat(deg), L / 2, R, kind))
N = len(OB)
C = np.array([o[0] for o in OB]); A = np.array([o[1] for o in OB]); HL = np.array([o[2] for o in OB])
RA = np.array([o[3] for o in OB]); KD = np.array([o[4] for o in OB])

def sdf_all(p):
    """p (M,3) -> distances (M,N), local axial coordinate (M,N), radial vector (M,N,3)"""
    q = p[:, None, :] - C[None]                          # M,N,3
    t = np.einsum('mnk,nk->mn', q, A)                    # axial
    rv = q - t[..., None] * A[None]
    r = np.linalg.norm(rv, axis=-1)
    d = np.empty_like(t)
    s = KD == 0
    # seeds: capsule (cylinder with hemispherical welded ends); half-length includes the caps
    ts = np.clip(t[:, s], -(HL[s] - RA[s]), HL[s] - RA[s])
    d[:, s] = np.sqrt((t[:, s] - ts) ** 2 + r[:, s] ** 2) - RA[s]
    # spacers: rounded cylinder (cut, slightly eased edges)
    e = 0.07
    sp = ~s
    dx = r[:, sp] - (RA[sp] - e); dy = np.abs(t[:, sp]) - (HL[sp] - e)
    d[:, sp] = np.minimum(np.maximum(dx, dy), 0) + np.sqrt(np.maximum(dx, 0) ** 2 + np.maximum(dy, 0) ** 2) - e
    return d, t, rv

def scene(p):
    d, _, _ = sdf_all(p); return d.min(1)

# ---- studio environment (radiance for a direction): big soft box upper-left, strip light right, dark room
def env(d):
    y = d[:, 1]; x = d[:, 0]; z = d[:, 2]
    base = 0.08 + 0.10 * np.clip(y, 0, 1)
    box = np.exp(-(((x + 0.45) / 0.42) ** 2 + ((y - 0.62) / 0.3) ** 2)) * 2.6
    strip = np.exp(-(((x - 0.78) / 0.09) ** 2 + ((y - 0.25) / 0.55) ** 2)) * 1.5
    front = np.exp(-(((x - 0.1) / 0.6) ** 2 + ((y - 0.3) / 0.35) ** 2)) * np.clip(z, 0, 1) * 0.35
    col = np.stack([base + box + strip * 0.95 + front, base + box + strip + front, base + box * 1.02 + strip * 1.04 + front], 1)
    return col * np.where(y < 0, 0.06, 1.0)[:, None]          # the black bench below the horizon

Lk = nrm(np.array([-0.5, 0.75, 0.45]))      # key (the soft box)
Lr = nrm(np.array([0.9, 0.3, -0.25]))       # rim (the strip)

def march(O, D, t0, t1):
    M = D.shape[0]; T = np.full(M, t0); hit = np.zeros(M, bool); alive = np.ones(M, bool)
    for it in range(170):
        idx = np.nonzero(alive)[0]
        if idx.size == 0: break
        d = scene(O[idx] + D[idx] * T[idx, None]); T[idx] += d * 0.9
        h = d < 0.0015; hit[idx[h]] = True
        alive[idx[h | (T[idx] > t1)]] = False
    return hit, T

def shadow(p, L, k=10.0):
    res = np.ones(p.shape[0]); t = np.full(p.shape[0], 0.02)
    for _ in range(48):
        d = scene(p + L * t[:, None]); res = np.minimum(res, k * d / t); t += np.clip(d, 0.02, 0.4)
    # the bench itself blocks nothing above it; objects resting on it get a contact darkening from the AO below
    return np.clip(res, 0, 1)

def shade(P, D):
    n = P.shape[0]
    dd, tt, rr = sdf_all(P); oid = dd.argmin(1); ar_ = np.arange(n)
    e = 0.0008
    Nn = nrm(np.stack([scene(P + [e, 0, 0]) - scene(P - [e, 0, 0]), scene(P + [0, e, 0]) - scene(P - [0, e, 0]),
                       scene(P + [0, 0, e]) - scene(P - [0, 0, e])], 1))
    V = -D
    ax = A[oid]; tloc = tt[ar_, oid]; rvec = rr[ar_, oid]; kind = KD[oid]; hl = HL[oid]
    ref = nrm(np.cross(ax, np.array([0.3, 0.9, 0.2]))); ref2 = np.cross(ax, ref)
    ang = np.arctan2(np.einsum('ij,ij->i', rvec, ref2), np.einsum('ij,ij->i', rvec, ref))
    po = P + Nn * 0.004
    sh = shadow(po, Lk); shr = shadow(po, Lr, 16)
    ao = np.ones(n)
    for i, s_ in enumerate([0.05, 0.12, 0.25, 0.45]):
        ao -= (s_ - scene(P + Nn * s_)) * (1.6 / (i + 1))
    # contact with the bench: occlusion falls off with height above it on the downward-facing side
    ao *= 1 - 0.75 * np.exp(-P[:, 1] / 0.16) * np.clip(-Nn[:, 1] + 0.3, 0, 1)
    ao = np.clip(ao, 0.12, 1)
    ndl = Nn @ Lk; ndr = Nn @ Lr
    Rf = nrm(2 * np.einsum('ij,ij->i', Nn, V)[:, None] * Nn - V)
    ndv = np.clip(np.einsum('ij,ij->i', Nn, V), 0, 1)
    col = np.zeros((n, 3))
    s = kind == 0
    if s.any():   # titanium seeds: brushed along the axis, laser-weld beads at the ends
        a = ang[s]; tl = tloc[s]
        streak = np.sin(a * 37 + 1.3) * 0.5 + np.sin(a * 113 + 0.7) * 0.3 + np.sin(a * 271) * 0.2 + rng.normal(0, 0.1, a.size)
        endz = np.clip((np.abs(tl) - (hl[s] - R - 0.12)) / 0.12, 0, 1)
        bead = np.exp(-((np.abs(tl) - (hl[s] - R - 0.02)) / 0.05) ** 2)
        acc = np.zeros((s.sum(), 3)); rf = Rf[s]; axs = ax[s]
        for off in np.linspace(-0.5, 0.5, 9):
            acc += env(nrm(rf + axs * off * (0.55 + 0.15 * streak[:, None])))
        refl = acc / 9 * 1.35 + 0.05
        F0 = np.array([0.70, 0.69, 0.66])
        fres = F0 + (1 - F0) * ((1 - ndv[s]) ** 5)[:, None]
        ti = refl * fres * (0.86 + 0.14 * streak[:, None]) * (1 - 0.3 * endz[:, None]) * (1 - 0.3 * bead[:, None])
        ti *= (0.5 + 0.5 * sh[s])[:, None] * ao[s, None]
        hv = nrm(Lk + V[s]); spec = np.clip(np.einsum('ij,ij->i', Nn[s], hv), 0, 1) ** 90 * sh[s]
        col[s] = ti + spec[:, None] * 1.4
    sp = kind == 1
    if sp.any():  # drug-loaded polymer spacers: matte off-white, wrap diffuse, moulded grain, soft sheen
        a = ang[sp]; tl = tloc[sp]
        g = np.sin(a * 61 + tl * 47) * np.sin(a * 23 - tl * 91) * 0.5 + rng.normal(0, 1, a.size) * 0.5
        alb = np.array([0.83, 0.81, 0.75]) * (1 + 0.045 * g)[:, None]
        face = np.abs(np.einsum('ij,ij->i', Nn[sp], ax[sp])) > 0.7
        alb[face] *= 0.94
        wrap = np.clip((ndl[sp] + 0.35) / 1.35, 0, 1)
        diff = wrap * (0.25 + 0.75 * sh[sp]) * 1.05
        rim = np.clip((ndr[sp] + 0.2) / 1.2, 0, 1) * shr[sp] * 0.45
        amb = env(Nn[sp]) * 0.22
        sss = ((1 - ndv[sp]) ** 2 * 0.12)[:, None] * np.array([1.0, 0.92, 0.8])
        c = alb * (diff[:, None] * np.array([1.0, 0.98, 0.95]) + rim[:, None] * np.array([0.92, 0.97, 1.0]) + amb) + sss
        hv = nrm(Lk + V[sp]); spec = np.clip(np.einsum('ij,ij->i', Nn[sp], hv), 0, 1) ** 18 * sh[sp] * 0.12
        fr = 0.04 + 0.96 * (1 - ndv[sp]) ** 5
        c += spec[:, None] + env(Rf[sp]) * fr[:, None] * 0.25
        col[sp] = c * ao[sp, None]
    return col

def tone(col): col = col / (1 + col * 0.55) * 1.25; return np.clip(col, 0, 1) ** (1 / 1.9)

# ---- camera
look = np.array([0.6, 0.3, 0.4]); eye = look + 56 * nrm(np.array([0.05, 0.95, 1.0])); fov = 30.0
fw = nrm(look - eye); rt = nrm(np.cross(fw, [0, 1, 0])); up = np.cross(rt, fw)
WW, HH = W, H
ys, xs = np.mgrid[0:HH, 0:WW]
ar = WW / HH; tf = np.tan(np.radians(fov / 2))
u = ((xs + 0.5) / WW * 2 - 1) * tf * ar; v = (1 - (ys + 0.5) / HH * 2) * tf
D = nrm(u[..., None] * rt + v[..., None] * up + fw).reshape(-1, 3)
M = D.shape[0]
O = np.broadcast_to(eye, D.shape)
hit, T = march(O, D, 40.0, 80.0)
print('hits', hit.sum())
img = np.zeros((M, 4))
hi = np.nonzero(hit)[0]
img[hi, :3] = tone(shade(eye + D[hi] * T[hi, None], D[hi])); img[hi, 3] = 1
# ---- the black acrylic bench: a dim mirror (Fresnel ~5-12 %), its reflection fading with distance from the pieces.
# Written as real alpha (premultiplied colour over the page ink), so there is no ground plane edge anywhere (DJ).
mi = np.nonzero(~hit & (D[:, 1] < 0))[0]
tp = -eye[1] / D[mi, 1]; Pp = eye + D[mi] * tp[:, None]
near = scene(Pp) < 3.2
mi = mi[near]; Pp = Pp[near]
Dr = D[mi] * np.array([1, -1, 1])
h2, T2 = march(Pp + Dr * 0.002, Dr, 0.0, 6.0)
ri = np.nonzero(h2)[0]
Q = Pp[ri] + Dr[ri] * T2[ri, None]
rc = shade(Q, Dr[ri])
cos = np.clip(-D[mi[ri], 1], 0, 1)
fres = 0.045 + 0.95 * (1 - cos) ** 5
fall = np.exp(-Q[:, 1] / 0.9)                   # a slightly frosted acrylic: the image fades away from the contact
rl = tone(rc * (fres * fall * 1.6)[:, None])
al = np.clip(rl.max(1), 0, 1)
img[mi[ri], :3] = rl / np.maximum(al, 1e-4)[:, None]; img[mi[ri], 3] = al
img = img.reshape(HH, WW, 4)
pm = img.copy(); pm[..., :3] *= pm[..., 3:4]          # resize in premultiplied space
o = Image.fromarray((pm * 255).astype(np.uint8), 'RGBA').resize((W // 2, H // 2), Image.LANCZOS)
a = np.asarray(o).astype(float); al = a[..., 3:4] / 255
a[..., :3] = np.where(al > 0, a[..., :3] / np.maximum(al, 1e-4), 0)
o = Image.fromarray(np.clip(a, 0, 255).astype(np.uint8), 'RGBA')
bb = o.getbbox(); o = o.crop((max(bb[0] - 30, 0), max(bb[1] - 30, 0), min(bb[2] + 30, o.width), min(bb[3] + 30, o.height)))
o.save(out); print('size', o.size)
