#!/usr/bin/env python3
"""DLB Oberviechtach hero (HOME_BRIEF update 2c: a crafted render of the firm's real product). Two stranded conductors
of the kind DLB draws and strands in Oberviechtach (dlb-ovi.de > Über uns: Mehrfachdrähte, Litzen und Seile aus Kupfer,
Kupferlegierungen sowie Aluminium; Produkte: hohe Verzinnungsgüten): a bare copper rope of 1+6+12+18 strands in front
and a tinned copper strand of 1+6+12 behind, each cut square at both ends, seen in a three-quarter view so the cut face
with its packed wire ends reads. Every outer wire is shaded as a real round wire on its helix (lay length, helix angle,
bulge normal), with drawing streaks along each wire, metallic specular light from a soft box above left and a cool rim.
Rendered with REAL alpha. Usage: python3 render.py W H out.png [SS]"""
import sys, math, numpy as np
from PIL import Image
W = int(sys.argv[1]) if len(sys.argv) > 1 else 1600
H = int(sys.argv[2]) if len(sys.argv) > 2 else 1000
OUT = sys.argv[3] if len(sys.argv) > 3 else 'hero.png'
SS = int(sys.argv[4]) if len(sys.argv) > 4 else 2
FW, FH = W, H; W, H = W*SS, H*SS
rng = np.random.default_rng(7)

img = np.zeros((H, W, 3)); alpha = np.zeros((H, W))
yy, xx = np.mgrid[0:H, 0:W].astype(float)

LIGHT = np.array([-.45, -.62, .64]); LIGHT /= np.linalg.norm(LIGHT)
FILL = np.array([.55, .35, .76]); FILL /= np.linalg.norm(FILL)
RIM = np.array([.15, .9, -.4]); RIM /= np.linalg.norm(RIM)
VIEW = np.array([0, 0, 1.])

def shade(N, base, spec_col, rough, streak):
    """metal shading: weak diffuse, strong tinted specular (two lights), a cool rim, streaks modulate the gloss"""
    Nn = N / np.linalg.norm(N, axis=-1, keepdims=True)
    def blinn(L, p):
        Hh = L + VIEW; Hh /= np.linalg.norm(Hh)
        return np.clip((Nn @ Hh), 0, 1) ** p
    nl = np.clip(Nn @ LIGHT, 0, 1)[..., None]; nf = np.clip(Nn @ FILL, 0, 1)[..., None]
    s1 = blinn(LIGHT, rough)[..., None]; s2 = blinn(FILL, rough * .7)[..., None]
    sb = blinn(LIGHT, rough * 6)[..., None]
    fr = (1 - np.clip(Nn @ VIEW, 0, 1))[..., None] ** 3
    rim = np.clip(Nn @ RIM, 0, 1)[..., None] ** 2
    st = streak[..., None]
    col = base * (.10 + .46 * nl + .16 * nf) + spec_col * (1.15 * s1 + .4 * s2) * (.72 + .5 * st) + 1.0 * sb * spec_col \
        + np.array([.42, .48, .56]) * rim * .38 + spec_col * fr * .26
    return col

def conductor(cx, cy, ang, L, R, layers, lay, base, spec, rough, tilt, seed, lefthand=False):
    """one stranded conductor. Local frame: axis along u (length L), v across (|v| < R). Both ends cut; the right cap
    faces the viewer (ellipse half-width e), the left cap faces away."""
    global img, alpha
    r_g = np.random.default_rng(seed)
    ca, sa = math.cos(ang), math.sin(ang)
    u = (xx - cx) * ca + (yy - cy) * sa + L / 2       # 0..L along the axis
    v = -(xx - cx) * sa + (yy - cy) * ca              # across, + = down on screen
    e = R * tilt
    q = np.clip(np.abs(v) / R, 0, 1); rim_e = e * np.sqrt(np.clip(1 - q * q, 0, 1))
    side = (np.abs(v) < R) & (u >= -rim_e) & (u <= L + rim_e)
    cap = ((u - L) / max(e, 1e-6)) ** 2 + (v / R) ** 2 < 1
    # ---- side: outer layer of round wires on a helix
    N_out = layers[-1]
    rw = R * math.sin(math.pi / N_out) / (1 + math.sin(math.pi / N_out))
    Rc = R - rw
    th = np.arcsin(np.clip(v / R, -1, 1))                # angle around the axis; 0 = facing viewer
    sgn = -1 if lefthand else 1
    k = 2 * math.pi / lay
    phase = (th + sgn * k * u) * N_out / (2 * math.pi)
    idx = np.floor(phase); fr = phase - idx
    d = (fr - .5) * 2                                    # across one wire, -1..1
    # the surface between neighbours dips; wires are round: profile
    bul = np.sqrt(np.clip(1 - d * d, 0, 1))
    # tangents: around (circumferential) and along the axis, in screen coords (x right, y down, z to viewer)
    t_ax = np.stack([np.full_like(u, ca), np.full_like(u, sa), np.zeros_like(u)], -1)
    t_th = np.stack([-sa * np.cos(th), ca * np.cos(th), -np.sin(th)], -1)
    n_c = np.stack([-sa * np.sin(th), ca * np.sin(th), np.cos(th)], -1)
    # across-wire direction in the surface (perpendicular to the helix)
    hel = math.atan(k * Rc)                              # helix angle
    acr = (t_th * math.cos(hel) - sgn * t_ax[..., :] * math.sin(hel))
    acr = acr * np.ones_like(n_c)
    Nw = n_c * bul[..., None] + acr * (d * .92)[..., None]
    # streaks along each wire: per-wire constant in d, random per wire
    nwires = int(N_out)
    wid = np.mod(idx, nwires).astype(int)
    wtone = r_g.uniform(.82, 1.12, nwires)[wid]
    sx = r_g.normal(0, 1, 512)
    from numpy import interp
    streak = np.interp((d * .5 + .5) * 511 + wid * 37 % 511, np.arange(512), np.convolve(sx, np.ones(5) / 5, 'same'))
    streak = np.clip(streak * .5, -1, 1)
    col = shade(Nw, base * wtone[..., None], spec, rough, streak)
    # crevice occlusion between wires and toward the silhouette
    occ = (.32 + .68 * bul ** .55)[..., None] * (.55 + .45 * np.cos(th) ** .6)[..., None]
    col = col * occ
    # the far (left) cap faces away: the side silhouette there shows the rim; darken the last sliver a touch
    m_side = side & ~cap
    # ---- cap: the cut face, concentric layers of wire ends
    capcol = np.zeros_like(col); capm = np.zeros(u.shape, bool)
    cu = (u - L) / max(e, 1e-6) * R                      # cap coords scaled back to a circle
    cv_ = v
    ends = [(0.0, 0.0)]
    rad_w = R / (2 * len(layers) - 1) * 1.0
    for li, n in enumerate(layers[1:], start=1):
        rr = 2 * rad_w * li
        off = r_g.uniform(0, 2 * math.pi)
        for j in range(n):
            a = off + 2 * math.pi * j / n
            ends.append((rr * math.cos(a), rr * math.sin(a)))
    rad = rad_w * .97
    dmin = np.full(u.shape, 9e9); best = np.zeros(u.shape, int)
    for i, (ex, ey) in enumerate(ends):
        dd = np.hypot(cu - ex, cv_ - ey)
        b = dd < dmin; dmin[b] = dd[b]; best[b] = i
    inwire = cap & (dmin < rad)
    # cut face: flat, facing mostly the viewer and to the right; saw marks as fine parallel lines
    nf = np.array([.62, -.12, .78]); nf /= np.linalg.norm(nf)
    tone = r_g.uniform(.86, 1.1, len(ends))[best]
    saw = .5 + .5 * np.sin((cu * .8 + cv_ * .6) * 1.9 + r_g.uniform(0, 6, len(ends))[best])
    Nc = np.broadcast_to(nf, col.shape).copy()
    Nc[..., 0] += (saw - .5) * .06
    ccol = shade(Nc, base * 1.15 * tone[..., None], spec * 1.05, rough * .6, saw * .6 - .3)
    edge = np.clip((rad - dmin) / (rad * .18), 0, 1)[..., None]            # rounded/burred rim of each wire end
    ccol = ccol * (.5 + .5 * edge) + spec * .25 * (1 - edge) * (dmin < rad)[..., None]
    gap = np.array([.035, .022, .018])
    capcol = np.where(inwire[..., None], ccol, gap)
    # anti-aliased masks (supersampled anyway)
    fall = (.38 + .62 * np.exp(-((u - .78 * L) / (.55 * L)) ** 2))[..., None]
    col = col * fall
    out = np.where(cap[..., None], capcol, col)
    m = side | cap
    img = np.where(m[..., None], out, img)
    alpha = np.where(m, 1.0, alpha)

copper = np.array([.80, .40, .22]); cspec = np.array([1.0, .66, .44])
tin = np.array([.62, .64, .67]); tspec = np.array([.95, .97, 1.0])
S = min(W / 1600, H / 1000)
# back: tinned copper strand (1+6+12), slimmer, lay the other way
conductor(W * .55, H * .37, math.radians(-17), 1000 * S, 62 * S, [1, 6, 12], 760 * S, tin, tspec, 38, .42, 3, lefthand=True)
# front: bare copper rope (1+6+12+18)
conductor(W * .47, H * .60, math.radians(-17), 1100 * S, 104 * S, [1, 6, 12, 18], 1150 * S, copper, cspec, 30, .46, 11)

img = np.clip(img, 0, 1)
# gentle filmic shoulder
img = 1 - np.exp(-img * 1.9)
img = img / (1 - math.exp(-1.9))
rgba = np.dstack([img * 255, alpha * 255]).astype(np.uint8)
im = Image.fromarray(rgba, 'RGBA')
if SS > 1: im = im.resize((FW, FH), Image.LANCZOS)
im.save(OUT)
print('wrote', OUT, im.size)
