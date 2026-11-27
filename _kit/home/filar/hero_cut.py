#!/usr/bin/env python3
"""FILAR Optomaterials hero: their own studio photo of three laser crystal rods (lilac, pink and violet; filaroptomaterials.com
wp-content/uploads/2023/10/DSC08816.jpg, 1920x1078, rods lying on a pale bench). Each rod is a cylinder, so its
silhouette is convex: per rod, a colour mask (violet/magenta hue, or the pink rod's red hue, well above the warm-grey bench's
saturation) plus the near end face traced from 3x zooms, then the convex hull; the bench between the rods and the hard cast
shadows stay out. Edge eroded 2px and feathered more toward the left, where the photo's depth of field softens the far ends. Faint soft floor shadow
baked from the rods' lower contour (benson / tas-chambers recipe). Shown below native size. Not mirrored. Out: hero-cut.webp"""
import numpy as np, cv2
from PIL import Image, ImageFilter
from scipy import ndimage as nd
img = cv2.imread('rods.src.jpg'); H, W = img.shape[:2]
hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV).astype(int); h, s, v = hsv[..., 0], hsv[..., 1], hsv[..., 2]
cls = {'lilac': (h > 135) & (h < 175) & (s > 30) & (v > 175), 'pink': ((h < 10) | (h > 172)) & (s > 70),
       'violet': (h > 130) & (h < 178) & (s > 30) & (v < 165) & (v > 60)}
# the near end faces (elliptical), traced from 3x zooms of the photo
END = {'lilac': [(890, 638), (905, 650), (915, 665), (918, 683), (913, 705), (900, 722), (885, 732), (863, 736)],
       'pink': [(1420, 630), (1435, 634), (1447, 645), (1452, 660), (1450, 685), (1442, 705), (1430, 716), (1412, 718)],
       'violet': [(1530, 556), (1547, 560), (1558, 575), (1563, 597), (1558, 620), (1548, 638), (1535, 646), (1522, 646)]}
XCUT = {'lilac': 860, 'pink': 1410, 'violet': 1522}
fg = np.zeros((H, W), bool)
for k, m in cls.items():
    m = m.copy(); m[:300] = 0; m[730:] = 0
    m = nd.binary_opening(m, iterations=3)
    l, n = nd.label(m); m = l == (np.argmax(nd.sum(m, l, range(1, n + 1))) + 1)
    pts = np.argwhere(m)[:, ::-1]
    pts = pts[pts[:, 0] < XCUT[k]]  # beyond this the colour mask picks up the cast shadow / misses the end face
    pts = np.vstack([pts, np.array(END[k])]).astype(np.int32)
    hull = cv2.convexHull(pts)
    one = np.zeros((H, W), np.uint8); cv2.fillPoly(one, [hull], 1)
    fg |= one.astype(bool)
# bench slivers left inside the hulls where two rods meet (warm hue, low saturation, bright)
bench = (h >= 5) & (h <= 40) & (s < 48) & (v > 165)
bench = nd.binary_opening(bench, iterations=1)
fg &= ~nd.binary_dilation(bench, iterations=1)
l, n = nd.label(fg); fg = np.isin(l, 1 + np.where(nd.sum(fg, l, range(1, n + 1)) > 20000)[0])
fg = nd.binary_erosion(fg, iterations=2)
np.save('/tmp/claude-0/p3/fil/fg.npy', fg)
# depth of field: the far (left) ends are out of focus in the photo, so the edge softens toward the left
f = (fg * 255).astype(np.uint8); xs = np.arange(W)[None, :]
sig = np.clip(1 + 5 * (820 - xs) / 570, 1, 6) * np.ones((H, 1))
out = np.zeros((H, W), np.float32)
for a, b in [(1, 2), (2, 3.5), (3.5, 6)]:
    ga = cv2.GaussianBlur(f, (0, 0), a).astype(np.float32); gb = cv2.GaussianBlur(f, (0, 0), b).astype(np.float32)
    t = np.clip((sig - a) / (b - a), 0, 1); sel = (sig >= a) & (sig <= b)
    out[sel] = (ga * (1 - t) + gb * t)[sel]
alpha = np.clip(out, 0, 255).astype(np.uint8)
m = Image.fromarray(alpha)
im = Image.fromarray(img[..., ::-1]).convert('RGBA'); im.putalpha(m)
im = im.crop(im.getbbox())
W, H = im.size
PL, PR, PT, PB = round(W * .03), round(W * .05), round(H * .06), round(H * .2)
PW, PH = W + PL + PR, H + PT + PB
al = np.array(im.split()[3]) > 128
bot = np.array([np.where(al[:, x])[0].max() if al[:, x].any() else -1 for x in range(W)])
sh = np.zeros((PH, PW), np.float32)
for x in range(W):
    if bot[x] < 0: continue
    bb = bot[x] + PT
    sh[bb - 5:bb + int(H * .03), x + PL] = .9
s_ = Image.fromarray((sh * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(PW * .012))
sa = np.array(s_).astype(np.float32) / 255 * .36 / .9
c = Image.fromarray(np.dstack([np.zeros((PH, PW, 3)), np.clip(sa, 0, 1) * 255]).astype(np.uint8), 'RGBA')
c.alpha_composite(im, (PL, PT))
c.save('hero-cut.webp', quality=90, method=6)
print('obj', W, H, 'asset', PW, PH)
