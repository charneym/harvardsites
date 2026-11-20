#!/usr/bin/env python3
"""Hero render for EnergyBioCode (HOME_BRIEF 2c: a crafted render of the real subject): an engraved anterior view of the
human bronchial tree inside the two lungs, trachea to the terminal bronchioles, the subject of the NHLBI SBIR project
(aerosol delivery past the bronchial bifurcations to the lower lungs). Drawn as tapered, shaded airway tubes with
cartilage rings on the large airways, a stippled pleural outline and acini at the terminal tips. Writes lungs.svg plus
airways.json (normalised centre-lines, generation and width) for the canvas aerosol animation in field.js.
Deterministic (seeded)."""
import math, random, json, pathlib
random.seed(7)
H = pathlib.Path(__file__).resolve().parent
W, HT = 1400, 1500
CX = 700.0
LINE = '#dff1f4'; AQ = '#8fd3e0'; TEAL = '#2b7385'; DEEP = '#0a1a22'

def cr(pts, n=10, closed=True):
    """Catmull-Rom through control points"""
    out = []; P = pts[:] ; m = len(P)
    rng = range(m) if closed else range(m-1)
    for i in rng:
        p0 = P[(i-1) % m] if closed or i > 0 else P[0]
        p1 = P[i]; p2 = P[(i+1) % m]
        p3 = P[(i+2) % m] if closed or i+2 < m else P[-1]
        for k in range(n):
            t = k/n; t2 = t*t; t3 = t2*t
            out.append(tuple(.5*((2*p1[j]) + (-p0[j]+p2[j])*t + (2*p0[j]-5*p1[j]+4*p2[j]-p3[j])*t2 + (-p0[j]+3*p1[j]-3*p2[j]+p3[j])*t3) for j in (0, 1)))
    return out

# lung silhouettes (viewer's left = right lung, three lobes; viewer's right = left lung with the cardiac notch)
RL = [(640, 330), (585, 300), (520, 330), (430, 430), (350, 590), (290, 780), (250, 980), (235, 1150), (250, 1260), (330, 1300),
      (430, 1270), (530, 1230), (615, 1215), (655, 1120), (650, 900), (640, 640)]
LL = [(760, 330), (815, 300), (880, 330), (970, 430), (1050, 590), (1110, 780), (1150, 980), (1165, 1150), (1150, 1280), (1070, 1320),
      (980, 1300), (900, 1240), (830, 1185), (800, 1080), (850, 960), (790, 860), (765, 640)]
RLs = cr(RL, 12); LLs = cr(LL, 12)

def inside(p, poly):
    x, y = p; c = False; n = len(poly)
    for i in range(n):
        x1, y1 = poly[i]; x2, y2 = poly[(i+1) % n]
        if (y1 > y) != (y2 > y) and x < (x2-x1)*(y-y1)/(y2-y1) + x1: c = not c
    return c

def dist_edge(p, poly):
    best = 1e9
    for i in range(len(poly)):
        a = poly[i]; b = poly[(i+1) % len(poly)]
        ax, ay = a; bx, by = b; dx, dy = bx-ax, by-ay
        t = max(0, min(1, ((p[0]-ax)*dx + (p[1]-ay)*dy)/(dx*dx+dy*dy+1e-9)))
        best = min(best, math.hypot(p[0]-ax-t*dx, p[1]-ay-t*dy))
    return best

segs = []   # (x0,y0,x1,y1,w0,w1,gen)
tips = []
nodes = []  # [x, y, parent]   (for the aerosol centre-lines)
wid = []
def addnode(x, y, par, w):
    nodes.append([x, y, par]); wid.append(w); return len(nodes)-1
def sample(poly, n, seed):
    random.seed(seed); xs = [p[0] for p in poly]; ys = [p[1] for p in poly]; A = []
    while len(A) < n:
        p = (random.uniform(min(xs), max(xs)), random.uniform(min(ys), max(ys)))
        if inside(p, poly) and dist_edge(p, poly) > 8: A.append(p)
    return A
def cen(P): return (sum(p[0] for p in P)/len(P), sum(p[1] for p in P)/len(P))
def branch(ni, d, pts, gen, ang_in):
    """2D Kitaoka-style space-filling dichotomy: split the region served by this branch end through its centroid along
    the flow direction; each child heads toward its half's centroid with a flow-weighted diameter."""
    x, y = nodes[ni][0], nodes[ni][1]
    if len(pts) < 10 or d < 1.0 or gen > 22:
        tips.append((x, y, gen)); return
    C = cen(pts); fx, fy = C[0]-x, C[1]-y; L = math.hypot(fx, fy) or 1; fx /= L; fy /= L
    A = [p for p in pts if (p[0]-C[0])*fy - (p[1]-C[1])*fx > 0]; B = [p for p in pts if (p[0]-C[0])*fy - (p[1]-C[1])*fx <= 0]
    for half in (A, B):
        if len(half) < 4: continue
        c = cen(half); dx, dy = c[0]-x, c[1]-y; dl = math.hypot(dx, dy) or 1
        dd = d*(len(half)/len(pts))**(1/2.7)
        ln_ = dl*(.62 if gen < 5 else .55)
        if dl < 4: tips.append((x, y, gen)); continue
        ex, ey = x+dx/dl*ln_, y+dy/dl*ln_
        # a gentle curve: one mid node pushed sideways
        mx, my = (x+ex)/2 + random.uniform(-1, 1)*ln_*.05, (y+ey)/2 + random.uniform(-1, 1)*ln_*.05
        m = addnode(mx, my, ni, (d+dd)/2); e = addnode(ex, ey, m, dd)
        segs.append((x, y, mx, my, d, (d+dd)/2, gen)); segs.append((mx, my, ex, ey, (d+dd)/2, dd, gen))
        branch(e, dd, [p for p in half if math.hypot(p[0]-ex, p[1]-ey) > 2], gen+1, 0)
TOP = (CX, 70); CAR = (CX, 540)
prev = -1
for k in range(13):
    y = TOP[1] + (CAR[1]-TOP[1])*k/12
    if k: segs.append((CX, TOP[1]+(CAR[1]-TOP[1])*(k-1)/12, CX, y, 44, 44, 0))
    prev = addnode(CX, y, prev, 44)
CARI = prev
def main(end, ctrl, w0, w1):
    p = CARI; last = CAR
    for k in range(1, 9):
        t = k/8; u = 1-t
        q = (u*u*CAR[0]+2*u*t*ctrl[0]+t*t*end[0], u*u*CAR[1]+2*u*t*ctrl[1]+t*t*end[1])
        w = w0+(w1-w0)*t
        segs.append((last[0], last[1], q[0], q[1], w0+(w1-w0)*(k-1)/8, w, 1)); p = addnode(q[0], q[1], p, w); last = q
    return p
random.seed(4)
rp = main((618, 640), (660, 590), 33, 30)
branch(rp, 30, sample(RLs, 9000, 3), 2, 0)
lp = main((815, 625), (770, 570), 30, 27)
branch(lp, 27, sample(LLs, 8000, 5), 2, 0)
N = len(nodes); kids = [[] for _ in range(N)]
for i, nd in enumerate(nodes):
    if nd[2] >= 0: kids[nd[2]].append(i)

def f(v): return '%.1f' % v
g = []; add = g.append
add('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %d %d" width="%d" height="%d">' % (W, HT, W, HT))
add('<defs>'
    '<radialGradient id="bg" cx="0.5" cy="0.52" r="0.62"><stop offset="0" stop-color="#14303b"/><stop offset=".55" stop-color="#0d2029"/><stop offset="1" stop-color="#0a1a22"/></radialGradient>'
    '<radialGradient id="lg" cx="0.5" cy="0.45" r="0.6"><stop offset="0" stop-color="#1d4552" stop-opacity=".75"/><stop offset="1" stop-color="#112a34" stop-opacity=".45"/></radialGradient>'
    '<linearGradient id="tube" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#cfe9ee"/><stop offset=".38" stop-color="#5ea9b9"/><stop offset="1" stop-color="#1c4c5a"/></linearGradient>'
    '<radialGradient id="ac" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#bfe8f0" stop-opacity=".55"/><stop offset="1" stop-color="#bfe8f0" stop-opacity="0"/></radialGradient>'
    '<filter id="soft"><feGaussianBlur stdDeviation="14"/></filter>'
    '</defs>')
add('<rect width="%d" height="%d" fill="url(#bg)"/>' % (W, HT))
# lungs: filled body, soft inner light, stippled pleura and fissures
for poly in (RLs, LLs):
    d = 'M' + ' L'.join('%s %s' % (f(p[0]), f(p[1])) for p in poly) + ' Z'
    add('<path d="%s" fill="url(#lg)"/>' % d)
    add('<path d="%s" fill="none" stroke="%s" stroke-opacity=".55" stroke-width="1.6"/>' % (d, LINE))
    add('<path d="%s" fill="none" stroke="%s" stroke-opacity=".18" stroke-width="7" transform="translate(0 0)"/>' % (d, AQ))
# stipple inside each lung, denser near the pleura (engraving tone)
dots = []
for poly in (RLs, LLs):
    xs = [p[0] for p in poly]; ys = [p[1] for p in poly]
    for _ in range(9000):
        p = (random.uniform(min(xs), max(xs)), random.uniform(min(ys), max(ys)))
        if not inside(p, poly): continue
        de = dist_edge(p, poly)
        if random.random() < math.exp(-de/38)*.9 + .06:
            r = random.uniform(.5, 1.25) * (1.15 if de < 30 else .8)
            dots.append('<circle cx="%s" cy="%s" r="%.2f"/>' % (f(p[0]), f(p[1]), r))
add('<g fill="%s" fill-opacity=".34">%s</g>' % (LINE, ''.join(dots)))
# fissures (oblique on both, horizontal on the right)
add('<path d="M330 760 C420 830 520 920 640 990" fill="none" stroke="%s" stroke-opacity=".3" stroke-width="1.2" stroke-dasharray="2 5"/>' % LINE)
add('<path d="M300 700 C400 690 520 700 645 720" fill="none" stroke="%s" stroke-opacity=".22" stroke-width="1.1" stroke-dasharray="2 5"/>' % LINE)
add('<path d="M1060 640 C990 760 900 900 810 1040" fill="none" stroke="%s" stroke-opacity=".3" stroke-width="1.2" stroke-dasharray="2 5"/>' % LINE)

# acini at the terminal tips: a faint glow and a few tiny alveolar sacs
ac = []; cl = []
for (x, y, gen) in tips:
    ac.append('<circle cx="%s" cy="%s" r="%.1f"/>' % (f(x), f(y), random.uniform(5, 9)))
    for k in range(random.randint(2, 4)):
        a = random.uniform(0, 2*math.pi); r = random.uniform(1.5, 4)
        cl.append('<circle cx="%s" cy="%s" r="%.2f"/>' % (f(x+r*math.cos(a)), f(y+r*math.sin(a)), random.uniform(1.1, 2.0)))
add('<g fill="#9fdcea" fill-opacity=".07">%s</g>' % ''.join(ac))
add('<g fill="none" stroke="%s" stroke-opacity=".38" stroke-width=".6">%s</g>' % (LINE, ''.join(cl)))

# airways as unioned tubes: an outline layer, then the body, then the lit wall (light from the upper left), then rings
def ln(x0, y0, x1, y1, w): return '<path d="M%s %s L%s %s" stroke-width="%s"/>' % (f(x0), f(y0), f(x1), f(y1), f(w))
L_out = []; L_body = []; L_mid = []; L_hi = []; rings = []
for s_ in segs:
    x0, y0, x1, y1, w0, w1, gen = s_
    w = (w0+w1)/2
    L_out.append(ln(x0, y0, x1, y1, w+max(1.2, w*.08)))
    L_body.append(ln(x0, y0, x1, y1, w))
    a = math.atan2(y1-y0, x1-x0); nx, ny = -math.sin(a), math.cos(a)
    if nx+ny > 0: nx, ny = -nx, -ny     # the normal facing the light
    if w > 2.4:
        o = w*.2
        L_mid.append(ln(x0+nx*o, y0+ny*o, x1+nx*o, y1+ny*o, w*.36))
        o = w*.3
        L_hi.append(ln(x0+nx*o, y0+ny*o, x1+nx*o, y1+ny*o, max(.5, w*.09)))
    if w > 12:
        n = max(1, int(math.hypot(x1-x0, y1-y0)/7.5))
        for k in range(n):
            t = (k+.5)/n; cx_ = x0+(x1-x0)*t; cy_ = y0+(y1-y0)*t; ww = w/2*.88
            p0 = (cx_+nx*ww, cy_+ny*ww); p1 = (cx_-nx*ww, cy_-ny*ww)
            bx, by = math.cos(a)*ww*.3, math.sin(a)*ww*.3
            rings.append('<path d="M%s %s Q%s %s %s %s"/>' % (f(p0[0]), f(p0[1]), f(cx_+bx), f(cy_+by), f(p1[0]), f(p1[1])))
add('<g fill="none" stroke="%s" stroke-opacity=".9" stroke-linecap="round">%s</g>' % (LINE, ''.join(L_out)))
add('<g fill="none" stroke="#173d4a" stroke-linecap="round">%s</g>' % ''.join(L_body))
add('<g fill="none" stroke="#5aa3b4" stroke-opacity=".6" stroke-linecap="round">%s</g>' % ''.join(L_mid))
add('<g fill="none" stroke="#eaf8fa" stroke-opacity=".55" stroke-linecap="round">%s</g>' % ''.join(L_hi))
add('<g fill="none" stroke="%s" stroke-opacity=".38" stroke-width="1" stroke-linecap="round">%s</g>' % (LINE, ''.join(rings)))
add('</svg>')
(H / 'lungs.svg').write_text(''.join(g))

# centre-lines for the aerosol: root-to-tip walks through the parent pointers, thinned to every 3rd node
paths = []
for i, nd in enumerate(nodes):
    if i > 12 and not kids[i]:
        p = []; j = i
        while j >= 0: p.append((nodes[j][0], nodes[j][1], wid[j])); j = nodes[j][2]
        p.reverse(); p = p[::3] + [p[-1]]
        paths.append([[round(x/W, 4), round(y/HT, 4), round(w, 1)] for x, y, w in p])
(H / 'airways.json').write_text(json.dumps(paths))
print('nodes', len(nodes), 'tips', len(tips), 'paths', len(paths))
