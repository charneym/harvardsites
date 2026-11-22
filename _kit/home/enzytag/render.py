#!/usr/bin/env python3
"""Hero render: thymoligase, a substrate-tailored peptiligase variant (PDB 5OX2; Schmidt et al., Org. Biomol. Chem. 2018, one of the
references on EnzyTag's technology page). Every heavy atom of the protein chain as a van der Waals sphere into a depth buffer, then
Lambert + specular + rim + multi-scale depth-buffer ambient occlusion, supersampled 2x, on a transparent ground (no box edge, DJ/DP).
Colour runs along the chain from the N- to the C-terminus through the logo ribbon's cyan, violet and magenta.
Usage: render.py rx ry rz size out.png"""
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
X=[];E=[];RI=[]
for l in open(H/'5ox2.pdb'):
    if l.startswith('ATOM') and l[21]=='A' and l[16] in ' A':
        el=l[76:78].strip() or l[12:14].strip()
        if el=='H': continue
        X.append([float(l[30:38]),float(l[38:46]),float(l[46:54])]);E.append(el);RI.append(int(l[22:26]))
X=np.array(X);E=np.array(E);RI=np.array(RI)
X-=X.mean(0)
TRI=np.isin(RI,[32,64,221])&~np.isin(E,['N','C','O'])|(np.isin(RI,[32,64,221])&np.array([False]*len(E)))
SC=np.isin(RI,[32,64,221])
# turn the catalytic triad (Asp32, His64, Cys221) toward the viewer
a=X[SC].mean(0);a/=np.linalg.norm(a);zt=np.array([0,0,1.0]);ax=np.cross(a,zt);sn=np.linalg.norm(ax);cs=a@zt
if sn>1e-6:
    ax/=sn;K=np.array([[0,-ax[2],ax[1]],[ax[2],0,-ax[0]],[-ax[1],ax[0],0]]);Rm=np.eye(3)+sn*K+(1-cs)*K@K
else: Rm=np.eye(3)
P=X@Rm.T
def rot(a,ax):
    c,s=np.cos(a),np.sin(a)
    return {'x':np.array([[1,0,0],[0,c,-s],[0,s,c]]),'y':np.array([[c,0,s],[0,1,0],[-s,0,c]]),'z':np.array([[c,-s,0],[s,c,0],[0,0,1]])}[ax]
ang=[float(a) for a in (sys.argv[1:4] if len(sys.argv)>3 else (0.3,0.4,0.0))]
P=P@rot(ang[0],'x').T@rot(ang[1],'y').T@rot(ang[2],'z').T
S=int(sys.argv[4]) if len(sys.argv)>4 else 2400
RAD={'C':1.7,'N':1.55,'O':1.52,'S':1.8}
# logo ribbon: cyan -> violet -> magenta along the chain
stops=[(0,(70,200,232)),(.5,(126,62,176)),(1,(232,44,118))]
u=(RI-RI.min())/(RI.max()-RI.min())
def grad(t):
    for (a,ca),(b,cb) in zip(stops,stops[1:]):
        if t<=b:
            k=(t-a)/(b-a);k=k*k*(3-2*k);return np.array(ca)*(1-k)+np.array(cb)*k
    return np.array(stops[-1][1])
col=np.array([grad(t) for t in u])/255
# heteroatoms slightly lighter, so the surface keeps a fine grain
col=np.where((E=='O')[:,None],np.clip(col*1.12+.04,0,1),col);col=np.where((E=='N')[:,None],np.clip(col*1.06+.03,0,1),col)
col[SC]=np.array([255,167,55])/255  # catalytic triad in the site's orange
rad=np.array([RAD.get(e,1.7) for e in E])
lo=(P[:,:2]-rad[:,None]).min(0);hi=(P[:,:2]+rad[:,None]).max(0)
sc=S*0.94/(hi-lo).max();off=np.array([S,S])/2-(lo+hi)/2*sc
Z=np.full((S,S),-1e9);N=np.zeros((S,S,3));C=np.zeros((S,S,3));M=np.zeros((S,S),bool)
for j in np.argsort(P[:,2]):
    c0=P[j];cx,cy=c0[:2]*sc+off;cy=S-cy;r=rad[j]*sc
    x0,x1=int(max(cx-r,0)),int(min(cx+r+1,S));y0,y1=int(max(cy-r,0)),int(min(cy+r+1,S))
    yy,xx=np.mgrid[y0:y1,x0:x1];dx=(xx+.5-cx)/r;dy=(yy+.5-cy)/r;d2=dx*dx+dy*dy;m=d2<1
    dz=np.sqrt(np.clip(1-d2,0,1));z=c0[2]*sc+dz*r
    sub=Z[y0:y1,x0:x1];upd=m&(z>sub)
    sub[upd]=z[upd];N[y0:y1,x0:x1][upd]=np.stack([dx,-dy,dz],-1)[upd];C[y0:y1,x0:x1][upd]=col[j];M[y0:y1,x0:x1][upd]=True
Zf=np.where(M,Z,Z[M].min()-6*sc)
ao=np.zeros_like(Z)
for rr in (4,10,22,48,96):
    b=blur(Zf,rr*S/2400);ao+=np.clip((b-Zf)/(rr*S/2400*1.4),0,1)
ao=np.clip(1-ao/2.6,0,1)
Lv=np.array([-.45,.62,.64]);Lv/=np.linalg.norm(Lv)
lam=np.clip((N*Lv).sum(-1),0,1)
Hh=Lv+np.array([0,0,1]);Hh/=np.linalg.norm(Hh);spec=np.clip((N*Hh).sum(-1),0,1)**48
fill=np.clip((N*np.array([.6,-.3,.5])).sum(-1),0,1)
rim=(1-np.clip(N[...,2],0,1))**3
zn=(Z-Z[M].min())/(Z[M].max()-Z[M].min()+1e-6);zn=np.where(M,zn,0)
ink=np.array([14,11,29])/255
sh=(0.16+0.80*lam+0.18*fill)[...,None]*C*(0.32+0.68*ao[...,None])
sh+=spec[...,None]*0.32*ao[...,None]+rim[...,None]*np.array([90,200,235])/255*0.16
k=(0.5+0.5*zn)[...,None]
sh=sh*k+ink*(1-k)
img=np.clip(sh,0,1)
# soft alpha at the silhouette (half a supersampled pixel), so the edge antialiases on the ink
rgba=np.dstack([img*255,M.astype(np.float32)*255]).astype(np.uint8)
im=Image.fromarray(rgba,'RGBA').resize((S//2,S//2),Image.LANCZOS)
im=im.crop(im.getbbox());im.save(H/(sys.argv[5] if len(sys.argv)>5 else 'prot.png'));print(im.size,len(E))
