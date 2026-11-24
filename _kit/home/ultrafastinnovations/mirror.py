#!/usr/bin/env python3
"""Render the hero: one 1-inch UFI-style dispersive (chirped) mirror, a fused-silica disc 25.4 mm across and 6.35 mm thick,
its coated face showing the angle-dependent interference colour of a multilayer stack, its fine-ground edge lit by a soft key
light, on transparent ground. Ray-traced per pixel (perspective camera, analytic disc), 2x supersampled. Output: mirror.png (RGBA)
plus mirror.json (face centre and normal in image coords, for the beam drawn live in field.js)."""
import numpy as np, json, pathlib, sys
from PIL import Image
H=pathlib.Path(__file__).resolve().parent
S=int(sys.argv[1]) if len(sys.argv)>1 else 1500; SS=2; N=S*SS
yaw=np.radians(float(sys.argv[2]) if len(sys.argv)>2 else -34); pit=np.radians(float(sys.argv[3]) if len(sys.argv)>3 else 14); rol=np.radians(4)
def R(a,ax):
    c,s=np.cos(a),np.sin(a)
    return {'x':np.array([[1,0,0],[0,c,-s],[0,s,c]]),'y':np.array([[c,0,s],[0,1,0],[-s,0,c]]),'z':np.array([[c,-s,0],[s,c,0],[0,0,1]])}[ax]
M=R(rol,'z')@R(pit,'x')@R(yaw,'y')          # local -> world; disc axis = local +z
Rad,h=1.0,0.25
cam=np.array([0,0,7.0]); f=1/np.tan(np.radians(12))
ys,xs=np.mgrid[0:N,0:N]; u=(xs+.5)/N*2-1; v=1-(ys+.5)/N*2
D=np.stack([u*1.22,v*1.22,-f*np.ones_like(u)],-1); D/=np.linalg.norm(D,axis=-1,keepdims=True)
o=cam@M; d=D@M                                # into local frame (M orthonormal: world->local = x@M)
t=np.full(u.shape,np.inf); kind=np.zeros(u.shape,int)
# caps
for zc,k in ((h,1),(-h,2)):
    with np.errstate(divide='ignore',invalid='ignore'):
        tc=(zc-o[2])/d[...,2]
    px=o[0]+tc*d[...,0]; py=o[1]+tc*d[...,1]
    ok=(tc>0)&(px*px+py*py<=Rad*Rad)&(tc<t); t[ok]=tc[ok]; kind[ok]=k
# side
a=d[...,0]**2+d[...,1]**2; b=2*(o[0]*d[...,0]+o[1]*d[...,1]); c=o[0]**2+o[1]**2-Rad**2
disc=b*b-4*a*c; sq=np.sqrt(np.maximum(disc,0))
for ts in ((-b-sq)/(2*a),(-b+sq)/(2*a)):
    pz=o[2]+ts*d[...,2]; ok=(disc>0)&(ts>0)&(np.abs(pz)<=h)&(ts<t); t[ok]=ts[ok]; kind[ok]=3
P=o+t[...,None]*d
Nl=np.zeros_like(P); Nl[kind==1]=[0,0,1]; Nl[kind==2]=[0,0,-1]
sd=kind==3; Nl[sd]=np.stack([P[sd][:,0],P[sd][:,1],np.zeros(sd.sum())],-1)
Nw=Nl@M.T; Dw=D
RC=None
def env(r):
    """studio lit for the face: a large soft box whose soft diagonal edge crosses the mirror's reflection, a thin cool UFI-blue
    strip light, near-black room elsewhere"""
    x,y,z=r[...,0],r[...,1],r[...,2]
    def sm(a,b,q): q=np.clip((q-a)/(b-a),0,1); return q*q*(3-2*q)
    dx,dy=x-RC[0],y-RC[1]
    base=np.stack([0.012+0*x,0.016+0*x,0.028+0*x],-1)
    k=(-dx*.75+dy*.66); j=dx*.66+dy*.75
    sb=sm(.0,.012,k-.035)*(1-sm(.0,.02,k-.11))*.95+sm(-.08,.06,k)*.10
    st=np.exp(-((k+.035)/.004)**2)*.9
    return base+sb[...,None]*np.array([1.0,.97,.93])*1.1+st[...,None]*np.array([.15,.45,1.0])*1.6
cosi=np.abs(np.sum(-Dw*Nw,-1))
refl=Dw-2*np.sum(Dw*Nw,-1)[...,None]*Nw
nF=np.array([0,0,1.])@M.T;RC=np.array([0,0,-1.])+2*nF[2]*nF
img=np.zeros(u.shape+(3,))
Lk=np.array([-.55,.7,.45]); Lk/=np.linalg.norm(Lk)
# coated face: multilayer interference colour as a function of incidence angle and a faint radial thickness falloff near the rim
fc=kind==1
rr=np.sqrt(P[...,0]**2+P[...,1]**2)
ph=np.clip((1-cosi),0,1)*1.2+rr**5*.55+.02
tint=np.stack([.55+.45*np.cos(2*np.pi*(ph+0.00)),.55+.45*np.cos(2*np.pi*(ph+.33)),.55+.45*np.cos(2*np.pi*(ph+.62))],-1)
tint=np.stack([1.0+0*ph,.80+.12*np.cos(2*np.pi*ph),.52+.38*np.cos(2*np.pi*(ph+.45))],-1)
E=env(refl)
face=E*tint*0.95+tint*np.array([.05,.04,.06])
# thin bright chamfer ring at the rim of the coated face
ch=np.clip((rr-.975)/.025,0,1)
face=face*(1-ch[...,None])+ch[...,None]*(np.array([.75,.78,.82])*(.25+.9*np.clip(np.sum(Nw*Lk,-1),0,1))[...,None])
img[fc]=face[fc]
# back cap seen through nothing (opaque coated substrate from behind): dark glass
img[kind==2]=np.array([.04,.05,.07])
# fine-ground edge: diffuse, slightly translucent grey with a sheen
ed=kind==3
lam=np.clip(np.sum(Nw*Lk,-1),0,1)
fres=.04+.96*(1-cosi)**5
zz=P[...,2]/h
edge=np.array([.36,.38,.42])*(.10+1.0*lam)[...,None]+fres[...,None]*env(refl)*.5
rng=np.random.default_rng(3);gr=rng.normal(0,.06,u.shape)
edge*= (1-.25*np.abs(zz)**8)[...,None]*(1+gr)[...,None]
img[ed]=edge[ed]
alpha=(kind>0).astype(float)
# filmic tone map
img=1-np.exp(-img*1.35); img=np.clip(img,0,1)**(1/1.08)
rgba=np.concatenate([img,alpha[...,None]],-1)
im=Image.fromarray((rgba*255+.5).astype(np.uint8),'RGBA').resize((S,S),Image.LANCZOS)
im.save(H/'mirror.png')
# face centre and normal, projected
def proj(pw):
    q=pw-cam; return [float((q[0]/-q[2]*f/1.22+1)/2*S), float((1-q[1]/-q[2]*f/1.22)/2*S)]
cw=np.array([0,0,h])@M.T; nw=np.array([0,0,1])@M.T
json.dump({'S':S,'c':proj(cw),'n':proj(cw+nw*.6),'nw':nw.tolist()},open(H/'mirror.json','w'))
kk=(-(refl[...,0]-RC[0])*.75+(refl[...,1]-RC[1])*.66)[kind==1];print('k',kk.min(),kk.max());print('ok',S,json.load(open(H/'mirror.json')))
