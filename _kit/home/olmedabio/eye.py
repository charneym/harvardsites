#!/usr/bin/env python3
"""Hero render for Olmeda BioSciences (HOME_BRIEF 2c: a crafted render of the real subject): an engraved sagittal
section of a human eye, cornea to optic nerve, with the aqueous humor of the anterior chamber lit as the focal
point (the fluid Olmeda's tests read) and a small uveal melanoma dome in the posterior choroid. Drawn in the logo's
tree brown (#4c3114) and wordmark sienna (#863e16) with their tints on a deep brown ground. Writes eye.svg;
render.js rasterises it to hero.webp. Deterministic (seeded)."""
import math, random, pathlib
random.seed(11)
H = pathlib.Path(__file__).resolve().parent
W, HT = 1400, 1500
CX, CY, R = 760.0, 760.0, 500.0
BONE = '#f4ead9'; TAN = '#d9a774'; SIE = '#b0622f'; SIED = '#863e16'; BR = '#4c3114'

def P(r, deg):
    a = math.radians(deg)
    return (CX + r*math.cos(a), CY + r*math.sin(a))

def d(pts, closed=False):
    s = 'M' + ' L'.join('%.1f %.1f' % p for p in pts)
    return s + (' Z' if closed else '')

def arc(r, a0, a1, n=None):
    n = n or max(8, int(abs(a1-a0)*1.2))
    return [P(r, a0 + (a1-a0)*i/n) for i in range(n+1)]

g = []
add = g.append
add('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %d %d" width="%d" height="%d">' % (W, HT, W, HT))
add('<defs>'
    '<radialGradient id="bg" cx="0.52" cy="0.5" r="0.62"><stop offset="0" stop-color="#3a2614"/><stop offset=".55" stop-color="#24170c"/><stop offset="1" stop-color="#170e07"/></radialGradient>'
    '<radialGradient id="vit" cx="0.42" cy="0.46" r="0.62"><stop offset="0" stop-color="#4a301a" stop-opacity=".9"/><stop offset=".7" stop-color="#2e1d0f" stop-opacity=".95"/><stop offset="1" stop-color="#1e1309"/></radialGradient>'
    '<radialGradient id="aq" cx="0.3" cy="0.5" r="0.75"><stop offset="0" stop-color="#ffe9c4" stop-opacity=".95"/><stop offset=".45" stop-color="#e8b47a" stop-opacity=".7"/><stop offset="1" stop-color="#b0622f" stop-opacity=".25"/></radialGradient>'
    '<radialGradient id="aqh" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#ffd9a0" stop-opacity=".42"/><stop offset="1" stop-color="#ffd9a0" stop-opacity="0"/></radialGradient>'
    '<linearGradient id="lens" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#f6e4c4" stop-opacity=".55"/><stop offset=".5" stop-color="#d9a774" stop-opacity=".32"/><stop offset="1" stop-color="#8a5a32" stop-opacity=".3"/></linearGradient>'
    '<radialGradient id="tum" cx="0.5" cy="0.8" r="0.8"><stop offset="0" stop-color="#5a2a10"/><stop offset="1" stop-color="#2a1408"/></radialGradient>'
    '<clipPath id="globe"><circle cx="%.1f" cy="%.1f" r="%.1f"/></clipPath>'
    '</defs>' % (CX, CY, R*.955))
add('<rect width="%d" height="%d" fill="url(#bg)"/>' % (W, HT))

# --- geometry -------------------------------------------------------------------------------
LA = 31.0                               # limbus half-angle from the front (180 deg)
LIM_T, LIM_B = P(R, 180+LA), P(R, 180-LA)
# cornea: circle through the limbus points, apex 1.13R in front of the centre
apx = CX - 1.13*R
lx, ly = LIM_T[0], LIM_T[1]-CY
x0 = ((apx-CX)**2 - (lx-CX)**2 - ly**2) / (2*((apx-CX)-(lx-CX))) + CX
cr = abs(apx - x0)
def cornea_pts(off=0.0, n=60):
    a0 = math.degrees(math.atan2(LIM_T[1]-CY, LIM_T[0]-x0)); a1 = math.degrees(math.atan2(LIM_B[1]-CY, LIM_B[0]-x0))
    a0 %= 360; a1 %= 360
    out = []
    for i in range(n+1):
        a = math.radians(a0 + (a1-a0)*i/n)
        out.append((x0 + (cr-off)*math.cos(a), CY + (cr-off)*math.sin(a)))
    return out
COR = cornea_pts()
COR_IN = cornea_pts(18)

# sclera outer and inner, choroid, retina radii
RS_O, RS_I, RC_I, RR_I = R, R*.952, R*.925, R*.9
LX, LRX, LRY = CX - R*.665, R*.15, R*.37
ORA = 52.0                              # ora serrata half-angle from the front
SCL_A0, SCL_A1 = -180+LA, 180-LA        # sclera arc, measured through 0 (the back)

# --- vitreous body (fills the globe behind the lens) -----------------------------------------
add('<circle cx="%.1f" cy="%.1f" r="%.1f" fill="url(#vit)"/>' % (CX, CY, RR_I))
hat = []
for i in range(-120, 120):
    x = CX - R + i*7.0
    hat.append('M%.1f %.1fl%.1f %.1f' % (x, CY - R, 2*R, 2*R))
add('<mask id="hm"><rect x="0" y="0" width="%d" height="%d" fill="black"/><circle cx="%.1f" cy="%.1f" r="%.1f" fill="url(#hmg)"/></mask>' % (W, HT, CX, CY, RR_I))
add('<defs><radialGradient id="hmg" cx="0.78" cy="0.82" r="0.9"><stop offset="0" stop-color="#fff"/><stop offset=".55" stop-color="#777"/><stop offset="1" stop-color="#000"/></radialGradient></defs>')
add('<g mask="url(#hm)"><path d="%s" stroke="#120a04" stroke-opacity=".55" stroke-width="1.6"/></g>' % ''.join(hat))
# faint vitreous wisps
wisps = []
for i in range(46):
    y = CY - R*.78 + i*R*.034
    x1 = CX - R*.42 + random.uniform(-20, 20); x2 = CX + R*.7 + random.uniform(-30, 30)
    pts = []
    for k in range(18):
        t = k/17; x = x1 + (x2-x1)*t
        yy = y + math.sin(t*5.5 + i*.7)*7 + math.sin(t*13 + i)*2
        if (x-CX)**2 + (yy-CY)**2 < (RR_I-26)**2: pts.append((x, yy))
    if len(pts) > 3: wisps.append(d(pts))
add('<path d="%s" fill="none" stroke="%s" stroke-opacity=".07" stroke-width="1"/>' % (' '.join(wisps), TAN))

# light entering through the cornea and lens, converging on the fovea (behind the vitreous wisps)
fx, fy = P(RR_I-4, 0)
lx0 = LX + LRX*.6
beam = [(lx0, CY - LRY*.62), (fx, fy - 2), (fx, fy + 2), (lx0, CY + LRY*.62)]
add('<defs><linearGradient id="bm" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ffdca8" stop-opacity=".26"/><stop offset=".85" stop-color="#ffdca8" stop-opacity=".06"/><stop offset="1" stop-color="#ffdca8" stop-opacity=".5"/></linearGradient></defs>')
add('<path d="%s" fill="url(#bm)"/>' % d(beam, True))
rays = []
for k in range(-4, 5):
    y0 = CY + k*LRY*.15
    rays.append('M%.1f %.1fL%.1f %.1f' % (lx0, y0, fx, fy))
add('<path d="%s" stroke="#ffe3b8" stroke-opacity=".16" stroke-width=".8"/>' % ''.join(rays))
add('<circle cx="%.1f" cy="%.1f" r="9" fill="#ffe3b8" fill-opacity=".55"/><circle cx="%.1f" cy="%.1f" r="26" fill="#ffd9a0" fill-opacity=".12"/>' % (fx, fy, fx, fy))
# --- sclera: a band with tangential fibre hatching ------------------------------------------
band = arc(RS_O, SCL_A0, SCL_A1, 240) + arc(RS_I, SCL_A1, SCL_A0, 240)
add('<path d="%s" fill="#3b2817" stroke="none"/>' % d(band, True))
fib = []
for i in range(900):
    a = random.uniform(SCL_A0+1, SCL_A1-1); r = random.uniform(RS_I+2, RS_O-2); L = random.uniform(7, 22)
    p = P(r, a); t = math.radians(a+90)
    fib.append('M%.1f %.1fl%.1f %.1f' % (p[0], p[1], L*math.cos(t), L*math.sin(t)))
add('<path d="%s" stroke="%s" stroke-opacity=".38" stroke-width=".9" fill="none"/>' % (''.join(fib), BONE))
add('<path d="%s" fill="none" stroke="%s" stroke-opacity=".85" stroke-width="2"/>' % (d(arc(RS_O, SCL_A0, SCL_A1, 300)), BONE))
add('<path d="%s" fill="none" stroke="%s" stroke-opacity=".45" stroke-width="1.1"/>' % (d(arc(RS_I, SCL_A0, SCL_A1, 300)), BONE))

# --- choroid: vascular layer in sienna, from the ora round the back --------------------------
CH_A0, CH_A1 = -180+ORA-6, 180-ORA+6
band = arc(RS_I, CH_A0, CH_A1, 240) + arc(RC_I, CH_A1, CH_A0, 240)
add('<path d="%s" fill="%s" fill-opacity=".85"/>' % (d(band, True), SIED))
ves = []
for i in range(520):
    a = random.uniform(CH_A0, CH_A1); r = random.uniform(RC_I+1.5, RS_I-1.5)
    p = P(r, a); t = math.radians(a+90+random.uniform(-25, 25)); L = random.uniform(4, 11)
    ves.append('M%.1f %.1fl%.1f %.1f' % (p[0], p[1], L*math.cos(t), L*math.sin(t)))
add('<path d="%s" stroke="%s" stroke-opacity=".55" stroke-width="1" fill="none" stroke-linecap="round"/>' % (''.join(ves), '#e09a62'))

# --- retina: fine radial striations, pale ----------------------------------------------------
RT_A0, RT_A1 = -180+ORA, 180-ORA
band = arc(RC_I, RT_A0, RT_A1, 240) + arc(RR_I, RT_A1, RT_A0, 240)
add('<path d="%s" fill="#6b4a2c" fill-opacity=".75"/>' % d(band, True))
st = []
a = RT_A0
while a < RT_A1:
    p0 = P(RR_I+1, a); p1 = P(RC_I-1, a)
    st.append('M%.1f %.1fL%.1f %.1f' % (p0[0], p0[1], p1[0], p1[1])); a += .55
add('<path d="%s" stroke="%s" stroke-opacity=".32" stroke-width=".7"/>' % (''.join(st), BONE))
add('<path d="%s" fill="none" stroke="%s" stroke-opacity=".6" stroke-width="1"/>' % (d(arc(RR_I, RT_A0, RT_A1, 300)), BONE))
# fovea: a gentle dip on the visual axis at the back
fv = P(RR_I, 0)
add('<path d="M%.1f %.1fq-6 14 0 28" fill="none" stroke="%s" stroke-opacity=".7" stroke-width="1.2"/>' % (fv[0]-2, fv[1]-14, BONE))

# --- optic nerve: leaves the back, slightly nasal (below the axis here) ----------------------
ON_A = 14.0
on0, on1 = P(R*.9, ON_A-5.2), P(R*.9, ON_A+5.2)
o0, o1 = P(R, ON_A-6.3), P(R, ON_A+6.3)
ang = math.radians(ON_A); ux, uy = math.cos(ang), math.sin(ang); vx, vy = -uy, ux
Lon = 330
def along(p, s, w=0): return (p[0]+ux*s+vx*w, p[1]+uy*s+vy*w)
mid = P(R*.95, ON_A)
sheath = [along(o0, 0), along(o0, Lon, -14), along(o1, Lon, 14), along(o1, 0)]
add('<path d="%s" fill="#3b2817" stroke="%s" stroke-opacity=".8" stroke-width="1.8"/>' % (d(sheath, True), BONE))
core = [along(on0, 0), along(on0, Lon, -4), along(on1, Lon, 4), along(on1, 0)]
add('<path d="%s" fill="#5a3c22"/>' % d(core, True))
fas = []
for k in range(-6, 7):
    pts = [along(mid, s, k*7.2 + math.sin(s*.03+k)*1.8) for s in range(-10, Lon+1, 10)]
    fas.append(d(pts))
add('<path d="%s" fill="none" stroke="%s" stroke-opacity=".38" stroke-width=".8"/>' % (' '.join(fas), BONE))
# central retinal vessels: branch out along the retina from the disc
vs = []
for sgn in (-1, 1):
    for k, (span, bend) in enumerate(((44, .0), (70, .015), (96, .03))):
        pts = []
        for i in range(30):
            t = i/29; aa = ON_A + sgn*(4 + span*t)
            pts.append(P(RR_I - 3 - 2.2*math.sin(t*math.pi*(2+k))*(1-t), aa))
        vs.append(d(pts))
add('<path d="%s" fill="none" stroke="%s" stroke-opacity=".7" stroke-width="1.6" stroke-linecap="round"/>' % (' '.join(vs), '#e09a62'))
add('<path d="%s" fill="none" stroke="%s" stroke-width="1.8" stroke-linecap="round"/>' % (d([along(mid, -6), along(mid, Lon)]), '#e09a62'))

# --- uveal melanoma: a small dome rising from the choroid, upper posterior wall -------------
TA, TW, TH = -42.0, 15.0, 0.17
dome = []
for i in range(41):
    t = i/40; aa = TA - TW + 2*TW*t
    h = math.sin(t*math.pi)**.8
    dome.append(P(RC_I - TH*R*h, aa))
base = arc(RS_I-1, TA+TW, TA-TW, 30)
add('<path d="%s" fill="url(#tum)" stroke="%s" stroke-opacity=".8" stroke-width="1.4"/>' % (d(dome+base, True), TAN))
mot = []
for i in range(160):
    t = random.random(); aa = TA - TW + 2*TW*t; hmax = TH*R*math.sin(t*math.pi)**.8
    rr = RC_I - random.uniform(0, hmax*.92); p = P(rr, aa)
    tt = math.radians(aa + random.uniform(60, 120)); L = random.uniform(3, 8)
    mot.append('M%.1f %.1fl%.1f %.1f' % (p[0], p[1], L*math.cos(tt), L*math.sin(tt)))
add('<path d="%s" stroke="%s" stroke-opacity=".5" stroke-width=".9" stroke-linecap="round"/>' % (''.join(mot), '#d98a50'))
# retina draped over the dome
drape = [P(RC_I - TH*R*math.sin((i/40)*math.pi)**.8 - 3, TA - TW - 3 + (2*TW+6)*i/40) for i in range(41)]
add('<path d="%s" fill="none" stroke="%s" stroke-opacity=".7" stroke-width="1.1"/>' % (d(drape), BONE))

# --- ciliary body: a wedge behind the limbus with folds -------------------------------------
cil = []
for sgn in (-1, 1):
    a_l = 180 + sgn*(-LA)  # limbus angle (180-LA for sgn=1 => bottom)
    a_o = 180 - sgn*(ORA)
    outer = arc(RS_I, 180 - sgn*LA, 180 - sgn*ORA, 24)
    tip = P(RS_I - R*.13, 180 - sgn*(LA+5))
    poly = outer + [P(RC_I, 180 - sgn*ORA), tip]
    add('<path d="%s" fill="#6b3a1c" stroke="%s" stroke-opacity=".7" stroke-width="1.2"/>' % (d(poly, True), TAN))
    for k in range(8):
        aa = 180 - sgn*(LA + 2 + k*2.4); p0 = P(RS_I-4, aa); p1 = P(RS_I - R*(.11 - k*.008), aa - sgn*1.5)
        cil.append('M%.1f %.1fQ%.1f %.1f %.1f %.1f' % (p0[0], p0[1], (p0[0]+p1[0])/2 + 6, (p0[1]+p1[1])/2, p1[0], p1[1]))
add('<path d="%s" fill="none" stroke="%s" stroke-opacity=".45" stroke-width=".9"/>' % (''.join(cil), BONE))

# --- lens: biconvex, behind the iris, with lamellae -----------------------------------------
LX, LRX, LRY = CX - R*.665, R*.15, R*.37
def lens(rx, ry, n=90, f=1.0):
    pts = []
    for i in range(n):
        t = 2*math.pi*i/n; c, s = math.cos(t), math.sin(t)
        k = .82 if c < 0 else 1.0       # flatter front, rounder back
        pts.append((LX + rx*c*k*f, CY + ry*s*f))
    return pts
add('<path d="%s" fill="url(#lens)" stroke="%s" stroke-opacity=".9" stroke-width="1.6"/>' % (d(lens(LRX, LRY), True), BONE))
lam = ' '.join(d(lens(LRX, LRY, 90, f), True) for f in (.86, .72, .58, .44, .3))
add('<path d="%s" fill="none" stroke="%s" stroke-opacity=".22" stroke-width=".8"/>' % (lam, BONE))
# zonules: fine fibres from the ciliary processes to the lens equator
zn = []
for sgn in (-1, 1):
    tip = P(RS_I - R*.13, 180 - sgn*(LA+5))
    for k in range(9):
        q = (LX + LRX*.12*(k-4)/4, CY + sgn*LRY*.985)
        zn.append('M%.1f %.1fL%.1f %.1f' % (tip[0] - 3 + k*1.4, tip[1] - sgn*k*1.3, q[0], q[1]))
add('<path d="%s" stroke="%s" stroke-opacity=".35" stroke-width=".6"/>' % (''.join(zn), BONE))

# --- anterior chamber: the aqueous humor, lit ------------------------------------------------
IRX = LX - LRX*.82 - 6                  # iris plane, resting on the lens front
PUP = R*.12
chamber = COR_IN + [(IRX - 2, CY + R*.47), (IRX, CY + PUP), (LX - LRX*.82, CY), (IRX, CY - PUP), (IRX - 2, CY - R*.47)]
add('<path d="%s" fill="url(#aq)"/>' % d(chamber, True))
add('<ellipse cx="%.1f" cy="%.1f" rx="%.1f" ry="%.1f" fill="url(#aqh)"/>' % ((apx + IRX)/2, CY, R*.42, R*.62))
# fine flow lines in the chamber: the aqueous circulates up the warm iris face and down the cool cornea
fl = []
for k in range(1, 6):
    f = k/6.0
    pts = []
    for i in range(41):
        t = -1 + 2*i/40
        y = CY + t*R*.44*(1-.12*f)
        xc = x0 + math.sqrt(max(0, (cr-18)**2 - (y-CY)**2))*-1
        x = IRX - 6 + (xc - IRX + 6)*f
        pts.append((x, y))
    fl.append(d(pts))
add('<path d="%s" fill="none" stroke="%s" stroke-opacity=".28" stroke-width=".8"/>' % (' '.join(fl), '#fff3dd'))

# --- iris: pigmented diaphragm with radial hatching ----------------------------------------
for sgn in (-1, 1):
    root = P(RS_I - R*.06, 180 - sgn*(LA+1.5))
    pts_f, pts_b = [], []
    for i in range(31):
        t = i/30
        y = root[1] + (CY + sgn*PUP - root[1])*t
        th = 30*(1 - .5*t) + 6*math.sin(t*math.pi*3)**2
        x = IRX - 2 + (root[0] - IRX + 2)*(1-t)**2*.3
        pts_f.append((x - th*.55, y)); pts_b.append((x + th*.45, y))
    add('<path d="%s" fill="%s" stroke="%s" stroke-opacity=".85" stroke-width="1.2"/>' % (d(pts_f + pts_b[::-1], True), '#5a2a10', TAN))
    hz = []
    for i in range(0, 31, 1):
        a, b = pts_f[i], pts_b[i]
        hz.append('M%.1f %.1fL%.1f %.1f' % (a[0], a[1], b[0], b[1]+sgn*2))
    add('<path d="%s" stroke="%s" stroke-opacity=".35" stroke-width=".8"/>' % (''.join(hz), '#e09a62'))

# --- cornea: layered, clear, with a bright rim ----------------------------------------------
cor_band = COR + COR_IN[::-1]
add('<path d="%s" fill="%s" fill-opacity=".14"/>' % (d(cor_band, True), BONE))
add('<path d="%s" fill="none" stroke="%s" stroke-width="2.4"/>' % (d(COR), BONE))
add('<path d="%s" fill="none" stroke="%s" stroke-opacity=".7" stroke-width="1.1"/>' % (d(COR_IN), BONE))
lay = ' '.join(d(cornea_pts(o)) for o in (5, 9, 13))
add('<path d="%s" fill="none" stroke="%s" stroke-opacity=".2" stroke-width=".7"/>' % (lay, BONE))
# specular highlight on the cornea
hl = cornea_pts(-3, 60)[14:26]
add('<path d="%s" fill="none" stroke="#fff6e6" stroke-opacity=".85" stroke-width="3.2" stroke-linecap="round"/>' % d(hl))

# --- conjunctiva / eyelid hint: none (keeps the section clean) -------------------------------
# --- rim light: a warm glow behind the globe edge on the upper back --------------------------

add('</svg>')
(H / 'eye.svg').write_text('\n'.join(g))
print('wrote eye.svg')
