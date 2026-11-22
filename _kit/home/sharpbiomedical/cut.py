import numpy as np
from PIL import Image, ImageDraw, ImageFilter
im=Image.open('dl/w_nsplsh_a1829f581e894211b2e9865be4a9cb05~mv2.jpg').convert('RGB')
P=[(2142,1107),(2230,1058),(2500,1052),(2790,1058),(2930,1099),(3000,1177),(3010,1240),(3080,1205),(3180,1212),(3255,1265),(3290,1195),(3370,1160),(3440,1175),(3490,1225),(3530,1290),(3600,1305),(3660,1345),(3720,1410),(3755,1470),(3745,1540),(3715,1580),(3730,1650),(3760,1710),(3760,1775),(3800,1790),(3900,1790),(4000,1800),(4080,1840),(4140,1900),(4165,2000),(4165,2150),(4140,2250),(4080,2320),(3950,2355),(3790,2355),(3745,2400),(3745,2495),(3815,2475),(3950,2468),(4130,2450),(4200,2490),(4340,2495),(4390,2560),(4410,2750),(4410,2900),(4380,2985),(4300,3050),(4130,3142),(3990,3160),(3830,3120),(3824,3200),(3824,3380),(3770,3440),(3675,3500),(3570,3475),(3470,3380),(3460,3240),(3400,3240),(3210,3300),(3175,3475),(3140,3575),(3000,3580),(2965,3480),(2930,3370),(2160,3372),(2060,3320),(2046,3160),(2055,3037),(2081,2775),(2107,2425),(2090,2340),(2030,2300),(2030,2160),(2090,2070),(2116,2000),(2116,1405),(2099,1300),(2105,1177)]
X0,Y0,X1,Y1=1900,900,4560,3720
c=im.crop((X0,Y0,X1,Y1))
m=Image.new('L',c.size,0);ImageDraw.Draw(m).polygon([(x-X0,y-Y0) for x,y in P],fill=255)
mt=np.asarray(m.filter(ImageFilter.MinFilter(5)).filter(ImageFilter.GaussianBlur(5))).astype(float)
ms=np.asarray(m.filter(ImageFilter.MinFilter(9)).filter(ImageFilter.GaussianBlur(22))).astype(float)
h,w=mt.shape;xx=np.arange(w)[None,:]+X0
k=np.clip((xx-3650)/250,0,1)
a=(mt*(1-k)+ms*k)/255
# bottom: fade below y 3350 for the nerve/cap ends (they sit in shelf shadow)
yy=np.arange(h)[:,None]+Y0
fb=np.clip(1-(yy-3250)/360,0,1);fb=fb*fb*(3-2*fb)
u=np.clip((xx-2850)/300,0,1);u=u*u*(3-2*u)
yb=3250+250*u;dd=360-200*u
fl=np.clip(1-(yy-yb)/dd,0,1);fl=fl*fl*(3-2*fl)
a*=fl
rgb=np.asarray(c).astype(float)
L=rgb@[.3,.59,.11]
# shelf/dark cool pixels pushed toward ink (keeps blue cap: it is lighter)
dk=np.clip((140-L)/40,0,1)*((rgb[...,2]-rgb[...,0])>4)*((rgb[...,2]-rgb[...,0])<42)
ink=np.array([10,17,30.])
rgb=rgb*(1-dk[...,None]*.85)+ink*dk[...,None]*.85
# slight contrast and cool shadow grade
rgb=np.clip((rgb-128)*1.06+124,0,255)
rgb*= (0.55+0.45*np.clip(a,0,1)**.6)[...,None]*k[...,None]+(1-k[...,None])
out=np.dstack([rgb,a*255]).astype(np.uint8)
o=Image.fromarray(out,'RGBA')
bb=o.getbbox();o=o.crop(bb)
o=o.resize((int(o.width*.45),int(o.height*.45)),Image.LANCZOS)
o.save('cut.png');print(o.size)
bg=Image.new('RGBA',o.size,(10,17,30,255));bg.alpha_composite(o);bg.convert('RGB').save('cutprev.jpg')
b6=np.clip(np.asarray(bg.convert('RGB')).astype(float)*6,0,255).astype(np.uint8);Image.fromarray(b6).save('cut6.jpg')
