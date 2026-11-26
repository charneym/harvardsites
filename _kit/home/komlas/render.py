#!/usr/bin/env python3
"""KOMLAS hero (HOME_BRIEF update 2c: a crafted render of the firm's real product). One polished KTP crystal for
frequency doubling, at the largest size KOMLAS lists (12 mm x 12 mm x 22 mm; komlas.de > Optische Komponenten >
Nichtlinear optische Kristalle), resting on a dark glossy bench, seen from slightly above. Analytic ray tracing in numpy:
an axis-aligned box (n = 1.83) with Fresnel reflection, refraction, up to six internal bounces and TIR, a fake bevel
glint on every edge, an AR-coating tint on the two end faces, and a mirror bench that fades out radially over a long
distance so no edge shows (DJ/DP). Saved with REAL alpha over the page ink. Prints the projected end-face centres for
the live beam in field.js. Usage: python3 render.py W H out.png [SS]"""
import sys, math, json, numpy as np
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 640
H = int(sys.argv[2]) if len(sys.argv) > 2 else 400
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 1
FW, FH = W, H; W, H = W*SS, H*SS
INK = np.array([7, 11, 42])/255.0
NK = 1.83
HX, HY, HZ = 1.1, 0.6, 0.6           # 22 x 12 x 12 mm, half extents
FLOOR = -HY
def nrm(v): return v/np.linalg.norm(v, axis=-1, keepdims=True)
def sm(a, b, x): x = np.clip((x-a)/(b-a), 0, 1); return x*x*(3-2*x)

YAW = math.radians(-27); PITCH = math.radians(-15)
def Ry(a): c, s = math.cos(a), math.sin(a); return np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]])
def Rx(a): c, s = math.cos(a), math.sin(a); return np.array([[1, 0, 0], [0, c, -s], [0, s, c]])
# camera space -> object space
M = Ry(-YAW) @ Rx(PITCH)
MI = M.T
DIST = 7.2; FOV = 0.19; CY0 = 0.0

def env(dobj):
    """a dark navy studio, lit in camera space: a crisp soft box above, a tall cool strip on the left, a warm strip on
    the right, a pale navy horizon glow behind, a dark bench below and a thin brand-green strip low on the right."""
    d = dobj @ MI.T
    x, y, z = d[..., 0], d[..., 1], d[..., 2]
    up = sm(-0.06, 0.02, y)
    base = INK[None]*(0.55+0.9*sm(-0.2, 0.6, y)[..., None])
    hor = sm(0.2, 0.0, np.abs(y-0.06))*sm(0.1, -0.6, z)
    top = sm(0.52, 0.58, y)*sm(0.62, 0.56, np.abs(x+0.1))*sm(-0.5, 0.2, z)
    lft = sm(-0.70, -0.74, x)*sm(-0.86, -0.82, -x)*sm(0.5, 0.44, np.abs(y-0.3))
    rgt = sm(0.70, 0.73, x)*sm(-0.82, -0.79, -x)*sm(0.42, 0.36, np.abs(y-0.32))
    key = sm(0.1, 0.3, z)*sm(0.36, 0.26, np.abs(x+0.74))*sm(0.30, 0.2, np.abs(y+0.36))*(0.25+0.75*sm(-0.62, -0.18, y))
    grn = sm(0.4, 0.6, x)*sm(0.035, 0.015, np.abs(y-0.0))
    c = base + up[..., None]*(hor[..., None]*np.array([0.10, 0.13, 0.30]) + top[..., None]*np.array([0.92, 0.95, 1.0])*1.7
        + lft[..., None]*np.array([0.72, 0.84, 1.0])*2.6 + rgt[..., None]*np.array([1.0, 0.94, 0.86])*1.9
        + grn[..., None]*np.array([0.1, 0.95, 0.2])*1.8)
    c = c + key[..., None]*np.array([0.80, 0.86, 1.0])*1.5
    return c

def fres(cosi, n1, n2):
    r0 = ((n1-n2)/(n1+n2))**2
    return r0+(1-r0)*np.clip(1-cosi, 0, 1)**5

def refr(d, n, eta):
    cosi = -(d*n).sum(-1)
    k = 1-eta**2*(1-cosi**2)
    t = eta*d + (eta*cosi-np.sqrt(np.maximum(k, 0)))[..., None]*n
    return nrm(t), k < 0

B = np.array([HX, HY, HZ])
def box_hit(o, d):
    inv = 1.0/np.where(np.abs(d) < 1e-9, 1e-9, d)
    t1 = (-B-o)*inv; t2 = (B-o)*inv
    tn = np.minimum(t1, t2).max(-1); tf = np.maximum(t1, t2).min(-1)
    return tn, tf

def face_normal(p):
    q = np.abs(p)/B
    ax = q.argmax(-1)
    n = np.zeros_like(p)
    idx = np.arange(p.shape[0])
    n[idx, ax] = np.sign(p[idx, ax])
    return n, ax

def edge_glint(p, ax):
    """distance from the hit point to the nearest edge of its face, in object units"""
    dd = B[None]-np.abs(p)
    dd[np.arange(p.shape[0]), ax] = 9
    return dd.min(-1)

ABS = np.array([0.05, 0.02, 0.08])     # very faint warm-green tint per unit path
def shade_box(o, d):
    """o,d: rays known to hit the box from outside. returns rgb."""
    tn, _ = box_hit(o, d)
    p = o + d*tn[:, None]
    n, ax = face_normal(p)
    cosi = np.clip(-(d*n).sum(-1), 0, 1)
    F = fres(cosi, 1.0, NK)
    endf = (ax == 0)
    F = np.where(endf, F*0.55+0.012, F)            # AR-coated end faces reflect less
    rdir = nrm(d + 2*cosi[:, None]*n)
    refl = env(rdir)
    refl = np.where(endf[:, None], refl*np.array([0.55, 1.0, 0.7]), refl)   # the AR coating's green cast
    col = refl*F[:, None]
    # bevel glint: a thin bright line along every edge, lit from the soft box and the strips
    e = edge_glint(p, ax)
    g = sm(0.012, 0.0, e)
    bn = nrm(n + 0.6*nrm(np.sign(p)*(np.abs(p)/B > 0.97)))
    gl = env(nrm(d + 2*np.clip(-(d*bn).sum(-1), 0, 1)[:, None]*bn))
    col += g[:, None]*(np.clip(gl, 0, 3)*0.6+0.25)
    # transmission
    td, _ = refr(d, n, 1/NK)
    w = (1-F)[:, None]*np.ones(3)
    q = p + td*1e-4; dd = td
    for _ in range(6):
        _, tf = box_hit(q, dd)
        tf = np.maximum(tf, 0)
        pe = q + dd*tf[:, None]
        w = w*np.exp(-ABS[None]*tf[:, None])
        ne, axe = face_normal(pe)
        ci = np.clip((dd*ne).sum(-1), 0, 1)
        out, tir = refr(dd, -ne, NK)
        Fe = np.where(tir, 1.0, fres(ci, NK, 1.0))
        Fe = np.where((axe == 0) & ~tir, Fe*0.55, Fe)
        col += w*(1-Fe)[:, None]*env(out)
        w = w*Fe[:, None]
        dd = nrm(dd - 2*ci[:, None]*ne)
        q = pe + dd*1e-4
    col += w*env(dd)*0.4
    return col

def render_rows(y0, y1):
    ys = (np.arange(y0, y1)+0.5)/H
    xs = (np.arange(W)+0.5)/W
    X, Y = np.meshgrid(xs, ys)
    asp = W/H
    u = (X-0.5)*2*asp*FOV; v = -(Y-0.5)*2*FOV + CY0
    dc = nrm(np.stack([u, v, -np.ones_like(u)], -1)).reshape(-1, 3)
    d = dc @ M.T
    o = np.broadcast_to((np.array([0, 0, DIST]) @ M.T), d.shape).copy()
    rgb = np.zeros_like(d); a = np.zeros(d.shape[0])
    tn, tf = box_hit(o, d)
    hit = (tf >= tn) & (tf > 0)
    if hit.any():
        rgb[hit] = shade_box(o[hit], d[hit]); a[hit] = 1
    # the glossy bench
    miss = ~hit & (d[:, 1] < -1e-4)
    if miss.any():
        om, dm = o[miss], d[miss]
        t = (FLOOR-om[:, 1])/dm[:, 1]
        p = om + dm*t[:, None]
        r = np.sqrt((p[:, 0]/1.6)**2 + (p[:, 2]/1.15)**2)
        fade = sm(2.2, 0.35, r)**1.4
        rd = dm.copy(); rd[:, 1] *= -1
        q = p + rd*1e-4
        cosi = np.clip(-dm[:, 1], 0, 1)
        Fr = 0.06 + 0.5*(1-cosi)**5
        c = INK[None]*0.75 + env(rd)*Fr[:, None]*0.45
        tn2, tf2 = box_hit(q, rd)
        h2 = (tf2 >= tn2) & (tf2 > 0)
        if h2.any():
            c[h2] = INK*0.7 + shade_box(q[h2], rd[h2])*0.30
        # a soft contact shadow under the crystal
        sh = sm(0.55, 0.0, np.maximum(np.abs(p[:, 0])-HX, 0)+np.maximum(np.abs(p[:, 2])-HZ, 0))
        c = c*(1-0.55*sh[:, None])
        rgb[miss] = c; a[miss] = fade
    return rgb.reshape(y1-y0, W, 3), a.reshape(y1-y0, W)

def tone(c):
    c = c/(1+0.18*c)
    return np.clip(c, 0, 1)**(1/1.0)

rows = []; alph = []
step = max(1, 40*SS)
for y0 in range(0, H, step):
    r, a = render_rows(y0, min(H, y0+step)); rows.append(r); alph.append(a)
rgb = tone(np.concatenate(rows)); A = np.concatenate(alph)
# the bench and its reflections ease out long before the bottom and side edges of the frame (DJ/DP)
yy = (np.arange(H)+0.5)/H; xx = (np.arange(W)+0.5)/W
A = A*sm(0.99, 0.80, yy)[:, None]*sm(0.0, 0.12, xx)[None, :]*sm(1.0, 0.88, xx)[None, :]
img = np.concatenate([rgb, A[..., None]], -1)
if SS > 1:
    img = img.reshape(FH, SS, FW, SS, 4)
    pre = img[..., :3]*img[..., 3:4]
    al = img[..., 3].mean((1, 3)); pc = pre.mean((1, 3))
    img = np.concatenate([pc/np.maximum(al, 1e-6)[..., None], al[..., None]], -1)
Image.fromarray((np.clip(img, 0, 1)*255+0.5).astype(np.uint8), 'RGBA').save(OUT)

def proj(pobj):
    pc = np.array(pobj) @ M - np.array([0, 0, DIST])   # object -> camera (M orthonormal: cam = M^T obj, row form obj @ M)
    pc = np.array(pobj) @ M
    pc = pc - np.array([0, 0, DIST])
    u = pc[0]/(-pc[2]); v = pc[1]/(-pc[2])
    X = u/(2*(FW/FH)*FOV)+0.5; Y = -(v-CY0)/(2*FOV)+0.5
    return [round(float(X), 4), round(float(Y), 4)]
print(json.dumps({'L': proj([-HX, 0, 0]), 'R': proj([HX, 0, 0]), 'Lfar': proj([-HX-3, 0, 0]), 'Rfar': proj([HX+3, 0, 0]),
                  'C': proj([0, 0, 0]), 'top': proj([0, HY, 0]), 'bot': proj([0, -HY, 0])}))
