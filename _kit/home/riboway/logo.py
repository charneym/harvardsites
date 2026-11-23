# Reversed (dark-ground) version of Riboway's real logo raster (riboway.com/Logo.png): RIBO keeps its light blue,
# WAY (deep navy) -> near-white, THERAPEUTICS (slate) -> light grey; the swoosh keeps its gradient with its navy lifted.
import numpy as np; from PIL import Image
im=Image.open('logo_src.png').convert('RGBA').crop((290,185,3107,811)); a=np.asarray(im).astype(float)
rgb=a[...,:3]; al=a[...,3]; H,W=al.shape; X=np.arange(W)[None,:].repeat(H,0)+290
refs=np.array([[80,176,208],[45,55,143],[73,84,92]],float)
d=((rgb[...,None,:]-refs)**2).sum(-1); k=d.argmin(-1)
out=rgb.copy(); txt=X<2040
out[txt&(k==1)]=[236,241,249]; out[txt&(k==2)]=[178,190,200]; out[txt&(k==0)]=[86,182,222]
sw=~txt; lum=(rgb[...,0]*.3+rgb[...,1]*.59+rgb[...,2]*.11)/255
m=np.clip((0.42-lum)/0.42,0,1)[...,None]*0.55
lift=out*(1-m)+np.array([70,118,214])*m
out[sw]=lift[sw]
o=np.dstack([out,al]).clip(0,255).astype(np.uint8)
img=Image.fromarray(o,'RGBA')
img.resize((1000,round(1000*H/W)),Image.LANCZOS).save('logo-rev.png',optimize=True)
# the swoosh mark alone (favicon / small uses)
mk=img.crop((2040-290,0,W,H)); mk.resize((300,round(300*mk.height/mk.width)),Image.LANCZOS).save('mark-rev.png',optimize=True)
bg=Image.new('RGBA',img.size,(7,12,32,255)); bg.alpha_composite(img); bg.resize((900,round(900*H/W))).save('/tmp/claude-0/-home-user-harvardsites/ca30883a-5a10-575e-9ea6-3ad81c6a234d/scratchpad/logo_rev_dark.png')
print(img.size, W/H)
