# python3 _kit/v4/motioncompare.py DIR_A DIR_B : side-by-side sheets (cmp-loader/nav/reveal/story.png) from two motionshot.js output folders
import sys
from PIL import Image,ImageDraw
A,Bn=sys.argv[1],sys.argv[2]
def row(names,out):
  ims=[]
  for n in names:
    a=Image.open(A+'/'+n).resize((720,450));b=Image.open(Bn+'/'+n).resize((720,450))
    c=Image.new('RGB',(1450,480),'white');c.paste(a,(0,30));c.paste(b,(730,30));d=ImageDraw.Draw(c);d.text((5,8),A+'  '+n,fill='black');d.text((735,8),Bn+'  '+n,fill='black');ims.append(c)
  o=Image.new('RGB',(1450,sum(i.height for i in ims)),'white');y=0
  for i in ims:o.paste(i,(0,y));y+=i.height
  o.save(out)
row(['loader-%d.png'%t for t in (200,500,800,1100,1500,2000,2500)],'cmp-loader.png')
row(['nav-%d.png'%t for t in (300,600,900,1300)],'cmp-nav.png')
row(['reveal-mid.png','reveal-end.png'],'cmp-reveal.png')
row(['story-%d.png'%k for k in (0,15,35,50,70,95)],'cmp-story.png')
