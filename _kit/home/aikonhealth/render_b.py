#!/usr/bin/env python3
"""AIKON Health hero (PROD_BRIEF 3b, variant B lighting): a crafted render of AIKON's chest sensor as shown in the TNO /
AIKON product photo on aikonhealth.com ("TNO medical wearable": a small white, rounded sensor pod clipped onto a white
adhesive skin patch with a gently scalloped edge; Eindhoven Dagblad: "a smart skin patch"). Drawn: the patch and its pod.
No lettering. Neutral studio light (key upper left, low fill, dim rim), no glow; alpha out.
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
ax=np.radians(44);ay=np.radians(-30)
Rx=np.array([[1,0,0],[0,np.cos(ax),-np.sin(ax)],[0,np.sin(ax),np.cos(ax)]])
Ry=np.array([[np.cos(ay),0,np.sin(ay)],[0,1,0],[-np.sin(ay),0,np.cos(ay)]])
M=Ry@Rx                         # local -> world (local y = out of the skin)
def local(p):return p@M
def scene(p,want=False):
    q=local(p)
    x,z=q[:,0],q[:,2]
    # patch: a thin plate, a rounded rectangle in plan whose outline is gently scalloped
    th=np.arctan2(z,x)
    sc=.014*np.cos(th*18)
    qx=np.abs(x)-(.95-.30);qz=np.abs(z)-(.62-.30)
    d2=np.hypot(np.maximum(qx,0),np.maximum(qz,0))+np.minimum(np.maximum(qx,qz),0)-.30
    patch=np.maximum(d2-sc,np.abs(q[:,1])-.006)-.002
    # the pod: a portrait rounded box lying on the patch, long side along z
    pod=rbox(q,np.array([0,.095,0]),(.20,.09,.44),.085)
    d=np.minimum(patch,pod)
    if not want:return d
    return d,(pod<patch).astype(int),q
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
CAM=np.array([0,.2,3.6]);TGT=np.array([0,.02,0]);FOV=.34
fw=nrm(TGT-CAM);rt=nrm(np.cross(fw,[0,1,0]));up=np.cross(rt,fw)
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
        wrap=np.clip((nn@KEY+.35)/1.35,0,1)
        # non-woven white patch: matte, soft
        alb=np.array([.74,.75,.76])
        c=alb[None]*(.05+.55*wrap+.10*df+.06*sky)[:,None]+ev*(.02+.18*fr)[:,None]
        # the pod: white satin plastic, a clear highlight
        alb2=np.array([.74,.75,.76])
        c2=alb2[None]*(.05+.70*dk+.12*df+.08*sky)[:,None]+ev*(.04+.40*fr)[:,None]+(sp**50*.35+sp**10*.05)[:,None]
        c[m==1]=c2[m==1]
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
