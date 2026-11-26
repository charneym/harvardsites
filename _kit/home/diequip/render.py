#!/usr/bin/env python3
"""DIE QUIP hero (HOME_BRIEF update 2c: a crafted render of the real product the firm's machines work on). One tungsten-
carbide wire-drawing die: a polished carbide nib pressed into a turned steel case, with its entrance bell, approach cone,
bearing and back relief (the die geometry Die Quip's grinders and polishers cut; diequip.com > Die Finishing), and a
copper wire being drawn through it. Analytic ray casting in numpy: the bore is a surface of revolution built from a
profile of cone/plane segments, the case side is a cylinder, the wire two cylinders. Metals reflect a soft dark-navy studio
(several jittered reflection samples per pixel for the lapped and turned surfaces, one for the mirror-polished cone),
with cavity occlusion in the bore and a fine turned-ring texture on the steel face. Saved with REAL alpha (no box edge,
DJ/DP); the wire fades out along its length. Prints the image-space wire axis for field.js.
Usage: python3 render.py W H out.png [SS]"""
import sys, math, json, numpy as np
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 640
H = int(sys.argv[2]) if len(sys.argv) > 2 else 400
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 1
FW, FH = W, H; W, H = W*SS, H*SS
rng = np.random.default_rng(7)

def nrm(v): return v/np.maximum(np.linalg.norm(v, axis=-1, keepdims=True), 1e-9)
def sm(a, b, x): x = np.clip((x-a)/(b-a), 0, 1); return x*x*(3-2*x)
def Ry(a): c, s = math.cos(a), math.sin(a); return np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]])
def Rx(a): c, s = math.cos(a), math.sin(a); return np.array([[1, 0, 0], [0, c, -s], [0, s, c]])

# ---- geometry (object space; die axis = z, entrance face at +z) ----
ZF, ZB, RC = 0.42, -0.42, 1.0
PROF = [  # (r, z) from the front face inwards to the back face; material per segment
    ((RC, ZF), (0.64, ZF), 'case'),      # turned front face of the steel case
    ((0.64, ZF), (0.47, 0.30), 'bell'),  # the case's entry chamfer
    ((0.47, 0.30), (0.31, 0.30), 'nibf'),  # lapped front face of the carbide nib
    ((0.31, 0.30), (0.165, 0.19), 'cone'),  # entrance bell
    ((0.165, 0.19), (0.075, -0.05), 'cone'),  # approach / reduction cone
    ((0.075, -0.05), (0.075, -0.11), 'cone'),  # bearing
    ((0.075, -0.11), (0.20, -0.30), 'cone'),  # back relief
    ((0.20, -0.30), (0.47, -0.30), 'nibf'),
    ((0.47, -0.30), (0.64, ZB), 'bell'),
    ((0.64, ZB), (RC, ZB), 'case')]
RW_IN, RW_OUT, ZW = 0.088, 0.075, -0.03     # wire radius before and after the die; the step sits inside the cone
WL = 3.4                                  # wire half length (fades out long before)

# ---- camera: the entrance face turned towards the viewer and to the right, seen a little from above ----
YAW = math.radians(48); PITCH = math.radians(-14); ROLL = math.radians(-6)
def Rz(a): c, s = math.cos(a), math.sin(a); return np.array([[c, -s, 0], [s, c, 0], [0, 0, 1]])
R = Rz(ROLL) @ Rx(-PITCH) @ Ry(YAW)       # object -> camera
DIST = 9.0; HALF_H = 1.32                  # world half-height at the target
FOVT = HALF_H/DIST
CAM = np.array([0, 0, DIST])
CTR = np.array([0.12, 0.0, 0.0])            # camera target in camera space (shifts the die a touch left of centre)

def env(d):
    """dark navy studio (camera space): a big cool soft box upper left, a narrow warm strip on the right, a pale rim
    strip high behind, a faint horizon, a dark floor."""
    x, y, z = d[..., 0], d[..., 1], d[..., 2]
    base = np.array([0.010, 0.018, 0.040])[None]*(0.5+1.2*sm(-0.3, 0.8, y)[..., None])
    hor = sm(0.16, 0.0, np.abs(y-0.04))*0.7
    box = sm(0.28, 0.40, y)*sm(-0.02, -0.18, x)*sm(-0.92, -0.78, x)*sm(-0.7, 0.0, z)
    box = box*(0.55+0.45*sm(0.35, 0.85, y))
    top = sm(0.55, 0.9, y)*sm(-0.2, 0.4, z)*0.9
    strip = sm(0.52, 0.58, x)*sm(0.78, 0.70, x)*sm(0.55, 0.35, np.abs(y-0.10))
    rim = sm(0.62, 0.70, y)*sm(0.45, 0.15, np.abs(x-0.2))*sm(0.3, -0.3, z)
    low = sm(-0.08, -0.25, y)*sm(0.40, 0.12, np.abs(x+0.30))*sm(-0.2, 0.3, z)
    kick = sm(0.25, 0.05, np.abs(y+0.02))*sm(0.85, 0.95, -x)*1.0
    # a broad, dim fill behind the camera, brighter to the upper left, so the turned face reads as a graded metal plane
    fill = sm(0.1, 0.9, z)*(0.25+0.75*sm(-0.6, 0.9, y-0.6*x))
    rpan = sm(0.80, 0.95, x)*sm(-0.25, 0.55, y)*sm(0.75, 0.55, y)
    fbox = sm(0.35, 0.7, z)*sm(0.05, 0.35, y)*sm(0.1, -0.35, x)
    c = base + hor[..., None]*np.array([0.05, 0.09, 0.19]) \
        + box[..., None]*np.array([0.88, 0.94, 1.0])*2.6 \
        + top[..., None]*np.array([0.45, 0.58, 0.80]) \
        + strip[..., None]*np.array([1.0, 0.86, 0.70])*2.2 \
        + rim[..., None]*np.array([0.75, 0.85, 1.0])*1.5 \
        + low[..., None]*np.array([0.25, 0.45, 0.85])*0.6 \
        + kick[..., None]*np.array([0.30, 0.50, 0.85])*0.8 \
        + fill[..., None]*np.array([0.20, 0.27, 0.40])*0.9 \
        + rpan[..., None]*np.array([0.55, 0.64, 0.80])*0.85 \
        + fbox[..., None]*np.array([0.80, 0.88, 1.0])*0.9
    return c

def env_rough(n, r, k=10, rough=0.18):
    """reflection of a rough metal: average env over k jittered reflection directions."""
    acc = np.zeros_like(r)
    for i in range(k):
        j = rng.normal(0, rough, r.shape)
        rr = nrm(r + j)
        bad = (rr*n).sum(-1) < 0
        rr[bad] = r[bad]
        acc += env(rr)
    return acc/k

# ---- intersections (camera rays transformed into object space) ----
def hit_rev(o, d, p1, p2):
    (r1, z1), (r2, z2) = p1, p2
    n = o.shape[0]
    if abs(z1-z2) < 1e-9:
        with np.errstate(divide='ignore', invalid='ignore'):
            t = (z1-o[:, 2])/d[:, 2]
        p = o + t[:, None]*d
        rr = np.hypot(p[:, 0], p[:, 1])
        lo, hi = min(r1, r2), max(r1, r2)
        ok = (t > 1e-4) & (rr >= lo) & (rr <= hi)
        # the face looks towards the open side: front faces +z, back faces -z
        nz = 1.0 if z1 > 0 else -1.0
        N = np.zeros((n, 3)); N[:, 2] = nz
        return np.where(ok, t, np.inf), N
    b = (r2-r1)/(z2-z1); a = r1-b*z1
    ox, oy, oz = o[:, 0], o[:, 1], o[:, 2]; dx, dy, dz = d[:, 0], d[:, 1], d[:, 2]
    A = dx*dx+dy*dy-b*b*dz*dz
    q = a+b*oz
    B = 2*(ox*dx+oy*dy-q*b*dz)
    C = ox*ox+oy*oy-q*q
    disc = B*B-4*A*C
    sq = np.sqrt(np.maximum(disc, 0))
    best = np.full(n, np.inf)
    zlo, zhi = min(z1, z2), max(z1, z2)
    with np.errstate(divide='ignore', invalid='ignore'):
        for s in (-1, 1):
            t = (-B+s*sq)/(2*A)
            z = oz+t*dz
            ok = (disc >= 0) & (t > 1e-4) & (z >= zlo) & (z <= zhi) & ((a+b*z) >= 0)
            best = np.where(ok & (t < best), t, best)
    p = o+np.where(np.isfinite(best), best, 0)[:, None]*d
    g = np.stack([p[:, 0], p[:, 1], -b*(a+b*p[:, 2])], -1)
    return best, -nrm(g)   # the bore: the open side is towards the axis

def hit_cyl(o, d, r, z1, z2, outward=True):
    ox, oy, oz = o[:, 0], o[:, 1], o[:, 2]; dx, dy, dz = d[:, 0], d[:, 1], d[:, 2]
    A = dx*dx+dy*dy; B = 2*(ox*dx+oy*dy); C = ox*ox+oy*oy-r*r
    disc = B*B-4*A*C; sq = np.sqrt(np.maximum(disc, 0))
    best = np.full(o.shape[0], np.inf)
    with np.errstate(divide='ignore', invalid='ignore'):
        for s in (-1, 1):
            t = (-B+s*sq)/(2*A); z = oz+t*dz
            ok = (disc >= 0) & (t > 1e-4) & (z >= z1) & (z <= z2)
            best = np.where(ok & (t < best), t, best)
    p = o+np.where(np.isfinite(best), best, 0)[:, None]*d
    N = nrm(np.stack([p[:, 0], p[:, 1], np.zeros_like(p[:, 0])], -1))
    return best, (N if outward else -N)

MI = R.T  # camera -> object
def render_rows(y0, y1):
    ys = (np.arange(y0, y1)+0.5)
    xs = (np.arange(W)+0.5)
    X, Y = np.meshgrid(xs, ys)
    u = (X/W-0.5)*2*FOVT*(W/H); v = -(Y/H-0.5)*2*FOVT
    dc = nrm(np.stack([u, v, -np.ones_like(u)], -1)).reshape(-1, 3)
    oc = np.broadcast_to(CAM+CTR, dc.shape)
    o = (oc - np.zeros(3)) @ MI.T
    d = dc @ MI.T
    n = d.shape[0]
    T = np.full(n, np.inf); NN = np.zeros((n, 3)); MAT = np.full(n, -1)
    names = []
    def take(t, N, mid):
        nonlocal T, NN, MAT
        m = t < T
        T = np.where(m, t, T); NN[m] = N[m]; MAT = np.where(m, mid, MAT)
    mats = ['case', 'bell', 'nibf', 'cone', 'side', 'wire']
    for (p1, p2, mname) in PROF:
        t, N = hit_rev(o, d, p1, p2); take(t, N, mats.index(mname))
    t, N = hit_cyl(o, d, RC, ZB, ZF, True); take(t, N, mats.index('side'))
    t, N = hit_cyl(o, d, RW_IN, ZW, WL, True); take(t, N, mats.index('wire'))
    t, N = hit_cyl(o, d, RW_OUT, -WL, ZW, True); take(t, N, mats.index('wire'))
    hit = np.isfinite(T)
    P = o + np.where(hit, T, 0)[:, None]*d
    rr = np.hypot(P[:, 0], P[:, 1]); pz = P[:, 2]
    # shade in camera space
    Nc = NN @ R.T; Dc = dc
    Rf = nrm(Dc - 2*(Dc*Nc).sum(-1, keepdims=True)*Nc)
    col = np.zeros((n, 3)); alpha = hit.astype(float)
    # cavity occlusion: the deeper into the bore, the less of the studio it sees
    occ = 0.22+0.78*sm(0.02, 0.36, pz+0.0)*sm(0.06, 0.30, rr)
    occ = np.where(pz > 0.29, 1.0, occ)
    for mi, mname in enumerate(mats):
        m = hit & (MAT == mi)
        if not m.any(): continue
        Nm, Rm = Nc[m], Rf[m]
        if mname == 'case':
            # turned face: fine concentric rings shimmer the reflection
            ring = 0.5+0.5*np.sin(rr[m]*620.0)
            e = env_rough(Nm, Rm, 10, 0.10)
            c = e*np.array([0.80, 0.82, 0.86])*(0.86+0.14*ring)[:, None]
            # turned faces catch light along a radial 'bowtie' (anisotropic sheen of the lathe marks)
            th = np.arctan2(P[m, 1], P[m, 0])
            bow = (0.5+0.5*np.cos(2*(th-0.55)))**5
            c += (0.10+0.42*bow*(0.9+0.1*ring))[:, None]*np.array([0.62, 0.70, 0.84])
            # bright chamfer glints at the outer and inner edges of the face
            g = sm(0.965, 0.995, rr[m]) + sm(0.675, 0.645, rr[m])*0.8
            c += g[:, None]*np.array([0.55, 0.62, 0.72])*(0.25+0.75*np.clip(env(Rm).mean(-1), 0, 1))[:, None]
        elif mname == 'bell':
            c = env_rough(Nm, Rm, 8, 0.05)*np.array([0.84, 0.86, 0.90])
        elif mname == 'side':
            # the turned outside of the case: circumferential tool marks give axial streaks
            th = np.arctan2(P[m, 1], P[m, 0])
            ring = 0.5+0.5*np.sin(pz[m]*900.0)
            c = env_rough(Nm, Rm, 10, 0.14)*np.array([0.70, 0.73, 0.78])*(0.9+0.1*ring)[:, None]
            c += (sm(ZF-0.03, ZF, pz[m])+sm(ZB+0.03, ZB, pz[m]))[:, None]*np.array([0.30, 0.34, 0.40])
        elif mname == 'nibf':
            c = env_rough(Nm, Rm, 10, 0.07)*np.array([0.50, 0.49, 0.50])
            th = np.arctan2(P[m, 1], P[m, 0])
            c += (0.06+0.22*(0.5+0.5*np.cos(2*(th-0.55)))**4)[:, None]*np.array([0.55, 0.56, 0.60])
            c += sm(0.455, 0.47, rr[m])[:, None]*np.array([0.10, 0.11, 0.13])  # the press-fit seam reads as a fine line
            c *= np.where(sm(0.462, 0.468, rr[m]) * sm(0.474, 0.468, rr[m]) > 0.5, 0.25, 1.0)[:, None]
        elif mname == 'cone':
            # mirror-polished carbide (what the machines produce): crisp reflections, darkened inside the bore
            c = env(Rm)*np.array([0.62, 0.61, 0.62])*occ[m][:, None]
            # the wire is reflected in the polished cone as a warm band
            c += sm(0.20, 0.09, rr[m])[:, None]*np.array([0.30, 0.13, 0.05])*occ[m][:, None]
        elif mname == 'wire':
            e = env_rough(Nm, Rm, 6, 0.05)
            fres = 0.6+0.4*(1-np.clip(-(Dc[m]*Nm).sum(-1), 0, 1))**4
            c = e*np.array([1.0, 0.50, 0.26])*fres[:, None]*1.15
            # drawn wire is bright and clean after the die, slightly duller before it
            c *= np.where(pz[m] < ZW, 1.08, 0.94)[:, None]
            # fade the wire out along its length (never a hard end)
            fa = np.where(pz[m] > 0, sm(2.4, 1.15, pz[m]), sm(1.45, 0.72, -pz[m]))
            alpha[np.where(m)[0]] = fa
        col[m] = c
    # tone map (filmic-ish) and gamma
    col = col/(1+0.55*col)*1.38
    col = np.clip(col, 0, 1)**(1/2.2)
    return np.concatenate([col, alpha[:, None]], -1).reshape(y1-y0, W, 4)

rows = []
step = 120
for y0 in range(0, H, step):
    rows.append(render_rows(y0, min(H, y0+step)))
img = np.concatenate(rows, 0)
# premultiplied downsample for SS
if SS > 1:
    rgb = img[..., :3]*img[..., 3:4]
    rgb = rgb.reshape(FH, SS, FW, SS, 3).mean((1, 3)); a = img[..., 3].reshape(FH, SS, FW, SS).mean((1, 3))
    img = np.concatenate([rgb/np.maximum(a[..., None], 1e-6), a[..., None]], -1)
out = (np.clip(img, 0, 1)*255+0.5).astype(np.uint8)
Image.fromarray(out, 'RGBA').save(OUT)

# image-space positions for field.js: the die centre and two points along the wire axis
def proj(pobj):
    pc = R @ np.array(pobj) - CTR
    v = pc - CAM + CTR*0  # relative to camera origin at CAM (target shift applied to origin)
    q = (R @ np.array(pobj)) - (CAM+CTR)
    u = q[0]/(-q[2])/FOVT/(FW/FH)/2+0.5; w = -q[1]/(-q[2])/FOVT/2+0.5
    return [round(float(u), 4), round(float(w), 4)]
print(json.dumps({'centre': proj([0, 0, 0]), 'face': proj([0, 0, ZF]), 'wireFront': proj([0, 0, 1.6]), 'wireBack': proj([0, 0, -1.6]),
                  'rimTop': proj([0, RC, ZF])}))
