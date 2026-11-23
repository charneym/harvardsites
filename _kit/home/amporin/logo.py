#!/usr/bin/env python3
"""Redraw the Amporin Pharmaceuticals logo as clean filled SVG (PRINCIPLES DR2): their own emblem SVG
(amporin.com, Amporin-Emblem-Clear.svg: rainbow arrows round the purple ring) in place of the O, the wordmark set in
Open Sans Bold / Regular as on their logo PNG. Letters use currentColor so they read on the ink."""
import re,sys
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen
FD=sys.argv[1]
def font(p):F=TTFont(p);return F.getGlyphSet(),F.getBestCmap()
def setline(fp,txt,x0,x1,base,cap,skip=()):
    gs,cm=font(fp);capH=1462;s=cap/capH
    def bnd(c):b=BoundsPen(gs);gs[cm[ord(c)]].draw(b);return b.bounds
    adv=[gs[cm[ord(c)]].width*s for c in txt];l0=bnd(txt[0])[0]*s;rr=(gs[cm[ord(txt[-1])]].width-bnd(txt[-1])[2])*s
    nat=sum(adv)-l0-rr;tr=((x1-x0)-nat)/(len(txt)-1)
    x=x0-l0;out=[];cen={}
    for i,c in enumerate(txt):
        b=bnd(c);cen[i]=(x+(b[0]+b[2])/2*s)
        if i not in skip:
            p=SVGPathPen(gs);gs[cm[ord(c)]].draw(TransformPen(p,(s,0,0,-s,x,base)));out.append(p.getCommands())
        x+=adv[i]+tr
    return ' '.join(out),cen,tr
a1,_,t1=setline(FD+'/os700.ttf','AMP',42,955,525,293)
a2,_,t1b=setline(FD+'/os700.ttf','RIN',1322,1950,525,293)
top=a1+' '+a2;cen={3:1136}
bot,_,t2=setline(FD+'/os400.ttf','Pharmaceuticals',42,1955,812,190)
print('tracking',t1,t1b,t2,file=sys.stderr)
em=open('Amporin-Emblem-Clear.svg').read()
paths=re.findall(r'<path [^>]*/>',em)
k=146/857;cx,cy=1138,378.5  # whole emblem (arrows included) sits within the AMPORIN cap height (232-525), clear of the second line (DR3)
emb='<g transform="translate(%.2f %.2f) scale(%.5f) translate(-2504.5 -1126.5)">%s</g>'%(cx,cy,k,''.join(p.replace(' fill-rule="evenodd"','') for p in paths))
def r(m):return str(round(float(m.group()),1))
top=re.sub(r'-?\d+\.\d+',r,top);bot=re.sub(r'-?\d+\.\d+',r,bot)
inner=emb+'<path class="lw" fill="currentColor" d="%s %s"/>'%(top,bot)
open('logo-inner.txt','w').write(inner)
open('logo.svg','w').write('<svg xmlns="http://www.w3.org/2000/svg" viewBox="30 220 1940 600" style="color:#000">'+inner+'</svg>')
