#!/usr/bin/env python3
"""Hero render: the adeno-associated virus type 2 capsid, the vector shell Synvivia's cyclic peptides help
packaging cells build well. Real coordinates: PDB 1LP3 (Xie, Bu, Bhatia, Hare, Somasundaram, Azzi, Chapman,
PNAS 2002), chain A VP3 expanded by the 60 icosahedral BIOMT matrices in the entry. The shell is built as a
radial height field on the sphere (max protein extent per direction, smoothed), then sphere-traced
orthographically: a clean sculpted object with the capsid's real relief, on an alpha ground.
Args: ax ay size.  Env: OUT, SM (shell smoothing), RAD (atom radius), SAT.  Out: <OUT>.png"""
import numpy as np, pathlib, sys, os, time
from PIL import Image
t0=time.time(); H=pathlib.Path(__file__).resolve().parent
res={}
for l in open(H/'1lp3.pdb'):
    if l.startswith('ENDMDL'): break
    if not l.startswith('ATOM') or l[21]!='A' or l[16] not in ' A': continue
    res.setdefault(int(l[22:26]),[]).append([float(l[30:38]),float(l[38:46]),float(l[46:54])])
A=np.array([np.mean(res[k],0) for k in sorted(res)])
M=[]; cur=[]
for l in open(H/'1lp3.pdb'):
    if l.startswith('REMARK 350   BIOMT'):
        cur.append([float(x) for x in l.split()[4:8]])
        if len(cur)==3: M.append(np.array(cur)); cur=[]
assert len(M)==60
P=np.concatenate([A@m[:,:3].T+m[:,3] for m in M]); P-=P.mean(0)
RAD=float(os.environ.get('RAD','5.0'))
rr=np.linalg.norm(P,axis=1); dirs=P/rr[:,None]
print('spheres',len(P),'r %.1f-%.1f A'%(rr.min(),rr.max()))
# --- equirectangular height field: furthest protein surface per direction
W,Hh=1600,800
lon=np.arctan2(dirs[:,0],dirs[:,2]); lat=np.arcsin(np.clip(dirs[:,1],-1,1))
# a residue of radius RAD subtends dang=RAD/r; splat it as a disc on the sphere
Fh=np.zeros((Hh,W),np.float32)
latg=(np.arange(Hh)+.5)/Hh*np.pi-np.pi/2
long=(np.arange(W)+.5)/W*2*np.pi-np.pi
cy=np.cos(latg)
ix=((lon+np.pi)/(2*np.pi)*W).astype(int)%W; iy=np.clip(((lat+np.pi/2)/np.pi*Hh).astype(int),0,Hh-1)
for i in range(len(P)):
    r0=rr[i]; da=RAD/r0
    j0,j1=max(int((lat[i]-da+np.pi/2)/np.pi*Hh),0),min(int((lat[i]+da+np.pi/2)/np.pi*Hh)+1,Hh)
    if j1<=j0: continue
    dl=np.abs(latg[j0:j1]-lat[i])
    k=np.sqrt(np.clip(da*da-dl*dl,0,None))/np.maximum(cy[j0:j1],1e-3)
    hgt=r0+np.sqrt(np.clip(RAD*RAD-(dl*r0)**2,0,None))
    for n,j in enumerate(range(j0,j1)):
        w=int(min(k[n],np.pi)/(2*np.pi)*W)
        a=(ix[i]-w)%W; b=(ix[i]+w)%W
        row=Fh[j]
        if a<=b: np.maximum(row[a:b+1],hgt[n],out=row[a:b+1])
        else: np.maximum(row[a:],hgt[n],out=row[a:]); np.maximum(row[:b+1],hgt[n],out=row[:b+1])
print('heightfield',time.time()-t0,'gaps',int((Fh==0).sum()))
# fill any gaps with the local max, then smooth on the sphere (longitude wraps)
def smooth(F,s):
    """Gaussian on the sphere: longitude kernel widens as 1/cos(lat) so the poles are not over-resolved."""
    G=np.empty_like(F)
    for j in range(Hh):
        k=min(max(s/max(cy[j],0.02),1.0),W/6.)
        n=int(3*k); w=np.exp(-0.5*(np.arange(-n,n+1)/k)**2); w/=w.sum()
        m=F[j]; G[j]=np.convolve(np.concatenate([m[-n:],m,m[:n]]),w,'same')[n:-n]
    k=int(max(1,s)); w=np.exp(-0.5*(np.arange(-3*k,3*k+1)/k)**2); w/=w.sum()
    pad=np.concatenate([G[:3*k][::-1],G,G[-3*k:][::-1]])
    return np.apply_along_axis(lambda m:np.convolve(m,w,'same'),0,pad)[3*k:-3*k]
if (Fh==0).any():
    g=smooth(Fh,6); Fh=np.where(Fh==0,g,Fh)
Fs=smooth(Fh,float(os.environ.get('SM','5')))
Rmax,Rmin=Fs.max(),Fs.min()
print('shell %.1f-%.1f A'%(Rmin,Rmax),time.time()-t0)
# --- orthographic sphere-trace of the radial height field
def rot(t,ax):
    c,s=np.cos(t),np.sin(t)
    return {'x':np.array([[1,0,0],[0,c,-s],[0,s,c]]),'y':np.array([[c,0,s],[0,1,0],[-s,0,c]])}[ax]
ang=[float(t) for t in (sys.argv[1:3] if len(sys.argv)>2 else (0.0,0.0))]
Rm=rot(ang[1],'y').T@rot(ang[0],'x').T   # world -> view
S=int(sys.argv[3]) if len(sys.argv)>3 else 2200
ext=Rmax*1.012
xs=(np.arange(S)+.5)/S*2*ext-ext
X,Y=np.meshgrid(xs,-xs)
rho2=X*X+Y*Y
out=rho2>=Rmax*Rmax
zhi=np.sqrt(np.clip(Rmax*Rmax-rho2,0,None))
zlo=np.sqrt(np.clip(Rmin*Rmin-rho2,0,None))
NS=int(os.environ.get('NS','120'))
Zh=np.zeros((S,S),np.float32); hit=np.zeros((S,S),bool); prev=None
Rv=Rm.T  # view -> world
def sampleH(x,y,z):
    r=np.sqrt(x*x+y*y+z*z)+1e-9
    wx=Rv[0,0]*x+Rv[0,1]*y+Rv[0,2]*z; wy=Rv[1,0]*x+Rv[1,1]*y+Rv[1,2]*z; wz=Rv[2,0]*x+Rv[2,1]*y+Rv[2,2]*z
    lo=np.arctan2(wx,wz); la=np.arcsin(np.clip(wy/r,-1,1))
    u=(lo+np.pi)/(2*np.pi)*W-.5; v=(la+np.pi/2)/np.pi*Hh-.5
    u0=np.floor(u).astype(np.int32); v0=np.clip(np.floor(v).astype(np.int32),0,Hh-2)
    fu=(u-u0)[...,None][...,0]; fv=v-v0
    a=Fs[v0,u0%W]; b=Fs[v0,(u0+1)%W]; c=Fs[v0+1,u0%W]; d=Fs[v0+1,(u0+1)%W]
    return (a*(1-fu)+b*fu)*(1-fv)+(c*(1-fu)+d*fu)*fv, r
for s in range(NS+1):
    t=s/NS
    z=zhi+(zlo-zhi)*t
    hv,r=sampleH(X,Y,z)
    inside=(r<=hv)&~out
    new=inside&~hit
    if prev is not None and new.any():
        # linear refine between the previous step and this one
        zp=prev
        hp,rp=sampleH(X,Y,zp)
        f=np.clip((rp-hp)/((rp-hp)-(r-hv)+1e-9),0,1)
        Zh[new]=(zp+(z-zp)*f)[new]
    elif new.any():
        Zh[new]=z[new]
    hit|=new
    prev=z
print('trace',time.time()-t0,'hit',int(hit.sum()))
mask=hit
# --- normals from the (smooth) traced depth, AO from the depth field
def _box(a,k,ax):
    a=np.moveaxis(a,ax,0);p=np.concatenate([np.repeat(a[:1],k+1,0),a,np.repeat(a[-1:],k,0)]);c=np.cumsum(p,0)
    return np.moveaxis((c[2*k+1:]-c[:-2*k-1])/(2*k+1),0,ax)
def blur(a,s):
    k=max(1,int(s*0.9))
    for _ in range(3): a=_box(_box(a,k,0),k,1)
    return a
px=2*ext/S
Zf=np.where(mask,Zh,Zh[mask].min()-6).astype(np.float32)
gy,gx=np.gradient(Zf,px)
N=np.dstack([-gx,gy,np.ones((S,S),np.float32)]); N/=np.linalg.norm(N,axis=-1,keepdims=True)+1e-9
ao=np.zeros((S,S),np.float32)
for k in (5,12,26,56,110):
    s=k*S/2200.; ao+=np.clip((blur(Zf,s)-Zf)/(s*px*1.7),0,1)
ao=np.clip(1-ao/2.4,0,1)
# --- satin shading: pewter shell, cool key light, steel rim; graded into the page ink with depth
L=np.array([-.42,.58,.70]); L/=np.linalg.norm(L)
lam=np.clip((N*L).sum(-1),0,1); wrap=np.clip(((N*L).sum(-1)+.40)/1.40,0,1)
Hv=L+np.array([0,0,1.]); Hv/=np.linalg.norm(Hv); nh=np.clip((N*Hv).sum(-1),0,1)
spec=nh**64*0.42+nh**14*0.08
rim=(1-np.clip(N[...,2],0,1))**2.6
hgtn=np.clip((np.where(mask,np.sqrt(X*X+Y*Y+Zh*Zh),Rmin)-Rmin)/(Rmax-Rmin+1e-6),0,1)
base=np.array([118,128,141])/255.; crest=np.array([183,195,208])/255.
col=base[None,None,:]+(crest-base)[None,None,:]*hgtn[...,None]**1.35
zn=np.clip((Zh-(-Rmax*0.55))/(Rmax*1.55),0,1); zn=np.where(mask,zn,0)
ink=np.array([9,13,19])/255.; steel=np.array([152,180,208])/255.
diff=(0.055+0.95*lam**1.10+0.22*wrap)*(0.26+0.74*ao)
sh=col*diff[...,None]+spec[...,None]*ao[...,None]*steel[None,None,:]+rim[...,None]*steel[None,None,:]*0.24*ao[...,None]
f=(0.62+0.38*zn[...,None]); sh=sh*f+ink*(1-f)*0.80
img=np.clip(sh,0,1)
al=mask.astype(np.float32)
al=np.clip(blur(al,S/2200.*1.6)*1.25,0,1)*mask  # antialias the silhouette slightly
rgba=np.dstack([img*255,al*255]).astype(np.uint8)
im=Image.fromarray(rgba,'RGBA').resize((S//2,S//2),Image.LANCZOS)
im=im.crop(im.getbbox()); im.save(H/(os.environ.get('OUT','capsid')+'.png'))
print(im.size,time.time()-t0)
