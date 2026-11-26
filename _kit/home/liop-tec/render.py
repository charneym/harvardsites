#!/usr/bin/env python3
"""LIOP-TEC hero (HOME_BRIEF update 2c: a crafted render of the firm's real product). One STAR-series kinematic mirror
mount as LIOP-TEC builds it (liop-tec.com > Opto-Mechanics; product photos SR100 / SR200i: black anodised front plate
holding a round mirror, blue anodised back plate and base, fine-thread 170 TPI adjusters at the back), standing on an
optical breadboard with M6 holes on a 25 mm (1 inch) grid. The mirror faces right; the dye-laser beam is drawn live by
field.js on the projected points this script prints. SDF ray marching in numpy with soft shadows and AO; the table
fades out radially over a long distance and the result is saved with REAL alpha over the page ink (DJ/DP).
Usage: python3 render.py W H out.png [SS]"""
import sys, math, json, numpy as np
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 560
H = int(sys.argv[2]) if len(sys.argv) > 2 else 400
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 1
FW, FH = W, H; W, H = W*SS, H*SS
INK = np.array([14, 14, 28])/255.0          # page ink (#0e0e1c)
def nrm(v): return v/np.maximum(np.linalg.norm(v, axis=-1, keepdims=True), 1e-9)
def sm(a, b, x): x = np.clip((x-a)/(b-a), 0, 1); return x*x*(3-2*x)
def L(v): return np.sqrt((v*v).sum(-1))

YAW = math.radians(90)            # local +z (mirror normal) -> world +x
cy, sy = math.cos(YAW), math.sin(YAW)
def to_local(p):
    x, y, z = p[:, 0], p[:, 1], p[:, 2]
    return np.stack([x*cy - z*sy, y, x*sy + z*cy], -1)
def to_world_dir(v):
    x, y, z = v[..., 0], v[..., 1], v[..., 2]
    return np.stack([x*cy + z*sy, y, -x*sy + z*cy], -1)
TY = -1.24                         # table top

def box(p, c, b, r):
    q = np.abs(p-np.array(c))-np.array(b)+r
    return L(np.maximum(q, 0))+np.minimum(np.max(q, -1), 0)-r
def cylz(p, c, r, h):
    q = p-np.array(c); d0 = np.sqrt(q[:, 0]**2+q[:, 1]**2)-r; d1 = np.abs(q[:, 2])-h
    return np.minimum(np.maximum(d0, d1), 0)+np.sqrt(np.maximum(d0, 0)**2+np.maximum(d1, 0)**2)
def cyly(p, c, r, h):
    q = p-np.array(c); d0 = np.sqrt(q[:, 0]**2+q[:, 2]**2)-r; d1 = np.abs(q[:, 1])-h
    return np.minimum(np.maximum(d0, d1), 0)+np.sqrt(np.maximum(d0, 0)**2+np.maximum(d1, 0)**2)

KN = [(-0.70, 0.70), (0.70, -0.70)]   # adjusters: top-left and bottom-right, pivot at bottom-left
def parts(pw):
    p = to_local(pw)
    # front plate (black anodised), top-left corner chamfered, bore for the mirror
    fp = box(p, (0, 0, 0), (1.0, 1.0, 0.14), 0.03)
    fp = np.maximum(fp, (-p[:, 0]+p[:, 1])/math.sqrt(2)-1.18)
    fp = np.maximum(fp, -cylz(p, (0, 0, 0), 0.66, 0.5))
    # mirror (front face at z=0.11)
    mi = cylz(p, (0, 0, 0.01), 0.63, 0.10)
    # back plate + base (blue anodised): plate behind, base foot below the front plate, mounting counterbores
    bp = box(p, (0, -0.12, -0.36), (1.0, 1.12, 0.15), 0.03)
    bp = np.maximum(bp, -cylz(p, (0, 0, -0.36), 0.48, 0.5))
    bs = box(p, (0, -1.14, 0.02), (1.0, 0.10, 0.36), 0.03)
    for sx in (-0.62, 0.62):
        bs = np.maximum(bs, -cyly(p, (sx, -1.0, 0.12), 0.11, 0.2))
    blue = np.minimum(bp, bs)
    # adjusters: steel shaft and a knurled black knob behind the back plate
    kn = np.full(len(p), 9.0); st = np.full(len(p), 9.0)
    for kx, ky in KN:
        q = p-np.array([kx, ky, 0]); ang = np.arctan2(q[:, 1], q[:, 0])
        rr = 0.2-0.010*np.abs(np.sin(ang*14))
        d0 = np.sqrt(q[:, 0]**2+q[:, 1]**2)-rr; d1 = np.abs(q[:, 2]+0.78)-0.17
        k = np.minimum(np.maximum(d0, d1), 0)+np.sqrt(np.maximum(d0, 0)**2+np.maximum(d1, 0)**2)
        kn = np.minimum(kn, k*0.8)
        st = np.minimum(st, cylz(p, (kx, ky, -0.48), 0.055, 0.14))
        st = np.minimum(st, cylz(p, (kx, ky, 0.1), 0.05, 0.08))   # screw tip seen in the front plate gap
    return fp, mi, blue, kn, st

def sdf(p):
    fp, mi, bl, kn, st = parts(p)
    d = np.minimum(np.minimum(np.minimum(fp, mi), np.minimum(bl, kn)), st)
    return d

def mat(p):
    fp, mi, bl, kn, st = parts(p)
    a = np.stack([fp, mi, bl, kn, st], -1)
    return np.argmin(a, -1)

def normal(p):
    e = 0.0015
    ex = np.array([e, 0, 0]); ey = np.array([0, e, 0]); ez = np.array([0, 0, e])
    n = np.stack([sdf(p+ex)-sdf(p-ex), sdf(p+ey)-sdf(p-ey), sdf(p+ez)-sdf(p-ez)], -1)
    return nrm(n)

def march(o, d, tmax=40.0, steps=140):
    t = np.zeros(len(o)); hit = np.zeros(len(o), bool); alive = np.ones(len(o), bool)
    for _ in range(steps):
        idx = np.nonzero(alive)[0]
        if len(idx) == 0: break
        p = o[idx]+d[idx]*t[idx, None]
        dd = sdf(p)
        h = dd < 0.0006*(1+t[idx])
        hit[idx[h]] = True
        t[idx] += np.where(h, 0, dd*0.9)
        dead = h | (t[idx] > tmax)
        alive[idx[dead]] = False
    return t, hit

def softshadow(o, d, k=10.0):
    res = np.ones(len(o)); t = np.full(len(o), 0.02)
    for _ in range(48):
        h = sdf(o+d*t[:, None])
        res = np.minimum(res, k*h/t)
        t += np.clip(h, 0.02, 0.3)
    return np.clip(res, 0, 1)

def ao(p, n):
    occ = np.zeros(len(p)); sc = 1.0
    for i in range(5):
        hr = 0.02+0.07*i
        dd = sdf(p+n*hr)
        occ += (hr-dd)*sc; sc *= 0.7
    # the table occludes too
    occ += np.clip(0.25-(p[:, 1]-TY), 0, 0.25)*0.8*(n[:, 1] < 0.5)
    return np.clip(1-1.6*occ, 0, 1)

def env(d, studio=False):
    """dark studio: a large soft box above and slightly to the left, a cool strip on the left, a warm rim strip far right,
    a faint broad horizon glow; below the horizon the dark table."""
    x, y, z = d[..., 0], d[..., 1], d[..., 2]
    base = INK[None]*(0.8+0.6*sm(-0.2, 0.5, y)[..., None])
    top = sm(0.45, 0.85, y)*sm(0.9, 0.2, np.abs(x+0.25))*sm(0.9, 0.2, np.abs(z-0.1))
    lft = sm(-0.55, -0.85, x)*sm(0.45, 0.1, np.abs(y-0.25))
    rgt = sm(0.55, 0.85, z)*sm(0.35, 0.08, np.abs(y-0.3))*sm(0.6, 0.0, np.abs(x))
    rim = sm(0.6, 0.9, -z)*sm(0.5, 0.15, np.abs(y-0.35))
    hz = sm(0.25, 0.0, np.abs(y))*0.25
    c = base + top[..., None]*np.array([1.0, 0.98, 0.95])*2.6 + lft[..., None]*np.array([0.6, 0.72, 1.0])*1.3 \
        + rgt[..., None]*np.array([1.0, 0.9, 0.82])*1.6 + rim[..., None]*np.array([0.7, 0.8, 1.0])*1.5 + hz[..., None]*np.array([0.5, 0.55, 0.75])
    below = (y < 0) & (not studio)
    c = np.where(below[..., None], INK[None]*0.7, c)
    return c

LK = nrm(np.array([0.55, 0.8, 0.5]))     # key light (soft box)
LR = nrm(np.array([0.25, 0.75, -0.6]))     # cool rim from behind right
LF = nrm(np.array([-0.2, 0.3, 0.95]))         # weak fill

def shade(p, d, m):
    n = normal(p); col = np.zeros((len(p), 3))
    occ = ao(p, n)
    sh = softshadow(p+n*0.004, np.tile(LK, (len(p), 1)))
    rd = nrm(d-2*(d*n).sum(-1)[:, None]*n)
    cosv = np.clip(-(d*n).sum(-1), 0, 1)
    nk = np.clip((n*LK).sum(-1), 0, 1); nr = np.clip((n*LR).sum(-1), 0, 1); nf = np.clip((n*LF).sum(-1), 0, 1)
    def blinn(l, e):
        hv = nrm(l[None]-d); return np.clip((n*hv).sum(-1), 0, 1)**e
    E = env(rd)
    # per material: albedo, F0, gloss exponent, env strength
    A = np.array([[0.045, 0.045, 0.052], [0.9, 0.9, 0.92], [0.045, 0.15, 0.62], [0.02, 0.02, 0.022], [0.55, 0.56, 0.58]])
    F0 = np.array([0.045, 0.92, 0.06, 0.04, 0.6]); EX = np.array([40, 2000, 60, 25, 120]); ES = np.array([0.8, 1.0, 0.8, 0.5, 0.9])
    a = A[m]; f0 = F0[m]; ex = EX[m]; es = ES[m]
    fr = f0+(1-f0)*(1-cosv)**5
    diff = a*((nk*sh*1.15)[:, None]*np.array([1, 0.98, 0.95]) + (nr*0.8)[:, None]*np.array([0.75, 0.85, 1.0]) + (nf*0.12+0.05)[:, None])*occ[:, None]
    spec = np.zeros(len(p))
    for l, s in ((LK, 1.6), (LR, 0.8)):
        spec += blinn(l, ex)*s*(ex+8)/60.0
    sp = (fr*spec*(0.3+0.7*sh))[:, None]*np.array([1, 0.98, 0.96])*0.35
    col = diff*(1-fr[:, None]*(m != 1)[:, None]) + (fr*es)[:, None]*E*occ[:, None] + sp
    mirror = m == 1
    if mirror.any():
        # coated mirror: reflects the studio, very slightly warm (dielectric HR coating)
        q = rd[mirror]; e2 = env(q, studio=True)
        # a tall soft panel behind-right of the scene, as in a product shot, so the glass reads as a mirror
        pan = sm(0.75, 0.1, np.abs(q[:, 2]+0.5))*sm(0.75, 0.1, np.abs(q[:, 1]+0.15))*(q[:, 0] > 0)
        grad = 0.25+0.75*sm(-0.75, 0.05, q[:, 1])*sm(0.95, 0.2, -q[:, 2])
        lp = to_local(p[mirror]); rr = np.sqrt(lp[:, 0]**2+lp[:, 1]**2)
        edge = sm(0.57, 0.625, rr)*(1-sm(0.625, 0.632, rr))
        sw = lp[:, 0]*0.62-lp[:, 1]*0.78
        band = np.exp(-((sw+0.12)/0.2)**2)*0.42+np.exp(-((sw-0.32)/0.07)**2)*0.16
        vg = 0.6+0.4*sm(-0.6, 0.6, lp[:, 1])
        col[mirror] = (np.array([0.035, 0.04, 0.06])+band[:, None]*np.array([0.62, 0.68, 0.82])*vg[:, None]+e2*0.25)*np.array([1.0, 0.97, 0.93]) + edge[:, None]*np.array([0.35, 0.38, 0.45])
    return col

def table(o, d):
    with np.errstate(divide='ignore', invalid='ignore'):
        t = (TY-o[:, 1])/d[:, 1]
    return np.where((t > 1e-4) & np.isfinite(t), t, np.inf)

# camera: front-right of the mount, a little above
TGT = np.array([0.35, -0.3, 0.1]); CAM = np.array([4.3, 1.75, 4.2])
F = nrm(TGT-CAM); RT = nrm(np.cross(F, [0, 1, 0])); UP = np.cross(RT, F)
SC = 0.34; DC = 1.0
ys, xs = np.mgrid[0:H, 0:W]
u = ((xs+.5)/W*2-1)*SC*W/H; v = (1-(ys+.5)/H*2)*SC
D = nrm(F[None]*DC + u.reshape(-1, 1)*RT[None] + v.reshape(-1, 1)*UP[None])
O = np.repeat(CAM[None], H*W, 0)
N = H*W; col = np.zeros((N, 3)); cov = np.zeros(N)
CH = 250000
for i in range(0, N, CH):
    o = O[i:i+CH]; d = D[i:i+CH]
    tt = table(o, d)
    t, hit = march(o, d, tmax=np.minimum(30.0, 30.0))
    hit = hit & (t < tt)
    c = np.zeros((len(o), 3)); cv = np.zeros(len(o))
    if hit.any():
        p = o[hit]+d[hit]*t[hit, None]
        c[hit] = shade(p, d[hit], mat(p)); cv[hit] = 1
    tb = (~hit) & np.isfinite(tt)
    if tb.any():
        p = o[tb]+d[tb]*tt[tb, None]
        # breadboard: dark satin stainless, M6 holes on a 1-inch grid (offset so the mount sits between rows)
        gx = (p[:, 0]+0.5) % 1.0-0.5; gz = (p[:, 2]+0.5) % 1.0-0.5
        hole = sm(0.115, 0.095, np.sqrt(gx*gx+gz*gz))
        rim = sm(0.13, 0.115, np.sqrt(gx*gx+gz*gz))*(1-hole)
        rd = d[tb].copy(); rd[:, 1] = -rd[:, 1]
        # reflection of the mount in the satin top
        to, th = march(p+np.array([0, 1e-3, 0]), rd, tmax=6.0, steps=60)
        refl = env(rd)*0.06
        if th.any():
            q = p[th]+rd[th]*to[th, None]
            refl[th] = shade(q, rd[th], mat(q))*0.18
        brushed = 0.9+0.1*np.sin(p[:, 0]*260+np.sin(p[:, 2]*7)*3)
        shs = softshadow(p+np.array([0, 2e-3, 0]), np.tile(LK, (len(p), 1)), 6.0)
        occ = np.clip(1-0.6*np.exp(-np.maximum(sdf(p+np.array([0, 0.05, 0])), 0)*5), 0, 1)
        base = np.array([0.075, 0.078, 0.095])*brushed[:, None]*(0.35+0.65*shs)[:, None]*occ[:, None]
        c[tb] = (base+refl)*(1-hole[:, None]*0.85) + rim[:, None]*0.02
        r = np.sqrt((p[:, 0]-0.4)**2+(p[:, 2]*0.9-0.3)**2)
        cv[tb] = sm(3.4, 0.9, r)**1.3
    col[i:i+CH] = c; cov[i:i+CH] = cv
    print('chunk', i//CH+1, '/', -(-N//CH), file=sys.stderr)

col = col.reshape(H, W, 3); cov = cov.reshape(H, W)
col = 1-np.exp(-col*1.35); ink = 1-np.exp(-INK*1.35)
dif = col-ink[None, None]
a = np.maximum(np.max(np.where(dif > 0, dif/(1-ink)[None, None], 0), -1), np.max(np.where(dif < 0, -dif/ink[None, None], 0), -1))
a = np.clip(a, 0, 1)
C = ink[None, None]+dif/np.maximum(a, 1e-4)[..., None]
Al = a*cov
fx = sm(0, .12, (xs+.5)/W)*sm(1, .88, (xs+.5)/W); fy = sm(0, .1, (ys+.5)/H)*sm(1, .9, (ys+.5)/H)
Al = Al*fx*fy
img = np.concatenate([np.clip(C, 0, 1), Al[..., None]], -1)
im = Image.fromarray((img*255+.5).astype(np.uint8), 'RGBA')
if SS != 1: im = im.resize((FW, FH), Image.LANCZOS)
im.save(OUT)

def proj(pw):
    q = np.asarray(pw, float)-CAM; dz = q@F; uu = (q@RT)*DC/dz; vv = (q@UP)*DC/dz
    return [round(float(uu/(SC*FW/FH)*.5+.5), 4), round(float((1-vv/SC)*.5), 4)]
M = to_world_dir(np.array([0, 0, 0.11]))      # mirror centre (world), YAW rotation of the local point
nw = to_world_dir(np.array([0, 0, 1.0]))
a_in = math.radians(38)
s = np.array([math.cos(a_in), 0, math.sin(a_in)])        # towards the source: front-right
r = np.array([math.cos(a_in), 0, -math.sin(a_in)])       # reflected: back-right
info = {"M": proj(M), "S": [proj(M+s*k) for k in (1, 2, 3.5, 6)], "R": [proj(M+r*k) for k in (1, 2, 4, 8, 14)],
        "aspect": FW/FH, "n": nw.tolist()}
print(json.dumps(info))
