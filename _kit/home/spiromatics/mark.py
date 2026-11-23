"""Spiromatics mark, redrawn as clean SVG from their raster logo: a closed five-lobed loop drawn as a ribbon of fine strands
that twists (pinches) as it goes round, in the logo gradient magenta > coral > orange > yellow. The band between the outer and
inner strands is also filled, so the mark stays solid at small sizes (DR.2)."""
import math,sys
N=110;L=int(sys.argv[1]) if len(sys.argv)>1 else 13
def P(th,o):
    # base loop: five soft lobes, rotated to match the logo (lobe up-right, lobe left)
    r=34*(1+.13*math.cos(5*(th-0.35))+.045*math.cos(2*th+.8)+.03*math.cos(3*th-1.1))
    w=(7.8+2.2*math.cos(th-2.6))*abs(math.sin(2.5*(th-0.1)+.25*math.sin(th)))+1.1       # ribbon half-width: pinches where the ribbon twists
    rr=r+o*w
    return 50+rr*math.cos(th),50-rr*math.sin(th)*0.96
def path(o):
    pts=[P(2*math.pi*k/N,o) for k in range(N)]
    return 'M'+' '.join('%.2f %.2f'%p for p in pts)+'Z'
band=path(1)+path(-1)
lines=[path(-1+2*i/(L-1)) for i in range(L)]
out={'band':band,'lines':lines}
import json;json.dump(out,open('mark.json','w'))
grad='<linearGradient id="%s" x1="8" y1="40" x2="92" y2="60" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e0207f"/><stop offset=".38" stop-color="#ff6f8a"/><stop offset=".7" stop-color="#ff9a68"/><stop offset="1" stop-color="#f7cc5c"/></linearGradient>'
def svg(gid,cls,strands=True,sw=.55):
    s='<svg class="%s" viewBox="-3 -3 106 106" aria-hidden="true"><defs>%s</defs><path d="%s" fill="url(#%s)" fill-rule="evenodd" opacity=".55"/>'%(cls,grad%gid,band,gid)
    if strands: s+='<g fill="none" stroke="url(#%s)" stroke-width="%s">'%(gid,sw)+''.join('<path d="%s"/>'%l for l in lines)+'</g>'
    return s+'</svg>'
open('mark_nav.svg','w').write(svg('gN','smk',True,.7))
open('mark_pre.svg','w').write(svg('gP','mk',True,.5))
open('mark_demo.html','w').write('<body style="margin:0;background:#120a14;display:flex;gap:40px;padding:40px;align-items:center"><div style="width:300px">'+svg('a','x',True,.5)+'</div><div style="width:40px">'+svg('b','y',True,.7)+'</div><div style="background:#f7f4f2;width:120px;padding:10px">'+svg('c','z',True,.5)+'</div></body>')
print(len(open('mark_nav.svg').read()))
