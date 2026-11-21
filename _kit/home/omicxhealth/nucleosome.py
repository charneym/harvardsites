#!/usr/bin/env python3
"""OmicXHealth hero: a space-filling model of a nucleosome core particle (PDB 1KX5, 1.9 A crystal structure, Davey et al. 2002),
the unit in which most cell-free DNA circulates in blood (cfDNA fragments of ~167 bp are DNA that was wrapped around one histone
octamer). Rendered atom by atom and shaded like a material model (Lambert + rim + specular + depth ambient occlusion): the
147 bp of DNA in the brand's blue (backbone pale, bases deeper), the eight histones in muted slate so the wrap reads first.
Transparent ground, so it sits on the ink with no box edge. Usage: python3 nucleosome.py out.png [S] [ax ay az]"""
import numpy as np, sys
from PIL import Image
def _box(a,r,ax):
    a=np.moveaxis(a,ax,0);p=np.concatenate([np.repeat(a[:1],r+1,0),a,np.repeat(a[-1:],r,0)]);c=np.cumsum(p,0)
    return np.moveaxis((c[2*r+1:]-c[:-2*r-1])/(2*r+1),0,ax)
def blur(a,s):
    r=max(1,int(s*0.9))
    for _ in range(3): a=_box(_box(a,r,0),r,1)
    return a
OUT=sys.argv[1] if len(sys.argv)>1 else 'nuc.png'
S=int(sys.argv[2]) if len(sys.argv)>2 else 2400
ang=[float(a) for a in sys.argv[3:6]] if len(sys.argv)>5 else [0.62,0.0,0.35]
R={'C':1.70,'N':1.55,'O':1.52,'P':1.80,'S':1.80}
xyz=[];el=[];kind=[];chain=[]
BBN={'P','OP1','OP2',"O5'","C5'","C4'","O4'","C3'","O3'","C2'","C1'"}
for l in open('1kx5.pdb'):
    if not l.startswith('ATOM'): continue
    e=l[76:78].strip() or l[12:14].strip()[0]
    if e not in R: continue
    ch=l[21];n=l[12:16].strip()
    xyz.append([float(l[30:38]),float(l[38:46]),float(l[46:54])]);el.append(e);chain.append(ch)
    kind.append(0 if ch in 'IJ' and n in BBN else 1 if ch in 'IJ' else 2)
X=np.array(xyz);K=np.array(kind);E=np.array(el);CH=np.array(chain)
X-=X[K<2].mean(0)
# superhelix axis = least-variance axis of the DNA
w,v=np.linalg.eigh(np.cov(X[K<2].T));V=v[:,::-1];P=X@V
# drop the disordered histone tails that leave the particle (keep the globular octamer the DNA wraps)
rr_=np.hypot(P[:,0],P[:,1]);keep=(K<2)|((rr_<46)&(np.abs(P[:,2])<34))
P=P[keep];K=K[keep];E=E[keep];CH=CH[keep]
def rot(a,ax):
    c,s=np.cos(a),np.sin(a)
    return {'x':np.array([[1,0,0],[0,c,-s],[0,s,c]]),'y':np.array([[c,0,s],[0,1,0],[-s,0,c]]),'z':np.array([[c,-s,0],[s,c,0],[0,0,1]])}[ax]
P=P@rot(ang[0],'x').T@rot(ang[1],'y').T@rot(ang[2],'z').T
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
Zf=np.where(mask,Z,Z[mask].min()-6*sc)
ao=np.zeros_like(Z)
for rr in (6,14,30,64):
    b=blur(Zf,rr*S/2400);ao+=np.clip((b-Zf)/(rr*S/2400*1.6),0,1)
ao=np.clip(1-ao/2.2,0,1)
L=np.array([-.5,.55,.68]);L/=np.linalg.norm(L)
lam=np.clip((N*L).sum(-1),0,1)
Hh=L+np.array([0,0,1]);Hh/=np.linalg.norm(Hh);spec=np.clip((N*Hh).sum(-1),0,1)**40
rim=(1-np.clip(N[...,2],0,1))**3
c=lambda h:np.array([int(h[i:i+2],16) for i in (1,3,5)])/255
bbc=c('#bcd6f7');basec=c('#2f7ae0');basec2=c('#1d5fbf')
# histones: H3/H4 (A,B,E,F) and H2A/H2B (C,D,G,H) in two close slates
h34=c('#4a5a74');h2=c('#5a6880')
col_atom=np.zeros((len(E),3))
col_atom[K==0]=bbc
col_atom[K==1]=np.where(((E[K==1]=='N')|(E[K==1]=='O'))[:,None],basec2,basec)
hi_=K==2
col_atom[hi_]=np.where(np.isin(CH[hi_],list('ABEF'))[:,None],h34,h2)
col_atom[(K==0)&(E=='P')]=c('#e3eeff')
col=col_atom[np.clip(ID,0,None)]
zn=(Z-Z[mask].min())/(Z[mask].max()-Z[mask].min()+1e-6);zn=np.where(mask,zn,0)
ink=c('#081022')
isd=(K[np.clip(ID,0,None)]<2)[...,None]
shade=(0.12+0.80*lam*(0.55+0.45*ao))[...,None]*col*(0.55+0.45*ao[...,None])
shade+=spec[...,None]*np.where(isd,0.34,0.14)*ao[...,None]+rim[...,None]*col*0.25
f=(0.58+0.42*zn[...,None])
shade=shade*f+ink*(1-f)*0.7
img=np.clip(shade,0,1)
rgba=np.dstack([img*255,mask.astype(np.float32)*255]).astype(np.uint8)
im=Image.fromarray(rgba,'RGBA').resize((S//2,S//2),Image.LANCZOS)
im=im.crop(im.getbbox());im.save(OUT);print(im.size)
