#!/usr/bin/env python3
"""BIOREF hero (HOME_BRIEF update 2c: a crafted render of the firm's real product). BIOREF's controls are liquid,
ready-to-use human-serum controls filled into bottles and small vials (bioref.com > Products); their own start-page
slider shows amber serum in clear glass lab bottles with blue ribbed screw caps. This renders three such vials, three
control levels (straw, amber, deep amber), backlit in a dark studio: analytic cylinder shading per pixel in numpy
(fresnel glass walls, softbox streaks, Beer-Lambert serum with a lit meniscus, ribbed caps), plus a soft reflection that
fades to nothing. Saved with REAL alpha (no ground of its own, DJ/DP).
Usage: python3 render.py W H out.png [SS]"""
import sys, math, numpy as np
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 800
H = int(sys.argv[2]) if len(sys.argv) > 2 else 900
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 1
FW, FH = W, H
W, H = W*SS, H*SS
K = W/1000.0                      # scene units: 1000 wide
ys, xs = np.mgrid[0:H, 0:W].astype(np.float64)
X = (xs+.5)/K; Y = (ys+.5)/K       # scene coords
def sm(a, b, x): x = np.clip((x-a)/(b-a), 0, 1); return x*x*(3-2*x)
E = .24                            # elevation: a circle of radius r shows as an ellipse of half-height E*r

RGB = np.zeros((H, W, 3)); A = np.zeros((H, W))
def over(col, a):
    """composite premultiplied-free colour col (H,W,3) with alpha a over the canvas"""
    global RGB, A
    a = np.clip(a, 0, 1)
    na = a+A*(1-a)
    RGB = np.where(na[..., None] > 1e-6, (col*a[..., None]+RGB*A[..., None]*(1-a[..., None]))/np.maximum(na, 1e-6)[..., None], RGB)
    A = na

def vial(cx, yb, r, hb, fill, serum, dim=1.0, refl=True):
    """one vial standing on the ground at screen height yb (centre of its base ellipse)"""
    rn = r*.58; hs = r*.62; hn = r*.34; rc = r*.7; hc = r*.86   # neck radius, shoulder, neck, cap radius, cap height
    wall = max(3.2, r*.05)
    ytop_body = yb-hb                         # where the shoulder starts
    yneck = ytop_body-hs; ycap = yneck-hn; ycapt = ycap-hc
    dx = X-cx
    # radius profile along the axis (screen y ~ axis height)
    t = np.clip((ytop_body-Y)/hs, 0, 1)
    sh = r-(r-rn)*(1-np.cos(t*np.pi))/2       # smooth shoulder
    R = np.where(Y >= ytop_body, r, np.where(Y >= yneck, sh, rn))
    inside_side = np.abs(dx) < R
    s = np.sqrt(np.clip(R*R-dx*dx, 0, None))
    # the glass from the cap's lower edge to the base ellipse
    bottom = yb+E*np.sqrt(np.clip(r*r-dx*dx, 0, None))
    glass = inside_side & (Y <= bottom) & (Y >= ycap)
    nx = np.clip(dx/np.maximum(R, 1e-6), -1, 1)
    fres = np.abs(nx)**5
    # ---- serum: fill level is a fraction of the body height
    yl = yb-hb*fill
    ri = r-wall
    si = np.sqrt(np.clip(ri*ri-dx*dx, 0, None))
    liq_front = (np.abs(dx) < ri) & (Y >= yl-E*si) & (Y <= yb+E*si-wall*.6)
    surf = (np.abs(dx) < ri) & (Y >= yl-E*si) & (Y <= yl+E*si)
    nxi = np.clip(dx/ri, -1, 1); thick = np.sqrt(np.clip(1-nxi*nxi, 0, 1))
    sig = np.array(serum)                       # absorption per channel
    back = np.array([1.0, .93, .80])            # warm backlight
    tr = np.exp(-sig[None, None, :]*(.35+.9*thick[..., None]))
    lc = back*tr
    # refraction rim: the serum darkens towards its edges; a caustic glow near the base
    rim = sm(.72, .99, np.abs(nxi))
    lc = lc*(1-.55*rim[..., None])
    caus = np.exp(-((dx/(ri*.45))**2+((Y-(yb-r*.08))/(r*.32))**2))
    lc = lc+np.array([1., .8, .45])*(.22*caus)[..., None]*tr**.35
    # vertical falloff: brightest in the lower middle
    vy = np.clip((Y-yl)/max(hb*fill, 1), 0, 1)
    lc = lc*(.78+.3*np.sin(np.pi*np.clip(vy*.9+.1, 0, 1)))[..., None]
    # the meniscus surface: a lit ellipse, a bright back edge
    sv = np.clip((Y-(yl-E*si))/np.maximum(2*E*si, 1e-6), 0, 1)
    sc = back*np.exp(-sig*.55)*(.9+.25*sv[..., None])
    edge = np.exp(-((Y-(yl+E*si))/(1.6+.004*r))**2)*(np.abs(dx) < ri*.97)
    lc = np.where(surf[..., None], sc, lc)
    lc = lc+np.array([1., .95, .85])*(.55*edge)[..., None]
    lum = (lc*np.array([.3, .59, .11])).sum(-1, keepdims=True)
    lc = (lc*.82+lum*.18)*dim
    liq_a = liq_front*(.9-.12*rim)
    over(np.clip(lc, 0, 1), liq_a*glass)
    # ---- glass walls: fresnel edges, two softbox streaks, a thin far-wall reflection
    gcol = np.ones((H, W, 3))*np.array([.86, .91, .96])
    st1 = sm(-.66, -.6, nx)*(1-sm(-.44, -.38, nx))
    st2 = sm(.70, .74, nx)*(1-sm(.8, .84, nx))
    st3 = sm(-.2, -.17, nx)*(1-sm(-.13, -.1, nx))*.35
    # streaks bend over the shoulder and fade into the neck
    vfade = sm(ycap+hn*.2, yneck+hs*.6, Y)*(1-sm(yb-r*.05, yb+r*.2, Y))
    hi = (st1*.75+st2*.5+st3)*vfade*dim
    walls = .06+.75*fres
    ga = np.clip(walls+hi, 0, .97)*glass
    gc = gcol*(1-hi[..., None])+np.ones(3)*hi[..., None]
    over(gc, ga)
    # base: a thick glass heel that catches light
    heel = glass & (Y > bottom-r*.1)
    hb_a = sm(bottom-r*.1, bottom-r*.02, Y)*(1-sm(bottom-1.5, bottom, Y))*(.35+.4*fres)
    over(np.ones((H, W, 3))*np.array([.95, .9, .8]), hb_a*heel)
    ring = inside_side & (Y > ycap) & (Y < ycap+hn*.55)
    rg = .25+.25*(np.sin((Y-ycap)/max(hn*.55, 1)*np.pi*3) > 0)
    over(np.ones((H, W, 3))*np.array([.8, .86, .93])*dim, ring*rg*(.4+.6*fres))
    # ---- the ribbed screw cap (deep brand blue), lit from upper left
    capr = np.abs(dx) < rc
    sc_ = np.sqrt(np.clip(rc*rc-dx*dx, 0, None))
    cap = capr & (Y >= ycapt-E*sc_) & (Y <= ycap+E*sc_)
    nxc = np.clip(dx/rc, -1, 1); nzc = np.sqrt(np.clip(1-nxc*nxc, 0, 1))
    ang = np.arcsin(nxc)
    rib = np.sin(ang*44)
    lam = np.clip(-.55*nxc+.8*nzc+.12*rib*nzc, 0, 1)
    base = np.array([.09, .15, .40])*dim
    cc = base[None, None, :]*(.35+.95*lam[..., None])
    spec = (np.exp(-((nxc+.42)/.1)**2)*.32+np.exp(-((nxc-.62)/.06)**2)*.14)*(.55+.45*(rib > 0))
    cc = cc+spec[..., None]*np.array([.75, .82, 1.0])
    top = capr & (Y >= ycapt-E*sc_) & (Y <= ycapt+E*sc_)
    tv = np.clip((Y-(ycapt-E*sc_))/np.maximum(2*E*sc_, 1e-6), 0, 1)
    cc = np.where(top[..., None], base*(1.05+.3*(1-tv))[..., None]+np.array([.03, .04, .08])*(1-np.abs(nxc))[..., None], cc)
    lip = np.exp(-((Y-(ycapt+E*sc_))/1.4)**2)*capr*(Y <= ycap)
    cc = cc+np.array([.5, .6, .9])*(.35*lip)[..., None]
    ca = cap*(1-sm(.985, 1., np.abs(nxc))*.6)
    over(np.clip(cc, 0, 1), ca)
    # ---- a soft reflection on a dark glossy ground, fading out over a long distance
    if refl:
        yr = 2*yb-Y                            # mirror about the base line
        d = Y-bottom
        rs = (np.abs(dx) < ri) & (d > 0)
        fade = np.exp(-d/(r*.55))*.16
        tr2 = np.exp(-sig[None, None, :]*.8)
        rc_ = back*tr2*(1-.5*rim[..., None])
        over(np.broadcast_to(rc_, (H, W, 3)).copy(), rs*fade*(yr > yl))

# back pair, then the front vial (three control levels)
STRAW = (.03, .2, 1.05); AMBER = (.05, .42, 1.75); DEEP = (.1, .72, 2.5)
vial(275, 800, 118, 330, .66, STRAW, .86)
vial(735, 812, 118, 330, .60, DEEP, .86)
vial(505, 880, 150, 420, .64, AMBER)

A = A*(1-sm(925, 995, Y))   # the reflection has faded out before the frame edge (DJ)
img = np.dstack([np.clip(RGB, 0, 1), np.clip(A, 0, 1)])
im = Image.fromarray((img*255+.5).astype(np.uint8), 'RGBA')
if SS > 1: im = im.resize((FW, FH), Image.LANCZOS)
im.save(OUT)
print('wrote', OUT, im.size)
