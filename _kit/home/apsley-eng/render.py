#!/usr/bin/env python3
"""KAMMERER hero (crafted render of their knife-gate valve). Based on the ENGEL (HOME_BRIEF update 2c: a crafted render of the firm's real product). The Hygienic Drive from
engelantriebe.de > Antriebslösungen (Sonderlösungen): an integrated drive in a stainless-steel housing built to Hygienic
Design, IP69/IP69K, with blue seals at both ends, a sealed cable gland on top and the output shaft at the front. Sphere-
traced SDF in numpy; brushed stainless reflecting a studio, blue elastomer seals. Saved with REAL alpha (DJ/DP).
Usage: python3 render.py W H out.png [SS]"""
import sys, math, numpy as np
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 600
H = int(sys.argv[2]) if len(sys.argv) > 2 else 460
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 1
FW, FH = W, H; W, H = W*SS, H*SS
def nrm(v): return v/np.linalg.norm(v, axis=-1, keepdims=True)
def sm(a, b, x): x = np.clip((x-a)/(b-a), 0, 1); return x*x*(3-2*x)
def rbox(p, b, e):
    q = np.abs(p)-(np.array(b)-e)
    return np.linalg.norm(np.maximum(q, 0), axis=-1)+np.minimum(np.max(q, axis=-1), 0)-e
def zcyl(x, y, z, r, z0, z1, e):
    """rounded cylinder about the z axis (the flow axis)"""
    cz = (z0+z1)/2; hz = (z1-z0)/2; rr = np.sqrt(x*x+y*y)
    dx = rr-(r-e); dy = np.abs(z-cz)-(hz-e)
    return np.sqrt(np.maximum(dx, 0)**2+np.maximum(dy, 0)**2)+np.minimum(np.maximum(dx, dy), 0)-e
def ycyl(x, y, z, r, y0, y1, e):
    cy = (y0+y1)/2; hy = (y1-y0)/2; rr = np.sqrt(x*x+z*z)
    dx = rr-(r-e); dy = np.abs(y-cy)-(hy-e)
    return np.sqrt(np.maximum(dx, 0)**2+np.maximum(dy, 0)**2)+np.minimum(np.maximum(dx, dy), 0)-e
def parts(p):
    """A precision mill-turned stainless steel component of the kind Apsley machine in one set-up on their twin-spindle
    mill-turn centres (apsleyeng.co.uk > Services, Plant list: turned, milled, drilled and threaded in a single operation):
    a turned flange with six drilled holes, a body with two milled wrench flats and a cross hole, a relief groove,
    a threaded spigot and a through bore."""
    x, y, z = p[..., 0], p[..., 1], p[..., 2]
    rr = np.sqrt(x*x+y*y)
    fl = zcyl(x, y, z, 1.0, -0.62, -0.40, 0.03)
    for k in range(6):
        a = k*math.pi/3+math.pi/6
        hx, hy = 0.76*math.cos(a), 0.76*math.sin(a)
        fl = np.maximum(fl, -(np.sqrt((x-hx)**2+(y-hy)**2)-0.085))
    bd = zcyl(x, y, z, 0.64, -0.45, 0.40, 0.025)
    bd = np.maximum(bd, -(np.sqrt((rr-0.64)**2+(z-0.06)**2)-0.022))
    flat = np.maximum(np.abs(x)-0.53, -1)
    bd = np.maximum(bd, -np.maximum(-(np.abs(x)-0.53), np.abs(z+0.02)-0.36))
    ch = np.sqrt(x*x+(z+0.05)**2)-0.075
    bd = np.maximum(bd, -ch)
    sp = zcyl(x, y, z, 0.44, 0.36, 1.02, 0.02)
    th = 0.55+0.45*np.sin((z/0.06)*2*math.pi-np.arctan2(y, x))
    thr = (rr-(0.44-0.03*th))*0.6
    thr = np.maximum(thr, np.abs(z-0.75)-0.24)
    sp = np.where((z > 0.52) & (z < 0.99), np.maximum(sp, thr), sp)
    body = np.minimum(np.minimum(fl, bd), sp)
    body = np.maximum(body, -(rr-0.24))
    return body, rr, z
def sdf(p):
    return parts(p)[0]
def mat(p):
    b, rr, z = parts(p)
    m = np.zeros(p.shape[:-1], int)
    m[rr < 0.25] = 3
    return m
def Rx(a): c, s = math.cos(a), math.sin(a); return np.array([[1, 0, 0], [0, c, -s], [0, s, c]])
def Ry(a): c, s = math.cos(a), math.sin(a); return np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]])
def Rz(a): c, s = math.cos(a), math.sin(a); return np.array([[c, -s, 0], [s, c, 0], [0, 0, 1]])
import os
M = Rx(math.radians(float(os.environ.get('AX','18'))))@Ry(math.radians(float(os.environ.get('AY','-50'))))@Rz(math.radians(float(os.environ.get('AZ','-20'))))   # object -> view
MI = M.T
CEN = np.array([0.0, 0.0, 0.2])
SCV = float(__import__('os').environ.get('SCV','1.5'))
ys, xs = np.mgrid[0:H, 0:W]
u = ((xs+.5)/W*2-1)*SCV*W/H; v = (1-(ys+.5)/H*2)*SCV
O = np.stack([u.ravel(), v.ravel(), np.full(u.size, 10.0)], -1)
D = np.array([0, 0, -1.0])
Ol = (O@MI.T)+CEN[None]; Dl = D@MI.T
N = len(Ol); t = np.full(N, 6.0); hit = np.zeros(N, bool); alive = np.ones(N, bool)
for it in range(300):
    idx = np.nonzero(alive)[0]
    if len(idx) == 0: break
    p = Ol[idx]+Dl[None]*t[idx, None]
    d = sdf(p)
    t[idx] += np.maximum(d*0.9, 0.0006)
    done = d < 0.0007
    hit[idx[done]] = True; alive[idx[done]] = False
    alive[idx[t[idx] > 16]] = False
print('hits', hit.sum(), 'of', N, file=sys.stderr)
hi = np.nonzero(hit)[0]
P = Ol[hi]+Dl[None]*t[hi, None]
MT = mat(P)
e = 0.0015
ex = np.array([e, 0, 0]); ey = np.array([0, e, 0]); ez = np.array([0, 0, e])
Nl = nrm(np.stack([sdf(P+ex)-sdf(P-ex), sdf(P+ey)-sdf(P-ey), sdf(P+ez)-sdf(P-ez)], -1))
Nw = Nl@M.T; Vw = -D
ao = np.ones(len(P))
for i, h in enumerate([0.02, 0.05, 0.10, 0.18, 0.3]):
    ao -= (h-np.minimum(sdf(P+Nl*h), h))*(0.5**i)*2.4
ao = np.clip(ao, 0.15, 1)
def env(d):
    x, y, z = d[..., 0], d[..., 1], d[..., 2]
    base = np.array([0.035, 0.05, 0.07])*(0.6+0.8*sm(-0.7, 0.9, y))[..., None]
    key = sm(0.3, 0.62, y)*sm(0.3, -0.2, x)*sm(-0.5, 0.25, z)              # big soft box upper left
    strip = sm(0.55, 0.8, x)*sm(0.75, 0.15, np.abs(y-0.15))*sm(-0.6, 0.2, z)   # tall strip light right
    top = sm(0.8, 0.97, y)                                                    # overhead panel
    warm = sm(0.3, 0.8, -z)*sm(-0.2, 0.5, -x)*sm(0.5, -0.2, y)                # faint warm kicker from behind left
    red = sm(0.35, 0.85, -z)*sm(0.0, 0.6, x)*sm(0.5, -0.3, y)                 # ENGEL-red rim from behind right
    floor = sm(-0.1, -0.6, y)*0.10
    front = sm(0.1, 0.9, z)*sm(-0.5, 0.9, y)*sm(0.6, -0.4, x)
    thin = sm(0.12, 0.0, np.abs(x+0.72))*sm(-0.6, 0.1, y)*sm(-0.4, 0.3, z)    # narrow vertical strip far left
    return base + key[..., None]*np.array([1.0, 0.99, 0.97])*2.4 + strip[..., None]*np.array([0.92, 0.96, 1.0])*1.9 \
        + top[..., None]*np.array([0.9, 0.93, 0.98])*0.9 + warm[..., None]*np.array([0.6, 0.5, 0.4])*0.3 \
        + red[..., None]*np.array([0.1, 0.5, 0.95])*0.55 + floor[..., None]*np.array([0.3, 0.35, 0.42]) + thin[..., None]*np.array([1, 1, 1])*1.6 + front[..., None]*np.array([0.85, 0.92, 0.95])*0.55
Pl = P
# brushed finish: jitter normals mostly around the circumferential direction of the housing (brush along the axis)
ax = np.array([0, 0, 1.0])@M.T
tan = nrm(np.cross(np.broadcast_to(ax, Nw.shape), Nw)+1e-6)
rng = np.random.default_rng(7)
acc = np.zeros((len(P), 3)); NS = 40
streak = np.sin(Pl[:, 0]*0+np.arctan2(Pl[:, 2], Pl[:, 1])*0+0)  # placeholder (kept 0)
for s in range(NS):
    a1 = rng.normal(0, 1, len(P))[:, None]; a2 = rng.normal(0, 1, len(P))[:, None]
    rough = np.where(MT == 1, 0.035, np.where(MT == 3, 0.12, 0.05))[:, None]
    nj = nrm(Nw+tan*a1*rough*1.8+np.cross(tan, Nw)*a2*rough*0.35)
    cj = (nj*Vw).sum(-1)
    acc += env(nrm(-Vw[None]+2*cj[:, None]*nj))
refl = acc/NS
cosv = np.clip((Nw*Vw).sum(-1), 0, 1)
L1 = nrm(np.array([-0.5, 0.65, 0.55])); L2 = nrm(np.array([0.85, 0.1, 0.4]))
def wrap(n, l, w): return np.clip(((n*l).sum(-1)+w)/(1+w), 0, 1)
dif = wrap(Nw, L1, 0.2)[:, None]*1.0+wrap(Nw, L2, 0.2)[:, None]*np.array([0.55, 0.6, 0.7])*0.45+0.06
col = np.zeros((len(P), 3))
steel = (MT == 0)
F0 = np.array([0.62, 0.62, 0.64])
fr = F0+(1-F0)*((1-cosv)**5)[:, None]
rl = np.sqrt(Pl[:, 0]**2+Pl[:, 1]**2)
face = np.abs(Nl[:, 2]) > 0.7
fine = np.where(face, (np.sin(rl*520)*0.5+0.5)*0.10+(np.sin(rl*61+1.1)*0.5+0.5)*0.06, (np.sin(np.arctan2(Pl[:, 1], Pl[:, 0])*0+Pl[:, 2]*900)*0.5+0.5)*0.05)
col[steel] = (refl[steel]*fr[steel]*(0.88+fine[steel, None]) + dif[steel]*np.array([0.11, 0.12, 0.12]))*ao[steel, None]
blue = MT == 1
fb = 0.04+0.96*(1-cosv)**5
CU = np.array([0.95, 0.60, 0.42]); fcu = CU+(1-CU)*((1-cosv)**5)[:, None]
col[blue] = (refl[blue]*fcu[blue]*0.95 + dif[blue]*np.array([0.16, 0.07, 0.04]))*ao[blue, None]
hole = MT == 3
spk = (np.sin(Pl[:, 0]*310)*np.sin(Pl[:, 1]*290+1.3)*np.sin(Pl[:, 2]*270+0.7) > 0.55)*0.10
col[hole] = (dif[hole]*0.035+refl[hole]*(0.16+fb[hole]*0.4)[:, None]*np.array([0.92, 0.97, 1.0])+spk[hole, None]*refl[hole])*ao[hole, None]
col = 1-np.exp(-col*2.7)
col = np.clip(col, 0, 1)**1.04
alp = np.ones(len(P))
img = np.zeros((N, 4)); img[hi, :3] = col; img[hi, 3] = alp
img = img.reshape(H, W, 4)
im = Image.fromarray((np.clip(img, 0, 1)*255+.5).astype(np.uint8), 'RGBA')
if SS != 1: im = im.convert('RGBa').resize((FW, FH), Image.LANCZOS).convert('RGBA')
bb = im.getbbox(); print('bbox', bb, file=sys.stderr)
im.save(OUT)
