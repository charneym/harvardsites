#!/usr/bin/env python3
"""Redraw the Cantoni Therapeutics logo (their 1257x450 logo.png) as clean SVG (PRINCIPLES DR2).
Mark: three red spheres on grey bonds, at the original's measured centres/radii, shaded with gradients like the original.
Wordmark: Antonio Bold (Google Fonts; the closest match to the logo's condensed face), each line fitted to the original's
measured ink box. Writes logo-inner.txt (inner SVG, viewBox 30 34 1130 410) and logo.svg."""
import re, sys
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen
TTF=sys.argv[1] if len(sys.argv)>1 else '/tmp/claude-0/-home-user-harvardsites/463ead76-45ee-5e08-bb63-f6f037338f38/scratchpad/antonio.ttf'
F=TTFont(TTF); gs=F.getGlyphSet(); cm=F.getBestCmap()
def line(txt,x0,x1,y0,y1,track):
    # natural layout in font units
    xs=[];x=0
    for c in txt:
        xs.append(x); x+=gs[cm[ord(c)]].width+track
    bp=BoundsPen(gs);
    for c,ox in zip(txt,xs):
        g=gs[cm[ord(c)]]; t=TransformPen(bp,(1,0,0,1,ox,0)); g.draw(t)
    bx0,by0,bx1,by1=bp.bounds
    sx=(x1-x0)/(bx1-bx0); sy=(y1-y0)/(by1-by0)
    out=[]
    for c,ox in zip(txt,xs):
        p=SVGPathPen(gs); t=TransformPen(p,(sx,0,0,-sy,x0+(ox-bx0)*sx,y1+by0*sy)); gs[cm[ord(c)]].draw(t); out.append(p.getCommands())
    return ' '.join(out),sx/sy
a,ra=line('Cantoni',497,1147,61,272.5,60)
b,rb=line('Therapeutics',510,1145,298,435.5,20)
print('x/y stretch',round(ra,3),round(rb,3))
C=(242,268); S=[(240,114.5),(112,337),(387.5,327)]; R=73; BR=28
defs=('<defs><radialGradient id="ctS" cx=".38" cy=".33" r=".72" fx=".36" fy=".3">'
 '<stop offset="0" stop-color="#ffe3df"/><stop offset=".12" stop-color="#ff6a5c"/><stop offset=".34" stop-color="#ec0000"/>'
 '<stop offset=".72" stop-color="#c00000"/><stop offset="1" stop-color="#7a0000"/></radialGradient></defs>')
import math
bonds=''
for k,(sx,sy) in enumerate(S):
    dx,dy=sx-C[0],sy-C[1]; L=math.hypot(dx,dy); nx,ny=-dy/L,dx/L
    g='ctB%d'%k
    bonds+=('<linearGradient id="%s" gradientUnits="userSpaceOnUse" x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f">'
      '<stop offset="0" stop-color="#8a8a8a"/><stop offset=".28" stop-color="#f4f4f4"/><stop offset=".5" stop-color="#c9c9c9"/>'
      '<stop offset="1" stop-color="#7d7d7d"/></linearGradient>')%(g,C[0]+nx*BR,C[1]+ny*BR,C[0]-nx*BR,C[1]-ny*BR)
    bonds+='<path fill="url(#%s)" d="M%.1f %.1fL%.1f %.1fL%.1f %.1fL%.1f %.1fZ"/>'%(g,C[0]+nx*BR,C[1]+ny*BR,sx+nx*BR,sy+ny*BR,sx-nx*BR,sy-ny*BR,C[0]-nx*BR,C[1]-ny*BR)
bonds='<defs>'+bonds.replace('<path','</defs><path',1)
bonds=bonds.replace('</defs>','',1)
# split defs and paths cleanly
gr=''.join(re.findall(r'<linearGradient.*?</linearGradient>',bonds)); ps=''.join(re.findall(r'<path[^>]*/>',bonds))
mark=('<defs>'+gr+defs[6:-7]+'</defs>'+'<circle cx="%d" cy="%d" r="%d" fill="#bdbdbd"/>'%(C[0],C[1],BR)+ps+
      ''.join('<circle cx="%.1f" cy="%.1f" r="%d" fill="url(#ctS)"/>'%(x,y,R) for x,y in S))
inner=mark+'<path class="ki" fill="currentColor" stroke="currentColor" stroke-width="4" stroke-linejoin="round" d="%s %s"/>'%(a,b)
inner=re.sub(r'-?\d+\.\d+',lambda m:('%.1f'%float(m.group())).rstrip('0').rstrip('.'),inner)
open('logo-inner.txt','w').write(inner)
open('logo.svg','w').write('<svg xmlns="http://www.w3.org/2000/svg" viewBox="30 34 1130 410" role="img" aria-label="Cantoni Therapeutics" style="color:#000">'+inner+'</svg>')
print(len(inner))
