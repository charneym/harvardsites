#!/usr/bin/env python3
"""Hero tissue texture for DoMore Diagnostics: image quilting (Efros-Freeman) from grid-free patches of DoMore's OWN H&E
image (domorediagnostics.com, 'Histology unbranded.jpg', a colorectal adenocarcinoma section). Tumour glands quilted into a mass,
pink muscularis/stroma around it, glass (white) made transparent. Run: python3 quilt.py histo.jpg out.png"""
import sys, numpy as np, cv2, random
src=cv2.imread(sys.argv[1]).astype(np.float32); Hs,Ws=src.shape[:2]
g=cv2.cvtColor(src.astype(np.uint8),cv2.COLOR_BGR2GRAY); hsv=cv2.cvtColor(src.astype(np.uint8),cv2.COLOR_BGR2HSV)
white=((g>200)&(hsv[:,:,1]<45)).astype(np.uint8)
thin=white-cv2.morphologyEx(white,cv2.MORPH_OPEN,np.ones((7,7),np.uint8))
P,O=40,9; rnd=random.Random(3)
def lineish(y,x):
    t=thin[y:y+P,x:x+P].astype(np.float32)
    r=cv2.blur(t,(1,3)).sum(1).max() if False else max(t[i:i+3].max(0).sum() for i in range(0,P-2,2))
    c=max(t[:,i:i+3].max(1).sum() for i in range(0,P-2,2))
    return max(r,c)>P*.45
def pool(x0,x1,y0,y1,lmax,lmin=0,n=2500):
    out=[]
    for _ in range(n*6):
        x=rnd.randint(x0,x1-P);y=rnd.randint(y0,y1-P);pm=g[y:y+P,x:x+P].mean()
        if pm>lmax or pm<lmin or lineish(y,x):continue
        out.append(src[y:y+P,x:x+P].copy())
        if len(out)>=n:break
    return np.array(out)
tum=pool(640,1176,0,633,185,60,1800); stro=pool(420,700,110,633,218,140,1400)
aug=lambda a:np.concatenate([a,a[:,::-1],a[:,:,::-1],a.transpose(0,2,1,3),a[:,::-1,::-1]])
tum=aug(tum); stro=aug(stro)
print('pools',len(tum),len(stro))
def quilt(pool,W,H):
    S=P-O; nx=(W-O)//S+1; ny=(H-O)//S+1; out=np.zeros((ny*S+O,nx*S+O,3),np.float32)
    for j in range(ny):
        for i in range(nx):
            y,x=j*S,i*S
            if i==0 and j==0: out[y:y+P,x:x+P]=pool[rnd.randrange(len(pool))];continue
            cand=pool[np.random.choice(len(pool),min(220,len(pool)),replace=False)]
            err=np.zeros(len(cand),np.float32)
            if i>0: err+=((cand[:,:,:O]-out[y:y+P,x:x+O])**2).sum((1,2,3))
            if j>0: err+=((cand[:,:O,:]-out[y:y+O,x:x+P])**2).sum((1,2,3))
            k=np.argsort(err)[:max(1,int(len(cand)*.04))]; p=cand[rnd.choice(list(k))].copy()
            mask=np.ones((P,P),np.float32)
            if i>0:   # min-cut along vertical overlap
                e=((p[:,:O]-out[y:y+P,x:x+O])**2).sum(2); E=e.copy()
                for r in range(1,P):
                    for c in range(O): E[r,c]+=min(E[r-1,max(c-1,0):min(c+2,O)])
                c=int(np.argmin(E[-1]))
                for r in range(P-1,-1,-1):
                    mask[r,:c]=0
                    if r: lo=max(c-1,0);c=lo+int(np.argmin(E[r-1,lo:min(c+2,O)]))
            if j>0:
                e=((p[:O,:]-out[y:y+O,x:x+P])**2).sum(2).T; E=e.copy()
                for r in range(1,P):
                    for c in range(O): E[r,c]+=min(E[r-1,max(c-1,0):min(c+2,O)])
                c=int(np.argmin(E[-1]))
                for r in range(P-1,-1,-1):
                    mask[:c,r]=0
                    if r: lo=max(c-1,0);c=lo+int(np.argmin(E[r-1,lo:min(c+2,O)]))
            mask=cv2.GaussianBlur(mask,(3,3),.7)[...,None]
            out[y:y+P,x:x+P]=out[y:y+P,x:x+P]*(1-mask)+p*mask
    return out[:H,:W]
W,H=1500,1000
np.random.seed(5)
T=quilt(tum,W,H); Sx=quilt(stro,W,H)
yy,xx=np.mgrid[0:H,0:W].astype(np.float32)
def nz(sc,seed):
    rs=np.random.RandomState(seed);a=rs.rand(H//sc+3,W//sc+3).astype(np.float32);return cv2.resize(a,(W+3*sc,H+3*sc),interpolation=cv2.INTER_CUBIC)[:H,:W]
# section outline: an irregular slab of bowel wall; tumour mass in its centre-right
d=((xx-W*.5)/(W*.47))**2+((yy-H*.5)/(H*.40))**2+(nz(140,1)-.5)*.5+(nz(40,2)-.5)*.12
sec=np.clip((1-d)/.012,0,1)
t=((xx-W*.55)/(W*.36))**2+((yy-H*.5)/(H*.36))**2+(nz(110,3)-.5)*.8
tm=cv2.GaussianBlur(np.clip((1-t)/.12,0,1),(0,0),6)[...,None]
Sx=Sx*.62+np.array([196,140,222],np.float32)*.38
img=Sx*(1-tm)+T*tm
lum=img.mean(2); sat=img.max(2)-img.min(2)
glass=np.clip((lum-196)/30,0,1)*np.clip((40-sat)/25,0,1)
al=sec*(1-.92*glass)
out=np.dstack([np.clip(img,0,255),np.clip(al*255,0,255)]).astype(np.uint8)
cv2.imwrite(sys.argv[2],out); print('ok')
