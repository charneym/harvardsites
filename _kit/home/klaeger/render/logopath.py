# Kläger logotype redrawn as outline paths (DR2: crisp, solid): KLÄGER in Archivo Black stretched to the logo's wide
# proportions (umlaut dots drawn round), "POWERFUL SOLUTIONS" in Archivo 300, and the ring-and-pointer mark, all in a
# 230 x 56 box matching klaeger.de/wp-content/uploads/Logo_Klaeger_4c_neuer_Claim-schwarz.png.
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen
D='/home/user/harvardsites/_kit/node_modules/@fontsource/'
def run(fn,text,x0,x1,base,capH,track):
    f=TTFont(fn);gs=f.getGlyphSet();cmap=f.getBestCmap()
    bp=BoundsPen(gs);gs[cmap[ord('H')]].draw(bp);ch=bp.bounds[3]
    sy=capH/ch
    names=[cmap[ord(c)] for c in text];adv=[gs[n].width for n in names]
    tr=track*ch;W=sum(adv)+tr*(len(text)-1)
    # visible extent: trim the first glyph's lsb and the last glyph's rsb
    b0=BoundsPen(gs);gs[names[0]].draw(b0);b1=BoundsPen(gs);gs[names[-1]].draw(b1)
    W=W-b0.bounds[0]-(adv[-1]-b1.bounds[2]);sx=(x1-x0)/W
    pen=SVGPathPen(gs);x=-b0.bounds[0];pos=[]
    for n,a in zip(names,adv):
        pos.append(x0+x*sx);tp=TransformPen(pen,(sx,0,0,-sy,x0+x*sx,base));gs[n].draw(tp);x+=a+tr
    return pen.getCommands(),pos,sx,sy
wm,pos,sx,sy=run(D+'archivo-black/files/archivo-black-latin-400-normal.woff','KLAGER',0.5,176,36.2,19.9,0.06)
tg,_,_,_=run(D+'archivo/files/archivo-latin-300-normal.woff','POWERFUL SOLUTIONS',0.5,176,52.6,7.6,0.12)
print(pos,sx,sy)
open('render/wm.txt','w').write(wm);open('render/tg.txt','w').write(tg)
