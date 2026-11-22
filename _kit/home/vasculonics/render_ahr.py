#!/usr/bin/env python3
# Input: curl -s https://files.rcsb.org/download/7ZUB.cif.gz | gunzip > pdb/7zub.cif   (not committed)
"""Vasculonics hero: the human aryl hydrocarbon receptor (AhR) PAS-B ligand-binding domain, residues 271-427, chain D of
PDB 7ZUB (cryo-EM, indirubin-bound Hsp90-XAP2-AHR complex; Gruszczyk et al., Nat Commun 2022), space-filled (heavy atoms,
van der Waals radii). Protein in the Vasculonics logo blue, residues lining the ligand pocket (within 4.5 A of indirubin) in
the logo red, indirubin itself bright. Orientation chosen automatically to show the pocket mouth. Z-buffer sphere splats,
Lambert + specular + rim + depth-buffer ambient occlusion, 2x supersampled, real alpha (no box edge). Output: ahr.png"""
import numpy as np, pathlib, sys
from PIL import Image
H=pathlib.Path(__file__).resolve().parent
L=open(H/'pdb'/'7zub.cif').read().splitlines()
hdr=[l.strip() for l in L if l.startswith('_atom_site.')];ix={h.split('.')[1]:i for i,h in enumerate(hdr)}
X=[];EL=[];RES=[];LIG=[]
for l in L:
    if not l.startswith(('ATOM ','HETATM ')):continue
    f=l.split()
    if f[ix['auth_asym_id']]!='D' or f[ix['pdbx_PDB_model_num']]!='1':continue
    el=f[ix['type_symbol']]
    if el=='H':continue
    comp=f[ix['label_comp_id']]
    if f[0]=='HETATM' and comp!='JY6':continue
    X.append([float(f[ix['Cartn_x']]),float(f[ix['Cartn_y']]),float(f[ix['Cartn_z']])]);EL.append(el);RES.append(int(f[ix['auth_seq_id']]));LIG.append(comp=='JY6')
X=np.array(X);EL=np.array(EL);RES=np.array(RES);LIG=np.array(LIG)
lig=X[LIG];d=np.sqrt(((X[:,None,:]-lig[None])**2).sum(-1)).min(1)
pres=set(RES[(d<4.5)&~LIG]);POCK=np.array([r in pres for r in RES])&~LIG
print('atoms',len(X),'ligand',LIG.sum(),'pocket residues',sorted(pres))
X-=X[~LIG].mean(0)
VDW={'C':1.7,'N':1.55,'O':1.52,'S':1.8}
R=np.array([VDW.get(e,1.7) for e in EL])
def col(i):
    e=EL[i]
    if LIG[i]:return {'C':(255,214,206),'N':(255,120,128),'O':(255,90,97)}.get(e,(255,200,200))
    if POCK[i]:return {'C':(234,40,48),'N':(200,22,32),'O':(255,92,98),'S':(255,170,90)}.get(e,(234,40,48))
    return {'C':(122,142,214),'N':(76,98,184),'O':(176,190,240),'S':(230,214,150)}.get(e,(122,142,214))
C0=np.array([col(i) for i in range(len(X))])/255
def rotm(a,b,c):
    ca,sa,cb,sb,cc,sc=np.cos(a),np.sin(a),np.cos(b),np.sin(b),np.cos(c),np.sin(c)
    Rx=np.array([[1,0,0],[0,ca,-sa],[0,sa,ca]]);Ry=np.array([[cb,0,sb],[0,1,0],[-sb,0,cb]]);Rz=np.array([[cc,-sc,0],[sc,cc,0],[0,0,1]])
    return Rz@Ry@Rx
def vis(P,S=220):
    lo=(P[:,:2]-R[:,None]).min(0);hi=(P[:,:2]+R[:,None]).max(0);sc=S*.9/(hi-lo).max();off=S/2-(lo+hi)/2*sc
    Z=np.full((S,S),-1e9);ID=np.full((S,S),-1)
    for j in np.argsort(P[:,2]):
        cx,cy=P[j,:2]*sc+off;r=R[j]*sc
        x0,x1=int(max(cx-r,0)),int(min(cx+r+1,S));y0,y1=int(max(cy-r,0)),int(min(cy+r+1,S))
        yy,xx=np.mgrid[y0:y1,x0:x1];d2=((xx+.5-cx)**2+(yy+.5-cy)**2)/(r*r);m=d2<1;z=P[j,2]*sc+np.sqrt(np.clip(1-d2,0,1))*r
        s=Z[y0:y1,x0:x1];u=m&(z>s);s[u]=z[u];ID[y0:y1,x0:x1][u]=j
    ids=ID[ID>=0];return (POCK[ids].mean(), LIG[ids].mean(), (ID>=0).mean())
v=X[LIG].mean(0);v=v/np.linalg.norm(v);z=np.array([0,0,1.0]);ax=np.cross(v,z);sn=np.linalg.norm(ax);cs=v@z
K=np.array([[0,-ax[2],ax[1]],[ax[2],0,-ax[0]],[-ax[1],ax[0],0]])/(sn+1e-9);RA=np.eye(3)+sn*K+(1-cs)*K@K
TILT=tuple(float(a) for a in sys.argv[1:4]) if len(sys.argv)>3 else (-0.42,0.38,0.5)
RM=rotm(*TILT)@RA;best=TILT
P=X@RM.T
# cutaway: open a window through the atoms in front of the ligand so the pocket and indirubin show
lc=P[LIG].mean(0);rr=np.sqrt(((P[:,:2]-lc[:2])**2).sum(1));CUTR=float(sys.argv[5]) if len(sys.argv)>5 else 9.5
keep=LIG|~((rr<CUTR)&(P[:,2]>P[LIG][:,2].max()-1.2))
P=P[keep];R=R[keep];C0=C0[keep];LIG=LIG[keep];POCK=POCK[keep];print('cut',(~keep).sum(),'atoms')

S=int(sys.argv[4]) if len(sys.argv)>4 else 2600
lo=(P[:,:2]-R[:,None]).min(0);hi=(P[:,:2]+R[:,None]).max(0);sc=S*.9/(hi-lo).max();off=np.array([S,S])/2-(lo+hi)/2*sc
Z=np.full((S,S),-1e9);N=np.zeros((S,S,3));C=np.zeros((S,S,3));M=np.zeros((S,S),bool)
for j in np.argsort(P[:,2]):
    cx,cy=P[j,:2]*sc+off;cy=S-cy;r=R[j]*sc
    x0,x1=int(max(cx-r,0)),int(min(cx+r+1,S));y0,y1=int(max(cy-r,0)),int(min(cy+r+1,S))
    yy,xx=np.mgrid[y0:y1,x0:x1];dx=(xx+.5-cx)/r;dy=(yy+.5-cy)/r;d2=dx*dx+dy*dy;m=d2<1
    dz=np.sqrt(np.clip(1-d2,0,1));z=P[j,2]*sc+dz*r
    s=Z[y0:y1,x0:x1];u=m&(z>s);s[u]=z[u];N[y0:y1,x0:x1][u]=np.stack([dx,-dy,dz],-1)[u];C[y0:y1,x0:x1][u]=C0[j];M[y0:y1,x0:x1][u]=True
def _box(a,r,ax):
    a=np.moveaxis(a,ax,0);p=np.concatenate([np.repeat(a[:1],r+1,0),a,np.repeat(a[-1:],r,0)]);c=np.cumsum(p,0)
    return np.moveaxis((c[2*r+1:]-c[:-2*r-1])/(2*r+1),0,ax)
def blur(a,s):
    r=max(1,int(s*.9))
    for _ in range(3):a=_box(_box(a,r,0),r,1)
    return a
Zf=np.where(M,Z,Z[M].min()-4*sc);ao=np.zeros_like(Z)
for rr in (6,14,30,60):
    b=blur(Zf,rr*S/2600);ao+=np.clip((b-Zf)/(rr*S/2600*1.6),0,1)
ao=np.clip(1-ao/2.2,0,1)
Lv=np.array([-.45,.6,.66]);Lv/=np.linalg.norm(Lv);lam=np.clip((N*Lv).sum(-1),0,1)
Hh=Lv+np.array([0,0,1]);Hh/=np.linalg.norm(Hh);spec=np.clip((N*Hh).sum(-1),0,1)**40
fill=np.clip((N*np.array([.6,-.3,.5])).sum(-1),0,1);rim=(1-np.clip(N[...,2],0,1))**3
zn=np.where(M,(Z-Z[M].min())/(Z[M].max()-Z[M].min()+1e-6),0)
ink=np.array([10,13,27])/255
sh=(0.10+0.85*lam+0.18*fill)[...,None]*C*(0.42+0.58*ao[...,None])
sh+=spec[...,None]*0.35*ao[...,None]+rim[...,None]*np.array([150,170,240])/255*0.18
k=(0.55+0.45*zn)[...,None];sh=sh*k+ink*(1-k)
rgba=np.dstack([np.clip(sh,0,1)*255,M.astype(np.float32)*255]).astype(np.uint8)
im=Image.fromarray(rgba,'RGBA').resize((S//2,S//2),Image.LANCZOS);im=im.crop(im.getbbox())
pad=int(max(im.size)*.06);out=Image.new('RGBA',(im.width+2*pad,im.height+2*pad),(10,13,27,0));out.paste(im,(pad,pad))
out.save(H/'ahr.png');print(out.size,'angles',[round(x,3) for x in best])
