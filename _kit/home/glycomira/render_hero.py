import numpy as np, sys
from PIL import Image, ImageFilter
pdb=sys.argv[1]; out=sys.argv[2]
W,H=int(sys.argv[3]),int(sys.argv[4]); SS=1.5
roll=float(sys.argv[5]) if len(sys.argv)>5 else 0.0
tilt=float(sys.argv[6]) if len(sys.argv)>6 else 22.0
ang=float(sys.argv[7]) if len(sys.argv)>7 else 24.0
FOC=float(sys.argv[8]) if len(sys.argv)>8 else 0.6
MAXB=float(sys.argv[9]) if len(sys.argv)>9 else 7.0
atoms=[]
for l in open(pdb):
    if l.startswith('ENDMDL'): break
    if l.startswith(('ATOM','HETATM')):
        atoms.append((float(l[30:38]),float(l[38:46]),float(l[46:54]),l[76:78].strip()))
P=np.array([a[:3] for a in atoms]); E=[a[3] for a in atoms]
P-=P.mean(0)
u,s,vt=np.linalg.svd(P,full_matrices=False); P=P@vt.T   # long axis -> x
def R(ax,deg):
    t=np.radians(deg);c,s_=np.cos(t),np.sin(t)
    if ax=='x': return np.array([[1,0,0],[0,c,-s_],[0,s_,c]])
    if ax=='y': return np.array([[c,0,s_],[0,1,0],[-s_,0,c]])
    return np.array([[c,-s_,0],[s_,c,0],[0,0,1]])
P=P@R('x',roll).T@R('y',tilt).T@R('z',ang).T
RAD={'C':1.7,'O':1.52,'N':1.55,'S':1.8,'H':1.1}
COL={'C':(0x4a,0x58,0x72),'O':(0x9d,0xb2,0xcb),'N':(0x6f,0x98,0xbe),'S':(0xfc,0xd4,0x30),'H':(0xd8,0xde,0xe8)}
r=np.array([RAD[e]*(0.62 if e=='H' else 0.9) for e in E]); col=np.array([COL[e] for e in E],float)/255.
col=col**2.2
# fit to frame with margin
mn=(P[:,:2]-r[:,None]).min(0); mx=(P[:,:2]+r[:,None]).max(0)
w,h=int(W*SS),int(H*SS)
sc=min(w*0.86/(mx[0]-mn[0]), h*0.86/(mx[1]-mn[1]))
cen=(mn+mx)/2
X=(P[:,0]-cen[0])*sc+w/2; Y=-(P[:,1]-cen[1])*sc+h/2; Z=P[:,2]*sc; RR=r*sc
zb=np.full((h,w),-1e9,np.float32); idb=np.full((h,w),-1,np.int32)
for i in range(len(X)):
    x0,x1=int(max(0,X[i]-RR[i]-1)),int(min(w,X[i]+RR[i]+2)); y0,y1=int(max(0,Y[i]-RR[i]-1)),int(min(h,Y[i]+RR[i]+2))
    yy,xx=np.mgrid[y0:y1,x0:x1]; d2=(xx+.5-X[i])**2+(yy+.5-Y[i])**2; m=d2<RR[i]**2
    z=Z[i]+np.sqrt(np.maximum(RR[i]**2-d2,0)); sub=zb[y0:y1,x0:x1]; upd=m&(z>sub)
    sub[upd]=z[upd]; idb[y0:y1,x0:x1][upd]=i
cov=idb>=0; ys,xs=np.nonzero(cov); ids=idb[cov]
px=xs+.5; py=ys+.5; pz=zb[cov]
nx=(px-X[ids])/RR[ids]; ny=-(py-Y[ids])/RR[ids]; nz=(pz-Z[ids])/RR[ids]
N=np.stack([nx,ny,nz],1); N/=np.linalg.norm(N,axis=1,keepdims=True)
Pt=np.stack([px,-py,pz],1)  # world-ish coords (y up)
Ac=np.stack([X,-Y,Z],1)
L=np.array([-0.55,0.62,0.56]); L/=np.linalg.norm(L)
# shadows
sh=np.ones(len(px),np.float32); O=Pt+N*1.5
for j in range(len(X)):
    oc=O-Ac[j]; b=oc@L; c=(oc*oc).sum(1)-RR[j]**2; disc=b*b-c
    hit=(disc>0)&((-b+np.sqrt(np.maximum(disc,0)))>0)&(c>0)
    # soft: penumbra by closest approach
    dmin=np.sqrt(np.maximum(c-b*b+RR[j]**2,0))  # distance from ray to centre
    t=-b; soft=np.clip((dmin-RR[j]*0.75)/(RR[j]*0.5),0,1)
    sh=np.where((t>0),np.minimum(sh,soft),sh)
# AO
ao=np.zeros(len(px),np.float32)
for j in range(len(X)):
    d=Ac[j]-Pt; dl=np.linalg.norm(d,axis=1)+1e-6
    f=np.clip((N*d).sum(1)/dl,0,1)*np.clip(1-(dl-RR[j])/(RR[j]*3.2),0,1)
    f[ids==j]=0; ao+=f*0.32
ao=np.clip(1-ao,0.18,1)**1.25
V=np.array([0,0,1.])
ndl=(N@L); diff=np.clip((ndl+0.25)/1.25,0,1)  # wrap
Hh=L+V; Hh/=np.linalg.norm(Hh); spec=np.clip(N@Hh,0,1)**38*0.55
F2=np.array([0.7,-0.25,0.4]); F2/=np.linalg.norm(F2); fill=np.clip(N@F2,0,1)
rim=(1-np.clip(N@V,0,1))**3.2
base=col[ids]
lit=base*(0.06+0.95*diff[:,None]*sh[:,None])*ao[:,None] + base*fill[:,None]*0.12*ao[:,None]
lit+=spec[:,None]*sh[:,None]*np.array([1,.97,.9])
lit+=rim[:,None]*np.array([0.24,0.36,0.55])*0.55*ao[:,None]**.5
# depth cue: far atoms darker/cooler
zn=(pz-pz.min())/(pz.max()-pz.min()+1e-6)
lit*= (0.55+0.45*zn)[:,None]
img=np.zeros((h,w,4),np.float32); img[ys,xs,:3]=np.clip(lit,0,1)**(1/2.2); img[ys,xs,3]=1
def blur(a,rad):
    o=np.zeros_like(a)
    for k in range(4):
        ch=Image.fromarray(np.clip(a[...,k]*255+.5,0,255).astype(np.uint8),'L')
        o[...,k]=np.array(ch.filter(ImageFilter.GaussianBlur(float(rad))),np.float32)/255
    return o
# depth of field: z-bins, each blurred by its own circle of confusion, composited far -> near
za=(Z-Z.min())/(Z.max()-Z.min()+1e-6)
zmap=np.full((h,w),-1.0,np.float32); zmap[ys,xs]=za[ids]
foc=FOC
pm=img.copy(); pm[...,:3]*=pm[...,3:]
nb=10; edges=np.linspace(0,1.0001,nb+1); acc=np.zeros_like(pm)
for b in range(nb):
    m=(zmap>=edges[b])&(zmap<edges[b+1])
    if not m.any(): continue
    lay=pm*m[...,None]; zc=(edges[b]+edges[b+1])/2
    rad=MAXB*SS*min(1,abs(zc-foc)/0.5)**1.3
    if rad>0.6: lay=blur(lay,rad)
    acc=lay+acc*(1-lay[...,3:])
outp=acc
a=outp[...,3:]; rgb=np.where(a>1e-4,outp[...,:3]/np.maximum(a,1e-4),0)
res=np.concatenate([rgb,a],2)
im=Image.fromarray((np.clip(res,0,1)*255).astype(np.uint8),'RGBA').resize((W,H),Image.LANCZOS)
im.save(out); print('ok',len(X),im.size)
