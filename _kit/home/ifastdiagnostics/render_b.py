#!/usr/bin/env python3
"""iFAST Diagnostics hero (PROD_BRIEF 3b, variant B lighting): a crafted render of the iFAST ONE AST instrument as shown in
iFAST's own photos (ifastdiagnostics.com uploads 2024/03 'Unknown-4' and 2026/04 'Short-Video-Image'): a white benchtop
cabinet whose front carries a black glossy face with the touchscreen above and the sample-drawer opening below, framed in
iFAST blue, and a blue edge trim. No lettering. Three-quarter view from the right, its front turned toward the headline (page left); the layout is mirrored so
the black face sits on the front's far side, as the photo shows it from the other side, and the dot mark reads correctly.
Neutral studio light: one key upper left, low fill, dim rim; no glow. Perspective sphere tracing of SDFs in numpy, alpha out.
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
BX,BY,BZ=.56,.43,.50          # cabinet half extents (x right, y up, z toward the front)
FX0,FX1,FY0,FY1=-.12,.45,-.35,.35   # the black face on the front
def scene(p,want=False):
    p=p*np.array([-1.,1,1])   # mirrored layout: the face sits on the front's far (page-left) side
    body=rbox(p,np.array([0,0,0]),(BX,BY,BZ),.055)
    # recess for the black face
    cut=rbox(p,np.array([(FX0+FX1)/2,(FY0+FY1)/2,BZ]),((FX1-FX0)/2,(FY1-FY0)/2,.03),.018)
    body=np.maximum(body,-cut)
    body=np.maximum(body,-np.maximum(np.abs(p[:,1]-.33)-.0035,rbox(p,np.array([0,0,0]),(BX-.006,BY,BZ-.006),.05)*-1))
    face=rbox(p,np.array([(FX0+FX1)/2,(FY0+FY1)/2,BZ-.03]),((FX1-FX0)/2-.004,(FY1-FY0)/2-.004,.012),.012)
    # drawer bezel (blue) protruding from the face, with its slot
    bez=rbox(p,np.array([.17,-.20,BZ-.012]),(.205,.066,.03),.022)
    slot=rbox(p,np.array([.17,-.20,BZ+.02]),(.165,.026,.05),.006)
    bez=np.maximum(bez,-slot)
    # edge trim (blue) down the right of the face
    trim=rbox(p,np.array([.468,0,BZ-.022]),(.016,.29,.03),.012)
    feet=np.minimum(rbox(p,np.array([-.42,-BY-.02,.34]),(.05,.03,.05),.012),rbox(p,np.array([.42,-BY-.02,.34]),(.05,.03,.05),.012))
    feet=np.minimum(feet,np.minimum(rbox(p,np.array([-.42,-BY-.02,-.34]),(.05,.03,.05),.012),rbox(p,np.array([.42,-BY-.02,-.34]),(.05,.03,.05),.012)))
    d=np.minimum.reduce([body,face,bez,trim,feet])
    if not want:return d
    m=np.zeros(len(p),int)            # 0 white plastic
    m[face<=np.minimum.reduce([body,bez,trim,feet])+1e-4]=1   # black gloss
    m[np.minimum(bez,trim)<=np.minimum(body,face)+1e-4]=2     # iFAST blue
    m[feet<=d+1e-4]=3
    return d,m
def normal(p):
    e=.0007;E=np.eye(3)*e
    return nrm(np.stack([scene(p+E[i])-scene(p-E[i]) for i in range(3)],1))
KEY=nrm(np.array([-.62,.62,.48]));FILL=nrm(np.array([.7,-.15,.7]))
def env(d):
    x,y,z=d[:,0],d[:,1],d[:,2]
    c=np.full(len(d),.010)
    c+=sm(.35,.95,y)*sm(-.6,.4,z)*.55                                    # overhead softbox
    c+=np.exp(-((x+.70)/.22)**2)*sm(-.4,.3,y)*sm(-.3,.4,z)*2.0            # key strip, page left
    c+=np.exp(-((x-.85)/.08)**2)*sm(-.5,.2,y)*sm(.3,-.4,z)*.6             # rim, far right, from behind
    c+=np.exp(-((y-.05)/.25)**2)*sm(.4,.95,z)*.18                         # low front fill
    c+=sm(-.2,-.9,y)*.02
    return np.stack([c*1.0,c*.995,c*.985],1)
CAM=np.array([2.0,1.05,3.0]);TGT=np.array([.02,-.06,0]);FOV=.30
fw=nrm(TGT-CAM);rt=nrm(np.cross(fw,[0,1,0]));up=np.cross(rt,fw)
def shade(u,v):
    n=len(u);rd=nrm(fw[None]+u[:,None]*rt[None]*FOV+v[:,None]*up[None]*FOV)
    t=np.full(n,1.5);hit=np.zeros(n,bool);alive=np.ones(n,bool)
    for it in range(260):
        idx=np.nonzero(alive)[0]
        if not len(idx):break
        p=CAM+rd[idx]*t[idx,None];d=scene(p)
        h=d<8e-5;hit[idx[h]]=True;alive[idx[h]]=False
        t[idx]+=np.maximum(d*.9,1e-4);alive[idx[t[idx]>7]]=False
    L=np.zeros((n,3));a=np.zeros(n);hi=np.nonzero(hit)[0]
    if len(hi):
        p=CAM+rd[hi]*t[hi,None];_,m=scene(p,True);nn=normal(p);V=-rd[hi]
        ndv=np.clip((nn*V).sum(1),0,1);fr=(1-ndv)**5
        dk=np.clip(nn@KEY,0,1);df=np.clip(nn@FILL,0,1);sky=np.clip(nn[:,1]*.5+.5,0,1)
        R=2*(nn*V).sum(1)[:,None]*nn-V;ev=env(R)
        hk=nrm(KEY[None]+V);sp=np.clip((nn*hk).sum(1),0,1)
        ao=np.ones(len(hi))
        for k,s in enumerate((.012,.03,.06)):ao-=np.clip(s-scene(p+nn*s),0,1)*(3.5/(k+1))
        ao=np.clip(ao,.35,1)
        col=np.zeros((len(hi),3))
        # white satin plastic
        alb=np.array([.80,.80,.79]);c=alb[None]*(.05+.85*dk+.16*df+.10*sky)[:,None]*ao[:,None]+ev*(.035+.35*fr)[:,None]+(sp**40*.10)[:,None]
        col[m==0]=c[m==0]
        # black gloss face; the touchscreen and the slot are areas on it
        c=np.array([.012,.013,.015])[None]*(.3+dk)[:,None]+ev*(.05+.9*fr)[:,None]+(sp**120*.9)[:,None]
        px,py=-p[:,0],p[:,1]
        scr=(px>-.06)&(px<.40)&(py>-.07)&(py<.28)&(nn[:,2]>.9)
        sx=(px+.06)/.46;sy=(py+.07)/.35
        sc=np.stack([.70+.06*sy,.73+.06*sy,.78+.05*sy],1)*.46
        blk=((sx>.08)&(sx<.40)&(sy>.22)&(sy<.78))                                       # a simple screen panel, no text
        sc[blk]=np.array([.36,.44,.62])*.5
        sc+=ev*(.04+.5*fr)[:,None]
        c[scr]=sc[scr]
        col[m==1]=c[m==1]
        # iFAST blue satin
        alb=np.array([.0,.13,.95]);c=alb[None]*(.06+.80*dk+.16*df+.08*sky)[:,None]*ao[:,None]+ev*(.04+.4*fr)[:,None]+(sp**50*.25)[:,None]
        inside=(np.abs(px-.17)<.17)&(np.abs(py+.20)<.03)&(p[:,2]<BZ+.012)
        c[inside]=np.array([.01,.01,.012])+ev[inside]*.03
        col[m==2]=c[m==2]
        col[m==3]=(np.array([.03,.03,.03])[None]*(.3+dk)[:,None])[m==3]
        # the dot mark on the left side panel (decal), from the iFAST logo
        side=(nn[:,0]>.95)&(m==0)
        if side.any():
            zz,yy=-p[:,2],p[:,1]
            dm=np.zeros(len(hi),bool);dc=np.zeros((len(hi),3))
            for (cx,cy,r,hx) in DOTS:
                X=.06+(cx-50)/100*.34;Y=.05-(cy-49)/100*.34;R0=r/100*.34
                inn=side&((zz-X)**2+(yy-Y)**2<R0*R0)
                dm|=inn;cc=np.array([int(hx[i:i+2],16)/255 for i in (1,3,5)])**2.2;dc[inn]=cc
            cc=dc*(.06+.85*dk+.16*df)[:,None]*ao[:,None]+ev*(.03+.3*fr)[:,None]
            col[dm]=cc[dm]
        L[hi]=col;a[hi]=1
    return L,a
DOTS=[(61.6,3.1,3.42,'#00bffe'),(32.3,5.6,3.34,'#006afe'),(47.3,12.2,5.54,'#0097fe'),(69.7,17.3,5.29,'#00d4fe'),(86.4,18.2,3.38,'#00f8fe'),(26.2,21.3,5.79,'#0057fe'),(57.0,22.5,4.66,'#00b2fe'),(39.8,23.6,4.66,'#0081fe'),(10.0,24.3,3.41,'#0022fe'),(71.6,31.2,4.67,'#00d8fe'),(54.4,32.9,4.04,'#00abfe'),(84.9,34.8,5.59,'#00f5fe'),(44.0,33.7,4.04,'#008efe'),(26.7,34.6,3.95,'#0058fe'),(63.1,38.2,4.03,'#00c3fe'),(13.9,40.3,5.76,'#002ffe'),(36.1,40.3,4.03,'#0053fe'),(78.4,46.8,4.67,'#00e8fe'),(98.1,44.7,3.39,'#00f9fe'),(67.2,47.6,4.04,'#00cdfe'),(33.9,50.3,4.03,'#004cfe'),(22.7,51.1,4.67,'#0027fe'),(3.0,53.2,3.42,'#000afe'),(87.2,57.6,5.79,'#00e3fe'),(65.0,57.6,4.04,'#00c8fe'),(38.0,59.7,4.04,'#0059fe'),(16.2,63.1,5.57,'#0011fe'),(57.1,64.3,4.03,'#0093fe'),(74.4,63.4,3.95,'#00dffe'),(46.7,65.0,4.04,'#0074fe'),(29.6,66.7,4.66,'#003efe'),(61.3,74.4,4.65,'#009ffe'),(91.1,73.5,3.4,'#00ebfe'),(44.2,75.4,4.68,'#006dfe'),(74.9,76.6,5.77,'#00c5fe'),(31.4,80.6,5.25,'#0044fe'),(14.7,79.7,3.38,'#000dfe'),(53.9,85.7,5.53,'#008afe'),(68.8,92.3,3.38,'#00b5fe'),(39.5,94.8,3.41,'#005efe')]
def run(rows):
    y0,y1=rows;PX,PY=np.meshgrid(np.arange(W),np.arange(y0,y1))
    u=((PX+.5)/W*2-1)*W/H;v=1-(PY+.5)/H*2
    L,a=shade(u.ravel(),v.ravel())
    x=L/(1+.35*L)*1.3;x=np.clip(x,0,1)**(1/2.2)
    return np.dstack([x.reshape(y1-y0,W,3),a.reshape(y1-y0,W,1)])
if __name__=='__main__':
    ch=[(i,min(i+16,H)) for i in range(0,H,16)]
    with Pool(NP) as P:img=np.vstack(P.map(run,ch))
    im=Image.fromarray((img*255).clip(0,255).astype(np.uint8),'RGBA')
    if SS>1:im=im.resize((FW,FH),Image.LANCZOS)
    bb=im.getbbox();print('bbox',bb);im.save(OUT)
