#!/usr/bin/env python3
"""PharmaIN hero (HOME_BRIEF update 2c: a crafted render of the real mechanism). Arginine vasopressin, the nine-residue
peptide hormone of the V1a axis that PHIN-214 (a partial V1a agonist peptide) is engineered from, shown as a ball-and-stick
model: the Cys1-Cys6 disulfide ring (gold sulfur pair) with its Pro-Arg-Gly tail. Real heavy-atom geometry from conf.py
(PubChem CID 644077 SMILES, RDKit ETKDG + MMFF). Analytic orthographic ray-cast of spheres and cylinders (numpy),
glazed-ceramic shading (wrap diffuse, two speculars, ambient occlusion from neighbouring atoms, a teal fresnel rim),
2x supersampled, depth-of-field on the far atoms. Saved with ALPHA (no ground of its own, DJ). Not PHIN-214's own
structure, which is not published.
Usage: python3 render.py W H out.png"""
import sys, json, numpy as np
from PIL import Image, ImageFilter
W = int(sys.argv[1]) if len(sys.argv) > 1 else 1300
H = int(sys.argv[2]) if len(sys.argv) > 2 else 1200
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = 2; w, h = W * SS, H * SS
D = json.load(open('avp.json'))
P = np.array([a[1:] for a in D['atoms']]); EL = [a[0] for a in D['atoms']]
P -= P.mean(0)
# principal axes: longest along x, thinnest along z (towards camera), then a gentle tilt for depth
ev, vec = np.linalg.eigh(np.cov(P.T)); R = vec[:, ::-1]; P = P @ R
def rot(ax, ay, az):
    cx, sx, cy, sy, cz, sz = np.cos(ax), np.sin(ax), np.cos(ay), np.sin(ay), np.cos(az), np.sin(az)
    return np.array([[cz, -sz, 0], [sz, cz, 0], [0, 0, 1]]) @ np.array([[cy, 0, sy], [0, 1, 0], [-sy, 0, cy]]) @ np.array([[1, 0, 0], [0, cx, -sx], [0, sx, cx]])
P = P @ rot(0.42, -0.5, 0.55).T
COL = {'C': (0.80, 0.84, 0.83), 'N': (0.08, 0.62, 0.68), 'O': (0.86, 0.40, 0.34), 'S': (0.92, 0.74, 0.30)}
RAD = {'C': .43, 'N': .44, 'O': .42, 'S': .58}
BR = .165
ext = max(P[:, 0].max() - P[:, 0].min(), (P[:, 1].max() - P[:, 1].min()) * W / H) + 1.4
sc = w * .86 / ext                                   # px per Angstrom
cx0, cy0 = (P[:, 0].max() + P[:, 0].min()) / 2, (P[:, 1].max() + P[:, 1].min()) / 2
def scr(p): return np.array([w / 2 + (p[0] - cx0) * sc, h / 2 - (p[1] - cy0) * sc, p[2] * sc])
S = np.array([scr(p) for p in P])                  # screen coords, z towards camera (px)
ZB = np.full((h, w), -1e9); NX = np.zeros((h, w, 3)); CB = np.zeros((h, w, 3)); HP = np.zeros((h, w, 3))
def put(y0, y1, x0, x1, z, n, col, hit):
    zb = ZB[y0:y1, x0:x1]; m = hit & (z > zb)
    zb[m] = z[m]; NX[y0:y1, x0:x1][m] = n[m]; CB[y0:y1, x0:x1][m] = col[m] if col.ndim == 3 else col
    HP[y0:y1, x0:x1][m] = np.stack([X[m], Y[m], z[m]], -1)
for i, (s, e) in enumerate(zip(S, EL)):
    r = RAD[e] * sc
    x0, x1 = int(max(0, s[0] - r - 2)), int(min(w, s[0] + r + 3)); y0, y1 = int(max(0, s[1] - r - 2)), int(min(h, s[1] + r + 3))
    Y, X = np.mgrid[y0:y1, x0:x1].astype(float) + .5
    d2 = (X - s[0]) ** 2 + (Y - s[1]) ** 2; hit = d2 < r * r
    dz = np.sqrt(np.maximum(r * r - d2, 0)); z = s[2] + dz
    n = np.stack([(X - s[0]) / r, -(Y - s[1]) / r, dz / r], -1)
    put(y0, y1, x0, x1, z, n, np.array(COL[e]), hit)
for a, b, order in D['bonds']:
    p0, p1 = S[a], S[b]; ax = p1 - p0; L = np.linalg.norm(ax); u = ax / L
    offs = [0.0] if order == 1 else ([-1, 1] if order == 2 else [0.0])
    rr = BR * sc * (0.62 if order == 2 else 1.0)
    side = np.cross(u, [0, 0, 1.]); side = side / (np.linalg.norm(side) + 1e-9)
    for o in offs:
        q0 = p0 + side * o * rr * 1.45
        x0 = int(max(0, min(q0[0], q0[0] + ax[0]) - rr - 2)); x1 = int(min(w, max(q0[0], q0[0] + ax[0]) + rr + 3))
        y0 = int(max(0, min(q0[1], q0[1] + ax[1]) - rr - 2)); y1 = int(min(h, max(q0[1], q0[1] + ax[1]) + rr + 3))
        if x1 <= x0 or y1 <= y0: continue
        Y, X = np.mgrid[y0:y1, x0:x1].astype(float) + .5
        # orthographic ray along -z through (X, Y): screen y grows downward, so use world-like coords (X, -Y)
        uu = np.array([u[0], -u[1], u[2]]); base = np.array([q0[0], -q0[1], q0[2]])
        w0 = np.stack([X - base[0], -Y - base[1], -base[2] + 0 * X], -1)
        Av = np.array([0, 0, 1.]) - uu[2] * uu
        B = w0 - (w0 @ uu)[..., None] * uu
        qa = Av @ Av; qb = 2 * (B @ Av); qc = (B * B).sum(-1) - rr * rr
        disc = qb * qb - 4 * qa * qc; ok = disc > 0
        z = (-qb + np.sqrt(np.maximum(disc, 0))) / (2 * qa)
        wv = w0 + z[..., None] * np.array([0, 0, 1.]); sp = wv @ uu
        hit = ok & (sp > 0) & (sp < L)
        perp = wv - sp[..., None] * uu; n = perp / rr
        col = np.where((sp < L / 2)[..., None], np.array(COL[EL[a]]), np.array(COL[EL[b]]))
        put(y0, y1, x0, x1, z, n, col, hit)
mask = ZB > -1e8
n = NX / np.maximum(np.linalg.norm(NX, axis=-1, keepdims=True), 1e-9)
Ld = np.array([-.48, .62, .62]); Ld /= np.linalg.norm(Ld)
F = np.array([.7, -.25, .4]); F /= np.linalg.norm(F)
V = np.array([0, 0, 1.])
dif = np.clip((n @ Ld + .35) / 1.35, 0, 1) ** 1.25
fil = np.clip(n @ F, 0, 1) * .22
Hh = (Ld + V) / np.linalg.norm(Ld + V); spec = np.clip(n @ Hh, 0, 1) ** 70 * .9 + np.clip(n @ Hh, 0, 1) ** 12 * .12
fres = (1 - np.clip(n @ V, 0, 1)) ** 3
# ambient occlusion: neighbouring atoms in front/around the hit point
hp = HP.copy(); hp[..., 1] = -hp[..., 1]
SW = np.array([[s[0], -s[1], s[2]] for s in S]); ao = np.zeros((h, w))
ys, xs = np.nonzero(mask); pts = hp[ys, xs]; nn = n[ys, xs]; occ = np.zeros(len(pts))
for j, s in enumerate(SW):
    dv = s - pts; dd = np.linalg.norm(dv, axis=1) + 1e-6
    rj = RAD[EL[j]] * sc
    facing = np.clip((dv * nn).sum(1) / dd, 0, 1)
    occ += facing * np.clip((rj * 2.6) / dd, 0, 1) ** 2 * (dd > rj * 1.02)
ao[ys, xs] = np.clip(1 - occ * .55, .28, 1)
base = CB
rgb = base * (dif[..., None] * .86 + .14) * ao[..., None] + base * fil[..., None] + spec[..., None] * np.array([1, .98, .95]) * ao[..., None] ** .5
rgb += fres[..., None] * np.array([.10, .62, .66]) * .55
# depth cue: far atoms sink into the teal-black ink
zr = (ZB - S[:, 2].min()) / (S[:, 2].max() - S[:, 2].min() + 1e-9)
fog = np.clip(1 - zr, 0, 1) ** 1.6 * .5
ink = np.array([.024, .09, .096])
rgb = rgb * (1 - fog[..., None]) + ink * fog[..., None]
rgb = np.clip(rgb, 0, 1)
alpha = mask.astype(float)
img = np.dstack([rgb * alpha[..., None], alpha])  # premultiplied
im = Image.fromarray((img * 255).astype(np.uint8), 'RGBA')
# depth of field: blur the far half
farm = Image.fromarray((np.clip((0.55 - zr) / .4, 0, 1) * mask * 255).astype(np.uint8))
bl = im.filter(ImageFilter.GaussianBlur(5 * SS))
im = Image.composite(bl, im, farm.filter(ImageFilter.GaussianBlur(3)))
im = im.resize((W, H), Image.LANCZOS)
a = np.asarray(im).astype(float) / 255
out = np.dstack([a[..., :3] / np.maximum(a[..., 3:], 1e-4), a[..., 3:]])
Image.fromarray((np.clip(out, 0, 1) * 255).astype(np.uint8), 'RGBA').save(OUT)
print('saved', OUT)
