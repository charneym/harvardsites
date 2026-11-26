#!/usr/bin/env python3
"""FISCHER Mess- und Regeltechnik hero (HOME_BRIEF update 2c: a crafted render of the firm's real product).
A stainless differential-pressure gauge as FISCHER builds them in Bad Salzuflen (fischermesstechnik.de > Produkte >
Differenzdruck; the dial follows FISCHER's own header photo: white dial, 0 ... 0,6 bar scale, FISCHER mark), seen
face-on: polished bezel, white dial, neck, hex and threaded process connection. 2.5D height-field shading in numpy over a
studio environment (soft box upper left, strip light right, dark floor), saved with REAL alpha against the page ink
(DJ/DP). The pointer and the glass sheen are drawn live by field.js (the pointer moves; the glass lies over it).
Usage: python3 render.py out.png logo.png [W]   prints the dial geometry (centre, radius) in image units."""
import sys, math, json, numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageFilter
OUT = sys.argv[1]; LOGO = sys.argv[2]
FW = int(sys.argv[3]) if len(sys.argv) > 3 else 1000
X0, X1, Y0, Y1 = -1.12, 1.12, -1.12, 2.02
FH = int(round(FW*(Y1-Y0)/(X1-X0)))
SS = 2; W, H = FW*SS, FH*SS
xs = np.linspace(X0, X1, W); ys = np.linspace(Y0, Y1, H)
X, Y = np.meshgrid(xs, ys)          # y grows downward (image space)
px = (X1-X0)/W                      # world units per pixel
def sm(a, b, x): x = np.clip((x-a)/(b-a), 0, 1); return x*x*(3-2*x)
def nrm(v): return v/np.linalg.norm(v, axis=-1, keepdims=True)

def env(r):
    """studio: big soft box upper left, a vertical strip light right, a cool dim fill, dark floor. r: unit dirs, y down."""
    rx, ry, rz = r[..., 0], -r[..., 1], r[..., 2]
    up = np.clip(ry, -1, 1)
    base = 0.10 + 0.22*sm(-0.5, 0.7, up) + 0.38*np.clip(rz, 0, 1)**3   # dark floor -> grey studio, a broad frontal fill
    box = np.exp(-(((rx+0.42)/0.38)**2 + ((ry-0.58)/0.30)**2))*1.25   # soft box
    strip = np.exp(-((rx-0.72)/0.10)**2)*sm(-0.55, -0.15, ry)*sm(0.75, 0.35, ry)*0.85
    rim = np.exp(-((ry+0.62)/0.12)**2)*0.10                     # faint floor bounce line
    return base + box + strip + rim

V = np.array([0, 0, 1.0])
L = nrm(np.array([-0.45, -0.62, 0.65]))   # key light, upper left (y down)

def shade_metal(n, tint=(0.80, 0.82, 0.85), rough=0.0):
    d = np.sum(n*V, -1, keepdims=True)
    r = 2*d*n - V
    e = env(r)[..., None]
    lam = np.clip(np.sum(n*L, -1), 0, 1)[..., None]
    t = np.array(tint)
    return np.clip(e*t*0.95 + lam*t*0.10 + 0.015, 0, 1.2)

col = np.zeros((H, W, 3)); A = np.zeros((H, W))
def put(mask, c):
    global col, A
    m = mask[..., None]
    col = col*(1-m) + c*m
    np.maximum(A, mask, out=A)

R = np.hypot(X, Y); TH = np.arctan2(Y, X)
aa = px*1.2
def disk(r0): return sm(r0+aa, r0-aa, R)

# --- process connection (behind the gauge): threaded stem, hex, neck. All centred on x=0.
def cyl(half, x):
    u = np.clip(x/half, -0.999, 0.999)
    return np.stack([u, np.zeros_like(u), np.sqrt(1-u*u)], -1)
def box(xa, xb, ya, yb):
    return sm(xa-aa, xa+aa, X)*sm(xb+aa, xb-aa, X)*sm(ya-aa, ya+aa, Y)*sm(yb+aa, yb-aa, Y)
# threaded stem 1.62..2.02
st = box(-0.15, 0.15, 1.60, 2.05)
n = cyl(0.15, X)
th = np.sin((Y-1.62)/0.032*2*math.pi)
n[..., 1] += 0.55*th*sm(1.64, 1.66, Y)
n = nrm(n)
c = shade_metal(n, (0.74, 0.76, 0.79))*(0.92+0.08*th[..., None])
put(st, c)
# hex nut 1.30..1.62, across flats 0.62; three faces seen
hx = box(-0.36, 0.36, 1.30, 1.62)
face = np.where(np.abs(X) < 0.18, 0, np.sign(X))
nh = np.stack([face*math.sin(math.radians(60)), np.zeros_like(X), np.where(face == 0, 1.0, math.cos(math.radians(60)))], -1)
# chamfers top and bottom
ch = sm(1.30, 1.34, Y)*sm(1.62, 1.58, Y)
nh[..., 1] += (1-sm(1.30, 1.335, Y))*-0.9 + (1-sm(1.62, 1.585, Y))*0.9
nh = nrm(nh)
c = shade_metal(nh, (0.78, 0.80, 0.83))
edge = np.exp(-((np.abs(X)-0.18)/0.006)**2)*0.35
c = c*(1-edge[..., None]*0.6)
put(hx, c)
# neck 0.90..1.31
nk = box(-0.11, 0.11, 0.90, 1.32)
put(nk, shade_metal(cyl(0.11, X), (0.76, 0.78, 0.81)))
# a contact shadow of the gauge case on the neck
sh = sm(1.12, 0.98, Y)*nk
col *= (1-0.55*sh[..., None])

# --- the gauge: case rim (just visible past the bezel), bezel, dial
RB, RI, RD = 1.0, 0.845, 0.815
# case rim: slightly larger flat dark ring giving depth
cr = disk(1.03)*(1-disk(0.99))
put(cr, np.ones((H, W, 3))*0.10)
# bezel: half-round profile, polished, with fine concentric brushing
bz = disk(RB)*(1-disk(RI))
t = np.clip((R-RI)/(RB-RI), 0, 1)
s = 2*t-1
slope = -s/np.sqrt(np.clip(1-s*s, 0.02, 1))*0.55       # dh/dt of a rounded profile
ux, uy = np.cos(TH), np.sin(TH)
nb = nrm(np.stack([-slope*ux, -slope*uy, np.ones_like(R)], -1))
rng = np.random.default_rng(7)
brush = rng.normal(0, 1, 4096)
bi = ((R/(RB))*4095).astype(int).clip(0, 4095)
c = shade_metal(nb, (0.82, 0.84, 0.87))
c *= (1 + 0.035*brush[bi])[..., None]
put(bz, c)
# glass retaining lip: a thin dark groove and a bright inner edge
gv = np.exp(-((R-RI)/0.006)**2)
col *= (1-0.65*gv[..., None]*bz[..., None]*0 - 0.0)
# dial: matte white, faint radial falloff, inner shadow from the bezel (light from upper left)
dl = disk(RI)
lum = 0.93 - 0.05*(R/RD)**2
# shadow of the bezel lip on the dial: strongest along the upper-left inner edge
dirw = np.clip(-(ux*L[0] + uy*L[1])/np.hypot(L[0], L[1]), 0, 1)
inner = sm(RI-0.09, RI, R)
lum = lum*(1 - 0.38*inner*(0.35+0.65*dirw)) - 0.10*sm(RI-0.02, RI, R)
dial = np.stack([lum*0.985, lum*0.985, lum*0.975], -1)
put(dl, dial)
# the dark recess ring just inside the bezel
ring = disk(RI)*(1-disk(RI-0.012))
col = col*(1-0.7*ring[..., None])

# --- dial print (drawn crisp with PIL at the supersampled size, multiplied in)
pr = Image.new('L', (W, H), 255); d = ImageDraw.Draw(pr)
def P(x, y): return ((x-X0)/(X1-X0)*W, (y-Y0)/(Y1-Y0)*H)
cx, cy = P(0, 0); k = W/(X1-X0)
A0, SPAN, VMAX = -135.0, 270.0, 0.6
def ang(v): return math.radians(A0 + SPAN*v/VMAX)     # from up, clockwise
fnt = lambda s: ImageFont.truetype('/usr/share/fonts/opentype/inter/Inter-Medium.otf', int(s))
fntb = lambda s: ImageFont.truetype('/usr/share/fonts/opentype/inter/Inter-SemiBold.otf', int(s))
for i in range(0, 61):
    v = i/100; a = ang(v)
    major = i % 10 == 0; mid = i % 5 == 0
    r1 = 0.735; r0 = r1 - (0.085 if major else 0.055 if mid else 0.035)
    w = (0.012 if major else 0.0075)*k
    x0, y0 = cx + math.sin(a)*r0*k, cy - math.cos(a)*r0*k
    x1, y1 = cx + math.sin(a)*r1*k, cy - math.cos(a)*r1*k
    d.line([(x0, y0), (x1, y1)], fill=20, width=max(1, int(round(w))))
# scale arc
bb = [cx-0.735*k, cy-0.735*k, cx+0.735*k, cy+0.735*k]
d.arc(bb, A0-90, A0-90+SPAN, fill=20, width=int(0.008*k))
for i in range(0, 7):
    v = i/10; a = ang(v); rr = 0.56
    s = '0' if i == 0 else '0,%d' % i
    f = fnt(0.105*k)
    tw = d.textlength(s, font=f)
    x, y = cx + math.sin(a)*rr*k, cy - math.cos(a)*rr*k
    d.text((x - tw/2, y - 0.062*k), s, font=f, fill=25)
f = fnt(0.085*k); s = 'bar'; tw = d.textlength(s, font=f)
d.text((cx - tw/2, cy + 0.36*k), s, font=f, fill=40)
f = fnt(0.075*k); s = 'Δp'; tw = d.textlength(s, font=f)
d.text((cx - tw/2, cy + 0.13*k), s, font=f, fill=60)
pa = np.asarray(pr).astype(float)/255
col *= pa[..., None]*dl[..., None] + (1-dl[..., None])
# the FISCHER mark on the dial (their own logo, downscaled crisp), centred above the hub
lg = Image.open(LOGO).convert('RGBA')
lw = int(0.44*k); lh = int(lg.height*lw/lg.width)
lg = lg.resize((lw, lh), Image.LANCZOS)
la = np.asarray(lg).astype(float)/255
ox, oy = int(cx - lw/2), int(cy - 0.17*k - lh)
sub = col[oy:oy+lh, ox:ox+lw]
a_ = la[..., 3:4]
sub[:] = sub*(1-a_) + la[..., :3]*a_*0.97

# --- bottom fade (long ease into the ink) and downsample
fade = sm(2.02, 1.66, Y)
A = A*fade
col = np.clip(col, 0, 1)
img = np.dstack([col, A])
im = Image.fromarray((img*255+.5).astype(np.uint8), 'RGBA').resize((FW, FH), Image.LANCZOS)
im.save(OUT)
print(json.dumps({'W': FW, 'H': FH, 'cx': round((0-X0)/(X1-X0), 5), 'cy': round((0-Y0)/(Y1-Y0), 5),
                  'rd': round(RI/(X1-X0), 5), 'rb': round(RB/(X1-X0), 5), 'A0': A0, 'SPAN': SPAN, 'VMAX': VMAX}))
