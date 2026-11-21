# Vasculonics hero: NCI SEM (Unsplash kWAPbD_zaEU) graded to the site ink, padded, radially feathered with real alpha.
import numpy as np
from PIL import Image
im=Image.open('/home/user/harvardsites/_kit/home/vasculonics/dl/nci.jpg').convert('RGB')
im=im.resize((1700,round(1700*im.height/im.width)),Image.LANCZOS)
a=np.asarray(im).astype(np.float32)/255
r,g,b=a[...,0],a[...,1],a[...,2]
L=.3*r+.59*g+.11*b
red=np.clip((r-np.maximum(g,b))*3.2,0,1)
INK=np.array([10,13,27])/255; MID=np.array([128,138,166])/255; HI=np.array([238,240,246])/255
t=np.clip((L-.04)/.9,0,1)[...,None]
t=t**1.05
grey=np.where(t<.5, INK+(MID-INK)*(t/.5), MID+(HI-MID)*((t-.5)/.5))
# reds: deep logo red, lit by luminance
lr=np.clip(r*1.25,0,1)[...,None]
RD=np.array([234,24,36])/255
redc=INK+(RD-INK)*np.clip(lr*1.15,0,1)+np.clip(lr-.75,0,1)*np.array([.5,.3,.3])
out=grey*(1-red[...,None])+redc*red[...,None]
h,w=L.shape
P=int(w*.14)
W,H=w+2*P,h+2*P
canvas=np.zeros((H,W,4),np.float32); canvas[...,:3]=INK
canvas[P:P+h,P:P+w,:3]=out
yy,xx=np.mgrid[0:H,0:W]
cx,cy=P+w*.50,P+h*.47
d=np.sqrt(((xx-cx)/(W*.5))**2+((yy-cy)/(H*.5))**2)
fa=np.clip((1.0-d)/(1.0-.62),0,1); fa=fa*fa*(3-2*fa)
al=np.zeros((H,W),np.float32); al[P:P+h,P:P+w]=np.clip((L-.035)/.10,0,1)
al=al*al*(3-2*al)
canvas[...,3]=fa*al
o=Image.fromarray((np.clip(canvas,0,1)*255).astype(np.uint8),'RGBA')
o.save('/home/user/harvardsites/vasculonics/hero.webp',quality=86,method=6)
print(o.size)
p=Image.new('RGB',o.size,tuple((INK*255).astype(int)));p.paste(o,(0,0),o)
p.thumbnail((800,800));p.save('/tmp/claude-0/-home-user-harvardsites/55d48e39-f82a-5ff6-b29d-e04fdb485a10/scratchpad/hero_prev.jpg')
