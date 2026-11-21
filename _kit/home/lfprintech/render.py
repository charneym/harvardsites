#!/usr/bin/env python3
"""Hero render: a 3D-printed porous hydrogel dressing, the structure of LF Printech's BurnHeal (a 3D-printed bioactive
hydrogel dressing with a porous surface, NSF STTR 2507525). Four layers of extruded filament laid as a 0/90 lattice, each
layer one continuous serpentine path with U-turns at the edges, the way an extrusion bioprinter lays it; the top layer is
still being printed (its last strand stops part-way). Sphere-traced signed distance field in numpy, translucent wet-gel
shading (wrap diffuse, specular, fresnel rim, thickness-based alpha), soft shadows and SDF ambient occlusion, supersampled,
transparent ground (no box edge, DJ/DP). Gel in the logo's gold. Output: gel.png (RGBA)."""
import numpy as np, pathlib, sys
from PIL import Image
H = pathlib.Path(__file__).resolve().parent
import os
OUT_W, OUT_H, SS = int(os.environ.get("RW",1700)), int(os.environ.get("RH",1200)), int(os.environ.get("SS",2))
W, Hh = OUT_W*SS, OUT_H*SS
N, P, R, DZ = 11, 0.40, 0.088, 0.152
L = (N-1)/2*P
V = (np.arange(N)-(N-1)/2)*P
LAY = []  # (axis 0=x-strands 1=y-strands, z, ranges a[i], b[i], turns list)
for k in range(4):
    z = R + k*DZ
    a = np.full(N, -L); b = np.full(N, L); turns = list(range(N-1))
    if k == 3:  # in progress: strands 0..6 complete, 7 part-way from +L side, rest not yet printed
        a[7] = 0.15; a[8:] = 1e3; b[8:] = -1e3; turns = list(range(7))
    LAY.append((k % 2, z, a, b, set(turns)))

def sdf(p):
    x, y, z = p[..., 0], p[..., 1], p[..., 2]
    D = np.full(x.shape, 1e3)
    for ax, zk, a, b, turns in LAY:
        d = np.full(x.shape, 1e3)
        u, v = (x, y) if ax == 0 else (y, x)
        dz = z - zk
        i0 = np.clip(np.rint(v/P + (N-1)/2).astype(int), 0, N-1)
        for o in (-1, 0, 1):
            i = np.clip(i0+o, 0, N-1)
            aa, bb = a[i], b[i]
            uc = np.clip(u, aa, np.maximum(aa, bb))
            dd = np.sqrt((u-uc)**2 + (v-V[i])**2 + (dz*1.22)**2) - R
            dd = np.where(bb < aa, 1e3, dd)
            d = np.minimum(d, dd)
        j0 = np.clip(np.floor(v/P + (N-1)/2).astype(int), 0, N-2)
        tl = np.array([1 if t in turns else 0 for t in range(N-1)])
        for o in (-1, 0, 1):
            j = np.clip(j0+o, 0, N-2)
            s = np.where(j % 2 == 0, 1.0, -1.0)
            qu = (u - s*L)*s; qv = v - (V[j]+V[j+1])/2
            rr = np.sqrt(qu**2 + qv**2)
            dt = np.where(qu >= 0, np.sqrt((rr-P/2)**2 + (dz*1.22)**2) - R, np.sqrt(qu**2 + (np.abs(qv)-P/2)**2 + (dz*1.22)**2) - R)
            d = np.minimum(d, np.where(tl[j] == 1, dt, 1e3))
        kk = float(os.environ.get("KK",0.035)); hh = np.clip(0.5+0.5*(d-D)/kk, 0, 1)
        D = d*(1-hh) + D*hh - kk*hh*(1-hh)
    return D

def normal(p):
    e = 1.5e-3; n = np.zeros_like(p)
    for c in range(3):
        o = np.zeros(3); o[c] = e
        n[..., c] = sdf(p+o) - sdf(p-o)
    return n/np.linalg.norm(n, axis=-1, keepdims=True)

# camera
az, el, dist, fov = np.radians(float(sys.argv[1]) if len(sys.argv) > 1 else 33), np.radians(float(sys.argv[2]) if len(sys.argv) > 2 else 38), 9.2, np.radians(30)
tgt = np.array([0, 0, 0.25])
eye = tgt + dist*np.array([np.cos(el)*np.cos(az), np.cos(el)*np.sin(az), np.sin(el)])
fw = (tgt-eye)/np.linalg.norm(tgt-eye); rt = np.cross(fw, [0, 0, 1]); rt /= np.linalg.norm(rt); up = np.cross(rt, fw)
LIT = np.array([-0.45, 0.35, 0.82]); LIT /= np.linalg.norm(LIT)
FILL = np.array([0.6, -0.5, 0.35]); FILL /= np.linalg.norm(FILL)
GOLD = np.array([235, 182, 88])/255; CHAMP = np.array([240, 214, 168])/255; DEEP = np.array([120, 70, 22])/255

def render_rows(r0, r1):
    ys, xs = np.mgrid[r0:r1, 0:W].astype(np.float64)
    t = np.tan(fov/2); asp = W/Hh
    px = (2*(xs+.5)/W-1)*t*asp; py = (1-2*(ys+.5)/Hh)*t
    rd = fw + px[..., None]*rt + py[..., None]*up; rd /= np.linalg.norm(rd, axis=-1, keepdims=True)
    rd = rd.reshape(-1, 3); n = rd.shape[0]
    T = np.zeros(n); hit = np.zeros(n, bool); act = np.ones(n, bool)
    # bounding: skip rays missing the slab box
    for _ in range(230):
        idx = np.nonzero(act)[0]
        if idx.size == 0: break
        pp = eye + rd[idx]*T[idx, None]
        d = sdf(pp)
        T[idx] += d*0.72
        h = d < 4e-4; hit[idx[h]] = True
        far = (T[idx] > dist+6) | (pp[:, 2] < -0.3)
        act[idx[h | far]] = False
    rgba = np.zeros((n, 4))
    idx = np.nonzero(hit)[0]
    if idx.size:
        p = eye + rd[idx]*T[idx, None]; nr = normal(p); vd = -rd[idx]
        # soft shadow toward key light
        sh = np.ones(idx.size); tt = np.full(idx.size, 0.02)
        for _ in range(36):
            q = p + nr*2e-3 + LIT*tt[:, None]; dd = sdf(q)
            sh = np.minimum(sh, np.clip(10*dd/tt, 0, 1)); tt += np.clip(dd, 0.01, 0.12)
        sh = 0.35 + 0.65*np.clip(sh, 0, 1)
        ao = np.ones(idx.size)
        for k in range(1, 6):
            hk = 0.035*k; ao -= (hk - sdf(p+nr*hk))*(0.9/k)
        ao = np.clip(ao, 0.25, 1)
        ndl = (nr@LIT); wrap = np.clip((ndl+0.45)/1.45, 0, 1)
        fil = np.clip(nr@FILL, 0, 1)
        hv = LIT+vd; hv /= np.linalg.norm(hv, axis=-1, keepdims=True)
        spec = np.clip(np.sum(nr*hv, -1), 0, 1)**120*1.6 + np.clip(np.sum(nr*hv, -1), 0, 1)**18*0.10
        ndv = np.clip(np.sum(nr*vd, -1), 0, 1); fres = (1-ndv)**3
        # translucency: light scattered through the gel, warmer and deeper in the thick middle
        trans = np.clip(-ndl+0.3, 0, 1)*0.25
        GEL = GOLD*0.55 + CHAMP*0.45
        sss = (0.42*ndv**1.5 + 0.14)*ao          # light carried through the thick middle of each strand
        base = GEL[None]*(0.10 + 0.58*wrap*sh*ao)[:, None] + GOLD[None]*sss[:, None] + CHAMP[None]*(0.14*fil*ao)[:, None] + DEEP[None]*trans[:, None]
        col = base + CHAMP[None]*(fres*0.62*ao)[:, None] + np.array([1, .98, .93])[None]*(spec*sh)[:, None]
        alpha = np.clip(0.56 + 0.44*fres + spec*0.9, 0, 1)
        rgba[idx, :3] = np.clip(col, 0, 1.2)*alpha[:, None]; rgba[idx, 3] = alpha
    return rgba.reshape(r1-r0, W, 4)

rows = []
step = 120
for r0 in range(0, Hh, step):
    rows.append(render_rows(r0, min(Hh, r0+step))); print(r0, flush=True)
img = np.concatenate(rows, 0)
img = img.reshape(OUT_H, SS, OUT_W, SS, 4).mean((1, 3))
a = img[..., 3:4]; c = np.where(a > 1e-4, img[..., :3]/np.maximum(a, 1e-4), 0)  # premultiplied average -> straight
c = np.clip(c, 0, 1)
out = np.concatenate([c, a], -1)
ys, xs = np.nonzero(a[..., 0] > 0.01)
y0, y1, x0, x1 = max(0, ys.min()-24), min(OUT_H, ys.max()+24), max(0, xs.min()-24), min(OUT_W, xs.max()+24)
out = out[y0:y1, x0:x1]
Image.fromarray((out*255+.5).astype(np.uint8), 'RGBA').save(H/'gel.png')
print('wrote gel.png', out.shape)
