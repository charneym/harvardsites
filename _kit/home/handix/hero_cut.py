#!/usr/bin/env python3
"""Handix hero: their own product photo of the POPS (Portable Optical Particle Spectrometer), handixscientific.com
"POPS-Instrument-2026-scaled.png", 2560x2311, already a cut-out with real alpha. Cropped to its alpha box, scaled to
1500px wide (below native), a faint contact shadow baked under it. No relight, no mirror (laser labels carry lettering).
Out: hero-cut.webp"""
import numpy as np
from PIL import Image, ImageFilter
im = Image.open('pops.src.png').convert('RGBA')
im = im.crop(im.getchannel('A').point(lambda v: 255 if v > 8 else 0).getbbox())
W = 1500; im = im.resize((W, round(im.height * W / im.width)), Image.LANCZOS)
pad = 40; c = Image.new('RGBA', (im.width + 2 * pad, im.height + 2 * pad), (0, 0, 0, 0))
a = np.array(im.getchannel('A')).astype(np.float32) / 255
sh = Image.fromarray((a * 255 * .38).astype(np.uint8)).filter(ImageFilter.GaussianBlur(18))
shadow = Image.new('RGBA', im.size, (0, 0, 0, 0)); shadow.putalpha(sh)
c.alpha_composite(shadow, (pad + 6, pad + 22)); c.alpha_composite(im, (pad, pad))
c.save('hero-cut.webp', quality=88, method=6); print('asset', c.size)
