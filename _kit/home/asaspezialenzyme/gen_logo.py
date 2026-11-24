#!/usr/bin/env python3
"""ASA Spezialenzyme logo redrawn as filled SVG paths (DR2): 'A', the helix 'S' (a solid S whose open bowls are closed by
a fine ladder, as in their logo), 'A', a hairline divider and 'Spezialenzyme GmbH'. Letters from Inter (the logo face is a
humanist sans); blues sampled from their logo (#3a63b0 to #7a9ad8, lightened for the dark ground)."""
import math, pathlib
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen
H=pathlib.Path(__file__).resolve().parent
def glyphs(font,text,size,x0,base,track=0):
    f=TTFont(font);gs=f.getGlyphSet();cmap=f.getBestCmap();upm=f['head'].unitsPerEm;k=size/upm
    out=[];x=x0
    for ch in text:
        g=cmap[ord(ch)];pen=SVGPathPen(gs);tp=TransformPen(pen,(k,0,0,-k,x,base));gs[g].draw(tp)
        bp=BoundsPen(gs);gs[g].draw(bp)
        out.append((ch,pen.getCommands(),x,bp.bounds,k));x+=gs[g].width*k+track
    return out,x
FR='/usr/share/fonts/opentype/inter/Inter-Regular.otf';FM='/usr/share/fonts/opentype/inter/Inter-Medium.otf'
# big letters, cap height ~ 100 units at size 137
big,xe=glyphs(FR,'A',140,0,120)
S,_=glyphs(FM.replace('Medium','SemiBold'),'S',150,xe+4,122)
sx=S[0][2];sb=S[0][3];sk=S[0][4]
sw=(sb[2]-sb[0])*sk
a2,xe2=glyphs(FR,'A',140,sx+sb[2]*sk+6,120)
# S bbox in svg coords
x0=sx+sb[0]*sk;x1=sx+sb[2]*sk;ytop=122-sb[3]*sk;ybot=122-sb[1]*sk;cx=(x0+x1)/2;hh=(ybot-ytop)
# ladder: closes the top bowl on the right and the bottom bowl on the left (an '8' made of a solid strand and a fine one)
lad=''
def arc(cx_,cy_,r,a0,a1,n=40):
    return [(cx_+r*math.cos(math.radians(a0+(a1-a0)*i/n)),cy_+r*math.sin(math.radians(a0+(a1-a0)*i/n))) for i in range(n+1)]
def strip(pts,w=1.6):
    # filled polyline of width w
    L=[];R=[]
    for i,(x,y) in enumerate(pts):
        xa,ya=pts[max(0,i-1)];xb,yb=pts[min(len(pts)-1,i+1)];dx,dy=xb-xa,yb-ya;d=math.hypot(dx,dy) or 1
        nx,ny=-dy/d*w/2,dx/d*w/2;L.append((x+nx,y+ny));R.append((x-nx,y-ny))
    P=L+R[::-1];return 'M'+' L'.join('%.2f %.2f'%p for p in P)+'Z'
def ell(c,rx,ry,a0,a1,n=40):
    return [(c[0]+rx*math.cos(math.radians(a0+(a1-a0)*i/n)),c[1]+ry*math.sin(math.radians(a0+(a1-a0)*i/n))) for i in range(n+1)]
w2=(x1-x0)/2;ry=hh*.25
ct=(cx,ytop+ry+1);cb=(cx,ybot-ry-1)
for c,a0,a1 in ((ct,-62,62),(cb,118,242)):
    lad+=strip(ell(c,w2-1,ry,a0,a1),1.6)
    lad+=strip(ell(c,w2-10,ry-9,a0+6,a1-6),1.1)
    for i in range(1,13):
        a=math.radians(a0+(a1-a0)*i/13);p=[(c[0]+(w2-10)*math.cos(a),c[1]+(ry-9)*math.sin(a)),(c[0]+(w2-1)*math.cos(a),c[1]+ry*math.sin(a))]
        lad+=strip(p,1.0)
mark=''.join('<path d="%s"/>'%g[1] for g in big+a2)+'<path d="%s"/>'%S[0][1]
W1=xe2
div='<path d="M%.1f 18h1.4v122h-1.4Z"/>'%(W1+40)
txt,xt=glyphs(FR,'Spezialenzyme GmbH',40,W1+80,118,0.4)
word=''.join('<path d="%s"/>'%g[1] for g in txt)
W=xt+2;Hh=150
def svg(cls,gid,top,bot,wcol,label,extra='',lcol='#9fb2cf'):
    return ('<svg class="%s" viewBox="-2 8 %.0f %d" role="img" aria-label="%s"%s><defs><linearGradient id="%s" x1="0" y1="0" x2="0" y2="1">'
     '<stop offset="0" stop-color="%s"/><stop offset="1" stop-color="%s"/></linearGradient></defs>'
     '<g class="lm" fill="url(#%s)">%s</g><g class="ll" fill="%s">%s</g><g class="ld" fill="%s">%s</g><g class="lw" fill="%s">%s</g></svg>')%(cls,W+4,Hh-4,label,extra,gid,top,bot,gid,mark,lcol,'<path d="%s"/>'%lad,wcol,div,wcol,word)
hdr=svg('lgo','asaG1','#a9c3ef','#6f97da','#b8cbe9','ASA Spezialenzyme GmbH')
pre=svg('plogo','asaG2','#a9c3ef','#6f97da','#c3d4ef','ASA Spezialenzyme GmbH')
(H/'brand.html').write_text('<a href="#/" class="brand" id="brand" aria-label="ASA Spezialenzyme, home">'+hdr+'</a>\n')
(H/'logo.svg').write_text(svg('x','asaG3','#3a63b0','#7a9ad8','#4a6fb8','ASA Spezialenzyme GmbH',' xmlns="http://www.w3.org/2000/svg"','#8a96a6'))
(H/'plogo.frag').write_text(pre)
print(W,Hh)
