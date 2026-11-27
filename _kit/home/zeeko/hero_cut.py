#!/usr/bin/env python3
"""Zeeko hero: Zeeko's own product photo of the IRP50 Intelligent Robotic Polisher (blue and grey cabinet, control
panel, polishing window), already a real-alpha cut-out on their site:
https://www.zeeko.co.uk/home/wp-content/uploads/IRP50-Fanuc.png (2223x2499 RGBA). Cropped to its alpha box,
downscaled (below native), faint soft floor shadow baked from the base contour. Not mirrored (ZEEKO IRP50 lettering).
Out: hero-cut.webp"""
import numpy as np
from PIL import Image, ImageFilter
im = Image.open('irp50.src.png').convert('RGBA')
im = im.crop(im.getbbox())
TH = 1400
im = im.resize((round(im.width * TH / im.height), TH), Image.LANCZOS)
W, H = im.size
PL, PR, PT, PB = round(W * .03), round(W * .04), round(H * .02), round(H * .09)
PW, PH = W + PL + PR, H + PT + PB
al = np.array(im.split()[3]) > 128
bot = np.array([np.where(al[:, x])[0].max() if al[:, x].any() else -1 for x in range(W)])
sh = np.zeros((PH, PW), np.float32)
for x in range(W):
    if bot[x] < 0: continue
    b = bot[x] + PT
    sh[b - 6:b + int(H * .014), x + PL] = .9
s = Image.fromarray((sh * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(PW * .02))
sa = np.array(s).astype(np.float32) / 255 * .36 / .9
c = Image.fromarray(np.dstack([np.zeros((PH, PW, 3)), np.clip(sa, 0, 1) * 255]).astype(np.uint8), 'RGBA')
c.alpha_composite(im, (PL, PT))
c.save('hero-cut.webp', quality=88, method=6)
print('obj', W, H, 'asset', PW, PH)
