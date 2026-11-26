#!/usr/bin/env python3
"""MAV PRÜFTECHNIK hero (HOME_BRIEF update 2c: a crafted render of the firm's real mechanism). The test MAV's pull testers
exist for (mav-germany.de > Anwendungsbeispiele: "Zugfestigkeitsprüfungen an konfektionierten Zuleitungen mit ...
Kabelschuhen ... angepressten, gecrimpten ... Teilen"): a tin-plated ring cable lug, crimped onto a stranded copper wire,
hooked over the steel pin of the measuring-side jaw (Messpunktseite), its insulated wire clamped in the pull-side jaw
(Abzugseite) on the load slide. Generic, unbranded parts. SDF ray marching in numpy with soft shadows and AO; the slide
fades out radially over a long distance and the image is saved with REAL alpha over the page ink (DJ/DP).
Usage: python3 render.py W H out.png [SS]"""
import sys, math, json, numpy as np
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 560
H = int(sys.argv[2]) if len(sys.argv) > 2 else 400
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 1
FW, FH = W, H; W, H = W*SS, H*SS
INK = np.array([10, 20, 33])/255.0          # page ink (#0a1421)
def nrm(v): return v/np.maximum(np.linalg.norm(v, axis=-1, keepdims=True), 1e-9)
def sm(a, b, x): x = np.clip((x-a)/(b-a), 0, 1); return x*x*(3-2*x)
def L(v): return np.sqrt((v*v).sum(-1))
TY = -0.5                                    # slide top

def box(p, c, b, r):
    q = np.abs(p-np.array(c))-np.array(b)+r
    return L(np.maximum(q, 0))+np.minimum(np.max(q, -1), 0)-r
def cap2(d0, d1):
    return np.minimum(np.maximum(d0, d1), 0)+np.sqrt(np.maximum(d0, 0)**2+np.maximum(d1, 0)**2)
def cylx(p, c, r, h):
    q = p-np.array(c); return cap2(np.sqrt(q[:, 1]**2+q[:, 2]**2)-r, np.abs(q[:, 0])-h)
def cyly(p, c, r, h):
    q = p-np.array(c); return cap2(np.sqrt(q[:, 0]**2+q[:, 2]**2)-r, np.abs(q[:, 1])-h)
def cylz(p, c, r, h):
    q = p-np.array(c); return cap2(np.sqrt(q[:, 0]**2+q[:, 1]**2)-r, np.abs(q[:, 2])-h)
def smin(a, b, k):
    h = np.clip(0.5+0.5*(b-a)/k, 0, 1); return b*(1-h)+a*h-k*h*(1-h)

AY = 0.06                                     # wire / barrel axis height
def parts(p):
    x, y, z = p[:, 0], p[:, 1], p[:, 2]
    # measuring-side jaw: a steel block with a raised shoulder, the hardened pin standing in it
    ja = box(p, (-0.62, -0.32, 0), (0.68, 0.18, 0.56), 0.025)
    ja = np.minimum(ja, box(p, (-1.08, 0.02, 0), (0.22, 0.2, 0.56), 0.025))
    for sz in (-0.36, 0.36):                                     # two counterbored cap screws in the shoulder
        ja = np.maximum(ja, -cyly(p, (-1.08, 0.22, sz), 0.1, 0.06))
    pin = cyly(p, (0, -0.06, 0), 0.155, 0.42) - 0.0
    pin = np.minimum(pin, cyly(p, (0, 0.38, 0), 0.13, 0.04)-0.02)
    # pull-side jaw: lower block and an upper clamp plate gripping the insulation
    jb = box(p, (3.55, -0.32, 0), (0.46, 0.18, 0.52), 0.025)
    jb = np.minimum(jb, box(p, (3.55, 0.37, 0), (0.4, 0.1, 0.46), 0.025))
    jb = np.maximum(jb, -cylx(p, (3.55, AY, 0), 0.2, 0.6))      # the wire seat
    for sz in (-0.31, 0.31):                                     # clamp bolts bridging plate and block
        jb = np.minimum(jb, cyly(p, (3.55, 0.06, sz), 0.06, 0.24))
    for sz in (-0.31, 0.31):
        jb = np.maximum(jb, -cyly(p, (3.55, 0.47, sz), 0.105, 0.05))
    scr = np.full(len(p), 9.0)
    for cx, sz in ((3.55, -0.31), (3.55, 0.31), (-1.08, -0.36), (-1.08, 0.36)):
        top = 0.45 if cx > 0 else 0.20
        hd = cyly(p, (cx, top, sz), 0.085, 0.045)-0.008
        q = p-np.array([cx, top+0.05, sz]); hexo = np.maximum(np.abs(q[:, 0])*0.866+np.abs(q[:, 2])*0.5, np.abs(q[:, 2]))-0.04
        hd = np.maximum(hd, -np.maximum(hexo, np.abs(q[:, 1])-0.05))
        scr = np.minimum(scr, hd)
    # ring cable lug, tin-plated copper: ring around the pin, tongue, closed barrel with two crimp indents
    rr = np.sqrt(x*x+z*z)
    ring = cap2(np.maximum(rr-0.4, 0.185-rr), np.abs(y+0.1)-0.038)
    tng = box(p, (0.52, -0.1, 0), (0.3, 0.038, 0.19), 0.01)
    lug = np.minimum(ring, tng)
    brl = cylx(p, (1.16, AY, 0), 0.2, 0.42)
    brl = np.maximum(brl, -cylx(p, (1.7, AY, 0), 0.165, 0.18))            # bell mouth
    for ix in (1.02, 1.3):
        brl = np.maximum(brl, -cylz(p, (ix, AY+0.33, 0), 0.155, 0.5))
    lug = smin(lug, brl, 0.08)
    lug = np.maximum(lug, x-1.58)
    # stranded copper conductor between barrel mouth and insulation, and its cut end at the far jaw
    cu = np.full(len(p), 9.0)
    st = [(0, 0)]+[(0.105*math.cos(a), 0.105*math.sin(a)) for a in np.linspace(0, 2*math.pi, 7)[:-1]+0.3]
    for (sy, sz) in st:
        tw = 0.0
        cu = np.minimum(cu, cylx(p, (1.62, AY+sy, sz), 0.056, 0.14)-0.004)
    cu = np.minimum(cu, cylx(p, (4.2, AY, 0), 0.155, 0.04))
    # insulation (blue PVC)
    ins = cylx(p, (2.98, AY, 0), 0.2, 1.22)-0.004
    return ja, pin, jb, scr, lug, cu, ins

def sdf(p):
    a = parts(p); d = a[0]
    for q in a[1:]: d = np.minimum(d, q)
    return d
def mat(p):
    return np.argmin(np.stack(parts(p), -1), -1)

def normal(p):
    e = 0.0015
    ex = np.array([e, 0, 0]); ey = np.array([0, e, 0]); ez = np.array([0, 0, e])
    return nrm(np.stack([sdf(p+ex)-sdf(p-ex), sdf(p+ey)-sdf(p-ey), sdf(p+ez)-sdf(p-ez)], -1))

def march(o, d, tmax=40.0, steps=150):
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
        occ += (hr-sdf(p+n*hr))*sc; sc *= 0.7
    occ += np.clip(0.25-(p[:, 1]-TY), 0, 0.25)*0.8*(n[:, 1] < 0.5)
    return np.clip(1-1.6*occ, 0, 1)

def env(d):
    """dark studio: a large soft box above, a cool strip on the left, a warm strip front right, a blue rim behind."""
    x, y, z = d[..., 0], d[..., 1], d[..., 2]
    base = INK[None]*(0.8+0.6*sm(-0.2, 0.5, y)[..., None])
    top = sm(0.45, 0.85, y)*sm(0.95, 0.2, np.abs(x-0.1))*sm(0.9, 0.2, np.abs(z-0.1))
    lft = sm(-0.55, -0.85, x)*sm(0.45, 0.1, np.abs(y-0.25))
    rgt = sm(0.55, 0.85, z)*sm(0.35, 0.08, np.abs(y-0.3))*sm(0.6, 0.0, np.abs(x-0.2))
    rim = sm(0.6, 0.9, -z)*sm(0.5, 0.15, np.abs(y-0.35))
    hz = sm(0.25, 0.0, np.abs(y))*0.25
    c = base + top[..., None]*np.array([1.0, 0.99, 0.97])*2.6 + lft[..., None]*np.array([0.6, 0.75, 1.0])*1.3 \
        + rgt[..., None]*np.array([1.0, 0.95, 0.9])*1.5 + rim[..., None]*np.array([0.45, 0.7, 1.0])*1.6 + hz[..., None]*np.array([0.45, 0.55, 0.75])
    return np.where((y < 0)[..., None], INK[None]*0.7, c)

LK = nrm(np.array([0.45, 0.85, 0.45]))
LR = nrm(np.array([-0.3, 0.7, -0.65]))
LF = nrm(np.array([0.2, 0.3, 0.95]))

def shade(p, d, m):
    n = normal(p)
    occ = ao(p, n)
    sh = softshadow(p+n*0.004, np.tile(LK, (len(p), 1)))
    rd = nrm(d-2*(d*n).sum(-1)[:, None]*n)
    cosv = np.clip(-(d*n).sum(-1), 0, 1)
    nk = np.clip((n*LK).sum(-1), 0, 1); nr = np.clip((n*LR).sum(-1), 0, 1); nf = np.clip((n*LF).sum(-1), 0, 1)
    def blinn(l, e):
        hv = nrm(l[None]-d); return np.clip((n*hv).sum(-1), 0, 1)**e
    E = env(rd)
    #             steel jaw A          pin                 jaw B               screws              tin lug             copper              blue PVC
    A = np.array([[0.36, 0.37, 0.39], [0.40, 0.41, 0.43], [0.36, 0.37, 0.39], [0.03, 0.03, 0.035], [0.55, 0.56, 0.58], [0.72, 0.36, 0.2], [0.01, 0.17, 0.45]])
    F0 = np.array([0.45, 0.7, 0.45, 0.06, 0.6, 0.6, 0.05]); EX = np.array([60, 400, 60, 40, 140, 160, 90]); ES = np.array([0.55, 0.9, 0.55, 0.5, 0.75, 0.8, 0.7])
    a = A[m]; f0 = F0[m]; ex = EX[m]; es = ES[m]
    tint = np.ones((len(p), 3)); tint[m == 5] = [1.0, 0.62, 0.42]
    fr = f0+(1-f0)*(1-cosv)**5
    # brushed steel jaws: fine grinding marks along x
    gr = np.where((m == 0) | (m == 2), 0.88+0.12*np.sin(p[:, 2]*140+np.sin(p[:, 0]*9)*2), 1.0)
    diff = a*((nk*sh*1.15)[:, None]*np.array([1, 0.99, 0.97]) + (nr*0.8)[:, None]*np.array([0.7, 0.85, 1.0]) + (nf*0.12+0.05)[:, None])*occ[:, None]*gr[:, None]
    spec = np.zeros(len(p))
    for l, s in ((LK, 1.6), (LR, 0.8)):
        spec += blinn(l, ex)*s*(ex+8)/60.0
    sp = (fr*spec*(0.3+0.7*sh))[:, None]*tint*0.35
    return diff*(1-fr[:, None]*0.6) + (fr*es)[:, None]*E*tint*occ[:, None] + sp

def table(o, d):
    with np.errstate(divide='ignore', invalid='ignore'):
        t = (TY-o[:, 1])/d[:, 1]
    return np.where((t > 1e-4) & np.isfinite(t), t, np.inf)

TGT = np.array([1.55, -0.12, 0.0]); CAM = np.array([5.2, 3.6, 7.4])
F = nrm(TGT-CAM); RT = nrm(np.cross(F, [0, 1, 0])); UP = np.cross(RT, F)
SC = 0.27; DC = 1.0
ys, xs = np.mgrid[0:H, 0:W]
u = ((xs+.5)/W*2-1)*SC*W/H; v = (1-(ys+.5)/H*2)*SC
D = nrm(F[None]*DC + u.reshape(-1, 1)*RT[None] + v.reshape(-1, 1)*UP[None])
O = np.repeat(CAM[None], H*W, 0)
N = H*W; col = np.zeros((N, 3)); cov = np.zeros(N)
CH = 250000
for i in range(0, N, CH):
    o = O[i:i+CH]; d = D[i:i+CH]
    tt = table(o, d)
    t, hit = march(o, d, tmax=30.0)
    hit = hit & (t < tt)
    c = np.zeros((len(o), 3)); cv = np.zeros(len(o))
    if hit.any():
        p = o[hit]+d[hit]*t[hit, None]
        c[hit] = shade(p, d[hit], mat(p)); cv[hit] = 1
    tb = (~hit) & np.isfinite(tt)
    if tb.any():
        p = o[tb]+d[tb]*tt[tb, None]
        # the load slide: dark anodised aluminium with a centre T-slot along the pull axis
        rd = d[tb].copy(); rd[:, 1] = -rd[:, 1]
        to, th = march(p+np.array([0, 1e-3, 0]), rd, tmax=6.0, steps=60)
        refl = env(rd)*0.05
        if th.any():
            q = p[th]+rd[th]*to[th, None]
            refl[th] = shade(q, rd[th], mat(q))*0.09
        brushed = 0.9+0.1*np.sin(p[:, 2]*240+np.sin(p[:, 0]*6)*3)
        shs = softshadow(p+np.array([0, 2e-3, 0]), np.tile(LK, (len(p), 1)), 6.0)
        occ = np.clip(1-0.6*np.exp(-np.maximum(sdf(p+np.array([0, 0.05, 0])), 0)*5), 0, 1)
        slot = sm(0.1, 0.085, np.abs(p[:, 2]-0.0))*(p[:, 0] > -1.4)
        base = np.array([0.07, 0.08, 0.1])*brushed[:, None]*(0.35+0.65*shs)[:, None]*occ[:, None]
        c[tb] = (base+refl)*(1-slot[:, None]*0.8)
        r = np.sqrt(((p[:, 0]-1.55)*0.62)**2+(p[:, 2]*1.0)**2)
        cv[tb] = sm(2.9, 0.9, r)**1.3
    col[i:i+CH] = c; cov[i:i+CH] = cv
    print('chunk', i//CH+1, '/', -(-N//CH), file=sys.stderr)

col = col.reshape(H, W, 3); cov = cov.reshape(H, W)
col = 1-np.exp(-col*1.35); ink = 1-np.exp(-INK*1.35)
dif = col-ink[None, None]
a = np.maximum(np.max(np.where(dif > 0, dif/(1-ink)[None, None], 0), -1), np.max(np.where(dif < 0, -dif/ink[None, None], 0), -1))
a = np.clip(a, 0, 1)
C = ink[None, None]+dif/np.maximum(a, 1e-4)[..., None]
Al = a*cov
fx = sm(0, .1, (xs+.5)/W)*sm(1, .9, (xs+.5)/W); fy = sm(0, .1, (ys+.5)/H)*sm(1, .9, (ys+.5)/H)
Al = Al*fx*fy
img = np.concatenate([np.clip(C, 0, 1), Al[..., None]], -1)
im = Image.fromarray((img*255+.5).astype(np.uint8), 'RGBA')
if SS != 1: im = im.resize((FW, FH), Image.LANCZOS)
im.save(OUT)

def proj(pw):
    q = np.asarray(pw, float)-CAM; dz = q@F; uu = (q@RT)*DC/dz; vv = (q@UP)*DC/dz
    return [round(float(uu/(SC*FW/FH)*.5+.5), 4), round(float((1-vv/SC)*.5), 4)]
info = {"pin": proj([0, 0.42, 0]), "jawB": proj([3.95, AY, 0]), "far": proj([6.5, AY, 0]), "lug": proj([1.16, AY, 0]),
        "axisA": proj([-1.3, AY, 0]), "aspect": FW/FH}
print(json.dumps(info))
