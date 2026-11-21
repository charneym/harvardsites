#!/usr/bin/env python3
"""Hero render (HOME_BRIEF option c): a macrocyclic peptide on its protein target, atom by atom, from the
2.0 A crystal structure PDB 9Y6C (RCSB): peptide Ra30303, a cyclic peptide closed through a xylene bridge
between two cysteines and carrying non-natural amino acids, bound to the TE domain of human complement C5.
Space-filling, Lambert + rim + specular + depth AO. Target protein in the logo's slate, peptide in the logo's
sky blue, bridge + non-natural residues in pale ice. Transparent ground. Output: mac.png (RGBA)."""
import numpy as np, pathlib, sys
from PIL import Image
H = pathlib.Path(__file__).resolve().parent
def _box(a,r,ax):
    a=np.moveaxis(a,ax,0);p=np.concatenate([np.repeat(a[:1],r+1,0),a,np.repeat(a[-1:],r,0)]);c=np.cumsum(p,0)
    return np.moveaxis((c[2*r+1:]-c[:-2*r-1])/(2*r+1),0,ax)
def blur(a,s):
    r=max(1,int(s*0.9))
    for _ in range(3): a=_box(_box(a,r,0),r,1)
    return a
R={'C':1.70,'N':1.55,'O':1.52,'S':1.80}
cols=None;xyz=[];el=[];ch=[];comp=[];occ=[]
for l in open(H/'9y6c.cif'):
    if l.startswith('_atom_site.'):
        cols=(cols or [])+[l.strip().split('.',1)[1]];continue
    if cols and l.startswith(('ATOM','HETATM')):
        f=l.split();d=dict(zip(cols,f))
        if d['label_comp_id'] in ('HOH','GOL'): continue
        if d.get('pdbx_PDB_model_num','1')!='1': continue
        if d.get('label_alt_id','.') not in ('.','A'): continue
        e=d['type_symbol']
        if e not in R: continue
        xyz.append([float(d['Cartn_x']),float(d['Cartn_y']),float(d['Cartn_z'])]);el.append(e)
        ch.append(d['auth_asym_id']);comp.append(d['label_comp_id']);occ.append(float(d['occupancy']))
X=np.array(xyz);E=np.array(el);CH=np.array(ch);CO=np.array(comp)
PEP=CH=='B'
NN=np.isin(CO,['8VH','TBG','TRN','A1CTT','NVA','ACE','NH2'])
print('atoms',len(X),'peptide',PEP.sum(),'nonnat',NN.sum())
c0=X[PEP].mean(0);X=X-X.mean(0)
w,v=np.linalg.eigh(np.cov(X.T));V=v[:,::-1];P=X@V
def rot(a,ax):
    c,s=np.cos(a),np.sin(a)
    return {'x':np.array([[1,0,0],[0,c,-s],[0,s,c]]),'y':np.array([[c,0,s],[0,1,0],[-s,0,c]]),'z':np.array([[c,-s,0],[s,c,0],[0,0,1]])}[ax]
# orient so the peptide faces the camera (its centroid toward +z) then apply user tilt
pc=P[PEP].mean(0);
ang=[float(a) for a in (sys.argv[1:4] if len(sys.argv)>3 else (0,0,0))]
a=np.arctan2(pc[0],pc[2]);P=P@rot(-a,'y').T
pc=P[PEP].mean(0);b=np.arctan2(pc[1],np.hypot(pc[0],pc[2]));P=P@rot(b,'x').T
P=P@rot(ang[0],'x').T@rot(ang[1],'y').T@rot(ang[2],'z').T
S=int(sys.argv[4]) if len(sys.argv)>4 else 2000
rad=np.array([R[e] for e in E])
lo=(P[:,:2]-rad[:,None]).min(0);hi=(P[:,:2]+rad[:,None]).max(0)
sc=S*0.92/(hi-lo).max();off=np.array([S,S])/2-(lo+hi)/2*sc
Z=np.full((S,S),-1e9);N=np.zeros((S,S,3));ID=np.full((S,S),-1)
for i in np.argsort(P[:,2]):
    cx,cy=P[i,:2]*sc+off;cy=S-cy;r=rad[i]*sc
    x0,x1=int(max(cx-r,0)),int(min(cx+r+1,S));y0,y1=int(max(cy-r,0)),int(min(cy+r+1,S))
    yy,xx=np.mgrid[y0:y1,x0:x1];dx=(xx+.5-cx)/r;dy=(yy+.5-cy)/r;d2=dx*dx+dy*dy;m=d2<1
    dz=np.sqrt(np.clip(1-d2,0,1));z=P[i,2]*sc+dz*r
    sub=Z[y0:y1,x0:x1];upd=m&(z>sub)
    sub[upd]=z[upd];N[y0:y1,x0:x1][upd]=np.stack([dx,-dy,dz],-1)[upd];ID[y0:y1,x0:x1][upd]=i
mask=ID>=0
Zf=np.where(mask,Z,Z[mask].min()-4*sc)
ao=np.zeros_like(Z)
for rr in (6,14,30,60):
    b2=blur(Zf,rr);ao+=np.clip((b2-Zf)/(rr*1.6),0,1)
ao=np.clip(1-ao/2.2,0,1)
L=np.array([-.38,.60,.78]);L/=np.linalg.norm(L)
lam=np.clip((N*L).sum(-1),0,1)
Hh=L+np.array([0,0,1]);Hh/=np.linalg.norm(Hh);spec=np.clip((N*Hh).sum(-1),0,1)**38
rim=(1-np.clip(N[...,2],0,1))**3
slate=np.array([158,205,205])/255;slateD=np.array([112,168,174])/255
sky=np.array([46,170,255])/255;skyD=np.array([20,120,200])/255;ice=np.array([214,238,255])/255
base=np.where(((E=='N')|(E=='O'))[:,None],slateD,slate)
base=np.where(PEP[:,None],np.where(((E=='N')|(E=='O'))[:,None],skyD,sky),base)
base=np.where((PEP&NN)[:,None],ice,base)
base=np.where((PEP&(E=='S'))[:,None],np.array([255,226,150])/255*0.9+ice*0.1,base)
col=base[np.clip(ID,0,None)]
isp=PEP[np.clip(ID,0,None)]&mask
zn=(Z-Z[mask].min())/(Z[mask].max()-Z[mask].min()+1e-6);zn=np.where(mask,zn,0)
ink=np.array([10,34,48])/255
shade=(0.16+0.88*lam*(0.55+0.45*ao))[...,None]*col*(0.55+0.45*ao[...,None])
shade+=spec[...,None]*0.32*ao[...,None]+rim[...,None]*col*0.22
k=(0.6+0.4*zn[...,None]);shade=shade*k+ink*(1-k)*0.6
# the target recedes a little, the peptide stays bright
shade=np.where(isp[...,None],shade*1.10,shade)
img=np.clip(shade*1.28,0,1)
rgba=np.dstack([img*255,mask.astype(np.float32)*255]).astype(np.uint8)
im=Image.fromarray(rgba,'RGBA').resize((S//2,S//2),Image.LANCZOS)
im=im.crop(im.getbbox());im.save(H/'mac.png');print(im.size)
