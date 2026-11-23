#!/usr/bin/env python3
"""OrthoTrophix hero render: the bones of the human knee joint (distal femur, patella, proximal tibia and fibula head),
the structures whose 3D shape change TPX-100 is shown to slow. A smooth signed-distance sculpture, sphere-traced in numpy,
satin ivory bone with pale glassy cartilage caps on the joint faces, soft key light, AO, real alpha. Shaft ends fade out
over a long eased distance. Args: size yaw. Output: hero.png (RGBA)."""
import numpy as np, sys, time
from PIL import Image
t0=time.time()
S=int(sys.argv[1]) if len(sys.argv)>1 else 1600
YAW=float(sys.argv[2]) if len(sys.argv)>2 else -0.55
PITCH=float(sys.argv[3]) if len(sys.argv)>3 else 0.10

def length(v): return np.sqrt((v*v).sum(-1))
def smin(a,b,k):
    h=np.clip(.5+.5*(b-a)/k,0,1);return b*(1-h)+a*h-k*h*(1-h)
def smax(a,b,k): return -smin(-a,-b,k)
def ell(p,c,r):
    q=(p-c)/r;k0=length(q);k1=length(q/r);return k0*(k0-1)/(k1+1e-9)
def cap(p,a,b,ra,rb):
    pa=p-a;ba=np.array(b)-a;h=np.clip((pa@ba)/(ba@ba),0,1)
    return length(pa-h[...,None]*ba)-(ra+(rb-ra)*h)
A=np.array
def femur(p):
    d=cap(p,A([0,2.6,-.25]),A([.3,16,.1]),1.4,1.2)
    d=smin(d,ell(p,A([0,1.6,-.25]),A([2.6,1.8,1.75])),1.6)          # metaphyseal flare
    m=ell(p,A([-1.75,.55,-.35]),A([1.55,1.65,2.35]))               # medial condyle
    l=ell(p,A([1.7,.65,-.3]),A([1.5,1.55,2.25]))                    # lateral condyle
    d=smin(d,smin(m,l,.5),.9)
    notch=cap(p,A([0,-.6,-3]),A([0,.2,.6]),.62,.42)                  # intercondylar notch
    d=smax(d,-notch,.35)
    tro=cap(p,A([0,1.2,2.4]),A([0,3.2,2.0]),.5,.4)                   # trochlear groove
    d=smax(d,-tro,.4)
    return d
def tibia(p):
    d=ell(p,A([0,-1.85,-.2]),A([3.3,1.05,2.4]))                      # plateau
    d=smin(d,ell(p,A([0,-3.0,-.1]),A([2.2,1.6,1.7])),1.0)            # metaphysis
    d=smin(d,cap(p,A([0,-3.0,-.1]),A([-.2,-16,.0]),1.35,1.0),1.6)
    d=smin(d,ell(p,A([0,-3.3,1.25]),A([.75,.9,.55])),.7)              # tuberosity
    cup1=ell(p,A([-1.7,-.1,-.3]),A([1.55,.95,2.0]));cup2=ell(p,A([1.65,-.05,-.3]),A([1.5,.95,1.95]))
    d=smax(d,-smin(cup1,cup2,.2),.25)                                # condylar cups
    em=ell(p,A([0,-.85,-.25]),A([.45,.42,.8]))                        # intercondylar eminence
    d=smin(d,em,.3)
    return d
def fibula(p):
    d=ell(p,A([2.85,-3.05,-1.0]),A([.62,.72,.62]))
    return smin(d,cap(p,A([2.85,-3.3,-1.0]),A([3.25,-16,-.7]),.42,.34),.4)
def patella(p):
    return smin(ell(p,A([0,2.15,2.2]),A([1.3,1.3,.5])),ell(p,A([0,1.35,2.15]),A([.6,.7,.35])),.5)
def scene(p):
    f=femur(p);t=tibia(p);fi=fibula(p);pa=patella(p)
    d=np.minimum(np.minimum(f,t),np.minimum(fi,pa))
    ids=np.argmin(np.stack([f,t,fi,pa],-1),-1)
    return d,ids
# camera: orthographic-ish narrow perspective
cy,sy=np.cos(YAW),np.sin(YAW);cx,sx=np.cos(PITCH),np.sin(PITCH)
Ry=np.array([[cy,0,sy],[0,1,0],[-sy,0,cy]]);Rx=np.array([[1,0,0],[0,cx,-sx],[0,sx,cx]])
R=Ry@Rx
VW=10.4;VH=14.5;W=int(S*VW/VH);Hh=S
ys,xs=np.mgrid[0:Hh,0:W]
u=(xs+.5)/W*VW-VW/2;v=-((ys+.5)/Hh*VH-VH/2)+.2
F=40.0
ro_cam=np.array([0,0,F]);rd=np.stack([u*0.0,v*0.0,-np.ones_like(u)],-1)
# perspective: rays from eye through image plane at z=0 scaled for slight perspective
eye=np.array([0,.2,F]);pts=np.stack([u,v,np.zeros_like(u)],-1)
rd=pts-eye;rd/=length(rd)[...,None];ro=np.broadcast_to(eye,rd.shape).copy()
ro=ro@R.T;rd=rd@R.T
N=ro.reshape(-1,3);D=rd.reshape(-1,3);T=np.full(len(N),F-6.0);hit=np.zeros(len(N),bool);alive=np.ones(len(N),bool)
for it in range(140):
    idx=np.where(alive)[0]
    if len(idx)==0: break
    p=N[idx]+D[idx]*T[idx,None];d,_=scene(p)
    T[idx]+=d*.9
    h=d<1e-3;hit[idx[h]]=True;alive[idx[h]]=False
    far=T[idx]>F+8;alive[idx[far]]=False
print('trace',time.time()-t0,hit.sum())
P=N+D*T[:,None];hi=np.where(hit)[0];Ph=P[hi]
e=2e-3;nrm=np.zeros_like(Ph)
for k in range(3):
    o=np.zeros(3);o[k]=e;nrm[:,k]=scene(Ph+o)[0]-scene(Ph-o)[0]
nrm/=length(nrm)[:,None]+1e-9
_,ids=scene(Ph)
ao=np.ones(len(Ph))
for i,h in enumerate([.08,.2,.4,.75,1.2]):
    dd,_=scene(Ph+nrm*h);ao-=(h-np.minimum(dd,h))/h*(0.32/(i+1)**.5)
ao=np.clip(ao,0,1)**1.2
# soft shadow from key light
L=np.array([-.55,.7,.55]);L/=np.linalg.norm(L);L=L@R.T
sh=np.ones(len(Ph));tt=np.full(len(Ph),.05)
for it in range(40):
    dd,_=scene(Ph+nrm*.02+L*tt[:,None]);sh=np.minimum(sh,np.clip(8*dd/tt,0,1));tt+=np.clip(dd,.04,.5)
sh=np.clip(sh,0,1);sh=sh*sh*(3-2*sh)
V=-D[hi]
lam=np.clip((nrm*L).sum(-1),0,1);wrap=np.clip(((nrm*L).sum(-1)+.4)/1.4,0,1)
Hv=L+V;Hv/=length(Hv)[:,None];nh=np.clip((nrm*Hv).sum(-1),0,1)
fres=(1-np.clip((nrm*V).sum(-1),0,1))
# fill from lower right in brand blue, rim from behind
L2=np.array([.7,-.35,.3]);L2/=np.linalg.norm(L2);L2=L2@R.T;fill=np.clip((nrm*L2).sum(-1),0,1)
# albedo: ivory bone; joint faces (cartilage) pale glassy blue-white
bone=np.array([238,229,210])/255;cart=np.array([222,236,246])/255
pw=Ph@R   # back to model space
yy=pw[:,1]
cartw=np.zeros(len(Ph))
fm=ids==0;cartw[fm]=np.clip((1.2-yy[fm])/1.0,0,1)*np.clip((pw[fm,2]+3)/2,0,1)
tm=ids==1;cartw[tm]=np.clip((yy[tm]+1.25)/.55,0,1)
pm=ids==3;cartw[pm]=0
# fine porous texture
n=(np.sin(pw[:,0]*9.1+np.sin(pw[:,1]*7.3))*np.sin(pw[:,1]*8.7+pw[:,2]*5.1)*np.sin(pw[:,2]*10.3+pw[:,0]*3.7))
alb=bone*(1+.025*n)[:,None]
alb=alb*(1-cartw[:,None])+cart*cartw[:,None]
diff=(0.04+1.0*lam*(.3+.7*sh))*.95+0.14*wrap
col=alb*diff[:,None]*(0.35+0.65*ao)[:,None]
col+=np.array([40,110,190])/255*fill[:,None]*.12*ao[:,None]
spec=(nh**40*.25+nh**8*.05)*(.5+.5*sh)*(1+cartw*1.4)
col+=np.array([255,200,160])/255*(np.clip(wrap-lam,0,1)*.07*ao)[:,None]
col+=spec[:,None]
col+=np.array([120,180,235])/255*(fres**3)[:,None]*.35*ao[:,None]
# depth falloff toward ink
ink=np.array([10,22,38])/255
zc=(T[hi]-T[hi].min())/(np.ptp(T[hi])+1e-9);col=col*(1-.35*zc[:,None])+ink*.35*zc[:,None]
img=np.zeros((len(N),4));img[hi,:3]=np.clip(col,0,1);img[hi,3]=1
img=img.reshape(Hh,W,4)
# long eased fade of the shaft ends (alpha), top and bottom
yv=v[:,0]
def ss(a,b,x):
    t=np.clip((x-a)/(b-a),0,1);return t*t*(3-2*t)
fade=ss(VH/2+.2,3.0,yv)*ss(-VH/2+.2,-3.4,yv)
img[...,3]*=fade[:,None]
out=(img*255).astype(np.uint8)
im=Image.fromarray(out,'RGBA').resize((W//2,Hh//2),Image.LANCZOS)
im.save(sys.argv[4] if len(sys.argv)>4 else 'hero.png');print(im.size,time.time()-t0)
