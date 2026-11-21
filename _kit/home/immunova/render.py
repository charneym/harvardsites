#!/usr/bin/env python3
"""Hero render for Immunova (HOME_BRIEF update 2026-11-20, option c): a crafted render of the company's own platform,
the nanolipogel (NLG): per the Yale/Immunova patent family, a lipid bilayer surrounding a hydrogel core that holds
one or more active agents. Illustrative, not to scale.
- Shell: a lipid bilayer built bead by bead (head groups and two tails per lipid), cut away over one octant so the
  bilayer and the core show.
- Core: a crosslinked polymer hydrogel network (bead chains between crosslink nodes) filling the lumen.
- Cargo: generic protein molecules (drawn from the crystal structure of human interleukin-2, RCSB PDB 1M47, as a
  representative cytokine) and small-molecule drug beads held in the mesh. Illustrative only.
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

# colours (Immunova logo green #76B643, logo lime highlight, warm cream tails)
HEAD=np.array([126,186,72])/255; HEAD2=np.array([98,160,58])/255; TAIL=np.array([214,204,168])/255
ENZ=np.array([226,232,214])/255; ENZ2=np.array([200,210,186])/255
GEL=np.array([150,186,170])/255; NODE=np.array([196,220,90])/255; DRUG=np.array([235,196,92])/255
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

# ---- hydrogel core: crosslink nodes joined by gently wandering polymer chains, inside the lumen
RG=RI-1.6
nodes=[]
while len(nodes)<150:
    q=rng.uniform(-RG,RG,3)
    if np.linalg.norm(q)<RG-1.0 and all(np.linalg.norm(q-n)>4.6 for n in nodes): nodes.append(q)
nodes=np.array(nodes)
add(nodes,.62,NODE)
done=set()
for a in range(len(nodes)):
    d=np.linalg.norm(nodes-nodes[a],axis=1);nb=np.argsort(d)[1:4]
    for b in nb:
        if (min(a,b),max(a,b)) in done or d[b]>9.5: continue
        done.add((min(a,b),max(a,b)))
        A,B=nodes[a],nodes[b];L=np.linalg.norm(B-A);n=max(3,int(L/.42))
        w=np.cross(B-A,rng.normal(size=3));w/=np.linalg.norm(w)+1e-9
        t=np.linspace(0,1,n)[1:-1,None];Q=A+(B-A)*t+w*np.sin(np.pi*t)*L*.12+rng.normal(0,.05,(n-2,3))
        add(Q,.26,GEL*(.92+.1*rng.random()))
# ---- cargo: proteins (IL-2 crystal structure, PDB 1M47, heavy atoms) and small-molecule drug clusters in the mesh
R_={'C':1.70,'N':1.55,'O':1.52,'S':1.80}
X=[];E=[]
for l in open(H/'1m47.pdb'):
    if l.startswith('ATOM') and l[21]=='A':
        e=l[76:78].strip()
        if e in R_: X.append([float(l[30:38]),float(l[38:46]),float(l[46:54])]);E.append(e)
X=np.array(X)/10.0;X-=X.mean(0);ar=np.array([R_[e] for e in E])/10.0
ecol=np.where(np.array([e in 'NO' for e in E])[:,None],ENZ*.86,ENZ)
ES=1.5
for (p,a) in (((7.0,8.0,6.0),(0.3,1.1,0.2)),((-12.0,-2.0,2.0),(1.2,0.1,2.0)),((11.0,-7.0,-9.0),(2.1,0.7,0.9)),((-8.0,11.0,-7.0),(0.5,2.3,1.4)),
              ((-9.0,-10.0,10.0),(0.9,1.7,0.4)),((4.0,-13.0,7.0),(2.6,.4,1.1)),((13.0,4.0,9.0),(1.6,2.2,.3)),((2.0,13.0,-3.0),(.2,.9,2.7))):
    Rm=rot(a[0],'x')@rot(a[1],'y')@rot(a[2],'z');P=(X@Rm.T)*ES+np.array(p)
    if np.linalg.norm(P.mean(0))+4>RI: continue
    add(P,ar*ES,ecol)
k=0
while k<46:
    q=rng.uniform(-RG,RG,3)
    if np.linalg.norm(q)>RG-1.5: continue
    k+=1;m=rng.integers(4,8)
    Q=q+np.cumsum(rng.normal(0,.32,(m,3)),0)
    add(Q,.36,DRUG*(.9+.12*rng.random()))

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
ink=np.array([14,18,15])/255
shade=(0.08+0.84*lam*(0.5+0.5*ao))[...,None]*col*(0.5+0.5*ao[...,None])
shade+=spec[...,None]*0.26*ao[...,None]+rim[...,None]*col*0.18
f=(0.5+0.5*zn[...,None]);shade=shade*f+ink*(1-f)*0.7
img=np.clip(shade,0,1)
rgba=np.dstack([img*255,mask*255.0]).astype(np.uint8)
im=Image.fromarray(rgba,'RGBA').resize((S//2,S//2),Image.LANCZOS)
im=im.crop(im.getbbox());im.save(H/'hero.png');print(im.size)
