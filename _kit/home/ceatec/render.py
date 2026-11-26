#!/usr/bin/env python3
"""CEATEC hero (HOME_BRIEF update 2c: a crafted render of the firm's real product). One pair of surgical scissors with
gold-coloured ring handles, the mark of CEATEC's tungsten-carbide (TC) instruments ("Hartmetalleinsätze ... Vergoldete Ringe
zur schnellen Identifikation", ceatec.de > Wissenswertes > Hartmetalleinsätze), lying flat and slightly open on a pale
steel-grey ground, seen from above. Built as two height fields (one per half), shaded as polished stainless steel and gold
against a studio environment (soft top box and a strip light), with a soft cast shadow. The ground IS the page colour
(no box edge, DP/DJ). Usage: python3 render.py out.png"""
import sys, math, numpy as np
from PIL import Image, ImageDraw, ImageFilter
from scipy import ndimage as ndi
OUT = sys.argv[1] if len(sys.argv) > 1 else 'hero.png'
SS = 2
W, H = 1800*SS, 1120*SS
BG = np.array([236, 238, 241])/255.0          # page ground (#eceef1)
S = 8.6*SS                                     # px per mm
ROT = math.radians(-24)
CX, CY = W*.56, H*.39

def to_px(pts):
    out = []
    for x, y in pts:
        x2 = x*math.cos(ROT) - y*math.sin(ROT); y2 = x*math.sin(ROT) + y*math.cos(ROT)
        out.append((CX + x2*S, CY + y2*S))
    return out

def half(s, open_deg):
    """mask layers of one half: (steel mask, gold mask). s=+1 upper half, -1 lower half."""
    a = math.radians(open_deg*s)
    def r(p):
        x, y = p; return (x*math.cos(a) - y*math.sin(a), x*math.sin(a) + y*math.cos(a))
    st = Image.new('L', (W, H), 0); go = Image.new('L', (W, H), 0)
    ds, dg = ImageDraw.Draw(st), ImageDraw.Draw(go)
    # blade (Metzenbaum, slightly curved): edge on the centreline side, back on the outside
    N = 60; back = []; edge = []
    for i in range(N+1):
        t = i/N; x = -4 + t*76
        cv = 4.0*t*t                                   # gentle Metzenbaum curve of the tip
        wd = 5.6*(1-t)**0.75 + 1.5
        if t > .94: wd *= math.sqrt(max(0, 1-((t-.94)/.06)**2))*.9+.1   # rounded blunt tip
        back.append(r((x, s*wd + cv)))
        edge.append(r((x, cv)))
    poly = back + edge[::-1]
    ds.polygon(to_px(poly), fill=255)
    # shank: from pivot back to the ring, a smooth S
    sh_a = []; sh_b = []
    for i in range(N+1):
        t = i/N; x = 2 - t*72
        yc = -s*(15.5*(t**1.5))
        wd = 3.6 - .6*t
        sh_a.append(r((x, yc + wd))); sh_b.append(r((x, yc - wd)))
    ds.polygon(to_px(sh_a + sh_b[::-1]), fill=255)
    # pivot boss
    c = r((0, 0)); p = to_px([c])[0]; rr = 6.2*S
    ds.ellipse([p[0]-rr, p[1]-rr, p[0]+rr, p[1]+rr], fill=255)
    # ring handle (gold): oval annulus
    cx, cy = -84, -s*18.5
    ring = []; inner = []
    for i in range(121):
        th = 2*math.pi*i/120
        ring.append(r((cx + 14.5*math.cos(th), cy + 11.5*math.sin(th))))
        inner.append(r((cx + 10.2*math.cos(th), cy + 7.4*math.sin(th))))
    dg.polygon(to_px(ring), fill=255); dg.polygon(to_px(inner), fill=0)
    # shank meets ring: steel collar stays steel
    return np.asarray(st, float)/255, np.asarray(go, float)/255

def height(mask, R):
    m = mask > .5
    d = ndi.distance_transform_edt(m)
    t = np.clip(d/R, 0, 1)
    h = R*np.sqrt(np.clip(1-(1-t)**2, 0, 1))
    return ndi.gaussian_filter(h*m, 1.2*SS)

def shade(h, base, Xn, Yn):
    gy, gx = np.gradient(h)
    n = np.dstack([-gx, -gy, np.ones_like(h)]); n /= np.linalg.norm(n, axis=2, keepdims=True)
    nz = n[..., 2]
    R = np.dstack([2*nz*n[..., 0], 2*nz*n[..., 1], 2*nz*nz-1])
    # studio environment: bright ceiling softbox whose reflection sweeps diagonally across the flat faces,
    # a strip light low on the right, darker walls at grazing angles
    sweep = .5 + .5*np.tanh(((Xn*.8 - Yn*.6) - .05 + R[..., 0]*.9 - R[..., 1]*.7)*3.2)
    pr = (Xn*.8 - Yn*.6) + R[..., 0]*.9 - R[..., 1]*.7
    band = np.exp(-((pr - .30)/.07)**2) + .7*np.exp(-((pr + .22)/.05)**2)
    ceil = .60 + .38*sweep - .30*band
    wall = .34 + .20*np.clip(R[..., 2], 0, 1)
    env = wall + (ceil-wall)*np.clip(R[..., 2], 0, 1)**1.4
    L1 = np.array([-.42, -.55, .72]); L1 /= np.linalg.norm(L1)
    L2 = np.array([.78, .25, .58]); L2 /= np.linalg.norm(L2)
    s1 = np.clip((R*L1).sum(2), 0, 1); s2 = np.clip((R*L2).sum(2), 0, 1)
    env = env + .55*s1**28 + .35*s2**40 + .10*s1**4
    col = env[..., None]*base[None, None, :]
    return np.clip(col, 0, 1)

yy, xx = np.mgrid[0:H, 0:W].astype(float)
Xn = (xx - W/2)/W; Yn = (yy - H/2)/H
img = np.ones((H, W, 3))*BG
stA, goA = half(+1, 1.4)   # top half
stB, goB = half(-1, 1.4)   # bottom half
mA = np.clip(stA+goA, 0, 1); mB = np.clip(stB+goB, 0, 1)
mAll = np.clip(mA+mB, 0, 1)
# cast shadow on the ground: a wide soft one and a tight contact one
off = (int(14*SS), int(22*SS))
sh = ndi.shift(mAll, (off[1], off[0]), order=0)
soft = ndi.gaussian_filter(sh, 26*SS)*.26 + ndi.gaussian_filter(ndi.shift(mAll, (5*SS, 3*SS), order=0), 5*SS)*.30
img *= (1 - np.clip(soft, 0, .6))[..., None]
STEEL = np.array([.86, .88, .91]); GOLD = np.array([1.0, .80, .46])
def layer(img, st, go, lift):
    m = np.clip(st+go, 0, 1)
    hs = height(st, 1.3*S); hg = height(go, 2.2*S)
    h = np.maximum(hs, hg) + lift
    cs = shade(hs, STEEL, Xn, Yn); cg = shade(hg, GOLD, Xn, Yn)
    gm = ndi.gaussian_filter(go, .6*SS)
    col = cs*(1-gm[..., None]) + cg*gm[..., None]
    a = ndi.gaussian_filter(m, .7*SS)[..., None]
    return img*(1-a) + col*a
img = layer(img, stB, goB, 0)
# the top half shades the bottom one where it crosses
cross = ndi.gaussian_filter(ndi.shift(mA, (4*SS, 2*SS), order=0), 3*SS)*mB
img *= (1 - .35*cross)[..., None]
img = layer(img, stA, goA, 0)
# screw head on the pivot (top half)
p = to_px([(0, 0)])[0]; d = np.hypot(xx-p[0], yy-p[1]); rs = 3.6*S
scr = np.clip((rs - d)/(1.2*SS), 0, 1)
sh2 = np.clip(1 - (d/rs)**2, 0, 1)
ring = np.exp(-((d - rs)/(0.5*S))**2)
img = img*(1 - .25*ring[..., None])
dome = (.62 + .30*(((xx-p[0])*-.5 + (yy-p[1])*-.7)/rs)*.6 + .2*sh2)[..., None]*np.array([.88, .9, .93])
img = img*(1-scr[..., None]) + np.clip(dome, 0, 1)*scr[..., None]
slot = (np.abs(((xx-p[0])*math.cos(ROT+.6) + (yy-p[1])*math.sin(ROT+.6))) < .45*S) & (d < rs*.82)
img[slot] *= .55
# fine satin grain on the metal only
rng = np.random.default_rng(3)
grain = ndi.gaussian_filter(rng.standard_normal((H, W)), [.6*SS, 4*SS])*.018
img = np.clip(img + grain[..., None]*mAll[..., None], 0, 1)
out = Image.fromarray((img*255+.5).astype(np.uint8)).resize((W//SS, H//SS), Image.LANCZOS)
out.save(OUT)
print('wrote', OUT, out.size)
