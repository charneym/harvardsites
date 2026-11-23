#!/bin/sh
# rebuild /amporin/ from the parts
cd "$(dirname "$0")" && python3 assemble.py && cd ../.. && node build.js src/amporin.src.html ../amporin/index.html && cp home/amporin/hero.webp home/amporin/fav.png ../amporin/
