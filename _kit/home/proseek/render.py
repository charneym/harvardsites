#!/usr/bin/env python3
"""Proseek Bio hero (HOME_BRIEF 2c: a crafted render of the firm's real subject). A serum glycoprotein carrying
its glycans, the thing Proseek's glycoproteomic tests read: human alpha1-acid glycoprotein (orosomucoid, PDB 3KQ0,
every heavy atom from the crystal structure) with complex N-glycans built atom by atom at its five real
N-glycosylation sites (Asn15, 38, 54, 75, 85): chitobiose core, branching mannoses, GlcNAc-Gal-sialic acid
antennae, some tri-antennary, some core-fucosylated. Space-filling molecular illustration: every atom a sphere,
z-buffered, key/fill/rim light, ambient occlusion, depth cueing. Protein in Proseek navy, glycans in rose.
Saved with ALPHA (no ground of its own, DJ/DP). Usage: python3 render.py W H out.png [seed]"""
import sys, math, numpy as np, pathlib
from PIL import Image
W = int(sys.argv[1]); H = int(sys.argv[2]); OUT = sys.argv[3]; SEED = int(sys.argv[4]) if len(sys.argv) > 4 else 3
SS = 2; w, h = W * SS, H * SS
rng = np.random.default_rng(SEED)
def nrm(v): return v / np.maximum(np.linalg.norm(v, axis=-1, keepdims=True), 1e-9)
def rot(ax, a):
    ax = np.array(ax, float); ax /= np.linalg.norm(ax); x, y, z = ax; c, s = math.cos(a), math.sin(a); C = 1 - c
    return np.array([[c+x*x*C, x*y*C-z*s, x*z*C+y*s], [y*x*C+z*s, c+y*y*C, y*z*C-x*s], [z*x*C-y*s, z*y*C+x*s, c+z*z*C]])
MAT = {  # albedo, specular
 'pC': ([.33, .41, .80], .22), 'pN': ([.26, .34, .86], .22), 'pO': ([.50, .60, .93], .24), 'pS': ([.92, .76, .36], .4),
 'hC': ([.95, .66, .74], .32), 'hO': ([.99, .84, .87], .34),   # hexoses (Man, Gal)
 'nC': ([.90, .52, .64], .32), 'nN': ([.80, .40, .62], .3),    # GlcNAc
 'sC': ([.78, .25, .47], .38), 'sO': ([.90, .46, .62], .38),   # sialic acid
 'fC': ([.97, .54, .44], .34),                                   # fucose
}
MK = list(MAT); P, R, M = [], [], []
RAD = {'C': 1.7, 'N': 1.55, 'O': 1.52, 'S': 1.8}
def add(p, el, m): P.append(np.asarray(p, float)); R.append(RAD[el]); M.append(MK.index(m))
here = pathlib.Path(__file__).resolve().parent
nd2 = {}
for l in open(here / '3kq0.pdb'):
    if l.startswith('ENDMDL'): break
    if not l.startswith('ATOM'): continue
    if l[21] != 'A': continue
    el = l[76:78].strip() or l[12:16].strip()[0]
    if el not in RAD: continue
    xyz = [float(l[30:38]), float(l[38:46]), float(l[46:54])]
    add(xyz, el, 'p' + el)
    if l[17:20] == 'ASN' and l[12:16].strip() == 'ND2' and int(l[22:26]) in (15, 38, 54, 75, 85): nd2[int(l[22:26])] = np.array(xyz)
prot = np.array(P); cen = prot.mean(0)
def frame(d):
    d = nrm(d); t = nrm(np.cross(d, rng.normal(size=3))); return d, t, np.cross(d, t)
def ring(c, d, kind):
    """one pyranose residue centred at c, ring plane roughly normal to a random axis; returns nothing"""
    a, b, n = frame(rng.normal(size=3))
    mC, mO = {'hex': ('hC', 'hO'), 'nac': ('nC', 'hO'), 'sia': ('sC', 'sO'), 'fuc': ('fC', 'hO')}[kind]
    pts = []
    for k in range(6):
        th = k * math.pi / 3; p = c + (a * math.cos(th) + b * math.sin(th)) * 1.45 + n * (.25 if k % 2 else -.25)
        pts.append(p); add(p, 'O' if k == 5 else 'C', mO if k == 5 else mC)
    for k in range(5):   # exocyclic hydroxyls / C6
        th = k * math.pi / 3; rad = (a * math.cos(th) + b * math.sin(th))
        add(pts[k] + rad * 1.35 + n * (.9 if k % 2 else -.9), 'O', mO)
    if kind == 'nac':    # N-acetyl
        q = pts[1] + nrm(pts[1] - c) * 1.4; add(q, 'N', 'nN'); q2 = q + nrm(q - c + n) * 1.4; add(q2, 'C', mC)
        add(q2 + n * 1.25, 'O', mO); add(q2 + nrm(q2 - c) * 1.5, 'C', mC)
    if kind == 'sia':    # carboxylate + glycerol tail
        add(pts[0] - n * 1.5, 'C', mC); add(pts[0] - n * 2.4 + a * .8, 'O', mO); add(pts[0] - n * 2.4 - a * .8, 'O', mO)
        q = pts[3]
        for j in range(3): q = q + nrm(pts[3] - c + n * (.6 if j % 2 else -.6)) * 1.5; add(q, 'C', mC); add(q + n * 1.3, 'O', mO)
        q = pts[2] + nrm(pts[2] - c) * 1.4; add(q, 'N', 'nN'); add(q + nrm(q - c) * 1.4, 'C', mC)
    if kind == 'fuc': add(pts[4] + nrm(pts[4] - c) * 1.5, 'C', mC)
STEP = 5.4
def grow(p, d, spec, out):
    """spec: list of (kind, [child specs]) ; d is the growth direction"""
    for kind, kids in spec:
        dd = nrm(d + rng.normal(scale=.32, size=3) + out * .35)
        q = p + dd * STEP
        # keep sugars off the protein surface
        for _ in range(6):
            dist = np.linalg.norm(prot - q, axis=1).min()
            if dist > 4.6: break
            q = q + nrm(q - cen) * 1.6
        ring(q, dd, kind)
        if kids: grow(q, dd, kids, out)
ANT = lambda: [('nac', [('hex', [('sia', [])])])]                           # GlcNAc-Gal-Sia
def glycan(site, tri, fuc):
    p0 = nd2[site]; out = nrm(p0 - cen)
    core1 = p0 + out * 3.6; ring(core1, out, 'nac')
    if fuc: ring(core1 + nrm(np.cross(out, [0, 0, 1])) * STEP + out * .8, out, 'fuc')
    core2 = core1 + nrm(out + rng.normal(scale=.2, size=3)) * STEP; ring(core2, out, 'nac')
    man = core2 + nrm(out + rng.normal(scale=.2, size=3)) * STEP; ring(man, out, 'hex')
    t = nrm(np.cross(out, rng.normal(size=3)))
    arms = [nrm(out + t * .95), nrm(out - t * .95)]
    if tri: arms.append(nrm(out + np.cross(out, t) * 1.0))
    for k, ad in enumerate(arms):
        m2 = man + ad * STEP; ring(m2, ad, 'hex')
        grow(m2, ad, ANT() + (ANT() if (tri and k == 0) else []), out)
for site, tri, fuc in ((15, True, False), (38, False, True), (54, True, True), (75, False, False), (85, True, False)):
    glycan(site, tri, fuc)
P = np.array(P) - cen; R = np.array(R); M = np.array(M)
print('atoms', len(P), 'glycan atoms', (M >= MK.index('hC')).sum())
# orientation: the glycan side faces up and a little toward the viewer; spin about that axis for the widest fan
gly = M >= MK.index('hC'); g = nrm(P[gly].mean(0))
TGT = nrm(np.array([float(sys.argv[6]) if len(sys.argv) > 6 else -.15, .8, .5]))
ax = np.cross(g, TGT); R0 = rot(ax, math.acos(np.clip(g @ TGT, -1, 1))); best = None
for k in range(36):
    Rm = rot(TGT, k * math.pi / 18) @ R0; Q = P @ Rm.T
    spread = np.ptp(Q[gly, 0]) - .5 * np.ptp(Q[:, 1])
    if best is None or spread > best[0]: best = (spread, Rm)
P = P @ best[1].T @ rot([0, 0, 1], float(sys.argv[5]) if len(sys.argv) > 5 else 0).T
P -= (P.max(0) + P.min(0)) / 2
EXT = max((P[:, 0].max() - P[:, 0].min()) / w, (P[:, 1].max() - P[:, 1].min()) / h) * 1.10
S = 1 / EXT
Z = np.full((h, w), -999.0, np.float32); N = np.zeros((h, w, 3), np.float32); ID = np.full((h, w), -1, np.int16)
px = P[:, 0] * S + w / 2; py = -P[:, 1] * S + h / 2; pr = R * S
for i in np.argsort(P[:, 2]):
    r = pr[i]; x0 = int(px[i] - r) - 1; x1 = int(px[i] + r) + 2; y0 = int(py[i] - r) - 1; y1 = int(py[i] + r) + 2
    x0c, y0c, x1c, y1c = max(x0, 0), max(y0, 0), min(x1, w), min(y1, h)
    if x1c <= x0c or y1c <= y0c: continue
    yy, xx = np.mgrid[y0c:y1c, x0c:x1c]; dx = (xx + .5 - px[i]) / r; dy = (yy + .5 - py[i]) / r
    d2 = dx * dx + dy * dy; ins = d2 < 1
    dz = np.sqrt(np.clip(1 - d2, 0, 1)); z = P[i, 2] + dz * R[i]
    zs = Z[y0c:y1c, x0c:x1c]; win = ins & (z > zs)
    zs[win] = z[win]; N[y0c:y1c, x0c:x1c][win] = np.stack([dx, -dy, dz], -1)[win]; ID[y0c:y1c, x0c:x1c][win] = M[i]
cov = ID >= 0
def blur(a, r):
    for _ in range(3):
        c = np.cumsum(np.pad(a, ((r + 1, r), (0, 0)), mode='edge'), 0); a = (c[2 * r + 1:] - c[:-2 * r - 1]) / (2 * r + 1)
        c = np.cumsum(np.pad(a, ((0, 0), (r + 1, r)), mode='edge'), 1); a = (c[:, 2 * r + 1:] - c[:, :-2 * r - 1]) / (2 * r + 1)
    return a
Zf = np.where(cov, Z, Z[cov].min() - 8).astype(np.float64)
ao = np.zeros_like(Zf)
for rad, k in ((1.2, .55), (4.0, .22), (12.0, .08)):
    ao += np.clip((blur(Zf, max(int(rad * S), 1)) - Zf) * k, 0, None)
ao = np.clip(1 - ao * .55, .2, 1)
alb = np.array([MAT[k][0] for k in MK], np.float32); spc = np.array([MAT[k][1] for k in MK], np.float32)
A = alb[np.clip(ID, 0, None)]; SP = spc[np.clip(ID, 0, None)]; n = N
L1 = nrm(np.array([-.5, .6, .62])); L2 = nrm(np.array([.75, -.25, .4])); Hh = nrm(L1 + np.array([0, 0, 1]))
lam = np.clip(n @ L1, 0, 1); fil = np.clip(n @ L2, 0, 1); rim = np.clip(1 - n[..., 2], 0, 1) ** 3
spec = np.clip(n @ Hh, 0, 1) ** 30
col = A * (.14 + .84 * lam[..., None] + .2 * fil[..., None] * np.array([.75, .8, 1.0])) * ao[..., None]
col += (SP * spec)[..., None] * np.array([1, .97, .97]) * ao[..., None]
col += rim[..., None] * np.array([.95, .62, .78]) * .22 * ao[..., None]
zmin, zmax = Z[cov].min(), Z[cov].max(); dc = np.clip((Z - zmin) / (zmax - zmin), 0, 1)
INK = np.array([.047, .063, .19]); f = (.4 + .6 * dc[..., None])
col = col * f + INK * (1 - f)
col = np.clip(col, 0, 1) ** (1 / 1.1)
img = np.dstack([col, cov.astype(np.float32)]).reshape(H, SS, W, SS, 4).mean((1, 3))
a = img[..., 3:4]; rgb = np.where(a > 0, img[..., :3] / np.maximum(a, 1e-6), 0)
Image.fromarray((np.dstack([rgb, a]) * 255).round().astype(np.uint8), 'RGBA').save(OUT)
print('wrote', OUT, best[0])
