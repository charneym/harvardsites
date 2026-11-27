#!/usr/bin/env python3
"""Restore Robotics hero (PROD_BRIEF 3b, render B; no sharp photo of their own instrument exists on restorerobotics.com):
a crafted render of the product they remanufacture under FDA 510(k) K252926 (March 2026): a robotic Permanent Cautery
Hook instrument for the da Vinci Xi system: the instrument housing (back end), the long 8 mm shaft, the insulated distal
section and the L-shaped cautery hook. Unbranded, no lettering. Ray marched (signed distance fields) in numpy,
orthographic, lit as a studio product shot per TOPFIX variant B (one neutral key strip from the page's upper left,
a low fill, a dim rim on the far edge, no colour, no glow), soft cast shadow baked into PAD px of transparent margin.
The tip points up-left, toward the headline. Usage: python3 render_b.py W H out.png [SS] [PAD]"""
import sys, math, numpy as np
from PIL import Image, ImageFilter
W = int(sys.argv[1]); H = int(sys.argv[2]); OUT = sys.argv[3]
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 1
PAD = int(sys.argv[5]) if len(sys.argv) > 5 else 120
FW, FH = W, H; W, H = W*SS, H*SS
def nrm(v): return v/np.linalg.norm(v, axis=-1, keepdims=True)
def n3(v): v = np.array(v, float); return v/np.linalg.norm(v)
def sm(a, b, x): x = np.clip((x-a)/(b-a), 0, 1); return x*x*(3-2*x)
A = n3((-0.86, 0.42, -0.30))                   # shaft axis: from the housing (lower right) to the tip (upper left)
P = n3(np.array((0.0, 1.0, 0.35)) - np.dot((0.0, 1.0, 0.35), A)*A)
Q = np.cross(A, P)
E = np.zeros(3)
L_SH, R_SH = 1.55, 0.056
def local(p):
    d = p - E; s = d @ A; v = d - s[..., None]*A
    return s, np.linalg.norm(v, axis=-1), v
def capsule_seg(p, a, b, r):
    pa = p - a; ba = b - a; h = np.clip((pa @ ba)/(ba @ ba), 0, 1)
    return np.linalg.norm(pa - h[..., None]*ba, axis=-1) - r
def rbox(p, c, hx, hy, hz, r):
    d = p - c
    q = np.stack([np.abs(d @ A) - hx, np.abs(d @ P) - hy, np.abs(d @ Q) - hz], -1)
    return np.linalg.norm(np.maximum(q, 0), axis=-1) + np.minimum(q.max(-1), 0) - r
HC = E - A*0.46 + P*0.04
def sd_housing(p):
    b = rbox(p, HC, 0.38, 0.10, 0.13, 0.065)
    nose = capsule_seg(p, E - A*0.08, E + A*0.07, 0.085)       # the collar where the shaft leaves the housing
    disc = rbox(p, HC + P*0.165, 0.24, 0.01, 0.08, 0.018)        # the top release panel
    return np.minimum(np.minimum(b, nose), disc)
def sd_shaft(p):
    s, r, v = local(p)
    R = np.where(s < L_SH, R_SH, np.where(s < L_SH + 0.03, R_SH + 0.004, R_SH - 0.008 - 0.026*np.clip((s - L_SH - 0.03)/0.2, 0, 1)))
    d = r - R
    return np.maximum(d, np.maximum(-s, s - (L_SH + 0.23)))
TIP = E + A*(L_SH + 0.23)
H1 = TIP + A*0.13
H2 = H1 + P*0.10 + A*0.016
def sd_hook(p):
    return np.minimum(np.minimum(capsule_seg(p, TIP - A*0.02, H1, 0.013), capsule_seg(p, H1, H2, 0.013)), capsule_seg(p, H2, H2 - A*0.018, 0.013))
def parts(p): return sd_housing(p), sd_shaft(p), sd_hook(p)
def sdf(p):
    a, b, c = parts(p); return np.minimum(np.minimum(a, b), c)
ext = [HC + A*0.46 + P*0.2 + Q*0.2, HC - A*0.46 - P*0.2 - Q*0.2, HC - A*0.46 + P*0.25, HC + A*0.2 - P*0.2, H2 + P*0.03, TIP + A*0.13]
X = [q[0] for q in ext]; Y = [q[1] for q in ext]
cx, cy = (min(X)+max(X))/2, (min(Y)+max(Y))/2
span = max((max(X)-min(X))/W*H, max(Y)-min(Y))*1.10
half_h = span/2; half_w = half_h*W/H
ys, xs = np.mgrid[0:H, 0:W]
px = cx + ((xs + .5)/W*2 - 1)*half_w; py = cy - ((ys + .5)/H*2 - 1)*half_h
O = np.stack([px, py, np.full(px.shape, 4.0)], -1).reshape(-1, 3); D = np.array((0, 0, -1.0))
t = np.zeros(O.shape[0]); hit = np.zeros(O.shape[0], bool); act = np.ones(O.shape[0], bool)
for i in range(240):
    idx = np.nonzero(act)[0]
    if idx.size == 0: break
    p = O[idx] + D*t[idx, None]; d = sdf(p); t[idx] += d*0.9
    h = d < 0.0004; hit[idx[h]] = True; act[idx[h]] = False; act[idx[t[idx] > 9]] = False
print('hits', hit.sum())
KEY = n3((-0.62, 0.55, 0.56))
def env(d):
    x, y, z = d[..., 0], d[..., 1], d[..., 2]
    base = np.full(d.shape, 0.008)
    top = (sm(0.45, 0.9, y)*sm(-0.9, 0.2, z))[..., None]*np.array((1.05, 1.05, 1.04))
    key = (np.exp(-((x+0.74)/0.10)**2)*sm(-0.5, 0.25, y))[..., None]*np.array((2.30, 2.26, 2.18))
    rim = (np.exp(-((x-0.80)/0.07)**2)*sm(-0.6, 0.2, y)*sm(0.3, -0.4, z))[..., None]*np.full(3, 0.60)
    fill = (np.exp(-((y-0.05)/0.22)**2)*sm(0.4, 0.95, z))[..., None]*np.full(3, 0.22)
    floor = sm(-0.2, -0.9, y)[..., None]*np.full(3, 0.02)
    return base + top + key + rim + fill + floor
col = np.zeros((O.shape[0], 3)); alpha = hit.astype(float)
idx = np.nonzero(hit)[0]; p = O[idx] + D*t[idx, None]; e = 0.0008
n = nrm(np.stack([sdf(p+np.array((e, 0, 0)))-sdf(p-np.array((e, 0, 0))), sdf(p+np.array((0, e, 0)))-sdf(p-np.array((0, e, 0))), sdf(p+np.array((0, 0, e)))-sdf(p-np.array((0, 0, e)))], -1))
dh, ds, dk = parts(p); m = np.minimum(np.minimum(dh, ds), dk)
isH = dh <= m + 1e-6; isK = dk <= m + 1e-6; isS = ~isH & ~isK
s, r, v = local(p)
isTipIns = isS & (s > L_SH + 0.03)
isCollar = isS & (s > L_SH) & (s <= L_SH + 0.03)
rng = np.random.default_rng(3); refl = D - 2*(n @ D)[:, None]*n
def glossy(rough, ns=10):
    acc = np.zeros_like(refl)
    for k in range(ns): acc += env(nrm(refl + rough*rng.normal(0, 1, refl.shape)))
    return acc/ns
cosv = np.clip(-(n @ D), 0, 1)
spec_m = glossy(0.07); spec_r = glossy(0.28)
F_m = 0.62 + 0.38*(1-cosv)**5; F_d = 0.04 + 0.96*(1-cosv)**5
diff = 0.10 + 0.80*np.clip(n @ KEY, 0, 1) + 0.18*np.clip(n @ n3((0.5, -0.1, 0.9)), 0, 1)
metal = spec_m*F_m[:, None] + 0.012
plastic = np.array((0.80, 0.81, 0.82))[None]*diff[:, None]*0.55 + spec_r*F_d[:, None]*0.9
black = np.array((0.030, 0.031, 0.033))[None]*diff[:, None] + spec_m*(F_d*0.9 + 0.03)[:, None]
grey = np.array((0.16, 0.165, 0.17))[None]*diff[:, None] + spec_r*(F_d*0.8 + 0.02)[:, None]
lowH = isH & (((p - HC) @ P) < -0.02)
plastic2 = np.array((0.20, 0.205, 0.21))[None]*diff[:, None] + spec_r*F_d[:, None]*0.9
c = np.where(isH[:, None], np.where(lowH[:, None], plastic2, plastic), black)
c = np.where(isTipIns[:, None], grey, c)
c = np.where((isK | isCollar)[:, None], metal, c)
ao = np.ones(idx.size)
for k, hh in enumerate((0.01, 0.025, 0.05)): ao -= np.clip(hh - sdf(p + n*hh), 0, 1)*(1.6/(k+1))
c *= np.clip(ao, 0.35, 1)[:, None]
col[idx] = c
img = col.reshape(H, W, 3); a = alpha.reshape(H, W)
if SS > 1: img = img.reshape(FH, SS, FW, SS, 3).mean((1, 3)); a = a.reshape(FH, SS, FW, SS).mean((1, 3))
img = np.where(a[..., None] > 0, img/np.maximum(a[..., None], 1e-6), 0)
img = img/(1+0.35*img)*1.3; img = np.clip(img, 0, 1)**(1/2.2)
FWp, FHp = FW + 2*PAD, FH + 2*PAD
sil = Image.fromarray((a*255).astype(np.uint8), 'L'); sh = Image.new('L', (FWp, FHp), 0)
sh.paste(sil.resize((FW, int(FH*0.55))), (PAD + int(FW*0.035), PAD + int(FH*0.40)))
sh = sh.filter(ImageFilter.GaussianBlur(FW*0.022)); sha = np.asarray(sh, float)/255*0.34
obj = np.zeros((FHp, FWp, 3)); oa = np.zeros((FHp, FWp))
obj[PAD:PAD+FH, PAD:PAD+FW] = img; oa[PAD:PAD+FH, PAD:PAD+FW] = a
outa = oa + sha*(1-oa); outc = np.where(outa[..., None] > 0, obj*oa[..., None]/np.maximum(outa[..., None], 1e-6), 0)
Image.fromarray(np.dstack([outc*255, outa*255]).astype(np.uint8), 'RGBA').save(OUT)
