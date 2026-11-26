#!/bin/bash
# Tekno-Medical home, structure v3: hand-written page (no template skeleton). Inlines fonts, gsap, buildout and nssfix.
set -e
cd "$(dirname "$0")"
python3 - <<'PY'
import pathlib
h=pathlib.Path('v3.src.html').read_text()
n=pathlib.Path('../../lib/nssfix.js').read_text().rstrip('\n')
assert h.count('<!--@nssfix-->')==1
pathlib.Path('.v3.build.html').write_text(h.replace('<!--@nssfix-->',n))
PY
cd ../.. && node build.js home/teknomedical/.v3.build.html ../teknomedical/index.html
rm -f home/teknomedical/.v3.build.html
