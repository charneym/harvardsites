#!/usr/bin/env python3
"""intra lockup (logo_parts.txt from logoparts.py) -> brand.html, pre.html, footlogo.txt."""
import pathlib
H = pathlib.Path(__file__).resolve().parent
d = eval((H/'logo_parts.txt').read_text())
def lock(cls, sub=True):
    vb = '-1 -1 192 92' if sub else '-1 -1 192 63'
    s = f'<svg class="{cls}" viewBox="{vb}" aria-hidden="true"><path class="ior" d="{d["red"]}"/><path class="ioh" d="{d["hl"]}"/>'
    if sub: s += f'<path class="iog" d="{d["sub"]}"/>'
    return s + '</svg>'
(H/'brand.html').write_text('<a href="#/" class="brand" id="brand" aria-label="intra special catheters GmbH, Startseite"><span class="iol">' + lock('iom') + '</span></a>\n')
(H/'pre.html').write_text('''<div id="pre" aria-hidden="true">
  <div class="pc">
    <div class="mk"><span class="plk">''' + lock('iof') + '''</span></div>
    <div class="wm" hidden><span></span></div>
  </div>
  <span class="lab pl">Spezialkatheter<span class="nomob"> · seit 1977</span></span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>
''')
(H/'footlogo.txt').write_text(lock('bigsvg iom', False))
print('ok')
