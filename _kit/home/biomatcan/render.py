#!/usr/bin/env python3
"""BIOMATCAN hero (HOME_BRIEF update 2c: a crafted render of the real product). Porous biphasic calcium phosphate bone-graft
granules, the form BIOMATCAN's own site leads with (a porous white bioceramic granule; "controlled and highly interconnected
multi-scale porosity and a nanostructured surface", biomatcan.com/technology). One large granule with two smaller ones behind
it: interconnected macropores, a second scale of micropores, a fine mineral grain on the surface. Ceramic white with
shadows cooled toward the logo navy #04184a and a rim light in the logo blue #0677dd. Numpy sphere tracing of a jittered-grid
pore field. Saved with ALPHA (no ground of its own, DJ). Usage: python3 render.py W H out.png [SS] [procs]"""
import sys, numpy as np
from multiprocessing import Pool
from PIL import Image

W = int(sys.argv[1]) if len(sys.argv) > 1 else 600
H = int(sys.argv[2]) if len(sys.argv) > 2 else 600
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = float(sys.argv[4]) if len(sys.argv) > 4 else 1.0
NP = int(sys.argv[5]) if len(sys.argv) > 5 else 4
FW, FH = W, H; W, H = int(W * SS), int(H * SS)

def nrm(v): return v / np.linalg.norm(v, axis=-1, keepdims=True)

rng = np.random.default_rng(7)
PERM = rng.permutation(256); PERM = np.concatenate([PERM, PERM]); GV = rng.random(256) * 2 - 1
def vnoise(p):
    i = np.floor(p).astype(np.int64); f = p - i; u = f * f * (3 - 2 * f)
    def h(dx, dy, dz): return GV[PERM[(PERM[(PERM[(i[:, 0] + dx) & 255] + i[:, 1] + dy) & 255] + i[:, 2] + dz) & 255]]
    x00 = h(0,0,0)*(1-u[:,0]) + h(1,0,0)*u[:,0]; x10 = h(0,1,0)*(1-u[:,0]) + h(1,1,0)*u[:,0]
    x01 = h(0,0,1)*(1-u[:,0]) + h(1,0,1)*u[:,0]; x11 = h(0,1,1)*(1-u[:,0]) + h(1,1,1)*u[:,0]
    y0 = x00*(1-u[:,1]) + x10*u[:,1]; y1 = x01*(1-u[:,1]) + x11*u[:,1]
    return y0*(1-u[:,2]) + y1*u[:,2]
def fbm(p, o=3):
    s, a, f = 0.0, 0.5, 1.0
    for _ in range(o): s = s + a * vnoise(p * f); a *= .5; f *= 2.03
    return s
def hash3(ix, iy, iz, s):
    return ((np.sin(ix * 127.1 + iy * 311.7 + iz * 74.7 + s * 19.19) * 43758.5453) % 1.0 + 1.0) % 1.0

def pores(p, cell, rmin, rmax, jit, seed):
    """signed distance to a union of spheres, one per jittered grid cell (27-cell search)."""
    q = p / cell; g = np.floor(q).astype(np.int64); best = np.full(len(p), 1e9)
    for dx in (-1, 0, 1):
        for dy in (-1, 0, 1):
            for dz in (-1, 0, 1):
                ix, iy, iz = g[:, 0] + dx, g[:, 1] + dy, g[:, 2] + dz
                c = np.stack([ix + .5 + jit * (hash3(ix, iy, iz, seed) - .5), iy + .5 + jit * (hash3(ix, iy, iz, seed + 1) - .5),
                              iz + .5 + jit * (hash3(ix, iy, iz, seed + 2) - .5)], 1)
                r = (rmin + (rmax - rmin) * hash3(ix, iy, iz, seed + 3)) / cell
                d = np.linalg.norm(q - c, axis=1) - r
                best = np.minimum(best, d)
    return best * cell

def smax(a, b, k):
    h = np.clip(.5 - .5 * (b - a) / k, 0, 1); return a * h + b * (1 - h) + k * h * (1 - h)
def smin(a, b, k):
    h = np.clip(.5 + .5 * (b - a) / k, 0, 1); return b * (1 - h) + a * h - k * h * (1 - h)

# granules: centre, radius, ellipsoid scale, seed
GR = [(np.array([0.0, 0.0, 0.0]), 1.0, np.array([1.08, .94, 1.0]), 0),
      (np.array([-1.25, -0.95, -1.6]), .42, np.array([1.0, .9, 1.1]), 1),
      (np.array([1.15, 1.0, -1.9]), .34, np.array([1.1, 1.0, .9]), 2)]

def base(p):
    d = np.full(len(p), 1e9)
    for c, r, s, sd in GR:
        q = (p - c) / s
        n = fbm(q * 1.15 + sd * 13.1, 3)
        e = (np.linalg.norm(q, axis=1) - r * (1 + .2 * n)) * s.min()
        # a couple of flattened, fractured faces: the granules are crushed and sieved, not moulded spheres
        for k in range(2):
            v = nrm(np.array([np.sin(sd * 3 + k * 2.2), np.cos(sd * 5 + k * 1.3) * .7, np.sin(sd + k * 4.1)]))
            e = smax(e, (q @ v) - r * (.8 - .06 * k), .12 * r)
        d = np.minimum(d, e)
    return d

def sdf(p):
    b = base(p)
    m = pores(p, .2, .098, .138, .5, 1.0)           # macropores (interconnected: neighbours overlap)
    u = pores(p, .07, .014, .027, .7, 7.0)           # micropores
    d = smax(b, -m, .028)
    d = smax(d, -u, .008)
    return d * .8

def normal(p, e=.0025):
    o = np.array([[e, 0, 0], [0, e, 0], [0, 0, e]])
    n = np.stack([sdf(p + o[i]) - sdf(p - o[i]) for i in range(3)], 1)
    return nrm(n)

CAM = np.array([0.0, 0.25, 4.6]); TGT = np.array([0.05, -0.05, 0]); FOV = .31
fw = nrm(TGT - CAM); rt = nrm(np.cross(fw, [0, 1, 0])); up = np.cross(rt, fw)
KEY = nrm(np.array([-.75, .62, .4])); RIM = nrm(np.array([.85, .3, -.45])); FILL = nrm(np.array([.7, -.35, .6]))

def render_rows(rows):
    y0, y1 = rows
    ys, xs = np.mgrid[y0:y1, 0:W].astype(np.float64)
    u = (xs + .5) / W * 2 - 1; v = 1 - (ys + .5) / H * 2
    asp = W / H
    d = nrm(fw[None, :] + (u.reshape(-1, 1) * asp * FOV) * rt[None, :] + (v.reshape(-1, 1) * FOV) * up[None, :])
    n = len(d); o = np.repeat(CAM[None, :], n, 0)
    t = np.full(n, 2.6); hit = np.zeros(n, bool); alive = np.ones(n, bool)
    for it in range(170):
        idx = np.nonzero(alive)[0]
        if len(idx) == 0: break
        p = o[idx] + d[idx] * t[idx, None]
        s = sdf(p)
        h = s < .0009 * t[idx]
        hit[idx[h]] = True; alive[idx[h]] = False
        t[idx] += np.maximum(s, .0006)
        far = t[idx] > 7.2; alive[idx[far]] = False
    col = np.zeros((n, 3)); a = np.zeros(n)
    hi = np.nonzero(hit)[0]
    if len(hi):
        p = o[hi] + d[hi] * t[hi, None]; N = normal(p); V = -d[hi]
        # ambient occlusion: deep pore interiors go dark, which is what makes porosity read
        ao = np.ones(len(hi)); w = 1.0
        for k, dist in enumerate((.015, .04, .08, .13, .2, .3)):
            ao -= w * np.clip(dist - sdf(p + N * dist) / .8, 0, None) * 3.4; w *= .7
        ao = np.clip(ao, 0, 1) ** 1.35
        # soft shadow toward the key light
        sh = np.ones(len(hi)); ts = np.full(len(hi), .02)
        for k in range(26):
            hs = sdf(p + KEY * ts[:, None]) / .8
            sh = np.minimum(sh, np.clip(9 * hs / ts, 0, 1)); ts += np.clip(hs, .015, .12)
        sh = np.clip(sh, 0, 1)
        grain = 1 + .05 * vnoise(p * 140) + .03 * vnoise(p * 41)
        alb = np.array([.93, .925, .91]) * grain[:, None]
        wrap = lambda l, w_: np.clip((N @ l + w_) / (1 + w_), 0, 1)
        dk = wrap(KEY, .25) * (.25 + .75 * sh)
        df = wrap(FILL, .4)
        fr = (1 - np.clip((N * V).sum(1), 0, 1)) ** 3
        rim = np.clip(N @ RIM, 0, 1) ** 1.5 * (.4 + .6 * fr)
        hv = nrm(KEY[None, :] + V); spec = np.clip((N * hv).sum(1), 0, 1) ** 28 * .12 * sh
        sky = .5 + .5 * N[:, 1]
        c = alb * (dk[:, None] * np.array([1.0, .985, .96]) * 1.22
                   + df[:, None] * np.array([.38, .5, .7]) * .18
                   + (sky[:, None] * np.array([.62, .68, .78]) + (1 - sky[:, None]) * np.array([.16, .2, .3])) * .34 * ao[:, None])
        c = c * (.12 + .88 * ao[:, None])
        c += rim[:, None] * np.array([.06, .44, .9]) * .55 * ao[:, None]
        c += spec[:, None]
        # cool the deepest cavities toward the navy rather than black
        c = c * (1 - (1 - ao[:, None]) * .25) + (1 - ao[:, None]) * np.array([.016, .07, .2]) * .5
        # depth: the smaller granules sit back in the haze
        fade = np.clip((t[hi] - 4.1) / 1.6, 0, 1)
        c = c * (1 - .38 * fade[:, None]) + np.array([.04, .08, .16]) * .38 * fade[:, None]
        # depth below the granule's envelope: pore floors open onto further pores, so they fall into shadow
        dep = np.clip(-base(p), 0, None)
        dk2 = np.exp(-dep * 11.0)
        c = c * (.08 + .92 * dk2[:, None]) + (1 - dk2[:, None]) * np.array([.01, .035, .1]) * .6
        col[hi] = c; a[hi] = 1
    return y0, col.reshape(y1 - y0, W, 3), a.reshape(y1 - y0, W)

if __name__ == '__main__':
    step = 24; chunks = [(y, min(H, y + step)) for y in range(0, H, step)]
    img = np.zeros((H, W, 3)); al = np.zeros((H, W))
    with Pool(NP) as pool:
        for y0, c, a in pool.imap_unordered(render_rows, chunks):
            img[y0:y0 + len(c)] = c; al[y0:y0 + len(c)] = a
            print('.', end='', flush=True)
    c = np.clip(img, 0, 1) ** (1 / 2.2)
    rgba = np.dstack([c * 255, al * 255]).astype(np.uint8)
    im = Image.fromarray(rgba, 'RGBA')
    if SS != 1: im = im.resize((FW, FH), Image.LANCZOS)
    im.save(OUT); print('\nsaved', OUT, im.size)
