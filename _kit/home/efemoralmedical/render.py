#!/usr/bin/env python3
"""Hero render (HOME_BRIEF update option c, product subject): the Efemoral Vascular Scaffold System as Efemoral's releases
describe it: "multiple, serial, intravascular scaffolds" with "inter-scaffold spaces" (FlexStep Technology), balloon-expandable,
bioresorbable, drug-eluting. Drawn here as five short expanded polymer scaffolds (three zig-zag strut rings each, joined by
straight links) laid along a gentle arc, the shape of a femoral artery bending with
the leg, with a fine guidewire running through the lumen. Not a picture of the actual device: a generic, unbranded rendering of
the published design principle. Every strut is swept as a dense chain of sphere impostors into a z-buffer (exact overlaps and
normals); white semi-gloss polymer in a soft studio light with a cool cyan rim; the far wall hazes into the page ink.
Output: hero.webp with real alpha (no box edge, DJ/DP). Run: python3 render.py [preview.png]"""
import numpy as np, pathlib, math, sys
from PIL import Image, ImageFilter
H = pathlib.Path(__file__).resolve().parent
INK = np.array([7, 21, 31], float)          # --ink #07151f
W, HH, SS = 1600, 1100, 2
w, h = W*SS, HH*SS
def unit(v): return v/np.linalg.norm(v, axis=-1, keepdims=True)

# ---- axis: a calm arc rising to the right, near (left) end turned a little toward the camera
NS = 3000
s = np.linspace(0, 1, NS)
C = np.stack([-1.0 + 2.0*s, 0.13*np.sin(np.pi*s) - 0.03*s, np.zeros_like(s)], 1)
def rz(a):
    c, sn = math.cos(a), math.sin(a); return np.array([[c, -sn, 0], [sn, c, 0], [0, 0, 1]])
def ry(a):
    c, sn = math.cos(a), math.sin(a); return np.array([[c, 0, sn], [0, 1, 0], [-sn, 0, c]])
M = rz(math.radians(17)) @ ry(math.radians(-30))
C = C @ M.T
T = unit(np.gradient(C, axis=0))
N = np.zeros_like(T)
n0 = np.cross(T[0], [0, 0, 1.0]); N[0] = n0/np.linalg.norm(n0)
for i in range(1, NS):
    v = N[i-1] - np.dot(N[i-1], T[i])*T[i]; N[i] = v/np.linalg.norm(v)
B = np.cross(T, N)
SL = np.concatenate([[0], np.cumsum(np.linalg.norm(np.diff(C, axis=0), axis=1))])   # arc length along the axis
LTOT = SL[-1]
def frame_at(u):          # u: arc length -> (centre, N, B)
    j = np.clip(np.searchsorted(SL, u), 1, NS-1)
    t = ((u - SL[j-1])/(SL[j]-SL[j-1]))[:, None]
    lerp = lambda A: A[j-1]*(1-t) + A[j]*t
    return lerp(C), unit(lerp(N)), unit(lerp(B))

R = 0.19                 # scaffold radius
rw = 0.0072              # strut half-thickness (polymer struts are thick)
NSEG, SEGL, GAP = 5, 0.27, 0.135
CROWN = 9                # crowns per ring
RINGS = 3
start = (LTOT - (NSEG*SEGL + (NSEG-1)*GAP))/2
pts = []; kind = []      # kind 0 strut, 1 marker, 2 wire
def add(u, ph, rr, k):
    c, n, b = frame_at(u)
    P = c + rr[:, None]*(np.cos(ph)[:, None]*n + np.sin(ph)[:, None]*b)
    seg = np.linalg.norm(np.diff(P, axis=0), axis=1); cl = np.concatenate([[0], np.cumsum(seg)])
    m = int(cl[-1]/(rw*0.2)) + 2
    q = np.linspace(0, cl[-1], m)
    pts.append(np.stack([np.interp(q, cl, P[:, j]) for j in range(3)], 1)); kind.append(np.full(m, k))
for sg in range(NSEG):
    u0 = start + sg*(SEGL + GAP)
    rl = SEGL/RINGS
    amp = rl*0.34
    for r in range(RINGS):
        uc = u0 + rl*(r + 0.5)
        t = np.linspace(0, 1, 2400)
        ph = 2*math.pi*t + sg*0.35
        tri = 2*np.abs(((t*CROWN) % 1.0) - 0.5)*2 - 1        # -1..1 zig-zag, sharp crowns
        zz = np.sign(tri)*np.abs(tri)**0.85
        add(uc + amp*zz, ph, np.full_like(t, R), 0)
        if r < RINGS-1:                                        # links: crown of this ring to crown of the next, alternate crowns
            for c in range(0, CROWN, 2):
                phc = 2*math.pi*(c + 0.0)/CROWN + sg*0.35
                uu = np.linspace(uc + amp, uc + rl - amp, 40)
                add(uu, np.full_like(uu, phc), np.full_like(uu, R), 0)
    for e, ue in ():  # (radiopaque end markers: left out, they read as stray dots at hero scale)
        for k in (0, 1):
            phm = sg*0.35 + math.pi*(k + 0.25*e) + 0.6
            for d in np.linspace(-0.006, 0.006, 5):
                for a in np.linspace(-0.035, 0.035, 5):
                    add(np.array([ue + d, ue + d + 1e-4]), np.array([phm + a, phm + a]), np.array([R, R]), 1)
# guidewire through the lumen, a little past both ends
uu = np.linspace(start - 0.22, LTOT - start + 0.22, 1600)
uu = np.clip(uu, 0, LTOT - 1e-6)
add(uu, np.zeros_like(uu), np.full_like(uu, R*0.05), 2)
P = np.concatenate(pts); K = np.concatenate(kind)
RW = np.where(K == 2, rw*0.42, np.where(K == 1, rw*1.25, rw))
# where each point sits along the wire, to fade its ends into the ink
wire_t = np.zeros(len(P))
# facing of each point (near wall +, far wall -)
cj = np.clip(np.searchsorted(SL, 0), 0, 0)
cam = np.array([0, 0, 4.2])
# radial direction: nearest axis point
from numpy.linalg import norm
idx = np.clip(np.round((np.arange(len(P))*0) ), 0, 0)
# compute nearest axis sample for each point (coarse)
Cc = C[::6]
best = np.zeros(len(P), int)
for i0 in range(0, len(P), 20000):
    d = ((P[i0:i0+20000, None, :] - Cc[None, :, :])**2).sum(-1)
    best[i0:i0+20000] = d.argmin(1)
RAD = unit(P - Cc[best] + 1e-9)
vd = unit(cam - P); FACE = (RAD*vd).sum(1)
FACE[K == 2] = 0.2
ALONG = best/(len(Cc)-1)

cam_z = 4.2; f = 3.05
zc = cam_z - P[:, 2]
scale = w/2.3
X = w*0.5 + P[:, 0]*f/zc*scale; Y = h*0.55 - P[:, 1]*f/zc*scale
Rpx = RW*f/zc*scale
Z = P[:, 2]
zbuf = np.full(h*w, -1e9); fc = np.zeros(h*w); nx = np.zeros(h*w); ny = np.zeros(h*w); nz = np.zeros(h*w)
kd = np.zeros(h*w, np.int8); al = np.zeros(h*w)
rmax = int(math.ceil(Rpx.max())) + 1
for dy in range(-rmax, rmax+1):
    for dx in range(-rmax, rmax+1):
        px = np.round(X).astype(int) + dx; py = np.round(Y).astype(int) + dy
        ddx = px - X; ddy = py - Y
        d2 = (ddx**2 + ddy**2)/Rpx**2
        ok = (d2 < 1) & (px >= 0) & (px < w) & (py >= 0) & (py < h)
        if not ok.any(): continue
        q = np.sqrt(1 - d2[ok]); depth = Z[ok] + q*RW[ok]
        ii = py[ok]*w + px[ok]
        o = np.argsort(depth); ii = ii[o]; depth = depth[o]
        sel = depth > zbuf[ii]
        ii = ii[sel]; depth = depth[sel]
        zbuf[ii] = depth
        fc[ii] = FACE[ok][o][sel]; kd[ii] = K[ok][o][sel]; al[ii] = ALONG[ok][o][sel]
        nx[ii] = (ddx[ok]/Rpx[ok])[o][sel]; ny[ii] = (-ddy[ok]/Rpx[ok])[o][sel]; nz[ii] = q[o][sel]
m = (zbuf > -1e8).reshape(h, w)
n = np.stack([nx, ny, nz], 1).reshape(h, w, 3)
kd = kd.reshape(h, w); fcm = fc.reshape(h, w); alm = al.reshape(h, w)

V = np.array([0, 0, 1.0])
Lk = unit(np.array([-0.5, 0.66, 0.56])); Lr = unit(np.array([0.85, -0.1, 0.15]))
lam = np.clip((n*Lk).sum(-1), 0, 1)
rim = np.clip((n*Lr).sum(-1), 0, 1)
spec = np.clip((n*unit(Lk + V)).sum(-1), 0, 1)
refl = 2*n[..., 2:3]*n - V
up = refl[..., 1]
# polymer: warm-white semi-gloss with soft wrap light (a little translucency)
wrap = np.clip(((n*Lk).sum(-1) + 0.45)/1.45, 0, 1)
poly = np.array([226, 232, 234.])*(0.16 + 0.42*wrap[..., None] + 0.30*lam[..., None]) \
     + np.array([110, 200, 240.])*0.62*rim[..., None]**1.6 + 255*0.55*spec[..., None]**28 + 255*0.18*spec[..., None]**6
# platinum markers and the wire: polished metal with an environment reflection
sky = np.array([225, 236, 244.]); floor = np.array([18, 30, 40.])
env = floor + (sky-floor)*np.clip((up+0.3)/1.1, 0, 1)[..., None]**1.5
metal = np.array([150, 150, 152.])*(0.08 + 0.5*lam[..., None]) + env*0.62 + 255*1.1*spec[..., None]**70
col = np.where((kd == 0)[..., None], poly, metal)
wire = (kd == 2)
col = np.where(wire[..., None], col*0.72, col)
fres = (1 - np.clip(n[..., 2], 0, 1))**3
col = col*(1 - 0.28*fres[..., None])
rel = np.clip((0.3 - fcm)/1.1, 0, 1)
haze = np.where(wire, 0.0, 0.84*rel)
col = col*(1-haze[..., None]) + INK*haze[..., None]
# the wire fades out toward both of its ends
we = np.clip(np.minimum(alm, 1-alm)/0.1, 0, 1); we = we*we*(3-2*we)
col = np.where(wire[..., None], INK + (col-INK)*we[..., None], col)
col = np.clip(col, 0, 255)

pm = np.where(m[..., None], col, 0.0)
pmd = np.stack([np.array(Image.fromarray(pm[..., c].astype(np.float32), mode='F').resize((W, HH), Image.BOX)) for c in range(3)], -1)
covd = np.array(Image.fromarray(m.astype(np.float32), mode='F').resize((W, HH), Image.BOX))
rgb = pmd/np.maximum(covd, 1e-4)[..., None]
mys, mxs = np.nonzero(covd > 0.02)
x0, x1, y0, y1 = mxs.min(), mxs.max(), mys.min(), mys.max()
mg = int(0.08*(x1-x0))
x0, x1, y0, y1 = max(0, x0-mg), min(W, x1+mg), max(0, y0-mg), min(HH, y1+mg)
rgb = rgb[y0:y1, x0:x1]; covd = covd[y0:y1, x0:x1]
rgba = np.dstack([np.clip(rgb, 0, 255), np.clip(covd, 0, 1)*255]).astype(np.uint8)
out = Image.fromarray(rgba, 'RGBA')
out.save(H/'hero.webp', lossless=True, quality=100, method=6)
if len(sys.argv) > 1:
    prev = Image.new('RGBA', out.size, tuple(int(v) for v in INK) + (255,)); prev.alpha_composite(out); prev.convert('RGB').save(sys.argv[1])
print('size', out.size)
