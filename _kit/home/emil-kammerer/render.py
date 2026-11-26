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
    """Kammerer knife-gate valve (Trennschieber) with hand drive, as in their own product film: a slim vertical gate
    housing, a round flanged body with a bolt circle (DIN EN 1092-1, PN10 style), the bore, a top plate, the spindle
    tube and a T-handle with red knobs."""
    x, y, z = p[..., 0], p[..., 1], p[..., 2]
    box = rbox(np.stack([x, y-0.17, z], -1), (0.62, 1.37, 0.19), 0.05)
    fl = zcyl(x, y, z, 1.0, -0.29, 0.29, 0.045)
    rf = zcyl(x, y, z, 0.70, -0.335, 0.335, 0.02)
    rr = np.sqrt(x*x+y*y); a = np.arctan2(y, x)
    a2 = np.mod(a+math.pi/12, math.pi/6)-math.pi/12
    hx = rr*np.cos(a2)-0.85; hy = rr*np.sin(a2)
    holes = np.sqrt(hx*hx+hy*hy)-0.058
    fl = np.maximum(fl, -holes)
    # a shallow seal groove on the raised face
    rf = np.maximum(rf, -(np.sqrt((rr-0.585)**2+(np.abs(z)-0.335)**2)-0.022))
    # top plate and foot plate
    tp = rbox(np.stack([x, y-1.6, z], -1), (0.74, 0.07, 0.29), 0.025)
    ft = rbox(np.stack([x, y+1.255, z], -1), (0.74, 0.065, 0.29), 0.025)
    # bolts on the top plate (axis y)
    bl = np.full(x.shape, 9.0)
    for bx in (-0.56, 0.56):
        for bz in (-0.17, 0.17):
            bl = np.minimum(bl, ycyl(x-bx, y, z-bz, 0.065, 1.6, 1.73, 0.012))
    # spindle guide tube, the spindle, the cross bar of the T-handle
    tube = ycyl(x, y, z, 0.15, 1.62, 2.34, 0.02)
    yoke = ycyl(x, y, z, 0.24, 1.62, 1.76, 0.02)
    sp = ycyl(x, y, z, 0.07, 2.3, 2.66, 0.01)
    hub = ycyl(x, y, z, 0.12, 2.56, 2.72, 0.02)
    bar = np.sqrt(np.maximum(np.abs(x)-0.5, 0)**2+(y-2.64)**2+z*z)-0.05
    knob = np.minimum(np.sqrt((x-0.58)**2+(y-2.64)**2+z*z)-0.105, np.sqrt((x+0.58)**2+(y-2.64)**2+z*z)-0.105)
    steel = np.minimum.reduce([box, fl, rf, tp, ft, bl, tube, yoke, sp, hub, bar])
    bore = zcyl(x, y, z, 0.47, -0.6, 0.6, 0.0)
    steel = np.maximum(steel, -bore)
    # the elastomer seat ring just inside the bore (dark FKM)
    seat = np.maximum(np.abs(np.sqrt(x*x+y*y)-0.47)-0.025, np.abs(z)-0.07)
    return steel, knob, seat
def sdf(p):
    s, k, se = parts(p); return np.minimum(np.minimum(s, k), se)
def mat(p):
    s, k, se = parts(p)
    m = np.zeros(p.shape[:-1], int); m[k < np.minimum(s, se)] = 1; m[se < np.minimum(s, k)] = 3
    return m
def Rx(a): c, s = math.cos(a), math.sin(a); return np.array([[1, 0, 0], [0, c, -s], [0, s, c]])
def Ry(a): c, s = math.cos(a), math.sin(a); return np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]])
def Rz(a): c, s = math.cos(a), math.sin(a); return np.array([[c, -s, 0], [s, c, 0], [0, 0, 1]])
M = Rx(math.radians(14))@Ry(math.radians(-32))   # object -> view
MI = M.T
CEN = np.array([0.0, 0.70, 0])
SCV = 2.3
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
    thin = sm(0.12, 0.0, np.abs(x+0.72))*sm(-0.6, 0.1, y)*sm(-0.4, 0.3, z)    # narrow vertical strip far left
    return base + key[..., None]*np.array([1.0, 0.99, 0.97])*2.4 + strip[..., None]*np.array([0.92, 0.96, 1.0])*1.9 \
        + top[..., None]*np.array([0.9, 0.93, 0.98])*0.9 + warm[..., None]*np.array([0.6, 0.5, 0.4])*0.3 \
        + red[..., None]*np.array([0.2, 0.3, 0.95])*0.45 + floor[..., None]*np.array([0.3, 0.35, 0.42]) + thin[..., None]*np.array([1, 1, 1])*1.6
Pl = P
# brushed finish: jitter normals mostly around the circumferential direction of the housing (brush along the axis)
ax = np.array([0, 1.0, 0])@M.T
tan = nrm(np.cross(np.broadcast_to(ax, Nw.shape), Nw)+1e-6)
rng = np.random.default_rng(7)
acc = np.zeros((len(P), 3)); NS = 40
streak = np.sin(Pl[:, 0]*0+np.arctan2(Pl[:, 2], Pl[:, 1])*0+0)  # placeholder (kept 0)
for s in range(NS):
    a1 = rng.normal(0, 1, len(P))[:, None]; a2 = rng.normal(0, 1, len(P))[:, None]
    rough = np.where(MT == 1, 0.08, np.where(MT == 3, 0.3, 0.045))[:, None]
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
fine = (np.sin(Pl[:, 0]*700+Pl[:, 2]*40)*0.5+0.5)*0.04  # micro brushing streaks
col[steel] = (refl[steel]*fr[steel]*(0.95+fine[steel, None]) + dif[steel]*np.array([0.2, 0.205, 0.215]))*ao[steel, None]
blue = MT == 1
fb = 0.04+0.96*(1-cosv)**5
col[blue] = (dif[blue]*np.array([0.62, 0.035, 0.04])*0.9 + refl[blue]*(0.06+0.5*fb[blue])[:, None])*ao[blue, None]
hole = MT == 3
col[hole] = (dif[hole]*0.03+refl[hole]*0.05)*ao[hole, None]
col = 1-np.exp(-col*2.7)
col = np.clip(col, 0, 1)**1.04
img = np.zeros((N, 4)); img[hi, :3] = col; img[hi, 3] = 1
img = img.reshape(H, W, 4)
im = Image.fromarray((np.clip(img, 0, 1)*255+.5).astype(np.uint8), 'RGBA')
if SS != 1: im = im.convert('RGBa').resize((FW, FH), Image.LANCZOS).convert('RGBA')
bb = im.getbbox(); print('bbox', bb, file=sys.stderr)
im.save(OUT)
