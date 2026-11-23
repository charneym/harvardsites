"""Hero render for Interactome Biotherapeutics: one small extracellular vesicle (exosome), the particle their platform
engineers to carry medicines (siRNA and other cargo). A lipid-bilayer sphere built from headgroup beads (pearl), with
low transmembrane proteins in the blue of Interactome's own mark, and one octant cut away to show the bilayer in section
and short double-stranded RNA cargo inside. Z-buffer rasterised spheres, depth AO, wrap light, specular, cool rim.
Real alpha. Pure numpy + PIL. Output: hero.png and hero.webp."""
import numpy as np, sys
from PIL import Image
rng=np.random.default_rng(11)
S=int(sys.argv[1]) if len(sys.argv)>1 else 2400
R=S*0.40; C=np.array([S/2,S/2])
Z=np.full((S,S),-1e9,np.float32); N=np.zeros((S,S,3),np.float32); COL=np.zeros((S,S,3),np.float32); ID=np.zeros((S,S),np.int8)
def rot(a,ax):
    c,s=np.cos(a),np.sin(a)
    return {'x':np.array([[1,0,0],[0,c,-s],[0,s,c]]),'y':np.array([[c,0,s],[0,1,0],[-s,0,c]]),'z':np.array([[c,-s,0],[s,c,0],[0,0,1]])}[ax]
# object -> world: the cut octant (+x,+y,+z) opens toward the viewer, up and to the right
d=np.array([1,1,1.])/3**.5; t=np.array([.42,.30,.86]); t/=np.linalg.norm(t)
ax=np.cross(d,t); s=np.linalg.norm(ax); ax/=s; ang=np.arcsin(s)
K=np.array([[0,-ax[2],ax[1]],[ax[2],0,-ax[0]],[-ax[1],ax[0],0]]); M=np.eye(3)+np.sin(ang)*K+(1-np.cos(ang))*K@K
M=rot(0.35,'z')@M  # roll a little so the cut faces read clearly
def W(v): return v@M.T
def cut(vo): return (vo[...,0]>0)&(vo[...,1]>0)&(vo[...,2]>0)
def sphere(c,r,col,kind):
    cx,cy,cz=c; x0,x1=int(max(cx-r-1,0)),int(min(cx+r+2,S)); y0,y1=int(max(cy-r-1,0)),int(min(cy+r+2,S))
    if x1<=x0 or y1<=y0: return
    yy,xx=np.mgrid[y0:y1,x0:x1]; dx=(xx+.5-cx)/r; dy=(yy+.5-cy)/r; d2=dx*dx+dy*dy; m=d2<1
    dz=np.sqrt(np.clip(1-d2,0,1)); z=cz+dz*r; sub=Z[y0:y1,x0:x1]; u=m&(z>sub)
    sub[u]=z[u]; n=N[y0:y1,x0:x1]; n[u]=np.stack([dx,-dy,dz],-1)[u]; COL[y0:y1,x0:x1][u]=col; ID[y0:y1,x0:x1][u]=kind
def put(vw,r,col,kind):  # vw: world coords in units of R
    sphere((C[0]+vw[0]*R,C[1]-vw[1]*R,vw[2]*R),r*R,col,kind)
def fib(n):
    i=np.arange(n)+.5; ph=np.arccos(1-2*i/n); th=np.pi*(1+5**.5)*i
    return np.stack([np.cos(th)*np.sin(ph),np.sin(th)*np.sin(ph),np.cos(ph)],-1)
pearl=np.array([.90,.92,.955]); tail=np.array([.74,.78,.86]); lumen=np.array([.66,.71,.80])
blue=np.array([42,110,215])/255; blueL=np.array([122,164,230])/255
HR=0.024; RI=0.86  # headgroup radius, inner leaflet radius
def jit(p,s): p=p+rng.normal(0,s,p.shape); return p/np.linalg.norm(p,axis=1,keepdims=True)
# outer leaflet
for v in jit(fib(11000),.004):
    if cut(v): continue
    w=W(v)
    if w[2]<-.3: continue
    put(w,HR*(0.9+0.25*rng.random()),pearl*(0.94+0.08*rng.random()),1)
# inner leaflet (seen through the cut), facing the lumen
for v in jit(fib(8200),.004):
    if cut(v): continue
    w=W(v)*RI
    put(w,HR*0.95*(0.9+0.2*rng.random()),lumen*(0.95+0.08*rng.random()),3)
# the bilayer in section along the three cut faces: headgroups at both radii, tails between
for a_ in range(3):
    b_=(a_+1)%3
    for th in np.linspace(0,np.pi/2,260):
        for rr,col,rad in ((1.0,pearl,HR),(RI,pearl*.97,HR*.95)):
            v=np.zeros(3); v[a_]=np.cos(th)*rr; v[b_]=np.sin(th)*rr; v+=rng.normal(0,.002,3)
            put(W(v),rad*(0.9+0.2*rng.random()),col,1)
        for k in range(4):
            rr=RI+(1-RI)*(0.25+0.5*k/3); v=np.zeros(3); v[a_]=np.cos(th)*rr; v[b_]=np.sin(th)*rr
            put(W(v),HR*.5,tail*(0.95+0.06*rng.random()),1)
# transmembrane proteins: low, flush clusters in the outer leaflet
for v in jit(fib(46),.07):
    if cut(v) or (v>-0.06).all(): continue
    w=W(v)
    if w[2]<-.35: continue
    tt=np.cross(w,[0,0,1.]); tt/=np.linalg.norm(tt)+1e-9; bb=np.cross(w,tt)
    n=3+int(rng.random()<.4)
    for j in range(n):
        a=2*np.pi*j/n+rng.random(); off=(tt*np.cos(a)+bb*np.sin(a))*0.026
        put(w*1.012+off,0.03,blue,2); put(w*1.042+off*.7,0.026,blue*.55+blueL*.45,2)
# cargo: short double-stranded RNAs (two twisted bead strands) in the lumen, seen through the opening
for k in range(8):
    while True:
        p=rng.normal(0,1,3); p=np.abs(p); p=p/np.linalg.norm(p)*(0.3+0.42*rng.random())
        if p.min()>0.13: break
    dvec=rng.normal(0,1,3); dvec/=np.linalg.norm(dvec)
    e1=np.cross(dvec,[0,0,1.]); e1/=np.linalg.norm(e1); e2=np.cross(dvec,e1)
    L=0.16+0.06*rng.random(); ph0=rng.random()*6
    for s_ in np.linspace(-L/2,L/2,26):
        for strand,col in ((0,blue),(np.pi,blueL)):
            a=s_/L*2*np.pi*1.6+ph0+strand
            q=p+dvec*s_+(e1*np.cos(a)+e2*np.sin(a))*0.017
            put(W(q),0.0135,col,4)
mask=Z>-1e8
Ln=np.array([-.55,.6,.58]); Ln/=np.linalg.norm(Ln)
lam=(N*Ln).sum(-1); wrap=np.clip((lam+.45)/1.45,0,1)
Hh=Ln+np.array([0,0,1.]); Hh/=np.linalg.norm(Hh); nh=np.clip((N*Hh).sum(-1),0,1)
def boxb(a,r):
    for ax_ in (0,1):
        p=np.concatenate([np.repeat(np.take(a,[0],ax_),r+1,ax_),a,np.repeat(np.take(a,[-1],ax_),r,ax_)],ax_);c=np.cumsum(p,ax_)
        a=(np.take(c,range(2*r+1,c.shape[ax_]),ax_)-np.take(c,range(0,c.shape[ax_]-2*r-1),ax_))/(2*r+1)
    return a
Zf=np.where(mask,Z,Z[mask].min()-R*.1).astype(np.float64)
ao=np.zeros((S,S))
for r in (3,8,18,40,90):
    s=max(1,int(r*S/2000)); bb=Zf
    for _ in range(2): bb=boxb(bb,s)
    ao+=np.clip((bb-Zf)/(s*2.2),0,1)
ao=np.clip(1-ao/2.2,0,1)
yy,xx=np.mgrid[0:S,0:S]; gx=(xx+.5-C[0])/R; gy=-(yy+.5-C[1])/R; gz=np.sqrt(np.clip(1-gx*gx-gy*gy,0,1))
gwrap=np.clip((gx*Ln[0]+gy*Ln[1]+gz*Ln[2]+.6)/1.6,0,1)
inside=(ID==3)|(ID==4)
body=np.where(inside,0.75,0.2+0.8*gwrap**1.3)
diff=(0.25+0.75*wrap)*body*(0.3+0.7*ao)
spec=(nh**40*0.32+nh**8*0.05)*ao
rim=np.clip(1-gz,0,1)**2.2*((ID==1)|(ID==2))
img=COL*diff[...,None]+spec[...,None]+rim[...,None]*np.array([.55,.72,1.0])*0.26
img=np.clip(img,0,1)
rgba=np.dstack([img*255,mask*255]).astype(np.uint8)
im=Image.fromarray(rgba,'RGBA').resize((S//2,S//2),Image.LANCZOS)
im=im.crop(im.getbbox()); im.save('hero.png'); im.save('hero.webp',quality=88,method=6); print(im.size)
