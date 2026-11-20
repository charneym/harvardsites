# Advent-Morro hero: python3 -I grade.py <pexels 15261778, w=2600> hero.jpg '{"crop":[0.1,0,0.9,1],"x0":0.36,"ink":"#191c23","sh":"#14171d","hi":"#efe3c8","keep":0.36,"gain":0.84,"gamma":1.5,"fl":0.36,"ft":0.0001,"fb":0.16,"ax":0.5,"ay":0.5,"td":0.6}'
# Generic hero grader (HOME_BRIEF 2026-11-20 rephoto). Crops a real photo, grades it toward the site palette and lays it
# into a 16:9 ink canvas, right of `x0`, with its left/top/bottom edges feathered into the ink (DI, DJ).
# usage: python3 -I grade_hero.py src.jpg out.jpg '{"crop":[l,t,r,b],"x0":0.42,"ink":"#0b1221","sh":"#0b1a3a","hi":"#d8e2f4",
#        "keep":0.45,"gain":0.9,"gamma":1.05,"fl":0.16,"ft":0.06,"fb":0.2,"ax":0.0,"W":2800,"H":1575}'
import sys, json, numpy as np
from PIL import Image
src, out, P = sys.argv[1], sys.argv[2], json.loads(sys.argv[3])
W, H = P.get('W', 2800), P.get('H', 1575)
hx = lambda s: np.array([int(s[i:i+2], 16) for i in (1, 3, 5)], np.float32) / 255.
ink, sh, hi = hx(P['ink']), hx(P['sh']), hx(P['hi'])
im = Image.open(src).convert('RGB')
iw, ih = im.size
l, t, r, b = P.get('crop', [0, 0, 1, 1])
im = im.crop((int(l*iw), int(t*ih), int(r*iw), int(b*ih)))
x0 = int(P.get('x0', .42) * W); rw = W - x0
cw, ch = im.size
s = max(rw / cw, H / ch)
im = im.resize((max(rw, round(cw*s)), max(H, round(ch*s))), Image.LANCZOS)
ex = im.size[0] - rw; ax = P.get('ax', 0.0)  # 0 keeps the crop's left edge, 1 its right edge
ey = im.size[1] - H; ay = P.get('ay', .5)
im = im.crop((int(ex*ax), int(ey*ay), int(ex*ax) + rw, int(ey*ay) + H))
a = np.asarray(im).astype(np.float32) / 255.
L = (a @ np.array([.2126, .7152, .0722], np.float32))[..., None]
duo = sh + (hi - sh) * np.clip(L, 0, 1) ** P.get('gamma', 1.05)
o = a * P.get('keep', .45) + duo * (1 - P.get('keep', .45))
o = np.clip(o * P.get('gain', .9), 0, 1)
h, w = o.shape[:2]
yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
def sm(e0, e1, x): t = np.clip((x - e0) / (e1 - e0), 0, 1); return t*t*(3 - 2*t)
td = P.get('td', 0)  # darken the top band (under the nav) by up to td, easing out by 40% of the height
if td: o = o * (1 - td * (1 - sm(0, .4, yy / h)))[..., None]
fl, ft, fb, fr = P.get('fl', .16), P.get('ft', .06), P.get('fb', .2), P.get('fr', 0)
al = sm(0, fl, xx / w) * sm(0, ft, yy / h) * sm(0, fb, 1 - yy / h)
if fr: al = al * sm(0, fr, 1 - xx / w)
al = al[..., None]
canvas = np.ones((H, W, 3), np.float32) * ink
canvas[:, x0:] = o * al + ink * (1 - al)
Image.fromarray((canvas * 255).astype(np.uint8)).save(out, 'JPEG', quality=86, optimize=True, progressive=True)
print('ok', out, W, H)
