#!/usr/bin/env python3
"""GCT GmbH hero (HOME_BRIEF update 2c: a crafted render of the firm's real product). One solid-carbide 2-flute end mill
with GCT MicroSpeed diamond coating on its cutting part, as GCT makes them in Weingarten (gctool.com > Produkte > Fräser,
e.g. GC-2i High Performance Fräser, 2-Schneider), seen diagonally like a catalogue product shot. Sphere-traced SDF in
numpy: a ground carbide shank (polished, bright reflections), a taper, and the fluted cutter whose diamond layer is a
matte crystalline grey with fine glints. Studio light on the page ink with a faint crimson kicker from the GCT logo ring.
Saved with REAL alpha (coverage only; no ground of its own, DJ/DP).
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

# ---- the tool, in its own frame: axis along +y, tip at y=0 ----
RC, RS = 0.62, 1.0            # cutter and shank radius (3 mm shank, 1.9 mm cutter)
LC = 3.9                      # flute length
T0, T1 = LC+0.15, LC+1.05     # taper from cutter to shank
YT = 10.6                     # top of the shank
PITCH = 2*math.pi*RC/math.tan(math.radians(32))   # 32 deg helix
K = 2*math.pi/PITCH
PH0 = 0.55                    # flute phase (turns a cutting edge toward the light)

def radius(y):
    return RC + (RS-RC)*sm(T0, T1, y)

def sdf(p):
    x, y, z = p[..., 0], p[..., 1], p[..., 2]
    r = np.sqrt(x*x+z*z)
    d = (r-radius(y))*0.86
    # flat end with a small edge chamfer, and the chamfered top of the shank
    d = np.maximum(d, -y)
    d = np.maximum(d, (r-radius(y)+0.05-y)*0.707)
    d = np.maximum(d, y-YT)
    d = np.maximum(d, (r-RS+0.09+y-YT)*0.707)
    # two helical flutes: in the cross-section turned by the helix, two gullet circles cut the body; they run out
    # through the taper by moving outward
    a = -K*y+PH0; ca, sa = np.cos(a), np.sin(a)
    u = x*ca-z*sa; v = x*sa+z*ca
    run = 1+1.9*sm(LC-0.7, LC+0.9, y)
    cu, cv, rg = 0.30*RC*run, 0.86*RC*run, 0.58*RC*(1-0.25*sm(LC-0.7, LC+0.9, y))
    g1 = np.sqrt((u-cu)**2+(v-cv)**2)-rg
    g2 = np.sqrt((u+cu)**2+(v+cv)**2)-rg
    d = np.maximum(d, -g1*0.8)
    d = np.maximum(d, -g2*0.8)
    return d

# ---- placement: tilted 33 deg (tip lower left, shank upper right), turned a little toward the camera ----
TILT = math.radians(-33); YAW = math.radians(18); PITCH_C = math.radians(-9)
def Rz(a): c, s = math.cos(a), math.sin(a); return np.array([[c, -s, 0], [s, c, 0], [0, 0, 1]])
def Rx(a): c, s = math.cos(a), math.sin(a); return np.array([[1, 0, 0], [0, c, -s], [0, s, c]])
def Ry(a): c, s = math.cos(a), math.sin(a); return np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]])
M = Rx(PITCH_C)@Rz(TILT)@Ry(YAW)          # local -> world
MI = M.T
CEN = np.array([0, YT/2, 0])              # rotate about the middle of the tool

# orthographic camera looking down -z
SCV = 5.55                                # half-height of the frame in world units
ys, xs = np.mgrid[0:H, 0:W]
u = ((xs+.5)/W*2-1)*SCV*W/H; v = (1-(ys+.5)/H*2)*SCV
O = np.stack([u.ravel(), v.ravel(), np.full(u.size, 20.0)], -1)
D = np.array([0, 0, -1.0])
Ol = (O@MI.T)+CEN[None]                   # ray origins in the tool frame
Dl = D@MI.T

# sphere trace (active set shrinks)
N = len(Ol); t = np.full(N, 8.0); hit = np.zeros(N, bool); alive = np.ones(N, bool)
# bounding: skip rays that miss the tool's bounding cylinder by a lot
for it in range(260):
    idx = np.nonzero(alive)[0]
    if len(idx) == 0: break
    p = Ol[idx]+Dl[None]*t[idx, None]
    d = sdf(p)
    t[idx] += np.maximum(d, 0.0015)
    done = d < 0.0012
    hit[idx[done]] = True
    alive[idx[done]] = False
    far = t[idx] > 32
    alive[idx[far]] = False
print('hits', hit.sum(), 'of', N, file=sys.stderr)

hi = np.nonzero(hit)[0]
P = Ol[hi]+Dl[None]*t[hi, None]
e = 0.0025
def grad(P):
    ex = np.array([e, 0, 0]); ey = np.array([0, e, 0]); ez = np.array([0, 0, e])
    g = np.stack([sdf(P+ex)-sdf(P-ex), sdf(P+ey)-sdf(P-ey), sdf(P+ez)-sdf(P-ez)], -1)
    return nrm(g)
Nl = grad(P)
Nw = Nl@M.T                               # world normals
Vw = -D                                   # towards camera
# ambient occlusion along the normal (flute depth)
ao = np.ones(len(P))
for i, h in enumerate([0.04, 0.09, 0.16, 0.26, 0.4]):
    ao -= (h-np.minimum(sdf(P+Nl*h), h))*(0.5**i)*2.2
ao = np.clip(ao, 0.15, 1)

def env(d):
    """studio on graphite ink: a large soft box upper left, a tall white strip right, a crimson kicker low right,
    a faint warm floor bounce."""
    x, y, z = d[..., 0], d[..., 1], d[..., 2]
    base = np.array([0.055, 0.058, 0.062])*(0.7+0.6*sm(-0.6, 0.8, y))[..., None]
    box = sm(0.15, 0.55, y)*sm(0.2, -0.45, x)*sm(-0.6, 0.2, z)
    strip = sm(0.45, 0.72, x)*sm(0.75, 0.2, np.abs(y-0.15))*sm(-0.5, 0.3, z)
    rim = sm(0.25, 0.75, -z)*sm(0.1, 0.6, x)*sm(0.6, -0.2, y)
    fill = sm(0.3, 0.95, z)*sm(0.7, 0.0, np.abs(y-0.1))*0.22
    floor = sm(-0.15, -0.7, y)*0.10
    c = base + box[..., None]*np.array([1.0, 0.99, 0.97])*2.4 + strip[..., None]*np.array([0.96, 0.98, 1.0])*2.1 \
        + rim[..., None]*np.array([0.71, 0.08, 0.17])*1.0 + fill[..., None]*np.array([0.9, 0.92, 0.95]) \
        + floor[..., None]*np.array([0.5, 0.42, 0.38])
    return c

ly = P[:, 1]
coat = 1-sm(LC+0.25, LC+0.75, ly)          # MicroSpeed diamond layer on the cutting part, fading out in the taper
rng = np.random.default_rng(7)
# reflections: a polished shank (sharp) and a matte crystalline coating (blurred over jittered normals)
cosv = np.clip((Nw*Vw).sum(-1), 0, 1)
def refl(n): return nrm(Vw[None]*-1 + 2*(n*Vw).sum(-1)[:, None]*n) * np.array([1, 1, 1])
Rsh = env(nrm(-Vw[None]+2*cosv[:, None]*Nw))
# grinding lines on the shank: tiny normal ripple around the axis
rip = 0.0*ly
Nr = nrm(Nw+rip[:, None]*(np.array([0, 1, 0])@M.T)[None])
cosr = np.clip((Nr*Vw).sum(-1), 0, 1)
Rsh = env(nrm(-Vw[None]+2*cosr[:, None]*Nr))
acc = np.zeros((len(P), 3))
NS = 16
for s in range(NS):
    j = rng.normal(0, 0.22, (len(P), 3))
    nj = nrm(Nw+j)
    cj = np.clip((nj*Vw).sum(-1), 0, 1)
    acc += env(nrm(-Vw[None]+2*cj[:, None]*nj))
Rco = acc/NS
fr = 0.04+0.96*(1-cosv)**5
F0sh = np.array([0.62, 0.62, 0.64]); F0co = np.array([0.52, 0.525, 0.54])
sh = Rsh*(F0sh+(1-F0sh)*fr[:, None])
co = Rco*(F0co+(1-F0co)*fr[:, None])*1.25 + 0.018
# diamond glints: sparse crystallite facets catching the soft box
q = (P*np.array([210.0, 210.0, 210.0])).astype(np.int64)
hsh = ((q[:, 0]*73856093) ^ (q[:, 1]*19349663) ^ (q[:, 2]*83492791)) & 0xFFFF
gl = (hsh > 0xFFFF*0.982).astype(float)
gdir = nrm(Nw+rng.normal(0, 0.55, (len(P), 3)))
gli = env(nrm(-Vw[None]+2*np.clip((gdir*Vw).sum(-1), 0, 1)[:, None]*gdir)).mean(-1)
co = co + (gl*np.clip(gli-0.25, 0, 3)*0.9)[:, None]*np.array([1.0, 1.0, 1.02])
col = sh*(1-coat[:, None]) + co*coat[:, None]
col *= ao[:, None]**0.9
# filmic tone map
col = 1-np.exp(-col*1.35)

img = np.zeros((N, 4)); img[hi, :3] = col; img[hi, 3] = 1
img = img.reshape(H, W, 4)
im = Image.fromarray((np.clip(img, 0, 1)*255+.5).astype(np.uint8), 'RGBA')
if SS != 1: im = im.convert('RGBa').resize((FW, FH), Image.LANCZOS).convert('RGBA')
im.save(OUT)

def proj(pl):
    w = (np.asarray(pl, float)-CEN)@M.T
    return [round(float((w[0]/(SCV*FW/FH))*.5+.5), 4), round(float((1-w[1]/SCV)*.5), 4)]
print(json.dumps({"tip": proj([0, 0, 0]), "fluteEnd": proj([0, LC, 0]), "top": proj([0, YT, 0]), "aspect": FW/FH}))
