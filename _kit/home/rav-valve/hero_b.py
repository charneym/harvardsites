#!/usr/bin/env python3
"""TOPFIX variant B for rav-valve (no re-render; keeps the existing hero.webp render).
- re-grades the specular light to neutral (the paint's navy albedo stays; only the bluish cast of the reflected
  light is removed), so it reads as a neutral studio key/fill/rim
- mirrors it (no lettering) so the open bore faces the headline
- bakes a faint, wide, soft cast shadow on an implied floor (from the object's own alpha, squashed toward the base,
  falling away from the key on the headline side) into a transparent pad, so no blur ever meets an image edge.
Out: hero_b.webp = hero.webp padded by PAD on every side."""
import numpy as np
from PIL import Image, ImageFilter
PAD = 100
im = Image.open('hero.webp').convert('RGBA').transpose(Image.FLIP_LEFT_RIGHT)
a = np.array(im).astype(np.float32)
rgb, al = a[..., :3], a[..., 3:4]
L = rgb.mean(-1, keepdims=True)
g = np.clip((L - 55) / (185 - 55), 0, 1); g = g * g * (3 - 2 * g)          # highlights only
rgb = rgb * (1 - .85 * g) + L * (.85 * g)
im = Image.fromarray(np.concatenate([np.clip(rgb, 0, 255), al], -1).astype(np.uint8), 'RGBA')
W, H = im.size; PW, PH = W + 2 * PAD, H + 2 * PAD
sil = im.split()[3]
ys = np.where(np.array(sil).max(1) > 128)[0]; bot = ys.max()               # base contact line
sh = Image.new('L', (PW, PH), 0)
# projected shadow: silhouette laid back onto the floor, 14% tall, sheared away from the key (to the page right)
pr = sil.resize((W, max(1, int(H * .14))), Image.LANCZOS)
pr = pr.transform(pr.size, Image.AFFINE, (1, -.9, 0, 0, 1, 0), Image.BICUBIC)  # lean right with height
pr = Image.fromarray((np.array(pr) * .75).astype(np.uint8))
sh.paste(pr, (PAD + int(W * .03), PAD + bot - pr.size[1] + int(H * .012)), pr)
# contact: the bottom band of the silhouette pressed flat under the base
cb = sil.crop((0, bot - int(H * .05), W, bot + 1)).resize((W, max(1, int(H * .018))), Image.LANCZOS)
sh.paste(Image.new('L', cb.size, 255), (PAD, PAD + bot - cb.size[1] // 2), cb)
sh = sh.filter(ImageFilter.GaussianBlur(PW * .022))
sa = np.array(sh).astype(np.float32) / 255 * .34
out = Image.fromarray(np.dstack([np.zeros((PH, PW, 3)), sa * 255]).astype(np.uint8), 'RGBA')
out.alpha_composite(im, (PAD, PAD))
out.save('hero_b.webp', quality=92, method=6)
print(W, H, PW, PH)
