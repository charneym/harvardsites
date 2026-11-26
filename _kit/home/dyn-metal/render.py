#!/usr/bin/env python3
"""DYN-Metal hero: a crafted render of their real product, a finish-machined flanged bronze bush with lubrication
grooves in the bore (dynmetal.co.uk > Gallery: their own bushes, e.g. the flanged and grooved bushes in images 13 and 27).
Sphere-traced SDF in numpy; turned bronze reflecting a soft studio, saved with REAL alpha (DJ/DP).
Usage: python3 render.py W H out.png [SS]"""
import sys, math, os, numpy as np
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 600
H = int(sys.argv[2]) if len(sys.argv) > 2 else 600
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 1
FW, FH = W, H; W, H = W*SS, H*SS
def nrm(v): return v/np.linalg.norm(v, axis=-1, keepdims=True)
def sm(a, b, x): x = np.clip((x-a)/(b-a), 0, 1); return x*x*(3-2*x)
def ring(rr, y, r0, r1, y0, y1, e):
    """annulus about the y axis with rounded (chamfer-like) edges"""
    qx = np.abs(rr-(r0+r1)/2)-((r1-r0)/2-e); qy = np.abs(y-(y0+y1)/2)-((y1-y0)/2-e)
    return np.sqrt(np.maximum(qx, 0)**2+np.maximum(qy, 0)**2)+np.minimum(np.maximum(qx, qy), 0)-e
RB = 0.70
def parts(p):
    x, y, z = p[..., 0], p[..., 1], p[..., 2]
    rr = np.sqrt(x*x+z*z)
    body = ring(rr, y, RB, 1.0, -1.05, 0.62, 0.025)
    fl = ring(rr, y, RB, 1.42, 0.5, 0.78, 0.025)
    b = np.minimum(body, fl)
    # two circumferential oil grooves in the bore, joined by an axial groove
    for gy in (-0.55, 0.05):
        b = np.maximum(b, -(np.sqrt((rr-RB)**2+(y-gy)**2)-0.045))
    ang = np.arctan2(z, x)
    ax = np.abs(ang-math.radians(115))*RB
    b = np.maximum(b, -np.maximum(np.sqrt(np.maximum(rr-RB, 0)**2+ax**2)-0.04, np.abs(y+0.25)-0.3))
    # radial lube holes through the wall at the groove height
    for a in (math.radians(-60), math.radians(120)):
        c, s = math.cos(a), math.sin(a)
        along = x*c+z*s; perp = -x*s+z*c
        b = np.maximum(b, -np.maximum(np.sqrt(perp**2+(y-0.05)**2)-0.06, np.abs(along-0.85)-0.3))
    # six bolt holes in the flange
    for k in range(6):
        a = k*math.pi/3+math.radians(15); hx, hz = 1.21*math.cos(a), 1.21*math.sin(a)
        b = np.maximum(b, -np.maximum(np.sqrt((x-hx)**2+(z-hz)**2)-0.075, np.abs(y-0.64)-0.3))
    return b, rr
def sdf(p): return parts(p)[0]
def Rx(a): c, s = math.cos(a), math.sin(a); return np.array([[1, 0, 0], [0, c, -s], [0, s, c]])
def Ry(a): c, s = math.cos(a), math.sin(a); return np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]])
def Rz(a): c, s = math.cos(a), math.sin(a); return np.array([[c, -s, 0], [s, c, 0], [0, 0, 1]])
M = Rx(math.radians(float(os.environ.get('TILT', '30'))))@Ry(math.radians(-20))@Rz(math.radians(-4))
MI = M.T
CEN = np.array([0.0, -0.08, 0])
SCV = float(os.environ.get('SCV', '1.72'))
ys, xs = np.mgrid[0:H, 0:W]
u = ((xs+.5)/W*2-1)*SCV*W/H; v = (1-(ys+.5)/H*2)*SCV
# a long-lens perspective
FOC = 14.0
O = np.zeros((u.size, 3)); O[:, 2] = FOC
Dv = nrm(np.stack([u.ravel(), v.ravel(), np.full(u.size, -FOC)], -1))
Ol = (O@MI.T)+CEN[None]; Dl = Dv@MI.T
N = len(Ol); t = np.full(N, FOC-3.5); hit = np.zeros(N, bool); alive = np.ones(N, bool)
for it in range(320):
    idx = np.nonzero(alive)[0]
    if len(idx) == 0: break
    p = Ol[idx]+Dl[idx]*t[idx, None]
    d = sdf(p)
    t[idx] += np.maximum(d*0.85, 0.0005)
    done = d < 0.0006
    hit[idx[done]] = True; alive[idx[done]] = False
    alive[idx[t[idx] > FOC+4]] = False
print('hits', hit.sum(), 'of', N, file=sys.stderr)
hi = np.nonzero(hit)[0]
P = Ol[hi]+Dl[hi]*t[hi, None]
e = 0.0012
ex = np.array([e, 0, 0]); ey = np.array([0, e, 0]); ez = np.array([0, 0, e])
Nl = nrm(np.stack([sdf(P+ex)-sdf(P-ex), sdf(P+ey)-sdf(P-ey), sdf(P+ez)-sdf(P-ez)], -1))
Nw = Nl@M.T; Vw = -(Dl[hi]@M.T)
ao = np.ones(len(P))
for i, h in enumerate([0.02, 0.05, 0.10, 0.18, 0.32]):
    ao -= (h-np.minimum(sdf(P+Nl*h), h))*(0.5**i)*2.2
ao = np.clip(ao, 0.12, 1)
def env(d):
    x, y, z = d[..., 0], d[..., 1], d[..., 2]
    base = np.array([0.035, 0.032, 0.03])*(0.6+0.8*sm(-0.7, 0.9, y))[..., None]
    key = sm(0.25, 0.6, y)*sm(0.35, -0.25, x)*sm(-0.5, 0.25, z)
    strip = sm(0.5, 0.78, x)*sm(0.7, 0.1, np.abs(y-0.12))*sm(-0.6, 0.2, z)
    top = sm(0.8, 0.97, y)
    rim = sm(0.35, 0.85, -z)*sm(-0.1, 0.6, x)*sm(0.5, -0.3, y)
    floor = sm(-0.1, -0.6, y)*0.12
    front = sm(0.1, 0.9, z)*sm(-0.5, 0.9, y)*sm(0.6, -0.4, x)
    thin = sm(0.1, 0.0, np.abs(x+0.7))*sm(-0.6, 0.1, y)*sm(-0.4, 0.3, z)
    low = sm(-0.25, -0.55, y)*sm(0.22, 0.05, np.abs(x-0.42))
    low2 = sm(-0.3, -0.6, y)*sm(0.3, 0.1, np.abs(x+0.5))
    return low[..., None]*np.array([1.0, 0.96, 0.9])*2.4 + low2[..., None]*0.7 + base + key[..., None]*np.array([1.0, 0.97, 0.92])*3.0 + strip[..., None]*np.array([1.0, 0.97, 0.93])*2.6 \
        + top[..., None]*np.array([0.95, 0.93, 0.9])*0.9 + rim[..., None]*np.array([1.0, 0.85, 0.6])*0.8 \
        + floor[..., None]*np.array([0.4, 0.36, 0.3]) + thin[..., None]*2.2 + front[..., None]*np.array([0.95, 0.92, 0.88])*0.5
Pl = P
rr = np.sqrt(Pl[:, 0]**2+Pl[:, 2]**2)
# turned finish: the brushing runs around the axis, so scatter normals along the axis direction (anisotropic)
axw = np.array([0, 1.0, 0])@M.T
tanc = nrm(np.cross(np.broadcast_to(axw, Nw.shape), Nw)+1e-6)   # circumferential
tana = nrm(np.cross(Nw, tanc)+1e-6)                              # along-axis / radial on faces
rng = np.random.default_rng(11)
acc = np.zeros((len(P), 3)); NS = 36
for s in range(NS):
    a1 = rng.normal(0, 1, len(P))[:, None]; a2 = rng.normal(0, 1, len(P))[:, None]
    nj = nrm(Nw+tana*a1*0.022+tanc*a2*0.006)
    cj = (nj*Vw).sum(-1)
    acc += env(nrm(-Vw+2*cj[:, None]*nj))
refl = acc/NS
cosv = np.clip((Nw*Vw).sum(-1), 0, 1)
F0 = np.array([0.97, 0.74, 0.50])   # tin bronze
fr = F0+(1-F0)*((1-cosv)**5)[:, None]
L1 = nrm(np.array([-0.5, 0.65, 0.55]))
dif = np.clip(((Nw*L1).sum(-1)+0.2)/1.2, 0, 1)[:, None]*np.array([0.5, 0.36, 0.2])*0.16+0.01
# fine turning lines (radius on faces, height on cylinders) and a faint cast-grain mottle
face = np.abs(Nl[:, 1]) > 0.7
lines = np.where(face, np.sin(rr*900)*0.5+0.5, np.sin(Pl[:, 1]*820)*0.5+0.5)
mott = (np.sin(Pl[:, 0]*37+1)*np.sin(Pl[:, 2]*41+2)*np.sin(Pl[:, 1]*29))*0.04
col = (refl*fr*(0.9+0.07*lines[:, None]+mott[:, None]) + dif)*ao[:, None]
col = 1-np.exp(-col*2.5)
col = np.clip(col, 0, 1)**1.02
img = np.zeros((N, 4)); img[hi, :3] = col; img[hi, 3] = 1
img = img.reshape(H, W, 4)
im = Image.fromarray((np.clip(img, 0, 1)*255+.5).astype(np.uint8), 'RGBA')
if SS != 1: im = im.convert('RGBa').resize((FW, FH), Image.LANCZOS).convert('RGBA')
print('bbox', im.getbbox(), file=sys.stderr)
im.save(OUT)
