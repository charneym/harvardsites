import potrace, numpy as np
from PIL import Image
im=Image.open('ldx-logo2-10.png').convert('RGBA')
mark=im.crop((10,5,215,167))
S=6
big=mark.resize((mark.width*S,mark.height*S),Image.LANCZOS)
a=np.asarray(big).astype(float)
r,g,b,al=a[...,0],a[...,1],a[...,2],a[...,3]/255
# orange: r high, b low ; blue: b high, r low.  weight by alpha
orng=(al*(r/255)*(1-b/255))>0.3
blue=((al*(b/255)*(1-r/255))>0.3); blue[:, 150*S:]=False
def tr(m):
    bm=potrace.Bitmap(~m); p=bm.trace(turdsize=20,alphamax=1.0,opttolerance=0.3)
    out=[]
    for c in p:
        s=c.start_point; d=['M%.1f %.1f'%(s.x/S,s.y/S)]
        for seg in c.segments:
            if seg.is_corner: d.append('L%.1f %.1fL%.1f %.1f'%(seg.c.x/S,seg.c.y/S,seg.end_point.x/S,seg.end_point.y/S))
            else: d.append('C%.1f %.1f %.1f %.1f %.1f %.1f'%(seg.c1.x/S,seg.c1.y/S,seg.c2.x/S,seg.c2.y/S,seg.end_point.x/S,seg.end_point.y/S))
        d.append('Z'); out.append(''.join(d))
    return ''.join(out)
O=tr(orng);B=tr(blue)
open('mark_o.txt','w').write(O);open('mark_b.txt','w').write(B)
svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 205 162" width="600"><rect width="205" height="162" fill="#fff"/><path fill="#FF8C00" fill-rule="evenodd" d="%s"/><path fill="#001EC9" fill-rule="evenodd" d="%s"/></svg>'%(O,B)
open('mark.svg','w').write(svg); print(len(O),len(B))
