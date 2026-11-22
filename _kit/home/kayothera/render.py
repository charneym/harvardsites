#!/usr/bin/env python3
"""Hero render for Kayothera: human aldehyde dehydrogenase 1A3 (ALDH1A3), the retinoic-acid-synthesising enzyme that
Kayothera's inhibitors block (iScience 2025, "Development of retinoid nuclear receptor pathway antagonists through
targeting ALDH1A3"). Crystal structure RCSB PDB 5FHZ (ALDH1A3 with NAD+ and all-trans retinoic acid), the A-D tetramer.
Smooth molecular surface lit like a porcelain studio model (key, fill, rim, specular, screen-space AO). The four
subunits in cool porcelain tints of the logo grey; the residues lining each retinoic-acid site in the logo green
#009444, the NAD+ cofactor in pale green. Transparent ground. Output: aldh.png (RGBA) -> hero.webp.
Usage: render.py [ax ay az] [S]"""
import numpy as np, pathlib, sys
from PIL import Image
H = pathlib.Path(__file__).resolve().parent
RAD = {'C':1.7,'N':1.55,'O':1.52,'S':1.8,'P':1.8}
PROBE = .95
A, EL, CH, RES, NAME, KIND = [], [], [], [], [], []
REA = []
for l in open(H/'5fhz.pdb'):
    rec = l[:6]
    if rec not in ('ATOM  ', 'HETATM'): continue
    ch = l[21]
    if ch not in 'ABCD': continue
    rn = l[17:20]; e = l[76:78].strip()
    xyz = [float(l[30:38]), float(l[38:46]), float(l[46:54])]
    if rn == 'REA': REA.append(xyz); 
    if rn == 'HOH' or e not in RAD: continue
    A.append(xyz); EL.append(e); CH.append(ch); RES.append(int(l[22:26])); NAME.append(l[12:16].strip())
    KIND.append('P' if rec == 'ATOM  ' else ('N' if rn == 'NAD' else ('R' if rn == 'REA' else 'X')))
X = np.array(A); REA = np.array(REA); CH = np.array(CH); RES = np.array(RES); KIND = np.array(KIND)
cen = X.mean(0); X -= cen; REA -= cen
# residues lining the retinoic-acid sites: any atom within 4.6 A of a bound retinoic acid atom
near = np.zeros(len(X), bool)
for i in range(0, len(X), 2000):
    d = np.linalg.norm(X[i:i+2000, None, :]-REA[None], axis=2).min(1); near[i:i+2000] = d < 4.6
key_res = set(zip(CH[near & (KIND == 'P')], RES[near & (KIND == 'P')]))
site = np.array([(c, r) in key_res for c, r in zip(CH, RES)]) | (KIND == 'R')
w, v = np.linalg.eigh(np.cov(X.T)); P = X @ v[:, ::-1]
def rot(a, ax):
    c, s = np.cos(a), np.sin(a)
    return {'x': np.array([[1,0,0],[0,c,-s],[0,s,c]]), 'y': np.array([[c,0,s],[0,1,0],[-s,0,c]]), 'z': np.array([[c,-s,0],[s,c,0],[0,0,1]])}[ax]
ang = [float(a) for a in sys.argv[1:4]] if len(sys.argv) > 3 else [-.5, .45, .3]
S = int(sys.argv[4]) if len(sys.argv) > 4 else 1700
P = P @ rot(ang[0], 'x').T @ rot(ang[1], 'y').T @ rot(ang[2], 'z').T
P[:, 1] *= -1
pad = 90
rad = np.array([RAD[e] for e in EL]) + PROBE
lo = (P[:, :2]-rad[:, None]).min(0); hi = (P[:, :2]+rad[:, None]).max(0)
sc = (S-2*pad)/max(hi-lo); W = int((hi[0]-lo[0])*sc+2*pad); Hh = int((hi[1]-lo[1])*sc+2*pad)
Z = np.full((Hh, W), -1e9); ID = np.full((Hh, W), -1); NM = np.zeros((Hh, W, 3)); NM[:, :, 2] = 1
for i in np.argsort(P[:, 2]):
    cx, cy = (P[i, 0]-lo[0])*sc+pad, (P[i, 1]-lo[1])*sc+pad; R = rad[i]*sc
    x0, x1, y0, y1 = int(cx-R)-1, int(cx+R)+2, int(cy-R)-1, int(cy+R)+2
    yy, xx = np.mgrid[y0:y1, x0:x1]; d2 = (xx+.5-cx)**2+(yy+.5-cy)**2
    m = d2 < R*R; z = P[i, 2]*sc+np.sqrt(np.maximum(R*R-d2, 0))
    sub = Z[y0:y1, x0:x1]; upd = m & (z > sub)
    sub[upd] = z[upd]; ID[y0:y1, x0:x1][upd] = i
    nz = np.sqrt(np.maximum(R*R-d2, 0))/R
    nsub = NM[y0:y1, x0:x1]; nsub[upd, 0] = ((xx+.5-cx)/R)[upd]; nsub[upd, 1] = ((yy+.5-cy)/R)[upd]; nsub[upd, 2] = nz[upd]
mask = ID >= 0
def blur(a, s):
    r = max(1, int(s)); k = np.ones(2*r+1)/(2*r+1)
    for _ in range(3):
        a = np.apply_along_axis(lambda m: np.convolve(np.pad(m, r, mode='edge'), k, 'valid'), 0, a)
        a = np.apply_along_axis(lambda m: np.convolve(np.pad(m, r, mode='edge'), k, 'valid'), 1, a)
    return a
zmin = Z[mask].min(); Zf = np.where(mask, Z, zmin-4*sc)
mf = mask.astype(float); den = blur(mf, sc*.24)+1e-6
N = np.dstack([blur(NM[:, :, k]*mf, sc*.24)/den for k in range(3)])
N[:, :, 2] = np.maximum(N[:, :, 2], .02); N /= np.linalg.norm(N, axis=2, keepdims=True)
def L(v): v = np.array(v, float); return v/np.linalg.norm(v)
key = L([-.55, -.6, .75]); fill = L([.7, .2, .55]); rim = L([.6, .55, -.2])
nd = lambda l: np.clip((N*l).sum(2), 0, 1)
diff = .78*nd(key)+.22*nd(fill)
hv = L(key+np.array([0, 0, 1])); spec = np.clip((N*hv).sum(2), 0, 1)**60*.3
rimt = (1-np.clip(N[:, :, 2], 0, 1))**2.2
ao = np.ones_like(Zf)
for s, wgt in ((sc*1.2, .5), (sc*3.5, .35), (sc*8, .15)):
    ao -= wgt*np.clip((blur(Zf, s)-Zf)/(sc*3.2), 0, 1)
ao = .2+.8*np.clip(ao, 0, 1)**1.2
TINT = {'A': [.87, .89, .88], 'B': [.66, .71, .72], 'C': [.79, .83, .81], 'D': [.58, .64, .66]}
col = np.zeros((Hh, W, 3))
idx = ID[mask]
pc = np.array([TINT[c] for c in CH])
pc[KIND == 'N'] = [.62, .86, .70]
pc[site] = [.05, .70, .34]
bb = np.isin(np.array(NAME), ['N', 'CA', 'C', 'O']) & (KIND == 'P') & ~site
pc[bb] *= .92
col[mask] = pc[idx]
lit = col*(.15+.93*diff[:, :, None])*ao[:, :, None]+spec[:, :, None]+rimt[:, :, None]*np.array([.45, .75, .6])*.3
lit = np.clip(lit, 0, 1)**(1/1.08)
alpha = blur(mask.astype(float), 1.2); alpha = np.clip((alpha-.08)/.84, 0, 1)
im = Image.fromarray((np.dstack([lit, alpha])*255+.5).astype(np.uint8), 'RGBA')
im.save(H/'aldh.png'); print(im.size, 'site atoms', int(site.sum()), 'visible site px', int(np.isin(ID, np.where(site)[0]).sum()))
