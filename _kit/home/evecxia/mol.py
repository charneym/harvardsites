#!/usr/bin/env python3
"""Hero render: the 5-HTP molecule (5-hydroxytryptophan, the active compound in EVX-101/EVX-301) as glossy glass
ball-and-stick, on black, for additive compositing over the page ink. Geometry: RDKit MMFF conformer (htp.json)."""
import json, sys, numpy as np
from PIL import Image, ImageFilter
D=json.load(open(sys.argv[1])); out=sys.argv[2]
A=D['A']; B=D['B']
P=np.array([a[1:] for a in A],float); S=[a[0] for a in A]
P-=P.mean(0)
# principal axes -> image plane (largest spread along x, then y)
u,s,vt=np.linalg.svd(P-P.mean(0)); P=P@vt.T
def rot(ax,deg):
    t=np.radians(deg);c,s_=np.cos(t),np.sin(t)
    if ax=='x': return np.array([[1,0,0],[0,c,-s_],[0,s_,c]])
    if ax=='y': return np.array([[c,0,s_],[0,1,0],[-s_,0,c]])
    return np.array([[c,-s_,0],[s_,c,0],[0,0,1]])
a3=[float(x) for x in (sys.argv[3].split(',') if len(sys.argv)>3 else '0,0,0'.split(','))]
P=P@rot('z',a3[0]).T@rot('x',a3[1]).T@rot('y',a3[2]).T
R={'C':.42,'N':.44,'O':.44,'H':.25}
COL={'C':(0.74,0.90,0.94),'N':(0.30,0.66,1.0),'O':(0.36,0.86,0.46),'H':(0.88,0.94,0.96)}
W,H=1500,1160; SS=2
lo=P[:,:2].min(0)-0.8; hi=P[:,:2].max(0)+0.8
sc=min(W/(hi[0]-lo[0]),H/(hi[1]-lo[1]))
cx=(lo[0]+hi[0])/2; cy=(lo[1]+hi[1])/2
w,h=W*SS,H*SS
xs=(np.arange(w)+.5)/SS; ys=(np.arange(h)+.5)/SS
X=(xs-W/2)/sc+cx; Y=-((ys-H/2)/sc)+cy
XX,YY=np.meshgrid(X,Y)
Z=np.full((h,w),-1e9); N=np.zeros((h,w,3)); C=np.zeros((h,w,3)); K=np.zeros((h,w))  # K: kind (1 atom, 2 bond)
def sphere(c,r,col):
    dx=XX-c[0]; dy=YY-c[1]; d2=dx*dx+dy*dy; m=d2<r*r
    dz=np.sqrt(np.maximum(r*r-d2,0)); z=c[2]+dz
    m&=z>Z; Z[m]=z[m]
    n=np.stack([dx,dy,dz],-1)/r; N[m]=n[m]; C[m]=col; K[m]=1
def cyl(a,b,r,col):
    # orthographic ray along -z: solve for closest approach to axis; approximate as tube with depth
    ab=b-a; L2=ab[:2]@ab[:2]
    if L2<1e-9: return
    t=((XX-a[0])*ab[0]+(YY-a[1])*ab[1])/L2
    m=(t>=0)&(t<=1)
    px=a[0]+t*ab[0]; py=a[1]+t*ab[1]
    d=np.hypot(XX-px,YY-py); m&=d<r
    pz=a[2]+t*ab[2]
    dz=np.sqrt(np.maximum(r*r-d*d,0)); z=pz+dz
    m&=z>Z; Z[m]=z[m]
    # normal perpendicular to the axis in screen
    perp=np.array([-ab[1],ab[0]])/np.sqrt(L2)
    sgn=((XX-px)*perp[0]+(YY-py)*perp[1])/r
    n=np.stack([sgn*perp[0],sgn*perp[1],dz/r],-1); n/=np.linalg.norm(n,axis=-1,keepdims=True)+1e-9
    N[m]=n[m]; C[m]=col; K[m]=2
for i,j,o in B:
    a,b=P[i],P[j]; mid=(a+b)/2
    rr=.07 if 'H' in (S[i],S[j]) else .09
    if o==2:
        v=b-a; off=np.cross(v,[0,0,1.]); off=off/ (np.linalg.norm(off)+1e-9)*.11
        for q in (off,-off):
            cyl(a+q,mid+q,.07,COL[S[i]]); cyl(mid+q,b+q,.07,COL[S[j]])
    else:
        cyl(a,mid,rr,COL[S[i]]); cyl(mid,b,rr,COL[S[j]])
for k in np.argsort(P[:,2]):
    sphere(P[k],R[S[k]],COL[S[k]])
hit=Z>-1e8
V=np.array([0,0,1.])
Lk=np.array([-.55,.6,.58]); Lk/=np.linalg.norm(Lk)
Lf=np.array([.7,-.2,.4]); Lf/=np.linalg.norm(Lf)
nd=np.clip((N*Lk).sum(-1),0,1); nf=np.clip((N*Lf).sum(-1),0,1)
fres=(1-np.clip(N[...,2],0,1))**2.6
Hk=Lk+V; Hk/=np.linalg.norm(Hk); spec=np.clip((N*Hk).sum(-1),0,1)**90
Hf=Lf+V; Hf/=np.linalg.norm(Hf); spec2=np.clip((N*Hf).sum(-1),0,1)**40
zmin,zmax=P[:,2].min()-.5,P[:,2].max()+.5
depth=np.clip((Z-zmin)/(zmax-zmin),0,1)
# glass: dim transmitted body tint, bright fresnel rim, sharp specular; depth falloff for atmosphere
Lc=np.array([.45,-.5,.74]); Lc/=np.linalg.norm(Lc)
caus=np.clip((N*Lc).sum(-1),0,1)**7
body=C*(0.05+0.16*nd[...,None]+0.05*nf[...,None])
rim=C*(fres**0.8)[...,None]*1.25
img=body+rim+C*caus[...,None]*0.55+spec[...,None]*1.0+spec2[...,None]*np.array([.35,.6,.9])*.22
img*=(0.45+0.55*depth)[...,None]
img[~hit]=0
im=Image.fromarray((np.clip(img,0,1)**(1/1.1)*255).astype(np.uint8)).resize((W,H),Image.LANCZOS)
# faint bloom
g=np.asarray(im.filter(ImageFilter.GaussianBlur(18))).astype(float)
a=np.asarray(im).astype(float)+g*0.35
im=Image.fromarray(np.clip(a,0,255).astype(np.uint8))
im.save(out,quality=90)
print(out,im.size)
