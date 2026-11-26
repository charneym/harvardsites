#!/bin/bash
# Ravenwood Packaging home, v4: hand-written page on the v3 layout with the sent sites' motion. Inlines fonts, gsap, lenis, buildout, nssfix and their wordmark (from ravenwood.co.uk's own logo SVG).
set -e
cd "$(dirname "$0")"
python3 - <<'PY'
import pathlib
h=pathlib.Path('v4.src.html').read_text()
n=pathlib.Path('../../lib/nssfix.js').read_text().rstrip('\n')
l=pathlib.Path('logo.symbol.html').read_text()
assert h.count('<!--@nssfix-->')==1 and h.count('<!--@logo-->')==1
pathlib.Path('.v4.build.html').write_text(h.replace('<!--@nssfix-->',n).replace('<!--@logo-->',l))
PY
cd ../.. && node build.js home/ravenwood-packaging/.v4.build.html ../ravenwood-packaging/index.html
rm -f home/ravenwood-packaging/.v4.build.html
