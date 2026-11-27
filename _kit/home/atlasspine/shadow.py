#!/usr/bin/env python3
"""TOP-FIX B 2026-11-27 (RECIPE_NOTES section 3): bake a faint soft cast shadow into a padded copy of the hero image.
The silhouette (alpha) is squashed to 55% height, shifted 40% of the height down and 3.5% of the width away from the
key (the key is upper left on the page, so +x unless MIRROR), blurred by 2.2% of the width, 0.34 black; the object is
composited over it unchanged, in PAD px of transparent margin on every side. The object's own pixels are not relit.
Usage: python3 shadow.py in.webp out.webp [PAD] [mirror]"""
import sys, numpy as np
from PIL import Image, ImageFilter
src, out = sys.argv[1], sys.argv[2]
PAD = int(sys.argv[3]) if len(sys.argv) > 3 else 120
MIR = len(sys.argv) > 4 and sys.argv[4] == 'mirror'
im = Image.open(src).convert('RGBA'); FW, FH = im.size
a = np.asarray(im, float)[..., 3]/255
sil = im.getchannel('A')
sh = Image.new('L', (FW+2*PAD, FH+2*PAD), 0)
dx = int(FW*0.035)*(-1 if MIR else 1)
sh.paste(sil.resize((FW, int(FH*0.55))), (PAD+dx, PAD+int(FH*0.40)))
sh = sh.filter(ImageFilter.GaussianBlur(FW*0.022))
sha = np.asarray(sh, float)/255*0.34
obj = np.zeros((FH+2*PAD, FW+2*PAD, 3)); oa = np.zeros((FH+2*PAD, FW+2*PAD))
obj[PAD:PAD+FH, PAD:PAD+FW] = np.asarray(im, float)[..., :3]/255; oa[PAD:PAD+FH, PAD:PAD+FW] = a
outa = oa + sha*(1-oa)
outc = np.where(outa[..., None] > 0, obj*oa[..., None]/np.maximum(outa[..., None], 1e-6), 0)
Image.fromarray(np.dstack([outc*255, outa*255]).clip(0, 255).astype(np.uint8), 'RGBA').save(out, quality=92, method=6)
print(out, FW, FH, 'pad', PAD)
