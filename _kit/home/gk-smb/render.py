#!/usr/bin/env python3
"""Offline height-field render of the bag formats GK Sondermaschinenbau's machines produce (gk-smb.de > Beutelformen:
Flachbeutel / Siegelrandbeutel, Stickpacks): two four-side-seal sachets (one aluminium-foil laminate, one matte white
laminate as for their wet-wipe and prep-pad applications) and one stick pack, fanned out, each with a pillowed fill,
knurled (crimped) seal margins, a tear notch and fine foil wrinkles. No print, no branding.
Output: RGBA png with real alpha (the page ink shows through)."""
import numpy as np, sys
from PIL import Image, ImageFilter

W = int(sys.argv[1]) if len(sys.argv) > 1 else 900
H = int(W * 0.9)
SS = 2
OUT = sys.argv[2] if len(sys.argv) > 2 else 'sachets.png'
CW, CH = W * SS, H * SS
rng = np.random.default_rng(7)

def smooth(x): x = np.clip(x, 0, 1); return x * x * (3 - 2 * x)

def sachet(wpx, hpx, seal, pillow, kind):
    """height map (mm-ish units scaled to px), alpha, seal mask and material id in a local, unrotated tile"""
    pad = 4
    y, x = np.mgrid[0:hpx + 2 * pad, 0:wpx + 2 * pad].astype(np.float32)
    x -= pad; y -= pad
    # rounded-corner rectangle mask, with a tear notch on the left seal
    r = seal * .35
    dx = np.maximum(np.maximum(r - x, x - (wpx - r)), 0); dy = np.maximum(np.maximum(r - y, y - (hpx - r)), 0)
    inside = (np.sqrt(dx * dx + dy * dy) <= r) & (x >= 0) & (x <= wpx) & (y >= 0) & (y <= hpx)
    ny = hpx * .2
    notch = (x < seal * .55 - np.abs(y - ny) * 1.0) & (np.abs(y - ny) < seal * .55)
    alpha = (inside & ~notch).astype(np.float32)
    # distance into the pillow area from the seal line
    ix = np.minimum(x - seal, wpx - seal - x); iy = np.minimum(y - seal, hpx - seal - y)
    d = np.minimum(ix, iy)
    inner = d > 0
    hw, hh = wpx / 2 - seal, hpx / 2 - seal
    u = (x - wpx / 2) / hw; v = (y - hpx / 2) / hh
    base = np.clip(1 - np.abs(u) ** 2.6, 0, 1) ** .55 * np.clip(1 - np.abs(v) ** 2.6, 0, 1) ** .55
    h = pillow * base
    # foil wrinkles: ripples running in from the seal lines, decaying inward, irregular phase
    along_x = x / max(wpx, 1) * 2 * np.pi; along_y = y / max(hpx, 1) * 2 * np.pi
    wr = np.zeros_like(h)
    for k in range(5):
        f = rng.uniform(7, 15); ph = rng.uniform(0, 6.3); a = rng.uniform(.3, .7)
        wr += a * np.sin(f * along_x + ph + 2.2 * np.sin(along_y * 1.3 + k)) * np.exp(-np.maximum(iy, 0) / (hh * .22))
        f = rng.uniform(5, 11); ph = rng.uniform(0, 6.3); a = rng.uniform(.3, .7)
        wr += a * np.sin(f * along_y + ph + 2.2 * np.sin(along_x * 1.1 + k)) * np.exp(-np.maximum(ix, 0) / (hw * .22))
    amp = pillow * (.09 if kind == 'foil' else .04)
    h = h + amp * wr * smooth(d / (seal * .9 + 1e-3)) * (base > 0)
    h = np.where(inner, h, 0.0)
    # the seal: flat with a fine diamond knurl, a raised step at the seal line
    lam = 5.0 * SS
    knurl = 0.35 * SS * (np.sin(2 * np.pi * (x + y) / lam) * np.sin(2 * np.pi * (x - y) / lam))
    sealm = (~inner).astype(np.float32)
    h = h + sealm * knurl * .6
    return h.astype(np.float32), alpha, sealm, pad

def place(canvas_h, canvas_a, canvas_seal, canvas_mat, canvas_z, tile, alpha, sealm, ang, cx, cy, z0, mat):
    hi = Image.fromarray(tile + 1000.0, 'F'); ai = Image.fromarray(alpha, 'F'); si = Image.fromarray(sealm, 'F')
    hi = hi.rotate(ang, Image.BICUBIC, expand=True, fillcolor=1000.0)
    ai = ai.rotate(ang, Image.BICUBIC, expand=True, fillcolor=0)
    si = si.rotate(ang, Image.BILINEAR, expand=True, fillcolor=0)
    th = np.array(hi) - 1000.0; ta = np.clip(np.array(ai), 0, 1); ts = np.array(si)
    hgt, wid = th.shape
    x0 = int(cx - wid / 2); y0 = int(cy - hgt / 2)
    sl = (slice(y0, y0 + hgt), slice(x0, x0 + wid))
    m = ta > .5
    canvas_h[sl] = np.where(m, z0 + th, canvas_h[sl])
    canvas_seal[sl] = np.where(m, ts, canvas_seal[sl])
    canvas_mat[sl] = np.where(m, mat, canvas_mat[sl])
    canvas_z[sl] = np.where(m, z0, canvas_z[sl])
    canvas_a[sl] = np.maximum(canvas_a[sl] * (1 - ta), ta) if False else np.where(m, ta, np.maximum(canvas_a[sl], ta))
    return ta, (x0, y0)

Hh = np.zeros((CH, CW), np.float32); A = np.zeros_like(Hh); SL = np.zeros_like(Hh); MAT = np.zeros_like(Hh); Z = np.zeros_like(Hh)
s = CW / 900.0
layers = []
# back: foil sachet, tilted left
t = sachet(int(330 * s), int(430 * s), int(34 * s), 40 * s, 'foil')
layers.append(place(Hh, A, SL, MAT, Z, t[0], t[1], t[2], 13, CW * .34, CH * .44, 0, 1))
# middle: matte white sachet, tilted right
t = sachet(int(320 * s), int(400 * s), int(32 * s), 34 * s, 'white')
layers.append(place(Hh, A, SL, MAT, Z, t[0], t[1], t[2], -9, CW * .6, CH * .5, 60 * s, 2))
# front: foil stick pack
t = sachet(int(112 * s), int(470 * s), int(18 * s), 26 * s, 'foil')
layers.append(place(Hh, A, SL, MAT, Z, t[0], t[1], t[2], -27, CW * .44, CH * .58, 120 * s, 1))

# normals
gy, gx = np.gradient(Hh)
n = np.stack([-gx, -gy, np.ones_like(Hh) * 1.0], -1)
n /= np.linalg.norm(n, axis=-1, keepdims=True)
nx, ny, nz = n[..., 0], n[..., 1], n[..., 2]
# reflection of the view ray (0,0,1)
rx, ry, rz = 2 * nz * nx, 2 * nz * ny, 2 * nz * nz - 1
def lobe(dx, dy, dz, sharp):
    d = np.array([dx, dy, dz]); d = d / np.linalg.norm(d)
    c = np.clip(rx * d[0] + ry * d[1] + rz * d[2], 0, 1)
    return c ** sharp
# studio environment: a big soft box upper left, a narrow strip light right, dark floor
env = .16 + .10 * np.clip(-ry, 0, 1) + .75 * lobe(-.5, -.55, .67, 6) + 1.1 * lobe(-.55, -.55, .63, 40) + .7 * lobe(.75, -.15, .64, 60) + .18 * lobe(0, .1, 1, 4)
L = np.array([-.5, -.6, .62]); L = L / np.linalg.norm(L)
dif = np.clip(nx * L[0] + ny * L[1] + nz * L[2], 0, 1)
foil = np.stack([env * .93, env * .95, env * 1.0], -1)
white = (.34 + .66 * dif)[..., None] * np.array([.93, .92, .9]) + (.25 * lobe(-.55, -.55, .63, 30))[..., None]
col = np.where((MAT == 2)[..., None], white, foil)
# seal margins: a little darker (crimped, more diffuse)
col = col * (1 - .12 * SL[..., None])
# a thin printed accent line on the white sachet, just inside the top seal is not drawn: keep it unbranded
# contact shadows of the upper layers on the lower ones
sh = np.ones_like(Hh)
zf = Z / max(Z.max(), 1)
for i, (ta, (x0, y0)) in enumerate(layers[1:], 1):
    m = np.zeros_like(Hh); hgt, wid = ta.shape; m[y0:y0 + hgt, x0:x0 + wid] = ta
    b = np.array(Image.fromarray((m * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(18 * SS))) / 255.
    b = np.roll(np.roll(b, int(12 * SS), 0), int(7 * SS), 1)
    lower = Z < (60 * s * i) - 1
    sh = np.where(lower, sh * (1 - .5 * b), sh)
col = col * sh[..., None]
col = np.clip(col, 0, 1) ** (1 / 1.15)
rgba = np.dstack([col, A])
img = Image.fromarray((rgba * 255).astype(np.uint8), 'RGBA').resize((W, H), Image.LANCZOS)
img.save(OUT)
print('wrote', OUT, img.size)
