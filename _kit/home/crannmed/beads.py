#!/usr/bin/env python3
"""CrannMed hero (HOME_BRIEF option c): a crafted render of the real product, SakuraBead resorbable embolic
microspheres. Calibrated translucent hydrogel spheres of near-identical size, shaded as real transparent beads:
Fresnel rim, sharp + broad specular, a refracted caustic on the far side, milky volume scatter, and depth of field.
Written with real alpha on a transparent ground (premultiplied light + occlusion), so it sits on the page ink
with no box edge (DP/DJ). Colours from the CrannMed logo: teal #19a7a7 / #0b6f6f on navy #00305c.
Run: python3 beads.py  ->  hero.webp"""
import math, random, pathlib
import numpy as np
from PIL import Image, ImageFilter

K = 2                       # output scale (2 = retina-sharp at the displayed size)
S = 1600 * K                    # canvas (px)
SS = 1                      # supersampling for clean edges
R0 = 36 * K                     # calibrated bead radius at the focus plane (px, final)
random.seed(7); np.random.seed(7)
H = pathlib.Path(__file__).resolve().parent

# ---- 3D positions: a close-packed island of beads resting on a surface (2D relaxation), a few in a second layer
#      sitting in the hollows near the middle, and a few that have rolled clear; then an oblique macro camera.
N = 300
P = np.random.normal(0, 1, (N, 2)) * [6.2, 5.6]
for it in range(420):
    d = P[:, None, :] - P[None, :, :]
    dist = np.sqrt((d ** 2).sum(-1)) + np.eye(N) * 9
    ov = np.clip(2.06 - dist, 0, None)
    P += (d / dist[..., None] * ov[..., None]).sum(1) * .5
    P -= P * .006 * (1 if it < 360 else 0)
# an organic island edge: keep beads inside a noisy ellipse
ang = np.arctan2(P[:, 1], P[:, 0]); rad = np.sqrt((P[:, 0] / 1.12) ** 2 + P[:, 1] ** 2)
edge = 7.6 + 1.1 * np.sin(3 * ang + .7) + .8 * np.sin(5 * ang + 2.1) + .5 * np.sin(8 * ang)
keep = rad < edge
layer1 = [(x, y, 1.0) for (x, y) in P[keep]]
loose = [(x, y, 1.0) for (x, y), k, rr in zip(P, keep, rad) if (not k) and rr < edge.max() + 2 and x > -2 and random.random() < .12]
# second layer: in hollows of touching triples near the centre
pts = np.array([(x, y) for (x, y, _) in layer1])
top = []
for i in range(len(pts)):
    if np.hypot(pts[i][0] / 1.12, pts[i][1]) > 3.6: continue
    nb = np.where(np.hypot(*(pts - pts[i]).T) < 2.25)[0]
    for j in nb:
        for k in nb:
            if j <= i or k <= j: continue
            c = (pts[i] + pts[j] + pts[k]) / 3
            if np.hypot(*(pts[j] - pts[k])) > 2.25: continue
            if all(np.hypot(*(c - np.array(t[:2]))) > 2.05 for t in top) and random.random() < .5:
                m = max(np.hypot(*(c - pts[q])) for q in (i, j, k))
                top.append((c[0], c[1], 1.0 + math.sqrt(max(0, 4 - m * m))))
heap = layer1 + loose + top
EL = math.radians(40)
beads = []
for (X, Y, Z) in heap:
    sx = X * R0
    sy = -(Y * math.sin(EL) + Z * math.cos(EL)) * R0      # screen y, down (far side up)
    sz = -(Y * math.cos(EL) - Z * math.sin(EL)) * R0      # toward the viewer
    beads.append((sx, sy, sz, R0 * random.uniform(.97, 1.03)))
my = np.mean([b[1] for b in beads]); mz = np.mean([b[2] for b in beads])
beads = [(x, y - my, z - mz, r) for (x, y, z, r) in beads]
print("beads", len(layer1), len(loose), len(top))
L = np.array([-.48, -.62, .62]); L /= np.linalg.norm(L)       # key light, upper left, toward the viewer
Hh = L + np.array([0, 0, 1.]); Hh /= np.linalg.norm(Hh)
TEAL = np.array([25, 167, 167]) / 255.
TEAL_L = np.array([132, 226, 220]) / 255.
TEAL_D = np.array([11, 111, 111]) / 255.
WHITE = np.array([236, 252, 250]) / 255.

acc = np.zeros((S, S, 4), np.float32)          # premultiplied RGBA, composited back to front
F = 1400. * K                                      # focal length for the gentle perspective
for (x, y, z, r) in sorted(beads, key=lambda b: b[2]):   # far (negative z = away) first
    k = F / (F - z)                            # nearer beads look slightly larger
    rp = r * k
    cx, cy = S / 2 + x * k, S / 2 + y * k
    blur = 0.0 if abs(z) < 55 * K else K * min(8.0, ((abs(z) / K - 55) / 34.) ** 1.25)
    pad = int(rp + 4 * blur + 6)
    n = 2 * pad
    ys, xs = np.mgrid[0:n * SS, 0:n * SS].astype(np.float32) / SS - pad + .5 / SS
    nx, ny = xs / rp, ys / rp
    d2 = nx * nx + ny * ny
    inside = d2 < 1
    nz = np.sqrt(np.clip(1 - d2, 0, 1))
    ndl = nx * L[0] + ny * L[1] + nz * L[2]
    ndh = nx * Hh[0] + ny * Hh[1] + nz * Hh[2]
    fres = .04 + .96 * (1 - nz) ** 4.2
    thick = 2 * nz
    # milky hydrogel volume, lit from the key side and darker at the core
    scat = (1 - np.exp(-.55 * thick)) * (.28 + .30 * np.clip(ndl, 0, 1))
    # refracted caustic: transmitted light focuses on the far side (lower right), soft and teal
    cxo, cyo = -L[0] * .46, -L[1] * .46
    caus = np.exp(-(((nx - cxo) ** 2 + (ny - cyo) ** 2) / .085)) * .95
    caus2 = np.exp(-(((nx - cxo * 1.25) ** 2 + (ny - cyo * 1.25) ** 2) / .02)) * .45
    hx, hy = Hh[0] * .92, Hh[1] * .92
    spec = np.exp(-((nx - hx) ** 2 / .0045 + (ny - hy) ** 2 / .0022)) * 1.05 + np.clip(ndh, 0, 1) ** 26 * .12
    # contact occlusion from neighbouring beads (per pixel, from the true 3D neighbours)
    ao = np.zeros_like(nx)
    for (qx, qy, qz, qr) in beads:
        dx_, dy_, dz_ = qx - x, qy - y, qz - z
        if 0 < dx_*dx_ + dy_*dy_ + dz_*dz_ < (3.2 * r) ** 2:
            wx, wy, wz = dx_ - nx * r, dy_ - ny * r, dz_ - nz * r
            dist = np.sqrt(wx*wx + wy*wy + wz*wz) + 1e-3
            ct = np.clip((nx*wx + ny*wy + nz*wz) / dist, 0, 1)
            ao += ct * (qr / dist) ** 2
    aof = np.exp(-ao * .75)
    # secondary window reflection low on the bead (a soft studio card)
    spec2 = np.exp(-(((nx - .28) ** 2) / .03 + ((ny - .62) ** 2) / .006)) * .22 * (d2 < .97)
    rim = fres * .8 * (.5 + .4 * np.clip(-ny * .6 + .7, 0, 1))
    light = ((scat[..., None] * TEAL + caus[..., None] * TEAL_L + caus2[..., None] * WHITE) * aof[..., None]
             + rim[..., None] * (TEAL_L * .65 + .35 * WHITE) * (.35 + .65 * aof[..., None]) + (spec + spec2)[..., None] * WHITE * (.5 + .5 * aof[..., None]))
    # a faint dark refraction ring just inside the rim (what real transparent spheres show)
    ring = np.exp(-((np.sqrt(d2) - .86) ** 2) / .0035) * .5
    light *= (1 - ring[..., None] * .55)
    occ = np.clip(.42 + .42 * fres + .25 * ring, 0, 1)
    lum = light.max(-1)
    A = np.where(inside, np.clip(np.maximum(occ, lum), 0, 1), 0)
    C = np.where(inside[..., None], np.clip(light, 0, 1), 0)
    # antialiased edge
    edge = np.clip((1 - np.sqrt(d2)) * rp * SS * .9 + .5, 0, 1)
    A *= edge; C *= edge[..., None]
    patch = np.dstack([C, A]).astype(np.float32)
    im = Image.fromarray((np.clip(patch, 0, 1) * 255).astype(np.uint8), "RGBA").resize((n, n), Image.LANCZOS)
    arr = np.asarray(im).astype(np.float32) / 255
    if blur > 0:
        chans = [Image.fromarray((arr[..., i] * 255).astype(np.uint8), "L").filter(ImageFilter.GaussianBlur(float(blur))) for i in range(4)]
        arr = np.dstack([np.asarray(c).astype(np.float32) / 255 for c in chans])
    # beads out of focus are also quieter
    dim = 1 - min(.4, max(0, abs(z) / K - 45) / 500)
    # long eased fade toward the edge of the composition (no line, no box)
    dist = math.hypot(cx - S / 2, cy - S / 2) / (S / 2)
    fade = 1 - max(0, min(1, (dist - .62) / .36)) ** 1.6
    arr[..., :3] *= dim * fade; arr[..., 3] *= fade
    x0, y0 = int(round(cx)) - pad, int(round(cy)) - pad
    xa, ya, xb, yb = max(0, x0), max(0, y0), min(S, x0 + n), min(S, y0 + n)
    if xb <= xa or yb <= ya: continue
    src = arr[ya - y0:yb - y0, xa - x0:xb - x0]
    dst = acc[ya:yb, xa:xb]
    acc[ya:yb, xa:xb] = src + dst * (1 - src[..., 3:4])

# un-premultiply for the webp
A = acc[..., 3:4]
rgb = np.where(A > 1e-4, acc[..., :3] / np.maximum(A, 1e-4), 0)
out = np.dstack([np.clip(rgb, 0, 1), np.clip(A, 0, 1)])
img = Image.fromarray((out * 255).astype(np.uint8), "RGBA")
bb = img.getbbox(); print("bbox", bb)
img = img.crop(bb)
img.save(H / "hero.webp", "WEBP", quality=90, method=6)
print("hero.webp", img.size)
