# matte the black/white renders into real alpha, add a soft bloom from the emission pass (additive light), crop, save RGBA
import sys,numpy as np
from PIL import Image,ImageFilter
d=sys.argv[1];ink=tuple(int(sys.argv[3][i:i+2],16) for i in (1,3,5))
B=np.asarray(Image.open(d+'/b.png').convert('RGB')).astype(np.float32)/255
Wt=np.asarray(Image.open(d+'/w.png').convert('RGB')).astype(np.float32)/255
Ei=Image.open(d+'/e.png').convert('RGB')
a=np.clip(1-(Wt-B).mean(2),0,1)
pre=B.copy()                     # premultiplied colour = the render over black
g1=np.asarray(Ei.filter(ImageFilter.GaussianBlur(6))).astype(np.float32)/255
g2=np.asarray(Ei.filter(ImageFilter.GaussianBlur(26))).astype(np.float32)/255
glow=np.clip(g1*.55+g2*.9,0,1)*np.array([1,.9,.72])
pre=np.clip(pre+glow,0,1)
al=np.clip(np.maximum(a,pre.max(2)),0,1)
Cc=np.where(al[...,None]>1e-3,pre/np.maximum(al[...,None],1e-3),0).clip(0,1)
ys,xs=np.where(al>0.012);pad=30
y0,y1,x0,x1=max(0,ys.min()-pad),min(al.shape[0],ys.max()+pad),max(0,xs.min()-pad),min(al.shape[1],xs.max()+pad)
out=np.dstack([Cc,al])[y0:y1,x0:x1]
hh,ww=out.shape[:2];fx=np.ones(ww);fl=int(ww*float(sys.argv[4]) if len(sys.argv)>4 else 0)
if fl>0:
  t=np.linspace(0,1,fl);e=t*t*(3-2*t);fx[:fl]=e;fx[-fl:]=np.minimum(fx[-fl:],e[::-1])
out[...,3]*=fx[None,:]
im=Image.fromarray((out*255+.5).astype(np.uint8),'RGBA');im.save(sys.argv[2]);print(im.size)
bg=Image.new('RGBA',im.size,ink+(255,));bg.alpha_composite(im);bg.convert('RGB').save(sys.argv[2].replace('.png','_onink.png'))
