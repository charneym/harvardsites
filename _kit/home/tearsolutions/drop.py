#!/usr/bin/env python3
"""Hero render for TearSolutions: one clear drop of liquid (Lacripep is a topical eye drop), ray-marched as a
round-cone teardrop with Fresnel reflection and refraction (n=1.336) of a dark studio environment lit by a soft key
light, a cool rim and a faint warm kicker in the logo's rose. Writes hero.webp with real alpha (DP/DJ).
Usage: python3 drop.py [W H SS]"""
import sys, numpy as np
from PIL import Image
W, H, SS = (int(a) for a in (sys.argv[1:4] if len(sys.argv) > 3 else (900, 1240, 2)))
w, h = W * SS, H * SS
# camera
ys, xs = np.mgrid[0:h, 0:w].astype(np.float32)
u = (xs + .5) / w * 2 - 1; v = 1 - (ys + .5) / h * 2
asp = w / h
cam = np.array([0, .32, 7.4], np.float32)
fov = .27
d = np.stack([u * asp * fov, v * fov, -np.ones_like(u)], -1); d /= np.linalg.norm(d, axis=-1, keepdims=True)
o = np.broadcast_to(cam, d.shape).copy()
R1, R2, HH = 1.0, .05, 1.38  # bottom radius, tip radius, height (round cone = teardrop)
BY = -.5
def rcone(qx, qy, r1, r2, hh):
    b = (r1 - r2) / hh; a = np.sqrt(1 - b * b)
    k = -qx * b + qy * a
    d1 = np.sqrt(qx ** 2 + qy ** 2) - r1
    d2 = np.sqrt(qx ** 2 + (qy - hh) ** 2) - r2
    d3 = qx * a + qy * b - r1
    return np.where(k < 0, d1, np.where(k > a * hh, d2, d3))
def smin(a, b, k):
    h = np.clip(.5 + .5 * (b - a) / k, 0, 1)
    return b * (1 - h) + a * h - k * h * (1 - h)
def sdf(p):
    q = p - np.array([0, BY, 0], np.float32)
    qx = np.sqrt(q[..., 0] ** 2 + q[..., 2] ** 2); qy = q[..., 1]
    sph = np.sqrt(qx ** 2 + qy ** 2) - R1
    tip = rcone(qx, qy - .3, .34, R2, HH)
    return smin(sph, tip, .55)
def normal(p):
    e = 1e-3; ex = np.array([e, 0, 0], np.float32); ey = np.array([0, e, 0], np.float32); ez = np.array([0, 0, e], np.float32)
    n = np.stack([sdf(p + ex) - sdf(p - ex), sdf(p + ey) - sdf(p - ey), sdf(p + ez) - sdf(p - ez)], -1)
    return n / (np.linalg.norm(n, axis=-1, keepdims=True) + 1e-9)
def march(o, d, sign=1, n=140, mx=20):
    t = np.zeros(o.shape[:-1], np.float32); hit = np.zeros(o.shape[:-1], bool)
    for _ in range(n):
        p = o + d * t[..., None]; s = sign * sdf(p)
        hit |= s < 4e-4
        t = np.where(hit, t, t + np.maximum(s, 2e-4) * .9)
        if (t > mx).all(): break
    return t, hit & (t < mx)
INK = np.array([24, 32, 44], np.float32) / 255
def env(d):
    x, y, z = d[..., 0], d[..., 1], d[..., 2]
    c = np.broadcast_to(INK, d.shape).copy()
    # soft cool horizon band and a darker floor
    c += np.array([.10, .13, .17]) * np.exp(-(y / .22) ** 2)[..., None]
    c *= (1 - .35 * np.clip(-y, 0, 1))[..., None]
    # key softbox up-left-front: a big soft rectangle
    kx, ky = (x + .5) / .24, (y - .5) / .2
    key = np.exp(-(np.abs(kx) ** 5 + np.abs(ky) ** 5)) * (z > -.5)
    c += np.array([1.0, 1.02, 1.04])[None, None] * 22 * key[..., None]
    # cool rim from behind right
    rx, ry = (x - .75) / .28, (y - .1) / .55
    rim = np.exp(-(rx ** 2 + ry ** 2) * 1.2) * (z < .3)
    c += np.array([.62, .74, .84]) * 5 * rim[..., None]
    # faint warm kicker low left, the logo's rose
    wx, wy = (x + .7) / .35, (y + .45) / .25
    c += np.array([.84, .70, .62]) * .55 * np.exp(-(wx ** 2 + wy ** 2))[..., None]
    # overhead light that the drop focuses into its base
    c += np.array([.85, .92, 1.0]) * 1.2 * np.exp(-((x / .35) ** 2 + ((z + .1) / .35) ** 2)) [..., None] * (y > .55)[..., None]
    # a broad soft backlight behind the drop, so its body glows through (as in a photographed drop)
    c += np.array([.70, .80, .90]) * 1.5 * np.exp(-((x / .5) ** 2 + ((y - .42) / .12) ** 2))[..., None] * (z < -.3)[..., None]
    c += np.array([.20, .26, .33]) * .5 * np.exp(-((x / .7) ** 2 + ((y + .1) / .6) ** 2))[..., None] * (z < -.3)[..., None]
    return c
def refr(d, n, eta):
    ci = -(d * n).sum(-1, keepdims=True); k = 1 - eta * eta * (1 - ci * ci)
    t = eta * d + (eta * ci - np.sqrt(np.maximum(k, 0))) * n
    tir = (k < 0)
    return t / np.linalg.norm(t, axis=-1, keepdims=True), tir[..., 0]
def refl(d, n): return d - 2 * (d * n).sum(-1, keepdims=True) * n
t, hit = march(o, d)
p = o + d * t[..., None]; nrm = normal(p)
eta = 1 / 1.336
cosi = np.clip(-(d * nrm).sum(-1), 0, 1)
F = .02 + .98 * (1 - cosi) ** 5
rc = env(refl(d, nrm))
td, _ = refr(d, nrm, eta)
# through the drop to the far side
p2 = p + td * 4e-3
t2, h2 = march(p2, td, sign=-1, n=100, mx=6)
p3 = p2 + td * t2[..., None]; n3 = -normal(p3)
od, tir = refr(td, n3, 1.336)
od = np.where(tir[..., None], refl(td, n3), od)
L = t2
absorb = np.exp(-np.array([.10, .055, .035]) * L[..., None])  # a faint blue-grey cast in thick parts
tc = env(od) * absorb
# second internal bounce glow near the base
base = np.clip(-(nrm[..., 1]), 0, 1) ** 2.5
col = rc * F[..., None] + tc * (1 - F[..., None]) + np.array([.55, .65, .75]) * .22 * base[..., None]
# tone map
col = 1 - np.exp(-col * 1.25)
col = np.clip(col, 0, 1) ** (1 / 1.0)
a = hit.astype(np.float32)
rgba = np.concatenate([col * a[..., None], a[..., None]], -1)
img = rgba.reshape(H, SS, W, SS, 4).mean((1, 3))
al = img[..., 3:4]; rgb = np.where(al > 0, img[..., :3] / np.maximum(al, 1e-6), 0)
out = np.concatenate([rgb, al], -1)
Image.fromarray((np.clip(out, 0, 1) * 255 + .5).astype(np.uint8), 'RGBA').save('hero.webp', quality=92, method=6)
print('hero.webp', W, H)
