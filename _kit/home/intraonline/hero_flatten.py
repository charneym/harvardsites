import numpy as np
from PIL import Image, ImageFilter
src=Image.open('bild_slider_01-7db880dc.jpg').convert('RGB')
im=np.asarray(src).astype(float)
H,W,_=im.shape
bg=np.median(np.concatenate([im[:,0:250],im[:,1400:1600]],1),axis=1)
lum=lambda a:a.mean(-1)
X=np.arange(W)/W-.5
for it in range(3):
    if it==0: B=np.repeat(bg[:,None,:],W,1)
    d=np.abs(lum(im)-lum(B))
    sub=Image.fromarray((d>4).astype(np.uint8)*255).filter(ImageFilter.MaxFilter(15))
    msk=np.asarray(sub)==0
    # also smooth luminance-diff via blur to catch soft shadows
    Bn=np.zeros_like(im)
    coef=[]
    for y in range(H):
        ok=msk[y]
        if ok.sum()<200: ok=np.ones(W,bool)
        A=np.stack([np.ones(ok.sum()),X[ok],X[ok]**2],1)
        cs=[np.linalg.lstsq(A,im[y,ok,c],rcond=None)[0] for c in range(3)]
        coef.append(cs)
    coef=np.array(coef) # H,3,3
    k=np.ones(31)/31
    coef=np.stack([[np.convolve(np.pad(coef[:,c,j],15,mode='edge'),k,'valid') for j in range(3)] for c in range(3)],-1).transpose(1,2,0).transpose(0,2,1) if False else coef
    for c in range(3):
        for j in range(3):
            coef[:,c,j]=np.convolve(np.pad(coef[:,c,j],15,mode='edge'),k,'valid')
    B=coef[:,:,0][:,None,:]+coef[:,:,1][:,None,:]*X[None,:,None]+coef[:,:,2][:,None,:]*(X**2)[None,:,None]
G0=np.array([226,229,234.])
v=im/B*G0
K=240.
hi=v>K; v[hi]=K+(255-K)*(1-np.exp(-(v[hi]-K)/(255-K)))
x0,x1=300,1330
v=v[:,x0:x1];h,w=v.shape[:2]
yy=np.arange(h)[:,None]/h; xx=np.arange(w)[None,:]/w
def sm(a):a=np.clip(a,0,1);return a*a*(3-2*a)
m=sm(yy/0.30)*sm((1-yy)/0.10)*sm(xx/0.06)*sm((1-xx)/0.08)
out=G0+(v-G0)*m[:,:,None]
o=np.clip(out,0,255).astype(np.uint8)
Image.fromarray(o).save('hero.png');Image.fromarray(o).save('hero.webp',quality=92)
L=o.astype(float).mean(-1);b=np.clip((L-L.mean())*6+128,0,255).astype(np.uint8);Image.fromarray(b).save('boost.png')
a=out-G0
for (y0,y1,xa,xb) in [(380,500,750,1000),(250,350,800,980),(40,100,450,600),(200,300,10,60),(150,250,980,1020),(470,520,600,700)]:
  print((y0,xa),a[y0:y1,xa:xb].mean((0,1)).round(2))
# pass 2: remove low-frequency residual of the ground (normalized blur over ground pixels)
v2=v.copy()
D=(v2-G0)
Ld=D.mean(-1)
gm=(np.abs(Ld)<10).astype(np.uint8)*255
gm=np.asarray(Image.fromarray(gm).filter(ImageFilter.MinFilter(9)))/255.
def box1(a,r,ax):
    k=np.ones(2*r+1)/(2*r+1)
    return np.apply_along_axis(lambda s:np.convolve(np.pad(s,r,mode='edge'),k,'valid'),ax,a)
def blur(a,r):
    r=int(r*0.6)
    for _ in range(3): a=box1(box1(a,r,0),r,1)
    return a
R=np.stack([blur(D[:,:,c]*gm,40)/np.maximum(blur(gm,40),1e-3) for c in range(3)],-1)
v2=v2-R
out=G0+(v2-G0)*m[:,:,None]
o=np.clip(out,0,255).astype(np.uint8)
Image.fromarray(o).save('hero.png');Image.fromarray(o).save('hero.webp',quality=92)
L=o.astype(float).mean(-1);b=np.clip((L-G0.mean())*6+128,0,255).astype(np.uint8);Image.fromarray(b).save('boost.png')
a=out-G0
print('pass2')
for (y0,y1,xa,xb) in [(380,500,750,1000),(250,350,800,980),(40,100,450,600),(200,300,10,60),(150,250,980,1020),(470,520,600,700)]:
  print((y0,xa),a[y0:y1,xa:xb].mean((0,1)).round(2))
