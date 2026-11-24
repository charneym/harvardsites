import sys,numpy as np
from PIL import Image
B=np.asarray(Image.open(sys.argv[1]).convert('RGB')).astype(np.float32)/255
W=np.asarray(Image.open(sys.argv[2]).convert('RGB')).astype(np.float32)/255
a=1-np.clip((W-B).mean(2),0,1)
a=np.clip(a,0,1)
C=np.where(a[...,None]>1e-3,B/np.maximum(a[...,None],1e-3),0)
C=np.clip(C,0,1)
ys,xs=np.where(a>0.01);y0,y1,x0,x1=ys.min(),ys.max(),xs.min(),xs.max();pad=40
y0=max(0,y0-pad);x0=max(0,x0-pad);y1=min(a.shape[0],y1+pad);x1=min(a.shape[1],x1+pad)
out=np.dstack([C,a])[y0:y1,x0:x1]
im=Image.fromarray((out*255+.5).astype(np.uint8),'RGBA');im.save(sys.argv[3]);print(im.size)
ink=tuple(int(sys.argv[4][i:i+2],16) for i in (1,3,5)) if len(sys.argv)>4 else (8,21,15)
bg=Image.new('RGBA',im.size,ink+(255,));bg.alpha_composite(im);bg.convert('RGB').save(sys.argv[3].replace('.png','_onink.png'))
