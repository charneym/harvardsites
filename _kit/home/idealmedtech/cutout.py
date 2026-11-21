#!/usr/bin/env python3
"""Cut Ideal Medical Technologies' own FUSION product render (idealmedtech.com IMT_Fusion_R5_Final.png) out of its grey
studio ground into real alpha, so it sits on the site ink with no box edge (DP/DJ).
Method: fit a smooth polynomial to the studio ground from the border, mark pixels that differ from it, close and fill holes,
keep the components connected to the device, feather 1-2px, de-fringe the light ground out of edge pixels, and fade the
pole where the source frame cuts it at the bottom."""
import numpy as np, pathlib
from PIL import Image
from scipy import ndimage as nd
H = pathlib.Path(__file__).resolve().parent
im = np.asarray(Image.open(H / 'fusion_src.png').convert('RGB')).astype(np.float64)
h, w, _ = im.shape
yy, xx = np.mgrid[0:h, 0:w]
# the studio ground is smooth (gradient < 0.5/px); every outline of the device, pole, bags and tubes is sharper
g = nd.gaussian_filter(im, (1, 1, 0))
mag = np.zeros((h, w))
for c in range(3):
    mag = np.maximum(mag, np.hypot(nd.sobel(g[..., c], 0), nd.sobel(g[..., c], 1)) / 8)
lab, n = nd.label(mag < 0.9)
ground_ids = set(np.unique(np.r_[lab[0], lab[-1], lab[:, 0], lab[:, -1]])) - {0}
# ground pockets enclosed by the pole, bar, tubes and device (checked by eye): left of the pole, right of it, inside the hook
for (py, px) in [(206, 174), (213, 281), (73, 119)]:
    ground_ids.add(lab[py, px])
ground = np.isin(lab, list(ground_ids))
ground = nd.binary_dilation(ground, iterations=1)
mask = ~ground
mask = nd.binary_opening(mask, iterations=1)
lab2, n2 = nd.label(mask)
sizes = nd.sum(mask, lab2, range(1, n2 + 1))
mask = np.isin(lab2, 1 + np.nonzero(sizes > 60)[0])
# the insulin line fades into the ground for a few pixels under the drip chamber: bridge it (the original pixels show the tube)
for t in np.linspace(0, 1, 40):
    cy, cx = 250 + 22 * t, 104.5 + 3.5 * t
    mask[int(round(cy)), int(round(cx)) - 1:int(round(cx)) + 2] = True
alpha = nd.gaussian_filter(mask.astype(np.float64), 0.7)
# the ground behind each pixel: a normalised blur of the ground pixels only
gw = nd.gaussian_filter(ground.astype(float), 6) + 1e-6
bg = np.stack([nd.gaussian_filter(im[..., c] * ground, 6) for c in range(3)], -1) / gw[..., None]
# fade the pole and tube ends where the frame cuts them at the bottom
fade = np.clip((h - 1 - yy) / 26.0, 0, 1)
fade = fade * fade * (3 - 2 * fade)
alpha *= np.where(yy > h - 30, fade, 1)
# de-fringe: remove the ground's contribution from semi-transparent edge pixels
a3 = alpha[..., None]
fg = np.where(a3 > 0.02, (im - bg * (1 - a3)) / np.maximum(a3, 0.02), im)
fg = np.clip(fg, 0, 255)
out = np.dstack([fg, alpha * 255]).astype(np.uint8)
Image.fromarray(out, 'RGBA').save(H / 'fusion_cut.png')
Image.fromarray(out, 'RGBA').save(H / 'hero.webp', quality=92, method=6)
# preview on the site ink
ink = np.array([12, 27, 36], float)
pv = fg * a3 + ink * (1 - a3)
Image.fromarray(pv.astype(np.uint8)).save('/tmp/claude-0/-home-user-harvardsites/7d8283fd-3934-5a2e-97a8-3aaebf2c750a/scratchpad/img/cut_preview.png')
print('ok', w, h, int(mask.sum()))
