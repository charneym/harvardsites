#!/usr/bin/env python3
"""Parion hero (HOME_BRIEF update 2c / PRINCIPLES DQ: a render of the firm's own molecule). Idrevloride (P-1037), Parion's
inhaled ENaC blocker, as a glossy ball-and-stick model: atoms and bonds from PubChem CID 71502876 (embedded in 3D by
embed.py). Ray-traced in numpy (orthographic), 2x supersampled; key-light shadow map, screen-space ambient occlusion,
Blinn specular and a fresnel rim; a gentle depth-of-field. Atom colours graded to the Parion logo: oxygen in its coral,
nitrogen in its blue, the chlorine in its yellow, carbon in a cool graphite, hydrogen in pearl. Saved with ALPHA (DJ).
Usage: python3 render.py SIZE out.png"""
import sys, json, numpy as np
from PIL import Image, ImageFilter
N = int(sys.argv[1]) if len(sys.argv) > 1 else 1300
OUT = sys.argv[2] if len(sys.argv) > 2 else 'hero.png'
SS = 2; R = N * SS
M = json.load(open('mol3d.json'))
el = M['el']; X = np.array(M['xyz']); B = M['bonds']

def gaussian_filter(a, sig):
    """separable gaussian blur of a float array (numpy only), edge-padded"""
    r = int(3 * sig) + 1; x = np.arange(-r, r + 1); k = np.exp(-x * x / (2 * sig * sig)); k /= k.sum()
    a = np.pad(a, r, mode='edge')
    out = sum(k[i] * a[i:i + a.shape[0] - 2 * r, :] for i in range(2 * r + 1))
    out = sum(k[i] * out[:, i:i + out.shape[1] - 2 * r] for i in range(2 * r + 1))
    return out
def maximum_filter(a, s):
    r = s // 2; p = np.pad(a, r, mode='edge'); out = np.full_like(a, -np.inf)
    for dy in range(s):
        for dx in range(s): out = np.maximum(out, p[dy:dy + a.shape[0], dx:dx + a.shape[1]])
    return out
def nrm(v): return v / np.maximum(np.linalg.norm(v, axis=-1, keepdims=True), 1e-9)
# orient: principal axis along a diagonal rising to the upper right, a slight 3/4 turn for depth
C = np.cov(X.T); w, V = np.linalg.eigh(C); V = V[:, ::-1]
if np.linalg.det(V) < 0: V[:, 2] *= -1
Y = X @ V                      # long axis -> x, second -> y, thinnest -> z (depth)
def rot(ax, ay, az):
    cx, sx, cy, sy, cz, sz = np.cos(ax), np.sin(ax), np.cos(ay), np.sin(ay), np.cos(az), np.sin(az)
    Rx = np.array([[1, 0, 0], [0, cx, -sx], [0, sx, cx]]); Ry = np.array([[cy, 0, sy], [0, 1, 0], [-sy, 0, cy]])
    Rz = np.array([[cz, -sz, 0], [sz, cz, 0], [0, 0, 1]]); return Rz @ Ry @ Rx
A = float(sys.argv[3]) if len(sys.argv) > 3 else -40
RX = float(sys.argv[4]) if len(sys.argv) > 4 else 60; RY = float(sys.argv[5]) if len(sys.argv) > 5 else 160
Y = Y @ rot(np.deg2rad(RX), np.deg2rad(RY), np.deg2rad(A)).T
Y -= (Y.max(0) + Y.min(0)) / 2
RAD = {'C': .52, 'H': .32, 'O': .54, 'N': .54, 'Cl': .72}
COL = {'C': (0.42, 0.46, 0.54), 'H': (0.90, 0.92, 0.95), 'O': (0.86, 0.45, 0.40), 'N': (0.25, 0.53, 0.85), 'Cl': (0.93, 0.91, 0.25)}
rad = np.array([RAD[e] for e in el]); col = np.array([COL[e] for e in el])
ext = max(Y[:, 0].max() - Y[:, 0].min(), Y[:, 1].max() - Y[:, 1].min()) + 2.0
S = R / ext                    # pixels per angstrom
P = np.c_[Y[:, 0] * S + R / 2, -Y[:, 1] * S + R / 2, Y[:, 2] * S]   # screen x, y, depth (larger = nearer)
Z = np.full((R, R), -1e9); NX = np.zeros((R, R, 3)); CL = np.zeros((R, R, 3))
gy, gx = np.mgrid[0:R, 0:R].astype(np.float32) + .5
def put(x0, x1, y0, y1, z, n, c, m):
    sub = Z[y0:y1, x0:x1]; k = m & (z > sub)
    sub[k] = z[k]; NX[y0:y1, x0:x1][k] = n[k]; CL[y0:y1, x0:x1][k] = c[k] if c.ndim == 3 else c
for i in range(len(el)):
    r = rad[i] * S; cx, cy, cz = P[i]
    x0, x1, y0, y1 = int(max(cx - r - 2, 0)), int(min(cx + r + 2, R)), int(max(cy - r - 2, 0)), int(min(cy + r + 2, R))
    dx = gx[y0:y1, x0:x1] - cx; dy = gy[y0:y1, x0:x1] - cy; q = r * r - dx * dx - dy * dy; m = q > 0
    dz = np.sqrt(np.maximum(q, 0)); n = np.stack([dx, -dy, dz], -1) / r
    put(x0, x1, y0, y1, cz + dz, n, np.broadcast_to(col[i], n.shape), m)
BR = .16 * S
for a, b, o in B:
    # bonds: split at the midpoint and coloured by atom (classic ball-and-stick), double bonds as two thinner rods
    pa, pb = P[a], P[b]; d = pb - pa; Ld = np.linalg.norm(d); u = d / Ld
    perp = np.cross(u, [0, 0, 1.]); perp = perp / (np.linalg.norm(perp) + 1e-9)
    rods = [(0, BR)] if o == 1 else [(-.17 * S, BR * .72), (.17 * S, BR * .72)]
    for off, br in rods:
        A0 = pa + perp * off
        x0 = int(max(min(pa[0], pb[0]) - abs(off) - br - 2, 0)); x1 = int(min(max(pa[0], pb[0]) + abs(off) + br + 2, R))
        y0 = int(max(min(pa[1], pb[1]) - abs(off) - br - 2, 0)); y1 = int(min(max(pa[1], pb[1]) + abs(off) + br + 2, R))
        # ray: o=(x,y,+inf) dir (0,0,-1); infinite cylinder along u through A0 -> solve in 3D
        ox = gx[y0:y1, x0:x1] - A0[0]; oy = gy[y0:y1, x0:x1] - A0[1]
        # ray point (ox,oy,z) relative; dist to axis: |w - (w.u)u|, w=(ox,oy,z)
        ux, uy, uz = u
        # w_perp = w - (w.u)u ; |w_perp|^2 = br^2 -> quadratic in z
        # w.u = ox*ux+oy*uy+z*uz = c0 + z*uz
        c0 = ox * ux + oy * uy
        px = ox - c0 * ux; py = oy - c0 * uy; pz = -c0 * uz     # perpendicular part at z=0
        qx, qy, qz = -uz * ux, -uz * uy, 1 - uz * uz            # derivative wrt z
        aa = qx * qx + qy * qy + qz * qz; bb = 2 * (px * qx + py * qy + pz * qz); cc = px * px + py * py + pz * pz - br * br
        disc = bb * bb - 4 * aa * cc; m = disc > 0
        z = (-bb + np.sqrt(np.maximum(disc, 0))) / (2 * aa)       # nearer root (larger z)
        t = (c0 + z * uz) / Ld; m &= (t > 0) & (t < 1)
        n = np.stack([px + qx * z, py + qy * z, pz + qz * z], -1) / br; n[..., 1] *= -1
        c = np.where((t < .5)[..., None], col[a], col[b])
        put(x0, x1, y0, y1, z + A0[2], n, c, m)
hit = Z > -1e8
# shadow map from the key light (orthographic along L): project every hit point into light space
L = nrm(np.array([-.55, .62, .56]))
LZ = np.full((R, R), -1e9)
# light-space basis
lu = nrm(np.cross([0, 0, 1.], L)); lv = np.cross(L, lu)
hy, hx = np.nonzero(hit)
Pw = np.stack([hx + .5, -(hy + .5), Z[hy, hx]], -1)         # world-ish (y up)
# rasterise the occluders by splatting atoms into the light buffer (spheres suffice for soft shadows)
Pa = np.c_[P[:, 0], -P[:, 1], P[:, 2]]
au, av, ad = Pa @ lu, Pa @ lv, Pa @ L
LS = 1.0; off = np.array([au.min() - 3 * S, av.min() - 3 * S])
Wl = int((au.max() - au.min() + 6 * S)) + 1; Hl = int((av.max() - av.min() + 6 * S)) + 1
LB = np.full((Hl, Wl), -1e9); ly, lx = np.mgrid[0:Hl, 0:Wl].astype(np.float32)
for i in range(len(el)):
    r = rad[i] * S * 1.0; cu, cv = au[i] - off[0], av[i] - off[1]
    x0, x1, y0, y1 = int(max(cu - r, 0)), int(min(cu + r + 1, Wl)), int(max(cv - r, 0)), int(min(cv + r + 1, Hl))
    q = r * r - (lx[y0:y1, x0:x1] - cu) ** 2 - (ly[y0:y1, x0:x1] - cv) ** 2
    d = np.where(q > 0, ad[i] + np.sqrt(np.maximum(q, 0)), -1e9); LB[y0:y1, x0:x1] = np.maximum(LB[y0:y1, x0:x1], d)
LBi = maximum_filter(LB, 5)
pu = np.clip((Pw @ lu - off[0]).astype(int), 0, Wl - 1); pv = np.clip((Pw @ lv - off[1]).astype(int), 0, Hl - 1)
occ = LBi[pv, pu] - (Pw @ L)
sh = np.ones((R, R)); sh[hy, hx] = np.clip(1 - (occ - .08 * S) / (.5 * S), 0, 1)
sh = gaussian_filter(sh, 3 * SS)
# screen-space AO: pixels sitting below their surroundings are in crevices
Zf = np.where(hit, Z, Z[hit].min() - .6 * S).astype(np.float32)
blur = gaussian_filter(Zf, 14 * SS)
ao = np.clip(1 - np.maximum(blur - Zf, 0) / (1.1 * S), .35, 1)
# shading
Nn = nrm(NX); V = np.array([0, 0, 1.]); H = nrm(L + V)
ndl = np.clip((Nn * L).sum(-1), 0, 1); ndh = np.clip((Nn * H).sum(-1), 0, 1); ndv = np.clip(Nn[..., 2], 0, 1)
fill = np.clip((Nn * nrm(np.array([.7, -.3, .4]))).sum(-1), 0, 1)
fr = (1 - ndv) ** 3
dep = (Z - Z[hit].min()) / (Z[hit].max() - Z[hit].min() + 1e-9)    # 0 far .. 1 near
amb = .30 + .12 * np.clip(Nn[..., 1], 0, 1)
lit = CL * (amb[..., None] * ao[..., None] + 1.0 * (ndl * sh)[..., None] + .16 * fill[..., None] * np.array([.55, .7, 1.0]))
spec = (ndh ** 70) * sh * .9 + (ndh ** 12) * sh * .08
rim = (fr * (.35 + .25 * dep))[..., None] * np.array([.45, .66, .95])
img = lit + spec[..., None] + rim
img *= (.70 + .30 * dep)[..., None]                    # atmospheric depth: far atoms sink into the ink
img = np.clip(img, 0, 1)
a = hit.astype(np.float32)
rgba = np.dstack([img * a[..., None], a])
im = Image.fromarray((rgba * 255).astype(np.uint8), 'RGBA').resize((N, N), Image.LANCZOS)
# depth of field: the far half softens a little
arr = np.asarray(im).astype(np.float32)
bl = np.asarray(im.filter(ImageFilter.GaussianBlur(1.4))).astype(np.float32)
dd = np.asarray(Image.fromarray((np.where(hit, 1 - dep, 1) * 255).astype(np.uint8)).resize((N, N), Image.BILINEAR).filter(ImageFilter.GaussianBlur(3))) / 255.
k = np.clip((dd - .55) / .45, 0, .8)[..., None]
out = arr * (1 - k) + bl * k
# un-premultiply for PNG/WebP
al = out[..., 3:4] / 255.; rgb = np.where(al > 0, out[..., :3] / np.maximum(al, 1e-4), 0)
Image.fromarray(np.dstack([np.clip(rgb, 0, 255), out[..., 3]]).astype(np.uint8), 'RGBA').save(OUT)
print('wrote', OUT)
