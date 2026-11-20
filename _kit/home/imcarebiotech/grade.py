#!/usr/bin/env python3
"""Grade the NCI Unsplash photo (blood samples in a rack) for the ImCare hero.
Source: https://unsplash.com/photos/white-and-red-plastic-tools-9k4Fglw6eFQ (National Cancer Institute, Unsplash License)
CDN https://images.unsplash.com/photo-1581594693702-fbdc51b2763b (full 5184 px). Usage: grade.py in.jpg out.webp
The bright yellow rack is pulled down to a dim plum lattice; the lavender caps (close to the logo lavender) and the blood
keep their colour; edges feather to transparent so the art closes into the page ink (DJ)."""
import sys, numpy as np
from PIL import Image, ImageFilter
im = Image.open(sys.argv[1]).convert('RGB')
W, H = im.size
im = im.crop((int(W*.10), int(H*.06), int(W*.75), H))
im = im.resize((2000, round(2000*im.height/im.width)), Image.LANCZOS).filter(ImageFilter.UnsharpMask(radius=1.6, percent=70, threshold=2))
a = np.asarray(im).astype(np.float32)/255
# a smooth global colour remap (no masks, so no halos): fitted on pairs sampled from the photo
#   yellow rack -> deep plum, pale rack highlights -> muted plum, lavender caps -> logo lavender,
#   red caps -> a deep red, white labels -> soft white, blood -> blood
src = np.array([[.98,.93,.35],[.95,.92,.62],[.80,.75,.95],[.80,.35,.22],[.97,.97,.97],[.55,.12,.12],[.75,.70,.25],[.62,.60,.80]])
dst = np.array([[.20,.13,.27],[.30,.22,.38],[.76,.64,.93],[.70,.26,.24],[.86,.83,.91],[.50,.10,.13],[.15,.09,.21],[.62,.52,.78]])
X = np.hstack([src, np.ones((len(src),1))])
M, *_ = np.linalg.lstsq(X, dst, rcond=None)
out = np.clip(np.concatenate([a, np.ones(a.shape[:2]+(1,),np.float32)], -1) @ M.astype(np.float32), 0, 1)
out = out*.92
# v2: the out-of-focus rack is crushed into the page ink so only the tubes carry light (no soft grey panel, no box edge);
# blood and the red caps are protected by their redness
def ss(x): x = np.clip(x, 0, 1); return x*x*(3-2*x)
src0 = a; R0, G0, B0 = src0[...,0], src0[...,1], src0[...,2]
red = ss((R0-np.maximum(G0, B0)-.04)/.25)
L2 = out.mean(-1)
keep = np.clip(ss((L2-.28)/.42) + red, 0, 1)
keep = np.asarray(Image.fromarray((keep*255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(14))).astype(np.float32)/255
ink = np.array([20,12,28], np.float32)/255
out = ink + (out-ink)*(.38+.62*keep)[...,None]
# alpha: the crushed ground is transparent; a long eased fade at every edge of the crop
hh, ww = out.shape[:2]
yy = np.linspace(0, 1, hh)[:, None]; xx = np.linspace(0, 1, ww)[None, :]
edge = ss(xx/.22)*ss((1-xx)/.22)*ss(yy/.18)*ss((1-yy)/.34)
al = np.clip(keep*1.15, 0, 1)**1.1*edge
o = np.dstack([out, al])
Image.fromarray((o*255+.5).astype(np.uint8), 'RGBA').save(sys.argv[2], quality=92, method=6)
print('wrote', sys.argv[2], ww, hh)
