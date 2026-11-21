#!/usr/bin/env python3
"""Hero render: MediCarbone's intramedullary sleeve, a two-layer tube whose inner layer is a braided carbon-fibre fabric
(medicarbone.com/our-technology). Point-splat renderer with a z-buffer, Kajiya-Kay fibre sheen, 2x supersampled, real alpha.
A faint blue glow in the braid gaps stands for the diffusive light guide used to photocure the resin (their own render shows it blue)."""
import numpy as np, sys
from PIL import Image
SS=2; OW,OH=1300,2000; W,H=OW*SS,OH*SS
L=3300.0; R=196.0; N=20                      # 3D length, radius (supersampled px), tows per family
tilt=np.radians(17); lean=0.42
d=np.array([np.sin(tilt),np.cos(tilt),lean]); d/=np.linalg.norm(d)
perp=np.cross(d,[0,0,1.0]); perp/=np.linalg.norm(perp)
bn=np.cross(d,perp)
bow=70.0
ctr=np.array([W*.5,H*.5,0.0])
def C(s):   # centreline, s in [0,L]
    u=s/L-.5
    return ctr[None,:]+np.outer(u*L,d)+np.outer(bow*np.sin(np.pi*s/L),perp)
def Cd(s):
    t=d[None,:]+np.outer(bow*np.pi/L*np.cos(np.pi*s/L),perp); return t/np.linalg.norm(t,axis=1,keepdims=True)
zb=np.full(W*H,-1e9,np.float32); col=np.zeros((W*H,3),np.float32); cov=np.zeros(W*H,np.float32)
V=np.array([0,0,1.0])
def nz(v): return v/np.linalg.norm(v,axis=-1,keepdims=True)
L1=nz(np.array([-.55,.62,.62])); C1=np.array([1.0,.96,.92])*1.15     # key, upper left
L2=nz(np.array([.95,-.05,-.12])); C2=np.array([216,178,164])/255*1.25 # rim, brand rose
L3=nz(np.array([.2,-.8,.5])); C3=np.array([.55,.6,.7])*.35            # cool fill from below
GL=np.array([.32,.62,1.0])
def hsh(a,b): return (np.sin(a*12.9898+b*78.233)*43758.5453)%1.0
Wt=2*np.pi*R/(N*np.sqrt(2))   # tow spacing across
def shade(P,n,ea,es,a,s,inner):
    c1=(a-s)/np.sqrt(2)/Wt; c2=(a+s)/np.sqrt(2)/Wt
    i1=np.floor(c1); i2=np.floor(c2); f1=c1-i1; f2=c2-i2
    top1=((i1+i2)%4)<2
    f=np.where(top1,f1,f2); q=np.where(top1,(((i1+i2)%2)+f2)/2,(((i1+i2+2)%4%2)+f1)/2)
    T=np.where(top1[:,None],nz(ea+es),nz(ea-es))        # fibre direction of the top tow
    X=np.where(top1[:,None],nz(ea-es),nz(ea+es))        # across it
    gap=(f<.07)|(f>.93)
    nn=nz(n+(2*f-1)[:,None]*.75*X+(2*q-1)[:,None]*.45*T)
    if inner: nn=-nn
    ao=(.35+.65*np.sqrt(np.clip(np.sin(np.pi*q),0,1)))*(.55+.45*np.sqrt(np.clip(np.sin(np.pi*f),0,1)))
    stri=(.62+.38*np.abs(np.sin(f*np.pi*11+hsh(i1,i2)*6)))*(.8+.4*hsh(i2,i1))
    out=np.zeros((len(P),3),np.float32)
    for Ld,Lc,ks in ((L1,C1,1.0),(L2,C2,.9),(L3,C3,.6)):
        dif=np.clip((nn*Ld).sum(1),0,1)
        Hh=nz(Ld[None,:]+V[None,:]); th=(T*Hh).sum(1); kk=np.sqrt(np.clip(1-th*th,0,1))
        spec=kk**70*.95+kk**10*.035
        vis=np.clip((n*Ld).sum(1)*(-1 if inner else 1)+.25,0,1)
        out+=(dif[:,None]*.022+ (spec*stri*ks)[:,None]*vis[:,None])*Lc[None,:]
    # clear polymer coat: a soft broad sheen on the geometric normal
    Hk=nz(L1+V); cc=np.clip((n*Hk).sum(1),0,1)**40*.3
    if not inner: out+=cc[:,None]*np.array([1,.98,.95])
    out*=ao[:,None]
    base=np.array([.016,.017,.021])
    out+=base
    # light-guide glow along the length, strongest mid-sleeve
    gw=(.35+.65*np.sin(np.pi*np.clip(s/L,0,1))**1.5)
    gcol=GL[None,:]*(gw*(.6 if inner else .3))[:,None]
    out=np.where(gap[:,None],base*.6+gcol,out)
    if inner: out=out*.55+GL[None,:]*(gw*.08)[:,None]
    return out
def splat(P,c):
    x=P[:,0]; y=H-P[:,1]; z=P[:,2]
    ix=np.round(x).astype(np.int64); iy=np.round(y).astype(np.int64)
    ok=(ix>=0)&(ix<W)&(iy>=0)&(iy<H); ix,iy,z,c=ix[ok],iy[ok],z[ok],c[ok]
    idx=iy*W+ix; o=np.argsort(z,kind='stable'); idx,z,c=idx[o],z[o],c[o]
    k=z>zb[idx]; zb[idx[k]]=z[k]; col[idx[k]]=c[k]; cov[idx[k]]=1
def surf(rad,inner):
    ns=int(L/.45); na=int(2*np.pi*rad/.45)
    S=np.linspace(0,L,ns,dtype=np.float64)
    for k in range(0,ns,600):
        s=S[k:k+600]; Cs=C(s); Ts=Cd(s)
        Nn=nz(np.cross(Ts,bn[None,:])) ; Bb=np.cross(Ts,Nn)
        th=np.linspace(0,2*np.pi,na,endpoint=False)
        ss=np.repeat(s,na); tt=np.tile(th,len(s))
        cs=np.repeat(Cs,na,0); TT=np.repeat(Ts,na,0); NN=np.repeat(Nn,na,0); BB=np.repeat(Bb,na,0)
        n=np.cos(tt)[:,None]*NN+np.sin(tt)[:,None]*BB
        P=cs+rad*n
        ea=-np.sin(tt)[:,None]*NN+np.cos(tt)[:,None]*BB
        a=tt*R
        if not inner:  # back half never visible from outside: skip for speed
            m=n[:,2]>-.35; P,n,ea,TT,a,ss=P[m],n[m],ea[m],TT[m],a[m],ss[m]
        splat(P,shade(P,n,ea,TT,a,ss,inner))
    print('surf',rad,inner,file=sys.stderr)
surf(R*.94,True)
surf(R,False)
# cut rims at both ends: thin annulus, the polymer layer's edge
for s0 in (0.0,L):
    Cs=C(np.array([s0]))[0]; Ts=Cd(np.array([s0]))[0]; Nn=nz(np.cross(Ts,bn)); Bb=np.cross(Ts,Nn)
    rr=np.linspace(R*.94,R,40); th=np.linspace(0,2*np.pi,int(2*np.pi*R/.4))
    rg,tg=np.meshgrid(rr,th); rg=rg.ravel(); tg=tg.ravel()
    P=Cs[None,:]+rg[:,None]*(np.cos(tg)[:,None]*Nn+np.sin(tg)[:,None]*Bb)
    nrm=Ts if s0>0 else -Ts
    lit=max(0,(nrm*L1).sum())*.55+.06
    splat(P,np.tile(np.array([.30,.28,.27])*lit*2.2,(len(P),1)).astype(np.float32))
img=col.reshape(H,W,3); a=cov.reshape(H,W)
# downsample (premultiplied) for AA
pm=img*a[...,None]
pm=pm.reshape(OH,SS,OW,SS,3).mean((1,3)); A=a.reshape(OH,SS,OW,SS).mean((1,3))
rgb=np.where(A[...,None]>0,pm/np.maximum(A[...,None],1e-6),0)
# filmic tone map + mild grade toward the brand ink
rgb=1-np.exp(-rgb*1.55)
rgb=np.clip(rgb,0,1)**(1/1.9)
out=np.dstack([rgb*255,A*255]).clip(0,255).astype(np.uint8)
ys,xs=np.nonzero(A>0); print('bbox',xs.min(),xs.max(),ys.min(),ys.max(),file=sys.stderr)
Image.fromarray(out,'RGBA').save(sys.argv[1] if len(sys.argv)>1 else 'hero.png')
