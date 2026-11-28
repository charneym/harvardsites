# Matte for Colpa Precision's own photo of a machined sliding assembly on a shaft (colpa.co.uk gallery, IMG_5341), steel on a grey
# gradient sweep: OpenCV GrabCut seeded with a rectangle and the image border as sure background, refined over 8 iterations; the
# photographed cast shadow is dropped and a soft synthetic contact shadow added. Usage: python3 hero_cut.py out.webp [preview.jpg]
import sys, numpy as np, cv2
from PIL import Image, ImageFilter
from scipy import ndimage as nd
src=cv2.imread('img5341.src.jpg'); H,W=src.shape[:2]
mask=np.zeros((H,W),np.uint8); rect=(60,4,W-110,H-24)
bgd=np.zeros((1,65),np.float64); fgd=np.zeros((1,65),np.float64)
cv2.grabCut(src,mask,rect,bgd,fgd,8,cv2.GC_INIT_WITH_RECT)
obj=(mask==cv2.GC_FGD)|(mask==cv2.GC_PR_FGD)
# second pass: the cast shadow to the right of the shaft and below the plates marked as sure background, then GrabCut again
from PIL import ImageDraw
sb=Image.new('L',(W,H),0); d=ImageDraw.Draw(sb)
d.polygon([(568,0),(W,0),(W,600),(640,600),(597,575),(596,385),(566,372),(566,40)],fill=1)
d.polygon([(W,850),(W,H),(530,H),(530,1015),(600,996),(690,952),(732,936),(802,852)],fill=1)
sb=np.asarray(sb)>0
m2=np.where(obj,cv2.GC_PR_FGD,cv2.GC_PR_BGD).astype(np.uint8); m2[sb]=cv2.GC_BGD
m2[:,:40]=cv2.GC_BGD
cv2.grabCut(src,m2,None,bgd,fgd,6,cv2.GC_INIT_WITH_MASK)
obj=(m2==cv2.GC_FGD)|(m2==cv2.GC_PR_FGD)
lab,n=nd.label(obj); sz=nd.sum(obj,lab,range(1,n+1)); obj=lab==(1+int(np.argmax(sz))); obj=nd.binary_fill_holes(obj)
A=cv2.cvtColor(src,cv2.COLOR_BGR2RGB).astype(float)
a=Image.fromarray((obj*255).astype(np.uint8)).filter(ImageFilter.MinFilter(3)).filter(ImageFilter.GaussianBlur(0.9)); a=np.asarray(a).astype(float)/255
yy=np.arange(H)[:,None]*np.ones((1,W)); fp=Image.fromarray((obj*255).astype(np.uint8))
sh1=np.asarray(fp.transform(fp.size,Image.AFFINE,(1,0,0,0,1,-5)).filter(ImageFilter.GaussianBlur(9))).astype(float)/255
sh2=np.asarray(fp.transform(fp.size,Image.AFFINE,(1,0,-8,0,1,-22)).filter(ImageFilter.GaussianBlur(30))).astype(float)/255
cy=np.where(obj.any(1))[0]; y0=cy.min()+0.72*(cy.max()-cy.min()); ramp=np.clip((yy-y0)/90.0,0,1); ramp=ramp*ramp*(3-2*ramp)
sh=np.clip(0.5*sh1+0.45*sh2,0,0.8)*ramp
al=a+sh*(1-a); col=np.where(al[...,None]>0,(A*a[...,None])/np.maximum(al[...,None],1e-6),0)
o=Image.fromarray(np.dstack([np.clip(col,0,255),al*255]).astype(np.uint8),'RGBA'); o=o.crop(o.getbbox()); pad=40
o2=Image.new('RGBA',(o.width+2*pad,o.height+2*pad),(0,0,0,0)); o2.paste(o,(pad,pad)); o2.save(sys.argv[1],quality=90,method=6); print(o2.size)
if len(sys.argv)>2:
  bg=Image.new('RGBA',o2.size,(16,20,28,255)); bg.alpha_composite(o2); bg.convert('RGB').save(sys.argv[2])
