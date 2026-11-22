#!/usr/bin/env python3
"""Bioxytech Retina hero (HOME_BRIEF update 2c: a crafted render of the real subject). A close-up retinal oxygen-
saturation map: the optic disc and the major vessel arcades of a right eye, as Bioxytech's fundus-camera oximetry
renders them in one snapshot (NSF SBIR 1853245 outcomes; NIH R43MD019594 abstract). Each vessel is a shaded tube
with the central light reflex real fundus vessels show; its colour encodes oxygen saturation, from the logo's pale
iris blue (#8eb3e2, oxygen-rich arteries) to a deep cobalt (venous return). The retinal surface carries faint nerve-
fibre striations radiating from the disc and fades to real ALPHA on every side (no ground of its own, DJ/DP).
Usage: python3 render.py W H out.png [SS]"""
import sys, numpy as np
from PIL import Image, ImageFilter

FW = int(sys.argv[1]) if len(sys.argv) > 1 else 1100
FH = int(sys.argv[2]) if len(sys.argv) > 2 else 1200
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = float(sys.argv[4]) if len(sys.argv) > 4 else 1.5
W, H = int(FW * SS), int(FH * SS)
S = W / 1100.0  # scale of design units (px at 1100 wide)
rng = np.random.default_rng(1853245)

yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
DX, DY = 0.40 * W, 0.50 * H          # optic disc centre
FX, FY = 0.95 * W, 0.53 * H          # fovea (temporal, to the right, partly beyond the frame)
DR = 74 * S                          # disc radius

def sm(e0, e1, x):
    t = np.clip((x - e0) / (e1 - e0), 0, 1); return t * t * (3 - 2 * t)

# ---------- value noise ----------
def vnoise(scale, seed):
    r = np.random.default_rng(seed)
    gw, gh = int(W / scale) + 3, int(H / scale) + 3
    g = r.random((gh, gw)).astype(np.float32)
    im = Image.fromarray((g * 255).astype(np.uint8)).resize((int(gw * scale), int(gh * scale)), Image.BICUBIC)
    return np.asarray(im, np.float32)[:H, :W] / 255.0
def fbm(base, seed, oct=4):
    a, s, tot = 1.0, base, 0
    out = np.zeros((H, W), np.float32)
    for o in range(oct):
        out += a * vnoise(s, seed + o); tot += a; a *= .5; s /= 2.1
    return out / tot

# ---------- vessel tree ----------
VES = []   # each: dict(pts=Nx2, r=N, so2=N, art=bool)
def grow(x, y, ang, r, so2, art, depth, steer, L=None):
    pts, rs, ss = [], [], []
    step = 3.0 * S
    curv = 0.0
    n = 0
    nb = rng.uniform(120, 200) * S
    dist = 0.0
    while r > 0.85 * S and -60 * S < x < W + 60 * S and -60 * S < y < H + 60 * S:
        pts.append((x, y)); rs.append(r); ss.append(so2)
        # steering: arcade guidance + persistence noise + macular avoidance
        tx, ty = steer(x, y, ang)
        ta = np.arctan2(ty, tx)
        d = (ta - ang + np.pi) % (2 * np.pi) - np.pi
        curv = 0.92 * curv + 0.08 * rng.normal(0, 0.05)
        ang += 0.035 * d + curv
        # keep out of the fovea's avascular zone
        fd = np.hypot(x - FX, y - FY)
        if fd < 230 * S:
            aw = np.arctan2(y - FY, x - FX)
            d2 = (aw - ang + np.pi) % (2 * np.pi) - np.pi
            ang += 0.08 * d2 * (1 - fd / (230 * S))
        x += np.cos(ang) * step; y += np.sin(ang) * step
        dist += step; n += 1
        r *= 0.9965 if depth else 0.9982
        so2 += (-0.0006 if art else -0.0002) * (step / S) / 3
        if dist > nb and depth < 4:
            dist = 0; nb = rng.uniform(110, 190) * S
            side = rng.choice([-1, 1])
            cr = r * rng.uniform(0.5, 0.68)
            r *= 0.9
            ca = ang + side * rng.uniform(0.5, 0.9)
            grow(x, y, ca, cr, so2, art, depth + 1, lambda a, b, c: (np.cos(c), np.sin(c)))
            ang -= side * 0.12
    if len(pts) > 3:
        VES.append(dict(pts=np.array(pts, np.float32), r=np.array(rs, np.float32), so2=np.array(ss, np.float32), art=art))

def arcade(sign):
    """guide toward an arc around the fovea (above for sign=-1, below for +1)"""
    def f(x, y, a):
        vx, vy = x - FX, y - FY
        tx, ty = (vy, -vx) if sign > 0 else (-vy, vx)
        # tangential plus a slight inward pull past the fovea
        n = np.hypot(tx, ty) + 1e-6
        rr = np.hypot(vx, vy)
        pull = (rr - 360 * S) / (900 * S)
        return tx / n - pull * vx / (rr + 1e-6), ty / n - pull * vy / (rr + 1e-6)
    return f
def radial(x, y, a): return (np.cos(a), np.sin(a))

# major vessels leave the disc: temporal arcades (sup/inf, artery+vein pairs) and nasal branches
spec = [
 # angle (deg, 0 = right), radius, so2, artery, steer
 (-62, 8.6, 0.62, False, arcade(-1)), (-74, 6.6, 0.97, True, arcade(-1)),
 (62, 8.8, 0.61, False, arcade(1)), (74, 6.7, 0.97, True, arcade(1)),
 (-128, 6.6, 0.63, False, radial), (-140, 5.0, 0.97, True, radial),
 (126, 6.4, 0.63, False, radial), (138, 5.0, 0.97, True, radial),
 (178, 4.6, 0.63, False, radial), (170, 3.8, 0.97, True, radial),
 (-8, 3.6, 0.64, False, radial), (6, 3.0, 0.97, True, radial),
 (-100, 4.0, 0.63, False, radial), (102, 3.9, 0.97, True, radial),
]
for a, r, s, art, st in spec:
    t = np.radians(a + rng.normal(0, 3))
    o = rng.uniform(-0.25, 0.25); sx0 = DX + 8 * S + np.cos(t + o) * DR * 0.30; sy0 = DY + np.sin(t + o) * DR * 0.42
    grow(sx0, sy0, t, r * S, s, art, 0, st)

# ---------- render: retinal surface ----------
rd = np.hypot(xx - DX, yy - DY)
th = np.arctan2(yy - DY, xx - DX)
n1 = fbm(46 * S, 11); n2 = fbm(12 * S, 23, 3)
# nerve-fibre striations: fine radial streaks, strongest near the disc, arching around the fovea
stri = vnoise(2.2 * S, 31)
stri = np.asarray(Image.fromarray((stri * 255).astype(np.uint8)), np.float32) / 255
# polar noise: streaks that run radially out of the disc (no periodic pattern, so no moire)
PN = np.random.default_rng(41).random((48, 1400)).astype(np.float32)
PN = np.asarray(Image.fromarray((PN * 255).astype(np.uint8)).resize((1400, 480), Image.BICUBIC), np.float32) / 255
ai = (((th + np.pi) / (2 * np.pi)) * 1399).astype(np.int32)
ri = np.clip(np.sqrt(rd / (1100 * S)) * 479, 0, 479).astype(np.int32)
streak = (PN[ri, ai] - .5) * sm(950 * S, 90 * S, rd) * 0.9
base = np.stack([0.060 + 0.03 * n1, 0.085 + 0.035 * n1, 0.120 + 0.05 * n1], -1)
base += (0.06 * streak + 0.02 * n2)[..., None] * np.array([0.55, 0.75, 1.0], np.float32)
# a faint peripapillary glow and the darker macula
glow = np.exp(-(rd / (210 * S)) ** 2)
base += glow[..., None] * np.array([0.06, 0.08, 0.11], np.float32)
fdist = np.hypot(xx - FX, yy - FY)
base *= (1 - 0.35 * np.exp(-(fdist / (150 * S)) ** 2))[..., None]
col = base.astype(np.float32)

# ---------- optic disc: a pale rim with a central cup ----------
dn = rd / (DR * (1 + 0.06 * np.cos(2 * th) + 0.03 * (n1 - .5)))
disc = sm(1.06, 0.86, dn)
cup = sm(0.62, 0.28, np.hypot((xx - DX - 6 * S) / (DR * 1.05), (yy - DY) / (DR * 1.2)))
dcol = np.array([0.50, 0.58, 0.68], np.float32) * (0.75 + 0.35 * n2[..., None]) * (1 + 0.25 * sm(0.55, 0.85, dn) * sm(1.0, 0.85, dn))[..., None]
dcol = dcol * (1 - 0.12 * sm(0.4, 1.0, dn))[..., None] + cup[..., None] * np.array([0.30, 0.30, 0.28], np.float32)
col = col * (1 - disc[..., None]) + dcol * disc[..., None]
# a pale scleral crescent at the disc margin
ring = np.exp(-((dn - 1.04) / 0.05) ** 2) * (0.5 + 0.5 * np.cos(th))
col += ring[..., None] * np.array([0.10, 0.11, 0.12], np.float32)

# ---------- vessels: shaded tubes, veins first then arteries on top ----------
def sat_col(s):
    s = np.clip((s - 0.52) / 0.47, 0, 1)[..., None]
    deep = np.array([0.10, 0.20, 0.52], np.float32)    # venous, deep cobalt
    mid = np.array([0.33, 0.50, 0.82], np.float32)
    iris = np.array([0.56, 0.70, 0.89], np.float32)    # logo iris #8eb3e2
    pale = np.array([0.86, 0.92, 0.98], np.float32)
    a = np.clip(s / 0.4, 0, 1); b = np.clip((s - 0.4) / 0.35, 0, 1); c = np.clip((s - 0.86) / 0.14, 0, 1) * 0.7
    return deep * (1 - a) + mid * a, b, c, iris, pale
VES.sort(key=lambda v: (v['art'], -v['r'].max()))
LX, LY = -0.45, -0.6
for v in VES:
    P, R, SO = v['pts'], v['r'], v['so2']
    x0, y0 = P.min(0) - R.max() - 3; x1, y1 = P.max(0) + R.max() + 3
    x0, y0 = int(max(0, x0)), int(max(0, y0)); x1, y1 = int(min(W, x1)), int(min(H, y1))
    if x1 <= x0 or y1 <= y0: continue
    sx, sy = xx[y0:y1, x0:x1], yy[y0:y1, x0:x1]
    best = np.full(sx.shape, 1e9, np.float32); br = np.zeros_like(best); bs = np.zeros_like(best); bsg = np.zeros_like(best)
    for i in range(len(P) - 1):
        ax, ay = P[i]; bx, by = P[i + 1]
        rr = max(R[i], R[i + 1]) + 2
        lx0, ly0 = int(min(ax, bx) - rr) - x0, int(min(ay, by) - rr) - y0
        lx1, ly1 = int(max(ax, bx) + rr) + 1 - x0, int(max(ay, by) + rr) + 1 - y0
        lx0, ly0 = max(0, lx0), max(0, ly0); lx1, ly1 = min(sx.shape[1], lx1), min(sx.shape[0], ly1)
        if lx1 <= lx0 or ly1 <= ly0: continue
        px, py = sx[ly0:ly1, lx0:lx1], sy[ly0:ly1, lx0:lx1]
        ex, ey = bx - ax, by - ay; L2 = ex * ex + ey * ey + 1e-6
        t = np.clip(((px - ax) * ex + (py - ay) * ey) / L2, 0, 1)
        qx, qy = ax + t * ex - px, ay + t * ey - py
        d = np.hypot(qx, qy)
        rad = R[i] + (R[i + 1] - R[i]) * t
        # signed offset across the vessel (for the light reflex direction)
        nx, ny = -ey / np.sqrt(L2), ex / np.sqrt(L2)
        sg = (-(qx) * nx - (qy) * ny)
        sl = (slice(ly0, ly1), slice(lx0, lx1))
        upd = (d - rad) < (best[sl] - br[sl])
        best[sl] = np.where(upd, d, best[sl]); br[sl] = np.where(upd, rad, br[sl])
        bs[sl] = np.where(upd, SO[i], bs[sl]); bsg[sl] = np.where(upd, sg / rad, bsg[sl])
    cov = sm(0.8, -0.8, best - br) * (br > 0) * (0.25 + 0.75 * sm(0.18 * DR, 0.55 * DR, np.hypot(sx - DX - 8 * S, (sy - DY) * 0.8)))
    u = np.clip(best / np.maximum(br, 1e-3), 0, 1)
    nz = np.sqrt(np.clip(1 - u * u, 0, 1))
    nxy = np.clip(bsg, -1, 1)
    shade = 0.62 + 0.38 * np.clip(nz * 0.8 + nxy * 0.35, 0, 1)
    c0, b, c, iris, pale = sat_col(bs)
    vc = c0 * (1 - b) + iris * b
    vc = vc * (1 - c) + pale * c
    vc = vc * shade[..., None]
    # central light reflex: a thin bright streak along the vessel axis (stronger on arteries)
    refl = np.exp(-((nxy + 0.12) / 0.16) ** 2) * (0.22 if v['art'] else 0.12) * sm(1.2 * S, 3.5 * S, br)
    vc = vc + refl[..., None] * np.array([0.9, 0.95, 1.0], np.float32)
    # a soft dark edge where the tube meets the retina
    edge = sm(0.65, 1.0, u) * 0.25
    vc = vc * (1 - edge[..., None])
    sub = col[y0:y1, x0:x1]
    # vessels sit on the disc a touch brighter
    col[y0:y1, x0:x1] = sub * (1 - cov[..., None]) + vc * cov[..., None]

# a soft halo of light over the disc (bloom)
bloom = np.exp(-(rd / (DR * 1.6)) ** 2) * 0.06
col += bloom[..., None] * np.array([0.85, 0.9, 1.0], np.float32)

# ---------- alpha: a long eased radial falloff, nothing straight anywhere (DJ/DP) ----------
ex_ = (xx - 0.47 * W) / (0.52 * W); ey_ = (yy - 0.5 * H) / (0.50 * H)
er = np.sqrt(ex_ ** 2 + ey_ ** 2) * (1 + 0.06 * (n1 - .5))
alpha = sm(1.0, 0.30, er) ** 1.35
alpha = np.clip(alpha, 0, 1)

col += (rng.random((H, W, 1)).astype(np.float32) - .5) * 0.018
rgb = np.clip(col, 0, 1) ** (1 / 1.05)
img = np.dstack([rgb * 255, alpha[..., None] * 255]).astype(np.uint8)
im = Image.fromarray(img, 'RGBA').filter(ImageFilter.GaussianBlur(0.5 * SS))
if SS != 1: im = im.resize((FW, FH), Image.LANCZOS)
im.save(OUT)
print('saved', OUT, im.size, 'vessels', len(VES))
