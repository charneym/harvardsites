#!/usr/bin/env python3
"""Illustrative kinase-inhibitor-like small molecule (not a specific Meliora compound): a fused 6-5 heteroaromatic core,
an anilino arm and a piperazine. Writes mol.json (atoms [el,x,y,z], bonds [i,j,order]) for render.js."""
import math, json, pathlib
A=[];B=[]
def add(el,x,y,z=0):A.append([el,x,y,z]);return len(A)-1
def bond(i,j,o=1):B.append([i,j,o])
s=1.4
def ring_from(i,j,n,els,side=1):
    """build a regular n-ring on existing atoms i->j (edge), new atoms on `side`; returns list of ring atom idx starting i,j"""
    xi,yi=A[i][1],A[i][2];xj,yj=A[j][1],A[j][2]
    ang=math.atan2(yj-yi,xj-xi);ext=2*math.pi/n;idx=[i,j];x,y=xj,yj
    for k in range(n-2):
        ang+=side*ext;x+=s*math.cos(ang);y+=s*math.sin(ang);idx.append(add(els[k],x,y))
    for a,b in zip(idx[1:],idx[2:]):bond(a,b)
    bond(idx[-1],i);return idx
# core 6-ring (pyrimidine) as a hexagon
R=s
hx=[add(e,R*math.cos(math.radians(90-60*k)),R*math.sin(math.radians(90-60*k))) for k,e in enumerate(['C','N','C','C','C','N'])]
for k in range(6):bond(hx[k],hx[(k+1)%6],2 if k%2==0 else 1)
# fused 5-ring (pyrazole) on edge hx[2]-hx[3] (right lower), outward
p=ring_from(hx[3],hx[2],5,['N','N','C'],side=-1)
bond(p[2],p[3],1);B[-4][2]=2
def sub(i,el,ang_deg,o=1,L=s):
    x=A[i][1]+L*math.cos(math.radians(ang_deg));y=A[i][2]+L*math.sin(math.radians(ang_deg));j=add(el,x,y);bond(i,j,o);return j
me=sub(p[3],'C',-20)              # methyl on the pyrazole N
# anilino arm from hx[0] (top)
nh=sub(hx[0],'N',90)
c1=sub(nh,'C',30)
ph=[c1]
ang=30+60; x,y=A[c1][1],A[c1][2]
# phenyl: centre along the bond direction
cx=A[c1][1]+s*math.cos(math.radians(30));cy=A[c1][2]+s*math.sin(math.radians(30))
ph=[c1]+[add('C',cx+s*math.cos(math.radians(210-60*k)),cy+s*math.sin(math.radians(210-60*k))) for k in range(1,6)]
for k in range(6):bond(ph[k],ph[(k+1)%6],2 if k%2==0 else 1)
f=sub(ph[3],'F',30)
o=sub(ph[1],'O',90);ome=sub(o,'C',150)
# piperazine from hx[4] (lower left)
n1=sub(hx[4],'N',-150)
cx=A[n1][1]+s*math.cos(math.radians(-150));cy=A[n1][2]+s*math.sin(math.radians(-150))
pz=[n1]+[add('N' if k==3 else 'C',cx+s*math.cos(math.radians(30-60*k)),cy+s*math.sin(math.radians(30-60*k))) for k in range(1,6)]
for k in range(6):bond(pz[k],pz[(k+1)%6])
pme=sub(pz[3],'C',-150)
# carbonyl on the core
oc=sub(hx[2],'O',-30+0,2) if False else None
# gentle 3D: chair the piperazine, twist the phenyl out of plane
for k,i in enumerate(pz):A[i][3]+=(.38 if k%2 else -.38)
A[pme][3]-=.5
import numpy as np
P=np.array([[a[1],a[2],a[3]] for a in A]);
axis=P[c1]-P[nh];axis/=np.linalg.norm(axis);th=math.radians(38)
def rot(v,o):
    v=v-o;return o+v*math.cos(th)+np.cross(axis,v)*math.sin(th)+axis*np.dot(axis,v)*(1-math.cos(th))
for i in ph+[f,o,ome]:P[i]=rot(P[i],P[c1])
P-=P.mean(0)
out={"atoms":[[A[i][0]]+[round(float(v),3) for v in P[i]] for i in range(len(A))],"bonds":B}
pathlib.Path(__file__).with_name('mol.json').write_text(json.dumps(out))
# preview
from PIL import Image,ImageDraw
im=Image.new('RGB',(800,800),'white');d=ImageDraw.Draw(im);S=55;C=lambda q:(400+q[0]*S,400-q[1]*S)
for i,j,o_ in B:d.line([C(P[i]),C(P[j])],fill='black',width=2*o_)
col={'C':'gray','N':'blue','O':'red','F':'green'}
for i,a in enumerate(A):x,y=C(P[i]);d.ellipse([x-8,y-8,x+8,y+8],fill=col[a[0]])
im.save('/tmp/claude-0/mel/mol2d.png');print(len(A),'atoms',len(B),'bonds')
