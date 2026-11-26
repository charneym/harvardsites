#!/usr/bin/env python3
"""Crop the render to its alpha bbox (+pad), save hero.webp, patch AR/LX/LY (hub position) in field.js."""
import sys, re
from PIL import Image
src = sys.argv[1] if len(sys.argv) > 1 else 'hero.png'
im = Image.open(src); W, H = im.size
x0, y0, x1, y1 = im.getbbox(); p = int(W*0.015)
x0, y0, x1, y1 = max(0, x0-p), max(0, y0-p), min(W, x1+p), min(H, y1+p)
c = im.crop((x0, y0, x1, y1)); c.save('hero.webp', quality=90, method=6)
cw, ch = c.size; LX = (W/2-x0)/cw; LY = (H/2-y0)/ch
f = open('field.js').read()
f = re.sub(r'var AR=[^;]*,LX=[^,]*,LY=[^;]*;', 'var AR=%d/%d,LX=%.3f,LY=%.3f;' % (cw, ch, LX, LY), f)
open('field.js', 'w').write(f)
print(c.size, LX, LY)
