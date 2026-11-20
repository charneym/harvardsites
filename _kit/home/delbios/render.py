#!/usr/bin/env python3
"""Hero render for Delbios (HOME_BRIEF update 2026-11-20, option c): a crafted render of the real product idea,
nanoGLA: the enzyme alpha-galactosidase A (GLA) carried by a nanoliposome. Illustrative, not to scale.
- Liposome: a unilamellar lipid bilayer built bead by bead (head groups and two tails per lipid), cut away
  over one quarter so the bilayer and the lumen show.
- Enzyme: human alpha-galactosidase A homodimer, every heavy atom from its crystal structure (RCSB PDB 1R46).
Shading: Lambert + specular + rim + depth-buffer ambient occlusion + depth fog, on a transparent ground.
Output: hero.png (RGBA). Usage: python3 -I render.py [size]"""
import numpy as np, pathlib, sys
from PIL import Image
H = pathlib.Path(__file__).resolve().parent
rng = np.random.default_rng(7)
def _box(a,r,ax):
    a=np.moveaxis(a,ax,0);p=np.concatenate([np.repeat(a[:1],r+1,0),a,np.repeat(a[-1:],r,0)]);c=np.cumsum(p,0)
    return np.moveaxis((c[2*r+1:]-c[:-2*r-1])/(2*r+1),0,ax)
def blur(a,s):
    r=max(1,int(s*0.9))
    for _ in range(3): a=_box(_box(a,r,0),r,1)
    return a
def rot(a,ax):
    c,s=np.cos(a),np.sin(a)
    return {'x':np.array([[1,0,0],[0,c,-s],[0,s,c]]),'y':np.array([[c,0,s],[0,1,0],[-s,0,c]]),'z':np.array([[c,-s,0],[s,c,0],[0,0,1]])}[ax]
def fib(n):
    i=np.arange(n)+.5;phi=np.arccos(1-2*i/n);th=np.pi*(1+5**.5)*i
    return np.stack([np.cos(th)*np.sin(phi),np.sin(th)*np.sin(phi),np.cos(phi)],1)

# colours (logo teal #25947a, logo dot blue #249bc1)
HEAD=np.array([92,178,150])/255; HEAD2=np.array([60,150,124])/255; TAIL=np.array([206,196,160])/255
ENZ=np.array([40,160,205])/255; ENZ2=np.array([28,118,168])/255
pos=[];rad=[];col=[]
def add(P,r,c):
    pos.append(np.asarray(P,float).reshape(-1,3));n=len(pos[-1])
    rad.append(np.full(n,r) if np.isscalar(r) else np.asarray(r));col.append(np.broadcast_to(np.asarray(c),(n,3)).copy())

# ---- liposome (nm). Outer radius 30, bilayer ~4.4 nm
RO,RI=30.0,25.6
def look(d):                                  # rotation that turns direction d toward the camera (+z), keeping +y roughly up
    z=np.asarray(d,float);z/=np.linalg.norm(z);x=np.cross([0,1.0,0],z);x/=np.linalg.norm(x);y=np.cross(z,x)
    return np.stack([x,y,z])
view=rot(0.10,'z')@look((1.0,0.5,0.72))
def cut(U):                                   # remove one octant (x>0, y>0, z>0), which faces the camera
    return ~((U[:,0]>0)&(U[:,1]>0)&(U[:,2]>0))
for R,area,c,sgn in ((RO,.62,HEAD,-1),(RI,.62,HEAD2,1)):
    n=int(4*np.pi*R*R/area);U=fib(n);U=U+rng.normal(0,.004,U.shape);U/=np.linalg.norm(U,axis=1)[:,None]
    rr=R+rng.normal(0,.12,n)
    P=U*rr[:,None];keep=cut(P);P=P[keep];Uk=U[keep];rk=rr[keep]
    shade=np.clip(1+rng.normal(0,.05,(len(P),1)),.85,1.15)
    add(P,.46,np.clip(c*shade,0,1))
    # tails, only where the cut exposes them (lipids within 2.4 nm of the cut faces)
    V=P
    near=((np.abs(V[:,0])<2.2)&(V[:,1]>-2.2)&(V[:,2]>-2.2))|((np.abs(V[:,1])<2.2)&(V[:,0]>-2.2)&(V[:,2]>-2.2))|((np.abs(V[:,2])<2.2)&(V[:,0]>-2.2)&(V[:,1]>-2.2))
    for k in np.where(near)[0]:
        u=Uk[k];t1=np.cross(u,[0,0,1.0]);t1/=np.linalg.norm(t1)+1e-9
        for side in (-.22,.22):
            for j in range(1,6):
                add(P[k]+sgn*u*(.5+j*.36)+t1*side*(1+.15*np.sin(j+k)),.25,TAIL*(.85+.03*j))

# ---- enzymes: GLA homodimer from PDB 1R46, heavy atoms
R_={'C':1.70,'N':1.55,'O':1.52,'S':1.80}
X=[];E=[];CH=[]
for l in open(H/'1r46.pdb'):
    if l.startswith('ATOM'):
        e=l[76:78].strip()
        if e in R_: X.append([float(l[30:38]),float(l[38:46]),float(l[46:54])]);E.append(e);CH.append(l[21])
X=np.array(X)/10.0;X-=X.mean(0);ar=np.array([R_[e] for e in E])/10.0;CH=np.array(CH)
ecol=np.where((CH=='A')[:,None],ENZ,ENZ2)
ecol=np.where(np.array([e in 'NO' for e in E])[:,None],ecol*.88,ecol)
ES=1.35                                        # enzymes drawn a little larger than true scale, for legibility
# placements: inside the lumen (seen through the cut) and at the membrane
for (p,a) in (((6.0,7.0,5.0),(0.3,1.1,0.2)),((-13.0,-1.0,1.0),(1.2,0.1,2.0)),((12.0,-6.0,-10.0),(2.1,0.7,0.9)),((-9.0,10.0,-7.0),(0.5,2.3,1.4)),
              ((-10.0,-9.0,10.0),(0.9,1.7,0.4)),((3.0,-14.0,6.0),(2.6,.4,1.1))):
    Rm=rot(a[0],'x')@rot(a[1],'y')@rot(a[2],'z');P=(X@Rm.T)*ES+np.array(p)   # p in liposome space
    if np.linalg.norm(P.mean(0))+5>RI: continue
    add(P,ar*ES,ecol)

P=np.concatenate(pos);RA=np.concatenate(rad);C=np.concatenate(col)
P=P@view.T
print('beads',len(P))
S=int(sys.argv[1]) if len(sys.argv)>1 else 2400
lo=(P[:,:2]-RA[:,None]).min(0);hi=(P[:,:2]+RA[:,None]).max(0)
sc=S*0.94/(hi-lo).max();off=np.array([S,S])/2-(lo+hi)/2*sc
Z=np.full((S,S),-1e9);N=np.zeros((S,S,3),np.float32);ID=np.full((S,S),-1)
for i in np.argsort(P[:,2]):
    cx,cy=P[i,:2]*sc+off;cy=S-cy;r=RA[i]*sc
    x0,x1=int(max(cx-r,0)),int(min(cx+r+1,S));y0,y1=int(max(cy-r,0)),int(min(cy+r+1,S))
    if x1<=x0 or y1<=y0: continue
    yy,xx=np.mgrid[y0:y1,x0:x1];dx=(xx+.5-cx)/r;dy=(yy+.5-cy)/r;d2=dx*dx+dy*dy;m=d2<1
    dz=np.sqrt(np.clip(1-d2,0,1));z=P[i,2]*sc+dz*r
    sub=Z[y0:y1,x0:x1];upd=m&(z>sub)
    sub[upd]=z[upd];N[y0:y1,x0:x1][upd]=np.stack([dx,-dy,dz],-1)[upd];ID[y0:y1,x0:x1][upd]=i
mask=ID>=0
Zf=np.where(mask,Z,Z[mask].min()-6*sc)
ao=np.zeros_like(Z)
for rr in (5,12,28,64,120):
    b=blur(Zf,rr);ao+=np.clip((b-Zf)/(rr*1.5),0,1)
ao=np.clip(1-ao/2.4,0,1)
L=np.array([.55,.6,.6]);L/=np.linalg.norm(L)
lam=np.clip((N*L).sum(-1),0,1)
Hh=L+np.array([0,0,1]);Hh/=np.linalg.norm(Hh);spec=np.clip((N*Hh).sum(-1),0,1)**42
rim=(1-np.clip(N[...,2],0,1))**3
col=C[np.clip(ID,0,None)]
zn=(Z-Z[mask].min())/(Z[mask].max()-Z[mask].min()+1e-6);zn=np.where(mask,zn,0)
ink=np.array([11,24,22])/255
shade=(0.08+0.84*lam*(0.5+0.5*ao))[...,None]*col*(0.5+0.5*ao[...,None])
shade+=spec[...,None]*0.26*ao[...,None]+rim[...,None]*col*0.18
f=(0.5+0.5*zn[...,None]);shade=shade*f+ink*(1-f)*0.7
img=np.clip(shade,0,1)
rgba=np.dstack([img*255,mask*255.0]).astype(np.uint8)
im=Image.fromarray(rgba,'RGBA').resize((S//2,S//2),Image.LANCZOS)
im=im.crop(im.getbbox());im.save(H/'hero.png');print(im.size)
