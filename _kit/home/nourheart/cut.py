# Cut the preserved human heart (Unsplash, camilo jimenez, OermHGSUzhI) from its fixative jar into real alpha, graded.
# Source: curl -sL 'https://images.unsplash.com/photo-1567974775951-4a1759f26045?w=2400&q=92&fm=jpg' -o src.jpg (not committed)
import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage as nd
im=Image.open('src.jpg').convert('RGB'); a=np.asarray(im).astype(np.float32)
R,G,B=a[...,0],a[...,1],a[...,2]
f=(B-G)                       # heart: B>=G (purple-red); fixative: B<<G (yellow)
f=nd.gaussian_filter(f,3)
RG=nd.gaussian_filter(R/(G+1),3); m=(f>-4)|(RG>1.75)
m=nd.binary_opening(m,iterations=4)
lab,n=nd.label(m); sz=nd.sum(m,lab,range(1,n+1)); m=lab==(1+int(np.argmax(sz)))
m=nd.binary_fill_holes(nd.binary_closing(m,iterations=12))
ys,xs=np.where(m); print('bbox',xs.min(),xs.max(),ys.min(),ys.max(), m.mean())
Image.fromarray((m*255).astype(np.uint8)).save('mask_raw.png')
