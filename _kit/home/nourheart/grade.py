import numpy as np
from PIL import Image
from scipy import ndimage as nd
# --- logo for dark ground: crimson -> light crimson, blue -> pale blue-bone; tagline dropped (unreadable at header size)
L=np.asarray(Image.open('logo_src.png').convert('RGBA')).astype(np.float32)
r,g,b,a=[L[...,i] for i in range(4)]
red=(r>b)
out=np.zeros_like(L)
out[...,:3]=np.where(red[...,None],np.array([232,104,132],np.float32),np.array([222,230,240],np.float32))
out[...,3]=a
H,W=a.shape; yy,xx=np.mgrid[0:H,0:W]; out[(yy>=136)&(xx>160),3]=0
Image.fromarray(out.astype(np.uint8)).crop((0,0,W,138)).save('logo_dark.png')
# --- hero: the heart, real alpha, graded to ink #0a1220 / brand crimson
im=np.asarray(Image.open('src.jpg').convert('RGB')).astype(np.float32)/255
m=np.asarray(Image.open('mask_raw.png')).astype(np.float32)/255
m=nd.binary_erosion(m>.5,iterations=5).astype(np.float32)
al=nd.gaussian_filter(m,6)
lum=(im*[.3,.59,.11]).sum(-1,keepdims=True)
c=lum+(im-lum)*.9                      # keep tonal depth, slight desat
c[...,1]*=.94; c[...,2]=c[...,2]*1.04  # pull the fixative's yellow cast out of the tissue
c=np.clip((c-.03)*1.22,0,1)**1.05      # contrast
ink=np.array([10,18,32],np.float32)/255
sh=np.clip(1-lum/.28,0,1)**2           # deepest shadows lean to the page ink
c=c*(1-sh*.5)+ink*sh*.5
# rim darkening so the silhouette sinks into the ink rather than cutting out
dist=nd.distance_transform_edt(m>.5); rim=np.clip(dist/90,0,1)[...,None]
c=c*(.55+.45*rim)+ink*(1-(.55+.45*rim))
rgba=np.dstack([c*255,al*255]).astype(np.uint8)
ys,xs=np.where(al>.01); pad=40
img=Image.fromarray(rgba).crop((xs.min()-pad,ys.min()-pad,xs.max()+pad,ys.max()+pad))
img.thumbnail((1500,1900),Image.LANCZOS)
# erase the two thin reflections of the jar's edges that cross the tissue (they would read as seams: DJ)
A=np.asarray(img).astype(np.float32); C=A[...,:3]
vm=np.stack([nd.median_filter(C[...,k],size=(31,1)) for k in range(3)],-1)
hm=np.stack([nd.median_filter(C[...,k],size=(1,31)) for k in range(3)],-1)
def blend(sl,src,axis):
    n=sl.stop-sl.start; w=np.sin(np.linspace(0,np.pi,n))**.6
    w=w[:,None,None] if axis==0 else w[None,:,None]
    if axis==0: C[sl]=C[sl]*(1-w)+src[sl]*w
    else: C[:1150,sl]=C[:1150,sl]*(1-w)+src[:1150,sl]*w
blend(slice(633,651),hm,1)
# remaining faint jar reflections: thin, desaturated, brighter than their surround -> replace by local median
md=np.stack([nd.median_filter(C[...,k],size=11) for k in range(3)],-1)
Lc=C.mean(-1); Lm=md.mean(-1); sat=(C.max(-1)-C.min(-1))/(C.max(-1)+1); satm=(md.max(-1)-md.min(-1))/(md.max(-1)+1)
k=np.clip((Lc-Lm-1.5)/4,0,1)*np.clip((satm-sat+.02)/.06,0,1)
k=nd.gaussian_filter(k,1.2)[...,None]; C[:]=C*(1-k)+md*k
# the slanted reflection of the jar's edge (~4 degrees): a thin ridge that runs long and nearly horizontal
for it in range(2):
    Lc=C.mean(-1)
    nb=(np.roll(Lc,6,0)+np.roll(Lc,-6,0)+np.roll(Lc,9,0)+np.roll(Lc,-9,0))/4
    resp=nd.uniform_filter(Lc-nb,size=(1,51))
    k=np.clip((resp-.8)/1.6,0,1); k[:700]=0; k[1300:]=0
    k=nd.maximum_filter(k,size=(5,1)); k=nd.gaussian_filter(k,1.5)[...,None]
    rep=np.stack([(np.roll(C[...,j],8,0)+np.roll(C[...,j],-8,0))/2 for j in range(3)],-1)
    C[:]=C*(1-k)+rep*k
A[...,:3]=C; img=Image.fromarray(A.astype(np.uint8))
img.save('../../../nourheart/hero.webp',quality=90,method=6) if False else None
img.save('hero.webp',quality=90,method=6); print(img.size)
bg=Image.new('RGB',img.size,(10,18,32)); bg.paste(img,(0,0),img); bg.thumbnail((600,800)); bg.save('/tmp/claude-0/-home-user-harvardsites/35737cb4-527d-5e1a-8bb2-23b61b2769c5/scratchpad/hchk.jpg')
