#!/usr/bin/env python3
"""Hero render for PHusis Therapeutics (HOME_BRIEF update 2c: a crafted render of the real subject).
An engraved textbook block of human skin, cut to show its layers: the skin surface with its fine crease relief,
the stratum corneum, the epidermis (keratinocytes over a basal layer), the dermis (capillary loops, collagen,
two hair follicles with sebaceous glands, a sweat gland and its duct, an arteriole and venule) and the subcutaneous fat.
A thin topical film sits on the surface and its molecules enter the stratum corneum only: the NCI SBIR abstract
(1R44CA306740-01) describes topical PHT-427 "readily permeating the stratum corneum ... with low transdermal absorption".
Colours: the PHusis logo red #8b0b04 and its tints, the site's cream #f8f6ec. Writes skin.svg (1400x1500). Seeded."""
import math, random, pathlib
random.seed(11)
H = pathlib.Path(__file__).resolve().parent
W, HT = 1400, 1500
CR = (248, 246, 236)
def cr(a): return 'rgba(248,246,236,%.3f)' % a
RED = '#8b0b04'; REDL = '#c58582'; REDM = '#a84843'

X0, X1, Y0 = 130, 1150, 540         # front face: left, right, surface
DX, DY = 170, -170                    # depth offset of the back edge
YB = 1400                             # bottom of the block
SC = 16                               # stratum corneum thickness
def J(x):                             # dermal-epidermal junction (rete ridges point down)
    return 628 + 20*math.sin(x*0.052) + 9*math.sin(x*0.137+1.3)
YPAP, YRET, YSUB = 720, 1150, 1185    # papillary / reticular / subcutis boundaries

def f(v): return '%.1f' % v
def P(pts, close=False):
    s = 'M' + ' L'.join(f(a)+' '+f(b) for a, b in pts)
    return s + (' Z' if close else '')
def wav(x0, x1, y, amp, fr, ph, step=6):
    return [(x, y + amp*math.sin(x*fr+ph)) for x in frange(x0, x1, step)]
def frange(a, b, s):
    out = []; x = a
    while x < b: out.append(x); x += s
    out.append(b); return out

g = []
g.append('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %d %d" width="%d" height="%d">' % (W, HT, W, HT))
g.append('<defs>'
 '<radialGradient id="glow" cx="0.62" cy="0.36" r="0.62"><stop offset="0" stop-color="#4a1712" stop-opacity=".75"/><stop offset="1" stop-color="#170c0b" stop-opacity="0"/></radialGradient>'
 '<linearGradient id="top" x1="0" y1="1" x2="0.4" y2="0"><stop offset="0" stop-color="#8a4740"/><stop offset="1" stop-color="#4e2622"/></linearGradient>'
 '<linearGradient id="epi" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7a3a33"/><stop offset="1" stop-color="#5e2b26"/></linearGradient>'
 '<linearGradient id="der" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#47211f"/><stop offset="1" stop-color="#341918"/></linearGradient>'
 '<linearGradient id="sub" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#43291f"/><stop offset="1" stop-color="#22130f"/></linearGradient>'
 '<linearGradient id="side" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#000" stop-opacity=".12"/><stop offset="1" stop-color="#000" stop-opacity=".3"/></linearGradient>'
 '<linearGradient id="fade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset=".78" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>'
 '<mask id="fm"><rect x="0" y="0" width="%d" height="%d" fill="url(#fade)"/></mask>'
 '<radialGradient id="film" cx=".45" cy=".4" r=".7"><stop offset="0" stop-color="#e3b2ac" stop-opacity=".42"/><stop offset="1" stop-color="#c58582" stop-opacity=".12"/></radialGradient>'
 '<linearGradient id="art" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c0392f"/><stop offset=".5" stop-color="#8b0b04"/><stop offset="1" stop-color="#5a0703"/></linearGradient>'
 '<linearGradient id="vein" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6e1d22"/><stop offset="1" stop-color="#3a0c10"/></linearGradient>'
 '<clipPath id="sc"><path d="M%d %d L%d %d L%d %d L%d %dZ"/></clipPath><clipPath id="fc"><rect x="%d" y="%d" width="%d" height="%d"/></clipPath>'
 '</defs>' % (W, HT, X1, Y0, X1+DX, Y0+DY, X1+DX, YB+DY, X1, YB, X0, Y0 - 2, X1 - X0, YB - Y0 + 4))
g.append('<rect width="%d" height="%d" fill="#170c0b"/><rect width="%d" height="%d" fill="url(#glow)"/>' % (W, HT, W, HT))
g.append('<g mask="url(#fm)">')

# ---------------- right side face (the cut seen obliquely) ----------------
g.append('<g clip-path="url(#sc)">')
def sidept(t, d):   # t 0..1 along depth, d = depth below surface
    return (X1 + DX*t, Y0 + d + DY*t)
def band(d0, d1, fill):
    return '<path d="%s" fill="%s"/>' % (P([sidept(0, d0), sidept(1, d0), sidept(1, d1), sidept(0, d1)], True), fill)
JD = 628 - Y0
g.append(band(0, JD, 'url(#epi)'))
g.append(band(JD, YSUB - Y0, 'url(#der)'))
g.append(band(YSUB - Y0, YB - Y0, 'url(#sub)'))
for d, a in ((SC, .35), (JD, .4), (YPAP - Y0, .14), (YSUB - Y0, .35)):
    g.append('<path d="%s" stroke="%s" stroke-width="1.1" fill="none"/>' % (P([sidept(0, d), sidept(1, d)]), cr(a)))
s = ''
for i in range(60):
    d = random.uniform(YPAP - Y0 + 10, YSUB - Y0 - 10); t0 = random.uniform(0, .8); t1 = t0 + random.uniform(.12, .3)
    a = sidept(t0, d); b = sidept(min(t1, 1), d + random.uniform(-6, 6)); s += 'M%s %sL%s %s' % (f(a[0]), f(a[1]), f(b[0]), f(b[1]))
g.append('<path d="%s" stroke="%s" stroke-width=".8" fill="none"/>' % (s, cr(.16)))
for i in range(34):
    t = random.uniform(.06, .94); d = random.uniform(YSUB - Y0 + 24, YB - Y0 - 20); c = sidept(t, d)
    g.append('<ellipse cx="0" cy="0" rx="%s" ry="%s" transform="translate(%s %s) skewY(-45)" fill="rgba(248,230,210,.05)" stroke="%s" stroke-width=".9"/>' % (f(random.uniform(9, 12)), f(random.uniform(18, 22)), f(c[0]), f(c[1]), cr(.26)))
# vessel cut ends on the side face
for (d, rr, fill) in ((1140 - Y0, 15, 'url(#art)'), (1170 - Y0, 18, 'url(#vein)')):
    c = sidept(.04, d)
    g.append('<ellipse cx="0" cy="0" rx="%d" ry="%d" transform="translate(%s %s) skewY(-45)" fill="%s" stroke="%s" stroke-width="1.1"/>' % (rr*.5, rr, f(c[0]), f(c[1]), fill, cr(.55)))
g.append(band(0, YB - Y0, 'url(#side)'))
g.append('</g>')

# ---------------- top face: the skin surface ----------------
def topt(u, v): return (X0 + (X1 - X0)*u + DX*v, Y0 + DY*v)
TOP = [topt(0, 0), topt(1, 0), topt(1, 1), topt(0, 1)]
g.append('<path d="%s" fill="url(#top)"/>' % P(TOP, True))
# crease relief: two crossing families of fine lines, wobbling, in surface coordinates
s = ''
for fam, (ku, kv) in enumerate(((1, -.9), (1, .7))):
    for k in range(-14, 30):
        c0 = k * .045
        pts = []
        for j in range(0, 41):
            v = j / 40
            u = c0 - kv*v*0.45 + .006*math.sin(j*1.7 + k)
            if 0 <= u <= 1: pts.append(topt(u, v))
        if len(pts) > 2: s += P(pts)
g.append('<path d="%s" stroke="%s" stroke-width=".8" fill="none"/>' % (s, cr(.16)))
for i in range(130):
    u, v = random.uniform(.02, .98), random.uniform(.04, .96); c = topt(u, v)
    g.append('<circle cx="%s" cy="%s" r="%s" fill="rgba(23,12,11,.5)"/>' % (f(c[0]), f(c[1]), f(random.uniform(.9, 1.8))))
# topical film touching the front edge, molecules on it
FU0, FU1 = .55, .86
film = []
for j in range(0, 49):
    a = math.pi * j / 48
    u = (FU0 + FU1)/2 - (FU1 - FU0)/2*math.cos(a) + .01*math.sin(j*.9)
    v = .66*math.sin(a) * (1 + .06*math.sin(j*1.3))
    film.append(topt(u, v))
g.append('<path d="%s" fill="url(#film)" stroke="rgba(227,178,172,.55)" stroke-width="1.1"/>' % P(film, True))
hl = [topt(.63 + .12*t, .42 + .14*math.sin(t*math.pi)) for t in [i/20 for i in range(21)]]
g.append('<path d="%s" stroke="rgba(255,240,236,.35)" stroke-width="2.2" fill="none" stroke-linecap="round"/>' % P(hl))
for i in range(90):
    u = random.uniform(FU0 + .02, FU1 - .02); vmax = .62*math.sin(math.pi*(u - FU0)/(FU1 - FU0))
    v = random.uniform(.02, max(.03, vmax)); c = topt(u, v)
    g.append('<circle cx="%s" cy="%s" r="%s" fill="%s"/>' % (f(c[0]), f(c[1]), f(random.uniform(1.4, 2.4)), REDL))
g.append('<path d="%s" stroke="%s" stroke-width="1.2" fill="none"/>' % (P(TOP, True), cr(.5)))

# ---------------- front face ----------------
g.append('<g clip-path="url(#fc)">')
jx = frange(X0, X1, 4)
JP = [(x, J(x)) for x in jx]
g.append('<path d="%s" fill="url(#epi)"/>' % P([(X0, Y0)] + [(X1, Y0)] + list(reversed(JP)), True))
g.append('<path d="%s" fill="url(#der)"/>' % P(JP + [(X1, YSUB), (X0, YSUB)], True))
SUBL = wav(X0, X1, YSUB, 7, .02, .4)
g.append('<path d="%s" fill="url(#sub)"/>' % P(SUBL + [(X1, YB), (X0, YB)], True))
# stratum corneum: thin stacked flattened layers
s = ''
for k in range(6):
    y = Y0 + 2 + k*SC/6
    x = X0
    while x < X1:
        L = random.uniform(26, 60); s += 'M%s %sl%s %s' % (f(x), f(y + random.uniform(-.6, .6)), f(L - 4), f(random.uniform(-.8, .8))); x += L
g.append('<path d="%s" stroke="%s" stroke-width=".9" fill="none"/>' % (s, cr(.42)))
g.append('<path d="M%d %dH%d" stroke="%s" stroke-width="1"/>' % (X0, Y0 + SC, X1, cr(.3)))
# keratinocytes: flattened near the top, rounder lower down
y = Y0 + SC + 6
row = 0
cells = ''
while y < 660:
    x = X0 + (row % 2)*7 + random.uniform(0, 4)
    while x < X1:
        jy = J(x)
        if y < jy - 13:
            t = (y - Y0 - SC) / max(1, (jy - Y0 - SC))
            rx = 8.5 - 1.5*t; ry = 2.6 + 4.6*t
            cells += '<ellipse cx="%s" cy="%s" rx="%s" ry="%s"/>' % (f(x + random.uniform(-1.5, 1.5)), f(y + random.uniform(-1, 1)), f(rx), f(ry))
        x += 17 + random.uniform(-1, 1)
    row += 1
    y += 7 + 6*min(1, (y - Y0)/80)
g.append('<g fill="rgba(248,246,236,.035)" stroke="%s" stroke-width=".75">%s</g>' % (cr(.26), cells))
# basal layer along the junction: columnar cells with nuclei
bas = ''; nuc = ''
x = X0 + 4
while x < X1 - 2:
    y = J(x); dy = J(x + 1) - J(x - 1); ang = math.degrees(math.atan2(dy, 2))
    bas += '<ellipse cx="%s" cy="%s" rx="3.6" ry="7.5" transform="rotate(%s %s %s)"/>' % (f(x), f(y - 7), f(ang), f(x), f(y - 7))
    nuc += '<circle cx="%s" cy="%s" r="1.7"/>' % (f(x), f(y - 8))
    x += 8.4
g.append('<g fill="rgba(197,133,130,.16)" stroke="%s" stroke-width=".7">%s</g><g fill="rgba(23,12,11,.75)">%s</g>' % (cr(.3), bas, nuc))
g.append('<path d="%s" stroke="%s" stroke-width="1.3" fill="none"/>' % (P(JP), cr(.55)))
# permeating molecules: in the stratum corneum under the film, a few just below, none deeper
fx0, fx1 = X0 + (X1 - X0)*FU0, X0 + (X1 - X0)*FU1
for i in range(150):
    x = random.uniform(fx0 + 8, fx1 - 8); edge = math.sin(math.pi*(x - fx0)/(fx1 - fx0))
    d = random.random()**2.2 * (SC + 10) * (0.5 + .5*edge)
    g.append('<circle cx="%s" cy="%s" r="%s" fill="%s" opacity="%.2f"/>' % (f(x), f(Y0 + 1 + d), f(random.uniform(1.1, 1.9)), REDL, max(.25, 1 - d/(SC + 12))))
# papillary dermis: loose fine fibres
s = ''
for i in range(420):
    x = random.uniform(X0, X1); y = random.uniform(J(x) + 6, YPAP + 10); L = random.uniform(8, 22); a = random.uniform(-.6, .6)
    s += 'M%s %sq%s %s %s %s' % (f(x), f(y), f(L/2), f(-3 + 6*random.random()), f(L*math.cos(a)), f(L*math.sin(a)))
g.append('<path d="%s" stroke="%s" stroke-width=".6" fill="none"/>' % (s, cr(.14)))
# capillary loops rising into each dermal papilla (the local high points of the junction)
peaks = [x for x in jx[2:-2] if J(x) < J(x - 4) and J(x) <= J(x + 4)]
loops = ''
PLX = lambda x: YPAP - 8 + 6*math.sin(x*.021 + .7)
for x in peaks:
    if any(abs(x - hx) < 40 for hx in (430, 900)): continue
    top = J(x) + random.uniform(10, 16); base = PLX(x); wd = random.uniform(4.5, 6.5)
    loops += 'M%s %s C%s %s %s %s %s %s S%s %s %s %s' % (f(x - wd), f(base), f(x - wd - 2), f(top + 24), f(x - wd), f(top), f(x), f(top), f(x + wd + 2), f(top + 24), f(x + wd), f(base))
plx = [(x, PLX(x)) for x in frange(X0, X1, 6)]
loops += P(plx)
g.append('<path d="%s" stroke="%s" stroke-width="2.1" fill="none" stroke-linecap="round"/>' % (loops, REDM))
g.append('<path d="%s" stroke="rgba(255,220,214,.35)" stroke-width=".7" fill="none"/>' % loops)
# reticular dermis: dense wavy collagen bundles
s = ''
for i in range(330):
    x = random.uniform(X0 - 40, X1); y = random.uniform(YPAP + 14, YRET - 6); L = random.uniform(60, 170); amp = random.uniform(2, 6); ph = random.uniform(0, 6)
    pts = [(x + t, y + amp*math.sin(t*.06 + ph) + t*random.uniform(-.02, .02)) for t in frange(0, L, 8)]
    s += P(pts)
g.append('<path d="%s" stroke="%s" stroke-width=".8" fill="none"/>' % (s, cr(.13)))
g.append('<path d="%s" stroke="%s" stroke-width=".9" fill="none" stroke-dasharray="2 6"/>' % (P(wav(X0, X1, YPAP, 5, .03, 1.1)), cr(.16)))

# horizontal arteriole and venule with branches up to the capillary bed
def tube(y, r, amp, ph, fill):
    top = [(x, y - r + amp*math.sin(x*.012 + ph)) for x in frange(X0, X1, 8)]
    bot = [(x, y + r + amp*math.sin(x*.012 + ph)) for x in reversed(frange(X0, X1, 8))]
    return '<path d="%s" fill="%s" stroke="%s" stroke-width="1.1"/>' % (P(top + bot, True), fill, cr(.5)) + \
           '<path d="%s" stroke="rgba(255,225,220,.28)" stroke-width="1.6" fill="none"/>' % P([(x, yy + r*.45) for x, yy in top])
for x in peaks[::3]:
    if any(abs(x - hx) < 60 for hx in (430, 520, 900, 760)): continue
    g.append('<path d="M%s 1130 C%s 1000 %s 820 %s %s" stroke="%s" stroke-width="2.6" fill="none"/>' % (f(x + 30), f(x + 34), f(x - 4), f(x), f(PLX(x)), REDM))
g.append(tube(1140, 11, 6, .3, 'url(#art)'))
g.append(tube(1172, 14, 5, 1.6, 'url(#vein)'))

ABOVE = []
# hair follicles (root sheath, shaft, bulb, sebaceous gland, arrector pili)
def follicle(sx, bx, by, w, shaft, scale):
    sy = Y0
    def lerp(t): return (sx + (bx - sx)*t, sy + (by - sy)*t)
    ang = math.atan2(by - sy, bx - sx); nx, ny = -math.sin(ang), math.cos(ang)
    out = ''
    L = [lerp(t/30) for t in range(31)]
    left = [(x + nx*w/2, y + ny*w/2) for x, y in L]; right = [(x - nx*w/2, y - ny*w/2) for x, y in L]
    out += '<path d="%s" fill="#2e1614" stroke="%s" stroke-width="1.1"/>' % (P(left + list(reversed(right)), True), cr(.5))
    inner = [(x + nx*w*.3, y + ny*w*.3) for x, y in L], [(x - nx*w*.3, y - ny*w*.3) for x, y in L]
    out += '<path d="%s%s" stroke="%s" stroke-width=".7" fill="none"/>' % (P(inner[0]), P(inner[1]), cr(.25))
    # bulb with dermal papilla
    out += '<ellipse cx="%s" cy="%s" rx="%s" ry="%s" transform="rotate(%s %s %s)" fill="#3c1b18" stroke="%s" stroke-width="1.1"/>' % (f(bx), f(by), f(w*.9), f(w*.75), f(math.degrees(ang) - 90), f(bx), f(by), cr(.55))
    out += '<path d="M%s %s q%s %s %s 0" fill="rgba(197,133,130,.35)" stroke="%s" stroke-width=".9"/>' % (f(bx - w*.35), f(by + w*.55), f(w*.35), f(-w*.9), f(w*.7), cr(.4))
    # shaft, continuing above the surface
    top = (sx - (bx - sx)*.9 - 30*scale, sy - 230*scale)
    out += '<path d="M%s %s L%s %s" stroke="#0d0605" stroke-width="%s" stroke-linecap="round"/>' % (f(bx), f(by - w*.3), f(sx), f(sy), f(shaft))
    ABOVE.append('<path d="M%s %s Q%s %s %s %s" stroke="#120807" stroke-width="%s" stroke-linecap="round" fill="none"/>' % (f(sx), f(sy), f(sx - (bx - sx)*.3), f(sy - 120*scale), f(top[0]), f(top[1]), f(shaft)))
    ABOVE.append('<path d="M%s %s Q%s %s %s %s" stroke="rgba(248,246,236,.35)" stroke-width="1" fill="none"/>' % (f(sx + shaft*.3), f(sy), f(sx - (bx - sx)*.3 + shaft*.3), f(sy - 120*scale), f(top[0] + shaft*.3), f(top[1])))
    # sebaceous gland: three lobes on the upper side, filled with cells
    gx, gy = lerp(.3)
    for k, (ox, oy, r) in enumerate(((w*.95, -4, 26*scale), (w*1.7, 26, 22*scale), (w*1.05, 40, 19*scale))):
        cx, cy = gx + ox, gy + oy
        out += '<circle cx="%s" cy="%s" r="%s" fill="#4a2420" stroke="%s" stroke-width="1"/>' % (f(cx), f(cy), f(r), cr(.45))
        for q in range(int(9*scale) + 3):
            a = random.uniform(0, 6.28); rr = random.uniform(0, r - 6)
            out += '<circle cx="%s" cy="%s" r="%s" fill="none" stroke="%s" stroke-width=".6"/>' % (f(cx + rr*math.cos(a)), f(cy + rr*math.sin(a)), f(random.uniform(3, 5)), cr(.28))
    return out
g.append(follicle(430, 545, 1090, 44, 9, 1.0))
g.append(follicle(905, 980, 980, 34, 7, .8))

# eccrine sweat gland: a coiled tube deep in the dermis and a corkscrew duct to a surface pore
cx, cy = 740, 1080
coil = []
for i in range(260):
    t = i/259*math.pi*7
    coil.append((cx + 50*math.cos(t) + 20*math.cos(3.1*t), cy + 26*math.sin(t) + 14*math.sin(2.3*t)))
g.append('<path d="%s" stroke="#7a3a33" stroke-width="11" fill="none" stroke-linejoin="round"/>' % P(coil))
g.append('<path d="%s" stroke="%s" stroke-width="1" fill="none"/>' % (P(coil), cr(.5)))
duct = [(cx - 10 + 8*math.sin((cy - 40 - y)*.06), y) for y in frange(Y0, cy - 30, 4)]
duct.reverse()
g.append('<path d="%s" stroke="#7a3a33" stroke-width="6" fill="none"/>' % P(duct))
g.append('<path d="%s" stroke="%s" stroke-width=".9" fill="none"/>' % (P(duct), cr(.45)))

# subcutaneous fat: a honeycomb of lobules divided by septa
fat = ''
y = YSUB + 26; r = 0
while y < YB + 30:
    x = X0 + (r % 2)*26 + random.uniform(-4, 4)
    while x < X1 + 30:
        rx = random.uniform(20, 27); ry = random.uniform(19, 25)
        fat += '<ellipse cx="%s" cy="%s" rx="%s" ry="%s"/>' % (f(x + random.uniform(-3, 3)), f(y + random.uniform(-3, 3)), f(rx), f(ry))
        x += 52
    y += 44; r += 1
g.append('<g fill="rgba(248,230,210,.05)" stroke="%s" stroke-width=".9">%s</g>' % (cr(.24), fat))
g.append('<path d="%s" stroke="%s" stroke-width="1.2" fill="none"/>' % (P(SUBL), cr(.4)))
g.append('</g>')   # end front clip

# front face outline and edges
g.append('<path d="M%d %dH%d" stroke="%s" stroke-width="1.4"/>' % (X0, Y0, X1, cr(.7)))
g.append('<path d="M%d %dV%d M%d %dV%d M%d %d L%d %d V%d" stroke="%s" stroke-width="1.1" fill="none"/>' % (X0, Y0, YB, X1, Y0, YB, X1, Y0, X1 + DX, Y0 + DY, YB + DY, cr(.45)))
g.append('<path d="M%d %d L%d %d H%d" stroke="%s" stroke-width="1.1" fill="none"/>' % (X0, Y0, X0 + DX, Y0 + DY, X1 + DX, cr(.4)))
g.extend(ABOVE)
g.append('</g>')   # end fade mask
g.append('</svg>')
(H / 'skin.svg').write_text(''.join(g))
print('wrote skin.svg', sum(len(x) for x in g))
