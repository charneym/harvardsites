#!/usr/bin/env python3
"""Hero render for Biolight Engineering (HOME_BRIEF update 2c: a crafted render of the real subject).
PedCam's output: an ultra-widefield (200 deg) colour fundus image of an infant's right eye, the view trans-pars-planar
illumination makes possible without dilating the pupil. Optic disc nasal (left), macula temporal (right), four vascular
arcades running out to the far periphery, and the orange choroidal pattern converging on the vortex veins that only a
widefield view reaches. Graded low and copper (highlights held well below white) so it sits on the site's navy ink.
Writes an RGBA webp whose circular field feathers to transparent (DJ: no seams). Deterministic (seeded)."""
import sys, math, random
import numpy as np
from PIL import Image, ImageDraw, ImageFilter
OUT = sys.argv[1] if len(sys.argv) > 1 else 'hero.webp'
S = 2400            # supersampled canvas
N = 1500            # output size
R = S * 0.47        # radius of the field of view
CX = CY = S / 2
rng = random.Random(7); np.random.seed(7)
yy, xx = np.mgrid[0:S, 0:S].astype(np.float32)
rr = np.hypot(xx - CX, yy - CY) / R            # 0 centre, 1 rim

def blurnoise(sig, amp=1.0):
    n = np.random.rand(S // 4, S // 4).astype(np.float32)
    im = Image.fromarray((n * 255).astype(np.uint8)).resize((S, S), Image.BICUBIC).filter(ImageFilter.GaussianBlur(sig))
    a = np.asarray(im).astype(np.float32) / 255
    return (a - a.mean()) / (a.std() + 1e-6) * amp

def sm(a, b, x):
    t = np.clip((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t)

# ---------- choroid ground: warm orange centre, deeper red-brown periphery ----------
centre = np.array([0.86, 0.45, 0.20]); mid = np.array([0.70, 0.30, 0.13]); edge = np.array([0.40, 0.14, 0.07])
k1 = sm(0.0, 0.62, rr)[..., None]; k2 = sm(0.55, 1.0, rr)[..., None]
img = centre * (1 - k1) + mid * k1
img = img * (1 - k2) + edge * k2
img = img * (1 + 0.05 * blurnoise(18)[..., None] + 0.03 * blurnoise(5)[..., None])

# ---------- choroidal vessels converging on four vortex veins (the widefield signature) ----------
cho = Image.new('L', (S, S), 0); dc = ImageDraw.Draw(cho)
vort = [(CX + R * .58 * math.cos(a), CY + R * .58 * math.sin(a)) for a in (math.radians(d) for d in (-48, 46, 134, -132))]
for vx, vy in vort:
    for i in range(34):
        a0 = rng.uniform(0, 2 * math.pi); L = rng.uniform(.22, .55) * R
        x, y = vx + L * math.cos(a0), vy + L * math.sin(a0)
        pts = [(x, y)]; w = rng.uniform(18, 36)
        for s in range(40):
            dx, dy = vx - x, vy - y; d = math.hypot(dx, dy)
            if d < 14: break
            ang = math.atan2(dy, dx) + .22 * math.sin(s * .25 + i * 1.7) + rng.uniform(-.08, .08)
            st = min(d, L / 22); x += st * math.cos(ang); y += st * math.sin(ang); pts.append((x, y))
        dc.line(pts, fill=255, width=int(w), joint='curve')
cho = np.asarray(cho.filter(ImageFilter.GaussianBlur(11))).astype(np.float32) / 255
tig = sm(0.30, 0.78, rr) * (1 - sm(0.97, 1.0, rr))           # only the periphery shows the tigroid pattern
img = img * (1 - (0.24 * tig)[..., None]) + (img * 1.1 + np.array([.04, .015, 0])) * ((0.24 * tig * cho)[..., None])

# ---------- disc and macula ----------
DX, DY = CX - R * .16, CY + R * .01             # right eye: disc nasal (left)
MX, MY = CX + R * .14, CY + R * .04
dd = np.hypot((xx - DX) / 1.0, (yy - DY) / 1.12) / (R * .052)
md = np.hypot(xx - MX, yy - MY) / (R * .16)
img = img * (1 - (0.38 * np.exp(-md ** 2 * 1.6))[..., None])               # darker, pigmented macula
img = img * (1 - (0.20 * np.exp(-(np.hypot(xx - DX, yy - DY) / (R * .11)) ** 2))[..., None]) + \
      np.array([.10, .06, .02]) * np.exp(-(np.hypot(xx - DX, yy - DY) / (R * .1)) ** 2)[..., None]  # peripapillary halo
disc = sm(1.05, 0.9, dd)[..., None]
dcol = np.array([0.92, 0.66, 0.44]) * (1 + .04 * blurnoise(3)[..., None])
img = img * (1 - disc) + dcol * disc
cup = sm(0.55, 0.35, np.hypot((xx - DX - R * .008) / 1.0, (yy - DY) / 1.1) / (R * .052))[..., None]
img = img * (1 - cup * .6) + np.array([0.98, .84, .66]) * cup * .5

# ---------- retinal vessels: arteries (lighter, narrower) and veins (darker, wider) ----------
def grow(draw, x, y, ang, w, depth, turn, out):
    while w > 1.2:
        st = 6
        nx, ny = x + st * math.cos(ang), y + st * math.sin(ang)
        if math.hypot(nx - CX, ny - CY) > R * 1.02: break
        if math.hypot(nx - MX, ny - MY) < R * .07: ang += .25 * (1 if turn >= 0 else -1)
        draw.line([(x, y), (nx, ny)], fill=int(min(255, w * 10)), width=max(1, int(round(w))))
        x, y = nx, ny
        rad = math.atan2(y - DY, x - DX)
        ang += turn + rng.gauss(0, .05) + .006 * math.sin(rad - ang)
        turn *= .997
        w *= .9975
        if depth < 7 and rng.random() < .05 + .012 * depth:
            ba = ang + rng.choice((-1, 1)) * rng.uniform(.45, .95)
            grow(draw, x, y, ba, w * rng.uniform(.45, .7), depth + 1, rng.gauss(0, .008), out)
            w *= .95 if depth == 0 else .88
    out.append(1)

def tree(color_seed, wmain, offs):
    lay = Image.new('L', (S, S), 0); dr = ImageDraw.Draw(lay); o = []
    rng.seed(color_seed)
    # four arcades: superotemporal / inferotemporal arch around the macula; nasal ones run straighter
    for a, t in ((-1.5 + offs, .0125), (1.5 - offs, -.0125), (-2.45 + offs, -.0015), (2.45 - offs, .0015)):
        grow(dr, DX + 8 * math.cos(a), DY + 8 * math.sin(a), a, wmain, 0, t, o)
    for a in (-0.25, 0.3, 3.0, -2.95, 1.75, -1.7):              # small macular / nasal twigs from the disc
        grow(dr, DX, DY, a + rng.gauss(0, .1), wmain * .38, 3, rng.gauss(0, .004), o)
    return np.asarray(lay.filter(ImageFilter.GaussianBlur(1.4))).astype(np.float32) / 255

V = tree(11, 19, 0.0); A = tree(23, 14, 0.14)
V = np.clip(V * 1.4, 0, 1); A = np.clip(A * 1.4, 0, 1)
vcol = np.array([0.36, 0.06, 0.05]); acol = np.array([0.62, 0.14, 0.08])
img = img * (1 - V[..., None] * .82) + vcol * V[..., None] * .82
img = img * (1 - A[..., None] * .72) + acol * A[..., None] * .72
# faint light reflex along the larger vessels
ref = np.clip((A - .82) * 4, 0, 1) + np.clip((V - .86) * 3, 0, 1) * .5
img = img + np.array([.20, .10, .06]) * ref[..., None] * .35
# nerve-fibre sheen around the posterior pole
img = img + np.array([.05, .04, .03]) * (np.exp(-(np.hypot(xx - (DX + MX) / 2, yy - DY) / (R * .3)) ** 2) * (0.5 + 0.5 * blurnoise(2)))[..., None]
# foveal reflex
img = img + np.array([.18, .14, .10]) * np.exp(-(np.hypot(xx - MX, yy - MY) / (R * .006)) ** 2)[..., None]

# ---------- illumination: trans-pars-planar light is even to the periphery; just a gentle falloff and a dark rim ----------
img = img * (1 - .38 * sm(.55, 1.0, rr) ** 1.3)[..., None]
img = img * (1 + .03 * blurnoise(60)[..., None])

# ---------- grade: copper, low, highlights held ----------
img = np.clip(img, 0, 1)
L = (img * [.2126, .7152, .0722]).sum(2, keepdims=True)
img = L + (img - L) * .82
img = np.clip(img, 0, 1) ** 1.18 * .78
alpha = (1 - sm(.90, 1.0, rr)) * 255                       # feathered circular field
rgba = np.dstack([np.clip(img, 0, 1) * 255, alpha]).astype(np.uint8)
Image.fromarray(rgba, 'RGBA').resize((N, N), Image.LANCZOS).save(OUT, quality=86, method=6)
print('wrote', OUT)
