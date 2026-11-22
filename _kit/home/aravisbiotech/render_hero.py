#!/usr/bin/env python3
"""Hero render for Aravis BioTech (HOME_BRIEF update 2c: a crafted render of the firm's real device).
An AP radiograph of a proximal femur with an intertrochanteric fracture, fixed with a sliding hip screw (lag screw through the
neck into the head, barrel and side plate with four cortical screws), and Aravis's sensor: a straight radiodense tungsten pin
inside the screw's cannula, attached at the back (aravisbiotech.com/technologies, Figure 1; Sci Rep 2025, 15:19725).
The image is an X-ray simulation: path lengths through cortical shell, trabecular bone, soft tissue and metal, attenuated and
windowed like a film, toned from the page ink through the brand teal to bone white; the pin carries the brand lime.
Real alpha everywhere (eased to zero long before the canvas edge), so there is no box edge (DJ/DP).
Usage: python3 render_hero.py out.webp
"""
import sys, numpy as np
from PIL import Image
from scipy import ndimage as nd

S = 2                       # supersampling
W, H = 1200, 1600           # output size
w, h = W * S, H * S
rng = np.random.default_rng(7)
yy, xx = np.mgrid[0:h, 0:w].astype(np.float32) / S   # coordinates in output px

def seg_dist(ax, ay, bx, by):
    """distance to segment a-b and the parameter t along it"""
    vx, vy = bx - ax, by - ay; L2 = vx * vx + vy * vy
    t = np.clip(((xx - ax) * vx + (yy - ay) * vy) / L2, 0, 1)
    return np.hypot(xx - ax - t * vx, yy - ay - t * vy), t

def smin(a, b, k):
    hh = np.clip(.5 + .5 * (b - a) / k, 0, 1)
    return b * (1 - hh) + a * hh - k * hh * (1 - hh)

def ss(e0, e1, x):
    x = np.clip((x - e0) / (e1 - e0), 0, 1); return x * x * (3 - 2 * x)

def oriented_noise(theta, along, across, seed):
    """band-limited noise with streaks along angle theta (radians, image coords)"""
    r = np.random.default_rng(seed).standard_normal((h, w)).astype(np.float32)
    fy = np.fft.fftfreq(h)[:, None].astype(np.float32); fx = np.fft.fftfreq(w)[None, :].astype(np.float32)
    c, s = np.cos(theta), np.sin(theta)
    fa = fx * c + fy * s          # frequency along the streak direction (low: long streaks)
    fc = -fx * s + fy * c         # frequency across
    G = np.exp(-(fa * along) ** 2) * np.exp(-((np.abs(fc) - 1 / across) * across * .9) ** 2)
    n = np.real(np.fft.ifft2(np.fft.fft2(r) * G)).astype(np.float32)
    return n / (n.std() + 1e-6)

# ---------------- bone outline: a smooth union of anatomical primitives ----------------
HC = (352, 418); HR = 150                      # femoral head
d_head = np.hypot(xx - HC[0], yy - HC[1]) - HR
dn, tn = seg_dist(640, 640, 380, 440)          # neck, with a waist
d_neck = dn - (88 - 22 * np.clip(np.sin(np.clip(tn, 0, 1) * np.pi), 0, 1) ** 1.2)
ds, ts = seg_dist(706, 1700, 694, 760)         # shaft (cut off below the frame)
d_shaft = ds - (104 + 8 * ss(.75, 1, ts))
d_gt = np.hypot((xx - 812) / 1.0, (yy - 560) / 1.15) - 112   # greater trochanter
d_it = np.hypot((xx - 700) / 1.0, (yy - 720) / 1.12) - 168   # intertrochanteric mass
dl, _ = seg_dist(600, 820, 556, 872); d_lt = dl - 34           # lesser trochanter
D = smin(d_head, d_neck, 40)
D = smin(D, d_it, 70); D = smin(D, d_gt, 50); D = smin(D, d_shaft, 90); D = smin(D, d_lt, 30)
bone = D < 0
# medullary side: the cortex is thick down the shaft, thin around the head and trochanters
cort = 7 + 24 * ss(860, 1250, yy) + 4 * ss(300, 160, np.hypot(xx - HC[0], yy - HC[1]))

din = nd.distance_transform_edt(bone) / S
R = nd.gaussian_filter(nd.maximum_filter(din, size=int(90 * S)), 30 * S) + 1
def chord(d, r):
    d = np.minimum(d, r); return 2 * np.sqrt(np.maximum(0, d * (2 * r - d)))
outer = chord(din, R)
inner_mask = din > cort
dinn = nd.distance_transform_edt(inner_mask) / S
inner = chord(dinn, np.maximum(R - cort, 1))
cortical = np.maximum(outer - inner, 0)

# trabecular pattern: compressive streaks rising into the head, tensile arcs, a finer isotropic weave
n_comp = oriented_noise(np.deg2rad(-70), 90 * S, 7 * S, 1)
n_neck = oriented_noise(np.arctan2(440 - 640, 380 - 640), 90 * S, 7 * S, 2)
n_vert = oriented_noise(np.deg2rad(-88), 120 * S, 8 * S, 3)
n_fine = nd.gaussian_filter(rng.standard_normal((h, w)).astype(np.float32), 2.2 * S); n_fine /= n_fine.std()
wh = ss(260, 120, np.hypot(xx - HC[0], yy - HC[1]))           # head
wn = ss(120, 30, dn) * (1 - wh)                                 # neck
wv = ss(800, 1000, yy) * (1 - wh)                               # shaft
wc = np.clip(1 - wh - wn - wv, 0, 1)
tex = wh * n_comp + wn * n_neck + wv * n_vert * .6 + wc * (.6 * n_comp + .4 * n_neck)
tex = .55 * tex + .45 * n_fine
trab_den = np.clip(.62 + .2 * tex, .25, 1.1)
trab_den *= 1 - .55 * ss(860, 1150, yy)                         # the medullary canal empties down the shaft
# Ward's triangle: a sparser patch in the neck below the compressive group
trab_den *= 1 - .3 * np.exp(-(((xx - 520) / 60) ** 2 + ((yy - 610) / 45) ** 2))

# intertrochanteric fracture line, greater to lesser trochanter, slightly jagged, partly bridged by callus
fx_n = nd.gaussian_filter(rng.standard_normal(h).astype(np.float32), 18 * S); fx_n = fx_n / fx_n.std()
line_x = 840 - (yy - 520) * (840 - 590) / (860 - 520) + 6 * fx_n[:, None] * np.ones((1, w), np.float32)
frac = np.exp(-((xx - line_x) / 2.6) ** 2) * ss(500, 540, yy) * ss(890, 850, yy)
bone_att = (.03 * cortical + .0048 * inner * trab_den) * (1 - .55 * frac)

# acetabular roof over the head and the ilium fading off up-left; teardrop and ischium hints
dac = np.hypot(xx - HC[0], yy - HC[1]) - (HR + 14)
ang = np.arctan2(yy - HC[1], xx - HC[0])
roof = np.exp(-((dac - 4) / 16) ** 2) * ss(np.deg2rad(-10), np.deg2rad(-40), ang) * ss(np.deg2rad(-178), np.deg2rad(-150), ang)
ilium = ss(30, -60, dac) * 0 + np.exp(-((dac - 70) / 60) ** 2) * ss(np.deg2rad(-20), np.deg2rad(-60), ang) * ss(np.deg2rad(-200), np.deg2rad(-140), ang)
pelv_tex = .8 + .2 * nd.gaussian_filter(n_fine, 12 * S) / (nd.gaussian_filter(n_fine, 12 * S).std() + 1e-6)
pelvis = (.9 * roof + .5 * ilium * pelv_tex) * ss(-6, 10, dac)
pelvis *= ss(-40, 140, -(xx - 120)) * 0 + ss(40, 200, xx) * ss(40, 180, yy + 0)

# soft tissue of the thigh and buttock
st_d, _ = seg_dist(640, 1800, 600, 300)
soft = np.exp(-(st_d / 330) ** 2) * (.85 + .15 * nd.gaussian_filter(n_fine, 14 * S))

# ---------------- the implant ----------------
ux, uy = np.array([HC[0] - 640, HC[1] - 640], np.float32) / np.hypot(HC[0] - 640, HC[1] - 640)  # along the neck, toward the head
px, py = -uy, ux
def axial(ox, oy):  # coordinates along / across the screw axis from origin o
    return (xx - ox) * ux + (yy - oy) * uy, (xx - ox) * px + (yy - oy) * py
# entry on the lateral cortex
t_e = (800 - HC[0]) / -ux
EX, EY = HC[0] - ux * t_e, HC[1] - uy * t_e
TIPL = t_e - (HR - 26)                         # screw length from the entry to the tip (tip ~26 px under the head surface)
a, c = axial(EX, EY)
L_PIN0 = -34                                   # the pin starts at the screw's back, outside the cortex
metal = np.zeros((h, w), np.float32); mshade = np.zeros((h, w), np.float32)
def rod(r, a0, a1, val, prof=True):
    m = (a >= a0) & (a <= a1) & (np.abs(c) <= r)
    thick = np.sqrt(np.maximum(0, 1 - (c / r) ** 2)) if prof else 1
    return np.where(m, val * thick, 0)
# lag screw shaft, threads over the last 150 px
shaft_r = 25
thread_zone = (a > TIPL - 150) & (a <= TIPL)
pitch = 17
saw = np.abs(((a - TIPL) / pitch) % 1 - .5) * 2              # 0..1 triangle
r_thr = np.where(thread_zone, 25 + 14 * saw, shaft_r)
tip_round = np.where(a > TIPL - 14, np.sqrt(np.maximum(0, 1 - ((a - TIPL + 14) / 14) ** 2)), 1)
lag = (a >= L_PIN0) & (a <= TIPL) & (np.abs(c) <= r_thr * tip_round)
lag_t = np.where(lag, np.sqrt(np.maximum(0, 1 - (c / np.maximum(r_thr, 1)) ** 2)), 0)
cannula = lag & (np.abs(c) < 7.5) & (a < TIPL - 6)
# barrel around the screw's lateral end, and its hub on the plate
barrel = (a >= -38) & (a <= 150) & (np.abs(c) <= 37)
barrel_t = np.where(barrel, .72 + .28 * np.sqrt(np.maximum(0, 1 - (c / 37) ** 2)), 0)
# side plate on the lateral cortex, edge-on, from the barrel down the shaft
plate_x0 = lambda y: 801 + (y - 760) * (-12 / 900)            # follows the shaft's slight lean
pl = (yy >= EY - 30) & (yy <= 1440) & (xx >= plate_x0(yy)) & (xx <= plate_x0(yy) + 30)
pl_end = np.where(yy > 1420, np.sqrt(np.maximum(0, 1 - ((yy - 1420) / 20) ** 2)), 1)
pl = pl & (np.abs(xx - plate_x0(yy) - 15) <= 15 * pl_end + .01)
plate_t = np.where(pl, .9 + .1 * np.cos((xx - plate_x0(yy) - 15) / 15 * np.pi / 2), 0)
# four cortical screws through the plate and across the shaft
cs = np.zeros((h, w), np.float32)
for i, sy in enumerate([920, 1050, 1180, 1310]):
    x0 = plate_x0(sy) + 30 + 10; x1 = 598 - 2 * i
    thr = 11 + 4.5 * np.abs(((xx - x1) / 9.5) % 1 - .5) * 2
    rr = np.where(xx < x0 - 40, thr, 11)
    body = (xx >= x1) & (xx <= x0) & (np.abs(yy - sy) <= rr)
    head = (xx >= x0 - 2) & (xx <= x0 + 12) & (np.abs(yy - sy) <= 20)
    cs = np.maximum(cs, np.where(body, np.sqrt(np.maximum(0, 1 - ((yy - sy) / np.maximum(rr, 1)) ** 2)), 0))
    cs = np.maximum(cs, np.where(head, .95, 0))
metal = np.maximum.reduce([lag_t, barrel_t, plate_t, cs])
metal = np.where(cannula, metal * .62, metal)
# the tungsten pin: straight, in the cannula, from the screw's back to just short of the tip
pin = (a >= L_PIN0 - 4) & (a <= TIPL - 12) & (np.abs(c) <= 4.2)
pin_t = np.where(pin, np.sqrt(np.maximum(0, 1 - (c / 4.2) ** 2)), 0)

# ---------------- expose ----------------
att = .0006 * soft * 260 + bone_att + .010 * pelvis * 60
a0 = np.percentile(att[bone], 70)
I_tis = .85 * (1 - np.exp(-att / a0 * 1.3))
print('att', a0, np.percentile(att[bone], [10, 50, 90, 99]))
# metal sits at the top of the window with its own form shading; the pin brightest
I = np.maximum(I_tis, metal * .95 + .03)
I = np.where(cannula & ~pin, np.maximum(I_tis * .9, metal * .95), I)
I = np.maximum(I, pin_t * 1.0)
I = np.clip(I, 0, 1)
# film unsharpness, then downsample
I = nd.gaussian_filter(I, .9 * S)
pinm = nd.gaussian_filter(pin_t, 1.4 * S)
def down(a_):
    return a_.reshape(H, S, W, S).mean(axis=(1, 3))
I = down(I); pinm = down(pinm)
yo, xo = np.mgrid[0:H, 0:W].astype(np.float32)
# a long eased vignette so nothing reaches the canvas edge (ends well inside it)
ex = np.minimum(np.minimum(xo, W - xo) / 200, 1); ey = np.minimum(np.minimum(yo, H - yo) / 260, 1)
vig = ss(0, 1, ex) * ss(0, 1, ey)
I = I * vig
# grain in the exposed areas
I = np.clip(I + rng.standard_normal(I.shape).astype(np.float32) * .012 * np.sqrt(np.clip(I, 0, 1)), 0, 1)

# ---------------- tone: ink -> brand teal -> sky -> bone white; the pin in the brand lime ----------------
ramp = np.array([[0, 11, 36, 51], [.22, 20, 70, 94], [.45, 52, 118, 142], [.7, 150, 201, 219], [.88, 226, 240, 244], [1, 250, 252, 250]], np.float32)
rgb = np.stack([np.interp(I, ramp[:, 0], ramp[:, k]) for k in (1, 2, 3)], -1)
lime = np.array([207, 244, 26], np.float32)
pk = np.clip(pinm * 1.15, 0, 1)[..., None] * .78
rgb = rgb * (1 - pk) + lime * pk
alpha = ss(.0, .22, I)
alpha = np.maximum(alpha, pk[..., 0])
# premultiply against the ink so faint pixels are ink-coloured, never a lighter fringe
ink = np.array([11, 36, 51], np.float32)
out = np.dstack([np.clip(rgb, 0, 255), np.clip(alpha * 255, 0, 255)]).astype(np.uint8)
Image.fromarray(out, 'RGBA').save(sys.argv[1] if len(sys.argv) > 1 else 'hero.webp', quality=90, method=6)
print('ok', I.max(), alpha.mean())
