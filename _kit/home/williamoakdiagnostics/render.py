#!/usr/bin/env python3
"""Hero art: William Oak Diagnostics' own product render (their point-of-care micronutrient test with integrated blood
collection, williamoakdiagnostics.com home page, squarespace 743993da.../William+Oak+Diagnostics+Diagnostic+Device.jpg,
1415x943). Flat-field correction: fit a smooth model to the studio backdrop (border band, away from the device and its
floor reflection) and divide it out, so the backdrop equals the page ink #eeedeb exactly while the device's own shading
stays. Then a long eased feather (rounded-rectangle distance, not an oval) to transparent on every edge, as real alpha (DJ/DP)."""
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
# the feather is real alpha (lossless in WebP), so the image border carries nothing that a lossy codec could step (DP x6 check)
# key: wherever the corrected backdrop is within ~2 levels of the ink it becomes transparent, so the page shows through exactly;
# the device and its real contact shadow keep full opacity (soft key, blurred so no edge appears)
from PIL import ImageFilter
dev=np.abs(out-INK).max(-1)
k=np.clip((dev-1.5)/5,0,1); k=np.asarray(Image.fromarray((k*255).astype('uint8')).filter(ImageFilter.GaussianBlur(6)),float)/255
k=np.clip(k*1.6,0,1)
A=k*(1-t)
col=INK+(out-INK)/np.maximum(A,1e-3)[...,None]*A[...,None]/np.maximum(A,1e-3)[...,None]
col=np.where(A[...,None]>0.02,INK+(out-INK)/np.maximum(A,0.02)[...,None],INK)
col=np.clip(col,0,255)
img=Image.fromarray(np.dstack([col,A*255]).round().astype('uint8'),'RGBA')
img.save(H/'hero.webp',quality=94,method=6,use_sharp_yuv=True,alpha_quality=100)
print(img.size)
