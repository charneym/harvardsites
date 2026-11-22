#!/usr/bin/env python3
"""Cytogel hero: endomorphin-1 (Tyr-Pro-Trp-Phe-NH2, PubChem CID 5311080, 3D conformer), the natural peptide CYT-1010
is an analog of, ray-traced as a ball-and-stick model: glossy lacquered atoms and sticks, a studio key light with soft
shadows, ambient occlusion, a Fresnel rim in the brand teal and a shallow depth of field. Real alpha output.
usage: render.py em1.sdf out.png W H [rotx roty rotz focus maxblur]"""
import sys, numpy as np
from PIL import Image, ImageFilter
sdf, out = sys.argv[1], sys.argv[2]
W, H = int(sys.argv[3]), int(sys.argv[4]); SS = 1.5
a = [float(x) for x in sys.argv[5:]] + [None]*5
RX, RY, RZ = a[0] if a[0] is not None else 0, a[1] if a[1] is not None else 0, a[2] if a[2] is not None else 0
FOC = a[3] if a[3] is not None else .55; MAXB = a[4] if a[4] is not None else 6.
L = open(sdf).read().split('\n')
na, nb = int(L[3][:3]), int(L[3][3:6])
P = np.array([[float(L[4+i][0:10]), float(L[4+i][10:20]), float(L[4+i][20:30])] for i in range(na)])
E = [L[4+i][31:34].strip() for i in range(na)]
B = [(int(L[4+na+j][0:3])-1, int(L[4+na+j][3:6])-1, int(L[4+na+j][6:9])) for j in range(nb)]
P -= P.mean(0)
u, s, vt = np.linalg.svd(P, full_matrices=False); P = P @ vt.T
def R(ax, deg):
    t = np.radians(deg); c, s_ = np.cos(t), np.sin(t)
    if ax == 'x': return np.array([[1,0,0],[0,c,-s_],[0,s_,c]])
    if ax == 'y': return np.array([[c,0,s_],[0,1,0],[-s_,0,c]])
    return np.array([[c,-s_,0],[s_,c,0],[0,0,1]])
P = P @ R('x', RX).T @ R('y', RY).T @ R('z', RZ).T
RAD = {'C': .40, 'N': .40, 'O': .40, 'H': .24}
COL = {'C': (0x4a,0x5b,0x70), 'N': (0x5f,0x9a,0xa0), 'O': (0xd6,0xe6,0xe5), 'H': (0xb4,0xbf,0xca)}
BR = .14
r = np.array([RAD[e] for e in E]); col = (np.array([COL[e] for e in E], float)/255.)**2.2
w, h = int(W*SS), int(H*SS)
mn = (P[:, :2]-r[:, None]).min(0); mx = (P[:, :2]+r[:, None]).max(0)
sc = min(w*.9/(mx[0]-mn[0]), h*.9/(mx[1]-mn[1])); cen = (mn+mx)/2
X = (P[:, 0]-cen[0])*sc+w/2; Y = -(P[:, 1]-cen[1])*sc+h/2; Z = P[:, 2]*sc; RR = r*sc; br = BR*sc
C3 = np.stack([X, Y, Z], 1)
zb = np.full((h, w), -1e9, np.float32); nrm = np.zeros((h, w, 3), np.float32); cb = np.zeros((h, w, 3), np.float32)
pos = np.zeros((h, w, 3), np.float32); hit = np.zeros((h, w), bool)
def put(y0, y1, x0, x1, m, z, n, c, px, py):
    sub = zb[y0:y1, x0:x1]; up = m & (z > sub)
    sub[up] = z[up]; nrm[y0:y1, x0:x1][up] = n[up]; cb[y0:y1, x0:x1][up] = c
    pp = pos[y0:y1, x0:x1]; pp[up, 0] = px[up]; pp[up, 1] = py[up]; pp[up, 2] = z[up]; hit[y0:y1, x0:x1][up] = True
# atoms
for i in range(na):
    x0, x1 = int(max(0, X[i]-RR[i]-1)), int(min(w, X[i]+RR[i]+2)); y0, y1 = int(max(0, Y[i]-RR[i]-1)), int(min(h, Y[i]+RR[i]+2))
    yy, xx = np.mgrid[y0:y1, x0:x1].astype(np.float32); px, py = xx+.5, yy+.5
    d2 = (px-X[i])**2+(py-Y[i])**2; m = d2 < RR[i]**2
    dz = np.sqrt(np.maximum(RR[i]**2-d2, 0)); z = Z[i]+dz
    n = np.stack([(px-X[i])/RR[i], (py-Y[i])/RR[i], dz/RR[i]], -1)
    put(y0, y1, x0, x1, m, z, n, col[i], px, py)
# sticks: orthographic ray (x,y,t) toward -z against a finite cylinder; each bond in two halves, one per atom colour
def cyl(A, Bp, c):
    d = Bp-A; Ln = np.linalg.norm(d); d = d/Ln
    x0, x1 = int(max(0, min(A[0], Bp[0])-br-2)), int(min(w, max(A[0], Bp[0])+br+3)); y0, y1 = int(max(0, min(A[1], Bp[1])-br-2)), int(min(h, max(A[1], Bp[1])+br+3))
    if x1 <= x0 or y1 <= y0: return
    yy, xx = np.mgrid[y0:y1, x0:x1].astype(np.float32); px, py = xx+.5, yy+.5
    # q(t) = (px,py,t) - A ; |q - (q.d)d|^2 = br^2, solve for t
    qx, qy = px-A[0], py-A[1]; qz0 = -A[2]
    # q = (qx,qy,qz0+t); q.d = qx dx + qy dy + (qz0+t) dz
    k0 = qx*d[0]+qy*d[1]+qz0*d[2]
    # perp = q - (q.d) d ; components linear in t: v0 + t*v1
    v0x, v0y, v0z = qx-k0*d[0], qy-k0*d[1], qz0-k0*d[2]
    v1x, v1y, v1z = -d[2]*d[0], -d[2]*d[1], 1-d[2]*d[2]
    aa = v1x*v1x+v1y*v1y+v1z*v1z; bb = 2*(v0x*v1x+v0y*v1y+v0z*v1z); cc = v0x*v0x+v0y*v0y+v0z*v0z-br*br
    disc = bb*bb-4*aa*cc; m = disc > 0
    t = (-bb+np.sqrt(np.maximum(disc, 0)))/(2*aa+1e-9)
    s_ = k0+t*d[2]; m &= (s_ >= 0) & (s_ <= Ln)
    nx, ny, nz = v0x+t*v1x, v0y+t*v1y, v0z+t*v1z; nl = np.sqrt(nx*nx+ny*ny+nz*nz)+1e-9
    n = np.stack([nx/nl, ny/nl, nz/nl], -1)
    put(y0, y1, x0, x1, m, t.astype(np.float32), n, c, px, py)
SPH = []  # shadow proxies along sticks
for a_, b_, o in B:
    A, Bp = C3[a_], C3[b_]; M = (A+Bp)/2
    cyl(A, M, col[a_]); cyl(M, Bp, col[b_])
    Ln = np.linalg.norm(Bp-A); k = max(2, int(Ln/(br*1.2)))
    for f in np.linspace(0, 1, k): SPH.append((A+(Bp-A)*f, br))
ys, xs = np.nonzero(hit)
N = nrm[ys, xs]; N /= np.linalg.norm(N, axis=1, keepdims=True)
Pt = pos[ys, xs]; base = cb[ys, xs]
# lighting in screen space: x right, y down, z toward viewer
Lk = np.array([-.5, -.62, .6]); Lk /= np.linalg.norm(Lk)
occ = [(C3[i], RR[i]) for i in range(na)] + SPH
sh = np.ones(len(ys), np.float32); O = Pt+N*2.0
for c_, rr in occ:
    oc = O-c_; b = oc@Lk; cc = (oc*oc).sum(1)-rr*rr
    dmin = np.sqrt(np.maximum((oc*oc).sum(1)-b*b, 0))
    soft = np.clip((dmin-rr*.8)/(rr*.6+3), 0, 1)
    sh = np.where(b < 0, np.minimum(sh, soft), sh)
ao = np.zeros(len(ys), np.float32)
for c_, rr in occ:
    d = c_-Pt; dl = np.linalg.norm(d, axis=1)+1e-6
    f = np.clip((N*d).sum(1)/dl, 0, 1)*np.clip(1-(dl-rr)/(rr*3.5+8), 0, 1)
    ao += f*.22
ao = np.clip(1-ao, .22, 1)**1.2
V = np.array([0, 0, 1.])
ndl = N@Lk; diff = np.clip((ndl+.15)/1.15, 0, 1)
Hh = Lk+V; Hh /= np.linalg.norm(Hh); spec = np.clip(N@Hh, 0, 1)**70*.9 + np.clip(N@Hh, 0, 1)**12*.08
F2 = np.array([.75, .35, .45]); F2 /= np.linalg.norm(F2); fill = np.clip(N@F2, 0, 1)
fres = .04+.96*(1-np.clip(N[:, 2], 0, 1))**5
# environment reflection: a dark navy studio with a soft overhead box and a teal bounce from below-right
Rv = 2*N[:, 2:3]*N-V
sb = np.clip((-Rv[:, 1]-.2)/.6, 0, 1); sb = sb*sb*(3-2*sb)
env = np.array([.9, .95, 1.])*sb[:, None]*np.clip(1-np.abs(Rv[:, 0]+.35)*1.1, 0, 1)[:, None] \
    + np.array([.16, .32, .36])*np.clip(Rv[:, 1]*1.2, 0, 1)[:, None]*np.clip(Rv[:, 0]+.3, 0, 1)[:, None]
lit = base*(.05+1.0*diff[:, None]*sh[:, None])*ao[:, None] + base*fill[:, None]*.16*ao[:, None]
lit += spec[:, None]*sh[:, None]*np.array([1, .98, .95])
lit += env*fres[:, None]*.55*ao[:, None]**.5 + env*.05
lit += np.array([.22, .45, .48])*((1-np.clip(N[:, 2], 0, 1))**3)[:, None]*.32*ao[:, None]
zz = Pt[:, 2]; zn = (zz-zz.min())/(zz.max()-zz.min()+1e-6)
lit *= (.5+.5*zn)[:, None]
img = np.zeros((h, w, 4), np.float32); img[ys, xs, :3] = np.clip(lit, 0, 1)**(1/2.2); img[ys, xs, 3] = 1
# 1px coverage antialias on edges comes from the SS downsample; depth of field by z-bins, far -> near
zmap = np.full((h, w), -1., np.float32); zmap[ys, xs] = zn
def blur(a, rad):
    o = np.zeros_like(a)
    for k in range(4):
        ch = Image.fromarray(np.clip(a[..., k]*255+.5, 0, 255).astype(np.uint8), 'L')
        o[..., k] = np.array(ch.filter(ImageFilter.GaussianBlur(float(rad))), np.float32)/255
    return o
pm = img.copy(); pm[..., :3] *= pm[..., 3:]
nbn = 12; edges = np.linspace(0, 1.0001, nbn+1); acc = np.zeros_like(pm)
for bi in range(nbn):
    m = (zmap >= edges[bi]) & (zmap < edges[bi+1])
    if not m.any(): continue
    lay = pm*m[..., None]; zc = (edges[bi]+edges[bi+1])/2
    rad = MAXB*SS*min(1, abs(zc-FOC)/.5)**1.4
    if rad > .6: lay = blur(lay, rad)
    acc = lay+acc*(1-lay[..., 3:])
al = acc[..., 3:]; rgb = np.where(al > 1e-4, acc[..., :3]/np.maximum(al, 1e-4), 0)
res = np.concatenate([rgb, al], 2)
im = Image.fromarray((np.clip(res, 0, 1)*255).astype(np.uint8), 'RGBA').resize((W, H), Image.LANCZOS)
im.save(out); print('ok', na, nb, im.size)
