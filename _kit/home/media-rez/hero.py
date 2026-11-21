# Hero: a smart speaker glowing in the dark (Unsplash photo-1605648916361-9bc12ad6a569, Ivan Bandura,
# https://unsplash.com/photos/lZCHy8PLyyo, Unsplash licence: free to use). Media Rez delivers CBT-I through a screen-free,
# voice-driven smart speaker at the bedside. Square crop on the speaker on its own black ground; the magenta/red/blue
# stage light is re-graded by luminance to the Media Rez logo's night blue -> blue -> green, with a pale mint top light
# (tonal depth kept), and the black ground is feathered radially into the page ink so no edge exists.
import sys, numpy as np
from PIL import Image
im=Image.open(sys.argv[1]).convert('RGB'); W,H=im.size
cx,cy,S=int(W*.5),int(H*.5),int(H*.98)
im=im.crop((cx-S//2,cy-S//2,cx+S//2,cy+S//2)).resize((1400,1400),Image.LANCZOS)
A=np.asarray(im).astype(np.float32)/255.
L=(A[...,0]*.3+A[...,1]*.5+A[...,2]*.2+A.max(-1)*.0)
L=np.clip(A.max(-1)*.62+L*.38,0,1)
L=np.clip((L-.03)/.95,0,1)**1.5
# left side of the speaker was blue in the source, right side red: use that as a blue <-> green blend weight
hueW=np.clip((A[...,0]-A[...,2])*1.4+.5,0,1)
y,x=np.mgrid[0:1400,0:1400]/1399.
hueW=np.clip(hueW*.75+x*.25,0,1)
blue=[(0,(8,13,20)),(.25,(14,40,70)),(.52,(24,104,170)),(.8,(96,170,224)),(1,(206,232,244))]
green=[(0,(8,13,20)),(.25,(20,52,42)),(.52,(58,128,74)),(.8,(132,196,124)),(1,(214,238,206))]
def gmap(stops):
    out=np.zeros(L.shape+(3,),np.float32)
    for (a,ca),(b,cb) in zip(stops,stops[1:]):
        m=(L>=a)&(L<=b); t=((L-a)/(b-a))[m][:,None]
        out[m]=np.array(ca)*(1-t)+np.array(cb)*t
    return out
out=gmap(blue)*(1-hueW[...,None])+gmap(green)*hueW[...,None]
r=np.sqrt((x-.5)**2+(y-.5)**2)/.5
al=np.clip((1-r)/0.42,0,1); al=al*al*(3-2*al)
al=np.maximum(al, np.clip(L*3,0,1)*np.clip((1-r)/.25,0,1))
rgba=np.dstack([out,al*255]).astype(np.uint8)
Image.fromarray(rgba,'RGBA').save('hero.webp','WEBP',quality=90,method=6)
Image.fromarray(rgba,'RGBA').resize((600,600)).save(sys.argv[2])
