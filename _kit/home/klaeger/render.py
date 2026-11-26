#!/usr/bin/env python3
"""Kläger hero (HOME_BRIEF update 2c: a crafted render of the firm's real product). One injection-moulded zirconia
(ZrO2) bone screw with an inner-hex head, as Kläger makes them by CIM in Dornstetten (klaeger.de > Ceramic in Branches >
Medical technology: "Ceramic screws", zirconia, lengths 5-13 mm, inner or outer hex, MRT compatible), seen diagonally like
a catalogue product shot. Sphere-traced SDF in numpy; sintered zirconia is a warm satin white with a soft sheen and a
little light bleeding through thin edges (wrap lighting). Studio light on the navy page ink with a faint Kläger-blue
kicker. Saved with REAL alpha (coverage only; no ground of its own, DJ/DP).
Usage: python3 render.py W H out.png [SS]"""
import sys, math, json, numpy as np
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 500
H = int(sys.argv[2]) if len(sys.argv) > 2 else 660
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 1
FW, FH = W, H; W, H = W*SS, H*SS
def nrm(v): return v/np.linalg.norm(v, axis=-1, keepdims=True)
def sm(a, b, x): x = np.clip((x-a)/(b-a), 0, 1); return x*x*(3-2*x)

# ---- the screw in its own frame: axis along +y, tip at y=0, head on top ----
RMAJ, RMIN = 0.62, 0.44       # thread major / minor radius
PT = 0.46                     # pitch
LT = 4.6                      # length of the threaded part (incl. tip)
TIPL = 1.0                    # length of the tapered tip
YH0, YH1 = LT+0.35, LT+1.25   # head: neck to top
RH = 1.02                     # head radius
HEX = 0.40                    # hex socket inradius
HD = 0.55                     # socket depth

def sdf(p):
    x, y, z = p[..., 0], p[..., 1], p[..., 2]
    r = np.sqrt(x*x+z*z)
    th = np.arctan2(z, x)
    # helical thread profile (symmetric trapezoid), fading into the tip and into a plain neck
    f = np.mod(y - th/(2*math.pi)*PT, PT)/PT
    tri = np.clip(1.25-np.abs(2*f-1)*1.6, 0, 1)
    tip = sm(0.0, TIPL, y)
    rr = (RMIN + (RMAJ-RMIN)*tri*sm(0.05, 0.55, y)*(1-sm(LT-0.15, LT+0.1, y)))*(0.08+0.92*np.sqrt(tip))
    rr = np.where(y > LT+0.1, RMIN+0.06, rr)
    d = (r-rr)*0.55
    d = np.maximum(d, -y)
    d = np.maximum(d, y-YH0-0.1)
    # head: a rounded cylinder (pan head) with a conical underside meeting the neck
    hy = (YH0+YH1)/2; hh = (YH1-YH0)/2
    qx = r-(RH-0.18); qy = np.abs(y-hy)-(hh-0.18)
    dh = np.sqrt(np.maximum(qx, 0)**2+np.maximum(qy, 0)**2)+np.minimum(np.maximum(qx, qy), 0)-0.18
    cone = (r-(RMIN+0.06)-(y-(LT-0.05))*1.05)*0.68
    cone = np.maximum(cone, y-YH0-0.05); cone = np.maximum(cone, (LT-0.05)-y)
    d = np.minimum(np.minimum(d, dh), cone)
    # hexagonal socket in the head
    a = np.mod(th+math.pi/6, math.pi/3)-math.pi/6
    hx = r*np.cos(a)-HEX
    sock = np.maximum(hx, (YH1-HD)-y)
    d = np.maximum(d, -sock)
    return d

TILT = math.radians(-38); YAW = math.radians(10); PITCH_C = math.radians(34)
def Rz(a): c, s = math.cos(a), math.sin(a); return np.array([[c, -s, 0], [s, c, 0], [0, 0, 1]])
def Rx(a): c, s = math.cos(a), math.sin(a); return np.array([[1, 0, 0], [0, c, -s], [0, s, c]])
def Ry(a): c, s = math.cos(a), math.sin(a); return np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]])
M = Rz(TILT)@Rx(PITCH_C)@Ry(YAW)
MI = M.T
CEN = np.array([0, YH1/2, 0])

SCV = 3.55
ys, xs = np.mgrid[0:H, 0:W]
u = ((xs+.5)/W*2-1)*SCV*W/H; v = (1-(ys+.5)/H*2)*SCV
O = np.stack([u.ravel(), v.ravel(), np.full(u.size, 20.0)], -1)
D = np.array([0, 0, -1.0])
Ol = (O@MI.T)+CEN[None]
Dl = D@MI.T

N = len(Ol); t = np.full(N, 12.0); hit = np.zeros(N, bool); alive = np.ones(N, bool)
for it in range(400):
    idx = np.nonzero(alive)[0]
    if len(idx) == 0: break
    p = Ol[idx]+Dl[None]*t[idx, None]
    d = sdf(p)
    t[idx] += np.maximum(d, 0.001)
    done = d < 0.0009
    hit[idx[done]] = True; alive[idx[done]] = False
    alive[idx[t[idx] > 28]] = False
print('hits', hit.sum(), 'of', N, file=sys.stderr)

hi = np.nonzero(hit)[0]
P = Ol[hi]+Dl[None]*t[hi, None]
e = 0.002
ex = np.array([e, 0, 0]); ey = np.array([0, e, 0]); ez = np.array([0, 0, e])
Nl = nrm(np.stack([sdf(P+ex)-sdf(P-ex), sdf(P+ey)-sdf(P-ey), sdf(P+ez)-sdf(P-ez)], -1))
Nw = Nl@M.T
Vw = -D
ao = np.ones(len(P))
for i, h in enumerate([0.03, 0.07, 0.13, 0.22, 0.36]):
    ao -= (h-np.minimum(sdf(P+Nl*h), h))*(0.5**i)*2.6
ao = np.clip(ao, 0.12, 1)

def env(d):
    x, y, z = d[..., 0], d[..., 1], d[..., 2]
    base = np.array([0.03, 0.05, 0.08])*(0.7+0.6*sm(-0.6, 0.8, y))[..., None]
    box = sm(0.1, 0.6, y)*sm(0.25, -0.5, x)*sm(-0.6, 0.3, z)
    strip = sm(0.45, 0.75, x)*sm(0.8, 0.2, np.abs(y-0.2))*sm(-0.5, 0.3, z)
    rim = sm(0.2, 0.75, -z)*sm(-0.1, 0.6, x)*sm(0.6, -0.3, y)
    floor = sm(-0.15, -0.7, y)*0.12
    return base + box[..., None]*np.array([1.0, 0.99, 0.97])*2.2 + strip[..., None]*np.array([0.95, 0.97, 1.0])*1.6 \
        + rim[..., None]*np.array([0.10, 0.35, 0.80])*1.1 + floor[..., None]*np.array([0.35, 0.4, 0.5])

# diffuse: the key light upper left (soft box), a cool fill from the right, a blue rim from behind
L1 = nrm(np.array([-0.55, 0.62, 0.56])); L2 = nrm(np.array([0.8, 0.1, 0.45])); L3 = nrm(np.array([0.5, -0.4, -0.75]))
def wrap(n, l, w): return np.clip(((n*l).sum(-1)+w)/(1+w), 0, 1)
alb = np.array([0.90, 0.885, 0.86])
dif = wrap(Nw, L1, 0.35)[:, None]*np.array([1.0, 0.98, 0.95])*1.05 + wrap(Nw, L2, 0.3)[:, None]*np.array([0.55, 0.6, 0.68])*0.45 \
    + wrap(Nw, L3, 0.2)[:, None]*np.array([0.15, 0.35, 0.75])*0.35 + np.array([0.07, 0.08, 0.10])
# a satin sheen: blurred reflection of the studio
cosv = np.clip((Nw*Vw).sum(-1), 0, 1)
rng = np.random.default_rng(3)
acc = np.zeros((len(P), 3))
for s in range(12):
    nj = nrm(Nw+rng.normal(0, 0.07, (len(P), 3)))
    cj = np.clip((nj*Vw).sum(-1), 0, 1)
    acc += env(nrm(-Vw[None]+2*cj[:, None]*nj))
spec = acc/12
fr = 0.04+0.96*(1-cosv)**5
col = alb*dif*(ao**1.1)[:, None] + spec*(0.16+0.6*fr)[:, None]*ao[:, None]
col = 1-np.exp(-col*2.1)
col = np.clip((col-0.5)*1.08+0.5, 0, 1)**1.06

img = np.zeros((N, 4)); img[hi, :3] = col; img[hi, 3] = 1
img = img.reshape(H, W, 4)
im = Image.fromarray((np.clip(img, 0, 1)*255+.5).astype(np.uint8), 'RGBA')
if SS != 1: im = im.convert('RGBa').resize((FW, FH), Image.LANCZOS).convert('RGBA')
im.save(OUT)
def proj(pl):
    w = (np.asarray(pl, float)-CEN)@M.T
    return [round(float((w[0]/(SCV*FW/FH))*.5+.5), 4), round(float((1-w[1]/SCV)*.5), 4)]
print(json.dumps({"tip": proj([0, 0, 0]), "head": proj([0, YH1, 0]), "aspect": FW/FH}))
