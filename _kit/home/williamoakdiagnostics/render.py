#!/usr/bin/env python3
"""Hero art: William Oak Diagnostics' own product render (their point-of-care micronutrient test with integrated blood
collection, williamoakdiagnostics.com home page, squarespace 743993da.../William+Oak+Diagnostics+Diagnostic+Device.jpg,
1415x943). Flat-field correction: fit a smooth model to the studio backdrop (border band, away from the device and its
floor reflection) and divide it out, so the backdrop equals the page ink #eeedeb exactly while the device's own shading
stays. Then a long eased feather (rounded-rectangle distance, not an oval) to the exact ink on every edge (DJ/DP)."""
import numpy as np, pathlib
from PIL import Image
H=pathlib.Path(__file__).resolve().parent
INK=np.array([238,237,235],float)
a=np.asarray(Image.open(H/'src-render.jpg').convert('RGB'),float); h,w,_=a.shape
yy,xx=np.mgrid[0:h,0:w]; X=xx/w; Y=yy/h
m=((Y<.08)|(X<.07)|(X>.94))&(Y<.84)
def basis(X,Y):return np.stack([np.ones_like(X),X,Y,X*X,X*Y,Y*Y],-1)
B=basis(X[m],Y[m]); out=np.empty_like(a)
for c in range(3):
    coef,*_=np.linalg.lstsq(B,a[...,c][m],rcond=None)
    out[...,c]=a[...,c]*(INK[c]/(basis(X,Y)@coef))
print('backdrop residual',round(np.abs(out[m]-INK).mean(),2))
out=np.clip(out,0,255)
# the floor reflection under the device (y > .87) is eased into the ink so it reads as a soft sheen, not a band
ry=np.clip((Y-.86)/.1,0,1); ry=ry*ry*(3-2*ry)
out=out*(1-ry[...,None])+INK*ry[...,None]
# long eased feather on every edge (rounded-rectangle distance)
dx=np.maximum(0,np.abs(X-.5)-.43)/.07; dy=np.maximum(0,np.abs(Y-.47)-.41)/.09
d=np.clip(np.sqrt(dx*dx+dy*dy),0,1); t=d*d*(3-2*d)
out=out*(1-t[...,None])+INK*t[...,None]
img=Image.fromarray(out.round().astype('uint8'))
img.save(H/'hero.webp',quality=94,method=6,use_sharp_yuv=True)
print(img.size)
