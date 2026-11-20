"""Grade the Pexels hero photo (pexels.com/photo/24193873, "Surgical Instruments in a Hospital": a gloved hand laying out
instruments on a draped table before an operation, dark theatre) toward the Morning Lily palette sampled from their live
site: plum-ink #15121a shadows, the drape's teal calmed toward slate, the peach glove and warm metal kept toward the site's
peach #faac85. Printed type on a sterile pack (right) is softened. Edges are feathered to the ink in field.js (DJ)."""
import sys;from PIL import Image,ImageFilter;import numpy as np
src,out=sys.argv[1],sys.argv[2]
im=Image.open(src).convert('RGB')
W,H=im.size;s=W/1200
# soften the printed type on the sterile pack with a feathered mask (no hard box edge)
bl=im.filter(ImageFilter.GaussianBlur(3.2*s))
m=Image.new('L',im.size,0);from PIL import ImageDraw
ImageDraw.Draw(m).polygon([(int(x*s),int(y*s)) for x,y in [(885,345),(1000,340),(990,452),(880,446)]],fill=255)
m=m.filter(ImageFilter.GaussianBlur(5*s))
im=Image.composite(bl,im,m)
im=im.resize((2200,int(2200*H/W)),Image.LANCZOS)
a=np.asarray(im).astype(float)/255
L=(a*[.2126,.7152,.0722]).sum(2,keepdims=True)
warm=np.clip((a[...,0:1]-a[...,2:3])*3,0,1)          # the glove and brass: keep their colour
sat=.34+.5*warm
a=L+(a-L)*sat
slate=np.array([118,122,150])/255;peach=np.array([250,172,133])/255
a=a*.82+L*slate*.18*(1-warm)+L*peach*.22*warm
a=np.clip(a,0,1)**1.06*.94
hi=np.clip((L-.6)/.4,0,1);a=a*(1-.22*hi)
ink=np.array([21,18,26])/255
a=np.maximum(a,ink*(1-L*3).clip(0,1))
Image.fromarray((np.clip(a,0,1)*255).astype(np.uint8)).save(out,quality=84,method=6)
print(out,a.shape)
