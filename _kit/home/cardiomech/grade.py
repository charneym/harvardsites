#!/usr/bin/env python3
"""Grade CardioMech's own photograph (cardiomech.com asset A1upBLM7z, 1920x1278: the founders in scrubs in an
interventional suite) for the hero: soften the third-party hospital signage and scrub print, desaturate a touch,
pull the shadows toward the site ink, keep tonal depth. Usage: grade.py in.jpg out.webp"""
import sys
from PIL import Image, ImageFilter, ImageEnhance, ImageChops
im = Image.open(sys.argv[1]).convert('RGB')
W, H = im.size
f = W / 1600
from PIL import ImageDraw
bl = im.filter(ImageFilter.GaussianBlur(10*f))
mk = Image.new('L', im.size, 0); d = ImageDraw.Draw(mk)
for box in [(1092,112,1244,160),(1104,218,1186,246),(1006,602,1074,640)]:
    d.rectangle(tuple(int(v*f) for v in box), fill=255)
mk = mk.filter(ImageFilter.GaussianBlur(7*f))
im = Image.composite(bl, im, mk)
im = ImageEnhance.Color(im).enhance(.78)
im = ImageEnhance.Contrast(im).enhance(1.06)
im = ImageEnhance.Brightness(im).enhance(.9)
# shadows toward the ink (#141113): multiply-blend a faint ink layer weighted by darkness
ink = Image.new('RGB', im.size, (20,17,19))
lum = im.convert('L').point(lambda v: int(max(0, 150 - v) * 1.1))
im = Image.composite(ink, im, lum.point(lambda v: min(255, int(v*.55))))
im.save(sys.argv[2], 'WEBP', quality=86, method=6)
print(im.size)
