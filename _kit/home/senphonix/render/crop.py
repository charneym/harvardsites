import sys
from PIL import Image
im=Image.open(sys.argv[1]).convert('RGBA');m=int(sys.argv[3]) if len(sys.argv)>3 else 40
bb=im.getchannel('A').point(lambda v:255 if v>3 else 0).getbbox();print('bbox',bb,im.size)
x0,y0,x1,y1=bb;im.crop((max(0,x0-m),max(0,y0-m),min(im.width,x1+m),min(im.height,y1+m))).save(sys.argv[2])
