#!/usr/bin/env python3
"""Redraw the Life Recovery Systems logo (their header1.jpg raster, ~330x62) as clean SVG (PRINCIPLES DR2).
Blue italic humanist wordmark (Sofia Sans 700 italic stands in for the original's semi-condensed bold italic),
the red ECG trace runs in under the L and spikes up to form the i of 'Life', as in the original. Colours sampled
from the raster: blue #0070bf, red #e3202a."""
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen
import re
F=TTFont('../../node_modules/@fontsource/sofia-sans/files/sofia-sans-latin-700-italic.woff')
gs=F.getGlyphSet();cm=F.getBestCmap();CAP=F['OS/2'].sCapHeight
cap=28.0;s=cap/CAP;BASE=40.0;TR=-0.25
def glyphs(txt,x):
    cmds=[]
    for c in txt:
        g=gs[cm[ord(c)]]
        if c!=' ':
            p=SVGPathPen(gs);g.draw(TransformPen(p,(s,0,0,-s,x,BASE)));cmds.append(p.getCommands())
        x+=g.width*s*(0.55 if c==" " else 1)+TR
    return ' '.join(cmds),x
X0=40.0
L,xl=glyphs('L',X0)
# the ECG 'i': starts after the L
ix=xl+1.0
rest,xe=glyphs('fe Recovery Systems',ix+9.0)
y0=48.0;sl=0.21  # italic slope (dx per unit rise)
ecg=('M0 %.1f H%.1f L%.1f %.1f L%.1f %.1f L%.1f %.1f L%.1f %.1f L%.1f %.1f C%.1f %.1f %.1f %.1f %.1f %.1f L%.1f %.1f'%(
  y0, ix-3.5, ix-2, 45.2, ix-0.6, 49, ix+0.6, 44.5,
  ix+0.6+(44.5-12.5)*sl, 12.5,      # up to cap height (the i)
  ix+3.2, 56.5,                     # down below the line
  ix+5.2, 41, ix+7.6, 40.5, ix+8.6, 45.5, ix+9.4, 47.5))
W=xe+1.5
inner=('<path class="lr" fill="none" stroke="#e3202a" stroke-width="2.7" stroke-linejoin="round" stroke-linecap="round" d="%s"/>'%ecg+
 '<path class="lb" fill="#0070bf" d="%s %s"/>'%(L,rest))
inner=re.sub(r'-?\d+\.\d+',lambda m:('%.2f'%float(m.group())).rstrip('0').rstrip('.'),inner)
VB='0 9 %.1f 50'%W
open('logo-inner.txt','w').write(inner);open('logo-vb.txt','w').write(VB)
open('logo.svg','w').write('<svg xmlns="http://www.w3.org/2000/svg" viewBox="%s">%s</svg>'%(VB,inner))
print(VB,len(inner))
