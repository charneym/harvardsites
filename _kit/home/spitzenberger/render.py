#!/usr/bin/env python3
"""ENGEL hero (HOME_BRIEF update 2c: a crafted render of the firm's real product). The Hygienic Drive from
engelantriebe.de > Antriebslösungen (Sonderlösungen): an integrated drive in a stainless-steel housing built to Hygienic
Design, IP69/IP69K, with blue seals at both ends, a sealed cable gland on top and the output shaft at the front. Sphere-
traced SDF in numpy; brushed stainless reflecting a studio, blue elastomer seals. Saved with REAL alpha (DJ/DP).
Usage: python3 render.py W H out.png [SS]"""
import sys, math, numpy as np
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 600
H = int(sys.argv[2]) if len(sys.argv) > 2 else 460
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 1
FW, FH = W, H; W, H = W*SS, H*SS
def nrm(v): return v/np.linalg.norm(v, axis=-1, keepdims=True)
def sm(a, b, x): x = np.clip((x-a)/(b-a), 0, 1); return x*x*(3-2*x)
RH, HL = 1.0, 1.6           # housing radius, half length (axis = x)
GX = 1.40                   # seal groove positions (x = +-GX)
def rcyl(px, r, x0, x1, e):
    """rounded cylinder about the x axis, radius r, from x0 to x1, edge radius e"""
    cx = (x0+x1)/2; hx = (x1-x0)/2
    qx = r-e; qy = hx-e
    dx = px[1]-qx; dy = np.abs(px[0]-cx)-qy
    return np.sqrt(np.maximum(dx, 0)**2+np.maximum(dy, 0)**2)+np.minimum(np.maximum(dx, dy), 0)-e
def parts(p):
    x, y, z = p[..., 0], p[..., 1], p[..., 2]
    r = np.sqrt(y*y+z*z)
    house = rcyl((x, r), RH, -HL, HL, 0.16)
    # seal grooves cut into the housing near both ends
    for gx in (-GX, GX):
        house = np.maximum(house, -(np.sqrt((x-gx)**2+(r-RH)**2)-0.075))
    seal = np.minimum(np.sqrt((x-GX)**2+(r-RH+0.02)**2)-0.062, np.sqrt((x+GX)**2+(r-RH+0.02)**2)-0.062)
    # front: a low boss, a blue lip seal around the shaft, and the shaft with a chamfered end
    boss = rcyl((x, r), 0.46, HL-0.1, HL+0.13, 0.04)
    seal = np.minimum(seal, np.sqrt((x-HL-0.13)**2+(r-0.26)**2)-0.05)
    shaft = rcyl((x, r), 0.165, HL+0.1, HL+0.95, 0.03)
    # cable gland on top, towards the rear: a hex body, a domed cap, a blue seal ring and the cable entry
    gx0 = -0.85; gy = y; rr = np.sqrt((x-gx0)**2+z*z)
    a = np.mod(np.arctan2(z, x-gx0)+math.pi/6, math.pi/3)-math.pi/6
    hexd = np.maximum(rr*np.cos(a)-0.30, np.maximum(gy-1.28, 0.80-gy))
    hexd = np.maximum(hexd, rr-0.335)
    capq = np.sqrt(np.maximum(rr-0.17, 0)**2+np.maximum(np.abs(gy-1.43)-0.10, 0)**2)+np.minimum(np.maximum(rr-0.17, np.abs(gy-1.43)-0.10), 0)-0.07
    gland = np.minimum(hexd, capq)
    hole = np.maximum(rr-0.095, 1.40-gy)
    gland = np.maximum(gland, -hole)
    seal = np.minimum(seal, np.sqrt((rr-0.25)**2+(gy-1.30)**2)-0.042)
    holed = np.maximum(rr-0.10, np.maximum(gy-1.58, 1.44-gy))
    steel = np.minimum(np.minimum(house, boss), gland)
    return steel, seal, shaft, holed
def sdf(p):
    s, b, sh, ho = parts(p); return np.minimum(np.minimum(s, b), sh)
def mat(p):
    s, b, sh, ho = parts(p)
    m = np.zeros(p.shape[:-1], int); m[b < np.minimum(s, sh)] = 1; m[(sh < np.minimum(s, b))] = 2
    m[(ho < 0.004) & (m == 0)] = 3
    return m
def Rx(a): c, s = math.cos(a), math.sin(a); return np.array([[1, 0, 0], [0, c, -s], [0, s, c]])
def Ry(a): c, s = math.cos(a), math.sin(a); return np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]])
def Rz(a): c, s = math.cos(a), math.sin(a); return np.array([[c, -s, 0], [s, c, 0], [0, 0, 1]])
M = Rx(math.radians(22))@Ry(math.radians(-34))@Rz(math.radians(-8))   # object -> view
MI = M.T
CEN = np.array([0.2, 0.22, 0])
SCV = 2.05
ys, xs = np.mgrid[0:H, 0:W]
u = ((xs+.5)/W*2-1)*SCV*W/H; v = (1-(ys+.5)/H*2)*SCV
O = np.stack([u.ravel(), v.ravel(), np.full(u.size, 10.0)], -1)
D = np.array([0, 0, -1.0])
Ol = (O@MI.T)+CEN[None]; Dl = D@MI.T
N = len(Ol); t = np.full(N, 5.0); hit = np.zeros(N, bool); alive = np.ones(N, bool)
for it in range(300):
    idx = np.nonzero(alive)[0]
    if len(idx) == 0: break
    p = Ol[idx]+Dl[None]*t[idx, None]
    d = sdf(p)
    t[idx] += np.maximum(d*0.9, 0.0006)
    done = d < 0.0007
    hit[idx[done]] = True; alive[idx[done]] = False
    alive[idx[t[idx] > 16]] = False
print('hits', hit.sum(), 'of', N, file=sys.stderr)
hi = np.nonzero(hit)[0]
P = Ol[hi]+Dl[None]*t[hi, None]
MT = mat(P)
e = 0.0015
ex = np.array([e, 0, 0]); ey = np.array([0, e, 0]); ez = np.array([0, 0, e])
Nl = nrm(np.stack([sdf(P+ex)-sdf(P-ex), sdf(P+ey)-sdf(P-ey), sdf(P+ez)-sdf(P-ez)], -1))
Nw = Nl@M.T; Vw = -D
ao = np.ones(len(P))
for i, h in enumerate([0.02, 0.05, 0.10, 0.18, 0.3]):
    ao -= (h-np.minimum(sdf(P+Nl*h), h))*(0.5**i)*2.4
ao = np.clip(ao, 0.15, 1)
def env(d):
    x, y, z = d[..., 0], d[..., 1], d[..., 2]
    base = np.array([0.035, 0.05, 0.07])*(0.6+0.8*sm(-0.7, 0.9, y))[..., None]
    key = sm(0.3, 0.62, y)*sm(0.3, -0.2, x)*sm(-0.5, 0.25, z)              # big soft box upper left
    strip = sm(0.55, 0.8, x)*sm(0.75, 0.15, np.abs(y-0.15))*sm(-0.6, 0.2, z)   # tall strip light right
    top = sm(0.8, 0.97, y)                                                    # overhead panel
    warm = sm(0.3, 0.8, -z)*sm(-0.2, 0.5, -x)*sm(0.5, -0.2, y)                # faint warm kicker from behind left
    red = sm(0.35, 0.85, -z)*sm(0.0, 0.6, x)*sm(0.5, -0.3, y)                 # ENGEL-red rim from behind right
    floor = sm(-0.1, -0.6, y)*0.10
    thin = sm(0.12, 0.0, np.abs(x+0.72))*sm(-0.6, 0.1, y)*sm(-0.4, 0.3, z)    # narrow vertical strip far left
    return base + key[..., None]*np.array([1.0, 0.99, 0.97])*2.4 + strip[..., None]*np.array([0.92, 0.96, 1.0])*1.9 \
        + top[..., None]*np.array([0.9, 0.93, 0.98])*0.9 + warm[..., None]*np.array([0.6, 0.5, 0.4])*0.3 \
        + red[..., None]*np.array([0.85, 0.06, 0.2])*0.35 + floor[..., None]*np.array([0.3, 0.35, 0.42]) + thin[..., None]*np.array([1, 1, 1])*1.6
Pl = P
# brushed finish: jitter normals mostly around the circumferential direction of the housing (brush along the axis)
ax = np.array([1.0, 0, 0])@M.T
tan = nrm(np.cross(np.broadcast_to(ax, Nw.shape), Nw)+1e-6)
rng = np.random.default_rng(7)
acc = np.zeros((len(P), 3)); NS = 40
streak = np.sin(Pl[:, 0]*0+np.arctan2(Pl[:, 2], Pl[:, 1])*0+0)  # placeholder (kept 0)
for s in range(NS):
    a1 = rng.normal(0, 1, len(P))[:, None]; a2 = rng.normal(0, 1, len(P))[:, None]
    rough = np.where(MT == 2, 0.025, np.where(MT == 1, 0.22, 0.04))[:, None]
    nj = nrm(Nw+tan*a1*rough*1.8+np.cross(tan, Nw)*a2*rough*0.35)
    cj = (nj*Vw).sum(-1)
    acc += env(nrm(-Vw[None]+2*cj[:, None]*nj))
refl = acc/NS
cosv = np.clip((Nw*Vw).sum(-1), 0, 1)
L1 = nrm(np.array([-0.5, 0.65, 0.55])); L2 = nrm(np.array([0.85, 0.1, 0.4]))
def wrap(n, l, w): return np.clip(((n*l).sum(-1)+w)/(1+w), 0, 1)
dif = wrap(Nw, L1, 0.2)[:, None]*1.0+wrap(Nw, L2, 0.2)[:, None]*np.array([0.55, 0.6, 0.7])*0.45+0.06
col = np.zeros((len(P), 3))
steel = (MT == 0) | (MT == 2)
F0 = np.array([0.62, 0.62, 0.64])
fr = F0+(1-F0)*((1-cosv)**5)[:, None]
fine = (np.sin(np.arctan2(Pl[:, 2], Pl[:, 1])*900+Pl[:, 0]*3)*0.5+0.5)*0.05  # micro brushing streaks
col[steel] = (refl[steel]*fr[steel]*(0.95+fine[steel, None]) + dif[steel]*np.array([0.11, 0.115, 0.12]))*ao[steel, None]
blue = MT == 1
fb = 0.04+0.96*(1-cosv)**5
col[blue] = (dif[blue]*np.array([0.06, 0.25, 0.78])*0.9 + refl[blue]*(0.06+0.5*fb[blue])[:, None])*ao[blue, None]
hole = MT == 3
col[hole] = np.array([0.015, 0.018, 0.022])
col = 1-np.exp(-col*1.9)
col = np.clip(col, 0, 1)**1.04
img = np.zeros((N, 4)); img[hi, :3] = col; img[hi, 3] = 1
img = img.reshape(H, W, 4)
im = Image.fromarray((np.clip(img, 0, 1)*255+.5).astype(np.uint8), 'RGBA')
if SS != 1: im = im.convert('RGBa').resize((FW, FH), Image.LANCZOS).convert('RGBA')
bb = im.getbbox(); print('bbox', bb, file=sys.stderr)
im.save(OUT)
