#!/usr/bin/env python3
"""Hero render (HOME_BRIEF update 2c, a crafted render of the firm's real product): BIOLYPH LyoSpheres, precise freeze-dried
microliter spheres, stacked inside a clear glass tube with a teal screw cap, as on biolyph.com's own LyoSphere tube image.
The spheres are tinted in the BIOLYPH cyan/teal family (as the firm tints its own showcase spheres). Analytic ray tracer
(spheres, cylinder, hemisphere), matte porous freeze-dried surfaces, studio-lit glass with Fresnel reflections, real alpha.
Usage: render.py WIDTH out.png"""
import numpy as np, sys, warnings
warnings.filterwarnings('ignore')
from PIL import Image
WO = int(sys.argv[1]) if len(sys.argv) > 1 else 900
OUT = sys.argv[2] if len(sys.argv) > 2 else 'hero.png'
SS = 2; W = WO * SS; H = int(W * 1.42)
f32 = np.float32
def nrm(v): return v / (np.linalg.norm(v, axis=-1, keepdims=True) + 1e-9)
def sm(a, b, x): x = np.clip((x - a) / (b - a), 0, 1); return x * x * (3 - 2 * x)

# ---------- geometry ----------
th = np.radians(-24)                     # tilt in the picture plane: top leans left
ph = np.radians(16)                      # top tips toward the viewer, so the cap's top face shows
A = np.array([-np.sin(-th) * np.cos(ph), np.cos(th) * np.cos(ph), np.sin(ph)])
A = A / np.linalg.norm(A)
U = np.cross(A, [0, 0, 1.0]); U /= np.linalg.norm(U); V = np.cross(A, U)
RO, RI, LT = 0.56, 0.52, 4.35            # glass outer/inner radius, straight length (from hemisphere centre)
C0 = np.array([0.0, -2.05, 0.0]) - A * 0.0   # hemisphere centre (bottom of the tube)
C0 = C0 + np.array([0.55, 0, 0])
# sphere stack: two per layer, rotating, slight jitter
rng = np.random.default_rng(7)
SPH = []; SR = 0.262
PAL = [(0.95, 0.97, 0.98), (0.86, 0.94, 0.98), (0.62, 0.86, 0.97), (0.30, 0.72, 0.93), (0.13, 0.60, 0.88),
       (0.20, 0.66, 0.80), (0.24, 0.73, 0.66), (0.42, 0.80, 0.72), (0.66, 0.89, 0.84), (0.88, 0.95, 0.93),
       (0.97, 0.98, 0.97)]
s = -0.05; ang = 0.3; li = 0
while s < 3.55:
    for k in range(2):
        a = ang + k * np.pi + rng.normal(0, .12)
        off = 0.245 + rng.normal(0, .006)
        c = C0 + A * (s + rng.normal(0, .02)) + U * off * np.cos(a) + V * off * np.sin(a)
        col = np.array(PAL[min(li, len(PAL) - 1)]) * (1 + rng.normal(0, .025))
        SPH.append((c, SR * (1 + rng.normal(0, .015)), col))
    s += 0.355; ang += np.pi / 2 + rng.normal(0, .25); li += 1
# bottom sphere sits in the hemisphere
SPH.append((C0 + A * (-0.24), SR, np.array(PAL[0]) * .98))

# ---------- rays (orthographic, scene framed) ----------
ys, xs = np.mgrid[0:H, 0:W].astype(f32)
SC = 5.9 / H                              # world units per pixel
px = (xs - W * .5) * SC; py = -(ys - H * .5) * SC
P0 = np.stack([px, py, np.full_like(px, 10)], -1)
D = np.array([0, 0, -1.0], f32)

def ray_sphere(c, r):
    oc = P0 - c; b = oc[..., 2] * D[2]; cc = np.sum(oc * oc, -1) - r * r
    disc = b * b - cc; t = -b - np.sqrt(np.maximum(disc, 0))
    t2 = -b + np.sqrt(np.maximum(disc, 0))
    return np.where(disc > 0, t, np.inf), np.where(disc > 0, t2, np.inf)

def ray_cyl(c, a, r):
    oc = P0 - c
    dp = D - np.dot(D, a) * a
    op = oc - (oc @ a)[..., None] * a
    qa = np.dot(dp, dp); qb = 2 * np.sum(op * dp, -1); qc = np.sum(op * op, -1) - r * r
    disc = qb * qb - 4 * qa * qc; sq = np.sqrt(np.maximum(disc, 0))
    t1 = (-qb - sq) / (2 * qa); t2 = (-qb + sq) / (2 * qa)
    ok = disc > 0
    return np.where(ok, t1, np.inf), np.where(ok, t2, np.inf)

# ---------- noise for the porous freeze-dried surface ----------
def vnoise(p, f):
    q = p * f; i = np.floor(q).astype(np.int64); fr = q - i; fr = fr * fr * (3 - 2 * fr)
    def h(ix, iy, iz):
        n = (ix * 73856093) ^ (iy * 19349663) ^ (iz * 83492791)
        n = (n ^ (n >> 13)) * 1274126177
        return ((n & 0xffff) / 65535.0).astype(f32)
    x, y, z = i[..., 0], i[..., 1], i[..., 2]; fx, fy, fz = fr[..., 0], fr[..., 1], fr[..., 2]
    def L(a, b, t): return a + (b - a) * t
    return L(L(L(h(x, y, z), h(x + 1, y, z), fx), L(h(x, y + 1, z), h(x + 1, y + 1, z), fx), fy),
             L(L(h(x, y, z + 1), h(x + 1, y, z + 1), fx), L(h(x, y + 1, z + 1), h(x + 1, y + 1, z + 1), fx), fy), fz)

KEY = nrm(np.array([-0.55, 0.62, 0.56])); FILL = nrm(np.array([0.7, -0.1, 0.7])); RIM = nrm(np.array([0.8, 0.45, -0.4]))

# ---------- spheres ----------
tS = np.full((H, W), np.inf, f32); idS = np.full((H, W), -1, np.int32)
for i, (c, r, col) in enumerate(SPH):
    t, _ = ray_sphere(c, r); m = t < tS; tS[m] = t[m]; idS[m] = i
hitS = np.isfinite(tS)
Ps = P0 + tS[..., None] * D
CEN = np.array([s[0] for s in SPH]); RAD = np.array([s[1] for s in SPH]); COL = np.array([s[2] for s in SPH])
idc = np.maximum(idS, 0)
N = nrm(Ps - CEN[idc]); N[~hitS] = 0
# porous bump
nz = vnoise(Ps, 60.0) * .5 + vnoise(Ps, 150.0) * .5
g = np.stack([vnoise(Ps + [.006, 0, 0], 60.0) - vnoise(Ps, 60.0), vnoise(Ps + [0, .006, 0], 60.0) - vnoise(Ps, 60.0),
              vnoise(Ps + [0, 0, .006], 60.0) - vnoise(Ps, 60.0)], -1)
Nb = nrm(N - g * 0.9)
alb = COL[idc] * (0.93 + 0.11 * nz[..., None])
# contact occlusion: distance to the neighbouring spheres and to the glass wall
occ = np.ones((H, W), f32)
for j, (c, r, col) in enumerate(SPH):
    d = np.linalg.norm(Ps - c, axis=-1) - r
    occ *= np.where(idS == j, 1, 0.55 + 0.45 * sm(0.0, 0.16, d))
ax_s = (Ps - C0) @ A
radial = np.linalg.norm((Ps - C0) - ax_s[..., None] * A, axis=-1)
occ *= 0.75 + 0.25 * sm(0.0, 0.08, RI - radial)
# matte wrap lighting + soft subsurface glow
dk = np.clip((Nb @ KEY + .25) / 1.25, 0, 1); df = np.clip((Nb @ FILL + .3) / 1.3, 0, 1)
rim = np.clip(1 - np.abs(N[..., 2]), 0, 1) ** 2.2
lit = 0.12 + 0.86 * dk ** 1.15 + 0.22 * df
colS = alb * (lit * occ)[..., None] + alb * (0.12 * rim)[..., None] + 0.06 * rim[..., None]
colS = np.clip(colS, 0, 1.05)

# ---------- cap (teal, ribbed) ----------
CB = C0 + A * (LT - 0.02); CL = 0.72; CR = 0.62
t1, t2 = ray_cyl(CB, A, CR)
P1 = P0 + t1[..., None] * D; s1 = (P1 - CB) @ A
side = np.isfinite(t1) & (s1 > 0) & (s1 < CL)
# top disc
den = D @ A; tt = ((CB + A * CL - P0) @ A) / den
Pt = P0 + tt[..., None] * D; rt = np.linalg.norm((Pt - CB) - ((Pt - CB) @ A)[..., None] * A, axis=-1)
top = (rt < CR) & (tt > 0)
tC = np.where(top & (~side | (tt < t1)), tt, np.where(side, t1, np.inf))
hitC = np.isfinite(tC)
Pc = P0 + tC[..., None] * D
rv = (Pc - CB) - ((Pc - CB) @ A)[..., None] * A
Nc_side = nrm(rv); angc = np.arctan2(rv @ V, rv @ U)
rib = np.cos(angc * 44)
Nc_side = nrm(Nc_side + (np.sin(angc * 44) * .18)[..., None] * nrm(np.cross(A, Nc_side)))
isTop = top & (tC == tt)
Nc = np.where(isTop[..., None], A, Nc_side)
# rounded top edge
edge = sm(CR - 0.07, CR, rt) * isTop
Nc = nrm(Nc + (edge[..., None] * Nc_side))
capc = np.array([0.16, 0.64, 0.58])
H1 = nrm(KEY + np.array([0, 0, 1.0])); spec = np.clip(Nc @ H1, 0, 1) ** 40
dcap = np.clip((Nc @ KEY + .2) / 1.2, 0, 1)
band = sm(0.0, 0.05, (Pc - CB) @ A) * (1 - 0.25 * sm(CL - .12, CL - .1, (Pc - CB) @ A) * (~isTop))
colC = capc * (0.16 + 0.9 * dcap * (0.92 + 0.08 * rib * (~isTop)))[..., None] * (0.6 + 0.4 * band)[..., None] + 0.55 * spec[..., None]

# ---------- glass tube (outer surface, straight part + hemisphere) ----------
def glass_hits(r):
    a1, a2 = ray_cyl(C0, A, r)
    out = []
    for t in (a1, a2):
        P = P0 + t[..., None] * D; s_ = (P - C0) @ A
        valid = np.isfinite(t) & (s_ >= 0) & (s_ <= LT)
        out.append(np.where(valid, t, np.inf))
    b1, b2 = ray_sphere(C0, r)
    for t in (b1, b2):
        P = P0 + t[..., None] * D; s_ = (P - C0) @ A
        out.append(np.where(np.isfinite(t) & (s_ < 0), t, np.inf))
    ts = np.stack(out, 0)
    front = np.min(ts, 0); back = np.max(np.where(np.isfinite(ts), ts, -np.inf), 0)
    return front, back
gF, gB = glass_hits(RO)
hitG = np.isfinite(gF)
def gnorm(t):
    P = P0 + t[..., None] * D; s_ = (P - C0) @ A
    n_cyl = (P - C0) - np.clip(s_, 0, None)[..., None] * A
    return nrm(n_cyl)
NgF = gnorm(np.where(hitG, gF, 0)); NgB = -gnorm(np.where(hitG, gB, 0))
def env(R):
    # studio: a tall softbox upper left, a narrow strip right, dim floor
    x, y, z = R[..., 0], R[..., 1], R[..., 2]
    e = 1.6 * sm(0.18, 0.05, np.abs(x + 0.52)) * sm(-0.2, 0.3, y)
    e += 0.9 * sm(0.07, 0.02, np.abs(x - 0.62)) * sm(-0.5, 0.0, y)
    e += 0.05 * sm(-1, 1, y)
    return e
def refl(n):
    R = D - 2 * (n @ D)[..., None] * n; return R
cosF = np.abs(NgF @ D); FrF = 0.04 + 0.96 * (1 - cosF) ** 5
cosB = np.abs(NgB @ D); FrB = 0.04 + 0.96 * (1 - cosB) ** 5
eF = env(refl(NgF)); eB = env(refl(-NgB)) * .45
# glass thickness along the ray near the silhouette
thick = sm(0.55, 0.98, 1 - cosF)
gl_add = np.clip(FrF * (0.35 + eF) + FrB * eB * .8 + 0.10 * thick, 0, 1)   # light added by the glass
gl_tr = (1 - FrF) * (1 - 0.18 * thick)                                       # transmission onto what is behind
# inner wall line (the glass thickness) seen as a faint second edge
gI, _ = glass_hits(RI)
wall = np.isfinite(gF) & ~np.isfinite(gI)
gl_add = np.where(wall, np.clip(gl_add + 0.10, 0, 1), gl_add)
# glass rim under the cap is hidden by the cap

# ---------- composite (premultiplied, real alpha) ----------
rgb = np.zeros((H, W, 3), f32); al = np.zeros((H, W), f32)
# spheres (inside the glass)
inS = hitS
rgb[inS] = colS[inS]; al[inS] = 1
# glass over spheres / over nothing
tint = np.array([0.93, 0.98, 1.0], f32)
g_on = hitG & (~hitC | (gF < tC))
rgb = np.where(g_on[..., None], rgb * gl_tr[..., None] * tint + gl_add[..., None] * np.array([0.92, 0.97, 1.0]), rgb)
al = np.where(g_on, al * gl_tr + (1 - al * gl_tr) * np.clip(gl_add * 1.05, 0, 1), al)
# cap in front of everything it covers
cm = hitC & (tC <= np.where(hitG, gF, np.inf) + 1e-3) | (hitC & ~hitG)
rgb[cm] = np.clip(colC[cm], 0, 1); al[cm] = 1
# downsample
def down(x):
    return x.reshape(H // SS, SS, W // SS, SS, *x.shape[2:]).mean((1, 3))
H2 = (H // SS) * SS; rgb = rgb[:H2]; al = al[:H2]; H = H2
rgb = down(rgb); al = down(al)
a = np.clip(al, 0, 1)[..., None]
out = np.where(a > 1e-4, np.clip(rgb / np.maximum(a, 1e-4), 0, 1), 0)
img = np.concatenate([out, a], -1)
# crop to content
ys_, xs_ = np.where(a[..., 0] > 0.004)
y0, y1, x0, x1 = ys_.min(), ys_.max(), xs_.min(), xs_.max()
pad = 12
img = img[max(0, y0 - pad):y1 + pad, max(0, x0 - pad):x1 + pad]
Image.fromarray((img * 255 + .5).astype(np.uint8), 'RGBA').save(OUT)
print(OUT, img.shape)
