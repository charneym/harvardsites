#!/bin/sh
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../aatru && cp hero.webp fav.svg ../../../aatru/ && cd ../.. && node build.js src/aatru.src.html ../aatru/index.html
