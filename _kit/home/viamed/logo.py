#!/usr/bin/env python3
"""Logo assets from Viamed's own files: the M tile from their 512px favicon (already alpha), the VIAMED wordmark from
their 2362px logo JPG, keyed off white into alpha and recoloured white (for the dark grounds) and kept in their blue."""
import numpy as np
from PIL import Image
m=Image.open('src-mark.png').convert('RGBA'); m=m.crop(m.getchannel('A').point(lambda v:255 if v>8 else 0).getbbox())
m.save('mark.png',optimize=True); print('mark',m.size)
im=np.asarray(Image.open('src-logo.jpg').convert('RGB')).astype(np.float32)/255
H,W,_=im.shape; im=im[:,int(560):]
d=1-im.min(2); a=np.clip((d-0.04)/(0.62-0.04),0,1)
bb=Image.fromarray((a*255).astype(np.uint8)).point(lambda v:255 if v>20 else 0).getbbox()
for name,col in [('wm-w.png',(255,255,255)),('wm-b.png',(0,96,154))]:
    o=np.zeros(a.shape+(4,),np.uint8); o[...,0],o[...,1],o[...,2]=col; o[...,3]=(a*255+.5).astype(np.uint8)
    img=Image.fromarray(o,'RGBA').crop(bb); img.save(name,optimize=True); print(name,img.size)
