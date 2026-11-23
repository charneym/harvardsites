#!/bin/sh
# rebuild /tellustherapeutics/ from the parts
cd "$(dirname "$0")" && python3 assemble.py && cd ../.. && node build.js src/tellustherapeutics.src.html ../tellustherapeutics/index.html && cp home/tellustherapeutics/hero.webp home/tellustherapeutics/fav.png home/tellustherapeutics/logo.png home/tellustherapeutics/mark.png ../tellustherapeutics/
