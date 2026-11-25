#!/usr/bin/env python3
"""EO Coatings hero (HOME_BRIEF update 2c: a crafted render of the firm's real product).
One evaporated, coated optical dome on its flange, the subject of EO Coatings' own product photograph (eocoatings.com
home page, images/home3.jpg: a coated dome showing banded interference colour). Ray traced in numpy:
 - the dome is a germanium-like substrate under a two-layer evaporated film (ZnS / YF3-like indices); the film is
   thickest at the pole and thins towards the rim (as an evaporated film does on a curved part), so the colour bands
   run round the dome like contour lines, as in their photograph;
 - the colour is the true thin-film reflectance (transfer matrix, s+p average) integrated over the CIE observer;
 - a soft studio rig (one large top box, one strip, a cool brand-blue rim) is the only thing it reflects;
 - saved with REAL alpha (object + a soft contact shadow), so there is no ground and no box edge (DJ/DP).
Usage: python3 render.py W H out.png ROT [SS]   (ROT: light-rig rotation in degrees)"""
import sys, math, numpy as np
from PIL import Image
W = int(sys.argv[1]); H = int(sys.argv[2]); OUT = sys.argv[3]; ROT = math.radians(float(sys.argv[4])); SS = int(sys.argv[5]) if len(sys.argv) > 5 else 2
FW, FH = W, H; W, H = W*SS, H*SS
def nrm(v): return v/np.linalg.norm(v, axis=-1, keepdims=True)
def sm(a, b, x): x = np.clip((x-a)/(b-a), 0, 1); return x*x*(3-2*x)

# ---------------- thin film ----------------
LAM = np.arange(390, 711, 5.0)
nSub = 4.9 - 1.9j          # germanium in the visible (absorbing, metallic grey)
L1, L2 = 2.30, 1.52        # ZnS-like high index, fluoride-like low index
Q0 = 550.0                 # design wavelength of the quarter-wave stack at s = 1
def STACK(s): return [(n, Q0*s/(4*n)) for n in [L2, L1]*3]   # (L H) x 3, outer layer first
def refl(theta, s):
    out = np.zeros_like(LAM); s0 = math.sin(theta); ca = math.cos(theta)
    for pol in (0, 1):
        M = np.tile(np.eye(2, dtype=complex), (len(LAM), 1, 1))
        for n, d in STACK(s):
            ct = np.sqrt(1-(s0/n)**2+0j); eta = n*ct if pol == 0 else n/ct
            dl = 2*np.pi*n*d*ct/LAM
            m = np.zeros((len(LAM), 2, 2), complex)
            m[:, 0, 0] = np.cos(dl); m[:, 0, 1] = 1j*np.sin(dl)/eta; m[:, 1, 0] = 1j*eta*np.sin(dl); m[:, 1, 1] = np.cos(dl)
            M = M @ m
        cs = np.sqrt(1-(s0/nSub)**2+0j)
        e0 = ca if pol == 0 else 1/ca; es = nSub*cs if pol == 0 else nSub/cs
        B = M[:, 0, 0] + M[:, 0, 1]*es; C = M[:, 1, 0] + M[:, 1, 1]*es
        r = (e0*B - C)/(e0*B + C); out += np.abs(r)**2/2
    return out
def g(x, mu, s1, s2): return np.where(x < mu, np.exp(-.5*((x-mu)/s1)**2), np.exp(-.5*((x-mu)/s2)**2))
xb = 1.056*g(LAM, 599.8, 37.9, 31.0) + .362*g(LAM, 442.0, 16.0, 26.7) - .065*g(LAM, 501.1, 20.4, 26.2)
yb = .821*g(LAM, 568.8, 46.9, 40.5) + .286*g(LAM, 530.9, 16.3, 31.1)
zb = 1.217*g(LAM, 437.0, 11.8, 36.0) + .681*g(LAM, 459.0, 26.0, 13.8)
XYZ2RGB = np.array([[3.2406, -1.5372, -.4986], [-.9689, 1.8758, .0415], [.0557, -.2040, 1.0570]])
def spec_rgb(R):
    X, Y, Z = (R*xb).sum(), (R*yb).sum(), (R*zb).sum(); k = yb.sum()
    return np.clip(XYZ2RGB @ np.array([X, Y, Z])/k, 0, None)
TH = np.radians(np.arange(0, 89, 3.0)); SV = np.arange(0.40, 1.6001, 0.01)
TAB = np.array([[spec_rgb(refl(t, s)) for s in SV] for t in TH])   # [theta, s, rgb]
def coat(theta, s):
    a = np.clip(np.degrees(theta)/3.0, 0, len(TH)-1.001); i = a.astype(int); fa = (a-i)[..., None]
    b = np.clip((s-SV[0])/0.01, 0, len(SV)-1.001); j = b.astype(int); fb = (b-j)[..., None]
    return (TAB[i, j]*(1-fa)*(1-fb) + TAB[i+1, j]*fa*(1-fb) + TAB[i, j+1]*(1-fa)*fb + TAB[i+1, j+1]*fa*fb)

# ---------------- environment: a studio rig ----------------
def roty(v, a):
    c, s = math.cos(a), math.sin(a); return np.array([c*v[0]+s*v[2], v[1], -s*v[0]+c*v[2]])
BOX = nrm(roty(np.array([-0.45, 0.85, 0.42]), ROT))
STRIP = nrm(roty(np.array([0.95, 0.22, 0.25]), ROT))
RIM = nrm(np.array([0.15, 0.35, -1.0]))
BLUE = np.array([0.10, 0.48, 0.86])
def frame(c):
    """an orthonormal frame around direction c (u: horizontal, v: up)"""
    u = np.cross([0, 1.0, 0], c); u = u/np.linalg.norm(u); v = np.cross(c, u); return u, v
BU, BV = frame(BOX); SU, SV2 = frame(STRIP)
def softrect(d, c, u, v, hw, hh, soft):
    """a soft-edged rectangular light of angular half-size hw x hh (radians) centred on c"""
    z = (d*c).sum(-1); x = np.arctan2((d*u).sum(-1), z); y = np.arctan2((d*v).sum(-1), z)
    k = sm(hw+soft, hw-soft, np.abs(x))*sm(hh+soft, hh-soft, np.abs(y))*(z > 0)
    return k[..., None]
def env(d):
    y = d[..., 1:2]
    base = 0.03 + 0.62*np.clip(y, 0, 1)**1.6 + 0.012*np.clip(-y, 0, 1)
    c = np.repeat(base, 3, -1)
    c = c + 1.2*softrect(d, BOX, BU, BV, math.radians(34), math.radians(20), math.radians(9))
    c = c + 1.25*softrect(d, STRIP, SU, SV2, math.radians(5), math.radians(30), math.radians(2.5))
    rm = (d*RIM).sum(-1, keepdims=True)
    c = c + 0.8*BLUE*sm(math.cos(math.radians(45)), math.cos(math.radians(18)), rm)
    return c

# ---------------- geometry ----------------
FL_T, FL_R, R = 0.075, 1.13, 1.0     # flange thickness, flange radius, dome radius
CTR = np.array([0.0, FL_T, 0.0])
EL = math.radians(23); DIST = 6.4; FOV = math.radians(25)
TGT = np.array([0.0, 0.52, 0.0])
CAM = TGT + DIST*np.array([math.sin(math.radians(-8))*math.cos(EL), math.sin(EL), math.cos(math.radians(-8))*math.cos(EL)])
fw = nrm(TGT-CAM); rt = nrm(np.cross(fw, [0, 1, 0])); up = np.cross(rt, fw)
asp = W/H; sc = math.tan(FOV/2)
ys, xs = np.mgrid[0:H, 0:W]
px = ((xs+.5)/W*2-1)*sc*asp; py = -((ys+.5)/H*2-1)*sc
D = nrm(px[..., None]*rt + py[..., None]*up + fw)
O = CAM
INF = 1e9
t = np.full(px.shape, INF); kind = np.zeros(px.shape, int)
# dome (upper hemisphere of sphere at CTR)
oc = O - CTR; b = (D*oc).sum(-1); cc = (oc*oc).sum() - R*R; disc = b*b - cc
with np.errstate(invalid='ignore'):
    sq = np.sqrt(np.where(disc > 0, disc, 0))
    for tt in (-b - sq, -b + sq):
        p = O + D*tt[..., None]
        ok = (disc > 0) & (tt > 0) & (p[..., 1] >= CTR[1]) & (tt < t)
        t = np.where(ok, tt, t); kind = np.where(ok, 1, kind)
# flange top annulus y = FL_T
with np.errstate(divide='ignore', invalid='ignore'):
    tt = (FL_T - O[1])/D[..., 1]
p = O + D*tt[..., None]; r2 = p[..., 0]**2 + p[..., 2]**2
ok = (tt > 0) & (r2 <= FL_R**2) & (r2 >= R*R) & (tt < t)
t = np.where(ok, tt, t); kind = np.where(ok, 2, kind)
# flange side wall (cylinder r = FL_R, 0..FL_T)
a = D[..., 0]**2 + D[..., 2]**2; bb = 2*(O[0]*D[..., 0] + O[2]*D[..., 2]); c2 = O[0]**2 + O[2]**2 - FL_R**2
dd = bb*bb - 4*a*c2
with np.errstate(invalid='ignore', divide='ignore'):
    tt = (-bb - np.sqrt(np.where(dd > 0, dd, 0)))/(2*a)
p = O + D*tt[..., None]
ok = (dd > 0) & (tt > 0) & (p[..., 1] >= 0) & (p[..., 1] <= FL_T) & (tt < t)
t = np.where(ok, tt, t); kind = np.where(ok, 3, kind)
# ground y = 0 (for the contact shadow only)
with np.errstate(divide='ignore', invalid='ignore'):
    tg = -O[1]/D[..., 1]
pg = O + D*tg[..., None]

P = O + D*np.where(t < INF, t, 0)[..., None]
col = np.zeros(px.shape + (3,)); alpha = np.zeros(px.shape)
# dome
m = kind == 1
if m.any():
    n = nrm(P[m] - CTR); d = D[m]
    ci = np.clip(-(d*n).sum(-1), 0, 1); th = np.arccos(ci)
    polar = np.arccos(np.clip(n[:, 1], -1, 1))
    s = 0.58 + 0.66*np.cos(polar)**1.2                   # evaporated film thins towards the rim
    rf = d + 2*ci[:, None]*n
    col[m] = coat(th, s)*env(rf)
    alpha[m] = 1
# flange top: the same film, thinnest
m = kind == 2
if m.any():
    n = np.array([0, 1.0, 0]); d = D[m]; ci = np.clip(-(d*n).sum(-1), 0, 1); th = np.arccos(ci)
    rf = d + 2*ci[:, None]*n
    col[m] = 0.26*coat(th, np.full(th.shape, 0.56))*env(rf)
    alpha[m] = 1
# flange edge: fine-ground, a soft grey lit by the rig
m = kind == 3
if m.any():
    pp = P[m]; n = nrm(np.stack([pp[:, 0], np.zeros(len(pp)), pp[:, 2]], -1))
    lam = 0.10 + 0.55*np.clip((n*BOX).sum(-1), 0, 1)[:, None] + 0.35*np.clip((n*STRIP).sum(-1), 0, 1)[:, None] + 0.25*BLUE*np.clip((n*RIM).sum(-1), 0, 1)[:, None]
    col[m] = 0.09*lam
    alpha[m] = 1
# contact shadow on the (invisible) ground
gm = (kind == 0) & (tg > 0)
rr = np.sqrt(pg[..., 0]**2 + (pg[..., 2]+0.05)**2)
sh = 0.62*np.exp(-np.clip(rr - FL_R, 0, None)/0.13) * (rr >= FL_R*0.98)
alpha = np.where(gm, np.clip(sh, 0, 1), alpha)

# tone map (soft filmic) and sRGB
lum = (col*np.array([.2126,.7152,.0722])).sum(-1, keepdims=True); col = np.clip(lum + 1.3*(col-lum), 0, None)
x = col*1.3; x = x/(1 + x*0.55)
srgb = np.where(x <= 0.0031308, 12.92*x, 1.055*np.power(np.clip(x, 0, None), 1/2.4) - 0.055)
srgb = np.clip(srgb, 0, 1)
pre = srgb*alpha[..., None]
pre = pre.reshape(FH, SS, FW, SS, 3).mean((1, 3)); al = alpha.reshape(FH, SS, FW, SS).mean((1, 3))
rgb = np.where(al[..., None] > 1e-4, pre/np.maximum(al[..., None], 1e-4), 0)
img = np.dstack([np.clip(rgb*255+.5, 0, 255), np.clip(al*255+.5, 0, 255)]).astype(np.uint8)
Image.fromarray(img, 'RGBA').save(OUT)
print('wrote', OUT, FW, FH)
