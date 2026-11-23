#!/bin/sh
# rebuild /thiogenesis/ from the parts
cd "$(dirname "$0")" && python3 assemble.py && cd ../.. && node build.js src/thiogenesis.src.html ../thiogenesis/index.html && cp home/thiogenesis/hero.webp home/thiogenesis/fav.png ../thiogenesis/
