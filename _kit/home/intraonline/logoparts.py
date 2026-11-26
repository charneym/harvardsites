#!/usr/bin/env python3
"""intra special catheters lockup as filled SVG paths (DR2), redrawn from the firm's logo (intra-online.de/files/theme/images/logo.png,
190x90): the red wordmark "intra" (#d70826) with the red drop and its white highlight, and the near-black descriptor
"special catheters" (#1d1d1b), set in Open Sans 700 / 300 and fitted to the logo's own measured boxes (logo units):
intra x 0-129, x-height 23-57; drop x 145-189, y 1-60; descriptor x 0-188, y 66-89. Writes logo_parts.txt."""
import pathlib
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen
H = pathlib.Path(__file__).resolve().parent
def run(font, text, track):
    f = TTFont(H/'fonts'/font); gs = f.getGlyphSet(); cmap = f.getBestCmap(); hm = f['hmtx']
    x = 0; items = []
    for ch in text:
        g = cmap[ord(ch)]; items.append((g, x)); x += hm[g][0] + track
    return gs, items, x - track
def path(gs, items, sx, sy, ox, oy):
    pen = SVGPathPen(gs, lambda v: '%.2f' % v)
    for g, x in items:
        gs[g].draw(TransformPen(pen, (sx, 0, 0, -sy, ox + x*sx, oy)))
    return pen.getCommands()
def bounds(gs, items):
    bp = BoundsPen(gs)
    for g, x in items: gs[g].draw(TransformPen(bp, (1, 0, 0, 1, x, 0)))
    return bp.bounds
# intra: x-height (1096 units in Open Sans) -> 34 logo units; tracking adjusted so the word spans 129
gs, it, w = run('os700.woff', 'intra', 0)
k = 34/1096
b = bounds(gs, it); tr = ((129/k) - (b[2]-b[0]))/4
gs, it, w = run('os700.woff', 'intra', tr); b = bounds(gs, it)
red = path(gs, it, k, k, -b[0]*k, 57)
# descriptor: fit 0-188 wide, baseline so descenders end at 89
gs2, it2, w2 = run('os300.woff', 'special catheters', 0); b2 = bounds(gs2, it2)
k2 = 188/(b2[2]-b2[0])
oy2 = 89 + b2[1]*k2
sub = path(gs2, it2, k2, k2, -b2[0]*k2, oy2)
drop = 'M188 1C189.4 14 187.4 27 187.4 39A21.2 21.2 0 0 1 145 39C145 27 161 14 188 1Z'
hl = 'M148.6 41.5C149.6 50.2 155.2 55.6 163.2 57.2C156.6 54 152.4 48.8 151.2 42.2Z'
(H/'logo_parts.txt').write_text(repr({'W': 190, 'red': red + drop, 'hl': hl, 'sub': sub, 'top': (b2[3])*k2}))
print('ok k2', k2, 'desc top', oy2 - b2[3]*k2)
