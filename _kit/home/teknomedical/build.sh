#!/bin/bash
# Tekno-Medical home, v4: hand-written page on the v3 layout with the sent sites' motion. Inlines fonts, gsap, lenis, buildout and nssfix.
set -e
cd "$(dirname "$0")"
python3 - <<'PY'
import pathlib
h=pathlib.Path('v4.src.html').read_text()
n=pathlib.Path('../../lib/nssfix.js').read_text().rstrip('\n')
assert h.count('<!--@nssfix-->')==1
pathlib.Path('.v4.build.html').write_text(h.replace('<!--@nssfix-->',n))
PY
cd ../.. && node build.js home/teknomedical/.v4.build.html ../teknomedical/index.html
rm -f home/teknomedical/.v4.build.html
