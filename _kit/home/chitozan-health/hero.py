# Hero (HOME_BRIEF update 2b, option (b)): Ian Talmacs (@iantalmacs), "White old fabric on dark background", Unsplash
# License (free): https://unsplash.com/photos/a-close-up-of-a-white-curtain-on-a-black-background-h17PgQfCMqI
# CDN https://images.unsplash.com/photo-1677285192836-55fcda3b8fba (downloaded at 2400 px). A macro of the cut edge of
# a white woven textile: the weave, then the loose fibres glowing against black. Chitozan Health's Silver Shell is a
# finish for exactly this: healthcare textiles (privacy curtains, linens, scrubs). Portrait crop on the fringe, graded
# black -> brand navy -> cool white (tonal depth kept), the bright fabric body faded out on the left and a long eased
# elliptical feather on every edge so no rectangle exists (DJ/DP). Usage: python3 hero.py <fab.jpg>
import sys, numpy as np
from PIL import Image
im=Image.open(sys.argv[1]).convert('RGB')
x0,y0=1080,60; im=im.crop((x0,y0,x0+1260,y0+1500))
A=np.asarray(im).astype(np.float32)/255.
L=A@np.array([.299,.587,.114],np.float32)
L=np.clip((L-.03)/.95,0,1)**1.12
stops=[(0,(7,16,42)),(.2,(16,32,70)),(.45,(70,92,128)),(.72,(176,192,210)),(1,(246,249,252))]
out=np.zeros(L.shape+(3,),np.float32)
for (a,ca),(b,cb) in zip(stops,stops[1:]):
    m=(L>=a)&(L<=b); t=((L-a)/(b-a))[m][:,None]; out[m]=np.array(ca)*(1-t)+np.array(cb)*t
# keep a little of the original colour so the fibres stay real, not a flat duotone
out=out*.9+A*255*.1; out=np.maximum(out,np.array([7,16,42.]))
h,w=L.shape; y,x=np.mgrid[0:h,0:w]; xn=x/(w-1); yn=y/(h-1)
sm=lambda v: (lambda c: c*c*(3-2*c))(np.clip(v,0,1))
left=sm((xn-.02)/.6)                 # the bright fabric body fades into the ink
ell=np.sqrt(((xn-.56)/.5)**2+((yn-.5)/.54)**2)
rad=sm((1-ell)/.5)
al=left*rad
Image.fromarray(np.dstack([np.clip(out,0,255),al*255]).astype(np.uint8),'RGBA').save('hero.webp','WEBP',quality=90,method=6)
print(w,h)
