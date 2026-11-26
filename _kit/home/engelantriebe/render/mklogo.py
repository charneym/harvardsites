# ENGEL Elektroantriebe lockup redrawn as clean filled SVG (DR2) from engelantriebe.de/images/logo_engel_elektroantriebe.png
# (240x77): the red three-segment arc (polar fit by arcfit.py), the extended ENGEL wordmark (traced from the pixel map:
# 8px stems, 5px bars, rounded outer corners) and the ELEKTROANTRIEBE descriptor (Barlow Semi Condensed 400 as outlines).
import math, json, subprocess, sys
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen
F=json.loads(subprocess.check_output([sys.executable,'arcfit.py','/tmp/claude-0/-home-user-harvardsites/743e9969-713a-559d-9264-28c3c92b1c25/scratchpad/logo_src.png'],stderr=subprocess.DEVNULL))
CX,CY=F['c']
def four(c,t):
    v=c[0];k=1
    for i in range(1,len(c),2): v+=c[i]*math.cos(k*t)+c[i+1]*math.sin(k*t);k+=1
    return v
def seg(a0,a1):
    n=60;o=[];i=[]
    for j in range(n+1):
        t=math.radians(a0+(a1-a0)*j/n)
        ro=four(F['co'],t);ri=four(F['ci'],t)
        o.append((CX+ro*math.cos(t),CY+ro*math.sin(t)));i.append((CX+ri*math.cos(t),CY+ri*math.sin(t)))
    pts=o+i[::-1]
    return 'M'+' L'.join('%.2f %.2f'%p for p in pts)+'Z'
ARC=seg(-120,-41)+seg(150,226)+seg(64.5,143)
T,B,h,w,R=26.2,49.0,4.9,8.3,5.0
def E(x0,x1,mid): return ('M{a} {T}H{x1}V{t2}H{s}V35H{mid}V40H{s}V{b2}H{x1}V{B}H{a}A{R} {R} 0 0 1 {x0} {bR}V{tR}A{R} {R} 0 0 1 {a} {T}Z'
    ).format(a=x0+R,T=T,x1=x1,t2=T+h,s=x0+w,mid=mid,b2=B-h,B=B,R=R,x0=x0,bR=B-R,tR=T+R)
def N(x0,x1): return 'M{x0} {T}H{a}A{R} {R} 0 0 1 {x1} {tR}V{B}H{s2}V{t2}H{s}V{B}H{x0}Z'.format(x0=x0,T=T,a=x1-R,R=R,x1=x1,tR=T+R,B=B,s2=x1-w,t2=T+h,s=x0+w)
def G(x0,x1): return ('M{a} {T}H{x1}V{t2}H{s}V{b2}H{s2}V40H142V35H{x1}V{b3}A2.5 2.5 0 0 1 {x3} {B}H{a}A{R} {R} 0 0 1 {x0} {bR}V{tR}A{R} {R} 0 0 1 {a} {T}Z'
    ).format(a=x0+R,T=T,x1=x1,t2=T+h,s=x0+w,b2=B-h,s2=x1-w,b3=B-2.5,x3=x1-2.5,B=B,R=R,x0=x0,bR=B-R,tR=T+R)
def L(x0,x1): return 'M{x0} {T}H{s}V{b2}H{x1}V{B}H{a}A3 3 0 0 1 {x0} {b3}Z'.format(x0=x0,T=T,s=x0+w,b2=B-h,x1=x1,B=B,a=x0+3,b3=B-3)
WM=E(39,75.6,68)+N(79,116)+G(120,158)+E(161,198.6,190.5)+L(202,239.6)
def run(fn,text,x0,x1,base,capH):
    f=TTFont(fn);gs=f.getGlyphSet();cmap=f.getBestCmap()
    bp=BoundsPen(gs);gs[cmap[ord('H')]].draw(bp);ch=bp.bounds[3];sy=capH/ch
    names=[cmap[ord(c)] for c in text];adv=[gs[n].width for n in names]
    b0=BoundsPen(gs);gs[names[0]].draw(b0);b1=BoundsPen(gs);gs[names[-1]].draw(b1)
    # track so the run spans x0..x1 at the true cap-height scale (no horizontal stretch)
    natural=(sum(adv)-b0.bounds[0]-(adv[-1]-b1.bounds[2]))*sy
    tr=((x1-x0)-natural)/(len(text)-1)/sy
    pen=SVGPathPen(gs);x=-b0.bounds[0]
    for n,a in zip(names,adv):
        tp=TransformPen(pen,(sy,0,0,-sy,x0+x*sy,base));gs[n].draw(tp);x+=a+tr
    return pen.getCommands()
D='/home/user/harvardsites/_kit/node_modules/@fontsource/barlow-semi-condensed/files/barlow-semi-condensed-latin-400-normal.woff'
DS=run(D,'ELEKTROANTRIEBE',79.6,236.6,72.0,12.6)
def svg(cls,lab=True):
    return ('<svg class="%s" viewBox="0 0 241 77" role="img" aria-label="ENGEL Elektroantriebe">'
            '<path class="ena" d="%s"/><path class="enw" d="%s"/><path class="ent" d="%s"/></svg>')%(cls,ARC,WM,DS)
open('logo.svg','w').write(svg('enm'))
open('logo_test.html','w').write('<html><body style="margin:0;padding:30px;background:#fff"><style>.ena{fill:#ce0a38}.enw,.ent{fill:#00293d}svg{width:960px;display:block}</style>'
  +svg('enm')+'<img src="/tmp/claude-0/-home-user-harvardsites/743e9969-713a-559d-9264-28c3c92b1c25/scratchpad/logo_src.png" style="width:960px;image-rendering:pixelated;display:block">'
  +'<div style="background:#071c29;padding:30px;margin-top:20px"><style>.d .enw,.d .ent{fill:#fff}</style><div class="d">'+svg('enm')+'</div></div></body></html>')
print(len(ARC),len(WM),len(DS))
