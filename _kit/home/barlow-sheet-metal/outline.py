#!/usr/bin/env python3
"""Outline text to SVG path data (used once to draw the BARLOW lockup as clean filled paths, DR2)."""
import sys
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
def outline(fontfile, text, size, x0=0, y0=0, track=0.0):
    f = TTFont(fontfile); gs = f.getGlyphSet(); cmap = f.getBestCmap(); upm = f['head'].unitsPerEm
    s = size/upm; pen = SVGPathPen(gs); x = x0
    for ch in text:
        g = cmap[ord(ch)]
        tp = TransformPen(pen, (s, 0, 0, -s, x, y0))
        gs[g].draw(tp)
        x += gs[g].width*s + track*size
    d = pen.getCommands()
    import re
    d = re.sub(r'(\d+\.\d{1,2})\d+', r'\1', d)
    return d, x - track*size
if __name__ == '__main__':
    d, w = outline(sys.argv[1], sys.argv[2], float(sys.argv[3]), float(sys.argv[4]), float(sys.argv[5]), float(sys.argv[6]) if len(sys.argv) > 6 else 0)
    print(w, file=sys.stderr); print(d)
