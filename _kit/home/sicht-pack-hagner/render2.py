#!/usr/bin/env python3
"""sicht-pack HAGNER hero, PROD-7 photoreal attempt: one roll of clear PET film (Polylux, sold "in Rollen und Formaten")
lying on its side, three-quarter view toward its end face. Perspective ray casting in numpy; neutral studio (variant B:
no coloured glows), long strip lights parallel to the roll axis for the glossy wrap, glassy aqua film edges on the end face,
a kraft cardboard core, and a soft contact shadow on an invisible floor, saved with REAL alpha.
Usage: python3 render2.py W H out.png [SS]"""
import sys, math, numpy as np
from PIL import Image
W=int(sys.argv[1]) if len(sys.argv)>1 else 900; H=int(sys.argv[2]) if len(sys.argv)>2 else 640
OUT=sys.argv[3] if len(sys.argv)>3 else 'hero2.png'; SS=int(sys.argv[4]) if len(sys.argv)>4 else 1
FW,FH=W,H; W,H=W*SS,H*SS
def nrm(v): return v/np.linalg.norm(v,axis=-1,keepdims=True)
def sm(a,b,x): x=np.clip((x-a)/(b-a),0,1); return x*x*(3-2*x)
def h1(i): return (np.sin(i*12.9898+4.1)*43758.5453)%1.0
R,RC,RH,L=1.0,0.34,0.27,1.6            # roll radius, core outer/inner, length; axis = x; floor at y=-R
CAM=np.array([-3.9,1.55,4.6]); TGT=np.array([0.12,-0.18,0.05])
F=nrm(TGT-CAM); RT=nrm(np.cross(F,[0,1,0])); UP=np.cross(RT,F); FOV=0.265
asp=W/H; xs=(np.arange(W)+.5)/W*2-1; ys=1-(np.arange(H)+.5)/H*2
X,Y=np.meshgrid(xs*FOV*asp,ys*FOV)
D=nrm(F[None,None]+X[...,None]*RT+Y[...,None]*UP); O=np.broadcast_to(CAM,D.shape)
KEY=nrm(np.array([-0.35,0.85,0.4]))
def env(d):
    x,y,z=d[...,0],d[...,1],d[...,2]
    phi=np.arctan2(y,z)                       # angle about the roll axis: strip lights run along x
    c=np.full(d.shape,0.035)+0.05*sm(-0.2,0.9,y)[...,None]
    soft=sm(0.25,0.75,y)*sm(0.95,0.45,np.abs(x+0.1))
    c=c+soft[...,None]*np.array([0.85,0.86,0.87])
    for p0,w,k in ((1.05,0.045,3.2),(1.32,0.018,2.2),(1.62,0.03,2.0),(0.55,0.05,1.2),(0.18,0.035,1.4)):
        s=np.exp(-((phi-p0)/w)**2)*sm(-0.95,-0.4,-np.abs(x)+0.2)
        c=c+(s*k)[...,None]*np.array([1.0,1.0,1.0])
    c=c+(sm(-0.05,-0.6,y)*0.16)[...,None]*np.array([0.95,0.97,1.0])
    return c
col=np.zeros((H,W,3)); alpha=np.zeros((H,W)); tb=np.full((H,W),np.inf)
# outer wrap
a=D[...,1]**2+D[...,2]**2; b=2*(O[...,1]*D[...,1]+O[...,2]*D[...,2]); c=O[...,1]**2+O[...,2]**2-R*R
disc=b*b-4*a*c; ok=disc>0; t=np.where(ok,(-b-np.sqrt(np.maximum(disc,0)))/(2*a),np.inf)
P=O+t[...,None]*D; hit=ok&(np.abs(P[...,0])<L/2)
N=np.stack([np.zeros_like(t),P[...,1],P[...,2]],-1)/R
cosi=np.clip(-(D*N).sum(-1),0,1); Rf=D+2*cosi[...,None]*N
fres=0.09+0.91*(1-cosi)**5
lam=np.clip((N*KEY).sum(-1),0,1); ang=np.arctan2(P[...,2],P[...,1])
stack=np.array([0.50,0.57,0.58])*(0.06+0.42*lam+0.10*sm(-1,1,N[...,1]))[...,None]
streak=1+0.05*h1(np.floor(np.nan_to_num(ang)*140))+0.02*np.sin(np.nan_to_num(ang)*900)
spec=np.exp(-((np.clip((nrm(KEY-D)*N).sum(-1),0,1)-1)/0.004)**2)*0.0
wrap=stack*streak[...,None]+fres[...,None]*env(Rf)+spec[...,None]
edge=sm(L/2-0.012,L/2,np.abs(P[...,0]))*0.8
wrap=wrap+np.array([0.10,0.20,0.19])*(sm(L/2-0.10,L/2,np.abs(P[...,0]))*(0.3+0.7*lam))[...,None]*0.5; wrap=wrap*(1-edge[...,None])+edge[...,None]*np.array([0.62,0.78,0.76])*(0.4+0.6*lam)[...,None]
m=hit&(t<tb); col[m]=wrap[m]; alpha[m]=1; tb[m]=t[m]
# end face toward the camera (x=-L/2)
tx=(-L/2-O[...,0])/D[...,0]; P=O+tx[...,None]*D; r=np.sqrt(P[...,1]**2+P[...,2]**2); face=(r<R)&(tx<tb)&(tx>0)
film=face&(r>=RC)
band=np.floor(r*48); tone=0.74+0.24*h1(band)+0.06*np.sin(r*620)+0.04*np.sin(r*233+2)
graze=sm(-0.6,0.9,P[...,1]/R*0.8-P[...,2]/R*0.35)
glass=np.array([0.36,0.56,0.54])
fc=glass*(tone*(0.30+0.75*graze))[...,None]
# light travelling inside the clear stack glows at the rim and in a band under the top
fc=fc+np.array([0.55,0.80,0.76])*(0.35*sm(0.93,0.995,r)*sm(1.0,0.995,r)+0.18*np.exp(-((P[...,1]/R-0.55)/0.25)**2)*sm(RC,0.7,r))[...,None]
fc=fc+np.array([0.9,1.0,0.98])*(0.25*np.exp(-((P[...,1]*0.7-P[...,2]*0.7-0.45)/0.05)**2)*sm(RC+0.05,0.8,r))[...,None]
fc=fc*(1-0.25*sm(RC+0.08,RC,r))[...,None]
col[film]=fc[film]; alpha[film]=1; tb[film]=tx[film]
core=face&(r<RC)&(r>=RH)
fib=0.92+0.08*h1(np.floor(np.arctan2(P[...,2],P[...,1])*90))*h1(np.floor(r*400))
kraft=np.array([0.55,0.40,0.25])*(0.55+0.45*graze)[...,None]*fib[...,None]
col[core]=kraft[core]; alpha[core]=1; tb[core]=tx[core]
hole=face&(r<RH)
inner=np.array([0.30,0.21,0.13])*(0.15+0.6*sm(-RH,RH,-P[...,1]+P[...,2]*0.3))[...,None]*sm(0,RH,r)[...,None]**0.6
col[hole]=inner[hole]; alpha[hole]=1; tb[hole]=tx[hole]
# contact shadow on the floor y=-R
tf=(-R-O[...,1])/D[...,1]; Pf=O+tf[...,None]*D; fl=(tf>0)&(alpha==0)
qx=np.maximum(np.abs(Pf[...,0])-L/2+0.05,0); dz=np.abs(Pf[...,2])
sh=np.exp(-(dz/0.16)**2)*np.exp(-(qx/0.12)**2)*0.85+np.exp(-(dz/0.75)**2)*np.exp(-(qx/0.5)**2)*0.35
sh=np.clip(sh,0,0.9); col[fl]=0; alpha[fl]=sh[fl]
img=np.clip(col,0,None); img=1-np.exp(-img*1.6); img=img/(1-np.exp(-1.6)); img=np.clip(img,0,1)
rgba=np.dstack([img*255,alpha*255]).astype(np.float32); pm=rgba.copy(); pm[...,:3]*=alpha[...,None]
pm=pm.reshape(FH,SS,FW,SS,4).mean((1,3)); a=pm[...,3:4]/255
out=np.concatenate([np.where(a>0,pm[...,:3]/np.maximum(a,1e-6),0),pm[...,3:4]],-1)
Image.fromarray(np.clip(out,0,255).astype(np.uint8),'RGBA').save(OUT); print('saved',OUT,FW,FH)
