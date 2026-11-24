#!/usr/bin/env python3
"""Hero art: OcuSciences' own product image of the OcuMet Beacon (ocusciences.com home, squarespace
OcuMet+Beacon+v5.png, 2500x1097). The source sets the device on white with green/teal wave bands behind it; this
removes the bands (colour unmixing against a smoothly inpainted band colour, so the device's top edge keeps its real
anti-aliasing), maps the white studio ground onto the page ink by multiplication (the real soft shadow under the base
stays), pulls JPEG noise in the empty ground exactly to the ink, and feathers every edge (DJ/DP). Native resolution."""
import numpy as np, pathlib
from PIL import Image, ImageFilter
H=pathlib.Path(__file__).resolve().parent
INK=np.array([243,245,249],float)
a=np.asarray(Image.open(H/'src-beacon.png').convert('RGB'),float)
x0,y0,x1,y1=1610,320,2470,990
P=a[y0:y1,x0:x1].copy();hh,ww,_=P.shape
sat=P.max(-1)-P.min(-1)
# protect the device's own coloured parts: the ocumet mark on the housing, the tablet screen, the joystick
prot=np.zeros((hh,ww),bool)
for (ax,ay,bx,by) in [(1905,415,2060,470),(2010,760,2290,925),(2290,840,2390,920)]:
    prot[max(0,ay-y0):by-y0,max(0,ax-x0):bx-x0]=True
band=(sat>38)&~prot
def _box(x,r,ax):
    r=max(1,int(r));c=np.cumsum(np.pad(x,[(r+1,r) if i==ax else (0,0) for i in range(2)],mode='edge'),axis=ax)
    return (np.take(c,range(2*r+1,c.shape[ax]),axis=ax)-np.take(c,range(0,c.shape[ax]-2*r-1),axis=ax))/(2*r+1)
def blur(x,r):
    x=x.astype(float);b=max(1,int(r*0.58))
    for _ in range(3):x=_box(_box(x,b,0),b,1)
    return x
w=band.astype(float);core=np.asarray(Image.fromarray((band*255).astype('uint8')).filter(ImageFilter.MinFilter(7)))>0
wc=core.astype(float);den=blur(wc,25)+1e-6
B=np.stack([blur(P[...,k]*wc,25)/den for k in range(3)],-1)
satB=np.maximum(B.max(-1)-B.min(-1),1)
near=blur(band.astype(float),4)>0.002
ab=np.where(near&~prot,np.clip((sat-6)/(satB-6),0,1),0.0)
ab[core]=1
fa=np.clip(1-ab,1e-3,1)
D=(P-ab[...,None]*B)/fa[...,None]
D=np.clip(D,0,255)
fg=D*INK/255
out=fg*(1-ab[...,None])+INK*ab[...,None]
# empty ground: pull near-ink pixels exactly to the ink, weighted so real shadows fade continuously
dev=np.abs(out-INK).max(-1)
devb=blur(np.clip(dev*8,0,255),5)/8
wgt=np.clip((devb-3)/(10-3),0,1);wgt=wgt*wgt*(3-2*wgt)
out=INK+(out-INK)*wgt[...,None]
yy,xx=np.mgrid[0:hh,0:ww]
def ease(t):t=np.clip(t,0,1);return t*t*(3-2*t)
k=ease(xx/60)*ease((ww-1-xx)/60)*ease(yy/50)*ease((hh-1-yy)/50)
out=out*k[...,None]+INK*(1-k[...,None])
print('edge residual',np.abs(out[0]-INK).max(),np.abs(out[:,0]-INK).max(),np.abs(out[-1]-INK).max(),np.abs(out[:,-1]-INK).max())
img=Image.fromarray(out.round().clip(0,255).astype('uint8'))
img.save(H/'hero.webp',lossless=True,quality=100,method=6)
print(img.size)
# x6 luminance-boost check
L=np.abs(out-INK).max(-1)*6
Image.fromarray(np.clip(255-L,0,255).astype('uint8')).save('/tmp/claude-0/-home-user-harvardsites/63392871-db6b-58cc-a44f-b673c84b6969/scratchpad/boost.png')
