#!/usr/bin/env python3
"""ZyVersa hero: a crafted render (HOME_BRIEF update 2c) of the active ingredient of VAR 200, 2-hydroxypropyl-beta-
cyclodextrin: seven glucose units bound into a cone-shaped ring with a hydrophobic cavity (as zyversa.com describes it).
Drawn as a space-filling molecular surface (smooth union of atom spheres), sphere-traced in numpy, shaded as a
translucent blue material with a soft key light, fresnel rim and ambient occlusion. Rendered on black; field.js draws it
additively onto the ink, so no image edge exists (DP/DJ). Output: hero.webp"""
import numpy as np
from PIL import Image
N=1100;rng=np.random.default_rng(7)
# ---- atoms: 7 glucose units around a truncated cone (wide secondary rim up, narrow primary rim down)
A=[];TY=[]
for k in range(7):
    t=2*np.pi*k/7;s=2*np.pi/7
    er=np.array([np.cos(t),0,np.sin(t)]);et=np.array([-np.sin(t),0,np.cos(t)]);ey=np.array([0,1.,0])
    c=er*.98
    def at(p,rad,o=0):A.append((*p,rad));TY.append(o)
    for j in range(6):                              # pyranose ring (5 C + ring O), tilted like the cone wall
        f=2*np.pi*j/6+.3;at(c+.27*(np.cos(f)*et+np.sin(f)*(.86*ey-.5*er)),.165 if j else .155,0 if j else 1)
    at(c+.50*ey+.16*et+.10*er,.16,1);at(c+.47*ey-.17*et+.12*er,.16,1)   # O2, O3 hydroxyls on the wide rim
    at(c-.40*ey-.08*et-.17*er,.17);at(c-.60*ey-.02*et-.22*er,.15,1)   # C6, O6 on the narrow rim
    t2=t+s/2;at(np.array([np.cos(t2),0,np.sin(t2)])*.92+np.array([0,-.06,0]),.155,1)  # glycosidic O4 bridge
    if k in (0,3,5):                                # short hydroxypropyl stubs at some O2s
        o=c+.50*ey+.16*et+.10*er;d=(.5*ey+.75*er+.25*et);d/=np.linalg.norm(d)
        for q in (1,2):at(o+d*.24*q,.15)
A=np.array(A,np.float32);A[:,3]*=1.32;TY=np.array(TY)
# tilt the ring towards the camera so the cavity reads
def rot(ax,a):
    c,s=np.cos(a),np.sin(a)
    return {'x':np.array([[1,0,0],[0,c,-s],[0,s,c]]),'z':np.array([[c,-s,0],[s,c,0],[0,0,1]]),'y':np.array([[c,0,s],[0,1,0],[-s,0,c]])}[ax]
R=rot('z',.12)@rot('x',-.78)@rot('y',.3)
P=(A[:,:3]@R.T).astype(np.float32);P[:,:2]-=(P[:,:2].max(0)+P[:,:2].min(0))/2;RAD=A[:,3]
KS=.022
def sdf(p):
    d=np.linalg.norm(p[:,None,:]-P[None],axis=2)-RAD[None]
    # polynomial smooth-min over all atoms (exp form)
    m=d.min(1,keepdims=True)
    return (m[:,0]-KS*np.log(np.exp(-(d-m)/KS).sum(1))).astype(np.float32)
# ---- camera
F=5.2;fov=.40
ys,xs=np.mgrid[0:N,0:N].astype(np.float32)
u=(xs+.5)/N*2-1;v=1-(ys+.5)/N*2
ro=np.array([0,0,F],np.float32)
rd=np.stack([u*fov,v*fov,-np.ones_like(u)],-1).reshape(-1,3);rd/=np.linalg.norm(rd,axis=1,keepdims=True)
T=np.full(len(rd),F-1.9,np.float32);hit=np.zeros(len(rd),bool);alive=np.ones(len(rd),bool)
for i in range(110):
    idx=np.where(alive)[0]
    if not len(idx):break
    p=ro+rd[idx]*T[idx,None];d=sdf(p)
    T[idx]+=d*.9
    h=d<1e-3;hit[idx[h]]=True;alive[idx[h]]=False
    far=T[idx]>F+2.2;alive[idx[far]]=False
print('hits',hit.sum())
hi=np.where(hit)[0];p=ro+rd[hi]*T[hi,None]
e=2e-3;nrm=np.stack([sdf(p+np.array([e,0,0],np.float32))-sdf(p-np.array([e,0,0],np.float32)),
                     sdf(p+np.array([0,e,0],np.float32))-sdf(p-np.array([0,e,0],np.float32)),
                     sdf(p+np.array([0,0,e],np.float32))-sdf(p-np.array([0,0,e],np.float32))],1)
nrm/=np.linalg.norm(nrm,axis=1,keepdims=True)
ao=np.ones(len(p),np.float32)
for j,hh in enumerate([.04,.09,.16,.26,.4]):
    ao-=(hh-sdf(p+nrm*hh))*(.55/(j+1))
ao=np.clip(ao,0,1)
# translucency: how much material lies behind the surface along the view ray (thin = glows)
th=np.zeros(len(p),np.float32)
for hh in [.08,.18,.3,.45]:
    th+=(sdf(p+rd[hi]*hh)<0)*.25
L=np.array([-.55,.7,.6]);L/=np.linalg.norm(L)
L2=np.array([.8,-.2,.35]);L2/=np.linalg.norm(L2)
V=-rd[hi]
ndl=(nrm@L);wrap=np.clip((ndl+.35)/1.35,0,1)
hv=(L+V);hv/=np.linalg.norm(hv,axis=1,keepdims=True);spec=np.clip((nrm*hv).sum(1),0,1)**40
fres=(1-np.clip((nrm*V).sum(1),0,1))**3
back=np.clip(nrm@L2,0,1)
near=np.argmin(np.linalg.norm(p[:,None,:]-P[None],axis=2)-RAD[None],1);ox=TY[near].astype(np.float32)[:,None]
zf=np.clip((p[:,2]+1.3)/2.6,0,1)[:,None]          # depth: far atoms recede into the ink
deep=np.array([.012,.05,.13]);mid=np.array([.06,.36,.70]);midC=np.array([.10,.24,.42]);lite=np.array([.55,.80,1.0]);grn=np.array([.52,.77,.25])
dif=np.clip(ndl,0,1)
col=deep[None]*(.5+.5*ao[:,None])
col+=(mid[None]*ox+midC[None]*(1-ox))*((.15+.85*dif)*ao**1.4)[:,None]*.85
col+=lite[None]*(fres*(.25+.75*ao))[:,None]*.55
col+=mid[None]*((1-th)*.22*ao)[:,None]
col+=grn[None]*(back*ao*.16)[:,None]
spec2=np.clip((nrm*hv).sum(1),0,1)**18
col+=np.array([1,1,1])[None]*(spec*.85+spec2*.12)[:,None]*ao[:,None]
col*=(.35+.65*zf)
img=np.zeros((N*N,3),np.float32);img[hi]=col
img=img.reshape(N,N,3)
# soft supersampled edges: downsample 1100 -> 860 gives antialiasing; then a whisper of bloom
im=Image.fromarray((np.clip(img,0,1)**(1/1.1)*255).astype(np.uint8)).resize((860,860),Image.LANCZOS)
from PIL import ImageFilter
bl=np.array(im.filter(ImageFilter.GaussianBlur(14))).astype(float)
out=np.clip(np.array(im).astype(float)+bl*.18,0,255).astype(np.uint8)
Image.fromarray(out).save('hero.webp',quality=90)
Image.fromarray(out).save('/tmp/claude-0/-home-user-harvardsites/da4ee922-a908-5d2a-a90a-0786824d7523/scratchpad/hero.png')
