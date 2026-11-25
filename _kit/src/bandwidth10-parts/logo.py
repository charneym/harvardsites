import math,json
def inter(A,B,a,b):
    # x^2/A^2+y^2/B^2=1, x^2/a^2+y^2/b^2=1
    # solve for X=x^2: X(1/A^2 - B^2/(b^2 A^2))... use linear system in X,Y
    import numpy as np
    M=np.array([[1/A**2,1/B**2],[1/a**2,1/b**2]]);X,Y=np.linalg.solve(M,[1,1]);return math.sqrt(X),math.sqrt(Y)
def f(v):return ('%.2f'%v).rstrip('0').rstrip('.')
def cres(A,B,a,b,side=-1,N=28):
    xt,yt=inter(A,B,a,b)
    t0=math.acos(min(1,xt/A))  # angle on outer
    s0=math.acos(min(1,xt/a))
    pts=[]
    # outer arc from top tip (angle pi - t0 measured...) param: x=-A cos(th), y=-B sin(th) for left
    for i in range(N+1):
        th=-t0+2*t0*i/N  # from -t0 to t0
        pts.append((side*A*math.cos(th), B*math.sin(th)))
    for i in range(N+1):
        th=s0-2*s0*i/N
        pts.append((side*a*math.cos(th), b*math.sin(th)))
    return 'M'+' L'.join(f(x)+' '+f(y) for x,y in pts)+'Z'
def lens(A,B,cut,side=-1,N=20):
    t0=math.acos(cut/A);pts=[]
    for i in range(N+1):
        th=-t0+2*t0*i/N;pts.append((side*A*math.cos(th),B*math.sin(th)))
    return 'M'+' L'.join(f(x)+' '+f(y) for x,y in pts)+'Z'
R=[(82,21,69,26.6),(66,14.8,52,20.6),(49,9.0,35,15.0)]
d='M-85 0A85 27 0 1 0 85 0A85 27 0 1 0 -85 0Z'
for s in (-1,1):
    for A,B,a,b in R:d+=cres(A,B,a,b,s)
    d+=lens(31,4.4,18.5,s)
open('mark.d','w').write(d);print(len(d))
