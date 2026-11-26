import numpy as np
from PIL import Image, ImageFilter
al=np.asarray(Image.open('src-mask.png')).astype(float)/255
def field(m, s=4):
    I = Image.fromarray((m*255).astype('uint8')).resize((m.shape[1]*s, m.shape[0]*s), Image.LANCZOS).filter(ImageFilter.GaussianBlur(s*0.25))
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

F,s=field(al,8)
W0,H0=al.shape[1],al.shape[0]
out=[]
for L in contours(F):
    k=max(range(len(L)),key=lambda i:(L[i][0]-L[0][0])**2+(L[i][1]-L[0][1])**2)
    L=rdp(L[:k+1],0.7)[:-1]+rdp(L[k:]+[L[0]],0.7)[:-1]
    pts=[((x-1)/s,(y-1)/s) for x,y in L]
    out.append('M'+' L'.join('%.2f %.2f'%p for p in pts)+'Z')
d=''.join(out)
open('hpf.d','w').write(d)
open('/tmp/claude-0/logo_test.svg','w').write('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %d %d" width="%d" height="%d"><rect width="100%%" height="100%%" fill="#17191b"/><path fill="#fff" fill-rule="evenodd" d="%s"/></svg>'%(W0,H0,W0*4,H0*4,d))
print(len(out),len(d))
