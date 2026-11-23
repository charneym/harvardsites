#!/usr/bin/env python3
"""Procedural H&E section texture for the DoMore hero render: a resected colon wall cut in cross-section at low magnification,
mucosa with regular crypts along one face, pale submucosa, streaky pink muscularis, and a gland-forming adenocarcinoma invading
through the wall (crowded, irregular, back-to-back glands with dark nuclear rims). Eosin pink / haematoxylin purple, real alpha.
Generic tissue, no patient data. Run: python3 tissue.py out.png"""
import sys, math, random, numpy as np, cv2
W,H=2400,1500; rnd=random.Random(11); np.random.seed(11)
def noise(sc,octv=4,seed=0):
    rs=np.random.RandomState(seed);acc=np.zeros((H,W),np.float32);amp=1;tot=0
    for o in range(octv):
        s=max(2,int(sc/(2**o)));g=rs.rand(H//s+3,W//s+3).astype(np.float32)
        acc+=amp*cv2.resize(g,(W+3*s,H+3*s),interpolation=cv2.INTER_CUBIC)[:H,:W];tot+=amp;amp*=.5
    return acc/tot
yy,xx=np.mgrid[0:H,0:W].astype(np.float32)
# outline: an elongated, gently curved strip of bowel wall (luminal face on top), thick in the middle
u=xx/W; top=H*(.16+.06*np.sin(u*3.1+.4)+.03*np.sin(u*9+1))+ (noise(90,3,1)-.5)*60
bot=H*(.86-.05*np.sin(u*2.6+.8)-.02*np.sin(u*7.3))+(noise(110,3,2)-.5)*70
lx=W*.035+(noise(160,2,3)[:, :1]-.5)*80; rx=W*.965+(noise(160,2,4)[:, :1]-.5)*80
inside=(yy>top)&(yy<bot)&(xx>lx)&(xx<rx)
m=inside.astype(np.uint8)*255; m=cv2.GaussianBlur(m,(0,0),2.2)
depth=np.clip((yy-top)/np.maximum(bot-top,1),0,1)   # 0 luminal face -> 1 serosa
# tumour: a large mass occupying the centre-right, pushing through the wall
tum=((xx-W*.6)/(W*.30))**2+((yy-H*.5)/(H*.42))**2
tum=tum+(noise(120,3,5)-.5)*.9
T=np.clip((1.05-tum)/.18,0,1)
eos=np.array([226,140,186],np.float32); eosD=np.array([205,100,160],np.float32); hem=np.array([86,38,118],np.float32); hemD=np.array([58,22,92],np.float32)
sub=np.array([238,196,222],np.float32); musc=np.array([214,112,168],np.float32)
img=np.zeros((H,W,3),np.float32); al=np.ones((H,W),np.float32)
fib=noise(14,3,6); streak=cv2.GaussianBlur(np.random.rand(H,W).astype(np.float32),(0,0),sigmaX=9,sigmaY=1.2); streak=(streak-streak.mean())/streak.std()
# layers by depth: mucosa 0-.22, submucosa .22-.42, muscularis .42-.95, serosa fringe
lay_m=np.clip((.24-depth)/.03,0,1); lay_s=np.clip((depth-.22)/.03,0,1)*np.clip((.44-depth)/.03,0,1); lay_p=np.clip((depth-.42)/.03,0,1)
base=(sub*(1-lay_p)[...,None]+musc*lay_p[...,None])
base=base*(1+.05*(fib[...,None]-.5))+ (lay_p*streak*7)[...,None]*np.array([.6,1,.8])
img[:]=base
# loose submucosa: paler, some holes (vessels)
holes=np.zeros((H,W),np.uint8)
for i in range(60):
    x=rnd.uniform(0,W);y0=None
    cx=int(x);cy=int(H*(.16+.06*math.sin(x/W*3.1+.4))+ (H*.86-H*.16)*rnd.uniform(.26,.4))
    cv2.ellipse(holes,(cx,cy),(rnd.randint(6,22),rnd.randint(4,12)),rnd.uniform(0,180),0,360,255,-1)
hb=cv2.GaussianBlur(holes,(0,0),1.5).astype(np.float32)/255*lay_s
# mucosa: dense purple lamina with regular vertical crypts
mu=lay_m*(1-T)
img=img*(1-mu[...,None])+(eosD*.55+hem*.45)[None,None,:]*mu[...,None]
crypt=np.zeros((H,W),np.uint8); cryptR=np.zeros((H,W),np.uint8)
x=20
while x<W:
    t=float(np.interp(x,np.arange(W),top[int(H*.5)])) if False else None
    ty=int(top[min(H-1,int(H*.3)),int(x)]) if False else int(H*(.16+.06*math.sin(x/W*3.1+.4)+.03*math.sin(x/W*9+1)))
    L=int((H*.7)*.2*rnd.uniform(.75,.95)); w=rnd.randint(5,8)
    pts=np.array([[x+rnd.uniform(-3,3),ty+8+k*L/6] for k in range(7)],np.int32)
    cv2.polylines(cryptR,[pts],False,255,w+10); cv2.polylines(crypt,[pts],False,255,w)
    x+=rnd.randint(22,30)
cr=cv2.GaussianBlur(cryptR,(0,0),1.2).astype(np.float32)/255*mu; cl=cv2.GaussianBlur(crypt,(0,0),1).astype(np.float32)/255*mu
img=img*(1-cr[...,None]*.9)+hemD[None,None,:]*cr[...,None]*.9
img=img*(1-cl[...,None])+np.array([244,214,236],np.float32)*cl[...,None]
# tumour glands: crowded, irregular, back-to-back
G=np.zeros((H,W),np.uint8); R=np.zeros((H,W),np.uint8); pts=[]
for i in range(40000):
    px,py=rnd.uniform(0,W),rnd.uniform(0,H)
    if T[int(py),int(px)]<.5 or not inside[int(py),int(px)]: continue
    if any((px-a)**2+(py-b)**2<(c+d+6)**2 for a,b,c,d in pts[-400:]): continue
    r=rnd.uniform(14,34); pts.append((px,py,r,r))
    if len(pts)>900: break
for px,py,r,_ in pts:
    n=14;poly=[]
    for k in range(n):
        a=k/n*2*math.pi; rr=r*(1+.35*math.sin(a*2+px)+.2*math.sin(a*3+py)*rnd.uniform(.5,1))*rnd.uniform(.85,1.1)
        poly.append([px+rr*math.cos(a)*1.25,py+rr*math.sin(a)*.85])
    poly=np.array(poly,np.int32)
    cv2.fillPoly(R,[poly],255)
    inner=((poly-np.array([px,py]))*rnd.uniform(.45,.62)+np.array([px,py])).astype(np.int32)
    if rnd.random()<.85: cv2.fillPoly(G,[inner],255)
Rb=cv2.GaussianBlur(R,(0,0),1.3).astype(np.float32)/255*T; Gb=cv2.GaussianBlur(G,(0,0),1.6).astype(np.float32)/255*T
tumst=T*(1-Rb)  # desmoplastic stroma between glands: deeper pink
img=img*(1-tumst[...,None]*.7)+eosD[None,None,:]*tumst[...,None]*.7
img=img*(1-Rb[...,None])+(hem*(.85+.3*(fib[...,None]-.5)))*Rb[...,None]
lum=np.array([246,226,240],np.float32)
img=img*(1-Gb[...,None])+lum*Gb[...,None]
# necrotic debris in some lumens
deb=(noise(6,2,9)>.62).astype(np.float32)*Gb*(noise(200,2,10)>.55)
img=img*(1-deb[...,None]*.6)+np.array([200,120,170],np.float32)*deb[...,None]*.6
# nuclei speckle everywhere (denser in tumour and mucosa)
sp=np.random.rand(H,W).astype(np.float32)
dens=.012+.05*mu+.06*T*Rb+.02*lay_s+.008*lay_p
nuc=(sp<dens).astype(np.uint8)*255; nuc=cv2.dilate(nuc,cv2.getStructuringElement(cv2.MORPH_ELLIPSE,(3,3)))
nb=cv2.GaussianBlur(nuc,(0,0),.8).astype(np.float32)/255*(1-Gb)*(1-cl)
img=img*(1-nb[...,None]*.75)+hemD*nb[...,None]*.75
# alpha: glass shows through lumens, crypt lumens and vessel holes; edge of section
al=(m.astype(np.float32)/255)*(1-.88*Gb)*(1-.8*cl)*(1-.9*hb)
img=img*(1-hb[...,None])+np.array([248,236,244],np.float32)*hb[...,None]
# staining unevenness and slight fraying at the margin
img*= (1+.06*(noise(260,2,12)[...,None]-.5))
edge=np.clip(m.astype(np.float32)/255,0,1); fr=(noise(5,2,13)>.5).astype(np.float32)
al=al*np.where(edge<.98,fr*.6+.4,1)
out=np.dstack([np.clip(img[...,::-1],0,255),np.clip(al*255,0,255)]).astype(np.uint8)
cv2.imwrite(sys.argv[1] if len(sys.argv)>1 else 'tissue.png',out); print('glands',len(pts))
