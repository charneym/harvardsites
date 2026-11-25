#!/bin/sh
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../haption && cp hero.webp fav.png ../../../haption/ && cd ../.. && node build.js src/haption.src.html ../haption/index.html
