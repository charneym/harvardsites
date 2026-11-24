#!/bin/sh
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../immunostherapeutics && cp hero.webp fav.png logo.png ../../../immunostherapeutics/ && cd ../.. && node build.js src/immunostherapeutics.src.html ../immunostherapeutics/index.html
