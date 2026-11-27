# Hand-traced polygon matte for Gillard's own studio photo of the MEDI extrusion cutter (gillard.co.uk), pale machine on a pale ground:
# a flood fill cannot separate the two, so the outline is traced; soft floor shadow added. Usage: python3 hero_cut.py out.webp [preview.jpg]
import sys
from PIL import Image,ImageDraw,ImageFilter
src=Image.open('medi.src.webp').convert('RGB');W,H=src.size
P=[
 [(187,232),(623,232),(623,742),(645,742),(645,1225),(545,1225),(545,1112),(232,1112),(232,1225),(138,1225),(138,742),(187,742)],
 [(380,193),(428,193),(430,234),(378,234)],
 [(122,472),(200,472),(201,742),(120,742),(118,700),(104,706),(90,736),(86,704),(98,680),(85,612),(85,560),(120,556)],
 [(150,716),(200,716),(200,742),(166,742),(166,790),(152,790)],
 [(633,112),(645,112),(646,262),(662,288),(663,322),(624,322),(626,300),(633,262)],
 [(645,742),(680,742),(680,830),(672,830),(672,1020),(640,1020)],
 [(72,1200),(140,1200),(140,1222),(112,1222),(112,1270),(130,1280),(130,1296),(76,1296),(78,1280),(96,1270),(96,1222),(72,1222)],
 [(95,1135),(113,1135),(113,1202),(95,1202)],
 [(645,1200),(710,1206),(706,1224),(686,1224),(686,1272),(704,1282),(704,1298),(650,1298),(652,1282),(668,1272),(668,1224),(645,1222)],
 [(664,1138),(686,1138),(686,1202),(664,1202)],
 [(155,1218),(232,1218),(246,1250),(240,1290),(176,1290),(160,1260)],
 [(548,1218),(640,1218),(642,1262),(630,1292),(570,1292),(552,1260)],
 [(236,1110),(292,1110),(292,1166),(236,1166)],
]
m=Image.new('L',(W,H),0);d=ImageDraw.Draw(m)
for p in P:d.polygon(p,fill=255)
# inside the small attachments only (side module, antenna, pneumatics), drop pixels that are the neutral pale studio ground
import numpy as np
A=np.asarray(src).astype(int);aux=Image.new('L',(W,H),0);da=ImageDraw.Draw(aux)
for p in [P[2],P[3],P[4],P[5]]:da.polygon(p,fill=255)
aux=np.asarray(aux)>0;L=A.mean(-1);neu=(np.abs(A[...,0]-A[...,2])<9)&(L>214)
mm=np.asarray(m).copy();mm[aux&neu]=0;m=Image.fromarray(mm).filter(ImageFilter.MinFilter(3)).filter(ImageFilter.MaxFilter(3))
m=m.filter(ImageFilter.GaussianBlur(.9))
sh=Image.new('L',(W,H),0);ImageDraw.Draw(sh).ellipse([60,1255,740,1325],fill=165);sh=sh.filter(ImageFilter.GaussianBlur(22))
out=Image.new('RGBA',(W,H),(0,0,0,0));blk=Image.new('RGBA',(W,H),(0,0,0,255));blk.putalpha(sh);out.alpha_composite(blk)
o=src.convert('RGBA');o.putalpha(m);out.alpha_composite(o)
out=out.crop(out.getbbox());pad=30
o2=Image.new('RGBA',(out.width+2*pad,out.height+2*pad),(0,0,0,0));o2.paste(out,(pad,pad));o2.save(sys.argv[1],quality=88,method=6);print(o2.size)
if len(sys.argv)>2:
  bg=Image.new('RGBA',o2.size,(16,24,30,255));bg.alpha_composite(o2);bg.convert('RGB').save(sys.argv[2])
