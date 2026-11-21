# Hero (HOME_BRIEF update 2b, preference (b)): Unsplash photo "Rows of medical blood collection tubes with colourful caps in a
# laboratory rack" by Testalize.me, https://unsplash.com/photos/blood-collection-tubes-in-laboratory-rack-0jE8ynV4mis
# (images.unsplash.com/photo-1606206591513-adbfbdd7a177), Unsplash License. Gryphon's product is a blood test: a rack of
# patient blood samples is what it reads. Cropped on the capped cluster, graded so the caps keep their own hues but sit in
# the Gryphon navy (cool shadows, cyan lift), tonal depth kept, radial/elliptical long feather (DJ/DP).
import sys, numpy as np
from PIL import Image, ImageFilter
im=Image.open(sys.argv[1]).convert('RGB'); W,H=im.size
x0,y0,x1,y1=int(W*.17),int(H*.06),int(W*.97),int(H*.86)
im=im.crop((x0,y0,x1,y1)); w,h=im.size
S=1500/w; im=im.resize((1500,int(h*S)),Image.LANCZOS); w,h=im.size
a=np.asarray(im).astype(np.float32)/255.
L=(a*[.2126,.7152,.0722]).sum(2,keepdims=True)
sat=.78; a=L+(a-L)*sat
# split tone: shadows to deep navy, highlights to a cool bone
sh=np.array([4,22,44])/255.; hi=np.array([236,244,250])/255.
t=np.clip(L*1.08,0,1)
a=a*(.62+.38*t)+sh*(1-t)*.55
a=np.clip(a,0,1)**1.06
a=a*.93+hi*.0
y,x=np.mgrid[0:h,0:w]
nx=(x/(w-1)-.5)/.5; ny=(y/(h-1)-.5)/.5
r=np.sqrt(nx**2*1.0+ny**2*1.0)
al=np.clip((1.0-r)/0.7,0,1); al=al*al*(3-2*al)
rgba=np.dstack([a*255,al[...,None]*255]).astype(np.uint8)
Image.fromarray(rgba,'RGBA').save('hero.webp','WEBP',quality=88,method=6)
bg=Image.new('RGBA',(w,h),(6,20,36,255));bg.alpha_composite(Image.fromarray(rgba,'RGBA'));bg.convert('RGB').resize((750,int(h*750/w))).save(sys.argv[2])
print(w,h)
