#!/bin/sh
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../gerdcare && cp hero.webp fav.png ../../../gerdcare/ && cd ../.. && node build.js src/gerdcare.src.html ../gerdcare/index.html
