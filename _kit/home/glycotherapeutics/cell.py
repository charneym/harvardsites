#!/usr/bin/env python3
"""GlycoTherapeutics hero: a crafted render of one tumour cell as a confocal fluorescence image with its surface sugars
(the glycocalyx of sialic acid and fucose glycans) labelled by a fluorescent lectin in the logo teal, the nucleus in a dim
DAPI blue. A calm, round cell; the sugar coat is a fine beaded fringe on the membrane, internal structure only as faint
texture (DS). Rendered on black; field.js draws it additively onto the ink, so it has no edge (DP/DJ). Output: hero.webp"""
import numpy as np
from PIL import Image
S=1500;rng=np.random.default_rng(7)
def fblur(a,s):
    f=np.fft.rfft2(a);ky=np.fft.fftfreq(a.shape[0])[:,None];kx=np.fft.rfftfreq(a.shape[1])[None,:]
    return np.fft.irfft2(f*np.exp(-2*(np.pi*s)**2*(kx*kx+ky*ky)),a.shape)
cx,cy=S*.5,S*.5
rad=lambda t:S*.36*(1+.045*np.cos(2*t+.7)+.03*np.cos(3*t-1.2)+.015*np.cos(5*t+.4))
nucR=lambda t:S*.15*(1+.06*np.cos(2*t+.3)+.025*np.cos(3*t+1.4))
ncx,ncy=cx+S*.03,cy+S*.02
yy,xx=np.mgrid[0:S,0:S];tt=np.arctan2(yy-cy,xx-cx);rr=np.hypot(xx-cx,yy-cy)
d=rr-rad(tt)  # signed distance to membrane (px)
def put(img,x,y,w):
    xi=np.clip(x.astype(int),0,S-1);yi=np.clip(y.astype(int),0,S-1);np.add.at(img,(yi,xi),w)
# membrane: a thin bright line
mem=np.exp(-(d/(S*.0035))**2)
# glycocalyx: dense beaded puncta in a band just outside/on the membrane, plus short microvilli tufts
beads=np.zeros((S,S))
n=42000;t=rng.uniform(0,2*np.pi,n);off=np.abs(rng.normal(0,S*.011,n))*np.where(rng.uniform(0,1,n)<.8,1,-.6)
r=rad(t)+off;put(beads,cx+np.cos(t)*r,cy+np.sin(t)*r,rng.uniform(.4,1,n))
vill=np.zeros((S,S))
for i in range(150):
    a=rng.uniform(0,2*np.pi);L=rng.uniform(.006,.018)*S;ang=a+rng.normal(0,.35);x=cx+np.cos(a)*rad(a);y=cy+np.sin(a)*rad(a)
    k=np.linspace(0,1,int(L));xs=x+np.cos(ang)*L*k+rng.normal(0,.6,len(k)).cumsum()*.3;ys=y+np.sin(ang)*L*k+rng.normal(0,.6,len(k)).cumsum()*.3
    put(vill,xs,ys,(1-k*.75)*rng.uniform(.5,1))
    tip=rng.uniform(0,1)
    put(beads,xs[::4],ys[::4],np.full(len(xs[::4]),.9))
g=fblur(beads,1.5*S/1200)*1.0+fblur(vill,1.6*S/1200)*1.3
g=g/np.percentile(g[g>.03*g.max()],99.2)
g+=mem*0.35
lit=.62+.38*np.clip(np.cos(tt+2.3),-1,1)*.5+.19
g=g*lit
# faint intracellular glycan vesicles (Golgi) near the nucleus, out of focus
ves=np.zeros((S,S))
for i in range(260):
    a=rng.normal(-2.2,.8);u=rng.beta(1.5,3);r0=nucR(a)*1.1+u*S*.12
    put(ves,np.array([ncx+np.cos(a)*r0]),np.array([ncy+np.sin(a)*r0]),rng.uniform(.3,1))
ves=fblur(ves,3.5*S/1200);ves=ves/ves.max()*.30
glow=fblur(g,14*S/1200)*.55+fblur(g,45*S/1200)*.35
# cytoplasm haze
cm=np.clip(-d/(S*.03),0,1);haze=fblur(cm,10*S/1200)*.07*(1-np.clip(rr/rad(tt),0,1)*.4)
tex=fblur(rng.normal(0,1,(S,S)),4*S/1200);tex=(tex-tex.min())/(tex.max()-tex.min())
haze=haze*(.6+.8*tex)
# nucleus
ntt=np.arctan2(yy-ncy,xx-ncx);nrr=np.hypot(xx-ncx,yy-ncy)
nm=np.clip((nucR(ntt)-nrr)/(S*.012),0,1)
t2=fblur(rng.normal(0,1,(S,S)),8*S/1200);t2=(t2-t2.min())/(t2.max()-t2.min())
nuc=fblur(nm*(.10+.14*tex+.20*t2**2),1.5)
teal=np.array([.21,.82,.84]);hot=np.array([.75,1,1]);blue=np.array([.26,.40,1.0])
gg=np.clip(g,0,None)
img=(gg/(1+gg))[...,None]*teal*1.35+np.clip(gg-1.2,0,None)[...,None]*hot*.25+glow[...,None]*teal*.45+ves[...,None]*teal+nuc[...,None]*blue+haze[...,None]*np.array([.3,.6,.62])
img+=rng.normal(0,.005,(S,S,1))*np.clip(img.sum(-1,keepdims=True)*3,0,1)
img=np.clip(img,0,1)
im=Image.fromarray((img**(1/1.05)*255).astype(np.uint8),'RGB')
bb=Image.fromarray((img.max(-1)>0.01).astype(np.uint8)*255).getbbox();print('bbox',bb)
im=im.crop(bb);im.save('hero.webp',quality=90);im.save('/tmp/claude-0/-home-user-harvardsites/0da6be8e-1274-57c9-8b2c-15fc454616d4/scratchpad/hero.png');print(im.size)
