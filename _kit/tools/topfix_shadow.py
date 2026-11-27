#!/usr/bin/env python3
"""TOP-FIX B (2026-11-27) helper, the same cast shadow as _kit/home/teknomedical-b/render_b.py, as a post step:
takes a hero render with real alpha, adds PAD px of transparent margin on every side and bakes a very faint, wide,
soft cast shadow on an implied surface below (the silhouette squashed toward the surface, pushed a little away from
the key, very wide blur, low opacity); the object is composited over it unchanged.
Usage: python3 topfix_shadow.py in.png out.webp PAD [dx_frac] [opacity] [drop_frac] [squash] [q]
  dx_frac: horizontal push in RENDER space (+ = right). The key comes from the headline side of the page, so the shadow
  falls away from it: pass a negative value when field.js mirrors the render (as Tekno), positive when it doesn't."""
import sys, numpy as np
from PIL import Image, ImageFilter
src, out, PAD = sys.argv[1], sys.argv[2], int(sys.argv[3])
DX = float(sys.argv[4]) if len(sys.argv) > 4 else -0.035
OP = float(sys.argv[5]) if len(sys.argv) > 5 else 0.34
DROP = float(sys.argv[6]) if len(sys.argv) > 6 else 0.40
SQ = float(sys.argv[7]) if len(sys.argv) > 7 else 0.55
Q = int(sys.argv[8]) if len(sys.argv) > 8 else 90
im = Image.open(src).convert('RGBA'); FW, FH = im.size
arr = np.asarray(im, float)/255; img, a = arr[..., :3], arr[..., 3]
FWp, FHp = FW+2*PAD, FH+2*PAD
sil = Image.fromarray((a*255).astype(np.uint8), 'L')
sh = Image.new('L', (FWp, FHp), 0)
sh.paste(sil.resize((FW, max(1, int(FH*SQ)))), (PAD+int(FW*DX), PAD+int(FH*DROP)))
sh = sh.filter(ImageFilter.GaussianBlur(FW*0.022))
sha = np.asarray(sh, float)/255*OP
obj = np.zeros((FHp, FWp, 3)); oa = np.zeros((FHp, FWp))
obj[PAD:PAD+FH, PAD:PAD+FW] = img; oa[PAD:PAD+FH, PAD:PAD+FW] = a
outa = oa+sha*(1-oa)
outc = np.where(outa[..., None] > 0, obj*oa[..., None]/np.maximum(outa[..., None], 1e-6), 0)
Image.fromarray(np.dstack([outc*255, outa*255]).clip(0, 255).astype(np.uint8), 'RGBA').save(out, quality=Q, method=6)
print('padded', FWp, FHp)
