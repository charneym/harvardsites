#!/bin/sh
# rebuild /cantonitx/ from the parts
cd "$(dirname "$0")" && python3 assemble.py && cd ../.. && node build.js src/cantonitx.src.html ../cantonitx/index.html && cp home/cantonitx/hero.webp home/cantonitx/fav.png ../cantonitx/
