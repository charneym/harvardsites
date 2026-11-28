# Matte for R&A Engineering's own photo of a yellow-passivated machined waveguide part on white (randaeng.co.uk part gallery, ar12.jpg).
# The pale part on a white sweep defeats a colour or flood matte, so its outline is traced from its geometry (shape.py: flange front and
# back ellipses, hub ellipse, body and flange-plate polygon). Soft synthetic contact shadow.
# Usage: python3 hero_cut.py out.webp [preview.jpg]
import sys, numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage as nd
src=Image.open('ar12.src.jpg').convert('RGB'); A=np.asarray(src).astype(float); H,W=A.shape[:2]
R,G,B=A[...,0],A[...,1],A[...,2]; L=A.mean(-1)
import os; sys.path.insert(0,os.path.dirname(os.path.abspath(__file__))); from shape import mask
obj=mask(W,H)
# defringe: near the outline, pale neutral pixels are the white sweep, not the part
edge=obj&~nd.binary_erosion(obj,iterations=5)
Lm=A.mean(-1);chm=np.maximum(R,G)-B
obj=obj&~(edge&(Lm>228)&(chm<26))
obj=nd.binary_opening(obj,iterations=1)
a=Image.fromarray((obj*255).astype(np.uint8)).filter(ImageFilter.MinFilter(3)).filter(ImageFilter.GaussianBlur(0.9))
a=np.asarray(a).astype(float)/255
yy=np.arange(H)[:,None]*np.ones((1,W))
fp=Image.fromarray((obj*255).astype(np.uint8))
sh1=np.asarray(fp.transform(fp.size,Image.AFFINE,(1,0,0,0,1,-5)).filter(ImageFilter.GaussianBlur(9))).astype(float)/255
sh2=np.asarray(fp.transform(fp.size,Image.AFFINE,(1,0,-8,0,1,-20)).filter(ImageFilter.GaussianBlur(30))).astype(float)/255
cy=np.where(obj.any(1))[0];ymid=(cy.min()+cy.max())/2
sh=np.clip(0.5*sh1+0.45*sh2,0,0.8)*(yy>ymid)
al=a+sh*(1-a); col=np.where(al[...,None]>0,(A*a[...,None])/np.maximum(al[...,None],1e-6),0)
o=Image.fromarray(np.dstack([np.clip(col,0,255),al*255]).astype(np.uint8),'RGBA')
o=o.crop(o.getbbox()); pad=40
o2=Image.new('RGBA',(o.width+2*pad,o.height+2*pad),(0,0,0,0)); o2.paste(o,(pad,pad)); o2.save(sys.argv[1],quality=90,method=6); print(o2.size)
if len(sys.argv)>2:
  bg=Image.new('RGBA',o2.size,(16,20,28,255)); bg.alpha_composite(o2); bg.convert('RGB').save(sys.argv[2])
