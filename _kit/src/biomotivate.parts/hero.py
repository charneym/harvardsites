import numpy as np
from PIL import Image, ImageFilter
im=Image.open('dl/799775_145846.jpeg').convert('RGB')
X0,Y0,X1,Y1=0,1450,2700,3648
c=np.asarray(im.crop((X0,Y0,X1,Y1))).astype(np.float32)
H,W,_=c.shape
R,G,B=c[...,0],c[...,1],c[...,2]
sky=((B-R)>32)&(np.maximum(np.maximum(R,G),B)<215)
ridge=np.zeros(W,int)
for x in range(W):
    col=~sky[:,x]
    # first row from top (after min) where a run of 6 non-sky pixels starts
    ymin=1830-Y0
    run=0;yy=H-1
    for y in range(ymin,H):
        if col[y]:
            run+=1
            if run>=6: yy=y-5;break
        else: run=0
    ridge[x]=yy
# smooth ridge slightly (median)
def median_filter(r,size):
    p=size//2; rp=np.pad(r,p,mode="edge"); return np.array([int(np.median(rp[i:i+size])) for i in range(len(r))])
ridge=median_filter(ridge,size=9)
yy=np.arange(H)[:,None]
a=np.clip((yy-ridge[None,:]+1.5)/3.0,0,1)
# combine with per-pixel non-sky for inner sky pockets near ridge
# grading
L=(0.3*R+0.59*G+0.11*B)/255.
ink=np.array([34,39,47],np.float32); hi=np.array([238,233,222],np.float32)
t=np.clip(L,0,1)**1.12
duo=ink[None,None,:]*(1-t[...,None])+hi[None,None,:]*t[...,None]
gray=np.stack([L*255]*3,-1)
orig=c*0.5+gray*0.5
out=duo*0.72+orig*0.28
out=out*0.93  # tame the snow a touch
# edge fades (long, eased)
xs=np.linspace(0,1,W)[None,:]; ys=np.linspace(0,1,H)[:,None]
def ease(v): v=np.clip(v,0,1); return v*v*(3-2*v)
fl=ease(xs/0.5)**2.2; fr=ease((1-xs)/0.34); fb=ease((1-ys)/0.42)
alpha=a*fl*fr*fb
rgba=np.dstack([np.clip(out,0,255),alpha*255]).astype(np.uint8)
img=Image.fromarray(rgba,'RGBA')
img=img.resize((1800,int(1800*H/W)),Image.LANCZOS)
img.save('/home/user/harvardsites/biomotivate/hero.webp',quality=86,method=6)
print(img.size, 'summit approx', 716/W, (1840-Y0)/H)
# preview on ink
bg=Image.new('RGB',img.size,(34,39,47));bg.paste(img,(0,0),img);bg.resize((1000,int(1000*H/W))).save('heroprev.jpg')
