#!/usr/bin/env python3
"""APEX hero: their own product photograph (apex-manufacturing.com > Gallery, apex_gallery_15.jpg, 900x1200): three parts
they machined, on a grey seamless backdrop: a long threaded stainless housing with milled flats and ports, a slotted
cylindrical part with two helical blades, and a small anodised flange with a side boss. Cut out by (1) fitting a smooth
3rd-order surface to the backdrop and keeping what departs from it or carries edges, (2) a coarse polygon per part to drop
backdrop blobs, (3) GrabCut seeded with that mask to settle edges against the floor shadow, (4) the traced lower edge of
the flange and the elliptical bottom edge of the cylinder to drop the cast shadows, and the backdrop seen through the
V between the blades removed and its outline smoothed; then 1 px erosion, edge pixels take the colour of the nearest
interior pixel (no grey halo), and a soft edge. No scaling up. In: gallery15.src.jpg  Out: hero-cut.webp"""
import numpy as np, cv2
from PIL import Image
from scipy import ndimage as nd

# ----
img=cv2.imread('gallery15.src.jpg').astype(np.float32); H,W=img.shape[:2]
g=cv2.cvtColor(img.astype(np.uint8),cv2.COLOR_BGR2GRAY).astype(np.float32)
# background samples: the outer band (top, sides), fit a 2nd-order surface per channel
yy,xx=np.mgrid[0:H,0:W]; band=np.zeros((H,W),bool); band[:40]=1; band[:, :30]=1; band[:, -30:]=1; band[-30:]=1
A=lambda y,x: np.stack([np.ones_like(x),x,y,x*x,x*y,y*y,x*x*y,x*y*y,y**3,x**3],-1)
X=A(yy[band]/H,xx[band]/W); bg=np.zeros_like(img)
for c in range(3):
    co,_,_,_=np.linalg.lstsq(X,img[...,c][band],rcond=None); bg[...,c]=A(yy/H,xx/W)@co
d=img-bg; dl=d.mean(-1); dc=np.abs(d-d.mean(-1,keepdims=True)).sum(-1)
gx=cv2.Sobel(g,cv2.CV_32F,1,0,3); gy=cv2.Sobel(g,cv2.CV_32F,0,1,3); gm=np.hypot(gx,gy)
DL,GM=dl,gm
m=(dl>14)|(dl<-38)|(cv2.GaussianBlur(gm,(0,0),2)>60)
m=nd.binary_closing(m,iterations=3); m=nd.binary_fill_holes(m); m=nd.binary_opening(m,iterations=3)
l,n=nd.label(m); sz=nd.sum(m,l,range(1,n+1)); m=np.isin(l,1+np.where(sz>5000)[0])
m1=m.copy()


# ----
img=cv2.imread('gallery15.src.jpg'); H,W=img.shape[:2]
m=m1.copy(); dl=DL; gm=GM
clip=np.zeros((H,W),np.uint8)
polys=[ [(110,85),(400,85),(400,800),(372,800),(372,945),(110,945)],                          # left part
        [(430,290),(800,290),(800,700),(797,1000),(430,1000)],           # right part
        [(200,790),(510,790),(510,1045),(200,1045)] ]                   # flange
for p in polys: cv2.fillPoly(clip,[np.array(p,np.int32)],1)
m&=clip>0
# background seen in the V between the blades: smooth, near-background pixels inside the notch zone
zone=np.zeros((H,W),bool); cv2.fillPoly(zone.view(np.uint8),[np.array([(520,300),(760,300),(760,700),(520,700)],np.int32)],1)
smooth=cv2.GaussianBlur(gm,(0,0),2)<22
bgl=(np.abs(dl)<12)&smooth&zone
bgl=nd.binary_opening(bgl,iterations=2); l,n=nd.label(bgl); sz=nd.sum(bgl,l,range(1,n+1)); bgl=np.isin(l,1+np.where(sz>300)[0])
m&=~nd.binary_dilation(bgl,iterations=1)
m=nd.binary_opening(m,iterations=2)
l,n=nd.label(m); sz=nd.sum(m,l,range(1,n+1)); m=np.isin(l,1+np.where(sz>5000)[0])
m2=m.copy()


# ----
img=cv2.imread('gallery15.src.jpg'); H,W=img.shape[:2]
m=m2.copy(); dl=DL; gm=GM
f=img.astype(np.float32); dc=np.abs(f-f.mean(-1,keepdims=True)).sum(-1)
sm=cv2.GaussianBlur(gm,(0,0),2.5)
gc=np.full((H,W),cv2.GC_BGD,np.uint8)
gc[nd.binary_dilation(m,iterations=6)]=cv2.GC_PR_BGD
gc[m]=cv2.GC_PR_FGD
core=nd.binary_erosion(m,iterations=14); gc[core]=cv2.GC_FGD
sh=(dl<-6)&(sm<26)&(dc<16)&m&~core
gc[sh]=cv2.GC_PR_BGD
bg=np.zeros((1,65),np.float64); fg=np.zeros((1,65),np.float64)
cv2.grabCut(img,gc,None,bg,fg,6,cv2.GC_INIT_WITH_MASK)
r=(gc==cv2.GC_FGD)|(gc==cv2.GC_PR_FGD)
r=nd.binary_opening(r,iterations=2); r=nd.binary_fill_holes(r)
l,n=nd.label(r); sz=nd.sum(r,l,range(1,n+1)); r=np.isin(l,1+np.where(sz>5000)[0])
m4=r.copy()


# ----
img=cv2.imread('gallery15.src.jpg'); H,W=img.shape[:2]
r=m4.copy()
yy,xx=np.mgrid[0:H,0:W]
# left of the right part's base: the flange's traced lower boundary
fz=(xx<437)&(yy>900)
keep=np.zeros((H,W),np.uint8); cv2.fillPoly(keep,[np.array([(195,790),(205,940),(215,972),(245,1000),(290,1026),(335,1034),(378,1029),(398,1016),(437,955),(437,790)],np.int32)],1)
r&=~(fz&(keep==0))
# the right part's base: nothing below its elliptical bottom edge
cx,a,yc,yb=616.0,180.0,948.0,991.0
t=np.clip(1-((xx-cx)/a)**2,0,1); ylim=yc+(yb-yc)*np.sqrt(t)
r&=~((xx>=437)&(yy>900)&(yy>ylim+0.5))
dl=DL; gm=GM
zone=np.zeros((H,W),np.uint8); cv2.fillPoly(zone,[np.array([(560,420),(760,420),(760,690),(560,690)],np.int32)],1)
smooth=cv2.GaussianBlur(gm,(0,0),2)<22
bgl=(np.abs(dl)<12)&smooth&(zone>0)
bgl=nd.binary_opening(bgl,iterations=2); l,n=nd.label(bgl); sz=nd.sum(bgl,l,range(1,n+1)); bgl=np.isin(l,1+np.where(sz>300)[0])
r&=~nd.binary_dilation(bgl,iterations=1)
r=nd.binary_opening(r,iterations=1)
z2=np.zeros((H,W),np.uint8); cv2.fillPoly(z2,[np.array([(540,400),(780,400),(780,700),(540,700)],np.int32)],1)
rs=cv2.GaussianBlur(r.astype(np.float32),(0,0),3.0)>0.5
r=np.where(z2>0,rs,r)
l,n=nd.label(r); sz=nd.sum(r,l,range(1,n+1)); r=np.isin(l,1+np.where(sz>5000)[0])
m5=r.copy()


# ----
img=cv2.imread('gallery15.src.jpg'); m=m5.copy()
m=nd.binary_erosion(m,iterations=1)
inner=nd.binary_erosion(m,iterations=3)
_,(iy,ix)=nd.distance_transform_edt(~inner,return_indices=True)
band=~inner; o=img.copy(); o[band]=img[iy[band],ix[band]]
a=cv2.GaussianBlur((m*255).astype(np.uint8),(0,0),0.8)
im=Image.fromarray(o[...,::-1]).convert('RGBA'); im.putalpha(Image.fromarray(a)); im=im.crop(im.getbbox()); im.save('hero-cut.webp',quality=90,method=6); print('asset',im.size); print(im.size)

