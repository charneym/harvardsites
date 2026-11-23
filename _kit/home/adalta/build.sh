#!/bin/sh
# rebuild /adalta/ from the parts
cd "$(dirname "$0")" && python3 assemble.py && cd ../.. && node build.js src/adalta.src.html ../adalta/index.html && cp home/adalta/hero.webp home/adalta/fav.png ../adalta/
