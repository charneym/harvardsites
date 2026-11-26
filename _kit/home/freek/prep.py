from PIL import Image, ImageFilter
import numpy as np
I='img/';O='/home/user/harvardsites/freek/'
def edgecol(im):
    a=np.asarray(im.convert('RGB')).astype(float)
    e=np.concatenate([a[:3].reshape(-1,3),a[-3:].reshape(-1,3),a[:,:3].reshape(-1,3),a[:,-3:].reshape(-1,3)])
    return tuple(int(v) for v in np.median(e,0))
def place(im,W,H,scale=1.0,feather=40,col=None,cy=.5):
    im=im.convert('RGB')
    if scale!=1: im=im.resize((round(im.width*scale),round(im.height*scale)),Image.LANCZOS)
    col=col or edgecol(im)
    C=Image.new('RGB',(W,H),col)
    m=Image.new('L',im.size,0);mm=Image.new('L',(im.width-2*feather,im.height-2*feather),255);m.paste(mm,(feather,feather));m=m.filter(ImageFilter.GaussianBlur(feather/2.2))
    C.paste(im,((W-im.width)//2,int((H-im.height)*cy)),m);return C,col
# hero: their HotMicroCoil spread on its own flat ground, canvas widened so any hero column crops only ground
h=Image.open(I+'hotmicrocoil-heizelemente.jpg').convert('RGB')
# the canvas is widened around their photo by continuing the photo's own edge tones outward and easing them very slowly
# into an even #DBDBDB, so there is no box edge or lighter patch anywhere (checked on a x6 luminance boost)
W0,H0=1400,1240;P=np.asarray(h).astype(float);ph,pw=P.shape[:2];ox,oy=(W0-pw)//2,(H0-ph)//2
Pb=np.asarray(h.filter(ImageFilter.GaussianBlur(10))).astype(float)
E=np.pad(Pb,((oy,H0-ph-oy),(ox,W0-pw-ox),(0,0)),mode='edge')
yy,xx=np.mgrid[0:H0,0:W0];dx=np.maximum(np.maximum(ox-xx,xx-(ox+pw-1)),0);dy=np.maximum(np.maximum(oy-yy,yy-(oy+ph-1)),0);d=np.hypot(dx,dy)
t=np.clip(d/260,0,1);w=t*t*(3-2*t);E=E*(1-w[...,None])+219*w[...,None]
# inside the photo: the photo itself, with its last 24px eased into the smoothed edge so grain and tone meet without a seam
din=np.minimum(np.minimum(xx-ox,ox+pw-1-xx),np.minimum(yy-oy,oy+ph-1-yy));u=np.clip(din/24,0,1)[...,None]
Pp=np.pad(P,((oy,H0-ph-oy),(ox,W0-pw-ox),(0,0)),mode='edge')
C=np.where((din>=0)[...,None],Pp*u+E*(1-u),E)
rng=np.random.default_rng(7);C=C+rng.normal(0,1.1,C.shape[:2])[...,None]*(1-u)
Image.fromarray(np.clip(C,0,255).astype('uint8')).save(O+'hero.webp',quality=90);print('hero')
# story frames 5:4
def cov(f,W,H,box=None):
    im=Image.open(I+f).convert('RGB')
    if box: im=im.crop(box)
    s=max(W/im.width,H/im.height);im=im.resize((round(im.width*s),round(im.height*s)),Image.LANCZOS)
    x=(im.width-W)//2;y=(im.height-H)//2;return im.crop((x,y,x+W,y+H))
cov('gebaeude_g.jpg',838,670).save(O+'s-werk.webp',quality=86)
C,_=place(Image.open(I+'cap1_1_g.jpg'),725,580,feather=6);C.save(O+'s-patronen.webp',quality=86)
cov('k2022-1-g.jpg',725,580).save(O+'s-messe.webp',quality=86)
cov('ihr-freekteam.jpg',940,752).save(O+'s-team.webp',quality=86)
# gallery 16:10 at 800x500
G=[('g-patronen','cap1_1_g.jpg',None,.80),('g-duesen','slider_home25.jpg',(200,84,900,443),1.0),('g-baender','cap5_1_g.jpg',None,.80),
   ('g-heisskanal','slider_home24.jpg',(10,84,1090,443),.72),('g-waermeleit','slider_home23.jpg',(90,84,1000,443),.85),('g-fass','slider_home20.jpg',(150,50,380,410),1.0)]
for n,f,box,sc in G:
    im=Image.open(I+f).convert('RGB')
    if box: im=im.crop(box)
    s=min(sc,760/im.width,480/im.height)
    C,col=place(im,800,500,scale=s,feather=8);C.save(O+n+'.webp',quality=86);print(n,col,im.size,s)
