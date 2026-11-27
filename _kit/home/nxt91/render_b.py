#!/usr/bin/env python3
"""NXT AG hero: a coated silicon wafer, seen at an angle, whose colours are computed from real thin-film interference
(the principle on nxt91.com > OLED > Principle of Measurement: phase differences between front and rear reflection of a
thin layer cause interference). A SiO2-like film (n=1.46) on Si, thickness varying smoothly across the wafer
(a deposition non-uniformity, the kind a Xelas SCAN map shows), normal-incidence Fresnel reflectance over 380-780 nm,
integrated with CIE 1931 colour matching (Wyman 2013 fit) to sRGB. Output: hero.webp with real alpha, plus the
wafer ellipse geometry for field.js.
TOP-FIX B (2026-11-27): the light was already a neutral studio (key softbox upper left, fill, far-edge rim); the cast
shadow is now fainter and wider, offset a little away from the key. Usage: python3 render_b.py [out.webp]"""
import sys, numpy as np
from PIL import Image, ImageFilter
SS = 2; W, H = 1200, 820
w, h = W*SS, H*SS
cx, cy, rx, ry = 600*SS, 400*SS, 530*SS, 275*SS    # top face ellipse (wafer tilted ~35 deg from face-on)
th = 11*SS                                           # visible edge thickness
yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
u = (xx-cx)/rx; v = (yy-cy)/ry                       # wafer-plane coords, unit disc
r2 = u*u+v*v
# notch at the near (bottom) edge
notch = (np.abs(u) < 0.022*(1-np.clip((1-np.sqrt(r2))/0.035,0,1))) & (v > 0.94)
top = (r2 <= 1.0) & ~notch
# ---- film thickness map (nm): bowl-shaped deposition profile + gentle tilt + slow ripple
d = 118 + 128*r2**1.4 + 10*u - 8*v + 4*np.sin(3.1*u+1.3)*np.cos(2.3*v-.4)
# ---- spectral reflectance
lam = np.arange(380, 781, 10, dtype=np.float32)
def g(l, m, s1, s2):
    s = np.where(l < m, s1, s2); return np.exp(-.5*((l-m)/s)**2)
xb = 1.056*g(lam,599.8,37.9,31.0)+.362*g(lam,442.0,16.0,26.7)-.065*g(lam,501.1,20.4,26.2)
yb = .821*g(lam,568.8,46.9,40.5)+.286*g(lam,530.9,16.3,31.1)
zb = 1.217*g(lam,437.0,11.8,36.0)+.681*g(lam,459.0,26.0,13.8)
# D65-ish illuminant (smooth approximation)
S = 1+0.25*np.cos((lam-460)/320*np.pi)
n0 = 1.0; n1 = 1.46
nSi = (3.6 + 0.35*(550/lam)**2.2) + 1j*(0.005+0.12*(420/lam)**6)
r01 = (n0-n1)/(n0+n1); r12 = (n1-nSi)/(n1+nSi)
dd = d[top].astype(np.float32)
X = np.zeros_like(dd); Y = np.zeros_like(dd); Z = np.zeros_like(dd)
for i, l in enumerate(lam):
    ph = np.exp(-2j*2*np.pi*n1*dd/l)
    R = np.abs((r01 + r12[i]*ph)/(1 + r01*r12[i]*ph))**2
    X += R*xb[i]*S[i]; Y += R*yb[i]*S[i]; Z += R*zb[i]*S[i]
Yw = (yb*S).sum(); X /= Yw; Y /= Yw; Z /= Yw
M = np.array([[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.2040,1.0570]])
lin = np.stack([X,Y,Z],1) @ M.T
lin = np.clip(lin, 0, None)
# ---- lighting: a large soft area light above-left reflected in the face, falling off to the near-right
uu, vv = u[top], v[top]
# softbox: a soft-edged rectangle reflected in the mirror-like face, plus a dim fill
sb = 1/(1+np.exp(-(.36-np.abs(uu+.30))/.035)) * 1/(1+np.exp(-(.17-np.abs(vv+.50))/.028))
env = 0.62 + 0.55*sb + .30*np.exp(-((uu-.62)**2/.05 + (vv+.05)**2/.8))
lin = lin*env[:,None]*1.35
# real coated wafers read less saturated than the bare interference colour: pull 30% toward luminance
Yl = (lin*np.array([.2126,.7152,.0722])).sum(1, keepdims=True); lin = Yl + (lin-Yl)*.85
# soft specular sheen of the light itself (desaturates where bright)
spec = 0.16*np.exp(-((uu+.40)**2/.09 + (vv+.58)**2/.03))
lin = lin + spec[:,None]
# rim: a faint bright bevel line along the far edge
rr = np.sqrt(r2[top]); rim = np.clip((rr-.985)/.015, 0, 1)*np.clip(-vv*1.2+.2, 0, 1)
lin = lin*(1-.5*rim[:,None]) + .55*rim[:,None]
def srgb(c):
    c = np.clip(c, 0, 1); return np.where(c <= .0031308, 12.92*c, 1.055*c**(1/2.4)-.055)
rgb = np.zeros((h, w, 3), np.float32); a = np.zeros((h, w), np.float32)
rgb[top] = srgb(lin); a[top] = 1
# ---- the wafer edge (bare silicon, dark grey-blue), visible below the near half
ve = (yy-cy-th)/ry; r2e = u*u+ve*ve
edge = (r2e <= 1.0) & ~top & (yy > cy)
shade = 0.10 + 0.10*np.clip(1-np.abs(u), 0, 1)
rgb[edge] = np.stack([shade*.80, shade*.9, shade*1.05], -1)[edge]; a[edge] = 1
img = Image.fromarray((np.dstack([rgb, a])*255).astype(np.uint8), 'RGBA')
img = img.resize((W, H), Image.LANCZOS)
# soft contact shadow under the wafer (separate, real alpha, wide falloff)
sh = Image.new('L', (W, H), 0)
sy, sx = np.mgrid[0:H, 0:W].astype(np.float32)
sv = np.exp(-(((sx-615)/600)**2 + ((sy-452)/275)**2)**2*2.2)*0.32
# taper to exactly zero well inside every image border so no edge of the image rect can show (DJ/DP)
sv *= (np.clip(np.minimum(sx, W-1-sx)/90, 0, 1)**2) * (np.clip(np.minimum(sy, H-1-sy)/90, 0, 1)**2)
sh = Image.fromarray((sv*255).astype(np.uint8), 'L').filter(ImageFilter.GaussianBlur(30))
base = Image.new('RGBA', (W, H), (2, 7, 13, 0)); base.putalpha(sh)
out = Image.alpha_composite(base, img)
out.save(sys.argv[1] if len(sys.argv) > 1 else 'hero.webp', quality=90, method=6)
print('hero.webp', out.size, 'ellipse cx,cy,rx,ry (img units):', 600/W, 400/H, 530/W, 275/H)
