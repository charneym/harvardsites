# Matte for T&T Precision's own photo of five machined aerospace parts laid out on a plain blue-grey ground
# (twohigprecision.com, wp-content/uploads/2025/08/part3.jpg, 2351x1763). OpenCV GrabCut at 1400px wide, seeded with a rectangle
# and the image border as sure background and the strongly bluish-grey ground as probable background; every part kept
# (components over 0.4% of the frame), holes that show the ground (the pocket window) restored as background.
# A soft synthetic contact shadow. Usage: python3 hero_cut.py out.webp [preview.jpg]
import sys, numpy as np, cv2
from PIL import Image, ImageFilter
from scipy import ndimage as nd
full=cv2.imread('part3.src.jpg'); FH,FW=full.shape[:2]
W=1400; H=round(FH*W/FW); src=cv2.resize(full,(W,H),interpolation=cv2.INTER_AREA)
A=src.astype(float)
# the ground: low saturation, blue a little above red, mid luminance; sample its colour from the border
bord=np.concatenate([A[:12].reshape(-1,3),A[-12:].reshape(-1,3),A[:,:12].reshape(-1,3),A[:,-12:].reshape(-1,3)])
g=np.median(bord,0)
L=A.mean(2)
# per-row ground model (the ground has a vertical gradient): median of the leftmost and rightmost 3% of each row
side=np.concatenate([A[:,:int(W*.03)],A[:,-int(W*.03):]],1); rowg=np.median(side,1)  # H x 3
d=np.sqrt(((A-rowg[:,None,:])**2).sum(2))
mask=np.full((H,W),cv2.GC_PR_FGD,np.uint8)
mask[d<16]=cv2.GC_PR_BGD
mask[d<7]=cv2.GC_BGD
mask[:6]=mask[-6:]=cv2.GC_BGD; mask[:,:6]=cv2.GC_BGD; mask[:,-6:]=cv2.GC_BGD
bgd=np.zeros((1,65),np.float64); fgd=np.zeros((1,65),np.float64)
cv2.grabCut(src,mask,None,bgd,fgd,7,cv2.GC_INIT_WITH_MASK)
obj=(mask==cv2.GC_FGD)|(mask==cv2.GC_PR_FGD)
obj=nd.binary_opening(obj,iterations=2)
lab,n=nd.label(obj); sz=nd.sum(obj,lab,range(1,n+1)); keep=[i+1 for i,s in enumerate(sz) if s>0.004*W*H]
obj=np.isin(lab,keep)
filled=nd.binary_fill_holes(obj); holes=filled&~obj
# holes: keep only those that look like ground (the window through the pocketed part)
hl,hn=nd.label(holes)
for i in range(1,hn+1):
  m=hl==i
  if d[m].mean()<45 and m.sum()>200: filled[m]=False
obj=filled
obj=nd.binary_closing(obj,iterations=2)
# the small bracket in the middle (V010-02-322) does not separate cleanly from the ground (its machined channel is the
# ground's colour), so it is left out of the cut: drop the component around (728,301)
lab,n=nd.label(obj); k=lab[301,728] if lab[301,728] else lab[290:315,700:760].max(); obj[lab==k]=False
# the through window in the pocketed plate shows the ground: inside its box, the bluish pixels are ground
wy0,wy1,wx0,wx1=430,505,860,1085; box=A[wy0:wy1,wx0:wx1]
blu=(box[...,0]-box[...,2]>2)  # cv2 order: B - R
blu=nd.binary_opening(blu,iterations=2); bl,bn=nd.label(blu)
if bn:
  bs=nd.sum(blu,bl,range(1,bn+1)); blu=bl==(1+int(np.argmax(bs)))
  # the window is a clean rounded rectangle: fit one to the rows/columns that are mostly ground
  rr=np.where(blu.mean(1)>.35)[0]; cc=np.where(blu.mean(0)>.25)[0]
  y0,y1,x0,x1=rr.min(),rr.max(),cc.min(),cc.max(); win=np.zeros_like(blu); r=6
  yy,xx=np.mgrid[0:blu.shape[0],0:blu.shape[1]]
  qx=np.clip(xx,x0+r,x1-r); qy=np.clip(yy,y0+r,y1-r); win=((xx-qx)**2+(yy-qy)**2<=r*r)
  print('window',x0+wx0,y0+wy0,x1+wx0,y1+wy0)
  obj[wy0:wy1,wx0:wx1][win]=False
obj=nd.gaussian_filter(obj.astype(float),1.6)>0.5
# back to full resolution
o_full=cv2.resize(obj.astype(np.uint8)*255,(FW,FH),interpolation=cv2.INTER_LINEAR)
o_full=nd.gaussian_filter(o_full.astype(float),2.0)
obj=o_full>127
H,W=FH,FW; A=cv2.cvtColor(full,cv2.COLOR_BGR2RGB).astype(float)
a=Image.fromarray((obj*255).astype(np.uint8)).filter(ImageFilter.MinFilter(3)).filter(ImageFilter.GaussianBlur(1.1)); a=np.asarray(a).astype(float)/255
fp=Image.fromarray((obj*255).astype(np.uint8))
sh1=np.asarray(fp.transform(fp.size,Image.AFFINE,(1,0,-3,0,1,-8)).filter(ImageFilter.GaussianBlur(10))).astype(float)/255
sh2=np.asarray(fp.transform(fp.size,Image.AFFINE,(1,0,-10,0,1,-30)).filter(ImageFilter.GaussianBlur(34))).astype(float)/255
sh=np.clip(0.45*sh1+0.4*sh2,0,0.75)
al=a+sh*(1-a); col=np.where(al[...,None]>0,(A*a[...,None])/np.maximum(al[...,None],1e-6),0)
o=Image.fromarray(np.dstack([np.clip(col,0,255),al*255]).astype(np.uint8),'RGBA'); o=o.crop(o.getbbox()); pad=40
o2=Image.new('RGBA',(o.width+2*pad,o.height+2*pad),(0,0,0,0)); o2.paste(o,(pad,pad))
o2.thumbnail((1500,1500),Image.LANCZOS); o2.save(sys.argv[1],quality=90,method=6); print(o2.size)
if len(sys.argv)>2:
  bg=Image.new('RGBA',o2.size,(17,15,46,255)); bg.alpha_composite(o2); bg.convert('RGB').save(sys.argv[2])
