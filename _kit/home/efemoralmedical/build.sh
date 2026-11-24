#!/bin/sh
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../efemoralmedical && cp hero.webp fav.png ../../../efemoralmedical/ && cd ../.. && node build.js src/efemoralmedical.src.html ../efemoralmedical/index.html
