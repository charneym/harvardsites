#!/usr/bin/env python3
"""Redraw the Soterix Medical raster logo (300x170 PNG, logo-src.png) as clean filled SVG.
Bars: vertical gradients sampled from the original. Words: font outlines fitted to the original's boxes."""
import pathlib, sys
from PIL import Image
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen
H = pathlib.Path(__file__).resolve().parent
F = pathlib.Path(sys.argv[1])  # fonts dir
im = Image.open(H/'logo-src.png').convert('RGBA'); px = im.load(); W, HH = im.size
BARS = [(37,46),(50,59),(64,73),(78,87),(91,100),(104,113),(118,127),(133,142),(148,157),(163,173),(179,188)]
def textpx(p): return p[3] > 60 and (p[0] > 225 or p[0] < 18)
defs = []; rects = []
for i, (a, b) in enumerate(BARS):
    cx = (a + b) // 2
    samp = []
    for y in range(HH):
        best = None
        for x in range(a + 2, b - 1):
            p = px[x, y]
            if not textpx(p): best = p; break
        samp.append(best)
    ys = [y for y, p in enumerate(samp) if p and p[3] > 8]
    if not ys: continue
    runs = []; st = ys[0]; pv = ys[0]
    for y in ys[1:] + [10**6]:
        if y > pv + 3: runs.append((st, pv)); st = y
        pv = y
    st, en = max(runs, key=lambda r: r[1] - r[0])
    y0, y1 = st, en + 1
    stops = []
    for y in range(y0, y1, 2):
        p = samp[y]
        if p is None: continue
        o = (y + .5 - y0) / (y1 - y0)
        stops.append('<stop offset="%.3f" stop-color="#%02x%02x%02x" stop-opacity="%.3f"/>' % (o, p[0], p[1], p[2], p[3] / 255))
    defs.append('<linearGradient id="sxb%d" x1="0" y1="0" x2="0" y2="1">%s</linearGradient>' % (i, ''.join(stops)))
    rects.append('<rect x="%d" y="%d" width="%d" height="%d" fill="url(#sxb%d)"/>' % (a, y0, b - a, y1 - y0, i))

def word(fontfile, text, box, sizes=None, track=0):
    f = TTFont(fontfile); gs = f.getGlyphSet(); cmap = f.getBestCmap(); upm = f['head'].unitsPerEm
    sizes = sizes or [1] * len(text)
    # layout in font units
    x = 0; items = []
    for ch, s in zip(text, sizes):
        g = cmap[ord(ch)]; items.append((g, x, s)); x += (gs[g].width + track) * s
    bp = BoundsPen(gs)
    for g, gx, s in items:
        tp = TransformPen(bp, (s, 0, 0, s, gx, 0)); gs[g].draw(tp)
    xmin, ymin, xmax, ymax = bp.bounds
    bx0, by0, bx1, by1 = box
    sx = (bx1 - bx0) / (xmax - xmin); sy = (by1 - by0) / (ymax - ymin)
    sp = SVGPathPen(gs)
    for g, gx, s in items:
        # font y up -> svg y down
        t = (sx * s, 0, 0, -sy * s, bx0 + (gx - xmin) * sx, by1 + ymin * sy)
        gs[g].draw(TransformPen(sp, t))
    return sp.getCommands()

lib = '/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf'
sot = word(lib, 'Soterix', (2.6, 64.2, 145.4, 97.0))
med = word(str(F/'Titillium-ExtraLight.ttf'), 'medical', (151.2, 63.2, 291.6, 96.8))
bs = word(str(F/'Titillium-Regular.ttf'), 'BETTER.SMARTER.', (132.4, 29.2, 294.8, 39.6), sizes=[1,.78,.78,.78,.78,.78,.78,1,.78,.78,.78,.78,.78,.78,.78], track=40)
svg = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 170" role="img" aria-label="Soterix Medical">'
       '<defs>%s</defs><g>%s</g><path fill="#fff" d="%s"/><path fill="#fff" d="%s"/><path fill="#0099d0" d="%s"/></svg>') % (''.join(defs), ''.join(rects), bs, sot, med)
(H/'logo.svg').write_text(svg)
print('logo.svg', len(svg))
