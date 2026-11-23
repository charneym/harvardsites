#!/usr/bin/env python3
"""Hero render: dapansutrile (OLT1177), Olatec's lead compound, 3-(methylsulfonyl)propanenitrile, CH3-SO2-CH2-CH2-C#N,
as a polished ball-and-stick model with real alpha. Geometry from standard bond lengths/angles (z-matrix, anti chain).
Orthographic ray-cast of spheres and capsule bonds, per-pixel analytic AO from the other atoms, studio key + rim light,
fresnel environment reflection. Atom colours in Olatec's greens; sulfur a muted gold, hydrogen pale."""
import numpy as np, sys, math
from PIL import Image, ImageFilter
out=sys.argv[1] if len(sys.argv)>1 else 'hero.webp'
def place(a,b,c,bond,ang,dih):
    a,b,c=map(np.array,(a,b,c)); ang,dih=math.radians(ang),math.radians(dih)
    bc=c-b; bc/=np.linalg.norm(bc); n=np.cross(b-a,bc); n/=np.linalg.norm(n); m=np.cross(n,bc)
    d=np.array([-bond*math.cos(ang),bond*math.sin(ang)*math.cos(dih),bond*math.sin(ang)*math.sin(dih)])
    return c+d[0]*bc+d[1]*m+d[2]*n
X={}; S=[]
X['S']=np.array([0.,0,0]); X['C2']=np.array([1.79,0,0]); X['C3']=np.array([1.79+1.53*math.cos(math.radians(68)),1.53*math.sin(math.radians(68)),0])
X['C4']=place(X['S'],X['C2'],X['C3'],1.46,112,180)
X['N']=place(X['C2'],X['C3'],X['C4'],1.16,179.5,180)
X['C1']=place(X['C3'],X['C2'],X['S'],1.77,104,180)
X['O1']=place(X['C3'],X['C2'],X['S'],1.44,108,60)
X['O2']=place(X['C3'],X['C2'],X['S'],1.44,108,-60)
for i,dh in enumerate((180,60,-60)): X['H1%d'%i]=place(X['C2'],X['S'],X['C1'],1.09,109.5,dh)
for i,dh in enumerate((120,-120)): X['H2%d'%i]=place(X['C4'],X['C3'],X['C2'],1.09,109,dh)
for i,dh in enumerate((120,-120)): X['H3%d'%i]=place(X['S'],X['C2'],X['C3'],1.09,109,dh)
B=[('S','C2',1),('C2','C3',1),('C3','C4',1),('C4','N',3),('S','C1',1),('S','O1',2),('S','O2',2)]+[(k[:1]+'C'+k[1] if False else 'C'+k[1],k,1) for k in X if k.startswith('H')]
names=list(X); P=np.array([X[k] for k in names]); el=[k[0] if k[0]!='C' else 'C' for k in names]
P-=P.mean(0); u,s,vt=np.linalg.svd(P); P=P@vt.T
def rot(ax,deg):
    t=math.radians(deg);c,s_=math.cos(t),math.sin(t)
    return {'x':np.array([[1,0,0],[0,c,-s_],[0,s_,c]]),'y':np.array([[c,0,s_],[0,1,0],[-s_,0,c]]),'z':np.array([[c,-s_,0],[s_,c,0],[0,0,1]])}[ax]
a=[float(v) for v in (sys.argv[2] if len(sys.argv)>2 else '-18,70,-22,24').split(',')]+[0]
P=P@rot('z',a[0]).T@rot('x',a[1]).T@rot('y',a[2]).T@rot('z',a[3]).T
idx={k:i for i,k in enumerate(names)}
R={'C':.40,'N':.40,'O':.40,'S':.52,'H':.24}
COL={'C':(.70,.80,.75),'N':(.62,.88,.80),'O':(.26,.78,.48),'S':(.86,.72,.36),'H':(.93,.95,.94)}
W,H=(int(sys.argv[3]),int(sys.argv[3])*3//4) if len(sys.argv)>3 else (1600,1200); SS=2
lo=P[:,:2].min(0)-.75; hi=P[:,:2].max(0)+.75
sc=min(W/(hi[0]-lo[0]),H/(hi[1]-lo[1]))*.96; cx,cy=(lo+hi)/2
w,h=W*SS,H*SS
XX,YY=np.meshgrid((np.arange(w)+.5)/SS,(np.arange(h)+.5)/SS)
XX=(XX-W/2)/sc+cx; YY=-(YY-H/2)/sc+cy
Z=np.full((h,w),-1e9); N=np.zeros((h,w,3),np.float32); C=np.zeros((h,w,3),np.float32); KIND=np.zeros((h,w),np.int8)
def sphere(c,r,col):
    dx=XX-c[0]; dy=YY-c[1]; d2=dx*dx+dy*dy; m=d2<r*r
    if not m.any(): return
    dz=np.sqrt(np.maximum(r*r-d2,0)); z=c[2]+dz; m&=z>Z
    Z[m]=z[m]; N[m]=np.stack([dx[m],dy[m],dz[m]],-1)/r; C[m]=col; KIND[m]=1
def cyl(p0,p1,r,col):
    # exact orthographic ray (origin (x,y,+inf), dir -z) vs infinite cylinder, clipped to segment
    d=p1-p0; L=np.linalg.norm(d); d=d/L
    ox=XX-p0[0]; oy=YY-p0[1]
    # ray: o + t*(0,0,-1); with o_z=0 relative; solve |(o+tv)-((o+tv).d)d|^2=r^2
    v=np.array([0,0,-1.]); vd=v@d; vp=v-vd*d
    od=ox*d[0]+oy*d[1]; opx=ox-od*d[0]; opy=oy-od*d[1]; opz=-od*d[2]-p0[2]*0
    A=vp@vp; Bq=2*(opx*vp[0]+opy*vp[1]+opz*vp[2]); Cq=opx*opx+opy*opy+opz*opz-r*r
    disc=Bq*Bq-4*A*Cq; m=disc>0
    t=(-Bq-np.sqrt(np.maximum(disc,0)))/(2*A)
    hz=-t  # z of hit relative to p0 plane (origin z=0 relative to p0)
    s=od+t*vd
    m&=(s>0)&(s<L)
    z=p0[2]+hz; m&=z>Z
    if not m.any(): return
    hx=ox; hy=oy; hzz=hz
    nx=hx-s*d[0]; ny=hy-s*d[1]; nz=hzz-s*d[2]
    nn=np.sqrt(nx*nx+ny*ny+nz*nz)+1e-9
    Z[m]=z[m]; N[m]=np.stack([(nx/nn)[m],(ny/nn)[m],(nz/nn)[m]],-1); C[m]=col; KIND[m]=2
BONDCOL=np.array([.55,.62,.58])
for p,q,o in B:
    A_,B_=P[idx[p]],P[idx[q]]; mid=(A_+B_)/2; rr=.085 if 'H' in (p[0],q[0]) else .11
    v=B_-A_; off=np.cross(v,[0,0,1.]); off=off/(np.linalg.norm(off)+1e-9)
    offs=[np.zeros(3)] if o==1 else ([off*.12,-off*.12] if o==2 else [np.zeros(3),off*.17,-off*.17])
    for f in offs:
        r2=rr if o==1 else .07
        cyl(A_+f,mid+f,r2,COL[el[idx[p]]]); cyl(mid+f,B_+f,r2,COL[el[idx[q]]])
for k in np.argsort(P[:,2]): sphere(P[k],R[el[k]],COL[el[k]])
hit=Z>-1e8
# 3D point and AO from other atoms (solid-angle approximation)
Pt=np.stack([XX,YY,Z],-1).astype(np.float32)
ao=np.ones((h,w),np.float32)
for k in range(len(P)):
    dv=P[k]-Pt; d=np.linalg.norm(dv,axis=-1)+1e-6; cos=np.clip((dv*N).sum(-1)/d,0,1)
    r=R[el[k]]; occ=np.where(d>r*1.02,(r*r)/(d*d)*cos,0)
    ao*=1-np.clip(occ*0.9,0,.6)
V=np.array([0,0,1.],np.float32)
def nrm(v): v=np.array(v,np.float32); return v/np.linalg.norm(v)
Lk=nrm([-.5,.62,.6]); Lr=nrm([.8,-.15,-.2]); Lf=nrm([.3,-.6,.5])
nd=np.clip((N*Lk).sum(-1),0,1); nr=np.clip((N*Lr).sum(-1),0,1); nf=np.clip((N*Lf).sum(-1),0,1)
fres=(1-np.clip(N[...,2],0,1))**3
Hk=nrm(Lk+V); spec=np.clip((N*Hk).sum(-1),0,1)**120; specw=np.clip((N*Hk).sum(-1),0,1)**18
# environment: reflect view vector, sample a soft studio gradient (bright softbox top-left, dark floor)
Rv=2*N[...,2:3]*N-V; env=np.clip(.5+.5*Rv[...,1],0,1)**2*.55+np.clip((Rv*nrm([-.6,.7,.4])).sum(-1),0,1)**8*.6
zmin,zmax=P[:,2].min()-.6,P[:,2].max()+.6; depth=np.clip((Z-zmin)/(zmax-zmin),0,1)
Cc=C
img=Cc*(0.07+0.78*nd[...,None]*ao[...,None]+0.12*nf[...,None])*ao[...,None]
img+=Cc*(env[...,None]*.35)*ao[...,None]
img+=np.array([.55,.95,.75],np.float32)*(nr*fres)[...,None]*.55
img+=(spec*1.0+specw*.09)[...,None]*ao[...,None]
img*=(0.78+0.22*depth)[...,None]
img[~hit]=0
rgb=(np.clip(img,0,1)**(1/1.15)*255).astype(np.uint8)
al=(hit*255).astype(np.uint8)
im=Image.fromarray(np.dstack([rgb,al]),'RGBA').resize((W,H),Image.LANCZOS)
bb=im.getbbox(); m=24; im=im.crop((bb[0]-m,bb[1]-m,bb[2]+m,bb[3]+m))
im.save(out,quality=92,method=6)
bb=im.getbbox(); print(out,im.size,bb)
