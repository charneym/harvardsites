import numpy as np
from PIL import Image, ImageFilter
im=Image.open('hero_src.jpg').convert('RGB'); a=np.asarray(im).astype(float)/255
H,W,_=a.shape
mx=a.max(2);mn=a.min(2);sat=mx-mn;lum=a.mean(2)
bgm=(sat<0.06)&(lum>0.72)
# exclude object region roughly (the transformer + its wires): erode bg mask
from PIL import ImageFilter
m=Image.fromarray((bgm*255).astype(np.uint8)).filter(ImageFilter.MinFilter(15))
bgm=np.asarray(m)>128
yy,xx=np.mgrid[0:H,0:W];X=xx/W;Y=yy/H
terms=[np.ones_like(X),X,Y,X*X,X*Y,Y*Y,X**3,X*X*Y,X*Y*Y,Y**3]
A=np.stack([t[bgm] for t in terms],1)
bgf=np.zeros((H,W))
coef,*_=np.linalg.lstsq(A,lum[bgm],rcond=None)
for c,t in zip(coef,terms): bgf+=c*t
print('bg range',bgf.min(),bgf.max(),bgm.mean())
out=a/bgf[...,None]
# lift: anything >= .93 relative goes to white with a smooth knee
k0,k1=.86,.97
t=np.clip((out-k0)/(k1-k0),0,1);s=t*t*(3-2*t)
out=np.where(out>k0,out*(1-s)+1*s,out);out=np.clip(out,0,1)
o=Image.fromarray((out*255).round().astype(np.uint8))
o.save('hero_flat.png')
# a white margin all round so multiply never meets an edge
from scipy import ndimage as nd
o3=np.asarray(o).astype(float)/255
med=nd.median_filter(o3,size=(5,5,1))
dev=(1-med).max(2)
obj=dev>0.13
obj=nd.binary_opening(obj,iterations=1)
lab,n=nd.label(obj);sz=nd.sum(obj,lab,range(1,n+1))
keep=np.isin(lab,1+np.where(sz>400)[0])
keep=nd.binary_closing(keep,iterations=6);keep=nd.binary_fill_holes(keep)
keep=nd.binary_dilation(keep,iterations=3)
al=nd.gaussian_filter(keep.astype(float),3.0)
al=np.clip(al*1.15,0,1)[...,None]
fin=o3*al+(1-al)
# pad with white margin and save at native size
pad=60
P=np.ones((H+2*pad,W+2*pad,3));P[pad:pad+H,pad:pad+W]=fin
Image.fromarray((P*255).round().astype(np.uint8)).save('hero_final.png')
print('saved',P.shape)
