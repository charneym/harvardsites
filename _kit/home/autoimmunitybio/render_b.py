#!/usr/bin/env python3
"""Autoimmunity BioSolutions hero (render B): their drug, ABS-2103, is a monoclonal antibody (abstherapeutics.com >
Science). An IgG antibody as a molecular surface: two Fab arms and the Fc stem joined at a flexible hinge, twelve
immunoglobulin domains (VH, CH1, VL, CL on each arm; CH2 and CH3 pairs in the Fc), each a lumpy beta-sandwich
domain with domain- and residue-scale grain; the heavy chains in warm ivory, the light chains in a faint cool tint.
Matte protein, lit per TOPFIX variant B (neutral key from the page's upper left, low fill, dim rim), ambient
occlusion and soft shadow; no glow, no coloured light. Usage: render_b.py W H out.png [SS] [PAD]"""
import sys, numpy as np
from PIL import Image, ImageFilter
W=int(sys.argv[1]);H=int(sys.argv[2]);OUT=sys.argv[3];SS=int(sys.argv[4]) if len(sys.argv)>4 else 1;PAD=int(sys.argv[5]) if len(sys.argv)>5 else 100
FW,FH=W,H;W,H=W*SS,H*SS
def nrm(v): return v/np.linalg.norm(v,axis=-1,keepdims=True)
def n3(v): v=np.array(v,float);return v/np.linalg.norm(v)
def rotm(ax,ang):
    ax=n3(ax);c,s=np.cos(ang),np.sin(ang);x,y,z=ax
    return np.array([[c+x*x*(1-c),x*y*(1-c)-z*s,x*z*(1-c)+y*s],[y*x*(1-c)+z*s,c+y*y*(1-c),y*z*(1-c)-x*s],[z*x*(1-c)-y*s,z*y*(1-c)+x*s,c+z*z*(1-c)]])
rng=np.random.default_rng(9)
WV=nrm(rng.normal(0,1,(24,3)))*rng.uniform(10,18,(24,1));WP=rng.uniform(0,6.28,24)
WV2=nrm(rng.normal(0,1,(36,3)))*rng.uniform(42,66,(36,1));WP2=rng.uniform(0,6.28,36)
# domains: (centre, long axis, radii (long, short, short), chain 0=heavy 1=light)
DOM=[]
def arm(base,ang,side):
    d=np.array((np.sin(ang),np.cos(ang),0.0));perp=np.array((np.cos(ang),-np.sin(ang),0.0))*side
    for k,(off,ch) in enumerate(((0.0,0),(0.0,1))):
        pass
    for j in range(2):                                  # constant (j=0) then variable (j=1) along the arm
        c=base+d*(0.26+0.40*j)
        DOM.append((c-perp*0.125+np.array((0,0,0.03)),d,(0.245,0.150,0.135),0))   # heavy: CH1, VH (inner side)
        DOM.append((c+perp*0.125-np.array((0,0,0.03)),d,(0.235,0.145,0.13),1))  # light: CL, VL (outer side)
arm(np.array((-0.17,0.04,0)),-0.74,-1)
arm(np.array((0.17,0.04,0)),0.74,1)
for j,y in enumerate((-0.32,-0.70)):                    # Fc: CH2 pair, CH3 pair
    for s in (-1,1):
        DOM.append((np.array((0.135*s,y,0.02*s)),np.array((0,1.0,0)),(0.235,0.150,0.135),0))
CEN=np.array([d[0] for d in DOM]);AX=np.array([n3(d[1]) for d in DOM]);RAD=np.array([d[2] for d in DOM]);CH=np.array([d[3] for d in DOM])
def smin(a,b,k): h=np.clip(0.5+0.5*(b-a)/k,0,1);return b*(1-h)+a*h-k*h*(1-h)
R=rotm((0,1,0),0.28)@rotm((1,0,0),0.30)@rotm((0,0,1),0.30);RI=R.T
def mol(q):
    d=np.full(q.shape[0],9.0);idx=np.zeros(q.shape[0],int)
    for i in range(len(DOM)):
        a=AX[i];u=np.cross(a,(0,0,1.0));u=u/np.linalg.norm(u) if np.linalg.norm(u)>1e-6 else np.array((1.0,0,0));w=np.cross(a,u)
        r=q-CEN[i];l=r@a;m=r@u;n=r@w
        e=np.sqrt((l/RAD[i][0])**2+(m/RAD[i][1])**2+(n/RAD[i][2])**2)
        di=(e-1)*min(RAD[i])
        idx=np.where(di<d,i,idx);d=smin(d,di,0.07)
    # the hinge: two short strands from the top of the Fc to the base of each arm
    for s in (-1,1):
        a=np.array((0.0,-0.08,0.0));b=np.array((0.22*s,0.14,0.0));ba=b-a
        h=np.clip(((q-a)@ba)/(ba@ba),0,1);dh=np.linalg.norm(q-a-h[:,None]*ba,axis=-1)-0.055
        d=smin(d,dh,0.06)
    return d,idx
def sdf1(p):
    q=p@R
    d,_=mol(q)
    d=d+0.016*np.sin(q@WV.T+WP).sum(-1)/4.9+0.0060*np.abs(np.sin(q@WV2.T+WP2)).sum(-1)/6.0
    return d*0.62
def sdf(p):
    if p.shape[0]<=6000: return sdf1(p)
    return np.concatenate([sdf1(p[i:i+6000]) for i in range(0,p.shape[0],6000)])
ex=(CEN[:,None,:]+np.array([[sx,sy,sz] for sx in (-.24,.24) for sy in (-.24,.24) for sz in (-.24,.24)])[None]).reshape(-1,3)@RI.T
cx,cy=(ex[:,0].min()+ex[:,0].max())/2,(ex[:,1].min()+ex[:,1].max())/2
span=max((ex[:,0].max()-ex[:,0].min())*H/W,(ex[:,1].max()-ex[:,1].min()))*1.14;half_h=span/2;half_w=half_h*W/H
ys,xs=np.mgrid[0:H,0:W]
px=cx+((xs+.5)/W*2-1)*half_w;py=cy-((ys+.5)/H*2-1)*half_h
O=np.stack([px,py,np.full(px.shape,3.0)],-1).reshape(-1,3);D=np.array((0,0,-1.0))
t=np.full(O.shape[0],1.6);hit=np.zeros(O.shape[0],bool);act=np.ones(O.shape[0],bool)
for i in range(170):
    idx=np.nonzero(act)[0]
    if idx.size==0:break
    p=O[idx]+D*t[idx,None];d=sdf(p);t[idx]+=d
    h=d<0.0004;hit[idx[h]]=True;act[idx[h]]=False;act[idx[t[idx]>4.6]]=False
print('hits',hit.sum());_hm=hit.reshape(H,W);print('border',_hm[0].any(),_hm[-1].any(),_hm[:,0].any(),_hm[:,-1].any())
KEY=n3((-0.80,0.52,0.30));RIM=n3((0.85,0.25,-0.45));FIL=n3((0.5,-0.1,0.86))
idx=np.nonzero(hit)[0];p=O[idx]+D*t[idx,None];e=0.0007
n=nrm(np.stack([sdf(p+np.array((e,0,0)))-sdf(p-np.array((e,0,0))),sdf(p+np.array((0,e,0)))-sdf(p-np.array((0,e,0))),sdf(p+np.array((0,0,e)))-sdf(p-np.array((0,0,e)))],-1))
sh=np.ones(idx.size);tt=np.full(idx.size,0.02)
for k in range(40):
    q=p+n*0.002+KEY*tt[:,None];d=sdf(q);sh=np.minimum(sh,np.clip(10*d/tt,0,1));tt+=np.clip(d,0.008,0.15)
sh=sh*sh*(3-2*sh)
ao=np.ones(idx.size)
for k,hh in enumerate((0.012,0.03,0.06,0.10)): ao-=np.clip(hh-sdf(p+n*hh)/0.62,0,1)*(1.1/(k+1))
ao=np.clip(ao,0.15,1)
_,di=mol(p@R);ch=CH[di]
alb=np.where(ch[:,None]==1,np.array((0.66,0.76,0.80)),np.array((0.80,0.77,0.71)))
ndk=n@KEY;wrap=np.clip((ndk+0.08)/1.08,0,1)
dif=wrap[:,None]*sh[:,None]*np.array((1.0,0.98,0.95))*1.05
fil=np.clip(n@FIL,0,1)[:,None]*np.array((0.9,0.93,1.0))*0.07
amb=(0.03+0.03*np.clip(n[:,1],0,1))[:,None]*ao[:,None]
cosv=np.clip(-(n@D),0,1)
rim=(np.clip(n@RIM,0,1)**2*(1-cosv)**3.5)[:,None]*0.30
hv=nrm(KEY-D);spec=(np.clip(n@hv,0,1)**28*0.08*sh)[:,None]
c=alb*(dif*(0.55+0.45*ao[:,None])+fil*ao[:,None]+amb)+rim+spec
col=np.zeros((O.shape[0],3));col[idx]=c
img=col.reshape(H,W,3);a=hit.astype(float).reshape(H,W)
if SS>1: img=img.reshape(FH,SS,FW,SS,3).mean((1,3));a=a.reshape(FH,SS,FW,SS).mean((1,3))
img=np.where(a[...,None]>0,img/np.maximum(a[...,None],1e-6),0);img=img/(1+0.3*img)*1.25;img=np.clip(img,0,1)**(1/2.2)
FWp,FHp=FW+2*PAD,FH+2*PAD
sil=Image.fromarray((a*255).astype(np.uint8),'L');shd=Image.new('L',(FWp,FHp),0)
shd.paste(sil.resize((FW,int(FH*0.40))),(PAD+int(FW*0.04),PAD+int(FH*0.66)))
shd=shd.filter(ImageFilter.GaussianBlur(FW*0.03));sha=np.asarray(shd,float)/255*0.30
yy=np.arange(FHp)[:,None]/FHp;xx=np.arange(FWp)[None,:]/FWp
def sm(e0,e1,v): t_=np.clip((v-e0)/(e1-e0),0,1);return t_*t_*(3-2*t_)
sha=sha*(1-sm(0.82,0.99,yy))*(1-sm(0.88,0.995,xx))*sm(0.0,0.08,xx)
obj=np.zeros((FHp,FWp,3));oa=np.zeros((FHp,FWp));obj[PAD:PAD+FH,PAD:PAD+FW]=img;oa[PAD:PAD+FH,PAD:PAD+FW]=a
outa=oa+sha*(1-oa);outc=np.where(outa[...,None]>0,obj*oa[...,None]/np.maximum(outa[...,None],1e-6),0)
im=Image.fromarray(np.dstack([outc*255,outa*255]).astype(np.uint8),'RGBA');im=im.crop(im.getbbox());im.save(OUT);print(im.size)
