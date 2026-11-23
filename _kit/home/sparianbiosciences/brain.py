#!/usr/bin/env python3
"""Hero render for Sparian Biosciences: the human cerebrum (both hemispheres, FreeSurfer fsaverage pial surface,
fetched with nilearn.datasets.fetch_surf_fsaverage('fsaverage')), seen from the front-left and slightly above,
shaded as a calm satin object in Sparian's logo blues. Pure numpy z-buffer rasteriser with smooth vertex normals,
sulcal depth (sulc) as ambient occlusion, soft key/fill/rim light, real alpha.
usage: python3 brain.py <fsaverage dir> <out.png> [width]"""
import sys, numpy as np, nibabel as nib
from PIL import Image

D = sys.argv[1]; OUT = sys.argv[2]; W = int(sys.argv[3]) if len(sys.argv) > 3 else 1500
YAW = float(__import__('os').environ.get('YAW', '-32')); PIT = float(__import__('os').environ.get('PIT', '14'))
SS = 2

def load(h):
    g = nib.load(f'{D}/pial_{h}.gii.gz'); v = g.darrays[0].data.astype(np.float64); f = g.darrays[1].data.astype(np.int64)
    s = nib.load(f'{D}/sulc_{h}.gii.gz').darrays[0].data.astype(np.float64)
    c = nib.load(f'{D}/curv_{h}.gii.gz').darrays[0].data.astype(np.float64)
    return v, f, s, c

parts = [load('left'), load('right')]
V = np.concatenate([p[0] for p in parts]); off = len(parts[0][0])
F = np.concatenate([parts[0][1], parts[1][1] + off]); S = np.concatenate([p[2] for p in parts]); C = np.concatenate([p[3] for p in parts])
V -= (V.max(0) + V.min(0)) / 2

def vnormals(V, F):
    n = np.cross(V[F[:, 1]] - V[F[:, 0]], V[F[:, 2]] - V[F[:, 0]]); N = np.zeros_like(V)
    for k in range(3): np.add.at(N, F[:, k], n)
    # two passes of neighbour smoothing for a satin, not faceted, surface
    for _ in range(2):
        M = np.zeros_like(N)
        for k in range(3):
            for j in range(3): np.add.at(M, F[:, k], N[F[:, j]])
        N = M
    return N / np.linalg.norm(N, axis=1, keepdims=True)
N = vnormals(V, F)
# smooth sulc a little (it is the AO / tone driver)
for _ in range(2):
    acc = np.zeros(len(V)); cnt = np.zeros(len(V))
    for k in range(3):
        for j in range(3): np.add.at(acc, F[:, k], S[F[:, j]]); np.add.at(cnt, F[:, k], 1)
    S = acc / cnt

# camera: RAS coords (x right, y anterior, z up). Screen x = right, y = down, view direction = +depth.
a, b = np.radians(YAW), np.radians(PIT)
# start looking at the left lateral surface (camera at -x), yaw toward the front, pitch from above
Rz = np.array([[np.cos(a), -np.sin(a), 0], [np.sin(a), np.cos(a), 0], [0, 0, 1]])
P = V @ Rz.T; NN = N @ Rz.T
# view basis for camera on -x: screen-right = -y (anterior to the left? we want front on the left) -> use +y? choose front on right
sx = -P[:, 1]; sy = -P[:, 2]; dz = P[:, 0]
nsx = -NN[:, 1]; nsy = -NN[:, 2]; ndz = NN[:, 0]
# pitch about screen x
cb, sb = np.cos(b), np.sin(b)
sy, dz = sy * cb - dz * sb, sy * sb + dz * cb
nsy, ndz = nsy * cb - ndz * sb, nsy * sb + ndz * cb
# flip so anterior faces left? keep: anterior (+y) maps to screen -x (left). Mirror to put the frontal lobe at the right.
sx = -sx; nsx = -nsx

span = max(sx.max() - sx.min(), sy.max() - sy.min()); pad = .03
Wp = W * SS; sc = Wp * (1 - 2 * pad) / (sx.max() - sx.min())
Hp = int(np.ceil((sy.max() - sy.min()) * sc + 2 * pad * Wp))
X = (sx - sx.min()) * sc + pad * Wp; Y = (sy - sy.min()) * sc + pad * Wp; Z = dz
print('raster', Wp, Hp)

x0, x1, x2 = X[F[:, 0]], X[F[:, 1]], X[F[:, 2]]; y0, y1, y2 = Y[F[:, 0]], Y[F[:, 1]], Y[F[:, 2]]
den = (y1 - y2) * (x0 - x2) + (x2 - x1) * (y0 - y2)
keep = np.abs(den) > 1e-9
mnx = np.floor(np.minimum(np.minimum(x0, x1), x2)).astype(int); mny = np.floor(np.minimum(np.minimum(y0, y1), y2)).astype(int)
bw = (np.ceil(np.maximum(np.maximum(x0, x1), x2)) - mnx).astype(int) + 1; bh = (np.ceil(np.maximum(np.maximum(y0, y1), y2)) - mny).astype(int) + 1
MB = int(max(bw.max(), bh.max())); print('max bbox', MB)
zb = np.full(Wp * Hp, np.inf); tb = np.full(Wp * Hp, -1, np.int64); b0 = np.zeros(Wp * Hp); b1 = np.zeros(Wp * Hp)
ti = np.nonzero(keep)[0]
for oy in range(MB):
    ty = ti[oy < bh[ti]]
    for ox in range(MB):
        m = ty[ox < bw[ty]]
        if not len(m): continue
        px = mnx[m] + ox + .5; py = mny[m] + oy + .5
        l0 = ((y1[m] - y2[m]) * (px - x2[m]) + (x2[m] - x1[m]) * (py - y2[m])) / den[m]
        l1 = ((y2[m] - y0[m]) * (px - x2[m]) + (x0[m] - x2[m]) * (py - y2[m])) / den[m]
        l2 = 1 - l0 - l1
        ins = (l0 >= -2e-3) & (l1 >= -2e-3) & (l2 >= -2e-3) & (px >= 0) & (py >= 0) & (px < Wp) & (py < Hp)
        m, l0, l1, l2, px, py = m[ins], l0[ins], l1[ins], l2[ins], px[ins], py[ins]
        z = l0 * Z[F[m, 0]] + l1 * Z[F[m, 1]] + l2 * Z[F[m, 2]]
        idx = py.astype(np.int64) * Wp + px.astype(np.int64)
        o = np.lexsort((z, idx)); idx, z, m, l0, l1 = idx[o], z[o], m[o], l0[o], l1[o]
        first = np.ones(len(idx), bool); first[1:] = idx[1:] != idx[:-1]
        idx, z, m, l0, l1 = idx[first], z[first], m[first], l0[first], l1[first]
        w = z < zb[idx]; idx, z, m, l0, l1 = idx[w], z[w], m[w], l0[w], l1[w]
        zb[idx] = z; tb[idx] = m; b0[idx] = l0; b1[idx] = l1

cov = tb >= 0; t = tb[cov]; l0 = b0[cov]; l1 = b1[cov]; l2 = 1 - l0 - l1
def interp(A): return l0[:, None] * A[F[t, 0]] + l1[:, None] * A[F[t, 1]] + l2[:, None] * A[F[t, 2]]
NS = np.stack([nsx, nsy, ndz], 1); n = interp(NS); n /= np.linalg.norm(n, axis=1, keepdims=True)
s = interp(S[:, None])[:, 0]; cu = interp(C[:, None])[:, 0]
# camera looks along +depth: view vector toward camera is (0,0,-1); flip back-facing normals
n[n[:, 2] > 0] *= -1
Vc = np.array([0, 0, -1.])
def L(v): v = np.array(v, float); return v / np.linalg.norm(v)
key = L([-.55, -.75, -.6]); fill = L([.7, -.1, -.5]); low = L([.1, .9, -.3])
dk = np.clip(n @ key, 0, 1); df = np.clip(n @ fill, 0, 1); dl = np.clip(n @ low, 0, 1)
hk = L(key + Vc); spec = .6 * np.clip(n @ hk, 0, 1) ** 60 + .4 * np.clip(n @ hk, 0, 1) ** 12
fres = (1 - np.clip(n @ Vc, 0, 1)) ** 2.6
# sulcal depth: gyral crowns (sulc < 0) light, sulci (sulc > 0) shadowed
print('sulc pct', np.percentile(s,[5,25,50,75,95]))
sd = np.clip((s - np.percentile(s,8)) / (np.percentile(s,94) - np.percentile(s,8)), 0, 1); ao = 1 - .7 * sd ** 1.2
cv = np.clip(-cu * 2.2, -1, 1)  # crowns positive
lum = (.06 + .82 * dk ** 1.15 + .16 * df + .05 * dl) * ao * (1 + .1 * cv)
# brand ramp: navy #052e65 -> blue #2d83f4 -> pale #b9d6fb -> ice
R = np.array([[5, 16, 34], [12, 36, 74], [38, 84, 150], [96, 140, 202], [178, 204, 236], [236, 243, 252]], float) / 255
pos = np.array([0, .16, .38, .6, .82, 1.0])
q = np.clip(lum * 1.12, 0, 1) ** 1.2
col = np.stack([np.interp(q, pos, R[:, k]) for k in range(3)], 1)
col += spec[:, None] * np.array([.78, .86, .96]) * .42 * ao[:, None]
col += fres[:, None] * np.array([.32, .56, .96]) * .5 * (.35 + .65 * ao[:, None])
col = np.clip(col, 0, 1)
img = np.zeros((Wp * Hp, 4)); img[cov, :3] = col; img[cov, 3] = 1
img = img.reshape(Hp, Wp, 4)
# premultiplied downsample for clean alpha edges
pm = img.copy(); pm[..., :3] *= pm[..., 3:4]
h2, w2 = Hp // SS, Wp // SS
pm = pm[:h2 * SS, :w2 * SS].reshape(h2, SS, w2, SS, 4).mean((1, 3))
a = pm[..., 3:4]; rgb = np.where(a > 0, pm[..., :3] / np.maximum(a, 1e-6), 0)
out = np.concatenate([rgb, a], 2)
Image.fromarray((out * 255 + .5).astype(np.uint8), 'RGBA').save(OUT)
print('wrote', OUT, w2, h2)
