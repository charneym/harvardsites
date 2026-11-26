# trace the blue Jelonnek letters from their logo.jpg (300x100); the transformer core, windings, wires and dots are redrawn as geometry
import potrace, numpy as np
from PIL import Image, ImageFilter
im=Image.open('logo_src.jpg').convert('RGB')
a0=np.asarray(im).astype(int);bm=(a0[...,2]-a0[...,0]>60)
print('blue mean',a0[bm].mean(0).round())
dk=(a0[...,0]<110)&(a0[...,1]<110)&~bm;print('dark mean',a0[dk].mean(0).round())
S=8
big=im.resize((im.width*S,im.height*S),Image.LANCZOS).filter(ImageFilter.GaussianBlur(S*0.45))
a=np.asarray(big).astype(float)
blu=(a[...,2]-a[...,0]>100)
blu[:, int(134*S):int(214*S)]=False
bmp=potrace.Bitmap(~blu); p=bmp.trace(turdsize=60,alphamax=1.15,opticurve=True,opttolerance=0.5)
out=[]
for c in p:
    s=c.start_point; d=['M%.2f %.2f'%(s.x/S,s.y/S)]
    for seg in c.segments:
        if seg.is_corner: d.append('L%.2f %.2fL%.2f %.2f'%(seg.c.x/S,seg.c.y/S,seg.end_point.x/S,seg.end_point.y/S))
        else: d.append('C%.2f %.2f %.2f %.2f %.2f %.2f'%(seg.c1.x/S,seg.c1.y/S,seg.c2.x/S,seg.c2.y/S,seg.end_point.x/S,seg.end_point.y/S))
    d.append('Z'); out.append(''.join(d))
L=''.join(out); open('letters.d','w').write(L); print(len(out),len(L))
