import sys,numpy as np
from PIL import Image
k=np.asarray(Image.open(sys.argv[1]+'_k.png').convert('RGB')).astype(float)
w=np.asarray(Image.open(sys.argv[1]+'_w.png').convert('RGB')).astype(float)
a=1-(w-k).mean(axis=2)/255.0; a=np.clip(a,0,1)
c=np.where(a[...,None]>1e-3,k/np.maximum(a[...,None],1e-3),0); c=np.clip(c,0,255)
rgba=np.dstack([c,a*255]).astype(np.uint8)
im=Image.fromarray(rgba,'RGBA'); bb=im.getbbox(); print('bbox',bb)
pad=24; bb=(max(0,bb[0]-pad),max(0,bb[1]-pad),min(im.width,bb[2]+pad),min(im.height,bb[3]+pad)); im=im.crop(bb)
im.save(sys.argv[2]); bg=Image.new('RGBA',im.size,(27,13,29,255)); bg.alpha_composite(im); bg.convert('RGB').save(sys.argv[2]+'.prev.png'); print(im.size)
