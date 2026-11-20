"""Grade the Pexels hero photo (pexels.com/photo/36816507, a stained tissue section seen through a microscope eyepiece)
toward the Raiz palette: ink #0b0d10 shadows, cool blue-violet mids pulled toward the logo cyan, highlights held below white."""
import sys;from PIL import Image,ImageFilter;import numpy as np
src,out=sys.argv[1],sys.argv[2]
im=Image.open(src).convert('RGB').crop((330,620,3000,3480))
im=im.resize((1500,int(1500*im.height/im.width)),Image.LANCZOS)
a=np.asarray(im).astype(float)/255
L=(a*[.2126,.7152,.0722]).sum(2,keepdims=True)
sat=.55; a=L+(a-L)*sat                       # calm the violet
tint=np.array([0.,174,239])/255               # logo cyan
a=a*(1-.18)+ (L*tint*1.25)*.18                # nudge mids toward cyan
a=np.clip(a,0,1)**1.4*.7                    # darker, highlights held
ink=np.array([11,13,16])/255
a=np.maximum(a,ink*(1-L*3).clip(0,1))        # lift true blacks to ink
# vignette into ink outside the field of view
h,w=a.shape[:2];yy,xx=np.mgrid[0:h,0:w]
Image.fromarray((np.clip(a,0,1)*255).astype(np.uint8)).save(out,quality=84,method=6)
