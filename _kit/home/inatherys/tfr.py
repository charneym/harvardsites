#!/usr/bin/env python3
"""Inatherys hero: the human transferrin receptor 1 (CD71), the target of INA03, as a smooth Gaussian molecular surface.
Crystal structure of the TfR1 ectodomain homodimer, PDB 1CX8 (Lawrence et al., Science 1999), chains A+B with their N-glycans.
Two-fold axis vertical, membrane side down. Chain A in the logo teal (#009DBB), chain B in the logo violet (#A2549A), glycans in the logo lilac (#DFC3DE).
Adapted from nzymebio/surf.py. Args: ax ay az size. Output: tfr.png (RGBA)."""
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
xyz=[];el=[];chn=[];gly=[];rq=[];rn=[]
for l in open(H/'1cx8.pdb'):
    if not l.startswith(('ATOM','HETATM')): continue
    ch=l[21]
    if ch not in 'AB': continue
    if l.startswith('HETATM') and l[17:20] not in ('NAG','FUC','MAN','BMA'): continue
    if l[16] not in ' A': continue
    e=l[76:78].strip() or l[12:14].strip()[0]
    if e not in R: continue
    xyz.append([float(l[30:38]),float(l[38:46]),float(l[46:54])]);el.append(e);chn.append(ch);gly.append(l.startswith('HETATM'));rq.append(int(l[22:26]));rn.append(l[17:20])
X=np.array(xyz);CHN=np.array(chn);GL=np.array(gly);RQ=np.array(rq);PP=GL
X-=X.mean(0)
# two-fold axis from Kabsch superposition of chain A CA onto chain B CA
def cas(c):
    d={}
    for i in np.where((CHN==c)&~GL)[0]: pass
    return d
ca={}
for l in open(H/'1cx8.pdb'):
    if l.startswith('ATOM') and l[12:16].strip()=='CA' and l[21] in 'AB': ca.setdefault(l[21],{})[int(l[22:26])]=[float(l[30:38]),float(l[38:46]),float(l[46:54])]
ks=sorted(set(ca['A'])&set(ca['B']));PA=np.array([ca['A'][k] for k in ks]);PB=np.array([ca['B'][k] for k in ks])
ma,mb=PA.mean(0),PB.mean(0);Hm=(PA-ma).T@(PB-mb);U,_,Vt=np.linalg.svd(Hm);d=np.sign(np.linalg.det(Vt.T@U.T))
Rm=Vt.T@np.diag([1,1,d])@U.T;w,vv=np.linalg.eig(Rm);ax=np.real(vv[:,np.argmin(abs(w-1))]);ax/=np.linalg.norm(ax)
nt=X[(RQ<135)&~GL].mean(0)   # N-terminal stalk end faces the membrane
if nt@ax>0: ax=-ax           # +up away from the membrane
up=ax;cAB=X[CHN=='A'].mean(0)-X[CHN=='B'].mean(0);a=cAB-up*(cAB@up);a/=np.linalg.norm(a)
v=np.cross(a,up)
P=X@np.stack([a,up,v],1)
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
teal=np.array([0,157,187])/255;violet=np.array([162,84,154])/255;lilac=np.array([232,214,236])/255
yy_=(P[:,1]-P[:,1].min())/(np.ptp(P[:,1])+1e-9)
RN=np.array(rn);polar=np.isin(RN,['ASP','GLU','LYS','ARG','HIS','ASN','GLN','SER','THR'])
tA=np.array([40,176,204])/255;tA2=np.array([0,124,160])/255
vB=np.array([182,108,176])/255;vB2=np.array([130,64,132])/255
kA=np.where(polar[:,None],tA,tA2*0.5+tA*0.5);kB=np.where(polar[:,None],vB,vB2*0.5+vB*0.5)
base=np.where((CHN=='A')[:,None],kA,kB)
base=np.where(GL[:,None],lilac,base)
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
ink=np.array([16,24,40])/255
diff=(0.06+0.92*lam**1.1+0.2*wrap)*(0.28+0.72*ao)
shade=col*diff[...,None]+spec[...,None]*ao[...,None]+rim[...,None]*np.array([190,226,240])/255*0.30*ao[...,None]
f=(0.7+0.3*zn[...,None]);shade=shade*f+ink*(1-f)*0.6
img=np.clip(shade,0,1)
rgba=np.dstack([img*255,mask*255]).astype(np.uint8)
im=Image.fromarray(rgba,'RGBA').resize((S//2,S//2),Image.LANCZOS)
bb=im.getbbox();im=im.crop(bb);im.save(H/(__import__('os').environ.get('OUT','tfr')+'.png'));print(im.size,time.time()-t0)
