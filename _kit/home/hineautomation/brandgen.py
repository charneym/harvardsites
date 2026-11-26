#!/usr/bin/env python3
"""Redraw the Hine Automation logo (hineautomation.com HA-Logo-500.png, 500x158) as filled SVG paths.
Box geometry and the slanted HA mark are measured from the raster; HINE / AUTOMATION are Liberation Sans Bold
(Arial metrics) outlines fitted to the measured letter boxes."""
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
F=TTFont('/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf')
gs=F.getGlyphSet();cmap=F.getBestCmap();cap=F['OS/2'].sCapHeight
def word(txt,x0,x1,top,base,track=0):
    names=[cmap[ord(c)] for c in txt]
    adv=sum(F['hmtx'][n][0] for n in names)+track*(len(names)-1)
    lsb=F['hmtx'][names[0]][1]; last=names[-1]
    rs=F['hmtx'][last][0]-(gs[last]._glyph.xMax if hasattr(gs[last],'_glyph') else F['glyf'][last].xMax)
    ink=adv-lsb-(F['hmtx'][last][0]-F['glyf'][last].xMax)
    sy=(base-top)/cap; sx=(x1-x0)/ink
    pen=SVGPathPen(gs); x=-lsb
    for n in names:
        tp=TransformPen(pen,(sx,0,0,-sy,x0+x*sx,base)); gs[n].draw(tp); x+=F['hmtx'][n][0]+track
    return pen.getCommands()
def r(s):
    import re
    return re.sub(r'-?\d+\.\d+',lambda m:('%.2f'%float(m.group())).rstrip('0').rstrip('.'),s)
hine=r(word('HINE',203,480.5,19,106.5,track=60))
auto=r(word('AUTOMATION',204,480.5,115,141.5,track=20))
A='M133 19H139L183 141.5H162L146 98H100L133 19ZM127 47L138.2 77H113Z'
H='M62 19H85.5L39.5 141.5H16ZM112 19H137.5L90.5 141.5H67.5ZM60 77H96L88 98H52Z'
svg=('<path class="hb" d="M0 0H500V158H0Z"/><path class="hw" d="M193 10H490V149H193Z"/>'
     '<path class="ha" fill-rule="evenodd" d="'+A+'"/><path class="hh" d="'+H+'"/>'
     '<path class="ht" d="'+hine+'"/><path class="ht" d="'+auto+'"/>')
open('logo_parts.txt','w').write(svg)
print(len(svg))
