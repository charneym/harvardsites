#!/usr/bin/env python3
"""Labfacility hero: a crafted render of their own product, an IEC mineral insulated thermocouple with a
miniature plug (labfacility.com > Temperature Sensors > Thermocouples IEC > Mineral Insulated Thermocouples IEC:
"IEC Mineral Insulated Thermocouple with Miniature Plug"), Type K, so the plug body is in the IEC green.
Sphere-traced SDF in numpy: moulded plastic plug (two halves, a seam, a recessed label panel, one cover screw),
two flat thermocouple pins of different widths, a crimped ferrule and a brushed stainless steel sheath.
Saved with REAL alpha (DJ/DP). Usage: python3 render.py W H out.png [SS]"""
import sys, math, os, numpy as np
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 600
H = int(sys.argv[2]) if len(sys.argv) > 2 else 600
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 1
FW, FH = W, H; W, H = W*SS, H*SS
def nrm(v): return v/np.maximum(np.linalg.norm(v, axis=-1, keepdims=True), 1e-9)
def sm(a, b, x): x = np.clip((x-a)/(b-a), 0, 1); return x*x*(3-2*x)
def rbox(px, py, pz, hx, hy, hz, r):
    qx = np.abs(px)-hx+r; qy = np.abs(py)-hy+r; qz = np.abs(pz)-hz+r
    return np.sqrt(np.maximum(qx, 0)**2+np.maximum(qy, 0)**2+np.maximum(qz, 0)**2)+np.minimum(np.maximum(qx, np.maximum(qy, qz)), 0)-r
def cyl_y(px, py, pz, r, y0, y1):
    d1 = np.sqrt(px*px+pz*pz)-r; d2 = np.abs(py-(y0+y1)/2)-(y1-y0)/2
    return np.sqrt(np.maximum(d1, 0)**2+np.maximum(d2, 0)**2)+np.minimum(np.maximum(d1, d2), 0)
SL = float(os.environ.get('SL', '7.2'))   # sheath tip (y)
def parts(p):
    x, y, z = p[..., 0], p[..., 1], p[..., 2]
    # plug body: pin face at y=-1.6, cable end at y=1.6; full width up to y=.45, then tapering to the cable end
    t = np.clip((y-0.45)/1.15, 0, 1)
    hw = 0.95-0.30*t*t*(3-2*t)
    body = rbox(x*0.95/hw, y, z, 0.95, 1.6, 0.44, 0.13)*np.minimum(1, hw/0.95)
    # the two moulded halves meet at z=0: a fine seam
    body = np.maximum(body, -np.maximum(np.abs(z)-0.014, -(body+0.035)))
    # recessed label panel on the top face, and one cover screw near the cable end
    body = np.maximum(body, -rbox(x, y+0.33, z-0.47, 0.6, 0.62, 0.05, 0.03))
    body = np.maximum(body, -cyl_y(x, z-0.47, y-0.95, 0.13, -0.08, 0.08)) if False else np.maximum(body, -(np.maximum(np.sqrt(x*x+(y-0.95)**2)-0.13, -(z-0.40))))
    for sx, plus in ((-0.40, True), (0.40, False)):
        mk = rbox(x-sx, y+1.24, z-0.44, 0.1, 0.022, 0.03, 0.01)
        if plus: mk = np.minimum(mk, rbox(x-sx, y+1.24, z-0.44, 0.022, 0.1, 0.03, 0.01))
        body = np.minimum(body, mk)
    screw = np.maximum(np.sqrt(x*x+(y-0.95)**2)-0.105, np.abs(z-0.405)-0.025)
    screw = np.maximum(screw, -np.maximum(np.abs(x)-0.018, np.maximum(np.abs(y-0.95)-0.08, -(z-0.41))))
    # flat pins (the two thermocouple legs; different widths so the plug is polarised)
    pa = rbox(x+0.40, y+2.12, z, 0.15, 0.56, 0.045, 0.02)
    pb = rbox(x-0.40, y+2.12, z, 0.11, 0.56, 0.045, 0.02)
    pins = np.minimum(pa, pb)
    # crimped ferrule and the stainless sheath with its rounded tip
    fer = cyl_y(x, y, z, 0.21, 1.45, 2.15)-0.02
    for gy in (1.78, 1.98):
        fer = np.maximum(fer, -(np.sqrt((np.sqrt(x*x+z*z)-0.215)**2+(y-gy)**2)-0.03))
    sh = np.maximum(np.sqrt(x*x+z*z)-0.15, np.maximum(1.9-y, y-SL))
    tip = np.sqrt(x*x+(y-SL)**2+z*z)-0.15
    sh = np.minimum(sh, tip)
    met = np.minimum(np.minimum(pins, fer), sh)
    return body, screw, pins, fer, sh
def sdf(p):
    b, s, pn, f, sh = parts(p)
    return np.minimum(np.minimum(b, s), np.minimum(pn, np.minimum(f, sh)))
def Rx(a): c, s = math.cos(a), math.sin(a); return np.array([[1, 0, 0], [0, c, -s], [0, s, c]])
def Ry(a): c, s = math.cos(a), math.sin(a); return np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]])
def Rz(a): c, s = math.cos(a), math.sin(a); return np.array([[c, -s, 0], [s, c, 0], [0, 0, 1]])
RZ = float(os.environ.get('RZ', '-38')); RX = float(os.environ.get('RX', '-52')); RY = float(os.environ.get('RY', '18'))
M = Rz(math.radians(RZ))@Rx(math.radians(RX))@Ry(math.radians(RY))
MI = M.T
CEN = np.array([0.0, float(os.environ.get('CY', '2.6')), 0])
SCV = float(os.environ.get('SCV', '5.0'))
ys, xs = np.mgrid[0:H, 0:W]
u = ((xs+.5)/W*2-1)*SCV*W/H; v = (1-(ys+.5)/H*2)*SCV
FOC = 40.0
O = np.zeros((u.size, 3)); O[:, 2] = FOC
Dv = nrm(np.stack([u.ravel()*FOC/(FOC), v.ravel(), np.full(u.size, -FOC)], -1))
Ol = (O@MI.T)+CEN[None]; Dl = Dv@MI.T
N = len(Ol); t = np.full(N, FOC-9.0); hit = np.zeros(N, bool); alive = np.ones(N, bool)
for it in range(360):
    idx = np.nonzero(alive)[0]
    if len(idx) == 0: break
    p = Ol[idx]+Dl[idx]*t[idx, None]
    d = sdf(p)
    t[idx] += np.maximum(d*0.7, 0.0004)
    done = d < 0.0008
    hit[idx[done]] = True; alive[idx[done]] = False
    alive[idx[t[idx] > FOC+9]] = False
print('hits', hit.sum(), 'of', N, file=sys.stderr)
hi = np.nonzero(hit)[0]
P = Ol[hi]+Dl[hi]*t[hi, None]
e = 0.0015
ex = np.array([e, 0, 0]); ey = np.array([0, e, 0]); ez = np.array([0, 0, e])
Nl = nrm(np.stack([sdf(P+ex)-sdf(P-ex), sdf(P+ey)-sdf(P-ey), sdf(P+ez)-sdf(P-ez)], -1))
b, s, pn, f, sh = parts(P)
mat = np.argmin(np.stack([b, s, pn, f, sh], -1), -1)   # 0 plastic, 1 screw, 2 pins, 3 ferrule, 4 sheath
Nw = Nl@M.T; Vw = -(Dl[hi]@M.T)
ao = np.ones(len(P))
for i, h in enumerate([0.03, 0.07, 0.14, 0.26, 0.45]):
    ao -= (h-np.minimum(sdf(P+Nl*h), h))*(0.5**i)*1.9
ao = np.clip(ao, 0.15, 1)
def env(d):
    x, y, z = d[..., 0], d[..., 1], d[..., 2]
    base = np.array([0.03, 0.035, 0.045])*(0.6+0.8*sm(-0.7, 0.9, y))[..., None]
    key = sm(0.2, 0.65, y)*sm(0.45, -0.3, x)*sm(-0.4, 0.3, z)            # large softbox up-left
    strip = sm(0.55, 0.8, x)*sm(0.65, 0.1, np.abs(y-0.15))*sm(-0.6, 0.2, z)  # tall strip right
    top = sm(0.82, 0.97, y)
    rim = sm(0.3, 0.85, -z)*sm(-0.1, 0.6, x)*sm(0.5, -0.3, y)
    front = sm(0.2, 0.95, z)*sm(-0.4, 0.8, y)*sm(0.6, -0.4, x)
    floor = sm(-0.1, -0.6, y)*0.1
    return base + key[..., None]*np.array([1.0, 0.98, 0.95])*3.0 + strip[..., None]*np.array([0.92, 0.96, 1.0])*2.4 \
        + top[..., None]*0.8 + rim[..., None]*np.array([0.85, 0.92, 1.0])*0.9 + front[..., None]*0.45 + floor[..., None]*np.array([0.3, 0.34, 0.4])
rng = np.random.default_rng(7)
cosv = np.clip((Nw*Vw).sum(-1), 0, 1)
col = np.zeros((len(P), 3))
# --- metals: brushed along the probe axis (anisotropic), stainless and nickel-plated
axw = np.array([0, 1.0, 0])@M.T
tanc = nrm(np.cross(np.broadcast_to(axw, Nw.shape), Nw)+1e-6)
tana = nrm(np.cross(Nw, tanc)+1e-6)
mm = mat != 0
if mm.any():
    acc = np.zeros((mm.sum(), 3)); NS = 64
    rough = np.where(mat[mm] == 4, 0.05, np.where(mat[mm] == 3, 0.035, 0.09))[:, None]
    for _ in range(NS):
        a1 = rng.normal(0, 1); a2 = rng.normal(0, 1)
        nj = nrm(Nw[mm]+tanc[mm]*a1*rough+tana[mm]*a2*rough*0.25)
        cj = (nj*Vw[mm]).sum(-1)
        acc += env(nrm(-Vw[mm]+2*cj[:, None]*nj))
    refl = acc/NS
    F0 = np.where((mat[mm] == 3)[:, None], np.array([0.80, 0.74, 0.62]), np.array([0.66, 0.66, 0.65]))
    F0 = np.where((mat[mm] == 1)[:, None], np.array([0.62, 0.62, 0.62]), F0)
    F0 = np.where((mat[mm] == 2)[:, None], np.array([0.50, 0.50, 0.49]), F0)
    fr = F0+(1-F0)*((1-cosv[mm])**5)[:, None]
    Pm = P[mm]
    lines = np.sin((Pm[:, 0]*0.0+Pm[:, 2]*0+np.arctan2(Pm[:, 2], Pm[:, 0]))*240)*0.5+0.5
    col[mm] = refl*fr*(0.93+0.06*lines[:, None])+0.006
# --- moulded plastic in the IEC Type K green: diffuse from the studio plus a soft clear-coat reflection
pm = mat == 0
if pm.any():
    n = Nw[pm]; vv = Vw[pm]
    irr = np.zeros((pm.sum(), 3)); NI = 96
    for _ in range(NI):
        r = nrm(np.broadcast_to(rng.normal(0, 1, 3), (pm.sum(), 3)))
        r = np.where(((r*n).sum(-1) < 0)[:, None], -r, r)
        irr += env(r)*(r*n).sum(-1)[:, None]*2
    irr /= NI
    alb = np.array([0.020, 0.30, 0.15])
    # the inset label panel is a touch matter and darker
    Pp = P[pm]
    panel = (np.abs(Pp[:, 0]) < 0.6) & (np.abs(Pp[:, 1]+0.33) < 0.62) & (Pp[:, 2] > 0.40)
    alb = np.where(panel[:, None], alb*0.9, alb)
    acc = np.zeros((pm.sum(), 3)); NS = 48
    for _ in range(NS):
        nj = nrm(n+np.broadcast_to(rng.normal(0, 1, 3), (pm.sum(), 3))*np.where(panel, 0.16, 0.08)[:, None])
        cj = (nj*vv).sum(-1)
        acc += env(nrm(-vv+2*cj[:, None]*nj))
    spec = acc/NS
    fr = 0.04+0.96*(1-cosv[pm])**5
    sss = sm(-0.2, 0.6, (n*np.array([0.0, 0.5, 0.85])).sum(-1))[:, None]*np.array([0.0, 0.05, 0.025])
    col[pm] = alb*irr*0.55+spec*fr[:, None]*0.95+sss
col *= ao[:, None]
col = 1-np.exp(-col*2.3)
col = np.clip(col, 0, 1)**1.0
img = np.zeros((N, 4)); img[hi, :3] = col; img[hi, 3] = 1
img = img.reshape(H, W, 4)
im = Image.fromarray((np.clip(img, 0, 1)*255+.5).astype(np.uint8), 'RGBA')
if SS != 1: im = im.convert('RGBa').resize((FW, FH), Image.LANCZOS).convert('RGBA')
print('bbox', im.getbbox(), file=sys.stderr)
im.save(OUT)
