#!/usr/bin/env python3
"""Hero render for NephroDI: an engraved coronal section of a human kidney (cortex, medullary pyramids,
calyces, pelvis, ureter, renal artery and vein), in the logo's navy and cyans. Writes kidney.svg;
render.js rasterises it to hero.webp. Deterministic (seeded)."""
import math, random, pathlib
random.seed(7)
H = pathlib.Path(__file__).resolve().parent
W, HT = 1400, 1500
CY = '#20b8d8'; CL = '#70c8e0'; NV = '#184088'; BONE = '#e9f4f8'

def catmull(pts, n=24, closed=True):
    out = []
    P = pts + pts[:3] if closed else [pts[0]] + pts + [pts[-1]]
    rng = len(pts) if closed else len(pts) - 1
    for i in range(rng):
        p0, p1, p2, p3 = P[i], P[i+1], P[i+2], P[i+3]
        for k in range(n):
            t = k / n; t2 = t*t; t3 = t2*t
            out.append(tuple(0.5*((2*p1[j]) + (-p0[j]+p2[j])*t + (2*p0[j]-5*p1[j]+4*p2[j]-p3[j])*t2 + (-p0[j]+3*p1[j]-3*p2[j]+p3[j])*t3) for j in range(2)))
    if not closed: out.append(pts[-1])
    return out

def d(pts, closed=True):
    s = 'M' + ' L'.join('%.1f %.1f' % p for p in pts)
    return s + (' Z' if closed else '')

# bean outline, hilum facing right
OUT = [(640,150),(820,190),(950,320),(1000,500),(960,620),(880,680),(870,760),(930,840),(990,1000),(930,1190),(780,1320),(600,1350),(430,1300),(300,1170),(240,980),(230,760),(260,520),(340,330),(470,195)]
outl = catmull(OUT, 20)
cx, cy = sum(p[0] for p in outl)/len(outl), sum(p[1] for p in outl)/len(outl)
HIL = (905, 760)  # hilum / sinus centre

def normal_in(i, pts):
    a = pts[i-1]; b = pts[(i+1) % len(pts)]
    tx, ty = b[0]-a[0], b[1]-a[1]; L = math.hypot(tx, ty) or 1
    nx, ny = -ty/L, tx/L
    # point inward (toward centroid)
    p = pts[i]
    if (cx-p[0])*nx + (cy-p[1])*ny < 0: nx, ny = -nx, -ny
    return nx, ny

def offset(pts, dist):
    o = []
    for i, p in enumerate(pts):
        nx, ny = normal_in(i, pts)
        o.append((p[0]+nx*dist, p[1]+ny*dist))
    return o

def hil_w(p):  # 0 at the hilum lips, 1 elsewhere
    dd = math.hypot(p[0]-HIL[0], p[1]-HIL[1])
    return max(0.0, min(1.0, (dd-150)/120))

capsule2 = offset(outl, 9)
cortex_in = offset(outl, 92)
g = []
g.append('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %d %d" width="%d" height="%d">' % (W, HT, W, HT))
g.append('<defs>'
  '<radialGradient id="glow" cx="0.55" cy="0.5" r="0.6"><stop offset="0" stop-color="#1b4a8a" stop-opacity=".55"/><stop offset="1" stop-color="#0a1f44" stop-opacity="0"/></radialGradient>'
  '<linearGradient id="ctx" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1d4f8f"/><stop offset="1" stop-color="#123a73"/></linearGradient>'
  '<linearGradient id="med" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#14396f"/><stop offset="1" stop-color="#1a4a86"/></linearGradient>'
  '<linearGradient id="uri" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="%s" stop-opacity=".55"/><stop offset="1" stop-color="%s" stop-opacity=".28"/></linearGradient>'
  '<clipPath id="kc"><path d="%s"/></clipPath>'
  '</defs>' % (CL, CY, d(outl)))
g.append('<ellipse cx="640" cy="760" rx="640" ry="700" fill="url(#glow)"/>')

# --- renal artery and vein, behind the kidney, leaving to the right ---
def tube(path_pts, w, stroke, fill, op=1):
    L = offset_line(path_pts, w/2); R = offset_line(path_pts, -w/2)
    return '<path d="%s" fill="%s" fill-opacity="%.2f" stroke="%s" stroke-width="1.6" stroke-linejoin="round"/>' % (d(L + R[::-1]), fill, op, stroke)

def offset_line(pts, dist):
    o = []
    for i, p in enumerate(pts):
        a = pts[max(0, i-1)]; b = pts[min(len(pts)-1, i+1)]
        tx, ty = b[0]-a[0], b[1]-a[1]; L = math.hypot(tx, ty) or 1
        o.append((p[0]-ty/L*dist, p[1]+tx/L*dist))
    return o

vein = catmull([(880,700),(990,690),(1110,640),(1260,600),(1420,590)], 14, False)
art = catmull([(880,650),(1000,600),(1120,540),(1260,500),(1420,480)], 14, False)
uret = catmull([(900,820),(985,880),(1030,980),(1045,1120),(1060,1300),(1080,1520)], 16, False)
g.append(tube(vein, 54, '#7fa6d6', '#1b4588', .95))
g.append(tube(art, 34, CL, '#1a5c8e', .95))
# fine engraved hatching across the vessels
for path, w, col in ((vein, 54, '#7fa6d6'), (art, 34, CL)):
    for i in range(2, len(path)-1, 2):
        p = path[i]; q = path[i+1]; tx, ty = q[0]-p[0], q[1]-p[1]; L = math.hypot(tx, ty) or 1
        nx, ny = -ty/L, tx/L
        g.append('<path d="M%.1f %.1f L%.1f %.1f" stroke="%s" stroke-opacity=".35" stroke-width="1"/>' % (p[0]+nx*w*.42, p[1]+ny*w*.42, p[0]+nx*w*.05, p[1]+ny*w*.05, col))

# --- kidney body ---
g.append('<path d="%s" fill="url(#ctx)" stroke="%s" stroke-width="2.6"/>' % (d(outl), BONE))
g.append('<path d="%s" fill="none" stroke="%s" stroke-opacity=".45" stroke-width="1.2"/>' % (d(capsule2), BONE))
g.append('<g clip-path="url(#kc)">')
# cortex stipple: glomeruli as tiny rings in the outer band
for i in range(0, len(outl), 1):
    p = outl[i]; w8 = hil_w(p)
    if w8 < .5: continue
    nx, ny = normal_in(i, outl)
    for k in range(3):
        dd = random.uniform(22, 84); jx = random.uniform(-9, 9)
        x, y = p[0]+nx*dd - ny*jx, p[1]+ny*dd + nx*jx
        r = random.uniform(2.2, 3.6)
        g.append('<circle cx="%.1f" cy="%.1f" r="%.1f" fill="none" stroke="%s" stroke-opacity=".42" stroke-width=".9"/>' % (x, y, r, BONE))

# sinus fat region around the hilum (soft)
g.append('<ellipse cx="800" cy="760" rx="210" ry="280" fill="#0f2d5c" fill-opacity=".85"/>')

# --- medullary pyramids: base on the corticomedullary line, apex (papilla) toward the sinus ---
n = len(cortex_in)
cand = [i for i in range(n) if hil_w(cortex_in[i]) > .95]
# pick pyramid centres evenly along the non-hilar part
order = sorted(cand, key=lambda i: math.atan2(cortex_in[i][1]-cy, cortex_in[i][0]-cx))
NP = 8
cent_idx = []
ang = [math.atan2(cortex_in[i][1]-cy, cortex_in[i][0]-cx) for i in order]
a0, a1 = min(ang), max(ang)
# angular span excluding the hilum (right side); go around from top-right to bottom-right through the left
hs = math.atan2(HIL[1]-cy, HIL[0]-cx)
def rel(a):
    r = (a - hs) % (2*math.pi)
    return r
rels = sorted(set(order), key=lambda i: rel(math.atan2(cortex_in[i][1]-cy, cortex_in[i][0]-cx)))
r_lo = rel(math.atan2(cortex_in[rels[0]][1]-cy, cortex_in[rels[0]][0]-cx))
r_hi = rel(math.atan2(cortex_in[rels[-1]][1]-cy, cortex_in[rels[-1]][0]-cx))
targets = [r_lo + (r_hi-r_lo)*(k+.5)/NP for k in range(NP)]
def idx_at(rt):
    return min(rels, key=lambda i: abs(rel(math.atan2(cortex_in[i][1]-cy, cortex_in[i][0]-cx))-rt))
pyr = []
half = (r_hi-r_lo)/NP*.40
for rt in targets:
    i0, i1, ic = idx_at(rt-half), idx_at(rt+half), idx_at(rt)
    b0, b1, bc = cortex_in[i0], cortex_in[i1], cortex_in[ic]
    # papilla: 58% of the way from base centre to the sinus centre
    sx, sy = 790, 760
    t = .56
    ap = (bc[0]+(sx-bc[0])*t, bc[1]+(sy-bc[1])*t)
    pyr.append((i0, i1, ap))

for (i0, i1, ap) in pyr:
    seg = cortex_in[min(i0,i1):max(i0,i1)+1]
    if len(seg) > n/2: seg = cortex_in[max(i0,i1):] + cortex_in[:min(i0,i1)+1]
    # pyramid: base arc + gently curved sides to the papilla
    b0, b1 = seg[0], seg[-1]
    def side(a, b, bow):
        mx, my = (a[0]+b[0])/2, (a[1]+b[1])/2
        tx, ty = b[0]-a[0], b[1]-a[1]; L = math.hypot(tx, ty) or 1
        c = (mx - ty/L*bow, my + tx/L*bow)
        return [(a[0]*(1-t)**2 + 2*c[0]*(1-t)*t + b[0]*t*t, a[1]*(1-t)**2 + 2*c[1]*(1-t)*t + b[1]*t*t) for t in [k/16 for k in range(17)]]
    vx, vy = 800-ap[0], 760-ap[1]; LL = math.hypot(vx, vy); ux, uy = vx/LL, vy/LL; px, py = -uy, ux
    pa = (ap[0]+px*17, ap[1]+py*17); pb = (ap[0]-px*17, ap[1]-py*17)
    # which side is which: pa should be nearer seg[-1]
    if math.hypot(pa[0]-seg[-1][0], pa[1]-seg[-1][1]) > math.hypot(pb[0]-seg[-1][0], pb[1]-seg[-1][1]): pa, pb = pb, pa
    s1 = side(seg[-1], pa, 10)
    sgn = 1 if (pa[0]-ap[0])*px + (pa[1]-ap[1])*py > 0 else -1
    tipa = [(ap[0] + px*17*sgn*math.cos(t_) + ux*12*math.sin(t_), ap[1] + py*17*sgn*math.cos(t_) + uy*12*math.sin(t_)) for t_ in [math.pi*k/10 for k in range(11)]]
    s2 = side(pb, seg[0], 10)
    poly = seg + s1[1:] + tipa[1:] + s2[1:-1]
    g.append('<path d="%s" fill="url(#med)" stroke="%s" stroke-opacity=".8" stroke-width="1.4"/>' % (d(poly), BONE))
    # striations: lines from the base to the papilla (collecting ducts)
    for k in range(1, 14):
        t = k/14
        bp = seg[int(t*(len(seg)-1))]
        mx, my = bp[0]+(ap[0]-bp[0])*.5, bp[1]+(ap[1]-bp[1])*.5
        g.append('<path d="M%.1f %.1f Q%.1f %.1f %.1f %.1f" fill="none" stroke="%s" stroke-opacity="%.2f" stroke-width=".9"/>' % (bp[0], bp[1], mx, my, ap[0]+(bp[0]-ap[0])*.08, ap[1]+(bp[1]-ap[1])*.08, CL, .26+.18*math.sin(t*math.pi)))
    # arcuate vessel along the base
    g.append('<path d="%s" fill="none" stroke="%s" stroke-opacity=".75" stroke-width="2" stroke-linecap="round"/>' % (d(offset(seg, -7) if False else seg, False), CL))

# --- collecting system: minor calyces cup each papilla, merge into major calyces and the pelvis ---
pel = catmull([(740,690),(790,630),(850,640),(890,700),(905,770),(905,830),(880,835),(840,860),(780,860),(740,820),(725,750)], 12)
g.append('<path d="%s" fill="url(#uri)" stroke="%s" stroke-width="2" stroke-linejoin="round"/>' % (d(pel), CY))
for (i0, i1, ap) in pyr:
    vx, vy = 800-ap[0], 760-ap[1]; L = math.hypot(vx, vy); ux, uy = vx/L, vy/L; px, py = -uy, ux
    # stem: a tapered tube from the cup to the pelvis
    stem = [(ap[0]+ux*(22+t*(L-50)), ap[1]+uy*(22+t*(L-50))) for t in [k/10 for k in range(11)]]
    wl = [17-5*math.sin(t*math.pi)+ (6*t) for t in [k/10 for k in range(11)]]
    left = [(q[0]+px*w, q[1]+py*w) for q, w in zip(stem, wl)]
    right = [(q[0]-px*w, q[1]-py*w) for q, w in zip(stem, wl)]
    # the cup: a crescent that wraps the rounded papilla tip
    cup_o = [(ap[0]+ux*22+ (px*math.cos(a_)*34) - ux*math.sin(a_)*30, ap[1]+uy*22 + (py*math.cos(a_)*34) - uy*math.sin(a_)*30) for a_ in [math.pi*k/12 for k in range(13)]]
    cup_i = [(ap[0]+ux*16+ (px*math.cos(a_)*22) - ux*math.sin(a_)*16, ap[1]+uy*16 + (py*math.cos(a_)*22) - uy*math.sin(a_)*16) for a_ in [math.pi*k/12 for k in range(13)]]
    shape = left[::-1] + cup_o[::-1] if False else None
    poly = cup_o + right + left[::-1]
    poly = [cup_o[0]] + cup_i + [cup_o[-1]] + right[1:] + left[::-1][:-1]
    g.append('<path d="%s" fill="url(#uri)" stroke="%s" stroke-width="1.6" stroke-linejoin="round"/>' % (d(poly), CY))
g.append('</g>')

# ureter leaving the hilum, drawn over the outline
g.append(tube(uret, 30, CY, '#1f6f9a', .9))
for i in range(2, len(uret)-1, 3):
    p = uret[i]; q = uret[i+1]; tx, ty = q[0]-p[0], q[1]-p[1]; L = math.hypot(tx, ty) or 1
    g.append('<path d="M%.1f %.1f L%.1f %.1f" stroke="%s" stroke-opacity=".4" stroke-width="1"/>' % (p[0]-ty/L*12, p[1]+tx/L*12, p[0]+ty/L*2, p[1]-tx/L*2, CL))
# outline once more for a crisp edge
g.append('<path d="%s" fill="none" stroke="%s" stroke-width="2.4"/>' % (d(outl), BONE))
g.append('</svg>')
(H / 'kidney.svg').write_text('\n'.join(g))
print('wrote kidney.svg')
