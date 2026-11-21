#!/usr/bin/env python3
"""Tele-stethoscope hero (HOME_BRIEF update 2c: a crafted render of the firm's real product). TSI's product is software on an
ordinary mobile phone: the phone is held to the chest and records auscultation (heart and lung sounds), which TSI analyses with
nonlinear dynamics ("any ordinary mobile phone ... All that is required is our enabling software", tele-stethoscope.com).
So the subject is an unbranded smartphone, seen at three-quarters, its screen showing a heart-sound recording (S1/S2 beats of a
phonocardiogram) and its state-space trajectory, in the logo's navy, aqua and magenta. Built as a flat front face, projected with
a true perspective homography, with an extruded aluminium edge, glass reflection and a soft aqua glow, saved with ALPHA so it sits
on the page ink without any box edge (DJ). Usage: python3 render.py out.png"""
import sys, math, numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont

OUT = sys.argv[1] if len(sys.argv) > 1 else 'hero.png'
S = 16                     # face resolution: px per mm
PW, PH, PR = 74.0, 156.0, 11.0   # phone mm (w, h, corner radius)
DEPTH = 8.2
FW, FH = int(PW * S), int(PH * S)
FONT = '/usr/share/fonts/opentype/inter/Inter-%s.otf'
def font(w, sz):
    try: return ImageFont.truetype(FONT % w, int(sz))
    except Exception: return ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', int(sz))

def rrect_mask(w, h, r, ss=4):
    m = Image.new('L', (w * ss, h * ss), 0)
    ImageDraw.Draw(m).rounded_rectangle([0, 0, w * ss - 1, h * ss - 1], r * ss, fill=255)
    return m.resize((w, h), Image.LANCZOS)

# ---------------- the front face (glass, bezel, screen) ----------------
face = Image.new('RGBA', (FW, FH), (0, 0, 0, 0))
body = Image.new('RGBA', (FW, FH), (8, 12, 22, 255))
face.paste(body, (0, 0), rrect_mask(FW, FH, int(PR * S)))
bz = int(2.6 * S)          # bezel
SW, SH = FW - 2 * bz, FH - 2 * bz
scr = np.zeros((SH, SW, 3), np.float32)
yy, xx = np.mgrid[0:SH, 0:SW].astype(np.float32)
# screen ground: deep navy, lifted toward the trace
top = np.array([7, 16, 38], np.float32); bot = np.array([4, 9, 22], np.float32)
g = (yy / SH)[..., None]
scr[:] = top * (1 - g) + bot * g
cy0 = SH * 0.40
glow = np.exp(-((yy - cy0) / (SH * 0.16)) ** 2)[..., None]
scr += glow * np.array([10, 40, 62], np.float32) * 0.55
screen = Image.fromarray(np.clip(scr, 0, 255).astype(np.uint8), 'RGB').convert('RGBA')
d = ImageDraw.Draw(screen)

# phonocardiogram: S1 (lower, longer) and S2 (higher, shorter) bursts, ~72 bpm, with a faint murmur-free baseline
def pcg(t, noise=0.012):
    v = np.zeros_like(t); beat = 0.83
    ph = np.mod(t, beat)
    for c, w, f, a in ((0.06, 0.028, 46, 1.0), (0.37, 0.020, 70, 0.72)):
        env = np.exp(-((ph - c) / w) ** 2)
        v += a * env * np.sin(2 * math.pi * f * (ph - c))
    rng = np.random.default_rng(3)
    return v + noise * rng.standard_normal(t.shape)

trace = Image.new('RGBA', (SW, SH), (0, 0, 0, 0)); td = ImageDraw.Draw(trace)
N = 1400; t = np.linspace(0.0, 2.9, N); v = pcg(t)
x0, x1 = SW * 0.07, SW * 0.93; amp = SH * 0.085
pts = [(x0 + (x1 - x0) * i / (N - 1), cy0 - v[i] * amp) for i in range(N)]
# grid
for k in range(0, 13):
    gx = x0 + (x1 - x0) * k / 12
    td.line([(gx, cy0 - amp * 1.45), (gx, cy0 + amp * 1.45)], fill=(90, 170, 220, 26), width=1)
for k in (-1, 0, 1):
    td.line([(x0, cy0 + k * amp * 1.2), (x1, cy0 + k * amp * 1.2)], fill=(90, 170, 220, 30 if k else 46), width=1)
gl = Image.new('RGBA', (SW, SH), (0, 0, 0, 0)); gd = ImageDraw.Draw(gl)
gd.line(pts, fill=(60, 220, 255, 200), width=int(S * 1.6), joint='curve')
gl = gl.filter(ImageFilter.GaussianBlur(S * 2.2))
trace = Image.alpha_composite(trace, gl); td = ImageDraw.Draw(trace)
td.line(pts, fill=(170, 245, 255, 255), width=max(2, int(S * 0.55)), joint='curve')
# the playhead: the last beat highlighted in magenta
px = x0 + (x1 - x0) * 0.86
td.line([(px, cy0 - amp * 1.6), (px, cy0 + amp * 1.6)], fill=(255, 70, 160, 210), width=max(2, int(S * 0.4)))
screen = Image.alpha_composite(screen, trace); d = ImageDraw.Draw(screen)

# state-space reconstruction (delay embedding of the same signal), lower half
emb = Image.new('RGBA', (SW, SH), (0, 0, 0, 0)); ed = ImageDraw.Draw(emb)
tt = np.linspace(0, 0.83, 3000); vv = pcg(tt, 0.0)
lag = 17; a = vv[:-lag]; b = vv[lag:]
cx, cyE, R = SW * 0.5, SH * 0.71, SW * 0.30
m = (np.abs(a) > 0.01) | (np.abs(b) > 0.01)
P = [(cx + a[i] * R * 0.95, cyE - b[i] * R * 0.95) for i in range(len(a)) if m[i]]
for i in range(0, len(P) - 1, 1):
    c = i / len(P)
    col = (int(70 + 185 * c), int(215 - 140 * c), int(255 - 70 * c), 170)
    ed.line([P[i], P[i + 1]], fill=col, width=max(1, int(S * 0.35)))
eg = emb.filter(ImageFilter.GaussianBlur(S * 1.4))
screen = Image.alpha_composite(screen, eg); screen = Image.alpha_composite(screen, emb); d = ImageDraw.Draw(screen)
d.line([(cx - R * 1.15, cyE), (cx + R * 1.15, cyE)], fill=(120, 190, 230, 40), width=1)
d.line([(cx, cyE - R * 0.95), (cx, cyE + R * 0.95)], fill=(120, 190, 230, 40), width=1)

# minimal UI type (the app's own recording-site wording: Aortic / Lung / P)
f1, f2, f3 = font('Medium', S * 3.3), font('Regular', S * 2.6), font('Medium', S * 5.6)
d.text((SW * 0.07, SH * 0.075), 'Recording', font=f2, fill=(150, 200, 230, 255))
d.text((SW * 0.07, SH * 0.105), 'Aortic site', font=f1, fill=(235, 245, 252, 255))
d.ellipse([SW * 0.765, SH * 0.083, SW * 0.765 + S * 2.4, SH * 0.083 + S * 2.4], fill=(255, 70, 160, 255))
d.text((SW * 0.835, SH * 0.077), '0:14', font=f2, fill=(235, 245, 252, 255))
d.text((SW * 0.07, SH * 0.235), 'Heart sounds', font=f2, fill=(120, 175, 210, 255))
d.text((SW * 0.07, SH * 0.555), 'State space', font=f2, fill=(120, 175, 210, 255))
# bottom tabs: Aortic / Lung / P (the app's recording sites)
ty = SH * 0.905
for i, lab in enumerate(('Aortic', 'Lung', 'P')):
    bx = SW * (0.07 + i * 0.30); bw = SW * 0.26
    on = i == 0
    d.rectangle([bx, ty, bx + bw, ty + S * 6.6], outline=(90, 200, 240, 255 if on else 90), width=max(1, int(S * 0.3)),
                fill=(20, 70, 110, 255) if on else None)
    tw = d.textlength(lab, font=f2)
    d.text((bx + bw / 2 - tw / 2, ty + S * 1.8), lab, font=f2, fill=(235, 245, 252, 255) if on else (140, 185, 215, 255))
# camera punch-hole
d.ellipse([SW / 2 - S * 1.5, S * 2.2, SW / 2 + S * 1.5, S * 5.2], fill=(2, 3, 6, 255))
d.ellipse([SW / 2 - S * 0.6, S * 3.1, SW / 2 + S * 0.0, S * 3.7], fill=(30, 50, 90, 255))

face.paste(screen, (bz, bz), rrect_mask(SW, SH, int((PR - 2.6) * S)))
# thin bright rim on the glass edge
rim = Image.new('RGBA', (FW, FH), (0, 0, 0, 0)); rd = ImageDraw.Draw(rim)
rd.rounded_rectangle([1, 1, FW - 2, FH - 2], int(PR * S), outline=(150, 175, 205, 150), width=max(2, int(S * 0.3)))
face = Image.alpha_composite(face, rim)

# ---------------- 3D placement ----------------
SSX = 2
OW, OH = 1150 * SSX, 1480 * SSX
yaw, pitch, roll = math.radians(-24), math.radians(9), math.radians(-7)
def rot(p):
    x, y, z = p
    # roll (z)
    x, y = x * math.cos(roll) - y * math.sin(roll), x * math.sin(roll) + y * math.cos(roll)
    # yaw (y)
    x, z = x * math.cos(yaw) + z * math.sin(yaw), -x * math.sin(yaw) + z * math.cos(yaw)
    # pitch (x)
    y, z = y * math.cos(pitch) - z * math.sin(pitch), y * math.sin(pitch) + z * math.cos(pitch)
    return x, y, z
CAM = 520.0; SC = 8.4 * SSX
def proj(p):
    x, y, z = rot(p); k = CAM / (CAM + z)
    return OW / 2 + x * k * SC, OH / 2 + y * k * SC
def corners(z):
    return [proj((-PW / 2, -PH / 2, z)), proj((PW / 2, -PH / 2, z)), proj((PW / 2, PH / 2, z)), proj((-PW / 2, PH / 2, z))]
def coeffs(dst, src):
    A = []; B = []
    for (x, y), (u, v) in zip(dst, src):
        A.append([x, y, 1, 0, 0, 0, -u * x, -u * y]); B.append(u)
        A.append([0, 0, 0, x, y, 1, -v * x, -v * y]); B.append(v)
    return np.linalg.solve(np.array(A, float), np.array(B, float)).tolist()
srcq = [(0, 0), (FW, 0), (FW, FH), (0, FH)]
def place(img, z):
    return img.transform((OW, OH), Image.PERSPECTIVE, coeffs(corners(z), srcq), Image.BICUBIC)

canvas = Image.new('RGBA', (OW, OH), (0, 0, 0, 0))
# soft aqua glow behind the phone
gw = Image.new('RGBA', (OW, OH), (0, 0, 0, 0)); gdw = ImageDraw.Draw(gw)
gdw.ellipse([OW * 0.16, OH * 0.12, OW * 0.84, OH * 0.88], fill=(40, 170, 220, 70))
# (the glow is drawn live by field.js, so the render has no soft edge of its own to show a seam)
# extruded aluminium edge: silhouette layers from back to front, lit from the upper left
sil = rrect_mask(FW, FH, int(PR * S))
NL = 90
for i in range(NL + 1):
    z = DEPTH * (1 - i / NL)
    f = i / NL
    lv = 0.30 + 0.55 * (0.5 - 0.5 * math.cos(f * math.pi))
    col = (int(70 * lv + 30), int(86 * lv + 34), int(110 * lv + 44), 255)
    layer = Image.new('RGBA', (FW, FH), col); layer.putalpha(sil)
    canvas = Image.alpha_composite(canvas, place(layer, z))
# a specular line along the front edge of the frame
edge = Image.new('RGBA', (FW, FH), (0, 0, 0, 0)); ImageDraw.Draw(edge).rounded_rectangle([0, 0, FW - 1, FH - 1], int(PR * S), outline=(205, 222, 240, 230), width=int(S * 0.9))
canvas = Image.alpha_composite(canvas, place(edge, 0.25))
canvas = Image.alpha_composite(canvas, place(face, 0))
# glass reflection: a soft diagonal sheen across the upper face
sh = np.zeros((FH, FW), np.float32); Y, X = np.mgrid[0:FH, 0:FW].astype(np.float32)
u = (X / FW) * 0.9 + (Y / FH) * 1.6
sh += 0.10 * np.exp(-((u - 0.55) / 0.16) ** 2) + 0.05 * np.exp(-((u - 0.95) / 0.05) ** 2)
sh *= np.array(sil, np.float32) / 255
shi = Image.new('RGBA', (FW, FH), (225, 240, 255, 0)); shi.putalpha(Image.fromarray(np.clip(sh * 255, 0, 255).astype(np.uint8)))
canvas = Image.alpha_composite(canvas, place(shi, -0.05))
# side buttons on the right edge (visible thanks to the yaw)
for (y0, y1) in ((-38, -24), (-16, 8)):
    bt = [proj((PW / 2 + 0.6, y0, DEPTH * 0.3)), proj((PW / 2 + 0.6, y1, DEPTH * 0.3)), proj((PW / 2 + 0.6, y1, DEPTH * 0.7)), proj((PW / 2 + 0.6, y0, DEPTH * 0.7))]
    ImageDraw.Draw(canvas).polygon(bt, fill=(120, 136, 160, 255))
canvas = canvas.resize((OW // SSX, OH // SSX), Image.LANCZOS)
bb = canvas.getbbox(); print('bbox', bb)
pad = 24
canvas = canvas.crop((max(0, bb[0] - pad), max(0, bb[1] - pad), min(canvas.width, bb[2] + pad), min(canvas.height, bb[3] + pad)))
canvas.save(OUT)
print('wrote', OUT, canvas.size)
