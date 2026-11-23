#!/usr/bin/env python3
"""Hero art (HOME_BRIEF update 2c): a crafted render of Amethyst Care's own voice device, modelled on the product
photograph on amethystcare.ie (images/device.png, 450x420, too small to use sharp): a round speakerphone with a dark
matte rim, a perforated speaker grille, a green LED ring and nine control icons (power, call, end call, Bluetooth,
battery, volume -/+, mute, indicator). Unbranded, as on their site. Seen in three-quarter view resting on a surface, with
a real alpha channel (no backdrop box, DP/DJ) and a separate LED layer the page pulses while the device 'listens'.
Writes hero.webp (RGBA) and led.webp (RGBA) at the same size."""
import numpy as np, pathlib, math
from PIL import Image, ImageDraw, ImageFilter
H = pathlib.Path(__file__).resolve().parent
S = 1800                      # top-down texture size
R = S * .47                   # disc radius in texture px
C = S / 2

def sm(e0, e1, x):
    t = np.clip((x - e0) / (e1 - e0), 0, 1); return t * t * (3 - 2 * t)

# ---------- top-down texture ----------
yy, xx = np.mgrid[0:S, 0:S].astype(np.float32)
dx, dy = (xx - C) / R, (yy - C) / R
r = np.sqrt(dx * dx + dy * dy)
ang = np.arctan2(-dy, dx)                    # 0 = right, +90 = top
col = np.zeros((S, S, 3), np.float32)
rim = np.array([74, 75, 78], np.float32)
col[:] = rim
# matte rim: soft light from upper left, a lighter bevel at the outer edge and a darker step into the grille
lgt = (-dx * .55 + -dy * .75)                # light from upper left
col *= (1 + .10 * lgt[..., None] * sm(.78, .99, r)[..., None])
bev = sm(.955, .985, r) * (1 - sm(.992, 1.0, r))
col += (bev * (18 + 30 * np.clip(lgt, 0, 1)))[..., None]
# inner bezel: a narrow dark groove then a lip
grv = sm(.775, .79, r) * (1 - sm(.80, .815, r))
col *= (1 - .45 * grv)[..., None]
lip = sm(.815, .825, r) * (1 - sm(.83, .845, r))
col += (lip * (10 + 22 * np.clip(lgt, 0, 1)))[..., None]
# perforated grille inside r<.78: hex-packed holes
g = r < .79
pitch = S * .0085
u = xx / pitch; v = yy / (pitch * .866)
row = np.floor(v); uu = u + (row % 2) * .5
fx = uu - np.floor(uu) - .5; fy = v - row - .5
hd = np.sqrt(fx * fx + (fy * .866) ** 2)
hole = 1 - sm(.24, .32, hd)
grille = np.array([56, 57, 60], np.float32) * (1 + .12 * (-dx * .5 - dy * .6))[..., None]
grille = grille * (1 - .62 * hole[..., None])
# a soft sheen across the grille, like the photograph
sheen = np.exp(-(((dx + .25) * .9 + (dy + .35)) ** 2) / .18) * .10
grille *= (1 + sheen)[..., None]
w = (1 - sm(.77, .785, r))[..., None]
col = col * (1 - w) + grille * w
alpha = 1 - sm(.997, 1.003, r)

# icons on the rim, drawn crisp at 2x then reduced
ic = Image.new('L', (S * 2, S * 2), 0); idr = ImageDraw.Draw(ic)
icc = Image.new('RGB', (S * 2, S * 2), (0, 0, 0)); icd = ImageDraw.Draw(icc)
RI = R * .895 * 2; Cc = C * 2; lw = int(S * .0042 * 2)
def P(a, rr=RI):
    a = math.radians(a); return Cc + rr * math.cos(a), Cc - rr * math.sin(a)
def line(pts, fill, width=lw):
    idr.line(pts, fill=255, width=width, joint='curve'); icd.line(pts, fill=fill, width=width, joint='curve')
    for p in (pts[0], pts[-1]):
        e = width / 2; idr.ellipse([p[0]-e, p[1]-e, p[0]+e, p[1]+e], fill=255); icd.ellipse([p[0]-e, p[1]-e, p[0]+e, p[1]+e], fill=fill)
def arc(c, rad, a0, a1, fill, width=lw):
    pts = [(c[0] + rad * math.cos(math.radians(t)), c[1] + rad * math.sin(math.radians(t))) for t in np.linspace(a0, a1, 60)]
    line(pts, fill, width)
WH = (222, 224, 228); GR = (96, 205, 92); RD = (226, 70, 64)
k = S * .02 * 2   # icon half-size
# power (top)
x, y = P(90); arc((x, y), k * .8, -50, 230, WH); line([(x, y - k * 1.05), (x, y - k * .2)], WH)
# indicator dot (upper left)
x, y = P(125); e = k * .32; idr.ellipse([x-e, y-e, x+e, y+e], fill=255); icd.ellipse([x-e, y-e, x+e, y+e], fill=WH)
# call (left, green) and end call (right, red): handset arcs
def handset(x, y, fill, rot):
    pts = []
    for t in np.linspace(0, 1, 40):
        a = math.radians(200 + 140 * t); pts.append((x + k * .95 * math.cos(a), y + k * .55 * math.sin(a) + k * .15))
    c, s = math.cos(math.radians(rot)), math.sin(math.radians(rot))
    pts = [(x + (px - x) * c - (py - y) * s, y + (px - x) * s + (py - y) * c) for px, py in pts]
    line(pts, fill, int(lw * 1.25))
handset(*P(180), GR, -35); handset(*P(0), RD, 0)
# bluetooth (lower left)
x, y = P(213); b = k * .9
line([(x - b * .45, y - b * .4), (x + b * .45, y + b * .4), (x, y + b * .85), (x, y - b * .85), (x + b * .45, y - b * .4), (x - b * .45, y + b * .4)], WH, int(lw * .8))
# battery (lower right)
x, y = P(327); line([(x - k * .8, y - k * .4), (x + k * .7, y - k * .4), (x + k * .7, y + k * .4), (x - k * .8, y + k * .4), (x - k * .8, y - k * .4)], WH, int(lw * .8))
line([(x + k * .85, y - k * .15), (x + k * .85, y + k * .15)], WH, int(lw * .9))
# volume - and +
x, y = P(243); line([(x - k * .55, y), (x + k * .55, y)], WH)
x, y = P(297); line([(x - k * .55, y), (x + k * .55, y)], WH); line([(x, y - k * .55), (x, y + k * .55)], WH)
# mute (bottom): microphone with a slash
x, y = P(270); line([(x, y - k * .7), (x, y - k * .05)], WH, int(lw * 1.6)); arc((x, y - k * .2), k * .48, 10, 170, WH, int(lw * .8))
line([(x, y + k * .3), (x, y + k * .6)], WH, int(lw * .8)); line([(x - k * .6, y - k * .75), (x + k * .6, y + k * .65)], WH, int(lw * .8))
ia = np.asarray(ic.resize((S, S), Image.LANCZOS), np.float32)[..., None] / 255
icol = np.asarray(icc.resize((S, S), Image.LANCZOS), np.float32) / np.maximum(ia, 1e-3)
col = col * (1 - ia * .96) + np.clip(icol, 0, 255) * ia * .96

# LED ring: a thin bright core plus a soft glow, its own layer
led_r = .955
ld = np.abs(r - led_r)
core = 1 - sm(.0035, .0065, ld)
glow = np.exp(-(ld / .012) ** 2) * .55
LEDC = np.array([124, 226, 104], np.float32)
col = col * (1 - core[..., None] * .55) + np.array([60, 120, 56], np.float32) * core[..., None] * .55   # dim ring when off
led_a = np.clip(core + glow * (1 - core), 0, 1) * alpha
led_col = LEDC * (1 - core[..., None] * .35) + np.array([235, 255, 225], np.float32) * core[..., None] * .35

# ---------- three-quarter projection ----------
EL = math.radians(58)          # viewing elevation
sy = math.sin(EL)              # ellipse squash
HW = R * .13 * math.cos(EL)    # visible side-wall height
OW, OH = int(S * 1.16), int(S * sy + HW + S * .2)
ox, oy = (OW - S) / 2, S * .05
Y, X = np.mgrid[0:OH, 0:OW].astype(np.float32)
# top surface: inverse map
tx = X - ox; ty = (Y - oy - C * sy) / sy + C
def sample(img, tx, ty):
    x0 = np.clip(tx, 0, S - 1.001); y0 = np.clip(ty, 0, S - 1.001)
    xi = x0.astype(int); yi = y0.astype(int); fx = (x0 - xi)[..., None] if img.ndim == 3 else x0 - xi; fy = (y0 - yi)[..., None] if img.ndim == 3 else y0 - yi
    a = img[yi, xi]; b = img[yi, xi + 1]; c = img[yi + 1, xi]; d = img[yi + 1, xi + 1]
    return (a * (1 - fx) + b * fx) * (1 - fy) + (c * (1 - fx) + d * fx) * fy
top_c = sample(col, tx, ty); top_a = sample(alpha, tx, ty) * ((tx >= 0) & (tx < S) & (ty >= 0) & (ty < S))
led_c = sample(led_col, tx, ty); led_A = sample(led_a, tx, ty) * ((tx >= 0) & (tx < S) & (ty >= 0) & (ty < S))
# side wall: for each column, between the top ellipse's front edge and the same edge lowered by HW
ex = (X - ox - C) / R
inside = np.abs(ex) < 1
yfront = oy + C * sy + R * sy * np.sqrt(np.clip(1 - ex * ex, 0, 1))
wall = inside & (Y > yfront - 2) & (Y < yfront + HW)
wt = np.clip((Y - yfront) / HW, 0, 1)
sideshade = 46 + 26 * np.clip(-ex * .7 + .3, 0, 1)                    # lit from the left
wallc = (sideshade * (1 - .45 * wt))[..., None] * np.array([1, 1.01, 1.05], np.float32)
wallc += (sm(0, .08, wt) * (1 - sm(.08, .2, wt)) * 14)[..., None]       # rounded top edge catches light
wall_a = sm(-1.0, -.985, -np.abs(ex)) * sm(-1.5, .5, Y - yfront + 2) * (1 - sm(HW - 1.2, HW + .6, Y - yfront))
# soft contact shadow and a long falloff on the surface
sh_c = (X - ox - C - R * .05) / (R * 1.05); sh_y = (Y - (oy + C * sy + HW * .9 + R * .03)) / (R * sy * 1.02)
sd = np.sqrt(sh_c ** 2 + sh_y ** 2)
shadow = .55 * np.exp(-np.clip(sd - .9, 0, None) ** 2 / .012) * (sd > .5) + .0
sh2 = .26 * np.exp(-np.clip(sd - .82, 0, None) ** 2 / .07)
shA = np.clip(np.maximum(shadow, sh2), 0, .6) * (1 - sm(1.3, 1.65, sd))
shA = np.asarray(Image.fromarray((shA * 255).astype('uint8')).filter(ImageFilter.GaussianBlur(S * .006)), np.float32) / 255
# composite (premultiplied, back to front): shadow, wall, top
out = np.zeros((OH, OW, 3), np.float32); A = np.zeros((OH, OW), np.float32)
def over(c, a):
    global out, A
    out = c * a[..., None] + out * (1 - a[..., None]); A = a + A * (1 - a)
over(np.zeros_like(out) + np.array([20, 18, 40], np.float32), shA)
over(wallc, np.where(wall, wall_a, 0))
over(top_c, top_a)
A = np.where(A < 2.5 / 255, 0, A)
rgb = np.where(A[..., None] > 1e-4, out / np.maximum(A[..., None], 1e-4), 0)
img = Image.fromarray(np.dstack([np.clip(rgb, 0, 255), A * 255]).round().astype('uint8'), 'RGBA')
ledimg = Image.fromarray(np.dstack([np.clip(led_c, 0, 255), np.clip(led_A, 0, 1) * 255]).round().astype('uint8'), 'RGBA')
bb = img.getbbox(); pad = 24
bb = (max(0, bb[0] - pad), max(0, bb[1] - pad), min(OW, bb[2] + pad), min(OH, bb[3] + pad))
img = img.crop(bb); ledimg = ledimg.crop(bb)
ea = np.asarray(img)[..., 3].astype(np.float32); hh, ww = ea.shape; gy, gx = np.mgrid[0:hh, 0:ww]
e = np.minimum(np.minimum(gx, ww - 1 - gx), np.minimum(gy, hh - 1 - gy)) / 40.0
img.putalpha(Image.fromarray((ea * np.clip(e, 0, 1)).round().astype('uint8')))
TW = 1600; th = round(TW * img.height / img.width)
img.resize((TW, th), Image.LANCZOS).save(H / 'hero.webp', quality=92, method=6, lossless=False, alpha_quality=100)
ledimg.resize((TW, th), Image.LANCZOS).save(H / 'led.webp', quality=90, method=6, alpha_quality=100)
print('hero', TW, th)
