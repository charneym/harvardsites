from PIL import Image,ImageDraw,ImageFilter
import sys
src=Image.open('p-ud.src.webp').convert('RGB')
P=[(50,103),(655,62),(668,80),(690,250),(690,300),(706,300),(706,478),(736,503),(726,528),(706,520),(706,545),(700,560),(700,848),(518,852),(515,875),(465,873),(465,850),(458,790),(240,770),(228,795),(225,815),(180,815),(178,795),(165,785),(38,770),(33,545),(38,500),(60,495),(65,372),(130,365),(128,300),(125,150),(50,125)]
P=[(x*2,y*2) for x,y in P]
W,H=src.size
m=Image.new('L',(W,H),0);ImageDraw.Draw(m).polygon(P,fill=255);m=m.filter(ImageFilter.GaussianBlur(1.2))
# floor shadow
sh=Image.new('L',(W,H),0);d=ImageDraw.Draw(sh)
d.polygon([(70,1540),(1400,1700),(1400,1760),(940,1770),(330,1640),(60,1560)],fill=150);sh=sh.filter(ImageFilter.GaussianBlur(30))
out=Image.new('RGBA',(W,H),(0,0,0,0))
blk=Image.new('RGBA',(W,H),(0,0,0,255));blk.putalpha(sh);out.alpha_composite(blk)
obj=src.convert('RGBA');obj.putalpha(m);out.alpha_composite(obj)
bb=out.getbbox();out=out.crop(bb)
pad=40;o2=Image.new('RGBA',(out.width+2*pad,out.height+2*pad),(0,0,0,0));o2.paste(out,(pad,pad))
o2.thumbnail((1200,1400),Image.LANCZOS)
o2.save(sys.argv[1],quality=86,method=6);print(o2.size)
bg=Image.new('RGBA',o2.size,(16,22,34,255));bg.alpha_composite(o2);bg.convert('RGB').resize((o2.width//2,o2.height//2)).save(sys.argv[2])
