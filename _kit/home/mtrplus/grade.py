#!/usr/bin/env python3
"""MTR+ hero (HOME_BRIEF update 2a): MTR+'s own studio photograph of the five Bravo-series stimulators (DoloBravo, RehaBravo,
BioBravo, SineBravo, DuoBravo; mtrplus.com/wp-content/uploads/2018/01/alle_Bravo_neu.jpg). The pure-white studio ground is
removed by a flood fill from the border, edge pixels are un-premultiplied against white (no light halo), so the devices are real
alpha on the page ink (DP/DJ: no box). A soft floor reflection is added below."""
import numpy as np
from PIL import Image, ImageFilter
S=Image.open('src-bravo.jpg').convert('RGB')
a=np.asarray(S).astype(np.float32)
H,W=a.shape[:2]
mn=a.min(-1); mx=a.max(-1)
bgc=(mn>242)&((mx-mn)<14)
yy=np.arange(H)[:,None]
bgc|=(yy>H*.68)&(mn>200)&((mx-mn)<48)  # the soft studio floor shadow under the devices
# flood fill from the border through background-like pixels
from collections import deque
seen=np.zeros((H,W),bool); q=deque()
for x in range(W):
  for y in (0,H-1):
    if bgc[y,x] and not seen[y,x]: seen[y,x]=True;q.append((y,x))
for y in range(H):
  for x in (0,W-1):
    if bgc[y,x] and not seen[y,x]: seen[y,x]=True;q.append((y,x))
while q:
  y,x=q.popleft()
  for dy,dx in ((1,0),(-1,0),(0,1),(0,-1)):
    ny,nx=y+dy,x+dx
    if 0<=ny<H and 0<=nx<W and not seen[ny,nx] and bgc[ny,nx]: seen[ny,nx]=True;q.append((ny,nx))
fg=(~seen).astype(np.uint8)*255
m=Image.fromarray(fg).filter(ImageFilter.MinFilter(3)).filter(ImageFilter.GaussianBlur(1.1))
al=np.asarray(m).astype(np.float32)/255.
# un-premultiply against white on the soft edge
A=np.clip(al,1e-3,1)[...,None]
c=np.clip((a-(1-A)*255.)/A,0,255)
c=np.where(al[...,None]>0.02,c,0)
# trim to content
ys,xs=np.nonzero(al>0.02); y0,y1,x0,x1=ys.min(),ys.max()+1,xs.min(),xs.max()+1
pad=8; y0=max(0,y0-pad); x0=max(0,x0-pad); x1=min(W,x1+pad); y1=min(H,y1+pad)
c=c[y0:y1,x0:x1]; al=al[y0:y1,x0:x1]
h,w=al.shape
# gentle grade: very slightly lift contrast, keep the real device colours
c=np.clip((c/255.-.5)*1.04+.5,0,1)*255
# reflection: flipped, fading over 22% of the height, at 16% strength
rh=int(h*.22)
rf=c[::-1][:rh]; ra=al[::-1][:rh]*(0.11*(1-np.linspace(0,1,rh))**1.6)[:,None]
gap=6
out=np.zeros((h+gap+rh,w,4),np.float32)
out[:h,:,:3]=c; out[:h,:,3]=al*255
out[h+gap:,:,:3]=rf; out[h+gap:,:,3]=ra*255
Image.fromarray(out.astype(np.uint8),'RGBA').save('hero.webp',quality=90,method=6,exact=False)
print(w,h+gap+rh)
