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
    """An electron-beam welded spur gear assembly of the kind EBP make (ebpglobal.com > Gallery: Gears; Applications:
    'Gear and Shaft assemblies', 'Bearing Assemblies (dissimilar materials)'; Electron Beam Welding: 'Distortion low
    enough to weld finish ground gears'): a finish-ground spur gear rim with 44 teeth, a thin web pierced by ten
    lightening holes, and a separate hub joined to the web by one narrow EB weld seam on each face."""
    x, y, z = p[..., 0], p[..., 1], p[..., 2]
    rr = np.sqrt(x*x+y*y); th = np.arctan2(y, x)
    NT = 44
    ph = np.mod(th*NT/(2*math.pi), 1.0)
    tooth = np.clip(1.0-np.abs(ph-0.5)*2.0, 0, 1)
    tooth = np.clip((tooth-0.12)*1.9, 0, 1)
    Ro = 0.905+0.085*tooth
    rim = np.maximum(np.maximum((rr-Ro)*0.55, 0.80-rr), np.abs(z)-0.115)
    web = np.maximum(np.maximum(rr-0.83, 0.385-rr), np.abs(z)-0.045)
    for k in range(10):
        a = k*2*math.pi/10+0.16
        hx, hy = 0.605*math.cos(a), 0.605*math.sin(a)
        web = np.maximum(web, -(np.sqrt((x-hx)**2+(y-hy)**2)-0.112))
    hub = np.maximum(np.maximum(rr-0.375, 0.205-rr), np.abs(z)-0.19)
    hub = np.maximum(hub, -np.maximum(rr-0.24, np.abs(z)-0.15))*1.0
    hub = np.minimum(hub, np.maximum(np.maximum(rr-0.375, 0.205-rr), np.abs(z)-0.19))
    hub = np.maximum(hub, 0.205-rr)
    # chamfer on the hub ends
    hub = np.maximum(hub, (np.abs(z)+rr)*0.7071-(0.19+0.375-0.02)*0.7071)
    bead = np.sqrt((rr-0.381)**2+(np.abs(z)-0.045)**2)-0.0135
    body = np.minimum(np.minimum(rim, web), np.minimum(hub, bead))
    return body, rr, z, rim, web, hub, bead
def sdf(p):
    return parts(p)[0]
def mat(p):
    b, rr, z, rim, web, hub, bead = parts(p)
    m = np.zeros(p.shape[:-1], int)
    m[hub <= np.minimum(rim, web)+1e-4] = 1
    m[(bead < 0.004) & (bead <= hub+0.002)] = 2
    m[rr < 0.212] = 3
    return m
def Rx(a): c, s = math.cos(a), math.sin(a); return np.array([[1, 0, 0], [0, c, -s], [0, s, c]])
def Ry(a): c, s = math.cos(a), math.sin(a); return np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]])
def Rz(a): c, s = math.cos(a), math.sin(a); return np.array([[c, -s, 0], [s, c, 0], [0, 0, 1]])
import os
M = Rx(math.radians(float(os.environ.get('AX','-28'))))@Ry(math.radians(float(os.environ.get('AY','34'))))@Rz(math.radians(float(os.environ.get('AZ','8'))))   # object -> view
MI = M.T
CEN = np.array([0.0, 0.0, 0.0])
SCV = float(__import__('os').environ.get('SCV','1.12'))
ys, xs = np.mgrid[0:H, 0:W]
u = ((xs+.5)/W*2-1)*SCV*W/H; v = (1-(ys+.5)/H*2)*SCV
FC = float(os.environ.get('FC', '5.0'))   # mild perspective: camera FC units in front of the object
O = np.tile(np.array([0, 0, FC]), (u.size, 1))
D = nrm(np.stack([u.ravel(), v.ravel(), np.full(u.size, -FC)], -1))
Ol = (O@MI.T)+CEN[None]; Dl = D@MI.T
N = len(Ol); t = np.full(N, FC-1.6); hit = np.zeros(N, bool); alive = np.ones(N, bool)
for it in range(300):
    idx = np.nonzero(alive)[0]
    if len(idx) == 0: break
    p = Ol[idx]+Dl[idx]*t[idx, None]
    d = sdf(p)
    t[idx] += np.maximum(d*0.9, 0.0006)
    done = d < 0.0007
    hit[idx[done]] = True; alive[idx[done]] = False
    alive[idx[t[idx] > FC+3]] = False
print('hits', hit.sum(), 'of', N, file=sys.stderr)
hi = np.nonzero(hit)[0]
P = Ol[hi]+Dl[hi]*t[hi, None]
MT = mat(P)
e = 0.0015
ex = np.array([e, 0, 0]); ey = np.array([0, e, 0]); ez = np.array([0, 0, e])
Nl = nrm(np.stack([sdf(P+ex)-sdf(P-ex), sdf(P+ey)-sdf(P-ey), sdf(P+ez)-sdf(P-ez)], -1))
Nw = Nl@M.T; Vw = -D[hi]
ao = np.ones(len(P))
for i, h in enumerate([0.02, 0.05, 0.10, 0.18, 0.3]):
    ao -= (h-np.minimum(sdf(P+Nl*h), h))*(0.5**i)*2.4
ao = np.clip(ao, 0.15, 1)
def env(d):
    """a dark studio: a tall softbox upper left with a hard edge, a narrow strip right, an overhead panel, an EBP-red rim
    from behind right and a faint warm kicker; broad gradients so flat ground faces carry a falloff, never one flat tone"""
    x, y, z = d[..., 0], d[..., 1], d[..., 2]
    base = np.array([0.03, 0.03, 0.035])*(0.5+0.9*sm(-0.8, 0.9, y))[..., None]
    key = sm(0.05, 0.55, y)*sm(0.35, -0.45, x)*sm(-0.6, 0.3, z)*(0.35+0.65*sm(-0.1, -0.45, x))
    strip = sm(0.5, 0.72, x)*sm(0.6, 0.1, np.abs(y-0.1))*sm(-0.6, 0.2, z)
    top = sm(0.78, 0.97, y)
    red = sm(0.3, 0.85, -z)*sm(-0.1, 0.6, x)*sm(0.6, -0.4, y)
    warm = sm(0.3, 0.8, -z)*sm(-0.2, 0.5, -x)*sm(0.5, -0.2, y)
    floor = sm(-0.1, -0.7, y)*0.08
    return base + key[..., None]*np.array([1.0, 0.98, 0.95])*2.1 + strip[..., None]*np.array([0.95, 0.96, 1.0])*1.7 \
        + top[..., None]*np.array([0.9, 0.92, 0.95])*0.7 + red[..., None]*np.array([0.95, 0.10, 0.04])*0.75 \
        + warm[..., None]*np.array([0.6, 0.45, 0.3])*0.25 + floor[..., None]*np.array([0.35, 0.33, 0.32])
Pl = P
# brushed finish: jitter normals mostly around the circumferential direction of the housing (brush along the axis)
ax = np.array([0, 0, 1.0])@M.T
rad = np.stack([P[:, 0], P[:, 1], np.zeros(len(P))], -1); rad = nrm(rad+1e-6)@M.T
tan = nrm(rad-(rad*Nw).sum(-1, keepdims=True)*Nw+1e-6)
rng = np.random.default_rng(7)
acc = np.zeros((len(P), 3)); NS = int(os.environ.get('NS', '48'))
streak = np.sin(Pl[:, 0]*0+np.arctan2(Pl[:, 2], Pl[:, 1])*0+0)  # placeholder (kept 0)
for s in range(NS):
    a1 = rng.normal(0, 1, len(P))[:, None]; a2 = rng.normal(0, 1, len(P))[:, None]
    rough = np.where(MT == 1, 0.07, np.where(MT == 3, 0.12, np.where(MT == 2, 0.09, 0.03)))[:, None]
    nj = nrm(Nw+tan*a1*rough*5.0+np.cross(tan, Nw)*a2*rough*0.4)
    cj = (nj*Vw).sum(-1)
    acc += env(nrm(-Vw+2*cj[:, None]*nj))
refl = acc/NS
cosv = np.clip((Nw*Vw).sum(-1), 0, 1)
L1 = nrm(np.array([-0.5, 0.65, 0.55])); L2 = nrm(np.array([0.85, 0.1, 0.4]))
def wrap(n, l, w): return np.clip(((n*l).sum(-1)+w)/(1+w), 0, 1)
dif = wrap(Nw, L1, 0.2)[:, None]*1.0+wrap(Nw, L2, 0.2)[:, None]*np.array([0.55, 0.6, 0.7])*0.45+0.06
col = np.zeros((len(P), 3))
rl = np.sqrt(Pl[:, 0]**2+Pl[:, 1]**2)
face = np.abs(Nl[:, 2]) > 0.7
fb = ((1-cosv)**5)[:, None]
# 0: the finish-ground gear (bright ground steel, fine circular grind lines on the faces)
g = MT == 0
F0 = np.array([0.64, 0.64, 0.66]); fr = F0+(1-F0)*fb
fine = np.where(face, (np.sin(rl*700)*0.5+0.5)*0.08+(np.sin(rl*83+1.1)*0.5+0.5)*0.05, 0.04)
col[g] = (refl[g]*fr[g]*(0.9+fine[g, None]) + dif[g]*np.array([0.10, 0.10, 0.11]))*ao[g, None]
# 1: the hub, a different alloy (satin, slightly warmer)
h = MT == 1
F1 = np.array([0.56, 0.53, 0.50]); f1 = F1+(1-F1)*fb
col[h] = (refl[h]*f1[h]*0.85 + dif[h]*np.array([0.13, 0.12, 0.11]))*ao[h, None]
# 2: the EB weld seam, a narrow bead with a faint straw heat tint
wd = MT == 2
F2 = np.array([0.70, 0.58, 0.38]); f2 = F2+(1-F2)*fb
rip = (np.sin(np.arctan2(Pl[:, 1], Pl[:, 0])*260)*0.5+0.5)*0.12
col[wd] = (refl[wd]*f2[wd]*(0.78+rip[wd, None]) + dif[wd]*np.array([0.14, 0.11, 0.07]))*ao[wd, None]
# 3: the bore
hole = MT == 3
col[hole] = (dif[hole]*0.04+refl[hole]*(0.14+fb[hole]*0.4)*np.array([0.95, 0.95, 0.97]))*ao[hole, None]
col = 1-np.exp(-col*float(os.environ.get('EXP', '2.0')))
col = np.clip(col, 0, 1)**1.04
alp = np.ones(len(P))
img = np.zeros((N, 4)); img[hi, :3] = col; img[hi, 3] = alp
img = img.reshape(H, W, 4)
im = Image.fromarray((np.clip(img, 0, 1)*255+.5).astype(np.uint8), 'RGBA')
if SS != 1: im = im.convert('RGBa').resize((FW, FH), Image.LANCZOS).convert('RGBA')
bb = im.getbbox(); print('bbox', bb, file=sys.stderr)
im.save(OUT)
