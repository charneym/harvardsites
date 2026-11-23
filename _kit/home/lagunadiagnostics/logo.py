#!/usr/bin/env python3
"""Laguna Diagnostics logo as clean filled SVG paths (PRINCIPLES DR2).
Helix mark: potrace of their 674x167 PNG (trace.py -> mark_o/mark_b.txt), orange #FF8C00 + blue.
Wordmark: Inter Black Italic set to the original's two-line layout (Laguna / Diagnostics)."""
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen
import re
F=TTFont('/usr/share/fonts/opentype/inter/Inter-BlackItalic.otf');gs=F.getGlyphSet();cm=F.getBestCmap()
CAP=F['OS/2'].sCapHeight
def bnd(c):b=BoundsPen(gs);gs[cm[ord(c)]].draw(b);return b.bounds
def line(txt,x0,x1,base,cap):
    s=cap/CAP;adv=[gs[cm[ord(c)]].width*s for c in txt]
    l0=bnd(txt[0])[0]*s;rr=(gs[cm[ord(txt[-1])]].width-bnd(txt[-1])[2])*s
    tr=1.2;sx=((x1-x0)-tr*(len(txt)-1))/(sum(adv)-l0-rr)
    x=x0-l0*sx;out=[]
    for i,c in enumerate(txt):
        p=SVGPathPen(gs);gs[cm[ord(c)]].draw(TransformPen(p,(s*sx,0,0,-s,x,base)));out.append(p.getCommands());x+=adv[i]*sx+tr
    return ' '.join(out)
w1=line('Laguna',223,511,77,52)
w2=line('Diagnostics',170,642,142,52)
def r(v):return re.sub(r'-?\d+\.\d+',lambda m:str(round(float(m.group()),1)),v)
def shift(d,dx,dy):
    nums=re.findall(r'-?\d+\.?\d*',d);toks=re.split(r'(-?\d+\.?\d*)',d)
    out=[];i=0
    for t in toks:
        if re.fullmatch(r'-?\d+\.?\d*',t):out.append('%.1f'%(float(t)+(dx if i%2==0 else dy)));i+=1
        else:out.append(t)
    return ''.join(out)
mo=shift(open('mark_o.txt').read(),10,5);mb=shift(open('mark_b.txt').read(),10,5)
VB='15 9 630 158'
inner=('<path class="lo" fill="var(--lo,#FF8C00)" d="%s"/><path class="lb" fill="var(--lb,#001EC9)" d="%s"/>'
       '<path class="lw" fill="var(--lw,#001EC9)" d="%s %s"/>')%(mo,mb,r(w1),r(w2))
open('logo-inner.txt','w').write(inner)
open('logo.svg','w').write('<svg xmlns="http://www.w3.org/2000/svg" viewBox="%s">%s</svg>'%(VB,inner))
markonly='<svg xmlns="http://www.w3.org/2000/svg" viewBox="12 20 202 142"><path fill="#FF8C00" d="%s"/><path fill="#001EC9" d="%s"/></svg>'%(mo,mb)
open('mark.svg','w').write(markonly)
print(len(inner))
