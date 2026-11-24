#!/usr/bin/env python3
"""Hero render (MyExposome): ONE MyExposome silicone wristband, the company's real product (myexposome.com, Approach:
"a simple lightweight silicone wristband"), charcoal silicone with the MyExposome wordmark debossed on its outer face, as
on the bands in their own product photograph (ExposomeWristband4stack.jpg). Pure numpy: sphere-traced SDF of a rounded
rectangular ring, bump-mapped deboss, soft-box environment, satin GGX highlight, SDF ambient occlusion, real alpha.
Args (env): W H SS RX RZ. Output: hero.png (RGBA)"""
import numpy as np, os, pathlib, time
from PIL import Image, ImageDraw, ImageFont, ImageFilter
t0=time.time();H0=pathlib.Path(__file__).resolve().parent
OW=int(os.environ.get('W','1400'));OH=int(os.environ.get('H','1000'));SS=int(os.environ.get('SS','2'))
W,H=OW*SS,OH*SS
R=1.0;T=0.075;BW=0.40;RR=0.03    # ring radius, wall thickness, band width (axial), edge radius
def rot(t,ax):
    c,s=np.cos(t),np.sin(t)
    return {'x':np.array([[1,0,0],[0,c,-s],[0,s,c]]),'y':np.array([[c,0,s],[0,1,0],[-s,0,c]]),'z':np.array([[c,-s,0],[s,c,0],[0,0,1]])}[ax]
RX=float(os.environ.get('RX','1.06'));RZ=float(os.environ.get('RZ','-0.2'))
M=rot(RZ,'z')@rot(RX,'x')          # object -> world
Mi=M.T
cam=np.array([0,0,6.2]);fov=np.radians(23)
ys,xs=np.mgrid[0:H,0:W].astype(np.float32)
asp=W/H;px=((xs+.5)/W*2-1)*np.tan(fov/2)*asp;py=-((ys+.5)/H*2-1)*np.tan(fov/2)
D=np.stack([px,py,-np.ones_like(px)],-1);D/=np.linalg.norm(D,axis=-1,keepdims=True)
D=D.reshape(-1,3);N=D.shape[0]
O=(Mi@cam).astype(np.float32);Do=(D@Mi.T).astype(np.float32)   # march in object space
def sdf(p):
    r=np.sqrt(p[:,0]**2+p[:,2]**2);qx=np.abs(r-R)-(T/2-RR);qy=np.abs(p[:,1])-(BW/2-RR)
    # a slightly barrelled outer face, like a moulded band
    mx=np.maximum(qx,0);my=np.maximum(qy,0)
    return np.sqrt(mx*mx+my*my)+np.minimum(np.maximum(qx,qy),0)-RR
# bounding sphere entry
b=O@Do.T;c=O@O-(R+.3)**2;disc=b*b-c;hitb=disc>0
t=np.where(hitb,-b-np.sqrt(np.maximum(disc,0)),0).astype(np.float32);t=np.maximum(t,0)
act=np.where(hitb)[0];hit=np.zeros(N,bool);tt=np.full(N,1e9,np.float32)
for i in range(160):
    if act.size==0:break
    p=O+Do[act]*t[act,None];d=sdf(p)
    h=d<2e-4;hit[act[h]]=True;tt[act[h]]=t[act[h]]
    t[act]+=d*.9
    act=act[(~h)&(t[act]<9)]
print('march',round(time.time()-t0,1),'s hits',hit.sum())
idx=np.where(hit)[0];P=O+Do[idx]*tt[idx,None]
e=5e-4
def grad(P):
    g=np.stack([sdf(P+np.array([e,0,0],np.float32))-sdf(P-np.array([e,0,0],np.float32)),sdf(P+np.array([0,e,0],np.float32))-sdf(P-np.array([0,e,0],np.float32)),sdf(P+np.array([0,0,e],np.float32))-sdf(P-np.array([0,0,e],np.float32))],-1)
    return g/np.linalg.norm(g,axis=-1,keepdims=True)
Nn=grad(P)
# deboss: the wordmark on the outer face, centred on the side facing the camera
vc=Mi@np.array([0,0,1.]);phi0=np.arctan2(vc[2],vc[0])+float(os.environ.get('PH','0.0'))
r=np.sqrt(P[:,0]**2+P[:,2]**2);phi=np.arctan2(P[:,2],P[:,0]);dphi=(phi-phi0+np.pi)%(2*np.pi)-np.pi
ROUT=R+T/2
TXH=int(os.environ.get('TXH','260'))  # texture px per unit
font=ImageFont.truetype(str(H0/'exo2-600.ttf'),int(.205*TXH))
txt='MyExposome';bb=font.getbbox(txt);tw,th=bb[2]-bb[0],bb[3]-bb[1]
TW=int(2*np.pi*ROUT*TXH);THh=int(BW*TXH)
tex=Image.new('L',(TW,THh),0);dr=ImageDraw.Draw(tex)
# MyExposome bands carry the name twice, front and back
for cx in (TW//2,):
    dr.text((cx-tw/2-bb[0],THh/2-th/2-bb[1]-.012*TXH),txt,font=font,fill=255)
texb=np.asarray(tex.filter(ImageFilter.GaussianBlur(TXH*.0045)),np.float32)/255
texs=np.asarray(tex.filter(ImageFilter.GaussianBlur(TXH*.0016)),np.float32)/255
u=(-dphi*ROUT)*TXH+TW/2;v=(-P[:,1])*TXH+THh/2
onf=(r>R+T/2-.004)&(np.abs(P[:,1])<BW/2-RR*.6)
ui=np.clip(u.astype(int),1,TW-2);vi=np.clip(v.astype(int),1,THh-2)
du=(texb[vi,ui+1]-texb[vi,ui-1])*.5;dv=(texb[vi+1,ui]-texb[vi-1,ui])*.5
mk=texs[vi,ui]*onf
BUMP=float(os.environ.get('BUMP','5.0'))
tu=-np.stack([-np.sin(phi),np.zeros_like(phi),np.cos(phi)],-1);tv=np.array([0,-1.,0])
Nb=Nn+BUMP*onf[:,None]*(du[:,None]*tu+dv[:,None]*tv)   # deboss: letters sunk into the surface
rng=np.random.default_rng(7);GR=np.asarray(Image.fromarray((rng.random((THh*2,TW))*255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(1.2)),np.float32)/255-.5
gi=np.clip((v*2).astype(int),0,THh*2-1);Nb=Nb+.05*onf[:,None]*(GR[gi,ui][:,None]*tu+GR[np.clip(gi+7,0,THh*2-1),ui][:,None]*tv)
Nb/=np.linalg.norm(Nb,axis=-1,keepdims=True)
# AO from the SDF
ao=np.ones(len(P),np.float32)
for k in range(1,6):
    hk=.035*k;ao-= (hk-sdf(P+Nn*hk))*(.55/ k)*1.0
ao=np.clip(ao,0,1)**1.6
# to world
Nw=Nb@M.T;Pw=P@M.T;V=-(D[idx]);V/=np.linalg.norm(V,axis=-1,keepdims=True)
def nz(a):a=np.array(a,float);return a/np.linalg.norm(a)
L1=nz([-.5,1.0,.42]);L2=nz([.8,-.15,.45]);L3=nz([.45,.5,-.75]);L4=nz([-.6,-.2,-.6])
alb=np.array([.020,.022,.026])*(1-.45*mk[:,None])
ndl=lambda L:np.clip(Nw@L,0,1)
wr=lambda L,w:np.clip((Nw@L+w)/(1+w),0,1)
col=alb*(1.5*wr(L1,.05)[:,None]*np.array([1,1,1.02])+.45*wr(L2,.3)[:,None]*np.array([.55,.8,1.15])+.035)
col*=ao[:,None]
def ggx(L,rough):
    Hh=L[None,:]+V;Hh/=np.linalg.norm(Hh,axis=-1,keepdims=True)
    nh=np.clip((Nw*Hh).sum(-1),0,1);a2=rough**4;dd=nh*nh*(a2-1)+1;Dg=a2/(np.pi*dd*dd)
    nv=np.clip((Nw*V).sum(-1),1e-3,1);nl=np.clip(Nw@L,0,1);k=(rough+1)**2/8
    G=nl/(nl*(1-k)+k)*nv/(nv*(1-k)+k);vh=np.clip((V*Hh).sum(-1),0,1);F=.04+.96*(1-vh)**5
    return Dg*G*F/np.maximum(4*nv*nl,1e-3)*nl
rough=float(os.environ.get('RGH','.26'))+.2*mk
spec=ggx(L1,rough)[:,None]*np.array([1.0,1.0,1.03])*float(os.environ.get('KS','1.1'))+ggx(L2,.5)[:,None]*np.array([.30,.62,.95])*.9
# environment: a soft-box sky reflected along the satin face, brand-blue and green rims behind
Rf=2*(Nw*V).sum(-1,keepdims=True)*Nw-V
nv=np.clip((Nw*V).sum(-1),0,1);Fr=.04+.96*(1-nv)**5
sky=np.clip((Rf[:,1]-.1)/.85,0,1)**2.2*.75*(.6+.4*np.clip(-Rf[:,0]*.8+.5,0,1))
env=sky[:,None]*np.array([.9,.95,1.0])
rimB=np.clip(Rf@L3,0,1)**9*.75;rimG=np.clip(Rf@L4,0,1)**12*.18
env=env+(1-mk[:,None])*rimB[:,None]*np.array([.20,.56,.92])+(1-mk[:,None])*rimG[:,None]*np.array([.48,.76,.26])
col=col+spec*ao[:,None]*(1-.6*mk[:,None])+env*Fr[:,None]*(ao[:,None]**1.5)*2.2
img=np.zeros((N,3),np.float32);img[idx]=col
a=np.zeros(N,np.float32);a[idx]=1
img=img.reshape(H,W,3);a=a.reshape(H,W)
# tonemap + sRGB, then downsample with premultiplied alpha
img=img/(1+img*.6);img=np.clip(img,0,1)**(1/2.2)
pm=np.concatenate([img*a[...,None],a[...,None]],-1).reshape(OH,SS,OW,SS,4).mean((1,3))
rgb=pm[...,:3]/np.maximum(pm[...,3:],1e-4);out=np.concatenate([rgb,pm[...,3:]],-1)
Image.fromarray((np.clip(out,0,1)*255+.5).astype(np.uint8),'RGBA').save(H0/os.environ.get('OUT','hero.png'))
print('done',round(time.time()-t0,1),'s')
