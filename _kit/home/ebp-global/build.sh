#!/bin/bash
# EBP home, v4 (2026-11-26 rebrand): hand-written page on the v3 layout with the sent sites' motion (after teknomedical/v4).
# Inlines the redrawn logo, fonts, gsap, lenis, buildout and nssfix. Photos live in ../../../ebp-global/img (from ebpglobal.com).
set -e
cd "$(dirname "$0")"
python3 - <<'PY'
import pathlib
h=pathlib.Path('v4.src.html').read_text()
logo=pathlib.Path('logo.svg').read_text().strip()
n=pathlib.Path('../../lib/nssfix.js').read_text().rstrip('\n')
assert h.count('<!--@nssfix-->')==1
h=h.replace('<!--@logo-->',logo).replace('<!--@nssfix-->',n)
pathlib.Path('.v4.build.html').write_text(h)
PY
cd ../.. && node build.js home/ebp-global/.v4.build.html ../ebp-global/index.html
rm -f home/ebp-global/.v4.build.html
