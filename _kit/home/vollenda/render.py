#!/usr/bin/env python3
"""VOLLENDA hero (HOME_BRIEF update 2c: a crafted render of the firm's real subject). A polished stainless-steel
product hopper (the steel funnel of their own slider photo on vollenda.de) filled with plastic granulate, the
granulate pouring from its outlet in a stream, as it does into an open-mouth bag on a VBAE gross bagging scale.
Sphere-traced SDF of revolution in numpy; brushed stainless reflecting a studio; cream granulate. REAL alpha (DJ/DP),
the stream fades out inside the image.
Usage: python3 render.py W H out.png [SS]"""
import sys, math, os, numpy as np
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 400
H = int(sys.argv[2]) if len(sys.argv) > 2 else 520
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 1
FW, FH = W, H; W, H = W*SS, H*SS
def nrm(v): return v/np.linalg.norm(v, axis=-1, keepdims=True)
def sm(a, b, x): x = np.clip((x-a)/(b-a), 0, 1); return x*x*(3-2*x)
# hopper profile (r, y): outlet tube, cone, upright band
PROF = [(0.13, -0.42), (0.13, 0.12), (0.86, 0.88), (0.86, 1.12)]
WALL = 0.02
Y_OUT = -0.42
def seg2(px, py, ax, ay, bx, by):
    dx, dy = bx-ax, by-ay
    t = np.clip(((px-ax)*dx+(py-ay)*dy)/(dx*dx+dy*dy), 0, 1)
    return np.sqrt((px-ax-t*dx)**2+(py-ay-t*dy)**2)
def Rcone(y):
    return np.where(y < 0.12, 0.13, np.where(y < 0.88, 0.13+(y-0.12)*(0.73/0.76), 0.86))
def hsh(i, j, k=0):
    v = np.sin(i*127.1+j*311.7+k*74.7)*43758.5453
    return v-np.floor(v)
def parts(p):
    x, y, z = p[..., 0], p[..., 1], p[..., 2]
    rr = np.sqrt(x*x+z*z)
    d = np.full(rr.shape, 9.0)
    for (a, b) in zip(PROF[:-1], PROF[1:]):
        d = np.minimum(d, seg2(rr, y, a[0], a[1], b[0], b[1]))
    shell = d-WALL
    # rolled top lip, a flange bead at the cone/band joint, a bead at the outlet mouth
    lip = np.sqrt((rr-0.875)**2+(y-1.12)**2)-0.036
    bead = np.sqrt((rr-0.885)**2+(y-0.88)**2)-0.022
    mouth = np.sqrt((rr-0.145)**2+(y-Y_OUT)**2)-0.026
    steel = np.minimum(np.minimum(shell, lip), np.minimum(bead, mouth))
    # granulate heaped in the hopper: a bed with a soft draw-down crater over the outlet, made of pellets
    S = 0.062; pr = 0.034
    hgt = 0.66-0.16*np.exp(-(rr/0.32)**2)+0.03*np.sin(x*7.0+1.0)*np.sin(z*6.0)
    gx = np.floor(x/S); gz = np.floor(z/S)
    pel = np.full(rr.shape, 9.0)
    for di in (-1, 0, 1):
        for dj in (-1, 0, 1):
            ci = gx+di; cj = gz+dj
            cx = (ci+0.2+0.6*hsh(ci, cj))*S; cz = (cj+0.2+0.6*hsh(ci, cj, 3))*S
            crr = np.sqrt(cx*cx+cz*cz)
            ch = 0.66-0.16*np.exp(-(crr/0.32)**2)+0.03*np.sin(cx*7.0+1.0)*np.sin(cz*6.0)+(hsh(ci, cj, 7)-0.5)*0.02
            q = np.stack([x-cx, (y-ch)*1.25, z-cz], -1)
            pel = np.minimum(pel, np.linalg.norm(q, axis=-1)/1.25-pr*(0.85+0.3*hsh(ci, cj, 9)))
    bed = np.minimum(pel, (y-(hgt-0.03)))
    inside = rr-(Rcone(y)-WALL-0.004)
    bed = np.maximum(bed, inside)
    bed = np.maximum(bed, 0.1-y)
    # the stream: one pellet per vertical cell, spreading a little as it falls
    C = 0.052; ky = np.floor((y-Y_OUT)/C)
    st = np.full(rr.shape, 9.0)
    for dk in (-1, 0, 1):
        k = ky+dk
        fall = np.clip(-(k*C), 0, None)
        sp = 0.075+fall*0.03
        for lane in range(3):
            a = hsh(k, lane, 1)*6.283; r0 = np.sqrt(hsh(k, lane, 2))*sp
            cx = np.cos(a)*r0; cz = np.sin(a)*r0; cyy = Y_OUT+(k+0.5)*C+(hsh(k, lane, 5)-0.5)*0.02
            q = np.stack([x-cx, (y-cyy)*0.85, z-cz], -1)
            s = np.linalg.norm(q, axis=-1)*0.95-pr*(0.8+0.3*hsh(k, lane, 6))
            s = np.where(k < -1, s, 9.0)
            st = np.minimum(st, s)
    st = np.maximum(st, y-(Y_OUT-0.03))
    st = np.maximum(st, -3.2-y)
    gran = np.minimum(bed, st)
    return steel, gran, y
def sdf(p):
    s, g, y = parts(p); return np.minimum(s, g)
def mat(p):
    s, g, y = parts(p)
    m = np.zeros(p.shape[:-1], int); m[g < s] = 1
    return m
def Rx(a): c, s = math.cos(a), math.sin(a); return np.array([[1, 0, 0], [0, c, -s], [0, s, c]])
def Ry(a): c, s = math.cos(a), math.sin(a); return np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]])
M = Rx(math.radians(float(os.environ.get('TILT', '24'))))@Ry(math.radians(20))   # object -> view
MI = M.T
CEN = np.array([0.0, float(os.environ.get('CY', '-0.55')), 0])
SCV = float(os.environ.get('SCV', '1.95'))
ys, xs = np.mgrid[0:H, 0:W]
u = ((xs+.5)/W*2-1)*SCV*W/H; v = (1-(ys+.5)/H*2)*SCV
O = np.stack([u.ravel(), v.ravel(), np.full(u.size, 10.0)], -1)
D = np.array([0, 0, -1.0])
Ol = (O@MI.T)+CEN[None]; Dl = D@MI.T
N = len(Ol); t = np.full(N, 7.0); hit = np.zeros(N, bool); alive = np.ones(N, bool)
for it in range(260):
    idx = np.nonzero(alive)[0]
    if len(idx) == 0: break
    p = Ol[idx]+Dl[None]*t[idx, None]
    d = sdf(p)
    t[idx] += np.maximum(d*0.8, 0.0006)
    done = d < 0.0008
    hit[idx[done]] = True; alive[idx[done]] = False
    alive[idx[t[idx] > 14]] = False
print('hits', hit.sum(), 'of', N, file=sys.stderr)
hi = np.nonzero(hit)[0]
P = Ol[hi]+Dl[None]*t[hi, None]
MT = mat(P)
e = 0.0012
ex = np.array([e, 0, 0]); ey = np.array([0, e, 0]); ez = np.array([0, 0, e])
Nl = nrm(np.stack([sdf(P+ex)-sdf(P-ex), sdf(P+ey)-sdf(P-ey), sdf(P+ez)-sdf(P-ez)], -1))
Nw = Nl@M.T; Vw = -D
ao = np.ones(len(P))
for i, h in enumerate([0.015, 0.04, 0.08, 0.15, 0.26]):
    ao -= (h-np.minimum(sdf(P+Nl*h), h))*(0.5**i)*2.2
ao = np.clip(ao, 0.18, 1)
def env(d):
    x, y, z = d[..., 0], d[..., 1], d[..., 2]
    base = np.array([0.03, 0.055, 0.04])*(0.6+0.8*sm(-0.7, 0.9, y))[..., None]
    key = sm(0.3, 0.62, y)*sm(0.3, -0.2, x)*sm(-0.5, 0.25, z)
    strip = sm(0.55, 0.8, x)*sm(0.75, 0.15, np.abs(y-0.15))*sm(-0.6, 0.2, z)
    top = sm(0.8, 0.97, y)
    green = sm(0.35, 0.85, -z)*sm(0.0, 0.6, x)*sm(0.5, -0.3, y)
    floor = sm(-0.1, -0.6, y)*0.10
    front = sm(0.1, 0.9, z)*sm(-0.5, 0.9, y)*sm(0.6, -0.4, x)
    thin = sm(0.12, 0.0, np.abs(x+0.72))*sm(-0.6, 0.1, y)*sm(-0.4, 0.3, z)
    return base + key[..., None]*np.array([1.0, 0.99, 0.96])*2.4 + strip[..., None]*np.array([0.94, 0.97, 1.0])*1.9 \
        + top[..., None]*np.array([0.92, 0.95, 0.96])*0.9 + green[..., None]*np.array([0.25, 0.8, 0.3])*0.45 \
        + floor[..., None]*np.array([0.3, 0.38, 0.32]) + thin[..., None]*1.6 + front[..., None]*np.array([0.88, 0.93, 0.9])*0.95
ax = np.array([0, 1.0, 0])@M.T
tan = nrm(np.cross(np.broadcast_to(ax, Nw.shape), Nw)+1e-6)
rng = np.random.default_rng(7)
acc = np.zeros((len(P), 3)); NS = 36
for s in range(NS):
    a1 = rng.normal(0, 1, len(P))[:, None]; a2 = rng.normal(0, 1, len(P))[:, None]
    rough = np.where(MT == 1, 0.25, 0.05)[:, None]
    nj = nrm(Nw+tan*a1*rough*1.6+np.cross(tan, Nw)*a2*rough*0.4)
    cj = (nj*Vw).sum(-1)
    acc += env(nrm(-Vw[None]+2*cj[:, None]*nj))
refl = acc/NS
cosv = np.clip((Nw*Vw).sum(-1), 0, 1)
L1 = nrm(np.array([-0.5, 0.75, 0.5])); L2 = nrm(np.array([0.85, 0.15, 0.4]))
def wrap(n, l, w): return np.clip(((n*l).sum(-1)+w)/(1+w), 0, 1)
dif = wrap(Nw, L1, 0.25)[:, None]*1.0+wrap(Nw, L2, 0.2)[:, None]*np.array([0.6, 0.66, 0.6])*0.45+0.07
col = np.zeros((len(P), 3))
st = MT == 0
F0 = np.array([0.63, 0.63, 0.64])
fr = F0+(1-F0)*((1-cosv)**5)[:, None]
ring = (np.sin(P[:, 1]*700)*0.5+0.5)*0.05
col[st] = (refl[st]*fr[st]*(0.9+ring[st, None]) + dif[st]*np.array([0.1, 0.11, 0.1]))*ao[st, None]
g = MT == 1
GR = np.array([0.95, 0.91, 0.78])
fg = 0.04+0.5*(1-cosv)**5
col[g] = (dif[g]*GR*0.62 + refl[g]*fg[g, None]*0.55)*ao[g, None]
col = 1-np.exp(-col*3.0)
col = np.clip(col, 0, 1)**1.04
alp = np.ones(len(P))
yy = P[:, 1]
alp[g] = np.where(yy[g] < -0.6, np.clip(1-(-yy[g]-1.1)/1.35, 0, 1)**1.4, 1)
img = np.zeros((N, 4)); img[hi, :3] = col; img[hi, 3] = alp
img = img.reshape(H, W, 4)
im = Image.fromarray((np.clip(img, 0, 1)*255+.5).astype(np.uint8), 'RGBA')
if SS != 1: im = im.convert('RGBa').resize((FW, FH), Image.LANCZOS).convert('RGBA')
bb = im.getbbox(); print('bbox', bb, file=sys.stderr)
im.save(OUT)
