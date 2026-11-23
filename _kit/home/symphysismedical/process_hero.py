#!/usr/bin/env python3
"""SymPhysis Medical's own studio render of the releaze(TM) drainage system (symphysismedical.com,
Device_wide_2_img_2025.jpg, 1920x900). The smooth blue-grey studio backdrop is kept (their real tones and floor
shadows), extended past the frame with a low-order fit of itself, and given a long eased elliptical REAL ALPHA falloff
centred on the product, so on the page it reads as a lit studio pool over the ink with no box edge (DP/DJ)."""
import numpy as np, pathlib
from PIL import Image
H=pathlib.Path(__file__).resolve().parent
im=np.asarray(Image.open(H/'src_releaze.png').convert('RGB')).astype(np.float64)/255
h,w,_=im.shape
PX,PY=420,330                      # padding added on each side (left/right, top/bottom)
W,Hh=w+2*PX,h+2*PY
yy,xx=np.mgrid[0:Hh,0:W]; X=(xx-PX)/w-.5; Y=(yy-PY)/h-.5
def basis(X,Y): return np.stack([np.ones_like(X),X,Y,X*X,Y*Y,X*Y],-1)
iy,ix=np.mgrid[0:h,0:w]
m=(ix>w*.74)|(iy<h*.13)|((iy>h*.8)&(ix<w*.38))|((iy>h*.62)&(ix>w*.55))
Bi=basis(ix/w-.5,iy/h-.5)
B=basis(X,Y)
model=np.stack([B@np.linalg.lstsq(Bi[m],im[...,c][m],rcond=None)[0] for c in range(3)],-1)
model=np.clip(model,0,1)
canvas=model.copy()
# blend the real frame into the model over a wide band at its borders
def ramp(n,f):
    v=np.clip(np.arange(n)/f,0,1); v=v*v*(3-2*v); return np.minimum(v,v[::-1])
eb=np.minimum(ramp(h,110)[:,None],ramp(w,140)[None,:])[...,None]
canvas[PY:PY+h,PX:PX+w]=im*eb+model[PY:PY+h,PX:PX+w]*(1-eb)
# light that follows the kit's own silhouette (no oval/porthole): a mask of where the frame differs from the smooth
# backdrop, heavily blurred twice (near and far) so the studio light falls off over a long distance around each object
from PIL import ImageFilter
diff=np.abs(canvas-model).max(2)
pm=(diff>.07).astype(np.float64)
pm[:PY+130,:]=0; pm[PY+700:,:]=0; pm[:,PX+1320:]=0; pm[:,:PX+80]=0   # only the kit (source x 80..1320, y 130..700)
pm[:PY+330,PX+1185:]=0
def blur(a,sig,ds=8):
    im_=Image.fromarray((np.clip(a,0,1)*255).astype(np.uint8)).resize((W//ds,Hh//ds),Image.BILINEAR)
    im_=im_.filter(ImageFilter.GaussianBlur(sig/ds))
    return np.asarray(im_.resize((W,Hh),Image.BICUBIC)).astype(np.float64)/255
def ss(x): x=np.clip(x,0,1); return x*x*(3-2*x)
c1=ss(blur(pm,22)*3)                                   # solid over the objects themselves
c2=ss(blur(pm,120)*2.4)*.8                             # the lit floor around them
far=blur(pm,420); c3=ss(far/far.max())*.7              # long ambient falloff into the ink
a=1-(1-c1)*(1-c2)*(1-c3)
# the glow reaches exactly zero well inside every border of the file (no edge can show on the page)
edge=np.minimum(ramp(Hh,300)[:,None],ramp(W,360)[None,:])
a=a*edge
rgba=np.concatenate([canvas,a[...,None]],-1)
o=Image.fromarray((rgba*255+.5).astype(np.uint8),'RGBA')
o.save(H.parent.parent.parent/'symphysismedical/hero.webp',quality=90,method=6)
print(o.size)
