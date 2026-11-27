#!/usr/bin/env python3
"""Cybel hero: Cybel's own photo of its turnkey BENCHTOP fiber amplifier with fiber patch cords
(https://cybel-llc.com/wp-content/uploads/2024/10/Cybel-Benchtop-fiber-amplifiers-scaled.webp, 2560x1600, product on
plain white; the unit itself spans rows 388-1141). The title/caption text is cropped away, the white ground is
flood-filled from the border, components below a size floor dropped, holes filled only inside the chassis (the cord
loops stay open), edge eroded 1px, then a faint soft floor shadow baked from the base contour (tas-chambers / benson
recipe). Shown below native size. No mirror (lettering: DANGER label, Cybel mark). Out: hero-cut.webp"""
import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage as nd
src = Image.open('benchtop.src.webp').convert('RGB').crop((0, 370, 2560, 1160))
a = np.array(src).astype(int)
bg = a.min(2) >= 246
lab, n = nd.label(bg)
border = set(np.unique(np.r_[lab[0], lab[-1], lab[:, 0], lab[:, -1]])) - {0}
fg = ~np.isin(lab, list(border))
l2, n2 = nd.label(fg)
sz = nd.sum(fg, l2, range(1, n2 + 1))
keep = [i + 1 for i, s in enumerate(sz) if s > 400]
fg = np.isin(l2, keep)
# fill enclosed white only where it is small (specular patches inside the chassis), keep the cord loops open
holes = nd.binary_fill_holes(fg) & ~fg
hl, hn = nd.label(holes)
hs = nd.sum(holes, hl, range(1, hn + 1))
fg = fg | np.isin(hl, [i + 1 for i, s in enumerate(hs) if s < 2500])
fg = nd.binary_erosion(fg, iterations=1)
m = Image.fromarray((fg * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(.6))
im = src.convert('RGBA'); im.putalpha(m)
im = im.crop(im.getbbox())
TW = 1500                                     # object width in the asset (native ~1690); displayed at <=640 css px
im = im.resize((TW, round(im.height * TW / im.width)), Image.LANCZOS)
W, H = im.size
PL, PR, PT, PB = round(W * .03), round(W * .06), round(H * .03), round(H * .10)
PW, PH = W + PL + PR, H + PT + PB
al = np.array(im.split()[3]) > 128
bot = np.array([np.where(al[:, x])[0].max() if al[:, x].any() else -1 for x in range(W)])
sh = np.zeros((PH, PW), np.float32)
for x in range(W):
    if bot[x] < 0: continue
    b = bot[x] + PT
    sh[b - 6:b + int(H * .012), x + PL] = .9
s = Image.fromarray((sh * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(PW * .02))
sa = np.array(s).astype(np.float32) / 255 * .34 / .9
c = Image.fromarray(np.dstack([np.zeros((PH, PW, 3)), np.clip(sa, 0, 1) * 255]).astype(np.uint8), 'RGBA')
c.alpha_composite(im, (PL, PT))
c.save('hero-cut.webp', quality=88, method=6)
print('obj', W, H, 'asset', PW, PH, 'pads', PL, PR, PT, PB)
