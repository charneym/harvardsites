#!/usr/bin/env python3
"""Vortex Optical Coatings hero (HOME_BRIEF update 2c: a crafted render of the firm's real product).
One round thin-film coated optical filter, as Vortex make them in Hinckley (vortexopticalcoatings.co.uk > Products:
bandpass, long/short pass and dichroic filters on round and square substrates), standing at three-quarter view.
Ray traced in numpy with a slightly perspective camera: the coated face shows the real interference colour of a
quarter-wave TiO2/SiO2 stack (transfer-matrix thin-film reflectance, integrated over the CIE observer, so the hue shifts
with the angle of incidence across the face, as a real dichroic coating does); the edge is fine-ground glass. Lighting is
a soft studio rig (one top box, two strip lights). Saved with REAL alpha over the page ink, so there is no ground and no
box edge (DJ/DP).  Usage: python3 render.py W H out.png ROT [SS]   (ROT: light-rig rotation in degrees)"""
import sys, math, numpy as np
from PIL import Image
W = int(sys.argv[1]); H = int(sys.argv[2]); OUT = sys.argv[3]; ROT = float(sys.argv[4]); SS = int(sys.argv[5]) if len(sys.argv) > 5 else 2
FW, FH = W, H; W, H = W*SS, H*SS
INK = np.array([22, 18, 29])/255.0
def nrm(v): return v/np.linalg.norm(v, axis=-1, keepdims=True)
def sm(a, b, x): x = np.clip((x-a)/(b-a), 0, 1); return x*x*(3-2*x)

# ---- thin film: (HL)^9 H quarter-wave stack at 520 nm, TiO2 / SiO2 on glass, transfer matrix, s+p average
LAM = np.arange(390, 711, 5.0)
nH, nL, nS = 2.35, 1.46, 1.52
# a magenta-reflecting dichroic (transmits green): a blue reflector and a red reflector in series
STACK = [(n, 415.0) for n in ([nH, nL]*7 + [nH])] + [(nL, 560.0)] + [(n, 735.0) for n in ([nH, nL]*7 + [nH])]
def refl(theta):
    """reflectance spectrum R(lambda) for incidence angle theta (radians, from air)"""
    out = np.zeros_like(LAM)
    s0 = math.sin(theta)
    for pol in (0, 1):
        M = np.tile(np.eye(2, dtype=complex), (len(LAM), 1, 1))
        for n, L0 in STACK:
            d = L0/(4*n)
            ct = np.sqrt(1-(s0/n)**2+0j)
            eta = n*ct if pol == 0 else n/ct
            dl = 2*np.pi*n*d*ct/LAM
            m = np.zeros((len(LAM), 2, 2), complex)
            m[:, 0, 0] = np.cos(dl); m[:, 0, 1] = 1j*np.sin(dl)/eta
            m[:, 1, 0] = 1j*eta*np.sin(dl); m[:, 1, 1] = np.cos(dl)
            M = M @ m
        cs = np.sqrt(1-(s0/nS)**2+0j); ca = math.cos(theta)
        e0 = ca if pol == 0 else 1/ca; es = nS*cs if pol == 0 else nS/cs
        B = M[:, 0, 0] + M[:, 0, 1]*es; C = M[:, 1, 0] + M[:, 1, 1]*es
        r = (e0*B - C)/(e0*B + C)
        out += np.abs(r)**2/2
    return out
# CIE 1931 analytic fit (Wyman, Sloan, Shirley 2013)
def g(x, mu, s1, s2): return np.where(x < mu, np.exp(-.5*((x-mu)/s1)**2), np.exp(-.5*((x-mu)/s2)**2))
xb = 1.056*g(LAM, 599.8, 37.9, 31.0) + .362*g(LAM, 442.0, 16.0, 26.7) - .065*g(LAM, 501.1, 20.4, 26.2)
yb = .821*g(LAM, 568.8, 46.9, 40.5) + .286*g(LAM, 530.9, 16.3, 31.1)
zb = 1.217*g(LAM, 437.0, 11.8, 36.0) + .681*g(LAM, 459.0, 26.0, 13.8)
XYZ2RGB = np.array([[3.2406, -1.5372, -.4986], [-.9689, 1.8758, .0415], [.0557, -.2040, 1.0570]])
def spec_rgb(R):
    X, Y, Z = (R*xb).sum(), (R*yb).sum(), (R*zb).sum(); k = yb.sum()
    return np.clip(XYZ2RGB @ np.array([X, Y, Z])/k, 0, None)
TH = np.radians(np.arange(0, 81, 2.0))
CT = np.array([spec_rgb(refl(t)) for t in TH])          # coating colour by angle
def coat(theta):
    t = np.clip(np.degrees(theta)/2.0, 0, len(TH)-1.001); i = t.astype(int); f = (t-i)[..., None]
    return CT[i]*(1-f) + CT[i+1]*f

# ---- the filter: a disc, radius 1, thickness T, centred at origin, axis = local z
T = 0.085
YAW, PITCH, ROLL = math.radians(40), math.radians(-12), math.radians(-6)
def rmat():
    cy, sy = math.cos(YAW), math.sin(YAW); cp, sp = math.cos(PITCH), math.sin(PITCH); cr, sr = math.cos(ROLL), math.sin(ROLL)
    Ry = np.array([[cy, 0, sy], [0, 1, 0], [-sy, 0, cy]]); Rx = np.array([[1, 0, 0], [0, cp, -sp], [0, sp, cp]]); Rz = np.array([[cr, -sr, 0], [sr, cr, 0], [0, 0, 1]])
    return Ry @ Rx @ Rz
Rm = rmat(); RmT = Rm.T
# camera: perspective, looking down -z from z=+6
CAM = np.array([0, 0, 6.0]); FOV = math.radians(24)
asp = W/H; sc = math.tan(FOV/2)
ys, xs = np.mgrid[0:H, 0:W]
px = ((xs+.5)/W*2-1)*sc*asp*1.0; py = -((ys+.5)/H*2-1)*sc
D = nrm(np.stack([px, py, -np.ones_like(px)], -1))
O = np.broadcast_to(CAM, D.shape)
# to object space
o = O @ Rm; d = D @ Rm          # (R^T x) as row vectors: x @ R
INF = 1e9
tbest = np.full(px.shape, INF); kind = np.zeros(px.shape, int)
# caps z=+T/2 (front, coated) and z=-T/2 (back)
for k, zc in ((1, T/2), (2, -T/2)):
    with np.errstate(divide='ignore', invalid='ignore'):
        t = (zc - o[..., 2])/d[..., 2]
    p = o + d*t[..., None]
    ok = (t > 0) & (p[..., 0]**2 + p[..., 1]**2 <= 1) & (t < tbest)
    tbest[ok] = t[ok]; kind[ok] = k
# side: x^2+y^2=1, |z|<=T/2
a = d[..., 0]**2 + d[..., 1]**2; b = 2*(o[..., 0]*d[..., 0] + o[..., 1]*d[..., 1]); c = o[..., 0]**2 + o[..., 1]**2 - 1
disc = b*b - 4*a*c
with np.errstate(invalid='ignore', divide='ignore'):
    t = (-b - np.sqrt(np.maximum(disc, 0)))/(2*a)
p = o + d*t[..., None]
ok = (disc > 0) & (t > 0) & (np.abs(p[..., 2]) <= T/2) & (t < tbest)
tbest[ok] = t[ok]; kind[ok] = 3
P = o + d*np.where(tbest < INF, tbest, 0)[..., None]
N = np.zeros_like(P)
N[kind == 1] = [0, 0, 1]; N[kind == 2] = [0, 0, -1]
sid = kind == 3; N[sid] = np.stack([P[sid][:, 0], P[sid][:, 1], np.zeros(sid.sum())], -1)
Nw = N @ RmT; Pw = P @ RmT     # back to world
Dw = D

# ---- studio environment (world dirs), rotated by ROT about the vertical axis
rr = math.radians(ROT)
OFF = ROT/100.0
def env(r):
    # the coated face mirrors a small cone of directions (x .80-.95, y .18-.49): the rig is placed in that cone
    x, y = r[..., 0], r[..., 1]
    u = y + .55*(x - .87)                                            # diagonal across the cone
    v = (x - .87) - .55*(y - .33)
    e = .035 + .06*sm(.05, .6, y)                                     # dark studio wall
    box = sm(.28+OFF, .52+OFF, u)*.85                                # big soft box, soft diagonal edge
    s1 = sm(.010, .002, np.abs(v - (.035-OFF*.5)))*sm(.12, .3, u)*1.3   # one thin strip light, near vertical
    glow = .16*np.exp(-((u-.27-OFF)**2)/.003)                          # the soft box's falloff glow
    return e + box + s1 + glow

hit = kind > 0
col = np.zeros(px.shape + (3,)); alpha = np.zeros(px.shape)
# front coated face: interference reflection + a little glass/back-face transmission of the ink
fr = kind == 1
n = Nw[fr]; dv = Dw[fr]
cosi = np.clip(-(dv*n).sum(-1), 0, 1); th = np.arccos(cosi)
rv = dv + 2*cosi[:, None]*n
L = env(rv)[:, None]
th = np.clip(th.mean() + (th - th.mean())*3.2, 0, 1.38)            # the angle spread of a close studio camera, exaggerated x3
C = coat(th)                                                     # RGB reflectance of the stack at this angle
glass = .04 + .96*(1-cosi)**5                                    # bare-glass Fresnel, for the white sheen on top
face = C*L*1.0 + glass[:, None]*L*.12
# the light the coating transmits (red/orange) shows faintly where it catches the back face
trans = (1-C)*np.array([1, .55, .25])*.10*sm(.2, 1., L[:, 0]*.6)[:, None]
pr = np.sqrt(P[fr][:, 0]**2 + P[fr][:, 1]**2)
rim = sm(.975, .996, pr)                                          # the polished chamfer catches the rig all round
face = face*(1-rim[:, None]) + rim[:, None]*(C*.55 + .25)*(.35 + .9*sm(-.6, .6, n[:, 1]*.3 - n[:, 0]*0 + (P[fr][:, 1]*.5 - P[fr][:, 0]*.3)))[:, None]
col[fr] = face + trans; alpha[fr] = 1
# back face only visible past the rim: treat like the front, darker
bk = kind == 2
col[bk] = .04; alpha[bk] = 1
# ground edge: fine-ground glass, diffuse, warm-neutral, lit by the rig
sd = kind == 3
n = Nw[sd]; dv = Dw[sd]
lam = np.zeros(sd.sum())
for ld, w in (((-.25, .9, .35), .9), ((-.9, .2, .5), .6), ((.9, .1, .2), .35)):
    lv = nrm(np.array(ld))
    lam += w*np.clip((n*lv).sum(-1), 0, 1)
edgec = np.array([.62, .62, .66])*(.06 + .45*lam)[:, None]
# a thin bright bevel line where the edge meets the coated face
zl = P[sd][:, 2]
bev = sm(.010, 0, np.abs(zl - T/2))*.55 + sm(.010, 0, np.abs(zl + T/2))*.25
edgec += bev[:, None]*np.array([.95, .9, .95])
# the coating wraps a hair over the front chamfer: a faint coloured line
col[sd] = edgec; alpha[sd] = 1

# tone map (filmic-ish), over the ink with real alpha
def tm(x): return 1 - np.exp(-x*1.35)
rgb = tm(col)
rgb = rgb**(1/1.15)
# composite then un-premultiply against ink for an exact alpha relationship
img = np.concatenate([rgb, alpha[..., None]], -1)
im = Image.fromarray((np.clip(img, 0, 1)*255).astype(np.uint8), 'RGBA')
if SS > 1: im = im.resize((FW, FH), Image.LANCZOS)
im.save(OUT)
# preview over the page ink
bg = Image.new('RGBA', im.size, tuple(int(v*255) for v in INK) + (255,)); bg.alpha_composite(im); bg.convert('RGB').save(OUT.replace('.png', '_prev.png'))
print('ok', OUT, im.size)
