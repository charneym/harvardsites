#!/usr/bin/env python3
"""OcuSciences' logo is only a 500x72 raster (Blue500px.png, navy #002551). It is flat single-colour art, so the alpha is
upsampled 2x (Lanczos) and its edge re-sharpened with a narrow smoothstep around 50% coverage: a crisp 1000x144 mark in
the exact navy, shown at <=500px CSS width (DR2: real mark, solid, full colour). logo-w.png is the same mark in white."""
import numpy as np
from PIL import Image
im=Image.open('logo-src.png').convert('RGBA')
A=im.getchannel('A').resize((1000,144),Image.LANCZOS)
a=np.asarray(A,float)/255
t=np.clip((a-.32)/(.68-.32),0,1);t=t*t*(3-2*t)
for name,col in [('logo.png',(0,37,81)),('logo-w.png',(255,255,255))]:
    out=np.zeros((144,1000,4),np.uint8);out[...,:3]=col;out[...,3]=(t*255).round()
    Image.fromarray(out).save(name,optimize=True)
