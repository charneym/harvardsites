#!/usr/bin/env python3
"""Thiogenesis hero: a crafted render of a human cell as a confocal fluorescence image, the way mitochondrial disease is
studied: the mitochondrial network in red (a MitoTracker-type stain, in the logo's red), the nucleus in a dim DAPI blue,
lysosomes as pale puncta. Tubules are smooth random walks oriented outward from the nucleus, splatted with a sharp in-focus
layer and a soft out-of-focus layer, faint sensor grain. Rendered on black; field.js draws it additively onto the ink, so
it has no edge anywhere (DP/DJ). Output: hero.webp"""
import numpy as np
from PIL import Image
S=1700;rng=np.random.default_rng(11)
def blur(a,s):
    if s<=0: return a
    k=int(s*3)|1;x=np.arange(-k,k+1);g=np.exp(-x*x/(2*s*s));g/=g.sum()
    a=np.apply_along_axis(lambda m:np.convolve(m,g,'same'),0,a)
    return np.apply_along_axis(lambda m:np.convolve(m,g,'same'),1,a)
def fblur(a,s):
    f=np.fft.rfft2(a);ky=np.fft.fftfreq(a.shape[0])[:,None];kx=np.fft.rfftfreq(a.shape[1])[None,:]
    return np.fft.irfft2(f*np.exp(-2*(np.pi*s)**2*(kx*kx+ky*ky)),a.shape)
cx,cy=S*.5,S*.5
# cell outline: a spread, lobed shape (radius as a smooth function of angle)
th=np.linspace(0,2*np.pi,721)
def rad(t):
    return S*.40*(1+.16*np.cos(3*t+.6)+.10*np.cos(5*t+2.1)+.06*np.cos(2*t-1.0)+.04*np.cos(7*t+.3))
nucR=lambda t:S*.13*(1+.07*np.cos(2*t+.4)+.03*np.cos(3*t-1))
ncx,ncy=cx-S*.06,cy+S*.04
mito_s=np.zeros((S,S));mito_b=np.zeros((S,S))
def put(img,x,y,w):
    xi=np.clip(x.astype(int),0,S-1);yi=np.clip(y.astype(int),0,S-1);np.add.at(img,(yi,xi),w)
nT=1100
for i in range(nT):
    # start: radius biased toward the perinuclear region
    t=rng.uniform(0,2*np.pi);u=rng.beta(1.3,1.9)
    r0=nucR(t)*1.12+(rad(t)*.93-nucR(t)*1.12)*u
    x,y=ncx+np.cos(t)*r0,ncy+np.sin(t)*r0
    L=rng.uniform(14,90)*(1.25-0.5*u)*S/1200;step=.7
    ang=t+rng.normal(0,.55);curv=rng.normal(0,.008)
    n=int(L/step);xs=np.empty(n);ys=np.empty(n)
    for k in range(n):
        xs[k]=x;ys[k]=y;curv+=rng.normal(0,.0012);curv*=.995;ang+=curv+rng.normal(0,.012);x+=np.cos(ang)*step;y+=np.sin(ang)*step
    # stay inside the cell
    tt=np.arctan2(ys-ncy,xs-ncx);rr=np.hypot(xs-ncx,ys-ncy);ok=(rr<rad(tt)*.95)&(rr>nucR(tt)*1.05)
    xs,ys=xs[ok],ys[ok]
    if len(xs)<4: continue
    focus=rng.uniform(0,1);w=rng.uniform(.6,1.0)*(1.15-0.3*u)
    if focus<.62: put(mito_s,xs,ys,w)
    else: put(mito_b,xs,ys,w*.8)
m=fblur(mito_s,2.3*S/1200)*1.0+fblur(mito_b,5.0*S/1200)*1.4
m=m/np.percentile(m[m>0.02*m.max()],99.3)
glow=fblur(m,22*S/1200)*.5
# nucleus: dim textured DAPI
yy,xx=np.mgrid[0:S,0:S];tt=np.arctan2(yy-ncy,xx-ncx);rr=np.hypot(xx-ncx,yy-ncy)
nm=np.clip((nucR(tt)-rr)/(S*.012),0,1)
tex=fblur(rng.normal(0,1,(S,S)),3*S/1200);tex=(tex-tex.min())/(tex.max()-tex.min())
tex2=fblur(rng.normal(0,1,(S,S)),9*S/1200);tex2=(tex2-tex2.min())/(tex2.max()-tex2.min());nuc=nm*(0.08+0.12*tex+0.16*tex2**2)
nuc=fblur(nuc,1.5)
# cytoplasm haze (very faint), defines the cell body
cm=np.clip((rad(tt)-rr)/(S*.05),0,1)
haze=fblur(cm,14*S/1200)*0.028
# lysosomes: pale puncta
lys=np.zeros((S,S))
for i in range(130):
    t=rng.uniform(0,2*np.pi);u=rng.beta(1.2,2.4);r0=nucR(t)*1.15+(rad(t)*.9-nucR(t)*1.15)*u
    put(lys,np.array([ncx+np.cos(t)*r0]),np.array([ncy+np.sin(t)*r0]),rng.uniform(.5,1))
lys=fblur(lys,2.2*S/1200);lys/=lys.max();lys=np.clip(lys*1.3,0,1)*.42
red=np.array([1.0,.16,.14]);hot=np.array([1.0,.62,.55]);blue=np.array([.28,.42,1.0]);pale=np.array([.95,.9,.86])
mm=np.clip(m,0,None)
img=(mm/(1+mm))[...,None]*red*1.25+np.clip(mm-1.0,0,None)[...,None]*hot*.35+glow[...,None]*red*.35+nuc[...,None]*blue+haze[...,None]*np.array([.9,.45,.42])+lys[...,None]*pale
img+=rng.normal(0,.006,(S,S,1))*np.clip(img.sum(-1,keepdims=True)*3,0,1)
img=np.clip(img,0,1)
im=Image.fromarray((img**(1/1.08)*255).astype(np.uint8),'RGB')
bb=Image.fromarray((img.max(-1)>0.012).astype(np.uint8)*255).getbbox();print('bbox',bb)
im=im.crop(bb);im.save('hero.webp',quality=90);im.save('/tmp/claude-0/-home-user-harvardsites/317f4274-8608-5cdb-b88b-c80b53fb8d0c/scratchpad/hero.png');print(im.size)
