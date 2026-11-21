#!/usr/bin/env python3
"""UN&UP hero: a crafted render of the physics every UN&UP platform is built on (magnetic control): a nickel-plated
neodymium bar magnet lying on a dark glass plate, with iron filings tracing its real dipole field. Top-down, studio-lit
from the upper left, shallow depth of field. The field is computed (two-pole model), filings are needles aligned to it,
clustered at the poles like real filings. Output: hero.webp with real alpha (ground = transparent), so no box edge."""
import numpy as np, math, pathlib
from PIL import Image, ImageDraw, ImageFilter
rng = np.random.default_rng(7)
H = pathlib.Path(__file__).resolve().parent
S = 2600                      # supersampled canvas; output S/2
C = S / 2
ROT = math.radians(-24)       # magnet axis angle
L, Wm = S * .30, S * .085     # magnet length / width
ax = np.array([math.cos(ROT), math.sin(ROT)]); nx = np.array([-ax[1], ax[0]])
poles = [(C + ax[0] * L * .42, C + ax[1] * L * .42, 1.0), (C - ax[0] * L * .42, C - ax[1] * L * .42, -1.0)]

def B(x, y):
    bx = np.zeros_like(x); by = np.zeros_like(x)
    for px, py, q in poles:
        dx, dy = x - px, y - py; r3 = (dx * dx + dy * dy + 60.0) ** 1.5
        bx += q * dx / r3; by += q * dy / r3
    return bx, by

def local(x, y):
    dx, dy = x - C, y - C
    return dx * ax[0] + dy * ax[1], dx * nx[0] + dy * nx[1]

# ---------- filings: chains along evenly spaced field lines (Jobard-Lefer), like real filings ----------
def Bv(px, py):
    bx = by = 0.0
    for qx_, qy_, q in poles:
        dx, dy = px - qx_, py - qy_; r3 = (dx * dx + dy * dy + 60.0) ** 1.5
        bx += q * dx / r3; by += q * dy / r3
    return bx, by
def inmag(px, py, pad):
    dx, dy = px - C, py - C; uu = dx * ax[0] + dy * ax[1]; vv = dx * nx[0] + dy * nx[1]
    return abs(uu) < L / 2 + pad and abs(vv) < Wm / 2 + pad
CELL = 3; G = S // CELL + 1
occ = np.zeros((G, G), np.int32)
def sep(px, py):
    rr = math.hypot(px - C, py - C) / (S * .5)
    return 5 + 11 * rr ** 1.5
def free(px, py, lid):
    d = sep(px, py); k = int(d / CELL) + 1; gx, gy = int(px / CELL), int(py / CELL)
    x0, x1, y0, y1 = max(gx - k, 0), min(gx + k + 1, G), max(gy - k, 0), min(gy + k + 1, G)
    blk = occ[y0:y1, x0:x1]
    return not np.any((blk != 0) & (blk != lid))
lines = []
seeds = []
for px, py, q in poles:
    for t in np.linspace(0, 2 * math.pi, 900, endpoint=False):
        seeds.append((px + math.cos(t) * Wm * .62, py + math.sin(t) * Wm * .62))
for _ in range(30000):
    seeds.append((rng.uniform(S * .08, S * .92), rng.uniform(S * .08, S * .92)))
STEP = 3.0
for lid, (sx, sy) in enumerate(seeds, 1):
    if inmag(sx, sy, S * .012) or math.hypot(sx - C, sy - C) > S * .47 or not free(sx, sy, lid): continue
    pts = []
    for direction in (1, -1):
        px, py = sx, sy; seg = []
        for _ in range(1400):
            bx, by = Bv(px, py); m = math.hypot(bx, by)
            if m == 0: break
            px += direction * STEP * bx / m; py += direction * STEP * by / m
            if inmag(px, py, S * .006) or math.hypot(px - C, py - C) > S * .48 or not free(px, py, lid): break
            seg.append((px, py))
        pts = seg[::-1] + [(sx, sy)] + pts if direction == -1 else seg
    if len(pts) < 6: continue
    for px, py in pts: occ[int(py / CELL), int(px / CELL)] = lid
    lines.append(pts)
print('lines', len(lines))
X = []; Y = []; A = []
for pts in lines:
    arr = np.array(pts); dd = np.r_[0, np.cumsum(np.hypot(*np.diff(arr, axis=0).T))]
    s0 = rng.uniform(0, 8); 
    while s0 < dd[-1]:
        i = np.searchsorted(dd, s0); i = min(max(i, 1), len(arr) - 1)
        p0, p1 = arr[i - 1], arr[i]; aa = math.atan2(p1[1] - p0[1], p1[0] - p0[0])
        if rng.random() > .12:
            j = rng.normal(0, 1.6)
            X.append(p1[0] - math.sin(aa) * j); Y.append(p1[1] + math.cos(aa) * j); A.append(aa)
        rr = math.hypot(p1[0] - C, p1[1] - C) / (S * .5)
        s0 += rng.uniform(7, 13) * (1 + .9 * rr)
NCH = len(X)
NR = 40000
rx = rng.uniform(0, S, NR); ry = rng.uniform(0, S, NR)
rbx, rby = B(rx, ry); rbm = np.hypot(rbx, rby); rr_ = np.hypot(rx - C, ry - C) / (S * .5)
kk = (rng.uniform(0, 1, NR) < np.clip((rbm / np.percentile(rbm, 70)) ** .5, 0, 1) * np.clip(1 - rr_ / .95, 0, 1) * .8)
uu_, vv_ = local(rx, ry); kk &= ~((np.abs(uu_) < L / 2 + S * .01) & (np.abs(vv_) < Wm / 2 + S * .01))
X += list(rx[kk]); Y += list(ry[kk]); A += list(np.arctan2(rby[kk], rbx[kk]))
x = np.array(X); y = np.array(Y); ang = np.array(A)
bx, by = B(x, y); bm = np.hypot(bx, by)
r = np.hypot(x - C, y - C) / (S * .5)
n = len(x); print('filings', n)
ln = rng.uniform(7, 15, n) * (1 + .45 * np.clip(bm / np.percentile(bm, 90), 0, 1.4))
ang += rng.normal(0, .08, n)
th = rng.choice([2, 2, 3], n)
light = math.radians(-135)
spec = np.abs(np.sin(ang - light)) ** 6
base = rng.uniform(.3, .55, n)
lum = np.clip(base + .95 * spec * rng.uniform(.4, 1, n), 0, 1)
lum *= np.clip(1.2 - r * .6, .35, 1)
lum[NCH:] *= .62; lum[:NCH] = np.clip(lum[:NCH] * 1.12, 0, 1)
teal = np.array([17, 157, 164]) / 255; steel = np.array([.78, .83, .85]); hi = np.array([.95, .99, 1.0])
g = lum[:, None]
col = teal * (1 - g) * .9 + steel * g * .8 + hi * (g ** 3) * .35
col = np.clip(col * (0.25 + .9 * g), 0, 1)

img = Image.new('RGBA', (S, S), (0, 0, 0, 0)); d = ImageDraw.Draw(img)
sh = Image.new('L', (S, S), 0); dsh = ImageDraw.Draw(sh)
order = np.argsort(lum)
for i in order:
    hx, hy = math.cos(ang[i]) * ln[i] / 2, math.sin(ang[i]) * ln[i] / 2
    a = int(255 * min(1, .55 + .6 * lum[i]) * min(1, max(0, (1 - r[i]) * 2.6) ** 1.4))
    if a <= 4: continue
    dsh.line([(x[i] - hx + 3, y[i] - hy + 4), (x[i] + hx + 3, y[i] + hy + 4)], fill=110, width=int(th[i]))
    cc = tuple(int(255 * c) for c in col[i]) + (a,)
    d.line([(x[i] - hx, y[i] - hy), (x[i] + hx, y[i] + hy)], fill=cc, width=int(th[i]))

# ---------- the magnet ----------
yy, xx = np.mgrid[0:S, 0:S].astype(np.float32)
U, V = local(xx, yy)
hl, hw, rad = L / 2, Wm / 2, S * .012
qx = np.maximum(np.abs(U) - (hl - rad), 0); qy = np.maximum(np.abs(V) - (hw - rad), 0)
sd = np.hypot(qx, qy) + np.minimum(np.maximum(np.abs(U) - (hl - rad), np.abs(V) - (hw - rad)), 0) - rad  # signed distance
cov = np.clip(.5 - sd / 1.6, 0, 1)
bev = S * .016
e = np.clip(-sd / bev, 0, 1)                  # 0 at edge -> 1 on the flat top
# surface normal on the bevel points outward; key light from upper left
gu = np.where(np.abs(U) - hl > np.abs(V) - hw, np.sign(U), 0); gv = np.where(gu == 0, np.sign(V), 0)
wx = gu * ax[0] + gv * nx[0]; wy = gu * ax[1] + gv * nx[1]
lx, ly = math.cos(light), math.sin(light)
facing = (wx * lx + wy * ly)
# rounded edge: height profile h = sqrt(1-(1-e)^2); slope -> normal tilts outward near the edge
tz = np.sqrt(np.clip(1 - (1 - e) ** 2, 0, 1)); txy = 1 - e
nz = tz / np.sqrt(tz ** 2 + txy ** 2 + 1e-6); nxy = txy / np.sqrt(tz ** 2 + txy ** 2 + 1e-6)
Lz = .75; Lxy = math.sqrt(1 - Lz * Lz)
diff = np.clip(nz * Lz + nxy * facing * Lxy, 0, 1)
band = np.exp(-((V / hw + .25 + .25 * U / hl) ** 2) / .18)
brush = (rng.normal(0, 1, (1, S)).astype(np.float32))
brushimg = Image.fromarray(((brush - brush.min()) / (np.ptp(brush)) * 255).astype(np.uint8)).resize((S, 1)).resize((S, S))
brushimg = brushimg.rotate(math.degrees(-ROT), resample=Image.BILINEAR)
br = (np.asarray(brushimg, np.float32) / 255 - .5) * .05
rim = np.exp(-((1 - e) - .55) ** 2 / .02) * np.clip(facing, 0, 1)      # bright rim on the lit rounded edge
shade = .16 + .42 * diff * e + .48 * band * e ** 2 + .55 * rim + br * e - .1 * (1 - tz)
shade = np.clip(shade, 0, 1.1)
mcol = np.stack([shade * .86 + .02, shade * .92 + .03, shade * .95 + .04], -1)
mcol = mcol * (1 - .18 * (1 - band[..., None])) + np.array([.02, .10, .11]) * (1 - band[..., None]) * .6  # teal ambient in the dark side
mag = np.dstack([np.clip(mcol, 0, 1) * 255, cov * 255]).astype(np.uint8)
magI = Image.fromarray(mag, 'RGBA')
# magnet contact shadow onto the plate
msh = Image.fromarray((np.clip(.5 - (sd - S * .004) / (S * .01), 0, 1) * 230).astype(np.uint8)).filter(ImageFilter.GaussianBlur(S * .012))
msh = msh.transform((S, S), Image.AFFINE, (1, 0, -S * .006, 0, 1, -S * .010))
sh = Image.fromarray(np.maximum(np.asarray(sh.filter(ImageFilter.GaussianBlur(2.5))), np.asarray(msh)))

# ---------- composite: shadows (darken), filings, magnet ----------
out = Image.new('RGBA', (S, S), (0, 0, 0, 0))
shadowL = Image.new('RGBA', (S, S), (0, 0, 0, 0)); shadowL.putalpha(sh.point(lambda p: int(p * .8)))
out.alpha_composite(shadowL); out.alpha_composite(img)
# depth of field: the outer ring slightly soft
blur = out.filter(ImageFilter.GaussianBlur(3.2))
rr = np.hypot(xx - C, yy - C) / (S * .5)
m = Image.fromarray((np.clip((rr - .45) / .4, 0, 1) * 255).astype(np.uint8))
out = Image.composite(blur, out, m)
out.alpha_composite(magI)
# soft teal bloom around the poles (on alpha), kept faint
glow = Image.new('RGBA', (S, S), (0, 0, 0, 0)); gd = ImageDraw.Draw(glow)
for px, py, q in poles:
    R = S * .07; gd.ellipse([px - R, py - R, px + R, py + R], fill=(17, 157, 164, 34))
glow = glow.filter(ImageFilter.GaussianBlur(S * .05))
fin = Image.alpha_composite(glow, out)
fin = fin.resize((S // 2, S // 2), Image.LANCZOS)
fin.save(H / 'hero.webp', 'WEBP', quality=88, method=6)
prev = Image.new('RGB', fin.size, (5, 9, 10)); prev.paste(fin, (0, 0), fin); prev.save('/tmp/claude-0/un/hero_prev.jpg', quality=88)
print('ok', fin.size)
