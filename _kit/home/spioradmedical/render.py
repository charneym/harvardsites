#!/usr/bin/env python3
"""Hero render (HOME_BRIEF update, option c): the subject Spiorad Medical works on, a large-bore access site in the common femoral
artery. A segment of artery, cut open at the near end so its wall layers and lumen show, with a large-bore introducer sheath
(the 12F-24F class of access Spiorad's closure device is built for) passing through the vessel wall into the lumen. Nothing here
depicts Spiorad's own device (its design is not public). Signed-distance ray marching in numpy: soft shadows, ambient occlusion,
wet-tissue specular and wrap lighting for the artery, glossy polymer for the sheath, a faint brand-green rim light. The ground is
the site ink exactly and every edge eases into it, so there is no box edge (DJ/DP). Output: hero.webp (and a preview)."""
import numpy as np, pathlib, sys
from PIL import Image
H = pathlib.Path(__file__).resolve().parent
INK = np.array([7, 18, 15], np.float32) / 255
W, HH = (int(sys.argv[1]), int(sys.argv[2])) if len(sys.argv) > 2 else (1600, 1150)
SS = 2
w, h = W * SS, HH * SS
f32 = np.float32

def nrm(v): v = np.asarray(v, f32); return v / np.linalg.norm(v)

# ---------- scene (y up) ----------
R, T = 1.0, 0.20            # artery outer radius and wall thickness
XC = -3.1                   # cut plane along the vessel axis
RS = 0.46                   # sheath radius (large bore: about half the artery's outer radius)
# vessel axis: x, with a gentle downward bend toward the far end
def vessel_local(px, py, pz):
    yb = py + 0.035 * (px - 0.5) ** 2 - 0.0
    return px, yb, pz
# sheath centreline: outside it comes down from the upper right; through the wall it bends to run left along the lumen
def bez2(a, b, c, n):
    t = np.linspace(0, 1, n)[:, None]
    return (1 - t) ** 2 * a + 2 * (1 - t) * t * b + t ** 2 * c
A0 = np.array([6.2, 4.6, -0.9]); A1 = np.array([1.35, 1.05, -0.1])
B1 = np.array([0.15, 0.12, 0.0]); B2 = np.array([-1.55, -0.05, 0.0])
pts = np.vstack([np.linspace(A0, A1, 6)[:-1], bez2(A1, np.array([0.55, 0.42, -0.04]), B1, 7)[:-1], np.linspace(B1, B2, 4)])
rad = np.full(len(pts), RS, f32)
# the dilator taper at the tip (last segment): sheath edge, then a cone down to a narrow tip
TIP = np.array([-2.35, -0.07, 0.0])
segs = [(pts[i], pts[i + 1], RS, RS) for i in range(len(pts) - 1)]
segs.append((B2, B2 + (TIP - B2) * 0.12, RS * 0.86, RS * 0.86))
segs.append((B2 + (TIP - B2) * 0.12, TIP, RS * 0.86, 0.13))
segs = [(np.asarray(a, f32), np.asarray(b, f32), f32(ra), f32(rb)) for a, b, ra, rb in segs]
cum = [0.0]
for a, b, _, _ in segs: cum.append(cum[-1] + float(np.linalg.norm(b - a)))

def sd_sheath(px, py, pz, want_t=False):
    best = np.full(px.shape, 1e9, f32); tt = np.zeros(px.shape, f32) if want_t else None
    for i, (a, b, ra, rb) in enumerate(segs):
        ba = b - a; L2 = f32(ba @ ba)
        u = np.clip(((px - a[0]) * ba[0] + (py - a[1]) * ba[1] + (pz - a[2]) * ba[2]) / L2, 0, 1)
        dx = px - a[0] - u * ba[0]; dy = py - a[1] - u * ba[1]; dz = pz - a[2] - u * ba[2]
        d = np.sqrt(dx * dx + dy * dy + dz * dz) - (ra + (rb - ra) * u)
        if want_t:
            m = d < best; tt[m] = (cum[i] + u * np.sqrt(L2))[m]
        best = np.minimum(best, d)
    return (best, tt) if want_t else best

def sd_vessel(px, py, pz):
    x, y, z = vessel_local(px, py, pz)
    r = np.sqrt(y * y + z * z)
    shell = np.abs(r - (R - T / 2)) - T / 2
    shell = np.maximum(shell, XC - x)           # open cut at the near end
    shell = np.maximum(shell, x - 7.5)
    return shell * f32(0.9), r, x

def scene(px, py, pz, mat=False):
    dv, r, x = sd_vessel(px, py, pz)
    ds = sd_sheath(px, py, pz)
    dv = dv - f32(0.07) * np.exp(-(np.maximum(ds, 0) / f32(0.16)) ** 2) * (r > R - T)
    dv = np.maximum(dv, -(ds - f32(0.025)))    # the puncture: the wall parts around the sheath
    d = np.minimum(dv, ds)
    if mat: return d, (ds < dv)
    return d

# ---------- camera ----------
cam = np.array([-2.6, 3.0, 10.6], f32); look = np.array([0.3, -0.35, 0.0], f32)
fw = nrm(look - cam); rt = nrm(np.cross(fw, [0, 1, 0])); up = np.cross(rt, fw)
# rotate the whole scene about y so the cut end turns toward the camera
ang = np.radians(-40.0); ca, sa = np.cos(ang), np.sin(ang)
fov = 0.40
yy, xx = np.mgrid[0:h, 0:w].astype(f32)
sx = (xx + 0.5 - w / 2) / (h / 2) * fov; sy = -(yy + 0.5 - h / 2) / (h / 2) * fov
dx = fw[0] + sx * rt[0] + sy * up[0]; dy = fw[1] + sx * rt[1] + sy * up[1]; dz = fw[2] + sx * rt[2] + sy * up[2]
ln = np.sqrt(dx * dx + dy * dy + dz * dz); dx /= ln; dy /= ln; dz /= ln
def rot(x, y, z):  # world -> scene (rotate about y)
    return ca * x + sa * z, y, -sa * x + ca * z
ox, oy, oz = rot(np.full_like(dx, cam[0]), np.full_like(dx, cam[1]), np.full_like(dx, cam[2]))
rdx, rdy, rdz = rot(dx, dy, dz)
dx = dy = dz = None
N = w * h
ox, oy, oz, rdx, rdy, rdz = [a.ravel() for a in (ox, oy, oz, rdx, rdy, rdz)]
tt = np.full(N, 4.0, f32); hit = np.zeros(N, bool); alive = np.arange(N)
for it in range(160):
    if alive.size == 0: break
    t = tt[alive]
    d = scene(ox[alive] + rdx[alive] * t, oy[alive] + rdy[alive] * t, oz[alive] + rdz[alive] * t)
    tt[alive] = t + d
    h_ = d < 0.0015 * t; far = tt[alive] > 30
    hit[alive[h_]] = True
    alive = alive[~(h_ | far)]
    if it % 20 == 0: print('march', it, alive.size, flush=True)
idx = np.nonzero(hit)[0]
t = tt[idx]
px, py, pz = ox[idx] + rdx[idx] * t, oy[idx] + rdy[idx] * t, oz[idx] + rdz[idx] * t
e = f32(0.0025)
def S(a, b, c): return scene(a, b, c)
nx = S(px + e, py, pz) - S(px - e, py, pz); ny = S(px, py + e, pz) - S(px, py - e, pz); nz = S(px, py, pz + e) - S(px, py, pz - e)
nl = np.sqrt(nx * nx + ny * ny + nz * nz) + 1e-9; nx /= nl; ny /= nl; nz /= nl
_, isS = scene(px, py, pz, mat=True)
BUMP_PENDING = True

ds_, st = sd_sheath(px, py, pz, want_t=True)
vx_, vy_, vz_ = vessel_local(px, py, pz)
vr = np.sqrt(vy_ ** 2 + vz_ ** 2)
cutface = (~isS) & (vx_ < XC + 0.012)
inner = (~isS) & (~cutface) & (vr < R - T * 0.5)
# lights in scene space
def rv(v): x, y, z = rot(*[f32(c) for c in v]); return nrm([x, y, z])
Lk = rv([-0.45, 0.85, 0.55]); Ls = nrm([0.80, 0.55, 0.22]); Ls2 = nrm([0.55, 0.15, 0.82]); Lf = rv([0.9, 0.15, 0.45]); Lr = rv([0.25, 0.35, -0.95])
V = np.stack([-rdx[idx], -rdy[idx], -rdz[idx]])
Nn = np.stack([nx, ny, nz])
def dot(a, b): return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
# soft shadow toward the key light
def shadow(L, k=10.0):
    res = np.ones(idx.size, f32); s = np.full(idx.size, 0.03, f32)
    bx, by, bz = px + nx * 0.004, py + ny * 0.004, pz + nz * 0.004
    for _ in range(48):
        d = scene(bx + L[0] * s, by + L[1] * s, bz + L[2] * s)
        res = np.minimum(res, np.clip(k * d / s, 0, 1)); s += np.clip(d, 0.02, 0.4)
    return res * res * (3 - 2 * res)
sh = shadow(Lk)
ao = np.ones(idx.size, f32)
for i in range(1, 6):
    dd = f32(0.06 * i); ao -= (dd - scene(px + nx * dd, py + ny * dd, pz + nz * dd)) * f32(1.6 / 2 ** i)
ao = np.clip(ao, 0.15, 1)
def blinn(L, p):
    hx, hy, hz = L[0] + V[0], L[1] + V[1], L[2] + V[2]; hl = np.sqrt(hx * hx + hy * hy + hz * hz)
    return np.clip((nx * hx + ny * hy + nz * hz) / hl, 0, 1) ** p
ndk = dot(Nn, Lk); ndf = np.clip(dot(Nn, Lf), 0, 1); ndr = np.clip(dot(Nn, Lr), 0, 1)
fres = (1 - np.clip(dot(Nn, V), 0, 1)) ** 3
# value noise for tissue texture
rng = np.random.default_rng(7); G = rng.random((64, 64, 64)).astype(f32)
def vnoise(x, y, z):
    xi, yi, zi = np.floor(x), np.floor(y), np.floor(z); fx, fy, fz = x - xi, y - yi, z - zi
    fx, fy, fz = fx * fx * (3 - 2 * fx), fy * fy * (3 - 2 * fy), fz * fz * (3 - 2 * fz)
    xi, yi, zi = xi.astype(int) & 63, yi.astype(int) & 63, zi.astype(int) & 63
    def g(a, b, c): return G[(xi + a) & 63, (yi + b) & 63, (zi + c) & 63]
    return (((g(0,0,0)*(1-fx)+g(1,0,0)*fx)*(1-fy)+(g(0,1,0)*(1-fx)+g(1,1,0)*fx)*fy)*(1-fz)+
            ((g(0,0,1)*(1-fx)+g(1,0,1)*fx)*(1-fy)+(g(0,1,1)*(1-fx)+g(1,1,1)*fx)*fy)*fz)
def fbm(x, y, z): return vnoise(x * 6, y * 6, z * 6) * 0.65 + vnoise(x * 15 + 3, y * 15, z * 15) * 0.35
_e = 0.01; _n0 = fbm(px, py, pz)
gx = (fbm(px + _e, py, pz) - _n0) / _e; gy = (fbm(px, py + _e, pz) - _n0) / _e; gz = (fbm(px, py, pz + _e) - _n0) / _e
_k = np.where(isS, 0.0, 0.022).astype(f32)
gd = gx * nx + gy * ny + gz * nz
nx = nx - (gx - gd * nx) * _k; ny = ny - (gy - gd * ny) * _k; nz = nz - (gz - gd * nz) * _k
nl = np.sqrt(nx * nx + ny * ny + nz * nz); nx /= nl; ny /= nl; nz /= nl
Nn = np.stack([nx, ny, nz]); ndk = dot(Nn, Lk); ndf = np.clip(dot(Nn, Lf), 0, 1); ndr = np.clip(dot(Nn, Lr), 0, 1); fres = (1 - np.clip(dot(Nn, V), 0, 1)) ** 3
nz1 = vnoise(vx_ * 3.0, vy_ * 3.0, vz_ * 3.0) * 0.6 + vnoise(vx_ * 9, vy_ * 9, vz_ * 9) * 0.4
theta = np.arctan2(vz_, vy_)
stri = 0.5 + 0.5 * np.sin(theta * 22 + nz1 * 9 + vx_ * 0.7)   # faint longitudinal fibre striations of the adventitia
col = np.zeros((3, idx.size), f32)
n2 = vnoise(vx_ * 2.2 + 11, theta * 2.4 + 5, vr * 2 + 3)
vasa = 0.5 * np.clip(1 - np.abs(n2 - 0.5) / 0.012, 0, 1) ** 1.5 * np.clip((vnoise(vx_ * 1.3, theta * 1.5 + 9, 1.0) - 0.35) * 3, 0, 1)
fat = np.clip((vnoise(vx_ * 1.6 + 30, theta * 1.8, 2.0) - 0.62) * 4, 0, 1)
# artery outer wall: deep crimson, wrap-lit (subsurface), wet specular
wrap = np.clip((ndk + 0.45) / 1.45, 0, 1)
base = np.array([0.42, 0.085, 0.09], f32)[:, None] * (0.86 + 0.28 * nz1) * (0.94 + 0.08 * stri)
sss = np.array([0.95, 0.25, 0.18], f32)[:, None] * np.clip(1 - np.abs(ndk), 0, 1) ** 2 * 0.22
base = base * (1 - 0.45 * vasa[None]) + (np.array([0.62, 0.42, 0.22], f32)[:, None] - base) * fat[None] * 0.12
outer = base * (0.06 + 1.15 * wrap * (0.35 + 0.65 * sh)) * ao + sss * ao \
      + np.array([0.9, 0.85, 0.82], f32)[:, None] * (blinn(Ls, 140) * 1.3 * (0.3 + 1.3 * nz1) + blinn(Ls, 30) * 0.10 + blinn(Ls2, 80) * 0.4 * nz1 + blinn(Lk, 18) * 0.06) * sh \
      + np.array([0.75, 0.8, 0.9], f32)[:, None] * blinn(Lf, 60) * 0.35 \
      + base * ndf * 0.25 + np.array([0.10, 0.62, 0.40], f32)[:, None] * (ndr ** 2 * 0.45 + fres * 0.10)
# lumen (intima): pale, glossy, shadowed by the wall
intima = np.array([0.80, 0.50, 0.46], f32)[:, None] * (0.86 + 0.2 * nz1)
inn = intima * (0.06 + 0.75 * np.clip(ndk, 0, 1) * sh + 0.18 * ndf) * ao ** 1.6 + np.array([1, 0.95, 0.92], f32)[:, None] * blinn(Lk, 70) * 0.5 * sh
# cut face: adventitia (outer band), media (muscular red), intima (thin pale line)
fr = (vr - (R - T)) / T
lay = np.where(fr > 0.72, 0, np.where(fr > 0.10, 1, 2))
cc = np.choose(lay, [np.array([0.42, 0.10, 0.09], f32)[:, None] * np.ones(idx.size, f32),
                     np.array([0.70, 0.17, 0.15], f32)[:, None] * (0.9 + 0.2 * nz1),
                     np.array([0.92, 0.70, 0.62], f32)[:, None] * np.ones(idx.size, f32)])
cut = cc * (0.16 + 0.9 * np.clip(ndk, 0, 1) * sh + 0.2 * ndf) * ao + blinn(Lk, 40) * 0.12
# sheath: glossy pale polymer, a cool hue; the dilator tip slightly translucent blue-grey
dil = st > cum[-3]
alb = np.where(dil, np.array([0.55, 0.66, 0.74], f32)[:, None], np.array([0.70, 0.76, 0.80], f32)[:, None])
she = alb * (0.07 + 0.82 * np.clip(ndk, 0, 1) * (0.3 + 0.7 * sh) + 0.22 * ndf) * ao \
    + (blinn(Ls, 260) * 1.4 + blinn(Ls, 30) * 0.12) * sh + blinn(Lf, 160) * 0.7 + (blinn(nrm([0.2, 0.9, 0.4]), 160) + blinn(nrm([-0.6, 0.2, 0.75]), 160) + blinn(nrm([0.3, -0.2, 0.93]), 160)) * 0.55 + blinn(rv([-0.1, 0.5, 0.86]), 300) * 0.8 \
    + np.array([0.10, 0.62, 0.40], f32)[:, None] * (ndr ** 2 * 0.35) + fres * np.array([0.55, 0.62, 0.68], f32)[:, None] * 0.55
col = np.where(isS, she, np.where(cutface, cut, np.where(inner, inn, outer)))
# fades: the far end of the artery and the upper sheath ease into the ink over a long distance
def ss(v): v = np.clip(v, 0, 1); return v * v * (3 - 2 * v)
fadev = 1 - ss((vx_ - 2.6) / 4.2)
fades = 1 - ss((cum[5] - st - 1.2) / 3.4)
alpha = np.where(isS, fades, fadev)
out = np.zeros((3, N), f32) + INK[:, None]
out[:, idx] = INK[:, None] * (1 - alpha) + np.clip(col, 0, 1.5) * alpha
out = out.reshape(3, h, w).transpose(1, 2, 0)
# a faint contact shadow/halo is implicit; ease every edge into the ink (DJ/DP)
X = np.arange(w, dtype=f32)[None, :]; Y = np.arange(h, dtype=f32)[:, None]
ef = ss(X / (0.12 * w)) * ss((w - X) / (0.14 * w)) * ss(Y / (0.16 * h)) * ss((h - Y) / (0.2 * h))
out = INK + (out - INK) * ef[..., None]
out = np.clip(out, 0, 1) ** (1 / 1.0)
img = Image.fromarray((out * 255 + 0.5).astype(np.uint8)).resize((W, HH), Image.LANCZOS)
arr = np.array(img); print('corners', arr[0, 0], arr[-1, -1], arr[0, -1], arr[-1, 0])
img.save(H / 'hero.webp', quality=92, method=6)
img.save('/tmp/claude-0/-home-user-harvardsites/5861f58c-a11e-5232-86fa-d79d4e276fcc/scratchpad/hero.png')
