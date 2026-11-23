#!/usr/bin/env python3
"""AW Technologies logo as SVG: the two-triangle mark redrawn as filled paths with the logo's own gradients (sampled from
logo-src.png, the 'AW T logo - positive' PNG on awtechnologies.dk), and the wordmark as an alpha mask of the real lettering
(cut from the same file, native resolution), filled with currentColor so it reads on ink and on bone."""
import base64, io, pathlib
import numpy as np
from PIL import Image
H = pathlib.Path(__file__).resolve().parent
im = Image.open(H/'logo-src.png').convert('RGBA')
a = np.array(im)
x0, x1, y0, y1 = 300, 1280, 228, 329
al = a[y0:y1, x0:x1, 3]
rgb = a[y0:y1, x0:x1, :3].astype(int)
# keep only the grey lettering (neutral pixels), as white with its alpha
neutral = (np.abs(rgb[..., 0]-rgb[..., 1]) < 18) & (np.abs(rgb[..., 1]-rgb[..., 2]) < 18)
m = np.where(neutral, al, 0).astype(np.uint8)
out = np.zeros((y1-y0, x1-x0, 4), np.uint8); out[..., :3] = 255; out[..., 3] = m
buf = io.BytesIO(); Image.fromarray(out).save(buf, 'PNG', optimize=True)
b64 = base64.b64encode(buf.getvalue()).decode()
svg = ('<svg xmlns="http://www.w3.org/2000/svg" class="lg-svg" viewBox="0 0 1280 330" role="img" aria-label="AW Technologies">'
 '<defs><linearGradient id="awgA" x1="0" y1="16" x2="70" y2="192" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4ba97d"/><stop offset=".55" stop-color="#1c6a73"/><stop offset="1" stop-color="#00446b"/></linearGradient>'
 '<linearGradient id="awgD" x1="120" y1="40" x2="150" y2="140" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#05315f" stop-opacity="0"/><stop offset="1" stop-color="#05315f" stop-opacity=".9"/></linearGradient>'
 '<linearGradient id="awgB" x1="0" y1="200" x2="422" y2="120" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#c9bf1c"/><stop offset=".45" stop-color="#8ea042"/><stop offset=".75" stop-color="#4d8a62"/><stop offset="1" stop-color="#26756e"/></linearGradient>'
 '<mask id="awgT" maskUnits="userSpaceOnUse" x="300" y="228" width="980" height="101" style="mask-type:alpha"><image href="data:image/png;base64,'+b64+'" x="300" y="228" width="980" height="101"/></mask></defs>'
 '<path d="M0 16L238 84L0 192Z" fill="url(#awgA)"/><path d="M0 192L238 84L150 112Z" fill="url(#awgD)"/>'
 '<path d="M0 191L422 0L199 301Z" fill="url(#awgB)"/>'
 '<rect x="300" y="228" width="980" height="101" fill="currentColor" mask="url(#awgT)"/></svg>')
(H/'logo.svg').write_text(svg)
print('logo.svg', len(svg))
