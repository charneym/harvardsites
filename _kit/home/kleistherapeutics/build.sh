#!/bin/sh
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../kleistherapeutics && cp hero.webp fav.png ../../../kleistherapeutics/ && cd ../.. && node build.js src/kleistherapeutics.src.html ../kleistherapeutics/index.html
