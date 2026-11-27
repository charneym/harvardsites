# python3 _kit/v4/motionsheet.py DIR_A DIR_B OUTDIR : one sheet per sequence, A left / B right, one row per timestamp
import sys,os,re
from PIL import Image,ImageDraw
A,B,O=sys.argv[1:4];os.makedirs(O,exist_ok=True)
for seq in ('loader-fresh','loader-repeat','nav','story'):
  fs=sorted([f for f in os.listdir(A) if re.match(seq+r'-\d+\.png$',f) and os.path.exists(os.path.join(B,f))],key=lambda f:int(f.rsplit('-',1)[1][:-4]))
  if not fs:continue
  W,H=600,375;rows=[]
  for f in fs:
    c=Image.new('RGB',(2*W+30,H+22),'white');d=ImageDraw.Draw(c)
    for i,D in enumerate((A,B)):c.paste(Image.open(os.path.join(D,f)).convert('RGB').resize((W,H)),(i*(W+30),22));d.text((i*(W+30)+4,5),os.path.basename(D.rstrip('/'))+'  '+f,fill='black')
    rows.append(c)
  o=Image.new('RGB',(rows[0].width,sum(r.height for r in rows)),'white');y=0
  for r in rows:o.paste(r,(0,y));y+=r.height
  o.save(os.path.join(O,seq+'.jpg'),quality=78)
print('sheets in',O)
