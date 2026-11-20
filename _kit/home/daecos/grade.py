"""Grade the Pexels hero photo (pexels.com/photo/6291261, a bedside patient monitor on its arm beside the bed, vital-sign
waveforms and numerics on screen) toward the Daecos palette: the teal-blue wall pulled down into the logo's violet-black,
the white housing held below white, the screen kept luminous. Edges feathered to alpha so no rectangle reads (DJ).
Usage: python3 grade.py full.jpg hero.webp"""
import sys;from PIL import Image,ImageFilter;import numpy as np
src,out=sys.argv[1],sys.argv[2]
im=Image.open(src).convert('RGB')
im=im.crop((150,1080,3540,4560))            # monitor + module, without the clutter below
im=im.resize((1500,int(1500*im.height/im.width)),Image.LANCZOS)
a=np.asarray(im).astype(float)/255
L=(a*[.2126,.7152,.0722]).sum(2,keepdims=True)
sat=a.max(2,keepdims=True)-a.min(2,keepdims=True)
blue=np.clip((a[...,2:3]-a[...,0:1]-.12)/.25,0,1)*np.clip((.62-L)/.2,0,1)   # the wall, not the bright screen
ink=np.array([12,9,18])/255;vio=np.array([46,17,66])/255
wall=ink+(vio-ink)*np.clip(L*1.5,0,1)**1.4
g=L+(a-L)*.72
g=np.clip(g,0,1)**1.12*.9
g=np.where(blue>0,g*(1-blue)+wall*blue,g)
hi=np.clip((L-.7)/.3,0,1);g=g*(1-.3*hi)                                       # housing below white
tint=np.array([168,108,192])/255;g=g*.9+(L*tint)*.1*(1-blue)
h,w=L.shape[:2];yy,xx=np.mgrid[0:h,0:w]
fx=np.clip(np.minimum(xx,w-1-xx)/(w*.16),0,1);fy=np.clip(np.minimum(yy,h-1-yy)/(h*.16),0,1)
al=(fx*fy)**.8;al=al*al*(3-2*al)
rgba=np.dstack([np.clip(g,0,1),al[...,None]])
Image.fromarray((rgba*255).astype(np.uint8),'RGBA').save(out,quality=88,method=6)
print(w,h)
