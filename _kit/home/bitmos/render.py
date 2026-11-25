#!/usr/bin/env python3
"""Hero render (HOME_BRIEF update 2c, a crafted render of the firm's real product): the Bitmos sat 805 bedside pulse
oximeter as shown on bitmos.de: a long white housing with a softly inclined front, a black glass bezel holding a backlit
monochrome LCD (plethysmogram trace, SpO2 and pulse-rate figures), a dark rotary control knob at the right and grey end
caps. No third-party logos. Numpy sphere tracer, studio-lit polycarbonate, real alpha.
Usage: render.py WIDTH out.png  (also prints the projected LCD corners as fractions of the image, for the canvas sweep)"""
import numpy as np, sys, json
from PIL import Image, ImageDraw, ImageFont
WO=int(sys.argv[1]) if len(sys.argv)>1 else 1300; OUT=sys.argv[2] if len(sys.argv)>2 else 'hero.png'
SS=2; W=WO*SS; H=int(W*0.62)
def nrm(v): return v/(np.linalg.norm(v,axis=-1,keepdims=True)+1e-12)
def sm(a,b,x): x=np.clip((x-a)/(b-a),0,1); return x*x*(3-2*x)
L,HH,D,R=1.22,0.33,0.42,0.17      # half length, half height, half depth, corner radius
SH=0.34                            # shear: the front face leans back as it rises
def rbox(p,b,r):
    q=np.abs(p)-(b-r); return np.linalg.norm(np.maximum(q,0),axis=-1)+np.minimum(np.max(q,axis=-1),0)-r
def body_local(p):
    q=p.copy(); q[...,2]=p[...,2]+SH*p[...,1]; return q
def body(p):
    q=body_local(p); return rbox(q,np.array([L,HH,D]),R)*0.92
KX,KY=0.97,0.0                     # knob centre on the front face (local x,y)
def front_pt(x,y):                 # a point on the front face, world space
    return np.array([x,y,D-SH*y])
FN=nrm(np.array([0.0,SH,1.0]))     # front-face normal
def knob(p):
    c=front_pt(KX,KY); v=p-c; a=np.sum(v*FN,axis=-1)
    rr=np.linalg.norm(v-a[...,None]*FN,axis=-1)
    dr=rr-0.155; da=np.abs(a-0.055)-0.055
    return np.linalg.norm(np.maximum(np.stack([dr,da],-1)+0.02,0),axis=-1)+np.minimum(np.maximum(dr,da)+0.02,0)-0.02
def scene(p):
    a=body(p); b=knob(p); return np.minimum(a,b), (b<a)
# ---------- LCD texture ----------
TW,TH=1200,470
tex=Image.new('RGB',(TW,TH),(196,208,203)); dr=ImageDraw.Draw(tex)
for i in range(TH):  # soft backlight falloff
    k=1-0.10*abs(i/TH-0.45)
    dr.line([(0,i),(TW,i)],fill=(int(196*k),int(210*k),int(205*k)))
ink=(34,44,46)
def font(sz,b=True):
    for f in ['/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf' if b else '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf']:
        try: return ImageFont.truetype(f,sz)
        except Exception: pass
    return ImageFont.load_default()
# plethysmogram: a pulse train with dicrotic notches over a fine grid
dr.rectangle([40,60,800,380],outline=(120,134,132),width=3)
for gx in range(40,801,95): dr.line([(gx,60),(gx,380)],fill=(170,184,180),width=1)
pts=[]
for x in range(44,797):
    t=(x-44)/112.0; ph=t-np.floor(t)
    y=np.exp(-((ph-0.18)/0.075)**2)+0.42*np.exp(-((ph-0.47)/0.09)**2)-0.06*ph
    pts.append((x,350-240*y))
dr.line(pts,fill=ink,width=6,joint='curve')
SEG={'0':'abcdef','1':'bc','2':'abged','3':'abgcd','4':'fgbc','5':'afgcd','6':'afgedc','7':'abc','8':'abcdefg','9':'abcdfg'}
def seg7(x0,y0,w,h,ch,th):
    sk=0.10*w; m=h/2; g=th*0.18
    P=lambda x,y:(x0+x+sk*(1-y/h),y0+y)
    def hz(y): return [(th*0.5+g,y),(th+g,y-th/2),(w-th-g,y-th/2),(w-th*0.5-g,y),(w-th-g,y+th/2),(th+g,y+th/2)]
    def vt(x,ya,yb): return [(x,ya+g),(x+th/2,ya+th*0.5+g),(x+th/2,yb-th*0.5-g),(x,yb-g),(x-th/2,yb-th*0.5-g),(x-th/2,ya+th*0.5+g)]
    S={'a':hz(th/2),'g':hz(m),'d':hz(h-th/2),'f':vt(th/2,th/2,m),'b':vt(w-th/2,th/2,m),'e':vt(th/2,m,h-th/2),'c':vt(w-th/2,m,h-th/2)}
    for k in SEG[ch]: dr.polygon([P(x,y) for x,y in S[k]],fill=ink)
for i,ch in enumerate('98'): seg7(860+i*120,50,96,170,ch,22)
for i,ch in enumerate('62'): seg7(880+i*100,262,78,138,ch,18)
dr.text((1110,90),'%',font=font(44),fill=ink); dr.text((1100,150),'SpO2',font=font(30,False),fill=ink)
dr.text((1110,300),'PR',font=font(30,False),fill=ink)
dr.rectangle([40,410,560,440],outline=ink,width=3); dr.rectangle([46,416,420,434],fill=ink)
TEX=np.asarray(tex).astype(np.float64)/255.0
# lcd rect (local x,y on the front face) and black bezel rect
LX0,LX1,LY0,LY1=-0.90,0.66,-0.15,0.15
BX0,BX1,BY0,BY1=-1.02,1.12,-0.19,0.19
# ---------- camera ----------
cam=np.array([1.55,1.75,4.3]); tgt=np.array([0.02,-0.05,0.0]); up=np.array([0,1,0.0])
fw=nrm(tgt-cam); rt=nrm(np.cross(fw,up)); u2=np.cross(rt,fw); FOV=0.36
def project(P):
    v=P-cam; z=v@fw; sx=(v@rt)/z/FOV; sy=(v@u2)/z/(FOV*H/W); return ((sx+1)/2,(1-sy)/2)
LKEY=nrm(np.array([-0.45,1.0,0.55])); LRIM=nrm(np.array([0.9,0.35,-0.5])); LFIL=nrm(np.array([0.2,-0.2,1.0]))
def shade(P,N,V,isk):
    q=body_local(P); x,y=q[...,0],q[...,1]
    front=(N@FN)>0.93
    cx=np.clip(x,BX0+0.05,BX1-0.05); cy=np.clip(y,BY0+0.05,BY1-0.05)
    inb=front&((x-cx)**2+(y-cy)**2<0.05**2)&~isk
    inl=front&(x>LX0)&(x<LX1)&(y>LY0)&(y<LY1)&~isk
    endcap=(np.abs(x)>L-0.16)&~isk
    base=np.zeros(P.shape); base[:]=np.array([0.93,0.935,0.94])
    base[endcap]=np.array([0.62,0.64,0.66])
    base[isk]=np.array([0.16,0.17,0.18]); base[inb]=np.array([0.025,0.028,0.032])
    rough=np.full(P.shape[:-1],0.35); rough[inb]=0.06; rough[isk]=0.5
    wk=(np.clip(N@LKEY,-1,1)*0.5+0.5)**2
    dif=wk*0.85+np.clip(N@LFIL,0,1)*0.22+np.clip(N@LRIM,0,1)*0.30
    sky=0.16+0.12*np.clip(N[...,1],-1,1)
    col=base*(dif[...,None]*0.85+sky[...,None])
    H1=nrm(LKEY+V); H2=nrm(LRIM+V)
    pw=np.where(rough<0.1,180.0,np.where(rough<0.4,46.0,20.0))
    spec=np.clip(np.sum(N*H1,-1),0,1)**pw*0.55+np.clip(np.sum(N*H2,-1),0,1)**pw*0.35
    fres=0.04+0.96*(1-np.clip(np.sum(N*V,-1),0,1))**5
    refl=np.where(inb,0.10+0.5*fres,0.10+0.30*fres)
    # environment: a soft overhead softbox stripe reflected
    Rv=2*np.sum(N*V,-1)[...,None]*N-V
    box=sm(0.45,0.8,Rv[...,1])*sm(-1.0,-0.3,Rv[...,0])*sm(0.8,0.1,Rv[...,0])*sm(-0.6,0.1,Rv[...,2])
    col=col+(spec+refl*box*1.4)[...,None]*np.array([1.0,1.0,1.02])
    # a cool teal environment at grazing angles ties the housing to the page
    col=col+(fres*0.35*~inb)[...,None]*np.array([0.25,0.55,0.62])
    # a broad diagonal glare across the bezel glass
    gl=sm(0.25,0.0,np.abs((x*0.35+y)-0.02))*0.05
    col[inb]=col[inb]+gl[inb,None]
    # LCD
    if inl.any():
        u=(x[inl]-LX0)/(LX1-LX0); v=1-(y[inl]-LY0)/(LY1-LY0)
        iu=np.clip((u*(TW-1)).astype(int),0,TW-1); iv=np.clip((v*(TH-1)).astype(int),0,TH-1)
        lc=TEX[iv,iu]*0.92
        edge=sm(0,0.03,u)*sm(1,0.97,u)*sm(0,0.05,v)*sm(1,0.95,v)
        lc=lc*(0.55+0.45*edge[...,None])
        col[inl]=lc+(spec[inl]*0.5+fres[inl]*box[inl]*0.25)[...,None]
    # knob grip ridges
    if isk.any():
        c=front_pt(KX,KY); vv=P[isk]-c; a=vv@FN; rr=np.linalg.norm(vv-a[:,None]*FN,axis=-1)
        ang=np.arctan2(vv@nrm(np.cross(FN,[1,0,0])),vv@np.array([1,0,0.0]))
        rid=(rr>0.12)*(0.86+0.14*np.sin(ang*36))
        col[isk]=col[isk]*np.where(rr>0.12,rid,1.0)[:,None]
    # ambient occlusion-ish darkening near the bezel edge and under the body
    return col
def trace(o,dv):
    t=np.full(o.shape[0],2.5); hit=np.zeros(o.shape[0],bool); isk=np.zeros(o.shape[0],bool); act=np.ones(o.shape[0],bool)
    for _ in range(160):
        idx=np.nonzero(act)[0]
        if not len(idx): break
        p=o[idx]+t[idx,None]*dv[idx]; d,k=scene(p)
        h=d<4e-4; hit[idx[h]]=True; isk[idx[h]]=k[h]; act[idx[h]]=False
        t[idx]+=np.where(h,0,d); far=t[idx]>9; act[idx[far]]=False
    return t,hit,isk
def normal(p):
    e=6e-4; ex=np.array([e,0,0]); ey=np.array([0,e,0]); ez=np.array([0,0,e])
    f=lambda q: scene(q)[0]
    return nrm(np.stack([f(p+ex)-f(p-ex),f(p+ey)-f(p-ey),f(p+ez)-f(p-ez)],-1))
img=np.zeros((H,W,4))
ys=np.arange(H); xs=np.arange(W)
for r0 in range(0,H,96):
    yy,xx=np.meshgrid(ys[r0:r0+96],xs,indexing='ij')
    sx=(xx+0.5)/W*2-1; sy=1-(yy+0.5)/H*2
    dv=nrm(fw+sx[...,None]*FOV*rt+sy[...,None]*FOV*(H/W)*u2).reshape(-1,3)
    o=np.broadcast_to(cam,dv.shape).copy()
    t,hit,isk=trace(o,dv)
    col=np.zeros((dv.shape[0],4))
    if hit.any():
        P=o[hit]+t[hit,None]*dv[hit]; N=normal(P); V=-dv[hit]
        c=shade(P,N,V,isk[hit])
        # contact darkening on the underside
        c=c*(0.55+0.45*sm(-HH-0.02,-HH+0.22,P[:,1]))[:,None]
        col[hit,:3]=c; col[hit,3]=1
    img[r0:r0+96]=col.reshape(yy.shape+(4,))
    print('row',r0,'/',H,file=sys.stderr,flush=True) if r0%960==0 else None
# tone map, downsample with premultiplied alpha
rgb=img[...,:3]*1.12; rgb=rgb/(1+0.22*rgb); rgb=np.clip(rgb,0,1)**(1/1.12)
pm=np.concatenate([rgb*img[...,3:],img[...,3:]],-1)
pm=pm.reshape(H//SS,SS,W//SS,SS,4).mean((1,3))
a=pm[...,3:]; out=np.where(a>1e-4,pm[...,:3]/np.maximum(a,1e-4),0)
im=Image.fromarray(np.concatenate([np.clip(out,0,1)*255,a*255],-1).astype(np.uint8),'RGBA')
bb=im.getbbox(); pad=int(WO*0.03)
im=im.crop((max(bb[0]-pad,0),max(bb[1]-pad,0),min(bb[2]+pad,im.width),min(bb[3]+pad,im.height)))
im.save(OUT)
ox,oy=max(bb[0]-pad,0),max(bb[1]-pad,0)
cor={}
for nm,(lx,ly) in {'tl':(LX0,LY1),'tr':(LX1,LY1),'bl':(LX0,LY0)}.items():
    P=front_pt(lx,ly); fx,fy=project(P); cor[nm]=[round((fx*WO-ox)/im.width,4),round((fy*(H/SS)-oy)/im.height,4)]
print(json.dumps({'size':im.size,'lcd':cor}))
