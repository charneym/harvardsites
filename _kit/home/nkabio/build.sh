#!/bin/sh
# rebuild /nkabio/ from the parts
cd "$(dirname "$0")" && python3 assemble.py && cd ../.. && node build.js src/nkabio.src.html ../nkabio/index.html && cp home/nkabio/hero.webp home/nkabio/fav.png ../nkabio/
