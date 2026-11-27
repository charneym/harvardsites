#!/usr/bin/env python3
"""Mintres hero (redone after review): their own studio photograph of gold-plated opto-electronic packages with Mintres
optical beds inside (mintres.com > Products > (Opto)-electronics optical beds/packages, lift3cdn.nl optical-beds_2.jpg,
3872x2592), keeping ONLY the sharp centre package: its walls, flange and mounting holes, the optical bed and sub-mount
inside, and its two rows of gold pins. The out-of-focus rear package and the second package on the left are dropped.
  - body: the package's outline (walls, rim, flange) traced as a polygon on the photo, then its two round mounting
    holes opened again (bright, unsaturated, round).
  - pins: the right row stands clear against the white ground (colour mask opened with line elements at the row's
    angle, -3 to -12 degrees). The left row lies over the other packages (gold behind gold), so each of its 7 pins is
    fitted as a polygon from its edges (left_pins.json; centre lines placed by hand, edges found by gradient profiles).
  - edge: alpha slightly feathered; every edge pixel takes the colour of the nearest interior pixel (no bluish fringe
    from the white ground). Colours are the photograph's own; no saturation or tone change.
  - pins on the right run out of the frame: they fade over the last strip. Faint baked floor shadow. Out: hero-cut.webp"""
import numpy as np, cv2
from PIL import Image, ImageFilter
from scipy import ndimage as nd
img = cv2.imread('beds.src.jpg')
img = cv2.resize(img, (img.shape[1] // 2, img.shape[0] // 2), interpolation=cv2.INTER_AREA)
H, W = img.shape[:2]                      # 1936 x 1296; the view coordinates below are on a 1290-wide preview (x1.5)
S = W / 1290.0
P = lambda pts: (np.array(pts, np.float32) * S).astype(np.int32)
hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV).astype(int); s, v = hsv[..., 1], hsv[..., 2]
col = ((s > 95) | (v < 85)).astype(np.uint8)
col = cv2.morphologyEx(col, cv2.MORPH_CLOSE, np.ones((3, 3), np.uint8))
# --- body of the centre package: its outline traced on the 1290-wide preview (walls, rim and flange), filled
poly = np.zeros((H, W), np.uint8)
# generous on the right and bottom (white ground there), tight on the left and top (other packages behind)
cv2.fillPoly(poly, [P([(707, 193), (972, 139), (1012, 139), (1128, 600), (1130, 712), (850, 752), (812, 748), (803, 645), (770, 622)])], 1)
poly = poly.astype(bool)
gold = col.astype(bool) | (v < 140)                  # gold, or dark (walls in shade, substrate strips)
body = nd.binary_opening(poly & gold, iterations=1)
yy0 = np.arange(H)[:, None]
fl = yy0 > 600 * S                                    # the flange
body = nd.binary_fill_holes(body & ~fl) | (nd.binary_fill_holes(body) & fl)
# open the two mounting holes in the flange: inside each bore, the see-through part is the darker disc (the ground
# seen through it, tinted by the gold bore); its convex hull gives a clean round opening
yy1, xx1 = np.mgrid[0:H, 0:W]
for cx, cy in [(862, 683), (1055, 645)]:
    X, Y, R = cx * S, cy * S, 27 * S
    disk = (xx1 - X) ** 2 + (yy1 - Y) ** 2 < R * R
    d = disk & (v < 172)
    ld, nd_ = nd.label(d)
    if nd_ == 0: continue
    k = ld[int(Y), int(X)] or (np.argmax(nd.sum(d, ld, range(1, nd_ + 1))) + 1)
    pts = np.argwhere(ld == k)[:, ::-1].astype(np.int32)
    hm = np.zeros((H, W), np.uint8); cv2.fillPoly(hm, [cv2.convexHull(pts)], 1)
    body &= ~hm.astype(bool)
hole = np.zeros((H, W), bool)
# the walls and flange are straight-edged: smooth the outline (the flange's lower edge is out of focus in the photo)
body = cv2.GaussianBlur(body.astype(np.float32), (0, 0), 4.0) > .5
lh, nh = nd.label(hole); ok = []
for i in range(1, nh + 1):
    r = lh == i; A = r.sum()
    if A < 300: continue
    cs, _ = cv2.findContours(r.astype(np.uint8), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
    per = cv2.arcLength(cs[0], True)
    if 4 * np.pi * A / max(per * per, 1) > .6: ok.append(i)
body &= ~nd.binary_dilation(np.isin(lh, ok), iterations=1)
# --- pins, by orientation
def lines(mask, angles, length):
    out = np.zeros_like(mask)
    for a in angles:
        k = np.zeros((length, length), np.uint8); c = length // 2; t = np.deg2rad(a)
        dx, dy = np.cos(t) * c, np.sin(t) * c
        cv2.line(k, (int(c - dx), int(c - dy)), (int(c + dx), int(c + dy)), 1, 1)
        out |= cv2.morphologyEx(mask, cv2.MORPH_OPEN, k)
    return out
pinsR = lines(col, (-12, -9, -6, -3), 61)        # the right row stands clear against the white ground
bandR = np.zeros((H, W), np.uint8); cv2.fillPoly(bandR, [P([(966, 150), (1290, 145), (1290, 480), (1098, 540), (1060, 400)])], 1)
pins = (pinsR & bandR).astype(bool)
lp, npn = nd.label(pins); near = nd.binary_dilation(body, iterations=16)
pins = np.isin(lp, [i for i in range(1, npn + 1) if (near & (lp == i)).any()])
# the left row lies over the second package and the blurred rear package (gold behind gold), so colour cannot separate
# it: each of its 7 pins is fitted as a polygon (left_pins.json, from pin_fit: a hand-placed centre line per pin, then
# the two edges found on perpendicular gradient profiles along it, robust line fit, median width ~14 px)
import json
for q in json.load(open('left_pins.json')):
    t = np.zeros((H, W), np.uint8); cv2.fillPoly(t, [np.array(q, np.int32)], 1); pins |= t.astype(bool)
# pale ground caught along the body's outline (not the silver parts deep inside the package; pins are added after)
rimband = body & ~nd.binary_erosion(body, iterations=22)
body &= ~(rimband & nd.binary_opening(((s < 75) & (v > 105)) | ((s < 125) & (v > 150)), iterations=1))
body = cv2.GaussianBlur(body.astype(np.float32), (0, 0), 3.0) > .5
m = body | pins
m = nd.binary_opening(m, iterations=1)
# --- edge: feather and decontaminate
inner = nd.binary_erosion(m, iterations=2)
_, (iy, ix) = nd.distance_transform_edt(~inner, return_indices=True)
clean = img.copy()
band = m & ~inner
clean[band] = img[iy[band], ix[band]]
a = cv2.GaussianBlur((nd.binary_erosion(m, iterations=1) * 255).astype(np.uint8), (0, 0), 1.1).astype(np.float32)
xx = np.arange(W)[None, :]
fr = np.clip((W - 1 - xx) / (W * .06), 0, 1); fr = fr * fr * (3 - 2 * fr)   # right-hand pins leave the frame
a = a * fr
im = Image.fromarray(clean[..., ::-1]).convert('RGBA'); im.putalpha(Image.fromarray(a.clip(0, 255).astype(np.uint8)))
im = im.crop(im.getbbox())
W2, H2 = im.size
PL, PR, PT, PB = round(W2 * .03), 0, round(H2 * .03), round(H2 * .07)
PW, PH = W2 + PL + PR, H2 + PT + PB
al = np.array(im.split()[3]) > 200
# shadow under the flange and walls only (columns where the solid body reaches down)
bot = np.array([np.where(al[:, x])[0].max() if al[:, x].any() else -1 for x in range(W2)])
sh = np.zeros((PH, PW), np.float32)
for x in range(W2):
    if bot[x] < H2 * .7 or al[:, x].sum() < 60: continue
    bb = bot[x] + PT
    sh[bb - 8:bb + int(H2 * .02), x + PL] = .9
sbl = Image.fromarray((sh * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(PW * .012))
sa = np.array(sbl).astype(np.float32) / 255 * .3 / .9
c = Image.fromarray(np.dstack([np.zeros((PH, PW, 3)), np.clip(sa, 0, 1) * 255]).astype(np.uint8), 'RGBA')
c.alpha_composite(im, (PL, PT))
c.save('hero-cut.webp', quality=90, method=6)
print('asset', c.size)
