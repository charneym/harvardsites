#!/bin/bash
# Labfacility home, v4: hand-written page (v4.src.html) on the v3 layout with the sent sites' motion. Inlines logo, meta, fonts, gsap, lenis, buildout and nssfix.
set -e
cd "$(dirname "$0")"
python3 - <<'PY'
import pathlib,re
h=pathlib.Path('v4.src.html').read_text()
b=pathlib.Path('brand.html').read_text()
logo=b[b.index('<span class="lfwm">'):b.rindex('</a>')]
meta=pathlib.Path('meta.html').read_text().replace("fill='%230c1520'","fill='%23ffffff'").replace("fill='%23e2474c'","fill='%23c2272d'")
n=pathlib.Path('../../lib/nssfix.js').read_text().rstrip('\n')
assert h.count('<!--@nssfix-->')==1 and h.count('@@LOGO@@')==3
h=h.replace('@@LOGO@@',logo).replace('<!--@meta-->',meta.strip()).replace('<!--@nssfix-->',n)
pathlib.Path('.v4.build.html').write_text(h)
PY
cd ../.. && node build.js home/labfacility/.v4.build.html ../labfacility/index.html
rm -f home/labfacility/.v4.build.html
