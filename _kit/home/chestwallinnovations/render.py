#!/usr/bin/env python3
"""Hero render (HOME_BRIEF update option c, product subject): a short length of rib with a fracture across it, bridged by a
titanium rib plate held by locking caps, as the PC Fix System is described in its FDA 510(k) summary (K260411: titanium or PEEK
plates with holes and slots, locking posts and locking caps). Proportions are schematic. Sphere-traced signed distance fields:
the rib is a flattened band swept along a gentle arc, the plate follows its outer face. Bone is shaded with wrapped diffuse and
fine pore texture, titanium with a soft studio reflection. Both ends of the rib dissolve into the page ink, and the ground is
the ink exactly, so there is no box edge (DJ/DP). Output: hero.webp (lossless)."""
import numpy as np, pathlib, math
from PIL import Image
H = pathlib.Path(__file__).resolve().parent
INK = np.array([22, 26, 32], float)          # --ink #161a20
W, HH = 1500, 1100
SS = 2
w, h = W*SS, HH*SS

def nrm(v): return v/np.maximum(np.linalg.norm(v, axis=-1, keepdims=True), 1e-9)
def hash3(p):
    return np.modf(np.sin(p @ np.array([127.1, 311.7, 74.7]))*43758.5453)[0]
def vnoise(p):
    i = np.floor(p); f = p - i; u = f*f*(3-2*f); out = 0
    for dx in (0, 1):
        for dy in (0, 1):
            for dz in (0, 1):
                c = hash3(i + np.array([dx, dy, dz], float))
                wgt = (u[:, 0] if dx else 1-u[:, 0])*(u[:, 1] if dy else 1-u[:, 1])*(u[:, 2] if dz else 1-u[:, 2])
                out = out + c*wgt
    return out

# ---- geometry (model units ~ cm). Rib arc in the x-z plane, centre behind, bulging toward the camera.
RC = 13.0                    # arc radius of the rib
A_R, A_Y = 0.42, 0.95        # half thickness (radial), half height (y)
TH_F = 0.0                   # fracture at the middle
def rib_local(p):
    r = np.sqrt(p[:, 0]**2 + (p[:, 2]+RC)**2); th = np.arctan2(p[:, 0], p[:, 2]+RC)
    return r - RC, p[:, 1], th
def sd_rib(p):
    u, y, th = rib_local(p)
    # superellipse-ish flattened section: rounded box
    q = np.stack([np.abs(u) - (A_R-0.30), np.abs(y) - (A_Y-0.30)], 1)
    d = np.linalg.norm(np.maximum(q, 0), axis=1) + np.minimum(np.maximum(q[:, 0], q[:, 1]), 0) - 0.30
    # slight waviness along the length, like real bone
    d = d - 0.012*np.sin(th*9 + y*1.3)
    # fracture: an irregular thin gap
    s = th*RC
    crack = s - TH_F*RC - 0.10*np.sin(y*5.3) - 0.05*np.sin(y*13.7+1.2) - 0.06*u
    d = np.maximum(d, -(np.abs(crack) - 0.018))
    return d
PL_T, PL_W, PL_L = 0.11, 0.42, 3.4     # plate thickness, half width, half length (arc length)
HOLES = [-3.0, -2.25, -1.5, -0.75, 0.75, 1.5, 2.25, 3.0]
CAPS = [-2.25, -0.75, 0.75, 2.25]
SLOT = 0.0
def sd_plate(p):
    u, y, th = rib_local(p); s = th*RC
    uo = u - (A_R + PL_T*0.5 - 0.02)
    # waisted outline: full width at each hole, narrower between them
    wy = PL_W - 0.10*(0.5 - 0.5*np.cos(s*2*math.pi/0.75))
    q = np.stack([np.abs(uo) - PL_T*0.5 + 0.04, np.abs(y) - wy + 0.04, np.abs(s) - PL_L + 0.04], 1)
    d = np.linalg.norm(np.maximum(q, 0), axis=1) + np.minimum(q.max(1), 0) - 0.04
    for c in HOLES:
        dh = np.sqrt((s-c)**2 + y**2) - 0.15
        d = np.maximum(d, -dh)
    # central slot across the fracture line
    ds = np.linalg.norm(np.stack([np.maximum(np.abs(s-SLOT) - 0.20, 0), y], 1), axis=1) - 0.09
    d = np.maximum(d, -ds)
    return d
def sd_caps(p):
    u, y, th = rib_local(p); s = th*RC
    d = np.full(len(p), 1e9)
    for c in CAPS:
        uo = u - (A_R + PL_T - 0.02)
        rr = np.sqrt((s-c)**2 + y**2)
        q = np.stack([rr - 0.23, np.abs(uo - 0.09) - 0.09], 1)
        dc = np.linalg.norm(np.maximum(q, 0), axis=1) + np.minimum(q.max(1), 0) - 0.035
        # hex drive recess
        ang = np.arctan2(y, s-c); hx = rr*np.cos((np.mod(ang, math.pi/3) - math.pi/6))
        dr = np.maximum(hx - 0.085, -(uo - 0.12))
        dc = np.maximum(dc, -dr)
        d = np.minimum(d, dc)
    return d
def scene(p):
    a = sd_rib(p); b = sd_plate(p); c = sd_caps(p)
    d = np.minimum(np.minimum(a, b), c)
    mat = np.where(d == a, 0, np.where(d == b, 1, 2))
    return d, mat

# ---- camera
def rx(a): c, s = math.cos(a), math.sin(a); return np.array([[1, 0, 0], [0, c, -s], [0, s, c]])
def ry(a): c, s = math.cos(a), math.sin(a); return np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]])
def rz(a): c, s = math.cos(a), math.sin(a); return np.array([[c, -s, 0], [s, c, 0], [0, 0, 1]])
Mw = rz(math.radians(-17)) @ rx(math.radians(-14)) @ ry(math.radians(-8))   # object -> world
Mi = Mw.T
ro_w = np.array([0, -0.35, 12.5])
fov = 0.355
ys, xs = np.mgrid[0:h, 0:w]
px = (xs + 0.5 - w/2)/(h/2)*fov; py = -(ys + 0.5 - h/2)/(h/2)*fov
rd_w = nrm(np.stack([px, py, -np.ones_like(px)], -1)).reshape(-1, 3)
ro = (Mi @ ro_w)[None, :].repeat(len(rd_w), 0); rd = rd_w @ Mi.T
N = len(rd); t = np.full(N, 6.0); hit = np.zeros(N, bool); alive = np.ones(N, bool); mat = np.zeros(N, int)
for it in range(160):
    idx = np.nonzero(alive)[0]
    if len(idx) == 0: break
    p = ro[idx] + rd[idx]*t[idx, None]
    d, m = scene(p)
    t[idx] += d*0.85
    done = d < 0.0015
    hit[idx[done]] = True; mat[idx[done]] = m[done]
    alive[idx[done | (t[idx] > 22)]] = False
    if it % 20 == 0: print('it', it, len(idx))
hi = np.nonzero(hit)[0]
P = ro[hi] + rd[hi]*t[hi, None]
e = 0.002
def sdf(q): return scene(q)[0]
Nn = nrm(np.stack([sdf(P+[e, 0, 0])-sdf(P-[e, 0, 0]), sdf(P+[0, e, 0])-sdf(P-[0, e, 0]), sdf(P+[0, 0, e])-sdf(P-[0, 0, e])], 1))
V = -rd[hi]
# lights in object space (defined in world: key upper-left front, fill right, rim behind-top)
Lk = Mi @ nrm(np.array([-0.55, 0.75, 0.55])); Lf = Mi @ nrm(np.array([0.8, -0.1, 0.5])); Lr = Mi @ nrm(np.array([0.3, 0.6, -0.8]))
# ambient occlusion
ao = np.ones(len(P))
for k in range(1, 6):
    hk = 0.06*k; ao -= (hk - sdf(P + Nn*hk))*(0.5**k)*3.2
ao = np.clip(ao, 0.25, 1)
# soft shadow from key light
sh = np.ones(len(P)); ts = np.full(len(P), 0.02)
for k in range(48):
    d = sdf(P + Nn*0.004 + Lk[None, :]*ts[:, None])
    sh = np.minimum(sh, np.clip(10*d/ts, 0, 1)); ts += np.clip(d, 0.01, 0.25)
sh = np.clip(sh, 0, 1)
m = mat[hi]
col = np.zeros((len(P), 3))
dk = (Nn*Lk).sum(1); df = (Nn*Lf).sum(1); dr_ = (Nn*Lr).sum(1)
# bone: wrapped diffuse, warm ivory with pores and faint mottling
u_, y_, th_ = rib_local(P)
pore = 0.6*vnoise(P*60.0) + 0.4*vnoise(P*17.0); mott = 0.6*vnoise(P*1.7) + 0.4*vnoise(P*4.3)
bc = np.array([232, 222, 201])/255*(0.90 + 0.12*mott)[:, None]*(0.965 + 0.04*pore)[:, None]
wrap = np.clip((dk + 0.45)/1.45, 0, 1)
lb = 0.20 + 0.95*wrap*(0.35 + 0.65*sh) + 0.18*np.clip(df, 0, 1)
Hk = nrm(Lk[None, :] + V); spb = np.clip((Nn*Hk).sum(1), 0, 1)**18*0.16*sh
rimb = np.clip(1 - (Nn*V).sum(1), 0, 1)**3*0.20
cb = bc*lb[:, None]*ao[:, None] + (spb + rimb)[:, None]*np.array([1, .97, .92])
# fracture faces darker
cb *= np.where(np.abs(th_*RC) < 0.35, 0.75 + 0.25*np.clip(np.abs(th_*RC)/0.35, 0, 1), 1)[:, None]
# titanium: soft studio env + spec
R = rd[hi] - 2*(rd[hi]*Nn).sum(1)[:, None]*Nn
Rw = R @ Mw.T
env = 0.30 + 0.55*np.clip(Rw[:, 1]*0.5 + 0.5, 0, 1)**1.6 + 0.35*np.exp(-((Rw[:, 0]+0.4)**2 + (Rw[:, 1]-0.6)**2)*6)
tc = np.array([168, 172, 178])/255
spk = np.clip((Nn*Hk).sum(1), 0, 1)**60*0.9*sh
ct = tc*(0.18 + 0.55*np.clip(dk, 0, 1)*(0.4+0.6*sh) + 0.12*np.clip(df, 0, 1))[:, None] + tc*env[:, None]*0.55 + spk[:, None]
ct *= ao[:, None]
# brushed texture on plate along length
br = vnoise(np.stack([th_*RC*2, y_*140, u_*20], 1)); ct *= (0.95 + 0.07*br)[:, None]
col = np.where((m == 0)[:, None], cb, ct)
col = np.clip(col, 0, 1.2)
img = np.zeros((N, 3)); img[:] = INK/255
# ends of the rib dissolve into the ink: fade by arc-length
s_ = th_*RC
fade = np.clip((5.6 - np.abs(s_))/2.0, 0, 1); fade = fade*fade*(3-2*fade); fade = fade**1.6
fade = np.where(m == 0, fade, np.maximum(fade, np.clip((4.2 - np.abs(s_))/0.6, 0, 1)))
# gentle depth haze
img[hi] = INK/255 + (col - INK/255)*fade[:, None]
img = img.reshape(h, w, 3)
im = Image.fromarray((np.clip(img, 0, 1)*255 + 0.5).astype(np.uint8)).resize((W, HH), Image.LANCZOS)
a = np.asarray(im).astype(float)
# radial vignette into the ink so no edge exists
yy, xx = np.mgrid[0:HH, 0:W]; rr = np.sqrt(((xx-W/2)/(W*0.5))**2 + ((yy-HH/2)/(HH*0.5))**2)
vg = np.clip((0.98 - rr)/0.55, 0, 1); vg = vg*vg*(3-2*vg)
a = INK + (a - INK)*vg[..., None]
Image.fromarray((a+0.5).astype(np.uint8)).save(H/'hero.webp', lossless=True, quality=100, method=6)
print('saved')
