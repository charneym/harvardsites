#!/usr/bin/env python3
"""Rescue Biomedical logo redrawn as clean filled SVG paths from their logo PNG (logo0711.png, 744x283): the lifebuoy mark
(ring r 41-84, four 14px slots on the diagonals, amber #FBA919 to red #EF3E36 top to bottom), RESCUE in black and
Biomedical in orange #F15922, set in Montserrat SemiBold and Poppins and converted to outlines, fitted to the PNG's measured letter boxes."""
import math, pathlib, sys
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
H = pathlib.Path(__file__).resolve().parent
def text_path(font, s, x0, x1, base, cap, capglyph='H'):
    f = TTFont(font); gs = f.getGlyphSet(); cmap = f.getBestCmap(); hm = f['hmtx']
    from fontTools.pens.boundsPen import BoundsPen
    bp = BoundsPen(gs); gs[cmap[ord(capglyph)]].draw(bp); ch = bp.bounds[3]
    k = cap/ch
    names = [cmap[ord(c)] for c in s]
    def bounds(n):
        b = BoundsPen(gs); gs[n].draw(b); return b.bounds
    adv = [hm[n][0] for n in names]
    lsb0 = bounds(names[0])[0]; last = bounds(names[-1])
    nat = sum(adv[:-1]) + last[2] - lsb0
    tr = ((x1-x0)/k - nat)/(len(s)-1)
    d = []; x = -lsb0
    for n, a in zip(names, adv):
        sp = SVGPathPen(gs)
        tp = TransformPen(sp, (k, 0, 0, -k, x0 + x*k, base))
        gs[n].draw(tp); d.append(sp.getCommands()); x += a + tr
    return ' '.join(d), tr/ (cap/k)
def seg(cx, cy, ri, ro, a0, a1, h=7):
    # annular segment between the slot centred on angle a0 and the slot on a1 (degrees, ccw, y up)
    def pt(r, a, side):
        th = math.radians(a); d = (math.cos(th), -math.sin(th)); n = (-math.sin(th)*side, -math.cos(th)*side)
        t = math.sqrt(r*r-h*h); return (cx+d[0]*t+n[0]*h, cy+d[1]*t+n[1]*h)
    p1 = pt(ro, a0, 1); p2 = pt(ro, a1, -1); p3 = pt(ri, a1, -1); p4 = pt(ri, a0, 1)
    f = lambda p: '%.2f %.2f' % p
    return 'M%sA%g %g 0 0 0 %sL%sA%g %g 0 0 1 %sZ' % (f(p1), ro, ro, f(p2), f(p3), ri, ri, f(p4))
cx, cy, ri, ro = 147, 145.5, 41, 84
mark = ''.join(seg(cx, cy, ri, ro, a, a+90) for a in (45, 135, 225, 315))
font = str(H/'src/M600.ttf')
r, trr = text_path(font, 'RESCUE', 252, 672, 145.5, 66.5)
b, trb = text_path(str(H/'src/P500.ttf'), 'Biomedical', 251, 671, 216.5, 60.5, 'l')
vb = (56, 55, 624, 182)
svg = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="%d %d %d %d" class="lg-svg" role="img" aria-label="Rescue Biomedical">'
  '<defs><linearGradient id="rbG" x1="0" y1="61" x2="0" y2="230" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FBA919"/><stop offset="1" stop-color="#EF3E36"/></linearGradient></defs>'
  '<path fill="url(#rbG)" d="%s"/><path class="lgR" fill="#111" d="%s"/><path fill="#F15922" d="%s"/></svg>') % (vb + (mark, r, b))
(H/'logo.svg').write_text(svg)
print('tracking em', round(trr, 3), round(trb, 3), len(svg))
