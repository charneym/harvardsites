#!/bin/sh
# rebuild /spima-therapeutics/ from the parts
cd "$(dirname "$0")" && python3 assemble.py && cd ../.. && node build.js src/spima-therapeutics.src.html ../spima-therapeutics/index.html && cp home/spima-therapeutics/hero.webp home/spima-therapeutics/fav.png ../spima-therapeutics/
