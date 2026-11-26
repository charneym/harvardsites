# Trace Interpower's "i"-globe logo (interpower.com/ic/images/IC-black_noCorp.png, 332x130, black on white) into one
# evenodd SVG path: upscale x8 bicubic, soften, marching squares at the 50% level, link loops, simplify (RDP).
import sys, numpy as np
from PIL import Image, ImageFilter
src, out = sys.argv[1], sys.argv[2]
S = 8
im0 = Image.open(src).convert('RGBA'); bgw = Image.new('RGBA', im0.size, (255,255,255,255)); bgw.alpha_composite(im0); im = bgw.convert('L')
W, H = im.size
im = im.resize((W*S, H*S), Image.BICUBIC).filter(ImageFilter.GaussianBlur(S*0.45))
a = 1 - np.asarray(im, dtype=float)/255.0           # 1 = ink
a = np.pad(a, 1)
h, w = a.shape
lv = 0.5
segs = {}
def ip(p, q, vp, vq):
    t = (lv - vp)/(vq - vp); return (p[0]+(q[0]-p[0])*t, p[1]+(q[1]-p[1])*t)
edges = []
for y in range(h-1):
    r0 = a[y]; r1 = a[y+1]
    for x in range(w-1):
        v = (r0[x], r0[x+1], r1[x+1], r1[x])
        c = (v[0]>lv)|((v[1]>lv)<<1)|((v[2]>lv)<<2)|((v[3]>lv)<<3)
        if c == 0 or c == 15: continue
        P = [(x,y),(x+1,y),(x+1,y+1),(x,y+1)]
        E = {}
        for i in range(4):
            j = (i+1) % 4
            if (v[i]>lv) != (v[j]>lv): E[i] = ip(P[i], P[j], v[i], v[j])
        k = sorted(E)
        if len(k) == 2: edges.append(((x,y,k[0]),(x,y,k[1]),E[k[0]],E[k[1]]))
        else:
            # saddle: pair 0-1,2-3 or 0-3,1-2 by centre value
            cv = sum(v)/4
            pairs = [(0,1),(2,3)] if ((cv>lv) == (v[1]>lv)) else [(0,3),(1,2)]
            if c in (5,10):
                pairs = [(0,3),(1,2)] if (cv>lv) == (v[0]>lv) else [(0,1),(2,3)]
            for p_, q_ in pairs: edges.append(((x,y,p_),(x,y,q_),E[p_],E[q_]))
# key each crossing by the shared grid edge so neighbours join
def key(x, y, e):
    return {0:('h',x,y),1:('v',x+1,y),2:('h',x,y+1),3:('v',x,y)}[e]
adj = {}
pt = {}
for a_, b_, pa, pb in edges:
    ka, kb = key(*a_), key(*b_)
    pt[ka] = pa; pt[kb] = pb
    adj.setdefault(ka, []).append(kb); adj.setdefault(kb, []).append(ka)
seen = set(); loops = []
for k0 in adj:
    if k0 in seen: continue
    loop = [k0]; seen.add(k0); prev = None; cur = k0
    while True:
        nx = [n for n in adj[cur] if n != prev and n not in seen]
        if not nx: break
        prev, cur = cur, nx[0]; seen.add(cur); loop.append(cur)
    if len(loop) > 6: loops.append([pt[k] for k in loop])
def rdp(P, eps):
    if len(P) < 3: return P
    A, B = np.array(P[0]), np.array(P[-1]); d = B - A; n = np.hypot(*d)
    Q = np.array(P)
    dist = np.abs(d[0]*(Q[:,1]-A[1]) - d[1]*(Q[:,0]-A[0]))/n if n > 0 else np.hypot(*(Q - A).T)
    i = int(np.argmax(dist))
    if dist[i] > eps: return rdp(P[:i+1], eps)[:-1] + rdp(P[i:], eps)
    return [P[0], P[-1]]
parts = []
for L in loops:
    m = len(L)//2
    Ls = rdp(L[:m+1], 0.9)[:-1] + rdp(L[m:] + [L[0]], 0.9)[:-1]
    if len(Ls) < 3: continue
    f = lambda v: ('%.2f' % ((v-1)/S)).rstrip('0').rstrip('.')
    parts.append('M' + ' L'.join(f(x)+' '+f(y) for x, y in Ls) + 'Z')
d = ''.join(parts)
open(out, 'w').write(d)
print(len(loops), 'loops', len(d), 'chars', W, H)
