#!/usr/bin/env python3
"""Khott Biotech hero (PROD_BRIEF 3b, variant B lighting): a crafted render of the PDPatch as Khott shows it (khottbiotech.com
news, Shenzhen 2025 pitch slide "PDPatch(TM)": a soft, translucent, rounded rectangular pad with bands of blue light set
inside it; home page: "Photodynamic Therapy", "PhotOxy Gel(TM), integrated into the PDPatch", "smart textile", "Hard-Soft
Interface"). Drawn: one patch, a frosted soft pad with a thin gel layer on its face and four light bands inside, shown as
the product's own light (flat emission inside the pad, no halo or bloom around it). No lettering.
Neutral studio light (key upper left, low fill, dim rim); alpha out.
Usage: python3 render_b.py W H out.png [SS] [procs]"""
import sys, numpy as np
from multiprocessing import Pool
from PIL import Image
W=int(sys.argv[1]);H=int(sys.argv[2]);OUT=sys.argv[3];SS=int(sys.argv[4]) if len(sys.argv)>4 else 1;NP=int(sys.argv[5]) if len(sys.argv)>5 else 4
FW,FH=W,H;W,H=W*SS,H*SS
def nrm(v):return v/np.linalg.norm(v,axis=-1,keepdims=True)
def sm(a,b,x):x=np.clip((x-a)/(b-a),0,1);return x*x*(3-2*x)
def rbox(p,c,b,r):
    q=np.abs(p-c)-(np.array(b)-r);return np.linalg.norm(np.maximum(q,0),axis=-1)+np.minimum(q.max(-1),0)-r
PX,PY,PZ=.92,.045,.62          # pad half extents: x long side, y thickness, z short side (local)
ax=np.radians(58);ay=np.radians(-24)
Rx=np.array([[1,0,0],[0,np.cos(ax),-np.sin(ax)],[0,np.sin(ax),np.cos(ax)]])
Ry=np.array([[np.cos(ay),0,np.sin(ay)],[0,1,0],[-np.sin(ay),0,np.cos(ay)]])
M=Ry@Rx                         # local -> world
def local(p):return p@M         # world -> local (row vectors)
def scene(p,want=False):
    q=local(p)
    pad=rbox(q,np.array([0,0,0]),(PX,PY,PZ),.08)
    gel=rbox(q,np.array([0,PY,0]),(PX-.07,.012,PZ-.07),.05)      # the gel layer on the face, a step up
    d=np.minimum(pad,gel)
    if not want:return d
    return d,(gel<pad).astype(int),q
def normal(p):
    e=.0006;E=np.eye(3)*e
    return nrm(np.stack([scene(p+E[i])-scene(p-E[i]) for i in range(3)],1))
KEY=nrm(np.array([-.62,.62,.48]));FILL=nrm(np.array([.7,-.15,.7]))
def env(d):
    x,y,z=d[:,0],d[:,1],d[:,2]
    c=np.full(len(d),.012)
    c+=sm(.35,.95,y)*sm(-.6,.4,z)*.55
    c+=np.exp(-((x+.70)/.22)**2)*sm(-.4,.3,y)*sm(-.3,.4,z)*2.0
    c+=np.exp(-((x-.85)/.08)**2)*sm(-.5,.2,y)*sm(.3,-.4,z)*.6
    c+=np.exp(-((y-.05)/.25)**2)*sm(.4,.95,z)*.18
    c+=sm(-.2,-.9,y)*.02
    return np.stack([c,c*.995,c*.985],1)
CAM=np.array([0,.2,3.6]);TGT=np.array([0,0,0]);FOV=.36
fw=nrm(TGT-CAM);rt=nrm(np.cross(fw,[0,1,0]));up=np.cross(rt,fw)
BAND=np.array([.36,.78,1.0])    # the patch's own blue light (their PDPatch slide)
def shade(u,v):
    n=len(u);rd=nrm(fw[None]+u[:,None]*rt[None]*FOV+v[:,None]*up[None]*FOV)
    t=np.full(n,2.0);hit=np.zeros(n,bool);alive=np.ones(n,bool)
    for it in range(200):
        idx=np.nonzero(alive)[0]
        if not len(idx):break
        p=CAM+rd[idx]*t[idx,None];d=scene(p)
        h=d<1e-4;hit[idx[h]]=True;alive[idx[h]]=False
        t[idx]+=np.maximum(d*.9,1e-4);alive[idx[t[idx]>6]]=False
    L=np.zeros((n,3));a=np.zeros(n);hi=np.nonzero(hit)[0]
    if len(hi):
        p=CAM+rd[hi]*t[hi,None];_,m,q=scene(p,True);nn=normal(p);V=-rd[hi]
        ndv=np.clip((nn*V).sum(1),0,1);fr=(1-ndv)**5
        dk=np.clip(nn@KEY,0,1);df=np.clip(nn@FILL,0,1);sky=np.clip(nn[:,1]*.5+.5,0,1)
        R_=2*(nn*V).sum(1)[:,None]*nn-V;ev=env(R_)
        hk=nrm(KEY[None]+V);sp=np.clip((nn*hk).sum(1),0,1)
        # frosted, slightly translucent white pad: soft diffuse, broad sheen, a little light wrapping (translucency)
        alb=np.array([.56,.60,.65])
        wrap=np.clip((nn@KEY+.45)/1.45,0,1)
        c=alb[None]*(.05+.42*wrap+.10*df+.06*sky)[:,None]+ev*(.04+.40*fr)[:,None]+(sp**30*.22+sp**8*.05)[:,None]
        # gel face: a touch glossier
        g=m==1
        c[g]+= (sp[g]**90*.6)[:,None]
        # the light bands inside, seen through the face: four bands along the long side, soft-edged, inside the pad only
        top=q[:,1]>PY-.02
        zz=q[:,2];xx=q[:,0]
        band=np.zeros(len(hi))
        for zc in (-.33,-.11,.11,.33):band=np.maximum(band,1-sm(.030,.055,np.abs(zz-zc)))
        band*=1-sm(PX-.26,PX-.16,np.abs(xx))
        band*=top
        c=c*(1-.70*band[:,None])+BAND[None]*(.62*band)[:,None]
        # under the bands the frosted body picks up a faint tint (light in the material, not around it)
        tint=np.exp(-((np.abs(zz)-.22)/.32)**2)*(1-sm(PX-.2,PX,np.abs(xx)))*top*.10
        c+=BAND[None]*tint[:,None]
        L[hi]=c;a[hi]=1
    return L,a
def run(rows):
    y0,y1=rows;PXg,PYg=np.meshgrid(np.arange(W),np.arange(y0,y1))
    u=((PXg+.5)/W*2-1)*W/H;v=1-(PYg+.5)/H*2
    L,a=shade(u.ravel(),v.ravel())
    x=L/(1+.35*L)*1.3;x=np.clip(x,0,1)**(1/2.2)
    return np.dstack([x.reshape(y1-y0,W,3),a.reshape(y1-y0,W,1)])
if __name__=='__main__':
    ch=[(i,min(i+16,H)) for i in range(0,H,16)]
    with Pool(NP) as P:img=np.vstack(P.map(run,ch))
    im=Image.fromarray((img*255).clip(0,255).astype(np.uint8),'RGBA')
    if SS>1:im=im.resize((FW,FH),Image.LANCZOS)
    print('bbox',im.getbbox());im.save(OUT)
