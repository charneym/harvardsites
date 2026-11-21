#!/usr/bin/env python3
"""Serentrix hero: the TRPV1 ion channel, the pain receptor every Serentrix compound blocks, built from the real cryo-EM
structure PDB 5IS0 (Gao, Cao, Julius & Cheng, Nature 2016: rat TRPV1 in a lipid nanodisc, bound to the antagonist
capsazepine). All four subunits are drawn space-filling, alternating the two blues of the Serentrix logo eye; the four
antagonist molecules in their vanilloid pockets are drawn in the logo's lime. The channel sits in a lipid bilayer: two
leaflets of phosphate head groups (a regular lattice, thinning out with distance) at the membrane planes of the
transmembrane domain. Lambert + rim + specular shading with depth-based ambient occlusion, transparent ground.
usage: render.py tilt spin size out.png"""
import numpy as np, pathlib, sys
from PIL import Image
def _box(a,r,ax):
    a=np.moveaxis(a,ax,0);p=np.concatenate([np.repeat(a[:1],r+1,0),a,np.repeat(a[-1:],r,0)]);c=np.cumsum(p,0)
    return np.moveaxis((c[2*r+1:]-c[:-2*r-1])/(2*r+1),0,ax)
def blur(a,s):
    r=max(1,int(s*0.9))
    for _ in range(3): a=_box(_box(a,r,0),r,1)
    return a
H=pathlib.Path(__file__).resolve().parent
RAD={'C':1.70,'N':1.55,'O':1.52,'S':1.80,'CL':1.75}
xyz=[];rad=[];kind=[];chain=[];resn=[]
for l in open(H/'5is0.pdb'):
    if not l.startswith(('ATOM','HETATM')):continue
    e=(l[76:78].strip() or l[12:14].strip()[0]).upper()
    if e=='H' or e not in RAD:continue
    xyz.append([float(l[30:38]),float(l[38:46]),float(l[46:54])]);rad.append(RAD[e])
    kind.append(1 if l.startswith('HETATM') else 0);chain.append(l[21]);resn.append(int(l[22:26]))
X=np.array(xyz);rad=np.array(rad);kind=np.array(kind);chain=np.array(chain);resn=np.array(resn)
# the four-fold axis: normal of the plane through the four subunit centroids
C=np.array([X[(chain==c)&(kind==0)].mean(0) for c in 'BCDE']);c0=C.mean(0)
w,v=np.linalg.eigh(np.cov((C-c0).T));ax=v[:,0]
# point the axis so the transmembrane domain (residues 430-690) is "up" relative to the cytoplasmic ankyrin domain
tm=(kind==0)&(resn>=430)&(resn<=690)
if ((X[tm].mean(0)-c0)@ax)<0:ax=-ax
X=X-c0
# frame: y = channel axis
e1=np.cross(ax,[1,0,0]);e1/=np.linalg.norm(e1);e2=np.cross(ax,e1)
P=np.stack([X@e1,X@ax,X@e2],1)
# membrane planes from the S1-S6 helices: the TM span is about 34 A thick, centred on the helices' mean height
tmy=P[tm,1];mid=float(np.median(tmy));half=17.5
# lipid head groups: hex lattice in two leaflets, kept clear of the protein, fading out (density) with radius
rng=np.random.default_rng(5)
heads=[];RMAX=float(sys.argv[5]) if len(sys.argv)>5 else 92
prot=P[kind==0]
from_axis=np.hypot(prot[:,0],prot[:,2])
for leaf in (-1,1):
    y=mid+leaf*half
    near=prot[np.abs(prot[:,1]-y)<7]
    a=6.6
    for i in range(-16,17):
        for j in range(-16,17):
            x=(i+.5*(j%2))*a;z=j*a*.866
            x+=rng.normal(0,.9);z+=rng.normal(0,.9)
            r=np.hypot(x,z)
            if r>RMAX:continue
            if len(near) and np.min((near[:,0]-x)**2+(near[:,2]-z)**2)<(3.4+2.5)**2:continue
            # thin out toward the rim so the bilayer has no hard edge
            if rng.random()>np.clip((RMAX-r)/40,0,1):continue
            heads.append([x,y+leaf*rng.normal(1.2,.6),z])
heads=np.array(heads).reshape(-1,3)
P=np.vstack([P,heads]);rad=np.concatenate([rad,np.full(len(heads),2.5)])
kind=np.concatenate([kind,np.full(len(heads),2)]);chain=np.concatenate([chain,np.array(['L']*len(heads))])
# camera: spin about the axis, tilt toward the viewer so the extracellular face (and the pore) shows a little
tilt=float(sys.argv[1]) if len(sys.argv)>1 else .32;spin=float(sys.argv[2]) if len(sys.argv)>2 else .55
S=int(sys.argv[3]) if len(sys.argv)>3 else 2400;out=sys.argv[4] if len(sys.argv)>4 else str(H/'trpv1.png')
cs,ss=np.cos(spin),np.sin(spin);Ry=np.array([[cs,0,ss],[0,1,0],[-ss,0,cs]])
ct,st=np.cos(tilt),np.sin(tilt);Rx=np.array([[1,0,0],[0,ct,-st],[0,st,ct]])
P=P@Ry.T@Rx.T
lo=(P[:,:2]-rad[:,None]).min(0);hi=(P[:,:2]+rad[:,None]).max(0)
sc=S*0.94/(hi-lo).max();off=np.array([S,S])/2-(lo+hi)/2*sc
Z=np.full((S,S),-1e9);N=np.zeros((S,S,3),np.float32);ID=np.full((S,S),-1)
for i in np.argsort(P[:,2]):
    cx,cy=P[i,:2]*sc+off;cy=S-cy;r=rad[i]*sc
    x0,x1=int(max(cx-r,0)),int(min(cx+r+1,S));y0,y1=int(max(cy-r,0)),int(min(cy+r+1,S))
    if x1<=x0 or y1<=y0:continue
    yy,xx=np.mgrid[y0:y1,x0:x1];dx=(xx+.5-cx)/r;dy=(yy+.5-cy)/r;d2=dx*dx+dy*dy;m=d2<1
    dz=np.sqrt(np.clip(1-d2,0,1));z=P[i,2]*sc+dz*r
    sub=Z[y0:y1,x0:x1];upd=m&(z>sub)
    sub[upd]=z[upd];N[y0:y1,x0:x1][upd]=np.stack([dx,-dy,dz],-1)[upd];ID[y0:y1,x0:x1][upd]=i
mask=ID>=0
Zf=np.where(mask,Z,Z[mask].min()-6*sc)
ao=np.zeros_like(Z)
for rr in (5,12,26,54):
    b=blur(Zf,rr*S/2400);ao+=np.clip((b-Zf)/(rr*S/2400*1.6),0,1)
ao=np.clip(1-ao/2.2,0,1)
L=np.array([-.5,.6,.62]);L/=np.linalg.norm(L)
lam=np.clip((N*L).sum(-1),0,1)
Hh=L+np.array([0,0,1]);Hh/=np.linalg.norm(Hh);spec=np.clip((N*Hh).sum(-1),0,1)**42
rim=(1-np.clip(N[...,2],0,1))**3
blueA=np.array([62,152,218])/255;blueB=np.array([30,104,172])/255;lime=np.array([150,205,70])/255;head=np.array([150,168,184])/255
ii=np.clip(ID,0,None);K=kind[ii];CH=chain[ii]
col=np.where(((CH=='B')|(CH=='D'))[...,None],blueA,blueB)
col=np.where((K==1)[...,None],lime,col)
col=np.where((K==2)[...,None],head,col)
zn=(Z-Z[mask].min())/(Z[mask].max()-Z[mask].min()+1e-6);zn=np.where(mask,zn,0)
ink=np.array([9,14,20])/255
shade=(0.15+0.95*lam*(0.55+0.45*ao))[...,None]*col*(0.5+0.5*ao[...,None])
shade+=spec[...,None]*0.34*ao[...,None]+rim[...,None]*col*0.25
shade=np.where((K==1)[...,None],shade*1.15+lime*0.16,shade)  # the antagonist carries a little of its own light
dep=(0.62+0.38*zn[...,None]);shade=shade*dep+ink*(1-dep)
A=mask.astype(np.float32)
# lipid heads: quieter than the protein, and fading with distance from the axis (the bilayer has no edge)
hx=P[:,0];hz=P[:,2]
img=np.clip(shade,0,1)
rgba=np.dstack([img*255,A*255]).astype(np.uint8)
im=Image.fromarray(rgba,'RGBA').resize((S//2,S//2),Image.LANCZOS)
im=im.crop(im.getbbox());im.save(out);print(im.size,len(heads),'mid',mid)
