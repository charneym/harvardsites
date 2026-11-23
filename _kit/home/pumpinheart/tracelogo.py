#!/usr/bin/env python3
"""Redraw Pumpinheart's own logo (pumpinheart.com header, 'Pumpinheart Logo for Website with Flesh Red I.tiff', 884x125:
flesh-red heart #d04a4b + white bold wordmark on #333) as clean filled SVG paths (PRINCIPLES DR.2). The raster is upsampled
x8 (bicubic), thresholded, and each region's boundary is followed along pixel cracks and lightly simplified (RDP), so the
outline error is < 1/8 source px. Usage: tracelogo.py logo.tiff out.svg"""
import sys, numpy as np
from PIL import Image
K = 8
im = Image.open(sys.argv[1]).convert('RGB')
big = np.asarray(im.resize((im.width * K, im.height * K), Image.BICUBIC)).astype(float)
r, g, b = big[..., 0], big[..., 1], big[..., 2]
# distance to the three source colours: ground #333, red #d04a4b, white
def d2(c): return (r - c[0]) ** 2 + (g - c[1]) ** 2 + (b - c[2]) ** 2
D = np.stack([d2((51, 51, 51)), d2((208, 74, 75)), d2((255, 255, 255))])
lum = (r + g + b) / 3
redm = (r - g > 70) & (r - b > 70)
cls = np.where(redm, 1, np.where(lum > 153, 2, 0))
def loops(mask):
    m = np.pad(mask, 1)
    H, W = m.shape
    nxt = {}
    # directed crack edges with the inside on the left (y down): vertices are pixel corners
    ys, xs = np.nonzero(m[:, 1:] & ~m[:, :-1])   # left edge of inside pixel at (y, x+1): go down? choose orientation
    for y, x in zip(ys, xs): nxt.setdefault((x + 1, y + 1), []).append((x + 1, y))        # upwards on left side
    ys, xs = np.nonzero(m[:, :-1] & ~m[:, 1:])
    for y, x in zip(ys, xs): nxt.setdefault((x + 1, y), []).append((x + 1, y + 1))        # downwards on right side
    ys, xs = np.nonzero(m[1:, :] & ~m[:-1, :])   # top edge of inside pixel (y+1, x)
    for y, x in zip(ys, xs): nxt.setdefault((x, y + 1), []).append((x + 1, y + 1))        # rightwards on top
    ys, xs = np.nonzero(m[:-1, :] & ~m[1:, :])   # bottom edge of inside pixel (y, x)
    for y, x in zip(ys, xs): nxt.setdefault((x + 1, y + 1), []).append((x, y + 1))        # leftwards on bottom
    out = []
    while nxt:
        s = next(iter(nxt)); pts = [s]; cur = s; prev = None
        while True:
            cands = nxt[cur]
            if len(cands) > 1 and prev is not None:
                dx, dy = cur[0] - prev[0], cur[1] - prev[1]
                # prefer turning so the inside stays connected (right turn in screen coords)
                pref = (cur[0] - dy, cur[1] + dx)
                nx_ = pref if pref in cands else cands[0]
            else: nx_ = cands[0]
            cands.remove(nx_)
            if not cands: del nxt[cur]
            prev, cur = cur, nx_
            if cur == s: break
            pts.append(cur)
        out.append(np.array(pts, float) - 1)
    return out
def rdp(P, eps):
    if len(P) < 3: return P
    a, b_ = P[0], P[-1]; v = b_ - a; n = np.hypot(*v)
    d = np.abs(v[0] * (P[:, 1] - a[1]) - v[1] * (P[:, 0] - a[0])) / n if n else np.hypot(*(P - a).T)
    i = int(d.argmax())
    if d[i] > eps: return np.vstack([rdp(P[:i + 1], eps)[:-1], rdp(P[i:], eps)])
    return np.vstack([a, b_])
def path(mask):
    s = []
    for L in loops(mask):
        if len(L) < 24: continue
        i = int(np.argmin(L[:, 0] + L[:, 1] * 1e-3)); L = np.roll(L, -i, 0); L = np.vstack([L, L[:1]])
        P = rdp(L, 1.4)[:-1] / K
        s.append('M' + 'L'.join('%.2f %.2f' % (x, y) for x, y in P) + 'Z')
    return ''.join(s)
red = path(cls == 1); wht = path(cls == 2)
ys, xs = np.nonzero(cls > 0); x0, y0, x1, y1 = xs.min() / K - 1, ys.min() / K - 1, xs.max() / K + 2, ys.max() / K + 2
svg = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="%.1f %.1f %.1f %.1f"><path class="phm" fill="#d04a4b" fill-rule="evenodd" d="%s"/>'
       '<path class="phw" fill="#333333" fill-rule="evenodd" d="%s"/></svg>') % (x0, y0, x1 - x0, y1 - y0, red, wht)
open(sys.argv[2], 'w').write(svg); print(len(svg))
