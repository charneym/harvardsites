#!/usr/bin/env python3
"""AKA Optics hero (HOME_BRIEF update 2c: a crafted render of the firm's real product). One bimorph deformable mirror,
as AKA Optics builds them (akaoptics.com > Products > Bimorph Deformable Mirrors, and the product photographs on the
home page): a thin glass sheet with a dielectric coating, set in a turned aluminium mount, seen three-quarters from the
front as in their own product shots. Analytic ray tracing in numpy, real alpha over the page ink.
Usage: python3 render.py W H out.png [SS]"""
import sys, math, numpy as np
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 600
H = int(sys.argv[2]) if len(sys.argv) > 2 else 520
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 1
FW, FH = W, H; W, H = W*SS, H*SS
INK = np.array([24, 25, 27])/255.0
R0, RM, RI = 1.0, 0.95, 0.80        # mount outer radius, chamfer start, mirror (clear aperture) radius
HM, DM = 0.46, 0.035                # mount height, mirror recess depth
def nrm(v): return v/np.linalg.norm(v, axis=-1, keepdims=True)
def sm(a, b, x): x = np.clip((x-a)/(b-a), 0, 1); return x*x*(3-2*x)
rng = np.random.default_rng(7)
RING = rng.random(4096)             # lathe ring pattern (per radius / per height)

def rotx(a):
    c, s = math.cos(a), math.sin(a); return np.array([[1, 0, 0], [0, c, -s], [0, s, c]])
def roty(a):
    c, s = math.cos(a), math.sin(a); return np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]])
# object frame: axis = +y. Tilt the face toward the camera (+z) and turn it a little to the left.
M = roty(math.radians(-24)) @ rotx(math.radians(47))
MI = M.T

def env(d):
    """dark studio: a large soft box overhead and slightly behind the camera, a warm strip on the right, a cool strip
    on the left, a faint lime kicker low right (the AKA rule colour)."""
    x, y, z = d[..., 0], d[..., 1], d[..., 2]
    c = INK[None]*(0.8+0.5*sm(-0.4, 0.8, y)[..., None])
    box = sm(0.30, 0.62, y)*sm(-0.6, 0.2, z)*(0.25+0.75*sm(0.16, 0.0, np.abs(x+0.24)))
    rim = sm(0.45, 0.8, y)*sm(0.3, 0.05, np.abs(x+0.12))*sm(-0.2, 0.3, z)
    lft = sm(-0.45, -0.8, x)*sm(0.55, 0.1, np.abs(y-0.15))
    rgt = sm(0.45, 0.8, x)*sm(0.5, 0.1, np.abs(y-0.3))
    lim = sm(0.25, 0.7, x)*sm(0.16, 0.03, np.abs(y+0.12))*sm(-0.3, 0.4, z)
    strip = sm(0.018, 0.004, np.abs(x+0.445+0.9*(z+0.07)))*sm(0.75, 0.85, y)
    flo = sm(-0.15, -0.6, y)*sm(-0.2, 0.5, z)*sm(1.0, 0.2, np.abs(x))
    c = c + strip[..., None]*np.array([1, 1, 1])*1.25 + flo[..., None]*np.array([0.72, 0.70, 0.66])*0.9 + box[..., None]*np.array([0.86, 0.88, 0.92])*1.15 + rim[..., None]*np.array([1, 1, 1])*1.6 \
        + lft[..., None]*np.array([0.6, 0.72, 0.95])*1.3 + rgt[..., None]*np.array([1.0, 0.95, 0.88])*1.5 \
        + lim[..., None]*np.array([0.81, 0.86, 0.11])*0.9
    return c

def hit(o, d):
    """object-local ray o,d; returns t and surface id: 1 top annulus, 2 chamfer, 3 outer wall, 4 mirror, 5 inner wall"""
    n_ = len(o); best = np.full(n_, np.inf); sid = np.zeros(n_, int)
    with np.errstate(divide='ignore', invalid='ignore'):
        # top flat y=0, RI..RM
        t = -o[:, 1]/d[:, 1]; p = o+d*t[:, None]; r = np.hypot(p[:, 0], p[:, 2])
        ok = (t > 1e-6) & (r >= RI) & (r <= RM) & np.isfinite(t); u = ok & (t < best); best[u] = t[u]; sid[u] = 1
        # chamfer: cone from (RM,0) to (R0,-(R0-RM)) : y = -(r-RM)
        # solve r = RM - y  -> x^2+z^2 = (RM - y)^2
        a = d[:, 0]**2+d[:, 2]**2-d[:, 1]**2
        b = 2*(o[:, 0]*d[:, 0]+o[:, 2]*d[:, 2]+(RM-o[:, 1])*d[:, 1])
        c = o[:, 0]**2+o[:, 2]**2-(RM-o[:, 1])**2
        disc = b*b-4*a*c; sq = np.sqrt(np.maximum(disc, 0))
        for tt in ((-b-sq)/(2*a), (-b+sq)/(2*a)):
            p = o+d*tt[:, None]
            ok = (disc > 0) & (tt > 1e-6) & (p[:, 1] <= 0) & (p[:, 1] >= -(R0-RM)) & np.isfinite(tt)
            u = ok & (tt < best); best[u] = tt[u]; sid[u] = 2
        # outer wall r=R0, y in [-HM, -(R0-RM)]
        a = d[:, 0]**2+d[:, 2]**2; b = 2*(o[:, 0]*d[:, 0]+o[:, 2]*d[:, 2]); c = o[:, 0]**2+o[:, 2]**2-R0*R0
        disc = b*b-4*a*c; sq = np.sqrt(np.maximum(disc, 0))
        tt = (-b-sq)/(2*a); p = o+d*tt[:, None]
        ok = (disc > 0) & (tt > 1e-6) & (p[:, 1] <= -(R0-RM)) & (p[:, 1] >= -HM)
        u = ok & (tt < best); best[u] = tt[u]; sid[u] = 3
        # mirror y=-DM, r<RI
        t = (-DM-o[:, 1])/d[:, 1]; p = o+d*t[:, None]; r = np.hypot(p[:, 0], p[:, 2])
        ok = (t > 1e-6) & (r < RI) & np.isfinite(t); u = ok & (t < best); best[u] = t[u]; sid[u] = 4
        # inner wall r=RI, y in [-DM,0], seen from inside
        c = o[:, 0]**2+o[:, 2]**2-RI*RI
        disc = b*b-4*a*c; sq = np.sqrt(np.maximum(disc, 0))
        tt = (-b+sq)/(2*a); p = o+d*tt[:, None]
        ok = (disc > 0) & (tt > 1e-6) & (p[:, 1] <= 0) & (p[:, 1] >= -DM)
        u = ok & (tt < best); best[u] = tt[u]; sid[u] = 5
    return best, sid

def refl(d, n): return nrm(d-2*(d*n).sum(-1)[:, None]*n)

ys, xs = np.mgrid[0:H, 0:W]
SC = 1.55
u = ((xs+.5)/W*2-1)*SC*W/H; v = (1-(ys+.5)/H*2)*SC
DC = 7.0
CAMW = np.array([0, 0, DC])
Dw = nrm(np.stack([u.ravel(), v.ravel(), -np.full(H*W, DC)], -1))
# into object frame (object centre at origin, shifted so the mount's middle sits at the image centre)
SHIFT = np.array([0, -HM*0.5, 0])
Ow = np.repeat(CAMW[None], H*W, 0)
O = (Ow @ M) - SHIFT; D = Dw @ M
t, sid = hit(O, D)
P = O+D*np.where(np.isfinite(t), t, 0)[:, None]
r = np.hypot(P[:, 0], P[:, 2])
N = np.zeros_like(P)
N[sid == 1] = [0, 1, 0]
m = sid == 2; N[m] = nrm(np.stack([P[m, 0]/np.maximum(r[m], 1e-6), np.ones(m.sum()), P[m, 2]/np.maximum(r[m], 1e-6)], -1))
m = sid == 3; N[m] = np.stack([P[m, 0]/R0, np.zeros(m.sum()), P[m, 2]/R0], -1)
N[sid == 4] = [0, 1, 0]
m = sid == 5; N[m] = np.stack([-P[m, 0]/RI, np.zeros(m.sum()), -P[m, 2]/RI], -1)
col = np.zeros((H*W, 3))
Rd = refl(D, N)
Rw = Rd @ MI                         # reflection direction back in world (env) frame
Nw = N @ MI
key = nrm(np.array([-0.35, 0.8, 0.55]))
fill = nrm(np.array([0.3, -0.5, 0.8]))
lam = np.clip(Nw@key, 0, 1)+0.55*np.clip(Nw@fill, 0, 1)
cosv = np.clip(-(D*N).sum(-1), 0, 1)
# aluminium: lathe-turned, satin. Rings by radius on the top faces, by height on the wall.
alu = np.isin(sid, [1, 2, 3, 5])
ringR = RING[(np.clip(r, 0, 1.2)*3000).astype(int) % 4096]
ringY = RING[((-P[:, 1])*5000).astype(int) % 4096]
streak = np.where(sid == 3, ringY, ringR)
# soft reflection: average a few jittered env lookups (satin finish)
acc = np.zeros((H*W, 3))
for k in range(6):
    jit = rng.normal(0, 0.10, (H*W, 3)); acc += env(nrm(Rw+jit))
acc /= 6
base = np.array([0.80, 0.82, 0.85])
alu_c = acc*base*1.05 + (0.08+0.28*lam)[:, None]*base*0.6
alu_c *= (0.955+0.06*streak)[:, None]
# the lathe groove on the wall, a third of the way down
g = (sid == 3) & (np.abs(P[:, 1]+0.20) < 0.012)
alu_c[g] *= 0.42
gl = (sid == 3) & (np.abs(P[:, 1]+0.188) < 0.004)
alu_c[gl] = alu_c[gl]*1.25
# three bezel screws on the top annulus
ang = np.arctan2(P[:, 2], P[:, 0])
for a0 in (math.radians(100), math.radians(220), math.radians(340)):
    sx, sz = 0.875*math.cos(a0), 0.875*math.sin(a0)
    dd = np.hypot(P[:, 0]-sx, P[:, 2]-sz)
    s = (sid == 1) & (dd < 0.028)
    alu_c[s] = alu_c[s]*0.35+0.02
    s2 = (sid == 1) & (dd < 0.022) & (np.abs((P[:, 0]-sx)*math.cos(a0+.6)+(P[:, 2]-sz)*math.sin(a0+.6)) < 0.004)
    alu_c[s2] *= 0.4
# inner wall is in its own shadow
alu_c[sid == 5] *= 0.45
col[alu] = alu_c[alu]
# the mirror: dielectric coating, angle-dependent hue (lime-green at normal incidence turning teal-blue at grazing)
mm = sid == 4
cv = cosv[mm]
tint_n = np.array([0.62, 0.86, 0.30]); tint_g = np.array([0.30, 0.55, 0.95])
f = sm(0.735, 0.64, cv)
tint = tint_n[None]*(1-f)[:, None]+tint_g[None]*f[:, None]
envm = env(Rw[mm])
# a faint second sheen: the glass front face over the coating
fr = 0.04+0.96*(1-cv)**5
mir = envm*tint*0.95 + tint*0.03 + fr[:, None]*envm*0.5
# near the bezel the recess shades the mirror a touch
mir *= (0.80+0.20*sm(RI, RI-0.12, r[mm]))[:, None]
col[mm] = mir
cov = np.isfinite(t).astype(float).reshape(H, W)
col = col.reshape(H, W, 3)
col = 1-np.exp(-col*1.25)
img = np.concatenate([np.clip(col, 0, 1), cov[..., None]], -1)
im = Image.fromarray((img*255+.5).astype(np.uint8), 'RGBA')
if SS != 1: im = im.resize((FW, FH), Image.LANCZOS)
bb = im.getbbox(); pw = int((bb[2]-bb[0])*0.04); ph = int((bb[3]-bb[1])*0.04)
im = im.crop((bb[0]-pw, bb[1]-ph, bb[2]+pw, bb[3]+ph)); print('size', im.size, 'aspect', round(im.size[0]/im.size[1], 4))
im.save(OUT)
if len(sys.argv) > 5:
    rr = Rw[sid == 4]; print('Rw min', rr.min(0).round(3), 'max', rr.max(0).round(3), 'cos', cosv[sid == 4].min().round(3), cosv[sid == 4].max().round(3))
