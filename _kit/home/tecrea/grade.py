# Grades the NCI fluorescence micrograph (Unsplash sIqWYiNLiJU) to Tecrea's palette and feathers every edge to transparent (DJ).
# Channels are treated as fluorophores: R (actin/membrane) -> logo green, G (puncta) -> logo teal, B (nuclei) -> deep teal-navy.
import sys,numpy as np
from PIL import Image,ImageFilter
src,out=sys.argv[1],sys.argv[2]
im=Image.open(src).convert('RGB').resize((1800,1800),Image.LANCZOS)
a=np.asarray(im).astype(np.float32)/255.
R,G,B=a[...,0],a[...,1],a[...,2]
G2=np.clip(G-0.55*R*G,0,1)            # yellow rims (R+G) read mostly as membrane, not cargo
mem=np.array([0.27,0.52,0.05]);car=np.array([0.20,0.93,0.78]);nuc=np.array([0.05,0.26,0.36])
o=R[...,None]**1.25*mem*0.85+G2[...,None]**1.15*car*1.3+B[...,None]**1.0*nuc*1.5
ink=np.array([6,20,14])/255.
o=o*0.86+ink*(1-np.clip(o.max(-1,keepdims=True)*2,0,1))
o=np.clip(o,0,1)
# feather: radial + edge falloff to alpha 0
h,w=o.shape[:2];yy,xx=np.mgrid[0:h,0:w];nx=(xx/(w-1))*2-1;ny=(yy/(h-1))*2-1
r=np.sqrt(nx**2+ny**2)
def sm(e0,e1,x):t=np.clip((x-e0)/(e1-e0),0,1);return t*t*(3-2*t)
al=(1-sm(0.62,1.0,r))*(1-sm(0.80,0.99,np.abs(nx)))*(1-sm(0.80,0.99,np.abs(ny)))
rgba=np.dstack([o,al]);Image.fromarray((rgba*255).astype(np.uint8),'RGBA').save(out,'WEBP',quality=84,method=6)
print('ok',out)
