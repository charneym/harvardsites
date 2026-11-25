# Convert the logo's two text lines into outline paths (Saira 800/600 italic from @fontsource), so the logo renders
# identically everywhere and its boxes are the real glyph boxes (DR2: crisp, solid).
import sys
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
F='/home/user/harvardsites/_kit/node_modules/@fontsource/saira/files/saira-latin-%s-italic.woff'
def run(text,weight,x0,x1,base,track):
    f=TTFont(F%weight);gs=f.getGlyphSet();cmap=f.getBestCmap();upm=f['head'].unitsPerEm
    names=[cmap[ord(c)] for c in text];adv=[gs[n].width for n in names]
    # width in font units with tracking (track in em), then scale to fit x0..x1
    tr=track*upm;W=sum(adv)+tr*(len(text)-1);s=(x1-x0)/W
    pen=SVGPathPen(gs);x=0
    for n,a in zip(names,adv):
        tp=TransformPen(pen,(s,0,0,-s,x0+x*s,base));gs[n].draw(tp);x+=a+tr
    return pen.getCommands(),s*upm
bt,fs1=run('BMT','800',103,231,51,0.02)
bs,fs2=run('FLUID CONTROL SOLUTIONS','600',31,214,72,0.22)
print(fs1,fs2,file=sys.stderr)
open('render/bt.txt','w').write(bt);open('render/bs.txt','w').write(bs)
