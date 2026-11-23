#!/bin/sh
# rebuild /lagunadiagnostics/ from the parts
cd "$(dirname "$0")" && python3 assemble.py && cd ../.. && node build.js src/lagunadiagnostics.src.html ../lagunadiagnostics/index.html && cp home/lagunadiagnostics/hero.webp home/lagunadiagnostics/fav.png ../lagunadiagnostics/
