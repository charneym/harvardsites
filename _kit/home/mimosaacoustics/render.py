#!/usr/bin/env python3
"""Mimosa Acoustics hero: a crafted render of the human bony labyrinth, the inner ear their OtoStat and HearID
systems assess (otoacoustic emissions come from the cochlea; MEPA wideband immittance reads the middle ear that
drives it). Cochlea of ~2.6 turns, vestibule, and the three semicircular canals with ampullae and the common crus,
modelled as swept tubes. Offline numpy renderer: sphere z-buffer at 2x, bone micro-texture in the normals and
albedo, wrap diffuse with a warm translucency term, Blinn specular, screen-space AO, depth fog to the page ink,
true alpha. Usage: python3 render.py out.png [yaw pitch roll]"""
import sys, numpy as np
from PIL import Image
from scipy.ndimage import gaussian_filter, map_coordinates
rng = np.random.default_rng(7)
out = sys.argv[1]
yaw, pitch, roll = [float(a) for a in (sys.argv[2:5] if len(sys.argv) > 4 else (-10, 25, 0))]
S = []   # (centre xyz, radius)
def tube(pts, r):
    pts = np.asarray(pts, float); r = np.broadcast_to(np.asarray(r, float), (len(pts),))
    # resample so neighbouring spheres overlap tightly (spacing 0.12 r)
    seg = np.linalg.norm(np.diff(pts, axis=0), axis=1); s = np.r_[0, np.cumsum(seg)]
    out_p = []; out_r = []; t = 0.0
    while t <= s[-1]:
        i = min(np.searchsorted(s, t, 'right') - 1, len(seg) - 1); f = (t - s[i]) / max(seg[i], 1e-9)
        rr = r[i] * (1 - f) + r[i + 1] * f
        out_p.append(pts[i] * (1 - f) + pts[i + 1] * f); out_r.append(rr); t += 0.05 * rr
    S.extend(zip(out_p, out_r))
def ell(c, ax, n=1600):
    # a filled ellipsoid as a cloud of spheres (vestibule)
    c = np.asarray(c, float); ax = np.asarray(ax, float)
    u = rng.normal(size=(n, 3)); u /= np.linalg.norm(u, axis=1)[:, None]
    for p in u:
        rr = 0.88 * ax.min(); S.append((c + p * (ax - rr) * 0.98, rr))
    S.append((c, ax.min() * 0.95))
V = np.array([0.0, 0.0, 0.0])
# axes: x posterior (right), y up, z lateral (toward the viewer)
ell(V, (1.7, 1.2, 1.1), 260)
# cochlea: conical spiral of ~2.6 turns, axis pointing anterolaterally, basal turn hooked into the vestibule
cc = np.array([-3.5, -1.1, 0.5]); ax_ = np.array([-0.45, 0.15, 0.88]); ax_ /= np.linalg.norm(ax_)
e1 = V - cc; e1 -= ax_ * e1.dot(ax_); e1 /= np.linalg.norm(e1); e2 = np.cross(ax_, e1)
t = np.linspace(0, 2.6 * 2 * np.pi, 1100)
R = 2.75 * np.exp(-0.088 * t)
hgt = 2.4 * (1 - np.exp(-0.21 * t))
spiral = cc + R[:, None] * (np.cos(t)[:, None] * e1 - np.sin(t)[:, None] * e2) + hgt[:, None] * ax_
rr = 0.84 * np.exp(-0.07 * t) + 0.12
tube(np.r_[[V + [-0.9, -0.35, 0.15]], spiral[:1]], [0.95, rr[0]])
tube(spiral, rr)
S.append((spiral[-1], rr[-1] * 1.2))
for k in np.linspace(0.2, 2.2, 12): S.append((cc + ax_ * k, 0.55 + 0.25 * (1 - k / 2.2)))   # modiolus closes the core
def canal(nrm, cen, r, tr, amp_end=0):
    nrm = np.asarray(nrm, float); nrm /= np.linalg.norm(nrm); c0 = np.asarray(cen, float)
    d = c0 - nrm * c0.dot(nrm); d /= np.linalg.norm(d)
    c = V + nrm * c0.dot(nrm) + d * (r + 0.95)          # the loop stands clear of the vestibule
    u = -d; w = np.cross(nrm, u)
    a = np.radians(np.linspace(28, 332, 520))
    pts = c + r * (np.cos(a)[:, None] * u + np.sin(a)[:, None] * w)
    idx = np.arange(len(a)); edge = idx if amp_end == 0 else idx[::-1]
    rad = tr * (1 + 1.25 * np.exp(-((edge - 18) / 34.0) ** 2))   # ampulla
    tube(np.array([V + (pts[0] - V) * 0.18, (V + pts[0]) / 2 + d * 0.1, pts[0]]), [rad[0] * 1.6, rad[0] * 1.2, rad[0]])
    tube(pts, rad)
    tube(np.array([pts[-1], (V + pts[-1]) / 2 + d * 0.1, V + (pts[-1] - V) * 0.18]), [rad[-1], rad[-1] * 1.2, rad[-1] * 1.6])
canal((1, 0, 0.25), (0.0, 1.0, 0.05), 2.45, 0.27)          # superior (anterior)
canal((0.1, 0, 1), (1.0, 0.25, 0.0), 2.35, 0.26, -1)       # posterior
canal((0, 1, 0.1), (0.55, -0.25, 1.0), 1.95, 0.26)           # lateral (horizontal)
P = np.array([p for p, _ in S]); RAD = np.array([r for _, r in S])
P -= (P.min(0) + P.max(0)) / 2
def rot(a, deg):
    t = np.radians(deg); c, s = np.cos(t), np.sin(t)
    return {'x': np.array([[1, 0, 0], [0, c, -s], [0, s, c]]), 'y': np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]]),
            'z': np.array([[c, -s, 0], [s, c, 0], [0, 0, 1]])}[a]
Q = P @ rot('y', yaw).T @ rot('x', pitch).T @ rot('z', roll).T
W = 2600; pad = 70
lo = (Q[:, :2] - RAD[:, None]).min(0); hi = (Q[:, :2] + RAD[:, None]).max(0)
sc = (W - 2 * pad) / (hi[0] - lo[0]); Hh = int((hi[1] - lo[1]) * sc + 2 * pad)
X = (Q[:, 0] - lo[0]) * sc + pad; Y = (hi[1] - Q[:, 1]) * sc + pad; Z = Q[:, 2] * sc; RR = RAD * sc
zb = np.full((Hh, W), -1e9); nx = np.zeros((Hh, W)); ny = np.zeros((Hh, W)); nz = np.zeros((Hh, W))
for i in np.argsort(Z):
    r = RR[i]; x0, x1 = int(X[i] - r), int(X[i] + r) + 2; y0, y1 = int(Y[i] - r), int(Y[i] + r) + 2
    gx, gy = np.meshgrid(np.arange(x0, x1) - X[i], np.arange(y0, y1) - Y[i])
    d2 = r * r - gx * gx - gy * gy; m = d2 > 0
    dz = np.sqrt(np.where(m, d2, 0)); zz = Z[i] + dz
    sub = zb[y0:y1, x0:x1]; up = m & (zz > sub)
    sub[up] = zz[up]; nx[y0:y1, x0:x1][up] = (gx / r)[up]; ny[y0:y1, x0:x1][up] = (gy / r)[up]
    nz[y0:y1, x0:x1][up] = (dz / r)[up]
v = zb > -1e8
# smooth the sphere-union normals a touch (removes the beaded look), renormalise
wv = gaussian_filter(v.astype(float), 3) + 1e-6
nx, ny, nz = [gaussian_filter(np.where(v, a, 0), 3) / wv for a in (nx, ny, nz)]
# bone micro-texture: fine pitting + coarser mottling, as a height field
def noise(scale, amp):
    n = gaussian_filter(rng.normal(size=(Hh, W)), scale); return n / n.std() * amp
hgt = noise(1.4, 1.0) * 0.28 + noise(3.5, 1.0) * 0.4 + noise(14, 1.0) * 0.35
pits = np.clip(noise(2.0, 1.0) - 2.4, 0, None) * 1.1
hgt -= pits
gy_, gx_ = np.gradient(hgt)
bump = 0.10
nx = nx - gx_ * bump; ny = ny - gy_ * bump
ln = np.sqrt(nx ** 2 + ny ** 2 + nz ** 2) + 1e-9; nx /= ln; ny /= ln; nz /= ln
# albedo: ivory bone with warm/cool mottling
mott = gaussian_filter(rng.normal(size=(Hh, W)), 30); mott /= mott.std()
base = np.array([0.88, 0.81, 0.68])
alb = base[None, None, :] * (1 + 0.05 * mott[..., None]) + np.array([0.025, 0.006, -0.02]) * mott[..., None]
alb = alb * (1 - 0.35 * np.clip(pits, 0, 1)[..., None])
Ld = np.array([-0.55, -0.6, 0.58]); Ld /= np.linalg.norm(Ld)
Lf = np.array([0.8, 0.15, 0.55]); Lf /= np.linalg.norm(Lf)
ndl = nx * Ld[0] + ny * Ld[1] + nz * Ld[2]
ndf = np.clip(nx * Lf[0] + ny * Lf[1] + nz * Lf[2], 0, 1)
diff = np.clip((ndl + 0.12) / 1.12, 0, 1) ** 1.15
trans = np.clip(1 - nz, 0, 1) ** 2 * np.clip(ndl + 0.4, 0, 1) * 0.30   # light scattered through thin bone at the edges
Hv = Ld + np.array([0, 0, 1]); Hv /= np.linalg.norm(Hv)
nh = np.clip(nx * Hv[0] + ny * Hv[1] + nz * Hv[2], 0, 1)
gloss = 0.55 + 0.35 * np.clip(noise(20, 1.0), -1, 1)                    # uneven sheen, as on real cleaned bone
spec = (nh ** 40 * 0.20 + nh ** 10 * 0.06) * gloss
rim = np.clip(1 - nz, 0, 1) ** 3.0
zf = np.where(v, zb, zb[v].min() - 60)
ao = np.zeros_like(zf)
for r_ in (4, 12, 32, 80):
    ao += np.clip((gaussian_filter(zf, r_) - zf) / (r_ * 2.2), 0, 1)
ao = np.clip(1 - ao / 1.8, 0.08, 1)
cav = np.clip(1 + (gaussian_filter(hgt, 4) - hgt) * 0.06, 0.8, 1.08)  # grain darkens in the micro-crevices
zn = np.where(v, (zb - zb[v].min()) / (zb[v].max() - zb[v].min()), 0)
light = (0.06 + 0.96 * diff + 0.20 * ndf) * ao * cav
img = alb * light[..., None] + np.array([0.98, 0.62, 0.42]) * trans[..., None] * ao[..., None] \
      + spec[..., None] * ao[..., None] + rim[..., None] * np.array([0.30, 0.60, 0.66]) * 0.24 * ndf[..., None] ** 0.3
ink = np.array([0.024, 0.071, 0.118])                 # page ink #06121e
fog = (0.5 * (1 - zn) ** 1.6)[..., None]
img = np.clip(img * (1 - fog) + ink * fog, 0, 1)
o = (np.dstack([img, v.astype(float)]) * 255).astype(np.uint8)
im = Image.fromarray(o, 'RGBA').resize((W // 2, Hh // 2), Image.LANCZOS)
im.save(out); print('size', im.size, 'spheres', len(S))
