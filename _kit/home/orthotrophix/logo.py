#!/usr/bin/env python3
"""Reverse the real OrthoTrophix logo (logo-src.png, 389x65 alpha) for the dark header/loader: black lettering to white,
the brush "O" blue lightened to #4a9ce2; native size kept. Favicon: the "O"."""
from PIL import Image
import numpy as np
a=np.array(Image.open('logo-src.png').convert('RGBA')).astype(float)
b=np.clip(a[...,2]/163,0,1)
rgb=np.array([244,247,250.])*(1-b[...,None])+np.array([74,156,226.])*b[...,None]
Image.fromarray(np.dstack([rgb,a[...,3]]).astype(np.uint8)).save('logo-w.png')
Image.open('logo-src.png').crop((0,0,65,65)).save('fav.png')
