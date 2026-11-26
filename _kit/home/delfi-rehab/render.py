#!/usr/bin/env python3
"""DELFI REHAB hero (HOME_BRIEF update 2c: a crafted render of the firm's real product). One complete wheelchair wheel as
Delfi builds it in Dolní Štěpanice (delfi.cz > REHA program > Kompletní kola, e.g. "kolo light 24"): a grey tyre on a
silver anodised aluminium rim, 24 crossed stainless spokes laced to a silver hub with two flanges, and a polished
aluminium push rim (obruč) held off the rim on six standoffs. Sphere-traced signed distance fields in numpy, a dark
charcoal studio environment (a large soft box upper left, a narrow warm strip in the brand yellow at right), jittered
reflections for the anodised and brushed parts, SDF ambient occlusion. Real alpha from sub-pixel coverage (no box edge).
Usage: python3 render.py W H out.png [SS]"""
import sys, math, numpy as np
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 600
H = int(sys.argv[2]) if len(sys.argv) > 2 else 600
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 1
rng = np.random.default_rng(3)
F = np.float32

def nrm(v): return v/np.maximum(np.linalg.norm(v, axis=-1, keepdims=True), 1e-9)
def sm(a, b, x): x = np.clip((x-a)/(b-a), 0, 1); return x*x*(3-2*x)
def Rx(a): c, s = math.cos(a), math.sin(a); return np.array([[1, 0, 0], [0, c, -s], [0, s, c]])
def Ry(a): c, s = math.cos(a), math.sin(a); return np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]])
def Rz(a): c, s = math.cos(a), math.sin(a); return np.array([[c, -s, 0], [s, c, 0], [0, 0, 1]])

# ---------------- geometry (wheel space: axle = z, push-rim side towards +z; tyre outer radius 1) ----------------
TR, Tr = 0.952, 0.048           # tyre torus
RR, RB, RZ, RRND = 0.888, 0.030, 0.0145, 0.006   # rim: centre radius, radial half, axial half, rounding
HR, Hr, HZ = 0.852, 0.0175, 0.118   # push rim
NSO = 6                          # standoffs
HUBR, HUBZ = 0.034, 0.120        # hub shell
FLR, FLZ, FLT = 0.068, 0.058, 0.007  # flanges
AXR, AXZ = 0.019, 0.165          # axle stub
SPR = 0.0042                     # spoke radius
NSP = 24
# spokes: alternate rim holes go to the two flanges; leading/trailing alternate within each flange (2-cross lacing)
A, B = [], []
for i in range(NSP):
    th = 2*math.pi*i/NSP
    side = 1 if i % 2 == 0 else -1
    lead = 1 if (i//2) % 2 == 0 else -1
    hth = th + lead*math.radians(55)
    A.append([0.86*math.cos(th), 0.86*math.sin(th), 0.004*side])
    B.append([(FLR-0.01)*math.cos(hth), (FLR-0.01)*math.sin(hth), FLZ*side])
A = np.array(A, F); B = np.array(B, F); BA = B-A; BB = (BA*BA).sum(1)
SO_A = np.array([[0.874*math.cos(2*math.pi*(k+.5)/NSO), 0.874*math.sin(2*math.pi*(k+.5)/NSO), RZ] for k in range(NSO)], F)
SO_B = np.array([[HR*math.cos(2*math.pi*(k+.5)/NSO), HR*math.sin(2*math.pi*(k+.5)/NSO), HZ] for k in range(NSO)], F)
SBA = SO_B-SO_A; SBB = (SBA*SBA).sum(1)

def capsules(p, a, ba, bb, r):
    pa = p[:, None, :]-a[None]
    h = np.clip((pa*ba[None]).sum(-1)/bb[None], 0, 1)
    return np.sqrt(((pa-ba[None]*h[..., None])**2).sum(-1)).min(1)-r

def sdf(p, want_mat=False):
    x, y, z = p[:, 0], p[:, 1], p[:, 2]
    rho = np.sqrt(x*x+y*y)
    d_t = np.sqrt((rho-TR)**2+z*z)-Tr
    qx, qz = np.abs(rho-RR)-(RB-RRND), np.abs(z)-(RZ-RRND)
    d_r = np.sqrt(np.maximum(qx, 0)**2+np.maximum(qz, 0)**2)+np.minimum(np.maximum(qx, qz), 0)-RRND
    # rim well: a shallow groove on the tyre side so the rim reads as a profile, not a ring
    d_h = np.sqrt((rho-HR)**2+(z-HZ)**2)-Hr
    # hub shell, flanges, axle stub (capped cylinders)
    def cyl(r, zc, hz):
        a, b = rho-r, np.abs(z-zc)-hz
        return np.sqrt(np.maximum(a, 0)**2+np.maximum(b, 0)**2)+np.minimum(np.maximum(a, b), 0)
    d_hub = np.minimum(cyl(HUBR, 0, HUBZ)-0.004, np.minimum(cyl(FLR, FLZ, FLT), cyl(FLR, -FLZ, FLT)))
    d_hub = np.minimum(d_hub, cyl(AXR, AXZ-0.02, 0.03))
    near_sp = (rho < 0.9) & (np.abs(z) < 0.08)
    d_s = np.maximum(np.maximum(np.abs(z)-0.08, rho-0.9), 0).astype(F)+0.002
    if near_sp.any():
        d_s[near_sp] = capsules(p[near_sp], A, BA, BB, SPR)
    near_so = (rho > 0.82) & (rho < 0.9) & (z > -0.01) & (z < 0.13)
    d_o = (np.maximum.reduce([0.82-rho, rho-0.9, -0.01-z, z-0.13, np.zeros_like(z)])+0.002).astype(F)
    if near_so.any():
        d_o[near_so] = capsules(p[near_so], SO_A, SBA, SBB, 0.0065)
    D = np.stack([d_t, d_r, d_h, d_hub, d_s, d_o], 1)
    d = D.min(1)
    if want_mat: return d, D.argmin(1)
    return d

# ---------------- camera ----------------
YAW, PITCH, ROLL = math.radians(-38), math.radians(10), math.radians(-4)
Rw = Rz(ROLL) @ Rx(PITCH) @ Ry(YAW)      # wheel -> camera
Rinv = Rw.T
DIST, HALF = 12.0, 1.06
def rays(px, py, Wp, Hp):
    u = (px/Wp*2-1)*HALF*Wp/Hp; v = (1-py/Hp*2)*HALF
    o_cam = np.stack([np.zeros_like(u), np.zeros_like(u), np.full_like(u, DIST)], -1)
    tgt = np.stack([u, v, np.zeros_like(u)], -1)
    d_cam = nrm(tgt-o_cam)
    return (o_cam@Rinv.T).astype(F), (d_cam@Rinv.T).astype(F), d_cam

# ---------------- environment (camera space) ----------------
def env(d):
    x, y, z = d[..., 0], d[..., 1], d[..., 2]
    base = np.array([0.020, 0.020, 0.022])[None]*(0.6+1.4*sm(-0.4, 0.9, y)[..., None])
    box = sm(0.18, 0.34, y)*sm(0.05, -0.15, x)*sm(-0.95, -0.75, x)*sm(-0.8, 0.1, z)
    box = box*(0.6+0.4*sm(0.3, 0.8, y))
    top = sm(0.62, 0.92, y)*0.55
    warm = sm(0.50, 0.58, x)*sm(0.80, 0.70, x)*sm(0.6, 0.2, np.abs(y-0.05))
    hor = sm(0.12, 0.0, np.abs(y+0.02))*0.22
    c = base+box[..., None]*np.array([2.6, 2.62, 2.66])[None]+top[..., None]*np.array([1.2, 1.22, 1.26])[None]
    c = c+warm[..., None]*np.array([1.9, 1.35, 0.25])[None]+hor[..., None]*np.array([0.6, 0.6, 0.62])[None]
    return c

KEY = nrm(np.array([-0.55, 0.65, 0.55]))     # camera space, from the soft box
WARM = nrm(np.array([0.85, 0.05, -0.2]))

def render_pass(jx, jy):
    Wp, Hp = W*SS, H*SS
    py, px = np.mgrid[0:Hp, 0:Wp].astype(F)
    px = px.reshape(-1)+jx; py = py.reshape(-1)+jy
    o, d, dcam = rays(px, py, Wp, Hp)
    N = len(o)
    # bounding sphere
    b = (o*d).sum(1); c = (o*o).sum(1)-1.08**2; disc = b*b-c
    hitb = disc > 0
    t = np.where(hitb, -b-np.sqrt(np.maximum(disc, 0)), 0).astype(F)
    tmax = np.where(hitb, -b+np.sqrt(np.maximum(disc, 0)), 0).astype(F)
    hit = np.zeros(N, bool)
    act = np.where(hitb)[0]
    for it in range(220):
        if len(act) == 0: break
        p = o[act]+d[act]*t[act, None]
        dd = sdf(p)
        h = dd < 0.0008
        hit[act[h]] = True
        t[act] += np.maximum(dd, 0.0004)*0.92
        keep = (~h) & (t[act] < tmax[act])
        act = act[keep]
    col = np.zeros((N, 3), F); alpha = hit.astype(F)
    idx = np.where(hit)[0]
    if len(idx):
        p = o[idx]+d[idx]*t[idx, None]
        _, mat = sdf(p, True)
        e = 0.0006
        n = np.stack([sdf(p+np.array([e, 0, 0], F))-sdf(p-np.array([e, 0, 0], F)),
                      sdf(p+np.array([0, e, 0], F))-sdf(p-np.array([0, e, 0], F)),
                      sdf(p+np.array([0, 0, e], F))-sdf(p-np.array([0, 0, e], F))], 1)
        n = nrm(n)
        ncam = n@Rw.T; vd = dcam[idx]
        # ambient occlusion
        ao = np.ones(len(idx), F)
        for k, s in enumerate([0.01, 0.025, 0.05, 0.09, 0.15]):
            ao -= (s-np.minimum(sdf(p+n*s), s))/s*0.18*(0.75**k)
        ao = np.clip(ao, 0.15, 1)
        ndv = np.clip(-(ncam*vd).sum(1), 0, 1)
        refl = vd-2*(vd*ncam).sum(1, keepdims=True)*ncam
        diff = np.clip((ncam*KEY).sum(1), 0, 1)
        wdiff = np.clip((ncam*WARM).sum(1), 0, 1)
        out = np.zeros((len(idx), 3), F)
        # material-specific shading
        def glossy(rough, nsamp):
            acc = np.zeros((len(idx), 3), F)
            for _ in range(nsamp):
                r = nrm(refl+rng.normal(0, rough, refl.shape).astype(F))
                acc += env(r)
            return acc/nsamp
        sharp = env(refl)
        soft = glossy(0.16, 6)
        fres = (0.04+0.96*(1-ndv)**5)[:, None]
        # tyre: grey rubber, matte with a faint sheen
        m = mat == 0
        tyre = np.array([0.30, 0.33, 0.36])
        out[m] = (tyre*(0.10+0.85*diff[m, None])+np.array([0.5, 0.36, 0.06])*0.25*wdiff[m, None]*tyre*2
                  + soft[m]*0.10+fres[m]*soft[m]*0.35)
        # rim: silver anodised aluminium (soft metal)
        m = mat == 1
        out[m] = soft[m]*np.array([0.80, 0.81, 0.83])+0.04*diff[m, None]
        # push rim: polished aluminium (sharper)
        m = mat == 2
        out[m] = (0.65*sharp[m]+0.35*soft[m])*np.array([0.90, 0.90, 0.91])
        # hub and flanges: turned silver
        m = mat == 3
        out[m] = soft[m]*np.array([0.78, 0.78, 0.80])+0.05*diff[m, None]
        # spokes: stainless
        m = mat == 4
        out[m] = (0.5*sharp[m]+0.5*soft[m])*np.array([0.86, 0.86, 0.88])+0.10*diff[m, None]+0.06
        # standoffs
        m = mat == 5
        out[m] = soft[m]*np.array([0.72, 0.72, 0.74])
        out *= ao[:, None]
        col[idx] = out
    return col.reshape(H*SS, W*SS, 3), alpha.reshape(H*SS, W*SS)

def tonemap(c):
    c = np.maximum(c, 0)
    c = c/(1+c*0.55)*1.25
    return np.clip(c, 0, 1)**(1/2.2)

J = [(0.25, 0.25), (0.75, 0.25), (0.25, 0.75), (0.75, 0.75)]
acc = None; aacc = None
for jx, jy in J:
    c, a = render_pass(jx, jy)
    c = tonemap(c)*a[..., None]
    acc = c if acc is None else acc+c
    aacc = a if aacc is None else aacc+a
    print('pass', jx, jy, flush=True)
acc /= len(J); aacc /= len(J)
img = np.dstack([acc, aacc])
im = Image.fromarray((np.clip(img, 0, 1)*255).astype(np.uint8), 'RGBA')
if SS > 1: im = im.resize((W, H), Image.LANCZOS)
# un-premultiply for a straight-alpha PNG
a = np.array(im).astype(np.float32)/255
rgb = a[..., :3]/np.maximum(a[..., 3:4], 1e-4)
im = Image.fromarray((np.dstack([np.clip(rgb, 0, 1), a[..., 3]])*255).astype(np.uint8), 'RGBA')
im.save(OUT)
print('wrote', OUT, im.size)
