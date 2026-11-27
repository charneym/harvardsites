#!/usr/bin/env python3
"""Oxford Endovascular hero (PROD_BRIEF 3b, variant B lighting): a crafted render of OXIFLOW, their flow diverter, as
described by the company (oxfordendovascular.com, May 2024: "a unique flow-diverter stent ... laser-cut from Nitinol";
CORDIS H2020 project 859001: "an inner frame to address the placement and opening issues, with an outer sleeve to deal
with the flow diversions", origami design principles). Drawn as one deployed device: a laser-cut nitinol frame of
folded diamond cells with crowns at both ends, inside a fine, dense outer sleeve. The cell geometry is illustrative.
Satin nitinol, neutral studio light (one key upper left, low fill, dim rim), no glow; alpha out. No lettering.
Usage: python3 render_b.py W H out.png [SS] [procs]"""
import sys, numpy as np
from multiprocessing import Pool
from PIL import Image
W=int(sys.argv[1]);H=int(sys.argv[2]);OUT=sys.argv[3];SS=int(sys.argv[4]) if len(sys.argv)>4 else 1;NP=int(sys.argv[5]) if len(sys.argv)>5 else 4
FW,FH=W,H;W,H=W*SS,H*SS
def nrm(v):return v/np.linalg.norm(v,axis=-1,keepdims=True)
def sm(a,b,x):x=np.clip((x-a)/(b-a),0,1);return x*x*(3-2*x)
R=.30;HL=1.02                      # radius, half length (device axis = local x)
NF=12                             # frame: 6 diamond cells around (lines sit at odd A+-B, so n/2 cells)
PF=.17                             # frame: axial cell pitch
NS=100                              # sleeve: fine helical strands each way
TW=.0105;TS=.0026                  # strut half-widths (frame, sleeve)
TH=.010;THS=.0035                  # radial half-thickness
# device pose: axis tilted in the picture plane and slightly toward the camera
ang=np.radians(-14);tilt=np.radians(22)
Rz=np.array([[np.cos(ang),-np.sin(ang),0],[np.sin(ang),np.cos(ang),0],[0,0,1]])
Ry=np.array([[np.cos(tilt),0,np.sin(tilt)],[0,1,0],[-np.sin(tilt),0,np.cos(tilt)]])
M=Rz@Ry;MI=M.T
def tri(x):return np.abs((x%2)-1)              # triangle wave 0..1
def lattice(s,z,n,pitch):
    # distance (in surface units) to a diamond lattice: lines theta = +-(2pi/n)/pitch * z + k*2pi/n
    cw=R*2*np.pi/n;A=s/cw;B=z/pitch
    k=1/np.sqrt(1/cw**2+1/pitch**2)               # normalised -> surface distance to a line A+-B = odd
    return np.minimum(tri(A+B),tri(A-B))*k
def scene(p,want=False):
    q=p@M                                        # into device space
    x=q[:,0];r=np.hypot(q[:,1],q[:,2]);th=np.arctan2(q[:,2],q[:,1]);s=th*R
    # frame (inner): diamond cells, ends cut on the crown points
    zf=x
    df=lattice(s,zf,NF,PF)-TW
    dr=np.abs(r-R)-TH
    cw=R*2*np.pi/NF;A=s/cw
    endc=(np.abs(x)-(HL-PF*tri(A)))*.7      # the frame ends on its own crowns (HL is an even number of half-pitches)
    frame=np.maximum(np.maximum(df,dr),endc)
    # sleeve (outer): dense fine helices, a little shorter than the frame
    ds=lattice(s,x,NS,.026)-TS
    drs=np.abs(r-(R+.024))-THS
    ends=np.abs(x)-(HL-.13)
    sleeve=np.maximum(np.maximum(ds,drs),ends)
    d=np.minimum(frame,sleeve)*.55              # conservative step (the lattice metric is approximate)
    if not want:return d
    return d,(sleeve<frame).astype(int)
def normal(p):
    e=.0006;E=np.eye(3)*e
    return nrm(np.stack([scene(p+E[i])-scene(p-E[i]) for i in range(3)],1))
KEY=nrm(np.array([-.62,.62,.48]));FILL=nrm(np.array([.7,-.15,.7]))
def env(d):
    x,y,z=d[:,0],d[:,1],d[:,2]
    c=np.full(len(d),.012)
    c+=sm(.35,.95,y)*sm(-.6,.4,z)*.55
    c+=np.exp(-((x+.70)/.22)**2)*sm(-.4,.3,y)*sm(-.3,.4,z)*2.2
    c+=np.exp(-((x-.85)/.08)**2)*sm(-.5,.2,y)*sm(.3,-.4,z)*.6
    c+=np.exp(-((y-.05)/.25)**2)*sm(.4,.95,z)*.20
    c+=sm(-.2,-.9,y)*.02
    return np.stack([c,c*.995,c*.985],1)
CAM=np.array([0,.25,4.2]);TGT=np.array([0,0,0]);FOV=.27
fw=nrm(TGT-CAM);rt=nrm(np.cross(fw,[0,1,0]));up=np.cross(rt,fw)
def shade(u,v):
    n=len(u);rd=nrm(fw[None]+u[:,None]*rt[None]*FOV+v[:,None]*up[None]*FOV)
    # bounding cylinder test to skip empty rays
    t=np.full(n,3.0);hit=np.zeros(n,bool);alive=np.ones(n,bool)
    for it in range(420):
        idx=np.nonzero(alive)[0]
        if not len(idx):break
        p=CAM+rd[idx]*t[idx,None];d=scene(p)
        h=d<1e-4;hit[idx[h]]=True;alive[idx[h]]=False
        t[idx]+=np.maximum(d,1.5e-4);alive[idx[t[idx]>5.6]]=False
    L=np.zeros((n,3));a=np.zeros(n);hi=np.nonzero(hit)[0]
    if len(hi):
        p=CAM+rd[hi]*t[hi,None];_,m=scene(p,True);nn=normal(p);V=-rd[hi]
        nn=np.where(((nn*V).sum(1)<0)[:,None],-nn,nn)    # inside faces seen through the lattice
        ndv=np.clip((nn*V).sum(1),0,1);fr=(1-ndv)**5
        dk=np.clip(nn@KEY,0,1);df=np.clip(nn@FILL,0,1)
        R_=2*(nn*V).sum(1)[:,None]*nn-V;ev=env(R_)
        hk=nrm(KEY[None]+V);sp=np.clip((nn*hk).sum(1),0,1)
        q=p@M;back=(q[:,1]*0+((p-CAM)@fw))   # depth
        # satin nitinol: grey metal, env-driven
        alb=np.array([.52,.52,.53])
        c=alb[None]*(.05+.55*dk+.12*df)[:,None]+ev*(.55+.45*fr)[:,None]*np.array([.78,.78,.79])+(sp**70*1.1+sp**14*.10)[:,None]
        # the far wall (seen through the cells) sits a little darker, which reads as depth
        far=(q[:,1]*0)+((p@fw)-(TGT@fw))
        c*=np.clip(1-.42*sm(-.05,.3,far),.55,1)[:,None]
        c[m==1]*=.74
        L[hi]=c;a[hi]=1
    return L,a
def run(rows):
    y0,y1=rows;PX,PY=np.meshgrid(np.arange(W),np.arange(y0,y1))
    u=((PX+.5)/W*2-1)*W/H;v=1-(PY+.5)/H*2
    L,a=shade(u.ravel(),v.ravel())
    x=L/(1+.35*L)*1.3;x=np.clip(x,0,1)**(1/2.2)
    return np.dstack([x.reshape(y1-y0,W,3),a.reshape(y1-y0,W,1)])
if __name__=='__main__':
    ch=[(i,min(i+16,H)) for i in range(0,H,16)]
    with Pool(NP) as P:img=np.vstack(P.map(run,ch))
    im=Image.fromarray((img*255).clip(0,255).astype(np.uint8),'RGBA')
    if SS>1:im=im.resize((FW,FH),Image.LANCZOS)
    print('bbox',im.getbbox());im.save(OUT)
