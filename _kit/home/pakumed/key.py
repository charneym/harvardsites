"""Hero: PakuMed's own studio photograph of a TITAN-PORT with its catheter (pakumed.de product page), the blue studio
ground keyed out to real alpha (neutral-foreground model: bg has R~0, so a = 1 - (B-R-t)/(Bg_B-t)), lightly despilled."""
import numpy as np
from PIL import Image, ImageFilter
im=np.asarray(Image.open('src_port.jpg').convert('RGB')).astype(np.float32)
H,W,_=im.shape;R,G,B=im[...,0],im[...,1],im[...,2]
bg=(R<12)
# background B / G fields from bg-only pixels, coarse blocks then smooth upsample
S=20;hb,wb=(H+S-1)//S,(W+S-1)//S
fb=np.zeros((hb,wb));fg=np.zeros((hb,wb));cnt=np.zeros((hb,wb))
for y in range(hb):
  for x in range(wb):
    m=bg[y*S:(y+1)*S,x*S:(x+1)*S]
    if m.sum()>20:
      fb[y,x]=B[y*S:(y+1)*S,x*S:(x+1)*S][m].mean();fg[y,x]=G[y*S:(y+1)*S,x*S:(x+1)*S][m].mean();cnt[y,x]=1
# fill holes by iterative neighbour averaging
for it in range(200):
  if cnt.min()>0:break
  nb=np.zeros_like(fb);ng=np.zeros_like(fg);nc=np.zeros_like(cnt)
  for dy,dx in[(-1,0),(1,0),(0,-1),(0,1)]:
    sb=np.roll(np.roll(fb*cnt,dy,0),dx,1);sg=np.roll(np.roll(fg*cnt,dy,0),dx,1);sc=np.roll(np.roll(cnt,dy,0),dx,1)
    nb+=sb;ng+=sg;nc+=sc
  hole=(cnt==0)&(nc>0);fb[hole]=nb[hole]/nc[hole];fg[hole]=ng[hole]/nc[hole];cnt[hole]=1
BB=np.asarray(Image.fromarray(fb.astype(np.float32),'F').resize((W,H),Image.BILINEAR))
t=58.0
a=1-np.clip((B-R-t)/46.0,0,1)
a=np.clip((a-.04)/.96,0,1)
# foreground: remove the blue the semi-transparent edge picked up, keep neutral metal
aa=np.maximum(a,1e-3)[...,None]
bgc=np.stack([np.zeros_like(BB),np.asarray(Image.fromarray(fg.astype(np.float32),'F').resize((W,H),Image.BILINEAR)),BB],-1)
F=(im-(1-aa)*bgc)/aa
F=np.clip(F,0,255)
L=F.mean(-1,keepdims=True)
F[...,2]=np.minimum(F[...,2],np.maximum(F[...,0],F[...,1])+22)
F[...,1]=np.minimum(F[...,1],F[...,0]+16)
F=np.clip(F,0,255)
# the port's mirror image on the studio floor: fade out below its base (x 20..200, base at y~392)
yy=np.arange(H)[:,None];xx=np.arange(W)[None,:]
cut=np.clip((yy-388.5)/3.0,0,1)*((xx>15)&(xx<205))
a=a*(1-cut)
a[a<.03]=0
# keep only the object itself: grow from the port body through connected opaque pixels; detached reflection strokes drop out
core=a>.45
def er(m,n):
  for k in range(n):
    e=m.copy();e[1:]&=m[:-1];e[:-1]&=m[1:];e[:,1:]&=m[:,:-1];e[:,:-1]&=m[:,1:];m=e
  return m
full=core;core=er(core,2)
reg=np.zeros_like(core);reg[330,100]=True
for i in range(3000):
  g=reg.copy();g[1:]|=reg[:-1];g[:-1]|=reg[1:];g[:,1:]|=reg[:,:-1];g[:,:-1]|=reg[:,1:]
  g&=core
  if (g==reg).all():break
  reg=g
print('grow iters',i,reg.sum(),core.sum())
m=reg.astype(np.float32)
for k in range(4):
  d=m.copy();d[1:]=np.maximum(d[1:],m[:-1]);d[:-1]=np.maximum(d[:-1],m[1:]);d[:,1:]=np.maximum(d[:,1:],m[:,:-1]);d[:,:-1]=np.maximum(d[:,:-1],m[:,1:]);m=d
m=m*(full|(a>.05)&(m>0))
m=np.asarray(Image.fromarray((m*255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(1.0))).astype(np.float32)/255
a=a*m
# crop to content with margin
ys,xs=np.where(a>.05);y0,y1,x0,x1=max(0,ys.min()-30),min(H,ys.max()+30),max(0,xs.min()-30),min(W,xs.max()+30)
out=np.concatenate([F,(a*255)[...,None]],-1)[y0:y1,x0:x1].astype(np.uint8)
Image.fromarray(out,'RGBA').save('hero.png');print('crop',x0,y0,x1,y1,out.shape)
for name,col in [('prev_navy.png',(9,33,46)),('prev_white.png',(255,255,255))]:
  bgim=Image.new('RGBA',(out.shape[1],out.shape[0]),col+(255,));bgim.alpha_composite(Image.fromarray(out,'RGBA'));bgim.convert('RGB').save('/tmp/claude-0/pk/'+name)
