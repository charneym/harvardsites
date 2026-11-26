#!/usr/bin/env python3
"""Allresist hero (HOME_BRIEF update 2c: a crafted render of the firm's real subject). Allresist makes photo and e-beam
resists (allresist.de > Produkte): the light-sensitive coatings that are spun onto a silicon wafer, exposed and developed
into the patterns of a chip. This renders ONE such wafer, seen in three-quarter view: a 200 mm silicon wafer with its
orientation notch, coated with resist and patterned into a grid of dies. Per pixel, in numpy: a perspective camera ray
hits the wafer disc; the reflectance is the real thin-film interference of a resist film (n = 1.62) on silicon
(n = 3.9) over the visible spectrum, so the coating shows its own colour, slightly varying with radius as a spun film
does; the reflected ray samples a studio environment (one large soft box, one strip light) on the page ink; the die
patterns act as gratings and add the diffraction sheen every patterned wafer shows. The polished edge is a thin band.
Saved with REAL alpha (no ground of its own, DJ/DP).
Usage: python3 render.py W H out.png [SS]"""
import sys, math, numpy as np
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 800
H = int(sys.argv[2]) if len(sys.argv) > 2 else 640
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 1
FW, FH = W, H; W, H = W*SS, H*SS
def nrm(v): return v/np.linalg.norm(v, axis=-1, keepdims=True)
def sm(a, b, x): x = np.clip((x-a)/(b-a), 0, 1); return x*x*(3-2*x)

# ---- spectral helpers: wavelengths 400..700 nm, approximate CIE matching -> linear sRGB
LAM = np.linspace(400, 700, 31)
def g(x, mu, s1, s2): return np.where(x < mu, np.exp(-.5*((x-mu)/s1)**2), np.exp(-.5*((x-mu)/s2)**2))
XB = 1.056*g(LAM, 599.8, 37.9, 31.0)+.362*g(LAM, 442.0, 16.0, 26.7)-.065*g(LAM, 501.1, 20.4, 26.2)
YB = .821*g(LAM, 568.8, 46.9, 40.5)+.286*g(LAM, 530.9, 16.3, 31.1)
ZB = 1.217*g(LAM, 437.0, 11.8, 36.0)+.681*g(LAM, 459.0, 26.0, 13.8)
M = np.array([[3.2406, -1.5372, -.4986], [-.9689, 1.8758, .0415], [.0557, -.2040, 1.0570]])
CMF = (M @ np.stack([XB, YB, ZB])).T          # (31,3) linear rgb per wavelength
CMF_N = CMF / (YB.sum())                       # normalised so a flat spectrum of 1 has Y = 1
WHITE = CMF_N.sum(0)

def film_rgb(d, cos_i):
    """reflectance colour of a resist film (n1) of thickness d (nm) on silicon, at incidence cos_i; s/p averaged."""
    n0, n1, n2 = 1.0, 1.62, 3.9+0.02j
    sin_i = np.sqrt(np.clip(1-cos_i**2, 0, 1))
    c1 = np.sqrt(1-(n0*sin_i/n1)**2+0j); c2 = np.sqrt(1-(n0*sin_i/n2)**2+0j)
    out = 0
    for pol in (0, 1):
        if pol == 0:
            r01 = (n0*cos_i-n1*c1)/(n0*cos_i+n1*c1); r12 = (n1*c1-n2*c2)/(n1*c1+n2*c2)
        else:
            r01 = (n1*cos_i-n0*c1)/(n1*cos_i+n0*c1); r12 = (n2*c1-n1*c2)/(n2*c1+n1*c2)
        ph = 4*np.pi*n1*d[..., None]*c1[..., None]/LAM          # (...,31)
        e = np.exp(1j*ph)
        r = (r01[..., None]+r12[..., None]*e)/(1+r01[..., None]*r12[..., None]*e)
        out = out + .5*np.abs(r)**2
    return out @ CMF_N / WHITE                                   # (...,3), ~reflectance per channel

def spec_rgb(lam):
    """colour of a single wavelength (for diffraction), unit-ish brightness, 0 outside 400..700"""
    i = np.clip((lam-400)/10, 0, 30)
    i0 = np.floor(i).astype(int); i1 = np.minimum(i0+1, 30); f = (i-i0)[..., None]
    c = CMF[i0]*(1-f)+CMF[i1]*f
    c = np.clip(c, 0, None)/ .9
    return c*sm(380, 420, lam)[..., None]*(1-sm(680, 720, lam))[..., None]

# ---- camera
CAM = np.array([0.0, -3.05, 2.55]); TGT = np.array([0.0, 0.06, -0.02]); FOV = math.radians(30)
fw = nrm(TGT-CAM); rt = nrm(np.cross(fw, [0, 0, 1])); up = np.cross(rt, fw)
asp = W/H; th = math.tan(FOV/2)
ys, xs = np.mgrid[0:H, 0:W]
px = ((xs+.5)/W*2-1)*th*asp; py = (1-(ys+.5)/H*2)*th
D = nrm(px[..., None]*rt+py[..., None]*up+fw)

# wafer: radius 1 in the plane z = 0, notch at angle NA, in-plane die grid rotated by ROT
ROT = math.radians(14); NA = math.radians(-90+14); TH = 0.016
def env(R):
    """studio environment around the wafer, on the page ink: one large soft box up and behind, a strip light right"""
    ink = np.array([.006, .022, .048])
    base = ink + np.array([.025, .06, .11])*sm(.3, 1.3, R[..., 2])[..., None]
    # soft box: a wide panel ahead and above, seen in the far half of the wafer as one broad soft highlight
    a = np.arctan2(R[..., 0], R[..., 1]); el = np.arcsin(np.clip(R[..., 2], -1, 1))
    box = sm(-.70, -.30, a)*(1-sm(.05, .45, a))*sm(.50, .64, el)*(1-sm(.68, .78, el))
    strip = sm(.30, .36, a)*(1-sm(.40, .48, a))*sm(.70, .76, el)*(1-sm(.86, .96, el))
    fill = sm(.70, 1.0, el)*(1-sm(1.25, 1.45, el))*(1-sm(.5, 1.1, np.abs(a)))
    return base + fill[..., None]*np.array([.20, .30, .42]) + box[..., None]*np.array([1.0, .98, .95])*1.8 + strip[..., None]*np.array([.85, .92, 1.0])*1.3

col = np.zeros((H, W, 3)); alpha = np.zeros((H, W))
# --- top face
t = -CAM[2]/D[..., 2]
P = CAM+t[..., None]*D
x, y = P[..., 0], P[..., 1]
r = np.hypot(x, y)
ang = np.arctan2(y, x)
# notch: a small V cut at the rim
da = np.angle(np.exp(1j*(ang-NA)))
notch = (r > 1-0.035*(1-np.abs(da)/0.035)) & (np.abs(da) < 0.035)
hit = (t > 0) & (r <= 1) & ~notch
# in-plane die coordinates
u = x*math.cos(ROT)+y*math.sin(ROT); v = -x*math.sin(ROT)+y*math.cos(ROT)
DIE = 0.092; LANE = 0.0042
fu = np.mod(u/DIE, 1); fv = np.mod(v/DIE, 1)
lane = (np.minimum(fu, 1-fu)*DIE < LANE/2) | (np.minimum(fv, 1-fv)*DIE < LANE/2)
iu = np.floor(u/DIE); iv = np.floor(v/DIE)
# a die is "full" if its four corners are inside the usable area (edge exclusion 3 mm of 100)
def inside(a, b): return np.hypot(a*math.cos(ROT)-b*math.sin(ROT), a*math.sin(ROT)+b*math.cos(ROT)) < .955
full = inside(iu*DIE, iv*DIE) & inside((iu+1)*DIE, iv*DIE) & inside(iu*DIE, (iv+1)*DIE) & inside((iu+1)*DIE, (iv+1)*DIE)
# sub-structure inside each die: a 7 x 7 field of cells of slightly different film thickness (circuit blocks), two of
# them fine gratings (memory arrays) that diffract, and a thin bond-pad ring around the edge of the die
cu = np.floor(fu*7); cv = np.floor(fv*7)
hsh = np.mod(np.sin(cu*12.9898+cv*78.233+iu*3.1+iv*7.7)*43758.5453, 1.0)
hsh2 = np.mod(np.sin(cu*39.3468+cv*11.135)*24634.6345, 1.0)        # the same layout in every die
inner = (fu > .06) & (fu < .94) & (fv > .06) & (fv < .94)
cellgap = (np.mod(fu*7, 1) < .07) | (np.mod(fv*7, 1) < .07)
blkA = inner & (cv <= 3) & ~cellgap
blkB = inner & (cv >= 4) & (cu <= 4) & ~cellgap
pads = full & ~lane & ~inner
V = -D
R = D - 2*D[..., 2:3]*np.array([0, 0, 1.0])       # mirror about the plane (normal +z)
cosi = np.clip(V[..., 2], .05, 1)
# resist thickness: a spun film, a touch thicker towards the edge, with faint radial striations
d = 118 + 9*r**2 + 1.2*np.sin(ang*23+r*9)
d_full = np.where(full & ~lane, d, 0.0)              # patterned dies keep the resist; lanes and the rim are bare silicon
d_full = np.where(pads, d*0.86, d_full)
d_full = np.where(full & ~lane & inner, d*(0.93+0.07*hsh2), d_full)
d_full = np.where(full & ~lane & inner & cellgap, d*0.97, d_full)
refl = np.concatenate([film_rgb(d_full[i:i+64], cosi[i:i+64]) for i in range(0, H, 64)], 0)
E = env(R)
c = refl*E
# diffraction sheen from the die gratings (pitch ~ 1.2 µm), lit by the soft box: grating equation along u / v
Ldir = nrm(np.array([0.0, 0.55, 0.83]))
Lu = Ldir[0]*math.cos(ROT)+Ldir[1]*math.sin(ROT); Lv = -Ldir[0]*math.sin(ROT)+Ldir[1]*math.cos(ROT)
Vu = V[..., 0]*math.cos(ROT)+V[..., 1]*math.sin(ROT); Vv = -V[..., 0]*math.sin(ROT)+V[..., 1]*math.cos(ROT)
lamA = np.abs(Vu+Lu)*1700.0; lamB = np.abs(Vv+Lv)*2300.0
dif = blkA[..., None]*(spec_rgb(lamA)+spec_rgb(lamA/2)*.6)*.30 + blkB[..., None]*(spec_rgb(lamB)+spec_rgb(lamB/2)*.6)*.26
dif = dif*(full & ~lane)[..., None]
c = c + dif
# a faint second-order sheen over the whole patterned area keeps the dies alive where the first order misses
c = c + (full & ~lane & inner)[..., None]*(spec_rgb(np.abs(Vv+Lv)*1150.0)*.16+spec_rgb(np.abs(Vu+Lu)*1150.0)*.08)
col = np.where(hit[..., None], c, col); alpha = np.where(hit, 1.0, alpha)
# --- polished edge: the side of the disc (cylinder r = 1, -TH < z < 0), only where the top face is not hit
ox, oy = CAM[0], CAM[1]; dx, dy = D[..., 0], D[..., 1]
A = dx*dx+dy*dy; B = 2*(ox*dx+oy*dy); C = ox*ox+oy*oy-1
disc = B*B-4*A*C
tc = (-B-np.sqrt(np.clip(disc, 0, None)))/(2*A)
Pc = CAM+tc[..., None]*D
side = (disc > 0) & (Pc[..., 2] < 0) & (Pc[..., 2] > -TH) & ~hit
angc = np.arctan2(Pc[..., 1], Pc[..., 0])
side &= ~(np.abs(np.angle(np.exp(1j*(angc-NA)))) < 0.035)
Nc = np.stack([Pc[..., 0], Pc[..., 1], np.zeros_like(tc)], -1)
Rc = D-2*np.sum(D*Nc, -1, keepdims=True)*Nc
ce = .34*env(Rc)+.04
col = np.where(side[..., None], ce, col); alpha = np.where(side, 1.0, alpha)
# tonemap (soft shoulder), to sRGB
col = 1-np.exp(-col*1.35)
col = np.where(col <= .0031308, 12.92*col, 1.055*np.power(np.clip(col, 0, 1), 1/2.4)-.055)
img = np.dstack([np.clip(col, 0, 1)*255, alpha*255]).astype(np.float32)
im = Image.fromarray(img.astype(np.uint8), 'RGBA')
if SS > 1:
    # downsample premultiplied so the edge never darkens
    a = img[..., 3:4]/255.0
    pm = np.dstack([img[..., :3]*a, img[..., 3:4]])
    pm = pm.reshape(FH, SS, FW, SS, 4).mean((1, 3))
    a2 = pm[..., 3:4]/255.0
    rgb = np.where(a2 > 0, pm[..., :3]/np.maximum(a2, 1e-6), 0)
    im = Image.fromarray(np.dstack([rgb, pm[..., 3:4]]).clip(0, 255).astype(np.uint8), 'RGBA')
bb = im.getbbox(); print('bbox', bb, 'size', im.size)
im.save(OUT)
