# Luminance matte for Labfacility's own photo of IEC mineral-insulated thermocouples on white (labfacility.com):
# thin sheathed wires are un-multiplied against the white ground (no halo); plug bodies kept solid from a distance-from-white core.
# Usage: python3 hero_cut.py out.webp [preview.jpg]
import sys, numpy as np
from PIL import Image, ImageFilter
im=Image.open('src-mi-thermocouples.jpg').convert('RGB');A=np.asarray(im).astype(float)/255
L=A.min(-1); d=np.sqrt(((1-A)**2).sum(-1))
la=np.clip((0.97-L)/0.62,0,1)                      # wire matte: how far below white
core=Image.fromarray(((d>0.55)*255).astype(np.uint8)).filter(ImageFilter.MinFilter(3)).filter(ImageFilter.MaxFilter(5)).filter(ImageFilter.GaussianBlur(1))
core=np.asarray(core).astype(float)/255
a=np.maximum(la,core); a[a<0.04]=0
# un-multiply: remove the white that bleeds into partial pixels
C=np.where(a[...,None]>0.01,(A-(1-a[...,None]))/np.maximum(a[...,None],1e-3),0); C=np.clip(C,0,1)
out=np.dstack([C,a]); o=Image.fromarray((out*255).astype(np.uint8),'RGBA')
o=o.crop(o.getbbox()); pad=40; o2=Image.new('RGBA',(o.width+2*pad,o.height+2*pad),(0,0,0,0)); o2.paste(o,(pad,pad))
o2.save(sys.argv[1],quality=90,method=6); print(o2.size)
if len(sys.argv)>2:
  bg=Image.new('RGBA',o2.size,(14,22,32,255)); bg.alpha_composite(o2); bg.convert('RGB').save(sys.argv[2])
