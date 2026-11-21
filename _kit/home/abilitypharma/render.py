#!/usr/bin/env python3
"""Hero render: ibrilatazar (ABTL0812), (9Z,12Z)-2-hydroxyoctadeca-9,12-dienoic acid, C18H32O3, from the PubChem 3D conformer
(CID 21158511, ibri.sdf). Ball-and-stick: spheres and sphere-swept bonds into a depth buffer, Lambert + specular + rim + AO, 2x supersampled,
transparent ground. Carbon in a pale steel blue, oxygen in AbilityPharma's logo red, hydrogen in white, depth-faded into the navy ink.
Adapted from the kit's ball-and-stick renderer.
Old docstring: : an Fe(III) triazacyclononane complex with three 2-hydroxypropyl arms (the macrocyclic iron class in
Ferric Contrast's published work), ball-and-stick, from build_mol.py coordinates (fe_tacn.sdf). Spheres and sphere-swept bonds into a depth buffer, then
Lambert + specular + rim + depth-buffer ambient occlusion, supersampled 2x, transparent ground (no box edge, DJ).
Iron in burnished rust (logo wordmark), nitrogen in the logo's drop blue, oxygen in the site red, carbon and hydrogen in bone. Output: mol.png (RGBA)."""
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
L=open(H/'ibri.sdf').read().splitlines()
na,nb=int(L[3][:3]),int(L[3][3:6])
X=[];E=[]
for l in L[4:4+na]:
    p=l.split();X.append([float(p[0]),float(p[1]),float(p[2])]);E.append(p[3])
B=[(int(l[:3])-1,int(l[3:6])-1,int(l[6:9])) for l in L[4+na:4+na+nb]]
X=np.array(X);X-=X.mean(0);E=np.array(E)
w,v=np.linalg.eigh(np.cov(X[E!='H'].T))
P=X@v[:,::-1]
def rot(a,ax):
    c,s=np.cos(a),np.sin(a)
    return {'x':np.array([[1,0,0],[0,c,-s],[0,s,c]]),'y':np.array([[c,0,s],[0,1,0],[-s,0,c]]),'z':np.array([[c,-s,0],[s,c,0],[0,0,1]])}[ax]
ang=[float(a) for a in (sys.argv[1:4] if len(sys.argv)>3 else (-0.6,0.5,0.2))]
P=P@rot(ang[0],'x').T@rot(ang[1],'y').T@rot(ang[2],'z').T
S=int(sys.argv[4]) if len(sys.argv)>4 else 2400
RAD={'C':.36,'O':.40,'H':.21}
col={'C':(176,196,224),'O':(214,40,38),'H':(240,243,248)}
prims=[]  # (centre, radius, colour)
for i in range(na): prims.append((P[i],RAD[E[i]],np.array(col[E[i]])/255))
BR=.12
for a,b,o in B:
    d=P[b]-P[a];Ld=np.linalg.norm(d);n=max(6,int(Ld/0.035))
    coord=False
    offs=[0.0] if o==1 else ([-.075,.075] if o==2 else [-.1,0,.1])
    perp=np.cross(d,[0,0,1.0]);pn=np.linalg.norm(perp);perp=perp/pn if pn>1e-6 else np.array([1.0,0,0])
    for off in offs:
        for k in range(n+1):
            t=k/n;c=P[a]+d*t+perp*off
            ca=np.array(col[E[a]])/255;cb=np.array(col[E[b]])/255
            prims.append((c,BR*(0.62 if coord else (0.75 if o>1 else 1)),(ca if t<.5 else cb)*0.92))
cen=np.array([p[0] for p in prims]);rad=np.array([p[1] for p in prims])
lo=(cen[:,:2]-rad[:,None]).min(0);hi=(cen[:,:2]+rad[:,None]).max(0)
sc=S*0.92/(hi-lo).max();off=np.array([S,S])/2-(lo+hi)/2*sc
Z=np.full((S,S),-1e9);N=np.zeros((S,S,3));C=np.zeros((S,S,3));M=np.zeros((S,S),bool)
for j in np.argsort(cen[:,2]):
    c0,r0,cc=prims[j];cx,cy=c0[:2]*sc+off;cy=S-cy;r=r0*sc
    x0,x1=int(max(cx-r,0)),int(min(cx+r+1,S));y0,y1=int(max(cy-r,0)),int(min(cy+r+1,S))
    yy,xx=np.mgrid[y0:y1,x0:x1];dx=(xx+.5-cx)/r;dy=(yy+.5-cy)/r;d2=dx*dx+dy*dy;m=d2<1
    dz=np.sqrt(np.clip(1-d2,0,1));z=c0[2]*sc+dz*r
    sub=Z[y0:y1,x0:x1];upd=m&(z>sub)
    sub[upd]=z[upd];N[y0:y1,x0:x1][upd]=np.stack([dx,-dy,dz],-1)[upd];C[y0:y1,x0:x1][upd]=cc;M[y0:y1,x0:x1][upd]=True
Zf=np.where(M,Z,Z[M].min()-3*sc)
ao=np.zeros_like(Z)
for rr in (5,12,26,52):
    b=blur(Zf,rr*S/2400);ao+=np.clip((b-Zf)/(rr*S/2400*1.5),0,1)
ao=np.clip(1-ao/2.0,0,1)
Lv=np.array([-.5,.6,.65]);Lv/=np.linalg.norm(Lv)
lam=np.clip((N*Lv).sum(-1),0,1)
Hh=Lv+np.array([0,0,1]);Hh/=np.linalg.norm(Hh);spec=np.clip((N*Hh).sum(-1),0,1)**60
fill=np.clip((N*np.array([.6,-.3,.5])).sum(-1),0,1)
rim=(1-np.clip(N[...,2],0,1))**3
zn=(Z-Z[M].min())/(Z[M].max()-Z[M].min()+1e-6);zn=np.where(M,zn,0)
ink=np.array([7,26,51])/255
sh=(0.12+0.86*lam+0.16*fill)[...,None]*C*(0.45+0.55*ao[...,None])
sh+=spec[...,None]*0.55*ao[...,None]+rim[...,None]*np.array([120,160,225])/255*0.25
k=(0.62+0.38*zn)[...,None]
sh=sh*k+ink*(1-k)
img=np.clip(sh,0,1)
rgba=np.dstack([img*255,M.astype(np.float32)*255]).astype(np.uint8)
im=Image.fromarray(rgba,'RGBA').resize((S//2,S//2),Image.LANCZOS)
im=im.crop(im.getbbox());im.save(H/(sys.argv[5] if len(sys.argv)>5 else 'mol.png'));print(im.size,na,nb)
