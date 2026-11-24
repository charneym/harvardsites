#!/usr/bin/env python3
"""Hero render (AbCon: an illustrative anti-CD6 antibody-drug conjugate like ATX101: the intact human IgG1 crystal structure PDB 1HZH, symmetrised as below, heavy chains in AbCon teal, light chains pale mint, with two linker-payloads (red drops, as in the logo; linkers pale grey) on the hinge interchain cysteine H242 of each half, illustrative geometry) (Kali: human IgG1 b12, intact antibody crystal structure PDB 1HZH; one Fab arm in Kali royal blue, the other in pale blue, Fc in silver: the IgG-like T-cell engager format) (N-Zyme: human pepsin 3A, crystal structure PDB 1PSN, viewed into its active-site cleft) (Gila: neuropeptide Y Y2 receptor with PYY(3-36), cryo-EM PDB 7YON, chains R and L; G protein and scFv omitted) (Rarefied: MALT1 329-728 with allosteric inhibitor MLT-748, PDB 6H4A; adapted from armidalabs/surf.py) (replaces the ball model): a smooth Gaussian molecular surface of the EphA2 ligand-binding domain with
agonist peptide 135E2 seated in its ephrin-binding pocket, from the 3.2 A crystal structure PDB 6B9L (Gambini, ...,
Baggio, ..., Pellecchia), the peptide series that led to Targefrin. Pure numpy: per-pixel ray samples of a sum of atomic
Gaussians, analytic normals, screen-space AO, satin shading. Receptor in pale slate, peptide in gold, alpha ground.
Args: ax ay az size [chains]. Output: epha2.png"""
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
CO=os.environ.get('COARSE')=='1'
if CO: R={'C':float(os.environ.get('CR','3.6'))}
R['K']=float(os.environ.get('KR','1.5'));R['P']=float(os.environ.get('PR','3.0'))
FCN=int(os.environ.get("FCN","236"))
xyz=[];el=[];dom=[];rn=[];rq=[];chn=[];an=[]
for l in open(H/'1hzh.pdb'):
    if l.startswith('ENDMDL'): break
    if not l.startswith('ATOM'): continue
    ch=l[21]
    if l[16] not in ' A': continue
    e=l[76:78].strip() or l[12:14].strip()[0]
    if e not in R: continue
    if CO and l[12:16].strip()!='CA': continue
    r=int(l[22:26])
    d=2 if (ch in 'HK' and r>=FCN) else (0 if ch in 'HL' else 1)
    xyz.append([float(l[30:38]),float(l[38:46]),float(l[46:54])]);el.append(e);dom.append(d);rn.append(l[17:20]);rq.append(r);chn.append(ch);an.append(l[12:16].strip())
X=np.array(xyz);DOM=np.array(dom)
# Idealised symmetric IgG from the real coordinates: half H+L (one heavy and one light chain) is copied by a 180-degree turn
# about the molecule's own pseudo two-fold (the line through the CH3 dimer centre and the hinge midpoint), so the copy's CH3
# lands on chain K's CH3; the bent b12 partner half (K+M) is dropped. Illustrative IgG-like format, as on kalitherapeutics.com.
CH=np.array(chn);AN=np.array(an);RQ0=np.array(rq)
def cen(c,lo,hi): return X[(CH==c)&(AN=='CA')&(RQ0>=lo)&(RQ0<=hi)].mean(0)
c1=(cen('H',341,480)+cen('K',341,480))/2;c2=(cen('H',230,230)+cen('K',230,230))/2
axv=(c2-c1)/np.linalg.norm(c2-c1)
def r180(p): q=p-c1;return c1+2*(q@axv)[...,None]*axv-q
half=np.isin(CH,['H','L']);XO=X.copy()
X=np.concatenate([X[half],r180(X[half])])
d0=np.where(DOM[half]==2,2,0);DOM=np.concatenate([d0,np.where(d0==2,3,1)])
el=list(np.array(el)[half])*2;rn=list(np.array(rn)[half])*2;rq=list(RQ0[half])*2
HV=np.concatenate([CH[half]=='H',CH[half]=='H'])
# AbCon: linker-payloads (vc-MMAE, as in approved ADCs) on interchain cysteines, illustrative: anchor at the Cys CA,
# pushed outward from the local protein centre; linker = 3 small beads, payload = one larger bead
PAY=[];KIND=[]
for cpy in (0,1):
  for (ch,rr) in (('H',242),):
    m=(CH==ch)&(RQ0==rr)&(AN=='CA')
    if not m.any(): continue
    a=XO[m][0] if cpy==0 else r180(XO[m])[0]
    nb=np.concatenate([XO[half],r180(XO[half])]);d=np.linalg.norm(nb-a,axis=1);loc=nb[d<16].mean(0)
    v=a-loc;v/=np.linalg.norm(v)
    for k,(dd,kd) in enumerate(((4.5,'K'),(8.0,'K'),(11.5,'K'),(15.0,'K'),(20.0,'P'))):
      PAY.append(a+v*dd);KIND.append(kd)
NP=len(PAY)
X=np.concatenate([X,np.array(PAY)]);DOM=np.concatenate([DOM,np.full(NP,4)]);HV=np.concatenate([HV,np.zeros(NP,bool)])
el=el+KIND;rn=rn+['PAY']*NP;rq=rq+[0]*NP
PP=np.zeros(len(X),bool)
X-=X[DOM<4].mean(0)
# screen up = Fc centroid -> mean of the two Fab centroids; view axis = normal of the plane of the three domains
f0=X[DOM==0].mean(0);f1=X[DOM==1].mean(0);fc=X[DOM>=2].mean(0)
up=(f0+f1)/2-fc;up/=np.linalg.norm(up)
n=np.cross(f0-fc,f1-fc);n/=np.linalg.norm(n)
xx=np.cross(up,n);xx/=np.linalg.norm(xx)
if (f0-f1)@xx>0: xx=-xx;n=-n
P=X@np.stack([xx,up,n],1)
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
NZ=int(os.environ.get("NZ","30"));DZ=(PAD+float(os.environ.get('DEP','4.2')))*sc/NZ
cut=max(3.2,float(os.environ.get('CR','3.6'))*float(os.environ.get('CUTF','2.0')))*sc
Zsurf=np.array(Zs);has=np.zeros((S,S),bool);Z0=np.array(Zs)+float(os.environ.get('ZUP','0'))*sc
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
slate=np.array([150,132,214])/255;slateD=np.array([110,92,184])/255
gold=np.array([252,248,232])/255;goldD=np.array([238,228,200])/255
polar=np.isin(RN,['ASP','GLU','LYS','ARG','HIS','ASN','GLN','SER','THR'])
ig=np.zeros(len(rq),bool)
teal=np.array([40,150,160])/255;mint=np.array([200,236,230])/255;red=np.array([236,40,40])/255
base=np.where(HV[:,None],teal,mint)*np.where(polar,1.0,0.9)[:,None]
EL=np.array(el);base[(DOM==4)&(EL=='P')]=red;base[(DOM==4)&(EL=='K')]=np.array([176,190,192])/255
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
ink=np.array([4,22,26])/255
diff=(0.06+0.92*lam**1.1+0.2*wrap)*(0.28+0.72*ao)
shade=col*diff[...,None]+spec[...,None]*ao[...,None]+rim[...,None]*np.array([150,230,222])/255*0.30*ao[...,None]
f=(0.7+0.3*zn[...,None]);shade=shade*f+ink*(1-f)*0.6
img=np.clip(shade,0,1)
rgba=np.dstack([img*255,mask*255]).astype(np.uint8)
im=Image.fromarray(rgba,'RGBA').resize((S//2,S//2),Image.LANCZOS)
bb=im.getbbox();im=im.crop(bb);im.save(H/(__import__('os').environ.get('OUT','abc')+'.png'));print(im.size,time.time()-t0)
