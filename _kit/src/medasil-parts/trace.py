# Trace the white letterforms of Medasil's own badge logo (medasil.com, 1655px PNG): the "m", "vincent", "medasil" and (R)
# (marching squares, subpixel interpolation, RDP simplify) into filled SVG paths in a 1655-unit box; the maroon disc is an exact circle.
import sys, math
from PIL import Image, ImageFilter
import numpy as np
im = Image.open('src-logo.png').convert('RGBA').resize((828,828), Image.LANCZOS)
a = np.asarray(im).astype(float)/255
r,g,b,al = a[...,0],a[...,1],a[...,2],a[...,3]
white = al*np.clip((g-0.2)/0.6,0,1)
def field(m, s=4):
    I = Image.fromarray((m*255).astype('uint8')).resize((m.shape[1]*s, m.shape[0]*s), Image.BICUBIC).filter(ImageFilter.GaussianBlur(s*0.45))
    return np.asarray(I).astype(float)/255, s
def contours(F, t=0.5):
    H,W = F.shape; F = np.pad(F,1); segs = {}
    def ip(p,q,vp,vq):
        k=(t-vp)/(vq-vp); return (p[0]+(q[0]-p[0])*k, p[1]+(q[1]-p[1])*k)
    edges=[]
    for y in range(H+1):
        row0=F[y]; row1=F[y+1]
        for x in range(W+1):
            v=[row0[x],row0[x+1],row1[x+1],row1[x]]
            c=sum((1<<i) for i in range(4) if v[i]>t)
            if c in (0,15): continue
            P=[(x,y),(x+1,y),(x+1,y+1),(x,y+1)]
            E=lambda i: ip(P[i],P[(i+1)%4],v[i],v[(i+1)%4])
            # edges: 0 top,1 right,2 bottom,3 left ; orientation keeps inside on the left
            tbl={1:[(3,0)],2:[(0,1)],3:[(3,1)],4:[(1,2)],5:[(3,0),(1,2)],6:[(0,2)],7:[(3,2)],8:[(2,3)],9:[(2,0)],10:[(0,1),(2,3)],11:[(2,1)],12:[(1,3)],13:[(1,0)],14:[(0,3)]}
            for e1,e2 in tbl[c]:
                edges.append((tuple(round(z,4) for z in E(e1)),tuple(round(z,4) for z in E(e2))))
    adj={}
    for p,q in edges:
        if p==q: continue
        adj.setdefault(p,[]).append(q); adj.setdefault(q,[]).append(p)
    loops=[]; seen=set()
    for p in list(adj):
        if p in seen: continue
        L=[p]; seen.add(p); cur=p
        while True:
            n=[q for q in adj[cur] if q not in seen]
            if not n: break
            cur=n[0]; L.append(cur); seen.add(cur)
        if len(L)>8: loops.append(L)
    return loops
def rdp(P,eps):
    if len(P)<3: return P
    a,b=np.array(P[0]),np.array(P[-1]); d=b-a; n=np.hypot(*d) or 1e-9
    D=[abs(d[0]*(a[1]-p[1])-d[1]*(a[0]-p[0]))/n for p in P[1:-1]]
    i=int(np.argmax(D))+1
    if D[i-1]>eps: return rdp(P[:i+1],eps)[:-1]+rdp(P[i:],eps)
    return [P[0],P[-1]]
F,s = field(white, 3)
K=1655/828
parts={'m':[],'v':[],'w':[],'r':[]}
for L in contours(F):
    k=max(range(len(L)),key=lambda i:(L[i][0]-L[0][0])**2+(L[i][1]-L[0][1])**2)
    L=rdp(L[:k+1],0.3)[:-1]+rdp(L[k:]+[L[0]],0.3)[:-1]
    pts=[((x-1)/s*K,(y-1)/s*K) for x,y in L]
    cx=sum(p[0] for p in pts)/len(pts); cy=sum(p[1] for p in pts)/len(pts)
    d='M'+' L'.join('%.1f %.1f'%p for p in pts)+'Z'
    key='w' if cy>1050 else ('r' if cx>1280 and cy<460 else ('v' if (cx<660 and cy<760 and len(pts)<400 and (max(p[0] for p in pts)-min(p[0] for p in pts))<330) else 'm'))
    parts[key].append(d)
for k,v in parts.items():
    open('logo-%s.d'%k,'w').write(''.join(v)); print(k,len(v),sum(map(len,v)))
