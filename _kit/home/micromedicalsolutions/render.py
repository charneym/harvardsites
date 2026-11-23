#!/usr/bin/env python3
"""Hero render (HOME_BRIEF update option c, product subject): the MicroStent as micromedicalsolutions.net/product describes it,
a self-expanding stent braided from 48 round nitinol strands (24 each way, one over / one under), lying on a gentle arc with
its near end turned toward the viewer so the open lumen reads at once. Every strand is swept as a dense chain of sphere
impostors into a z-buffer, so overlaps, normals and depth are exact. Shaded as polished nitinol in a soft studio light:
Lambert + sharp specular + a cool sky / warm floor reflection, with depth haze into the ink for the far wall.
The ground equals the page ink exactly and the art eases into it, so there is no edge (DJ/DP). Output: hero.webp."""
import numpy as np, pathlib, math
from PIL import Image, ImageFilter
H = pathlib.Path(__file__).resolve().parent
INK = np.array([39, 34, 34], float)        # --ink #272222 (their dark band)
W, HH, SS = 1500, 1180, 2
w, h = W*SS, HH*SS

def unit(v): return v/np.linalg.norm(v, axis=-1, keepdims=True)

# ---- axis: a calm arc, rising to the right, near (left) end toward the camera
NS = 2400
s = np.linspace(0, 1, NS)
C = np.stack([-1.0 + 2.0*s, 0.10*np.sin(np.pi*s) - 0.02*s, np.zeros_like(s)], 1)
def rz(a):
    c, sn = math.cos(a), math.sin(a); return np.array([[c, -sn, 0], [sn, c, 0], [0, 0, 1]])
def ry(a):
    c, sn = math.cos(a), math.sin(a); return np.array([[c, 0, sn], [0, 1, 0], [-sn, 0, c]])
M = rz(math.radians(24)) @ ry(math.radians(-38))
C = C @ M.T
# parallel-transport frame
T = np.gradient(C, axis=0); T = unit(T)
N = np.zeros_like(T); B = np.zeros_like(T)
n0 = np.cross(T[0], [0, 0, 1.0]); n0 /= np.linalg.norm(n0); N[0] = n0
for i in range(1, NS):
    v = N[i-1] - np.dot(N[i-1], T[i])*T[i]; N[i] = v/np.linalg.norm(v)
B = np.cross(T, N)

R = 0.205                 # stent radius (model units)
L = 2.0*1.006             # axis length
K = 24                    # strands per family
alpha = math.radians(54)  # braid angle to the axis
k = L*math.tan(alpha)/R   # helix turns (radians) over the length
dR = 0.0040               # over/under excursion
rw = 0.0046               # strand radius

P_all = []; Nrm_all = []
for fam in (1, -1):
    for i in range(K):
        ph0 = 2*math.pi*i/K
        ph = ph0 + fam*k*s
        if fam == 1: off = dR*np.cos(12*(ph + k*s) + math.pi*i)
        else:        off = -dR*np.cos(12*(ph - k*s) + math.pi*i)
        rr = R + off
        P = C + rr[:, None]*(np.cos(ph)[:, None]*N + np.sin(ph)[:, None]*B)
        # resample to dense arc length
        seg = np.linalg.norm(np.diff(P, axis=0), axis=1); cl = np.concatenate([[0], np.cumsum(seg)])
        n = int(cl[-1]/(rw*0.22)) + 2
        u = np.linspace(0, cl[-1], n)
        Pd = np.stack([np.interp(u, cl, P[:, j]) for j in range(3)], 1)
        rad = np.cos(ph)[:, None]*N + np.sin(ph)[:, None]*B
        Rd = np.stack([np.interp(u, cl, rad[:, j]) for j in range(3)], 1)
        P_all.append(Pd); Nrm_all.append(Rd)
P = np.concatenate(P_all); RAD = np.concatenate(Nrm_all)
# facing: +1 on the wall toward the camera, -1 on the far wall
cam = np.array([0, 0, 4.2]); vd = unit(cam - P); FACE = (RAD*vd).sum(1)

# ---- camera (perspective, looking down -z)
cam_z = 4.2; f = 3.05
zc = cam_z - P[:, 2]
sx = P[:, 0]*f/zc; sy = P[:, 1]*f/zc
scale = w/2.25
X = w*0.5 + sx*scale; Y = h*0.53 - sy*scale
Rpx = rw*f/zc*scale
Z = P[:, 2]

zbuf = np.full(h*w, -1e9); fc = np.zeros(h*w); nx = np.zeros(h*w); ny = np.zeros(h*w); nz = np.zeros(h*w)
rmax = int(math.ceil(Rpx.max())) + 1
for dy in range(-rmax, rmax+1):
    for dx in range(-rmax, rmax+1):
        px = np.round(X).astype(int) + dx; py = np.round(Y).astype(int) + dy
        ddx = px - X; ddy = py - Y
        d2 = (ddx**2 + ddy**2)/Rpx**2
        ok = (d2 < 1) & (px >= 0) & (px < w) & (py >= 0) & (py < h)
        if not ok.any(): continue
        q = np.sqrt(1 - d2[ok]); depth = Z[ok] + q*rw
        idx = py[ok]*w + px[ok]
        o = np.argsort(depth); idx = idx[o]; depth = depth[o]
        sel = depth > zbuf[idx]
        idx = idx[sel]; depth = depth[sel]
        zbuf[idx] = depth
        fc[idx] = FACE[ok][o][sel]
        nx[idx] = (ddx[ok]/Rpx[ok])[o][sel]; ny[idx] = (-ddy[ok]/Rpx[ok])[o][sel]; nz[idx] = q[o][sel]
mask = zbuf > -1e8
zb = zbuf.reshape(h, w); m = mask.reshape(h, w)
n = np.stack([nx, ny, nz], 1).reshape(h, w, 3)

# ---- shading: polished nitinol
Lk = unit(np.array([-0.55, 0.62, 0.56]))     # soft key, upper left
Lf = unit(np.array([0.7, -0.2, 0.5]))        # dim fill, right
V = np.array([0, 0, 1.0])
lam = np.clip((n*Lk).sum(-1), 0, 1)
fil = np.clip((n*Lf).sum(-1), 0, 1)
Hk = unit(Lk + V); spec = np.clip((n*Hk).sum(-1), 0, 1)**60
Hf = unit(Lf + V); spec2 = np.clip((n*Hf).sum(-1), 0, 1)**40
# reflected environment: cool bright sky above, warm dark floor below
refl = 2*n[..., 2:3]*n - V
up = refl[..., 1]
sky = np.array([236, 240, 244.]); floor = np.array([46, 38, 37.])
env = floor + (sky-floor)*np.clip((up+0.35)/1.1, 0, 1)[..., None]**1.4
base = np.array([128, 128, 131.])
col = base*(0.10 + 0.62*lam[..., None] + 0.14*fil[..., None]) + env*0.55 + 255*(1.1*spec[..., None]) + np.array([255, 236, 232.])*0.25*spec2[..., None]
fres = (1 - np.clip(n[..., 2], 0, 1))**3
col = col*(1 - 0.35*fres[..., None])
# depth haze: the far wall of the tube sinks into the ink
fcm = fc.reshape(h, w)
rel = np.clip((0.35 - fcm)/1.1, 0, 1)
haze = 0.80*rel**1.0
col = col*(1-haze[..., None]) + INK*haze[..., None]
# gentle global falloff along the tube toward the far (upper right) end
col = np.clip(col, 0, 255)
img = np.where(m[..., None], col, INK)
# anti-alias: coverage by downsampling
im = Image.fromarray(img.astype(np.uint8)).resize((W, HH), Image.LANCZOS)
a = np.array(im).astype(float)
# real alpha: premultiplied colour and coverage, downsampled together (the page ink shows through, so no ground can mismatch)
pm = np.where(m[..., None], col, 0.0)
pmd = np.stack([np.array(Image.fromarray(pm[..., c].astype(np.float32), mode='F').resize((W, HH), Image.BOX)) for c in range(3)], -1)
covd = np.array(Image.fromarray(m.astype(np.float32), mode='F').resize((W, HH), Image.BOX))
rgb = pmd/np.maximum(covd, 1e-4)[..., None]
# soft contact glow under the stent so it sits in space (very faint, warm)
cov = Image.fromarray((m*255).astype(np.uint8)).resize((W, HH), Image.BILINEAR).filter(ImageFilter.GaussianBlur(60))
g = np.array(cov).astype(float)/255
a = a + (np.array([120, 40, 38.]) - INK)*0.10*g[..., None]
# crop around the subject with a wide margin, then feather every edge into the ink (long eased mask)
ys, xs = np.nonzero(np.array(cov) > 2)
mys, mxs = np.nonzero(np.array(Image.fromarray((m*255).astype(np.uint8)).resize((W, HH), Image.BILINEAR)) > 0)
x0, x1, y0, y1 = mxs.min(), mxs.max(), mys.min(), mys.max()
mg = int(0.16*(x1-x0))
x0, x1, y0, y1 = max(0, x0-mg), min(W, x1+mg), max(0, y0-mg), min(HH, y1+mg)
a = a[y0:y1, x0:x1]; rgb = rgb[y0:y1, x0:x1]; covd = covd[y0:y1, x0:x1]; Hc, Wc = a.shape[:2]
yy, xx = np.mgrid[0:Hc, 0:Wc]
def ease(t): t = np.clip(t, 0, 1); return t*t*(3-2*t)
fx = ease(xx/(mg*0.9))*ease((Wc-1-xx)/(mg*0.9)); fy = ease(yy/(mg*0.9))*ease((Hc-1-yy)/(mg*0.9))
a = INK + (a-INK)*(fx*fy)[..., None]
al = np.clip(covd*fx*fy, 0, 1)
rgba = np.dstack([np.clip(rgb, 0, 255), al*255]).astype(np.uint8)
out = Image.fromarray(rgba, 'RGBA')
out.save(H/'hero.webp', lossless=True, quality=100, method=6)
Image.fromarray(np.clip(a, 0, 255).astype(np.uint8)).save('/tmp/claude-0/mms/hero_prev.png')
print('size', out.size, 'subject frac x', mg/Wc, 1-mg/Wc, 'y', mg/Hc, 1-mg/Hc)
