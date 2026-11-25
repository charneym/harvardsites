#!/bin/sh
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../tqc && cp hero.webp fav.png ../../../tqc/ && cd ../.. && node build.js src/tqc.src.html ../tqc/index.html
