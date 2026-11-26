#!/bin/bash
# Gillard Cutting home, v4: hand-written page on the v3 layout with the sent sites' motion. Inlines fonts, gsap, lenis, buildout and nssfix.
set -e
cd "$(dirname "$0")"
python3 - <<'PY'
import pathlib
h=pathlib.Path('v4.src.html').read_text()
n=pathlib.Path('../../lib/nssfix.js').read_text().rstrip('\n')
assert h.count('<!--@nssfix-->')==1
pathlib.Path('.v4.build.html').write_text(h.replace('<!--@nssfix-->','<script>'+n+'</script>' if not n.lstrip().startswith('<script') else n))
PY
cd ../.. && node build.js home/gillard-cutting/.v4.build.html ../gillard-cutting/index.html
rm -f home/gillard-cutting/.v4.build.html
