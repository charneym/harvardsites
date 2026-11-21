#!/usr/bin/env python3
"""Hero render for Allander Biotechnologies: the MH2 domain of human Smad7 (residues 256-426, the confidently folded
C-terminal domain carried by Allander's Tat-PYC-Smad7 biologic), from the AlphaFold model AF-O15105-F1 (v6, EMBL-EBI).
Drawn as a smooth molecular surface (atoms + probe radius, depth-smoothed normals), lit like a porcelain studio model:
key + fill + rim + specular, screen-space ambient occlusion, colour by local fold (helix / strand / loop, from C-alpha
geometry) in tints of the logo blue #004aab. Transparent ground. Output: smad7.png (RGBA) -> hero.webp."""
import numpy as np, pathlib
from PIL import Image
H = pathlib.Path(__file__).resolve().parent
RAD = {'C':1.7,'N':1.55,'O':1.52,'S':1.8}
PROBE = .55
A, EL, RES, NAME = [], [], [], []
for l in open(H/'AF-O15105-F1.pdb'):
    if not l.startswith('ATOM'): continue
    r = int(l[22:26])
    if r < 256: continue
    e = l[76:78].strip()
    if e not in RAD: continue
    A.append([float(l[30:38]), float(l[38:46]), float(l[46:54])]); EL.append(e); RES.append(r); NAME.append(l[12:16].strip())
X = np.array(A); RES = np.array(RES); X -= X.mean(0)
# local fold from C-alpha geometry
ca = {r: X[i] for i, (r, n) in enumerate(zip(RES, NAME)) if n == 'CA'}
ss = {}
for r in ca:
    d3 = np.linalg.norm(ca[r]-ca[r+3]) if r+3 in ca else 99
    d3b = np.linalg.norm(ca[r-3]-ca[r]) if r-3 in ca else 99
    d2 = np.linalg.norm(ca[r]-ca[r+2]) if r+2 in ca else 0
    d2b = np.linalg.norm(ca[r-2]-ca[r]) if r-2 in ca else 0
    ss[r] = 'H' if min(d3, d3b) < 5.6 else ('E' if min(d2, d2b) > 6.3 and max(d2, d2b) > 6.4 else 'L')
# orientation: principal axes, then a composed three-quarter turn
w, v = np.linalg.eigh(np.cov(X.T)); P = X @ v[:, ::-1]
def rot(a, ax):
    c, s = np.cos(a), np.sin(a)
    return {'x': np.array([[1,0,0],[0,c,-s],[0,s,c]]), 'y': np.array([[c,0,s],[0,1,0],[-s,0,c]]), 'z': np.array([[c,-s,0],[s,c,0],[0,0,1]])}[ax]
import sys
ang = [float(a) for a in sys.argv[1:4]] if len(sys.argv) > 3 else [-.55, .5, .35]
P = P @ rot(ang[0], 'x').T @ rot(ang[1], 'y').T @ rot(ang[2], 'z').T
P[:, 1] *= -1
S = 1800; pad = 110
rad = np.array([RAD[e] for e in EL]) + PROBE
lo = (P[:, :2]-rad[:, None]).min(0); hi = (P[:, :2]+rad[:, None]).max(0)
sc = (S-2*pad)/max(hi-lo); W = int((hi[0]-lo[0])*sc+2*pad); Hh = int((hi[1]-lo[1])*sc+2*pad)
Z = np.full((Hh, W), -1e9); ID = np.full((Hh, W), -1); NM = np.zeros((Hh, W, 3)); NM[:, :, 2] = 1
order = np.argsort(P[:, 2])
for i in order:
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
    r = max(1, int(s))
    k = np.ones(2*r+1)/(2*r+1)
    for _ in range(3):
        a = np.apply_along_axis(lambda m: np.convolve(np.pad(m, r, mode='edge'), k, 'valid'), 0, a)
        a = np.apply_along_axis(lambda m: np.convolve(np.pad(m, r, mode='edge'), k, 'valid'), 1, a)
    return a
zmin = Z[mask].min(); Zf = np.where(mask, Z, zmin-40*sc/10)
# smoothed depth for a molecular-surface feel (SES-like): normals from gently blurred depth
Zs = Zf
mf = mask.astype(float); den = blur(mf, sc*.16)+1e-6
N = np.dstack([blur(NM[:, :, k]*mf, sc*.16)/den for k in range(3)])
N[:, :, 2] = np.maximum(N[:, :, 2], .02); N /= np.linalg.norm(N, axis=2, keepdims=True)
def L(v): v = np.array(v, float); return v/np.linalg.norm(v)
key = L([-.55, -.6, .75]); fill = L([.7, .2, .55]); rim = L([.6, .55, -.2])
nd = lambda l: np.clip((N*l).sum(2), 0, 1)
diff = .78*nd(key)+.22*nd(fill)
hv = L(key+np.array([0, 0, 1])); spec = np.clip((N*hv).sum(2), 0, 1)**60*.32
rimt = (1-np.clip(N[:, :, 2], 0, 1))**2.2
# ambient occlusion: how far a pixel sits below its neighbourhood
ao = np.ones_like(Zs)
for s, wgt in ((sc*1.2, .5), (sc*3.5, .35), (sc*8, .15)):
    ao -= wgt*np.clip((blur(Zf, s)-Zf)/(sc*3.2), 0, 1)
ao = .22+.78*np.clip(ao, 0, 1)**1.2
# colour by local fold: porcelain loops, logo-blue helices, sky-blue strands
C = {'L': np.array([.84, .86, .9]), 'H': np.array([.05, .33, .72]), 'E': np.array([.47, .64, .86])}
col = np.zeros((Hh, W, 3))
for k, c in C.items():
    sel = np.isin(ID, [i for i in range(len(RES)) if ss.get(RES[i], 'L') == k])
    col[sel] = c
# backbone a touch darker than side chains for texture
bbsel = np.isin(ID, [i for i, n in enumerate(NAME) if n in ('N', 'CA', 'C', 'O')])
col[bbsel] *= .9
lit = col*(.16+.92*diff[:, :, None])*ao[:, :, None]+spec[:, :, None]*np.array([1, 1, 1])+rimt[:, :, None]*np.array([.35, .5, .8])*.35
lit = np.clip(lit, 0, 1)**(1/1.08)
# soft alpha edge (supersampled look)
alpha = blur(mask.astype(float), 1.2); alpha = np.clip((alpha-.08)/.84, 0, 1)
rgba = np.dstack([lit, alpha])
im = Image.fromarray((rgba*255+.5).astype(np.uint8), 'RGBA')
im.save(H/'smad7.png'); print(im.size, {k: sum(1 for r in ss if ss[r] == k) for k in 'HEL'})
