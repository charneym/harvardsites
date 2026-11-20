"""Grade the Pexels hero photo (pexels.com/photo/36101264, a surgical microscope on its boom arm under the theatre light in a
dark operating room) toward the InSight palette: ink #0a0f13 shadows, the room's teal pulled toward the site teal #5297ae,
the drape's saturated blue calmed, highlights (the theatre light) held below white. Manufacturer type on the stand is softened."""
import sys;from PIL import Image,ImageFilter;import numpy as np
src,out=sys.argv[1],sys.argv[2]
im=Image.open(src).convert('RGB')
for box in [(600,2050,770,2150),(330,1840,430,2030)]:
    im.paste(im.crop(box).filter(ImageFilter.GaussianBlur(9)),box[:2])
im=im.resize((1400,2100),Image.LANCZOS)
a=np.asarray(im).astype(float)/255
L=(a*[.2126,.7152,.0722]).sum(2,keepdims=True)
a=L+(a-L)*.62
tint=np.array([82,151,174])/255
a=a*.8+(L*tint*1.5)*.2
a=np.clip(a,0,1)**1.18*.88
hi=np.clip((L-.62)/.38,0,1);a=a*(1-.28*hi)
ink=np.array([10,15,19])/255
a=np.maximum(a,ink*(1-L*3).clip(0,1))
Image.fromarray((np.clip(a,0,1)*255).astype(np.uint8)).save(out,quality=86,method=6)
