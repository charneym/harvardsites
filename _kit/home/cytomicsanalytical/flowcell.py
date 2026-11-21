#!/usr/bin/env python3
"""Cytomics Analytical hero (HOME_BRIEF update 2026-11-20, option c: a crafted render of the real mechanism).
A quartz flow cell, the heart of every flow cytometer: a clear fused-silica block with a square micro-channel down its
centre, fed from the top through a tapered sheath chamber and a steel inlet fitting. Ray traced in numpy with Fresnel
reflection, refraction (quartz n=1.46, sheath water n=1.33), total internal reflection and a dark studio environment
whose ground is exactly the page ink. Saved with ALPHA (no box edge, DJ/DP). Also writes axis.json: where the
channel's centre line lands in the image (through the glass), so the live canvas can stream cells down it and flash
them at the laser. Usage: python3 flowcell.py W H out.png [SS]"""
import sys, json, numpy as np
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 500
H = int(sys.argv[2]) if len(sys.argv) > 2 else 700
OUT = sys.argv[3] if len(sys.argv) > 3 else 'flowcell.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 1
FW, FH = W, H; W, H = W * SS, H * SS
INK = np.array([16, 20, 18]) / 255.0          # page ink #101412
def nrm(v): return v / np.linalg.norm(v, axis=-1, keepdims=True)
def dot(a, b): return np.sum(a * b, -1)

# ---------- geometry ----------
BX, BZ, BY0, BY1 = 0.5, 0.5, -2.1, 0.85        # quartz block half-widths and y extent
CH = 0.075                                      # channel half-width
FY0, FY1, FW1 = 0.22, 0.85, 0.30                # funnel: from y FY0 (half-width CH) to the top face (half-width FW1)
COL_R, COL_Y1 = 0.30, 1.08                      # steel collar on the top face
TUBE_R = 0.085
def planes_box(x0, x1, y0, y1, z0, z1):
    return [(np.array([1., 0, 0]), x1), (np.array([-1., 0, 0]), -x0), (np.array([0, 1., 0]), y1), (np.array([0, -1., 0]), -y0),
            (np.array([0, 0, 1.]), z1), (np.array([0, 0, -1.]), -z0)]
BLOCK = planes_box(-BX, BX, BY0, BY1, -BZ, BZ)
CHAN = planes_box(-CH, CH, BY0 - 2, FY0 + 0.001, -CH, CH)
k = (FW1 - CH) / (FY1 - FY0)                     # funnel side slope
FUN = [(nrm(np.array([1., -k, 0])), None), (nrm(np.array([-1., -k, 0])), None), (nrm(np.array([0, -k, 1.])), None), (nrm(np.array([0, -k, -1.])), None),
       (np.array([0, 1., 0]), FY1 + 0.3), (np.array([0, -1., 0]), -FY0)]
# plane offsets for the funnel sides: pass through (CH, FY0, 0) etc.
FUN = [(n, (dot(n, np.array([CH * np.sign(n[0]) if abs(n[0]) > .1 else 0, FY0, CH * np.sign(n[2]) if abs(n[2]) > .1 else 0])) if d is None else d)) for n, d in FUN]

def convex(o, d, P):
    """ray/convex polyhedron: returns t_in, t_out, normal at entry, normal at exit"""
    n_ = len(o); tin = np.full(n_, -1e9); tout = np.full(n_, 1e9)
    nin = np.zeros((n_, 3)); nout = np.zeros((n_, 3))
    for nv, off in P:
        dn = d @ nv; on = o @ nv
        with np.errstate(divide='ignore', invalid='ignore'):
            t = (off - on) / dn
        ent = dn < 0; ex = dn > 0
        par = (dn == 0) & (on > off); tin[par] = 1e9
        m = ent & (t > tin); tin[m] = t[m]; nin[m] = nv
        m = ex & (t < tout); tout[m] = t[m]; nout[m] = nv
    return tin, tout, nin, nout

def cyl(o, d, r, y0, y1):
    """vertical capped cylinder on the y axis: nearest entry t and normal"""
    a = d[:, 0]**2 + d[:, 2]**2; b = 2 * (o[:, 0] * d[:, 0] + o[:, 2] * d[:, 2]); c = o[:, 0]**2 + o[:, 2]**2 - r * r
    disc = b * b - 4 * a * c; t = np.full(len(o), 1e9); nn = np.zeros((len(o), 3))
    ok = (disc > 0) & (a > 1e-9)
    t1 = np.where(ok, (-b - np.sqrt(np.maximum(disc, 0))) / (2 * np.maximum(a, 1e-9)), 1e9)
    y = o[:, 1] + t1 * d[:, 1]; m = ok & (t1 > 1e-4) & (y > y0) & (y < y1)
    t[m] = t1[m]; p = o[m] + t1[m, None] * d[m]; nn[m] = nrm(np.stack([p[:, 0], np.zeros(m.sum()), p[:, 2]], 1))
    with np.errstate(divide='ignore', invalid='ignore'):
        tc = (y1 - o[:, 1]) / d[:, 1]
    pc = o + tc[:, None] * d; m2 = (tc > 1e-4) & (pc[:, 0]**2 + pc[:, 2]**2 < r * r) & (tc < t)
    t[m2] = tc[m2]; nn[m2] = np.array([0, 1., 0])
    return t, nn

# ---------- studio environment (ground = ink) ----------
def soft(x, a, b): return np.clip((x - a) / (b - a), 0, 1) ** 2 * (3 - 2 * np.clip((x - a) / (b - a), 0, 1))
def env(d):
    col = np.tile(INK, (len(d), 1)).astype(float)
    az = np.arctan2(d[:, 0], d[:, 2]); el = np.arcsin(np.clip(d[:, 1], -1, 1))
    def box(a0, aw, aw2, e0, eh, eh2):
        dA = np.abs(np.angle(np.exp(1j * (az - a0))))
        return soft(-dA, -aw - aw2, -aw) * soft(-np.abs(el - e0), -eh - eh2, -eh)
    # front softbox, upper right of the camera: a broad sheen across the front and right faces
    col += box(0.75, 0.32, 0.30, 0.42, 0.22, 0.25)[:, None] * np.array([1.0, 0.99, 0.95]) * 3.2
    # second front panel, left of camera, dimmer: a sheen on the left of the front face
    col += box(-0.55, 0.12, 0.25, 0.25, 0.30, 0.3)[:, None] * np.array([0.9, 1.0, 0.95]) * 1.4
    # tall strips behind the block, left and right: they light the edges through the glass (dark-field look)
    col += box(-2.45, 0.05, 0.06, 0.1, 0.7, 0.3)[:, None] * np.array([0.9, 0.97, 1.0]) * 2.0
    col += box(2.62, 0.05, 0.06, 0.1, 0.7, 0.3)[:, None] * np.array([1.0, 0.97, 0.92]) * 1.6
    # overhead
    col += soft(el, 0.75, 1.3)[:, None] * np.array([0.8, 0.82, 0.8]) * 1.2
    # a low green bounce and a warm one (the logo's two strands), very faint
    col += (soft(-el, 0.05, 0.6) * soft(-np.abs(az + 1.2), -1.2, -0.3))[:, None] * np.array([0.07, 0.30, 0.08]) * 0.35
    col += (soft(-el, 0.05, 0.6) * soft(-np.abs(az - 1.0), -1.2, -0.3))[:, None] * np.array([0.40, 0.12, 0.04]) * 0.3
    return col

def fres(cosi, n1, n2):
    r0 = ((n1 - n2) / (n1 + n2)) ** 2
    return r0 + (1 - r0) * (1 - np.clip(cosi, 0, 1)) ** 5
def refract(d, n, eta):
    cosi = -dot(d, n); k_ = 1 - eta * eta * (1 - cosi * cosi)
    tir = k_ < 0
    t = eta * d + (eta * cosi - np.sqrt(np.maximum(k_, 0)))[:, None] * n
    return nrm(t), tir
def reflect(d, n): return d - 2 * dot(d, n)[:, None] * n

def inside(p, P, eps=1e-5):
    m = np.ones(len(p), bool)
    for nv, off in P: m &= (p @ nv) <= off + eps
    return m

# ---------- tracing ----------
NQ, NW = 1.46, 1.33
def steel(p, n, d):
    r = reflect(d, n)
    # brushed steel: blurred env approximated by averaging a few jittered reflections
    acc = np.zeros((len(d), 3))
    for j in range(5):
        jit = np.array([[0, 0, 0], [.08, 0, 0], [-.08, 0, 0], [0, .08, 0], [0, -.08, 0]][j])
        acc += env(nrm(r + jit))
    c = acc / 5 * np.array([0.78, 0.8, 0.82]) + INK * 0.4
    return c

def trace(o, d):
    n = len(o); col = np.zeros((n, 3)); thr = np.ones(n); alpha = np.zeros(n)
    axis_d = np.full(n, 9.); axis_y = np.zeros(n)
    # first: what does the camera ray hit?
    tb_in, tb_out, nb_in, _ = convex(o, d, BLOCK)
    hitb = (tb_in < tb_out) & (tb_out > 0) & (tb_in > 0)
    tc, nc = cyl(o, d, COL_R, BY1 - 0.001, COL_Y1)
    tt, nt = cyl(o, d, TUBE_R, COL_Y1 - 0.01, COL_Y1 + 3)
    tmet = np.minimum(tc, tt); nmet = np.where((tc <= tt)[:, None], nc, nt)
    met = (tmet < 1e8) & (~hitb | (tmet < tb_in))
    if met.any():
        p = o[met] + tmet[met, None] * d[met]
        c = steel(p, nmet[met], d[met])
        # the tube and the collar fade upward into the ink (long ease)
        f = soft(p[:, 1], COL_Y1 + 0.10, COL_Y1 + 0.005)
        col[met] = c * f[:, None] + INK * (1 - f[:, None]); alpha[met] = 1
    g = hitb & ~met
    if not g.any(): return col, alpha, axis_d, axis_y
    idx = np.where(g)[0]
    O = o[idx] + tb_in[idx, None] * d[idx]; D = d[idx]; N = nb_in[idx]
    cosi = -dot(D, N); F = fres(cosi, 1, NQ)
    C = env(reflect(D, N)) * F[:, None]                  # outer reflection
    # polished chamfers on the block's edges: where the hit is within CHF of a second face, shade with the averaged normal
    CHF = 0.011
    dx = BX - np.abs(O[:, 0]); dy_t = BY1 - O[:, 1]; dz = BZ - np.abs(O[:, 2])
    nx = np.stack([np.sign(O[:, 0]), 0 * O[:, 0], 0 * O[:, 0]], 1); ny = np.tile([0, 1., 0], (len(O), 1)); nz = np.stack([0 * O[:, 0], 0 * O[:, 0], np.sign(O[:, 2])], 1)
    cand = [(dx, nx), (dy_t, ny), (dz, nz)]
    for dist, nn in cand:
        m = (dist < CHF) & (np.abs(dot(N, nn)) < 0.5)
        if m.any():
            Nc = nrm(N[m] + nn[m]); r = reflect(D[m], Nc)
            w_ = (1 - dist[m] / CHF) ** 0.5
            C[m] = C[m] * (1 - w_[:, None]) + (env(r) * 0.55 + 0.10) * w_[:, None]
    T = (1 - F)
    D, _ = refract(D, N, 1 / NQ)
    # path inside quartz: up to 7 events
    medium = np.zeros(len(idx), int)                      # 0 quartz, 1 water
    live = np.ones(len(idx), bool)
    adist = np.full(len(idx), 9.); ay = np.zeros(len(idx))
    tint = np.array([0.985, 0.995, 0.99])
    for it in range(8):
        if not live.any(): break
        L = np.where(live)[0]; o2 = O[L] + D[L] * 1e-4; d2 = D[L]
        res_t = np.full(len(L), 1e9); res_n = np.zeros((len(L), 3)); res_kind = np.zeros(len(L), int)
        q = medium[L] == 0
        if q.any():
            oq, dq = o2[q], d2[q]
            _, to, _, no = convex(oq, dq, BLOCK)
            t1i, t1o, n1i, _ = convex(oq, dq, CHAN); t2i, t2o, n2i, _ = convex(oq, dq, FUN)
            h1 = (t1i < t1o) & (t1i > 0); h2 = (t2i < t2o) & (t2i > 0)
            tw = np.where(h1, t1i, 1e9); nw = n1i.copy(); m = h2 & (t2i < tw); tw[m] = t2i[m]; nw[m] = n2i[m]
            # the funnel's top is the steel collar's floor: treat it as quartz-steel (dark) by clipping at the top face
            tq = np.where(tw < to, tw, to); nq = np.where((tw < to)[:, None], -nw, no); kq = np.where(tw < to, 2, 1)
            res_t[q] = tq; res_n[q] = nq; res_kind[q] = kq
        w = medium[L] == 1
        if w.any():
            ow, dw = o2[w], d2[w]
            _, t1o, _, n1o = convex(ow, dw, CHAN); _, t2o, _, n2o = convex(ow, dw, FUN)
            in1 = inside(ow, CHAN, 1e-3); in2 = inside(ow, FUN, 1e-3)
            # exit of the union, approximately: leave whichever piece we are in, continue if that point is in the other
            te = np.where(in1 & ~in2, t1o, np.where(in2 & ~in1, t2o, np.maximum(t1o, t2o)))
            ne = np.where((in1 & ~in2)[:, None], n1o, np.where((in2 & ~in1)[:, None], n2o, np.where((t1o > t2o)[:, None], n1o, n2o)))
            # closest approach to the channel axis along this water segment
            tt_ = np.clip(-(ow[:, 0] * dw[:, 0] + ow[:, 2] * dw[:, 2]) / np.maximum(dw[:, 0]**2 + dw[:, 2]**2, 1e-9), 0, te)
            pc = ow + tt_[:, None] * dw; dd = np.sqrt(pc[:, 0]**2 + pc[:, 2]**2)
            Lw = L[w]; better = dd < adist[Lw]; adist[Lw[better]] = dd[better]; ay[Lw[better]] = pc[better, 1]
            pex = ow + te[:, None] * dw
            top = pex[:, 1] > BY1 - 1e-3                       # reached the collar floor: dark steel
            res_t[w] = te; res_n[w] = -ne; res_kind[w] = np.where(top, 4, 3)
        P = o2 + res_t[:, None] * d2
        # bottom of the block: the stream continues to the waste line; treat as exiting to the environment
        kind = res_kind
        # kind 1: quartz->air, 2: quartz->water, 3: water->quartz, 4: absorbed by steel floor
        for kk, n1, n2 in ((1, NQ, 1.0), (2, NQ, NW), (3, NW, NQ)):
            m = kind == kk
            if not m.any(): continue
            Li = L[m]; Nn = res_n[m]; Dd = d2[m]
            # Nn points against the ray (into the incoming medium)
            Nn = np.where((dot(Dd, Nn) > 0)[:, None], -Nn, Nn)
            ci = -dot(Dd, Nn); Fr = fres(ci, n1, n2)
            Dt, tir = refract(Dd, Nn, n1 / n2)
            Fr = np.where(tir, 1.0, Fr)
            if kk == 1:
                # leave the block: add transmitted env, keep the reflected path alive
                C[Li] += (env(Dt) * ((1 - Fr) * T[Li])[:, None]) * tint
                T[Li] *= Fr; O[Li] = P[m]; D[Li] = nrm(reflect(Dd, Nn))
            else:
                # crossing quartz/water: follow the dominant path (refraction unless TIR), keep a little of the reflection
                ref = Fr > 0.5
                C[Li] += env(nrm(reflect(Dd, Nn))) * (np.minimum(Fr, .5) * T[Li] * .5)[:, None]
                O[Li] = P[m]; D[Li] = np.where(ref[:, None], nrm(reflect(Dd, Nn)), Dt)
                medium[Li] = np.where(ref, medium[Li], 1 if kk == 2 else 0)
                T[Li] *= np.where(ref, Fr, 1 - np.minimum(Fr, .5) * .5)
        m4 = kind == 4
        if m4.any():
            Li = L[m4]; C[Li] += np.array([0.06, 0.065, 0.07]) * T[Li, None]; T[Li] = 0
        live &= T > 0.02
        live[L[res_t >= 1e8]] = False
    C += INK * T[:, None]                                 # whatever is left sees the ink
    col[idx] = C; alpha[idx] = 1; axis_d[idx] = adist; axis_y[idx] = ay
    return col, alpha, axis_d, axis_y

# ---------- camera ----------
cam = np.array([2.3, 1.75, 7.6]); look = np.array([0.0, -0.32, 0.0]); fov = np.radians(23)
fwd = nrm(look - cam); right = nrm(np.cross(fwd, [0, 1, 0])); up = np.cross(right, fwd)
ys, xs = np.mgrid[0:H, 0:W]
asp = W / H; sx = (xs + .5) / W * 2 - 1; sy = 1 - (ys + .5) / H * 2
th = np.tan(fov / 2)
dirs = nrm(fwd[None, None] + sx[..., None] * th * asp * right + sy[..., None] * th * up)
D0 = dirs.reshape(-1, 3); O0 = np.tile(cam, (len(D0), 1))
col = np.zeros((len(D0), 3)); al = np.zeros(len(D0)); ad = np.zeros(len(D0)); ayy = np.zeros(len(D0))
CHK = 60000
for i in range(0, len(D0), CHK):
    c, a, d_, y_ = trace(O0[i:i+CHK], D0[i:i+CHK]); col[i:i+CHK] = c; al[i:i+CHK] = a; ad[i:i+CHK] = d_; ayy[i:i+CHK] = y_
col = col.reshape(H, W, 3); al = al.reshape(H, W); ad = ad.reshape(H, W); ayy = ayy.reshape(H, W)
# long eased fade of the block's lower part into the ink (the channel runs on to the waste line)
yy = (np.arange(H) / H)[:, None]
fade = (1 - soft(yy, 0.60, 0.97)) * soft(yy, 0.0, 0.10)
col = col * fade[..., None] + INK * (1 - fade[..., None])
# tone map (soft shoulder), output with alpha
TM = lambda v: (1 - np.exp(-v * 1.25)) / (1 - np.exp(-1.25))
col = np.maximum(TM(col) - TM(INK) + INK, INK * 0)   # tone map, keeping the ink exactly the page ink
img = np.dstack([np.clip(col, 0, 1), al])
im = Image.fromarray((img * 255 + .5).astype(np.uint8), 'RGBA')
if SS > 1: im = im.resize((FW, FH), Image.LANCZOS)
im.save(OUT)
# axis samples: the apparent image of points on the channel axis seen through the front face (z = +BZ): for each axis point,
# solve for the face point whose refracted camera ray passes through it (grid search + refine), then project that face point
def apparent(P):
    best = None
    xs_ = np.linspace(-BX, BX, 241); ys_ = np.linspace(P[1] - 0.6, P[1] + 0.6, 241)
    for it in range(3):
        gx, gy = np.meshgrid(xs_, ys_); S_ = np.stack([gx.ravel(), gy.ravel(), np.full(gx.size, BZ)], 1)
        d_ = nrm(S_ - cam); t_, _ = refract(d_, np.tile([0, 0, 1.], (len(d_), 1)), 1 / NQ)
        v = P - S_; dist = np.linalg.norm(v - dot(v, t_)[:, None] * t_, axis=1)
        i = np.argmin(dist); best = S_[i]
        sx_ = (xs_[1] - xs_[0]) * 3; sy_ = (ys_[1] - ys_[0]) * 3
        xs_ = np.linspace(best[0] - sx_, best[0] + sx_, 61); ys_ = np.linspace(best[1] - sy_, best[1] + sy_, 61)
    return best
pts = []
for wy in np.linspace(BY0 + 0.1, FY0, 40):
    S_ = apparent(np.array([0, wy, 0])); v = S_ - cam; z = dot(v, fwd)
    x = dot(v, right) / z / (th * asp); y = dot(v, up) / z / th
    pts.append([round(float(wy), 3), round(float((x + 1) / 2 * FW), 1), round(float((1 - y) / 2 * FH), 1)])
# also the naive projection of a world point (for the laser entry on the right face)
def proj(p):
    v = p - cam; z = dot(v, fwd); x = dot(v, right) / z / (th * asp); y = dot(v, up) / z / th
    return [round(float((x + 1) / 2 * FW), 1), round(float((1 - y) / 2 * FH), 1)]
json.dump({'W': FW, 'H': FH, 'axis': pts, 'funnel_bot': proj(apparent(np.array([0, FY0, 0]))), 'faceR_beam': proj(np.array([BX, -0.15, 0.0])), 'faceR_top': proj(np.array([BX, BY1, BZ])), 'faceR_bot': proj(np.array([BX, -1.4, BZ])), 'faceR_back': proj(np.array([BX, -0.15, -BZ])), 'beam_app': proj(apparent(np.array([0, -0.15, 0]))), 'faceL_beam': proj(np.array([-BX, -0.15, 0.0])),
           'proj_top': proj(np.array([0, COL_Y1, 0])), 'proj_bot': proj(np.array([0, BY0, 0])), 'ch_mid': proj(np.array([0, -0.15, 0]))}, open(OUT.rsplit('.', 1)[0] + '.json', 'w'))
print('ok', OUT, len(pts))
