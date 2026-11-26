import potrace, numpy as np
from PIL import Image, ImageFilter
im=Image.open('logo_src.png').convert('RGB').crop((10,3,390,96))
S=8
big=im.resize((im.width*S,im.height*S),Image.LANCZOS).filter(ImageFilter.GaussianBlur(S*0.55))
a=np.asarray(big).astype(float)
r,g,b=a[...,0],a[...,1],a[...,2]
red=(r-b>100)&(r-g>70)
blu=(b-r>67)
blu[:int(47.5*S)]=False
# knockout inside the red block
ko=~red; ko[:, :int(150.2*S)]=False; ko[:, int(230.2*S):]=False; ko[:int(5.6*S)]=False; ko[int(43.6*S):]=False
def tr(m):
    bm=potrace.Bitmap(~m); p=bm.trace(turdsize=80,alphamax=1.1,opttolerance=0.4)
    out=[]
    for c in p:
        s=c.start_point; d=['M%.2f %.2f'%(s.x/S,s.y/S)]
        for seg in c.segments:
            if seg.is_corner: d.append('L%.2f %.2fL%.2f %.2f'%(seg.c.x/S,seg.c.y/S,seg.end_point.x/S,seg.end_point.y/S))
            else: d.append('C%.2f %.2f %.2f %.2f %.2f %.2f'%(seg.c1.x/S,seg.c1.y/S,seg.c2.x/S,seg.c2.y/S,seg.end_point.x/S,seg.end_point.y/S))
        d.append('Z'); out.append(''.join(d))
    return ''.join(out)
K=tr(ko); L=tr(blu)
RED='M148.6 4.1H231.6V46.8H148.6Z'+K+'M4.6 84.3H375.2V89.1H4.6Z'
BLUE='M4.8 42.3H146.9V45.5H4.8ZM233.6 42.3H375.4V45.5H233.6Z'+L
open('red.d','w').write(RED);open('blue.d','w').write(BLUE)
W,H=380,93
svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %d %d" width="1520"><rect width="%d" height="%d" fill="#fff"/><path fill="#FF512A" fill-rule="evenodd" d="%s"/><path fill="#2D57B4" fill-rule="evenodd" d="%s"/></svg>'%(W,H,W,H,RED,BLUE)
open('logo.svg','w').write(svg); print(len(RED),len(BLUE))
