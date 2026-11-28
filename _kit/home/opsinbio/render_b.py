#!/usr/bin/env python3
"""Opsin Biotherapeutics hero (render B): their non-viral delivery vehicle as their NIH SBIR Phase II abstract and site
describe it: functionalized gold nanorods (fGNRs) that carry the Multi-Characteristic Opsin (MCO) gene into spinal
neurons. A loose group of gold nanorods (capsules, aspect ~3.5:1) with a thin functional coating, lit as a studio
product shot per TOPFIX variant B (neutral key from the page's upper left, low fill, dim rim), soft cast shadow baked
in. Gold is the rods' real material colour; no glow, no coloured light. Usage: render_b.py W H out.png [SS] [PAD]"""
import sys, numpy as np
from PIL import Image, ImageFilter
W=int(sys.argv[1]);H=int(sys.argv[2]);OUT=sys.argv[3];SS=int(sys.argv[4]) if len(sys.argv)>4 else 1;PAD=int(sys.argv[5]) if len(sys.argv)>5 else 100
FW,FH=W,H;W,H=W*SS,H*SS
def nrm(v): return v/np.linalg.norm(v,axis=-1,keepdims=True)
def n3(v): v=np.array(v,float);return v/np.linalg.norm(v)
def sm(a,b,x): x=np.clip((x-a)/(b-a),0,1);return x*x*(3-2*x)
rng=np.random.default_rng(11)
RODS=[]
base=n3((0.86,0.42,-0.28))
for k in range(40):
    if len(RODS)>=11: break
    c=np.array((rng.uniform(-1.35,1.25),rng.uniform(-0.62,0.62),rng.uniform(-0.5,0.5)))
    if any(np.linalg.norm((c-r[0])[:2])<0.42 for r in RODS): continue
    d=n3(base+rng.normal(0,0.22,3))
    L=rng.uniform(0.30,0.40);R=L/4.0
    RODS.append((c,d,L,R))
print('rods',len(RODS))
def capsule(p,c,d,L,R):
    q=p-c;h=np.clip(q@d,-L/2,L/2);return np.linalg.norm(q-h[...,None]*d,axis=-1)-R
def parts(p):
    ds=[capsule(p,*r) for r in RODS];return np.stack(ds,-1)
def sdf(p): return parts(p).min(-1)
ex=np.array([r[0][:2]+s_*r[1][:2]*(r[2]/2+r[3]) for r in RODS for s_ in (-1,1)])
cx,cy=(ex[:,0].min()+ex[:,0].max())/2,(ex[:,1].min()+ex[:,1].max())/2
span=max((ex[:,0].max()-ex[:,0].min())*H/W,(ex[:,1].max()-ex[:,1].min()))*1.12;half_h=span/2;half_w=half_h*W/H
ys,xs=np.mgrid[0:H,0:W]
px=cx+((xs+.5)/W*2-1)*half_w;py=cy-((ys+.5)/H*2-1)*half_h
O=np.stack([px,py,np.full(px.shape,4.0)],-1).reshape(-1,3);D=np.array((0,0,-1.0))
t=np.zeros(O.shape[0]);hit=np.zeros(O.shape[0],bool);act=np.ones(O.shape[0],bool)
for i in range(160):
    idx=np.nonzero(act)[0]
    if idx.size==0:break
    p=O[idx]+D*t[idx,None];d=sdf(p);t[idx]+=d*0.9
    h=d<0.0005;hit[idx[h]]=True;act[idx[h]]=False;act[idx[t[idx]>9]]=False
print('hits',hit.sum())
KEY=n3((-0.62,0.55,0.56))
def env(d):
    x,y,z=d[...,0],d[...,1],d[...,2]
    base=np.full(d.shape,0.01)
    top=(sm(0.45,0.9,y)*sm(-0.9,0.2,z))[...,None]*np.array((1.0,1.0,0.99))
    key=(np.exp(-((x+0.74)/0.12)**2)*sm(-0.5,0.25,y))[...,None]*np.array((2.2,2.17,2.1))
    rim=(np.exp(-((x-0.80)/0.08)**2)*sm(-0.6,0.2,y)*sm(0.3,-0.4,z))[...,None]*np.full(3,0.55)
    fill=(np.exp(-((y-0.05)/0.25)**2)*sm(0.4,0.95,z))[...,None]*np.full(3,0.2)
    floor=sm(-0.2,-0.9,y)[...,None]*np.full(3,0.03)
    return base+top+key+rim+fill+floor
idx=np.nonzero(hit)[0];p=O[idx]+D*t[idx,None];e=0.0006
n=nrm(np.stack([sdf(p+np.array((e,0,0)))-sdf(p-np.array((e,0,0))),sdf(p+np.array((0,e,0)))-sdf(p-np.array((0,e,0))),sdf(p+np.array((0,0,e)))-sdf(p-np.array((0,0,e)))],-1))
refl=D-2*(n@D)[:,None]*n
acc=np.zeros_like(refl);rr=np.random.default_rng(3)
for k in range(12): acc+=env(nrm(refl+0.05*rr.normal(0,1,refl.shape)))
spec=acc/12;cosv=np.clip(-(n@D),0,1)
gold=np.array((1.0,0.72,0.30))
F=gold[None]+(1-gold[None])*((1-cosv)**5)[:,None]
c=spec*F*0.95+0.01
# the functional coating: a faint, cool, matte film that softens the very edges
film=0.08*(1-cosv)[:,None]**2*np.array((0.75,0.78,0.8))
c=c*(1-0.12*(1-cosv)[:,None]**2)+film
ao=np.ones(idx.size)
for k,hh in enumerate((0.01,0.03,0.06)): ao-=np.clip(hh-sdf(p+n*hh),0,1)*(1.4/(k+1))
c*=np.clip(ao,0.4,1)[:,None]
col=np.zeros((O.shape[0],3));col[idx]=c
img=col.reshape(H,W,3);a=hit.astype(float).reshape(H,W)
if SS>1: img=img.reshape(FH,SS,FW,SS,3).mean((1,3));a=a.reshape(FH,SS,FW,SS).mean((1,3))
img=np.where(a[...,None]>0,img/np.maximum(a[...,None],1e-6),0);img=img/(1+0.35*img)*1.3;img=np.clip(img,0,1)**(1/2.2)
FWp,FHp=FW+2*PAD,FH+2*PAD
sil=Image.fromarray((a*255).astype(np.uint8),'L');sh=Image.new('L',(FWp,FHp),0)
sh.paste(sil.resize((FW,int(FH*0.55))),(PAD+int(FW*0.035),PAD+int(FH*0.42)))
sh=sh.filter(ImageFilter.GaussianBlur(FW*0.02));sha=np.asarray(sh,float)/255*0.30
obj=np.zeros((FHp,FWp,3));oa=np.zeros((FHp,FWp));obj[PAD:PAD+FH,PAD:PAD+FW]=img;oa[PAD:PAD+FH,PAD:PAD+FW]=a
outa=oa+sha*(1-oa);outc=np.where(outa[...,None]>0,obj*oa[...,None]/np.maximum(outa[...,None],1e-6),0)
im=Image.fromarray(np.dstack([outc*255,outa*255]).astype(np.uint8),'RGBA');im=im.crop(im.getbbox());im.save(OUT);print(im.size)
