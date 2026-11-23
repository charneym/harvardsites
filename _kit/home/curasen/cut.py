#!/usr/bin/env python3
"""CuraSen hero (HOME_BRIEF update 2b): a real photograph of a translucent glass model of the human brain,
Unsplash photo-1647613561332-3d88a6a0048e by Lisa Yount (unsplash.com/photos/a-close-up-of-a-plastic-brain-model-JkAxfH5ktpw),
Unsplash License (commercial use, no attribution needed). Not used by any other concept in this repo (DQ).
The brain is cut out of its cluttered backdrop with a luminance/hue key constrained to a hand-traced outline, holes filled,
the edge smoothed and feathered, and saved with REAL ALPHA so no box or seam can show (DP/DJ). Graded from lavender to the
CuraSen logo blue (#30608F family) while keeping the glass highlights and tonal depth. Native 2400px source, shown smaller."""
import numpy as np, pathlib
from PIL import Image, ImageDraw, ImageFilter
H=pathlib.Path(__file__).resolve().parent
im=Image.open(H/'src-photo.jpg').convert('RGB'); W,Hh=im.size; s=W/600
a=np.asarray(im,float); r,g,b=a[...,0],a[...,1],a[...,2]; L=.3*r+.59*g+.11*b
P=[(33,130),(45,95),(70,68),(110,45),(170,24),(230,14),(300,10),(370,16),(428,32),(465,58),(497,93),(528,132),(547,185),(553,228),
   (549,270),(532,310),(506,340),(472,364),(432,380),(392,387),(352,378),(318,364),(280,351),(240,336),(206,316),(189,292),(188,268),
   (166,264),(120,252),(80,232),(50,203),(35,168)]
poly=Image.new('L',(W,Hh),0); ImageDraw.Draw(poly).polygon([(x*s,y*s) for x,y in P],fill=255)
poly=poly.filter(ImageFilter.MaxFilter(17))
key=((L>58)&(b>r*.9)).astype(np.uint8)*255
m=np.minimum(key,np.asarray(poly))
mi=Image.fromarray(m).filter(ImageFilter.MaxFilter(15)).filter(ImageFilter.MinFilter(15))   # close small gaps
# fill holes: flood the background from the corners, everything not reached is brain
fl=mi.copy(); ImageDraw.floodfill(fl,(0,0),128); ImageDraw.floodfill(fl,(W-1,Hh-1),128); ImageDraw.floodfill(fl,(0,Hh-1),128); ImageDraw.floodfill(fl,(W-1,0),128)
m=np.where(np.asarray(fl)==128,0,255).astype(np.uint8)
mi=Image.fromarray(m).filter(ImageFilter.MinFilter(9)).filter(ImageFilter.MaxFilter(9))   # open: drop specks
mi=mi.filter(ImageFilter.GaussianBlur(10)).point(lambda v:255 if v>128 else 0)               # smooth outline
alpha=np.asarray(mi.filter(ImageFilter.MinFilter(5)).filter(ImageFilter.GaussianBlur(4)),float)/255
# grade: lavender -> CuraSen blue, keep highlights near-white, keep depth
lum=L/255
tgt_dark=np.array([14,32,58.]); tgt_mid=np.array([66,118,176.]); tgt_hi=np.array([226,236,250.])
t=np.clip(lum,0,1)[...,None]
col=np.where(t<.55, tgt_dark+(tgt_mid-tgt_dark)*(t/.55), tgt_mid+(tgt_hi-tgt_mid)*((t-.55)/.45))
orig=a; out=col*.82+orig*.18
out=np.clip(out,0,255)
rgba=np.dstack([out,alpha*255]).astype(np.uint8)
img=Image.fromarray(rgba,'RGBA')
bb=img.getbbox(); pad=24
img=img.crop((max(0,bb[0]-pad),max(0,bb[1]-pad),min(W,bb[2]+pad),min(Hh,bb[3]+pad)))
img=img.resize((img.width*3//4,img.height*3//4),Image.LANCZOS)
img.save(H/'hero.webp',quality=90,method=6); img.save('/tmp/cs/img/hero.png')
print(img.size)
