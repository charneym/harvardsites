#!/usr/bin/env python3
"""Hero grade: NCI scanning electron micrograph (Unsplash, photo-1581594355548-aab613ebdb69) of an oral squamous
cancer cell (white) attacked by two cytotoxic T cells (red). The black SEM ground becomes real alpha (un-premultiplied),
greys warmed slightly toward the page bone, the T cells kept in their own red, a long eased radial feather so no
box edge exists. Output hero.webp, RGBA, below native resolution."""
import sys, numpy as np
from PIL import Image, ImageFilter
src = sys.argv[1]
im = Image.open(src).convert('RGB')
W, H = im.size
im = im.crop((int(W*.03), 0, int(W*.985), H))
tw = 1800
im = im.resize((tw, round(im.size[1]*tw/im.size[0])), Image.LANCZOS)
im = im.filter(ImageFilter.UnsharpMask(radius=1.2, percent=40, threshold=2))
a = np.asarray(im).astype(np.float32)/255.
h, w = a.shape[:2]
L = a.max(axis=2)
Li = Image.fromarray((L*255).astype(np.uint8)).filter(ImageFilter.MaxFilter(9)).filter(ImageFilter.GaussianBlur(5))
Lb = np.maximum(L, np.asarray(Li).astype(np.float32)/255.)
al = np.clip((Lb-.015)/0.11, 0, 1); al = al*al*(3-2*al)
# un-premultiply against black, then grade
F = a/np.maximum(al[..., None], 1e-3); F = np.clip(F, 0, 1)
sat = F.max(axis=2)-F.min(axis=2)
rel = sat/np.maximum(F.max(axis=2), 1e-3)
grey = (rel < .3)[..., None]
Lg = F.mean(axis=2, keepdims=True)
warm = np.concatenate([Lg*.96, Lg*.92, Lg*.90], axis=2)  # faint warm bone
F = np.where(grey, warm, F)*0.9
# long eased radial feather (elliptical), so nothing ends on a line
yy, xx = np.mgrid[0:h, 0:w]
cx, cy = w*.5, h*.52
d = np.sqrt(((xx-cx)/(w*.5))**2+((yy-cy)/(h*.5))**2)
f = np.clip((1.0-d)/0.32, 0, 1); f = f*f*(3-2*f)
al = al*f
out = np.dstack([np.clip(F, 0, 1), al])
Image.fromarray((out*255+.5).astype(np.uint8), 'RGBA').save('hero.webp', quality=88, method=6)
print('hero.webp', w, h)
