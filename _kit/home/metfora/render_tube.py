"""Metfora hero: a ray-traced, centrifuged blood-collection tube (plasma over red cells, a thin buffy coat), the sample
Metfora's GC-MS metabolite test reads. Glass with Fresnel reflections of studio strip lights, Beer-Lambert absorption
through the layers, a ribbed satin cap in the brand orange, and a wrapped paper label with a barcode. Generic tube, no
branding. Output: RGBA webp with real alpha over the page ink (no box edge).
usage: python3 render_tube.py out.webp W H"""
import numpy as np, sys
from PIL import Image
out = sys.argv[1]; W, H = int(sys.argv[2]), int(sys.argv[3]); SS = 2
INK = np.array([13, 22, 38]) / 255.0
lin = lambda c: np.power(np.asarray(c, float), 2.2)
INKL = lin(INK)

# ---------- geometry (tube-local, y up; mm-ish) ----------
RO, RI = 6.5, 5.75           # glass outer / inner radius
YB = -43.0                   # centre of the hemispherical bottom
YT = 27.0                    # glass top (inside the cap)
RC, YC0, YC1 = 8.15, 24.0, 47.0   # cap
Y_RBC, Y_BUF, Y_MEN = -12.5, -11.4, 13.0   # red cells | buffy coat | plasma | air
LAB_Y0, LAB_Y1 = -33.0, 20.0
LAB_P0, LAB_P1 = np.radians(62), np.radians(258)   # label covers this angular range (phi = atan2(x, z))

def rot(ax, deg):
    t = np.radians(deg); c, s = np.cos(t), np.sin(t)
    return {'x': np.array([[1, 0, 0], [0, c, -s], [0, s, c]]),
            'y': np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]]),
            'z': np.array([[c, -s, 0], [s, c, 0], [0, 0, 1]])}[ax]
# tube pose: lean right, tipped a touch toward the camera so the cap top shows
M = rot('z', -15) @ rot('x', 11) @ rot('y', float(sys.argv[4]) if len(sys.argv) > 4 else 20)
Mi = M.T

# camera: long lens
w, h = W * SS, H * SS
fov = np.radians(17.5)
cam = np.array([0, 0, 420.0])
ys, xs = np.mgrid[0:h, 0:w]
asp = w / h
px = ((xs + .5) / w * 2 - 1) * np.tan(fov / 2) * asp
py = -((ys + .5) / h * 2 - 1) * np.tan(fov / 2)
D = np.stack([px, py, -np.ones_like(px)], -1).reshape(-1, 3)
D /= np.linalg.norm(D, axis=1, keepdims=True)
O = np.broadcast_to(cam, D.shape).copy()
# into tube space
o = O @ Mi.T + np.array([0, -1.5, 0]) @ np.eye(3)
d = D @ Mi.T
N_ = len(d)

def norm(v): return v / np.linalg.norm(v, axis=1, keepdims=True)
def dot(a, b): return (a * b).sum(1)

def capsule(o, d, R, far=False):
    """hit an open-top capsule (cylinder y in [YB, YT] + bottom hemisphere). returns t, normal(outward)"""
    a = d[:, 0]**2 + d[:, 2]**2
    b = 2 * (o[:, 0] * d[:, 0] + o[:, 2] * d[:, 2])
    c = o[:, 0]**2 + o[:, 2]**2 - R * R
    disc = b * b - 4 * a * c
    ok = disc > 0; sq = np.sqrt(np.maximum(disc, 0))
    ta = np.where(ok, (-b + (sq if far else -sq)) / (2 * a + 1e-12), np.inf)
    ya = o[:, 1] + ta * d[:, 1]
    ta = np.where((ya >= YB) & (ya <= YT) & (ta > 1e-4), ta, np.inf)
    oc = o - np.array([0, YB, 0])
    bs = dot(oc, d); cs = dot(oc, oc) - R * R; ds = bs * bs - cs
    oks = ds > 0; sqs = np.sqrt(np.maximum(ds, 0))
    ts = np.where(oks, -bs + (sqs if far else -sqs), np.inf)
    yS = o[:, 1] + ts * d[:, 1]
    ts = np.where((yS < YB) & (ts > 1e-4), ts, np.inf)
    t = np.minimum(ta, ts)
    p = o + d * t[:, None]
    n = np.where((ts < ta)[:, None], (p - np.array([0, YB, 0])) / R, np.stack([p[:, 0], 0 * p[:, 0], p[:, 2]], 1) / R)
    return t, p, norm(n + 1e-12)

def cap_hit(o, d):
    a = d[:, 0]**2 + d[:, 2]**2; b = 2 * (o[:, 0] * d[:, 0] + o[:, 2] * d[:, 2]); c = o[:, 0]**2 + o[:, 2]**2 - RC * RC
    disc = b * b - 4 * a * c; ok = disc > 0
    t1 = np.where(ok, (-b - np.sqrt(np.maximum(disc, 0))) / (2 * a + 1e-12), np.inf)
    y1 = o[:, 1] + t1 * d[:, 1]
    t1 = np.where((y1 >= YC0) & (y1 <= YC1) & (t1 > 0), t1, np.inf)
    tt = np.where(np.abs(d[:, 1]) > 1e-9, (YC1 - o[:, 1]) / d[:, 1], np.inf)
    pt = o + d * tt[:, None]
    tt = np.where((pt[:, 0]**2 + pt[:, 2]**2 <= RC * RC) & (tt > 0), tt, np.inf)
    t = np.minimum(t1, tt); p = o + d * t[:, None]
    side = t1 <= tt
    n = np.where(side[:, None], np.stack([p[:, 0], 0 * p[:, 0], p[:, 2]], 1) / RC, np.array([0, 1, 0.0]))
    return t, p, norm(n), side

# ---------- lights (world space), mapped into tube space ----------
def box(x, a, b, s): return np.clip((x - a) / s, 0, 1) * np.clip((b - x) / s, 0, 1)
def env(dl, transmitted=False):
    dw = dl @ M.T        # tube -> world (rows: local = world @ M)
    az = np.degrees(np.arctan2(dw[:, 0], dw[:, 2])); el = np.degrees(np.arcsin(np.clip(dw[:, 1], -1, 1)))
    L = np.tile(INKL, (len(dl), 1)) * 1.0
    key = box(az, -78, -50, 6) * box(el, -25, 62, 10)                    # tall strip, front-left
    L += key[:, None] * lin([1.0, .97, .92]) * 9.0
    rim = box(az, 108, 132, 7) * box(el, -30, 55, 10)                    # strip behind-right: rim
    L += rim[:, None] * lin([.78, .9, 1.0]) * 6.5
    top = box(el, 58, 95, 9) * box(az, -120, 60, 30)                     # overhead softbox
    L += top[:, None] * lin([.95, .96, 1.0]) * 1.0
    fill = box(az, 40, 75, 10) * box(el, -10, 30, 12)                   # faint warm kicker, right-front
    L += fill[:, None] * lin([1.0, .78, .5]) * .35
    if transmitted:                                                       # back panel only lights what is seen through the tube
        bk = box(np.abs(az), 140, 200, 18) * box(el, -40, 45, 20) * (1.15 - np.clip(el, -40, 45) / 90.0)
        L += bk[:, None] * lin([1.0, .92, .78]) * 1.5
        L += (box(el, -90, -15, 20))[:, None] * lin([.30, .40, .55]) * .25
    return L

KEY = norm((np.array([[-.62, .42, .66]]) @ Mi.T))[0]
RIM = norm((np.array([[.72, .22, -.66]]) @ Mi.T))[0]
TOPL = norm((np.array([[-.1, 1, .25]]) @ Mi.T))[0]
def diffuse(n):
    return (np.clip(dot(n, KEY[None]), 0, 1)[:, None] * lin([1, .97, .92]) * 1.05 +
            np.clip(dot(n, RIM[None]), 0, 1)[:, None] * lin([.78, .9, 1]) * .55 +
            np.clip(dot(n, TOPL[None]), 0, 1)[:, None] * .35 + .045)

def schlick(cos, f0=.04): return f0 + (1 - f0) * (1 - np.clip(cos, 0, 1))**5
def refract(dv, n, eta):
    c = -dot(n, dv); k = 1 - eta * eta * (1 - c * c)
    tir = k < 0
    r = eta * dv + (eta * c - np.sqrt(np.maximum(k, 0)))[:, None] * n
    return norm(r), tir
def reflect(dv, n): return dv - 2 * dot(dv, n)[:, None] * n

col = np.tile(INKL, (N_, 1)); alpha = np.zeros(N_)
tc, pc, nc, cside = cap_hit(o, d)
tg, pg, ng = capsule(o, d, RO)
hitcap = np.isfinite(tc) & (tc <= tg)
hitg = np.isfinite(tg) & ~hitcap

# ---------- cap: satin orange plastic, knurled ribs on the side, a rolled top edge ----------
ic = np.where(hitcap)[0]
if len(ic):
    p, n = pc[ic], nc[ic].copy(); sd = cside[ic]
    phi = np.arctan2(p[:, 0], p[:, 2])
    rib = (p[:, 1] > YC0 + 2.2) & (p[:, 1] < YC1 - 3.0) & sd
    tng = np.stack([np.cos(phi), 0 * phi, -np.sin(phi)], 1)
    n = np.where(rib[:, None], norm(n + tng * (0.42 * np.sin(phi * 44))[:, None]), n)
    # rounded top edge on the side wall and the outer ring of the top
    eh = np.clip((p[:, 1] - (YC1 - 2.4)) / 2.4, 0, 1)
    n = np.where(sd[:, None], norm(n + np.array([0, 1, 0]) * (eh * 1.6)[:, None]), n)
    rr = np.sqrt(p[:, 0]**2 + p[:, 2]**2); er = np.clip((rr - (RC - 2.2)) / 2.2, 0, 1)
    radial = np.stack([p[:, 0], 0 * rr, p[:, 2]], 1) / (rr[:, None] + 1e-9)
    n = np.where(~sd[:, None], norm(n + radial * (er * 1.4)[:, None]), n)
    # the lower skirt steps in slightly: a shadow groove
    groove = sd & (p[:, 1] < YC0 + 2.0)
    base = lin([.82, .49, .16])
    dif = diffuse(n) * base
    rf = reflect(d[ic], n); fr = schlick(-dot(d[ic], n), .045)
    spec = env(rf) * (fr * .8 + .035)[:, None]
    c_ = dif * .92 + spec
    c_ = np.where(groove[:, None], c_ * .55, c_)
    # inner top disc a touch darker (moulded recess)
    rec = (~sd) & (rr < RC - 3.0)
    c_ = np.where(rec[:, None], c_ * .82 + base * .02, c_)
    col[ic] = c_; alpha[ic] = 1

# ---------- glass ----------
ig = np.where(hitg)[0]
if len(ig):
    dv, p, n = d[ig], pg[ig], ng[ig]
    cosi = -dot(dv, n); F = schlick(cosi)
    refl = env(reflect(dv, n)) * F[:, None]
    phi = np.arctan2(p[:, 0], p[:, 2])
    phi2 = np.mod(phi, 2 * np.pi)
    onlab = (phi2 > LAB_P0) & (phi2 < LAB_P1) & (p[:, 1] > LAB_Y0) & (p[:, 1] < LAB_Y1)
    res = np.zeros((len(ig), 3))
    # label front: paper with a printed barcode and lines of fine print
    if onlab.any():
        k = np.where(onlab)[0]; pk = p[k]; ph = phi2[k]
        paper = lin([.93, .925, .9])
        u = (ph - LAB_P0) / (LAB_P1 - LAB_P0); v = (pk[:, 1] - LAB_Y0) / (LAB_Y1 - LAB_Y0)
        ink = np.zeros(len(k))
        # barcode band (bars run along the tube axis)
        bu = (u - .045) / .17
        inb = (bu > 0) & (bu < 1) & (v > .30) & (v < .86)
        bars = (np.sin(bu * 91.0) + np.sin(bu * 233.0 + 1.3) * .7 + np.sin(bu * 47.0 + .4) * .5) > .35
        ink = np.where(inb & bars, .85, ink)
        # print lines
        lu = (u - .245) / .1
        inl = (lu > 0) & (lu < 1) & (v > .22) & (v < .92)
        lines = (np.mod(lu * 7.0, 1) < .42) & (np.sin(v * 140 + np.floor(lu * 7) * 3) > -.4)
        ink = np.where(inl & lines, .5, ink)
        # a thin border rule
        ink = np.where((np.abs(v - .12) < .006) & (u > .04) & (u < .9), .6, ink)
        alb = paper * (1 - ink[:, None] * .92)
        nn = n[k]
        shade = diffuse(nn) * alb * 1.02
        # paper is matte but has a faint sheen; the label edge casts a hairline shadow
        sheen = env(reflect(dv[k], nn)) * (schlick(-dot(dv[k], nn), .02) * .5)[:, None]
        edge = np.minimum(np.minimum(ph - LAB_P0, LAB_P1 - ph) * RO, np.minimum(pk[:, 1] - LAB_Y0, LAB_Y1 - pk[:, 1]))
        shade *= (0.86 + .14 * np.clip(edge / .35, 0, 1))[:, None]
        res[k] = shade + sheen + refl[k] * .25
    # clear glass: refract in, cross the wall, then the contents
    g = np.where(~onlab)[0]
    if len(g):
        dv_, p_, n_ = dv[g], p[g], n[g]
        d1, _ = refract(dv_, n_, 1 / 1.5)
        ti, pi, ni = capsule(p_ + d1 * 1e-3, d1, RI)
        wall_only = ~np.isfinite(ti)
        T = np.ones((len(g), 3))
        acc = np.zeros((len(g), 3))
        # wall path tint (edges look green-grey and dark, like real glass)
        tw = np.where(wall_only, 4.0, np.minimum(ti, 6))
        T *= np.exp(-tw[:, None] * np.array([.05, .018, .03]))
        ins = np.where(~wall_only)[0]
        exitcol = env(d1, True)
        if len(ins):
            P0 = pi[ins]; N0 = ni[ins]
            # medium at entry
            yin = P0[:, 1]
            eta_med = np.where(yin < Y_MEN, 1.5 / 1.345, 1.5 / 1.0)
            d2 = np.where((yin < Y_MEN)[:, None], refract(d1[ins], N0, 1.5 / 1.345)[0], refract(d1[ins], N0, 1.5)[0])
            te, pe, ne = capsule(P0 + d2 * 1e-3, d2, RI, far=True)
            te = np.where(np.isfinite(te), te, 0.0)
            # exits through the top (under the cap): dark
            # march the layers
            S = 40
            seg = te / S
            Tm = np.ones((len(ins), 3)); Lm = np.zeros((len(ins), 3))
            sig_rbc_a = np.array([1.5, 7.5, 7.0]); sig_rbc_s = np.array([.22, .02, .02])
            sig_pl_a = np.array([.005, .034, .12]); sig_pl_s = np.array([.055, .045, .03])
            sig_bc_a = np.array([.25, .3, .35]); sig_bc_s = np.array([2.6, 2.5, 2.35])
            amb = lin([1, .97, .93]) * .62
            for s in range(S):
                q = P0 + d2 * ((s + .5) * seg)[:, None]
                yq = q[:, 1]
                rr = np.sqrt(q[:, 0]**2 + q[:, 2]**2)
                # lighting inside: brighter near the lit side (key from front-left) and toward the back panel
                lit = .55 + .45 * np.clip((-q[:, 0] * .6 + q[:, 2] * .4) / RI, -1, 1)
                rbc = yq < Y_RBC; buf = (yq >= Y_RBC) & (yq < Y_BUF); pl = (yq >= Y_BUF) & (yq < Y_MEN)
                sa = np.zeros((len(ins), 3)); ss = np.zeros((len(ins), 3))
                sa[rbc] = sig_rbc_a; ss[rbc] = sig_rbc_s
                sa[buf] = sig_bc_a; ss[buf] = sig_bc_s
                sa[pl] = sig_pl_a; ss[pl] = sig_pl_s
                ext = sa + ss
                tr = np.exp(-ext * seg[:, None])
                src = np.where(ext > 0, ss / np.maximum(ext, 1e-9), 0) * (1 - tr) * (amb * lit[:, None])[:, :]
                # red cells: give the pigment its deep crimson in-scatter
                src[pl] *= lin([1.0, .78, .38]) * 1.9
                src[rbc] *= lin([.55, .04, .05]) / lin([.55, .04, .05]).max()
                Lm += Tm * src
                Tm *= tr
            # behind: the far wall, then either the label's back (paper lit from behind) or the room
            d3 = np.where((pe[:, 1] < Y_MEN)[:, None], refract(d2, -ne, 1.345 / 1.0)[0], refract(d2, -ne, 1.0)[0])
            behind = env(d3, True)
            ph3 = np.mod(np.arctan2(pe[:, 0], pe[:, 2]), 2 * np.pi)
            back = (ph3 > LAB_P0) & (ph3 < LAB_P1) & (pe[:, 1] > LAB_Y0) & (pe[:, 1] < LAB_Y1)
            paperback = lin([.80, .80, .78]) * (.07 + .12 * np.clip(-ne[:, 0] * .2 + .8, 0, 1))[:, None]
            behind = np.where(back[:, None], paperback, behind)
            top = pe[:, 1] > YT - .5
            behind = np.where(top[:, None], lin([.30, .16, .04]) * .5, behind)
            # meniscus: a bright hairline where the plasma meets the wall, and the surface sheen
            cross = (P0[:, 1] - Y_MEN) * (pe[:, 1] - Y_MEN) < 0
            tcr = (Y_MEN - P0[:, 1]) / np.where(np.abs(d2[:, 1]) > 1e-6, d2[:, 1], 1e-6)
            qc = P0 + d2 * tcr[:, None]
            rc = np.sqrt(qc[:, 0]**2 + qc[:, 2]**2) / RI
            men = np.where(cross, np.clip((rc - .78) / .22, 0, 1)**3, 0)
            # second wall
            Tm *= np.array([.96, .975, .97])
            exitcol[ins] = Lm + Tm * behind + men[:, None] * lin([1, .93, .8]) * .9
        res[g] = (exitcol * T) * (1 - F[g])[:, None] + refl[g]
        # thin-wall silhouette: the edge of a glass tube is a dark band lined with a highlight
        rim = np.clip((1 - cosi[g]) * 1.0, 0, 1)**6
        res[g] = res[g] * (1 - .6 * rim)[:, None] + env(reflect(dv_, n_))[:, :] * (rim * .35)[:, None]
        # the cut glass top under the cap is not visible; tube mouth hidden by cap
    col[ig] = res; alpha[ig] = 1

# ---------- tone map + downsample with real alpha ----------
def aces(x):
    a, b, c, d_, e = 2.51, .03, 2.43, .59, .14
    return np.clip((x * (a * x + b)) / (x * (c * x + d_) + e), 0, 1)
expo = 1.25
col = np.nan_to_num(col, nan=0.0)
print('nan rays', int(np.isnan(col).sum()))
C = aces(col * expo)
C = np.power(C, 1 / 2.2)
Ci = np.power(aces(INKL[None] * expo), 1 / 2.2)[0]
C = C.reshape(h, w, 3); A = alpha.reshape(h, w)
# premultiply against nothing: colour where covered, alpha from coverage
pm = (C * A[..., None]).reshape(H, SS, W, SS, 3).mean((1, 3))
a = A.reshape(H, SS, W, SS).mean((1, 3))
rng = np.random.default_rng(7)
pm = pm * (1 + rng.normal(0, .018, pm.shape[:2]))[..., None]
rgb = np.where(a[..., None] > 0, pm / np.maximum(a[..., None], 1e-6), 0)
img = np.dstack([np.clip(rgb, 0, 1) * 255, a * 255]).astype(np.uint8)
im = Image.fromarray(img, 'RGBA')
bb = im.getbbox(); print('bbox', bb, 'ink after tonemap', (Ci * 255).round())
im.save(out, quality=92, method=6)
prev = Image.new('RGB', im.size, tuple(int(v) for v in (INK * 255))); prev.paste(im, mask=im.split()[3]); prev.save(out.replace('.webp', '_prev.png'))
