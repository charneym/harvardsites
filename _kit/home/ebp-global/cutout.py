import cv2, numpy as np, sys
from PIL import Image
full=cv2.imread('img/Top-hat-scaled.jpg'); H,W=full.shape[:2]
m0=cv2.imread('mask0.png',0); m0=cv2.resize(m0,(W,H),interpolation=cv2.INTER_LINEAR)
gc=np.full((H,W),cv2.GC_PR_BGD,np.uint8)
inner=cv2.erode((m0>127).astype(np.uint8),np.ones((25,25),np.uint8)); outer=cv2.dilate((m0>127).astype(np.uint8),np.ones((25,25),np.uint8))
gc[m0>127]=cv2.GC_PR_FGD; gc[inner>0]=cv2.GC_FGD; gc[outer==0]=cv2.GC_BGD
bg=np.zeros((1,65)); fg=np.zeros((1,65)); cv2.grabCut(full,gc,None,bg,fg,4,cv2.GC_INIT_WITH_MASK)
m=((gc==1)|(gc==3)).astype(np.uint8)*255
n,lab,st,_=cv2.connectedComponentsWithStats(m); k=1+np.argmax(st[1:,cv2.CC_STAT_AREA]); m=np.where(lab==k,255,0).astype(np.uint8)
ff=m.copy(); fl=np.zeros((H+2,W+2),np.uint8); cv2.floodFill(ff,fl,(0,0),255); m=m|cv2.bitwise_not(ff)
m=cv2.morphologyEx(m,cv2.MORPH_OPEN,cv2.getStructuringElement(cv2.MORPH_ELLIPSE,(11,11)))
x0,y0,bw,bh=cv2.boundingRect((m>0).astype(np.uint8))
FXC=float(sys.argv[2]) if len(sys.argv)>2 else 0.845; FYC=float(sys.argv[3]) if len(sys.argv)>3 else 0.765
# flange rim is convex: fill its convex hull (closes the bite where the white highlight dropped out)
reg=np.zeros_like(m); X0=int(x0+0.905*bw); Y0=int(y0+0.20*bh); Y1=int(y0+0.77*bh); reg[Y0:Y1,X0:]=m[Y0:Y1,X0:]
cs_,_=cv2.findContours(reg,cv2.RETR_EXTERNAL,cv2.CHAIN_APPROX_NONE)
if cs_: cv2.fillPoly(m,[cv2.convexHull(max(cs_,key=cv2.contourArea))],255)
# cylinder below the flange: clip the bench that sticks out past its straight right side
# (measured on the 2560px source: the body's right side runs at x~1570 below the flange, then rounds into the base;
#  everything outside it there is the flange's shadow on the bench)
cv2.fillPoly(m,[np.array([(1574,1226),(1852,1226),(1849,1290),(1858,1306),(1895,1293),(1925,1262),(1946,1226),(W,1226),(W,H),(1280,H),(1368,1642),(1440,1594),(1500,1544),(1546,1484),(1568,1420),(1574,1330)],np.int32)],0)
cont,_=cv2.findContours(m,cv2.RETR_EXTERNAL,cv2.CHAIN_APPROX_NONE); C=max(cont,key=cv2.contourArea)[:,0,:].astype(np.float64)
x0,y0,bw,bh=cv2.boundingRect(C.astype(np.int32))
fx=(C[:,0]-x0)/bw; fy=(C[:,1]-y0)/bh
# smoothing window per point: heavy on the flange rim and the plain lower body/base, light on the threaded ports
heavy=((fx>0.66)&(fy>0.22))|(fy>0.74)
win=np.where(heavy,int(sys.argv[1]) if len(sys.argv)>1 else 71,15)
win=np.round(cv2.GaussianBlur(win.astype(np.float32).reshape(-1,1),(1,0),sigmaX=0,sigmaY=40).ravel()) if False else win
N=len(C); cs=np.vstack([C,C,C]); S=np.cumsum(np.vstack([[0,0],cs]),0)
out=np.zeros_like(C)
for i in range(N):
    h=win[i]//2; a=N+i-h; b=N+i+h+1; out[i]=(S[b]-S[a])/(b-a)
# second pass light smoothing to blend the window change
cs=np.vstack([out,out,out]); S=np.cumsum(np.vstack([[0,0],cs]),0); out2=np.zeros_like(out)
for i in range(N): a=N+i-7; b=N+i+8; out2[i]=(S[b]-S[a])/(b-a)
SH=4; mk=np.zeros((H,W),np.uint8); cv2.fillPoly(mk,[np.round(out2*(1<<SH)).astype(np.int32).reshape(-1,1,2)],255,lineType=cv2.LINE_AA,shift=SH)
mk=cv2.erode(mk,cv2.getStructuringElement(cv2.MORPH_ELLIPSE,(5,5)))
a=cv2.GaussianBlur(mk.astype(np.float32)/255,(0,0),1.4)
im=full.astype(np.float32)/255
core=cv2.erode((mk>127).astype(np.uint8)*255,cv2.getStructuringElement(cv2.MORPH_ELLIPSE,(15,15))).astype(np.float32)/255
num=cv2.GaussianBlur(im*core[...,None],(0,0),6); den=cv2.GaussianBlur(core,(0,0),6)[...,None]; fillc=num/np.maximum(den,1e-4)
wc=np.clip(cv2.GaussianBlur(core,(0,0),2),0,1)[...,None]; im=im*wc+fillc*(1-wc)
sel=core>0.5; mean=im[sel].mean(0); im=im*(mean.mean()/mean); im=np.clip((im-0.04)/0.94,0,1)**1.08
rgba=np.dstack([(im[...,::-1]*255+.5).astype(np.uint8),(np.clip(a,0,1)*255+.5).astype(np.uint8)])
P=Image.fromarray(rgba,'RGBA'); bb=P.getbbox(); mg=40; P=P.crop((bb[0]-mg,bb[1]-mg,bb[2]+mg,bb[3]+mg))
P=P.convert('RGBa').resize((P.width//2,P.height//2),Image.LANCZOS).convert('RGBA'); print(P.size); P.save('vessel4.png')
Wt=Image.new('RGBA',P.size,(255,255,255,255)); Wt.alpha_composite(P); Wt.convert('RGB').save('vessel4_prev.png')
z=Wt.crop((520,180,P.width,P.height)); z.resize((z.width*2,z.height*2),Image.LANCZOS).convert('RGB').save('edge_zoom4.png')
