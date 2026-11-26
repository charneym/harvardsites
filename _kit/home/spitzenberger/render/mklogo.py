# Spitzenberger & Spies lockup redrawn as clean filled SVG (DR2) from spitzenberger.de/images/SPS/Lib/Logo.gif (153x34):
# the orange stepped "S S P" line mark traced from the pixel map (2-unit strokes as filled rects), the grey ITZENBERGER /
# PIES wordmark (Jost 400 outlines tracked to the original spans) and the grey rule between them.
import sys
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen
R=[(3,1,22,3),(3,1,5,9),(3,7,29,9),(27,7,29,15),(0,13,29,15),          # upper S
   (33,7,58,9),(56,7,58,15),(33,13,58,15),(33,7,35,24),                # P bowl and stem
   (19,18.5,39,20.5),(19.5,18.5,21.5,26.5),(19.5,24.5,46,26.5),(44,24.5,46,32.5),(17,30.5,46,32.5)]  # lower S
MK=''.join('M%g %gH%gV%gH%gZ'%(a,b,c,d,a) for a,b,c,d in R)
RULE='M39.5 18.6H153V19.5H39.5Z'
def run(fn,text,x0,x1,base,capH):
    f=TTFont(fn);gs=f.getGlyphSet();cmap=f.getBestCmap()
    bp=BoundsPen(gs);gs[cmap[ord('H')]].draw(bp);ch=bp.bounds[3];sy=capH/ch
    names=[cmap[ord(c)] for c in text];adv=[gs[n].width for n in names]
    b0=BoundsPen(gs);gs[names[0]].draw(b0);b1=BoundsPen(gs);gs[names[-1]].draw(b1)
    natural=(sum(adv)-b0.bounds[0]-(adv[-1]-b1.bounds[2]))*sy
    tr=((x1-x0)-natural)/(len(text)-1)/sy
    pen=SVGPathPen(gs);x=-b0.bounds[0]
    for n,a in zip(names,adv):
        tp=TransformPen(pen,(sy,0,0,-sy,x0+x*sy,base));gs[n].draw(tp);x+=a+tr
    return pen.getCommands()
D=sys.argv[1]
W=run(D,'ITZENBERGER',61.2,152.6,15,8)+run(D,'PIES',46.3,74.6,32.5,8)
def svg(cls):
    return ('<svg class="%s" viewBox="0 0 154 34" role="img" aria-label="Spitzenberger &amp; Spies">'
            '<path class="ssa" d="%s"/><path class="ssw" d="%s"/></svg>')%(cls,MK,RULE+W)
open('logo.svg','w').write(svg('ssm'))
open('logo_test.html','w').write('<html><body style="margin:0;padding:30px;background:#fff"><style>.ssa{fill:#ee7f01}.ssw{fill:#a9abac}svg{width:1224px;display:block}</style>'
  +svg('ssm')+'<img src="'+sys.argv[2]+'" style="width:1224px;image-rendering:pixelated;display:block;margin-top:10px">'
  +'<div style="background:#1a1c1e;padding:30px;margin-top:20px"><style>.d .ssw{fill:#c9cbcc}</style><div class="d">'+svg('ssm').replace('1224','300')+'</div></div></body></html>')
