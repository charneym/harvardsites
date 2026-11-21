#!/usr/bin/env python3
"""Hero render (HOME_BRIEF update option c): LuxMed's optically enabled ablation catheter tip, as their own product photo shows
it (luxmedsystems.com catheter1.jpg, too small to use itself at 257px): a flexible shaft, three gold ring electrodes with pale
spacers, and a gold tip electrode whose optical window lights the tissue in front of it. The tube is drawn analytically
(orthographic, the centreline in the image plane, so each pixel's distance from the centreline gives the exact surface normal),
lit with a studio environment (metal) and Lambert + specular (polymer), supersampled 2x. The ground is the site's ink exactly,
and the shaft eases out into that ink along its length, so the art has no edge anywhere (DJ/DP). Output: hero.webp."""
import numpy as np, pathlib
from PIL import Image
H = pathlib.Path(__file__).resolve().parent
INK = np.array([6, 10, 23], float)
W, HH, SS = 1500, 2000, 2
w, h = W*SS, HH*SS

def bez(t, P):
    t = t[:, None]
    return (1-t)**3*P[0] + 3*(1-t)**2*t*P[1] + 3*(1-t)*t**2*P[2] + t**3*P[3]
# tip first (t=0) then down and away to the lower right
P = np.array([[0.40*w, 0.31*h], [0.47*w, 0.56*h], [0.70*w, 0.66*h], [0.80*w, 1.10*h]])
N = 1400
C = bez(np.linspace(0, 1, N), P)
seg = np.diff(C, axis=0); sl = np.hypot(seg[:, 0], seg[:, 1]); S = np.concatenate([[0], np.cumsum(sl)])
R0 = 0.052*w

# nearest centreline point for every pixel near the tube: loop over segments in bounding boxes
best = np.full((h, w), 1e9, np.float32); bs = np.zeros((h, w), np.float32); bd = np.zeros((h, w), np.float32)
ah = np.zeros((h, w), bool); tx = np.zeros((h, w), np.float32); ty = np.zeros((h, w), np.float32)
pad = R0*1.25
for i in range(N-1):
    a, b = C[i], C[i+1]
    x0, x1 = int(max(0, min(a[0], b[0])-pad)), int(min(w, max(a[0], b[0])+pad+1))
    y0, y1 = int(max(0, min(a[1], b[1])-pad)), int(min(h, max(a[1], b[1])+pad+1))
    if x0 >= x1 or y0 >= y1: continue
    yy, xx = np.mgrid[y0:y1, x0:x1].astype(np.float32)
    d = b-a; L2 = d@d
    u = ((xx-a[0])*d[0]+(yy-a[1])*d[1])/L2
    ur = u
    u = np.clip(u, 0, 1)
    px, py = a[0]+u*d[0], a[1]+u*d[1]
    nx, ny = -d[1]/np.sqrt(L2), d[0]/np.sqrt(L2)
    sd = (xx-px)*nx+(yy-py)*ny
    dist = np.hypot(xx-px, yy-py)
    sub = best[y0:y1, x0:x1]; m = dist < sub
    sub[m] = dist[m]
    bs[y0:y1, x0:x1][m] = (S[i]+u*sl[i])[m]
    bd[y0:y1, x0:x1][m] = sd[m]
    ah[y0:y1, x0:x1][m] = (ur < 0)[m] if i == 0 else False
    tx[y0:y1, x0:x1][m] = d[0]/np.sqrt(L2); ty[y0:y1, x0:x1][m] = d[1]/np.sqrt(L2)

s = bs  # arc length from the tip; negative inside the dome
# radius: electrodes a hair proud of the shaft
r = R0*np.ones_like(s)
# layout from the tip (in units of R0): tip electrode 0..3.0, spacer 3.0..4.1, ring 4.1..5.0, spacer ..6.5, ring ..7.4, spacer ..8.9, ring ..9.8
U = s/R0
def band(a, b): return (U >= a) & (U < b)
tip = (U < 3.0) | ah
rings = band(4.1, 5.0) | band(6.5, 7.4) | band(8.9, 9.8)
spacer = band(3.0, 4.1) | band(5.0, 6.5) | band(7.4, 8.9) | band(9.8, 11.2)
metal = tip | rings
r = np.where(rings, R0*1.012, r)
inside = best < r
# 3D normal
nxp, nyp = -ty, tx  # in-plane normal (matches sd sign)
dome = ah
uu = np.clip(bd/r, -1, 1)
nz = np.sqrt(np.clip(1-uu**2, 0, 1))
Nx = nxp*uu; Ny = nyp*uu; Nz = nz
# dome: sphere normal around the tip point
cx, cy = C[0]
yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
dx, dy = (xx-cx)/R0, (yy-cy)/R0
dz = np.sqrt(np.clip(1-dx**2-dy**2, 0, 1))
Nx = np.where(dome, dx, Nx); Ny = np.where(dome, dy, Ny); Nz = np.where(dome, dz, Nz)
# soft edge coverage for anti-aliasing (supersampling does the rest)
cov = np.clip((r-best)/1.2, 0, 1)

# lights (image y points down; z toward the viewer)
def nrm(v): v = np.array(v, float); return v/np.linalg.norm(v)
Lk = nrm([-0.55, -0.55, 0.63]); Lf = nrm([0.7, 0.2, 0.5]); V = np.array([0, 0, 1.0])
ndl = np.clip(Nx*Lk[0]+Ny*Lk[1]+Nz*Lk[2], 0, 1)
ndf = np.clip(Nx*Lf[0]+Ny*Lf[1]+Nz*Lf[2], 0, 1)
# reflection vector
Rx, Ry, Rz = 2*Nz*Nx, 2*Nz*Ny, 2*Nz*Nz-1
def env(Rx, Ry, Rz):
    # dark studio with a large softbox upper left, a thin strip lower right, the blue glow of the tip's own light, a navy floor
    sb = np.exp(-((Rx+0.45)**2/0.12+(Ry+0.55)**2/0.09))*1.25
    sb2 = np.exp(-((Rx-0.35)**2/0.05+(Ry+0.75)**2/0.05))*0.55
    strip = np.exp(-((Rx-0.62)**2/0.008))*np.clip(0.6+Ry, 0, 1)*0.7
    sky = np.clip(-Ry, 0, 1)**1.2*0.32
    base = 0.10+sb2
    e = (base+sky+sb+strip)
    blue = np.clip(Rz, 0, 1)**3*0.10
    return e, blue
E, Eb = env(Rx, Ry, Rz)
fres = (1-np.clip(Nz, 0, 1))**4
col = np.zeros((h, w, 3), np.float32)
gold = np.array([1.00, 0.76, 0.42]); gold2 = np.array([0.98, 0.86, 0.62])
# metal: gold electrodes, tip slightly paler (platinum-gold)
gm = np.where(tip[..., None], gold2, gold)
metal_c = gm*(E[..., None]*1.7+0.10) + np.array([0.35, 0.5, 1.0])*Eb[..., None] + gm*ndl[..., None]**6*0.25
# a fine machining texture across the electrodes (circumferential, along U)
metal_c *= (1+0.035*np.sin(U*260))[..., None]
# polymer: pale spacers, blue-grey shaft
alb_sp = np.array([0.74, 0.77, 0.82]); alb_sh = np.array([0.30, 0.42, 0.58])
alb = np.where(spacer[..., None], alb_sp, alb_sh)
spec = (np.clip(Rx*Lk[0]+Ry*Lk[1]+Rz*Lk[2], 0, 1)**38)[..., None]
poly_c = alb*(0.05+0.78*ndl[..., None]+0.16*ndf[..., None]) + spec*0.55 + fres[..., None]*np.array([0.20, 0.32, 0.75])*0.6
col = np.where(metal[..., None], metal_c, poly_c)
# the optical window: a dark sapphire disc at the very front of the dome, glowing faintly blue
tipdir = np.array([-(C[1][0]-C[0][0]), -(C[1][1]-C[0][1])]); tipdir /= np.linalg.norm(tipdir)
fwd = dx*tipdir[0]+dy*tipdir[1]
win = dome & (fwd > 0.80)
wc = np.array([0.36, 0.58, 1.0])
col = np.where(win[..., None], col*0.2+wc*(0.75+0.35*np.clip((fwd[..., None]-0.8)/0.2, 0, 1)), col)
rim = dome & (fwd > 0.74) & (fwd <= 0.80)
col = np.where(rim[..., None], col*0.45, col)
# three small round irrigation ports on the tip electrode (circles on the cylinder surface, foreshortened)
theta = np.arcsin(uu)
for off in [-0.9, -0.15, 0.6]:
    m = tip & ~dome & (((U-1.85)**2+(theta-off)**2) < 0.15**2)
    col = np.where(m[..., None], col*0.12, col)
# the shaft eases out into the ink over a long distance (no end line)
fade = np.clip(1-(U-14)/30, 0, 1); fade = fade*fade*(3-2*fade)
a = cov*fade
out = INK/255*(1-a[..., None]) + np.clip(col, 0, 1.4)*a[..., None]
# the light: a soft cone of cool light from the window onto the (unseen) tissue ahead, and a halo
fx, fy = C[0][0]-tipdir[0]*0, C[0][1]
vx, vy = xx-cx, yy-cy
along = vx*tipdir[0]+vy*tipdir[1]
perp = np.abs(-vx*tipdir[1]+vy*tipdir[0])
cone = np.exp(-(perp/(R0*(0.55+0.55*np.clip(along, 0, None)/R0*0.28)))**2)*np.exp(-np.clip(along, 0, None)/(R0*5.5))*(along > -R0*0.3)
halo = np.exp(-((vx**2+vy**2)/(R0*2.0)**2))
glow = (cone*0.55+halo*0.28)*(1-a*0.85)
gl = np.array([0.42, 0.62, 1.0])
out = out + glow[..., None]*gl
# every edge eases into the ink over a long distance, so the image ground is exactly the ink at the border (DJ/DP)
def ss(v): v = np.clip(v, 0, 1); return v*v*(3-2*v)
ef = ss(xx/(0.16*w))*ss((w-xx)/(0.16*w))*ss(yy/(0.2*h))*ss((h-yy)/(0.3*h))
out = INK/255 + (out-INK/255)*ef[..., None]
out = np.clip(out, 0, 1)
img = Image.fromarray((out*255+0.5).astype(np.uint8)).resize((W, HH), Image.LANCZOS)
# the ground must be exactly the ink at every edge
arr = np.array(img); print('corners', arr[0, 0], arr[-1, -1], arr[0, -1], arr[-1, 0], 'tip', C[0]/SS)
img.save(H/'hero.webp', quality=92, method=6)
img.save('/tmp/claude-0/-home-user-harvardsites/6f4c2941-64cd-5621-8190-fede74d3e750/scratchpad/hero.png')
