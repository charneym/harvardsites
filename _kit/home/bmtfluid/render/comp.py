# matte the black/white renders into real alpha, crop, save RGBA webp (no box edge: real alpha, DP/DJ)
import sys,numpy as np
from PIL import Image
b,w,out=sys.argv[1:4]
B=np.asarray(Image.open(b).convert('RGB')).astype(np.float32)/255
Wt=np.asarray(Image.open(w).convert('RGB')).astype(np.float32)/255
a=np.clip(1-(Wt-B).mean(2),0,1)
C=np.where(a[...,None]>1e-3,B/np.maximum(a[...,None],1e-3),0).clip(0,1)
ys,xs=np.where(a>0.01);pad=24
y0,y1,x0,x1=max(0,ys.min()-pad),min(a.shape[0],ys.max()+pad),max(0,xs.min()-pad),min(a.shape[1],xs.max()+pad)
o=np.dstack([C,a])[y0:y1,x0:x1]
im=Image.fromarray((o*255+.5).astype(np.uint8),'RGBA')
im=im.resize((1300,round(im.height*1300/im.width)),Image.LANCZOS)
im.save(out,'WEBP',quality=90,method=6);print(im.size)
