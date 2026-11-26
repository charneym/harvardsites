#!/usr/bin/env python3
"""AMC Chemnitz hero (HOME_BRIEF update 2c: a crafted render of the firm's real subject). One industrial vibration sensor
(an accelerometer of the kind AMC iFactoryX reads on machines: "Erfassung von Vibrationen", data up to 3 kHz;
amc-systeme.de > AMC iFactoryX), unbranded: a stainless hex mounting base, a brushed stainless body, the M12 plug with
its knurled coupling nut and a black cable that loops away. Sphere-traced SDF in numpy, orthographic, studio light on the
page ink with a faint red kicker from the AMC rule. Saved with REAL alpha (coverage only; no ground of its own, DJ/DP).
Usage: python3 render.py W H out.png [SS]"""
import sys, math, json, numpy as np
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 500
H = int(sys.argv[2]) if len(sys.argv) > 2 else 640
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 1
FW, FH = W, H; W, H = W*SS, H*SS
def nrm(v): return v/np.maximum(np.linalg.norm(v, axis=-1, keepdims=True), 1e-9)
def sm(a, b, x): x = np.clip((x-a)/(b-a), 0, 1); return x*x*(3-2*x)

# ---------- geometry (sensor axis +y, base on y=0) ----------
RH = 1.02        # hex base (across corners /2)
YB0, YB1 = 0.0, 0.46
RB = 0.80        # body
YC0, YC1 = YB1, 2.35
RT, YT1 = 0.40, 2.62          # threaded neck
RN, YN1 = 0.52, 3.18          # knurled coupling nut
RP0, RP1, YP1 = 0.42, 0.36, 3.95  # plug body (tapered)
RK = 0.17                     # cable
# cable path: a smooth curve from the plug top, up, over to the right and down past the base
CP = np.array([[0, 3.95, 0], [0, 4.45, 0.05], [0.3, 5.0, 0.15], [1.1, 5.25, 0.25], [2.0, 4.95, 0.3],
               [2.6, 4.2, 0.3], [2.9, 3.2, 0.2], [3.0, 2.2, 0.05], [3.0, 1.3, -0.1], [2.95, 0.5, -0.25]])
def catmull(P, n):
    out = []
    Q = np.vstack([P[0]*2-P[1], P, P[-1]*2-P[-2]])
    for i in range(1, len(Q)-2):
        p0, p1, p2, p3 = Q[i-1], Q[i], Q[i+1], Q[i+2]
        for t in np.linspace(0, 1, n, endpoint=False):
            out.append(0.5*((2*p1)+(-p0+p2)*t+(2*p0-5*p1+4*p2-p3)*t*t+(-p0+3*p1-3*p2+p3)*t**3))
    out.append(P[-1]); return np.array(out)
CAB = catmull(CP, 10)
SEGA, SEGB = CAB[:-1], CAB[1:]
SEGL = np.cumsum(np.r_[0, np.linalg.norm(SEGB-SEGA, axis=1)])
CABLEN = SEGL[-1]

def sd_cable(p):
    best = np.full(p.shape[0], 1e9); u = np.zeros(p.shape[0])
    for i in range(len(SEGA)):
        a, b = SEGA[i], SEGB[i]; ba = b-a; L2 = ba@ba
        h = np.clip(((p-a)@ba)/L2, 0, 1)
        d = np.linalg.norm(p-a-h[:, None]*ba, axis=1)
        m = d < best; best = np.where(m, d, best); u = np.where(m, SEGL[i]+h*math.sqrt(L2), u)
    return best-RK, u

def sd_parts(p):
    x, y, z = p[:, 0], p[:, 1], p[:, 2]
    r = np.sqrt(x*x+z*z)
    # hex prism
    ang = np.arctan2(z, x); sec = (np.mod(ang+math.pi/6, math.pi/3)-math.pi/6)
    hexr = r*np.cos(sec)-RH*math.cos(math.pi/6)
    hb = np.maximum(hexr, np.maximum(YB0-y, y-YB1))
    hb = np.maximum(hb, (r-RH*0.97+np.abs(y-(YB0+YB1)/2)-(YB1-YB0)/2+0.02)*0.7)   # chamfered corners
    # body with chamfers
    body = np.maximum(r-RB, np.maximum(YC0-y, y-YC1))
    body = np.maximum(body, (r-RB+0.07+y-YC1)*0.707)
    body = np.maximum(body, (r-RB+0.04-(y-YC0))*0.707)
    # threaded neck (thread as a tiny ripple)
    neck = np.maximum(r-RT-0.012*np.sin(y*60), np.maximum(YC1-0.05-y, y-YT1))
    # knurled nut
    nut = np.maximum(r-RN+0.018*(np.abs(np.sin(ang*24))), np.maximum(YT1-y, y-YN1))
    nut = np.maximum(nut, (r-RN+0.05+np.abs(y-(YT1+YN1)/2)-(YN1-YT1)/2)*0.707)
    # plug body
    tt = np.clip((y-YN1)/(YP1-YN1), 0, 1); rp = RP0+(RP1-RP0)*tt
    plug = np.maximum(r-rp, np.maximum(YN1-0.03-y, y-YP1))
    plug = np.maximum(plug, (r-rp+0.08+y-YP1)*0.707)
    return hb, body, neck, nut, plug

def sdf(p):
    hb, body, neck, nut, plug = sd_parts(p)
    cab, _ = sd_cable(p)
    cab = np.where((p[:, 1] < YP1-0.1) & (p[:, 0]**2+p[:, 2]**2 < 0.6**2), np.maximum(cab, 0.0)+1.0, cab)  # the cable never enters the plug
    return np.minimum.reduce([hb, body, neck, nut, plug, cab])

def material(p):
    hb, body, neck, nut, plug = sd_parts(p)
    cab, u = sd_cable(p)
    D = np.stack([hb, body, neck, nut, plug, cab], -1)
    return np.argmin(D, -1), u

# ---------- placement and camera ----------
def Rx(a): c, s = math.cos(a), math.sin(a); return np.array([[1, 0, 0], [0, c, -s], [0, s, c]])
def Ry(a): c, s = math.cos(a), math.sin(a); return np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]])
def Rz(a): c, s = math.cos(a), math.sin(a); return np.array([[c, -s, 0], [s, c, 0], [0, 0, 1]])
M = Rx(math.radians(16))@Ry(math.radians(-14))@Rz(math.radians(-3))   # local -> world (camera looks a little down)
MI = M.T
CEN = np.array([1.3, 2.75, 0.0])
SCV = 3.6
ys, xs = np.mgrid[0:H, 0:W]
u = ((xs+.5)/W*2-1)*SCV*W/H; v = (1-(ys+.5)/H*2)*SCV
O = np.stack([u.ravel(), v.ravel(), np.full(u.size, 20.0)], -1)
D = np.array([0, 0, -1.0])
Ol = (O@MI.T)+CEN[None]; Dl = D@MI.T

N = len(Ol); t = np.full(N, 12.0); hit = np.zeros(N, bool); alive = np.ones(N, bool)
for it in range(220):
    idx = np.nonzero(alive)[0]
    if len(idx) == 0: break
    p = Ol[idx]+Dl[None]*t[idx, None]
    d = sdf(p)
    t[idx] += np.maximum(d*0.9, 0.0015)
    done = d < 0.0015
    hit[idx[done]] = True; alive[idx[done]] = False
    far = t[idx] > 30; alive[idx[far]] = False
print('hits', hit.sum(), 'of', N, file=sys.stderr)

hi = np.nonzero(hit)[0]
P = Ol[hi]+Dl[None]*t[hi, None]
e = 0.002
ex, ey, ez = np.array([e, 0, 0]), np.array([0, e, 0]), np.array([0, 0, e])
Nl = nrm(np.stack([sdf(P+ex)-sdf(P-ex), sdf(P+ey)-sdf(P-ey), sdf(P+ez)-sdf(P-ez)], -1))
Nw = Nl@M.T
Vw = -D
mat, cu = material(P)
ao = np.ones(len(P))
for i, h in enumerate([0.03, 0.07, 0.13, 0.22, 0.35]):
    ao -= (h-np.minimum(sdf(P+Nl*h), h))*(0.5**i)*2.0
ao = np.clip(ao, 0.2, 1)

def env(d):
    x, y, z = d[..., 0], d[..., 1], d[..., 2]
    base = np.array([0.07, 0.072, 0.076])*(0.7+0.6*sm(-0.6, 0.8, y))[..., None]
    box = sm(0.0, 0.5, y)*sm(0.3, -0.4, x)*sm(-0.7, 0.1, z)                       # big soft box upper left
    side = sm(-0.25, -0.6, x)*sm(0.75, 0.1, np.abs(y-0.05))*sm(-0.5, 0.4, z)*0.75   # tall soft strip left, at the horizon
    strip = sm(0.4, 0.68, x)*sm(0.8, 0.15, np.abs(y-0.05))*sm(-0.5, 0.35, z)        # crisp white strip right
    rim = sm(0.35, 0.8, -z)*sm(0.2, 0.7, x)*sm(0.5, -0.3, y)
    fill = sm(-0.1, 0.95, z)*sm(0.9, 0.0, np.abs(y-0.05))*0.55
    floor = sm(-0.15, -0.7, y)*0.12
    kick = sm(0.09, 0.0, np.abs(x+0.42))*sm(0.7, 0.1, np.abs(y))*sm(0.0, 0.4, z)   # narrow vertical strip: the brushed highlight
    return base + box[..., None]*np.array([1.0, 0.99, 0.97])*2.4 + side[..., None]*np.array([0.98, 0.98, 0.97])*1.6 \
        + strip[..., None]*np.array([0.96, 0.98, 1.0])*2.2 \
        + rim[..., None]*np.array([0.78, 0.06, 0.06])*0.22 + fill[..., None]*np.array([0.9, 0.92, 0.95]) \
        + floor[..., None]*np.array([0.5, 0.44, 0.40]) + kick[..., None]*np.array([1.0, 1.0, 1.0])*2.6

rng = np.random.default_rng(3)
cosv = np.clip((Nw*Vw).sum(-1), 0, 1)
fr = 0.04+0.96*(1-cosv)**5
# axis (world) for brushed anisotropy: blur reflections around the circumference
AX = np.array([0, 1, 0])@M.T
def glossy(spread, aniso=0.0, ns=14):
    acc = np.zeros((len(P), 3))
    for s in range(ns):
        j = rng.normal(0, spread, (len(P), 3))
        if aniso:
            tang = nrm(np.cross(Nw, AX[None]))
            j = j*0.25 + tang*rng.normal(0, aniso, (len(P), 1))
        nj = nrm(Nw+j); cj = np.clip((nj*Vw).sum(-1), 0, 1)
        acc += env(nrm(-Vw[None]+2*cj[:, None]*nj))
    return acc/ns
steel = glossy(0.05, aniso=0.32, ns=28)
sharp = glossy(0.03)
matte = glossy(0.45, ns=28)
satin = glossy(0.2, ns=16)
F_st = np.array([0.58, 0.58, 0.6]); F_ni = np.array([0.62, 0.62, 0.63])
col = np.zeros((len(P), 3))
m = mat
st = steel*(F_st+(1-F_st)*fr[:, None])
ni = sharp*(F_ni+(1-F_ni)*fr[:, None])
pl = satin*(0.06+0.5*fr[:, None])+0.022
cb = matte*(0.05+0.45*fr[:, None])+0.016
col = np.where((m == 0)[:, None], glossy(0.12, ns=20)*(F_ni+(1-F_ni)*fr[:, None])*1.15, col)
col = np.where((m == 1)[:, None], st, col)
col = np.where((m == 2)[:, None], ni*0.8, col)
col = np.where((m == 3)[:, None], ni, col)
col = np.where((m == 4)[:, None], pl, col)
col = np.where((m == 5)[:, None], cb, col)
# a thin red marking ring on the plug body (cable code), echoing the AMC rule
loc = P
ring = (m == 4) & (np.abs(loc[:, 1]-(YN1+0.22)) < 0.05)
col = np.where(ring[:, None], np.array([0.55, 0.035, 0.03])*(0.5+0.9*cosv[:, None])+satin*0.12, col)
col *= ao[:, None]**0.85
col = 1-np.exp(-col*1.4)
alpha = np.ones(len(P))
# the cable fades out over its last stretch (it runs on out of shot; a long eased fade, never a cut)
fade = 1-sm(CABLEN-2.6, CABLEN-0.05, cu)
alpha = np.where(m == 5, fade, alpha)

img = np.zeros((N, 4)); img[hi, :3] = col; img[hi, 3] = alpha
img = img.reshape(H, W, 4)
im = Image.fromarray((np.clip(img, 0, 1)*255+.5).astype(np.uint8), 'RGBA')
if SS != 1: im = im.convert('RGBa').resize((FW, FH), Image.LANCZOS).convert('RGBA')
im.save(OUT)
def proj(pl):
    w = (np.asarray(pl, float)-CEN)@M.T
    return [round(float((w[0]/(SCV*FW/FH))*.5+.5), 4), round(float((1-w[1]/SCV)*.5), 4)]
print(json.dumps({"base": proj([0, 0, 0]), "top": proj([0, YP1, 0]), "nut": proj([0, (YT1+YN1)/2, 0]), "aspect": FW/FH}))
