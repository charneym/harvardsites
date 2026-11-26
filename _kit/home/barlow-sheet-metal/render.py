#!/usr/bin/env python3
"""BARLOW hero (HOME_BRIEF update 2c: a crafted render of the firm's real product). A precision sheet-metal 19-inch
rack-mount electronics enclosure, the kind of CNC punched, folded and assembled case Barlow Sheet Metal makes for the
electronics and electro-mechanical sectors: a folded case with a punched vent field on the lid, pressed side slots,
fold seams and a brushed front panel with punched connector, LED and display cut-outs and slotted rack ears.
Sphere-traced SDF in numpy; brushed steel and aluminium reflecting a cool studio; REAL alpha with a soft contact shadow.
Usage: python3 render.py W H out.png [SS]"""
import sys, math, os, numpy as np
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 400
H = int(sys.argv[2]) if len(sys.argv) > 2 else 300
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 1
FW, FH = W, H; W, H = W*SS, H*SS
f32 = np.float32
def nrm(v): return v/np.linalg.norm(v, axis=-1, keepdims=True)
def sm(a, b, x): x = np.clip((x-a)/(b-a), 0, 1); return x*x*(3-2*x)
BX, BY, BZ = 0.95, 0.27, 0.66     # case half extents
R = 0.03; T = 0.014              # fold radius, sheet thickness
EAR = 0.085                      # rack ear width beyond the case side
PZ = BZ+0.012                    # front panel centre plane
def rbox(px, py, pz, bx, by, bz, r):
    qx = np.abs(px)-bx+r; qy = np.abs(py)-by+r; qz = np.abs(pz)-bz+r
    o = np.sqrt(np.maximum(qx, 0)**2+np.maximum(qy, 0)**2+np.maximum(qz, 0)**2)
    return o+np.minimum(np.maximum(qx, np.maximum(qy, qz)), 0)-r
def rect2(px, py, bx, by, r=0.0):
    qx = np.abs(px)-bx+r; qy = np.abs(py)-by+r
    return np.sqrt(np.maximum(qx, 0)**2+np.maximum(qy, 0)**2)+np.minimum(np.maximum(qx, qy), 0)-r
def cap2(px, py, ax, bx_, y0, r):   # horizontal capsule from x=ax to x=bx_ at y=y0
    t = np.clip(px, ax, bx_)
    return np.sqrt((px-t)**2+(py-y0)**2)-r
# punched cut-outs in the front panel (x, y): display window, LEDs, connector cut-outs, round connector holes, ear slots
def front_cuts(x, y):
    d = rect2(x+0.43, y-0.02, 0.25, 0.1, 0.012)                 # display window
    for i in range(4):
        d = np.minimum(d, np.sqrt((x-(0.06+i*0.055))**2+(y-0.13)**2)-0.012)   # LED holes
    d = np.minimum(d, rect2(x-0.2, y+0.03, 0.08, 0.03, 0.01))   # D-type cut-outs
    d = np.minimum(d, rect2(x-0.2, y+0.13, 0.08, 0.03, 0.01))
    d = np.minimum(d, np.sqrt((x-0.47)**2+(y-0.07)**2)-0.045)   # round connector holes
    d = np.minimum(d, np.sqrt((x-0.62)**2+(y-0.07)**2)-0.045)
    d = np.minimum(d, rect2(x-0.545, y+0.1, 0.075, 0.045, 0.006))  # inlet cut-out
    ex = BX+EAR*0.5
    for sx in (-1, 1):
        for sy in (-1, 1):
            d = np.minimum(d, cap2(x*sx, y, ex-0.018, ex+0.018, sy*0.17, 0.014))
    return d
def parts(p):
    x, y, z = p[..., 0], p[..., 1], p[..., 2]
    # folded case: a hollow round-edged box (front left open behind the panel)
    do = rbox(x, y, z+0.006, BX, BY, BZ-0.006, R)
    case = np.maximum(do, -do-T)
    case = np.maximum(case, z-(BZ-0.02))
    # punched vent field in the lid: staggered round holes
    P = 0.052; rh = 0.017
    gz = np.floor(z/P); off = (np.mod(gz, 2))*0.5
    cx = (np.floor(x/P-off)+0.5+off)*P; cz = (gz+0.5)*P
    hole = np.sqrt((x-cx)**2+(z-cz)**2)-rh
    reg = rect2(x, z+0.1, 0.56, 0.36)
    vent = np.maximum(np.maximum(hole, reg), (BY-0.06)-y)
    case = np.maximum(case, -vent)
    # pressed slots in the sides
    sl = np.full(x.shape, 9.0, f32)
    for k in range(5):
        sl = np.minimum(sl, cap2(z, y, -0.42, 0.18, -0.12+k*0.06, 0.011))
    sl = np.maximum(sl, (BX-0.06)-np.abs(x))
    case = np.maximum(case, -sl)
    # fold seams: lid-to-base joint low on each side, and the back return
    seam = np.minimum(np.abs(y+BY-0.05)-0.0025, np.abs(z+BZ-0.05)-0.0025)
    seam = np.maximum(seam, (BX-0.005)-np.abs(x))
    case = np.maximum(case, -seam)
    # front panel with rack ears, punched cut-outs
    pan = rbox(x, y, z-PZ, BX+EAR, BY+0.004, 0.012, 0.006)
    cuts = np.maximum(front_cuts(x, y), (PZ-0.03)-z)
    pan = np.maximum(pan, -cuts)
    # display: dark glass set back in the window
    disp = rbox(x+0.43, y-0.02, z-(PZ-0.022), 0.25, 0.1, 0.004, 0.004)
    # countersunk screws on the panel and the case side
    scr = np.full(x.shape, 9.0, f32)
    for (sx, sy) in ((-BX+0.04, BY-0.045), (-BX+0.04, -BY+0.045), (BX-0.04, BY-0.045), (BX-0.04, -BY+0.045)):
        q = np.sqrt((x-sx)**2+(y-sy)**2)
        scr = np.minimum(scr, np.maximum(q-0.016, np.abs(z-(PZ+0.012))-0.0025))
    for (sz, sy) in ((0.5, BY-0.07), (-0.5, BY-0.07), (0.5, -BY+0.09), (-0.5, -BY+0.09)):
        q = np.sqrt((z-sz)**2+(y-sy)**2)
        scr = np.minimum(scr, np.maximum(q-0.015, np.abs(np.abs(x)-BX)-0.0035))
    return case, pan, disp, scr, do
def sdf(p):
    a, b, c, d, _ = parts(p); return np.minimum(np.minimum(a, b), np.minimum(c, d))
def mat(p):
    a, b, c, d, do = parts(p)
    m = np.zeros(p.shape[:-1], int)
    m[b < a] = 1
    best = np.minimum(a, b)
    m[(c < best)] = 2; best = np.minimum(best, c)
    m[(d < best)] = 3
    inner = (m == 0) & (do < -T*0.5)
    return m, inner
def Rx(a): c, s = math.cos(a), math.sin(a); return np.array([[1, 0, 0], [0, c, -s], [0, s, c]])
def Ry(a): c, s = math.cos(a), math.sin(a); return np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]])
M = Rx(math.radians(float(os.environ.get('TILT', '24'))))@Ry(math.radians(float(os.environ.get('YAW', '-34'))))
MI = M.T
CEN = np.array([float(os.environ.get('CX', '0.02')), float(os.environ.get('CY', '-0.06')), 0])
SCV = float(os.environ.get('SCV', '0.86'))
ys, xs = np.mgrid[0:H, 0:W]
u = ((xs+.5)/W*2-1)*SCV*W/H; v = (1-(ys+.5)/H*2)*SCV
DIST = float(os.environ.get('DIST', '6.0'))
O1 = np.array([0, 0, DIST])
Dv = nrm(np.stack([u.ravel(), v.ravel(), np.zeros(u.size)], -1)-O1[None])
Ol = np.broadcast_to(O1@MI.T+CEN, Dv.shape).copy(); Dl = Dv@MI.T
N = len(Ol); t = np.full(N, 8.0); hit = np.zeros(N, bool)
bmin = np.array([-BX-EAR-0.02, -BY-0.02, -BZ-0.02]); bmax = -bmin.copy(); bmax[2] = PZ+0.03
with np.errstate(divide='ignore', invalid='ignore'):
    t0 = (bmin-Ol)/Dl; t1 = (bmax-Ol)/Dl
tn = np.nanmax(np.minimum(t0, t1), axis=1); tf = np.nanmin(np.maximum(t0, t1), axis=1)
alive = tf > np.maximum(tn, 0); t = np.where(alive, np.maximum(tn-0.01, 0), t)
for it in range(320):
    idx = np.nonzero(alive)[0]
    if len(idx) == 0: break
    p = (Ol[idx]+Dl[idx]*t[idx, None]).astype(f32)
    d = sdf(p)
    t[idx] += np.maximum(d*0.85, 0.0004)
    done = d < 0.0005
    hit[idx[done]] = True; alive[idx[done]] = False
    alive[idx[t[idx] > tf[idx]+0.02]] = False
print('hits', hit.sum(), 'of', N, file=sys.stderr)
hi = np.nonzero(hit)[0]
Pp = Ol[hi]+Dl[hi]*t[hi, None]
MT, INN = mat(Pp)
e = 0.0008
ex = np.array([e, 0, 0]); ey = np.array([0, e, 0]); ez = np.array([0, 0, e])
Nl = nrm(np.stack([sdf(Pp+ex)-sdf(Pp-ex), sdf(Pp+ey)-sdf(Pp-ey), sdf(Pp+ez)-sdf(Pp-ez)], -1))
Nw = Nl@M.T; Vw = -Dv[hi]
ao = np.ones(len(Pp))
for i, h in enumerate([0.008, 0.02, 0.045, 0.09, 0.16]):
    ao -= (h-np.minimum(sdf(Pp+Nl*h), h))*(0.5**i)*3.0
ao = np.clip(ao, 0.12, 1)
def env(d):
    x, y, z = d[..., 0], d[..., 1], d[..., 2]
    base = np.array([0.07, 0.085, 0.12])*(0.5+0.9*sm(-0.7, 0.9, y))[..., None]
    key = sm(0.15, 0.6, y)*sm(0.6, -0.25, x)*sm(-0.8, 0.2, z)          # big softbox up-left
    strip = sm(0.6, 0.85, x)*sm(0.6, 0.1, np.abs(y-0.1))*sm(-0.5, 0.3, z)  # tall strip right
    top = sm(0.55, 0.8, y)*sm(-0.75, -0.2, z)*sm(0.7, 0.2, np.abs(x))
    front = sm(0.0, 0.9, z)*sm(-0.6, 0.6, y)*sm(0.9, -0.6, x)
    blue = sm(0.2, 0.8, -z)*sm(-0.1, 0.6, -x)*sm(0.5, -0.3, y)              # brand-blue bounce behind
    floor = sm(-0.05, -0.6, y)*0.12
    rim = sm(0.1, 0.0, np.abs(x-0.78))*sm(-0.5, 0.2, y)
    return base + key[..., None]*np.array([0.97, 0.99, 1.0])*2.3 + strip[..., None]*np.array([0.9, 0.95, 1.0])*1.8 \
        + top[..., None]*np.array([0.92, 0.95, 1.0])*2.6 + front[..., None]*np.array([0.85, 0.9, 0.98])*1.5 \
        + blue[..., None]*np.array([0.15, 0.35, 0.95])*0.9 + floor[..., None]*np.array([0.3, 0.34, 0.42]) \
        + rim[..., None]*np.array([0.55, 0.75, 1.0])*1.2
brush = np.array([1.0, 0, 0])@M.T
tan = nrm(np.broadcast_to(brush, Nw.shape)-Nw*(Nw@brush)[:, None]+1e-6)
bit = np.cross(Nw, tan)
rng = np.random.default_rng(5)
acc = np.zeros((len(Pp), 3)); NS = 40
rough_t = np.select([MT == 0, MT == 1, MT == 2, MT == 3], [0.05, 0.13, 0.008, 0.09])[:, None]
rough_b = np.select([MT == 0, MT == 1, MT == 2, MT == 3], [0.05, 0.03, 0.008, 0.09])[:, None]
for s in range(NS):
    a1 = rng.normal(0, 1, len(Pp))[:, None]; a2 = rng.normal(0, 1, len(Pp))[:, None]
    nj = nrm(Nw+tan*a1*rough_t+bit*a2*rough_b)
    cj = (nj*Vw).sum(-1)
    acc += env(nrm(-Vw+2*cj[:, None]*nj))
refl = acc/NS
cosv = np.clip((Nw*Vw).sum(-1), 0, 1)
L1 = nrm(np.array([-0.5, 0.8, 0.45])); L2 = nrm(np.array([0.85, 0.2, 0.35]))
def wrap(n, l, w): return np.clip(((n*l).sum(-1)+w)/(1+w), 0, 1)
dif = wrap(Nw, L1, 0.2)[:, None]*1.0+wrap(Nw, L2, 0.2)[:, None]*np.array([0.62, 0.68, 0.8])*0.45+0.06
col = np.zeros((len(Pp), 3))
# fine brushing grain along the brush direction
gr = np.sin(Pp[:, 1]*1900+np.sin(Pp[:, 2]*37)*3)*0.5+0.5
gr2 = np.sin(Pp[:, 2]*1700+np.sin(Pp[:, 1]*41)*3)*0.5+0.5
F0s = {0: np.array([0.72, 0.74, 0.77]), 1: np.array([0.86, 0.87, 0.89]), 2: np.array([0.04, 0.04, 0.045]), 3: np.array([0.5, 0.51, 0.53])}
for m_, F0 in F0s.items():
    k = MT == m_
    if not k.any(): continue
    fr = F0+(1-F0)*((1-cosv[k])**5)[:, None]
    grain = (0.93+0.07*(gr[k] if m_ == 1 else gr2[k]))[:, None]
    base = refl[k]*fr*grain
    if m_ == 2: base = base + np.array([0.004, 0.006, 0.012])
    else: base = base + dif[k]*np.array([0.05, 0.055, 0.065])
    col[k] = base*ao[k, None]
col[INN] *= 0.12
col = 1-np.exp(-col*float(os.environ.get('EXP', '2.9')))
col = np.clip(col, 0, 1)**1.05
img = np.zeros((N, 4)); img[hi, :3] = col; img[hi, 3] = 1
# soft contact shadow on an invisible floor under the case (real alpha, black)
miss = np.nonzero(~hit)[0]
fy = -BY-0.004
with np.errstate(divide='ignore', invalid='ignore'):
    tt = (fy-Ol[miss, 1])/Dl[miss, 1]
F = Ol[miss]+Dl[miss]*tt[:, None]
dd = rect2(F[:, 0], F[:, 2]-0.0, BX+0.02, BZ*0.98, 0.05)
sh = np.clip(1-np.maximum(dd, 0)/0.22, 0, 1)**2.2*0.62
sh = np.where(dd < 0, 0.62, sh)
img[miss, 3] = np.maximum(img[miss, 3], sh)
img = img.reshape(H, W, 4)
im = Image.fromarray((np.clip(img, 0, 1)*255+.5).astype(np.uint8), 'RGBA')
if SS != 1: im = im.convert('RGBa').resize((FW, FH), Image.LANCZOS).convert('RGBA')
bb = im.getbbox(); print('bbox', bb, file=sys.stderr)
im.save(OUT)
