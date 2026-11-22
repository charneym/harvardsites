#!/usr/bin/env python3
"""Make a plausible 3D conformer of idrevloride (P-1037) from PubChem's 2D record (CID 71502876): the 2D layout is
lifted with random depth and relaxed against bond lengths, bond angles (1-3 distances), ring/amide planarity and
non-bonded repulsion. Writes mol3d.json (atoms, xyz, bonds) for render.py."""
import numpy as np, json
L = open('idrevloride.sdf').read().split('\n')
na, nb = int(L[3][:3]), int(L[3][3:6])
el, P = [], []
for l in L[4:4+na]:
    P.append([float(l[:10]), float(l[10:20])]); el.append(l[31:34].strip())
B = []
for l in L[4+na:4+na+nb]:
    B.append((int(l[:3])-1, int(l[3:6])-1, int(l[6:9])))
P = np.array(P) * 1.45
rng = np.random.default_rng(7)
X = np.c_[P, rng.normal(0, 1.2, na)]
nbr = [[] for _ in range(na)]
for a, b, o in B: nbr[a].append(b); nbr[b].append(a)
def blen(a, b, o):
    s = {el[a], el[b]}
    if 'H' in s: return 1.0 if ('O' in s or 'N' in s) else 1.09
    if 'Cl' in s: return 1.74
    if o == 2: return 1.28 if ('O' in s or 'N' in s) else 1.34
    if o == 4: return 1.39
    return 1.43 if ('O' in s or 'N' in s) else 1.53
bl = {}
for a, b, o in B: bl[(a, b)] = bl[(b, a)] = blen(a, b, o)
# hybridisation: sp2 if any double bond or aromatic, else sp3
sp2 = set()
for a, b, o in B:
    if o >= 2: sp2 |= {a, b}
# aromatic benzene in the 2D record is Kekule; conjugated N attached to sp2 C are also planar-ish
for i in range(na):
    if el[i] == 'N' and any(j in sp2 for j in nbr[i]): sp2.add(i)
pairs13 = {}
for c in range(na):
    ang = np.deg2rad(120 if c in sp2 else 109.5)
    for i in range(len(nbr[c])):
        for j in range(i+1, len(nbr[c])):
            a, b = nbr[c][i], nbr[c][j]
            la, lb = bl[(a, c)], bl[(b, c)]
            pairs13[(a, b)] = np.sqrt(la*la + lb*lb - 2*la*lb*np.cos(ang))
# topological distance for repulsion
D = np.full((na, na), 99)
for s in range(na):
    D[s, s] = 0; q = [s]
    while q:
        u = q.pop(0)
        for v in nbr[u]:
            if D[s, v] > D[s, u] + 1: D[s, v] = D[s, u] + 1; q.append(v)
far = np.argwhere(np.triu(D >= 3))
isH = np.array([e == 'H' for e in el])
rmin = np.where(isH[far[:, 0]] & isH[far[:, 1]], 2.2, np.where(isH[far[:, 0]] | isH[far[:, 1]], 2.5, 3.2))
bi = np.array([(a, b) for a, b, o in B]); bL = np.array([bl[(a, b)] for a, b in bi])
ti = np.array(list(pairs13.keys())); tL = np.array(list(pairs13.values()))
# sp2 planarity: for each sp2 centre with 3 neighbours, keep the centre in the neighbours' plane
pl = [(c, *nbr[c]) for c in sp2 if len(nbr[c]) == 3]
def grad(X):
    G = np.zeros_like(X); E = 0
    for idx, L0, k in ((bi, bL, 40.0), (ti, tL, 12.0)):
        d = X[idx[:, 0]] - X[idx[:, 1]]; r = np.linalg.norm(d, axis=1) + 1e-9
        e = r - L0; E += k * (e**2).sum()
        g = (2*k*e/r)[:, None] * d
        np.add.at(G, idx[:, 0], g); np.add.at(G, idx[:, 1], -g)
    d = X[far[:, 0]] - X[far[:, 1]]; r = np.linalg.norm(d, axis=1) + 1e-9
    m = r < rmin; e = (r - rmin) * m; E += 6 * (e**2).sum()
    g = (12*e/r)[:, None] * d
    np.add.at(G, far[:, 0], g); np.add.at(G, far[:, 1], -g)
    for c, a, b, d3 in pl:
        n = np.cross(X[b]-X[a], X[d3]-X[a]); nn = np.linalg.norm(n) + 1e-9; n = n/nn
        h = np.dot(X[c]-X[a], n); E += 8*h*h
        G[c] += 16*h*n; G[a] -= 16*h*n/3; G[b] -= 16*h*n/3; G[d3] -= 16*h*n/3
    if FOLD:
        hv = ~isH; cen = X[hv].mean(0); d = X - cen
        E += FOLD * (d[hv]**2).sum(); G[hv] += 2 * FOLD * d[hv]
    return E, G
FOLD = 0
lr = 0.004
for it in range(30000):
    E, G = grad(X)
    X -= lr * np.clip(G, -50, 50)
    if it % 5000 == 0: print(it, round(E, 2))
    FOLD = 0.02 if 3000 < it < 22000 else 0
print('final', round(E, 2))
d = X[bi[:, 0]] - X[bi[:, 1]]; print('bond err max', np.abs(np.linalg.norm(d, axis=1) - bL).max())
d = X[far[:, 0]] - X[far[:, 1]]; print('min nonbonded', np.linalg.norm(d, axis=1).min())
X -= X.mean(0)
json.dump({'el': el, 'xyz': X.round(4).tolist(), 'bonds': [(a, b, o) for a, b, o in B]}, open('mol3d.json', 'w'))
