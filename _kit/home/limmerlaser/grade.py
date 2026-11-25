#!/usr/bin/env python3
"""Limmer Laser hero (HOME_BRIEF update 2a): Limmer's own product photograph of the DIOLAS Photon diode laser
(limmerlaser.de/images/DIOLAS-Photon-1000.jpg, 1000x714, shot on pure white). Cropped to the device with generous white
margin, the white ground and every near-white pixel connected to it snapped to exactly #ffffff so the photo sits on the
white hero ground with no box edge (DP/DJ), a touch of contrast; never upscaled."""
import numpy as np
from PIL import Image
from scipy import ndimage
S=Image.open('src-photon.jpg').convert('RGB')
a=np.asarray(S).astype(np.float32)
lum=a@np.array([.2126,.7152,.0722],np.float32)
m=lum<246
ys,xs=np.where(m); x0,x1,y0,y1=xs.min(),xs.max(),ys.min(),ys.max()
print('bbox',x0,y0,x1,y1)
pad=40
box=(max(0,x0-pad),max(0,y0-pad),min(S.size[0],x1+pad),min(S.size[1],y1+pad))
a=a[box[1]:box[3],box[0]:box[2]]
lum=lum[box[1]:box[3],box[0]:box[2]]
# background = near-white region connected to the border
near=lum>=243
lab,n=ndimage.label(near)
edge=set(np.unique(np.concatenate([lab[0],lab[-1],lab[:,0],lab[:,-1]])))-{0}
bg=np.isin(lab,list(edge))
# soft ramp: pixels just inside the background edge blend to white
d=ndimage.distance_transform_edt(~bg)
c=a.copy()
c=np.clip((c-128)*1.04+128,0,255)
w=np.clip(1-d/3.0,0,1)[...,None]
c=c*(1-w)+255*w
c[bg]=255
# outer border band forced white
c[:6]=255;c[-6:]=255;c[:,:6]=255;c[:,-6:]=255
Image.fromarray(c.astype(np.uint8)).save('hero.webp',quality=90,method=6)
print(c.shape)
