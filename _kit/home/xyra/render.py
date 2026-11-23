# XYRA hero: budiodarone (PubChem CID 9833332, 3D conformer) as a glossy ball-and-stick model,
# ray-traced in numpy (orthographic), soft shadows + analytic AO, baked with alpha to xyra/hero.webp.
import numpy as np, sys
from PIL import Image
W=int(sys.argv[1]) if len(sys.argv)>1 else 1700; H=W; SS=2
L=open(__file__.rsplit('/',1)[0]+'/budiodarone.sdf').read().splitlines()
na,nb=int(L[3][:3]),int(L[3][3:6])
P=[];E=[]
for l in L[4:4+na]:
    p=l.split(); P.append([float(p[0]),float(p[1]),float(p[2])]); E.append(p[3])
B=[(int(l[:3])-1,int(l[3:6])-1,int(l[6:9])) for l in L[4+na:4+na+nb]]
P=np.array(P); P-=P.mean(0)
# orient: PCA, long axis horizontal, then a gentle tilt for depth
u,s,vt=np.linalg.svd(P,full_matrices=False); P=P@vt.T
def R(ax,a):
    c,s_=np.cos(a),np.sin(a)
    if ax=='x': return np.array([[1,0,0],[0,c,-s_],[0,s_,c]])
    if ax=='y': return np.array([[c,0,s_],[0,1,0],[-s_,0,c]])
    return np.array([[c,-s_,0],[s_,c,0],[0,0,1]])
ang=[float(a) for a in (sys.argv[2:5] if len(sys.argv)>4 else (0.5,0.35,0.62))]
P=P@R('x',ang[0]).T@R('y',ang[1]).T@R('z',ang[2]).T
rad={'C':.40,'O':.39,'N':.40,'I':.64,'H':.23}
col={'C':(0.20,0.185,0.19),'O':(0.73,0.30,0.22),'N':(0.30,0.40,0.56),'I':(0.46,0.33,0.55),'H':(0.93,0.90,0.88)}
spec={'C':.55,'O':.5,'N':.5,'I':.6,'H':.35}
rs=np.array([rad[e] for e in E]); cs=np.array([col[e] for e in E]); sp=np.array([spec[e] for e in E])
br=0.125
# frame
lo=(P[:,:2]-rs[:,None]).min(0); hi=(P[:,:2]+rs[:,None]).max(0)
span=(hi-lo).max()*1.08; ctr=(lo+hi)/2
w,h=W*SS,H*SS
xs=(np.arange(w)+.5)/w-.5; ys=.5-(np.arange(h)+.5)/h
X,Y=np.meshgrid(xs*span+ctr[0],ys*span+ctr[1])
X=X.ravel();Y=Y.ravel();N=X.size
D=np.full(N,-1e9); NRM=np.zeros((N,3)); C=np.zeros((N,3)); S=np.zeros(N); HIT=np.zeros(N,bool)
# rays travel -z from +inf (camera at +z): we want max z hit
for i in range(na):
    c=P[i];r=rs[i]
    dx=X-c[0];dy=Y-c[1];q=r*r-dx*dx-dy*dy;m=q>0
    if not m.any(): continue
    z=c[2]+np.sqrt(np.where(m,q,0)); m&=z>D
    D[m]=z[m];NRM[m]=np.stack([dx[m],dy[m],z[m]-c[2]],1)/r;C[m]=cs[i];S[m]=sp[i];HIT[m]=True
# bonds: cylinder halves coloured by atom; double bonds as two thinner offset cylinders
def cyl(a,b,r,colr,sv):
    global D
    d=b-a;Ln=np.linalg.norm(d);d=d/Ln
    # ray o=(X,Y,big), dir=(0,0,-1); solve |(o-a) - ((o-a).d)d|=r
    ox=X-a[0];oy=Y-a[1]
    # param along ray: p(t)=(ox,oy,Z0-t) ; use z as variable directly: point (X,Y,z)
    # w=(ox,oy,z-a2); perp = w-(w.d)d ; |perp|^2=r^2 -> quadratic in z
    k=np.array([0,0,1.0])
    dz=d[2]
    # w = W0 + z' k  where W0=(ox,oy,-a2), z'=z
    A=1-dz*dz
    W0d=ox*d[0]+oy*d[1]-a[2]*dz
    Bq=2*((-a[2])-W0d*dz)
    Cq=ox*ox+oy*oy+a[2]*a[2]-W0d*W0d-r*r
    if abs(A)<1e-6: return
    disc=Bq*Bq-4*A*Cq; m=disc>0
    z=(-Bq+np.sqrt(np.where(m,disc,0)))/(2*A)
    t=ox*d[0]+oy*d[1]+(z-a[2])*dz
    m&=(t>0)&(t<Ln)&(z>D)
    if not m.any(): return
    px=np.stack([ox,oy,z-a[2]],1)
    n=px-t[:,None]*d[None,:]; n/=np.linalg.norm(n,axis=1,keepdims=True)+1e-9
    D[m]=z[m];NRM[m]=n[m];C[m]=colr;S[m]=sv;HIT[m]=True
for a_,b_,o in B:
    pa,pb=P[a_],P[b_];mid=(pa+pb)/2
    if o==2 and 'H' not in (E[a_],E[b_]):
        d=pb-pa;d/=np.linalg.norm(d);off=np.cross(d,[0,0,1.0]);off/=np.linalg.norm(off)+1e-9;off*=.12
        for sgn in (1,-1):
            cyl(pa+sgn*off,mid+sgn*off,br*.72,cs[a_],sp[a_]);cyl(mid+sgn*off,pb+sgn*off,br*.72,cs[b_],sp[b_])
    else:
        rr=br*(.8 if 'H' in (E[a_],E[b_]) else 1)
        cyl(pa,mid,rr,cs[a_],sp[a_]);cyl(mid,pb,rr,cs[b_],sp[b_])
# shading
Pt=np.stack([X,Y,D],1)
Lk=np.array([-.55,.62,.56]);Lk/=np.linalg.norm(Lk)
Lf=np.array([.7,-.2,.68]);Lf/=np.linalg.norm(Lf)
V=np.array([0,0,1.0])
idx=np.where(HIT)[0]
p=Pt[idx];n=NRM[idx];c=C[idx];s=S[idx]
# soft shadow: key light, sphere occluders, few jittered dirs
sh=np.zeros(len(idx))
rng=np.random.default_rng(3)
dirs=[Lk]+[ (Lk+rng.normal(0,.08,3)) for _ in range(5)]
for Ld in dirs:
    Ld=Ld/np.linalg.norm(Ld); occ=np.zeros(len(idx),bool); o=p+n*0.02
    for i in range(na):
        cc=P[i];oc=o-cc;b=oc@Ld;q=b*b-(oc*oc).sum(1)+rs[i]**2*0.95
        occ|=(q>0)&((-b+np.sqrt(np.maximum(q,0)))>0)&(-b>0)
    sh+=occ
sh=1-0.62*sh/len(dirs)
# analytic AO from atoms
ao=np.ones(len(idx))
for i in range(na):
    v=P[i]-p;dl=np.linalg.norm(v,axis=1)+1e-6;cos=np.clip((v*n).sum(1)/dl,0,1)
    ao*=1-np.clip(cos*(rs[i]**2)/(dl**2)*0.9,0,.55)*(dl>rs[i]*.6)
ao=np.clip(ao,0,1)**.9
dif=np.clip(n@Lk,0,1)*sh; fil=np.clip(n@Lf,0,1)*.32
hv=(Lk+V);hv/=np.linalg.norm(hv); spc=np.clip(n@hv,0,1)**60*s*1.15*sh
hv2=(Lf+V);hv2/=np.linalg.norm(hv2); spc2=np.clip(n@hv2,0,1)**30*s*.25
fr=(1-np.clip(n@V,0,1))**3
amb=0.30+0.12*n[:,1]
lin=c*(amb[:,None]*ao[:,None]+dif[:,None]*.95+fil[:,None])
lin+= (spc+spc2)[:,None]*np.array([1,.97,.94])
lin+= fr[:,None]*np.array([.98,.93,.90])*.22*ao[:,None]
# depth cue: far atoms fade slightly toward the warm paper
zn=(p[:,2]-D[idx].min())/(np.ptp(D[idx])+1e-6)
paper=np.array([.972,.962,.952])
lin=lin*(0.84+0.16*zn[:,None])+paper*(0.16-0.16*zn[:,None])*0.6
out=np.zeros((N,4));out[idx,:3]=np.clip(lin,0,1);out[idx,3]=1
img=out.reshape(h,w,4)
img=img.reshape(H,SS,W,SS,4).mean((1,3))
# un-premultiply colour for alpha edges
a=img[...,3:4];rgb=np.where(a>0,img[...,:3]/np.maximum(a,1e-6),0)
im=np.concatenate([rgb,a],2)
Image.fromarray((np.clip(im,0,1)**(1/1.0)*255).astype(np.uint8),'RGBA').save(sys.argv[5] if len(sys.argv)>5 else '/tmp/claude-0/xy/hero.png')
print('ok')
