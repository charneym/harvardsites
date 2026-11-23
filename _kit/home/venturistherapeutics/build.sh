#!/bin/sh
# rebuild /venturistherapeutics/ from the parts
cd "$(dirname "$0")" && python3 assemble.py && cd ../.. && node build.js src/venturistherapeutics.src.html ../venturistherapeutics/index.html && cp home/venturistherapeutics/hero.webp home/venturistherapeutics/fav.png home/venturistherapeutics/logo-w.png ../venturistherapeutics/
