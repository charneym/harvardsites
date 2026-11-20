#!/usr/bin/env python3
"""MAGELLAN BIOMEDICAL hero (HOME_BRIEF update 2c: a crafted render of the real product). The CathPilot distal assembly as
Magellan's own product render shows it (magellanbiomedical.com, wp-content/uploads/2024/09/image-1024x567.jpg) and as the
TMU / IEEE TBME 2023 descriptions describe it: a blue polymer sheath, a self-expandable frame of nitinol petal loops that
opens from the sheath mouth, an inner blue catheter running up the axis, and gold steering tendons strung from the petal
apexes to the catheter tip, to a collar low on the catheter, and around the apex ring; a guidewire leaves the tip.
Each part is a chain of tubes shaded per pixel (z-buffer, tube normals, a studio environment for the metal, clear-coat
polymer, satin thread). Saved with ALPHA, the sheath feathering out toward the lower right edge (DJ).
Usage: python3 render.py W H out.png [SS]"""
import sys, numpy as np
from PIL import Image

W = int(sys.argv[1]) if len(sys.argv) > 1 else 700
H = int(sys.argv[2]) if len(sys.argv) > 2 else 760
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 2
FW, FH = W, H; W, H = W * SS, H * SS

def nrm(v): return v / np.linalg.norm(v, axis=-1, keepdims=True)
def sm(a, b, x): x = np.clip((x - a) / (b - a), 0, 1); return x * x * (3 - 2 * x)

# ---- device in local frame (z = device axis, mouth of the sheath at z=0) ----
NP, RS, HP, RT, R0, AW = 6, 1.0, 3.2, 2.45, 0.6, 1.0
TIPZ = 3.05
parts = []   # (points Nx3, radius, material)
def add(pts, r, m): parts.append((np.asarray(pts, float), r, m))
for i in range(NP):
    ph = i / NP * 2 * np.pi + 0.28
    rad = np.array([np.cos(ph), np.sin(ph), 0]); tan = np.array([-np.sin(ph), np.cos(ph), 0])
    u = np.linspace(0, 2 * np.pi, 361)
    hn = (1 - np.cos(u)) / 2
    z = -0.25 + (HP + 0.25) * hn ** 0.92
    r = R0 + (RT - R0) * hn ** 1.35 + 0.18 * np.sin(np.pi * hn) ** 2
    t = AW * np.sin(u) * (0.28 + 0.72 * hn ** 0.8)
    pts = r[:, None] * rad + t[:, None] * tan + z[:, None] * np.array([0, 0, 1])
    add(pts, 0.052, 'ni')
apex = []
for i in range(NP):
    ph = i / NP * 2 * np.pi + 0.28
    apex.append(np.array([(RT + 0.0) * np.cos(ph), (RT + 0.0) * np.sin(ph), HP]))
for i in range(NP):
    a = apex[i]
    add([a, [0, 0, TIPZ - 0.05]], 0.024, 'au')                 # apex -> catheter tip
    add([a, [0, 0, 1.05]], 0.022, 'au')                         # apex -> collar
    add([a, apex[(i + 1) % NP]], 0.022, 'au')                   # apex ring
# inner catheter
add([[0, 0, -2.0], [0, 0, TIPZ]], 0.30, 'bl')
# collar on the catheter
add([[0, 0, 0.98], [0, 0, 1.12]], 0.335, 'co')
# guidewire leaving the tip, with a gentle J toward the end
g = []
for k in range(41):
    s = k / 40; L = 2.7 * s
    g.append([0.55 * s ** 2.2, -0.12 * s ** 2, TIPZ + L])
add(g, 0.04, 'gw')
# sheath body (open end) and its rolled rim
SHL = 16.0
add([[0, 0, -SHL], [0, 0, -0.06]], RS, 'sh')
th = np.linspace(0, 2 * np.pi, 97)
add(np.stack([0.955 * RS * np.cos(th), 0.955 * RS * np.sin(th), np.zeros_like(th) - 0.04], 1), 0.05, 'shr')

# ---- place in camera space: camera at +z looking -z, y up ----
def rot(ax, a):
    ax = ax / np.linalg.norm(ax); c, s = np.cos(a), np.sin(a); x, y, z = ax
    return np.array([[c + x * x * (1 - c), x * y * (1 - c) - z * s, x * z * (1 - c) + y * s],
                     [y * x * (1 - c) + z * s, c + y * y * (1 - c), y * z * (1 - c) - x * s],
                     [z * x * (1 - c) - y * s, z * y * (1 - c) + x * s, c + z * z * (1 - c)]])
# device z -> world up, then tip it toward the camera and lean it up-left
M = rot(np.array([0, 0, 1.0]), 0.78) @ rot(np.array([1.0, 0, 0]), -0.92) @ rot(np.array([0, 0, 1.0]), 0.15)
OFF = np.array([0.55, -0.35, 0.0])
CAMD = 34.0
F = H * 2.15 / 12.0 * CAMD / 34.0 * 3.4 / 1.0 / 3.4
F = H / 12.2 * CAMD / CAMD * 34.0 / 1.0 / 34.0 * 34.0 / 1.0  # focal in px for a 12.2-unit-tall view at distance CAMD
F = H * CAMD / 10.4
CX, CY = W * 0.45, H * 0.45
def world(p): return (M @ p.T).T + OFF
def proj(p):
    d = CAMD - p[:, 2]
    return np.stack([CX + F * p[:, 0] / d, CY - F * p[:, 1] / d], 1), d

zb = np.full((H, W), 1e9); NX = np.zeros((H, W, 3)); MAT = np.zeros((H, W), np.int8); PZ = np.zeros((H, W)); AX = np.zeros((H, W, 3))
MID = {'ni': 1, 'au': 2, 'bl': 3, 'gw': 4, 'sh': 5, 'shr': 6, 'co': 1}
for pts, r, m in parts:
    P = world(pts); S, D = proj(P)
    for k in range(len(P) - 1):
        a3, b3 = P[k], P[k + 1]; a2, b2 = S[k], S[k + 1]
        ra, rb = F * r / D[k], F * r / D[k + 1]; rmx = max(ra, rb) + 1
        x0 = int(max(0, min(a2[0], b2[0]) - rmx)); x1 = int(min(W - 1, max(a2[0], b2[0]) + rmx)) + 1
        y0 = int(max(0, min(a2[1], b2[1]) - rmx)); y1 = int(min(H - 1, max(a2[1], b2[1]) + rmx)) + 1
        if x1 <= x0 or y1 <= y0: continue
        yy, xx = np.mgrid[y0:y1, x0:x1] + 0.5
        ab = b2 - a2; L2 = max(ab @ ab, 1e-9)
        t = ((xx - a2[0]) * ab[0] + (yy - a2[1]) * ab[1]) / L2
        cap = (t < 0) | (t > 1)
        flat = m in ('sh', 'co')
        if flat: cap_ok = ~cap   # flat-ended parts: no rounded caps
        else: cap_ok = np.ones_like(cap)
        endcap = ((t < 0) & (k == 0)) | ((t > 1) & (k == len(P) - 2))
        tc = np.clip(t, 0, 1)
        px = a2[0] + tc * ab[0]; py = a2[1] + tc * ab[1]
        rs = ra + (rb - ra) * tc
        ox, oy = xx - px, yy - py; q2 = (ox * ox + oy * oy) / (rs * rs)
        inside = (q2 < 1) & cap_ok
        if not inside.any(): continue
        nz = np.sqrt(np.clip(1 - q2, 0, 1))
        N = np.stack([ox / rs, -oy / rs, nz], -1)
        d3 = nrm(b3 - a3)
        Nc = N - (N @ d3)[..., None] * d3
        N = np.where(endcap[..., None] & (not flat), N, Nc)
        N = N / (np.linalg.norm(N, axis=-1, keepdims=True) + 1e-9)
        c3 = a3 + tc[..., None] * (b3 - a3)
        z = c3[..., 2] + r * N[..., 2]
        dep = CAMD - z
        sub = zb[y0:y1, x0:x1]
        win = inside & (dep < sub)
        if m == 'sh':
            # the sheath is open: its far inner wall shows through the mouth as dark; keep only the outer, front-facing shell
            win &= N[..., 2] > -0.05
        sub[win] = dep[win]
        NX[y0:y1, x0:x1][win] = N[win]; MAT[y0:y1, x0:x1][win] = MID[m]
        PZ[y0:y1, x0:x1][win] = ((c3 - OFF) @ (M @ np.array([0, 0, 1.0])))[win]

# the sheath mouth: a dark disc (the lumen) at z=-0.05, drawn only where nothing nearer is
cen = world(np.array([[0, 0, -0.05]]))[0]; ax = M @ np.array([0, 0, 1.0])
yy, xx = np.mgrid[0:H, 0:W] + 0.5
dx = (xx - CX); dy = -(yy - CY)
rd = nrm(np.stack([dx / F, dy / F, -np.ones_like(dx)], -1))
o = np.array([0, 0, CAMD])
den = rd @ ax
tt = ((cen - o) @ ax) / np.where(np.abs(den) < 1e-6, 1e-6, den)
hit = o + tt[..., None] * rd
rr = np.linalg.norm(hit - cen, axis=-1)
dep = tt * 1.0
lum = (rr < 0.93 * RS) & (dep < zb) & (tt > 0)
zb[lum] = dep[lum]; MAT[lum] = 7

# ---- shading ----
L1 = nrm(np.array([-0.55, 0.75, 0.55]))     # key softbox, upper left
L2 = nrm(np.array([0.85, -0.15, -0.25]))    # cool rim, right and behind
L3 = nrm(np.array([0.2, -0.6, 0.75]))       # low fill
V = np.array([0, 0, 1.0])
INK = np.array([0.03, 0.06, 0.08]); MINT = np.array([0.63, 0.82, 0.84]); BLUE = np.array([0.16, 0.37, 0.59])
def env(R):
    y = R[..., 1]
    base = INK + (np.array([0.10, 0.15, 0.20]) - INK) * sm(-0.6, 0.6, y)[..., None]
    sb = sm(0.55, 0.92, R @ L1)[..., None] * np.array([1.0, 0.98, 0.95]) * 1.6
    rim = sm(0.55, 0.95, R @ L2)[..., None] * MINT * 1.15
    strip = (sm(0.82, 0.97, R @ nrm(np.array([0.1, 0.95, -0.2]))) * 0.7)[..., None] * np.array([0.85, 0.9, 1.0])
    blu = sm(0.2, 0.9, R @ nrm(np.array([-0.4, -0.7, 0.5])))[..., None] * BLUE * 0.35
    return base + sb + rim + strip + blu
N = NX
NdV = np.clip(N[..., 2], 0, 1)
R = 2 * NdV[..., None] * N - V
fres = (0.04 + 0.96 * (1 - NdV) ** 5)[..., None]
def spec(L, p): Hh = nrm(L + V); return np.clip(N @ Hh, 0, 1) ** p
dif1 = np.clip(N @ L1, 0, 1)[..., None]; dif2 = np.clip(N @ L2, 0, 1)[..., None]; dif3 = np.clip(N @ L3, 0, 1)[..., None]
col = np.zeros((H, W, 3))
E = env(R)
# nitinol: polished metal, slightly warm-neutral
NI = np.array([0.92, 0.93, 0.95])
c = E * NI * (0.75 + 0.25 * fres) + spec(L1, 160)[..., None] * 2.2 + spec(L2, 90)[..., None] * MINT * 0.9
col = np.where((MAT == 1)[..., None] | (MAT == 4)[..., None], c, col)
# gold suture tendons, satin
AU = np.array([0.80, 0.68, 0.34])
c = AU * (0.10 + 0.95 * dif1 + 0.35 * dif2 * MINT + 0.25 * dif3) + spec(L1, 30)[..., None] * 0.45
col = np.where((MAT == 2)[..., None], c, col)
# blue polymer catheter and sheath: diffuse blue + clear coat
def poly(base, gl):
    return base * (0.08 + 0.95 * dif1 + 0.30 * dif3) + base * dif2 * MINT * 0.6 + E * (0.06 + fres) * gl + spec(L1, 140)[..., None] * 1.1 * gl + spec(L2, 60)[..., None] * MINT * 0.35 * gl
BL = np.array([0.10, 0.24, 0.58]); SH = np.array([0.11, 0.25, 0.55])
col = np.where((MAT == 3)[..., None], poly(BL, 1.0), col)
col = np.where((MAT == 5)[..., None] | (MAT == 6)[..., None], poly(SH, 0.9), col)
# the lumen: dark, a little lighter toward the lit rim
col = np.where((MAT == 7)[..., None], INK * 0.6 + np.array([0.02, 0.05, 0.10]) * np.clip(1 - rr / RS, 0, 1)[..., None] ** 0.5, col)
alpha = (MAT > 0).astype(float)
# feather the sheath out toward the lower right so it never meets the image edge (DJ)
fade = sm(-10.5, -0.6, PZ) ** 1.25
fade = np.where((MAT == 5) | (MAT == 6) | (MAT == 3), fade, 1.0)
alpha = alpha * fade
# tone map (soft shoulder) and gamma
col = col / (1 + 0.35 * col)
col = np.clip(col, 0, 1) ** (1 / 2.2)
img = np.dstack([col * alpha[..., None], alpha])
im = Image.fromarray((np.clip(img, 0, 1) * 255 + 0.5).astype(np.uint8), 'RGBA').resize((FW, FH), Image.LANCZOS)
# un-premultiply
a = np.asarray(im).astype(float); al = a[..., 3:4] / 255.0
rgb = np.where(al > 0.004, a[..., :3] / np.maximum(al, 1e-3), 0)
out = np.dstack([np.clip(rgb, 0, 255), a[..., 3]]).astype(np.uint8)
Image.fromarray(out, 'RGBA').save(OUT)
print('wrote', OUT, FW, FH)
