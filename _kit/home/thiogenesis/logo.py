#!/usr/bin/env python3
"""Redraw the Thiogenesis Therapeutics logo (their 210x72 PNG) as clean filled SVG paths (PRINCIPLES DR2).
Letterforms: Liberation Sans Bold (Arial-metric, as the original); red H and final S (the thiol S-H), red bracket rules."""
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
F=TTFont('/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf');gs=F.getGlyphSet();cm=F.getBestCmap();upm=F['head'].unitsPerEm
CAP=1409;RED='#da2e2d';INK='#0b0b0b'
def line(txt,reds,x0,x1,base,cap):
    s=cap/CAP;adv=[gs[cm[ord(c)]].width*s for c in txt];nat=sum(adv)
    # the original mark is set wide (its letters run ~1.2x Arial's width at that cap height); reproduce that as drawn
    # glyph ink extents: trim lsb of first and rsb of last via bounds
    from fontTools.pens.boundsPen import BoundsPen
    def bnd(c):b=BoundsPen(gs);gs[cm[ord(c)]].draw(b);return b.bounds
    l0=bnd(txt[0])[0]*s;rl=(gs[cm[ord(txt[-1])]].width-bnd(txt[-1])[2])*s
    tr=.45;sx=((x1-x0)-tr*(len(txt)-1))/(nat-l0-rl);track=tr;adv=[v*sx for v in adv];l0*=sx
    out={INK:[],RED:[]};x=x0-l0
    for i,c in enumerate(txt):
        p=SVGPathPen(gs);t=TransformPen(p,(s*sx,0,0,-s,x,base));gs[cm[ord(c)]].draw(t)
        out[RED if i in reds else INK].append(p.getCommands());x+=adv[i]+track
    return out,track
a,t1=line('THiogenesiS',{1,10},9,198.6,31.4,18.4)
b,t2=line('THerapeuticS',{1,11},2.2,209.6,58.6,18.4)
print('tracking',t1,t2)
def r(v):return round(v,2)
br=('M39 10.5V1.1H199.6V12.6M32.9 61V71.1H201.9V61')
svg=('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -1 212 74" role="img" aria-label="Thiogenesis Therapeutics">'
 '<path fill="none" stroke="%s" stroke-width="1.7" d="%s"/>'%(RED,br)+
 '<path class="ki" fill="%s" d="%s"/>'%(INK,' '.join(a[INK]+b[INK]))+
 '<path fill="%s" d="%s"/></svg>'%(RED,' '.join(a[RED]+b[RED])))
import re
svg=re.sub(r'-?\d+\.\d+',lambda m:str(r(float(m.group()))),svg)
open('logo.svg','w').write(svg);print(len(svg))
