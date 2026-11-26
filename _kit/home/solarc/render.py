#!/usr/bin/env python3
"""SOLARC hero (HOME_BRIEF update 2c: a crafted render of the firm's real product). One small glass-laminated
monocrystalline solar module of the kind SOLARC builds to customer specification (solarc.de > Produkte > Solarmodule:
"Kundenspezifische Solarmodule ... Kristallin ... Glas oder ETFE laminiert", 40 mW to 200 W): 4 x 6 pseudo-square cells
with silver fingers and three busbars, string ribbons, cross-connectors at both ends, a white backsheet border, under
clear glass whose edge shows its green tint. Ray-traced in numpy (box intersection, Schlick-Fresnel reflection of a soft
studio environment), unbranded, saved with REAL alpha (coverage only; no ground of its own, DJ/DP).
Usage: python3 render.py W H out.png [SS]"""
import sys, math, numpy as np
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 600
H = int(sys.argv[2]) if len(sys.argv) > 2 else 700
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 1
FW, FH = W, H; W, H = W*SS, H*SS
def nrm(v): return v/np.maximum(np.linalg.norm(v, axis=-1, keepdims=True), 1e-9)
def sm(a, b, x): x = np.clip((x-a)/(b-a), 0, 1); return x*x*(3-2*x)

# ---------- module geometry (units: cell pitch = 1) ----------
NC, NR = 4, 6            # columns, rows
GAP = 0.035              # gap between cells
BX, BY = 0.20, 0.36      # backsheet border (x), (y: room for the cross-connectors)
CW = 1-GAP
MW = NC*1-GAP+2*BX       # module width
MH = NR*1-GAP+2*BY
T = 0.11                 # laminate thickness (glass)
HX, HY = MW/2, MH/2

# ---------- texture on the top face, evaluated analytically at (u, v) in module units ----------
def surface(u, v):
    """u in [0,MW], v in [0,MH] (v=0 bottom). returns albedo rgb, metal mask, cell mask"""
    n = u.shape[0]
    col = np.zeros((n, 3)); metal = np.zeros(n)
    # backsheet: warm white, very slightly textured
    col[:] = np.array([0.60, 0.60, 0.58])
    x = u-BX; y = v-BY
    ci = np.floor(x); ri = np.floor(y)
    fx = x-ci; fy = y-ri
    inside = (ci >= 0) & (ci < NC) & (ri >= 0) & (ri < NR) & (fx < CW) & (fy < CW)
    # pseudo-square: chamfered corners (white diamonds between cells)
    cx = np.abs(fx-CW/2); cy = np.abs(fy-CW/2)
    cham = (cx+cy) < CW-0.085
    cell = inside & cham
    # cell colour: deep navy with a faint crystal sheen varying per cell
    seed = (np.sin(ci*12.9898+ri*78.233)*43758.5453) % 1.0
    base = np.stack([0.008+0.004*seed, 0.014+0.006*seed, 0.042+0.014*seed], 1)
    rad = np.sqrt((fx-CW/2)**2+(fy-CW/2)**2)
    base = base*(1.0-0.18*rad)[:, None]
    col = np.where(cell[:, None], base, col)
    # fingers: thin horizontal silver lines (24 per cell)
    fp = (fy*24) % 1.0
    fing = cell & (np.abs(fp-0.5) < 0.06)
    col = np.where(fing[:, None], col*0.7+np.array([0.30, 0.32, 0.36])*0.3, col)
    # busbars: three vertical per cell, continuing as string ribbons across the gaps
    bb = np.zeros(n, bool)
    for k in (1/6, 3/6, 5/6):
        bb |= (np.abs(fx-k*CW) < 0.012)
    col_ok = (ci >= 0) & (ci < NC) & (fx < CW)
    vy = (v > BY-0.16) & (v < MH-BY+0.16)
    ribbon = bb & col_ok & vy
    # cross-connectors at the top and the bottom
    cc = ((np.abs(v-(BY-0.16)) < 0.05) | (np.abs(v-(MH-BY+0.16)) < 0.05)) & (u > BX+0.05) & (u < MW-BX-0.05)
    mt = ribbon | cc
    col = np.where(mt[:, None], np.array([0.70, 0.71, 0.73]), col)
    metal = np.where(mt, 1.0, np.where(fing, 0.5, 0.0))
    return col, metal, cell

# ---------- environment: a dark warm studio with one large soft box up-left and a warm sun-yellow kicker right ----------
def env(r):
    y = r[:, 1]; x = r[:, 0]; z = r[:, 2]
    c = np.zeros((r.shape[0], 3)) + np.array([0.035, 0.033, 0.03])
    c += np.array([0.10, 0.10, 0.10])*sm(-0.2, 0.9, y)[:, None]
    # soft box (a wide panel up and to the left)
    sb = np.exp(-(((x+0.05+0.55*y)/0.16)**2))*sm(-0.4,0.6,y)
    c += np.array([1.6, 1.58, 1.55])*sb[:, None]
    # long strip highlight
    st = np.exp(-(((x-0.15)/0.05)**2))*sm(0.2, 0.6, y)
    c += np.array([0.45, 0.45, 0.45])*st[:, None]
    # warm kicker from the right (the SOLARC yellow)
    wk = np.exp(-(((x-0.85)/0.25)**2)-(((y-0.1)/0.35)**2))
    c += np.array([0.98, 0.79, 0.03])*0.45*wk[:, None]
    return c

# ---------- camera (orthographic) and the module orientation ----------
ax, ay, az = math.radians(-44), math.radians(28), math.radians(-12)
def rot(ax, ay, az):
    Rx = np.array([[1, 0, 0], [0, math.cos(ax), -math.sin(ax)], [0, math.sin(ax), math.cos(ax)]])
    Ry = np.array([[math.cos(ay), 0, math.sin(ay)], [0, 1, 0], [-math.sin(ay), 0, math.cos(ay)]])
    Rz = np.array([[math.cos(az), -math.sin(az), 0], [math.sin(az), math.cos(az), 0], [0, 0, 1]])
    return Ry@Rx@Rz
R = rot(ax, ay, az)          # local -> world
Ri = R.T
# world: camera looks along -z, y up. local: module in xy plane, top face normal +z
SC = 5.35/ min(W, H)*min(W, H)/H*1.0
scale = (MH*0.98)/H          # world units per pixel (fit by height, then refined below)
# perspective camera on +z at distance D, fitted to the projected corners
D = 16.0; FOC = 1.0
corners = np.array([[sx*HX, sy*HY, sz*T/2] for sx in (-1, 1) for sy in (-1, 1) for sz in (-1, 1)])@R.T
prj = corners[:, :2]/(D-corners[:, 2:3])
x0, x1 = prj[:, 0].min(), prj[:, 0].max(); y0, y1 = prj[:, 1].min(), prj[:, 1].max()
pad = 1.05
scale = max((x1-x0)*pad/W, (y1-y0)*pad/H)
cx0, cy0 = (x0+x1)/2, (y0+y1)/2
jj, ii = np.mgrid[0:H, 0:W]
sx_ = (ii.ravel()+0.5-W/2)*scale+cx0
sy_ = -(jj.ravel()+0.5-H/2)*scale+cy0
N = sx_.size
ro = np.tile(np.array([0, 0, D]), (N, 1)).astype(float)
rd = nrm(np.stack([sx_, sy_, -np.ones(N)], 1))
# to local
lo = ro@Ri.T; ld = rd@Ri.T
B = np.array([HX, HY, T/2])
with np.errstate(divide='ignore', invalid='ignore'):
    t1 = (-B-lo)/ld; t2 = (B-lo)/ld
tmin = np.minimum(t1, t2); tmax = np.maximum(t1, t2)
tn = tmin.max(1); tf = tmax.min(1)
hit = (tn < tf) & (tf > 0)
face = tmin.argmax(1)          # 0:x 1:y 2:z
p = lo+ld*tn[:, None]
out = np.zeros((N, 3)); alpha = hit.astype(float)
V = -rd                         # to viewer (world)
# top face
top = hit & (face == 2) & (p[:, 2] > 0)
nW = np.array([0, 0, 1.0])@R.T
L = nrm(np.array([-0.5, 0.75, 0.6]))
idx = np.where(top)[0]
u = p[idx, 0]+HX; v = p[idx, 1]+HY
alb, met, cell = surface(u, v)
ndl = max(float(nW@L), 0)
diff = alb*(0.25+0.75*ndl)
# metal glints: metal picks up the environment more
rW = nrm(-V[idx]+2*(V[idx]@nW)[:, None]*nW)   # reflection of the eye ray about the glass normal
E = env(rW)
cosv = np.clip(V[idx]@nW, 0, 1)
F = (0.04+0.96*(1-cosv)**5)[:, None]
metcol = alb*(0.35+0.65*E.mean(1, keepdims=True))
col = np.where(met[:, None] > 0, diff*(1-met[:, None]*0.5)+metcol*met[:, None]*0.6, diff)
# glass: Fresnel reflection of the studio, plus a faint inner haze at the edges
col = col*(1-F*2.5)+E*(F*2.5)
# the soft box seen in the glass: a broad diagonal sheen across the face, falling off gently both sides
dg = (u/MW)*0.55+(1-v/MH)*0.45
sh = np.exp(-((dg-0.36)/0.13)**2)*0.15+np.exp(-((dg-0.47)/0.025)**2)*0.07
col = col+np.array([1.0, 0.99, 0.96])*sh[:, None]
# subtle edge darkening of the laminate near the border
eb = np.minimum.reduce([u, MW-u, v, MH-v])
col *= (0.86+0.14*sm(0.0, 0.08, eb))[:, None]
out[idx] = col
# side faces: glass edge, green-tinted, darker, with a highlight line along the top edge
side = hit & ~top
sidx = np.where(side)[0]
fn = np.zeros((sidx.size, 3))
fa = face[sidx]; sg = np.sign(p[sidx, fa])
fn[np.arange(sidx.size), fa] = sg
fnW = fn@R.T
sd = np.clip(fnW@L, 0, 1)
zl = (p[sidx, 2]+T/2)/T
g = np.array([0.18, 0.27, 0.24])*(0.45+0.9*sd)[:, None]
g = g*(0.7+0.5*zl)[:, None]
g += np.array([0.55, 0.62, 0.58])*np.exp(-((1-zl)/0.12)**2)[:, None]*0.7
out[sidx] = g

img = np.clip(out, 0, 1)**(1/2.2)
rgba = np.concatenate([img.reshape(H, W, 3), alpha.reshape(H, W, 1)], 2)
im = Image.fromarray((rgba*255+0.5).astype(np.uint8), 'RGBA')
if SS > 1:
    # premultiplied downsample for clean coverage
    a = np.asarray(im).astype(float)/255
    pm = a[..., :3]*a[..., 3:4]
    pm = pm.reshape(FH, SS, FW, SS, 3).mean((1, 3)); al = a[..., 3].reshape(FH, SS, FW, SS).mean((1, 3))
    rgb = np.where(al[..., None] > 0, pm/np.maximum(al[..., None], 1e-6), 0)
    im = Image.fromarray((np.concatenate([rgb, al[..., None]], 2)*255+0.5).clip(0, 255).astype(np.uint8), 'RGBA')
im.save(OUT)
print('wrote', OUT, im.size)
