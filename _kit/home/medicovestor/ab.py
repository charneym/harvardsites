#!/usr/bin/env python3
"""Medicovestor hero: a crafted render of the company's own molecule, the ADoBind dimeric IgG1 ADC.
Two intact IgG antibodies (atom coordinates of PDB 1IGT, the intact IgG crystal structure) joined at the tips of
their Fc stems, as Medicovestor draws its "ADoBind backbone" (medicovestor.com/platform), each carrying
drug payloads (warm gold, schematic) near the hinge. Space-filling, shaded like a satin material model
(Lambert + soft specular + rim + depth-based ambient occlusion), on real alpha, so no box edge can show (DJ/DP).
Light chains in the logo's silver-blue (#B1BBC3), heavy chains in the logo blue (#4777D1) deepening toward the Fc.
Run: python3 ab.py [S]  -> ab.png (RGBA)"""
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
R={'C':1.70,'N':1.55,'O':1.52,'S':1.80}
xyz=[];el=[];res=[];ch=[];nm=[]
for l in open(H/'1igt.pdb'):
    if l.startswith(('ATOM','HETATM')) and l[17:20].strip()!='HOH':
        e=l[76:78].strip() or l[12:14].strip()[0]
        if e not in R: continue
        xyz.append([float(l[30:38]),float(l[38:46]),float(l[46:54])]);el.append(e)
        res.append(int(l[22:26]));ch.append(l[21] if l.startswith('ATOM') else 'G');nm.append(l[12:16].strip())
X=np.array(xyz);CH=np.array(ch);RS=np.array(res);EL=np.array(el);NM=np.array(nm)
heavy=np.isin(CH,['B','D']);fc=heavy&(RS>=250)
# antibody frame: origin at the Fc tip, +y from the Fc toward the hinge/Fabs, x across the two Fab arms
fcC=X[fc].mean(0);fab1=X[(CH=='A')|((CH=='B')&(RS<230))].mean(0);fab2=X[(CH=='C')|((CH=='D')&(RS<230))].mean(0)
up=(fab1+fab2)/2-fcC;up/=np.linalg.norm(up)
ac=fab1-fab2;ac-=up*(ac@up);ac/=np.linalg.norm(ac);zz=np.cross(ac,up)
B=np.stack([ac,up,zz],1)
L=(X-fcC)@B
tip=L[fc][:,1].min();L[:,1]-=tip      # Fc tip at y=0
def rot(a,ax):
    c,s=np.cos(a),np.sin(a)
    return {'x':np.array([[1,0,0],[0,c,-s],[0,s,c]]),'y':np.array([[c,0,s],[0,1,0],[-s,0,c]]),'z':np.array([[c,-s,0],[s,c,0],[0,0,1]])}[ax]
# payloads: small drug-linker clusters on surface atoms of the heavy chains near the hinge (schematic)
def payloads(P,seed):
    rng=np.random.default_rng(seed);out=[]
    cand=np.where(heavy&(((RS>=212)&(RS<=226))|((RS>=330)&(RS<=345)))&(NM=='CA'))[0]
    cen=P.mean(0);pick=[]
    for i in rng.permutation(cand):
        if all(np.linalg.norm(P[i]-P[j])>22 for j in pick): pick.append(i)
        if len(pick)>=4: break
    for i in pick:
        d=P[i]-cen;d[1]*=.3;d/=np.linalg.norm(d)
        base=P[i]+d*4.5
        for k in range(11):
            out.append(base+d*k*1.5+rng.normal(0,1.1,3))
    return np.array(out)
SPIN=float(sys.argv[4]) if len(sys.argv)>4 else 0.0
SM=float(sys.argv[3]) if len(sys.argv)>3 else 0.9
S=int(sys.argv[1]) if len(sys.argv)>1 else 2600
tilt=np.radians(float(sys.argv[2]) if len(sys.argv)>2 else 38)   # each antibody leans out from vertical; Fc tips meet at the centre bottom
parts=[];cols=[];kinds=[]
lightC=np.array([196,206,220])/255;blueA=np.array([96,142,226])/255;blueB=np.array([40,78,170])/255;gold=np.array([238,196,120])/255
for k,sg in enumerate((-1,1)):
    P=L.copy()
    P=P@rot(SPIN*sg,'y').T                         # spin about its own axis so the Fabs fan in depth
    P=P@rot(-sg*tilt,'z').T                       # lean outward: left antibody to the left, right one to the right
    P[:,0]+=sg*2.0
    f=np.clip((RS-1)/440,0,1)[:,None]
    hc=blueA*(1-f)+blueB*f
    lc=lightC*(1-np.clip(RS/214,0,1)[:,None]*.2)+blueA*np.clip(RS/214,0,1)[:,None]*.2
    c=np.where(np.isin(CH,['A','C'])[:,None],lc,hc)
    c=np.where((CH=='G')[:,None],np.array([214,222,236])/255,c)
    parts.append(P);cols.append(c);kinds.append(np.array([R[e] for e in el])+SM)
    pl=payloads(P,7+k);parts.append(pl);cols.append(np.tile(gold,(len(pl),1)));kinds.append(np.full(len(pl),1.9+SM*.6))
P=np.concatenate(parts);COL=np.concatenate(cols);rad=np.concatenate(kinds)
P=P@rot(-0.32,'x').T                              # look slightly down onto the molecule
P-=np.array([(P[:,0].min()+P[:,0].max())/2,(P[:,1].min()+P[:,1].max())/2,0])
lo=(P[:,:2]-rad[:,None]).min(0);hi=(P[:,:2]+rad[:,None]).max(0)
ext=hi-lo;W=S;Hh=int(S*ext[1]/ext[0])+8
sc=S*0.96/ext[0];off=np.array([W,Hh])/2-(lo+hi)/2*sc
Z=np.full((Hh,W),-1e9);N=np.zeros((Hh,W,3));ID=np.full((Hh,W),-1)
for i in np.argsort(P[:,2]):
    cx,cy=P[i,:2]*sc+off;cy=Hh-cy;r=rad[i]*sc
    x0,x1=int(max(cx-r,0)),int(min(cx+r+1,W));y0,y1=int(max(cy-r,0)),int(min(cy+r+1,Hh))
    yy,xx=np.mgrid[y0:y1,x0:x1];dx=(xx+.5-cx)/r;dy=(yy+.5-cy)/r;d2=dx*dx+dy*dy;m=d2<1
    dz=np.sqrt(np.clip(1-d2,0,1));z=P[i,2]*sc+dz*r
    sub=Z[y0:y1,x0:x1];upd=m&(z>sub)
    sub[upd]=z[upd];N[y0:y1,x0:x1][upd]=np.stack([dx,-dy,dz],-1)[upd];ID[y0:y1,x0:x1][upd]=i
mask=ID>=0
Zf=np.where(mask,Z,Z[mask].min()-60*sc/10)
ao=np.zeros_like(Z)
for rr in (6,14,30,64):
    b=blur(Zf,rr*S/1800);ao+=np.clip((b-Zf)/(rr*S/1800*1.6),0,1)
ao=np.clip(1-ao/2.2,0,1)
Lt=np.array([-.4,.6,.7]);Lt/=np.linalg.norm(Lt)
lam=np.clip((N*Lt).sum(-1),0,1)
Hv=Lt+np.array([0,0,1]);Hv/=np.linalg.norm(Hv);spec=np.clip((N*Hv).sum(-1),0,1)**30
rim=(1-np.clip(N[...,2],0,1))**3
col=COL[np.clip(ID,0,None)]
zn=(Z-Z[mask].min())/(Z[mask].max()-Z[mask].min()+1e-6);zn=np.where(mask,zn,0)
ink=np.array([3,9,26])/255
sh=(0.10+0.80*lam*(0.55+0.45*ao))[...,None]*col*(0.55+0.45*ao[...,None])
sh+=spec[...,None]*0.26*ao[...,None]+rim[...,None]*np.array([.55,.68,.95])*0.20
dep=(0.6+0.4*zn[...,None]);sh=sh*dep+ink*(1-dep)*0.6
img=np.clip(sh*1.25,0,1)
rgba=np.dstack([img*255,mask.astype(np.float32)*255]).astype(np.uint8)
im=Image.fromarray(rgba,'RGBA').resize((W//2,Hh//2),Image.LANCZOS)
im=im.crop(im.getbbox());im.save(H/'ab.png');print(im.size)
