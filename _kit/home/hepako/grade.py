#!/usr/bin/env python3
"""HEPAKO hero (HOME_BRIEF update 2a): the firm's own studio photograph of a clear LSR silicone part from its medical range
(hepako.de/einsatzbereiche/medizin/, files/hepako/source/medizin/IMG_1528.jpg). The green felt ground is keyed out by its
green excess, so the translucent silicone keeps real, partial alpha on the page ink (DP/DJ: no box); the green spill is
removed from the part. The scale bar (bottom right) lies outside the crop."""
import numpy as np
from PIL import Image, ImageFilter
S=Image.open('src-mask.jpg').convert('RGB')
a=np.asarray(S).astype(np.float32)
H,W=a.shape[:2]
R,G,B=a[...,0],a[...,1],a[...,2]
gx=G-np.maximum(R,B)            # green excess: felt ~44-80, clear silicone ~0-25
lo,hi=10.,44.
al=np.clip((hi-gx)/(hi-lo),0,1)
# the felt is never brighter than ~200 in max channel; the part's highlights are, so keep them solid
al=np.maximum(al,np.clip((np.minimum(R,B)-150)/40,0,1)*np.clip((60-gx)/30,0,1))
al=np.asarray(Image.fromarray((al*255).astype(np.uint8)).filter(ImageFilter.MedianFilter(3)).filter(ImageFilter.GaussianBlur(.8))).astype(np.float32)/255
# kill specks: keep only the connected part (largest component)
from collections import deque
m=al>.25; keep=np.zeros_like(m); q=deque([(260,380)]); keep[260,380]=True
while q:
  y,x=q.popleft()
  for dy,dx in ((1,0),(-1,0),(0,1),(0,-1)):
    ny,nx=y+dy,x+dx
    if 0<=ny<H and 0<=nx<W and m[ny,nx] and not keep[ny,nx]: keep[ny,nx]=True;q.append((ny,nx))
keep=Image.fromarray((keep*255).astype(np.uint8)).filter(ImageFilter.MaxFilter(13))
al=al*np.asarray(keep.filter(ImageFilter.GaussianBlur(3))).astype(np.float32)/255
# despill: neutral silicone (G no higher than the mean of R and B, plus a hint), a touch cool
mrb=(R+B)/2
G2=np.minimum(G,mrb+4)
c=np.stack([R*.98,G2,B*1.02],-1)
# lift the clear silicone slightly so it reads as luminous on the dark ink
lum=c.mean(-1,keepdims=True)
c=np.clip(lum+(c-lum)*.55,0,255)
c=np.clip((c/255.)**.92*255*1.04,0,255)
ys,xs=np.nonzero(al>0.02); y0,y1,x0,x1=ys.min(),ys.max()+1,xs.min(),xs.max()+1
pad=10; y0=max(0,y0-pad); x0=max(0,x0-pad); x1=min(W,x1+pad); y1=min(H,y1+pad)
c=c[y0:y1,x0:x1]; al=al[y0:y1,x0:x1]
h,w=al.shape
rh=int(h*.2); rf=c[::-1][:rh]; ra=al[::-1][:rh]*(0.10*(1-np.linspace(0,1,rh))**1.6)[:,None]
gap=4
out=np.zeros((h+gap+rh,w,4),np.float32)
out[:h,:,:3]=c; out[:h,:,3]=al*255
out[h+gap:,:,:3]=rf; out[h+gap:,:,3]=ra*255
Image.fromarray(out.astype(np.uint8),'RGBA').save('hero.webp',quality=92,method=6,exact=False)
# preview on the ink
bg=Image.new('RGBA',(w+80,h+gap+rh+80),(15,20,18,255)); bg.alpha_composite(Image.open('hero.webp'),(40,40)); bg.convert('RGB').save('/tmp/claude-0/-home-user-harvardsites/3250f86b-d127-5820-a15e-b85791c2b9f3/scratchpad/hp/prev.png')
print(w,h+gap+rh)
