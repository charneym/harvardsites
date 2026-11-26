#!/usr/bin/env python3
"""Hero render (HOME_BRIEF update 2c): one Feller power cord set, the product shown on feller-at.com (Grounded plugs /
Grounded connectors): an IEC 60320 C13 connector (face 23 x 15.8 mm, chamfered top corners, E slot centred above the
N and L slots, per Feller's own C13 data sheet) and a straight CEE 7/7 earthed plug (round face, two pins, earthing
recesses), moulded onto one flexible cord with ribbed strain-relief boots. Light-grey PVC, nickel-plated pins.
No text or branding on it. Numpy sphere tracer, real alpha.
Usage: render.py WIDTH out.png"""
import numpy as np, sys
from PIL import Image
WO=int(sys.argv[1]) if len(sys.argv)>1 else 1200; OUT=sys.argv[2] if len(sys.argv)>2 else 'hero.png'
SS=2; W=WO*SS; H=int(W*0.86)
f32=np.float32
def nrm(v):return v/(np.linalg.norm(v,axis=-1,keepdims=True)+1e-9)
def sm(a,b,x):x=np.clip((x-a)/(b-a),0,1);return x*x*(3-2*x)
def rbox(q,b,r):
    d=np.abs(q)-(np.asarray(b,f32)-r)
    return np.linalg.norm(np.maximum(d,0),axis=-1)+np.minimum(d.max(-1),0)-r
def frame(d,up=(0,1,0)):
    w=np.array(d,f32);w/=np.linalg.norm(w);u=np.cross(np.array(up,f32),w);u/=np.linalg.norm(u);v=np.cross(w,u);return np.stack([u,v,w])
# ---------- placement (cm, y up, camera on +z) ----------
P1=np.array([-3.3,-2.0,1.6],f32); F1=frame((-0.62,0.10,0.78))      # C13: face points toward camera-left
P2=np.array([3.3,2.1,-0.6],f32); F2=frame((0.60,0.30,0.74))       # CEE 7/7 plug: pins toward camera-right
L1=4.9; L2=4.4                                                       # body+boot length behind each face
def tolocal(p,P,F):return (p-P)@F.T
# cord: cubic Bezier from the C13 boot end to the plug boot end, leaving each boot along its axis, sagging behind
A0=P1-F1[2]*L1; A3=P2-F2[2]*L2
A1=A0-F1[2]*6.5+np.array([0.5,-1.6,-3.2],f32); A2=A3-F2[2]*7.0+np.array([1.2,-4.2,-2.4],f32)
ts=np.linspace(0,1,64,dtype=f32)[:,None]
CP=((1-ts)**3*A0+3*(1-ts)**2*ts*A1+3*(1-ts)*ts**2*A2+ts**3*A3).astype(f32)
CR=0.36
SA=CP[:-1];SB=CP[1:];SD=SB-SA;SL=(SD*SD).sum(-1)
def cord(p):
    d=np.full(p.shape[0],1e9,f32)
    for i in range(len(SA)):
        pa=p-SA[i];h=np.clip((pa@SD[i])/SL[i],0,1);d=np.minimum(d,np.linalg.norm(pa-h[:,None]*SD[i],axis=-1))
    return d-CR
def boot(q,z0,z1,a0,b0,r1):
    """ribbed strain relief from z0 (at body, half sizes a0 x b0) tapering to radius r1 at z1 (<z0)"""
    t=np.clip((q[:,2]-z0)/(z1-z0),0,1);a=a0+(r1-a0)*t**.8;b=b0+(r1-b0)*t**.8
    e=np.sqrt((q[:,0]/a)**2+(q[:,1]/b)**2)-1;d=e*np.minimum(a,b)
    rib=(t>.32)&(t<.93);d=d+np.where(rib,0.045*sm(.35,.75,np.abs(np.sin((q[:,2]-z0)*np.pi/0.34))),0)
    cap=np.maximum(q[:,2]-z0-0.05,z1-q[:,2]);return np.maximum(d,cap)
def c13(p):
    q=tolocal(p,P1,F1)
    b=rbox(q-np.array([0,0,-1.35],f32),(1.28,0.9,1.35),0.16)
    ch=(np.abs(q[:,0])*0.7071+q[:,1]*0.7071)-(1.28+0.9-0.30)*0.7071
    b=np.maximum(b,ch)
    # a shallow step 2.3 cm back (where the face shell meets the grip)
    b=np.maximum(b,-(rbox(q-np.array([0,0,-2.35],f32),(1.4,1.05,0.03),0.01)))
    holes=np.minimum(rbox(q-np.array([0,0.27,0],f32),(0.13,0.21,0.9),0.025),
          np.minimum(rbox(q-np.array([0.7,-0.16,0],f32),(0.13,0.26,0.9),0.025),rbox(q-np.array([-0.7,-0.16,0],f32),(0.13,0.26,0.9),0.025)))
    b=np.maximum(b,-holes)
    bt=boot(q,-2.62,-L1,1.0,0.74,CR+0.02)
    return np.minimum(b,bt),holes
def cee(p):
    q=tolocal(p,P2,F2)
    rr=np.sqrt(q[:,0]**2+q[:,1]**2)
    # round face body, edge rounded
    dz=np.abs(q[:,2]+0.55)-0.55;dr=rr-1.92
    body=np.minimum(np.maximum(dr,dz),0)+np.sqrt(np.maximum(dr+.18,0)**2+np.maximum(dz+.18,0)**2)-.18
    # grip: an ellipse tapering back from the face body
    t=np.clip((q[:,2]+1.1)/(-1.6),0,1);a=1.80-0.42*t;bb=1.12-0.12*t
    g=(np.sqrt((q[:,0]/a)**2+(q[:,1]/bb)**2)-1)*np.minimum(a,bb);g=np.maximum(g,np.maximum(q[:,2]+1.0,-2.7-q[:,2]))
    body=np.minimum(body,g)
    # earthing recesses at top and bottom of the round face
    rec=rbox(np.stack([q[:,0],np.abs(q[:,1])-1.92,q[:,2]+0.32],-1),(0.42,0.3,0.36),0.05)
    body=np.maximum(body,-rec)
    bt=boot(q,-2.6,-L2,0.95,0.72,CR+0.02)
    body=np.minimum(body,bt)
    # pins: 4.8 mm diameter, 19 mm long, 19 mm apart, rounded tips
    px=np.abs(q[:,0])-0.95;pz=q[:,2]-0.95
    pin=np.sqrt(px**2+q[:,1]**2)-0.24;pin=np.maximum(pin,np.abs(pz)-0.95)
    pin=np.minimum(pin,np.sqrt(px**2+q[:,1]**2+np.maximum(q[:,2]-1.9,0)**2)-0.24)
    pin=np.maximum(pin,q[:,2]-1.98);pin=np.maximum(pin,-q[:,2])
    return body,pin
def scene(p):
    a,holes=c13(p);b,pin=cee(p);c=cord(p)
    plastic=np.minimum(np.minimum(a,b),c)
    d=np.minimum(plastic,pin)
    return d,(pin<plastic),holes
def sdf(p):return scene(p)[0]
# ---------- camera ----------
EYE=np.array([0.6,5.2,19.5],f32);TGT=np.array([0.2,-0.15,0],f32);FOV=0.36
fw=nrm(TGT-EYE);rt=nrm(np.cross(fw,np.array([0,1,0],f32)));upv=np.cross(rt,fw)
ys,xs=np.mgrid[0:H,0:W].astype(f32)
sx=(xs+.5)/W*2-1;sy=1-(ys+.5)/H*2
dirs=nrm(fw+rt*sx[...,None]*np.tan(FOV)+upv*sy[...,None]*np.tan(FOV)*H/W).reshape(-1,3).astype(f32)
N=dirs.shape[0];T=np.zeros(N,f32);hit=np.zeros(N,bool);act=np.arange(N)
# bounding sphere skip
bc=np.array([0.0,0.0,0.0],f32);br=8.8
oc=EYE-bc;bq=(dirs@oc);cq=(oc@oc)-br*br;disc=bq*bq-cq
act=act[disc>0];T[act]=np.maximum(-bq[act]-np.sqrt(disc[act]),0)
for it in range(220):
    if act.size==0:break
    p=EYE+dirs[act]*T[act,None];d=sdf(p)
    h=d<0.0015*T[act]
    hit[act[h]]=True
    T[act]+=d*0.9
    keep=(~h)&(T[act]<40)
    act=act[keep]
print('traced',it,hit.sum())
idx=np.nonzero(hit)[0];P=EYE+dirs[idx]*T[idx,None]
d0,isMetal,holes=scene(P)
e=0.004
nx=sdf(P+[e,0,0])-sdf(P-[e,0,0]);ny=sdf(P+[0,e,0])-sdf(P-[0,e,0]);nz=sdf(P+[0,0,e])-sdf(P-[0,0,e])
Nn=nrm(np.stack([nx,ny,nz],-1))
V=-dirs[idx]
# ambient occlusion (5 taps)
ao=np.ones(len(idx),f32)
for k,s in enumerate([0.06,0.14,0.28,0.5,0.8]):ao-=(s-sdf(P+Nn*s))*(0.55/(k+1))
ao=np.clip(ao,0.15,1)
# deep inside the C13 slots
slot=np.clip(-holes,0,1);inslot=holes<0.01
def L(v):v=np.array(v,f32);return v/np.linalg.norm(v)
lights=[(L((-0.5,0.8,0.55)),np.array([1.0,0.97,0.93],f32)*1.05,True),   # key, top-left, near white
        (L((0.7,0.15,0.6)),np.array([0.55,0.62,0.72],f32)*0.45,True),   # fill, right
        (L((0.6,0.35,-0.75)),np.array([0.30,0.55,1.0],f32)*1.15,False),  # rim, brand blue from behind right
        (L((-0.8,0.2,-0.6)),np.array([0.55,0.7,1.0],f32)*0.6,False)]     # rim, cool from behind left
# soft shadows for the key light
def shadow(Pp,Ld):
    s=np.ones(len(Pp),f32);t=np.full(len(Pp),0.05,f32);a=np.arange(len(Pp))
    for _ in range(48):
        if a.size==0:break
        dd=sdf(Pp[a]+Ld*t[a,None]);s[a]=np.minimum(s[a],np.clip(8*dd/t[a],0,1));t[a]+=np.clip(dd,0.03,0.4);a=a[(dd>0.001)&(t[a]<12)]
    return s
sh=shadow(P+Nn*0.01,lights[0][0])
alb=np.where(isMetal[:,None],np.array([0.78,0.79,0.8],f32),np.array([0.60,0.615,0.63],f32))
col=np.zeros((len(idx),3),f32)
# ambient: sky gradient (navy below, soft grey above)
amb=(0.10+0.08*Nn[:,1:2])*np.array([0.55,0.65,0.85],f32)
col+=alb*amb*ao[:,None]
for i,(Ld,Lc,diff) in enumerate(lights):
    nd=np.clip(Nn@Ld,0,1);Hh=nrm(Ld+V);nh=np.clip((Nn*Hh).sum(-1),0,1)
    s=sh if i==0 else 1.0
    if diff:
        col+=alb*Lc*(nd*s)[:,None]*np.where(isMetal,0.35,1)[:,None]
        spec=np.where(isMetal,1.6*nh**60,0.16*nh**18)
        col+=Lc*(spec*s)[:,None]
    else:
        # rim: grazing light from behind
        fr=(1-np.clip((Nn*V).sum(-1),0,1))**2.4
        col+=Lc*(fr*np.clip(Nn@Ld+0.35,0,1)*np.where(isMetal,0.8,0.55))[:,None]
# metal: environment reflection (bright softbox strip above, dark below)
R=nrm(2*(Nn*V).sum(-1,keepdims=True)*Nn-V)
env=sm(-0.1,0.6,R[:,1])[:,None]*np.array([1.0,0.99,0.97],f32)*0.9+sm(0.2,0.9,R[:,0])[:,None]*np.array([0.25,0.45,0.9],f32)*0.5+0.06
col=np.where(isMetal[:,None],col*0.45+env*0.7,col)
col*=np.where(inslot,0.12+0.5*np.exp(-slot*14),1)[:,None]
# filmic tone map
col=col/(1+col*0.55)*1.2;col=np.clip(col,0,1)**(1/1.15)
img=np.zeros((N,4),f32);img[idx,:3]=col;img[idx,3]=1
img=img.reshape(H,W,4)
# premultiplied downsample
pm=img.copy();pm[...,:3]*=pm[...,3:4]
pm=pm.reshape(H//SS,SS,W//SS,SS,4).mean((1,3))
a=pm[...,3:4];rgb=np.where(a>0,pm[...,:3]/np.maximum(a,1e-6),0)
out=np.concatenate([rgb,a],-1)
im=Image.fromarray((np.clip(out,0,1)*255+.5).astype(np.uint8),'RGBA')
bb=im.getbbox();print('bbox',bb,im.size)
pad=24;im=im.crop((max(bb[0]-pad,0),max(bb[1]-pad,0),min(bb[2]+pad,im.width),min(bb[3]+pad,im.height)))
im.save(OUT);print('saved',OUT,im.size)
