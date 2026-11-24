# The Immunolight triple swirl, redrawn as clean vector spirals from their logo file (Asset 4.png): three Archimedean
# spirals with solid centres in the logo's own blue #3CB9EB, red #ED1C24 and orange #F7941D. Wordmark in Cinzel caps.
import math
SP=[('b',25.8,16.6,16.4,0.6,'#3CB9EB'),('r',50.2,40.8,17.4,2.4,'#ED1C24'),('o',16.6,50.6,16.6,4.1,'#F7941D')]
def spiral(cx,cy,R,a0,turns=2.7,r0=6.2):
    pts=[];n=int(turns*48)
    for i in range(n+1):
        t=i/n;a=a0+t*turns*2*math.pi;r=r0+(R-r0)*t
        pts.append((cx+r*math.cos(a),cy+r*math.sin(a)))
    return 'M'+' '.join('%.2f %.2f'%p for p in pts)
def mark(cls='sw'):
    g=''
    for k,cx,cy,R,a0,c in SP:
        g+='<path class="%s %s" d="%s" fill="none" stroke="%s" stroke-width="1.9" stroke-linecap="round"/>'%(cls,k,spiral(cx,cy,R,a0),c)
        g+='<circle class="%sd %s" cx="%.1f" cy="%.1f" r="4.4" fill="%s"/>'%(cls,k,cx,cy,c)
    return g
def svg(c,label='Immunolight'):
    return ('<svg class="%s" viewBox="-1 -1 338 72" role="img" aria-label="%s">'%(c,label)+mark()+
      '<text class="lt1" x="78" y="49" textLength="232" lengthAdjust="spacingAndGlyphs">IMMUNOLIGHT</text>'
      '<text class="ltm" x="312" y="31">TM</text>'
      '<text class="lt2" x="80" y="64" textLength="228" lengthAdjust="spacingAndGlyphs">ILLUMINATION | INNOVATION | TRANSFORMATION</text></svg>')
if __name__=='__main__':
    open('logo_svg.txt','w').write(svg('LGO'))
    open('mark_svg.txt','w').write('<svg viewBox="-1 -1 70 70" xmlns="http://www.w3.org/2000/svg">'+mark()+'</svg>')
    print(len(svg('x')))
