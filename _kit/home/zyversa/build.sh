#!/bin/sh
# rebuild /zyversa/ from the parts
cd "$(dirname "$0")" && python3 assemble.py && cd ../.. && mkdir -p ../zyversa && node build.js src/zyversa.src.html ../zyversa/index.html && mkdir -p ../zyversa && cp home/zyversa/hero.webp home/zyversa/fav.png ../zyversa/
