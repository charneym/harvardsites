#!/usr/bin/env python3
"""UPTru hero: a crafted render of the real subject of their method (HOME_BRIEF update 2c): a clear glass specimen vial
with a navy screw cap, its urine sample glowing yellow-green because the donor drank fluorescein sodium, lit by a blue
excitation light from behind right, standing on a dark glossy surface. Pure numpy ray tracing (analytic cylinder/plane
intersections, Fresnel glass, refraction, volumetric emission), 2x supersampled.
Output: two layers composited in the page canvas: hero-a.webp (absorption, drawn source-over, real alpha) and
hero-e.webp (light: reflections and the glow, drawn additively with 'lighter', black = nothing)."""
import numpy as np, pathlib
from PIL import Image
H = pathlib.Path(__file__).resolve().parent
W0, H0, SS = 760, 1240, 2
W, Hh = W0*SS, H0*SS
R, r, YB, HT, L = 1.0, 0.9, 0.16, 3.5, 2.05     # outer/inner radius, glass base, glass top, liquid level
RC, HC = 1.06, 0.95                              # cap
eye = np.array([0.0, 3.0, 15.5]); look = np.array([0.0, 1.95, 0.0]); fov = np.radians(21.5)
fw = look-eye; fw /= np.linalg.norm(fw); rt = np.cross(fw, [0, 1, 0]); rt /= np.linalg.norm(rt); up = np.cross(rt, fw)
ys, xs = np.mgrid[0:Hh, 0:W].astype(np.float32)
th = np.tan(fov/2); asp = W/Hh
u = ((xs+.5)/W*2-1)*th*asp; v = (1-(ys+.5)/Hh*2)*th
D = fw[None, None]+u[..., None]*rt[None, None]+v[..., None]*up[None, None]
D = (D/np.linalg.norm(D, axis=-1, keepdims=True)).reshape(-1, 3)
O = np.broadcast_to(eye, D.shape).copy()
N = len(D)

def sstep(a, b, x): x = np.clip((x-a)/(b-a), 0, 1); return x*x*(3-2*x)
def env(d):
    """studio environment: a tall cool softbox front-left, a blue excitation strip behind right, a dim top light"""
    phi = np.arctan2(d[:, 0], d[:, 2]); el = np.arcsin(np.clip(d[:, 1], -1, 1))
    c = np.zeros((len(d), 3)); c += np.array([.010, .014, .040])
    k1 = sstep(.20, .05, np.abs(phi-(-0.78)))*sstep(-.35, -.15, el)*sstep(.95, .7, el)
    c += k1[:, None]*np.array([1.6, 1.68, 1.8])
    k2 = sstep(.16, .04, np.abs(phi-2.35))*sstep(-.3, -.05, el)*sstep(.9, .6, el)
    c += k2[:, None]*np.array([.30, .48, 1.5])
    k3 = sstep(.75, .95, d[:, 1])
    c += k3[:, None]*np.array([.25, .27, .32])
    k4 = sstep(.12, .03, np.abs(phi-0.9))*sstep(-.2, 0, el)*sstep(.6, .4, el)   # faint fill right-front
    c += k4[:, None]*np.array([.22, .24, .3])
    return c
def refl(d, n): return d-2*np.sum(d*n, 1, keepdims=True)*n
def refr(d, n, eta):
    c = -np.sum(d*n, 1, keepdims=True); k = 1-eta**2*(1-c**2)
    tir = (k < 0)[:, 0]; k = np.maximum(k, 0)
    out = eta*d+(eta*c-np.sqrt(k))*n
    out[tir] = refl(d[tir], n[tir])
    return out/np.linalg.norm(out, axis=1, keepdims=True), tir
def schlick(c, f0): return f0+(1-f0)*(1-np.clip(c, 0, 1))**5
def cyl(o, d, rad, far=False):
    a = d[:, 0]**2+d[:, 2]**2; b = 2*(o[:, 0]*d[:, 0]+o[:, 2]*d[:, 2]); c = o[:, 0]**2+o[:, 2]**2-rad**2
    disc = b*b-4*a*c; ok = (disc > 0) & (a > 1e-9); s = np.sqrt(np.maximum(disc, 0))
    t = (-b+s)/(2*a+1e-12) if far else (-b-s)/(2*a+1e-12)
    t = np.where(ok & (t > 1e-5), t, np.inf); return t
def plane(o, d, y):
    t = (y-o[:, 1])/np.where(np.abs(d[:, 1]) > 1e-9, d[:, 1], 1e-9); return np.where(t > 1e-5, t, np.inf)
GC = np.array([.60, .64, .06])           # fluorescein emission, warm yellow-green, tuned to the logo gold
def dax(o, d, t):
    """closest distance of a path segment to the vial axis"""
    a = d[:, 0]**2+d[:, 2]**2; s_ = -(o[:, 0]*d[:, 0]+o[:, 2]*d[:, 2])/np.maximum(a, 1e-9); s_ = np.clip(s_, 0, t)
    return np.sqrt((o[:, 0]+s_*d[:, 0])**2+(o[:, 2]+s_*d[:, 2])**2)
def glow(L_, ymid, da=None):
    k = 1-np.exp(-1.1*L_)
    hot = sstep(.45, .9, k)
    deep = np.array([.42, .30, .015])         # thin paths: a deeper amber gold
    col = (deep[None]*(1-hot[:, None])+GC[None]*hot[:, None])*k[:, None]*1.25
    col *= (1+.45*sstep(L-.1, YB+.2, ymid))[:, None]   # brighter low in the vial, where the excitation enters
    if da is not None: col *= (1.4-.9*sstep(.1, r, da))[:, None]   # a luminous core, deeper gold toward the wall
    col += (sstep(.75, .98, k)*.22)[:, None]*np.array([.9, 1.0, .5])[None]
    return col

def trace(o, d, floor=True):
    n_ = len(d); E = np.zeros((n_, 3)); A = np.zeros(n_); AC = np.zeros((n_, 3))
    t_side = cyl(o, d, R); y = o[:, 1]+t_side*d[:, 1]; t_side[(y < 0) | (y > HT)] = np.inf
    t_cs = cyl(o, d, RC); y = o[:, 1]+t_cs*d[:, 1]; t_cs[(y < HT-.02) | (y > HT+HC)] = np.inf
    t_ct = plane(o, d, HT+HC); p = o+t_ct[:, None]*d; t_ct[p[:, 0]**2+p[:, 2]**2 > RC**2] = np.inf
    t_cap = np.minimum(t_cs, t_ct)
    t_fl = plane(o, d, 0.0) if floor else np.full(n_, np.inf)
    p = o+np.where(np.isfinite(t_fl), t_fl, 0)[:, None]*d; t_fl[(p[:, 0]**2+p[:, 2]**2) < R**2] = np.inf
    tm = np.minimum(np.minimum(t_side, t_cap), t_fl)
    g = np.isfinite(t_side) & (t_side <= tm)
    cp = np.isfinite(t_cap) & (t_cap <= tm) & ~g
    fl = np.isfinite(t_fl) & (t_fl <= tm) & ~g & ~cp
    # ---- cap: matte navy plastic with fine vertical knurling
    if cp.any():
        i = np.where(cp)[0]; pp = o[i]+t_cap[i, None]*d[i]; top = t_ct[i] <= t_cs[i]
        ang = np.arctan2(pp[:, 2], pp[:, 0]); nn = np.stack([np.cos(ang), np.zeros_like(ang), np.sin(ang)], 1)
        kn = np.sin(ang*84); tg = np.stack([-np.sin(ang), np.zeros_like(ang), np.cos(ang)], 1)
        band = (pp[:, 1] > HT+.12) & (pp[:, 1] < HT+HC-.1)
        nn = nn+tg*(kn*.13*band)[:, None]
        nn[top] = [0, 1, 0]
        # a soft bevel where the side meets the top
        bev = sstep(HT+HC-.12, HT+HC, pp[:, 1])*(~top)
        nn = nn*(1-bev[:, None])+np.array([0, 1, 0])*bev[:, None]*.8
        nn /= np.linalg.norm(nn, axis=1, keepdims=True)
        base = np.array([.012, .02, .12])
        kd = np.clip(np.sum(nn*np.array([-.55, .55, .63]), 1), 0, 1)
        cosv = np.clip(-np.sum(d[i]*nn, 1), 0, 1)
        col = base*(0.18+.8*kd[:, None])+schlick(cosv, .06)[:, None]*env(refl(d[i], nn))*.8
        # a gold rim band at the cap's base, as on the logo's glass dishes
        A[i] = 1; AC[i] = np.clip(col, 0, 1)
    # ---- glass
    if g.any():
        i = np.where(g)[0]; P = o[i]+t_side[i, None]*d[i]; d0 = d[i]
        n1 = P*np.array([1, 0, 1])/R
        c1 = -np.sum(d0*n1, 1); F = schlick(c1, .045)
        F = F+sstep(.28, .06, c1)*.18
        Ei = F[:, None]*env(refl(d0, n1))
        d1, _ = refr(d0, n1, 1/1.5)
        ti = cyl(P, d1, r); yq = P[:, 1]+ti*d1[:, 1]; ti[(yq < YB) | (yq > HT)] = np.inf
        Ai = np.full(len(i), .06); ACi = np.zeros((len(i), 3))
        hit = np.isfinite(ti)
        # grazing rays that stay inside the wall: a bright light-piped edge where the wall holds the glowing sample
        m = ~hit
        if m.any():
            ye = P[m, 1]
            Ei[m] += env(d1[m])*.3+(sstep(L-.02, L-.3, ye)[:, None]*GC[None]*.35)
            Ai[m] = .22
        j = np.where(hit)[0]
        if len(j):
            Q = P[j]+ti[j, None]*d1[j]; nq = (Q*np.array([1, 0, 1]))/r     # wall normal facing the incoming ray
            liq = Q[:, 1] < L
            out = np.zeros((len(j), 3)); al = np.full(len(j), .06)
            # ---- into the liquid directly
            a = np.where(liq)[0]
            if len(a):
                d2, tira = refr(d1[j[a]], nq[a], 1.5/1.33)
                o2 = Q[a]; tc = cyl(o2, d2, r, far=True); tb = plane(o2, d2, YB); tb[d2[:, 1] >= 0] = np.inf
                ts = plane(o2, d2, L); ts[d2[:, 1] <= 0] = np.inf
                te = np.minimum(np.minimum(tc, tb), ts); te = np.where(np.isfinite(te), te, 0)
                ym = o2[:, 1]+te*.5*d2[:, 1]
                out[a] += glow(te, ym, dax(o2, d2, te)); al[a] = .55
            # ---- into the air above the sample, maybe down through its surface
            b = np.where(~liq)[0]
            if len(b):
                d2, tirb = refr(d1[j[b]], nq[b], 1.5)
                o2 = Q[b]; tc = cyl(o2, d2, r, far=True); ts = plane(o2, d2, L); ts[d2[:, 1] >= 0] = np.inf
                down = (ts < tc) & ~tirb
                tc[tirb] = np.inf
                bb = np.where(down)[0]
                if len(bb):
                    S = o2[bb]+ts[bb, None]*d2[bb]; ns = np.tile([0, 1., 0], (len(bb), 1))
                    cs = -np.sum(d2[bb]*ns, 1); Fs = schlick(cs, .02)
                    out[b[bb]] += Fs[:, None]*env(refl(d2[bb], ns))
                    d3, _ = refr(d2[bb], ns, 1/1.33)
                    tc3 = cyl(S, d3, r, far=True); tb3 = plane(S, d3, YB); tb3[d3[:, 1] >= 0] = np.inf
                    te = np.minimum(tc3, tb3); te = np.where(np.isfinite(te), te, 0)
                    out[b[bb]] += glow(te, S[:, 1]+te*.5*d3[:, 1], dax(S, d3, te))*1.05
                    al[b[bb]] = .55
                    # the meniscus catches the light where the surface meets the wall
                    rr = np.sqrt(S[:, 0]**2+S[:, 2]**2)
                    out[b[bb]] += (sstep(r-.06, r-.005, rr)*.55)[:, None]*np.array([1, .95, .45])
                tb_ = np.where(tirb)[0]
                if len(tb_): out[b[tb_]] += env(d2[tb_])*.25
                ab = np.where(~down & ~tirb)[0]
                if len(ab):
                    Fw = schlick(np.abs(np.sum(d2[ab]*nq[ab], 1)), .04)
                    # the far wall from inside: faint reflection, and the glow seen in it below the waterline
                    Q2 = o2[ab]+np.where(np.isfinite(tc[ab]), tc[ab], 0)[:, None]*d2[ab]
                    out[b[ab]] += env(d2[ab])*.10+(sstep(L+.5, L, Q2[:, 1])[:, None]*GC[None]*.10)
            # inner wall reflection seen from inside the glass
            Fi = schlick(np.abs(np.sum(d1[j]*nq, 1)), .03)
            out += Fi[:, None]*env(refl(d1[j], -nq))*.5
            Ei[j] += out*(1-F[j])[:, None]; Ai[j] = al
        E[i] = Ei; A[i] = Ai; AC[i] = ACi
    # ---- glossy floor: reflection of the vial and a pool of the sample's light
    if fl.any():
        i = np.where(fl)[0]; P = o[i]+t_fl[i, None]*d[i]
        dr = d[i].copy(); dr[:, 1] *= -1
        e2, a2, ac2 = trace(P, dr, floor=False)
        rr = np.sqrt(P[:, 0]**2+P[:, 2]**2)
        fade = np.exp(-(rr-R)*2.6)
        E[i] = (e2*.22+ac2*a2[:, None]*.12)*fade[:, None]
        pool = np.exp(-((rr-R)/.55)**2)*.30
        E[i] += pool[:, None]*GC[None]*.32
    return E, A, AC

CH = 400000; E = np.zeros((N, 3)); A = np.zeros(N); AC = np.zeros((N, 3))
for s in range(0, N, CH):
    e, a, ac = trace(O[s:s+CH], D[s:s+CH]); E[s:s+CH] = e; A[s:s+CH] = a; AC[s:s+CH] = ac
E = E.reshape(Hh, W, 3); A = A.reshape(Hh, W); AC = AC.reshape(Hh, W, 3)
def down(x): return x.reshape(H0, SS, W0, SS, *x.shape[2:]).mean((1, 3))
Ed = down(E); Ad = down(A); APd = down(AC*A[..., None])
# a soft bloom from the glow
def boxb(a, rad):
    for ax in (0, 1):
        c = np.cumsum(np.pad(a, [(rad+1, rad) if k == ax else (0, 0) for k in range(a.ndim)], mode='edge'), ax)
        a = (np.take(c, range(2*rad+1, c.shape[ax]), ax)-np.take(c, range(0, c.shape[ax]-2*rad-1), ax))/(2*rad+1)
    return a
br = np.clip(Ed-1.0, 0, None)
bl = boxb(boxb(boxb(br, 14), 14), 14)
Ed = Ed+bl*.18
xx = (np.arange(W0)+.5)/W0
Ed = Ed*(sstep(0, .2, xx)*sstep(1, .8, xx))[None, :, None]     # the floor's light pool eases out well inside the frame (DJ)
tone = 1-np.exp(-Ed*1.05)
srgb = np.where(tone <= .0031308, tone*12.92, 1.055*np.power(np.clip(tone, 0, 1), 1/2.4)-.055)
Image.fromarray((np.clip(srgb, 0, 1)*255+.5).astype(np.uint8)).save(H/'hero-e.webp', quality=90, method=6)
ac = np.where(Ad[..., None] > 1e-4, APd/np.maximum(Ad[..., None], 1e-4), 0)
acs = np.where(ac <= .0031308, ac*12.92, 1.055*np.power(np.clip(ac, 0, 1), 1/2.4)-.055)
rgba = np.dstack([np.clip(acs, 0, 1)*255, np.clip(Ad, 0, 1)*255]).astype(np.uint8)
Image.fromarray(rgba, 'RGBA').save(H/'hero-a.webp', quality=92, method=6, exact=True)
# a preview over the page ink
ink = np.array([10, 18, 52])/255.
lin = lambda c: np.where(c <= .04045, c/12.92, ((c+.055)/1.055)**2.4)
bg = np.ones((H0, W0, 3))*ink
pa = np.array(Image.open(H/'hero-a.webp')).astype(float)/255; pe = np.array(Image.open(H/'hero-e.webp').convert('RGB')).astype(float)/255
pv = bg*(1-pa[..., 3:])+pa[..., :3]*pa[..., 3:]; pv = np.clip(pv+pe, 0, 1)
Image.fromarray((pv*255).astype(np.uint8)).save('/tmp/claude-0/upimg/preview.png')
print('ok')
