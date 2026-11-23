#!/usr/bin/env python3
"""Hero render (HOME_BRIEF update option c): HekeTiss' TrophiPatch as their own lab photo shows it (heketiss.ch
8_8d5e_photo-2021-04-12-17-51-29-7.jpg): a soft, pink, open-pore gelatin sponge patch, a few millimetres thick, its
far edge gently lifted. The patch is a parametric slab (top face plus the cut front and side faces), projected in
perspective and splatted with a z-buffer at 2x supersampling. The foam is a multi-octave cellular (Worley) pore field
used both as a bump map and as cavity occlusion; shading is wrap-diffuse with a translucent (subsurface) term, a wet
sheen and a warm rim. The ground is the site's ink exactly, so the art has no edge anywhere (DJ/DP). Output: hero.webp."""
import numpy as np, pathlib
from PIL import Image, ImageFilter
H = pathlib.Path(__file__).resolve().parent
INK = np.array([20, 16, 17], np.float32)
W, HH, SS = 1600, 1200, 2
w, h = W*SS, HH*SS
rng = np.random.default_rng(7)

# ---------- pore field on a (u,v) texture: open gelatin foam ----------
TU, TV = 4200, 3000
def worley(cell, seed):
    r = np.random.default_rng(seed)
    gx, gy = TU//cell+3, TV//cell+3
    fp = (np.stack(np.meshgrid(np.arange(gx), np.arange(gy)), -1) + r.random((gy, gx, 2))) * cell
    yy, xx = np.mgrid[0:TV, 0:TU].astype(np.float32)
    cx, cy = (xx//cell).astype(int)+1, (yy//cell).astype(int)+1
    F1 = np.full((TV, TU), 1e9, np.float32); F2 = F1.copy()
    for dy in (-1, 0, 1):
        for dx in (-1, 0, 1):
            p = fp[np.clip(cy+dy-1, 0, gy-1), np.clip(cx+dx-1, 0, gx-1)]
            d = np.hypot(xx-p[..., 0], yy-p[..., 1])
            F2 = np.where(d < F1, F1, np.minimum(F2, d)); F1 = np.minimum(F1, d)
    return F1/cell, F2/cell
def pores(cell, seed, rad):
    F1, F2 = worley(cell, seed)
    pit = np.clip(1 - F1/rad, 0, 1)**1.6            # round pits at the cell sites
    wall = np.clip((F2-F1)*2.2, 0, 1)                # thin struts between neighbouring pores
    return pit, wall
print('pores...')
p1, w1 = pores(64, 1, .5)
p2, w2 = pores(28, 2, .5)
p3, w3 = pores(12, 3, .48)
hgt = 1 - (.45*p1 + .3*p2 + .18*p3)
cav = np.clip(1 - (.42*p1 + .3*p2 + .16*p3), .45, 1)  # cavity occlusion, soft: light scatters inside the foam
# low-frequency fibre/tone variation so the colour is not flat
lf = np.array(Image.fromarray((rng.random((30, 42))*255).astype(np.uint8)).resize((TU, TV), Image.BICUBIC), np.float32)/255
def gaussian_filter(a, r):
    k = np.exp(-.5*(np.arange(-3*int(np.ceil(r)), 3*int(np.ceil(r))+1)/r)**2); k /= k.sum()
    a = np.apply_along_axis(lambda m: np.convolve(m, k, 'same'), 0, a)
    return np.apply_along_axis(lambda m: np.convolve(m, k, 'same'), 1, a).astype(np.float32)
hgt = gaussian_filter(hgt.astype(np.float32), 1.2); cav = gaussian_filter(cav.astype(np.float32), 1.0)
gy_, gx_ = np.gradient(hgt)

def tex(a, u, v):
    iu = np.clip((u*(TU-1)).astype(int), 0, TU-1); iv = np.clip((v*(TV-1)).astype(int), 0, TV-1)
    return a[iv, iu]

# ---------- geometry ----------
PW, PD, PT = 1.0, .7, .075         # patch width (x), depth (y), thickness
def top_z(u, v):
    # a soft drape: centre sags slightly, the far edge lifts and curls a little (as when lifted by the forceps)
    return .022*np.sin(np.pi*u)*np.sin(np.pi*v) + .26*np.clip((v-.45)/.55, 0, 1)**2.4 * (0.86+.14*np.sin(np.pi*u)) \
           + .02*np.sin(2.1*np.pi*u+.6)*v**2
def pos(u, v, t):
    x = (u-.5)*PW; y = (v-.5)*PD
    z = top_z(u, v) - t
    return x, y, z
TILT = np.radians(48); YAW = np.radians(-11); F = 2.35; CAMD = 2.25
def project(x, y, z):
    xr = x*np.cos(YAW) - y*np.sin(YAW); yr = x*np.sin(YAW) + y*np.cos(YAW)
    # camera looks down at TILT from the front (negative y side)
    yc = yr*np.cos(TILT) + z*np.sin(TILT)          # screen up
    dc = -yr*np.sin(TILT) + z*np.cos(TILT)         # towards camera
    depth = CAMD - dc
    sx = w*.5 + xr/depth*F*w*.5
    sy = h*.53 - yc/depth*F*w*.5
    return sx, sy, depth
Lk = np.array([-.7, -.2, .62]); Lk /= np.linalg.norm(Lk)    # key light: upper left, front
Lr = np.array([.6, .7, .35]); Lr /= np.linalg.norm(Lr)        # warm rim from behind right
Vd = np.array([0, -np.sin(TILT), np.cos(TILT)])
ALB = np.array([236, 142, 156], np.float32)/255   # gelatin pink from their photo, slightly deeper
SSS = np.array([255, 92, 104], np.float32)/255

img = np.zeros((h, w, 3), np.float32); zb = np.full((h, w), 1e9, np.float32); cov = np.zeros((h, w), np.float32)
def corner_mask(u, v):
    r = .035
    du = np.maximum(np.maximum(r-u*PW, u*PW-(PW-r)), 0); dv = np.maximum(np.maximum(r-v*PD, v*PD-(PD-r)), 0)
    return np.hypot(du, dv) <= r

def splat(sx, sy, d, col):
    ix = np.round(sx).astype(int); iy = np.round(sy).astype(int)
    ok = (ix >= 0) & (ix < w) & (iy >= 0) & (iy < h)
    ix, iy, d, col = ix[ok], iy[ok], d[ok], col[ok]
    o = np.argsort(-d)                       # far first, near last wins
    ix, iy, d, col = ix[o], iy[o], d[o], col[o]
    nearer = d <= zb[iy, ix] + 1e-4
    ix, iy, d, col = ix[nearer], iy[nearer], d[nearer], col[nearer]
    zb[iy, ix] = d; img[iy, ix] = col; cov[iy, ix] = 1

def shade(nx, ny, nz, cavv, lfv, thin, face):
    N = np.stack([nx, ny, nz], -1); N /= np.linalg.norm(N, axis=-1, keepdims=True)
    # rotate normals by the yaw so lights stay fixed in camera space
    c, s = np.cos(YAW), np.sin(YAW)
    N = np.stack([N[:, 0]*c - N[:, 1]*s, N[:, 0]*s + N[:, 1]*c, N[:, 2]], -1)
    ndl = N@Lk; wrap = np.clip((ndl+.35)/1.35, 0, 1)
    rim = np.clip(N@Lr, 0, 1)**2
    Hh = Lk+Vd; Hh /= np.linalg.norm(Hh); spec = .6*np.clip(N@Hh, 0, 1)**40 + .25*np.clip(N@Hh, 0, 1)**6
    alb = ALB[None]*(.9+.18*lfv[:, None])
    tint = np.array([.62, .26, .34])[None]
    cm = cavv[:, None]**1.1
    col = alb*(.1 + .95*wrap[:, None])*(tint + (1-tint)*cm)*(.72+.28*cm)
    col += SSS[None]*(.22*thin[:, None] + .18*(1-cavv[:, None]))*(.55+.45*wrap[:, None])  # light through the thin foam
    col += np.array([1, .55, .5])[None]*.26*rim[:, None]
    col += .30*spec[:, None]*cavv[:, None]**2
    if face: col *= .82
    return col

print('top face...')
NU, NV = 5200, 3800
for v0 in range(0, NV, 400):
    v = (np.arange(v0, min(NV, v0+400))+.5)/NV
    u = (np.arange(NU)+.5)/NU
    U, V = np.meshgrid(u, v); U = U.ravel(); V = V.ravel()
    m = corner_mask(U, V); U, V = U[m], V[m]
    x, y, z = pos(U, V, 0)
    e = 1e-3
    zu = (top_z(U+e, V)-top_z(U-e, V))/(2*e*PW); zv = (top_z(U, V+e)-top_z(U, V-e))/(2*e*PD)
    bs = 5.0
    hu = tex(gx_, U, V)*bs; hv = tex(gy_, U, V)*bs
    nx = -(zu + hu); ny = -(zv + hv); nz = np.ones_like(nx)
    edge = np.minimum.reduce([U, 1-U, V, 1-V])
    thin = np.clip(1-edge/.05, 0, 1)
    col = shade(nx, ny, nz, tex(cav, U, V), tex(lf, U, V), thin, False)
    sx, sy, d = project(x, y, z)
    splat(sx, sy, d, col)

print('cut faces...')
R = .035
def perimeter(n):
    # rounded-rect outline in metric units, returns (u, v, outward nx, ny)
    a = PW-2*R; b = PD-2*R; L = 2*a+2*b+2*np.pi*R
    s_ = (np.arange(n)+.5)/n*L; x = np.zeros(n); y = np.zeros(n); nx = np.zeros(n); ny = np.zeros(n)
    segs = [('l', a, (R, 0), (1, 0), (0, -1)), ('c', np.pi*R/2, (PW-R, R), -np.pi/2, None), ('l', b, (PW, R), (0, 1), (1, 0)),
            ('c', np.pi*R/2, (PW-R, PD-R), 0, None), ('l', a, (PW-R, PD), (-1, 0), (0, 1)), ('c', np.pi*R/2, (R, PD-R), np.pi/2, None),
            ('l', b, (0, PD-R), (0, -1), (-1, 0)), ('c', np.pi*R/2, (R, R), np.pi, None)]
    off = 0
    for kind, ln, p0, d, nn in segs:
        m = (s_ >= off) & (s_ < off+ln); q = s_[m]-off
        if kind == 'l':
            x[m] = p0[0]+d[0]*q; y[m] = p0[1]+d[1]*q; nx[m] = nn[0]; ny[m] = nn[1]
        else:
            th = d + q/R
            x[m] = p0[0]+R*np.cos(th); y[m] = p0[1]+R*np.sin(th); nx[m] = np.cos(th); ny[m] = np.sin(th)
        off += ln
    return x/PW, y/PD, nx, ny, s_/L
NS, NT = 16000, 520
pu, pv, pnx, pny, ps = perimeter(NS)
t = (np.arange(NT)+.5)/NT
S = np.tile(np.arange(NS), NT); T = np.repeat(t, NS)
U, V, NX, NY, SP = pu[S], pv[S], pnx[S], pny[S], ps[S]
x, y, z = pos(U, V, T*PT)
tu = (SP*6.9) % 1.0; tv = (T*PT/PD*1.4) % 1.0
hu = tex(gx_, tu, tv)*5; hv = tex(gy_, tu, tv)*5
nx = NX + hu*NY*-1; ny = NY + hu*NX; nz = -hv*.6 + .0
cv_ = tex(cav, tu, tv)*(.8+.2*(1-T))
col = shade(nx, ny, nz, cv_, tex(lf, U, V), np.full_like(T, .7), True)
sx, sy, d = project(x, y, z)
splat(sx, sy, d, col)

# close the 1px splat gaps, then antialias by downsampling
print('compose...')
covI = Image.fromarray((cov*255).astype(np.uint8)).filter(ImageFilter.MaxFilter(3)).filter(ImageFilter.MinFilter(3))
fill = np.stack([np.array(Image.fromarray((np.clip(img[..., k], 0, 1)*255).astype(np.uint8)).filter(ImageFilter.MaxFilter(3)), np.float32)/255 for k in range(3)], -1)
holes = (cov == 0)[..., None]
img = np.where(holes, fill, img)
alpha = np.array(covI, np.float32)/255
# depth of field: focus on the near-middle of the patch, the lifted far edge and the front lip soften slightly
zf = np.where(cov > 0, zb, np.nan); foc = np.nanpercentile(zf, 55); rngz = np.nanpercentile(zf, 98)-np.nanpercentile(zf, 2)
dd = np.clip(np.abs(np.nan_to_num(zf, nan=foc)-foc)/(rngz*.5), 0, 1)
dd = np.array(Image.fromarray((dd*255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(8)), np.float32)/255
bl = np.stack([np.array(Image.fromarray((np.clip(img[..., k], 0, 1)*255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(7)), np.float32)/255 for k in range(3)], -1)
img = img*(1-dd[..., None]) + bl*dd[..., None]
# soft contact shadow + faint pink bounce on the ink below the patch
sh = Image.fromarray((alpha*255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(60*SS/2))
sh = np.roll(np.array(sh, np.float32)/255, int(26*SS), axis=0)
glow = np.array(Image.fromarray((alpha*255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(140*SS/2)), np.float32)/255
yy_, xx_ = np.mgrid[0:h, 0:w].astype(np.float32)
rr = np.sqrt(((xx_-w*.5)/(w*.5))**2 + ((yy_-h*.55)/(h*.5))**2)
win = np.clip((.98-rr)/.5, 0, 1); win = win*win*(3-2*win)                   # shadow and bounce fade to nothing long before the frame
base = INK[None, None]/255*(1-.5*(sh*win)[..., None]) + np.array([.42, .08, .1])[None, None]*.07*(glow*win)[..., None]
out = base*(1-alpha[..., None]) + np.clip(img, 0, 1)**1.04*alpha[..., None]   # gentle tone curve on the patch only
o = Image.fromarray((out*255+.5).astype(np.uint8)).resize((W, HH), Image.LANCZOS)
a = np.array(o).astype(np.int16)
# hard guarantee: the outermost frame is exactly the ink
fr = 30
for sl in (np.s_[:fr], np.s_[-fr:], np.s_[:, :fr], np.s_[:, -fr:]):
    a[sl] = INK
o = Image.fromarray(a.astype(np.uint8))
o.save(H/'hero.webp', quality=88, method=6)
o.save('/tmp/claude-0/hero_preview.png')
print('ok', o.size)
