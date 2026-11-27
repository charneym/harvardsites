#!/usr/bin/env python3
"""VARIANT B (TOP-FIX 2026-11-27): the same electrodes, lit as a studio product shot with neutral light only: the key from
the upper RIGHT of this image (field.js draws it mirrored, so the key comes from the headline side and the tips face the
text), a low neutral fill, a dim neutral rim on the far lower edge, no cyan, no depth-of-field blur; then a faint soft
cast shadow baked in by ../atlasspine/shadow.py-style padding (shadow.py here).
SensoMedical hero: a crafted render of their real product, the FDA-cleared Wovyn SEEG depth electrode (K253970,
cleared 17 April 2026; predicate SENSOSEEG K213170). From the 510(k) summary: a single-use implantable depth electrode
with 4 to 16 platinum/iridium (Pt90/Ir10) macro contacts, 1.5-3 mm long, on a TPU jacket 0.8-2.0 mm in diameter, with
a stylet for placement. Three electrodes lie in a loose fan, distal (brain-contact) ends forward: a clear, slightly
blue TPU jacket with the fine helical conductor visible through it, bright Pt/Ir ring contacts, rounded tips. Lit by a
cool key from the upper left and a cyan rim (the SensoMedical logo cyan #21b0de). Analytic cylinder shading, 2x
supersampled, real alpha; the proximal ends fade out softly so no cut or edge shows (DJ).
Usage: python3 render.py out.webp [W]"""
import sys, math
import numpy as np
from PIL import Image, ImageFilter

OUT = sys.argv[1] if len(sys.argv) > 1 else 'hero.webp'
OW = int(sys.argv[2]) if len(sys.argv) > 2 else 1300
AR = 0.86                      # height / width
SS = 2
W, H = OW * SS, int(OW * AR) * SS
yy, xx = np.mgrid[0:H, 0:W].astype(np.float32) + 0.5

def nrm(v):
    v = np.asarray(v, np.float32); return v / np.linalg.norm(v)

L = nrm([0.55, -0.62, 0.56])            # key light (x right, y down, z to viewer)
Hh = nrm(L + np.array([0, 0, 1.0]))
L2 = nrm([-0.6, 0.55, 0.58])             # low neutral fill from the lower left (lower right on the page)
CYAN = np.array([0.13, 0.69, 0.87], np.float32)
PT = np.array([0.94, 0.935, 0.92], np.float32)     # platinum/iridium
TPU = np.array([0.90, 0.94, 0.97], np.float32)     # clear polymer, faint blue
WIRE = np.array([0.78, 0.74, 0.68], np.float32)    # conductor seen through the jacket

def sstep(a, b, x):
    t = np.clip((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t)

def env(ry):
    """a studio environment by reflected-ray height: a bright softbox above, a dark horizon band, a cool cyan bounce below"""
    top = sstep(-0.05, -0.9, ry) ** 1.3
    hi = sstep(-0.55, -0.75, ry) * sstep(-0.98, -0.8, ry)     # the softbox's bright core: a narrow band
    bot = sstep(0.2, 0.9, ry)
    e = 0.04 + 0.55 * top[..., None] + 0.5 * hi[..., None] + 0.10 * bot[..., None]
    return e

def electrode(tip, ang_deg, r, contacts, length, dim=1.0):
    """premultiplied RGBA layer of one depth electrode. tip: (x, y) in image fraction; ang: direction from the tip
    toward the proximal end; r: radius in px (at SS); contacts: list of (start, end) along the axis in units of r"""
    a = math.radians(ang_deg)
    dx, dy = math.cos(a), math.sin(a)            # axis direction, tip -> proximal
    px, py = -dy, dx                              # in-plane normal
    tx, ty = tip[0] * W, tip[1] * H
    qx, qy = xx - tx, yy - ty
    s = qx * dx + qy * dy                         # distance along the axis from the tip centre
    v = (qx * px + qy * py) / r                   # across the tube, -1..1
    # tip: a hemisphere at s<0
    capd = np.sqrt((s / r) ** 2 + v ** 2)
    inside = np.where(s < 0, capd < 1.0, np.abs(v) < 1.0) & (s < length)
    # normals
    vz = np.where(s < 0, np.sqrt(np.clip(1 - capd ** 2, 0, 1)), np.sqrt(np.clip(1 - v ** 2, 0, 1)))
    ax = np.where(s < 0, (s / r) * dx, 0.0)       # cap normal tilts along the axis toward the tip
    ay = np.where(s < 0, (s / r) * dy, 0.0)
    nx = ax + np.where(s < 0, v, v) * px
    ny = ay + np.where(s < 0, v, v) * py
    nz = vz
    n = np.sqrt(nx ** 2 + ny ** 2 + nz ** 2) + 1e-6
    nx, ny, nz = nx / n, ny / n, nz / n
    ndl = np.clip(nx * L[0] + ny * L[1] + nz * L[2], 0, 1)
    ndl2 = np.clip(nx * L2[0] + ny * L2[1] + nz * L2[2], 0, 1)
    ndh = np.clip(nx * Hh[0] + ny * Hh[1] + nz * Hh[2], 0, 1)
    rim = (1 - nz) ** 3 * np.clip(-0.7 * nx + 0.7 * ny, 0, 1)   # far (lower left here) edge only, grazing
    su = s / r
    # contacts (metal bands) with a fine bevel at each edge
    met = np.zeros_like(s); bev = np.zeros_like(s)
    for (c0, c1) in contacts:
        inb = (su >= c0) & (su <= c1)
        met = np.maximum(met, inb.astype(np.float32))
        ed = np.minimum(np.abs(su - c0), np.abs(su - c1))
        bev = np.maximum(bev, (inb & (ed < 0.09)).astype(np.float32))
    # the tip cap is metal-free polymer on Wovyn-type electrodes: keep it TPU, slightly denser
    # --- metal shading: environment reflection + sharp key highlight
    ry = 2 * nz * ny                               # reflected ray (view along -z) y component
    em = env(ry)
    metal = PT * (0.08 + 0.22 * ndl)[..., None] + PT * em * 0.86 + (np.clip(ndh, 0, 1) ** 110)[..., None] * 1.4 \
        + (0.30 * rim + 0.10 * ndl2)[..., None]
    metal = metal * (1 - 0.55 * bev)[..., None]
    # --- polymer: clear TPU, Fresnel-weighted alpha, satin highlight, helical conductor visible through it
    ang_c = np.arcsin(np.clip(v, -1, 1))
    helix = ((su * 1.9 + ang_c * 0.55) % 1.0)
    wire = sstep(0.22, 0.1, np.abs(helix - 0.5)) * sstep(0.78, 0.55, np.abs(v)) * (s > 0.6 * r)
    gloss = np.clip(ndh, 0, 1) ** 70
    poly = TPU * (0.24 + 0.46 * ndl)[..., None] + gloss[..., None] * 1.1 + (0.30 * rim + 0.08 * ndl2)[..., None]
    wcol = WIRE * (0.35 + 0.9 * ndl)[..., None] + (ndh ** 20)[..., None] * 0.35
    poly = poly * (1 - 0.4 * wire)[..., None] + wcol * (0.4 * wire)[..., None]
    palpha = 0.42 + 0.35 * (1 - nz) ** 2.2 + 0.2 * rim + 0.2 * wire + 0.6 * gloss
    col = np.where(met[..., None] > 0, metal, poly)
    alpha = np.where(met > 0, 1.0, np.clip(palpha, 0, 1))
    # proximal fade: the lead dissolves softly into the ink (DJ)
    fade = 1 - sstep(length * 0.40, length, s) ** 0.8
    alpha = alpha * fade * inside * dim
    col = np.clip(col, 0, 1.6)
    return np.concatenate([col * alpha[..., None], alpha[..., None]], -1)

def bands(n, c_len, gap, first=1.4):
    out = []; p = first
    for i in range(n):
        out.append((p, p + c_len)); p += c_len + gap
    return out

R1, R2, R3 = 0.021 * W, 0.0178 * W, 0.0148 * W
layers = [
    # back electrode: thinnest, 10 contacts, softly out of focus
    (electrode((0.76, 0.34), -157, R3, bands(10, 1.9, 1.5), 0.62 * W, 0.72), 0.0),
    # middle: 6 contacts, wider spacing
    (electrode((0.90, 0.53), -159, R2, bands(6, 2.2, 2.3), 0.70 * W, 0.92), 0.0),
    # front: 8 contacts
    (electrode((0.80, 0.73), -163, R1, bands(8, 1.75, 1.3), 0.74 * W, 1.0), 0.0),
]
acc = np.zeros((H, W, 4), np.float32)
for lay, blur in layers:
    if blur > 0:
        im = Image.fromarray(np.clip(lay * 255 / 1.6, 0, 255).astype(np.uint8), 'RGBA')
        # blur each channel of the premultiplied layer
        chans = [Image.fromarray(np.clip(lay[..., k] / (1.6 if k < 3 else 1) * 255, 0, 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(blur * SS)) for k in range(4)]
        lay = np.stack([np.asarray(c, np.float32) / 255 * (1.6 if k < 3 else 1) for k, c in enumerate(chans)], -1)
    acc = lay + acc * (1 - lay[..., 3:4])      # this layer is in FRONT of what came before
# un-premultiply, downsample
a = acc[..., 3]
rgb = np.where(a[..., None] > 1e-4, acc[..., :3] / np.maximum(a[..., None], 1e-4), 0)
rgb = np.clip(rgb, 0, 1)
img = Image.fromarray(np.concatenate([(rgb * 255).astype(np.uint8), (np.clip(a, 0, 1) * 255).astype(np.uint8)[..., None]], -1), 'RGBA')
img = img.resize((OW, int(OW * AR)), Image.LANCZOS)
bb = img.getchannel('A').point(lambda x: 255 if x > 3 else 0).getbbox()
pad = int(OW * 0.03)
img = img.crop((max(0, bb[0] - pad), max(0, bb[1] - pad), min(img.width, bb[2] + pad), min(img.height, bb[3] + pad)))
img.save(OUT, 'WEBP', quality=90, method=6)
print('wrote', OUT, img.size)
