#!/usr/bin/env python3
"""GutSee Health hero (PROD_BRIEF 0c / 3b, variant B lighting): a crafted render of their actual science, a bacteriophage
(gutseehealth.com: "REMOVE harmful bacteria using targeted phages"; PhageX: "phages - viruses which target and kill"
bacteria). Drawn as one tailed phage of the familiar T4 form, as a studio model: an elongated icosahedral head, collar,
ridged contractile tail sheath, hexagonal baseplate with short pins and six long, kinked tail fibres. Proportions are
illustrative. Satin neutral material, neutral studio light (key upper left, low fill, dim rim), no glow; alpha out.
Usage: python3 render_b.py W H out.png [SS] [procs]"""
import sys, numpy as np
from multiprocessing import Pool
from PIL import Image
W=int(sys.argv[1]);H=int(sys.argv[2]);OUT=sys.argv[3];SS=int(sys.argv[4]) if len(sys.argv)>4 else 1;NP=int(sys.argv[5]) if len(sys.argv)>5 else 4
FW,FH=W,H;W,H=W*SS,H*SS
def nrm(v):return v/np.linalg.norm(v,axis=-1,keepdims=True)
def sm(a,b,x):x=np.clip((x-a)/(b-a),0,1);return x*x*(3-2*x)
def rod(a,b):
    a=np.array(a,float);b=np.array(b,float);ax=nrm(a-b)
    c=np.cross(ax,[0,1,0]);s=np.linalg.norm(c);cs=ax@np.array([0,1,0])
    if s<1e-9:return np.eye(3)
    k=c/s;K=np.array([[0,-k[2],k[1]],[k[2],0,-k[0]],[-k[1],k[0],0]])
    return np.eye(3)+np.sin(np.arcsin(s))*K+(1-cs)*K@K
# icosahedron face normals (= dodecahedron vertex directions), turned so a 5-fold vertex points along +y
PHI=(1+5**.5)/2
N=[]
for sx in(-1,1):
    for sy in(-1,1):
        for sz in(-1,1):N.append((sx,sy,sz))
for a in(-1,1):
    for b in(-1,1):N+= [(0,a/PHI,b*PHI),(a/PHI,b*PHI,0),(b*PHI,0,a/PHI)]
N=nrm(np.array(N,float))
v5=nrm(np.array([0,1,PHI]))
RA=rod(v5,[0,0,0]) if False else None
# rotation taking v5 to +y (Rodrigues)
k=np.cross(v5,[0,1,0]);s=np.linalg.norm(k);k/=s;c=v5[1];K=np.array([[0,-k[2],k[1]],[k[2],0,-k[0]],[-k[1],k[0],0]])
R5=np.eye(3)+s*K+(1-c)*K@K
N=N@R5.T
# per-face tangent frames for the capsomer lattice
T1=nrm(np.cross(N,np.where(np.abs(N[:,1:2])<.9,np.array([[0,1,0]]),np.array([[1,0,0]]))));T2=np.cross(N,T1)
KC=2*np.pi/.034
def hexb(u,v):
    a=np.cos(KC*u);b=np.cos(KC*(-.5*u+.866*v));c=np.cos(KC*(-.5*u-.866*v))
    return np.clip((a+b+c+1.5)/4.5,0,1)
HC=np.array([0,.60,0]);HR=.19;HE=.075             # head centre, inradius, half elongation
YC=.30;YS0=.285;YS1=-.37;YB=-.395                 # collar, sheath top/bottom, baseplate centre
RS=.074
CORN=[np.radians(30+60*i) for i in range(6)]
FIB=[]
for a in CORN:
    ca,sa=np.cos(a),np.sin(a)
    p0=np.array([ca*.15,YB+.005,sa*.15]);kn=np.array([ca*.56,YB+.15,sa*.56]);tp=np.array([ca*.70,YB-.40,sa*.70])
    FIB.append((p0,kn,tp))
def seg(p,a,b,r):
    pa=p-a;ba=b-a;h=np.clip((pa@ba)/(ba@ba),0,1);return np.linalg.norm(pa-h[:,None]*ba[None],axis=1)-r
def beaded(p,a,b,r):
    pa=p-a;ba=b-a;L=np.sqrt(ba@ba);h=np.clip((pa@ba)/(L*L),0,1)
    rr=r*(1+.14*np.cos(h*L*2*np.pi/.045)**2)
    return (np.linalg.norm(pa-h[:,None]*ba[None],axis=1)-rr)*.85
def scene(p,want=False):
    q=p-HC;q=q.copy();q[:,1]-=np.clip(q[:,1],-HE,HE)
    D=q@N.T;fi=D.argmax(1);head=D.max(1)-HR+.010
    head=np.maximum(head,np.linalg.norm(q,axis=1)-HR*1.20)   # soften the vertices a touch
    pp=p-HC;u=(pp*T1[fi]).sum(1);v=(pp*T2[fi]).sum(1)
    head=head-.0030*hexb(u,v)**1.5
    x,y,z=p[:,0],p[:,1],p[:,2];rho=np.hypot(x,z);th=np.arctan2(z,x)
    collar=np.maximum(rho-.105,np.abs(y-YC)-.014)-.004
    # contractile sheath: stacked annuli with a six-start helical bump
    ring=.5+.5*np.cos(2*np.pi*(y-YS1)/.042)
    bump=.5+.5*np.cos(6*th+y*48)
    rs=RS+.010*ring*(.55+.45*bump)
    sheath=np.maximum((rho-rs)*.7,np.maximum(y-YS0,YS1-y))
    tube=np.maximum(rho-.036,np.maximum(y-(YS0+.02),(YS1-.02)-y))
    # hexagonal baseplate
    hx=np.maximum.reduce([np.abs(x*np.cos(a)+z*np.sin(a)) for a in np.radians([0,60,120])])
    plate=np.maximum(hx-.142,np.abs(y-YB)-.016)-.014
    plate=np.minimum(plate,np.maximum(np.maximum(hx-.098,np.abs(y-(YB+.03))-.012)-.006,-(rho-.05)))
    d=np.minimum.reduce([head,collar,sheath,tube,plate])
    fib=np.full(len(p),9.0)
    for (p0,kn,tp) in FIB:
        fib=np.minimum(fib,beaded(p,p0,kn,.0098));fib=np.minimum(fib,beaded(p,kn,tp,.0080))
        fib=np.minimum(fib,np.linalg.norm(p-kn,axis=1)-.0145)
        pin=p0*np.array([.85,1,.85]);fib=np.minimum(fib,seg(p,pin,pin+np.array([0,-.075,0])+p0*np.array([.25,0,.25]),.007))
    d=np.minimum(d,fib)
    if not want:return d
    m=np.zeros(len(p),int);m[head<=d+1e-4]=1;m[fib<=d+1e-4]=2
    return d,m
# pose: tilted toward the reader and a little off vertical, turned so no fibre hides behind the tail
ax=np.radians(16);az=np.radians(-17);ay=np.radians(12)
Rx=np.array([[1,0,0],[0,np.cos(ax),-np.sin(ax)],[0,np.sin(ax),np.cos(ax)]])
Rz=np.array([[np.cos(az),-np.sin(az),0],[np.sin(az),np.cos(az),0],[0,0,1]])
Ry=np.array([[np.cos(ay),0,np.sin(ay)],[0,1,0],[-np.sin(ay),0,np.cos(ay)]])
M=Rz@Rx@Ry
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
CAM=np.array([0,.35,4.3]);TGT=np.array([0,-.06,0]);FOV=.27
fw=nrm(TGT-CAM);rt=nrm(np.cross(fw,[0,1,0]));up=np.cross(rt,fw)
def shade(u,v):
    n=len(u);rd=nrm(fw[None]+u[:,None]*rt[None]*FOV+v[:,None]*up[None]*FOV)
    t=np.full(n,3.0);hit=np.zeros(n,bool);alive=np.ones(n,bool)
    for it in range(260):
        idx=np.nonzero(alive)[0]
        if not len(idx):break
        p=CAM+rd[idx]*t[idx,None];d=sceneW(p)
        h=d<2e-4;hit[idx[h]]=True;alive[idx[h]]=False
        t[idx]+=np.maximum(d*.8,2e-4);alive[idx[t[idx]>5.8]]=False
    L=np.zeros((n,3));a=np.zeros(n);hi=np.nonzero(hit)[0]
    if len(hi):
        p=CAM+rd[hi]*t[hi,None];_,m=sceneW(p,True);nn=normal(p);V=-rd[hi]
        ndv=np.clip((nn*V).sum(1),0,1);fr=(1-ndv)**5
        dk=np.clip(nn@KEY,0,1);df=np.clip(nn@FILL,0,1);sky=np.clip(nn[:,1]*.5+.5,0,1)
        R_=2*(nn*V).sum(1)[:,None]*nn-V;ev=env(R_)
        hk=nrm(KEY[None]+V);sp=np.clip((nn*hk).sum(1),0,1)
        ao=np.ones(len(hi))
        for kk,s in enumerate((.008,.02,.045)):ao-=np.clip(s-sceneW(p+nn*s),0,1)*(3.0/(kk+1))
        ao=np.clip(ao,.4,1)
        # satin neutral material (a studio model), the head a touch lighter
        alb=np.where((m==1)[:,None],np.array([.60,.60,.61])[None],np.array([.52,.52,.53])[None])
        c=alb*(.05+.62*dk+.13*df+.06*sky)[:,None]*ao[:,None]+ev*(.30+.40*fr)[:,None]*np.array([.80,.80,.81])+(sp**60*.75+sp**12*.08)[:,None]
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
