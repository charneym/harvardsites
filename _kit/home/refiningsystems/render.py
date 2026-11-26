#!/usr/bin/env python3
"""Refining Systems hero (HOME_BRIEF update 2c: a crafted render of the firm's real product). One precious-metal
sputtering target, bonded on a copper backing plate with eight bolt holes, as Refining Systems makes them
(refiningsystems.com > Products: "Sputtering targets ... made in various diameters and thicknesses", "Backing plates";
the same object appears in their own product photos). Analytic ray casting in numpy with an orthographic camera: the
target face and the plate carry a lathe-turned finish (concentric grooves -> the normal is spread radially, giving the
radial sheen of turned metal), the sides carry circumferential grooves. Studio environment over the page ink. Saved with
REAL alpha (no ground of its own, DJ/DP); the contact shadow and glints are painted live by field.js.
Usage: python3 render.py W H out.png"""
import sys, math, numpy as np
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 1200
H = int(sys.argv[2]) if len(sys.argv) > 2 else 900
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = 2
W2, H2 = W*SS, H*SS
INK = np.array([27, 26, 25])/255.0

def nrm(v): return v/np.linalg.norm(v, axis=-1, keepdims=True)
def sm(a, b, x): x = np.clip((x-a)/(b-a), 0, 1); return x*x*(3-2*x)

# geometry (z up). Plate: R 1.0, z 0..0.09. Target: R 0.74, z 0.09..0.21, small chamfer ignored.
RP, ZP0, ZP1 = 1.0, 0.0, 0.09
RT, ZT1 = 0.74, 0.21
HOLES = [(0.885*math.cos(a), 0.885*math.sin(a)) for a in np.linspace(0, 2*math.pi, 8, endpoint=False)+math.pi/8]
RH = 0.042

EL = math.radians(38)                      # camera elevation
AZ = math.radians(-90)                     # camera looks from -y toward +y
D = np.array([math.cos(EL)*math.cos(AZ+math.pi)*-1, -math.cos(EL)*math.sin(AZ+math.pi)*-1, -math.sin(EL)])
# camera position direction (toward camera) C = (0,-cos, sin); view dir = -C
C = np.array([0.0, -math.cos(EL), math.sin(EL)]); D = -C
RIGHT = np.array([1.0, 0, 0]); UP = np.cross(RIGHT, D) * -1
UP = UP/np.linalg.norm(UP)
if UP[2] < 0: UP = -UP
HALFW = 1.18                               # half-width of the frame in world units
CEN = np.array([0, 0, 0.1])

R0 = np.array([0.0, math.cos(EL), math.sin(EL)])          # mirror direction of the flat faces
def lobe(d, c, a0, a1):
    c = np.asarray(c, float); c = c/np.linalg.norm(c)
    return sm(math.cos(a1), math.cos(a0), d @ c)
def rot_toward(base, ax, ang):
    v = np.asarray(base)*math.cos(ang) + np.asarray(ax)*math.sin(ang); return v/np.linalg.norm(v)
UPR = np.cross(np.array([1.0, 0, 0]), R0)                     # in-plane perpendicular to R0 (vertical-ish)
def env(d):
    """a dark studio over the page ink with a few defined lights placed relative to the faces' mirror direction, so
    the lathe-turned faces show the radial 'bowtie' sheen of real turned metal rather than an even grey."""
    z = d[..., 2]
    col = INK[None]*(0.35 + 0.45*sm(-0.2, 0.9, z))[..., None]
    # main strip light: just right of the mirror direction -> bright horizontal bowtie through the centre
    col += lobe(d, rot_toward(R0, [1, 0, 0], 0.17), 0.05, 0.13)[..., None]*np.array([1.0, .98, .95])*5.5
    # a softer, larger box above-behind -> a gentle vertical sheen
    col += lobe(d, rot_toward(R0, UPR, 0.22), 0.06, 0.22)[..., None]*np.array([.95, .96, 1.0])*0.55
    # warm strip far left (side highlights, copper rim)
    col += lobe(d, [-0.95, 0.15, 0.3], 0.10, 0.32)[..., None]*np.array([1.0, .82, .64])*1.8
    # cool fill right
    col += lobe(d, [0.9, -0.2, 0.4], 0.12, 0.45)[..., None]*np.array([.78, .84, 1.0])*0.7
    # overhead
    col += lobe(d, [0, 0.2, 1], 0.2, 0.6)[..., None]*np.array([1, 1, 1])*0.22
    # faint brand-red floor bounce, front
    col += (sm(0.1, 0.6, -z)*sm(0.0, 0.7, -d[..., 1]))[..., None]*np.array([.80, .18, .02])*0.12
    return col

def fresnel_metal(F0, cos):
    return F0 + (1-F0)*((1-np.clip(cos, 0, 1))**5)[..., None]

# pixel grid -> rays
ys, xs = np.mgrid[0:H2, 0:W2].astype(np.float32)
u = (xs + .5)/W2*2 - 1; v = -((ys + .5)/H2*2 - 1)
asp = H2/W2
O = CEN[None, None] + u[..., None]*HALFW*RIGHT + v[..., None]*HALFW*asp*UP - D*5
Dv = np.broadcast_to(D, O.shape)

INF = 1e9
T = np.full((H2, W2), INF, np.float32); ID = np.zeros((H2, W2), np.int8)

def cap(z, R, rin=0.0, holes=False):
    t = (z - O[..., 2])/D[2]
    p = O + t[..., None]*D
    r = np.hypot(p[..., 0], p[..., 1])
    ok = (r <= R) & (r >= rin)
    if holes:
        for hx, hy in HOLES:
            ok &= np.hypot(p[..., 0]-hx, p[..., 1]-hy) > RH
    return np.where(ok, t, INF)

def cyl(R, z0, z1, cx=0.0, cy=0.0, inner=False):
    ox, oy = O[..., 0]-cx, O[..., 1]-cy
    a = D[0]**2 + D[1]**2; b = 2*(ox*D[0] + oy*D[1]); c = ox*ox + oy*oy - R*R
    disc = b*b - 4*a*c
    s = np.sqrt(np.maximum(disc, 0))
    t = (-b + s)/(2*a) if inner else (-b - s)/(2*a)
    z = O[..., 2] + t*D[2]
    ok = (disc > 0) & (z >= z0) & (z <= z1)
    return np.where(ok, t, INF)

prims = [
    (1, cap(ZT1, RT)),                       # target face
    (2, cyl(RT, ZP1, ZT1)),                  # target side
    (3, cap(ZP1, RP, rin=RT, holes=True)),   # plate face ring
    (4, cyl(RP, ZP0, ZP1)),                  # plate side
]
for hx, hy in HOLES:
    prims.append((5, cyl(RH, ZP0, ZP1, hx, hy, inner=True)))
for pid, t in prims:
    m = t < T; T[m] = t[m]; ID[m] = pid

P = O + T[..., None]*D
N = np.zeros_like(P)
r = np.hypot(P[..., 0], P[..., 1]) + 1e-9
radial = np.stack([P[..., 0]/r, P[..., 1]/r, np.zeros_like(r)], -1)
N[ID == 1] = [0, 0, 1]; N[ID == 3] = [0, 0, 1]
N[(ID == 2) | (ID == 4)] = radial[(ID == 2) | (ID == 4)]
ch1 = (ID == 1) & (r > RT - 0.016); N[ch1] = nrm(np.array([0, 0, 1.0]) + radial[ch1]*1.0)
ch3 = (ID == 3) & (r > RP - 0.013); N[ch3] = nrm(np.array([0, 0, 1.0]) + radial[ch3]*1.0)
# hole walls: inward normal toward hole axis
hn = np.zeros_like(P)
for hx, hy in HOLES:
    dx, dy = P[..., 0]-hx, P[..., 1]-hy; dd = np.hypot(dx, dy)
    near = (ID == 5) & (dd < RH*1.05)
    hn[near] = np.stack([-dx/RH, -dy/RH, np.zeros_like(dx)], -1)[near]
N[ID == 5] = hn[ID == 5]

# groove spread direction: face -> radial; sides -> vertical
G = np.zeros_like(P); G[(ID == 1) | (ID == 3)] = radial[(ID == 1) | (ID == 3)]
G[(ID == 2) | (ID == 4) | (ID == 5)] = [0, 0, 1]

F_PT = np.array([.74, .72, .69])       # platinum-like
F_CU = np.array([.93, .56, .40])       # copper
F0 = np.zeros_like(P)
F0[(ID == 1) | (ID == 2)] = F_PT
F0[(ID == 3) | (ID == 4) | (ID == 5)] = F_CU

hit = ID > 0
col = np.zeros_like(P)
SPREAD = {1: .13, 2: .10, 3: .30, 4: .22, 5: .35}
spread = np.zeros(ID.shape, np.float32)
for k, s in SPREAD.items(): spread[ID == k] = s
NS = 24
rng = np.random.default_rng(3)
for i in range(NS):
    g = (i + .5)/NS*2 - 1                      # stratified across the groove spread
    jit = rng.normal(0, .015, size=P.shape)
    n = nrm(N + G*(g*spread)[..., None] + jit*hit[..., None])
    n = np.nan_to_num(n)
    dn = np.sum(-D*n, -1)
    R_ = D + 2*dn[..., None]*n
    R_ = nrm(R_)
    col += env(R_)*fresnel_metal(F0, dn)
col /= NS
# faint micro-groove modulation on the turned faces (fine concentric rings)
ring = 0.5 + 0.5*np.sin(r*900)
col[ID == 1] *= (0.97 + 0.05*ring[ID == 1])[..., None]
col[ID == 3] *= (0.95 + 0.07*ring[ID == 3])[..., None]
# ambient occlusion where the target meets the plate, and inside holes
ao = np.ones(ID.shape, np.float32)
ao[ID == 3] = 0.55 + 0.45*sm(RT, RT+0.08, r[ID == 3])
ao[ID == 5] = 0.35 + 0.65*sm(ZP0, ZP1, P[..., 2][ID == 5])
col *= ao[..., None]
# tonemap (filmic-ish), gamma
col = col/(1 + col*0.55)
col = np.clip(col, 0, 1)**(1/2.2)
rgba = np.zeros((H2, W2, 4), np.float32)
col = np.nan_to_num(col); rgba[..., :3] = col; rgba[..., 3] = hit.astype(np.float32)
img = Image.fromarray((rgba*255).astype(np.uint8), 'RGBA').resize((W, H), Image.LANCZOS)
bb = img.getbbox(); print('bbox', bb, 'size', img.size)
img.save(OUT)
