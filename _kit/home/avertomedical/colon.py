#!/usr/bin/env python3
"""Hero render for Averto Medical: an engraved frontal view of the large intestine (caecum and appendix, ascending,
transverse, descending and sigmoid colon, rectum) with the ColoSeal(TM) ICD in place, as the trial registry describes it:
inserted transanally, its anchor deployed in healthy bowel above the colorectal anastomosis (the stapled join), its
sheath carrying fecal flow past the anastomosis and out. Drawn in Averto's logo graphite (#666666) and gold
(#ac9200 -> #f2be00). Writes colon.svg; render.js rasterises it. Deterministic."""
import math, pathlib
H = pathlib.Path(__file__).resolve().parent
W, HT = 1400, 1500
BG = '#141414'

def catmull(pts, n=40):
    P = [pts[0]] + pts + [pts[-1]]; out = []
    for i in range(len(pts) - 1):
        p0, p1, p2, p3 = P[i], P[i+1], P[i+2], P[i+3]
        for k in range(n):
            t = k / n; t2 = t*t; t3 = t2*t
            out.append(tuple(0.5*((2*p1[j]) + (-p0[j]+p2[j])*t + (2*p0[j]-5*p1[j]+4*p2[j]-p3[j])*t2 + (-p0[j]+3*p1[j]-3*p2[j]+p3[j])*t3) for j in range(2)))
    out.append(pts[-1]); return out

def resample(pts, step):
    L = [0.0]
    for a, b in zip(pts, pts[1:]): L.append(L[-1] + math.dist(a, b))
    out = []; s = 0.0; i = 0
    while s <= L[-1]:
        while L[i+1] < s: i += 1
        a, b = pts[i], pts[i+1]; f = (s - L[i]) / max(1e-9, L[i+1] - L[i])
        out.append((a[0] + (b[0]-a[0])*f, a[1] + (b[1]-a[1])*f)); s += step
    return out, L[-1]

# centreline: caecum (viewer's left) -> ascending -> hepatic flexure -> transverse -> splenic flexure -> descending -> sigmoid -> rectum -> anus
CTRL = [(352,1040),(322,920),(302,760),(300,560),(318,410),(372,306),(480,282),(606,344),(742,390),(880,372),(990,316),(1072,262),(1130,290),(1148,420),(1142,640),(1126,820),(1092,950),(1016,1036),(910,1062),(812,1030),(738,1018),(694,1068),(690,1150),(700,1260),(700,1352),(700,1420)]
C, LEN = resample(catmull(CTRL, 40), 2.0)
N = len(C)
def tang(i):
    a = C[max(0, i-2)]; b = C[min(N-1, i+2)]; L = math.dist(a, b) or 1
    return ((b[0]-a[0])/L, (b[1]-a[1])/L)
def s_at(i): return i * 2.0
S_RECT = LEN - 300   # start of the rectum (no haustra)
S_ANAST = LEN - 236  # the colorectal anastomosis (staple line)
S_ANCH = S_ANAST - 470  # the anchor sits in healthy bowel well above it
P_H = 50.0           # haustral spacing
def ph(s): return s/P_H + .18*math.sin(s/173.0) + .11*math.sin(s/61.0)

def radius(s):
    if s < 140: base = 64 + 10*(1 - s/140)  # caecum, a little fuller
    else: base = 64 if s < S_RECT - 200 else 64 - 8*min(1, (s-(S_RECT-200))/200)
    if s > S_RECT:  # rectal ampulla, then the anal canal narrows
        u = (s - S_RECT) / (LEN - S_RECT)
        base = 56 + 8*math.sin(min(1, u/.7)*math.pi) if u < .7 else 56*(1-(u-.7)/.3) + 22*((u-.7)/.3)
    hz = 0.0 if s > S_RECT - 20 or s < 40 else abs(math.sin(math.pi*ph(s)))**0.55
    return base*(0.86 + 0.14*hz)

def side(sign, sc=1.0, sh=0.0):
    out = []
    for i, p in enumerate(C):
        tx, ty = tang(i); nx, ny = -ty, tx; r = radius(s_at(i))*sc
        out.append((p[0] + nx*(sign*r + sh*r), p[1] + ny*(sign*r + sh*r)))
    return out
def pl(pts): return 'M' + ' L'.join('%.1f %.1f' % p for p in pts)
def poly(a, b): return pl(a) + ' L' + ' L'.join('%.1f %.1f' % p for p in reversed(b)) + ' Z'

L1, R1 = side(1), side(-1)
g = ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %d %d" width="%d" height="%d">' % (W, HT, W, HT)]
g.append('<defs>'
 '<radialGradient id="glow" cx=".55" cy=".5" r=".62"><stop offset="0" stop-color="#3b3628" stop-opacity=".55"/><stop offset="1" stop-color="#141414" stop-opacity="0"/></radialGradient>'
 '<linearGradient id="gold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8f6a00"/><stop offset=".5" stop-color="#d9a700"/><stop offset="1" stop-color="#f6c800"/></linearGradient>'
 '<linearGradient id="body" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4a4a4a"/><stop offset="1" stop-color="#2c2c2c"/></linearGradient>'
 '<filter id="soft" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="9"/></filter>'
 '<filter id="soft2" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="3"/></filter>'
 '</defs>')
g.append('<rect width="%d" height="%d" fill="%s"/><rect width="%d" height="%d" fill="url(#glow)"/>' % (W, HT, BG, W, HT))
# a faint engraved plate behind: fine horizontal hatching, the drafting convention for a background plane
g.append('<g stroke="#2a2a2a" stroke-width="1">' + ''.join('<path d="M0 %d H%d"/>' % (y, W) for y in range(12, HT, 9)) + '</g>')
# appendix from the caecum
AP = catmull([(366,1050),(384,1112),(372,1176),(336,1214)], 24)
g.append('<path d="%s" fill="none" stroke="#2f2f2f" stroke-width="20" stroke-linecap="round"/>' % pl(AP))
g.append('<path d="%s" fill="none" stroke="#efece4" stroke-opacity=".7" stroke-width="1.6" stroke-linecap="round"/>' % pl(AP))
# shadow, body, inner shading
g.append('<path d="%s" fill="#000" opacity=".55" filter="url(#soft)" transform="translate(10 16)"/>' % poly(L1, R1))
g.append('<path d="%s" fill="url(#body)"/>' % poly(L1, R1))
g.append('<path d="%s" fill="#5c5c5c" opacity=".55" filter="url(#soft)"/>' % poly(side(1, .62, .2), side(-1, .18, .2)))
g.append('<path d="%s" fill="#0d0d0d" opacity=".45" filter="url(#soft)"/>' % poly(side(1, -.55, 0), side(-1, .95, 0)))
# haustral folds: crescents across the tube at each constriction (semilunar folds), bowed toward the flow
folds = []
for i in range(N):
    s = s_at(i)
    if s < 70 or s > S_RECT - 30: continue
    if math.floor(ph(s)) != math.floor(ph(s+2.0)):
        tx, ty = tang(i); nx, ny = -ty, tx; r = radius(s)*.97; p = C[i]
        a = (p[0]+nx*r, p[1]+ny*r); b = (p[0]-nx*r, p[1]-ny*r); m = (p[0]+tx*r*.42, p[1]+ty*r*.42)
        folds.append('M%.1f %.1fQ%.1f %.1f %.1f %.1f' % (a[0], a[1], m[0], m[1], b[0], b[1]))
        m2 = (p[0]+tx*r*.3, p[1]+ty*r*.3)
        folds.append('M%.1f %.1fQ%.1f %.1f %.1f %.1f' % (a[0]-tx*3, a[1]-ty*3, m2[0]-tx*3, m2[1]-ty*3, b[0]-tx*3, b[1]-ty*3))
g.append('<path d="%s" fill="none" stroke="#d8d4c8" stroke-opacity=".3" stroke-width="1.1" stroke-linecap="round"/>' % ' '.join(folds[0::2]))
g.append('<path d="%s" fill="none" stroke="#000" stroke-opacity=".28" stroke-width="3" filter="url(#soft2)" stroke-linecap="round"/>' % ' '.join(folds[1::2]))
# caecum: the blind pouch rounds off the start of the colon
tx0, ty0 = tang(0); r0 = radius(0)
CAP = 'M%.1f %.1fA%.1f %.1f 0 0 1 %.1f %.1f' % (L1[0][0], L1[0][1], r0, r0, R1[0][0], R1[0][1])
CAPZ = CAP + 'Z'
# taenia coli: a longitudinal band along the colon, stopping where the rectum begins
k = int((S_RECT - 40) / 2.0)
g.append('<path d="%s" fill="none" stroke="#e9e4d6" stroke-opacity=".22" stroke-width="5"/>' % pl(side(1, .34)[18:k]))
g.append('<path d="%s" fill="none" stroke="#e9e4d6" stroke-opacity=".35" stroke-width="1"/>' % pl(side(1, .34)[18:k]))
# wall outline (engraved), with a fine second line inside
g.append('<path d="%s" fill="url(#body)"/>' % CAPZ)
g.append('<path d="%s M%s M%s" fill="none" stroke="#efece4" stroke-opacity=".88" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>' % (pl(L1), pl(R1)[1:], CAP[1:]))
# engraved shading: fine hatching across the shadow side of the tube
hx = []
for i in range(0, N, 3):
    tx, ty = tang(i); nx, ny = -ty, tx; r = radius(s_at(i)); p = C[i]
    hx.append('M%.1f %.1fL%.1f %.1f' % (p[0]-nx*r*.55, p[1]-ny*r*.55, p[0]-nx*r*.95, p[1]-ny*r*.95))
g.append('<path d="%s" fill="none" stroke="#000" stroke-opacity=".32" stroke-width="1"/>' % ' '.join(hx))
# rim light from the upper left, in the logo gold
g.append('<path d="%s" fill="none" stroke="#f2be00" stroke-opacity=".22" stroke-width="3" filter="url(#soft2)"/>' % pl(side(1, .8)))
g.append('<path d="%s M%s" fill="none" stroke="#efece4" stroke-opacity=".28" stroke-width="1"/>' % (pl(side(1, .9)), pl(side(-1, .9))[1:]))
# rectum: fine longitudinal muscle lines
ir = int(S_RECT/2.0)
for f in (-.5, 0, .5):
    g.append('<path d="%s" fill="none" stroke="#efece4" stroke-opacity=".16" stroke-width="1"/>' % pl(side(1, 1, f-1)[ir:]))

# ===== the device =====
ia = int(S_ANCH/2.0); ie = N - 1
def strip(i0, i1, sc):
    a = []; b = []
    for i in range(i0, i1+1):
        tx, ty = tang(i); nx, ny = -ty, tx; r = radius(s_at(i))*sc; p = C[i]
        a.append((p[0]+nx*r, p[1]+ny*r)); b.append((p[0]-nx*r, p[1]-ny*r))
    return a, b
# sheath: a translucent sleeve from the anchor, through the anastomosis and out of the anal canal
sa, sb = strip(ia, ie, .5)
# carry it a little past the anus, narrowing
tx, ty = tang(ie); ex = C[ie]
tail = [(ex[0]+tx*d, ex[1]+ty*d) for d in range(0, 90, 2)]
g.append('<path d="%s" fill="#efe2b0" fill-opacity=".24" stroke="none"/>' % poly(sa, sb))
g.append('<path d="%s M%s" fill="none" stroke="#f1d67a" stroke-opacity=".85" stroke-width="1.5"/>' % (pl(sa), pl(sb)[1:]))
g.append('<path d="%s" fill="none" stroke="#f1d67a" stroke-opacity=".55" stroke-width="15" stroke-linecap="butt"/>' % pl(tail))
g.append('<path d="%s" fill="none" stroke="#141414" stroke-width="12"/>' % pl(tail))
g.append('<path d="%s" fill="none" stroke="#f1d67a" stroke-opacity=".9" stroke-width="1.2"/>' % pl([(p[0]+7, p[1]) for p in tail]))
g.append('<path d="%s" fill="none" stroke="#f1d67a" stroke-opacity=".9" stroke-width="1.2"/>' % pl([(p[0]-7, p[1]) for p in tail]))
# fine flow lines inside the sheath
for f in (-.22, .22):
    g.append('<path d="%s" fill="none" stroke="#f6e7b0" stroke-opacity=".22" stroke-width="1" stroke-dasharray="10 9"/>' % pl(side(1, .5, f-.5)[ia+20:ie]))
# anchor: a gold cuff seated against the healthy colon wall, with circumferential ribs
an0, an1 = ia - 28, ia + 28
aa, ab = strip(an0, an1, .9)
g.append('<path d="%s" fill="#f2be00" opacity=".35" filter="url(#soft)"/>' % poly(aa, ab))
g.append('<path d="%s" fill="url(#gold)" fill-opacity=".86" stroke="#ffe27a" stroke-width="1.2"/>' % poly(aa, ab))
ribs = []
for i in range(an0 + 4, an1 - 3, 4):
    tx, ty = tang(i); nx, ny = -ty, tx; r = radius(s_at(i))*.88; p = C[i]
    ribs.append('M%.1f %.1fQ%.1f %.1f %.1f %.1f' % (p[0]+nx*r, p[1]+ny*r, p[0]+tx*r*.25, p[1]+ty*r*.25, p[0]-nx*r, p[1]-ny*r))
g.append('<path d="%s" fill="none" stroke="#5a4300" stroke-opacity=".55" stroke-width="1.2"/>' % ' '.join(ribs))
# highlight across the cuff
ha, _ = strip(an0 + 6, an1 - 6, .55)
g.append('<path d="%s" fill="none" stroke="#fff3c4" stroke-opacity=".75" stroke-width="2.4" stroke-linecap="round" filter="url(#soft2)"/>' % pl(ha))
# anastomosis: the circular staple line, drawn as a ring of staples across the bowel
ix = int(S_ANAST/2.0); tx, ty = tang(ix); nx, ny = -ty, tx; p = C[ix]; r = radius(S_ANAST)
st = []
for k in range(15):
    u = -1 + 2*(k+.5)/15; q = (p[0]+nx*r*u + tx*r*.18*(1-u*u), p[1]+ny*r*u + ty*r*.18*(1-u*u))
    st.append('M%.1f %.1fl%.1f %.1f' % (q[0]-tx*4, q[1]-ty*4, tx*8, ty*8))
g.append('<path d="M%.1f %.1fQ%.1f %.1f %.1f %.1f" fill="none" stroke="#efece4" stroke-opacity=".5" stroke-width="1"/>' % (p[0]+nx*r, p[1]+ny*r, p[0]+tx*r*.36, p[1]+ty*r*.36, p[0]-nx*r, p[1]-ny*r))
g.append('<path d="%s" fill="none" stroke="#efece4" stroke-width="2" stroke-linecap="round"/>' % ' '.join(st))
g.append('</svg>')
(H / 'colon.svg').write_text('\n'.join(g))
print('anchor', C[ia], 'anast', C[ix], 'len', LEN)
