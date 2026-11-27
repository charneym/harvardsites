#!/usr/bin/env python3
"""PROD-7 hero cut-out: a product photo shot on a plain light background -> RGBA cut-out with a faint soft floor shadow
(the RECIPE_NOTES §3 squash/offset/blur shadow), padded so the blur never meets the edge.
usage: p7cut.py src out.webp [--tol 22] [--mirror] [--maxh 1100]
The background is flood-filled from the image border (so bright highlights inside the part are kept), then feathered."""
import sys, numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage
a = sys.argv[1:]; src, out = a[0], a[1]
tol = float(a[a.index('--tol')+1]) if '--tol' in a else 22
maxh = int(a[a.index('--maxh')+1]) if '--maxh' in a else 1100
im0 = Image.open(src)
HASA = im0.mode == 'RGBA' and np.asarray(im0)[..., 3].min() < 250
im = im0.convert('RGB')
if '--mirror' in a: im = im.transpose(Image.FLIP_LEFT_RIGHT)
A = np.asarray(im).astype(np.float32)
bg = np.median(np.concatenate([A[0], A[-1], A[:, 0], A[:, -1]]), axis=0)
d = np.sqrt(((A - bg) ** 2).sum(2))
near = d < tol
lab, n = ndimage.label(near)
edge = set(np.unique(np.concatenate([lab[0], lab[-1], lab[:, 0], lab[:, -1]]))) - {0}
bgm = np.isin(lab, list(edge))
SH = np.zeros(A.shape[:2], bool)
if '--shadow' in a:  # the photo's own soft floor shadow: smooth, unsaturated pixels grown from the background; kept as a real (black, partial-alpha) shadow
    L = A.mean(2); sd = np.sqrt(np.maximum(ndimage.uniform_filter(L*L, 5) - ndimage.uniform_filter(L, 5)**2, 0))
    thr = float(a[a.index('--shadow')+1]); sdt = float(a[a.index('--sd')+1]) if '--sd' in a else 4
    soft = (L > thr) & (sd < sdt) & ((A.max(2) - A.min(2)) < 12)
    g = bgm.copy()
    for _ in range(600):
        nb = ndimage.binary_dilation(g) & soft & ~g
        if not nb.any(): break
        g |= nb
    SH = g & ~bgm; bgm = g
if '--erase' in a:  # a hand polygon (source px) that belongs to the floor (reflection/shadow), not the part
    from PIL import ImageDraw
    pts = [float(v) for v in a[a.index('--erase')+1].split(',')]; m = Image.new('L', im.size, 0)
    if '--mirror' in a: pts = [im.width - 1 - v if k % 2 == 0 else v for k, v in enumerate(pts)]
    ImageDraw.Draw(m).polygon(list(zip(pts[::2], pts[1::2])), fill=255); E = np.asarray(m) > 0
    SH = SH | (E & ~bgm); bgm = bgm | E
fg = ~bgm
fg = ndimage.binary_opening(fg, iterations=1)
lab2, n2 = ndimage.label(fg)
if n2:
    sizes = ndimage.sum(fg, lab2, range(1, n2 + 1)); keep = sizes > sizes.max() * .02
    fg = np.isin(lab2, np.where(keep)[0] + 1)
fg = ndimage.binary_fill_holes(fg) if '--fill' in a else fg
fg = ndimage.binary_erosion(fg, iterations=int(a[a.index("--erode")+1]) if "--erode" in a else 2)
al = Image.fromarray((fg * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(.9))
# soften: pixels close to bg colour at the rim get partial alpha
alpha = np.asarray(al).astype(np.float32) / 255
rim = np.clip(d / (tol * 2.2), 0, 1)
alpha = np.where(alpha < .999, alpha * alpha, alpha)
sha = np.clip((252 - A.mean(2)) / 252 * 1.25, 0, .55) * ndimage.gaussian_filter(SH.astype(np.float32), 1.2)
A2 = A * alpha[..., None]; alpha = alpha + sha * (1 - alpha); A2 = np.where(alpha[..., None] > 0, A2 / np.maximum(alpha[..., None], 1e-4), 0)
rgba = np.dstack([A2, alpha * 255]).astype(np.uint8)
if HASA:
    rgba = np.asarray(im0.transpose(Image.FLIP_LEFT_RIGHT) if '--mirror' in a else im0).copy()
o = Image.fromarray(rgba, 'RGBA'); o = o.crop(o.getbbox())
if o.height > maxh: o = o.resize((round(o.width * maxh / o.height), maxh), Image.LANCZOS)
W, H = o.size; P = round(max(W, H) * .12)
PW, PH = W + 2 * P, H + 2 * P
sil = Image.new('L', (PW, PH), 0); sil.paste(o.split()[3], (P, P))
sq = sil.resize((PW, max(1, round(PH * .55))), Image.LANCZOS)
sh = Image.new('L', (PW, PH), 0)
sh.paste(sq, (round(PW * .035), round(P + H * .40 + (PH * .45 - P) * 0) ))
# keep the shadow's base aligned under the object's base
sh = Image.new('L', (PW, PH), 0); top = P + H - round(H * .55) + round(H * .06); sh.paste(sq.crop((0, round(P * .55), PW, round(P * .55) + round(H * .55))), (round(PW * .035), top))
sh = sh.filter(ImageFilter.GaussianBlur(PW * .022))
sa = np.asarray(sh).astype(np.float32) / 255 * .34
c = Image.fromarray(np.dstack([np.zeros((PH, PW, 3)), np.clip(sa, 0, 1) * 255]).astype(np.uint8), 'RGBA')
c.alpha_composite(o, (P, P))
c.save(out, quality=90, method=6)
print('obj', W, H, 'asset', PW, PH, 'pad', P)
