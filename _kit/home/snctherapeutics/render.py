#!/usr/bin/env python3
"""SNC Therapeutics hero (HOME_BRIEF update 2c: a crafted render of the firm's real product). SNC's lead nanotherapy is
rapamycin-loaded polymersomes (rPS): vesicular synthetic nanocarriers whose wall is a block-copolymer bilayer, a
hydrophobic core between two hydrophilic leaflets, with the hydrophobic drug rapamycin held in that core and an aqueous
lumen inside (NIH STTR 1R41DK142265 abstract; snctherapeutics.com "synthetic nanocarriers (SNCs)").
One polymersome is shown in cutaway, a wedge removed so the bilayer is seen in section, with intact vesicles drifting
around it. Offline numpy SDF ray-marcher: a fine polymer-brush grain on the outer surface, pearl wrap-diffuse with a
soft subsurface feel, studio environment reflections, soft shadows and SDF ambient occlusion; the cut face is shaded by
layer (leaflets, core, rapamycin specks). Floats in space with real alpha (no ground, DJ/DP).
Usage: python3 render.py out.png [width]"""
import sys, numpy as np
from PIL import Image
out = sys.argv[1]; W = int(sys.argv[2]) if len(sys.argv) > 2 else 2400
H = int(W * 0.9)
rng = np.random.default_rng(11)

def nrm(v): return v / np.linalg.norm(v, axis=-1, keepdims=True)

R0, R1 = 1.0, 0.76                     # main vesicle: outer and inner radius of the wall
# satellites: centre, radius (intact vesicles, wall not visible)
SAT = np.array([[1.85, 1.0, -1.1, 0.34], [-1.6, 1.2, -0.6, 0.26], [1.35, -1.3, 0.25, 0.29],
                [-1.25, -1.15, 1.5, 0.21], [-2.3, -0.2, -2.2, 0.3], [0.4, 1.65, -2.0, 0.22]])
SC = SAT[:, :3]; SR = SAT[:, 3]
CUT_N = nrm(np.array([1.25, 1.05, 0.55]))   # the wedge is removed around this direction (towards the camera, up-right)

def grain(p, amp):
    x, y, z = p[:, 0], p[:, 1], p[:, 2]
    g = (np.sin(131 * x + 1.1) * np.sin(127 * y + 0.3) * np.sin(137 * z + 2.0)
         + 0.7 * np.sin(211 * x - 173 * z + 0.4) * np.sin(197 * y + 59 * x)
         + 0.5 * np.sin(17 * x + 23 * y - 11 * z) * np.sin(19 * z - 13 * y))
    return amp * g

_K = rng.normal(size=(24, 3)); _K = _K / np.linalg.norm(_K, axis=1, keepdims=True) * rng.uniform(110, 190, (24, 1))
_PH = rng.uniform(0, 6.283, 24)
def bump(p):
    """isotropic random-wave noise (no moire): value and gradient"""
    a = p @ _K.T + _PH
    return np.sin(a).sum(1) / 4.9, (np.cos(a) @ _K) / 4.9

def octant2(a, b):
    """signed distance to the quadrant wedge {a>0, b>0} (infinite along the third axis), negative inside"""
    inside = (a > 0) & (b > 0)
    return np.where(inside, -np.minimum(a, b), np.hypot(np.minimum(a, 0), np.minimum(b, 0)))

def octant(q):
    """signed distance to the region {q.x>0, q.y>0, q.z>0} in a local frame (negative inside)"""
    inside = np.all(q > 0, axis=1)
    dout = np.linalg.norm(np.minimum(q, 0), axis=1)
    din = -np.min(q, axis=1)
    return np.where(inside, din, dout)

# local frame for the cut: the removed octant is centred on CUT_N
_b1 = nrm(np.cross(CUT_N, [0.2, 1, 0.1])); _b2 = np.cross(CUT_N, _b1)
_ax = np.stack([CUT_N + 0.0 * _b1, _b1, _b2])
# three axes that make an octant whose diagonal is CUT_N
_s = 1 / np.sqrt(3)
E1 = nrm(CUT_N * _s + _b1 * np.sqrt(2 / 3)); E2 = nrm(CUT_N * _s - _b1 * np.sqrt(1 / 6) + _b2 * np.sqrt(1 / 2)); E3 = nrm(CUT_N * _s - _b1 * np.sqrt(1 / 6) - _b2 * np.sqrt(1 / 2))
_up = nrm(np.array([0.12, 1.0, -0.18]))
_c = np.array([0.7, 0.0, 1.35]); _c = _c - _up * (_c @ _up); _c = nrm(_c)
_th = np.radians(-28); _o = np.cross(_up, _c); _cc = nrm(_c * np.cos(_th) + _o * np.sin(_th))
_o2 = np.cross(_up, _cc)
WA = nrm(_cc + _o2); WB = nrm(_cc - _o2)          # the two half-planes' inward normals: wedge = {p.WA>0, p.WB>0}
EM = np.stack([WA, WB, _up])

def parts(p):
    r = np.linalg.norm(p, axis=1)
    shell = np.maximum(r - R0, R1 - r)
    q = p @ EM.T
    oc = octant2(q[:, 0], q[:, 1])
    main = np.maximum(shell, -oc)
    # the grain only on the outer skin (fades out within the wall), so cut faces stay planar
    q = p[:, None, :] - SC[None]
    rs = np.linalg.norm(q, axis=2) - SR[None]
    return main, rs, oc, r

def scene(p):
    m, s, _, _ = parts(p); return np.minimum(m, s.min(1))

def env(d):
    x, y, z = d[:, 0], d[:, 1], d[:, 2]
    base = 0.02 + 0.03 * np.clip(y, 0, 1)
    box = np.exp(-(((x + 0.35) / 0.5) ** 2 + ((y - 0.7) / 0.35) ** 2)) * 2.2
    rim = np.exp(-(((x - 0.85) / 0.25) ** 2 + ((y + 0.05) / 0.6) ** 2)) * 1.3
    col = np.stack([base * 0.8 + box * 0.95 + rim * 0.62, base * 0.9 + box * 0.98 + rim * 0.80, base * 1.4 + box * 1.05 + rim * 0.30], 1)
    return col

Lk = nrm(np.array([-0.35, 0.85, 0.75]))   # key: large soft box, upper left front
Lr = nrm(np.array([0.95, 0.05, -0.35]))  # rim: lime-tinted strip, right and behind
Lf = nrm(np.array([0.3, -0.5, 0.8]))     # low cool fill

def march(O, D, t0, t1):
    M = D.shape[0]; T = np.full(M, t0); hit = np.zeros(M, bool); alive = np.ones(M, bool)
    for it in range(200):
        idx = np.nonzero(alive)[0]
        if idx.size == 0: break
        d = scene(O[idx] + D[idx] * T[idx, None]); T[idx] += d * 0.85
        h = d < 0.0008; hit[idx[h]] = True
        alive[idx[h | (T[idx] > t1)]] = False
    return hit, T

def shadow(p, L, k=8.0):
    res = np.ones(p.shape[0]); t = np.full(p.shape[0], 0.01)
    for _ in range(40):
        d = scene(p + L * t[:, None]); res = np.minimum(res, k * d / t); t += np.clip(d, 0.01, 0.3)
    return np.clip(res, 0, 1)

def shade(P, D):
    n = P.shape[0]
    m, s, oc, r = parts(P)
    onmain = m <= s.min(1)
    e = 0.0006
    Nn = nrm(np.stack([scene(P + [e, 0, 0]) - scene(P - [e, 0, 0]), scene(P + [0, e, 0]) - scene(P - [0, e, 0]),
                       scene(P + [0, 0, e]) - scene(P - [0, 0, e])], 1))
    V = -D
    Ng = Nn.copy()
    gv, gg = bump(P)
    gt = gg - np.einsum('ij,ij->i', gg, Nn)[:, None] * Nn
    Nn = nrm(Nn - gt * 0.00035)
    po = P + Ng * 0.003
    sh = shadow(po, Lk); shr = shadow(po, Lr, 12)
    ao = np.ones(n)
    for i, s_ in enumerate([0.02, 0.06, 0.14, 0.3]):
        ao -= (s_ - scene(P + Nn * s_)) * (2.2 / (i + 1))
    ao = np.clip(ao, 0.08, 1)
    ndl = Nn @ Lk; ndr = Nn @ Lr; ndf = Nn @ Lf
    ndv = np.clip(np.einsum('ij,ij->i', Nn, V), 0, 1)
    Rf = nrm(2 * np.einsum('ij,ij->i', Nn, V)[:, None] * Nn - V)
    # which surface: outer skin, inner (lumen) skin, or cut face
    cut = onmain & (np.abs(oc) < 0.004) & (r < R0 - 0.002) & (r > R1 + 0.002)
    inner = onmain & ~cut & (r < (R0 + R1) / 2)
    alb = np.tile(np.array([0.36, 0.43, 0.62]), (n, 1))                     # pearl, cool blue
    alb *= (1 + 0.05 * gv)[:, None]
    if cut.any():
        # the wall in section: hydrophilic leaflet / hydrophobic core holding rapamycin / hydrophilic leaflet
        rr = (r[cut] - R1) / (R0 - R1)                                     # 0 inner .. 1 outer
        leaf = np.array([0.80, 0.86, 0.74]); core = np.array([0.17, 0.22, 0.52])
        k = np.clip(np.minimum((rr - 0.2) / 0.05, (0.8 - rr) / 0.05), 0, 1)
        c = leaf[None] * (1 - k[:, None]) + core[None] * k[:, None]
        # fine radial striation of the chains, and rapamycin specks in the core
        pc = P[cut]
        st = 0.5 + 0.5 * np.sin(np.arctan2(pc[:, 1], pc[:, 0]) * 900 + pc[:, 2] * 400)
        c *= (0.93 + 0.07 * st)[:, None]
        q = pc * 70.0; cl = np.floor(q)
        hsh = lambda v, a, b, c_: (np.sin(v[:, 0] * a + v[:, 1] * b + v[:, 2] * c_) * 43758.5453) % 1.0
        jit = np.stack([hsh(cl, 12.9, 78.2, 37.7), hsh(cl, 39.3, 11.1, 83.4), hsh(cl, 73.1, 52.9, 19.3)], 1) * 0.6 + 0.2
        dd = np.linalg.norm(q - cl - jit, axis=1)
        sp = (dd < 0.3) & (hsh(cl, 26.6, 91.7, 45.2) < 0.4) & (k > 0.7)
        c[sp] = np.array([0.66, 0.84, 0.28])
        alb[cut] = c
    if inner.any():
        alb[inner] *= np.array([0.80, 0.84, 0.92])
    wrap = np.clip((ndl + 0.18) / 1.18, 0, 1)
    diff = wrap ** 1.3 * (0.12 + 0.88 * sh) * 1.0
    rim = np.clip((ndr + 0.15) / 1.15, 0, 1) ** 1.5 * shr
    fill = np.clip((ndf + 0.3) / 1.3, 0, 1) * 0.16
    amb = env(Nn) * 0.12
    sss = ((1 - ndv) ** 2.0 * 0.32)[:, None] * np.array([0.55, 0.7, 1.0])
    col = alb * (diff[:, None] * np.array([1.0, 0.98, 0.96]) + rim[:, None] * np.array([0.62, 0.82, 0.28]) * 1.5
                 + fill[:, None] * np.array([0.5, 0.6, 1.0]) + amb) + sss * (~cut)[:, None]
    hv = nrm(Lk + V); spec = np.clip(np.einsum('ij,ij->i', Nn, hv), 0, 1) ** 40 * sh * 0.35
    fr = 0.04 + 0.96 * (1 - ndv) ** 5
    gloss = np.where(cut, 0.25, 1.0)
    tint = np.array([0.75, 0.95, 0.55])[None] * (1 - ndv[:, None]) + np.array([0.7, 0.8, 1.0])[None] * ndv[:, None]
    col += (spec[:, None] + env(Rf) * tint * fr[:, None] * 0.9) * gloss[:, None]
    # the lumen is dim: light reaches it only through the cut
    col[inner] *= 0.42
    oid = np.where(onmain, 0, 1 + s.argmin(1))
    return col * ao[:, None], oid

def tone(col): col = col / (1 + col * 0.5) * 1.22; return np.clip(col, 0, 1) ** (1 / 2.0)

# ---- camera: looking into the cut, a little from above
look = np.array([0.0, 0.0, 0.0]); eye = look + 9.2 * nrm(np.array([0.7, 0.62, 1.35])); fov = 34.0
fw = nrm(look - eye); rt = nrm(np.cross(fw, [0, 1, 0])); up = np.cross(rt, fw)
ys, xs = np.mgrid[0:H, 0:W]
ar = W / H; tf = np.tan(np.radians(fov / 2))
u = ((xs + 0.5) / W * 2 - 1) * tf * ar; v = (1 - (ys + 0.5) / H * 2) * tf
D = nrm(u[..., None] * rt + v[..., None] * up + fw).reshape(-1, 3)
M = D.shape[0]
O = np.broadcast_to(eye, D.shape)
img = np.zeros((M, 4)); OID = np.full(M, -1)
CH = 400000
for a0 in range(0, M, CH):
    Dc = D[a0:a0 + CH]; Oc = O[a0:a0 + CH]
    hit, T = march(Oc, Dc, 5.0, 14.0)
    hi = np.nonzero(hit)[0]
    if hi.size:
        cc, oo = shade(eye + Dc[hi] * T[hi, None], Dc[hi])
        img[a0 + hi, :3] = tone(cc); img[a0 + hi, 3] = 1; OID[a0 + hi] = oo
    print('chunk', a0, hi.size, flush=True)
img = img.reshape(H, W, 4); OID = OID.reshape(H, W)
def gaussian_filter(a, sg):
    r = int(3 * sg) + 1; x = np.arange(-r, r + 1); k = np.exp(-x * x / (2 * sg * sg)); k /= k.sum()
    a = np.pad(a, r, mode='constant')
    a = np.apply_along_axis(lambda v: np.convolve(v, k, 'valid'), 0, a)
    return np.apply_along_axis(lambda v: np.convolve(v, k, 'valid'), 1, a)
# depth of field: satellites further from the main vesicle's focal distance are softened, layer by layer (far first)
fd = np.linalg.norm(eye)
dist = [np.linalg.norm(eye - c) for c in SC]
order = sorted(range(len(SC)), key=lambda i: -dist[i])
def pmimg(mask):
    l = img * mask[..., None]; l[..., :3] *= l[..., 3:4]; return l
acc = np.zeros((H, W, 4))
def over(a, b):  # premultiplied a over b
    return a + b * (1 - a[..., 3:4])
layers = [(i + 1, abs(dist[i] - fd)) for i in order] + [(0, 0.0)]
for oid, dz in layers:
    l = pmimg((OID == oid).astype(float))
    rad = dz * W * 0.0042
    if rad > 0.6:
        l = np.stack([gaussian_filter(l[..., c], rad) for c in range(4)], -1)
    acc = over(l, acc) if oid != 0 else over(l, acc)
# a faint hydrophilic corona: a soft blue-lime halo hugging every vesicle (outside only)
A0 = acc[..., 3]
halo = gaussian_filter(A0, W * 0.006)
halo = np.clip(halo - A0, 0, 1) * 0.55
hc = np.array([0.45, 0.62, 0.95])
hl = np.zeros_like(acc); hl[..., :3] = halo[..., None] * hc; hl[..., 3] = halo * 0.9
acc = over(acc, hl)
img = acc.copy(); al = img[..., 3:4]; img[..., :3] = np.where(al > 1e-4, img[..., :3] / np.maximum(al, 1e-4), 0)
img = np.clip(img, 0, 1)
pm = img.copy(); pm[..., :3] *= pm[..., 3:4]
o = Image.fromarray((pm * 255).astype(np.uint8), 'RGBA').resize((W // 2, H // 2), Image.LANCZOS)
a = np.asarray(o).astype(float); al = a[..., 3:4] / 255
a[..., :3] = np.where(al > 0, a[..., :3] / np.maximum(al, 1e-4), 0)
o = Image.fromarray(np.clip(a, 0, 255).astype(np.uint8), 'RGBA')
bb = o.getbbox(); o = o.crop((max(bb[0] - 30, 0), max(bb[1] - 30, 0), min(bb[2] + 30, o.width), min(bb[3] + 30, o.height)))
o.save(out); print('size', o.size)
