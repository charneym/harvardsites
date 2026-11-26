#!/usr/bin/env python3
"""EBP lockup redrawn as clean filled SVG paths (after ebpglobal.com logo.jpg / footer_logo.png): a disc split red over
black inside a yellow ring, a yellow electron beam striking the centre with a four-ray burst; 'EBP' and
'Electron Beam Processes Ltd' as outlined glyphs (Liberation Sans Bold, close to the logo's grotesque).
Prints the <svg> for the nav / loader lockup."""
import sys
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
F = TTFont('/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf')
gs = F.getGlyphSet(); cmap = F.getBestCmap(); upm = F['head'].unitsPerEm
def text(s, x, y, size, track=0):
    pen = SVGPathPen(gs, ntos=lambda v: ("%.1f" % v).rstrip("0").rstrip(".")); sc = size/upm; cx = x
    for ch in s:
        g = cmap[ord(ch)]
        tp = TransformPen(pen, (sc, 0, 0, -sc, cx, y))
        gs[g].draw(tp); cx += gs[g].width*sc + track
    return pen.getCommands(), cx
def r(v): return ('%.2f' % v).rstrip('0').rstrip('.')
def mark():
    p = []
    p.append('<path class="ebr" d="M5 50A45 45 0 0 1 95 50Z"/>')
    p.append('<path class="ebk" d="M5 50A45 45 0 0 0 95 50Z"/>')
    p.append('<path class="eby" fill-rule="evenodd" d="M50 1A49 49 0 1 1 49.99 1ZM50 5.2A44.8 44.8 0 1 0 50.01 5.2Z"/>')
    # beam: thin from the top, widening to the strike point, then a tapering trail below
    p.append('<path class="eby" d="M49.3 5H50.7L51.5 47.5L51.1 52L50 86L48.9 52L48.5 47.5Z"/>')
    # four rays from the strike point
    cx, cy = 50, 47.5
    for tx, ty in [(25.5, 40), (36.5, 27.5), (63.5, 27.5), (74.5, 40)]:
        dx, dy = tx-cx, ty-cy; L = (dx*dx+dy*dy) ** .5; nx, ny = -dy/L, dx/L; w = 1.5
        p.append('<path class="eby" d="M%s %sL%s %sL%s %sZ"/>' % (r(cx+nx*w), r(cy+ny*w), r(tx), r(ty), r(cx-nx*w), r(cy-ny*w)))
    return ''.join(p)
def lockup(cls='ebl', label='Electron Beam Processes Ltd'):
    a, x1 = text('EBP', 122, 52, 62)
    b, x2 = text('Electron Beam Processes Ltd', 123, 84, 19.5)
    W = max(x1, x2) + 2
    return ('<svg class="%s" viewBox="0 0 %s 100" role="img" aria-label="%s">' % (cls, r(W), label) + mark() +
            '<path class="ebw" d="%s"/><path class="ebs" d="%s"/></svg>' % (a, b))
if __name__ == '__main__':
    what = sys.argv[1] if len(sys.argv) > 1 else 'lockup'
    print(lockup() if what == 'lockup' else '<svg class="ebm" viewBox="0 0 100 100" aria-hidden="true">' + mark() + '</svg>')
