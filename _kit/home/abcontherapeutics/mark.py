# AbCon logo redrawn as SVG in the 6x coordinate space of their 169x70 header raster
import sys
T,R,M="#107480","#e8191f","#78d0c0"
def svg(teal=T,word=True,tag=True,tagc=M,gl="#a3a8a8",gd="#c9d0d0",bg=None):
    g=[]
    if bg: g.append(f'<rect width="1014" height="420" fill="{bg}"/>')
    # the A: a thick inverted V
    g.append(f'<path fill="{teal}" d="M26 272 L150 26 L284 272 L216 272 L150 140 L94 272 Z"/>')
    # the antibody Y inside the A: paired arms and stem
    def bar(x1,y1,x2,y2,c,w=11): g.append(f'<path d="M{x1} {y1}L{x2} {y2}" stroke="{c}" stroke-width="{w}" stroke-linecap="butt" fill="none"/>')
    bar(138,176,62,112,gd);bar(146,164,74,103,gl)
    bar(162,176,238,112,gd);bar(154,164,226,103,gl)
    bar(144,172,144,272,gl);bar(157,172,157,272,gd)
    # the red drop between the arms
    g.append(f'<path fill="{R}" d="M150 112 C156 126 163 136 163 146 A13 13 0 0 1 137 146 C137 136 144 126 150 112Z"/>')
    if word:
        sw=34
        # b
        g.append(f'<path d="M319 30V272" stroke="{teal}" stroke-width="{sw}" fill="none"/>')
        g.append(f'<circle cx="398" cy="196" r="{76-sw/2}" stroke="{teal}" stroke-width="{sw}" fill="none"/>')
        # c, open to the right, with the red dot
        import math
        cx,cy,r=556,196,76-sw/2;a0,a1=math.radians(38),math.radians(322)
        x0,y0=cx+r*math.cos(a0),cy-r*math.sin(a0);x1,y1=cx+r*math.cos(a1),cy-r*math.sin(a1)
        g.append(f'<path d="M{x0:.1f} {y0:.1f}A{r} {r} 0 1 0 {x1:.1f} {y1:.1f}" stroke="{teal}" stroke-width="{sw}" fill="none"/>')
        g.append(f'<circle cx="{cx+4}" cy="{cy}" r="21" fill="{R}"/>')
        # o
        g.append(f'<circle cx="712" cy="196" r="{76-sw/2}" stroke="{teal}" stroke-width="{sw}" fill="none"/>')
        # n
        g.append(f'<path d="M823 120V272M823 196A61 61 0 0 1 945 196V272" stroke="{teal}" stroke-width="{sw}" fill="none"/>')
    if tag:
        g.append(f'<text x="520" y="372" text-anchor="middle" textLength="940" lengthAdjust="spacing" font-family="Montserrat" font-weight="400" font-size="58" fill="{tagc}">THERAPEUTICS</text>')
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1014 420">'+''.join(g)+'</svg>'
open('logo.svg','w').write(svg(bg="#fff"))
open('logo-s.svg','w').write(svg(tagc='#3f9f91'))
open('logo-h.svg','w').write(svg(teal="#2a9faa",tagc="#9fe0d4",gl="#b9c2c2",gd="#e2e8e8").replace('stroke="#2a9faa" stroke-width="34"','stroke="#f4f8f7" stroke-width="34"'))
open('fav.svg','w').write('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310">'+svg(word=False,tag=False).split('viewBox="0 0 1014 420">')[1].replace('</svg>','').replace('M26 272','M26 272')+'</svg>')
