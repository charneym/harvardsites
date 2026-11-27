#!/usr/bin/env python3
"""Hero for ambulatory-monitoring (PROD_BRIEF 3a): AMI's own studio photo of the Micro Motionlogger actigraph
(ambulatory-monitoring.com, static.wixstatic.com/media/6c36cc_e1c66be1103247c6b32c48752823f021~mv2.jpg, 3872x2592,
"Micro MOtion Watch.jpg"), shot on a plain deep-navy ground. The watch is cropped from the frame and given a soft
elliptical alpha, so its own dark ground and the strap ends dissolve into the page ink (#070c1e, sampled from the
photo's ground): no frame, no rectangle, no seam. Shown well below native size. Not mirrored (printed face).
Also cuts the red waveform mark out of their logo PNG for the header. Out: hero-cut.webp, ami-mark.png"""
import numpy as np
from PIL import Image, ImageFilter
im = Image.open('micro-motionlogger.src.jpg').convert('RGB')
im = im.crop((340, 0, 3340, 2592))                       # the watch, centred
W, H = im.size
y, x = np.mgrid[0:H, 0:W].astype(np.float32)
dx = (x - W*.5)/(W*.5); dy = (y - H*.5)/(H*.5)
r = np.sqrt((dx/1.02)**2 + (dy/1.16)**2)
a = np.clip((1.0 - r)/0.26, 0, 1); a = a*a*(3 - 2*a)        # solid core, a wide soft edge
e = np.minimum(np.minimum(x, W - 1 - x)/(W*.10), np.minimum(y, H - 1 - y)/(H*.12)); e = np.clip(e, 0, 1)
a = a*e*e*(3 - 2*e)                                          # and exactly zero at every border: no straight edge
px = np.asarray(im, np.float32); mx = px[..., :2].max(2)
w = np.clip((50 - mx)/26, 0, 1)[..., None]                   # the photo's own dark ground (and the black strap) goes to the page ink,
INK = np.array((7, 12, 30), np.float32)                      # so no lighter blue patch shows around the watch
px = px*(1 - w) + INK*w
im = Image.fromarray(px.clip(0, 255).astype(np.uint8))
rgba = np.dstack([np.asarray(im, np.float32), a*255]).astype(np.uint8)
out = Image.fromarray(rgba, 'RGBA').resize((1400, round(1400*H/W)), Image.LANCZOS)
out.save('hero-cut.webp', quality=88, method=6)
print('hero', out.size)
lg = Image.open('ami-logo.src.png').convert('RGBA')
L = np.asarray(lg).astype(np.int32)
red = (L[..., 0] > 150) & (L[..., 1] < 120) & (L[..., 2] < 130) & (L[..., 3] > 0)
m = np.zeros(L.shape, np.uint8); m[..., 0] = 232; m[..., 1] = 52; m[..., 2] = 60; m[..., 3] = (red*255).astype(np.uint8)
mk = Image.fromarray(m, 'RGBA'); mk = mk.crop(mk.getbbox())
mk.save('ami-mark.png'); print('mark', mk.size)
