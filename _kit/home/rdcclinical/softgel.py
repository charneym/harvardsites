#!/usr/bin/env python3
"""Ray-traced hero for RDC Clinical: one amber omega-3 softgel (the kind of product RDC trials: omega-3, fish oil,
EPA/DHA bioavailability studies). Analytic ellipsoid with the softgel seam, Fresnel reflection of a dark studio with
two soft boxes, refraction through the oil with Beer-Lambert amber absorption and a warm internal glow.
Output: RGBA PNG with real alpha (premultiplied against nothing: the page ink shows through at the edges).
Usage: python3 softgel.py out.png [W H SS]"""
import sys, numpy as np
from PIL import Image

out = sys.argv[1] if len(sys.argv) > 1 else 'softgel.png'
W = int(sys.argv[2]) if len(sys.argv) > 2 else 1400
H = int(sys.argv[3]) if len(sys.argv) > 3 else 1000
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 3

AX = np.array([1.0, 0.405, 0.405])          # softgel semi-axes (oblong)
def rot(ax, ang):
    ax = np.asarray(ax, float); ax /= np.linalg.norm(ax); c, s = np.cos(ang), np.sin(ang); x, y, z = ax
    return np.array([[c+x*x*(1-c), x*y*(1-c)-z*s, x*z*(1-c)+y*s], [y*x*(1-c)+z*s, c+y*y*(1-c), y*z*(1-c)-x*s], [z*x*(1-c)-y*s, z*y*(1-c)+x*s, c+z*z*(1-c)]])
# object orientation: long axis tilted up to the right, turned a little toward the viewer, rolled so the seam curves
R = rot([0, 0, 1], np.radians(28)) @ rot([0, 1, 0], np.radians(-24)) @ rot([1, 0, 0], np.radians(52))
Ri = R.T

def env(d):
    """Dark studio: a large warm soft box up-left, a long cool strip at right, faint warm floor bounce."""
    x, y, z = d[..., 0], d[..., 1], d[..., 2]
    base = np.stack([0.010 + 0*x, 0.012 + 0*x, 0.006 + 0*x], -1)
    # key soft box (up, left, slightly behind the camera)
    k = np.array([-0.55, 0.62, 0.56]); k /= np.linalg.norm(k)
    ck = np.clip((d @ k - 0.93) / 0.035, 0, 1); ck = ck * ck * (3 - 2 * ck)
    key = ck[..., None] * np.array([26.0, 24.5, 21.0])
    # strip light at the right, tall and thin
    sx = np.clip(1 - np.abs(x - 0.80) / 0.05, 0, 1) * np.clip(1 - np.abs(y - 0.05) / 0.62, 0, 1) * (z > -0.6)
    sx = sx * sx * (3 - 2 * sx)
    strip = sx[..., None] * np.array([7.0, 7.6, 5.6])
    # back light behind the object (seen through the oil): warm, wide
    b = np.array([0.12, 0.20, -1.0]); b /= np.linalg.norm(b)
    cb = np.clip((d @ b - 0.90) / 0.09, 0, 1); cb = cb * cb * (3 - 2 * cb)
    back = cb[..., None] * np.array([1.5, 0.95, 0.22])
    # faint warm floor
    fl = np.clip(-y - 0.25, 0, 1)[..., None] * np.array([0.05, 0.04, 0.02])
    return base + key + strip + back + fl

def hit(o, d, far=False):
    """ray / ellipsoid (object space), returns t (nan if miss)."""
    oo, dd = o / AX, d / AX
    a = (dd * dd).sum(-1); b = 2 * (oo * dd).sum(-1); c = (oo * oo).sum(-1) - 1
    disc = b * b - 4 * a * c
    sq = np.sqrt(np.maximum(disc, 0))
    t = ((-b + sq) if far else (-b - sq)) / (2 * a)
    t[disc < 0] = np.nan
    return t

def normal(p):
    n = p / (AX * AX); return n / np.linalg.norm(n, axis=-1, keepdims=True)

def refract(d, n, eta):
    cosi = -(d * n).sum(-1, keepdims=True)
    k = 1 - eta * eta * (1 - cosi * cosi)
    t = eta * d + (eta * cosi - np.sqrt(np.maximum(k, 0))) * n
    return t / np.linalg.norm(t, axis=-1, keepdims=True), (k[..., 0] < 0)

def fres(cosi, n1, n2):
    r0 = ((n1 - n2) / (n1 + n2)) ** 2
    return r0 + (1 - r0) * (1 - np.clip(cosi, 0, 1)) ** 5

def render():
    w, h = W * SS, H * SS
    ys, xs = np.mgrid[0:h, 0:w]
    asp = w / h
    fov = float(__import__("os").environ.get("FOV", "0.23"))
    u = ((xs + 0.5) / w * 2 - 1) * fov * asp
    v = (1 - (ys + 0.5) / h * 2) * fov
    cam = np.array([0, 0, 7.2])
    dW = np.stack([u, v, -np.ones_like(u)], -1); dW /= np.linalg.norm(dW, axis=-1, keepdims=True)
    oW = np.broadcast_to(cam, dW.shape)
    o = oW @ R; d = dW @ R                    # world -> object: x_obj = R^T x  (row vectors: x @ R)
    t = hit(o, d)
    m = ~np.isnan(t)
    col = np.zeros((h, w, 3)); alpha = m.astype(float)
    O, D, T = o[m], d[m], t[m]
    P = O + D * T[:, None]
    N = normal(P)
    NW = N @ Ri; DW = D @ Ri
    cosi = -(DW * NW).sum(-1)
    IOR = 1.47                                 # gelatin + oil
    F = fres(cosi, 1.0, IOR)
    rd = DW + 2 * cosi[:, None] * NW
    refl = env(rd)
    # into the oil
    td, _ = refract(D, N, 1 / IOR)
    t2 = hit(P + td * 1e-4, td, far=True)
    t2 = np.nan_to_num(t2, nan=0.0)
    P2 = P + td * t2[:, None]
    N2 = -normal(P2)
    td2, tir = refract(td, N2, IOR)
    td2W = td2 @ Ri
    trans = env(td2W)
    # TIR: bounce once more inside, then leave toward the back light
    trans[tir] = env((td @ Ri)[tir]) * 0.25
    L = t2                                    # path length inside, object units (max ~0.8)
    sig = np.array([1.3, 4.0, 13.0])         # amber oil absorption per unit
    att = np.exp(-L[:, None] * sig)
    # warm internal glow: light scattered in the oil, brighter where the path is long and toward the lit side
    lw = np.array([-0.45, 0.55, 0.7]); lw /= np.linalg.norm(lw)
    side = np.clip(0.55 + 0.45 * (NW @ lw), 0, 1)
    glow = (1 - np.exp(-L * 1.6))[:, None] ** 1.5 * np.array([1.25, 0.56, 0.06]) * (0.08 + 1.05 * side[:, None] ** 1.8)
    # caustic: a soft bright pool on the shadow side, where the key light is focused through the oil
    pc = np.array([0.55, -0.45, 0.25]) ; pc /= np.linalg.norm(pc)
    cz = np.clip((NW @ pc - 0.5) / 0.45, 0, 1) ** 2.5
    caus = cz[:, None] * np.array([1.3, 0.72, 0.12]) * (1 - np.exp(-L * 3))[:, None]
    body = trans * att + glow + caus
    c = F[:, None] * refl + (1 - F[:, None]) * body
    # the seam: a fine ridge where the two halves of the shell were sealed (plane z=0 in object space)
    sd = np.abs(P[:, 2]) / 0.012
    seam = np.exp(-sd * sd)
    c = c * (1 - 0.22 * seam[:, None]) + seam[:, None] * 0.10 * refl
    # a gentle darkening at grazing rims gives the shell thickness
    rim = np.clip(1 - cosi, 0, 1) ** 3
    c = c * (1 - 0.45 * rim[:, None])
    col[m] = c
    # tone map (filmic-ish), gamma
    col = 1 - np.exp(-col * 1.2)
    col = np.clip(col, 0, 1) ** (1 / 2.2)
    # downsample (box) for antialiasing; colour premultiplied by coverage then un-premultiplied
    pm = col * alpha[..., None]
    pm = pm.reshape(H, SS, W, SS, 3).mean((1, 3)); a = alpha.reshape(H, SS, W, SS).mean((1, 3))
    rgb = np.where(a[..., None] > 0, pm / np.maximum(a[..., None], 1e-6), 0)
    img = np.dstack([rgb, a])
    Image.fromarray((np.clip(img, 0, 1) * 255 + .5).astype(np.uint8), 'RGBA').save(out)
    ys2, xs2 = np.nonzero(a > 0.01)
    print('saved', out, W, H, 'bbox', xs2.min(), ys2.min(), xs2.max(), ys2.max())

render()
