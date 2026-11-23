#!/usr/bin/env python3
"""Hero for Perceptive Medical (HOME_BRIEF update 2b): a real photograph of the subject the BaroHawk system manages, an IV
infusion line and its drip chamber (Samuel Ramos on Unsplash, Unsplash License, free: https://unsplash.com/photos/white-and-gray-corded-device-RXVfrhCswCQ,
CDN photo-1585960691786-a593e76d3847, downloaded at 2400 px). Not Perceptive Medical's device; no copy claims it is.
The line is cut out of its blurred room (rough hand mask + a background estimate refine the edge), graded cool toward the
logo/site navy, and given a long eased alpha fade at the top (the bag continues out of frame) and down the tube, so it sits
in the page ink with no box edge (DP/DJ). Writes ../../../perceptivemedical/hero.webp."""
import numpy as np, pathlib
from PIL import Image, ImageDraw, ImageFilter
H=pathlib.Path(__file__).resolve().parent
src=Image.open(H/'src_drip.jpg').convert('RGB')
S=1.8
def P(pts):return [(x*S,y*S) for x,y in pts]
W0,H0=src.size
m=Image.new('L',src.size,0);d=ImageDraw.Draw(m)
# rough hand outline, display coords (1333x2000 view)
bag=[(346,0),(937,0),(937,360),(925,392),(880,398),(780,404),(700,404),(600,410),(560,412),(470,414),(372,412),(352,396),(346,360)]
d.polygon(P(bag),255)
d.polygon(P([(486,380),(556,380),(556,470),(578,470),(578,580),(556,580),(556,660),(486,660)]),255)   # spike + nut
d.polygon(P([(462,660),(600,660),(612,690),(612,700),(628,705),(630,735),(612,745),(612,780),(605,850),(436,850),(436,780),(450,690)]),255)  # cap
d.polygon(P([(448,840),(604,840),(604,1350),(585,1370),(555,1376),(552,1420),(502,1420),(500,1376),(468,1370),(448,1350)]),255) # chamber
d.polygon(P([(683,390),(758,390),(778,670),(778,750),(683,750),(683,670)]),255)  # side port
# tube (curving): sample centreline
cl=[(527,1410),(530,1500),(532,1560),(528,1640),(520,1720),(512,1820),(506,1920),(502,2000)]
for i in range(len(cl)-1):d.line(P([cl[i],cl[i+1]]),fill=255,width=int(34*S))
for p in cl:d.ellipse([p[0]*S-17*S,p[1]*S-17*S,p[0]*S+17*S,p[1]*S+17*S],255)
rough=np.asarray(m).astype(np.float32)/255
a=np.asarray(src).astype(np.float32)/255
# background estimate: normalized blur of the image outside a dilated mask
big=np.asarray(m.filter(ImageFilter.MaxFilter(61))).astype(np.float32)/255
wgt=1-big
def box(x,k):
    c=np.cumsum(np.pad(x,((k+1,k),(0,0)),mode='edge'),0);x=(c[2*k+1:]-c[:-2*k-1])/(2*k+1)
    c=np.cumsum(np.pad(x,((0,0),(k+1,k)),mode='edge'),1);return (c[:,2*k+1:]-c[:,:-2*k-1])/(2*k+1)
def gb(x,r):
    im=Image.fromarray(x.astype(np.float32),'F');sw,sh=im.size;sm=np.asarray(im.resize((sw//8,sh//8),Image.BOX))
    k=max(1,int(r/8));
    for _ in range(3):sm=box(sm,k)
    return np.asarray(Image.fromarray(sm.astype(np.float32),'F').resize((sw,sh),Image.BILINEAR))
num=np.dstack([gb(a[...,c]*wgt,90) for c in range(3)]);den=gb(wgt,90)[...,None]+1e-4
B=num/den
B=np.where(big[...,None]>0,B,a)
diff=np.abs(a-B).max(2)
da=np.clip((diff-.035)*9,0,1)
core=np.asarray(m.filter(ImageFilter.MinFilter(25))).astype(np.float32)/255
band=np.asarray(m.filter(ImageFilter.MaxFilter(9))).astype(np.float32)/255
# the bag is transparent film: no solid core there, only its own wrinkles and seams (plus a faint body), so the room behind never shows
bm=Image.new('L',src.size,0);ImageDraw.Draw(bm).polygon(P(bag),255)
bagm=np.asarray(bm.filter(ImageFilter.GaussianBlur(16))).astype(np.float32)/255
nk=Image.new('L',src.size,0);ImageDraw.Draw(nk).rectangle([476*S,250*S,566*S,420*S],255);ImageDraw.Draw(nk).rectangle([680*S,250*S,760*S,420*S],255)
neck=np.asarray(nk.filter(ImageFilter.GaussianBlur(10))).astype(np.float32)/255
film=bagm*(1-neck)
da2=np.clip((diff-.05)*5,0,1)
alpha=np.maximum(core*(1-film),da*band*(1-film))+film*np.clip(.10+da2*.9,0,1)
alpha=np.asarray(Image.fromarray((alpha*255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(2.2))).astype(np.float32)/255
# crop to the column
x0,x1=int(250*S),int(1030*S);y0,y1=0,int(2000*S)
a=a[y0:y1,x0:x1];alpha=alpha[y0:y1,x0:x1];B=B[y0:y1,x0:x1];film=film[y0:y1,x0:x1]
h,w=alpha.shape
yy=np.mgrid[0:h,0:w][0].astype(np.float32)/h
# long eased fades: the bag dissolves upward (it continues out of frame), the tube fades downward
ft=np.clip((yy-.0)/.17,0,1);ft=ft*ft*(3-2*ft)
fb=np.clip((1-yy)/.30,0,1);fb=fb*fb*(3-2*fb)
alpha=alpha*(.15+.85*ft)*fb
alpha=alpha*np.clip(yy/.035,0,1)
# grade: cool clinical light toward the logo navy; deep tones sink to the ink, highlights stay crisp
lum=a@np.array([.2126,.7152,.0722])
g=np.clip((a-.06)*1.12,0,1)**1.18
g=g*np.array([.90,.96,1.06]);g=np.clip(g,0,1)
ink=np.array([10,14,42])/255
sh=np.clip(1-lum/.55,0,1)[...,None]*.55
g=g*(1-sh)+ink*sh
# where the matte is partial, pull colour toward the ink so no room colour fringes survive
e=(1-np.clip(alpha*1.4,0,1))[...,None]
g=g*(1-e)+ink*e
# film areas: wrinkles read as cool highlights, never the room's cream
fl=film[...,None]
cool=np.clip(lum[...,None]*np.array([.86,.93,1.04]),0,1)
g=g*(1-fl)+cool*fl
out=np.dstack([g,alpha]).clip(0,1)
o=Image.fromarray((out*255).astype(np.uint8),'RGBA')
o=o.resize((int(w*1700/h),1700),Image.LANCZOS)
dst=H.parent.parent.parent/'perceptivemedical';dst.mkdir(exist_ok=True)
o.save(dst/'hero.webp',quality=88,method=6)
# preview on the ink
bg=Image.new('RGBA',o.size,(10,14,42,255));bg.alpha_composite(o);bg.convert('RGB').save('/tmp/claude-0/pm/hero_prev.jpg')
print(o.size)
