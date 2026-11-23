#!/usr/bin/env python3
"""Offline render of naltrexone (PubChem CID 5360515, 3D conformer) as a glossy ball-and-stick model with real alpha.
usage: mol.py SDF OUT SIZE ROTX ROTY ROTZ"""
import sys, numpy as np
from PIL import Image
sdf, out, S = sys.argv[1], sys.argv[2], int(sys.argv[3])
rx, ry, rz = [float(v) for v in sys.argv[4:7]]
L = open(sdf).read().splitlines()
na, nb = int(L[3][:3]), int(L[3][3:6])
P, E = [], []
for l in L[4:4+na]:
    f = l.split(); P.append([float(f[0]), float(f[1]), float(f[2])]); E.append(f[3])
B = []
for l in L[4+na:4+na+nb]:
    B.append((int(l[:3])-1, int(l[3:6])-1, int(l[6:9])))
keep = [i for i, e in enumerate(E) if e != 'H' or '--h' in sys.argv]
idx = {o: n for n, o in enumerate(keep)}
B = [(idx[a], idx[b], o) for a, b, o in B if a in idx and b in idx]
P = [P[i] for i in keep]; E = [E[i] for i in keep]
P = np.array(P); P -= P.mean(0)
# principal axes: longest along x
w, v = np.linalg.eigh(np.cov(P.T)); P = P @ v[:, ::-1]
def R(a, ax):
    c, s = np.cos(a), np.sin(a)
    if ax == 0: return np.array([[1,0,0],[0,c,-s],[0,s,c]])
    if ax == 1: return np.array([[c,0,s],[0,1,0],[-s,0,c]])
    return np.array([[c,-s,0],[s,c,0],[0,0,1]])
P = P @ R(np.radians(rx),0).T @ R(np.radians(ry),1).T @ R(np.radians(rz),2).T
RAD = {'C':.56,'O':.56,'N':.56,'H':.34}
COL = {'C':(0.84,0.88,0.92),'O':(0.62,0.86,0.79),'N':(0.42,0.62,0.86),'H':(0.94,0.96,0.97)}
SS = 2; N = S*SS
ext = np.abs(P[:, :2]).max() + .5
sc = N/2/ext*.98
X, Y = np.meshgrid((np.arange(N)+.5-N/2)/sc, -(np.arange(N)+.5-N/2)/sc)
Z = np.full((N,N), -1e9); NX = np.zeros((N,N,3)); C = np.zeros((N,N,3)); DEP = np.zeros((N,N))
def put(mask, z, n, col):
    m = mask & (z > Z)
    Z[m] = z[m]; NX[m] = n[m]; C[m] = col if np.ndim(col) == 1 else col[m]
for i, (p, e) in enumerate(zip(P, E)):
    r = RAD[e]
    dx, dy = X-p[0], Y-p[1]; d2 = dx*dx+dy*dy
    m = d2 < r*r
    dz = np.sqrt(np.clip(r*r-d2, 0, None))
    n = np.stack([dx/r, dy/r, dz/r], -1)
    put(m, p[2]+dz, n, np.array(COL[e]))
rc = .17
for a, b, o in B:
    A, Bp = P[a], P[b]; ax = Bp-A; Ln = np.linalg.norm(ax); u = ax/Ln
    offs = [0.0] if o == 1 else ([-.07, .07] if o == 2 else [-.1, 0, .1])
    perp = np.cross(u, [0,0,1.]); perp = perp/ (np.linalg.norm(perp)+1e-9)
    for of in offs:
        A2 = A+perp*of; rr = rc if o == 1 else rc*.72
        Ox, Oy, Oz = X-A2[0], Y-A2[1], 50-A2[2]   # ray from z=50 going -z
        Dz = -1.0
        wu = Ox*u[0]+Oy*u[1]+Oz*u[2]; du = Dz*u[2]
        qa = 1-du*du
        qb = 2*(Oz*Dz - wu*du)
        qc = Ox*Ox+Oy*Oy+Oz*Oz - wu*wu - rr*rr
        disc = qb*qb-4*qa*qc
        m = disc > 0
        t = (-qb-np.sqrt(np.clip(disc,0,None)))/(2*qa+1e-12)
        px, py, pz = Ox, Oy, Oz+t*Dz
        s = px*u[0]+py*u[1]+pz*u[2]
        m &= (s > 0) & (s < Ln)
        nn = np.stack([px-s*u[0], py-s*u[1], pz-s*u[2]], -1)/rr
        col = np.where((s < Ln/2)[..., None], np.array(COL[E[a]]), np.array(COL[E[b]]))*.92
        put(m, 50-t, nn, col)
hit = Z > -1e8
# shading
Lk = np.array([-.5, .62, .6]); Lk /= np.linalg.norm(Lk)
Lf = np.array([.7, -.3, .4]); Lf /= np.linalg.norm(Lf)
ndl = np.clip((NX*Lk).sum(-1), 0, 1); ndf = np.clip((NX*Lf).sum(-1), 0, 1)
H = Lk+np.array([0,0,1.]); H /= np.linalg.norm(H)
spec = np.clip((NX*H).sum(-1), 0, 1)**48
rim = (1-np.clip(NX[...,2],0,1))**3
zmin, zmax = P[:,2].min()-.4, P[:,2].max()+.4
depth = np.clip((Z-zmin)/(zmax-zmin), 0, 1)
# occlusion: darken where something nearby is in front (simple screen-space AO from Z buffer)
def box(a, r, ax):
    r = max(1, int(r)); c = np.cumsum(np.pad(a, [(r+1, r) if i == ax else (0, 0) for i in range(2)], mode='edge'), axis=ax)
    return (np.take(c, range(2*r+1, c.shape[ax]), axis=ax) - np.take(c, range(0, c.shape[ax]-2*r-1), axis=ax))/(2*r+1)
def gaussian_filter(a, s):
    r = s*1.2
    for _ in range(3): a = box(box(a, r, 0), r, 1)
    return a
Zh = np.where(hit, Z, zmin-1)
blur = gaussian_filter(Zh, sc*.25)
ao = np.clip(1-np.clip(blur-Zh, 0, None)*.6, .6, 1)
lum = (.3 + .7*ndl + .18*ndf)*ao*(.72+.28*depth)
rgb = C*lum[...,None] + spec[...,None]*.55*(.5+.5*depth[...,None]) + rim[...,None]*np.array([.35,.55,.7])*.25
rgb = np.clip(rgb, 0, 1)
img = np.dstack([rgb, hit.astype(float)])
# premultiply to downsample
pm = img.copy(); pm[...,:3] *= pm[...,3:4]
pm = pm.reshape(S, SS, S, SS, 4).mean((1,3))
a = pm[...,3:4]; out_rgb = np.where(a > 0, pm[...,:3]/np.clip(a,1e-6,None), 0)
o = np.dstack([out_rgb, a])
o = (o*255).round().astype('uint8')
im = Image.fromarray(o, 'RGBA'); bb = im.getbbox(); im = im.crop((bb[0]-4, bb[1]-4, bb[2]+4, bb[3]+4))
im.save(out); print(out, im.size)
