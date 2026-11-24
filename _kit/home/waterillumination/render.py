#!/usr/bin/env python3
"""Hero render for Water Illumination: the heart of their flow-through UV reactor, a UV lamp glowing inside its quartz
sleeve, with stainless end fittings, seen slightly from above. Analytic cylinder shading (curved section edges for a
3/4 view), lamp bloom, supersampled, real alpha. Usage: python3 render.py out.png"""
import sys, numpy as np
from PIL import Image, ImageFilter

SS = 2
W, H = 700 * SS, 1560 * SS
y, x = np.mgrid[0:H, 0:W].astype(np.float32)
cx = W / 2
R = 150 * SS            # quartz sleeve outer radius
E = 0.2                 # ellipse ratio of the view from above
TOP, BOT = 270 * SS, H - 250 * SS

def sm(e0, e1, v):
    t = np.clip((v - e0) / (e1 - e0), 0, 1)
    return t * t * (3 - 2 * t)

def mix(a, b, t):
    return a + (b - a) * t[..., None]

col = np.zeros((H, W, 3), np.float32)
alp = np.zeros((H, W), np.float32)
emit = np.zeros((H, W, 3), np.float32)

def put(m, c, a=1.0):
    global col, alp
    if np.isscalar(a): a = np.full((H, W), a, np.float32)
    col[m] = col[m] * (1 - a[m, None]) + c[m] * a[m, None]
    alp[m] = a[m] + alp[m] * (1 - a[m])

steel = np.array([0.80, 0.86, 0.92])

def metal(rr, y0, y1, grooves=(), top_face=False, lip=0.0, bright=1.0):
    """A stainless cylinder from y0 to y1 (front edge curves down by E*rr*n), optional top face ellipse."""
    uu = (x - cx) / rr
    n = np.sqrt(np.clip(1 - uu * uu, 0, 1))
    yy = y - E * rr * n          # unbend the front curve
    m = (np.abs(uu) < 1) & (yy >= y0) & (yy < y1)
    env = (0.13 + 0.62 * np.exp(-(((uu + 0.48) / 0.26) ** 2)) + 0.9 * np.exp(-(((uu - 0.82) / 0.045) ** 2))
           + 0.22 * np.exp(-(((uu - 0.18) / 0.3) ** 2)) + 0.25 * np.exp(-(((uu + 0.93) / 0.04) ** 2)))
    t = (yy - y0) / (y1 - y0)
    g = np.ones_like(t)
    for gt, gw in grooves:
        g = g - 0.5 * np.exp(-(((t - gt) / gw) ** 2)) + 0.25 * np.exp(-(((t - gt - gw * 1.6) / (gw * 0.7)) ** 2))
    edge = 1 + 0.35 * np.exp(-((t / 0.025) ** 2)) - 0.25 * np.exp(-(((1 - t) / 0.03) ** 2))
    brush = 1 + 0.025 * np.sin(x * 1.7 + np.sin(x * 0.05) * 3)
    v = env * g * edge * brush * (0.6 + 0.4 * n) * bright
    put(m, steel[None, None, :] * v[..., None])
    if lip > 0:
        lp = np.exp(-(((1 - t) / 0.07) ** 2)) * np.exp(-((uu / 0.55) ** 2)) * lip
        col[m] += (np.array([0.25, 0.55, 1.0])[None, None, :] * lp[..., None])[m]
    if top_face:
        # the flat top seen from above: an ellipse centred on y0
        ell = (uu ** 2 + ((y - y0) / (E * rr)) ** 2)
        mt = ell < 1
        rad = np.sqrt(np.clip(ell, 0, 1))
        fv = (0.34 + 0.28 * (-(uu) * 0.5 + 0.5) - 0.1 * rad + 0.25 * np.exp(-(((rad - 0.93) / 0.03) ** 2))) * bright
        put(mt, steel[None, None, :] * fv[..., None])
        # a dark bore in the middle (where the cable enters)
        bo = (uu ** 2 + ((y - y0) / (E * rr)) ** 2) * (1 / 0.3 ** 2)
        put(bo < 1, np.zeros((H, W, 3)) + 0.06)

# --- quartz sleeve
u = (x - cx) / R
nz = np.sqrt(np.clip(1 - u * u, 0, 1))
yq = y - E * R * nz
inS = (np.abs(u) < 1) & (yq > TOP - 30 * SS) & (yq < BOT + 30 * SS)
fres = (1 - nz) ** 2.4

# the lamp inside: a narrower glass tube that emits; electrodes darken its ends; rounded ends
RL = R * 0.38
ul = (x - cx) / RL
nl = np.sqrt(np.clip(1 - ul * ul, 0, 1))
yl = y - E * RL * nl
lt, lb = TOP + 40 * SS, BOT - 40 * SS
inL = (np.abs(ul) < 1) & (yl > lt) & (yl < lb)
along = (yl - lt) / (lb - lt)
endf = sm(0.0, 0.035, along) * sm(0.0, 0.035, 1 - along)
electrode = 1 - 0.75 * (np.exp(-(((along - 0.045) / 0.018) ** 2)) + np.exp(-(((1 - along) - 0.045) / 0.018) ** 2))
glowband = sm(0.07, 0.12, along) * sm(0.07, 0.12, 1 - along)
white = np.array([0.95, 0.98, 1.0]); blue = np.array([0.36, 0.70, 1.0]); vio = np.array([0.46, 0.42, 0.98])
lampc = mix(mix(vio, blue, sm(0.0, 0.5, nl)), white, sm(0.62, 0.99, nl))
li = (0.25 + 0.75 * sm(0.0, 0.45, nl)) * glowband * endf
li = li * (0.93 + 0.07 * np.sin(along * np.pi))
lamp_rim = (1 - nl) ** 3 * 0.5
elec = (1 - glowband) * endf * electrode
lampcol = lampc * li[..., None] + (np.array([0.55, 0.6, 0.7]) * 0.35)[None, None, :] * (elec * (0.4 + 0.6 * nl))[..., None] \
    + np.array([0.8, 0.9, 1.0])[None, None, :] * lamp_rim[..., None] * endf[..., None]

# water glow inside the sleeve
d = np.abs(x - cx) / R
gv = sm(0.04, 0.16, (yq - TOP) / (BOT - TOP)) * sm(0.04, 0.16, (BOT - yq) / (BOT - TOP))
glow = (np.exp(-((d / 0.5) ** 2)) * 0.42 + np.exp(-((d / 0.95) ** 2)) * 0.18) * gv
c = np.array([0.12, 0.40, 0.85])[None, None, :] * glow[..., None]
rim = fres * 0.7 + 0.22 * np.exp(-(((np.abs(u) - 0.87) / 0.012) ** 2))
s1 = np.exp(-(((u + 0.6) / 0.05) ** 2)) * 0.45 + np.exp(-(((u + 0.48) / 0.011) ** 2)) * 0.55
s2 = np.exp(-(((u - 0.73) / 0.03) ** 2)) * 0.3
ref = (s1 + s2) * (0.7 + 0.3 * np.cos(((yq - TOP) / (BOT - TOP)) * np.pi * 2))
gl = np.array([0.8, 0.9, 1.0])
c = c + gl[None, None, :] * (rim * 0.55 + ref)[..., None]
a = np.clip(0.2 + glow * 0.9 + rim * 0.8 + ref, 0, 1)
put(inS, c, a)
# lamp (seen through the front of the sleeve, reflections stay on top)
la = np.clip(li * 1.2 + elec * 0.9 + lamp_rim, 0, 1)
put(inL, lampcol, la)
col[inS] += (gl[None, None, :] * (ref * 0.8)[..., None])[inS]
emit[inL] = (lampc * li[..., None])[inL]

# --- fittings (bottom drawn first so the curved fronts overlap correctly)
RF = R * 1.14
metal(RF, BOT, BOT + 120 * SS, grooves=((0.62, 0.02), (0.7, 0.02)), lip=0.5)
metal(R * 0.44, BOT + 120 * SS, BOT + 175 * SS, grooves=((0.5, 0.05),), bright=0.9)
metal(R * 0.44, TOP - 185 * SS, TOP - 120 * SS, grooves=((0.5, 0.05),), top_face=True, bright=0.95)
metal(RF, TOP - 120 * SS, TOP, grooves=((0.3, 0.02), (0.38, 0.02)), top_face=True, lip=0.0)
# the gland again on top of the fitting's top face
metal(R * 0.44, TOP - 185 * SS, TOP - 120 * SS, grooves=((0.5, 0.05),), top_face=True, bright=0.95)
# lamp light on the glass end of the top fitting's underside is hidden; add light spill on the lower fitting lip
# --- bloom: blurred emission added around, as light in water
em = Image.fromarray((np.clip(emit, 0, 1) * 255).astype(np.uint8))
b1 = np.asarray(em.filter(ImageFilter.GaussianBlur(18 * SS)), np.float32) / 255
b2 = np.asarray(em.filter(ImageFilter.GaussianBlur(70 * SS)), np.float32) / 255
bloom = b1 * 0.55 + b2 * 0.9
bl = np.clip(bloom.max(axis=2) * 1.0, 0, 1)
metalmask = alp > 0.99
add = bloom * (~metalmask)[..., None] * 0.9
col = col * alp[..., None] + add
alp2 = np.clip(alp + bl * 0.9 * (~metalmask), 0, 1)
rgb = np.where(alp2[..., None] > 1e-4, col / np.maximum(alp2[..., None], 1e-4), 0)
img = np.dstack([np.clip(rgb, 0, 1), alp2])
im = Image.fromarray((img * 255 + 0.5).astype(np.uint8), 'RGBA')
im = im.resize((W // SS, H // SS), Image.LANCZOS)
im = im.rotate(-9, resample=Image.BICUBIC, expand=True)
bb = Image.fromarray((np.asarray(im)[..., 3] > 3).astype(np.uint8) * 255).getbbox()
im = im.crop(bb)
im.save(sys.argv[1] if len(sys.argv) > 1 else 'hero.png')
print(im.size)
