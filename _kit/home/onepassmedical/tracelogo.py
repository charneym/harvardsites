#!/usr/bin/env python3
"""Trace OnePass Medical's own raster logo (onepassmedical.com, 388x100 PNG) into clean filled SVG paths, so the mark is
crisp at any size (PRINCIPLES DR.2). Blue 'OnePass' and the grey 'Medical' + swoosh + rule are traced separately so the
grey can be lifted to bone on the dark site. Usage: tracelogo.py logo.png out.svg"""
import sys, numpy as np, potrace
from PIL import Image
im = Image.open(sys.argv[1]).convert('RGBA'); K = 8
big = im.resize((im.width * K, im.height * K), Image.BICUBIC)
a = np.asarray(big).astype(float); al = a[..., 3] / 255; r, g, b = a[..., 0], a[..., 1], a[..., 2]
# classify by the nearest original colour of the (unblurred) source, nearest-neighbour upscaled
src = np.asarray(im.resize(big.size, Image.NEAREST)).astype(float)
blue_px = (src[..., 2] - src[..., 0] > 60) & (src[..., 3] > 0)
# spread the classification to the anti-aliased fringe
from skimage.morphology import dilation, disk
blue_zone = dilation(blue_px, disk(K * 2))
grey_zone = dilation(~blue_px & (src[..., 3] > 0), disk(K * 2)) & ~blue_px
def trace(mask):
    bm = potrace.Bitmap(~mask)  # potracer fills the dark (False) pixels
    pl = bm.trace(turdsize=8, alphamax=1.0, opticurve=True, opttolerance=0.2)
    d = []
    for c in pl:
        s = c.start_point; d.append('M%.2f %.2f' % (s.x / K, s.y / K))
        for seg in c.segments:
            if seg.is_corner: d.append('L%.2f %.2f L%.2f %.2f' % (seg.c.x / K, seg.c.y / K, seg.end_point.x / K, seg.end_point.y / K))
            else: d.append('C%.2f %.2f %.2f %.2f %.2f %.2f' % (seg.c1.x / K, seg.c1.y / K, seg.c2.x / K, seg.c2.y / K, seg.end_point.x / K, seg.end_point.y / K))
        d.append('Z')
    return ''.join(d)
m = al > 0.5
db = trace(m & blue_zone & ~grey_zone | (m & blue_px)); dg = trace(m & grey_zone & ~blue_px)
svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %d %d"><path class="lb" fill="#4495d5" fill-rule="evenodd" d="%s"/><path class="lg" fill="#414142" fill-rule="evenodd" d="%s"/></svg>' % (im.width, im.height, db, dg)
open(sys.argv[2], 'w').write(svg); print(len(svg))
