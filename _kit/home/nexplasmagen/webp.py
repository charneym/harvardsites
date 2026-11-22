"""Encode hero.png -> hero.webp: a long eased edge mask on the alpha (no box edge, DJ/DP), near-zero alpha cleared, lossless alpha."""
import sys, numpy as np
from PIL import Image
im = np.array(Image.open(sys.argv[1]).convert('RGBA')).astype(float)
H, W = im.shape[:2]
y = np.linspace(0, 1, H)[:, None]; x = np.linspace(0, 1, W)[None, :]
def ease(d, w): t = np.clip(d / w, 0, 1); return t * t * (3 - 2 * t)
m = ease(x, .14) * ease(1 - x, .14) * ease(y, .1) * ease(1 - y, .16)
a = im[..., 3] * m
a[a < 3] = 0
im[..., 3] = a; im[a == 0, :3] = 0
Image.fromarray(im.round().astype(np.uint8), 'RGBA').save(sys.argv[2], 'WEBP', quality=88, alpha_quality=100, method=6, exact=True)
