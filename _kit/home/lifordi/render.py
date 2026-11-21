#!/usr/bin/env python3
"""Hero render (HOME_BRIEF update option c): an intact IgG antibody, the crystal structure PDB 1IGT (Harris et al. 1997,
IgG2a mAb231), drawn atom by atom as a space-filling model, with eight glucocorticoid payloads (LFD-200 carries 8 per antibody, Lifordi PR 2026-11-09) (dexamethasone, RDKit
conformer) on short linkers at surface lysines of the heavy chains, as an illustrative antibody-drug conjugate.
Offline numpy renderer: sphere z-buffer, Lambert + Blinn specular + rim light, screen-space ambient occlusion, depth
fog; transparent ground (real alpha). Usage: python3 render.py 1igt.pdb out.png"""
import sys, numpy as np
from PIL import Image, ImageFilter
pdb, out = sys.argv[1], sys.argv[2]
R = {'C':1.7,'N':1.55,'O':1.52,'S':1.8}
P=[];col=[];rad=[];kind=[]
heavy_res={}
for l in open(pdb):
    if l[:6] not in ('ATOM  ','HETATM'): continue
    if l[16] not in ' A': continue
    el=(l[76:78].strip() or l[12:14].strip()[0]).upper()
    if el=='H': continue
    ch=l[21]; rn=l[17:20]; ri=int(l[22:26]); x=[float(l[30:38]),float(l[38:46]),float(l[46:54])]
    P.append(x); rad.append(R.get(el,1.7))
    if l[:6]=='HETATM': kind.append('g')
    elif ch in 'AC': kind.append('L')
    else: kind.append('H')
    if l[:6]=='ATOM  ' and ch in 'BD' and rn=='LYS' and l[12:16].strip()=='NZ': heavy_res[(ch,ri)]=len(P)-1
    if l[:6]=="ATOM  " and ch in "AC" and rn=="LYS" and l[12:16].strip()=="NZ": heavy_res[(ch,ri)]=len(P)-1
P=np.array(P); rad=np.array(rad); kind=np.array(kind)
# orientation: Fab1 (A + B<=225), Fab2 (C + D<=225), Fc (B,D >=240)
ids=[];chs=[]
for l in open(pdb):
    if l[:6] in ('ATOM  ','HETATM') and l[16] in ' A' and (l[76:78].strip() or l[12:14].strip()[0]).upper()!='H':
        ids.append(int(l[22:26])); chs.append(l[21])
ids=np.array(ids); chs=np.array(chs)
f1=P[(chs=='A')|((chs=='B')&(ids<=225))].mean(0); f2=P[(chs=='C')|((chs=='D')&(ids<=225))].mean(0)
fc=P[((chs=='B')|(chs=='D'))&(ids>=240)].mean(0)
cen=(f1+f2+fc)/3
yv=(f1+f2)/2-fc; yv/=np.linalg.norm(yv)
xv=f2-f1; xv-=yv*np.dot(xv,yv); xv/=np.linalg.norm(xv)
zv=np.cross(xv,yv)
M=np.stack([xv,yv,zv])
Q=(P-cen)@M.T
# payloads: dexamethasone conformer on a short linker at four exposed heavy-chain lysines
from rdkit import Chem, RDLogger; RDLogger.DisableLog('rdApp.*')
from rdkit.Chem import AllChem
dex=Chem.AddHs(Chem.MolFromSmiles('C[C@@H]1C[C@H]2[C@@H]3CCC4=CC(=O)C=C[C@@]4([C@]3([C@H](C[C@@]2([C@]1(C(=O)CO)O)C)O)F)C'))
AllChem.EmbedMolecule(dex,randomSeed=7); AllChem.MMFFOptimizeMolecule(dex)
dpos=np.array(dex.GetConformer().GetPositions()); dsym=[a.GetSymbol() for a in dex.GetAtoms()]
keep=[i for i,s in enumerate(dsym) if s!='H']; dpos=dpos[keep]; dsym=[dsym[i] for i in keep]; dpos-=dpos.mean(0)
c0=Q.mean(0)
cand=[]
for k,i in heavy_res.items():
    v=Q[i]-c0; d=np.linalg.norm(Q-Q[i],axis=1); exposure=(d<10).sum()
    cand.append((exposure,k,i))
cand.sort()
chosen=[];
for e,k,i in cand:
    if Q[i][2]<-2: continue          # keep payloads on the visible face
    if all(np.linalg.norm(Q[i]-Q[j])>21 for j in chosen): chosen.append(i)
    if len(chosen)==8: break
print('payload lysines',[ (k) for e,k,i in cand if i in chosen])
extra=[];ecol=[];erad=[]
rng=np.random.default_rng(3)
for i in chosen:
    n=Q[i]-Q[np.linalg.norm(Q-Q[i],axis=1)<12].mean(0); n/=np.linalg.norm(n)
    # linker: 4 atoms, zig-zag, out along the local normal
    t=np.cross(n,[0.3,0.2,0.93]); t/=np.linalg.norm(t)
    for s in range(1,5): extra.append(Q[i]+n*1.25*s+t*(0.45 if s%2 else -0.45)); ecol.append('k'); erad.append(1.7)
    # random rotation of the steroid, centred 7 A beyond the linker
    a=rng.normal(size=3); a/=np.linalg.norm(a); th=rng.uniform(0,6.28)
    K=np.array([[0,-a[2],a[1]],[a[2],0,-a[0]],[-a[1],a[0],0]]); Rm=np.eye(3)+np.sin(th)*K+(1-np.cos(th))*K@K
    for p,s in zip(dpos@Rm.T,dsym): extra.append(Q[i]+n*(1.25*4+5.2)+p); ecol.append('d'+s); erad.append(R.get(s,1.47) if s!='F' else 1.47)
Q=np.vstack([Q,np.array(extra)]); rad=np.concatenate([rad,erad]); kind=np.concatenate([kind,ecol])
# a gentle 3D turn so the Y reads as an object
def rot(ax,deg):
    t=np.radians(deg);c,s=np.cos(t),np.sin(t)
    return {'x':np.array([[1,0,0],[0,c,-s],[0,s,c]]),'y':np.array([[c,0,s],[0,1,0],[-s,0,c]]),'z':np.array([[c,-s,0],[s,c,0],[0,0,1]])}[ax]
Q=Q@rot('y',-22).T@rot('x',12).T@rot('z',-6).T
# raster
W=1900; pad=26
lo=(Q[:,:2]-rad[:,None]).min(0); hi=(Q[:,:2]+rad[:,None]).max(0)
sc=(W-2*pad)/(hi[0]-lo[0]); Hh=int((hi[1]-lo[1])*sc+2*pad)
X=(Q[:,0]-lo[0])*sc+pad; Y=(hi[1]-Q[:,1])*sc+pad; Z=Q[:,2]*sc; RR=rad*sc
zb=np.full((Hh,W),-1e9); nx=np.zeros((Hh,W)); ny=np.zeros((Hh,W)); nz=np.zeros((Hh,W)); idb=np.full((Hh,W),-1)
for i in np.argsort(Z):
    r=RR[i]; x0,x1=int(X[i]-r),int(X[i]+r)+1; y0,y1=int(Y[i]-r),int(Y[i]+r)+1
    xs=np.arange(x0,x1); ys=np.arange(y0,y1); gx,gy=np.meshgrid(xs-X[i],ys-Y[i])
    d2=r*r-gx*gx-gy*gy; m=d2>0
    if not m.any(): continue
    dz=np.sqrt(np.where(m,d2,0)); z=Z[i]+dz
    sub=zb[y0:y1,x0:x1]; up=m&(z>sub)
    sub[up]=z[up]; nx[y0:y1,x0:x1][up]=(gx/r)[up]; ny[y0:y1,x0:x1][up]=(gy/r)[up]; nz[y0:y1,x0:x1][up]=(dz/r)[up]; idb[y0:y1,x0:x1][up]=i
alpha=(idb>=0).astype(float)
# palette (Lifordi): heavy chains pale periwinkle from the logo navy, light chains a deeper brand blue, glycans olive, payload gold
base={'H':(0.80,0.84,0.95),'L':(0.42,0.53,0.86),'g':(0.62,0.72,0.42),'k':(0.95,0.80,0.45),'dC':(0.96,0.69,0.13),'dO':(1.0,0.50,0.22),'dF':(0.86,0.93,0.55)}
cols=np.array([base.get(k,(0.96,0.69,0.13)) for k in kind])
C=np.zeros((Hh,W,3)); v=idb>=0; C[v]=cols[idb[v]]
# lighting
Ld=np.array([-0.45,-0.6,0.66]); Ld/=np.linalg.norm(Ld)
N=np.stack([nx,-ny,nz],-1)*np.array([1,1,1]); N[...,1]*=-1  # image y down
ndl=np.clip(nx*Ld[0]+ny*Ld[1]+nz*Ld[2],0,1)
Hv=Ld+np.array([0,0,1]); Hv/=np.linalg.norm(Hv)
spec=np.clip(nx*Hv[0]+ny*Hv[1]+nz*Hv[2],0,1)**28
rim=(1-nz)**3
# SSAO: depth vs blurred depth
zf=np.where(v,zb,zb[v].min()-40)
from scipy.ndimage import gaussian_filter
ao=np.zeros_like(zf)
for rr in (6,16,40):
    bl=gaussian_filter(zf,rr)
    ao+=np.clip((bl-zf)/(rr*2.2),0,1)
ao=np.clip(1-ao/2.0,0.18,1)
zn=(zb-zb[v].min())/(zb[v].max()-zb[v].min()); zn=np.where(v,zn,0)
lit=(0.20+0.82*ndl)*ao
pay=np.isin(kind[np.clip(idb,0,None)],['k','dC','dO','dF'])&v
img=C*lit[...,None]+spec[...,None]*0.38*ao[...,None]+rim[...,None]*np.array([0.25,0.35,0.7])*0.35
# depth fog toward the ink (back atoms recede)
ink=np.array([0.05,0.08,0.2])
fog=(0.55*(1-zn))[...,None]
img=img*(1-fog)+ink*fog
img=np.where(pay[...,None],img*1.08+np.array([0.05,0.03,0])*ao[...,None],img)
img=np.clip(img,0,1)
o=np.dstack([img,alpha])
o=(o*255).astype(np.uint8)
im=Image.fromarray(o,'RGBA').resize((W//2,Hh//2),Image.LANCZOS)
im.save(out); print('size',im.size)
