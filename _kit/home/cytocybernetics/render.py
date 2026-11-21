#!/usr/bin/env python3
"""Crafted render of the two-unit Cybercyte stack (CIM on top of V10), after Cytocybernetics' own product photo
(cybercyte.html): satin-black lids, brushed-aluminium front panels with the CIM's ON/OFF toggle and LED, the V10's
current/voltage clamp toggle, power toggle, five ten-turn dials (1-5) with a toggle under each, and the wordmark printed
small on the panels. Perspective camera, painter-sorted shaded meshes for every knob and switch, panel faces textured at
100 px/cm and warped onto the projected quads, 2x supersampled. Output: hero.webp on a transparent ground (real alpha)."""
import math, pathlib, numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont, ImageOps
H = pathlib.Path(__file__).resolve().parent
FD = H.parent.parent / 'node_modules/@fontsource/instrument-sans/files/instrument-sans-latin-%s-normal.woff'
def font(w, s): return ImageFont.truetype(str(FD) % w, s)
SS = 2; W, HH = 3200 * SS, 2600 * SS
rng = np.random.default_rng(7)

# ---------- camera ----------
YAW, PITCH, D, F = math.radians(-27), math.radians(19), 150.0, 7000.0 * SS / 2
ca, sa, cb, sb = math.cos(YAW), math.sin(YAW), math.cos(PITCH), math.sin(PITCH)
CY0 = 11.7
def cam(p):
    x, y, z = p[0], p[1] - CY0, p[2]
    x1, z1 = x * ca + z * sa, -x * sa + z * ca
    y2, z2 = y * cb - z1 * sb, y * sb + z1 * cb
    return np.array([x1, y2, z2])
def proj(p):
    c = cam(p); k = F / (D - c[2]); return (W / 2 + c[0] * k, HH / 2 - c[1] * k)
def depth(p): return cam(p)[2]
def rotn(n):  # normal into camera space
    x, y, z = n; x1, z1 = x * ca + z * sa, -x * sa + z * ca; return np.array([x1, y * cb - z1 * sb, y * sb + z1 * cb])
L = np.array([-.45, .78, .55]); L /= np.linalg.norm(L)          # world light, upper left front
V = np.array([0, 0, 1.0])
def shade(n, base, spec=0.0, shin=40, amb=.32):
    n = np.array(n, float); n /= np.linalg.norm(n); d = max(0, n @ L)
    h = L + rotn_inv_view(); h /= np.linalg.norm(h); s = max(0, n @ h) ** shin
    c = np.array(base, float) * (amb + (1 - amb) * d) + 255 * spec * s
    return tuple(int(min(255, max(0, v))) for v in c)
def rotn_inv_view():  # view direction in world space (camera looks along -z in camera space)
    x, y, z = 0, 0, 1.0
    y1, z1 = y * cb + z * sb, -y * sb + z * cb          # inverse pitch
    return np.array([x * ca - z1 * sa, y1, x * sa + z1 * ca])
VW = rotn_inv_view()

# ---------- geometry (cm) ----------
X0, X1, Z0, Z1 = -20.0, 20.0, -15.0, 15.0
V10 = (0.0, 9.6); SEAM = (9.6, 10.1); CIM = (10.1, 23.4)
img = Image.new('RGBA', (W, HH), (0, 0, 0, 0))
dr = ImageDraw.Draw(img)

# ---------- textures ----------
PX = 100
def brushed(w, h, c0, c1, streak=7.0):
    g = np.linspace(0, 1, h)[:, None]
    base = np.array(c0)[None, None, :] * (1 - g[..., None]) + np.array(c1)[None, None, :] * g[..., None]
    n = rng.normal(0, 1, (h, w // 8 + 2)).astype(np.float32)
    n = np.array(Image.fromarray(((n * 30) + 128).clip(0, 255).astype(np.uint8)).resize((w, h), Image.BILINEAR)).astype(np.float32) - 128
    n = n / 30 * streak
    a = (base + n[..., None]).clip(0, 255).astype(np.uint8)
    return Image.fromarray(a, 'RGB').convert('RGBA')
def satin(w, h, c0, c1):
    gy = np.linspace(0, 1, h)[:, None]; gx = np.linspace(0, 1, w)[None, :]
    t = (gy * .7 + gx * .3)
    base = np.array(c0)[None, None, :] * (1 - t[..., None]) + np.array(c1)[None, None, :] * t[..., None]
    base += (np.exp(-((gx - gy * .55 - .28) / .16) ** 2) * 26)[..., None] + (np.exp(-((gy - .02) / .05) ** 2) * 18)[..., None]
    base += rng.normal(0, 1.4, base.shape)
    return Image.fromarray(base.clip(0, 255).astype(np.uint8), 'RGB').convert('RGBA')
LOGO = Image.open(H / 'mark.png').convert('RGBA')      # bone-coloured logo with alpha; recoloured to panel ink
def logo_ink(width, col=(52, 50, 64)):
    lg = LOGO.resize((width, int(width * LOGO.height / LOGO.width)), Image.LANCZOS)
    a = lg.split()[3]; o = Image.new('RGBA', lg.size, col + (0,)); o.putalpha(a); return o
INK = (48, 46, 60, 255)

def front_cim():
    w, h = int(40 * PX), int((CIM[1] - CIM[0]) * PX)
    t = brushed(w, h, (226, 227, 231), (204, 206, 212)); d = ImageDraw.Draw(t)
    t.alpha_composite(logo_ink(700), (260, 230))
    d.text((w - 260, 700), 'Cybercyte  CIM', font=font(500, 128), fill=INK, anchor='rs')
    d.text((420, 870), 'ON', font=font(500, 48), fill=INK, anchor='mm'); d.text((420, 1150), 'OFF', font=font(500, 48), fill=INK, anchor='mm')
    return t
def front_v10():
    w, h = int(40 * PX), int((V10[1] - V10[0]) * PX)
    t = brushed(w, h, (222, 223, 228), (198, 200, 207)); d = ImageDraw.Draw(t)
    d.text((330, 120), 'Current Clamp', font=font(500, 44), fill=INK, anchor='mm'); d.text((330, 540), 'Voltage Clamp', font=font(500, 44), fill=INK, anchor='mm')
    d.text((330, 640), 'ON', font=font(500, 40), fill=INK, anchor='mm'); d.text((330, 880), 'OFF', font=font(500, 40), fill=INK, anchor='mm')
    for i in range(5): d.text((1000 + i * 620, 470), str(i + 1), font=font(600, 64), fill=INK, anchor='mm')
    t.alpha_composite(logo_ink(240), (3080, 520)); d.text((3860, 600), 'Cybercyte V10', font=font(500, 70), fill=INK, anchor='rs')
    return t
def side(h0, h1, c0, c1):
    w, h = int(30 * PX), int((h1 - h0) * PX); return brushed(w, h, c0, c1, 4)

def warp(tex, quad, mask_only=False):
    """quad: projected corners of tex (tl, tr, br, bl)."""
    tw, th = tex.size; src = [(0, 0), (tw, 0), (tw, th), (0, th)]
    A, B = [], []
    for (x, y), (u, v) in zip(quad, src):
        A += [[x, y, 1, 0, 0, 0, -u * x, -u * y], [0, 0, 0, x, y, 1, -v * x, -v * y]]; B += [u, v]
    co = np.linalg.solve(np.array(A, float), np.array(B, float))
    out = tex.transform((W, HH), Image.PERSPECTIVE, tuple(co), Image.BICUBIC)
    m = Image.new('L', (W, HH), 0); ImageDraw.Draw(m).polygon([tuple(p) for p in quad], fill=255)
    out.putalpha(Image.composite(out.split()[3], Image.new('L', (W, HH), 0), m))
    img.alpha_composite(out)

def face(tex, pts):  # pts: world corners tl,tr,br,bl matching tex
    warp(tex, [proj(p) for p in pts])

# ---------- soft contact shadow (alpha only) ----------
sh = Image.new('L', (W, HH), 0); sd = ImageDraw.Draw(sh)
poly = [proj((x, -0.05, z)) for x, z in [(X0 - .6, Z0 - .6), (X1 + .6, Z0 - .6), (X1 + .6, Z1 + .9), (X0 - .6, Z1 + .9)]]
sd.polygon(poly, fill=150); sh = sh.filter(ImageFilter.GaussianBlur(50 * SS))
img.alpha_composite(Image.merge('RGBA', [Image.new('L', (W, HH), 6)] * 3 + [sh]))

# ---------- box faces ----------
# right sides (x = X1): z from front (15) to back (-15) left->right in texture
face(side(*V10, (150, 152, 160), (126, 128, 137)), [(X1, V10[1], Z1), (X1, V10[1], Z0), (X1, V10[0], Z0), (X1, V10[0], Z1)])
face(side(*CIM, (40, 41, 48), (30, 31, 37)), [(X1, CIM[1], Z1), (X1, CIM[1], Z0), (X1, CIM[0], Z0), (X1, CIM[0], Z1)])
# CIM lid wraps the sides: a satin-black U-cover; the aluminium front sits inside it
seam = Image.new('RGBA', (400, 50), (16, 15, 22, 255))
face(seam, [(X0 + .3, SEAM[1], Z1 - .35), (X1, SEAM[1], Z1 - .35), (X1, SEAM[0], Z1 - .35), (X0 + .3, SEAM[0], Z1 - .35)])
face(front_v10(), [(X0, V10[1], Z1), (X1, V10[1], Z1), (X1, V10[0], Z1), (X0, V10[0], Z1)])
face(front_cim(), [(X0, CIM[1], Z1), (X1, CIM[1], Z1), (X1, CIM[0], Z1), (X0, CIM[0], Z1)])
face(satin(1600, 1200, (70, 70, 84), (26, 26, 34)), [(X0, CIM[1], Z0), (X1, CIM[1], Z0), (X1, CIM[1], Z1), (X0, CIM[1], Z1)])

def line3(a, b, col, w):
    dr.line([proj(a), proj(b)], fill=col, width=max(1,int(w * SS * 1.9)))
# edge highlights (thin bevels catch the light)
line3((X0, CIM[1], Z1), (X1, CIM[1], Z1), (150, 150, 168, 255), 1.6)
line3((X1, CIM[1], Z1), (X1, CIM[1], Z0), (92, 92, 108, 255), 2.2)
line3((X1, CIM[1], Z1), (X1, CIM[0], Z1), (120, 120, 134, 200), 1.2)
line3((X0, CIM[0] + .05, Z1), (X1, CIM[0] + .05, Z1), (246, 246, 250, 255), 1.4)
line3((X0, V10[1] - .02, Z1), (X1, V10[1] - .02, Z1), (250, 250, 252, 255), 1.4)
line3((X1, V10[1], Z1), (X1, V10[0], Z1), (236, 236, 242, 220), 1.2)
line3((X0, V10[0], Z1), (X1, V10[0], Z1), (90, 92, 100, 255), 1.4)

# ---------- protrusions: shaded meshes ----------
def cyl(cx, cy, z0, r0, r1, length, base, spec=0.0, n=40, knurl=0, cap=None, tilt=(0, 0, 1)):
    ax = np.array(tilt, float); ax /= np.linalg.norm(ax)
    u = np.cross(ax, [0, 1, 0]); u = u / np.linalg.norm(u) if np.linalg.norm(u) > 1e-6 else np.array([1., 0, 0]); v = np.cross(ax, u)
    c0 = np.array([cx, cy, z0]); c1 = c0 + ax * length
    polys = []
    for i in range(n):
        a0, a1 = 2 * math.pi * i / n, 2 * math.pi * (i + 1) / n
        rr0 = r0 * (1 + (.06 if knurl and i % 2 else 0)); rr1 = r1 * (1 + (.06 if knurl and i % 2 else 0))
        p = [c0 + rr0 * (math.cos(a0) * u + math.sin(a0) * v), c0 + rr0 * (math.cos(a1) * u + math.sin(a1) * v),
             c1 + rr1 * (math.cos(a1) * u + math.sin(a1) * v), c1 + rr1 * (math.cos(a0) * u + math.sin(a0) * v)]
        am = (a0 + a1) / 2; nn = math.cos(am) * u + math.sin(am) * v
        if nn @ VW <= 0: continue
        polys.append((np.mean([depth(q) for q in p]), p, shade(nn, base, spec)))
    for _, p, col in sorted(polys, key=lambda t: t[0]):
        dr.polygon([proj(q) for q in p], fill=col + (255,))
    # cap with a soft radial gradient and a specular dot
    cb_ = cap or base
    for k in range(14, 0, -1):
        f = k / 14; off = (1 - f) * .28 * r1
        pc = c1 + (-off * .7) * u + (off * .7) * v * 0 + ax * 0
        pts = [proj(c1 + r1 * f * (math.cos(t) * u + math.sin(t) * v) + (-.18 * r1 * (1 - f)) * np.array([1, -1, 0]) * 0) for t in np.linspace(0, 2 * math.pi, 48)]
        col = shade(ax, cb_, spec * (1 - f) * 1.4, amb=.42 + .25 * (1 - f))
        dr.polygon(pts, fill=col + (255,))
    return c1
def dial(cx, cy):
    cyl(cx, cy, Z1, 1.55, 1.55, .25, (205, 207, 214), .5, 48)                   # flat washer
    cyl(cx, cy, Z1 + .25, 1.25, 1.18, .55, (196, 198, 206), .9, 48, cap=(214, 216, 222))  # turns-counter collar (silver)
    for t in range(10):                                                          # counter ticks on the collar face
        a = 2 * math.pi * t / 10 + .3; p0 = (cx + 1.0 * math.cos(a), cy + 1.0 * math.sin(a), Z1 + .8); p1 = (cx + 1.15 * math.cos(a), cy + 1.15 * math.sin(a), Z1 + .8)
        line3(p0, p1, (60, 60, 70, 255), 1.0)
    cyl(cx, cy, Z1 + .8, .82, .74, 1.15, (40, 40, 46), .55, 36, knurl=1, cap=(52, 52, 60))  # black knurled knob
    p = (cx, cy + .45, Z1 + 1.96); dr.ellipse([proj(p)[0] - 6 * SS, proj(p)[1] - 6 * SS, proj(p)[0] + 6 * SS, proj(p)[1] + 6 * SS], fill=(235, 235, 240, 255))
def toggle(cx, cy, down=True):
    cyl(cx, cy, Z1, .62, .62, .22, (172, 174, 184), .7, 6)                        # hex nut
    cyl(cx, cy, Z1 + .22, .36, .34, .32, (198, 200, 210), 1.0, 28)                # threaded bushing
    cyl(cx, cy, Z1 + .5, .17, .12, 1.35, (216, 218, 228), 1.3, 20, tilt=(0, -.5 if down else .5, 1), cap=(236, 238, 244))  # chrome bat
def led(cx, cy):
    cyl(cx, cy, Z1, .32, .32, .12, (170, 172, 180), .5, 24)
    cyl(cx, cy, Z1 + .12, .2, .18, .18, (190, 196, 200), 1.4, 24, cap=(222, 226, 232))

# CIM: ON/OFF toggle + LED;  V10: clamp-mode toggle, power toggle + LED, five dials with toggles below
def fx(px): return X0 + px / PX
def cimy(py): return CIM[1] - py / PX
def v10y(py): return V10[1] - py / PX
toggle(fx(420), cimy(1010)); led(fx(640), cimy(985))
toggle(fx(330), v10y(300)); toggle(fx(330), v10y(770)); led(fx(560), v10y(770))
for i in range(5):
    dial(fx(1000 + i * 620), v10y(230))
    toggle(fx(1000 + i * 620), v10y(735))

out = img.resize((W // SS, HH // SS), Image.LANCZOS)
_a = np.array(out); _al = _a[..., 3].astype(int); _a[..., 3] = np.where(_al < 6, 0, _al).astype(np.uint8)   # drop the shadow's faint tails (no box edge under a x6 boost)
out = Image.fromarray(_a, 'RGBA')
out = out.crop(out.getbbox())
out.save(H / 'hero.webp', quality=95, method=6, exact=True)
bg = Image.new('RGBA', out.size, (18, 13, 42, 255)); bg.alpha_composite(out); bg.save('/tmp/claude-0/-home-user-harvardsites/2f2d2d1f-713b-5ef4-a21a-64e0c6d85565/scratchpad/render_check.png')
print(out.size)
