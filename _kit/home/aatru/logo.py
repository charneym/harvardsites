#!/usr/bin/env python3
"""Redraw the Aatru logo (their AatruLogoLRG.png, 640x207, aatru.com) as clean filled SVG paths (PRINCIPLES DR2):
marching-squares iso-contour of the alpha channel at 4x, Douglas-Peucker simplified, even-odd fill.
The 'TM' is dropped. Output: logo_paths.txt (mark path, wordmark path) in native pixel units."""
import numpy as np
from PIL import Image, ImageFilter
S=4
im=Image.open('logo-src.png').convert('RGBA')
a=im.split()[3].resize((im.width*S,im.height*S),Image.BICUBIC).filter(ImageFilter.GaussianBlur(1.0))
A=np.asarray(a).astype(float)/255.0
A=np.pad(A,1)
H,W=A.shape
def interp(p1,p2,v1,v2):
    t=(0.5-v1)/(v2-v1) if v2!=v1 else .5
    return (p1[0]+t*(p2[0]-p1[0]),p1[1]+t*(p2[1]-p1[1]))
segs={}
b=(A>=0.5)
for y in range(H-1):
    row=b[y];row2=b[y+1]
    xs=np.nonzero((row[:-1]!=row[1:])|(row2[:-1]!=row2[1:])|(row[:-1]!=row2[:-1]))[0]
    for x in xs:
        tl,tr,br,bl=A[y,x],A[y,x+1],A[y+1,x+1],A[y+1,x]
        c=(tl>=.5)*8+(tr>=.5)*4+(br>=.5)*2+(bl>=.5)*1
        if c in (0,15):continue
        T=('T',x,y);R=('R',x,y);B=('B',x,y);L=('L',x,y)
        P={'T':lambda:interp((x,y),(x+1,y),tl,tr),'R':lambda:interp((x+1,y),(x+1,y+1),tr,br),
           'B':lambda:interp((x,y+1),(x+1,y+1),bl,br),'L':lambda:interp((x,y),(x,y+1),tl,bl)}
        # edges keyed globally: horizontal edge (x,y) and vertical edge (x,y)
        key={'T':('h',x,y),'B':('h',x,y+1),'L':('v',x,y),'R':('v',x+1,y)}
        tab={1:[('L','B')],2:[('B','R')],3:[('L','R')],4:[('R','T')],5:[('L','T'),('R','B')],6:[('B','T')],7:[('L','T')],
             8:[('T','L')],9:[('T','B')],10:[('T','R'),('B','L')],11:[('T','R')],12:[('R','L')],13:[('R','B')],14:[('B','L')]}
        for e1,e2 in tab[c]:
            k1,k2=key[e1],key[e2]
            segs[k1]=(k2,P[e1](),P[e2]())
# chain directed segments
loops=[];seen=set()
for k in list(segs):
    if k in seen:continue
    pts=[];cur=k
    while cur in segs and cur not in seen:
        seen.add(cur);nxt,p1,p2=segs[cur];pts.append(p1);cur=nxt
    if len(pts)>8:loops.append(pts)
def dp(pts,eps):
    if len(pts)<3:return pts
    a=np.array(pts);s,e=a[0],a[-1];d=e-s;n=np.hypot(*d)
    dist=np.abs(d[0]*(a[:,1]-s[1])-d[1]*(a[:,0]-s[0]))/n if n>0 else np.hypot(*(a-s).T)
    i=int(np.argmax(dist))
    if dist[i]>eps:return dp(pts[:i+1],eps)[:-1]+dp(pts[i:],eps)
    return [pts[0],pts[-1]]
def closed_dp(pts,eps):
    m=len(pts)//2
    return dp(pts[:m+1],eps)[:-1]+dp(pts[m:]+[pts[0]],eps)[:-1]
out={'mark':[],'word':[]}
for L in loops:
    q=closed_dp(L,0.35)
    q=[((x-1)/S,(y-1)/S) for x,y in q]
    xs=[p[0] for p in q]
    if min(xs)>=575:continue  # TM
    d='M'+' '.join('%.2f %.2f'%p for p in q)+'Z'
    out['mark' if max(xs)<200 else 'word'].append(d)
open('logo_paths.txt','w').write(' '.join(out['mark'])+'\n'+' '.join(out['word'])+'\n')
allp=[float(v) for d in out['mark']+out['word'] for v in d.replace('M','').replace('Z','').split()]
X=allp[0::2];Y=allp[1::2]
print('loops',len(loops),'mark',len(out['mark']),'word',len(out['word']),'bbox',min(X),min(Y),max(X),max(Y),'len',sum(map(len,out['mark']+out['word'])))
