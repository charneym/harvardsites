#!/usr/bin/env python3
"""JFA hero (HOME_BRIEF update 2c: a crafted render of the firm's real product). The JFA 90° Kalibrierwürfel
(jfa.de > Produkte > Messmittel, shown on their own start-page banner): a cube of polished black natural hard stone
(granite) with a turned steel bushing set into each face (a bore and four screw holes), small chamfers on every edge.
Analytic ray-cube trace in numpy, studio softbox light, a cool rim from the JFA logo blue. Saved with REAL alpha
(coverage only; no ground of its own, DJ/DP).
Usage: python3 render.py W H out.png [SS]"""
import sys, math, numpy as np
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 600
H = int(sys.argv[2]) if len(sys.argv) > 2 else 600
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 1
FW, FH = W, H; W, H = W*SS, H*SS
def nrm(v): return v/np.linalg.norm(v, axis=-1, keepdims=True)
def sm(a, b, x): x = np.clip((x-a)/(b-a), 0, 1); return x*x*(3-2*x)
def Rx(a): c, s = math.cos(a), math.sin(a); return np.array([[1, 0, 0], [0, c, -s], [0, s, c]])
def Ry(a): c, s = math.cos(a), math.sin(a); return np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]])

# cube local -> world: turned 34 deg, tipped so the top face shows
M = Rx(math.radians(26))@Ry(math.radians(34)); MI = M.T
# camera: slight perspective, looking down -z
cam = np.array([0, 0, 11.0]); F = 5.6
ys, xs = np.mgrid[0:H, 0:W]
u = (xs+.5-W/2)/(min(W, H)/2); v = -(ys+.5-H/2)/(min(W, H)/2)
d = nrm(np.stack([u/F, v/F, -np.ones_like(u)], -1))
o = np.broadcast_to(cam, d.shape)
# to cube space
ol = o@MI.T; dl = d@MI.T
inv = 1/np.where(np.abs(dl) < 1e-9, 1e-9, dl)
t1 = (-1-ol)*inv; t2 = (1-ol)*inv
tn = np.max(np.minimum(t1, t2), -1); tf = np.min(np.maximum(t1, t2), -1)
hit = (tn < tf) & (tf > 0)
p = ol+dl*tn[..., None]
ax = np.argmax(np.abs(p), -1)
n = np.zeros_like(p); idx = np.indices(ax.shape)
n[idx[0], idx[1], ax] = np.sign(p[idx[0], idx[1], ax])
# face uv: the two other coords
A = (ax+1) % 3; B = (ax+2) % 3
fu = np.take_along_axis(p, A[..., None], -1)[..., 0]; fv = np.take_along_axis(p, B[..., None], -1)[..., 0]
# chamfers: bend the normal toward the neighbouring face near each edge
CH = .035
eu = sm(1-CH, 1, np.abs(fu)); ev = sm(1-CH, 1, np.abs(fv))
nA = np.zeros_like(p); nB = np.zeros_like(p)
np.put_along_axis(nA, A[..., None], np.sign(fu)[..., None], -1)
np.put_along_axis(nB, B[..., None], np.sign(fv)[..., None], -1)
n = nrm(n+nA*eu[..., None]*.9+nB*ev[..., None]*.9)
n = n@M.T  # local -> world
rr = np.sqrt(fu**2+fv**2); ang = np.arctan2(fv, fu)

# value noise for the stone
rng = np.random.default_rng(7)
LUT = rng.random(1 << 16)
def vnoise(q, s):
    q = q*s; i = np.floor(q).astype(np.int64); f = q-i; f = f*f*(3-2*f)
    def h(dx, dy, dz): return LUT[((i[..., 0]+dx)*73856093 ^ (i[..., 1]+dy)*19349663 ^ (i[..., 2]+dz)*83492791) & 0xffff]
    r = 0
    for dx in (0, 1):
        for dy in (0, 1):
            for dz in (0, 1):
                w = (f[..., 0] if dx else 1-f[..., 0])*(f[..., 1] if dy else 1-f[..., 1])*(f[..., 2] if dz else 1-f[..., 2])
                r = r+w*h(dx, dy, dz)
    return r
fl = vnoise(p, 70.0); fl2 = vnoise(p+3.1, 150.0); cl = vnoise(p+9.7, 9.0)
stone = .040+.022*cl
stone = stone+.13*sm(.84, .93, fl2)+.05*sm(.80, .9, fl)+.02*sm(.55, .7, fl2)
albedo = np.stack([stone*.97, stone, stone*1.05], -1)

# bushing per face (top face smaller, as on the real cube)
top = (ax == 1) & (np.sign(np.take_along_axis(p, np.ones_like(ax)[..., None], -1)[..., 0]) > 0)
RO = np.where(top, .30, .44); RI = np.where(top, .12, .19); RS_ = np.where(top, .21, .315)
steel = (rr < RO)
bore = rr < RI
screw = np.zeros_like(rr, bool)
for k in range(4):
    a = math.pi/4+k*math.pi/2
    screw |= np.hypot(fu-RS_*np.cos(a), fv-RS_*np.sin(a)) < np.where(top, .028, .036)
groove = np.abs(rr-RO) < .012

# lights
L1 = nrm(np.array([-.85, .6, .3]))      # key softbox, upper left front
L2 = nrm(np.array([.9, .25, -.35]))       # rim, right back (JFA blue)
V = -d
ndl1 = np.clip((n*L1).sum(-1), 0, 1); ndl2 = np.clip((n*L2).sum(-1), 0, 1)
R = d-2*(d*n).sum(-1)[..., None]*n
# softbox environment seen in the polish: a broad bright panel overhead-left, dark elsewhere
box = sm(.35, .9, R[..., 1])*sm(-.6, .3, -R[..., 0]*.7+R[..., 2]*.3)
fres = .04+.96*(1-np.clip((n*V).sum(-1), 0, 1))**5
h1 = nrm(L1+V); sp1 = np.clip((n*h1).sum(-1), 0, 1)**220
h2 = nrm(L2+V); sp2 = np.clip((n*h2).sum(-1), 0, 1)**60
blue = np.array([.41, .65, .90])

col = albedo*(.10+.85*ndl1[..., None])+albedo*blue*ndl2[..., None]*.9
refl = (.16+.5*fres)[..., None]*box[..., None]*np.array([.92, .95, 1.0])
col = col+refl+sp1[..., None]*.55+sp2[..., None]*blue*.45
# a cool sheen from the right (JFA blue) and a gentle falloff toward the base of the side faces
col = col+(sm(0, .9, R[..., 0])*(.015+.09*fres))[..., None]*blue
col = col*(.78+.22*sm(-1, .6, p[..., 1]))[..., None]
# chamfer edges catch the light
edge = np.maximum(eu, ev)
col = col+(edge*np.clip(ndl1+.6*ndl2, 0, 1))[..., None]*.10

# steel: turned rings, bright reflections
turn = .5+.5*np.sin(rr*900)
st = .30+.06*turn
scol = np.stack([st, st*1.01, st*1.04], -1)*(.25+.75*ndl1[..., None])+(.10+.55*box)[..., None]*np.array([.85, .88, .92])*.6
scol = scol+sp1[..., None]*.9+(ndl2*.35)[..., None]*blue
col = np.where(steel[..., None], scol, col)
col = np.where(groove[..., None], col*.35, col)
# a soft occlusion just inside the bore rim
col = np.where((~bore & steel)[..., None], col*(.55+.45*sm(RI, RI+.06, rr))[..., None], col)
# the bore: a dark well with a lit far wall
bd = rr/np.maximum(RI, 1e-6)
well = np.stack([.03+.10*sm(.4, 1, bd)*np.clip(np.cos(ang-2.4), 0, 1)]*3, -1)
col = np.where(bore[..., None], well, col)
col = np.where(screw[..., None], np.full_like(col, .025), col)

col = np.clip(col, 0, 1)**(1/2.2)
alpha = hit.astype(float)
img = np.concatenate([col*alpha[..., None], alpha[..., None]], -1)
im = Image.fromarray((img*255).astype(np.uint8), 'RGBA')
if SS > 1: im = im.resize((FW, FH), Image.LANCZOS)
bb = im.getbbox(); print('bbox', bb)
im.save(OUT)
