# Matte for Eurospray's own photo of a blue-painted pump body on a white sweep (eurospray.net gallery).
# Upper part: distance from the white ground. Lower part (the grey floor and its shadow): the pump is saturated blue, so every
# neutral pixel connected to the floor is ground; neutral parts enclosed by blue (bolts, studs, the bore insert) stay.
# The photo's own ragged floor shadow is replaced by a soft synthetic contact shadow. Usage: python3 hero_cut.py out.webp [preview.jpg]
import sys, numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage as nd
src=Image.open('g-pump.src.webp').convert('RGB'); A=np.asarray(src).astype(float); H,W=A.shape[:2]
R,G,B=A[...,0],A[...,1],A[...,2]
bg=np.array([236,236,236.]); far=np.sqrt(((A-bg)**2).sum(-1))>34
L=A.mean(-1)
yy=np.arange(H)[:,None]*np.ones((1,W))
# 1. flood matte: ground = pixels near the white sweep that connect to the image border
near=~far; lb,n=nd.label(near); e=np.unique(np.concatenate([lb[0],lb[-1],lb[:,0],lb[:,-1]])); ground=np.isin(lb,e[e>0])
obj=~ground
# 2. floor zone only (below the pump body): mid-grey floor and shadow pixels connected to the ground are ground too
neu=((np.abs(B-R)<20)&(np.abs(B-G)<18)&(L>62))|ground
lab,n=nd.label(neu); e=np.unique(np.concatenate([lab[0],lab[-1],lab[:,0],lab[:,-1]])); ext=np.isin(lab,e[e>0])
xx=np.arange(W)[None,:]*np.ones((H,1))
floorzone=(yy>560)|((xx>900)&(yy>380))
# a grey pixel with blue on both sides (above and below, or left and right, within 22 px) is a bolt on a flange, not floor
bl0=((B-np.maximum(R,G))>18).astype(np.uint8); k=22
up=nd.maximum_filter1d(bl0,k,axis=0,origin=k//2-1)>0; dn=nd.maximum_filter1d(bl0,k,axis=0,origin=-(k//2))>0
lf=nd.maximum_filter1d(bl0,k,axis=1,origin=k//2-1)>0; rt=nd.maximum_filter1d(bl0,k,axis=1,origin=-(k//2))>0
sandwich=((up&dn)|(lf&rt))&(np.arange(W)[None,:]<900)
obj=obj&~(ext&floorzone&~sandwich)
obj=nd.binary_opening(obj,iterations=1)
bl=(B-np.maximum(R,G))>18
lab2,n2=nd.label(obj); idx=range(1,n2+1); sizes=np.array(nd.sum(obj,lab2,idx)); blu=np.array(nd.sum(bl,lab2,idx))
good=[i+1 for i in range(n2) if sizes[i]>800 and blu[i]/sizes[i]>0.25]; obj=np.isin(lab2,good)
obj=nd.binary_fill_holes(obj)
a=Image.fromarray((obj*255).astype(np.uint8)).filter(ImageFilter.MinFilter(3)).filter(ImageFilter.GaussianBlur(0.8))
a=np.asarray(a).astype(float)/255
# soft contact shadow under the footprint
fp=Image.fromarray((obj*255).astype(np.uint8))
sh1=np.asarray(fp.transform(fp.size,Image.AFFINE,(1,0,0,0,1,-6)).filter(ImageFilter.GaussianBlur(10))).astype(float)/255
sh2=np.asarray(fp.transform(fp.size,Image.AFFINE,(1,0,-10,0,1,-26)).filter(ImageFilter.GaussianBlur(34))).astype(float)/255
sh=np.clip(0.55*sh1+0.45*sh2,0,0.85)*(yy>380)
out=np.zeros((H,W,4)); out[...,:3]=A*a[...,None]/np.maximum(a[...,None],1e-6)*(a[...,None]>0)
al=a+sh*(1-a); col=np.where(al[...,None]>0,(A*a[...,None])/np.maximum(al[...,None],1e-6),0)
o=Image.fromarray(np.dstack([np.clip(col,0,255),al*255]).astype(np.uint8),'RGBA')
bb=o.getbbox(); print('bbox',bb); o=o.crop(bb); pad=60
o2=Image.new('RGBA',(o.width+2*pad,o.height+2*pad),(0,0,0,0)); o2.paste(o,(pad,pad))
o2.save(sys.argv[1],quality=90,method=6); print(o2.size)
if len(sys.argv)>2:
  bgc=Image.new('RGBA',o2.size,(14,23,36,255)); bgc.alpha_composite(o2); bgc.convert('RGB').save(sys.argv[2])
