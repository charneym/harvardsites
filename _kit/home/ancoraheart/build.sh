#!/bin/sh
# rebuild /ancoraheart/ from the parts
cd "$(dirname "$0")" && python3 assemble.py && cd ../.. && node build.js src/ancoraheart.src.html ../ancoraheart/index.html && cp home/ancoraheart/hero.webp home/ancoraheart/fav.png ../ancoraheart/
