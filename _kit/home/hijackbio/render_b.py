#!/usr/bin/env python3
"""Hijack Bio hero (PROD_BRIEF 0c / 3b, variant B lighting): a crafted render of their actual science, one engineered
bacterium (hijack.bio: "environmentally aware targeted biogenic drug delivery systems"; Innovate UK 10171810: Hijack Bio
"are developing programmable, modular living therapies starting with a replacement for insulin ... Traditional insulin
for drug therapy is produced by bacteria or yeast. Our innovation harnesses state-of-the-art bio-engineering to replace
injected insulin with a daily pill"). Drawn as a studio model of a rod-shaped bacterium: a capsule cell body with a
finely pitted surface, a scatter of surface receptors (the sensing side of "environmentally aware"), short pili and two
long flagella trailing from one pole. Proportions are illustrative, not a micrograph.
Satin material, neutral studio light (key upper left, low fill, dim rim), no glow; alpha out.
Usage: python3 render_b.py W H out.png [SS] [procs]"""
import sys, numpy as np
from multiprocessing import Pool
from PIL import Image
W=int(sys.argv[1]);H=int(sys.argv[2]);OUT=sys.argv[3];SS=int(sys.argv[4]) if len(sys.argv)>4 else 1;NP=int(sys.argv[5]) if len(sys.argv)>5 else 4
FW,FH=W,H;W,H=W*SS,H*SS
rng=np.random.default_rng(11)
def nrm(v):return v/np.linalg.norm(v,axis=-1,keepdims=True)
def sm(a,b,x):x=np.clip((x-a)/(b-a),0,1);return x*x*(3-2*x)
BL,BR=.62,.21                      # cell body: half length along x, radius
# surface receptors: points on the capsule, each a small bump
def capsule_pts(n):
    P=[]
    while len(P)<n:
        x=rng.uniform(-BL-BR,BL+BR);th=rng.uniform(0,2*np.pi)
        cx=np.clip(x,-BL,BL);d=abs(x-cx)
        if d>BR:continue
        r=np.sqrt(max(BR*BR-d*d,0))
        P.append([x,np.sin(th)*r,np.cos(th)*r])
    return np.array(P)
REC=capsule_pts(46)
# pili: short hair-like projections; flagella: two long trailing helices from the -x pole
def catmull(P,n):
    P=np.vstack([P[0]*2-P[1],P,P[-1]*2-P[-2]]);out=[]
    for i in range(1,len(P)-2):
        p0,p1,p2,p3=P[i-1],P[i],P[i+1],P[i+2]
        for t in np.linspace(0,1,n,endpoint=False):
            t2,t3=t*t,t*t*t;out.append(.5*((2*p1)+(-p0+p2)*t+(2*p0-5*p1+4*p2-p3)*t2+(-p0+3*p1-3*p2+p3)*t3))
    out.append(P[-2]);return np.array(out)
FLA=[]
for k,(amp,ph,drift) in enumerate([(.115,0.0,.10),(.095,2.2,-.13)]):
    pts=[]
    for i in range(40):
        t=i/39.0
        x=-BL-.06-t*1.30
        pts.append([x,np.sin(t*15.0+ph)*amp*(.40+.60*t)+drift*t*.5,np.cos(t*15.0+ph)*amp*(.40+.60*t)+drift*t])
    FLA.append(catmull(np.array(pts),4))
PIL=[]
for i in range(16):
    th=rng.uniform(0,2*np.pi);x=rng.uniform(-BL*.85,BL*.95)
    n=np.array([0,np.sin(th),np.cos(th)])
    t2=nrm(np.cross(n,[1,0,0]))*rng.choice([-1,1])
    PIL.append((np.array([x,0,0])+n*BR*.98,n,t2))
def sdcap(p):
    q=p.copy();q[:,0]-=np.clip(q[:,0],-BL,BL)
    return np.linalg.norm(q,axis=1)-BR
def segd(p,a,b,r):
    pa=p-a;ba=b-a;h=np.clip((pa@ba)/(ba@ba),0,1);return np.linalg.norm(pa-h[:,None]*ba[None],axis=1)-r
def polyd(p,P,r):
    A=P[:-1][None];BA=(P[1:]-P[:-1])[None];PA=p[:,None,:]-A
    h=np.clip((PA*BA).sum(-1)/np.maximum((BA*BA).sum(-1),1e-9),0,1)
    return np.linalg.norm(PA-BA*h[...,None],axis=-1).min(1)-r
def scene(p,want=False):
    body=sdcap(p)
    # fine pitting on the cell surface (a membrane, not a plastic capsule)
    pit=np.zeros(len(p))
    for (f,ax_,ph_) in ((47.,(1.,.37,-.62),0.),(61.,(-.44,1.,.29),1.7),(83.,(.21,-.58,1.),3.1)):
        a_=np.array(ax_);a_=a_/np.linalg.norm(a_);pit+=np.sin(p@a_*f+ph_)
    pit*=np.sin(p[:,0]*29.+1.1)
    body=body-.0016*pit
    # receptors
    d=np.linalg.norm(p[:,None,:]-REC[None],axis=-1).min(1)-.030
    rec=d
    out=np.minimum(body,rec)
    # pili
    pil=np.full(len(p),9.)
    for (p0,n,t2) in PIL:
        mid=p0+n*.075+t2*.022;pil=np.minimum(pil,segd(p,p0,mid,.0062));pil=np.minimum(pil,segd(p,mid,mid+n*.055+t2*.05,.0052))
    out=np.minimum(out,pil)
    fl=np.full(len(p),9.)
    for P in FLA:fl=np.minimum(fl,polyd(p,P,.0118))
    out=np.minimum(out,fl)
    if not want:return out*.85
    m=np.zeros(len(p),int);m[rec<=out+1e-4]=1;m[pil<=out+1e-4]=2;m[fl<=out+1e-4]=3
    return out*.85,m
ax=np.radians(-13);az=np.radians(-18)
Rx=np.array([[1,0,0],[0,np.cos(ax),-np.sin(ax)],[0,np.sin(ax),np.cos(ax)]])
Rz=np.array([[np.cos(az),-np.sin(az),0],[np.sin(az),np.cos(az),0],[0,0,1]])
M=Rz@Rx
def sceneW(p,want=False):return scene(p@M,want)
def normal(p):
    e=.0005;E=np.eye(3)*e
    return nrm(np.stack([sceneW(p+E[i])-sceneW(p-E[i]) for i in range(3)],1))
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
CAM=np.array([.30,.34,4.2]);TGT=np.array([-.28,-.02,0]);FOV=.30
fw=nrm(TGT-CAM);rt=nrm(np.cross(fw,[0,1,0]));up=np.cross(rt,fw)
def shade(u,v):
    n=len(u);rd=nrm(fw[None]+u[:,None]*rt[None]*FOV+v[:,None]*up[None]*FOV)
    t=np.full(n,2.6);hit=np.zeros(n,bool);alive=np.ones(n,bool)
    for it in range(300):
        idx=np.nonzero(alive)[0]
        if not len(idx):break
        p=CAM+rd[idx]*t[idx,None];d=sceneW(p)
        h=d<1.5e-4;hit[idx[h]]=True;alive[idx[h]]=False
        t[idx]+=np.maximum(d*.85,1.5e-4);alive[idx[t[idx]>6.2]]=False
    L=np.zeros((n,3));a=np.zeros(n);hi=np.nonzero(hit)[0]
    if len(hi):
        p=CAM+rd[hi]*t[hi,None];_,m=sceneW(p,True);nn=normal(p);V=-rd[hi]
        ndv=np.clip((nn*V).sum(1),0,1);fr=(1-ndv)**5
        dk=np.clip(nn@KEY,0,1);df=np.clip(nn@FILL,0,1);sky=np.clip(nn[:,1]*.5+.5,0,1)
        R_=2*(nn*V).sum(1)[:,None]*nn-V;ev=env(R_)
        hk=nrm(KEY[None]+V);sp=np.clip((nn*hk).sum(1),0,1)
        ao=np.ones(len(hi))
        for k,s in enumerate((.01,.03,.07)):ao-=np.clip(s-sceneW(p+nn*s),0,1)*(3.0/(k+1))
        ao=np.clip(ao,.35,1)
        alb=np.tile(np.array([.60,.62,.61])[None],(len(hi),1))     # cell body
        alb[m==1]=np.array([.45,.60,.60])                           # receptors, a touch cooler
        alb[m==2]=np.array([.56,.58,.57])                           # pili
        alb[m==3]=np.array([.52,.56,.55])                           # flagella
        c=alb*(.05+.55*dk+.12*df+.07*sky)[:,None]*ao[:,None]+ev*(.26+.40*fr)[:,None]*np.array([.80,.81,.80])+(sp**52*.34+sp**12*.05)[:,None]*ao[:,None]
        L[hi]=c;a[hi]=1
    return L,a
def run(rows):
    y0,y1=rows;PXg,PYg=np.meshgrid(np.arange(W),np.arange(y0,y1))
    u=((PXg+.5)/W*2-1)*W/H;v=1-(PYg+.5)/H*2
    L,a=shade(u.ravel(),v.ravel())
    x=L/(1+.35*L)*1.3;x=np.clip(x,0,1)**(1/2.2)
    return np.dstack([x.reshape(y1-y0,W,3),a.reshape(y1-y0,W,1)])
if __name__=='__main__':
    ch=[(i,min(i+8,H)) for i in range(0,H,8)]
    with Pool(NP) as P:img=np.vstack(P.map(run,ch))
    im=Image.fromarray((img*255).clip(0,255).astype(np.uint8),'RGBA')
    if SS>1:im=im.resize((FW,FH),Image.LANCZOS)
    print('bbox',im.getbbox());im.save(OUT)
