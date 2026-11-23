#!/usr/bin/env python3
"""Life Recovery Systems hero: a crafted render (HOME_BRIEF update 2c) of cold water, the ThermoSuit's medium: a single
drop lifting off a still water surface on its Worthington jet, the rings spreading out around it. Raymarched SDF water
(Fresnel reflection + refraction, IOR 1.33) lit by a cool back softbox, a front key and an LRS-blue rim, on black.
field.js draws it ADDITIVELY onto the navy ink, so no image edge can exist (DP/DJ). Output: hero.webp"""
import numpy as np, sys
from PIL import Image
S=int(sys.argv[1]) if len(sys.argv)>1 else 1400
def norm(v):return v/np.linalg.norm(v,axis=-1,keepdims=True)
def smin(a,b,k):h=np.clip(.5+.5*(b-a)/k,0,1);return b*(1-h)+a*h-k*h*(1-h)
def sdf(p):
    x,y,z=p[...,0],p[...,1],p[...,2];r=np.hypot(x,z)
    rr=np.maximum(r-.06,0)
    h=.05*np.sin(11*rr-1.2)*np.exp(-1.5*rr)*(1-np.exp(-30*r*r))-.06*np.exp(-r*r/.035)
    surf=(y-h)*.55
    # jet: a column narrowing upward, its tip rounding off
    t=np.clip(y/.62,0,1);rad=.095-.03*t+.05*np.exp(-y*y/.004)
    col=np.maximum(r-rad,np.maximum(y-.62,-y-.2))
    tip=np.sqrt(r*r+(y-.62)**2)-.072
    jet=smin(col,tip,.04)
    drop=np.sqrt(r*r+((y-.98)/1.07)**2)*1.0-.118
    return np.minimum(smin(surf,jet,.12),drop)
def env(d):
    x,y,z=d[...,0],d[...,1],d[...,2];c=np.zeros(d.shape)
    def box(cx,cy,cz,w,hh,soft):
        a=norm(np.array([cx,cy,cz],float));u=norm(np.cross(a,[0,1,0]));v=np.cross(u,a)
        dot=(d*a).sum(-1);px=(d*u).sum(-1)/np.maximum(dot,1e-3);py=(d*v).sum(-1)/np.maximum(dot,1e-3)
        m=(dot>0)*np.clip((w-np.abs(px))/soft,0,1)*np.clip((hh-np.abs(py))/soft,0,1);return m
    c+=box(0,.06,-1,1.1,.32,.3)[...,None]*np.array([.62,.86,1.08])*1.6     # cool back softbox
    c+=box(-.55,.9,.5,.16,.12,.06)[...,None]*np.array([1.0,1.0,1.02])*3.2   # front key, upper left
    c+=box(1,.12,-.25,.18,.5,.2)[...,None]*np.array([.0,.45,.95])*1.2      # LRS blue rim, right
    c+=box(-1,.05,-.4,.12,.4,.2)[...,None]*np.array([.15,.55,.85])*.5       # cyan fill, left
    g=np.clip(y*.5+.5,0,1);c+=(.012*g)[...,None]*np.array([.3,.6,1])
    return c
# camera
eye=np.array([0,.78,4.3]);tgt=np.array([0,.36,0]);fw=norm(tgt-eye);rt=norm(np.cross(fw,[0,1,0]));up=np.cross(rt,fw)
fov=.30;j,i=np.mgrid[0:S,0:S];u=((i+.5)/S-.5)*2*fov;v=-((j+.5)/S-.5)*2*fov
D=norm(fw+u[...,None]*rt+v[...,None]*up);O=np.broadcast_to(eye,D.shape).copy()
t=np.zeros(D.shape[:2]);hit=np.zeros(t.shape,bool);P=O.copy()
for k in range(220):
    P=O+D*t[...,None];d=sdf(P);hit|=d<1e-3;t=np.where(hit,t,t+d*.9)
    if k%40==0:print('march',k,hit.mean(),file=sys.stderr)
t=np.minimum(t,30);P=O+D*t[...,None]
e=1e-3;N=norm(np.stack([sdf(P+[e,0,0])-sdf(P-[e,0,0]),sdf(P+[0,e,0])-sdf(P-[0,e,0]),sdf(P+[0,0,e])-sdf(P-[0,0,e])],-1))
cosi=np.clip(-(D*N).sum(-1),0,1);F=.02+.98*(1-cosi)**5
R=D+2*cosi[...,None]*N
eta=1/1.33;k2=1-eta*eta*(1-cosi**2);T=norm(eta*D+(eta*cosi-np.sqrt(np.maximum(k2,0)))[...,None]*N)
# surface pixels: the refracted ray goes into dark, deep water (blue-green tint, falling with depth)
dep=np.clip(-T[...,1],0,1)
tr=env(np.stack([T[...,0],np.abs(T[...,1])*.35,T[...,2]],-1))*np.array([.30,.58,.80])*(1-.8*dep)[...,None]
# jet and drop pixels: march through the water and refract out the far side (two interfaces)
th=hit&(P[...,1]>.05)
if th.any():
    Pi=P[th]-N[th]*3e-3;Ti=T[th];ti=np.zeros(len(Pi))
    for k in range(90):
        q=Pi+Ti*ti[:,None];d=-sdf(q);ti+=np.maximum(d,2e-3)*.9
    q=Pi+Ti*ti[:,None]
    No=-norm(np.stack([sdf(q+[e,0,0])-sdf(q-[e,0,0]),sdf(q+[0,e,0])-sdf(q-[0,e,0]),sdf(q+[0,0,e])-sdf(q-[0,0,e])],-1))
    ci=np.clip(-(Ti*No).sum(-1),0,1);eo=1.33;k3=1-eo*eo*(1-ci**2)
    To=np.where((k3>0)[:,None],norm(eo*Ti+(eo*ci-np.sqrt(np.maximum(k3,0)))[:,None]*No),Ti+2*ci[:,None]*No)
    tr[th]=env(To)*np.array([.62,.86,1.0])*1.1
col=F[...,None]*env(R)+(1-F)[...,None]*tr
col=np.where(hit[...,None],col,0)
# the far water falls away into the dark by distance, long before the horizon (no line)
fd=np.clip((t-4.2)/3.4,0,1);fd=fd*fd*(3-2*fd);col*=(1-fd)[...,None]
# the far surface and the frame fall away into the dark (long eased radial mask; never a box edge)
yy=(j+.5)/S;xx=(i+.5)/S;rr=np.sqrt(((xx-.5)/.5)**2+((yy-.55)/.48)**2)
m=np.clip(1-rr,0,1);m=m*m*(3-2*m)
col*=m[...,None]**1.3
col=1-np.exp(-col*1.35)
img=(np.clip(col,0,1)**(1/1.15)*255).astype(np.uint8)
Image.fromarray(img).save('hero.webp',quality=90);Image.fromarray(img).save('/tmp/claude-0/lrs/hero.png')
print('ok',S)
