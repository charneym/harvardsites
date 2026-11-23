#!/usr/bin/env python3
"""OnePass Medical hero (HOME_BRIEF update 2c: a crafted render of the firm's real product). InstaFan, the disposable
multi-needle EUS-FNA/B device, at its distal tip: the catheter sheath, a 22-gauge FNB central needle and four 25-gauge
FNA peripheral needles fanned out of it (onepassmedical.com/instafan: 22G FNB central, 4 x 25G FNA peripheral, 10 mm
spread at 30 mm deployment). Echogenic dimples on the distal shafts, lancet bevels with the lumen open, as in the
company's own product render. Offline numpy SDF ray-marcher: polished stainless steel reflecting a cool studio, matte
polymer sheath, soft shadows, SDF ambient occlusion; the sheath recedes into shadow (real alpha, no box edge: DJ/DP).
Usage: python3 render.py out.png [width]"""
import sys, numpy as np
from PIL import Image
out = sys.argv[1]; W = int(sys.argv[2]) if len(sys.argv) > 2 else 2400
H = int(W * 0.78)
rng = np.random.default_rng(3)
def nrm(v): return v / np.linalg.norm(v, axis=-1, keepdims=True)

# ---- geometry (mm). S: the device axis (needles advance along +S)
S = nrm(np.array([-1.0, -0.40, 0.95]))
U0 = nrm(np.cross(S, [0, 1, 0])); V0 = np.cross(U0, S)
RS = 1.25                                   # sheath radius (fits a 2.8 mm working channel)
FAN = np.radians(9.5)                       # 5 mm out at 30 mm: the 10 mm spread
NC, NA, NR, NRI, NL, NB = [], [], [], [], [], []
EYE_DIR = nrm(np.array([0.10, 0.30, 1.0]))
def bev_dir(a):                              # bevel opens toward the camera
    b = EYE_DIR - a * (EYE_DIR @ a); b = b / np.linalg.norm(b); c = np.cross(a, b)
    return np.cos(np.radians(68)) * b + np.sin(np.radians(68)) * c   # turned so the lancet point reads in profile
NC.append(np.zeros(3)); NA.append(S); NR.append(0.36); NRI.append(0.25); NL.append(21.0)
for k, ph in enumerate(np.radians([45, 135, 225, 315])):
    rad = np.cos(ph) * U0 + np.sin(ph) * V0
    NC.append(rad * 0.74); NA.append(nrm(S * np.cos(FAN) + rad * np.sin(FAN))); NR.append(0.257); NRI.append(0.17)
    NL.append(19.0 + 0.8 * k)
NC = np.array(NC); NA = np.array(NA); NR = np.array(NR); NRI = np.array(NRI); NL = np.array(NL)
NB = np.array([bev_dir(a) for a in NA])
TH = np.radians(17)
LB = 2 * NR / np.tan(TH)
NBN = nrm(NA * (2 * NR)[:, None] + NB * LB[:, None])       # bevel plane normals
PT = NC + NA * NL[:, None] - NB * NR[:, None]              # the sharp point
OFF = np.einsum('nk,nk->n', PT, NBN)

def needles(p):
    q = p[:, None, :] - NC[None]
    t = np.einsum('mnk,nk->mn', q, NA)
    rv = q - t[..., None] * NA[None]; r = np.linalg.norm(rv, axis=-1)
    ann = np.abs(r - (NR + NRI) / 2) - (NR - NRI) / 2
    back = -(t + 3.0)
    bev = np.einsum('mk,nk->mn', p, NBN) - OFF
    return np.maximum(np.maximum(ann, back), bev), t, rv, r, ann, bev

def sheath(p):
    t = p @ S; r = np.linalg.norm(p - t[:, None] * S, axis=1); e = 0.12
    dx = r - (RS - e); dy = np.abs(t + 60) - (60 - e)
    d = np.minimum(np.maximum(dx, dy), 0) + np.sqrt(np.maximum(dx, 0) ** 2 + np.maximum(dy, 0) ** 2) - e
    for i in range(5):                       # the five lumens in the face
        q = p - NC[i]; ti = q @ NA[i]; ri = np.linalg.norm(q - ti[:, None] * NA[i], axis=1)
        d = np.maximum(d, -np.maximum(ri - (NR[i] + 0.06), -ti - 2.0))
    return d, t

def scene(p):
    return np.minimum(needles(p)[0].min(1), sheath(p)[0])

def env(d):
    x, y, z = d[:, 0], d[:, 1], d[:, 2]
    base = 0.05 + 0.07 * np.clip(y, 0, 1)
    box = np.exp(-(((x + 0.35) / 0.45) ** 2 + ((y - 0.65) / 0.32) ** 2)) * 2.8
    strip = np.exp(-(((x - 0.8) / 0.1) ** 2 + ((y - 0.2) / 0.6) ** 2)) * 1.6
    floor = np.exp(-((y + 0.5) / 0.3) ** 2) * 0.18
    front = np.exp(-(((x - 0.05) / 0.55) ** 2 + ((y - 0.25) / 0.35) ** 2)) * np.clip(z, 0, 1) * 0.45
    col = np.stack([base + box * 0.97 + strip * 0.45 + front + floor * 0.5,
                    base + box * 1.0 + strip * 0.72 + front + floor * 0.7,
                    base * 1.3 + box * 1.04 + strip * 1.15 + front * 1.05 + floor])
    return col.T

Lk = nrm(np.array([-0.45, 0.8, 0.4])); Lr = nrm(np.array([0.9, 0.25, -0.3]))

def march(O, D, t0, t1):
    M = D.shape[0]; T = np.full(M, t0); hit = np.zeros(M, bool); alive = np.ones(M, bool)
    for it in range(260):
        idx = np.nonzero(alive)[0]
        if idx.size == 0: break
        d = scene(O[idx] + D[idx] * T[idx, None]); T[idx] += d * 0.85
        h = d < 0.0012; hit[idx[h]] = True
        alive[idx[h | (T[idx] > t1)]] = False
    return hit, T

def shadow(p, L, k=12.0):
    res = np.ones(p.shape[0]); t = np.full(p.shape[0], 0.01)
    for _ in range(40):
        d = scene(p + L * t[:, None]); res = np.minimum(res, k * d / t); t += np.clip(d, 0.01, 1.5)
    return np.clip(res, 0, 1)

def shade(P, D):
    n = P.shape[0]; e = 0.0006
    Nn = nrm(np.stack([scene(P + [e, 0, 0]) - scene(P - [e, 0, 0]), scene(P + [0, e, 0]) - scene(P - [0, e, 0]),
                       scene(P + [0, 0, e]) - scene(P - [0, 0, e])], 1))
    V = -D
    dn, tn, rvn, rn, ann, bev = needles(P); ds, ts = sheath(P)
    oid = dn.argmin(1); ar_ = np.arange(n)
    isN = dn[ar_, oid] < ds
    po = P + Nn * 0.003
    sh = shadow(po, Lk)
    ao = np.ones(n)
    for i, s_ in enumerate([0.04, 0.1, 0.22, 0.45]):
        ao -= (s_ - scene(P + Nn * s_)) * (1.4 / (i + 1))
    ao = np.clip(ao, 0.15, 1)
    Rf = nrm(2 * np.einsum('ij,ij->i', Nn, V)[:, None] * Nn - V)
    ndv = np.clip(np.einsum('ij,ij->i', Nn, V), 0, 1)
    col = np.zeros((n, 3)); alpha = np.ones(n)
    m = isN
    if m.any():                              # polished stainless needles
        o = oid[m]; ax = NA[o]; tl = tn[ar_[m], o]; rv = rvn[ar_[m], o]; r = rn[ar_[m], o]
        inner = r < (NR[o] + NRI[o]) / 2 - 0.004
        onbev = bev[ar_[m], o] > ann[ar_[m], o] - 0.002
        ref = nrm(np.cross(ax, np.array([0.3, 0.9, 0.2]))); ref2 = np.cross(ax, ref)
        ang = np.arctan2(np.einsum('ij,ij->i', rv, ref2), np.einsum('ij,ij->i', rv, ref))
        streak = np.sin(ang * 53 + 1.1) * 0.5 + np.sin(ang * 151) * 0.3 + rng.normal(0, 0.08, ang.size)
        acc = np.zeros((m.sum(), 3)); rf = Rf[m]
        for off in np.linspace(-0.35, 0.35, 7):
            acc += env(nrm(rf + ax * off * (0.5 + 0.1 * streak[:, None])))
        refl = acc / 7 * 1.55 + 0.05
        F0 = np.array([0.64, 0.65, 0.66])
        fres = F0 + (1 - F0) * ((1 - ndv[m]) ** 5)[:, None]
        c = refl * fres * (0.9 + 0.1 * streak[:, None])
        # echogenic dimples on the distal shaft (staggered rows), never on the bevel
        rowp = 0.75; k = np.floor(tl / rowp); ph = ang + (k % 2) * (np.pi / 4)
        da = (np.mod(ph, np.pi / 2) - np.pi / 4) * NR[o]; dt = (np.mod(tl, rowp) - rowp / 2)
        dist = np.sqrt(da ** 2 + dt ** 2)
        zone = np.clip((tl - (NL[o] - 10)) / 1.5, 0, 1) * np.clip((NL[o] - LB[o] - 0.8 - tl) / 0.6, 0, 1)
        dim = np.clip((0.075 - dist) / 0.025, 0, 1) * zone * (~inner) * (~onbev)
        c = c * (1 - 0.72 * dim[:, None]) + dim[:, None] * 0.03
        bvc = env(rf) * 0.95 * fres + 0.05
        c = np.where(onbev[:, None] & ~inner[:, None], bvc * 1.1, c)
        c = np.where(inner[:, None], c * 0.12 + 0.012, c)
        c *= (0.55 + 0.45 * sh[m])[:, None] * ao[m, None]
        hv = nrm(Lk + V[m]); spec = np.clip(np.einsum('ij,ij->i', Nn[m], hv), 0, 1) ** 120 * sh[m] * (~inner)
        col[m] = c + spec[:, None] * 1.6
    s = ~isN
    if s.any():                              # matte polymer sheath
        t = ts[s]
        g = rng.normal(0, 1, s.sum()) * 0.02
        alb = np.array([0.60, 0.63, 0.67]) * (1 + g)[:, None]
        face = np.abs(Nn[s] @ S) > 0.8
        alb[face] *= 0.82
        ndl = Nn[s] @ Lk; ndr = Nn[s] @ Lr
        wrap = np.clip((ndl + 0.3) / 1.3, 0, 1)
        diff = wrap * (0.3 + 0.7 * sh[s])
        rim = np.clip((ndr + 0.15) / 1.15, 0, 1) * 0.42
        amb = env(Nn[s]) * 0.22
        c = alb * (diff[:, None] + rim[:, None] * np.array([0.8, 0.9, 1.08]) + amb)
        hv = nrm(Lk + V[s]); spec = np.clip(np.einsum('ij,ij->i', Nn[s], hv), 0, 1) ** 26 * sh[s] * 0.16
        fr = 0.04 + 0.96 * (1 - ndv[s]) ** 5
        c += spec[:, None] + env(Rf[s]) * fr[:, None] * 0.3
        col[s] = c * ao[s, None]
        # the sheath recedes into shadow: a long eased fade along its length (no edge anywhere)
        f = np.clip((t + 26) / 20, 0, 1); f = f * f * (3 - 2 * f)
        col[s] *= (0.35 + 0.65 * f)[:, None]; alpha[s] = f
    return col, alpha

def tone(col): col = col / (1 + col * 0.5) * 1.25; return np.clip(col, 0, 1) ** (1 / 1.9)

look = S * 5.5; eye = look + 62 * EYE_DIR; fov = 30.0
fw = nrm(look - eye); rt = nrm(np.cross(fw, [0, 1, 0])); up = np.cross(rt, fw)
ys, xs = np.mgrid[0:H, 0:W]
ar = W / H; tf = np.tan(np.radians(fov / 2))
u = ((xs + 0.5) / W * 2 - 1) * tf * ar; v = (1 - (ys + 0.5) / H * 2) * tf
D = nrm(u[..., None] * rt + v[..., None] * up + fw).reshape(-1, 3)
M = D.shape[0]; O = np.broadcast_to(eye, D.shape)
img = np.zeros((M, 4))
CH = 400000
for a0 in range(0, M, CH):
    sl = slice(a0, min(a0 + CH, M))
    hit, T = march(O[sl], D[sl], 20.0, 160.0)
    hi = np.nonzero(hit)[0]
    if hi.size:
        c, al = shade(eye + D[sl][hi] * T[hi, None], D[sl][hi])
        blk = img[sl]; blk[hi, :3] = tone(c); blk[hi, 3] = al; img[sl] = blk
    print('chunk', a0, M, flush=True)
img = img.reshape(H, W, 4)
pm = img.copy(); pm[..., :3] *= pm[..., 3:4]
o = Image.fromarray((pm * 255).astype(np.uint8), 'RGBA').resize((W // 2, H // 2), Image.LANCZOS)
a = np.asarray(o).astype(float); al = a[..., 3:4] / 255
a[..., :3] = np.where(al > 0, a[..., :3] / np.maximum(al, 1e-4), 0)
o = Image.fromarray(np.clip(a, 0, 255).astype(np.uint8), 'RGBA')
bb = o.getbbox(); print('bbox', bb, o.size)
o = o.crop((max(bb[0] - 30, 0), max(bb[1] - 30, 0), min(bb[2] + 30, o.width), min(bb[3] + 30, o.height)))
o.save(out); print('size', o.size)
