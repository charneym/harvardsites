#!/usr/bin/env python3
"""XapHe hero (PROD_BRIEF 0c / 3b, variant B lighting): a crafted render of their actual science, one HAWC nanoparticle
(xaphe.co.uk/technology: the HAWC peptide condenses nucleic acids into nanoparticles of "~100 nm" with a polydispersity
index "consistently less than 0.06"; "HAWC can complex any size or number of nucleic acids from DNA to all types of RNA
within the one nanoparticle"). Drawn as a coarse-grained molecular model: a near-spherical particle of short peptide
chains (24 residues, as HAWC: the 15-aa consensus sequence plus 9 added residues), with strands of RNA wound through
it and a few loops at the surface. Residue scale and packing are illustrative. Satin material, neutral studio light
(key upper left, low fill, dim rim), screen-space ambient occlusion, no glow; alpha out.
Rendered by z-buffered sphere impostors (each bead shaded analytically), supersampled.
Usage: python3 render_b.py W H out.png [SS] [seed]"""
import sys, numpy as np
from PIL import Image, ImageFilter
W=int(sys.argv[1]);H=int(sys.argv[2]);OUT=sys.argv[3];SS=int(sys.argv[4]) if len(sys.argv)>4 else 2;SEED=int(sys.argv[5]) if len(sys.argv)>5 else 7
rng=np.random.default_rng(SEED)
FW,FH=W,H;W,H=W*SS,H*SS
def nrm(v):return v/np.linalg.norm(v,axis=-1,keepdims=True)
# ---- geometry -------------------------------------------------------------------------------------------------------
B=[]   # (x,y,z,r,kind,tone)  kind 0 peptide, 1 RNA
RP=.052
def chain(p0,n,step,R,surf=True):
    pts=[p0];d=nrm(rng.normal(size=3))
    for i in range(n-1):
        d=nrm(d+rng.normal(size=3)*.55);p=pts[-1]+d*step
        rr=np.linalg.norm(p)
        if surf and rr>R:p=p/rr*(R-rng.random()*.02)
        pts.append(p)
    return pts
# peptide chains filling a lumpy sphere, densest at the surface (only the outer shell is visible)
NCH=520
for c in range(NCH):
    u=nrm(rng.normal(size=3));R=1.0+.035*np.sin(5*u[0]+2)*np.cos(4*u[1])
    p0=u*(R-rng.random()*.12)
    for p in chain(p0,24,RP*1.35,R):B.append((*p,RP*(.92+.16*rng.random()),0,rng.random()))
# RNA: long strands wound around and through the particle, a little proud of the surface, with a few loops out
def rna(n0,turns,phase,tilt,lift,loopat):
    ax=nrm(np.array([np.cos(tilt),np.sin(tilt),.4]))
    e1=nrm(np.cross(ax,[0,0,1]));e2=np.cross(ax,e1)
    N=int(turns*190)
    for i in range(N):
        t=i/N*turns*2*np.pi+phase
        h=np.sin(i/N*np.pi*2.2+phase)*.55
        r=np.sqrt(max(1-h*h,.05))
        p=(e1*np.cos(t)+e2*np.sin(t))*r+ax*h
        rr=1.0+lift+.045*np.sin(i/N*turns*2*np.pi*3.1+phase*2)
        for la in loopat:
            rr+=.20*np.exp(-((i/N-la)/.018)**2)
        p=nrm(p)*rr
        B.append((*p,.034,1,.5))
rna(0,2.4,0.3,.6,0,[.31,.74])
rna(0,2.1,2.0,2.2,-.005,[.55])
rna(0,1.9,4.1,-1.0,.0,[.18,.86])
B=np.array(B)
print('beads',len(B))
# ---- view -----------------------------------------------------------------------------------------------------------
ang=np.radians(24);Rot=np.array([[np.cos(ang),0,np.sin(ang)],[0,1,0],[-np.sin(ang),0,np.cos(ang)]])
P=B[:,:3]@Rot.T;Rr=B[:,3];K=B[:,4].astype(int)
CAMD=6.0;F=H/2/1.42          # pixels per unit at the particle centre
def proj(p):
    s=CAMD/(CAMD-p[:,2]);return W/2+p[:,0]*F*s,H/2-p[:,1]*F*s,s
X,Y,S=proj(P)
Z=np.full((H,W),-1e9);N=np.zeros((H,W,3));Kb=np.full((H,W),-1,int);A=np.zeros((H,W));Tn=np.zeros((H,W));TN=B[:,5]
order=np.argsort(P[:,2])
for i in order:
    r=Rr[i]*F*S[i];x0=int(max(0,X[i]-r-1));x1=int(min(W,X[i]+r+2));y0=int(max(0,Y[i]-r-1));y1=int(min(H,Y[i]+r+2))
    if x1<=x0 or y1<=y0:continue
    yy,xx=np.mgrid[y0:y1,x0:x1];dx=(xx+.5-X[i])/r;dy=(yy+.5-Y[i])/r;d2=dx*dx+dy*dy
    m=d2<1
    nz=np.sqrt(np.clip(1-d2,0,1));z=P[i,2]+nz*Rr[i]
    sub=Z[y0:y1,x0:x1];w=m&(z>sub)
    sub[w]=z[w]
    N[y0:y1,x0:x1][w]=np.stack([dx,-dy,nz],-1)[w]
    Kb[y0:y1,x0:x1][w]=K[i];Tn[y0:y1,x0:x1][w]=TN[i]
    A[y0:y1,x0:x1][w]=1
hit=A>0
# ---- shading --------------------------------------------------------------------------------------------------------
KEY=nrm(np.array([-.62,.62,.48]));FILL=nrm(np.array([.7,-.15,.7]));V=np.array([0,0,1.])
n=N[hit];n=nrm(n)
dk=np.clip(n@KEY,0,1);df=np.clip(n@FILL,0,1);sky=np.clip(n[:,1]*.5+.5,0,1)
hk=nrm(KEY+V);sp=np.clip(n@hk,0,1);fr=(1-np.clip(n[:,2],0,1))**4
# screen-space AO: how far each pixel sits below its blurred neighbourhood
Zf=np.where(hit,Z,np.nan);zmin=np.nanmin(Zf);Zc=np.where(hit,Z,zmin-.1)
def gblur(a,sig):
    k=int(sig*3);x=np.arange(-k,k+1);g=np.exp(-x*x/(2*sig*sig));g/=g.sum()
    a=np.pad(a,k,mode='edge')
    a=sum(g[i]*a[:,i:i+a.shape[1]-2*k] for i in range(len(g)))
    a=sum(g[i]*a[i:i+a.shape[0]-2*k,:] for i in range(len(g)))
    return a
ao=np.ones((H,W))
for rad,wt in ((2,.9),(6,.7),(16,.45)):
    bl=gblur(Zc,rad*SS)
    ao-=np.clip((bl-Zc)*wt*6.0,0,.5)
ao=np.clip(ao,.25,1)[hit]
kind=Kb[hit]
alb=np.where((kind==1)[:,None],np.array([.30,.58,.64])[None],np.array([.66,.67,.69])[None]*(.90+.16*Tn[hit])[:,None])   # RNA a muted teal, peptide a pale neutral
# a large-scale term so the particle reads as one lit sphere as well as many beads
gx,gy=np.mgrid[0:H,0:W];cx,cy=W/2,H/2;R0=F*1.0
gn=np.stack([(gy-cx)/R0,-(gx-cy)/R0],-1);g2=(gn**2).sum(-1);gz=np.sqrt(np.clip(1-g2,0,1));G=np.dstack([gn,gz])[hit];G=nrm(G+1e-6)
big=np.clip(G@KEY,0,1)
c=alb*(.04+.48*dk[:,None]*(.45+.55*big[:,None])+.10*df[:,None]+.07*sky[:,None])*ao[:,None]+(sp**36*.42+sp**8*.05)[:,None]*ao[:,None]+(fr*.05*big)[:,None]
c=c/(1+.35*c)*1.3;c=np.clip(c,0,1)**(1/2.2)
img=np.zeros((H,W,4));img[hit,:3]=c;img[hit,3]=1
im=Image.fromarray((img*255).clip(0,255).astype(np.uint8),'RGBA')
if SS>1:im=im.resize((FW,FH),Image.LANCZOS)
print('bbox',im.getbbox());im.save(OUT)
