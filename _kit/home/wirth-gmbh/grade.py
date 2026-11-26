#!/usr/bin/env python3
"""WIRTH hero (HOME_BRIEF update 2a): WIRTH's own photograph of an OKTOPUS vacuum lifter in their Landsberg hall
(wirth-gmbh.com/images/wirth/vakuum/slider/slider_01.jpg, 2560x572; the right 1500px). Graded high-key: outside a soft
matte around the machine (the suction spider, its telescopic arm and every orange part) the desaturated hall is lifted
almost completely into the hero ground (#eceeef), leaving only a faint ghost for depth; inside it the hall greys are lifted
part way so the steel arms and black pads read cleanly. Every margin then eases into the ground over a long distance, so
there is no box edge and no oval vignette (DP/DJ). Never upscaled."""
import numpy as np
from PIL import Image, ImageDraw, ImageFilter
S=Image.open('src-slider01.jpg').convert('RGB')
X0=1060
a=np.asarray(S).astype(np.float32)[:, X0:2560]/255
H,W,_=a.shape
G=np.array([0xec,0xee,0xef],np.float32)/255
mx=a.max(2);mn=a.min(2);sat=(mx-mn)/(mx+1e-4);L=a@np.array([.2126,.7152,.0722],np.float32)
def ss(e0,e1,x):x=np.clip((x-e0)/(e1-e0),0,1);return x*x*(3-2*x)
orange=ss(.25,.45,sat)*ss(.18,.35,L)
# hand-traced hull of the suction spider + the arm and carriage (crop coordinates)
k=Image.new('L',(W,H),0);d=ImageDraw.Draw(k)
d.polygon([(792,140),(850,140),(1350,78),(1462,86),(1462,170),(1372,548),(1250,546),(690,500),(686,428),(780,190)],fill=255)
d.polygon([(0,182),(1010,196),(1010,312),(470,335),(450,352),(110,355),(0,300)],fill=255)
d.polygon([(292,0),(392,0),(392,190),(292,190)],fill=255)
ko=Image.fromarray((orange*255).astype(np.uint8)).filter(ImageFilter.MaxFilter(9))
k=Image.fromarray(np.maximum(np.asarray(k),np.asarray(ko))).filter(ImageFilter.GaussianBlur(26))
keep=np.asarray(k).astype(np.float32)/255
xx0=np.arange(W)[None,:].astype(np.float32)
keep=keep*ss(240,940,xx0)      # the arm fades out toward the headline inside the matte itself
inside=0.8*ss(.22,.88,L)*(1-orange)          # lift hall greys seen between the arms
# near the image border the hall greys go all the way to the ground (dark rubber and orange stay), so no edge can read
yy0=np.arange(H)[:,None].astype(np.float32)
dist=np.minimum(np.minimum(yy0,H-1-yy0),np.minimum(xx0,W-1-xx0))
r=1-ss(10,190,dist)
inside=inside+(1-inside)*r*ss(.1,.6,L)*(1-orange)
outside=1.0                                  # the hall beyond the machine: a faint ghost only
w=keep*inside+(1-keep)*outside
o=a*(1-w[...,None])+G*w[...,None]
yy=np.linspace(0,1,H)[:,None];xx=np.linspace(0,1,W)[None,:]
fx=ss(0,.035,1-xx)   # the arm eases in from the left over 45% of the width
fy=ss(0,.05,yy)*ss(0,.04,1-yy)
m=(fx*fy)[...,None]
o=o*m+G*(1-m)
o[:2]=G;o[-2:]=G;o[:,-2:]=G
Image.fromarray((np.clip(o,0,1)*255+.5).astype(np.uint8)).save('hero.webp',quality=92,method=6)
Image.fromarray((np.clip(o,0,1)*255+.5).astype(np.uint8)).save('/tmp/claude-0/-home-user-harvardsites/326b5647-d934-5e8d-a031-3d8bda923302/scratchpad/hero_prev.png')
print(o.shape)
