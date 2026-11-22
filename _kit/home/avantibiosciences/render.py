#!/usr/bin/env python3
"""Hero render (HOME_BRIEF update 2c, PRINCIPLES DQ): the kinase ABI-171 is designed to inhibit. Human DYRK1A kinase domain,
chain A of the crystal structure RCSB PDB 2VX3 (https://www.rcsb.org/structure/2VX3), as a "tube-helix" cartoon from the
file's own HELIX/SHEET records: alpha helices as smooth cylinders along the helix axis, beta strands as smoothed rods, loops
as a fine tube, one continuous spline. The ATP-binding cleft (glycine-rich loop 166-174, catalytic Lys188, hinge 238-243,
DFG 310-312) in the Avanti logo crimson; the rest in warm silver. A faint glass envelope (all heavy atoms, smoothed) holds
the fold. Spheres swept into a depth buffer, Lambert + specular + rim + depth-buffer AO, supersampled 2x, real alpha
(no box edge, DJ/DP). Output: kin.png (RGBA). The ligand ABI-171 itself is not drawn."""
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
CA={};AT=[];AR=[];SS={}
for l in open(H/'2vx3.pdb'):
    if l.startswith('HELIX') and l[19]=='A':
        for r in range(int(l[21:25]),int(l[33:37])+1): SS[r]='H' if (int(l[33:37])-int(l[21:25]))>=4 else 'L'
    if l.startswith('SHEET') and l[21]=='A':
        for r in range(int(l[22:26]),int(l[33:37])+1): SS[r]='E'
    if l.startswith('ATOM') and l[21]=='A' and l[16] in ' A':
        e=(l[76:78].strip() or l[12:14].strip()[0])
        p=[float(l[30:38]),float(l[38:46]),float(l[46:54])]
        if e!='H': AT.append(p);AR.append(int(l[22:26]))
        if l[12:16].strip()=='CA': CA[int(l[22:26])]=p
RN=np.array(sorted(CA));C=np.array([CA[r] for r in RN]);AT=np.array(AT);AR=np.array(AR)
HOT=set(range(166,175))|{188}|set(range(238,244))|set(range(310,313))
mu=C.mean(0);w,v=np.linalg.eigh(np.cov((C-mu).T));V=v[:,::-1]
P=(C-mu)@V;AP=(AT-mu)@V
def rot(a,ax):
    c,s=np.cos(a),np.sin(a)
    return {'x':np.array([[1,0,0],[0,c,-s],[0,s,c]]),'y':np.array([[c,0,s],[0,1,0],[-s,0,c]]),'z':np.array([[c,-s,0],[s,c,0],[0,0,1]])}[ax]
ang=[float(a) for a in (sys.argv[1:4] if len(sys.argv)>3 else (0.0,0.0,0.0))]
RM=rot(ang[0],'x').T@rot(ang[1],'y').T@rot(ang[2],'z').T;P=P@RM;AP=AP@RM
S=int(sys.argv[4]) if len(sys.argv)>4 else 2400
# trace points per residue
ss=np.array([SS.get(r,'L') for r in RN])
T=P.copy();RAD=np.full(len(P),0.42)
for i in range(len(P)):
    if ss[i]=='H':
        lo_,hi_=max(0,i-2),min(len(P),i+2)
        # helix axis: mean of a 4-residue window, kept inside the helix
        j0=i-1 if (i-1>=0 and ss[i-1]=='H') else i
        j0=min(j0,len(P)-4);T[i]=P[j0:j0+4].mean(0);RAD[i]=2.05
    elif ss[i]=='E':
        if 0<i<len(P)-1: T[i]=(P[i-1]+2*P[i]+P[i+1])/4
        RAD[i]=0.95
    else:
        if 0<i<len(P)-1: T[i]=(P[i-1]+4*P[i]+P[i+1])/6
# helices: straighten each run onto its best-fit axis (clean cylinders)
i=0
while i<len(P):
    if ss[i]=='H':
        j=i
        while j<len(P) and ss[j]=='H' and (j==i or RN[j]-RN[j-1]==1): j+=1
        A_=T[i:j];m_=A_.mean(0);u_=np.linalg.svd(A_-m_)[2][0]
        T[i:j]=m_+np.outer((A_-m_)@u_,u_);i=j
    else: i+=1
# smooth radius transitions
Rs=RAD.copy()
for _ in range(2): Rs[1:-1]=np.maximum(RAD[1:-1],(Rs[:-2]+Rs[2:])/2*0.0)+0
segs=[];st=0
for i in range(1,len(P)):
    if RN[i]-RN[i-1]>1 or np.linalg.norm(P[i]-P[i-1])>4.3: segs.append((st,i));st=i
segs.append((st,len(P)))
pts=[];prad=[];hot=[];tt=[]
for a,b in segs:
    Q=T[a:b];R=RN[a:b];RR=RAD[a:b]
    if len(Q)<2: continue
    Qe=np.vstack([Q[:1]*2-Q[1:2],Q,Q[-1:]*2-Q[-2:-1]])
    for i in range(len(Q)-1):
        p0,p1,p2,p3=Qe[i],Qe[i+1],Qe[i+2],Qe[i+3]
        L=np.linalg.norm(p2-p1);n=max(6,int(L/0.12))
        for k in range(n):
            t=k/n
            c=0.5*((2*p1)+(-p0+p2)*t+(2*p0-5*p1+4*p2-p3)*t*t+(-p0+3*p1-3*p2+p3)*t**3)
            u=t*t*(3-2*t);pts.append(c);prad.append(RR[i]*(1-u)+RR[i+1]*u)
            hot.append((R[i] in HOT) if t<.5 else (R[i+1] in HOT));tt.append((a+i+t)/len(P))
pts=np.array(pts);prad=np.array(prad);hot=np.array(hot);tt=np.array(tt)
VR=2.5
lo=(AP[:,:2]-VR).min(0);hi=(AP[:,:2]+VR).max(0)
sc=S*0.92/(hi-lo).max();off=np.array([S,S])/2-(lo+hi)/2*sc
def splat(cen,rads):
    Z=np.full((S,S),-1e9);N=np.zeros((S,S,3));ID=np.full((S,S),-1)
    for i in np.argsort(cen[:,2]):
        cx,cy=cen[i,:2]*sc+off;cy=S-cy;r=rads[i]*sc
        x0,x1=int(max(cx-r,0)),int(min(cx+r+1,S));y0,y1=int(max(cy-r,0)),int(min(cy+r+1,S))
        if x1<=x0 or y1<=y0: continue
        yy,xx=np.mgrid[y0:y1,x0:x1];dx=(xx+.5-cx)/r;dy=(yy+.5-cy)/r;d2=dx*dx+dy*dy;m=d2<1
        dz=np.sqrt(np.clip(1-d2,0,1));z=cen[i,2]*sc+dz*r
        sub=Z[y0:y1,x0:x1];upd=m&(z>sub)
        sub[upd]=z[upd];N[y0:y1,x0:x1][upd]=np.stack([dx,-dy,dz],-1)[upd];ID[y0:y1,x0:x1][upd]=i
    return Z,N,ID
Z,N,ID=splat(pts,prad);M=ID>=0
ZS,NS,IS=splat(AP,np.full(len(AP),VR));MS=IS>=0
Zf=np.where(M,Z,Z[M].min()-6*sc)
ao=np.zeros_like(Z)
for rr in (6,14,30,64):
    b=blur(Zf,rr*S/2400);ao+=np.clip((b-Zf)/(rr*S/2400*1.6),0,1)
ao=np.clip(1-ao/2.1,0,1)
Lv=np.array([-.45,.6,.66]);Lv/=np.linalg.norm(Lv)
Hh=Lv+np.array([0,0,1]);Hh/=np.linalg.norm(Hh)
lam=np.clip((N*Lv).sum(-1),0,1);spec=np.clip((N*Hh).sum(-1),0,1)**46
fill=np.clip((N*np.array([.6,-.3,.5])).sum(-1),0,1)
rim=(1-np.clip(N[...,2],0,1))**3
Ii=np.clip(ID,0,None)
silver=np.array([226,222,215])/255;silver2=np.array([176,174,172])/255;crim=np.array([200,46,54])/255
g=tt[Ii][...,None]
col=silver*(1-g*.4)+silver2*(g*.4)
col=np.where(hot[Ii][...,None],crim,col)
zn=(Z-Z[M].min())/(Z[M].max()-Z[M].min()+1e-6);zn=np.where(M,zn,0)
ink=np.array([20,21,24])/255
sh=(0.14+0.86*lam+0.16*fill)[...,None]*col*(0.4+0.6*ao[...,None])
sh+=spec[...,None]*0.55*ao[...,None]+rim[...,None]*np.array([230,130,132])/255*0.14
k=(0.5+0.5*zn)[...,None]
sh=sh*k+ink*(1-k)
img=np.clip(sh,0,1)
# faint glass envelope in front: fresnel-weighted alpha, smooth normals from a blurred surface depth
Zs=np.where(MS,ZS,ZS[MS].min()-4*sc);Zb=blur(Zs,10*S/2400)
gy,gx=np.gradient(Zb);Nn=np.dstack([-gx,gy,np.full_like(gx,1.0)]);Nn/=np.linalg.norm(Nn,axis=-1,keepdims=True)
Ms=blur(MS.astype(float),7*S/2400)
fr=(1-np.clip(Nn[...,2],0,1))**2
hb=blur((np.isin(AR[np.clip(IS,0,None)],list(HOT))&MS).astype(float),14*S/2400)
lamS=np.clip((Nn*Lv).sum(-1),0,1);specS=np.clip((Nn*Hh).sum(-1),0,1)**90
glass=np.array([170,176,190])/255*(0.4+0.6*lamS[...,None])
glass=glass*(1-hb[...,None]*.8)+crim*(0.6+0.5*lamS[...,None])*hb[...,None]*.8
aS=np.clip(0.07+0.42*fr+0.22*hb,0,1)*Ms
out=np.where(M[...,None],img*(1-aS[...,None])+glass*aS[...,None],glass)+specS[...,None]*0.28*Ms[...,None]
A=np.where(M,1.0,aS)
rgba=np.dstack([np.clip(out,0,1)*255,np.clip(A,0,1)*255]).astype(np.uint8)
im=Image.fromarray(rgba,'RGBA').resize((S//2,S//2),Image.LANCZOS)
im=im.crop(im.getbbox());im.save(H/(sys.argv[5] if len(sys.argv)>5 else 'kin.png'));print(im.size,len(P),len(segs))
