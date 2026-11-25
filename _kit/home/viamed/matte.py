#!/usr/bin/env python3
"""Hero: Viamed's own studio photograph of the VM-2160 SMARTsat handheld pulse oximeter (viamed.online product image
001216x_VM-2160_SMARTsat.jpg, 2715x2089, shot on pure white). Matted to alpha: the object mask is every pixel that is
not studio white, closed and hole-filled so the white shell stays solid; outside it, the soft studio shadow becomes a
translucent dark shadow. The cable is faded out over a long distance before the frame's right edge. Graded slightly
cooler. Output hero.webp (RGBA)."""
import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage as nd
im=np.asarray(Image.open('src-vm2160.jpg').convert('RGB')).astype(np.float32)/255
H,W,_=im.shape
mn=im.min(2); d=1-mn                     # darkness vs white
obj=d>0.035
obj=nd.binary_closing(obj,iterations=4)
# pad right border as object so the cable (which leaves the frame) is hole-filled
pad=np.pad(obj,((0,0),(0,1)),constant_values=False); pad[:,-1]=True
pad=nd.binary_fill_holes(pad); obj=pad[:,:-1]
obj=nd.binary_opening(obj,iterations=2)
# drop the studio shadow from the mask: the light falls from the upper left, so the shadow lies below and right of the
# navy shell. A light pixel is part of the device only if a dark (navy/screen/connector) pixel lies below it or right of it
# within a short reach.
dark=d>0.5
def reach(m,axis,n):
    r=np.zeros_like(m)
    for k in range(1,n+1,3):
        r|=np.roll(m,-k,axis=axis)
    return r
light=obj&~dark
def reachb(m,axis,n):
    r=np.zeros_like(m)
    for k in range(1,n+1,3):
        r|=np.roll(m,k,axis=axis)
    return r
fwd=reach(dark,0,int(.10*H))|reach(dark,1,int(.10*W))
back=reachb(dark,0,int(.06*H))|reachb(dark,1,int(.06*W))
yy,xx=np.mgrid[0:H,0:W]
shadow=light&back&~fwd&(yy>760)
obj=obj&~shadow
obj=nd.binary_opening(obj,iterations=3)
obj=nd.binary_fill_holes(obj)
# keep the main components only (drop specks)
lab,n=nd.label(obj); sz=nd.sum(obj,lab,range(1,n+1)); keep=np.isin(lab,1+np.where(sz>4000)[0]); obj=keep
# shadow: the soft grey just outside the object -> dark translucent
sh=np.clip((d-0.004)/0.25,0,1)**0.9*0.85
a_obj=nd.gaussian_filter(obj.astype(np.float32),1.1)
# erode-blend so the edge is antialiased but not haloed
alpha=np.maximum(a_obj,sh*(1-a_obj))
rgb=im.copy()
# shadow pixels get black colour
shw=(1-a_obj)[...,None]
rgb=rgb*(1-shw)+0*shw
# pull the residual white halo at the edge toward the neighbouring object colour: darken edge by a hair
edge=(a_obj>0.02)&(a_obj<0.98)
rgb[edge]*=0.94
# the lead fades out over a long distance before the frame's right edge (it leaves the studio frame, so it is never shown cut)
xs=np.linspace(0,1,W)[None,:]
fx=np.clip((xs-0.52)/(0.86-0.52),0,1); fx=fx*fx*(3-2*fx)
alpha=alpha*(1-fx)
alpha[alpha<0.02]=0
# grade: slightly cooler and a touch more contrast on the shell, keep the screen
g=rgb; g=np.clip((g-0.5)*1.04+0.5,0,1); g[...,0]*=0.975; g[...,2]=np.clip(g[...,2]*1.015,0,1)
out=np.dstack([g,alpha]); out=(np.clip(out,0,1)*255+.5).astype(np.uint8)
img=Image.fromarray(out,'RGBA')
bb=img.getchannel('A').point(lambda v:255 if v>6 else 0).getbbox(); img=img.crop(bb)
print('bbox',bb,img.size)
img.thumbnail((2000,2000),Image.LANCZOS)
img.save('hero.webp',quality=90,method=6)
img.save('/tmp/claude-0/-home-user-harvardsites/913b1305-4ecb-55ad-8b62-ef64bfb9601a/scratchpad/vm/hero.png')
print(img.size)
