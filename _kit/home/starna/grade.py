#!/usr/bin/env python3
"""Starna hero (HOME_BRIEF update 2a): Starna's own studio photograph of its Doped Polymer Block fluorescence references
(Starna SF Series; starna.com/images/new_images/SF_Series.jpg, from starna.com/polymer-block-references), glowing under UV on
black velvet. The velvet ground is subtracted (a smooth per-row ground estimate), and what remains is the light the blocks emit,
stored as real alpha (colour = emitted light / alpha), so it composites onto the page ink with no box and no seam (DP/DJ).
A long elliptical feather takes any leftover ground to zero well inside the frame."""
import numpy as np
from PIL import Image, ImageFilter
S=Image.open('src-sf.jpg').convert('RGB')
a=np.asarray(S).astype(np.float32)
H,W=a.shape[:2]
# ground estimate: per-row 20th percentile of the darkest pixels at the left/right margins, smoothed
g=np.zeros((H,3),np.float32)
for y in range(H):
  m=np.concatenate([a[y,:120],a[y,-120:]])
  g[y]=np.percentile(m,60,axis=0)
k=61;ker=np.ones(k)/k
for c in range(3): g[:,c]=np.convolve(np.pad(g[:,c],(k//2,k//2),mode='edge'),ker,mode='valid')
d=np.clip(a-g[:,None,:]*1.25-3,0,255)
# soften the velvet grain
D=Image.fromarray(d.astype(np.uint8)).filter(ImageFilter.GaussianBlur(.6))
d=np.asarray(D).astype(np.float32)
al=np.clip(d.max(-1)/255.*1.15,0,1)
al=np.clip((al-0.015)/0.985,0,1)
# elliptical feather
yy,xx=np.mgrid[0:H,0:W]
ex=(xx-W*.5)/(W*.5);ey=(yy-H*.5)/(H*.5)
r=np.sqrt(ex**2+ey**2)
f=np.clip((1.0-r)/0.16,0,1);f=f*f*(3-2*f)
al=al*f
A=np.clip(al,1e-3,1)[...,None]
col=np.clip(d/A,0,255)
col=np.where(al[...,None]>0.003,col,0)
out=np.dstack([col,al*255]).astype(np.uint8)
# trim to content
ys,xs=np.nonzero(al>0.01);y0,y1,x0,x1=max(0,ys.min()-6),min(H,ys.max()+7),max(0,xs.min()-6),min(W,xs.max()+7)
out=out[y0:y1,x0:x1]
im=Image.fromarray(out,'RGBA')
if im.width>1800: im=im.resize((1800,round(im.height*1800/im.width)),Image.LANCZOS)
im.save('hero.webp',quality=92,method=6,exact=False)
print(im.size)
# preview on page ink
bg=Image.new('RGBA',im.size,(6,11,31,255));bg.alpha_composite(im);bg.convert('RGB').resize((im.width//2,im.height//2)).save('/tmp/claude-0/heroprev.jpg')
