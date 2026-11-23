# Matte the company's own X-PAC render (PastedGraphic-2-1-copy.png from expandinginnovations.com) for the dark hero:
# bleed interior colour into the edge band (kills the baked-in white halo without eating the teeth), drop specks.
import sys
from PIL import Image
import numpy as np
from scipy import ndimage as nd
i=Image.open(sys.argv[1]).convert('RGBA')
a=np.array(i).astype(float);al=a[...,3]/255;rgb=a[...,:3]
core=nd.binary_erosion(al>0.98,iterations=3)
d,ind=nd.distance_transform_edt(~core,return_indices=True)
out=rgb.copy();band=~core;out[band]=rgb[ind[0],ind[1]][band]
m=al>0.5
lab,n=nd.label(m);sz=nd.sum(m,lab,range(1,n+1));keep=np.isin(lab,1+np.where(sz>40)[0])
A=np.where(nd.binary_dilation(keep,iterations=2),al,0)
A=nd.grey_erosion(A,size=(2,2));A=nd.gaussian_filter(A,.6)
o=Image.fromarray(np.dstack([out,A*255]).clip(0,255).astype('uint8'),'RGBA');o=o.crop(o.getbbox())
o.save(sys.argv[2],quality=92,method=6);print(o.size)
