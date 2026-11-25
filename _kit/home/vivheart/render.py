#!/usr/bin/env python3
"""Hero render (HOME_BRIEF update option c, product subject): the distal end of the EasyCross catheter as ViVHeart's published
papers describe it (EuroIntervention image 2024; Can J Cardiol 2025): a 12 Fr Pebax catheter of two coaxial tubes whose distal part
opens into a "basket" of six arms by a push-pull action; the inner tube carries a 0.035-in guidewire out of the tip. Drawn as a
generic, unbranded rendering of that published design: shaft, six bowed arms, the inner tube visible between them, a short tip
and a fine guidewire. Every element is swept as a dense chain of sphere impostors into a z-buffer (exact overlaps and normals);
pale semi-gloss polymer under a soft key light with a cool rim; far-side arms haze into the page ink; the shaft and wire fade
out at their ends with real alpha (no box edge, DJ/DP). Output: hero.webp. Run: python3 render.py [preview.png]"""
import numpy as np, pathlib, math, sys
from PIL import Image
H = pathlib.Path(__file__).resolve().parent
INK = np.array([11, 17, 42], float)          # --ink #0b112a
W, HH, SS = 1500, 1000, 2
w, h = W*SS, HH*SS
def unit(v): return v/np.linalg.norm(v, axis=-1, keepdims=True)
def rz(a):
    c, s = math.cos(a), math.sin(a); return np.array([[c, -s, 0], [s, c, 0], [0, 0, 1]])
def ry(a):
    c, s = math.cos(a), math.sin(a); return np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]])
def rx(a):
    c, s = math.cos(a), math.sin(a); return np.array([[1, 0, 0], [0, c, -s], [0, s, c]])
M = rz(math.radians(22)) @ ry(math.radians(-34)) @ rx(math.radians(18))

# along-axis layout (x), radii
R0 = 0.052            # shaft radius (12 Fr)
RI = 0.03             # inner tube
RB = 0.30             # basket opening
RA = 0.0135           # arm half-thickness
RW = 0.0085           # guidewire
XS0, XB0, XB1, XT1, XW1 = -1.30, -0.30, 0.42, 0.56, 1.12
groups = []           # (points Nx3, radius, kind, along 0..1 for fades, face override)
def chain(P, r, k, fade):
    seg = np.linalg.norm(np.diff(P, axis=0), axis=1); cl = np.concatenate([[0], np.cumsum(seg)])
    m = int(cl[-1]/(r*(0.05 if k in (0,3) else 0.14))) + 2; q = np.linspace(0, cl[-1], m)
    Q = np.stack([np.interp(q, cl, P[:, j]) for j in range(3)], 1)
    groups.append((Q, r, k, np.interp(q, cl, fade)))
t = np.linspace(0, 1, 800)
# shaft (fades out to the left) and a short distal tip with a rounded end
xs = XS0 + (XB0 - XS0)*t
chain(np.stack([xs, 0*t, 0*t], 1), R0, 0, np.clip((xs - XS0)/0.6, 0, 1))
xt = XB1 + (XT1 - XB1 - R0*0.2)*t
chain(np.stack([xt, 0*t, 0*t], 1), R0, 0, np.ones_like(t))
# inner tube through the basket
xi = XB0 + (XB1 - XB0)*t
chain(np.stack([xi, 0*t, 0*t], 1), RI, 3, np.ones_like(t))
# six arms bowed out (Malecot-like): radius follows a smooth bulge, arms leave and rejoin the tube wall
for a in range(6):
    ph = a*math.pi/3 + 0.32
    tt = np.linspace(0, 1, 1600)
    bul = np.sin(np.pi*tt)**1.15
    rr = (R0 - RA*0.9) + (RB - R0)*bul
    x = XB0 + (XB1 - XB0)*tt + 0.02*np.sin(2*np.pi*tt)
    chain(np.stack([x, rr*np.cos(ph), rr*np.sin(ph)], 1), RA, 1, np.ones_like(tt))
# guidewire out of the tip, a gentle droop, fading out at its end
xw = XT1 - 0.05 + (XW1 - XT1 + 0.05)*t
yw = -0.05*((xw - XT1).clip(0))**2
chain(np.stack([xw, yw, 0*t], 1), RW, 2, np.clip((XW1 - xw)/0.35, 0, 1))

cam_z = 4.4; f = 3.05; scale = w/2.25
allP = []
for Q, r, k, fd in groups:
    allP.append(Q @ M.T)
cen = np.concatenate(allP).mean(0)
zbuf = np.full(h*w, -1e9); nx = np.zeros(h*w); ny = np.zeros(h*w); nz = np.zeros(h*w)
kd = np.zeros(h*w, np.int8); fdm = np.zeros(h*w); fcm = np.zeros(h*w)
AX = unit(np.array([1.0, 0, 0]) @ M.T)
for (Q, r, k, fd), P in zip(groups, allP):
    P = P - np.array([cen[0]*0.92, cen[1], 0])
    zc = cam_z - P[:, 2]
    X = w*0.5 + P[:, 0]*f/zc*scale; Y = h*0.5 - P[:, 1]*f/zc*scale
    Rp = r*f/zc*scale
    # facing: radial direction from the catheter axis, toward the camera (+) or away (-)
    if k == 1:
        rad = P - np.outer((P*AX).sum(1), AX); rad = unit(rad + 1e-9); face = rad[:, 2]
    else:
        face = np.full(len(P), 0.4)
    rmax = int(math.ceil(Rp.max())) + 1
    for dy in range(-rmax, rmax+1):
        for dx in range(-rmax, rmax+1):
            px = np.round(X).astype(int) + dx; py = np.round(Y).astype(int) + dy
            ddx = px - X; ddy = py - Y; d2 = (ddx**2 + ddy**2)/Rp**2
            ok = (d2 < 1) & (px >= 0) & (px < w) & (py >= 0) & (py < h)
            if not ok.any(): continue
            q = np.sqrt(1 - d2[ok]); depth = P[ok, 2] + q*r
            ii = py[ok]*w + px[ok]
            o = np.argsort(depth); ii = ii[o]; depth = depth[o]
            sel = depth > zbuf[ii]; ii = ii[sel]; depth = depth[sel]
            zbuf[ii] = depth
            nx[ii] = (ddx[ok]/Rp[ok])[o][sel]; ny[ii] = (-ddy[ok]/Rp[ok])[o][sel]; nz[ii] = q[o][sel]
            kd[ii] = k; fdm[ii] = fd[ok][o][sel]; fcm[ii] = face[ok][o][sel]
m = (zbuf > -1e8).reshape(h, w)
n = np.stack([nx, ny, nz], 1).reshape(h, w, 3)
kd = kd.reshape(h, w); fdm = fdm.reshape(h, w); fcm = fcm.reshape(h, w)

V = np.array([0, 0, 1.0])
Lk = unit(np.array([-0.45, 0.7, 0.55])); Lr = unit(np.array([0.9, -0.05, 0.2])); Lb = unit(np.array([0.1, -0.95, 0.2]))
lam = np.clip((n*Lk).sum(-1), 0, 1)
rim = np.clip((n*Lr).sum(-1), 0, 1)
bnc = np.clip((n*Lb).sum(-1), 0, 1)
spec = np.clip((n*unit(Lk + V)).sum(-1), 0, 1)
wrap = np.clip(((n*Lk).sum(-1) + 0.5)/1.5, 0, 1)
# Pebax: a pale, faintly blue-white semi-gloss polymer with soft wrap light (translucency)
poly = np.array([228, 232, 240.])*(0.14 + 0.44*wrap[..., None] + 0.30*lam[..., None]) \
     + np.array([150, 180, 240.])*0.55*rim[..., None]**1.7 + np.array([227, 60, 70.])*0.16*bnc[..., None]**2 \
     + 255*0.5*spec[..., None]**30 + 255*0.16*spec[..., None]**6
inner = poly*np.array([0.78, 0.8, 0.86])
up = (2*n[..., 2:3]*n - V)[..., 1]
sky = np.array([225, 234, 246.]); floor = np.array([14, 20, 44.])
env = floor + (sky - floor)*np.clip((up + 0.3)/1.1, 0, 1)[..., None]**1.5
metal = np.array([150, 152, 158.])*(0.08 + 0.45*lam[..., None]) + env*0.6 + 255*1.0*spec[..., None]**70
col = np.where((kd == 2)[..., None], metal, np.where((kd == 3)[..., None], inner, poly))
fres = (1 - np.clip(n[..., 2], 0, 1))**3
col = col*(1 - 0.25*fres[..., None])
# far-side arms and the inner tube recede into the ink
rel = np.where(kd == 1, np.clip((0.25 - fcm)/1.25, 0, 1)*0.8, np.where(kd == 3, 0.38, 0.0))
col = col*(1 - rel[..., None]) + INK*rel[..., None]
col = np.clip(col, 0, 255)
a = np.where(m, fdm*fdm*(3 - 2*fdm), 0.0)

pm = col*a[..., None]
pmd = np.stack([np.array(Image.fromarray(pm[..., c].astype(np.float32), mode='F').resize((W, HH), Image.BOX)) for c in range(3)], -1)
cov = np.array(Image.fromarray(a.astype(np.float32), mode='F').resize((W, HH), Image.BOX))
rgb = pmd/np.maximum(cov, 1e-4)[..., None]
ys, xs_ = np.nonzero(cov > 0.01)
x0, x1, y0, y1 = xs_.min(), xs_.max(), ys.min(), ys.max()
mg = int(0.06*(x1 - x0))
x0, x1, y0, y1 = max(0, x0-mg), min(W, x1+mg), max(0, y0-mg), min(HH, y1+mg)
rgb = rgb[y0:y1, x0:x1]; cov = cov[y0:y1, x0:x1]
out = Image.fromarray(np.dstack([np.clip(rgb, 0, 255), np.clip(cov, 0, 1)*255]).astype(np.uint8), 'RGBA')
out.save(H/'hero.webp', lossless=True, quality=100, method=6)
if len(sys.argv) > 1:
    prev = Image.new('RGBA', out.size, tuple(int(v) for v in INK) + (255,)); prev.alpha_composite(out); prev.convert('RGB').save(sys.argv[1])
print('size', out.size)
