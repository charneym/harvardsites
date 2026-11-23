#!/usr/bin/env python3
"""Redraw the MipSalus logo (mipsalus.dk Logo_Medium.png, 800x272) as clean filled SVG (DR2): four honeycomb cells
(amber, pale, amber, and the cut cell above the wordmark), measured from the raster, and the wordmark set from
DejaVu Sans outlines fitted to the raster's cap height, baseline and width. Writes logo.svg (dark ink on white) and
logo-w.svg (bone wordmark for the dark header/loader)."""
import math
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
f=TTFont('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf');gs=f.getGlyphSet();cm=f.getBestCmap();hm=f['hmtx']
TXT='MipSalus';X0,X1,BASE,CAP=321,632,177.5,57.5
size=CAP/.729;k=size/2048.
adv=sum(hm[cm[ord(c)]][0] for c in TXT)*k
sx=(X1-X0)/adv
p=SVGPathPen(gs);x=X0
for c in TXT:
    g=gs[cm[ord(c)]];g.draw(TransformPen(p,(k*sx,0,0,-k,x,BASE)));x+=hm[cm[ord(c)]][0]*k*sx
WM=p.getCommands()
R=66/math.sqrt(3)
def hexp(cx,cy,cut=None):
    pts=[(cx+R*math.cos(math.radians(a)),cy+R*math.sin(math.radians(a))) for a in (-90,-30,30,90,150,210)]
    if cut is not None:
        pts=[(cx,cy-R),(cx+33,cy-R/2),(cx+33,cut),(cx-33,cut),(cx-33,cy-R/2)]
    return 'M'+' L'.join('%.1f %.1f'%q for q in pts)+'Z'
H=[(192,145,'#FBB85F',None),(258,145,'#F2F2F2',None),(291,88,'#FBB85F',None),(357,88,'#F2F2F2',105)]
def svg(text,stroke):
    cells=''.join('<path d="%s" fill="%s" stroke="%s" stroke-width="4.6" stroke-linejoin="round"/>'%(hexp(cx,cy,cut),fill,stroke) for cx,cy,fill,cut in H)
    return ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="152 45 486 140">'+cells+'<path d="'+WM+'" fill="'+text+'"/></svg>')
open('logo.svg','w').write(svg('#111','#111'))
open('logo-w.svg','w').write(svg('#F4F7FB','#0a1a3a'))
print(sx)
