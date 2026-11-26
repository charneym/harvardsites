#!/usr/bin/env python3
"""MOS Electronic hero (HOME_BRIEF update 2c: a crafted render of the firm's real product). One bare multilayer
printed circuit board with MOS's signature pink solder mask (the "Pink Circuit Board" of mos-electronic.de's own home
banner) and gold (ENIG) pads: a BGA field, a QFP with fan-out buses, plated through-hole headers, plugged and tented
vias (MOS runs its own hole-plugging line), a heavy-copper power trace and pour, mounting holes and the layer stack on
the cut edge. Drawn as copper / mask / silkscreen layers at 40 px per mm, then ray-cast in numpy onto a tilted 1.6 mm
board seen from above, lit by a large soft box behind it (glossy mask sheen, metallic gold) and saved with REAL alpha.
Usage: python3 render.py W H out.png [SS]"""
import sys, math, numpy as np
from PIL import Image, ImageDraw, ImageFilter
W = int(sys.argv[1]) if len(sys.argv) > 1 else 800
H = int(sys.argv[2]) if len(sys.argv) > 2 else 500
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 1
FW, FH = W, H; W, H = W*SS, H*SS
BW, BH, BT = 150.0, 100.0, 1.6           # board size and thickness, mm
D = 40                                     # draw scale px/mm (downsampled by 2 to 20)
TW, TH = int(BW*D), int(BH*D)

def L(): return Image.new('L', (TW, TH), 0)
cu, opn, silk, hole, plug = L(), L(), L(), L(), L()
dc, do, ds, dh, dp = (ImageDraw.Draw(x) for x in (cu, opn, silk, hole, plug))
def P(x, y): return (x*D, y*D)
def circ(d, x, y, r, f=255): d.ellipse([(x-r)*D, (y-r)*D, (x+r)*D, (y+r)*D], fill=f)
def ring(d, x, y, r, w, f=255): d.ellipse([(x-r)*D, (y-r)*D, (x+r)*D, (y+r)*D], outline=f, width=max(1, int(w*D)))
def rect(d, x0, y0, x1, y1, f=255): d.rectangle([x0*D, y0*D, x1*D, y1*D], fill=f)
def orect(d, x0, y0, x1, y1, w=.15): d.rectangle([x0*D, y0*D, x1*D, y1*D], outline=255, width=int(w*D))
def line(d, pts, w, f=255):
    pp = [P(*p) for p in pts]; d.line(pp, fill=f, width=max(1, int(w*D)), joint='curve')
    for p in pts: circ(d, p[0], p[1], w/2, f)
def pad(x0, y0, x1, y1, m=.06):   # SMD pad: copper + mask opening
    rect(dc, x0, y0, x1, y1); rect(do, x0-m, y0-m, x1+m, y1+m)
def tht(x, y, r, hr, sq=False):   # plated through hole
    if sq: rect(dc, x-r, y-r, x+r, y+r); rect(do, x-r-.06, y-r-.06, x+r+.06, y+r+.06)
    else: circ(dc, x, y, r); circ(do, x, y, r+.06)
    circ(dh, x, y, hr)
def via(x, y):                    # tented, plugged via (copper ring under the mask, filled hole)
    circ(dc, x, y, .32); circ(dp, x, y, .16)
def chamf(pts, c=.5):             # 45-degree chamfered polyline
    out = [pts[0]]
    for a, b, n in zip(pts, pts[1:], pts[2:]):
        la = math.dist(a, b); lb = math.dist(b, n); k = min(c, la/2, lb/2)
        out.append((b[0]+(a[0]-b[0])*k/la, b[1]+(a[1]-b[1])*k/la)); out.append((b[0]+(n[0]-b[0])*k/lb, b[1]+(n[1]-b[1])*k/lb))
    out.append(pts[-1]); return out

# ---- bottom copper pour with heavy-copper power feed (MOS: Dickkupfer up to 400 um) ----
rect(dc, 12, 72, 138, 95)
pour_clear = []
# ---- mounting holes ----
for x, y in [(5, 5), (145, 5), (5, 95), (145, 95)]:
    circ(dc, x, y, 3.0); circ(do, x, y, 3.06); circ(dh, x, y, 1.6); ring(ds, x, y, 4.0, .16)
# ---- 2x20 header at the top edge ----
HX0, HY = 30.0, 6.0
for i in range(20):
    for j in range(2):
        tht(HX0+2.54*i, HY+2.54*j, .85, .5, sq=(i == 0 and j == 0))
orect(ds, HX0-1.6, HY-1.6, HX0+2.54*19+1.6, HY+2.54+1.6)
# ---- QFP-80 ----
QX, QY, QP, QO = 104.0, 50.0, .65, 8.2
qpads = {'L': [], 'R': [], 'T': [], 'B': []}
for i in range(20):
    o = (i-9.5)*QP
    pad(QX-QO-1.6, QY+o-.17, QX-QO, QY+o+.17); qpads['L'].append((QX-QO-1.6, QY+o))
    pad(QX+QO, QY+o-.17, QX+QO+1.6, QY+o+.17); qpads['R'].append((QX+QO+1.6, QY+o))
    pad(QX+o-.17, QY-QO-1.6, QX+o+.17, QY-QO); qpads['T'].append((QX+o, QY-QO-1.6))
    pad(QX+o-.17, QY+QO, QX+o+.17, QY+QO+1.6); qpads['B'].append((QX+o, QY+QO+1.6))
pad(QX-3, QY-3, QX+3, QY+3)
for a in range(3):
    for b in range(3): circ(dh, QX-2+2*a, QY-2+2*b, .2)
orect(ds, QX-7.1, QY-7.1, QX+7.1, QY+7.1); circ(ds, QX-5.8, QY-5.8, .45)
# ---- BGA 16x16 ----
BX, BY = 48.0, 52.0
bga = {}
for i in range(16):
    for j in range(16):
        x, y = BX+(i-7.5), BY+(j-7.5)
        circ(dc, x, y, .3); circ(do, x, y, .36); bga[(i, j)] = (x, y)
        if 2 <= i <= 13 and 2 <= j <= 13:   # dog-bone escapes for the inner field
            line(dc, [(x, y), (x+.5, y+.5)], .14); via(x+.5, y+.5)
for x0, y0, sx, sy in [(BX-9.3, BY-9.3, 1, 1), (BX+9.3, BY-9.3, -1, 1), (BX-9.3, BY+9.3, 1, -1), (BX+9.3, BY+9.3, -1, -1)]:
    line(ds, [(x0+sx*2.4, y0), (x0, y0), (x0, y0+sy*2.4)], .16)
circ(ds, BX-10.2, BY-10.2, .45)
# ---- bus: QFP left pins -> BGA right column (fan-out with 45-degree bends) ----
for k, (x, y) in enumerate(qpads['L']):
    bx, by = bga[(15, k-2)] if 2 <= k <= 17 else (None, None)
    if bx is None: continue
    d = by-y
    line(dc, chamf([(x, y), (87.0, y), (87.0-abs(d), by), (bx, by)], .35) if abs(d) > .01 else [(x, y), (bx, by)], .2)
# ---- bus: QFP top pins -> header bottom row (up, left, up) ----
for i, (x, y) in enumerate(qpads['T']):
    yt = 34.0-.6*i; hx = HX0+2.54*i; hy = HY+2.54
    line(dc, chamf([(x, y), (x, yt), (hx, yt), (hx, hy)], .8), .2)
# ---- bus: QFP right pins -> right-edge connector ----
RHX = 140.5
for i in range(10):
    x, y = qpads['R'][2*i]; yh = 50-11.4+2.54*i
    tht(RHX, yh, .85, .5, sq=(i == 0)); tht(RHX+2.54, yh, .85, .5)
    d = yh-y; pts = [(x, y), (121.0, y), (121.0+abs(d), yh), (RHX, yh)] if abs(d) > .01 else [(x, y), (RHX, yh)]
    line(dc, chamf(pts, .35), .22)
orect(ds, RHX-1.6, 50-11.4-1.6, RHX+2.54+1.6, 50-11.4+2.54*9+1.6)
# ---- QFP bottom pins -> vias into the inner layers ----
for i, (x, y) in enumerate(qpads['B']):
    if i % 2: continue
    yv = 62.5+(i % 4)*.9
    line(dc, [(x, y), (x, yv)], .2); via(x, yv)
# ---- BGA left column & bottom row escapes ----
for j in range(16):
    x, y = bga[(0, j)]; line(dc, chamf([(x, y), (x-3.5, y), (x-3.5-1.2, y+1.2*(1 if j > 7 else -1))], .3), .18)
    via(x-3.5-1.2, y+1.2*(1 if j > 7 else -1))
for i in range(2, 14, 2):
    x, y = bga[(i, 15)]; line(dc, [(x, y), (x, y+5.5)], .2); via(x, y+5.5)
# ---- power entry: screw-terminal pads, heavy trace into the pour ----
for y in (40.0, 48.0):
    tht(8.0, y, 1.9, 1.05, sq=(y == 40.0))
orect(ds, 4.2, 35.6, 11.8, 52.4)
line(dc, chamf([(8.0, 48.0), (8.0, 62.0), (18.0, 72.0)], 2.0), 3.0)
line(dc, chamf([(8.0, 40.0), (14.0, 40.0), (22.0, 32.0), (22.0, 20.0)], 1.6), 2.4)
# ---- SMD passives (0603 pairs) with silkscreen bodies, on and off the pour ----
def passive(x, y, vert=False, on_pour=False):
    if vert:
        a, b = (x-.4, y-1.25, x+.4, y-.45), (x-.4, y+.45, x+.4, y+1.25)
    else:
        a, b = (x-1.25, y-.4, x-.45, y+.4), (x+.45, y-.4, x+1.25, y+.4)
    if on_pour:
        rect(dc, a[0]-.45, a[1]-.45, b[2]+.45, b[3]+.45, 0)   # clearance in the pour
    pad(*a); pad(*b)
    if vert: orect(ds, x-.95, y-1.9, x+.95, y+1.9, .12)
    else: orect(ds, x-1.9, y-.95, x+1.9, y+.95, .12)
for r in range(4):
    for c in range(9):
        passive(20+c*4.6, 76.5+r*4.6, vert=(c % 3 == 0), on_pour=True)
for r in range(4):
    for c in range(12):
        passive(70+c*4.6, 76.5+r*4.6, vert=(c % 4 == 1), on_pour=True)
for k in range(6):
    passive(28.0, 40+k*3.2); passive(24.0, 40+k*3.2, vert=True)
for k in range(5):
    passive(122+k*4.0, 66.0, vert=True); passive(92+k*4, 31.0)
# stitching vias in the pour
for c in range(int((138-14)/3)+1):
    via(14+c*3, 73.3)
for r in range(5):
    via(13.6, 75+r*4.4); via(136.4, 75+r*4.4)
# fiducials
for x, y in [(14.0, 14.0), (136.0, 14.0), (136.0, 64.0)]:
    circ(dc, x, y, .5); circ(do, x, y, 1.0)
# ---- thin signal tracks across the upper left quadrant ----
for k in range(7):
    y = 16.0+1.0*k
    line(dc, chamf([(13.0, y), (24.0+k*.4, y), (30.0+k*.4, y+6.0)], .4), .2); via(30.0+k*.4, y+6.0)

# ---- downsample to 20 px/mm and build height / material maps ----
S = D//2; TW2, TH2 = TW//2, TH//2
def arr(im, blur=0):
    im = im.resize((TW2, TH2), Image.LANCZOS)
    if blur: im = im.filter(ImageFilter.GaussianBlur(blur))
    return np.asarray(im, dtype=np.float32)/255.0
CU, OPN, SILK, HOLE, PLUG = arr(cu), arr(opn), arr(silk), arr(hole), arr(plug)
CUb, OPNb = arr(cu, 1.2), arr(opn, 1.0)
SILKb = arr(silk, .7)
# board outline with rounded corners (alpha)
bo = Image.new('L', (TW, TH), 0); ImageDraw.Draw(bo).rounded_rectangle([0, 0, TW-1, TH-1], radius=int(.8*D), fill=255)
BOARD = arr(bo)
rng = np.random.default_rng(7)
noise = Image.fromarray((rng.random((TH2//6, TW2//6))*255).astype(np.uint8)).resize((TW2, TH2), Image.BICUBIC).filter(ImageFilter.GaussianBlur(3))
NOISE = np.asarray(noise, np.float32)/255.0-.5
# height in mm (exaggerated relief so the copper reads through the mask)
HGT = .07*CUb*(1-OPNb) + .05*CU*OPN + .03*SILKb - .05*OPNb*(1-CU) + .004*NOISE - .03*PLUG
hy, hx = np.gradient(HGT, 1.0/S)
def fblur(A, r):
    for _ in range(3):
        for ax in (0, 1):
            c = np.cumsum(np.pad(A, [(r+1, r) if a == ax else (0, 0) for a in (0, 1)], mode='edge'), axis=ax)
            A = (np.take(c, range(2*r+1, c.shape[ax]), axis=ax)-np.take(c, range(0, c.shape[ax]-2*r-1), axis=ax))/(2*r+1)
    return A
CAV = np.clip(fblur(HGT, 4)-HGT, -1, 1)

def lin(c): return (np.array(c)/255.0)**2.2
MASK_LAM, MASK_CU = lin((178, 4, 74)), lin((222, 46, 112))
LAM, GOLD, SLK = lin((150, 140, 96)), np.array([1.0, .70, .27]), lin((236, 234, 230))
EDGE_FR4, EDGE_CU = lin((128, 120, 84)), lin((214, 140, 80))

# ---- camera ----
yaw, el, dist, fov = math.radians(-17.0), math.radians(41.0), 330.0, math.radians(26.0)
cyw, syw = math.cos(yaw), math.sin(yaw)
C = np.array([0.0, -dist*math.cos(el), dist*math.sin(el)])
fwd = -C/np.linalg.norm(C); rgt = np.cross(fwd, [0, 0, 1.0]); rgt /= np.linalg.norm(rgt); up = np.cross(rgt, fwd)
def to_world(u, v, z):            # board mm (u right, v toward the far edge measured from top) -> world
    x, y = u-BW/2, BH/2-v
    return np.stack([x*cyw-y*syw, x*syw+y*cyw, z], -1)
corners = to_world(np.array([0, BW, BW, 0, 0, BW, BW, 0.]), np.array([0, 0, BH, BH, 0, 0, BH, BH]), np.array([BT]*4+[0]*4))
rel = corners-C; px = rel@rgt/(rel@fwd); py = rel@up/(rel@fwd)
f = min(W*.90/(px.max()-px.min()), H*.90/(py.max()-py.min()))
cxp, cyp = W/2-f*(px.max()+px.min())/2, H/2+f*(py.max()+py.min())/2
jj, ii = np.meshgrid(np.arange(W)+.5, np.arange(H)+.5)
dirs = (fwd[None, None]+((jj-cxp)/f)[..., None]*rgt[None, None]-((ii-cyp)/f)[..., None]*up[None, None])
dirs /= np.linalg.norm(dirs, axis=-1, keepdims=True)

def env(R):   # studio: a big soft box behind and above, a narrow strip right, a dim floor
    az = np.arctan2(R[..., 0], R[..., 1]); elv = np.arcsin(np.clip(R[..., 2], -1, 1))
    box = np.exp(-((az+.18)/.50)**4-((elv-.64)/.13)**2)*3.4+np.exp(-((az+.1)/.9)**2-((elv-.5)/.35)**2)*.35
    strip = np.exp(-((az-.95)/.10)**2-((elv-.55)/.45)**4)*1.2
    base = .03+.06*np.clip(R[..., 2], 0, 1)
    return (box+strip+base)[..., None]*np.array([1.0, .98, .97])
KEY = np.array([-.62, .30, .72]); KEY /= np.linalg.norm(KEY)

def sample(A, u, v):              # bilinear lookup, u/v in mm
    x = np.clip(u*S-.5, 0, A.shape[1]-1.001); y = np.clip(v*S-.5, 0, A.shape[0]-1.001)
    x0 = x.astype(int); y0 = y.astype(int); fx = x-x0; fy = y-y0
    a = A[y0, x0]; b = A[y0, x0+1]; c = A[y0+1, x0]; d = A[y0+1, x0+1]
    if A.ndim == 3: fx, fy = fx[..., None], fy[..., None]
    return (a*(1-fx)+b*fx)*(1-fy)+(c*(1-fx)+d*fx)*fy

out = np.zeros((H, W, 3), np.float32); alpha = np.zeros((H, W), np.float32)
# ---- top face ----
t = (BT-C[2])/dirs[..., 2]; Pw = C+dirs*t[..., None]
xr = Pw[..., 0]*cyw+Pw[..., 1]*syw; yr = -Pw[..., 0]*syw+Pw[..., 1]*cyw
u, v = xr+BW/2, BH/2-yr
inb = (u > -.5) & (u < BW+.5) & (v > -.5) & (v < BH+.5)
uu, vv = u[inb], v[inb]
a = sample(BOARD, uu, vv)
cu_, op_, sk_, ho_, pl_ = (sample(A, uu, vv) for A in (CU, OPN, SILK, HOLE, PLUG))
gx, gy = sample(hx, uu, vv), sample(hy, uu, vv); cav = sample(CAV, uu, vv)
nl = np.stack([-gx, gy, np.ones_like(gx)], -1)          # local normal (v axis points toward camera side)
n = np.stack([nl[:, 0]*cyw-nl[:, 1]*syw, nl[:, 0]*syw+nl[:, 1]*cyw, nl[:, 2]], -1); n /= np.linalg.norm(n, axis=-1, keepdims=True)
V = -dirs[inb]; ndv = np.clip((n*V).sum(-1), 1e-3, 1)
R = 2*ndv[:, None]*n-V
E = env(R)
ndl = np.clip(n@KEY, 0, 1)[:, None]
occ = np.clip(1-6*np.clip(cav, 0, 1), .55, 1)[:, None]
diff = (.16+1.0*ndl**1.3)*occ
gold = cu_*op_
masked = 1-op_
mcol = MASK_LAM*(1-cu_[:, None])+MASK_CU*cu_[:, None]
Fm = (.045+.955*(1-ndv)**5)[:, None]
c_mask = mcol*diff*(1-Fm)+Fm*E*.85
F0 = GOLD; Fg = F0+(1-F0)*((1-ndv)**5)[:, None]
c_gold = Fg*(E*.5+.2)+GOLD*.18*diff
c_lam = LAM*diff*.8
c = masked[:, None]*c_mask+(op_*(1-cu_))[:, None]*c_lam+gold[:, None]*c_gold
c = c*(1-sk_[:, None]*masked[:, None])+(sk_*masked)[:, None]*(SLK*diff*.9+Fm*E*.4)
c = c*(1-pl_[:, None]*.35)
# drilled holes: dark barrel with a gold lip
c = c*(1-ho_[:, None])+ho_[:, None]*np.array([.012, .010, .012])
out[inb] = c; alpha[inb] = a
# ---- side faces (the cut edge shows the layer stack) ----
def side(u0, v0, du, dv, length, nrm_local):
    global out, alpha
    nl = np.array(nrm_local, float)
    nw = np.array([nl[0]*cyw-nl[1]*syw, nl[0]*syw+nl[1]*cyw, 0.0])
    p0 = to_world(np.array([u0]), np.array([v0]), np.array([0.0]))[0]
    den = dirs@nw
    t = ((p0-C)@nw)/np.where(np.abs(den) < 1e-9, 1e-9, den)
    Pw = C+dirs*t[..., None]
    rel = Pw-p0; tang = to_world(np.array([u0+du]), np.array([v0+dv]), np.array([0.0]))[0]-p0; tang /= np.linalg.norm(tang)
    s = rel@tang; z = Pw[..., 2]
    m = (den < 0) & (s > .55) & (s < length-.55) & (z > 0) & (z < BT) & (alpha < .5)
    zz = z[m]/BT
    col = np.broadcast_to(EDGE_FR4, (zz.size, 3)).copy()
    for lz in (.04, .22, .41, .59, .78, .96):
        col = col+(EDGE_CU-EDGE_FR4)*np.exp(-((zz-lz)/.018)**2)[:, None]
    pink = (zz > .985) | (zz < .015)
    col[pink] = MASK_LAM
    lam = .35+.75*max(0.0, float(nw@KEY))
    Rf = 2*(-(dirs[m]@nw))[:, None]*nw-(-dirs[m]); col = col*lam+.05*env(Rf)
    out[m] = col; alpha[m] = 1.0
side(0, BH, 1, 0, BW, (0, -1))     # near edge
side(BW, 0, 0, 1, BH, (1, 0))      # right edge
side(0, 0, 0, 1, BH, (-1, 0))      # left edge
# ---- tone map, real alpha, downsample ----
x = out; x = x/(1+.35*x); x = np.clip(x*1.25, 0, 1)**(1/2.2)
rgba = np.dstack([x*alpha[..., None], alpha])
im = Image.fromarray((np.clip(rgba, 0, 1)*255+.5).astype(np.uint8), 'RGBA')
if SS > 1: im = im.resize((FW, FH), Image.LANCZOS)
p = np.asarray(im, np.float32); al = p[..., 3:4]/255.0
p[..., :3] = np.where(al > 1e-3, p[..., :3]/np.maximum(al, 1e-3), 0)
Image.fromarray(np.clip(p+.5, 0, 255).astype(np.uint8), 'RGBA').save(OUT)
print('wrote', OUT, FW, FH)
