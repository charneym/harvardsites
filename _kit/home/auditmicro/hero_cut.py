#!/usr/bin/env python3
"""AUDIT MicroControls hero (PROD_BRIEF 2.3a): their own product photo of Linearity LQ Osmolality (K745M-5), five
levels A-E (auditmicro.com product catalog image 745.png, 2400x2387, real alpha). Their alpha is kept (edge eroded 1px
so no fringe survives), the set is cropped and downscaled (below native), a faint soft floor shadow is baked in.
No mirror (labels carry lettering). Out: hero-cut.webp"""
import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage as nd
im = Image.open('vials.src.png').convert('RGBA')
a = np.array(im)
al = a[..., 3] > 8
al = nd.binary_erosion(al, iterations=1)
a[..., 3] = np.where(al, a[..., 3], 0)
a[1686:, :, 3] = 0                                  # drop the photo's own mirror reflection under the vials
im = Image.fromarray(a, 'RGBA'); im = im.crop(im.getbbox())
TW = 1160
im = im.resize((TW, round(im.height * TW / im.width)), Image.LANCZOS)
W, H = im.size
PL, PR, PT, PB = round(W * .03), round(W * .03), round(H * .03), round(H * .16)
PW, PH = W + PL + PR, H + PT + PB
m = np.array(im.split()[3]) > 128
bot = np.array([np.where(m[:, x])[0].max() if m[:, x].any() else -1 for x in range(W)])
sh = np.zeros((PH, PW), np.float32)
for x in range(W):
    if bot[x] < 0: continue
    b = bot[x] + PT
    sh[b - 6:b + int(H * .03), x + PL] = .9
s = Image.fromarray((sh * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(PW * .016))
sa = np.array(s).astype(np.float32) / 255 * .36 / .9
c = Image.fromarray(np.dstack([np.zeros((PH, PW, 3)), np.clip(sa, 0, 1) * 255]).astype(np.uint8), 'RGBA')
c.alpha_composite(im, (PL, PT))
c.save('hero-cut.webp', quality=88, method=6)
print('obj', W, H, 'asset', PW, PH)
