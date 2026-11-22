#!/usr/bin/env python3
"""Hero render for GreenMark: a hydroxyapatite crystallite, the mineral of tooth enamel that CrystLCare particles
deliver calcium and phosphate to rebuild. Built from the published crystal structure of hydroxyapatite
(Kay, Young & Posner 1964; space group P6_3/m, a=9.418 A, c=6.884 A), cut as a hexagonal prism (the habit of enamel
crystallites, long axis = c), space-filling with ionic radii, ray-cast with a light-space shadow map, screen-space
ambient occlusion and a shallow depth of field. Output: real alpha PNG/WebP (no box edge).
usage: render_hero.py out.webp W H"""
import sys, numpy as np
from PIL import Image, ImageFilter
out=sys.argv[1]; W,H=int(sys.argv[2]),int(sys.argv[3]); SS=2
a,c=9.418,6.884
SITES=[('Ca',(1/3,2/3,0.0014)),('Ca',(0.2466,0.9931,0.25)),('P',(0.3982,0.3689,0.25)),
       ('O',(0.3272,0.4837,0.25)),('O',(0.5876,0.4651,0.25)),('O',(0.3426,0.2584,0.0705)),('Oh',(0,0,0.2008))]
OPS=[lambda x,y,z:(x,y,z),lambda x,y,z:(-y,x-y,z),lambda x,y,z:(-x+y,-x,z),lambda x,y,z:(-x,-y,z+.5),
     lambda x,y,z:(y,-x+y,z+.5),lambda x,y,z:(x-y,x,z+.5),lambda x,y,z:(-x,-y,-z),lambda x,y,z:(y,-x+y,-z),
     lambda x,y,z:(x-y,x,-z),lambda x,y,z:(x,y,-z+.5),lambda x,y,z:(-y,x-y,-z+.5),lambda x,y,z:(-x+y,-x,-z+.5)]
cell=[]
for el,(x,y,z) in SITES:
    seen=[]
    for op in OPS:
        p=np.mod(np.array(op(x,y,z)),1.0)
        if any(np.allclose(np.minimum(abs(p-q),1-abs(p-q)),0,atol=1e-3) for q in seen): continue
        seen.append(p)
    if el=='Oh': seen=seen[::2]; el='O'      # OH sites are half occupied: keep one per column pair
    cell+= [(el,p) for p in seen]
print('atoms/cell',len(cell))
A=np.array([[a,0,0],[-a/2,a*np.sqrt(3)/2,0],[0,0,c]])
R_HEX=float(sys.argv[4]) if len(sys.argv)>4 else 15.5; HALF=float(sys.argv[5]) if len(sys.argv)>5 else 21.0
P=[];E=[]
for i in range(-8,9):
  for j in range(-8,9):
    for k in range(-8,9):
      for el,f in cell:
        r=(f+np.array([i,j,k]))@A
        # hexagonal prism: facets normal to the a-directions (the (100) faces of the crystal)
        hx=max(abs(r[0]*np.cos(t)+r[1]*np.sin(t)) for t in (np.pi/6,np.pi/2,5*np.pi/6))
        if hx<=R_HEX and abs(r[2])<=HALF: P.append(r);E.append(el)
P=np.array(P);E=np.array(E); P-=P.mean(0)
print('atoms',len(P))
RAD={'Ca':1.20,'P':0.95,'O':1.22}
COL={'Ca':(0xf4,0xee,0xe0),'O':(0xdc,0xe3,0xe0),'P':(0x7f,0xc2,0x41)}
r=np.array([RAD[e] for e in E]); col=(np.array([COL[e] for e in E],float)/255.)**2.2
def Rm(ax,deg):
    t=np.radians(deg);C,S=np.cos(t),np.sin(t)
    return {'x':np.array([[1,0,0],[0,C,-S],[0,S,C]]),'y':np.array([[C,0,S],[0,1,0],[-S,0,C]]),'z':np.array([[C,-S,0],[S,C,0],[0,0,1]])}[ax]
# long axis lies diagonally, tipped toward the viewer so the hexagonal end face reads
ROT=[float(v) for v in (sys.argv[6:9] if len(sys.argv)>8 else (-30,-75,24))]
M=Rm('z',ROT[0])@Rm('x',ROT[1])@Rm('y',ROT[2])
P=P@M.T
w,h=W*SS,H*SS
mn=(P[:,:2]-r[:,None]).min(0); mx=(P[:,:2]+r[:,None]).max(0)
sc=min(w*.88/(mx[0]-mn[0]),h*.88/(mx[1]-mn[1])); cen=(mn+mx)/2
X=(P[:,0]-cen[0])*sc+w/2; Y=-(P[:,1]-cen[1])*sc+h/2; Z=P[:,2]*sc; RR=r*sc
def _box(a,r,ax):
    r=int(r)
    if r<1: return a
    pad=[(0,0)]*a.ndim; pad[ax]=(r+1,r); p=np.pad(a,pad,mode='edge'); cs=np.cumsum(p,axis=ax,dtype=np.float64)
    n=a.shape[ax]; hi=np.take(cs,np.arange(2*r+1,2*r+1+n),axis=ax); lo=np.take(cs,np.arange(0,n),axis=ax)
    return ((hi-lo)/(2*r+1)).astype(np.float32)
def gblur(a,sig):
    # three box passes approximate a gaussian of sigma sig
    r=max(1,int(round(np.sqrt(12*sig*sig/3+1)/2)))
    for _ in range(3): a=_box(_box(a,r,0),r,1)
    return a
def zbuf(X,Y,Z,RR,w,h):
    zb=np.full((h,w),-1e9,np.float32); idb=np.full((h,w),-1,np.int32)
    for i in np.argsort(Z):
        x0,x1=int(max(0,X[i]-RR[i]-1)),int(min(w,X[i]+RR[i]+2)); y0,y1=int(max(0,Y[i]-RR[i]-1)),int(min(h,Y[i]+RR[i]+2))
        if x1<=x0 or y1<=y0: continue
        yy,xx=np.mgrid[y0:y1,x0:x1]; d2=(xx+.5-X[i])**2+(yy+.5-Y[i])**2; m=d2<RR[i]**2
        z=Z[i]+np.sqrt(np.maximum(RR[i]**2-d2,0)); sub=zb[y0:y1,x0:x1]; upd=m&(z>sub)
        sub[upd]=z[upd]; idb[y0:y1,x0:x1][upd]=i
    return zb,idb
zb,idb=zbuf(X,Y,Z,RR,w,h)
cov=idb>=0; ys,xs=np.nonzero(cov); ids=idb[cov]
px=xs+.5; py=ys+.5; pz=zb[cov]
N=np.stack([(px-X[ids])/RR[ids],-(py-Y[ids])/RR[ids],(pz-Z[ids])/RR[ids]],1); N/=np.linalg.norm(N,axis=1,keepdims=True)
Wp=np.stack([px,-py,pz],1)                       # world coords (y up), same scale for every axis
L=np.array([-0.5,0.66,0.56]); L/=np.linalg.norm(L)
# shadow map: orthographic view along L
up=np.array([0,0,1.]); ux=np.cross(up,L); ux/=np.linalg.norm(ux); uy=np.cross(L,ux)
Ac=np.stack([X,-Y,Z],1)
sx=Ac@ux; sy=Ac@uy; sz=Ac@L
SM=2048; s0=np.array([sx.min()-RR.max(),sy.min()-RR.max()]); sk=(SM-4)/max(sx.max()-sx.min(),sy.max()-sy.min())/1.02
lzb,_=zbuf((sx-s0[0])*sk+2,(sy-s0[1])*sk+2,sz*sk,RR*sk,SM,SM)
qx=((Wp@ux)-s0[0])*sk+2; qy=((Wp@uy)-s0[1])*sk+2; qz=(Wp@L)*sk
sh=np.zeros(len(px),np.float32); n=0
for ox in (-2.5,0,2.5):
  for oy in (-2.5,0,2.5):
    ix=np.clip((qx+ox).astype(int),0,SM-1); iy=np.clip((qy+oy).astype(int),0,SM-1)
    sh+=(qz>=lzb[iy,ix]-RR.mean()*sk*.9); n+=1
sh/=n
# screen-space AO from the depth buffer: compare with blurred depth at several radii
zf=np.where(cov,zb,np.nan); zfill=np.where(cov,zb,np.nanmin(zf)-RR.mean()*6).astype(np.float32)
ao=np.ones(len(px),np.float32)
for rad,wt in ((RR.mean()*.7,.45),(RR.mean()*1.8,.35),(RR.mean()*4.5,.25)):
    bl=gblur(zfill,rad)
    occ=np.clip((bl[cov]-pz)/(RR.mean()*1.6),0,1); ao-=occ*wt
ao=np.clip(ao,.2,1)**1.1
V=np.array([0,0,1.])
diff=np.clip((N@L+.2)/1.2,0,1)
Hh=L+V; Hh/=np.linalg.norm(Hh); spec=np.clip(N@Hh,0,1)**60*.6
F2=np.array([.75,-.3,.45]); F2/=np.linalg.norm(F2); fill=np.clip(N@F2,0,1)
rim=(1-np.clip(N@V,0,1))**3
base=col[ids]
lit=base*(.05+.92*diff[:,None]*(.18+.82*sh[:,None]))*ao[:,None]+base*fill[:,None]*.14*ao[:,None]*np.array([.85,1,.95])
lit+=spec[:,None]*sh[:,None]*np.array([1,.98,.92])
lit+=rim[:,None]*np.array([.30,.50,.36])*.45*ao[:,None]**.5
zn=(pz-pz.min())/(pz.max()-pz.min()+1e-6); lit*=(.5+.5*zn)[:,None]
img=np.zeros((h,w,4),np.float32); img[ys,xs,:3]=np.clip(lit,0,1)**(1/2.2); img[ys,xs,3]=1
# depth of field
za=np.full((h,w),-1.,np.float32); za[ys,xs]=zn
pm=img.copy(); pm[...,:3]*=pm[...,3:]
def blur(arr,rad):
    o=np.zeros_like(arr)
    for k in range(4): o[...,k]=gblur(arr[...,k],rad)
    return o
FOC=.62; MAXB=4.5; nb=10; edges=np.linspace(0,1.0001,nb+1); acc=np.zeros_like(pm)
for b in range(nb):
    m=(za>=edges[b])&(za<edges[b+1])
    if not m.any(): continue
    lay=pm*m[...,None]; zc=(edges[b]+edges[b+1])/2; rad=MAXB*SS*min(1,abs(zc-FOC)/.5)**1.4
    if rad>.6: lay=blur(lay,rad)
    acc=lay+acc*(1-lay[...,3:])
al=acc[...,3:]; rgb=np.where(al>1e-4,acc[...,:3]/np.maximum(al,1e-4),0)
im=Image.fromarray((np.clip(np.concatenate([rgb,al],2),0,1)*255).astype(np.uint8),'RGBA').resize((W,H),Image.LANCZOS)
im.save(out,quality=90) if out.endswith('.webp') else im.save(out); print('ok',im.size)
