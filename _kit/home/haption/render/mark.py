#!/usr/bin/env python3
"""Trace the hand silhouette of Haption's logo (datasheet raster 303x202: blue wireframe hand on a black square
reaching to a blue sphere; 'hap' black on white, 'tion' white on a blue box) into a clean filled SVG path in the
same 303x202 coordinate box. Usage: mark.py logo.jpg  -> prints path d."""
import sys, numpy as np
from PIL import Image
from collections import deque
S=4
im=Image.open(sys.argv[1]).convert('RGB'); W,H=im.size
big=np.asarray(im.resize((W*S,H*S),Image.BICUBIC)).astype(int)
r,g,b=big[...,0],big[...,1],big[...,2]
blue=(b>r+45)&(b>90)
yy,xx=np.mgrid[0:blue.shape[0],0:blue.shape[1]]
blue&=~((((xx/S-201.5)**2+(yy/S-65.5)**2)**.5)<56)
X0,Y0=int(163*S),int(127*S)
reg=np.zeros(blue.shape,bool); reg[:Y0,:X0]=True
dark=(r+g+b)<110
white=(r>185)&(g>185)&(b>185)
disk=(((xx/S-201.5)**2+(yy/S-65.5)**2)**.5)<57
passable=reg&(dark|((xx>=138*S)&(white|disk|~blue)))
seen=np.zeros(blue.shape,bool); q=deque()
for x in range(2,X0):
    for y in (0,Y0-1):
        if passable[y,x]: seen[y,x]=True; q.append((y,x))
for y in range(Y0):
    for x in (X0-1,):
        if passable[y,x]: seen[y,x]=True; q.append((y,x))
while q:
    y,x=q.popleft()
    for dy,dx in ((1,0),(-1,0),(0,1),(0,-1)):
        ny,nx=y+dy,x+dx
        if 0<=ny<Y0 and 0<=nx<X0 and passable[ny,nx] and not seen[ny,nx]:
            seen[ny,nx]=True; q.append((ny,nx))
hand=reg&~seen
# keep largest component
lab=np.zeros(hand.shape,int); best=(0,0); cid=0
for y0 in range(Y0):
    for x0 in range(X0):
        if hand[y0,x0] and not lab[y0,x0]:
            cid+=1; n=0; q=deque([(y0,x0)]); lab[y0,x0]=cid
            while q:
                y,x=q.popleft(); n+=1
                for dy,dx in ((1,0),(-1,0),(0,1),(0,-1)):
                    ny,nx=y+dy,x+dx
                    if 0<=ny<Y0 and 0<=nx<X0 and hand[ny,nx] and not lab[ny,nx]:
                        lab[ny,nx]=cid; q.append((ny,nx))
            if n>best[0]: best=(n,cid)
hand=lab==best[1]
Image.fromarray((hand*255).astype('uint8')).save('/tmp/claude-0/hpdf/handmask.png')
# Moore boundary trace
ys,xs=np.nonzero(hand); i=np.argmin(ys*10000+xs); start=(ys[i],xs[i])
dirs=[(0,1),(1,1),(1,0),(1,-1),(0,-1),(-1,-1),(-1,0),(-1,1)]
def inside(p): return 0<=p[0]<hand.shape[0] and 0<=p[1]<hand.shape[1] and hand[p]
cont=[start]; cur=start; d=6
for _ in range(200000):
    found=False
    for k in range(8):
        dd=(d+6+k)%8; p=(cur[0]+dirs[dd][0],cur[1]+dirs[dd][1])
        if inside(p): cur=p; d=dd; found=True; break
    if not found or cur==start: break
    cont.append(cur)
pts=np.array([(x/S,y/S) for y,x in cont],float)
# smooth + RDP
k=5; sm=np.array([pts[[(j+o)%len(pts) for o in range(-k,k+1)]].mean(0) for j in range(len(pts))])
def rdp(P,eps):
    if len(P)<3: return P
    a,b=P[0],P[-1]; v=b-a; n=np.hypot(*v) or 1
    dd=np.abs(v[0]*(P[:,1]-a[1])-v[1]*(P[:,0]-a[0]))/n; i=np.argmax(dd)
    if dd[i]>eps: return np.vstack([rdp(P[:i+1],eps)[:-1],rdp(P[i:],eps)])
    return np.vstack([a,b])
sp=rdp(sm,.35)
print('M'+' '.join('%.1f %.1f'%tuple(p) for p in sp)+'Z')
print(len(sp),file=sys.stderr)
