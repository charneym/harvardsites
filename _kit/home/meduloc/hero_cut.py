#!/usr/bin/env python3
"""Hero for meduloc (PROD_BRIEF 3a): Meduloc's own macro photo of the implant (meduloc.com, static.wixstatic.com/media/
...i9: 3051x2105 on plain white): the superelastic nitinol intramedullary rod with its titanium locking screw. Cut out
from the white ground (flood fill from the border, largest component, 1px erosion), the rod's two ends (cut by the
photo's frame) fade out softly so no straight edge shows, then a faint soft floor shadow is baked in. Shown below
native size. Not mirrored needed: no lettering, but the screw already sits toward the headline. Out: hero-cut.webp"""
import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage as nd
src = Image.open('rod-screw.src.jpg').convert('RGB')
a = np.array(src).astype(int)
bg = (a.min(2) >= 236) & ((a.max(2) - a.min(2)) < 18)
lab, n = nd.label(bg)
border = set(np.unique(np.r_[lab[0], lab[-1], lab[:, 0], lab[:, -1]])) - {0}
fg = ~np.isin(lab, list(border))
l2, n2 = nd.label(fg)
fg = l2 == (np.argmax(nd.sum(fg, l2, range(1, n2 + 1))) + 1)
fg = nd.binary_fill_holes(fg); fg = nd.binary_erosion(fg, iterations=1)
m = np.asarray(Image.fromarray((fg*255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(.8))).astype(np.float32)/255
H, W = m.shape
x = np.arange(W)[None, :].astype(np.float32)
e = np.clip(np.minimum(x, W - 1 - x)/(W*.16), 0, 1); e = e*e*(3 - 2*e)     # the rod dissolves toward both frame edges
m = m*e
im = src.convert('RGBA'); im.putalpha(Image.fromarray((m*255).astype(np.uint8)))
im = im.rotate(24, resample=Image.BICUBIC, expand=True)        # a steeper diagonal, rising toward the upper right
im = im.crop(im.getbbox())
TW = 1500
im = im.resize((TW, round(im.height*TW/im.width)), Image.LANCZOS)
W, H = im.size
PL, PR, PT, PB = 20, 60, 20, round(H*.16)
PW, PH = W + PL + PR, H + PT + PB
al = np.array(im.split()[3]).astype(np.float32)/255
sh = np.zeros((PH, PW), np.float32)
sq = np.asarray(Image.fromarray((al*255).astype(np.uint8)).resize((W, max(1, int(H*.5))))).astype(np.float32)/255
oy = PT + int(H*.42)
sh[oy:oy+sq.shape[0], PL+int(W*.02):PL+int(W*.02)+W] = np.maximum(sh[oy:oy+sq.shape[0], PL+int(W*.02):PL+int(W*.02)+W], sq[:, :min(W, PW-PL-int(W*.02))])
s = Image.fromarray((sh*255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(W*.02))
sa = np.asarray(s).astype(np.float32)/255*.30
c = Image.fromarray(np.dstack([np.zeros((PH, PW, 3)), np.clip(sa, 0, 1)*255]).astype(np.uint8), 'RGBA')
c.alpha_composite(im, (PL, PT))
c.save('hero-cut.webp', quality=90, method=6)
print('obj', W, H, 'asset', PW, PH)
