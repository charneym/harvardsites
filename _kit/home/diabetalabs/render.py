#!/usr/bin/env python3
"""Hero render for Dia Beta Labs: a ball-and-stick model of a helical peptide, the class of molecule DBL re-engineers
(their therapeutic candidates are redesigned human peptide receptor activators). Echoes the ball-and-stick molecule in
their logo. Illustrative: ideal alpha-helix geometry (phi -57, psi -47) built atom by atom with standard bond lengths and
angles (NeRF), heavy atoms only, generic side chains; it is NOT any DBL candidate (those are undisclosed).
Shading: analytic ray-cast spheres and cylinders (orthographic), key light with a soft shadow map, fill, rim, Blinn
specular and screen-space ambient occlusion. Carbon in DBL teal #2098a1, nitrogen pale aqua, oxygen near-white.
Transparent ground. Output: hero.png (RGBA) -> hero.webp.  Usage: python3 render.py [rx ry rz size]"""
import numpy as np, pathlib, sys
from PIL import Image
H = pathlib.Path(__file__).resolve().parent
D = np.radians

def place(a, b, c, bond, ang, tor):
    bc = c - b; bc /= np.linalg.norm(bc)
    n = np.cross(b - a, bc); n /= np.linalg.norm(n)
    m = np.stack([bc, np.cross(n, bc), n], 1)
    d2 = np.array([-bond * np.cos(D(ang)), bond * np.sin(D(ang)) * np.cos(D(tor)), bond * np.sin(D(ang)) * np.sin(D(tor))])
    return c + m @ d2

atoms, el, bonds, bbi, bbo = [], [], [], [], []
def add(p, e, parent=None):
    atoms.append(p); el.append(e)
    if parent is not None: bonds.append((parent, len(atoms) - 1))
    return len(atoms) - 1

SEQ = "SEKLAELFRKAYEQLTKVLEAMRKLGEQ"
PHI, PSI, OM = -57., -47., 180.
N0 = np.array([0., 0., 0.]); CA0 = np.array([1.458, 0., 0.]); C0 = place(np.array([0., 1., 0.]), N0, CA0, 1.525, 111.2, -60)
prevC = None; rng = np.random.default_rng(7)
N_, CA_, C_ = N0, CA0, C0
for k, aa in enumerate(SEQ):
    if k:
        Nn = place(N_, CA_, C_, 1.329, 116.2, PSI); CAn = place(CA_, C_, Nn, 1.458, 121.7, OM); Cn = place(C_, Nn, CAn, 1.525, 111.2, PHI)
        N_, CA_, C_ = Nn, CAn, Cn
    iN = add(N_, 'N', prevC); iCA = add(CA_, 'C', iN); iC = add(C_, 'C', iCA); bbi.extend([iN, iCA, iC])
    bbo.append(add(place(N_, CA_, C_, 1.231, 120.5, PSI + 180), 'O', iC))
    prevC = iC
    if aa == 'G': continue
    CB = place(C_, N_, CA_, 1.53, 110.5, -122.5); iCB = add(CB, 'C', iCA)
    if aa == 'A': continue
    chi1 = rng.choice([-65., 180., -65.])
    if aa in 'ST':
        add(place(N_, CA_, CB, 1.42, 110, chi1), 'O', iCB)
        if aa == 'T': add(place(N_, CA_, CB, 1.52, 110, chi1 + 120), 'C', iCB)
        continue
    if aa == 'V':
        add(place(N_, CA_, CB, 1.52, 110, 175), 'C', iCB); add(place(N_, CA_, CB, 1.52, 110, -60), 'C', iCB); continue
    CG = place(N_, CA_, CB, 1.52, 114, chi1); iCG = add(CG, 'C', iCB)
    if aa == 'L':
        add(place(CA_, CB, CG, 1.52, 110, 65), 'C', iCG); add(place(CA_, CB, CG, 1.52, 110, -175), 'C', iCG); continue
    if aa in 'FY':
        c2 = 90.
        d1 = place(CA_, CB, CG, 1.39, 120, c2); d2 = place(CA_, CB, CG, 1.39, 120, c2 - 180)
        e1 = place(CB, CG, d1, 1.39, 120, 180); e2 = place(CB, CG, d2, 1.39, 120, 180); z = place(CG, d1, e1, 1.39, 120, 0)
        i1 = add(d1, 'C', iCG); i2 = add(d2, 'C', iCG); j1 = add(e1, 'C', i1); j2 = add(e2, 'C', i2); iz = add(z, 'C', j1); bonds.append((j2, iz))
        if aa == 'Y': add(place(d1, e1, z, 1.36, 120, 180), 'O', iz)
        continue
    if aa == 'M':
        S = place(CA_, CB, CG, 1.81, 112, 180); iS = add(S, 'S', iCG); add(place(CB, CG, S, 1.79, 100, 70), 'C', iS); continue
    CD = place(CA_, CB, CG, 1.52, 112, 180); iCD = add(CD, 'C', iCG)
    if aa in 'EQ':
        add(place(CB, CG, CD, 1.25, 119, 0), 'O', iCD); add(place(CB, CG, CD, 1.25 if aa == 'E' else 1.33, 119, 180), 'O' if aa == 'E' else 'N', iCD); continue
    if aa == 'K':
        CE = place(CB, CG, CD, 1.52, 112, 180); iCE = add(CE, 'C', iCD); add(place(CG, CD, CE, 1.49, 111, 180), 'N', iCE); continue
    if aa == 'R':
        NE = place(CB, CG, CD, 1.46, 112, 180); iNE = add(NE, 'N', iCD); CZ = place(CG, CD, NE, 1.33, 124, 180); iCZ = add(CZ, 'C', iNE)
        add(place(CD, NE, CZ, 1.33, 120, 0), 'N', iCZ); add(place(CD, NE, CZ, 1.33, 120, 180), 'N', iCZ); continue

X = np.array(atoms); E = np.array(el)
X -= X.mean(0)
# principal axis of the helix -> x
u, s, vt = np.linalg.svd(X - X.mean(0), full_matrices=False); X = X @ vt.T
# ---- cartoon ribbon through the C-alpha trace (Catmull-Rom), face pointing out from the helix axis
CAi = [i for i in bbi[1::3]]; CA = X[CAi]
def crom(p, nseg):
    pts = np.vstack([2 * p[0] - p[1], p, 2 * p[-1] - p[-2]]); out = []
    for i in range(1, len(pts) - 2):
        p0, p1, p2, p3 = pts[i - 1:i + 3]
        for t in np.linspace(0, 1, nseg, endpoint=False):
            out.append(.5 * ((2 * p1) + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t * t + (-p0 + 3 * p1 - 3 * p2 + p3) * t ** 3))
    out.append(p[-1]); return np.array(out)
NS = 12
C1 = crom(CA, NS)
rad_ = np.array([CA[max(i - 1, 0)] + CA[min(i + 1, len(CA) - 1)] - 2 * CA[i] for i in range(len(CA))]); rad_[0] = rad_[1]; rad_[-1] = rad_[-2]
RV = crom(rad_, NS); RV /= np.linalg.norm(RV, axis=1, keepdims=True)
TG = np.gradient(C1, axis=0); TG /= np.linalg.norm(TG, axis=1, keepdims=True)
RV = RV - (RV * TG).sum(1, keepdims=True) * TG; RV /= np.linalg.norm(RV, axis=1, keepdims=True)
WV = np.cross(TG, RV)
nC = len(C1); taper = np.clip(np.minimum(np.arange(nC), nC - 1 - np.arange(nC)) / (NS * 1.2), 0, 1) ** .5
HW, HT = 1.2, .26
K = 14; th = np.linspace(0, 2 * np.pi, K, endpoint=False)
MV, MNm, MU = [], [], []
for i in range(nC):
    w_ = HW * (.35 + .65 * taper[i]); t_ = HT
    for a_ in th:
        ca, sa = np.cos(a_), np.sin(a_)
        # superellipse-ish flat section: width along WV, thickness along RV
        cx_ = np.sign(ca) * abs(ca) ** .55 * w_; cy_ = np.sign(sa) * abs(sa) ** .55 * t_
        MV.append(C1[i] + cx_ * WV[i] + cy_ * RV[i])
        nx_ = np.sign(ca) * abs(ca) ** 1.45 / w_; ny_ = np.sign(sa) * abs(sa) ** 1.45 / t_
        nv = nx_ * WV[i] + ny_ * RV[i]; MNm.append(nv / np.linalg.norm(nv)); MU.append(i / (nC - 1))
MV = np.array(MV); MNm = np.array(MNm); MU = np.array(MU)
TRI = []
for i in range(nC - 1):
    for k in range(K):
        a0, a1, b0, b1 = i * K + k, i * K + (k + 1) % K, (i + 1) * K + k, (i + 1) * K + (k + 1) % K
        TRI += [(a0, b0, a1), (a1, b0, b1)]
# end caps
for i, s_ in ((0, 1), (nC - 1, -1)):
    MV = np.vstack([MV, C1[i]]); MNm = np.vstack([MNm, -s_ * TG[i]]); MU = np.append(MU, i / (nC - 1)); c_ = len(MV) - 1
    for k in range(K): TRI.append((c_, i * K + k, i * K + (k + 1) % K))
TRI = np.array(TRI)
def rot(a, k):
    c, s_ = np.cos(a), np.sin(a)
    return {'x': np.array([[1, 0, 0], [0, c, -s_], [0, s_, c]]), 'y': np.array([[c, 0, s_], [0, 1, 0], [-s_, 0, c]]), 'z': np.array([[c, -s_, 0], [s_, c, 0], [0, 0, 1]])}[k]
a = [float(t) for t in (sys.argv[1:4] if len(sys.argv) > 3 else (0.35, 0.16, 0.86))]
RM_ = rot(a[0], 'x').T @ rot(a[1], 'y').T @ rot(a[2], 'z').T
P = X @ RM_; MVr = MV @ RM_; MNr = MNm @ RM_
SZ = int(sys.argv[4]) if len(sys.argv) > 4 else 2600
RB = {'C': .44, 'N': .43, 'O': .43, 'S': .56}; RBOND = .15
rad = np.array([RB[e] for e in E])
BB = np.zeros(len(E), bool); BB[np.array(bbi)] = True
DRAWN = ~BB; DRAWN[np.array(bbo)] = False; DRAWN[np.array(bbi[1::3])] = True
rad = np.where(DRAWN, rad, 0)
bonds = [b for b in bonds if DRAWN[b[0]] and DRAWN[b[1]]]

def raster(P, S, sc, off, MV, MN):
    """depth (towards +z = viewer), normal, id (atom i, or n+bond index), surface point."""
    ZB = np.full((S, S), -1e9); NN = np.zeros((S, S, 3)); ID = np.full((S, S), -1)
    def put(y0, y1, x0, x1, z, nrm, m, i):
        sub = ZB[y0:y1, x0:x1]; upd = m & (z > sub); sub[upd] = z[upd]; NN[y0:y1, x0:x1][upd] = nrm[upd]; ID[y0:y1, x0:x1][upd] = i
    Q = P * sc; Q[:, :2] += off
    for i in range(len(P)):
        cx, cy, cz = Q[i]; r = rad[i] * sc
        x0, x1 = int(max(cx - r - 1, 0)), int(min(cx + r + 2, S)); y0, y1 = int(max(cy - r - 1, 0)), int(min(cy + r + 2, S))
        if x1 <= x0 or y1 <= y0 or r <= 0: continue
        yy, xx = np.mgrid[y0:y1, x0:x1]; dx = (xx + .5 - cx) / r; dy = (yy + .5 - cy) / r; d2 = dx * dx + dy * dy
        dz = np.sqrt(np.clip(1 - d2, 0, 1)); put(y0, y1, x0, x1, cz + dz * r, np.stack([dx, dy, dz], -1), d2 < 1, i)
    n = len(P)
    for j, (p, q) in enumerate(bonds):
        p0 = Q[p]; p1 = Q[q]; dv = p1 - p0; Lc = np.linalg.norm(dv); d = dv / Lc; r = RBOND * sc
        x0, x1 = int(max(min(p0[0], p1[0]) - r - 1, 0)), int(min(max(p0[0], p1[0]) + r + 2, S))
        y0, y1 = int(max(min(p0[1], p1[1]) - r - 1, 0)), int(min(max(p0[1], p1[1]) + r + 2, S))
        if x1 <= x0 or y1 <= y0: continue
        yy, xx = np.mgrid[y0:y1, x0:x1]
        w0 = np.stack([xx + .5 - p0[0], yy + .5 - p0[1], -p0[2] * np.ones_like(xx, float)], -1)
        wd = w0 @ d; A = w0 - wd[..., None] * d; B = np.array([0, 0, 1.]) - d[2] * d
        aa = B @ B; bb = 2 * (A @ B); cc = (A * A).sum(-1) - r * r
        disc = bb * bb - 4 * aa * cc; ok = disc >= 0
        z = (-bb + np.sqrt(np.clip(disc, 0, None))) / (2 * aa + 1e-12)
        t = wd + z * d[2]; ok &= (t >= 0) & (t <= Lc)
        nrm = (A + z[..., None] * B) / r
        put(y0, y1, x0, x1, z, nrm, ok, n + j)
    V = MV * sc; V[:, :2] += off; base = n + len(bonds)
    for j, (ia, ib, ic) in enumerate(TRI):
        A_, B_, C_ = V[ia], V[ib], V[ic]
        x0, x1 = int(max(min(A_[0], B_[0], C_[0]), 0)), int(min(max(A_[0], B_[0], C_[0]) + 2, S))
        y0, y1 = int(max(min(A_[1], B_[1], C_[1]), 0)), int(min(max(A_[1], B_[1], C_[1]) + 2, S))
        if x1 <= x0 or y1 <= y0: continue
        den = (B_[1] - C_[1]) * (A_[0] - C_[0]) + (C_[0] - B_[0]) * (A_[1] - C_[1])
        if abs(den) < 1e-9: continue
        yy, xx = np.mgrid[y0:y1, x0:x1]; px = xx + .5; py = yy + .5
        l1 = ((B_[1] - C_[1]) * (px - C_[0]) + (C_[0] - B_[0]) * (py - C_[1])) / den
        l2 = ((C_[1] - A_[1]) * (px - C_[0]) + (A_[0] - C_[0]) * (py - C_[1])) / den
        l3 = 1 - l1 - l2; m = (l1 >= -1e-3) & (l2 >= -1e-3) & (l3 >= -1e-3)
        if not m.any(): continue
        z = l1 * A_[2] + l2 * B_[2] + l3 * C_[2]
        nrm = l1[..., None] * MN[ia] + l2[..., None] * MN[ib] + l3[..., None] * MN[ic]
        put(y0, y1, x0, x1, z, nrm, m, base + j)
    return ZB, NN, ID

lo = (P[:, :2] - .8).min(0); hi = (P[:, :2] + .8).max(0)
sc = SZ * .94 / (hi - lo).max(); off = np.array([SZ, SZ]) / 2 - (lo + hi) / 2 * sc
ZB, NN, ID = raster(P, SZ, sc, off, MVr, MNr)
mask = ID >= 0
# surface points in molecule space (for the shadow map)
yy, xx = np.mgrid[0:SZ, 0:SZ]
SP = np.stack([(xx + .5 - off[0]) / sc, (yy + .5 - off[1]) / sc, ZB / sc], -1)
# key light from upper left, toward the viewer (image y grows downward)
L = np.array([-.55, -.62, .56]); L /= np.linalg.norm(L)
zl = L; xl = np.cross([0, 1., 0], zl); xl /= np.linalg.norm(xl); yl = np.cross(zl, xl)
ML = np.stack([xl, yl, zl], 0)
PL = P @ ML.T; SL = 1400; MVL = MVr @ ML.T
lo2 = (PL[:, :2] - 1).min(0); hi2 = (PL[:, :2] + 1).max(0); sc2 = SL * .96 / (hi2 - lo2).max(); off2 = np.array([SL, SL]) / 2 - (lo2 + hi2) / 2 * sc2
ZL, _, _ = raster(PL, SL, sc2, off2, MVL, MNr @ ML.T)
q = SP[mask] @ ML.T; qx = q[:, 0] * sc2 + off2[0]; qy = q[:, 1] * sc2 + off2[1]; qz = q[:, 2] * sc2
sh = np.zeros(len(q)); cnt = 0
for ox in (-2, 0, 2):
    for oy in (-2, 0, 2):
        ix = np.clip((qx + ox).astype(int), 0, SL - 1); iy = np.clip((qy + oy).astype(int), 0, SL - 1)
        sh += (ZL[iy, ix] - qz > .35 * sc2); cnt += 1
shadow = np.ones((SZ, SZ)); shadow[mask] = 1 - .62 * sh / cnt

def _box(a, r, ax):
    a = np.moveaxis(a, ax, 0); p = np.concatenate([np.repeat(a[:1], r + 1, 0), a, np.repeat(a[-1:], r, 0)]); c = np.cumsum(p, 0)
    return np.moveaxis((c[2 * r + 1:] - c[:-2 * r - 1]) / (2 * r + 1), 0, ax)
def blur(a, s):
    r = max(1, int(s * .9))
    for _ in range(3): a = _box(_box(a, r, 0), r, 1)
    return a
Zf = np.where(mask, ZB, ZB[mask].min() - 4 * sc)
ao = np.zeros_like(ZB)
for rr in (4, 10, 22, 46):
    b = blur(Zf, rr); ao += np.clip((b - Zf) / (rr * 1.6), 0, 1)
ao = np.clip(1 - ao / 2.2, 0, 1)

nrm = NN / (np.linalg.norm(NN, axis=-1, keepdims=True) + 1e-9)
lam = np.clip((nrm * L).sum(-1), 0, 1)
F = np.array([.7, .3, .5]); F /= np.linalg.norm(F); fill = np.clip((nrm * F).sum(-1), 0, 1)
Hh = L + np.array([0, 0, 1.]); Hh /= np.linalg.norm(Hh); spec = np.clip((nrm * Hh).sum(-1), 0, 1) ** 60
rim = (1 - np.clip(nrm[..., 2], 0, 1)) ** 2.6
n = len(P)
COL = {'C': (168, 196, 200), 'N': (110, 206, 216), 'O': (238, 244, 243), 'S': (230, 214, 140)}
acol = np.array([COL[e] for e in E]) / 255
bcol = np.array([(acol[p] + acol[q]) / 2 for p, q in bonds]) * .92
tu = MU[TRI].mean(1)[:, None]; RIBC = (np.array([24, 112, 124]) * (1 - tu) + np.array([46, 178, 186]) * tu) / 255
allc = np.vstack([acol, bcol, RIBC])
# bonds: each half takes its own atom's colour
Cc = allc[np.clip(ID, 0, None)]
bm = (ID >= n) & (ID < n + len(bonds))
if bm.any():
    bi = ID[bm] - n; pts = SP[bm]
    pa = P[[bonds[k][0] for k in bi]]; pb = P[[bonds[k][1] for k in bi]]
    t = ((pts - pa) * (pb - pa)).sum(-1) / ((pb - pa) ** 2).sum(-1)
    Cc[bm] = np.where((t < .5)[:, None], acol[[bonds[k][0] for k in bi]], acol[[bonds[k][1] for k in bi]]) * .9
zn_ = (ZB - ZB[mask].min()) / (ZB[mask].max() - ZB[mask].min() + 1e-6); zn_ = np.where(mask, zn_, 0)
ink = np.array([6, 22, 27]) / 255
diff = 1.05 * lam * shadow + .3 * fill + .2
shade = Cc * diff[..., None] * (.45 + .55 * ao[..., None]) + spec[..., None] * .55 * shadow[..., None] + rim[..., None] * np.array([.35, .75, .8]) * .22 * ao[..., None]
f = (.62 + .38 * zn_[..., None])   # depth cue: far atoms recede into the ink
shade = shade * f + ink * (1 - f)
img = np.clip(shade, 0, 1)
rgba = np.dstack([img * 255, mask * 255.]).astype(np.uint8)
im = Image.fromarray(rgba, 'RGBA').resize((SZ // 2, SZ // 2), Image.LANCZOS)
im = im.crop(im.getbbox()); im.save(H / 'hero.png'); print(im.size, len(P), len(bonds))
