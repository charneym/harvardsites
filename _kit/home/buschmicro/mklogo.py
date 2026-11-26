#!/usr/bin/env python3
"""Redraw the BUSCH Microsystems logo (busch-microsystems.de theme img/busch_microsystems_consult_gmbh_logo.png, 448x120) as clean
filled SVG paths: steel-blue square block (#7f99ba, 120x120) + 'BUSCH' (bold grotesque) + 'MICROSYSTEMS' (light grotesque), navy #25408f,
placed on the measured boxes of the original (BUSCH x140-303, cap 38-73; MICROSYSTEMS x139-447, cap 88-117)."""
import sys
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
FS='/home/user/harvardsites/_kit/node_modules/@fontsource/'
def word(fontfile, text, x0, x1, ytop, ybot):
    f=TTFont(fontfile); gs=f.getGlyphSet(); cmap=f.getBestCmap(); upm=f['head'].unitsPerEm
    cap=f['OS/2'].sCapHeight or 0.716*upm
    s=(ybot-ytop)/cap
    names=[cmap[ord(c)] for c in text]
    # ink extents for exact width fit via tracking
    from fontTools.pens.boundsPen import BoundsPen
    adv=[gs[n].width for n in names]
    b0=BoundsPen(gs); gs[names[0]].draw(b0); bl=b0.bounds[0]
    bn=BoundsPen(gs); gs[names[-1]].draw(bn); br=bn.bounds[2]
    natural=(sum(adv[:-1])+br-bl)*s
    track=((x1-x0)-natural)/(len(text)-1)
    out=[]; x=x0-bl*s
    for n,a in zip(names,adv):
        p=SVGPathPen(gs); t=TransformPen(p,(s,0,0,-s,x,ybot)); gs[n].draw(t); out.append(p.getCommands()); x+=a*s+track
    return ' '.join(out), track
bfont=sys.argv[1] if len(sys.argv)>1 else FS+'arimo/files/arimo-latin-700-normal.woff2'
mfont=sys.argv[2] if len(sys.argv)>2 else FS+'inter/files/inter-latin-300-normal.woff2'
B,tb=word(bfont,'BUSCH',140,303.5,38,73.5)
M,tm=word(mfont,'MICROSYSTEMS',139,447.5,88,117.5)
def r(d):
    import re; return re.sub(r'-?\d+\.\d+',lambda m:('%.1f'%float(m.group())).rstrip('0').rstrip('.'),d)
svg=('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 120"><rect class="bq" width="120" height="120" fill="#7f99ba"/>'
     '<path class="bt" fill="#25408f" d="%s"/><path class="bt" fill="#25408f" d="%s"/></svg>')%(r(B),r(M))
open('logo.svg','w').write(svg); print('track',tb,tm,len(svg))
