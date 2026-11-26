#!/usr/bin/env python3
"""CEATEC lockup as filled SVG paths (DR2): the wordmark CEATEC with the red AT, as on the firm's logo, set in Jost 700,
and the descriptor MEDIZINTECHNIK in Jost 500, tracked to the wordmark width. Writes brand.html, pre.html, footlogo.txt."""
import pathlib
H = pathlib.Path(__file__).resolve().parent
d = eval((H/'logo_parts.txt').read_text())
W = d['W']
def lock(cls, sub=True):
    vb = f'-1 -1 {W+2:.1f} {110 if sub else 74}'
    s = f'<svg class="{cls}" viewBox="{vb}" aria-hidden="true"><path class="ceg" d="{d["gr"]}"/><path class="cer" d="{d["red"]}"/>'
    if sub: s += f'<path class="ces" d="{d["sub"]}"/>'
    return s + '</svg>'
(H/'brand.html').write_text('<a href="#/" class="brand" id="brand" aria-label="CEATEC Medizintechnik GmbH, Startseite"><span class="cel">' + lock('cem') + '</span></a>\n')
(H/'pre.html').write_text('''<div id="pre" aria-hidden="true">
  <div class="pc">
    <div class="mk"><span class="plk">''' + lock('cef') + '''</span></div>
    <div class="wm" hidden><span></span></div>
  </div>
  <span class="lab pl">Chirurgische Instrumente<span class="nomob"> · Wurmlingen</span></span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>
''')
(H/'footlogo.txt').write_text(lock('bigsvg cem', False))
print('ok', W)
