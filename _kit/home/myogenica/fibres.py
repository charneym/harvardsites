#!/usr/bin/env python3
"""Offline geometry for the Myogenica story scene: a muscle cross-section (Voronoi fibres from a jittered hex lattice, clipped
inside an ellipse fascicle) and the cell paths. Writes fibres.js (embedded into story.js by hand-free concatenation in assemble)."""
import math, random, json, pathlib
random.seed(7)
W,H=800,560; CX,CY,RX,RY=430,284,350,250
pts=[]
s=58
for j in range(-1,int(H/(s*.866))+2):
  for i in range(-1,int(W/s)+2):
    x=i*s+(s/2 if j%2 else 0)+random.uniform(-14,14); y=j*s*.866+random.uniform(-12,12)
    pts.append((x,y))
def clip(poly,a,b,c):  # keep a*x+b*y<=c
  out=[]
  for k in range(len(poly)):
    P=poly[k];Q=poly[(k+1)%len(poly)]
    fp=a*P[0]+b*P[1]-c;fq=a*Q[0]+b*Q[1]-c
    if fp<=0: out.append(P)
    if fp*fq<0:
      t=fp/(fp-fq);out.append((P[0]+t*(Q[0]-P[0]),P[1]+t*(Q[1]-P[1])))
  return out
fib=[]
for i,p in enumerate(pts):
  e=((p[0]-CX)/RX)**2+((p[1]-CY)/RY)**2
  if e>1: continue
  poly=[(p[0]-90,p[1]-90),(p[0]+90,p[1]-90),(p[0]+90,p[1]+90),(p[0]-90,p[1]+90)]
  for j,q in enumerate(pts):
    if i==j: continue
    d=math.hypot(q[0]-p[0],q[1]-p[1])
    if d>150: continue
    a=q[0]-p[0];b=q[1]-p[1];c=(q[0]**2+q[1]**2-p[0]**2-p[1]**2)/2
    poly=clip(poly,a,b,c)
  cx=sum(v[0] for v in poly)/len(poly);cy=sum(v[1] for v in poly)/len(poly)
  # shrink toward centroid (endomysium gap) and round via quadratic midpoints
  sh=[(cx+(v[0]-cx)*0.9,cy+(v[1]-cy)*0.9) for v in poly]
  n=len(sh)
  # straight sides with softly rounded corners (fibres in a cross-section are polygons)
  A=[(sh[k][0]+(sh[(k+1)%n][0]-sh[k][0])*.22,sh[k][1]+(sh[(k+1)%n][1]-sh[k][1])*.22) for k in range(n)]
  B=[(sh[k][0]+(sh[(k-1)%n][0]-sh[k][0])*.22,sh[k][1]+(sh[(k-1)%n][1]-sh[k][1])*.22) for k in range(n)]
  d='M%.1f %.1f'%A[0]
  for k in range(1,n+1):
    kk=k%n; d+='L%.1f %.1f'%B[kk]+'Q%.1f %.1f %.1f %.1f'%(sh[kk][0],sh[kk][1],A[kk][0],A[kk][1])
  d+='Z'
  # edge fade: fibres near the fascicle edge are quieter
  fib.append({'d':d,'c':[round(cx,1),round(cy,1)],'e':round(e,3),'v':[(round(v[0],1),round(v[1],1)) for v in poly]})
# satellite niches: vertices of fibres near the centre band (where cells settle in step 4)
vs={}
for f in fib:
  if f['e']>.62: continue
  for v in f['v']:
    k=(round(v[0]/6),round(v[1]/6));vs[k]=v
niche=list(vs.values());random.shuffle(niche)
# dystrophin-positive fibres: those nearest the niches used
N=26
niche=niche[:N]
# colony: cells packed in a disc at (400,280)
cells=[];ang=0
k=0
while len(cells)<N+12:
  r=11*math.sqrt(k)*1.55;a=k*2.39996
  x=400+r*math.cos(a);y=282+r*math.sin(a)*.92
  cells.append([round(x,1),round(y,1)]);k+=1
random.shuffle(cells)
cd54=[1]*N+[0]*12
out=[]
for i,c in enumerate(cells):
  t=niche[i] if cd54[i] else None
  out.append({'s':c,'p':cd54[i],'t':[round(t[0],1),round(t[1],1)] if t else None,'r':round(random.uniform(.8,1.15),2),'a':round(random.uniform(0,6.28),2)})
# which fibres turn dystrophin+: the ones whose centroid is near a used niche
pos=[]
for fi,f in enumerate(fib):
  dm=min(math.hypot(f['c'][0]-n[0],f['c'][1]-n[1]) for n in niche)
  if dm<40 and f['e']<.75: pos.append(fi)
js='var FIB='+json.dumps([[f['d'],f['c'][0],f['c'][1],f['e']] for f in fib],separators=(',',':'))+';\n'
js+='var DYS='+json.dumps(pos)+';\n'
js+='var CELLS='+json.dumps([[c['s'][0],c['s'][1],c['p'],(c['t'] or [0,0])[0],(c['t'] or [0,0])[1],c['r'],c['a']] for c in out],separators=(',',':'))+';\n'
(pathlib.Path(__file__).parent/'fibres.js').write_text(js)
print(len(fib),'fibres',len(pos),'dys',len(out),'cells',len(js))
