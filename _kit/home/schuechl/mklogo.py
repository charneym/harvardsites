# Redraws the SCHÜCHL registered mark (schuechl.de header, FA-LOG-O.gif): a black slanted badge with a fine white
# inset rule, the name in a heavy italic grotesque, and the ® top right. Glyphs from Inter ExtraBold Italic as paths.
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
f=TTFont('/usr/share/fonts/opentype/inter/Inter-ExtraBoldItalic.otf')
gs=f.getGlyphSet();cmap=f.getBestCmap();upm=f['head'].unitsPerEm
def run(txt,size,x0,base,track=0):
    sc=size/upm;d=[];x=x0
    for ch in txt:
        g=cmap[ord(ch)];p=SVGPathPen(gs);tp=TransformPen(p,(sc,0,0,-sc,x,base));gs[g].draw(tp);d.append(p.getCommands());x+=gs[g].width*sc+track
    return ' '.join(d),x
H=54;sl=10  # badge height, slant offset
name,xe=run('SCHÜCHL',40,22,43,0.5)
W=round(xe+22)
reg,_=run('®',13,W-14,15)
def para(i,w,h,s):return f'M{s+i:.1f} {i:.1f}H{w-i:.1f}L{w-s-i:.1f} {h-i:.1f}H{i:.1f}Z'
for mode,bg,fg in (('dark','#141414','#ffffff'),):
    svg=(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W+2} {H}" width="{W+2}" height="{H}">'
     f'<path d="{para(0,W+2,H,sl)}" fill="#141414"/>'
     f'<path d="{para(3.2,W+2,H,sl)}" fill="none" stroke="#fff" stroke-width="1.6" stroke-linejoin="miter"/>'
     f'<path d="{name}" fill="#fff"/><path d="{reg}" fill="#fff"/></svg>')
open('logo.svg','w').write(svg);print(W,len(svg))
