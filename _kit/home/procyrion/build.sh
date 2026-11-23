#!/bin/sh
# rebuild /procyrion/ from the parts
cd "$(dirname "$0")" && python3 assemble.py && cd ../.. && node build.js src/procyrion.src.html ../procyrion/index.html && cp home/procyrion/hero.webp home/procyrion/fav.png ../procyrion/
