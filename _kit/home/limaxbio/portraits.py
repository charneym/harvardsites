#!/usr/bin/env python3
"""Team portraits for the v7 team grid: the four headshots published on limaxbiosciences.com/our-team (transparent cutouts,
originals from static.wixstatic.com) composed at one 4:5 crop on one soft backdrop, head tops aligned and never upscaled past
the source. Usage: python3 portraits.py <dir with freedman.png mooney.png kwon.png ijaz.png>  -> team-<name>.webp here."""
import sys, pathlib
from PIL import Image, ImageDraw, ImageFilter
H = pathlib.Path(__file__).resolve().parent
src = pathlib.Path(sys.argv[1])
W, HH = 480, 600
def backdrop():
    bg = Image.new('RGB', (W, HH), (226, 231, 240))
    g = Image.new('L', (W, HH), 0); d = ImageDraw.Draw(g)
    d.ellipse((-W * .2, -HH * .25, W * 1.2, HH * .85), fill=255)
    g = g.filter(ImageFilter.GaussianBlur(90))
    lite = Image.new('RGB', (W, HH), (242, 245, 250))
    return Image.composite(lite, bg, g)
for n in ['freedman', 'mooney', 'kwon', 'ijaz']:
    im = Image.open(src / f'{n}.png').convert('RGBA')
    a = im.split()[3].point(lambda v: 255 if v > 40 else 0); bb = a.getbbox(); im = im.crop(bb)
    w, h = im.size
    s = min(1.0 * 1.0, max((HH * .9) / h, W / w))          # cover the width, head top near 10%
    s = min(s, 1.0) if min(w, h) > 600 else s               # never blow a small source up more than needed
    im = im.resize((round(w * s), round(h * s)), Image.LANCZOS)
    w, h = im.size
    # centre on the face: centroid of the top 35% of the alpha
    top = im.crop((0, 0, w, int(h * .35))).split()[3]
    xs = [x for x in range(w) for y in range(0, top.height, 6) if top.getpixel((x, y)) > 128]
    cx = sum(xs) / len(xs) if xs else w / 2
    x0 = round(W / 2 - cx); y0 = HH - h
    bg = backdrop(); bg.paste(im, (x0, y0), im)
    bg.save(H / f'team-{n}.webp', quality=88, method=6)
    print(n, 'scale', round(s, 3), 'placed', x0, y0)
