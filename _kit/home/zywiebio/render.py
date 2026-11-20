#!/usr/bin/env python3
"""Zywie Bio hero: a crafted ball-and-stick render of ambroxol, the molecule Zywie's programme is built on
(PubChem CID 2132, 3D conformer, ambroxol.sdf; ZW-002 and ZW-010 are stabilised analogs of it, per NIH RePORTER
1R43AG097283-01). Lacquered material model: Lambert + clear-coat specular from a soft key light, Fresnel environment
reflection, soft shadows and ray-traced ambient occlusion. Carbon in the logo's forest green, nitrogen in the header
rule's amber, bromine in bronze, oxygen in bone, hydrogen in the logo swoosh's silver. Transparent ground (DJ).
Usage: python3 render.py W H out.png [SS]"""
import sys, numpy as np, pathlib
from PIL import Image
H0 = pathlib.Path(__file__).resolve().parent
W = int(sys.argv[1]) if len(sys.argv) > 1 else 900
H = int(sys.argv[2]) if len(sys.argv) > 2 else 1000
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 2
FW, FH = W, H; W, H = W * SS, H * SS

def nrm(v): return v / np.linalg.norm(v, axis=-1, keepdims=True)
L = (H0 / 'ambroxol.sdf').read_text().splitlines()
na, nb = int(L[3][:3]), int(L[3][3:6])
P = np.array([[float(x) for x in L[4 + i].split()[:3]] for i in range(na)])
EL = [L[4 + i].split()[3] for i in range(na)]
B = [(int(L[4 + na + j][:3]) - 1, int(L[4 + na + j][3:6]) - 1, int(L[4 + na + j][6:9])) for j in range(nb)]
P -= P.mean(0)
# orient: long axis on a rising diagonal, ring plane turned a little toward the camera
def rot(ax, a):
    c, s = np.cos(a), np.sin(a)
    if ax == 'x': return np.array([[1, 0, 0], [0, c, -s], [0, s, c]])
    if ax == 'y': return np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]])
    return np.array([[c, -s, 0], [s, c, 0], [0, 0, 1]])
Rm = rot('z', np.radians(float(sys.argv[5]) if len(sys.argv) > 5 else 52)) @ rot('y', np.radians(float(sys.argv[6]) if len(sys.argv) > 6 else 20)) @ rot('x', np.radians(float(sys.argv[7]) if len(sys.argv) > 7 else -40))
P = P @ Rm.T
RAD = {'C': .56, 'N': .56, 'O': .56, 'Br': .74, 'H': .34}
COL = {'C': (0.0, 0.20, 0.05), 'N': (0.95, 0.55, 0.04), 'O': (0.90, 0.87, 0.80), 'Br': (0.62, 0.36, 0.18), 'H': (0.70, 0.72, 0.74)}
SPC = {'C': .9, 'N': .8, 'O': .7, 'Br': 1.2, 'H': .6}
SR = np.array([RAD[e] for e in EL]); SC = np.array([COL[e] for e in EL]); SK = np.array([SPC[e] for e in EL])
BR = 0.17
# cylinders: two halves per bond (each half coloured by its atom)
CA, CB, CC, CK = [], [], [], []
for a, b, o in B:
    m = (P[a] + P[b]) / 2
    for s, e in ((a, m), (b, m)):
        CA.append(P[s] if isinstance(s, (int, np.integer)) else s); CB.append(e); CC.append(SC[s]); CK.append(SK[s])
CA, CB, CC, CK = map(np.array, (CA, CB, CC, CK))
CA = np.array([P[a] for a, b, o in B for _ in (0,)] + [P[b] for a, b, o in B])
CB = np.array([(P[a] + P[b]) / 2 for a, b, o in B] * 2)
CC = np.array([SC[a] for a, b, o in B] + [SC[b] for a, b, o in B])
CK = np.array([SK[a] for a, b, o in B] + [SK[b] for a, b, o in B])

# camera (mild perspective), framed to fit with margin
cam = np.array([0, 0, 40.0]); ext = np.abs(P[:, :2]).max(0) + 0.8
fov = 2 * max(ext[0] / (W / H), ext[1]) * 1.12 / 40.0  # half-height slope*2
def prim_hits(o, d):
    """o,d: (N,3). Returns t, normal, colour, spec, id for nearest hit."""
    N = len(o); tb = np.full(N, np.inf); nb_ = np.zeros((N, 3)); cb = np.zeros((N, 3)); kb = np.zeros(N)
    for i in range(na):
        oc = o - P[i]; bq = (oc * d).sum(1); cq = (oc * oc).sum(1) - SR[i] ** 2; h = bq * bq - cq
        ok = h > 0; t = -bq - np.sqrt(np.where(ok, h, 0)); ok &= (t > 1e-4) & (t < tb)
        if ok.any():
            tb[ok] = t[ok]; pn = o[ok] + d[ok] * t[ok, None]; nb_[ok] = (pn - P[i]) / SR[i]; cb[ok] = SC[i]; kb[ok] = SK[i]
    for i in range(len(CA)):
        a, b = CA[i], CB[i]; ba = b - a; baba = ba @ ba; oc = o - a
        bard = d @ ba; baoc = oc @ ba
        k2 = baba - bard * bard; k1 = baba * (oc * d).sum(1) - baoc * bard; k0 = baba * (oc * oc).sum(1) - baoc * baoc - BR * BR * baba
        h = k1 * k1 - k2 * k0; ok = (h > 0) & (np.abs(k2) > 1e-9)
        t = (-k1 - np.sqrt(np.where(ok, h, 0))) / np.where(ok, k2, 1); y = baoc + t * bard
        ok &= (y > 0) & (y < baba) & (t > 1e-4) & (t < tb)
        if ok.any():
            tb[ok] = t[ok]; pn = o[ok] + d[ok] * t[ok, None]; q = a + ba * (y[ok, None] / baba)
            nb_[ok] = (pn - q) / BR; cb[ok] = CC[i]; kb[ok] = CK[i]
    return tb, nb_, cb, kb
def occluded(o, d, maxt=np.inf):
    t, _, _, _ = prim_hits(o, d); return t < maxt

KEY = nrm(np.array([-0.55, 0.75, 0.62])); RIM = nrm(np.array([0.75, 0.25, -0.6])); FILL = nrm(np.array([0.5, -0.5, 0.7]))
rng = np.random.default_rng(3)
def env(r):  # studio environment: dark green ground, soft overhead box, warm-white strip left
    y = r[:, 1]; base = np.clip(0.04 + 0.10 * (y + 1) / 2, 0, 1)[:, None] * np.array([0.55, 0.75, 0.6])
    box = np.exp(-((r @ KEY) - 1) ** 2 / 0.018)[:, None] * np.array([1.0, 0.97, 0.9]) * 1.6
    strip = np.exp(-((r @ RIM) - 1) ** 2 / 0.03)[:, None] * np.array([0.85, 0.95, 0.85]) * 0.8
    return base + box + strip
img = np.zeros((H, W, 4))
ys, xs = np.mgrid[0:H, 0:W]
u = ((xs + 0.5) / W - 0.5) * fov * (W / H); v = (0.5 - (ys + 0.5) / H) * fov
D = nrm(np.stack([u, v, -np.ones_like(u)], -1).reshape(-1, 3)); O = np.broadcast_to(cam, D.shape).copy()
CH = 200000
out = np.zeros((len(D), 4))
for s in range(0, len(D), CH):
    o, d = O[s:s + CH], D[s:s + CH]
    t, n, c, k = prim_hits(o, d); hit = np.isfinite(t)
    if not hit.any(): continue
    o, d, t, n, c, k = o[hit], d[hit], t[hit], n[hit], c[hit], k[hit]
    p = o + d * t[:, None] + n * 1e-3
    # soft key shadow (6 jittered samples)
    sh = np.zeros(len(p))
    for j in range(6):
        ld = nrm(KEY + rng.normal(0, 0.08, 3)); sh += ~occluded(p, np.broadcast_to(ld, p.shape).copy())
    sh /= 6
    # ambient occlusion (10 cosine samples, short range)
    ao = np.zeros(len(p))
    for j in range(10):
        r = nrm(rng.normal(size=p.shape)); r = nrm(n + r)
        ao += ~occluded(p, r, 1.6)
    ao = ao / 10
    ndl = np.clip(n @ KEY, 0, 1); ndf = np.clip(n @ FILL, 0, 1) * 0.25
    vdir = -d; hv = nrm(KEY[None] + vdir); spec = np.clip((n * hv).sum(1), 0, 1) ** 90 * 2.2 * sh
    spec2 = np.clip((n * hv).sum(1), 0, 1) ** 14 * 0.10 * sh
    rim = np.clip(n @ RIM, 0, 1) ** 2 * 0.55
    fres = 0.04 + 0.96 * (1 - np.clip((n * vdir).sum(1), 0, 1)) ** 5
    refl = d - 2 * (d * n).sum(1)[:, None] * n; envc = env(refl)
    diff = c * (ndl * sh * 1.05 + ndf + 0.10 * ao)[:, None] * (0.55 + 0.45 * ao)[:, None]
    col = diff + c * rim[:, None] * (0.6 + 0.4 * ao)[:, None] + (spec + spec2)[:, None] * k[:, None] * np.array([1, .98, .93]) \
          + envc * (fres * 0.9 + 0.03)[:, None] * (0.4 + 0.6 * ao)[:, None]
    # depth cue: farther atoms sink slightly into the ink
    z = (p[:, 2] - P[:, 2].min()) / (np.ptp(P[:, 2]) + 1e-6); col *= (0.72 + 0.28 * z)[:, None]
    blk = np.zeros((len(hit), 4)); blk[hit, :3] = col; blk[hit, 3] = 1; out[s:s + CH] = blk
img = out.reshape(H, W, 4)
rgb = img[..., :3]; rgb = rgb / (1 + rgb * 0.35)  # gentle tonemap
rgb = np.clip(rgb, 0, 1) ** (1 / 2.2)
im = Image.fromarray((np.dstack([rgb, img[..., 3]]) * 255).astype(np.uint8), 'RGBA')
im = im.resize((FW, FH), Image.LANCZOS); im.save(OUT); print('wrote', OUT, im.size)
