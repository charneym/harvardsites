#!/usr/bin/env python3
"""Hero render (HOME_BRIEF update option c, mechanism subject): the human airway that Anorit's ventilation device fills with air,
the trachea and bronchial tree grown in 3D inside two lung volumes, as a CT airway reconstruction shows it. Each branch is a
tapered capsule; pixels take the nearest-surface height (z-buffer), so normals and depth are exact. Shaded as a translucent
cast: soft Lambert, a strong Fresnel rim, a cool specular, depth haze into the ink. The ground equals the page ink exactly and
the trachea eases out into it at the top, so the art has no edge (DJ/DP). Output: hero.webp (straight to the page, no upscale)."""
import numpy as np, pathlib, math
from PIL import Image
H = pathlib.Path(__file__).resolve().parent
INK = np.array([2, 21, 50], float)          # --ink #021532
TINT = np.array([196, 214, 242], float)     # tint of the logo navy (hue 217)
W, HH, SS = 1400, 1500, 2
w, h = W*SS, HH*SS
rng = np.random.default_rng(11)

def unit(v): return v/np.linalg.norm(v)
def rot(v, axis, ang):
    axis = unit(axis); c, s = math.cos(ang), math.sin(ang)
    return v*c + np.cross(axis, v)*s + axis*np.dot(axis, v)*(1-c)

# lung volumes (model units: x right, y down, z toward viewer); trachea top at y=-1.0
LUNGS = [(np.array([-0.50, 0.40, 0.0]), np.array([0.42, 0.66, 0.40])),
         (np.array([0.50, 0.38, 0.0]), np.array([0.44, 0.68, 0.42]))]
def inside(p):
    for c, r in LUNGS:
        if np.sum(((p-c)/r)**2) < 1.0: return True
    return False

segs = []   # (p0, p1, r0, r1, gen)
def lung_of(p):
    return min(LUNGS, key=lambda cr: np.sum(((p-cr[0])/cr[1])**2))
def grow(p, d, L, r, gen):
    q = p + d*L
    if gen > 1 and not inside(q):
        c, _ = lung_of(p)
        ok = False
        for t in (0.35, 0.6, 0.85):                       # steer back into the lung, as real airways stay inside it
            nd = unit(d*(1-t) + unit(c-p)*t); q2 = p + nd*L*0.8
            if inside(q2): d, q, L, ok = nd, q2, L*0.8, True; break
        if not ok: return
    end = gen >= 13 or r < 0.0017
    segs.append([p, q, r, r*(1.0 if end else 0.9), gen])
    if end: return
    idx = len(segs)-1
    perp = unit(np.cross(d, np.array([0.0, 0.0, 1.0]) if gen % 2 == 0 else np.array([1.0, 0.0, 0.0])))
    perp = rot(perp, d, rng.uniform(-0.6, 0.6))
    split = rng.uniform(0.38, 0.62)
    kids = []
    for side, frac in ((1, split), (-1, 1-split)):
        ang = (0.34 + 0.6*(1-frac)) * rng.uniform(0.85, 1.15)
        nd = unit(rot(d, perp, side*ang))
        nd = unit(nd + np.array([0, 0.03 if gen > 3 else -0.02, 0]))
        rr = r*(0.80 if gen < 3 else 0.72)*(frac/0.5)**0.35
        kids.append((nd, rr))
    segs[idx][3] = max(k[1] for k in kids)                # no step at the joint
    for nd, rr in kids:
        grow(q, nd, L*rng.uniform(0.72, 0.86), rr, gen+1)

top = np.array([0.0, -0.95, 0.0]); car = np.array([0.0, -0.22, 0.0])
segs.append([top, car, 0.082, 0.078, 0])
grow(car, unit(np.array([-0.80, 0.60, 0.05])), 0.30, 0.058, 1)
grow(car, unit(np.array([0.60, 0.80, -0.05])), 0.23, 0.064, 1)

# project: fit model bounds into the canvas
P = np.array([[*s[0]] for s in segs] + [[*s[1]] for s in segs])
xmin, xmax = P[:, 0].min(), P[:, 0].max(); ymin, ymax = P[:, 1].min(), P[:, 1].max()
S = min(w*0.86/(xmax-xmin), h*0.94/(ymax-ymin))
ox = w*0.5 - S*(xmin+xmax)/2; oy = h*0.03 - S*ymin
def pr(p): return np.array([ox + S*p[0], oy + S*p[1], S*p[2]])

Z = np.full((h, w), -1e9, np.float32); NX = np.zeros((h, w), np.float32); NY = np.zeros((h, w), np.float32)
NZ = np.zeros((h, w), np.float32); GEN = np.zeros((h, w), np.float32)
for (p0, p1, r0, r1, gen) in sorted([tuple(x) for x in segs], key=lambda s: s[4]):
    a, b = pr(p0), pr(p1); R0, R1 = r0*S, r1*S
    pad = max(R0, R1)+2
    x0, x1 = int(max(0, min(a[0], b[0])-pad)), int(min(w, max(a[0], b[0])+pad+1))
    y0, y1 = int(max(0, min(a[1], b[1])-pad)), int(min(h, max(a[1], b[1])+pad+1))
    if x0 >= x1 or y0 >= y1: continue
    yy, xx = np.mgrid[y0:y1, x0:x1].astype(np.float32)
    d = b[:2]-a[:2]; L2 = max(d@d, 1e-6)
    u = np.clip(((xx-a[0])*d[0]+(yy-a[1])*d[1])/L2, 0, 1)
    px, py = a[0]+u*d[0], a[1]+u*d[1]
    R = R0+(R1-R0)*u
    dx, dy = xx-px, yy-py; dd = dx*dx+dy*dy
    m = dd < R*R
    if not m.any(): continue
    hz = np.sqrt(np.maximum(R*R-dd, 0))
    zc = a[2]+(b[2]-a[2])*u
    z = zc + hz
    zs = Z[y0:y1, x0:x1]
    upd = m & (z > zs)
    Z[y0:y1, x0:x1] = np.where(upd, z, zs)
    inv = 1/np.maximum(R, 1e-3)
    NX[y0:y1, x0:x1] = np.where(upd, dx*inv, NX[y0:y1, x0:x1])
    NY[y0:y1, x0:x1] = np.where(upd, dy*inv, NY[y0:y1, x0:x1])
    NZ[y0:y1, x0:x1] = np.where(upd, hz*inv, NZ[y0:y1, x0:x1])
    GEN[y0:y1, x0:x1] = np.where(upd, gen, GEN[y0:y1, x0:x1])

hit = Z > -1e8
Ln = unit(np.array([-0.45, -0.6, 0.66]))
lam = np.clip(NX*Ln[0]+NY*Ln[1]+NZ*Ln[2], 0, 1)
fres = (1-np.clip(NZ, 0, 1))**2.2
Hh = unit(Ln+np.array([0, 0, 1.0]))
spec = np.clip(NX*Hh[0]+NY*Hh[1]+NZ*Hh[2], 0, 1)**38
zn = np.where(hit, Z, 0); zr = (zn - zn[hit].min())/(np.ptp(zn[hit])+1e-6)
depth = 0.55+0.45*zr                                   # far branches recede into the haze
fine = np.clip(1.05-GEN/20, 0.55, 1)
ring = np.zeros_like(Z)
ty = (np.mgrid[0:h, 0:w][0]).astype(np.float32)
trach = hit & (GEN == 0)
ring[trach] = 0.5+0.5*np.cos(ty[trach]/(0.040*S)*2*np.pi)
val = 1.3*(0.22*lam + 0.80*fres + 0.16 + 0.10*ring*np.clip(NZ, 0, 1)) * depth * fine
img = INK[None, None, :] * np.ones((h, w, 1))
col = INK + (TINT-INK)*np.clip(val, 0, 1)[..., None]
col = col + 255*0.55*spec[..., None]*depth[..., None]
alpha = np.where(hit, 0.92, 0.0)[..., None]
img = img*(1-alpha) + col*alpha

# soft inner glow of the two lungs (air), never a hard edge
yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
glow = np.zeros((h, w), np.float32)
for c, r in LUNGS:
    q = pr(c); rx, ry = r[0]*S*1.05, r[1]*S*1.0
    e = ((xx-q[0])/rx)**2 + ((yy-q[1])/ry)**2
    glow += np.exp(-e*1.6)
img = img + (TINT-INK)[None, None, :]*0.06*glow[..., None]

# the trachea fades into the ink at the top over a long distance; every border eases to the ink
fy = np.clip((yy/h-0.0)/0.24, 0, 1); fy = fy*fy*(3-2*fy)
ex = np.minimum(xx, w-1-xx)/(w*0.06); ey = (h-1-yy)/(h*0.05)
edge = np.clip(np.minimum(ex, ey), 0, 1); edge = edge*edge*(3-2*edge)
k = (fy*edge)[..., None]
img = INK + (img-INK)*k
out = Image.fromarray(np.clip(img, 0, 255).astype(np.uint8)).resize((W, HH), Image.LANCZOS)
out.save(H/'hero.webp', quality=88, method=6)
print('segments', len(segs), 'saved', out.size)
