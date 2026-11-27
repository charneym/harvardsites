#!/usr/bin/env python3
"""Reco Medical hero (PROD_BRIEF 3b, variant B lighting): a crafted render of the ICP-SENSE reader as shown in Reco's own
product photo (recomedical.co.uk, products page: "a small sensor ... and a smartphone-sized reader"; the photo shows a
grey, portrait, rounded reader with a light label panel and a gold connector on top, its thin cable running to a flat
white pad worn on the head). Drawn: the reader, its connector and a loop of thin cable ending in the white pad. No
lettering on the label. Neutral studio light (key upper left, low fill, dim rim), no glow; alpha out.
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
# reader: portrait, x right, y up, z toward the front
RX,RY,RZ=.34,.52,.11
# cable: catmull-rom through these points (from the connector on top, a loose loop, to the pad on the right)
CP=np.array([(.16,.60,0),(.17,.78,.02),(.30,.92,.06),(.56,.90,.10),(.74,.70,.10),(.80,.40,.06),(.86,.10,.04),(.95,-.12,.06)])
def catmull(P,n):
    P=np.vstack([P[0]*2-P[1],P,P[-1]*2-P[-2]]);out=[]
    for i in range(1,len(P)-2):
        p0,p1,p2,p3=P[i-1],P[i],P[i+1],P[i+2]
        for t in np.linspace(0,1,n,endpoint=False):
            t2,t3=t*t,t*t*t;out.append(.5*((2*p1)+(-p0+p2)*t+(2*p0-5*p1+4*p2-p3)*t2+(-p0+3*p1-3*p2+p3)*t3))
    out.append(P[-2]);return np.array(out)
PC=catmull(CP,10);RC=.0085
def cable(p):
    A=PC[:-1][None];BA=(PC[1:]-PC[:-1])[None];PA=p[:,None,:]-A
    h=np.clip((PA*BA).sum(-1)/(BA*BA).sum(-1),0,1);d=np.linalg.norm(PA-BA*h[...,None],axis=-1)
    return d.min(1)-RC
PADC=np.array([1.00,-.28,.07])
def scene(p,want=False):
    body=rbox(p,np.array([0,0,0]),(RX,RY,RZ),.07)
    lab=rbox(p,np.array([0,-.06,RZ]),(.25,.30,.012),.03)                 # recessed label panel
    body=np.maximum(body,-(lab-.0))
    labf=rbox(p,np.array([0,-.06,RZ-.012]),(.245,.295,.006),.028)        # the label surface, a step in
    con=np.minimum(rbox(p,np.array([.16,RY+.035,0]),(.035,.04,.035),.012),rbox(p,np.array([.16,RY+.085,0]),(.016,.03,.016),.006))
    cab=cable(p)
    pad=rbox(p,PADC,(.11,.17,.018),.05)
    d=np.minimum.reduce([body,labf,con,cab,pad])
    if not want:return d
    m=np.zeros(len(p),int)
    m[labf<=d+1e-4]=1;m[con<=d+1e-4]=2;m[cab<=d+1e-4]=3;m[pad<=d+1e-4]=4
    return d,m
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
CAM=np.array([1.55,.75,3.1]);TGT=np.array([.32,.12,0]);FOV=.38
fw=nrm(TGT-CAM);rt=nrm(np.cross(fw,[0,1,0]));up=np.cross(rt,fw)
def shade(u,v):
    n=len(u);rd=nrm(fw[None]+u[:,None]*rt[None]*FOV+v[:,None]*up[None]*FOV)
    t=np.full(n,1.8);hit=np.zeros(n,bool);alive=np.ones(n,bool)
    for it in range(220):
        idx=np.nonzero(alive)[0]
        if not len(idx):break
        p=CAM+rd[idx]*t[idx,None];d=scene(p)
        h=d<1e-4;hit[idx[h]]=True;alive[idx[h]]=False
        t[idx]+=np.maximum(d*.9,1e-4);alive[idx[t[idx]>6.5]]=False
    L=np.zeros((n,3));a=np.zeros(n);hi=np.nonzero(hit)[0]
    if len(hi):
        p=CAM+rd[hi]*t[hi,None];_,m=scene(p,True);nn=normal(p);V=-rd[hi]
        ndv=np.clip((nn*V).sum(1),0,1);fr=(1-ndv)**5
        dk=np.clip(nn@KEY,0,1);df=np.clip(nn@FILL,0,1);sky=np.clip(nn[:,1]*.5+.5,0,1)
        R_=2*(nn*V).sum(1)[:,None]*nn-V;ev=env(R_)
        hk=nrm(KEY[None]+V);sp=np.clip((nn*hk).sum(1),0,1)
        ao=np.ones(len(hi))
        for k,s in enumerate((.01,.025,.05)):ao-=np.clip(s-scene(p+nn*s),0,1)*(3.5/(k+1))
        ao=np.clip(ao,.35,1)
        def mat(alb,spec,refl):
            return np.array(alb)[None]*(.05+.85*dk+.16*df+.08*sky)[:,None]*ao[:,None]+ev*(refl+.35*fr)[:,None]+(sp**40*spec)[:,None]
        col=mat([.36,.37,.38],.12,.04)                 # grey satin housing
        c=mat([.64,.64,.62],.05,.03);col[m==1]=c[m==1] # light label panel
        c=mat([.62,.46,.18],.9,.25);col[m==2]=c[m==2]  # gold connector
        c=mat([.62,.62,.60],.2,.04);col[m==3]=c[m==3]  # thin light cable
        c=mat([.86,.86,.85],.06,.03);col[m==4]=c[m==4] # white pad
        L[hi]=col;a[hi]=1
    return L,a
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
    print('bbox',im.getbbox());im.save(OUT)
