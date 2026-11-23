#!/usr/bin/env python3
"""Redraw the TissueVision logo (tissuevision.com logo PNG, 311x200) as clean filled SVG paths (DR2).
Letters are Questrial outlines placed on the measured positions of the original raster (glyph left edges, x-heights,
baselines); the tall T, the rule and the red V are filled shapes measured from the raster. Usage: logo.py Questrial.woff"""
import sys
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen
f=TTFont(sys.argv[1]);gs=f.getGlyphSet();cm=f.getBestCmap()
def glyph(ch,left,base,size,sx=1.0):
    g=gs[cm[ord(ch)]];b=BoundsPen(gs);g.draw(b);k=size/1000.
    p=SVGPathPen(gs);g.draw(TransformPen(p,(k*sx,0,0,-k,left-b.bounds[0]*k*sx,base)));return p.getCommands()
# measured from the raster: glyph left edges (px), baseline, x-height
up=[('i',96),('s',111),('s',147),('u',184),('e',223)]
lo=[('i',116),('s',131),('i',168),('o',183),('n',227)]
U=' '.join(glyph(c,x,98,80,.86) for c,x in up)
L=' '.join(glyph(c,x,150,66) for c,x in lo)
T='M49 27h55v4.6H79.6V100h-7V31.6H49z'
V='M45 104h7.4L76.6 164.2 100.8 104h7.4L80.2 173h-7.4z'
svg=('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 18 312 160">'
 '<path class="lt" d="'+T+' '+U+'"/>'
 '<path class="lr" d="M0 100h312v3H0z"/>'
 '<path class="lv" d="'+V+'"/>'
 '<path class="lt" d="'+L+'"/></svg>')
open(sys.argv[2] if len(sys.argv)>2 else 'logo.svg','w').write(svg)
