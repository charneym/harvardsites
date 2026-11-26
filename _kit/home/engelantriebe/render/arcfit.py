# Fits the ENGEL red arc mark (engelantriebe.de/images/logo_engel_elektroantriebe.png, 240x77) in polar form around a
# centre: inner/outer radius per angle, smoothed with a low-order Fourier series; writes the segment ranges.
import numpy as np, math, json, sys
from PIL import Image
a=np.array(Image.open(sys.argv[1]).convert('RGBA')).astype(float)/255
red=a[...,3]*np.clip((a[...,0]-a[...,1]-.25)/.4,0,1)
S=8
im=Image.fromarray((red*255).astype(np.uint8)).resize((240*S,77*S),Image.BILINEAR)
R=np.array(im).astype(float)/255
CX,CY=44.0,39.0
angs=np.arange(-60,320,1.0)
res=[]
for t in angs:
    th=math.radians(t);rs=np.arange(10,55,.05)
    xs=(CX+rs*math.cos(th))*S;ys=(CY+rs*math.sin(th))*S
    ok=(xs>=0)&(xs<240*S-1)&(ys>=0)&(ys<77*S-1)
    v=np.zeros_like(rs);v[ok]=R[ys[ok].astype(int),xs[ok].astype(int)]
    on=np.nonzero(v>.5)[0]
    if len(on)<8: res.append((t,None,None));continue
    res.append((t,rs[on[0]],rs[on[-1]]))
pres=[r for r in res if r[1] is not None]
T=np.radians([r[0] for r in pres]);ri=np.array([r[1] for r in pres]);ro=np.array([r[2] for r in pres])
def fit(y,K=3):
    cols=[np.ones_like(T)]+[f(k*T) for k in range(1,K+1) for f in (np.cos,np.sin)]
    A=np.stack(cols,1);c,*_=np.linalg.lstsq(A,y,rcond=None);return c
ci,co=fit(ri),fit(ro)
segs=[];cur=None
for t,a1,b1 in res:
    if a1 is not None:
        if cur is None: cur=[t,t]
        else: cur[1]=t
    elif cur: segs.append(cur);cur=None
if cur: segs.append(cur)
print(json.dumps({'ci':ci.tolist(),'co':co.tolist(),'segs':segs,'c':[CX,CY]}))
for t,a1,b1 in res[::10]: print(t,a1,b1,file=sys.stderr)
