#!/usr/bin/env python3
"""Hero art: WaveClear Vascular's own studio photograph of the RESOLUTION system (generator console, handpiece,
catheter and guidewire), waveclear.com/wp-content/uploads/2026/06/20260604191122_3-WaveClear-ChrisForgione4389-retouched-scaled.jpg
(2560x1707, home page). Flat-field correction: fit a smooth cubic model to the studio backdrop (band clear of the
objects) and divide it out, so the backdrop equals the page ink exactly while contact shadows keep their real tone.
Then a long eased feather to the exact page ink on every edge (DJ/DP)."""
import numpy as np, pathlib
from PIL import Image
H=pathlib.Path(__file__).resolve().parent
INK=np.array([220,219,225],float)
a=np.asarray(Image.open(H/'src-photo.jpg').convert('RGB'),float); h,w,_=a.shape
yy,xx=np.mgrid[0:h,0:w]; X=xx/w; Y=yy/h
m=(Y<.33)|(Y>.86)|(X<.06)|(X>.975)|((Y<.52)&(X<.2))|((Y<.44)&(X>.82))|((Y>.83)&(X<.5))
def basis(X,Y):return np.stack([np.ones_like(X),X,Y,X*X,X*Y,Y*Y,X**3,Y**3,X*X*Y,X*Y*Y],-1)
B=basis(X[m],Y[m]); out=np.empty_like(a)
for c in range(3):
    coef,*_=np.linalg.lstsq(B,a[...,c][m],rcond=None)
    out[...,c]=a[...,c]*(INK[c]/(basis(X,Y)@coef))
print('backdrop residual',round(float(np.abs(out[m]-INK).mean()),2))
out=np.clip(out,0,255)
x0,x1,y0,y1=int(.03*w),int(.985*w),int(.22*h),int(.95*h)
out=out[y0:y1,x0:x1]; hh,ww,_=out.shape
gy,gx=np.mgrid[0:hh,0:ww]
cy,cx=.55*hh,.5*ww
d=np.sqrt(((gx-cx)/(ww*.5))**2+((gy-cy)/(hh*.5))**2)
t=np.clip((d-.9)/(1.12-.9),0,1); t=t*t*(3-2*t)
# hard guarantee the outer 4% band is exact ink
e=np.minimum(np.minimum(gx,ww-1-gx)/ww,np.minimum(gy,hh-1-gy)/hh); t=np.maximum(t,np.clip(1-e/.04,0,1)**2)
out=out*(1-t[...,None])+INK*t[...,None]
img=Image.fromarray(out.round().astype('uint8'))
img=img.resize((2000,round(2000*hh/ww)),Image.LANCZOS)
img.save(H/'hero.webp',quality=92,method=6,use_sharp_yuv=True)
print(img.size)
