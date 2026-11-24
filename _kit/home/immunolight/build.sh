#!/bin/sh
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../immunolight && cp hero.webp fav.svg ../../../immunolight/ && cd ../.. && node build.js src/immunolight.src.html ../immunolight/index.html
