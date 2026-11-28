#!/usr/bin/env python3
"""Rejuvenate Bio hero (render B): their delivery vehicle as their site describes it, a liver-tropic AAV capsid
(rejuvenatebio.com > Our Science: "liver tropic capsids encoding for secreted proteins"). An adeno-associated virus
capsid with its real icosahedral architecture: 60 subunits, the raised three-fold protrusions (three peaks around
each of the 20 three-fold axes), the cylindrical channel with its central pore at each of the 12 five-fold axes and
the dimple at each of the 30 two-fold axes, over a fine lumpy protein surface. Matte protein material, lit as a
studio shot per TOPFIX variant B (neutral key from the page's upper left, low fill, dim rim), ambient occlusion
in the crevices, soft cast shadow baked in. No glow, no coloured light. Usage: render_b.py W H out.png [SS] [PAD]"""
import sys, numpy as np
from PIL import Image, ImageFilter
W=int(sys.argv[1]);H=int(sys.argv[2]);OUT=sys.argv[3];SS=int(sys.argv[4]) if len(sys.argv)>4 else 1;PAD=int(sys.argv[5]) if len(sys.argv)>5 else 100
FW,FH=W,H;W,H=W*SS,H*SS
def nrm(v): return v/np.linalg.norm(v,axis=-1,keepdims=True)
def n3(v): v=np.array(v,float);return v/np.linalg.norm(v)
def sm(a,b,x): x=np.clip((x-a)/(b-a),0,1);return x*x*(3-2*x)
# icosahedral axes
g=(1+5**.5)/2
V=[]
for a in (-1,1):
    for b in (-g,g):
        V+= [(0,a,b),(a,b,0),(b,0,a)]
V=np.array([n3(v) for v in V])                       # 12 five-fold axes
F=[];E=[]
for i in range(12):
    for j in range(i+1,12):
        if V[i]@V[j]>0.4: E.append(n3(V[i]+V[j]))
        for k in range(j+1,12):
            if V[i]@V[j]>0.4 and V[j]@V[k]>0.4 and V[i]@V[k]>0.4: F.append((i,j,k))
T=np.array([n3(V[i]+V[j]+V[k]) for i,j,k in F])     # 20 three-fold axes
E=np.array(E)                                        # 30 two-fold axes
# three peaks around each three-fold axis, each leaning toward one of the face's three five-fold vertices then rotated
PK=[]
for (i,j,k),t in zip(F,T):
    for v in (V[i],V[j],V[k]):
        w=n3(t+0.20*(v-t));PK.append(n3(w+0.10*np.cross(t,w)))
PK=np.array(PK)                                      # 60 peaks: one per subunit
# a fine lumpy surface: 'residues' as many small bumps on a fixed random set of directions
rng=np.random.default_rng(5)
WV=nrm(rng.normal(0,1,(28,3)))*rng.uniform(26,46,(28,1));WP=rng.uniform(0,6.28,28)
WV2=nrm(rng.normal(0,1,(40,3)))*rng.uniform(95,150,(40,1));WP2=rng.uniform(0,6.28,40)
# orientation: tilt so a three-fold protrusion faces the viewer slightly off-centre
def rotm(ax,ang):
    ax=n3(ax);c,s=np.cos(ang),np.sin(ang);x,y,z=ax
    return np.array([[c+x*x*(1-c),x*y*(1-c)-z*s,x*z*(1-c)+y*s],[y*x*(1-c)+z*s,c+y*y*(1-c),y*z*(1-c)-x*s],[z*x*(1-c)-y*s,z*y*(1-c)+x*s,c+z*z*(1-c)]])
Rm=rotm((0.4,1,0.2),0.55)@rotm((1,0,0),-0.35)
V,T,E,PK=[(Rm@a.T).T for a in (V,T,E,PK)]
R0=1.0
def bump(u,axes,s):
    c=u@axes.T;return np.exp(-(1-c)/s)
def radius(u):
    r=R0+0.080*bump(u,PK,0.0024).sum(-1)              # three-fold protrusions (peaks)
    r+=0.030*bump(u,T,0.010).sum(-1)                  # the raised mound under each three-fold cluster
    c5=u@V.T;ring=np.exp(-((np.arccos(np.clip(c5,-1,1))-0.085)/0.028)**2).sum(-1)
    r+=0.070*ring                                     # five-fold channel wall
    r-=0.075*bump(u,V,0.0009).sum(-1)                 # the pore
    r-=0.045*bump(u,E,0.0060).sum(-1)                 # two-fold dimples
    r+=0.0050*np.sin(u@WV.T+WP).sum(-1)/5.3            # domain-scale lumps (procedural)
    r+=0.0022*np.abs(np.sin(u@WV2.T+WP2)).sum(-1)/6.3  # residue-scale grain
    return r
def sdf1(p):
    l=np.linalg.norm(p,axis=-1);u=p/np.maximum(l,1e-6)[...,None];return (l-radius(u))*0.6
def sdf(p):
    if p.shape[0]<=6000: return sdf1(p)
    return np.concatenate([sdf1(p[i:i+6000]) for i in range(0,p.shape[0],6000)])
half_h=1.30;half_w=half_h*W/H;cx,cy=0.0,0.0
ys,xs=np.mgrid[0:H,0:W]
px=cx+((xs+.5)/W*2-1)*half_w;py=cy-((ys+.5)/H*2-1)*half_h
O=np.stack([px,py,np.full(px.shape,3.0)],-1).reshape(-1,3);D=np.array((0,0,-1.0))
pre=(px**2+py**2).reshape(-1)<1.35**2
t=np.full(O.shape[0],1.6);hit=np.zeros(O.shape[0],bool);act=pre.copy()
for i in range(140):
    idx=np.nonzero(act)[0]
    if idx.size==0:break
    p=O[idx]+D*t[idx,None];d=sdf(p);t[idx]+=d
    h=d<0.0004;hit[idx[h]]=True;act[idx[h]]=False;act[idx[t[idx]>5]]=False
print('hits',hit.sum())
KEY=n3((-0.80,0.52,0.30));RIM=n3((0.85,0.25,-0.45));FIL=n3((0.5,-0.1,0.86))
idx=np.nonzero(hit)[0];p=O[idx]+D*t[idx,None];e=0.0008
n=nrm(np.stack([sdf(p+np.array((e,0,0)))-sdf(p-np.array((e,0,0))),sdf(p+np.array((0,e,0)))-sdf(p-np.array((0,e,0))),sdf(p+np.array((0,0,e)))-sdf(p-np.array((0,0,e)))],-1))
# soft shadow toward the key
sh=np.ones(idx.size);tt=np.full(idx.size,0.02)
for k in range(40):
    q=p+n*0.002+KEY*tt[:,None];d=sdf(q);sh=np.minimum(sh,np.clip(10*d/tt,0,1));tt+=np.clip(d,0.01,0.2)
sh=sh*sh*(3-2*sh)
ao=np.ones(idx.size)
for k,hh in enumerate((0.015,0.04,0.08,0.14)): ao-=np.clip(hh-sdf(p+n*hh)/0.6,0,1)*(1.1/(k+1))
ao=np.clip(ao,0.15,1)
alb=np.array((0.78,0.76,0.72))
ndk=n@KEY;wrap=np.clip((ndk+0.08)/1.08,0,1)
dif=wrap[:,None]*sh[:,None]*np.array((1.0,0.98,0.95))*1.05
fil=np.clip(n@FIL,0,1)[:,None]*np.array((0.9,0.93,1.0))*0.06
amb=(0.028+0.03*np.clip(n[:,1],0,1))[:,None]*ao[:,None]
cosv=np.clip(-(n@D),0,1)
rim=(np.clip(n@RIM,0,1)**2*(1-cosv)**3.5)[:,None]*0.30
hv=nrm(KEY-D);spec=(np.clip(n@hv,0,1)**28*0.10*sh)[:,None]
u_=p/np.linalg.norm(p,axis=-1,keepdims=True);sub=np.argmax(u_@PK.T,-1)%3
TINT=np.array([[1.0,1.0,1.0],[0.94,0.95,0.97],[1.0,0.96,0.90]]);alb=alb*TINT[sub]
c=alb*(dif*(0.55+0.45*ao[:,None])+fil*ao[:,None]+amb)+rim+spec
col=np.zeros((O.shape[0],3));col[idx]=c
img=col.reshape(H,W,3);a=hit.astype(float).reshape(H,W)
if SS>1: img=img.reshape(FH,SS,FW,SS,3).mean((1,3));a=a.reshape(FH,SS,FW,SS).mean((1,3))
img=np.where(a[...,None]>0,img/np.maximum(a[...,None],1e-6),0);img=img/(1+0.3*img)*1.25;img=np.clip(img,0,1)**(1/2.2)
FWp,FHp=FW+2*PAD,FH+2*PAD
sil=Image.fromarray((a*255).astype(np.uint8),'L');shd=Image.new('L',(FWp,FHp),0)
shd.paste(sil.resize((FW,int(FH*0.40))),(PAD+int(FW*0.04),PAD+int(FH*0.72)))
shd=shd.filter(ImageFilter.GaussianBlur(FW*0.03));sha=np.asarray(shd,float)/255*0.35
obj=np.zeros((FHp,FWp,3));oa=np.zeros((FHp,FWp));obj[PAD:PAD+FH,PAD:PAD+FW]=img;oa[PAD:PAD+FH,PAD:PAD+FW]=a
outa=oa+sha*(1-oa);outc=np.where(outa[...,None]>0,obj*oa[...,None]/np.maximum(outa[...,None],1e-6),0)
im=Image.fromarray(np.dstack([outc*255,outa*255]).astype(np.uint8),'RGBA');im=im.crop(im.getbbox());im.save(OUT);print(im.size)
