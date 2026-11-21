#!/usr/bin/env python3
"""Render the hero: a space-filling model of a full-length human IgG4 antibody (PDB 5DK3, the only intact IgG4 crystal
structure; ALT-100 is a humanized IgG4), shaded like a material model (Lambert + rim + specular + depth AO).
Heavy chains in the Aqualung logo blue, light chains in its silver, N-glycans in the site purple, transparent ground.
Output: ab.png (RGBA)."""
import numpy as np, pathlib, sys
from PIL import Image, ImageFilter
def _box(a,r,ax):
    a=np.moveaxis(a,ax,0);p=np.concatenate([np.repeat(a[:1],r+1,0),a,np.repeat(a[-1:],r,0)]);c=np.cumsum(p,0)
    return np.moveaxis((c[2*r+1:]-c[:-2*r-1])/(2*r+1),0,ax)
def gaussian_filter(a,s):
    r=max(1,int(s*0.9))
    for _ in range(3): a=_box(_box(a,r,0),r,1)
    return a
H = pathlib.Path(__file__).resolve().parent
R = {'C':1.70,'N':1.55,'O':1.52,'S':1.80}
GLY=('NAG','BMA','MAN','FUC','GAL')
xyz=[];el=[];bb=[];res=[]
for l in open(H/'5dk3.pdb'):
    if l.startswith('ATOM') or (l.startswith('HETATM') and l[17:20].strip() in GLY):
        e=l[76:78].strip() or l[12:14].strip()[0]
        if e not in R: continue
        n=l[12:16].strip()
        xyz.append([float(l[30:38]),float(l[38:46]),float(l[46:54])]);el.append(e)
        bb.append('G' if l.startswith('HETATM') else ('H' if l[21] in 'BG' else 'L'))
        res.append(l[21])
X=np.array(xyz);X-=X.mean(0)
# principal axes: view along the least-variance axis so the L lies flat to the camera
w,v=np.linalg.eigh(np.cov(X.T));V=v[:,::-1];P=X@V
def rot(a,ax):
    c,s=np.cos(a),np.sin(a)
    return {'x':np.array([[1,0,0],[0,c,-s],[0,s,c]]),'y':np.array([[c,0,s],[0,1,0],[-s,0,c]]),'z':np.array([[c,-s,0],[s,c,0],[0,0,1]])}[ax]
ang=[float(a) for a in (sys.argv[1:4] if len(sys.argv)>3 else (0.0,0.0,0.0))]
gc=P[np.array(bb)=='G'].mean(0);a0=np.arctan2(gc[1],gc[0]);P=P@rot(-np.pi/2-a0,'z').T  # Fc (glycans) points down: a Y
P=P@rot(ang[0],'x').T@rot(ang[1],'y').T@rot(ang[2],'z').T
S=int(sys.argv[4]) if len(sys.argv)>4 else 1800
rad=np.array([R[e] for e in el])
lo=(P[:,:2]-rad[:,None]).min(0);hi=(P[:,:2]+rad[:,None]).max(0)
sc=S*0.9/(hi-lo).max();off=np.array([S,S])/2-(lo+hi)/2*sc
Z=np.full((S,S),-1e9);N=np.zeros((S,S,3));ID=np.full((S,S),-1)
for i in np.argsort(P[:,2]):
    cx,cy=P[i,:2]*sc+off;cy=S-cy;r=rad[i]*sc
    x0,x1=int(max(cx-r,0)),int(min(cx+r+1,S));y0,y1=int(max(cy-r,0)),int(min(cy+r+1,S))
    yy,xx=np.mgrid[y0:y1,x0:x1];dx=(xx+.5-cx)/r;dy=(yy+.5-cy)/r;d2=dx*dx+dy*dy;m=d2<1
    dz=np.sqrt(np.clip(1-d2,0,1));z=P[i,2]*sc+dz*r
    sub=Z[y0:y1,x0:x1];upd=m&(z>sub)
    sub[upd]=z[upd];N[y0:y1,x0:x1][upd]=np.stack([dx,-dy,dz],-1)[upd];ID[y0:y1,x0:x1][upd]=i
mask=ID>=0
# ambient occlusion from the depth buffer: compare to blurred depth at several radii
Zf=np.where(mask,Z,Z[mask].min()-40*sc/10)
ao=np.zeros_like(Z)
for rr in (6,14,30,60):
    b=gaussian_filter(Zf,rr)
    ao+=np.clip((b-Zf)/(rr*1.6),0,1)
ao=np.clip(1-ao/2.2,0,1)
L=np.array([-.45,.55,.7]);L/=np.linalg.norm(L)
lam=np.clip((N*L).sum(-1),0,1)
Hh=L+np.array([0,0,1]);Hh/=np.linalg.norm(Hh);spec=np.clip((N*Hh).sum(-1),0,1)**38
rim=(1-np.clip(N[...,2],0,1))**3
BB=np.array(bb);E=np.array(el);CH=np.array(res)
hv=np.array([62,170,236])/255;hv2=np.array([40,128,206])/255;lt=np.array([196,206,216])/255;gl=np.array([168,72,170])/255
base_col=np.where((BB=='H')[:,None],np.where(np.isin(CH,['B'])[:,None],hv,hv2),lt)
base_col=np.where((BB=='G')[:,None],gl,base_col)
col=base_col[np.clip(ID,0,None)]
# depth fog: far parts sink toward the ink
zn=(Z-Z[mask].min())/(Z[mask].max()-Z[mask].min()+1e-6);zn=np.where(mask,zn,0)
ink=np.array([6,18,36])/255
shade=(0.10+0.80*lam*(0.55+0.45*ao))[...,None]*col*(0.55+0.45*ao[...,None])
shade+=spec[...,None]*0.30*ao[...,None]+rim[...,None]*col*0.22
shade=shade*(0.62+0.38*zn[...,None])+ink*(1-(0.62+0.38*zn[...,None]))*0.6
img=np.clip(shade,0,1)
A=mask.astype(np.float32)
rgba=np.dstack([img*255,A*255]).astype(np.uint8)
im=Image.fromarray(rgba,'RGBA')
# supersampled: downsample for anti-aliasing
im=im.resize((S//2,S//2),Image.LANCZOS)
bbx=im.getbbox();im=im.crop(bbx)
im.save(H/'ab.png');print(im.size,X.shape)
