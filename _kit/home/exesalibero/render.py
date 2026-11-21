#!/usr/bin/env python3
"""ExesaLibero hero (HOME_BRIEF update 2c: a crafted render of the real subject). A cylindrical core of human
trabecular (cancellous) bone, the tissue that osteoclasts erode in arthritis and myeloma and that ELP-004 is meant to
protect (exesalibero.com, Product & Technology), drawn the way micro-CT bone cores are shown: a sawn cylinder whose
open network of rods and perforated plates shows through the cut faces. Ivory bone lit warm from the upper left with a
rim of the logo's blue #27aae1. A Voronoi rod/plate SDF baked to a voxel grid, then sphere-traced in numpy. Saved with
ALPHA (no ground of its own, DJ/DP). Usage: python3 render.py W H out.png [SS] [procs]"""
import sys, numpy as np
from multiprocessing import Pool
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 500
H = int(sys.argv[2]) if len(sys.argv) > 2 else 620
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = float(sys.argv[4]) if len(sys.argv) > 4 else 1.0
NP = int(sys.argv[5]) if len(sys.argv) > 5 else 4
GR = float(sys.argv[6]) if len(sys.argv) > 6 else 0.009
FW, FH = W, H; W, H = int(W*SS), int(H*SS)
def nrm(v): return v/np.linalg.norm(v, axis=-1, keepdims=True)

# ---------- the bone, in its own frame (axis +y) ----------
B0 = np.array([-1.08, -1.75, -1.08]); B1 = np.array([1.08, 0.86, 1.08])
CELL = 0.235
rng = np.random.default_rng(7)
NG = 40
JIT = rng.random((NG, NG, NG, 3))*0.9 + 0.05
PERM = rng.permutation(256); PERM = np.concatenate([PERM, PERM]); GV = rng.random(256)*2-1
def vnoise(p):
    i = np.floor(p).astype(np.int64); f = p-i; u = f*f*(3-2*f)
    def h(dx, dy, dz): return GV[PERM[(PERM[(PERM[(i[:, 0]+dx) & 255]+i[:, 1]+dy) & 255]+i[:, 2]+dz) & 255]]
    x00 = h(0,0,0)*(1-u[:,0])+h(1,0,0)*u[:,0]; x10 = h(0,1,0)*(1-u[:,0])+h(1,1,0)*u[:,0]
    x01 = h(0,0,1)*(1-u[:,0])+h(1,0,1)*u[:,0]; x11 = h(0,1,1)*(1-u[:,0])+h(1,1,1)*u[:,0]
    y0 = x00*(1-u[:,1])+x10*u[:,1]; y1 = x01*(1-u[:,1])+x11*u[:,1]
    return y0*(1-u[:,2])+y1*u[:,2]
def smin(a, b, k):
    h = np.clip(0.5+0.5*(b-a)/k, 0, 1); return b*(1-h)+a*h-k*h*(1-h)
def topcut(x, z): return 0.62 + 0.13*x - 0.06*z
def sdf_raw(p):
    # organic warp, slight vertical anisotropy (trabeculae align with load)
    q = p + 0.05*np.stack([vnoise(p*3.1), vnoise(p*3.1+11), vnoise(p*3.1+23)], 1)
    q = q*np.array([1.0, 0.82, 1.0])/CELL + 20
    gi = np.floor(q).astype(np.int64)
    D = []
    for dx in (-1,0,1):
        for dy in (-1,0,1):
            for dz in (-1,0,1):
                c = gi+np.array([dx,dy,dz]); cm = c % NG
                pt = c + JIT[cm[:,0], cm[:,1], cm[:,2]]
                D.append(np.sqrt(((pt-q)**2).sum(1)))
    D = np.sort(np.stack(D, 1), 1)[:, :3]*CELL
    f1, f2, f3 = D[:, 0], D[:, 1], D[:, 2]
    rod = 0.5*(f3-f1) - (0.011 + 0.005*vnoise(p*5+3))
    plate = 0.5*(f2-f1) - 0.0075
    holes = vnoise(p*6.1+5)*0.12 + 0.075     # >0 where the plate is perforated away
    plate = np.maximum(plate, holes)
    d = smin(rod, plate, 0.02)
    cyl = np.sqrt(p[:,0]**2+p[:,2]**2) - 1.0
    top = (p[:,1] - topcut(p[:,0], p[:,2]))/1.01
    return np.maximum(np.maximum(d, cyl), top)

def build_grid():
    xs = [np.arange(B0[i], B1[i]+GR, GR) for i in range(3)]
    sh = tuple(len(x) for x in xs)
    X, Y, Z = np.meshgrid(*xs, indexing='ij')
    P = np.stack([X.ravel(), Y.ravel(), Z.ravel()], 1)
    chunks = np.array_split(P, max(1, len(P)//400000))
    with Pool(NP) as pool: out = pool.map(sdf_raw, chunks)
    return np.concatenate(out).reshape(sh).astype(np.float32), sh

def sample(G, sh, p):
    u = (p-B0)/GR
    u = np.clip(u, 0, np.array(sh)-1.001)
    i = np.floor(u).astype(np.int64); f = u-i
    i0, i1, i2 = i[:,0], i[:,1], i[:,2]; fx, fy, fz = f[:,0], f[:,1], f[:,2]
    def g(a, b, c): return G[i0+a, i1+b, i2+c]
    c00 = g(0,0,0)*(1-fx)+g(1,0,0)*fx; c10 = g(0,1,0)*(1-fx)+g(1,1,0)*fx
    c01 = g(0,0,1)*(1-fx)+g(1,0,1)*fx; c11 = g(0,1,1)*(1-fx)+g(1,1,1)*fx
    c0 = c00*(1-fy)+c10*fy; c1 = c01*(1-fy)+c11*fy
    d = c0*(1-fz)+c1*fz
    # outside the box: distance to the box
    o = np.maximum(np.maximum(B0-p, p-B1), 0); od = np.sqrt((o**2).sum(1))
    return np.where(od > 0, od + 0.02, d)

# camera / object pose
LEAN = np.radians(-14); TILT = np.radians(30); YAW = np.radians(18)
def R(ax, a):
    c, s = np.cos(a), np.sin(a)
    if ax == 'x': return np.array([[1,0,0],[0,c,-s],[0,s,c]])
    if ax == 'y': return np.array([[c,0,s],[0,1,0],[-s,0,c]])
    return np.array([[c,-s,0],[s,c,0],[0,0,1]])
ROT = R('z', LEAN) @ R('x', TILT) @ R('y', YAW)   # local -> world
CAM = np.array([0, -0.25, 5.4]); FOV = 0.37
KEY = nrm(np.array([-0.55, 0.75, 0.55])); RIM = nrm(np.array([0.85, 0.15, -0.5])); FIL = nrm(np.array([0.2, -0.4, 0.8]))
BONE = np.array([0.90, 0.86, 0.78]); BLUE = np.array([0.153, 0.667, 0.882])

def render_rows(args):
    y0, y1, G, sh = args
    ys = np.arange(y0, y1); xs = np.arange(W)
    PX, PY = np.meshgrid(xs, ys)
    u = (PX+0.5)/W*2-1; v = 1-(PY+0.5)/H*2
    asp = W/H
    dirw = nrm(np.stack([u*FOV*asp, v*FOV - 0.0, -np.ones_like(u)], -1)).reshape(-1, 3)
    ro = np.broadcast_to(CAM @ ROT, dirw.shape).copy()
    rd = dirw @ ROT                       # world -> local is p @ ROT
    n = len(rd); t = np.full(n, 5.0); hit = np.zeros(n, bool); alive = np.ones(n, bool)
    for it in range(260):
        idx = np.nonzero(alive)[0]
        if len(idx) == 0: break
        p = ro[idx]+rd[idx]*t[idx, None]
        d = sample(G, sh, p)
        h = d < 0.0012
        hit[idx[h]] = True; alive[idx[h]] = False
        t[idx] += np.maximum(d*0.7, 0.0015)
        far = t[idx] > 10.0; alive[idx[far]] = False
    col = np.zeros((n, 3)); a = np.zeros(n)
    idx = np.nonzero(hit)[0]
    if len(idx):
        tt0 = t[idx]-GR*1.5
        for k in range(6):                       # refine the hit on the exact field (no voxel terraces)
            p = ro[idx]+rd[idx]*tt0[:, None]; tt0 = tt0 + np.clip(sdf_raw(p), -GR, GR)*0.9
        p = ro[idx]+rd[idx]*tt0[:, None]
        e = 0.0018
        nn = nrm(np.stack([sdf_raw(p+[e,0,0])-sdf_raw(p-[e,0,0]),
                           sdf_raw(p+[0,e,0])-sdf_raw(p-[0,e,0]),
                           sdf_raw(p+[0,0,e])-sdf_raw(p-[0,0,e])], 1)+1e-9)
        # lights live in world space: bring them into the local frame
        K = KEY @ ROT; Rm = RIM @ ROT; F = FIL @ ROT; V = -rd[idx]
        ao = np.ones(len(idx))
        for k, s in enumerate([0.04, 0.07, 0.12, 0.2, 0.32]):
            ao -= (s - np.minimum(sample(G, sh, p+nn*s), s))*(1.3/(k+1))
        ao = np.clip(ao, 0, 1)
        sh_ = np.ones(len(idx)); tt = np.full(len(idx), 0.035)
        for k in range(48):
            q = p+K*tt[:, None]; d = sample(G, sh, q)
            sh_ = np.minimum(sh_, np.clip(6*(d+0.004)/tt, 0, 1)); tt += np.clip(d, 0.01, 0.08)
        sh_ = sh_**1.3
        dk = np.clip(nn@K, 0, 1); wrap = np.clip((nn@K+0.35)/1.35, 0, 1)
        dr = np.clip(nn@Rm, 0, 1); df = np.clip(nn@F*0.5+0.5, 0, 1)
        hv = nrm(K[None]+V); spec = np.clip((nn*hv).sum(1), 0, 1)**38*0.22
        fres = (1-np.clip((nn*V).sum(1), 0, 1))**3
        tex = 1+0.06*vnoise(p*22)+0.03*vnoise(p*61)
        alb = BONE[None]*tex[:, None]
        L = alb*(1.15*dk*sh_ + 0.14*wrap)[:, None]*np.array([1.0, 0.95, 0.86])
        L += alb*(0.20*df*ao)[:, None]*np.array([0.72, 0.82, 0.95])
        L += BLUE[None]*((0.5*dr + 0.3*fres*dr + 0.06*fres)*ao)[:, None]
        L += (spec*sh_)[:, None]
        L *= (0.35+0.65*ao)[:, None]
        # depth into the core: struts deep inside the pores fall into shadow, so the open network reads in depth
        rr = np.sqrt(p[:,0]**2+p[:,2]**2); dep = np.minimum(1-rr, topcut(p[:,0],p[:,2])-p[:,1])
        dk2 = np.clip(1-dep/0.44, 0, 1); dk2 = dk2*dk2*(3-2*dk2)
        L = L*(0.14+0.86*dk2)[:, None] + (1-dk2)[:, None]*np.array([0.012, 0.03, 0.05])*ao[:, None]
        L = L/(1+L*0.55)               # soft tonemap
        col[idx] = np.clip(L, 0, 1)**(1/2.1)
        a[idx] = 1
        # feather the lower end of the core into nothing (no hard bottom edge)
        fy = np.clip((p[:,1]+1.65)/0.9, 0, 1); fy = fy*fy*(3-2*fy)
        a[idx] *= fy; col[idx] *= fy[:, None]**0.5
    return np.concatenate([col, a[:, None]], 1).reshape(y1-y0, W, 4)

if __name__ == '__main__':
    import time; t0 = time.time()
    G, sh = build_grid(); print('grid', sh, round(time.time()-t0, 1), flush=True)
    bands = [(y, min(H, y+max(8, H//(NP*6))), G, sh) for y in range(0, H, max(8, H//(NP*6)))]
    with Pool(NP) as pool: rows = pool.map(render_rows, bands)
    img = np.concatenate(rows, 0)
    rgb = img[..., :3]; al = img[..., 3:]
    out = np.concatenate([np.where(al > 0, rgb/np.maximum(al, 1e-4), 0)*1, al], -1)
    im = Image.fromarray((np.clip(out, 0, 1)*255).astype(np.uint8), 'RGBA')
    if SS != 1: im = im.resize((FW, FH), Image.LANCZOS)
    im.save(OUT); print('done', round(time.time()-t0, 1))
