#!/bin/sh
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../cardiomech && cp hero.webp fav.png ../../../cardiomech/ && cd ../.. && node build.js src/cardiomech.src.html ../cardiomech/index.html
