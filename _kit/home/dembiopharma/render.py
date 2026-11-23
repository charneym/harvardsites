#!/usr/bin/env python3
"""DEM BioPharma hero: a smooth Gaussian molecular surface of an intact IgG1 antibody (PDB 1IGY, Harris et al. 1998; mouse mAb 61.1.3, the first complete IgG1 crystal structure) carrying linker-payloads on its interchain cysteines, as an illustration of an antibody-drug conjugate like DEM301 (afucosylated antibody + linker-payload). The core fucose is omitted (afucosylated). Heavy chains in DEM navy, light chains pale, payloads in DEM teal. Adapted from gilatherapeutics/surf.py. Args: ax ay az size. Env OUT."""
import numpy as np, pathlib, sys, time, os
from PIL import Image
t0=time.time()
def _box(a,r,ax):
    a=np.moveaxis(a,ax,0);p=np.concatenate([np.repeat(a[:1],r+1,0),a,np.repeat(a[-1:],r,0)]);c=np.cumsum(p,0)
    return np.moveaxis((c[2*r+1:]-c[:-2*r-1])/(2*r+1),0,ax)
def blur(a,s):
    r=max(1,int(s*0.9))
    for _ in range(3): a=_box(_box(a,r,0),r,1)
    return a
H=pathlib.Path(__file__).resolve().parent
R={'C':1.70,'N':1.55,'O':1.52,'S':1.80}
xyz=[];el=[];kind=[];rn=[];rq=[];chn=[]
SG={}
for l in open(H/'1igy.pdb'):
    if l.startswith('ENDMDL'): break
    if not (l.startswith('ATOM') or l.startswith('HETATM')): continue
    if l[16] not in ' A': continue
    res=l[17:20];ch=l[21]
    if l.startswith('HETATM'):
        if res in ('FUC','FUL','HOH'): continue   # afucosylated: the core fucose is left off
        k=2
    else:
        k=0 if ch in 'BD' else 1
    e=l[76:78].strip() or l[12:14].strip()[0]
    if e not in R: continue
    p=[float(l[30:38]),float(l[38:46]),float(l[46:54])]
    if res=='CYS' and l[12:16].strip()=='SG': SG[(ch,int(l[22:26]))]=p
    xyz.append(p);el.append(e);kind.append(k);rn.append(res);rq.append(int(l[22:26]) if l.startswith('ATOM') else 0);chn.append(ch)
X=np.array(xyz);K=np.array(kind);CH=np.array(chn);RQ=np.array(rq)
X=np.array(xyz);K=np.array(kind)
fc=(np.isin(np.array(chn),['B','D']))&(np.array(rq)>=250)
fa1=((np.array(chn)=='A')|((np.array(chn)=='B')&(np.array(rq)<230)))
fa2=((np.array(chn)=='C')|((np.array(chn)=='D')&(np.array(rq)<230)))
cF=X[fc].mean(0);c1=X[fa1].mean(0);c2=X[fa2].mean(0)
X-=X[K<3].mean(0);cF=cF-0;  # recentre
cen=np.array(xyz)[K<3].mean(0);cF-=cen;c1-=cen;c2-=cen
u=(c1+c2)/2-cF;u/=np.linalg.norm(u)
nrm=np.cross(c1-cF,c2-cF);nrm-=u*(nrm@u);nrm/=np.linalg.norm(nrm)
a=np.cross(u,nrm);a/=np.linalg.norm(a)
P=X@np.stack([a,u,nrm],1)
# linker-payloads on the interchain cysteines, fanned out into the open space around the hinge (illustrative geometry:
# a stalk of linker atoms ending in a compact payload; the conjugation chemistry is not depicted literally)
rng=np.random.default_rng(int(os.environ.get('SEED','7')))
FR=np.stack([a,u,nrm],1)
sites=[('A',214),('C',214),('B',235),('D',235),('B',240),('D',240),('B',237),('D',237)]
ANG=[float(v) for v in os.environ.get('ANGS','200,-20,235,-55,160,20,265,-85').split(',')]
add=[];ak=[]
for i,s_ in enumerate(sites):
    p0=(np.array(SG[s_])-cen)@FR
    th=np.radians(ANG[i]);d=np.array([np.cos(th),np.sin(th),float(os.environ.get("ZB","1.3"))]);d/=np.linalg.norm(d)
    L=float(os.environ.get('LL','16'))
    n=int(L/1.5)
    for j in range(1,n+1):
        q=p0+d*1.5*j+np.array([0,0,1])*0.6*np.sin(j*0.7);add.append(q);ak.append(3)
    tip=add[-1]+d*3.0
    for j in range(22):
        v=rng.normal(size=3);v/=np.linalg.norm(v);add.append(tip+v*rng.uniform(0.5,float(os.environ.get("PR","3.4"))));ak.append(4)
P=np.vstack([P,np.array(add)]);K=np.concatenate([K,np.array(ak)]);PP=K>=3
el=el+['C']*len(add);rn=rn+['PAY']*len(add);rq=rq+[0]*len(add)
def rot(t,ax):
    c,s=np.cos(t),np.sin(t)
    return {'x':np.array([[1,0,0],[0,c,-s],[0,s,c]]),'y':np.array([[c,0,s],[0,1,0],[-s,0,c]]),'z':np.array([[c,-s,0],[s,c,0],[0,0,1]])}[ax]
ang=[float(t) for t in (sys.argv[1:4] if len(sys.argv)>3 else (0.35,0.0,0.0))]
P=P@rot(ang[1],'y').T@rot(ang[0],'x').T@rot(ang[2],'z').T
S=int(sys.argv[4]) if len(sys.argv)>4 else 2400
rad=np.array([R[e] for e in el]);B=float(__import__("os").environ.get("BB","1.1"));CUT=3.4  # blob sharpness; cutoff in units of radius... (absolute A below)
PAD=float(os.environ.get("PAD","1.3"))
lo=(P[:,:2]-rad[:,None]-PAD).min(0);hi=(P[:,:2]+rad[:,None]+PAD).max(0)
sc=S*0.94/(hi-lo).max();off=np.array([S,S])/2-(lo+hi)/2*sc
# 1) upper-bound depth from inflated spheres
Zs=np.full((S,S),-1e9)
for i in range(len(P)):
    cx,cy=P[i,:2]*sc+off;cy=S-cy;r=(rad[i]+PAD)*sc
    x0,x1=int(max(cx-r,0)),int(min(cx+r+1,S));y0,y1=int(max(cy-r,0)),int(min(cy+r+1,S))
    yy,xx=np.mgrid[y0:y1,x0:x1];d2=((xx+.5-cx)**2+(yy+.5-cy)**2)/r/r;m=d2<1
    z=P[i,2]*sc+np.sqrt(np.clip(1-d2,0,1))*r;sub=Zs[y0:y1,x0:x1];u=m&(z>sub);sub[u]=z[u]
hit=Zs>-1e8
NZ=int(os.environ.get("NZ","30"));DZ=(PAD+4.2)*sc/NZ
cut=max(3.2,rad.max()*2.0)*sc
Zsurf=np.array(Zs);has=np.zeros((S,S),bool);Z0=np.array(Zs)
STRIP=400
for ps in range(5):
  todo=hit&~has
  for ys in range(0,S,STRIP):
    ye=min(S,ys+STRIP)
    if not todo[ys:ye].any(): continue
    zs=Z0[ys:ye,:,None]-np.arange(NZ)[None,None,:]*DZ
    D=np.zeros((ye-ys,S,NZ),np.float32)
    for i in range(len(P)):
        cx,cy=P[i,:2]*sc+off;cy=S-cy
        y0,y1=int(max(cy-cut,ys)),int(min(cy+cut+1,ye))
        if y1<=y0: continue
        x0,x1=int(max(cx-cut,0)),int(min(cx+cut+1,S))
        yy,xx=np.mgrid[y0:y1,x0:x1];r2=((xx+.5-cx)**2+(yy+.5-cy)**2)
        m=r2<cut*cut
        if not m.any(): continue
        dz=zs[y0-ys:y1-ys,x0:x1]-P[i,2]*sc
        v=np.exp(-B*((r2[...,None]+dz*dz)/(rad[i]*sc)**2-1)).astype(np.float32)
        D[y0-ys:y1-ys,x0:x1]+=v*m[...,None]
    ab=D>=1.0;first=np.argmax(ab,-1)
    k=np.clip(first,1,NZ-1);i0=k-1
    a=np.take_along_axis(D,i0[...,None],-1)[...,0];b=np.take_along_axis(D,k[...,None],-1)[...,0]
    tt=np.clip((1-a)/(b-a+1e-6),0,1)
    zz=Z0[ys:ye]-(i0+tt)*DZ;zz=np.where(first==0,Z0[ys:ye],zz)
    got=ab.any(-1)&todo[ys:ye]
    Zsurf[ys:ye]=np.where(got,zz,Zsurf[ys:ye]);has[ys:ye]|=got
    Z0[ys:ye]=np.where(todo[ys:ye]&~got,Z0[ys:ye]-NZ*DZ,Z0[ys:ye])
    del D,zs
def splat(fn):
    for i in range(len(P)):
        cx,cy=P[i,:2]*sc+off;cy=S-cy
        x0,x1=int(max(cx-cut,0)),int(min(cx+cut+1,S));y0,y1=int(max(cy-cut,0)),int(min(cy+cut+1,S))
        fn(i,cx,cy,x0,x1,y0,y1)
print("density",time.time()-t0,"holes",int((hit&~has).sum()),int(hit.sum()))
# 2) analytic gradient + colour blend at the surface point
G=np.zeros((S,S,3),np.float32);W=np.zeros((S,S),np.float32);C=np.zeros((S,S,3),np.float32)
E=np.array(el);RN=np.array(rn)
hv=np.array([84,122,206])/255;hvD=np.array([52,84,160])/255
lt=np.array([206,220,242])/255;ltD=np.array([176,194,226])/255
gly=np.array([150,170,206])/255
lnk=np.array([20,150,160])/255;pay=np.array([22,196,206])/255
polar=np.isin(RN,['ASP','GLU','LYS','ARG','HIS','ASN','GLN','SER','THR'])
base=np.where(polar[:,None],hv,hv*0.7+hvD*0.3)
base=np.where((K==1)[:,None],np.where(polar[:,None],lt,ltD),base)
base=np.where((K==2)[:,None],gly,base)
base=np.where((K==3)[:,None],lnk,base)
base=np.where((K==4)[:,None],pay,base)
def f2(i,cx,cy,x0,x1,y0,y1):
    yy,xx=np.mgrid[y0:y1,x0:x1];dx=xx+.5-cx;dy=yy+.5-cy;r2=dx*dx+dy*dy
    m=r2<cut*cut
    if not m.any(): return
    dz=Zsurf[y0:y1,x0:x1]-P[i,2]*sc;rr=(rad[i]*sc)**2
    v=np.exp(-B*((r2+dz*dz)/rr-1))*m
    g=v*(2*B/rr)
    G[y0:y1,x0:x1,0]+=g*dx;G[y0:y1,x0:x1,1]+=g*(-dy);G[y0:y1,x0:x1,2]+=g*dz
    w=v**3;W[y0:y1,x0:x1]+=w;C[y0:y1,x0:x1]+=w[...,None]*base[i]
splat(f2);print('grad',time.time()-t0)
N=G/ (np.linalg.norm(G,axis=-1,keepdims=True)+1e-9)
col=C/(W[...,None]+1e-9)
mask=has
Zf=np.where(mask,Zsurf,Zsurf[mask].min()-6*sc)
ao=np.zeros((S,S))
for rr in (6,14,30,64,120):
    s=rr*S/2400;bb=blur(Zf,s);ao+=np.clip((bb-Zf)/(s*1.6),0,1)
ao=np.clip(1-ao/2.3,0,1)
L=np.array([-.5,.62,.6]);L/=np.linalg.norm(L)
lam=np.clip((N*L).sum(-1),0,1);wrap=np.clip(((N*L).sum(-1)+.35)/1.35,0,1)
Hh=L+np.array([0,0,1]);Hh/=np.linalg.norm(Hh);nh=np.clip((N*Hh).sum(-1),0,1)
spec=nh**60*0.42+nh**10*0.07
rim=(1-np.clip(N[...,2],0,1))**2.6
zn=(Zsurf-Zsurf[mask].min())/(Zsurf[mask].max()-Zsurf[mask].min()+1e-6);zn=np.where(mask,zn,0)
ink=np.array([10,22,46])/255
diff=(0.06+0.92*lam**1.1+0.2*wrap)*(0.28+0.72*ao)
shade=col*diff[...,None]+spec[...,None]*ao[...,None]+rim[...,None]*np.array([150,200,240])/255*0.30*ao[...,None]
f=(0.7+0.3*zn[...,None]);shade=shade*f+ink*(1-f)*0.6
img=np.clip(shade,0,1)
rgba=np.dstack([img*255,mask*255]).astype(np.uint8)
im=Image.fromarray(rgba,'RGBA').resize((S//2,S//2),Image.LANCZOS)
bb=im.getbbox();im=im.crop(bb);im.save(H/(__import__('os').environ.get('OUT','adc')+'.png'));print(im.size,time.time()-t0)
