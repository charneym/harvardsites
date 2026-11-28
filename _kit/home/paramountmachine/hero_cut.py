#!/usr/bin/env python3
"""Paramount hero: four of their own product photographs (paramountmachine.com > Photos, paramount-part-NN-GRID-072218.jpg,
each 600x450 on a pure white ground): a gold-anodised machined housing block (03), a gold-anodised manifold (02), a
threaded brass yoke (11) and a turned brass fitting (13). The photos carry soft grey floor shadows, so each part is cut
out by colour: what is saturated (gold, brass) or deep in shade inside a bore is the part; holes closed and filled, then the see-through openings (enclosed areas that are pure white) opened again; 2 px erosion, edge pixels take the
colour of the nearest interior pixel (no white halo), and a soft edge.
The four are composed as one group on a transparent canvas, back to front, each with a faint soft contact shadow, no
scaling up beyond the photographs (shown below native size). Out: hero-cut.webp"""
import numpy as np, cv2
from PIL import Image, ImageFilter
from scipy import ndimage as nd
def cut(path):
    img = cv2.imread(path); hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV).astype(int); s, v = hsv[..., 1], hsv[..., 2]
    # everything off the white ground (keeps the pale top faces) ...
    m = (v < 244) | (s > 18)
    m = nd.binary_opening(m, iterations=1); m = nd.binary_closing(m, iterations=2)
    # ... minus the soft grey floor shadow, which lies only BELOW the part: per column, neutral pixels under the lowest
    # gold/brass pixel are ground
    body = nd.binary_opening((s > 34) | (v < 70), iterations=1)
    H_, W_ = m.shape
    rows = np.arange(H_)[:, None]
    has = body.any(0); base = np.where(has, H_ - 1 - np.argmax(body[::-1], 0), -1)
    below = rows > (base[None, :] + 2)
    m &= ~(below & (s < 22))
    m &= has[None, :] | (s > 22)                 # columns with no gold at all are ground
    m &= ~((v > 245) & (s < 8))                  # and pure white anywhere is ground
    m = nd.binary_opening(m, iterations=2)
    f = nd.binary_fill_holes(m)
    l, n = nd.label(f); sz = nd.sum(f, l, range(1, n + 1)); f = np.isin(l, 1 + np.where(sz > 800)[0])
    see = f & (v > 246) & (s < 10)
    see = nd.binary_opening(see, iterations=2)
    ls, ns = nd.label(see)
    ok = [i for i in range(1, ns + 1) if (ls == i).sum() > 120]
    f &= ~np.isin(ls, ok)
    f = nd.binary_erosion(f, iterations=2)
    # edge pixels carry the white ground: give them the colour of the nearest interior pixel (no white halo)
    inner = nd.binary_erosion(f, iterations=3)
    _, (iy, ix) = nd.distance_transform_edt(~inner, return_indices=True)
    band = ~inner; img = img.copy(); img[band] = img[iy[band], ix[band]]   # also under the transparent ground, so resizing cannot blend white in
    a = cv2.GaussianBlur((f * 255).astype(np.uint8), (0, 0), 0.9)
    im = Image.fromarray(img[..., ::-1]).convert('RGBA'); im.putalpha(Image.fromarray(a)); return im.crop(im.getbbox())
parts = {k: cut('part%s.src.jpg' % k) for k in ('03', '02', '11', '13')}
CW, CH = 1300, 840
canvas = Image.new('RGBA', (CW, CH), (0, 0, 0, 0))
shadow = np.zeros((CH, CW), np.float32)
# placement: (key, x, y of the part's bottom-centre, scale)
place = [('02', 340, 470, 0.95), ('03', 760, 560, 1.06), ('11', 330, 760, 0.9), ('13', 1080, 790, 0.85)]
layers = []
for k, cx, by, sc in place:
    p = parts[k]
    if sc != 1.0: p = p.resize((round(p.width * sc), round(p.height * sc)), Image.LANCZOS)
    x, y = round(cx - p.width / 2), round(by - p.height)
    al = np.array(p.split()[3]) > 160
    bot = np.array([np.where(al[:, i])[0].max() if al[:, i].any() else -1 for i in range(p.width)])
    for i in range(p.width):
        if bot[i] < p.height * .6: continue
        yy = y + bot[i]; xx = x + i
        if 0 <= xx < CW: shadow[max(0, yy - 6):min(CH, yy + 10), xx] = .9
    layers.append((p, x, y))
sh = Image.fromarray((shadow * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(14))
sa = np.array(sh).astype(np.float32) / 255 * .32 / .9
canvas = Image.fromarray(np.dstack([np.zeros((CH, CW, 3)), np.clip(sa, 0, 1) * 255]).astype(np.uint8), 'RGBA')
for p, x, y in layers: canvas.alpha_composite(p, (max(0, x), max(0, y)))
canvas = canvas.crop(canvas.getbbox())
canvas.save('hero-cut.webp', quality=90, method=6)
print('asset', canvas.size)
