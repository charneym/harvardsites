#!/usr/bin/env python3
"""CgA Therapeuticals hero (HOME_BRIEF update 2c: a crafted render of the real product). Human catestatin, hCgA352-372
(SSMKLSFRARAYGFRGPGPQL), the 21-amino-acid peptide the company develops, drawn atom by atom from its published NMR
structure (RCSB PDB 1LV4, "Human catestatin 21-mer", model 1, hydrogens included). Space-filling (van der Waals) spheres,
ray traced in numpy with analytic sphere ambient occlusion, soft shadows from a key light, a cool fill and a rim.
Carbon in the logo's slate teal #3e6668, oxygen in its orange #bc4a04, nitrogen a pale teal, sulfur amber, hydrogens a
pale bone. Saved with ALPHA (no ground of its own, DJ). Usage: python3 render.py W H out.png [SS]"""
import sys, numpy as np
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 600
H = int(sys.argv[2]) if len(sys.argv) > 2 else 600
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 1
MODEL = int(sys.argv[5]) if len(sys.argv) > 5 else 0
YAW = float(sys.argv[6]) if len(sys.argv) > 6 else 30
PITCH = float(sys.argv[7]) if len(sys.argv) > 7 else -15

def nrm(v): return v / np.linalg.norm(v, axis=-1, keepdims=True)
# ---------- atoms ----------
mods, cur = [], []
for l in open(__file__.rsplit('/', 1)[0] + '/1lv4.pdb' if '/' in __file__ else '1lv4.pdb'):
    if l.startswith('MODEL'): cur = []
    if l.startswith('ATOM'): cur.append((l[76:78].strip(), float(l[30:38]), float(l[38:46]), float(l[46:54]), l[12:16].strip()))
    if l.startswith('ENDMDL'): mods.append(cur)
A = mods[MODEL]
EL = [a[0] for a in A]; P = np.array([a[1:4] for a in A]); P -= P.mean(0)
VDW = {'C': 1.7, 'N': 1.55, 'O': 1.52, 'S': 1.8, 'H': 1.1}
R = np.array([VDW[e] for e in EL])
def hx(s): return np.array([int(s[i:i+2], 16) for i in (1, 3, 5)]) / 255.0
COL = {'C': hx('#4d7b7d'), 'N': hx('#9cc3c2'), 'O': hx('#c4540f'), 'S': hx('#e2a03a'), 'H': hx('#c9cfc9')}
C = np.array([COL[e] for e in EL]) ** 2.2          # linear
# principal axes -> orient the long axis diagonally, then the chosen yaw/pitch
c = P - P.mean(0); ev, V = np.linalg.eigh(c.T @ c); V = V[:, ::-1]
if np.linalg.det(V) < 0: V[:, 2] *= -1
P = c @ V
def rot(ax, d):
    t = np.radians(d); cs, sn = np.cos(t), np.sin(t)
    if ax == 'y': return np.array([[cs, 0, sn], [0, 1, 0], [-sn, 0, cs]])
    if ax == 'x': return np.array([[1, 0, 0], [0, cs, -sn], [0, sn, cs]])
    return np.array([[cs, -sn, 0], [sn, cs, 0], [0, 0, 1]])
P = P @ rot('z', 28).T @ rot('y', YAW).T @ rot('x', PITCH).T
# ---------- camera (perspective, looking down -z) ----------
ext = np.abs(P[:, :2]).max() + 2.2
FOV = 22.0; dist = ext / np.tan(np.radians(FOV / 2)) * 1.08
cam = np.array([0, 0, dist])
Wp, Hp = W * SS, H * SS
asp = Wp / Hp
ys, xs = np.mgrid[0:Hp, 0:Wp]
u = ((xs + .5) / Wp * 2 - 1) * np.tan(np.radians(FOV / 2)) * max(asp, 1)
v = -((ys + .5) / Hp * 2 - 1) * np.tan(np.radians(FOV / 2)) * max(1 / asp, 1)
D = nrm(np.stack([u, v, -np.ones_like(u)], -1)).reshape(-1, 3)
N_ = len(D)
tbest = np.full(N_, np.inf); idx = np.full(N_, -1)
O = cam
for i in range(len(P)):
    oc = O - P[i]; b = D @ oc; cc = oc @ oc - R[i] ** 2
    disc = b * b - cc; m = disc > 0
    t = -b - np.sqrt(np.where(m, disc, 0))
    m &= (t > 0) & (t < tbest)
    tbest[m] = t[m]; idx[m] = i
hit = idx >= 0
hp = O + D[hit] * tbest[hit, None]; hi = idx[hit]
Nn = nrm(hp - P[hi])
# ---------- ambient occlusion: analytic sphere occlusion from every other atom ----------
ao = np.zeros(len(hp))
for i in range(len(P)):
    d = P[i] - hp; L = np.linalg.norm(d, axis=1); m = (hi != i) & (L < 9)
    if not m.any(): continue
    cosT = np.clip((d[m] * Nn[m]).sum(1) / L[m], 0, 1)
    ao[m] += cosT * (R[i] ** 2) / (L[m] ** 2) * .8
ao = np.clip(1 - ao, 0, 1) ** 1.9
# ---------- soft shadows from the key light (several jittered samples) ----------
KEY = nrm(np.array([-.55, .75, .55])); FILL = nrm(np.array([.7, -.15, .5])); RIMD = nrm(np.array([.25, .35, -.9]))
rng = np.random.default_rng(3)
sh = np.zeros(len(hp)); NS = 6
for s in range(NS):
    Ld = nrm(KEY + rng.normal(0, .06, 3)); o2 = hp + Nn * 1e-3; blocked = np.zeros(len(hp), bool)
    for i in range(len(P)):
        oc = o2 - P[i]; b = oc @ Ld; cc = (oc * oc).sum(1) - R[i] ** 2
        disc = b * b - cc; t = -b - np.sqrt(np.clip(disc, 0, None))
        blocked |= (disc > 0) & (t > 1e-3) & (hi != i)
    sh += ~blocked
sh /= NS
# ---------- shading ----------
Vd = -D[hit]; base = C[hi]
dk = np.clip(Nn @ KEY, 0, 1) * (.25 + .75 * sh)
df = np.clip(Nn @ FILL, 0, 1)
Hh = nrm(KEY + Vd); spec = np.clip((Nn * Hh).sum(1), 0, 1) ** 26 * sh
fres = (1 - np.clip((Nn * Vd).sum(1), 0, 1)) ** 3
rimc = np.clip(Nn @ RIMD * -1 + .3, 0, 1) * fres
amb = .22 * ao
col = base * (amb[:, None] + 1.05 * dk[:, None] * (.55 + .45 * ao[:, None]) + .22 * df[:, None] * ao[:, None] * np.array([.75, .95, 1.0]))
col += spec[:, None] * np.array([1.0, .93, .86]) * .2
col += rimc[:, None] * np.array([.55, .80, .82]) * .35
# depth cue: the far side sinks gently toward the ink
z = hp[:, 2]; zn = (z - z.min()) / (np.ptp(z) + 1e-6)
col *= (.62 + .38 * zn)[:, None]
img = np.zeros((N_, 4)); img[hit, :3] = np.clip(col, 0, 1) ** (1 / 2.2); img[hit, 3] = 1
img = img.reshape(Hp, Wp, 4)
im = Image.fromarray((img * 255 + .5).astype(np.uint8), 'RGBA')
if SS > 1: im = im.resize((W, H), Image.LANCZOS)
im.save(OUT); print('saved', OUT, im.size)
