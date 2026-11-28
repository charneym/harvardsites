#!/usr/bin/env python3
"""GMJ hero: their own product photograph (gmjmachine.com > Home, "Aircraft Parts: Airframe and structural components",
2250x1500 on a near-black ground): a yellow-primed airframe bracket with two oval lightening windows, a primed lug plate
with a bushed eye, a small primed link and a machined aluminium fitting with bronze bushings. Cut out by brightness
against the black ground (the parts are bright, the ground below v 48), holes filled, the two large oval windows opened
again (the dark lug bore is left as it is), 1 px erosion, edge pixels take the colour of the nearest interior pixel, a soft
edge, and shown below native size (1500 px wide). In: aircraft-parts.src.jpg  Out: hero-cut.webp"""
import numpy as np, cv2
from PIL import Image
from scipy import ndimage as nd
img=cv2.imread('aircraft-parts.src.jpg'); H,W=img.shape[:2]
hsv=cv2.cvtColor(img,cv2.COLOR_BGR2HSV).astype(int); v=hsv[...,2]; s=hsv[...,1]
bgv=np.percentile(v[:60].ravel(),90); print('bg v90',bgv)
m=(v>48)
m=nd.binary_opening(m,iterations=2); m=nd.binary_closing(m,iterations=4)
f=nd.binary_fill_holes(m)
l,n=nd.label(f); sz=nd.sum(f,l,range(1,n+1)); keep=1+np.where(sz>3000)[0]; f=np.isin(l,keep)
# see-through openings: large dark enclosed areas
dark=f&(v<40); dark=nd.binary_opening(dark,iterations=3)
ld,nd_=nd.label(dark); szd=nd.sum(dark,ld,range(1,nd_+1))
holes=np.isin(ld,1+np.where(szd>30000)[0])   # the two oval lightening windows
f&=~holes
f=nd.binary_opening(f,iterations=1)
M1=f.copy()

img=cv2.imread('aircraft-parts.src.jpg'); m=M1.copy()
m=nd.binary_erosion(m,iterations=1)
inner=nd.binary_erosion(m,iterations=3)
_,(iy,ix)=nd.distance_transform_edt(~inner,return_indices=True)
band=~inner; o=img.copy(); o[band]=img[iy[band],ix[band]]
a=cv2.GaussianBlur((m*255).astype(np.uint8),(0,0),1.0)
im=Image.fromarray(o[...,::-1]).convert('RGBA'); im.putalpha(Image.fromarray(a)); im=im.crop(im.getbbox())
# shown below native size: 1500 px wide is plenty
if im.width>1500: im=im.resize((1500,round(im.height*1500/im.width)),Image.LANCZOS)
im.save('hero-cut.webp',quality=90,method=6); print('asset',im.size); print(im.size)
