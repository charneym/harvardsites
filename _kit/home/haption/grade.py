#!/usr/bin/env python3
"""Grade Haption's own product photograph (haption.com asset d41ca38d 'virtuose-6d-TAO-force-feedback-device-haption-for-
robot-control.png', 859x1000 RGBA cut-out of the Virtuose 6D TAO) for the hero: keep its real alpha, cool the whites a
touch toward the palette, lift the black base slightly so it reads on the navy ink, keep tonal depth.
Usage: grade.py in.png out.webp"""
import sys
from PIL import Image, ImageEnhance
im = Image.open(sys.argv[1]).convert('RGBA')
a = im.getchannel('A'); rgb = im.convert('RGB')
rgb = ImageEnhance.Color(rgb).enhance(.9)
r, g, b = rgb.split()
lift = lambda v: int(v + max(0, 40 - v) * .35)
r = r.point(lambda v: int(lift(v) * .97)); g = g.point(lambda v: int(lift(v) * .985)); b = b.point(lambda v: min(255, int(lift(v) * 1.02 + 3)))
out = Image.merge('RGB', (r, g, b)); out.putalpha(a)
out.save(sys.argv[2], 'WEBP', quality=90, method=6)
print(out.size)
