"""Trace GerdCare's logo script ('Gerd' red, 'Care' blue) from gerd-care.com's 260x183 logo JPG into filled SVG paths (DR2)."""
import sys, numpy as np, potrace
from PIL import Image, ImageFilter
src=sys.argv[1]; S=8
im=Image.open(src).convert('RGB')
big=im.resize((im.width*S,im.height*S),Image.BICUBIC).filter(ImageFilter.GaussianBlur(S*.55))
a=np.array(big).astype(float)
R,G,B=a[...,0],a[...,1],a[...,2]
red=(R-G>70)&(R-B>60)
blue=(B-R>28)&(B>150)
H=im.height*S
# script rows only (exclude MEDICAL line): y < ~ 0.6 of height in source (MEDICAL at ~ y 112-125 of 183)
cut=int(105*S)
def trace(mask):
    m=mask.copy(); m[cut:]=False
    bm=potrace.Bitmap(~m)
    pl=bm.trace(turdsize=40,alphamax=1.0,opticurve=True,opttolerance=0.3)
    out=[]
    for c in pl:
        st=c.start_point; d='M%.1f %.1f'%(st.x/S,st.y/S)
        for sg in c.segments:
            if sg.is_corner: d+='L%.1f %.1fL%.1f %.1f'%(sg.c.x/S,sg.c.y/S,sg.end_point.x/S,sg.end_point.y/S)
            else: d+='C%.2f %.2f %.2f %.2f %.2f %.2f'%(sg.c1.x/S,sg.c1.y/S,sg.c2.x/S,sg.c2.y/S,sg.end_point.x/S,sg.end_point.y/S)
        out.append(d+'Z')
    return ''.join(out)
r=trace(red); b=trace(blue)
ys,xs=np.where((red|blue)[:cut]); print('bbox',xs.min()/S,ys.min()/S,xs.max()/S,ys.max()/S,file=sys.stderr)
open(sys.argv[2],'w').write('<path class="g1" fill-rule="evenodd" d="%s"/><path class="g2" fill-rule="evenodd" d="%s"/>'%(r,b))
