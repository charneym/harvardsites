#!/usr/bin/env python3
"""Hero render for Stellular Bio (HOME_BRIEF 2c, a crafted render of the product): one clear glass vial of an
off-the-shelf biologic, the straw-gold of platelet lysate, closed with a flip-off cap in the logo gold (#F3A000).
Ray-marched in numpy: revolved glass shell (n=1.5) with Fresnel reflection of a dark studio (two tall strip
softboxes and a soft top light), refraction into the liquid (n=1.34) with amber absorption and in-scatter, and a
satin cap. Output is premultiplied over black with alpha = 1 - transmittance, so the page ink shows through the
clear glass exactly as it would through real glass (no box, no ground colour mismatch: DP/DJ).
Usage: python3 vial.py [W H SS]"""
import sys, numpy as np
from PIL import Image
W, H, SS = (int(a) for a in (sys.argv[1:4] if len(sys.argv) > 3 else (760, 1180, 2)))
w, h = W * SS, H * SS
f32 = np.float32
ys, xs = np.mgrid[0:h, 0:w].astype(f32)
u = (xs + .5) / w * 2 - 1; v = 1 - (ys + .5) / h * 2
asp = w / h
cam = np.array([0, 1.15, 11.5], f32); tgt = np.array([0, .42, 0], f32)
fw = tgt - cam; fw /= np.linalg.norm(fw); rt = np.cross(fw, [0, 1, 0]); rt /= np.linalg.norm(rt); up = np.cross(rt, fw)
fov = .262
d = fw[None, None] + (u * asp * fov)[..., None] * rt[None, None] + (v * fov)[..., None] * up[None, None]
d = (d / np.linalg.norm(d, axis=-1, keepdims=True)).astype(f32)
o = np.broadcast_to(cam, d.shape).copy()

def rbox(r, y, hx, y0, y1, rr):
    cy = (y0 + y1) / 2; hy = (y1 - y0) / 2
    qx = np.abs(r) - hx + rr; qy = np.abs(y - cy) - hy + rr
    return np.sqrt(np.maximum(qx, 0) ** 2 + np.maximum(qy, 0) ** 2) + np.minimum(np.maximum(qx, qy), 0) - rr
def smin(a, b, k):
    hh = np.clip(.5 + .5 * (b - a) / k, 0, 1)
    return b * (1 - hh) + a * hh - k * hh * (1 - hh)
R, YB, YT = 1.0, -1.55, 1.05      # body radius, bottom, top of the straight wall
NR, NT = .56, 1.98                # neck radius, top of the neck under the cap
TH = .055                         # glass wall
LEVEL = .55                       # liquid level
def rad(p): return np.sqrt(p[..., 0] ** 2 + p[..., 2] ** 2)
def outer(p):
    r, y = rad(p), p[..., 1]
    body = rbox(r, y, R, YB, YT, .16)
    neck = rbox(r, y, NR, 0., NT, .04)
    lip = rbox(r, y, NR + .09, NT - .22, NT, .05)
    return np.minimum(smin(body, neck, .42), lip)
def glass(p):
    s = outer(p); return np.abs(s + TH * .5) - TH * .5
def liquid(p):
    return np.maximum(outer(p) + TH, p[..., 1] - LEVEL)
def cap(p):
    r, y = rad(p), p[..., 1]
    crimp = rbox(r, y, NR + .13, NT - .26, NT + .2, .035)
    top = rbox(r, y, NR + .1, NT + .2, NT + .52, .07)
    return np.minimum(crimp, top)

def normal(fn, p):
    e = 6e-4; n = np.zeros_like(p)
    for i in range(3):
        dd = np.zeros(3, f32); dd[i] = e
        n[..., i] = fn(p + dd) - fn(p - dd)
    return n / (np.linalg.norm(n, axis=-1, keepdims=True) + 1e-9)
def march(fn, o, d, sign=1, n=160, mx=30., eps=3e-4):
    t = np.zeros(o.shape[:-1], f32); hit = np.zeros(o.shape[:-1], bool); act = np.ones(o.shape[:-1], bool)
    for _ in range(n):
        idx = np.nonzero(act)
        if not idx[0].size: break
        p = o[idx] + d[idx] * t[idx][..., None]; s = sign * fn(p)
        hh = s < eps; hit[idx] |= hh
        t[idx] = np.where(hh, t[idx], t[idx] + np.maximum(s, eps * .6) * .92)
        act[idx] = ~hh & (t[idx] < mx)
    return t, hit & (t < mx)
def refr(d, n, eta):
    ci = -(d * n).sum(-1, keepdims=True); k = 1 - eta * eta * (1 - ci * ci)
    tt = eta * d + (eta * ci - np.sqrt(np.maximum(k, 0))) * n
    return tt / (np.linalg.norm(tt, axis=-1, keepdims=True) + 1e-9), (k < 0)[..., 0]
def refl(d, n): return d - 2 * (d * n).sum(-1, keepdims=True) * n
def fres(d, n, f0):
    c = np.clip(np.abs((d * n).sum(-1)), 0, 1); return f0 + (1 - f0) * (1 - c) ** 5

def lights(dv):
    """studio lights only (the dark ground is the page ink, added by alpha compositing)"""
    x, y, z = dv[..., 0], dv[..., 1], dv[..., 2]
    c = np.zeros(dv.shape, f32)
    def strip(cx, cz, wx, y0, y1, k, col):
        a = np.arctan2(x, z)  # azimuth, 0 = towards the camera
        g = np.exp(-((a - cx) / wx) ** 6) * np.clip((y - y0) * 8, 0, 1) * np.clip((y1 - y) * 8, 0, 1)
        return g[..., None] * np.array(col, f32) * k
    c += strip(-.95, 0, .16, -.55, .62, 7.0, [1.0, .985, .955])     # key strip, front left
    c += strip(1.25, 0, .10, -.45, .55, 3.2, [.92, .95, 1.0])      # fill strip, right
    c += strip(2.6, 0, .22, -.3, .4, .9, [1.0, .80, .45])          # warm kicker from behind right (gold)
    c += (np.exp(-((x / .45) ** 2 + ((z - .1) / .45) ** 2)) * (y > .75))[..., None] * np.array([1, .98, .95], f32) * 1.4  # top light
    c += (np.exp(-((y + .02) / .05) ** 2) * .10)[..., None] * np.array([.9, .9, 1], f32)  # faint horizon line in the studio
    return c

Np = h * w
D = d.reshape(-1, 3); O = o.reshape(-1, 3)
col = np.zeros((Np, 3), f32); T = np.zeros(Np, f32)   # premultiplied colour and scalar transmittance of the page ink
def scene(p): return np.minimum(outer(p), cap(p))
t, hit = march(scene, O, D)
P = O + D * t[:, None]
isc = hit & (cap(P) <= outer(P) + 1e-3)
isg = hit & ~isc
T[~hit] = 1
# ---- cap: satin anodised gold with a soft specular
if isc.any():
    p = P[isc]; n = normal(cap, p); dd = D[isc]
    base = np.array([1.0, .62, .02], f32)
    key = np.clip((n * np.array([-.62, .45, .64], f32)).sum(-1), 0, 1)
    top = np.clip(n[:, 1], 0, 1)
    amb = .10 + .06 * np.clip(-n[:, 2], 0, 1)
    rr = refl(dd, n); F = fres(dd, n, .25)
    spec = lights(rr) * .55
    cc = base * (.22 + amb + 1.0 * key + .4 * top)[:, None] * (1 - F[:, None]) + spec * F[:, None] + spec * .12
    # fine knurled ridges on the crimp
    r = rad(p); y = p[:, 1]
    rid = (y < NT + .2) & (y > NT - .26)
    cc = np.where(rid[:, None], cc * (.86 + .14 * np.cos(np.arctan2(p[:, 0], p[:, 2]) * 90)[:, None]), cc)
    col[isc] = cc
# ---- glass
if isg.any():
    p = P[isg]; dd = D[isg]; n = normal(outer, p)
    F = fres(dd, n, .04)
    cr = lights(refl(dd, n)) * F[:, None]
    # into the wall (n 1.5), through the shell, out to the inside
    d1, _ = refr(dd, n, 1 / 1.5)
    t1, h1 = march(glass, p + d1 * 2e-3, d1, sign=-1, n=60, mx=1.2, eps=2e-4)
    p1 = p + d1 * (t1 + 2e-3)[:, None]
    wall = np.clip(t1, 0, 1.2)
    n1 = -normal(glass, p1)
    d2, tir = refr(d1, n1, 1.5)
    d2 = np.where(tir[:, None], refl(d1, n1), d2)
    tw = np.exp(-wall[:, None] * np.array([1.6, .9, 1.2], f32) * .9)   # faint green-grey of thick glass at the edges
    # inside: into the liquid or across the air
    inner = outer(p1) > -TH * .5
    t2, h2 = march(liquid, p1 + d2 * 3e-3, d2, n=90, mx=2.4)
    acc = np.zeros_like(cr); Tm = np.ones(len(p), f32)
    hl = h2 & ~inner
    # ---- the liquid
    if hl.any():
        q = p1[hl] + d2[hl] * (t2[hl] + 3e-3)[:, None]; nq = normal(liquid, q); dq = d2[hl]
        Fl = fres(dq, nq, .02)
        refl_l = lights(refl(dq, nq)) * Fl[:, None] * .7
        d3, _ = refr(dq, nq, 1 / 1.34)
        t3, h3 = march(liquid, q + d3 * 3e-3, d3, sign=-1, n=90, mx=2.4)
        L = np.clip(t3, 0, 2.4)
        q2 = q + d3 * (t3 + 3e-3)[:, None]; n2 = -normal(liquid, q2)
        d4, tir2 = refr(d3, n2, 1.34)
        d4 = np.where(tir2[:, None], refl(d3, n2), d4)
        ab = np.exp(-L[:, None] * np.array([.10, .42, 1.9], f32))
        # lit body of the liquid: the gold glows where it is thick, brighter towards the key side and the surface
        glow = (1 - np.exp(-L * 1.1))[:, None] * np.array([1.0, .60, .10], f32)
        side = np.clip(.62 - .32 * q[:, 0] + .2 * (q[:, 1] - LEVEL + 1.4) / 1.4, .34, 1.05)
        through = lights(d4) * ab * 1.6
        acc[hl] = refl_l + (glow * (.9 * side)[:, None] + through) * (1 - Fl[:, None])
        Tm[hl] = ab.mean(-1) * .28 * (1 - Fl)
    # ---- clear air: through the far wall (a faint second reflection) to the page ink
    ha = ~hl
    if ha.any():
        q = p1[ha] + d2[ha] * 3e-3
        t4, h4 = march(outer, q, d2[ha], sign=-1, n=70, mx=2.6)
        q4 = q + d2[ha] * t4[:, None]; n4 = -normal(outer, q4)
        F4 = fres(d2[ha], n4, .04)
        acc[ha] = lights(refl(d2[ha], -n4)) * F4[:, None] * .6 + lights(d2[ha]) * (1 - F4[:, None]) * .6
        Tm[ha] = (1 - F4) * .9
    col[isg] = cr + acc * (1 - F)[:, None] * tw
    T[isg] = Tm * (1 - F) * tw.mean(-1)
col = 1 - np.exp(-col * 1.3)
a = 1 - np.clip(T, 0, 1)
out = np.concatenate([col.reshape(h, w, 3), a.reshape(h, w, 1)], -1)
img = out.reshape(H, SS, W, SS, 4).mean((1, 3))
al = img[..., 3:4]; rgb = np.where(al > 1e-4, img[..., :3] / np.maximum(al, 1e-4), 0)
# where the premultiplied colour exceeds alpha (bright highlights on clear glass) raise alpha so nothing clips
need = np.max(img[..., :3], -1, keepdims=True)
al2 = np.maximum(al, need); rgb = np.where(al2 > 1e-4, img[..., :3] / np.maximum(al2, 1e-4), 0)
res = np.concatenate([np.clip(rgb, 0, 1), np.clip(al2, 0, 1)], -1)
Image.fromarray((res * 255 + .5).astype(np.uint8), 'RGBA').save('hero.webp', quality=92, method=6)
Image.fromarray((res * 255 + .5).astype(np.uint8), 'RGBA').save('/tmp/claude-0/-home-user-harvardsites/0d1cf1d8-7ee5-5e63-ab0c-10a760df9e33/scratchpad/hero.png')
print('hero.webp', W, H)
