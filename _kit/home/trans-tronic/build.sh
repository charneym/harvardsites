#!/bin/bash
# Trans-Tronic home, v4: hand-written page on the v3 layout with the sent sites' motion. Inlines the logo, fonts, gsap, lenis, buildout and nssfix.
set -e
cd "$(dirname "$0")"
python3 - <<'PY'
import pathlib,re
h=pathlib.Path('v4.src.html').read_text()
n=pathlib.Path('../../lib/nssfix.js').read_text().rstrip('\n')
assert h.count('<!--@nssfix-->')==1
svg=re.search(r'<svg class="ttm".*?</svg>',pathlib.Path('brand.html').read_text(),re.S).group(0)
svg=svg.replace('role="img" aria-label="Trans-Tronic"','aria-hidden="true" focusable="false"')
h=re.sub(r'<!--@logo:(\w)-->',lambda m:svg.replace('ttNs','ttNs'+m.group(1)),h)
pathlib.Path('.v4.build.html').write_text(h.replace('<!--@nssfix-->',n))
PY
cd ../.. && node build.js home/trans-tronic/.v4.build.html ../trans-tronic/index.html
rm -f home/trans-tronic/.v4.build.html
