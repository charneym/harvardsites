#!/bin/sh
# rebuild /glycotherapeutics/ from the parts
cd "$(dirname "$0")" && python3 assemble.py && cd ../.. && node build.js src/glycotherapeutics.src.html ../glycotherapeutics/index.html && cp home/glycotherapeutics/hero.webp home/glycotherapeutics/fav.png home/glycotherapeutics/logo.png ../glycotherapeutics/
