#!/bin/sh
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../vivheart && cp hero.webp fav.png ../../../vivheart/ && cd ../.. && node build.js src/vivheart.src.html ../vivheart/index.html
