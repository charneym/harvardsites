#!/usr/bin/env python3
"""Hero art: MOMM Diagnostics' own product render (eFlow reader + préXclude cartridge, mommdiagnostics.com Our Test page,
wixstatic a77ac0_d159d805...jpg, 3840x2160). Flat-field correction: fit a smooth quadratic model to the studio backdrop
(border band, away from the objects) and divide it out, so the backdrop becomes the page ink exactly while the contact
shadows and reflections keep their real tone. Then a long eased feather to the exact page ink on every edge (DJ/DP)."""
import numpy as np, pathlib
from PIL import Image, ImageFilter
H=pathlib.Path(__file__).resolve().parent
INK=np.array([237,239,241],float)
im=Image.open(H/'src-render.jpg').convert('RGB')
a=np.asarray(im,float); h,w,_=a.shape
yy,xx=np.mgrid[0:h,0:w]; X=xx/w; Y=yy/h
# backdrop sample: border band clear of the reader and cartridge (objects span x .14-.82, y .17-.89)
m=(Y<.13)|(X<.11)|(X>.86)|(Y>.93)|((X>.84)&(Y<.5))|((Y<.2)&(X<.6))
def basis(X,Y):return np.stack([np.ones_like(X),X,Y,X*X,X*Y,Y*Y,X**3,Y**3,X*X*Y,X*Y*Y],-1)
B=basis(X[m],Y[m]); out=np.empty_like(a)
for c in range(3):
    coef,*_=np.linalg.lstsq(B,a[...,c][m],rcond=None)
    model=basis(X,Y)@coef
    out[...,c]=a[...,c]*(INK[c]/model)
res=np.abs(out[m]-INK).mean(); print('backdrop residual',round(res,2))
out=np.clip(out,0,255)
# crop around the objects
x0,x1,y0,y1=int(.07*w),int(.89*w),int(.06*h),int(.97*h)
out=out[y0:y1,x0:x1]; hh,ww,_=out.shape
# long eased feather to exact ink: elliptical distance from the objects' centre
cy,cx=.53*hh,.5*ww
d=np.sqrt(((np.mgrid[0:hh,0:ww][1]-cx)/(ww*.5))**2+((np.mgrid[0:hh,0:ww][0]-cy)/(hh*.5))**2)
t=np.clip((d-.78)/(1.0-.78),0,1); t=t*t*(3-2*t)
out=out*(1-t[...,None])+INK*t[...,None]
img=Image.fromarray(out.round().astype('uint8'))
img=img.resize((1900,round(1900*hh/ww)),Image.LANCZOS)
img.save(H/'hero.webp',quality=92,method=6,use_sharp_yuv=True)
print(img.size)
