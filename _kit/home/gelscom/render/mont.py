import sys
from PIL import Image
pre=sys.argv[1];fs=[2,20,30,50,60,85,98];w=int(sys.argv[2]);h=int(sys.argv[3])
ims=[Image.open(pre+'-s%d.png'%f).resize((w,h)) for f in fs]
W=Image.new('RGB',(w*2,h*4),'white')
for i,im in enumerate(ims): W.paste(im,((i%2)*w,(i//2)*h))
W.save(pre+'-story.png')
