# Hero: NCI scanning electron micrograph of a dividing cell (Unsplash, photo-1631556095532-083d3a8c4d78,
# https://unsplash.com/photos/a-black-and-white-photo-of-an-animal-cell-nn4Sg-UFgsE, Unsplash licence).
# Square crop on the rounded mitotic cell, graded ink -> graphite -> warm bone with a copper midtone, radial feather.
import sys, numpy as np
from PIL import Image, ImageFilter
im=Image.open(sys.argv[1]).convert('L'); W,H=im.size
cx,cy,S=int(W*.575),int(H*.625),int(W*.66)
im=im.crop((cx-S//2,cy-S//2,cx+S//2,cy+S//2)).resize((1400,1400),Image.LANCZOS)
L=np.asarray(im).astype(np.float32)/255.
L=np.clip((L-.04)/.92,0,1)**0.94
stops=[(0,(11,14,18)),(.28,(38,40,46)),(.55,(110,92,76)),(.78,(206,180,150)),(1,(246,240,230))]
out=np.zeros(L.shape+(3,),np.float32)
for (a,ca),(b,cb) in zip(stops,stops[1:]):
    m=(L>=a)&(L<=b); t=((L-a)/(b-a))[m][:,None]
    out[m]=np.array(ca)*(1-t)+np.array(cb)*t
y,x=np.mgrid[0:1400,0:1400]/1399.
r=np.sqrt((x-.5)**2+(y-.5)**2)/.5
al=np.clip((1-r)/0.62,0,1); al=al*al*(3-2*al)
rgba=np.dstack([out,al*255]).astype(np.uint8)
Image.fromarray(rgba,'RGBA').save('hero.webp','WEBP',quality=90,method=6)
Image.fromarray(rgba,'RGBA').resize((600,600)).save(sys.argv[2])
