#!/usr/bin/env python3
"""BUSCH hero (HOME_BRIEF update 2a): BUSCH Microsystems' own product image of their granite 3-axis system with the X axis on a
traverse (busch-microsystems.de/wp-content/uploads/2016/12/busch_produkte_as_t_600.jpg, 600x500, the image of the
'3-Achssysteme: X-Achse auf Traverse' product), on its own white studio ground. The ground is multiplied into the hero ground
colour (white x BG = BG exactly), near-white JPEG grain is snapped to BG, and the outer band eases into BG over a long
superellipse distance, so no edge can read as a box (DP/DJ). Opaque, never upscaled. Product images for the product rows get
the same treatment onto the light section ground."""
import numpy as np, sys
from PIL import Image
def grade(src,out,BG,crop=None):
    im=Image.open(src).convert('RGB')
    if crop: im=im.crop(crop)
    pad=Image.new('RGB',(int(im.width*1.18),int(im.height*1.16)),(255,255,255)); pad.paste(im,((pad.width-im.width)//2,(pad.height-im.height)//2)); im=pad   # room for the fade on the white ground
    a=np.asarray(im).astype(np.float32)/255.; H,W=a.shape[:2]
    bg=np.array(BG,np.float32)/255.
    dev=(1-a).max(2); w=np.clip(1-(dev-.02)/.05,0,1)   # near-white -> exactly white
    a=a*(1-w[...,None])+w[...,None]
    c=a*bg                                            # multiply into the ground
    yy,xx=np.mgrid[0:H,0:W].astype(np.float32)
    nx=(xx-W*.5)/(W*.5); ny=(yy-H*.5)/(H*.5); d=(np.abs(nx)**5+np.abs(ny)**5)**.2
    t=np.clip((d-.86)/(.995-.86),0,1); m=t*t*(3-2*t)
    c=c*(1-m[...,None])+bg*m[...,None]
    I=Image.fromarray((np.clip(c,0,1)*255+.5).astype(np.uint8),'RGB'); I.save(out,lossless=True,method=6) if out=='hero.webp' else I.save(out,quality=88,method=6)
    print(out,W,H)
HERO=(238,241,245)   # hero ground #eef1f5
grade('src-gantry.jpg','hero.webp',HERO)
PL=(243,245,248)     # light section ground (--bone #f3f5f8)
import os
P='/tmp/claude-0/bmimg/'
for n,o in [('busch_produkte_xy_g_a_200.jpg','p-xy.webp'),('busch_produkte_gs_100.jpg','p-gantry.webp'),('busch_produkte_lt_g_150.jpg','p-linear.webp'),('busch_produkte_ht_25.jpg','p-hub.webp')]:
    if os.path.exists(P+n):
        import shutil; shutil.copy(P+n,'src-'+o.replace('.webp','.jpg'))
    grade('src-'+o.replace('.webp','.jpg'),o,PL)
